import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Post } from './features/post/ui/Post/Post';
import { PostForm } from './features/post/ui/PostForm/PostForm';
import { CreateGroup } from './features/group/ui/CreateGroup/CreateGroup';

interface AppProps {}
interface AppState {
  name: string;
  page: 'form' | 'collection' | 'post';
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      page: 'form',
    };
  }

  navigate(page) {
    this.setState({ page });
  }


  render() {
    return (
      <div>
        {this.state.page === 'form' && (
          <PostForm navigate={this.navigate.bind(this)} />
        )}
        {this.state.page === 'post' && <Post />}
        <hr />
        <CreateGroup />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
