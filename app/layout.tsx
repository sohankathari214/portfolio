import type {Metadata} from 'next';
import {GeistSans} from 'geist/font/sans';
import {GeistMono} from 'geist/font/mono';
import {Header,Footer} from '@/components/Header';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')),title:{default:'Sohan Kathari — Computer Science at Carnegie Mellon',template:'%s | Sohan Kathari'},description:'Software for autonomous racing, speech feedback, and food-label scanning. Explore Sohan Kathari’s engineering projects.',openGraph:{title:'Sohan Kathari — Selected work',description:'Computer science at Carnegie Mellon. Explore four engineering case studies.',type:'website'},twitter:{card:'summary_large_image'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${GeistSans.variable} ${GeistMono.variable}`}><a className="skip" href="#main">Skip to content</a><Header/>{children}<Footer/></body></html>}
