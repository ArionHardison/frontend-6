<template>
    <div id="works-inside-index">
        <Loading />

        <Header />
        
        <main id="main" class="site-main bg-half-ring-right bg-half-ring-top">
            <section id="page-content">
                <div class="wrapper">
                    <div id="single">
                        <template v-if="singleWork">
                          <div class="row gutter-width-lg single-content">
                              <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                                  <div class="img object-fit">
                                    <div class="object-fit-cover">
                                      <img :src="$imageUrl(singleWork.titleImage, 'md')" :alt="singleWork.workTitle_op">
                                    </div>
                                  </div>
                                  <div v-for="item in singleWork.workImagesList" :key="item.workImage" class="img object-fit">
                                      <div class="object-fit-cover">
                                        <img :src="$imageUrl(singleWork.workImage, 'md')" :alt="singleWork.workTitle_op">
                                      </div>
                                  </div>
                              </div>

                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                                  <p class="date">{{singleWork.workDate}}</p>

                                  <h1 class="small">{{singleWork.workTitle_op}}</h1>

                                  <div class="description">
                                      <p>{{singleWork.workDesc}}</p>

                                      <h5>{{singleWork.ideaTitle}}</h5>

                                      <p>{{singleWork.ideaDesc}}</p>

                                      <h5>{{singleWork.prodFeaturesTitle}}</h5>

                                      <ul>
                                          <template v-for="feature in singleWork.prodFeatures">
                                            <li>{{feature.featureText}}</li>
                                          </template>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                        </template>
                    </div>
                </div>
            </section>
        </main>

        <Footer />
    </div>
</template>

<script>
    import Loading from '~/components/Loading/Loading';
    import Header from '~/components/blocks/header/Header';
    import Footer from '~/components/blocks/footer/Footer';


    import api from "@/mixins/api";

    export default {
        components: {
            Loading,
            Header,
            Footer
        },
        mixins: [api],
        data() {
            return {
                items: [],
                singleWork: null
            }
        },
        async created(){
         this.singleWork = await this.get(`public/get-item/${this.$getId(this.$route.params.id)}`)
        },
        mounted: function() {
            document.body.classList.add( 'single' );
            document.body.classList.add( 'single-portfolio' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-line' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'single' );
            document.body.classList.remove( 'single-portfolio' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-line' );
        },
        metaInfo: {
            title: 'Works inside | Oxer - Minimal Portfolio Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>
