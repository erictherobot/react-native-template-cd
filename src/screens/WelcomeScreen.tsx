import React from 'react'
import { Text, View } from 'react-native'

import { ButtonComp } from '../components'
import { ThemeStyles } from '../config'
import { THEME_BG_COLOR, THEME_BUTTON_COLOR, THEME_FG_COLOR } from '../config/Colors'

export interface WelcomeScreenProps {}

export class WelcomeScreen extends React.PureComponent<WelcomeScreenProps> {
  static navigationOptions = {
    title: 'Welcome Screen',
    headerStyle: {
      backgroundColor: THEME_BG_COLOR,
      borderBottomWidth: 0,
    },
    headerTintColor: THEME_FG_COLOR,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  handleClick = () => {
    // Navigate to Other Screen
    this.props.navigation.navigate('OtherScreen')
  }
  render() {
    return (
      <View style={ThemeStyles.container}>
        <Text style={ThemeStyles.title}>Welcome to React Native</Text>
        <Text style={ThemeStyles.tagline}>
          Quickly start a new React Native Project pre-configured with TypeScript, Prettier, TSLint,
          Redux, Firebase, Fastlane, Crashlytics, and React-Navigation.
        </Text>
        <Text style={ThemeStyles.instructions}>
          Feel free to edit this screen: src/Screens/WelcomeScreen.tsx
        </Text>
        <ButtonComp
          title="Other Screen"
          onPress={this.handleClick}
          color={THEME_BUTTON_COLOR}
          accessibilityLabel="Learn more about this button"
        />
      </View>
    )
  }
}
