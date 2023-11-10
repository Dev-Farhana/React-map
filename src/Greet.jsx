import React from 'react';
import './App.css';

const Greet = () => {
    const quote = [ ` "From the River to the Sea Palestine will be Free " `];
    // const repeatQuote = quote.map((quote) => <h1 key={quote}> {quote} </h1>);
    const repeatQuote = Array(5).fill(quote);


  return (
    <>
    <h1>
      &quot;I swear by my pretty floral bonnet,I will <span> end </span>  you.&quot;
    </h1>
  
    <h1>
      &quot; From the River to the Sea <span> Palestine </span> will be <span> Free </span> .&quot;
    </h1>

    <h1>
      <span> {repeatQuote} </span> 
    </h1>


    </>

  )
}

export default Greet;


