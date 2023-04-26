import {View,Text} from 'react-native'
import React, { useState } from 'react'
import * as Font from 'expo-font';


const Header = (props)=>{
    const [fontLoaded, setFontLoaded] = useState(false)
    Font.loadAsync({
        'Ubuntu': require('../assets/fonts/Ubuntu-Bold.ttf'),
        'NotoMedium':require('../assets/fonts/NotoSans-Medium.ttf')
    }).then(()=>{
        setFontLoaded(true)
    });

    if (!fontLoaded) return null;

    return (
        <View>
          <Text style={{fontFamily:'NotoMedium', fontSize:20}}>
            {props.name}
          </Text>
        </View>
    )
}
export default Header;