const questions = [{ // https://flagpedia.net/index
    capitalByCountry: "Afghanistan",
    options: ["Kabul", "Kandahar ", "Herat", "Mazar-i-Sharif"]
},
{
    capitalByCountry: "Argentina",
    options: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"]
},
{
    capitalByCountry: "Australia",
    options: ["Canberra", "Sydney", "Melbourne", "Adelaide"]
},
{
    capitalByCountry: "Austria",
    options: ["Vienna", "Innsbruck", "Salzburg", "Graz"]
},
{
    capitalByCountry: "Bahamas",
    options: ["Nassau", "Freeport", "West End", "Coopers Town"]
},
{
    capitalByCountry: "Belgium",
    options: ["Brussels", "Antwerp", "Ghent", "Mons"]
},
{
    capitalByCountry: "Belize",
    options: ["Belmopan", "Belize City", "La Democracia", "Santa Cruz"]
},
{
    capitalByCountry: "Brazil",
    options: ["Brasilia", "Rio de Janeiro", "São Paulo", "Curitiba"]
},
{
    capitalByCountry: "Bulgaria",
    options: ["Sofia", "Plovdiv", "Stara Zagora", "Varna"]
},
{
    capitalByCountry: "Cambodia",
    options: ["Phnom Penh", "Krong Siem Reap", "Krong Battambang", "Siem Pang"]
},
{
    capitalByCountry: "Canada",
    options: ["Ottawa", "Quebec", "Toronoto", "Vancouver"]
},
{
    capitalByCountry: "Chile",
    options: ["Santiago", "Concepcion", "Puerto Montt", "Antofagasta"]
},
{
    capitalByCountry: "China",
    options: ["Beijing", "Shanghai", "Shenzhen", "Chengdu"]
},
{
    capitalByCountry: "Colombia",
    options: ["Bogota", "Medellín", "Barranquilla", "Cali"]
},
{
    capitalByCountry: "Costa Rica",
    options: ["San Jose", "San Ramon", "Playa Hermosa", "Cartago"]
},
{
    capitalByCountry: "Cuba",
    options: ["Havana", "Santa Clara", "Matanzas", "Santiago de Cuba"]
},
{
    capitalByCountry: "Denmark",
    options: ["Copenhagen", "Esbjerg", "Aalborg", "Fredericia"]
},
{
    capitalByCountry: "Ecuador",
    options: ["Quito", "Guayaquil", "Santo Domingo", "Manta"]
},
{
    capitalByCountry: "Egypt",
    options: ["Cairo", "Alexandria", "New Cairo City", "Aswan"]
},
{
    capitalByCountry: "England",
    options: ["London", "Birmingham", "Liverpool", "Bristol"]
},
{
    capitalByCountry: "Ethiopia",
    options: ["Addis Ababa", "Bahir Dar", "Hawassa", "Mek'ele"]
},
{
    capitalByCountry: "Finland",
    options: ["Helsinki", "Turku", "Oulu", "Tampere"]
},
{
    capitalByCountry: "France",
    options: ["Paris", "Nice", "Marseille", "Versailles"]
},
{
    capitalByCountry: "Germany",
    options: ["Berlin", "Frankfurt", "Hamburg", "Munich"]
},
{
    capitalByCountry: "Greece",
    options: ["Athens", "Thessaloniki", "Patras", "Alexandroupoli"]
},
{
    capitalByCountry: "Honduras",
    options: ["Tegucigalpa", "San Pedro Sula", "La Ceiba", "El Progreso"]
},
{
    capitalByCountry: "Hungary",
    options: ["Budapest", "Miskolc", "Kecskemét", "Székesfehérvár"]
},
{
    capitalByCountry: "Iceland",
    options: ["Reykjavik", "Hella", "Reykholt", "Kálfafell"]
},
{
    capitalByCountry: "India",
    options: ["New Delhi", "Mumbai", "Bombay", "Kanpur"]
},
{
    capitalByCountry: "Iran",
    options: ["Tehran", "Isfahan", "Mashhad", "Tabriz"]
},
{
    capitalByCountry: "Iraq",
    options: ["Baghdad", "Erbil", "Basrah", "Karbala"]
},
{
    capitalByCountry: "Ireland",
    options: ["Dublin", "Galway", "Waterford", "Limerick"]
},
{
    capitalByCountry: "Italy",
    options: ["Rome", "Milan", "Venice", "Bologna"]
},
{
    capitalByCountry: "Jamaica",
    options: ["Kingston", "Portmore", "Santa Cruz", "Mandeville"]
},
{
    capitalByCountry: "Japan",
    options: ["Tokyo", "Osaka", "Sapporo", "Hiroshima"]
},
{
    capitalByCountry: "Jordan",
    options: ["Amman", "Irbid", "Madaba", "Azraq"]
},
{
    capitalByCountry: "Kenya",
    options: ["Nairobi", "Mombasa", "Nakuru", "Kisumu"]
},
{
    capitalByCountry: "Laos",
    options: ["Vientiane", "Pakse", "Salavan", "Pak Beng"]
},
{
    capitalByCountry: "Libya",
    options: ["Tripoli", "Misrata", "Benghazi", "Sirte"]
},
{
    capitalByCountry: "Mongolia",
    options: ["Ulaanbaatar", "Sainshand", "Bayanbulag", "Ulaangom"]
},
{
    capitalByCountry: "Morocco",
    options: ["Rabat", "Marrakesh", "Casablanca", "Tangier"]
},
{
    capitalByCountry: "Nepal",
    options: ["Kathmandu", "Lalitpur", "Biratnagar", "Pokhara"]
},
{
    capitalByCountry: "New Zealand",
    options: ["Wellington", "Auckland", "Christchurch", "Queenstown"]
},
{
    capitalByCountry: "Nicaragua",
    options: ["Managua", "Chinandega", "León", "Esteli"]
},
{
    capitalByCountry: "Nigeria",
    options: ["Abuja", "Lagos", "Ibadan", "Kano"]
},
{
    capitalByCountry: "North Korea",
    options: ["Pyongyang", "Nampo", "Chongjin", "Hamhung"]
},
{
    capitalByCountry: "Norway",
    options: ["Oslo", "Bergen", "Trondheim", "Stavanger"]
},
{
    capitalByCountry: "Pakistan",
    options: ["Islamabad", "Karachi", "Multan", "Quetta"]
},
{
    capitalByCountry: "Paraguay",
    options: ["Asuncion", "Encarnacion", "Concepción", "Loma Plata"]
},
{
    capitalByCountry: "Peru",
    options: ["Lima", "Cusco", "Tarapoto", "Arequipa"]
},
{
    capitalByCountry: "Philippines",
    options: ["Manila", "Angeles", "Baguio", "Davao City"]
},
{
    capitalByCountry: "Poland",
    options: ["Warsaw", "Wrocław", "Gdańsk", "Katowice"]
},
{
    capitalByCountry: "Portugal",
    options: ["Lisbon", "Porto", "Coimbra", "Setúbal"]
},
{
    capitalByCountry: "Qatar",
    options: ["Doha", "Ar-Rayyan", "Simsimah", "Lusail"]
},
{
    capitalByCountry: "Romania",
    options: ["Bucharest", "Cluj-Napoca", "Galați", "Brașov"]
},
{
    capitalByCountry: "Russia",
    options: ["Moscow", "St Petersburg", "Volgograd", "Saratov"]
},
{
    capitalByCountry: "Saudi Arabia",
    options: ["Riyadh", "Jeddah", "Mecca", "Taif"]
},
{
    capitalByCountry: "Serbia",
    options: ["Belgrade", "Kragujevac", "Novi Sad", "Subotica"]
},
{
    capitalByCountry: "Somalia",
    options: ["Mogadishu", "Bosaso", "Kismayo", "Luuq"]
},
{
    capitalByCountry: "South Korea",
    options: ["Seoul", "Incheon", "Busan", "Daegu"]
},
{
    capitalByCountry: "Spain",
    options: ["Madrid", "Barcelona", "Valencia", "Zaragoza"]
},
{
    capitalByCountry: "Sudan",
    options: ["Khartoum", "Port Sudan", "Karima", "Kassala"]
},
{
    capitalByCountry: "Sweden",
    options: ["Stockholm", "Gothenburg", "Malmö", "Uppsala"]
},
{
    capitalByCountry: "Switzerland",
    options: ["Bern", "Zürich", "Geneva", "Lucerne"]
},
{
    capitalByCountry: "Syria",
    options: ["Damascus", "Aleppo", "Homs", "Idlib"]
},
{
    capitalByCountry: "Thailand",
    options: ["Bangkok", "Pattaya City", "Chiang Mai", "Rayong"]
},
{
    capitalByCountry: "Tunisia",
    options: ["Tunis", "Sfax", "Sousse", "Monastir"]
},
{
    capitalByCountry: "Uganda",
    options: ["Kampala", "Mbale", "Gulu", "Masaka"]
},
{
    capitalByCountry: "Ukraine",
    options: ["Kyiv", "Lviv", "Kharkiv", "Poltava"]
},
{
    capitalByCountry: "United Arab Emirates",
    options: ["Abu Dhabi", "Dubai", "Al Ain", "Ras Al-Khaimah"]
},
{
    capitalByCountry: "Uruguay",
    options: ["Montevideo", "Santa Lucia", "Rocha", "Morato"]
},
{
    capitalByCountry: "Uzbekistan",
    options: ["Tashkent", "Samarkand", "Nukus", "Zarafshan"]
},
{
    capitalByCountry: "Venezuela",
    options: ["Caracas", "Valencia", "Barquisimeto", "Maracaibo"]
},
{
    capitalByCountry: "Vietnam",
    options: ["Hanoi", "Saigon", "Ho Chi Minh City", "Da Nang"]
},
{
    capitalByCountry: "Zambia",
    options: ["Lusaka", "Zambezi", "Kitwe", "Kasama"]
},
{
    capitalByState: "Alabama",
    options: ["Montgomery", "Birmingham", "Mobile", "Huntsville"]
},
{
    capitalByState: "Alaska",
    options: ["Juneau", "Anchorage", "Fairbanks", "Seward"]
},
{
    capitalByState: "Arizona",
    options: ["Phoenix", "Tucson", "Flagstaff", "Yuma"]
},
{
    capitalByState: "Arkansas",
    options: ["Little Rock", "Fort Smith", "Texarkana", "Clarksville"]
},
{
    capitalByState: "California",
    options: ["Sacramento", "San Francisco", "Los Angeles", "San Jose"]
},
{
    capitalByState: "Colorado",
    options: ["Denver", "Colorado Springs", "Fort Collins", "Boulder"]
},
{
    capitalByState: "Connecticut",
    options: ["Hartford", "New Haven", "Bridgeport", "Windsor"]
},
{
    capitalByState: "Delaware",
    options: ["Dover", "Wilmington", "Bridgeville", "Milton"]
},
{
    capitalByState: "Florida",
    options: ["Tallahassee", "Jacksonville", "Tampa", "Miami"]
},
{
    capitalByState: "Georgia",
    options: ["Atlanta", "Savannah", "Macon", "Athens"]
},
{
    capitalByState: "Hawaii",
    options: ["Honolulu", "Hilo", "Kailua-Kona", "Pearl Harbor"]
},
{
    capitalByState: "Idaho",
    options: ["Boise", "Twin Falls", "Coeur d'Alene", "Pocatello"]
},
{
    capitalByState: "Illinois",
    options: ["Springfield", "Chicago", "Peoria", "Rockford"]
},
{
    capitalByState: "Indiana",
    options: ["Indianapolis", "Fort Wayne", "Evansville", "Terre Haute"]
},
{
    capitalByState: "Iowa",
    options: ["Des Moines", "Cedar Rapids", "Sioux City", "Daven Port"]
},
{
    capitalByState: "Kansas",
    options: ["Topeka", "Kansas City", "Wichita", "Dodge City"]
},
{
    capitalByState: "Kentucky",
    options: ["Frankfort", "Lexington", "Louisville", "Bowling Green"]
},
{
    capitalByState: "Louisiana",
    options: ["Baton Rouge", "New Orleans", "Shreveport", "Lafayette"]
},
{
    capitalByState: "Maine",
    options: ["Augusta", "Bangor", "Portland", "Newport"]
},
{
    capitalByState: "Maryland",
    options: ["Annapolis", "Baltimore", "Rockville", "Gaithersburg"]
},
{
    capitalByState: "Massachusetts",
    options: ["Boston", "Worcester", "Springfield", "Salem"]
},
{
    capitalByState: "Michigan",
    options: ["Lansing", "Detroit", "Grand Rapids", "Ann Arbor"]
},
{
    capitalByState: "Minnesota",
    options: ["Saint Paul", "Minneapolis", "Rochester", "Duluth"]
},
{
    capitalByState: "Mississippi",
    options: ["Jackson", "Tupelo", "Biloxi", "Meridian"]
},
{
    capitalByState: "Missouri",
    options: ["Jefferson City", "St. Louis", "Columbia", "Kansas City"]
},
{
    capitalByState: "Montana",
    options: ["Helena", "Missoula", "Billings", "Bozeman"]
},
{
    capitalByState: "Nebraska",
    options: ["Lincoln", "Omaha", "Grand Island", "Scottsbluff"]
},
{
    capitalByState: "Nevada",
    options: ["Carson City", "Reno", "Las Vegas", "Henderson"]
},
{
    capitalByState: "New Hampshire",
    options: ["Concord", "Manchester", "Portsmouth", "Dover"]
},
{
    capitalByState: "New Jersey",
    options: ["Trenton", "Newark", "Princeton", "Morristown"]
},
{
    capitalByState: "New Mexico",
    options: ["Santa Fe", "Albuquerque", "Santa Rosa", "Gallup"]
},
{
    capitalByState: "New York",
    options: ["Albany", "New York City", "Syracuse", "Rochester"]
},
{
    capitalByState: "North Carolina",
    options: ["Raleigh", "Charlotte", "Fayetteville", "Durham"]
},
{
    capitalByState: "North Dakota",
    options: ["Bismarck", "Fargo", "Grand Forks", "Minot"]
},
{
    capitalByState: "Ohio",
    options: ["Columbus", "Cleveland", "Cincinnati", "Akron"]
},
{
    capitalByState: "Oklahoma",
    options: ["Oklahoma City", "Tulsa", "Moore", "Stillwater"]
},
{
    capitalByState: "Oregon",
    options: ["Salem", "Portland", "Eugene", "Medford"]
},
{
    capitalByState: "Pennsylvania",
    options: ["Harrisburg", "Philadelphia", "Pittsburgh", "Allentown"]
},
{
    capitalByState: "Rhode Island",
    options: ["Providence", "Portsmouth", "Bristol", "Warren"]
},
{
    capitalByState: "South Carolina",
    options: ["Columbia", "Charlestown", "Myrtle Beach", "Spartanburg"]
},
{
    capitalByState: "South Dakota",
    options: ["Pierre", "Sioux Falls", "Rapid City", "Watertown"]
},
{
    capitalByState: "Tennessee",
    options: ["Nashville", "Memphis", "Knoxville", "Chattanooga"]
},
{
    capitalByState: "Texas",
    options: ["Austin", "Dallas", "Houston", "San Antonio"]
},
{
    capitalByState: "Utah",
    options: ["Salt Lake City", "Provo", "Ogden", "St. George"]
},
{
    capitalByState: "Vermont",
    options: ["Montpelier", "Burligton", "Manchester", "St. Johnsbury"]
},
{
    capitalByState: "Virginia",
    options: ["Richmond", "Norfolk", "Newport News", "Lynchburg"]
},
{
    capitalByState: "Washington",
    options: ["Olympia", "Seattle", "Spokane", "Tacoma"]
},
{
    capitalByState: "West Virginia",
    options: ["Charleston", "Sutton", "Beckley", "Clarksburg"]
},
{
    capitalByState: "Wisconsin",
    options: ["Madison", "Milwaukee", "Green Bay", "Eau Claire"]
},
{
    capitalByState: "Wyoming",
    options: ["Cheyenne", "Casper", "Jackson", "Sheridan"]
},
{
    stateByCity: "HuntsVille",
    options: ["Alabama", "Mississippi", "Georgia", "Tennessee"]
},
{
    stateByCity: "Seward",
    options: ["Alaska", "New Jersey", "Montana", "Oregon"]
},
{
    stateByCity: "Prescott",
    options: ["Arizona", "Utah", "Idaho", "Nevada"]
},
{
    stateByCity: "Texarkana",
    options: ["Arkansas", "Texas", "Oklahoma", "Louisiana"]
},
{
    stateByCity: "Eureka",
    options: ["California", "Oregon", "Washington", "Idaho"]
},
{
    stateByCity: "Pueblo",
    options: ["Colorado", "New Mexico", "Arizona", "Texas"]
},
{
    stateByCity: "Coeur d'Alene",
    options: ["Idaho", "Washington", "Iowa", "Wisconsin"]
},
{
    stateByCity: "Bozeman",
    options: ["Montana", "Illinois", "Indiana", "Ohio"]
},
{
    stateByCity: "Minot",
    options: ["North Dakota", "Kansas", "Missouri", "Oklahoma"]
},
{
    stateByCity: "St. Cloud",
    options: ["Minnesota", "Michigan", "Vermont", "Kentucky"]
},
{
    stateByCity: "Cedar Rapids",
    options: ["Iowa", "Kansas", "Georgia", "Virginia"]
},
{
    stateByCity: "Champaign",
    options: ["Illinois", "Ohio", "Indiana", "Tennessee"]
},
{
    stateByCity: "Lawrence",
    options: ["Kansas", "Massachusetts", "Missouri", "New York"]
},
{
    stateByCity: "Eugene",
    options: ["Oregon", "Alabama", "Nevada", "Maine"]
},
{
    stateByCity: "New Haven",
    options: ["Connecticut", "Pennsylvania", "Michigan", "Oregon"]
},
{
    stateByCity: "Ann Arbor",
    options: ["Michigan", "Minnesota", "Wisconsin", "Ohio"]
},
{
    stateByCity: "Bowling Green",
    options: ["Kentucky", "Tennessee", "Wisconsin", "South Dakota"]
},
{
    stateByCity: "Lynchburg",
    options: ["Virginia", "South Carolina", "Alabama", "Louisiana"]
},
{
    stateByCity: "Augusta",
    options: ["Georgia", "Florida", "Alabama", "Tennessee"]
},
{
    stateByCity: "Casper",
    options: ["Wyoming", "Idaho", "Nevada", "Arizona"]
},
{ 
    countryByFlag: "br",
    options: ["Brazil", "Panama", "Argentina", "Mexico"]
},
{
    countryByFlag: "de",
    options: ["Germany", "France", "Luxembourg", "Italy"]
},
{
    countryByFlag: "fr",
    options: ["France", "Germany", "Ireland", "Italy"]
},
{
    countryByFlag: "au",
    options: ["Australia", "Cook Islands", "United Kingdom", "New Zealand"]
},
{
    countryByFlag: "at",
    options: ["Austria", "Bolivia", "Bulgaria", "Hungary"]
},
{
    countryByFlag: "es",
    options: ["Spain", "Portugal", "Paraguay", "Brazil"]
},
{
    countryByFlag: "ru",
    options: ["Russia", "Austria", "Bulgaria", "Germany"]
},
{
    countryByFlag: "fi",
    options: ["Finland", "Iceland", "Norway", "Sweden"]
},
{
    countryByFlag: "za",
    options: ["South Africa", "Zimbabwe", "Sudan", "Mozambique"]
},
{
    countryByFlag: "mx",
    options: ["Mexico", "Italy", "Peru", "Romania"]
},
{
    countryByFlag: "cr",
    options: ["Costa Rica", "Nicaragua", "Paraguay", "Ecuador"]
},
{
    countryByFlag: "cu",
    options: ["Cuba", "Guyana", "Jordan", "Sudan"]
},
{
    countryByFlag: "iq",
    options: ["Iraq", "Iran", "Afghanistan", "Paktistan"]
},
{
    countryByFlag: "kr",
    options: ["South Korea", "Japan", "North Korea", "Philippines"]
},
{
    countryByFlag: "cn",
    options: ["China", "Russia", "Vietnam", "Laos"]
},
{
    countryByFlag: "id",
    options: ["Indonesia", "India", "Monaco", "Poland"]
},
{
    countryByFlag: "in",
    options: ["India", "Iran", "Iraq", "Kuwait"]
},
{
    countryByFlag: "ar",
    options: ["Argentina", "India", "Brazil", "Paraguay"]
},
{
    countryByFlag: "ke",
    options: ["Kenya", "Libya", "Ghana", "Tanzania"]
},
{
    countryByFlag: "ch",
    options: ["Switzerland", "Sweden", "Tonga", "Finland"]
},
{
    flagByCountry: "France",
    options: ["fr", "de", "it", "ru"]
},
{
    flagByCountry: "Germany",
    options: ["de", "fr", "it", "hu"]
},
{
    flagByCountry: "Norway",
    options: ["no", "is", "fi", "se"]
},
{
    flagByCountry: "New Zealand",
    options: ["nz", "gb", "au", "ck"]
},
{
    flagByCountry: "Hungary",
    options: ["hu", "at", "bo", "bg"]
},
{
    flagByCountry: "Greece",
    options: ["gr", "ga", "hn", "lr"]
},
{
    flagByCountry: "Iceland",
    options: ["is", "no", "dk", "fi"]
},
{
    flagByCountry: "Malaysia",
    options: ["my", "lr", "gr", "th"]
},
{
    flagByCountry: "Taiwan",
    options: ["tw", "ve", "uy", "sg"]
},
{
    flagByCountry: "Poland",
    options: ["pl", "pe", "at", "id"]
},
{
    flagByCountry: "Ireland",
    options: ["ie", "it", "lu", "ng"]
},
{
    flagByCountry: "United Kingdom",
    options: ["gb", "nz", "ck", "au"]
},
{
    flagByCountry: "Greenland",
    options: ["gl", "hn", "fm", "so"]
},
{
    flagByCountry: "Cuba",
    options: ["cu", "jo", "mz", "ps"]
},
{
    flagByCountry: "Israel",
    options: ["il", "kp", "iq", "dz"]
},
{
    flagByCountry: "Japan",
    options: ["jp", "bd", "gl", "vn"]
},
{
    flagByCountry: "Netherlands",
    options: ["nl", "am", "ga", "hu"]
},
{
    flagByCountry: "Chile",
    options: ["cl", "cz", "mm", "pa"]
},
{
    flagByCountry: "Denmark",
    options: ["dk", "fo", "ua", "lu"]
},
{
    flagByCountry: "India",
    options: ["in", "ir", "ar", "tj"]
},
{
    movieByPhrase: "Phone home",
    options: ["E.T.", "Gremlins", "Batman", "Home Alone"]
},
{
    movieByPhrase: "I'm the king of the world",
    options: ["Titanic", "King Kong", "The Lion King", "Toy Story"]
},
{
    movieByPhrase: "Stupid is as stupid does",
    options: ["Forrest Gump", "Home Alone", "Liar Liar", "Rain Man"]
},
{
    movieByPhrase: "Why did it have to be snakes",
    options: ["Raiders of the Lost Ark", "Crocodile Dundee", "Rambo", "Blazing Saddles"]
},
{
    movieByPhrase: "Where we're going, we don't need roads",
    options: ["Back to the Future", "The Wizard of Oz", "Smokey and the Bandit", "Airport"]
},
{
    movieByPhrase: "Fat, drunk, and stupid is no way to go through life, son",
    options: ["Animal House", "Smokey and the Bandit", "Blazing Saddles", "Airport"]
},
{
    movieByPhrase: "I got gaps; you got gaps; we fill each other's gaps",
    options: ["Rocky", "Grease", "Love Story", "Heaven Can Wait"]
},
{
    movieByPhrase: "I'm a goddamn marvel of modern science",
    options: ["One Flew Over the Cuckoo's Nest", "Superman", "Young Frankenstein", "Men in Black"]
},
{
    movieByPhrase: "I love the smell of napalm in the morning",
    options: ["Apocalypse Now", "Saving Private Ryan", "Full Metal Jacket", "Platoon"]
},
{
    movieByPhrase: "It can only be attributable to human error",
    options: ["2001", "Titanic", "Alien", "Top Gun"]
},
{
    movieByPhrase: "We came, we saw, we kicked its ass",
    options: ["Ghostbusters", "Blazing Saddles", "Airport", "Animal House"]
},
{
    movieByPhrase: "I'm an excellent driver",
    options: ["Rain Man", "Top Gun", "Smokey and the Bandit", "The Fast and the Furious"]
},
{
    movieByPhrase: "I see dead people",
    options: ["The Sixth Sense", "The Exorcist", "The Shining", "Halloween"]
},
{
    movieByPhrase: "Keep the change, you filthy animal",
    options: ["Home Alone", "Animal House", "Airplane", "Blazing Saddles"]
},
{
    movieByPhrase: "To infinity and beyond",
    options: ["Toy Story", "2001", "Interstellar", "Contact"]
},
{
    movieByPhrase: "I'll be back",
    options: ["Terminator", "Forrest Gump", "Rain Man", "Love Story"]
},
{
    movieByPhrase: "Too many notes",
    options: ["Amadeus", "The Sound of Music", "La La Land", "A Star is Born"]
},
{
    movieByPhrase: "You're trying to seduce me",
    options: ["The Graduate", "Dirty Dancing", "Love Actually", "An Affair to Remember"]
},
{
    movieByPhrase: "The fall will probably kill you",
    options: ["Butch Cassidy and the Sundance Kid", "Die Hard", "Lethal Weapon", "Speed"]
},
{
    movieByPhrase: "Pay no attention to that man behind the curtain",
    options: ["The Wizard of Oz", "A Star is Born", "Chicago", "Cabaret"]
},
{
    movieByDirector: "Alfred Hitchcock",
    options: ["The Birds", "The Dirty Dozen", "Doctor Zhivago", "The Sting"]
},
{
    movieByDirector: "Steven Spielberg",
    options: ["Saving Private Ryan", "Ghostbusters", "Ghost", "Fatal Attraction"]
},
{
    movieByDirector: "Martin Scorsese",
    options: ["Goodfellas", "Titanic", "Forrest Gump", "Armageddon"]
},
{
    movieByDirector: "Stanley Kubrick",
    options: ["A Clockwork Orange", "Back to the Future", "Top Gun", "Fatal Attraction"]
},
{
    movieByDirector: "Quentin Tarantino",
    options: ["Pulp Fiction", "The Sixth Sense", "The Fugitive", "The Dark Knight"]
},
{
    movieByDirector: "Francis Ford Coppola",
    options: ["Apocalypse Now", "The Sting", "One Flew Over the Cuckoo's Nest", "American Graffiti"]
},
{
    movieByDirector: "James Cameron",
    options: ["Titanic", "Rain Man", "Gremlins", "Rambo"]
},
{
    movieByDirector: "Woody Allen",
    options: ["Manhattan", "Taxi Driver", "Chinatown", "Lost in Translation"]
},
{
    movieByDirector: "Tim Burton",
    options: ["Beetlejuice", "E.T.", "Rain Man", "The Amityville Horror"]
},
{
    movieByDirector: "George Lucas",
    options: ["American Graffiti", "The Godfather", "Superman", "Rocky"]
}];
