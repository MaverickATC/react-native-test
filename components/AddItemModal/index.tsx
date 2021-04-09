import React, { useState } from 'react'
import {
  View,
  Text,
  Pressable,
  TextInput,
  Modal,
  Alert,
  Switch,
} from 'react-native'

//styles
import styles from './styles'

//components
import Button from '../Button'

//interfaces
import { IListItem } from '../../utils/interfaces'

interface IAddItemModalProps {
  onAdd: (newItem: IListItem) => void
}

const AddItemModal: React.FC<IAddItemModalProps> = ({ onAdd }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name, setName] = useState<string>('')
  const [priority, setPriority] = useState<string>('')
  const [inStock, setInStock] = useState<boolean>(false)

  const onClose = () => {
    setName('')
    setPriority('')
    setInStock(false)
    setIsModalOpen(false)
  }

  const onSave = () => {
    if (!name.trim() || !priority.trim()) {
      Alert.alert('Error', 'All fields should be filled', [
        { text: 'OK', onPress: () => {} },
      ])
    } else {
      onAdd({
        id: Date.now().toString(),
        name,
        priority,
        inStock,
        messages: [`Created: ${new Date(Date.now())}`],
      })
      onClose()
    }
  }

  const validatePriority = (text: string) => {
    if (text === '') {
      setPriority(text)
    } else {
      const priority = parseInt(text)
      if (priority) {
        if (priority <= 0 || priority > 5) {
          Alert.alert('Error', 'Priority should be from 1 to 5', [
            { text: 'OK', onPress: () => {} },
          ])
        } else {
          setPriority(text)
        }
      }
    }
  }

  return isModalOpen ? (
    <Modal
      animationType='slide'
      transparent={false}
      visible={isModalOpen}
      onRequestClose={() => {
        setIsModalOpen(false)
      }}
    >
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Enter product name:</Text>
        <TextInput
          style={styles.input}
          placeholder='Name'
          value={name}
          autoFocus
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Enter product priority(1 to 5):</Text>
        <TextInput
          style={styles.input}
          placeholder='Priority'
          keyboardType='numeric'
          value={priority}
          onChangeText={(text) => validatePriority(text)}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Status:</Text>
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
      </View>
      <View style={styles.buttons}>
        <Button
          title='Save'
          onClick={onSave}
          disabled={!name.trim() || !priority.trim()}
        />
        <Button title='Cancel' type='secondary' onClick={onClose} />
      </View>
    </Modal>
  ) : (
    <View style={styles.modalButton}>
      <Pressable onPress={() => setIsModalOpen(true)}>
        <Text style={styles.modalButtonText}>+</Text>
      </Pressable>
    </View>
  )
}

export default AddItemModal
