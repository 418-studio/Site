import { motion } from 'framer-motion'

interface CarouselImage {
	id: number
	src: string
	alt: string
}

interface CarouselImagesProps {
	images: CarouselImage[]
	currentImage: number
	goToImage: (index: number) => void
}

const CarouselImages = ({ images, currentImage, goToImage }: CarouselImagesProps) => {
	const current = images[currentImage]

	return (
		<article className="carousel__images">
			{/* Image principale */}
			<div className="carousel__main">
				<motion.img
					key={current.id}
					src={current.src}
					alt={current.alt}
					className="carousel__image"
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.95 }}
					transition={{ duration: 0.5 }}
				/>
			</div>

			{/* Miniatures (contrôles) */}
			<div className="carousel__controls">
				{images.map((img, index) => (
					<button
						key={img.id}
						className={`carousel__thumb ${currentImage === index ? 'carousel__thumb--active' : ''}`}
						onClick={() => goToImage(index)}
					>
						<img src={img.src} alt={img.alt} />
					</button>
				))}
			</div>
		</article>
	)
}

export default CarouselImages
