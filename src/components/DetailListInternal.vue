<template>
    <section>
        <table border="1" class="table is-bordered">
            <tbody>
            <tr>
                <td colspan="3" class="is-size-2">
                    Detail  {{contact.Name}} - {{contact.Code}} - {{new Date().toISOString().split('T')[0]}}
                </td>
            </tr>
            <tr class="has-text-weight-bold has-background-light">
                <td>LiveName</td><td></td><td></td>
            </tr>
            <tr v-for="rec in details.live" :key="rec.id">
                <td>{{rec.LiveName}}</td>
                <td></td>
                <td></td>
            </tr>
            <tr class="has-text-weight-bold has-background-light">
                <td>DeadName</td><td>LiveName</td><td>Relation</td>
            </tr>
            <tr v-for="rec in details.dead" :key="rec.id">
                <td>{{rec.DeadName}}</td>
                <td>{{rec.LiveName}}</td>
                <td>{{rec.Relation}}</td>
            </tr>
            <tr  class="has-text-weight-bold has-background-light">
                <td>Surname</td><td>LiveName</td><td></td>
            </tr>
            <tr v-for="rec in details.ancestor" :key="rec.id">
                <td>{{rec.Surname}}</td>
                <td>{{rec.LiveName}}</td>
                <td></td>
            </tr>
            </tbody>
        </table>
        
    </section>
</template>
<script>
import { useRoute } from 'vue-router'
import { readContactDetailData, getContact } from '../store/back4app'

export default {
    async setup(){
        const route = useRoute();
        var contactId = route.query.c;

        const details = await readContactDetailData(contactId);
        const contact = await getContact(contactId);
        return {details, contact};
    }
}

</script>

