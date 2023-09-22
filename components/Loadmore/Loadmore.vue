<template>
  <div class="loadmore spacer m-top-lg text-center">
    <button @click="loadMore" title="Load More" class="btn btn-dark border-0 transform-scale-h mb-3">Load More</button>
  </div>
</template>

<script>
export default {
  name: 'Loadmore',
  methods: {
    loadMore(){
      this.$emit("load");
    }
  }
}
</script>
