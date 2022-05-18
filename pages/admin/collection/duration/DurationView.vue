<template>
    <!--begin::Content-->
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">

        <!--begin::Toolbar-->
        <ToolBar>
        </ToolBar>
        <!--end::Toolbar-->

        <!--begin::Post-->
        <div v-if="model" class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div id="kt_content_container" class="container-fluid">
                <!--begin::Navbar-->
                <div class="card mb-6 mb-xl-9">
                    <div class="card-body pt-9 pb-0">
                        <!--begin::Details-->
                        <div class="d-flex flex-wrap flex-sm-nowrap mb-6">
                            <!--begin::Wrapper-->
                            <div class="flex-grow-1">
                                <!--begin::Head-->
                                <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                    <!--begin::Details-->
                                    <div class="d-flex flex-column">
                                        <!--begin::Name-->
                                        <div v-if="model.name" class="d-flex align-items-center mb-1">
                                            <router-link :to="{name:'admin.durations.view'}" class="text-gray-800 text-hover-primary fs-2 fw-bolder me-3">{{ model.name }}</router-link>
                                        </div>
                                        <!--end::Name-->
                                    </div>
                                    <!--end::Details-->
                                </div>
                                <!--end::Head-->
                                <!--begin::Info-->
                                <div class="d-flex flex-wrap justify-content-start">
                                    <!--begin::Stats-->
                                    <div class="d-flex flex-wrap">
                                        <!--begin::Delay-->
                                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <!--begin::Number-->
                                            <div class="d-flex align-items-center">
                                                <div class="fs-4 fw-bolder">{{ model.delay }}</div>
                                            </div>
                                            <!--end::Number-->
                                            <!--begin::Label-->
                                            <div class="fw-bold fs-6 text-gray-400">{{ $t('delay') }}</div>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::Delay-->
                                        <!--begin::Unit-->
                                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <!--begin::Number-->
                                            <div class="d-flex align-items-center">
                                                <div class="fs-4 fw-bolder">{{ model.unit }}</div>
                                            </div>
                                            <!--end::Number-->
                                            <!--begin::Label-->
                                            <div class="fw-bold fs-6 text-gray-400">{{ $t('unit') }}</div>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::Unit-->
                                        <!--begin::Ext_Id-->
                                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <!--begin::Number-->
                                            <div  class="d-flex align-items-center">
                                                <div class="fs-4 fw-bolder">{{ model.external_id }}</div>
                                            </div>
                                            <!--end::Number-->
                                            <!--begin::Label-->
                                            <div class="fw-bold fs-6 text-gray-400">{{ $t('external_id') }}</div>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::Ext_Id-->
                                    </div>
                                    <!--end::Stats-->
                                </div>
                                <!--end::Info-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Details-->
                        <div class="separator"></div>
                        <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
                            <!--begin::Nav item-->
                            <li class="nav-item">
                                <router-link :to="{name:'admin.durations.view'}" :class="{'active': isActive('admin.durations.view')}" class="nav-link text-active-primary py-5 me-6">{{ $t('versions') }}</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name:'admin.durations.packages'}" :class="{'active': isActive('admin.durations.packages')}" class="nav-link text-active-primary py-5 me-6">{{ $t('packages') }}</router-link>
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
    import ApiService from "../../../../services/api.service";
    import {useRoute} from "vue-router";


    export default {
        name: 'DurationView',
        components: {ToolBar},
        setup(){
            const store = useStore()
            const route = useRoute()

            onMounted(() => {
                store.dispatch(SET_BREADCRUMB, [
                    {title: 'dashboard', route: 'admin.dashboard'},
                    {title: 'durations', route: 'admin.durations'},
                    {title: 'duration'},
                ])
            })

            const model = ref(null)
            const loadModel = () => {
                ApiService.get('/durations/' + route.params.id)
                    .then(({data}) => {
                        if(data.success) {
                            model.value = data.data
                        }
                    }).catch((err) => {
                    console.log(err)
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
