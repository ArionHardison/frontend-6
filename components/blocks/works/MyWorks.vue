<template>
    <div class="gallery">
       <div class="wrapper">
            <ul class="gallery-filter list-unstyled no-space">
                <template v-if="containers.workCats">
                 <fragment v-for="category in containers.workCats" :key="category.id">
                        <li @click="filter">
                            <a :title="category.catname" class="btn btn-link transform-scale-h click" :data-filter="category.filter" href="">{{ category.catname }}</a>
                        </li>

                        <li>
                            <span class="btn btn-link">-</span>
                        </li>
                    </fragment>
                </template>
            </ul>
        </div>

        <div class="gallery-item-wrapper">
            <div class="gallery-items">
                <template v-if="containers.workslist">
                  <nuxt-link v-for="work in containers.workslist.hpwList" :key="work.id" :title="work.workTitle_op" :class="[ 'gallery-item active ' + `filter_${work.prodCategorySeletected}` ]" :to="`/work/${$slug(work.id, work.workTitle_op)}`">
                      <div class="img object-fit">
                          <div class="object-fit-cover">
                              <img :src="$imageUrl(work.titleImage, 'md')" :alt="work.workTitle_op">
                          </div>
                      </div>

                      <div class="gallery-hover">
                          <div class="gallery-hover-wrapper">
                              <h3>{{ work.workTitle_op }}</h3>

                              <span class="btn btn-link border-0 transform-scale-h p-0">
                                  Look inside
                                  <i class="icon-c icon-arrow-right"></i>
                              </span>
                          </div>
                      </div>
                  </nuxt-link>
                </template>
            </div>
        </div>

        <div v-if="currentPage === '/'" class="text-center no-space">
            <router-link title="See more" class="btn btn-link border-0 p-0 transform-scale-h" to="/works">See more<i class="icon-c icon-arrow-right"></i></router-link>
        </div>
    </div>
</template>

<script>
    import { Fragment } from 'vue-fragment';
    import fcms from "@/mixins/fcms";
    export default {
        name: 'My-Works',
        mixins: [fcms],
        data() {
            return {
                containers: {}
            }
        },
        components: {
            Fragment
        },
        computed: {
            currentPage() {
                return this.$route.path;
            }
        },
        async beforeMount() {
           let containers = await this.getContainers("workslist|workCats")
            if(containers.workCats){
              containers.workCats = containers.workCats.map((category)=>{
                 category.filter = `filter_${category.id}`
                 return category;
              })
            }
            this.containers = containers;
            console.log(this.containers);
            this.setUIprops();
        },
        methods: {
            setUIprops(){
              if(process.client) {
              /**  const lastLi = document.querySelector('.gallery .gallery-filter').lastElementChild;
                lastLi.remove();

                const filters = document.querySelectorAll('.gallery-filter .click');
                filters.forEach(filter => {
                  if (filter.getAttribute('data-filter') === '*') {
                    filter.classList.add('active');
                  }
                });

                const grid = document.querySelector('.gallery-items');

                import('isotope-layout').then(Isotope => {
                  this.iso = new Isotope.default('.gallery-items', {
                    itemSelector: '.gallery-item',
                    masonry: {
                      horizontalOrder: true
                    }
                  });

                  import('imagesloaded').then(ImagesLoaded => {
                    const imgLoad = ImagesLoaded.default('.gallery-items');
                    imgLoad.on('progress', () => {
                      this.iso.layout();
                    });
                  });
                });**/
              }
            },
            filter: function( event ) {
                event.preventDefault();

                const filter        = event.target;
                const filterValue   = filter.getAttribute( 'data-filter' );
                const filters       = document.querySelectorAll( '.gallery-filter .click' );

                filters.forEach( filter => {
                    if ( filter.classList.contains( 'active' )) {
                        filter.classList.remove( 'active' );
                    }
                });

                filter.classList.add( 'active' );

                this.changeLayout( filterValue )
            },
            changeLayout: function( newFilter ) {
              if(process.client) {
                const grid = document.querySelector('.gallery-items');

                if (this.iso === undefined) {
                  this.iso = new Isotope(grid, {
                    itemSelector: '.gallery-item',
                    masonry: {
                      horizontalOrder: true
                    }
                  });
                }

                if (newFilter === '*') {
                  this.iso.arrange({filter: `*`});

                } else {
                  this.iso.arrange({filter: newFilter});
                }
              }
            }
        },
        unmounted() {
            this.iso.destroy();
        }
    }
</script>
