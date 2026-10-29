'use client';

import { ArrowUpRight, ArrowRight, Github, Linkedin, Mail, Database, ChartNoAxesCombined, BrainCircuit, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Brand from './components/Brand';
import SignalArtwork from './components/SignalArtwork';
import InsightCards from './components/InsightCards';
import { projects as projectContent } from '../content/data';

const projects = [
  { number: '01', category: 'OPTIMIZATION · MACHINE LEARNING', title: 'SmartRoute AI', description: 'Making warehouse picking smarter with data-driven slotting and route optimization.', tags: ['Python', 'Apriori', 'Flask'], metric: '32%', metricLabel: 'less daily distance', href: 'https://github.com/BerkeBesli/SmartRoute-AI' },
  { number: '02', category: 'ENERGY · FORECASTING', title: 'Solar Power Forecasting', description: 'Predicting photovoltaic power generation using time-series models, machine learning and physical insights.', tags: ['XGBoost', 'LightGBM', 'Time Series'], metric: 'PV', metricLabel: 'forecasting research', href: '#contact' },
  { number: '03', category: 'BIG DATA · CLOUD', title: 'NYC Taxi Analytics', description: 'Building a scalable data processing and predictive modeling workflow with PySpark on AWS EMR.', tags: ['PySpark', 'AWS EMR', 'ML'], metric: 'AWS', metricLabel: 'cloud analytics', href: '#contact' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="site-shell">
    <header className="header wrap">
      <Brand href="#home"/>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
        {[['About','#about'], ['Projects','#projects'], ['Insights','#writing'], ['Contact','#contact']].map(([name,href]) => <a key={name} href={href} onClick={() => setMenuOpen(false)}>{name}</a>)}
      </nav>
      <a className="header-cta" href="#contact">Let’s connect <ArrowUpRight size={15}/></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero wrap" id="home">
        <div className="hero-content">
          <div className="eyebrow"><span className="pulse"/> INDEPENDENT THINKING / DATA-DRIVEN DESIGN</div>
          <h1>Making sense<br/><em>of what’s next.</em></h1>
          <p className="hero-description">Industrial Engineering background. Data Science mindset. I explore the intersection of data, engineering and business — building thoughtful solutions and sharing the ideas behind them.</p>
          <div className="hero-actions"><a className="button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button-secondary" href="#writing">Read my insights <ArrowRight size={17}/></a></div>
          <div className="hero-footnote"><span>BASED IN TÜRKİYE</span><span>·</span><span>OPEN TO IDEAS & COLLABORATION</span></div>
        </div>
        <SignalArtwork/>
      </section>

      <section className="section about-section" id="about"><div className="wrap about-grid"><div><div className="section-kicker">01 / ABOUT ME</div><h2>Curiosity asks why.<br/><em className="about-heading-em">Analysis reveals how.</em></h2></div><div className="about-copy"><p>I’m an Industrial Engineering student at Gebze Technical University, passionate about using data to understand complex systems and solve real problems.</p><p>My interests span machine learning, business analytics, banking & CRM, optimization, and cloud technologies. I believe the best solutions combine technical depth with clear business thinking.</p><div className="skill-list"><span><Database size={15}/> Data Analytics</span><span><BrainCircuit size={15}/> Machine Learning</span><span><ChartNoAxesCombined size={15}/> Optimization</span></div></div></div></section>

      <section className="section wrap" id="projects"><div className="section-head"><div><div className="section-kicker">02 / SELECTED WORK</div><h2>Projects<span className="accent">.</span></h2></div><span className="section-note">Selected explorations in applied intelligence.</span></div><div className="project-grid">{projects.map(p => <article className="project-card" key={p.number}><div className="project-top"><span>{p.number} / {p.category}</span><a href={`/projects/${projectContent[Number(p.number)-1].slug}`} aria-label={`Explore ${p.title}`}><ArrowUpRight size={19}/></a></div><div className="project-visual"><div className="project-metric">{p.metric}</div><span>{p.metricLabel}</span></div><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></article>)}</div></section>

      <section className="section writing-section" id="writing"><div className="wrap"><div className="section-head"><div><div className="section-kicker">03 / INSIGHTS & JOURNAL</div><h2>Ideas worth <em className="editorial-em">exploring.</em></h2></div><a className="button-secondary" href="/insights">Explore the journal ↗</a></div><p className="journal-intro">Thoughts on data, intelligence, finance, and the technologies shaping our world.</p><p className="editorial-note">Research insights and works in progress. Entries marked Draft are outlines awaiting completion.</p><InsightCards/></div></section>

      <section className="contact-section wrap" id="contact"><div className="section-kicker">04 / GET IN TOUCH</div><h2>Let’s build something<br/><em>meaningful.</em></h2><p>Interested in data, technology, or a potential collaboration? I’d love to connect.</p><div className="contact-links"><a href="https://github.com/orhanali0009?tab=repositories" target="_blank" rel="noopener noreferrer"><Github size={18}/> GitHub <ArrowUpRight size={15}/></a><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><Linkedin size={18}/> LinkedIn <ArrowUpRight size={15}/></a><a href="mailto:YOUR_EMAIL@example.com"><Mail size={18}/> Email <ArrowUpRight size={15}/></a></div><p className="contact-note">Update the placeholder LinkedIn and email links before publishing.</p></section>
    </main>
    <footer className="footer wrap"><span>© {new Date().getFullYear()} Ali Orhan</span><span>BUILT WITH CURIOSITY & CODE.</span><a href="#home">BACK TO TOP ↑</a></footer>
  </div>;
}
