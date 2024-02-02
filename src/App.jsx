import MainPages from './pages/main/MainPages';
import style from './assets/scss/global.module.scss';

const App = () => {
	return (
		<div className={style.wrapper}>
			<MainPages />
		</div>
	);
};

export default App;
