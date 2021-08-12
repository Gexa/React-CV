import * as React from 'react';

export const defaultLanguage = 'hu';

const LanguageContext = React.createContext(defaultLanguage);

export default LanguageContext;