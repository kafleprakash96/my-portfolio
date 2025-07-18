import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Custom components
import SocialNetworkRowStack from "@/components/SocialNetworkRowStack";
import { scrollToSection } from "./SmoothScroll";

//Ícones
import { KeyboardArrowUp } from "@styled-icons/material-outlined/KeyboardArrowUp";

const FooterContainer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	margin-top: 60px;

	#grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 20px;
		grid-row-gap: 0px;
		transition: all 0.3s ease;
		width: 60%;
		text-align: center;

		@media (max-width: 1200px) {
			width: 80%;
		}

		@media (max-width: 800px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 601px) {
			width: 100%;
			grid-template-columns: repeat(1, 1fr);
		}
	}
`;

const Divider = styled.div`
	width: 100%;
	border-top: 1px solid ${(props) => props.theme.colors.backgroundSecondary};
	margin-top: 20px;
`;

const SectionFooterMenu = styled.div`
	display: flex;
	align-content: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: 5px;
`;

const FooterTextTitle = styled.h4`
	font-weight: 800;
	color: ${(props) => props.theme.colors.branding};
`;

const FooterText = styled.span`
	position: relative;
	font-weight: 400;
	font-size: 14px;
	color: ${(props) => props.theme.colors.subtitle};
	transition: all 0.3s ease;
	margin-top: 3px;
	margin-bottom: 3px;
	text-transform: capitalize;
	

	&:hover {
		cursor: pointer;
	}

	&::before,
	&::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		height: 2px;
		background-color: ${(props) => props.theme.colors.branding};
		transform: scaleX(0);
		transition: transform 0.5s ease;
	}

	&::before {
		top: 0;
		transform-origin: center right;
	}

	&:hover::before {
		transform-origin: center left;
		transform: scaleX(1);
	}

	&::after {
		bottom: 0;
		transform-origin: center left;
	}

	&:hover::after {
		transform-origin: center right;
		transform: scaleX(1);
	}
`;

const FooterTextExternalLink = styled.a`
	position: relative;
	font-weight: 400;
	font-size: 14px;
	color: ${(props) => props.theme.colors.subtitle};
	transition: all 0.3s ease;
	margin-top: 3px;
	margin-bottom: 3px;
	text-decoration: none;

	&::before,
	&::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		height: 2px;
		background-color: ${(props) => props.theme.colors.branding};
		transform: scaleX(0);
		transition: transform 0.5s ease;
	}

	&::before {
		top: 0;
		transform-origin: center right;
	}

	&:hover::before {
		transform-origin: center left;
		transform: scaleX(1);
	}

	&::after {
		bottom: 0;
		transform-origin: center left;
	}

	&:hover::after {
		transform-origin: center right;
		transform: scaleX(1);
	}
`;

const TextBuildProject = styled.h4`
	font-weight: 800;
	color: ${(props) => props.theme.colors.branding};
	font-size: 14px;

	span {
		font-weight: 400;
	}
`;

const ContainerBuildCopyright = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
	transition: all 0.3s ease;
	width: 60%;
	margin-top: 20px;
	margin-bottom: 20px;

	.build-and-button-top {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (max-width: 1200px) {
		width: 80%;
	}

	@media (max-width: 601px) {
		flex-direction: column;
		margin-bottom: 110px;
	}

	@media (max-width: 425px) {
		width: 100%;
	}
`;

const ButtonUpToTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	width: 32px;
	height: 32px;
	bottom: 20px;
	right: 20px;
	z-index: 1;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	transition: all 0.3s ease;
	margin-left: 15px;

	&:hover {
		cursor: pointer;
		transform: translateY(-7px);
	}

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 24px;
		height: 24px;
	}
`;

export default function FooterPage(props) {
	const { language } = useContext(SettingsContext);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<FooterContainer>
			<div id="grid">
				<Fade triggerOnce>
					<SectionFooterMenu>
						<FooterTextTitle>{language.footer.labelNavigation.title}</FooterTextTitle>
						<a style={{ textDecoration: "none" }} href="#section-home" onClick={scrollToSection}>
							<FooterText>{language.footer.labelNavigation.labelHome}</FooterText>
						</a>
						<a style={{ textDecoration: "none" }} href="#section-services" onClick={scrollToSection}>
							<FooterText>{language.footer.labelNavigation.labelServices}</FooterText>
						</a>
						<a style={{ textDecoration: "none" }} href="#section-a-propos" onClick={scrollToSection}>
							<FooterText>{language.footer.labelNavigation.labelAboutMe}</FooterText>
						</a>
						<a style={{ textDecoration: "none" }} href="#section-portifolio" onClick={scrollToSection}>
							<FooterText>{language.footer.labelNavigation.labelPortifolio}</FooterText>
						</a>
						<a style={{ textDecoration: "none" }} href="#section-experiencia" onClick={scrollToSection}>
							<FooterText>{language.footer.labelNavigation.labelExperience}</FooterText>
						</a>
					</SectionFooterMenu>
				</Fade>

				<Fade triggerOnce delay={200}>
					<SectionFooterMenu>
						<FooterTextTitle>Contact</FooterTextTitle>
						<FooterTextExternalLink href="mailto:kafleprakash96@gmail.com">
							Email
						</FooterTextExternalLink>
						<FooterTextExternalLink href="tel:+14692628352">
							Phone
						</FooterTextExternalLink>
						<FooterTextExternalLink href="https://www.linkedin.com/in/prakash-kafle/" target="_blank">
							LinkedIn
						</FooterTextExternalLink>
					</SectionFooterMenu>
				</Fade>

				<Fade triggerOnce delay={400}>
					<SectionFooterMenu>
						<FooterTextTitle>Education</FooterTextTitle>
						<FooterTextExternalLink href="https://www.uta.edu/" target="_blank">
							University of Texas at Arlington
						</FooterTextExternalLink>
						<FooterTextExternalLink href="https://www.ecu.edu/" target="_blank">
							East Central University
						</FooterTextExternalLink>
						<FooterTextExternalLink href="https://www.dcccd.edu/northlake/" target="_blank">
							North Lake College
						</FooterTextExternalLink>
					</SectionFooterMenu>
				</Fade>

				<Fade triggerOnce delay={600}>
					<SectionFooterMenu>
						<FooterTextTitle>Core Technologies</FooterTextTitle>

						<FooterTextExternalLink href="https://spring.io/projects/spring-boot" target="_blank">
							Spring Boot
						</FooterTextExternalLink>

						<FooterTextExternalLink href="https://angular.io/" target="_blank">
							Angular
						</FooterTextExternalLink>

						<FooterTextExternalLink href="https://www.java.com/" target="_blank">
							Java
						</FooterTextExternalLink>

						<FooterTextExternalLink href="https://aws.amazon.com/" target="_blank">
							AWS
						</FooterTextExternalLink>
					</SectionFooterMenu>
				</Fade>
			</div>
			<Divider />
			<ContainerBuildCopyright>
				<SocialNetworkRowStack />
				<div className="build-and-button-top">
					<TextBuildProject>
						© 2025 Prakash Kafle
					</TextBuildProject>
					<ButtonUpToTop onClick={goToTop}>
						<KeyboardArrowUp />
					</ButtonUpToTop>
				</div>
			</ContainerBuildCopyright>
		</FooterContainer>
	);
}