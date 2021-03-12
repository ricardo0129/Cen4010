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
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';


const TicketRegistration = ({navigation}) => {
  const [title, setTitle] = useState("");
  const [postDate, setPostDate] = useState("");
  const [needDate, setNeedDate] = useState("");
  const [category, setCategory] = useState("Category");
  const [isSpecificStore, setIsStore] = useState("");
  const [store, setStore] = useState("");
  const [items, setItems] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("");



  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text></Text>
        <Text style={styles.titleFont}>Create a Ticket</Text>
        <StatusBar style="auto" />
        
        <Text style={{alignSelf:"flex-start", marginLeft:80, fontFamily: "Roboto", fontSize:12}}>Title</Text>
        <View style={styles.inputView}>
          <TextInput
          style={styles.TextInput}
          placeholder="Title."
          placeholderTextColor="#003f5c"
          onChangeText={(title) => setTitle(title)}
          />
        </View>

        <Text style={{alignSelf:"flex-start", marginLeft:80, fontFamily: "Roboto", fontSize:12}}>Need By Date/Time</Text>
        <View style={{borderRadius: 14, width: 270, height: 45, marginBottom: 30}}>
          <View style={{flexDirection: 'row', height: 45, width: 270 ,justifyContent: 'space-between'}}>
              <TouchableOpacity style={styles.dateTimeBtn}
                onPress={showDatepicker}>
                <Text style={{color:"#003f5c"}}>Date</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dateTimeBtn}
                onPress={showTimepicker}>
                <Text style={{color:"#003f5c"}}>Time</Text>
              </TouchableOpacity>
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>

        <View >
          
        </View>

        
        <Text style={{alignSelf:"flex-start", marginLeft:80, fontFamily: "Roboto", fontSize:12}}>Category</Text>
        <View style={styles.inputView}>
          <Picker
            style ={{color: "#003f5c", width:270, justifyContents:"center"}}
            itemStyle = {{justifyContent:"center"}}
            selectedValue={category}
            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)
            }>
            <Picker.Item label="None" value="None" />
            <Picker.Item label="Groceries" value="Groceries" />
            <Picker.Item label="Prescriptions" value="Prescriptions" />
            <Picker.Item label="Technology" value="Technology" />

            
          </Picker>
        </View>
        

        <Text style={{alignSelf:"flex-start", marginLeft:80, fontFamily: "Roboto", fontSize:12}}>Include a specific store?</Text>
        
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
            </View>
          </View> : ""}
        </Text>
        
        <Text style={{alignSelf:"flex-start", marginLeft:80, fontFamily: "Roboto", fontSize:12}}>Items</Text>
        <View style={styles.inputView3}>
          <TextInput
          style={styles.TextInput}
          placeholder="Items."
          placeholderTextColor="#003f5c"
          onChangeText={(items) => setItems(items)}
          />
        </View>
        
        <Text style={{alignSelf:"flex-start", marginLeft:80, fontFamily: "Roboto", fontSize:12}}>Notes</Text>
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

        <Text/>
          
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

export default TicketRegistration;