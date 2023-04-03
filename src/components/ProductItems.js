import product_01 from '../Images/product_01.jpg';
import product_02 from '../Images/product_02.jpg';
import product_03 from '../Images/product_03.jpg';
import product_04 from '../Images/product_04.jpg';
import product_05 from '../Images/product_05.jpg';
import product_06 from '../Images/product_06.jpg';
import { Link } from 'react-router-dom';

function ProductItems(props){
    const product =[
        {
            img: product_01,
            title: 'Tittle 01',
            price: '$ 4.50',
            slug: 'title-01'
        },
        {
            img: product_02,
            title: 'Tittle 02',
            price: '$ 3.75',
            slug: 'title-02'
        },
        {
            img: product_03,
            title: 'Tittle 03',
            price: '$ 6.00',
            slug: 'title-03'
        },
        {
            img: product_04,
            title: 'Tittle 04',
            price: '$ 1.25',
            slug: 'title-04'
        },
        {
            img: product_05,
            title: 'Tittle 05',
            price: '$ 2.75',
            slug: 'title-05'
        },
        {
            img: product_06,
            title: 'Tittle 06',
            price: '$ 2.00',
            slug: 'title-06'
        }

    ]
    const filterData = props?.num ? product.filter((el, i) =>  i <= props?.num) : product

    if(props?.isLoading){
        setTimeout(() => props.setIsLoading(false), 1500)
        return <div className='loader-container'><div className='items'></div></div>
    }

    let item
    if(props?.search){
        item = filterData.filter(el => el.title.toLowerCase().includes(props.search.toLowerCase())).map((pro, i) => {
            return <div className="card mx-3 my-2" key={i} style={{width: '29rem'}}>
            <Link to={`/products/${pro.slug}`}>
            <img src={pro.img} className="card-img-top" alt='product'/>
            <div className="card-body">
                <h5 className="card-title">{pro.title}</h5>
                <p className="card-text">{pro.price}</p>
            </div>
            </Link>
        </div>
        })
    } else {
        item = filterData.map((pro, i) => {
            return <div className="card mx-3 my-2" key={i} style={{width: '29rem'}}>
            <Link to={`/products/${pro.slug}`}>
            <img src={pro.img} className="card-img-top" alt='product'/>
            <div className="card-body">
                <h5 className="card-title">{pro.title}</h5>
                <p className="card-text">{pro.price}</p>
            </div>
            </Link>
        </div>
        })
    }

    return(
        <div>
            <div className='items'>
                {item}
            </div>
        </div>
    );
}

export default ProductItems;