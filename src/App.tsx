import * as React from 'react';

import ToDoForm from './containers/todoForm';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ToDoForm />
      </div>
    );
  }
}

export default App;
