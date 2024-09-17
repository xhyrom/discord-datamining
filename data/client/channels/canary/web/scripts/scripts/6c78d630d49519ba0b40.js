(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2356"],
  {
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
              n = function () {
                return e.URL || e.webkitURL || e;
              },
              o = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
              r = "download" in o,
              i = function (e) {
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
              d = "application/octet-stream",
              l = 0,
              f = function (e) {
                setTimeout(function () {
                  "string" == typeof e ? n().revokeObjectURL(e) : e.remove();
                }, 4e4);
              },
              O = function (e, t, n) {
                for (var o = (t = [].concat(t)).length; o--; ) {
                  var r = e["on" + t[o]];
                  if ("function" == typeof r)
                    try {
                      r.call(e, n || e);
                    } catch (e) {
                      c(e);
                    }
                }
              },
              p = function (e) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                  e.type,
                )
                  ? new Blob(["\xef\xbb\xbf", e], { type: e.type })
                  : e;
              },
              N = function (t, c, N) {
                !N && (t = p(t));
                var w,
                  S,
                  b = this,
                  D = t.type,
                  g = !1,
                  y = function () {
                    O(b, "writestart progress write writeend".split(" "));
                  },
                  h = function () {
                    if (S && a && "undefined" != typeof FileReader) {
                      var o = new FileReader();
                      (o.onloadend = function () {
                        var e = o.result;
                        (S.location.href =
                          "data:attachment/file" + e.slice(e.search(/[,;]/))),
                          (b.readyState = b.DONE),
                          y();
                      }),
                        o.readAsDataURL(t),
                        (b.readyState = b.INIT);
                      return;
                    }
                    (g || !w) && (w = n().createObjectURL(t)),
                      S
                        ? (S.location.href = w)
                        : void 0 === e.open(w, "_blank") &&
                          a &&
                          (e.location.href = w),
                      (b.readyState = b.DONE),
                      y(),
                      f(w);
                  },
                  v = function (e) {
                    return function () {
                      if (b.readyState !== b.DONE)
                        return e.apply(this, arguments);
                    };
                  },
                  E = { create: !0, exclusive: !1 };
                if (((b.readyState = b.INIT), !c && (c = "download"), r)) {
                  (w = n().createObjectURL(t)),
                    setTimeout(function () {
                      (o.href = w),
                        (o.download = c),
                        i(o),
                        y(),
                        f(w),
                        (b.readyState = b.DONE);
                    });
                  return;
                }
                if (
                  (e.chrome &&
                    D &&
                    D !== d &&
                    ((t = (t.slice || t.webkitSlice).call(t, 0, t.size, d)),
                    (g = !0)),
                  s && "download" !== c && (c += ".download"),
                  (D === d || s) && (S = e),
                  !u)
                ) {
                  h();
                  return;
                }
                (l += t.size),
                  u(
                    e.TEMPORARY,
                    l,
                    v(function (e) {
                      e.root.getDirectory(
                        "saved",
                        E,
                        v(function (e) {
                          var n = function () {
                            e.getFile(
                              c,
                              E,
                              v(function (e) {
                                e.createWriter(
                                  v(function (n) {
                                    (n.onwriteend = function (t) {
                                      (S.location.href = e.toURL()),
                                        (b.readyState = b.DONE),
                                        O(b, "writeend", t),
                                        f(e);
                                    }),
                                      (n.onerror = function () {
                                        var e = n.error;
                                        e.code !== e.ABORT_ERR && h();
                                      }),
                                      "writestart progress write abort"
                                        .split(" ")
                                        .forEach(function (e) {
                                          n["on" + e] = b["on" + e];
                                        }),
                                      n.write(t),
                                      (b.abort = function () {
                                        n.abort(), (b.readyState = b.DONE);
                                      }),
                                      (b.readyState = b.WRITING);
                                  }),
                                  h,
                                );
                              }),
                              h,
                            );
                          };
                          e.getFile(
                            c,
                            { create: !1 },
                            v(function (e) {
                              e.remove(), n();
                            }),
                            v(function (e) {
                              e.code === e.NOT_FOUND_ERR ? n() : h();
                            }),
                          );
                        }),
                        h,
                      );
                    }),
                    h,
                  );
              },
              w = N.prototype;
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
              ? function (e, t, n) {
                  return (
                    !n && (e = p(e)),
                    navigator.msSaveOrOpenBlob(e, t || "download")
                  );
                }
              : ((w.abort = function () {
                  (this.readyState = this.DONE), O(this, "abort");
                }),
                (w.readyState = w.INIT = 0),
                (w.WRITING = 1),
                (w.DONE = 2),
                (w.error =
                  w.onwritestart =
                  w.onprogress =
                  w.onwrite =
                  w.onabort =
                  w.onerror =
                  w.onwriteend =
                    null),
                function (e, t, n) {
                  return new N(e, t, n);
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
    883385: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var o = n(735250);
      n(470079);
      var r = n(410575);
      function i(e, t) {
        return function (n) {
          return (0, o.jsx)(r.Z, {
            page: t.page,
            section: t.section,
            object: t.object,
            objectType: t.objectType,
            children: (0, o.jsx)(e, { ...n }),
          });
        };
      }
    },
    108843: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var o = n(735250);
      n(470079);
      var r = n(906732);
      function i(e, t) {
        return function (n) {
          let { analyticsLocations: i } = (0, r.ZP)(t);
          return (0, o.jsx)(r.Gt, {
            value: i,
            children: (0, o.jsx)(e, { ...n }),
          });
        };
      }
    },
    876308: function (e, t, n) {
      "use strict";
      n.r(t), n(411104);
      var o = n(735250),
        r = n(470079),
        i = n(817080),
        a = n(442837),
        s = n(481060),
        u = n(668781),
        c = n(239091),
        d = n(883385),
        l = n(108843),
        f = n(100527),
        O = n(299206),
        p = n(496675),
        N = n(358085),
        w = n(998502),
        S = n(22382),
        b = n(51078),
        D = n(710111),
        g = n(981631),
        y = n(689938);
      t.default = (0, l.Z)(
        (0, d.Z)(
          function (e) {
            let {
                soundGuild: t,
                sound: d,
                activeCallGuildId: l,
                onSelect: f,
              } = e,
              g = (function (e, t) {
                let { canManageGuildExpressions: i } = (0, a.cj)(
                    [p.Z],
                    () =>
                      null == t
                        ? { canManageGuildExpressions: !1 }
                        : p.Z.getGuildPermissionProps(t),
                    [t],
                  ),
                  u = r.useCallback(() => {
                    if ((null == t ? void 0 : t.id) == null) return null;
                    (0, s.openModalLazy)(async () => {
                      let { default: r } = await Promise.all([
                        n.e("56035"),
                        n.e("55876"),
                      ]).then(n.bind(n, 758961));
                      return (n) =>
                        (0, o.jsx)(r, {
                          ...n,
                          existingSound: e,
                          guildId: t.id,
                        });
                    });
                  }, [t, e]);
                return i
                  ? (0, o.jsx)(
                      s.MenuItem,
                      {
                        id: "edit-soundboard-sound",
                        label: y.Z.Messages.SOUNDBOARD_CONTEXT_MENU_EDIT_SOUND,
                        action: u,
                      },
                      "edit-soundboard-sound",
                    )
                  : null;
              })(d, t),
              h = (function (e) {
                let { soundId: t } = e,
                  n = r.useCallback(async () => {
                    try {
                      let e = (0, S.Z)(t),
                        n = await fetch(e),
                        o = await n.blob(),
                        r = (function (e) {
                          switch (e.type) {
                            case "audio/mpeg":
                            case "audio/mpeg3":
                              return "mp3";
                            case "audio/ogg":
                              return "ogg";
                            default:
                              throw Error("unable to determine file type");
                          }
                        })(o),
                        a = "".concat(t, ".").concat(r);
                      N.isPlatformEmbedded
                        ? await w.ZP.saveFile(e, a)
                        : (0, i.saveAs)(o, a);
                    } catch (e) {
                      u.Z.show({
                        title:
                          y.Z.Messages.SOUNDBOARD_DOWNLOAD_SOUND_FAILED_TITLE,
                        body: y.Z.Messages
                          .SOUNDBOARD_DOWNLOAD_SOUND_FAILED_BODY,
                        confirmText: y.Z.Messages.OKAY,
                      });
                    }
                  }, [t]);
                return e.guildId === D.X8
                  ? null
                  : (0, o.jsx)(
                      s.MenuItem,
                      {
                        id: "download-soundboard-sound",
                        label:
                          y.Z.Messages.SOUNDBOARD_CONTEXT_MENU_DOWNLOAD_SOUND,
                        action: n,
                      },
                      "download-soundboard-sound",
                    );
              })(d),
              v = (0, b.Z)(d, l),
              E = (0, O.Z)({
                id: d.soundId,
                label: y.Z.Messages.COPY_ID_SOUND,
              });
            return (0, o.jsx)(s.Menu, {
              navId: "sound-button-context",
              onClose: c.Zy,
              "aria-label": y.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: f,
              children: (0, o.jsxs)(s.MenuGroup, { children: [g, v, h, E] }),
            });
          },
          { object: g.qAy.CONTEXT_MENU },
        ),
        [f.Z.CONTEXT_MENU, f.Z.SOUNDBOARD_BUTTON],
      );
    },
    51078: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return O;
        },
      });
      var o = n(735250);
      n(470079);
      var r = n(442837),
        i = n(481060),
        a = n(906732),
        s = n(313201),
        u = n(594174),
        c = n(74538),
        d = n(242291),
        l = n(710111),
        f = n(689938);
      function O(e, t) {
        let { analyticsLocations: n } = (0, a.ZP)(),
          O = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
          p = (0, s.Dt)(),
          N = (0, s.Dt)();
        return null != t && c.ZP.canUseCustomCallSounds(O)
          ? (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(i.MenuItem, {
                  id: p,
                  label: f.Z.Messages.CALL_SOUNDS_CONTEXT_MENU_GUILD,
                  action: () => (0, d.SZ)(t, e, n),
                }),
                (0, o.jsx)(i.MenuItem, {
                  id: N,
                  label: f.Z.Messages.CALL_SOUNDS_CONTEXT_MENU_GLOBAL,
                  action: () => (0, d.SZ)(l.hY, e, n),
                }),
              ],
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=6c78d630d49519ba0b40.js.map
