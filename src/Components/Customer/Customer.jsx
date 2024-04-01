import './Customer.css';
import '../../App.css';
import { Link } from 'react-router-dom';

const Customer = () => {
    return (  
        <>
        <h1>CUSTOMER PAGE</h1>
        <Link className="Link" to="/KiranaStore">⬅</Link>
        </>
    );
   }
   
   export default Customer;