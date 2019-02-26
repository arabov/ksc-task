<template>
    <v-container fluid>
        <v-layout wrap>
            <v-flex xs12>
                <v-data-table :headers="headers" :items="data" hide-actions>
                    <template slot="items" slot-scope="props">
                        <td>{{ props.item.title }}</td>
                        <td class="text-xs-right">{{ props.item.text }}</td>
                    </template>
                </v-data-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                headers: [
                    { text: 'Title', align: 'left', sortable: false },
                    { text: 'Text', align: 'right', sortable: false }
                ]
            }
        },
        computed: {
            data() {
                return this.$store.getters.data
            }
        }
    }
</script>

<style scoped>

</style>
