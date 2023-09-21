import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#281F67',
      }}>
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="ProductDetails"
        //@ts-ignore
        component={ProductDetails}
        options={{title: 'Detalhes do Produto'}}
      />
    </Stack.Navigator>
  );
};

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const TabBarIcon: React.FC<TabBarIconProps> = ({color, size}) => (
  <FontAwesomeIcon icon={faHome} color={color} size={size} />
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: TabBarIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
