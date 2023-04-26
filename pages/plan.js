import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, View,TextInput, Image } from 'react-native'
import * as Font from 'expo-font';

const Plan = ({navigation}) => {
    const [fontLoaded, setFontLoaded] = React.useState(false)
    const [selectedDays,setDays] = React.useState(0)
    const [city,setCity] = useState();
    const [isError,setError] = useState(false)
    Font.loadAsync({
      'Ubuntu': require('../assets/fonts/Ubuntu-Bold.ttf'),
      'NotoMedium':require('../assets/fonts/NotoSans-Medium.ttf')
    }).then(()=>{
      setFontLoaded(true)
    });

    const handleSubmit = ()=>{
      if (!city){
        setError(true);
        return
      }
      if (city!=='Mumbai'){
        setError(true);
        return;
      }
      navigation.navigate('Trip',{
        cityName:city,
        days:selectedDays,
      })
    }
  return (
    <View style={{backgroundColor:'#ECF2FF',flex:1}}>
        <View style={{backgroundColor:'#FFB4B4',padding:15,height:240,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
          <Text style={{fontFamily:'Ubuntu',fontSize:30,marginTop:10}}>Lets Book a Travel Plan for you</Text>
          <View style={{backgroundColor:'#ffffff',padding:10,borderRadius:5,marginTop:150,width:'80%',height:400,position:'absolute',alignSelf:'center',elevation:2}}>
            <Text style={{fontFamily:'Ubuntu',fontSize:21,marginTop:5}}>Travel to</Text>
            <TextInput onChangeText={text => setCity(text)} placeholder='Enter City Name' style={{borderWidth:1,padding:5,fontFamily:'NotoMedium',borderRadius:10,borderColor:'#EA5455',marginTop:5}} />
            {isError && <Text style={{fontWeight:'bold',color:'red',marginLeft:10}}>Enter a Valid City Name!</Text>}

            <Text style={{fontFamily:'Ubuntu',fontSize:19,marginTop:50}}>Travel for Days</Text>
            <View style={{marginTop:20,display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
              <TouchableOpacity onPress={()=>{setDays(1)}} style={{borderColor:'black',borderWidth:1,padding:15,borderRadius:50,backgroundColor:selectedDays === 1?'#FFB4B4':'white'}}>
                <Text>1</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{setDays(2)}} style={{borderColor:'black',borderWidth:1,padding:15,borderRadius:50,backgroundColor:selectedDays === 2?'#FFB4B4':'white'}}>
                <Text>2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{setDays(3)}} style={{borderColor:'black',borderWidth:1,padding:15,borderRadius:50,backgroundColor:selectedDays === 3?'#FFB4B4':'white'}}>
                <Text>3</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{setDays(4)}} style={{borderColor:'black',borderWidth:1,padding:15,borderRadius:50,backgroundColor:selectedDays === 4?'#FFB4B4':'white'}}>
                <Text>4</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={()=>{setDays(5)}} style={{borderColor:'black',borderWidth:1,padding:15,borderRadius:50,backgroundColor:selectedDays === 5?'#FFB4B4':'white'}}>
                <Text>5</Text>
              </TouchableOpacity> */}
            </View>
            <TouchableOpacity onPress={handleSubmit} style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#EA5455',padding:5,borderRadius:10,marginTop:'auto'}}>
              <Image style={{height:35,width:35,marginRight:10}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png'}}  />
              <Text style={{color:'white',fontSize:18,fontFamily:'NotoMedium'}}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

export default Plan

