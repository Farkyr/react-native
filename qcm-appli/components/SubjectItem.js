import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

class SubjectItem extends Component {
    render() {

        return (
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={{ alignItems: 'center', borderRadius: 20, }}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.onPress}>
                    <Text style={styles.question}>{this.props.title}</Text>
                    <Text> {this.props.count}</Text>
                </TouchableOpacity>
            </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        
    },
    question: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10,
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
    },
    button: {
        alignItems: 'center',
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    }
});

export default SubjectItem;