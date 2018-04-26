import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class ListBooks extends Component {

render() {
console.log("RENDERING");
let showBooks = this.props.books
let currentRead = showBooks.filter((book) => book.shelf === 'currentlyReading')
let wantRead = showBooks.filter((book) => book.shelf === 'wantToRead')
let readDone = showBooks.filter((book) => book.shelf === 'read')
console.log(showBooks)
	return(
		<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {currentRead.map((book) => (
                      <Book
                        updateSelect={this.props.updateSelect}
                        book={book}
                        books={this.props.books}
                      />
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {wantRead.map((book) => (
            		      <Book
                        updateSelect={this.props.updateSelect}
                        book={book}
                        books={this.props.books}
                      />
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {readDone.map((book) => (
            		        <Book
                        updateSelect={this.props.updateSelect}
                        book={book}
                        books={this.props.books}
                      />
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <Link
            	to='/search'>
            <div className="open-search">
              <a>Add Book</a>
            </div>
            </Link>
          </div>
	)}
}

export default ListBooks
