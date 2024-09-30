"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51514"],
  {
    817500: function (t, e, r) {
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
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.FormatBuilder = void 0),
        (e.bindFormatValuesWithBuilder = s),
        (e.bindFormatValues = c);
      var i = r(542593),
        o = r(766989),
        a = r(927882);
      function u(t) {
        return "$" === t[0];
      }
      function s(t, e, r, u, l, h, f, p) {
        if (
          (void 0 === h && (h = {}),
          1 === e.length && e[0].type === i.FormatJsNodeType.Literal)
        ) {
          t.pushLiteralText(e[0].value);
          return;
        }
        var m,
          d,
          v,
          y,
          g = function (e) {
            switch (e.type) {
              case i.FormatJsNodeType.Literal:
                return t.pushLiteralText(e.value), "continue";
              case i.FormatJsNodeType.Pound:
                if ("number" == typeof f) {
                  var m,
                    d,
                    g = u.getNumberFormat(r).format(f);
                  t.pushLiteralText(g);
                }
                return "continue";
            }
            var b = e.value;
            if (!(b in h) && "$" !== b[0]) throw new o.MissingValueError(b, p);
            var E = h[b];
            switch (e.type) {
              case i.FormatJsNodeType.Argument:
                if ("$_" == b) break;
                "object" == typeof E
                  ? t.pushObject(E)
                  : t.pushLiteralText(String(E));
                break;
              case i.FormatJsNodeType.Date:
                var T =
                  e.style in l.date
                    ? l.date[e.style]
                    : null != e.style
                      ? (0, a.parseDateTimeSkeleton)(e.style)
                      : void 0;
                t.pushLiteralText(u.getDateTimeFormat(r, T).format(E));
                break;
              case i.FormatJsNodeType.Time:
                var T =
                  e.style in l.time
                    ? l.time[e.style]
                    : null != e.style
                      ? (0, a.parseDateTimeSkeleton)(e.style)
                      : void 0;
                t.pushLiteralText(u.getDateTimeFormat(r, T).format(E));
                break;
              case i.FormatJsNodeType.Number:
                var T =
                    e.style in l.number
                      ? l.number[e.style]
                      : null != e.style
                        ? (0, a.parseNumberSkeleton)(
                            (0, a.parseNumberSkeletonFromString)(e.style),
                          )
                        : void 0,
                  _ =
                    "number" != typeof E
                      ? E
                      : ((v = E * (null == T ? void 0 : T.scale)), v);
                t.pushLiteralText(u.getNumberFormat(r, T).format(_));
                break;
              case i.FormatJsNodeType.Tag:
                var L = e.children,
                  A = c(t.constructor, L, r, u, l, h, f);
                if ("$" === b[0]) t.pushRichTextTag(b, A);
                else {
                  if ("function" != typeof E)
                    throw "expected a function type for a Tag formatting value, "
                      .concat(b, ". got ")
                      .concat(typeof E, ": ")
                      .concat(E);
                  var S = E(A);
                  S = Array.isArray(S) ? S : [S];
                  try {
                    for (
                      var I = ((m = void 0), n(S)), H = I.next();
                      !H.done;
                      H = I.next()
                    ) {
                      var B = H.value;
                      "string" == typeof B
                        ? t.pushLiteralText(B)
                        : t.pushObject(B);
                    }
                  } catch (t) {
                    m = { error: t };
                  } finally {
                    try {
                      H && !H.done && (d = I.return) && d.call(I);
                    } finally {
                      if (m) throw m.error;
                    }
                  }
                }
                break;
              case i.FormatJsNodeType.Select:
                var N =
                  e.value in e.options ? e.options[e.value] : e.options.other;
                if (null == N)
                  throw ""
                    .concat(e.value, " is not a known option for select value ")
                    .concat(b, ". Valid options are ")
                    .concat(Object.keys(e.options).join(", "));
                s(t, N.value, r, u, l, h);
                break;
              case i.FormatJsNodeType.Plural:
                var N = (function () {
                  var t,
                    n,
                    i = "=".concat(E);
                  if (i in e.options) return e.options[i];
                  var o = u
                    .getPluralRules(r, { type: e.pluralType })
                    .select(
                      E - (null !== (t = e.offset) && void 0 !== t ? t : 0),
                    );
                  return null !== (n = e.options[o]) && void 0 !== n
                    ? n
                    : e.options.other;
                })();
                if (null == N)
                  throw ""
                    .concat(e.value, " is not a known option for plural value ")
                    .concat(b, ". Valid options are ")
                    .concat(Object.keys(e.options).join(", "));
                s(
                  t,
                  N.value,
                  r,
                  u,
                  l,
                  h,
                  E - (null !== (y = e.offset) && void 0 !== y ? y : 0),
                );
            }
          };
        try {
          for (var b = n(e), E = b.next(); !E.done; E = b.next()) {
            var T = E.value;
            g(T);
          }
        } catch (t) {
          m = { error: t };
        } finally {
          try {
            E && !E.done && (d = b.return) && d.call(b);
          } finally {
            if (m) throw m.error;
          }
        }
      }
      function c(t, e, r, n, i, o, a) {
        void 0 === o && (o = {});
        var u = new t();
        return s(u, e, r, n, i, o, a), u.finish();
      }
      e.FormatBuilder = function () {};
    },
    877258: function (t, e, r) {
      var n,
        i,
        o,
        a =
          (this && this.__extends) ||
          ((i = function (t, e) {
            return (i =
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
            i(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          }),
        u =
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
        s =
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
        (e.astFormatter = e.RichTextNodeType = void 0),
        (e.formatToAst = f);
      var c = r(817500);
      ((n = o || (e.RichTextNodeType = o = {})).Text = "text"),
        (n.Strong = "strong"),
        (n.Emphasis = "emphasis"),
        (n.Strikethrough = "strikethrough"),
        (n.Code = "code"),
        (n.Link = "link"),
        (n.Paragraph = "paragraph"),
        (n.Object = "object");
      var l = {
          $_: function () {
            return { type: o.Text, content: "" };
          },
          $b: function (t) {
            return { type: o.Strong, content: t };
          },
          $i: function (t) {
            return { type: o.Emphasis, content: t };
          },
          $del: function (t) {
            return { type: o.Strikethrough, content: t };
          },
          $code: function (t) {
            return { type: o.Code, content: t };
          },
          $link: function (t) {
            var e = u(t),
              r = e[0],
              n = e.slice(1);
            return { type: o.Link, target: r.content, content: n };
          },
          $p: function (t) {
            return { type: o.Paragraph, content: t };
          },
        },
        h = (function (t) {
          function e() {
            var e = t.apply(this, s([], u(arguments), !1)) || this;
            return (e.result = []), e;
          }
          return (
            a(e, t),
            (e.prototype.pushRichTextTag = function (t, e) {
              if (!(t in l))
                throw "".concat(t, " is not a known rich text formatting tag");
              var r,
                n = l[t](e, "");
              Array.isArray(n)
                ? (r = this.result).push.apply(r, s([], u(n), !1))
                : this.result.push(n);
            }),
            (e.prototype.pushLiteralText = function (t) {
              var e = this.result[this.result.length - 1];
              null != e && e.type === o.Text
                ? (e.content += t)
                : this.result.push({ type: o.Text, content: t });
            }),
            (e.prototype.pushObject = function (t) {
              this.result.push({ type: o.Object, content: t });
            }),
            (e.prototype.finish = function () {
              return this.result;
            }),
            e
          );
        })(c.FormatBuilder);
      function f(t, e) {
        return "string" == typeof t
          ? [{ type: o.Text, content: t }]
          : this.bindFormatValues(h, t, e);
      }
      e.astFormatter = { format: f, builder: h };
    },
    755429: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.stringFormatter =
          e.DEFAULT_REACT_RICH_TEXT_ELEMENTS =
          e.makeReactFormatter =
          e.reactFormatter =
          e.markdownFormatter =
          e.RichTextNodeType =
          e.astFormatter =
            void 0);
      var n = r(877258);
      Object.defineProperty(e, "astFormatter", {
        enumerable: !0,
        get: function () {
          return n.astFormatter;
        },
      }),
        Object.defineProperty(e, "RichTextNodeType", {
          enumerable: !0,
          get: function () {
            return n.RichTextNodeType;
          },
        });
      var i = r(314905);
      Object.defineProperty(e, "markdownFormatter", {
        enumerable: !0,
        get: function () {
          return i.markdownFormatter;
        },
      });
      var o = r(925082);
      Object.defineProperty(e, "reactFormatter", {
        enumerable: !0,
        get: function () {
          return o.reactFormatter;
        },
      }),
        Object.defineProperty(e, "makeReactFormatter", {
          enumerable: !0,
          get: function () {
            return o.makeReactFormatter;
          },
        }),
        Object.defineProperty(e, "DEFAULT_REACT_RICH_TEXT_ELEMENTS", {
          enumerable: !0,
          get: function () {
            return o.DEFAULT_REACT_RICH_TEXT_ELEMENTS;
          },
        });
      var a = r(277606);
      Object.defineProperty(e, "stringFormatter", {
        enumerable: !0,
        get: function () {
          return a.stringFormatter;
        },
      });
    },
    314905: function (t, e, r) {
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
        (e.markdownFormatter = void 0),
        (e.formatToMarkdownString = l);
      var u = r(277606),
        s = {
          $_: function () {
            return "";
          },
          $b: function (t) {
            return "**" + t.join("") + "**";
          },
          $i: function (t) {
            return "*" + t.join("") + "*";
          },
          $del: function (t) {
            return "~~" + t.join("") + "~~";
          },
          $code: function (t) {
            return "`" + t.join("") + "`";
          },
          $link: function (t) {
            var e = o(t),
              r = e[0];
            return "[" + e.slice(1).join("") + "](" + r + ")";
          },
          $p: function (t) {
            return t.join("") + "\n\n";
          },
        },
        c = (function (t) {
          function e() {
            var e = t.apply(this, a([], o(arguments), !1)) || this;
            return (e.result = ""), e;
          }
          return (
            i(e, t),
            (e.prototype.pushRichTextTag = function (t, e) {
              this.result += s[t](e, "");
            }),
            e
          );
        })(u.StringBuilder);
      function l(t, e, r) {
        return (void 0 === r && (r = c), "string" == typeof t)
          ? t
          : this.bindFormatValues(r, t, e)[0];
      }
      e.markdownFormatter = { format: l, builder: c };
    },
    925082: function (t, e, r) {
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
        (e.reactFormatter = e.DEFAULT_REACT_RICH_TEXT_ELEMENTS = void 0),
        (e.formatReact = l),
        (e.makeReactFormatter = h);
      var u = r(470079),
        s = r(817500),
        c = u.createElement;
      e.DEFAULT_REACT_RICH_TEXT_ELEMENTS = {
        $_: function () {
          return "";
        },
        $b: function (t, e) {
          return c("strong", { key: e }, t);
        },
        $i: function (t, e) {
          return c("em", { key: e }, t);
        },
        $del: function (t, e) {
          return c("del", { key: e }, t);
        },
        $code: function (t, e) {
          return c("code", { key: e }, t);
        },
        $link: function (t, e) {
          var r = o(t);
          return c("a", { href: r[0], key: e }, r.slice(1));
        },
        $p: function (t, e) {
          return c("p", { key: e }, t);
        },
      };
      function l(t, e, r) {
        if ("string" == typeof t) return u.createElement(u.Fragment, void 0, t);
        var n = this.bindFormatValues(r, t, e);
        return u.createElement(u.Fragment, void 0, n);
      }
      function h(t) {
        var e;
        return {
          format: l,
          builder:
            ((e = t),
            (function (t) {
              function r() {
                var e = t.apply(this, a([], o(arguments), !1)) || this;
                return (e._nodeKey = 0), (e.result = []), e;
              }
              return (
                i(r, t),
                (r.prototype.pushRichTextTag = function (t, r) {
                  this.result.push(e[t](r, "".concat(this._nodeKey++)));
                }),
                (r.prototype.pushLiteralText = function (t) {
                  this.result.push(t);
                }),
                (r.prototype.pushObject = function (t) {
                  this.result.push(t);
                }),
                (r.prototype.finish = function () {
                  return this.result;
                }),
                r
              );
            })(s.FormatBuilder)),
        };
      }
      e.reactFormatter = h(e.DEFAULT_REACT_RICH_TEXT_ELEMENTS);
    },
    277606: function (t, e, r) {
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
        (e.stringFormatter = e.StringBuilder = void 0),
        (e.formatToPlainString = s);
      var u = (function (t) {
        function e() {
          var e = t.apply(this, a([], o(arguments), !1)) || this;
          return (e.result = ""), e;
        }
        return (
          i(e, t),
          (e.prototype.pushRichTextTag = function (t, e) {
            if ("$link" === t) {
              this.result += e.slice(1).join("");
              return;
            }
            this.result += e.join("");
          }),
          (e.prototype.pushLiteralText = function (t) {
            this.result += t;
          }),
          (e.prototype.pushObject = function (t) {
            null != t && "toString" in t && (this.result += t.toString());
          }),
          (e.prototype.finish = function () {
            return [this.result];
          }),
          e
        );
      })(r(817500).FormatBuilder);
      function s(t, e) {
        return "string" == typeof t ? t : this.bindFormatValues(u, t, e)[0];
      }
      (e.StringBuilder = u), (e.stringFormatter = { format: s, builder: u });
    },
    94651: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.runtimeHashMessageKey = function (t) {
          var e = (function (t) {
            t = BigInt(t);
            for (
              var e = [],
                r = Math.ceil(Math.floor(Math.log2(Number(t)) + 1) / 8),
                n = 0;
              n < r;
              n++
            )
              e.unshift(Number((t >> BigInt(8 * n)) & BigInt(255)));
            var i = new Uint8Array(e);
            return a ? i : i.reverse();
          })((0, i.hash)(t, 0));
          return [
            o[e[0] >> 2],
            o[((3 & e[0]) << 4) | (e[1] >> 4)],
            o[((15 & e[1]) << 2) | (e[2] >> 6)],
            o[63 & e[2]],
            o[e[3] >> 2],
            o[((3 & e[3]) << 4) | (e[3] >> 4)],
          ].join("");
        });
      var n,
        i = r(820401),
        o =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
            "",
          );
      var a = !(
        (new Uint32Array((n = new Uint8Array(4)).buffer)[0] = 1) & n[0]
      );
    },
    65084: function (t, e, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(e, r);
                (!i ||
                  ("get" in i
                    ? !e.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  }),
                  Object.defineProperty(t, n, i);
              }
            : function (t, e, r, n) {
                void 0 === n && (n = r), (t[n] = e[r]);
              }),
        i =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var r in t)
              "default" !== r &&
                !Object.prototype.hasOwnProperty.call(e, r) &&
                n(e, t, r);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.MessageLoader =
          e.waitForAllDefaultIntlMessagesLoaded =
          e.loadAllMessagesInLocale =
          e.createLoader =
          e.DEFAULT_LOCALE =
          e.IntlManager =
          e.runtimeHashMessageKey =
            void 0),
        i(r(755429), e);
      var o = r(94651);
      Object.defineProperty(e, "runtimeHashMessageKey", {
        enumerable: !0,
        get: function () {
          return o.runtimeHashMessageKey;
        },
      });
      var a = r(800467);
      Object.defineProperty(e, "IntlManager", {
        enumerable: !0,
        get: function () {
          return a.IntlManager;
        },
      }),
        Object.defineProperty(e, "DEFAULT_LOCALE", {
          enumerable: !0,
          get: function () {
            return a.DEFAULT_LOCALE;
          },
        });
      var u = r(928653);
      Object.defineProperty(e, "createLoader", {
        enumerable: !0,
        get: function () {
          return u.createLoader;
        },
      }),
        Object.defineProperty(e, "loadAllMessagesInLocale", {
          enumerable: !0,
          get: function () {
            return u.loadAllMessagesInLocale;
          },
        }),
        Object.defineProperty(e, "waitForAllDefaultIntlMessagesLoaded", {
          enumerable: !0,
          get: function () {
            return u.waitForAllDefaultIntlMessagesLoaded;
          },
        }),
        Object.defineProperty(e, "MessageLoader", {
          enumerable: !0,
          get: function () {
            return u.MessageLoader;
          },
        });
    },
    800467: function (t, e, r) {
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
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.IntlManager = e.DEFAULT_LOCALE = void 0);
      var o = r(88528),
        a = r(766989),
        u = r(817500);
      e.DEFAULT_LOCALE = "en-US";
      var s = (function () {
        function t(t) {
          void 0 === t && (t = e.DEFAULT_LOCALE);
          var r = this;
          (this.onLocaleChange = function (t) {
            return (
              r._localeSubscriptions.add(t),
              function () {
                return r._localeSubscriptions.delete(t);
              }
            );
          }),
            (this.defaultLocale = t),
            (this.currentLocale = t),
            console.log(a.IntlMessageFormat.formats),
            (this.intl = (0, o.createIntl)({
              formats: a.IntlMessageFormat.formats,
              defaultLocale: t,
              locale: t,
            })),
            (this._localeSubscriptions = new Set());
        }
        return (
          (t.prototype.withFormatters = function (t) {
            var e, r;
            try {
              for (
                var o = n(Object.entries(t)), a = o.next();
                !a.done;
                a = o.next()
              ) {
                var u = i(a.value, 2),
                  s = u[0],
                  c = u[1];
                this[s] = this.makeFormatFunction(c);
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                a && !a.done && (r = o.return) && r.call(o);
              } finally {
                if (e) throw e.error;
              }
            }
            return this;
          }),
          (t.prototype.makeFormatFunction = function (t) {
            var e = this,
              r = t.format,
              n = t.builder,
              i = r.bind(this);
            return function (t, r) {
              return i(t(e.currentLocale), r, n);
            };
          }),
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
                var i = n(this._localeSubscriptions), o = i.next();
                !o.done;
                o = i.next()
              )
                (0, o.value)(t);
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                o && !o.done && (r = i.return) && r.call(i);
              } finally {
                if (e) throw e.error;
              }
            }
          }),
          (t.prototype.string = function (t) {
            var e = t(this.currentLocale);
            return null == e || 0 === e.ast.length ? "" : e.ast[0].value;
          }),
          (t.prototype.reserialize = function (t) {
            var e = t(this.currentLocale);
            return "string" == typeof e ? e : e.reserialize();
          }),
          (t.prototype.bindFormatValues = function (t, e, r) {
            return (0, u.bindFormatValues)(
              t,
              e.ast,
              [this.currentLocale, this.defaultLocale],
              this.intl.formatters,
              this.intl.formats,
              r,
            );
          }),
          t
        );
      })();
      e.IntlManager = s;
    },
    542593: function (t, e) {
      var r,
        n,
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
          };
      function o(t) {
        for (var e = 0; e < t.length; e++) t[e] = a(t[e]);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.FORMAT_JS_POUND = e.FormatJsNodeType = void 0),
        (e.hydrateFormatJsAst = a),
        (e.hydrateMessages = function (t) {
          for (var e in t) t[e] = a(t[e]);
          return t;
        }),
        ((r = n || (e.FormatJsNodeType = n = {}))[(r.Literal = 0)] = "Literal"),
        (r[(r.Argument = 1)] = "Argument"),
        (r[(r.Number = 2)] = "Number"),
        (r[(r.Date = 3)] = "Date"),
        (r[(r.Time = 4)] = "Time"),
        (r[(r.Select = 5)] = "Select"),
        (r[(r.Plural = 6)] = "Plural"),
        (r[(r.Pound = 7)] = "Pound"),
        (r[(r.Tag = 8)] = "Tag"),
        (e.FORMAT_JS_POUND = Object.freeze({ type: 7 }));
      function a(t) {
        return Array.isArray(t[0])
          ? (o(t), t)
          : 0 === t.length
            ? t
            : (function (t) {
                var r = i(t, 1)[0];
                switch (r) {
                  case n.Literal:
                  case n.Argument:
                    return { type: r, value: t[1] };
                  case n.Number:
                  case n.Date:
                  case n.Time:
                    return { type: r, value: t[1], style: t[2] };
                  case n.Select:
                  case n.Plural:
                    return (function (t) {
                      var e = i(t, 5),
                        r = e[0],
                        a = e[1],
                        u = e[2],
                        s = e[3],
                        c = e[4];
                      for (var l in u) o(u[l].value);
                      return r === n.Plural
                        ? {
                            type: r,
                            value: a,
                            options: u,
                            offset: s,
                            pluralType: c,
                          }
                        : { type: r, value: a, options: u, offset: s };
                    })(t);
                  case n.Pound:
                    return e.FORMAT_JS_POUND;
                  case n.Tag:
                    var a = i(t, 3),
                      u = a[0],
                      s = a[1],
                      c = a[2];
                    return o(c), { type: u, value: s, children: c };
                  default:
                    throw Error(
                      "FormatJS keyless JSON encountered an unknown type: ".concat(
                        r,
                      ),
                    );
                }
              })(t);
      }
    },
    928653: function (t, e, r) {
      t = r.nmd(t);
      var n =
          (this && this.__awaiter) ||
          function (t, e, r, n) {
            return new (r || (r = Promise))(function (i, o) {
              function a(t) {
                try {
                  s(n.next(t));
                } catch (t) {
                  o(t);
                }
              }
              function u(t) {
                try {
                  s(n.throw(t));
                } catch (t) {
                  o(t);
                }
              }
              function s(t) {
                var e;
                t.done
                  ? i(t.value)
                  : ((e = t.value) instanceof r
                      ? e
                      : new r(function (t) {
                          t(e);
                        })
                    ).then(a, u);
              }
              s((n = n.apply(t, e || [])).next());
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
              (o = { next: u(0), throw: u(1), return: u(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function u(u) {
              return function (s) {
                return (function (u) {
                  if (r) throw TypeError("Generator is already executing.");
                  for (; o && ((o = 0), u[0] && (a = 0)), a; )
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (i =
                            2 & u[0]
                              ? n.return
                              : u[0]
                                ? n.throw || ((i = n.return) && i.call(n), 0)
                                : n.next) &&
                          !(i = i.call(n, u[1])).done)
                      )
                        return i;
                      switch (((n = 0), i && (u = [2 & u[0], i.value]), u[0])) {
                        case 0:
                        case 1:
                          i = u;
                          break;
                        case 4:
                          return a.label++, { value: u[1], done: !1 };
                        case 5:
                          a.label++, (n = u[1]), (u = [0]);
                          continue;
                        case 7:
                          (u = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                            (6 === u[0] || 2 === u[0])
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === u[0] &&
                            (!i || (u[1] > i[0] && u[1] < i[3]))
                          ) {
                            a.label = u[1];
                            break;
                          }
                          if (6 === u[0] && a.label < i[1]) {
                            (a.label = i[1]), (i = u);
                            break;
                          }
                          if (i && a.label < i[2]) {
                            (a.label = i[2]), a.ops.push(u);
                            break;
                          }
                          i[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      u = e.call(t, a);
                    } catch (t) {
                      (u = [6, t]), (n = 0);
                    } finally {
                      r = i = 0;
                    }
                  if (5 & u[0]) throw u[1];
                  return { value: u[0] ? u[1] : void 0, done: !0 };
                })([u, s]);
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
        (e.MessageLoader = void 0),
        (e.loadAllMessagesInLocale = function (t) {
          return n(this, void 0, void 0, function () {
            return i(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    Promise.all(
                      c.map(function (e) {
                        return e._loadLocale(t);
                      }),
                    ),
                  ];
                case 1:
                  return e.sent(), [2];
              }
            });
          });
        }),
        (e.waitForAllDefaultIntlMessagesLoaded = function () {
          return n(this, void 0, void 0, function () {
            return i(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    Promise.all(
                      c.map(function (t) {
                        return t.waitForDefaultLocale();
                      }),
                    ),
                  ];
                case 1:
                  return t.sent(), [2];
              }
            });
          });
        }),
        (e.createLoader = function (t, e, r) {
          var n = new s(t, e, r);
          return c.push(n), n;
        });
      var u = r(953925),
        s = (function () {
          function e(e, r, s) {
            var c,
              l,
              h = this;
            if (
              ((this.messageKeys = e),
              (this.messages = {}),
              (this.localeImportMap = r),
              (this.supportedLocales = Object.keys(r)),
              (this.defaultLocale = s),
              (this._localeLoadingPromises = {}),
              (this._parseCache = new Map()),
              (this._subscribers = new Set()),
              this._loadLocale(this.defaultLocale),
              (this.fallbackMessage = new u.InternalIntlMessage(
                [],
                this.defaultLocale,
              )),
              t.hot)
            ) {
              var f = function (e, r) {
                t.hot.accept(r, function () {
                  return n(h, void 0, void 0, function () {
                    return i(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, this._loadLocale(e)];
                        case 1:
                          return t.sent(), this._parseCache.clear(), [2];
                      }
                    });
                  });
                });
              };
              try {
                for (
                  var p = o(Object.entries(r)), m = p.next();
                  !m.done;
                  m = p.next()
                ) {
                  var d = a(m.value, 2),
                    v = d[0],
                    y = d[1];
                  f(v, y);
                }
              } catch (t) {
                c = { error: t };
              } finally {
                try {
                  m && !m.done && (l = p.return) && l.call(p);
                } finally {
                  if (c) throw c.error;
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
              if (null == this.messages[e]) {
                this.supportedLocales.includes(e) && this._loadLocale(e);
                return;
              }
              if (t in this.messages[e]) {
                var i = this.messages[e][t],
                  o = new u.InternalIntlMessage(i, e);
                return this._parseCache.set(r, o), o;
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
                var e, r, n, o;
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (
                        (null === (o = this._localeLoadingPromises[t]) ||
                        void 0 === o
                          ? void 0
                          : o.current) != null
                      )
                        return [2];
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
                        (this._localeLoadingPromises[t] = {
                          initialized: !1,
                          current: e,
                        }),
                        (r = this.messages),
                        (n = t),
                        [4, e]
                      );
                    case 1:
                      return (
                        (r[n] = i.sent().default),
                        (this._localeLoadingPromises[t] = {
                          initialized: !0,
                          current: void 0,
                        }),
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
            (e.prototype.isLocaleLoaded = function (t, e) {
              void 0 === e && (e = !1);
              var r = this._localeLoadingPromises[t];
              return (
                null != r && !1 != r.initialized && (!e || null == r.current)
              );
            }),
            (e.prototype.waitForLocaleLoaded = function (t) {
              return n(this, arguments, void 0, function (t, e) {
                var r;
                return (
                  void 0 === e && (e = !1),
                  i(this, function (n) {
                    switch (n.label) {
                      case 0:
                        if (null == (r = this._localeLoadingPromises[t]))
                          return [2, this._loadLocale(t)];
                        if (r.initialized && !e) return [2];
                        return [4, r.current];
                      case 1:
                        return n.sent(), [2];
                    }
                  })
                );
              });
            }),
            (e.prototype.waitForDefaultLocale = function () {
              return n(this, arguments, void 0, function (t) {
                return (
                  void 0 === t && (t = !1),
                  i(this, function (e) {
                    return [2, this.waitForLocaleLoaded(this.defaultLocale, t)];
                  })
                );
              });
            }),
            e
          );
        })();
      e.MessageLoader = s;
      var c = [];
    },
    953925: function (t, e, r) {
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
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.InternalIntlMessage = void 0);
      var o = r(542593),
        a = (function () {
          function t(t, e) {
            (this.locale = e), (this.ast = t);
          }
          return (
            (t.prototype.reserialize = function () {
              var t = { value: "" };
              return u(this.ast, t), t.value;
            }),
            t
          );
        })();
      function u(t, e) {
        var r, a, s, c, l, h;
        try {
          for (var f = n(t), p = f.next(); !p.done; p = f.next()) {
            var m = p.value;
            switch (m.type) {
              case o.FormatJsNodeType.Literal:
                e.value += m.value;
                return;
              case o.FormatJsNodeType.Argument:
                if ("$_" === e.value) return;
                e.value += "{" + m.value + "}";
                return;
              case o.FormatJsNodeType.Date:
                (e.value += "{" + m.value + ", date"),
                  null != m.style && (e.value += ", " + m.style),
                  (e.value += "}");
                return;
              case o.FormatJsNodeType.Time:
                (e.value += "{" + m.value + ", time"),
                  null != m.style && (e.value += ", " + m.style),
                  (e.value += "}");
                return;
              case o.FormatJsNodeType.Number:
                (e.value += "{" + m.value + ", number"),
                  null != m.style && (e.value += ", " + m.style),
                  (e.value += "}");
                return;
              case o.FormatJsNodeType.Plural:
                var d = "ordinal" == m.pluralType ? "selectordinal" : "plural";
                (e.value += "{" + m.value + ", " + d + ", "),
                  m.offset && (e.value += "offset:" + m.offset);
                try {
                  for (
                    var v = ((s = void 0), n(Object.entries(m.options))),
                      y = v.next();
                    !y.done;
                    y = v.next()
                  ) {
                    var g = i(y.value, 2),
                      b = g[0],
                      E = g[1];
                    (e.value += " " + b + " {"),
                      u(E.value, e),
                      (e.value += "}");
                  }
                } catch (t) {
                  s = { error: t };
                } finally {
                  try {
                    y && !y.done && (c = v.return) && c.call(v);
                  } finally {
                    if (s) throw s.error;
                  }
                }
                return;
              case o.FormatJsNodeType.Pound:
                e.value += "#";
                return;
              case o.FormatJsNodeType.Select:
                e.value += "{" + m.value + ", select, ";
                try {
                  for (
                    var T = ((l = void 0), n(Object.entries(m.options))),
                      _ = T.next();
                    !_.done;
                    _ = T.next()
                  ) {
                    var L = i(_.value, 2),
                      b = L[0],
                      E = L[1];
                    (e.value += " " + b + " {"),
                      u(E.value, e),
                      (e.value += "}");
                  }
                } catch (t) {
                  l = { error: t };
                } finally {
                  try {
                    _ && !_.done && (h = T.return) && h.call(T);
                  } finally {
                    if (l) throw l.error;
                  }
                }
                return;
              case o.FormatJsNodeType.Tag:
                (function (t, e) {
                  switch (t.value) {
                    case "$b":
                      (e.value += "**"), u(t.children, e), (e.value += "**");
                      return;
                    case "$i":
                      (e.value += "*"), u(t.children, e), (e.value += "*");
                      return;
                    case "$code":
                      (e.value += "`"), u(t.children, e), (e.value += "`");
                      return;
                    case "$p":
                      u(t.children, e), (e.value += "\n\n");
                      return;
                    case "$link":
                      var r = i(t.children),
                        n = r[0],
                        o = r.slice(1);
                      (e.value += "["),
                        u(o, e),
                        (e.value += "]("),
                        null != n && u([n], e),
                        (e.value += ")");
                      return;
                    default:
                      (e.value += "$["),
                        u(t.children, e),
                        (e.value += "](" + t.value + ")");
                      return;
                  }
                })(m, e);
                return;
            }
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            p && !p.done && (a = f.return) && a.call(f);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      e.InternalIntlMessage = a;
    },
    28866: function (t, e, r) {
      r.d(e, {
        kG: function () {
          return n;
        },
      });
      function n(t, e, r) {
        if ((void 0 === r && (r = Error), !t)) throw new r(e);
      }
    },
    857840: function (t, e, r) {
      function n(t, e) {
        var r = e && e.cache ? e.cache : l,
          n = e && e.serializer ? e.serializer : s;
        return (e && e.strategy ? e.strategy : u)(t, {
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
      function u(t, e) {
        var r,
          n,
          a,
          u,
          s,
          c = 1 === t.length ? i : o;
        return (
          (r = t),
          (n = this),
          (a = c),
          (u = e.cache.create()),
          (s = e.serializer),
          a.bind(n, r, u, s)
        );
      }
      var s = function () {
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
            var r, n, i, a, u;
            return (
              (r = t),
              (n = this),
              (i = o),
              (a = e.cache.create()),
              (u = e.serializer),
              i.bind(n, r, a, u)
            );
          },
          monadic: function (t, e) {
            var r, n, o, a, u;
            return (
              (r = t),
              (n = this),
              (o = i),
              (a = e.cache.create()),
              (u = e.serializer),
              o.bind(n, r, a, u)
            );
          },
        };
    },
    944990: function (t, e, r) {
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
            var u = 1 + (1 & a),
              s = a < 2 ? 1 : 3 + (a >> 1),
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
            for (("H" == c || "k" == c) && (s = 0); s-- > 0; ) r += "a";
            for (; u-- > 0; ) r = c + r;
          } else "J" === o ? (r += "H") : (r += o);
        }
        return r;
      }
    },
    827671: function (t, e, r) {
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
      r.d(e, {
        HI: function () {
          return a.HI;
        },
        Ii: function () {
          return a.Ii;
        },
        Jo: function () {
          return a.Jo;
        },
        O4: function () {
          return a.O4;
        },
        Qc: function () {
          return u;
        },
        VG: function () {
          return a.VG;
        },
        Wh: function () {
          return a.Wh;
        },
        Wi: function () {
          return a.Wi;
        },
        pe: function () {
          return a.pe;
        },
        rp: function () {
          return a.rp;
        },
        uf: function () {
          return a.uf;
        },
        wD: function () {
          return a.wD;
        },
        yx: function () {
          return a.yx;
        },
      });
      var n = r(146150),
        i = r(827671),
        o = r(596771),
        a = r(928125);
      function u(t, e) {
        void 0 === e && (e = {}),
          (e = (0, n.pi)(
            { shouldParseSkeletons: !0, requiresOtherClause: !0 },
            e,
          ));
        var r = new o._(t, e).parse();
        if (r.err) {
          var u = SyntaxError(i.o[r.err.kind]);
          throw (
            ((u.location = r.err.location),
            (u.originalMessage = r.err.message),
            u)
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
    },
    596771: function (t, e, r) {
      r.d(e, {
        _: function () {
          return M;
        },
      });
      var n,
        i,
        o = r(146150),
        a = r(827671),
        u = r(928125),
        s = r(387004),
        c = r(927882),
        l = r(944990),
        h = new RegExp("^".concat(s.p.source, "*")),
        f = new RegExp("".concat(s.p.source, "*$"));
      function p(t, e) {
        return { start: t, end: e };
      }
      var m = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        d = !!String.fromCodePoint,
        v = !!Object.fromEntries,
        y = !!String.prototype.codePointAt,
        g = !!String.prototype.trimStart,
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
        var _ = N("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        T =
          (null === (n = _.exec("a")) || void 0 === n ? void 0 : n[0]) === "a";
      } catch (t) {
        T = !1;
      }
      var L = m
          ? function (t, e, r) {
              return t.startsWith(e, r);
            }
          : function (t, e, r) {
              return t.slice(r, r + e.length) === e;
            },
        A = d
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
        I = y
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
        H = g
          ? function (t) {
              return t.trimStart();
            }
          : function (t) {
              return t.replace(h, "");
            },
        B = b
          ? function (t) {
              return t.trimEnd();
            }
          : function (t) {
              return t.replace(f, "");
            };
      function N(t, e) {
        return new RegExp(t, e);
      }
      if (T) {
        var P = N("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        i = function (t, e) {
          var r;
          return (
            (P.lastIndex = e),
            null !== (r = P.exec(t)[1]) && void 0 !== r ? r : ""
          );
        };
      } else
        i = function (t, e) {
          for (var r = []; ; ) {
            var n = I(t, e);
            if (
              void 0 === n ||
              w(n) ||
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
          return A.apply(void 0, r);
        };
      var M = (function () {
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
                var s = this.clonePosition();
                this.bump(),
                  n.push({
                    type: u.wD.pound,
                    location: p(s, this.clonePosition()),
                  });
              } else if (60 !== i || this.ignoreTag || 47 !== this.peek()) {
                if (60 === i && !this.ignoreTag && O(this.peek() || 0)) {
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
                  type: u.wD.literal,
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
              s = this.clonePosition();
            if (!this.bumpIf("</"))
              return this.error(a.o.UNCLOSED_TAG, p(r, this.clonePosition()));
            if (this.isEOF() || !O(this.char()))
              return this.error(a.o.INVALID_TAG, p(s, this.clonePosition()));
            var c = this.clonePosition();
            return n !== this.parseTagName()
              ? this.error(
                  a.o.UNMATCHED_CLOSING_TAG,
                  p(c, this.clonePosition()),
                )
              : (this.bumpSpace(), this.bumpIf(">"))
                ? {
                    val: {
                      type: u.wD.tag,
                      value: n,
                      children: o,
                      location: p(r, this.clonePosition()),
                    },
                    err: null,
                  }
                : this.error(a.o.INVALID_TAG, p(s, this.clonePosition()));
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
            var s = p(r, this.clonePosition());
            return {
              val: { type: u.wD.literal, value: n, location: s },
              err: null,
            };
          }),
          (t.prototype.tryParseLeftAngleBracket = function () {
            return !this.isEOF() &&
              60 === this.char() &&
              (this.ignoreTag ||
                !(function (t) {
                  return O(t) || 47 === t;
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
            return A.apply(void 0, e);
          }),
          (t.prototype.tryParseUnquoted = function (t, e) {
            if (this.isEOF()) return null;
            var r = this.char();
            return 60 === r ||
              123 === r ||
              (35 === r && ("plural" === e || "selectordinal" === e)) ||
              (125 === r && t > 0)
              ? null
              : (this.bump(), A(r));
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
                      type: u.wD.argument,
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
              s = this.clonePosition(),
              h = this.parseIdentifierIfPossible().value,
              f = this.clonePosition();
            switch (h) {
              case "":
                return this.error(a.o.EXPECT_ARGUMENT_TYPE, p(s, f));
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
                  var y = B(v.val);
                  if (0 === y.length)
                    return this.error(
                      a.o.EXPECT_ARGUMENT_STYLE,
                      p(this.clonePosition(), this.clonePosition()),
                    );
                  m = { style: y, styleLocation: p(d, this.clonePosition()) };
                }
                var g = this.tryParseArgumentClose(n);
                if (g.err) return g;
                var b = p(n, this.clonePosition());
                if (m && L(null == m ? void 0 : m.style, "::", 0)) {
                  var E = H(m.style.slice(2));
                  if ("number" === h) {
                    var v = this.parseNumberSkeletonFromString(
                      E,
                      m.styleLocation,
                    );
                    if (v.err) return v;
                    return {
                      val: {
                        type: u.wD.number,
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
                  var y = {
                    type: u.aV.dateTime,
                    pattern: T,
                    location: m.styleLocation,
                    parsedOptions: this.shouldParseSkeletons
                      ? (0, c.parseDateTimeSkeleton)(T)
                      : {},
                  };
                  return {
                    val: {
                      type: "date" === h ? u.wD.date : u.wD.time,
                      value: r,
                      location: b,
                      style: y,
                    },
                    err: null,
                  };
                }
                return {
                  val: {
                    type:
                      "number" === h
                        ? u.wD.number
                        : "date" === h
                          ? u.wD.date
                          : u.wD.time,
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
                var A = this.parseIdentifierIfPossible(),
                  I = 0;
                if ("select" !== h && "offset" === A.value) {
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
                    (A = this.parseIdentifierIfPossible()),
                    (I = v.val);
                }
                var N = this.tryParsePluralOrSelectOptions(t, h, e, A);
                if (N.err) return N;
                var g = this.tryParseArgumentClose(n);
                if (g.err) return g;
                var P = p(n, this.clonePosition());
                if ("select" === h)
                  return {
                    val: {
                      type: u.wD.select,
                      value: r,
                      options: S(N.val),
                      location: P,
                    },
                    err: null,
                  };
                return {
                  val: {
                    type: u.wD.plural,
                    value: r,
                    options: S(N.val),
                    offset: I,
                    pluralType: "plural" === h ? "cardinal" : "ordinal",
                    location: P,
                  },
                  err: null,
                };
              default:
                return this.error(a.o.INVALID_ARGUMENT_TYPE, p(s, f));
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
              r = (0, c.parseNumberSkeletonFromString)(t);
            } catch (t) {
              return this.error(a.o.INVALID_NUMBER_SKELETON, e);
            }
            return {
              val: {
                type: u.aV.number,
                tokens: r,
                location: e,
                parsedOptions: this.shouldParseSkeletons
                  ? (0, c.parseNumberSkeleton)(r)
                  : {},
              },
              err: null,
            };
          }),
          (t.prototype.tryParsePluralOrSelectOptions = function (t, e, r, n) {
            for (
              var i, o = !1, u = [], s = new Set(), c = n.value, l = n.location;
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
              if (s.has(c))
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
              u.push([
                c,
                { value: d.val, location: p(m, this.clonePosition()) },
              ]),
                s.add(c),
                this.bumpSpace(),
                (c = (i = this.parseIdentifierIfPossible()).value),
                (l = i.location);
            }
            return 0 === u.length
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
                : { val: u, err: null };
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
            var u = p(n, this.clonePosition());
            return i
              ? E((o *= r))
                ? { val: o, err: null }
                : this.error(e, u)
              : this.error(t, u);
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
            var e = I(this.message, t);
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
            if (L(this.message, t, this.offset())) {
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
            for (; !this.isEOF() && w(this.char()); ) this.bump();
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
      function O(t) {
        return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
      }
      function w(t) {
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
      r.d(e, {
        p: function () {
          return n;
        },
      });
      var n = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
    },
    779597: function (t, e, r) {
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
      var n, i, o, a;
      function u(t) {
        return t.type === n.literal;
      }
      function s(t) {
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
      function y(t) {
        return !!(t && "object" == typeof t && t.type === i.dateTime);
      }
      r.d(e, {
        HI: function () {
          return d;
        },
        Ii: function () {
          return y;
        },
        Jo: function () {
          return p;
        },
        O4: function () {
          return u;
        },
        VG: function () {
          return s;
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
        pe: function () {
          return h;
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
      r.r(e),
        r.d(e, {
          parseDateTimeSkeleton: function () {
            return n.T;
          },
          parseNumberSkeleton: function () {
            return i.I;
          },
          parseNumberSkeletonFromString: function () {
            return i.O;
          },
        });
      var n = r(99925),
        i = r(356228);
    },
    356228: function (t, e, r) {
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
          for (var a = o[0], u = o.slice(1), s = 0; s < u.length; s++)
            if (0 === u[s].length) throw Error("Invalid number skeleton");
          r.push({ stem: a, options: u });
        }
        return r;
      }
      var a = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        u = /^(@+)?(\+|#+)?[rs]?$/g,
        s = /(\*)(0+)|(#+)(0+)|(0+)/g,
        c = /^(0+)$/;
      function l(t) {
        var e = {};
        return (
          "r" === t[t.length - 1]
            ? (e.roundingPriority = "morePrecision")
            : "s" === t[t.length - 1] && (e.roundingPriority = "lessPrecision"),
          t.replace(u, function (t, r, n) {
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
              i.options[0].replace(s, function (t, r, n, i, o, a) {
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
          if (u.test(i.stem)) {
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
      r.d(e, {
        r: function () {
          return n;
        },
      });
      var n = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
    },
    88528: function (t, e, r) {
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
            return u.I;
          },
          formatList: function () {
            return s.I;
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
      var n = r(278253),
        i = r(926832),
        o = r(880710),
        a = r(650488),
        u = r(368382),
        s = r(450132),
        c = r(557944),
        l = r(812929),
        h = r(562376),
        f = r(448080);
      function p(t) {
        return t;
      }
      function m(t) {
        return t;
      }
    },
    448080: function (t, e, r) {
      r.d(e, {
        d: function () {
          return p;
        },
      });
      var n = r(146150),
        i = r(278253),
        o = r(926832),
        a = r(562376),
        u = r(812929),
        s = r(650488),
        c = r(557944),
        l = r(880710),
        h = r(450132),
        f = r(368382);
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
            formatRelativeTime: u.S.bind(null, p, r.getRelativeTimeFormat),
            formatDate: s.p6.bind(null, p, r.getDateTimeFormat),
            formatDateToParts: s.OI.bind(null, p, r.getDateTimeFormat),
            formatTime: s.mr.bind(null, p, r.getDateTimeFormat),
            formatDateTimeRange: s.Hk.bind(null, p, r.getDateTimeFormat),
            formatTimeToParts: s.uE.bind(null, p, r.getDateTimeFormat),
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
    650488: function (t, e, r) {
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
          return s;
        },
        uE: function () {
          return f;
        },
      });
      var n = r(146150),
        i = r(278253),
        o = r(926832),
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
      function u(t, e, r, o) {
        var u = t.locale,
          s = t.formats,
          c = t.onError,
          l = t.timeZone;
        void 0 === o && (o = {});
        var h = o.format,
          f = (0, n.pi)(
            (0, n.pi)({}, l && { timeZone: l }),
            h && (0, i.TB)(s, e, h, c),
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
          r(u, p)
        );
      }
      function s(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var i = r[0],
          a = r[1],
          s = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return u(t, "date", e, void 0 === a ? {} : a).format(s);
        } catch (e) {
          t.onError(new o.Qe("Error formatting date.", t.locale, e));
        }
        return String(s);
      }
      function c(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var i = r[0],
          a = r[1],
          s = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return u(t, "time", e, void 0 === a ? {} : a).format(s);
        } catch (e) {
          t.onError(new o.Qe("Error formatting time.", t.locale, e));
        }
        return String(s);
      }
      function l(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var u = r[0],
          s = r[1],
          c = r[2],
          l = t.timeZone,
          h = t.locale,
          f = t.onError,
          p = (0, i.L6)(void 0 === c ? {} : c, a, l ? { timeZone: l } : {});
        try {
          return e(h, p).formatRange(u, s);
        } catch (e) {
          f(new o.Qe("Error formatting date time range.", t.locale, e));
        }
        return String(u);
      }
      function h(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var i = r[0],
          a = r[1],
          s = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return u(t, "date", e, void 0 === a ? {} : a).formatToParts(s);
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
          s = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return u(t, "time", e, void 0 === a ? {} : a).formatToParts(s);
        } catch (e) {
          t.onError(new o.Qe("Error formatting time.", t.locale, e));
        }
        return [];
      }
    },
    368382: function (t, e, r) {
      r.d(e, {
        I: function () {
          return u;
        },
      });
      var n = r(278253),
        i = r(78385),
        o = r(926832),
        a = ["style", "type", "fallback", "languageDisplay"];
      function u(t, e, r, u) {
        var s = t.locale,
          c = t.onError;
        !Intl.DisplayNames &&
          c(
            new i.u_(
              'Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',
              i.jK.MISSING_INTL_API,
            ),
          );
        var l = (0, n.L6)(u, a);
        try {
          return e(s, l).of(r);
        } catch (t) {
          c(new o.Qe("Error formatting display name.", s, t));
        }
      }
    },
    926832: function (t, e, r) {
      r.d(e, {
        $6: function () {
          return f;
        },
        OV: function () {
          return s;
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
          return u;
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
        u = (function (t) {
          function e(e, r) {
            return t.call(this, i.UNSUPPORTED_FORMATTER, e, r) || this;
          }
          return (0, o.ZT)(e, t), e;
        })(a),
        s = (function (t) {
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
    450132: function (t, e, r) {
      r.d(e, {
        I: function () {
          return c;
        },
        T: function () {
          return l;
        },
      });
      var n = r(146150),
        i = r(278253),
        o = r(78385),
        a = r(926832),
        u = ["type", "style"],
        s = Date.now();
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
        var f = (0, i.L6)(c, u);
        try {
          var p = {},
            m = r.map(function (t, e) {
              if ("object" == typeof t) {
                var r,
                  n = ((r = e), "".concat(s, "_").concat(r, "_").concat(s));
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
    880710: function (t, e, r) {
      r.d(e, {
        w: function () {
          return h;
        },
      });
      var n = r(146150),
        i = r(28866),
        o = r(670458),
        a = r(926832),
        u = r(859159);
      function s(t, e) {
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
          date: c(s(r.date, e), s(t.date || {}, e)),
          time: c(s(r.time, e), s(t.time || {}, e)),
        });
      }
      var h = function (t, e, r, o, s) {
        var c = t.locale,
          h = t.formats,
          f = t.messages,
          p = t.defaultLocale,
          m = t.defaultFormats,
          d = t.fallbackOnEmptyString,
          v = t.onError,
          y = t.timeZone,
          g = t.defaultRichTextElements;
        void 0 === r && (r = { id: "" });
        var b = r.id,
          E = r.defaultMessage;
        (0, i.kG)(
          !!b,
          "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue",
        );
        var T = String(b),
          _ = f && Object.prototype.hasOwnProperty.call(f, T) && f[T];
        if (Array.isArray(_) && 1 === _.length && _[0].type === u.wD.literal)
          return _[0].value;
        if (!o && _ && "string" == typeof _ && !g)
          return _.replace(/'\{(.*?)\}'/gi, "{$1}");
        if (
          ((o = (0, n.pi)((0, n.pi)({}, g), o || {})),
          (h = l(h, y)),
          (m = l(m, y)),
          !_)
        ) {
          if (!1 === d && "" === _) return _;
          if (
            ((!E || (c && c.toLowerCase() !== p.toLowerCase())) &&
              v(new a.$6(r, c)),
            E)
          )
            try {
              var L = e.getMessageFormat(E, p, m, s);
              return L.format(o);
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
          var L = e.getMessageFormat(
            _,
            c,
            h,
            (0, n.pi)({ formatters: e }, s || {}),
          );
          return L.format(o);
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
            var L = e.getMessageFormat(E, p, m, s);
            return L.format(o);
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
    562376: function (t, e, r) {
      r.d(e, {
        T: function () {
          return s;
        },
        uf: function () {
          return u;
        },
      });
      var n = r(926832),
        i = r(278253),
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
          u = t.onError;
        void 0 === r && (r = {});
        var s = r.format,
          c = (s && (0, i.TB)(a, "number", s, u)) || {};
        return e(n, (0, i.L6)(r, o, c));
      }
      function u(t, e, r, i) {
        void 0 === i && (i = {});
        try {
          return a(t, e, i).format(r);
        } catch (e) {
          t.onError(new n.Qe("Error formatting number.", t.locale, e));
        }
        return String(r);
      }
      function s(t, e, r, i) {
        void 0 === i && (i = {});
        try {
          return a(t, e, i).formatToParts(r);
        } catch (e) {
          t.onError(new n.Qe("Error formatting number.", t.locale, e));
        }
        return [];
      }
    },
    557944: function (t, e, r) {
      r.d(e, {
        R: function () {
          return u;
        },
      });
      var n = r(278253),
        i = r(926832),
        o = r(78385),
        a = ["type"];
      function u(t, e, r, u) {
        var s = t.locale,
          c = t.onError;
        void 0 === u && (u = {}),
          !Intl.PluralRules &&
            c(
              new o.u_(
                'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                o.jK.MISSING_INTL_API,
              ),
            );
        var l = (0, n.L6)(u, a);
        try {
          return e(s, l).select(r);
        } catch (t) {
          c(new i.Qe("Error formatting plural.", s, t));
        }
        return "other";
      }
    },
    812929: function (t, e, r) {
      r.d(e, {
        S: function () {
          return u;
        },
      });
      var n = r(278253),
        i = r(78385),
        o = r(926832),
        a = ["numeric", "style"];
      function u(t, e, r, u, s) {
        void 0 === s && (s = {}),
          !u && (u = "second"),
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
          (h = s),
          (f = c.locale),
          (p = c.formats),
          (m = c.onError),
          void 0 === h && (h = {}),
          (v = (!!(d = h.format) && (0, n.TB)(p, "relative", d, m)) || {}),
          l(f, (0, n.L6)(h, a, v))).format(r, u);
        } catch (e) {
          t.onError(new o.Qe("Error formatting relative time.", t.locale, e));
        }
        return String(r);
      }
    },
    278253: function (t, e, r) {
      r.d(e, {
        L6: function () {
          return u;
        },
        Sn: function () {
          return c;
        },
        TB: function () {
          return f;
        },
        Z0: function () {
          return s;
        },
        ax: function () {
          return h;
        },
      });
      var n = r(146150),
        i = r(670458),
        o = r(857840),
        a = r(926832);
      function u(t, e, r) {
        return (
          void 0 === r && (r = {}),
          e.reduce(function (e, n) {
            return n in t ? (e[n] = t[n]) : n in r && (e[n] = r[n]), e;
          }, {})
        );
      }
      var s = {
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
          u = (0, o.H)(
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
          s = (0, o.H)(
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
          getDateTimeFormat: u,
          getNumberFormat: s,
          getMessageFormat: (0, o.H)(
            function (t, e, r, o) {
              return new i.C(
                t,
                e,
                r,
                (0, n.pi)(
                  {
                    formatters: {
                      getNumberFormat: s,
                      getDateTimeFormat: u,
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
    766989: function (t, e, r) {
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
      r.d(e, {
        C: function () {
          return s;
        },
      });
      var n = r(146150),
        i = r(859159),
        o = r(857840),
        a = r(589983);
      function u(t) {
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
      var s = (function () {
        function t(e, r, i, s) {
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
            var p = s || {},
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
              (s && s.formatters) ||
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
                  { cache: u(h.number), strategy: o.A.variadic },
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
                  { cache: u(h.dateTime), strategy: o.A.variadic },
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
                  { cache: u(h.pluralRules), strategy: o.A.variadic },
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
          (t.__parse = i.Qc),
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
      r.d(e, {
        C8: function () {
          return u;
        },
        HR: function () {
          return c;
        },
        YR: function () {
          return s;
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
        u = (function (t) {
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
        s = (function (t) {
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
      r.d(e, {
        FK: function () {
          return function t(e, r, n, s, c, l, h) {
            if (1 === e.length && (0, o.O4)(e[0]))
              return [{ type: i.literal, value: e[0].value }];
            for (var f, p = [], m = 0; m < e.length; m++) {
              var d = e[m];
              if ((0, o.O4)(d)) {
                p.push({ type: i.literal, value: d.value });
                continue;
              }
              if ((0, o.yx)(d)) {
                "number" == typeof l &&
                  p.push({
                    type: i.literal,
                    value: n.getNumberFormat(r).format(l),
                  });
                continue;
              }
              var v = d.value;
              if (!(c && v in c)) throw new a.HR(v, h);
              var y = c[v];
              if ((0, o.VG)(d)) {
                (!y || "string" == typeof y || "number" == typeof y) &&
                  (y =
                    "string" == typeof y || "number" == typeof y
                      ? String(y)
                      : ""),
                  p.push({
                    type: "string" == typeof y ? i.literal : i.object,
                    value: y,
                  });
                continue;
              }
              if ((0, o.rp)(d)) {
                var g =
                  "string" == typeof d.style
                    ? s.date[d.style]
                    : (0, o.Ii)(d.style)
                      ? d.style.parsedOptions
                      : void 0;
                p.push({
                  type: i.literal,
                  value: n.getDateTimeFormat(r, g).format(y),
                });
                continue;
              }
              if ((0, o.pe)(d)) {
                var g =
                  "string" == typeof d.style
                    ? s.time[d.style]
                    : (0, o.Ii)(d.style)
                      ? d.style.parsedOptions
                      : s.time.medium;
                p.push({
                  type: i.literal,
                  value: n.getDateTimeFormat(r, g).format(y),
                });
                continue;
              }
              if ((0, o.uf)(d)) {
                var g =
                  "string" == typeof d.style
                    ? s.number[d.style]
                    : (0, o.Wh)(d.style)
                      ? d.style.parsedOptions
                      : void 0;
                g && g.scale && (y *= g.scale || 1),
                  p.push({
                    type: i.literal,
                    value: n.getNumberFormat(r, g).format(y),
                  });
                continue;
              }
              if ((0, o.HI)(d)) {
                var b = d.children,
                  E = d.value,
                  T = c[E];
                if (!u(T)) throw new a.YR(E, "function", h);
                var _ = T(
                  t(b, r, n, s, c, l).map(function (t) {
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
              if ((0, o.Wi)(d)) {
                var L = d.options[y] || d.options.other;
                if (!L) throw new a.C8(d.value, y, Object.keys(d.options), h);
                p.push.apply(p, t(L.value, r, n, s, c));
                continue;
              }
              if ((0, o.Jo)(d)) {
                var L = d.options["=".concat(y)];
                if (!L) {
                  if (!Intl.PluralRules)
                    throw new a.u_(
                      'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                      a.jK.MISSING_INTL_API,
                      h,
                    );
                  var A = n
                    .getPluralRules(r, { type: d.pluralType })
                    .select(y - (d.offset || 0));
                  L = d.options[A] || d.options.other;
                }
                if (!L) throw new a.C8(d.value, y, Object.keys(d.options), h);
                p.push.apply(p, t(L.value, r, n, s, c, y - (d.offset || 0)));
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
          return u;
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
      function u(t) {
        return "function" == typeof t;
      }
    },
    820401: function (t, e, r) {
      r.r(e),
        r.d(e, {
          XXH64: function () {
            return c;
          },
          hash: function () {
            return l;
          },
        });
      let n = 2n ** 64n - 1n,
        i = new TextEncoder();
      function o(t, e, r, n) {
        return (
          BigInt(t) |
          (BigInt(e) << 16n) |
          (BigInt(r) << 32n) |
          (BigInt(n) << 48n)
        );
      }
      function a(t, e) {
        return (
          BigInt(t[e]) |
          (BigInt(t[e + 1]) << 8n) |
          (BigInt(t[e + 2]) << 16n) |
          (BigInt(t[e + 3]) << 24n) |
          (BigInt(t[e + 4]) << 32n) |
          (BigInt(t[e + 5]) << 40n) |
          (BigInt(t[e + 6]) << 48n) |
          (BigInt(t[e + 7]) << 56n)
        );
      }
      function u(t, e) {
        return ((t << e) & n) | (t >> (64n - e));
      }
      function s(t) {
        return BigInt.asUintN(64, t);
      }
      class c {
        #t;
        #e;
        #r;
        #n;
        #i;
        #o;
        #a;
        #u;
        constructor(t = 0) {
          this.reset(t);
        }
        reset(t = this.#t) {
          return (
            (this.#t = BigInt.asUintN(32, BigInt(t))),
            (this.#e = s(this.#t + 0x9e3779b185ebca87n + 0xc2b2ae3d27d4eb4fn)),
            (this.#r = s(this.#t + 0xc2b2ae3d27d4eb4fn)),
            (this.#n = this.#t),
            (this.#i = s(this.#t - 0x9e3779b185ebca87n)),
            (this.#o = null),
            (this.#a = 0),
            (this.#u = 0),
            this
          );
        }
        update(t) {
          "string" == typeof t && (t = i.encode(t));
          let e = 0,
            r = t.length,
            n = e + r;
          if (0 === r) return this;
          if (
            ((this.#a += r),
            0 === this.#u && (this.#o = new Uint8Array(32)),
            this.#u + r < 32)
          )
            return this.#o.set(t.subarray(0, r), this.#u), (this.#u += r), this;
          if (this.#u > 0) {
            let r;
            this.#o.set(t.subarray(0, 32 - this.#u), this.#u);
            let n = 0;
            (r = a(this.#o, n)),
              (this.#e = s(
                0x9e3779b185ebca87n *
                  u(s(this.#e + 0xc2b2ae3d27d4eb4fn * r), 31n),
              )),
              (n += 8),
              (r = a(this.memory, n)),
              (this.#r = s(
                0x9e3779b185ebca87n *
                  u(s(this.#r + 0xc2b2ae3d27d4eb4fn * r), 31n),
              )),
              (n += 8),
              (r = a(this.memory, n)),
              (this.#n = s(
                0x9e3779b185ebca87n *
                  u(s(this.#n + 0xc2b2ae3d27d4eb4fn * r), 31n),
              )),
              (n += 8),
              (r = a(this.memory, n)),
              (this.#i = s(
                0x9e3779b185ebca87n *
                  u(s(this.#i + 0xc2b2ae3d27d4eb4fn * r), 31n),
              )),
              (e += 32 - this.#u),
              (this.#u = 0);
          }
          if (e <= n - 32) {
            let r = n - 32;
            do {
              let r;
              (r = a(t, e)),
                (this.#e = s(
                  0x9e3779b185ebca87n *
                    u(s(this.#e + 0xc2b2ae3d27d4eb4fn * r), 31n),
                )),
                (e += 8),
                (r = a(t, e)),
                (this.#r = s(
                  0x9e3779b185ebca87n *
                    u(s(this.#r + 0xc2b2ae3d27d4eb4fn * r), 31n),
                )),
                (e += 8),
                (r = a(t, e)),
                (this.#n = s(
                  0x9e3779b185ebca87n *
                    u(s(this.#n + 0xc2b2ae3d27d4eb4fn * r), 31n),
                )),
                (e += 8),
                (r = a(t, e)),
                (this.#i = s(
                  0x9e3779b185ebca87n *
                    u(s(this.#i + 0xc2b2ae3d27d4eb4fn * r), 31n),
                )),
                (e += 8);
            } while (e <= r);
          }
          return (
            e < n &&
              (this.#o.set(t.subarray(e, n), this.#u), (this.#u = n - e)),
            this
          );
        }
        digest() {
          let t = this.#o,
            e = this.#u,
            r = 0,
            n = 0n,
            i = 0n,
            c = 0n;
          for (
            this.#a >= 32
              ? ((n = s(
                  (n =
                    u(this.#e, 1n) +
                    u(this.#r, 7n) +
                    u(this.#n, 12n) +
                    u(this.#i, 18n)) ^
                    (0x9e3779b185ebca87n *
                      u(s(0xc2b2ae3d27d4eb4fn * this.#e), 31n)),
                )),
                (n = s(0x9e3779b185ebca87n * n + 0x85ebca77c2b2ae63n)),
                (n = s(
                  n ^
                    (0x9e3779b185ebca87n *
                      u(s(0xc2b2ae3d27d4eb4fn * this.#r), 31n)),
                )),
                (n = s(0x9e3779b185ebca87n * n + 0x85ebca77c2b2ae63n)),
                (n = s(
                  n ^
                    (0x9e3779b185ebca87n *
                      u(s(0xc2b2ae3d27d4eb4fn * this.#n), 31n)),
                )),
                (n = s(0x9e3779b185ebca87n * n + 0x85ebca77c2b2ae63n)),
                (n = s(
                  n ^
                    (0x9e3779b185ebca87n *
                      u(s(0xc2b2ae3d27d4eb4fn * this.#i), 31n)),
                )),
                (n = s(0x9e3779b185ebca87n * n + 0x85ebca77c2b2ae63n)))
              : (n = s(this.#t + 0x27d4eb2f165667c5n)),
              n += BigInt(this.#a);
            r <= e - 8;

          )
            (c = s(
              0x9e3779b185ebca87n *
                u(s(0xc2b2ae3d27d4eb4fn * (c = a(t, r))), 31n),
            )),
              (n = s(
                0x9e3779b185ebca87n * u(n ^ c, 27n) + 0x85ebca77c2b2ae63n,
              )),
              (r += 8);
          for (
            r + 4 <= e &&
            ((n = s(
              0xc2b2ae3d27d4eb4fn *
                u(
                  n ^
                    s(
                      0x9e3779b185ebca87n *
                        (c = o(
                          (t[r + 1] << 8) | t[r],
                          (t[r + 3] << 8) | t[r + 2],
                          0,
                          0,
                        )),
                    ),
                  23n,
                ) +
                0x165667b19e3779f9n,
            )),
            (r += 4));
            r < e;

          )
            n = s(
              0x9e3779b185ebca87n *
                u(n ^ s(0x27d4eb2f165667c5n * (c = o(t[r++], 0, 0, 0))), 11n),
            );
          return (
            (i = s(n >> 33n)),
            (n = s((n ^ i) * 0xc2b2ae3d27d4eb4fn)),
            (i = s(n >> 29n)),
            (n = s((n ^ i) * 0x165667b19e3779f9n)),
            (i = s(n >> 32n)),
            (n = s(n ^ i))
          );
        }
      }
      function l(t, e = 0) {
        return new c(e).update(t).digest();
      }
    },
  },
]);
//# sourceMappingURL=7dff18d046a6d2ab5804.js.map
