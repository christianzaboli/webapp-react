import { Link } from "react-router-dom";

export default function MovieCard() {
    
    return (
            <div className="card">
                <img src="https://www.legnanonews.com/archivio/img/news/498604FC-CF09-CCB2-899096016764D070.jpeg" alt="immagine" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to={'/movie/id'} className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
    )
}