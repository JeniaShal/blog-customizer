//компоненты
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Select } from 'components/select';

//константы
import {
	OptionType,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { defaultArticleState } from 'src/constants/articleProps';

//хуки и библиотеки
import { useState } from 'react';
import clsx from 'clsx';

//стили
import styles from './ArticleParamsForm.module.scss';
import { RadioGroup } from '../radio-group';

export const ArticleParamsForm = () => {
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

	return (
		<>
			<ArrowButton isOpen={isOpen} OnClick={onOpenClick} />

			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form}>
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
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
