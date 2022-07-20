<script setup>
import Navigation from "@/data/Navigation";
import * as Constants from "@/data/Constants";
const { title } = defineProps(["title"]);

const _toggled = Navigation.map((x) => x.key);

const toggleNav = ref(false);

function getToggled() {
  const a = _toggled.reduce((acc, curr) => {
    acc[curr] = false;
    return acc;
  }, {});
  a.loginButton = false;
  return a;
}

const loggedIn = ref(true)

function login() {
    loggedIn.value = true;
}

const toggled = ref(getToggled());

const profileRoutes = [
  {
    name: `Profile`,
    route: `/`,
    key: `profile`,
  },
  {
    name: `Logout`,
    route: () => loggedIn.value = false,
    key: `logout`,
  },
];

function toggleOff() {
  toggleNav.value = false;
}
function toggleBoth() {
  toggleNav.value = !toggleNav.value;
}
function toggleOn() {
  toggleNav.value = true;
}
function setState(ref) {
  const exists = Boolean(toggled.value[ref]);
  resetState();
  console.log(toggled.value);
  toggled.value[ref] = !exists;
}
function anyState() {
  if (Object.values(toggled.value).includes(true)) return true;
  return false;
}
function resetState() {
  toggled.value = getToggled();
}
</script>
<template>
  <div
    class="bg-white lg:bg-white/10 shadow-md max-w-full block w-full fixed top-0 z-50"
  >
    <div class="max-w-9xl mx-auto px-2 lg:px-8 lg:mt-4">
      <div class="relative flex items-center justify-between h-16">
        <div class="relative inset-y-0 left-0 flex items-center lg:hidden">
          <button
            :class="`
                      inline-flex
                      items-center
                      justify-center
                      p-2
                      rounded-md
                      text-black  lg:text-zinc-700 
                      hover:text-zinc-700 dark:text-black
                    `"
            @click="toggleBoth"
          >
            <span class="sr-only">Open menu</span>
            <svg
              class="block h-8 w-8 stroke-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 24"
              aria-hidden="true"
            >
              <path
                class="transition-all duration-500 transform ease-in-out"
                stroke-linecap="round"
                stroke-linejoin="round"
                :d="
                  toggleNav ? `M6 24L24 6M6 6l18 18` : `M4 6h24M4 14h16M4 22h24`
                "
              />
            </svg>
          </button>
        </div>
        <div
          class="flex-1 flex fixed lg:static items-center lg:items-stretch lg:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/">
              <img
                class="h-8 w-auto hidden lg:block dark:lg:hidden"
                :src="`/temp.png`"
                alt="Placeholder"
              />
              <img
                class="h-8 w-auto hidden dark:lg:block"
                :src="`/temp.png`"
                alt="Placeholder"
              />
            </NuxtLink>
          </div>
          <div
            :class="`overflow-y-auto  lg:overflow-y-visible text-md lg:text-base z-40 block h-full top-12 left-0 w-full bg-white  lg:bg-transparent fixed  lg:static transform transition duration-500 ease-in-out  lg:translate-x-0 p-8  lg:p-0  lg:block ${
              toggleNav ? 'translate-x-0' : '-translate-x-130  lg:ml-6'
            }`"
          >
            <NuxtLink to="/">
              <img
                class="h-8 w-auto block lg:hidden"
                :src="`/temp.png`"
                alt="Placeholder"
              />
            </NuxtLink>

            <div
              class="flex flex-col lg:flex-row justify-between space-x-1 w-full"
            >
              <div
                class="flex lg:space-x-4 flex-col lg:flex-row lg:justify-between lg:w-full lg:pt-0 pt-10"
              >
                <div
                  class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 lg:items-center"
                >
                  <div
                    v-for="{ name, route, key, tag } in Navigation"
                    :key="key"
                  >
                    <NuxtLink
                      v-if="typeof route === 'string' && route.startsWith('/')"
                      :to="typeof route == 'string' ? route : '#'"
                      :class="
                        (title === key ? key !== 'home'
                          ? `text-gray-600 `
                          : 'text-white '
                          : key !== 'home' ? 'text-black border-transparent ' : 'text-white border-transparent ') +
                        (Array.isArray(route) ? 'group ' : '') +
                        'transition duration-500 ease-in-out tracking-wide px-3 flex flex-row space-x-4  lg:uppercase py-4 font-semibold hover:dark:text-gray-600 hover:text-zinc-800'
                      "
                    >
                      <span class="py-1">{{ name }}</span>
                    </NuxtLink>
                    <a
                      v-else-if="Array.isArray(route)"
                      :href="'javascript:void(0)'"
                      @click="(x) => setState(key)"
                      :class="
                        (title === key ? key !== 'home'
                          ? `text-gray-600 `
                          : 'text-white '
                          : key !== 'home' ? 'text-black border-transparent ' : 'text-white border-transparent ') +                        (Array.isArray(route) ? 'group ' : '') +
                        'transition duration-500 ease-in-out tracking-wide px-3 flex flex-row space-x-4  lg:uppercase py-4 font-semibold hover:dark:text-gray-600 hover:text-zinc-800'
                      "
                    >
                      <span class="py-1">{{ name }}</span>
                      <span>
                        <SVGDown />
                      </span>

                      <div
                        :class="`
                                                                    absolute
                                                                    flex
                                                                    bg-black
                                                                    border-t
                                                                    w-48
                                                                    border-zinc-400
                                                                    shadow-md
                                                                    text-xs
                                                                    p-2
                                                                    flex-col
                                                                    ${
                                                                      toggled[
                                                                        key
                                                                      ]
                                                                        ? 'vivible translate-y-9'
                                                                        : 'invisible'
                                                                    }
                                                                     lg:top-10
                                                                    transform
                                                                    transition
                                                                    duration-300
                                                                    ease-in-out
                                            `"
                      >
                        <NuxtLink
                          v-for="{ name2, route2, key2 } in route"
                          :key="key2"
                          class="p-2 flex flex-nowrap text-zinc-800 hover:bg-zinc-100 hover:text-black"
                          :to="route2"
                          >{{ name2 }}</NuxtLink
                        >
                      </div>
                    </a>
                    <a
                      v-else
                      :href="typeof route == 'string' ? route : '#'"
                      target="_blank"
                      :class="
                        (title === key ? key !== 'home'
                          ? `text-gray-600 `
                          : 'text-white '
                          : key !== 'home' ? 'text-black border-transparent ' : 'text-white border-transparent ') +
                        (Array.isArray(route) ? 'group ' : '') +
                        'transition duration-500 ease-in-out tracking-wide px-3 flex flex-row space-x-4  lg:uppercase py-4 font-semibold hover:dark:text-gray-600 hover:text-zinc-800'
                      "
                    >
                      <span class="py-1">{{ name }}</span>
                    </a>
                    <MiscTag v-if="tag">{{ tag }}</MiscTag>
                  </div>
                </div>
                <div
                  class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 lg:items-center"
                >
                  <span>
                    <a v-if = "loggedIn"
                      :href="'javascript:void(0)'"
                      @click="(x) => setState('loginButton')"
                      :class="`${title === 'home' ? 'text-white hover:text-zinc-200' : 'text-black hover:dark:text-gray-600 hover:text-zinc-800'} group transition duration-500 ease-in-out tracking-wide px-3 flex flex-col space-y-4  lg:uppercase py-4 font-semibold`"
                    >
                    <div class = "flex flex-row items-center space-x-4">
                      <span class="py-1">Ray</span>
                      <span>
                        <SVGDown />
                      </span>
                      </div>
                      <div
                        :class="`
                                                                    lg:absolute
                                                                    flex
                                                                    bg-white
                                                                    w-48
                                                                    lg:right-0
                                                                    border-zinc-400
                                                                    lg:shadow-md
                                                                    text-xs overflow-hidden
                                                                    flex-col
                                                                    ${
                                                                      toggled[
                                                                        'loginButton'
                                                                      ]
                                                                        ? 'max-h-[60rem] px-2 lg:py-2'
                                                                        : 'max-h-0'
                                                                    }
                                                                    lg:top-10
                                                                    transform
                                                                    transition-all
                                                                    duration-300
                                                                    ease-in-out
                                            `"
                      >
                        <a
                          v-for="{
                            name: name2,
                            route: route2,
                            key: key2,
                          } in profileRoutes"
                          :key="key2"
                          class="p-2 flex flex-nowrap text-zinc-800 hover:bg-zinc-100 hover:text-black"
                          @click="route2"
                          >{{ name2 }}</a
                        >
                      </div>
                    </a>
                                        <button
                      v-else
                      target="_blank"
                      :class="
                        (title !== 'home'
                          ? `text-gray-600 `
                          : 'text-white ') + 
                        (Array.isArray(route) ? 'group ' : '') +
                        'transition duration-500 ease-in-out tracking-wide px-3 flex flex-row space-x-4  lg:uppercase py-4 font-semibold hover:dark:text-gray-600 hover:text-zinc-800'
                      "
                      @click="login"
                    >
                      <span class="py-1">Login</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            :class="`inset-0 w-full fixed h-full z-30 block ${
              toggleNav || anyState() ? 'visible' : 'invisible'
            }`"
            @click="
              (x) => {
                toggleOff();
                resetState();
              }
            "
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
