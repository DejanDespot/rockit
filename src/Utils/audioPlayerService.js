import { Howl, Howler } from "howler";
import songs from "../Utils/songs";

// Set up audio context
window.AudioContext = window.AudioContext || window.webkitAudioContext;

class AudioPlayerService {
  constructor() {
    this.soundPlayer = null;
    this.currentSong = null;
    // this.audioContext = new AudioContext();
    // this.currentBuffer = null;
  }

  playSound = (index, volume) => {
    // pause player instance
    if (this.soundPlayer && this.currentSong === index) {
      // check if player is plauing
      if (this.soundPlayer.playing()) {
        this.soundPlayer.pause();
      } else {
        this.soundPlayer.play();
      }
      return;
    }

    // play new song when player is already active
    if (this.soundPlayer) {
      this.soundPlayer.unload();
      this.currentSong = index;
      this.soundPlayer = new Howl({
        src: [songs[index].file]
      });
    }

    // play new song when no instance is loaded
    if (!this.soundPlayer) {
      // setup the new Howl
      this.currentSong = index;
      this.soundPlayer = new Howl({
        src: [songs[index].file]
      });
      //this.visualizeAudio(audioFile);
    }

    // Play the sound.
    this.soundPlayer.play();

    // Change global volume.
    Howler.volume(volume);
  };

  changeVolume = volume => {
    // Change global volume.
    Howler.volume(volume);
  };

  visualizeAudio = audioFile => {
    // console.log(new FileReader().readAsArrayBuffer(new File([""], audioFile)));
    // console.log(new File([""], audioFile));
    // new FileReader().readAsArrayBuffer(new File([""], audioFile))
    //     .then(arrayBuffer => this.audioContext.decodeAudioData(arrayBuffer))
    //     .then(audioBuffer => console.log(audioBuffer));
  };
}

export default new AudioPlayerService();
