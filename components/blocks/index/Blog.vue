<template>
    <section id="blog" class="block spacer p-top-xl">
        <div class="wrapper">
            <h2 class="text-right">
                <router-link title="Blogging" class="transform-scale-h" to="/journal">
                    <span class="line">Articles</span>
                </router-link>
            </h2>
        </div>

        <div class="bg-gray-light ptb-blog">
            <div class="wrapper">
                <div class="row gutter-width-lg">

                    <div v-for="article in articles.data" :key="article.id" class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div class="card card-post">
                            <div class="card-top position-relative">
                                <a  :title="article.title" :href="article.link">
                                    <div class="img object-fit overflow-hidden">
                                        <div class="object-fit-cover transform-scale-h">
                                            <img class="card-top-img" :src="$imageUrl(article.image, 'sm')" :alt="article.title">
                                        </div>
                                    </div>
                                </a>

                                <div class="card-category">
                                    <span :title="article.category" class="btn btn-sm btn-light transform-scale-h border-0">{{ article.category }}</span>
                                </div>
                            </div>

                            <div class="card-body border">
                                <h5 class="card-title">
                                    <a  :title="article.title" :href="article.link" target="_blank">{{ article.title }}</a>
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
        name: 'Blog',
        mixins: [api],
        data() {
            return {
                articles:{
                  data: []
                }
            }
        },
        async created(){
          this.articles = await this.get("public/get-news/0");
        },
    }
</script>
