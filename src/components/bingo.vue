<script setup>
import bingo_cell from "./bingo_cell.vue";
import { ref, onMounted } from "vue";
import ProgressSpinner from "primevue/progressspinner";
import Card from "primevue/card";
import Image from "primevue/image";

const currentLocation = ref();
const isFunctionFinished = ref(false);

const data = ref({
  1: {
    location: "7 eleven",
    lat: 1.3098556201862748,
    lon: 103.86378043003276,
    img: "/src/public/pending.png",
    seq: 1,
    task: {
      "Bless someone wearing a cap": 1,
      "Point at the ceiling and get 10 people to look within 3 minutes": 2,
      "Do a Tik Tok dance (any dance for 1 min)": 2,
    },
  },

  2: {
    location: "Hajun Korean food stall",
    lat: 1.3099300320341885,
    lon: 103.86399232453728,
    img: "/src/public/pending.png",
    range: 1000000000,
    seq: 2,
    task: {
      "#photocropchallenge": 1,
      "Make a haiku including the name of any 3 restaurants in aperia<br>\
    *Haikus are a poem of 3 lines, with 5 x 7 x 5 syllables in each line\
    ": 1,
      "Video of someone flipping heads 5 times in a row (or tails 5 times in a row)": 2,
    },
  },

  3: {
    location: "Sheltered walkway outside raduga centre",
    lat: 1.3099300320341885,
    lon: 103.86399232453728,
    img: "/src/public/pending.png",
    range: 1000000000,
    seq: 3,
    task: {
      "Snap a group selfie with synchronised jump poses reflected in the glass outside the mall": 1,
      "F46: take a group picture with everyone doing different fitspo exercises": 1,
    },
  },

  4: {
    location: "Food Court",
    lat: 1.3099300320341885,
    lon: 103.86399232453728,
    img: "/src/public/pending.png",
    range: 1000000000,
    seq: 4,
    task: {
      "LG pictionary (Draw each other in 30 seconds, collate and post on IG)": 1,
  
      "Guess the song<br><br><audio src=\"/src/public/audio1.flac\" controls></audio><br>Voice recording of songs (with wrong tune) will be uploaded onto the app": 5,
    },
  },

  5: {
    location: "Playground",
    lat: 1.3099300320341885,
    lon: 103.86399232453728,
    img: "/src/public/pending.png",
    range: 1000000000,
    seq: 5,
    task: {
      "Stand up from a sitting position, link hands, and form a circle facing outward)": 3,
    },
  },

  6: {
    location: "Tim Ho Wan",
    lat: 1.3099300320341885,
    lon: 103.86399232453728,
    img: "/src/public/pending.png",
    range: 1000000000,
    seq: 6,
    task: {
      
      'Recreate the mannequin poses<br><br><Image alt="user header" src="/src/public/mannequin.png" preview />': 1,
      "Add the total price of all the items on tim ho wan menu (Search the menu online, don't crowd the restaurant), use bodies to form the total price of the whole menu.": 3,
    },
  },

  7: {
    location: "Cold Storage",
    lat: 1.3099300320341885,
    lon: 103.86399232453728,
    img: "/src/public/pending.png",
    range: 1000000000,
    seq: 7,
    task: {
      "Match the price challenge<br><ul><li>Hit $49.75</li><li>Take picture of items & price tags which match this total price</li></ul>": 5,
      "3 Cold Storage Product Puns<br><ul><li>Form 3 puns involving cold storage products</li></ul>": 1,
      "Find items that start with the first word of every word in this sentence:“ow xiao fang is the coolest person ever”": 3,
    },
  },

  8: {
    location: "Rooftop Garden",
    lat: 1.3099300320341885,
    lon: 103.86399232453728,
    img: "/src/public/pic8.png",
    range: 1000000000,
    seq: 8,
    task: {
      "<b>Human Knot</b><br>\
    Participants stand in a circle, reach across and grab hands with two different\
    people (not adjacent to them). Then, they must work together to untangle themselves \
    without letting go of each other's hands.\
    ": 3,
      "Carry someone and walk from point a to b and back to a (rooftop garden)": 1,
      "10 push up + 10 crunches + 10 squats as a group": 3,
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

  return Math.round(distance * 1000) / 1000;
}

onMounted(async () => {
  // if (navigator.geolocation) {
  //     await navigator.geolocation.getCurrentPosition(
  //         async (position) => {
  //             currentLocation.value = {
  //                 lat: position.coords.latitude,
  //                 lon: position.coords.longitude
  //             };
  //             console.log(currentLocation.value)
  //             isFunctionFinished.value=true

  //           },
  //         (error) => {
  //             console.log(error);
  //         }
  //     );

  // } else {
  // console.error("Geolocation is not supported by this browser.");
  // }

  // Function to handle successful retrieval of location
  function successCallback(position) {
    currentLocation.value = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
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
    timeout: 60000, // Set timeout to 5 seconds
    maximumAge: 0, // Do not use cached location
  };

  // Start watching for location changes
  var watchId = navigator.geolocation.watchPosition(
    successCallback,
    errorCallback,
    options
  );

  // debug
  // currentLocation.value = {
  //   lat: 1.304380925485879,
  //   lon: 103.86232678840287,
  // };

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




  <Card style="width: 90%; margin: auto; margin-top: 20px">
    <template #title
      ><h2><strong>Instructions</strong></h2>
    </template>
    <template #content>
      Base on the <strong>image</strong>, find the <strong>location</strong> and
      complete the <strong>task</strong>!

      <br /><br />
      <strong>Note:</strong>
      <ol>
        <li>Please <strong>allow location permission!!</strong></li>
        <li>Click on the image for bigger view</li>
        <li>Must be <strong>near</strong> the location to see the activity</li>
        <li>Tech issue telegram <a href="" target="_blank">Jinming</a></li>
      </ol>
    </template>
  </Card>

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
      style="padding: 3px; width: fit-content"
    >
      <bingo_cell
        :task="item.task"
        :location="item.location"
        :img="item.img"
        :name="index"
        :seq="item.seq"
        :range="item.range"
        :distance="
          haversine(
            currentLocation.lat,
            currentLocation.lon,
            item.lat,
            item.lon
          )
        "
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
