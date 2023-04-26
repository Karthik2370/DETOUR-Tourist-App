import React, { useCallback, useEffect, useState } from 'react'
import { Button, Text, TouchableOpacity, View,TextInput, Image,Dimensions, BackHandler, Linking, ScrollView } from 'react-native'
import * as Font from 'expo-font';
import WebView from 'react-native-webview';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';


const TripDetails = ({navigation,route}) => {
  const [days,setDays] = useState(0);
  var width = Dimensions.get('screen').width;
    const onBack = ()=>{
        navigation.navigate('Trip',{
              cityName:route.params.cityName,
              days:route.params.days
        });
        return true;
    }
    const backhandler = BackHandler.addEventListener('hardwareBackPress',onBack)

    useFocusEffect(useCallback(()=>{
      setDays(route.params.days)
    },[route]))

  return (
    

    <ScrollView overScrollMode='never' style={{backgroundColor:'#BACDDB'}}>
    <View style={{height:300}}>
    {/* <Text style={{padding:10,fontFamily:'NotoMedium',fontSize:20}}>View {route.params.placeName} On Maps</Text> */}
    <WebView
    source={{html: route.params.iframe}}
    startInLoadingState={true}
    scalesPageToFit={true}
    style={{
      width:'100%',
      backgroundColor:'#0000'
    }}
    />
    </View>

    <View style={{padding:10}}>
        <Text style={{fontFamily:'NotoMedium',fontSize:20}}>DeTour Suggested</Text>
    </View>
    <View style={{padding:10}}>
          <TouchableOpacity onPress={()=>{Linking.openURL(route.params.rest_link)}} style={{backgroundColor:'rgba(206, 89, 89,0.7)',borderRadius:10,padding:5,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Image style={{width:50,height:50}} source={require('../assets/images/food.png')} />
            <Text style={{color:'white',fontFamily:"Ubuntu",fontSize:20,marginLeft:3}}>{route.params.rest_name}</Text>
          </View>
            <Image style={{width:40,height:40}} source={require('../assets/images/arrow.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{Linking.openURL(route.params.resto2_link)}} style={{backgroundColor:'rgba(206, 89, 89,0.7)',borderRadius:10,padding:5,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
          <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Image style={{width:50,height:50}} source={require('../assets/images/food.png')} />
            <Text style={{color:'white',fontFamily:"Ubuntu",fontSize:20,marginLeft:3}}>{route.params.resto2_name}</Text>
          </View>
            <Image style={{width:40,height:40}} source={require('../assets/images/arrow.png')} />
          </TouchableOpacity>
    </View>
        <View style={{padding:10}}>
            <Text style={{fontFamily:'NotoMedium',fontSize:20,marginTop:20}}>Car Mechanics</Text>
        </View>
        <View style={{padding:10}}>
              <TouchableOpacity onPress={()=>{Linking.openURL(route.params.car_1)}} style={{backgroundColor:'rgba(145, 127, 179,0.7)',borderRadius:10,padding:5,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Image style={{width:50,height:50}} source={require('../assets/images/car.png')} />
                <Text style={{color:'white',fontFamily:"Ubuntu",fontSize:20,marginLeft:3}}>Mechanic 1</Text>
              </View>
                <Image style={{width:40,height:40}} source={require('../assets/images/arrow.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{Linking.openURL(route.params.car_2)}} style={{backgroundColor:'rgba(145, 127, 179,0.7)',borderRadius:10,padding:5,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:15}}>
              <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Image style={{width:50,height:50}} source={require('../assets/images/car.png')} />
                <Text style={{color:'white',fontFamily:"Ubuntu",fontSize:20,marginLeft:3}}>Mechanic 2</Text>
              </View>
                <Image style={{width:40,height:40}} source={require('../assets/images/arrow.png')} />
              </TouchableOpacity>
        </View>
        <View style={{padding:10}}>
            <Text style={{fontFamily:'NotoMedium',fontSize:20,marginTop:20}}>Nearby Hospitals</Text>
        </View>
        <View style={{padding:10}}>
              <TouchableOpacity onPress={()=>{Linking.openURL(route.params.hospital_1)}} style={{backgroundColor:'rgba(210, 19, 18,0.7)',borderRadius:10,padding:5,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Image style={{width:50,height:50}} source={require('../assets/images/hospital.png')} />
                <Text style={{color:'white',fontFamily:"Ubuntu",fontSize:20,marginLeft:10}}>Hospital 1</Text>
              </View>
                <Image style={{width:40,height:40}} source={require('../assets/images/arrow.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{Linking.openURL(route.params.hospital_2)}} style={{backgroundColor:'rgba(210, 19, 18,0.7)',borderRadius:10,padding:5,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:15}}>
              <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Image style={{width:50,height:50}} source={require('../assets/images/hospital.png')} />
                <Text style={{color:'white',fontFamily:"Ubuntu",fontSize:20,marginLeft:10}}>Hospital 2</Text>
              </View>
                <Image style={{width:40,height:40}} source={require('../assets/images/arrow.png')} />
              </TouchableOpacity>
        </View>
        <View style={{padding:10}}>
            <Text style={{fontFamily:'NotoMedium',fontSize:20,marginTop:20}}>Taxi Agencies</Text>
        </View>
        <View style={{padding:10}}>
              <TouchableOpacity onPress={()=>{Linking.openURL(route.params.taxi_1)}} style={{backgroundColor:'rgba(109, 93, 110,0.7)',borderRadius:10,padding:5,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Image style={{width:50,height:50}} source={require('../assets/images/hospital.png')} />
                <Text style={{color:'white',fontFamily:"Ubuntu",fontSize:20,marginLeft:10}}>Taxi 1</Text>
              </View>
                <Image style={{width:40,height:40}} source={require('../assets/images/arrow.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{Linking.openURL(route.params.taxi_2)}} style={{backgroundColor:'rgba(109, 93, 110,0.7)',borderRadius:10,padding:5,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:15}}>
              <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Image style={{width:50,height:50}} source={require('../assets/images/hospital.png')} />
                <Text style={{color:'white',fontFamily:"Ubuntu",fontSize:20,marginLeft:10}}>Taxi 2</Text>
              </View>
                <Image style={{width:40,height:40}} source={require('../assets/images/arrow.png')} />
              </TouchableOpacity>
        </View>

    {days === 1?<View></View>:<View style={{padding:10}}>
        <Text style={{fontFamily:'NotoMedium',fontSize:20}}>Hotels</Text>
    </View>}
    {days === 1?<View></View>:<View style={{padding:10}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Book',{
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
              bookLink:route.params.hotel1_link,
                        car_1:route.params.car_1,
                        car_2:route.params.car_2,
                        hospital_1:route.params.hospital_1,
                        hospital_2:route.params.hospital_2,
                        taxi_1:route.params.taxi_1,
                        taxi_2:route.params.taxi_2,
              cityName:route.params.cityName,
              days:route.params.days
          })} style={{backgroundColor:'rgba(137, 55, 95,0.7)',borderRadius:10,padding:5,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Image style={{width:50,height:50}} source={require('../assets/images/hotel.png')} />
            <Text style={{color:'white',fontFamily:"Ubuntu",fontSize:20,marginLeft:3}}>{route.params.hotel1_name}</Text>
          </View>
            <Image style={{width:40,height:40}} source={require('../assets/images/eye.png')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('Book',{
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
              bookLink:route.params.hotel2_link,
                        car_1:route.params.car_1,
                        car_2:route.params.car_2,
                        hospital_1:route.params.hospital_1,
                        hospital_2:route.params.hospital_2,
                        taxi_1:route.params.taxi_1,
                        taxi_2:route.params.taxi_2,
              cityName:route.params.cityName,
              days:route.params.days
          })} style={{backgroundColor:'rgba(137, 55, 95,0.7)',borderRadius:10,padding:5,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
          <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Image style={{width:50,height:50}} source={require('../assets/images/hotel.png')} />
            <Text style={{color:'white',fontFamily:"Ubuntu",fontSize:20,marginLeft:3}}>{route.params.hotel2_name}</Text>
          </View>
            <Image style={{width:40,height:40}} source={require('../assets/images/eye.png')} />
          </TouchableOpacity>
    </View>}
    </ScrollView>
  )
}

export default TripDetails