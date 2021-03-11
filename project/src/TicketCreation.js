import { registerRootComponent} from 'expo';
import { StatusBar } from "expo-status-bar";
import React, {
  useState, 
  Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import CheckBox from '@react-native-community/checkbox';

const TicketRegistration = () => {
  const [title, setTitle] = useState("");
  const [postDate, setPostDate] = useState("");
  const [needDate, setNeedDate] = useState("");
  const [category, setCategory] = useState("");
  const [isSpecificStore, setIsStore] = useState("");
  const [store, setStore] = useState("");
  const [items, setItems] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("");

  return (
    
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text></Text>
        <Text style={styles.titleFont}>Create a Ticket</Text>
        <StatusBar style="auto" />
        
        <Text style={{alignSelf:"flex-start", marginLeft:70, fontFamily: "Roboto", fontSize:12}}>Title</Text>
        <View style={styles.inputView}>
          <TextInput
          style={styles.TextInput}
          placeholder="Title."
          placeholderTextColor="#003f5c"
          onChangeText={(title) => setTitle(title)}
          />
        </View>

        <Text style={{alignSelf:"flex-start", marginLeft:70, fontFamily: "Roboto", fontSize:12}}>Need By Date</Text>
        <View style={styles.inputView}>
          <TextInput
          style={styles.TextInput}
          placeholder="MM/DD/YYYY."
          placeholderTextColor="#003f5c"
          onChangeText={(needDate) => setNeedDate(needDate)}
          />
        </View>
        
        <Text style={{alignSelf:"flex-start", marginLeft:70, fontFamily: "Roboto", fontSize:12}}>Category</Text>
        <View style={styles.inputView}>
          <TextInput
          style={styles.TextInput}
          placeholder="e.g. Groceries."
          placeholderTextColor="#003f5c"
          onChangeText={(category) => setCategory(category)}
          />
        </View>

        <Text style={{alignSelf:"flex-start", marginLeft:70, fontFamily: "Roboto", fontSize:12}}>Include a specific store?</Text>
        
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSpecificStore}
            onValueChange={setIsStore}
            style={styles.checkbox}
          />
        </View>
        <Text>{isSpecificStore ? 
        <View style={styles.container}>
        <Text style={{alignSelf:"center", marginRight:180, fontFamily: "Roboto", fontSize:12}}>Specific Store</Text>
        <View style={styles.inputView2}>
          <TextInput
          style={styles.TextInput2}
          placeholder="Store."
          placeholderTextColor="#003f5c"
          onChangeText={(store) => setStore(store)}
          />
        </View></View> : ""}</Text>
        
        <Text style={{alignSelf:"flex-start", marginLeft:70, fontFamily: "Roboto", fontSize:12}}>Items</Text>
        <View style={styles.inputView3}>
          <TextInput
          style={styles.TextInput}
          placeholder="Items."
          placeholderTextColor="#003f5c"
          onChangeText={(items) => setItems(items)}
          />
        </View>
        
        <Text style={{alignSelf:"flex-start", marginLeft:70, fontFamily: "Roboto", fontSize:12}}>Notes</Text>
        <View style={styles.inputView3}>
          <TextInput
          style={styles.TextInput}
          placeholder="Notes."
          placeholderTextColor="#003f5c"
          onChangeText={(notes) => setNotes(notes)}
          />
        </View>
        
        <TouchableOpacity style={styles.postBtn}
        /*onPress={() => navigation.navigate('')}*/>
          <Text style={styles.postText}>Post</Text>
        </TouchableOpacity>

        <Text></Text>
          
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
});

export default TicketRegistration;