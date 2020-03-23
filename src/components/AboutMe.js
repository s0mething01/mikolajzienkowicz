import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import _ from 'lodash';

import Illustration from '../assets/illustrations/AboutMeIllustration.inline.svg'


const AboutMe = () => {
	const illustration = useRef(null)

	const animate = (elements) => {
		const desk = elements.getElementById('desk');
		const computer = elements.getElementById('computer');
		const human = elements.getElementById('human');

		gsap.set(elements, { opacity: 1 })
		gsap.set([computer, human, desk], { autoAlpha: 0 })
		gsap.set(computer, { x: '-=200' })
		gsap.set(human, { x: '+=200' })
		gsap.set(desk, { y: '+=250' })

		const tl = gsap.timeline({ defaults: { ease: 'sine.out' } })

		tl.to(desk, { y: 0, autoAlpha: 1, duration: .5, delay: 1 })
			.to(human, { x: 0, autoAlpha: 1, duration: .8 })
			.to(computer, { x: 0, autoAlpha: 2, duration: .7 }, '-=0.2')
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
		<StyledSection>
			<div className="sideImage">
				<svg id="up" xmlns="http://www.w3.org/2000/svg" width="2813.636" height="174" viewBox="0 0 2813.636 174">
					<path id="Path_2211" data-name="Path 2211" d="M2813.635,174H0V0L2813.635,139.9Z" fill="#6c63ff" />
				</svg>
			</div>
			<div className="wrapper">
				<div className="container">
					<div className="image" ref={illustration}>
						<Illustration />
					</div>
					<div className="content">
						<h3>Parę słów o mnie!</h3>
						<p>Cześć! Jestem Mikołaj, mam 19 lat i uczę się w technikum informatycznym. Programowanie to moja największa pasja, która urodziła się wraz z rozpoczęciem szkoły średniej. Większość swojego czasu poświęcam na poszerzanie wiedzy w dziedzinie front-endu. W wolnym czasie lubię też pograć w siatkówkę czy gry komputerowe.</p>
					</div>
				</div>
			</div>
			<div className="sideImage">
				<svg id="down" xmlns="http://www.w3.org/2000/svg" width="2813.636" height="174.354" viewBox="0 0 2813.636 174.354">
					<path id="Path_2210" data-name="Path 2210" d="M0,0H2813.636V174.354L0,34.171Z" fill="#6c63ff" />
				</svg>
			</div>
		</StyledSection>
	);
}

export default AboutMe;

const StyledSection = styled.section`
	color: white;
	.sideImage{
		position: relative;
		z-index: 9;
		width: 110%;
		svg {
			width: 100%;
			height: auto;
		}
	}
	#up {
		transform: translate(-2%, 20%)
	}
	#down {
		transform: translate(-2%, -20%)
	}
	& > div.wrapper {
		position: relative;
		z-index: 10;
		background-color: ${({ theme }) => theme.colors.primary};
		.container {
			width: 100%;
			max-width: 1400px;
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-items: center;
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
				padding: 4rem 4rem;
			}
			.content {
				padding-left: 10rem;
				@media only screen and (max-width: 768px) {
					padding: 0;
				}
				h3 {
					font-weight: ${({ theme }) => theme.font.bold};
					font-size: ${({ theme }) => theme.font.l};
					letter-spacing: .2px;
					margin-bottom: 3rem;
				}
				p {
					font-weight: ${({ theme }) => theme.font.light};
					font-size: ${({ theme }) => theme.font.s};
					line-height: 3rem;
					letter-spacing: .2px; 
					max-width: 650px;
				}
			}
			.image {
				max-width: 400px;
				@media only screen and (max-width: 768px) {
					margin: 0 0 30px 0;
					max-width: 350px
        		}
				@media only screen and (max-width: 450px) {
					max-width: 230px;
				}
				svg {
					width: 100%;
					opacity: 0;
					height: auto;
				}
			}
		}
	}
`;