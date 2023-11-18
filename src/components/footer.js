function Footer(){
    return(
        <>
        <div class="container" style="padding: 120px 0px;">
        <div class="row" style="margin: 0;">
            <div class="col-md-4">
                <img src="images/logo.png" alt="logo" height="80px"/><br/>
                <span class="col1-line2">Social pages</span><br/>
                <div class="col1-line3">
                <div class="vl"></div>
                <a href="#"><i class="fab fa-facebook-f" style="color: #000000; padding: 0px 30px;"></i></a>
                <span class="vl"></span>
                <a href="#"><i class="fa-brands fa-square-instagram" style="color: #000000; padding: 0px 30px;"></i></a>
                <span class="vl"></span>
                </div>
            </div>
            <div class="col-md-4">
                <div class="col2-line1"><p>INFO</p></div>
                <div class="col2-line2">
                    <p> Address: Willow Lane,<br/>
                        Downstairs at Lake Level,<br/>
                        Next to Costa Coffee,<br/>
                        Cluster C, JLT, Dubai<br/>
                    </p>
                    <p>Telephone: 052-584-8201</p>
                    <p>Write us: info@willowlane.ae</p>
                </div>
            </div>
            <div class="col-md-4">
                    <div class="col2-line1">FIND US HERE<br/></div>
                    <div class="col2-map pt-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3613.9749299409636!2d55.134975374453!3d25.068838836889547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA0JzA3LjgiTiA1NcKwMDgnMTUuMiJF!5e0!3m2!1sen!2sin!4v1695100373411!5m2!1sen!2sin" 
                    width="300" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
            </div>
    </div>
    </div>
    <div class="footer">
        <hr/>
        <p class="footer1">Copyright @
        <spam class="footer2">Willowlane 2021</spam></p>
    </div>   
        </>
    );
}

export default Footer();