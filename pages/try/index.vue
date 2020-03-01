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
      <input type="file">
      <button @click.prevent="getPost">add</button>
  </form>
    </div>
    <div>
      <pre id="posts"></pre>
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
            submitted: false,
            file: '',
            display: ''
        }
    },
    methods: {
        createPost() {
            const postRef = firebase.database().ref('try/');
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
        },
//         createPost(){
//             const ref = firebase.storage().ref();
// const file = document.querySelector('#photo').files[0]
// const name = (+new Date()) + '-' + file.name;
// const metadata = {
//   contentType: file.type
// };
// const task = ref.child(name).put(file, metadata);
// task
//   .then(snapshot => snapshot.ref.getDownloadURL())
//   .then((url) => {
//     console.log(url);
//     document.querySelector('#someImageTagID').src = url;
//   })
//   .catch(console.error);
//         },
        getPost() {
            const preObject = document.getElementById('posts');
            const dbRefObject = firebase.database().ref().child('posts');
           var d =  dbRefObject.on('value', snap => snap.forEach(item => {
             preObject.innerText += JSON.stringify(item.val(), null, 3)
           }));
          // dbRefObject.on('value', snap => {
          //   preObject.innerText = JSON.stringify(snap.val(), null, 3)
          // });
        }
    }

}
</script>

<style>

</style>