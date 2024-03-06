const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://assetsio.reedpopcdn.com/Star-Wars-Jedi-Survivor-screenshot.jpg" className="slideImage" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Epic Rancor Fight</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://press-start.com.au/wp-content/uploads/2023/04/Jedi-Survivor-Final-Gameplay-Trailer.jpg" className="slideImage" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Epic Scout Trooper Fight</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://blog.playstation.com/tachyon/2023/04/58e3ba22a32e90c4a9167dcca978e38eb01fe1ec-scaled.jpg?resize=1088%2C612&crop_strategy=smart" className="slideImage" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Epic View of the Array</h5>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel