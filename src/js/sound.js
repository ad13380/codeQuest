import backgroundMusicMP3  from '../media/background_music.mp3'
import coinSoundMP3  from '../media/collect_coin.mp3'

export default class Sound {
  constructor() {
    this.backgroundMusic = new Audio(backgroundMusicMP3);
    this.collectCoin = new Audio(coinSoundMP3);
    this.isMuted = false;
  }

  playMusic() {
    this.isMuted = false;
    this.backgroundMusic.loop = true
    this.backgroundMusic.play()
  }

  playCollectCoin() {
    this.collectCoin.play();
  }

  muteMusic() {
    this.isMuted = true;
    this.backgroundMusic.pause()
  }
}