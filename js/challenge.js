const counter = document.querySelector('#counter');
let current = counter.innerHTML;
let likes = 0;
let isPaused = false;

function upCounter() { 

    setInterval(function(){

        if (!isPaused) {
        ++current
        counter.innerHTML = current;
        likes = 0;
        pause.innerText = 'pause'
    }
    }, 1000)
}

function manuallyChangeCounter() {
    const increment = document.querySelector('#plus');
    const decrement = document.querySelector('#minus');
    const pause = document.querySelector('#pause');
    const restart = document.querySelector('#restart');
    
    increment.addEventListener('click', (e) => {
        ++current;
        counter.innerHTML = current;
        ;
    })
    
    decrement.addEventListener('click', () => {
        --current; 
        counter.innerHTML = current;
        ;
    })
    
    pause.addEventListener('click', () => {
        isPaused = !isPaused;
        pause.textContent = 'resume'
        
        
        increment.disabled = isPaused ? true : false;
        decrement.disabled = isPaused ? true : false;
        heart.disabled = isPaused ? true : false;
    })

}

function likeCounter() {
    const heart = document.querySelector('#heart');
    
    heart.addEventListener('click', (e) => {
        ++likes
        
        if(document.getElementById(current)) {
            document.getElementById(current).innerHTML = 
            `<p>${current} has <span class='likes'>${likes}</span> likes!</p>`
        }   
        
        else {
            let li = document.createElement('li')
            li.id = current
            let ul = document.querySelector('.likes')
            
            ul.appendChild(li)
            
            li.innerHTML = `<p>${current} has <span class='likes'>${likes}</span> likes!</p>`
        }})
    }

let submit = document.querySelector('#submit');
        
submit.addEventListener('click', (e) => {
    e.preventDefault();

    let form = document.querySelector('#comment-form');
    let newComment = document.createElement('p');
    let h3 = document.querySelector('h3');

    newComment.textContent = document.querySelector('input').value;
    h3.appendChild(newComment);

    form.reset();
    })
       
    upCounter()
    manuallyChangeCounter()
    likeCounter()
    
    