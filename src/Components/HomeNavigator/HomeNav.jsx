import { Outlet, Link } from "react-router-dom";
import '../../App.css';
import './HomeNav.css';

const HomeNav = () => {
    return (
        <>
            <div>
                <button className="HomeNavBtn">
                    <Link className="Link" to="/KiranaStore/Customer">Customer</Link>
                </button>
                <button className="HomeNavBtn">
                    <Link className="Link" to="/KiranaStore/Admin">Admin</Link>
                </button>
                <button className="HomeNavBtn">
                    <Link className="Link" to="/KiranaStore/Store">Store</Link>
                </button>
            </div>

        </>
    )
};

export default HomeNav;