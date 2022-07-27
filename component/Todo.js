import React, {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  AddTodo,
  checkk,
  RemoveTodo,
  editt,
  fetchapi
} from '../actions/todoAction/todoActions';
import CheckBox from '@react-native-community/checkbox';
import {styles} from './TodoStyles';
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

const Todo = () => {
  const [todoValue, setTodoValue] = useState('');
  const [toogle, settoogle] = useState(true);
  const [iddd, setIddd] = useState(null);

  const dispatch = useDispatch();
  
  const mydata = useSelector(state => state.todoReducer.todos);
  useEffect(()=>{
    dispatch(fetchapi())
  },[])
 
  
  //console.log(mydata)

  const addTodo = () => {
    if (todoValue.length > 0) {
      dispatch(AddTodo(todoValue));
      setTodoValue('');
    } else {
      alert(`Todo List Can't be Empty!!`);
    }
  };

  const onChangeBox = id => {
    dispatch(checkk(id));
  };


  const removeTodo = id => {
    dispatch(RemoveTodo(id));
  };
  

  const renderTodoList = () => {
    return (
      <FlatList
        data={mydata}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.flatlistview}>
            <CheckBox
              style={styles.checkbox}
              value={item.completed}
              onValueChange={() => onChangeBox(item.id)}
            />

            <Text
              style={{
                ...styles.text,
                textDecorationLine: item.completed ? 'line-through' : 'none',
              }}>
              {item.title}
            </Text>

            <TouchableOpacity onPress={() => removeTodo(item.id)}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../assets/delete-button.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                settoogle(!toogle);
                setTodoValue(item.title);
                setIddd(item.id);
              }}>
              <Image
                style={{height: 30, width: 30, margin:4 , alignItems:'center'}}
                source={require('../assets/edit-button1.png')}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.subview1}>
      <View style={styles.subview2}>
        
        <Text style={styles.textt}>TODO APP</Text>
        <TextInput
          style={styles.mainInput}
          onChangeText={setTodoValue}
          value={todoValue}
        />
        {/* <TouchableOpacity onPress={()=>dispatch(fetchapi)}>
        <Text style={{borderWidth:1, width:34, marginLeft:160,paddingLeft:4, backgroundColor:'#fffafa',color:'black'}}>API</Text>
        </TouchableOpacity> */}
        {toogle ? (
          <TouchableOpacity onPress={addTodo}>
            <Text style={styles.addbutton}>+</Text>
    
      
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              settoogle(!toogle);
              dispatch(editt(iddd, todoValue));
              setTodoValue('');
              setIddd(null);
            }}>
            <Image
              style={{height: 30, width: 30, margin: 10}}
              source={require('../assets/edit-button1.png')}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.view2}>{renderTodoList()}</View>
    
    </View>
  );
};

export default Todo;
