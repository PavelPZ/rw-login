SystemJS.config({
  nodeConfig: {
    "paths": {
      "npm:": "jspm_packages/npm/",
      "local:": "jspm_packages/local/"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "local:*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.0",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "classnames": "npm:classnames@2.2.5",
    "cldr-data": "npm:cldr-data@30.0.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "core-js": "npm:core-js@2.4.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "dgram": "npm:jspm-nodelibs-dgram@0.2.0",
    "dns": "npm:jspm-nodelibs-dns@0.2.0",
    "domain": "npm:jspm-nodelibs-domain@0.2.0",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "globalize": "npm:globalize@1.1.2",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.1",
    "jodid25519": "npm:jodid25519@1.0.2",
    "jsbn": "npm:jsbn@0.1.0",
    "net": "npm:jspm-nodelibs-net@0.2.0",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.0",
    "react": "npm:react@15.3.2",
    "react-dom": "npm:react-dom@15.3.2",
    "rw-lib": "local:rw-lib@1.0.0",
    "rw-login": "local:rw-login@1.0.2",
    "rxjs": "npm:rxjs@5.0.0-rc.2",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "tls": "npm:jspm-nodelibs-tls@0.2.0",
    "tty": "npm:jspm-nodelibs-tty@0.2.0",
    "tweetnacl": "npm:tweetnacl@0.14.3",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.0"
  },
  packages: {
    "npm:react@15.3.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "loose-envify": "npm:loose-envify@1.3.0",
        "fbjs": "npm:fbjs@0.8.5"
      }
    },
    "npm:fbjs@0.8.5": {
      "map": {
        "core-js": "npm:core-js@1.2.7",
        "loose-envify": "npm:loose-envify@1.3.0",
        "object-assign": "npm:object-assign@4.1.0",
        "immutable": "npm:immutable@3.8.1",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.11",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1"
      }
    },
    "npm:loose-envify@1.3.0": {
      "map": {
        "js-tokens": "npm:js-tokens@2.0.0"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.5"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.1.5"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.6.3",
        "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "buffer-shims": "npm:buffer-shims@1.0.0"
      }
    },
    "npm:node-fetch@1.6.3": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.0": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.0": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.0": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.5.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.5",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.2.0",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "randombytes": "npm:randombytes@2.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "create-hmac": "npm:create-hmac@1.1.4",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.2"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "elliptic": "npm:elliptic@6.3.2"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-des": "npm:browserify-des@1.0.0"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.9.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "brorand": "npm:brorand@1.0.6",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "local:rw-lib@1.0.0": {
      "map": {
        "rxjs": "npm:rxjs@5.0.0-rc.2",
        "core-js": "npm:core-js@2.4.1",
        "react-dom": "npm:react-dom@15.3.2",
        "classnames": "npm:classnames@2.2.5",
        "globalize": "npm:globalize@1.1.2"
      }
    },
    "npm:stream-http@2.5.0": {
      "map": {
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "readable-stream": "npm:readable-stream@2.1.5",
        "xtend": "npm:xtend@4.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "local:rw-login@1.0.2": {
      "map": {
        "rw-lib": "local:rw-lib@1.0.0",
        "classnames": "npm:classnames@2.2.5",
        "react-dom": "npm:react-dom@15.3.2",
        "rxjs": "npm:rxjs@5.0.0-rc.2",
        "core-js": "npm:core-js@2.4.1",
        "rw-login": "local:rw-login@1.0.2"
      }
    },
    "npm:bcrypt-pbkdf@1.0.0": {
      "map": {
        "tweetnacl": "npm:tweetnacl@0.14.3"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:jodid25519@1.0.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:rxjs@5.0.0-rc.2": {
      "map": {
        "symbol-observable": "npm:symbol-observable@1.0.4"
      }
    },
    "npm:globalize@1.1.2": {
      "map": {
        "cldrjs": "npm:cldrjs@0.4.7"
      }
    },
    "npm:cldr-data@30.0.1": {
      "map": {
        "glob": "npm:glob@5.0.15",
        "cldr-data-downloader": "npm:cldr-data-downloader@0.2.5"
      }
    },
    "npm:glob@5.0.15": {
      "map": {
        "inflight": "npm:inflight@1.0.6",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "minimatch": "npm:minimatch@3.0.3",
        "once": "npm:once@1.4.0",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:cldr-data-downloader@0.2.5": {
      "map": {
        "nopt": "npm:nopt@3.0.6",
        "progress": "npm:progress@1.1.8",
        "request-progress": "npm:request-progress@0.3.1",
        "q": "npm:q@1.0.1",
        "adm-zip": "npm:adm-zip@0.4.4",
        "mkdirp": "npm:mkdirp@0.5.0",
        "npmconf": "npm:npmconf@2.0.9",
        "request": "npm:request@2.74.0"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:request-progress@0.3.1": {
      "map": {
        "throttleit": "npm:throttleit@0.0.2"
      }
    },
    "npm:nopt@3.0.6": {
      "map": {
        "abbrev": "npm:abbrev@1.0.9"
      }
    },
    "npm:brace-expansion@1.1.6": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:npmconf@2.0.9": {
      "map": {
        "once": "npm:once@1.3.3",
        "mkdirp": "npm:mkdirp@0.5.1",
        "nopt": "npm:nopt@3.0.6",
        "inherits": "npm:inherits@2.0.3",
        "ini": "npm:ini@1.3.4",
        "config-chain": "npm:config-chain@1.1.11",
        "osenv": "npm:osenv@0.1.3",
        "uid-number": "npm:uid-number@0.0.5",
        "semver": "npm:semver@4.3.6"
      }
    },
    "npm:mkdirp@0.5.0": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:asn1.js@4.9.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:config-chain@1.1.11": {
      "map": {
        "ini": "npm:ini@1.3.4",
        "proto-list": "npm:proto-list@1.2.4"
      }
    },
    "npm:request@2.74.0": {
      "map": {
        "stringstream": "npm:stringstream@0.0.5",
        "mime-types": "npm:mime-types@2.1.12",
        "caseless": "npm:caseless@0.11.0",
        "tough-cookie": "npm:tough-cookie@2.3.2",
        "qs": "npm:qs@6.2.1",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "isstream": "npm:isstream@0.1.2",
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "tunnel-agent": "npm:tunnel-agent@0.4.3",
        "hawk": "npm:hawk@3.1.3",
        "har-validator": "npm:har-validator@2.0.6",
        "bl": "npm:bl@1.1.2",
        "forever-agent": "npm:forever-agent@0.6.1",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "extend": "npm:extend@3.0.0",
        "http-signature": "npm:http-signature@1.1.1",
        "node-uuid": "npm:node-uuid@1.4.7",
        "form-data": "npm:form-data@1.0.1",
        "aws4": "npm:aws4@1.5.0"
      }
    },
    "npm:osenv@0.1.3": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.2",
        "os-tmpdir": "npm:os-tmpdir@1.0.2"
      }
    },
    "npm:tough-cookie@2.3.2": {
      "map": {
        "punycode": "npm:punycode@1.4.1"
      }
    },
    "npm:bl@1.1.2": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "hoek": "npm:hoek@2.16.3",
        "sntp": "npm:sntp@1.0.9",
        "cryptiles": "npm:cryptiles@2.0.5",
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:mime-types@2.1.12": {
      "map": {
        "mime-db": "npm:mime-db@1.24.0"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:readable-stream@2.0.6": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:form-data@1.0.1": {
      "map": {
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.12",
        "async": "npm:async@2.1.2"
      }
    },
    "npm:har-validator@2.0.6": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "chalk": "npm:chalk@1.1.3",
        "is-my-json-valid": "npm:is-my-json-valid@2.15.0",
        "commander": "npm:commander@2.9.0"
      }
    },
    "npm:http-signature@1.1.1": {
      "map": {
        "assert-plus": "npm:assert-plus@0.2.0",
        "sshpk": "npm:sshpk@1.10.1",
        "jsprim": "npm:jsprim@1.3.1"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:sshpk@1.10.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "asn1": "npm:asn1@0.2.3",
        "getpass": "npm:getpass@0.1.6",
        "dashdash": "npm:dashdash@1.14.0"
      }
    },
    "npm:is-my-json-valid@2.15.0": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "generate-object-property": "npm:generate-object-property@1.2.0",
        "jsonpointer": "npm:jsonpointer@4.0.0",
        "generate-function": "npm:generate-function@2.0.0"
      }
    },
    "npm:pinkie-promise@2.0.1": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:jsprim@1.3.1": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2",
        "verror": "npm:verror@1.3.6",
        "json-schema": "npm:json-schema@0.2.3"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0",
        "has-ansi": "npm:has-ansi@2.0.0",
        "ansi-styles": "npm:ansi-styles@2.2.1"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:verror@1.3.6": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:getpass@0.1.6": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:dashdash@1.14.0": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:async@2.1.2": {
      "map": {
        "lodash": "npm:lodash@4.16.6"
      }
    },
    "npm:generate-object-property@1.2.0": {
      "map": {
        "is-property": "npm:is-property@1.0.2"
      }
    }
  }
});
