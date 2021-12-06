import React  , { useState}from "react"
import { Button, StyleSheet, Text, View ,TextInput} from "react-native"





const Home = () =>{
    const [name ,setName] = useState('')
    return (
      <>
     
     <TextInput
        style={styles.input}
        onChangeText={()=>setName(e.target.value)}
      />
      </>
    )
}
export default Home


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });