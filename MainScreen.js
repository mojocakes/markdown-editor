import React from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view'
import { Container, Header, Body, Title, Right, Left, Button, Text } from "native-base";


import getEmitter from "./editor/src/EventEmitter";
import EVENTS from "./editor/src/Events";
import { contentState } from "./editor/src/Helpers";

import { TextEditor, TextToolbar } from "./editor/index";

const eventEmitter = getEmitter()

export default class App extends React.Component {

  logState () {
    eventEmitter.emit(EVENTS.LOG_STATE)
  }

  convert () {
    eventEmitter.emit(EVENTS.CONVERT_TO_RAW)
  }

  onChange (data) {
    // console.log(data)
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <TouchableOpacity onPress={this.convert}>
              <Text>Convert</Text>
            </TouchableOpacity>
          </Left>
          <Body>
            <Title>Text Editor</Title>
          </Body>
          <Right>
            <TouchableOpacity onPress={this.logState}>
              <Text>Log State</Text>
            </TouchableOpacity>
          </Right>
        </Header>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            
            <KeyboardAwareView keyboardShouldPersistTaps animated>
              
              <View style={styles.editor}>
                <TextEditor
                  data={contentState}
                  onChange={this.onChange}
                />
              </View>
              
              <TextToolbar />
            </KeyboardAwareView>

          </View>
        </SafeAreaView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'stretch',
    // justifyContent: 'center',
    // flexDirection: 'column',
  },
  editor: {
    // minHeight: 100,
    // width: 300,
    padding: 20,
    flex: 1,
    // backgroundColor: 'red'
  }
});
