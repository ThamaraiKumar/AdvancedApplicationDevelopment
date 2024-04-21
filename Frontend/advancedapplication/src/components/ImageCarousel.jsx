import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
    return (
        <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={2000}>
            <div>
                <img src="https://www.tunepocket.com/wp-main/uploads/Meditation-quote-3.jpg" alt="Slide 1" height={500} />
            </div>
            <div>
                <img src="https://i.pinimg.com/originals/c2/9e/00/c29e000c3eaa24b99d7a3ec3b59d7961.jpg" alt="Slide 2" height={500} />
            </div>
            <div>
                <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/g/8/h/large-hd-printed-yoga-wall-poster-gym-motivational-quotes-original-imagqyks6d7xf3vh.jpeg?q=90&crop=false" alt="Slide 3" height={500}/>
            </div>
            <div>
                <img src="https://www.fitsri.com/wp-content/uploads/2021/02/In-an-asana-the-mind-has-to-1024x683.jpg" alt="Slide 4" height={500}/>
            </div>
            <div>
                <img src="https://images.herzindagi.info/image/2023/Jun/yoga-day-wishes-quotes-messages-images-and-whatsapp-status.jpg" alt="Slide 5" height={500}/>
            </div>
            <div>
                <img src="https://images.squarespace-cdn.com/content/v1/59297c2a5016e1bf418943af/1611495403158-669VXVZBL5ZCFXE715KF/namaste-in-nature-yoga-quote-3-ralph-waldo-emerson.jpg" alt="Slide 6" height={500}/>
            </div>
        </Carousel>
    );
};

export default ImageCarousel;
