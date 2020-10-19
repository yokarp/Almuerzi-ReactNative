import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MealsScreen from './screens/Meals';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import Modal from './screens/Modal';

const OnBoardingNavigator = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
}, {
  initialRouteName: 'Login',
})

const AppNavigator = createStackNavigator({
  Meals:{
    screen: MealsScreen,
  }
},{
  initialRouteName: 'Meals',
  headerLayoutPreset: 'center', //Center text in navbar
})

const RootStack = createStackNavigator({
  Main: AppNavigator,
  Modal: Modal
}, {
  mode: 'modal',
  headerMode: 'none',
})

const BaseStack = createSwitchNavigator({
  OnBoarding: OnBoardingNavigator,
  Root: RootStack
},{
  initialRouteName: 'OnBoarding',
  headerLayoutPreset: 'center', //Center text in navbar
})

export default createAppContainer(BaseStack)
