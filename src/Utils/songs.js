import Audio1 from '../Assets/Audio/bensound-allthat.mp3';
import Audio2 from '../Assets/Audio/bensound-countryboy.mp3';
import Audio3 from '../Assets/Audio/bensound-evolution.mp3';
import Audio4 from '../Assets/Audio/bensound-highoctane.mp3';
import Audio5 from '../Assets/Audio/bensound-hipjazz.mp3';

import SongArt1 from '../Assets/Images/aic_dirt.jpg';
import SongArt2 from '../Assets/Images/matt_corby.jpg';
import SongArt3 from '../Assets/Images/chris_cornell.jpg';
import SongArt4 from '../Assets/Images/chris_cornell2.jpg';
import SongArt5 from '../Assets/Images/led_zeppelin.jpg';



const Songs = [
    {name: 'All That', artist: 'Bensound', file: Audio1, songPic: SongArt1, duration: '2:25', id: "first"},
    {name: 'Country Boy', artist: 'Bensound', file: Audio2, songPic: SongArt2, duration: '3:27', id: "second"},
    {name: 'Evolution', artist: 'Bensound', file: Audio3, songPic: SongArt3, duration: '2:45', id: "third"},
    {name: 'High Octane', artist: 'Bensound', file: Audio4, songPic: SongArt4, duration: '2:35', id: "fourth"},
    {name: 'Hip Jazz', artist: 'Bensound', file: Audio5, songPic: SongArt5, duration: '2:43', id: "fifth"}
];

export default Songs;