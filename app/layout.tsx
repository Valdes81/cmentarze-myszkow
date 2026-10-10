import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Cmentarze Myszków - lokalny portal informacyjny',description:'Cmentarze w Myszkowie i powiecie myszkowskim. Adresy, administratorzy, mapy i informacje praktyczne.',icons:{icon:'/favicon.svg'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pl"><body>{children}</body></html>}
