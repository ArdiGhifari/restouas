<template>

    <!-- Preloader Start -->
    <div class="se-pre-con"></div>
    <!-- Preloader Ends -->

   <header-com></header-com>

    <!-- Start Banner 
    ============================================= -->
    <div class="banner-area responsive-auto-height ds-fonts text-light video-bg-live bg-fixed" style="background-image: url(frontend/img/2440x1578.png);">
        <div class="player" data-property="{videoURL:'https://www.youtube.com/watch?v=hoiGV-N-2Gs',containment:'.video-bg-live', showControls:false, autoPlay:true, zoom:0, loop:true, mute:true, startAt:5, opacity:1, quality:'default'}"></div>
        <div id="bootcarousel" class="carousel transparent-nav slide carousel-fade animate_text" data-ride="carousel">
            <!-- Wrapper for slides -->
            <div class="carousel-inner shadow dark">
                <div class="item active">
                    <div class="box-table">
                        <div class="box-cell">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="content">
                                            <h2 data-animation="animated fadeInUp">Buffet</h2>
                                            <h1 data-animation="animated slideInLeft">Paket Ulang Tahun</h1>
                                            <div class="lists" data-animation="animated slideInUp">
                                                <ul>
                                                    <li>
                                                        <i class="flaticon-hamburger"></i> 10 Food
                                                    </li>
                                                    <li>
                                                        <i class="flaticon-champagne-glass"></i> 10 Drinks
                                                    </li>
                                                </ul>
                                            </div>
                                            <router-link data-animation="animated slideInUp" class="btn btn-theme effect btn-md" to="/reservations">Order Now</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="box-table">
                        <div class="box-cell">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="content">
                                            <h2 data-animation="animated fadeInUp">Buffet</h2>
                                            <h1 data-animation="animated slideInLeft">Paket Mahasiswa</h1>
                                            <div class="lists" data-animation="animated slideInUp">
                                                <ul>
                                                    <li>
                                                        <i class="flaticon-hamburger"></i> 5 Food
                                                    </li>
                                                    <li>
                                                        <i class="flaticon-champagne-glass"></i> 5 Drinks
                                                    </li>
                                                </ul>
                                            </div>
                                            <a data-animation="animated slideInUp" class="btn btn-theme effect btn-md" href="#">Order Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="box-table">
                        <div class="box-cell">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="content">
                                            <h2 data-animation="animated fadeInUp">Buffet</h2>
                                            <h1 data-animation="animated slideInLeft">Paket Buka Bersama</h1>
                                            <div class="lists" data-animation="animated slideInUp">
                                                <ul>
                                                    <li>
                                                        <i class="flaticon-hamburger"></i> 20 Food
                                                    </li>
                                                    <li>
                                                        <i class="flaticon-champagne-glass"></i> 20 Drinks
                                                    </li>
                                                </ul>
                                            </div>
                                            <a data-animation="animated slideInUp" class="btn btn-theme effect btn-md" href="#">Order Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Wrapper for slides -->

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#bootcarousel" data-slide="prev">
                <i class="fa fa-angle-left"></i>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#bootcarousel" data-slide="next">
                <i class="fa fa-angle-right"></i>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <!-- Shape -->
        <div class="wavesshape">
            <img src="frontend/img/shape.png" alt="Shape">
        </div>
        <!-- Shape -->
    </div>
    <!-- End Banner -->

    <!-- Start About
    ============================================= -->
    <div class="about-area default-padding">
        <div class="container">
            <div class="row">
                <div class="about-items">
                    <div class="col-md-7 info">
                        <h3>Our Story</h3>
                        <h2>Until I discovered cooking I was never<br> really interested in anything</h2>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sapien eget tellus varius ornare. Quisque ac tincidunt velit. Nam bibendum nisl non arcu ullamcorper sagittis. Phasellus in metus in dolor laoreet mollis. In ac ex lorem.
                        </p>
                        <p>
                           Morbi eu tincidunt tortor. Suspendisse justo magna, convallis sed elit non, tempor scelerisque neque. Quisque scelerisque felis nec ante mattis condimentum. Nulla commodo arcu ac libero scelerisque tincidunt. Ut in consectetur lacus. Curabitur ultricies consectetur urna in blandit. Duis blandit neque id facilisis tempor.
                        </p>
                        <ul>
                            <li>
                                <div class="icon">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div class="info">
                                    <h4>Telphone</h4>
                                    <span>+123 456 7890</span>
                                </div>
                            </li>
                            <li>
                                <div class="icon">
                                    <i class="fas fa-envelope-open"></i>
                                </div>
                                <div class="info">
                                    <h4>Email</h4>
                                    <span>maswawan@yahoo.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- Start Form -->
                    <div class="col-md-5 form">
                        <div class="form-box">
                            <div class="icon">
                                <i class="fas fa-utensils"></i>
                            </div>
                            <h3>Book a table</h3>
                            <form action="#">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input class="form-control" id="name" name="name" placeholder="Name" type="text">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input class="form-control" id="email" name="email" placeholder="Email" type="email">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <select>
                                                <option value="1">1 Person</option>
                                                <option value="2">2 Person</option>
                                                <option value="4">3 Person</option>
                                                <option value="5">4 Person</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input class="form-control" id="date" name="date" placeholder="Date" type="text">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <button type="submit" name="submit" id="submit">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- End Form -->
                </div>
            </div>
        </div>
    </div>
    <!-- End About -->

    <!-- Start Services
    ============================================= -->
    <div class="services-area item-bg bg-gray">
        <div class="container-full">
            <div class="row">
                <div class="services-items services-carousel owl-carousel owl-theme text-center text-light">
                    <!-- Single Item -->
                    <div class="item bg-cover" style="background-image: url(frontend/img/pesta-ulangtahun.jpg);">
                        <div class="box">
                            <i class="flaticon-champagne-glass"></i>
                            <h4>Pesta Ulang Tahun </h4>
                            <p>
                                Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Travelling by introduced of mr terminated.
                            </p>
                        </div>
                    </div>
                    <!-- End Single Item -->
                    <!-- Single Item -->
                    <div class="item bg-cover" style="background-image: url(frontend/img/bukber.jpg);">
                        <div class="box">
                            <i class="flaticon-buffet"></i>
                            <h4>Bukber</h4>
                            <p>
                               Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Travelling by introduced of mr terminated.
                            </p>
                        </div>
                    </div>
                    <!-- End Single Item -->
                    <!-- Single Item -->
                    <div class="item bg-cover" style="background-image: url(frontend/img/kurir.jpg);">
                        <div class="box">
                            <i class="flaticon-moving-truck"></i>
                            <h4>Home Delivery</h4>
                            <p>
                                Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Travelling by introduced of mr terminated.
                            </p>
                        </div>
                    </div>
                    <!-- End Single Item -->
                </div>
            </div>
        </div>
    </div>
    <!-- End Services -->

    <!-- Start Food Menu
    ============================================= -->
    <card-menu></card-menu>
    <!-- End Food Menu -->

    <!-- Start Offer
    ============================================= -->
    <div class="offer-area">
        <div class="container-full">
            <div class="row">
                <div class="offer-items offer-carousel owl-carousel owl-theme">
                    <!-- Single Item -->
                    <div class="item">
                        <div class="col-md-6 thumb bg-cover" style="background-image: url(frontend/img/bukber.jpg);">
                            <div class="price">
                                <h4>Price <span>Rp.500.000</span></h4>
                            </div>
                        </div>
                        <div class="col-md-6 info">
                            <h3>Special Offer</h3>
                            <h2>Buka Bersama</h2>
                            <span>Ayam Bakar / Pecel Lele / Sate Kerang</span>
                            <p>
                                Frankness applauded by supported ye household. Collected favourite now for for and rapturous repulsive consulted. An seems green be wrote again. She add what own only like. Tolerably we as extremity exquisite do commanded. Doubtful offended do entrance of landlord moreover is mistress in. Nay was appear entire ladies. Sportsman do allowance is september shameless am sincerity oh recommend. Gate tell man day that who. 
                            </p>
                            <a class="btn btn-dark border btn-md" href="#">Book a table</a>
                        </div>
                    </div>
                    <!-- End Single Item -->
                    <!-- Single Item -->
                    <div class="item">
                        <div class="col-md-6 thumb bg-cover" style="background-image: url(frontend/img/pesta-ulangtahun.jpg);">
                            <div class="price">
                                <h4>Price <span>Rp.600.000</span></h4>
                            </div>
                        </div>
                        <div class="col-md-6 info">
                            <h3>Special Offer</h3>
                            <h2>Pesta Ulang Tahun</h2>
                            <span>Ayam Bakar/ Pecel Lele/ Kue Spesial</span>
                            <p>
                                Frankness applauded by supported ye household. Collected favourite now for for and rapturous repulsive consulted. An seems green be wrote again. She add what own only like. Tolerably we as extremity exquisite do commanded. Doubtful offended do entrance of landlord moreover is mistress in. Nay was appear entire ladies. Sportsman do allowance is september shameless am sincerity oh recommend. Gate tell man day that who. 
                            </p>
                            <a class="btn btn-dark border btn-md" href="#">Book a table</a>
                        </div>
                    </div>
                    <!-- End Single Item -->
                </div>
            </div>
        </div>
    </div>
    <!-- End Offer -->

    <!-- Start Chef Area 
    ============================================= -->
    <div class="chef-area default-padding bottom-less">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="site-heading text-center">
                        <h3>Chefs</h3>
                        <h2>Meet our experts</h2>
                        <p>
                            While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="chef-items">
                    <!-- Single Item -->
                    <div class="col-md-4 single-item">
                        <div class="item">
                            <div class="thumb">
                                <img src="frontend/img/chef.jpg" alt="Thumb">
                            </div>
                            <div class="info">
                                <div class="overlay">
                                    <h4>Jessica Jones</h4>
                                    <span>Chef</span>
                                </div>
                                <div class="content">
                                    <p>
                                        Explain ten man uncivil engaged conduct. Am likewise betrayed as declared absolute do.
                                    </p>
                                    <ul>
                                        <li class="facebook">
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li class="twitter">
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Item -->
                    <!-- Single Item -->
                    <div class="col-md-4 single-item">
                        <div class="item">
                            <div class="thumb">
                                <img src="frontend/img/assisten-chef.jpg" alt="Thumb">
                            </div>
                            <div class="info">
                                <div class="overlay">
                                    <h4>Ahel Natasha</h4>
                                    <span>Assisten Chef</span>
                                </div>
                                <div class="content">
                                    <p>
                                        Explain ten man uncivil engaged conduct. Am likewise betrayed as declared absolute do.
                                    </p>
                                    <ul>
                                        <li class="facebook">
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li class="twitter">
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Item -->
                    <!-- Single Item -->
                    <div class="col-md-4 single-item">
                        <div class="item">
                            <div class="thumb">
                                <img src="frontend/img/assisten.jpg" alt="Thumb">
                            </div>
                            <div class="info">
                                <div class="overlay">
                                    <h4>Gabriel Beckett</h4>
                                    <span>Pelayan</span>
                                </div>
                                <div class="content">
                                    <p>
                                        Explain ten man uncivil engaged conduct. Am likewise betrayed as declared absolute do.
                                    </p>
                                    <ul>
                                        <li class="facebook">
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li class="twitter">
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Item -->
                </div>
            </div>
        </div>
    </div>
    <!-- End Chef Area -->

    <!-- Start Testimonials 
    ============================================= -->
    <div class="testimonials-area bg-gray carousel-shadow default-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="site-heading text-center">
                        <h3>Reviews</h3>
                        <h2>Testimonials</h2>
                        <p>
                            While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="testimonial-items testimonials-carousel owl-carousel owl-theme text-center">
                        <!-- Single Item -->
                        <div class="item">
                            <h4>Pecel Lelenya Mantap</h4>
                            <p>
                                Finished no horrible blessing landlord dwelling dissuade if. Rent fond am he in on read. Anxious cordial demands settled entered in do to colonel. 
                            </p>
                            <div class="thumb">
                                <img src="frontend/img/dewa.jpg" alt="Thumb">
                                <i class="fas fa-quote-left"></i>
                            </div>
                            <div class="clients-info">
                                <h5>Dewa</h5>
                                <div class="rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Item -->
                        <!-- Single Item -->
                        <div class="item">
                            <h4>Tempat yang Nyaman</h4>
                            <p>
                                Finished no horrible blessing landlord dwelling dissuade if. Rent fond am he in on read. Anxious cordial demands settled entered in do to colonel. 
                            </p>
                            <div class="thumb">
                                <img src="frontend/img/agus.jpg" alt="Thumb">
                                <i class="fas fa-quote-left"></i>
                            </div>
                            <div class="clients-info">
                                <h5>Agus</h5>
                                <div class="rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Item -->
                        <!-- Single Item -->
                        <div class="item">
                            <h4>Harganya Murah</h4>
                            <p>
                                Finished no horrible blessing landlord dwelling dissuade if. Rent fond am he in on read. Anxious cordial demands settled entered in do to colonel. 
                            </p>
                            <div class="thumb">
                                <img src="frontend/img/reno.jpg" alt="Thumb">
                                <i class="fas fa-quote-left"></i>
                            </div>
                            <div class="clients-info">
                                <h5>Reno</h5>
                                <div class="rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Item -->
                        <!-- Single Item -->
                        <div class="item">
                            <h4>Ayamnya Sedap</h4>
                            <p>
                                Finished no horrible blessing landlord dwelling dissuade if. Rent fond am he in on read. Anxious cordial demands settled entered in do to colonel. 
                            </p>
                            <div class="thumb">
                                <img src="frontend/img/dzakwan.jpg" alt="Thumb">
                                <i class="fas fa-quote-left"></i>
                            </div>
                            <div class="clients-info">
                                <h5>Dzakwan</h5>
                                <div class="rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Item -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Testimonials -->

    <!-- Start Booked Table 
    ============================================= -->
    
    <!-- End Booked Table -->

    <!-- Footer  -->
        <footer-com></footer-com>

    <!-- End Footer -->
  
</template>

<script>
import HeaderCom from '@/components/HeaderCom.vue'
import FooterCom from '@/components/FooterCom.vue'
import CardMenu from '@/components/CardMenu.vue'
import axios from 'axios';
export default {
    components: {HeaderCom, FooterCom,CardMenu},
    name:'MasterView',
    
    data() {
        return {
            menurestos: [],
        };
    },
    methods: {
        setMenu(data){
            this.menurestos = data;
        },
    },
    mounted(){
        axios
        .get("http://localhost:3003/menuresto")
        .then((response) => this.setMenu(response.data))
        .catch((error) => console.log(error))
    },
};

</script>

<style>

</style>