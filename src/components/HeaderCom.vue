<template>
     <!-- Header 
    ============================================= -->
    <header id="home">

        <!-- Start Navigation -->
        <nav class="navbar navbar-default navbar-fixed navbar-transparent dark bootsnav shadow-less">

            <div class="container">

                <!-- Start Atribute Navigation -->
                <div class="attr-nav">
                    <ul>
                        <li class="side-menu"><a href="#"><i class="fa fa-bars"></i></a></li>
                    </ul>
                </div>        
                <!-- End Atribute Navigation -->

                <!-- Start Header Navigation -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i class="fa fa-bars"></i>
                    </button>
                    <a class="navbar-brand" href="index.html">
                        <img src="frontend/img/logo-light.png" class="logo logo-display" alt="Logo">
                        <img src="frontend/img/logo.png" class="logo logo-scrolled" alt="Logo">
                    </a>
                </div>
                <!-- End Header Navigation -->

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="navbar-menu">
                    <ul class="nav navbar-nav navbar-right" data-in="#" data-out="#">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Home</a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link to="/">Home</router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Pages</a>
                            <ul class="dropdown-menu">
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" >About</a>
                                </li>
                                <li><router-link to="/chefs">chef</router-link></li>
                            </ul>
                        </li>
                        <li><router-link to="/reservations">Reservation</router-link></li>
                        <li>
                            <router-link to="/contacts">Contact</router-link>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div>

            <!-- Start Side Menu -->
            <div class="side">
                <a href="#" class="close-side"><i class="fa fa-times"></i></a>
                <div class="widget">
                    <h4 class="title">About Us</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus aliquid non, repudiandae dolorum laboriosam sint provident nobis iusto. Unde culpa architecto porro ratione sapiente doloremque odit ex, minima quisquam! Doloremque?
                    </p>
                </div>
                <div class="widget opening-hours">
                    <h4 class="title">Opening Hours</h4>
                    <ul>
                        <li> 
                            <span> Senin - Selasa :  </span>
                            <div class="pull-right"> 17.00 WIB - 22.00 WIB </div>
                        </li>
                        <li> 
                            <span> Rabu - Kamis :</span>
                            <div class="pull-right"> 16.00 WIB - 22.00 WIB </div>
                        </li>
                        <li> 
                            <span> Sabtu - Minggu :</span>
                            <div class="pull-right"> 16.00 WIB - 23.00 WIB </div>
                        </li>
                        <li> 
                            <span> Jum'at : </span>
                            <div class="pull-right closed"> Tutup </div>
                        </li>
                    </ul>
                </div>
                <div class="widget">
                    <h4 class="title">Our Menus</h4>
                    <ul>
                        <li><a href="#">Chees croissants</a></li>
                        <li><a href="#">Bruschetti</a></li>
                        <li><a href="#">Awesome Vegetables</a></li>
                        <li><a href="#">Tasty Snacks</a></li>
                        <li><a href="#">Meal for whole family</a></li>
                    </ul>
                </div>
                <div class="widget social">
                    <h4 class="title">Connect With Us</h4>
                    <ul class="link">
                        <li class="facebook"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li class="twitter"><a href="#"><i class="fab fa-twitter"></i></a></li>
                    </ul>
                </div>
            </div>
            <!-- End Side Menu -->

        </nav>
        <!-- End Navigation -->

    </header>
    <!-- End Header -->
</template>

<script>
export default {
    name : "HeaderCom",
};
</script>

<style>

</style>