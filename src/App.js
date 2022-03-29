import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './Pages/AllQuotes';
import QuoteDetails from './Pages/QuoteDetails';
import NewQuote from './Pages/NewQuote';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'><QuoteDetails /></Route>
          <Route path='/new-quote'><NewQuote /></Route>
        </Switch>
      </Layout>
    </>
  )
}

export default App