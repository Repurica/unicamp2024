<script setup>
import bingo_cell from "./bingo_cell.vue";
import { ref, onMounted } from "vue";
import ProgressSpinner from "primevue/progressspinner";
import Card from "primevue/card";
import Button from "primevue/button";
const currentLocation = ref();
const isFunctionFinished = ref(false);
const geodata = ref();
const cheat = ref(false);

const data = ref({
  "Location 1": {
    location: "7 Eleven",
    lat: 1.309923836873561,
    lon: 103.8637688698451,
    alt: 15.1,
    range: 30,
    img: "location1.png",
    activity_img: "location1_activity.png",
    seq: 1,
    task: {
      "Bless someone wearing a cap!": 2,
      "Point at the ceiling and get 10 people to look within 3 minutes!": 3,
      "Do a Tik Tok dance together for 1 min (any dance)!": 2,
    },
  },

  "Location 2": {
    location: "Hajun Korean food stall",
    lat: 1.3099282,
    lon: 103.8640346,
    alt: 15.1,
    img: "location2.png",
    activity_img: "location2_activity.png",

    range: 30,
    seq: 2,
    task: {
      "Do the #photocropchallenge as a group!<br><br>Reference Video: ": 2,
      "Make a haiku including the name of any 3 restaurants in aperia!<br><br>\
    (Haikus are a poem of 3 lines, with 5 x 7 x 5 syllables in each line)\
    ": 5,
      "Successfully flip a coin heads 5 times in a row (or tails 5 times in a row)!": 3,
      "Find shops or products that match all letters of the alphabet. <br>Submit pictures of them in picture (or video) collage!": 5,
    },
  },

  "Location 3": {
    location: "Sheltered walkway outside raduga centre",
    lat: 1.3105362882579732,
    lon: 103.8632549910819,
    alt: 13.7,
    img: "location3.png",
    activity_img: "location3_activity.png",

    range: 30,
    seq: 3,
    task: {
      "Take a group jump shot in the reflection of the glass outside the mall!": 2,
      "It's F46 time! Take a group picture with everyone holding different fitspo poses!": 2,
    },
  },

  "Location 4": {
    location: "Food Court",
    lat: 1.3100474,
    lon: 103.8638658,
    // lat: 1.3098121594991325,
    // lon: 103.8638804814292,
    alt: 19.8,
    img: "location4.png",
    activity_img: "location4_activity.png",

    range: 30,
    seq: 4,
    task: {
      "Draw each member of your group in 30 seconds! <br>Post it on IG and tag @hopeuni!": 2,

      'Guess the title of the song and artist! <br><br>\
      (1 or 2 songs correct = 1 buck, 3 songs correct = 5 bucks)\
      <h3>Song 1</h3>\
      <audio src="song1.ogg" controls style="width: 100%;"></audio>\
      <h3>Song 2</h3>\
      <audio src="song2.ogg" controls style="width: 100%;"></audio>\
      <h3>Song 3</h3>\
      <audio src="song3.ogg" controls style="width: 100%;"></audio>\
': 5,
    },
  },

  "Location 5": {
    location: "Playground",
    lat: 1.3108934,
    lon: 103.8641684,
    alt: 15.1,
    img: "location5.png",
    activity_img: "location5_activity.png",

    range: 30,
    seq: 5,
    task: {
      "As a group, sit down in a circle and face outwards. Link your arms and try to stand up together!<br><br>Reference Video: ": 3,
    },
  },

  "Location 6": {
    location: "Tim Ho Wan",
    lat: 1.3094051226012189,
    lon: 103.86403375599417,
    alt: 15.1,
    img: "location6.png",
    activity_img: "location6_activity.png",

    range: 30,
    seq: 6,
    task: {
      'Recreate the mannequin poses<br><br><Image alt="user header" src="mannequin.png" preview />': 2,
      'Add the total price of all the items on the Tim Ho Wan Menu and use your bodies to form this total price!<br><br><Image alt="user header" src="TimHoWan.jpg" preview />': 3,
    },
  },

  "Location 7": {
    location: "Cold Storage",
    // lat: 1.3103638,
    // lon: 103.8639364,
    lat: 1.310429918713422,
    lon: 103.86384749088543,
    alt: 15.1,
    img: "location7.png",
    activity_img: "location7_activity.png",

    range: 40,
    seq: 7,
    task: {
      "Find items that add up to $49.75 in total! <br>(show their price tags in submissions)": 5,
      "Record yourselves saying 4 puns that involve cold storage products <br>(1 product for each pun)!": 3,
      "Find items that start with the first word of every word in this sentence: 'ow xiao fang is the coolest person ever'.": 3,
    },
  },

  "Special Location": {
    location: "Rooftop Garden",
    lat: 1.3100988274447354,
    lon: 103.86400251566495,
    alt: 24.1,
    img: "location8.png",
    activity_img: "location8_activity.png",

    range: 30,
    seq: 8,
    task: {
      "Complete the <b>Human Knot Challenge</b> together!<br><br>\
      Human knot: stand in a circle, reach across and grab hands with 2 different people (not adjacent to yourself).\
      Untangle yourselves without letting go of each other's hands!": 3,
      "One person to piggyback another person and walk from the entrance to this Aperia sign!<br><br><Image alt='user header' src='aperia_sign.png' preview />": 2,
      "As a group, complete 10 pushups, 10 crunches & 10 squats together!": 3,
    },
  },
});

function haversine(lat1, lon1, lat2, lon2, radius = 6371) {
  // Convert latitude and longitude from degrees to radians
  const toRadians = (angle) => (angle * Math.PI) / 180;
  lat1 = toRadians(lat1);
  lon1 = toRadians(lon1);
  lat2 = toRadians(lat2);
  lon2 = toRadians(lon2);

  // Calculate differences
  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;

  // Haversine formula
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Distance in kilometers (by default)
  const distance = radius * c;

  return Math.round(distance * 1000);
}

onMounted(async () => {
  // Function to handle successful retrieval of location
  function successCallback(position) {
    if (geodata.value) {
      const keys = Object.keys(position.coords);

      for (const key of keys) {
        alert("Location changed!");
        const element = document.getElementById(key);
        if (element) {
          const newValue = position.coords[key];
          const oldValue = geodata.value[key];
          if (newValue !== oldValue) {
            element.style.color = "red";
          } else {
            element.style.color = "";
          }
        }
      }
    }

    geodata.value = position.coords;
    currentLocation.value = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
      alt: position.coords.altitude,
    };
    console.log(currentLocation.value);
    isFunctionFinished.value = true;
    console.log(currentLocation.value);
    if (!currentLocation.value.lat) {
      window.alert(
        "Sorry the app cannot get your location data :(\nPlz try:\n1. Check your Internet Connection\n2. Use another device \n3. Telegram Jinming"
      );
      currentLocation.value = {
        lat: 1,
        lon: 1,
      };
    }
  }

  // Function to handle errors in retrieving location
  function errorCallback(error) {
    console.error("Error occurred: ", error.code, error.message);
  }

  // Options for geolocation request
  var options = {
    enableHighAccuracy: true, // Use high-accuracy mode if available
    timeout: 100, // Set timeout to 5 seconds
    maximumAge: 0, // Do not use cached location
  };

  // Start watching for location changes
  navigator.geolocation.watchPosition(successCallback, errorCallback, options);

  // Sort the data based on seq
  const sortedData = Object.entries(data.value).sort(
    (a, b) => a[1].seq - b[1].seq
  );

  // Update the data object with the sorted data
  const sortedDataObject = Object.fromEntries(sortedData);
  data.value = sortedDataObject;
});











</script>

<template>
  <div v-if="geodata">
    <p id="latitude">Latitude: {{ geodata.latitude }}</p>
    <p id="longitude">Longitude: {{ geodata.longitude }}</p>
    <p id="altitude">Altitude: {{ geodata.altitude }}</p>
    <p id="accuracy">Accuracy: {{ geodata.accuracy }}</p>
    <p id="altitudeAccuracy">
      Altitude Accuracy: {{ geodata.altitudeAccuracy }}
    </p>
    <p id="heading">Heading: {{ geodata.heading }}</p>
    <p id="speed">Speed: {{ geodata.speed }}</p>
    <p id="timestamp">Timestamp: {{ geodata.timestamp }}</p>
  </div>
  <Card style="width: 90%; margin: auto; margin-top: 20px">
    <template #title
      ><h1 style="text-align: center"><strong>Marketplace Quests</strong></h1>
      <h3><strong>Instructions</strong></h3>
    </template>
    <template #content>
      Based on these <strong>images</strong>, find the
      <strong>locations</strong> and complete <strong>tasks</strong> for banana
      bucks! <br /><br />
      Do submit proofs of completed tasks to your
      <strong>respective Segment ICs</strong> via telegram. <br />Please also
      <strong>collect your earned banana bucks</strong> from them at the
      playground before heading back to kallang riverside park!

      <br /><br />
      <strong>Note:</strong>
      <ol style="line-height: 1.5">
        <li>Please <strong>allow location permission!</strong></li>
        <li>You may click on the image to enlarge it</li>
        <li>
          You must be sufficiently near the location to unlock the activities
        </li>
        <li>
          Please refrain from <strong>hampering business operations</strong> by
          completing tasks in empty spaces
        </li>
        <li>
          For any questions, please approach our respective segment ICs

          <a href="https://t.me/Hyadaintan" target="_blank">@Hyadaintan</a>
          /
          <a href="https://t.me/Staninloo" target="_blank">@Staninloo</a>
          /
          <a href="https://t.me/ryantjh" target="_blank">@ryantjh</a>
          on tele
        </li>
        <li>
          Tech issue telegram
          <a href="https://t.me/repurika" target="_blank">Jinming</a>
        </li>
      </ol>
    </template>
  </Card>
  <div style="display: flex; justify-content: center">
    <Button @click="cheat = !cheat" style="margin-top: 10px">Cheat</Button>
  </div>

  <div
    v-if="currentLocation"
    style="
      width: 95%;
      margin: auto;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    "
  >
    <div
      v-for="(item, index) in data"
      :key="item.seq"
      style="padding: 3px; width: 95%"
    >
      <bingo_cell
        :task="item.task"
        :location="item.location"
        :alt="item.alt"
        :img="item.img"
        :youralt="currentLocation.alt"
        :name="index"
        :seq="item.seq"
        :range="item.range"
        :cheat="cheat"
        :activity_img="item.activity_img"
        :distance="
          haversine(
            currentLocation.lat,
            currentLocation.lon,
            item.lat,
            item.lon
          )
        "
        style="width: 100%"
      >
      </bingo_cell>
    </div>
  </div>
  <div
    v-else
    class="card flex justify-content-center"
    style="text-align: center; margin-top: 20px"
  >
    <ProgressSpinner />
    <p style="color: white">Loading your location... Plz wait</p>
  </div>
</template>
