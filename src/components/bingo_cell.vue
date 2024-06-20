<script setup>
import { ref, defineProps, onMounted } from "vue";
import Card from "primevue/card";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Image from "primevue/image";
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";

import tiktok from "./tiktok.vue";
const props = defineProps({
  // Define your props here
  name: String,
  img: String,
  distance: Number,
  range: Number,
  seq: Number,
  task: Object,
  location: String,
});

const visible = ref(false);
const accordion_one = ref([]);
const accordion_status = ref({});

accordion_status.value = Object.keys(props.task).reduce((acc, key) => {
  acc[key] = false;
  return acc;
}, {});


function toggleAccordionPanel(key) {
  accordion_status[key]=!accordion_status[key]
  if (accordion_status[key]==false) {
    accordion_one.value.splice(accordion_one.value.indexOf(key), 1);
  } 

}
</script>

<template>
  <!-- Your template code here -->

  <Card>
    <template #header>
      <Image alt="user header" :src="img" style="" preview />
    </template>
    <template #title>
      <!-- debug -->
      <div v-if="distance <= range">
        <!-- <div v-if="!range"> -->
        {{ location }}
      </div>
    </template>

    <template #content>
      <!-- debug -->

      <div v-if="distance > range">
        <!-- <div v-if="!range"> -->

        <p class="m-0">
          It is <strong>{{ distance }}</strong> km away from you! <br />Be
          <strong>{{ range * 1000 }}</strong> m away from it to get a bingo!
        </p>
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
                        {{ "Activity " + (Object.keys(task).indexOf(key) + 1) }}
                      </p>
                      <p style="text-align: right; min-width: 55px">
                        {{ value }} pts.
                      </p>
                    </AccordionHeader>

                    <AccordionContent v-if="key == '#photocropchallenge'">
                      <p v-html="key" class="m-0"></p>
                      <p class="m-0">
                        The video may take a while to load!
                        <a
                          href="https://www.tiktok.com/@sofyank96/video/6992828679541804314"
                          >Alternative link</a
                        >
                      </p>
                      <tiktok></tiktok>
                    </AccordionContent>

                    <AccordionContent v-else>
                      <p v-html="key" class="m-0"></p>
                    </AccordionContent>
                  </AccordionPanel>
                </div>
              </Accordion>
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
