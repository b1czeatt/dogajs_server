import express from 'express'
import * as moviesController from '../controller/moviesController.js'

const router = express.Router()

router.get('/', moviesController.getAllMovies)

router.get('/:id', moviesController.getMoviesById)

router.post('/', moviesController.createMovie)

router.put('/:id', moviesController)

router.delete('/:id', moviesController)

export default router