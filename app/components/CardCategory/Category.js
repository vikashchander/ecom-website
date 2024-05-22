'use client'
import Image from "next/image";

export default function Category({classList, thumb_src, collection, title, cta}) {
    const classBody = ((cta != null) ? "align-items-end d-flex" : "text-center w-100 pt-8" );
  return (
    <a href="#">
        <div className={`card card-background align-items-start mb-4 mb-lg-0 ${classList}`} key={thumb_src}>
          <div className="full-background" style={{backgroundSize: 'cover'}}>
          <Image src={thumb_src} style={{ backgroundPosition: "50%",
            backgroundSize: "cover",
            marginBottom: "30px",
            width: "100%",
            height: "100%",
            position: "absolute",
            borderRadius: ".375rem"}}  layout="fill"
            objectFit="cover" className="card-img-top" alt={title} />
          </div>
          <div className={`card-body ${classBody}`} style={{color: "#fff", position: "relative", zIndex: "2", height: "20rem"}}>
            <div className="d-block h-200" style={{marginTop: "12rem"}}>
              <p className="text-white font-weight-bold mb-1">{collection}</p>
              <h4 className="text-white font-weight-bolder">{title}</h4>
              {/* {(cta != null) &&  */}
                <a href="#" className="text-white text-sm font-weight-semibold mb-0">See products &#62;</a>  
              {/* } */}
            </div>
          </div>
        </div>
    </a>
  );
}