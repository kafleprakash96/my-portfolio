import React, { useContext } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//ícones
import { School } from "@styled-icons/ionicons-outline/School";
import { Work } from "@styled-icons/material-rounded/Work";

const SchoolIcon = styled(School)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const WorkIcon = styled(Work)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const TimelineContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
`;

export const TitleContentTimeline = styled.h3`
	.vertical-timeline-element-title {
		color: ${(props) => props.theme.colors.branding};
	}
	@media (max-width: 1600px) {
		font-size: ${(props) => props.theme.fontSizes.xl};
	}

	@media (max-width: 1400px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}
`;

const BoldText = styled.h4`
	color: ${(props) => props.theme.colors.contrastText};
	font-weight: 800;
	margin-top: 2px;
	margin-bottom: 2px;
	span {
		font-weight: 400;
	}
`;

const DescriptionText = styled.p`
	color: ${(props) => props.theme.colors.body};
	font-weight: 400;
	margin-top: 5px;
	margin-bottom: 5px;
	font-size: 14px;
`;

const TechStackText = styled.div`
	color: ${(props) => props.theme.colors.branding};
	font-weight: 600;
	margin-top: 10px;
	margin-bottom: 5px;
	font-size: 13px;
	padding: 4px 8px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	border-radius: 4px;
	display: inline-block;
`;

export default function TimelineExperienciaFormacao(props) {
	const { language } = useContext(SettingsContext);
	const theme = useTheme();

	return (
		<VerticalTimeline lineColor={theme.colors.branding}>
			{/* Current Position */}
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>April 2023 - Present</h3>
					<BoldText>
						Company: <span>Elevance Health - Indianapolis, IN</span>
					</BoldText>
					<BoldText>
						Position: <span>Senior Java Developer</span>
					</BoldText>
					<DescriptionText>• Leading full-stack development using Java 11/17, Spring Boot, and Angular 11/18 for modern healthcare enterprise applications with RESTful APIs.</DescriptionText>
					<DescriptionText>• Developing and maintaining scalable microservices architecture using Spring Boot and Quarkus frameworks for high-performance healthcare systems.</DescriptionText>
					<DescriptionText>• Implementing cloud-native solutions with AWS (EC2, S3, RDS, Lambda) and Azure (AKS, Functions) using Docker and Kubernetes orchestration.</DescriptionText>
					<DescriptionText>• Ensuring code quality and security compliance through comprehensive testing with JUnit, SonarQube, and Checkmarx scanning.</DescriptionText>
					<TechStackText>Java 11/17, Spring Boot, Quarkus, Angular 11/18, AWS, Azure, Docker, Kubernetes, Maven, RESTful APIs, Microservices</TechStackText>
					</TimelineContent>
			</VerticalTimelineElement>

			{/* Education - Bachelor's Degree */}
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<SchoolIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>January 2020 - August 2022</h3>
					<BoldText>
						Institution: <span>University of Texas at Arlington, Arlington, TX</span>
					</BoldText>
					<BoldText>
						Degree: <span>Bachelor's in Computer Science</span>
					</BoldText>
					<DescriptionText>Comprehensive computer science education with focus on software development, algorithms, and data structures.</DescriptionText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* Education - Associate Degree */}
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<SchoolIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>January 2017 - December 2018</h3>
					<BoldText>
						Institution: <span>North Lake College, Irving, TX</span>
					</BoldText>
					<BoldText>
						Degree: <span>Associate Degree in Computer Science</span>
					</BoldText>
					<DescriptionText>Foundation in computer science principles, programming fundamentals, and software development methodologies.</DescriptionText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* Education - Initial Studies */}
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<SchoolIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>August 2016 - December 2016</h3>
					<BoldText>
						Institution: <span>East Central University, Ada, Oklahoma</span>
					</BoldText>
					<DescriptionText>Initial higher education studies providing foundational knowledge in computer science and technology.</DescriptionText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* Technical Projects Section */}
			<VerticalTimelineElement
				className="vertical-timeline-element--project"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>Key Projects</h3>
					<BoldText>
						Enterprise PDF Data Extraction System
					</BoldText>
					<DescriptionText>• Developed comprehensive document processing microservice using Spring Boot for extracting structured data from PDF documents and converting them to JSON format.</DescriptionText>
					<DescriptionText>• Implemented RESTful APIs and utilized Apache PDFBox library for PDF parsing with custom algorithms for data extraction.</DescriptionText>
					<TechStackText>Spring Boot, Java 17, Apache PDFBox, RESTful APIs, Maven, JUnit</TechStackText>
					
					<BoldText style={{ marginTop: "15px" }}>
						Real-Time Chat Application
					</BoldText>
					<DescriptionText>• Architected scalable real-time chat application using microservices architecture with Spring Boot backend and Angular frontend.</DescriptionText>
					<DescriptionText>• Implemented WebSocket connections for instant communication and Apache Kafka for distributed messaging between microservices.</DescriptionText>
					<TechStackText>Spring Boot, Angular 18, Apache Kafka, WebSocket, MySQL, Docker, Kubernetes</TechStackText>

					<BoldText style={{ marginTop: "15px" }}>
						E-Commerce Platform
					</BoldText>
					<DescriptionText>• Developed full-featured e-commerce platform with product catalog, shopping cart, order management, and payment processing capabilities.</DescriptionText>
					<DescriptionText>• Integrated PayPal payment gateway and implemented advanced features like wishlist, product reviews, and recommendation system.</DescriptionText>
					<TechStackText>Spring Boot, Angular 18, MySQL, PayPal Integration, Spring Security, Docker</TechStackText>
				</TimelineContent>
			</VerticalTimelineElement>
		</VerticalTimeline>
	);
}