import styled from "styled-components";

import { MailSend } from "@styled-icons/boxicons-regular/MailSend";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "@styled-icons/bootstrap/Github";
import { Phone } from "@styled-icons/heroicons-solid/Phone";

const SocialMediaContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;

	@media (max-width: 600px) {
		width: 100%;
		margin-bottom: 20px;
	}
`;

const ButtonSocialMediaIcon = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 5px;
	width: 32px;
	height: 32px;
	transition: all 0.3s ease;
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};

	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}

	&:active {
		opacity: 0.5;
	}

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 24px;
		height: 24px;
		transition: all 0.3s ease;

		&:hover {
			color: ${(props) => props.theme.colors.branding};
		}
	}

	@media (max-width: 600px) {
		margin-left: 3px;
		margin-right: 3px;
	}
`;

export default function SocialNetworkRowStack() {
	return (
		<SocialMediaContainer>

			<ButtonSocialMediaIcon href="https://github.com/kafleprakash96" target="_blank">
				<Github />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon href="mailto:kafleprakash96@gmail.com" target="_blank">
				<MailSend />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon href="https://www.linkedin.com/in/prakash-kafle/" target="_blank" data-splitbee-event="linkedin-access">
				<LinkedinSquare />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon href="tel:+14692628352" target="_blank">
				<Phone />
			</ButtonSocialMediaIcon>

		</SocialMediaContainer>
	);
}