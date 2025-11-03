import MovieCard from "../components/MovieCard"

export default function HomePage() {
    return (
        <div className="container">
            <h1 className="text-center fw-light">List of films</h1>
            <div className="row row-cols-3 mt-3">
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </div>
        </div>
    )
}