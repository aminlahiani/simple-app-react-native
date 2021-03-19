import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BoilerplateSreen from './src/screens/BoilerplateSreen';
import ColorScreen from './src/screens/ColorScreen';
import ComponentScreens from './src/screens/ComponentScreens';
import HomeScreen from './src/screens/HomeScreen';
import ImagesSreen from './src/screens/ImagesSreen';
import UselessTextInput from './src/screens/InputSreen';
import ListScreen from './src/screens/ListScreen';
import SquareScreen from './src/screens/SquareScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Compenent : ComponentScreens,
    List : ListScreen ,
    Image : ImagesSreen,
    Boilerplate : BoilerplateSreen,
    Color : ColorScreen,
    Square : SquareScreen,
    Input : UselessTextInput
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
