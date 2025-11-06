import linkedinIcon from '/images/icons/icon-linkedin.svg'
import githubIcon from '/images/icons/icon-github.svg'
import fnpLogo from '/images/logos/logo-fnp.webp'

import '../styles/components/footer.css'

function Footer() {
	return (
		<>
			<footer>
				<div>
					<p>Suivez nous</p>
					<div className="socialIcons">
						<a
							href="https://www.linkedin.com/company/studio418"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={linkedinIcon} alt="Icone de LinkedIn" />
						</a>
						<a
							href="https://github.com/studio418"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={githubIcon} alt="Icone de GitHub" />
						</a>
					</div>
				</div>
				<p>© 2025 Studio 418.</p>
				<img src={fnpLogo} alt="Logo de la fabrique numérique paloise" />
			</footer>
		</>
	)
}

export default Footer
