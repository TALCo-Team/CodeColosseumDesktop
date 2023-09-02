# Windows: Dev Setup

## Dependencies

- NodeJS
- Angular
- Primeng
- Marked
- Primeflex
- Primeicons
- Yarn
- CodeColosseum

<br>

## Installation

***Warning:*** run all the commands in the CodeColosseumDesktop directory for a successful installation.

### ***NodeJS***

Install NodeJS from this link ([NodeJS download](https://nodejs.org/it/download)) on your computer.

### ***PowerShell command***

To see if there are any updates for NodeJS run this command

```shell
     ng update
```

then follow the instructions to update the packages.

<br>

Install modules:

- Router

    ```shell
     ng add @angular/router
    ```

- Primeng

    ```shell
     npm install primeng --save --force
    ```

- Primeflex

    ```shell
     npm install primeflex --save --force
    ```

- Primeicons

    ```shell
     npm install primeicons --save --force
    ```

- Marked

    ```shell
     npm install marked --save --force
     npm i -save-dev @types/marked --force
    ```

If you have the vulnerability in npm fix them with this command:

```shell
    npm audit fix
```

after this retry to install modules.

### ***Yarn***

```shell
  npm install -g yarn
  yarn install
```

### ***Install CodeColosseum***

Installing Code Colosseum is similar to [TALight](https://github.com/romeorizzi/TALight/wiki/EN_Installation-on-Windows), but remember to edit the commands appropriately for Cod Colosseum. Also, CodeColosseum only has the release version and the coco and cocod commands.

### ***Last step***

Install **<u>Google Chrome</u>** and **<u>Visual Studio Code</u>** on your computer.

Start the program with command "*ng server*" in the run and debug section and "*cocod*" from the bash installed with git.

***Warning:*** if the program does not work properly, delete the "yarn.lock" file and restart the installation.
