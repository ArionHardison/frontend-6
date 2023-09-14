<template>
    <div id="about-page-index">
        <Loading />

        <Header />
        
       <main id="main" class="site-main">
           <PageTitle />

            <section id="page-content" class="spacer p-top-xl">
                <div class="wrapper">
                    <div id="about" class="block">
                        <h2><span class="line">A passionate</span><br> photographer, designer in media.</h2>
                        
                        <div class="row bg-half-ring-left gutter-width-lg">
                            <div class="col align-self-top pl-0">
                                <div class="img object-fit">
                                    <div class="object-fit-cover">
                                        <img src="assets/img/assets/img/placeholder/527x600.jpg" alt="Luca Reynolds" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col align-self-center description">
                                <h4>I’m Luca Reynolds</h4>
                                
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            </div>
                        </div>
                    </div>
                    
                    <MyExperience />
                    
                    <Awards />
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

    import PageTitle from '~/components/blocks/about/PageTitle';
    import MyExperience from '~/components/blocks/about/MyExperience';
    import Awards from '~/components/blocks/about/Awards';

    export default {
        components: {
            Loading,
            Header,
            PageTitle,
            MyExperience,
            Awards,
            Footer
        },
        mounted: function() {
            document.body.classList.add( 'page' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-line' );
        },
        beforeDestroy() {
            document.body.classList.remove( 'page' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-line' );
        },
        metaInfo: {
            title: 'About | Oxer - Minimal Portfolio Vue JS Template',
            titleTemplate: '%s'
        }
    }
</script>
