<template>
    <ul>
        <li v-for="message in messages" :key="message.id">
                <p>{{message.id}}//{{message.name}}</p>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
                messages:[
                    {id:"101",name:"SREERAG"},
                    {id:"102",name:"SREEJITH"},
                ]
        }
    }
}
</script>