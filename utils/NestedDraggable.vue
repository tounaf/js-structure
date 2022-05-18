<template>
    <draggable
        class="dragArea"
        v-model="modelValue"
        item-key="id"
    >
        <template #item="{element, index}">
            {{ element }}
        </template>
    </draggable>
</template>

<script>
import draggable from "vuedraggable";

export default {
    name: "NestedDraggable",
    components: [draggable],
    props: {
        modelValue: {
            type: Array,
            default: [],
        },
    }
};
</script>
<style scoped>
.dragArea {
    min-height: 50px;
    outline: 1px dashed;
}
</style>
