import '../styles/pages/sectionContact.css'
import tasse_the from '../../public/images/illustrations/cup-of-tea.webp'
import sachet_the from '../../public/images/illustrations/teabag.webp'
import image_background from '../../public/images/illustrations/duo.webp'

export default function SectionContact() {
	return (
		<section id="sectionContact">
			<img
				id="sectionContact_imageBackground"
				src={image_background}
				alt="2 personnes discutent pendant le thé"
			/>
			<div id="sectionContact_title">
				<h2>Contactez-nous</h2>
			</div>
			<div id="sectionContact_container">
				<div id="sectionContact_accroche">
					<div id="sectionContact_accroche_rectangle"></div>
					<h2>Parlons de votre projet</h2>
				</div>
				<div id="sectionContact_coordonne">
					<p>
						<a href="mailto:studio418.pro@gmail.com">studio418.pro@gmail.com</a>
					</p>
					<p>06.10.32.77.02</p>
					<div id="sectionContact_coordonne_rectangle"></div>
				</div>
				<div id="sectionContact_citation">
					<div className="sectionContact_citation_illustration">
						<img src={tasse_the} alt="tasse de thé" />
					</div>
					<p>&quot;Ensemble faisons infuser vos idées dans le web&quot;</p>
					<div className="sectionContact_citation_illustration">
						<img src={sachet_the} alt="sachet de thé" />
					</div>
				</div>
			</div>
		</section>
	)
}
