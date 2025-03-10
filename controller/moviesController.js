import movies from '../data/movies.js'

export const getAllMovies = (req, res) =>
{
    res.status(200).json(movies)
}

export const getMoviesById = (req, res) =>
{
    const id = req.params.id
    if (id < 0 || id >= movies.length){
        return res.status(404).json({message:'Movie not found'})
    }
    res.status(200).json(movies[id])
}

export const createMovie = (req,res) =>
{
    const movie = req.body
    if(!movie.title || !movie.producer || !movie.published || !movie.oscar){
        return res.status(400).json({message:'Invalid data'})
    }
    res.push(movie)
    res.status(200).json(movie)
}