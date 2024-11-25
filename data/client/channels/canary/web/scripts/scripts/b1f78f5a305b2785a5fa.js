(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2356"],
  {
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
              n = function () {
                return t.URL || t.webkitURL || t;
              },
              r = e.createElementNS("http://www.w3.org/1999/xhtml", "a"),
              o = "download" in r,
              i = function (t) {
                var e = new MouseEvent("click");
                t.dispatchEvent(e);
              },
              a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
              u = t.webkitRequestFileSystem,
              c = t.requestFileSystem || u || t.mozRequestFileSystem,
              s = function (e) {
                (t.setImmediate || t.setTimeout)(function () {
                  throw e;
                }, 0);
              },
              l = "application/octet-stream",
              d = 0,
              f = function (t) {
                setTimeout(function () {
                  "string" == typeof t ? n().revokeObjectURL(t) : t.remove();
                }, 4e4);
              },
              p = function (t, e, n) {
                for (var r = (e = [].concat(e)).length; r--; ) {
                  var o = t["on" + e[r]];
                  if ("function" == typeof o)
                    try {
                      o.call(t, n || t);
                    } catch (t) {
                      s(t);
                    }
                }
              },
              w = function (t) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                  t.type,
                )
                  ? new Blob(["\xef\xbb\xbf", t], { type: t.type })
                  : t;
              },
              b = function (e, s, b) {
                !b && (e = w(e));
                var y,
                  g,
                  h = this,
                  v = e.type,
                  m = !1,
                  S = function () {
                    p(h, "writestart progress write writeend".split(" "));
                  },
                  O = function () {
                    if (g && a && "undefined" != typeof FileReader) {
                      var r = new FileReader();
                      (r.onloadend = function () {
                        var t = r.result;
                        (g.location.href =
                          "data:attachment/file" + t.slice(t.search(/[,;]/))),
                          (h.readyState = h.DONE),
                          S();
                      }),
                        r.readAsDataURL(e),
                        (h.readyState = h.INIT);
                      return;
                    }
                    (m || !y) && (y = n().createObjectURL(e)),
                      g
                        ? (g.location.href = y)
                        : void 0 === t.open(y, "_blank") &&
                          a &&
                          (t.location.href = y),
                      (h.readyState = h.DONE),
                      S(),
                      f(y);
                  },
                  x = function (t) {
                    return function () {
                      if (h.readyState !== h.DONE)
                        return t.apply(this, arguments);
                    };
                  },
                  E = { create: !0, exclusive: !1 };
                if (((h.readyState = h.INIT), !s && (s = "download"), o)) {
                  (y = n().createObjectURL(e)),
                    setTimeout(function () {
                      (r.href = y),
                        (r.download = s),
                        i(r),
                        S(),
                        f(y),
                        (h.readyState = h.DONE);
                    });
                  return;
                }
                if (
                  (t.chrome &&
                    v &&
                    v !== l &&
                    ((e = (e.slice || e.webkitSlice).call(e, 0, e.size, l)),
                    (m = !0)),
                  u && "download" !== s && (s += ".download"),
                  (v === l || u) && (g = t),
                  !c)
                ) {
                  O();
                  return;
                }
                (d += e.size),
                  c(
                    t.TEMPORARY,
                    d,
                    x(function (t) {
                      t.root.getDirectory(
                        "saved",
                        E,
                        x(function (t) {
                          var n = function () {
                            t.getFile(
                              s,
                              E,
                              x(function (t) {
                                t.createWriter(
                                  x(function (n) {
                                    (n.onwriteend = function (e) {
                                      (g.location.href = t.toURL()),
                                        (h.readyState = h.DONE),
                                        p(h, "writeend", e),
                                        f(t);
                                    }),
                                      (n.onerror = function () {
                                        var t = n.error;
                                        t.code !== t.ABORT_ERR && O();
                                      }),
                                      "writestart progress write abort"
                                        .split(" ")
                                        .forEach(function (t) {
                                          n["on" + t] = h["on" + t];
                                        }),
                                      n.write(e),
                                      (h.abort = function () {
                                        n.abort(), (h.readyState = h.DONE);
                                      }),
                                      (h.readyState = h.WRITING);
                                  }),
                                  O,
                                );
                              }),
                              O,
                            );
                          };
                          t.getFile(
                            s,
                            { create: !1 },
                            x(function (t) {
                              t.remove(), n();
                            }),
                            x(function (t) {
                              t.code === t.NOT_FOUND_ERR ? n() : O();
                            }),
                          );
                        }),
                        O,
                      );
                    }),
                    O,
                  );
              },
              y = b.prototype;
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
              ? function (t, e, n) {
                  return (
                    !n && (t = w(t)),
                    navigator.msSaveOrOpenBlob(t, e || "download")
                  );
                }
              : ((y.abort = function () {
                  (this.readyState = this.DONE), p(this, "abort");
                }),
                (y.readyState = y.INIT = 0),
                (y.WRITING = 1),
                (y.DONE = 2),
                (y.error =
                  y.onwritestart =
                  y.onprogress =
                  y.onwrite =
                  y.onabort =
                  y.onerror =
                  y.onwriteend =
                    null),
                function (t, e, n) {
                  return new b(t, e, n);
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
    883385: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var r = n(200651);
      n(192379);
      var o = n(410575);
      function i(t, e) {
        return function (n) {
          return (0, r.jsx)(o.Z, {
            page: e.page,
            section: e.section,
            object: e.object,
            objectType: e.objectType,
            children: (0, r.jsx)(t, { ...n }),
          });
        };
      }
    },
    108843: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var r = n(200651);
      n(192379);
      var o = n(906732);
      function i(t, e) {
        return function (n) {
          let { analyticsLocations: i } = (0, o.ZP)(e);
          return (0, r.jsx)(o.Gt, {
            value: i,
            children: (0, r.jsx)(t, { ...n }),
          });
        };
      }
    },
    876308: function (t, e, n) {
      "use strict";
      n.r(e), n(411104);
      var r = n(200651),
        o = n(192379),
        i = n(817080),
        a = n(442837),
        u = n(481060),
        c = n(668781),
        s = n(239091),
        l = n(883385),
        d = n(108843),
        f = n(100527),
        p = n(299206),
        w = n(496675),
        b = n(358085),
        y = n(998502),
        g = n(22382),
        h = n(51078),
        v = n(710111),
        m = n(981631),
        S = n(388032);
      e.default = (0, d.Z)(
        (0, l.Z)(
          function (t) {
            let {
                soundGuild: e,
                sound: l,
                activeCallGuildId: d,
                onSelect: f,
              } = t,
              m = (function (t, e) {
                let { canManageGuildExpressions: i } = (0, a.cj)(
                    [w.Z],
                    () =>
                      null == e
                        ? { canManageGuildExpressions: !1 }
                        : w.Z.getGuildPermissionProps(e),
                    [e],
                  ),
                  c = o.useCallback(() => {
                    if ((null == e ? void 0 : e.id) == null) return null;
                    (0, u.openModalLazy)(async () => {
                      let { default: o } = await Promise.all([
                        n.e("56035"),
                        n.e("28394"),
                      ]).then(n.bind(n, 758961));
                      return (n) =>
                        (0, r.jsx)(o, {
                          ...n,
                          existingSound: t,
                          guildId: e.id,
                        });
                    });
                  }, [e, t]);
                return i
                  ? (0, r.jsx)(
                      u.MenuItem,
                      {
                        id: "edit-soundboard-sound",
                        label: S.intl.string(S.t.ponZcH),
                        action: c,
                      },
                      "edit-soundboard-sound",
                    )
                  : null;
              })(l, e),
              O = (function (t) {
                let { soundId: e } = t,
                  n = o.useCallback(async () => {
                    try {
                      let t = (0, g.Z)(e),
                        n = await fetch(t),
                        r = await n.blob(),
                        o = (function (t) {
                          switch (t.type) {
                            case "audio/mpeg":
                            case "audio/mpeg3":
                              return "mp3";
                            case "audio/ogg":
                              return "ogg";
                            default:
                              throw Error("unable to determine file type");
                          }
                        })(r),
                        a = "".concat(e, ".").concat(o);
                      b.isPlatformEmbedded
                        ? await y.ZP.saveFile(t, a)
                        : (0, i.saveAs)(r, a);
                    } catch (t) {
                      c.Z.show({
                        title: S.intl.string(S.t.mK3tDA),
                        body: S.intl.string(S.t.jLlfDA),
                        confirmText: S.intl.string(S.t.BddRzc),
                      });
                    }
                  }, [e]);
                return t.guildId === v.X8
                  ? null
                  : (0, r.jsx)(
                      u.MenuItem,
                      {
                        id: "download-soundboard-sound",
                        label: S.intl.string(S.t["/fzLLC"]),
                        action: n,
                      },
                      "download-soundboard-sound",
                    );
              })(l),
              x = (0, h.Z)(l, d),
              E = (0, p.Z)({ id: l.soundId, label: S.intl.string(S.t.HJikXl) });
            return (0, r.jsx)(u.Menu, {
              navId: "sound-button-context",
              onClose: s.Zy,
              "aria-label": S.intl.string(S.t.liqwPD),
              onSelect: f,
              children: (0, r.jsxs)(u.MenuGroup, { children: [m, x, O, E] }),
            });
          },
          { object: m.qAy.CONTEXT_MENU },
        ),
        [f.Z.CONTEXT_MENU, f.Z.SOUNDBOARD_BUTTON],
      );
    },
    51078: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return p;
        },
      });
      var r = n(200651);
      n(192379);
      var o = n(442837),
        i = n(481060),
        a = n(906732),
        u = n(313201),
        c = n(594174),
        s = n(74538),
        l = n(242291),
        d = n(710111),
        f = n(388032);
      function p(t, e) {
        let { analyticsLocations: n } = (0, a.ZP)(),
          p = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
          w = (0, u.Dt)(),
          b = (0, u.Dt)();
        return null != e && s.ZP.canUseCustomCallSounds(p)
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(i.MenuItem, {
                  id: w,
                  label: f.intl.string(f.t.p2hUt7),
                  action: () => (0, l.SZ)(e, t, n),
                }),
                (0, r.jsx)(i.MenuItem, {
                  id: b,
                  label: f.intl.string(f.t["/yA6QU"]),
                  action: () => (0, l.SZ)(d.hY, t, n),
                }),
              ],
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=b1f78f5a305b2785a5fa.js.map
