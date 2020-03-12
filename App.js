import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import ShowScreen from './src/screens/ShowScreen';
import {Button} from 'react-native';
import RightHeaderButton from './src/components/headerButton'
const Stack = createStackNavigator();

let BlogApp = function blogApp() {


    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={ ({navigation}) => ({
            title:"Welcome"
          }) }
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={{title: 'Show Post'}}
        />
         <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={{title: 'Edit Post'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <Provider>
        <BlogApp/>
    </Provider>
  );
};

export default App;