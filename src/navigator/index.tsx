import { createAppContainer, createStackNavigator } from 'react-navigation'

// Import Screens
import { OtherScreen, WelcomeScreen } from '../screens'

const AppNavigator = createStackNavigator(
  {
    WelcomeScreen,
    OtherScreen,
  },
  {
    initialRouteName: 'WelcomeScreen',
  },
)

export default createAppContainer(AppNavigator)
