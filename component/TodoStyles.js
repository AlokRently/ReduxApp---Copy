import {StyleSheet, Dimensions} from 'react-native';

let width = Dimensions.get('window').width;

const TodoStyles = {
  main: {
    alignItems: 'center',
  },
  flatlistview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    backgroundColor: 'white',
    margin: 5,
  },
  text: {
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 2,
    marginVertical: 12,
   // marginLeft: 10,
    backgroundColor: 'white',
    padding: 8,
    fontSize: 20,
    fontWeight: 'normal',
    width: 250,
    textDecorationStyle: 'solid',
  },
  textinput: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 5,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
  },
  subview: {
    height: 170,
    width: 412,
    backgroundColor: '#E1A2B8',
    borderRadius: 25,
    marginVertical: 2,
  },
  textt: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  addbutton: {
    fontWeight: '800',
    fontSize: 40,
    //marginBottom: 95,
   marginLeft: 167,
    //marginRight: 180,
    //color:'#fffafa'
     
  },
  view2: {
    flex: 1,
    backgroundColor: '#E1A2B8',
    borderRadius: 25,
    marginVertical: 5,
  },
  mainInput: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 5,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
  },
  subview1: {
    flex: 1,
  },
  subview2: {
    height: 175,
   
    backgroundColor: '#E1A2B8',
    borderRadius: 25,
    marginVertical: 2,
  },
};
export const styles = StyleSheet.create(TodoStyles);
