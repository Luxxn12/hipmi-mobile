import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {padding: 20, minHeight: 140},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {
    marginTop: 10,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#14B885',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#14B885',
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#08704F',
    borderBottomWidth: 2,
  },
});
