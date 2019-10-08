import React from 'react';
import { ScrollView, StyleSheet, Text, Button, Switch, Picker } from 'react-native';
import { Component } from 'react';
import TextInput from "../kitui/TextInput";

class LinksScreen extends Component {
  static navigationOptions = {
    title: 'Proposer',
    headerStyle: {backgroundColor: '#C9851C'},
    headerTitleStyle: { color: 'white' },
    fontWeight: 'bold',
    fontSize: 40,
    alignSelf: 'center',
  };
  constructor(props) {
    super(props);
    this.state = {
      question: [],
      title: '',
      answer: '',
    };
  }
  addQuestion() {
    const question = { title: this.state.title, answer: this.state.answer, subject: this.state.subject };
    this.setState({
      question: [...this.state.question, question]
    })
  };
  render() {
    console.log('render Linkscreen')
    return (
      <ScrollView style={styles.gradient}>

        {<Text style={styles.add}>Ajouter une question</Text>}

        <Picker selectedValue={this.state.subjects} onValueChange={(itemValue) => this.setState({ subjects: itemValue })}>
          <Picker.Item label="PHP" value="PHP" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="HTML" value="html" />
          <Picker.Item label="CSS" value="css" />
        </Picker>

        <TextInput onChangeText={text => this.setState({ title: text })}value={this.state.title} placeholder='Question' />
        
        <Switch /><TextInput label="5"  style={styles.zone} onChangeText={text => this.setState({ answer: text })}  placeholder='Réponse 1' />
        <Switch /><TextInput style={styles.zone} onChangeText={text => this.setState({ answer: text })}  placeholder='Réponse 2' />
        <Switch /><TextInput style={styles.zone} onChangeText={text => this.setState({ answer: text })}  placeholder='Réponse 3' />
        <Switch /><TextInput style={styles.zone} onChangeText={text => this.setState({ answer: text })} /* value={this.state.answer.toString()} */ placeholder='Réponse 4' />
        
        <Button onPress={() => this.addQuestion()} title='Ajouter une question' style={styles.addvalidatealidate} />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  add: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
  },
  scroll: {
    fontSize: 20,
    justifyContent: 'space-between',
    padding: 30,
    margin: 2,
  },
  addValidate: {
    alignItems: 'flex-start',
    backgroundColor: '#9af28d',
    paddingVertical: 10,
    marginVertical: 10,
    marginLeft: 20,
    marginRight: 30,
    paddingLeft: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  zone: {
    color: 'grey',
    backgroundColor: 'rgba(141,150,150,0.13)',
    paddingTop: 10,
    paddingBottom: 5,
    marginLeft: 10,
    marginRight: 50,
  },
});
export default LinksScreen;