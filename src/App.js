import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';


export class App extends Component {

  apikey=process.env.REACT_APP_NEWS_API;

  render() {
    return (
      <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News pageSize={6} country="us" category="general" key="general" apikey={this.apikey}/>}/>
          <Route exact path="/sports" element={<News pageSize={6} country="us" category="sports" key="sports" apikey={this.apikey}/>}/>
          <Route exact path="/entertainment" element={<News pageSize={6} country="us" category="entertainment" key="entertainment" apikey={this.apikey}/>}/>
          <Route exact path="/science" element={<News pageSize={6} country="us" category="science" key="science" apikey={this.apikey}/>}/>
          <Route exact path="/business" element={<News pageSize={6} country="us" category="business" key="business" apikey={this.apikey}/>}/>
          <Route exact path="/technology" element={<News pageSize={6} country="us" category="technology" key="technology" apikey={this.apikey}/>}/>
          <Route exact path="/health" element={<News pageSize={6} country="us" category="health" key="health" apikey={this.apikey}/>}/>
        </Routes>
        
      </Router>
      </>
    )
  }
}

export default App