const modules = require('modules')

class Timeline {
    constructor(title, id, description, image, music) {
        this.title = title
        this.id = id
        this.description = description
        this.image = image
        this.music = music
        this.gundams = []
    }
}

modules.exports = {
    Timeline: Timeline
}