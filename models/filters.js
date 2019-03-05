import { types } from 'mobx-state-tree';

const Fitlers = types.model({
    search: types.string,
    genres: types.array(types.string),
    authors: types.array(types.string)
}).views(self => ({
    searchFilter(value) {
        return (
            self.search.length > 1 && 
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