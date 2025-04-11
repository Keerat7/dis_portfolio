import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Tilt from 'react-parallax-tilt'

export default function ProjectCard({title,description}) {
    const cardRef = useRef(null)
    const [constraints, setConstraints] = useState(null)

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
                    onDragEnd={(event,info) => {}}
                    animate={{x: 0, y: 0}}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}}
                >
                    <h2 className="text-xl font-semibold mb-2">{title}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
                </motion.div>
            </Tilt>
        </div>
    )
}
