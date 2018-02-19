import React, {Component} from 'react';
import Input from './components/Input';
import Search from './components/Search';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div>
        <Input/>
        <Search/>
        <List/>
      </div>
    );
  }
}

export default App;
