import '../styles/components/teamCard.css'
import ic_github from '../../public/images/icons/icon-github.svg'
import ic_linkedin from '../../public/images/icons/icon-linkedin.svg'
import { type Collaborateur } from '../types/collaborateur'

export default function TeamCard({ collaborateur }: { collaborateur: Collaborateur }) {
	// Ici on personnalise le style des cartes dans le css avec les class
	const style: Record<string, string> = {
		blue: 'blue_teamCard teamCard',
		green: 'green_teamCard teamCard',
		yellow: 'yellow_teamCard teamCard',
	}

	return (
		<article className={style[collaborateur.style_card] ?? 'teamCard'}>
			<div className="teamCard_high">
				<div className="avatar_circle">
					<div className="avatar_container">
						<img
							src={collaborateur.avatar_img}
							alt={'avatar de ' + collaborateur.name + ' ' + collaborateur.surname}
						/>
					</div>
				</div>
			</div>
			<div className="teamCard_low">
				<p className="teamCard_title">
					{collaborateur.surname} {collaborateur.name}
				</p>
				<div>
					<h2 className="avatar_function">{collaborateur.functions.firstRow}</h2>
					<h2 className="avatar_function">{collaborateur.functions.secondRow}</h2>
				</div>
				<p className="avatar_description">{collaborateur.description}</p>
				<nav>
					<ul className="avatar_reseauSociaux">
						<li>
							<a
								href={collaborateur.reseau_link.github}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={ic_github} alt="Lien vers Github" />
							</a>
						</li>
						<li>
							<a
								href={collaborateur.reseau_link.linkedin}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={ic_linkedin} alt="Lien vers Linkedin" />
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</article>
	)
}
