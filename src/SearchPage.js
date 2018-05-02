import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {
 state = {
    searchResult: []
  }

searchBooks = (query) => {
	console.log(query)
	BooksAPI.search(query)
	.then((res) => {
		if (res !== undefined) {
		this.setState({searchResult: res})
			} else {
		this.setState({searchResult: []})
			}
	console.log("DERP "+ this.state.searchResult)
	})

	
}






	render() {
let booksResult = this.state.searchResult;
		return (
				<div className="search-books">
		            <div className="search-books-bar">
		             <Link
            			to='/'>
		             <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
		             </Link>
		              <div className="search-books-input-wrapper">
		                {/*
		                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
		                  You can find these search terms here:
		                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

		                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
		                  you don't find a specific author or title. Every search is limited by search terms.
		                */}
		                <input type="text" placeholder="Search by title or author" onChange={(event) => this.searchBooks(event.target.value)}/>

		              </div>
		            </div>
		            <div className="search-books-results">
		              <ol className="books-grid">
		               
		               {booksResult.map((book) => (
		              		<Book
                        updateSelect={this.props.updateSelect}
                        book={book}
                        books={this.props.books}
                      />
                      ))}
		              </ol>
		            </div>
		          </div>

	          )

	    }
	}

export default SearchPage