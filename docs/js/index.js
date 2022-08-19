const getScrollBarWidth = () => window.innerWidth - document.documentElement.getBoundingClientRect().width;

document.documentElement.style.setProperty('--scrollbar', `${getScrollBarWidth()}px`);

console.log(`${getScrollBarWidth()}px`);

document.addEventListener('click', (e)=>{
  if(e.target.matches('.menu-pagina') || e.target.matches(`.menu-pagina *`)){
      document.querySelector('.menu-pagina').classList.toggle('menu-pagina--activo');
      document.querySelector('.menu').classList.toggle('mostrar--menu');
  }
});

const d = document;

function quitarClase(array,clase){
  array.forEach(elemento =>{
      elemento.classList.remove(clase);
  });
}


d.querySelectorAll('.menu ul li a').forEach(opc => {
  opc.addEventListener('click', e =>{
      quitarClase(d.querySelectorAll('.menu ul li'),'activo');
      e.target.parentNode.classList.add('activo');
      document.querySelector('.menu-pagina').classList.toggle('menu-pagina--activo');
      d.querySelector('.menu').classList.toggle('mostrar--menu');
  });
});

d.querySelectorAll('#menuEscritorio ul li a').forEach(opc => {
  opc.addEventListener('click', e =>{
      quitarClase(d.querySelectorAll('#menuEscritorio ul li'),'activo');
      e.target.parentNode.classList.add('activo');
  });
});

let $menu = d.querySelectorAll('.menu ul li a');
let $menu2 = d.querySelectorAll('.menuEscritorio ul li a');

window.addEventListener('scroll', e => {
  console.log(scrollY);
  let $secciones = d.querySelectorAll('.contenedor-principal section');

  $secciones.forEach((elemento, indice) => {
    if($secciones[indice+1]){
      if(scrollY > innerHeight/2 + elemento.offsetTop && scrollY < $secciones[indice+1].offsetTop){
        $menu.forEach(menu => {
          if(elemento.id == menu.getAttribute('href').slice(1)){
            quitarClase(d.querySelectorAll('.menu ul li'),'activo');
            quitarClase(d.querySelectorAll('.menuEscritorio ul li'), 'activo');

            menu.parentNode.classList.add('activo');
          }
        });
        $menu2.forEach(menu => {
          if(elemento.id == menu.getAttribute('href').slice(1)){
            quitarClase(d.querySelectorAll('.menuEscritorio ul li'), 'activo');
            menu.parentNode.classList.add('activo');
          }
        });
      }
    }else{
      if(scrollY > innerHeight/2 + elemento.offsetTop && scrollY < d.documentElement.offsetHeight){
        $menu.forEach(menu => {
          if(elemento.id == menu.getAttribute('href').slice(1)){
            quitarClase(d.querySelectorAll('.menu ul li'),'activo');
            quitarClase(d.querySelectorAll('.menuEscritorio ul li'), 'activo');

            menu.parentNode.classList.add('activo');
          }
        });
        $menu2.forEach(menu => {
          if(elemento.id == menu.getAttribute('href').slice(1)){
            quitarClase(d.querySelectorAll('.menuEscritorio ul li'), 'activo');
            menu.parentNode.classList.add('activo');
          }
        });
      } 
    }
  })
}, false);

