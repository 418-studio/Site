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
		<section className="carousel">
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
				<CarouselImages
					images={images}
					currentImage={currentImage}
					nextImage={nextImage}
					prevImage={prevImage}
					goToImage={goToImage}
				/>
			</article>
		</section>
	)
}

export default Carousel
