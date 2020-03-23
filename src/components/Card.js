import React from 'react';
import styled from 'styled-components';

import checkIcon from '../assets/icons/check.svg';
import uncheckIcon from '../assets/icons/uncheck.svg';
import headerEnding from '../assets/illustrations/headerEnding.svg';

const Line = ({ children, check }) => {
    return (
        <StyledLine>
            <p>{children}</p>
            <img src={check ? checkIcon : uncheckIcon} alt="" />
        </StyledLine>
    );
}

const StyledLine = styled.li`
    display: flex;
    border-bottom: 2px solid white;
    padding: 1.4rem 0rem;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1200px) {
        padding: 1.2rem 0rem;
    }
    @media only screen and (max-width: 961px) {
        padding: .9rem 0;
    }
    @media only screen and (max-width: 768px) {
        padding: 1.4rem 0rem;
    }
    @media only screen and (max-width: 400px) {
        padding: 1.2rem 0rem;
    }
    p {
        flex-grow: 1;
        text-align: center;
        font-size: ${({ theme }) => theme.font.xs};
        font-weight: ${({ theme }) => theme.font.bold};
        letter-spacing: .5px;
        @media only screen and (max-width: 1200px) {
            font-size: 1.6rem;
        }
        @media only screen and (max-width: 961px) {
            font-size: 1.3rem;
        }
        @media only screen and (max-width: 768px) {
            font-size: ${({ theme }) => theme.font.s};
        }
        @media only screen and (max-width: 400px) {
            font-size: 1.6rem;
        }
    }
    img {
        width: 30px;
        @media only screen and (max-width: 1200px) {
            width: 28px;
        }
        @media only screen and (max-width: 961px) {
            width: 22px;
        }
        @media only screen and (max-width: 768px) {
            width: 30px;
        }
        @media only screen and (max-width: 400px) {
            width: 28px;
        }
    }
`;

const Card = ({ mostPopular, name, checkList, cost, smallerCostHeading }) => {
    return (
        <li>
            <StyledCard smallerCostHeading={smallerCostHeading}>
                {mostPopular ? <h5>najpopularniejszy</h5> : null}
                <h3>{name}</h3>
                <img src={headerEnding} alt="" />
                <ul>
                    <Line check={checkList[0]}>Spersonalizowany layout</Line>
                    <Line check={checkList[1]}>Domena na rok gratis</Line>
                    <Line check={checkList[2]}>Darmowy hosting </Line>
                    <Line check={checkList[3]}>Mozliwość edycji strony z CMS</Line>
                    <Line check={checkList[4]}>Pomoc techniczna</Line>
                    <Line check={checkList[5]}>Dodatkowe opcje na życzenie</Line>
                </ul>
                <h4>{cost}</h4>
            </StyledCard>
        </li>
    );
}

export default Card;

const StyledCard = styled.div`
    color: white;
    background-color: ${({ theme }) => theme.colors.secondary};
    overflow: hidden;
    margin: 0 20px;
    max-width: 380px;
    flex-shrink: 0;
    @media only screen and (max-width: 1200px) {
        margin: 0 10px;
    }
    @media only screen and (max-width: 961px) {
        margin: 0 2px;
    }
    @media only screen and (max-width: 768px) {
        margin: 30px 0;
    }
    h3 {
        text-transform: uppercase;
        text-align: center;
        padding: 2rem 0 1rem;
        background-color: ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.font.m};
        font-weight: ${({ theme }) => theme.font.bold};
        letter-spacing: .5px;
        @media only screen and (max-width: 1200px) {
            font-size: 2.5rem; 
        }
        @media only screen and (max-width: 961px) {
            font-size: 2rem;
        }
        @media only screen and (max-width: 768px) {
            font-size: ${({ theme }) => theme.font.m};
        }
        /* @media only screen and (max-width: 400px) {
            font-size: 2.5rem;
        } */
    }
    h5 {
        text-transform: uppercase;
        text-align: center;
        padding: 2rem .5rem;
        font-size: ${({ theme }) => theme.font.m};
        font-weight: ${({ theme }) => theme.font.bold};
        letter-spacing: .5px; 
        @media only screen and (max-width: 1200px) {
            font-size: 2.5rem; 
        }
        @media only screen and (max-width: 961px) {
            font-size: 2rem;
        }
        @media only screen and (max-width: 768px) {
            font-size: ${({ theme }) => theme.font.m};
        }
        @media only screen and (max-width: 400px) {
            font-size: 2.4rem; 
        }
    }
    h4 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 2rem .5rem;
        font-size: ${({ theme, smallerCostHeading }) => smallerCostHeading ? theme.font.l : theme.font.xl};
        font-weight: ${({ theme }) => theme.font.bold};
        letter-spacing: .5px;  
        height: 100px;
        @media only screen and (max-width: 1200px) {
            font-size: ${({ smallerCostHeading }) => smallerCostHeading ? "3.5rem" : "4.2rem"};
            height: 70px;
        }
        @media only screen and (max-width: 961px) {
            font-size: ${({ smallerCostHeading }) => smallerCostHeading ? "2.8rem" : "3.8rem"};
            height: 60px;
        }
        @media only screen and (max-width: 768px) {
            font-size: ${({ theme, smallerCostHeading }) => smallerCostHeading ? theme.font.l : theme.font.xl};
            height: 100px;
        }
        @media only screen and (max-width: 400px) {
            /* font-size: ${({ smallerCostHeading }) => smallerCostHeading ? "3.5rem" : "4.2rem"}; */
            height: 70px;
        }
    }
    & > img {
        width: 110%;
        transform: translate(-5%, -2%)
    }
    ul {
        padding: 2rem 2rem .5rem;
        @media only screen and (max-width: 1200px) {
            padding: 1rem 2rem .5rem;
        }
        @media only screen and (max-width: 961px) {
            padding: 1rem 1.5rem .5rem;
        }
        @media only screen and (max-width: 768px) {
            padding: 2rem 2rem .5rem;
        }
        @media only screen and (max-width: 400px) {
            padding: 1rem 2rem .5rem;
        }
    }
`;