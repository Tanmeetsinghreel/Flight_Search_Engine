var citiesByState = {
    Punjab: ["Amritsar", "Bathinda", "Ludhiana", "Pathankot", "Patiala"],
    Karnataka: ["Bengaluru", "Mangaluru", "Hubballi", "Belagavi", "Kalaburagi", "Ballary", "Mysuru", "Bidar"],
    Bihar: ["Gaya", "Patna", "Begusarai", "Bhagalpur", "Darbhanga", "Munger", "Muzaffarpur", "Saharsa", "Raxaul"],
    Odisha: ["Bhubaneswar", "Puri", "Cuttack"],
    Arunachal_Pradesh: ["Angul", "Balangir","Barbil", "Bargarh", "Baripada", "Bhawanipatna", "Bhubaneswar", "Brahmapur", "Cuttack", "Dhamra", "Dhenkanal", "Jajpur", "Jeypore", "Jharsuguda", "Kendujhar", "Lanjigarh", "Nuapada", "Phulbani", "Rairangpur", "Rayagada", "Rourkela", "Sambalpur"],
    Madhya_Pradesh: ["Indore", "Bhopal", "Chhatarpur", "Chhindwara", "Gwalior", "Jabalpur" ,"Khajuraho", "Rewa"],
    Tamil_Nadu: [""],
    Goa: [],
    Himachal_Pradesh: [],
    Gujarat: [],
    Haryana: [],
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Chhattisgarh: [],
    Uttar_Pradesh: [],
    Manipur: [],
    Mizoram: [],
    Kerala: ["kochi", "Kanpur"],
    West_Bengal: [],
    Rajasthan: [],
    Nagaland: [],
    Tripura: [],
    Jharkhand: [],
    Sikkim: [],
    Uttarakhand: [],
    Meghalaya: [],
    Telangana: [],
    Delhi: [],
    Jammu_and_Kashmir: [],
    Andhra_Pradesh: [],
    Assam: [],
    Odisha: ["Bhubaneswar", "Puri", "Cuttack"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Kerala: ["kochi", "Kanpur"]
}
function makeSubmenu(value) {
    if (value.length == 0) document.getElementById("citySelect").innerHTML = "<option></option>";
    else {
        var citiesOptions = "";
        for (cityId in citiesByState[value]) {
            citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
        }
        document.getElementById("citySelect").innerHTML = citiesOptions;
    }
}
function displaySelected() {
    var country = document.getElementById("countrySelect").value;
    var city = document.getElementById("citySelect").value;
    alert(country + "\n" + city);
}
function resetSelection() {
    document.getElementById("countrySelect").selectedIndex = 0;
    document.getElementById("citySelect").selectedIndex = 0;
}

const form = document.getElementById('Origin');
const Origin_cityInput = form.elements.Origin_city;

const flights = [
    {
      "name": "Flight 1",
    },
    {
      "name": "Flight 2",
    },
    {
      "name": "Flight 3",
    }
  ];
    
  form.addEventListener('submit', function(event) {
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (flights.Origin_city === Origin_cityInput.value) {
        // The email input matches a user in the object
        event.preventDefault();
        // Do something with the user, such as redirecting to a different page
      }
    }
  });
  
  
  