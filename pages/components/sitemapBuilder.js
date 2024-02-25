import Link from 'next/link';
import ShortUniqueId from 'short-unique-id';
import { sitemap, sitemapDictionary } from '../../data/sitemap'; 

const uid = new ShortUniqueId();

import style from './sitemapBuilder.module.css';

const sitemapComponent = () => {
  
  return <>
    <ul className={style.urlListe}>
      {          
        Object.entries(sitemapDictionary).map(([key, value]) => {
          const keyCopy = key;
          const length = keyCopy.slice(1).split('/').length;
          switch(length) {
            case 1: 
              return <li key={uid.seq()} style={{'marginLeft': '0', 'marginTop': '20px',}}>            
                      { value !== 'Person' ? 
                        <Link href={key} style={{'fontWeight': 'bold'}}>{value}</Link> :
                        <p style={{'fontWeight': 'bold'}}>{value}</p>
                      }
                    </li>
            case 2: 
              return <li key={uid.seq()} style={{'marginLeft': '20px', 'marginTop': '0'}}>            
                      <Link href={key}>{value}</Link>
                    </li>
            case 3:
              return <li key={uid.seq()} style={{'marginLeft': '40px', 'marginTop': '0'}}>            
                      <Link href={key}>{value}</Link>
                    </li>
            case 4:
              return <li key={uid.seq()} style={{'marginLeft': '60px', 'marginTop': '0'}}>            
                      <Link href={key}>{value}</Link>
                    </li>
            default:
              return <li key={uid.seq()} style={{'marginLeft': '0', 'marginTop': '0'}}>            
                      <Link href={key}>{value}</Link>
                    </li>
          }          
        })
      }
    </ul>
  </>        
}

export default sitemapComponent;