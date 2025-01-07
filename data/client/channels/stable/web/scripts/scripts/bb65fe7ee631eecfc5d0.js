"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86778"],
  {
    915863: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(120356),
        r = t.n(i),
        o = t(481060),
        a = t(472113);
      function u(e) {
        let { className: n, size: t, ...i } = e;
        return (0, l.jsx)(o.Button, {
          className: r()(a.button, n),
          size: r()(a.buttonSize, t),
          ...i,
        });
      }
    },
    429589: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return k;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(442837),
        o = t(481060),
        a = t(278323),
        u = t(224706),
        s = t(287734),
        d = t(2052),
        c = t(906732),
        p = t(835473),
        f = t(592745),
        v = t(592125),
        m = t(757266),
        h = t(650774),
        g = t(430824),
        Z = t(283595),
        x = t(496675),
        P = t(699516),
        E = t(944486),
        I = t(594174),
        C = t(979651),
        S = t(181106),
        b = t(417363),
        y = t(358085),
        j = t(804739),
        w = t(317381),
        O = t(638880),
        A = t(255621),
        L = t(16609),
        R = t(452634),
        T = t(527805),
        U = t(620662),
        _ = t(275920),
        N = t(915863),
        D = t(701488),
        F = t(981631),
        M = t(388032);
      function k(e) {
        var n, t;
        let {
            activity: k,
            embeddedActivity: B,
            user: G,
            onAction: H,
            isEmbedded: J = !1,
            ButtonComponent: z = N.Z,
            ...Q
          } = e,
          { analyticsLocations: V } = (0, c.ZP)(),
          [W, q] = i.useState(!1),
          Y = (0, r.e7)([I.default], () => I.default.getCurrentUser()),
          K = G.id === (null == Y ? void 0 : Y.id),
          $ =
            null !== (n = null == B ? void 0 : B.applicationId) && void 0 !== n
              ? n
              : null == k
                ? void 0
                : k.application_id,
          X = (0, R.Z)({
            channelId: (0, L.p)(null == B ? void 0 : B.location),
            userId: G.id,
            activity: k,
          }),
          ee = (0, r.e7)(
            [Z.Z, f.Z, b.Z, m.Z],
            () =>
              J ||
              (null != $ &&
                (0, j.t)({
                  LibraryApplicationStore: Z.Z,
                  LaunchableGameStore: f.Z,
                  DispatchApplicationStore: b.Z,
                  ConnectedAppsStore: m.Z,
                  applicationId: $,
                })),
          ),
          en = (0, r.e7)([w.ZP], () =>
            Array.from(w.ZP.getSelfEmbeddedActivities().values()).some((e) => {
              let { applicationId: n, location: t } = e;
              return (
                (n === (null == k ? void 0 : k.application_id) ||
                  n === (null == B ? void 0 : B.applicationId)) &&
                (0, L.p)(t) === X
              );
            }),
          ),
          et = (0, r.e7)(
            [S.Z],
            () =>
              null != k &&
              null != k.application_id &&
              S.Z.getState(k.application_id, F.mFx.JOIN) === F.OcF.LOADING,
          ),
          [el] = (0, p.Z)(
            (null == B ? void 0 : B.applicationId) != null
              ? [null == B ? void 0 : B.applicationId]
              : (null == k ? void 0 : k.application_id) != null
                ? [null == k ? void 0 : k.application_id]
                : [],
          ),
          ei = (0, T.s5)({
            userId: G.id,
            activity: k,
            channelId: X,
            application: el,
          }),
          er = (0, r.e7)([v.Z, g.Z, h.Z, P.Z, E.Z, C.Z, x.Z], () =>
            null != B
              ? ei === T.Fw.CAN_JOIN
              : null != k
                ? (0, A.Z)({
                    user: G,
                    activity: k,
                    application: el,
                    channelId: X,
                    currentUser: Y,
                    isEmbedded: J,
                    ChannelStore: v.Z,
                    GuildStore: g.Z,
                    GuildMemberCountStore: h.Z,
                    RelationshipStore: P.Z,
                    SelectedChannelStore: E.Z,
                    VoiceStateStore: C.Z,
                    PermissionStore: x.Z,
                  })
                : void 0,
          ),
          eo = (0, r.e7)([w.ZP], () =>
            Array.from(w.ZP.getSelfEmbeddedActivities().values()).some(
              (e) =>
                e.applicationId === (null == B ? void 0 : B.applicationId) &&
                e.location.id === (null == B ? void 0 : B.location.id),
            ),
          ),
          ea = (0, d.O)(),
          eu = !y.isPlatformEmbedded;
        if (!((0, U.Z)(k, F.xjy.JOIN) || J) || null == $) return null;
        let es = !K || (J && !eo),
          ed = es && (eu || ee) && !W && !en && (!J || er),
          ec = null;
        es
          ? !eu &&
            !ee &&
            null != k &&
            (ec = M.intl.formatToPlainString(M.t.SqJBnJ, { name: k.name }))
          : (ec = M.intl.string(M.t["0OiwfH"]));
        let ep =
            null !== (t = null == B ? void 0 : B.launchId) && void 0 !== t
              ? t
              : null == k
                ? void 0
                : k.session_id,
          ef = async (e, n) => {
            var t, l;
            if (null == ep || null == $) return;
            let i = (0, U.Z)(n, F.xjy.EMBEDDED),
              r = E.Z.getVoiceChannelId(),
              o = v.Z.getChannel(r);
            await u.Z.join({
              userId: e.id,
              sessionId: ep,
              applicationId: $,
              channelId: r,
              messageId: null,
              intent: D.Ws.PLAY,
              embedded: i,
              partyId:
                null != n
                  ? null == n
                    ? void 0
                    : null === (t = n.party) || void 0 === t
                      ? void 0
                      : t.id
                  : "",
              locationObject: ea.location,
              analyticsLocations: V,
            }),
              !i &&
                (0, _.Z)({
                  type: F.q5t.JOIN,
                  userId: e.id,
                  guildId: null == o ? void 0 : o.guild_id,
                  channelId: r,
                  channelType: null == o ? void 0 : o.type,
                  applicationId: $,
                  partyId:
                    null != n
                      ? null == n
                        ? void 0
                        : null === (l = n.party) || void 0 === l
                          ? void 0
                          : l.id
                      : "",
                  locationObject: ea.location,
                  analyticsLocations: V,
                });
          },
          ev = async () => {
            let e = !1;
            if (J) {
              if (!er || null == X || null == $) return;
              e = await (0, O.Z)({
                applicationId: $,
                activityChannelId: X,
                locationObject: ea.location,
                analyticsLocations: V,
              });
            }
            if (!e) {
              let e;
              if (er) {
                null == H || H(), ef(G, k);
                return;
              }
              q(!0),
                null != k &&
                  (e = await a.Z.sendActivityInviteUser({
                    type: F.mFx.JOIN_REQUEST,
                    userId: G.id,
                    activity: k,
                    location: F.Sbl.PROFILE_POPOUT,
                  })),
                null != e && s.default.selectPrivateChannel(e.id);
            }
          },
          em = er ? M.intl.string(M.t.VJlc0d) : M.intl.string(M.t.OKsSCQ);
        return (
          J && (em = M.intl.string(M.t["4i2vj4"])),
          eo && (em = M.intl.string(M.t.DPfdsr)),
          (0, l.jsx)(
            o.Tooltip,
            {
              text: ec,
              children: (e) => {
                let { onMouseEnter: n, onMouseLeave: t } = e;
                return (0, l.jsx)(z, {
                  onClick: ev,
                  onMouseEnter: n,
                  onMouseLeave: t,
                  disabled: !ed,
                  submitting: et,
                  fullWidth: !0,
                  ...Q,
                  children: em,
                });
              },
            },
            "join",
          )
        );
      }
    },
    757182: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(655922),
        r = t(420660),
        o = t(915863),
        a = t(388032);
      function u(e) {
        let { activity: n, onAction: t, ButtonComponent: u = o.Z, ...s } = e;
        return (0, r.Z)(n)
          ? (0, l.jsx)(
              u,
              {
                onClick: () => {
                  null == t || t();
                  let e = (0, i.Z)(n);
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
    220779: function (e, n, t) {
      t.d(n, {
        A7: function () {
          return E;
        },
        dE: function () {
          return C;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        o = t.n(r),
        a = t(481060),
        u = t(410030),
        s = t(541716),
        d = t(752305),
        c = t(893718),
        p = t(318766),
        f = t(931651),
        v = t(131704),
        m = t(142550),
        h = t(981631),
        g = t(388032),
        Z = t(26858);
      let x = (0, v.kt)({ id: "1", type: h.d4z.DM }),
        P = i.forwardRef(function (e, n) {
          let {
              placeholder: t,
              headerText: i,
              onEnter: r,
              showPopout: s,
              children: d,
              body: c,
              hide: p,
            } = e,
            f = (0, u.ZP)();
          return (0, l.jsx)(a.Popout, {
            align: "right",
            position: "bottom",
            shouldShow: s,
            disablePointerEvents: !1,
            renderPopout: () =>
              (0, l.jsx)(a.ThemeProvider, {
                theme: f,
                children: (e) =>
                  (0, l.jsx)("div", {
                    className: o()([Z.reply, e]),
                    ref: n,
                    children: (0, l.jsx)(a.FocusLock, {
                      containerRef: n,
                      children: (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)(a.Text, {
                            variant: "text-xs/bold",
                            className: Z.replyHeader,
                            children:
                              null != i ? i : g.intl.string(g.t["/VQax8"]),
                          }),
                          c,
                          (0, l.jsx)(E, {
                            onEnter: (e) => {
                              r(e), p();
                            },
                            placeholder:
                              null != t ? t : g.intl.string(g.t["/VQax8"]),
                          }),
                        ],
                      }),
                    }),
                  }),
              }),
            children: () => d,
          });
        });
      function E(e) {
        let {
            placeholder: n,
            onEnter: t,
            setEditorRef: r,
            showEmojiButton: a = !1,
            renderAttachButton: u,
            autoFocus: p = !0,
            onFocus: f,
            channel: v,
            className: h,
          } = e,
          [g, P] = i.useState(""),
          [E, I] = i.useState((0, d.JM)("")),
          C = () => {
            P(""), I((0, d.JM)(""));
          },
          S = s.Ie.ATOMIC_REACTOR_REPLY_INPUT,
          b = i.useRef(null);
        return (0, l.jsx)(c.Z, {
          ref: b,
          placeholder: n,
          editorClassName: h,
          className: o()(Z.replyInput, h),
          showRemainingCharsAfterCount: -1,
          allowNewLines: !1,
          maxCharacterCount: m.z,
          channel: null != v ? v : x,
          onChange: (e, n, t) => {
            P(n), I(t);
          },
          type: a ? { ...S, emojis: { button: !0 } } : S,
          textValue: g,
          richValue: E,
          onSubmit: (e) => {
            let { value: n } = e;
            return n.length > m.z
              ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
              : (t(n),
                C(),
                Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
          },
          setEditorRef: r,
          focused: p,
          onFocus: f,
          disableThemedBackground: !0,
          emojiPickerCloseOnModalOuterClick: !0,
          disabled: !1,
          autoCompletePosition: (() => {
            if (null == b.current) return "top";
            let e = b.current.getBoundingClientRect(),
              n = window.innerHeight;
            return e.top < n / 2 ? "bottom" : "top";
          })(),
          renderAttachButton: u,
        });
      }
      let I = (e, n) => {
          i.useEffect(() => {
            let t = (n) => {
                "Escape" === n.key && e();
              },
              l = (t) => {
                var l;
                null != t.target &&
                  !(null == n
                    ? void 0
                    : null === (l = n.current) || void 0 === l
                      ? void 0
                      : l.contains(null == t ? void 0 : t.target)) &&
                  e();
              };
            return (
              document.addEventListener("keydown", t),
              document.addEventListener("mousedown", l),
              () => {
                document.removeEventListener("keydown", t),
                  document.removeEventListener("mousedown", l);
              }
            );
          }, [e, n]);
        },
        C = (e) => {
          let { onSelectEmoji: n, onClick: t } = e,
            r = (0, u.ZP)(),
            [o, s] = i.useState(!1),
            d = i.useRef(null);
          return (
            I(() => s(!1), d),
            (0, l.jsx)(a.Popout, {
              align: "right",
              position: "top",
              shouldShow: o,
              disablePointerEvents: !1,
              renderPopout: () =>
                (0, l.jsx)(a.ThemeProvider, {
                  theme: r,
                  children: (e) =>
                    (0, l.jsx)("div", {
                      className: e,
                      ref: d,
                      children: (0, l.jsx)(f.$, {
                        messageId: h.lds,
                        channel: x,
                        closePopout: () => {
                          s(!1);
                        },
                        onSelectEmoji: (e, t, l) => {
                          null != e && (n(e, t, l), s(!1));
                        },
                      }),
                    }),
                }),
              children: () =>
                (0, l.jsx)(a.Tooltip, {
                  text: g.intl.string(g.t.lfIHs7),
                  children: (e) =>
                    (0, l.jsx)("div", {
                      ...e,
                      className: Z.reaction,
                      children: (0, l.jsx)(p.Z, {
                        active: !1,
                        tabIndex: 0,
                        onClick: () => {
                          null == t || t(), s(!0);
                        },
                      }),
                    }),
                }),
            })
          );
        };
      n.ZP = (e) => {
        let {
            onInteraction: n,
            showReact: t = !0,
            showReply: r = !0,
            popoutProps: u = {},
          } = e,
          { replyHeaderText: s, replyPlaceholder: d, popoutBody: c } = u,
          [p, f] = i.useState(!1),
          v = i.useRef(null);
        return (
          I(() => f(!1), v),
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("div", {
              className: Z.reactions,
              children: [
                t &&
                  (0, l.jsx)(C, {
                    onSelectEmoji: (e) => {
                      null != e &&
                        n({
                          interactionType: m.L.ReactSubmit,
                          emoji: e,
                          reply: null,
                        });
                    },
                    onClick: () => {
                      n({
                        interactionType: m.L.ReactBegin,
                        emoji: null,
                        reply: null,
                      }),
                        f(!1);
                    },
                  }),
                r &&
                  (0, l.jsx)(P, {
                    hide: () => f(!1),
                    ref: v,
                    headerText: s,
                    placeholder: d,
                    showPopout: p,
                    body: c,
                    onEnter: (e) => {
                      n({
                        interactionType: m.L.ReplySubmit,
                        emoji: null,
                        reply: e,
                      });
                    },
                    children: (0, l.jsx)(a.Tooltip, {
                      text: g.intl.string(g.t["5IEsGx"]),
                      children: (e) =>
                        (0, l.jsx)("button", {
                          ...e,
                          className: o()(Z.reaction, Z.emojiButton),
                          onClick: () => {
                            n({
                              interactionType: m.L.ReplyBegin,
                              emoji: null,
                              reply: null,
                            }),
                              f(!0);
                          },
                          children: (0, l.jsx)(a.ArrowAngleLeftUpIcon, {}),
                        }),
                    }),
                  }),
              ],
            }),
          })
        );
      };
    },
    142550: function (e, n, t) {
      var l, i;
      t.d(n, {
        L: function () {
          return l;
        },
        z: function () {
          return r;
        },
      });
      let r = 200;
      ((i = l || (l = {})).ReactBegin = "React Begin"),
        (i.ReplyBegin = "Reply Begin"),
        (i.ReactSubmit = "React Submit"),
        (i.ReplySubmit = "Reply Submit"),
        (i.ReactSend = "React Send"),
        (i.ReplySend = "Reply Send");
    },
    55e3: function (e, n, t) {
      var l, i;
      t.d(n, {
        Cv: function () {
          return m;
        },
        En: function () {
          return r;
        },
        Nv: function () {
          return d;
        },
        SG: function () {
          return s;
        },
        W3: function () {
          return l;
        },
        dI: function () {
          return o;
        },
        ee: function () {
          return v;
        },
        ez: function () {
          return c;
        },
        o3: function () {
          return a;
        },
        sB: function () {
          return u;
        },
        sp: function () {
          return f;
        },
        vS: function () {
          return p;
        },
      });
      let r = 348,
        o = 88;
      ((i = l || (l = {})).AssetImage = "AssetImage"),
        (i.ApplicationImage = "ApplicationImage"),
        (i.Platform = "Platform"),
        (i.StreamPreview = "StreamPreview"),
        (i.HangStatus = "HangStatus");
      let a = 12,
        u = 12,
        s = 24,
        d = 16,
        c = 24,
        p = 64,
        f = 335,
        v = 310,
        m =
          "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm6.81 7c-.54 0-1 .26-1.23.61A1 1 0 0 1 8.92 8.5 3.49 3.49 0 0 1 11.82 7c1.81 0 3.43 1.38 3.43 3.25 0 1.45-.98 2.61-2.27 3.06a1 1 0 0 1-1.96.37l-.19-1a1 1 0 0 1 .98-1.18c.87 0 1.44-.63 1.44-1.25S12.68 9 11.81 9ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z";
    },
    201133: function (e, n, t) {
      t.d(n, {
        B: function () {
          return h;
        },
        a: function () {
          return m;
        },
      }),
        t(411104);
      var l = t(570140),
        i = t(493683),
        r = t(957730),
        o = t(222677),
        a = t(995774),
        u = t(314897),
        s = t(592125),
        d = t(703558),
        c = t(62817),
        p = t(960048);
      let f = (e) => {
          let n = c.Z.getFiles(e)[0];
          return null == c.Z.getMessageForFile(n.id)
            ? (p.Z.addBreadcrumb({ message: "No message found for upload" }),
              Promise.reject())
            : new Promise((e, t) => {
                let i = (r) => {
                  r.file.id === n.id &&
                    (l.Z.unsubscribe("UPLOAD_COMPLETE", i),
                    l.Z.unsubscribe("UPLOAD_FAIL", i),
                    "UPLOAD_COMPLETE" === r.type
                      ? e(r.messageRecord)
                      : t(Error("Upload failed")));
                };
                l.Z.subscribe("UPLOAD_COMPLETE", i),
                  l.Z.subscribe("UPLOAD_FAIL", i);
              });
        },
        v = async function (e, n) {
          var l;
          let i =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0,
            c = s.Z.getChannel(n);
          if (((l = u.default.getToken()), r.ZP.parse(c, ""), i));
          else {
            if (null == s.Z.getChannel(n))
              throw Error(
                "AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(
                  n,
                ),
              );
            {
              let l = t(966390).Z;
              (e.description = o),
                await l.uploadFiles({
                  channelId: n,
                  uploads: [e],
                  draftType: d.d.ChannelMessage,
                  parsedMessage: a,
                });
            }
          }
        },
        m = async (e) => {
          let {
              file: n,
              reaction: t,
              user: l,
              altText: r,
              requireConfirmation: u = !1,
            } = e,
            s = await i.Z.openPrivateChannel(l.id, !1, !1);
          v(n, s, u, r);
          let d = await f(s);
          if (null != d) {
            let e = (0, a.g1)(t);
            await (0, o.rU)(s, d.id, e);
          }
        },
        h = (e) => {
          let {
              file: n,
              reply: t,
              channel: l,
              altText: i,
              requireConfirmation: o = !1,
            } = e,
            a = r.ZP.parse(l, t);
          return v(n, l.id, o, i, a);
        };
    },
    665672: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var l = t(512722),
        i = t.n(l);
      function r(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
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
          let n = this.canvas.getCanvasForExport();
          return (
            i()(null != n, "DiscordCanvas: Couldn't get a canvas for export."),
            this.exporter.exportCanvas(n, e)
          );
        }
        constructor(e, n) {
          r(this, "canvas", void 0),
            r(this, "exporter", void 0),
            (this.canvas = e),
            (this.exporter = n);
        }
      }
    },
    97008: function (e, n, t) {
      t(411104);
      var l = t(141795),
        i = t(476326),
        r = t(956664),
        o = t(693824);
      n.Z = class e {
        toDataUrl(e) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "png",
            t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1;
          return e.toDataURL(n, t);
        }
        async exportCanvas(e, n) {
          let {
            format: t,
            fileType: a = "png",
            quality: u = 1,
            fileName: s,
          } = n;
          if (t === o.kH.Base64) return this.toDataUrl(e, a, u);
          if (t === o.kH.Blob) {
            let n = this.toDataUrl(e, a, u);
            return (0, r.kD)(n);
          }
          if (t === o.kH.File) {
            let n = this.toDataUrl(e, a, u);
            return await (0, r.Bo)(n, s, "image/png");
          }
          if (t === o.kH.CloudUpload) {
            let { channelId: t } = n,
              o = this.toDataUrl(e, a, u),
              d = await (0, r.Bo)(o, s, "image/png");
            return new l.n({ file: d, platform: i.ow.WEB, isThumbnail: !1 }, t);
          }
          throw Error(
            "DiscordCanvas: ".concat(t, " is not a valid export format."),
          );
        }
      };
    },
    690725: function (e, n, t) {
      t.d(n, {
        f: function () {
          return r;
        },
      }),
        t(411104);
      var l = t(4646),
        i = t(665672);
      async function r(e) {
        let { assetsToLoad: n, drawImage: r, exportConfigs: o } = e,
          a = await (0, l.k2)(n);
        await a.loadFonts();
        {
          let e = t(503082).Z,
            n = t(97008).Z,
            l = document.createElement("canvas"),
            u = new e(l, a),
            s = new n(),
            d = new i.Z(u, s);
          r(d.canvas);
          let c = await d.export(o);
          return l.remove(), c;
        }
      }
    },
    871118: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        o = t.n(r),
        a = t(442837),
        u = t(481060),
        s = t(592125),
        d = t(496675),
        c = t(449605),
        p = t(981631),
        f = t(388032),
        v = t(680809);
      function m(e) {
        let { isLoading: n, noText: t, previewText: i, className: r } = e;
        return (0, l.jsx)("div", {
          className: o()(v.emptyPreviewContainer, r),
          children: n
            ? (0, l.jsx)(u.Spinner, {})
            : (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)("div", { className: v.emptyPreviewImage }),
                  t
                    ? null
                    : (0, l.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        className: v.emptyPreviewText,
                        children: null != i ? i : f.intl.string(f.t.uQZTBQ),
                      }),
                ],
              }),
        });
      }
      function h(e) {
        let { stream: n, className: t, noText: r = !1 } = e,
          o = (0, a.e7)([s.Z], () => s.Z.getBasicChannel(n.channelId)),
          u = (0, a.e7)(
            [d.Z],
            () => null != o && d.Z.canBasicChannel(p.S7T.CONNECT, o),
          ),
          { previewUrl: h, isLoading: g } = (0, c.Z)(
            n.guildId,
            n.channelId,
            n.ownerId,
          ),
          Z = i.useRef(g ? null : h);
        i.useEffect(() => {
          !g && (Z.current = h);
        }, [h, g]);
        let x = null == h || g ? Z.current : h;
        return null == x
          ? (0, l.jsx)(m, {
              className: t,
              isLoading: g,
              noText: r,
              previewText: u ? void 0 : f.intl.string(f.t.pgUTZG),
            })
          : (0, l.jsx)("div", {
              className: t,
              children: (0, l.jsx)("img", {
                src: x,
                alt: "",
                className: v.image,
              }),
            });
      }
    },
    62817: function (e, n, t) {
      t(47120), t(177593);
      var l,
        i,
        r,
        o,
        a = t(442837),
        u = t(570140),
        s = t(375954);
      let d = Object.freeze([]),
        c = {},
        p = {},
        f = {},
        v = {},
        m = {};
      function h(e, n) {}
      function g() {
        m = {};
      }
      function Z(e, n) {
        let t = c[e];
        return (
          null != t &&
          ((c[e] = t.filter((e) => e.id !== n)),
          delete p[n],
          delete f[n],
          t.length !== c[e].length)
        );
      }
      function x(e, n) {
        let t = c[e];
        if (null == t) return !1;
        c[e] = t.map((e) => (e.id === n.id ? { ...e, ...n } : e));
        let l = f[n.id];
        null != l && null != v[l.id] && (v[l.id] = { ...v[l.id], ...n });
      }
      class P extends (l = a.ZP.Store) {
        initialize() {
          this.waitFor(s.Z);
        }
        getFiles(e) {
          var n;
          return null !== (n = c[e]) && void 0 !== n ? n : d;
        }
        getMessageForFile(e) {
          return f[e];
        }
        getUploaderFileForMessageId(e) {
          return v[e];
        }
        getUploadAttachments(e) {
          if (null != e) return m[e];
        }
      }
      (o = "UploadStore"),
        (r = "displayName") in (i = P)
          ? Object.defineProperty(i, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[r] = o),
        (n.Z = new P(u.Z, {
          CONNECTION_OPEN: function () {
            m = {};
          },
          LOGOUT: function () {
            m = {};
          },
          UPLOAD_START: function (e) {
            var n;
            let { channelId: t, file: l, uploader: i, message: r } = e;
            if (i._aborted || i._errored) return;
            let o = null !== (n = c[t]) && void 0 !== n ? n : d;
            (p[l.id] = i), (c[t] = [...o, l]), (f[l.id] = r);
            let { items: a } = l;
            null != a && (v[r.id] = { ...l, items: a }), h(r.nonce, l);
          },
          UPLOAD_COMPRESSION_PROGRESS: function (e) {
            let { channelId: n, file: t } = e;
            x(n, t);
          },
          UPLOAD_PROGRESS: function (e) {
            let { channelId: n, file: t } = e;
            x(n, t);
          },
          UPLOAD_COMPLETE: function (e) {
            let { channelId: n, file: t } = e;
            return Z(n, t.id);
          },
          UPLOAD_FAIL: function (e) {
            let { channelId: n, file: t } = e;
            return Z(n, t.id);
          },
          UPLOAD_CANCEL_REQUEST: function (e) {
            let { file: n } = e,
              t = p[n.id];
            if (null == t) return !1;
            setImmediate(() => {
              var e;
              return null === (e = t.cancel) || void 0 === e
                ? void 0
                : e.call(t);
            });
          },
          UPLOAD_ITEM_CANCEL_REQUEST: function (e) {
            let { file: n, itemId: t } = e,
              l = p[n.id];
            if (null == l) return !1;
            setImmediate(() => l.cancelItem(t));
          },
          UPLOAD_FILE_UPDATE: function (e) {
            let { channelId: n, file: t } = e,
              l = f[t.id];
            null != l && h(l.nonce, t), x(n, t);
          },
          UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
            let { file: n, messageId: t } = e;
            v[t] = n;
          },
        }));
    },
  },
]);
//# sourceMappingURL=bb65fe7ee631eecfc5d0.js.map
