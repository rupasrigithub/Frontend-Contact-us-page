import React from 'react';
import {
  QuickLinksContainer,
  QuickLinksHeader,
  LinksGrid,
  Section,
  SectionTitle,
  LinksList,
  LinkItem
} from './styles';

export default function QuickLinks() {
  return (
    <QuickLinksContainer>
      <QuickLinksHeader>Quick links</QuickLinksHeader>
      <LinksGrid>
        <div>
          <Section>
            <SectionTitle>Quantitative Aptitude</SectionTitle>
            <LinksList>
              <LinkItem>
                <a href="/arithmetic">Arithmetic</a>
              </LinkItem>
              <LinkItem>
                <a href="/data-interpretation">Data Interpretation</a>
              </LinkItem>
            </LinksList>
          </Section>

          <Section>
            <SectionTitle>Verbal (English)</SectionTitle>
            <LinksList>
              <LinkItem>
                <a href="/verbal-ability">Verbal Ability</a>
              </LinkItem>
              <LinkItem>
                <a href="/verbal-test">Verbal Test</a>
              </LinkItem>
            </LinksList>
          </Section>

          <Section>
            <SectionTitle>Reasoning</SectionTitle>
            <LinksList>
              <LinkItem>
                <a href="/logical">Logical</a>
              </LinkItem>
              <LinkItem>
                <a href="/verbal">Verbal</a>
              </LinkItem>
              <LinkItem>
                <a href="/nonverbal">Nonverbal</a>
              </LinkItem>
            </LinksList>
          </Section>
        </div>

        <div>
          <Section>
            <SectionTitle>Programming</SectionTitle>
            <LinksList>
              <LinkItem>
                <a href="/python">Python Programming</a>
              </LinkItem>
              <LinkItem>
                <a href="/c">C Programming</a>
              </LinkItem>
              <LinkItem>
                <a href="/cpp">C++, C#</a>
              </LinkItem>
              <LinkItem>
                <a href="/java">Java</a>
              </LinkItem>
            </LinksList>
          </Section>

          <Section>
            <SectionTitle>Interview</SectionTitle>
            <LinksList>
              <LinkItem>
                <a href="/gd">GD</a>
              </LinkItem>
              <LinkItem>
                <a href="/hr">HR</a>
              </LinkItem>
              <LinkItem>
                <a href="/technical">Technical Interview</a>
              </LinkItem>
            </LinksList>
          </Section>

          <Section>
            <SectionTitle>Placement Papers</SectionTitle>
            <LinksList>
              <LinkItem>
                <a href="/placement-papers">Placement Papers</a>
              </LinkItem>
              <LinkItem>
                <a href="/submit-paper">Submit Paper</a>
              </LinkItem>
            </LinksList>
          </Section>
        </div>
      </LinksGrid>
    </QuickLinksContainer>
  );
}

