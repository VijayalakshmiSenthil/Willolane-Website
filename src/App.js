import './App.css';
import Navigation  from './components/navigation';
import Section_1 from './components/Section1';
import Section_2 from './components/Section2';
import Img_insert from './components/Imginsertion';
import Section_4 from './components/section4';
import Section_6 from './components/section6';
import Footer from './components/footer';
import Carouselslide from './components/corousal';


function App() {
  
  return (
    <>
      <Navigation />
      <Section_1/>
      <Section_2/>
      <Img_insert/>
      <Section_4
      src1={"../images/section4/brand1.png"} src4={"../images/section4/brand4.png"} src7={"../images/section4/brand7.png"}
      src2={"../images/section4/brand2.png"} src5={"../images/section4/brand5.png"} src8={"../images/section4/brand8.png"}
      src3={"../images/section4/brand3.png"} src6={"../images/section4/brand6.png"} src9={"../images/section4/brand9.png"}
      src10={"../images/section4/brand10.png"} srcmain={"./images/section4/slide4.jpg"}/>
      <Carouselslide/>
      <Section_6/>
      <Footer/>
     </>   
  );
  
}
export default App;
 
