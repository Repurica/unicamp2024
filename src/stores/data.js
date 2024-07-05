import { defineStore } from "pinia";
import { ref, watch } from "vue";
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useActivityStore = defineStore("data", () => {
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
      cheat: false,
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
      cheat: false,
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
      cheat: false,
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
      cheat: false,
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
      cheat: false,
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
      cheat: false,
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
      cheat: false,
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
      cheat: false,
    },
  });

  if(localStorage.getItem("state")) {
    data.value=JSON.parse(localStorage.getItem("state")).data.data;
  }


  const setAllCheats = (state) => {
    for (const location in data.value) {
      data.value[location].cheat = state;
    }
  };

  const setCheats = (location) => {
    if (data.value.hasOwnProperty(location)) {
      data.value[location].cheat = true;
    }
  };

  return { data, setAllCheats, setCheats };
});
