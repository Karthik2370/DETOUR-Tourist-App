import React, { useEffect, useState } from 'react'
import {StyleSheet, Text, View, Image, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as Font from 'expo-font';
import Home from './home';
const auth = getAuth();
const Login = ({navigation}) => {
  const [fontLoaded, setFontLoaded] = React.useState(false)
  Font.loadAsync({
    'Ubuntu': require('../assets/fonts/Ubuntu-Bold.ttf'),
    'NotoMedium':require('../assets/fonts/NotoSans-Medium.ttf')
  }).then(()=>{
    setFontLoaded(true)
  });

  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
        if (user){

            navigation.reset({
                index:0,
                routes:[{name:'Home'}],
            });
        }
    })
  },[])

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [error,setError] = useState();
    const signIn = (email,password) =>{
        signInWithEmailAndPassword(auth,email,password).then((value)=>{
            const name = value._tokenResponse.email.split('@')[0];
            const email = value._tokenResponse.email;
            console.log(name)
        }).catch((err)=>{
            console.log(err)
            const errorCode = err.code;
            if (errorCode === 'auth/user-not-found'){
                alert("User Not Found");
                return;
            }
            if (errorCode === 'auth/wrong-password'){
                alert("Invalid password");
                return;
            }
            alert("Sorry some Error Occured!")
        })
    }
    const handlePress = ()=>{
        if (!email || !password){
            alert("Please Enter all the fields")
            return;
        }
        signIn(email,password)
    }
  if (!fontLoaded) return null;

  return (
    <View style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
        <View>
            <View style={styles.img_container}>
                <Image style={styles.hero_img} source={require('../assets/images/travel.png')} />
            </View>
        <Text style={styles.welcome}>Login</Text>
        <Text style={styles.hero}>Enter your credentials to continue</Text>

            <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={(text)=>{setEmail(text)}} />
            <TextInput secureTextEntry={true} style={styles.input} placeholder='Password' value={password} onChangeText={(text)=>{setPassword(text)}} />
            <Button
            style={styles.buttonlol}
            title='Login'
            color='#DC8449'
            borderRadius={15}
            onPress={handlePress}
             />
             <Text onPress={()=>{navigation.navigate('Signup')}} style={styles.account}>Don't have an Account? Create one</Text>

        </View>
        </KeyboardAvoidingView>
    </View>

  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'white',
    },
    icon:{
        width:20,
        height:20
    },
    img_container:{
        alignItems:'center'
    },
    hero_img:{
        width:220,
        height:220,
        marginBottom:30
    },
    input:{
        padding:10,
        borderRadius:5,
        borderWidth:1,
        marginBottom:20
    },
    buttonlol:{
        borderRadius:15
    },
    account:{
        color:'#4D455D',
        marginTop:20,
        textAlign:'center',
        fontFamily:'NotoMedium',
        fontSize:15

    },
    welcome:{
        fontSize:40,
        color:'#191825',
        fontFamily:'Ubuntu'

    },
    hero:{
        color:'#3795BD',
        fontSize:18,
        marginBottom:20,
        fontFamily:'NotoMedium'
    },

    
})

export default Login