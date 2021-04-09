import React, { useState } from 'react'
import { View, Text, Switch, Modal } from 'react-native'

//styles
import styles from './styles'

//interfaces
import { IListItem } from '../../utils/interfaces'
import Button from '../Button'
interface IChangeItemModalProps {
  item: IListItem
  isVisible: boolean
  onChange: () => void
  onClose: () => void
}

const ChangeItemModal: React.FC<IChangeItemModalProps> = ({
  item,
  isVisible,
  onChange,
  onClose,
}) => {
  const [inStock, setInStock] = useState(item.inStock)

  const handleChange = () => {
    onChange()
    onClose()
  }

  return (
    <Modal
      animationType='slide'
      transparent={false}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modal}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.priority}>
          Priority: <Text style={styles.priorityNumber}>{item.priority}</Text>
        </Text>

        <Text style={styles.label}>Status:</Text>
        <View style={styles.switchWrapper}>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor='#f4f3f4'
            ios_backgroundColor='#3e3e3e'
            onValueChange={() => {
              setInStock(!inStock)
            }}
            value={inStock}
          />
          <Text style={styles.switchLabel}>{inStock ? 'Have' : 'Run Out'}</Text>
        </View>
        <View style={styles.buttons}>
          <Button
            title='Change status'
            onClick={handleChange}
            disabled={inStock === item.inStock}
          />
          <Button title='Close' type='secondary' onClick={onClose} />
        </View>
      </View>
    </Modal>
  )
}

export default ChangeItemModal
