<template>
  <div>
    <component
      v-for="(comp, index) in components"
      :is="resolveComponent(comp)"
      :key="index"
    />
  </div>
</template>

<script setup>

  import { defineAsyncComponent } from 'vue';

  const components = ['NavMenu', 'HeroSection', 'CategorySection', 'DownloadAppSection', 'Footer'];

  const resolveComponent = (name) => {
    return defineAsyncComponent(() => import(`~/components/${name}.vue`));
  };
  
</script>


