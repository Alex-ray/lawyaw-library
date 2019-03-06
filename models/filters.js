import { types } from 'mobx-state-tree';
import qs from 'query-string';

const Fitlers = types.model({
    search: types.string,
    genres: types.array(types.string),
    authors: types.array(types.string)
}).actions(self => ({
    setQueryUrl () {
        const href = `?${qs.stringify({
            search: self.search,
            genres: self.genres,
            authors: self.authors
        })}`;

        if (window.history) {
            window.history.pushState({}, '', href);
        }
    },
    setSearch(value) {
        self.search = value.trim().toLowerCase();
        self.setQueryUrl();
    }
})).views(self => ({
    searchFilter(value) {
        if (self.search === '') return true;

        return (
            self.search.length > 0 && 
            value.indexOf(self.search) > -1
        );
    },
    genreFilter(value) {
        return (
            value.length > 1 && 
            self.genres.length > 0 && 
            self.genres.join(' ').indexOf(value) > -1
        );
    },
    authorFilter(value) {
        return (
            value.length > 1 && 
            self.authors.length > 0 && 
            self.authors.join(' ').indexOf(value) > -1 
        );
    }
}));

export default Fitlers;