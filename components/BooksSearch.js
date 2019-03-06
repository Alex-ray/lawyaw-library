import { appearance } from '~/utils/styles';


export default () => (
    <div className="container">
        <div className="search-bar">
            <h1>BookSearch</h1>
        </div>
        <div className="search-results">
            <p>FiltredBookResults</p>
        </div>
        <style jsx="true">{`
            .container {
                flex-grow: 1;
                display: flex;
            }

            .search-bar {
                border: ${appearance.border};
                padding: ${appearance.layoutSpacing};
            }

            .search-results {
                flex-grow: 1;
                padding: ${appearance.layoutSpacing};
            }
        `}</style>        
    </div> 
);