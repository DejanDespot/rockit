import {Howl, Howler} from 'howler';

// Set up audio context
window.AudioContext = window.AudioContext || window.webkitAudioContext;

export default class AudioPlayerService {
    constructor() {
        this.soundPlayer = null;
        this.audioContext = new AudioContext();
        this.currentBuffer = null;
    }

    playSound = (audioFile) => {
        console.log(audioFile)
        // pause instance
        if (this.soundPlayer && this.soundPlayer.playing()) {
            this.soundPlayer.pause();
            //this.soundPlayer.unload();
            //this.soundPlayer = null;
            return
        }

        if (!this.soundPlayer) {
            // setup the new Howl
            this.soundPlayer = new Howl({
                src: [audioFile]
            });
            //this.visualizeAudio(audioFile);
        }

        // Play the sound.
        this.soundPlayer.play();
    };

    visualizeAudio = audioFile => {
        // console.log(new FileReader().readAsArrayBuffer(new File([""], audioFile)));
        // console.log(new File([""], audioFile));
        // new FileReader().readAsArrayBuffer(new File([""], audioFile))
        //     .then(arrayBuffer => this.audioContext.decodeAudioData(arrayBuffer))
        //     .then(audioBuffer => console.log(audioBuffer));
    };
}