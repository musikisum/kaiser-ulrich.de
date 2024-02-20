import style from './heaven.module.css';
import { Text } from '@chakra-ui/react';

export default function Heaven({ isCenter }) {
    return <>
        <div className={ style.heavenDiv } style={ isCenter ? { 'textAlign': 'center' } : { 'textAlign': 'left' }}>
            <Text className={style.text}>Prof. Dr. Ulrich Kaiser – Open Educational Resources / Musiktheorie</Text>
        </div>
        <div className={style.heavenSmallDiv} style={isCenter ? { 'textAlign': 'center' } : { 'textAlign': 'left' }}>
            <Text className={style.text}>Prof. Dr. Ulrich Kaiser – OER / Mth</Text>
        </div>
        <div className={style.heavenSmallestDiv} style={isCenter ? { 'textAlign': 'center' } : { 'textAlign': 'left' }}>
            <Text className={style.text}>Prof. Dr. Ulrich Kaiser</Text>
        </div>
    </>
}

