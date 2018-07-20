import React from 'react'
import { StyleSheet, FlatList, StatusBar, Dimensions } from 'react-native'
import { Container, Content } from 'native-base'

const Result2 = (props) => (
  <Container style={styles.container}>
    <StatusBar
      backgroundColor="#00a1dd"
      barStyle="light-content"
    />
    <Content>
    <FlatList
        style={styles.content}
        numColumns={2}
        data={props.dataMenusButton}
        renderItem={props.renderMenusButton} />
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    paddingTop: 10,
    paddingLeft: 10
  }
})

export default Result2