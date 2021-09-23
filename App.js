import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'


export default function App() {
  
  const [startCamera, setStartCamera] = React.useState(false)
  // const __takePicture = async () => {
  //   if (!camera) return
  //   const photo = await camera.takePictureAsync()
   
  // }

  const __startCamera = async () => {
    const {status} = await Camera.requestPermissionsAsync()
    if (status === 'granted') {       
      // start the camera
      setStartCamera(true)
    } else {
      Alert.alert('Access denied')
    }
  }
  
  return (
    startCamera ? (
      <Camera
        style={{flex: 1,width:"100%"}}
        ref={(r) => {
          camera = r
        }}
      ></Camera>
    ):
      
    <View style={styles.container}>
      <View
        style={styles.Text}>
        <TouchableOpacity style={styles.TextOPT} onPress={__startCamera}>
          <Text
            style={styles.SimpText} >
            Take picture
          </Text>
         
        </TouchableOpacity>
      </View>

      

      <StatusBar style="auto" />
      {/* <Camera
        style={{ flex: 1, width: "100%" }}
        ref={(r) => {
          camera = r
        }}
      ></Camera> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Text: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextOPT: {
    width: 130,
    borderRadius: 4,
    backgroundColor: '#14274e',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
  },
  SimpText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})