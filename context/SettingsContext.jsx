import React, { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "@/styles/Theme";

import frfrJson from "@/config/localization/frfr.json";
import enukJson from "@/config/localization/enuk.json";

export const SettingsContext = createContext({});

const listaTemas = {
	dark: darkTheme,
	light: lightTheme,
};

export default function SettingsProvider({ children }) {
	const [theme, setTheme] = useState(darkTheme);
	const [changeLanguage, setLanguage] = useState(false);

	function changeTheme(newTheme) {
		setTheme(listaTemas[newTheme]);
	}

	function changeLanguageLocalization() {
		setLanguage(!changeLanguage);
	}

	var language = changeLanguage == true ? enukJson : frfrJson;

	return (
		<SettingsContext.Provider value={{ changeTheme, changeLanguageLocalization, language }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</SettingsContext.Provider>
	);
}
