import React from 'react';
import { motion } from 'framer-motion';

const WithAnimation: React.FunctionComponent<{ duration?: any }> = (props:any) => {
    const pageEffects = {
        init: {
            opacity: 0
        },
        in: {
            opacity: 1
        },
        out: {
            opacity: 0
        }
    };

    const pageTransition = {
        type: 'tween',
        duration: !props.duration ? 0.4 : props.duration
    };

    return (
        <motion.div initial="init" animate="in" exit="out" variants={pageEffects} transition={pageTransition}>
            {props.children}
        </motion.div>
    );
}

export default WithAnimation;
