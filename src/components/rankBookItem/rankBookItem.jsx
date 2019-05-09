import React, { Component } from 'react';
import './rankBookItem.scss'

export class RankBookItem extends Component {
    state = {}
    render() {
        const { book } = this.props;
        return (
            <div id="rank-item-wrap">
                <div className="img"><a href="#"><img src={book.img} alt={book.bookName} /></a></div>
                <div className="content">
                    <div className="book-name"><a href="#">{book.bookName}</a></div>
                    <a href="#" className="rating-star">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        <span>{book.rating}</span>
                    </a>
                    <div className="author">{book.bookAuthor}</div>
                </div>
            </div>
        );
    }
}