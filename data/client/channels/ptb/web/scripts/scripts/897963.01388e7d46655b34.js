(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  [897963],
  {
    664294(r, t) {
      t.q = function (r, t) {
        if ("string" != typeof r)
          throw TypeError("argument str must be a string");
        var n = {},
          o = r.split(i),
          s = (t || {}).decode || e;
        return (
          o.forEach(function (r) {
            var t = r.indexOf("=");
            if (!(t < 0)) {
              var e = r.substr(0, t).trim(),
                i = r.substr(++t, r.length).trim();
              '"' == i[0] && (i = i.slice(1, -1)),
                void 0 == n[e] &&
                  (n[e] = (function (r, t) {
                    try {
                      return t(r);
                    } catch (t) {
                      return r;
                    }
                  })(i, s));
            }
          }),
          n
        );
      };
      var e = decodeURIComponent,
        n = encodeURIComponent,
        i = /; */;
    },
  },
]);
//# sourceMappingURL=897963.01388e7d46655b34.js.map
