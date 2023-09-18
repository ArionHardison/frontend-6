<template>
    <section id="programs" class="block spacer p-top-xl">
        <div class="wrapper">
            <h2 class="text-right">
                <router-link title="Blogging" class="transform-scale-h" to="/programs">
                    <span class="line">Programs</span>
                </router-link>
            </h2>
        </div>

        <div class="bg-gray-light ptb-blog">
            <div class="wrapper">
                <div class="row gutter-width-lg">
                    <div v-for="program in programs.data" :key="program.id" class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div class="card card-post">
                            <div class="card-top position-relative">
                                <nuxt-link :title="program.name" :to="`/program/${$slug(program.id, program.name)}`">
                                    <div class="img object-fit overflow-hidden">
                                        <div class="object-fit-cover transform-scale-h">
                                            <img class="card-top-img" :src="$imageUrl(program.program_image, 'md', false)" :alt="program.name">
                                        </div>
                                    </div>
                                </nuxt-link>

                                <div class="card-category">
                                    <nuxt-link :title="program.name" class="btn btn-sm btn-light transform-scale-h border-0" :to="`/programs/${$slug(program.category_id, program.category)}`">{{ program.category }}</nuxt-link>
                                </div>
                            </div>

                            <div class="card-body border">
                                <h5 class="card-title">
                                    <nuxt-link :title="program.name" :to="`/program/${$slug(program.id, program.name)}`">{{ program.name }}</nuxt-link>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import api from "@/mixins/api";
    export default {
        name: 'Programs',
        mixins: [api],
        data() {
            return {
              programs: {
                data: []
              },
            }
        },
        async created(){
          this.programs = await this.get("public/get-recent-programs/3");
        },
    }
</script>
