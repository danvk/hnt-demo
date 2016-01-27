To initialize this demo:

    cd 2-module
    npm install

To produce `sum.js` and `sum.js.map`:

    browserify --debug main.js | exorcist sum.js.map > sum.js

To produce `sum.min.js` and `sum.min.js.map`:

    uglifyjs sum.js \
    --compress \
    --mangle \
    --in-source-map sum.js.map \
    -o sum.min.js \
    --source-map sum.min.js.map \
    --source-map-include-sources
