import { useState } from 'react';
import tracksList from './tracksList';
import style from './mainPage.module.scss';
import Track from '../../components/Track/Track';
import { Input } from '@mui/material';

const searchedTracks = (query) => {
	if (!query) {
		return tracksList;
	}

	const lowerCaseQuery = query.toLowerCase();

	return tracksList.filter(
		(track) =>
			track.title
				.toLowerCase()
				.includes(lowerCaseQuery) ||
			track.artists
				.toLowerCase()
				.includes(lowerCaseQuery)
	);
};

const MainPages = () => {
	const [tracks, setTracks] =
		useState(tracksList);

	const handleChange = (event) => {
		const foundTracks = searchedTracks(
			event.target.value
		);

		setTracks(foundTracks);
	};

	return (
		<div className={style.search}>
			<Input
				className={style.input}
				placeholder='Поиск треков'
				onChange={handleChange}
			/>

			<div className={style.list}>
				{tracks.map((track) => (
					<Track {...track} key={track.id} />
				))}
			</div>
		</div>
	);
};

export default MainPages;
