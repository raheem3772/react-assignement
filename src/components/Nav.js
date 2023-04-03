import { Link } from 'react-router-dom';


function Nav() {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">
                    <a className='navbar-brand'><h2 style={{textTransform:'uppercase'}}>E-<span style={{color: 'red',cursor:'pointer'}}>Commerece</span></h2></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className={`nav-link ${window.location.pathname == '/' ? 'active' : ''}`} to='/'>Home</Link></li>
                            <li className='nav-item'><Link className={`nav-link ${window.location.pathname.includes('/products') ? 'active' : ''}`} to='/products'>Our Product</Link></li>
                            <li className='nav-item'><Link className={`nav-link ${window.location.pathname.includes('/about') ? 'active' : ''}`} to='/about'>About</Link></li>
                            <li className='nav-item'><Link className={`nav-link ${window.location.pathname.includes('/contact') ? 'active' : ''}`} to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}


export default Nav