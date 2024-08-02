import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
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

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
