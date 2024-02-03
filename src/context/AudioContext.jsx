import { useState, createContext } from 'react';
import tracksList from '../pages/main/tracksList';

export const AudioContext = createContext({});

const AudioProvider = ({ children }) => {
	const [currentTrack, setCurrentTrack] =
		useState(tracksList[0]);
	const [isPlaying, setIsPlaying] =
		useState(false);

	const handleToggleAudio = (track) => {
	};
	return (
		<AudioContext.Provider value={value}>
			{children}
		</AudioContext.Provider>
	);
};

export default AudioProvider;
