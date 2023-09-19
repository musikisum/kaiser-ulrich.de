import style from './heaven.module.css';
import { Text } from '@chakra-ui/react';



// console.log('URL:', document.URL);

// function getWindowSize() {
//     const isSmallDisplay = this.window.innerWidth < 650;
// }

export default function Heaven({ text }) {
    return <>
        <div className={ style.heavenDiv }>
            <Text className={style.text}>Prof. Dr. Ulrich Kaiser – Open Educational Resources / Musiktheorie / Multimedia</Text>
        </div>
        <div className={ style.heavenSmallDiv }>
            <Text className={style.text}>Prof. Dr. Ulrich Kaiser – OER / Mth / MM</Text>
        </div>
        <div className={ style.heavenSmallestDiv }>
            <Text className={style.text}>Prof. Dr. Ulrich Kaiser</Text>
        </div>
    </>
}

