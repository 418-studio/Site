import { motion } from 'framer-motion'

const ContainerText = () => {
	return (
		<article className="container__text">
			<motion.p
				className="container__description"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.2, delay: 0.4 }}
				viewport={{ once: true, amount: 0.2 }}
			>
				Nous sommes trois développeurs passionnés, formés récemment, unis par une même
				conviction : progresser en réalisant des projets qui comptent.
			</motion.p>

			<motion.p
				className="container__quote"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.2, delay: 0.8 }}
				viewport={{ once: true, amount: 0.2 }}
			>
				&ldquo;Apprendre en créant, créer avec soin.&rdquo;
			</motion.p>

			<motion.p
				className="container__description"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.2, delay: 1.2 }}
				viewport={{ once: true, amount: 0.2 }}
			>
				Notre atelier-apprenant fonctionne en partenariat gagnant–gagnant : vous bénéficiez
				de solutions web soignées, nous enrichissons notre expertise.
			</motion.p>
		</article>
	)
}

export default ContainerText
