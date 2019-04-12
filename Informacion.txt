                          ___   _   _  _____  _   _  _       ___  ______        ___
                         / _ \ | \ | ||  __ \| | | || |     / _ \ | ___ \      /   |
                        / /_\ \|  \| || |  \/| | | || |    / /_\ \| |_/ /     / /| |
                        |  _  || . ` || | __ | | | || |    |  _  ||    /     / /_| |
                        | | | || |\  || |_\ \| |_| || |____| | | || |\ \     \___  |
                        \_| |_/\_| \_/ \____/ \___/ \_____/\_| |_/\_| \_|        |_/

                      TRABAJO REALIZADO POR JESÚS DÍAZ MUÑOZ Y CRISTIAN CABRERA GONZÁLEZ
                              -----	CREA TU APLICACIÓN CON ANGULAR 4   -----

-----------------------------------------------------------------------------------------------------------


El siguiente proyecto trata la construcción de una aplicación web en el lenguaje Angular.
Para este proceso, se debe poseer un conocimiento previo en HTML, CSS y Javascript para
posteriormente poder hacer hincapié en el aprendizaje de Angular hasta poder llegar a
realizar una sencilla aplicación la cual servirá como primer proyecto de aprendizaje e iniciación en Angular 4.

¿Qué es Angular?
Angular es un framework de desarrollo basado en Javascript y creado por Google, el cual nos permite
el desarrollo de aplicaciones SPA y que nos permite trabajar con los elementos de la web de una manera óptima y sencilla.

¿Qué es una aplicación SPA?
Una aplicación SPA o Single Page Application es una aplicación web construida en una sola página
con el propósito de proporcionar una experiencia más fluida a los usuarios y adaptando una forma
parecida a la de una aplicación de escritorio. La navegación entre secciones y páginas pertenecientes
a la aplicación se hace de manera dinámica e instantánea resaltando que en ningún momento se recarga la
página ni carga otra página (puesto que además de por otras razones, la aplicación trabaja y fluye con una sola página).

¿Qué conocimientos previos se debe tener? ¿Qué versión de Angular usaremos?
Para comenzar a introducirnos en Angular, se recomienda tener un conocimiento previo en algunos campos como HTML, CSS,
Javascript, Typescript o DOM. Así mismo, Angular posee numerosas versiones con las que trabajar: AngularJS, Angular 2,
Angular 4, entre otras. Nosotros llevaremos a cabo este trabajo con la versión Angular 4.


-----------------------------------------------------------------------------------------------------------

IMPORTANTE: Antes de comenzar, se recomienda tener un servidor con un mínimo de 2 GB de RAM.
En caso de no tenerlo, se debería hacer un aumento de memoria swap para evitar que el rendimiento
de trabajo y tareas del servidor sea demasiado alto.

-----------------------------------------------------------------------------------------------------------


· INSTALACIÓN DE NODEJS + ANGULAR 4


1. Instalamos NodeJS desde https://nodejs.org/ con una versión superior a la versión 9 [SALTAR SI YA ESTÁ INSTALADO].


2. Abrimos el puerto 4200 en nuestro firewall. Este será el puerto que ocupe Angular y mediante el cual trabajaremos.


3. Abrimos línea de comandos con permisos de administrador e instalamos Angular-CLI.

                                          sudo npm install -g @angular/cli


4. Ahora nos situamos en el directorio donde queramos alojar nuestro proyecto de Angular (que en este caso está en un
directorio que he creado dentro de la carpeta /opt) y tras ello ejecutamos el siguiente comando:

                                            ng new <Nombre del proyecto>

Llegados a este paso, se nos pedirá si queremos usar el routing de Angular, le diremos que NO. Cuando se nos pida qué
CSS queremos usar, simplemente pulsamos "Enter".


5. Accedemos dentro del directorio del proyecto y comprobamos la versión de Angular JS.

                                                    ng version


6. Por último, ya solo nos queda arrancar el servicio de nuestra aplicación Angular. Al arrancarlo, Angular nos mostrará su
página por defecto aunque puedes probar a utilizar nuestro archivo "Hola Mundo" para comprobar el correcto funcionamiento
del proyecto.

                                          ng serve --host <Dirección IP servidor>

-----------------------------------------------------------------------------------------------------------
