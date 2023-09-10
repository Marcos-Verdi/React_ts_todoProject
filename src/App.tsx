import React from 'react';
import './App.css';
import { useState } from 'react'
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './models/model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todolist, setTodolist] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodolist([...todolist,{ id: Date.now(), todo:todo, completed: false }]);
      setTodo("");
    }
  }

  return (
    <div className='app-container'>
      <h1 className='main-title'>Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todolist={todolist} setTodolist={setTodolist} />
    </div>
  );
}

export default App;
