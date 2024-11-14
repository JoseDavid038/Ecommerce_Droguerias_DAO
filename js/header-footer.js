class specialHeader extends HTMLElement{
    connectedCallback(){
      this.innerHTML = `
          <header class="header">
            <section class="left-header">

            <div class="menu">
                <nav id = "nav">
                    <img src="assets/images/logo Dao.png" alt="" srcset="">
                    <ul>
                        <li><a href="#">Medicamentos</a></li>
                        <li><a href="#">Belleza</a></li>
                        <li><a href="#">Cuidado del bebé</a></li>
                        <li><a href="#">Cuidado personal</a></li>
                        <li><a href="#">Dermocosmetica</a></li>
                        <li><a href="#">Cuidado Gripal</a></li>
                        <li><a href="#">Contactanos</a></li>
                        <li><a href="#">Nosotros</a></li>
                    </ul>
                </nav>
            </div>
            <div class="bars__menu" id="btn_menu">
                    <span class="line1__bars-menu"></span>
                    <span class="line2__bars-menu"></span>
                    <span class="line3__bars-menu"></span>
        </div>
              <a href="index.html"><img class='logo-icon' src="assets/images/logo.webp" alt=""></a>
            </section> 

            <section class="center-header">
              <input class='input-search' type="text" placeholder="Hola, ¿Qué producto estás buscando?">
              <button class="button-search">Buscar</button>
            </section>

      
            <section class="right-header">
              <div class="left-icon">
                <img class='location-icon' src="assets/icons/location.webp" alt="">
                <p class="location-text">Popayan</p>
              </div>
              <div class="LoginIcon" id="LoginIcon">
              <i class="fa-solid fa-circle-user"></i>
              </div>
              <div class="user-text">
                    <p>Inicia</p>
                    <p>sesion</p>
              </div>
              <div class="right-icon">
                <img class='cart-icon' src="assets/icons/cart2.webp" alt="">
                <div class='quantity-cart'>0</div>
                <div class="user-text">
                  <p>&nbsp;&nbsp;&nbsp;Mi <br>Carrito</p>
                </div>
              </div>
            </section>
            <!-- <special-header></special-header>
            <special-footer></special-footer> -->
          
          </header>
          <section class="header2">

            <section class="nav-blue">
              <p>Medicamentos</p>
              <p>Belleza</p>
              <p>Cuidado del bebé</p>
              <p>Cuidado personal</p>
              <p>Dermocosmetica</p>
              <p>Cuidado Gripal</p>            
        
            </section>


          </section>
          
      `
      
        
    }            

}   
  
  

class specialFooter extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
        <footer class="footer">
          <section class="top-footer">
            <img class='image-footer' src="assets/images/image-footer.png" alt="">
            <div class="newsletter">
              <p class="text-newsletter">Suscribete a nuestro newsletter, <br> no te pierdas nuestras noticias y promociones</p>
              <input class='input-newsletter' type="text" placeholder="Ingresa tu correo electrónico">
              <button class="button-newsletter">Suscribirme</button>
              <p class="text2-newsletter">Acepto los terminos y condiciones y la politica de privacidad.</p>
            </div>
            
          </section>
          <section class="main-footer">
            <div class="column">

              <p class="title-footer">NUESTRAS TIENDAS</p>
              <p class="store-ubication">Ubicar Tienda</p>

              <p class="title-footer">NOSOTROS</p>
              <p>Calle 67 Norte N° 9-59</p>
              <p>Popayan, Colombia</p>
              <p>PBX: 60(2)8333020</p>
              <p>info@dao.com.co</p>

            </div>

            <div class="column">
              <p class="title-footer">CATEGORIAS</p>
              <p>Salud y medicamentos</p>
              <p>Belleza</p>
              <p>Cuidado del bebé</p>
              <p>Cuidado personal</p>
              <p>Dispositivos medicos</p>
              <p>Notidao</p>
              <p>Preguntas Frecuentes</p>

            </div>

            <div class="column">
              <p class="title-footer">OTROS LINKS</p>
              <p>Políticas de privacidad</p>
              <p>Terminos y condiciones</p>
              <p>Pólitica de tratamiento de datos personales</p>
              <p>Contacto</p>
              <p>Únete a nuestro equipo</p>
              <p>Portal de proveedores</p>
              <p>Protección al consumidor</p>

            </div>

            <!-- <div class="info-social-payment"> -->

              <div class="info-social">
                <p class="title-footer">SÍGUENOS EN</p>
                <div class="icons-footer">
                  <img class='image-icon-social' src="assets/icons/facebook.png" alt="">
                  <img class='image-icon-social' src="assets/icons/instagram.png" alt="">
                  <img class='image-icon-social3' src="assets/icons/linkedin.png" alt="">
                </div>
              </div>
              <div class="info-payment">
                <p class="title-footer">Medios de pago</p>
                <div class="icons-footer">
                  <img class='image-icon-social' src="assets/icons/visa-footer.svg" alt="">
                  <img class='image-icon-social' src="assets/icons/mc-footer.svg" alt="">
                  <img class='image-icon-social3' src="assets/icons/american-express-footer.svg" alt="">
                  <img class='image-icon-social3' src="assets/icons/contra-entrega-footer.svg" alt="">
                </div>
              </div>
            <!-- </div> -->
            
          </section>
          <section class="bottom-footer">
            <div class="info-footer">
              <p>@ 2024 Droguerias Alianza de Occidente S.A.S | Todos los derechos reservados .</p>
              <p>Diseñado por: Jose Gonzalez.</p>
            </div>
            

          </section>
        </footer>
      `
  }
}


customElements.define('special-header',specialHeader);
customElements.define('special-footer',specialFooter);