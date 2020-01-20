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
    { name: "Black Ripped Details Skinny Leg Jeans", price: 21.87, description: "This jeans is in fashion style, we love it for its skinny design, ripped details and midi waist. Pairing it with any piece you love is OK!", image_url: "assets/img/trending_1.jpg", sku: "SKU828098" },
    { name: "White Cross Front Top", price: 10.17, description: "Here is the fashion top for you. Featuring sleeveless and cross front. Wear this day and night is ok. Perfect with black leggings or casual shorts.", image_url: "assets/img/trending_2.jpg", sku: "SKU670239" },
    { name: "Plus Size Pink Spaghetti Cold Shoulder Blouses", price: 26.26, description: "This plus size sexy cold shoulder shirt is adorned with spaghetti, cold shoulder, flounce sleeves and backless design. Style it with pants will be perfect.", image_url: "assets/img/trending_3.jpg", sku: "SKU911531" },
    { name: "Black Lace Insert Off The Shoulder Bell Sleeves T shirt", price: 20.41, description: "This fashion lace T-shirt is perfect for festival season! Featuring off the shoulder, long sleeves and lace insert. Style it with jeans for a perfect look!", image_url: "assets/img/trending_4.jpg", sku: "SKUB13669" },
    { name: "Khaki Square Neck Sleeveless Overall Outfits", price: 24.8, description: "This soft jumpsuit worth freaking out over. This jumpsuit features a square neck, sleeveless, zipper design, adjustable straps, and pockets on the front and back details. Wear a white tee inside the jumpsuit and pair it with high heels would be great.", image_url: "assets/img/trending_5.jpg", sku: "SKU773204" },
    { name: "Pink Spaghetti Scoop Neck Camis Top", price: 14.56, description: "We are currently obsessing over this top. It adorned with scoop neck, sleeveless and adjustable shoulder straps. Style it with skorts and mini skirts will be perfect.", image_url: "assets/img/trending_6.jpg", sku: "SKUA64749" },
    { name: "Navy Cold Shoulder Long Sleeves Slit Sweatshirt", price: 20.41, description: "We are currently obsessing over this sweatshirt. It adorned with cold shoulder and slit hem. Style it with shorts will be perfect.", image_url: "assets/img/trending_7.jpg", sku: "SKU823136" },
    { name: "Navy Random Floral Print Off Shoulder Long Sleeves Blouse", price: 21.87, description: "We are currently obsessing over this top. It adorned with off shoulder and floral print. Style it with leggings will be perfect.", image_url: "assets/img/trending_8.jpg", sku: "SKU867122" },
    { name: "Blue Cold Shoulder 3/4 Length Sleeve T-shirt with Strappy Detail", price: 16.02, description: "This soft tee's worth freaking out over. This t-shirt features a round neckline and backline, cold shoulders, and curved hem, slouchy silhouette, and strappy detailing with cutouts at shoulders. Pair it with anything from shorts to skinnies.", image_url: "assets/img/trending_9.jpg", sku: "SKU393865" },
    { name: "Army Green Pleated Design One Shoulder Long Sleeves T-shirt", price: 14.56, description: "This top is in a stretchy slinky fabric and is in an asymmetric off the shoulder style. Team with jeans and flats for day and just add a pair of heels to take you into the night!", image_url: "assets/img/trending_10.jpg", sku: "SKU856470" },
];

const recosBestSelling = [
    { name: "Plus Size Pink Spaghetti Cold Shoulder Blouses", price: 26.26, description: "This plus size sexy cold shoulder shirt is adorned with spaghetti, cold shoulder, flounce sleeves and backless design. Style it with pants will be perfect.", image_url: "assets/img/trending_3.jpg", sku: "SKU911531" },
    { name: "Black Pleated Design One Shoulder T-shirt", price: 13.09, description: "This top is in a stretchy slinky fabric and is in an asymmetric off the shoulder style. Team with jeans and flats for day and just add a pair of heels to take you into the night!", image_url: "assets/img/best_2.jpg", sku: "SKU856469" },
    { name: "Army Green Pleated Design One Shoulder Long Sleeves T-shirt", price: 14.56, description: "This top is in a stretchy slinky fabric and is in an asymmetric off the shoulder style. Team with jeans and flats for day and just add a pair of heels to take you into the night!", image_url: "assets/img/best_3.jpg", sku: "SKU856470" },
    { name: "White Random Floral Print V-neck Cami Top with Zip Design", price: 17.48, description: "This cami is our current obsession and it is a must have item. Featuring random floral print, v-neck design, sleeveless design and zip design. Perfect with shorts or jeans.", image_url: "assets/img/best_4.jpg", sku: "SKU794391" },
    { name: "Army Green Chiffon Double Layer Lace Hem Camis", price: 24.8, description: "Classic cami in a chiffon fabrication, by Yoins. This sleeveless modern scoop-neck cami in an easy swing silhouette. Topped with skinny straps and thin straps that lead to a square back.", image_url: "assets/img/best_5.jpg", sku: "SKU590522" },
    { name: "Dark Blue Classic Crew Neck Camis", price: 13.09, description: "Classic cami in a chiffon fabrication, by Yoins. This sleeveless modern crew-neck cami in an easy swing silhouette. Topped with skinny straps and thin straps that lead to a square back.", image_url: "assets/img/best_6.jpg", sku: "SKU773973" },
    { name: "Plus Size White Cut Out Backless Bodycon Dress", price: 20.41, description: "Strongly recommend this plus size sexy midi dress to you from YOINS. It is adorned with round neck, sleeveless, hollow out and backless design. We suggest you pair it with high heels.", image_url: "assets/img/best_7.jpg", sku: "SKU911566" },
    { name: "Plus Size Black Lace Detail Romper", price: 29.19, description: "A fashion plus size romper features with lace detail, long sleeve, and round neck design. Pair it with the high heel to make a fashion look!", image_url: "assets/img/best_8.jpg", sku: "SKUA14399" },
    { name: "White Bow Tie Back Off The Shoulder 3/4 Length Sleeves Blouses", price: 23.34, description: "Suit for going holidays, date with your friends or lover, attending cocktail party, a sexy top to go to club or beach. The back bow design is very elegant and nice.", image_url: "assets/img/best_9.jpg", sku: "SKU691571" },
    { name: "Blue Cold Shoulder 3/4 Length Sleeve T-shirt with Strappy Detail", price: 16.02, description: "This soft tee's worth freaking out over. This t-shirt features a round neckline and backline, cold shoulders, and curved hem, slouchy silhouette, and strappy detailing with cutouts at shoulders. Pair it with anything from shorts to skinnies.", image_url: "assets/img/trending_9.jpg", sku: "SKU393865" },
];

const recosInventory = [
    { name: "Plus Size Black Hollow Design Swimwear", price: 23.34, description: "A one-piece swimsuit featuring see-through design, plunging neckline, and a scoop back with crisscross straps", image_url: "assets/img/invent_1.jpg", sku: "SKU899541" },
    { name: "Plus Size Burgundy Deep V Neck Irregular Hem Cover-up", price: 17.48, description: "Bring attention to this plus size beach dress, which has spaghetti, deep v-neck, Bring attention to this plus size beach cover-up, which has spaghetti, deep v-neck, sleeveless, backless design, irregular hem and maxi length. It is the first choice for the beach, you will be more attractive if you wear it on.", image_url: "assets/img/invent_2.jpg", sku: "SKU914677" },
    { name: "Lace-up Hollow Out Elastic Waist Long Sleeves Playsuit", price: 20.41, description: "Bring attention to this playsuit. It is sexy and ensure all eyes will be on you when you wear this playsuit. It is adorned with hollow out, lace-up, big keyhole at back, long sleeves and elastic waist. Perfect with your sandals or high heels.", image_url: "assets/img/invent_3.jpg", sku: "SKU439447" },
    { name: "V-neck Open Back Cami Playsuit", price: 18.95, description: "Bring attention to this mini playsuit. It is adorned with open back and v-neck. Pair with high heels will be great.", image_url: "assets/img/invent_4.jpg", sku: "SKU677838" },
    { name: "Plus Size Elastic Strap Geometrical Print Dress", price: 23.34, description: "A vacation dresses with random geometrical print that will perfect for the beach.", image_url: "assets/img/invent_5.jpg", sku: "SKU904195" },
    { name: "Black Plain Breathable Sweat-absorbing Buttock Lifting Pants", price: 14.56, description: "These pants are in fashion style. It is styled with high-waisted design and bodycon fit. It is very great sports pants!", image_url: "assets/img/invent_6.jpg", sku: "SKU911566" },
    { name: "Plus Size Navy Hooded Design Leaf Print Coat", price: 42.36, description: "A plus size navy coat featuring long sleeves, zipper front, hooded design, pocket design.", image_url: "assets/img/invent_7.jpg", sku: "SKUA52136" },
    { name: "Plus Size Green Hooded Design Random Floral Print Coat", price: 51.13, description: "A plus size green coat featuring long sleeves, zipper front, hooded design, pocket design.", image_url: "assets/img/invent_8.jpg", sku: "SKUA55443" },
    { name: "Plus Size Green Cold Shoulder Short Sleeves T-shirt", price: 14.56, description: "Are you looking for a plus size women t-shirt for this summer? Then don't miss it!! It is adorned with cold shoulder, short sleeves and spaghetti. Pair it with your jeans will be perfect!!!", image_url: "assets/img/invent_9.jpg", sku: "SKU923755" },
    { name: "Pink Round Neck Colorblock Floral Print Tee", price: 17.48, description: "Feel the girl power in our casual tee. It features floral print and colorblock design, loose fit and long sleeves. Style it up!", image_url: "assets/img/invent_10.jpg", sku: "SKUA58278" },
];

function configSlide(number = 5, type = 'similar', keyword = null) {
    $('#recommendation').html('');
    const recos = keyword ? recosTrending.slice(0, number) :
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
            "<div class=\"item-slick2 p-l-15 p-r-15\">" +
            "<div class=\"block2\">" +
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
            "<div class='d-flex flex-row'>" +
            "<div class='text product-name flex-grow-1 product-name'>" + item.name + "</div>" +
            "<div class='text price font-weight-bold product-price'>$" + item.price + "</div>" +
            "</div>" +
            "<button class=\"flex-c-m bg1 bo-rad-23 hov1 s-text1 trans-0-4 ml-auto cta-button pl-2 pr-2 mt-2\">" + "Add to cart" + "</button>" +
            "</div>" +
            "</div>"
        );
    });


    $('#recommendation>.slick2').slick('unslick');
    initSlick2(number);

    $('#addToCartButtonContainer').append(
        "               <div class=\"btn-recommended-addcart size9 trans-0-4 m-t-10 m-b-10\" id=\"btn-recommended-addcart\">" +
        "                   <!-- Button-->" +
        "                   <button class=\"flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4 cta-button\">" + "Add to cart" + "</button>" +
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

$(document).ready(function(){
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

    $('[data-toggle="tooltip"]').tooltip();
});