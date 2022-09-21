let cards = document.getElementsByClassName("card");


cards[0].addEventListener("click", function (e) {
    e.preventDefault();
    cards[0].innerHTML = `<br/><h3>El e-commerce incluye:</h3>
    <div class="row no-gutters">
                    <div class="col-sm-6">
                    <ul>
                    <li>Carrito de compra</li>
                    <li>Hosting (1er año)</li>
                    <li>Dominio propio</li>
                    <li>Mantenimiento (1er año)</li>
                </ul>
                    </div>
                    <div class="col-sm-6">
                    <ul>
                    <li>Diseño responsivo</li>
                    <li>Enlaces a redes</li>
                    <li>Propuesta de layout</li>
                    <li>Formularios de registros</li>
                </ul>
                        </div>
                    </div>
                </div>
                <h3>$7000.00 MXN</h3>`;
})

cards[1].addEventListener("click", function (e) {
    e.preventDefault();
    cards[1].innerHTML = `<br/><h3>La web corporativa incluye:</h3>
    <div class="row no-gutters">
                    <div class="col-sm-6">
                    <ul>
                    <li>Chatbot</li>
                    <li>Hosting (1er año)</li>
                    <li>Dominio propio</li>
                    <li>Mantenimiento (1er año)</li>
                </ul>
                    </div>
                    <div class="col-sm-6">
                    <ul>
                    <li>Diseño responsivo</li>
                    <li>Enlaces a redes</li>
                    <li>Propuesta de layout</li>
                    <li>Servicio de e-mail</li>
                </ul>
                        </div>
                    </div>
                </div>
                <h3>$15000.00 MXN</h3>`;
})

cards[2].addEventListener("click", function (e) {
    e.preventDefault();
    cards[2].innerHTML = `<br/><h3>El blog incluye:</h3>
    <div class="row no-gutters">
                    <div class="col-sm-6">
                    <ul>
                    <li>Secciones para artículos</li>
                    <li>Hosting (1er año)</li>
                    <li>Dominio propio</li>
                </ul>
                    </div>
                    <div class="col-sm-6">
                    <ul>
                    <li>Diseño responsivo</li>
                    <li>Enlaces a redes</li>
                    <li>Propuesta de layout</li>
                </ul>
                        </div>
                    </div>
                </div><br/>
                <h3>$5000.00 MXN</h3>`;
});

cards[3].addEventListener("click", function (e) {
    cards[3].innerHTML = `<div class="container">
    <div class="row">
        <div class="col">
        <br/><h3>Espere...</h3>
        <div class="self-building-square-spinner" style="margin: auto; padding-bottom: 20px;">
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
            <div class="square clear"></div>
            <div class="square"></div>
            <div class="square"></div>
            <div class="square clear"></div>
            <div class="square"></div>
            <div class="square"></div>
            </div>
            </div>
        </div>
</div>`
cards[3].disabled = true;
window.setTimeout(function (e) {
    window.location.replace("./cotizacion_2.html");
},5900);
});
