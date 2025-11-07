import '../styles/pages/hero.css'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import logo from '/images/logos/logo.svg'

export default function Hero() {
	const [showH2, setShowH2] = useState(false)

	useEffect(() => {
		// h2 en cascade dès le début
		const h2Timeout = setTimeout(() => setShowH2(true), 400)
		return () => {
			clearTimeout(h2Timeout)
		}
	}, [])

	// Animation pour les h2
	const h2Spring = {
		initial: { opacity: 0, x: 100 },
		animate: { opacity: 1, x: 0 },
		transition: { type: 'spring' as const, stiffness: 80, damping: 20, duration: 3 },
	}

	return (
		<section>
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
			<button className="ctaButton">Commencez votre projet</button>
		</section>
	)
}
