import { Carousel } from 'antd';


function Carouselslide(){
    
        const onChange = (currentSlide) => {
          console.log(currentSlide);
        };
    
  return (
    <div class="slide5-container">
    <Carousel autoplay afterChange={onChange}>
        <div>
          <h3 className="contentStyle">Amazing salon with very professional staff, great range of<br/> services available<br/>XMPT Fitness</h3>
        </div>
        <div>
          <h3 className="contentStyle">Willow Lane is the best salon I have been to in Dubai. It is<br/> now a home away from home for me and I love visiting. They<br/> are great with colouring blonde hair and great with nails (you <br/> can even have both treatments at the same time to save time).<br/>Katy Ben</h3>
        </div>
        <div>
          <h3 className="contentStyle">"I’ve been here couple times. Great atmosphere and friendly<br/> staffs. It’s my new favourite place for manicure and pedicure.",<br/>Leah Lo</h3>
        </div>
        <div>
          <h3 className="contentStyle">Hair by Brogan, always. She is amazing and I wouldn't go<br/> anywhere other than Willow Lane. From balayage to full<br/> blonde, she sorts me out every time. Salon is beautiful and <br/> super friendly, definitely worth the trip",<br/>Beth Farlam</h3>
        </div>
        <div>
          <h3 className="contentStyle">I would definitely recommend this beautiful salon. Staff were<br/> extremely welcoming and friendly. Had my hair done by<br/> Suzie which looked and felt great. ( Loved the head massage.) <br/>On my second visit I had a gel manicure and pedicure. My<br/> eyebrows threaded, amazing so relaxing. Will definitely be<br/> back. Five star treatment",<br/>Angela Martin</h3>
        </div>
    </Carousel>
    </div>
  );
};
export default Carouselslide;


/*

import { Carousel } from 'antd';
function carousal(){
    const App = () => {
        const onChange = (currentSlide) => {
          console.log(currentSlide);
        };
    
    return (
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>Amazing salon with very professional staff, great range of services available<br/>XMPT Fitness</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Willow Lane is the best salon I have been to in Dubai. It is now a home away from home for me and I love visiting. They are great with colouring blonde hair and great with nails (you can even have both treatments at the same time to save time).<br/>Katy Ben</h3>
        </div>
        <div>
          <h3 style={contentStyle}>"I’ve been here couple times. Great atmosphere and friendly staffs. It’s my new favourite place for manicure and pedicure.",<br/>Leah Lo</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Hair by Brogan, always. She is amazing and I wouldn't go anywhere other than Willow Lane. From balayage to full blonde, she sorts me out every time. Salon is beautiful and super friendly, definitely worth the trip",<br/>Beth Farlam</h3>
        </div>
        <div>
          <h3 style={contentStyle}>I would definitely recommend this beautiful salon. Staff were extremely welcoming and friendly. Had my hair done by Suzie which looked and felt great. (Loved the head massage.) On my second visit I had a gel manicure and pedicure. My eyebrows threaded, amazing so relaxing. Will definitely be back. Five star treatment",<br/>Angela Martin</h3>
        </div>
      </Carousel>
    );
  };
  
  export default carousal;
  

*/

