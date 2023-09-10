import React from 'react'
import { Todo } from '../models/model';
import { SingleTodo } from './SingleTodo';

interface Props {
    todolist: Todo[];
    setTodolist: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todolist,setTodolist }: Props) => {
  const todosCompleted = todolist.filter(todo => todo.completed === true);
  const todosNotCompleted = todolist.filter(todo => todo.completed === false);

  return (
    <div className='todos-container'>
      <ul className='not-completed-todos-container'>
        {todosNotCompleted.map(todo => (
          <SingleTodo 
            todo={todo} 
            todolist={todolist} 
            setTodolist={setTodolist} 
            key={todo.id} />
            
        ))}
      </ul>
      <ul className='completed-todos-container'>
        {todosCompleted.map(todo => (
          <SingleTodo 
            todo={todo} 
            todolist={todolist} 
            setTodolist={setTodolist} 
            key={todo.id} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList