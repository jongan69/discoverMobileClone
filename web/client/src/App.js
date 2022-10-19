import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [api, setApi] = React.useState(null)

  React.useEffect(() => {
    fetch("http://localhost:3000/api")
      .then(res => res.json())
      .then(data => setApi({ name: data.name }))

  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
      <h1>Hello {api?.name}!</h1>
    </div>
  );
}

export default App;
