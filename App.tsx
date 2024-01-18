import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const App = () =>{
  return (
    <View style={{gap:8,flex:1,backgroundColor:"#DBE7C9",alignItems:'center'}}>
      <Image style={{width:"50%",height:"18%",marginTop:5}} source={require('./src/image/ARITHMETIC.jpg')} />
      <Text style={{color:'#294B29',fontSize:30}}>Grade Calculator</Text>
      <View style={{flexDirection:"column",gap:20,width:"100%",alignItems:'center'}}>
        <TextInput style ={{width:"90%",backgroundColor:'#789461',height:"10%",justifyContent:'center',borderRadius:20}}/>
        <TextInput style ={{width:"90%",backgroundColor:'#789461',height:"10%",justifyContent:'center',borderRadius:20}}/>
        <TextInput style ={{width:"90%",backgroundColor:'#789461',height:"10%",justifyContent:'center',borderRadius:20}}/>
        <TextInput style ={{width:"90%",backgroundColor:'#789461',height:"10%",justifyContent:'center',borderRadius:20}}/>
        <TextInput style ={{width:"90%",backgroundColor:'#789461',height:"10%",justifyContent:'center',borderRadius:20}}/>

        <TouchableOpacity style ={{backgroundColor:'white',borderRadius:50,borderWidth:1,height:"10%",justifyContent:'center',alignItems:'center',width:"30%"}}>
          <Text style={{color:'black',fontSize:20}}>Calculate</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App;