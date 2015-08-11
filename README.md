# trello-desktop-app
Desktop app for trello in electron.js

#Usage
**Run**
```bash
git clone https://github.com/Urucas/trello-desktop-app.git && cd trello-desktop-app
npm install
npm start
```
**Build**
```bash
make clean && make darwin  // build osx version
make clean && make linux   // build linux version
make clean && make win32   // build windows version
make clean && make all     // build all platforms
```
all builds will be under the ```./build``` folder
