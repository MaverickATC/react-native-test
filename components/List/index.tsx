import React from 'react'
import { View, Text, FlatList } from 'react-native'

//styles
import styles from './styles'

//components
import ListItem from '../ListItem'

//interfaces
import { IListItem } from '../../utils/interfaces'
interface IListProps {
  listData: IListItem[]
  onEdit: (itemId: string) => void
  onDelete: (itemId: string) => void
}

const List: React.FC<IListProps> = ({ listData, onEdit, onDelete }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        style={styles.list}
        data={listData}
        renderItem={({ item }) => (
          <ListItem item={item} onEdit={onEdit} onDelete={onDelete} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View>
            <Text style={styles.empty}>
              No products found, go ahead and add one!
            </Text>
          </View>
        }
      />
    </View>
  )
}

export default List
