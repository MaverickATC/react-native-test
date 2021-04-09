import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  modalButton: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00b300',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.52,
    shadowRadius: 2.22,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalButtonText: {
    color: '#ffffff',
    fontSize: 36,
    lineHeight: 42,
  },
  inputWrapper: {
    padding: 20,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: '600',
    paddingBottom: 16,
  },
  input: {
    height: 48,
    fontSize: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#CACECA',
  },
  switchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  switchLabel: {
    fontSize: 14,
    textTransform: 'uppercase',
    paddingLeft: 45,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
})
