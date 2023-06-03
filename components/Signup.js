import { StyleSheet, Text, View, SafeAreaView, TextInput,CheckBox } from 'react-native'
import React,{useState,useEffect} from 'react';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { auth } from '../firebase';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
export default function Signup({ navigation }) {
  const [displayName,setdisplayName] = useState("")
  const [phonenumber,setPhonenumber] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const auth = getAuth();
  const clearTextInput = () =>{
    setdisplayName('')
    setEmail('')
    setPhonenumber('')
    setPassword('')
}
  const handlesignup = () =>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigation.navigate("Signin")
    clearTextInput()
    console.log(user)
    console.log(user.phonenumber)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        {/* <View >
          <Ionicons name="ios-chevron-back" size={40} color="black"  onPress={() => navigation.navigate('Home')}  style={{paddingTop:'4%'}}/>
        </View> */}
        <View style={styles.signuptitletop}>
        <Text style={{color:'black',fontSize: 30,fontWeight:'bold'}}>Create </Text>
        <Text style={{color:'white',fontSize: 30,fontWeight:'bold'}}>Your</Text>
        <Text style={{color:'black',fontSize: 30,fontWeight:'bold'}}> account</Text>
        </View>
       
          <View style={styles.formcontainer1}>
          <Text style={styles.signuptitle}>Sign Up</Text>
          <View style={styles.formcontainer}>
          <View style={styles.signupmaincontainer1}>
            <View>
              <AntDesign name="user" size={20} color='#ffd11c' paddingTop='6%' paddingLeft='3%' />
            </View>
            <TextInput
              style={{ paddingLeft: '3%' }}
              placeholderTextColor={'black'}
              placeholder="User Name"
              value={displayName}
              onChangeText={text => setdisplayName(text)}
            />
          </View>
          <View style={styles.signupmaincontainer2}>
            <View>
              <Feather name="phone" size={20} color='#ffd11c' paddingTop='6.5%' paddingLeft='3.5%' />
            </View>
            <TextInput
               autoComplete='tel'
              style={{ paddingLeft: '3%' }}
              placeholderTextColor={'black'}
              placeholder="Phone Number"
              value={phonenumber}
              onChangeText={text => setPhonenumber(text)}
            />
          </View>
          <View style={styles.signupmaincontainer3}>
            <View>
              <MaterialCommunityIcons name="email-outline" size={20} color='#ffd11c' paddingTop='6%' paddingLeft='3%' />
            </View>
            <TextInput
             autoComplete='email'
              style={{ paddingLeft: '3%' }}
              placeholderTextColor={'black'}
              placeholder="Email id"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={styles.signupmaincontainer4}>
          <View>
          <AntDesign name="lock1" size={20} color='#ffd11c' paddingTop='6%'  paddingLeft='3%'/>
          </View>
          <TextInput
           autoComplete='current-password'
          style={{paddingLeft:'3%'}}
          placeholderTextColor={'black'}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text=>setPassword(text)}
          />
      </View>
      <View style={styles.formdown}>
      <Fontisto name="checkbox-passive" size={20} color='#ffd11c' paddingTop='4%' />
      <Text style={{color:'black',fontSize:16,paddingTop:'4%'}}> Accept </Text>
      <Text style={{color:'#ffd11c',fontSize:16,paddingTop:'4%'}}>Terms of services</Text>
      <Text style={{color:'black',fontSize:16,paddingTop:'4%'}}> & Privacy Policy</Text>
      </View>
      <TouchableOpacity style={styles.signupbtn} onPress={handlesignup}>
      <Text style={{fontSize: 19,fontWeight:'bold',textAlign:'center',paddingTop:'4.5%'}}>Sign Up</Text>
      </TouchableOpacity>
      </View>
          </View>
      <View style={styles.bottom}>
        <Text style={styles.bottominfo}>Already have an account? Sign in here</Text>
      </View>
      <View style={styles.lastbottom}>
        <Text style={{fontWeight:'bold'}}>Sign in With:</Text>
      </View>
    </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  lastbottom:{
    borderWidth: 1,
    height:'4%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  container: {
    backgroundColor: '#ffd11c',
    height: '100%',
    width: '100%',
  },
  signuptitletop: {
    flex: 1,
    flexDirection:'row',
    // borderWidth:1,
    // fontSize: 30,
    // fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:'5%',
    // paddingLeft: '4%',
    // height:'10%',
    // width:'100%',
  },
  signuptitle: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop:'5%',
    // textAlign:'center'
  },
  formcontainer1: {
    height: '74%',
    width: '90%',
    // borderWidth: 1,
    // flex:1,
    // justifyContent:'center',
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '5%',
    borderTopLeftRadius: '30%',
    borderTopRightRadius: '30%',
    borderBottomLeftRadius: '30%',
    borderBottomRightRadius: '30%',
    backgroundColor: 'white',
  },
  formcontainer: {
    height: '100%',
    width: '100%',
    // borderWidth: 1,
    // flex:1,
    // justifyContent:'center',
    alignItems: 'center',
    // marginTop:'5%',
    // marginBottom:'8%'
    // marginLeft: '10%',
  },
  bottom: {
    height: '4.5%',
    width: '78%',
    marginLeft: '11%',
    marginRight: '8%',
    paddingLeft: '5%',
    paddingTop: '1%',
    borderBottomLeftRadius: '20%',
    borderBottomRightRadius: '20%',
    backgroundColor: 'white',
  },
  bottominfo: {
    fontSize: 15,
  },
  signupmaincontainer1: {
    marginTop:'5%',
    borderWidth: 1,
    flexDirection: 'row',
    width: '90%',
    height: '10%',
    borderTopLeftRadius: '7%',
    borderTopRightRadius: '7%',
    borderBottomLeftRadius: '7%',
    borderBottomRightRadius: '7%',
  },
  signupmaincontainer2: {
    marginTop:'5%',
    borderWidth: 1,
    flexDirection: 'row',
    width: '90%',
    height: '10%',
    borderTopLeftRadius: '7%',
    borderTopRightRadius: '7%',
    borderBottomLeftRadius: '7%',
    borderBottomRightRadius: '7%',
  },
  signupmaincontainer3: {
    marginTop:'5%',
    borderWidth: 1,
    flexDirection: 'row',
    width: '90%',
    height: '10%',
    borderTopLeftRadius: '7%',
    borderTopRightRadius: '7%',
    borderBottomLeftRadius: '7%',
    borderBottomRightRadius: '7%',
  },
  signupmaincontainer4: {
    marginTop:'5%',
    borderWidth: 1,
    flexDirection: 'row',
    width: '90%',
    height: '10%',
    borderTopLeftRadius: '7%',
    borderTopRightRadius: '7%',
    borderBottomLeftRadius: '7%',
    borderBottomRightRadius: '7%',
  },
  formdown:{
    flexDirection:'row'
  },
  signupbtn:{
    marginTop:'5%',
    color:'black',
    backgroundColor:'#ffd11c',
    height:'9%', 
    width:'90%',
  }
})