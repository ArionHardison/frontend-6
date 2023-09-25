<template>
    <section id="page-title">
        <div class="wrapper">
            <div class="title position-relative">
                <h1>{{title}}<span class="dot">{{category}}</span></h1>

                <div class="title-clone">{{title}}{{category}}</div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Page-Title',
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
