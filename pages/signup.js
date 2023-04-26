import { useState } from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from '../firebase';
import Home from './home';
import * as Font from 'expo-font';
const auth = getAuth();

    const Signup = ({navigation}) => {
    const [fontLoaded, setFontLoaded] = useState(false)
    Font.loadAsync({
        'Ubuntu': require('../assets/fonts/Ubuntu-Bold.ttf'),
        'NotoMedium':require('../assets/fonts/NotoSans-Medium.ttf')
    }).then(()=>{
        setFontLoaded(true)
    });

    const [name,setName] = useState();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signup = (email,password)=>{
        createUserWithEmailAndPassword(auth,email,password).then(()=>{
            alert("User Creation Sucess! Use Login Now")

        }).catch((err)=>{
            const errorCode = err.code;
            if (errorCode === 'auth/weak-password'){
                alert("Please Enter a Stronger Password")
                return;
            }
            if (errorCode === 'auth/invalid-email'){
                alert("Please Enter a valid Email")
                return;
            }
            alert("Sorry An Error Occurred!")
        })
    }

    const handlePress = ()=>{
        if (!email || !name || !password){
            alert("Please Enter All Fields");
            return
        }
        signup(email,password);
    }
  if (!fontLoaded) return null;

  return (
    <View style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
            <View style={styles.img_container}>
                <Image style={styles.hero_img} source={require('../assets/images/travel2.jpg')} />
            </View>
        <Text style={styles.title}>Signup</Text>
        <Text style={styles.hero}>Create a free account at DeTour</Text>

        <View style={styles.signup_container}>
            <TextInput style={styles.input} placeholder='Name' value={name} onChangeText={(text)=>{setName(text)}} />
            <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={(text)=>{setEmail(text)}} />
            <TextInput secureTextEntry={true} style={styles.input} placeholder='Password' value={password} onChangeText={(text)=>{setPassword(text)}} />
        </View>
            <Button
            style={styles.buttonlol}
            title='Signup'
            color='#E96479'
            borderRadius={15}
            onPress={handlePress}
             />

        <Text onPress={()=>{navigation.navigate('Login')}} style={styles.account}>Already have an account? Login</Text>
        </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:'white',
        flex:1

    },
    title:{
        fontSize:40,
        fontFamily:'Ubuntu'
    },
    signup_container:{
        marginBottom:20,
    },
    input:{
        padding:10,
        borderRadius:5,
        borderWidth:1,
        marginTop:20
    },
    buttonlol:{
        opacity:0
    },
    account:{
        color:'#4D455D',
        marginTop:20,
        textAlign:'center',
        fontFamily:'NotoMedium',
        fontSize:15

    },
    google:{
        width:20,
        height:20
    },
    button_google:{
        backgroundColor:'white'
    },
    img_container:{
        alignItems:'center',
    },
    hero_img:{
        width:200,
        height:200,
        marginBottom:30
    },
    hero:{
        color:'#3795BD',
        fontSize:18,
        marginBottom:20,
        fontFamily:'NotoMedium'
    },
})

export default Signup