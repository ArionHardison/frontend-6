<template>
    <div id="works-index">
        <Loading />

        <Header />
        
       <main id="main" class="site-main">
           <PageTitle />

            <section id="page-content" class="spacer p-top-xl">
                <MyWorks />
            </section>
        </main>

        <Footer />
    </div>
</template>

<script>
    import Loading from '~/components/Loading/Loading';
    import Header from '~/components/blocks/header/Header';
    import Footer from '~/components/blocks/footer/Footer';

    import PageTitle from '~/components/blocks/works/PageTitle';
    import MyWorks from '~/components/blocks/works/MyWorks';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            MyWorks,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'archive' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-line' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'archive' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-line' );
        },
        metaInfo: {
            title: 'Works | Oxer - Minimal Portfolio Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>
