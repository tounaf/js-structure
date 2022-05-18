<template>
    <!--begin::Content-->
    <div v-if="model" class="content d-flex flex-column flex-column-fluid" id="kt_content">

        <ToolBar>
            <!--begin::Buttons-->
            <router-link :to="{name: 'admin.customers'}" class="btn btn-sm btn-light btn-active-light-primary me-2">{{ $t('back') }}</router-link>
            <button form="form" type="submit" class="btn btn-sm btn-primary">{{ $t('save') }}</button>
            <!--end::Buttons-->
        </ToolBar>

        <!--begin::Post-->
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div id="kt_content_container" class="container-fluid">

                <div class="card mb-5 mb-xl-10">
                    <!--begin::Card header-->
                    <div class="card-header border-0 cursor-pointer">
                        <!--begin::Card title-->
                        <div class="card-title m-0">
                            <h3 class="fw-bolder m-0">{{ $t('customers') }}</h3>
                            <slot name="title"></slot>
                        </div>
                        <!--end::Card title-->
                    </div>
                    <!--begin::Card header-->

                    <!--begin::Form-->
                    <form @submit.prevent="submit" id="form" method="post" class="form fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate">
                        <!--begin::Card body-->
                        <div class="card-body border-top p-9">
                            <!--begin::Input-->
                            <div class="row mb-5">
                                <label class="col-lg-4 col-form-label fw-bold fs-6">{{ $t('first_name') }}</label>
                                <div class="col-lg-8 fv-plugins-icon-container">
                                    <input v-if="model" v-model="model.first_name" type="text" name="first_name" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0">
                                </div>
                            </div>
                            <!--end::Input-->
                            <!--begin::Input-->
                            <div class="row mb-5">
                                <label class="col-lg-4 col-form-label fw-bold fs-6">{{ $t('last_name') }}</label>
                                <div class="col-lg-8 fv-plugins-icon-container">
                                    <input v-if="model" v-model="model.last_name" type="text" name="last_name" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0">
                                </div>
                            </div>
                            <!--end::Input-->
                        </div>
                        <!--end::Card body-->

                        <!--begin::Actions-->
                        <div class="card-footer d-flex justify-content-end py-6 px-9">
                            <router-link :to="{name: 'admin.customers'}" class="btn btn-sm btn-light btn-active-light-primary me-2">{{ $t('back') }}</router-link>
                            <button form="form" type="submit" class="btn btn-sm btn-primary">{{ $t('save') }}</button>
                        </div>
                        <!--end::Actions-->

                    </form>
                    <!--end::Form-->
                </div>

            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->

    </div>
    <!--end::Content-->
</template>

<script>
import ApiService from "../../../../services/api.service";
import {onMounted, ref, watch} from "vue";
import useVuelidate from "@vuelidate/core";
import {useRoute} from "vue-router";
import ToolBar from "../../../../layouts/admin/content/ToolBar";
import {useStore} from "vuex";
import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module";

export default {
    name: 'CustomerEdit',
    components: {ToolBar},
    setup(){
        const route = useRoute()
        const v$ = useVuelidate()
        const store = useStore()

        onMounted(() => {
            store.dispatch(SET_BREADCRUMB, [
                {title: 'dashboard', route: 'admin.dashboard'},
                {title: 'customers', route: 'admin.customers'},
                {title: 'customer'},
            ])
        })

        const getData = () => {
            return model.value;
        }

        const submit = () => {
            if(v$.$touch && v$.$error) return;
            update();
        }

        const update = () => {
            const data = getData()
            ApiService.put('/customers/' + route.params.id, data)
            .then((response) => {
                    if(response.data.success){
                        toastr.success("Le compte est bien modifié.")
                    }else{
                        toastr.error("Une erreur s'est produite.")
                    }
                })
        }

        const loadModel = (value) => {
            if(!value){ return; }
            ApiService.get('/customers/' + value)
                .then((response) => {
                    if(response.data.success){
                        initModel(response.data.data)
                    }
                })
        }

        const initModel = (value) => {
            if(!value){
                model.value = Object.assign({}, initialModel);
            }else{
                model.value = value;
            }
        }

        const id = ref(route.params.id)
        const initialModel = {
            first_name: '',
            last_name: '',
        }
        const model = ref(null)
        const init = () => {
            console.log("init")
            if(id.value){
                loadModel(id.value)
            }else{
                initModel()
            }
        }
        watch(() => id.value, () => { init() })
        onMounted(init)

        return {
            v$,
            model,
            submit,
        }
    }
}
</script>
