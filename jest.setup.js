jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    NavigationContainer: ({children}) => children,
  };
});

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: () => 'FontAwesomeIcon',
}));

jest.mock('@react-navigation/stack', () => {
  return {
    createStackNavigator: jest.fn().mockReturnValue({
      Navigator: () => 'Navigator',
      Screen: () => 'Screen',
    }),
  };
});

jest.mock('@react-navigation/bottom-tabs', () => {
  return {
    createBottomTabNavigator: jest.fn(() => ({
      Navigator: ({children}) => children,
      Screen: ({children}) => children,
    })),
  };
});

jest.mock('@react-navigation/stack', () => {
  return {
    createStackNavigator: jest.fn(() => ({
      Navigator: ({children}) => children,
      Screen: ({children}) => children,
    })),
  };
});
