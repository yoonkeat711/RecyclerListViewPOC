import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecyclerListViewWithoutPagination from '../screens/RecyclerListViewWithoutPagination';
import RecyclerListViewPagination from '../screens/RecyclerListViewPagination';
import Menu from './../screens/Menu';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName={'Menu'}
      >
        <Stack.Screen
          name="Menu"
          component={Menu}
        />
        <Stack.Screen
          name="RecyclerListViewPagination"
          component={RecyclerListViewPagination}
          options={{title: 'Pagination'}}
        />
        <Stack.Screen
          name={"RecyclerListViewWithoutPagination"}
          component={RecyclerListViewWithoutPagination}
          options={{title: "Without Pagination", headerTitle: null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;