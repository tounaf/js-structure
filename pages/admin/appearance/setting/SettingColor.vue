<template>
    <!--begin:::Tab pane R.Sociaux-->
    <div v-if="model" class="tab-pane fade show active">
        <!--begin::Products-->
        <div class="card card-flush">
            <!--begin::Card header-->
            <div class="card-header align-items-center py-5 gap-2 gap-md-5">
                <!--begin::Card title-->
                <div class="card-title">
                    <!--begin::Title-->
                    <h2>{{ $t(("color"))}}</h2>
                    <!--end::Title-->
                </div>
                <!--end::Card title-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div class="card-body pt-0">
                <!--begin::Form-->
                <form @submit.prevent="submit" id="form" class="form fv-plugins-bootstrap5 fv-plugins-framework">
                    <!--begin::Input group-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('light_gray') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['light-gray']" type="color" class="form-control form-control-solid" name="light-gray">
                            <!--end::Input-->
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('color_primary1') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['color-primary1']" type="color" class="form-control form-control-solid" name="color-primary1">
                            <!--end::Input-->
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('color_primary2') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['color-primary2']" type="color" class="form-control form-control-solid" name="color-primary2">
                            <!--end::Input-->
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('color_primary3') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['color-primary3']" type="color" class="form-control form-control-solid" name="color-primary3">
                            <!--end::Input-->
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('color_secondary1') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['color-secondary1']" type="color" class="form-control form-control-solid" name="color-secondary1">
                            <!--end::Input-->
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('color_secondary2') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['color-secondary2']" type="color" class="form-control form-control-solid" name="color-secondary2">
                            <!--end::Input-->
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('color_secondary3') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['color-secondary3']" type="color" class="form-control form-control-solid" name="color-secondary3">
                            <!--end::Input-->
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('txt_color_default') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['txt-color-default']" type="color" class="form-control form-control-solid" name="txt-color-default">
                            <!--end::Input-->
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('txt_color_1') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['txt-color-1']" type="color" class="form-control form-control-solid" name="txt-color-1">
                            <!--end::Input-->
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('txt_color_2') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['txt-color-2']" type="color" class="form-control form-control-solid" name="txt-color-2">
                            <!--end::Input-->
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('gray_dark') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['gray-dark']" type="color" class="form-control form-control-solid" name="gray-dark">
                            <!--end::Input-->
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('gray_light') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['gray-light']" type="color" class="form-control form-control-solid" name="gray-light">
                            <!--end::Input-->
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                    </div>
                    <!--end::Input group-->

                    <!--begin::Input group-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('white') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['white']" type="color" class="form-control form-control-solid" name="white">
                            <!--end::Input-->
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                    </div>
                    <!--end::Input group-->

                    <!--begin::Action buttons-->
                    <div class="row">
                        <div class="col-md-9 offset-md-3">
                            <!--begin::Separator-->
                            <div class="separator mb-6"></div>
                            <!--end::Separator-->
                            <div class="d-flex justify-content-end">
                                <!--begin::Button-->
                                <button type="reset" class="btn btn-light me-3">{{  $t('cancel') }}</button>
                                <!--end::Button-->
                                <!--begin::Button-->
                                <button type="submit" class="btn btn-primary">{{  $t('save') }}</button>
                                <!--end::Button-->
                            </div>
                        </div>
                    </div>
                    <!--end::Action buttons-->
                </form>
                <!--end::Form-->
            </div>
            <!--end::Card body-->
        </div>
        <!--end::Products-->
    </div>
    <!--end:::Tab pane R.Sociaux-->
</template>
<script>
    import ToolBar from "../../../../layouts/admin/content/ToolBar";
    import {useStore} from "vuex";
    import {onMounted, ref} from "vue";
    import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module";
    import ApiService from "../../../../services/api.service";
    import {useI18n} from "vue-i18n";

    export default {
        name: "SettingColor",
        components: {ToolBar},
        setup(){
            const store = useStore()
            const {t} = useI18n()

            onMounted(() => {
                store.dispatch(SET_BREADCRUMB, [
                    {title: 'dashboard', route: 'admin.dashboard'},
                    {title: 'settings'},
                ])
            })

            const model = ref(null)
            const initialModel = {
                "light-gray": null,
                "color-primary1": null,
                "color-primary2": null,
                "color-primary3": null,
                "color-secondary1": null,
                "color-secondary2": null,
                "color-secondary3": null,
                "txt-color-default": null,
                "txt-color-1": null,
                "txt-color-2": null,
                "gray-dark": null,
                "gray-light": null,
                "white": null,
            }

            const getData = () => {
                return model.value;
            }

            const submit = () => {
                const data = getData()
                ApiService.post('/settings/color', data)
                    .then((response) => {
                        if(response.data.success){
                            initModel(response.data.data)
                            toastr.success(t('messages.settings.updated'))
                        }else{
                            toastr.error(t('error'))
                        }
                    })
                    .catch(() => {
                        toastr.error(t('error'))
                    })
            }

            const loadModel = () => {
                ApiService.get('/settings/color')
                    .then((response) => {
                        if(response.data.success){
                            initModel(response.data.data)
                        }
                    })
            }
            onMounted(loadModel)

            const initModel = (value) => {
                if(!value){
                    model.value = Object.assign({}, initialModel);
                }else{
                    model.value = value;
                }
            }

            return {
                model,
                submit,
            }
        }
    }
</script>
