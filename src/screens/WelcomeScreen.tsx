import React, { useCallback } from 'react'
import { ScrollView, Text } from 'react-native'
import { NavigationScreenComponent, NavigationScreenProps } from 'react-navigation'

import { ButtonComp } from '../components'
import { ThemeStyles } from '../config'
import { THEME_BG_COLOR, THEME_BUTTON_COLOR, THEME_FG_COLOR } from '../config/Colors'

export interface WelcomeScreenProps extends NavigationScreenProps {
  // ... other props
}

export const WelcomeScreen: NavigationScreenComponent<WelcomeScreenProps> = ({
  navigation,
}: {
  navigation: any
}) => {
  const navigateOther = useCallback(() => {
    navigation.navigate('OtherScreen')
  }, [])
  return (
    <ScrollView contentContainerStyle={ThemeStyles.container}>
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
        onPress={navigateOther}
        color={THEME_BUTTON_COLOR}
        accessibilityLabel="Learn more about this button"
      />
    </ScrollView>
  )
}

WelcomeScreen.navigationOptions = {
  title: 'Welcome Screen',
  headerStyle: {
    backgroundColor: THEME_BG_COLOR,
    borderBottomWidth: 0,
  },
  headerTintColor: THEME_FG_COLOR,
  headerTitleStyle: {
    fontWeight: '600',
  },
}
