import React from "react";
import styled from "styled-components";

//Icons - using only confirmed available icons
import { Postgresql } from "@styled-icons/simple-icons/Postgresql";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Java } from "@styled-icons/fa-brands/Java";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Git } from "@styled-icons/boxicons-logos/Git";
import { Linux } from "@styled-icons/fa-brands/Linux";
import { Windows } from "@styled-icons/boxicons-logos/Windows";
import { Angular } from "@styled-icons/simple-icons/Angular";
import { Spring } from "@styled-icons/simple-icons/Spring";
import { Bootstrap } from "@styled-icons/boxicons-logos/Bootstrap";
import { Visualstudiocode } from "@styled-icons/simple-icons/Visualstudiocode";
import { CodeBlock } from "@styled-icons/boxicons-regular/CodeBlock";
import { Api } from "@styled-icons/material-rounded/Api";
import { Oracle } from "@styled-icons/simple-icons/Oracle";
import { CloudUpload } from "@styled-icons/material-rounded/CloudUpload";
import { Docker } from "@styled-icons/fa-brands/Docker";
import { Aws } from "@styled-icons/fa-brands/Aws";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Django } from "@styled-icons/boxicons-logos/Django";
// import { Database } from "@styled-icons/heroicons-solid/Database";
import { Cloud } from "@styled-icons/heroicons-solid/Cloud";
import { Terminal } from "@styled-icons/boxicons-regular/Terminal";
// import { Code } from "@styled-icons/heroicons-solid/Code";
import { Cog } from "@styled-icons/heroicons-solid/Cog";
import { Server } from "@styled-icons/heroicons-solid/Server";
// import { Globe } from "@styled-icons/heroicons-solid/Globe";

const TechGrid = styled.div`
	margin-top: 60px;
	margin-bottom: 40px;
	width: 100%;
	padding: 40px 0;

	svg {
		width: 58px;
		height: 58px;
		color: ${(props) => props.theme.colors.title};
		transition: color 0.4s ease, transform 0.4s ease;
		opacity: 0.8;
	}

	svg:hover {
		color: ${(props) => props.theme.colors.branding};
		opacity: 1;
		transform: scale(1.1);
	}

	.slider {
		height: 120px;
		margin: auto;
		position: relative;
		width: 100%;
		display: grid;
		place-items: center;
		overflow: hidden;
	}

	.slide-track {
		display: flex;
		width: calc(150px * 60);
		animation: scrollRightToLeft 65s linear infinite;
		gap: 20px;
	}

	.slide-track:hover {
		animation-play-state: paused;
	}

	.slide:hover {
		animation-play-state: paused;
	}

	@keyframes scrollRightToLeft {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.slide {
		height: 80px;
		width: 150px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		cursor: pointer;
		padding: 10px;
		border-radius: 8px;
		transition: background-color 0.3s ease;
	}

	.slide:hover {
		background-color: ${(props) => props.theme.colors.branding}10;
	}

	.slider::before,
	.slider::after {
		background: linear-gradient(to right, 
			${(props) => props.theme.colors.backgroundPage} 0%, 
			${(props) => props.theme.colors.backgroundPage}00 100%);
		content: "";
		height: 100%;
		position: absolute;
		width: 80px;
		z-index: 2;
		pointer-events: none;
	}

	.slider::before {
		left: 0;
		top: 0;
	}

	.slider::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}
`;

export default function TechsGrid() {
	return (
		<TechGrid>
			<div className="slider">
				<div className="slide-track">
					{/* First set - all confirmed working technologies */}
					<div className="slide">
						<Java title="Java 11/17" />
					</div>
					<div className="slide">
						<Spring title="Spring Boot" />
					</div>
					<div className="slide">
						<Angular title="Angular" />
					</div>
					<div className="slide">
						<Javascript title="JavaScript" />
					</div>
					<div className="slide">
						<Python title="Python" />
					</div>
					<div className="slide">
						<Django title="Django" />
					</div>
					<div className="slide">
						<Html5 title="HTML5" />
					</div>
					<div className="slide">
						<Css3 title="CSS3" />
					</div>
					<div className="slide">
						<Bootstrap title="Bootstrap" />
					</div>
					<div className="slide">
						<Api title="REST APIs" />
					</div>
					<div className="slide">
						<CodeBlock title="Microservices" />
					</div>
					<div className="slide">
						<Postgresql title="PostgreSQL" />
					</div>
					<div className="slide">
						<Mysql title="MySQL" />
					</div>
					<div className="slide">
						<Oracle title="Oracle DB" />
					</div>
					{/* <div className="slide">
						<Database title="MongoDB" />
					</div>
					<div className="slide">
						<Database title="Redis" />
					</div> */}
					<div className="slide">
						<Aws title="AWS" />
					</div>
					<div className="slide">
						<CloudUpload title="Azure" />
					</div>
					<div className="slide">
						<Cloud title="Google Cloud" />
					</div>
					<div className="slide">
						<Docker title="Docker" />
					</div>
					<div className="slide">
						<Server title="Kubernetes" />
					</div>
					<div className="slide">
						<Git title="Git" />
					</div>
					<div className="slide">
						<Visualstudiocode title="IntelliJ IDEA" />
					</div>
					<div className="slide">
						<CodeBlock title="Maven" />
					</div>
					{/* <div className="slide">
						<Code title="JUnit" />
					</div> */}
					<div className="slide">
						<Terminal title="Terminal" />
					</div>
					<div className="slide">
						<Cog title="Jenkins" />
					</div>
					{/* <div className="slide">
						<Globe title="Postman" />
					</div> */}
					<div className="slide">
						<Linux title="Linux" />
					</div>
					<div className="slide">
						<Windows title="Windows" />
					</div>

					{/* Duplicate set for seamless infinite loop */}
					<div className="slide">
						<Java title="Java 11/17" />
					</div>
					<div className="slide">
						<Spring title="Spring Boot" />
					</div>
					<div className="slide">
						<Angular title="Angular" />
					</div>
					<div className="slide">
						<Javascript title="JavaScript" />
					</div>
					<div className="slide">
						<Python title="Python" />
					</div>
					<div className="slide">
						<Django title="Django" />
					</div>
					<div className="slide">
						<Html5 title="HTML5" />
					</div>
					<div className="slide">
						<Css3 title="CSS3" />
					</div>
					<div className="slide">
						<Bootstrap title="Bootstrap" />
					</div>
					<div className="slide">
						<Api title="REST APIs" />
					</div>
					<div className="slide">
						<CodeBlock title="Microservices" />
					</div>
					<div className="slide">
						<Postgresql title="PostgreSQL" />
					</div>
					<div className="slide">
						<Mysql title="MySQL" />
					</div>
					<div className="slide">
						<Oracle title="Oracle DB" />
					</div>
					{/* <div className="slide">
						<Database title="MongoDB" />
					</div>
					<div className="slide">
						<Database title="Redis" />
					</div> */}
					<div className="slide">
						<Aws title="AWS" />
					</div>
					<div className="slide">
						<CloudUpload title="Azure" />
					</div>
					<div className="slide">
						<Cloud title="Google Cloud" />
					</div>
					<div className="slide">
						<Docker title="Docker" />
					</div>
					<div className="slide">
						<Server title="Kubernetes" />
					</div>
					<div className="slide">
						<Git title="Git" />
					</div>
					<div className="slide">
						<Visualstudiocode title="IntelliJ IDEA" />
					</div>
					<div className="slide">
						<CodeBlock title="Maven" />
					</div>
					{/* <div className="slide">
						<Code title="JUnit" />
					</div> */}
					<div className="slide">
						<Terminal title="Terminal" />
					</div>
					<div className="slide">
						<Cog title="Jenkins" />
					</div>
					{/* <div className="slide">
						<Globe title="Postman" />
					</div> */}
					<div className="slide">
						<Linux title="Linux" />
					</div>
					<div className="slide">
						<Windows title="Windows" />
					</div>
				</div>
			</div>
		</TechGrid>
	);
}