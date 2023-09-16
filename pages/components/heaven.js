import style from './heaven.module.css';
import { Text } from '@chakra-ui/react';

export default function Heaven({ text }) {
    return <>
        <div className={ style.heavenDiv }>
            <Text className={style.text}>{ text }</Text>
        </div>
    </>
}

