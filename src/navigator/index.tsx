import { createAppContainer, createStackNavigator } from 'react-navigation'
import { THEME_BG_COLOR } from '../config/Colors'

// Import Screens
import { OtherScreen, WelcomeScreen } from '../screens'

const AppNavigator = createStackNavigator(
  {
    WelcomeScreen,
    OtherScreen,
  },
  {
    initialRouteName: 'WelcomeScreen',
    cardStyle: { backgroundColor: THEME_BG_COLOR },
  },
)

export default createAppContainer(AppNavigator)
