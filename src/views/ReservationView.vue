<template>
  <header-com></header-com>
        <!-- Start Breadcrumb 
    ============================================= -->
    <div class="breadcrumb-area shadow text-center dark bg-fixed text-light" style="background-image: url(frontend/img/bg-reservation.jpg);">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Reservation</h1>
                    <ul class="breadcrumb">
                        <li><a href="#"><i class="fas fa-home"></i> Home</a></li>
                        <li><a href="#">Pages</a></li>
                        <li class="active">Reservation</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- End Breadcrumb -->

    <!-- Start Reservation
    ============================================= -->
    <div class="reservation about-area default-padding">
        <div class="container">
            <div class="row">
                <div class="reservation-items about-items">
                    <div class="col-md-7 info">
                        <h2>How do i make raservations</h2>
                        <p>
                            Pleased anxious or as in by viewing forbade minutes prevent. Too leave had those get being led weeks blind. Had men rose from down lady able. Its son him ferrars proceed six parlors.
                        </p>
                        <p>
                           Advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket.
                        </p>
                        <div class="address">
                            <ul>
                                <li>
                                    <span>Address</span>
                                    <p>
                                        22 Baker Street, London, United Kingdom, W1U 3BW
                                    </p>
                                </li>
                                <li>
                                    <span>Phone</span>
                                    <p>
                                        +123 456 7890
                                    </p>
                                </li>
                                <li>
                                    <span>Email</span>
                                    <p>
                                        support@restcafe.com
                                    </p>
                                </li>
                            </ul>
                        </div>
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
                                                <option value="3">3 Person</option>
                                                <option value="4">4 Person</option>
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
    <!-- End Reservation -->
  <footer-com></footer-com>
  
</template>

<script>
import FooterCom from '@/components/FooterCom.vue';
import HeaderCom from '@/components/HeaderCom.vue';


export default {
  components: { FooterCom,HeaderCom},
    name : 'ReservationView',
}









</script>

<style>

</style>