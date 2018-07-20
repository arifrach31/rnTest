import React from 'react'
import { StyleSheet, FlatList, StatusBar, TextInput, Text, View } from 'react-native'
import { Container, Content, Left, Body, Right,
  Form, Item, Label, Input, Picker, Button, Icon,
  CheckBox, Spinner, List, ListItem } from 'native-base'

const Result = (props) => (
    <Content style={styles.content}>
      {props.loading.condition === true && props.loading.process_on === 'LOADING_SEARCH_ARTICLES' ? (
        <Spinner color="#000000" />
      ) : (
        <View>
          {props.success.condition === true && props.success.process_on === 'SUCCESS_SEARCH_ARTICLES' ? (
            <View>
              <Text>Result for : {props.resultText}</Text>
              <FlatList
                data={props.resultSearchArticles}
                renderItem={props.renderSearchArticles} />
            </View>
          ):(
            null
          )}
        </View>
      )}
    </Content>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    paddingTop: 10,
    paddingLeft: 10
  },
  btnSearch: {
    backgroundColor: '#00A1DD',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10
  },
  txtButton: {
    color: '#FFFFFF'
  }
})

export default Result