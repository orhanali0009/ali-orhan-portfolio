import Brand from '../../components/Brand';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../../../content/data';
export function generateStaticParams() { return projects.map(e => ({slug:e.slug})); }
export default async function Detail({params}:{params:Promise<{slug:string}>}) {
 const {slug} = await params; const entry=projects.find(e=>e.slug===slug); if(!entry) notFound();
 return <main className="detail-page"><nav className="detail-nav"><Brand/><Link href="/#$projects">← Back to projects</Link></nav><div className="detail-content"><div className="section-kicker">{entry.category}</div><h1>{entry.title}<span className="accent">.</span></h1><p className="detail-summary">{entry.summary}</p>{entry.status && <div className="draft-notice">{entry.status} — not yet published as a finished article</div>}<div className="tags">{entry.tags.map(t=><span key={t}>{t}</span>)}</div><div className="detail-sections">{entry.sections.map(s=><section key={s.heading}><h2>{s.heading}</h2><p>{s.body}</p></section>)}</div>{entry.link && <a className="button-primary" href={entry.link} target="_blank" rel="noopener noreferrer">View project repository ↗</a>}</div><footer className="detail-footer">© 2026 Ali Orhan · Built with curiosity & code.</footer></main>;
}
