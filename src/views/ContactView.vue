<template>
  <header-com></header-com>

    <!-- Start Breadcrumb 
    ============================================= -->
    <div class="breadcrumb-area shadow text-center dark bg-fixed text-light" style="background-image: url(frontend/img/bg-contact.jpg);">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Contact Us</h1>
                    <ul class="breadcrumb">
                        <li><a href="#"><i class="fas fa-home"></i> Home</a></li>
                        <li><a href="#">Pages</a></li>
                        <li class="active">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- End Breadcrumb -->

    <!-- Start Contact 
    ============================================= -->
    <div class="contact-us-area default-padding">
        <div class="container">
            <div class="row">
                <div class="contact-box">
                    
                    <!-- Start Form -->
                    <div class="col-md-5 form-box">
                        <div class="form-content">
                            <div class="heading">
                                <h3>Drop us a line</h3>
                            </div>
                            <form action="assets/mail/contact.php" method="POST" class="contact-form">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="form-group">
                                            <input class="form-control" id="name" name="name" placeholder="Name" type="text">
                                            <span class="alert-error"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input class="form-control" id="email" name="email" placeholder="Email*" type="email">
                                            <span class="alert-error"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input class="form-control" id="phone" name="phone" placeholder="Phone" type="text">
                                            <span class="alert-error"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="form-group comments">
                                            <textarea class="form-control" id="comments" name="comments" placeholder="Tell Us About Project *"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="row">
                                        <button type="submit" name="submit" id="submit">
                                            Send Message <i class="fa fa-paper-plane"></i>
                                        </button>
                                    </div>
                                </div>
                                <!-- Alert Message -->
                                <div class="col-md-12 alert-notification">
                                    <div id="message" class="alert-msg"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- End Form -->

                    <div class="col-md-6 col-md-offset-1 info">
                        <h2>Contact Us</h2>
                        <p>
                            Often merit stuff first oh up hills as he. Servants contempt as although addition dashwood is procured. Interest in yourself an do of numerous feelings cheerful confined. 
                        </p>
                        <div class="address-items">
                           <div class="row">
                                <!-- Item -->
                                <div class="col-md-6 col-sm-6 equal-height">
                                    <div class="item">
                                        <div class="icon"><i class="fas fa-map-marked-alt"></i></div> 
                                        <span>22 Baker Street,<br> London, United Kingdom,<br> W1U 3BW</span>
                                    </div>
                                </div>
                                <!-- End Item -->
                                <!-- Item -->
                                <div class="col-md-6 col-sm-6 equal-height">
                                    <div class="item">
                                        <div class="icon"><i class="fas fa-clock"></i> </div>
                                        <span>info@yourdomain.com<br>admin@yourdomain.com</span>
                                    </div>
                                </div>
                                <!-- End Item -->
                                <!-- Item -->
                                <div class="col-md-6 col-sm-6 equal-height">
                                    <div class="item">
                                        <div class="icon"><i class="fas fa-phone"></i></div> 
                                        <span>+44-20-7328-4499 <br>+99-34-8878-9989</span>
                                    </div>
                                </div>
                                <!-- End Item -->
                                <!-- Item -->
                                <div class="col-md-6 col-sm-6 equal-height">
                                    <div class="item">
                                        <div class="icon"><i class="fas fa-envelope-open"></i> </div>
                                        <span>info@yourdomain.com<br>admin@yourdomain.com</span>
                                    </div>
                                </div>
                                <!-- End Item -->
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Contact -->

    <!-- Start Google Maps 
    ============================================= -->
    <div class="maps-area">
        <div class="container-full">
            <div class="row">
                <div class="google-maps">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.4603045673393!2d104.81372377592932!3d-2.9696938397853043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b77bea9479f7d%3A0x99a642604dfe658c!2sLorong%20Iwari%20I%2C%20Sei%20Selincah%2C%20Kec.%20Kalidoni%2C%20Kota%20Palembang%2C%20Sumatera%20Selatan%2030161!5e0!3m2!1sen!2sid!4v1687316660726!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
    <!-- End Google Maps -->

  <footer-com></footer-com>
</template>

<script>

import HeaderCom from '@/components/HeaderCom.vue'
import FooterCom from '@/components/FooterCom.vue'
export default {
  components: { HeaderCom, FooterCom },
  name : 'ContactView'

}
</script>
