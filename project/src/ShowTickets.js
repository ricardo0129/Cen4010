import { registerRootComponent} from 'expo';
import { StatusBar } from "expo-status-bar";
import React, {
  useState, 
  Component, 
  useEffect} from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

import axios from 'axios';

const ShowTickets = ({navigation}) => {
  const [tickets,setTickets] = useState([])
  useEffect(()=>{
    axios.get('http://165.227.119.71/api/ticket/', {params:{token:localStorage.getItem('token')}})
    .then(response=>{
      setTickets(response.data)
    }).catch(err=>{
      setTickets([])
    })

  },[])
  return (
    
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
              {tickets.map(tickets=>(
              <Text key={tickets.id}>title: {tickets.title} notes: {tickets.notes}</Text>
              ))}
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  titleFont:{
    fontFamily: "Roboto",
    fontSize:24,
    marginBottom:48,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor:"#E5E5E5",
    borderRadius: 14,
    width: 270,
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
  checkboxContainer: {
    marginRight:225,
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  inputView2: {
    backgroundColor:"#E5E5E5",
    borderRadius: 14,
    width: 270,
    height: 45,
    marginBottom: 30,
    alignItems: "center",
  },
  TextInput2: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  inputView3: {
    backgroundColor:"#E5E5E5",
    borderRadius: 14,
    width: 270,
    height: 145,
    marginBottom: 30,
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
  },
  postBtn: {
    width: "45%",
    borderRadius: 25,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#8F8888",
  },
  dateTimeBtn: {
    width: "45%",
    borderRadius: 14,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#E5E5E5",
  },
  
});

export default ShowTickets;