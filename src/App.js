import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';


export class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News pageSize={6} country="us" category="general" key="general"/>}/>
          <Route exact path="/sports" element={<News pageSize={6} country="us" category="sports" key="sports"/>}/>
          <Route exact path="/entertainment" element={<News pageSize={6} country="us" category="entertainment" key="entertainment"/>}/>
          <Route exact path="/science" element={<News pageSize={6} country="us" category="science" key="science"/>}/>
          <Route exact path="/business" element={<News pageSize={6} country="us" category="business" key="business"/>}/>
          <Route exact path="/technology" element={<News pageSize={6} country="us" category="technology" key="technology"/>}/>
          <Route exact path="/health" element={<News pageSize={6} country="us" category="health" key="health"/>}/>
        </Routes>
        
      </Router>
      </>
    )
  }
}

export default App