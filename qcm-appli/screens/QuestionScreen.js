import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { Component } from 'react';
import QuestionItem from '../components/QuestionItem';


class QuestionScreen extends Component {
    static navigationOptions = {
        title: 'Questions',
        headerStyle: {backgroundColor: '#C9851C'},
        headerTitleStyle: { color: 'white' },
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
            <SafeAreaView>
                <FlatList
                    data={this.state.subjects}
                    renderItem={({ item }) => <QuestionItem title={item.title} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </SafeAreaView>
        );
    }
}
export default QuestionScreen;