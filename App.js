import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID
} from 'react-native-dotenv'
import { Header, Button, Spinner, Card, CardSection } from './src/components/common'
import LoginForm from './src/components/LoginForm'

class App extends Component {
  state = {
    loggedIn: null,
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      projectId: PROJECT_ID,
      storageBucket: STORAGE_BUCKET,
      messagingSenderId: MESSAGING_SENDER_ID,
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        )
      case false:
        return <LoginForm />

      default:
        return <Spinner />
    }
  }

  render() {
    return(
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App
