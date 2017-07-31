import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ConfigPage from './components/config/ConfigPage';
import ElementsPage from './components/elements/ElementsPage';
import Authors from './components/elements/authors/Authors';
import Categories from './components/elements/categories/Categories';
import Countries from './components/elements/countries/Countries';
import Books from './components/elements/books/Books';
import Carriers from './components/elements/carriers/Carriers';
import Covers from './components/elements/covers/Covers';
import CoursesPage from './components/coursesPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={CoursesPage} />
        <Route path="config" component={ConfigPage}/>
        <Route path="elements/" component={ElementsPage}>
            <IndexRoute component={Authors}/>
            <Route path="categories" component={Categories} />
            <Route path="countries" component={Countries} />
            <Route path="books" component={Books} />
            <Route path="carriers" component={Carriers} />
            <Route path="covers" component={Covers} />
        </Route>
    </Route>
);