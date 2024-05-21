'use client'

export default function Products({title, description, thumb_src}) {
  return (
    
    <a href="#">
        <div className="container mt-5">
        <div className="card" key={thumb_src} >
            <img src={thumb_src} className="card-img-top" alt="Image" />
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text" style={{height:"9rem"}}>{description}</p>
            <a href="#" className="btn btn-primary">Chat with us</a>
            </div>
        </div>
    </div>
      </a>
  );
}