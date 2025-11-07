const ContainerText = () => {
	return (
		<article className="container__text">
			<h2 className="container__title">
				Bienvenue chez
				<br></br>
				<span className="titleStudio"> Studio 418</span>
			</h2>

			<p className="container__description">
				Nous sommes trois développeurs passionnés, sortis fraîchement de formation, unis par
				une envie commune :
			</p>

			<p className="container__quote">
				&ldquo;Mélanger apprentissage, créativité et code pour concevoir des projets utiles,
				esthétiques et modernes.&rdquo;
			</p>

			<p className="container__description">
				Que vous ayez besoin d un site vitrine, d une application web complexe ou d une
				refonte complète, nous sommes là pour vous accompagner à chaque étape.
			</p>
		</article>
	)
}

export default ContainerText
