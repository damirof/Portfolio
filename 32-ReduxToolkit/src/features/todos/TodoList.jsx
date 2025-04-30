import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, editTodo, deleteTodo, deleteAllTodos, toggleComplete } from './todosSlice';
import EditModal from '../../components/EditModal';

const TodoList = () => {
  const [todoText, setTodoText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo(todoText));
      setTodoText('');
    }
  };

  const handleEdit = (todo) => {
    setCurrentTodo(todo);
    setIsModalOpen(true);
  };

  const handleSaveEdit = (newText) => {
    dispatch(editTodo({ id: currentTodo.id, newText }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllTodos());
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className="todo-container">
      <h1 style={{textAlign:"center"}}>Todo List</h1>
      
      <div className="todo-input">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      
      <div className="todo-list">
        {todos.map(todo => (
          <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <span>{todo.text}</span>
            <div className="todo-actions">
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      
      {todos.length > 0 && (
        <div className="delete-all">
          <button onClick={handleDeleteAll}>Delete All</button>
        </div>
      )}
      
      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentTodo={currentTodo}
        onSave={handleSaveEdit}
      />
    </div>
  );
};

export default TodoList;