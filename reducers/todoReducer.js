import {
  ADD_TODO,
  CHECK_BOX,
  REMOVE_TODO,
  EDIT_ITEM,
  PRODUCT_LIST,
} from '../actions/todoAction/ActionTypes';

const INITIAL_STATE = {todos: []};

const todoReducer = (state = INITIAL_STATE, action) => {
  //console.log(action.type);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            userId: action.userId,
            id: action.id,
            title: action.title,
            completed: false,
          },
        ],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(idd => idd.id !== action.id),
      };

    case CHECK_BOX:
      // console.log(action.id)
      const newTodos = state.todos.map(item => {
        if (item.id == action.id) {
          //console.log({item, completed: true});
          return {...item, completed: true};
        }
        return item;
      });
      (state.todos = []), state.todos.push(...newTodos);
      return {...state, ...state.todos};

    case EDIT_ITEM:
      const newTodoss = state.todos.map(item => {
        if (item.id == action.id) {
          //console.log({item, completed: true});
          return {...item, title: action.title};
        }
        return item;
      });
      (state.todos = []), state.todos.push(...newTodoss);
      return {...state, ...state.todos};


      case PRODUCT_LIST:
      return{
        ...state,
        todos: action.data
      }
          
        

    default:
      return state;
  }
};

export default todoReducer;
