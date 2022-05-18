<template>
    <!--begin::Content-->

    <div v-if="model" class="content d-flex flex-column flex-column-fluid" id="kt_content">

        <!--begin::Toolbar-->
        <ToolBar>
            <!--begin::Buttons-->
            <router-link :to="{name: 'admin.translations.edit'}" class="btn btn-sm btn-flex btn-primary fw-bolder me-2">{{ $t('edit') }}</router-link>
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
                                            <a class="text-gray-800 text-hover-primary fs-2 fw-bolder me-3">{{ model.key }}</a>
                                        </div>
                                        <!--end::Name-->
                                    </div>
                                    <!--end::Details-->
                                </div>
                                <!--end::Head-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Details-->
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
    name: 'TranslationView',
    components: {ToolBar},
    setup(){
        const store = useStore()
        const route = useRoute()

        onMounted(() => {
            store.dispatch(SET_BREADCRUMB, [
                {title: 'dashboard', route: 'admin.dashboard'},
                {title: 'translations', route: 'admin.translations'},
                {title: 'translation'},
            ])
        })

        const model = ref(null)
        const loadModel = () => {
            ApiService.get('/translations/' + route.params.id)
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
