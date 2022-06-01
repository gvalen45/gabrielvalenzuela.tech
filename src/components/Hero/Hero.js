import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
        <SectionTitle main center>
          Gabriel Valenzuela <br/>
          &ensp;&ensp;&ensp;&ensp;Software Engineer <br/>
          &ensp;&ensp;&ensp;&ensp;Project Manager 
        </SectionTitle>
       <SectionText main center></SectionText>
        <Button onClick={() => window.open('https://github.com/gvalen45/Gabriel-Valenzeula-Resume/blob/master/Resume.pdf', '') }>View Resume </Button>
    </LeftSection>

  </Section>
);

export default Hero;