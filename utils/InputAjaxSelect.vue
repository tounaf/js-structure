<template>
  <!--begin::Input-->
  <select
    ref="select"
    v-model="v$[name].$model"
    :class="{ 'is-invalid': v$[name].$dirty && errors.length, 'is-valid': v$[name].$dirty && !errors.length }"
    :data-placeholder="placeholder"
    class="form-select form-select-solid"
  >
  </select>
  <!--end::Input-->
</template>

<script>
import {computed, onMounted, onUnmounted, reactive, ref, watch} from "vue";
import {required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {useStore} from "vuex";
import {ADD_ERROR} from "../services/store/form.module";

export default {
  name: "InputAjaxSelect",
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
                    allowClear : true,
                    language: "fr",
                    ajax: {
                        url: process.env.MIX_APP_URL + props.url,
                        data: function (params) {
                            // Query parameters will be ?search=[term]&page=[page]
                            return {
                                's': params.term,
                                'page': params.page || 1,
                                'per-page': 5,
                            };
                        },
                        processResults: function (data) {
                            // Transforms the top-level key of the response object from 'items' to 'results'
                            const results = []
                            data.data.forEach((item) => {
                                results.push({id: item[props.fieldValue], text: item[props.field]})
                            })
                            return {
                                results: results
                            };
                        }
                    }
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
