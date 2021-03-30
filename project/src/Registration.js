import { registerRootComponent} from 'expo';
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
const axios = require('axios')

const Registration= ({navigation}) => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "", 
    password: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: 12,
    mileRadius: 5,
    latitude: 0.0,
    longitude: 0.0
    })
 
  const handleClick2 = () =>{
    console.log(credentials)
    console.log(credentials.username)
    const params= { username: credentials.username, password: credentials.password,addressLine1:credentials.addressLine1,
    addressLine2:credentials.addressLine2,city:credentials.city,state:credentials.city,zipCode:credentials.zipCode,mileRadius:credentials.mileRadius,
    longitude:12.000, latitude:13.00};
    axios.post('http://165.227.119.71/api/auth/register/', params)
        .then(response => localStorage.setItem('token',response.data.token)); 
    navigation.navigate('TicketCreation')
  }
  const register = () =>{
    const pa ={address:credentials.addressLine1,key:"AIzaSyBmpFDg0CGEAiLahct3zYSfDHcxVFUt_0I"};
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?',{params:pa})
      .then(response=>{
        console.log("--------");console.log(response.data.results[0].formatted_address);
        let current = credentials;
        current.latitude = response.data.results[0].geometry.location.lat;
        current.longitude = response.data.results[0].geometry.location.lng;
        setCredentials(current);
        console.log(response.data.results[0].geometry.location)
        handleClick2();
     });
  }

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center',alignItems:"center", paddingVertical:100}}>
      
      <Text style={styles.titleFont}>Registration</Text>
      <StatusBar style="auto" />
      
      <Text style={{alignSelf:"flex-start", marginLeft:55, fontFamily: "Roboto", fontSize:12}}>Username</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username."
          placeholderTextColor="#003f5c"
          onChangeText={(user) =>{
            let current =  credentials;
            current.username = user;
            setCredentials(current);
          }}
        />
      </View>

      <Text style={{alignSelf:"flex-start", marginLeft:55, fontFamily: "Roboto", fontSize:12}}>Username/Email</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(em) => {
            let current = credentials;
            current.email = em;
            setCredentials(current);
          }}
        />
      </View>

      <Text style={{alignSelf:"flex-start", marginLeft:55, fontFamily: "Roboto", fontSize:12}}>Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          onChangeText={(password) =>{
            let current = credentials;
            credentials.password = password;
            setCredentials(current);
          }}
        />
      </View>

      
      <Text style={{alignSelf:"flex-start", marginLeft:55, fontFamily: "Roboto", fontSize:12}}>Address Line 1</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Address Line 1."
          placeholderTextColor="#003f5c"
          onChangeText={(address_line_1) => {
            let current = credentials;
            credentials.addressLine1 = address_line_1;
            setCredentials(current);
          }}
        />
      </View>
    
      <Text style={{alignSelf:"flex-start", marginLeft:55, fontFamily: "Roboto", fontSize:12}}>Address Line 2</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Address Line 2."
          placeholderTextColor="#003f5c"
          onChangeText={(address_line_2) => {
            let current = credentials;
            credentials.addressLine2 = address_line_2;
            setCredentials(current);
          }}
        />
      </View>
      
      
      <Text style={{alignSelf:"flex-start", marginLeft:55, fontFamily: "Roboto", fontSize:12}}>City</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="City."
          placeholderTextColor="#003f5c"
          onChangeText={(city) => {
            let current = credentials;
            credentials.city = city;
            setCredentials(current);
          }}
        />
      </View>

      
      <Text style={{alignSelf:"flex-start", marginLeft:55, fontFamily: "Roboto", fontSize:12}}>State</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="State."
          placeholderTextColor="#003f5c"
          onChangeText={(state) => {
            let current = credentials;
            credentials.state = state;
            setCredentials(current);
          }}
        />
      </View>

      <Text style={{alignSelf:"flex-start", marginLeft:55, fontFamily: "Roboto", fontSize:12}}>Zip Code</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Zip Code."
          placeholderTextColor="#003f5c"
          onChangeText={(zip_code) => {
            let current = credentials;
            credentials.zipCode = zip_code;
            setCredentials(current);
          }}
        />
      </View>



      <Text style={{alignSelf:"flex-start", marginLeft:55, fontFamily: "Roboto", fontSize:12}}>Mile Radius</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Mile Radius."
          placeholderTextColor="#003f5c"
          onChangeText={(mile_radius) =>{
            let current = credentials;
            credentials.mileRadius = mile_radius;
            setCredentials(current);
          }}
        />
      </View>




      
   

      <TouchableOpacity style={styles.loginBtn}
      onPress={register}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate('Login')}>
        <Text style={styles.register_button}>Already have an Account?</Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
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
    //alignItems: "center",
    //justifyContent: "center",
    //alignContent:"center",
    //alignSelf:"center"
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


export default Registration;