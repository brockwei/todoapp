import * as React from 'react';

// Components
import CategoryList from './containers/categoryList';
import TodoList from './containers/todoList';
import TodoForm from './containers/todoForm';
import Settings from './containers/settings';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="app-container">
          <TodoForm />
          <div className="table-container">
            <CategoryList />
            <TodoList />
            <Settings />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
