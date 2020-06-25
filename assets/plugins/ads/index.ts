import MediaPlayer from "../../MediaPlayer"
import Ads, { Ad } from './ads'


class AdsPlugins {
    private ads: Ads;
    private currentAd: Ad;
    private player:MediaPlayer;
    private media: HTMLMediaElement;
    private adsConteiner: HTMLElement;

    constructor(){
      this.ads = Ads.getInstance();
      this.adsConteiner = document.createElement('div');
      this.handleTimeUpdata = this.handleTimeUpdata.bind(this) 
    }
    
    run(player:MediaPlayer){
      this.player = player;
      this.player.conteiner.appendChild(this.adsConteiner)        
      this.media = this.player.media;
      this.media.addEventListener('timeupdate', this.handleTimeUpdata);
    }

    private handleTimeUpdata(){
      const currentTime = Math.floor(this.media.currentTime);
      if(currentTime % 30 === 0){
        this.renderAd();
      }
    }

    private renderAd(){
      if(this.currentAd){
        return;
      }
      const ad = this.ads.getAd()
      this.currentAd = ad;

      this.adsConteiner.innerHTML= `
      <div class="ads"> 
        <a class="ads__link" href="${this.currentAd.url}" >
        <img class="ads__img" src="${this.currentAd.imageUrl}"/>
        <h5 class="ads__title">${this.currentAd.title}</h5>
        </a>
        <div class="ads__info">
            <p class="ads__body">${this.currentAd.body}</p>
        </div>
      </div>
      `;

      setTimeout(()=>{
        this.currentAd = null;
        this.adsConteiner.innerHTML = ''
      }, 10000)
    }


}

export default AdsPlugins