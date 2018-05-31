import * as React from 'react';

import CategoryList from './containers/categoryList';
import TodoList from './containers/todoList';
import TodoForm from './containers/todoForm';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <CategoryList />
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
