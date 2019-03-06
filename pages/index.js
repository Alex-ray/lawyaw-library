import * as React from 'react';
import App from '~/components/App';
import BooksSearch from '~/components/BooksSearch';

export default class extends React.Component {
    static async getInitialProps({ query }) {
        query.genres = query.genres || [];
        query.authors = query.authors || [];

        const genres = Array.isArray(query.genres) ? query.genres : [query.genres];
        const authors = Array.isArray(query.authors) ? query.authors : [query.authors];

        return {
            store: {
                filters: {
                    search: query.search || '',
                    genres,
                    authors
                },
            }
        }
    }

    render() {
        return (
            <App>
                <BooksSearch />
            </App>
        );
    }
}