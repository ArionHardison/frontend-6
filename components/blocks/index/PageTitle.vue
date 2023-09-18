<template>
    <section id="page-title" class="block">
        <div class="wrapper">
            <div class="row">
                <div class="col col-1 position-relative">
                    <div class="title">
                        <h1 class="h">{{content.htitle}}<span class="dot">{{content.tpostfix}}</span></h1>

                        <div class="title-clone">{{content.htitle}}</div>
                    </div>

                    <div class="spacer p-top-lg">
                        <p class="p-large w-75">{{content.htdescription}}</p>
                    </div>
                </div>

                <div class="col col-2 d-none d-sm-block">
                    <div class="d-flex">
                        <div class="align-self-start w-100">
                            <div class="img object-fit">
                                <div class="object-fit-cover">
                                    <img :src="$imageUrl(content.htimage, 'md')" class="img-fluid" :alt="content.htdescription">
                                </div>
                            </div>
                        </div>

                        <div class="align-self-end p-left-scroll">
                            <a @click="scrollToSection('#my-works')" title="Scroll" class="btn btn-link btn-vertical transform-scale-h border-0 p-0 scroll-to-id d-flex" href="#my-works">
                                <span class="vertical-text">
                                    <span>S</span>
                                    <span>c</span>
                                    <span>r</span>
                                    <span>o</span>
                                    <span>l</span>
                                    <span>l</span>
                                </span>

                                <span class="align-self-end">
                                    <i class="icon-c icon-arrow-down"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Page-Title',
        props: {
          content: {
            type: Object,
            default: ()=>{}
          }
        }
    }
</script>
