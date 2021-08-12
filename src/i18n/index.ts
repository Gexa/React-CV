import i18n from './i18n';

export const AvailableLanguages = ['hu', 'en'];
export type AvailableLanguagesType = 'hu' | 'en' | 'globals';

const translate = (text: any, language: AvailableLanguagesType = 'hu'): string => {
    if (!i18n[language]) {
        return text;
    }

    const languageVars: any = i18n[language];
    if (languageVars[text]) {
        return languageVars[text];
    }

    return text;

}


export default translate;