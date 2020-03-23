import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import headerEnding from '../assets/illustrations/headerEnding.svg';

const Header = ({ Illustration, heading, paragraph }) => {
    const illustration = useRef(null)

    useEffect(() => {
        const [elements] = illustration.current.children;
        const background = elements.getElementById('background');
        const foreground = elements.getElementById('foreground');
        const extra = elements.getElementById('extra');


        gsap.set([background, extra, foreground], { autoAlpha: 0 })
        gsap.set(elements, { opacity: 1 })
        gsap.set(background, { y: -200 })
        gsap.set(extra, { x: +500 })
        gsap.set(foreground, { x: -40 })

        const tl = gsap.timeline({ defaults: { ease: 'sine.out' } })

        tl.to(background, { y: 0, autoAlpha: 1, duration: .6, delay: .3 })
            .to(foreground, { x: 0, autoAlpha: 1, duration: .5 }, '-=0.3')
            .to(extra, { x: 0, autoAlpha: 1, duration: .7 }, '-=0.5')
    }, [])
    return (
        <StyledWrapper>
            <div className="headerWrapper">
                <div className="headerContent">
                    <h1>{heading}</h1>
                    <p>{paragraph}</p>

                </div>
                <div className="headerIllustration" ref={illustration}>
                    <Illustration />
                </div>
            </div>
            <img className="headerEnding" src={headerEnding} alt="" />
        </StyledWrapper>
    );
}

export default Header;

const StyledWrapper = styled.header`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    position: relative;
    margin-bottom: 120px;
    padding-top: 60px;
    @media only screen and (max-width: 768px) {
        margin-bottom: 50px; 
    }
    div.headerWrapper {
        padding: 8rem 0;
        display: flex;
        max-width: 1400px;
        margin: 0 auto;
        justify-content: space-between;
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
            flex-direction: column;
        }
        div.headerContent {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            max-width: 600px;
            height: auto;
            @media only screen and (max-width: 1300px) {
                width: 50%;
            }
            @media only screen and (max-width: 1200px) {
                width: 55%;
            }
            @media only screen and (max-width: 961px) {
                width: 60%
            }
            @media only screen and (max-width: 768px) {
                width: 100%;
                max-width: auto;
                order: 2;
                max-width: 100%;
            }
            > * {
                margin: 2rem 0;
                @media only screen and (max-width: 961px) {
                    margin: 1rem 0;
                }
            }
            h1 {
                font-weight: ${({ theme }) => theme.font.bold};
                font-size: ${({ theme }) => theme.font.l};
                letter-spacing: .2px;
            }
            p {
                font-weight: ${({ theme }) => theme.font.light};
                font-size: ${({ theme }) => theme.font.s};
                line-height: 3rem;
                letter-spacing: .2px;
            }
            button {
                align-self: flex-end;
            }
        }
        div.headerIllustration {
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 0 0 8rem;
            max-width: 700px;
            @media only screen and (max-width: 1600px) {
                padding: 0 0 0 4rem;
            }
            @media only screen and (max-width: 1300px) {
                width: 50%;
            }
            @media only screen and (max-width: 961px) {
                width: 40%
            }
            @media only screen and (max-width: 768px) {
                width: 100%;
                max-width: 500px;
                padding: 0;
                margin-bottom: 50px;
                align-self: center;
            }
            svg {
                height: auto;
                width: 100%;
                opacity: 0;
            }
        }
    }
    img.headerEnding {
        position: absolute;
        top: 100%;
        width: 102%;
        transform: translate(-1%, -1%)
    }
`;

