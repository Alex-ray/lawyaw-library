import * as React from 'react';
import App from '~/components/App';

export default class extends React.Component {
    static async getInitialProps({ query }) {
        return {
            store: {
                filters: {
                    search: query.search || '',
                    genres: query.genres || [],
                    authors: query.authors || []
                },
            }
        }
    }

    render() {
        return (
            <App>
                <h1>HELLO WORLD</h1>
            </App>
        );
    }
}