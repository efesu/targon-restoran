(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Header carousel text animation
    let $headerCarousel = $('#header-carousel');
    $headerCarousel.on('slid.bs.carousel', function (e) {
        let $currentSlide = $(e.relatedTarget);
        $currentSlide.find('.animated').each(function () {
            let $elem = $(this);
            let animationName = $elem.data('animation');
            // If data-animation is not set, try to infer from classes or default
            // Here we assume 'slideInLeft' based on HTML
            if (!animationName) {
                if ($elem.hasClass('slideInLeft')) animationName = 'slideInLeft';
                // Add others if needed
            }
            
            $elem.removeClass('animated ' + animationName).css('opacity', '0');
            setTimeout(function () {
                $elem.addClass('animated ' + animationName).css('opacity', '1');
            }, 50);
        });
    });

    // Reset animations on slide start (optional, to hide them before they "slide in" again)
    $headerCarousel.on('slide.bs.carousel', function (e) {
        // Find the next slide
        let $nextSlide = $(e.relatedTarget);
        // Ensure opacity is 0 so they can fade/slide in
        $nextSlide.find('.animated').css('opacity', '0');
    });

    // İletişim Formu İşlemleri
    if ($("#contactForm").length > 0) {
        $('#contactForm').on('submit', function (e) {
            e.preventDefault();
            
            let $form = $(this);
            let $btn = $form.find('#sendMessageButton');
            let $alert = $form.find('#contactSuccess');
            let originalText = $btn.text();

            // 1. Loading State
            $btn.prop('disabled', true).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Gönderiliyor...');
        $alert.addClass('d-none');

        // 2. İşlem Gecikmesi (Müşteri Hizmetleri Mantığı)
        setTimeout(function () {
            // 3. Generate Random Ticket ID
            let ticketId = Math.floor(Math.random() * 90000) + 10000;
            
            // 4. Success Message
            let successMessage = `<strong>Başarılı!</strong> Mesajınız Müşteri Hizmetlerine iletildi.<br>Destek Talebi No: <strong>#${ticketId}</strong><br>En kısa sürede dönüş yapılacaktır.`;
            $alert.html(successMessage).removeClass('d-none').addClass('show');

            // 5. Reset Form
            $form[0].reset();
            $btn.prop('disabled', false).text(originalText);
            
            // Auto hide alert after 10 seconds
            setTimeout(function() {
                $alert.addClass('d-none').removeClass('show');
            }, 10000);

        }, 2000); // 2 seconds delay
    });
    }
    
})(jQuery);

