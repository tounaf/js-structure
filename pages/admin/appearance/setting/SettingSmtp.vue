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
                    <h2>{{ $t(("smtp"))}}</h2>
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
                                <span>{{ $t('host') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['host']" type="text" class="form-control form-control-solid" name="host">
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
                                <span >{{ $t('port') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['port']" type="text" class="form-control form-control-solid" name="port">
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
                                <span >{{ $t('username') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['username']" type="text" class="form-control form-control-solid" name="username">
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
                                <span >{{ $t('password') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['password']" type="text" class="form-control form-control-solid" name="password">
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
                                <span >{{ $t('encryption') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['encryption']" type="text" class="form-control form-control-solid" name="encryption">
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
                                <span >{{ $t('sender-email') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['sender-email']" type="email" class="form-control form-control-solid" name="sender-email">
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
                                <span >{{ $t('sender-name') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <input v-model="model['sender-name']" type="text" class="form-control form-control-solid" name="sender-name">
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
        name: "SettingSmtp",
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
                'host': null,
                'port': null,
                'username': null,
                'password': null,
                'encryption': null,
                'sender-email': null,
                'sender-name': null,
            }

            const getData = () => {
                return model.value;
            }

            const submit = () => {
                const data = getData()
                ApiService.post('/settings/smtp', data)
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
                ApiService.get('/settings/smtp')
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
