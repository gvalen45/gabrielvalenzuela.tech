import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
        <SectionTitle main center>
          Gabriel Valenzuela <br />
          Jr. Developer
        </SectionTitle>
        <Button onClick={() => window.location = 'https://github.com/gvalen45/Gabriel-Valenzeula-Resume/blob/main/gabrielValenzuelaResume.pdf'}>View Resume </Button>
    </LeftSection>

  </Section>
);

export default Hero;