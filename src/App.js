import './App.css';
import Admin from './Components/Admin/Admin';
import Customer from './Components/Customer/Customer';
import Store from './Components/Store/Store';
import HomeNav from './Components/HomeNavigator/HomeNav';
import NoPage from './Components/NoPage/NoPage';


import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>KIRANA STORE 🛒</h3>
      </header>
      <div className='App-body'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Outlet/>}>
              <Route index path="/KiranaStore" element={<HomeNav />} />
              <Route path="/KiranaStore/Customer" element={<Customer />} />
              <Route path="/KiranaStore/Admin" element={<Admin />} />
              <Route path="/KiranaStore/Store" element={<Store />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

      {/* Call your respective components from components folder Admin/Customer/Store */}


    </div>
  );
}

export default App;

