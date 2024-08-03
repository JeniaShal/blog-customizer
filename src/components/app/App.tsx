//компоненты
import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { defaultArticleState } from '../../constants/articleProps';

import styles from './App.module.scss';

//библиотеки и хуки
import { useState, CSSProperties } from 'react';
import clsx from 'clsx';

export const App = () => {
	const [appOptions, setAppOptions] = useState(defaultArticleState); //устанавливает значение параметра опций, выбранных в форме для статьи

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': appOptions.fontFamilyOption.value, //поменяла с дефолта на параметр опций, чтобы подставлялись значения из формы
					'--font-size': appOptions.fontSizeOption.value,
					'--font-color': appOptions.fontColor.value,
					'--container-width': appOptions.contentWidth.value,
					'--bg-color': appOptions.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setAppOptions={setAppOptions} />
			<Article />
		</div>
	);
};
