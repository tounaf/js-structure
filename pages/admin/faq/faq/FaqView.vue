<template>
    <!--begin::Content-->

    <div v-if="model" class="content d-flex flex-column flex-column-fluid" id="kt_content">

        <!--begin::Toolbar-->
        <ToolBar>
            <!--begin::Buttons-->
            <router-link :to="{name: 'admin.faqs.edit'}" class="btn btn-sm btn-flex btn-primary fw-bolder me-2">{{ $t('edit') }}</router-link>
            <!--end::Buttons-->
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
                                            <a class="text-gray-800 text-hover-primary fs-2 fw-bolder me-3">{{ model.question }}</a>
                                        </div>
                                        <!--end::Name-->
                                    </div>
                                    <!--end::Details-->
                                </div>
                                <!--end::Head-->
                                <!--begin::Info-->
                                <div class="d-flex flex-wrap justify-content-start">
                                    <!--begin::Content-->
                                    <div class="border border-gray-300 border-dashed rounded p-3 w-100 img-mw-100">
                                        <div v-html="model.answer"></div>
                                    </div>
                                    <!--end::Content-->
                                </div>
                                <!--end::Info-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Details-->
                        <div class="separator"></div>
                        <!--begin::Nav-->
                        <!--end::Nav-->
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
                {title: 'faqs', route: 'admin.faqs'},
                {title: 'Faq'},
            ])
        })

        const model = ref(null)
        const loadModel = () => {
            ApiService.get('/faqs/' + route.params.id)
                .then(({data}) => {
                    if(data.success) {
                        model.value = data.data
                    }
                })
        }
        onMounted(loadModel)

        return {
            model,
            loadModel
        }
    }
}



</script>
