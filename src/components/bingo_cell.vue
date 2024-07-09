<script setup>
import { ref, defineProps, onMounted, watch } from "vue";
import Card from "primevue/card";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Image from "primevue/image";
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";

import tiktok1 from "./tiktok1.vue";
import tiktok2 from "./tiktok2.vue";

import { useActivityStore } from "@/stores/data";
const { activity_count, setCheats, increase_activity_count } =
  useActivityStore();
const activity_serial_list = ref([]);
const activity_count_start = ref(0);
const activity_count_end = ref(0);

console.log(activity_count);
const props = defineProps({
  // Define your props here
  name: String,
  img: String,
  distance: Number,
  range: Number,
  seq: Number,
  task: Object,
  location: String,
  cheat: Boolean,
  alt: Number,
  youralt: Number,
  activity_img: String,
  index: String,
});

activity_count_start.value = parseInt(activity_count);

Object.keys(props.task).forEach(() => {
  console.log(activity_count,"ppp");
  increase_activity_count();
});

activity_count_end.value = parseInt(activity_count);
console.log(activity_count_start.value, activity_count_end.value);

for (
  let i = activity_count_start.value + 1;
  i <= activity_count_end.value;
  i++
) {
  activity_serial_list.value.push(i);
  console.log(i, "---");
}
console.log(activity_serial_list.value, 321);

const visible = ref(false);
const accordion_one = ref([]);
const accordion_status = ref({});
accordion_status.value = Object.keys(props.task).reduce((acc, key) => {
  acc[key] = false;
  return acc;
}, {});

function toggleAccordionPanel(key) {
  accordion_status[key] = !accordion_status[key];
  if (accordion_status[key] == false) {
    accordion_one.value.splice(accordion_one.value.indexOf(key), 1);
  }
}
watch(
  () => props.distance,
  (newVal) => {
    if (newVal <= props.range) {
      setCheats(props.index);
    }
  }
);
</script>

<template>
  <!-- Your template code here -->
  <Card>
    <template #header>
      <Image alt="user header" :src="img" style="" preview />
    </template>
    <template #title>
      <!-- debug -->
      <div
        v-if="
          (distance > range || (Math.abs(alt - youralt) > 3 && !cheat)) &&
          !cheat
        "
      >
        {{ name }}
        {{ cheat }}
      </div>
      <div v-else>
        {{ location }}
      </div>
      {{ distance }}
      {{ activity_count }}
    </template>

    <template #content>
      <!-- debug -->
      <div v-if="distance > range && !cheat">
        <!-- <div v-if="!range"> -->

        <p class="m-0">
          It is <strong>{{ distance }}</strong
          >m away from you! <br />Be <strong>{{ range }}</strong
          >m away from it to unlock the activities!
        </p>
      </div>
      <div v-else-if="Math.abs(alt - youralt) > 3 && !cheat">
        <p class="m-0">You are close! Maybe try higher or lower?</p>
      </div>

      <div v-else>
        <p class="m-0">
          You found it! Now click the button below to get the activity!
        </p>
        <br />
        <div class="card flex justify-content-center">
          <Button label="Show Activity" @click="visible = true" />

          <Dialog
            v-model:visible="visible"
            modal
            :header="location"
            :style="{ width: '50rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
            dismissableMask
          >
            <div class="card">
              <Accordion :value="accordion_one" multiple>
                <div v-for="(value, key) of task">
                  <AccordionPanel
                    :value="key"
                    @click="toggleAccordionPanel(key)"
                  >
                    <AccordionHeader class="accordion-header">
                      <p style="width: 75%">
                        {{
                          "Activity " +
                          activity_serial_list[Object.keys(task).indexOf(key)]
                        }}
                      </p>
                      <p style="text-align: right; min-width: 55px">
                        {{ value }} pts.
                      </p>
                    </AccordionHeader>

                    <AccordionContent v-if="index == 'Location 2'">
                      <p v-html="key" class="m-0"></p>
                      <p class="m-0">
                        <small
                          ><i
                            >The video may take a while to load!
                            <a
                              href="https://www.tiktok.com/@deanobballin24/video/6990776735746772229"
                              >Alternative link</a
                            ></i
                          ></small
                        >
                      </p>
                      <tiktok1></tiktok1>
                    </AccordionContent>

                    <AccordionContent v-else-if="index == 'Location 5'">
                      <p v-html="key" class="m-0"></p>
                      <p class="m-0">
                        <small
                          ><i
                            >The video may take a while to load!
                            <a
                              href="https://www.tiktok.com/@yes933/video/7298195229700656385"
                              >Alternative link</a
                            ></i
                          ></small
                        >
                      </p>
                      <tiktok2></tiktok2>
                    </AccordionContent>

                    <AccordionContent v-else>
                      <p v-html="key" class="m-0"></p>
                    </AccordionContent>
                  </AccordionPanel>
                </div>
              </Accordion>
              <br />
              <br />

              <div style="display: flex; justify-content: center">
                <div style="position: relative">
                  <Button severity="success" label="View as Image" />
                  <Image
                    :id="activity_img"
                    alt="activity image"
                    :src="activity_img"
                    style="
                      width: 100%;
                      height: 100%;
                      position: absolute;
                      top: 0;
                      left: 0;
                      opacity: 0;
                    "
                    preview
                  ></Image>
                </div>
              </div>
              <div style="text-align: center">
                <i>
                  <p>
                    You may screenshot it and complete the activity at another
                    place!!
                  </p>
                </i>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </template>
  </Card>
</template>

<style>
.p-card-header {
  display: flex;
  height: 300px;
  width: 100%;
}
.p-card {
  justify-content: center;
  width: 160px;
}
.p-card-title {
  font-size: 1rem;
}
.p-image {
  width: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
