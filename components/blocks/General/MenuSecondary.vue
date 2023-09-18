<template>
    <nav class="menu-secondary">
        <ul class="clearfix list-unstyled">
          <template v-if="this.entities.snetworks">
            <li v-for="item in this.entities.snetworks.nlists.networksList" :key="item.id"><a :title="item.nname" class="btn btn-link transform-scale-h border-0 p-0" :href="item.nurl">{{ item.nname }}</a></li>
          </template>
        </ul>
    </nav>
</template>

<script>
    import api from "@/mixins/api";
    export default {
        name: 'Menu-Secondary',
        mixins: [api],
        data() {
            return {
              entities: {},
            }
        },
        async created() {
          const entities = await this.get(`public/get-entities/snetworks`)
          let sortedEntities = {};
          if(entities) {
            for (let entity of entities) {
              sortedEntities[entity.entity_call] = entity;
            }
          }
          this.entities = sortedEntities;
        },
    }
</script>
