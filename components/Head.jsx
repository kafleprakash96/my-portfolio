import Head from "next/head";
import { useTheme } from "styled-components";

export default function HeadTag(props) {
	const theme = useTheme();
	return (
		<Head>
			<title>Prakash Kafle | {props.title}</title>
			<meta name="theme-color" content={theme.colors.branding} /> {/* <!-- Chrome, Firefox OS and Opera -->*/}
			<meta name="msapplication-navbutton-color" content={theme.colors.branding} /> {/* <!-- Windows Phone -->*/}
			<meta name="apple-mobile-web-app-status-bar-style" content={theme.colors.branding} /> {/*<!-- iOS Safari -->*/}
			<meta name="description" content={props.metaDescription || "Senior Java Developer with 5+ years of experience in Spring Boot, Angular, and cloud technologies. Specialized in microservices architecture, AWS, and enterprise application development at Elevance Health."} />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
			<meta name="keywords" content={props.keywords || "java developer, spring boot, angular, microservices, aws, azure, enterprise applications, full stack developer, software engineer, java 17, spring framework, rest apis, cloud native"} />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest"></link>
		</Head>
	);
}