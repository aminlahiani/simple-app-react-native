import React from "react";
import { Text, StyleSheet  , View ,FlatList} from "react-native";
import { color } from "react-native-reanimated";


const  ListScreen = () => {
    const friends = [
              { name : "Friends #1" , age : "20" },
                { name : "Friends #2" , age : "30" },
               { name : "Friends #3" , age : "40"  },
               { name : "Friends #4" , age : "60"  },
               { name : "Friends #5" , age : "30"  },
                { name : "Friends #6" ,age : "25"   },
               { name : "Friends #7" , age : "33"   },
                { name : "Friends #8"  , age : "25" },
               { name : "Friends #9" , age : "20" } ,
               { name : "Friends #10" , age : "53" },
        
    { name : "Friends #11",}
        
    ]
    return (
     <View style={{ backgroundColor: `#dcdcdc`,  justifyContent: 'center', alignItems: 'center' }}>
         <Text style={Styles.text}>List Screen</Text>
         <FlatList  style={Styles.list}
         data={friends} 
        // horizontal
         //showsHorizontalScrollIndicator={false}
         showsVerticalScrollIndicator={false}
           keyExtractor={(friend) => friend.key}
         renderItem={({item}) => {
             return <Text style={Styles.textname}>{item.name}- Age : {item.age}</Text>
         }}
         />
     </View>
    )
}

const Styles = StyleSheet.create({
    text: {
      fontSize: 30,
      backgroundColor: "#f5f5dc"
      
    },
    textname: {
        fontSize: 20,
        marginVertical :20,
        color : `#8b4513`,
       
        
      },
      list : {
        borderWidth: 5,
        marginTop : 20
        
      }
  });

export default ListScreen
