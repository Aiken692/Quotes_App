import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import Comments from '../components/comments/Comments';
import HighlightedQuotes from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';


const QuoteDetails = () => {
  const match = useRouteMatch();
  const params = useParams();

  const {quoteId} = params;

  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if(status === 'pending'){
    return <div className='centered'>
      <LoadingSpinner/>
    </div>
  }

  if(error){
    return <p className='centered focused'>{error}</p>
  }

  if (!loadedQuote.text) {
    return <p>No Qoute found!</p>
  }

  return (
    <>
      <HighlightedQuotes text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
        </div>
      </Route>


      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  )
}

export default QuoteDetails