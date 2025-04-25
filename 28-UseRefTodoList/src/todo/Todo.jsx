import React, { useState } from 'react';
import styles from './Todo.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editValue, setEditValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim() === '') {
            toast.error('Please enter a todo!');
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: inputValue,
            completed: false,
        };

        setTodos([...todos, newTodo]);
        setInputValue('');
        toast.success('Todo added successfully!');
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
        toast.info('Todo status updated!');
    };

    const startEditing = (id, text) => {
        setEditingId(id);
        setEditValue(text);
    };

    const saveEdit = (id) => {
        if (editValue.trim() === '') {
            toast.error('Todo cannot be empty!');
            return;
        }

        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, text: editValue } : todo
            )
        );
        setEditingId(null);
        toast.success('Todo updated successfully!');
    };

    const cancelEdit = () => {
        setEditingId(null);
        toast.info('Edit cancelled');
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        toast.success('Todo deleted successfully!');
    };

    const deleteAllTodos = () => {
        setTodos([]);
        toast.success('All todos cleared!');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Todo List</h1>

            <div className={styles.inputContainer}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className={styles.input}
                    placeholder="Add a new todo..."
                />
                <button onClick={addTodo} className={styles.addButton}>
                    Add
                </button>
            </div>

            <div className={styles.todoList}>
                {todos.map((todo, index) => (
                    <div
                        key={todo.id}
                        className={`${styles.todoItem} ${todo.completed ? styles.completed : styles.pending
                            }`}
                    >
                        <span className={styles.todoNumber}>{index + 1}.</span>

                        {editingId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                    className={styles.editInput}
                                />
                                <button
                                    onClick={() => saveEdit(todo.id)}
                                    className={styles.saveButton}
                                >
                                    Save
                                </button>
                                <button
                                    onClick={cancelEdit}
                                    className={styles.cancelButton}
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <>
                                <span
                                    className={`${styles.todoText} ${todo.completed ? styles.strikethrough : ''
                                        }`}
                                >
                                    {todo.text}
                                </span>
                                <div className={styles.buttonGroup}>
                                    <button
                                        onClick={() => toggleComplete(todo.id)}
                                        className={styles.completeButton}
                                    >
                                        {todo.completed ? 'Undo' : 'Complete'}
                                    </button>
                                    <button
                                        onClick={() => startEditing(todo.id, todo.text)}
                                        className={styles.editButton}
                                        disabled={todo.completed}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteTodo(todo.id)}
                                        className={styles.deleteButton}
                                        disabled={!todo.completed}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {todos.length > 0 && (
                <button
                    onClick={deleteAllTodos}
                    className={styles.deleteAllButton}
                >
                    Delete All Todos
                </button>
            )}
        </div>
    );
};

export default TodoList;