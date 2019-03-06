import { observer, inject } from "mobx-react";

import Subtitle from '~/components/Subtitle';
import Card from '~/components/Card';

@inject('store')
@observer
class BookSearchResults extends React.Component {
    render () {
        // These observable values are needed in the render function so that
        // mobx knows that it should update this component when these values change
        // Do not remove.
        const searchValue = this.props.store.filters.search;
        const genres = this.props.store.filters.genres.toJSON();
        const authors = this.props.store.filters.authors.toJSON();

        const books = this.props.store.searchFilteredBooks();
        const resultsTitle = books.length === 1 ? `${books.length} Result` : `${books.length} Results`;

        return (
            <div>
                <Subtitle bold label={resultsTitle} />
                <div className="search-results-grid">
                    {books.map((book) => (
                        <Card 
                            key={book.searchValue()} 
                            title={book.Title} 
                            subtitle={book.formattedAuthor()} 
                        />
                    ))}
                </div>
                <style jsx="true">{`
                    .search-results-grid {
                        display: flex;
                        flex-wrap: wrap;
                    }
                `}</style>
            </div>
        );
    }
}

export default BookSearchResults;