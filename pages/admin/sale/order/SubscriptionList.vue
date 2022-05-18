<template>
    <template
        v-if="models && models.length"
        v-for="model in models"
        :key="model.id"
        :id="`table-row-${model.id}`">

        <!--begin::Principal=-->
        <tr :class="{'border-bottom-0': model.expanded}">
            <!--begin::Check=-->
            <td></td>
            <!--end::Check=-->
            <!--begin::Product=-->
            <td>
                <router-link v-if="model.version" :to="{name: 'admin.versions.view', params:{id: model.version.id}}" class="d-flex align-models-center">
                    <div class="d-flex align-items-center">
                        <!--begin::Avatar-->
                        <div class="mw-50px me-5">
                            <img :src="$filters.vignette('version', model.version.mid)" class="w-100" alt="">
                        </div>
                        <!--end::Avatar-->
                        <!--begin::Text-->
                        <div class="flex-grow-1">
                            <a href="#" class="text-dark fw-bolder text-hover-primary fs-6">{{ model.version.name }}</a>
                            <span class="text-muted d-block fw-bold">{{ model.version.mid }}</span>
                        </div>
                        <!--end::Text-->
                    </div>
                </router-link>
                <router-link v-else-if="model.package" :to="{name: 'admin.packages.view', params:{id: model.package.id}}">
                    <div class="text-muted fs-6 fw-bolder">{{ $t('package') }}</div>
                    <div class="text-dark fs-6 fw-bolder text-hover-primary">{{ model.package.name }}</div>
                </router-link>
            </td>
            <!--end::Product=-->
            <!--begin::Duration=-->
            <td>
                <router-link v-if="model.duration" :to="{name: 'admin.durations.view', params:{id: model.duration.id}}">
                    <div class="text-muted fs-6 fw-bolder">{{ $t('duration') }}</div>
                    <div class="text-dark fs-6 fw-bolder text-hover-primary">{{ model.duration.name }}</div>
                </router-link>
            </td>
            <!--end::Duration=-->
            <!--begin::Start=-->
            <td>
                <div class="text-muted fs-7 fw-bolder">{{ $t('start_at') }}</div>
                <div class="text-dark fs-7 fw-bolder">{{ $filters.formatDate(model.start_at) }}</div>
            </td>
            <!--end::Start=-->
            <!--begin::End=-->
            <td>
                <div class="text-muted fs-7 fw-bolder">{{ $t('end_at') }}</div>
                <div class="text-dark fs-7 fw-bolder">{{ $filters.formatDate(model.end_at) }}</div>
            </td>
            <!--end::End=-->
            <!--begin::Actions=-->
            <td class="text-end">
                <button v-if="model.children && model.children.length" @click="toggle(model)" type="button" class="btn btn-sm btn-icon btn-light btn-active-light-primary">
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr087.svg-->
                    <span v-if="!model.expanded" class="svg-icon svg-icon-3 m-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.5" x="11" y="18" width="12" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"></rect>
                            <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"></rect>
                        </svg>
                    </span>
                    <!--end::Svg Icon-->
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr089.svg-->
                    <span v-else class="svg-icon svg-icon-3 m-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"></rect>
                        </svg>
                    </span>
                    <!--end::Svg Icon-->
                </button>
            </td>
            <!--end::Actions=-->
        </tr>
        <!--end::Principal=-->

        <!--begin::Children-->
        <SubscriptionList v-if="model.expanded" :models="model.children" />
        <!--end::Children=-->
    </template>
    <tr v-else class="odd">
        <td colspan="6">{{ $t('no_subscription_found') }}</td>
    </tr>
</template>

<script>

export default {
    name: 'SubscriptionList',
    props: ['models'],
    setup() {
        const toggle = (item) => {
            item.expanded = !item.expanded
        }

        return {
            toggle,
        }
    }
}
</script>
