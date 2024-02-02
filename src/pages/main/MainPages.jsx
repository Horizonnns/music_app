import tracksList from './tracksList';
import style from './mainPage.module.scss';

const MainPages = () => {
	return (
		<div className={style.search}>
			<>Поиск треков</>
			<div className={style.list}>
				<p>Музыкальное приложение</p>
			</div>
		</div>
	);
};

export default MainPages;
