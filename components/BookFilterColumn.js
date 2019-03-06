import { observer, inject } from "mobx-react";

import SearchInput from '~/components/SearchInput';
import Title from '~/components/Title';
import { appearance } from '../utils/styles';
import FilterOptions from '~/components/FilterOptions';

@inject('store')
@observer
class BookFilterColumn extends React.Component {    
    render () {
        const searchValue = this.props.store.filters.search;
        const genreOptions = this.props.store.genreOptions();
        const authorOptions = this.props.store.authorOptions();

        return (
            <nav>
                <SearchInput 
                    value={searchValue} 
                    onChange={this.handleSearchChange} 
                    placeholder="Search Books" 
                />
                <div className="row">
                    <Title label="Filter By Genre" />
                    <FilterOptions 
                        options={genreOptions} 
                        onSelect={this.props.store.filters.addGenre} 
                        onUnselect={this.props.store.filters.removeGenre} 
                    />
                </div>
                <div className="row">
                    <Title label="Filter By Author" />
                    <FilterOptions 
                        options={authorOptions} 
                        onSelect={this.props.store.filters.addAuthor}
                        onUnselect={this.props.store.filters.removeAuthor}
                        showMax={10}
                    />
                </div>
                <style>{`
                    .row {
                        margin-top: ${appearance.layoutSpacing};
                    }
                `}</style>
            </nav>
        );
    }

    handleSearchChange = (e) => {
        this.props.store.filters.setSearch(e.target.value);
    }
}

export default BookFilterColumn;