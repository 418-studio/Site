import { motion } from 'framer-motion'

const ContainerText = () => {
	return (
		<article className="container__text">
			<motion.p
				className="container__description"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.4 }}
				viewport={{ once: true, amount: 0.5 }}
			>
				Nous sommes trois développeurs passionnés, sortis fraîchement de formation, unis par
				une envie commune :
			</motion.p>

			<motion.p
				className="container__quote"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.8 }}
				viewport={{ once: true, amount: 0.5 }}
			>
				&ldquo;Mélanger apprentissage, créativité et code pour concevoir des projets utiles,
				esthétiques et modernes.&rdquo;
			</motion.p>

			<motion.p
				className="container__description"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 1.2 }}
				viewport={{ once: true, amount: 0.5 }}
			>
				Que vous ayez besoin d’un site vitrine, d’une application web complexe ou d’une
				refonte complète, nous sommes là pour vous accompagner à chaque étape.
			</motion.p>
		</article>
	)
}

export default ContainerText
