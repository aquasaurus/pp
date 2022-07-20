<template>
  <ContentDoc v-slot="{ doc }">
    <div
      class=" max-w-7xl mx-auto py-12 mt-24
        flex flex-col text-justify
        md:flex-row
        items-start
        md:justify-start
        space-y-8
        md:space-y-0 md:space-x-8
      "
    >
      <article
        class="
          prose prose-gray order-2 max-w-full
          dark:prose-invert
          prose-code:before:content-none prose-code:after:content-none
        "
      >
        <ContentRenderer :value="doc" />
      </article>
    </div>
  </ContentDoc>
</template>

<style lang="postcss">
/* Customize headers to remove default underline */
.prose h2 a {
  @apply no-underline transition duration-500 ease-in-out block font-bold border-b border-neutral-600 dark:border-neutral-300;
  &:hover {
    @apply text-zinc-600 dark:text-blue-100;
  }
}
.prose h3 a {
  @apply font-semibold no-underline;
}
</style>