import React from 'react'
import { Text, View } from 'react-native'

import { ButtonComp } from '../components'
import { ThemeStyles } from '../config'
import { THEME_BG_COLOR, THEME_BUTTON_COLOR, THEME_FG_COLOR } from '../config/Colors'

export interface OtherScreenProps {}

export class OtherScreen extends React.PureComponent<OtherScreenProps> {
  static navigationOptions = {
    title: 'Other Screen',
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
    // Navigate to Welcome Screen
    this.props.navigation.navigate('WelcomeScreen')
  }
  render() {
    return (
      <View style={ThemeStyles.container}>
        <Text style={ThemeStyles.title}>Other Screen</Text>
        <ButtonComp
          title="Home Screen"
          onPress={this.handleClick}
          color={THEME_BUTTON_COLOR}
          accessibilityLabel="Learn more about this button"
        />
      </View>
    )
  }
}
