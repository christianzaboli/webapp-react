import { Link } from "react-router-dom";


export default function MovieDetail() {
    return (
        <div className="container">
            <h1>blablablatitolo</h1>
            <p>abstract stuff</p>
            <Link to={'/'} className="btn btn-primary">Go back</Link>
        </div>
    )
}