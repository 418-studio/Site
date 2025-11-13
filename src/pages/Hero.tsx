import '../styles/pages/hero.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import logo from '/images/logos/logo.svg'

export default function Hero() {
	const [showH2, setShowH2] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'], // 0 quand Hero visible, 1 quand Hero sort
	})

	// Effet d’apparition des h2
	useEffect(() => {
		const h2Timeout = setTimeout(() => setShowH2(true), 400)
		return () => clearTimeout(h2Timeout)
	}, [])

	const h2Spring = {
		initial: { opacity: 0, x: 100 },
		animate: { opacity: 1, x: 0 },
		transition: { type: 'spring' as const, stiffness: 80, damping: 20, duration: 3 },
	}

	// 🔥 Animation de la forme du hero
	const width = useTransform(scrollYProgress, [0.1, 1], ['100%', '90%'])
	const borderRadius = useTransform(scrollYProgress, [0, 0.3], ['0', '20px'])

	return (
		<motion.section
			id="hero"
			ref={ref}
			className="hero-section"
			style={{
				width,
				borderBottomLeftRadius: borderRadius,
				borderBottomRightRadius: borderRadius,
			}}
		>
			<article className="heroWrapper">
				<div className="heroBackground"></div>
				<img src={logo} alt="Logo du site du studio 418" />
			</article>

			<article className="heroInfo">
				<div className="circle"></div>
				<motion.h2 {...h2Spring} animate={showH2 ? h2Spring.animate : h2Spring.initial}>
					Petite équipe, grands projets
				</motion.h2>
				<motion.h2 {...h2Spring} animate={showH2 ? h2Spring.animate : h2Spring.initial}>
					Le numérique au service de vos objectifs.
				</motion.h2>
				<motion.h2 {...h2Spring} animate={showH2 ? h2Spring.animate : h2Spring.initial}>
					On parle humain et JavaScript.
				</motion.h2>
			</article>
		</motion.section>
	)
}
