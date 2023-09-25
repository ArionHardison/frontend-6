<template>
  <div id="home-index">
    <Loading />

    <Header />

    <main id="main" class="site-main">
        <template v-if="entities.home">
          <template v-if="entities.home.fblock">
            <PageTitle :content="entities.home.fblock" />
          </template>
          <section id="my-works" class="block spacer m-top-xl">
            <div class="wrapper">
              <h2>
                <router-link title="My works" class="transform-scale-h" to="/works">My <span class="line">works</span></router-link>
              </h2>
            </div>
            <MyWorks />
          </section>
          <template v-if="entities.home.cblock">
            <section id="contact" class="block spacer p-top-xl">
              <div class="wrapper">
                <div class="text-center">

                  <h3 class="mb-0 after c-desc">{{entities.home.cblock.cdescription}}</h3>

                  <div class="block spacer p-top-lg">
                    <router-link title="Contacts" to="/contacts" class="btn btn-dark btn-bold transform-scale-h border-0">{{entities.home.cblock.btnname}}</router-link>
                  </div>
                </div>
              </div>
            </section>
          </template>
          <Programs/>
          <Blog />
      </template>
    </main>

    <Footer />
  </div>
</template>

<script>
import Loading from '~/components/Loading/Loading';
import Header from '~/components/blocks/header/Header';
import Footer from '~/components/blocks/footer/Footer';

import PageTitle from '~/components/blocks/index/PageTitle';
import MyWorks from '~/components/blocks/works/MyWorks';
import Blog from '~/components/blocks/index/Blog';
import Programs from "@/components/blocks/index/Programs";
import api from "@/mixins/api";

export default {
  mixins: [api],
  middleware: ['maintenance'],
  components: {
    Loading,
    Header,
    PageTitle,
    MyWorks,
    Blog,
    Programs,
    Footer
  },
  data() {
    return {
      entities: {}
    }
  },
  async created() {
    const entities = await this.get(`public/get-entities/home`)
    let sortedEntities = {};
    if(entities) {
      for (let entity of entities) {
        sortedEntities[entity.entity_call] = entity;
      }
    }
    this.entities = sortedEntities;
    console.log(this.entities)
  },
  mounted: function() {
    document.body.classList.add( 'home' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );
  },
  beforeDestroy() {
    document.body.classList.remove( 'home' );
    document.body.classList.remove( 'bg-fixed' );
    document.body.classList.remove( 'bg-line' );
  },
  metaInfo: {
    title: 'Home | Oxer - Minimal Portfolio Vue JS Template',
    titleTemplate: '%s'
  }
}
</script>
<style scoped>
.c-desc {
  width: 70%;
  display: inline-block;
}
</style>