<template>
    <div id="contacts-index">
        <Loading />

        <Header />

        <template v-if="contactPage">
          <main id="main" class="site-main">

              <PageTitle :title="contactPage.contactscnt.contactpagetitle" :title-h="contactPage.contactscnt.contactpagetitleh"/>

              <section id="page-content" class="block spacer p-top-xl">
                  <div class="wrapper">
                      <div id="contacts" class="block">
                          <div class="row">
                              <div class="col-xl-4 col-lg-4 col-md-4 col-12">
                                  <h2>{{contactPage.contactscnt.pnameregcont}} <span class="line">{{contactPage.contactscnt.pnameregconth}}</span></h2>

                                  <p class="mt-0">{{ contactPage.contactscnt.descriptioncontacts }}</p>
                              </div>

                              <div class="col-xl-8 col-lg-8 col-md-8 col-12">
                                  <div class="list-group list-group-horizontal-sm">
                                      <template v-for="addrItem in contactPage.addresslistitems.addrlistitemsc">
                                        <div class="list-group-item">
                                            <h4>{{addrItem.addrtitle}}</h4>

                                            <p>{{addrItem.addrfield}}</p>
                                        </div>
                                      </template>
                                  </div>

                                  <div class="list-group list-group-horizontal-sm mt-0">
                                    <template v-for="cItem in contactPage.contactslistc.clistmulti">
                                      <div class="list-group-item mb-0 pb-0">
                                          <h4>{{cItem.citemtitle}}</h4>

                                          <p>{{cItem.citemcontact}}</p>
                                      </div>
                                    </template>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="block spacer p-top-xl">
                          <h2>Fill up a <span class="line">form</span></h2>

                          <ContactsForm />
                      </div>
                  </div>
              </section>
          </main>
        </template>

        <Footer />
    </div>
</template>

<script>
    import Loading from '~/components/Loading/Loading';
    import Header from '~/components/blocks/header/Header';
    import Footer from '~/components/blocks/footer/Footer';
    import fcms from "@/mixins/fcms";
    import PageTitle from '~/components/blocks/contacts/PageTitle';
    import ContactsForm from '~/components/Forms/ContactsForm';

    export default {
        middleware: ['maintenance'],
        mixins: [fcms],
        components: {
            Loading,
            Header,
            PageTitle,
            ContactsForm,
            Footer
        },
        data(){
          return {
            contactPage: null
          }
        },
        async created(){
          const contactPage = await this.getEntities("contacts");
          if(contactPage){
            this.contactPage = contactPage.contacts;
          }
        },
        mounted: function() {
            document.body.classList.add( 'page' );
            document.body.classList.add( 'bg-fixed' );
            document.body.classList.add( 'bg-line' );
        },
        beforeDestroy: function() {
            document.body.classList.remove( 'page' );
            document.body.classList.remove( 'bg-fixed' );
            document.body.classList.remove( 'bg-line' );
        },
        metaInfo: {
            title: 'Contacts',
            titleTemplate: '%s'
        }
    }
</script>
