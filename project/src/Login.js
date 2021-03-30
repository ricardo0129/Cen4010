import { registerRootComponent} from 'expo';
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Geocoder from 'react-native-geocoding';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
const axios = require('axios')
Geocoder.init("AIzaSyBmpFDg0CGEAiLahct3zYSfDHcxVFUt_0I");
const Login= ({navigation}) => {
const [credentials, setCredentials] = useState({
  username: "",
  password: "",
});
const handleClick = ()=>{
    const params= { username: credentials.username, password: credentials.password};
    axios.post('http://165.227.119.71/api/auth/login/', params)
        .then(response => {console.log(response);localStorage.setItem('token',response.data.token);navigation.navigate('TicketCreation')}).catch((err)=>{Alert.alert("WRONG LOGING");navigation.navigate('Login')}); 
};


navigator.geolocation.getCurrentPosition(
(position) => {
console.log(position);
},
(error) => {
// See error code charts below.
console.log(error.code, error.message);
},
{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
);
  return (
    <View style={styles.container}>
      <Text style={styles.titleFont}>Log in</Text>
      <StatusBar style="auto" />
      <Text style={{alignSelf:"flex-start", marginLeft:55, fontFamily: "Roboto", fontSize:12}}>Username/Email</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => {
            let current = credentials
            current.username = email
            setCredentials(current)
          }}
        />
      </View>

      <Text style={{alignSelf:"flex-start", marginLeft:55, fontFamily: "Roboto", fontSize:12}}>Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => {
            let current = credentials
            current.password = password
            setCredentials(current)
          }}
        />
      </View>
   
      <TouchableOpacity style={styles.loginBtn}
      onPress={handleClick}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.register_button}>Not Registered?</Text>
      </TouchableOpacity>     

      <TouchableOpacity style={styles.loginBtn}
      onPress={() => navigation.navigate('ShowTickets')}>
        <Text style={styles.loginText}>Show Tickets</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  titleFont:{
    fontFamily: "Roboto",
    fontSize:24,
    marginBottom:48
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor:"#E5E5E5",
    borderRadius: 14,
    width: "76%",
    height: 45,
    marginBottom: 30,
 
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  register_button: {
    height: 30,
    margin: 10,
  },
 loginText:{
  fontFamily: "Roboto", fontSize:15
 },
  loginBtn: {
    width: "45%",
    borderRadius: 25,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#8F8888",
  },
});


export default Login;