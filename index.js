function createPost() {

  let postTemplate = document.getElementById('post-template').innerHTML
  let pageTemplate = document.getElementById('page-template').innerHTML
  let commentTempalte = document.getElementById('comments-template').innerHTML

  let postTitle = document.getElementById('postTitle').value
  let postBody = document.getElementById('postBody').value
  let postAuthor = document.getElementById('postAuthor').value

  let mainDiv = document.getElementsByTagName("main")[0]
  
  
  let pageTemplateFn = _.template(pageTemplate)
  
  mainDiv.innerHTML += pageTemplateFn()
  
  let postTemplateFn = _.template(postTemplate)

  let postDiv = document.getElementById("post")
    
  let postHTML = postTemplateFn({postAuthor: postAuthor, postBody: postBody, postTitle: postTitle})
}

function postComment() {
  let commentTemplate = document.getElementById('comment-template').innerHTML
  let commentTemplateFn = _.template(commentTemplate)

}
