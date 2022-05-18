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
                <!--begin::Layout-->
                <div class="d-flex flex-column flex-xl-row">
                    <!--begin::Sidebar-->
                    <div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
                        <!--begin::Card-->
                        <div class="card mb-5 mb-xl-8">
                            <!--begin::Card body-->
                            <div class="card-body pt-15">
                                <!--begin::Summary-->
                                <div class="d-flex flex-center flex-column mb-5">
                                    <!--begin::Name-->
                                    <a href="#" class="fs-3 text-gray-800 text-hover-primary fw-bolder mb-1">{{ model.name }}</a>
                                    <!--end::Name-->
                                    <!--begin::Position-->
                                    <div class="fs-5 fw-bold text-muted mb-6">{{ $t(model.role) }}</div>
                                    <!--end::Position-->
                                    <!--begin::Info-->
                                    <div class="d-flex flex-wrap flex-center">
                                        <!--begin::Stats-->
                                        <div class="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
                                            <div class="fs-4 fw-bolder text-gray-700">
                                                <span class="w-75px">{{ model.packages_count }}</span>
                                            </div>
                                            <div class="fw-bold text-muted">Bouquets</div>
                                        </div>
                                        <!--end::Stats-->
                                        <!--begin::Stats-->
                                        <div class="border border-gray-300 border-dashed rounded py-3 px-3 mx-4 mb-3">
                                            <div class="fs-4 fw-bolder text-gray-700">
                                                <span class="w-50px">{{ model.versions_count }}</span>
                                            </div>
                                            <div class="fw-bold text-muted">Titres</div>
                                        </div>
                                        <!--end::Stats-->
                                        <!--begin::Stats-->
                                        <div class="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
                                            <div class="fs-4 fw-bolder text-gray-700">
                                                <span class="w-50px">{{ model.issues_count }}</span>
                                            </div>
                                            <div class="fw-bold text-muted">Numéros</div>
                                        </div>
                                        <!--end::Stats-->
                                    </div>
                                    <!--end::Info-->
                                </div>
                                <!--end::Summary-->
                            </div>
                            <!--end::Card body-->
                        </div>
                        <!--end::Card-->
                        <!--begin::Connected Accounts-->
                        <div class="card mb-5 mb-xl-8">
                            <!--begin::Card header-->
                            <div class="card-header border-0">
                                <div class="card-title">
                                    <h3 class="fw-bolder m-0">Accès</h3>
                                </div>
                            </div>
                            <!--end::Card header-->
                            <!--begin::Card body-->
                            <div class="card-body pt-2">
                                <!--begin::Items-->
                                <div v-for="user in model.users" class="py-2">
                                    <!--begin::Item-->
                                    <div class="d-flex flex-stack">
                                        <div class="d-flex">
                                            <div class="d-flex flex-column">
                                                <a href="#" class="fs-5 text-dark text-hover-primary fw-bolder">{{ user.username }}</a>
                                                <div class="fs-6 fw-bold text-muted">{{ $t(user.type) }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::Item-->
                                </div>
                                <!--end::Items-->
                            </div>
                            <!--end::Card body-->
                        </div>
                        <!--end::Connected Accounts-->
                    </div>
                    <!--end::Sidebar-->

                    <!--begin::Content-->
                    <div class="flex-lg-row-fluid ms-lg-15">
                        <!--begin:::Tabs-->
                        <ul class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8">
                            <!--begin:::Tab item-->
                            <li class="nav-item">
                                <router-link :to="{name: 'admin.administrators.view'}" class="nav-link text-active-primary pb-4" :class="{'active': isActive('admin.administrators.view')}">{{ $t('packages') }}</router-link>
                            </li>
                            <!--end:::Tab item-->
                            <!--begin:::Tab item-->
                            <li class="nav-item">
                                <router-link :to="{name: 'admin.administrators.versions'}" class="nav-link text-active-primary pb-4" :class="{'active': isActive('admin.administrators.versions')}">{{ $t('versions') }}</router-link>
                            </li>
                            <!--end:::Tab item-->
                        </ul>
                        <!--end:::Tabs-->
                        <!--begin:::Tab content-->
                        <div class="tab-content">
                            <router-view />
                        </div>
                        <!--end:::Tab content-->
                    </div>
                    <!--end::Content-->
                </div>
                <!--end::Layout-->
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
import ApiService from "../../../../services/api.service";
import {useRoute} from "vue-router";

export default {
    name: 'CustomerView',
    components: {ToolBar},
    setup(){
        const store = useStore()
        const route = useRoute()

        onMounted(() => {
            store.dispatch(SET_BREADCRUMB, [
                {title: 'dashboard', route: 'admin.dashboard'},
                {title: 'administrators', route: 'admin.administrators'},
                {title: 'administrator'},
            ])
        })

        const model = ref(null)
        const loadModel = () => {
            ApiService.get('/administrators/' + route.params.id)
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
