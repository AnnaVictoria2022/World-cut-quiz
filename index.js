gsap.registerPlugin(ScrollTrigger);

gsap.from('.one', {
    x:-1000,
    duration:1,
    scrollTrigger: {
        trigger:'.one',
    },
})

gsap.from('.two', {
    x:1000,
    duration:1,
    scrollTrigger: {
        trigger:'.two',
    },
})

gsap.from('.three', {
    x:-1000,
    duration:1,
    scrollTrigger: {
        trigger:'.three',
    },
})

gsap.from('.four', {
    x:1000,
    duration:1,
    scrollTrigger: {
        trigger:'.four',
    },
})

gsap.from('.five', {
    x:-1000,
    duration:1,
    scrollTrigger: {
        trigger:'.five',
    },
})

gsap.from('.six', {
    x:1000,
    duration:1,
    scrollTrigger: {
        trigger:'.six',
    },
})

gsap.from('.seven', {
    x:-1000,
    duration:1,
    scrollTrigger: {
        trigger:'.seven',
    },
})

gsap.from('.eight', {
    x:1000,
    duration:1,
    scrollTrigger: {
        trigger:'.eight',
    },
})

gsap.from('.nine', {
    x:-1000,
    duration:1,
    scrollTrigger: {
        trigger:'.nine',
    },
})

gsap.from('.ten', {
    x:1000,
    duration:1,
    scrollTrigger: {
        trigger:'.ten',
    },
})


const button = document.querySelector('.btn')
button.addEventListener('click', result);

const par = document.querySelector('#showResults');


function result(e){
    e.preventDefault();

    let points = 0;
    if (document.querySelector('#correctOne').checked) {
        points++;
    }
    if (document.querySelector('#correctTwo').checked) {
        points++;
    }
    if (document.querySelector('#correctThree').checked) {
        points++;
    }
    if (document.querySelector('#correctFour').checked) {
        points++;
    }
    if (document.querySelector('#correctFive').checked) {
        points++;
    }
    if (document.querySelector('#correctSix').checked) {
        points++;
    }
    if (document.querySelector('#correctSeven').checked) {
        points++;
    }
    if (document.querySelector('#correctEight').checked) {
        points++;
    }
    if (document.querySelector('#correctNine').checked) {
        points++;
    }
    if (document.querySelector('#correctTen').checked) {
        points++;
    }

    showResults.style.display = "block";
    par.textContent = `You've scored ` + points + ' goals!';
}

const buttonTwo = document.querySelector('.btn2')
buttonTwo.addEventListener('click', answers);

function answers(e){
    e.preventDefault();
    const correctAnswer = document.querySelectorAll('span');
    correctAnswer.forEach(item =>{
    item.classList.add('trueAnswer');
})
}
