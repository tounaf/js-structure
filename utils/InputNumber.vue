<template>
    <!--begin::Dialer-->
    <div class="position-relative w-md-300px" ref="element">

        <!--begin::Decrease control-->
        <button type="button" class="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0" data-kt-dialer-control="decrease">
            <span class="svg-icon svg-icon-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                    <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                </svg>
            </span>
        </button>
        <!--end::Decrease control-->

        <!--begin::Input control-->
        <input v-model="model" type="text" class="form-control text-center" data-kt-dialer-control="input" readonly />
        <!--end::Input control-->

        <!--begin::Increase control-->
        <button type="button" class="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0" data-kt-dialer-control="increase">
            <span class="svg-icon svg-icon-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black"></rect>
                    <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black"></rect>
                    <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black"></rect>
                </svg>
            </span>
        </button>
        <!--end::Increase control-->
    </div>
    <!--end::Dialer-->
</template>

<script>
import {ref, watch} from "vue";

export default {
    name: 'InputNumber',
    props: {
        modelValue: {
            type: [Number],
            default: 0,
        },
    },
    setup(props, {emit}) {
        const model = ref(props.modelValue)
        watch(() => model.value, (value) => {
            if(dialer.value){
                dialer.value.setValue(value);
            }
        })

        const element = ref(null)
        const dialer = ref(null)
        watch(() => element.value, (value) => {
            if(value){
                const options = {min:0, max:100}
                dialer.value = new KTDialer(value, options);
                dialer.value.setValue(props.modelValue)
                dialer.value.on('kt.dialer.increased', function(){
                    const input = parseInt(dialer.value.getValue())
                    model.value = input
                    emit("update:modelValue", input);
                });
                dialer.value.on('kt.dialer.decreased', function(){
                    const input = parseInt(dialer.value.getValue())
                    model.value = input
                    emit("update:modelValue", input);
                });
            }
        })

        return {
            element,
            model,
        }

    }
};
</script>
