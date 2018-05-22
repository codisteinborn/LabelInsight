import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Modal from './components/Modal/Modal.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      modal: false,
      items: [],
      currentItem : []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.slice(0, 25)
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
      )
  }

  onThumbnailSelect = id => {
    var imgSelect = this.state.items.filter(e => e.id === id);
    this.setState({modal : true , currentItem : imgSelect});
  }

  onThumbnailDeselect = () => {
    this.setState({modal : false , currentItem : []});
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
        [name]: value
    });
}

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return (
        !this.state.modal ?
        <div>
          <Header />
          {/* <Thumbnails /> */}
          <div>
            {items.map(item => (
              <div id={item.id}>
              <img key={item.id}  src={item.thumbnailUrl} alt={item.title} onClick={() => this.onThumbnailSelect()} />
              </div>
            ))}
          </div>
        </div> :
        <Modal current={this.currentItem} deselect={this.onThumbnailDeselect} />
      );
    }
  }
}

export default App;
