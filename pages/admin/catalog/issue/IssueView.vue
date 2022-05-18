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
            <div id="kt_content_container" class="container-fluid">
                <!--begin::Navbar-->
                <div class="card mb-6 mb-xl-9">
                    <div class="card-body pt-9 pb-0">
                        <!--begin::Details-->
                        <div class="d-flex flex-wrap flex-sm-nowrap mb-6">
                            <!--begin::Image-->
                            <div class="d-flex flex-center flex-shrink-0 w-150px me-7 mb-4">
                                <img class="w-100" :src="$filters.vignette('issue', model.mid)" alt="image">
                            </div>
                            <!--end::Image-->
                            <!--begin::Wrapper-->
                            <div class="flex-grow-1">
                                <!--begin::Head-->
                                <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                    <!--begin::Details-->
                                    <div class="d-flex flex-column">
                                        <!--begin::Status-->
                                        <div v-if="model.version" class="d-flex align-items-center mb-1">
                                            <router-link :to="{name:'admin.versions.view', params:{id: model.version.id}}" class="text-gray-800 text-hover-primary fs-2 fw-bolder me-3">{{ model.version.name }}</router-link>
                                            <span class="badge badge-light-success me-auto">{{ $t('issue') }}: {{ model.name }}</span>
                                        </div>
                                        <!--end::Status-->
                                    </div>
                                    <!--end::Details-->
                                </div>
                                <!--end::Head-->
                                <!--begin::Info-->
                                <div class="d-flex flex-wrap justify-content-start">
                                    <!--begin::Stats-->
                                    <div class="d-flex flex-wrap">
                                        <!--begin::Stat-->
                                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <!--begin::Number-->
                                            <div class="d-flex align-items-center">
                                                <div class="fs-4 fw-bolder">{{ model.date }}</div>
                                            </div>
                                            <!--end::Number-->
                                            <!--begin::Label-->
                                            <div class="fw-bold fs-6 text-gray-400">{{ $t('date') }}</div>
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
                                                <div class="fs-4 fw-bolder">{{ model.number_of_pages }}</div>
                                            </div>
                                            <!--end::Number-->
                                            <!--begin::Label-->
                                            <div class="fw-bold fs-6 text-gray-400">{{ $t('page') }}</div>
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
                            <!--begin::Nav item-->
                            <li class="nav-item">
                                <router-link :to="{name:'admin.issues.view'}" :class="{'active': isActive('admin.issues.view')}" class="nav-link text-active-primary py-5 me-6">{{ $t('tickets') }}</router-link>
                            </li>
                            <!--end::Nav item-->
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
import ToolBar from "../../../../layouts/admin/content/ToolBar";
import {useStore} from "vuex";
import {ref, onMounted} from "vue";
import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module";
import {useI18n} from "vue-i18n";
import ApiService from "../../../../services/api.service";
import {useRoute} from "vue-router";

export default {
    name: 'IssueView',
    components: {ToolBar},
    setup(){
        const store = useStore()
        const route = useRoute()

        onMounted(() => {
            store.dispatch(SET_BREADCRUMB, [
                {title: 'dashboard', route: 'admin.dashboard'},
                {title: 'issues', route: 'admin.issues'},
                {title: 'issue'},
            ])
        })

        const model = ref(null)
        const loadModel = () => {
            ApiService.get('/issues/' + route.params.id)
                .then(({data}) => {
                    if(data.success) {
                        model.value = data.data
                    }
                })
        }
        onMounted(loadModel)

        const isActive = (name) => {
            return route.name === name;
        }

        return {
            model,
            loadModel,
            isActive,
        }
    }
}
</script>
