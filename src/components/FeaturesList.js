import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import FeatureCard from './FeatureCard';
import Button from './Button';
import FeatureListRirstIllustration from '../assets/illustrations/featureList/featureListFirstIllustration.inline.svg'
import FeatureListSecondIllustration from '../assets/illustrations/featureList/featureListSecondIllustration.inline.svg'
import FeatureListThirdIllustration from '../assets/illustrations/featureList/featureListThirdIllustration.inline.svg'

const FeaturesList = () => {
    return (
        <StyledSection>
            <FeatureCard Illustration={FeatureListRirstIllustration} content={'Twoja strona będzie świetnie wyglądała na komputerze, laptopie, tablecie czy telefonie. Coraz więcej ludzi korzysta ze swoich smartfonów do przeglądania internetu, dlatego zadbam, by Twoja strona wyglądała idealnie na każdej wielkości ekranu.'} title={'Dostosowana do wszystkich urządzeń.'} />
            <FeatureCard Illustration={FeatureListSecondIllustration} content={'Do stworzenia Twojej strony użyje najnowszych technologii, takich jak React czy bazujący na nim Gatsby. Dzięki temu każdy użytkownik, nawet ten ze słabszym sprzętem lub wolniejszym Internetem, będzie mógł komfortowo z niej korzystać.'} title={'Napisana  w najnowszych technologiach.'} />
            <FeatureCard Illustration={FeatureListThirdIllustration} content={'Projekt twojej strony nie będzie opierał się na popularnych szablonach, dostępnych  w internecie za darmo. Wszystkie zastosowane na niej rozwiązania będą dostosowane do Twoich potrzeb tak, aby dogonić potrzebom użytkowników. '} title={'Unikatowy i spersonalizowny projekt.'} />
            <Link to='/offert'><Button isPurple>Zobacz ofertę</Button></Link>
        </StyledSection>
    );
}

export default FeaturesList;

const StyledSection = styled.section`
    width: 100%;
    max-width: 1400px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 1600px) {
		margin: 50px auto 50px;
        padding: 8rem 8rem;
    }
    @media only screen and (max-width: 1200px) {
        padding: 6rem 4rem;
		margin: 20px auto 20px;
    }
    @media only screen and (max-width: 961px) {
        padding: 6rem 4rem;
		margin: 10px auto 10px;
    }
	@media only screen and (max-width: 768px) {
		padding: 4rem 4rem;
	}
    a {
        align-self: flex-end;
        @media only screen and (max-width: 768px) {
            align-self: flex-start;
        }
    }
`;