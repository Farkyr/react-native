import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import QuestionScreen from '../screens/QuestionScreen';
import LinksScreen from '../screens/LinksScreen';
const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
  
);
HomeStack.navigationOptions = {
  tabBarLabel: 'Thèmes',
  tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-list-box' : 'md-list-box'} />
  ),
};

HomeStack.path = '';





const QuestionStack = createStackNavigator(
  {
    Question: QuestionScreen,
  },
  config
);
QuestionStack.navigationOptions = {
  tabBarLabel: 'Questions',
  tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'} />
  ),
};
QuestionStack.path = '';




const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);
LinksStack.navigationOptions = {
  tabBarLabel: 'Proposer',
  tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'} />
  ),
};
LinksStack.path = '';



const tabNavigator = createBottomTabNavigator({
  HomeStack,
  QuestionStack,
  LinksStack,
});
tabNavigator.path = '';



export default tabNavigator;