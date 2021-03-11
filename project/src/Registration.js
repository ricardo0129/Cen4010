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

const Registration= () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "", 
    password: "",
    address_line_1: "",
    address_line_2: "",
    city: "",
    state: "",
    zip_code: "",
    mile_radius:5})
  
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
          secureTextEntry={true}
          onChangeText={(username) => setCredentials({username:username})}
        />
      </View>

      <Text style={{alignSelf:"flex-start", marginLeft:55, fontFamily: "Roboto", fontSize:12}}>Username/Email</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setCredentials({email:email})}
        />
      </View>

      <Text style={{alignSelf:"flex-start", marginLeft:55, fontFamily: "Roboto", fontSize:12}}>Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setCredentials({password:password})}
        />
      </View>

      
      <Text style={{alignSelf:"flex-start", marginLeft:55, fontFamily: "Roboto", fontSize:12}}>Address Line 1</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Address Line 1."
          placeholderTextColor="#003f5c"
          onChangeText={(address_line_1) => setCredentials({address_line_1:address_line_1})}
        />
      </View>
    
      <Text style={{alignSelf:"flex-start", marginLeft:55, fontFamily: "Roboto", fontSize:12}}>Address Line 2</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Address Line 2"
          placeholderTextColor="#003f5c"
          onChangeText={(address_line_2) => setCredentials({address_line_2:address_line_2})}
        />
      </View>
      
      
      <Text style={{alignSelf:"flex-start", marginLeft:55, fontFamily: "Roboto", fontSize:12}}>City</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="City"
          placeholderTextColor="#003f5c"
          onChangeText={(city) => setCredentials({city:city})}
        />
      </View>

      
      <Text style={{alignSelf:"flex-start", marginLeft:55, fontFamily: "Roboto", fontSize:12}}>State</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="State"
          placeholderTextColor="#003f5c"
          onChangeText={(state) => setCredentials({state:state})}
        />
      </View>

      <Text style={{alignSelf:"flex-start", marginLeft:55, fontFamily: "Roboto", fontSize:12}}>Zip Code</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Zip Code"
          placeholderTextColor="#003f5c"
          onChangeText={(zip_code) => setCredentials({zip_code:zip_code})}
        />
      </View>



      <Text style={{alignSelf:"flex-start", marginLeft:55, fontFamily: "Roboto", fontSize:12}}>Mile Radius</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Mile Radius"
          placeholderTextColor="#003f5c"
          onChangeText={(mile_radius) => setCredentials({mile_radius:mile_radius})}
        />
      </View>




      
   

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.register_button}>Not Registered?</Text>
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