// Menu toggle
$(document).ready(function() {

    // funkcija za aktiviranje mobilnog menija
    $(".menu-btn").on("click", function() {
        $(".main-nav ul").toggleClass("showing");
        $(this).toggleClass("close");
    });

    //smooth scrolling
    $('.main-nav a').on('click', function(e) {
        
        // console.log(this.hash);
        if (this.hash !== '') {
            e.preventDefault(); 

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });
});

// lazy loading
window.lazyLoadOptions = {
    threshold: 0
};