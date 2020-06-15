import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';

import Main from './components/Main';
import PokeInfo from './components/PokeInfo';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main}/>
            <Route path="/pokemon/:id" component={PokeInfo}/>
        </BrowserRouter>
    );
}