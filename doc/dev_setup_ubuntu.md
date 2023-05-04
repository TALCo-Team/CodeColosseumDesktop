# Ubuntu: Dev Setup

Dependencies:
- Rust
- NodeJS
- TypeScript
- Angular
- Tauri
- CodeColosseum 

- Rust
```bash
  sudo apt update
  sudo apt install libwebkit2gtk-4.0-dev \
      build-essential \
      curl \
      wget \
      libssl-dev \
      libgtk-3-dev \
      libayatana-appindicator3-dev \
      librsvg2-dev
  curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

- NodeJS
```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
  source ~/.bashrc
  nvm list-remote
  nvm install --lts
```
  
- TypeScript
```bash
  npm install -g typescript
```

Angular
```bash
  npm install -g @angular/cli
```

CodeColosseum ( for the server ) 
```bash
  sudo apt install cargo
  source install_coco.sh
  ./cocod
```
