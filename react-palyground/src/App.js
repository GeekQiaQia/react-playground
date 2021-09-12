// import logo from './logo.svg';
import './App.css';
import FloatComp from './components/float'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       <FloatComp></FloatComp>
       <div className="layout">
         <div className="top-container">top</div>
         <div className="main-container">
         <div className="container">contentcontentcontentcontentcontentcontentcontentcontent
         ntcontentcontentcontentcontentntcontentcontentcontentcontentntcontentcontentcontentcontentntcontentcontentcontentcontentntcontentcontentcontentcontentntcontentcontentcontentcontentntcontentcontentcontentcontentcontentcontentcontentcontentcontent</div>
         <div className="foot-container">footer</div>
         </div>
       </div>
      </header>
    </div>
  );
}

export default App;
