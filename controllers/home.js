const timelines = require('../db/timelines/timelines.js')
console.log(timelines);
module.exports = {
    getIndex: (req, res) => {
        res.render('index.ejs', {
            timelines: timelines
        })
    }
}