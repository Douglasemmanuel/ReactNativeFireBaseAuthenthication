import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React,{useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar'
import { auth } from '../firebase'
import { getAuth, onAuthStateChanged  , signOut} from "firebase/auth";
const Dashboard = ({navigation}) => {
  const auth = getAuth()
 
    
    const handleSignOut = () =>{
        signOut(auth).then(()=>{
          navigation.navigate("Signin")
            }).catch(error=> alert(error.message))
    }
  return (
    <SafeAreaView style={{flex:1}}>
    <StatusBar style="auto" />
    <View style={styles.container}>
    <View>
  <Text>Welcome {auth ?.currentUser.email} </Text> 
  <Text> {auth ?.currentUser.displayName} </Text> 
    </View>
    <TouchableOpacity style={styles.logoutbtn} onPress={handleSignOut}>
      <Text style={{fontSize: 19,fontWeight:'bold',textAlign:'center',paddingTop:'4.5%'}}>Sign Out</Text>
    </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
  }

export default Dashboard;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    logoutbtn:{
        marginTop:'5%',
        color:'black',
        backgroundColor:'#ffd11c',
        height:'9%', 
        width:'90%',
      }
})