import React, { useRef, useEffect } from 'react'
import styled from 'styled-components';
import gsap from 'gsap';
import _ from 'lodash';

const BenefitsCard = ({ Illustration, title, content }) => {
    const illustration = useRef(null)

    const animate = (elements) => {
        const background = elements.getElementById('background');
        const foreground = elements.getElementById('foreground');
        const human = elements.getElementById('human');

        gsap.set(elements, { opacity: 1 })
        gsap.set([background, human, foreground], { autoAlpha: 0 })
        gsap.set(background, { x: '-=200' })
        gsap.set(human, { x: '+=250' })

        const tl = gsap.timeline({ defaults: { ease: 'sine.out' } })

        tl.to(background, { x: 0, autoAlpha: 1, duration: .4 })
            .to(human, { x: 0, autoAlpha: 1, duration: .5 }, '-=0.4')
            .to(foreground, { autoAlpha: 2 }, '-=0.5')
    }

    useEffect(() => {
        let isAnimationExecuted = false;
        const [elements] = illustration.current.children;
        if (!illustration.current) return;
        if (illustration.current.offsetTop)
            if (((window.scrollY + window.innerHeight + (illustration.current.clientHeight)) >= illustration.current.offsetTop + illustration.current.clientHeight) && (!isAnimationExecuted)) {
                isAnimationExecuted = true;
                animate(elements);
            }

        window.addEventListener('scroll', _.throttle((e) => triggerAnimation(e), 200));
        const triggerAnimation = e => {
            if (!illustration.current) return;
            if (((window.scrollY + window.innerHeight) >= illustration.current.offsetTop + illustration.current.clientHeight / 2) && (!isAnimationExecuted)) {
                isAnimationExecuted = true;
                animate(elements);
            }
            return;
        }
        return () => window.removeEventListener('scroll', _.throttle((e) => triggerAnimation(e), 300), true)
    }, [])
    return (

        <StyledArticle>
            <div className="image" ref={illustration}>
                <Illustration />
            </div>
            <h3>{title}</h3>
            <p>{content}</p>
        </StyledArticle>
    )
}

export default BenefitsCard;

const StyledArticle = styled.article`
    width: 45%;
    text-align: center;
    @media only screen and (max-width: 650px) {
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        margin-bottom: 100px;
    }
    .image {
        padding: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            width: 80%;
            opacity: 0;
            height: auto;
            @media only screen and (max-width: 961px) {
                width: 100%;
                max-width: 350px;
            }
            @media only screen and (max-width: 450px) {
                max-width: 450px;
            }
        }
    }
    h3 {
        font-weight: ${({ theme }) => theme.font.bold};
        font-size: ${({ theme }) => theme.font.l};
        letter-spacing: .2px;
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 3rem;
    }
    p {
        font-weight: ${({ theme }) => theme.font.light};
        font-size: ${({ theme }) => theme.font.s};
        line-height: 3rem;
        letter-spacing: .2px; 
        color: ${({ theme }) => theme.colors.secondary};
        max-width: 300px;
        margin: 0 auto;
        @media only screen and (max-width: 450px) {
            max-width: 220px;
        }
    }
`;