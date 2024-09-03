const Movie = require("./model")

exports.movies = async (req, res, next) => {
    try {
        const data = await Movie.findAll()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send({
            error: 'Failed',
            message: 'Internal Server Error'
        })
    }
}