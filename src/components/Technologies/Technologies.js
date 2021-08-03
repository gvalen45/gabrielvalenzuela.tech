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
        JavaScript, HTML,<br /> CSS, Node and React
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          SQL, C++, Java and Python
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiOpensource size="3rem" />
      <ListContainer>
        <ListTitle>Soft Skills</ListTitle>
        <ListParagraph>
          Organization, Collaboration, Leadership and Design <br />
        </ListParagraph>
      </ListContainer>
    </ListItem>

  </List>
  </Section>
  
);

export default Technologies;
