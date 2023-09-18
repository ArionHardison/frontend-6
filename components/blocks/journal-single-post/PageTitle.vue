<template>
    <section id="page-title">
        <div class="wrapper">
            <div class="title position-relative">
                <template v-if="title">
                  <h1 class="small">{{title}}</h1>
                </template>
                <template v-if="category">
                  <div class="title-clone">{{category}}</div>
                </template>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'PageTitle',
        props: {
          title: {
            type: String,
            default: null
          },
          category: {
            type: String,
            default: null
          }
        }
    }
</script>
