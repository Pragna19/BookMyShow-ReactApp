import Carousel from "react-bootstrap/Carousel";

function FirstSlider() {
    return (
      <div>
        <Carousel variant="dark" style={{margin:"1%"}}>
            <Carousel.Item>
                <img style={{borderRadius:"8px"}}
                className="d-block w-100"
                src="https://in.bmscdn.com/promotions/cms/creatives/1641389801876_freejan.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img style={{borderRadius:"8px"}}
                className="d-block w-100"
                src="https://in.bmscdn.com/promotions/cms/creatives/1641368422847_sakaljani.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img style={{borderRadius:"8px"}}
                className="d-block w-100"
                src="https://in.bmscdn.com/promotions/cms/creatives/1640756827751_1633590513692_moviemunchies_webshowcase_1240x300_7oct.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
      </div>
    );
  }
  
  export default FirstSlider;