import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => ( <>
    <Section row nopadding>
    <LeftSection >
    < SectionTitle main center > Welcome To < br / >
    My Personal Portfolio </SectionTitle> 
    <SectionText >My name is Inderpreet Singh and i am a full Stack Web developer.My Aim is to Improve my skills and abilities to next level and builds awesome Web Sites. </SectionText>
     <Button onClick = { props.handleClick } > Learn More </Button> 
     </LeftSection >
     </Section> 
     </ >
);

export default Hero;