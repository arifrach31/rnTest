import React from 'react'
import { StyleSheet, View, Dimensions,
  TouchableOpacity, Image, Linking } from 'react-native'
import { Content, Text } from 'native-base'

const Menus = (props) => {
  console.log('props:' , props)
  return(
  <Content style={styles.content}>
    <Image source={{ uri:props.images}} style={styles.image} resizeMode="contain"/>
  </Content>
)}

const styles = StyleSheet.create({
  content: {
    borderWidth: 1,
    borderColor: '#e2e2e2',
    marginRight: 10,
    marginBottom: 10,
    padding: 20,
  },
  contentDetail: {
    padding: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  image: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    width: '80%',
    height: 150,
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Menus
