import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center",color: 'white',marginBottom: '25;'}}>
          <DiCssdeck size="3rem"/><Span>Gabriel Valenzuela</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects ">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech ">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link onClick={() => window.open('https://github.com/gvalen45/Gabriel-Valenzeula-Resume/blob/master/Resume.pdf', '') } href="https://github.com/gvalen45/Gabriel-Valenzeula-Resume/blob/master/Resume.pdf">
        
          <NavLink>Resume</NavLink>
          
        </Link>
      </li>
      <li>
        <Link href="#about ">
          <NavLink>About</NavLink>
        </Link>
      </li>
      
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/gvalen45">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/jgabrielvalenzuela/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
  
);

export default Header;
