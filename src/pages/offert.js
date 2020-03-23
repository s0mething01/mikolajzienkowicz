import React from "react";
import Header from "../components/Header";
import Card from '../components/Card';
import styled from "styled-components";

import Illustration from "../assets/illustrations/offertHeaderIllustration.inline.svg"

const headerContent = {
	heading: "Zobacz, co mogę Ci zaoferować!",
	paragraph: "Chcę, aby każdy znalazł tu coś dla siebie, dlatego stworzyłem trzy zupełnie różne oferty. Pierwsza z nich to podstawowa strona internetowa, druga skierowana jest do osób, które chcą samodzielnie zarządzać treścią. Jeżeli jednak potrzebujesz czegoś więcej, wybierz ofertę indywidualną!",
}

const OffertPage = () => (
	<>
		<Header
			Illustration={Illustration}
			heading={headerContent.heading}
			paragraph={headerContent.paragraph}
		/>
		<StyledSection>
			<ul>
				<Card name="personal website" checkList={[1, 1, 1, 0, 0, 0]} cost="600zł" />
				<Card name="small buisness" mostPopular checkList={[1, 1, 1, 1, 0, 0]} cost="1000zł" />
				<Card name="Individual" checkList={[1, 1, 1, 1, 1, 1]} cost="Indywidualnie" smallerCostHeading />
			</ul>
		</StyledSection>
	</>
)

export default OffertPage;

const StyledSection = styled.section`
  	width: 100%;
  	max-width: 1400px;
  	margin: 300px auto 200px;
  	@media only screen and (max-width: 1600px) {
		margin: 200px auto 50px;
        padding: 8rem 8rem;
    }
    @media only screen and (max-width: 1200px) {
        padding: 6rem 4rem;
		margin: 100px auto 50px;
    }
    @media only screen and (max-width: 961px) {
        padding: 6rem 4rem;
		margin: 100px auto 50px;
    }
	@media only screen and (max-width: 768px) {
		padding: 4rem 4rem;
		margin: 50px auto 0;
	}
	@media only screen and (max-width: 500px) {
		margin: 0 auto;
	}
  	& > ul {
		display: flex;
		justify-content: center;
		align-items: center;
		@media only screen and (max-width: 768px) {
			flex-direction: column;
		}
  	}
`;