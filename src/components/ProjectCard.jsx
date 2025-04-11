import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({title,description}) {
    const cardRef = useRef(null)
    const [constraints, setConstraints] = useState(null)

    useEffect(() => {
        if (cardRef.current) {
            const bounds = cardRef.current.getBoundingClientRect()
            setConstraints({
                left: -40,
                right: 40,
                top: -10,
                bottom: 10,
            })
        }
    }, [])

    return (
        <motion.div
            ref = {cardRef}
            className="p-4 bg-white dark:bg-gray-800 shadow-xl rounded-2xl cursor-grab active:cursor-grabbing w-72"
            drag
            dragConstraints={constraints}
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
        >
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
        </motion.div>
    )
}