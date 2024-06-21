<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
  const tiktok_embed = document.createElement("script");
  tiktok_embed.setAttribute("src", "https://www.tiktok.com/embed.js");
  tiktok_embed.setAttribute("async", "true");
  document.head.appendChild(tiktok_embed);
});
</script>

<template>
  <blockquote
    class="tiktok-embed"
    cite="https://www.tiktok.com/@deanobballin24/video/6990776735746772229"
    data-video-id="6990776735746772229"
    style="max-width: 605px; min-width: 325px"
  >
    <section>
      <a
        target="_blank"
        title="@deanobballin24"
        href="https://www.tiktok.com/@deanobballin24?refer=embed"
        >@deanobballin24</a
      >
      instagram 👉🏼deanobballin
      <a
        title="welcomeback"
        target="_blank"
        href="https://www.tiktok.com/tag/welcomeback?refer=embed"
        >#WelcomeBack</a
      >
      ChiliDogYumPlz
      <a
        title="challenges"
        target="_blank"
        href="https://www.tiktok.com/tag/challenges?refer=embed"
        >#challenges</a
      >
      <a
        title="photocrop"
        target="_blank"
        href="https://www.tiktok.com/tag/photocrop?refer=embed"
        >#photocrop</a
      >
      <a
        title="foryou"
        target="_blank"
        href="https://www.tiktok.com/tag/foryou?refer=embed"
        >#foryou</a
      >
      <a
        title="trendy"
        target="_blank"
        href="https://www.tiktok.com/tag/trendy?refer=embed"
        >#trendy</a
      >
      <a
        title="viral"
        target="_blank"
        href="https://www.tiktok.com/tag/viral?refer=embed"
        >#viral</a
      >
      <a
        target="_blank"
        title="♬ The Hustle - Van McCoy"
        href="https://www.tiktok.com/music/The-Hustle-244641803705147393?refer=embed"
        >♬ The Hustle - Van McCoy</a
      >
    </section>
  </blockquote>

</template>

<style>
blockquote {
  width: 100%;
}
</style>
