import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  button: {
    height: 40,
    minWidth: 110,
    borderRadius: 4,
    textTransform: 'uppercase',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  primary: {
    color: '#ffffff',
  },
  secondary: {
    color: '#000000',
  },
})
