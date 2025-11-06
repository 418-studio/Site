import { useState } from 'react'

interface CarouselImage {
	id: number
	src: string
	alt: string
}

const images: CarouselImage[] = [
	{
		id: 1,
		src: './public/images/photos/slide-1.webp',
		alt: 'Pole Laherrere - Studio 418 -slide 1',
	},
	{
		id: 2,
		src: './public/images/photos/slide-2.webp',
		alt: 'Equipe Développeurs - Studio 418 -slide 2',
	},
	{
		id: 3,
		src: './public/images/photos/slide-3.webp',
		alt: 'Projet Développement web - Studio 418 -slide 3',
	},
]

const Carousel = () => {
	const [currentImage, setCurrentImage] = useState(0)
	const nextImage = () => {
		setCurrentImage((prev) => (prev + 1) % images.length)
	}
	const prevImage = () => {
		setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
	}
	const goToImage = (index: number) => {
		setCurrentImage(index)
	}

	return (
		<section
			className="carousel"
			style={{
				backgroundColor: 'var(--color-white)',
				minHeight: '100dvh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '20px',
			}}
		>
			<div
				style={{
					width: '100%',
					maxWidth: '1400px',
					margin: '0 auto',
					padding: '20px',
					textAlign: 'center',
				}}
			>
				<h2>Bienvenue chez Studio 418</h2>
				<p
					style={{
						fontFamily: 'var(--font-lato-regular)',
						fontSize: 'var(--font-size-mobile-text)',
						color: 'var(--color-text-black)',
						textAlign: 'justify',
						marginTop: '2rem',
					}}
				>
					Nous sommes trois développeurs passionnés, sortis fraîchement de formation, unis
					par une envie commune :
				</p>
				<p
					className="quote"
					style={{
						fontFamily: 'var(--font-lato-italic)',
						fontSize: 'var(--font-size-mobile-text)',
						color: 'var(--color-accent-blue)',
						fontStyle: 'italic',
						textAlign: 'justify',
						marginBottom: '1rem',
					}}
				>
					“Mélanger apprentissage, créativité et code pour concevoir des projets utiles,
					esthétiques et modernes.”
				</p>
				<p
					style={{
						fontFamily: 'var(--font-lato-regular)',
						fontSize: 'var(--font-size-mobile-text)',
						color: 'var(--color-text-black)',
						textAlign: 'justify',
						marginBottom: '2rem',
					}}
				>
					Que vous ayez besoin d&apos;un site vitrine, d&apos;une application web complexe
					ou d&apos;une refonte complète, nous sommes là pour vous accompagner à chaque
					étape.
				</p>

				<div
					className="ContainerCarousel"
					style={{
						position: 'relative',
						width: '100%',
						overflow: 'hidden',
					}}
				>
					<div
						className="ImageSlider"
						style={{
							display: 'flex',
							transition: 'transform 0.5s ease-in-out',
							transform: `translateX(-${currentImage * 100}%)`,
						}}
					>
						{images.map((image) => (
							<div
								className="Slide"
								key={image.id}
								style={{
									minWidth: '100%',
									height: '400px',
									flexShrink: 0,
								}}
							>
								<img
									src={image.src}
									alt={image.alt}
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover',
										display: 'block',
									}}
								/>
							</div>
						))}
					</div>
				</div>
				<div
					className="DotSlide"
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '10px',
						marginTop: '2rem',
					}}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							gap: '20px',
							marginBottom: '1rem',
						}}
					>
						<button
							onClick={prevImage}
							style={{ padding: '10px 20px', cursor: 'pointer' }}
						>
							Précédent
						</button>
						<button
							onClick={nextImage}
							style={{ padding: '10px 20px', cursor: 'pointer' }}
						>
							Suivant
						</button>
					</div>
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => goToImage(index)}
							style={{
								width: '15px',
								height: '15px',
								borderRadius: '50%',
								border: '2px solid var(--color-border-black)',
								backgroundColor:
									currentImage === index
										? 'var(--color-text-black)'
										: 'transparent',
								cursor: 'pointer',
								transition: 'all 0.3s ease',
								padding: 0,
							}}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Carousel
