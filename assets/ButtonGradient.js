import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient () {
    return (
        <TouchableOpacity style={styles.button}>
            <LinearGradient
                colors={['#FFB677', '#FF3CBD']}
                
                style={StyleSheet.button}>
                <Text style={StyleSheet.text}>Sign in with Facebook</Text>
            
            

            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      color: 'gray',
      marginTop: 20,
  
    },
    button: {
        width: '80%',
        height: 50,
      
    }
  });