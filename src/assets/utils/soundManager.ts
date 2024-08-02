// Importera ljudfiler
import flipSound from '@/assets/sounds/flip-sound.mp3';
import matchSound from '@/assets/sounds/match-sound.mp3';
import winningSound from '@/assets/sounds/winning-sound.mp3';

// Skapa ljudobjekt
const flipAudio = new Audio(flipSound);
const matchAudio = new Audio(matchSound);
const winningAudio = new Audio(winningSound);

// Exportera funktioner för att spela ljud
export const playFlipSound = () => flipAudio.play();
export const playMatchSound = () => matchAudio.play();
export const playWinningSound = () => winningAudio.play();