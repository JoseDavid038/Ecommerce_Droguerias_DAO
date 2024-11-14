const targets = document.querySelectorAll('[data-target]');
const content = document.querySelectorAll('[data-content]');

targets.forEach(target => {
  target.addEventListener('click', () =>{
    
    targets.forEach(t => 
      t.classList.remove('selected'));
      target.classList.add('selected');

    content.forEach(c =>{
      c.classList.remove('active')
    })
    const targetOnly = document.querySelector(target.dataset.target)
    targetOnly.classList.add('active');

  })
})