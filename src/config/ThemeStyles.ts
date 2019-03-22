import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import RF from 'react-native-responsive-fontsize'
import { verticalScale } from 'react-native-size-matters'

import { THEME_BG_COLOR, THEME_FG_COLOR } from './Colors'

export const ThemeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME_BG_COLOR,
  } as ViewStyle,
  title: {
    fontSize: RF(2.8),
    fontWeight: 'bold',
    textAlign: 'center',
    color: THEME_FG_COLOR,
    marginBottom: verticalScale(28),
  } as TextStyle,
  tagline: {
    fontSize: RF(2.5),
    textAlign: 'center',
    color: THEME_FG_COLOR,
    marginBottom: verticalScale(12),
  } as TextStyle,
  instructions: {
    textAlign: 'center',
    color: THEME_FG_COLOR,
    marginBottom: verticalScale(12),
  } as TextStyle,
})

export default {
  ThemeStyles,
}
