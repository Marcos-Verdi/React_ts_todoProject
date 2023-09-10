import React, { useRef } from 'react'
import './styles.css'

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo,setTodo,handleAdd }: Props) => {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form 
      className='input-form' 
      onSubmit={e => {
        handleAdd(e);
        inputRef.current?.blur();
        if (inputRef.current) {
          inputRef.current.value = '';
        }
      }}>
        <input
          ref={inputRef}
          type='input'
          onChange={e => setTodo(e.target.value)} 
          placeholder='Enter task to do'
          className='input-box' />
        <button
          type='submit'
          className='input--submit-button'>Save</button>
    </form>
  )
}

export default InputField