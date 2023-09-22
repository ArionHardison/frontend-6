<template>
    <div class="tags">
        <p>
            <template v-for="tag in tags">
              <button :title="tag.tag_name" class="btn btn-dark border-0 btn-sm mt-1 mb-1 ml-1" @click="setTag(tag)">{{ tag.tag_name }}</button>
            </template>
        </p>
    </div>
</template>

<script>
import api from "@/mixins/api";
export default {
  name: 'Tags',
  mixins: [api],
  data() {
    return {
      tags: [],
    }
  },
  created() {
    this.getTags();
  },
  methods: {
    async getTags(){
      this.tags = await this.get("public/program-tag/all");
    },
    setTag(tag){
      const cat = this.$route.params.category;
      const search =  this.$route.query.s ? this.$route.query.s : '';
      this.$router.push(`/programs/${cat ? cat : '0-all-categories'}/${tag.id}-${tag.tag_name}${search ? '?s='+search : '' }`);
    }
  }
}
</script>