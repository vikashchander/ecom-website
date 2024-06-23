'use client'
import CardCategory from '../../components/CardCategory/Category';
import data from '../../../public/data.json';


export default function CategoryLists() {
    const categoriesLists = [...data.categories];
  return (
    <div className='container'>
        <div className="d-block text-center mt-5">
            <h3>Shop by categories</h3>
        </div>
        <div className="row">
          {categoriesLists.map(category => 
            <div className="col-md-6 col-lg-3" style={{margin:"1.5rem 0 1.5rem 0"}} key = {category.thumb_src}>
              <CardCategory
                thumb_src = {category.thumb_src}
                title = {category.title}
                collection = {category.collection}
              />
            </div>
          )}
        </div>
    </div>
  );
}
