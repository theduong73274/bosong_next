import '../styles/globals.scss';
import { useState } from 'react';
import detectBrowserLanguage from 'detect-browser-language';
import Main from '../layouts/Main';

function storeLanguageInLocalStorage(language) {
	localStorage.setItem('language', language);
}

export default function App({ Component, pageProps }) {
	const languageDefault = process.browser ? detectBrowserLanguage() : null;
	const listLanguage = ['zh-TW', 'zh-CN'];
	const isLanguageCN = listLanguage.includes(languageDefault);

	let languageStoredInLocalStorage = process.browser
		? localStorage.getItem('language')
		: null;

	let [language, setLanguage] = useState(
		languageStoredInLocalStorage
			? languageStoredInLocalStorage
			: isLanguageCN
			? 'Cn'
			: 'En'
	);
	console.log('🚀 ~ App ~ language', language);

	return (
		<Main
			language={language}
			handleSetLanguage={(language) => {
				setLanguage(language);
				storeLanguageInLocalStorage(language);
			}}
		>
			<Component {...pageProps} />
		</Main>
	);
}
