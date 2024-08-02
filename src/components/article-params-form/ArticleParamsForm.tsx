import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
// import { Select } from 'components/select';

import { useState } from 'react';
import styles from './ArticleParamsForm.module.scss';
// import  { titleParams } from '../../constants/articleParamsProps';
// import { fontFamilyOptions } from '../../constants/articleProps';
import clsx from 'clsx';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	const onClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<ArrowButton isOpen={isOpen} OnClick={onClick} />

			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form}>
					<Text as={'h2'} size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>
					{/* <Select></Select> */}
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
