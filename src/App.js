
import { Button, Spinner } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
     <button>simple button</button> <br /> <br />
      <Button variant='warning'>react bootstrap button</Button> <br /> <br />
      <Spinner animation="grow" variant="dark" />
    </div>
  );
}

export default App;
