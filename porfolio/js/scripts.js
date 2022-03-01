
// capturar el elemento segun su id para trabajar con el
const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

// localizar el id de los colores
const toggleColors = document.getElementById('toggle-colors');

// localizar las variables que hay en nuestro css para cambiarle el color con js
const rootStyles = document.documentElement.style;

//localizar eleelemnto de la bandera y acceder a el con el evento click para selccionar el idioma
const flagsElement = document.getElementById("flags");

//seleccionar todas las etiquetas html para hacer el cambio d elenguaje
consttextsToChange = document.querySelectorAll("[data-section]");


// funcion para que lee el json y me cambie el lenguaje
const changeLanguage =  async( language) =>{
  const requestJson = await fetch(`../languajes/${language}.json`) //hacemos la peticion
  const texts = await requestJson.json();//la convertimos en objeto para que js la pueda leer
//   console.log(texts);
//modificar todos los textos para cambiar, esto trabaja con los data-asection y data-value del html
for( const textToChange of textToChange){
    // console.log(textsToChange);
  const section = textToChange.dataset.section;
  const value = textToChange.dataset.value;
//   console.log(section, value);

textToChange.innerHTML = texts[section][value];

      }

};
flagsElement.addEventListener('click', (e) =>{
    // console.log(e.target.parentElement.dataset.language);
    changeLanguage(e.target.parentElement.dataset.language);
});

// capturarar el evento para cambiar la clase al body y hacer el modo oscuro mediante el event de click con js
toggleTheme.addEventListener("click", () =>{
    // si no tiene la clase la pone y si la tiene se la quita
    document.body.classList.toggle("dark");
//  cambiar el texto y el icono segun el evento en dark o no 
    if (toggleIcon.src.includes("moon.svg") ) {
        toggleIcon.src= "assets/icons/sun.svg"
        toggleText.textContent = "Light Mode"
    }else{
        toggleIcon.src= "assets/icons/moon.svg"
        toggleText.textContent =" Dark Mode"
    }
} )

// capturar el evento para cambiar los colores a las variables 
toggleColors.addEventListener('click', (e)=>{
    // capturar a que var se le da clic o que color o atributo
   //console.log(e.target.dataset);
   //asignarle una propiead a la const creada para capturar las var del css, todo esto dentro del evento click DATA VIENE del data-color de html es el nombre de la data al que hay que llmar
   rootStyles.setProperty('--primary-color', e.target.dataset.color)

})
