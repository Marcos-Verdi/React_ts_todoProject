import React, { useState } from 'react'
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

    const [editing,setEditing] = useState<boolean>(false);
    const [editTodo, seteditTodo] = useState<string>(todo.todo)
    
    const handleCompleted = (id: number) => {
        setTodolist(todolist.map(todo =>
            todo.id === id? { ...todo, completed:!todo.completed } : todo))
    }

    const handleDelete = (id: number) => {
        setTodolist(todolist.filter(todo => todo.id !== id))
    }

    const handleEdit = (e: React.FormEvent,id: number) => {
        e.preventDefault();
        setTodolist(todolist.map(todo => (
            todo.id === id? {...todo, todo:editTodo} : todo
        )));
        setEditing(false);
    }

  return (
    <div className='single-todo-container'>
        {editing? (
            <form
                className='editing-mode'
                onSubmit={(e) => handleEdit(e,todo.id) }>
                <input
                    value={editTodo} 
                    type='input'
                    onChange={e => seteditTodo(e.target.value)}
                    className='editing-input' />
                <button
                    type='submit'
                    className='editing-submit'>
                    Done
                </button>
            </form>
        ):(
            <>
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
                        onClick={() => { if(!editing && !todo.completed) {setEditing(!editing)} }} />  
                </div>
            </>
        )}
    </div>
  )
}
