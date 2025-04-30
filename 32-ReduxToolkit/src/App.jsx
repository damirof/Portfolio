import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import TodoList from './features/todos/TodoList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;