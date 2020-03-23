import React, { useRef, useEffect } from "react";
import { Link } from 'gatsby';
import styled from 'styled-components';
import gsap from 'gsap';

import Illustration from "../assets/illustrations/succesPageIllustration.inline.svg";

const PortfolioPage = () => {
    const illustration = useRef(null)

    useEffect(() => {
        const [elements] = illustration.current.children;
        const contur = elements.getElementById('contur');
        const leafs = elements.getElementById('leafs');
        const human = elements.getElementById('human');
        const fill = elements.getElementById('fill');

        gsap.set(elements, { opacity: 1 })
        gsap.set([contur, leafs, human, fill], { autoAlpha: 0 })
        gsap.set(contur, { x: -100 })
        gsap.set(leafs, { x: 100 })
        gsap.set(human, { y: -50 })

        const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } })

        tl.to(contur, { autoAlpha: 1, x: 0, duration: .4 })
            .to(leafs, { autoAlpha: 1, x: 0, duration: .4 }, '-=0.2')
            .to(fill, { autoAlpha: 1, duration: 1 }, '-=0.6')
            .to(human, { y: 0, autoAlpha: 1, duration: .5 }, "-=0.5")
    }, [])
    return (
        < StyledWrapper>
            <Link to="/">
                <div ref={illustration}>
                    <Illustration />
                </div>
                <h1>Wygląda na to, że wysłałeś do mnie pytanie.</h1>
                <h2>Postaram się odpowiedzieć tak szybko jak to tylko możliwe. Jeżeli jednak z jakiegoś powodu nie odpowiem, napisz do mnie na facebooku!</h2>
            </Link>
        </StyledWrapper>
    )
}

export default PortfolioPage;

const StyledWrapper = styled.section`
	max-width: 1400px;
	margin: 50px auto;
	padding: 10vh 0;
	color: ${({ theme }) => theme.colors.primary};
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
        padding: 4rem 4rem;
		margin: 50px auto 0;
    }
	svg {
		width: 100%;
		max-width: 700px;
		opacity: 0;
		height: auto;
		@media only screen and (max-width: 961px) {
			max-width: 500px;
		}
		
	}
	a > * {
		margin: 1rem 0;
		@media only screen and (max-width: 768px) {
			margin: 2rem 0;
		}
	}
	h1 {
		font-size: ${({ theme }) => theme.font.l};
        font-weight: ${({ theme }) => theme.font.bold};
		letter-spacing: .5px;
        padding: 3rem 0;
		@media only screen and (max-width: 961px) {
			font-size: ${({ theme }) => theme.font.l};
            padding: 2rem 0;
		}
		@media only screen and (max-width: 768px) {
			font-size: ${({ theme }) => theme.font.m};
            padding: 1rem 0;
		}
	}
	h2 {
		font-size: 2.5rem;
        line-height: 4rem;
		font-weight: ${({ theme }) => theme.font.regular};
        color: ${({ theme }) => theme.colors.secondary};
        letter-spacing: .5px;
        max-width: 650px;
		@media only screen and (max-width: 961px) {
			font-size: 2.5rem;
		}
		@media only screen and (max-width: 768px) {
			font-size: ${({ theme }) => theme.font.s};
		}
	}
`;
