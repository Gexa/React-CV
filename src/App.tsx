import * as React from 'react';
import Header from './components/Layout/Header/Header';
import Content from './components/Layout/Content/Content';
import Footer from './components/Layout/Footer/Footer';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import LanguageContext, { defaultLanguage } from './store/LanguageContext';
import translate, { AvailableLanguagesType, AvailableLanguages } from './i18n';

const App: React.FunctionComponent<{}> = () => {

	return (
		<BrowserRouter>
				<div id="Wrapper">
					<Switch>
						<Route exact path={["/", "/:language"]} render={ (routeProps: any) => {
							let language: AvailableLanguagesType = defaultLanguage;
							if (routeProps.match && routeProps.match.params) {
								language = routeProps.match.params.language;
							}

							return (
								<LanguageContext.Provider value={language}>
									<ul className="language-picker">
										{AvailableLanguages.map( (lngName, lngKey) => {
											return (
												<li key={lngKey}>
													<Link to={`/${lngName}`} className={[lngName, (language === lngName ? 'active' : '')].join(' ')}>
														{translate(lngName, 'globals')}
													</Link>
												</li>
											)
										} )}
									</ul>
									<div id="Container">
										<div id={language}>
											<Header />
											<section className="MainContent">
												<Content />
											</section>
											<Footer />
										</div>
									</div>
								</LanguageContext.Provider>
							)
						}} />
					</Switch>
				</div>
			</BrowserRouter>
	);
}

export default App;
