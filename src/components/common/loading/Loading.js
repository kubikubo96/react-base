import React from 'react';
import {useLoading, Circles} from '@agney/react-loading';

const Loading = () => {
    const {containerProps, indicatorEl} = useLoading({
        loading: true,
        indicator: <Circles width="50"/>,
        loaderProps: {
            style: {
                position: 'absolute',
                top: '50%',
                right: '50%',
                margin: '-20px',
                color: '#3f51b5',
            }
        },
    });

    return (
        <section {...containerProps}>
            {indicatorEl}
        </section>
    );
};

export default Loading;
