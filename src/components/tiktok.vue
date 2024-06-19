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
    cite="https://www.tiktok.com/@sofyank96/video/6992828679541804314"
    data-video-id="6992828679541804314"
  >
    <section>
      <a
        target="_blank"
        title="@sofyank96"
        href="https://www.tiktok.com/@sofyank96?refer=embed"
        >@sofyank96</a
      >
      What challenge you want us to do next? 🤔
      <a
        title="photocropchallenge"
        target="_blank"
        href="https://www.tiktok.com/tag/photocropchallenge?refer=embed"
        >#photocropchallenge</a
      >
      <a
        title="9forstvid"
        target="_blank"
        href="https://www.tiktok.com/tag/9forstvid?refer=embed"
        >#9forstvid</a
      >
      <a
        title="photocrop"
        target="_blank"
        href="https://www.tiktok.com/tag/photocrop?refer=embed"
        >#photocrop</a
      >
      <a
        target="_blank"
        title="♬ double take - Dhruv"
        href="https://www.tiktok.com/music/double-take-6976066440176749313?refer=embed"
        >♬ double take - Dhruv</a
      >
    </section>
  </blockquote>
</template>

<style>
blockquote{
  width: 100%;
}
</style>