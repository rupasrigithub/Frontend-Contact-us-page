import React from 'react';
import { Clock } from 'lucide-react';
import AdBanner from '../AdBanner';
import {
  SidebarWrapper,
  CurrentAffairs,
  IconWrapper,
  ContentWrapper,
  Title,
  Description,
  QuickLinksContainer,
  QuickLinksHeader,
  QuickLinksContent,
  Column,
  SectionTitle,
  LinkList,
  LinkItem
} from './styles';

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <CurrentAffairs>
        <IconWrapper>
          <Clock size={24} />
        </IconWrapper>
        <ContentWrapper>
          <Title>Current Affairs</Title>
          <Description>Check out the latest current affairs questions and answers.</Description>
        </ContentWrapper>
      </CurrentAffairs>

      <AdBanner />

      <QuickLinksContainer>
        <QuickLinksHeader>Quick links</QuickLinksHeader>
        <QuickLinksContent>
          <Column>
            <SectionTitle>Quantitative Aptitude</SectionTitle>
            <LinkList>
              <LinkItem><a href="/arithmetic">Arithmetic</a></LinkItem>
              <LinkItem><a href="/data-interpretation">Data Interpretation</a></LinkItem>
            </LinkList>

            <SectionTitle color="#4CAF50">Verbal (English)</SectionTitle>
            <LinkList>
              <LinkItem><a href="/verbal-ability">Verbal Ability</a></LinkItem>
              <LinkItem><a href="/verbal-test">Verbal Test</a></LinkItem>
            </LinkList>

            <SectionTitle>Reasoning</SectionTitle>
            <LinkList>
              <LinkItem><a href="/logical">Logical</a></LinkItem>
              <LinkItem><a href="/verbal">Verbal</a></LinkItem>
              <LinkItem><a href="/nonverbal">Nonverbal</a></LinkItem>
            </LinkList>
          </Column>

          <Column>
            <SectionTitle color="#4CAF50">Programming</SectionTitle>
            <LinkList>
              <LinkItem><a href="/python">Python Programming</a></LinkItem>
              <LinkItem><a href="/c">C Programming</a></LinkItem>
              <LinkItem><a href="/cpp">C++, C#</a></LinkItem>
              <LinkItem><a href="/java">Java</a></LinkItem>
            </LinkList>

            <SectionTitle color="#4CAF50">Interview</SectionTitle>
            <LinkList>
              <LinkItem><a href="/gd">GD</a></LinkItem>
              <LinkItem><a href="/hr">HR</a></LinkItem>
              <LinkItem><a href="/technical">Technical Interview</a></LinkItem>
            </LinkList>

            <SectionTitle color="#4CAF50">Placement Papers</SectionTitle>
            <LinkList>
              <LinkItem><a href="/papers">Placement Papers</a></LinkItem>
              <LinkItem><a href="/submit">Submit Paper</a></LinkItem>
            </LinkList>
          </Column>
        </QuickLinksContent>
      </QuickLinksContainer>
    </SidebarWrapper>
  );
}

