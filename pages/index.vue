<template>
  <div>
    <NavMenu />
    <HeroSection />
    <CategorySection />
    <DownloadAppSection />
  </div>
</template>

<script setup>
  import NavMenu from '~/components/NavMenu.vue';
  import HeroSection from '~/components/HeroSection.vue';
  import CategorySection from '~/components/CategorySection.vue';
  import DownloadAppSection from '~/components/DownloadAppSection.vue';
</script>