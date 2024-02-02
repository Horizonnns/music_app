import tracksList from './tracksList';
import style from './mainPage.module.scss';
import Track from '../../components/Track/Track';

const MainPages = () => {
	return (
		<div className={style.search}>
			<>Поиск треков</>
			<div className={style.list}>
				{tracksList.map((track) => (
					<Track track={track} key={track.id} />
				))}
			</div>
		</div>
	);
};

export default MainPages;
