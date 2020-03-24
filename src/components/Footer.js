import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import _ from 'lodash';
import { Link } from 'gatsby';

import Button from './Button';
import facebookIcon from '../assets/icons/facebook.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import Footerlllustartion from '../assets/illustrations/footerIllustartion.inline.svg'

const Footer = () => {
    const illustration = useRef(null)

    const animate = (elements) => {
        const background = elements.getElementById('background');
        const foregroundContent = elements.getElementById('foregroundContent');
        const screen = elements.getElementById('screen');

        gsap.set(elements, { opacity: 1 })
        gsap.set([background, screen, foregroundContent], { autoAlpha: 0 })
        gsap.set(background, { x: '-=200' })
        gsap.set(foregroundContent, { x: '+=250' })

        const tl = gsap.timeline({ defaults: { ease: 'sine.out' } })

        tl.to(background, { x: '+=200', autoAlpha: 1, duration: .6, delay: .3 })
            .to(foregroundContent, { x: '-=250', autoAlpha: 1, duration: .8 }, '-=0.4')
            .to(screen, { autoAlpha: .8 })
    }

    useEffect(() => {
        let isAnimationExecuted = false;
        const [elements] = illustration.current.children;

        if (!illustration.current) return;
        if (((window.scrollY + window.innerHeight + 200) >= illustration.current.offsetTop) && (!isAnimationExecuted)) {
            isAnimationExecuted = true;
            animate(elements);
        }

        window.addEventListener('scroll', _.throttle((e) => triggerAnimation(e), 300));
        const triggerAnimation = e => {
            if (!illustration.current) return;
            if (((window.scrollY + window.innerHeight + 200) >= illustration.current.offsetTop) && (!isAnimationExecuted)) {
                isAnimationExecuted = true;
                animate(elements);
            }
            return;
        }
        return () => window.removeEventListener('scroll', _.throttle((e) => triggerAnimation(e), 300))
    }, [])
    return (
        <StyledFooter>
            <div className="container">
                <h2>Mikołaj Zienkowicz<span>Freelancer, web developer.</span></h2>
                <div className="button">
                    <Link to='/contact'><Button>Formularz kontaktowy</Button></Link>
                </div>
                <div className="socials">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/miko%C5%82aj-zienkowicz-8b4a6118b/"><img src={linkedinIcon} alt="" /></a></li>
                        <li><a href="https://github.com/s0mething01"><img src={githubIcon} alt="" /></a></li>
                        <li><a href="https://www.instagram.com/s0mething07/?hl=pl"><img src={instagramIcon} alt="" /></a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100004601744236"><img src={facebookIcon} alt="" /></a></li>
                    </ul>
                </div>
                <div className="image" ref={illustration}>
                    <Footerlllustartion />
                </div>
                <ul>
                    <li><a href="tel:881-583-586">881 583 586</a></li>
                    <li><a href="mailto:miki70707@interia.pl">miki70707@interia.pl</a></li>
                </ul>
            </div>
        </StyledFooter>
    );
}

export default Footer;

const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 4rem 0;
    @media only screen and (max-width: 1600px) {
        padding: 8rem 8rem;
    }
    @media only screen and (max-width: 1200px) {
        padding: 6rem 4rem;
    }
    @media only screen and (max-width: 961px) {
        padding: 6rem 4rem;
    }
	@media only screen and (max-width: 768px) {
        padding: 6rem 4rem;
    }
    div.container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1.4fr 2fr 70px; 
        max-width: 1400px; 
        margin: 0 auto;
        @media only screen and (max-width: 1100px) {
            grid-template-columns: 1.2fr 1fr;
            grid-template-rows: 1fr 1fr 70px; 
        }
        @media only screen and (max-width: 768px) {
            grid-template-columns: 1fr;
            grid-template-rows: 120px 0px 90px 90px 90px;
        }
        @media only screen and (max-width: 420px) {
            grid-template-rows: 100px 0px 80px 80px 160px;
        }
        h2 {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
            grid-column: 1;
            grid-row: 1;
            font-weight: ${({ theme }) => theme.font.bold};
            font-size: ${({ theme }) => theme.font.l};
            letter-spacing: .2px;
            span {
                margin-top: 15px;
                display: block;
                opacity: .5;
            }
            @media only screen and (max-width: 768px) {
                grid-column: 1;
                grid-row: 1;
                justify-content: center;
            }
            @media only screen and (max-width: 580px) {
                span {
                    font-size: 3rem;
                }
            }
            @media only screen and (max-width: 420px) {
                justify-content: center;
                align-items: center;
                text-align: center;
                font-size: 3.5rem;
                span {
                    font-size: 2.9rem;
                }
            }
        }
        .button {
            grid-column: 1;
            grid-row: 2;
            display: flex;
            justify-content: flex-start; 
            align-items: center;
            margin: 0;
            @media only screen and (max-width: 768px) {
                grid-column: 1;
                grid-row: 3;
            }
            @media only screen and (max-width: 420px) {
                justify-content: center;
            }
            button {
                color: white;
                font-weight: ${({ theme }) => theme.font.bold};
                font-size: ${({ theme }) => theme.font.s};
                letter-spacing: .2px;
                padding: 1.5rem 3rem;
                border: 4px solid white;
            }
        }
        .socials {
            grid-column: 1;
            grid-row: 3;
            display: flex;
            align-items: center;
            @media only screen and (max-width: 768px) {
                grid-column: 1;
                grid-row: 4;
            }
            ul {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                @media only screen and (max-width: 420px) {
                    width: 100%;
                    justify-content: space-between;
                    padding: 0 2rem;
                }
                li {
                    margin-right: 30px;
                    height: 50px;
                    @media only screen and (max-width: 420px) {
                        margin: 0;
                    }
                    @media only screen and (max-width: 380px) {
                        height: 40px;
                    }
                    img {
                        height: 50px;
                        @media only screen and (max-width: 380px) {
                            height: 40px;
                        }
                    }
                }
            }
        }
        & > ul {
            grid-column: 2;
            grid-row: 3; 
            display: flex;
            justify-content: center;
            align-items: flex-end;
            @media only screen and (max-width: 1100px) {
                align-items: center;
            }
            @media only screen and (max-width: 768px) {
                grid-column: 1;
                grid-row: 5;
                justify-content: space-between;

            }
            @media only screen and (max-width: 420px) {
                flex-wrap: wrap;
            }
            li {
                margin: 0 10px;
                display: block;
                font-weight: ${({ theme }) => theme.font.bold};
                font-size: ${({ theme }) => theme.font.s};
                letter-spacing: .2px;
                padding: 1rem 2rem;
                width: 45%;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgba(255,255,255,.3);
                /* color: ${({ theme }) => theme.colors.primary}; */
                color: white;
                cursor: pointer;
                @media only screen and (max-width: 1100px) {
                    font-size: 1.6rem;
                    border-width: 3px;
                    padding: .4rem 1.8rem;
                }
                @media only screen and (max-width: 961px) {
                    font-size: 1.6rem;
                    padding: 1rem ;
                    margin: 0 10px 0 0;
                    text-align: center;
                    /* width: auto; */
                }
                @media only screen and (max-width: 768px) {
                    padding: 1rem 2rem;
                    font-size: ${({ theme }) => theme.font.xs};
                    border-width: 4px;
                    text-align: center;
                    width: 48%;
                }
                @media only screen and (max-width: 420px) {
                    width: 100%;
                    font-size: ${({ theme }) => theme.font.s};
                    margin: 5px 0 0 0;
                }
            }
        }
        .image {
            grid-column: 2;
            grid-row: 1 / 3;
            justify-content: center;
            align-items: center;
            display: flex;
            /* padding:  10rem; */
            height: 300px;
            @media only screen and (max-width: 768px) {
                grid-column: 1;
                grid-row: 2;
                padding: 4rem 0;
                width: 100%;
                display: none;
            }
            @media only screen and (max-width: 420px) {
                height: 300px;
                display: none;
            }
            svg {
                width: auto;
                height: 100%;
                opacity: 0;
            }
        }
    }
`;
