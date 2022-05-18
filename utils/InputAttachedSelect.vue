<template>
    <!--begin::Input-->
    <select ref="select" class="form-select form-select-solid">
        <option value="">{{ $t('all') }}</option>
        <option value="1">{{ $t('attached') }}</option>
        <option value="0">{{ $t('unattached') }}</option>
    </select>
    <!--end::Input-->
</template>

<script>

import {computed, onMounted, onUnmounted, reactive, ref, watch} from "vue";
import {required} from "@vuelidate/validators";
import {useStore} from "vuex";
import useVuelidate from "@vuelidate/core";
import {ADD_ERROR} from "../services/store/form.module";

export default {
    name: "InputAttachedSelect",
    props: {
        modelValue: {
            type: [Object, String, Number],
            default: null,
        },
        id: {
            type: String,
            default: null,
        },
        name: {
            type: String,
            default: "input",
        },
        field: {
            type: String,
            default: "name",
        },
        fieldValue: {
            type: String,
            default: "id",
        },
        placeholder: {
            type: String,
            default: "",
        },
        rules: {
            type: Object,
            default: {required},
        },
        url: {
            type: String,
            default: "",
        },
    },
    setup: function (props, {emit}) {
        const store = useStore()

        const select = ref(null)

        const name = ref(props.name)

        const initialState = {}
        initialState[name.value] = props.modelValue

        const state = reactive(initialState)
        watch(() => props.modelValue, () => state[name.value] = props.modelValue)

        const rules = {}
        rules[name.value] = props.rules

        const v$ = useVuelidate(rules, state)

        watch(() => v$.value[name.value].$errors, (value) => {
            const errors = []
            value.forEach((item) => {
                errors.push(item.$message)
            })
            store.commit(ADD_ERROR, {name: name.value, errors})
        })

        onMounted(function () {
            $(select.value)
                // init select2
                .select2({
                    minimumResultsForSearch: -1,
                    allowClear : false,
                    language: "fr",
                })
                .val(props.modelValue)
                .trigger("change")
                // emit event on change.
                .on("change", function (event) {
                    emit("update:modelValue", event.target.value);
                });
        })

        watch(() => props.modelValue, function (value) {
            // update value
            $(select.value)
                .val(value)
                .trigger("change");
        })

        onUnmounted(() => {
            $(select.value)
                .off()
                .select2("destroy");
        })

        return {
            select,
            v$,
            name,
            errors: computed(() => {
                return store.getters.errors(name.value)
            }),
            loading: computed(() => {
                return store.getters.loading
            }),
        };
    },
};
</script>
