import React from 'react';
import { FooterWrapper, Copyright, FooterLinks } from './styles';

export default function Footer() {
  return (
    <FooterWrapper>
      <Copyright>© IndiaBIX™ Technologies</Copyright>
      <FooterLinks>
        <a href="/contact">Contact Us</a>
        <a href="/copyright">Copyright</a>
        <a href="/privacy">Privacy Policy</a>
      </FooterLinks>
    </FooterWrapper>
  );
}

