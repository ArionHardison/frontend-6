<template>
    <div id="journal-single-post-index">
        <Loading />

        <Header />
        
        <main id="main" class="site-main">
            <PageTitle />

            <section id="page-content" class="spacer m-top-xl">
                <div class="wrapper">
                    <div id="single">
                        <div class="row gutter-width-lg">
                          <FollowProgramComponent/>
                        </div>
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

    import PageTitle from '~/components/blocks/journal-single-post/PageTitle';
    import Meta from '~/components/blocks/journal-single-post/Meta';
    import Tags from '~/components/blocks/journal-single-post/Tags';
    import Comments from '~/components/blocks/journal-single-post/Comments';
    import Sidebar from '~/components/blocks/journal/Sidebar';
    import FollowProgramComponent from "@/components/Program/FollowProgramComponent.vue";

    export default {
        middleware: ['isUser'],
        components: {
          FollowProgramComponent,
            Loading,
            Header,
            PageTitle,
            Meta,
            Tags,
            Comments,
            Sidebar,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'single-post' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-line' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'single-post' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-line' );
        },
        metaInfo: {
            title: 'Journal single post | Oxer - Minimal Portfolio Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>
