// Sample data for autocomplete
    var states = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
        "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
        "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
        "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
        "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
        "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ];

    var cities = {
    "California": [
        "Acton, CA", "Adelanto, CA", "Agoura Hills, CA", "Alameda, CA", "Alamo, CA", "Albany, CA", "Alhambra, CA", "Aliso Viejo, CA", "Alpaugh, CA", "Alpine, CA",
        "Altadena, CA", "Alturas, CA", "American Canyon, CA", "Anaheim, CA", "Anderson, CA", "Angwin, CA", "Antioch, CA", "Apple Valley, CA", "Aptos, CA",
        "Arbuckle, CA", "Arcadia, CA", "Arcata, CA", "Armona, CA", "Arnold, CA", "Aromas, CA", "Arroyo Grande, CA", "Artesia, CA", "Arvin, CA", "Atascadero, CA",
        "Atherton, CA", "Atwater, CA", "Auberry, CA", "Auburn, CA", "Avalon, CA", "Avenal, CA", "Avery, CA", "Azusa, CA", "Bakersfield, CA", "Baldwin Park, CA",
        "Banning, CA", "Barstow, CA", "Beale Afb, CA", "Beaumont, CA", "Beckwourth, CA", "Bell Gardens, CA", "Bell, CA", "Bellflower, CA", "Belmont, CA",
        "Ben Lomond, CA", "Benicia, CA", "Berkeley, CA", "Bethel Island, CA", "Beverly Hills, CA", "Big Bear City, CA", "Big Bear Lake, CA", "Big Pine, CA",
        "Biggs, CA", "Biola, CA", "Bishop, CA", "Bloomington, CA", "Blue Lake, CA", "Blythe, CA", "Bodega Bay, CA", "Bodfish, CA", "Bolinas, CA", "Bonita, CA",
        "Bonsall, CA", "Boron, CA", "Borrego Springs, CA", "Boulder Creek, CA", "Boyes Hot Springs, CA", "Brawley, CA", "Brea, CA", "Brentwood, CA",
        "Brisbane, CA", "Buellton, CA", "Buena Park, CA", "Burbank, CA", "Burlingame, CA", "Burney, CA", "Buttonwillow, CA", "Byron, CA", "Cabazon, CA",
        "Calabasas, CA", "Calexico, CA", "California City, CA", "Calimesa, CA", "Calipatria, CA", "Calistoga, CA", "Camarillo, CA", "Cambria, CA", "Campbell, CA",
        "Cantua Creek, CA", "Capitola, CA", "Carlsbad, CA", "Carmel By The Sea, CA", "Carmichael, CA", "Carpinteria, CA", "Carson, CA", "Caruthers, CA",
        "Castro Valley, CA", "Castroville, CA", "Cathedral City, CA", "Cayucos, CA", "Ceres, CA", "Cerritos, CA", "Chester, CA", "Chico, CA", "Chino Hills, CA",
        "Chino, CA", "Chowchilla, CA", "Chualar, CA", "Chula Vista, CA", "Citrus Heights, CA", "Claremont, CA", "Clayton, CA", "Clearlake Oaks, CA",
        "Clearlake, CA", "Cloverdale, CA", "Clovis, CA", "Coachella, CA", "Coalinga, CA", "Cobb, CA", "Colfax, CA", "Colton, CA", "Columbia, CA", "Colusa, CA",
        "Compton, CA", "Concord, CA", "Copperopolis, CA", "Corcoran, CA", "Corning, CA", "Corona, CA", "Coronado, CA", "Corte Madera, CA", "Costa Mesa, CA",
        "Cotati, CA", "Cottonwood, CA", "Covelo, CA", "Covina, CA", "Crescent City, CA", "Crescent Mills, CA", "Crestline, CA", "Crockett, CA",
        "Culver City, CA", "Cupertino, CA", "Cutler, CA", "Cutten, CA", "Cypress, CA", "Daly City, CA", "Dana Point, CA", "Danville, CA", "Davis, CA",
        "Deer Park, CA", "Del Mar, CA", "Del Rey, CA", "Delano, CA", "Delhi, CA", "Denair, CA", "Desert Hot Springs, CA", "Diablo, CA", "Diamond Bar, CA",
        "Diamond Springs, CA", "Dillon Beach, CA", "Dinuba, CA", "Dixon, CA", "Dorris, CA", "Dos Palos, CA", "Downey, CA", "Duarte, CA", "Dublin, CA", "Ducor, CA",
        "Dunsmuir, CA", "Durham, CA", "Earlimart, CA", "El Cajon, CA", "El Centro, CA", "El Cerrito, CA", "El Dorado Hills, CA", "El Granada, CA", "El Monte, CA",
        "El Segundo, CA", "El Sobrante, CA", "El Verano, CA", "Eldridge, CA", "Elk Grove, CA", "Elmira, CA", "Emeryville, CA", "Empire, CA", "Encinitas, CA",
        "Escalon, CA", "Escondido, CA", "Esparto, CA", "Etna, CA", "Eureka, CA", "Exeter, CA", "Fair Oaks, CA", "Fairfax, CA", "Fairfield, CA",
        "Fall River Mills, CA", "Fallbrook, CA", "Farmersville, CA", "Farmington, CA", "Felton, CA", "Ferndale, CA", "Fillmore, CA", "Firebaugh, CA",
        "Folsom, CA", "Fontana, CA", "Foothill Ranch, CA", "Foresthill, CA", "Forestville, CA", "Fort Bragg, CA", "Fort Jones, CA", "Fortuna, CA",
        "Fountain Valley, CA", "Fowler, CA", "Frazier Park, CA", "Freedom, CA", "Fremont, CA", "French Camp, CA", "French Gulch, CA", "Fresno, CA",
        "Friant, CA", "Fullerton, CA", "Galt, CA", "Garden Grove, CA", "Gardena, CA", "Georgetown, CA", "Gilroy, CA", "Glen Ellen, CA", "Glendale, CA",
        "Glendora, CA", "Goleta, CA", "Gonzales, CA", "Goshen, CA", "Grand Terrace, CA", "Granite Bay, CA", "Grass Valley, CA", "Graton, CA",
        "Greenfield, CA", "Greenville, CA", "Grenada, CA", "Gridley, CA", "Grover Beach, CA", "Guadalupe, CA", "Guerneville, CA", "Gustine, CA",
        "Hacienda Heights, CA", "Half Moon Bay, CA", "Hamilton City, CA", "Hanford, CA", "Hawaiian Gardens, CA", "Hawthorne, CA", "Hayfork, CA",
        "Hayward, CA", "Healdsburg, CA", "Heber, CA", "Hemet, CA", "Hercules, CA", "Hermosa Beach, CA", "Hesperia, CA", "Hickman, CA", "Highland, CA",
        "Hollister, CA", "Holtville, CA", "Homeland, CA", "Hornbrook, CA", "Hughson, CA", "Huntington Beach, CA", "Huntington Park, CA", "Huron, CA",
        "Hydesville, CA", "Imperial Beach, CA", "Imperial, CA", "Independence, CA", "Indian Wells, CA", "Indio, CA", "Inglewood, CA", "Inverness, CA",
        "Inyokern, CA", "Ione, CA", "Irvine, CA", "Isleton, CA", "Ivanhoe, CA", "Jackson, CA", "Jamestown, CA", "Jamul, CA", "Joshua Tree, CA",
        "Julian, CA", "Keene, CA", "Kelseyville, CA", "Kentfield, CA", "Kerman, CA", "Kernville, CA", "Kettleman City, CA", "Keyes, CA", "King City, CA",
        "Kings Beach, CA", "Kingsburg, CA", "Klamath, CA", "Knightsen, CA", "La Canada Flintridge, CA", "La Habra, CA", "La Mesa, CA", "La Mirada, CA",
        "La Palma, CA", "La Puente, CA", "La Quinta, CA", "La Verne, CA", "Lafayette, CA", "Laguna Beach, CA", "Laguna Hills, CA", "Laguna Niguel, CA",
        "Lake Arrowhead, CA", "Lake Elsinore, CA", "Lake Forest, CA", "Lake Isabella, CA", "Lakeport, CA", "Lakeside, CA", "Lakewood, CA", "Lamont, CA",
        "Lancaster, CA", "Larkspur, CA", "Lathrop, CA", "Laton, CA", "Lawndale, CA", "Laytonville, CA", "Le Grand, CA", "Lebec, CA", "Lemon Cove, CA",
        "Lemon Grove, CA", "Lemoore, CA", "Lewiston, CA", "Lincoln, CA", "Linden, CA", "Lindsay, CA", "Littlerock, CA", "Live Oak, CA", "Livermore, CA",
        "Livingston, CA", "Lockeford, CA", "Lodi, CA", "Loma Linda, CA", "Lomita, CA", "Lompoc, CA", "Lone Pine, CA", "Long Beach, CA", "Loomis, CA",
        "Los Alamitos, CA", "Los Alamos, CA", "Los Altos, CA", "Los Angeles, CA", "Los Banos, CA", "Los Gatos, CA", "Los Molinos, CA", "Lost Hills, CA",
        "Lower Lake, CA", "Loyalton, CA", "Lucerne, CA", "Lynwood, CA", "Madera, CA", "Magalia, CA", "Malibu, CA", "Mammoth Lakes, CA", "Manhattan Beach, CA",
        "Manteca, CA", "Manton, CA", "Maricopa, CA", "Marina Del Rey, CA", "Marina, CA", "Mariposa, CA", "Martinez, CA", "Marysville, CA", "Maywood, CA",
        "Mc Farland, CA", "Mcarthur, CA", "Mccloud, CA", "Mckinleyville, CA", "Meadow Valley, CA", "Meadow Vista, CA", "Mecca, CA", "Mendocino, CA",
        "Mendota, CA", "Menlo Park, CA", "Mentone, CA", "Merced, CA", "Mi Wuk Village, CA", "Middletown, CA", "Mill Valley, CA", "Millbrae, CA",
        "Millville, CA", "Milpitas, CA", "Mira Loma, CA", "Miramonte, CA", "Mission Hills, CA", "Mission Viejo, CA", "Modesto, CA", "Mojave, CA",
        "Mokelumne Hill, CA", "Monrovia, CA", "Montague, CA", "Montara, CA", "Montclair, CA", "Monte Rio, CA", "Montebello, CA", "Monterey Park, CA",
        "Monterey, CA", "Moorpark, CA", "Moraga, CA", "Moreno Valley, CA", "Morgan Hill, CA", "Morongo Valley, CA", "Morro Bay, CA", "Moss Beach, CA",
        "Moss Landing, CA", "Mount Shasta, CA", "Mountain Ranch, CA", "Mountain View, CA", "Murphys, CA", "Murrieta, CA", "Napa, CA", "National City, CA",
        "Needles, CA", "Nevada City, CA", "Newark, CA", "Newman, CA", "Newport Beach, CA", "Newport Coast, CA", "Nice, CA", "Niland, CA", "Nipomo, CA",
        "Norco, CA", "North Highlands, CA", "Norwalk, CA", "Novato, CA", "Nuevo, CA", "Oak Park, CA", "Oak View, CA", "Oakdale, CA", "Oakhurst, CA",
        "Oakland, CA", "Oakley, CA", "Occidental, CA", "Oceano, CA", "Oceanside, CA", "Ocotillo, CA", "Ojai, CA", "Olivehurst, CA", "Ontario, CA",
        "Onyx, CA", "Orange Cove, CA", "Orange, CA", "Orangevale, CA", "Orinda, CA", "Orland, CA", "Orosi, CA", "Oroville, CA", "Oxnard, CA",
        "Pacific Grove, CA", "Pacifica, CA", "Palermo, CA", "Palm Desert, CA", "Palm Springs, CA", "Palmdale, CA", "Palo Alto, CA", "Palo Cedro, CA",
        "Palo Verde, CA", "Paradise, CA", "Paramount, CA", "Parlier, CA", "Pasadena, CA", "Patterson, CA", "Penn Valley, CA", "Perris, CA",
        "Petaluma, CA", "Pico Rivera, CA", "Piedmont, CA", "Pine Valley, CA", "Pinole, CA", "Piru, CA", "Pismo Beach, CA", "Pittsburg, CA",
        "Pixley, CA", "Placentia, CA", "Placerville, CA", "Planada, CA", "Pleasant Hill, CA", "Pleasanton, CA", "Plymouth, CA", "Point Arena, CA",
        "Point Reyes Station, CA", "Pollock Pines, CA", "Pomona, CA", "Port Costa, CA", "Port Hueneme, CA", "Porterville, CA", "Portola Valley, CA",
        "Portola, CA", "Poway, CA", "Quincy, CA", "Rail Road Flat, CA", "Ramona, CA", "Rancho Cordova, CA", "Rancho Cucamonga, CA", "Rancho Mirage, CA",
        "Rancho Palos Verdes, CA", "Rancho Santa Margarita, CA", "Red Bluff, CA", "Redding, CA", "Redlands, CA", "Redondo Beach, CA", "Redway, CA",
        "Redwood City, CA", "Reedley, CA", "Rialto, CA", "Richgrove, CA", "Richmond, CA", "Ridgecrest, CA", "Rio Dell, CA", "Rio Linda, CA", "Rio Vista, CA",
        "Ripon, CA", "Riverbank, CA", "Riverdale, CA", "Riverside, CA", "Rocklin, CA", "Rodeo, CA", "Rohnert Park, CA", "Rosamond, CA", "Rosemead, CA",
        "Roseville, CA", "Ross, CA", "Rowland Heights, CA", "Running Springs, CA", "Sacramento, CA", "Salida, CA", "Salinas, CA", "Salton City, CA",
        "San Andreas, CA", "San Anselmo, CA", "San Ardo, CA", "San Bernardino, CA", "San Bruno, CA", "San Carlos, CA", "San Clemente, CA", "San Diego, CA",
        "San Dimas, CA", "San Fernando, CA", "San Francisco, CA", "San Gabriel, CA", "San Geronimo, CA", "San Jacinto, CA", "San Joaquin, CA",
        "San Jose, CA", "San Juan Bautista, CA", "San Juan Capistrano, CA", "San Leandro, CA", "San Lorenzo, CA", "San Lucas, CA", "San Luis Obispo, CA",
        "San Marcos, CA", "San Marino, CA", "San Martin, CA", "San Mateo, CA", "San Miguel, CA", "San Pablo, CA", "San Rafael, CA", "San Ramon, CA",
        "Sanger, CA", "Santa Ana, CA", "Santa Barbara, CA", "Santa Clara, CA", "Santa Clarita, CA", "Santa Cruz, CA", "Santa Fe Springs, CA",
        "Santa Maria, CA", "Santa Monica, CA", "Santa Paula, CA", "Santa Rosa, CA", "Santa Ynez, CA", "Santee, CA", "Saratoga, CA", "Sausalito, CA",
        "Scotts Valley, CA", "Seal Beach, CA", "Seaside, CA", "Sebastopol, CA", "Seeley, CA", "Selma, CA", "Shafter, CA", "Shandon, CA",
        "Shasta Lake, CA", "Shaver Lake, CA", "Shingle Springs, CA", "Shingletown, CA", "Sierra Madre, CA", "Signal Hill, CA", "Simi Valley, CA",
        "Solana Beach, CA", "Soledad, CA", "Solvang, CA", "Sonoma, CA", "Sonora, CA", "Soquel, CA", "Soulsbyville, CA", "South Dos Palos, CA",
        "South El Monte, CA", "South Gate, CA", "South Lake Tahoe, CA", "South Pasadena, CA", "South San Francisco, CA", "Spreckels, CA",
        "Spring Valley, CA", "Springville, CA", "Squaw Valley, CA", "Stanford, CA", "Stanton, CA", "Stinson Beach, CA", "Stockton, CA",
        "Stratford, CA", "Strathmore, CA", "Strawberry, CA", "Suisun City, CA", "Summerland, CA", "Sun City, CA", "Sunnyvale, CA", "Sunol, CA",
        "Susanville, CA", "Sutter Creek, CA", "Sutter, CA", "Taft, CA", "Tahoe Vista, CA", "Talmage, CA", "Tehachapi, CA", "Tehama, CA",
        "Temecula, CA", "Temple City, CA", "Templeton, CA", "Terra Bella, CA", "Thousand Oaks, CA", "Thousand Palms, CA", "Three Rivers, CA",
        "Tipton, CA", "Tomales, CA", "Torrance, CA", "Tracy, CA", "Tranquillity, CA", "Traver, CA", "Trinidad, CA", "Truckee, CA", "Tulare, CA",
        "Tulelake, CA", "Tupman, CA", "Turlock, CA", "Tustin, CA", "Twain Harte, CA", "Twentynine Palms, CA", "Ukiah, CA", "Union City, CA",
        "Upland, CA", "Upper Lake, CA", "Vacaville, CA", "Vallecito, CA", "Vallejo, CA", "Valley Center, CA", "Valley Springs, CA",
        "Victorville, CA", "Villa Park, CA", "Visalia, CA", "Vista, CA", "Walnut Creek, CA", "Walnut Grove, CA", "Wasco, CA", "Waterford, CA",
        "Watsonville, CA", "Weaverville, CA", "Weed, CA", "Weldon, CA", "West Covina, CA", "West Hills, CA", "West Hollywood, CA",
        "West Sacramento, CA", "Westlake Village, CA", "Westley, CA", "Westminster, CA", "Westmorland, CA", "Westwood, CA", "Wheatland, CA",
        "Whittier, CA", "Wildomar, CA", "Williams, CA", "Willits, CA", "Willows, CA", "Wilmington, CA", "Wilseyville, CA", "Windsor, CA",
        "Winters, CA", "Winton, CA", "Woodlake, CA", "Woodland Hills, CA", "Woodland, CA", "Wrightwood, CA", "Yermo, CA", "Yorba Linda, CA",
        "Yountville, CA", "Yreka, CA", "Yuba City, CA", "Yucaipa, CA", "Yucca Valley, CA"
    ]
};


    var services = ["Tow Truck", "Tire Repair", "Fuel Delivery", "Jump Start"];

    // Autocomplete for states
    $("#states").autocomplete({
        source: states,
        minLength: 0,
        select: function (event, ui) {
            var selectedState = ui.item.value;
            $("#cityDropdown").show();
            $("#cities").autocomplete({
                source: cities[selectedState]
            });
        }
    }).focus(function () {
        $(this).autocomplete("search", "");
    });

    // Autocomplete for services
    $("#services").autocomplete({
        source: services
    });

    $("#searchButton").click(function() {
        // Retrieve selected values
        var selectedState = $("#states").val();
        var selectedCity = $("#cities").val();
        var selectedService = $("#services").val();

        // Define the base URL
        var baseUrl = "search_results.html?";

        // Construct the URL based on selected city and service
        var url;
        if (selectedCity === "Apple Valley, CA" && selectedService === "Tow Truck") {
            url = "Applevalley.html";
        } else if (selectedCity === "Acton, CA" && selectedService === "Tire Repair") {
            url = "acton_tire_repair.html";
        } else if (selectedCity === "Acton, CA" && selectedService === "Fuel Delivery") {
            url = "acton_fuel_delivery.html";
        } else if (selectedCity === "Acton, CA" && selectedService === "Jump Start") {
            url = "acton_jump_start.html";
        } else {
            // Default fallback URL
            url = baseUrl + "state=" + encodeURIComponent(selectedState) +
                "&city=" + encodeURIComponent(selectedCity) +
                "&service=" + encodeURIComponent(selectedService);
        }

        // Redirect to the appropriate page
        window.location.assign(url);
    });
   