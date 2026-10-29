import {permanentRedirect,notFound} from 'next/navigation';
import {insights} from '../../../content/insights';
export default async function LegacyWriting({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!insights.some(a=>a.slug===slug))notFound();permanentRedirect('/insights/'+slug);}
