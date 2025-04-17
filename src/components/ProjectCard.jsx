import React, { use, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Tilt from 'react-parallax-tilt'
import QRCode from "react-qr-code"

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
        <div className="flex justify-center">
            <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#ffffff"
                glarePosition="all"
                className="w-full max-w-md"
            >
                <motion.div
                    ref = {cardRef}
                    className="bg-white dark:bg-gray-800 p-6 m-4 rounded-xl shadow-xl border border-gray-300 dark:border-gray-600"
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
                    <div className="flex items-center gap-6">
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold mb-2">{title}</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
                        </div>
                        {link && (
                            <div className="flex items-center justify-center">
                                <QRCode value={link} size={100} />
                            </div>
                        )}
                    </div>
                </motion.div>
            </Tilt>
        </div>
    )
}
