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
                    <h2>{{ $t(("social_networks"))}}</h2>
                    <!--end::Title-->
                </div>
                <!--end::Card title-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div class="card-body pt-0">
                <!--begin::Form-->
                <form @submit.prevent="submit" id="form" class="form fv-plugins-bootstrap5 fv-plugins-framework">
                    <!--begin::Input group facebook-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('link_fb') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model.facebook" type="text" class="form-control form-control-solid" name="facebook">
                            <!--end::Input-->
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                    </div>
                    <!--end::Input group facebook-->
                    <!--begin::Input group linkdin-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span >{{ $t('link_ld') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model.linkedin" type="text" class="form-control form-control-solid" name="linkedin">
                            <!--end::Input-->
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                    </div>
                    <!--end::Input group linkdin-->
                    <!--begin::Input group tweeter-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('link_tw') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model.twitter" type="text" class="form-control form-control-solid" name="twitter">
                            <!--end::Input-->
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                    </div>
                    <!--end::Input group tweeter-->
                    <!--begin::Input group mail-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('link_mail') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model.mail" type="text" class="form-control form-control-solid" name="mail">
                            <!--end::Input-->
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                    </div>
                    <!--end::Input group mail-->
                    <!--begin::Input group youtube-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('link_you') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model.youtube" type="text" class="form-control form-control-solid" name="youtube">
                            <!--end::Input-->
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                    </div>
                    <!--end::Input group youtube-->
                    <!--begin::Action buttons-->
                    <div class="row">
                        <div class="col-md-9 offset-md-3">
                            <!--begin::Separator-->
                            <div class="separator mb-6"></div>
                            <!--end::Separator-->
                            <div class="d-flex justify-content-end">
                                <!--begin::Button-->
                                <button type="reset" class="btn btn-light me-3">{{ $t('cancel') }}</button>
                                <!--end::Button-->
                                <!--begin::Button-->
                                <button type="submit" class="btn btn-primary">{{ $t('save') }}</button>
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
        name: "SettingSocial",
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
                facebook: null,
                twitter: null,
                youtube: null,
                linkedin: null,
                instagram: null,
                mail: null,
            }

            const getData = () => {
                return model.value;
            }

            const submit = () => {
                const data = getData()
                ApiService.post('/settings/social-network', data)
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
                ApiService.get('/settings/social-network')
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
