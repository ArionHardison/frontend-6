<template>
    <section id="page-title">
        <div class="wrapper">
            <div class="title position-relative">
                <h1 class="c">{{title}}<span class="dot">{{titleH}}</span></h1>
                        
                <div class="title-clone">{{title}}{{titleH}}</div>
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
            default: ""
          },
          titleH: {
            type: String,
            default: ""
          }
        }
    }
</script>
