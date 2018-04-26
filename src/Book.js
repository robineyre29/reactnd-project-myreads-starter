import React, { Component } from 'react'



class Book extends Component {

  getShelfFromBook(book) {
    const bookFound = this.props.books.find(b => b.id === book.id);

    if (bookFound) {
      return bookFound.shelf;
    } else {
      return 'none'
    }
  }


	render() {
		return(
		<li key={this.props.book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`}}></div>
                            <div className="book-shelf-changer">
                              <select value={this.getShelfFromBook(this.props.book)} onChange={(event) => this.props.updateSelect(this.props.book, event.target.value)}>

                                <option value="none" disabled>Move to...</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="currentlyReading">Currently Reading</option>
                                
                                <option value="read">Read</option>
                                <option value="none">None</option>

                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.book.title}</div>
                          <div className="book-authors">{this.props.book.authors}</div>
                        </div>
                      </li>
	)}
}

export default Book