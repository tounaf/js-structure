<template>
    <div>
        <!--begin::Loader-->
        <div class="page-loader flex-column">
            <div class="d-flex align-items-center mt-5">
                <span class="spinner-border text-primary" role="status"></span>
                <span class="text-muted fs-6 fw-bold ms-5">{{ $t('loading') }}...</span>
            </div>
        </div>
        <!--end::Loader-->
        <router-view />
    </div>
</template>

<script>
import {useStore} from "vuex";
import {computed, onMounted, ref, watch} from "vue";
import {VERIFY_AUTH} from "../services/store/auth.module";
import i18nService from "../services/i18n.service";
import {useI18n} from "vue-i18n";

export default {
    name: 'App',
    setup(){
        const {t} = useI18n()
        const store = useStore()
        const verifyAuth = () => {
            store.dispatch(VERIFY_AUTH)
        }
        onMounted(verifyAuth)
        $(window).on("blur focus", function(e) {
            let prevType = $(this).data("prevType");
            if(prevType === 'blur'){
                store.dispatch(VERIFY_AUTH)
            }
            $(this).data("prevType", e.type);
        })

        const isAuthenticated = computed(() => store.getters.isAuthenticated)
        watch(() => isAuthenticated.value, (value) => {
            if(!value){
                location.reload()
            }
        })

        const isLoading = ref(false)
        let axiosInterceptor = null
        const enableInterceptor = () => {
            axiosInterceptor = window.axios.interceptors.request.use((config) => {
                isLoading.value = true
                return config
            }, (error) => {
                isLoading.value = false
                return Promise.reject(error)
            })
            axios.interceptors.response
                .use(
                    (response) => {
                        isLoading.value = false
                        return response
                    },
                    function(error) {
                        isLoading.value = false
                        return Promise.reject(error)
                    }
                )
        }

        const disableInterceptor = () => {
            axios.interceptors.request.eject(axiosInterceptor)
        }
        onMounted(enableInterceptor)

        watch(() => isLoading.value, (value) => {
            const body = $('body')
            if(value){
                body.addClass('page-loading')
            }else{
                body.removeClass('page-loading')
            }
        })
    }
}
</script>
