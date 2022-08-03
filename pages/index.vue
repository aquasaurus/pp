<template>
  <div class="flex flex-col space-y-40">
    <div class="bg-gray-800 somebg relative -top-20 text-white min-h-screen">
      <div
        class="
          flex flex-col
          space-y-8
          px-4
          py-12
          mt-24
          lg:mt-72
          max-w-8xl
          mx-auto
          justify-between
          h-[22rem]
        "
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-delay="100"
        data-aos-duration="260"
      >
        <div class="flex flex-col space-y-4">
          <span class="text-4xl lg:text-7xl t1">{{ current[0] }}</span>
          <span class="text-4xl lg:text-7xl t2">{{ current[1] }}</span>
        </div>

        <div
          class="
            mt-3
            flex flex-col
            lg:flex-row
            space-y-4
            lg:space-y-0 lg:space-x-4
          "
        >
          <button
            class="
              bg-blue-500
              rounded-xl
              text-lg
              p-2
              w-72
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1
            "
            @click="mainConfig.openSignup"
          >
            JOIN AS VOLUNTEER
          </button>
          <button
            class="
              bg-orange-600
              rounded-xl
              text-lg
              p-2
              w-72
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1
            "
            @click="mainConfig.openReport"
          >
            RAISE A COMPLAINT
          </button>
        </div>
      </div>
    </div>
    <div
      id="about"
      class="flex flex-col space-y-4 px-1 max-w-7xl mx-auto py-12"
    >
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-delay="100"
        data-aos-duration="260"
      >
        <CardSpecial
          title="About Us"
          :description="[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut justo dignissim, dignissim ex aliquam, scelerisque turpis. Donec placerat, nulla nec pretium cursus, ligula nisi mollis augue, eget ornare ipsum lacus tincidunt justo. Curabitur quis nunc lacinia, venenatis magna vel, sagittis erat. Proin convallis gravida suscipit. Sed quis nisl vel nunc pellentesque dapibus eget in lectus. Phasellus ultrices ac lorem auctor iaculis. Etiam ut sem lobortis, mattis lectus a, ultricies risus.',
            'Suspendisse posuere bibendum viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque quam nulla, egestas et accumsan eu, dapibus non elit. Sed feugiat erat nunc, quis iaculis lorem vulputate sed. Aenean neque metus, sollicitudin id rutrum eget, cursus dignissim nisi. Vivamus lobortis interdum tortor commodo mattis. Aliquam sollicitudin sapien sit amet lectus varius varius. Phasellus in libero sit amet purus lobortis pretium. Aenean iaculis mattis egestas. Suspendisse a consequat velit.',
            'Curabitur molestie massa diam, fringilla feugiat ipsum luctus a. Integer finibus diam non est suscipit eleifend. Morbi lorem ipsum, pharetra sed pellentesque sed, ornare ac erat. Vestibulum velit arcu, fringilla eget sodales nec, egestas vitae libero. Morbi tempor ac nulla a aliquet. Aenean eleifend dapibus maximus. Nullam consequat, sem eu tempus pharetra, risus leo cursus augue, id fermentum eros nulla vitae mauris.',
          ]"
        />
      </div>
    </div>
    <div
      class="
        grid grid-cols-1
        lg:grid-cols-2
        gap-12
        py-12
        text-white
        max-w-7xl
        mx-auto
        p-2
        lg:p-0
      "
      id="vision"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="100"
      data-aos-duration="260"
    >
      <div
        class="
          bg-gray-600
          rounded-xl
          lg:text-right
          text-center
          p-2
          lg:p-8
          flex flex-col
          space-y-8
          transition
          duration-500
          ease-in-out
          transform
          hover:-translate-y-1 hover:scale-110
        "
      >
        <span class="text-3xl">Vision</span>
        <span class="text-justify"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut
          justo dignissim, dignissim ex aliquam, scelerisque turpis. Donec
          placerat, nulla nec pretium cursus, ligula nisi mollis augue, eget
          ornare ipsum lacus tincidunt justo. Curabitur quis nunc lacinia,
          venenatis magna vel, sagittis erat. Proin convallis gravida suscipit.
          Sed quis nisl vel nunc pellentesque dapibus eget in lectus. Phasellus
          ultrices ac lorem auctor iaculis. Etiam ut sem lobortis, mattis lectus
          a, ultricies risus.</span
        >
      </div>
      <div
        class="
          bg-gray-500
          rounded-xl
          lg:text-left
          text:center
          p-2
          lg:p-8
          flex flex-col
          space-y-8
          transition
          duration-500
          ease-in-out
          transform
          hover:-translate-y-1 hover:scale-110
        "
      >
        <span class="text-3xl">Mission</span>
        <span class="text-justify"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut
          justo dignissim, dignissim ex aliquam, scelerisque turpis. Donec
          placerat, nulla nec pretium cursus, ligula nisi mollis augue, eget
          ornare ipsum lacus tincidunt justo. Curabitur quis nunc lacinia,
          venenatis magna vel, sagittis erat. Proin convallis gravida suscipit.
          Sed quis nisl vel nunc pellentesque dapibus eget in lectus. Phasellus
          ultrices ac lorem auctor iaculis. Etiam ut sem lobortis, mattis lectus
          a, ultricies risus.</span
        >
      </div>
    </div>
    <div class="bg-gray-700 text-white">
      <div
        id="volunteer"
        class="flex flex-col space-y-4 text-base px-12 max-w-7xl mx-auto py-12"
      >
        <div class="text-4xl mx-auto text-center uppercase">Volunteers</div>
        <span class="text-justify py-12"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut
          justo dignissim, dignissim ex aliquam, scelerisque turpis. Donec
          placerat, nulla nec pretium cursus, ligula nisi mollis augue, eget
          ornare ipsum lacus tincidunt justo. Curabitur quis nunc lacinia,
          venenatis magna vel, sagittis erat. Proin convallis gravida suscipit.
          Sed quis nisl vel nunc pellentesque dapibus eget in lectus. Phasellus
          ultrices ac lorem auctor iaculis. Etiam ut sem lobortis, mattis lectus
          a, ultricies risus.</span
        >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <CardList
            class="mx-auto"
            title="Eligibility"
            :description="[
              'Fraud',
              'Cyber Crime',
              'Safety Concerns',
              'Awareness',
              'Corruption',
            ]"
          />
          <CardList
            class="mx-auto"
            title="Perks"
            :description="[
              'Fraud',
              'Cyber Crime',
              'Safety Concerns',
              'Awareness',
              'Corruption',
            ]"
          />
        </div>
        <div class="py-4">
          <CardList
            title="How To Volunteer?"
            :description="[
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut
          justo dignissim, dignissim ex aliquam, scelerisque turpis.`,
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut
          justo dignissim, dignissim ex aliquam, scelerisque turpis.`,
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut
          justo dignissim, dignissim ex aliquam, scelerisque turpis.`,
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut
          justo dignissim, dignissim ex aliquam, scelerisque turpis.`,
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut
          justo dignissim, dignissim ex aliquam, scelerisque turpis.`,
            ]"
          />
        </div>
      </div>
    </div>
    <div class="w-full py-2 mx-auto space-y-8">
      <div
        class="flex flex-col space-y-4 max-w-7xl mx-auto py-12 px-12 items-left"
      >
        <div class="text-4xl mx-auto text-center text-black uppercase">
          Leaders
        </div>
      </div>
      <div
        id="leaders"
        class="
          max-w-7xl
          mx-auto
          grid grid-cols-1
          gap-8
          items-center
          justify-between
          w-full
        "
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-delay="100"
        data-aos-duration="260"
      >
        <CardPerson
          v-for="(item, i) in events"
          :news="item"
          :left="i % 2 === 0 ? true : false"
          :key="item.title"
          class="transition duration-500 w-full ease-in-out transform"
        />
      </div>
    </div>

    <div
      id="gallery"
      class="
        max-w-7xl
        mx-auto
        flex flex-col
        space-y-4
        items-stretch
        justify-between
      "
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="100"
      data-aos-duration="260"
    >
      <div class="text-4xl mx-auto text-center text-black uppercase">
        Gallery
      </div>

      <MiscTileCarousel :images="eventList" />
    </div>
    <div
      id="complaint"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="100"
      data-aos-duration="260"
      class="max-w-7xl w-full mx-auto flex flex-col space-y-4 justify-between"
    >
      <div class="text-4xl mx-auto text-center text-black uppercase">
        Complaint
      </div>
      <div
        class="
          flex flex-col
          lg:flex-row
          space-y-4
          lg:space-y-0 lg:space-x-4
          justify-start
          max-w-7xl
          py-12
          items-center
        "
      >
        <div class="">
          <img src="/testpol.webp" class="object-cover w-full lg:w-[30rem]" />
        </div>
        <div>
          <CardList
            title="People Can Report"
            :description="[
              'Fraud',
              'Cyber Crime',
              'Safety Concerns',
              'Awareness',
              'Corruption',
            ]"
          />
        </div>
      </div>
    </div>
    <div
      id="report-btn"
      class="max-w-7xl w-full mx-auto flex flex-col space-y-4 justify-between"
    >
      <MiscMessage type="gray"
        >Click the button below in order to file a complaint. Volunteers will be
        notified and will act accordingly.</MiscMessage
      >
      <button
        class="
          rounded-2xl
          bg-gray-600
          text-white
          p-4
          transition
          duration-500
          ease-in-out
          transform
          hover:-translate-y-1
        "
        @click="mainConfig.openReport"
      >
        File a Complaint
      </button>
    </div>

    <div class="h-[1rem]" />
  </div>
</template>

<style>
.somebg {
  background-color: #2c4153;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23008C86' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%2316979E'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
<script setup>
import eventList from "@/data/Events.js";
import { useModalConfig } from "@/store/loginModal.ts";
const mainConfig = useModalConfig();

const events = [
  {
    title: "Hear You Out",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut
        justo dignissim, dignissim ex aliquam, scelerisque turpis. Donec
        placerat, nulla nec pretium cursus, ligula nisi mollis augue, eget
        ornare ipsum lacus tincidunt justo. Curabitur quis nunc lacinia,
        venenatis magna vel, sagittis erat. Proin convallis gravida suscipit.
        Sed quis nisl vel nunc pellentesque dapibus eget in lectus. Phasellus
        ultrices ac lorem auctor iaculis. Etiam ut sem lobortis, mattis lectus
        a, ultricies risus.`,
    subtitle: "Lucky Man",

    image: "/testpol.webp",
  },
  {
    title: "Support",
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut
        justo dignissim, dignissim ex aliquam, scelerisque turpis. Donec
        placerat, nulla nec pretium cursus, ligula nisi mollis augue, eget
        ornare ipsum lacus tincidunt justo. Curabitur quis nunc lacinia,
        venenatis magna vel, sagittis erat. Proin convallis gravida suscipit.
        Sed quis nisl vel nunc pellentesque dapibus eget in lectus. Phasellus
        ultrices ac lorem auctor iaculis. Etiam ut sem lobortis, mattis lectus
        a, ultricies risus. `,
    subtitle: "Spiderman",

    image: "/testpol.webp",
  },
  {
    title: "Protect",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut
        justo dignissim, dignissim ex aliquam, scelerisque turpis. Donec
        placerat, nulla nec pretium cursus, ligula nisi mollis augue, eget
        ornare ipsum lacus tincidunt justo. Curabitur quis nunc lacinia,
        venenatis magna vel, sagittis erat. Proin convallis gravida suscipit.
        Sed quis nisl vel nunc pellentesque dapibus eget in lectus. Phasellus
        ultrices ac lorem auctor iaculis. Etiam ut sem lobortis, mattis lectus
        a, ultricies risus.`,
    subtitle: "Superman",
    image: "/testpol.webp",
  },
];

definePageMeta({
  title: "Home",
});

const typer = [
  ["POLICE", "PUBLIC CONNECTOR"],
  ["WE CONNECT WITH", "PEOPLE"],
  ["WE HELP", "PEOPLE"],
];
const current = ref(["", "", 0]);

const changeHero = () => {
  if (current.value[2] === typer.length - 1) {
    current.value[2] = 0;
    current.value[0] = "";
    current.value[1] = "";
    let n;
    for (let i = 0; i < typer[current.value[2]][0].length; ++i) {
      setTimeout(
        () => (current.value[0] += typer[current.value[2]][0][i]),
        50 * i
      );
      n = i;
    }
    console.log(current.value);
    for (let j = 0; j < typer[current.value[2]][1].length; ++j) {
      setTimeout(
        () => (current.value[1] += typer[current.value[2]][1][j]),
        50 * (n + j)
      );
    }
  } else {
    current.value[2] += 1;
    current.value[0] = "";
    current.value[1] = "";
    let n;
    for (let i = 0; i < typer[current.value[2]][0].length; ++i) {
      setTimeout(
        () => (current.value[0] += typer[current.value[2]][0][i]),
        50 * i
      );
      n = i;
    }
    console.log(current.value);
    for (let j = 0; j < typer[current.value[2]][1].length; ++j) {
      setTimeout(
        () => (current.value[1] += typer[current.value[2]][1][j]),
        50 * (n + j)
      );
    }
  }
};

onMounted(() => {
  changeHero();
  setInterval(changeHero, 4000);
});
</script>
