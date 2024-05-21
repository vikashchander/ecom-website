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
    <div class="container mt-5">
        <div class="d-block text-center mb-5">
          <h3>Shop by category</h3>
          <a class="text-dark font-weight-bold" href="#">Browse all categories &#62;</a>
        </div>
        <div class="row mt-5 mb-3">
        {data.categories.slice(0, 4).map(category => 
          <div class="col-md-6 col-lg-3">
            <CardCategory
              thumb_src = {category.thumb_src}
              title = {category.title}
              collection = {category.collection}
            />
          </div>
        )}
        </div>
        <div class="d-block text-center mb-5">
          <h3>Products</h3>
          <a class="text-dark font-weight-bold" href="#">Browse all products &#62;</a>
        </div>
      <div class="row">
        {data.products.map(product => 
          <div class="col-md-6 col-lg-3 mb-3">
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
