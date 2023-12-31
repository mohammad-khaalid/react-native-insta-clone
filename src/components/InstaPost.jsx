
import {Image, StyleSheet, Text, View, ScrollView,TouchableOpacity} from 'react-native';
import Img1 from '../assests/img1.jpeg';
import Img2 from '../assests/img2.jpeg';
import Img3 from '../assests/img3.jpeg';
import Img4 from '../assests/img4.jpeg';
import Img5 from '../assests/img5.jpeg';
import Img6 from '../assests/img6.jpeg';
import Img7 from '../assests/img7.jpeg';
import Img8 from '../assests/img8.jpeg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState,React } from 'react';

const Posts = [
  {
    id: 1,
    img: Img1,
    username: 'BlossomBelle',
    likes: '13,393',
    comments: '433',
    date: '1 week ago',
  },
  {
    id: 2,
    img: Img2,
    username: 'LavenderLuxe_',
    likes: '13,393',
    comments: '433',
    date: '1 week ago',
  },
  {
    id: 2,
    img: Img2,
    username: 'SunKissedSophie',
    likes: '13,393',
    comments: '433',
    date: '1 week ago',
  },
  {
    id: 3,
    img: Img3,
    username: 'RosyRadiance_',
    likes: '13,393',
    comments: '433',
    date: '1 week ago',
  },
  {
    id: 4,
    img: Img4,
    username: 'DiamondDuchess_',
    likes: '13,393',
    comments: '433',
    date: '1 week ago',
  },
  {
    id: 4,
    img: Img4,
    username: 'Golden_Glitter',
    likes: '13,393',
    comments: '433',
    date: '1 week ago',
  },
  {
    id: 5,
    img: Img5,
    username: 'CherryCharm_',
    likes: '13,393',
    comments: '433',
    date: '1 week ago',
  },
  {
    id: 6,
    img: Img6,
    username: 'EmeraldElegance_',
    likes: '13,393',
    comments: '433',
    date: '1 week ago',
  },
  {
    id: 7,
    img: Img7,
    username: 'LavenderLuxe_',
    likes: '13,393',
    comments: '433',
    date: '1 week ago',
  },
  {
    id: 8,
    img: Img8,
    username: 'BlossomBelle',
    likes: '13,393',
    comments: '433',
    date: '1 week ago',
  },
];

const InstaPost = () => {
    const [posts, setPosts] = useState(Posts);
  
    const handleHeartClick = (postId) => {
      setPosts(prevPosts => {
        return prevPosts.map(post => {
          if (post.id === postId) {
            return {
              ...post,
              filled: !post.filled
            };
          }
          return post;
        });
      });
    };
  
    return (
      <ScrollView>
        {posts.map(item => (
          <View style={styles.postBackground} key={item.id}>
            <View style={styles.postHeader}>
              <View style={styles.postTitle}>
                <Image source={Img1} style={styles.imageStyle} />
                <Text style={styles.usernameStyle}>{item.username}</Text>
              </View>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={25}
                color="white"
              />
            </View>
            <Image source={item.img} style={styles.postImage} />
            <View style={styles.postFooter}>
              <View style={styles.postFooterIcons}>
                <View style={styles.postFooterActions}>
                  <TouchableOpacity onPress={() => handleHeartClick(item.id)}>
                    <AntDesign
                      name={item.filled ? 'heart' : 'hearto'}
                      size={25}
                      color={item.filled ? 'red' : 'white'}
                      style={styles.iconStyle}
                    />
                  </TouchableOpacity>
                  <Feather
                    name="message-circle"
                    size={25}
                    color="white"
                    style={styles.commentIcon}
                  />
                  <Feather name="send" size={25} color="white" />
                </View>
                <FontAwesome name="bookmark-o" size={25} color="white" />
              </View>
              <Text style={styles.likeStyles}>{item.likes} likes</Text>
              <Text style={styles.captionSection}>
                <Text style={styles.captionUserStyle}>{item.username}</Text>
                <Text style={styles.caption}>
                  {' '}
                  Living like a Bird, Flying.. Want to fly, want to explore..
                </Text>
              </Text>
              <Text style={styles.viewComments}>
                View all {item.comments} comments
              </Text>
              <Text style={styles.postDate}>{item.date}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  };
  

const styles = StyleSheet.create({
  postBackground: {
    backgroundColor: 'black',
    paddingBottom: 15,
  },
  imageStyle: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  usernameStyle: {
    color: 'white',
    marginLeft: 8,
    fontSize: 13,
  },
  postTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postHeader: {
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postImage: {
    width: '100%',
    height: 320,
    marginVertical: 10,
  },
  postFooterActions: {
    flexDirection: 'row',
  },
  iconStyle: {
    marginRight: 18,
    marginTop: 1,
  },
  commentIcon: {
    marginLeft: 5,
    marginRight: 20,
  },
  postFooterIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likeStyles: {
    color: 'white',
    marginTop: 8,
    fontSize: 13,
  },
  captionUserStyle: {
    color: 'white',
    fontSize: 13,
    fontWeight: 800,
  },
  caption: {
    color: 'white',
    fontSize: 13,
  },
  captionSection: {
    marginTop: 5,
  },
  postFooter: {
    paddingHorizontal: 18,
  },
  viewComments: {
    color: 'grey',
    fontSize: 12,
    marginTop: 5,
  },
  postDate: {
    color: 'grey',
    fontSize: 10,
    marginTop: 3,
  },
});

export default InstaPost;