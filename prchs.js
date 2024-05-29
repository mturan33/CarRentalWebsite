

		
const citiesByCountry = {
        "USA": ["New York", "California", "Texas", "Florida", "Illinois"],
        "Canada": ["Ontario", "British Columbia", "Quebec", "Alberta", "Manitoba"],
        "UK": ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"],
        "Germany": ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne"],
        "Turkey": ["Istanbul", "Ankara", "Izmir", "Antalya", "Adana"]
    };

    const neighborhoodsByCity = {
        "New York": ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
        "California": ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San Jose"],
        "Texas": ["Dallas", "Houston", "Austin", "San Antonio", "Fort Worth"],
        "Florida": ["Miami", "Orlando", "Tampa", "Jacksonville", "Tallahassee"],
        "Illinois": ["Chicago", "Aurora", "Naperville", "Springfield", "Peoria"],
        "Ontario": ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton"],
        "British Columbia": ["Vancouver", "Victoria", "Surrey", "Burnaby", "Richmond"],
        "Quebec": ["Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil"],
        "Alberta": ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "St. Albert"],
        "Manitoba": ["Winnipeg", "Brandon", "Steinbach", "Thompson", "Portage la Prairie"],
        "London": ["Chelsea", "Kensington", "Westminster", "Camden", "Islington"],
        "Manchester": ["Old Trafford", "Didsbury", "Salford", "Chorlton", "Rusholme"],
        "Birmingham": ["Sutton Coldfield", "Halesowen", "Solihull", "West Bromwich", "Harborne"],
        "Liverpool": ["Toxteth", "Anfield", "Everton", "Kirkdale", "Walton"],
        "Leeds": ["Headingley", "Harehills", "Chapel Allerton", "Beeston", "Morley"],
        "Berlin": ["Mitte", "Kreuzberg", "Prenzlauer Berg", "Charlottenburg", "Friedrichshain"],
        "Munich": ["Altstadt", "Schwabing", "Maxvorstadt", "Haidhausen", "Bogenhausen"],
        "Hamburg": ["Altona", "Eimsbüttel", "Wandsbek", "Harburg", "Bergedorf"],
        "Frankfurt": ["Sachsenhausen", "Bornheim", "Nordend", "Westend", "Ostend"],
        "Cologne": ["Neustadt", "Deutz", "Ehrenfeld", "Nippes", "Mülheim"],
        "Istanbul": ["Kadıköy", "Beşiktaş", "Üsküdar", "Şişli", "Fatih"],
        "Ankara": ["Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Altındağ"],
        "Izmir": ["Karşıyaka", "Bornova", "Konak", "Buca", "Çeşme"],
        "Antalya": ["Muratpaşa", "Konyaaltı", "Kepez", "Alanya", "Manavgat"],
        "Adana": ["Sarıçam", "Çukurova", "Seyhan", "Ceyhan", "Yüreğir"]
    };

    function populateCities() {
        const countrySelect = document.getElementById('country');
        const citySelect = document.getElementById('city');
        const neighborhoodSelect = document.getElementById('neighborhood');
        const selectedCountry = countrySelect.value;

        citySelect.innerHTML = '<option value="">Select City</option>';
        neighborhoodSelect.innerHTML = '<option value="">Select Neighborhood</option>';

        if (selectedCountry in citiesByCountry) {
            citiesByCountry[selectedCountry].forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        }
    }
	


    function populateNeighborhoods() {
        const citySelect = document.getElementById('city');
        const neighborhoodSelect = document.getElementById('neighborhood');
        const selectedCity = citySelect.value;

        neighborhoodSelect.innerHTML = '<option value="">Select Neighborhood</option>';

        if (selectedCity in neighborhoodsByCity) {
            neighborhoodsByCity[selectedCity].forEach(neighborhood => {
                const option = document.createElement('option');
                option.value = neighborhood;
                option.textContent = neighborhood;
                neighborhoodSelect.appendChild(option);
            });
        }
    }

    document.getElementById('country').addEventListener('change', populateCities);
    document.getElementById('city').addEventListener('change', populateNeighborhoods);