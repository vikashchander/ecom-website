import {products} from '../../../public/data.json';


export async function generateStaticParams() { 
  console.log(`Rendering product detail for ${products}`); 
  return products.map(product => ({
    title: product.title.replace(/\s+/g, '-').toLowerCase(),
    images: product.images,
    full_description: product.full_description
  }));
}

export default function ProductOverview ({ params }) {
  const {title} = params;
  const productName = title.replace(/-/g, ' ');

  // Find the product in the array based on the name
  const product = products.find(p => p.title.toLowerCase() === productName.toLowerCase());

  if (!product) {
    return notFound();
  }
  const {images, full_description} = product;
  return (
    <div className='container mt-5 mb-5'>
       <div className="d-block mt-5 mb-3">
            <h3>Product details</h3>
        </div>
    <div className="card">
  <div className="row g-5">
    <div className="col-md-4">
      <img
        src={images[0].src} 
        alt={images[0].alt} 
        className="img-fluid rounded-start"
      />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
        {full_description}
        </p>
      </div>
    </div>
  </div>
</div>
</div>
  );
};