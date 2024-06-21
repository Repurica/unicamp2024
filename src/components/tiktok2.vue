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
    cite="https://www.tiktok.com/@yes933/video/7298195229700656385"
    data-video-id="7298195229700656385"
    style="max-width: 605px; min-width: 325px"
  >
    <section>
      <a
        target="_blank"
        title="@yes933"
        href="https://www.tiktok.com/@yes933?refer=embed"
        >@yes933</a
      >
      Who is the MVP here?? 😎
      <a
        title="groupchallenge"
        target="_blank"
        href="https://www.tiktok.com/tag/groupchallenge?refer=embed"
        >#groupchallenge</a
      >
      <a
        title="yes933"
        target="_blank"
        href="https://www.tiktok.com/tag/yes933?refer=embed"
        >#YES933</a
      >
      <a
        target="_blank"
        title="♬ original sound  - Mediacorp YES 933"
        href="https://www.tiktok.com/music/original-sound-Mediacorp-YES-933-7298195274273819393?refer=embed"
        >♬ original sound - Mediacorp YES 933</a
      >
    </section>
  </blockquote>
</template>

<style>
blockquote {
  width: 100%;
}
</style>
