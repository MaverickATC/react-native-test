import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginVertical: 20,
    width: '100%',
    padding: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CACECA',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    paddingBottom: 16,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inStock: {
    height: 36,
    minWidth: 110,
  },
  inStockText: {
    color: '#ffffff',
    textTransform: 'uppercase',
    fontSize: 16,
    lineHeight: 32,
    fontWeight: '700',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  priority: {
    fontSize: 18,
    fontWeight: '700',
  },
})
