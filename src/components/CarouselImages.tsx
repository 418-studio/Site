import { motion } from 'framer-motion'

interface CarouselImage {
	id: number
	src: string
	alt: string
}

interface CarouselImagesProps {
	images: CarouselImage[]
	currentImage: number
	nextImage: () => void
	prevImage: () => void
	goToImage: (index: number) => void
}

const CarouselImages = ({ images, currentImage, goToImage }: CarouselImagesProps) => {
	return (
		<article className="carousel__images">
			{/* Slider */}
			<div className="carousel__slider">
				<motion.div
					className="carousel__track"
					style={{ x: `-${currentImage * 100}%` }}
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					onDragEnd={(_, info) => {
						if (info.offset.x < -50) goToImage((currentImage + 1) % images.length)
						if (info.offset.x > 50)
							goToImage((currentImage - 1 + images.length) % images.length)
					}}
					transition={{ type: 'spring', stiffness: 300, damping: 30 }}
				>
					{images.map((image) => (
						<div className="carousel__slide" key={image.id}>
							<img src={image.src} alt={image.alt} className="carousel__image" />
						</div>
					))}
				</motion.div>
			</div>

			{/* Miniatures comme contrôles */}
			<div className="carousel__controls">
				{images.map((img, index) => (
					<button
						key={index}
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
