import '../styles/components/bentogrid.css'

interface BentoCard {
	id: number
	src: string
	alt: string
	className: string
}

const bentoCards: BentoCard[] = [
	{
		id: 1,
		src: '/images/composants/bentogrid-who.svg',
		alt: 'Vous & Nous - Studio 418',
		className: 'bento__card--who',
	},
	{
		id: 2,
		src: '/images/composants/bentogrid-mission.svg',
		alt: 'Nos Missions - Studio 418',
		className: 'bento__card--missions',
	},
	{
		id: 3,
		src: '/images/composants/bentogrid-teapot.svg',
		alt: 'Notre philosophie - une théière - Studio 418',
		className: 'bento__card--teapot',
	},
	{
		id: 4,
		src: '/images/composants/bentogrid-approach.svg',
		alt: 'Notre Approche - Studio 418',
		className: 'bento__card--approche',
	},
	{
		id: 5,
		src: '/images/composants/bentogrid-what.svg',
		alt: 'Ce que nous réalisons - Studio 418',
		className: 'bento__card--realisations',
	},
	{
		id: 6,
		src: '/images/composants/bentogrid-quote.svg',
		alt: 'Notre citation - Studio 418',
		className: 'bento__card--citation',
	},
	{
		id: 7,
		src: '/images/composants/bentogrid-3potes.svg',
		alt: 'Notre équipe - Studio 418',
		className: 'bento__card--equipe',
	},
]

const BentoGrid = () => {
	return (
		<section className="bento">
			<div className="bento__container">
				<div className="bento__grid">
					{bentoCards.map((card) => (
						<div key={card.id} className={`bento__card ${card.className}`}>
							<img src={card.src} alt={card.alt} className="bento__image" />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default BentoGrid
