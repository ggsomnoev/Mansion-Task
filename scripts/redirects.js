(()=> {    
    //Redirects
    const domainLink = "http://play.casino.com";
    $(".skip").click(() => {
        window.open(domainLink, "_blank");
    });
    $(".game-slide__btn").click(() => {
        window.open(domainLink, "_blank");
    });
    $(".playNow").click(() => {
        window.open(domainLink + "/casino-games/", "_blank");
    });
    $(".promotions").click(() => {
        window.open(domainLink + "/promotions/", "_blank");
    });
})();