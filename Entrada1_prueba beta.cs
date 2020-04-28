
    void Main()
    {
        /*
        #################### Archivo de entrada #1 #################
        ## El objetivo de este archivo es evaluar el manejo   ######
        ## correcto de la tabla de simbolos.                  ######
        ## Los tipos aceptados son:                           ######
        ####### Int
        ####### Float
        ####### Char
        ####### String
        ####### Boolean
        */
        //Declaraciones basicas
        int x,y,z =520; // x=520 ,y=520 ,z = 520
        double x1,y1,z1 = 3.14; // x1 = 3.14, 3.14, 3.14
        bool x2,y2,z2 = true; // x2 = true, y2=true, z2= true
        char x3,y3,z3 = 'x'; // x3='x' , y3='x', z3='x'
        string x4,y4,z4 = "CadenaDefecto"; // x4="CadenaDefecto", y4="CadenaDefecto", z4="CadenaDefecto"


        /*----------------------------------------------------------------------------
        --------------------- 1ra. Area: HTML
        ----------------------------------------------------------------------------*/

        Console.Write('

            <!DOCTYPE html>

            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>USAC</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="description" content="Free HTML5 Website Template by FreeHTML5.co" />
                <meta name="keywords" content="free website templates, free html5, free template, free bootstrap, free website template, html5, css3, mobile first, responsive" />
                <meta name="author" content="FreeHTML5.co" />

                <!-- Facebook and Twitter integration -->
                <meta property="og:title" content=""/>
                <meta property="og:image" content=""/>
                <meta property="og:url" content=""/>
                <meta property="og:site_name" content=""/>
                <meta property="og:description" content=""/>
                <meta name="twitter:title" content="" />
                <meta name="twitter:image" content="" />
                <meta name="twitter:url" content="" />
                <meta name="twitter:card" content="" />

                <!-- Bootstrap  -->
                <link rel="stylesheet" href="css/bootstrap.css">
                <!-- Owl Carousel  -->
                <link rel="stylesheet" href="css/owl.carousel.css">
                <link rel="stylesheet" href="css/owl.theme.default.min.css">
                <!-- Animate.css -->
                <link rel="stylesheet" href="css/animate.css">
                <!-- Font Awesome -->
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

                <!-- Theme style  -->
                <link rel="stylesheet" href="css/style.css">
            </head>
        ');


        Console.Write(">>>>>>>>> Enteros <<<<<<<<<<<<<<<<");
        Console.Write("x debe ser 520, segun la tabla de simbolos tiene ["+x+"]");
        Console.Write("y debe ser 520, segun la tabla de simbolos tiene ["+y+"]");
        Console.Write("z debe ser 520, segun la tabla de simbolos tiene ["+z+"]");
        Console.Write(">>>>>>>>> Float  <<<<<<<<<<<<<<<<<");
        Console.Write("X1 debe ser 3.14, segun la tabla de simbolos tiene ["+x1+"]");
        Console.Write("y1 debe ser 3.14, segun la tabla de simbolos tiene ["+y1+"]");
        Console.Write("z1 debe ser 3.14, segun la tabla de simbolos tiene ["+z1+"]");
        Console.Write(">>>>>>>>> Bool  <<<<<<<<<<<<<<<<<");
        Console.Write("X2 debe ser true, segun la tabla de simbolos tiene ["+x2+"]");
        Console.Write("y2 debe ser true, segun la tabla de simbolos tiene ["+y2+"]");
        Console.Write("z2 debe ser true, segun la tabla de simbolos tiene ["+z2+"]");
        Console.Write(">>>>>>>>> Char  <<<<<<<<<<<<<<<<<");
        Console.Write("X3 debe ser x, segun la tabla de simbolos tiene ["+x3+"]");
        Console.Write("y3 debe ser x, segun la tabla de simbolos tiene ["+y3+"]");
        Console.Write("z3 debe ser x, segun la tabla de simbolos tiene ["+z3+"]");
        Console.Write(">>>>>>>>> String  <<<<<<<<<<<<<<<<<");
        Console.Write("X4 debe ser CadenaDefecto, segun la tabla de simbolos tiene ["+x4+"]");
        Console.Write("y4 debe ser CadenaDefecto, segun la tabla de simbolos tiene ["+y4+"]");
        Console.Write("z4 debe ser CadenaDefecto, segun la tabla de simbolos tiene ["+z4+"]");
        Console.Write("Si funciona todo, hasta el momento tengo 40 pts.");
        Console.Write("    ");
        Console.Write("    ");
        Console.Write("    ");


        /*----------------------------------------------------------------------------
        --------------------- 2ra. Area: HTML
        ----------------------------------------------------------------------------*/

        Console.Write('



                <body>




                <div id="page-wrap">


                    <!-- ==========================================================================================================
                                                                       HERO
                         ========================================================================================================== -->

                    <div id="fh5co-hero-wrapper">
                        <nav class="container navbar navbar-expand-lg main-navbar-nav navbar-light">
                            <a class="navbar-brand" href="">COMPILADORES 1 - PRACTICA 2</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav nav-items-center ml-auto mr-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" onclick="$('#fh5co-features').goTo();return false;">Features</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" onclick="$('#fh5co-reviews').goTo();return false;">Reviews</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#"  onclick="$('#fh5co-download').goTo();return false;">Download</a>
                                    </li>
                                </ul>
                                <div class="social-icons-header">
                                    <a href="https://www.facebook.com/fh5co"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://freehtml5.co"><i class="fab fa-instagram"></i></a>
                                    <a href="https://www.twitter.com/fh5co"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </nav>

                        <div class="container fh5co-hero-inner">
                            <h1 class="animated fadeIn wow" data-wow-delay="0.4s">A Free HTML5 App Template Built with Bootstrap 4</h1>
                            <p class="animated fadeIn wow" data-wow-delay="0.67s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptates, aliquid soluta distinctio dolorum tenetur. </p>
                            <button class="btn btn-md download-btn-first wow fadeInLeft animated" data-wow-delay="0.85s" onclick="$('#fh5co-download').goTo();return false;">Download</button>
                            <button class="btn btn-md features-btn-first animated fadeInLeft wow" data-wow-delay="0.95s" onclick="$('#fh5co-features').goTo();return false;">Features</button>
                            <img class="fh5co-hero-smartphone animated fadeInRight wow" data-wow-delay="1s" src="img/phone-image.png" alt="Smartphone">
                        </div>


                    </div> <!-- first section wrapper -->


                    <!-- ==========================================================================================================
                                                                     ADVANTAGES
                         ========================================================================================================== -->

                    <div class="fh5co-advantages-outer">
                        <div class="container">
                            <h1 class="second-title"><span class="span-perfect">Perfect</span> <span class="span-features">Features</span></h1>
                            <small>Only necessary</small>

                            <div class="row fh5co-advantages-grid-columns wow animated fadeIn" data-wow-delay="0.36s">

                                <div class="col-sm-4">
                                    <img class="grid-image" src="img/icon-1.png" alt="Icon-1">
                                    <h1 class="grid-title">Usability</h1>
                                    <p class="grid-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cupiditate.</p>
                                </div>

                                <div class="col-sm-4">
                                    <img class="grid-image" src="img/icon-2.png" alt="Icon-2">
                                    <h1 class="grid-title">Parallax Effect</h1>
                                    <p class="grid-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cupiditate.</p>
                                </div>

                                <div class="col-sm-4">
                                    <img class="grid-image" src="img/icon-3.png" alt="Icon-3">
                                    <h1 class="grid-title">Unlimited Colors</h1>
                                    <p class="grid-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cupiditate.</p>
                                </div>


                            </div>
                        </div>
                    </div>


                    <!-- ==========================================================================================================
                                                                      SLIDER
                         ========================================================================================================== -->

                    <div class="fh5co-slider-outer wow fadeIn" data-wow-delay="0.36s">
                        <h1>SIMPLE WIDGETS</h1>
                        <small>Drag and Drop</small>
                        <div class="container fh5co-slider-inner">

                            <div class="owl-carousel owl-theme">

                                <div class="item"><img src="img/smartphone-2.png" alt=""></div>
                                <div class="item"><img src="img/smartphone-2.png" alt=""></div>
                                <div class="item"><img src="img/iphone.png" alt=""></div>
                                <div class="item"><img src="img/smartphone-2.png" alt=""></div>


                            </div>

                        </div>
                    </div>


                    <!-- ==========================================================================================================
                                                                      FEATURES
                         ========================================================================================================== -->

                    <div class="curved-bg-div wow animated fadeIn" data-wow-delay="0.15s"></div>
                    <div id="fh5co-features" class="fh5co-features-outer">
                        <div class="container">

                            <div class="row fh5co-features-grid-columns">

                                <div class="col-sm-6 in-order-1 wow animated fadeInLeft" data-wow-delay="0.22s">
                                    <div class="col-sm-image-container">
                                        <img class="img-float-left" src="img/smartphone-1.png" alt="smartphone-1">
                                        <span class="span-new">NEW</span>
                                        <span class="span-free">Free</span>
                                    </div>
                                </div>

                                <div class="col-sm-6 in-order-2 sm-6-content wow animated fadeInRight" data-wow-delay="0.22s">
                                    <h1>New Features</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor iste beatae ad adipisci, fugiat dignissimos pariatur, dolore nemo suscipit cum nisi earum voluptates nulla! </p>
                                    <span class="circle circle-first"><i class="fab fa-instagram"></i></span>
                                    <span class="circle circle-middle"><i class="fab fa-facebook"></i></span>
                                    <span class="circle circle-last"><i class="fab fa-twitter"></i></span>
                                </div>

                                <div class="col-sm-6 in-order-3 sm-6-content wow animated fadeInLeft" data-wow-delay="0.22s">
                                    <h1>REAL-TIME STATISTICS</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor iste beatae ad adipisci, fugiat dignissimos pariatur, dolore nemo suscipit cum nisi earum voluptates nulla! </p>
                                    <span class="circle circle-first"><i class="fas fa-star"></i></span>
                                    <span class="circle circle-middle"><i class="far fa-star"></i></span>
                                    <span class="circle circle-last"><i class="far fa-thumbs-up"></i></span>
                                </div>

                                <div class="col-sm-6 in-order-4 wow animated fadeInRight" data-wow-delay="0.22s">
                                    <img class="img-float-right" src="img/smartphone-2.png" alt="smartphone-2">
                                </div>

                                <div class="col-sm-6 in-order-5 wow animated fadeInLeft" data-wow-delay="0.22s">
                                    <div class="col-sm-image-container">
                                        <img class="img-float-left" src="img/smartphone-2.png" alt="smartphone-3">
                                        <span class="span-data">DATA</span>
                                        <span class="span-percent">100%</span>
                                    </div>
                                </div>
                                <div class="col-sm-6 in-order-6 sm-6-content wow animated fadeInRight" data-wow-delay="0.22s">
                                    <h1>POWERFUL BACKEND</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor iste beatae ad adipisci, fugiat dignissimos pariatur, dolore nemo suscipit cum nisi earum voluptates nulla! </p>
                                    <span class="circle circle-first">95%</span>
                                    <span class="circle circle-middle"><i class="fas fa-forward"></i></span>
                                    <span class="circle circle-last"><i class="fab fa-github"></i></span>

                                </div>




                            </div> <!-- row -->


                        </div>
                    </div>


                    <!-- ==========================================================================================================
                                                                      REVIEWS
                         ========================================================================================================== -->

                    <div id="fh5co-reviews" class="fh5co-reviews-outer">
                        <h1>What people are saying</h1>
                        <small>Reviews</small>
                        <div class="container fh5co-reviews-inner">
                            <div class="row justify-content-center">
                                <div class="col-sm-5 wow fadeIn animated" data-wow-delay="0.25s">
                                    <img class="float-left" src="img/quotes-1.jpg" alt="Quote 1">
                                    <p class="testimonial-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis similique quasi.</p>
                                    <small class="testimonial-author">John Doe</small>
                                    <img class="float-right" src="img/quotes-2.jpg" alt="Quote 2">
                                </div>
                                <div class="col-sm-5 testimonial-2 wow fadeIn animated" data-wow-delay="0.67s">
                                    <img class="float-left" src="img/quotes-1.jpg" alt="Quote 1">
                                    <p class="testimonial-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis similique quasi.</p>
                                    <small class="testimonial-author">Someone</small>
                                    <img class="float-right" src="img/quotes-2.jpg" alt="Quote 2">
                                </div>
                            </div>

                        </div>
                    </div>


                    <!-- ==========================================================================================================
                                                                 BOTTOM
                    ========================================================================================================== -->

                    <div id="fh5co-download" class="fh5co-bottom-outer">
                        <div class="overlay">
                            <div class="container fh5co-bottom-inner">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <h1>How to download the app?</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque suscipit, similique animi saepe, ipsam itaque, tempore minus maxime pariatur error unde fugit tenetur.</p>
                                        <a class="wow fadeIn animated" data-wow-delay="0.25s" href="#"><img class="app-store-btn" src="img/app-store-icon.png" alt="App Store Icon"></a>
                                        <a class="wow fadeIn animated" data-wow-delay="0.67s" href="#"><img class="google-play-btn" src="img/google-play-icon.png" alt="Google Play Icon"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- ==========================================================================================================
                                                               SECTION 7 - SUB FOOTER
                    ========================================================================================================== -->

                    <footer class="footer-outer">
                        <div class="container footer-inner">

                            <div class="footer-three-grid wow fadeIn animated" data-wow-delay="0.66s">
                                <div class="column-1-3">
                                    <h1>App</h1>
                                </div>
                                <div class="column-2-3">
                                    <nav class="footer-nav">
                                        <ul>
                                            <a href="#" onclick="$('#fh5co-hero-wrapper').goTo();return false;"><li>Home</li></a>
                                            <a href="#" onclick="$('#fh5co-features').goTo();return false;"><li>Features</li></a>
                                            <a href="#" onclick="$('#fh5co-reviews').goTo();return false;"><li>Reviews</li></a>
                                            <a href="#" onclick="$('#fh5co-download').goTo();return false;"><li class="active">Download</li></a>
                                        </ul>
                                    </nav>
                                </div>
                                <div class="column-3-3">
                                    <div class="social-icons-footer">
                                        <a href="https://www.facebook.com/fh5co"><i class="fab fa-facebook-f"></i></a>
                                        <a href="https://freehtml5.co"><i class="fab fa-instagram"></i></a>
                                        <a href="https://www.twitter.com/fh5co"><i class="fab fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>

                            <span class="border-bottom-footer"></span>

                            <p class="copyright">&copy; 2018 App. All rights reserved. Design by <a href="https://freehtml5.co" target="_blank">FreeHTML5</a>.</p>

                        </div>
                    </footer>




                </div> <!-- main page wrapper -->


                    <script src="js/jquery.min.js"></script>
                    <script src="js/bootstrap.js"></script>
                    <script src="js/owl.carousel.js"></script>
                    <script src="js/wow.min.js"></script>
                    <script src="js/main.js"></script>
                </body>
        ');


        //Asignacion y expresiones aritmeticas...........
        x = 50*2+10/2; //105
        y = 3*3+5-2; //12
        z = (10*5)-(45/3)+5; //40
        Console.Write(">>>>>>>>> Enteros <<<<<<<<<<<<<<<<");
        Console.Write("x debe ser 105, segun la tabla de simbolos tiene ["+x+"]");
        Console.Write("y debe ser 12, segun la tabla de simbolos tiene ["+y+"]");
        Console.Write("z debe ser 40, segun la tabla de simbolos tiene ["+z+"]");
        x1 = 3.14*10.20+5.20/2.60; //34.028
        y1 = 7.36+(5.12/2.00)-(3.16*2.00); //3.6
        z1 = 5.5+(4.4-2.3)*0.5; //6.55
        Console.Write(">>>>>>>>> Float <<<<<<<<<<<<<<<<");
        Console.Write("X1 debe ser 34.028, segun la tabla de simbolos tiene ["+x1+"]");
        Console.Write("y1 debe ser 3.6, segun la tabla de simbolos tiene ["+y1+"]");
        Console.Write("z1 debe ser 6.55, segun la tabla de simbolos tiene ["+z1+"]");
        x2 = true;//true
        y2 = false;//false
        z2 =2;//false
        Console.Write(">>>>>>>>> Bool  <<<<<<<<<<<<<<<<<");
        Console.Write("X2 debe ser true, segun la tabla de simbolos tiene ["+x2+"]");
        Console.Write("y2 debe ser false, segun la tabla de simbolos tiene ["+y2+"]");
        Console.Write("z2 debe ser false, segun la tabla de simbolos tiene ["+z2+"]");
        x3 = 'a';
        y3 = 'b';
        z3 = 'c';
        Console.Write(">>>>>>>>> Char  <<<<<<<<<<<<<<<<<");
        Console.Write("X3 debe ser a, segun la tabla de simbolos tiene ["+x3+"]");
        Console.Write("y3 debe ser b, segun la tabla de simbolos tiene ["+y3+"]");
        Console.Write("z3 debe ser c, segun la tabla de simbolos tiene ["+z3+"]");
        x4 = "Cadena de prueba";
        y4 = "Cadena de prueba";
        z4 = "Cadena de prueba";
        Console.Write(">>>>>>>>> String  <<<<<<<<<<<<<<<<<");
        Console.Write("X4 debe ser Cadena de prueba 1, segun la tabla de simbolos tiene ["+x4+"]");
        Console.Write("y4 debe ser Cadena de prueba 2, segun la tabla de simbolos tiene ["+y4+"]");
        Console.Write("z4 debe ser Cadena de prueba 3, segun la tabla de simbolos tiene ["+z4+"]");
        Console.Write("Si funciona todo, hasta el momento tengo 70 pts.");

        Console.Write(">>>>>>>>>>>>>>> CASO #1 <<<<<<<<<<<<<<<<<<<");
        double sueldo=10500.70;
    	if (sueldo>3000)
        {
    	    Console.Write("Esta persona debe abonar impuestos");
    	}
        Console.Write(">>>>>>>>>>>>>>> CASO #2 <<<<<<<<<<<<<<<<<<<");
        int num1, num2;
        num1 = 10;
        num2 = 20;
        if (num1 > num2)
        {
            Console.Write("Esta mal "+num1);
        }
        else
        {
            Console.Write("Esta bien "+num2);
        }
        Console.Write(">>>>>>>>>>>>>>> CASO #3 <<<<<<<<<<<<<<<<<<<");
        int nota1,nota2,nota3;
    	nota1=8;
    	nota2=5;
    	nota3=9;
        double promedio;
        promedio=(nota1 + nota2 + nota3) / 3;
    	if (promedio>=7)
        {
    	    Console.Write("Promocionado con [7.33]"+promedio);
    	}
        Console.Write(">>>>>>>>>>>>>>> CASO #4 <<<<<<<<<<<<<<<<<<<");
        int num;
    	num=9;
    	if ((num*1)<(10+0))
        {
    	    Console.Write("Esta bien, Tiene un dígito");
    	}
        else
        {
    	    Console.Write("Esta mal, Tiene dos dígitos");
    	}
        Console.Write("(x+50-10/2)*2= 190 R://");

        Console.Write('</html>');
    }
