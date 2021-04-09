import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  priority: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 20,
  },
  priorityNumber: {
    fontStyle: 'italic',
  },
  switchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 40,
  },
  switchLabel: {
    fontSize: 14,
    textTransform: 'uppercase',
    paddingLeft: 45,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    paddingBottom: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  modal:{
    padding: 20
  }
})
