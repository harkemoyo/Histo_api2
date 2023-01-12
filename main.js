document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('l1').addEventListener('click',goOne);
    document.getElementById('l2').addEventListener('click', getTwo);
    document.getElementById('l3').addEventListener('click',getThree);
});
function goOne(ev) {
    ev.stopPropagation();
    history.replaceState({ id: 1 }, '', 'http://127.0.0.1:5500/');
    document.title = 'new string';
  }

  function getTwo(ev) {
    ev.preventDefault();
    history.pushState({id: 1}, '',  '#getTime');
  }

function getThree(ev) {
    ev.preventDefault();
    let num = Math.floor(Math.random() * 10000)
    history.pushState({id: num}, '',`${num}`);
}
