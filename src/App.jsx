import { useState } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import quotes from "./db/quotes.json";
import { getRandomElement } from './utils/random';

function App() {
  
  const image =["images1" , "images2" , "images3" , "images4"] ;
  console.log(image)
  const [currentImage, setCuerretImage] = useState(getRandomElement(image))
  console.log(currentImage)
  const [quote, setQuote] = useState(getRandomElement(quotes));
  const handeleChangeQuote = () => {
       setQuote(getRandomElement(quotes));
       setCuerretImage(getRandomElement(image));
  }

  return (
    <main className={`App ${currentImage}`}>
    
    <QuoteBox quote ={ quote } handeleChangeQuote ={handeleChangeQuote}/>
    
    </main>
  )
}

export default App
