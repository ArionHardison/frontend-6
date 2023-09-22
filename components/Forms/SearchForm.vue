<template>
    <form class="search-form" role="search" method="get" @submit.prevent="runSearch">
        <div class="input-group">
            <input
                type="text"
                class="form-control"
                placeholder="Type something to search"
                name="s"
                title="Type something to search"
                v-model="searchQuery"
                @input="autoSearch"
            >

            <div class="input-group-append">
                <button type="submit" @click="runSearch" class="btn btn-link transform-scale-h border-0 p-0">
                    <span>Search</span>
                    <i class="icon-c icon-arrow-right"></i>
                </button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
  name: "SearchForm",
  props: {
    redirect: {
      type: Boolean,
      default: true
    },
    path: {
      type: String,
      default: "",
    }
  },
  data() {
    return {
      searchQuery: "",
      searchTimeout: null,
    };
  },
  created() {
    this.searchQuery = this.$route.query.s ? this.$route.query.s : "";
  },
  methods: {
    autoSearch(){
      if(this.searchQuery.trim().length<=3 && this.searchQuery.trim().length>1){
        return;
      }
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(()=>{
        this.runSearch();
      }, 500);
    },
    runSearch(){
      this.$emit("search");
      setTimeout(()=>{
        if(this.redirect){
          this.$router.push({path: this.path, query: {s: this.searchQuery}});
        }else {
          this.$router.push({path: this.$route.fullPath, query: {s: this.searchQuery}});
        }
      }, 150)
    }
  }
};
</script>
