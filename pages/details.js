import React, { useCallback, useEffect, useState } from 'react'
import { Button, Text, TouchableOpacity, View,TextInput, Image, BackHandler,RefreshControl } from 'react-native'
import * as Font from 'expo-font';
import { collection, getDocs,getDoc } from "firebase/firestore";
import {db} from '../firebase'
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';


const Details = ({navigation,route}) => {

    const [data,setData] = useState({})
    const [loaded,setLoaded] = useState(false);
    const [fontLoaded, setFontLoaded] = React.useState(false)
    const [selectedDays,setDays] = React.useState(0)
    const [refresh,setRefresh] = useState(false)
    Font.loadAsync({
      'Ubuntu': require('../assets/fonts/Ubuntu-Bold.ttf'),
      'NotoMedium':require('../assets/fonts/NotoSans-Medium.ttf')
    }).then(()=>{
      setFontLoaded(true)
    });
    const onBack = ()=>{
        navigation.navigate('Plan',{
        });
        return true;
    }
    const backhandler = BackHandler.addEventListener('hardwareBackPress',onBack)
    const getData = (async(city,day)=>{
      setData({})
      setLoaded(true)
        const querySnapshot = await getDocs(collection(db, `${city}/data/${day}`))
        querySnapshot.forEach((doc) => {
          setData(doc.data());
        });

    })
    useFocusEffect(useCallback(()=>{
      getData(route.params.cityName,route.params.days);
      setLoaded(false);
    },[route]))

  return (
    <ScrollView style={{backgroundColor:'#C0DBEA',flex:1}}>
    {loaded && <View>
      <Text style={{fontSize:20}}>Loading...</Text>
    </View>}
     {/* <Text>{route.params.cityName}</Text>
     <Text>{route.params.days}</Text> */}
     {!loaded && <View>
          <View style={{backgroundColor:'#FFB4B4',padding:50,height:150,borderBottomLeftRadius:100, borderBottomRightRadius:100}}>
                <Text style={{textAlign:'center',color:'white',fontFamily:'Ubuntu',fontSize:30}}>Here is your Trip</Text>
              </View>
              <Text style={{marginTop:5,fontSize:30,fontFamily:'Ubuntu',padding:15}}>{route.params.cityName} ({route.params.days} Day)</Text>
              <View style={{padding:15}} >
                <View>
                    <Text style={{fontFamily:'NotoMedium',fontSize:22,color:'#CE5959'}}>{data.title1}</Text>
                    <TouchableOpacity onPress={()=>{
                      navigation.navigate('Details',{
                        placeName:route.params.cityName,
                        iframe:data.frame1,
                        rest_link:data.loc1_resto_link,
                        rest_name:data.loc1_resto_name,
                        resto2_name:data.loc1_resto2_name,
                        resto2_link:data.loc1_resto2_link,
                        hotel1_name:data.loc1_hotel1_name,
                        hotel2_name:data.loc1_hotel2_name,
                        hotel1_link:data.loc1_hotel1_link,
                        hotel2_link:data.loc1_hotel2_link,
                        car_1:data.loc1_car1,
                        car_2:data.loc1_car2,
                        hospital_1:data.loc1_hospital1,
                        hospital_2:data.loc1_hospital2,
                        taxi_1:data.loc1_taxi1,
                        taxi_2:data.loc1_taxi2,
                        cityName:route.params.cityName,
                        days:route.params.days
                      })
                    }}  style={{shadowColor:'black',shadowOffset:{width:1,height:1}, shadowOpacity:1,backgroundColor:'#0000',elevation:15}}>
                        <Image style={{height:170,borderRadius:5}} source={{uri:data.img1}}  />
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:20}}>
                    <Text style={{fontFamily:'NotoMedium',fontSize:22,color:'#CE5959'}}>{data.title2}</Text>
                    <TouchableOpacity onPress={()=>{
                      navigation.navigate('Details',{
                        placeName:route.params.cityName,
                        iframe:data.frame2,
                        rest_link:data.loc2_resto_link,
                        rest_name:data.loc2_resto_name,
                        resto2_name:data.loc2_resto2_name,
                        resto2_link:data.loc2_resto2_link,
                        hotel1_name:data.loc2_hotel1_name,
                        hotel2_name:data.loc2_hotel2_name,
                        hotel1_link:data.loc2_hotel1_link,
                        hotel2_link:data.loc2_hotel2_link,
                        car_1:data.loc2_car1,
                        car_2:data.loc2_car2,
                        hospital_1:data.loc2_hospital1,
                        hospital_2:data.loc2_hospital2,
                        taxi_1:data.loc2_taxi1,
                        taxi_2:data.loc2_taxi2,

                        cityName:route.params.cityName,
                        days:route.params.days
                      })
                    }}  style={{shadowColor:'black',shadowOffset:{width:1,height:1}, shadowOpacity:1,backgroundColor:'#0000',elevation:15}}>
                        <Image style={{height:170,borderRadius:5}} source={{uri:data.img2}}  />
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:20}}>
                    <Text style={{fontFamily:'NotoMedium',fontSize:22,color:'#CE5959'}}>{data.title3}</Text>
                    <TouchableOpacity onPress={()=>{
                      navigation.navigate('Details',{
                        placeName:route.params.cityName,
                        iframe:data.frame3,
                        rest_link:data.loc3_resto_link,
                        rest_name:data.loc3_resto_name,
                        resto2_name:data.loc3_resto2_name,
                        resto2_link:data.loc3_resto2_link,
                        hotel1_name:data.loc3_hotel1_name,
                        hotel2_name:data.loc3_hotel2_name,
                        hotel1_link:data.loc3_hotel1_link,
                        hotel2_link:data.loc3_hotel2_link,
                        car_1:data.loc3_car1,
                        car_2:data.loc3_car2,
                        hospital_1:data.loc3_hospital1,
                        hospital_2:data.loc3_hospital2,
                        taxi_1:data.loc3_taxi1,
                        taxi_2:data.loc3_taxi2,

                        cityName:route.params.cityName,
                        days:route.params.days
                      })
                    }}  style={{shadowColor:'black',shadowOffset:{width:1,height:1}, shadowOpacity:1,backgroundColor:'#0000',elevation:15}}>
                        <Image style={{height:170,borderRadius:5}} source={{uri:data.img3}}  />
                    </TouchableOpacity>
                </View>


              </View>
     </View>}
   

    </ScrollView>
  )
}

export default Details