import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchPage from './SearchPage'
import './App.css'


class BooksApp extends React.Component {
  state = {
    books: []
  }

componentDidMount() {
  console.log("MOUNTING")
  BooksAPI.getAll().then((books) => {
    this.setState({books})
    })
  }
selectStateUpdate = (book,shelf) => {

  this.updateShelf(book, shelf);

  }
updateShelf = (book, shelf) => {
  BooksAPI.update(book, shelf)
  .then(() => {
    let bookscopy = {...this.state.books};
    let newBook = true
    for (let i=0; this.state.books.length > i; i++) {
      if (this.state.books[i].title === book.title) {
          bookscopy[i].shelf = shelf;
          this.setState({bookscopy})
          newBook = false
        } 
      }
    if (newBook) {
      book.shelf = shelf
      this.setState(prevState => ({
      books: [...prevState.books, book]
        }))
    }
    })
}







render() 

  {
    return (

      <div className="app">

        <Route exact path='/' render={() => (
        <ListBooks
          books={this.state.books}
          
          updateSelect={this.selectStateUpdate}

        />
        )}/>
        
        <Route path='/search' render={() => (
        <SearchPage
           books={this.state.books}
           
           updateSelect={this.selectStateUpdate}

        />
        )}/>     
        
      </div>
          
    
  )}

}


export default BooksApp
