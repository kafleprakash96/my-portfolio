import React, { useContext } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

//Styled icons
import { CodeBlock } from "@styled-icons/boxicons-regular/CodeBlock";
import { Api } from "@styled-icons/material-rounded/Api";
import { CloudUpload } from "@styled-icons/material-rounded/CloudUpload";
import { Architecture } from "@styled-icons/material-rounded/Architecture";
import { Speed } from "@styled-icons/material-rounded/Speed";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

const CardService = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 290px;
	padding: 20px;
	transition: all 0.3s ease;
	border: 3px solid transparent;

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 70px;
		height: 70px;
		margin-bottom: 10px;
	}

	h3 {
		color: ${(props) => props.theme.colors.branding};
		font-size: 20px;
		font-weight: 900;
		margin-top: 5px;
		margin-bottom: 20px;
		line-height: 1.2;
		text-align: center;
		hyphens: none;
		word-break: keep-all;

		@media (max-width: 900px) {
			font-size: 16px;
		}
	}

	p {
		font-size: 16px;
		color: ${(props) => props.theme.colors.body};
		font-weight: 400;
		text-align: center;
		word-wrap: break-word;

		@media (max-width: 900px) {
			font-size: 14px;
		}
	}

	@media (max-width: 425px) {
		width: 100%;
	}
`;

const ContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	transition: all 0.3s ease;
	gap: 20px;
	justify-items: center;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
		width: 85%;
	}

	@media (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
		width: 100%;
	}
`;

const SectionServices = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	padding-top: 60px;
`;

export default function _ServicesOffer() {
	const { language } = useContext(SettingsContext);

	return (
		<SectionServices id="section-services">
			<ContainerGrid>
				<Fade triggerOnce delay={200}>
					<CardService>
						<CodeBlock />
						<h3>{language.servicesOffer.cards.backend.title}</h3>
						<p>{language.servicesOffer.cards.backend.contentText}</p>
					</CardService>
				</Fade>
				<Fade triggerOnce delay={400}>
					<CardService>
						<Api />
						<h3>{language.servicesOffer.cards.frontend.title}</h3>
						<p>{language.servicesOffer.cards.frontend.contentText}</p>
					</CardService>
				</Fade>
				<Fade triggerOnce delay={600}>
					<CardService>
						<CloudUpload />
						<h3>{language.servicesOffer.cards.cloud.title}</h3>
						<p>{language.servicesOffer.cards.cloud.contentText}</p>
					</CardService>
				</Fade>
				<Fade triggerOnce delay={800}>
					<CardService>
						<Architecture />
						<h3>{language.servicesOffer.cards.microservices.title}</h3>
						<p>{language.servicesOffer.cards.microservices.contentText}</p>
					</CardService>
				</Fade>
				<Fade triggerOnce delay={1000}>
					<CardService>
						<Speed />
						<h3>{language.servicesOffer.cards.devops.title}</h3>
						<p>{language.servicesOffer.cards.devops.contentText}</p>
					</CardService>
				</Fade>
			</ContainerGrid>
		</SectionServices>
	);
}