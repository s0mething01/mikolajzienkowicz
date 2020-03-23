import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import _ from 'lodash';

const PortfolioPagePresentation = ({ link, image, title, content }) => {
    const illustration = useRef(null)

    const animate = (element) => {
        gsap.set(element, { opacity: 1 })
        gsap.set(element, { y: '-=50', autoAlpha: 0 })

        const tl = gsap.timeline({ defaults: { ease: 'sine.out' } })

        tl.to(element, { y: 0, autoAlpha: 1, duration: .8 })

    }

    useEffect(() => {
        let isAnimationExecuted = false;
        const [elements] = illustration.current.children;
        if (!illustration.current) return;
        if (illustration.current.offsetTop)
            if (((window.scrollY + window.innerHeight + (illustration.current.clientHeight / 20)) >= illustration.current.offsetTop + illustration.current.clientHeight) && (!isAnimationExecuted)) {
                isAnimationExecuted = true;
                animate(elements);
            }

        window.addEventListener('scroll', _.throttle((e) => triggerAnimation(e), 200));
        const triggerAnimation = e => {
            if (!illustration.current) return;
            if (((window.scrollY + window.innerHeight + 60) >= illustration.current.offsetTop + illustration.current.clientHeight) && (!isAnimationExecuted)) {
                isAnimationExecuted = true;
                animate(elements);
            }
            return;
        }
        return () => window.removeEventListener('scroll', _.throttle((e) => triggerAnimation(e), 300), true)
    }, [])
    return (
        <StyledArticle>
            <a target="_blank" rel="noopener noreferrer" href={link}>
                <div className="image" ref={illustration}>
                    <img src={image} id="img" alt="" />
                </div>
                <div className="content">
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </a>
        </StyledArticle>
    );
}

export default PortfolioPagePresentation;

const StyledArticle = styled.article`
	a {
        display: flex;
        margin-bottom: 150px;
        justify-content: space-between;
        @media only screen and (max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }
        @media only screen and (max-width: 500px) {
            margin-bottom: 100px;
        }
    }
    .image {
        max-width: 600px;
        order: 0;
        margin: 0 100px 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        @media only screen and (max-width: 961px) {
            width: 40%;
            margin: 0 50px 0 0;
        }
        @media only screen and (max-width: 768px) {
            width: 100%;
            margin: 0 0 50px 0;
            max-width: 500px;
        }
        @media only screen and (max-width: 500px) {
            margin: 0 0 20px 0;
        }
        img {
            width: 100%;
            opacity: 0;
        }
    }
    .content {
        order: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 700px;
        @media only screen and (max-width: 961px) {
            width: 60%;
        }
        @media only screen and (max-width: 768px) {
            width: 100%;
            max-width: 500px;
        }
        h3 {
            font-weight: ${({ theme }) => theme.font.bold};
            font-size: ${({ theme }) => theme.font.l};
            letter-spacing: .2px;
            color: ${({ theme }) => theme.colors.primary};
            margin-bottom: 3rem;
            @media only screen and (max-width: 768px) {
                max-width: 500px;
            }
        }
        p {
            font-weight: ${({ theme }) => theme.font.light};
            font-size: ${({ theme }) => theme.font.s};
            line-height: 3rem;
            letter-spacing: .2px; 
            color: ${({ theme }) => theme.colors.secondary};
            max-width: 600px;
            @media only screen and (max-width: 768px) {
                max-width: 500px;
            }
        }
    }
    &:nth-child(even) {
        .image { 
            order: 2;
            margin: 0 0 0 100px;
            @media only screen and (max-width: 961px) {
                margin: 0 0 0 50px;
            }
            @media only screen and (max-width: 768px) {
                order: 0;
                margin: 0 0 50px 0;
            }
            @media only screen and (max-width: 500px) {
                margin: 0 0 20px 0;
            }
        }
    }
    &:last-child {
        margin: 0;
    }
`;