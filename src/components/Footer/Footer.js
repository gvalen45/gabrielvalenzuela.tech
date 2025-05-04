import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { ListItem } from '../Technologies/TechnologiesStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <ListItem href="tel:602-341-7226">NULL</ListItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <ListItem href="mailto:Gabe.Valenzuela.PHX@@gmail.com">Gabriel.Valenzuela.PHX@Gmail.com</ListItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
      <SocialIcons href="https://github.com/gvalen45">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/jgabrielvalenzuela/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
