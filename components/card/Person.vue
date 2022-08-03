<template>
  <div class="w-full flex md:flex-row flex-col items-center">
    <div :class="`p-4 ${left ? 'lg:order-1' : 'lg:order-2'}`">
      <div
        class="
          w-80
          h-80
          p-2
          flex flex-col
          items-center
          justify-center
          border-dotted border-gray-400 border-4
          rounded-full
        "
      >
        <img
          :src="news.image"
          :alt="news.title"
          class="
            object-cover
            w-72
            h-72
            rounded-full
            border-gray-400 border-4 border-double
          "
        />
      </div>
    </div>

    <div
      :class="`p-2 flex flex-col justify-start space-y-2 w-full ${
        left
          ? 'lg:order-2 items-start ml-8 text-justify'
          : 'lg:order-1 items-end text-justify'
      }`"
    >
      <p class="text-3xl font-semibold">{{ news.title }}</p>
      <span class="text-gray-400 text-base uppercase">{{ news.subtitle }}</span>

      <div class="text-sm text-gray-800 dark:text-white">
        {{ news.description }}
      </div>
    </div>

    <!--      <nuxt-content
        class="prose dark:prose-dark prose-sm"
        :document="news"
      />-->
  </div>
</template>
<script>
export default {
  props: {
    news: {
      type: Object,
      default: null,
    },
    left: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>