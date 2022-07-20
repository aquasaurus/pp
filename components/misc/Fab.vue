<template>
  <div>
    <div class="fixed p-4 bottom-0 right-0 flex flex-col items-center z-40">
      <div
        id="fabItems"
        :class="`transform transition-all duration-500 ease-in-out mb-7  ${
          toggleNav ? 'max-h-[60rem]' : 'max-h-0 overflow-y-hidden'
        }`"
      >
        <ul :class="toggleNav && ` flex-col items-center space-y-4 w-full mx-auto`">
          <div
            v-for="navItem in Navigation"
            :key="navItem.key"
          >
            <NuxtLink
              :to="navItem.route"
              class="relative p-2 group flex items-center"
            >
              <li class="
                  rounded-full
                  flex
                  items-center
                  p-4
                  w-16
                  h-16
                  bg-gray-600
                ">
                <div class="px-auto flex items-center mx-auto">
                  {{ navItem.routeIcon }}
                </div>
              </li>
            </NuxtLink>
          </div>
        </ul>
      </div>

      <div
        id="fabButton"
        class="
          rounded-full
          bg-gray-500
          flex
          items-center
          w-16
          h-16
          z-50
        "
      >
        <button
          :class="`p-4 transform transition duration-500 ease-in-out mx-auto block ${
            toggleNav ? 'rotate-90' : ''
          }`"
          @click="toggleBoth"
        >
          <span v-if="toggleNav">×</span>
          <span v-else>+</span>
        </button>
      </div>
    </div>
    <div
      :class="`inset-0 w-full fixed h-full z-30 block bg-gray-800 bg-opacity-30 ${
        toggleNav ? 'visible' : 'invisible'
      }`"
      @click="toggleOff"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    nav: {
      type: Array,
      default: () => {
        return [
          {
            name: 'Home',
            route: '/',
            key: 'home',
            routeIcon: '🏠',
          },
        ]
      },
    },
  },
  data() {
    return {
      toggleNav: false,
      Navigation: this.nav,
    }
  },
  methods: {
    toggleOff() {
      this.toggleNav = false
    },
    toggleBoth() {
      this.toggleNav = !this.toggleNav
    },
    toggleOn() {
      this.toggleNav = true
    },
  },
}
</script>