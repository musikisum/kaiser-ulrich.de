
import ShortUniqueId from 'short-unique-id';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, Button, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react';

import { sitemap, sitemapDictionary } from "../../data/sitemap";
// import sitemapDictionary from "../../data/sitemapDictionary.json";

import style from './navigation.module.css';

const color = '#F2727F';
const uid = new ShortUniqueId();

function getUrls(filter) {
  const urls = sitemap.pages.reduce((akku, current) => {
    for (const [key, value] of Object.entries(current)) {
      if (key === '/' + filter) {
        akku.push(key);
        for (const index in value) {
          akku.push(key + value[index]);
        }
      }     
    }
    return akku;
  }, []);
  return [...new Set(urls)];;
}

export default function Navigation({ filter, slug }) {

  const home = '/';
  const urls = getUrls(filter);
  const theme = urls[0];
  const hasTheme = theme !== slug;
  const themeLinks = urls.slice(1);

  return (
    <>
      <div className={style.menuIsVisible}>
        <Menu>
          <MenuButton as={Button} rightIcon={<HamburgerIcon />}>Menu</MenuButton>
          <MenuList>
            {
              hasTheme && theme !== slug ? 
              <MenuItem ml='4px' as='a' href={theme}><b>{sitemapDictionary[theme]}</b></MenuItem> :
              <MenuItem isDisabled ml='4px' as='a' href={theme}><b>{sitemapDictionary[theme]}</b></MenuItem>
            }
            { hasTheme && <MenuDivider /> }        
            {
               themeLinks.map(url => {
                let item = url !== slug ? 
                <MenuItem key={uid.seq()} ml='10px' as='a' href={url}>{sitemapDictionary[url]}</MenuItem> :
                <MenuItem isDisabled key={uid.seq()} ml='10px' as='a' href={url}>{sitemapDictionary[url]}</MenuItem>
                return item;
               })
            }
            <MenuDivider />
            {
              filter === 'wissenschaft/hilfsmittel' && <MenuItem href='/wissenschaft' as='a' ml='4px'><b>Wissenschaft</b></MenuItem>
            }
            <MenuItem ml='4px' as='a' href='/'><b>Home</b></MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className={style.breadcrumbIsVisible}>
        <Breadcrumb className={style.breadcrumbIsVisible}>
        <BreadcrumbItem><BreadcrumbLink href={home}>Home</BreadcrumbLink></BreadcrumbItem>
        { 
          filter === 'wissenschaft/hilfsmittel' && <BreadcrumbItem><BreadcrumbLink href='/wissenschaft'>Wissenschaft</BreadcrumbLink></BreadcrumbItem>
        }
        {
          theme !== slug ?
          <BreadcrumbItem><BreadcrumbLink href={theme}>{sitemapDictionary[theme]}</BreadcrumbLink></BreadcrumbItem> : 
          <BreadcrumbItem isCurrentPage><BreadcrumbLink href={theme}><Text color={color}>{sitemapDictionary[theme]}</Text></BreadcrumbLink></BreadcrumbItem>
        }
        {
          themeLinks.map(url => {
            return url !== slug ? 
            <BreadcrumbItem key={uid.seq()}><BreadcrumbLink href={url}>{ sitemapDictionary[url] }</BreadcrumbLink></BreadcrumbItem> :
            <BreadcrumbItem isCurrentPage key={uid.seq()}><BreadcrumbLink href={url}><Text color={color}>{sitemapDictionary[url]}</Text></BreadcrumbLink></BreadcrumbItem>
          })
        }
        </Breadcrumb>
      </div>
    </>
  )
}