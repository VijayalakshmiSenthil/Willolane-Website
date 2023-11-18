function Section_4(props){
    return(
    <>
    <div id="brand" class="container py-5">
        <div class="row r1" >
            <div class="col-md-6">
                <h1 class="head">PARTNERS</h1>
                <div class="row p-3" >
                    <div class="col-md-4 brand1">
                        <img src={props.src1} alt="brand1" width="100%"/>
                    </div>
                    <div class="col-md-4 brand2">
                        <img src={props.src2} alt="brand2" width="100%"/>
                    </div>
                    <div class="col-md-4 brand3">
                        <img src={props.src3} alt="brand3" width="100%"/>
                    </div>
                </div>
                <div class="row r2 p-3" >
                    <div class="col-md-4 brand4">
                        <img src={props.src4} alt="brand4" width="100%"/>
                    </div>
                    <div class="col-md-4 brand5">
                        <img src={props.src5} alt="brand5" width="100%"/>
                    </div>
                    <div class="col-md-4 brand6">
                        <img src={props.src6} alt="brand6" width="100%"/>
                    </div>
                </div>
                <div class="row r3 p-3" >
                    <div class="col-md-4 brand7">
                        <img src={props.src7} alt="brand7" width="100%"/>
                    </div>
                    <div class="col-md-4 brand8">
                        <img src={props.src8} alt="brand8" width="100%"/>
                    </div>
                    <div class="col-md-4 brand9">
                        <img src={props.src9} alt="brand9" width="100%"/>
                    </div>
                </div>
                <div class="row r4 p-3">
                    <div class="col-md-4 brand10">
                        <img src={props.src10} alt="brand10" width="100%"/>
                    </div>
                </div>
                <div class="row r5 justify-content-center p-3">
                    <div class="col-md-12  button">
                        <p>GALLERY</p>
                    </div>
                </div>
            </div>    
            <div class="col-md-6 ">
                <img src={props.srcmain} alt="slide4" height="auto" width="100%"/>
            </div>
    </div>
</div>
    </>  
    );
}

export default Section_4;


