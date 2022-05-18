<template>
    <!--begin::Content-->
    <div v-if="model" class="content d-flex flex-column flex-column-fluid vh-100" id="kt_content">

        <ToolBar>
            <!--begin::Buttons-->
            <router-link :to="{name: 'admin.administrators'}" class="btn btn-sm btn-light btn-active-light-primary me-2">{{ $t('back') }}</router-link>
            <!--end::Buttons-->
        </ToolBar>

        <!--begin::Post-->
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div id="kt_content_container" class="container-fluid">

                <div class="card">
                    <div class="card-header border-0 cursor-pointer">
                        <div class="card-title m-0">
                            <h3 class="fw-bolder m-0">{{ $t('messages.administrators.create') }}</h3>
                        </div>
                    </div>
                    <div class="card-body">
                        <div ref="element" class="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid">
                            <!--begin::Aside-->
                            <div class="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
                                <!--begin::Nav-->
                                <div class="stepper-nav ps-lg-10">
                                    <!--begin::Step 1-->
                                    <div class="stepper-item current" data-kt-stepper-element="nav">
                                        <!--begin::Line-->
                                        <div class="stepper-line w-40px"></div>
                                        <!--end::Line-->
                                        <!--begin::Icon-->
                                        <div class="stepper-icon w-40px h-40px">
                                            <em class="stepper-check fas fa-check"></em>
                                            <span class="stepper-number">1</span>
                                        </div>
                                        <!--end::Icon-->
                                        <!--begin::Label-->
                                        <div class="stepper-label">
                                            <h3 class="stepper-title">{{ $t('username') }}</h3>
                                        </div>
                                        <!--end::Label-->
                                    </div>
                                    <!--end::Step 1-->
                                    <!--begin::Step 2-->
                                    <div class="stepper-item" data-kt-stepper-element="nav">
                                        <!--begin::Line-->
                                        <div class="stepper-line w-40px"></div>
                                        <!--end::Line-->
                                        <!--begin::Icon-->
                                        <div class="stepper-icon w-40px h-40px">
                                            <em class="stepper-check fas fa-check"></em>
                                            <span class="stepper-number">2</span>
                                        </div>
                                        <!--begin::Icon-->
                                        <!--begin::Label-->
                                        <div class="stepper-label">
                                            <h3 class="stepper-title">{{ $t('details') }}</h3>
                                        </div>
                                        <!--begin::Label-->
                                    </div>
                                    <!--end::Step 2-->
                                    <!--begin::Step 3-->
                                    <div class="stepper-item" data-kt-stepper-element="nav">
                                        <!--begin::Line-->
                                        <div class="stepper-line w-40px"></div>
                                        <!--end::Line-->
                                        <!--begin::Icon-->
                                        <div class="stepper-icon w-40px h-40px">
                                            <em class="stepper-check fas fa-check"></em>
                                            <span class="stepper-number">3</span>
                                        </div>
                                        <!--end::Icon-->
                                        <!--begin::Label-->
                                        <div class="stepper-label">
                                            <h3 class="stepper-title">{{ $t('confirmation') }}</h3>
                                        </div>
                                        <!--end::Label-->
                                    </div>
                                    <!--end::Step 3-->
                                </div>
                                <!--end::Nav-->
                            </div>
                            <!--begin::Aside-->
                            <!--begin::Content-->
                            <div class="flex-row-fluid py-lg-5 px-lg-15">
                                <!--begin::Form-->
                                <form method="post" @submit.prevent="submit" class="form fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate">
                                    <!--begin::Step 1-->
                                    <div class="current" data-kt-stepper-element="content">
                                        <div class="w-100 h-100">
                                            <!--begin::Input group-->
                                            <div class="fv-row mb-10 fv-plugins-icon-container">
                                                <!--begin::Label-->
                                                <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                                                    <span class="required">{{ $t('username') }}</span>
                                                    <em class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="" :data-bs-original-title="$t('infouser')" :aria-label="$t('infouser')"></em>
                                                </label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                    <input v-model="model.username" name="username" type="text" class="form-control form-control-lg form-control-solid" placeholder="Username">
                                                <!--end::Input-->
                                                <div class="fv-plugins-message-container invalid-feedback"></div>
                                            </div>
                                            <!--end::Input group-->
                                        </div>
                                    </div>
                                    <!--end::Step 1-->

                                    <!--begin::Step 2-->
                                    <div data-kt-stepper-element="content">
                                        <div class="w-100 h-100">
                                            <!--begin::Input group-->
                                            <div class="fv-row mb-10 fv-plugins-icon-container">
                                                <!--begin::Label-->
                                                <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                                                    <span class="required">{{ $t('first_name') }}</span>
                                                </label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <input v-model="model.first_name" name="first_name" :placeholder="$t('first_name')" type="text" class="form-control form-control-lg form-control-solid">
                                                <!--end::Input-->
                                                <div class="fv-plugins-message-container invalid-feedback"></div>
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-10 fv-plugins-icon-container">
                                                <!--begin::Label-->
                                                <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                                                    <span class="required">{{ $t('last_name') }}</span>
                                                </label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <input v-model="model.last_name" name="last_name" type="text" :placeholder="$t('last_name')" class="form-control form-control-lg form-control-solid">
                                                <!--end::Input-->
                                                <div class="fv-plugins-message-container invalid-feedback"></div>
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-10 fv-plugins-icon-container">
                                                <!--begin::Label-->
                                                <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                                                    <span class="required">{{ $t('password') }}</span>
                                                </label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <input v-model="model.password" name="password" type="text" :placeholder="$t('password')" class="form-control form-control-lg form-control-solid">
                                                <!--end::Input-->
                                                <div class="fv-plugins-message-container invalid-feedback"></div>
                                            </div>
                                            <!--end::Input group-->

                                            <!--begin::Input group-->
                                            <div class="fv-row mb-10 fv-plugins-icon-container">
                                                <!--begin::Label-->
                                                <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                                                    <span class="required">{{ $t('password_confirmation') }}</span>
                                                </label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <input v-model="model.password_confirmation" name="password_confirmation" :placeholder="$t('password_confirmation')" type="text" class="form-control form-control-lg form-control-solid">
                                                <!--end::Input-->
                                                <div class="fv-plugins-message-container invalid-feedback"></div>
                                            </div>
                                            <!--end::Input group-->
                                        </div>
                                    </div>
                                    <!--end::Step 2-->

                                    <!--begin::Step 3-->
                                    <div data-kt-stepper-element="content">
                                        <div class="w-100 h-100 text-center">
                                            <!--begin::Heading-->
                                            <h1 class="fw-bolder text-dark mb-3">{{$t('ready')}}</h1>
                                            <!--end::Heading-->
                                            <!--begin::Description-->
                                            <div class="text-muted fw-bold fs-3">{{$t('please_confirme')}}</div>
                                            <!--end::Description-->
                                        </div>
                                    </div>
                                    <!--end::Step 3-->
                                    <!--begin::Actions-->
                                    <div class="d-flex flex-stack pt-10">
                                        <!--begin::Wrapper-->
                                        <div class="me-2">
                                            <button type="button" class="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous">
                                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr063.svg-->
                                                <span class="svg-icon svg-icon-3 me-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="black"></rect>
                                                        <path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="black"></path>
                                                    </svg>
                                                </span>
                                                <!--end::Svg Icon-->
                                                {{ $t('back') }}
                                            </button>
                                        </div>
                                        <!--end::Wrapper-->
                                        <!--begin::Wrapper-->
                                        <div>
                                            <button type="submit" class="btn btn-lg btn-primary" data-kt-stepper-action="submit">
                                                {{ $t('confirm') }}
                                            </button>
                                            <button type="button" class="btn btn-lg btn-primary" data-kt-stepper-action="next">
                                                {{ $t('continue') }}
                                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
                                                <span class="svg-icon svg-icon-3 ms-1 me-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black"></rect>
                                                        <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black"></path>
                                                    </svg>
                                                </span>
                                                <!--end::Svg Icon-->
                                            </button>
                                        </div>
                                        <!--end::Wrapper-->
                                    </div>
                                    <!--end::Actions-->
                                </form>
                                <!--end::Form-->
                            </div>
                            <!--end::Content-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ApiService from "../../../../services/api.service";
    import {onMounted, ref, watch, nextTick} from "vue";
    import useVuelidate from "@vuelidate/core";
    import {useRoute} from "vue-router";
    import ToolBar from "../../../../layouts/admin/content/ToolBar";
    import {SET_BREADCRUMB} from "../../../../services/store/breadcrumbs.module";
    import {useStore} from "vuex";
    import {useI18n} from "vue-i18n";

    export default {
        name: 'AdministratorCreate',
        components: {ToolBar},
        setup(){
            const store = useStore()
            const route = useRoute()
            const v$ = useVuelidate()
            const { t } = useI18n()

            onMounted(() => {
                store.dispatch(SET_BREADCRUMB, [
                    {title: 'dashboard', route: "admin.dashboard"},
                    {title: 'administrators', route: "admin.administrators"},
                    {title: 'messages.administrators.create'},
                ])
            })

            const getData = () => {
                return model.value;
            }

            const submit = () => {
                if(v$.$touch && v$.$error) return;
                confirm();
            }

            const exists = ref(null)
            const verify = () => {
                console.log("verify")
                const data = {
                    username: model.value.username,
                }
                ApiService.post('/administrators/verify', data)
                    .then((response) => {
                        console.log("response", response.data)
                        exists.value = response.data.success
                        if(response.data.success){
                            toastr.success(t('account_exist'))
                            stepper.value.goLast()
                        }else{
                            toastr.error(t("account_not_found"))
                            stepper.value.goNext();
                        }
                    })
                    .catch(() => {
                        toastr.error(t("prod_error"))
                    })

            }

            const create = () => {
                const data = getData()
                ApiService.post('/administrators', data)
                    .then((response) => {
                        if(response.data.success){
                            toastr.success(t('compte_created'))
                            stepper.value.goLast()
                        }else{
                            if(response.data.message){
                                toastr.error(response.data.message)
                            } else {
                                toastr.error(t("prod_error"))
                            }
                        }
                    })
                    .catch(() => {
                        toastr.error(t("prod_error"))
                    })
            }


            const confirm = () => {
                console.log("confirm")
                const data = {
                    username: model.value.username,
                    role: 'administrator',
                }
                ApiService.put('/administrators/role', data)
                    .then((response) => {
                        if(response.data.success){
                            toastr.success(t("success_change_to_admin"))
                            init()
                            setTimeout("location.reload(true);",1000)
                        }else{
                            toastr.error(response.data.message)
                        }
                    })
                    .catch(() => {
                        toastr.error(t("prod_error"))
                    })
                    .finally(() => {
                        stepper.value.goFirst()
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
                username: '',
                first_name: '',
                last_name: '',
                password: '',
                password_confirmation: '',
            }
            const model = ref(null)
            const init = () => {
                initModel()
            }
            watch(() => id.value, () => { init() })
            onMounted(init)

            const element = ref(null)
            const stepper = ref(null)
            const initStepper = () => {
                if(!element.value){
                    return;
                }
                stepper.value = new KTStepper(element.value);
                stepper.value.on("kt.stepper.next", function (value) {
                    const step = value.getCurrentStepIndex()
                    switch (step){
                        case 1:
                            if(!model.value.username){
                                toastr.error(t("field_username"))
                            }else{
                                verify()
                            }
                        break;
                        case 2:
                            if(!exists.value){
                                if(!model.value.first_name){
                                    toastr.error(t("field_first_name"))
                                }else if(!model.value.last_name){
                                    toastr.error(t("field_last_name"))
                                }else if(!model.value.password){
                                    toastr.error(t("field_password"))
                                }else if(!model.value.password_confirmation){
                                    toastr.error(t("field_password_confirmation"))
                                }else {
                                    if(model.value.password === model.value.password_confirmation) {
                                        if (model.value.password.length < 6) {
                                            toastr.error(t("password_error_length"))
                                        }else {
                                            create()
                                        }
                                    } else {
                                        toastr.error(t("password_not_same"))
                                    }
                                }
                            }else{
                                toastr.error(t("prod_error"))
                            }
                        break;
                        case 3:
                            confirm()
                        break;
                    }
                });
                stepper.value.on("kt.stepper.previous", function (value) {
                    value.goFirst();
                });
            }
            watch(() => model.value, () => {
                nextTick(initStepper)
            })

            return {
                v$,
                model,
                exists,
                element,
                submit,
                verify,
                confirm,
            }
        }
    }
</script>
