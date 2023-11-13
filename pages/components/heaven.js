import style from './heaven.module.css';
import { Text } from '@chakra-ui/react';

// console.log('URL:', document.URL);

// function getWindowSize() {
//     const isSmallDisplay = this.window.innerWidth < 650;
// }

export default function Heaven({ isCenter }) {
    return <>
        <div className={ style.heavenDiv } style={ isCenter ? { 'textAlign': 'center' } : { 'textAlign': 'left' }}>
            <Text className={style.text}>Prof. Dr. Ulrich Kaiser – Open Educational Resources / Musiktheorie / Multimedia</Text>
        </div>
        <div className={style.heavenSmallDiv} style={isCenter ? { 'textAlign': 'center' } : { 'textAlign': 'left' }}>
            <Text className={style.text}>Prof. Dr. Ulrich Kaiser – OER / Mth / MM</Text>
        </div>
        <div className={style.heavenSmallestDiv} style={isCenter ? { 'textAlign': 'center' } : { 'textAlign': 'left' }}>
            <Text className={style.text}>Prof. Dr. Ulrich Kaiser</Text>
        </div>
    </>
}

