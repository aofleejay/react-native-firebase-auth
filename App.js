import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header } from './src/components/common'

class App extends Component {
  render() {
    return(
      <View>
        <Header headerText="Authentication" />
        <Text>Hello World</Text>
      </View>
    )
  }
}

export default App
