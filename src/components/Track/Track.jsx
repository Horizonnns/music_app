import { useContext } from 'react';
import { AudioContext } from '../../context/AudioContext';
import { IconButton } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import style from './track.module.scss';
import secondsToMMSS from '../../utils/secondsToMMSS';

const Track = (track) => {
	const {
		id,
		src,
		preview,
		duration,
		title,
		artists,
	} = track;

	const { handleToggleAudio } =
		useContext(AudioContext);

	const formattedDuration =
		secondsToMMSS(duration);

	return (
		<div className={style.track}>
			<IconButton
				onClick={() => handleToggleAudio(track)}
			>
				<PlayArrow />
			</IconButton>

			<img
				className={style.preview}
				src={preview}
				alt='preview'
			/>

			<div className={style.credits}>
				<b>{title}</b>
				<b>{artists}</b>
			</div>

			<p>{formattedDuration}</p>
		</div>
	);
};

export default Track;
