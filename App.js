// Importing Libaries to support multiple screens
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
// Importing various necessary components
import {StyleSheet, Text, View, Image, Button } from 'react-native';
//IMPORTING DIFFERENT SCREENS ( BASICALLY MULTIPLE PAGES )
import Signup from './pages/signup';
import Home from './pages/home';
import Login from './pages/login';
import Plan from './pages/plan';
import Details from './pages/details';
import TripDetails from './pages/TripDetails';
import BookHotel from './pages/BookHotel';
import CustomComponent from './pages/CustomComponent';
import { useFonts } from 'expo-font';
import Header from './pages/header'
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const auth = getAuth();



export default function App() {
  const [isUserLoggedIn, setLoggedin] = useState(false);
  const [render,setRender] = useState(false);
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      //  if (!isUserLoggedIn){
      //   setLoading(true)
      //  }
        if (user){
          setLoggedin(true);
          setLoading(false)
        } else{
          setLoggedin(false)
        }
    })
  },[])
  const Drawer = createDrawerNavigator();
  
  return (
    <NavigationContainer style={styles.container}>
     
      {!isUserLoggedIn && <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerTitle: ()=> <Header name="Login"/>,
            // headerRight:()=>(
            //   <Text>LOL</Text>
            // ),
            headerStyle:{
              backgroundColor:'#ECF2FF',
            }
          }}
         />
        <Stack.Screen
          name='Signup'
          component={Signup}
          options={{
            headerTitle: ()=> <Header name="Signup"/>,
            // headerRight:()=>(
            //   <Text>LOL</Text>
            // ),
            headerStyle:{
              backgroundColor:'#ECF2FF',
            }
          }}/>
      </Stack.Navigator>}
      {isUserLoggedIn &&
      <Drawer.Navigator initialRouteName='Home' drawerContent={CustomComponent}>
        <Drawer.Screen
          name='Home'
          component={Home}
          options={{
            headerTitle: ()=> <Header name="Home"/>,
            // headerRight:()=>(
            //   <Text>LOL</Text>
            // ),
            headerBackVisible:false,
            headerStyle:{
              backgroundColor:'#ECF2FF',
            }
          }} 
         />
        <Drawer.Screen
          name='Plan'
          component={Plan}
          options={{
            headerTitle: ()=> <Header name="Plan"/>,
            // headerRight:()=>(
            //   <Text>LOL</Text>
            // ),
            headerBackVisible:false,
            headerStyle:{
              backgroundColor:'#ECF2FF',
            }
          }} 
         />
        <Drawer.Screen
          name='Trip'
          component={Details}
          options={{
            headerTitle: ()=> <Header name="Trip"/>,
            // headerRight:()=>(
            //   <Text>LOL</Text>
            // ),
            headerBackVisible:true,
            headerStyle:{
              backgroundColor:'#ECF2FF',
            }
          }} 
         />
        <Drawer.Screen
          name='Details'
          component={TripDetails}
          options={{
            headerTitle: ()=> <Header name="Details"/>,
            // headerRight:()=>(
            //   <Text>LOL</Text>
            // ),
            headerBackVisible:true,
            headerStyle:{
              backgroundColor:'#ECF2FF',
            }
          }} 
         />
        <Drawer.Screen
          name='Book'
          component={BookHotel}
          options={{
            headerTitle: ()=> <Header name="Book"/>,
            // headerRight:()=>(
            //   <Text>LOL</Text>
            // ),
            headerBackVisible:true,
            headerStyle:{
              backgroundColor:'#ECF2FF',
            }
          }} 
         />
         </Drawer.Navigator>}
    </NavigationContainer>
  );
  
}

// This is basically the CSS for mobile applicationss
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lol:{
    borderRadius:15
  },
  main:{
    backgroundColor:'#95BDFF'
  }
});
