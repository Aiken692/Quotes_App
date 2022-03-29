import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {

  const addQuoteHandler = quoteData => {
    console.log(quoteData);
  }
  return (
    <QuoteForm onAddquote={addQuoteHandler}/>
  )
}

export default NewQuote