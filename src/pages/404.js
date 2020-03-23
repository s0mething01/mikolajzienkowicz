import React, { useRef, useEffect } from "react";
import { Link } from 'gatsby';
import styled from 'styled-components';
import gsap from 'gsap';

import Illustration from "../assets/illustrations/pageNotFoundIllustration.inline.svg";

const NotFoundPage = () => {
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
		<StyledWrapper>
			<Link to="/">
				<div ref={illustration}>
					<Illustration />
				</div>
				<h1>Uups, nie znaleziono takiej strony.</h1>
				<h2>Kliknij, a przeniesiemy Cię na stronę główną.</h2>
			</Link>
		</StyledWrapper>
	);
}

export default NotFoundPage;

const StyledWrapper = styled.section`
	max-width: 1400px;
	margin: 100px auto;
	padding: 15vh 0;
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
			margin: 4rem 0;
		}
	}
	h1 {
		font-size: ${({ theme }) => theme.font.xl};
        font-weight: ${({ theme }) => theme.font.bold};
		letter-spacing: .5px;
		@media only screen and (max-width: 961px) {
			font-size: ${({ theme }) => theme.font.l};
		}
		@media only screen and (max-width: 768px) {
			font-size: ${({ theme }) => theme.font.m};
		}
	}
	h2 {
		font-size: ${({ theme }) => theme.font.l};
		font-weight: ${({ theme }) => theme.font.bold};
        letter-spacing: .5px;
		opacity: .5;
		@media only screen and (max-width: 961px) {
			font-size: ${({ theme }) => theme.font.m};
		}
		@media only screen and (max-width: 768px) {
			font-size: ${({ theme }) => theme.font.m};
		}
	}
`;
