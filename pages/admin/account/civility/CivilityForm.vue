<template>
    <!--begin::Content-->
    <div v-if="model" class="content d-flex flex-column flex-column-fluid" id="kt_content">

        <ToolBar>
            <!--begin::Buttons-->
            <router-link :to="{name: 'admin.civilities'}" class="btn btn-sm btn-flex btn-light fw-bolder me-2">{{ $t('back') }}</router-link>
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
                            <slot name="title"></slot>
                        </div>
                        <!--end::Card title-->
                    </div>
                    <!--begin::Card header-->

                    <!--begin::Form-->
                    <form @submit.prevent="submit" id="form" method="post" class="form fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate">
                        <!--begin::Card body-->
                        <div class="card-body border-top p-9">

                            <!--begin::Input group-->
                            <div class="row mb-6">
                                <!--begin::Label-->
                                <label class="col-xl-2 col-lg-4 col-form-label fw-bold fs-6">{{ $t('name') }}</label>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-xl-10 col-lg-8 fv-row">
                                    <input v-model="model.name" type="text" class="form-control"/>
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Input group-->

                            <!--begin::Actions-->
                            <div class="card-footer d-flex justify-content-end">
                                <router-link :to="{name: 'admin.civilities'}" class="btn btn-sm btn-flex btn-light fw-bolder me-2">{{ $t('back') }}</router-link>
                                <button form="form" type="submit" class="btn btn-sm btn-primary">{{ $t('save') }}</button>
                            </div>
                            <!--end::Actions-->
                        </div>
                        <!--end::Input group-->

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
import {useRoute} from "vue-router";
import {onMounted, ref, watch} from "vue";
import ToolBar from "../../../../layouts/admin/content/ToolBar";
import {useI18n} from "vue-i18n";

export default {
    name: 'CivilityFrom',
    components: {ToolBar},
    setup(){
        const route = useRoute()
        const {t} = useI18n()

        const getData = () => {
            return model.value;
        }

        const submit = () => {
            id && id.value ? update() : create();
        }

        const create = () => {
            const data = getData()
            ApiService.post('/civilities', data)
                .then((response) => {
                    if(response.data.success){
                        initModel()
                        toastr.success(t('messages.civilities.created'))
                    }else{
                        toastr.error(t('error'))
                    }
                })
                .catch(() => {
                    toastr.error(t('error'))
                })
        }

        const update = () => {
            const data = getData()
            ApiService.put('/civilities/' + id.value, data)
                .then((response) => {
                    if(response.data.success){
                        initModel(response.data.data)
                        toastr.success(t('messages.civilities.updated'))
                    }else{
                        toastr.error(t('error'))
                    }
                })
                .catch(() => {
                    toastr.error(t('error'))
                })

        }

        const loadModel = (value) => {
            if(!value){ return; }
            ApiService.get('/civilities/' + value)
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
            name: null,
        }
        const model = ref(null)
        const init = () => {
            if(id.value){
                loadModel(id.value)
            }else{
                initModel()
            }
        }
        watch(() => id.value, () => { init() })
        onMounted(init)

        return {
            model,
            submit,
        }
    }
}
</script>
