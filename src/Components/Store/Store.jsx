import './Store.css';
import '../../App.css';
import { Link } from 'react-router-dom';

const Store = () => {
    return (  
        <>
        <h1>STORE PAGE</h1>
        <Link className="Link" to="/KiranaStore">⬅</Link>
        <p>Ankur</p>
        </>
    );
   }
   
   export default Store;