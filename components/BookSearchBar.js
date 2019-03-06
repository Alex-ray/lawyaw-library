
import SearchInput from '~/components/SearchInput';
import Title from '~/components/Title';
import { appearance } from '../utils/styles';
import FilterOptions from '~/components/FilterOptions';

export default () => (
    <nav>
        <SearchInput placeholder="Search Books"/>
        <div className="row">
            <Title label="Filter By Genre" />
            <FilterOptions options={[
                {label: 'Non-Fiction', count: 32}, 
                {label: 'Fantasy', count: 150}, 
                {label: 'Thriller', count: 36}
            ]} />
        </div>
        <div className="row">
            <Title label="Filter By Author" />
            <FilterOptions options={[
                { label: 'Dickens, Charles', count: 32 },
                { label: 'Twain, Mark', count: 150 },
                { label: 'Stephen King', count: 36 }
            ]} />
        </div>
        <style>{`
            .row {
                margin-top: ${appearance.layoutSpacing};
            }
        `}</style>
    </nav>
);