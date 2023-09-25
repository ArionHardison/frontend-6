<template>
    <div id="about-page-index">
        <Loading />

        <Header />
        <template v-if="aboutPage">
         <main id="main" class="site-main">
             <PageTitle :title="aboutPage.ptop.aboutpTitle" :category="aboutPage.ptop.aboutppostfix"/>

              <section id="page-content" class="spacer p-top-xl">
                  <div class="wrapper">
                      <div id="about" class="block">
                          <h2><span class="line">{{aboutPage.ptop.introtext}}</span><br> {{aboutPage.ptop.regulartext}}</h2>

                          <div class="row bg-half-ring-left gutter-width-lg">
                              <div class="col align-self-top pl-0">
                                  <div class="img object-fit">
                                      <div class="object-fit-cover">
                                          <img :src="$imageUrl(aboutPage.ptop.timage)" alt="Luca Reynolds" class="img-fluid">
                                      </div>
                                  </div>
                              </div>

                              <div class="col align-self-center description">
                                  <h4>{{aboutPage.ptop.biotitle}}</h4>

                                  <p>{{aboutPage.ptop.biotext}}</p>
                              </div>
                          </div>
                      </div>

                      <MyExperience :experience="aboutPage.expblock"/>

                      <Awards :awards="aboutPage.awlist"/>
                  </div>
              </section>
          </main>
        </template>
        <Footer />
    </div>
</template>

<script>
    import Loading from '~/components/Loading/Loading';
    import Header from '~/components/blocks/header/Header';
    import Footer from '~/components/blocks/footer/Footer';

    import PageTitle from '~/components/blocks/about/PageTitle';
    import MyExperience from '~/components/blocks/about/MyExperience';
    import Awards from '~/components/blocks/about/Awards';
    import fcms from "@/mixins/fcms";
    export default {
        middleware: ['maintenance'],
        mixins: [fcms],
        components: {
            Loading,
            Header,
            PageTitle,
            MyExperience,
            Awards,
            Footer
        },
        data(){
          return {
            aboutPage: null,
          }
        },
        mounted: function() {
            document.body.classList.add( 'page' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-line' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'page' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-line' );
        },
        metaInfo: {
            title: 'About | Oxer - Minimal Portfolio Vue JS Template',
            titleTemplate: '%s'
        },
        async created(){
           const aboutPage = await this.getEntities("abpage");
           if(aboutPage){
             this.aboutPage = aboutPage.abpage;
           }
        }
    }
</script>
