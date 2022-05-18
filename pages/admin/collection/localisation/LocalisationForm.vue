<template>
    <!--begin::Content-->
    <div v-if="model" class="content d-flex flex-column flex-column-fluid" id="kt_content">

        <ToolBar>
            <!--begin::Buttons-->
            <router-link :to="{name: 'admin.localisations'}" class="btn btn-sm btn-flex btn-light fw-bolder me-2">{{ $t('back') }}</router-link>
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
                                <label class="col-xl-2 col-lg-4 col-form-label fw-bold fs-6">{{ $t('status') }}</label>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-xl-10 col-lg-8 fv-row">
                                    <InputStatusSelect v-model="model.status" :all="false" />
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Input group-->

                            <!--begin::Input group-->
                            <div class="row mb-6">
                                <!--begin::Label-->
                                <label class="col-xl-2 col-lg-4 col-form-label fw-bold fs-6">{{ $t('slug') }}</label>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-xl-10 col-lg-8 fv-row">
                                    <input v-model="model.slug" type="text" class="form-control"/>
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Input group-->

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

                            <!--begin::Input group-->
                            <div class="row mb-6">
                                <!--begin::Label-->
                                <label class="col-xl-2 col-lg-4 col-form-label fw-bold fs-6">{{ $t('description') }}</label>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-xl-10 col-lg-8 fv-row">
                                    <ckeditor v-model="model.description" v-if="editor.editor" :editor="editor.editor" :config="editor.editorConfig" />
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Input group-->

                            <!--begin::Input group-->
                            <div class="row mb-6">
                                <!--begin::Label-->
                                <label class="col-xl-2 col-lg-4 col-form-label required fw-bold fs-6">{{ $t('order') }}</label>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-xl-10 col-lg-8 fv-row">
                                    <InputNumber v-model="model.order" />
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Input group-->

                            <!--begin::Input group-->
                            <div class="row mb-6">
                                <!--begin::Label-->
                                <label class="col-xl-2 col-lg-4 col-form-label fw-bold fs-6">{{ $t('active') }}</label>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-xl-10 col-lg-8 fv-row pt-2">
                                    <!--begin::Switch-->
                                    <label class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" v-model="model.is_active" />
                                    </label>
                                    <!--end::Switch-->
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Input group-->

                            <!--begin::Input group-->
                            <div class="row mb-6">
                                <!--begin::Label-->
                                <label class="col-xl-2 col-lg-4 col-form-label fw-bold fs-6">{{ $t('countries') }}</label>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-xl-10 col-lg-8 fv-row pt-2">
                                    <!--begin::Countries-->
                                    <div class="w-100 mb-5">
                                        <!--begin::Switch-->
                                        <div
                                            v-for="country in model.countries"
                                            class="form-check form-switch form-switch-sm form-check-custom form-check-solid mb-2">
                                            <input class="form-check-input" :id="`country-${country.id}`" type="checkbox" v-model="model.countries" :value="country" />
                                            <label class="form-check-label" :for="`country-${country.id}`">
                                                {{ country.nice_name }}
                                            </label>
                                        </div>
                                        <!--end::Switch-->
                                    </div>
                                    <!--end::Countries-->
                                    <div class="w-100">
                                        <button type="button" @click="selectCountry" class="btn btn-sm btn-primary">{{ $t('add') }}</button>
                                    </div>
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Input group-->

                            <!--begin::Actions-->
                            <div class="card-footer d-flex justify-content-end">
                                <router-link :to="{name: 'admin.localisations'}" class="btn btn-sm btn-flex btn-light fw-bolder me-2">{{ $t('back') }}</router-link>
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

        <CountryModal
            v-if="showModal"
            :excludes="model.countries"
            class="show d-block"
            @select="addCountry"
            @close="closeCountry"
        />

    </div>
    <!--end::Content-->
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ApiService from "../../../../services/api.service";
import {useRoute} from "vue-router";
import {onMounted, ref, watch} from "vue";
import ToolBar from "../../../../layouts/admin/content/ToolBar";
import {useI18n} from "vue-i18n";
import CountryModal from "../../tools/country/CountryModal";

export default {
    name: 'LocalisationFrom',
    components: {CountryModal, ToolBar},
    setup(){
        const route = useRoute()
        const {t} = useI18n()

        const getData = () => {
            const data = Object.assign({}, model.value);
            data.countries = []
            if(model.value.countries && model.value.countries.length){
                model.value.countries.forEach((item) => {
                    data.countries.push(item.id)
                })
            }
            return data
        }

        const submit = () => {
            id && id.value ? update() : create();
        }

        const create = () => {
            const data = getData()
            ApiService.post('/localisations', data)
                .then((response) => {
                    if(response.data.success){
                        initModel()
                        toastr.success(t('messages.localisations.created'))
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
            ApiService.put('/localisations/' + id.value, data)
                .then((response) => {
                    if(response.data.success){
                        initModel(response.data.data)
                        toastr.success(t('messages.localisations.updated'))
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
            ApiService.get('/localisations/' + value)
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
            status: 'publish',
            slug: null,
            name: null,
            description: '',
            order: 0,
            is_active: true,
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

        const showModal = ref(false)
        const selectCountry = () => {
            showModal.value = true
        }
        const closeCountry = () => {
            showModal.value = false
        }
        const addCountry = (countries) => {
            console.log(countries)
            showModal.value = false
            if(model.value){
                if(!model.value.countries){
                    model.value.countries = []
                }
                countries.forEach((country) => {
                    model.value.countries.push(country)
                })
            }
        }

        return {
            model,
            showModal,
            submit,
            selectCountry,
            closeCountry,
            addCountry,
            editor:{
                editor: ClassicEditor,
                editorConfig: {
                    // The configuration of the editor.
                }
            }
        }
    }
}
</script>
