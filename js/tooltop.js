//Ok veamos, aqui se gatilla el evento de tooltop, primero lo identifica

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.tooltip-btn'); //Aqui identifica

//Aca dice "Si el boton esta encima, lo muestra, si no, no"

    buttons.forEach(button => {
        button.addEventListener('mouseover', showTooltip); //Cursor encima? Si
        button.addEventListener('mouseout', hideTooltip); //Cursor fuera? No
    });

//Aqui esta la instruccion de como muestra el tooltop

    function showTooltip(event) {
        const button = event.currentTarget;
        let tooltip = button.querySelector('.tooltip'); // Aqui esta el cursor encima del boton, toma el css de ".tooltip"

//Esta parte es confusa, pero basicamente crea la ruta "div/tooltip/data-tooltip" si no existe el estilo que creamos
//De por si ya esta creado, pero esto es para no cometer errores, si no cae alla, cae aqui

        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.innerText = button.getAttribute('data-tooltip');
            button.appendChild(tooltip);
        }

        const rect = button.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.pageXOffset}px`;
        tooltip.style.top = `${rect.top + window.pageYOffset - tooltip.offsetHeight}px`;

//Y aqui da el agregado de "show", para que muestre el tooltip

        tooltip.classList.add(':hover');
    }

//Aqui el caso contrario

    function hideTooltip(event) {
        const button = event.currentTarget;
        const tooltip = button.querySelector('.tooltip');

        if (tooltip) {
            tooltip.classList.remove(':hover');
        }
    }
});
