import React from 'react'
import './App.css'
import Header from './Components/Header'
import ToolBar from './Components/ToolBar'
import QueryInfo from './Components/QueryInfo'
import CardList from './Components/CardList'

function App() {
  return (
    <div className="App">
      <Header />
      <QueryInfo />
      <ToolBar />
      <CardList />
    </div>
  );
}

export default App;
