import AsyncStorage from '@react-native-async-storage/async-storage'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import Toast from 'react-native-fast-toast'

//interfaces
import { IListItem } from './utils/interfaces'

//components
import AddItemModal from './components/AddItemModal'
import List from './components/List'
import Filters from './components/Filters'

//styles
import styles from './styles/app'

const STORAGE_KEY = 'products'

export default function App() {
  const [groceryItems, setGroceryItems] = useState<IListItem[]>(
    [] as IListItem[]
  )
  const [filter, setFilter] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const toast = useRef<Toast>(null)

  const sortList = (a: IListItem, b: IListItem): number => {
    if (a.priority === b.priority) {
      if (a.name === b.name) {
        return 0
      }
      return a.name > b.name ? 1 : -1
    }
    return parseInt(a.priority) - parseInt(b.priority)
  }

  const filterList = (): IListItem[] => {
    switch (filter) {
      case 'have': {
        return groceryItems.filter((item) => item.inStock)
      }
      case 'out': {
        return groceryItems.filter((item) => !item.inStock)
      }
      default: {
        return groceryItems
      }
    }
  }

  const getItems = async () => {
    try {
      setLoading(true)
      const fetched = await AsyncStorage.getItem(STORAGE_KEY)
      if (fetched) {
        setGroceryItems(JSON.parse(fetched))
      }
      setLoading(false)
    } catch (error) {
      toast.current?.show('Products was not loaded', { type: 'danger' })
      setLoading(false)
    }
  }

  const addItem = async (item: IListItem) => {
    try {
      setLoading(true)
      const updated = [...groceryItems, item].sort((a, b) => sortList(a, b))
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      setGroceryItems(updated)
      toast.current?.show('Product added', { type: 'success' })
      setLoading(false)
    } catch (error) {
      toast.current?.show('Product was not added', { type: 'danger' })
      setLoading(false)
    }
  }

  const removeItem = async (itemToRemoveId: string) => {
    try {
      setLoading(true)
      const updated = groceryItems.filter((item) => item.id !== itemToRemoveId)
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      setGroceryItems(updated)
      toast.current?.show('Product removed', { type: 'success' })
      setLoading(false)
    } catch (error) {
      toast.current?.show('Product was not removed', { type: 'danger' })
      setLoading(false)
    }
  }

  const editItem = async (itemId: string) => {
    try {
      setLoading(true)
      const updated = [...groceryItems]
      const index = updated.findIndex((item) => item.id === itemId)
      updated[index].inStock = !updated[index].inStock
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      setGroceryItems(updated)
      toast.current?.show('Product status changed', { type: 'success' })
      setLoading(false)
    } catch (error) {
      toast.current?.show('Product status was not changed', { type: 'danger' })
      setLoading(false)
    }
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <View style={styles.container}>
      <Filters value={filter} onChange={setFilter} />
      <List listData={filterList()} onEdit={editItem} onDelete={removeItem} />
      <AddItemModal onAdd={addItem} />
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
      <Toast ref={toast} duration={2500} placement='top' offset={20} />
      <StatusBar style='auto' />
    </View>
  )
}
