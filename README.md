# CodeColosseumDesktop

This app in intended to be used as Graphic client for Code Colosseum     
https://github.com/dariost/CodeColosseum

## Install

TODO: Download a binary release

## Setup Development Environment 
The project by default is intended to be used with Visual Studio Code.
The app is a client and in order to be used it requires to connect to instance of CodeColosseum server (cocod).

Dependencies:
- Rust
- NodeJS
- TypeScript
- Angular
- Tauri
- CodeColosseum 

Instructions:
- [Ubuntu](doc/dev_setup_ubuntu.md)
- [Windows](doc/dev_setup_windows.md)

## Running the app

From the main folder of the app ( same location as package.json )     

Install node dependencies (run once):     
```bash
yarn install
```

To run the actuall app during development ( it autoreload when files are changed )     
Then navigate to `http://localhost:4200/`
```bash
yarn tauri dev
```

To build a "production" version, the build artifacts will be stored in the `dist/` directory and the tauri builded version will be located in `src-tauri/target` folder.
```bash
yarn tauri build
```

__This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.__
