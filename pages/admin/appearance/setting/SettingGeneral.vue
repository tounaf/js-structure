<template>
    <!--begin:::Tab pane GENERAL-->
    <div v-if="model" class="tab-pane fade show active">
        <!--begin::Products-->
        <div class="card card-flush">
            <!--begin::Card header-->
            <div class="card-header align-items-center py-5 gap-2 gap-md-5">
                <!--begin::Card title-->
                <div class="card-title">
                    <!--begin::Title-->
                    <h2>{{ $t('general') }}</h2>
                    <!--end::Title-->
                </div>
                <!--end::Card title-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div class="card-body pt-0">
                <!--begin::Form-->
                <form @submit.prevent="submit" id="form" class="form fv-plugins-bootstrap5 fv-plugins-framework" method="post">
                    <!--begin::Input group favicon-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t("favicon") }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <InputImage v-model="favicon" />
                        </div>
                    </div>
                    <!--end::Input group favicon-->

                    <!--begin::Input group banner-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t("banner") }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <InputImage v-model="banner" />
                        </div>
                    </div>
                    <!--end::Input group banner-->

                    <!--begin::Input group logo-->
                    <div class="row fv-row mb-7 fv-plugins-icon-container">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t("logo") }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <InputImage v-model="logo.header" />
                        </div>
                    </div>
                    <!--end::Input group logo-->
                    <!--begin::Input group slogan-->
                    <div class="row fv-row mb-7">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t("slogan") }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <textarea v-model="model['slogan']" name="slogan" class="form-control form-control-solid"></textarea>
                            <!--end::Input-->
                        </div>
                    </div>
                    <!--end::Input group slogan-->
                    <!--begin::Input group footer description-->
                    <div class="row fv-row mb-7">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('description_footer') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <textarea v-model="model['footer-description']" name="footer-description" class="form-control form-control-solid"></textarea>
                            <!--end::Input-->
                        </div>
                    </div>
                    <!--end::Input group footer description-->
                    <!--begin::Input group accroche-->
                    <div class="row fv-row mb-7">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('hook_title') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <textarea v-model="model['footer-hook-title']" name="footer-hook-title" class="form-control form-control-solid"></textarea>
                            <!--end::Input-->
                        </div>
                    </div>
                    <!--end::Input group accroche-->
                    <!--begin::Input group accroche content-->
                    <div class="row fv-row mb-7">
                        <div class="col-md-3 text-md-end">
                            <!--begin::Label-->
                            <label class="fs-6 fw-bold form-label mt-3">
                                <span>{{ $t('hook_content') }}</span>
                            </label>
                            <!--end::Label-->
                        </div>
                        <div class="col-md-9">
                            <!--begin::Input-->
                            <textarea v-model="model['footer-hook-content']" name="footer-hook-content" class="form-control form-control-solid"></textarea>
                            <!--end::Input-->
                        </div>
                    </div>
                    <!--end::Input group accroche-->

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
                    <div></div>
                </form>
                <!--end::Form-->
            </div>
            <!--end::Card body-->
        </div>
        <!--end::Products-->
    </div>
    <!--end:::Tab pane GENERAL-->
</template>
<script>
    import ToolBar from "../../../../layouts/admin/content/ToolBar";
    import {useStore} from "vuex";
    import {onMounted, ref} from "vue";
    import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module";
    import ApiService from "../../../../services/api.service";
    import {useI18n} from "vue-i18n";

    export default {
        name: "SettingGeneral",
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
            const favicon = ref(null)
            const banner = ref(null)
            const logo = ref({
                header: null,
                footer: null,
            })
            const initialModel = {
                slogan: null,
                "footer-description": null,
                "footer-hook-title": null,
                "footer-hook-content": null,
            }

            const getData = () => {
                const data = model.value;
                if(logo.value.header){
                    data['header-logo'] = logo.value.header.id
                }
                if(logo.value.footer){
                    data['footer-logo'] = logo.value.footer.id
                }
                if(favicon.value){
                    data['favicon'] = favicon.value.id
                }
                if(banner.value){
                    data['banner'] = banner.value.id
                }
                return data;
            }

            const submit = () => {
                const data = getData()
                ApiService.post('/settings/general', data)
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
                ApiService.get('/settings/general')
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
                    logo.value.header = value['header-logo'] ? value['header-logo'] : null
                    logo.value.footer = value['footer-logo'] ? value['footer-logo'] : null
                    favicon.value = value['favicon'] ? value['favicon'] : null
                    banner.value = value['banner'] ? value['banner'] : null
                }
            }

            return {
                favicon,
                banner,
                logo,
                model,
                submit,
            }
        }
    }
</script>
