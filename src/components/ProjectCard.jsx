import React, { use, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Tilt from 'react-parallax-tilt'
import QRCode from "react-qr-code"
import { triggerHover } from "../utils/eventBus";

export default function ProjectCard({title,description,link}) {
    const cardRef = useRef(null)
    const [constraints, setConstraints] = useState(null)
    const pointerDown = useRef({ x: 0, y: 0 });
    const movementThreshold = 10; // pixels

    const handlePointerDown = (e) => {
        pointerDown.current = { x: e.clientX, y: e.clientY };
    };

    const handleClick = (e) => {
        const dx = Math.abs(e.clientX - pointerDown.current.x);
        const dy = Math.abs(e.clientY - pointerDown.current.y);
        const moved = dx > movementThreshold || dy > movementThreshold;

        if (!moved) {
        window.open(link, "_blank", "noopener,noreferrer");
        }
    };

    const dialogues = [
        "Looks interesting, right?",
        "This one's a favorite!",
        "Cool project, huh?",
        "Check this out!"
    ];

    const handleMouseEnter = () => {
        const randomMessage = dialogues[Math.floor(Math.random() * dialogues.length)];
        triggerHover(randomMessage);
    };

    useEffect(() => {
        if (cardRef.current) {
            const bounds = cardRef.current.getBoundingClientRect()
            setConstraints({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            })
        }
    }, [])

    return (
        <div onMouseEnter={handleMouseEnter}>
        <div className="flex justify-center">
            <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="1rem"
                className="w-full max-w-md"
            >
                <motion.div
                    ref = {cardRef}
                    className="bg-white dark:bg-gray-800 p-6 m-4 rounded-xl shadow-xl border border-gray-300 dark:border-gray-600"
                    style={{borderRadius: '1rem'}}
                    drag
                    dragConstraints={constraints}
                    dragElastic={0.2}
                    animate={{x: 0, y: 0}}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}}
                    onPointerDown={handlePointerDown}
                    onClick={handleClick}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ flex: 1, textAlign: 'left', marginRight: '1rem' }}>
                            <h2 style={{ textAlign: 'left', marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: 600 }}>
                                {title}
                            </h2>
                            <p style={{ textAlign: 'left', fontSize: '0.875rem', color: '#FFFFFF' }}>
                                {description}
                            </p>
                        </div>
                            {link && (
                            <div style={{ marginLeft: '1rem' }}>
                                <QRCode value={link} size={128} />
                            </div>
                        )}
                    </div>
                </motion.div>
            </Tilt>
        </div>
        </div>
    )
}
