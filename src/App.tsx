import * as React from 'react';
import Header from './components/Layout/Header/Header';
import Content from './components/Layout/Content/Content';
import Footer from './components/Layout/Footer/Footer';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import LanguageContext, { defaultLanguage } from './store/LanguageContext';
import translate, { AvailableLanguagesType, AvailableLanguages } from './i18n';
import WithAnimation from './components/hoc/WithAnimation';
import { AnimatePresence } from 'framer-motion';

const App: React.FunctionComponent<{}> = () => {

	return (
		<BrowserRouter>
			<Route render={({ location }) => (
				<div id="Wrapper">
					<AnimatePresence exitBeforeEnter initial={false}>
						<Switch location={location} key={location.pathname}>
							<Route exact path={["/", "/:language(hu|en)"]} render={(routeProps: any) => {
								let language: AvailableLanguagesType = defaultLanguage;
								if (routeProps.match && routeProps.match.params) {
									language = routeProps.match.params.language;
								}

								return (
									<LanguageContext.Provider value={language}>
										<ul className="language-picker">
											{AvailableLanguages.map((lngName, lngKey) => {
												return (
													<li key={lngKey}>
														<Link to={`/${lngName}`} className={[lngName, (language === lngName || (!language && lngName === defaultLanguage) ? 'active' : '')].join(' ')}>
															{translate(lngName, 'globals')}
														</Link>
													</li>
												)
											})}
										</ul>
										<WithAnimation>
											<div id="Container">
												<div id={!language ? defaultLanguage : language}>
													<Header />
													<section className="MainContent">
														<Content />
													</section>
													<Footer />
												</div>
											</div>
										</WithAnimation>
									</LanguageContext.Provider>
								)
							}} />
							<Route render={() => {
								return (
									<div className="page404">
										<h1>404 <small>page not found</small></h1>
										<p>Sorry, but this page not exists. Please go to homepage or try another URL.</p>
										<Link to="/">Go to MainPage</Link>
									</div>
								)
							}} />
						</Switch>
					</AnimatePresence>
				</div>
			)} />
		</BrowserRouter>
	);
}

export default App;
