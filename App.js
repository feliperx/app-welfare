import React from 'react';
import {
  Text,
  View, 
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'; 


export default function App() {
  return ( 

    <View style={styles.container}> 


          <Image style={styles.header} source={require('./public/images/plus.svg')}/> 

          <TextInput style={styles.input} placeholder="Email"></TextInput>
          <TextInput style={styles.input} placeholder="Password"></TextInput>
          
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => alert('Login!')}>
            <Text style={{ color: '#fafdfb' }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSignUp}
            onPress={() => alert('Sign Up!')}>
            <Text style={{ color: '#fafdfb' }}>Sign Up</Text>
          </TouchableOpacity>
            <Text style={styles.footer}> Forgot your password?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderColor: '#fff',
    backgroundColor: '#fff', 
    margin: 35,
  }, 
  header: { 
    height: 60, 

  },
  input: {
    height: 60,
    marginVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 14,
    borderColor: 'green',
    backgroundColor: '#f2f2f2',
    color: '#333', 
  },
  buttonLogin: {
    alignItems: 'center',
    backgroundColor: '#99E9E6',
    marginVertical: 8,
    marginTop: 75,
    color: '#fafdfb',
    padding: 15,
    borderRadius: 14,
  }, 
  buttonSignUp: {
    alignItems: 'center',
    backgroundColor: '#C5CFDA',
    marginVertical: 8,
    color: '#fafdfb',
    padding: 15, 
    borderRadius: 14,
  },  
  footer: { 
    marginTop:30,
    color: '#88FDD0', 
    textAlign: 'center', 
    fontWeight: 'bold',
   },
});


