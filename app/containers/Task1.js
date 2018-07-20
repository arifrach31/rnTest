import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import {
    Container, Content, Text,
    Form, Item, Label, Input, Button
} from 'native-base'

import Result from '../components/Result';

import { connect } from 'react-redux'

const data = [
    {
      title: 'Video 1',
      url: 'https://mystorage/video1.jpeg'
    },
    {
      title: 'Video 2',
      url: 'https://mystorage/video2.jpeg'
    },
    {
      title: 'Video 3',
      url: 'https://mystorage/video3.jpeg'
    }
]

    
class Task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }


  async componentDidMount() {

  }


  render() {
    return (
        <Container>
            <Content>
            <Form>
                <Item floatingLabel style={styles.itemForm}>
                <Label>Search Video</Label>
                <Input
                    value={this.state.searchText}
                    onChangeText={(searchText) => this.setState({searchText})}
                    />
                </Item>
            </Form>

            <View>
              {data.map((d) => {
                console.log('state:', this.state.searchText)
                if(this.state.searchText == d.title){
                  return(
                    <Text>{d.title}</Text>
                  )
                }
              })}
            </View>
            
            </Content>
        </Container>
    )
  }
}
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

const mapDispatchToProps = (dispatch) =>{
  return{
    
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task1)