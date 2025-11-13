import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NavButton from './NavButton'
import '../styles/components/header.css'

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		let timeout: number
		function handleScroll() {
			clearTimeout(timeout)
			timeout = setTimeout(() => {
				const triggerPoint = window.innerHeight / 2
				setScrolled(window.scrollY > triggerPoint)
			}, 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	function handleNavButtonClick() {
		window.location.href = 'mailto:studio418.pro@gmail.com'
	}

	return (
		<motion.header
			className="header"
			initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
			animate={{
				backgroundColor: scrolled
					? 'rgba(0, 0, 0, 0.6)' // ou utilise une couleur liée à ton design system
					: 'rgba(0,0,0,0)',
			}}
			transition={{ duration: 0.6, ease: 'easeInOut' }}
		>
			<nav>
				<ul className="navDesktop">
					<li>Présentation</li>
					<li>Notre équipe</li>
					<li>Contact</li>
					<li>
						<NavButton handleOnclick={handleNavButtonClick} />
					</li>
				</ul>

				<button className="navToggle" onClick={() => setIsMobileMenuOpen((open) => !open)}>
					<img src="/images/icons/icon-burger.svg" alt="Bouton de menu" />
				</button>

				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.ul
							className="navMobile"
							initial={{ opacity: 0, y: -100 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -100 }}
							transition={{ duration: 0.3 }}
						>
							<li>Présentation</li>
							<li>Notre équipe</li>
							<li>Contact</li>
							<li>
								<NavButton handleOnclick={handleNavButtonClick} />
							</li>
						</motion.ul>
					)}
				</AnimatePresence>
			</nav>

			{scrolled && (
				<motion.img
					src="/images/logos/logo-418.svg"
					alt="logo 418 du studio"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				/>
			)}
		</motion.header>
	)
}
