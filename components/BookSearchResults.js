import { observer, inject } from "mobx-react";

import Subtitle from '~/components/Subtitle';
import Card from '~/components/Card';

@inject('store')
@observer
class BookSearchResults extends React.Component {
    render () {
        const books = this.props.store.filteredBooks();
        const resultsTitle = books.length === 1 ? `${books.length} Result` : `${books.length} Results`;

        return (
            <div>
                <Subtitle bold label={resultsTitle} />
                <div className="search-results-grid">
                    {books.map(({ Title, Author, Height }) => (
                        <Card key={`${Title}-${Author}-${Height}`} title={Title} subtitle={Author} />
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