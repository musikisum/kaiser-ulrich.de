
import ShortUniqueId from 'short-unique-id';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, Button } from '@chakra-ui/react';


import sitemap from "../../data/sitemap.json";
import sitemapDictionary from "../../data/sitemapDictionary.json";
import style from './navigation.module.css';

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
  const urls = getUrls(filter);
  const theme = urls[0];
  const hasTheme = theme !== slug;
  const themeLinks = urls.slice(1).filter(url => url !== slug);

  return (
    <Menu>
      <MenuButton as={ Button } rightIcon={<ChevronDownIcon />} >Andere Auswahl?</MenuButton>
      <MenuList>
        { hasTheme && <MenuItem ml='4px' as='a' href={theme}><b>{sitemapDictionary[theme]}</b></MenuItem> }
        { hasTheme && <MenuDivider /> }        
        {
           themeLinks.map(url => {
            return <MenuItem key={uid.seq()} ml='10px' as='a' href={url}>{sitemapDictionary[url]}</MenuItem>
           })
        }
        <MenuDivider />
        <MenuItem ml='4px' as='a' href='/'><b>Home</b></MenuItem>
      </MenuList>
    </Menu>
  )
}

// {
//   getUrls().map(entry => {
//     return (
//       <ListItem key={uid.seq()}>
//         <Text>{entry}</Text>
//       </ListItem>
//     )
//   })
// } 