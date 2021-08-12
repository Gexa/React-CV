import * as React from 'react';
import ME from '../../../assets/images/me.webp';

import languageContext from '../../../store/LanguageContext';
import translate, { AvailableLanguagesType } from '../../../i18n';


const Header: React.FunctionComponent<{ }> = () => {

	const lng = React.useContext(languageContext) as AvailableLanguagesType;

	return (
		<header>
			<div className="head-wrap">
				<h1>
					{translate('name', lng)}
					<small>{translate('title', lng)}</small>
				</h1>

				<ul>
					<li>{translate('address', lng)}</li>
					<li>{translate('phone', lng)}</li>
					<li>{translate('email', lng)}</li>
					<li>{translate('birth', lng)}</li>
					<li>{translate('nationality', lng)}</li>
				</ul>
			</div>

			<div className="head-img">
				<img src={ME} width="400" height="487" alt={translate('name', lng)}
					title={`${translate('name', lng)} - ${translate('title', lng)}`} />
			</div>
		</header>
	);
}

export default Header;