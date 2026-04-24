(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16887"],
  {
    354729(t, e) {
      "use strict";
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var n,
        o = "basil",
        i = "https://js.stripe.com",
        a = "".concat(i, "/").concat(o, "/stripe.js"),
        s = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        u = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,
        l =
          "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
        c = function () {
          for (
            var t = document.querySelectorAll('script[src^="'.concat(i, '"]')),
              e = 0;
            e < t.length;
            e++
          ) {
            var r,
              n = t[e];
            if (((r = n.src), s.test(r) || u.test(r))) return n;
          }
          return null;
        },
        f = function (t) {
          var e =
              t && !t.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
            r = document.createElement("script");
          r.src = "".concat(a).concat(e);
          var n = document.head || document.body;
          if (!n)
            throw Error(
              "Expected document.body not to be null. Stripe.js requires a <body> element.",
            );
          return n.appendChild(r), r;
        },
        p = function (t, e) {
          t &&
            t._registerWrapper &&
            t._registerWrapper({
              name: "stripe-js",
              version: "7.3.1",
              startTime: e,
            });
        },
        h = null,
        d = null,
        m = null,
        v = function (t, e, r) {
          if (null === t) return null;
          var n,
            i = e[0].match(/^pk_test/),
            a = 3 === (n = t.version) ? "v3" : n;
          i &&
            a !== o &&
            console.warn(
              "Stripe.js@"
                .concat(a, " was loaded on the page, but @stripe/stripe-js@")
                .concat("7.3.1", " expected Stripe.js@")
                .concat(
                  o,
                  ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning",
                ),
            );
          var s = t.apply(void 0, e);
          return p(s, r), s;
        },
        y = function (t) {
          var e =
            "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(
              JSON.stringify(t),
              "\n",
            );
          if (null === t || "object" !== r(t)) throw Error(e);
          if (
            1 === Object.keys(t).length &&
            "boolean" == typeof t.advancedFraudSignals
          )
            return t;
          throw Error(e);
        },
        g = !1,
        b = function () {
          for (var t, e = arguments.length, r = Array(e), o = 0; o < e; o++)
            r[o] = arguments[o];
          g = !0;
          var i = Date.now();
          return ((t = n),
          null !== h
            ? h
            : (h = new Promise(function (e, r) {
                if ("u" < typeof window || "u" < typeof document)
                  return void e(null);
                if ((window.Stripe && t && console.warn(l), window.Stripe))
                  return void e(window.Stripe);
                try {
                  var n,
                    o = c();
                  o && t
                    ? console.warn(l)
                    : o
                      ? o &&
                        null !== m &&
                        null !== d &&
                        (o.removeEventListener("load", m),
                        o.removeEventListener("error", d),
                        null == (n = o.parentNode) || n.removeChild(o),
                        (o = f(t)))
                      : (o = f(t)),
                    (m = function () {
                      window.Stripe
                        ? e(window.Stripe)
                        : r(Error("Stripe.js not available"));
                    }),
                    (d = function (t) {
                      r(Error("Failed to load Stripe.js", { cause: t }));
                    }),
                    o.addEventListener("load", m),
                    o.addEventListener("error", d);
                } catch (t) {
                  r(t);
                  return;
                }
              })).catch(function (t) {
                return (h = null), Promise.reject(t);
              })).then(function (t) {
            return v(t, r, i);
          });
        };
      (b.setLoadParameters = function (t) {
        if (
          !(
            g &&
            n &&
            Object.keys(y(t)).reduce(function (e, r) {
              var o;
              return e && t[r] === (null == (o = n) ? void 0 : o[r]);
            }, !0)
          )
        ) {
          if (g)
            throw Error(
              "You cannot change load parameters after calling loadStripe",
            );
          n = y(t);
        }
      }),
        (e.loadStripe = b);
    },
    832081(t, e, r) {
      t.exports = r(354729);
    },
    827762(t, e) {
      "use strict";
      (e.byteLength = function (t) {
        var e = u(t),
          r = e[0],
          n = e[1];
        return ((r + n) * 3) / 4 - n;
      }),
        (e.toByteArray = function (t) {
          var e,
            r,
            i = u(t),
            a = i[0],
            s = i[1],
            l = new o(((a + s) * 3) / 4 - s),
            c = 0,
            f = s > 0 ? a - 4 : a;
          for (r = 0; r < f; r += 4)
            (e =
              (n[t.charCodeAt(r)] << 18) |
              (n[t.charCodeAt(r + 1)] << 12) |
              (n[t.charCodeAt(r + 2)] << 6) |
              n[t.charCodeAt(r + 3)]),
              (l[c++] = (e >> 16) & 255),
              (l[c++] = (e >> 8) & 255),
              (l[c++] = 255 & e);
          return (
            2 === s &&
              ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
              (l[c++] = 255 & e)),
            1 === s &&
              ((e =
                (n[t.charCodeAt(r)] << 10) |
                (n[t.charCodeAt(r + 1)] << 4) |
                (n[t.charCodeAt(r + 2)] >> 2)),
              (l[c++] = (e >> 8) & 255),
              (l[c++] = 255 & e)),
            l
          );
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, n = t.length, o = n % 3, i = [], a = 0, s = n - o;
            a < s;
            a += 16383
          )
            i.push(
              (function (t, e, n) {
                for (var o, i = [], a = e; a < n; a += 3)
                  (o =
                    ((t[a] << 16) & 0xff0000) +
                    ((t[a + 1] << 8) & 65280) +
                    (255 & t[a + 2])),
                    i.push(
                      r[(o >> 18) & 63] +
                        r[(o >> 12) & 63] +
                        r[(o >> 6) & 63] +
                        r[63 & o],
                    );
                return i.join("");
              })(t, a, a + 16383 > s ? s : a + 16383),
            );
          return (
            1 === o
              ? i.push(r[(e = t[n - 1]) >> 2] + r[(e << 4) & 63] + "==")
              : 2 === o &&
                i.push(
                  r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] +
                    r[(e >> 4) & 63] +
                    r[(e << 2) & 63] +
                    "=",
                ),
            i.join("")
          );
        });
      for (
        var r = [],
          n = [],
          o = "u" > typeof Uint8Array ? Uint8Array : Array,
          i =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          a = 0,
          s = i.length;
        a < s;
        ++a
      )
        (r[a] = i[a]), (n[i.charCodeAt(a)] = a);
      function u(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        -1 === r && (r = e);
        var n = r === e ? 0 : 4 - (r % 4);
        return [r, n];
      }
      (n[45] = 62), (n[95] = 63);
    },
    791282(t) {
      t.exports = function (t) {
        for (
          var e = -1, r = null == t ? 0 : t.length, n = 0, o = [];
          ++e < r;

        ) {
          var i = t[e];
          i && (o[n++] = i);
        }
        return o;
      };
    },
    450873(t, e, r) {
      var n = r(59221),
        o = r(400095),
        i = Object.prototype.hasOwnProperty;
      t.exports = o(function (t, e, r) {
        i.call(t, r) ? ++t[r] : n(t, r, 1);
      });
    },
    296489(t, e, r) {
      var n = r(659671),
        o = 0;
      t.exports = function (t) {
        var e = ++o;
        return n(t) + e;
      };
    },
    656470(t, e, r) {
      var n = r(410028);
      t.exports = function (t) {
        return (null == t ? 0 : t.length) ? n(t, 1) : [];
      };
    },
    353719(t, e, r) {
      var n = r(271434);
      (t.exports = function t(e, r, o) {
        if (
          (n(r) || ((o = r || o), (r = [])), (o = o || {}), e instanceof RegExp)
        ) {
          var a,
            s,
            u = r,
            f = e.source.match(/\((?!\?)/g);
          if (f)
            for (var p = 0; p < f.length; p++)
              u.push({
                name: p,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                partial: !1,
                asterisk: !1,
                pattern: null,
              });
          return (e.keys = u), e;
        }
        if (n(e)) {
          for (var h, d = r, m = o, v = [], y = 0; y < e.length; y++)
            v.push(t(e[y], d, m).source);
          return ((h = RegExp("(?:" + v.join("|") + ")", l(m))).keys = d), h;
        }
        return (a = r), c(i(e, (s = o)), a, s);
      }),
        (t.exports.parse = i),
        (t.exports.compile = function (t, e) {
          return s(i(t, e));
        }),
        (t.exports.tokensToFunction = s),
        (t.exports.tokensToRegExp = c);
      var o = RegExp(
        "(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        "g",
      );
      function i(t, e) {
        for (
          var r, n = [], i = 0, a = 0, s = "", l = (e && e.delimiter) || "/";
          null != (r = o.exec(t));

        ) {
          var c = r[0],
            f = r[1],
            p = r.index;
          if (((s += t.slice(a, p)), (a = p + c.length), f)) {
            s += f[1];
            continue;
          }
          var h = t[a],
            d = r[2],
            m = r[3],
            v = r[4],
            y = r[5],
            g = r[6],
            b = r[7];
          s && (n.push(s), (s = ""));
          var x = null != d && null != h && h !== d,
            E = "+" === g || "*" === g,
            w = "?" === g || "*" === g,
            S = r[2] || l,
            A = v || y;
          n.push({
            name: m || i++,
            prefix: d || "",
            delimiter: S,
            optional: w,
            repeat: E,
            partial: x,
            asterisk: !!b,
            pattern: A
              ? A.replace(/([=!:$\/()])/g, "\\$1")
              : b
                ? ".*"
                : "[^" + u(S) + "]+?",
          });
        }
        return a < t.length && (s += t.substr(a)), s && n.push(s), n;
      }
      function a(t) {
        return encodeURI(t).replace(/[\/?#]/g, function (t) {
          return "%" + t.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function s(t) {
        for (var e = Array(t.length), r = 0; r < t.length; r++)
          "object" == typeof t[r] &&
            (e[r] = RegExp("^(?:" + t[r].pattern + ")$"));
        return function (r, o) {
          for (
            var i = "",
              s = r || {},
              u = (o || {}).pretty ? a : encodeURIComponent,
              l = 0;
            l < t.length;
            l++
          ) {
            var c,
              f = t[l];
            if ("string" == typeof f) {
              i += f;
              continue;
            }
            var p = s[f.name];
            if (null == p)
              if (f.optional) {
                f.partial && (i += f.prefix);
                continue;
              } else throw TypeError('Expected "' + f.name + '" to be defined');
            if (n(p)) {
              if (!f.repeat)
                throw TypeError(
                  'Expected "' +
                    f.name +
                    '" to not repeat, but received `' +
                    JSON.stringify(p) +
                    "`",
                );
              if (0 === p.length)
                if (f.optional) continue;
                else
                  throw TypeError('Expected "' + f.name + '" to not be empty');
              for (var h = 0; h < p.length; h++) {
                if (((c = u(p[h])), !e[l].test(c)))
                  throw TypeError(
                    'Expected all "' +
                      f.name +
                      '" to match "' +
                      f.pattern +
                      '", but received `' +
                      JSON.stringify(c) +
                      "`",
                  );
                i += (0 === h ? f.prefix : f.delimiter) + c;
              }
              continue;
            }
            if (
              ((c = f.asterisk
                ? encodeURI(p).replace(/[?#]/g, function (t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
                  })
                : u(p)),
              !e[l].test(c))
            )
              throw TypeError(
                'Expected "' +
                  f.name +
                  '" to match "' +
                  f.pattern +
                  '", but received "' +
                  c +
                  '"',
              );
            i += f.prefix + c;
          }
          return i;
        };
      }
      function u(t) {
        return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
      }
      function l(t) {
        return t.sensitive ? "" : "i";
      }
      function c(t, e, r) {
        n(e) || ((r = e || r), (e = []));
        for (
          var o, i = (r = r || {}).strict, a = !1 !== r.end, s = "", c = 0;
          c < t.length;
          c++
        ) {
          var f = t[c];
          if ("string" == typeof f) s += u(f);
          else {
            var p = u(f.prefix),
              h = "(?:" + f.pattern + ")";
            e.push(f),
              f.repeat && (h += "(?:" + p + h + ")*"),
              (s += h =
                f.optional
                  ? f.partial
                    ? p + "(" + h + ")?"
                    : "(?:" + p + "(" + h + "))?"
                  : p + "(" + h + ")");
          }
        }
        var d = u(r.delimiter || "/"),
          m = s.slice(-d.length) === d;
        return (
          i || (s = (m ? s.slice(0, -d.length) : s) + "(?:" + d + "(?=$))?"),
          a ? (s += "$") : (s += i && m ? "" : "(?=" + d + "|$)"),
          ((o = RegExp("^" + s, l(r))).keys = e),
          o
        );
      }
    },
    492462(t, e, r) {
      "use strict";
      var n = r(948055),
        o = r(724039),
        i = r(389293);
      function a(t, e) {
        return e.encode ? (e.strict ? n(t) : encodeURIComponent(t)) : t;
      }
      (e.extract = function (t) {
        return t.split("?")[1] || "";
      }),
        (e.parse = function (t, e) {
          var r = (function (t) {
              var e;
              switch (t.arrayFormat) {
                case "index":
                  return function (t, r, n) {
                    if (
                      ((e = /\[(\d*)\]$/.exec(t)),
                      (t = t.replace(/\[\d*\]$/, "")),
                      !e)
                    ) {
                      n[t] = r;
                      return;
                    }
                    void 0 === n[t] && (n[t] = {}), (n[t][e[1]] = r);
                  };
                case "bracket":
                  return function (t, r, n) {
                    if (
                      ((e = /(\[\])$/.exec(t)), (t = t.replace(/\[\]$/, "")), e)
                    ) {
                      if (void 0 === n[t]) {
                        n[t] = [r];
                        return;
                      }
                    } else {
                      n[t] = r;
                      return;
                    }
                    n[t] = [].concat(n[t], r);
                  };
                default:
                  return function (t, e, r) {
                    if (void 0 === r[t]) {
                      r[t] = e;
                      return;
                    }
                    r[t] = [].concat(r[t], e);
                  };
              }
            })((e = o({ arrayFormat: "none" }, e))),
            n = Object.create(null);
          return "string" == typeof t && (t = t.trim().replace(/^(\?|#|&)/, ""))
            ? (t.split("&").forEach(function (t) {
                var e = t.replace(/\+/g, " ").split("="),
                  o = e.shift(),
                  a = e.length > 0 ? e.join("=") : void 0;
                (a = void 0 === a ? null : i(a)), r(i(o), a, n);
              }),
              Object.keys(n)
                .sort()
                .reduce(function (t, e) {
                  var r = n[e];
                  return (
                    r && "object" == typeof r && !Array.isArray(r)
                      ? (t[e] = (function t(e) {
                          return Array.isArray(e)
                            ? e.sort()
                            : "object" == typeof e
                              ? t(Object.keys(e))
                                  .sort(function (t, e) {
                                    return Number(t) - Number(e);
                                  })
                                  .map(function (t) {
                                    return e[t];
                                  })
                              : e;
                        })(r))
                      : (t[e] = r),
                    t
                  );
                }, Object.create(null)))
            : n;
        }),
        (e.stringify = function (t, e) {
          var r = (function (t) {
            switch (t.arrayFormat) {
              case "index":
                return function (e, r, n) {
                  return null === r
                    ? [a(e, t), "[", n, "]"].join("")
                    : [a(e, t), "[", a(n, t), "]=", a(r, t)].join("");
                };
              case "bracket":
                return function (e, r) {
                  return null === r
                    ? a(e, t)
                    : [a(e, t), "[]=", a(r, t)].join("");
                };
              default:
                return function (e, r) {
                  return null === r
                    ? a(e, t)
                    : [a(e, t), "=", a(r, t)].join("");
                };
            }
          })((e = o({ encode: !0, strict: !0, arrayFormat: "none" }, e)));
          return t
            ? Object.keys(t)
                .sort()
                .map(function (n) {
                  var o = t[n];
                  if (void 0 === o) return "";
                  if (null === o) return a(n, e);
                  if (Array.isArray(o)) {
                    var i = [];
                    return (
                      o.slice().forEach(function (t) {
                        void 0 !== t && i.push(r(n, t, i.length));
                      }),
                      i.join("&")
                    );
                  }
                  return a(n, e) + "=" + a(o, e);
                })
                .filter(function (t) {
                  return t.length > 0;
                })
                .join("&")
            : "";
        });
    },
    488428(t, e, r) {
      "use strict";
      (e.decode = e.parse = r(973784)), (e.encode = e.stringify = r(998736));
    },
    145575(t, e) {
      "use strict";
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        i = r ? Symbol.for("react.fragment") : 60107,
        a = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        u = r ? Symbol.for("react.provider") : 60109,
        l = r ? Symbol.for("react.context") : 60110,
        c = r ? Symbol.for("react.async_mode") : 60111,
        f = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        h = r ? Symbol.for("react.suspense") : 60113,
        d = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        v = r ? Symbol.for("react.lazy") : 60116,
        y = r ? Symbol.for("react.block") : 60121,
        g = r ? Symbol.for("react.fundamental") : 60117,
        b = r ? Symbol.for("react.responder") : 60118,
        x = r ? Symbol.for("react.scope") : 60119;
      function E(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case n:
              switch ((t = t.type)) {
                case c:
                case f:
                case i:
                case s:
                case a:
                case h:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case l:
                    case p:
                    case v:
                    case m:
                    case u:
                      return t;
                    default:
                      return e;
                  }
              }
            case o:
              return e;
          }
        }
      }
      function w(t) {
        return E(t) === f;
      }
      (e.AsyncMode = c),
        (e.ConcurrentMode = f),
        (e.ContextConsumer = l),
        (e.ContextProvider = u),
        (e.Element = n),
        (e.ForwardRef = p),
        (e.Fragment = i),
        (e.Lazy = v),
        (e.Memo = m),
        (e.Portal = o),
        (e.Profiler = s),
        (e.StrictMode = a),
        (e.Suspense = h),
        (e.isAsyncMode = function (t) {
          return w(t) || E(t) === c;
        }),
        (e.isConcurrentMode = w),
        (e.isContextConsumer = function (t) {
          return E(t) === l;
        }),
        (e.isContextProvider = function (t) {
          return E(t) === u;
        }),
        (e.isElement = function (t) {
          return "object" == typeof t && null !== t && t.$$typeof === n;
        }),
        (e.isForwardRef = function (t) {
          return E(t) === p;
        }),
        (e.isFragment = function (t) {
          return E(t) === i;
        }),
        (e.isLazy = function (t) {
          return E(t) === v;
        }),
        (e.isMemo = function (t) {
          return E(t) === m;
        }),
        (e.isPortal = function (t) {
          return E(t) === o;
        }),
        (e.isProfiler = function (t) {
          return E(t) === s;
        }),
        (e.isStrictMode = function (t) {
          return E(t) === a;
        }),
        (e.isSuspense = function (t) {
          return E(t) === h;
        }),
        (e.isValidElementType = function (t) {
          return (
            "string" == typeof t ||
            "function" == typeof t ||
            t === i ||
            t === f ||
            t === s ||
            t === a ||
            t === h ||
            t === d ||
            ("object" == typeof t &&
              null !== t &&
              (t.$$typeof === v ||
                t.$$typeof === m ||
                t.$$typeof === u ||
                t.$$typeof === l ||
                t.$$typeof === p ||
                t.$$typeof === g ||
                t.$$typeof === b ||
                t.$$typeof === x ||
                t.$$typeof === y))
          );
        }),
        (e.typeOf = E);
    },
    873263(t, e, r) {
      "use strict";
      r.d(e, {
        B6: () => C,
        Ix: () => y,
        W5: () => _,
        W6: () => F,
        XZ: () => v,
        dO: () => $,
        g: () => k,
        qh: () => j,
        rd: () => w,
        zy: () => M,
      });
      var n = r(750573),
        o = r(64700),
        i = r(655972),
        a = r.n(i),
        s = r(313649),
        u = r(258635),
        l = r(542113),
        c = r(353719),
        f = r.n(c);
      r(53635), r(725664), r(833871);
      var p =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
              ? window
              : void 0 !== r.g
                ? r.g
                : {},
        h =
          o.createContext ||
          function (t, e) {
            var r,
              i,
              s =
                "__create-react-context-" +
                (p.__global_unique_id__ = (p.__global_unique_id__ || 0) + 1) +
                "__",
              u = (function (t) {
                function r() {
                  for (
                    var e, r, n, o = arguments.length, i = Array(o), a = 0;
                    a < o;
                    a++
                  )
                    i[a] = arguments[a];
                  return (
                    (r = (e = t.call.apply(t, [this].concat(i)) || this).props
                      .value),
                    (n = []),
                    (e.emitter = {
                      on: function (t) {
                        n.push(t);
                      },
                      off: function (t) {
                        n = n.filter(function (e) {
                          return e !== t;
                        });
                      },
                      get: function () {
                        return r;
                      },
                      set: function (t, e) {
                        (r = t),
                          n.forEach(function (t) {
                            return t(r, e);
                          });
                      },
                    }),
                    e
                  );
                }
                (0, n.A)(r, t);
                var o = r.prototype;
                return (
                  (o.getChildContext = function () {
                    var t;
                    return ((t = {})[s] = this.emitter), t;
                  }),
                  (o.componentWillReceiveProps = function (t) {
                    if (this.props.value !== t.value) {
                      var r,
                        n = this.props.value,
                        o = t.value;
                      (n === o ? 0 !== n || 1 / n == 1 / o : n != n && o != o)
                        ? (r = 0)
                        : 0 !=
                            (r =
                              ("function" == typeof e ? e(n, o) : 0x3fffffff) |
                              0) && this.emitter.set(t.value, r);
                    }
                  }),
                  (o.render = function () {
                    return this.props.children;
                  }),
                  r
                );
              })(o.Component);
            ((r = {})[s] = a().object.isRequired), (u.childContextTypes = r);
            var l = (function (e) {
              function r() {
                for (
                  var t, r = arguments.length, n = Array(r), o = 0;
                  o < r;
                  o++
                )
                  n[o] = arguments[o];
                return (
                  ((t =
                    e.call.apply(e, [this].concat(n)) || this).observedBits =
                    void 0),
                  (t.state = { value: t.getValue() }),
                  (t.onUpdate = function (e, r) {
                    (t.observedBits & r) != 0 &&
                      t.setState({ value: t.getValue() });
                  }),
                  t
                );
              }
              (0, n.A)(r, e);
              var o = r.prototype;
              return (
                (o.componentWillReceiveProps = function (t) {
                  var e = t.observedBits;
                  this.observedBits = null == e ? 0x3fffffff : e;
                }),
                (o.componentDidMount = function () {
                  this.context[s] && this.context[s].on(this.onUpdate);
                  var t = this.props.observedBits;
                  this.observedBits = null == t ? 0x3fffffff : t;
                }),
                (o.componentWillUnmount = function () {
                  this.context[s] && this.context[s].off(this.onUpdate);
                }),
                (o.getValue = function () {
                  return this.context[s] ? this.context[s].get() : t;
                }),
                (o.render = function () {
                  var t;
                  return (Array.isArray((t = this.props.children)) ? t[0] : t)(
                    this.state.value,
                  );
                }),
                r
              );
            })(o.Component);
            return (
              ((i = {})[s] = a().object),
              (l.contextTypes = i),
              { Provider: u, Consumer: l }
            );
          },
        d = function (t) {
          var e = h();
          return (e.displayName = t), e;
        },
        m = d("Router-History"),
        v = d("Router"),
        y = (function (t) {
          function e(e) {
            var r;
            return (
              ((r = t.call(this, e) || this).state = {
                location: e.history.location,
              }),
              (r._isMounted = !1),
              (r._pendingLocation = null),
              e.staticContext ||
                (r.unlisten = e.history.listen(function (t) {
                  r._pendingLocation = t;
                })),
              r
            );
          }
          (0, n.A)(e, t),
            (e.computeRootMatch = function (t) {
              return { path: "/", url: "/", params: {}, isExact: "/" === t };
            });
          var r = e.prototype;
          return (
            (r.componentDidMount = function () {
              var t = this;
              (this._isMounted = !0),
                this.unlisten && this.unlisten(),
                this.props.staticContext ||
                  (this.unlisten = this.props.history.listen(function (e) {
                    t._isMounted && t.setState({ location: e });
                  })),
                this._pendingLocation &&
                  this.setState({ location: this._pendingLocation });
            }),
            (r.componentWillUnmount = function () {
              this.unlisten &&
                (this.unlisten(),
                (this._isMounted = !1),
                (this._pendingLocation = null));
            }),
            (r.render = function () {
              return o.createElement(
                v.Provider,
                {
                  value: {
                    history: this.props.history,
                    location: this.state.location,
                    match: e.computeRootMatch(this.state.location.pathname),
                    staticContext: this.props.staticContext,
                  },
                },
                o.createElement(m.Provider, {
                  children: this.props.children || null,
                  value: this.props.history,
                }),
              );
            }),
            e
          );
        })(o.Component);
      o.Component;
      var g = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          (0, n.A)(e, t);
          var r = e.prototype;
          return (
            (r.componentDidMount = function () {
              this.props.onMount && this.props.onMount.call(this, this);
            }),
            (r.componentDidUpdate = function (t) {
              this.props.onUpdate && this.props.onUpdate.call(this, this, t);
            }),
            (r.componentWillUnmount = function () {
              this.props.onUnmount && this.props.onUnmount.call(this, this);
            }),
            (r.render = function () {
              return null;
            }),
            e
          );
        })(o.Component),
        b = {},
        x = 0;
      function E(t, e) {
        return (
          void 0 === t && (t = "/"),
          void 0 === e && (e = {}),
          "/" === t
            ? t
            : (function (t) {
                if (b[t]) return b[t];
                var e = f().compile(t);
                return x < 1e4 && ((b[t] = e), x++), e;
              })(t)(e, { pretty: !0 })
        );
      }
      function w(t) {
        var e = t.computedMatch,
          r = t.to,
          n = t.push,
          i = void 0 !== n && n;
        return o.createElement(v.Consumer, null, function (t) {
          t || (0, u.A)(!1);
          var n = t.history,
            a = t.staticContext,
            c = i ? n.push : n.replace,
            f = (0, s.yJ)(
              e
                ? "string" == typeof r
                  ? E(r, e.params)
                  : (0, l.A)({}, r, { pathname: E(r.pathname, e.params) })
                : r,
            );
          return a
            ? (c(f), null)
            : o.createElement(g, {
                onMount: function () {
                  c(f);
                },
                onUpdate: function (t, e) {
                  var r = (0, s.yJ)(e.to);
                  (0, s.Fu)(r, (0, l.A)({}, f, { key: r.key })) || c(f);
                },
                to: r,
              });
        });
      }
      var S = {},
        A = 0;
      function C(t, e) {
        void 0 === e && (e = {}),
          ("string" == typeof e || Array.isArray(e)) && (e = { path: e });
        var r = e,
          n = r.path,
          o = r.exact,
          i = void 0 !== o && o,
          a = r.strict,
          s = void 0 !== a && a,
          u = r.sensitive,
          l = void 0 !== u && u;
        return [].concat(n).reduce(function (e, r) {
          if (!r && "" !== r) return null;
          if (e) return e;
          var n = (function (t, e) {
              var r = "" + e.end + e.strict + e.sensitive,
                n = S[r] || (S[r] = {});
              if (n[t]) return n[t];
              var o = [],
                i = { regexp: f()(t, o, e), keys: o };
              return A < 1e4 && ((n[t] = i), A++), i;
            })(r, { end: i, strict: s, sensitive: l }),
            o = n.regexp,
            a = n.keys,
            u = o.exec(t);
          if (!u) return null;
          var c = u[0],
            p = u.slice(1),
            h = t === c;
          return i && !h
            ? null
            : {
                path: r,
                url: "/" === r && "" === c ? "/" : c,
                isExact: h,
                params: a.reduce(function (t, e, r) {
                  return (t[e.name] = p[r]), t;
                }, {}),
              };
        }, null);
      }
      var j = (function (t) {
        function e() {
          return t.apply(this, arguments) || this;
        }
        return (
          (0, n.A)(e, t),
          (e.prototype.render = function () {
            var t = this;
            return o.createElement(v.Consumer, null, function (e) {
              e || (0, u.A)(!1);
              var r,
                n = t.props.location || e.location,
                i = t.props.computedMatch
                  ? t.props.computedMatch
                  : t.props.path
                    ? C(n.pathname, t.props)
                    : e.match,
                a = (0, l.A)({}, e, { location: n, match: i }),
                s = t.props,
                c = s.children,
                f = s.component,
                p = s.render;
              return (
                Array.isArray(c) &&
                  ((r = c), 0 === o.Children.count(r)) &&
                  (c = null),
                o.createElement(
                  v.Provider,
                  { value: a },
                  a.match
                    ? c
                      ? "function" == typeof c
                        ? c(a)
                        : c
                      : f
                        ? o.createElement(f, a)
                        : p
                          ? p(a)
                          : null
                    : "function" == typeof c
                      ? c(a)
                      : null,
                )
              );
            });
          }),
          e
        );
      })(o.Component);
      o.Component;
      var $ = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          return (
            (0, n.A)(e, t),
            (e.prototype.render = function () {
              var t = this;
              return o.createElement(v.Consumer, null, function (e) {
                e || (0, u.A)(!1);
                var r,
                  n,
                  i = t.props.location || e.location;
                return (
                  o.Children.forEach(t.props.children, function (t) {
                    if (null == n && o.isValidElement(t)) {
                      r = t;
                      var a = t.props.path || t.props.from;
                      n = a
                        ? C(i.pathname, (0, l.A)({}, t.props, { path: a }))
                        : e.match;
                    }
                  }),
                  n
                    ? o.cloneElement(r, { location: i, computedMatch: n })
                    : null
                );
              });
            }),
            e
          );
        })(o.Component),
        R = o.useContext;
      function F() {
        return R(m);
      }
      function M() {
        return R(v).location;
      }
      function k() {
        var t = R(v).match;
        return t ? t.params : {};
      }
      function _(t) {
        var e = M(),
          r = R(v).match;
        return t ? C(e.pathname, t) : r;
      }
    },
    682465(t, e, r) {
      "use strict";
      r.d(e, { A: () => o });
      var n = r(491301);
      function o(t) {
        var e = (function (t, e) {
          if ("object" != (0, n.A)(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(t, e || "default");
            if ("object" != (0, n.A)(o)) return o;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == (0, n.A)(e) ? e : e + "";
      }
    },
    491301(t, e, r) {
      "use strict";
      function n(t) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      r.d(e, { A: () => n });
    },
    308050(t, e, r) {
      "use strict";
      r.d(e, { A: () => i });
      let n = String.raw,
        o = n`\p{Emoji}(?:\p{EMod}|[\u{E0020}-\u{E007E}]+\u{E007F}|\uFE0F?\u20E3?)`,
        i = () =>
          RegExp(
            n`\p{RI}{2}|(?![#*\d](?!\uFE0F?\u20E3))${o}(?:\u200D${o})*`,
            "gu",
          );
    },
    187322(t, e, r) {
      "use strict";
      let n;
      r.d(e, { oP: () => R, vN: () => _, xp: () => F });
      var o,
        i = r(64700),
        a = r(627968),
        s = Object.defineProperty,
        u = (t, e, r) => {
          let n;
          return (
            (n = "symbol" != typeof e ? e + "" : e) in t
              ? s(t, n, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (t[n] = r),
            r
          );
        },
        l = { exports: {} },
        c = {}.hasOwnProperty;
      function f() {
        for (var t = [], e = 0; e < arguments.length; e++) {
          var r = arguments[e];
          if (r) {
            var n = typeof r;
            if ("string" === n || "number" === n) t.push(r);
            else if (Array.isArray(r)) {
              if (r.length) {
                var o = f.apply(null, r);
                o && t.push(o);
              }
            } else if ("object" === n) {
              if (
                r.toString !== Object.prototype.toString &&
                !r.toString.toString().includes("[native code]")
              ) {
                t.push(r.toString());
                continue;
              }
              for (var i in r) c.call(r, i) && r[i] && t.push(i);
            }
          }
        }
        return t.join(" ");
      }
      l.exports ? ((f.default = f), (l.exports = f)) : (window.classNames = f);
      let p = l.exports;
      var h = function (t, e, r, n, o, i, a, s) {
        if (!t) {
          var u;
          if (void 0 === e)
            u = Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
          else {
            var l = [r, n, o, i, a, s],
              c = 0;
            (u = Error(
              e.replace(/%s/g, function () {
                return l[c++];
              }),
            )).name = "Invariant Violation";
          }
          throw ((u.framesToPop = 1), u);
        }
      };
      let d = /^#[0-9a-f]{3,8}$/i,
        m = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
      class v {
        constructor(t, e, r, n) {
          (this.red = t), (this.green = e), (this.blue = r), (this.alpha = n);
        }
        toHexString() {
          let t = Math.round(this.red).toString(16),
            e = Math.round(this.green).toString(16),
            r = Math.round(this.blue).toString(16);
          return (
            "#" +
            (this.red > 15.5 ? t : "0" + t) +
            (this.green > 15.5 ? e : "0" + e) +
            (this.blue > 15.5 ? r : "0" + r)
          );
        }
        static parseString(t) {
          return t.match(m)
            ? this.parseColorFnString(t)
            : t.match(d)
              ? this.parseHexString(t)
              : void 0;
        }
        static parseRgbString(t) {
          return "transparent" === t
            ? new v(0, 0, 0, 0)
            : this.parseColorFnString(t);
        }
        static parseHexString(t) {
          if (!t.match(d) || [6, 8].includes(t.length)) return;
          if ((t = t.replace("#", "")).length < 6) {
            let [e, r, n, o] = t.split("");
            (t = e + e + r + r + n + n), o && (t += o + o);
          }
          let e = t.match(/.{1,2}/g);
          if (null != e)
            return new v(
              parseInt(e[0], 16),
              parseInt(e[1], 16),
              parseInt(e[2], 16),
              null != e[3] ? parseInt(e[3], 16) / 255 : 1,
            );
        }
        static parseColorFnString(t) {
          var e;
          let [, r, n] = null != (e = t.match(m)) ? e : [];
          if (!r || !n) return;
          let o = n
            .split(/\s*[,/\s]\s*/)
            .map((t) => t.replace(",", "").trim())
            .filter((t) => "" !== t)
            .map((t, e) =>
              (function (t, e, r) {
                if (/%$/.test(e))
                  return 3 === r
                    ? parseFloat(e) / 100
                    : (255 * parseFloat(e)) / 100;
                if ("h" === t[r]) {
                  if (/turn$/.test(e)) return 360 * parseFloat(e);
                  if (/rad$/.test(e)) return 57.3 * parseFloat(e);
                }
                return parseFloat(e);
              })(r, t, e),
            );
          if ("hsl" === r.substr(0, 3)) {
            let t = (function ({
              hue: t,
              saturation: e,
              lightness: r,
              alpha: n,
            }) {
              let o = (1 - Math.abs(2 * (r /= 255) - 1)) * (e /= 255),
                i = o * (1 - Math.abs(((t / 60) % 2) - 1)),
                a = r - o / 2,
                s = (
                  t < 60
                    ? [o, i, 0]
                    : t < 120
                      ? [i, o, 0]
                      : t < 180
                        ? [0, o, i]
                        : t < 240
                          ? [0, i, o]
                          : t < 300
                            ? [i, 0, o]
                            : [o, 0, i]
                ).map((t) => Math.round((t + a) * 255));
              return { red: s[0], green: s[1], blue: s[2], alpha: n };
            })({ hue: o[0], saturation: o[1], lightness: o[2], alpha: o[3] });
            return new v(t.red, t.green, t.blue, t.alpha);
          }
          return new v(o[0], o[1], o[2], "number" == typeof o[3] ? o[3] : 1);
        }
        toHSL() {
          return (function ({ red: t, green: e, blue: r, alpha: n }) {
            let o = t / 255,
              i = e / 255,
              a = r / 255,
              s = Math.max(o, i, a),
              u = Math.min(o, i, a),
              l = s - u,
              c = (s + u) / 2,
              f = l > 0 ? l / (1 - Math.abs(2 * c - 1)) : 0;
            if (0 === l)
              return { hue: 0, saturation: f, lightness: c, alpha: n };
            let p = 0;
            switch (s) {
              case o:
                p = ((i - a) / l) % 6;
                break;
              case i:
                p = (a - o) / l + 2;
                break;
              case a:
                p = (i - a) / l + 4;
            }
            return { hue: 60 * p, saturation: f, lightness: c, alpha: n };
          })({
            red: this.red,
            green: this.green,
            blue: this.blue,
            alpha: this.alpha,
          });
        }
        getRelativeLuminance() {
          let t = this.red / 255,
            e = this.green / 255,
            r = this.blue / 255;
          return (
            0.2126 *
              (t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) +
            0.7152 *
              (e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) +
            0.0722 *
              (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4))
          );
        }
      }
      function y(t, e) {
        let r = t.alpha;
        return new v(
          (1 - r) * e.red + r * t.red,
          (1 - r) * e.green + r * t.green,
          (1 - r) * e.blue + r * t.blue,
          t.alpha + e.alpha * (1 - t.alpha),
        );
      }
      function g(t) {
        if (t) return parseInt(t) > 0 ? t : void 0;
      }
      class b {
        constructor() {
          u(this, "targetElement"),
            u(this, "targetAncestry"),
            u(this, "boundingBox"),
            u(this, "className"),
            u(this, "offset", 0),
            u(this, "zIndex"),
            u(this, "container", null),
            u(this, "themeOptions"),
            u(this, "invalidate", () => null);
        }
        setContainer(t) {
          this.container = t;
        }
        setThemeOptions(t) {
          this.themeOptions = t;
        }
        showElement(t, e = {}) {
          var r;
          (this.targetElement = t),
            (this.targetAncestry = this.getElementAncestors(
              this.targetElement,
            )),
            (this.boundingBox = void 0),
            (this.className = e.className),
            (this.offset = null != (r = e.offset) ? r : 0),
            (this.zIndex = e.zIndex),
            this !== n && (null == n || n.hide(), (n = this)),
            this.invalidate();
        }
        hide() {
          (this.targetElement = void 0),
            (this.targetAncestry = void 0),
            (this.boundingBox = void 0),
            (this.className = void 0),
            (this.offset = 0),
            (this.zIndex = void 0),
            this.invalidate();
        }
        get visible() {
          return null != this.targetElement || null != this.boundingBox;
        }
        getElementAncestors(t) {
          if (null == t) return { elements: [], styles: [] };
          let e = [],
            r = [],
            n = t;
          for (; null != n; )
            e.push(n),
              "u" > typeof window && r.push(window.getComputedStyle(n)),
              (n = n.parentElement);
          return { elements: e, styles: r };
        }
        getNextZIndexForAncestry(t) {
          for (let e = 0; e < t.elements.length; e++) {
            let r = t.elements[e],
              n = parseInt(t.styles[e].getPropertyValue("z-index"));
            if (!isNaN(n)) return n + 1;
            if (r === this.container) break;
          }
        }
        getBorderRadius(t) {
          var e, r, n, o, i, a, s, u;
          let l =
              null !=
              (r = g(
                null == (e = t.styles[0]) ? void 0 : e.borderTopLeftRadius,
              ))
                ? r
                : "0",
            c =
              null !=
              (o = g(
                null == (n = t.styles[0]) ? void 0 : n.borderTopRightRadius,
              ))
                ? o
                : "0",
            f =
              null !=
              (a = g(
                null == (i = t.styles[0]) ? void 0 : i.borderBottomRightRadius,
              ))
                ? a
                : "0",
            p =
              null !=
              (u = g(
                null == (s = t.styles[0]) ? void 0 : s.borderBottomLeftRadius,
              ))
                ? u
                : "0";
          if ("0" !== l || "0" !== c || "0" !== f || "0" !== p)
            return `${l} ${c} ${f} ${p}`;
        }
        makePositionFromDOMRect(t) {
          var e, r, n, o;
          if (null == this.container) return {};
          let i = this.container.getBoundingClientRect(),
            { scrollTop: a, scrollLeft: s } = this.container,
            u = 0,
            l = 0,
            c = 0,
            f = 0;
          return (
            "number" == typeof this.offset
              ? ((u = this.offset),
                (l = this.offset),
                (c = this.offset),
                (f = this.offset))
              : ((u = null != (e = this.offset.top) ? e : 0),
                (l = null != (r = this.offset.right) ? r : 0),
                (c = null != (n = this.offset.bottom) ? n : 0),
                (f = null != (o = this.offset.left) ? o : 0)),
            {
              top: a + t.top - i.top + u,
              width: t.width - (l + f),
              height: t.height - (c + u),
              left: s + t.left - i.left + f,
            }
          );
        }
        getStyle() {
          var t;
          let e = {};
          if (
            (null != this.boundingBox &&
              (e = {
                ...this.makePositionFromDOMRect(this.boundingBox),
                zIndex: this.zIndex,
              }),
            null != this.targetElement && null != this.targetAncestry)
          ) {
            let r = (function (t) {
              let e = [];
              for (let r of t.styles.slice(1)) {
                let t = v.parseString(r.backgroundColor);
                if (null != t) {
                  if (t.alpha > 0.95) return t;
                  e.push(t);
                }
              }
              return e.push(new v(255, 255, 255, 1)), e.reduce(y);
            })(this.targetAncestry);
            e = {
              ...this.makePositionFromDOMRect(
                this.targetElement.getBoundingClientRect(),
              ),
              zIndex:
                null != (t = this.zIndex)
                  ? t
                  : this.getNextZIndexForAncestry(this.targetAncestry),
              "--__adaptive-focus-ring-color": (function (t, e) {
                if (null == t) return "var(--focus-primary)";
                let { saturation: r } = t.toHSL(),
                  n = t.getRelativeLuminance();
                return r <= 0.4
                  ? "var(--focus-primary)"
                  : "u" > typeof e
                    ? n < (e.brightnessTreshold || 0.2)
                      ? "var(--focus-light, rgba(255,255,255,0.7))"
                      : "var(--focus-dark, rgba(0, 0, 0, 0.85))"
                    : "rgba(255,255,255,0.7)";
              })(r, this.themeOptions),
              "--__adaptive-focus-ring-radius": this.getBorderRadius(
                this.targetAncestry,
              ),
            };
          }
          return e;
        }
      }
      let x = new b();
      "u" > typeof window && x.setContainer(document.body);
      let E = i.createContext(x);
      var w = function (t, e, r, n) {
        var o = r ? r.call(n, t, e) : void 0;
        if (void 0 !== o) return !!o;
        if (t === e) return !0;
        if ("object" != typeof t || !t || "object" != typeof e || !e) return !1;
        var i = Object.keys(t),
          a = Object.keys(e);
        if (i.length !== a.length) return !1;
        for (
          var s = Object.prototype.hasOwnProperty.bind(e), u = 0;
          u < i.length;
          u++
        ) {
          var l = i[u];
          if (!s(l)) return !1;
          var c = t[l],
            f = e[l];
          if (
            !1 === (o = r ? r.call(n, c, f, l) : void 0) ||
            (void 0 === o && c !== f)
          )
            return !1;
        }
        return !0;
      };
      let S = !1,
        A,
        C = {};
      function j() {
        if (!S) return;
        let t = null == n ? void 0 : n.getStyle();
        null == t || w(t, C)
          ? null != A && cancelAnimationFrame(A)
          : ((C = t), null == n || n.invalidate()),
          (A = requestAnimationFrame(j));
      }
      let $ = !1,
        R = {
          get ringsEnabled() {
            return $;
          },
          setRingsEnabled(t) {
            ($ = t), null == n || n.invalidate();
          },
          enableAnimationTracking() {
            (S = !0), (A = requestAnimationFrame(j));
          },
          disableAnimationTracking() {
            (S = !1), null != A && cancelAnimationFrame(A);
          },
        };
      function F(t) {
        let { containerRef: e, children: r, themeOptions: n } = t,
          o = i.useRef(new b());
        return (
          i.useEffect(() => {
            o.current.setContainer(e.current), o.current.setThemeOptions(n);
          }, [e.current]),
          (0, a.jsxs)(E.Provider, {
            value: o.current,
            children: [r, (0, a.jsx)(M, {})],
          })
        );
      }
      function M() {
        let t = i.useContext(E),
          [, e] = i.useState({});
        return (
          i.useEffect(
            () => (
              (t.invalidate = () => e({})),
              () => {
                t.invalidate = () => null;
              }
            ),
            [t],
          ),
          R.ringsEnabled && t.visible
            ? (0, a.jsx)("div", {
                className: p("focus-rings-ring", t.className),
                style: t.getStyle(),
              })
            : null
        );
      }
      let k =
        "u" > typeof window &&
        (null == (o = window.document) ? void 0 : o.createElement) != null
          ? i.useLayoutEffect
          : i.useEffect;
      function _(t) {
        let {
          within: e = !1,
          enabled: r = !0,
          focused: n,
          offset: o = 0,
          focusTarget: a,
          ringTarget: s,
          ringClassName: u,
          focusClassName: l,
          focusWithinClassName: c,
          children: f,
        } = t;
        null != a &&
          h(
            null != s,
            "FocusRing was given a focusTarget but the required ringTarget was not provided. A ringTarget is required to avoid ambiguity of where the ring will be applied.",
          ),
          null != n &&
            h(
              null != s,
              "FocusRing was given a controlled focused prop but no ringTarget to apply the ring to. A ringTarget is required since it cannot be inferred through regular focus events.",
            );
        let d = i.useRef(!1),
          [m, v] = i.useState(!1),
          y = i.useContext(E),
          g = i.Children.only(f),
          { onBlur: b, onFocus: x, ...w } = g.props,
          S = i.useMemo(() => ({ className: u, offset: o }), [u, o]);
        k(() => {
          r && y.invalidate();
        }),
          i.useEffect(() => {
            r || y.hide();
          }, [r, y]),
          i.useEffect(
            () => () => {
              d.current && y.hide();
            },
            [y],
          ),
          i.useEffect(() => {
            let t = null == s ? void 0 : s.current;
            null == n ||
              null == t ||
              ((d.current = n), n ? y.showElement(t, S) : !1 === n && y.hide());
          }, [n, S, y, s]),
          k(() => {
            if (null != n) return;
            let t = null == a ? void 0 : a.current,
              r = null == s ? void 0 : s.current;
            if (null != t && null != r)
              return (
                t.addEventListener("focusin", o, !0),
                t.addEventListener("focusout", i, !0),
                () => {
                  t.removeEventListener("focusin", o, !0),
                    t.removeEventListener("focusout", i, !0);
                }
              );
            function o(t) {
              if (null != r) {
                if (t.currentTarget === t.target) {
                  (d.current = !0), y.showElement(r, S);
                  return;
                }
                v(!0), e && y.showElement(r, S);
              }
            }
            function i() {
              y.hide(), (d.current = !1), v(!1);
            }
          }, [e, S, n, y, a, s]);
        let A = i.useCallback(
            (t) => {
              y.hide(), (d.current = !1), v(!1), null == b || b(t);
            },
            [b, y],
          ),
          C = i.useCallback(
            (t) => {
              let r = null == s ? void 0 : s.current;
              t.currentTarget === t.target
                ? ((d.current = !0),
                  y.showElement(null != r ? r : t.currentTarget, S))
                : (v(!0),
                  e && y.showElement(null != r ? r : t.currentTarget, S)),
                null == x || x(t);
            },
            [s, e, x, y, S],
          );
        return r && null == a && null == n
          ? i.cloneElement(g, {
              ...w,
              className: p(w.className, d.current ? l : void 0, m ? c : void 0),
              onBlur: A,
              onFocus: C,
            })
          : g;
      }
    },
  },
]);
//# sourceMappingURL=16887.b9f566298b1ad8f2.js.map
