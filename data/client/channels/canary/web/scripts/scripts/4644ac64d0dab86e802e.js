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
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        o = t(481060),
        a = t(472113);
      function u(e) {
        let { className: n, size: t, ...l } = e;
        return (0, i.jsx)(o.Button, {
          className: r()(a.button, n),
          size: r()(a.buttonSize, t),
          ...l,
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
      var i = t(200651),
        l = t(192379),
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
        I = t(944486),
        E = t(594174),
        S = t(979651),
        C = t(181106),
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
          [W, q] = l.useState(!1),
          Y = (0, r.e7)([E.default], () => E.default.getCurrentUser()),
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
            [C.Z],
            () =>
              null != k &&
              null != k.application_id &&
              C.Z.getState(k.application_id, F.mFx.JOIN) === F.OcF.LOADING,
          ),
          [ei] = (0, p.Z)(
            (null == B ? void 0 : B.applicationId) != null
              ? [null == B ? void 0 : B.applicationId]
              : (null == k ? void 0 : k.application_id) != null
                ? [null == k ? void 0 : k.application_id]
                : [],
          ),
          el = (0, T.s5)({
            userId: G.id,
            activity: k,
            channelId: X,
            application: ei,
          }),
          er = (0, r.e7)([v.Z, g.Z, h.Z, P.Z, I.Z, S.Z, x.Z], () =>
            null != B
              ? el === T.Fw.CAN_JOIN
              : null != k
                ? (0, A.Z)({
                    user: G,
                    activity: k,
                    application: ei,
                    channelId: X,
                    currentUser: Y,
                    isEmbedded: J,
                    ChannelStore: v.Z,
                    GuildStore: g.Z,
                    GuildMemberCountStore: h.Z,
                    RelationshipStore: P.Z,
                    SelectedChannelStore: I.Z,
                    VoiceStateStore: S.Z,
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
            var t, i;
            if (null == ep || null == $) return;
            let l = (0, U.Z)(n, F.xjy.EMBEDDED),
              r = I.Z.getVoiceChannelId(),
              o = v.Z.getChannel(r);
            await u.Z.join({
              userId: e.id,
              sessionId: ep,
              applicationId: $,
              channelId: r,
              messageId: null,
              intent: D.Ws.PLAY,
              embedded: l,
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
              !l &&
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
                        : null === (i = n.party) || void 0 === i
                          ? void 0
                          : i.id
                      : "",
                  locationObject: ea.location,
                  analyticsLocations: V,
                });
          },
          ev = async () => {
            let e = !1;
            if (J) {
              if (!er || null == $) return;
              e = await (0, O.Z)({
                applicationId: $,
                activityChannelId: X,
                locationObject: ea.location,
                analyticsLocations: V,
                joinUserId: G.id,
                joinSessionId: null == k ? void 0 : k.session_id,
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
          (0, i.jsx)(
            o.Tooltip,
            {
              text: ec,
              children: (e) => {
                let { onMouseEnter: n, onMouseLeave: t } = e;
                return (0, i.jsx)(z, {
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
      var i = t(200651);
      t(192379);
      var l = t(655922),
        r = t(420660),
        o = t(915863),
        a = t(388032);
      function u(e) {
        let { activity: n, onAction: t, ButtonComponent: u = o.Z, ...s } = e;
        return (0, r.Z)(n)
          ? (0, i.jsx)(
              u,
              {
                onClick: () => {
                  null == t || t();
                  let e = (0, l.Z)(n);
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
          return I;
        },
        dE: function () {
          return S;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
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
        P = l.forwardRef(function (e, n) {
          let {
              placeholder: t,
              headerText: l,
              onEnter: r,
              showPopout: s,
              children: d,
              body: c,
              hide: p,
            } = e,
            f = (0, u.ZP)();
          return (0, i.jsx)(a.Popout, {
            align: "right",
            position: "bottom",
            shouldShow: s,
            disablePointerEvents: !1,
            renderPopout: () =>
              (0, i.jsx)(a.ThemeProvider, {
                theme: f,
                children: (e) =>
                  (0, i.jsx)("div", {
                    className: o()([Z.reply, e]),
                    ref: n,
                    children: (0, i.jsx)(a.FocusLock, {
                      containerRef: n,
                      children: (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)(a.Text, {
                            variant: "text-xs/bold",
                            className: Z.replyHeader,
                            children:
                              null != l ? l : g.intl.string(g.t["/VQax8"]),
                          }),
                          c,
                          (0, i.jsx)(I, {
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
      function I(e) {
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
          [g, P] = l.useState(""),
          [I, E] = l.useState((0, d.JM)("")),
          S = () => {
            P(""), E((0, d.JM)(""));
          },
          C = s.Ie.ATOMIC_REACTOR_REPLY_INPUT,
          b = l.useRef(null);
        return (0, i.jsx)(c.Z, {
          ref: b,
          placeholder: n,
          editorClassName: h,
          className: o()(Z.replyInput, h),
          showRemainingCharsAfterCount: -1,
          allowNewLines: !1,
          maxCharacterCount: m.z,
          channel: null != v ? v : x,
          onChange: (e, n, t) => {
            P(n), E(t);
          },
          type: a ? { ...C, emojis: { button: !0 } } : C,
          textValue: g,
          richValue: I,
          onSubmit: (e) => {
            let { value: n } = e;
            return n.length > m.z
              ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
              : (t(n),
                S(),
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
      let E = (e, n) => {
          l.useEffect(() => {
            let t = (n) => {
                "Escape" === n.key && e();
              },
              i = (t) => {
                var i;
                null != t.target &&
                  !(null == n
                    ? void 0
                    : null === (i = n.current) || void 0 === i
                      ? void 0
                      : i.contains(null == t ? void 0 : t.target)) &&
                  e();
              };
            return (
              document.addEventListener("keydown", t),
              document.addEventListener("mousedown", i),
              () => {
                document.removeEventListener("keydown", t),
                  document.removeEventListener("mousedown", i);
              }
            );
          }, [e, n]);
        },
        S = (e) => {
          let { onSelectEmoji: n, onClick: t } = e,
            r = (0, u.ZP)(),
            [o, s] = l.useState(!1),
            d = l.useRef(null);
          return (
            E(() => s(!1), d),
            (0, i.jsx)(a.Popout, {
              align: "right",
              position: "top",
              shouldShow: o,
              disablePointerEvents: !1,
              renderPopout: () =>
                (0, i.jsx)(a.ThemeProvider, {
                  theme: r,
                  children: (e) =>
                    (0, i.jsx)("div", {
                      className: e,
                      ref: d,
                      children: (0, i.jsx)(f.$, {
                        messageId: h.lds,
                        channel: x,
                        closePopout: () => {
                          s(!1);
                        },
                        onSelectEmoji: (e, t, i) => {
                          null != e && (n(e, t, i), s(!1));
                        },
                      }),
                    }),
                }),
              children: () =>
                (0, i.jsx)(a.Tooltip, {
                  text: g.intl.string(g.t.lfIHs7),
                  children: (e) =>
                    (0, i.jsx)("div", {
                      ...e,
                      className: Z.reaction,
                      children: (0, i.jsx)(p.Z, {
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
          [p, f] = l.useState(!1),
          v = l.useRef(null);
        return (
          E(() => f(!1), v),
          (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("div", {
              className: Z.reactions,
              children: [
                t &&
                  (0, i.jsx)(S, {
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
                  (0, i.jsx)(P, {
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
                    children: (0, i.jsx)(a.Tooltip, {
                      text: g.intl.string(g.t["5IEsGx"]),
                      children: (e) =>
                        (0, i.jsx)("button", {
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
                          children: (0, i.jsx)(a.ArrowAngleLeftUpIcon, {}),
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
      var i, l;
      t.d(n, {
        L: function () {
          return i;
        },
        z: function () {
          return r;
        },
      });
      let r = 200;
      ((l = i || (i = {})).ReactBegin = "React Begin"),
        (l.ReplyBegin = "Reply Begin"),
        (l.ReactSubmit = "React Submit"),
        (l.ReplySubmit = "Reply Submit"),
        (l.ReactSend = "React Send"),
        (l.ReplySend = "Reply Send");
    },
    55e3: function (e, n, t) {
      var i, l;
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
          return i;
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
      ((l = i || (i = {})).AssetImage = "AssetImage"),
        (l.ApplicationImage = "ApplicationImage"),
        (l.Platform = "Platform"),
        (l.StreamPreview = "StreamPreview"),
        (l.HangStatus = "HangStatus");
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
      var i = t(570140),
        l = t(493683),
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
                let l = (r) => {
                  r.file.id === n.id &&
                    (i.Z.unsubscribe("UPLOAD_COMPLETE", l),
                    i.Z.unsubscribe("UPLOAD_FAIL", l),
                    "UPLOAD_COMPLETE" === r.type
                      ? e(r.messageRecord)
                      : t(Error("Upload failed")));
                };
                i.Z.subscribe("UPLOAD_COMPLETE", l),
                  i.Z.subscribe("UPLOAD_FAIL", l);
              });
        },
        v = async function (e, n) {
          var i;
          let l =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0,
            c = s.Z.getChannel(n);
          if (((i = u.default.getToken()), r.ZP.parse(c, ""), l));
          else {
            if (null == s.Z.getChannel(n))
              throw Error(
                "AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(
                  n,
                ),
              );
            {
              let i = t(966390).Z;
              (e.description = o),
                await i.uploadFiles({
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
              user: i,
              altText: r,
              requireConfirmation: u = !1,
            } = e,
            s = await l.Z.openPrivateChannel(i.id, !1, !1);
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
              channel: i,
              altText: l,
              requireConfirmation: o = !1,
            } = e,
            a = r.ZP.parse(i, t);
          return v(n, i.id, o, l, a);
        };
    },
    665672: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(512722),
        l = t.n(i);
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
          l()(
            null != this.exporter,
            "DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.",
          );
          let n = this.canvas.getCanvasForExport();
          return (
            l()(null != n, "DiscordCanvas: Couldn't get a canvas for export."),
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
      var i = t(141795),
        l = t(476326),
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
            return new i.n({ file: d, platform: l.ow.WEB, isThumbnail: !1 }, t);
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
      var i = t(4646),
        l = t(665672);
      async function r(e) {
        let { assetsToLoad: n, drawImage: r, exportConfigs: o } = e,
          a = await (0, i.k2)(n);
        await a.loadFonts();
        {
          let e = t(503082).Z,
            n = t(97008).Z,
            i = document.createElement("canvas"),
            u = new e(i, a),
            s = new n(),
            d = new l.Z(u, s);
          r(d.canvas);
          let c = await d.export(o);
          return i.remove(), c;
        }
      }
    },
    871118: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(200651),
        l = t(192379),
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
        let { isLoading: n, noText: t, previewText: l, className: r } = e;
        return (0, i.jsx)("div", {
          className: o()(v.emptyPreviewContainer, r),
          children: n
            ? (0, i.jsx)(u.Spinner, {})
            : (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("div", { className: v.emptyPreviewImage }),
                  t
                    ? null
                    : (0, i.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        className: v.emptyPreviewText,
                        children: null != l ? l : f.intl.string(f.t.uQZTBQ),
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
          Z = l.useRef(g ? null : h);
        l.useEffect(() => {
          !g && (Z.current = h);
        }, [h, g]);
        let x = null == h || g ? Z.current : h;
        return null == x
          ? (0, i.jsx)(m, {
              className: t,
              isLoading: g,
              noText: r,
              previewText: u ? void 0 : f.intl.string(f.t.pgUTZG),
            })
          : (0, i.jsx)("div", {
              className: t,
              children: (0, i.jsx)("img", {
                src: x,
                alt: "",
                className: v.image,
              }),
            });
      }
    },
    62817: function (e, n, t) {
      t(47120), t(177593);
      var i,
        l,
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
        let i = f[n.id];
        null != i && null != v[i.id] && (v[i.id] = { ...v[i.id], ...n });
      }
      class P extends (i = a.ZP.Store) {
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
        (r = "displayName") in (l = P)
          ? Object.defineProperty(l, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = o),
        (n.Z = new P(u.Z, {
          CONNECTION_OPEN: function () {
            m = {};
          },
          LOGOUT: function () {
            m = {};
          },
          UPLOAD_START: function (e) {
            var n;
            let { channelId: t, file: i, uploader: l, message: r } = e;
            if (l._aborted || l._errored) return;
            let o = null !== (n = c[t]) && void 0 !== n ? n : d;
            (p[i.id] = l), (c[t] = [...o, i]), (f[i.id] = r);
            let { items: a } = i;
            null != a && (v[r.id] = { ...i, items: a }), h(r.nonce, i);
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
              i = p[n.id];
            if (null == i) return !1;
            setImmediate(() => i.cancelItem(t));
          },
          UPLOAD_FILE_UPDATE: function (e) {
            let { channelId: n, file: t } = e,
              i = f[t.id];
            null != i && h(i.nonce, t), x(n, t);
          },
          UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
            let { file: n, messageId: t } = e;
            v[t] = n;
          },
        }));
    },
  },
]);
//# sourceMappingURL=4644ac64d0dab86e802e.js.map
