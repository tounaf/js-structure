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
                            <!--begin::Wrapper-->
                            <div class="flex-grow-1">
                                <!--begin::Head-->
                                <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                    <!--begin::Details-->
                                    <div class="d-flex flex-column">
                                        <!--begin::Name-->
                                        <div class="d-flex align-items-center mb-1">
                                            <a class="text-gray-800 text-hover-primary fs-2 fw-bolder me-3">{{ model.name }}</a>
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
                                        <!--begin::Stat-->
                                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <!--begin::Number-->
                                            <div class="d-flex align-items-center">
                                                <div class="fs-4 fw-bolder">{{ model.versions_count }}</div>
                                            </div>
                                            <!--end::Number-->
                                            <!--begin::Label-->
                                            <div class="fw-bold fs-6 text-gray-400">{{ $t('versions_count') }}</div>
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
                    </div>
                </div>
                <!--end::Navbar-->

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
    name: 'VersionView',
    components: {ToolBar},
    setup(){
        const store = useStore()
        const route = useRoute()

        onMounted(() => {
            store.dispatch(SET_BREADCRUMB, [
                {title: 'dashboard', route: 'admin.dashboard'},
                {title: 'languages', route: 'admin.languages'},
                {title: 'Language'},
            ])
        })

        const model = ref(null)
        const loadModel = () => {
            ApiService.get('/languages/' + route.params.id)
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
