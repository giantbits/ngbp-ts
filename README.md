# ngbp-ts
ngBoilerplate using TypeScript (with tsd).
Based on the great work https://github.com/ngbp/ngbp and also including https://github.com/basarat/todomvc-typescript for demo effect.

Work in progress!

Currently only "build" and "compile" tasks are working - no "watch"!

***

## Quick Start

Install Node.js and then:

```sh
$ git clone git://github.com/sgudis/ngbp-ts
$ cd ng-boilerplate
$ sudo npm -g install grunt-cli karma bower
$ npm install
$ npm install tsd -g (sudo @ unix) // Optional if tsd is not installed correctly.
$ bower install
$ grunt tsdrefresh // Use this to get the latest DefinitelyTyped definitions.
$ grunt
```

***

Watch for DI! The current version should give you enough to get started and enjoy hassle-free uglification.
