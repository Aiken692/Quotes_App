import React from 'react';
import { Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuotes from '../components/quotes/HighlightedQuote';

const Dummy_Quotes = [
  {id:'q1', author:'walter', text:'Learning React js'},
  {id:'q2', author:'alter', text:'Learning Vue js'}
]

const QuoteDetails = () => {
    const params = useParams();

    const quote = Dummy_Quotes.find(quote => quote.id === params.quoteId);

    if(!quote){
      return <p>No Qoute found!</p>
    }

  return (
      <>
        <HighlightedQuotes text={quote.text} author={quote.author}/>
        <Route path ={`/quotes/${params.quoteId}/comments`}>
          <Comments/>
        </Route>
      </>
  )
}

export default QuoteDetails