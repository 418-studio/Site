import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NavButton from './NavButton'
import '../styles/components/header.css'

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	function handleNavButtonClick() {
		// action bouton
	}

	return (
		<header>
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
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.2 }}
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
		</header>
	)
}
