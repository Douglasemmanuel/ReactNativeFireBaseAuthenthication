import { StyleSheet, Text, View, SafeAreaView ,Image} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const Home = ({navigation}) => {
    const SignUpHandler = ()=>{
      navigation.navigate('Signup')
      }
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar style="auto" />
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../assets/logo.png')} style={{width:"80%",height:"60%"}}/>
        {/* <Text>HELLO</Text> */}
      </View>
      <View style={styles.bottom}>
        <Text style={{fontSize:40,fontWeight:'bold'}}>Welcome</Text>
        <Text style={{fontSize:18}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
        <View style={styles.ButtonMouse}>
        <TouchableOpacity style={styles.signIn} onPress={()=>navigation.navigate('Signin')}><Text style={styles.titlebtn}>Sign In</Text></TouchableOpacity>
        <TouchableOpacity style={styles.signUp} onPress={()=>navigation.navigate('Signup')}><Text style={styles.titlebtn}>Sign Up</Text></TouchableOpacity>
        </View>
       
      </View>
    </View>
    </SafeAreaView>
  )
  }

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      logo:{
      // borderWidth:1,
      width:'65%',
      height:'40%',
      flexDirection:'row',
      // margin :'auto',
      alignItems: 'center',
      justifyContent: 'center',
      },
      bottom:{
        // borderWidth:1,
        height:'50%',
        width:'100%',
        borderTopLeftRadius:'30%',
        borderBottomLeftRadius:'40%',
        backgroundColor:'#ffd11c',
        paddingLeft:'10%',
        paddingRight:'10%',
        paddingTop:'10%',
    
      },
      ButtonMouse:{
        flexDirection:'row',
        justifyContent:'space-between',
        // borderWidth:2,
        marginTop:'5%',
        width:'100%',
        height:'13%',
      },
      signIn:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black',
        borderWidth:1,
        height:'100%',
        width:'40%',
        borderRadius:20,
      },
      signUp:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black',
        borderWidth:1,
        height:'100%',
        width:'40%',
        borderRadius:20,
      },
      titlebtn:{
        color:'white',
        alignItems:'center',
        justifyContent:'center',
        fontSize:20,
        fontWeight:'bold',
      },
})