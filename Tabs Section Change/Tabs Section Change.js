
// ---------- Main Trip and Place List ----------
var Road_trip = document.getElementById("Road-Trips");
var Honeymoon_places = document.getElementById("Honeymoon-Places");
var Family_trip_places = document.getElementById("Family-Trip-Places");
var Devotional_places = document.getElementById("Devotional-Places");
var Sort_trips = document.getElementById("Sort-Trips");

// ---------- Place-List ----------
var place_list = document.getElementById("place-list");
// var place_li = document.querySelectorAll(".place-list li");
// var place_li = document.getElementsByClassName("place-list li");
var road_trip_name = document.querySelectorAll(".road-trip-name");



// ---------- Content ----------
var img_content = document.getElementById("img-content");
var Place_Img = document.getElementById("place-img");
var Content = document.getElementById("content");
var Trip_name = document.getElementById("trip-name");
var Distance = document.getElementById("distance");
var Trip_Details = document.getElementById("trip-details");


// ---------- Road Trip List ----------
var Ahmedabad_Kutch = document.getElementById("ahmedabad-kutch");
var Shimla_Spiti_Valley = document.getElementById("shimla-spiti_valley");
var Mumbai_Goa = document.getElementById("mumbai-goa");
var Bengaluru_Ooty = document.getElementById("bengaluru-ooty");
var Chennai_Munnar = document.getElementById("chennai-munnar");
var Chennai_Pondicherry = document.getElementById("chennai-pondicherry");
var Bagdogra_Darjeeling = document.getElementById("bagdogra-darjeeling");
var Guwahati_Tawang = document.getElementById("guwahati-tawang");

// ---------- Honeymoon Place List ----------
var Goa = document.getElementById("Goa");
var Maldives = document.getElementById("Maldives");
var Manali = document.getElementById("Manali");
var Shimla = document.getElementById("Shimla");
var Udaipur = document.getElementById("Udaipur");
var Andaman_Nicobar_Islands = document.getElementById("Andaman_Nicobar_Islands");
var Lakshadweep = document.getElementById("Lakshadweep");
var Nainital = document.getElementById("Nainital");
var Kerala = document.getElementById("Kerala");
var Jammu_Kashmir = document.getElementById("Jammu_Kashmir");
var Coorg = document.getElementById("Coorg");
var Mussoorie = document.getElementById("Mussoorie");
var Dalhousie = document.getElementById("Dalhousie");
var Kovalam = document.getElementById("Kovalam");
var Kodaikanal = document.getElementById("Kodaikanal");
var Srinagar = document.getElementById("Srinagar");
var Wayanad = document.getElementById("Wayanad");
var Gangtok = document.getElementById("Gangtok");
var Alleppey = document.getElementById("Alleppey");
var Jaisalmer = document.getElementById("Jaisalmer");
var Ooty = document.getElementById("Ooty");
var Munnar = document.getElementById("Munnar");
var Darjeeling = document.getElementById("Dalhousie");




Honeymoon_places.addEventListener("click", () => {

  /*
    place_list.innerHTML = `
    <li class="honeymoon-places" id="Goa"> Goa </li>
    <li class="honeymoon-places" id="Maldives"> Maldives </li>
    <li class="honeymoon-places" id="Manali"> Manali </li>
    <li class="honeymoon-places" id="Shimla"> Shimla </li>
    <li class="honeymoon-places" id="Udaipur"> Udaipur </li>
    <li class="honeymoon-places" id="Andaman_Nicobar_Islands"> Andaman and Nicobar Islands </li>
    <li class="honeymoon-places" id="Lakshadweep"> Lakshadweep </li>
    <li class="honeymoon-places" id="Nainital"> Nainital </li>
    <li class="honeymoon-places" id="Kerala"> Kerala </li>
    <li class="honeymoon-places" id="Jammu_Kashmir"> Jammu & Kashmir </li>
    <li class="honeymoon-places" id="Coorg"> Coorg </li>
    <li class="honeymoon-places" id="Mussoorie"> Mussoorie </li>
    <li class="honeymoon-places" id="Dalhousie"> Dalhousie </li>
    <li class="honeymoon-places" id="Kovalam"> Kovalam </li>
    <li class="honeymoon-places" id="Kodaikanal"> Kodaikanal </li>
    <li class="honeymoon-places" id="Srinagar"> Srinagar </li>
    <li class="honeymoon-places" id="Wayanad"> Wayanad </li>
    <li class="honeymoon-places" id="Gangtok"> Gangtok </li>
    <li class="honeymoon-places" id="Alleppey"> Alleppey </li>
    <li class="honeymoon-places" id="Jaisalmer"> Jaisalmer </li>
    <li class="honeymoon-places" id="Ooty"> Ooty </li>
    <li class="honeymoon-places" id="Munnar"> Munnar </li>
    <li class="honeymoon-places" id="Darjeeling"> Darjeeling </li>
    `; 
  */

    Road_trip.style.backgroundColor = "#57606f";
    road_trip_name.style.display = "none";
    Honeymoon_places.style.backgroundColor = "#747d8c";    
    Honeymoon_places.style.border = "2px solid #2f3542";    
    Honeymoon_places.style.borderRadius = "50% 50% 0 0";    
    Honeymoon_places.style.backgroundColor = "#747d8c";    
    Honeymoon_places.style.backgroundColor = "#747d8c";    
    place_list.style.height = "82px";

    Place_Img.style.margin = "25px 40px 10px 40px";
    Content.style.marginTop = "25px";
    img_content.style.height = "549px"


    Place_Img.src = "https://media.istockphoto.com/id/469852152/photo/arambol-beach-goa.jpg?s=612x612&w=0&k=20&c=PK7nClOmOvKi4JxDumL5-YI8lkX53b9vHF75nvExDX4=";
    Trip_name.innerHTML = "Goa";
    Distance.innerHTML = "";
    Trip_Details.innerHTML= `
    Famous for being featured in one of the best Bollywood movies, ’Dil Chahta Hai’, this road trip takes you along India’s beautiful west coast. The roads from Mumbai to Goa are super-smooth and surrounded by tall, lush palm trees. There are frequent beaches to stop for sunbathing, and plenty of incredible local food in the small villages and towns along the Konkan coast.
    <br><br>
    Best Places to Visit in Goa : <br>
    (1) Palolem Beach <br>
    (2) Baga Beach <br>
    (3) Dudhsagar Falls <br>
    (4) Big Daddy Casino <br>
    (5) Vagator Beach <br>
    (6) Cola Beach <br>
    (7) Fort Aguada <br>
    (8) Deltin Royale <br>
    (9) Anjuna Market & Beach <br>
    (10) Chapora Fort
    `;

    Maldives.addEventListener("click", () => {

        Goa.style.backgroundColor = "#747d8c";
        Maldives.style.backgroundColor = "#2f3542";
        Manali.style.backgroundColor = "#747d8c";
        Shimla.style.backgroundColor = "#747d8c";
        Udaipur.style.backgroundColor = "#747d8c";
        Andaman_Nicobar_Islands.style.backgroundColor = "#747d8c";
        Lakshadweep.style.backgroundColor = "#747d8c";
        Nainital.style.backgroundColor = "#747d8c";
        Kerala.style.backgroundColor = "#747d8c";
        Jammu_Kashmir.style.backgroundColor = "#747d8c";
        Coorg.style.backgroundColor = "#747d8c";
        Mussoorie.style.backgroundColor = "#747d8c";
        Dalhousie.style.backgroundColor = "#747d8c";
        Kovalam.style.backgroundColor = "#747d8c";
        Kodaikanal.style.backgroundColor = "#747d8c";
        Srinagar.style.backgroundColor = "#747d8c";
        Wayanad.style.backgroundColor = "#747d8c";
        Gangtok.style.backgroundColor = "#747d8c";
        Alleppey.style.backgroundColor = "#747d8c";
        Jaisalmer.style.backgroundColor = "#747d8c";
        Ooty.style.backgroundColor = "#747d8c";
        Munnar.style.backgroundColor = "#747d8c";
        Darjeeling.style.backgroundColor = "#747d8c";
    
        Place_Img.src = "https://media.istockphoto.com/id/469852152/photo/arambol-beach-goa.jpg?s=612x612&w=0&k=20&c=PK7nClOmOvKi4JxDumL5-YI8lkX53b9vHF75nvExDX4=";
        Trip_name.innerHTML = "Maldives";
        Distance.innerHTML = "";
        Trip_Details.innerHTML= `
      
        <br><br>
        Best Places to Visit in Maldives : <br>
        (1) Palolem Beach <br>
        (2) Baga Beach <br>
        (3) Dudhsagar Falls <br>
        (4) Big Daddy Casino <br>
        (5) Vagator Beach <br>
        (6) Cola Beach <br>
        (7) Fort Aguada <br>
        (8) Deltin Royale <br>
        (9) Anjuna Market & Beach <br>
        (10) Chapora Fort
        `;
    });


});










Road_trip.addEventListener("mouseover", () => {
    Road_trip.style.backgroundColor = "#2f3542";
});
Road_trip.addEventListener("mouseout", () => {
    Road_trip.style.backgroundColor = "#57606f";
});

// -------------------- Ahmedabad -> Kutch Valley --------------------
Ahmedabad_Kutch.addEventListener("click", () => {
    
    Ahmedabad_Kutch.style.backgroundColor = "#2f3542";
    Shimla_Spiti_Valley.style.backgroundColor = "#747d8c";
    Mumbai_Goa.style.backgroundColor = "#747d8c";
    Bengaluru_Ooty.style.backgroundColor = "#747d8c";
    Chennai_Munnar.style.backgroundColor = "#747d8c";
    Chennai_Pondicherry.style.backgroundColor = "#747d8c";
    Bagdogra_Darjeeling.style.backgroundColor = "#747d8c";
    Guwahati_Tawang.style.backgroundColor = "#747d8c";

    Place_Img.src = "https://media.timeout.com/images/106000597/1024/768/image.jpg";
    Trip_name.innerHTML = "Ahmedabad ➜ Kutch";
    Distance.innerHTML = "Distance : 248 Miles || 400 KM";
    Trip_Details.innerHTML= `
    This road trip is all about meeting people: the friendly locals of Ahmedabad, the skilled artisans in the villages of Kutch and the nomadic tribes roaming the desert. Time your journey between October and February to experience the lively Rann Utsav festival in the white-sand Kutch desert – the kite-flying event in February is particularly spectacular.
    <br><br>
    Best Places to Visit in Kutch : <br>
    (1) Rann Of Kutch <br>
    (2) Dholavira <br>
    (3) Mandvi Beach <br>
    (4) Topansar Lake <br>
    (5) Kandla Port <br>
    (6) Siyot Caves <br>
    (7) Kutch Desert Wildlife Sanctuary <br>
    (8) Narayan Sarovar <br>
    (9) Kalo Dungar <br>
    (10) Marine National Park 
    `;
});



// -------------------- Shimla -> Spiti Valley --------------------
Shimla_Spiti_Valley.addEventListener("click", () => {
    
    Ahmedabad_Kutch.style.backgroundColor = "#747d8c";
    Shimla_Spiti_Valley.style.backgroundColor = "#2f3542";
    Mumbai_Goa.style.backgroundColor = "#747d8c";
    Bengaluru_Ooty.style.backgroundColor = "#747d8c";
    Chennai_Munnar.style.backgroundColor = "#747d8c";
    Chennai_Pondicherry.style.backgroundColor = "#747d8c";
    Bagdogra_Darjeeling.style.backgroundColor = "#747d8c";
    Guwahati_Tawang.style.backgroundColor = "#747d8c";

    Place_Img.src = "https://media.timeout.com/images/106000593/1024/768/image.jpg";
    Trip_name.innerHTML = "Shimla ➜ Spiti Valley";
    Distance.innerHTML = "Distance : 263 Miles || 424 KM";
    Trip_Details.innerHTML= `
    If you are a mountain child or a fan of off-roading, you cannot miss out on the drive from Shimla to Spiti. The trip takes you along the bumpy-yet-beautiful dirt roads of Himachal Pradesh, surrounded with apple-laden trees. Keep your camera app open to capture the snow-capped peaks, blue skies and crystal-clear rivers.
    <br><br>
    Best Places to Visit in Spiti Valley : <br>
    (1) Key Monastery – For A Spiritual Experience <br>
    (2) Tabo Monastery – One Of The Best Attractions <br>
    (3) Lhalung Monastery – Historicity And Spirituality <br>
    (4) Chandratal – Ideal For Photography <br>
    (5) Suraj Tal – For Adventurers And Nature Lovers <br>
    (6) Dhankar Lake – A Sight Worth Beholding <br>
    (7) Kunzum Pass – Trekkers’ Paradise <br>
    (8) Komik – For Trekking And Camping <br>
    (9) Sarchu – Backpackers’ Favorite <br>
    (10) Nako Lake – Natural Beauty Amidst Mountains 
    `;
});



// -------------------- Mumbai -> Goa --------------------
Mumbai_Goa.addEventListener("click", () => {
    
    Ahmedabad_Kutch.style.backgroundColor = "#747d8c";
    Shimla_Spiti_Valley.style.backgroundColor = "#747d8c";
    Mumbai_Goa.style.backgroundColor = "#2f3542";
    Bengaluru_Ooty.style.backgroundColor = "#747d8c";
    Chennai_Munnar.style.backgroundColor = "#747d8c";
    Chennai_Pondicherry.style.backgroundColor = "#747d8c";
    Bagdogra_Darjeeling.style.backgroundColor = "#747d8c";
    Guwahati_Tawang.style.backgroundColor = "#747d8c";

    Place_Img.src = "https://media.timeout.com/images/106000595/1024/768/image.jpg";
    Trip_name.innerHTML = "Mumbai ➜ Goa";
    Distance.innerHTML = "Distance : 365 Miles || 588 KM";
    Trip_Details.innerHTML= `
    Famous for being featured in one of the best Bollywood movies, ’Dil Chahta Hai’, this road trip takes you along India’s beautiful west coast. The roads from Mumbai to Goa are super-smooth and surrounded by tall, lush palm trees. There are frequent beaches to stop for sunbathing, and plenty of incredible local food in the small villages and towns along the Konkan coast.
    <br><br>
    Best Places to Visit in Goa : <br>
    (1) Palolem Beach <br>
    (2) Baga Beach <br>
    (3) Dudhsagar Falls <br>
    (4) Big Daddy Casino <br>
    (5) Vagator Beach <br>
    (6) Cola Beach <br>
    (7) Fort Aguada <br>
    (8) Deltin Royale <br>
    (9) Anjuna Market & Beach <br>
    (10) Chapora Fort
    `;
});



// -------------------- Bengaluru -> Ooty --------------------
Bengaluru_Ooty.addEventListener("click", () => {
    
    Ahmedabad_Kutch.style.backgroundColor = "#747d8c";
    Shimla_Spiti_Valley.style.backgroundColor = "#747d8c";
    Mumbai_Goa.style.backgroundColor = "#747d8c";
    Bengaluru_Ooty.style.backgroundColor = "#2f3542";
    Chennai_Munnar.style.backgroundColor = "#747d8c";
    Chennai_Pondicherry.style.backgroundColor = "#747d8c";
    Bagdogra_Darjeeling.style.backgroundColor = "#747d8c";
    Guwahati_Tawang.style.backgroundColor = "#747d8c";

    Place_Img.src = "https://media.timeout.com/images/106000649/1024/768/image.jpg";
    Trip_name.innerHTML = "Bengaluru ➜ Ooty";
    Distance.innerHTML = "Distance : 168 Miles || 271 KM";
    Trip_Details.innerHTML= `
    If you fancy a cup of tea and a blast of fresh air, then hop in the driver’s seat and get set on a Bengaluru to Ooty road trip. The route will take you through the lush green Western Ghats, where you can slurp some tea fresh out of the plantation. Leave time to admire the enormous and beautiful waterfalls of Chunchi and Shivanasamudra.
    <br><br>
    Best Places to Visit in Ooty : <br>
    (1) Avalanche Lake <br>
    (2) Ooty Lake <br>
    (3) Emerald Lake <br>
    (4) Ooty Botanical Garden <br>
    (5) Doddabetta Peak <br>
    (6) Cola Beach <br>
    (7) Needle View Hillpoint/Needle Rock View-point <br>
    (8) Ooty Toy Train <br>
    (9) Toda Huts Ooty <br>
    (10) Kalhatty Waterfalls
    `;
});



// -------------------- Chennai -> Munnar --------------------
Chennai_Munnar.addEventListener("click", () => {
    
    Ahmedabad_Kutch.style.backgroundColor = "#747d8c";
    Shimla_Spiti_Valley.style.backgroundColor = "#747d8c";
    Mumbai_Goa.style.backgroundColor = "#747d8c";
    Bengaluru_Ooty.style.backgroundColor = "#747d8c";
    Chennai_Munnar.style.backgroundColor = "#2f3542";
    Chennai_Pondicherry.style.backgroundColor = "#747d8c";
    Bagdogra_Darjeeling.style.backgroundColor = "#747d8c";
    Guwahati_Tawang.style.backgroundColor = "#747d8c";

    Place_Img.src = "https://media.timeout.com/images/106000613/1024/768/image.jpg";
    Trip_name.innerHTML = "Chennai ➜ Munnar";
    Distance.innerHTML = "Distance : 395 Miles || 636 KM";
    Trip_Details.innerHTML= `
    Sprawling across a wide area, the tea plantations on the route out of Chennai will leave you awestruck. The route takes you through wildlife sanctuaries and serene backwaters: you might be caught off-guard by the diverse range of flora and fauna in this region. From scenic surroundings to cultural diversity, this drive has something in store no matter what you’re looking for in a road trip.
    <br><br>
    Best Places to Visit in Munnar : <br>
    (1) Eravikulam National Park <br>
    (2) Pothamedu View Point <br>
    (3) Attukad Waterfalls <br>
    (4) Cheeyappara Waterfalls <br>
    (5) Anamudi <br>
    (6) Top Station <br>
    (7) Chinnar Wildlife Sanctuary <br>
    (8) Echo Point Munnar <br>
    (9) Kolukkumalai Tea Estate <br>
    (10) Mattupetty Dam
    `;
});



// -------------------- Chennai -> Pondicherry --------------------
Chennai_Pondicherry.addEventListener("click", () => {
    
    Ahmedabad_Kutch.style.backgroundColor = "#747d8c";
    Shimla_Spiti_Valley.style.backgroundColor = "#747d8c";
    Mumbai_Goa.style.backgroundColor = "#747d8c";
    Bengaluru_Ooty.style.backgroundColor = "#747d8c";
    Chennai_Munnar.style.backgroundColor = "#747d8c";
    Chennai_Pondicherry.style.backgroundColor = "#2f3542";
    Bagdogra_Darjeeling.style.backgroundColor = "#747d8c";
    Guwahati_Tawang.style.backgroundColor = "#747d8c";

    Place_Img.src = "https://media.timeout.com/images/106000596/1024/768/image.jpg";
    Trip_name.innerHTML = "Chennai ➜ Pondicherry";
    Distance.innerHTML = "Distance : 93 Miles || 150 KM";
    Trip_Details.innerHTML= `
    India has its very own French town: Pondicherry. If you are in the southern part of the country, do not miss out on the road trip there from Chennai. You’ll travel through not just French-inspired architecture but also many quaint fishing villages and pristine beaches, feasting on delicious seafood and fresh coconut water along the way.
    <br><br>
    Best Places to Visit in Pondicherry : <br>
    (1) Promenade Beach <br>
    (2) Rock Beach <br>
    (3) Serenity beach <br>
    (4) New Light House <br>
    (5) Puducherry Museum <br>
    (6) Immaculate Conception Cathedral <br>
    (7) Sri Varadaraja Perumal Temple <br>
    (8) French War Memorial <br>
    (9) Mahatma Gandhi Statue <br>
    (10) Bharathi Park
    `;
});



// -------------------- Bagdogra -> Darjeeling --------------------
Bagdogra_Darjeeling.addEventListener("click", () => {
    
    Ahmedabad_Kutch.style.backgroundColor = "#747d8c";
    Shimla_Spiti_Valley.style.backgroundColor = "#747d8c";
    Mumbai_Goa.style.backgroundColor = "#747d8c";
    Bengaluru_Ooty.style.backgroundColor = "#747d8c";
    Chennai_Munnar.style.backgroundColor = "#747d8c";
    Chennai_Pondicherry.style.backgroundColor = "#747d8c";
    Bagdogra_Darjeeling.style.backgroundColor = "#2f3542";
    Guwahati_Tawang.style.backgroundColor = "#747d8c";

    Place_Img.src = "https://media.timeout.com/images/106000648/1024/768/image.jpg";
    Trip_name.innerHTML = "Bagdogra ➜ Darjeeling";
    Distance.innerHTML = "Distance : 43 Miles || 70 KM";
    Trip_Details.innerHTML= `    
    This exhilarating journey takes you along winding roads that ascend towards lush green hills. Along the way you can stop by small villages or pop inside the tea plantations. The occasional hairpin turns might leave you gasping, so don’t let the stunning views of the mighty Himalayas and Victorian architecture distract you from fastening your seat belt.
    <br><br>
    Best Places to Visit in Darjeeling : <br>
    (1) Peace Pagoda <br>
    (2) Rock Garden <br>
    (3) Darjeeling Rangeet Valley Passenger Ropeway <br>
    (4) Observatory Hill View Point <br>
    (5) Tiger Hill <br>
    (6) Shrubbery Nightingale Park <br>
    (7) Bengal Natural History Museum <br>
    (8) Mahakal Temple <br>
    (9) Batasia Loop <br>
    (10) Batasia Eco Garden
    `;
});



// -------------------- Guwahati -> Tawang --------------------
Guwahati_Tawang.addEventListener("click", () => {
    
    Ahmedabad_Kutch.style.backgroundColor = "#747d8c";
    Shimla_Spiti_Valley.style.backgroundColor = "#747d8c";
    Mumbai_Goa.style.backgroundColor = "#747d8c";
    Bengaluru_Ooty.style.backgroundColor = "#747d8c";
    Chennai_Munnar.style.backgroundColor = "#747d8c";
    Chennai_Pondicherry.style.backgroundColor = "#747d8c";
    Bagdogra_Darjeeling.style.backgroundColor = "#747d8c";
    Guwahati_Tawang.style.backgroundColor = "#2f3542";

    Place_Img.src = "https://media.timeout.com/images/106000594/1024/768/image.jpg";
    Trip_name.innerHTML = "Guwahati ➜ Tawang";
    Distance.innerHTML = "Distance : 318 Miles || 512 KM";
    Trip_Details.innerHTML= `    
    Surrounded by the mighty Himalayas, the north-eastern part of India is still an underrated gem. From lush green valleys to the serenity of Buddhist monasteries, this road trip is the perfect choice to unwind and escape the crowd. It’s also a chance to witness the Indigenous cultures of tribes such as the Monpa, Takpa, Karbi and Miri, including traditional local festivals and dance forms like bihu.
    <br><br>
    Best Places to Visit in Tawang : <br>
    (1) Gori Chen Mountain <br>
    (2) Jung falls (Nuranang falls) <br>
    (3) Tawang Monastery <br>
    (4) Nuranang Falls <br>
    (5) Jaswant Garh Memorial <br>
    (6) Panga Teng Tso lake <br>
    (7) Bap Teng Kang Waterfall <br>
    (8) Bum La Pass <br>
    (9) Sela Pass <br>
    (10) Eaglenest Wildlife Sanctuary
    `;
});
