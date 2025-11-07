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
		<div className="carousel__images">
			<div className="carousel__slider">
				<div className="carousel__slide">
					<img
						src={images[currentImage].src}
						alt={images[currentImage].alt}
						className="carousel__image"
					/>
				</div>
			</div>

			<div className="carousel__controls">
				<div className="carousel__dots">
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => goToImage(index)}
							className={`carousel__dot ${
								currentImage === index ? 'carousel__dot--active' : ''
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default CarouselImages
