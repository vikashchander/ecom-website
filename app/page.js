'use client'
import data from '../public/data.json';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer'
import Carousel from "./components/Carousel/Carousel";
import CardCategory from "./components/CardCategory/Category";
import CardProduct from './components/Products/products';

export default function Home() {
  return (
    <main>
    <Navbar/>
    <Carousel className="mb-4"/>
    <div className="container mt-5">
        <div className="d-block text-center mb-5">
          <h3>Shop by category</h3>
          <a className="text-dark font-weight-bold" href="#">Browse all categories &#62;</a>
        </div>
        <div className="row mt-5 mb-3">
        {data.categories.slice(0, 4).map(category => 
          <div className="col-md-6 col-lg-3" key = {category.thumb_src}>
            <CardCategory
              thumb_src = {category.thumb_src}
              title = {category.title}
              collection = {category.collection}
            />
          </div>
        )}
        </div>
        <div className="d-block text-center mb-5">
          <h3>Products</h3>
          <a className="text-dark font-weight-bold" href="#">Browse all products &#62;</a>
        </div>
      <div className="row">
        {data.products.map(product => 
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
    <Footer/>
    </main>
  );
}
