import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Nav() {
    const [items, setItems] = useState([])

    const slugs =  ['title-01', 'title-02', 'title-03', 'title-04', 'title-05', 'title-06']
    useEffect(() => {
        slugs.forEach(slug => {
            if(sessionStorage.hasOwnProperty(slug)){
                setItems(prev => [...prev, JSON.parse(sessionStorage.getItem(slug))])
            }
        })
    },[])

    function handlCart(){
        slugs.forEach(slug => {
            if(sessionStorage.hasOwnProperty(slug)){
                const item = JSON.parse(sessionStorage.getItem(slug));
                if (item) {
                    const itemIndex = items.findIndex((el) => el.slug === slug);
                    if (itemIndex === -1) {
                        setItems([...items, item]);
                    }
                }
            } else {
                setItems(prev => prev.filter(el => el.slug !== slug));
            }

        })
    }

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
                        <button type="button" onClick={() => handlCart()} class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Show Cart
                        </button>
                    </div>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title text-dark fs-5" id="exampleModalLabel">Cart Items</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul class="list-group">
                                        {items && items.map((el,i) => {
                                         return <li class="list-group-item d-flex justify-content-between align-items-center">
                                            {el.title}
                                            <span class="badge bg-primary rounded-pill">{el.price}</span>
                                        </li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}


export default Nav