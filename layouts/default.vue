<template>
  <div
    class="
      flex flex-col
      min-h-screen
      font-montserrat
      text-lg
      tracking-wide
      text-gray-900
      bg-white
      font-semibold
      dark:font-normal
      kurobg
    "
  >
    <!--bg-svg-light-sm
      md:bg-svg-light bg-right
      dark:bg-svg-dark-sm
      dark:md:bg-svg-dark-->
    <LayoutHeader
      :title="route.meta.title === 'Home' ? 'home' : route.meta.title"
    />
    <main
      class="
        flex-1
        w-full
        mx-auto
      "
    >
      <slot />
    </main>
    <MiscFab :nav="fab"/>
    <LayoutPreFooter />
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
<script setup>
//const nuxtApp = useNuxtApp()
const route = useRoute()


</script>