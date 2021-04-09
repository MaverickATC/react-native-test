import React, { useState } from 'react'
import { Alert, Pressable, Text, View } from 'react-native'

//styles
import styles from './styles'

//components
import ChangeItemModal from '../ChangeItemModal'

//interfaces
import { IListItem } from '../../utils/interfaces'
interface IListItemProps {
  item: IListItem
  onEdit: (itemId: string) => void
  onDelete: (itemId: string) => void
}

const priorityColors: Record<string, string> = {
  '1': '#cc0000',
  '2': '#ff661a',
  '3': '#008000',
  '4': '#1aff1a',
  '5': '#005ce6',
}

const ListItem: React.FC<IListItemProps> = ({ item, onEdit, onDelete }) => {
  const [showModal, setShowModal] = useState(false)

  const handleDelete = () => {
    onDelete(item.id)
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setShowModal(true)
        }}
        onLongPress={() =>
          Alert.alert('Delete?', 'Are You sure?', [
            {
              text: 'YES',
              onPress: handleDelete,
            },
            { text: 'NO', onPress: () => {} },
          ])
        }
      >
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.info}>
          <View
            style={[
              styles.inStock,
              { backgroundColor: item.inStock ? '#336600' : '#990000' },
            ]}
          >
            <Text style={styles.inStockText}>
              {item.inStock ? 'Have' : 'Run out'}
            </Text>
          </View>
          <Text style={styles.priority}>
            Priority:{' '}
            <Text style={{ color: priorityColors[item.priority] }}>
              {item.priority}
            </Text>
          </Text>
        </View>
      </Pressable>
      <ChangeItemModal
        item={item}
        isVisible={showModal}
        onChange={() => {
          onEdit(item.id)
        }}
        onClose={() => setShowModal(false)}
      />
    </View>
  )
}

export default ListItem
