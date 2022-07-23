<template>
  <div>
    <div class="min-h-screen bg-green-500 relative overflow-hidden cursor-none">
      <div
        class="min-h-screen absolute inset-0 bg-black z-30"
        @mousemove="movedaro"
      >
        <div
          class="absolute movingPointer w-[30rem] h-[30rem] rounded-full bg-pink-500 z-40 opacity-50"
          ref="movingthing"
          :style="{
            left: coordinates.x + 'px',
            top: coordinates.y - 40 + 'px',
          }"
        />
      </div>
    </div>
  </div>
</template>
<style>
.movingPointer {
    background-image: url(/testpol.webp);
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}
</style>
<script setup>
definePageMeta({
  layout: "blank",
});


const coordinates = ref({ x: 0, y: 0 });



function movedaro(e) {
  console.log(e);
  coordinates.value.x = e.pageX - 100;
  coordinates.value.y = e.pageY;
}
</script>
