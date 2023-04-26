import React, { useEffect, useState } from 'react'
import {StyleSheet, Text, View, Image, TextInput, Button, Linking, ImageBackground } from 'react-native';
import { getAuth } from 'firebase/auth';
import * as Font from 'expo-font';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
const auth = getAuth();
const user = auth.currentUser
const CustomComponent = ({navigation}) => {
    const [fontLoaded, setFontLoaded] = React.useState(false)
    const [username,setUsername] = useState()
    const [render,setRender] = useState()
    Font.loadAsync({
      'Ubuntu': require('../assets/fonts/Ubuntu-Bold.ttf'),
      'NotoMedium':require('../assets/fonts/NotoSans-Medium.ttf')
    }).then(()=>{
      setFontLoaded(true)
    });
    const handlePress = ()=>{
      auth.signOut().then(()=>{
        navigation.replace('Login')
      }).catch((err)=>{
        console.log(err)
      })
    }
    // useEffect(()=>{
    //   if (!auth.currentUser){
    //     setRender(!render)
    //   }
    //   setUsername(auth.currentUser.email)
    //   console.log(username)
    // },[render])
  return (
    <ScrollView style={{backgroundColor:'#ECF2FF',flex:1}}>
    <View style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#FFB4B4',borderBottomLeftRadius:80,borderBottomRightRadius:80}}>
      <Image source={require('../assets/images/logo.png')} style={{height:140,width:140}} />
    </View>
    <Text style={{fontSize:28,fontFamily:'Ubuntu',textAlign:'center',marginTop:20}}>Welcome {auth.currentUser.email.split('@')[0] || "User"} </Text>
    <Text style={{textAlign:'center',fontSize:20,marginTop:10,fontFamily:'NotoMedium'}}>What are you looking for?</Text>
    <TouchableOpacity onPress={()=>navigation.navigate('Plan')} style={{padding:20,marginTop:20}}>
        <ImageBackground on source={{uri:'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbGxpbmd8ZW58MHx8MHx8&w=1000&q=80'}} resizeMode='cover' imageStyle={{borderRadius:15,backgroundColor:'black',opacity:0.7}}>
        <View style={{width:100,height:100,padding:10,display:'flex',justifyContent:'center'}}>
          <Text style={{ fontSize:30,fontFamily:'Ubuntu',color:'white',width:200,textShadowColor:'black',textShadowOffset:{width:-1,height:3},textShadowRadius:5}}>Plan a trip</Text>
          {/* <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/32/32213.png'}} style={{width:50,height:50,marginRight:'auto'}} /> */}
        </View>
        </ImageBackground>
    </TouchableOpacity>

    <View style={{padding:20,marginTop:20}}>
        <ImageBackground source={{uri:'https://wallpapers.com/images/featured/ibk7fgrvtvhs7qzg.jpg'}} resizeMode='cover' imageStyle={{borderRadius:15,backgroundColor:'black',opacity:0.4}}>
        <View style={{width:100,height:100,padding:10,display:'flex',justifyContent:'center'}}>
          <Text style={{ fontSize:30,fontFamily:'Ubuntu',color:'white',width:200,textShadowColor:'black',textShadowOffset:{width:-1,height:3},textShadowRadius:5}}>About Us</Text>
          {/* <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/32/32213.png'}} style={{width:50,height:50,marginRight:'auto'}} /> */}
        </View>
        </ImageBackground>
    </View>

    <View style={{padding:20,marginTop:20}}>
        <ImageBackground source={{uri:'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsbGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80'}} resizeMode='cover' imageStyle={{borderRadius:15,backgroundColor:'black',opacity:0.7}}>
        <View style={{width:100,height:100,padding:10,display:'flex',justifyContent:'center'}}>
          <Text style={{ fontSize:30,fontFamily:'Ubuntu',color:'white',width:200,textShadowColor:'black',textShadowOffset:{width:-1,height:3},textShadowRadius:5}}>Help</Text>
          {/* <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/32/32213.png'}} style={{width:50,height:50,marginRight:'auto'}} /> */}
        </View>
        </ImageBackground>
    </View>
    </ScrollView>

  )
}

export default CustomComponent