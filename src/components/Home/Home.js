import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from './style';
import video1 from './hero.mp4'
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './home.Style';

const Hero = () => {
	return (
		<HeroSection>

			<HeroVideo src={video1} loop autoPlay muted />
			<Container>
				<MainHeading>La mejor tienda de tecnologia</MainHeading>
				<HeroText>
				Tecnología avanzada para tus necesidades · Innovación de hoy para el éxito del mañana 
				</HeroText>
				<ButtonWrapper>
					<Link to="/products">
						<Button>Ver productos y precios!</Button>
					</Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;