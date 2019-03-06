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
    addAuthor(author) {
        if (!self.authorSelected(author)) {
            self.authors = self.authors.concat([author]);
        }
        self.setQueryUrl();
    },
    removeAuthor(author) {
        if (self.authorSelected(author)) {
            const authorIndex = self.authors.indexOf(author);
            self.authors.splice(authorIndex, 1);
        }
        self.setQueryUrl();
    },
    addGenre(genre) {
        if (!self.genreSelected(genre)) {
            self.genres = self.genres.concat([genre]);
        }
        self.setQueryUrl();
    },
    removeGenre(genre) {
        if (self.genreSelected(genre)) {
            const genreIndex = self.genres.indexOf(genre);
            self.genres.splice(genreIndex, 1);
        }
        self.setQueryUrl();
    },
    setSearch(value) {
        self.search = value;
        self.setQueryUrl();
    }
})).views(self => ({
    emptyFilters() {
        return (
            self.noSearchFilter() &&
            self.noGenreFilters() &&
            self.noAuthorFilters()
        );
    },
    noGenreFilters() {
        return self.genres.length === 0;
    },
    noAuthorFilters() { 
        return self.authors.length === 0;
    },
    noSearchFilter() {
        return self.search.length === 0 ;
    },
    genreSelected(genre) {
        return self.genres.indexOf(genre) > -1
    },
    authorSelected(author) {
        return self.authors.indexOf(author) > -1
    },
    searchFilter(value) {
        return (
            self.search.length > 0 && 
            value.indexOf(self.search.toLowerCase()) > -1
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