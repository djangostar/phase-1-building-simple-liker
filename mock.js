const likes = document.querySelectorAll('.like')
for(let like of likes) {
  like.addEventListener('click', (e) => {
    const heart = e.target
    mimicServerCall()
    .then(()=> {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART
        heart.className = 'activated-heart'
      } else {
        heart.innerText = EMPTY_HEART
        heart.className = ''
      }
    })
    .catch((error) => {
      let modal = document.querySelector('#modal')
      modal.className = '';
      modal.innerText = error;
      setTimeout(() => modal.className = 'hidden', 3000)
    })
  })
}