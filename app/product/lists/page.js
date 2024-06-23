'use client'
import CardProduct from '../../components/Products/products';
import data from '../../../public/data.json';


export default function ProductLists() {
    const productsLists = [...data.products, ...data.products];
  return (
    <div className='container'>
        <div className="d-block text-center mt-5">
            <h3>Shop by products</h3>
        </div>
        <div className="row">
          {productsLists.map(product => 
            <div className="col-md-6 col-lg-3 mb-3"  key={product.thumb_src} >
              <CardProduct
                thumb_src = {product.thumb_src}
                thumb_alt = {product.thumb_alt}
                title = {product.title}
                description = {product.description}
                position = "left"
              />
            </div>
          )}        
        </div>
    </div>
  );
}
