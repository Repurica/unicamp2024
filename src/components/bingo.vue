<script setup>
import bingo_cell from "./bingo_cell.vue";
import { ref, onMounted } from "vue";
import ProgressSpinner from "primevue/progressspinner";
import Card from "primevue/card";
import Button from "primevue/button";
import { useActivityStore } from "@/stores/data";

const currentLocation = ref();
const isFunctionFinished = ref(false);
const geodata = ref();
const cheat_state = ref(false);
const { data, setAllCheats } = useActivityStore();
console.log(data, 123);

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
});

// Function to retrieve the phone model
function getPhoneModel() {
  const userAgent = navigator.userAgent;
  if (/iPhone/i.test(userAgent)) {
    return "iPhone";
  } else if (/Android/i.test(userAgent)) {
    return "Android";
  } else {
    return "Unknown";
  }
}

// Call the function to retrieve the phone model
const phoneModel = getPhoneModel();
</script>

<template>
  <div v-if="geodata">
    <p>phoneModel: {{ phoneModel }}</p>
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
    <Button
      @click="
        cheat_state = !cheat_state;
        setAllCheats(cheat_state);
      "
      style="margin-top: 10px"
      >Cheat</Button
    >
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
        :index="index"
        :task="item.task"
        :location="item.location"
        :alt="item.alt"
        :img="item.img"
        :youralt="currentLocation.alt"
        :name="index"
        :seq="item.seq"
        :range="item.range"
        :cheat="item.cheat"
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
