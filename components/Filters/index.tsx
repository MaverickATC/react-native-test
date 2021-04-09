import React from 'react'
import { View, Text, Picker } from 'react-native'

//styles
import styles from './styles'

//interfaces
interface IFilterProps {
  value: string
  onChange: (filter: string) => void
}

const Filters: React.FC<IFilterProps> = ({ value, onChange }) => {
  return (
    <View style={styles.filtersWrapper}>
      <Text style={styles.filtersTitle}>Filters</Text>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => onChange(itemValue)}
      >
        <Picker.Item label='See all' value='' />
        <Picker.Item label='Have' value='have' />
        <Picker.Item label='Run Out' value='out' />
      </Picker>
    </View>
  )
}

export default Filters
