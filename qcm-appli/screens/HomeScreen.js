import React from 'react';
import { SafeAreaView, FlatList, Text } from 'react-native';
import { Component } from 'react';
import SubjectItem from '../components/SubjectItem';
import { LinearGradient } from 'expo-linear-gradient';



class HomeScreen extends Component {
  static navigationOptions = {
    headerTitleStyle: {color: 'white'},
    title: 'Thèmes',
    headerStyle: {backgroundColor: '#C9851C'},
    fontWeight: 'bold',
  };
  constructor(props) {
    super(props);
    this.state = {
      subjects: [],
      title: '',
    };
  }
  componentDidMount() {
    this.fetchSubjects();
  }
  fetchSubjects() {

    fetch(process.env.API_URL + '/subjects')
        .then(response => response.json())
        .then(subjects => this.setState({ subjects: subjects }))
  }
  render() {
    return (
      <LinearGradient
          colors={['#c9851c', '#fa9178', '#ffb2c4', '#f8dbf2', '#ffffff']}
          style={{ alignItems: 'center'}}>
        <SafeAreaView>
          <FlatList
              data={this.state.subjects}
              renderItem={({ item }) => <SubjectItem title={item.title} count={item.questions.length} />}
              keyExtractor={(item, index) => index.toString()}
          />
  
        </SafeAreaView>
        </LinearGradient>
    );
  }
}
export default HomeScreen;