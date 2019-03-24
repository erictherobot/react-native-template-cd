import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { NavigationScreenComponent, NavigationScreenProps } from 'react-navigation'

import { ButtonComp } from '../components'
import { ThemeStyles } from '../config'
import { THEME_BG_COLOR, THEME_BUTTON_COLOR, THEME_FG_COLOR } from '../config/Colors'

export interface OtherScreenProps extends NavigationScreenProps {
  // ... other props
}

export const OtherScreen: NavigationScreenComponent<OtherScreenProps> = ({
  navigation,
}: {
  navigation: any
}) => {
  const [getCount, setCount] = useState(0)
  const increment = React.useCallback(() => {
    setCount((prev: any) => prev + 1)
  }, [])
  const decrement = React.useCallback(() => {
    setCount((prev: any) => prev - 1)
  }, [])
  const navigateWelcome = React.useCallback(() => {
    navigation.navigate('WelcomeScreen')
  }, [])
  return (
    <ScrollView contentContainerStyle={ThemeStyles.container}>
      <Text style={ThemeStyles.title}>Other Screen</Text>
      <ButtonComp
        title="Home Screen"
        onPress={navigateWelcome}
        color={THEME_BUTTON_COLOR}
        accessibilityLabel="Learn more about this button"
      />
      <Text style={ThemeStyles.title}>React Hooks: {getCount}</Text>
      <ButtonComp
        title="Increment"
        onPress={increment}
        color={THEME_BUTTON_COLOR}
        accessibilityLabel="Learn more about this button"
      />
      <ButtonComp
        title="Decrement"
        onPress={decrement}
        color={THEME_BUTTON_COLOR}
        accessibilityLabel="Learn more about this button"
      />
    </ScrollView>
  )
}

OtherScreen.navigationOptions = {
  title: 'Other Screen',
  headerStyle: {
    backgroundColor: THEME_BG_COLOR,
    borderBottomWidth: 0,
  },
  headerTintColor: THEME_FG_COLOR,
  headerTitleStyle: {
    fontWeight: '600',
  },
}
