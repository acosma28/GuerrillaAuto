const About = () => {
  return (
    <div className="Guerrilla_tm_section" id="about">
      <div className="Guerrilla_tm_about">
        <div className="about_inner">
          <div className="left">
            <div className="image">
              <img src="img/thumbs/45-49.jpg" alt="Guerrilla image" />
              <div className="main" data-img-url="img/about/1.jpg" />
              <span
                className="square moving_effect"
                data-direction="y"
                data-reverse="yes"
              />
              <span className="border">
                <span
                  className="in moving_effect"
                  data-direction="x"
                  data-reverse="yes"
                />
              </span>
            </div>
          </div>
          <div className="center">
            <div className="title wow fadeInUp" data-wow-duration="1s">
              <span className="small">About</span>
              <h3>
                Guerrilla
              </h3>
              <h3>
                <span>Car Detailing</span>
              </h3>
              <span className="subtitle">Based in Atlanta, GA</span>
            </div>
            <div
              className="text wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <p>
                Some brief about Guerrilla blurb...
              </p>
              <p>
                More to the blurb...
              </p>
            </div>
          </div>
          <div className="right">
            <div className="image">
              <img src="img/thumbs/41-61.jpg" alt="Guerrilla image" />
              <div className="main" data-img-url="img/about/2.jpg" />
              <div
                className="square moving_effect"
                data-direction="x"
                data-reverse="no"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
