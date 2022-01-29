import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import{ Carousel } from "react-responsive-carousel"



export default class ImgCarousel extends Component {
    
    render() {
        return(
            <div className="carouselBody">
                <Carousel>
                    <div className="carouselImg">
                        <img src="https://i.pinimg.com/originals/3d/bf/f9/3dbff9cc9feb488ee9eecd188ca85feb.jpg" alt="catHotel"/>
                    </div>
                    <div className="carouselImg">
                        <img src="https://images.squarespace-cdn.com/content/v1/5c3d0a98506fbe24fe972977/1572815218377-BT5KJ6DD4NBYA3N79L6N/1%2Band%2B2%2B%25282%2529.jpg?format=1000w" alt="catRooms"/>
                    </div>
                    <div className="carouselImg">
                        <img src="https://cuckoo4design.com/wp-content/uploads/2019/05/Outdoor-cat-enclosure-attached-to-house-with-a-wrapped-tree-7.jpg" alt="catGarden"/>
                    </div>
                    <div className="carouselImg">
                        <img src="https://www.yankodesign.com/images/design_news/2021/07/indot-cat-apartment/8-indot_yankodesign.jpg" alt="catModern"/>
                    </div>
                </Carousel>
            </div>
        )
    }
}



