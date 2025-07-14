import React, { useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";

//Context
import { SettingsContext } from "@/context/SettingsContext";

//Styled-components
import { TitleSection, ContainerTitleSection, BodyText } from "@/styles/ui";

//Icons - using only confirmed available ones
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { Java } from "@styled-icons/fa-brands/Java";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Angular } from "@styled-icons/simple-icons/Angular";
import { Spring } from "@styled-icons/simple-icons/Spring";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Live } from "@styled-icons/fluentui-system-filled/Live";
import { JournalBookmark } from "@styled-icons/bootstrap/JournalBookmark";
import { Django } from "@styled-icons/boxicons-logos/Django";
import { Sqlite } from "@styled-icons/simple-icons/Sqlite";
import { Bootstrap } from "@styled-icons/boxicons-logos/Bootstrap";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Postgresql } from "@styled-icons/simple-icons/Postgresql";
import { Api } from "@styled-icons/material-rounded/Api";
import { CloudUpload } from "@styled-icons/material-rounded/CloudUpload";
import { Docker } from "@styled-icons/fa-brands/Docker";
import { CodeBlock } from "@styled-icons/boxicons-regular/CodeBlock";
import { ShoppingCart } from "@styled-icons/heroicons-solid/ShoppingCart";
import { ChatBubbleLeftRight } from "@styled-icons/heroicons-solid/ChatBubbleLeftRight";
import { DocumentText } from "@styled-icons/heroicons-solid/DocumentText";
import { Heart } from "@styled-icons/heroicons-solid/Heart";

//Custom components
import Tooltip from "@/components/Tooltip";

const ContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 60%;
	gap: 20px;
	transition: all 0.3s ease;

	@media (max-width: 1600px) {
		width: 85%;
	}

	@media (max-width: 900px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const WrapperProjectCard = styled.div`
	position: relative;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column;
	min-height: 270px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	border-radius: 4px;
	padding: 20px;
	transition: all 0.3s ease;
	border: 1px solid ${(props) => props.theme.colors.backgroundPage};

	.created_at {
		color: ${(props) => props.theme.colors.inactiveTitle};
		font-size: 12px;
		position: absolute;
		bottom: 10px;
	}

	:hover {
		border: 1px solid ${(props) => props.theme.colors.branding};
		transform: scale(1.01);
		box-shadow: 0px 0px 20px 0px ${(props) => props.theme.colors.branding}5E;
	}

	.title-body {
		margin-top: 50px;

		.divider {
			margin-bottom: 20px;
		}
	}
`;

const WrapperTechStack = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	height: 34px;
	width: 100%;
	margin-bottom: 10px;

	> div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
	}

	svg {
		width: 22px;
		height: 22px;
		margin-right: 3px;
		color: ${(props) => props.theme.colors.inactiveTitle};
		transition: all 0.3s ease;
	}

	a {
		svg {
			&:hover {
				cursor: pointer;
				color: ${(props) => props.theme.colors.branding};
			}
		}
	}
`;

const WrapperTextChip = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	position: absolute;
	top: 10px;
	right: 10px;

	div {
		span {
			color: ${(props) => props.theme.colors.inactiveTitle};
			font-size: 12px;
			font-weight: 800;
			padding: 2px 8px 2px 8px;
			border-radius: 4px;
			margin-right: 3px;
			margin-left: 3px;
		}

		@media (max-width: 601px) {
			margin-bottom: 10px;
			font-size: 10px;
		}
	}

	@media (max-width: 601px) {
		display: none;
	}
`;

const ChipTechOptions = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-top: 20px;
	margin-bottom: 20px;
	width: 60%;

	svg {
		min-width: 28px;
		min-height: 28px;
		width: 28px;
		height: 28px;
		color: ${(props) => props.theme.colors.branding};
		margin-right: 10px;

		@media (max-width: 601px) {
			min-width: 18px;
			min-height: 18px;
			width: 18px;
			height: 18px;
		}
	}

	@media (max-width: 1600px) {
		width: 85%;
	}

	@media (max-width: 601px) {
		display: none;
	}
`;

const WrapperButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	position: absolute;
	right: 10px;
	bottom: 10px;
	transition: all 0.3s ease;
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		padding: 5px;
		color: ${(props) => props.theme.colors.branding};
		border-radius: 4px;
	}
`;

const Chip = styled.span`
	color: ${(props) => (props.active == true ? props.theme.colors.backgroundSecondary : props.theme.colors.inactiveTitle)};
	background-color: ${(props) => (props.active == true ? props.theme.colors.branding : props.theme.colors.backgroundSecondary)};
	border: 1px solid ${(props) => (props.active == true ? props.theme.colors.branding : props.theme.colors.inactiveTitle)};
	padding: 2px 7px 3px 7px;
	margin: 3px;
	border-radius: 4px;
	font-weight: 700;
	transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
	}

	@media (max-width: 601px) {
		font-weight: 700;
		font-size: 10px;
	}
`;

export const TitleSpan = styled.h3`
	z-index: 2;
	position: absolute;
	top: 0;
	left: 0;
	padding: 5px 15px 5px 10px;
	color: ${(props) => props.theme.colors.backgroundPage};
	background-color: ${(props) => props.theme.colors.branding};
	font-size: ${(props) => props.theme.fontSizes.md};
	border-radius: 4px 0 18px 0;

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}

	@media (max-width: 600px) {
		font-size: ${(props) => props.theme.fontSizes.xs};
	}
`;

const SectionPortifolio = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
	padding-top: 60px;
`;

export default function Portifolio() {
	const { language } = useContext(SettingsContext);
	const [stack, setStack] = useState("ALL");

	const projects = [
		{
			id: 1,
			name: "Enterprise PDF Data Extraction System",
			description: "Developed comprehensive document processing microservice using Spring Boot for extracting structured data from PDF documents and converting them to JSON format with byte array manipulation capabilities. Implemented RESTful APIs and utilized Apache PDFBox library.",
			category: "Enterprise Applications",
			date: "2024-01-01",
			technologies: ["java", "spring-boot", "rest-api", "maven", "junit", "pdf-processing"],
			githubUrl: "https://github.com/kafleprakash96/pdf-extractor",
			liveUrl: null,
			featured: true
		},
		{
			id: 2,
			name: "Real-Time Chat Application",
			description: "Architected scalable real-time chat application using microservices architecture with Spring Boot backend and Angular frontend. Implemented WebSocket connections for instant communication and Apache Kafka for distributed messaging between microservices.",
			category: "Microservices",
			date: "2023-12-01",
			technologies: ["spring-boot", "angular", "kafka", "websocket", "mysql", "docker", "kubernetes"],
			githubUrl: "https://github.com/kafleprakash96/boot-angular-chat-web",
			liveUrl: "https://prakash-chat-demo.herokuapp.com",
			featured: true
		},
		{
			id: 3,
			name: "Full-Stack Blog Management Platform",
			description: "Built comprehensive blog management platform with Angular frontend and Spring Boot backend, featuring complete CRUD operations for blog posts, comments, and user management. Implemented JWT authentication and role-based access control.",
			category: "Full Stack Development",
			date: "2023-08-01",
			technologies: ["angular", "spring-boot", "spring-data-jpa", "mysql", "rest-api", "spring-security", "bootstrap"],
			githubUrl: "https://github.com/kafleprakash96/rest-api-blog",
			liveUrl: "https://prakash-blog-platform.netlify.app",
			featured: true
		},
		{
			id: 4,
			name: "E-Commerce Platform",
			description: "Developed full-featured e-commerce platform with product catalog, shopping cart, order management, and payment processing capabilities. Integrated PayPal payment gateway and implemented advanced features like wishlist, product reviews, and recommendation system.",
			category: "Full Stack Development",
			date: "2023-06-01",
			technologies: ["spring-boot", "angular", "mysql", "paypal-integration", "spring-security", "docker"],
			githubUrl: "https://github.com/kafleprakash96/fullstack-ecommerce-springboot",
			liveUrl: "https://prakash-ecommerce-demo.herokuapp.com",
			featured: true
		},
		{
			id: 5,
			name: "Custom Container Orchestration Project",
			description: "Designed and implemented custom Docker containers from scratch, creating optimized Dockerfiles with multi-stage builds. Created custom Kubernetes deployment configurations and implemented automated CI/CD pipeline for container deployment.",
			category: "DevOps & Cloud",
			date: "2023-03-01",
			technologies: ["docker", "kubernetes", "yaml", "container-registry", "cicd"],
			githubUrl: "https://github.com/prakash-kafle/container-orchestration-k8s",
			liveUrl: null,
			featured: false
		},
		{
			id: 6,
			name: "Django Pet Health Management System",
			description: "Developed comprehensive pet management system using Django framework for tracking pet health records and vaccination schedules. Created Django models, admin interface, and RESTful APIs for mobile app integration.",
			category: "Web Development",
			date: "2022-10-01",
			technologies: ["python", "django", "sqlite", "django-rest-framework", "html", "css", "bootstrap"],
			githubUrl: "https://github.com/kafleprakash96/Django-PetManagement",
			liveUrl: "https://prakash-pet-health.herokuapp.com",
			featured: false
		}
	];

	// Technology icon mapping using available icons
	const techIcons = {
		"java": { name: "Java", icon: <Java /> },
		"spring-boot": { name: "Spring Boot", icon: <Spring /> },
		"angular": { name: "Angular", icon: <Angular /> },
		"javascript": { name: "JavaScript", icon: <Javascript /> },
		"python": { name: "Python", icon: <Python /> },
		"html": { name: "HTML5", icon: <Html5 /> },
		"css": { name: "CSS3", icon: <Css3 /> },
		"django": { name: "Django", icon: <Django /> },
		"sqlite": { name: "SQLite", icon: <Sqlite /> },
		"bootstrap": { name: "Bootstrap", icon: <Bootstrap /> },
		"mysql": { name: "MySQL", icon: <Mysql /> },
		"postgresql": { name: "PostgreSQL", icon: <Postgresql /> },
		"rest-api": { name: "REST API", icon: <Api /> },
		"docker": { name: "Docker", icon: <Docker /> },
		"kubernetes": { name: "Kubernetes", icon: <CloudUpload /> },
		"maven": { name: "Maven", icon: <CodeBlock /> },
		"junit": { name: "JUnit", icon: <JournalBookmark /> },
		"kafka": { name: "Apache Kafka", icon: <Api /> },
		"websocket": { name: "WebSocket", icon: <ChatBubbleLeftRight /> },
		"spring-data-jpa": { name: "Spring Data JPA", icon: <Spring /> },
		"spring-security": { name: "Spring Security", icon: <Spring /> },
		"paypal-integration": { name: "PayPal Integration", icon: <ShoppingCart /> },
		"pdf-processing": { name: "PDF Processing", icon: <DocumentText /> },
		"yaml": { name: "YAML", icon: <CodeBlock /> },
		"container-registry": { name: "Container Registry", icon: <CloudUpload /> },
		"cicd": { name: "CI/CD", icon: <CodeBlock /> },
		"linux": { name: "Linux", icon: <CodeBlock /> },
		"django-rest-framework": { name: "Django REST Framework", icon: <Django /> },
		"default": { name: "Project", icon: <JournalBookmark /> }
	};

	// Filter functionality
	const categories = ["ALL", "Enterprise Applications", "Microservices", "Full Stack Development", "DevOps & Cloud", "Web Development"];

	const filteredProjects = stack === "ALL"
		? projects
		: projects.filter(project => project.category === stack);

	function handleFilter(category) {
		setStack(category);
	}

	function formatDate(dateString) {
		const date = new Date(dateString);
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const year = date.getFullYear();
		return `${day}/${month}/${year}`;
	}

	return (
		<SectionPortifolio id="section-portifolio">
			<ContainerTitleSection>
				<TitleSection>{language.portifolioPage.title}</TitleSection>
			</ContainerTitleSection>

			{/* Filter Chips */}
			<ChipTechOptions>
				{categories.map((category) => (
					<Chip
						key={category}
						onClick={() => handleFilter(category)}
						active={stack === category}>
						{category}
					</Chip>
				))}
			</ChipTechOptions>

			<ContainerGrid>
				{filteredProjects.map((project, index) => (
					<Fade triggerOnce key={project.id} delay={index * 100}>
						<WrapperProjectCard>
							<WrapperTextChip>
								<div>
									<span>{project.category}</span>
								</div>
							</WrapperTextChip>

							<TitleSpan>{project.name}</TitleSpan>

							<div className="title-body">
								<BodyText>{project.description}</BodyText>
							</div>

							<WrapperTechStack>
								<div>
									{project.technologies.map((tech, techIndex) => (
										<div key={techIndex}>
											<Tooltip toolTipText={techIcons[tech]?.name || tech}>
												{techIcons[tech]?.icon || techIcons.default.icon}
											</Tooltip>
										</div>
									))}
								</div>

								<WrapperButtons>
									{project.liveUrl && (
										<a href={project.liveUrl} target="_blank" rel="noreferrer">
											<Live />
										</a>
									)}
									{project.githubUrl && (
										<a href={project.githubUrl} target="_blank" rel="noreferrer">
											<GithubOutline />
										</a>
									)}
								</WrapperButtons>
							</WrapperTechStack>

							<span className="created_at">
								{language.portifolioPage.createdLabel}: {formatDate(project.date)}
							</span>
						</WrapperProjectCard>
					</Fade>
				))}
			</ContainerGrid>
		</SectionPortifolio>
	);
}