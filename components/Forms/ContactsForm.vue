<template>
    <form v-on:submit.prevent="submitForm" class="wpcf7-form">
        <p class="input-group gutter-width-30">
            <span class="gutter-width">
                <input-field
                    class="mb-4"
                    name="email"
                    type="text"
                    v-model="form.cformname"
                    placeholder="Name"
                />
            </span>
                                
            <span class="gutter-width">
               <input-field
                   class="mb-4"
                   name="email"
                   type="text"
                   v-model="form.emailorphone"
                   placeholder="Email/Phone no. *"
               />
            </span>
        </p>
        
        <p>

          <TextareaField v-model="form.message" name="message" custom-class="mt-1"/>
        </p>
                            
        <p class="mb-0">
            <input name="submit" type="submit" class="btn btn-dark border-0 transform-scale-h" value="Send"> 
        </p>

        <transition appear leave-active-class="animated fadeOut">
            <div v-if="callAlert" id="alert" :class="'animated fadeIn alert alert--shadow alert-' + alertClass">
                {{ responseMessage }}
            </div>
        </transition>
    </form>
</template>

<script>
    import api from "@/mixins/api";
    import InputField from "@/components/Forms/Fields/InputField.vue";
    import TextareaField from "@/components/Forms/Fields/TextareaField.vue";
    export default {
        name: 'ContactsForm',
      components: {InputField, TextareaField},
      mixins:[api],
        data() {
            return {
                form: {
                    cformname: '',
                    emailorphone: '',
                    message: ''
                },
                successMessage: "Sender's message was sent successfully",
                warningMessage: 'Fill up the form, please!',
                errorMessage: 'Something go wrong. Try again later!',
                responseMessage: '',
                alertClass: '',
                callAlert: false
            }
        },
        methods: {


          async submitForm() {
              const requestSent = await this.post("public/store-client-container/contactUs", this.form);
              if(requestSent){
                this.form = {
                  cformname: '',
                  emailorphone: '',
                  message: ''
                }
                this.responseMessage = this.successMessage;
                this.alertClass = 'success';
              }else{
                this.responseMessage = this.errorMessage;
                this.alertClass = 'danger';
              }
              this.callAlert       = true;

            setTimeout( () => {
              this.callAlert = false;
            }, 2000 )
            }
        }
    }
</script>
