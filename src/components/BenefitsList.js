import React from 'react';
import styled from 'styled-components';

import BenefitsCard from './BenefitsCard';
import BenefitsFirstIllustration from '../assets/illustrations/benefitsList/befitsListFirstIllustration.inline.svg';
import BenefitsSecondIllustration from '../assets/illustrations/benefitsList/befitsListSecondIllustration.inline.svg';

const BenefitsList = () => {
    return (
        <StyledSection>
            <BenefitsCard Illustration={BenefitsFirstIllustration} title={'CMS'} content={'System zarządzania treścią, abyś mógł samemu zarządzać  treścią na stronie.'} />
            <BenefitsCard Illustration={BenefitsSecondIllustration} title={'Domena'} content={'Własna, spersonalizowana domena podpięta do Twojej strony na rok gratis.'} />
        </StyledSection>
    );
}

export default BenefitsList;

const StyledSection = styled.section`
    width: 100%;
  	max-width: 1400px;
  	margin: 100px auto;
    display: flex;
    justify-content: space-between;
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
    @media only screen and (max-width: 650px) {
        flex-direction: column;
    }
`;