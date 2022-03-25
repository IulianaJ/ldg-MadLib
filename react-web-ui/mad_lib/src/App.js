import './App.css';

function App() {

  return (
    <div className="App">
      <div id="container">
        <form>
            <label htmlFor="verb">Enter a verb:</label>
            <input type="text" id="verb" name="verb"/><br /><br /><br />
            <label htmlFor="noun">Enter a noun:</label>
            <input type="text" id="noun" name="noun"/><br /><br /><br />
            <label htmlFor="adjective">Enter an adjective:</label>
            <input type="text" id="adjective" name="adjective"/><br /><br /><br />
            <label htmlFor="adverb">Enter an adverb:</label>
            <input type="text" id="adverb" name="adverb"/><br /><br /><br />
            <input type="submit" name="btn" id="btn"/>
        </form>
        <div id="displayPhrase"></div>
    </div>
    </div>
  );
}

export default App;
