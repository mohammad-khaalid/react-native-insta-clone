import React from 'react'
import {Text,Image,StyleSheet,View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'
import logo from "../assests/logo.png"
const Header = () => {
  return (
    <View style={styles.headerBcakground}>
    <Image source ={logo} style={styles.logoStyle}></Image>
    <View style={styles.headerIcons}>
    <AntDesign name="hearto" size={25} style={styles.iconStyle} color="white" />
    <Ionicons
      name="ios-chatbubble-ellipses-outline"
      size={25}
      color="white"
    />
    </View>
  </View>
  )
}
const styles=StyleSheet.create({
  logoStyle: {
    height: 30,
    width: 110,
    
  }
,  
  headerBcakground :{
    backgroundColor:"black",
    paddingTop:60,
    paddingLeft:10,
    paddingVertical:15,
    paddingHorizontal:30,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  headerIcons:{
    flexDirection:'row',
  },
  iconStyle:{
    paddingHorizontal:20
  }

})

export default Header
