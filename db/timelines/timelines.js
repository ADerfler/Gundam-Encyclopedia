class Timeline {
    constructor(title, id, shortDesc, image, music) {
        this.title = title
        this.id = id
        this.shortDesc = shortDesc
        this.image = image
        this.music = music
        this.gundams = []
    }
}

const timelines = {
    universalCentury: new Timeline(
        "Universal Century", 
        "uc",
        "The Epic", 
        "ucPoster.jpg",
        "Beyond The Time Remix.mp3"
    ),

    futureCentury: new Timeline(
        "Future Century", 
        "fc",
        "The Fun One", 
        "gGundamPoster2.jpg",
        "Shining Finger.mp3"
    ),

    afterColony: new Timeline(
        "After Colony", 
        "ac",
        "The Western Favorite", 
        "wingPoster.jpg",
        "Just Communication.mp3"
    ),

    afterWar: new Timeline(
        "After War", 
        "aw",
        "The Bad Ending", 
        "xPoster.jpg",
        "Resolution.mp3"
    ),

    cosmicEra: new Timeline(
        "Cosmic Era", 
        "ce",
        "The Eastern Favorite", 
        "seedPoster.jpg",
        "Invoke.mp3"
    ),

    annoDomini: new Timeline(
        "Anno Domini", 
        "ad",
        "The War to End War", 
        "00PosterB.jpg",
        "Quantum Burst.mp3"
    ),

    advancedGen: new Timeline(
        "Advanced Generation", 
        "ag",
        "The Three In One", 
        "agePoster.jpg",
        "Unmei no Saki e.mp3"
    ),

    reguildCentury: new Timeline(
        "Reguild Century", 
        "rc",
        "The Lovable Mess", 
        "gRecoPoster.jpg",
        "G - Self no Aoi Sora.mp3"
    ),

    postDisaster: new Timeline(
        "Post Disaster", 
        "pd",
        "The Edgy One", 
        "iboPoster.jpg",
        "Raise Your Flag.mp3"
    ),

    adStella: new Timeline(
        "Ad Stella", 
        "as",
        "The New Kid", 
        "witch poster.jpg",
        "The Witch From Mercury.mp3"
    ),

    correctCentury: new Timeline(
        "Correct Century", 
        "cc",
        "The Good Ending", 
        "turnaA.jpg",
        "Moon.mp3"
    )
}
timelines.correctCentury.secondImage = "turnaB.jpg"

module.exports = timelines