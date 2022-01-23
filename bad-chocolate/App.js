import * as React from 'react';



import { Text, View, StyleSheet, TextInput, Button, useHistory, useState, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
//calling Button component
// import SubBtn from './components/SubscriptionButton';
// Calling Home component
import Dashboard from './components/Emailfield.js';





const Email = () => {
  const[text, onChangeText] = React.useState('');
    return (
      <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder={'User Name'} placeholderTextColor={'white'}/>
    );
}


const Password = () => {
  const[text, onChangeText] = React.useState('');
    return (
      <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder={'Password'} placeholderTextColor={'white'}/>
    );

}



export default function App() {

  return(
    <View style={styles.Container}>
        <View>
          <Text style={styles.heading}>
            Welcome!
         </Text>
        </View>
    
        
        <View>
          <Text style={styles.simple}>
         Please Login to read Books
         </Text>
        </View>

         

        <View>
          <Text style={styles.stext}>
            Enter Your Email
         </Text>
        
        <Email/>  
        <Password/>
        <TouchableHighlight
               
          style={{ backgroundColor: 'rgba(4, 91, 98, 1)',  justifyContent:'center', width:'50%', marginLeft:70, padding:10,borderWidth:1, borderColor:'white',borderRadius:20, 
         marginBottom:55 }}>
         <Text style={{textAlign: 'center', color:"white",}}>
         Login
         </Text>
        
       </TouchableHighlight>
       
       

        
        
        
        </View>
        
         <View style={styles.Container2}>
        <Dashboard/>
    </View>
        

    </View>


    
    
    
    
  );
}

const styles = StyleSheet.create({

  Container:{ 
    backgroundColor: "rgba(152, 222, 243, 1)",
    padding: 0,

  },
  simple:{
    textAlign: 'center',
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 100,
    
  },
  stext: {
    fontSize: 14,
    textAlign: "center",
    paddingTop: 50,
    marginTop: 10,
    color: "white"
  },

  heading: {
    fontSize: 40,
    fontWeight: 800,
    color: 'rgba(4, 91, 98, 1)',
    textAlign: 'center'
    
  },
  
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    color: 'white'
  }
  
});