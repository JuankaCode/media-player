import MediaPlayer from "../MediaPlayer";

class AutoPlay {    
    constructor() {    
    }

    run(player: MediaPlayer) {
        player.media.muted = true;
        player.media.play();
    }
}


export default AutoPlay;