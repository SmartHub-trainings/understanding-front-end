// console.log(document.getElementsByTagName('button'));
// console.log(document.getElementsByTagName('input'));
// console.log(document.getElementById('num1').value);

function sayHello() {
  console.log('Hello');
}

const addNumbers = () => {
  const input1 = document.getElementById('num1').value * 1;
  const input2 = document.getElementById('num2').value * 1;
  const pageDiv = document.querySelector('div');
  const p = document.querySelector('p');
  p.textContent = `${input1 + input2}`;
  //   pageDiv.appendChild(document.createTextNode(`${input1 + input2}`));
  console.log(pageDiv);
  console.log(input1 + input2);
};

function main() {
  const users = [
    { name: 'John Doe', age: 30, gender: 'Male' },
    { name: 'Jane Doe', age: 25, gender: 'Female' },
    { name: 'Georg Smith', age: 60, gender: 'Male' },
    { name: 'Georg Smith', age: 60, gender: 'Male' },
  ];
  const ul = document.querySelector('ul');
  for (let i = 0; i < users.length; i++) {
    const li = `<li>
          <p>
            <span>Name:</span>
            <span>${users[i].name}</span>
          </p>
          <p>
            <span>Age:</span>
            <span>${users[i].age}</span>
          </p>
          <p><span>Gender:</span><span>${users[i].gender}</span></p>
        </li>`;
    ul.innerHTML += li;
  }
  const button = document.querySelector('button');
  button.addEventListener('click', addNumbers);
  const lis = document.querySelectorAll('li');
  for (let item of lis) {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = 'red';
    });
    item.addEventListener('mouseout', () => {
      item.style.backgroundColor = 'white';
    });
  }
}

main();
