import * as React from 'react';

import translate, { AvailableLanguagesType } from '../../../i18n';
import LanguageContext from '../../../store/LanguageContext';

type CVDataRow = { date?: any, title: any, description?: any };

const Content: React.FunctionComponent<{}> = () => {

	const lang = React.useContext(LanguageContext) as AvailableLanguagesType;

	const profession: any = translate('profession', lang);
	const technologies: any = translate('technologies', lang);
	const schools: any = translate('schools', lang);
	const personal: any = translate('personal', lang);

	const parseDate = (dateString: string = ''): JSX.Element[] | string => {
		if (dateString.indexOf('-') === -1) {
			return dateString;
		}

		return dateString.split(' - ').map((line: string, lineKey: any) => <span key={lineKey}>{`${line} ${lineKey === 0 ? ' - ' : ''}`}</span>)
	}

	return (
		<>
			<p className="intro">
				{translate('intro', lang)}
			</p>

			<h2>{profession.title}</h2>
			<ul>
				{profession.content.map((profession: CVDataRow, key: any) => {
					return (
						<li key={key}>
							<div className="date-col">
								{parseDate(profession.date)}
							</div>
							<div className="date-description">
								{profession.title}
								<span>{profession.description}</span>
							</div>
						</li>
					)
				})}
			</ul>

			<h2>{translate('technologies_title', lang)}</h2>
			<ul>
				{Object.keys(technologies).map((objKey, objIndex) => {
					const colOne = technologies[objKey];
					return (
						<li key={objIndex}>
							<div className="date-col">
								{colOne.title}
							</div>
							<div className="date-description">
								<ol className={objKey}>
									{colOne.content.map((content: CVDataRow, contentKey: any) => {
										return (
											<li key={contentKey} className={`${objKey}-item`}>
												<strong>{content.title}</strong>
												<small>{content.description}</small>
											</li>
										)
									})}
								</ol>
							</div>
						</li>
					);
				})}
			</ul>


			<h2>{schools.title}</h2>
			<ul>
				{schools.content.map((school: CVDataRow, key: any) => {
					return (
						<li key={key}>
							<div className="date-col">
								{parseDate(school.date)}
							</div>
							<div className="date-description">
								{school.title}
								<span>{school.description}</span>
							</div>
						</li>
					)
				})}
			</ul>

			<h2>{personal.title}</h2>
			<ul>
				{personal.content.map((personal: CVDataRow, key: any) => {
					return (
						<li key={key}>
							<div className="date-col">
								{personal.date}
							</div>
							<div className="date-description">
								{personal.title}
							</div>
						</li>
					)
				})}
			</ul>

			<p className="my-goal">
				{translate('mygoal', lang)}
			</p>
		</>
	);
}

export default Content;