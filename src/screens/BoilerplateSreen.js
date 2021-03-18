import React , { useState} from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity , Image } from "react-native";
const  BoilerplateSreen = () =>  {
     const [counter, setstate] = useState(0)
    
    return (
       <View style={{flex: 1}}>
          <Button style={Styles.bu} title="incriment" onPress={() => {setstate(counter +1) }}/>
          <Button style={Styles.bu} title="Decriment" onPress={() => {setstate(counter -1) }}/>
          <Button style={Styles.bu} title="Decriment -10" onPress={() => {setstate(counter -10) }}/>
           <Text style={Styles.text}> Currunt count {counter} </Text>
          
 
           
       </View>
    )
}
const Styles = StyleSheet.create({
    text: {
      fontSize: 50,
      backgroundColor: "#f5f5dc",
      marginVertical : 20
    },
    bu :{
      marginVertical : 20

    }

      
  });
export default BoilerplateSreen