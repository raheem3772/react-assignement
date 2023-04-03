import './App.css';
import Nav from "./components/Nav";
import ProductItems from "./components/ProductItems";
import { useState } from 'react';



function Product(){
    const [num,setNum] = useState(5);
    const [isLoading,setIsLoading] = useState(false);
    const [search,setSearch] = useState('');
    const [searchFilter,setSearchFilter] = useState('');
    // function handleFilter(i){
    //     <ProductItems onFilter={i} />
    //     console.log(i)
    // }
    const filters = [
        {name: 'All Product', value: 5},
        {name: 'Featured', value: 2},
        {name: 'Flash Deal', value: 4},
        {name: 'Last Minute', value: 1}
    ]

    const filter = filters.map((item,i) => {
        return<h6 className={item.value === num ? 'active': ''} key={i} onClick={() => {
            setSearchFilter(search)
            setIsLoading(true)
            return setNum(item.value)
        }}>{item.name}</h6>
    })

    return(
        <div>
            <div className='our-product'>
                <div className="app-home">
                    <Nav />
                </div>
                <div className='product-main'>
                    <h4 style={{color:'red',fontSize:'22px',fontWeight:'700',marginBottom:'15px'}}>new Arrivals</h4>
                    <h2 style={{fontSize:'62px',letterSpacing:'5px', marginTop:'0'}}>E-Commerce</h2>
                </div>
            </div>
            <div className="product">
                <div className='row align-items-center'>
                    <div className='col-lg-8 col-sm-12 product-heading'>
                        {filter}
                    </div>
                    <div className='col-lg-4 col-sm-12 d-flex'>
                        <input onChange={(e) => setSearch(e.target.value)} className="form-control mb-0" type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={() => setSearchFilter(search)} className="btn btn-primary btn-sm" type="submit">Search</button>
                    </div>
                </div>
                <hr />
                <ProductItems isLoading={isLoading} search={searchFilter} setIsLoading={setIsLoading} num={num}/>
                <hr style={{marginTop:'40px'}}/>
                <div className='footer-copy'>
                    <p>COPYRIGHT © 2023 E-COMMERCE CO.. LTD. - DESIGN: <a href='#Main'>Raheem Fayyaz</a></p>
                </div>
            </div>

        </div>
    );
}


export default Product;