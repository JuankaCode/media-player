class MediaPlayer {
    media:HTMLMediaElement;
    plugins:Array<any>;
    conteiner:HTMLElement;
    
    constructor(config) {
        this.media = config.element;
        this.plugins = config.plugins || [];
        this.initPlay();
        this.initPlugins();
    }

    initPlay(){
        this.conteiner = document.createElement('div');
        this.conteiner.style.position = 'relative';
        this.media.parentNode.insertBefore(this.conteiner, this.media);
        this.conteiner.appendChild(this.media);
    }

    private initPlugins() {
        this.plugins.forEach(item => item.run(this));
    }

    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }

    togglePlay() {
        (this.media.paused)
            ? this.media.play()
            : this.media.pause();
    }

    muted() {
        this.media.muted = true;
    }

    unmuted() {
        this.media.muted = false;
    }

    toggleMute() {
        (this.media.muted)
            ? this.media.muted = false
            : this.media.muted = true;
    }
}

export default MediaPlayer;

