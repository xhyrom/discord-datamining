"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86778"],
  {
    915863: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(120356),
        l = n.n(i),
        o = n(481060),
        a = n(472113);
      function u(e) {
        let { className: t, size: n, ...i } = e;
        return (0, r.jsx)(o.Button, {
          className: l()(a.button, t),
          size: l()(a.buttonSize, n),
          ...i,
        });
      }
    },
    429589: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(481060),
        l = n(103450),
        o = n(915863);
      function a(e) {
        let {
            activity: t,
            embeddedActivity: n,
            user: a,
            onAction: u,
            ButtonComponent: s = o.Z,
            ...c
          } = e,
          d = (0, l.e)({
            activity: null != t ? t : void 0,
            embeddedActivity: n,
            user: a,
            onGameJoin: u,
          });
        if (null == d) return null;
        let {
          isJoining: f,
          handleJoinRequest: p,
          buttonCTA: m,
          tooltip: h,
          isEnabled: v,
        } = d;
        return (0, r.jsx)(
          i.Tooltip,
          {
            text: h,
            children: (e) => {
              let { onMouseEnter: t, onMouseLeave: n } = e;
              return (0, r.jsx)(s, {
                onClick: p,
                onMouseEnter: t,
                onMouseLeave: n,
                disabled: !v,
                submitting: f,
                fullWidth: !0,
                ...c,
                children: m,
              });
            },
          },
          "join",
        );
      }
    },
    757182: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(200651);
      n(192379);
      var i = n(655922),
        l = n(420660),
        o = n(915863),
        a = n(388032);
      function u(e) {
        let { activity: t, onAction: n, ButtonComponent: u = o.Z, ...s } = e;
        return (0, l.Z)(t)
          ? (0, r.jsx)(
              u,
              {
                onClick: () => {
                  null == n || n();
                  let e = (0, i.Z)(t);
                  return window.open(null != e ? e : void 0);
                },
                fullWidth: !0,
                ...s,
                children: a.intl.string(a.t["I6JG4+"]),
              },
              "play-activity",
            )
          : null;
      }
    },
    220779: function (e, t, n) {
      n.d(t, {
        A7: function () {
          return C;
        },
        dE: function () {
          return w;
        },
      }),
        n(47120);
      var r = n(200651),
        i = n(192379),
        l = n(120356),
        o = n.n(l),
        a = n(481060),
        u = n(410030),
        s = n(541716),
        c = n(752305),
        d = n(893718),
        f = n(318766),
        p = n(931651),
        m = n(131704),
        h = n(142550),
        v = n(981631),
        g = n(388032),
        x = n(26858);
      let P = (0, m.kt)({ id: "1", type: v.d4z.DM }),
        E = i.forwardRef(function (e, t) {
          let {
              placeholder: n,
              headerText: i,
              onEnter: l,
              showPopout: s,
              children: c,
              body: d,
              hide: f,
            } = e,
            p = (0, u.ZP)();
          return (0, r.jsx)(a.Popout, {
            align: "right",
            position: "bottom",
            shouldShow: s,
            disablePointerEvents: !1,
            renderPopout: () =>
              (0, r.jsx)(a.ThemeProvider, {
                theme: p,
                children: (e) =>
                  (0, r.jsx)("div", {
                    className: o()([x.reply, e]),
                    ref: t,
                    children: (0, r.jsx)(a.FocusLock, {
                      containerRef: t,
                      children: (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)(a.Text, {
                            variant: "text-xs/bold",
                            className: x.replyHeader,
                            children:
                              null != i ? i : g.intl.string(g.t["/VQax8"]),
                          }),
                          d,
                          (0, r.jsx)(C, {
                            onEnter: (e) => {
                              l(e), f();
                            },
                            placeholder:
                              null != n ? n : g.intl.string(g.t["/VQax8"]),
                          }),
                        ],
                      }),
                    }),
                  }),
              }),
            children: () => c,
          });
        });
      function C(e) {
        let {
            placeholder: t,
            onEnter: n,
            setEditorRef: l,
            showEmojiButton: a = !1,
            renderAttachButton: u,
            autoFocus: f = !0,
            onFocus: p,
            channel: m,
            className: v,
          } = e,
          [g, E] = i.useState(""),
          [C, Z] = i.useState((0, c.JM)("")),
          w = () => {
            E(""), Z((0, c.JM)(""));
          },
          j = s.Ie.ATOMIC_REACTOR_REPLY_INPUT,
          b = i.useRef(null);
        return (0, r.jsx)(d.Z, {
          ref: b,
          placeholder: t,
          editorClassName: v,
          className: o()(x.replyInput, v),
          showRemainingCharsAfterCount: -1,
          allowNewLines: !1,
          maxCharacterCount: h.z,
          channel: null != m ? m : P,
          onChange: (e, t, n) => {
            E(t), Z(n);
          },
          type: a ? { ...j, emojis: { button: !0 } } : j,
          textValue: g,
          richValue: C,
          onSubmit: (e) => {
            let { value: t } = e;
            return t.length > h.z
              ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
              : (n(t),
                w(),
                Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
          },
          setEditorRef: l,
          focused: f,
          onFocus: p,
          disableThemedBackground: !0,
          emojiPickerCloseOnModalOuterClick: !0,
          disabled: !1,
          autoCompletePosition: (() => {
            if (null == b.current) return "top";
            let e = b.current.getBoundingClientRect(),
              t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
          })(),
          renderAttachButton: u,
        });
      }
      let Z = (e, t) => {
          i.useEffect(() => {
            let n = (t) => {
                "Escape" === t.key && e();
              },
              r = (n) => {
                var r;
                null != n.target &&
                  !(null == t
                    ? void 0
                    : null === (r = t.current) || void 0 === r
                      ? void 0
                      : r.contains(null == n ? void 0 : n.target)) &&
                  e();
              };
            return (
              document.addEventListener("keydown", n),
              document.addEventListener("mousedown", r),
              () => {
                document.removeEventListener("keydown", n),
                  document.removeEventListener("mousedown", r);
              }
            );
          }, [e, t]);
        },
        w = (e) => {
          let { onSelectEmoji: t, onClick: n } = e,
            l = (0, u.ZP)(),
            [o, s] = i.useState(!1),
            c = i.useRef(null);
          return (
            Z(() => s(!1), c),
            (0, r.jsx)(a.Popout, {
              align: "right",
              position: "top",
              shouldShow: o,
              disablePointerEvents: !1,
              renderPopout: () =>
                (0, r.jsx)(a.ThemeProvider, {
                  theme: l,
                  children: (e) =>
                    (0, r.jsx)("div", {
                      className: e,
                      ref: c,
                      children: (0, r.jsx)(p.$, {
                        messageId: v.lds,
                        channel: P,
                        closePopout: () => {
                          s(!1);
                        },
                        onSelectEmoji: (e, n, r) => {
                          null != e && (t(e, n, r), s(!1));
                        },
                      }),
                    }),
                }),
              children: () =>
                (0, r.jsx)(a.Tooltip, {
                  text: g.intl.string(g.t.lfIHs7),
                  children: (e) =>
                    (0, r.jsx)("div", {
                      ...e,
                      className: x.reaction,
                      children: (0, r.jsx)(f.Z, {
                        active: !1,
                        tabIndex: 0,
                        onClick: () => {
                          null == n || n(), s(!0);
                        },
                      }),
                    }),
                }),
            })
          );
        };
      t.ZP = (e) => {
        let {
            onInteraction: t,
            showReact: n = !0,
            showReply: l = !0,
            popoutProps: u = {},
          } = e,
          { replyHeaderText: s, replyPlaceholder: c, popoutBody: d } = u,
          [f, p] = i.useState(!1),
          m = i.useRef(null);
        return (
          Z(() => p(!1), m),
          (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)("div", {
              className: x.reactions,
              children: [
                n &&
                  (0, r.jsx)(w, {
                    onSelectEmoji: (e) => {
                      null != e &&
                        t({
                          interactionType: h.L.ReactSubmit,
                          emoji: e,
                          reply: null,
                        });
                    },
                    onClick: () => {
                      t({
                        interactionType: h.L.ReactBegin,
                        emoji: null,
                        reply: null,
                      }),
                        p(!1);
                    },
                  }),
                l &&
                  (0, r.jsx)(E, {
                    hide: () => p(!1),
                    ref: m,
                    headerText: s,
                    placeholder: c,
                    showPopout: f,
                    body: d,
                    onEnter: (e) => {
                      t({
                        interactionType: h.L.ReplySubmit,
                        emoji: null,
                        reply: e,
                      });
                    },
                    children: (0, r.jsx)(a.Tooltip, {
                      text: g.intl.string(g.t["5IEsGx"]),
                      children: (e) =>
                        (0, r.jsx)("button", {
                          ...e,
                          className: o()(x.reaction, x.emojiButton),
                          onClick: () => {
                            t({
                              interactionType: h.L.ReplyBegin,
                              emoji: null,
                              reply: null,
                            }),
                              p(!0);
                          },
                          children: (0, r.jsx)(a.ArrowAngleLeftUpIcon, {}),
                        }),
                    }),
                  }),
              ],
            }),
          })
        );
      };
    },
    142550: function (e, t, n) {
      var r, i;
      n.d(t, {
        L: function () {
          return r;
        },
        z: function () {
          return l;
        },
      });
      let l = 200;
      ((i = r || (r = {})).ReactBegin = "React Begin"),
        (i.ReplyBegin = "Reply Begin"),
        (i.ReactSubmit = "React Submit"),
        (i.ReplySubmit = "Reply Submit"),
        (i.ReactSend = "React Send"),
        (i.ReplySend = "Reply Send");
    },
    55e3: function (e, t, n) {
      var r, i;
      n.d(t, {
        Cv: function () {
          return h;
        },
        En: function () {
          return l;
        },
        Nv: function () {
          return c;
        },
        SG: function () {
          return s;
        },
        W3: function () {
          return r;
        },
        dI: function () {
          return o;
        },
        ee: function () {
          return m;
        },
        ez: function () {
          return d;
        },
        o3: function () {
          return a;
        },
        sB: function () {
          return u;
        },
        sp: function () {
          return p;
        },
        vS: function () {
          return f;
        },
      });
      let l = 348,
        o = 88;
      ((i = r || (r = {})).AssetImage = "AssetImage"),
        (i.ApplicationImage = "ApplicationImage"),
        (i.Platform = "Platform"),
        (i.StreamPreview = "StreamPreview"),
        (i.HangStatus = "HangStatus");
      let a = 12,
        u = 12,
        s = 24,
        c = 16,
        d = 24,
        f = 64,
        p = 335,
        m = 310,
        h =
          "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm6.81 7c-.54 0-1 .26-1.23.61A1 1 0 0 1 8.92 8.5 3.49 3.49 0 0 1 11.82 7c1.81 0 3.43 1.38 3.43 3.25 0 1.45-.98 2.61-2.27 3.06a1 1 0 0 1-1.96.37l-.19-1a1 1 0 0 1 .98-1.18c.87 0 1.44-.63 1.44-1.25S12.68 9 11.81 9ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z";
    },
    201133: function (e, t, n) {
      n.d(t, {
        B: function () {
          return v;
        },
        a: function () {
          return h;
        },
      }),
        n(411104);
      var r = n(570140),
        i = n(493683),
        l = n(957730),
        o = n(222677),
        a = n(995774),
        u = n(314897),
        s = n(592125),
        c = n(703558),
        d = n(62817),
        f = n(960048);
      let p = (e) => {
          let t = d.Z.getFiles(e)[0];
          return null == d.Z.getMessageForFile(t.id)
            ? (f.Z.addBreadcrumb({ message: "No message found for upload" }),
              Promise.reject())
            : new Promise((e, n) => {
                let i = (l) => {
                  l.file.id === t.id &&
                    (r.Z.unsubscribe("UPLOAD_COMPLETE", i),
                    r.Z.unsubscribe("UPLOAD_FAIL", i),
                    "UPLOAD_COMPLETE" === l.type
                      ? e(l.messageRecord)
                      : n(Error("Upload failed")));
                };
                r.Z.subscribe("UPLOAD_COMPLETE", i),
                  r.Z.subscribe("UPLOAD_FAIL", i);
              });
        },
        m = async function (e, t) {
          var r;
          let i =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0,
            d = s.Z.getChannel(t);
          if (((r = u.default.getToken()), l.ZP.parse(d, ""), i));
          else {
            if (null == s.Z.getChannel(t))
              throw Error(
                "AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(
                  t,
                ),
              );
            {
              let r = n(966390).Z;
              (e.description = o),
                await r.uploadFiles({
                  channelId: t,
                  uploads: [e],
                  draftType: c.d.ChannelMessage,
                  parsedMessage: a,
                });
            }
          }
        },
        h = async (e) => {
          let {
              file: t,
              reaction: n,
              user: r,
              altText: l,
              requireConfirmation: u = !1,
            } = e,
            s = await i.Z.openPrivateChannel(r.id, !1, !1);
          m(t, s, u, l);
          let c = await p(s);
          if (null != c) {
            let e = (0, a.g1)(n);
            await (0, o.rU)(s, c.id, e);
          }
        },
        v = (e) => {
          let {
              file: t,
              reply: n,
              channel: r,
              altText: i,
              requireConfirmation: o = !1,
            } = e,
            a = l.ZP.parse(r, n);
          return m(t, r.id, o, i, a);
        };
    },
    665672: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(512722),
        i = n.n(r);
      function l(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class o {
        setExporter(e) {
          this.exporter = e;
        }
        export(e) {
          i()(
            null != this.exporter,
            "DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.",
          );
          let t = this.canvas.getCanvasForExport();
          return (
            i()(null != t, "DiscordCanvas: Couldn't get a canvas for export."),
            this.exporter.exportCanvas(t, e)
          );
        }
        constructor(e, t) {
          l(this, "canvas", void 0),
            l(this, "exporter", void 0),
            (this.canvas = e),
            (this.exporter = t);
        }
      }
    },
    97008: function (e, t, n) {
      n(411104);
      var r = n(141795),
        i = n(476326),
        l = n(956664),
        o = n(693824);
      t.Z = class e {
        toDataUrl(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "png",
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1;
          return e.toDataURL(t, n);
        }
        async exportCanvas(e, t) {
          let {
            format: n,
            fileType: a = "png",
            quality: u = 1,
            fileName: s,
          } = t;
          if (n === o.kH.Base64) return this.toDataUrl(e, a, u);
          if (n === o.kH.Blob) {
            let t = this.toDataUrl(e, a, u);
            return (0, l.kD)(t);
          }
          if (n === o.kH.File) {
            let t = this.toDataUrl(e, a, u);
            return await (0, l.Bo)(t, s, "image/png");
          }
          if (n === o.kH.CloudUpload) {
            let { channelId: n } = t,
              o = this.toDataUrl(e, a, u),
              c = await (0, l.Bo)(o, s, "image/png");
            return new r.n({ file: c, platform: i.ow.WEB, isThumbnail: !1 }, n);
          }
          throw Error(
            "DiscordCanvas: ".concat(n, " is not a valid export format."),
          );
        }
      };
    },
    690725: function (e, t, n) {
      n.d(t, {
        f: function () {
          return l;
        },
      }),
        n(411104);
      var r = n(4646),
        i = n(665672);
      async function l(e) {
        let { assetsToLoad: t, drawImage: l, exportConfigs: o } = e,
          a = await (0, r.k2)(t);
        await a.loadFonts();
        {
          let e = n(503082).Z,
            t = n(97008).Z,
            r = document.createElement("canvas"),
            u = new e(r, a),
            s = new t(),
            c = new i.Z(u, s);
          l(c.canvas);
          let d = await c.export(o);
          return r.remove(), d;
        }
      }
    },
    871118: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      });
      var r = n(200651),
        i = n(192379),
        l = n(120356),
        o = n.n(l),
        a = n(442837),
        u = n(481060),
        s = n(592125),
        c = n(496675),
        d = n(449605),
        f = n(981631),
        p = n(388032),
        m = n(680809);
      function h(e) {
        let { isLoading: t, noText: n, previewText: i, className: l } = e;
        return (0, r.jsx)("div", {
          className: o()(m.emptyPreviewContainer, l),
          children: t
            ? (0, r.jsx)(u.Spinner, {})
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("div", { className: m.emptyPreviewImage }),
                  n
                    ? null
                    : (0, r.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        className: m.emptyPreviewText,
                        children: null != i ? i : p.intl.string(p.t.uQZTBQ),
                      }),
                ],
              }),
        });
      }
      function v(e) {
        let { stream: t, className: n, noText: l = !1 } = e,
          o = (0, a.e7)([s.Z], () => s.Z.getBasicChannel(t.channelId)),
          u = (0, a.e7)(
            [c.Z],
            () => null != o && c.Z.canBasicChannel(f.S7T.CONNECT, o),
          ),
          { previewUrl: v, isLoading: g } = (0, d.Z)(
            t.guildId,
            t.channelId,
            t.ownerId,
          ),
          x = i.useRef(g ? null : v);
        i.useEffect(() => {
          !g && (x.current = v);
        }, [v, g]);
        let P = null == v || g ? x.current : v;
        return null == P
          ? (0, r.jsx)(h, {
              className: n,
              isLoading: g,
              noText: l,
              previewText: u ? void 0 : p.intl.string(p.t.pgUTZG),
            })
          : (0, r.jsx)("div", {
              className: n,
              children: (0, r.jsx)("img", {
                src: P,
                alt: "",
                className: m.image,
              }),
            });
      }
    },
    62817: function (e, t, n) {
      n(47120), n(177593);
      var r,
        i,
        l,
        o,
        a = n(442837),
        u = n(570140),
        s = n(375954);
      let c = Object.freeze([]),
        d = {},
        f = {},
        p = {},
        m = {},
        h = {};
      function v(e, t) {}
      function g() {
        h = {};
      }
      function x(e, t) {
        let n = d[e];
        return (
          null != n &&
          ((d[e] = n.filter((e) => e.id !== t)),
          delete f[t],
          delete p[t],
          n.length !== d[e].length)
        );
      }
      function P(e, t) {
        let n = d[e];
        if (null == n) return !1;
        d[e] = n.map((e) => (e.id === t.id ? { ...e, ...t } : e));
        let r = p[t.id];
        null != r && null != m[r.id] && (m[r.id] = { ...m[r.id], ...t });
      }
      class E extends (r = a.ZP.Store) {
        initialize() {
          this.waitFor(s.Z);
        }
        getFiles(e) {
          var t;
          return null !== (t = d[e]) && void 0 !== t ? t : c;
        }
        getMessageForFile(e) {
          return p[e];
        }
        getUploaderFileForMessageId(e) {
          return m[e];
        }
        getUploadAttachments(e) {
          if (null != e) return h[e];
        }
      }
      (o = "UploadStore"),
        (l = "displayName") in (i = E)
          ? Object.defineProperty(i, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = o),
        (t.Z = new E(u.Z, {
          CONNECTION_OPEN: function () {
            h = {};
          },
          LOGOUT: function () {
            h = {};
          },
          UPLOAD_START: function (e) {
            var t;
            let { channelId: n, file: r, uploader: i, message: l } = e;
            if (i._aborted || i._errored) return;
            let o = null !== (t = d[n]) && void 0 !== t ? t : c;
            (f[r.id] = i), (d[n] = [...o, r]), (p[r.id] = l);
            let { items: a } = r;
            null != a && (m[l.id] = { ...r, items: a }), v(l.nonce, r);
          },
          UPLOAD_COMPRESSION_PROGRESS: function (e) {
            let { channelId: t, file: n } = e;
            P(t, n);
          },
          UPLOAD_PROGRESS: function (e) {
            let { channelId: t, file: n } = e;
            P(t, n);
          },
          UPLOAD_COMPLETE: function (e) {
            let { channelId: t, file: n } = e;
            return x(t, n.id);
          },
          UPLOAD_FAIL: function (e) {
            let { channelId: t, file: n } = e;
            return x(t, n.id);
          },
          UPLOAD_CANCEL_REQUEST: function (e) {
            let { file: t } = e,
              n = f[t.id];
            if (null == n) return !1;
            setImmediate(() => {
              var e;
              return null === (e = n.cancel) || void 0 === e
                ? void 0
                : e.call(n);
            });
          },
          UPLOAD_ITEM_CANCEL_REQUEST: function (e) {
            let { file: t, itemId: n } = e,
              r = f[t.id];
            if (null == r) return !1;
            setImmediate(() => r.cancelItem(n));
          },
          UPLOAD_FILE_UPDATE: function (e) {
            let { channelId: t, file: n } = e,
              r = p[n.id];
            null != r && v(r.nonce, n), P(t, n);
          },
          UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
            let { file: t, messageId: n } = e;
            m[n] = t;
          },
        }));
    },
  },
]);
//# sourceMappingURL=456f759b59482a97cf96.js.map
