import backgroundMusicMP3  from '../media/background_music.mp3'

export default class Sound {
  constructor() {
    this.backgroundMusic = new Audio(backgroundMusicMP3);
    this.isMuted = false;
  }

  playMusic() {
    this.isMuted = false;
    this.backgroundMusic.loop = true
    this.backgroundMusic.play()
  }

  muteMusic() {
    this.isMuted = true;
    this.backgroundMusic.pause()
  }
}