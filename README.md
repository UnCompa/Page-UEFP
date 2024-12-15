# Pagina web para la unidad educativa fiscal pichincha

Antes de empezar tener estas herramientas disponibles

- Nodejs
- Git

## Instalar Nodejs

Visitar la [Pagina oficial de NodeJs](https://nodejs.org/en/) y descargar la version lts dando [click aqui](https://nodejs.org/dist/v22.12.0/node-v22.12.0-x64.msi)

Usar el instalador y dar siguiente en todo, para validar abre una terminal y ejecuta el comando

```bash
node --version
```

Tendra una salida con la version

```basg
v20.17.0
```

## Instalar Git

Git es un gestor de versiones, ademas se usara github para el proyecto

Visitar la pagina y decargar la version para su sistema operativo [Click aqui](https://git-scm.com/downloads)

Para validar si tiene git abrir la terminal y ejecutar

```bash
git --version
```

## Descargar el proyecto

Para descargar el proyecto se puede descargar el **ZIP** o usar git, usando este comando se clona el proyecto

```bash
git clone https://github.com/UnCompa/Page-UEFP.git
```

Esto creara una carpeta, dentro estara el proyecto

## Para desarrollar

Luego de modificar el proyecto, puede empezar a desarrollar usando los siguientes comandos

> Debe estar en la carpeta raiz, donde este un archivo **package.json**

Abrir la terminar y ejecutar:

Para desarrollar esta este comando
```bash
npm run dev
```

Para empaquetar el proyecto usar

```bash
npm run build
```

Para vizualizar el proyecto:

```bash
npm run preview
```