function openCatalog(pdf) {
    window.open(pdf, '_blank');
}

function openWhatsApp() {
    window.open('https://wa.me/3058934657?text=Hola,%20quiero%20realizar%20un%20pedido.', '_blank');
}

function showPromotions() {
    document.getElementById("content").innerHTML = `
        <h1>Promociones</h1>
        <div class="carousel">
            <div class="carousel-inner">
                <img src="promocion1.jpeg" alt="Promoción 1">
                <img src="promocion2.jpeg" alt="Promoción 2">
                <img src="promocion3.jpeg" alt="Promoción 3">
                <img src="promocion4.jpeg" alt="Promoción 4">
                <img src="promocion5.jpeg" alt="Promoción 5">
            </div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("about-tab").addEventListener("click", function() {
        document.getElementById("content").innerHTML = `
            <h1>Acerca de Nosotros</h1>
            <h2>Misión</h2>
            <p>"Somos una empresa distribuidora líder en la región, comprometida con llevar productos de alta calidad y soluciones integrales a cada rincón, sin importar la distancia. Nos destacamos por nuestra capacidad de llegar a donde otros no llegan, superando desafíos geográficos y logísticos para satisfacer las necesidades de nuestros clientes en zonas urbanas y rurales. Brindamos un servicio excepcional, personalizado y confiable, construyendo relaciones duraderas con nuestros clientes y contribuyendo al desarrollo económico y social de las comunidades que servimos."</p>
            <h2>Visión</h2>
            <p>"Ser la empresa distribuidora referente en la región, reconocida por nuestra excelencia en el servicio, la calidad de nuestros productos y nuestra capacidad única de llegar a zonas remotas. Buscamos expandir nuestra cobertura y fortalecer nuestra presencia en el mercado, manteniendo nuestro compromiso con la innovación, la sostenibilidad y el desarrollo de las comunidades a las que servimos. Queremos ser un aliado estratégico para nuestros clientes, impulsando su crecimiento y mejorando la calidad de vida de las personas en cada lugar donde llegamos."</p>
        `;
    });
});
