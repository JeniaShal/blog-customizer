//компоненты
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Select } from 'components/select';

//константы
import {
	OptionType,
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	defaultArticleState,
	ArticleStateType,
} from 'src/constants/articleProps';

//хуки и библиотеки
import { FormEvent, useState } from 'react';
import clsx from 'clsx';

//стили
import styles from './ArticleParamsForm.module.scss';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

type TArticleParamsForm = {
	setAppOptions: (value: ArticleStateType) => void; //функция для пропса, чтобы связать с Аппом
};

export const ArticleParamsForm = (props: TArticleParamsForm) => {
	//состояние открыто-закрыто
	const [isOpen, setIsOpen] = useState(false);

	//функция тоггла открытия-закрытия
	const onOpenClick = () => {
		setIsOpen(!isOpen);
	};

	//опции формы
	const [formOptions, setFormOptions] = useState(defaultArticleState);

	const changeFontFamilyOptions = (value: OptionType) => {
		//меняет значение шрифта на value
		setFormOptions({ ...formOptions, fontFamilyOption: value });
	};

	const changeFontSizeOptions = (value: OptionType) => {
		setFormOptions({ ...formOptions, fontSizeOption: value }); //меняет значение размера шрифта на value
	};

	const changFontColor = (value: OptionType) => {
		// меняет значение цвета шрифта на value
		setFormOptions({ ...formOptions, fontColor: value });
	};

	const changeBackgroundColor = (value: OptionType) => {
		//меняет значение цвета фона на value
		setFormOptions({ ...formOptions, backgroundColor: value });
	};

	const changeContentWidth = (value: OptionType) => {
		//меняет значение ширины содержания на value
		setFormOptions({ ...formOptions, contentWidth: value });
	};

	const onReset = () => {
		//сбрасывает значения формы
		setFormOptions(defaultArticleState);
		props.setAppOptions(defaultArticleState);
	};

	const onSubmit = (event: FormEvent) => {
		//сабмит значений формы
		event.preventDefault();
		setFormOptions(formOptions);
		props.setAppOptions(formOptions);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} OnClick={onOpenClick} />

			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form} onSubmit={onSubmit}>
					<Text as={'h2'} size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>
					<Select
						selected={formOptions.fontFamilyOption}
						options={fontFamilyOptions}
						title='Шрифт'
						onChange={changeFontFamilyOptions}></Select>
					<RadioGroup
						name='font size'
						options={fontSizeOptions}
						selected={formOptions.fontSizeOption}
						title='Размер шрифта'
						onChange={changeFontSizeOptions}></RadioGroup>
					<Select
						selected={formOptions.fontColor}
						options={fontColors}
						title='Цвет шрифта'
						onChange={changFontColor}></Select>
					<Separator />
					<Select
						selected={formOptions.backgroundColor}
						options={backgroundColors}
						title='Цвет фона'
						onChange={changeBackgroundColor}></Select>
					<Select
						selected={formOptions.contentWidth}
						options={contentWidthArr}
						title='Ширина контента'
						onChange={changeContentWidth}></Select>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={onReset} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
