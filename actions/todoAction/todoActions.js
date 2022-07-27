import {ADD_TODO, REMOVE_TODO, EDIT_ITEM, FETCH_API} from './ActionTypes';
export const AddTodo = title => {
  return {
     type: 'ADD_TODO',
     userId: 1,
    id: Math.random(),
    title: title,
    completed: false,
  };
};
export const RemoveTodo = id => {
  return {
    type: 'REMOVE_TODO',

    id: id,
  };
};
export const checkk = id => {
  return {
    type: 'CHECK_BOX',
    id: id,
    //data:data,
    completed: false,
    //completed:false,
  };
};
export const editt = (id, title) => {
  return {
    type: 'EDIT_ITEM',
    id: id,
    title: title,
  };
};
export const fetchapi = () => {
  return {
    type: 'FETCH_API'
  }
}
