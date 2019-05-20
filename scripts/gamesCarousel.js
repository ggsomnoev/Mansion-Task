(() => {
    let listOfElems = $(".slider-container--gamebox");
    let slidesToShow = listOfElems.length;

    let slideIndex = 1, currentSlide = 1;
    showSlides(slideIndex);

    function showSlides() {
        hideAllSlides();
        if (slideIndex < 1) { slideIndex = listOfElems.length };
        if (slideIndex > listOfElems.length) { slideIndex = 1 };
        currentSlide = slideIndex;
        for (let i = 0; i < slidesToShow; i++) {
            $(listOfElems[currentSlide - 1]).toggleClass("hidden");
            currentSlide += 1;
            if (currentSlide < 1) { currentSlide = listOfElems.length };
            if (currentSlide > listOfElems.length) { currentSlide = 1 };
        }
        setTimeout(() => {
            $(".slider-container__slides").addClass("animate");
        }, 1);
    }
    function hideAllSlides() {
        for (let i = 0; i < listOfElems.length; i++) {
            $(listOfElems[i]).toggleClass("hidden");
        }
        $(".slider-container__slides").removeClass("animate");
    }


    $(".slider-container__prev-slide").click(() => {
        slideIndex -= 1;
        showSlides();
        let element = $(listOfElems[slideIndex - 1]);
        $(listOfElems[slideIndex - 1]).remove();
        $(".slider-container__slides").prepend(element);
    });


    $(".slider-container__next-slide").click(() => {
        let element = $(listOfElems[slideIndex - 1]);
        $(listOfElems[slideIndex - 1]).remove();
        $(".slider-container__slides").append(element);
        slideIndex += 1;
        showSlides();
    });

    //Mobile - not working :(
    $(".slider-container").on("swipeleft", (e) => {
        $(".slider-container__prev-slide").click();
    });
    $(".slider-container").on("swiperight", (e) => {
        $(".slider-container__next-slide").click();
    });

})()