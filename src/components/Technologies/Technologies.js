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
        JavaScript,React, HTML5/CSS,<br /> 
        PhotoShop, and Articulate.
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          SQL, .NET, C++, <br />
          Java, SVN and <br />
          Hosting services.
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiOpensource size="3rem" />
      <ListContainer>
        <ListTitle>Hard/Soft Skills</ListTitle>
        <ListParagraph>
        Communication, Project-Planning<br />
        Problem-Solving, Organization <br />
        Teamwork and Task-Management
        </ListParagraph>
      </ListContainer>
    </ListItem>

  </List>
  </Section>
  
);

export default Technologies;
