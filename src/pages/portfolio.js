import React from "react";
import styled from 'styled-components';

import Header from "../components/Header";
import HeaderIllustration from "../assets/illustrations/portfolioHeaderIllustration.inline.svg";
import firstPortfolioPageImage from '../assets/illustrations/portfolio/firstPortfolioPageIcon.svg';
import secondPortfolioPageImage from '../assets/illustrations/portfolio/secondPortfolioPageIcon.svg';
import thirdPortfolioPageImage from '../assets/illustrations/portfolio/thirdPortfolioPageIcon.svg';
import PortfolioPagePresentation from '../components/PortfolioPagePresentation';



const headerContent = {
	heading: "Rzuć okiem na to, co do tej pory stworzyłem!",
	paragraph: "Znajdziesz tu projekty które wykonałem. Każda jest inna, ale wiele je łączy. Wszystkie posiadają unikatowy wygląd, są zarządzane z poziomu CMS’a, czyli prostego edytora treści oraz są bardzo wydajne ze względu na technologię w których zostały stworzone.",
}

const PortfolioPage = () => (
	<>
		<Header
			Illustration={HeaderIllustration}
			heading={headerContent.heading}
			paragraph={headerContent.paragraph}
		/>
		<StyledSection>
			<PortfolioPagePresentation link="https://quizzical-hodgkin-7f1a86.netlify.com" image={firstPortfolioPageImage} title={"Strona internetowa dla fizjoterapeutki"} content={"Strona jest wykonana w technologii Gatsby. Posiada szybkie odnośniki do portali społecznościowych oraz bardzo funkcjonalny formularz kontaktowy, który zapewnia łatwy i szybki kontakt z pacjentem.  Dodatkowo, treść, może być zmieniona, dzięki dostępowi do panelu administratora w CMS."} />
			<PortfolioPagePresentation link="https://naukajazdypawelgalas.netlify.com" image={secondPortfolioPageImage} title={"Strona internetowa dla szkoły nauki jazdy."} content={"Strona jest wykonana w technologii react. Posiada mapkę dojazdu z Google'a, galerię zdjęć, formularz kontaktowy do zapisów na kurs oraz blog zarządzany  z poziomu panelu administratora w CMS, dzięki któremu właściciel może łatwo zmienić znajdujące się na niej treści. "} />
			<PortfolioPagePresentation link="https://nikolafabian.netlify.com" image={thirdPortfolioPageImage} title={"Strona internetowa dla pasjonatki cukiernictwa."} content={"Strona ta została wykonana w technologii gatsby. Przedstawia wypieki, jakie oferuje jej właścicielka. Rodzaje słodkości są przedstawione za pomocą nowoczesnych i przykuwających uwagę ikonek. Całość urozmaicają animacje pojawiające się przy scrollowaniu strony."} />
		</StyledSection>
	</>
)

export default PortfolioPage;

const StyledSection = styled.section`
	width: 100%;
  	max-width: 1400px;
  	margin: 300px auto 200px;
	@media only screen and (max-width: 1600px) {
        padding: 8rem 8rem;
    }
    @media only screen and (max-width: 1200px) {
        padding: 6rem 4rem;
		margin: 200px auto 0;
    }
    @media only screen and (max-width: 961px) {
        padding: 6rem 4rem;
		margin: 100px auto 0;
    }
	@media only screen and (max-width: 768px) {
        padding: 4rem 4rem;
		margin: 50px auto 0;
    }
`;