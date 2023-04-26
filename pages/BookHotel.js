import React, { useCallback, useEffect, useState } from 'react'
import { Button, Text, TouchableOpacity, View,TextInput, Image,Dimensions, BackHandler, Linking } from 'react-native'
import * as Font from 'expo-font';
import WebView from 'react-native-webview';
import { useFocusEffect } from '@react-navigation/native';

const BookHotel = ({navigation,route}) => {
  const [isLoading,setLoading] = useState(false);
      useFocusEffect(useCallback(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },5000)
    },[route]))

    const onBack = ()=>{
        navigation.navigate('Details',{
              placeName:route.params.cityName,
              iframe:route.params.iframe,
              rest_link:route.params.rest_link,
              rest_name:route.params.rest_name,
              resto2_name:route.params.resto2_name,
              resto2_link:route.params.resto2_link,
              hotel1_name:route.params.hotel1_name,
              hotel2_name:route.params.hotel2_name,
              hotel1_link:route.params.hotel1_link,
              hotel2_link:route.params.hotel2_link,
                        car_1:route.params.car_1,
                        car_2:route.params.car_2,
                        hospital_1:route.params.hospital_1,
                        hospital_2:route.params.hospital_2,
                        taxi_1:route.params.taxi_1,
                        taxi_2:route.params.taxi_2,
              bookLink:route.params.hotel1_link,

              cityName:route.params.cityName,
              days:route.params.days
        });
        return true;
    }
    const backhandler = BackHandler.addEventListener('hardwareBackPress',onBack)


  return (
    <View style={{flex:1,backgroundColor:'#BACDDB'}}>
      {isLoading && <Text style={{fontSize:20,padding:20,fontFamily:'NotoMedium'}}>Loading... </Text>}
      {!isLoading && <WebView source={{uri:route.params.bookLink}} />}
    </View>
  )
}

export default BookHotel