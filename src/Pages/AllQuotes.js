import React from 'react';
import QuotesList from '../components/quotes/QuoteList';

const Dummy_Quotes = [
  {id:'q1', author:'walter', text:'Learning React js'},
  {id:'q2', author:'alter', text:'Learning Vue js'}
]

const AllQuotes = () => {
  return (
    <QuotesList quotes={Dummy_Quotes}/>
  )
}

export default AllQuotes