<template>
  <div>
    <div class="relative pb-5/6">
      <img
        class="absolute object-cover w-full h-full rounded-lg shadow-md"
        :src="property.imageUrl"
        :alt="property.imageAlt"
      />
    </div>
    <div class="relative px-4 -mt-16">
      <div class="p-6 bg-white rounded-lg shadow-lg">
        <div class="flex items-baseline">
          <span
            class="inline-block px-2 text-xs font-semibold tracking-wide text-blue-800 uppercase bg-blue-200 rounded-full"
            >New</span
          >
          <div
            class="ml-2 text-xs font-semibold tracking-wide text-gray-600 uppercase"
          >
            {{ property.beds }} beds &bull; {{ property.baths }} baths
          </div>
        </div>
        <h4 class="mt-1 text-lg font-semibold leading-tight truncate">
          {{ property.title }}
        </h4>
        <div class="mt-1">
          {{ property.formattedPrice }}
          <span class="text-sm text-gray-600"> / wk</span>
        </div>
        <div class="flex items-center mt-2">
          <svg
            v-for="i in 5"
            :key="i"
            :class="i <= property.rating ? 'text-blue-500' : 'text-gray-400'"
            class="w-4 h-4 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.133 20.333c-1.147.628-2.488-.387-2.269-1.718l.739-4.488-3.13-3.178c-.927-.943-.415-2.585.867-2.78l4.324-.654 1.934-4.083a1.536 1.536 0 0 1 2.804 0l1.934 4.083 4.324.655c1.282.194 1.794 1.836.866 2.78l-3.129 3.177.739 4.488c.219 1.331-1.122 2.346-2.269 1.718L12 18.214l-3.867 2.119z"
              fill-rule="evenodd"
            />
          </svg>
          <span class="ml-2 text-sm text-gray-600"
            >{{ property.reviewCount }} reviews</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["property"],
};
</script>