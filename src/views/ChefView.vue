<template>
    <header-com></header-com>
  <!-- Start Breadcrumb 
    ============================================= -->
    <div class="breadcrumb-area shadow text-center dark bg-fixed text-light" style="background-image: url(frontend/img/bg-chef.jpg);">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Our Chef</h1>
                    <ul class="breadcrumb">
                        <li><a href="#"><i class="fas fa-home"></i> Home</a></li>
                        <li><a href="#">Pages</a></li>
                        <li class="active">Chef</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- End Breadcrumb -->

    <!-- Start Chef Area 
    ============================================= -->
    <div class="chef-area default-padding bottom-less">
        <div class="container">
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
                                    <span>chef</span>
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
                                    <h4>Gabriela Beckett</h4>
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
                                        <li class="pinterest">
                                            <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                        </li>
                                        <li class="linkedin">
                                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
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
  <footer-com></footer-com>
</template>

<script>
import FooterCom from '@/components/FooterCom.vue'
import HeaderCom from '@/components/HeaderCom.vue'
export default {
    components : {FooterCom, HeaderCom},
    name : 'ChefView'
}
</script>

<style>

</style>