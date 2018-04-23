import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchPage from './SearchPage'


class BooksApp extends React.Component {
  state = {
    books: []
  }

componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({books})
  })
}
selectStateUpdate(book,shelf) {
  console.log("Sel"+JSON.stringify(book)+shelf)
  this.updateShelf(book, shelf);

}
updateShelf = (book, shelf) => {
  console.log("Updating shelf")
  BooksAPI.update(book, shelf)
  .then(() => BooksAPI.getAll())
  .then((books) => {
    this.setState({books})
  })
}
  render() 

  {
    console.log("Hello im rendering main appjs")
    return (

      <div className="app">

        <Route exact path='/' render={() => (
        <ListBooks
          books={this.state.books}
          onUpdateShelf={this.updateShelf}
          updateSelect={this.selectStateUpdate}

        />
        )}/>
        
        <Route path='/search' render={() => (
        <SearchPage
           books={this.state.books}
           onUpdateShelf={this.updateShelf}

        />
        )}/>     
        
      </div>
          
    
  )}

}


export default BooksApp
