<template>
  <div class="flex flex-col space-y-8">
    <div class="bg-gray-800 text-white min-h-screen">
      <div
        class="flex flex-col space-y-16 px-4 py-12 mt-24 lg:mt-72 max-w-8xl mx-auto justify-center h-full"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-delay="100"
        data-aos-duration="260"
      > 
        <div class="flex flex-col space-y-4">
        <span class="text-4xl lg:text-7xl">{{typer[current][0]}}</span>
        <span class="text-4xl lg:text-7xl">{{typer[current][1]}}</span>
        </div>

        <button class="bg-blue-500 rounded-full px-4 py-1 w-48">
           JOIN US
        </button>
      </div>
    </div>
    <div class="flex flex-col space-y-4 px-1 max-w-7xl mx-auto py-12">
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
      class="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12 text-white max-w-7xl mx-auto"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="100"
      data-aos-duration="260"
    >
      <div
        class="bg-gray-800 rounded-xl lg:text-right text-center p-2 lg:p-8 flex flex-col space-y-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
      >
        <span class="text-4xl">Vision</span>
        <span class = "text-justify"
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
        class="bg-gray-700 rounded-xl lg:text-left text:center p-2 lg:p-8 flex flex-col space-y-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        <span class="text-4xl">Mission</span>
        <span class = "text-justify"
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
    <div
      class="bg-blue-100 w-full py-12 mx-auto"
    >
      <div class="max-w-7xl mx-auto flex flex-col space-y-4 lg:space-x-4 lg:space-y-0 lg:flex-row items-stretch justify-between"
            data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="100"
      data-aos-duration="260"
      >
        <div
          v-for="item in events"
          :key="item.title"
          class="flex flex-col space-y-4 items-center bg-white lg:w-72 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          <div class="flex-shrink-0">
            <img :src="item.image" :alt="item.title" class="h-full lg:h-48 w-full lg:w-72 object-cover" />
          </div>
          <div class="text-base p-2 text-center">
            <div class="font-semibold text-2xl">{{ item.title }}</div>
            <div class="text-gray-600 font-light">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto flex flex-col space-y-4 lg:space-x-4 lg:space-y-0 lg:flex-row items-stretch justify-between"
            data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="100"
      data-aos-duration="260"
      >

      <MiscCarousel :images="['/testpol.webp','/testpol.webp','/testpol.webp','/testpol.webp','/testpol.webp']"/>
      </div>

    <div class="mt-24">a</div>
  </div>


</template>
<script setup>

const events = [
  {
    title: "Hear You Out",
    description: "Respond to emergencies.",
    image: "/testpol.webp",
  },
  {
    title: "Support",
    description: "Gender justice and women's rights.",
    image: "/testpol.webp",
  },
  {
    title: "Protect",
    description: "Resolve conflicts and crisis.",
    image: "/testpol.webp",
  },
];

definePageMeta({
    title: "Home"
})

const typer=[['POLICE' ,'PUBLIC CONNECT'],['WE CONNECT WITH','OUR PEOPLE'],['WE HELP', 'OUR PEOPLE']]
const current=ref(0)
onMounted(() => 
{setInterval(()=>{
  if(current.value===typer.length-1) current.value=0 
  else current.value +=1
},4000)
})




</script>
