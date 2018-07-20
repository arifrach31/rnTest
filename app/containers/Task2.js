import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import {
    Container, Content, Text,
    Form, Item, Label, Input, Button
} from 'native-base'

import Result2 from '../components/Result2';
import Images from '../particles/Images'

import { fetchImages } from '../actions/images'

import { connect } from 'react-redux'

    
class Task2 extends Component {
  constructor(props) {
    super(props);
  }


  async componentDidMount() {
    await this.props.fetchImages()
  }

  render() {
    return (
        <Result2
            title="Get Images From API"

            dataMenusButton={this.props.images}
            renderMenusButton={({ item }) => (
                <Images
                    images={item}
                />
            )}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchImages: () => dispatch(fetchImages())
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    images: state.images
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task2)