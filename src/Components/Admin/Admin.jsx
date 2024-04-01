import './Admin.css';
import '../../App.css';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (  
        <>
        <h1>ADMIN PAGE</h1>
        <Link className="Link" to="/KiranaStore">⬅</Link>
        </>
    );
   }
   
   export default Admin;