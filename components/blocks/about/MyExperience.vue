<template>
    <div id="my-experience" class="block spacer p-top-xl">
        <h2>{{experience.regtitleexp}} <span class="line">{{experience.hightitleexp}}</span></h2>
        <div class="row gutter-width-lg with-pb-lg">
            <template v-for="item in experience.expitemslist" >
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div class="card border-0">
                      <div class="card-body p-0">
                          <h4>{{ item.expitemtitle }}</h4>

                          <p class="p-small text-secondary bold">{{item.expstartdate}} - {{ item.expenddate }}</p>

                          <p>{{ item.expdesc }}</p>
                      </div>
                  </div>
              </div>
            </template>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'My-Experience',
        props: {
          experience: {
            type: Object,
            default: {}
          }
        },
    }
</script>
