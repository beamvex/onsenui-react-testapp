#/bin/sh
npm run build

cp -r build/* MyApp/www/

cd MyApp

cordova run ios

