import './App.css';
import Admin from './Components/Admin/Admin';
import Customer from './Components/Customer/Customer';
import Store from './Components/Store/Store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>KIRANA STORE 🛒</h1>
       <p>Increase your daily grocery sell using online listing now.</p>

       {/* Call your respective components from components folder Admin/Customer/Store */}
       <Admin/>
       <Customer/>
       <Store/>


      </header>
    </div>
  );
}

export default App;
