// Carousel.tsx
import { useState } from 'react'
import ContainerText from '../components/ContainerText'
import CarouselImages from '../components/CarouselImages'
import '../styles/components/carousel.css'
import { motion } from 'framer-motion'

interface CarouselImage {
	id: number
	src: string
	alt: string
}

export const images: CarouselImage[] = [
	{
		id: 1,
		src: '/images/photos/slide-1.webp',
		alt: 'Pole Laherrere - Studio 418 - slide 1',
	},
	{
		id: 2,
		src: '/images/photos/slide-2.webp',
		alt: 'Equipe Développeurs - Studio 418 - slide 2',
	},
	{
		id: 3,
		src: '/images/photos/slide-3.webp',
		alt: 'Projet Développement web - Studio 418 - slide 3',
	},
]

const Carousel = () => {
	const [currentImage, setCurrentImage] = useState(0)

	const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
	const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
	const goToImage = (index: number) => setCurrentImage(index)

	// 🔹 On ne "drague" pas visuellement, on détecte juste le mouvement
	let startX = 0

	const handleTouchStart = (e: React.TouchEvent) => {
		startX = e.touches[0].clientX
	}

	const handleTouchEnd = (e: React.TouchEvent) => {
		const endX = e.changedTouches[0].clientX
		const diff = startX - endX
		const swipeThreshold = 50 // distance minimale en px

		if (diff > swipeThreshold) nextImage() // vers la gauche
		if (diff < -swipeThreshold) prevImage() // vers la droite
	}

	// idem pour souris (optionnel)
	const handleMouseDown = (e: React.MouseEvent) => {
		startX = e.clientX
	}

	const handleMouseUp = (e: React.MouseEvent) => {
		const endX = e.clientX
		const diff = startX - endX
		const swipeThreshold = 50
		if (diff > swipeThreshold) nextImage()
		if (diff < -swipeThreshold) prevImage()
	}

	return (
		<section id="presentation" className="carousel">
			<motion.h2
				className="container__title"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true, amount: 0.5 }}
			>
				Bienvenue chez
				<br />
				<span className="titleStudio">Studio 418</span>
			</motion.h2>

			<article className="carousel__container">
				<ContainerText />

				{/* 🔹 Conteneur “muet” qui détecte les gestes mais ne se déplace pas */}
				<div
					className="carousel__swipezone"
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}
					onMouseDown={handleMouseDown}
					onMouseUp={handleMouseUp}
				>
					<CarouselImages
						images={images}
						currentImage={currentImage}
						goToImage={goToImage}
					/>
				</div>
			</article>
		</section>
	)
}

export default Carousel
