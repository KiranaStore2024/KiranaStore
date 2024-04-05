import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
    return (
        <div className="home">
            <button className="home_nav_btn"><Link className="link" to="/kiranastore/customer">Customer</Link></button>
            <button className="home_nav_btn"><Link className="link" to="/kiranastore/admin">Admin</Link></button>
            <button className="home_nav_btn"><Link className="link" to="/kiranastore/store">Store</Link></button>
        </div>
    )
}

export default Home;