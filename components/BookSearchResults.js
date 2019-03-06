import Subtitle from '~/components/Subtitle';
import Card from '~/components/Card';

import books from '~/data/books.json';


export default () => (
    <div>
        <Subtitle bold label={`56 Results`}/>
        <div className="search-results-grid">
            {books.map(({ Title, Author, Height }) => (
                <Card key={`${Title}-${Author}-${Height}`} title={Title} subtitle={Author}/>
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