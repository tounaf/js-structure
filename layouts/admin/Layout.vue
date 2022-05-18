<template>
    <!--begin::Root-->
    <div class="d-flex flex-column flex-root">
        <!--begin::Page-->
        <div class="page d-flex flex-row flex-column-fluid">
            <!--begin::Aside-->
            <Aside />
            <!--end::Aside-->

            <!--begin::Wrapper-->
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                <!--begin::Header-->
                <div id="kt_header" style="" class="header align-items-stretch">
                    <!--begin::Container-->
                    <div class="container-fluid d-flex align-items-stretch justify-content-between">
                        <!--begin::Aside mobile toggle-->
                        <div class="d-flex align-items-center d-lg-none ms-n2 me-2" title="Show aside menu">
                            <div class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px" id="kt_aside_mobile_toggle">
                                <!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg-->
                                <span class="svg-icon svg-icon-1">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black"></path>
											<path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black"></path>
										</svg>
									</span>
                                <!--end::Svg Icon-->
                            </div>
                        </div>
                        <!--end::Aside mobile toggle-->
                        <!--begin::Mobile logo-->
                        <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                            <a href="/" class="d-lg-none">
                                <img alt="Logo" :src="$filters.url('/img/logo-light.png')" class="h-30px">
                            </a>
                        </div>
                        <!--end::Mobile logo-->
                        <!--begin::Wrapper-->
                        <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
                            <!--begin::Navbar-->
                            <div class="d-flex align-items-stretch" id="kt_header_nav">
                            </div>
                            <!--end::Navbar-->

                            <!--begin::Toolbar wrapper-->
                            <div class="d-flex align-items-stretch flex-shrink-0">
                                <!--begin::Account menu-->
                                <div v-if="currentUser" class="d-flex align-items-center ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
                                    <!--begin::Menu wrapper-->
                                    <div class="cursor-pointer symbol symbol-30px symbol-md-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                        <div class="d-flex align-items-center">
                                            <!--begin:: Avatar -->
                                            <div class="symbol symbol-circle symbol-50px overflow-hidden">
                                                <div class="symbol-label fs-3 bg-light-danger text-danger text-uppercase">{{ initial }}</div>
                                            </div>
                                            <!--end::Avatar-->
                                        </div>
                                    </div>
                                    <!--begin::Account account menu-->
                                    <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-300px" data-kt-menu="true">
                                        <!--begin::Menu item-->
                                        <div class="menu-item px-3">
                                            <div class="menu-content d-flex align-items-center px-3">
                                                <!--begin:: Avatar -->
                                                <div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                    <div class="symbol-label fs-3 bg-light-danger text-danger text-uppercase">{{ initial }}</div>
                                                </div>
                                                <!--end::Avatar-->
                                                <!--begin::User details-->
                                                <div class="d-flex flex-column">
                                                    <span v-if="currentUser.account && currentUser.account.name" class="fw-bolder text-gray-600 text-hover-primary mb-1">{{ currentUser.account.name }}</span>
                                                    <span class="fw-bold text-muted text-hover-primary fs-7">{{ currentUser.username }}</span>
                                                </div>
                                                <!--begin::User details-->
                                            </div>
                                        </div>
                                        <!--end::Menu item-->
                                        <!--begin::Menu separator-->
                                        <div class="separator my-2"></div>
                                        <!--end::Menu separator-->
                                        <!--begin::Menu item-->
                                        <div class="menu-item px-5">
                                            <a :href="$filters.url('/account')" class="menu-link px-5">{{ $t('my_account') }}</a>
                                        </div>
                                        <!--end::Menu item-->
                                        <!--begin::Menu item-->
                                        <div class="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start">
                                            <a href="#" class="menu-link px-5">
                                                <span class="menu-title position-relative">
                                                    {{ $t('language')}}
                                                    <span class="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                                                        {{ currentLanguage.name }}
                                                        <img class="w-15px h-15px rounded-1 ms-2" :src="$filters.url(currentLanguage.flag)" alt="">
                                                    </span>
                                                </span>
                                            </a>
                                            <!--begin::Menu sub-->
                                            <div class="menu-sub menu-sub-dropdown w-175px py-4">
                                                <!--begin::Menu item-->
                                                <div v-for="language in languages" class="menu-item px-3">
                                                    <a @click="selectLanguage(language)" class="menu-link d-flex px-5" :class="{'active': currentLanguage.lang === language.lang}">
														<span class="symbol symbol-20px me-4">
															<img class="rounded-1" :src="$filters.url(language.flag)" alt="">
														</span>
                                                        {{ language.name }}
                                                    </a>
                                                </div>
                                                <!--end::Menu item-->
                                            </div>
                                            <!--end::Menu sub-->
                                        </div>
                                        <!--end::Menu item-->
                                        <!--begin::Menu item-->
                                        <div v-if="currentCurrency" class="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start">
                                            <a href="#" class="menu-link px-5">
                                                <span class="menu-title position-relative">
                                                    {{ $t('currency')}}
                                                    <span class="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                                                        {{ currentCurrency.code }}
                                                    </span>
                                                </span>
                                            </a>
                                            <!--begin::Menu sub-->
                                            <div v-if="currencies.length" class="menu-sub menu-sub-dropdown w-175px py-4">
                                                <!--begin::Menu item-->
                                                <div
                                                    v-for="currency in currencies"
                                                    class="menu-item px-3">
                                                    <a @click="selectCurrency(currency)" class="menu-link d-flex px-5" :class="{'active': (currentCurrency.id === currency.id)}">
                                                        {{ currency.code }}
                                                    </a>
                                                </div>
                                                <!--end::Menu item-->
                                            </div>
                                            <!--end::Menu sub-->
                                        </div>
                                        <!--end::Menu item-->
                                        <!--begin::Menu separator-->
                                        <div class="separator my-2"></div>
                                        <!--end::Menu separator-->
                                        <!--begin::Menu item-->
                                        <div class="menu-item px-5">
                                            <a :href="$filters.url('/logout')" class="menu-link px-5">{{ $t('logout') }}</a>
                                        </div>
                                        <!--end::Menu item-->
                                    </div>
                                    <!--end::Account account menu-->
                                    <!--end::Menu wrapper-->
                                </div>
                                <!--end::Account menu-->
                            </div>
                            <!--end::Toolbar wrapper-->
                        </div>
                        <!--end::Wrapper-->
                    </div>
                    <!--end::Container-->
                </div>
                <!--end::Header-->

                <!--begin::Content-->
                <router-view />
                <!--end::Content-->

                <!--begin::Footer-->
                <div class="footer py-4 d-flex flex-lg-column" id="kt_footer">
                    <!--begin::Container-->
                    <div class="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
                        <!--begin::Copyright-->
                        <div class="text-dark order-2 order-md-1">
                            <span class="text-muted fw-bold me-1">2022 ©</span>
                            <a href="https://www.emediaplace.com" target="_blank" class="text-gray-800 text-hover-primary">eMediaPlace</a>
                        </div>
                        <!--end::Copyright-->
                        <!--begin::Menu-->
                        <ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                            <li class="menu-item">
                                <a href="/" target="_blank" class="menu-link px-2">{{ $t('about') }}</a>
                            </li>
                            <li class="menu-item">
                                <a href="/" target="_blank" class="menu-link px-2">{{ $t('support') }}</a>
                            </li>
                        </ul>
                        <!--end::Menu-->
                    </div>
                    <!--end::Container-->
                </div>
                <!--end::Footer-->
            </div>
            <!--end::Wrapper-->
        </div>
        <!--end::Page-->
    </div>
    <!--end::Root-->
</template>

<script>
import Aside from "./aside/Aside";
import {useStore} from "vuex";
import {computed, ref, nextTick, onMounted, watch} from "vue";
import i18nService from "../../services/i18n.service";
import ApiService from "../../services/api.service";
import currencyService from "../../services/currency.service";

export default {
    name: "AdminLayout",
    components: {Aside},
    setup(){
        const store = useStore()
        const models = ref([])
        const per_page = ref(null)
        const search = ref(null)
        const page = ref(1)
        const meta = ref(null)

        const currentUser = computed(() => store.getters.currentUser)

        const initial = computed(() => {
            if(currentUser.value){
                if(currentUser.value.account){
                    return currentUser.value.account.name ? currentUser.value.account.name[0] : currentUser.value.username[0];
                }
                return currentUser.value.username[0];
            }
            return '';
        })

        watch(() => currentUser.value, () => {
            nextTick(function(){ KTMenu.createInstances(); });
        })

        const languages = i18nService.languages
        const currentLanguage = languages.find(val => {
            return val.lang === i18nService.getActiveLanguage();
        })

        const selectLanguage = (value) => {
            i18nService.setActiveLanguage(value.lang);
            window.location.reload();
        }

        const locale = currentLanguage ? currentLanguage.lang : i18nService.defaultLanguage
        ApiService.setLanguage(locale)
        const currentCurrency = computed(() => {
            let current = currencyService.getActiveCurrency()
            let value = currencies.value.find((item) => item.code === current)
            if(!value){
                value = currencies.value.find((item) => item.is_default)
            }
            return value
        })
        const currencies = ref([])
        const loadCurrencies = () => {
            ApiService.get('/currencies', {params:{'per-page':-1}})
                .then(({data}) => {
                    if(data.success) {
                        currencies.value = data.data
                        currencyService.setCurrencies(currencies.value)
                    }
                })
        }
        onMounted(loadCurrencies)
        const selectCurrency = (value) => {
            currencyService.setActiveCurrency(value.code);
            window.location.reload();
        }

        const currency = currentCurrency.value ? currentCurrency.value.code : currencyService.defaultCurrency
        ApiService.setCurrency(currency)

         const params = computed(() => {
                let data = {}
                if(per_page.value){
                    data['per-page'] = per_page.value
                }
                if(search.value){
                    data['s'] = search.value
                }
                return data
            })

            watch(() => params.value, () => {
                page.value = 1
                loadModels()
            })

        const loadModels = () => {
                const query = params.value
                query.page = page.value
                ApiService.get('/currencies', {params: query}, true)
                    .then(({data}) => {
                        if(data.success) {
                            models.value = data.data
                            meta.value = data.meta
                        }
                        nextTick(function(){ KTMenu.createInstances(); });
                    })
            }
            onMounted(loadModels)

        return {
            models,
            page,
            loadModels,
            currentUser,
            initial,
            languages,
            currentLanguage,
            currentCurrency,
            currencies,
            selectLanguage,
            selectCurrency,
        }
    }
};
</script>
