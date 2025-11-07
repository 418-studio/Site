import '../styles/pages/sectionTitreOurTeam.css'
import banner from '../../public/images/composants/banner.svg'

export default function SectionTitreOurTeam() {
	return (
		<section id="sectionTitreOurTeam">
			<h2>Notre Equipe</h2>
			<div id="banniere_texte">
				<p id="citation">
					Nous sommes Yannick, Laure et Benjamin, trois développeurs web full stack formés
					à la Fabrique Numérique Paloise.
				</p>
				<img src={banner} alt="Bannière de citation" />
			</div>
		</section>
	)
}
