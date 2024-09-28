(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33477"],
  {
    817500: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__values) ||
        function (e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            n = 0;
          if (r) return r.call(e);
          if (e && "number" == typeof e.length)
            return {
              next: function () {
                return (
                  e && n >= e.length && (e = void 0),
                  { value: e && e[n++], done: !e }
                );
              },
            };
          throw TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined.",
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FormatBuilder = void 0),
        (t.bindFormatValuesWithBuilder = u),
        (t.bindFormatValues = c);
      var i = r(542593),
        o = r(766989),
        a = r(927882);
      function s(e) {
        return "$" === e[0];
      }
      function u(e, t, r, s, l, h, f, p) {
        if (
          (void 0 === h && (h = {}),
          1 === t.length && t[0].type === i.FormatJsNodeType.Literal)
        ) {
          e.pushLiteralText(t[0].value);
          return;
        }
        var d,
          m,
          v,
          y,
          g = function (t) {
            switch (t.type) {
              case i.FormatJsNodeType.Literal:
                return e.pushLiteralText(t.value), "continue";
              case i.FormatJsNodeType.Pound:
                if ("number" == typeof f) {
                  var d,
                    m,
                    g = s.getNumberFormat(r).format(f);
                  e.pushLiteralText(g);
                }
                return "continue";
            }
            var b = t.value;
            if (!(b in h) && "$" !== b[0]) throw new o.MissingValueError(b, p);
            var E = h[b];
            switch (t.type) {
              case i.FormatJsNodeType.Argument:
                if ("$_" == b) break;
                "object" == typeof E
                  ? e.pushObject(E)
                  : e.pushLiteralText(String(E));
                break;
              case i.FormatJsNodeType.Date:
                var T =
                  t.style in l.date
                    ? l.date[t.style]
                    : null != t.style
                      ? (0, a.parseDateTimeSkeleton)(t.style)
                      : void 0;
                e.pushLiteralText(s.getDateTimeFormat(r, T).format(E));
                break;
              case i.FormatJsNodeType.Time:
                var T =
                  t.style in l.time
                    ? l.time[t.style]
                    : null != t.style
                      ? (0, a.parseDateTimeSkeleton)(t.style)
                      : void 0;
                e.pushLiteralText(s.getDateTimeFormat(r, T).format(E));
                break;
              case i.FormatJsNodeType.Number:
                var T =
                    t.style in l.number
                      ? l.number[t.style]
                      : null != t.style
                        ? (0, a.parseNumberSkeleton)(
                            (0, a.parseNumberSkeletonFromString)(t.style),
                          )
                        : void 0,
                  _ =
                    "number" != typeof E
                      ? E
                      : ((v = E * (null == T ? void 0 : T.scale)), v);
                e.pushLiteralText(s.getNumberFormat(r, T).format(_));
                break;
              case i.FormatJsNodeType.Tag:
                var A = t.children,
                  I = c(e.constructor, A, r, s, l, h, f);
                if ("$" === b[0]) e.pushRichTextTag(b, I);
                else {
                  if ("function" != typeof E)
                    throw "expected a function type for a Tag formatting value, "
                      .concat(b, ". got ")
                      .concat(typeof E, ": ")
                      .concat(E);
                  var S = E(I);
                  S = Array.isArray(S) ? S : [S];
                  try {
                    for (
                      var L = ((d = void 0), n(S)), w = L.next();
                      !w.done;
                      w = L.next()
                    ) {
                      var N = w.value;
                      "string" == typeof N
                        ? e.pushLiteralText(N)
                        : e.pushObject(N);
                    }
                  } catch (e) {
                    d = { error: e };
                  } finally {
                    try {
                      w && !w.done && (m = L.return) && m.call(L);
                    } finally {
                      if (d) throw d.error;
                    }
                  }
                }
                break;
              case i.FormatJsNodeType.Select:
                var H =
                  t.value in t.options ? t.options[t.value] : t.options.other;
                if (null == H)
                  throw ""
                    .concat(t.value, " is not a known option for select value ")
                    .concat(b, ". Valid options are ")
                    .concat(Object.keys(t.options).join(", "));
                u(e, H.value, r, s, l, h);
                break;
              case i.FormatJsNodeType.Plural:
                var H = (function () {
                  var e,
                    n,
                    i = "=".concat(E);
                  if (i in t.options) return t.options[i];
                  var o = s
                    .getPluralRules(r, { type: t.pluralType })
                    .select(
                      E - (null !== (e = t.offset) && void 0 !== e ? e : 0),
                    );
                  return null !== (n = t.options[o]) && void 0 !== n
                    ? n
                    : t.options.other;
                })();
                if (null == H)
                  throw ""
                    .concat(t.value, " is not a known option for plural value ")
                    .concat(b, ". Valid options are ")
                    .concat(Object.keys(t.options).join(", "));
                u(
                  e,
                  H.value,
                  r,
                  s,
                  l,
                  h,
                  E - (null !== (y = t.offset) && void 0 !== y ? y : 0),
                );
            }
          };
        try {
          for (var b = n(t), E = b.next(); !E.done; E = b.next()) {
            var T = E.value;
            g(T);
          }
        } catch (e) {
          d = { error: e };
        } finally {
          try {
            E && !E.done && (m = b.return) && m.call(b);
          } finally {
            if (d) throw d.error;
          }
        }
      }
      function c(e, t, r, n, i, o, a) {
        void 0 === o && (o = {});
        var s = new e();
        return u(s, t, r, n, i, o, a), s.finish();
      }
      t.FormatBuilder = function () {};
    },
    877258: function (e, t, r) {
      "use strict";
      var n,
        i,
        o,
        a =
          (this && this.__extends) ||
          ((i = function (e, t) {
            return (i =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = e;
            }
            i(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          }),
        s =
          (this && this.__read) ||
          function (e, t) {
            var r = "function" == typeof Symbol && e[Symbol.iterator];
            if (!r) return e;
            var n,
              i,
              o = r.call(e),
              a = [];
            try {
              for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
                a.push(n.value);
            } catch (e) {
              i = { error: e };
            } finally {
              try {
                n && !n.done && (r = o.return) && r.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
            return a;
          },
        u =
          (this && this.__spreadArray) ||
          function (e, t, r) {
            if (r || 2 == arguments.length)
              for (var n, i = 0, o = t.length; i < o; i++)
                (n || !(i in t)) &&
                  (!n && (n = Array.prototype.slice.call(t, 0, i)),
                  (n[i] = t[i]));
            return e.concat(n || Array.prototype.slice.call(t));
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.astFormatter = t.RichTextNodeType = void 0),
        (t.formatToAst = f);
      var c = r(817500);
      ((n = o || (t.RichTextNodeType = o = {})).Text = "text"),
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
          $b: function (e) {
            return { type: o.Strong, content: e };
          },
          $i: function (e) {
            return { type: o.Emphasis, content: e };
          },
          $del: function (e) {
            return { type: o.Strikethrough, content: e };
          },
          $code: function (e) {
            return { type: o.Code, content: e };
          },
          $link: function (e) {
            var t = s(e),
              r = t[0],
              n = t.slice(1);
            return { type: o.Link, target: r.content, content: n };
          },
          $p: function (e) {
            return { type: o.Paragraph, content: e };
          },
        },
        h = (function (e) {
          function t() {
            var t = e.apply(this, u([], s(arguments), !1)) || this;
            return (t.result = []), t;
          }
          return (
            a(t, e),
            (t.prototype.pushRichTextTag = function (e, t) {
              if (!(e in l))
                throw "".concat(e, " is not a known rich text formatting tag");
              var r,
                n = l[e](t, "");
              Array.isArray(n)
                ? (r = this.result).push.apply(r, u([], s(n), !1))
                : this.result.push(n);
            }),
            (t.prototype.pushLiteralText = function (e) {
              var t = this.result[this.result.length - 1];
              null != t && t.type === o.Text
                ? (t.content += e)
                : this.result.push({ type: o.Text, content: e });
            }),
            (t.prototype.pushObject = function (e) {
              this.result.push({ type: o.Object, content: e });
            }),
            (t.prototype.finish = function () {
              return this.result;
            }),
            t
          );
        })(c.FormatBuilder);
      function f(e, t) {
        return "string" == typeof e
          ? [{ type: o.Text, content: e }]
          : this.bindFormatValues(h, e, t);
      }
      t.astFormatter = { format: f, builder: h };
    },
    755429: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.stringFormatter =
          t.DEFAULT_REACT_RICH_TEXT_ELEMENTS =
          t.makeReactFormatter =
          t.reactFormatter =
          t.markdownFormatter =
          t.RichTextNodeType =
          t.astFormatter =
            void 0);
      var n = r(877258);
      Object.defineProperty(t, "astFormatter", {
        enumerable: !0,
        get: function () {
          return n.astFormatter;
        },
      }),
        Object.defineProperty(t, "RichTextNodeType", {
          enumerable: !0,
          get: function () {
            return n.RichTextNodeType;
          },
        });
      var i = r(314905);
      Object.defineProperty(t, "markdownFormatter", {
        enumerable: !0,
        get: function () {
          return i.markdownFormatter;
        },
      });
      var o = r(925082);
      Object.defineProperty(t, "reactFormatter", {
        enumerable: !0,
        get: function () {
          return o.reactFormatter;
        },
      }),
        Object.defineProperty(t, "makeReactFormatter", {
          enumerable: !0,
          get: function () {
            return o.makeReactFormatter;
          },
        }),
        Object.defineProperty(t, "DEFAULT_REACT_RICH_TEXT_ELEMENTS", {
          enumerable: !0,
          get: function () {
            return o.DEFAULT_REACT_RICH_TEXT_ELEMENTS;
          },
        });
      var a = r(277606);
      Object.defineProperty(t, "stringFormatter", {
        enumerable: !0,
        get: function () {
          return a.stringFormatter;
        },
      });
    },
    314905: function (e, t, r) {
      "use strict";
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          }),
        o =
          (this && this.__read) ||
          function (e, t) {
            var r = "function" == typeof Symbol && e[Symbol.iterator];
            if (!r) return e;
            var n,
              i,
              o = r.call(e),
              a = [];
            try {
              for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
                a.push(n.value);
            } catch (e) {
              i = { error: e };
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
          function (e, t, r) {
            if (r || 2 == arguments.length)
              for (var n, i = 0, o = t.length; i < o; i++)
                (n || !(i in t)) &&
                  (!n && (n = Array.prototype.slice.call(t, 0, i)),
                  (n[i] = t[i]));
            return e.concat(n || Array.prototype.slice.call(t));
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.markdownFormatter = void 0),
        (t.formatToMarkdownString = l);
      var s = r(277606),
        u = {
          $_: function () {
            return "";
          },
          $b: function (e) {
            return "**" + e.join("") + "**";
          },
          $i: function (e) {
            return "*" + e.join("") + "*";
          },
          $del: function (e) {
            return "~~" + e.join("") + "~~";
          },
          $code: function (e) {
            return "`" + e.join("") + "`";
          },
          $link: function (e) {
            var t = o(e),
              r = t[0];
            return "[" + t.slice(1).join("") + "](" + r + ")";
          },
          $p: function (e) {
            return e.join("") + "\n\n";
          },
        },
        c = (function (e) {
          function t() {
            var t = e.apply(this, a([], o(arguments), !1)) || this;
            return (t.result = ""), t;
          }
          return (
            i(t, e),
            (t.prototype.pushRichTextTag = function (e, t) {
              this.result += u[e](t, "");
            }),
            t
          );
        })(s.StringBuilder);
      function l(e, t, r) {
        return (void 0 === r && (r = c), "string" == typeof e)
          ? e
          : this.bindFormatValues(r, e, t)[0];
      }
      t.markdownFormatter = { format: l, builder: c };
    },
    925082: function (e, t, r) {
      "use strict";
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          }),
        o =
          (this && this.__read) ||
          function (e, t) {
            var r = "function" == typeof Symbol && e[Symbol.iterator];
            if (!r) return e;
            var n,
              i,
              o = r.call(e),
              a = [];
            try {
              for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
                a.push(n.value);
            } catch (e) {
              i = { error: e };
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
          function (e, t, r) {
            if (r || 2 == arguments.length)
              for (var n, i = 0, o = t.length; i < o; i++)
                (n || !(i in t)) &&
                  (!n && (n = Array.prototype.slice.call(t, 0, i)),
                  (n[i] = t[i]));
            return e.concat(n || Array.prototype.slice.call(t));
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.reactFormatter = t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = void 0),
        (t.formatReact = l),
        (t.makeReactFormatter = h);
      var s = r(470079),
        u = r(817500),
        c = s.createElement;
      t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = {
        $_: function () {
          return "";
        },
        $b: function (e, t) {
          return c("strong", { key: t }, e);
        },
        $i: function (e, t) {
          return c("em", { key: t }, e);
        },
        $del: function (e, t) {
          return c("del", { key: t }, e);
        },
        $code: function (e, t) {
          return c("code", { key: t }, e);
        },
        $link: function (e, t) {
          var r = o(e);
          return c("a", { href: r[0], key: t }, r.slice(1));
        },
        $p: function (e, t) {
          return c("p", { key: t }, e);
        },
      };
      function l(e, t, r) {
        if ("string" == typeof e) return s.createElement(s.Fragment, void 0, e);
        var n = this.bindFormatValues(r, e, t);
        return s.createElement(s.Fragment, void 0, n);
      }
      function h(e) {
        var t;
        return {
          format: l,
          builder:
            ((t = e),
            (function (e) {
              function r() {
                var t = e.apply(this, a([], o(arguments), !1)) || this;
                return (t._nodeKey = 0), (t.result = []), t;
              }
              return (
                i(r, e),
                (r.prototype.pushRichTextTag = function (e, r) {
                  this.result.push(t[e](r, "".concat(this._nodeKey++)));
                }),
                (r.prototype.pushLiteralText = function (e) {
                  this.result.push(e);
                }),
                (r.prototype.pushObject = function (e) {
                  this.result.push(e);
                }),
                (r.prototype.finish = function () {
                  return this.result;
                }),
                r
              );
            })(u.FormatBuilder)),
        };
      }
      t.reactFormatter = h(t.DEFAULT_REACT_RICH_TEXT_ELEMENTS);
    },
    277606: function (e, t, r) {
      "use strict";
      var n,
        i =
          (this && this.__extends) ||
          ((n = function (e, t) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          }),
        o =
          (this && this.__read) ||
          function (e, t) {
            var r = "function" == typeof Symbol && e[Symbol.iterator];
            if (!r) return e;
            var n,
              i,
              o = r.call(e),
              a = [];
            try {
              for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
                a.push(n.value);
            } catch (e) {
              i = { error: e };
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
          function (e, t, r) {
            if (r || 2 == arguments.length)
              for (var n, i = 0, o = t.length; i < o; i++)
                (n || !(i in t)) &&
                  (!n && (n = Array.prototype.slice.call(t, 0, i)),
                  (n[i] = t[i]));
            return e.concat(n || Array.prototype.slice.call(t));
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.stringFormatter = t.StringBuilder = void 0),
        (t.formatToPlainString = u);
      var s = (function (e) {
        function t() {
          var t = e.apply(this, a([], o(arguments), !1)) || this;
          return (t.result = ""), t;
        }
        return (
          i(t, e),
          (t.prototype.pushRichTextTag = function (e, t) {
            if ("$link" === e) {
              this.result += t.slice(1).join("");
              return;
            }
            this.result += t.join("");
          }),
          (t.prototype.pushLiteralText = function (e) {
            this.result += e;
          }),
          (t.prototype.pushObject = function (e) {
            null != e && "toString" in e && (this.result += e.toString());
          }),
          (t.prototype.finish = function () {
            return [this.result];
          }),
          t
        );
      })(r(817500).FormatBuilder);
      function u(e, t) {
        return "string" == typeof e ? e : this.bindFormatValues(s, e, t)[0];
      }
      (t.StringBuilder = s), (t.stringFormatter = { format: u, builder: s });
    },
    94651: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.runtimeHashMessageKey = function (e) {
          var t = (function (e) {
            e = BigInt(e);
            for (
              var t = [],
                r = Math.ceil(Math.floor(Math.log2(Number(e)) + 1) / 8),
                n = 0;
              n < r;
              n++
            )
              t.unshift(Number((e >> BigInt(8 * n)) & BigInt(255)));
            var i = new Uint8Array(t);
            return a ? i : i.reverse();
          })((0, i.hash)(e, 0));
          return [
            o[t[0] >> 2],
            o[((3 & t[0]) << 4) | (t[1] >> 4)],
            o[((15 & t[1]) << 2) | (t[2] >> 6)],
            o[63 & t[2]],
            o[t[3] >> 2],
            o[((3 & t[3]) << 4) | (t[3] >> 4)],
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
    65084: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                (!i ||
                  ("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, n, i);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" !== r &&
                !Object.prototype.hasOwnProperty.call(t, r) &&
                n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MessageLoader =
          t.waitForAllDefaultIntlMessagesLoaded =
          t.loadAllMessagesInLocale =
          t.createLoader =
          t.DEFAULT_LOCALE =
          t.IntlManager =
          t.runtimeHashMessageKey =
            void 0),
        i(r(755429), t);
      var o = r(94651);
      Object.defineProperty(t, "runtimeHashMessageKey", {
        enumerable: !0,
        get: function () {
          return o.runtimeHashMessageKey;
        },
      });
      var a = r(800467);
      Object.defineProperty(t, "IntlManager", {
        enumerable: !0,
        get: function () {
          return a.IntlManager;
        },
      }),
        Object.defineProperty(t, "DEFAULT_LOCALE", {
          enumerable: !0,
          get: function () {
            return a.DEFAULT_LOCALE;
          },
        });
      var s = r(928653);
      Object.defineProperty(t, "createLoader", {
        enumerable: !0,
        get: function () {
          return s.createLoader;
        },
      }),
        Object.defineProperty(t, "loadAllMessagesInLocale", {
          enumerable: !0,
          get: function () {
            return s.loadAllMessagesInLocale;
          },
        }),
        Object.defineProperty(t, "waitForAllDefaultIntlMessagesLoaded", {
          enumerable: !0,
          get: function () {
            return s.waitForAllDefaultIntlMessagesLoaded;
          },
        }),
        Object.defineProperty(t, "MessageLoader", {
          enumerable: !0,
          get: function () {
            return s.MessageLoader;
          },
        });
    },
    800467: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__values) ||
          function (e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
              r = t && e[t],
              n = 0;
            if (r) return r.call(e);
            if (e && "number" == typeof e.length)
              return {
                next: function () {
                  return (
                    e && n >= e.length && (e = void 0),
                    { value: e && e[n++], done: !e }
                  );
                },
              };
            throw TypeError(
              t ? "Object is not iterable." : "Symbol.iterator is not defined.",
            );
          },
        i =
          (this && this.__read) ||
          function (e, t) {
            var r = "function" == typeof Symbol && e[Symbol.iterator];
            if (!r) return e;
            var n,
              i,
              o = r.call(e),
              a = [];
            try {
              for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
                a.push(n.value);
            } catch (e) {
              i = { error: e };
            } finally {
              try {
                n && !n.done && (r = o.return) && r.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
            return a;
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IntlManager = t.DEFAULT_LOCALE = void 0);
      var o = r(88528),
        a = r(766989),
        s = r(817500);
      t.DEFAULT_LOCALE = "en-US";
      var u = (function () {
        function e(e) {
          void 0 === e && (e = t.DEFAULT_LOCALE);
          var r = this;
          (this.onLocaleChange = function (e) {
            return (
              r._localeSubscriptions.add(e),
              function () {
                return r._localeSubscriptions.delete(e);
              }
            );
          }),
            (this.defaultLocale = e),
            (this.currentLocale = e),
            console.log(a.IntlMessageFormat.formats),
            (this.intl = (0, o.createIntl)({
              formats: a.IntlMessageFormat.formats,
              defaultLocale: e,
              locale: e,
            })),
            (this._localeSubscriptions = new Set());
        }
        return (
          (e.prototype.withFormatters = function (e) {
            var t, r;
            try {
              for (
                var o = n(Object.entries(e)), a = o.next();
                !a.done;
                a = o.next()
              ) {
                var s = i(a.value, 2),
                  u = s[0],
                  c = s[1];
                this[u] = this.makeFormatFunction(c);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                a && !a.done && (r = o.return) && r.call(o);
              } finally {
                if (t) throw t.error;
              }
            }
            return this;
          }),
          (e.prototype.makeFormatFunction = function (e) {
            var t = this,
              r = e.format,
              n = e.builder,
              i = r.bind(this);
            return function (e, r) {
              return i(e(t.currentLocale), r, n);
            };
          }),
          (e.prototype.setLocale = function (e) {
            (this.currentLocale = e),
              (this.intl = (0, o.createIntl)({
                defaultLocale: this.defaultLocale,
                locale: e,
              })),
              this.emitLocaleChange(e);
          }),
          (e.prototype.emitLocaleChange = function (e) {
            var t, r;
            try {
              for (
                var i = n(this._localeSubscriptions), o = i.next();
                !o.done;
                o = i.next()
              )
                (0, o.value)(e);
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                o && !o.done && (r = i.return) && r.call(i);
              } finally {
                if (t) throw t.error;
              }
            }
          }),
          (e.prototype.string = function (e) {
            var t = e(this.currentLocale);
            return null == t || 0 === t.ast.length ? "" : t.ast[0].value;
          }),
          (e.prototype.reserialize = function (e) {
            var t = e(this.currentLocale);
            return "string" == typeof t ? t : t.reserialize();
          }),
          (e.prototype.bindFormatValues = function (e, t, r) {
            return (0, s.bindFormatValues)(
              e,
              t.ast,
              [this.currentLocale, this.defaultLocale],
              this.intl.formatters,
              this.intl.formats,
              r,
            );
          }),
          e
        );
      })();
      t.IntlManager = u;
    },
    542593: function (e, t) {
      "use strict";
      var r,
        n,
        i =
          (this && this.__read) ||
          function (e, t) {
            var r = "function" == typeof Symbol && e[Symbol.iterator];
            if (!r) return e;
            var n,
              i,
              o = r.call(e),
              a = [];
            try {
              for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
                a.push(n.value);
            } catch (e) {
              i = { error: e };
            } finally {
              try {
                n && !n.done && (r = o.return) && r.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
            return a;
          };
      function o(e) {
        for (var t = 0; t < e.length; t++) e[t] = a(e[t]);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FORMAT_JS_POUND = t.FormatJsNodeType = void 0),
        (t.hydrateFormatJsAst = a),
        (t.hydrateMessages = function (e) {
          for (var t in e) e[t] = a(e[t]);
          return e;
        }),
        ((r = n || (t.FormatJsNodeType = n = {}))[(r.Literal = 0)] = "Literal"),
        (r[(r.Argument = 1)] = "Argument"),
        (r[(r.Number = 2)] = "Number"),
        (r[(r.Date = 3)] = "Date"),
        (r[(r.Time = 4)] = "Time"),
        (r[(r.Select = 5)] = "Select"),
        (r[(r.Plural = 6)] = "Plural"),
        (r[(r.Pound = 7)] = "Pound"),
        (r[(r.Tag = 8)] = "Tag"),
        (t.FORMAT_JS_POUND = Object.freeze({ type: 7 }));
      function a(e) {
        return Array.isArray(e[0])
          ? (o(e), e)
          : 0 === e.length
            ? e
            : (function (e) {
                var r = i(e, 1)[0];
                switch (r) {
                  case n.Literal:
                  case n.Argument:
                    return { type: r, value: e[1] };
                  case n.Number:
                  case n.Date:
                  case n.Time:
                    return { type: r, value: e[1], style: e[2] };
                  case n.Select:
                  case n.Plural:
                    return (function (e) {
                      var t = i(e, 5),
                        r = t[0],
                        a = t[1],
                        s = t[2],
                        u = t[3],
                        c = t[4];
                      for (var l in s) o(s[l].value);
                      return r === n.Plural
                        ? {
                            type: r,
                            value: a,
                            options: s,
                            offset: u,
                            pluralType: c,
                          }
                        : { type: r, value: a, options: s, offset: u };
                    })(e);
                  case n.Pound:
                    return t.FORMAT_JS_POUND;
                  case n.Tag:
                    var a = i(e, 3),
                      s = a[0],
                      u = a[1],
                      c = a[2];
                    return o(c), { type: s, value: u, children: c };
                  default:
                    throw Error(
                      "FormatJS keyless JSON encountered an unknown type: ".concat(
                        r,
                      ),
                    );
                }
              })(e);
      }
    },
    928653: function (e, t, r) {
      "use strict";
      e = r.nmd(e);
      var n =
          (this && this.__awaiter) ||
          function (e, t, r, n) {
            return new (r || (r = Promise))(function (i, o) {
              function a(e) {
                try {
                  u(n.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                try {
                  u(n.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value) instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })
                    ).then(a, s);
              }
              u((n = n.apply(e, t || [])).next());
            });
          },
        i =
          (this && this.__generator) ||
          function (e, t) {
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
                      s = t.call(e, a);
                    } catch (e) {
                      (s = [6, e]), (n = 0);
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
          function (e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
              r = t && e[t],
              n = 0;
            if (r) return r.call(e);
            if (e && "number" == typeof e.length)
              return {
                next: function () {
                  return (
                    e && n >= e.length && (e = void 0),
                    { value: e && e[n++], done: !e }
                  );
                },
              };
            throw TypeError(
              t ? "Object is not iterable." : "Symbol.iterator is not defined.",
            );
          },
        a =
          (this && this.__read) ||
          function (e, t) {
            var r = "function" == typeof Symbol && e[Symbol.iterator];
            if (!r) return e;
            var n,
              i,
              o = r.call(e),
              a = [];
            try {
              for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
                a.push(n.value);
            } catch (e) {
              i = { error: e };
            } finally {
              try {
                n && !n.done && (r = o.return) && r.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
            return a;
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MessageLoader = void 0),
        (t.loadAllMessagesInLocale = function (e) {
          return n(this, void 0, void 0, function () {
            return i(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    Promise.all(
                      c.map(function (t) {
                        return t._loadLocale(e);
                      }),
                    ),
                  ];
                case 1:
                  return t.sent(), [2];
              }
            });
          });
        }),
        (t.waitForAllDefaultIntlMessagesLoaded = function () {
          return n(this, void 0, void 0, function () {
            return i(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    Promise.all(
                      c.map(function (e) {
                        return e.waitForDefaultLocale();
                      }),
                    ),
                  ];
                case 1:
                  return e.sent(), [2];
              }
            });
          });
        }),
        (t.createLoader = function (e, t, r) {
          var n = new u(e, t, r);
          return c.push(n), n;
        });
      var s = r(953925),
        u = (function () {
          function t(t, r, u) {
            var c,
              l,
              h = this;
            if (
              ((this.messageKeys = t),
              (this.messages = {}),
              (this.localeImportMap = r),
              (this.supportedLocales = Object.keys(r)),
              (this.defaultLocale = u),
              (this._localeLoadingPromises = {}),
              (this._parseCache = new Map()),
              (this._subscribers = new Set()),
              this._loadLocale(this.defaultLocale),
              (this.fallbackMessage = new s.InternalIntlMessage(
                [],
                this.defaultLocale,
              )),
              e.hot)
            ) {
              var f = function (t, r) {
                e.hot.accept(r, function () {
                  return n(h, void 0, void 0, function () {
                    return i(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, this._loadLocale(t)];
                        case 1:
                          return e.sent(), this._parseCache.clear(), [2];
                      }
                    });
                  });
                });
              };
              try {
                for (
                  var p = o(Object.entries(r)), d = p.next();
                  !d.done;
                  d = p.next()
                ) {
                  var m = a(d.value, 2),
                    v = m[0],
                    y = m[1];
                  f(v, y);
                }
              } catch (e) {
                c = { error: e };
              } finally {
                try {
                  d && !d.done && (l = p.return) && l.call(p);
                } finally {
                  if (c) throw c.error;
                }
              }
            }
          }
          return (
            (t.prototype.withDebugValues = function (e, t) {
              (this._debugKeyMap = e), (this._localeFileMap = t);
            }),
            (t.prototype.get = function (e, t) {
              var r,
                n =
                  null !== (r = this.getMessageValue(e, t)) && void 0 !== r
                    ? r
                    : this.getMessageValue(e, this.defaultLocale);
              if (null != n) return n;
              var i =
                  null != this._debugKeyMap
                    ? '"'.concat(this._debugKeyMap[e], '" (').concat(e, ")")
                    : void 0,
                o =
                  null != this._localeFileMap
                    ? "".concat(t, " (").concat(this._localeFileMap[t], ")")
                    : t,
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
            (t.prototype.getMessageValue = function (e, t) {
              var r = e + "@" + t,
                n = this._parseCache.get(r);
              if (null != n) return n;
              if (null == this.messages[t]) {
                this.supportedLocales.includes(t) && this._loadLocale(t);
                return;
              }
              if (e in this.messages[t]) {
                var i = this.messages[t][e],
                  o = new s.InternalIntlMessage(i, t);
                return this._parseCache.set(r, o), o;
              }
            }),
            (t.prototype.getBinds = function () {
              var e = this,
                t = this.onChange.bind(this);
              return Object.keys(this.messageKeys).reduce(function (r, n) {
                var i = e.get.bind(e, n);
                return (i.onChange = t), (r[n] = i), r;
              }, {});
            }),
            (t.prototype._loadLocale = function (e) {
              return n(this, void 0, void 0, function () {
                var t, r, n, o;
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (
                        (null === (o = this._localeLoadingPromises[e]) ||
                        void 0 === o
                          ? void 0
                          : o.current) != null
                      )
                        return [2];
                      if (null == this.localeImportMap[e])
                        throw Error(
                          "Requested to load locale ".concat(
                            e,
                            ", which should be supported, but no source for translation data was provided.",
                          ),
                        );
                      if (null != this.messages[e]) return [2];
                      return (
                        (t = this.localeImportMap[e]()),
                        (this._localeLoadingPromises[e] = {
                          initialized: !1,
                          current: t,
                        }),
                        (r = this.messages),
                        (n = e),
                        [4, t]
                      );
                    case 1:
                      return (
                        (r[n] = i.sent().default),
                        (this._localeLoadingPromises[e] = {
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
            (t.prototype.emitChange = function () {
              var e, t;
              try {
                for (
                  var r = o(this._subscribers.values()), n = r.next();
                  !n.done;
                  n = r.next()
                )
                  (0, n.value)();
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  n && !n.done && (t = r.return) && t.call(r);
                } finally {
                  if (e) throw e.error;
                }
              }
            }),
            (t.prototype.onChange = function (e) {
              var t = this;
              return (
                this._subscribers.add(e),
                function () {
                  return t._subscribers.delete(e);
                }
              );
            }),
            (t.prototype.isLocaleLoaded = function (e, t) {
              void 0 === t && (t = !1);
              var r = this._localeLoadingPromises[e];
              return (
                null != r && !1 != r.initialized && (!t || null == r.current)
              );
            }),
            (t.prototype.waitForLocaleLoaded = function (e) {
              return n(this, arguments, void 0, function (e, t) {
                var r;
                return (
                  void 0 === t && (t = !1),
                  i(this, function (n) {
                    switch (n.label) {
                      case 0:
                        if (null == (r = this._localeLoadingPromises[e]))
                          return [2, this._loadLocale(e)];
                        if (r.initialized && !t) return [2];
                        return [4, r.current];
                      case 1:
                        return n.sent(), [2];
                    }
                  })
                );
              });
            }),
            (t.prototype.waitForDefaultLocale = function () {
              return n(this, arguments, void 0, function (e) {
                return (
                  void 0 === e && (e = !1),
                  i(this, function (t) {
                    return [2, this.waitForLocaleLoaded(this.defaultLocale, e)];
                  })
                );
              });
            }),
            t
          );
        })();
      t.MessageLoader = u;
      var c = [];
    },
    953925: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__values) ||
          function (e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
              r = t && e[t],
              n = 0;
            if (r) return r.call(e);
            if (e && "number" == typeof e.length)
              return {
                next: function () {
                  return (
                    e && n >= e.length && (e = void 0),
                    { value: e && e[n++], done: !e }
                  );
                },
              };
            throw TypeError(
              t ? "Object is not iterable." : "Symbol.iterator is not defined.",
            );
          },
        i =
          (this && this.__read) ||
          function (e, t) {
            var r = "function" == typeof Symbol && e[Symbol.iterator];
            if (!r) return e;
            var n,
              i,
              o = r.call(e),
              a = [];
            try {
              for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
                a.push(n.value);
            } catch (e) {
              i = { error: e };
            } finally {
              try {
                n && !n.done && (r = o.return) && r.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
            return a;
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.InternalIntlMessage = void 0);
      var o = r(542593),
        a = (function () {
          function e(e, t) {
            (this.locale = t), (this.ast = e);
          }
          return (
            (e.prototype.reserialize = function () {
              var e = { value: "" };
              return s(this.ast, e), e.value;
            }),
            e
          );
        })();
      function s(e, t) {
        var r, a, u, c, l, h;
        try {
          for (var f = n(e), p = f.next(); !p.done; p = f.next()) {
            var d = p.value;
            switch (d.type) {
              case o.FormatJsNodeType.Literal:
                t.value += d.value;
                return;
              case o.FormatJsNodeType.Argument:
                if ("$_" === t.value) return;
                t.value += "{" + d.value + "}";
                return;
              case o.FormatJsNodeType.Date:
                (t.value += "{" + d.value + ", date"),
                  null != d.style && (t.value += ", " + d.style),
                  (t.value += "}");
                return;
              case o.FormatJsNodeType.Time:
                (t.value += "{" + d.value + ", time"),
                  null != d.style && (t.value += ", " + d.style),
                  (t.value += "}");
                return;
              case o.FormatJsNodeType.Number:
                (t.value += "{" + d.value + ", number"),
                  null != d.style && (t.value += ", " + d.style),
                  (t.value += "}");
                return;
              case o.FormatJsNodeType.Plural:
                var m = "ordinal" == d.pluralType ? "selectordinal" : "plural";
                (t.value += "{" + d.value + ", " + m + ", "),
                  d.offset && (t.value += "offset:" + d.offset);
                try {
                  for (
                    var v = ((u = void 0), n(Object.entries(d.options))),
                      y = v.next();
                    !y.done;
                    y = v.next()
                  ) {
                    var g = i(y.value, 2),
                      b = g[0],
                      E = g[1];
                    (t.value += " " + b + " {"),
                      s(E.value, t),
                      (t.value += "}");
                  }
                } catch (e) {
                  u = { error: e };
                } finally {
                  try {
                    y && !y.done && (c = v.return) && c.call(v);
                  } finally {
                    if (u) throw u.error;
                  }
                }
                return;
              case o.FormatJsNodeType.Pound:
                t.value += "#";
                return;
              case o.FormatJsNodeType.Select:
                t.value += "{" + d.value + ", select, ";
                try {
                  for (
                    var T = ((l = void 0), n(Object.entries(d.options))),
                      _ = T.next();
                    !_.done;
                    _ = T.next()
                  ) {
                    var A = i(_.value, 2),
                      b = A[0],
                      E = A[1];
                    (t.value += " " + b + " {"),
                      s(E.value, t),
                      (t.value += "}");
                  }
                } catch (e) {
                  l = { error: e };
                } finally {
                  try {
                    _ && !_.done && (h = T.return) && h.call(T);
                  } finally {
                    if (l) throw l.error;
                  }
                }
                return;
              case o.FormatJsNodeType.Tag:
                (function (e, t) {
                  switch (e.value) {
                    case "$b":
                      (t.value += "**"), s(e.children, t), (t.value += "**");
                      return;
                    case "$i":
                      (t.value += "*"), s(e.children, t), (t.value += "*");
                      return;
                    case "$code":
                      (t.value += "`"), s(e.children, t), (t.value += "`");
                      return;
                    case "$p":
                      s(e.children, t), (t.value += "\n\n");
                      return;
                    case "$link":
                      var r = i(e.children),
                        n = r[0],
                        o = r.slice(1);
                      (t.value += "["),
                        s(o, t),
                        (t.value += "]("),
                        null != n && s([n], t),
                        (t.value += ")");
                      return;
                    default:
                      (t.value += "$["),
                        s(e.children, t),
                        (t.value += "](" + e.value + ")");
                      return;
                  }
                })(d, t);
                return;
            }
          }
        } catch (e) {
          r = { error: e };
        } finally {
          try {
            p && !p.done && (a = f.return) && a.call(f);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      t.InternalIntlMessage = a;
    },
    28866: function (e, t, r) {
      "use strict";
      function n(e, t, r) {
        if ((void 0 === r && (r = Error), !e)) throw new r(t);
      }
      r.d(t, {
        kG: function () {
          return n;
        },
      });
    },
    857840: function (e, t, r) {
      "use strict";
      function n(e, t) {
        var r = t && t.cache ? t.cache : l,
          n = t && t.serializer ? t.serializer : u;
        return (t && t.strategy ? t.strategy : s)(e, {
          cache: r,
          serializer: n,
        });
      }
      r.d(t, {
        A: function () {
          return h;
        },
        H: function () {
          return n;
        },
      });
      function i(e, t, r, n) {
        var i,
          o =
            null == (i = n) || "number" == typeof i || "boolean" == typeof i
              ? n
              : r(n),
          a = t.get(o);
        return void 0 === a && ((a = e.call(this, n)), t.set(o, a)), a;
      }
      function o(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          i = r(n),
          o = t.get(i);
        return void 0 === o && ((o = e.apply(this, n)), t.set(i, o)), o;
      }
      function a(e, t, r, n, i) {
        return r.bind(t, e, n, i);
      }
      function s(e, t) {
        var r,
          n,
          a,
          s,
          u,
          c = 1 === e.length ? i : o;
        return (
          (r = e),
          (n = this),
          (a = c),
          (s = t.cache.create()),
          (u = t.serializer),
          a.bind(n, r, s, u)
        );
      }
      var u = function () {
        return JSON.stringify(arguments);
      };
      function c() {
        this.cache = Object.create(null);
      }
      (c.prototype.get = function (e) {
        return this.cache[e];
      }),
        (c.prototype.set = function (e, t) {
          this.cache[e] = t;
        });
      var l = {
          create: function () {
            return new c();
          },
        },
        h = {
          variadic: function (e, t) {
            var r, n, i, a, s;
            return (
              (r = e),
              (n = this),
              (i = o),
              (a = t.cache.create()),
              (s = t.serializer),
              i.bind(n, r, a, s)
            );
          },
          monadic: function (e, t) {
            var r, n, o, a, s;
            return (
              (r = e),
              (n = this),
              (o = i),
              (a = t.cache.create()),
              (s = t.serializer),
              o.bind(n, r, a, s)
            );
          },
        };
    },
    944990: function (e, t, r) {
      "use strict";
      r.d(t, {
        T: function () {
          return i;
        },
      });
      var n = r(779597);
      function i(e, t) {
        for (var r = "", i = 0; i < e.length; i++) {
          var o = e.charAt(i);
          if ("j" === o) {
            for (var a = 0; i + 1 < e.length && e.charAt(i + 1) === o; )
              a++, i++;
            var s = 1 + (1 & a),
              u = a < 2 ? 1 : 3 + (a >> 1),
              c = (function (e) {
                var t,
                  r = e.hourCycle;
                if (
                  (void 0 === r &&
                    e.hourCycles &&
                    e.hourCycles.length &&
                    (r = e.hourCycles[0]),
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
                var i = e.language;
                return (
                  "root" !== i && (t = e.maximize().region),
                  (n._[t || ""] ||
                    n._[i || ""] ||
                    n._["".concat(i, "-001")] ||
                    n._["001"])[0]
                );
              })(t);
            for (("H" == c || "k" == c) && (u = 0); u-- > 0; ) r += "a";
            for (; s-- > 0; ) r = c + r;
          } else "J" === o ? (r += "H") : (r += o);
        }
        return r;
      }
    },
    827671: function (e, t, r) {
      "use strict";
      var n, i;
      r.d(t, {
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
    859159: function (e, t, r) {
      "use strict";
      r.d(t, {
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
          return s;
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
      function s(e, t) {
        void 0 === t && (t = {}),
          (t = (0, n.pi)(
            { shouldParseSkeletons: !0, requiresOtherClause: !0 },
            t,
          ));
        var r = new o._(e, t).parse();
        if (r.err) {
          var s = SyntaxError(i.o[r.err.kind]);
          throw (
            ((s.location = r.err.location),
            (s.originalMessage = r.err.message),
            s)
          );
        }
        return (
          !(null == t ? void 0 : t.captureLocation) &&
            !(function e(t) {
              t.forEach(function (t) {
                if ((delete t.location, (0, a.Wi)(t) || (0, a.Jo)(t)))
                  for (var r in t.options)
                    delete t.options[r].location, e(t.options[r].value);
                else
                  (0, a.uf)(t) && (0, a.Wh)(t.style)
                    ? delete t.style.location
                    : ((0, a.rp)(t) || (0, a.pe)(t)) && (0, a.Ii)(t.style)
                      ? delete t.style.location
                      : (0, a.HI)(t) && e(t.children);
              });
            })(r.val),
          r.val
        );
      }
    },
    596771: function (e, t, r) {
      "use strict";
      r.d(t, {
        _: function () {
          return P;
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
      function p(e, t) {
        return { start: e, end: t };
      }
      var d = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        m = !!String.fromCodePoint,
        v = !!Object.fromEntries,
        y = !!String.prototype.codePointAt,
        g = !!String.prototype.trimStart,
        b = !!String.prototype.trimEnd,
        E = Number.isSafeInteger
          ? Number.isSafeInteger
          : function (e) {
              return (
                "number" == typeof e &&
                isFinite(e) &&
                Math.floor(e) === e &&
                9007199254740991 >= Math.abs(e)
              );
            },
        T = !0;
      try {
        var _ = H("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        T =
          (null === (n = _.exec("a")) || void 0 === n ? void 0 : n[0]) === "a";
      } catch (e) {
        T = !1;
      }
      var A = d
          ? function (e, t, r) {
              return e.startsWith(t, r);
            }
          : function (e, t, r) {
              return e.slice(r, r + t.length) === t;
            },
        I = m
          ? String.fromCodePoint
          : function () {
              for (var e, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              for (var n = "", i = t.length, o = 0; i > o; ) {
                if ((e = t[o++]) > 1114111)
                  throw RangeError(e + " is not a valid code point");
                n +=
                  e < 65536
                    ? String.fromCharCode(e)
                    : String.fromCharCode(
                        ((e -= 65536) >> 10) + 55296,
                        (e % 1024) + 56320,
                      );
              }
              return n;
            },
        S = v
          ? Object.fromEntries
          : function (e) {
              for (var t = {}, r = 0; r < e.length; r++) {
                var n = e[r],
                  i = n[0],
                  o = n[1];
                t[i] = o;
              }
              return t;
            },
        L = y
          ? function (e, t) {
              return e.codePointAt(t);
            }
          : function (e, t) {
              var r,
                n = e.length;
              if (!(t < 0) && !(t >= n)) {
                var i = e.charCodeAt(t);
                return i < 55296 ||
                  i > 56319 ||
                  t + 1 === n ||
                  (r = e.charCodeAt(t + 1)) < 56320 ||
                  r > 57343
                  ? i
                  : ((i - 55296) << 10) + (r - 56320) + 65536;
              }
            },
        w = g
          ? function (e) {
              return e.trimStart();
            }
          : function (e) {
              return e.replace(h, "");
            },
        N = b
          ? function (e) {
              return e.trimEnd();
            }
          : function (e) {
              return e.replace(f, "");
            };
      function H(e, t) {
        return new RegExp(e, t);
      }
      if (T) {
        var B = H("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        i = function (e, t) {
          var r;
          return (
            (B.lastIndex = t),
            null !== (r = B.exec(e)[1]) && void 0 !== r ? r : ""
          );
        };
      } else
        i = function (e, t) {
          for (var r = []; ; ) {
            var n = L(e, t);
            if (
              void 0 === n ||
              R(n) ||
              (function (e) {
                return (
                  (e >= 33 && e <= 35) ||
                  36 === e ||
                  (e >= 37 && e <= 39) ||
                  40 === e ||
                  41 === e ||
                  42 === e ||
                  43 === e ||
                  44 === e ||
                  45 === e ||
                  (e >= 46 && e <= 47) ||
                  (e >= 58 && e <= 59) ||
                  (e >= 60 && e <= 62) ||
                  (e >= 63 && e <= 64) ||
                  91 === e ||
                  92 === e ||
                  93 === e ||
                  94 === e ||
                  96 === e ||
                  123 === e ||
                  124 === e ||
                  125 === e ||
                  126 === e ||
                  161 === e ||
                  (e >= 162 && e <= 165) ||
                  166 === e ||
                  167 === e ||
                  169 === e ||
                  171 === e ||
                  172 === e ||
                  174 === e ||
                  176 === e ||
                  177 === e ||
                  182 === e ||
                  187 === e ||
                  191 === e ||
                  215 === e ||
                  247 === e ||
                  (e >= 8208 && e <= 8213) ||
                  (e >= 8214 && e <= 8215) ||
                  8216 === e ||
                  8217 === e ||
                  8218 === e ||
                  (e >= 8219 && e <= 8220) ||
                  8221 === e ||
                  8222 === e ||
                  8223 === e ||
                  (e >= 8224 && e <= 8231) ||
                  (e >= 8240 && e <= 8248) ||
                  8249 === e ||
                  8250 === e ||
                  (e >= 8251 && e <= 8254) ||
                  (e >= 8257 && e <= 8259) ||
                  8260 === e ||
                  8261 === e ||
                  8262 === e ||
                  (e >= 8263 && e <= 8273) ||
                  8274 === e ||
                  8275 === e ||
                  (e >= 8277 && e <= 8286) ||
                  (e >= 8592 && e <= 8596) ||
                  (e >= 8597 && e <= 8601) ||
                  (e >= 8602 && e <= 8603) ||
                  (e >= 8604 && e <= 8607) ||
                  8608 === e ||
                  (e >= 8609 && e <= 8610) ||
                  8611 === e ||
                  (e >= 8612 && e <= 8613) ||
                  8614 === e ||
                  (e >= 8615 && e <= 8621) ||
                  8622 === e ||
                  (e >= 8623 && e <= 8653) ||
                  (e >= 8654 && e <= 8655) ||
                  (e >= 8656 && e <= 8657) ||
                  8658 === e ||
                  8659 === e ||
                  8660 === e ||
                  (e >= 8661 && e <= 8691) ||
                  (e >= 8692 && e <= 8959) ||
                  (e >= 8960 && e <= 8967) ||
                  8968 === e ||
                  8969 === e ||
                  8970 === e ||
                  8971 === e ||
                  (e >= 8972 && e <= 8991) ||
                  (e >= 8992 && e <= 8993) ||
                  (e >= 8994 && e <= 9e3) ||
                  9001 === e ||
                  9002 === e ||
                  (e >= 9003 && e <= 9083) ||
                  9084 === e ||
                  (e >= 9085 && e <= 9114) ||
                  (e >= 9115 && e <= 9139) ||
                  (e >= 9140 && e <= 9179) ||
                  (e >= 9180 && e <= 9185) ||
                  (e >= 9186 && e <= 9254) ||
                  (e >= 9255 && e <= 9279) ||
                  (e >= 9280 && e <= 9290) ||
                  (e >= 9291 && e <= 9311) ||
                  (e >= 9472 && e <= 9654) ||
                  9655 === e ||
                  (e >= 9656 && e <= 9664) ||
                  9665 === e ||
                  (e >= 9666 && e <= 9719) ||
                  (e >= 9720 && e <= 9727) ||
                  (e >= 9728 && e <= 9838) ||
                  9839 === e ||
                  (e >= 9840 && e <= 10087) ||
                  10088 === e ||
                  10089 === e ||
                  10090 === e ||
                  10091 === e ||
                  10092 === e ||
                  10093 === e ||
                  10094 === e ||
                  10095 === e ||
                  10096 === e ||
                  10097 === e ||
                  10098 === e ||
                  10099 === e ||
                  10100 === e ||
                  10101 === e ||
                  (e >= 10132 && e <= 10175) ||
                  (e >= 10176 && e <= 10180) ||
                  10181 === e ||
                  10182 === e ||
                  (e >= 10183 && e <= 10213) ||
                  10214 === e ||
                  10215 === e ||
                  10216 === e ||
                  10217 === e ||
                  10218 === e ||
                  10219 === e ||
                  10220 === e ||
                  10221 === e ||
                  10222 === e ||
                  10223 === e ||
                  (e >= 10224 && e <= 10239) ||
                  (e >= 10240 && e <= 10495) ||
                  (e >= 10496 && e <= 10626) ||
                  10627 === e ||
                  10628 === e ||
                  10629 === e ||
                  10630 === e ||
                  10631 === e ||
                  10632 === e ||
                  10633 === e ||
                  10634 === e ||
                  10635 === e ||
                  10636 === e ||
                  10637 === e ||
                  10638 === e ||
                  10639 === e ||
                  10640 === e ||
                  10641 === e ||
                  10642 === e ||
                  10643 === e ||
                  10644 === e ||
                  10645 === e ||
                  10646 === e ||
                  10647 === e ||
                  10648 === e ||
                  (e >= 10649 && e <= 10711) ||
                  10712 === e ||
                  10713 === e ||
                  10714 === e ||
                  10715 === e ||
                  (e >= 10716 && e <= 10747) ||
                  10748 === e ||
                  10749 === e ||
                  (e >= 10750 && e <= 11007) ||
                  (e >= 11008 && e <= 11055) ||
                  (e >= 11056 && e <= 11076) ||
                  (e >= 11077 && e <= 11078) ||
                  (e >= 11079 && e <= 11084) ||
                  (e >= 11085 && e <= 11123) ||
                  (e >= 11124 && e <= 11125) ||
                  (e >= 11126 && e <= 11157) ||
                  11158 === e ||
                  (e >= 11159 && e <= 11263) ||
                  (e >= 11776 && e <= 11777) ||
                  11778 === e ||
                  11779 === e ||
                  11780 === e ||
                  11781 === e ||
                  (e >= 11782 && e <= 11784) ||
                  11785 === e ||
                  11786 === e ||
                  11787 === e ||
                  11788 === e ||
                  11789 === e ||
                  (e >= 11790 && e <= 11798) ||
                  11799 === e ||
                  (e >= 11800 && e <= 11801) ||
                  11802 === e ||
                  11803 === e ||
                  11804 === e ||
                  11805 === e ||
                  (e >= 11806 && e <= 11807) ||
                  11808 === e ||
                  11809 === e ||
                  11810 === e ||
                  11811 === e ||
                  11812 === e ||
                  11813 === e ||
                  11814 === e ||
                  11815 === e ||
                  11816 === e ||
                  11817 === e ||
                  (e >= 11818 && e <= 11822) ||
                  11823 === e ||
                  (e >= 11824 && e <= 11833) ||
                  (e >= 11834 && e <= 11835) ||
                  (e >= 11836 && e <= 11839) ||
                  11840 === e ||
                  11841 === e ||
                  11842 === e ||
                  (e >= 11843 && e <= 11855) ||
                  (e >= 11856 && e <= 11857) ||
                  11858 === e ||
                  (e >= 11859 && e <= 11903) ||
                  (e >= 12289 && e <= 12291) ||
                  12296 === e ||
                  12297 === e ||
                  12298 === e ||
                  12299 === e ||
                  12300 === e ||
                  12301 === e ||
                  12302 === e ||
                  12303 === e ||
                  12304 === e ||
                  12305 === e ||
                  (e >= 12306 && e <= 12307) ||
                  12308 === e ||
                  12309 === e ||
                  12310 === e ||
                  12311 === e ||
                  12312 === e ||
                  12313 === e ||
                  12314 === e ||
                  12315 === e ||
                  12316 === e ||
                  12317 === e ||
                  (e >= 12318 && e <= 12319) ||
                  12320 === e ||
                  12336 === e ||
                  64830 === e ||
                  64831 === e ||
                  (e >= 65093 && e <= 65094)
                );
              })(n)
            )
              break;
            r.push(n), (t += n >= 65536 ? 2 : 1);
          }
          return I.apply(void 0, r);
        };
      var P = (function () {
        function e(e, t) {
          void 0 === t && (t = {}),
            (this.message = e),
            (this.position = { offset: 0, line: 1, column: 1 }),
            (this.ignoreTag = !!t.ignoreTag),
            (this.locale = t.locale),
            (this.requiresOtherClause = !!t.requiresOtherClause),
            (this.shouldParseSkeletons = !!t.shouldParseSkeletons);
        }
        return (
          (e.prototype.parse = function () {
            if (0 !== this.offset())
              throw Error("parser can only be used once");
            return this.parseMessage(0, "", !1);
          }),
          (e.prototype.parseMessage = function (e, t, r) {
            for (var n = []; !this.isEOF(); ) {
              var i = this.char();
              if (123 === i) {
                var o = this.parseArgument(e, r);
                if (o.err) return o;
                n.push(o.val);
              } else if (125 === i && e > 0) break;
              else if (35 === i && ("plural" === t || "selectordinal" === t)) {
                var u = this.clonePosition();
                this.bump(),
                  n.push({
                    type: s.wD.pound,
                    location: p(u, this.clonePosition()),
                  });
              } else if (60 !== i || this.ignoreTag || 47 !== this.peek()) {
                if (60 === i && !this.ignoreTag && M(this.peek() || 0)) {
                  var o = this.parseTag(e, t);
                  if (o.err) return o;
                  n.push(o.val);
                } else {
                  var o = this.parseLiteral(e, t);
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
          (e.prototype.parseTag = function (e, t) {
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
            var i = this.parseMessage(e + 1, t, !0);
            if (i.err) return i;
            var o = i.val,
              u = this.clonePosition();
            if (!this.bumpIf("</"))
              return this.error(a.o.UNCLOSED_TAG, p(r, this.clonePosition()));
            if (this.isEOF() || !M(this.char()))
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
          (e.prototype.parseTagName = function () {
            var e = this.offset();
            for (
              this.bump();
              !this.isEOF() &&
              (function (e) {
                return (
                  45 === e ||
                  46 === e ||
                  (e >= 48 && e <= 57) ||
                  95 === e ||
                  (e >= 97 && e <= 122) ||
                  (e >= 65 && e <= 90) ||
                  183 == e ||
                  (e >= 192 && e <= 214) ||
                  (e >= 216 && e <= 246) ||
                  (e >= 248 && e <= 893) ||
                  (e >= 895 && e <= 8191) ||
                  (e >= 8204 && e <= 8205) ||
                  (e >= 8255 && e <= 8256) ||
                  (e >= 8304 && e <= 8591) ||
                  (e >= 11264 && e <= 12271) ||
                  (e >= 12289 && e <= 55295) ||
                  (e >= 63744 && e <= 64975) ||
                  (e >= 65008 && e <= 65533) ||
                  (e >= 65536 && e <= 983039)
                );
              })(this.char());

            )
              this.bump();
            return this.message.slice(e, this.offset());
          }),
          (e.prototype.parseLiteral = function (e, t) {
            for (var r = this.clonePosition(), n = ""; ; ) {
              var i = this.tryParseQuote(t);
              if (i) {
                n += i;
                continue;
              }
              var o = this.tryParseUnquoted(e, t);
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
          (e.prototype.tryParseLeftAngleBracket = function () {
            return !this.isEOF() &&
              60 === this.char() &&
              (this.ignoreTag ||
                !(function (e) {
                  return M(e) || 47 === e;
                })(this.peek() || 0))
              ? (this.bump(), "<")
              : null;
          }),
          (e.prototype.tryParseQuote = function (e) {
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
                if ("plural" === e || "selectordinal" === e) break;
                return null;
              default:
                return null;
            }
            this.bump();
            var t = [this.char()];
            for (this.bump(); !this.isEOF(); ) {
              var r = this.char();
              if (39 === r) {
                if (39 === this.peek()) t.push(39), this.bump();
                else {
                  this.bump();
                  break;
                }
              } else t.push(r);
              this.bump();
            }
            return I.apply(void 0, t);
          }),
          (e.prototype.tryParseUnquoted = function (e, t) {
            if (this.isEOF()) return null;
            var r = this.char();
            return 60 === r ||
              123 === r ||
              (35 === r && ("plural" === t || "selectordinal" === t)) ||
              (125 === r && e > 0)
              ? null
              : (this.bump(), I(r));
          }),
          (e.prototype.parseArgument = function (e, t) {
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
                return this.parseArgumentOptions(e, t, n, r);
              default:
                return this.error(
                  a.o.MALFORMED_ARGUMENT,
                  p(r, this.clonePosition()),
                );
            }
          }),
          (e.prototype.parseIdentifierIfPossible = function () {
            var e = this.clonePosition(),
              t = this.offset(),
              r = i(this.message, t),
              n = t + r.length;
            return (
              this.bumpTo(n), { value: r, location: p(e, this.clonePosition()) }
            );
          }),
          (e.prototype.parseArgumentOptions = function (e, t, r, n) {
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
                var d = null;
                if (this.bumpIf(",")) {
                  this.bumpSpace();
                  var m = this.clonePosition(),
                    v = this.parseSimpleArgStyleIfPossible();
                  if (v.err) return v;
                  var y = N(v.val);
                  if (0 === y.length)
                    return this.error(
                      a.o.EXPECT_ARGUMENT_STYLE,
                      p(this.clonePosition(), this.clonePosition()),
                    );
                  d = { style: y, styleLocation: p(m, this.clonePosition()) };
                }
                var g = this.tryParseArgumentClose(n);
                if (g.err) return g;
                var b = p(n, this.clonePosition());
                if (d && A(null == d ? void 0 : d.style, "::", 0)) {
                  var E = w(d.style.slice(2));
                  if ("number" === h) {
                    var v = this.parseNumberSkeletonFromString(
                      E,
                      d.styleLocation,
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
                  var y = {
                    type: s.aV.dateTime,
                    pattern: T,
                    location: d.styleLocation,
                    parsedOptions: this.shouldParseSkeletons
                      ? (0, c.parseDateTimeSkeleton)(T)
                      : {},
                  };
                  return {
                    val: {
                      type: "date" === h ? s.wD.date : s.wD.time,
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
                        ? s.wD.number
                        : "date" === h
                          ? s.wD.date
                          : s.wD.time,
                    value: r,
                    location: b,
                    style:
                      null !== (i = null == d ? void 0 : d.style) &&
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
                var H = this.tryParsePluralOrSelectOptions(e, h, t, I);
                if (H.err) return H;
                var g = this.tryParseArgumentClose(n);
                if (g.err) return g;
                var B = p(n, this.clonePosition());
                if ("select" === h)
                  return {
                    val: {
                      type: s.wD.select,
                      value: r,
                      options: S(H.val),
                      location: B,
                    },
                    err: null,
                  };
                return {
                  val: {
                    type: s.wD.plural,
                    value: r,
                    options: S(H.val),
                    offset: L,
                    pluralType: "plural" === h ? "cardinal" : "ordinal",
                    location: B,
                  },
                  err: null,
                };
              default:
                return this.error(a.o.INVALID_ARGUMENT_TYPE, p(u, f));
            }
          }),
          (e.prototype.tryParseArgumentClose = function (e) {
            return this.isEOF() || 125 !== this.char()
              ? this.error(
                  a.o.EXPECT_ARGUMENT_CLOSING_BRACE,
                  p(e, this.clonePosition()),
                )
              : (this.bump(), { val: !0, err: null });
          }),
          (e.prototype.parseSimpleArgStyleIfPossible = function () {
            for (var e = 0, t = this.clonePosition(); !this.isEOF(); )
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
                  (e += 1), this.bump();
                  break;
                case 125:
                  if (!(e > 0))
                    return {
                      val: this.message.slice(t.offset, this.offset()),
                      err: null,
                    };
                  e -= 1;
                  break;
                default:
                  this.bump();
              }
            return {
              val: this.message.slice(t.offset, this.offset()),
              err: null,
            };
          }),
          (e.prototype.parseNumberSkeletonFromString = function (e, t) {
            var r = [];
            try {
              r = (0, c.parseNumberSkeletonFromString)(e);
            } catch (e) {
              return this.error(a.o.INVALID_NUMBER_SKELETON, t);
            }
            return {
              val: {
                type: s.aV.number,
                tokens: r,
                location: t,
                parsedOptions: this.shouldParseSkeletons
                  ? (0, c.parseNumberSkeleton)(r)
                  : {},
              },
              err: null,
            };
          }),
          (e.prototype.tryParsePluralOrSelectOptions = function (e, t, r, n) {
            for (
              var i, o = !1, s = [], u = new Set(), c = n.value, l = n.location;
              ;

            ) {
              if (0 === c.length) {
                var h = this.clonePosition();
                if ("select" !== t && this.bumpIf("=")) {
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
                  "select" === t
                    ? a.o.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : a.o.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                  l,
                );
              "other" === c && (o = !0), this.bumpSpace();
              var d = this.clonePosition();
              if (!this.bumpIf("{"))
                return this.error(
                  "select" === t
                    ? a.o.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : a.o.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                  p(this.clonePosition(), this.clonePosition()),
                );
              var m = this.parseMessage(e + 1, t, r);
              if (m.err) return m;
              var v = this.tryParseArgumentClose(d);
              if (v.err) return v;
              s.push([
                c,
                { value: m.val, location: p(d, this.clonePosition()) },
              ]),
                u.add(c),
                this.bumpSpace(),
                (c = (i = this.parseIdentifierIfPossible()).value),
                (l = i.location);
            }
            return 0 === s.length
              ? this.error(
                  "select" === t
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
          (e.prototype.tryParseDecimalInteger = function (e, t) {
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
                : this.error(t, s)
              : this.error(e, s);
          }),
          (e.prototype.offset = function () {
            return this.position.offset;
          }),
          (e.prototype.isEOF = function () {
            return this.offset() === this.message.length;
          }),
          (e.prototype.clonePosition = function () {
            return {
              offset: this.position.offset,
              line: this.position.line,
              column: this.position.column,
            };
          }),
          (e.prototype.char = function () {
            var e = this.position.offset;
            if (e >= this.message.length) throw Error("out of bound");
            var t = L(this.message, e);
            if (void 0 === t)
              throw Error(
                "Offset ".concat(e, " is at invalid UTF-16 code unit boundary"),
              );
            return t;
          }),
          (e.prototype.error = function (e, t) {
            return {
              val: null,
              err: { kind: e, message: this.message, location: t },
            };
          }),
          (e.prototype.bump = function () {
            if (!this.isEOF()) {
              var e = this.char();
              10 === e
                ? ((this.position.line += 1),
                  (this.position.column = 1),
                  (this.position.offset += 1))
                : ((this.position.column += 1),
                  (this.position.offset += e < 65536 ? 1 : 2));
            }
          }),
          (e.prototype.bumpIf = function (e) {
            if (A(this.message, e, this.offset())) {
              for (var t = 0; t < e.length; t++) this.bump();
              return !0;
            }
            return !1;
          }),
          (e.prototype.bumpUntil = function (e) {
            var t = this.offset(),
              r = this.message.indexOf(e, t);
            return r >= 0
              ? (this.bumpTo(r), !0)
              : (this.bumpTo(this.message.length), !1);
          }),
          (e.prototype.bumpTo = function (e) {
            if (this.offset() > e)
              throw Error(
                "targetOffset "
                  .concat(
                    e,
                    " must be greater than or equal to the current offset ",
                  )
                  .concat(this.offset()),
              );
            for (e = Math.min(e, this.message.length); ; ) {
              var t = this.offset();
              if (t === e) break;
              if (t > e)
                throw Error(
                  "targetOffset ".concat(
                    e,
                    " is at invalid UTF-16 code unit boundary",
                  ),
                );
              if ((this.bump(), this.isEOF())) break;
            }
          }),
          (e.prototype.bumpSpace = function () {
            for (; !this.isEOF() && R(this.char()); ) this.bump();
          }),
          (e.prototype.peek = function () {
            if (this.isEOF()) return null;
            var e = this.char(),
              t = this.offset(),
              r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
            return null != r ? r : null;
          }),
          e
        );
      })();
      function M(e) {
        return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
      }
      function R(e) {
        return (
          (e >= 9 && e <= 13) ||
          32 === e ||
          133 === e ||
          (e >= 8206 && e <= 8207) ||
          8232 === e ||
          8233 === e
        );
      }
    },
    387004: function (e, t, r) {
      "use strict";
      r.d(t, {
        p: function () {
          return n;
        },
      });
      var n = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
    },
    779597: function (e, t, r) {
      "use strict";
      r.d(t, {
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
    928125: function (e, t, r) {
      "use strict";
      var n, i, o, a;
      function s(e) {
        return e.type === n.literal;
      }
      function u(e) {
        return e.type === n.argument;
      }
      function c(e) {
        return e.type === n.number;
      }
      function l(e) {
        return e.type === n.date;
      }
      function h(e) {
        return e.type === n.time;
      }
      function f(e) {
        return e.type === n.select;
      }
      function p(e) {
        return e.type === n.plural;
      }
      function d(e) {
        return e.type === n.pound;
      }
      function m(e) {
        return e.type === n.tag;
      }
      function v(e) {
        return !!(e && "object" == typeof e && e.type === i.number);
      }
      function y(e) {
        return !!(e && "object" == typeof e && e.type === i.dateTime);
      }
      r.d(t, {
        HI: function () {
          return m;
        },
        Ii: function () {
          return y;
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
          return d;
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
    99925: function (e, t, r) {
      "use strict";
      r.d(t, {
        T: function () {
          return i;
        },
      });
      var n =
        /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
      function i(e) {
        var t = {};
        return (
          e.replace(n, function (e) {
            var r = e.length;
            switch (e[0]) {
              case "G":
                t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
                break;
              case "y":
                t.year = 2 === r ? "2-digit" : "numeric";
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
                t.month = ["numeric", "2-digit", "short", "long", "narrow"][
                  r - 1
                ];
                break;
              case "w":
              case "W":
                throw RangeError("`w/W` (week) patterns are not supported");
              case "d":
                t.day = ["numeric", "2-digit"][r - 1];
                break;
              case "D":
              case "F":
              case "g":
                throw RangeError(
                  "`D/F/g` (day) patterns are not supported, use `d` instead",
                );
              case "E":
                t.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
                break;
              case "e":
                if (r < 4)
                  throw RangeError(
                    "`e..eee` (weekday) patterns are not supported",
                  );
                t.weekday = ["short", "long", "narrow", "short"][r - 4];
                break;
              case "c":
                if (r < 4)
                  throw RangeError(
                    "`c..ccc` (weekday) patterns are not supported",
                  );
                t.weekday = ["short", "long", "narrow", "short"][r - 4];
                break;
              case "a":
                t.hour12 = !0;
                break;
              case "b":
              case "B":
                throw RangeError(
                  "`b/B` (period) patterns are not supported, use `a` instead",
                );
              case "h":
                (t.hourCycle = "h12"), (t.hour = ["numeric", "2-digit"][r - 1]);
                break;
              case "H":
                (t.hourCycle = "h23"), (t.hour = ["numeric", "2-digit"][r - 1]);
                break;
              case "K":
                (t.hourCycle = "h11"), (t.hour = ["numeric", "2-digit"][r - 1]);
                break;
              case "k":
                (t.hourCycle = "h24"), (t.hour = ["numeric", "2-digit"][r - 1]);
                break;
              case "j":
              case "J":
              case "C":
                throw RangeError(
                  "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead",
                );
              case "m":
                t.minute = ["numeric", "2-digit"][r - 1];
                break;
              case "s":
                t.second = ["numeric", "2-digit"][r - 1];
                break;
              case "S":
              case "A":
                throw RangeError(
                  "`S/A` (second) patterns are not supported, use `s` instead",
                );
              case "z":
                t.timeZoneName = r < 4 ? "short" : "long";
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
          t
        );
      }
    },
    927882: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
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
    356228: function (e, t, r) {
      "use strict";
      r.d(t, {
        I: function () {
          return p;
        },
        O: function () {
          return o;
        },
      });
      var n = r(146150),
        i = r(647005);
      function o(e) {
        if (0 === e.length) throw Error("Number skeleton cannot be empty");
        for (
          var t = e.split(i.r).filter(function (e) {
              return e.length > 0;
            }),
            r = [],
            n = 0;
          n < t.length;
          n++
        ) {
          var o = t[n].split("/");
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
      function l(e) {
        var t = {};
        return (
          "r" === e[e.length - 1]
            ? (t.roundingPriority = "morePrecision")
            : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"),
          e.replace(s, function (e, r, n) {
            return (
              "string" != typeof n
                ? ((t.minimumSignificantDigits = r.length),
                  (t.maximumSignificantDigits = r.length))
                : "+" === n
                  ? (t.minimumSignificantDigits = r.length)
                  : "#" === r[0]
                    ? (t.maximumSignificantDigits = r.length)
                    : ((t.minimumSignificantDigits = r.length),
                      (t.maximumSignificantDigits =
                        r.length + ("string" == typeof n ? n.length : 0))),
              ""
            );
          }),
          t
        );
      }
      function h(e) {
        switch (e) {
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
      function f(e) {
        var t = h(e);
        return t ? t : {};
      }
      function p(e) {
        for (var t = {}, r = 0; r < e.length; r++) {
          var i = e[r];
          switch (i.stem) {
            case "percent":
            case "%":
              t.style = "percent";
              continue;
            case "%x100":
              (t.style = "percent"), (t.scale = 100);
              continue;
            case "currency":
              (t.style = "currency"), (t.currency = i.options[0]);
              continue;
            case "group-off":
            case ",_":
              t.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              t.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              (t.style = "unit"),
                (t.unit = i.options[0].replace(/^(.*?)-/, ""));
              continue;
            case "compact-short":
            case "K":
              (t.notation = "compact"), (t.compactDisplay = "short");
              continue;
            case "compact-long":
            case "KK":
              (t.notation = "compact"), (t.compactDisplay = "long");
              continue;
            case "scientific":
              t = (0, n.pi)(
                (0, n.pi)((0, n.pi)({}, t), { notation: "scientific" }),
                i.options.reduce(function (e, t) {
                  return (0, n.pi)((0, n.pi)({}, e), f(t));
                }, {}),
              );
              continue;
            case "engineering":
              t = (0, n.pi)(
                (0, n.pi)((0, n.pi)({}, t), { notation: "engineering" }),
                i.options.reduce(function (e, t) {
                  return (0, n.pi)((0, n.pi)({}, e), f(t));
                }, {}),
              );
              continue;
            case "notation-simple":
              t.notation = "standard";
              continue;
            case "unit-width-narrow":
              (t.currencyDisplay = "narrowSymbol"), (t.unitDisplay = "narrow");
              continue;
            case "unit-width-short":
              (t.currencyDisplay = "code"), (t.unitDisplay = "short");
              continue;
            case "unit-width-full-name":
              (t.currencyDisplay = "name"), (t.unitDisplay = "long");
              continue;
            case "unit-width-iso-code":
              t.currencyDisplay = "symbol";
              continue;
            case "scale":
              t.scale = parseFloat(i.options[0]);
              continue;
            case "rounding-mode-floor":
              t.roundingMode = "floor";
              continue;
            case "rounding-mode-ceiling":
              t.roundingMode = "ceil";
              continue;
            case "rounding-mode-down":
              t.roundingMode = "trunc";
              continue;
            case "rounding-mode-up":
              t.roundingMode = "expand";
              continue;
            case "rounding-mode-half-even":
              t.roundingMode = "halfEven";
              continue;
            case "rounding-mode-half-down":
              t.roundingMode = "halfTrunc";
              continue;
            case "rounding-mode-half-up":
              t.roundingMode = "halfExpand";
              continue;
            case "integer-width":
              if (i.options.length > 1)
                throw RangeError(
                  "integer-width stems only accept a single optional option",
                );
              i.options[0].replace(u, function (e, r, n, i, o, a) {
                if (r) t.minimumIntegerDigits = n.length;
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
            t.minimumIntegerDigits = i.stem.length;
            continue;
          }
          if (a.test(i.stem)) {
            if (i.options.length > 1)
              throw RangeError(
                "Fraction-precision stems only accept a single optional option",
              );
            i.stem.replace(a, function (e, r, n, i, o, a) {
              return (
                "*" === n
                  ? (t.minimumFractionDigits = r.length)
                  : i && "#" === i[0]
                    ? (t.maximumFractionDigits = i.length)
                    : o && a
                      ? ((t.minimumFractionDigits = o.length),
                        (t.maximumFractionDigits = o.length + a.length))
                      : ((t.minimumFractionDigits = r.length),
                        (t.maximumFractionDigits = r.length)),
                ""
              );
            });
            var o = i.options[0];
            "w" === o
              ? (t = (0, n.pi)((0, n.pi)({}, t), {
                  trailingZeroDisplay: "stripIfInteger",
                }))
              : o && (t = (0, n.pi)((0, n.pi)({}, t), l(o)));
            continue;
          }
          if (s.test(i.stem)) {
            t = (0, n.pi)((0, n.pi)({}, t), l(i.stem));
            continue;
          }
          var p = h(i.stem);
          p && (t = (0, n.pi)((0, n.pi)({}, t), p));
          var d = (function (e) {
            var t;
            if (
              ("E" === e[0] && "E" === e[1]
                ? ((t = { notation: "engineering" }), (e = e.slice(2)))
                : "E" === e[0] &&
                  ((t = { notation: "scientific" }), (e = e.slice(1))),
              t)
            ) {
              var r = e.slice(0, 2);
              if (
                ("+!" === r
                  ? ((t.signDisplay = "always"), (e = e.slice(2)))
                  : "+?" === r &&
                    ((t.signDisplay = "exceptZero"), (e = e.slice(2))),
                !c.test(e))
              )
                throw Error("Malformed concise eng/scientific notation");
              t.minimumIntegerDigits = e.length;
            }
            return t;
          })(i.stem);
          d && (t = (0, n.pi)((0, n.pi)({}, t), d));
        }
        return t;
      }
    },
    647005: function (e, t, r) {
      "use strict";
      r.d(t, {
        r: function () {
          return n;
        },
      });
      var n = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
    },
    88528: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
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
            return d;
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
      var n = r(278253),
        i = r(926832),
        o = r(880710),
        a = r(650488),
        s = r(368382),
        u = r(450132),
        c = r(557944),
        l = r(812929),
        h = r(562376),
        f = r(448080);
      function p(e) {
        return e;
      }
      function d(e) {
        return e;
      }
    },
    448080: function (e, t, r) {
      "use strict";
      r.d(t, {
        d: function () {
          return p;
        },
      });
      var n = r(146150),
        i = r(278253),
        o = r(926832),
        a = r(562376),
        s = r(812929),
        u = r(650488),
        c = r(557944),
        l = r(880710),
        h = r(450132),
        f = r(368382);
      function p(e, t) {
        var r = (0, i.ax)(t),
          p = (0, n.pi)((0, n.pi)({}, i.Z0), e),
          d = p.locale,
          m = p.defaultLocale,
          v = p.onError;
        return (
          d
            ? !Intl.NumberFormat.supportedLocalesOf(d).length && v
              ? v(
                  new o.gb(
                    'Missing locale data for locale: "'
                      .concat(
                        d,
                        '" in Intl.NumberFormat. Using default locale: "',
                      )
                      .concat(
                        m,
                        '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details',
                      ),
                  ),
                )
              : !Intl.DateTimeFormat.supportedLocalesOf(d).length &&
                v &&
                v(
                  new o.gb(
                    'Missing locale data for locale: "'
                      .concat(
                        d,
                        '" in Intl.DateTimeFormat. Using default locale: "',
                      )
                      .concat(
                        m,
                        '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details',
                      ),
                  ),
                )
            : (v &&
                v(
                  new o.OV(
                    '"locale" was not configured, using "'.concat(
                      m,
                      '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details',
                    ),
                  ),
                ),
              (p.locale = p.defaultLocale || "en")),
          !(function (e) {
            var t;
            if (
              e.onWarn &&
              e.defaultRichTextElements &&
              "string" == typeof ((t = e.messages || {}), t[Object.keys(t)[0]])
            )
              e.onWarn(
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
    650488: function (e, t, r) {
      "use strict";
      r.d(t, {
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
      function s(e, t, r, o) {
        var s = e.locale,
          u = e.formats,
          c = e.onError,
          l = e.timeZone;
        void 0 === o && (o = {});
        var h = o.format,
          f = (0, n.pi)(
            (0, n.pi)({}, l && { timeZone: l }),
            h && (0, i.TB)(u, t, h, c),
          ),
          p = (0, i.L6)(o, a, f);
        return (
          "time" === t &&
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
      function u(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var i = r[0],
          a = r[1],
          u = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return s(e, "date", t, void 0 === a ? {} : a).format(u);
        } catch (t) {
          e.onError(new o.Qe("Error formatting date.", e.locale, t));
        }
        return String(u);
      }
      function c(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var i = r[0],
          a = r[1],
          u = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return s(e, "time", t, void 0 === a ? {} : a).format(u);
        } catch (t) {
          e.onError(new o.Qe("Error formatting time.", e.locale, t));
        }
        return String(u);
      }
      function l(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var s = r[0],
          u = r[1],
          c = r[2],
          l = e.timeZone,
          h = e.locale,
          f = e.onError,
          p = (0, i.L6)(void 0 === c ? {} : c, a, l ? { timeZone: l } : {});
        try {
          return t(h, p).formatRange(s, u);
        } catch (t) {
          f(new o.Qe("Error formatting date time range.", e.locale, t));
        }
        return String(s);
      }
      function h(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var i = r[0],
          a = r[1],
          u = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return s(e, "date", t, void 0 === a ? {} : a).formatToParts(u);
        } catch (t) {
          e.onError(new o.Qe("Error formatting date.", e.locale, t));
        }
        return [];
      }
      function f(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var i = r[0],
          a = r[1],
          u = "string" == typeof i ? new Date(i || 0) : i;
        try {
          return s(e, "time", t, void 0 === a ? {} : a).formatToParts(u);
        } catch (t) {
          e.onError(new o.Qe("Error formatting time.", e.locale, t));
        }
        return [];
      }
    },
    368382: function (e, t, r) {
      "use strict";
      r.d(t, {
        I: function () {
          return s;
        },
      });
      var n = r(278253),
        i = r(78385),
        o = r(926832),
        a = ["style", "type", "fallback", "languageDisplay"];
      function s(e, t, r, s) {
        var u = e.locale,
          c = e.onError;
        !Intl.DisplayNames &&
          c(
            new i.u_(
              'Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',
              i.jK.MISSING_INTL_API,
            ),
          );
        var l = (0, n.L6)(s, a);
        try {
          return t(u, l).of(r);
        } catch (e) {
          c(new o.Qe("Error formatting display name.", u, e));
        }
      }
    },
    926832: function (e, t, r) {
      "use strict";
      r.d(t, {
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
      var a = (function (e) {
          function t(r, n, i) {
            var o = this,
              a = i ? (i instanceof Error ? i : Error(String(i))) : void 0;
            return (
              ((o =
                e.call(
                  this,
                  "[@formatjs/intl Error "
                    .concat(r, "] ")
                    .concat(n, "\n")
                    .concat(
                      a ? "\n".concat(a.message, "\n").concat(a.stack) : "",
                    ),
                ) || this).code = r),
              "function" == typeof Error.captureStackTrace &&
                Error.captureStackTrace(o, t),
              o
            );
          }
          return (0, o.ZT)(t, e), t;
        })(Error),
        s = (function (e) {
          function t(t, r) {
            return e.call(this, i.UNSUPPORTED_FORMATTER, t, r) || this;
          }
          return (0, o.ZT)(t, e), t;
        })(a),
        u = (function (e) {
          function t(t, r) {
            return e.call(this, i.INVALID_CONFIG, t, r) || this;
          }
          return (0, o.ZT)(t, e), t;
        })(a),
        c = (function (e) {
          function t(t, r) {
            return e.call(this, i.MISSING_DATA, t, r) || this;
          }
          return (0, o.ZT)(t, e), t;
        })(a),
        l = (function (e) {
          function t(t, r, n) {
            var o =
              e.call(
                this,
                i.FORMAT_ERROR,
                "".concat(t, "\nLocale: ").concat(r, "\n"),
                n,
              ) || this;
            return (o.locale = r), o;
          }
          return (0, o.ZT)(t, e), t;
        })(a),
        h = (function (e) {
          function t(t, r, n, i) {
            var o =
              e.call(
                this,
                ""
                  .concat(t, "\nMessageID: ")
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
          return (0, o.ZT)(t, e), t;
        })(l),
        f = (function (e) {
          function t(t, r) {
            var n =
              e.call(
                this,
                i.MISSING_TRANSLATION,
                'Missing message: "'
                  .concat(t.id, '" for locale "')
                  .concat(r, '", using ')
                  .concat(
                    t.defaultMessage
                      ? "default message (".concat(
                          "string" == typeof t.defaultMessage
                            ? t.defaultMessage
                            : t.defaultMessage
                                .map(function (e) {
                                  var t;
                                  return null !== (t = e.value) && void 0 !== t
                                    ? t
                                    : JSON.stringify(e);
                                })
                                .join(),
                          ")",
                        )
                      : "id",
                    " as fallback.",
                  ),
              ) || this;
            return (n.descriptor = t), n;
          }
          return (0, o.ZT)(t, e), t;
        })(a);
    },
    450132: function (e, t, r) {
      "use strict";
      r.d(t, {
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
        s = ["type", "style"],
        u = Date.now();
      function c(e, t, r, n) {
        void 0 === n && (n = {});
        var i = l(e, t, r, n).reduce(function (e, t) {
          var r = t.value;
          return (
            "string" != typeof r
              ? e.push(r)
              : "string" == typeof e[e.length - 1]
                ? (e[e.length - 1] += r)
                : e.push(r),
            e
          );
        }, []);
        return 1 === i.length ? i[0] : 0 === i.length ? "" : i;
      }
      function l(e, t, r, c) {
        var l = e.locale,
          h = e.onError;
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
            d = r.map(function (e, t) {
              if ("object" == typeof e) {
                var r,
                  n = ((r = t), "".concat(u, "_").concat(r, "_").concat(u));
                return (p[n] = e), n;
              }
              return String(e);
            });
          return t(l, f)
            .formatToParts(d)
            .map(function (e) {
              return "literal" === e.type
                ? e
                : (0, n.pi)((0, n.pi)({}, e), { value: p[e.value] || e.value });
            });
        } catch (e) {
          h(new a.Qe("Error formatting list.", l, e));
        }
        return r;
      }
    },
    880710: function (e, t, r) {
      "use strict";
      r.d(t, {
        w: function () {
          return h;
        },
      });
      var n = r(146150),
        i = r(28866),
        o = r(670458),
        a = r(926832),
        s = r(859159);
      function u(e, t) {
        return Object.keys(e).reduce(function (r, i) {
          return (r[i] = (0, n.pi)({ timeZone: t }, e[i])), r;
        }, {});
      }
      function c(e, t) {
        return Object.keys((0, n.pi)((0, n.pi)({}, e), t)).reduce(function (
          r,
          i,
        ) {
          return (r[i] = (0, n.pi)((0, n.pi)({}, e[i] || {}), t[i] || {})), r;
        }, {});
      }
      function l(e, t) {
        if (!t) return e;
        var r = o.C.formats;
        return (0, n.pi)((0, n.pi)((0, n.pi)({}, r), e), {
          date: c(u(r.date, t), u(e.date || {}, t)),
          time: c(u(r.time, t), u(e.time || {}, t)),
        });
      }
      var h = function (e, t, r, o, u) {
        var c = e.locale,
          h = e.formats,
          f = e.messages,
          p = e.defaultLocale,
          d = e.defaultFormats,
          m = e.fallbackOnEmptyString,
          v = e.onError,
          y = e.timeZone,
          g = e.defaultRichTextElements;
        void 0 === r && (r = { id: "" });
        var b = r.id,
          E = r.defaultMessage;
        (0, i.kG)(
          !!b,
          "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue",
        );
        var T = String(b),
          _ = f && Object.prototype.hasOwnProperty.call(f, T) && f[T];
        if (Array.isArray(_) && 1 === _.length && _[0].type === s.wD.literal)
          return _[0].value;
        if (!o && _ && "string" == typeof _ && !g)
          return _.replace(/'\{(.*?)\}'/gi, "{$1}");
        if (
          ((o = (0, n.pi)((0, n.pi)({}, g), o || {})),
          (h = l(h, y)),
          (d = l(d, y)),
          !_)
        ) {
          if (!1 === m && "" === _) return _;
          if (
            ((!E || (c && c.toLowerCase() !== p.toLowerCase())) &&
              v(new a.$6(r, c)),
            E)
          )
            try {
              var A = t.getMessageFormat(E, p, d, u);
              return A.format(o);
            } catch (e) {
              return (
                v(
                  new a.X9(
                    'Error formatting default message for: "'.concat(
                      T,
                      '", rendering default message verbatim',
                    ),
                    c,
                    r,
                    e,
                  ),
                ),
                "string" == typeof E ? E : T
              );
            }
          return T;
        }
        try {
          var A = t.getMessageFormat(
            _,
            c,
            h,
            (0, n.pi)({ formatters: t }, u || {}),
          );
          return A.format(o);
        } catch (e) {
          v(
            new a.X9(
              'Error formatting message: "'
                .concat(T, '", using ')
                .concat(E ? "default message" : "id", " as fallback."),
              c,
              r,
              e,
            ),
          );
        }
        if (E)
          try {
            var A = t.getMessageFormat(E, p, d, u);
            return A.format(o);
          } catch (e) {
            v(
              new a.X9(
                'Error formatting the default message for: "'.concat(
                  T,
                  '", rendering message verbatim',
                ),
                c,
                r,
                e,
              ),
            );
          }
        return "string" == typeof _ ? _ : "string" == typeof E ? E : T;
      };
    },
    562376: function (e, t, r) {
      "use strict";
      r.d(t, {
        T: function () {
          return u;
        },
        uf: function () {
          return s;
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
      function a(e, t, r) {
        var n = e.locale,
          a = e.formats,
          s = e.onError;
        void 0 === r && (r = {});
        var u = r.format,
          c = (u && (0, i.TB)(a, "number", u, s)) || {};
        return t(n, (0, i.L6)(r, o, c));
      }
      function s(e, t, r, i) {
        void 0 === i && (i = {});
        try {
          return a(e, t, i).format(r);
        } catch (t) {
          e.onError(new n.Qe("Error formatting number.", e.locale, t));
        }
        return String(r);
      }
      function u(e, t, r, i) {
        void 0 === i && (i = {});
        try {
          return a(e, t, i).formatToParts(r);
        } catch (t) {
          e.onError(new n.Qe("Error formatting number.", e.locale, t));
        }
        return [];
      }
    },
    557944: function (e, t, r) {
      "use strict";
      r.d(t, {
        R: function () {
          return s;
        },
      });
      var n = r(278253),
        i = r(926832),
        o = r(78385),
        a = ["type"];
      function s(e, t, r, s) {
        var u = e.locale,
          c = e.onError;
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
          return t(u, l).select(r);
        } catch (e) {
          c(new i.Qe("Error formatting plural.", u, e));
        }
        return "other";
      }
    },
    812929: function (e, t, r) {
      "use strict";
      r.d(t, {
        S: function () {
          return s;
        },
      });
      var n = r(278253),
        i = r(78385),
        o = r(926832),
        a = ["numeric", "style"];
      function s(e, t, r, s, u) {
        void 0 === u && (u = {}),
          !s && (s = "second"),
          !Intl.RelativeTimeFormat &&
            e.onError(
              new i.u_(
                'Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',
                i.jK.MISSING_INTL_API,
              ),
            );
        try {
          var c, l, h, f, p, d, m, v;
          return ((c = e),
          (l = t),
          (h = u),
          (f = c.locale),
          (p = c.formats),
          (d = c.onError),
          void 0 === h && (h = {}),
          (v = (!!(m = h.format) && (0, n.TB)(p, "relative", m, d)) || {}),
          l(f, (0, n.L6)(h, a, v))).format(r, s);
        } catch (t) {
          e.onError(new o.Qe("Error formatting relative time.", e.locale, t));
        }
        return String(r);
      }
    },
    278253: function (e, t, r) {
      "use strict";
      r.d(t, {
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
        a = r(926832);
      function s(e, t, r) {
        return (
          void 0 === r && (r = {}),
          t.reduce(function (t, n) {
            return n in e ? (t[n] = e[n]) : n in r && (t[n] = r[n]), t;
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
        onError: function (e) {},
        onWarn: function (e) {},
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
      function l(e) {
        return {
          create: function () {
            return {
              get: function (t) {
                return e[t];
              },
              set: function (t, r) {
                e[t] = r;
              },
            };
          },
        };
      }
      function h(e) {
        void 0 === e && (e = c());
        var t = Intl.RelativeTimeFormat,
          r = Intl.ListFormat,
          a = Intl.DisplayNames,
          s = (0, o.H)(
            function () {
              for (var e, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              return new ((e = Intl.DateTimeFormat).bind.apply(
                e,
                (0, n.ev)([void 0], t, !1),
              ))();
            },
            { cache: l(e.dateTime), strategy: o.A.variadic },
          ),
          u = (0, o.H)(
            function () {
              for (var e, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              return new ((e = Intl.NumberFormat).bind.apply(
                e,
                (0, n.ev)([void 0], t, !1),
              ))();
            },
            { cache: l(e.number), strategy: o.A.variadic },
          ),
          h = (0, o.H)(
            function () {
              for (var e, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              return new ((e = Intl.PluralRules).bind.apply(
                e,
                (0, n.ev)([void 0], t, !1),
              ))();
            },
            { cache: l(e.pluralRules), strategy: o.A.variadic },
          );
        return {
          getDateTimeFormat: s,
          getNumberFormat: u,
          getMessageFormat: (0, o.H)(
            function (e, t, r, o) {
              return new i.C(
                e,
                t,
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
            { cache: l(e.message), strategy: o.A.variadic },
          ),
          getRelativeTimeFormat: (0, o.H)(
            function () {
              for (var e = [], r = 0; r < arguments.length; r++)
                e[r] = arguments[r];
              return new (t.bind.apply(t, (0, n.ev)([void 0], e, !1)))();
            },
            { cache: l(e.relativeTime), strategy: o.A.variadic },
          ),
          getPluralRules: h,
          getListFormat: (0, o.H)(
            function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return new (r.bind.apply(r, (0, n.ev)([void 0], e, !1)))();
            },
            { cache: l(e.list), strategy: o.A.variadic },
          ),
          getDisplayNames: (0, o.H)(
            function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return new (a.bind.apply(a, (0, n.ev)([void 0], e, !1)))();
            },
            { cache: l(e.displayNames), strategy: o.A.variadic },
          ),
        };
      }
      function f(e, t, r, n) {
        var i,
          o = e && e[t];
        if ((o && (i = o[r]), i)) return i;
        n(new a.wI("No ".concat(t, " format named: ").concat(r)));
      }
    },
    639576: function (e, t, r) {
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
          toSpliced: function (e, t) {
            var r,
              n,
              i,
              p,
              d = u(this),
              m = a(d),
              v = s(e, m),
              y = arguments.length,
              g = 0;
            for (
              0 === y
                ? (r = n = 0)
                : 1 === y
                  ? ((r = 0), (n = m - v))
                  : ((r = y - 2), (n = f(h(c(t), 0), m - v))),
                p = l((i = o(m + r - n)));
              g < v;
              g++
            )
              p[g] = d[g];
            for (; g < v + r; g++) p[g] = arguments[g - v + 2];
            for (; g < i; g++) p[g] = d[g + n - r];
            return p;
          },
        },
      ),
        i("toSpliced");
    },
    817080: function (e) {
      var t =
        t ||
        (function (e) {
          "use strict";
          if (
            !(
              "undefined" != typeof navigator &&
              /MSIE [1-9]\./.test(navigator.userAgent)
            )
          ) {
            var t = e.document,
              r = function () {
                return e.URL || e.webkitURL || e;
              },
              n = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
              i = "download" in n,
              o = function (e) {
                var t = new MouseEvent("click");
                e.dispatchEvent(t);
              },
              a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
              s = e.webkitRequestFileSystem,
              u = e.requestFileSystem || s || e.mozRequestFileSystem,
              c = function (t) {
                (e.setImmediate || e.setTimeout)(function () {
                  throw t;
                }, 0);
              },
              l = "application/octet-stream",
              h = 0,
              f = function (e) {
                setTimeout(function () {
                  "string" == typeof e ? r().revokeObjectURL(e) : e.remove();
                }, 4e4);
              },
              p = function (e, t, r) {
                for (var n = (t = [].concat(t)).length; n--; ) {
                  var i = e["on" + t[n]];
                  if ("function" == typeof i)
                    try {
                      i.call(e, r || e);
                    } catch (e) {
                      c(e);
                    }
                }
              },
              d = function (e) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                  e.type,
                )
                  ? new Blob(["\xef\xbb\xbf", e], { type: e.type })
                  : e;
              },
              m = function (t, c, m) {
                !m && (t = d(t));
                var v,
                  y,
                  g = this,
                  b = t.type,
                  E = !1,
                  T = function () {
                    p(g, "writestart progress write writeend".split(" "));
                  },
                  _ = function () {
                    if (y && a && "undefined" != typeof FileReader) {
                      var n = new FileReader();
                      (n.onloadend = function () {
                        var e = n.result;
                        (y.location.href =
                          "data:attachment/file" + e.slice(e.search(/[,;]/))),
                          (g.readyState = g.DONE),
                          T();
                      }),
                        n.readAsDataURL(t),
                        (g.readyState = g.INIT);
                      return;
                    }
                    (E || !v) && (v = r().createObjectURL(t)),
                      y
                        ? (y.location.href = v)
                        : void 0 === e.open(v, "_blank") &&
                          a &&
                          (e.location.href = v),
                      (g.readyState = g.DONE),
                      T(),
                      f(v);
                  },
                  A = function (e) {
                    return function () {
                      if (g.readyState !== g.DONE)
                        return e.apply(this, arguments);
                    };
                  },
                  I = { create: !0, exclusive: !1 };
                if (((g.readyState = g.INIT), !c && (c = "download"), i)) {
                  (v = r().createObjectURL(t)),
                    setTimeout(function () {
                      (n.href = v),
                        (n.download = c),
                        o(n),
                        T(),
                        f(v),
                        (g.readyState = g.DONE);
                    });
                  return;
                }
                if (
                  (e.chrome &&
                    b &&
                    b !== l &&
                    ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, l)),
                    (E = !0)),
                  s && "download" !== c && (c += ".download"),
                  (b === l || s) && (y = e),
                  !u)
                ) {
                  _();
                  return;
                }
                (h += t.size),
                  u(
                    e.TEMPORARY,
                    h,
                    A(function (e) {
                      e.root.getDirectory(
                        "saved",
                        I,
                        A(function (e) {
                          var r = function () {
                            e.getFile(
                              c,
                              I,
                              A(function (e) {
                                e.createWriter(
                                  A(function (r) {
                                    (r.onwriteend = function (t) {
                                      (y.location.href = e.toURL()),
                                        (g.readyState = g.DONE),
                                        p(g, "writeend", t),
                                        f(e);
                                    }),
                                      (r.onerror = function () {
                                        var e = r.error;
                                        e.code !== e.ABORT_ERR && _();
                                      }),
                                      "writestart progress write abort"
                                        .split(" ")
                                        .forEach(function (e) {
                                          r["on" + e] = g["on" + e];
                                        }),
                                      r.write(t),
                                      (g.abort = function () {
                                        r.abort(), (g.readyState = g.DONE);
                                      }),
                                      (g.readyState = g.WRITING);
                                  }),
                                  _,
                                );
                              }),
                              _,
                            );
                          };
                          e.getFile(
                            c,
                            { create: !1 },
                            A(function (e) {
                              e.remove(), r();
                            }),
                            A(function (e) {
                              e.code === e.NOT_FOUND_ERR ? r() : _();
                            }),
                          );
                        }),
                        _,
                      );
                    }),
                    _,
                  );
              },
              v = m.prototype;
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
              ? function (e, t, r) {
                  return (
                    !r && (e = d(e)),
                    navigator.msSaveOrOpenBlob(e, t || "download")
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
                function (e, t, r) {
                  return new m(e, t, r);
                });
          }
        })(
          ("undefined" != typeof self && self) ||
            ("undefined" != typeof window && window) ||
            this.content,
        );
      e.exports
        ? (e.exports.saveAs = t)
        : "undefined" != typeof define &&
          null !== define &&
          null !== define.amd &&
          define([], function () {
            return t;
          });
    },
    766989: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
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
      t.default = n.C;
    },
    670458: function (e, t, r) {
      "use strict";
      r.d(t, {
        C: function () {
          return u;
        },
      });
      var n = r(146150),
        i = r(859159),
        o = r(857840),
        a = r(589983);
      function s(e) {
        return {
          create: function () {
            return {
              get: function (t) {
                return e[t];
              },
              set: function (t, r) {
                e[t] = r;
              },
            };
          },
        };
      }
      var u = (function () {
        function e(t, r, i, u) {
          var c,
            l,
            h,
            f = this;
          if (
            (void 0 === r && (r = e.defaultLocale),
            (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {},
            }),
            (this.format = function (e) {
              var t = f.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var r = t.reduce(function (e, t) {
                return (
                  e.length &&
                  t.type === a.du.literal &&
                  "string" == typeof e[e.length - 1]
                    ? (e[e.length - 1] += t.value)
                    : e.push(t.value),
                  e
                );
              }, []);
              return r.length <= 1 ? r[0] || "" : r;
            }),
            (this.formatToParts = function (e) {
              return (0, a.FK)(
                f.ast,
                f.locales,
                f.formatters,
                f.formats,
                e,
                void 0,
                f.message,
              );
            }),
            (this.resolvedOptions = function () {
              var e;
              return {
                locale:
                  (null === (e = f.resolvedLocale) || void 0 === e
                    ? void 0
                    : e.toString()) ||
                  Intl.NumberFormat.supportedLocalesOf(f.locales)[0],
              };
            }),
            (this.getAst = function () {
              return f.ast;
            }),
            (this.locales = r),
            (this.resolvedLocale = e.resolveLocale(r)),
            "string" == typeof t)
          ) {
            if (((this.message = t), !e.__parse))
              throw TypeError(
                "IntlMessageFormat.__parse must be set to process `message` of type `string`",
              );
            var p = u || {},
              d = (p.formatters, (0, n._T)(p, ["formatters"]));
            this.ast = e.__parse(
              t,
              (0, n.pi)((0, n.pi)({}, d), { locale: this.resolvedLocale }),
            );
          } else this.ast = t;
          if (!Array.isArray(this.ast))
            throw TypeError("A message must be provided as a String or AST.");
          (this.formats =
            ((c = e.formats),
            (l = i)
              ? Object.keys(c).reduce(
                  function (e, t) {
                    var r, i;
                    return (
                      (e[t] =
                        ((r = c[t]),
                        (i = l[t])
                          ? (0, n.pi)(
                              (0, n.pi)((0, n.pi)({}, r || {}), i || {}),
                              Object.keys(r).reduce(function (e, t) {
                                return (
                                  (e[t] = (0, n.pi)(
                                    (0, n.pi)({}, r[t]),
                                    i[t] || {},
                                  )),
                                  e
                                );
                              }, {}),
                            )
                          : r)),
                      e
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
                    for (var e, t = [], r = 0; r < arguments.length; r++)
                      t[r] = arguments[r];
                    return new ((e = Intl.NumberFormat).bind.apply(
                      e,
                      (0, n.ev)([void 0], t, !1),
                    ))();
                  },
                  { cache: s(h.number), strategy: o.A.variadic },
                ),
                getDateTimeFormat: (0, o.H)(
                  function () {
                    for (var e, t = [], r = 0; r < arguments.length; r++)
                      t[r] = arguments[r];
                    return new ((e = Intl.DateTimeFormat).bind.apply(
                      e,
                      (0, n.ev)([void 0], t, !1),
                    ))();
                  },
                  { cache: s(h.dateTime), strategy: o.A.variadic },
                ),
                getPluralRules: (0, o.H)(
                  function () {
                    for (var e, t = [], r = 0; r < arguments.length; r++)
                      t[r] = arguments[r];
                    return new ((e = Intl.PluralRules).bind.apply(
                      e,
                      (0, n.ev)([void 0], t, !1),
                    ))();
                  },
                  { cache: s(h.pluralRules), strategy: o.A.variadic },
                ),
              }));
        }
        return (
          Object.defineProperty(e, "defaultLocale", {
            get: function () {
              return (
                !e.memoizedDefaultLocale &&
                  (e.memoizedDefaultLocale =
                    new Intl.NumberFormat().resolvedOptions().locale),
                e.memoizedDefaultLocale
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.memoizedDefaultLocale = null),
          (e.resolveLocale = function (e) {
            if (void 0 !== Intl.Locale) {
              var t = Intl.NumberFormat.supportedLocalesOf(e);
              return t.length > 0
                ? new Intl.Locale(t[0])
                : new Intl.Locale("string" == typeof e ? e : e[0]);
            }
          }),
          (e.__parse = i.Qc),
          (e.formats = {
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
          e
        );
      })();
    },
    78385: function (e, t, r) {
      "use strict";
      r.d(t, {
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
      var a = (function (e) {
          function t(t, r, n) {
            var i = e.call(this, t) || this;
            return (i.code = r), (i.originalMessage = n), i;
          }
          return (
            (0, o.ZT)(t, e),
            (t.prototype.toString = function () {
              return "[formatjs Error: "
                .concat(this.code, "] ")
                .concat(this.message);
            }),
            t
          );
        })(Error),
        s = (function (e) {
          function t(t, r, n, o) {
            return (
              e.call(
                this,
                'Invalid values for "'
                  .concat(t, '": "')
                  .concat(r, '". Options are "')
                  .concat(Object.keys(n).join('", "'), '"'),
                i.INVALID_VALUE,
                o,
              ) || this
            );
          }
          return (0, o.ZT)(t, e), t;
        })(a),
        u = (function (e) {
          function t(t, r, n) {
            return (
              e.call(
                this,
                'Value for "'.concat(t, '" must be of type ').concat(r),
                i.INVALID_VALUE,
                n,
              ) || this
            );
          }
          return (0, o.ZT)(t, e), t;
        })(a),
        c = (function (e) {
          function t(t, r) {
            return (
              e.call(
                this,
                'The intl string context variable "'
                  .concat(t, '" was not provided to the string "')
                  .concat(r, '"'),
                i.MISSING_VALUE,
                r,
              ) || this
            );
          }
          return (0, o.ZT)(t, e), t;
        })(a);
    },
    589983: function (e, t, r) {
      "use strict";
      r.d(t, {
        FK: function () {
          return function e(t, r, n, u, c, l, h) {
            if (1 === t.length && (0, o.O4)(t[0]))
              return [{ type: i.literal, value: t[0].value }];
            for (var f, p = [], d = 0; d < t.length; d++) {
              var m = t[d];
              if ((0, o.O4)(m)) {
                p.push({ type: i.literal, value: m.value });
                continue;
              }
              if ((0, o.yx)(m)) {
                "number" == typeof l &&
                  p.push({
                    type: i.literal,
                    value: n.getNumberFormat(r).format(l),
                  });
                continue;
              }
              var v = m.value;
              if (!(c && v in c)) throw new a.HR(v, h);
              var y = c[v];
              if ((0, o.VG)(m)) {
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
              if ((0, o.rp)(m)) {
                var g =
                  "string" == typeof m.style
                    ? u.date[m.style]
                    : (0, o.Ii)(m.style)
                      ? m.style.parsedOptions
                      : void 0;
                p.push({
                  type: i.literal,
                  value: n.getDateTimeFormat(r, g).format(y),
                });
                continue;
              }
              if ((0, o.pe)(m)) {
                var g =
                  "string" == typeof m.style
                    ? u.time[m.style]
                    : (0, o.Ii)(m.style)
                      ? m.style.parsedOptions
                      : u.time.medium;
                p.push({
                  type: i.literal,
                  value: n.getDateTimeFormat(r, g).format(y),
                });
                continue;
              }
              if ((0, o.uf)(m)) {
                var g =
                  "string" == typeof m.style
                    ? u.number[m.style]
                    : (0, o.Wh)(m.style)
                      ? m.style.parsedOptions
                      : void 0;
                g && g.scale && (y *= g.scale || 1),
                  p.push({
                    type: i.literal,
                    value: n.getNumberFormat(r, g).format(y),
                  });
                continue;
              }
              if ((0, o.HI)(m)) {
                var b = m.children,
                  E = m.value,
                  T = c[E];
                if (!s(T)) throw new a.YR(E, "function", h);
                var _ = T(
                  e(b, r, n, u, c, l).map(function (e) {
                    return e.value;
                  }),
                );
                !Array.isArray(_) && (_ = [_]),
                  p.push.apply(
                    p,
                    _.map(function (e) {
                      return {
                        type: "string" == typeof e ? i.literal : i.object,
                        value: e,
                      };
                    }),
                  );
              }
              if ((0, o.Wi)(m)) {
                var A = m.options[y] || m.options.other;
                if (!A) throw new a.C8(m.value, y, Object.keys(m.options), h);
                p.push.apply(p, e(A.value, r, n, u, c));
                continue;
              }
              if ((0, o.Jo)(m)) {
                var A = m.options["=".concat(y)];
                if (!A) {
                  if (!Intl.PluralRules)
                    throw new a.u_(
                      'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                      a.jK.MISSING_INTL_API,
                      h,
                    );
                  var I = n
                    .getPluralRules(r, { type: m.pluralType })
                    .select(y - (m.offset || 0));
                  A = m.options[I] || m.options.other;
                }
                if (!A) throw new a.C8(m.value, y, Object.keys(m.options), h);
                p.push.apply(p, e(A.value, r, n, u, c, y - (m.offset || 0)));
                continue;
              }
            }
            return (f = p).length < 2
              ? f
              : f.reduce(function (e, t) {
                  var r = e[e.length - 1];
                  return (
                    r && r.type === i.literal && t.type === i.literal
                      ? (r.value += t.value)
                      : e.push(t),
                    e
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
      function s(e) {
        return "function" == typeof e;
      }
    },
    785902: function (e) {
      e.exports = function (e, t, r, n) {
        for (var i = -1, o = null == e ? 0 : e.length; ++i < o; ) {
          var a = e[i];
          t(n, a, r(a), e);
        }
        return n;
      };
    },
    800128: function (e, t, r) {
      var n = r(543744);
      e.exports = function (e, t, r, i) {
        return (
          n(e, function (e, n, o) {
            t(i, e, r(e), o);
          }),
          i
        );
      };
    },
    757009: function (e, t, r) {
      var n = r(785902),
        i = r(800128),
        o = r(256098),
        a = r(290677);
      e.exports = function (e, t) {
        return function (r, s) {
          var u = a(r) ? n : i,
            c = t ? t() : {};
          return u(r, e, o(s, 2), c);
        };
      };
    },
    979079: function (e, t, r) {
      var n = r(685347),
        i = r(757009)(function (e, t, r) {
          n(e, r, t);
        });
      e.exports = i;
    },
    943418: function (e, t, r) {
      var n = r(383083);
      (t.encode = n.encode), (t.decode = n.decode);
    },
    383083: function (e, t, r) {
      var n = r(413135).Buffer,
        i = [
          255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255,
          255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
          17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0,
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 255, 255, 255, 255, 255,
        ];
      (t.encode = function (e) {
        !n.isBuffer(e) && (e = new n(e));
        var t,
          r,
          i = 0,
          o = 0,
          a = 0,
          s = 0;
        for (
          var u = new n(
            8 *
              ((r = Math.floor((t = e).length / 5)),
              t.length % 5 == 0 ? r : r + 1),
          );
          i < e.length;

        ) {
          var c = e[i];
          a > 3
            ? ((s =
                ((s = c & (255 >> a)) << (a = (a + 5) % 8)) |
                ((i + 1 < e.length ? e[i + 1] : 0) >> (8 - a))),
              i++)
            : ((s = (c >> (8 - (a + 5))) & 31), 0 == (a = (a + 5) % 8) && i++),
            (u[o] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(s)),
            o++;
        }
        for (i = o; i < u.length; i++) u[i] = 61;
        return u;
      }),
        (t.decode = function (e) {
          var t,
            r = 0,
            o = 0,
            a = 0;
          !n.isBuffer(e) && (e = new n(e));
          for (
            var s = new n(Math.ceil((5 * e.length) / 8)), u = 0;
            u < e.length && 61 != e[u];
            u++
          ) {
            var c = e[u] - 48;
            if (c < i.length)
              (o = i[c]),
                r <= 3
                  ? 0 == (r = (r + 5) % 8)
                    ? ((t |= o), (s[a] = t), a++, (t = 0))
                    : (t |= 255 & (o << (8 - r)))
                  : ((t |= 255 & (o >>> (r = (r + 5) % 8))),
                    (s[a] = t),
                    a++,
                    (t = 255 & (o << (8 - r))));
            else throw Error("Invalid input - it is not base32 encoded string");
          }
          return s.slice(0, a);
        });
    },
    423891: function (e, t, r) {
      var n, i, o, a;
      r(444675),
        (i = {}),
        (e.exports = i),
        (n = r(457854)),
        (o = i),
        (a = n),
        (o.toRGBA8 = function (e) {
          var t = e.width,
            r = e.height;
          if (null == e.tabs.acTL)
            return [o.toRGBA8.decodeImage(e.data, t, r, e).buffer];
          var n = [];
          null == e.frames[0].data && (e.frames[0].data = e.data);
          for (
            var i, a = new Uint8Array(t * r * 4), s = 0;
            s < e.frames.length;
            s++
          ) {
            var u = e.frames[s],
              c = u.rect.x,
              l = u.rect.y,
              h = u.rect.width,
              f = u.rect.height,
              p = o.toRGBA8.decodeImage(u.data, h, f, e);
            if (
              (0 == s
                ? (i = p)
                : 0 == u.blend
                  ? o._copyTile(p, h, f, i, t, r, c, l, 0)
                  : 1 == u.blend && o._copyTile(p, h, f, i, t, r, c, l, 1),
              n.push(i.buffer),
              (i = i.slice(0)),
              0 == u.dispose)
            );
            else if (1 == u.dispose) o._copyTile(a, h, f, i, t, r, c, l, 0);
            else if (2 == u.dispose) {
              for (var d = s - 1; 2 == e.frames[d].dispose; ) d--;
              i = new Uint8Array(n[d]).slice(0);
            }
          }
          return n;
        }),
        (o.toRGBA8.decodeImage = function (e, t, r, n) {
          var i = t * r,
            a = Math.ceil((t * o.decode._getBPP(n)) / 8),
            s = new Uint8Array(4 * i),
            u = new Uint32Array(s.buffer),
            c = n.ctype,
            l = n.depth,
            h = o._bin.readUshort;
          if (6 == c) {
            var f = i << 2;
            if (8 == l) for (var p = 0; p < f; p++) s[p] = e[p];
            if (16 == l) for (var p = 0; p < f; p++) s[p] = e[p << 1];
          } else if (2 == c) {
            var d = n.tabs.tRNS,
              m = -1,
              v = -1,
              y = -1;
            if ((d && ((m = d[0]), (v = d[1]), (y = d[2])), 8 == l))
              for (var p = 0; p < i; p++) {
                var g = p << 2,
                  b = 3 * p;
                (s[g] = e[b]),
                  (s[g + 1] = e[b + 1]),
                  (s[g + 2] = e[b + 2]),
                  (s[g + 3] = 255),
                  -1 != m &&
                    e[b] == m &&
                    e[b + 1] == v &&
                    e[b + 2] == y &&
                    (s[g + 3] = 0);
              }
            if (16 == l)
              for (var p = 0; p < i; p++) {
                var g = p << 2,
                  b = 6 * p;
                (s[g] = e[b]),
                  (s[g + 1] = e[b + 2]),
                  (s[g + 2] = e[b + 4]),
                  (s[g + 3] = 255),
                  -1 != m &&
                    h(e, b) == m &&
                    h(e, b + 2) == v &&
                    h(e, b + 4) == y &&
                    (s[g + 3] = 0);
              }
          } else if (3 == c) {
            var E = n.tabs.PLTE,
              T = n.tabs.tRNS,
              _ = T ? T.length : 0;
            if (1 == l)
              for (var A = 0; A < r; A++) {
                for (var I = A * a, S = A * t, p = 0; p < t; p++) {
                  var g = (S + p) << 2,
                    L = (e[I + (p >> 3)] >> (7 - ((7 & p) << 0))) & 1,
                    w = 3 * L;
                  (s[g] = E[w]),
                    (s[g + 1] = E[w + 1]),
                    (s[g + 2] = E[w + 2]),
                    (s[g + 3] = L < _ ? T[L] : 255);
                }
              }
            if (2 == l)
              for (var A = 0; A < r; A++) {
                for (var I = A * a, S = A * t, p = 0; p < t; p++) {
                  var g = (S + p) << 2,
                    L = (e[I + (p >> 2)] >> (6 - ((3 & p) << 1))) & 3,
                    w = 3 * L;
                  (s[g] = E[w]),
                    (s[g + 1] = E[w + 1]),
                    (s[g + 2] = E[w + 2]),
                    (s[g + 3] = L < _ ? T[L] : 255);
                }
              }
            if (4 == l)
              for (var A = 0; A < r; A++) {
                for (var I = A * a, S = A * t, p = 0; p < t; p++) {
                  var g = (S + p) << 2,
                    L = (e[I + (p >> 1)] >> (4 - ((1 & p) << 2))) & 15,
                    w = 3 * L;
                  (s[g] = E[w]),
                    (s[g + 1] = E[w + 1]),
                    (s[g + 2] = E[w + 2]),
                    (s[g + 3] = L < _ ? T[L] : 255);
                }
              }
            if (8 == l)
              for (var p = 0; p < i; p++) {
                var g = p << 2,
                  L = e[p],
                  w = 3 * L;
                (s[g] = E[w]),
                  (s[g + 1] = E[w + 1]),
                  (s[g + 2] = E[w + 2]),
                  (s[g + 3] = L < _ ? T[L] : 255);
              }
          } else if (4 == c) {
            if (8 == l)
              for (var p = 0; p < i; p++) {
                var g = p << 2,
                  N = p << 1,
                  H = e[N];
                (s[g] = H),
                  (s[g + 1] = H),
                  (s[g + 2] = H),
                  (s[g + 3] = e[N + 1]);
              }
            if (16 == l)
              for (var p = 0; p < i; p++) {
                var g = p << 2,
                  N = p << 2,
                  H = e[N];
                (s[g] = H),
                  (s[g + 1] = H),
                  (s[g + 2] = H),
                  (s[g + 3] = e[N + 2]);
              }
          } else if (0 == c) {
            var m = n.tabs.tRNS ? n.tabs.tRNS : -1;
            if (1 == l)
              for (var p = 0; p < i; p++) {
                var H = 255 * ((e[p >> 3] >> (7 - (7 & p))) & 1),
                  B = H == 255 * m ? 0 : 255;
                u[p] = (B << 24) | (H << 16) | (H << 8) | H;
              }
            if (2 == l)
              for (var p = 0; p < i; p++) {
                var H = 85 * ((e[p >> 2] >> (6 - ((3 & p) << 1))) & 3),
                  B = H == 85 * m ? 0 : 255;
                u[p] = (B << 24) | (H << 16) | (H << 8) | H;
              }
            if (4 == l)
              for (var p = 0; p < i; p++) {
                var H = 17 * ((e[p >> 1] >> (4 - ((1 & p) << 2))) & 15),
                  B = H == 17 * m ? 0 : 255;
                u[p] = (B << 24) | (H << 16) | (H << 8) | H;
              }
            if (8 == l)
              for (var p = 0; p < i; p++) {
                var H = e[p],
                  B = H == m ? 0 : 255;
                u[p] = (B << 24) | (H << 16) | (H << 8) | H;
              }
            if (16 == l)
              for (var p = 0; p < i; p++) {
                var H = e[p << 1],
                  B = h(e, p << 1) == m ? 0 : 255;
                u[p] = (B << 24) | (H << 16) | (H << 8) | H;
              }
          }
          return s;
        }),
        (o.decode = function (e) {
          for (
            var t = new Uint8Array(e),
              r = 8,
              n = o._bin,
              i = n.readUshort,
              a = n.readUint,
              s = { tabs: {}, frames: [] },
              u = new Uint8Array(t.length),
              c = 0,
              l,
              h = 0,
              f = [137, 80, 78, 71, 13, 10, 26, 10],
              p = 0;
            p < 8;
            p++
          )
            if (t[p] != f[p]) throw "The input is not a PNG file!";
          for (; r < t.length; ) {
            var d = n.readUint(t, r);
            r += 4;
            var m = n.readASCII(t, r, 4);
            if (((r += 4), "IHDR" == m)) o.decode._IHDR(t, r, s);
            else if ("IDAT" == m) {
              for (var p = 0; p < d; p++) u[c + p] = t[r + p];
              c += d;
            } else if ("acTL" == m)
              (s.tabs[m] = { num_frames: a(t, r), num_plays: a(t, r + 4) }),
                (l = new Uint8Array(t.length));
            else if ("fcTL" == m) {
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
              var y = {
                  x: a(t, r + 12),
                  y: a(t, r + 16),
                  width: a(t, r + 4),
                  height: a(t, r + 8),
                },
                g = i(t, r + 22),
                b = {
                  rect: y,
                  delay: Math.round(
                    1e3 * (g = i(t, r + 20) / (0 == g ? 100 : g)),
                  ),
                  dispose: t[r + 24],
                  blend: t[r + 25],
                };
              s.frames.push(b);
            } else if ("fdAT" == m) {
              for (var p = 0; p < d - 4; p++) l[h + p] = t[r + p + 4];
              h += d - 4;
            } else if ("pHYs" == m)
              s.tabs[m] = [n.readUint(t, r), n.readUint(t, r + 4), t[r + 8]];
            else if ("cHRM" == m) {
              s.tabs[m] = [];
              for (var p = 0; p < 8; p++)
                s.tabs[m].push(n.readUint(t, r + 4 * p));
            } else if ("tEXt" == m) {
              null == s.tabs[m] && (s.tabs[m] = {});
              var E = n.nextZero(t, r),
                T = n.readASCII(t, r, E - r),
                _ = n.readASCII(t, E + 1, r + d - E - 1);
              s.tabs[m][T] = _;
            } else if ("iTXt" == m) {
              null == s.tabs[m] && (s.tabs[m] = {});
              var E = 0,
                A = r;
              E = n.nextZero(t, A);
              var T = n.readASCII(t, A, E - A);
              t[(A = E + 1)],
                t[A + 1],
                (A += 2),
                (E = n.nextZero(t, A)),
                n.readASCII(t, A, E - A),
                (A = E + 1),
                (E = n.nextZero(t, A)),
                n.readUTF8(t, A, E - A),
                (A = E + 1);
              var _ = n.readUTF8(t, A, d - (A - r));
              s.tabs[m][T] = _;
            } else if ("PLTE" == m) s.tabs[m] = n.readBytes(t, r, d);
            else if ("hIST" == m) {
              var I = s.tabs.PLTE.length / 3;
              s.tabs[m] = [];
              for (var p = 0; p < I; p++) s.tabs[m].push(i(t, r + 2 * p));
            } else if ("tRNS" == m)
              3 == s.ctype
                ? (s.tabs[m] = n.readBytes(t, r, d))
                : 0 == s.ctype
                  ? (s.tabs[m] = i(t, r))
                  : 2 == s.ctype &&
                    (s.tabs[m] = [i(t, r), i(t, r + 2), i(t, r + 4)]);
            else if ("gAMA" == m) s.tabs[m] = n.readUint(t, r) / 1e5;
            else if ("sRGB" == m) s.tabs[m] = t[r];
            else if ("bKGD" == m)
              0 == s.ctype || 4 == s.ctype
                ? (s.tabs[m] = [i(t, r)])
                : 2 == s.ctype || 6 == s.ctype
                  ? (s.tabs[m] = [i(t, r), i(t, r + 2), i(t, r + 4)])
                  : 3 == s.ctype && (s.tabs[m] = t[r]);
            else if ("IEND" == m) {
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
            (r += d), n.readUint(t, r), (r += 4);
          }
          return delete s.compress, delete s.interlace, delete s.filter, s;
        }),
        (o.decode._decompress = function (e, t, r, n) {
          return (
            0 == e.compress && (t = o.decode._inflate(t)),
            0 == e.interlace
              ? (t = o.decode._filterZero(t, e, 0, r, n))
              : 1 == e.interlace && (t = o.decode._readInterlace(t, e)),
            t
          );
        }),
        (o.decode._inflate = function (e) {
          return a.inflate(e);
        }),
        (o.decode._readInterlace = function (e, t) {
          for (
            var r = t.width,
              n = t.height,
              i = o.decode._getBPP(t),
              a = i >> 3,
              s = Math.ceil((r * i) / 8),
              u = new Uint8Array(n * s),
              c = 0,
              l = [0, 0, 4, 0, 2, 0, 1],
              h = [0, 4, 0, 2, 0, 1, 0],
              f = [8, 8, 8, 4, 4, 2, 2],
              p = [8, 8, 4, 4, 2, 2, 1],
              d = 0;
            d < 7;

          ) {
            for (var m = f[d], v = p[d], y = 0, g = 0, b = l[d]; b < n; )
              (b += m), g++;
            for (var E = h[d]; E < r; ) (E += v), y++;
            var T = Math.ceil((y * i) / 8);
            o.decode._filterZero(e, t, c, y, g);
            for (var _ = 0, A = l[d]; A < n; ) {
              for (var I = h[d], S = (c + _ * T) << 3; I < r; ) {
                if (1 == i) {
                  var L = e[S >> 3];
                  (L = (L >> (7 - (7 & S))) & 1),
                    (u[A * s + (I >> 3)] |= L << (7 - ((3 & I) << 0)));
                }
                if (2 == i) {
                  var L = e[S >> 3];
                  (L = (L >> (6 - (7 & S))) & 3),
                    (u[A * s + (I >> 2)] |= L << (6 - ((3 & I) << 1)));
                }
                if (4 == i) {
                  var L = e[S >> 3];
                  (L = (L >> (4 - (7 & S))) & 15),
                    (u[A * s + (I >> 1)] |= L << (4 - ((1 & I) << 2)));
                }
                if (i >= 8) {
                  for (var w = A * s + I * a, N = 0; N < a; N++)
                    u[w + N] = e[(S >> 3) + N];
                }
                (S += i), (I += v);
              }
              _++, (A += m);
            }
            y * g != 0 && (c += g * (1 + T)), (d += 1);
          }
          return u;
        }),
        (o.decode._getBPP = function (e) {
          return [1, null, 3, 1, 2, null, 4][e.ctype] * e.depth;
        }),
        (o.decode._filterZero = function (e, t, r, n, i) {
          var a = o.decode._getBPP(t),
            s = Math.ceil((n * a) / 8),
            u = o.decode._paeth;
          a = Math.ceil(a / 8);
          for (var c = 0; c < i; c++) {
            var l = r + c * s,
              h = l + c + 1,
              f = e[h - 1];
            if (0 == f) for (var p = 0; p < s; p++) e[l + p] = e[h + p];
            else if (1 == f) {
              for (var p = 0; p < a; p++) e[l + p] = e[h + p];
              for (var p = a; p < s; p++)
                e[l + p] = (e[h + p] + e[l + p - a]) & 255;
            } else if (0 == c) {
              for (var p = 0; p < a; p++) e[l + p] = e[h + p];
              if (2 == f) for (var p = a; p < s; p++) e[l + p] = 255 & e[h + p];
              if (3 == f)
                for (var p = a; p < s; p++)
                  e[l + p] = (e[h + p] + (e[l + p - a] >> 1)) & 255;
              if (4 == f)
                for (var p = a; p < s; p++)
                  e[l + p] = (e[h + p] + u(e[l + p - a], 0, 0)) & 255;
            } else {
              if (2 == f)
                for (var p = 0; p < s; p++)
                  e[l + p] = (e[h + p] + e[l + p - s]) & 255;
              if (3 == f) {
                for (var p = 0; p < a; p++)
                  e[l + p] = (e[h + p] + (e[l + p - s] >> 1)) & 255;
                for (var p = a; p < s; p++)
                  e[l + p] =
                    (e[h + p] + ((e[l + p - s] + e[l + p - a]) >> 1)) & 255;
              }
              if (4 == f) {
                for (var p = 0; p < a; p++)
                  e[l + p] = (e[h + p] + u(0, e[l + p - s], 0)) & 255;
                for (var p = a; p < s; p++)
                  e[l + p] =
                    (e[h + p] +
                      u(e[l + p - a], e[l + p - s], e[l + p - a - s])) &
                    255;
              }
            }
          }
          return e;
        }),
        (o.decode._paeth = function (e, t, r) {
          var n = e + t - r,
            i = Math.abs(n - e),
            o = Math.abs(n - t),
            a = Math.abs(n - r);
          return i <= o && i <= a ? e : o <= a ? t : r;
        }),
        (o.decode._IHDR = function (e, t, r) {
          var n = o._bin;
          (r.width = n.readUint(e, t)),
            (t += 4),
            (r.height = n.readUint(e, t)),
            (t += 4),
            (r.depth = e[t]),
            t++,
            (r.ctype = e[t]),
            t++,
            (r.compress = e[t]),
            t++,
            (r.filter = e[t]),
            t++,
            (r.interlace = e[t]),
            t++;
        }),
        (o._bin = {
          nextZero: function (e, t) {
            for (; 0 != e[t]; ) t++;
            return t;
          },
          readUshort: function (e, t) {
            return (e[t] << 8) | e[t + 1];
          },
          writeUshort: function (e, t, r) {
            (e[t] = (r >> 8) & 255), (e[t + 1] = 255 & r);
          },
          readUint: function (e, t) {
            return (
              16777216 * e[t] + ((e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3])
            );
          },
          writeUint: function (e, t, r) {
            (e[t] = (r >> 24) & 255),
              (e[t + 1] = (r >> 16) & 255),
              (e[t + 2] = (r >> 8) & 255),
              (e[t + 3] = 255 & r);
          },
          readASCII: function (e, t, r) {
            for (var n = "", i = 0; i < r; i++)
              n += String.fromCharCode(e[t + i]);
            return n;
          },
          writeASCII: function (e, t, r) {
            for (var n = 0; n < r.length; n++) e[t + n] = r.charCodeAt(n);
          },
          readBytes: function (e, t, r) {
            for (var n = [], i = 0; i < r; i++) n.push(e[t + i]);
            return n;
          },
          pad: function (e) {
            return e.length < 2 ? "0" + e : e;
          },
          readUTF8: function (e, t, r) {
            for (var n, i = "", a = 0; a < r; a++)
              i += "%" + o._bin.pad(e[t + a].toString(16));
            try {
              n = decodeURIComponent(i);
            } catch (n) {
              return o._bin.readASCII(e, t, r);
            }
            return n;
          },
        }),
        (o._copyTile = function (e, t, r, n, i, o, a, s, u) {
          for (
            var c = Math.min(t, i), l = Math.min(r, o), h = 0, f = 0, p = 0;
            p < l;
            p++
          )
            for (var d = 0; d < c; d++)
              if (
                (a >= 0 && s >= 0
                  ? ((h = (p * t + d) << 2), (f = ((s + p) * i + a + d) << 2))
                  : ((h = ((-s + p) * t - a + d) << 2), (f = (p * i + d) << 2)),
                0 == u)
              )
                (n[f] = e[h]),
                  (n[f + 1] = e[h + 1]),
                  (n[f + 2] = e[h + 2]),
                  (n[f + 3] = e[h + 3]);
              else if (1 == u) {
                var m = e[h + 3] * (1 / 255),
                  v = e[h] * m,
                  y = e[h + 1] * m,
                  g = e[h + 2] * m,
                  b = n[f + 3] * (1 / 255),
                  E = n[f] * b,
                  T = n[f + 1] * b,
                  _ = n[f + 2] * b,
                  A = 1 - m,
                  I = m + b * A,
                  S = 0 == I ? 0 : 1 / I;
                (n[f + 3] = 255 * I),
                  (n[f + 0] = (v + E * A) * S),
                  (n[f + 1] = (y + T * A) * S),
                  (n[f + 2] = (g + _ * A) * S);
              } else if (2 == u) {
                var m = e[h + 3],
                  v = e[h],
                  y = e[h + 1],
                  g = e[h + 2],
                  b = n[f + 3],
                  E = n[f],
                  T = n[f + 1],
                  _ = n[f + 2];
                m == b && v == E && y == T && g == _
                  ? ((n[f] = 0), (n[f + 1] = 0), (n[f + 2] = 0), (n[f + 3] = 0))
                  : ((n[f] = v),
                    (n[f + 1] = y),
                    (n[f + 2] = g),
                    (n[f + 3] = m));
              } else if (3 == u) {
                var m = e[h + 3],
                  v = e[h],
                  y = e[h + 1],
                  g = e[h + 2],
                  b = n[f + 3],
                  E = n[f],
                  T = n[f + 1],
                  _ = n[f + 2];
                if (m == b && v == E && y == T && g == _) continue;
                if (m < 220 && b > 20) return !1;
              }
          return !0;
        }),
        (o.encode = function (e, t, r, n, i, a) {
          null == n && (n = 0), null == a && (a = !1);
          for (
            var s = new Uint8Array(e[0].byteLength * e.length + 100),
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
            d = h.writeUshort,
            m = h.writeASCII,
            v = o.encode.compressPNG(e, t, r, n, a);
          p(s, l, 13),
            m(s, (l += 4), "IHDR"),
            p(s, (l += 4), t),
            p(s, (l += 4), r),
            (s[(l += 4)] = v.depth),
            (s[++l] = v.ctype),
            (s[++l] = 0),
            (s[++l] = 0),
            (s[++l] = 0),
            p(s, ++l, f(s, l - 17, 17)),
            p(s, (l += 4), 1),
            m(s, (l += 4), "sRGB"),
            (s[(l += 4)] = 1),
            p(s, ++l, f(s, l - 5, 5)),
            (l += 4);
          var y = e.length > 1;
          if (
            (y &&
              (p(s, l, 8),
              m(s, (l += 4), "acTL"),
              p(s, (l += 4), e.length),
              p(s, (l += 4), 0),
              p(s, (l += 4), f(s, l - 12, 12)),
              (l += 4)),
            3 == v.ctype)
          ) {
            var g = v.plte.length;
            p(s, l, 3 * g), m(s, (l += 4), "PLTE"), (l += 4);
            for (var c = 0; c < g; c++) {
              var b = 3 * c,
                E = v.plte[c],
                T = 255 & E,
                _ = (E >> 8) & 255,
                A = (E >> 16) & 255;
              (s[l + b + 0] = T), (s[l + b + 1] = _), (s[l + b + 2] = A);
            }
            if (
              (p(s, (l += 3 * g), f(s, l - 3 * g - 4, 3 * g + 4)),
              (l += 4),
              v.gotAlpha)
            ) {
              p(s, l, g), m(s, (l += 4), "tRNS"), (l += 4);
              for (var c = 0; c < g; c++) s[l + c] = (v.plte[c] >> 24) & 255;
              p(s, (l += g), f(s, l - g - 4, g + 4)), (l += 4);
            }
          }
          for (var I = 0, S = 0; S < v.frames.length; S++) {
            var L = v.frames[S];
            y &&
              (p(s, l, 26),
              m(s, (l += 4), "fcTL"),
              p(s, (l += 4), I++),
              p(s, (l += 4), L.rect.width),
              p(s, (l += 4), L.rect.height),
              p(s, (l += 4), L.rect.x),
              p(s, (l += 4), L.rect.y),
              d(s, (l += 4), i[S]),
              d(s, (l += 2), 1e3),
              (s[(l += 2)] = L.dispose),
              (s[++l] = L.blend),
              p(s, ++l, f(s, l - 30, 30)),
              (l += 4));
            var w = L.cimg,
              g = w.length;
            p(s, l, g + (0 == S ? 0 : 4));
            var N = (l += 4);
            m(s, l, 0 == S ? "IDAT" : "fdAT"),
              (l += 4),
              0 != S && (p(s, l, I++), (l += 4));
            for (var c = 0; c < g; c++) s[l + c] = w[c];
            p(s, (l += g), f(s, N, l - N)), (l += 4);
          }
          return (
            p(s, l, 0),
            m(s, (l += 4), "IEND"),
            p(s, (l += 4), f(s, l - 4, 4)),
            (l += 4),
            s.buffer.slice(0, l)
          );
        }),
        (o.encode.compressPNG = function (e, t, r, n, i) {
          for (
            var a = o.encode.compress(e, t, r, n, !1, i), s = 0;
            s < e.length;
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
        (o.encode.compress = function (e, t, r, n, i, a) {
          null == a && (a = !1);
          for (var s = 6, u = 8, c = 4, l = 255, h = 0; h < e.length; h++) {
            for (
              var f = new Uint8Array(e[h]), p = f.length, d = 0;
              d < p;
              d += 4
            )
              l &= f[d + 3];
          }
          var m = 255 != l,
            v = {},
            y = [];
          if (
            (0 != e.length && ((v[0] = 0), y.push(0), 0 != n && n--), 0 != n)
          ) {
            var g = o.quantize(e, n, i);
            e = g.bufs;
            for (var d = 0; d < g.plte.length; d++) {
              var b = g.plte[d].est.rgba;
              null == v[b] && ((v[b] = y.length), y.push(b));
            }
          } else
            for (var h = 0; h < e.length; h++) {
              for (
                var E = new Uint32Array(e[h]), p = E.length, d = 0;
                d < p;
                d++
              ) {
                var b = E[d];
                if (
                  (d < t || (b != E[d - 1] && b != E[d - t])) &&
                  null == v[b] &&
                  ((v[b] = y.length), y.push(b), y.length >= 300)
                )
                  break;
              }
            }
          var T = !!m && i,
            _ = y.length;
          _ <= 256 &&
            !1 == a &&
            ((u = _ <= 2 ? 1 : _ <= 4 ? 2 : _ <= 16 ? 4 : 8),
            i && (u = 8),
            (m = !0));
          for (var A = [], h = 0; h < e.length; h++) {
            var I = new Uint8Array(e[h]),
              S = new Uint32Array(I.buffer),
              L = 0,
              w = 0,
              N = t,
              H = r,
              B = 0;
            if (0 != h && !T) {
              for (
                var P = i || 1 == h || 2 == A[A.length - 2].dispose ? 1 : 2,
                  M = 0,
                  R = 1e9,
                  O = 0;
                O < P;
                O++
              ) {
                for (
                  var F = new Uint8Array(e[h - 1 - O]),
                    C = new Uint32Array(e[h - 1 - O]),
                    D = t,
                    U = r,
                    x = -1,
                    G = -1,
                    k = 0;
                  k < r;
                  k++
                )
                  for (var j = 0; j < t; j++) {
                    var d = k * t + j;
                    S[d] != C[d] &&
                      (j < D && (D = j),
                      j > x && (x = j),
                      k < U && (U = k),
                      k > G && (G = k));
                  }
                var V = -1 == x ? 1 : (x - D + 1) * (G - U + 1);
                V < R &&
                  ((R = V),
                  (M = O),
                  -1 == x
                    ? ((L = w = 0), (N = H = 1))
                    : ((L = D), (w = U), (N = x - D + 1), (H = G - U + 1)));
              }
              var F = new Uint8Array(e[h - 1 - M]);
              1 == M && (A[A.length - 1].dispose = 2);
              var K = new Uint8Array(N * H * 4);
              new Uint32Array(K.buffer),
                o._copyTile(F, t, r, K, N, H, -L, -w, 0),
                o._copyTile(I, t, r, K, N, H, -L, -w, 3)
                  ? (o._copyTile(I, t, r, K, N, H, -L, -w, 2), (B = 1))
                  : (o._copyTile(I, t, r, K, N, H, -L, -w, 0), (B = 0)),
                (S = new Uint32Array((I = K).buffer));
            }
            var z = 4 * N;
            if (_ <= 256 && !1 == a) {
              for (
                var K = new Uint8Array((z = Math.ceil((u * N) / 8)) * H), k = 0;
                k < H;
                k++
              ) {
                var d = k * z,
                  X = k * N;
                if (8 == u) for (var j = 0; j < N; j++) K[d + j] = v[S[X + j]];
                else if (4 == u)
                  for (var j = 0; j < N; j++)
                    K[d + (j >> 1)] |= v[S[X + j]] << (4 - (1 & j) * 4);
                else if (2 == u)
                  for (var j = 0; j < N; j++)
                    K[d + (j >> 2)] |= v[S[X + j]] << (6 - (3 & j) * 2);
                else if (1 == u)
                  for (var j = 0; j < N; j++)
                    K[d + (j >> 3)] |= v[S[X + j]] << (7 - (7 & j) * 1);
              }
              (I = K), (s = 3), (c = 1);
            } else if (!1 == m && 1 == e.length) {
              for (
                var K = new Uint8Array(N * H * 3), Z = N * H, d = 0;
                d < Z;
                d++
              ) {
                var q = 3 * d,
                  J = 4 * d;
                (K[q] = I[J]), (K[q + 1] = I[J + 1]), (K[q + 2] = I[J + 2]);
              }
              (I = K), (s = 2), (c = 3), (z = 3 * N);
            }
            A.push({
              rect: { x: L, y: w, width: N, height: H },
              img: I,
              bpl: z,
              bpp: c,
              blend: B,
              dispose: T ? 1 : 0,
            });
          }
          return { ctype: s, depth: u, plte: y, gotAlpha: m, frames: A };
        }),
        (o.encode._filterZero = function (e, t, r, n, i) {
          for (var s = [], u = 0; u < 5; u++)
            if (!(t * n > 5e5) || (2 != u && 3 != u && 4 != u)) {
              for (var c = 0; c < t; c++)
                o.encode._filterLine(i, e, c, n, r, u);
              if ((s.push(a.deflate(i)), 1 == r)) break;
            }
          for (var l, h = 1e9, f = 0; f < s.length; f++)
            s[f].length < h && ((l = f), (h = s[f].length));
          return s[l];
        }),
        (o.encode._filterLine = function (e, t, r, n, i, a) {
          var s = r * n,
            u = s + r,
            c = o.decode._paeth;
          if (((e[u] = a), u++, 0 == a))
            for (var l = 0; l < n; l++) e[u + l] = t[s + l];
          else if (1 == a) {
            for (var l = 0; l < i; l++) e[u + l] = t[s + l];
            for (var l = i; l < n; l++)
              e[u + l] = (t[s + l] - t[s + l - i] + 256) & 255;
          } else if (0 == r) {
            for (var l = 0; l < i; l++) e[u + l] = t[s + l];
            if (2 == a) for (var l = i; l < n; l++) e[u + l] = t[s + l];
            if (3 == a)
              for (var l = i; l < n; l++)
                e[u + l] = (t[s + l] - (t[s + l - i] >> 1) + 256) & 255;
            if (4 == a)
              for (var l = i; l < n; l++)
                e[u + l] = (t[s + l] - c(t[s + l - i], 0, 0) + 256) & 255;
          } else {
            if (2 == a)
              for (var l = 0; l < n; l++)
                e[u + l] = (t[s + l] + 256 - t[s + l - n]) & 255;
            if (3 == a) {
              for (var l = 0; l < i; l++)
                e[u + l] = (t[s + l] + 256 - (t[s + l - n] >> 1)) & 255;
              for (var l = i; l < n; l++)
                e[u + l] =
                  (t[s + l] + 256 - ((t[s + l - n] + t[s + l - i]) >> 1)) & 255;
            }
            if (4 == a) {
              for (var l = 0; l < i; l++)
                e[u + l] = (t[s + l] + 256 - c(0, t[s + l - n], 0)) & 255;
              for (var l = i; l < n; l++)
                e[u + l] =
                  (t[s + l] +
                    256 -
                    c(t[s + l - i], t[s + l - n], t[s + l - i - n])) &
                  255;
            }
          }
        }),
        (o.crc = {
          table: (function () {
            for (var e = new Uint32Array(256), t = 0; t < 256; t++) {
              for (var r = t, n = 0; n < 8; n++)
                1 & r ? (r = 3988292384 ^ (r >>> 1)) : (r >>>= 1);
              e[t] = r;
            }
            return e;
          })(),
          update: function (e, t, r, n) {
            for (var i = 0; i < n; i++)
              e = o.crc.table[(e ^ t[r + i]) & 255] ^ (e >>> 8);
            return e;
          },
          crc: function (e, t, r) {
            return 4294967295 ^ o.crc.update(4294967295, e, t, r);
          },
        }),
        (o.quantize = function (e, t, r) {
          for (var n = [], i = 0, a = 0; a < e.length; a++)
            n.push(o.encode.alphaMul(new Uint8Array(e[a]), r)),
              (i += e[a].byteLength);
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
          for (var d = [p]; d.length < t; ) {
            for (var m = 0, v = 0, a = 0; a < d.length; a++)
              d[a].est.L > m && ((m = d[a].est.L), (v = a));
            if (m < 0.001) break;
            var y = d[v],
              g = o.quantize.splitPixels(
                s,
                u,
                y.i0,
                y.i1,
                y.est.e,
                y.est.eMq255,
              ),
              b = {
                i0: y.i0,
                i1: g,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null,
              };
            (b.bst = o.quantize.stats(s, b.i0, b.i1)),
              (b.est = o.quantize.estats(b.bst));
            var E = {
              i0: g,
              i1: y.i1,
              bst: null,
              est: null,
              tdst: 0,
              left: null,
              right: null,
            };
            E.bst = { R: [], m: [], N: y.bst.N - b.bst.N };
            for (var a = 0; a < 16; a++) E.bst.R[a] = y.bst.R[a] - b.bst.R[a];
            for (var a = 0; a < 4; a++) E.bst.m[a] = y.bst.m[a] - b.bst.m[a];
            (E.est = o.quantize.estats(E.bst)),
              (y.left = b),
              (y.right = E),
              (d[v] = b),
              d.push(E);
          }
          d.sort(function (e, t) {
            return t.bst.N - e.bst.N;
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
                  w = A[a + 1] * (1 / 255),
                  N = A[a + 2] * (1 / 255),
                  H = A[a + 3] * (1 / 255),
                  B = p;
                B.left;

              )
                B = 0 >= _(B.est, L, w, N, H) ? B.left : B.right;
              I[a >> 2] = B.est.rgba;
            }
            n[T] = I.buffer;
          }
          return { bufs: n, plte: d };
        }),
        (o.quantize.getNearest = function (e, t, r, n, i) {
          if (null == e.left)
            return (e.tdst = o.quantize.dist(e.est.q, t, r, n, i)), e;
          var a = o.quantize.planeDst(e.est, t, r, n, i),
            s = e.left,
            u = e.right;
          a > 0 && ((s = e.right), (u = e.left));
          var c = o.quantize.getNearest(s, t, r, n, i);
          if (c.tdst <= a * a) return c;
          var l = o.quantize.getNearest(u, t, r, n, i);
          return l.tdst < c.tdst ? l : c;
        }),
        (o.quantize.planeDst = function (e, t, r, n, i) {
          var o = e.e;
          return o[0] * t + o[1] * r + o[2] * n + o[3] * i - e.eMq;
        }),
        (o.quantize.dist = function (e, t, r, n, i) {
          var o = t - e[0],
            a = r - e[1],
            s = n - e[2],
            u = i - e[3];
          return o * o + a * a + s * s + u * u;
        }),
        (o.quantize.splitPixels = function (e, t, r, n, i, a) {
          var s = o.quantize.vecDot;
          for (n -= 4; r < n; ) {
            for (; s(e, r, i) <= a; ) r += 4;
            for (; s(e, n, i) > a; ) n -= 4;
            if (r >= n) break;
            var u = t[r >> 2];
            (t[r >> 2] = t[n >> 2]), (t[n >> 2] = u), (r += 4), (n -= 4);
          }
          for (; s(e, r, i) > a; ) r -= 4;
          return r + 4;
        }),
        (o.quantize.vecDot = function (e, t, r) {
          return (
            e[t] * r[0] + e[t + 1] * r[1] + e[t + 2] * r[2] + e[t + 3] * r[3]
          );
        }),
        (o.quantize.stats = function (e, t, r) {
          for (
            var n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              i = [0, 0, 0, 0],
              o = t;
            o < r;
            o += 4
          ) {
            var a = e[o] * (1 / 255),
              s = e[o + 1] * (1 / 255),
              u = e[o + 2] * (1 / 255),
              c = e[o + 3] * (1 / 255);
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
            { R: n, m: i, N: (r - t) >> 2 }
          );
        }),
        (o.quantize.estats = function (e) {
          var t = e.R,
            r = e.m,
            n = e.N,
            i = r[0],
            a = r[1],
            s = r[2],
            u = r[3],
            c = 0 == n ? 0 : 1 / n,
            l = [
              t[0] - i * i * c,
              t[1] - i * a * c,
              t[2] - i * s * c,
              t[3] - i * u * c,
              t[4] - a * i * c,
              t[5] - a * a * c,
              t[6] - a * s * c,
              t[7] - a * u * c,
              t[8] - s * i * c,
              t[9] - s * a * c,
              t[10] - s * s * c,
              t[11] - s * u * c,
              t[12] - u * i * c,
              t[13] - u * a * c,
              t[14] - u * s * c,
              t[15] - u * u * c,
            ],
            h = o.M4,
            f = [0.5, 0.5, 0.5, 0.5],
            p = 0,
            d = 0;
          if (0 != n)
            for (
              var m = 0;
              m < 10 &&
              ((f = h.multVec(l, f)),
              (d = Math.sqrt(h.dot(f, f))),
              (f = h.sml(1 / d, f)),
              !(1e-9 > Math.abs(d - p)));
              m++
            ) {
              p = d;
            }
          var v = [i * c, a * c, s * c, u * c],
            y = h.dot(h.sml(255, v), f),
            g = v[3] < 0.001 ? 0 : 1 / v[3];
          return {
            Cov: l,
            q: v,
            e: f,
            L: p,
            eMq255: y,
            eMq: h.dot(f, v),
            rgba:
              ((Math.round(255 * v[3]) << 24) |
                (Math.round(255 * v[2] * g) << 16) |
                (Math.round(255 * v[1] * g) << 8) |
                (Math.round(255 * v[0] * g) << 0)) >>>
              0,
          };
        }),
        (o.M4 = {
          multVec: function (e, t) {
            return [
              e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3],
              e[4] * t[0] + e[5] * t[1] + e[6] * t[2] + e[7] * t[3],
              e[8] * t[0] + e[9] * t[1] + e[10] * t[2] + e[11] * t[3],
              e[12] * t[0] + e[13] * t[1] + e[14] * t[2] + e[15] * t[3],
            ];
          },
          dot: function (e, t) {
            return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
          },
          sml: function (e, t) {
            return [e * t[0], e * t[1], e * t[2], e * t[3]];
          },
        }),
        (o.encode.alphaMul = function (e, t) {
          for (
            var r = new Uint8Array(e.length), n = e.length >> 2, i = 0;
            i < n;
            i++
          ) {
            var o = i << 2,
              a = e[o + 3];
            t && (a = a < 128 ? 0 : 255);
            var s = (1 / 255) * a;
            (r[o + 0] = e[o + 0] * s),
              (r[o + 1] = e[o + 1] * s),
              (r[o + 2] = e[o + 2] * s),
              (r[o + 3] = a);
          }
          return r;
        });
    },
    849055: function (e, t, r) {
      "use strict";
      function n(e) {
        let t = "==".slice(0, (4 - (e.length % 4)) % 4),
          r = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
          n = new ArrayBuffer(r.length),
          i = new Uint8Array(n);
        for (let e = 0; e < r.length; e++) i[e] = r.charCodeAt(e);
        return n;
      }
      function i(e) {
        let t = new Uint8Array(e),
          r = "";
        for (let e of t) r += String.fromCharCode(e);
        return btoa(r)
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=/g, "");
      }
      r.d(t, {
        U2: function () {
          return b;
        },
        Ue: function () {
          return g;
        },
      });
      var o = "copy",
        a = "convert";
      function s(e, t, r) {
        if (t === o) return r;
        if (t === a) return e(r);
        if (t instanceof Array) return r.map((r) => s(e, t[0], r));
        if (t instanceof Object) {
          let n = {};
          for (let [i, o] of Object.entries(t)) {
            if (o.derive) {
              let e = o.derive(r);
              void 0 !== e && (r[i] = e);
            }
            if (!(i in r)) {
              if (o.required) throw Error(`Missing key: ${i}`);
              continue;
            }
            if (null == r[i]) {
              n[i] = null;
              continue;
            }
            n[i] = s(e, o.schema, r[i]);
          }
          return n;
        }
      }
      function u(e, t) {
        return { required: !0, schema: e, derive: t };
      }
      function c(e) {
        return { required: !0, schema: e };
      }
      function l(e) {
        return { required: !1, schema: e };
      }
      var h = { type: c(o), id: c(a), transports: l(o) },
        f = { appid: l(o), appidExclude: l(o), credProps: l(o) },
        p = { appid: l(o), appidExclude: l(o), credProps: l(o) },
        d = {
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
        m = {
          type: c(o),
          id: c(o),
          rawId: c(a),
          authenticatorAttachment: l(o),
          response: c({
            clientDataJSON: c(a),
            attestationObject: c(a),
            transports: u(o, (e) => {
              var t;
              return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
            }),
          }),
          clientExtensionResults: u(p, (e) => e.getClientExtensionResults()),
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
        y = {
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
          clientExtensionResults: u(p, (e) => e.getClientExtensionResults()),
        };
      async function g(e) {
        let t = await navigator.credentials.create(s(n, d, e));
        return s(i, m, t);
      }
      async function b(e) {
        let t = await navigator.credentials.get(s(n, v, e));
        return s(i, y, t);
      }
    },
    820401: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          XXH64: function () {
            return c;
          },
          hash: function () {
            return l;
          },
        });
      let n = 2n ** 64n - 1n,
        i = new TextEncoder();
      function o(e, t, r, n) {
        return (
          BigInt(e) |
          (BigInt(t) << 16n) |
          (BigInt(r) << 32n) |
          (BigInt(n) << 48n)
        );
      }
      function a(e, t) {
        return (
          BigInt(e[t]) |
          (BigInt(e[t + 1]) << 8n) |
          (BigInt(e[t + 2]) << 16n) |
          (BigInt(e[t + 3]) << 24n) |
          (BigInt(e[t + 4]) << 32n) |
          (BigInt(e[t + 5]) << 40n) |
          (BigInt(e[t + 6]) << 48n) |
          (BigInt(e[t + 7]) << 56n)
        );
      }
      function s(e, t) {
        return ((e << t) & n) | (e >> (64n - t));
      }
      function u(e) {
        return BigInt.asUintN(64, e);
      }
      class c {
        #e;
        #t;
        #r;
        #n;
        #i;
        #o;
        #a;
        #s;
        constructor(e = 0) {
          this.reset(e);
        }
        reset(e = this.#e) {
          return (
            (this.#e = BigInt.asUintN(32, BigInt(e))),
            (this.#t = u(this.#e + 0x9e3779b185ebca87n + 0xc2b2ae3d27d4eb4fn)),
            (this.#r = u(this.#e + 0xc2b2ae3d27d4eb4fn)),
            (this.#n = this.#e),
            (this.#i = u(this.#e - 0x9e3779b185ebca87n)),
            (this.#o = null),
            (this.#a = 0),
            (this.#s = 0),
            this
          );
        }
        update(e) {
          "string" == typeof e && (e = i.encode(e));
          let t = 0,
            r = e.length,
            n = t + r;
          if (0 === r) return this;
          if (
            ((this.#a += r),
            0 === this.#s && (this.#o = new Uint8Array(32)),
            this.#s + r < 32)
          )
            return this.#o.set(e.subarray(0, r), this.#s), (this.#s += r), this;
          if (this.#s > 0) {
            let r;
            this.#o.set(e.subarray(0, 32 - this.#s), this.#s);
            let n = 0;
            (r = a(this.#o, n)),
              (this.#t = u(
                0x9e3779b185ebca87n *
                  s(u(this.#t + 0xc2b2ae3d27d4eb4fn * r), 31n),
              )),
              (n += 8),
              (r = a(this.memory, n)),
              (this.#r = u(
                0x9e3779b185ebca87n *
                  s(u(this.#r + 0xc2b2ae3d27d4eb4fn * r), 31n),
              )),
              (n += 8),
              (r = a(this.memory, n)),
              (this.#n = u(
                0x9e3779b185ebca87n *
                  s(u(this.#n + 0xc2b2ae3d27d4eb4fn * r), 31n),
              )),
              (n += 8),
              (r = a(this.memory, n)),
              (this.#i = u(
                0x9e3779b185ebca87n *
                  s(u(this.#i + 0xc2b2ae3d27d4eb4fn * r), 31n),
              )),
              (t += 32 - this.#s),
              (this.#s = 0);
          }
          if (t <= n - 32) {
            let r = n - 32;
            do {
              let r;
              (r = a(e, t)),
                (this.#t = u(
                  0x9e3779b185ebca87n *
                    s(u(this.#t + 0xc2b2ae3d27d4eb4fn * r), 31n),
                )),
                (t += 8),
                (r = a(e, t)),
                (this.#r = u(
                  0x9e3779b185ebca87n *
                    s(u(this.#r + 0xc2b2ae3d27d4eb4fn * r), 31n),
                )),
                (t += 8),
                (r = a(e, t)),
                (this.#n = u(
                  0x9e3779b185ebca87n *
                    s(u(this.#n + 0xc2b2ae3d27d4eb4fn * r), 31n),
                )),
                (t += 8),
                (r = a(e, t)),
                (this.#i = u(
                  0x9e3779b185ebca87n *
                    s(u(this.#i + 0xc2b2ae3d27d4eb4fn * r), 31n),
                )),
                (t += 8);
            } while (t <= r);
          }
          return (
            t < n &&
              (this.#o.set(e.subarray(t, n), this.#s), (this.#s = n - t)),
            this
          );
        }
        digest() {
          let e = this.#o,
            t = this.#s,
            r = 0,
            n = 0n,
            i = 0n,
            c = 0n;
          for (
            this.#a >= 32
              ? ((n = u(
                  (n =
                    s(this.#t, 1n) +
                    s(this.#r, 7n) +
                    s(this.#n, 12n) +
                    s(this.#i, 18n)) ^
                    (0x9e3779b185ebca87n *
                      s(u(0xc2b2ae3d27d4eb4fn * this.#t), 31n)),
                )),
                (n = u(0x9e3779b185ebca87n * n + 0x85ebca77c2b2ae63n)),
                (n = u(
                  n ^
                    (0x9e3779b185ebca87n *
                      s(u(0xc2b2ae3d27d4eb4fn * this.#r), 31n)),
                )),
                (n = u(0x9e3779b185ebca87n * n + 0x85ebca77c2b2ae63n)),
                (n = u(
                  n ^
                    (0x9e3779b185ebca87n *
                      s(u(0xc2b2ae3d27d4eb4fn * this.#n), 31n)),
                )),
                (n = u(0x9e3779b185ebca87n * n + 0x85ebca77c2b2ae63n)),
                (n = u(
                  n ^
                    (0x9e3779b185ebca87n *
                      s(u(0xc2b2ae3d27d4eb4fn * this.#i), 31n)),
                )),
                (n = u(0x9e3779b185ebca87n * n + 0x85ebca77c2b2ae63n)))
              : (n = u(this.#e + 0x27d4eb2f165667c5n)),
              n += BigInt(this.#a);
            r <= t - 8;

          )
            (c = u(
              0x9e3779b185ebca87n *
                s(u(0xc2b2ae3d27d4eb4fn * (c = a(e, r))), 31n),
            )),
              (n = u(
                0x9e3779b185ebca87n * s(n ^ c, 27n) + 0x85ebca77c2b2ae63n,
              )),
              (r += 8);
          for (
            r + 4 <= t &&
            ((n = u(
              0xc2b2ae3d27d4eb4fn *
                s(
                  n ^
                    u(
                      0x9e3779b185ebca87n *
                        (c = o(
                          (e[r + 1] << 8) | e[r],
                          (e[r + 3] << 8) | e[r + 2],
                          0,
                          0,
                        )),
                    ),
                  23n,
                ) +
                0x165667b19e3779f9n,
            )),
            (r += 4));
            r < t;

          )
            n = u(
              0x9e3779b185ebca87n *
                s(n ^ u(0x27d4eb2f165667c5n * (c = o(e[r++], 0, 0, 0))), 11n),
            );
          return (
            (i = u(n >> 33n)),
            (n = u((n ^ i) * 0xc2b2ae3d27d4eb4fn)),
            (i = u(n >> 29n)),
            (n = u((n ^ i) * 0x165667b19e3779f9n)),
            (i = u(n >> 32n)),
            (n = u(n ^ i))
          );
        }
      }
      function l(e, t = 0) {
        return new c(t).update(e).digest();
      }
    },
  },
]);
//# sourceMappingURL=6fc772f1a3451961985e.js.map
