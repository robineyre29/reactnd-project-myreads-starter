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
  console.log("Fetching All Books from API")
  BooksAPI.getAll().then((books) => {
    this.setState({books})
  })
}

updateShelf = (book, shelf) => {
  BooksAPI.update(book, shelf)
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

        />
        )}/>
        
        <Route path='/search' render={() => (
        <SearchPage
           books={this.state.books}
        />
        )}/>     
        
      </div>
          
    
  )}

}


export default BooksApp
