var h1 = document.querySelector('h1');
console.log(h1);
h1.style.backgroundColor = 'green';
h1.style.color = 'white';
h1.style.textAlign = "center";

var input = document.querySelector('input');
console.log(input);
input.style.borderColor='green';

var bttn = document.getElementById('bttn');
console.log(bttn);
bttn.style.color = 'green';
bttn.style.borderColor = 'green';


var X = document.getElementById('X');
console.log(X);
X.style.color = 'red';
X.style.borderColor = 'red';






$('#bttn').on('click', function() {
    var input = $('input').val();
    const temp = `<tr><td>${input}</td><td><button id = "remove">X</button></td></tr>`;
    $('.table').append($(temp));
});

$('.table').on('click', 'button', function() {
    $(this).closest('tr').remove();
})