(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28356"],
  {
    948537: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.IntlManagerReact =
          e.DEFAULT_LOCALE =
          e.createLoader =
          e.IntlManager =
            void 0);
      var n = r(163763);
      Object.defineProperty(e, "IntlManager", {
        enumerable: !0,
        get: function () {
          return n.IntlManager;
        },
      }),
        Object.defineProperty(e, "createLoader", {
          enumerable: !0,
          get: function () {
            return n.createLoader;
          },
        }),
        Object.defineProperty(e, "DEFAULT_LOCALE", {
          enumerable: !0,
          get: function () {
            return n.DEFAULT_LOCALE;
          },
        });
      var i = r(939558);
      Object.defineProperty(e, "IntlManagerReact", {
        enumerable: !0,
        get: function () {
          return i.IntlManagerReact;
        },
      });
    },
    163763: function (t, e, r) {
      "use strict";
      var n =
          (this && this.__assign) ||
          function () {
            return (n =
              Object.assign ||
              function (t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                  for (var i in ((e = arguments[r]), e))
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
              }).apply(this, arguments);
          },
        i =
          (this && this.__values) ||
          function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
              r = e && t[e],
              n = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length)
              return {
                next: function () {
                  return (
                    t && n >= t.length && (t = void 0),
                    { value: t && t[n++], done: !t }
                  );
                },
              };
            throw TypeError(
              e ? "Object is not iterable." : "Symbol.iterator is not defined.",
            );
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.IntlManager = e.DEFAULT_LOCALE = void 0),
        (e.createLoader = function (t, e, r) {
          return new s.MessageLoader(t, e, r);
        });
      var o = r(65243),
        a = r(766989),
        s = r(983017);
      e.DEFAULT_LOCALE = "en-US";
      var u = (function () {
        function t(t, r) {
          void 0 === t && (t = e.DEFAULT_LOCALE);
          var n = this;
          (this.onLocaleChange = function (t) {
            return (
              n._localeSubscriptions.add(t),
              function () {
                return n._localeSubscriptions.delete(t);
              }
            );
          }),
            (this.defaultLocale = t),
            (this.currentLocale = t),
            (this.intl = (0, o.createIntl)({
              formats: a.IntlMessageFormat.formats,
              defaultLocale: t,
              locale: t,
            })),
            (this.defaultRichTextElements = r),
            (this._localeSubscriptions = new Set());
        }
        return (
          (t.prototype.setLocale = function (t) {
            (this.currentLocale = t),
              (this.intl = (0, o.createIntl)({
                defaultLocale: this.defaultLocale,
                locale: t,
              })),
              this.emitLocaleChange(t);
          }),
          (t.prototype.emitLocaleChange = function (t) {
            var e, r;
            try {
              for (
                var n = i(this._localeSubscriptions), o = n.next();
                !o.done;
                o = n.next()
              )
                (0, o.value)(t);
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                o && !o.done && (r = n.return) && r.call(n);
              } finally {
                if (e) throw e.error;
              }
            }
          }),
          (t.prototype.formatToParts = function (t, e) {
            if ("string" == typeof t) return [t];
            var r,
              o,
              s = "function" == typeof t ? t(this.currentLocale) : t;
            if ("string" == typeof s) return [s];
            var u =
                null != e
                  ? n(n({}, this.defaultRichTextElements), e)
                  : this.defaultRichTextElements,
              c = s.formatToParts(this.intl.formatters, this.intl.formats, u),
              l = [],
              h = !1;
            try {
              for (var f = i(c), p = f.next(); !p.done; p = f.next()) {
                var m = p.value;
                if (h && (h = m.type === a.PART_TYPE.literal)) {
                  l[l.length - 1] += m.value;
                  continue;
                }
                (h = m.type === a.PART_TYPE.literal), l.push(m.value);
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                p && !p.done && (o = f.return) && o.call(f);
              } finally {
                if (r) throw r.error;
              }
            }
            return l;
          }),
          (t.prototype.string = function (t) {
            return this.formatToPlainString(t);
          }),
          (t.prototype.formatToPlainString = function (t, e) {
            if ("string" == typeof t) return t;
            var r = t(this.currentLocale);
            return "string" == typeof r
              ? r
              : r.formatToPlainString(
                  this.intl.formatters,
                  this.intl.formats,
                  e,
                );
          }),
          (t.prototype.formatToMarkdownString = function (t, e) {
            if ("string" == typeof t) return t;
            var r = t(this.currentLocale);
            return "string" == typeof r
              ? r
              : r.formatToPlainString(
                  this.intl.formatters,
                  this.intl.formats,
                  e,
                );
          }),
          t
        );
      })();
      e.IntlManager = u;
    },
    983017: function (t, e, r) {
      "use strict";
      t = r.nmd(t);
      var n =
          (this && this.__awaiter) ||
          function (t, e, r, n) {
            return new (r || (r = Promise))(function (i, o) {
              function a(t) {
                try {
                  u(n.next(t));
                } catch (t) {
                  o(t);
                }
              }
              function s(t) {
                try {
                  u(n.throw(t));
                } catch (t) {
                  o(t);
                }
              }
              function u(t) {
                var e;
                t.done
                  ? i(t.value)
                  : ((e = t.value) instanceof r
                      ? e
                      : new r(function (t) {
                          t(e);
                        })
                    ).then(a, s);
              }
              u((n = n.apply(t, e || [])).next());
            });
          },
        i =
          (this && this.__generator) ||
          function (t, e) {
            var r,
              n,
              i,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function s(s) {
              return function (u) {
                return (function (s) {
                  if (r) throw TypeError("Generator is already executing.");
                  for (; o && ((o = 0), s[0] && (a = 0)), a; )
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (i =
                            2 & s[0]
                              ? n.return
                              : s[0]
                                ? n.throw || ((i = n.return) && i.call(n), 0)
                                : n.next) &&
                          !(i = i.call(n, s[1])).done)
                      )
                        return i;
                      switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                        case 0:
                        case 1:
                          i = s;
                          break;
                        case 4:
                          return a.label++, { value: s[1], done: !1 };
                        case 5:
                          a.label++, (n = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                            (6 === s[0] || 2 === s[0])
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === s[0] &&
                            (!i || (s[1] > i[0] && s[1] < i[3]))
                          ) {
                            a.label = s[1];
                            break;
                          }
                          if (6 === s[0] && a.label < i[1]) {
                            (a.label = i[1]), (i = s);
                            break;
                          }
                          if (i && a.label < i[2]) {
                            (a.label = i[2]), a.ops.push(s);
                            break;
                          }
                          i[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      s = e.call(t, a);
                    } catch (t) {
                      (s = [6, t]), (n = 0);
                    } finally {
                      r = i = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, u]);
              };
            }
          },
        o =
          (this && this.__values) ||
          function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
              r = e && t[e],
              n = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length)
              return {
                next: function () {
                  return (
                    t && n >= t.length && (t = void 0),
                    { value: t && t[n++], done: !t }
                  );
                },
              };
            throw TypeError(
              e ? "Object is not iterable." : "Symbol.iterator is not defined.",
            );
          },
        a =
          (this && this.__read) ||
          function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
              i,
              o = r.call(t),
              a = [];
            try {
              for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
                a.push(n.value);
            } catch (t) {
              i = { error: t };
            } finally {
              try {
                n && !n.done && (r = o.return) && r.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
            return a;
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.MessageLoader = void 0);
      var s = r(475124),
        u = (function () {
          function e(e, r, n) {
            var i,
              u,
              c = this;
            if (
              ((this.messageKeys = e),
              (this.messages = {}),
              (this.localeImportMap = r),
              (this.supportedLocales = Object.keys(r)),
              (this.defaultLocale = n),
              (this._localeLoadingPromises = {}),
              (this._parseCache = new Map()),
              (this._subscribers = new Set()),
              this._loadLocale(this.defaultLocale),
              (this.fallbackMessage = new s.InternalIntlMessage(
                "THIS MESSAGE FAILED TO LOAD",
                "en-US",
              )),
              t.hot)
            ) {
              var l = function (e, r) {
                t.hot.accept(r, function () {
                  c._parseCache.clear(), c._loadLocale(e);
                });
              };
              try {
                for (
                  var h = o(Object.entries(r)), f = h.next();
                  !f.done;
                  f = h.next()
                ) {
                  var p = a(f.value, 2),
                    m = p[0],
                    d = p[1];
                  l(m, d);
                }
              } catch (t) {
                i = { error: t };
              } finally {
                try {
                  f && !f.done && (u = h.return) && u.call(h);
                } finally {
                  if (i) throw i.error;
                }
              }
            }
          }
          return (
            (e.prototype.withDebugValues = function (t, e) {
              (this._debugKeyMap = t), (this._localeFileMap = e);
            }),
            (e.prototype.get = function (t, e) {
              var r,
                n =
                  null !== (r = this.getMessageValue(t, e)) && void 0 !== r
                    ? r
                    : this.getMessageValue(t, this.defaultLocale);
              if (null != n) return n;
              var i =
                  null != this._debugKeyMap
                    ? '"'.concat(this._debugKeyMap[t], '" (').concat(t, ")")
                    : void 0,
                o =
                  null != this._localeFileMap
                    ? "".concat(e, " (").concat(this._localeFileMap[e], ")")
                    : e,
                a =
                  null != this._localeFileMap
                    ? ""
                        .concat(this.defaultLocale, " (")
                        .concat(this._localeFileMap[this.defaultLocale], ")")
                    : this.defaultLocale;
              return (
                console.warn(
                  "Requested message "
                    .concat(
                      i,
                      " does not have a value in the requested locale ",
                    )
                    .concat(o, " nor the default locale ")
                    .concat(a),
                ),
                this.fallbackMessage
              );
            }),
            (e.prototype.getMessageValue = function (t, e) {
              var r = t + "@" + e,
                n = this._parseCache.get(r);
              if (null != n) return n;
              if (null == this._localeLoadingPromises[e]) {
                if (null == this.messages[e]) {
                  this.supportedLocales.includes(e) && this._loadLocale(e);
                  return;
                }
                if (t in this.messages[e]) {
                  var i = this.messages[e][t],
                    o = new s.InternalIntlMessage(i, e);
                  return this._parseCache.set(r, o), o;
                }
              }
            }),
            (e.prototype.getBinds = function () {
              var t = this,
                e = this.onChange.bind(this);
              return Object.keys(this.messageKeys).reduce(function (r, n) {
                var i = t.get.bind(t, n);
                return (i.onChange = e), (r[n] = i), r;
              }, {});
            }),
            (e.prototype._loadLocale = function (t) {
              return n(this, void 0, void 0, function () {
                var e, r, n;
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (null != this._localeLoadingPromises[t]) return [2];
                      if (null == this.localeImportMap[t])
                        throw Error(
                          "Requested to load locale ".concat(
                            t,
                            ", which should be supported, but no source for translation data was provided.",
                          ),
                        );
                      if (null != this.messages[t]) return [2];
                      return (
                        (e = this.localeImportMap[t]()),
                        (this._localeLoadingPromises[t] = e),
                        (r = this.messages),
                        (n = t),
                        [4, e]
                      );
                    case 1:
                      return (
                        (r[n] = i.sent().default),
                        delete this._localeLoadingPromises[t],
                        this.emitChange(),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.emitChange = function () {
              var t, e;
              try {
                for (
                  var r = o(this._subscribers.values()), n = r.next();
                  !n.done;
                  n = r.next()
                )
                  (0, n.value)();
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  n && !n.done && (e = r.return) && e.call(r);
                } finally {
                  if (t) throw t.error;
                }
              }
            }),
            (e.prototype.onChange = function (t) {
              var e = this;
              return (
                this._subscribers.add(t),
                function () {
                  return e._subscribers.delete(t);
                }
              );
            }),
            e
          );
        })();
      e.MessageLoader = u;
    },
    475124: function (t, e, r) {
      "use strict";
      var n =
          (this && this.__values) ||
          function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
              r = e && t[e],
              n = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length)
              return {
                next: function () {
                  return (
                    t && n >= t.length && (t = void 0),
                    { value: t && t[n++], done: !t }
                  );
                },
              };
            throw TypeError(
              e ? "Object is not iterable." : "Symbol.iterator is not defined.",
            );
          },
        i =
          (this && this.__read) ||
          function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
              i,
              o = r.call(t),
              a = [];
            try {
              for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
                a.push(n.value);
            } catch (t) {
              i = { error: t };
            } finally {
              try {
                n && !n.done && (r = o.return) && r.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
            return a;
          },
        o =
          (this && this.__spreadArray) ||
          function (t, e, r) {
            if (r || 2 == arguments.length)
              for (var n, i = 0, o = e.length; i < o; i++)
                (n || !(i in e)) &&
                  (!n && (n = Array.prototype.slice.call(e, 0, i)),
                  (n[i] = e[i]));
            return t.concat(n || Array.prototype.slice.call(e));
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.InternalIntlMessage = void 0);
      var a = r(859159),
        s = r(766989),
        u = (function () {
          function t(t, e) {
            (this.locale = e),
              "string" == typeof t
                ? ((this.message = t), (this.ast = (0, a.parse)(t)))
                : (this.ast = t),
              (this.plainAst = void 0);
          }
          return (
            (t.prototype.formatToParts = function (t, e, r) {
              return (0, s.formatToParts)(this.ast, this.locale, t, e, r);
            }),
            (t.prototype.formatToPlainString = function (t, e, r) {
              if (null == this.plainAst) {
                this.plainAst = [];
                try {
                  for (
                    var a, u, c, l, h, f = n(this.ast), p = f.next();
                    !p.done;
                    p = f.next()
                  ) {
                    var m = p.value;
                    (c = this.plainAst).push.apply(
                      c,
                      o([], i(this._removeRichTags(m)), !1),
                    );
                  }
                } catch (t) {
                  a = { error: t };
                } finally {
                  try {
                    p && !p.done && (u = f.return) && u.call(f);
                  } finally {
                    if (a) throw a.error;
                  }
                }
              }
              var d = (0, s.formatToParts)(this.plainAst, this.locale, t, e, r),
                v = "";
              try {
                for (var g = n(d), y = g.next(); !y.done; y = g.next()) {
                  var m = y.value;
                  v += String(m.value);
                }
              } catch (t) {
                l = { error: t };
              } finally {
                try {
                  y && !y.done && (h = g.return) && h.call(g);
                } finally {
                  if (l) throw l.error;
                }
              }
              return v;
            }),
            (t.prototype._removeRichTags = function (t) {
              if (t.type !== a.TYPE.tag) return [t];
              var e,
                r,
                s = [];
              try {
                for (
                  var u = n(t.children), c = u.next();
                  !c.done;
                  c = u.next()
                ) {
                  var l = c.value;
                  s.push.apply(s, o([], i(this._removeRichTags(l)), !1));
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  c && !c.done && (r = u.return) && r.call(u);
                } finally {
                  if (e) throw e.error;
                }
              }
              return s;
            }),
            t
          );
        })();
      e.InternalIntlMessage = u;
    },
    939558: function (t, e, r) {
      "use strict";
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (t, e) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              })(t, e);
          }),
          function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            n(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          }),
        o =
          (this && this.__read) ||
          function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
              i,
              o = r.call(t),
              a = [];
            try {
              for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
                a.push(n.value);
            } catch (t) {
              i = { error: t };
            } finally {
              try {
                n && !n.done && (r = o.return) && r.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
            return a;
          },
        a =
          (this && this.__spreadArray) ||
          function (t, e, r) {
            if (r || 2 == arguments.length)
              for (var n, i = 0, o = e.length; i < o; i++)
                (n || !(i in e)) &&
                  (!n && (n = Array.prototype.slice.call(e, 0, i)),
                  (n[i] = e[i]));
            return t.concat(n || Array.prototype.slice.call(e));
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.IntlManagerReact = void 0);
      var s = r(470079),
        u = (function (t) {
          function e() {
            var e = t.apply(this, a([], o(arguments), !1)) || this;
            return (
              (e.IntlMessage = function (t) {
                var r = t.message,
                  n = t.values,
                  i = s.useSyncExternalStore(e.onLocaleChange, function () {
                    return e.currentLocale;
                  });
                if (
                  (s.useSyncExternalStore(r.onChange, function () {
                    return r(i);
                  }),
                  "string" == typeof r)
                )
                  return r;
                var o = e.formatToParts(r, n);
                return 1 === o.length && "string" == typeof o[0]
                  ? o[0]
                  : s.createElement(s.Fragment, void 0, e.formatToParts(r, n));
              }),
              e
            );
          }
          return (
            i(e, t),
            (e.prototype.format = function (t, e) {
              return s.createElement(this.IntlMessage, {
                message: t,
                values: e,
              });
            }),
            e
          );
        })(r(163763).IntlManager);
      e.IntlManagerReact = u;
    },
    28866: function (t, e, r) {
      "use strict";
      function n(t, e, r) {
        if ((void 0 === r && (r = Error), !t)) throw new r(e);
      }
      r.d(e, {
        kG: function () {
          return n;
        },
      });
    },
    857840: function (t, e, r) {
      "use strict";
      function n(t, e) {
        var r = e && e.cache ? e.cache : l,
          n = e && e.serializer ? e.serializer : u;
        return (e && e.strategy ? e.strategy : s)(t, {
          cache: r,
          serializer: n,
        });
      }
      r.d(e, {
        A: function () {
          return h;
        },
        H: function () {
          return n;
        },
      });
      function i(t, e, r, n) {
        var i,
          o =
            null == (i = n) || "number" == typeof i || "boolean" == typeof i
              ? n
              : r(n),
          a = e.get(o);
        return void 0 === a && ((a = t.call(this, n)), e.set(o, a)), a;
      }
      function o(t, e, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          i = r(n),
          o = e.get(i);
        return void 0 === o && ((o = t.apply(this, n)), e.set(i, o)), o;
      }
      function a(t, e, r, n, i) {
        return r.bind(e, t, n, i);
      }
      function s(t, e) {
        var r,
          n,
          a,
          s,
          u,
          c = 1 === t.length ? i : o;
        return (
          (r = t),
          (n = this),
          (a = c),
          (s = e.cache.create()),
          (u = e.serializer),
          a.bind(n, r, s, u)
        );
      }
      var u = function () {
        return JSON.stringify(arguments);
      };
      function c() {
        this.cache = Object.create(null);
      }
      (c.prototype.get = function (t) {
        return this.cache[t];
      }),
        (c.prototype.set = function (t, e) {
          this.cache[t] = e;
        });
      var l = {
          create: function () {
            return new c();
          },
        },
        h = {
          variadic: function (t, e) {
            var r, n, i, a, s;
            return (
              (r = t),
              (n = this),
              (i = o),
              (a = e.cache.create()),
              (s = e.serializer),
              i.bind(n, r, a, s)
            );
          },
          monadic: function (t, e) {
            var r, n, o, a, s;
            return (
              (r = t),
              (n = this),
              (o = i),
              (a = e.cache.create()),
              (s = e.serializer),
              o.bind(n, r, a, s)
            );
          },
        };
    },
    944990: function (t, e, r) {
      "use strict";
      r.d(e, {
        T: function () {
          return i;
        },
      });
      var n = r(779597);
      function i(t, e) {
        for (var r = "", i = 0; i < t.length; i++) {
          var o = t.charAt(i);
          if ("j" === o) {
            for (var a = 0; i + 1 < t.length && t.charAt(i + 1) === o; )
              a++, i++;
            var s = 1 + (1 & a),
              u = a < 2 ? 1 : 3 + (a >> 1),
              c = (function (t) {
                var e,
                  r = t.hourCycle;
                if (
                  (void 0 === r &&
                    t.hourCycles &&
                    t.hourCycles.length &&
                    (r = t.hourCycles[0]),
                  r)
                )
                  switch (r) {
                    case "h24":
                      return "k";
                    case "h23":
                      return "H";
                    case "h12":
                      return "h";
                    case "h11":
                      return "K";
                    default:
                      throw Error("Invalid hourCycle");
                  }
                var i = t.language;
                return (
                  "root" !== i && (e = t.maximize().region),
                  (n._[e || ""] ||
                    n._[i || ""] ||
                    n._["".concat(i, "-001")] ||
                    n._["001"])[0]
                );
              })(e);
            for (("H" == c || "k" == c) && (u = 0); u-- > 0; ) r += "a";
            for (; s-- > 0; ) r = c + r;
          } else "J" === o ? (r += "H") : (r += o);
        }
        return r;
      }
    },
    827671: function (t, e, r) {
      "use strict";
      var n, i;
      r.d(e, {
        o: function () {
          return n;
        },
      }),
        ((i = n || (n = {}))[(i.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] =
          "EXPECT_ARGUMENT_CLOSING_BRACE"),
        (i[(i.EMPTY_ARGUMENT = 2)] = "EMPTY_ARGUMENT"),
        (i[(i.MALFORMED_ARGUMENT = 3)] = "MALFORMED_ARGUMENT"),
        (i[(i.EXPECT_ARGUMENT_TYPE = 4)] = "EXPECT_ARGUMENT_TYPE"),
        (i[(i.INVALID_ARGUMENT_TYPE = 5)] = "INVALID_ARGUMENT_TYPE"),
        (i[(i.EXPECT_ARGUMENT_STYLE = 6)] = "EXPECT_ARGUMENT_STYLE"),
        (i[(i.INVALID_NUMBER_SKELETON = 7)] = "INVALID_NUMBER_SKELETON"),
        (i[(i.INVALID_DATE_TIME_SKELETON = 8)] = "INVALID_DATE_TIME_SKELETON"),
        (i[(i.EXPECT_NUMBER_SKELETON = 9)] = "EXPECT_NUMBER_SKELETON"),
        (i[(i.EXPECT_DATE_TIME_SKELETON = 10)] = "EXPECT_DATE_TIME_SKELETON"),
        (i[(i.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] =
          "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"),
        (i[(i.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] =
          "EXPECT_SELECT_ARGUMENT_OPTIONS"),
        (i[(i.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] =
          "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"),
        (i[(i.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
          "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"),
        (i[(i.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] =
          "EXPECT_SELECT_ARGUMENT_SELECTOR"),
        (i[(i.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] =
          "EXPECT_PLURAL_ARGUMENT_SELECTOR"),
        (i[(i.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
          "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"),
        (i[(i.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
          "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"),
        (i[(i.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] =
          "INVALID_PLURAL_ARGUMENT_SELECTOR"),
        (i[(i.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] =
          "DUPLICATE_PLURAL_ARGUMENT_SELECTOR"),
        (i[(i.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] =
          "DUPLICATE_SELECT_ARGUMENT_SELECTOR"),
        (i[(i.MISSING_OTHER_CLAUSE = 22)] = "MISSING_OTHER_CLAUSE"),
        (i[(i.INVALID_TAG = 23)] = "INVALID_TAG"),
        (i[(i.INVALID_TAG_NAME = 25)] = "INVALID_TAG_NAME"),
        (i[(i.UNMATCHED_CLOSING_TAG = 26)] = "UNMATCHED_CLOSING_TAG"),
        (i[(i.UNCLOSED_TAG = 27)] = "UNCLOSED_TAG");
    },
    859159: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          SKELETON_TYPE: function () {
            return a.aV;
          },
          TYPE: function () {
            return a.wD;
          },
          _Parser: function () {
            return u;
          },
          createLiteralElement: function () {
            return a.mD;
          },
          createNumberElement: function () {
            return a.qx;
          },
          isArgumentElement: function () {
            return a.VG;
          },
          isDateElement: function () {
            return a.rp;
          },
          isDateTimeSkeleton: function () {
            return a.Ii;
          },
          isLiteralElement: function () {
            return a.O4;
          },
          isNumberElement: function () {
            return a.uf;
          },
          isNumberSkeleton: function () {
            return a.Wh;
          },
          isPluralElement: function () {
            return a.Jo;
          },
          isPoundElement: function () {
            return a.yx;
          },
          isSelectElement: function () {
            return a.Wi;
          },
          isTagElement: function () {
            return a.HI;
          },
          isTimeElement: function () {
            return a.pe;
          },
          parse: function () {
            return s;
          },
        });
      var n = r(146150),
        i = r(827671),
        o = r(596771),
        a = r(928125);
      function s(t, e) {
        void 0 === e && (e = {}),
          (e = (0, n.pi)(
            { shouldParseSkeletons: !0, requiresOtherClause: !0 },
            e,
          ));
        var r = new o._(t, e).parse();
        if (r.err) {
          var s = SyntaxError(i.o[r.err.kind]);
          throw (
            ((s.location = r.err.location),
            (s.originalMessage = r.err.message),
            s)
          );
        }
        return (
          !(null == e ? void 0 : e.captureLocation) &&
            !(function t(e) {
              e.forEach(function (e) {
                if ((delete e.location, (0, a.Wi)(e) || (0, a.Jo)(e)))
                  for (var r in e.options)
                    delete e.options[r].location, t(e.options[r].value);
                else
                  (0, a.uf)(e) && (0, a.Wh)(e.style)
                    ? delete e.style.location
                    : ((0, a.rp)(e) || (0, a.pe)(e)) && (0, a.Ii)(e.style)
                      ? delete e.style.location
                      : (0, a.HI)(e) && t(e.children);
              });
            })(r.val),
          r.val
        );
      }
      var u = o._;
    },
    596771: function (t, e, r) {
      "use strict";
      r.d(e, {
        _: function () {
          return N;
        },
      });
      var n,
        i,
        o = r(146150),
        a = r(827671),
        s = r(928125),
        u = r(387004),
        c = r(927882),
        l = r(944990),
        h = new RegExp("^".concat(u.p.source, "*")),
        f = new RegExp("".concat(u.p.source, "*$"));
      function p(t, e) {
        return { start: t, end: e };
      }
      var m = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        d = !!String.fromCodePoint,
        v = !!Object.fromEntries,
        g = !!String.prototype.codePointAt,
        y = !!String.prototype.trimStart,
        b = !!String.prototype.trimEnd,
        E = Number.isSafeInteger
          ? Number.isSafeInteger
          : function (t) {
              return (
                "number" == typeof t &&
                isFinite(t) &&
                Math.floor(t) === t &&
                9007199254740991 >= Math.abs(t)
              );
            },
        T = !0;
      try {
        var _ = B("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        T =
          (null === (n = _.exec("a")) || void 0 === n ? void 0 : n[0]) === "a";
      } catch (t) {
        T = !1;
      }
      var A = m
          ? function (t, e, r) {
              return t.startsWith(e, r);
            }
          : function (t, e, r) {
              return t.slice(r, r + e.length) === e;
            },
        I = d
          ? String.fromCodePoint
          : function () {
              for (var t, e = [], r = 0; r < arguments.length; r++)
                e[r] = arguments[r];
              for (var n = "", i = e.length, o = 0; i > o; ) {
                if ((t = e[o++]) > 1114111)
                  throw RangeError(t + " is not a valid code point");
                n +=
                  t < 65536
                    ? String.fromCharCode(t)
                    : String.fromCharCode(
                        ((t -= 65536) >> 10) + 55296,
                        (t % 1024) + 56320,
                      );
              }
              return n;
            },
        S = v
          ? Object.fromEntries
          : function (t) {
              for (var e = {}, r = 0; r < t.length; r++) {
                var n = t[r],
                  i = n[0],
                  o = n[1];
                e[i] = o;
              }
              return e;
            },
        L = g
          ? function (t, e) {
              return t.codePointAt(e);
            }
          : function (t, e) {
              var r,
                n = t.length;
              if (!(e < 0) && !(e >= n)) {
                var i = t.charCodeAt(e);
                return i < 55296 ||
                  i > 56319 ||
                  e + 1 === n ||
                  (r = t.charCodeAt(e + 1)) < 56320 ||
                  r > 57343
                  ? i
                  : ((i - 55296) << 10) + (r - 56320) + 65536;
              }
            },
        H = y
          ? function (t) {
              return t.trimStart();
            }
          : function (t) {
              return t.replace(h, "");
            },
        P = b
          ? function (t) {
              return t.trimEnd();
            }
          : function (t) {
              return t.replace(f, "");
            };
      function B(t, e) {
        return new RegExp(t, e);
      }
      if (T) {
        var w = B("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        i = function (t, e) {
          var r;
          return (
            (w.lastIndex = e),
            null !== (r = w.exec(t)[1]) && void 0 !== r ? r : ""
          );
        };
      } else
        i = function (t, e) {
          for (var r = []; ; ) {
            var n = L(t, e);
            if (
              void 0 === n ||
              M(n) ||
              (function (t) {
                return (
                  (t >= 33 && t <= 35) ||
                  36 === t ||
                  (t >= 37 && t <= 39) ||
                  40 === t ||
                  41 === t ||
                  42 === t ||
                  43 === t ||
                  44 === t ||
                  45 === t ||
                  (t >= 46 && t <= 47) ||
                  (t >= 58 && t <= 59) ||
                  (t >= 60 && t <= 62) ||
                  (t >= 63 && t <= 64) ||
                  91 === t ||
                  92 === t ||
                  93 === t ||
                  94 === t ||
                  96 === t ||
                  123 === t ||
                  124 === t ||
                  125 === t ||
                  126 === t ||
                  161 === t ||
                  (t >= 162 && t <= 165) ||
                  166 === t ||
                  167 === t ||
                  169 === t ||
                  171 === t ||
                  172 === t ||
                  174 === t ||
                  176 === t ||
                  177 === t ||
                  182 === t ||
                  187 === t ||
                  191 === t ||
                  215 === t ||
                  247 === t ||
                  (t >= 8208 && t <= 8213) ||
                  (t >= 8214 && t <= 8215) ||
                  8216 === t ||
                  8217 === t ||
                  8218 === t ||
                  (t >= 8219 && t <= 8220) ||
                  8221 === t ||
                  8222 === t ||
                  8223 === t ||
                  (t >= 8224 && t <= 8231) ||
                  (t >= 8240 && t <= 8248) ||
                  8249 === t ||
                  8250 === t ||
                  (t >= 8251 && t <= 8254) ||
                  (t >= 8257 && t <= 8259) ||
                  8260 === t ||
                  8261 === t ||
                  8262 === t ||
                  (t >= 8263 && t <= 8273) ||
                  8274 === t ||
                  8275 === t ||
                  (t >= 8277 && t <= 8286) ||
                  (t >= 8592 && t <= 8596) ||
                  (t >= 8597 && t <= 8601) ||
                  (t >= 8602 && t <= 8603) ||
                  (t >= 8604 && t <= 8607) ||
                  8608 === t ||
                  (t >= 8609 && t <= 8610) ||
                  8611 === t ||
                  (t >= 8612 && t <= 8613) ||
                  8614 === t ||
                  (t >= 8615 && t <= 8621) ||
                  8622 === t ||
                  (t >= 8623 && t <= 8653) ||
                  (t >= 8654 && t <= 8655) ||
                  (t >= 8656 && t <= 8657) ||
                  8658 === t ||
                  8659 === t ||
                  8660 === t ||
                  (t >= 8661 && t <= 8691) ||
                  (t >= 8692 && t <= 8959) ||
                  (t >= 8960 && t <= 8967) ||
                  8968 === t ||
                  8969 === t ||
                  8970 === t ||
                  8971 === t ||
                  (t >= 8972 && t <= 8991) ||
                  (t >= 8992 && t <= 8993) ||
                  (t >= 8994 && t <= 9e3) ||
                  9001 === t ||
                  9002 === t ||
                  (t >= 9003 && t <= 9083) ||
                  9084 === t ||
                  (t >= 9085 && t <= 9114) ||
                  (t >= 9115 && t <= 9139) ||
                  (t >= 9140 && t <= 9179) ||
                  (t >= 9180 && t <= 9185) ||
                  (t >= 9186 && t <= 9254) ||
                  (t >= 9255 && t <= 9279) ||
                  (t >= 9280 && t <= 9290) ||
                  (t >= 9291 && t <= 9311) ||
                  (t >= 9472 && t <= 9654) ||
                  9655 === t ||
                  (t >= 9656 && t <= 9664) ||
                  9665 === t ||
                  (t >= 9666 && t <= 9719) ||
                  (t >= 9720 && t <= 9727) ||
                  (t >= 9728 && t <= 9838) ||
                  9839 === t ||
                  (t >= 9840 && t <= 10087) ||
                  10088 === t ||
                  10089 === t ||
                  10090 === t ||
                  10091 === t ||
                  10092 === t ||
                  10093 === t ||
                  10094 === t ||
                  10095 === t ||
                  10096 === t ||
                  10097 === t ||
                  10098 === t ||
                  10099 === t ||
                  10100 === t ||
                  10101 === t ||
                  (t >= 10132 && t <= 10175) ||
                  (t >= 10176 && t <= 10180) ||
                  10181 === t ||
                  10182 === t ||
                  (t >= 10183 && t <= 10213) ||
                  10214 === t ||
                  10215 === t ||
                  10216 === t ||
                  10217 === t ||
                  10218 === t ||
                  10219 === t ||
                  10220 === t ||
                  10221 === t ||
                  10222 === t ||
                  10223 === t ||
                  (t >= 10224 && t <= 10239) ||
                  (t >= 10240 && t <= 10495) ||
                  (t >= 10496 && t <= 10626) ||
                  10627 === t ||
                  10628 === t ||
                  10629 === t ||
                  10630 === t ||
                  10631 === t ||
                  10632 === t ||
                  10633 === t ||
                  10634 === t ||
                  10635 === t ||
                  10636 === t ||
                  10637 === t ||
                  10638 === t ||
                  10639 === t ||
                  10640 === t ||
                  10641 === t ||
                  10642 === t ||
                  10643 === t ||
                  10644 === t ||
                  10645 === t ||
                  10646 === t ||
                  10647 === t ||
                  10648 === t ||
                  (t >= 10649 && t <= 10711) ||
                  10712 === t ||
                  10713 === t ||
                  10714 === t ||
                  10715 === t ||
                  (t >= 10716 && t <= 10747) ||
                  10748 === t ||
                  10749 === t ||
                  (t >= 10750 && t <= 11007) ||
                  (t >= 11008 && t <= 11055) ||
                  (t >= 11056 && t <= 11076) ||
                  (t >= 11077 && t <= 11078) ||
                  (t >= 11079 && t <= 11084) ||
                  (t >= 11085 && t <= 11123) ||
                  (t >= 11124 && t <= 11125) ||
                  (t >= 11126 && t <= 11157) ||
                  11158 === t ||
                  (t >= 11159 && t <= 11263) ||
                  (t >= 11776 && t <= 11777) ||
                  11778 === t ||
                  11779 === t ||
                  11780 === t ||
                  11781 === t ||
                  (t >= 11782 && t <= 11784) ||
                  11785 === t ||
                  11786 === t ||
                  11787 === t ||
                  11788 === t ||
                  11789 === t ||
                  (t >= 11790 && t <= 11798) ||
                  11799 === t ||
                  (t >= 11800 && t <= 11801) ||
                  11802 === t ||
                  11803 === t ||
                  11804 === t ||
                  11805 === t ||
                  (t >= 11806 && t <= 11807) ||
                  11808 === t ||
                  11809 === t ||
                  11810 === t ||
                  11811 === t ||
                  11812 === t ||
                  11813 === t ||
                  11814 === t ||
                  11815 === t ||
                  11816 === t ||
                  11817 === t ||
                  (t >= 11818 && t <= 11822) ||
                  11823 === t ||
                  (t >= 11824 && t <= 11833) ||
                  (t >= 11834 && t <= 11835) ||
                  (t >= 11836 && t <= 11839) ||
                  11840 === t ||
                  11841 === t ||
                  11842 === t ||
                  (t >= 11843 && t <= 11855) ||
                  (t >= 11856 && t <= 11857) ||
                  11858 === t ||
                  (t >= 11859 && t <= 11903) ||
                  (t >= 12289 && t <= 12291) ||
                  12296 === t ||
                  12297 === t ||
                  12298 === t ||
                  12299 === t ||
                  12300 === t ||
                  12301 === t ||
                  12302 === t ||
                  12303 === t ||
                  12304 === t ||
                  12305 === t ||
                  (t >= 12306 && t <= 12307) ||
                  12308 === t ||
                  12309 === t ||
                  12310 === t ||
                  12311 === t ||
                  12312 === t ||
                  12313 === t ||
                  12314 === t ||
                  12315 === t ||
                  12316 === t ||
                  12317 === t ||
                  (t >= 12318 && t <= 12319) ||
                  12320 === t ||
                  12336 === t ||
                  64830 === t ||
                  64831 === t ||
                  (t >= 65093 && t <= 65094)
                );
              })(n)
            )
              break;
            r.push(n), (e += n >= 65536 ? 2 : 1);
          }
          return I.apply(void 0, r);
        };
      var N = (function () {
        function t(t, e) {
          void 0 === e && (e = {}),
            (this.message = t),
            (this.position = { offset: 0, line: 1, column: 1 }),
            (this.ignoreTag = !!e.ignoreTag),
            (this.locale = e.locale),
            (this.requiresOtherClause = !!e.requiresOtherClause),
            (this.shouldParseSkeletons = !!e.shouldParseSkeletons);
        }
        return (
          (t.prototype.parse = function () {
            if (0 !== this.offset())
              throw Error("parser can only be used once");
            return this.parseMessage(0, "", !1);
          }),
          (t.prototype.parseMessage = function (t, e, r) {
            for (var n = []; !this.isEOF(); ) {
              var i = this.char();
              if (123 === i) {
                var o = this.parseArgument(t, r);
                if (o.err) return o;
                n.push(o.val);
              } else if (125 === i && t > 0) break;
              else if (35 === i && ("plural" === e || "selectordinal" === e)) {
                var u = this.clonePosition();
                this.bump(),
                  n.push({
                    type: s.wD.pound,
                    location: p(u, this.clonePosition()),
                  });
              } else if (60 !== i || this.ignoreTag || 47 !== this.peek()) {
                if (60 === i && !this.ignoreTag && R(this.peek() || 0)) {
                  var o = this.parseTag(t, e);
                  if (o.err) return o;
                  n.push(o.val);
                } else {
                  var o = this.parseLiteral(t, e);
                  if (o.err) return o;
                  n.push(o.val);
                }
              } else {
                if (!r)
                  return this.error(
                    a.o.UNMATCHED_CLOSING_TAG,
                    p(this.clonePosition(), this.clonePosition()),
                  );
                break;
              }
            }
            return { val: n, err: null };
          }),
          (t.prototype.parseTag = function (t, e) {
            var r = this.clonePosition();
            this.bump();
            var n = this.parseTagName();
            if ((this.bumpSpace(), this.bumpIf("/>")))
              return {
                val: {
                  type: s.wD.literal,
                  value: "<".concat(n, "/>"),
                  location: p(r, this.clonePosition()),
                },
                err: null,
              };
            if (!this.bumpIf(">"))
              return this.error(a.o.INVALID_TAG, p(r, this.clonePosition()));
            var i = this.parseMessage(t + 1, e, !0);
            if (i.err) return i;
            var o = i.val,
              u = this.clonePosition();
            if (!this.bumpIf("</"))
              return this.error(a.o.UNCLOSED_TAG, p(r, this.clonePosition()));
            if (this.isEOF() || !R(this.char()))
              return this.error(a.o.INVALID_TAG, p(u, this.clonePosition()));
            var c = this.clonePosition();
            return n !== this.parseTagName()
              ? this.error(
                  a.o.UNMATCHED_CLOSING_TAG,
                  p(c, this.clonePosition()),
                )
              : (this.bumpSpace(), this.bumpIf(">"))
                ? {
                    val: {
                      type: s.wD.tag,
                      value: n,
                      children: o,
                      location: p(r, this.clonePosition()),
                    },
                    err: null,
                  }
                : this.error(a.o.INVALID_TAG, p(u, this.clonePosition()));
          }),
          (t.prototype.parseTagName = function () {
            var t = this.offset();
            for (
              this.bump();
              !this.isEOF() &&
              (function (t) {
                return (
                  45 === t ||
                  46 === t ||
                  (t >= 48 && t <= 57) ||
                  95 === t ||
                  (t >= 97 && t <= 122) ||
                  (t >= 65 && t <= 90) ||
                  183 == t ||
                  (t >= 192 && t <= 214) ||
                  (t >= 216 && t <= 246) ||
                  (t >= 248 && t <= 893) ||
                  (t >= 895 && t <= 8191) ||
                  (t >= 8204 && t <= 8205) ||
                  (t >= 8255 && t <= 8256) ||
                  (t >= 8304 && t <= 8591) ||
                  (t >= 11264 && t <= 12271) ||
                  (t >= 12289 && t <= 55295) ||
                  (t >= 63744 && t <= 64975) ||
                  (t >= 65008 && t <= 65533) ||
                  (t >= 65536 && t <= 983039)
                );
              })(this.char());

            )
              this.bump();
            return this.message.slice(t, this.offset());
          }),
          (t.prototype.parseLiteral = function (t, e) {
            for (var r = this.clonePosition(), n = ""; ; ) {
              var i = this.tryParseQuote(e);
              if (i) {
                n += i;
                continue;
              }
              var o = this.tryParseUnquoted(t, e);
              if (o) {
                n += o;
                continue;
              }
              var a = this.tryParseLeftAngleBracket();
              if (a) {
                n += a;
                continue;
              }
              break;
            }
            var u = p(r, this.clonePosition());
            return {
              val: { type: s.wD.literal, value: n, location: u },
              err: null,
            };
          }),
          (t.prototype.tryParseLeftAngleBracket = function () {
            return !this.isEOF() &&
              60 === this.char() &&
              (this.ignoreTag ||
                !(function (t) {
                  return R(t) || 47 === t;
                })(this.peek() || 0))
              ? (this.bump(), "<")
              : null;
          }),
          (t.prototype.tryParseQuote = function (t) {
            if (this.isEOF() || 39 !== this.char()) return null;
            switch (this.peek()) {
              case 39:
                return this.bump(), this.bump(), "'";
              case 123:
              case 60:
              case 62:
              case 125:
                break;
              case 35:
                if ("plural" === t || "selectordinal" === t) break;
                return null;
              default:
                return null;
            }
            this.bump();
            var e = [this.char()];
            for (this.bump(); !this.isEOF(); ) {
              var r = this.char();
              if (39 === r) {
                if (39 === this.peek()) e.push(39), this.bump();
                else {
                  this.bump();
                  break;
                }
              } else e.push(r);
              this.bump();
            }
            return I.apply(void 0, e);
          }),
          (t.prototype.tryParseUnquoted = function (t, e) {
            if (this.isEOF()) return null;
            var r = this.char();
            return 60 === r ||
              123 === r ||
              (35 === r && ("plural" === e || "selectordinal" === e)) ||
              (125 === r && t > 0)
              ? null
              : (this.bump(), I(r));
          }),
          (t.prototype.parseArgument = function (t, e) {
            var r = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF()))
              return this.error(
                a.o.EXPECT_ARGUMENT_CLOSING_BRACE,
                p(r, this.clonePosition()),
              );
            if (125 === this.char())
              return (
                this.bump(),
                this.error(a.o.EMPTY_ARGUMENT, p(r, this.clonePosition()))
              );
            var n = this.parseIdentifierIfPossible().value;
            if (!n)
              return this.error(
                a.o.MALFORMED_ARGUMENT,
                p(r, this.clonePosition()),
              );
            if ((this.bumpSpace(), this.isEOF()))
              return this.error(
                a.o.EXPECT_ARGUMENT_CLOSING_BRACE,
                p(r, this.clonePosition()),
              );
            switch (this.char()) {
              case 125:
                return (
                  this.bump(),
                  {
                    val: {
                      type: s.wD.argument,
                      value: n,
                      location: p(r, this.clonePosition()),
                    },
                    err: null,
                  }
                );
              case 44:
                if ((this.bump(), this.bumpSpace(), this.isEOF()))
                  return this.error(
                    a.o.EXPECT_ARGUMENT_CLOSING_BRACE,
                    p(r, this.clonePosition()),
                  );
                return this.parseArgumentOptions(t, e, n, r);
              default:
                return this.error(
                  a.o.MALFORMED_ARGUMENT,
                  p(r, this.clonePosition()),
                );
            }
          }),
          (t.prototype.parseIdentifierIfPossible = function () {
            var t = this.clonePosition(),
              e = this.offset(),
              r = i(this.message, e),
              n = e + r.length;
            return (
              this.bumpTo(n), { value: r, location: p(t, this.clonePosition()) }
            );
          }),
          (t.prototype.parseArgumentOptions = function (t, e, r, n) {
            var i,
              u = this.clonePosition(),
              h = this.parseIdentifierIfPossible().value,
              f = this.clonePosition();
            switch (h) {
              case "":
                return this.error(a.o.EXPECT_ARGUMENT_TYPE, p(u, f));
              case "number":
              case "date":
              case "time":
                this.bumpSpace();
                var m = null;
                if (this.bumpIf(",")) {
                  this.bumpSpace();
                  var d = this.clonePosition(),
                    v = this.parseSimpleArgStyleIfPossible();
                  if (v.err) return v;
                  var g = P(v.val);
                  if (0 === g.length)
                    return this.error(
                      a.o.EXPECT_ARGUMENT_STYLE,
                      p(this.clonePosition(), this.clonePosition()),
                    );
                  m = { style: g, styleLocation: p(d, this.clonePosition()) };
                }
                var y = this.tryParseArgumentClose(n);
                if (y.err) return y;
                var b = p(n, this.clonePosition());
                if (m && A(null == m ? void 0 : m.style, "::", 0)) {
                  var E = H(m.style.slice(2));
                  if ("number" === h) {
                    var v = this.parseNumberSkeletonFromString(
                      E,
                      m.styleLocation,
                    );
                    if (v.err) return v;
                    return {
                      val: {
                        type: s.wD.number,
                        value: r,
                        location: b,
                        style: v.val,
                      },
                      err: null,
                    };
                  }
                  if (0 === E.length)
                    return this.error(a.o.EXPECT_DATE_TIME_SKELETON, b);
                  var T = E;
                  this.locale && (T = (0, l.T)(E, this.locale));
                  var g = {
                    type: s.aV.dateTime,
                    pattern: T,
                    location: m.styleLocation,
                    parsedOptions: this.shouldParseSkeletons
                      ? (0, c.TE)(T)
                      : {},
                  };
                  return {
                    val: {
                      type: "date" === h ? s.wD.date : s.wD.time,
                      value: r,
                      location: b,
                      style: g,
                    },
                    err: null,
                  };
                }
                return {
                  val: {
                    type:
                      "number" === h
                        ? s.wD.number
                        : "date" === h
                          ? s.wD.date
                          : s.wD.time,
                    value: r,
                    location: b,
                    style:
                      null !== (i = null == m ? void 0 : m.style) &&
                      void 0 !== i
                        ? i
                        : null,
                  },
                  err: null,
                };
              case "plural":
              case "selectordinal":
              case "select":
                var _ = this.clonePosition();
                if ((this.bumpSpace(), !this.bumpIf(",")))
                  return this.error(
                    a.o.EXPECT_SELECT_ARGUMENT_OPTIONS,
                    p(_, (0, o.pi)({}, _)),
                  );
                this.bumpSpace();
                var I = this.parseIdentifierIfPossible(),
                  L = 0;
                if ("select" !== h && "offset" === I.value) {
                  if (!this.bumpIf(":"))
                    return this.error(
                      a.o.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      p(this.clonePosition(), this.clonePosition()),
                    );
                  this.bumpSpace();
                  var v = this.tryParseDecimalInteger(
                    a.o.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                    a.o.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE,
                  );
                  if (v.err) return v;
                  this.bumpSpace(),
                    (I = this.parseIdentifierIfPossible()),
                    (L = v.val);
                }
                var B = this.tryParsePluralOrSelectOptions(t, h, e, I);
                if (B.err) return B;
                var y = this.tryParseArgumentClose(n);
                if (y.err) return y;
                var w = p(n, this.clonePosition());
                if ("select" === h)
                  return {
                    val: {
                      type: s.wD.select,
                      value: r,
                      options: S(B.val),
                      location: w,
                    },
                    err: null,
                  };
                return {
                  val: {
                    type: s.wD.plural,
                    value: r,
                    options: S(B.val),
                    offset: L,
                    pluralType: "plural" === h ? "cardinal" : "ordinal",
                    location: w,
                  },
                  err: null,
                };
              default:
                return this.error(a.o.INVALID_ARGUMENT_TYPE, p(u, f));
            }
          }),
          (t.prototype.tryParseArgumentClose = function (t) {
            return this.isEOF() || 125 !== this.char()
              ? this.error(
                  a.o.EXPECT_ARGUMENT_CLOSING_BRACE,
                  p(t, this.clonePosition()),
                )
              : (this.bump(), { val: !0, err: null });
          }),
          (t.prototype.parseSimpleArgStyleIfPossible = function () {
            for (var t = 0, e = this.clonePosition(); !this.isEOF(); )
              switch (this.char()) {
                case 39:
                  this.bump();
                  var r = this.clonePosition();
                  if (!this.bumpUntil("'"))
                    return this.error(
                      a.o.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                      p(r, this.clonePosition()),
                    );
                  this.bump();
                  break;
                case 123:
                  (t += 1), this.bump();
                  break;
                case 125:
                  if (!(t > 0))
                    return {
                      val: this.message.slice(e.offset, this.offset()),
                      err: null,
                    };
                  t -= 1;
                  break;
                default:
                  this.bump();
              }
            return {
              val: this.message.slice(e.offset, this.offset()),
              err: null,
            };
          }),
          (t.prototype.parseNumberSkeletonFromString = function (t, e) {
            var r = [];
            try {
              r = (0, c.OG)(t);
            } catch (t) {
              return this.error(a.o.INVALID_NUMBER_SKELETON, e);
            }
            return {
              val: {
                type: s.aV.number,
                tokens: r,
                location: e,
                parsedOptions: this.shouldParseSkeletons ? (0, c.Iu)(r) : {},
              },
              err: null,
            };
          }),
          (t.prototype.tryParsePluralOrSelectOptions = function (t, e, r, n) {
            for (
              var i, o = !1, s = [], u = new Set(), c = n.value, l = n.location;
              ;

            ) {
              if (0 === c.length) {
                var h = this.clonePosition();
                if ("select" !== e && this.bumpIf("=")) {
                  var f = this.tryParseDecimalInteger(
                    a.o.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                    a.o.INVALID_PLURAL_ARGUMENT_SELECTOR,
                  );
                  if (f.err) return f;
                  (l = p(h, this.clonePosition())),
                    (c = this.message.slice(h.offset, this.offset()));
                } else break;
              }
              if (u.has(c))
                return this.error(
                  "select" === e
                    ? a.o.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : a.o.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                  l,
                );
              "other" === c && (o = !0), this.bumpSpace();
              var m = this.clonePosition();
              if (!this.bumpIf("{"))
                return this.error(
                  "select" === e
                    ? a.o.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : a.o.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                  p(this.clonePosition(), this.clonePosition()),
                );
              var d = this.parseMessage(t + 1, e, r);
              if (d.err) return d;
              var v = this.tryParseArgumentClose(m);
              if (v.err) return v;
              s.push([
                c,
                { value: d.val, location: p(m, this.clonePosition()) },
              ]),
                u.add(c),
                this.bumpSpace(),
                (c = (i = this.parseIdentifierIfPossible()).value),
                (l = i.location);
            }
            return 0 === s.length
              ? this.error(
                  "select" === e
                    ? a.o.EXPECT_SELECT_ARGUMENT_SELECTOR
                    : a.o.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  p(this.clonePosition(), this.clonePosition()),
                )
              : this.requiresOtherClause && !o
                ? this.error(
                    a.o.MISSING_OTHER_CLAUSE,
                    p(this.clonePosition(), this.clonePosition()),
                  )
                : { val: s, err: null };
          }),
          (t.prototype.tryParseDecimalInteger = function (t, e) {
            var r = 1,
              n = this.clonePosition();
            this.bumpIf("+") || (this.bumpIf("-") && (r = -1));
            for (var i = !1, o = 0; !this.isEOF(); ) {
              var a = this.char();
              if (a >= 48 && a <= 57)
                (i = !0), (o = 10 * o + (a - 48)), this.bump();
              else break;
            }
            var s = p(n, this.clonePosition());
            return i
              ? E((o *= r))
                ? { val: o, err: null }
                : this.error(e, s)
              : this.error(t, s);
          }),
          (t.prototype.offset = function () {
            return this.position.offset;
          }),
          (t.prototype.isEOF = function () {
            return this.offset() === this.message.length;
          }),
          (t.prototype.clonePosition = function () {
            return {
              offset: this.position.offset,
              line: this.position.line,
              column: this.position.column,
            };
          }),
          (t.prototype.char = function () {
            var t = this.position.offset;
            if (t >= this.message.length) throw Error("out of bound");
            var e = L(this.message, t);
            if (void 0 === e)
              throw Error(
                "Offset ".concat(t, " is at invalid UTF-16 code unit boundary"),
              );
            return e;
          }),
          (t.prototype.error = function (t, e) {
            return {
              val: null,
              err: { kind: t, message: this.message, location: e },
            };
          }),
          (t.prototype.bump = function () {
            if (!this.isEOF()) {
              var t = this.char();
              10 === t
                ? ((this.position.line += 1),
                  (this.position.column = 1),
                  (this.position.offset += 1))
                : ((this.position.column += 1),
                  (this.position.offset += t < 65536 ? 1 : 2));
            }
          }),
          (t.prototype.bumpIf = function (t) {
            if (A(this.message, t, this.offset())) {
              for (var e = 0; e < t.length; e++) this.bump();
              return !0;
            }
            return !1;
          }),
          (t.prototype.bumpUntil = function (t) {
            var e = this.offset(),
              r = this.message.indexOf(t, e);
            return r >= 0
              ? (this.bumpTo(r), !0)
              : (this.bumpTo(this.message.length), !1);
          }),
          (t.prototype.bumpTo = function (t) {
            if (this.offset() > t)
              throw Error(
                "targetOffset "
                  .concat(
                    t,
                    " must be greater than or equal to the current offset ",
                  )
                  .concat(this.offset()),
              );
            for (t = Math.min(t, this.message.length); ; ) {
              var e = this.offset();
              if (e === t) break;
              if (e > t)
                throw Error(
                  "targetOffset ".concat(
                    t,
                    " is at invalid UTF-16 code unit boundary",
                  ),
                );
              if ((this.bump(), this.isEOF())) break;
            }
          }),
          (t.prototype.bumpSpace = function () {
            for (; !this.isEOF() && M(this.char()); ) this.bump();
          }),
          (t.prototype.peek = function () {
            if (this.isEOF()) return null;
            var t = this.char(),
              e = this.offset(),
              r = this.message.charCodeAt(e + (t >= 65536 ? 2 : 1));
            return null != r ? r : null;
          }),
          t
        );
      })();
      function R(t) {
        return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
      }
      function M(t) {
        return (
          (t >= 9 && t <= 13) ||
          32 === t ||
          133 === t ||
          (t >= 8206 && t <= 8207) ||
          8232 === t ||
          8233 === t
        );
      }
    },
    387004: function (t, e, r) {
      "use strict";
      r.d(e, {
        p: function () {
          return n;
        },
      });
      var n = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
    },
    779597: function (t, e, r) {
      "use strict";
      r.d(e, {
        _: function () {
          return n;
        },
      });
      var n = {
        "001": ["H", "h"],
        AC: ["H", "h", "hb", "hB"],
        AD: ["H", "hB"],
        AE: ["h", "hB", "hb", "H"],
        AF: ["H", "hb", "hB", "h"],
        AG: ["h", "hb", "H", "hB"],
        AI: ["H", "h", "hb", "hB"],
        AL: ["h", "H", "hB"],
        AM: ["H", "hB"],
        AO: ["H", "hB"],
        AR: ["H", "h", "hB", "hb"],
        AS: ["h", "H"],
        AT: ["H", "hB"],
        AU: ["h", "hb", "H", "hB"],
        AW: ["H", "hB"],
        AX: ["H"],
        AZ: ["H", "hB", "h"],
        BA: ["H", "hB", "h"],
        BB: ["h", "hb", "H", "hB"],
        BD: ["h", "hB", "H"],
        BE: ["H", "hB"],
        BF: ["H", "hB"],
        BG: ["H", "hB", "h"],
        BH: ["h", "hB", "hb", "H"],
        BI: ["H", "h"],
        BJ: ["H", "hB"],
        BL: ["H", "hB"],
        BM: ["h", "hb", "H", "hB"],
        BN: ["hb", "hB", "h", "H"],
        BO: ["H", "hB", "h", "hb"],
        BQ: ["H"],
        BR: ["H", "hB"],
        BS: ["h", "hb", "H", "hB"],
        BT: ["h", "H"],
        BW: ["H", "h", "hb", "hB"],
        BY: ["H", "h"],
        BZ: ["H", "h", "hb", "hB"],
        CA: ["h", "hb", "H", "hB"],
        CC: ["H", "h", "hb", "hB"],
        CD: ["hB", "H"],
        CF: ["H", "h", "hB"],
        CG: ["H", "hB"],
        CH: ["H", "hB", "h"],
        CI: ["H", "hB"],
        CK: ["H", "h", "hb", "hB"],
        CL: ["H", "h", "hB", "hb"],
        CM: ["H", "h", "hB"],
        CN: ["H", "hB", "hb", "h"],
        CO: ["h", "H", "hB", "hb"],
        CP: ["H"],
        CR: ["H", "h", "hB", "hb"],
        CU: ["H", "h", "hB", "hb"],
        CV: ["H", "hB"],
        CW: ["H", "hB"],
        CX: ["H", "h", "hb", "hB"],
        CY: ["h", "H", "hb", "hB"],
        CZ: ["H"],
        DE: ["H", "hB"],
        DG: ["H", "h", "hb", "hB"],
        DJ: ["h", "H"],
        DK: ["H"],
        DM: ["h", "hb", "H", "hB"],
        DO: ["h", "H", "hB", "hb"],
        DZ: ["h", "hB", "hb", "H"],
        EA: ["H", "h", "hB", "hb"],
        EC: ["H", "hB", "h", "hb"],
        EE: ["H", "hB"],
        EG: ["h", "hB", "hb", "H"],
        EH: ["h", "hB", "hb", "H"],
        ER: ["h", "H"],
        ES: ["H", "hB", "h", "hb"],
        ET: ["hB", "hb", "h", "H"],
        FI: ["H"],
        FJ: ["h", "hb", "H", "hB"],
        FK: ["H", "h", "hb", "hB"],
        FM: ["h", "hb", "H", "hB"],
        FO: ["H", "h"],
        FR: ["H", "hB"],
        GA: ["H", "hB"],
        GB: ["H", "h", "hb", "hB"],
        GD: ["h", "hb", "H", "hB"],
        GE: ["H", "hB", "h"],
        GF: ["H", "hB"],
        GG: ["H", "h", "hb", "hB"],
        GH: ["h", "H"],
        GI: ["H", "h", "hb", "hB"],
        GL: ["H", "h"],
        GM: ["h", "hb", "H", "hB"],
        GN: ["H", "hB"],
        GP: ["H", "hB"],
        GQ: ["H", "hB", "h", "hb"],
        GR: ["h", "H", "hb", "hB"],
        GT: ["H", "h", "hB", "hb"],
        GU: ["h", "hb", "H", "hB"],
        GW: ["H", "hB"],
        GY: ["h", "hb", "H", "hB"],
        HK: ["h", "hB", "hb", "H"],
        HN: ["H", "h", "hB", "hb"],
        HR: ["H", "hB"],
        HU: ["H", "h"],
        IC: ["H", "h", "hB", "hb"],
        ID: ["H"],
        IE: ["H", "h", "hb", "hB"],
        IL: ["H", "hB"],
        IM: ["H", "h", "hb", "hB"],
        IN: ["h", "H"],
        IO: ["H", "h", "hb", "hB"],
        IQ: ["h", "hB", "hb", "H"],
        IR: ["hB", "H"],
        IS: ["H"],
        IT: ["H", "hB"],
        JE: ["H", "h", "hb", "hB"],
        JM: ["h", "hb", "H", "hB"],
        JO: ["h", "hB", "hb", "H"],
        JP: ["H", "K", "h"],
        KE: ["hB", "hb", "H", "h"],
        KG: ["H", "h", "hB", "hb"],
        KH: ["hB", "h", "H", "hb"],
        KI: ["h", "hb", "H", "hB"],
        KM: ["H", "h", "hB", "hb"],
        KN: ["h", "hb", "H", "hB"],
        KP: ["h", "H", "hB", "hb"],
        KR: ["h", "H", "hB", "hb"],
        KW: ["h", "hB", "hb", "H"],
        KY: ["h", "hb", "H", "hB"],
        KZ: ["H", "hB"],
        LA: ["H", "hb", "hB", "h"],
        LB: ["h", "hB", "hb", "H"],
        LC: ["h", "hb", "H", "hB"],
        LI: ["H", "hB", "h"],
        LK: ["H", "h", "hB", "hb"],
        LR: ["h", "hb", "H", "hB"],
        LS: ["h", "H"],
        LT: ["H", "h", "hb", "hB"],
        LU: ["H", "h", "hB"],
        LV: ["H", "hB", "hb", "h"],
        LY: ["h", "hB", "hb", "H"],
        MA: ["H", "h", "hB", "hb"],
        MC: ["H", "hB"],
        MD: ["H", "hB"],
        ME: ["H", "hB", "h"],
        MF: ["H", "hB"],
        MG: ["H", "h"],
        MH: ["h", "hb", "H", "hB"],
        MK: ["H", "h", "hb", "hB"],
        ML: ["H"],
        MM: ["hB", "hb", "H", "h"],
        MN: ["H", "h", "hb", "hB"],
        MO: ["h", "hB", "hb", "H"],
        MP: ["h", "hb", "H", "hB"],
        MQ: ["H", "hB"],
        MR: ["h", "hB", "hb", "H"],
        MS: ["H", "h", "hb", "hB"],
        MT: ["H", "h"],
        MU: ["H", "h"],
        MV: ["H", "h"],
        MW: ["h", "hb", "H", "hB"],
        MX: ["H", "h", "hB", "hb"],
        MY: ["hb", "hB", "h", "H"],
        MZ: ["H", "hB"],
        NA: ["h", "H", "hB", "hb"],
        NC: ["H", "hB"],
        NE: ["H"],
        NF: ["H", "h", "hb", "hB"],
        NG: ["H", "h", "hb", "hB"],
        NI: ["H", "h", "hB", "hb"],
        NL: ["H", "hB"],
        NO: ["H", "h"],
        NP: ["H", "h", "hB"],
        NR: ["H", "h", "hb", "hB"],
        NU: ["H", "h", "hb", "hB"],
        NZ: ["h", "hb", "H", "hB"],
        OM: ["h", "hB", "hb", "H"],
        PA: ["h", "H", "hB", "hb"],
        PE: ["H", "hB", "h", "hb"],
        PF: ["H", "h", "hB"],
        PG: ["h", "H"],
        PH: ["h", "hB", "hb", "H"],
        PK: ["h", "hB", "H"],
        PL: ["H", "h"],
        PM: ["H", "hB"],
        PN: ["H", "h", "hb", "hB"],
        PR: ["h", "H", "hB", "hb"],
        PS: ["h", "hB", "hb", "H"],
        PT: ["H", "hB"],
        PW: ["h", "H"],
        PY: ["H", "h", "hB", "hb"],
        QA: ["h", "hB", "hb", "H"],
        RE: ["H", "hB"],
        RO: ["H", "hB"],
        RS: ["H", "hB", "h"],
        RU: ["H"],
        RW: ["H", "h"],
        SA: ["h", "hB", "hb", "H"],
        SB: ["h", "hb", "H", "hB"],
        SC: ["H", "h", "hB"],
        SD: ["h", "hB", "hb", "H"],
        SE: ["H"],
        SG: ["h", "hb", "H", "hB"],
        SH: ["H", "h", "hb", "hB"],
        SI: ["H", "hB"],
        SJ: ["H"],
        SK: ["H"],
        SL: ["h", "hb", "H", "hB"],
        SM: ["H", "h", "hB"],
        SN: ["H", "h", "hB"],
        SO: ["h", "H"],
        SR: ["H", "hB"],
        SS: ["h", "hb", "H", "hB"],
        ST: ["H", "hB"],
        SV: ["H", "h", "hB", "hb"],
        SX: ["H", "h", "hb", "hB"],
        SY: ["h", "hB", "hb", "H"],
        SZ: ["h", "hb", "H", "hB"],
        TA: ["H", "h", "hb", "hB"],
        TC: ["h", "hb", "H", "hB"],
        TD: ["h", "H", "hB"],
        TF: ["H", "h", "hB"],
        TG: ["H", "hB"],
        TH: ["H", "h"],
        TJ: ["H", "h"],
        TL: ["H", "hB", "hb", "h"],
        TM: ["H", "h"],
        TN: ["h", "hB", "hb", "H"],
        TO: ["h", "H"],
        TR: ["H", "hB"],
        TT: ["h", "hb", "H", "hB"],
        TW: ["hB", "hb", "h", "H"],
        TZ: ["hB", "hb", "H", "h"],
        UA: ["H", "hB", "h"],
        UG: ["hB", "hb", "H", "h"],
        UM: ["h", "hb", "H", "hB"],
        US: ["h", "hb", "H", "hB"],
        UY: ["H", "h", "hB", "hb"],
        UZ: ["H", "hB", "h"],
        VA: ["H", "h", "hB"],
        VC: ["h", "hb", "H", "hB"],
        VE: ["h", "H", "hB", "hb"],
        VG: ["h", "hb", "H", "hB"],
        VI: ["h", "hb", "H", "hB"],
        VN: ["H", "h"],
        VU: ["h", "H"],
        WF: ["H", "hB"],
        WS: ["h", "H"],
        XK: ["H", "hB", "h"],
        YE: ["h", "hB", "hb", "H"],
        YT: ["H", "hB"],
        ZA: ["H", "h", "hb", "hB"],
        ZM: ["h", "hb", "H", "hB"],
        ZW: ["H", "h"],
        "af-ZA": ["H", "h", "hB", "hb"],
        "ar-001": ["h", "hB", "hb", "H"],
        "ca-ES": ["H", "h", "hB"],
        "en-001": ["h", "hb", "H", "hB"],
        "es-BO": ["H", "h", "hB", "hb"],
        "es-BR": ["H", "h", "hB", "hb"],
        "es-EC": ["H", "h", "hB", "hb"],
        "es-ES": ["H", "h", "hB", "hb"],
        "es-GQ": ["H", "h", "hB", "hb"],
        "es-PE": ["H", "h", "hB", "hb"],
        "fr-CA": ["H", "h", "hB"],
        "gl-ES": ["H", "h", "hB"],
        "gu-IN": ["hB", "hb", "h", "H"],
        "hi-IN": ["hB", "h", "H"],
        "it-CH": ["H", "h", "hB"],
        "it-IT": ["H", "h", "hB"],
        "kn-IN": ["hB", "h", "H"],
        "ml-IN": ["hB", "h", "H"],
        "mr-IN": ["hB", "hb", "h", "H"],
        "pa-IN": ["hB", "hb", "h", "H"],
        "ta-IN": ["hB", "h", "hb", "H"],
        "te-IN": ["hB", "h", "H"],
        "zu-ZA": ["H", "hB", "hb", "h"],
      };
    },
    928125: function (t, e, r) {
      "use strict";
      var n, i, o, a;
      function s(t) {
        return t.type === n.literal;
      }
      function u(t) {
        return t.type === n.argument;
      }
      function c(t) {
        return t.type === n.number;
      }
      function l(t) {
        return t.type === n.date;
      }
      function h(t) {
        return t.type === n.time;
      }
      function f(t) {
        return t.type === n.select;
      }
      function p(t) {
        return t.type === n.plural;
      }
      function m(t) {
        return t.type === n.pound;
      }
      function d(t) {
        return t.type === n.tag;
      }
      function v(t) {
        return !!(t && "object" == typeof t && t.type === i.number);
      }
      function g(t) {
        return !!(t && "object" == typeof t && t.type === i.dateTime);
      }
      function y(t) {
        return { type: n.literal, value: t };
      }
      function b(t, e) {
        return { type: n.number, value: t, style: e };
      }
      r.d(e, {
        HI: function () {
          return d;
        },
        Ii: function () {
          return g;
        },
        Jo: function () {
          return p;
        },
        O4: function () {
          return s;
        },
        VG: function () {
          return u;
        },
        Wh: function () {
          return v;
        },
        Wi: function () {
          return f;
        },
        aV: function () {
          return i;
        },
        mD: function () {
          return y;
        },
        pe: function () {
          return h;
        },
        qx: function () {
          return b;
        },
        rp: function () {
          return l;
        },
        uf: function () {
          return c;
        },
        wD: function () {
          return n;
        },
        yx: function () {
          return m;
        },
      }),
        ((o = n || (n = {}))[(o.literal = 0)] = "literal"),
        (o[(o.argument = 1)] = "argument"),
        (o[(o.number = 2)] = "number"),
        (o[(o.date = 3)] = "date"),
        (o[(o.time = 4)] = "time"),
        (o[(o.select = 5)] = "select"),
        (o[(o.plural = 6)] = "plural"),
        (o[(o.pound = 7)] = "pound"),
        (o[(o.tag = 8)] = "tag"),
        ((a = i || (i = {}))[(a.number = 0)] = "number"),
        (a[(a.dateTime = 1)] = "dateTime");
    },
    99925: function (t, e, r) {
      "use strict";
      r.d(e, {
        T: function () {
          return i;
        },
      });
      var n =
        /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
      function i(t) {
        var e = {};
        return (
          t.replace(n, function (t) {
            var r = t.length;
            switch (t[0]) {
              case "G":
                e.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
                break;
              case "y":
                e.year = 2 === r ? "2-digit" : "numeric";
                break;
              case "Y":
              case "u":
              case "U":
              case "r":
                throw RangeError(
                  "`Y/u/U/r` (year) patterns are not supported, use `y` instead",
                );
              case "q":
              case "Q":
                throw RangeError("`q/Q` (quarter) patterns are not supported");
              case "M":
              case "L":
                e.month = ["numeric", "2-digit", "short", "long", "narrow"][
                  r - 1
                ];
                break;
              case "w":
              case "W":
                throw RangeError("`w/W` (week) patterns are not supported");
              case "d":
                e.day = ["numeric", "2-digit"][r - 1];
                break;
              case "D":
              case "F":
              case "g":
                throw RangeError(
                  "`D/F/g` (day) patterns are not supported, use `d` instead",
                );
              case "E":
                e.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
                break;
              case "e":
                if (r < 4)
                  throw RangeError(
                    "`e..eee` (weekday) patterns are not supported",
                  );
                e.weekday = ["short", "long", "narrow", "short"][r - 4];
                break;
              case "c":
                if (r < 4)
                  throw RangeError(
                    "`c..ccc` (weekday) patterns are not supported",
                  );
                e.weekday = ["short", "long", "narrow", "short"][r - 4];
                break;
              case "a":
                e.hour12 = !0;
                break;
              case "b":
              case "B":
                throw RangeError(
                  "`b/B` (period) patterns are not supported, use `a` instead",
                );
              case "h":
                (e.hourCycle = "h12"), (e.hour = ["numeric", "2-digit"][r - 1]);
                break;
              case "H":
                (e.hourCycle = "h23"), (e.hour = ["numeric", "2-digit"][r - 1]);
                break;
              case "K":
                (e.hourCycle = "h11"), (e.hour = ["numeric", "2-digit"][r - 1]);
                break;
              case "k":
                (e.hourCycle = "h24"), (e.hour = ["numeric", "2-digit"][r - 1]);
                break;
              case "j":
              case "J":
              case "C":
                throw RangeError(
                  "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead",
                );
              case "m":
                e.minute = ["numeric", "2-digit"][r - 1];
                break;
              case "s":
                e.second = ["numeric", "2-digit"][r - 1];
                break;
              case "S":
              case "A":
                throw RangeError(
                  "`S/A` (second) patterns are not supported, use `s` instead",
                );
              case "z":
                e.timeZoneName = r < 4 ? "short" : "long";
                break;
              case "Z":
              case "O":
              case "v":
              case "V":
              case "X":
              case "x":
                throw RangeError(
                  "`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead",
                );
            }
            return "";
          }),
          e
        );
      }
    },
    927882: function (t, e, r) {
      "use strict";
      r.d(e, {
        Iu: function () {
          return i.I;
        },
        OG: function () {
          return i.O;
        },
        TE: function () {
          return n.T;
        },
      });
      var n = r(99925),
        i = r(356228);
    },
    356228: function (t, e, r) {
      "use strict";
      r.d(e, {
        I: function () {
          return p;
        },
        O: function () {
          return o;
        },
      });
      var n = r(146150),
        i = r(647005);
      function o(t) {
        if (0 === t.length) throw Error("Number skeleton cannot be empty");
        for (
          var e = t.split(i.r).filter(function (t) {
              return t.length > 0;
            }),
            r = [],
            n = 0;
          n < e.length;
          n++
        ) {
          var o = e[n].split("/");
          if (0 === o.length) throw Error("Invalid number skeleton");
          for (var a = o[0], s = o.slice(1), u = 0; u < s.length; u++)
            if (0 === s[u].length) throw Error("Invalid number skeleton");
          r.push({ stem: a, options: s });
        }
        return r;
      }
      var a = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        s = /^(@+)?(\+|#+)?[rs]?$/g,
        u = /(\*)(0+)|(#+)(0+)|(0+)/g,
        c = /^(0+)$/;
      function l(t) {
        var e = {};
        return (
          "r" === t[t.length - 1]
            ? (e.roundingPriority = "morePrecision")
            : "s" === t[t.length - 1] && (e.roundingPriority = "lessPrecision"),
          t.replace(s, function (t, r, n) {
            return (
              "string" != typeof n
                ? ((e.minimumSignificantDigits = r.length),
                  (e.maximumSignificantDigits = r.length))
                : "+" === n
                  ? (e.minimumSignificantDigits = r.length)
                  : "#" === r[0]
                    ? (e.maximumSignificantDigits = r.length)
                    : ((e.minimumSignificantDigits = r.length),
                      (e.maximumSignificantDigits =
                        r.length + ("string" == typeof n ? n.length : 0))),
              ""
            );
          }),
          e
        );
      }
      function h(t) {
        switch (t) {
          case "sign-auto":
            return { signDisplay: "auto" };
          case "sign-accounting":
          case "()":
            return { currencySign: "accounting" };
          case "sign-always":
          case "+!":
            return { signDisplay: "always" };
          case "sign-accounting-always":
          case "()!":
            return { signDisplay: "always", currencySign: "accounting" };
          case "sign-except-zero":
          case "+?":
            return { signDisplay: "exceptZero" };
          case "sign-accounting-except-zero":
          case "()?":
            return { signDisplay: "exceptZero", currencySign: "accounting" };
          case "sign-never":
          case "+_":
            return { signDisplay: "never" };
        }
      }
      function f(t) {
        var e = h(t);
        return e ? e : {};
      }
      function p(t) {
        for (var e = {}, r = 0; r < t.length; r++) {
          var i = t[r];
          switch (i.stem) {
            case "percent":
            case "%":
              e.style = "percent";
              continue;
            case "%x100":
              (e.style = "percent"), (e.scale = 100);
              continue;
            case "currency":
              (e.style = "currency"), (e.currency = i.options[0]);
              continue;
            case "group-off":
            case ",_":
              e.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              e.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              (e.style = "unit"),
                (e.unit = i.options[0].replace(/^(.*?)-/, ""));
              continue;
            case "compact-short":
            case "K":
              (e.notation = "compact"), (e.compactDisplay = "short");
              continue;
            case "compact-long":
            case "KK":
              (e.notation = "compact"), (e.compactDisplay = "long");
              continue;
            case "scientific":
              e = (0, n.pi)(
                (0, n.pi)((0, n.pi)({}, e), { notation: "scientific" }),
                i.options.reduce(function (t, e) {
                  return (0, n.pi)((0, n.pi)({}, t), f(e));
                }, {}),
              );
              continue;
            case "engineering":
              e = (0, n.pi)(
                (0, n.pi)((0, n.pi)({}, e), { notation: "engineering" }),
                i.options.reduce(function (t, e) {
                  return (0, n.pi)((0, n.pi)({}, t), f(e));
                }, {}),
              );
              continue;
            case "notation-simple":
              e.notation = "standard";
              continue;
            case "unit-width-narrow":
              (e.currencyDisplay = "narrowSymbol"), (e.unitDisplay = "narrow");
              continue;
            case "unit-width-short":
              (e.currencyDisplay = "code"), (e.unitDisplay = "short");
              continue;
            case "unit-width-full-name":
              (e.currencyDisplay = "name"), (e.unitDisplay = "long");
              continue;
            case "unit-width-iso-code":
              e.currencyDisplay = "symbol";
              continue;
            case "scale":
              e.scale = parseFloat(i.options[0]);
              continue;
            case "rounding-mode-floor":
              e.roundingMode = "floor";
              continue;
            case "rounding-mode-ceiling":
              e.roundingMode = "ceil";
              continue;
            case "rounding-mode-down":
              e.roundingMode = "trunc";
              continue;
            case "rounding-mode-up":
              e.roundingMode = "expand";
              continue;
            case "rounding-mode-half-even":
              e.roundingMode = "halfEven";
              continue;
            case "rounding-mode-half-down":
              e.roundingMode = "halfTrunc";
              continue;
            case "rounding-mode-half-up":
              e.roundingMode = "halfExpand";
              continue;
            case "integer-width":
              if (i.options.length > 1)
                throw RangeError(
                  "integer-width stems only accept a single optional option",
                );
              i.options[0].replace(u, function (t, r, n, i, o, a) {
                if (r) e.minimumIntegerDigits = n.length;
                else if (i && o)
                  throw Error(
                    "We currently do not support maximum integer digits",
                  );
                else if (a)
                  throw Error(
                    "We currently do not support exact integer digits",
                  );
                return "";
              });
              continue;
          }
          if (c.test(i.stem)) {
            e.minimumIntegerDigits = i.stem.length;
            continue;
          }
          if (a.test(i.stem)) {
            if (i.options.length > 1)
              throw RangeError(
                "Fraction-precision stems only accept a single optional option",
              );
            i.stem.replace(a, function (t, r, n, i, o, a) {
              return (
                "*" === n
                  ? (e.minimumFractionDigits = r.length)
                  : i && "#" === i[0]
                    ? (e.maximumFractionDigits = i.length)
                    : o && a
                      ? ((e.minimumFractionDigits = o.length),
                        (e.maximumFractionDigits = o.length + a.length))
                      : ((e.minimumFractionDigits = r.length),
                        (e.maximumFractionDigits = r.length)),
                ""
              );
            });
            var o = i.options[0];
            "w" === o
              ? (e = (0, n.pi)((0, n.pi)({}, e), {
                  trailingZeroDisplay: "stripIfInteger",
                }))
              : o && (e = (0, n.pi)((0, n.pi)({}, e), l(o)));
            continue;
          }
          if (s.test(i.stem)) {
            e = (0, n.pi)((0, n.pi)({}, e), l(i.stem));
            continue;
          }
          var p = h(i.stem);
          p && (e = (0, n.pi)((0, n.pi)({}, e), p));
          var m = (function (t) {
            var e;
            if (
              ("E" === t[0] && "E" === t[1]
                ? ((e = { notation: "engineering" }), (t = t.slice(2)))
                : "E" === t[0] &&
                  ((e = { notation: "scientific" }), (t = t.slice(1))),
              e)
            ) {
              var r = t.slice(0, 2);
              if (
                ("+!" === r
                  ? ((e.signDisplay = "always"), (t = t.slice(2)))
                  : "+?" === r &&
                    ((e.signDisplay = "exceptZero"), (t = t.slice(2))),
                !c.test(t))
              )
                throw Error("Malformed concise eng/scientific notation");
              e.minimumIntegerDigits = t.length;
            }
            return e;
          })(i.stem);
          m && (e = (0, n.pi)((0, n.pi)({}, e), m));
        }
        return e;
      }
    },
    647005: function (t, e, r) {
      "use strict";
      r.d(e, {
        r: function () {
          return n;
        },
      });
      var n = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
    },
    65243: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          DEFAULT_INTL_CONFIG: function () {
            return n.Z0;
          },
          IntlError: function () {
            return i.Rw;
          },
          IntlErrorCode: function () {
            return i.bc;
          },
          IntlFormatError: function () {
            return i.Qe;
          },
          InvalidConfigError: function () {
            return i.OV;
          },
          MessageFormatError: function () {
            return i.X9;
          },
          MissingDataError: function () {
            return i.gb;
          },
          MissingTranslationError: function () {
            return i.$6;
          },
          UnsupportedFormatterError: function () {
            return i.wI;
          },
          createFormatters: function () {
            return n.ax;
          },
          createIntl: function () {
            return f.d;
          },
          createIntlCache: function () {
            return n.Sn;
          },
          defineMessage: function () {
            return m;
          },
          defineMessages: function () {
            return p;
          },
          filterProps: function () {
            return n.L6;
          },
          formatDate: function () {
            return a.p6;
          },
          formatDateToParts: function () {
            return a.OI;
          },
          formatDisplayName: function () {
            return s.I;
          },
          formatList: function () {
            return u.I;
          },
          formatMessage: function () {
            return o.w;
          },
          formatNumber: function () {
            return h.uf;
          },
          formatNumberToParts: function () {
            return h.T;
          },
          formatPlural: function () {
            return c.R;
          },
          formatRelativeTime: function () {
            return l.S;
          },
          formatTime: function () {
            return a.mr;
          },
          formatTimeToParts: function () {
            return a.uE;
          },
          getNamedFormat: function () {
            return n.TB;
          },
        });
      var n = r(789903),
        i = r(973682),
        o = r(754551),
        a = r(953429),
        s = r(431622),
        u = r(171045),
        c = r(95620),
        l = r(917744),
        h = r(347442),
        f = r(915522);
      function p(t) {
        return t;
      }
      function m(t) {
        return t;
      }
    },
    915522: function (t, e, r) {
      "use strict";
      r.d(e, {
        d: function () {
          return p;
        },
      });
      var n = r(146150),
        i = r(789903),
        o = r(973682),
        a = r(347442),
        s = r(917744),
        u = r(953429),
        c = r(95620),
        l = r(754551),
        h = r(171045),
        f = r(431622);
      function p(t, e) {
        var r = (0, i.ax)(e),
          p = (0, n.pi)((0, n.pi)({}, i.Z0), t),
          m = p.locale,
          d = p.defaultLocale,
          v = p.onError;
        return (
          m
            ? !Intl.NumberFormat.supportedLocalesOf(m).length && v
              ? v(
                  new o.gb(
                    'Missing locale data for locale: "'
                      .concat(
                        m,
                        '" in Intl.NumberFormat. Using default locale: "',
                      )
                      .concat(
                        d,
                        '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details',
                      ),
                  ),
                )
              : !Intl.DateTimeFormat.supportedLocalesOf(m).length &&
                v &&
                v(
                  new o.gb(
                    'Missing locale data for locale: "'
                      .concat(
                        m,
                        '" in Intl.DateTimeFormat. Using default locale: "',
                      )
                      .concat(
                        d,
                        '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details',
                      ),
                  ),
                )
            : (v &&
                v(
                  new o.OV(
                    '"locale" was not configured, using "'.concat(
                      d,
                      '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details',
                    ),
                  ),
                ),
              (p.locale = p.defaultLocale || "en")),
          !(function (t) {
            var e;
            if (
              t.onWarn &&
              t.defaultRichTextElements &&
              "string" == typeof ((e = t.messages || {}), e[Object.keys(e)[0]])
            )
              t.onWarn(
                '[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution',
              );
          })(p),
          (0, n.pi)((0, n.pi)({}, p), {
            formatters: r,
            formatNumber: a.uf.bind(null, p, r.getNumberFormat),
            formatNumberToParts: a.T.bind(null, p, r.getNumberFormat),
            formatRelativeTime: s.S.bind(null, p, r.getRelativeTimeFormat),
            formatDate: u.p6.bind(null, p, r.getDateTimeFormat),
            formatDateToParts: u.OI.bind(null, p, r.getDateTimeFormat),
            formatTime: u.mr.bind(null, p, r.getDateTimeFormat),
            formatDateTimeRange: u.Hk.bind(null, p, r.getDateTimeFormat),
            formatTimeToParts: u.uE.bind(null, p, r.getDateTimeFormat),
            formatPlural: c.R.bind(null, p, r.getPluralRules),
            formatMessage: l.w.bind(null, p, r),
            $t: l.w.bind(null, p, r),
            formatList: h.I.bind(null, p, r.getListFormat),
            formatListToParts: h.T.bind(null, p, r.getListFormat),
            formatDisplayName: f.I.bind(null, p, r.getDisplayNames),
          })
        );
      }
    },
    953429: function (t, e, r) {
      "use strict";
      r.d(e, {
        Hk: function () {
          return l;
        },
        OI: function () {
          return h;
        },
        mr: function () {
          return c;
        },
        p6: function () {
          return u;
        },
        uE: function () {
          return f;
        },
      });
      var n = r(146150),
        i = r(789903),
        o = r(973682),
        a = [
          "formatMatcher",
          "timeZone",
          "hour12",
          "weekday",
          "era",
          "year",
          "month",
          "day",
          "hour",
          "minute",
          "second",
          "timeZoneName",
          "hourCycle",
          "dateStyle",
          "timeStyle",
          "calendar",
          "numberingSystem",
          "fractionalSecondDigits",
        ];
      function s(t, e, r, o) {
        var s = t.locale,
          u = t.formats,
          c = t.onError,
          l = t.timeZone;
        void 0 === o && (o = {});
        var h = o.format,
          f = (0, n.pi)(
            (0, n.pi)({}, l && { timeZone: l }),
            h && (0, i.TB)(u, e, h, c),
          ),
          p = (0, i.L6)(o, a, f);
        return (
          "time" === e &&
            !p.hour &&
            !p.minute &&
            !p.second &&
            !p.timeStyle &&
            !p.dateStyle &&
            (p = (0, n.pi)((0, n.pi)({}, p), {
              hour: "numeric",
              minute: "numeric",
            })),
          r(s, p)
        );
      }
      function u(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var i = r[0],
          a = r[1],
          u = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return s(t, "date", e, void 0 === a ? {} : a).format(u);
        } catch (e) {
          t.onError(new o.Qe("Error formatting date.", t.locale, e));
        }
        return String(u);
      }
      function c(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var i = r[0],
          a = r[1],
          u = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return s(t, "time", e, void 0 === a ? {} : a).format(u);
        } catch (e) {
          t.onError(new o.Qe("Error formatting time.", t.locale, e));
        }
        return String(u);
      }
      function l(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var s = r[0],
          u = r[1],
          c = r[2],
          l = t.timeZone,
          h = t.locale,
          f = t.onError,
          p = (0, i.L6)(void 0 === c ? {} : c, a, l ? { timeZone: l } : {});
        try {
          return e(h, p).formatRange(s, u);
        } catch (e) {
          f(new o.Qe("Error formatting date time range.", t.locale, e));
        }
        return String(s);
      }
      function h(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var i = r[0],
          a = r[1],
          u = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return s(t, "date", e, void 0 === a ? {} : a).formatToParts(u);
        } catch (e) {
          t.onError(new o.Qe("Error formatting date.", t.locale, e));
        }
        return [];
      }
      function f(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var i = r[0],
          a = r[1],
          u = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return s(t, "time", e, void 0 === a ? {} : a).formatToParts(u);
        } catch (e) {
          t.onError(new o.Qe("Error formatting time.", t.locale, e));
        }
        return [];
      }
    },
    431622: function (t, e, r) {
      "use strict";
      r.d(e, {
        I: function () {
          return s;
        },
      });
      var n = r(789903),
        i = r(78385),
        o = r(973682),
        a = ["style", "type", "fallback", "languageDisplay"];
      function s(t, e, r, s) {
        var u = t.locale,
          c = t.onError;
        !Intl.DisplayNames &&
          c(
            new i.u_(
              'Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',
              i.jK.MISSING_INTL_API,
            ),
          );
        var l = (0, n.L6)(s, a);
        try {
          return e(u, l).of(r);
        } catch (t) {
          c(new o.Qe("Error formatting display name.", u, t));
        }
      }
    },
    973682: function (t, e, r) {
      "use strict";
      r.d(e, {
        $6: function () {
          return f;
        },
        OV: function () {
          return u;
        },
        Qe: function () {
          return l;
        },
        Rw: function () {
          return a;
        },
        X9: function () {
          return h;
        },
        bc: function () {
          return i;
        },
        gb: function () {
          return c;
        },
        wI: function () {
          return s;
        },
      });
      var n,
        i,
        o = r(146150);
      ((n = i || (i = {})).FORMAT_ERROR = "FORMAT_ERROR"),
        (n.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER"),
        (n.INVALID_CONFIG = "INVALID_CONFIG"),
        (n.MISSING_DATA = "MISSING_DATA"),
        (n.MISSING_TRANSLATION = "MISSING_TRANSLATION");
      var a = (function (t) {
          function e(r, n, i) {
            var o = this,
              a = i ? (i instanceof Error ? i : Error(String(i))) : void 0;
            return (
              ((o =
                t.call(
                  this,
                  "[@formatjs/intl Error "
                    .concat(r, "] ")
                    .concat(n, "\n")
                    .concat(
                      a ? "\n".concat(a.message, "\n").concat(a.stack) : "",
                    ),
                ) || this).code = r),
              "function" == typeof Error.captureStackTrace &&
                Error.captureStackTrace(o, e),
              o
            );
          }
          return (0, o.ZT)(e, t), e;
        })(Error),
        s = (function (t) {
          function e(e, r) {
            return t.call(this, i.UNSUPPORTED_FORMATTER, e, r) || this;
          }
          return (0, o.ZT)(e, t), e;
        })(a),
        u = (function (t) {
          function e(e, r) {
            return t.call(this, i.INVALID_CONFIG, e, r) || this;
          }
          return (0, o.ZT)(e, t), e;
        })(a),
        c = (function (t) {
          function e(e, r) {
            return t.call(this, i.MISSING_DATA, e, r) || this;
          }
          return (0, o.ZT)(e, t), e;
        })(a),
        l = (function (t) {
          function e(e, r, n) {
            var o =
              t.call(
                this,
                i.FORMAT_ERROR,
                "".concat(e, "\nLocale: ").concat(r, "\n"),
                n,
              ) || this;
            return (o.locale = r), o;
          }
          return (0, o.ZT)(e, t), e;
        })(a),
        h = (function (t) {
          function e(e, r, n, i) {
            var o =
              t.call(
                this,
                ""
                  .concat(e, "\nMessageID: ")
                  .concat(null == n ? void 0 : n.id, "\nDefault Message: ")
                  .concat(
                    null == n ? void 0 : n.defaultMessage,
                    "\nDescription: ",
                  )
                  .concat(null == n ? void 0 : n.description, "\n"),
                r,
                i,
              ) || this;
            return (o.descriptor = n), (o.locale = r), o;
          }
          return (0, o.ZT)(e, t), e;
        })(l),
        f = (function (t) {
          function e(e, r) {
            var n =
              t.call(
                this,
                i.MISSING_TRANSLATION,
                'Missing message: "'
                  .concat(e.id, '" for locale "')
                  .concat(r, '", using ')
                  .concat(
                    e.defaultMessage
                      ? "default message (".concat(
                          "string" == typeof e.defaultMessage
                            ? e.defaultMessage
                            : e.defaultMessage
                                .map(function (t) {
                                  var e;
                                  return null !== (e = t.value) && void 0 !== e
                                    ? e
                                    : JSON.stringify(t);
                                })
                                .join(),
                          ")",
                        )
                      : "id",
                    " as fallback.",
                  ),
              ) || this;
            return (n.descriptor = e), n;
          }
          return (0, o.ZT)(e, t), e;
        })(a);
    },
    171045: function (t, e, r) {
      "use strict";
      r.d(e, {
        I: function () {
          return c;
        },
        T: function () {
          return l;
        },
      });
      var n = r(146150),
        i = r(789903),
        o = r(78385),
        a = r(973682),
        s = ["type", "style"],
        u = Date.now();
      function c(t, e, r, n) {
        void 0 === n && (n = {});
        var i = l(t, e, r, n).reduce(function (t, e) {
          var r = e.value;
          return (
            "string" != typeof r
              ? t.push(r)
              : "string" == typeof t[t.length - 1]
                ? (t[t.length - 1] += r)
                : t.push(r),
            t
          );
        }, []);
        return 1 === i.length ? i[0] : 0 === i.length ? "" : i;
      }
      function l(t, e, r, c) {
        var l = t.locale,
          h = t.onError;
        void 0 === c && (c = {}),
          !Intl.ListFormat &&
            h(
              new o.u_(
                'Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',
                o.jK.MISSING_INTL_API,
              ),
            );
        var f = (0, i.L6)(c, s);
        try {
          var p = {},
            m = r.map(function (t, e) {
              if ("object" == typeof t) {
                var r,
                  n = ((r = e), "".concat(u, "_").concat(r, "_").concat(u));
                return (p[n] = t), n;
              }
              return String(t);
            });
          return e(l, f)
            .formatToParts(m)
            .map(function (t) {
              return "literal" === t.type
                ? t
                : (0, n.pi)((0, n.pi)({}, t), { value: p[t.value] || t.value });
            });
        } catch (t) {
          h(new a.Qe("Error formatting list.", l, t));
        }
        return r;
      }
    },
    754551: function (t, e, r) {
      "use strict";
      r.d(e, {
        w: function () {
          return h;
        },
      });
      var n = r(146150),
        i = r(28866),
        o = r(670458),
        a = r(973682),
        s = r(859159);
      function u(t, e) {
        return Object.keys(t).reduce(function (r, i) {
          return (r[i] = (0, n.pi)({ timeZone: e }, t[i])), r;
        }, {});
      }
      function c(t, e) {
        return Object.keys((0, n.pi)((0, n.pi)({}, t), e)).reduce(function (
          r,
          i,
        ) {
          return (r[i] = (0, n.pi)((0, n.pi)({}, t[i] || {}), e[i] || {})), r;
        }, {});
      }
      function l(t, e) {
        if (!e) return t;
        var r = o.C.formats;
        return (0, n.pi)((0, n.pi)((0, n.pi)({}, r), t), {
          date: c(u(r.date, e), u(t.date || {}, e)),
          time: c(u(r.time, e), u(t.time || {}, e)),
        });
      }
      var h = function (t, e, r, o, u) {
        var c = t.locale,
          h = t.formats,
          f = t.messages,
          p = t.defaultLocale,
          m = t.defaultFormats,
          d = t.fallbackOnEmptyString,
          v = t.onError,
          g = t.timeZone,
          y = t.defaultRichTextElements;
        void 0 === r && (r = { id: "" });
        var b = r.id,
          E = r.defaultMessage;
        (0, i.kG)(
          !!b,
          "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue",
        );
        var T = String(b),
          _ = f && Object.prototype.hasOwnProperty.call(f, T) && f[T];
        if (Array.isArray(_) && 1 === _.length && _[0].type === s.TYPE.literal)
          return _[0].value;
        if (!o && _ && "string" == typeof _ && !y)
          return _.replace(/'\{(.*?)\}'/gi, "{$1}");
        if (
          ((o = (0, n.pi)((0, n.pi)({}, y), o || {})),
          (h = l(h, g)),
          (m = l(m, g)),
          !_)
        ) {
          if (!1 === d && "" === _) return _;
          if (
            ((!E || (c && c.toLowerCase() !== p.toLowerCase())) &&
              v(new a.$6(r, c)),
            E)
          )
            try {
              var A = e.getMessageFormat(E, p, m, u);
              return A.format(o);
            } catch (t) {
              return (
                v(
                  new a.X9(
                    'Error formatting default message for: "'.concat(
                      T,
                      '", rendering default message verbatim',
                    ),
                    c,
                    r,
                    t,
                  ),
                ),
                "string" == typeof E ? E : T
              );
            }
          return T;
        }
        try {
          var A = e.getMessageFormat(
            _,
            c,
            h,
            (0, n.pi)({ formatters: e }, u || {}),
          );
          return A.format(o);
        } catch (t) {
          v(
            new a.X9(
              'Error formatting message: "'
                .concat(T, '", using ')
                .concat(E ? "default message" : "id", " as fallback."),
              c,
              r,
              t,
            ),
          );
        }
        if (E)
          try {
            var A = e.getMessageFormat(E, p, m, u);
            return A.format(o);
          } catch (t) {
            v(
              new a.X9(
                'Error formatting the default message for: "'.concat(
                  T,
                  '", rendering message verbatim',
                ),
                c,
                r,
                t,
              ),
            );
          }
        return "string" == typeof _ ? _ : "string" == typeof E ? E : T;
      };
    },
    347442: function (t, e, r) {
      "use strict";
      r.d(e, {
        T: function () {
          return u;
        },
        uf: function () {
          return s;
        },
      });
      var n = r(973682),
        i = r(789903),
        o = [
          "style",
          "currency",
          "unit",
          "unitDisplay",
          "useGrouping",
          "minimumIntegerDigits",
          "minimumFractionDigits",
          "maximumFractionDigits",
          "minimumSignificantDigits",
          "maximumSignificantDigits",
          "compactDisplay",
          "currencyDisplay",
          "currencySign",
          "notation",
          "signDisplay",
          "unit",
          "unitDisplay",
          "numberingSystem",
          "trailingZeroDisplay",
          "roundingPriority",
          "roundingIncrement",
          "roundingMode",
        ];
      function a(t, e, r) {
        var n = t.locale,
          a = t.formats,
          s = t.onError;
        void 0 === r && (r = {});
        var u = r.format,
          c = (u && (0, i.TB)(a, "number", u, s)) || {};
        return e(n, (0, i.L6)(r, o, c));
      }
      function s(t, e, r, i) {
        void 0 === i && (i = {});
        try {
          return a(t, e, i).format(r);
        } catch (e) {
          t.onError(new n.Qe("Error formatting number.", t.locale, e));
        }
        return String(r);
      }
      function u(t, e, r, i) {
        void 0 === i && (i = {});
        try {
          return a(t, e, i).formatToParts(r);
        } catch (e) {
          t.onError(new n.Qe("Error formatting number.", t.locale, e));
        }
        return [];
      }
    },
    95620: function (t, e, r) {
      "use strict";
      r.d(e, {
        R: function () {
          return s;
        },
      });
      var n = r(789903),
        i = r(973682),
        o = r(78385),
        a = ["type"];
      function s(t, e, r, s) {
        var u = t.locale,
          c = t.onError;
        void 0 === s && (s = {}),
          !Intl.PluralRules &&
            c(
              new o.u_(
                'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                o.jK.MISSING_INTL_API,
              ),
            );
        var l = (0, n.L6)(s, a);
        try {
          return e(u, l).select(r);
        } catch (t) {
          c(new i.Qe("Error formatting plural.", u, t));
        }
        return "other";
      }
    },
    917744: function (t, e, r) {
      "use strict";
      r.d(e, {
        S: function () {
          return s;
        },
      });
      var n = r(789903),
        i = r(78385),
        o = r(973682),
        a = ["numeric", "style"];
      function s(t, e, r, s, u) {
        void 0 === u && (u = {}),
          !s && (s = "second"),
          !Intl.RelativeTimeFormat &&
            t.onError(
              new i.u_(
                'Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',
                i.jK.MISSING_INTL_API,
              ),
            );
        try {
          var c, l, h, f, p, m, d, v;
          return ((c = t),
          (l = e),
          (h = u),
          (f = c.locale),
          (p = c.formats),
          (m = c.onError),
          void 0 === h && (h = {}),
          (v = (!!(d = h.format) && (0, n.TB)(p, "relative", d, m)) || {}),
          l(f, (0, n.L6)(h, a, v))).format(r, s);
        } catch (e) {
          t.onError(new o.Qe("Error formatting relative time.", t.locale, e));
        }
        return String(r);
      }
    },
    789903: function (t, e, r) {
      "use strict";
      r.d(e, {
        L6: function () {
          return s;
        },
        Sn: function () {
          return c;
        },
        TB: function () {
          return f;
        },
        Z0: function () {
          return u;
        },
        ax: function () {
          return h;
        },
      });
      var n = r(146150),
        i = r(670458),
        o = r(857840),
        a = r(973682);
      function s(t, e, r) {
        return (
          void 0 === r && (r = {}),
          e.reduce(function (e, n) {
            return n in t ? (e[n] = t[n]) : n in r && (e[n] = r[n]), e;
          }, {})
        );
      }
      var u = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function (t) {},
        onWarn: function (t) {},
      };
      function c() {
        return {
          dateTime: {},
          number: {},
          message: {},
          relativeTime: {},
          pluralRules: {},
          list: {},
          displayNames: {},
        };
      }
      function l(t) {
        return {
          create: function () {
            return {
              get: function (e) {
                return t[e];
              },
              set: function (e, r) {
                t[e] = r;
              },
            };
          },
        };
      }
      function h(t) {
        void 0 === t && (t = c());
        var e = Intl.RelativeTimeFormat,
          r = Intl.ListFormat,
          a = Intl.DisplayNames,
          s = (0, o.H)(
            function () {
              for (var t, e = [], r = 0; r < arguments.length; r++)
                e[r] = arguments[r];
              return new ((t = Intl.DateTimeFormat).bind.apply(
                t,
                (0, n.ev)([void 0], e, !1),
              ))();
            },
            { cache: l(t.dateTime), strategy: o.A.variadic },
          ),
          u = (0, o.H)(
            function () {
              for (var t, e = [], r = 0; r < arguments.length; r++)
                e[r] = arguments[r];
              return new ((t = Intl.NumberFormat).bind.apply(
                t,
                (0, n.ev)([void 0], e, !1),
              ))();
            },
            { cache: l(t.number), strategy: o.A.variadic },
          ),
          h = (0, o.H)(
            function () {
              for (var t, e = [], r = 0; r < arguments.length; r++)
                e[r] = arguments[r];
              return new ((t = Intl.PluralRules).bind.apply(
                t,
                (0, n.ev)([void 0], e, !1),
              ))();
            },
            { cache: l(t.pluralRules), strategy: o.A.variadic },
          );
        return {
          getDateTimeFormat: s,
          getNumberFormat: u,
          getMessageFormat: (0, o.H)(
            function (t, e, r, o) {
              return new i.C(
                t,
                e,
                r,
                (0, n.pi)(
                  {
                    formatters: {
                      getNumberFormat: u,
                      getDateTimeFormat: s,
                      getPluralRules: h,
                    },
                  },
                  o || {},
                ),
              );
            },
            { cache: l(t.message), strategy: o.A.variadic },
          ),
          getRelativeTimeFormat: (0, o.H)(
            function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              return new (e.bind.apply(e, (0, n.ev)([void 0], t, !1)))();
            },
            { cache: l(t.relativeTime), strategy: o.A.variadic },
          ),
          getPluralRules: h,
          getListFormat: (0, o.H)(
            function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return new (r.bind.apply(r, (0, n.ev)([void 0], t, !1)))();
            },
            { cache: l(t.list), strategy: o.A.variadic },
          ),
          getDisplayNames: (0, o.H)(
            function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return new (a.bind.apply(a, (0, n.ev)([void 0], t, !1)))();
            },
            { cache: l(t.displayNames), strategy: o.A.variadic },
          ),
        };
      }
      function f(t, e, r, n) {
        var i,
          o = t && t[e];
        if ((o && (i = o[r]), i)) return i;
        n(new a.wI("No ".concat(e, " format named: ").concat(r)));
      }
    },
    639576: function (t, e, r) {
      "use strict";
      var n = r(147018),
        i = r(345374),
        o = r(886960),
        a = r(49693),
        s = r(980855),
        u = r(299623),
        c = r(959318),
        l = Array,
        h = Math.max,
        f = Math.min;
      n(
        { target: "Array", proto: !0 },
        {
          toSpliced: function (t, e) {
            var r,
              n,
              i,
              p,
              m = u(this),
              d = a(m),
              v = s(t, d),
              g = arguments.length,
              y = 0;
            for (
              0 === g
                ? (r = n = 0)
                : 1 === g
                  ? ((r = 0), (n = d - v))
                  : ((r = g - 2), (n = f(h(c(e), 0), d - v))),
                p = l((i = o(d + r - n)));
              y < v;
              y++
            )
              p[y] = m[y];
            for (; y < v + r; y++) p[y] = arguments[y - v + 2];
            for (; y < i; y++) p[y] = m[y + n - r];
            return p;
          },
        },
      ),
        i("toSpliced");
    },
    817080: function (t) {
      var e =
        e ||
        (function (t) {
          "use strict";
          if (
            !(
              "undefined" != typeof navigator &&
              /MSIE [1-9]\./.test(navigator.userAgent)
            )
          ) {
            var e = t.document,
              r = function () {
                return t.URL || t.webkitURL || t;
              },
              n = e.createElementNS("http://www.w3.org/1999/xhtml", "a"),
              i = "download" in n,
              o = function (t) {
                var e = new MouseEvent("click");
                t.dispatchEvent(e);
              },
              a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
              s = t.webkitRequestFileSystem,
              u = t.requestFileSystem || s || t.mozRequestFileSystem,
              c = function (e) {
                (t.setImmediate || t.setTimeout)(function () {
                  throw e;
                }, 0);
              },
              l = "application/octet-stream",
              h = 0,
              f = function (t) {
                setTimeout(function () {
                  "string" == typeof t ? r().revokeObjectURL(t) : t.remove();
                }, 4e4);
              },
              p = function (t, e, r) {
                for (var n = (e = [].concat(e)).length; n--; ) {
                  var i = t["on" + e[n]];
                  if ("function" == typeof i)
                    try {
                      i.call(t, r || t);
                    } catch (t) {
                      c(t);
                    }
                }
              },
              m = function (t) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                  t.type,
                )
                  ? new Blob(["\xef\xbb\xbf", t], { type: t.type })
                  : t;
              },
              d = function (e, c, d) {
                !d && (e = m(e));
                var v,
                  g,
                  y = this,
                  b = e.type,
                  E = !1,
                  T = function () {
                    p(y, "writestart progress write writeend".split(" "));
                  },
                  _ = function () {
                    if (g && a && "undefined" != typeof FileReader) {
                      var n = new FileReader();
                      (n.onloadend = function () {
                        var t = n.result;
                        (g.location.href =
                          "data:attachment/file" + t.slice(t.search(/[,;]/))),
                          (y.readyState = y.DONE),
                          T();
                      }),
                        n.readAsDataURL(e),
                        (y.readyState = y.INIT);
                      return;
                    }
                    (E || !v) && (v = r().createObjectURL(e)),
                      g
                        ? (g.location.href = v)
                        : void 0 === t.open(v, "_blank") &&
                          a &&
                          (t.location.href = v),
                      (y.readyState = y.DONE),
                      T(),
                      f(v);
                  },
                  A = function (t) {
                    return function () {
                      if (y.readyState !== y.DONE)
                        return t.apply(this, arguments);
                    };
                  },
                  I = { create: !0, exclusive: !1 };
                if (((y.readyState = y.INIT), !c && (c = "download"), i)) {
                  (v = r().createObjectURL(e)),
                    setTimeout(function () {
                      (n.href = v),
                        (n.download = c),
                        o(n),
                        T(),
                        f(v),
                        (y.readyState = y.DONE);
                    });
                  return;
                }
                if (
                  (t.chrome &&
                    b &&
                    b !== l &&
                    ((e = (e.slice || e.webkitSlice).call(e, 0, e.size, l)),
                    (E = !0)),
                  s && "download" !== c && (c += ".download"),
                  (b === l || s) && (g = t),
                  !u)
                ) {
                  _();
                  return;
                }
                (h += e.size),
                  u(
                    t.TEMPORARY,
                    h,
                    A(function (t) {
                      t.root.getDirectory(
                        "saved",
                        I,
                        A(function (t) {
                          var r = function () {
                            t.getFile(
                              c,
                              I,
                              A(function (t) {
                                t.createWriter(
                                  A(function (r) {
                                    (r.onwriteend = function (e) {
                                      (g.location.href = t.toURL()),
                                        (y.readyState = y.DONE),
                                        p(y, "writeend", e),
                                        f(t);
                                    }),
                                      (r.onerror = function () {
                                        var t = r.error;
                                        t.code !== t.ABORT_ERR && _();
                                      }),
                                      "writestart progress write abort"
                                        .split(" ")
                                        .forEach(function (t) {
                                          r["on" + t] = y["on" + t];
                                        }),
                                      r.write(e),
                                      (y.abort = function () {
                                        r.abort(), (y.readyState = y.DONE);
                                      }),
                                      (y.readyState = y.WRITING);
                                  }),
                                  _,
                                );
                              }),
                              _,
                            );
                          };
                          t.getFile(
                            c,
                            { create: !1 },
                            A(function (t) {
                              t.remove(), r();
                            }),
                            A(function (t) {
                              t.code === t.NOT_FOUND_ERR ? r() : _();
                            }),
                          );
                        }),
                        _,
                      );
                    }),
                    _,
                  );
              },
              v = d.prototype;
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
              ? function (t, e, r) {
                  return (
                    !r && (t = m(t)),
                    navigator.msSaveOrOpenBlob(t, e || "download")
                  );
                }
              : ((v.abort = function () {
                  (this.readyState = this.DONE), p(this, "abort");
                }),
                (v.readyState = v.INIT = 0),
                (v.WRITING = 1),
                (v.DONE = 2),
                (v.error =
                  v.onwritestart =
                  v.onprogress =
                  v.onwrite =
                  v.onabort =
                  v.onerror =
                  v.onwriteend =
                    null),
                function (t, e, r) {
                  return new d(t, e, r);
                });
          }
        })(
          ("undefined" != typeof self && self) ||
            ("undefined" != typeof window && window) ||
            this.content,
        );
      t.exports
        ? (t.exports.saveAs = e)
        : "undefined" != typeof define &&
          null !== define &&
          null !== define.amd &&
          define([], function () {
            return e;
          });
    },
    766989: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          ErrorCode: function () {
            return i.jK;
          },
          FormatError: function () {
            return i.u_;
          },
          IntlMessageFormat: function () {
            return n.C;
          },
          IntlMessageFormat: function () {
            return n.C;
          },
          InvalidValueError: function () {
            return i.C8;
          },
          InvalidValueTypeError: function () {
            return i.YR;
          },
          MissingValueError: function () {
            return i.HR;
          },
          PART_TYPE: function () {
            return o.du;
          },
          formatToParts: function () {
            return o.FK;
          },
          isFormatXMLElementFn: function () {
            return o.Gt;
          },
        });
      var n = r(670458),
        i = r(78385),
        o = r(589983);
      e.default = n.C;
    },
    670458: function (t, e, r) {
      "use strict";
      r.d(e, {
        C: function () {
          return u;
        },
      });
      var n = r(146150),
        i = r(859159),
        o = r(857840),
        a = r(589983);
      function s(t) {
        return {
          create: function () {
            return {
              get: function (e) {
                return t[e];
              },
              set: function (e, r) {
                t[e] = r;
              },
            };
          },
        };
      }
      var u = (function () {
        function t(e, r, i, u) {
          var c,
            l,
            h,
            f = this;
          if (
            (void 0 === r && (r = t.defaultLocale),
            (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {},
            }),
            (this.format = function (t) {
              var e = f.formatToParts(t);
              if (1 === e.length) return e[0].value;
              var r = e.reduce(function (t, e) {
                return (
                  t.length &&
                  e.type === a.du.literal &&
                  "string" == typeof t[t.length - 1]
                    ? (t[t.length - 1] += e.value)
                    : t.push(e.value),
                  t
                );
              }, []);
              return r.length <= 1 ? r[0] || "" : r;
            }),
            (this.formatToParts = function (t) {
              return (0, a.FK)(
                f.ast,
                f.locales,
                f.formatters,
                f.formats,
                t,
                void 0,
                f.message,
              );
            }),
            (this.resolvedOptions = function () {
              var t;
              return {
                locale:
                  (null === (t = f.resolvedLocale) || void 0 === t
                    ? void 0
                    : t.toString()) ||
                  Intl.NumberFormat.supportedLocalesOf(f.locales)[0],
              };
            }),
            (this.getAst = function () {
              return f.ast;
            }),
            (this.locales = r),
            (this.resolvedLocale = t.resolveLocale(r)),
            "string" == typeof e)
          ) {
            if (((this.message = e), !t.__parse))
              throw TypeError(
                "IntlMessageFormat.__parse must be set to process `message` of type `string`",
              );
            var p = u || {},
              m = (p.formatters, (0, n._T)(p, ["formatters"]));
            this.ast = t.__parse(
              e,
              (0, n.pi)((0, n.pi)({}, m), { locale: this.resolvedLocale }),
            );
          } else this.ast = e;
          if (!Array.isArray(this.ast))
            throw TypeError("A message must be provided as a String or AST.");
          (this.formats =
            ((c = t.formats),
            (l = i)
              ? Object.keys(c).reduce(
                  function (t, e) {
                    var r, i;
                    return (
                      (t[e] =
                        ((r = c[e]),
                        (i = l[e])
                          ? (0, n.pi)(
                              (0, n.pi)((0, n.pi)({}, r || {}), i || {}),
                              Object.keys(r).reduce(function (t, e) {
                                return (
                                  (t[e] = (0, n.pi)(
                                    (0, n.pi)({}, r[e]),
                                    i[e] || {},
                                  )),
                                  t
                                );
                              }, {}),
                            )
                          : r)),
                      t
                    );
                  },
                  (0, n.pi)({}, c),
                )
              : c)),
            (this.formatters =
              (u && u.formatters) ||
              (void 0 === (h = this.formatterCache) &&
                (h = { number: {}, dateTime: {}, pluralRules: {} }),
              {
                getNumberFormat: (0, o.H)(
                  function () {
                    for (var t, e = [], r = 0; r < arguments.length; r++)
                      e[r] = arguments[r];
                    return new ((t = Intl.NumberFormat).bind.apply(
                      t,
                      (0, n.ev)([void 0], e, !1),
                    ))();
                  },
                  { cache: s(h.number), strategy: o.A.variadic },
                ),
                getDateTimeFormat: (0, o.H)(
                  function () {
                    for (var t, e = [], r = 0; r < arguments.length; r++)
                      e[r] = arguments[r];
                    return new ((t = Intl.DateTimeFormat).bind.apply(
                      t,
                      (0, n.ev)([void 0], e, !1),
                    ))();
                  },
                  { cache: s(h.dateTime), strategy: o.A.variadic },
                ),
                getPluralRules: (0, o.H)(
                  function () {
                    for (var t, e = [], r = 0; r < arguments.length; r++)
                      e[r] = arguments[r];
                    return new ((t = Intl.PluralRules).bind.apply(
                      t,
                      (0, n.ev)([void 0], e, !1),
                    ))();
                  },
                  { cache: s(h.pluralRules), strategy: o.A.variadic },
                ),
              }));
        }
        return (
          Object.defineProperty(t, "defaultLocale", {
            get: function () {
              return (
                !t.memoizedDefaultLocale &&
                  (t.memoizedDefaultLocale =
                    new Intl.NumberFormat().resolvedOptions().locale),
                t.memoizedDefaultLocale
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.memoizedDefaultLocale = null),
          (t.resolveLocale = function (t) {
            if (void 0 !== Intl.Locale) {
              var e = Intl.NumberFormat.supportedLocalesOf(t);
              return e.length > 0
                ? new Intl.Locale(e[0])
                : new Intl.Locale("string" == typeof t ? t : t[0]);
            }
          }),
          (t.__parse = i.parse),
          (t.formats = {
            number: {
              integer: { maximumFractionDigits: 0 },
              currency: { style: "currency" },
              percent: { style: "percent" },
            },
            date: {
              short: { month: "numeric", day: "numeric", year: "2-digit" },
              medium: { month: "short", day: "numeric", year: "numeric" },
              long: { month: "long", day: "numeric", year: "numeric" },
              full: {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              },
            },
            time: {
              short: { hour: "numeric", minute: "numeric" },
              medium: { hour: "numeric", minute: "numeric", second: "numeric" },
              long: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short",
              },
              full: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short",
              },
            },
          }),
          t
        );
      })();
    },
    78385: function (t, e, r) {
      "use strict";
      r.d(e, {
        C8: function () {
          return s;
        },
        HR: function () {
          return c;
        },
        YR: function () {
          return u;
        },
        jK: function () {
          return i;
        },
        u_: function () {
          return a;
        },
      });
      var n,
        i,
        o = r(146150);
      ((n = i || (i = {})).MISSING_VALUE = "MISSING_VALUE"),
        (n.INVALID_VALUE = "INVALID_VALUE"),
        (n.MISSING_INTL_API = "MISSING_INTL_API");
      var a = (function (t) {
          function e(e, r, n) {
            var i = t.call(this, e) || this;
            return (i.code = r), (i.originalMessage = n), i;
          }
          return (
            (0, o.ZT)(e, t),
            (e.prototype.toString = function () {
              return "[formatjs Error: "
                .concat(this.code, "] ")
                .concat(this.message);
            }),
            e
          );
        })(Error),
        s = (function (t) {
          function e(e, r, n, o) {
            return (
              t.call(
                this,
                'Invalid values for "'
                  .concat(e, '": "')
                  .concat(r, '". Options are "')
                  .concat(Object.keys(n).join('", "'), '"'),
                i.INVALID_VALUE,
                o,
              ) || this
            );
          }
          return (0, o.ZT)(e, t), e;
        })(a),
        u = (function (t) {
          function e(e, r, n) {
            return (
              t.call(
                this,
                'Value for "'.concat(e, '" must be of type ').concat(r),
                i.INVALID_VALUE,
                n,
              ) || this
            );
          }
          return (0, o.ZT)(e, t), e;
        })(a),
        c = (function (t) {
          function e(e, r) {
            return (
              t.call(
                this,
                'The intl string context variable "'
                  .concat(e, '" was not provided to the string "')
                  .concat(r, '"'),
                i.MISSING_VALUE,
                r,
              ) || this
            );
          }
          return (0, o.ZT)(e, t), e;
        })(a);
    },
    589983: function (t, e, r) {
      "use strict";
      r.d(e, {
        FK: function () {
          return function t(e, r, n, u, c, l, h) {
            if (1 === e.length && (0, o.isLiteralElement)(e[0]))
              return [{ type: i.literal, value: e[0].value }];
            for (var f, p = [], m = 0; m < e.length; m++) {
              var d = e[m];
              if ((0, o.isLiteralElement)(d)) {
                p.push({ type: i.literal, value: d.value });
                continue;
              }
              if ((0, o.isPoundElement)(d)) {
                "number" == typeof l &&
                  p.push({
                    type: i.literal,
                    value: n.getNumberFormat(r).format(l),
                  });
                continue;
              }
              var v = d.value;
              if (!(c && v in c)) throw new a.HR(v, h);
              var g = c[v];
              if ((0, o.isArgumentElement)(d)) {
                (!g || "string" == typeof g || "number" == typeof g) &&
                  (g =
                    "string" == typeof g || "number" == typeof g
                      ? String(g)
                      : ""),
                  p.push({
                    type: "string" == typeof g ? i.literal : i.object,
                    value: g,
                  });
                continue;
              }
              if ((0, o.isDateElement)(d)) {
                var y =
                  "string" == typeof d.style
                    ? u.date[d.style]
                    : (0, o.isDateTimeSkeleton)(d.style)
                      ? d.style.parsedOptions
                      : void 0;
                p.push({
                  type: i.literal,
                  value: n.getDateTimeFormat(r, y).format(g),
                });
                continue;
              }
              if ((0, o.isTimeElement)(d)) {
                var y =
                  "string" == typeof d.style
                    ? u.time[d.style]
                    : (0, o.isDateTimeSkeleton)(d.style)
                      ? d.style.parsedOptions
                      : u.time.medium;
                p.push({
                  type: i.literal,
                  value: n.getDateTimeFormat(r, y).format(g),
                });
                continue;
              }
              if ((0, o.isNumberElement)(d)) {
                var y =
                  "string" == typeof d.style
                    ? u.number[d.style]
                    : (0, o.isNumberSkeleton)(d.style)
                      ? d.style.parsedOptions
                      : void 0;
                y && y.scale && (g *= y.scale || 1),
                  p.push({
                    type: i.literal,
                    value: n.getNumberFormat(r, y).format(g),
                  });
                continue;
              }
              if ((0, o.isTagElement)(d)) {
                var b = d.children,
                  E = d.value,
                  T = c[E];
                if (!s(T)) throw new a.YR(E, "function", h);
                var _ = T(
                  t(b, r, n, u, c, l).map(function (t) {
                    return t.value;
                  }),
                );
                !Array.isArray(_) && (_ = [_]),
                  p.push.apply(
                    p,
                    _.map(function (t) {
                      return {
                        type: "string" == typeof t ? i.literal : i.object,
                        value: t,
                      };
                    }),
                  );
              }
              if ((0, o.isSelectElement)(d)) {
                var A = d.options[g] || d.options.other;
                if (!A) throw new a.C8(d.value, g, Object.keys(d.options), h);
                p.push.apply(p, t(A.value, r, n, u, c));
                continue;
              }
              if ((0, o.isPluralElement)(d)) {
                var A = d.options["=".concat(g)];
                if (!A) {
                  if (!Intl.PluralRules)
                    throw new a.u_(
                      'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                      a.jK.MISSING_INTL_API,
                      h,
                    );
                  var I = n
                    .getPluralRules(r, { type: d.pluralType })
                    .select(g - (d.offset || 0));
                  A = d.options[I] || d.options.other;
                }
                if (!A) throw new a.C8(d.value, g, Object.keys(d.options), h);
                p.push.apply(p, t(A.value, r, n, u, c, g - (d.offset || 0)));
                continue;
              }
            }
            return (f = p).length < 2
              ? f
              : f.reduce(function (t, e) {
                  var r = t[t.length - 1];
                  return (
                    r && r.type === i.literal && e.type === i.literal
                      ? (r.value += e.value)
                      : t.push(e),
                    t
                  );
                }, []);
          };
        },
        Gt: function () {
          return s;
        },
        du: function () {
          return i;
        },
      });
      var n,
        i,
        o = r(859159),
        a = r(78385);
      ((n = i || (i = {}))[(n.literal = 0)] = "literal"),
        (n[(n.object = 1)] = "object");
      function s(t) {
        return "function" == typeof t;
      }
    },
    785902: function (t) {
      t.exports = function (t, e, r, n) {
        for (var i = -1, o = null == t ? 0 : t.length; ++i < o; ) {
          var a = t[i];
          e(n, a, r(a), t);
        }
        return n;
      };
    },
    800128: function (t, e, r) {
      var n = r(543744);
      t.exports = function (t, e, r, i) {
        return (
          n(t, function (t, n, o) {
            e(i, t, r(t), o);
          }),
          i
        );
      };
    },
    757009: function (t, e, r) {
      var n = r(785902),
        i = r(800128),
        o = r(256098),
        a = r(290677);
      t.exports = function (t, e) {
        return function (r, s) {
          var u = a(r) ? n : i,
            c = e ? e() : {};
          return u(r, t, o(s, 2), c);
        };
      };
    },
    979079: function (t, e, r) {
      var n = r(685347),
        i = r(757009)(function (t, e, r) {
          n(t, r, e);
        });
      t.exports = i;
    },
    943418: function (t, e, r) {
      var n = r(383083);
      (e.encode = n.encode), (e.decode = n.decode);
    },
    383083: function (t, e, r) {
      var n = r(413135).Buffer,
        i = [
          255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255,
          255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
          17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0,
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 255, 255, 255, 255, 255,
        ];
      (e.encode = function (t) {
        !n.isBuffer(t) && (t = new n(t));
        var e,
          r,
          i = 0,
          o = 0,
          a = 0,
          s = 0;
        for (
          var u = new n(
            8 *
              ((r = Math.floor((e = t).length / 5)),
              e.length % 5 == 0 ? r : r + 1),
          );
          i < t.length;

        ) {
          var c = t[i];
          a > 3
            ? ((s =
                ((s = c & (255 >> a)) << (a = (a + 5) % 8)) |
                ((i + 1 < t.length ? t[i + 1] : 0) >> (8 - a))),
              i++)
            : ((s = (c >> (8 - (a + 5))) & 31), 0 == (a = (a + 5) % 8) && i++),
            (u[o] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(s)),
            o++;
        }
        for (i = o; i < u.length; i++) u[i] = 61;
        return u;
      }),
        (e.decode = function (t) {
          var e,
            r = 0,
            o = 0,
            a = 0;
          !n.isBuffer(t) && (t = new n(t));
          for (
            var s = new n(Math.ceil((5 * t.length) / 8)), u = 0;
            u < t.length && 61 != t[u];
            u++
          ) {
            var c = t[u] - 48;
            if (c < i.length)
              (o = i[c]),
                r <= 3
                  ? 0 == (r = (r + 5) % 8)
                    ? ((e |= o), (s[a] = e), a++, (e = 0))
                    : (e |= 255 & (o << (8 - r)))
                  : ((e |= 255 & (o >>> (r = (r + 5) % 8))),
                    (s[a] = e),
                    a++,
                    (e = 255 & (o << (8 - r))));
            else throw Error("Invalid input - it is not base32 encoded string");
          }
          return s.slice(0, a);
        });
    },
    423891: function (t, e, r) {
      var n, i, o, a;
      r(444675),
        (i = {}),
        (t.exports = i),
        (n = r(457854)),
        (o = i),
        (a = n),
        (o.toRGBA8 = function (t) {
          var e = t.width,
            r = t.height;
          if (null == t.tabs.acTL)
            return [o.toRGBA8.decodeImage(t.data, e, r, t).buffer];
          var n = [];
          null == t.frames[0].data && (t.frames[0].data = t.data);
          for (
            var i, a = new Uint8Array(e * r * 4), s = 0;
            s < t.frames.length;
            s++
          ) {
            var u = t.frames[s],
              c = u.rect.x,
              l = u.rect.y,
              h = u.rect.width,
              f = u.rect.height,
              p = o.toRGBA8.decodeImage(u.data, h, f, t);
            if (
              (0 == s
                ? (i = p)
                : 0 == u.blend
                  ? o._copyTile(p, h, f, i, e, r, c, l, 0)
                  : 1 == u.blend && o._copyTile(p, h, f, i, e, r, c, l, 1),
              n.push(i.buffer),
              (i = i.slice(0)),
              0 == u.dispose)
            );
            else if (1 == u.dispose) o._copyTile(a, h, f, i, e, r, c, l, 0);
            else if (2 == u.dispose) {
              for (var m = s - 1; 2 == t.frames[m].dispose; ) m--;
              i = new Uint8Array(n[m]).slice(0);
            }
          }
          return n;
        }),
        (o.toRGBA8.decodeImage = function (t, e, r, n) {
          var i = e * r,
            a = Math.ceil((e * o.decode._getBPP(n)) / 8),
            s = new Uint8Array(4 * i),
            u = new Uint32Array(s.buffer),
            c = n.ctype,
            l = n.depth,
            h = o._bin.readUshort;
          if (6 == c) {
            var f = i << 2;
            if (8 == l) for (var p = 0; p < f; p++) s[p] = t[p];
            if (16 == l) for (var p = 0; p < f; p++) s[p] = t[p << 1];
          } else if (2 == c) {
            var m = n.tabs.tRNS,
              d = -1,
              v = -1,
              g = -1;
            if ((m && ((d = m[0]), (v = m[1]), (g = m[2])), 8 == l))
              for (var p = 0; p < i; p++) {
                var y = p << 2,
                  b = 3 * p;
                (s[y] = t[b]),
                  (s[y + 1] = t[b + 1]),
                  (s[y + 2] = t[b + 2]),
                  (s[y + 3] = 255),
                  -1 != d &&
                    t[b] == d &&
                    t[b + 1] == v &&
                    t[b + 2] == g &&
                    (s[y + 3] = 0);
              }
            if (16 == l)
              for (var p = 0; p < i; p++) {
                var y = p << 2,
                  b = 6 * p;
                (s[y] = t[b]),
                  (s[y + 1] = t[b + 2]),
                  (s[y + 2] = t[b + 4]),
                  (s[y + 3] = 255),
                  -1 != d &&
                    h(t, b) == d &&
                    h(t, b + 2) == v &&
                    h(t, b + 4) == g &&
                    (s[y + 3] = 0);
              }
          } else if (3 == c) {
            var E = n.tabs.PLTE,
              T = n.tabs.tRNS,
              _ = T ? T.length : 0;
            if (1 == l)
              for (var A = 0; A < r; A++) {
                for (var I = A * a, S = A * e, p = 0; p < e; p++) {
                  var y = (S + p) << 2,
                    L = (t[I + (p >> 3)] >> (7 - ((7 & p) << 0))) & 1,
                    H = 3 * L;
                  (s[y] = E[H]),
                    (s[y + 1] = E[H + 1]),
                    (s[y + 2] = E[H + 2]),
                    (s[y + 3] = L < _ ? T[L] : 255);
                }
              }
            if (2 == l)
              for (var A = 0; A < r; A++) {
                for (var I = A * a, S = A * e, p = 0; p < e; p++) {
                  var y = (S + p) << 2,
                    L = (t[I + (p >> 2)] >> (6 - ((3 & p) << 1))) & 3,
                    H = 3 * L;
                  (s[y] = E[H]),
                    (s[y + 1] = E[H + 1]),
                    (s[y + 2] = E[H + 2]),
                    (s[y + 3] = L < _ ? T[L] : 255);
                }
              }
            if (4 == l)
              for (var A = 0; A < r; A++) {
                for (var I = A * a, S = A * e, p = 0; p < e; p++) {
                  var y = (S + p) << 2,
                    L = (t[I + (p >> 1)] >> (4 - ((1 & p) << 2))) & 15,
                    H = 3 * L;
                  (s[y] = E[H]),
                    (s[y + 1] = E[H + 1]),
                    (s[y + 2] = E[H + 2]),
                    (s[y + 3] = L < _ ? T[L] : 255);
                }
              }
            if (8 == l)
              for (var p = 0; p < i; p++) {
                var y = p << 2,
                  L = t[p],
                  H = 3 * L;
                (s[y] = E[H]),
                  (s[y + 1] = E[H + 1]),
                  (s[y + 2] = E[H + 2]),
                  (s[y + 3] = L < _ ? T[L] : 255);
              }
          } else if (4 == c) {
            if (8 == l)
              for (var p = 0; p < i; p++) {
                var y = p << 2,
                  P = p << 1,
                  B = t[P];
                (s[y] = B),
                  (s[y + 1] = B),
                  (s[y + 2] = B),
                  (s[y + 3] = t[P + 1]);
              }
            if (16 == l)
              for (var p = 0; p < i; p++) {
                var y = p << 2,
                  P = p << 2,
                  B = t[P];
                (s[y] = B),
                  (s[y + 1] = B),
                  (s[y + 2] = B),
                  (s[y + 3] = t[P + 2]);
              }
          } else if (0 == c) {
            var d = n.tabs.tRNS ? n.tabs.tRNS : -1;
            if (1 == l)
              for (var p = 0; p < i; p++) {
                var B = 255 * ((t[p >> 3] >> (7 - (7 & p))) & 1),
                  w = B == 255 * d ? 0 : 255;
                u[p] = (w << 24) | (B << 16) | (B << 8) | B;
              }
            if (2 == l)
              for (var p = 0; p < i; p++) {
                var B = 85 * ((t[p >> 2] >> (6 - ((3 & p) << 1))) & 3),
                  w = B == 85 * d ? 0 : 255;
                u[p] = (w << 24) | (B << 16) | (B << 8) | B;
              }
            if (4 == l)
              for (var p = 0; p < i; p++) {
                var B = 17 * ((t[p >> 1] >> (4 - ((1 & p) << 2))) & 15),
                  w = B == 17 * d ? 0 : 255;
                u[p] = (w << 24) | (B << 16) | (B << 8) | B;
              }
            if (8 == l)
              for (var p = 0; p < i; p++) {
                var B = t[p],
                  w = B == d ? 0 : 255;
                u[p] = (w << 24) | (B << 16) | (B << 8) | B;
              }
            if (16 == l)
              for (var p = 0; p < i; p++) {
                var B = t[p << 1],
                  w = h(t, p << 1) == d ? 0 : 255;
                u[p] = (w << 24) | (B << 16) | (B << 8) | B;
              }
          }
          return s;
        }),
        (o.decode = function (t) {
          for (
            var e = new Uint8Array(t),
              r = 8,
              n = o._bin,
              i = n.readUshort,
              a = n.readUint,
              s = { tabs: {}, frames: [] },
              u = new Uint8Array(e.length),
              c = 0,
              l,
              h = 0,
              f = [137, 80, 78, 71, 13, 10, 26, 10],
              p = 0;
            p < 8;
            p++
          )
            if (e[p] != f[p]) throw "The input is not a PNG file!";
          for (; r < e.length; ) {
            var m = n.readUint(e, r);
            r += 4;
            var d = n.readASCII(e, r, 4);
            if (((r += 4), "IHDR" == d)) o.decode._IHDR(e, r, s);
            else if ("IDAT" == d) {
              for (var p = 0; p < m; p++) u[c + p] = e[r + p];
              c += m;
            } else if ("acTL" == d)
              (s.tabs[d] = { num_frames: a(e, r), num_plays: a(e, r + 4) }),
                (l = new Uint8Array(e.length));
            else if ("fcTL" == d) {
              if (0 != h) {
                var v = s.frames[s.frames.length - 1];
                (v.data = o.decode._decompress(
                  s,
                  l.slice(0, h),
                  v.rect.width,
                  v.rect.height,
                )),
                  (h = 0);
              }
              var g = {
                  x: a(e, r + 12),
                  y: a(e, r + 16),
                  width: a(e, r + 4),
                  height: a(e, r + 8),
                },
                y = i(e, r + 22),
                b = {
                  rect: g,
                  delay: Math.round(
                    1e3 * (y = i(e, r + 20) / (0 == y ? 100 : y)),
                  ),
                  dispose: e[r + 24],
                  blend: e[r + 25],
                };
              s.frames.push(b);
            } else if ("fdAT" == d) {
              for (var p = 0; p < m - 4; p++) l[h + p] = e[r + p + 4];
              h += m - 4;
            } else if ("pHYs" == d)
              s.tabs[d] = [n.readUint(e, r), n.readUint(e, r + 4), e[r + 8]];
            else if ("cHRM" == d) {
              s.tabs[d] = [];
              for (var p = 0; p < 8; p++)
                s.tabs[d].push(n.readUint(e, r + 4 * p));
            } else if ("tEXt" == d) {
              null == s.tabs[d] && (s.tabs[d] = {});
              var E = n.nextZero(e, r),
                T = n.readASCII(e, r, E - r),
                _ = n.readASCII(e, E + 1, r + m - E - 1);
              s.tabs[d][T] = _;
            } else if ("iTXt" == d) {
              null == s.tabs[d] && (s.tabs[d] = {});
              var E = 0,
                A = r;
              E = n.nextZero(e, A);
              var T = n.readASCII(e, A, E - A);
              e[(A = E + 1)],
                e[A + 1],
                (A += 2),
                (E = n.nextZero(e, A)),
                n.readASCII(e, A, E - A),
                (A = E + 1),
                (E = n.nextZero(e, A)),
                n.readUTF8(e, A, E - A),
                (A = E + 1);
              var _ = n.readUTF8(e, A, m - (A - r));
              s.tabs[d][T] = _;
            } else if ("PLTE" == d) s.tabs[d] = n.readBytes(e, r, m);
            else if ("hIST" == d) {
              var I = s.tabs.PLTE.length / 3;
              s.tabs[d] = [];
              for (var p = 0; p < I; p++) s.tabs[d].push(i(e, r + 2 * p));
            } else if ("tRNS" == d)
              3 == s.ctype
                ? (s.tabs[d] = n.readBytes(e, r, m))
                : 0 == s.ctype
                  ? (s.tabs[d] = i(e, r))
                  : 2 == s.ctype &&
                    (s.tabs[d] = [i(e, r), i(e, r + 2), i(e, r + 4)]);
            else if ("gAMA" == d) s.tabs[d] = n.readUint(e, r) / 1e5;
            else if ("sRGB" == d) s.tabs[d] = e[r];
            else if ("bKGD" == d)
              0 == s.ctype || 4 == s.ctype
                ? (s.tabs[d] = [i(e, r)])
                : 2 == s.ctype || 6 == s.ctype
                  ? (s.tabs[d] = [i(e, r), i(e, r + 2), i(e, r + 4)])
                  : 3 == s.ctype && (s.tabs[d] = e[r]);
            else if ("IEND" == d) {
              if (0 != h) {
                var v = s.frames[s.frames.length - 1];
                (v.data = o.decode._decompress(
                  s,
                  l.slice(0, h),
                  v.rect.width,
                  v.rect.height,
                )),
                  (h = 0);
              }
              s.data = o.decode._decompress(s, u, s.width, s.height);
              break;
            }
            (r += m), n.readUint(e, r), (r += 4);
          }
          return delete s.compress, delete s.interlace, delete s.filter, s;
        }),
        (o.decode._decompress = function (t, e, r, n) {
          return (
            0 == t.compress && (e = o.decode._inflate(e)),
            0 == t.interlace
              ? (e = o.decode._filterZero(e, t, 0, r, n))
              : 1 == t.interlace && (e = o.decode._readInterlace(e, t)),
            e
          );
        }),
        (o.decode._inflate = function (t) {
          return a.inflate(t);
        }),
        (o.decode._readInterlace = function (t, e) {
          for (
            var r = e.width,
              n = e.height,
              i = o.decode._getBPP(e),
              a = i >> 3,
              s = Math.ceil((r * i) / 8),
              u = new Uint8Array(n * s),
              c = 0,
              l = [0, 0, 4, 0, 2, 0, 1],
              h = [0, 4, 0, 2, 0, 1, 0],
              f = [8, 8, 8, 4, 4, 2, 2],
              p = [8, 8, 4, 4, 2, 2, 1],
              m = 0;
            m < 7;

          ) {
            for (var d = f[m], v = p[m], g = 0, y = 0, b = l[m]; b < n; )
              (b += d), y++;
            for (var E = h[m]; E < r; ) (E += v), g++;
            var T = Math.ceil((g * i) / 8);
            o.decode._filterZero(t, e, c, g, y);
            for (var _ = 0, A = l[m]; A < n; ) {
              for (var I = h[m], S = (c + _ * T) << 3; I < r; ) {
                if (1 == i) {
                  var L = t[S >> 3];
                  (L = (L >> (7 - (7 & S))) & 1),
                    (u[A * s + (I >> 3)] |= L << (7 - ((3 & I) << 0)));
                }
                if (2 == i) {
                  var L = t[S >> 3];
                  (L = (L >> (6 - (7 & S))) & 3),
                    (u[A * s + (I >> 2)] |= L << (6 - ((3 & I) << 1)));
                }
                if (4 == i) {
                  var L = t[S >> 3];
                  (L = (L >> (4 - (7 & S))) & 15),
                    (u[A * s + (I >> 1)] |= L << (4 - ((1 & I) << 2)));
                }
                if (i >= 8) {
                  for (var H = A * s + I * a, P = 0; P < a; P++)
                    u[H + P] = t[(S >> 3) + P];
                }
                (S += i), (I += v);
              }
              _++, (A += d);
            }
            g * y != 0 && (c += y * (1 + T)), (m += 1);
          }
          return u;
        }),
        (o.decode._getBPP = function (t) {
          return [1, null, 3, 1, 2, null, 4][t.ctype] * t.depth;
        }),
        (o.decode._filterZero = function (t, e, r, n, i) {
          var a = o.decode._getBPP(e),
            s = Math.ceil((n * a) / 8),
            u = o.decode._paeth;
          a = Math.ceil(a / 8);
          for (var c = 0; c < i; c++) {
            var l = r + c * s,
              h = l + c + 1,
              f = t[h - 1];
            if (0 == f) for (var p = 0; p < s; p++) t[l + p] = t[h + p];
            else if (1 == f) {
              for (var p = 0; p < a; p++) t[l + p] = t[h + p];
              for (var p = a; p < s; p++)
                t[l + p] = (t[h + p] + t[l + p - a]) & 255;
            } else if (0 == c) {
              for (var p = 0; p < a; p++) t[l + p] = t[h + p];
              if (2 == f) for (var p = a; p < s; p++) t[l + p] = 255 & t[h + p];
              if (3 == f)
                for (var p = a; p < s; p++)
                  t[l + p] = (t[h + p] + (t[l + p - a] >> 1)) & 255;
              if (4 == f)
                for (var p = a; p < s; p++)
                  t[l + p] = (t[h + p] + u(t[l + p - a], 0, 0)) & 255;
            } else {
              if (2 == f)
                for (var p = 0; p < s; p++)
                  t[l + p] = (t[h + p] + t[l + p - s]) & 255;
              if (3 == f) {
                for (var p = 0; p < a; p++)
                  t[l + p] = (t[h + p] + (t[l + p - s] >> 1)) & 255;
                for (var p = a; p < s; p++)
                  t[l + p] =
                    (t[h + p] + ((t[l + p - s] + t[l + p - a]) >> 1)) & 255;
              }
              if (4 == f) {
                for (var p = 0; p < a; p++)
                  t[l + p] = (t[h + p] + u(0, t[l + p - s], 0)) & 255;
                for (var p = a; p < s; p++)
                  t[l + p] =
                    (t[h + p] +
                      u(t[l + p - a], t[l + p - s], t[l + p - a - s])) &
                    255;
              }
            }
          }
          return t;
        }),
        (o.decode._paeth = function (t, e, r) {
          var n = t + e - r,
            i = Math.abs(n - t),
            o = Math.abs(n - e),
            a = Math.abs(n - r);
          return i <= o && i <= a ? t : o <= a ? e : r;
        }),
        (o.decode._IHDR = function (t, e, r) {
          var n = o._bin;
          (r.width = n.readUint(t, e)),
            (e += 4),
            (r.height = n.readUint(t, e)),
            (e += 4),
            (r.depth = t[e]),
            e++,
            (r.ctype = t[e]),
            e++,
            (r.compress = t[e]),
            e++,
            (r.filter = t[e]),
            e++,
            (r.interlace = t[e]),
            e++;
        }),
        (o._bin = {
          nextZero: function (t, e) {
            for (; 0 != t[e]; ) e++;
            return e;
          },
          readUshort: function (t, e) {
            return (t[e] << 8) | t[e + 1];
          },
          writeUshort: function (t, e, r) {
            (t[e] = (r >> 8) & 255), (t[e + 1] = 255 & r);
          },
          readUint: function (t, e) {
            return (
              16777216 * t[e] + ((t[e + 1] << 16) | (t[e + 2] << 8) | t[e + 3])
            );
          },
          writeUint: function (t, e, r) {
            (t[e] = (r >> 24) & 255),
              (t[e + 1] = (r >> 16) & 255),
              (t[e + 2] = (r >> 8) & 255),
              (t[e + 3] = 255 & r);
          },
          readASCII: function (t, e, r) {
            for (var n = "", i = 0; i < r; i++)
              n += String.fromCharCode(t[e + i]);
            return n;
          },
          writeASCII: function (t, e, r) {
            for (var n = 0; n < r.length; n++) t[e + n] = r.charCodeAt(n);
          },
          readBytes: function (t, e, r) {
            for (var n = [], i = 0; i < r; i++) n.push(t[e + i]);
            return n;
          },
          pad: function (t) {
            return t.length < 2 ? "0" + t : t;
          },
          readUTF8: function (t, e, r) {
            for (var n, i = "", a = 0; a < r; a++)
              i += "%" + o._bin.pad(t[e + a].toString(16));
            try {
              n = decodeURIComponent(i);
            } catch (n) {
              return o._bin.readASCII(t, e, r);
            }
            return n;
          },
        }),
        (o._copyTile = function (t, e, r, n, i, o, a, s, u) {
          for (
            var c = Math.min(e, i), l = Math.min(r, o), h = 0, f = 0, p = 0;
            p < l;
            p++
          )
            for (var m = 0; m < c; m++)
              if (
                (a >= 0 && s >= 0
                  ? ((h = (p * e + m) << 2), (f = ((s + p) * i + a + m) << 2))
                  : ((h = ((-s + p) * e - a + m) << 2), (f = (p * i + m) << 2)),
                0 == u)
              )
                (n[f] = t[h]),
                  (n[f + 1] = t[h + 1]),
                  (n[f + 2] = t[h + 2]),
                  (n[f + 3] = t[h + 3]);
              else if (1 == u) {
                var d = t[h + 3] * (1 / 255),
                  v = t[h] * d,
                  g = t[h + 1] * d,
                  y = t[h + 2] * d,
                  b = n[f + 3] * (1 / 255),
                  E = n[f] * b,
                  T = n[f + 1] * b,
                  _ = n[f + 2] * b,
                  A = 1 - d,
                  I = d + b * A,
                  S = 0 == I ? 0 : 1 / I;
                (n[f + 3] = 255 * I),
                  (n[f + 0] = (v + E * A) * S),
                  (n[f + 1] = (g + T * A) * S),
                  (n[f + 2] = (y + _ * A) * S);
              } else if (2 == u) {
                var d = t[h + 3],
                  v = t[h],
                  g = t[h + 1],
                  y = t[h + 2],
                  b = n[f + 3],
                  E = n[f],
                  T = n[f + 1],
                  _ = n[f + 2];
                d == b && v == E && g == T && y == _
                  ? ((n[f] = 0), (n[f + 1] = 0), (n[f + 2] = 0), (n[f + 3] = 0))
                  : ((n[f] = v),
                    (n[f + 1] = g),
                    (n[f + 2] = y),
                    (n[f + 3] = d));
              } else if (3 == u) {
                var d = t[h + 3],
                  v = t[h],
                  g = t[h + 1],
                  y = t[h + 2],
                  b = n[f + 3],
                  E = n[f],
                  T = n[f + 1],
                  _ = n[f + 2];
                if (d == b && v == E && g == T && y == _) continue;
                if (d < 220 && b > 20) return !1;
              }
          return !0;
        }),
        (o.encode = function (t, e, r, n, i, a) {
          null == n && (n = 0), null == a && (a = !1);
          for (
            var s = new Uint8Array(t[0].byteLength * t.length + 100),
              u = [137, 80, 78, 71, 13, 10, 26, 10],
              c = 0;
            c < 8;
            c++
          )
            s[c] = u[c];
          var l = 8,
            h = o._bin,
            f = o.crc.crc,
            p = h.writeUint,
            m = h.writeUshort,
            d = h.writeASCII,
            v = o.encode.compressPNG(t, e, r, n, a);
          p(s, l, 13),
            d(s, (l += 4), "IHDR"),
            p(s, (l += 4), e),
            p(s, (l += 4), r),
            (s[(l += 4)] = v.depth),
            (s[++l] = v.ctype),
            (s[++l] = 0),
            (s[++l] = 0),
            (s[++l] = 0),
            p(s, ++l, f(s, l - 17, 17)),
            p(s, (l += 4), 1),
            d(s, (l += 4), "sRGB"),
            (s[(l += 4)] = 1),
            p(s, ++l, f(s, l - 5, 5)),
            (l += 4);
          var g = t.length > 1;
          if (
            (g &&
              (p(s, l, 8),
              d(s, (l += 4), "acTL"),
              p(s, (l += 4), t.length),
              p(s, (l += 4), 0),
              p(s, (l += 4), f(s, l - 12, 12)),
              (l += 4)),
            3 == v.ctype)
          ) {
            var y = v.plte.length;
            p(s, l, 3 * y), d(s, (l += 4), "PLTE"), (l += 4);
            for (var c = 0; c < y; c++) {
              var b = 3 * c,
                E = v.plte[c],
                T = 255 & E,
                _ = (E >> 8) & 255,
                A = (E >> 16) & 255;
              (s[l + b + 0] = T), (s[l + b + 1] = _), (s[l + b + 2] = A);
            }
            if (
              (p(s, (l += 3 * y), f(s, l - 3 * y - 4, 3 * y + 4)),
              (l += 4),
              v.gotAlpha)
            ) {
              p(s, l, y), d(s, (l += 4), "tRNS"), (l += 4);
              for (var c = 0; c < y; c++) s[l + c] = (v.plte[c] >> 24) & 255;
              p(s, (l += y), f(s, l - y - 4, y + 4)), (l += 4);
            }
          }
          for (var I = 0, S = 0; S < v.frames.length; S++) {
            var L = v.frames[S];
            g &&
              (p(s, l, 26),
              d(s, (l += 4), "fcTL"),
              p(s, (l += 4), I++),
              p(s, (l += 4), L.rect.width),
              p(s, (l += 4), L.rect.height),
              p(s, (l += 4), L.rect.x),
              p(s, (l += 4), L.rect.y),
              m(s, (l += 4), i[S]),
              m(s, (l += 2), 1e3),
              (s[(l += 2)] = L.dispose),
              (s[++l] = L.blend),
              p(s, ++l, f(s, l - 30, 30)),
              (l += 4));
            var H = L.cimg,
              y = H.length;
            p(s, l, y + (0 == S ? 0 : 4));
            var P = (l += 4);
            d(s, l, 0 == S ? "IDAT" : "fdAT"),
              (l += 4),
              0 != S && (p(s, l, I++), (l += 4));
            for (var c = 0; c < y; c++) s[l + c] = H[c];
            p(s, (l += y), f(s, P, l - P)), (l += 4);
          }
          return (
            p(s, l, 0),
            d(s, (l += 4), "IEND"),
            p(s, (l += 4), f(s, l - 4, 4)),
            (l += 4),
            s.buffer.slice(0, l)
          );
        }),
        (o.encode.compressPNG = function (t, e, r, n, i) {
          for (
            var a = o.encode.compress(t, e, r, n, !1, i), s = 0;
            s < t.length;
            s++
          ) {
            var u = a.frames[s],
              c = (u.rect.width, u.rect.height),
              l = u.bpl,
              h = u.bpp,
              f = new Uint8Array(c * l + c);
            u.cimg = o.encode._filterZero(u.img, c, h, l, f);
          }
          return a;
        }),
        (o.encode.compress = function (t, e, r, n, i, a) {
          null == a && (a = !1);
          for (var s = 6, u = 8, c = 4, l = 255, h = 0; h < t.length; h++) {
            for (
              var f = new Uint8Array(t[h]), p = f.length, m = 0;
              m < p;
              m += 4
            )
              l &= f[m + 3];
          }
          var d = 255 != l,
            v = {},
            g = [];
          if (
            (0 != t.length && ((v[0] = 0), g.push(0), 0 != n && n--), 0 != n)
          ) {
            var y = o.quantize(t, n, i);
            t = y.bufs;
            for (var m = 0; m < y.plte.length; m++) {
              var b = y.plte[m].est.rgba;
              null == v[b] && ((v[b] = g.length), g.push(b));
            }
          } else
            for (var h = 0; h < t.length; h++) {
              for (
                var E = new Uint32Array(t[h]), p = E.length, m = 0;
                m < p;
                m++
              ) {
                var b = E[m];
                if (
                  (m < e || (b != E[m - 1] && b != E[m - e])) &&
                  null == v[b] &&
                  ((v[b] = g.length), g.push(b), g.length >= 300)
                )
                  break;
              }
            }
          var T = !!d && i,
            _ = g.length;
          _ <= 256 &&
            !1 == a &&
            ((u = _ <= 2 ? 1 : _ <= 4 ? 2 : _ <= 16 ? 4 : 8),
            i && (u = 8),
            (d = !0));
          for (var A = [], h = 0; h < t.length; h++) {
            var I = new Uint8Array(t[h]),
              S = new Uint32Array(I.buffer),
              L = 0,
              H = 0,
              P = e,
              B = r,
              w = 0;
            if (0 != h && !T) {
              for (
                var N = i || 1 == h || 2 == A[A.length - 2].dispose ? 1 : 2,
                  R = 0,
                  M = 1e9,
                  C = 0;
                C < N;
                C++
              ) {
                for (
                  var O = new Uint8Array(t[h - 1 - C]),
                    D = new Uint32Array(t[h - 1 - C]),
                    U = e,
                    F = r,
                    G = -1,
                    k = -1,
                    x = 0;
                  x < r;
                  x++
                )
                  for (var j = 0; j < e; j++) {
                    var m = x * e + j;
                    S[m] != D[m] &&
                      (j < U && (U = j),
                      j > G && (G = j),
                      x < F && (F = x),
                      x > k && (k = x));
                  }
                var V = -1 == G ? 1 : (G - U + 1) * (k - F + 1);
                V < M &&
                  ((M = V),
                  (R = C),
                  -1 == G
                    ? ((L = H = 0), (P = B = 1))
                    : ((L = U), (H = F), (P = G - U + 1), (B = k - F + 1)));
              }
              var O = new Uint8Array(t[h - 1 - R]);
              1 == R && (A[A.length - 1].dispose = 2);
              var Z = new Uint8Array(P * B * 4);
              new Uint32Array(Z.buffer),
                o._copyTile(O, e, r, Z, P, B, -L, -H, 0),
                o._copyTile(I, e, r, Z, P, B, -L, -H, 3)
                  ? (o._copyTile(I, e, r, Z, P, B, -L, -H, 2), (w = 1))
                  : (o._copyTile(I, e, r, Z, P, B, -L, -H, 0), (w = 0)),
                (S = new Uint32Array((I = Z).buffer));
            }
            var K = 4 * P;
            if (_ <= 256 && !1 == a) {
              for (
                var Z = new Uint8Array((K = Math.ceil((u * P) / 8)) * B), x = 0;
                x < B;
                x++
              ) {
                var m = x * K,
                  X = x * P;
                if (8 == u) for (var j = 0; j < P; j++) Z[m + j] = v[S[X + j]];
                else if (4 == u)
                  for (var j = 0; j < P; j++)
                    Z[m + (j >> 1)] |= v[S[X + j]] << (4 - (1 & j) * 4);
                else if (2 == u)
                  for (var j = 0; j < P; j++)
                    Z[m + (j >> 2)] |= v[S[X + j]] << (6 - (3 & j) * 2);
                else if (1 == u)
                  for (var j = 0; j < P; j++)
                    Z[m + (j >> 3)] |= v[S[X + j]] << (7 - (7 & j) * 1);
              }
              (I = Z), (s = 3), (c = 1);
            } else if (!1 == d && 1 == t.length) {
              for (
                var Z = new Uint8Array(P * B * 3), q = P * B, m = 0;
                m < q;
                m++
              ) {
                var Y = 3 * m,
                  z = 4 * m;
                (Z[Y] = I[z]), (Z[Y + 1] = I[z + 1]), (Z[Y + 2] = I[z + 2]);
              }
              (I = Z), (s = 2), (c = 3), (K = 3 * P);
            }
            A.push({
              rect: { x: L, y: H, width: P, height: B },
              img: I,
              bpl: K,
              bpp: c,
              blend: w,
              dispose: T ? 1 : 0,
            });
          }
          return { ctype: s, depth: u, plte: g, gotAlpha: d, frames: A };
        }),
        (o.encode._filterZero = function (t, e, r, n, i) {
          for (var s = [], u = 0; u < 5; u++)
            if (!(e * n > 5e5) || (2 != u && 3 != u && 4 != u)) {
              for (var c = 0; c < e; c++)
                o.encode._filterLine(i, t, c, n, r, u);
              if ((s.push(a.deflate(i)), 1 == r)) break;
            }
          for (var l, h = 1e9, f = 0; f < s.length; f++)
            s[f].length < h && ((l = f), (h = s[f].length));
          return s[l];
        }),
        (o.encode._filterLine = function (t, e, r, n, i, a) {
          var s = r * n,
            u = s + r,
            c = o.decode._paeth;
          if (((t[u] = a), u++, 0 == a))
            for (var l = 0; l < n; l++) t[u + l] = e[s + l];
          else if (1 == a) {
            for (var l = 0; l < i; l++) t[u + l] = e[s + l];
            for (var l = i; l < n; l++)
              t[u + l] = (e[s + l] - e[s + l - i] + 256) & 255;
          } else if (0 == r) {
            for (var l = 0; l < i; l++) t[u + l] = e[s + l];
            if (2 == a) for (var l = i; l < n; l++) t[u + l] = e[s + l];
            if (3 == a)
              for (var l = i; l < n; l++)
                t[u + l] = (e[s + l] - (e[s + l - i] >> 1) + 256) & 255;
            if (4 == a)
              for (var l = i; l < n; l++)
                t[u + l] = (e[s + l] - c(e[s + l - i], 0, 0) + 256) & 255;
          } else {
            if (2 == a)
              for (var l = 0; l < n; l++)
                t[u + l] = (e[s + l] + 256 - e[s + l - n]) & 255;
            if (3 == a) {
              for (var l = 0; l < i; l++)
                t[u + l] = (e[s + l] + 256 - (e[s + l - n] >> 1)) & 255;
              for (var l = i; l < n; l++)
                t[u + l] =
                  (e[s + l] + 256 - ((e[s + l - n] + e[s + l - i]) >> 1)) & 255;
            }
            if (4 == a) {
              for (var l = 0; l < i; l++)
                t[u + l] = (e[s + l] + 256 - c(0, e[s + l - n], 0)) & 255;
              for (var l = i; l < n; l++)
                t[u + l] =
                  (e[s + l] +
                    256 -
                    c(e[s + l - i], e[s + l - n], e[s + l - i - n])) &
                  255;
            }
          }
        }),
        (o.crc = {
          table: (function () {
            for (var t = new Uint32Array(256), e = 0; e < 256; e++) {
              for (var r = e, n = 0; n < 8; n++)
                1 & r ? (r = 3988292384 ^ (r >>> 1)) : (r >>>= 1);
              t[e] = r;
            }
            return t;
          })(),
          update: function (t, e, r, n) {
            for (var i = 0; i < n; i++)
              t = o.crc.table[(t ^ e[r + i]) & 255] ^ (t >>> 8);
            return t;
          },
          crc: function (t, e, r) {
            return 4294967295 ^ o.crc.update(4294967295, t, e, r);
          },
        }),
        (o.quantize = function (t, e, r) {
          for (var n = [], i = 0, a = 0; a < t.length; a++)
            n.push(o.encode.alphaMul(new Uint8Array(t[a]), r)),
              (i += t[a].byteLength);
          for (
            var s = new Uint8Array(i),
              u = new Uint32Array(s.buffer),
              c = 0,
              a = 0;
            a < n.length;
            a++
          ) {
            for (var l = n[a], h = l.length, f = 0; f < h; f++) s[c + f] = l[f];
            c += h;
          }
          var p = {
            i0: 0,
            i1: s.length,
            bst: null,
            est: null,
            tdst: 0,
            left: null,
            right: null,
          };
          (p.bst = o.quantize.stats(s, p.i0, p.i1)),
            (p.est = o.quantize.estats(p.bst));
          for (var m = [p]; m.length < e; ) {
            for (var d = 0, v = 0, a = 0; a < m.length; a++)
              m[a].est.L > d && ((d = m[a].est.L), (v = a));
            if (d < 0.001) break;
            var g = m[v],
              y = o.quantize.splitPixels(
                s,
                u,
                g.i0,
                g.i1,
                g.est.e,
                g.est.eMq255,
              ),
              b = {
                i0: g.i0,
                i1: y,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null,
              };
            (b.bst = o.quantize.stats(s, b.i0, b.i1)),
              (b.est = o.quantize.estats(b.bst));
            var E = {
              i0: y,
              i1: g.i1,
              bst: null,
              est: null,
              tdst: 0,
              left: null,
              right: null,
            };
            E.bst = { R: [], m: [], N: g.bst.N - b.bst.N };
            for (var a = 0; a < 16; a++) E.bst.R[a] = g.bst.R[a] - b.bst.R[a];
            for (var a = 0; a < 4; a++) E.bst.m[a] = g.bst.m[a] - b.bst.m[a];
            (E.est = o.quantize.estats(E.bst)),
              (g.left = b),
              (g.right = E),
              (m[v] = b),
              m.push(E);
          }
          m.sort(function (t, e) {
            return e.bst.N - t.bst.N;
          });
          for (var T = 0; T < n.length; T++) {
            for (
              var _ = o.quantize.planeDst,
                A = new Uint8Array(n[T].buffer),
                I = new Uint32Array(n[T].buffer),
                S = A.length,
                a = 0;
              a < S;
              a += 4
            ) {
              for (
                var L = A[a] * (1 / 255),
                  H = A[a + 1] * (1 / 255),
                  P = A[a + 2] * (1 / 255),
                  B = A[a + 3] * (1 / 255),
                  w = p;
                w.left;

              )
                w = 0 >= _(w.est, L, H, P, B) ? w.left : w.right;
              I[a >> 2] = w.est.rgba;
            }
            n[T] = I.buffer;
          }
          return { bufs: n, plte: m };
        }),
        (o.quantize.getNearest = function (t, e, r, n, i) {
          if (null == t.left)
            return (t.tdst = o.quantize.dist(t.est.q, e, r, n, i)), t;
          var a = o.quantize.planeDst(t.est, e, r, n, i),
            s = t.left,
            u = t.right;
          a > 0 && ((s = t.right), (u = t.left));
          var c = o.quantize.getNearest(s, e, r, n, i);
          if (c.tdst <= a * a) return c;
          var l = o.quantize.getNearest(u, e, r, n, i);
          return l.tdst < c.tdst ? l : c;
        }),
        (o.quantize.planeDst = function (t, e, r, n, i) {
          var o = t.e;
          return o[0] * e + o[1] * r + o[2] * n + o[3] * i - t.eMq;
        }),
        (o.quantize.dist = function (t, e, r, n, i) {
          var o = e - t[0],
            a = r - t[1],
            s = n - t[2],
            u = i - t[3];
          return o * o + a * a + s * s + u * u;
        }),
        (o.quantize.splitPixels = function (t, e, r, n, i, a) {
          var s = o.quantize.vecDot;
          for (n -= 4; r < n; ) {
            for (; s(t, r, i) <= a; ) r += 4;
            for (; s(t, n, i) > a; ) n -= 4;
            if (r >= n) break;
            var u = e[r >> 2];
            (e[r >> 2] = e[n >> 2]), (e[n >> 2] = u), (r += 4), (n -= 4);
          }
          for (; s(t, r, i) > a; ) r -= 4;
          return r + 4;
        }),
        (o.quantize.vecDot = function (t, e, r) {
          return (
            t[e] * r[0] + t[e + 1] * r[1] + t[e + 2] * r[2] + t[e + 3] * r[3]
          );
        }),
        (o.quantize.stats = function (t, e, r) {
          for (
            var n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              i = [0, 0, 0, 0],
              o = e;
            o < r;
            o += 4
          ) {
            var a = t[o] * (1 / 255),
              s = t[o + 1] * (1 / 255),
              u = t[o + 2] * (1 / 255),
              c = t[o + 3] * (1 / 255);
            (i[0] += a),
              (i[1] += s),
              (i[2] += u),
              (i[3] += c),
              (n[0] += a * a),
              (n[1] += a * s),
              (n[2] += a * u),
              (n[3] += a * c),
              (n[5] += s * s),
              (n[6] += s * u),
              (n[7] += s * c),
              (n[10] += u * u),
              (n[11] += u * c),
              (n[15] += c * c);
          }
          return (
            (n[4] = n[1]),
            (n[8] = n[2]),
            (n[12] = n[3]),
            (n[9] = n[6]),
            (n[13] = n[7]),
            (n[14] = n[11]),
            { R: n, m: i, N: (r - e) >> 2 }
          );
        }),
        (o.quantize.estats = function (t) {
          var e = t.R,
            r = t.m,
            n = t.N,
            i = r[0],
            a = r[1],
            s = r[2],
            u = r[3],
            c = 0 == n ? 0 : 1 / n,
            l = [
              e[0] - i * i * c,
              e[1] - i * a * c,
              e[2] - i * s * c,
              e[3] - i * u * c,
              e[4] - a * i * c,
              e[5] - a * a * c,
              e[6] - a * s * c,
              e[7] - a * u * c,
              e[8] - s * i * c,
              e[9] - s * a * c,
              e[10] - s * s * c,
              e[11] - s * u * c,
              e[12] - u * i * c,
              e[13] - u * a * c,
              e[14] - u * s * c,
              e[15] - u * u * c,
            ],
            h = o.M4,
            f = [0.5, 0.5, 0.5, 0.5],
            p = 0,
            m = 0;
          if (0 != n)
            for (
              var d = 0;
              d < 10 &&
              ((f = h.multVec(l, f)),
              (m = Math.sqrt(h.dot(f, f))),
              (f = h.sml(1 / m, f)),
              !(1e-9 > Math.abs(m - p)));
              d++
            ) {
              p = m;
            }
          var v = [i * c, a * c, s * c, u * c],
            g = h.dot(h.sml(255, v), f),
            y = v[3] < 0.001 ? 0 : 1 / v[3];
          return {
            Cov: l,
            q: v,
            e: f,
            L: p,
            eMq255: g,
            eMq: h.dot(f, v),
            rgba:
              ((Math.round(255 * v[3]) << 24) |
                (Math.round(255 * v[2] * y) << 16) |
                (Math.round(255 * v[1] * y) << 8) |
                (Math.round(255 * v[0] * y) << 0)) >>>
              0,
          };
        }),
        (o.M4 = {
          multVec: function (t, e) {
            return [
              t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3],
              t[4] * e[0] + t[5] * e[1] + t[6] * e[2] + t[7] * e[3],
              t[8] * e[0] + t[9] * e[1] + t[10] * e[2] + t[11] * e[3],
              t[12] * e[0] + t[13] * e[1] + t[14] * e[2] + t[15] * e[3],
            ];
          },
          dot: function (t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
          },
          sml: function (t, e) {
            return [t * e[0], t * e[1], t * e[2], t * e[3]];
          },
        }),
        (o.encode.alphaMul = function (t, e) {
          for (
            var r = new Uint8Array(t.length), n = t.length >> 2, i = 0;
            i < n;
            i++
          ) {
            var o = i << 2,
              a = t[o + 3];
            e && (a = a < 128 ? 0 : 255);
            var s = (1 / 255) * a;
            (r[o + 0] = t[o + 0] * s),
              (r[o + 1] = t[o + 1] * s),
              (r[o + 2] = t[o + 2] * s),
              (r[o + 3] = a);
          }
          return r;
        });
    },
    849055: function (t, e, r) {
      "use strict";
      function n(t) {
        let e = "==".slice(0, (4 - (t.length % 4)) % 4),
          r = atob(t.replace(/-/g, "+").replace(/_/g, "/") + e),
          n = new ArrayBuffer(r.length),
          i = new Uint8Array(n);
        for (let t = 0; t < r.length; t++) i[t] = r.charCodeAt(t);
        return n;
      }
      function i(t) {
        let e = new Uint8Array(t),
          r = "";
        for (let t of e) r += String.fromCharCode(t);
        return btoa(r)
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=/g, "");
      }
      r.d(e, {
        U2: function () {
          return b;
        },
        Ue: function () {
          return y;
        },
      });
      var o = "copy",
        a = "convert";
      function s(t, e, r) {
        if (e === o) return r;
        if (e === a) return t(r);
        if (e instanceof Array) return r.map((r) => s(t, e[0], r));
        if (e instanceof Object) {
          let n = {};
          for (let [i, o] of Object.entries(e)) {
            if (o.derive) {
              let t = o.derive(r);
              void 0 !== t && (r[i] = t);
            }
            if (!(i in r)) {
              if (o.required) throw Error(`Missing key: ${i}`);
              continue;
            }
            if (null == r[i]) {
              n[i] = null;
              continue;
            }
            n[i] = s(t, o.schema, r[i]);
          }
          return n;
        }
      }
      function u(t, e) {
        return { required: !0, schema: t, derive: e };
      }
      function c(t) {
        return { required: !0, schema: t };
      }
      function l(t) {
        return { required: !1, schema: t };
      }
      var h = { type: c(o), id: c(a), transports: l(o) },
        f = { appid: l(o), appidExclude: l(o), credProps: l(o) },
        p = { appid: l(o), appidExclude: l(o), credProps: l(o) },
        m = {
          publicKey: c({
            rp: c(o),
            user: c({ id: c(a), name: c(o), displayName: c(o) }),
            challenge: c(a),
            pubKeyCredParams: c(o),
            timeout: l(o),
            excludeCredentials: l([h]),
            authenticatorSelection: l(o),
            attestation: l(o),
            extensions: l(f),
          }),
          signal: l(o),
        },
        d = {
          type: c(o),
          id: c(o),
          rawId: c(a),
          authenticatorAttachment: l(o),
          response: c({
            clientDataJSON: c(a),
            attestationObject: c(a),
            transports: u(o, (t) => {
              var e;
              return (null == (e = t.getTransports) ? void 0 : e.call(t)) || [];
            }),
          }),
          clientExtensionResults: u(p, (t) => t.getClientExtensionResults()),
        },
        v = {
          mediation: l(o),
          publicKey: c({
            challenge: c(a),
            timeout: l(o),
            rpId: l(o),
            allowCredentials: l([h]),
            userVerification: l(o),
            extensions: l(f),
          }),
          signal: l(o),
        },
        g = {
          type: c(o),
          id: c(o),
          rawId: c(a),
          authenticatorAttachment: l(o),
          response: c({
            clientDataJSON: c(a),
            authenticatorData: c(a),
            signature: c(a),
            userHandle: c(a),
          }),
          clientExtensionResults: u(p, (t) => t.getClientExtensionResults()),
        };
      async function y(t) {
        let e = await navigator.credentials.create(s(n, m, t));
        return s(i, d, e);
      }
      async function b(t) {
        let e = await navigator.credentials.get(s(n, v, t));
        return s(i, g, e);
      }
    },
  },
]);
//# sourceMappingURL=cf0fc468659f42e2b34a.js.map
