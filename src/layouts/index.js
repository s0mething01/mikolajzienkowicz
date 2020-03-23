import React from "react";
import { theme } from '../theme/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import { Helmet } from "react-helmet";

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MikolajZienkowicz</title>
                <meta name="description" content="Jestem młodym twórcą stron internetowych, jeśli potrzbujesz małej strony dla twojej firmy o schludnym wyglądzie, możliwością edycji treści, która dostosowana jest do wszystkich urządzeń, to dobrze trafiłeś!" />
                <meta name="keywords" content="strona, strona internetowa, mikołaj, zienkowicz, mikolaj, developer, tanio, szybko, piękna, funkcjonalna, zarządzanie, treścią, web, reklama, internetowa, tworzenie, przygotowanie, projekt, solidnie, responsive, cms, responsywność, dopasowana, urządzenia, różne " />
                <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
                <link rel="manifest" href="/static/site.webmanifest" />
                <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#6c63ff" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#6c63ff" />
            </Helmet>
            <div id="pageWrapper">
                <GlobalStyle />
                <Navigation />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default Layout;

