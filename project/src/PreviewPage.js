import { registerRootComponent} from 'expo';
import { StatusBar } from "expo-status-bar";
import React, {
  useState, 
  Component } from "react";
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const DATA = [
    {
        id: 1,
        title: "dsada",
        need_by: "2021-03-12T02:30:06.826642Z",
        category: "skjksjdakjdsajk",
        created_at: "2021-03-12T02:30:06.826642Z",
        store: "",
        helpee: 1,
        helper: null,
        items: "",
        notes: "msamsasakj",
    },
    {
        "id": 2,
        "title": "dsada",
        "need_by": "2021-03-12T02:31:27.050079Z",
        "category": "skjksjdakjdsajk",
        "created_at": "2021-03-12T02:31:27.050079Z",
        "store": "",
        "helpee": 1,
        "helper": null,
        "items": "",
        "notes": "msamsasakj"
    },
    {
        "id": 3,
        "title": "dsadajkjkkj",
        "need_by": "2021-03-12T02:31:39.279179Z",
        "category": "skjksjdakjdsajk",
        "created_at": "2021-03-12T02:31:39.279179Z",
        "store": "",
        "helpee": 1,
        "helper": null,
        "items": "kjjkkjkj",
        "notes": "msamsasakj"
    }
  ];
  
  const Item = ({ title, helpee, created_at, need_by, category, store}) => (
    <View style={styles.ticket}>
      <Text style={styles.ticketText}>Ticket Title: {title}</Text>
      <Text style={styles.ticketText}>Username: {helpee}</Text>
      <Text style={styles.ticketText}>Post Date: {created_at} </Text>
      <Text style={styles.ticketText}>Need By: {need_by} </Text>
      <Text style={styles.ticketText}>Category: {category} </Text>
      <Text style={styles.ticketText}>Specific Store: {store} </Text>
    </View>
  );
  
  const PreviewPage = ({navigation}) => {
    const renderItem = ({ item }) => (
      <TouchableOpacity
      /*onPress={() => navigation.navigate('Registration')}*/>
        <Item title={item.title} category={item.category}/>
      </TouchableOpacity>
    );
  
    return (
        <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
          <Text style={styles.titleFont}> All Tickets </Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    titleFont:{
        fontFamily: "Roboto",
        fontSize:24,
        marginBottom:48,
        marginTop:48,
      },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
    ticket: {
        backgroundColor:"#E5E5E5",
        borderRadius: 14,
        width: 350,
        height: 200,
        marginBottom: 20,
        alignItems: "baseline",
      },
    ticketText: {
        fontSize: 20,
        fontFamily: "Roboto",
        marginLeft: 10,
        marginTop: 5,
    },
    scrollView: {
        flex: 1,
      },
  });
  
  export default PreviewPage;