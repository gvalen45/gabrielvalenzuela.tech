import React from 'react';
import { DiFirebase, DiMysql, DiOpensource, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section nopadding id="tech">
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    </SectionText>
    <List>
    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
        Experience with <br />
        React.js, Angular, JavaScript<br />
            HTML5/CSS, and responsive UI/UX design<br /> 
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Back-End & DevOps</ListTitle>
        <ListParagraph>
        Proficient in <br />
          .NET, C#, Python, SQL, Java, Jenkins<br />
          GitHub, UrbanCodeDeploy, RESTful APIs<br />
          Oracle APEX and Hosting services
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiOpensource size="3rem" />
      <ListContainer>
        <ListTitle>Cloud & Tools</ListTitle>
        <ListParagraph>
        Azure, Oracle Cloud, CI/CD Pipelines, Secure SDLC <br />
        Agile Scrum, Code Scanning, and Automated Testing
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiOpensource size="3rem" />
      <ListContainer>
        <ListTitle>Hard/Soft Skills</ListTitle>
        <ListParagraph>
        Team mentorship, Agile sprint planning, <br />
        Project ownership, cross-functional coordination, <br />
        Strategic problem-solving, and technical communication.
      </ListParagraph>

        
      </ListContainer>
    </ListItem>

  </List>
  
  </Section>
  
);

export default Technologies;




