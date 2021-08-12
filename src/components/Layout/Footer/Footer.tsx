import * as React from 'react';

import translate, { AvailableLanguagesType } from '../../../i18n';
import LanguageContext from '../../../store/LanguageContext';

import sign from '../../../assets/images/sign.webp';

const Footer: React.FunctionComponent<{ }> = () => {

	const language = React.useContext(LanguageContext) as AvailableLanguagesType;

	return (
		<>
			<footer className="Footer">
				<div className="footer-bg"></div>
				<div className="sign">
					<img src={sign} width="300" height="130" alt={translate('name', language)} />
					{translate('name', language)}
					<span>
						{new Date().toLocaleDateString(language)}
					</span>
				</div>
			</footer>

			{/* SVG For footer curve */}
			<svg width="0" height="0">
				<defs>
					<clipPath id="FooterCurve" clipPathUnits="objectBoundingBox">
						<path d="M0,0 L0.05,0 C0.15,0.35 0.2,0.70 1,0.75 L1,0.75 L1, 1 L0,1 Z" />
					</clipPath>
				</defs>
			</svg>

		</>
	);
}

export default Footer;