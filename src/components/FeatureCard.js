import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import _ from 'lodash';


const FeatureCard = ({ title, content, Illustration }) => {
    const illustration = useRef(null)

    const animate = (elements) => {
        const background = elements.getElementById('background');
        const foreground = elements.getElementById('foreground');
        const human = elements.getElementById('human');

        gsap.set(elements, { opacity: 1 })
        gsap.set([background, human, foreground], { autoAlpha: 0 })
        gsap.set(background, { x: '+=200' })
        gsap.set(human, { x: '-=250' })

        const tl = gsap.timeline({ defaults: { ease: 'sine.out' } })

        tl.to(background, { x: 0, autoAlpha: 1, duration: .5 })
            .to(human, { x: 0, autoAlpha: 1, duration: .5 }, '-=0.4')
            .to(foreground, { autoAlpha: 2 }, '-=0.5')
    }

    useEffect(() => {
        let isAnimationExecuted = false;
        const [elements] = illustration.current.children;
        if (!illustration.current) return;
        if (illustration.current.offsetTop)
            if (((window.scrollY + window.innerHeight + (illustration.current.clientHeight / 10)) >= illustration.current.offsetTop) && (!isAnimationExecuted)) {
                isAnimationExecuted = true;
                animate(elements);
            }

        window.addEventListener('scroll', _.throttle((e) => triggerAnimation(e), 200));
        const triggerAnimation = e => {
            if (!illustration.current) return;
            if (((window.scrollY + window.innerHeight + (illustration.current.clientHeight / 20)) >= illustration.current.offsetTop + illustration.current.clientHeight) && (!isAnimationExecuted)) {
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
            <div className="content">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </StyledArticle>
    );
}

export default FeatureCard;

const StyledArticle = styled.article`
    display: flex;
    margin-bottom: 150px;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
		flex-direction: column;
	}
    @media only screen and (max-width: 450px) {
        margin-bottom: 100px;
    }
    .image {
        max-width: 700px;
        order: 0;
        margin: 0 50px 0 0;
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        @media only screen and (max-width: 961px) {
            max-width: 400px;
            margin: 0 20px 0 0;
        }
        @media only screen and (max-width: 768px) {
            max-width: 400px;
            margin: 10px 0;
        }
        svg {
            width: 100%;
            opacity: 0;
            height: auto;
        }
    }
    .content {
        order: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 700px;
        @media only screen and (max-width: 768px) {
            max-width: 500px;
        }
        h3 {
            font-weight: ${({ theme }) => theme.font.bold};
            font-size: ${({ theme }) => theme.font.l};
            letter-spacing: .2px;
            color: ${({ theme }) => theme.colors.primary};
            margin-bottom: 3rem;
            @media only screen and (max-width: 490px) {
                font-size: 3rem;
            }
        }
        p {
            font-weight: ${({ theme }) => theme.font.light};
            font-size: ${({ theme }) => theme.font.s};
            line-height: 3rem;
            letter-spacing: .2px; 
            color: ${({ theme }) => theme.colors.secondary};
            max-width: 600px;
        }
    }
    &:nth-child(even) {
        .image { 
            order: 2;
            margin: 0 0 0 100px;
            @media only screen and (max-width: 961px) {
                margin: 0 0 0 20px;
            }
            @media only screen and (max-width: 768px) {
                order: 0;
                margin: 10px 0;
            }
        }
    }
    &:last-child {
        margin: 0;
    }
`;