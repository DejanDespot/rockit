import {Howl, Howler} from 'howler';
import songs from '../Utils/songs';

// Set up audio context
window.AudioContext = window.AudioContext || window.webkitAudioContext;

class AudioPlayerService {
    constructor() {
        this.soundPlayer = null;
        this.audioContext = new AudioContext();
        this.currentBuffer = null;
    }

    playSound = (index) => {
        console.log(songs)
        // Pause instance
        if ((this.soundPlayer && this.soundPlayer.playing()) && (index === songs[index])) {
            this.soundPlayer.pause();
            // this.soundPlayer.unload();
            // this.soundPlayer = null;
            return
        } else if ((this.soundPlayer && this.soundPlayer.playing()) && (index !== songs[index])) {
            this.soundPlayer.unload();
            this.soundPlayer = new Howl({
                src: [songs[index].file]
            });
        } 

        if (!this.soundPlayer) {
            // setup the new Howl
            this.soundPlayer = new Howl({
                src: [songs[index].file]
            });
            //this.visualizeAudio(audioFile);
        }

        // Play the sound.
        this.soundPlayer.play();
    };

    playNextSound = (index) => {
        // console.log(index);
        if (this.soundPlayer && this.soundPlayer.playing()) {
            this.soundPlayer.unload();
            this.soundPlayer = new Howl({
                src: [songs[index + 1].file]
            });
        }

        this.soundPlayer.play();
        console.log(this.soundPlayer);
        
    };

    visualizeAudio = audioFile => {
        // console.log(new FileReader().readAsArrayBuffer(new File([""], audioFile)));
        // console.log(new File([""], audioFile));
        // new FileReader().readAsArrayBuffer(new File([""], audioFile))
        //     .then(arrayBuffer => this.audioContext.decodeAudioData(arrayBuffer))
        //     .then(audioBuffer => console.log(audioBuffer));
    };
}

export default new AudioPlayerService()