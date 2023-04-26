import React from 'react'
import {StyleSheet, Text, View, Image, TextInput, Button, Linking } from 'react-native';
import { getAuth } from 'firebase/auth';
import * as Font from 'expo-font';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
const auth = getAuth();
const user = auth.currentUser;

const CustomComponent = ({navigation}) => {
    const [fontLoaded, setFontLoaded] = React.useState(false)
    Font.loadAsync({
      'Ubuntu': require('../assets/fonts/Ubuntu-Bold.ttf'),
      'NotoMedium':require('../assets/fonts/NotoSans-Medium.ttf')
    }).then(()=>{
      setFontLoaded(true )
    });
    const handlePress = ()=>{
      auth.signOut().then(()=>{
        navigation.navigate('Login',{screen:'Login'})
      }).catch((err)=>{
        console.log(err)
      })
    }

  return (
    <DrawerContentScrollView>
      <DrawerItem style={{backgroundColor:'#F6F1F1'}} label={()=><Text style={{fontSize:20}}>Home</Text>} onPress={()=>{
        navigation.toggleDrawer();
        navigation.navigate('Home')
      }} />
      <DrawerItem style={{backgroundColor:'#F6F1F1'}} label={()=><Text style={{fontSize:20}}>Plan</Text>} onPress={()=>{
        navigation.toggleDrawer();
        navigation.navigate('Plan')
      }} />
      <View style={{padding:10}}>
        <Button title={"Logout"} color='red' onPress={handlePress} />
      </View>
    </DrawerContentScrollView>
  )
}

export default CustomComponent