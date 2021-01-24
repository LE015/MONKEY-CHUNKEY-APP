import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image

} from 'react-native';
import AppHeader from './components/AppHeader';
import db from './localdb';
import SoundButton from './components/SoundButton'
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      displaytext: '',
      chunks:[],
      phones:[]
    };
  }
  render() {
    return (
      <View>
        <AppHeader/>
        <Image style = {{width:100, height:100, alignSelf:'center' ,marginTop:10}}
        source = {{uri: 'https://graphicriver.img.customer.envatousercontent.com/files/294411210/Cool%20Monkey.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=30d9c938e7de55c856128afd3f669c0d'}}/> 
        <Text style={Styles.textstyle}>Please enter the word below</Text>
        <TextInput
          style={Styles.inputbox}
          onChangeText={(text) => {
            this.setState({ word: text });
          }}
          value={this.state.word}
        />
        <TouchableOpacity
          style={Styles.button}
          onPress={() => {
            var anycase = this.state.word.toLowerCase();
            this.setState({
              chunks:db[anycase].chunks
            });
            this.setState({
              phones:db[anycase].phones
              
            })
          }}
        >
        <Text style={{fontWeight:'bold'}}> GO </Text>
        </TouchableOpacity>
        <View>
        {this.state.chunks.map((item ,index) =>{
          return( 
            <SoundButton wordchunks = {this.state.chunks[index]} wordphones = {this.state.phones[index]}/>)
        })}</View>
        <Text>{this.state.displaytext}</Text>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  textstyle: {
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 75,
    fontSize: 15,
  },
  chunksstyle:{
    textAlign:"center",
    fontSize:15,

  },
  

  button: {
    width: 50,
    height: 60,
    alignSelf: 'center',
    margin: 10,
    backgroundColor: 'red',
    justifyContent:'center',
    textAlign: 'center'
  },
  inputbox: {
    marginTop: 30,
    marginLeft: 75,
    color: 'black',
    width: 200,
    height: 40,
    borderWidth: 4,
  },
});
