import React from 'react'
import { createAppContainer } from 'react-navigation'
import AppNavigator from './navigator'

const AppContainer = createAppContainer(AppNavigator)

export interface Props {}

export default class App extends React.PureComponent<Props> {
  render() {
    return <AppContainer />
  }
}
