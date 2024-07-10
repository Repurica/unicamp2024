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
    cite="https://www.tiktok.com/@groovefittv/video/7317700123998358816"
    data-video-id="7317700123998358816"
    style="max-width: 605px; min-width: 325px"
  >
    <section>
      <a
        target="_blank"
        title="@groovefittv"
        href="https://www.tiktok.com/@groovefittv?refer=embed"
        >@groovefittv</a
      >
      Round 2 - No Niamh’s were harmed in the making of this video😂
      <a
        title="watchtillend"
        target="_blank"
        href="https://www.tiktok.com/tag/watchtillend?refer=embed"
        >#watchtillend</a
      >
      <a
        title="fyp"
        target="_blank"
        href="https://www.tiktok.com/tag/fyp?refer=embed"
        >#fyp</a
      >
      <a
        title="photocropchallenge"
        target="_blank"
        href="https://www.tiktok.com/tag/photocropchallenge?refer=embed"
        >#photocropchallenge</a
      >
      <a
        title="photocropfilter"
        target="_blank"
        href="https://www.tiktok.com/tag/photocropfilter?refer=embed"
        >#photocropfilter</a
      >
      <a
        title="attention"
        target="_blank"
        href="https://www.tiktok.com/tag/attention?refer=embed"
        >#attention</a
      >
      <a
        title="viral"
        target="_blank"
        href="https://www.tiktok.com/tag/viral?refer=embed"
        >#viral</a
      >
      <a
        title="viralvideo"
        target="_blank"
        href="https://www.tiktok.com/tag/viralvideo?refer=embed"
        >#viralvideo</a
      >
      <a
        title="funny"
        target="_blank"
        href="https://www.tiktok.com/tag/funny?refer=embed"
        >#funny</a
      >
      <a
        title="funnyvideo"
        target="_blank"
        href="https://www.tiktok.com/tag/funnyvideo?refer=embed"
        >#funnyvideo</a
      >
      <a
        title="trending"
        target="_blank"
        href="https://www.tiktok.com/tag/trending?refer=embed"
        >#trending</a
      >
      <a
        target="_blank"
        title="♬ The Benny Hill Show - The Edwin Davids Jazz Band"
        href="https://www.tiktok.com/music/The-Benny-Hill-Show-6835092391427311617?refer=embed"
        >♬ The Benny Hill Show - The Edwin Davids Jazz Band</a
      >
    </section>
  </blockquote>
</template>

<style>
blockquote {
  width: 100%;
}
</style>
