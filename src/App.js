import React from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Switch>
      <Route path='/quotes'></Route>
      <Route path='/quotes/:quoteId'></Route>
      <Route path='/new-quote'></Route>
    </Switch>
      App
    </>
  )
}

export default App