function initSlick2(number = 5) {
    /*[ Slick2 ]
        ===========================================================*/
    $('#recommendation .slick2').slick({
        slidesToShow: Math.min(4, number),
        slidesToScroll: 4,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        appendArrows: $('#recommendation .wrap-slick2'),
        prevArrow:'<button class="arrow-slick2 prev-slick2"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow:'<button class="arrow-slick2 next-slick2"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: Math.min(4, number),
                    slidesToScroll: Math.min(4, number),
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: Math.min(3, number),
                    slidesToScroll: Math.min(3, number),
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: Math.min(2, number),
                    slidesToScroll: Math.min(2, number),
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: Math.min(1, number),
                    slidesToScroll: Math.min(1, number),
                }
            }
        ]
    });
};

const recosSimilar = [
    { name: "White Zip Design Random Floral Print V-neck Cami", price: 17.48, description: "Sleeveless floral cami from our Yoins collection. In a vacation-look floral print made with zip design. Perfect with jeans for a fashion look.", image_url: "assets/img/reco_1.jpg", sku: "SKUB35818" },
    { name: "Green Zipper Design Random Floral Print V-neck Cami", price: 13.09, description: "A must have cami top featuring zipper front. In a woven bodice with a floral print. Has V neckline with spaghetti straps and boxy fit. Looks perfect with denim bottoms and ankle strap heels!", image_url: "assets/img/reco_2.jpg", sku: "SKU917557" },
    { name: "White Random Floral Print V-neck Cami Top with Zip Design", price: 17.48, description: "This cami is our current obsession and it is a must have item. Featuring random floral print, v-neck design, sleeveless design and zip design. Perfect with shorts or jeans.", image_url: "assets/img/reco_3.jpg", sku: "SKU794391" },
    { name: "Random Floral Print Tiered Design V-neck Cami", price: 18.95, description: "This floral print camis would be a perfect companion in the summer, at the beach or on tropical holiday. This cami features tiered design with sleeveless design, asymmetrical hem details. Unique style and comfortable wear.", image_url: "assets/img/reco_4.jpg", sku: "SKUB78443" },
    { name: "Black Spaghetti Strap Radom Floral Print V-neck Cami", price: 11.63, description: "This floral print cami is vivid color and suitable for many occasions Wear it with jeans and shorts would make you looks adorable. Spaghetti strap design is special.", image_url: "assets/img/reco_5.jpg", sku: "SKUB18028" },
    { name: "White Random Floral Print Tie-up Front Bell Sleeves Crop Top", price: 20.41, description: "This sexy crop top features V neckline, long bell sleeves and tie-up front design. Style with trousers and strappy heels to finish off this look.", image_url: "assets/img/reco_6.jpg", sku: "SKU912436" },
    { name: "Black Tie-up Design Random Floral Print Deep V Neck Crop Top", price: 7.24, description: "This sexy crop top is definitely the perfect top for this season. It features tie-up design and floral print. Look chic in this adorable number with a hot pants.", image_url: "assets/img/reco_7.jpg", sku: "SKUB43444" },
    { name: "Blue Floral Print Deep V Neck Knotted Design Crop Top", price: 14.56, description: "Look totally dreamy in this floral print crop top. Unique style to make you special. Sexy and eye-catching, great for summer. Sexy and fashion style fit for dating, going out, holiday, cocktail, beach, party, prom.", image_url: "assets/img/reco_8.jpg", sku: "SKUB78273" },
    { name: "Sunflower Print Off The Shoulder Ruffle Trim Blouse", price: 18.95, description: "A warmly sunflower print makes this breezy blouse an A+ choice. The ruffle trim is totally trendy, and off-the-shoulder design make you more sexy. Pair it with hat for relax holiday look. If you like, you can also wear it as halter blouse.", image_url: "assets/img/reco_9.jpg", sku: "SKUB96599" },
    { name: "Random Floral Print Tank Top", price: 18.95, description: "We are currently obsessing over this top. It adorned with floral print, sleeveless. Style it with leggings will be perfect.", image_url: "assets/img/reco_10.jpg", sku: "SKU662851" },
];

const recosTrending = [
    { name: "White Beige Thin Shoulder Cold Shoulder Long Sleeve T-shirt", price: 16.02, description: "This pure color tee gives your casual t-shirt a sexy flair. This top features cold shoulder design with thin shoulder and long sleeves. It's perfect with your skinny jeans or cutoff shorts, depending on the weather.", image_url: "assets/img/trending_1.jpg", sku: "SKU767148" },
    { name: "Plus Size Black Lace Insert Cold Shoulder Short Sleeves T-shirts", price: 20.41, description: "Catch your eyes on this plus size lace insert t-shirt. It features cold shoulder, lace insert, cut out, backless, short sleeves and pleated design. Style it with pants.", image_url: "assets/img/trending_2.jpg", sku: "SKU900572" },
    { name: "Plus Size Black Lace Details Plain Off The Shoulder Dress", price: 20.41, description: "Edgy, chic, and classic the Roxy is the perfect party dress for a girl's night out.", image_url: "assets/img/trending_3.jpg", sku: "SKU898702" },
    { name: "Plus Size Black Cut Out Lace Detail Mini Dress", price: 29.19, description: "A fashion plus size mini dress feature with long sleeves, lace detail, round neck, and cut out design.", image_url: "assets/img/trending_4.jpg", sku: "SKUA34918" },
    { name: "Plus Size Black Ruffle Trim Mesh Blouse", price: 26.26, description: "A plus size features ruffle trim, mesh detail, see-through design, and round neck. Pair it with jeans and a coat will be perfect.", image_url: "assets/img/trending_5.jpg", sku: "SKUA50426" },
    { name: "Plus Size Navy Random Floral Print Cold Shoulder Dress", price: 16.02, description: "Here is a fashion style cold shoulder dress for you. Basic in black color, short sleeves, scoop neck design. Floral print is the feature of this dress.", image_url: "assets/img/trending_6.jpg", sku: "SKUB77000" },
    { name: "Plus Size Navy Knotted Floral Print Cold Shoulder Tee", price: 16.02, description: "This navy cold shoulder top is a beaut! This navy cami top is in a soft polyester fabric with a knotted detail.", image_url: "assets/img/trending_7.jpg", sku: "SKUB42058" },
    { name: "Plus Size Black Back Lace Details 3/4 Length sleeves Blouse", price: 23.34, description: "A crinkle woven top featuring a scoop neckline, button-loop keyhole closure at back, front ornate lace overlay with scalloped edging, long sleeves with button-loop cuffs, and a billowy silhouette.", image_url: "assets/img/trending_8.jpg", sku: "SKU957252" },
    { name: "Plus Size Black Lace Detail Romper", price: 29.19, description: "A fashion plus size romper features with lace detail, long sleeve, and round neck design. Pair it with the high heel to make a fashion look!", image_url: "assets/img/trending_9.jpg", sku: "SKUA14399" },
    { name: "Plus Size Black Floral Print Deep V Neck Blouse", price: 17.48, description: "Bring attention to this blouse, it is in fashion and sexy style, it ensure all eyes will on you when you in it. It is adorned with floral print, bell sleeves and deep v neckÂ design. Pair it with high waist jeans will be perfect!", image_url: "assets/img/trending_10.jpg", sku: "SKUB55588" },
];

const recosBestSelling = [
    { name: "Plus Size Color Block Lace Detail Mini Dress", price: 35.04, description: "A fashion plus size dress feature with 3/4 length sleeves, lace detail, v-neck, bodycon hem, and color block.", image_url: "assets/img/trending_3.jpg", sku: "SKUA51627" },
    { name: "Plus Size Red Sequin Mini Dress", price: 32.11, description: "A fashion plus size dress feature with long sleeves, sequin design, bodycon fit, bodycon hem, and mini. Perfect with high heels to the party!", image_url: "assets/img/best_2.jpg", sku: "SKUA73783" },
    { name: "Plus Size Black Sequin Mini Dress", price: 29.19, description: "A fashion plus size dress feature with long sleeves, sequin design, bodycon fit, bodycon hem, and mini. Perfect with high heels to the party!", image_url: "assets/img/best_3.jpg", sku: "SKUA73784" },
    { name: "Plus Size Blue Sequin Mini Dress", price: 32.11, description: "A fashion plus size dress feature with long sleeves, sequin design, bodycon fit, bodycon hem, and mini. Perfect with high heels to the party!", image_url: "assets/img/best_4.jpg", sku: "SKUA73785" },
    { name: "Plus Size Green Floral Print Mini Dress", price: 23.34, description: "A fashion plus size dress feature with long sleeves, floral print, curved hem, mini, and round neck.", image_url: "assets/img/best_5.jpg", sku: "SKUA71633" },
    { name: "Plus Size Green Cold Shoulder Short Sleeves T-shirt", price: 14.56, description: "Are you looking for a plus size women t-shirt for this summer? Then don't miss it!! It is adorned with cold shoulder, short sleeves and spaghetti. Pair it with your jeans will be perfect!!!", image_url: "assets/img/best_6.jpg", sku: "SKU923755" },
    { name: "Plus Size Color Block Plaid Self-Tie Shirt Mini Dress", price: 35.04, description: "A fashion plus size dress feature with color block", image_url: "assets/img/best_7.jpg", sku: "SKUA74275" },
    { name: "Plus Size Black Tiered Cape Midi Dress", price: 45.28, description: "A fashion plus size dress feature with cape design, midi, v-neck design, and bodycon hem. Perfect to with the high heels to make a fashion look!", image_url: "assets/img/best_8.jpg", sku: "SKUA81929" },
    { name: "Plus Size White Lace Insert Random Floral Print Dress", price: 20.41, description: "This white dress with floral print design and crochet lace embellished design would make you look in good shape and suit for many occasions such as vacation, cocktail, party.", image_url: "assets/img/best_9.jpg", sku: "SKUB47872" },
    { name: "Plus Size Black Padded Design Polka Dot Scoop Neck Swimwear", price: 35.04, description: "This plus size swimwear, which has spaghetti strapless as the main show, polka dot decorating make it active in the crowd's attention. To show yourself wearing this different swimwear on the beach.", image_url: "assets/img/best_10.jpg", sku: "SKU908149" },
];

const recosInventory = [
    { name: "Blue Cold Shoulder 3/4 Length Sleeve T-shirt with Strappy Detail", price: 16.02, description: "This soft tee's worth freaking out over. This t-shirt features a round neckline and backline, cold shoulders, and curved hem, slouchy silhouette, and strappy detailing with cutouts at shoulders. Pair it with anything from shorts to skinnies.", image_url: "assets/img/invent_1.jpg", sku: "SKU393865" },
    { name: "Plunging Neck Crisscross Back Cami Playsuit", price: 23.34, description: "The cutest number has arrived to seriously shake up your entire wardrobe. Made from a lightweight fabric, this playsuit features thin spaghetti straps that crossover at the back and a plunging neckline. This stunner deserves to be seen! Strut your stuff and team it up with statement jewelled earrings and a nude lip for a kickass look!", image_url: "assets/img/invent_2.jpg", sku: "SKU391844" },
    { name: "Stripe Pattern Patch Design Long Sleeve Casual T-shirt", price: 18.95, description: "This t-shirt made from comfy fabric, comes in a variety of colours design and the stripe pattern and patch details are a style winner. Just throw on with jeans for a casual style look!", image_url: "assets/img/invent_3.jpg", sku: "SKU493466" },
    { name: "V-neck Overlay Dot Drint Cami Top in White", price: 7.24, description: "Who doesn't love a stylish singlet top? This dot print cami top is a perfect casual top featuring a singlet style with V neckline. Style it with white shorts and a fedora hat for a fresh look.", image_url: "assets/img/invent_4.jpg", sku: "SKU673952" },
    { name: "Navy Random Calico Print Strapless Playsuit", price: 18.95, description: "This strapless playsuit is pretty, elegant and perfect for dressing up or down! Featuring the strapless trend, high rise bottoms and invisible zipper at the center back. Style it with black wedge heels and bronzed makeup!", image_url: "assets/img/invent_5.jpg", sku: "SKU677229" },
    { name: "Apricot Feather Printing T-shirt With Cold Shoulder", price: 17.48, description: "Here is the fashion t-shirt for you. Featuring cold shoulder and feather printing. Wear this day and night is ok. Perfect with black leggings or casual shorts.", image_url: "assets/img/invent_6.jpg", sku: "SKU682191" },
    { name: "Plus Size Burgundy Lace Insert Flared Sleeves T-shirt", price: 21.87, description: "Popular color, lace detail, irregular and wide hem make you look thin. That'll make it your new favorite everyday tee.", image_url: "assets/img/invent_7.jpg", sku: "SKU921130" },
    { name: "Red Crossed Front Design V-neck Cold Shoulder Short Sleeves T-shirt", price: 13.09, description: "Featuring a cold shoulder details short sleeves and crossed front design, this flattering blouse is set to become a firm favourite in your wardrobe. Wear it for day with jeans or take it into evening with your trusty block heels.", image_url: "assets/img/invent_8.jpg", sku: "SKU921668" },
    { name: "Blue Summer Tribal Print Halter Camis", price: 16.02, description: "We all love tribal print for our daily. Halter design and sleeveless are more popular this summer. Perfectly to match a hot pants.", image_url: "assets/img/invent_9.jpg", sku: "SKU922830" },
    { name: "Plus Size Green Cold Shoulder Short Sleeves T-shirt", price: 14.56, description: "Are you looking for a plus size women t-shirt for this summer? Then don't miss it!! It is adorned with cold shoulder, short sleeves and spaghetti. Pair it with your jeans will be perfect!!!", image_url: "assets/img/invent_10.jpg", sku: "SKU923755" },
];

const recosSearch = [
    { name: "Plus Size Green Floral Print Mini Dress", price: 23.34, description: "A fashion plus size dress feature with long sleeves, floral print, curved hem, mini, and round neck.", image_url: "assets/img/search_1.jpg", sku: "SKUA71633" },
    { name: "Plus Size Elastic Strap Geometrical Print Dress", price: 23.34, description: "A vacation dresses with random geometrical print that will perfect for the beach.", image_url: "assets/img/search_2.jpg", sku: "SKU904195" },
    { name: "Plus Size Rose Floral Print Self-Tie Design Midi Dress", price: 42.36, description: "A fashion plus size midi dress feature with rose floral print, self-tie design, v-neck, 3/4 length sleeves, and warp design.", image_url: "assets/img/search_3.jpg", sku: "SKUA68219" },
    { name: "Plus Size Yellow Floral Print Pocket Detail Midi Dress", price: 27.73, description: "A fashion plus size dress features with floral print, pocket design, long sleeves, and round neck. Pair it with the high heel to make a fashion look!", image_url: "assets/img/search_4.jpg", sku: "SKUA27540" },
    { name: "Plus Size Green Floral Print Mini Dress", price: 23.34, description: "A fashion plus size dress feature with long sleeves, floral print, curved hem, mini, and round neck.", image_url: "assets/img/search_5.jpg", sku: "SKUA71633" },
    { name: "Plus Size Rose Floral Print Self-Tie Design Midi Dress", price: 42.36, description: "A fashion plus size midi dress feature with rose floral print, self-tie design, v-neck, 3/4 length sleeves, and warp design.", image_url: "assets/img/search_6.jpg", sku: "SKUA68219" },
    { name: "Plus Size White Random Floral Print Midi Dress", price: 26.26, description: "A woven wrap dress featuring an allover floral print, a surplice neckline, 3/4 bell sleeves, and a curved hem.", image_url: "assets/img/search_7.jpg", sku: "SKUA71632" },
    { name: "Plus Size Blue Random Floral Tribal Print V-neck Short Sleeves Dress", price: 29.19, description: "The plus size dress is great to have in your wardrobe! Featuring a floral print, a comfortable fit with v-neck. Style it with a high heels for a fashion look!", image_url: "assets/img/search_8.jpg", sku: "SKUB56901" },
    { name: "Plus Size Random Floral Crossed Front Design V-neck Dress", price: 24.8, description: "Here is a fashion style dress for you. Basic in multi color, short sleeves, v neck design. Floral print is the feature of this dress.", image_url: "assets/img/search_9.jpg", sku: "SKUB83467" },
    { name: "Plus Size Green Floral Print V-neck Self-tie Design Dress", price: 23.34, description: "This plus size dress is the first choice for your holiday. It features floral print and v neck design, you can take it with sandals. Just with it enjoy your time.", image_url: "assets/img/search_10.jpg", sku: "SKUA94343" },
];

function configSlide(number = 5, type = 'similar', keyword = null) {
    $('#recommendation').html('');
    const recos = keyword ? recosSearch.slice(0, number) :
        type === 'trending' ? recosTrending.slice(0, number) :
        type === 'bestSelling' ? recosBestSelling.slice(0, number) :
        type === 'inventory' ? recosInventory.slice(0, number) : recosSimilar.slice(0, number);
    $('#recommendation').addClass("real-recommendation")
        .addClass("animated")
        .append(
            "<section class=\"bgwhite p-b-105\">" +
            "  <div class=\"container\">" +
            "    <div class='input-group' id='searchBar'>" +
            "       <div class='input-group-prepend'><i class='fa fa-search input-group-text' style='line-height: inherit'></i></div>" +
            "       <input class='form-control' type='text' placeholder='Search products here' id='searchInput' />" +
            "       <div class=\"input-group-append\">" +
            "           <button class=\"btn search-clear\" type=\"button\" id=\"searchClear\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>" +
            "       </div>" +
            "    </div>" +
            "    <div class=\"sec-title p-b-10 mt-2\" id=\"widgetHeaderContainer\">" +
            "      <h4 class=\"recommended-details-heading t-center font-weight-bold\" id=\"widgetHeader\">" + "Recommended For You" + "</h4>" +
            "    </div>" +
            "    <!-- Slide2-->" +
            "    <div class=\"wrap-slick2\">" +
            "      <div class=\"slick2\" id=\"recommendedProducts\"></div>" +
            "      <div class=\"recommended-details trans-0-5 w-size-0 op-0-0 d-none\" id=\"recommendedDetails\" style=\"height: 250px\">" +
            "        <div class=\"recommended-details-container d-flex h-100 flex-wrap\">" +
            "         <div class=\"recommended-details-image wrap-pic-w p-t-30 p-b-30 p-l-15 p-r-15\" style=\"max-height: 360px\"><img style=\"height: 100%\" id=\"recommendedDetailsImage\"/></div>" +
            "         <div class=\"recommended-details-content p-t-30 p-b-30 p-l-15 p-r-50\" id=\"recommendedDetailsContent\">" +
            "           <h4 class=\"product-detail-name m-text16 p-b-13\" id=\"recommendedDetailsName\"></h4><span class=\"m-text17\" id=\"recommendedDetailsPrice\"></span>" +
            "           <p class=\"p-t-10\" id=\"recommendedDetailsDescription\"></p>" +
            "            <div id='addToCartButtonContainer'>" +
            "            </div>" +
            "           <div class=\"recommended-details-close\" id=\"recommendedDetailsClose\"><i class=\"fs-32 color1 fa fa-times\" aria-hidden=\"true\"></i></div>" +
            "         </div>" +
            "        </div>" +
            "      </div>" +
            "    </div>" +
            "  </div>" +
            "</section>"
        );

    recos.forEach(function (item) {
        $('#recommendation #recommendedProducts').append(
            "<div class=\"item-slick2 p-l-15 p-r-15 h-100\">" +
            "<div class=\"block2 h-100 d-flex flex-column\">" +
            "<div class=\"block2-img wrap-pic-w of-hidden pos-relative\">" +
            "<a class=\"recommended-product-image\" data-pid=\"" + item.sku + "\">" +
            "<img src=\"" + item.image_url + "\" alt=\"IMG-PRODUCT\">" +
            "</a>" +
            "<a href=\"javascript:void(0);\" class=\"block2-btn-more\">" +
            "<div class=\"btn-more-ctn flex-c-m shadow1 overlay-button\" data-pid=\"" + item.sku + "\" >" +
            "<i class=\"fa fa-bars btn-more fs-16\" />" +
            "</div>" +
            "</a>" +
            "</div>" +
            "<div class='d-flex flex-row flex-grow-1 flex-shrink-1'>" +
            "<div class='text product-name flex-grow-1 product-name'>" + item.name + "</div>" +
            "<div class='text price font-weight-bold product-price'>$" + item.price + "</div>" +
            "</div>" +
            "<button class=\"flex-c-m hov1 trans-0-4 ml-auto cta-button pl-2 pr-2 mt-2 btn text-white\">" + "Add to cart" + "</button>" +
            "</div>" +
            "</div>"
        );
    });


    $('#recommendation>.slick2').slick('unslick');
    initSlick2(number);

    $('#addToCartButtonContainer').append(
        "               <div class=\"btn-recommended-addcart size9 trans-0-4 m-t-10 m-b-10\" id=\"btn-recommended-addcart\">" +
        "                   <!-- Button-->" +
        "                   <button class=\"flex-c-m sizefull hov1 trans-0-4 cta-button btn text-white\">" + "Add to cart" + "</button>" +
        "               </div>"
    );


    //On Detail Click
    $(`#recommendation .btn-more-ctn`).click(function () {

        const slideHeight = $('#recommendation .wrap-slick2').css('height');
        const pid = $(this).data('pid');
        const item = recos.find(function (t){ return t.sku == pid });
        $('#recommendation .recommended-details').css('height', slideHeight);
        $(`#recommendation #recommendedDetailsName`).text(item.name);
        $(`#recommendation #recommendedDetailsPrice`).text(`$${item.price}`);
        $(`#recommendation #recommendedDetailsDescription`).text(item.description);
        $(`#recommendation #recommendedDetailsImage`).attr('src', item.image_url);
        $(`#recommendation #recommendedDetails`).removeClass('d-none');
        setTimeout(function () {
            $(`#recommendation #recommendedDetails`).addClass('flex-row').removeClass('w-size-0').removeClass('op-0-0').addClass('w-size-full');
        }, 300);
    });

    $(`#recommendation #recommendedDetailsClose`).click(function () {
        $(`#recommendation #recommendedDetails`).removeClass('w-size-full').addClass('op-0-0').addClass('w-size-0').removeClass('flex-row');
        setTimeout(function () {
            $(`#recommendation #recommendedDetails`).addClass('d-none');
        }, 500);
    });
    $('.real-recommendation').css('font-family', $('#fontSelect').val());
    $('.config #widgetHeaderContainer').css('display', $('#headerSwitch').is(':checked') ? 'block' : 'none');
    $('.config .product-name').css('display', $('#productNameSwitch').is(':checked') ? 'block' : 'none');
    $('.config .product-price').css('display', $('#priceSwitch').is(':checked') ? 'block' : 'none');
    $('.config .cta-button').css('display', $('#ctaButtonSwitch').is(':checked') ? 'block' : 'none');
    $('.config .overlay-button').css('display', $('#overlaySwitch').is(':checked') ? 'flex' : 'none');
    $('.config #searchBar').css('display', $('#searchSwitch').is(':checked') ? 'flex' : 'none');
    $('#widgetHeader').css('color', $('#headerColor').val());
    $('.product-name').css('color', $('#productNameColor').val());
    $('.product-price').css('color', $('#priceColor').val());
    $('.cta-button').css('background-color', $('#ctaButtonColor').val());
    $('#widgetHeader').text(keyword ? 'Search Results' : $('#headerText').val());
    $('.cta-button').text($('#ctaButtonText').val());
    if (keyword) {
        $('#searchInput').val(keyword);
    }

    $('#searchInput').on('change', function() {
        configSlide($('#numberSelect').val(), $('#filterSelect').val(), $(this).val());
    });

    $('#searchClear').on('click', function() {
        $('#searchInput').val('');
        configSlide($('#numberSelect').val(), $('#filterSelect').val());
    });
}

function updateCode() {
    $('#tagCode').text("<!-- Delvify Recommendation Tool -->" + "\n" +
        "<script type=\"text/script\">DelvifyRecommendation.init({" +
        "products:" + $('#numberSelect').val() + ";" +
        "type:" + $('#filterSelect').val() + ";" +
        "font:" + $('#fontSelect').val() + ";" +
        ($('#headerSwitch').is(':checked') ? `header:{color:"${$('#headerColor').val()}";text:"${$('#headerText').val()}";` : "") +
        ($('#productNameSwitch').is(':checked') ? `productName:{color:"${$('#productNameColor').val()}";` : "") +
        ($('#priceSwitch').is(':checked') ? `price:{color:"${$('#priceColor').val()}";` : "") +
        ($('#ctaButtonSwitch').is(':checked') ? `ctaButton:{color:"${$('#ctaButtonColor').val()}";text:"${$('#ctaButtonText').val()}";` : "") +
        ($('#overlaySwitch').is(':checked') ? "overlay:true;" : "") +
        ($('#searchSwitch').is(':checked') ? "search:true;" : "") +
        "websiteid:101;" +
        "})</script>" +
        "\n" + "<!-- Delvify Recommendation Tool -->"
    );
}

function promptPass() {
    let password = window.localStorage.getItem('avantLinkPassword') || prompt("Enter your Password");
    $.ajax({
        type: 'GET',
        url: "http://18.221.221.252:8081/api/password",
        data: { site: 'avantLink', password },
        success: function (result) {
            if (result !== 'OK') {
                alert("Incorrect Password");
                window.localStorage.removeItem('avantLinkPassword');
                return promptPass();
            } else {
                window.localStorage.setItem('avantLinkPassword', password);
            };
        },
        error: function (result) {
            alert("Incorrect Password");
            return promptPass();
        },
        async: false
    });
}

$(document).ready(function(){
    promptPass();
    $('#protectedContent').css('display', 'block');
    configSlide(5, 'similar');
    $('.select').on('change', function() {
        const id = $(this).attr('id');
        const font = $('#fontSelect').val();
        const number = $('#numberSelect').val();
        const type = $('#filterSelect').val();
        switch(id) {
            case 'numberSelect':
                configSlide(number, type);
                break;
            case 'filterSelect':
                configSlide(number, type);
                break;
            case 'fontSelect':
                $('.real-recommendation').css('font-family', font);
                break;
        }
        updateCode();
    });

    $('.switch').on('change', function () {
        const id = $(this).attr('id');
        const isChecked = $(this).is(':checked');
        switch(id) {
            case 'headerSwitch':
                $('#widgetHeaderContainer').css('display', isChecked ? 'block' : 'none');
                break;
            case 'productNameSwitch':
                $('.product-name').css('display', isChecked ? 'block' : 'none');
                break;
            case 'priceSwitch':
                $('.product-price').css('display', isChecked ? 'block' : 'none');
                break;
            case 'ctaButtonSwitch':
                $('.cta-button').css('display', isChecked ? 'block' : 'none');
                break;
            case 'overlaySwitch':
                $('.overlay-button').css('display', isChecked ? 'flex' : 'none');
                break;
            case 'searchSwitch':
                $('#searchBar').css('display', isChecked ? 'flex' : 'none');
                break;
        }
        updateCode();
    });

    if($('.color-picker').length > 0){
        $('.color-picker').colorpicker({}).on('changeColor', function (e) {
            const id = $(this).attr('id');
            const val = e.color.toHex();
            const label = $(`label[for=${id}]`);
            label.css('background-color', val);
            switch(id) {
                case 'headerColor':
                    $('#widgetHeader').css('color', val);
                    break;
                case 'productNameColor':
                    $('.product-name').css('color', val);
                    break;
                case 'priceColor':
                    $('.product-price').css('color', val);
                    break;
                case 'ctaButtonColor':
                    $('.cta-button').css('background-color', val);
                    break;
            }
            updateCode();
        });
    };

    $('.text-input').on('change', function () {
        const id = $(this).attr('id');
        const val = $(this).val();
        switch(id) {
            case 'headerText':
                $('#widgetHeader').text(val);
                break;
            case 'ctaButtonText':
                $('.cta-button').text(val);
                break;
        }
        updateCode();
    });

    updateCode();
    $('[data-toggle="tooltip"]').tooltip();
});