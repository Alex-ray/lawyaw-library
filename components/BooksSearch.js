import { appearance } from '~/utils/styles';

import BookFilterColumn from '~/components/BookFilterColumn';
import BookSearchResults from '~/components/BookSearchResults';

export default () => (
    <div className="container">
        <div className="search-bar">
            <BookFilterColumn />
        </div>
        <div className="search-results">
            <BookSearchResults />
        </div>
        <style jsx="true">{`
            .container {
                flex-grow: 1;
                display: flex;
            }

            .search-bar {
                border-right: ${appearance.border};
                padding: ${appearance.layoutSpacing};
            }

            .search-results {
                flex-grow: 1;
                padding: ${appearance.layoutSpacing};
            }
        `}</style>        
    </div> 
);