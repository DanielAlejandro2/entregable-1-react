import "./style/style.css";

function QuoteBox({ quote, handeleChangeQuote }) {
    console.log(quote);
    return (
        <article className="quoteBox">
            <h1 className="title">GALLETAS DE LA FORTUNA</h1>
            <div className="quote_phrase">
                       
                <p>{ quote.phrase }</p>
            </div>
            <button onClick={handeleChangeQuote} className="btn">
                Ver otro
                </button>
            <span className="quote_author">{quote.author}</span>
        </article>
    );
}
export default QuoteBox