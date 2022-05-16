# gulp-scss-starter

## :hammer_and_wrench: Установка
*
    * [Npm](https://docs.npmjs.com/cli/v8/commands/npm-install): ```npm i```
    * [Gulp](https://gulpjs.com/): ```npm i -g gulp```
    * [Bem Tools](https://www.npmjs.com/package/bem-tools-core): ```npm i -g bem-tools-core```

* щоб почати роботу, введіть команду ```npm run dev``` (режим разработки)
* щоб зібрати проект, введіть команду ```npm run build``` (режим сборки)

## :open_file_folder: Файлова структура

```
gulp-starter
├── dist
├── gulp-tasks
├── src
│   ├── components
│   ├── fonts
│   ├── img
│   ├── js
│   ├── styles
│   ├── views
│   └── .htaccess
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .yarnrc.yml
├── .babelrc.js
├── .bemrc.js
├── .eslintrc.json
├── .stylelintrc
├── .stylelintignore
└── .gitignore
```

* Корень папки:
    * ```.babelrc.js``` — настройки Babel
    * ```.bemrc.js``` — настройки БЕМ
    * ```.eslintrc.json``` — настройки ESLint
    * ```.gitignore``` – заборона на відстежування Git'ом
    * ```.stylelintrc``` — настройки Stylelint
    * ```.stylelintignore``` – заборона на відстежування Stylelint'ом
    * ```gulpfile.babel.js``` — настройки Gulp
    * ```webpack.config.js``` — настройки Webpack
    * ```package.json``` — список залежностей
* Папка ```src``` - используется во время разработки:
    * БЕМ-блоки: ```src/components```
    * шрифти: ```src/fonts```
    * жображення: ```src/img```
    * JS-файли: ```src/js```
    * сторінки сайту: ```src/views/pages```
    * SCSS-файли: ```src/styles```
    * HTML-файли: ```src/views```
* Папка ```dist```
* Папка ```gulp-tasks``` - папка с Gulp-тасками

## :keyboard: Команды
* ```npm run lint:styles``` - перевірити SCSS-файлs. Для VSCode потрібно встановити [плагин](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint). Для WebStorm
або PHPStorm потрібно включити Stylelint в ```Languages & Frameworks - Style Sheets - Stylelint```
* ```npm run dev``` - запуск сервера 
* ```npm run build``` - зібрати проект без запуска сервера
* ```npm run build:views``` - зібрати HTML-файлы
* ```npm run build:styles``` - скомпілювати SCSS-файлы
* ```npm run build:scripts``` - зібрати JS-файлы
* ```npm run build:webp``` - сконвертувати жображення в формат ```.webp```
* ```npm run build:sprites```- зібрати спрайти
* ```npm run build:fonts``` - зібрати шрифти
* ```npm run bem-m``` - добавити БЕМ-блок
* ```npm run lint:styles --fix``` - виправити помилки в SCSS-файлах
* ```npm run lint:scripts``` - перевірити JS-файли
* ```npm run lint:scripts --fix``` - виправити помилки в JS-файлах згідно настройкам ESLint


### Компонентный подход к разработке сайтов

Приклад структури с ЕЭМ-блоком:
```
components
├── modules
│   ├──header
│   │   ├── header.html
│   │   ├── header.js
│   │   ├── header.scss
```

Створити БЕМ-блок: ```npm run bem-m my-block``` 


### SVG-спрайти
Для створення спрайтів зображення ```.svg``` повинні знаходитись в папці ```src/img/sprites```. Наприклад якщо в нас є ```icon-1.svg```, ```icon-2.svg``` і ```icon-3.svg```, і ми повинні звернутись ```icon-2.svg```. Для цього в HTML треба скористатись тегом ```<use>```:
```html
<svg>
    <use xlink:href="img/sprites/sprite.svg#logo"></use>
</svg>
```
Змінити стилі svg-іконки із спрайта в CSS:
```css
svg use {
    fill: red;
}
```
Якщо стилі іконки не змінюються це зв'язано з тим що з Figma імпортувались стилі  fill Наприклад:
```html
<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.90918 4.04542L13.091 9.54088L4.90918 14.9545L4.90918 4.04542Z" fill="#1B1B1D"/>
</svg>
```
Потрібно видалити ```fill="none"``` і ```fill="#1B1B1D"```. Повинно вийти так:
```html
<svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.90918 4.04542L13.091 9.54088L4.90918 14.9545L4.90918 4.04542Z"/>
</svg> 
```

