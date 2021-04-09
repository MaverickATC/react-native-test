import React from 'react'
import { View, Text, Pressable } from 'react-native'

//styles
import styles from './styles'

//interfaces
interface IButtonProps {
  title: string
  type?: string
  disabled?: boolean
  onClick: () => void
}

const Button: React.FC<IButtonProps> = ({
  title,
  type = 'primary',
  disabled,
  onClick,
}) => {
  return (
    <View>
      <Pressable
        disabled={disabled}
        style={[
          styles.button,
          type === 'primary'
            ? { backgroundColor: '#666699' }
            : { backgroundColor: '#ff1a62' },
          disabled && { backgroundColor: '#808080' },
        ]}
        onPress={onClick}
      >
        <Text
          style={[
            styles.text,
            type === 'primary' ? styles.primary : styles.secondary,
          ]}
        >
          {title}
        </Text>
      </Pressable>
    </View>
  )
}

export default Button
