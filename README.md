# Projeto Plataforma Guarani 🟢🏹

Nesse repositório você vai encontrar variáveis CSS, mocks de APIs e arquivos de imagens necessários para a implementação do frontend.

___________________


## Variáveis CSS

Para facilitar a implementação das cores no projeto, seguem abaixo as variáveis CSS com o esquema de cores do front:
```css
:root {
  --color-background:#F3F3F3;
  --color-background-nav:#009245;
  --color-background-home:#344960;
  --color-text-light:#EDEDED;
  --color-text-title:#F7931E;
  --color-text-dark:#333232;
}
```

___________________

## Imagens

* **Logos GUARANI:**  
```
https://raw.githubusercontent.com/ilgneer/Guarani-Project/main/src/assets/images/logo1.png
https://raw.githubusercontent.com/ilgneer/Guarani-Project/main/src/assets/images/logo2.png
https://raw.githubusercontent.com/ilgneer/Guarani-Project/main/src/assets/images/logo3.png
```

* **Menu Mobile:**
```
https://raw.githubusercontent.com/ilgneer/Guarani-Project/main/src/assets/images/menu.svg
```

As imagens das redes sociais estarão disponíveis no response da API de `GET /social-links.json`;
___________________

## Mocks de APIs

Esse repositório será o endpoint das APIs do front, então é necessário configurar a seguinte URL como base:
```
https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/api
```

A partir dessa URL teremos os seguintes recursos:
* **Redes sociais** `GET /social-links.json`
* **Vídeos** `GET /videos.json`
* **Sobre** `GET /about.json`
* **Contatos** `GET /contacts.json`

___________________
