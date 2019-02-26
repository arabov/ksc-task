<template>
    <v-container fluid>
        <v-layout wrap>
            <v-flex xs12>
                <v-text-field
                        box
                        label="Title"
                        placeholder=""
                        hint="You can type title"
                        v-model="title"
                ></v-text-field>
            </v-flex>
            <v-flex xs12>
                <v-textarea
                        box
                        name="textarea"
                        label="Text"
                        hint="You can type text"
                        v-model="text"
                ></v-textarea>
            </v-flex>
            <v-flex xs12>
                <v-btn
                        color="info"
                        :disabled="!(title && text)"
                        @click="submit"
                >Add</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        computed: {
            title: {
                get() {
                    return this.$store.getters.title
                },
                set(value) {
                    this.$store.commit('update_title', value)
                }
            },
            text: {
                get() {
                    return this.$store.getters.text
                },
                set(value) {
                    this.$store.commit('update_text', value)
                }
            }
        },
        methods: {
            submit: function() {
                this.$socket.emit('data', { text: this.text, title: this.title });
                this.$store.commit('update_title', '');
                this.$store.commit('update_text', '');
            }
        }
    }
</script>

<style scoped>

</style>
