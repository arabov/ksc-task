<template>
    <v-container fluid>
        <v-layout wrap>
            <v-flex xs12>
                <v-data-table :headers="headers" :items="logs" hide-actions>
                    <template slot="items" slot-scope="props">
                        <td>{{ props.item.event }}</td>
                        <td class="text-xs-right">{{ new Date(props.item.date) }}</td>
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
                    { text: 'Event', align: 'left', sortable: false },
                    { text: 'Date', align: 'right', sortable: false }
                ]
            }
        },
        computed: {
            logs() {
                return this.$store.getters.logs
            }
        }
    }
</script>

<style scoped>

</style>
