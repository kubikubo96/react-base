import {useState, useEffect} from 'react';

const useMagicColor = () => {
    const [color, setColor] = useState('green');

    useEffect(() => {
        const intervalColor = setInterval(() => {
            const newColor = Math.floor(Math.random() * 999999);
            setColor(`#${newColor}`)
        }, 1000);
        return () => {
            clearInterval(intervalColor)
        }
    }, []);

    return color
};

export default useMagicColor;
