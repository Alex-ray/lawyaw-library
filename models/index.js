import { types, applySnapshot } from 'mobx-state-tree';
import deepmerge from 'deepmerge';

import books from '~/data/books.json';

let Store = null;

const initalState = {
    books: books,
    filters: {
        search: '',
        generes: [],
        authors: []
    }
};

const store = types
    .model({});

export function initializeStore(isServer, snapshot = null, state = {}) {
    const initialStoreState = deepmerge(initalState, state);

    if (isServer) {
        Store = store.create(initialStoreState);
    }

    if (Store === null) {
        Store = store.create(initialStoreState);
    }
    if (snapshot) {
        applySnapshot(Store, snapshot)
    }

    return Store;
}