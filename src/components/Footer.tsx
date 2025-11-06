import linkedinIcon from '../../public/images/icons/icon-linkedin.svg'
import githubIcon from '../../public/images/icons/icon-github.svg'

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
							<img src={linkedinIcon} alt="LinkedIn" />
						</a>
						<a
							href="https://github.com/studio418"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={githubIcon} alt="GitHub" />
						</a>
					</div>
				</div>
				<p>© 2025 Studio 418.</p>
				<img src="" alt="" />
			</footer>
		</>
	)
}

export default Footer
