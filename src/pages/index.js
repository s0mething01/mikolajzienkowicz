import React from 'react';
import styled from 'styled-components';

import Header from "../components/Header";
import FeaturesList from '../components/FeaturesList';
import AboutMe from '../components/AboutMe';
import BenefitsList from '../components/BenefitsList';
import Illustration from '../assets/illustrations/mainHeaderIllustration.inline.svg';


const headerContent = {
	heading: "Hej! Miło, że wpadłeś na moją stronę.",
	paragraph: "Potrzebujesz strony internetowej dla swojej firmy? Trafiłeś w odpowiednie miejsce! Stworzę unikatową stronę, dostosowaną do Twoich potrzeb i odpowiadającą na potrzeby użytkowników. Jeżeli jesteś zainteresowany, sprawdź moją ofertę!"
}

const IndexPage = () => (
	<>
		<Header
			Illustration={Illustration}
			heading={headerContent.heading}
			paragraph={headerContent.paragraph}
		/>
		<StyledSection>
			<FeaturesList />
			<AboutMe />
			<BenefitsList />
		</StyledSection>
	</>
)

export default IndexPage;

const StyledSection = styled.section`
    width: 100%;
  	margin: 300px auto 300px;
	@media only screen and (max-width: 961px) {
				margin: 160px auto 50px;
	}
	@media only screen and (max-width: 768px) {
				margin: 80px auto 30px;
	}
`;
