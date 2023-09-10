import React from 'react'
import { Todo } from '../models/model';
import { MdDelete } from 'react-icons/md'
import { AiFillEdit,AiOutlineCheckSquare } from 'react-icons/ai'

type Props = {
    todo: Todo;
    todolist: Array<Todo>;
    setTodolist: React.Dispatch<React.SetStateAction<Todo[]>>;
    key: number;
}

export const SingleTodo: React.FC<Props> = ({ todo,todolist,setTodolist,key }: Props) => {
    
    const handleCompleted = (id: number) => {
        setTodolist(todolist.map(todo =>
            todo.id === id? { ...todo, completed:!todo.completed } : todo))
    }

    const handleDelete = (id: number) => {
        setTodolist(todolist.filter(todo => todo.id !== id))
    }

    const handleEdit = (id:number) => {}

  return (
    <div className='single-todo-container'>
        <li key={key} className='single-todo'>
            {todo.todo}
        </li>
        <div className='single-todo-buttons'>
            <AiOutlineCheckSquare 
                style={ {height:'20px', width: '20px'} }
                className='single-todo-button'
                onClick={() => handleCompleted(todo.id)} />
            <MdDelete 
                style={ {height:'20px', width: '20px'} }
                className='single-todo-button' 
                onClick={() => handleDelete(todo.id)} />
                
            <AiFillEdit 
                style={ {height:'20px', width: '20px'} }
                className='single-todo-button'
                onClick={() => handleEdit(todo.id)} />  
        </div>
    </div>
  )
}
