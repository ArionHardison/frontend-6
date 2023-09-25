<template>
    <div id="awards" class="block spacer p-top-xl">
        <h2 class="text-right"><span class="line">{{awards.awregtitleitem}}</span> {{awards.awregtitleitemh}}</h2>
        <div class="row gutter-width-lg with-pb-lg">
            <div v-for="item in awards.awlistitemsselect" :key="item.id" class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="card">
                    <div class="card-body p-large">
                        <h4>{{ item.awname }}</h4>
                        <p class="mt-0">{{ item.awtakenplace }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Awards',
        props: {
          awards: {
            type: Object,
            default: {}
          }
        },
    }
</script>
