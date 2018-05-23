import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Modal from './components/Modal/Modal.js'
import Thumbnails from './components/Thumbnails/Thumbnails.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      modal: false,
      items: [],
      currentItem: [],
      description: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.slice(0, 25),
          currentItem: [result[0]]
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
    this.setState({ modal: true, currentItem: imgSelect, description: localStorage.getItem(id) });
  }

  onThumbnailDeselect = () => {
    this.setState({ modal: false, description: '' });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
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
            <div className='thumbs'>
              {items.map(elem => <Thumbnails id={elem.id} title={elem.title} url={elem.url} key={elem.id} thumbnailurl={elem.thumbnailUrl} selector={this.onThumbnailSelect} />)}
            </div>
          </div>
          :
          <div>
            {this.state.currentItem.map(elem => <Modal id={elem.id} title={elem.title} url={elem.url} key={elem.id} thumbnailurl={elem.thumbnailUrl} deselector={this.onThumbnailDeselect} onChange={this.handleInputChange} description={this.state.description} />)}
          </div>
      );
    }
  }
}

export default App;
