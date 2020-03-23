import React, { useEffect, useRef } from "react";
import styled from 'styled-components';
import gsap from 'gsap';

import Illustration from '../assets/illustrations/contactPage/contactIllustration.inline.svg';
import InputImage from '../assets/illustrations/contactPage/inputImage.inline.svg'
import ButtonImage from '../assets/illustrations/contactPage/buttonImage.inline.svg'

const ContactPage = () => {
	const illustration = useRef(null)

	useEffect(() => {
		const [elements] = illustration.current.children;
		const background = elements.getElementById('background');
		const foreground = elements.getElementById('foreground');
		const humans = elements.getElementById('humans');
		const extra = elements.getElementById('extra');

		gsap.set(elements, { opacity: 1 })
		gsap.set([background, humans, foreground, extra], { autoAlpha: 0 })
		gsap.set(background, { x: '+=200' })
		gsap.set(humans, { x: '-=200' })
		gsap.set(foreground, { y: '-=50' })

		const tl = gsap.timeline({ defaults: { ease: 'sine.out' } })

		tl.to(background, { x: 0, autoAlpha: 1, duration: .6, delay: .3 })
			.to(extra, { autoAlpha: 1, duration: .8 }, '-=0.5')
			.to(humans, { x: 0, autoAlpha: 1, duration: .7 }, '-=0.9')
			.to(foreground, { y: 0, autoAlpha: 1, duration: .5 }, '-=0.3')
	}, []);
	return (
		<StyledSection>
			<div className="sideWrapper">
				<h1>Skontaktuj się ze mną!</h1>
				<div className="image" ref={illustration}>
					<Illustration />
				</div>
			</div>
			<form name="contact" method="POST" data-netlify="true" action="/succes">
				<input type="hidden" name="form-name" value="contact" />
				<div>
					<input type="mail" name="mail" id="mail" placeholder="Twój mail" />
					<InputImage />
				</div>
				<div>
					<input type="text" name="title" id="title" placeholder="Temat" />
					<InputImage />
				</div>
				<div className="textarea">
					<textarea name="content" id="content" resize="none" placeholder="Treść"></textarea>
					<InputImage />
				</div>
				<div className="button">
					<button>Wyślij</button>
					<ButtonImage />
				</div>
			</form>
		</StyledSection>
	)
}

export default ContactPage;

const StyledSection = styled.section`
	width: 100%;
  	max-width: 1400px;
	min-height: 50vh;
  	margin: 100px auto;
	display: flex;
	justify-content: space-between;
	padding-top: 60px;
	
	@media only screen and (max-width: 1600px) {
        padding: 8rem 8rem;
    }
    @media only screen and (max-width: 1200px) {
        padding: 6rem 4rem;
    }
    @media only screen and (max-width: 961px) {
        padding: 6rem 4rem;
		flex-direction: column;
		margin: 50px auto 20px;
    }
	 & > * {
		 width: 50%;
	 }
	.button {
		width: 100%;
		max-width: 250px;
		align-self: flex-end;
		@media only screen and (max-width: 500px) {
			max-width: 200px;
		}
		button {
			width: 100%;
		}
		svg {
			width: 100%;
			position: absolute;
			left: 0;
			bottom: 0;
			height: auto;
		}
	}
	form {
		div {
			position: relative;
			svg {
				width: 100%;
				position: absolute;
				bottom: -2px;
				left: 0;
				width: 100%;
			}
		}
		width: 50%;
		display: flex;
		flex-direction: column;
		@media only screen and (max-width: 961px) {
			width: 100%;
			max-width: 600px;
		}
		input, button {
			height: 60px;
			@media only screen and (max-width: 500px) {
				height: 40px;
			}
		}
		input, textarea {
			display: block;
			width: 100%;
			resize: none;
			/* margin-bottom: 25px; */
		}
		textarea {
			flex-grow: 1;
			padding: 1rem 2rem
		}
		input, textarea, button {
			color: white;
			background-color: ${({ theme }) => theme.colors.secondary};
			border: 5px solid ${({ theme }) => theme.colors.black};
			@media only screen and (max-width: 500px) {
				border-width: 4px;
			}
		}
		input, textarea, button {
			margin-top: 20px;
			font-weight: ${({ theme }) => theme.font.bold};
            font-size: ${({ theme }) => theme.font.s};
            letter-spacing: .2px;
			@media only screen and (max-width: 500px) {
				margin-top: 10px;
			}
		}
		button {
			cursor: pointer;
			font-weight: ${({ theme }) => theme.font.bold};
            font-size: ${({ theme }) => theme.font.s};
            letter-spacing: .2px;
		}
		input {
			padding: 0 2rem;
		}
	}
	.textarea {
		display: flex;
		flex-grow: 1;
		min-height: 200px;
	}
	.sideWrapper {
		margin-right: 100px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		@media only screen and (max-width: 768px) {
			width: 100%;
		}
		h1 {
			font-weight: ${({ theme }) => theme.font.bold};
            font-size: ${({ theme }) => theme.font.xl};
			color: ${({ theme }) => theme.colors.primary};
            letter-spacing: .2px;
			@media only screen and (max-width: 1400px) {
				font-size: ${({ theme }) => theme.font.l};
			}
			@media only screen and (max-width: 820px) {
				font-size: 3.5rem;
			}
			@media only screen and (max-width: 400px) {
				font-size: ${({ theme }) => theme.font.m};
			}
		}
		.image {
			@media only screen and (max-width: 961px) {
				display: none;
			}
			@media only screen and (max-width: 600px)  {
				display: block;
				margin: 4rem 0;
			}
			svg {
				width: 100%;
				opacity: 0;
				height: auto;
			}
		}
	}
`;