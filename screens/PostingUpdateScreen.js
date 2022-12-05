import React, { Component, useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import PostApi, { findPostByTitle, readImages, updatePost } from '../api/PostApi';
import ImageCropPicker from 'react-native-image-crop-picker';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('window').width;
const IMAGE_WIDTH = 100;
const ENABLED_SCROLL_WIDTH = Dimensions.get('window').width - IMAGE_WIDTH;

function PostingUpdateScreen({ navigation, props }) {
  //Multiple-image 선택
  const [images, setImages] = useState([]);
  const [form, setForm] = useState({ title: '', content: '' });
  const [isScrollable, setIsScrollable] = useState(false);
  const [oriImages, setOriImages] = useState([]);
  const [postDate, setPostDate] = useState('');
  // const { inputdata } = props;
  let oriImageLength = 0;

  //title, content, postDate, images,

  useEffect(() => {
    beforePostData();
  }, []);

  const beforePostData = async () => {
    // setForm({ title: inputdata.title, content: inputdata.content });
    // setImages(inputdata.images);
    // setOriImages(inputdata.images);
    // setPostDate(inputdata.postDate);
    const testTitle = '나는 도으히';
    const con = await findPostByTitle(testTitle);
    console.log('con' + con);
    const originalImgArr = await readImages(con[0].date);
    console.log('originalImgArr' + originalImgArr.date);
    const temp = [];
    setOriImages(originalImgArr);
    console.log('oriImage' + oriImages);
    oriImages.forEach((img) => {
      temp.push(img);
      const result = images.concat(temp);
      setImages(result);
    });

    oriImageLength = images.length;
  };

  const cropMulti = async (images) => {
    const props = {
      cropped: [],
      length: images.length,
      current: images.length,
    };

    for (let i = 0; i < images.length; i++) await cropCurrent(props, images);

    return props.cropped;
  };

  const cropCurrent = async (props, images) => {
    if (props.current) {
      const cImg = await crop(images[props.length - props.current]);
      if (images[props.length - props.current].exif.Latitude != undefined) {
        cImg.exif.Latitude = images[props.length - props.current].exif.Latitude;
        cImg.exif.Longitude = images[props.length - props.current].exif.Longitude;
        cImg.exif.DateTime = images[props.length - props.current].exif.DateTime;

        props.cropped.push(cImg);
        props.current = props.current - 1;
      } else {
        cImg.exif.DateTime = images[props.length - props.current].exif.DateTime;

        props.cropped.push(cImg);
        props.current = props.current - 1;
      }
    }
  };

  const crop = async (img) => {
    return await ImageCropPicker.openCropper({
      path: img.path,
      includeExif: true,
      width: 368,
      height: 368,
    });
  };

  const openPicker = async () => {
    try {
      ImageCropPicker.openPicker({
        width: 368,
        height: 368,
        multiple: true,
        cropping: true,
        includeExif: true,
      }).then((items) => {
        const temp = [];
        ('');
        cropMulti(items).then((e) => {
          items = e;
          items.forEach((item) => {
            if (
              images.filter((e) => {
                console.log(item, e);
                e.path === item.path;
              }).length <= 0
            )
              temp.push(item);
          });
          const result = images.concat(temp);
          setImages(result);
          console.log(result);
          const currentImageWidth =
            IMAGE_WIDTH * (result.length + oriImageLength + 8) * (result.length + oriImageLength); //padding = 8px
          currentImageWidth > ENABLED_SCROLL_WIDTH ? setIsScrollable(true) : setIsScrollable(false);
        });
      });
    } catch (e) {
      console.log(e.code, e.message);
    }
  };

  const onDelete = (value) => {
    const data = images.filter((item) => {
      return item?.path !== value?.path;
    });
    setImages(data);
    const currentImageWidth =
      IMAGE_WIDTH * (data.length + oriImageLength + 8) * (data.length + oriImageLength); //padding = 8px
    currentImageWidth > ENABLED_SCROLL_WIDTH ? setIsScrollable(true) : setIsScrollable(false);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          width={IMAGE_WIDTH}
          source={{
            uri: item.path,
          }}
          style={styles.media}
        />
        <TouchableOpacity
          onPress={() => onDelete(item, index)}
          activeOpacity={0.9}
          style={styles.buttonDelete}
        >
          <Text style={styles.titleDelete}>X</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const updatePost = async () => {
    let deleteImages = [];
    let addImages = [];

    deleteImages = oriImages.filter((it) => !images.includes(it));
    addImages = images.filter((it) => !oriImages.includes(it));
    //1. 이미지 배열 정제
    const mappingDeleteImage = deleteImages.map((e) => {
      if (e.exif.Latitude != undefined) {
        return {
          path: e.path,
          Latitude: e.exif.Latitude,
          Longitude: e.exif.Longitude,
          DateTime: e.exif.DateTime,
        };
      } else {
        return {
          path: e.path,
          DateTime: e.exif.DateTime,
        };
      }
    });
    const mappingAddImage = addImages.map((e) => {
      if (e.exif.Latitude != undefined) {
        return {
          path: e.path,
          Latitude: e.exif.Latitude,
          Longitude: e.exif.Longitude,
          DateTime: e.exif.DateTime,
        };
      } else {
        return {
          path: e.path,
          DateTime: e.exif.DateTime,
        };
      }
    });
    setForm(form);

    //2. updateP 호출
    await updatePost(postDate, form.title, form.content, mappingAddImage, mappingDeleteImage);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.headercontainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate('Main')}>
          <EntypoIcon name="cross" style={styles.cancelIcon} />
        </TouchableOpacity>
        <View style={styles.cancelButtonFiller} />
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            updatePost();
            navigation.navigate('Main');
          }}
        >
          <MaterialCommunityIconsIcon name="arrow-right" style={styles.nextIcon} />
        </TouchableOpacity>
      </View>

      <View style={[styles.titleWriteContainer]}>
        <TextInput
          defaultValue={form.title}
          placeholder="제목을 입력하세요."
          style={styles.titleinputStyle}
          onChangeText={(value) => {
            setForm({ ...form, title: value });
          }}
        />
      </View>
      <View style={[styles.contentsWritecontainer]}>
        <TextInput
          defaultValue={form.content}
          multiline
          returnKeyType="next"
          placeholder="내용을 입력하세요."
          textAlignVertical="top"
          style={styles.contentinputStyle}
          onChangeText={(value) => {
            setForm({ ...form, content: value });
          }}
        />
      </View>

      <View style={styles.addImageStack}>
        <View style={styles.addImage}>
          <TouchableOpacity style={styles.addImageButton} onPress={openPicker}>
            <FeatherIcon name="plus-square" style={styles.addImageIcon} />
          </TouchableOpacity>
        </View>
        <TouchableWithoutFeedback>
          <FlatList
            style={styles.container}
            data={images}
            keyExtractor={(item, index) => (item?.filename ?? item?.path) + index}
            renderItem={renderItem}
            horizontal={true}
            scrollEnabled={isScrollable}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  createPostHeader: {
    height: 56,
    width: width,
  },
  scrollArea: {
    width: '100%',
    height: 100,
    backgroundColor: 'rgba(155,155,155,1)',
  },
  addImage: {
    width: 100,
    height: 100,
  },
  addImageButton: {
    width: 100,
    height: 100,
  },
  addImageIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 80,
    height: 80,
    width: 80,
    marginTop: 10,
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  imageStack: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    flex: 3,
  },
  headercontainer: {
    backgroundColor: '#3F51B5',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    justifyContent: 'space-between',
    shadowColor: '#111',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
  },
  titleWrite: {
    width: width,
  },
  addImageStack: {
    flexDirection: 'row',
    width: width,
  },
  buttonDelete: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: '#ffffff92',
    borderRadius: 4,
  },
  titleDelete: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#000',
  },
  imageView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 24,
  },
  media: {
    marginLeft: 6,
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    marginBottom: 6,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  cancelButton: {
    padding: 11,
    marginLeft: 5,
    marginTop: 5,
  },
  cancelIcon: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 24,
  },
  cancelButtonFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  nextButton: {
    padding: 11,
    alignItems: 'center',
    marginRight: 5,
    marginTop: 5,
  },
  nextIcon: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 24,
  },
  titleWriteContainer: {
    borderBottomWidth: 1,
    borderColor: '#D9D5DC',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  titleinputStyle: {
    color: '#000',
    paddingRight: 5,
    fontSize: 16,
    alignSelf: 'stretch',
    flex: 1,
    lineHeight: 16,
  },
  contentsWritecontainer: {
    borderBottomWidth: 1,
    borderColor: '#D9D5DC',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 3,
    padding: 10,
  },
  contentinputStyle: {
    color: '#000',
    paddingRight: 5,
    fontSize: 16,
    alignSelf: 'stretch',
    flex: 1,
  },
});

export default PostingUpdateScreen;
