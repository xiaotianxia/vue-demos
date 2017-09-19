<template>
    <div id="container">
        <industry-select :industries="industries"></industry-select>
    </div>
</template>

<script>
import IndustrySelect from './IndustrySelect'
export default {
    components: {
    	IndustrySelect
    },
    data: function () {
    	return {
    		industries: COMMON_INDUSTRY
    	}
    }
}
</script>

<style>

</style>
