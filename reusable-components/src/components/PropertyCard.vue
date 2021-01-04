<template>
  <div class="bg-white border rounded-lg overflow-hidden">
    <img :src="property.imageUrl" :alt="property.imageAlt" />
    <div class="p-6">
      <div>{{ property.beds }} beds &bull; {{ property.baths }} baths</div>
      <h4>
        {{ property.title }}
      </h4>
      <div>
        {{ property.formattedPrice }}
        <span class="text-gray-600 text-sm"> / wk</span>
      </div>
      <div class="mt-2 flex items-center">
        <span>{{ property.reviewCount }} reviews</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["property"],
};
</script>