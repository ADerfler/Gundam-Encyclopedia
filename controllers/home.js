const timelines = require('../db/timelines/timelines.js')
module.exports = {
    getIndex: (req, res) => {
        res.render('index.ejs', {
            timelines: timelines
        })
    }
}