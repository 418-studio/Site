import TeamCard from '../components/TeamCard'
import '../styles/pages/sectionOurTeam.css'
import yanAvatar from '../../public/images/team/portrait-outline-yannick.webp'
import benAvatar from '../../public/images/team/portrait-outline-benjamin.webp'
import laureAvatar from '../../public/images/team/portrait-outline-laure.webp'
import { type Collaborateur } from '../types/collaborateur'

export default function SectionOurTeam() {
	const yannick: Collaborateur = {
		avatar_img: yanAvatar,
		name: 'BIOT',
		surname: 'Yannick',
		functions: {
			firstRow: 'Full-stack',
			secondRow: 'Organisation & Méthode',
		},
		description:
			'Orchestrateur de projets full-stack. Garant de la qualité et de la livraison dans les temps',
		reseau_link: {
			github: '',
			linkedin: '',
		},
		style_card: 'yellow',
	}

	const benjamin: Collaborateur = {
		avatar_img: benAvatar,
		name: 'Saint-Augustin',
		surname: 'Benjamin',
		functions: {
			firstRow: 'Full-stack',
			secondRow: 'Structure & Technique',
		},
		description:
			"Technicien backend & frontend et friand d'animation. Passionné par les défis techniques complexes",
		reseau_link: {
			github: '',
			linkedin: '',
		},
		style_card: 'green',
	}

	const laure: Collaborateur = {
		avatar_img: laureAvatar,
		name: 'LAVIE',
		surname: 'Laure',
		functions: {
			firstRow: 'Full-stack',
			secondRow: 'Design & UI/UX',
		},
		description:
			"Créatrice d'interfaces élégantes et intuitives. L'oeil créatif qui fait la différence.",
		reseau_link: {
			github: '',
			linkedin: '',
		},
		style_card: 'blue',
	}

	return (
		<div id="SectionOurTeam">
			<h2 id="titre_sectionOurTeam">Notre Equipe</h2>
			<div id="TeamCard_Container">
				<TeamCard collaborateur={yannick} />
				<TeamCard collaborateur={benjamin} />
				<TeamCard collaborateur={laure} />
			</div>
		</div>
	)
}
