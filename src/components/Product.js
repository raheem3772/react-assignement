import { Link } from 'react-router-dom';
import ProductItems from './ProductItems';

function Product(){
    return(
        <div>
            <div className="product">
                <div className='d-flex justify-content-between'>
                    <h2>Latest Product</h2>
                    <Link to='/products'>View All Products</Link>
                </div>
                <hr />
                <ProductItems num={2} />
            </div>
        </div>
    );
}


export default Product;