<template>
<div>
    <div>
  <form v-if="!submitted">
      <label>title:</label>
      <div class="flex flex-col">
        <input type="text" v-model="blog.title" v-validate="'required'" name="title" required/>
        <span class="mt-1 text-xs font-medium text-red-500">{{ errors.first('title') }}</span>
      </div>
      <label>content</label>
      <textarea v-model="blog.content"></textarea>
      <label>author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors" :key="author">{{author}}</option>
      </select>
      <button @click.prevent="createPost">add</button>
  </form>
    </div>
  <div v-if="submitted  ">
      <h3>  thanks for adding</h3>
  </div>
</div>

</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export default {
    data(){
        return {
            blog: {
                title: "",
                content: "",
                author: ""
            },
            authors:['a','b','c'],
            submitted: false
        }
    },
    methods: {
        createPost() {
            const postRef = firebase.database().ref('post/');
            postRef.push({
                title: this.blog.title,
                content: this.blog.content,
                author: this.blog.author
            }).then(() => {
                this.submitted=true
                console.log('Posted!')
            }).catch(err => {
                console.log(err.message)
            })
        }
    }

}
</script>

<style>

</style>