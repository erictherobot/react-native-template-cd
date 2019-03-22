import React from 'react'
import { Button } from 'react-native'

interface ButtonCompProps {
  title?: any
  onPress?: any
  color?: string
  accessibilityLabel?: string
}

export const ButtonComp: React.FunctionComponent<ButtonCompProps> = props => {
  return (
    <Button
      title={props.title}
      onPress={props.onPress}
      color={props.color}
      accessibilityLabel={props.accessibilityLabel}
    />
  )
}
