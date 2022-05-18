<template>
    <!--begin::Content-->
    <div v-if="model" class="content d-flex flex-column flex-column-fluid" id="kt_content">

        <!--begin::Toolbar-->
        <ToolBar>
        </ToolBar>
        <!--end::Toolbar-->
        <!--begin::Post-->
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div  id="kt_content_container" class="container-fluid">

                <!--begin::Navbar-->
                <div class="card mb-6 mb-xl-9">
                    <div class="card-body pt-9 pb-0">
                        <!--begin::Details-->
                        <div class="d-flex flex-wrap flex-sm-nowrap mb-6">
                            <!--begin::Image-->
                            <div class="d-flex flex-center flex-shrink-0 w-150px me-7 mb-4">
                                <img class="w-100" :src="$filters.vignette('version', model.mid)" alt="image">
                            </div>
                            <!--end::Image-->
                            <!--begin::Wrapper-->
                            <div class="flex-grow-1">
                                <!--begin::Head-->
                                <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                    <!--begin::Details-->
                                    <div class="d-flex flex-column">
                                        <!--begin::Status-->
                                        <div class="d-flex align-items-center mb-1">
                                            <a class="text-gray-800 text-hover-primary fs-2 fw-bolder me-3">{{ model.name }}</a>
                                        </div>
                                        <!--end::Status-->
                                        <!--begin::Title-->
                                        <div v-if="model.title" class="text-gray-400">
                                            {{ $t('title') }}:
                                            <router-link :to="{name:'admin.titles.view', params:{id: model.title.id}}">{{ model.title.name }}</router-link>
                                        </div>
                                        <!--end::Title-->
                                    </div>
                                    <!--end::Details-->
                                </div>
                                <!--end::Head-->
                                <!--begin::Info-->
                                <div class="d-flex flex-wrap justify-content-start">
                                    <!--begin::Stats-->
                                    <div class="d-flex flex-wrap">
                                        <!--begin::Stat-->
                                        <div v-if="model.last_issue" class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <!--begin::Number-->
                                            <div class="d-flex align-items-center">
                                                <div class="fs-4 fw-bolder">{{ model.last_issue.date }}</div>
                                            </div>
                                            <!--end::Number-->
                                            <!--begin::Label-->
                                            <div class="fw-bold fs-6 text-gray-400">{{ $t('last_issue') }}</div>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::Stat-->
                                        <!--begin::Stat-->
                                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <!--begin::Number-->
                                            <div class="d-flex align-items-center">
                                                <div class="fs-4 fw-bolder">{{ model.external_id }}</div>
                                            </div>
                                            <!--end::Number-->
                                            <!--begin::Label-->
                                            <div class="fw-bold fs-6 text-gray-400">{{ $t('external_id') }}</div>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::Stat-->
                                        <!--begin::Stat-->
                                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <!--begin::Number-->
                                            <div class="d-flex align-items-center">
                                                <div class="fs-4 fw-bolder">{{ model.issues_count }}</div>
                                            </div>
                                            <!--end::Number-->
                                            <!--begin::Label-->
                                            <div class="fw-bold fs-6 text-gray-400">{{ $t('issues_count') }}</div>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::Stat-->
                                    </div>
                                    <!--end::Stats-->
                                </div>
                                <!--end::Info-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Details-->
                        <div class="separator"></div>
                        <!--begin::Nav-->
                        <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
                            <li
                                v-for="currency in currencies"
                                class="nav-item"
                            >
                                <router-link v-if="currency.is_default" :to="{name:'admin.versions.prices'}" :class="{'active': isActive('admin.versions.prices')}" class="nav-link text-active-primary py-5 me-6">{{ currency.code + " (" + $t('default') + ")" }}</router-link>
                                <router-link v-else :to="{name:'admin.versions.prices.currency', params:{'currency':currency.id}}" :class="{'active': isActive('admin.versions.prices.currency', currency)}" class="nav-link text-active-primary py-5 me-6">{{ currency.code }}</router-link>
                            </li>
                        </ul>
                        <!--end::Nav-->
                    </div>
                </div>
                <!--end::Navbar-->

                <router-view />

            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->

    </div>
    <!--end::Content-->
</template>

<script>
import {useStore} from "vuex";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {SET_BREADCRUMB} from "../../../../../services/store/breadcrumbs.module";
import ApiService from "../../../../../services/api.service";
import ToolBar from "../../../../../layouts/admin/content/ToolBar";

export default {
    name: 'VersionPrices',
    components: {ToolBar},
    setup(){
        const store = useStore()
        const route = useRoute()

        onMounted(() => {
            store.dispatch(SET_BREADCRUMB, [
                {title: 'dashboard', route: 'admin.dashboard'},
                {title: 'versions', route: 'admin.versions'},
                {title: 'prices'},
            ])
        })

        const model = ref(null)
        const loadModel = () => {
            ApiService.get('/versions/' + route.params.id)
                .then(({data}) => {
                    if(data.success) {
                        model.value = data.data
                    }
                })
        }
        onMounted(loadModel)

        const currencies = ref([])
        const loadCurrencies = () => {
            ApiService.get('/currencies')
                .then(({data}) => {
                    if(data.success) {
                        currencies.value = data.data
                    }
                })
        }
        onMounted(loadCurrencies)

        const isActive = (name, currency) => {
            if(currency!==undefined){
                return (route.name === name) && (parseInt(route.params.currency + '') === currency.id);
            }
            return route.name === name;
        }

        return {
            model,
            currencies,
            loadModel,
            isActive,
        }
    }
}



</script>
