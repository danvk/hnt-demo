To produce sum.min.js without a source map:

    uglifyjs sum.js --compress --mangle -o sum.min.js

To produce sum.min.js with a source map:

    uglifyjs sum.js --compress --mangle -o sum.min.js --source-map sum.min.js.map
