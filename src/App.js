import React, { useEffect, useState } from "react";
import "./App.scss";
import "./colors.js"
import COLORS_ARRAY from "./colors.js";
function App() {
  const [RandomNumber, setRandomNumber] = useState(0);
  const quoteDBUrl =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  const [quote, setQuote] = useState(
    "no cries cuervos o arrancaran sus ojos de sus cuencas"
  );
  const [author, setAuthor] = useState("Canserbero");
 

const [quotesArray,setquotesArray]=useState(null);
const [bgColor,setbgColor]=useState("#6D4C41");

const fetchQuotes = async(url)=>{
  const response = await fetch(url)
  const parsedJSON = await response.json()
setquotesArray(parsedJSON.quotes); 
}
useEffect(()=>{
 fetchQuotes(quoteDBUrl) 

},[quoteDBUrl])

  const getRandomQuote = () => {
    let randomInteger = Math.floor(quotesArray.length * Math.random());
    setRandomNumber(randomInteger);
    setbgColor(COLORS_ARRAY[randomInteger]);
    setQuote(quotesArray[randomInteger].quote);
    setAuthor(quotesArray[randomInteger].author);};
  

  return (
    <div className="App" style={{backgroundColor:bgColor, color:bgColor}}>
      <header className="App-header" style={{backgroundColor:bgColor}}>
        <wrapper id="quote-box" >
        
        <p id="text" style={{color:bgColor}}>"{quote}"</p>
        <p id="author" style ={{color:bgColor}}>-{author}</p>
        <div id="button">
        <button id="new-quote" onClick={() => getRandomQuote()}>Nueva frase</button>
        <a id="tweet-quote" href={encodeURI("http://twitter.com/intent/tweet?text=${quote} -${author}")}>Tweet Quote</a>
        </div>
        </wrapper>
        
      </header>
    </div>
  );
}

export default App;
