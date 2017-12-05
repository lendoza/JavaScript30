const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular

console.log('hello');

// Interpolated
console.log('Hello I am a %s string!');
console.log(`Hello I am a ${makeGreen}`)

// Styled

// Put %c infront of message you would like to style

console.log('%c I am some great text, color:blue;')

// warning!
console.warn('Shit!');

// Error :|
console.error('OH NO');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`This is ${dog.name}`);
    console.groupEnd(`${dog.name}`);
})

// counting

console.count('Wes');
console.count('Wes');

// 2

// timing

console.time('fetching data');

// Give you an idea of how long a API fetch works, etc.