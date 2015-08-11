VERSION=0.0.1

clean:
	@rm -rf ./build
	@mkdir -p ./build

linux:
	@electron-packager ./ Trello --platform=linux --arch=all --version=0.30.4 --icon=./Icon.png --app-bundle-id=com.urucas.trello --app-version=$VERSION --out=./build

darwin:
	@electron-packager ./ Trello --platform=darwin --arch=all --version=0.30.4 --icon=./Icon.icns --app-bundle-id=com.urucas.trello --app-version=$VERSION --out=./build

win32:
	@electron-packager ./ Trello --platform=win32 --arch=all --version=0.30.4 --icon=./Icon.png --app-bundle-id=com.urucas.trello --app-version=$VERSION --out=./build

all:
	make linux
	make darwin
	make win32
