import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState('default');
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const mouseEnter = () => setIsHidden(false);
        const mouseLeave = () => setIsHidden(true);

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseenter', mouseEnter);
        window.addEventListener('mouseleave', mouseLeave);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseenter', mouseEnter);
            window.removeEventListener('mouseleave', mouseLeave);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            backgroundColor: 'rgba(0, 255, 200, 0.1)',
            border: '2px solid #00ffc8',
        },
        text: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 60,
            width: 60,
            backgroundColor: 'rgba(0, 255, 200, 0.2)',
            border: '2px solid #00ffc8',
        },
        button: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 50,
            width: 50,
            backgroundColor: 'rgba(0, 255, 200, 0.3)',
            border: '2px solid #00ffc8',
            mixBlendMode: 'difference'
        },
        link: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            height: 30,
            width: 30,
            backgroundColor: '#00ffc8',
            border: 'none',
        }
    };

    const textEnter = () => setCursorVariant('text');
    const textLeave = () => setCursorVariant('default');
    const buttonEnter = () => setCursorVariant('button');
    const buttonLeave = () => setCursorVariant('default');
    const linkEnter = () => setCursorVariant('link');
    const linkLeave = () => setCursorVariant('default');

    useEffect(() => {
        const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li');
        const buttonElements = document.querySelectorAll('button, .btn-hover');
        const linkElements = document.querySelectorAll('a');

        textElements.forEach(el => {
            el.addEventListener('mouseenter', textEnter);
            el.addEventListener('mouseleave', textLeave);
        });

        buttonElements.forEach(el => {
            el.addEventListener('mouseenter', buttonEnter);
            el.addEventListener('mouseleave', buttonLeave);
        });

        linkElements.forEach(el => {
            el.addEventListener('mouseenter', linkEnter);
            el.addEventListener('mouseleave', linkLeave);
        });

        return () => {
            textElements.forEach(el => {
                el.removeEventListener('mouseenter', textEnter);
                el.removeEventListener('mouseleave', textLeave);
            });

            buttonElements.forEach(el => {
                el.removeEventListener('mouseenter', buttonEnter);
                el.removeEventListener('mouseleave', buttonLeave);
            });

            linkElements.forEach(el => {
                el.removeEventListener('mouseenter', linkEnter);
                el.removeEventListener('mouseleave', linkLeave);
            });
        };
    }, []);

    return (
        <>
            {/* Main Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                variants={variants}
                animate={cursorVariant}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
                style={{
                    display: isHidden ? 'none' : 'block'
                }}
            />
            
            {/* Cursor Follower */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 rounded-full border border-cyan-400/30 pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - 24,
                    y: mousePosition.y - 24,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 25,
                    mass: 0.8
                }}
                style={{
                    display: isHidden ? 'none' : 'block',
                    backgroundColor: 'rgba(0, 255, 200, 0.05)',
                    backdropFilter: 'blur(2px)'
                }}
            />
        </>
    );
};

export default CustomCursor;