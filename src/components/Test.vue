<template>
    <ul>
        <li v-for="message in messages" :key="message.id">
                <p>{{message.message}}//{{message.name}}</p>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
                messages:[
                ]
        }
    },
    beforeCreate(){
        let dbref=db.collection("Messages");
                                 dbref.get().then(snapshot=>{
                                     
                                    snapshot.forEach(emp => {
                                 var data = emp.data()
                                 data.from:doc.data().From,
                                data.time:doc.data().Time,
                                data.messagenow:doc.data().Message,
            //this.messages=doc.data();
            this.messages.push(data),       
    }
    
}
</script>