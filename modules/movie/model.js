const pool = require("../../config/db");

class Movie {
    constructor(id, synopsis, trailerurl, imgurl, rating, status, createdat, updatedat) {
        this.id = id
        this.synopsis = synopsis
        this.trailerurl = trailerurl
        this.imgurl = imgurl
        this.rating = rating
        this.status = status
        this.createdat = createdat
        this.updatedat = updatedat
    }

    static async findAll() {
        const { rows } = await pool.query(`SELECT * FROM "movies"`)
        const data = rows.map((dt) => {
            const { id, synopsis, trailerurl, imgurl, rating, status, createdat, updatedat } = dt
            return new Movie(id, synopsis, trailerurl, imgurl, rating, status, createdat, updatedat)
        });
        return data
    }
}

module.exports = Movie