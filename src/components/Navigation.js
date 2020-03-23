import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Navigation = () => {
    const [isNavShown, setNavVisiblity] = useState(false);

    return (
        <StyledNav isNavShown={isNavShown}>
            <Link to="/"><h2>MikołajZienkowicz</h2></Link>
            <ul>
                <li><Link to="/" onClick={() => setNavVisiblity(false)}>główna</Link></li>
                <li><Link to="/portfolio" onClick={() => setNavVisiblity(false)}>portfolio</Link></li>
                <li><Link to="/offert" onClick={() => setNavVisiblity(false)}>oferta</Link></li>
                <li><Link to="/contact" onClick={() => setNavVisiblity(false)}>kontakt</Link></li>
            </ul>
            <button onClick={() => setNavVisiblity(!isNavShown)}>
                <div></div>
                <div></div>
                <div></div>
            </button>
        </StyledNav>
    );
}

export default Navigation;

const StyledNav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10000;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
    font-weight: ${({ theme }) => theme.font.bold};
    @media only screen and (max-width: 768px) {
        height: 50px;
    }
    ul {
        display: flex;
        @media only screen and (max-width: 768px) {
            position: absolute;
            top: 0; 
            bottom: 0;
            right: 0;
            height: 100vh;
            width: 100%;
            max-width: 420px;
            flex-direction: column;
            background-color: ${({ theme }) => theme.colors.primary};
            padding: 10vh 5rem;
            z-index: 3;
            transition: opacity .1s ease;
            opacity: ${({ isNavShown }) => isNavShown ? '1' : '0'};
            visibility: ${({ isNavShown }) => isNavShown ? 'visible' : 'hidden'};
        }
        li {
            a {
                display: block;
                padding: 2rem 4rem;
                letter-spacing: .5px;
                cursor: pointer;
                transition: .3s ease;
                font-size: ${({ theme }) => theme.font.xs};
                &:hover {
                    background: rgba(255,255,255,.2);
                }
                @media only screen and (max-width: 961px) {
                    padding: 2rem 3rem;
                }
                @media only screen and (max-width: 768px) {
                    font-size: ${({ theme }) => theme.font.s};
                    padding: 2rem 4rem;
                    border-bottom: 2px solid white;
                    max-width: 280px;
                    text-align: center;
                    margin: 0 auto;
                }
            }
        }
    }
    h2 {
        position: relative;
        font-size: ${({ theme }) => theme.font.m};
        font-weight: ${({ theme }) => theme.font.bold};
        letter-spacing: .5px;
        z-index: 99999999;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        background-color: ${({ theme }) => theme.colors.primary};
    }
    button {
        display: none;
        cursor: pointer;
        @media only screen and (max-width: 768px) {
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            color: white;
            z-index: 9999;
            height: 50px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            padding: 10px 4rem;
            div {
                width: 45px;
                height: 4px;
                background-color: #fff;
                margin: 2px 0;
            }
        }
        @media only screen and (max-width: 450px) {
            div {
                width: 40px;
            }
        }
        @media only screen and (max-width: 360px) {
            padding: 13px 4rem;
            div {
                width: 35px;
                height: 3px;
            }
        }
    }
`;