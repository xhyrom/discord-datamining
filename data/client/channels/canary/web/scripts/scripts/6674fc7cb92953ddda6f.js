"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86778"],
  {
    915863: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        o = n.n(l),
        r = n(481060),
        a = n(472113);
      function s(t) {
        let { className: e, size: n, ...l } = t;
        return (0, i.jsx)(r.Button, {
          className: o()(a.button, e),
          size: o()(a.buttonSize, n),
          ...l,
        });
      }
    },
    429589: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return k;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        o = n(442837),
        r = n(481060),
        a = n(278323),
        s = n(224706),
        u = n(287734),
        c = n(2052),
        d = n(906732),
        h = n(835473),
        f = n(592745),
        v = n(592125),
        p = n(757266),
        x = n(650774),
        g = n(430824),
        m = n(283595),
        w = n(496675),
        y = n(699516),
        P = n(944486),
        Z = n(594174),
        C = n(979651),
        I = n(181106),
        S = n(417363),
        b = n(358085),
        R = n(804739),
        E = n(317381),
        T = n(638880),
        j = n(255621),
        A = n(16609),
        F = n(452634),
        O = n(527805),
        L = n(620662),
        D = n(275920),
        U = n(915863),
        N = n(701488),
        M = n(981631),
        _ = n(388032);
      function k(t) {
        var e, n;
        let {
            activity: k,
            embeddedActivity: B,
            user: G,
            onAction: z,
            isEmbedded: J = !1,
            ButtonComponent: H = U.Z,
            ...W
          } = t,
          { analyticsLocations: Q } = (0, d.ZP)(),
          [V, X] = l.useState(!1),
          q = (0, o.e7)([Z.default], () => Z.default.getCurrentUser()),
          Y = G.id === (null == q ? void 0 : q.id),
          K =
            null !== (e = null == B ? void 0 : B.applicationId) && void 0 !== e
              ? e
              : null == k
                ? void 0
                : k.application_id,
          $ = (0, F.Z)({
            channelId: (0, A.p)(null == B ? void 0 : B.location),
            userId: G.id,
            activity: k,
          }),
          tt = (0, o.e7)(
            [m.Z, f.Z, S.Z, p.Z],
            () =>
              J ||
              (null != K &&
                (0, R.t)({
                  LibraryApplicationStore: m.Z,
                  LaunchableGameStore: f.Z,
                  DispatchApplicationStore: S.Z,
                  ConnectedAppsStore: p.Z,
                  applicationId: K,
                })),
          ),
          te = (0, o.e7)([E.ZP], () =>
            Array.from(E.ZP.getSelfEmbeddedActivities().values()).some((t) => {
              let { applicationId: e, location: n } = t;
              return (
                (e === (null == k ? void 0 : k.application_id) ||
                  e === (null == B ? void 0 : B.applicationId)) &&
                (0, A.p)(n) === $
              );
            }),
          ),
          tn = (0, o.e7)(
            [I.Z],
            () =>
              null != k &&
              null != k.application_id &&
              I.Z.getState(k.application_id, M.mFx.JOIN) === M.OcF.LOADING,
          ),
          [ti] = (0, h.Z)(
            (null == B ? void 0 : B.applicationId) != null
              ? [null == B ? void 0 : B.applicationId]
              : (null == k ? void 0 : k.application_id) != null
                ? [null == k ? void 0 : k.application_id]
                : [],
          ),
          tl = (0, O.s5)({
            userId: G.id,
            activity: k,
            channelId: $,
            application: ti,
          }),
          to = (0, o.e7)([v.Z, g.Z, x.Z, y.Z, P.Z, C.Z, w.Z], () =>
            null != B
              ? tl === O.Fw.CAN_JOIN
              : null != k
                ? (0, j.Z)({
                    user: G,
                    activity: k,
                    application: ti,
                    channelId: $,
                    currentUser: q,
                    isEmbedded: J,
                    ChannelStore: v.Z,
                    GuildStore: g.Z,
                    GuildMemberCountStore: x.Z,
                    RelationshipStore: y.Z,
                    SelectedChannelStore: P.Z,
                    VoiceStateStore: C.Z,
                    PermissionStore: w.Z,
                  })
                : void 0,
          ),
          tr = (0, o.e7)([E.ZP], () =>
            Array.from(E.ZP.getSelfEmbeddedActivities().values()).some(
              (t) =>
                t.applicationId === (null == B ? void 0 : B.applicationId) &&
                t.location.id === (null == B ? void 0 : B.location.id),
            ),
          ),
          ta = (0, c.O)(),
          ts = !b.isPlatformEmbedded;
        if (!((0, L.Z)(k, M.xjy.JOIN) || J) || null == K) return null;
        let tu = !Y || (J && !tr),
          tc = tu && (ts || tt) && !V && !te && (!J || to),
          td = null;
        tu
          ? !ts &&
            !tt &&
            null != k &&
            (td = _.intl.formatToPlainString(_.t.SqJBnJ, { name: k.name }))
          : (td = _.intl.string(_.t["0OiwfH"]));
        let th =
            null !== (n = null == B ? void 0 : B.launchId) && void 0 !== n
              ? n
              : null == k
                ? void 0
                : k.session_id,
          tf = async (t, e) => {
            var n, i;
            if (null == th || null == K) return;
            let l = (0, L.Z)(e, M.xjy.EMBEDDED),
              o = P.Z.getVoiceChannelId(),
              r = v.Z.getChannel(o);
            await s.Z.join({
              userId: t.id,
              sessionId: th,
              applicationId: K,
              channelId: o,
              messageId: null,
              intent: N.Ws.PLAY,
              embedded: l,
              partyId:
                null != e
                  ? null == e
                    ? void 0
                    : null === (n = e.party) || void 0 === n
                      ? void 0
                      : n.id
                  : "",
              locationObject: ta.location,
              analyticsLocations: Q,
            }),
              !l &&
                (0, D.Z)({
                  type: M.q5t.JOIN,
                  userId: t.id,
                  guildId: null == r ? void 0 : r.guild_id,
                  channelId: o,
                  channelType: null == r ? void 0 : r.type,
                  applicationId: K,
                  partyId:
                    null != e
                      ? null == e
                        ? void 0
                        : null === (i = e.party) || void 0 === i
                          ? void 0
                          : i.id
                      : "",
                  locationObject: ta.location,
                  analyticsLocations: Q,
                });
          },
          tv = async () => {
            let t = !1;
            if (J) {
              if (!to || null == $ || null == K) return;
              t = await (0, T.Z)({
                applicationId: K,
                activityChannelId: $,
                locationObject: ta.location,
                analyticsLocations: Q,
              });
            }
            if (!t) {
              let t;
              if (to) {
                null == z || z(), tf(G, k);
                return;
              }
              X(!0),
                null != k &&
                  (t = await a.Z.sendActivityInviteUser({
                    type: M.mFx.JOIN_REQUEST,
                    userId: G.id,
                    activity: k,
                    location: M.Sbl.PROFILE_POPOUT,
                  })),
                null != t && u.default.selectPrivateChannel(t.id);
            }
          },
          tp = to ? _.intl.string(_.t.VJlc0d) : _.intl.string(_.t.OKsSCQ);
        return (
          J && (tp = _.intl.string(_.t["4i2vj4"])),
          tr && (tp = _.intl.string(_.t.DPfdsr)),
          (0, i.jsx)(
            r.Tooltip,
            {
              text: td,
              children: (t) => {
                let { onMouseEnter: e, onMouseLeave: n } = t;
                return (0, i.jsx)(H, {
                  onClick: tv,
                  onMouseEnter: e,
                  onMouseLeave: n,
                  disabled: !tc,
                  submitting: tn,
                  fullWidth: !0,
                  ...W,
                  children: tp,
                });
              },
            },
            "join",
          )
        );
      }
    },
    757182: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(655922),
        o = n(420660),
        r = n(915863),
        a = n(388032);
      function s(t) {
        let { activity: e, onAction: n, ButtonComponent: s = r.Z, ...u } = t;
        return (0, o.Z)(e)
          ? (0, i.jsx)(
              s,
              {
                onClick: () => {
                  null == n || n();
                  let t = (0, l.Z)(e);
                  return window.open(null != t ? t : void 0);
                },
                fullWidth: !0,
                ...u,
                children: a.intl.string(a.t["I6JG4+"]),
              },
              "play-activity",
            )
          : null;
      }
    },
    220779: function (t, e, n) {
      n.d(e, {
        A7: function () {
          return P;
        },
        dE: function () {
          return C;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        a = n(481060),
        s = n(410030),
        u = n(541716),
        c = n(752305),
        d = n(893718),
        h = n(318766),
        f = n(931651),
        v = n(131704),
        p = n(142550),
        x = n(981631),
        g = n(388032),
        m = n(26858);
      let w = (0, v.kt)({ id: "1", type: x.d4z.DM }),
        y = l.forwardRef(function (t, e) {
          let {
              placeholder: n,
              headerText: l,
              onEnter: o,
              showPopout: u,
              children: c,
              body: d,
              hide: h,
            } = t,
            f = (0, s.ZP)();
          return (0, i.jsx)(a.Popout, {
            align: "right",
            position: "bottom",
            shouldShow: u,
            disablePointerEvents: !1,
            renderPopout: () =>
              (0, i.jsx)(a.ThemeProvider, {
                theme: f,
                children: (t) =>
                  (0, i.jsx)("div", {
                    className: r()([m.reply, t]),
                    ref: e,
                    children: (0, i.jsx)(a.FocusLock, {
                      containerRef: e,
                      children: (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)(a.Text, {
                            variant: "text-xs/bold",
                            className: m.replyHeader,
                            children:
                              null != l ? l : g.intl.string(g.t["/VQax8"]),
                          }),
                          d,
                          (0, i.jsx)(P, {
                            onEnter: (t) => {
                              o(t), h();
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
      function P(t) {
        let {
            placeholder: e,
            onEnter: n,
            setEditorRef: o,
            showEmojiButton: a = !1,
            renderAttachButton: s,
            autoFocus: h = !0,
            onFocus: f,
            channel: v,
            className: x,
          } = t,
          [g, y] = l.useState(""),
          [P, Z] = l.useState((0, c.JM)("")),
          C = () => {
            y(""), Z((0, c.JM)(""));
          },
          I = u.Ie.ATOMIC_REACTOR_REPLY_INPUT,
          S = l.useRef(null);
        return (0, i.jsx)(d.Z, {
          ref: S,
          placeholder: e,
          editorClassName: x,
          className: r()(m.replyInput, x),
          showRemainingCharsAfterCount: -1,
          allowNewLines: !1,
          maxCharacterCount: p.z,
          channel: null != v ? v : w,
          onChange: (t, e, n) => {
            y(e), Z(n);
          },
          type: a ? { ...I, emojis: { button: !0 } } : I,
          textValue: g,
          richValue: P,
          onSubmit: (t) => {
            let { value: e } = t;
            return e.length > p.z
              ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
              : (n(e),
                C(),
                Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
          },
          setEditorRef: o,
          focused: h,
          onFocus: f,
          disableThemedBackground: !0,
          emojiPickerCloseOnModalOuterClick: !0,
          disabled: !1,
          autoCompletePosition: (() => {
            if (null == S.current) return "top";
            let t = S.current.getBoundingClientRect(),
              e = window.innerHeight;
            return t.top < e / 2 ? "bottom" : "top";
          })(),
          renderAttachButton: s,
        });
      }
      let Z = (t, e) => {
          l.useEffect(() => {
            let n = (e) => {
                "Escape" === e.key && t();
              },
              i = (n) => {
                var i;
                null != n.target &&
                  !(null == e
                    ? void 0
                    : null === (i = e.current) || void 0 === i
                      ? void 0
                      : i.contains(null == n ? void 0 : n.target)) &&
                  t();
              };
            return (
              document.addEventListener("keydown", n),
              document.addEventListener("mousedown", i),
              () => {
                document.removeEventListener("keydown", n),
                  document.removeEventListener("mousedown", i);
              }
            );
          }, [t, e]);
        },
        C = (t) => {
          let { onSelectEmoji: e, onClick: n } = t,
            o = (0, s.ZP)(),
            [r, u] = l.useState(!1),
            c = l.useRef(null);
          return (
            Z(() => u(!1), c),
            (0, i.jsx)(a.Popout, {
              align: "right",
              position: "top",
              shouldShow: r,
              disablePointerEvents: !1,
              renderPopout: () =>
                (0, i.jsx)(a.ThemeProvider, {
                  theme: o,
                  children: (t) =>
                    (0, i.jsx)("div", {
                      className: t,
                      ref: c,
                      children: (0, i.jsx)(f.$, {
                        messageId: x.lds,
                        channel: w,
                        closePopout: () => {
                          u(!1);
                        },
                        onSelectEmoji: (t, n, i) => {
                          null != t && (e(t, n, i), u(!1));
                        },
                      }),
                    }),
                }),
              children: () =>
                (0, i.jsx)(a.Tooltip, {
                  text: g.intl.string(g.t.lfIHs7),
                  children: (t) =>
                    (0, i.jsx)("div", {
                      ...t,
                      className: m.reaction,
                      children: (0, i.jsx)(h.Z, {
                        active: !1,
                        tabIndex: 0,
                        onClick: () => {
                          null == n || n(), u(!0);
                        },
                      }),
                    }),
                }),
            })
          );
        };
      e.ZP = (t) => {
        let {
            onInteraction: e,
            showReact: n = !0,
            showReply: o = !0,
            popoutProps: s = {},
          } = t,
          { replyHeaderText: u, replyPlaceholder: c, popoutBody: d } = s,
          [h, f] = l.useState(!1),
          v = l.useRef(null);
        return (
          Z(() => f(!1), v),
          (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("div", {
              className: m.reactions,
              children: [
                n &&
                  (0, i.jsx)(C, {
                    onSelectEmoji: (t) => {
                      null != t &&
                        e({
                          interactionType: p.L.ReactSubmit,
                          emoji: t,
                          reply: null,
                        });
                    },
                    onClick: () => {
                      e({
                        interactionType: p.L.ReactBegin,
                        emoji: null,
                        reply: null,
                      }),
                        f(!1);
                    },
                  }),
                o &&
                  (0, i.jsx)(y, {
                    hide: () => f(!1),
                    ref: v,
                    headerText: u,
                    placeholder: c,
                    showPopout: h,
                    body: d,
                    onEnter: (t) => {
                      e({
                        interactionType: p.L.ReplySubmit,
                        emoji: null,
                        reply: t,
                      });
                    },
                    children: (0, i.jsx)(a.Tooltip, {
                      text: g.intl.string(g.t["5IEsGx"]),
                      children: (t) =>
                        (0, i.jsx)("button", {
                          ...t,
                          className: r()(m.reaction, m.emojiButton),
                          onClick: () => {
                            e({
                              interactionType: p.L.ReplyBegin,
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
    142550: function (t, e, n) {
      var i, l;
      n.d(e, {
        L: function () {
          return i;
        },
        z: function () {
          return o;
        },
      });
      let o = 200;
      ((l = i || (i = {})).ReactBegin = "React Begin"),
        (l.ReplyBegin = "Reply Begin"),
        (l.ReactSubmit = "React Submit"),
        (l.ReplySubmit = "Reply Submit"),
        (l.ReactSend = "React Send"),
        (l.ReplySend = "Reply Send");
    },
    55e3: function (t, e, n) {
      var i, l;
      n.d(e, {
        Cv: function () {
          return p;
        },
        En: function () {
          return o;
        },
        Nv: function () {
          return c;
        },
        SG: function () {
          return u;
        },
        W3: function () {
          return i;
        },
        dI: function () {
          return r;
        },
        ee: function () {
          return v;
        },
        ez: function () {
          return d;
        },
        o3: function () {
          return a;
        },
        sB: function () {
          return s;
        },
        sp: function () {
          return f;
        },
        vS: function () {
          return h;
        },
      });
      let o = 348,
        r = 88;
      ((l = i || (i = {})).AssetImage = "AssetImage"),
        (l.ApplicationImage = "ApplicationImage"),
        (l.Platform = "Platform"),
        (l.StreamPreview = "StreamPreview"),
        (l.HangStatus = "HangStatus");
      let a = 12,
        s = 12,
        u = 24,
        c = 16,
        d = 24,
        h = 64,
        f = 335,
        v = 310,
        p =
          "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm6.81 7c-.54 0-1 .26-1.23.61A1 1 0 0 1 8.92 8.5 3.49 3.49 0 0 1 11.82 7c1.81 0 3.43 1.38 3.43 3.25 0 1.45-.98 2.61-2.27 3.06a1 1 0 0 1-1.96.37l-.19-1a1 1 0 0 1 .98-1.18c.87 0 1.44-.63 1.44-1.25S12.68 9 11.81 9ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z";
    },
    201133: function (t, e, n) {
      n.d(e, {
        B: function () {
          return x;
        },
        a: function () {
          return p;
        },
      }),
        n(411104);
      var i = n(570140),
        l = n(493683),
        o = n(957730),
        r = n(222677),
        a = n(995774),
        s = n(314897),
        u = n(592125),
        c = n(703558),
        d = n(62817),
        h = n(960048);
      let f = (t) => {
          let e = d.Z.getFiles(t)[0];
          return null == d.Z.getMessageForFile(e.id)
            ? (h.Z.addBreadcrumb({ message: "No message found for upload" }),
              Promise.reject())
            : new Promise((t, n) => {
                let l = (o) => {
                  o.file.id === e.id &&
                    (i.Z.unsubscribe("UPLOAD_COMPLETE", l),
                    i.Z.unsubscribe("UPLOAD_FAIL", l),
                    "UPLOAD_COMPLETE" === o.type
                      ? t(o.messageRecord)
                      : n(Error("Upload failed")));
                };
                i.Z.subscribe("UPLOAD_COMPLETE", l),
                  i.Z.subscribe("UPLOAD_FAIL", l);
              });
        },
        v = async function (t, e) {
          var i;
          let l =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0,
            d = u.Z.getChannel(e);
          if (((i = s.default.getToken()), o.ZP.parse(d, ""), l));
          else {
            if (null == u.Z.getChannel(e))
              throw Error(
                "AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(
                  e,
                ),
              );
            {
              let i = n(966390).Z;
              (t.description = r),
                await i.uploadFiles({
                  channelId: e,
                  uploads: [t],
                  draftType: c.d.ChannelMessage,
                  parsedMessage: a,
                });
            }
          }
        },
        p = async (t) => {
          let {
              file: e,
              reaction: n,
              user: i,
              altText: o,
              requireConfirmation: s = !1,
            } = t,
            u = await l.Z.openPrivateChannel(i.id, !1, !1);
          v(e, u, s, o);
          let c = await f(u);
          if (null != c) {
            let t = (0, a.g1)(n);
            await (0, r.rU)(u, c.id, t);
          }
        },
        x = (t) => {
          let {
              file: e,
              reply: n,
              channel: i,
              altText: l,
              requireConfirmation: r = !1,
            } = t,
            a = o.ZP.parse(i, n);
          return v(e, i.id, r, l, a);
        };
    },
    4646: function (t, e, n) {
      function i(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      n.d(e, {
        k2: function () {
          return o;
        },
      }),
        n(47120);
      let l = new (n(259443).Yd)("AssetMap");
      async function o(t) {
        let e = new r(),
          n = Object.entries(t).map((t) => {
            let [n, i] = t;
            return e
              .loadRemoteImage(n, i)
              .catch((t) => l.warn("Failed to load canvas asset", t, n, i));
          });
        return await Promise.all(n), e;
      }
      class r {
        loadFonts() {
          return Promise.resolve();
        }
        async loadRemoteImage(t, e) {
          let n = new Image();
          return (
            (n.src = e),
            (n.crossOrigin = "anonymous"),
            await n.decode(),
            (this.assets[t] = n),
            Promise.resolve()
          );
        }
        get(t) {
          return this.assets[t];
        }
        has(t) {
          return null != this.assets[t];
        }
        constructor() {
          i(this, "assets", {}), i(this, "fontManager", void 0);
        }
      }
    },
    129508: function (t, e, n) {
      n(47120);
      var i = n(512722),
        l = n.n(i),
        o = n(921608),
        r = n(693824);
      function a(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      e.Z = class t {
        getCanvas() {
          return this.canvas;
        }
        setColor(t) {
          this.color = t;
        }
        setFont(t) {
          var e, n, i, l, o;
          (this.font.style =
            null !== (e = t.style) && void 0 !== e ? e : this.font.style),
            (this.font.size =
              null !== (n = t.size) && void 0 !== n ? n : this.font.size),
            (this.font.weight =
              null !== (i = t.weight) && void 0 !== i ? i : this.font.weight),
            (this.font.family =
              null !== (l = t.family) && void 0 !== l ? l : this.font.family),
            (this.font.truncate =
              null !== (o = t.truncate) && void 0 !== o
                ? o
                : this.font.truncate);
        }
        getLoadedImage(t) {
          l()(
            null != this.assetMap,
            "DiscordCanvas: An AssetStore has not been initialized.",
          );
          let e = this.assetMap.get(t);
          if (void 0 === e) {
            console.error(
              "DiscordCanvas: AssetMap hasn't loaded ".concat(
                t,
                ".  Make sure to load it before trying to render.",
              ),
            );
            return;
          }
          return e;
        }
        drawRoundedImageWithFallbacks(t, e, n, i, l) {
          for (let o of t) {
            let t = this.drawRoundedImage(o, e, n, i, l);
            if (t !== r.vP.Failure) return t;
          }
          return r.vP.Failure;
        }
        constructor(t, e) {
          a(this, "color", "black"),
            a(this, "font", {
              style: "normal",
              weight: 300,
              size: o.n,
              family: ["serif"],
              truncate: r.GX.None,
            }),
            a(this, "assetMap", void 0),
            a(this, "canvas", void 0),
            (this.canvas = t),
            (this.assetMap = e);
        }
      };
    },
    665672: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return r;
        },
      });
      var i = n(512722),
        l = n.n(i);
      function o(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      class r {
        setExporter(t) {
          this.exporter = t;
        }
        export(t) {
          l()(
            null != this.exporter,
            "DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.",
          );
          let e = this.canvas.getCanvasForExport();
          return (
            l()(null != e, "DiscordCanvas: Couldn't get a canvas for export."),
            this.exporter.exportCanvas(e, t)
          );
        }
        constructor(t, e) {
          o(this, "canvas", void 0),
            o(this, "exporter", void 0),
            (this.canvas = t),
            (this.exporter = e);
        }
      }
    },
    97008: function (t, e, n) {
      n(411104);
      var i = n(141795),
        l = n(476326),
        o = n(956664),
        r = n(693824);
      e.Z = class t {
        toDataUrl(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "png",
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1;
          return t.toDataURL(e, n);
        }
        async exportCanvas(t, e) {
          let {
            format: n,
            fileType: a = "png",
            quality: s = 1,
            fileName: u,
          } = e;
          if (n === r.kH.Base64) return this.toDataUrl(t, a, s);
          if (n === r.kH.Blob) {
            let e = this.toDataUrl(t, a, s);
            return (0, o.kD)(e);
          }
          if (n === r.kH.File) {
            let e = this.toDataUrl(t, a, s);
            return await (0, o.Bo)(e, u, "image/png");
          }
          if (n === r.kH.CloudUpload) {
            let { channelId: n } = e,
              r = this.toDataUrl(t, a, s),
              c = await (0, o.Bo)(r, u, "image/png");
            return new i.n({ file: c, platform: l.ow.WEB, isThumbnail: !1 }, n);
          }
          throw Error(
            "DiscordCanvas: ".concat(n, " is not a valid export format."),
          );
        }
      };
    },
    503082: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(512722),
        l = n.n(i),
        o = n(129508),
        r = n(921608),
        a = n(693824);
      function s(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      class u extends o.Z {
        getCanvasForExport() {
          return this.canvas;
        }
        setContextProperties() {
          null != this.context &&
            ((this.context.fillStyle = this.color),
            (this.context.strokeStyle = this.color),
            (this.context.font = ""
              .concat(this.font.style, " ")
              .concat(this.font.weight, " ")
              .concat(this.font.size, "px ")
              .concat(this.font.family.join(", "))));
        }
        setSize(t, e) {
          let { w: n, h: i } = t;
          null != this.context && null != e
            ? ((this.canvas.width = n * e),
              (this.canvas.height = i * e),
              this.context.scale(e, e))
            : ((this.canvas.width = n), (this.canvas.height = i));
        }
        clearRect(t) {
          if (null == this.context) return;
          let { x: e, y: n, w: i, h: l } = t;
          this.context.clearRect(e, n, i, l);
        }
        restoreContext() {
          null != this.context && this.context.restore();
        }
        drawRect(t) {
          let e =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
          if (null == this.context) return;
          let { x: i, y: l, w: o, h: r } = t;
          n && this.setContextProperties(),
            e
              ? this.context.fillRect(i, l, o, r)
              : this.context.strokeRect(i, l, o, r);
        }
        drawRoundedRect(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            i =
              !(arguments.length > 3) ||
              void 0 === arguments[3] ||
              arguments[3];
          if (null == this.context) return;
          let { x: l, y: o, w: r, h: a } = t;
          i && this.setContextProperties(),
            this.context.beginPath(),
            this.context.roundRect(l, o, r, a, e),
            n ? this.context.fill() : this.context.stroke();
        }
        drawText(t, e, n) {
          var i, o;
          if (null == this.context) return;
          this.setContextProperties();
          let s =
              null !== (i = e.w) && void 0 !== i ? i : this.canvas.width - e.x,
            u = this.context.measureText(t),
            c = !1,
            d = this.font.size,
            h = (t, e) => {
              null != this.context &&
                (n
                  ? this.context.fillText(t, e.x, e.y)
                  : this.context.strokeText(t, e.x, e.y));
            },
            f = (t) => {
              if (null == this.context || u.width <= r.F) return "";
              let e = "".concat(t);
              for (; u.width + r.F > s; )
                (e = e.slice(0, -4)),
                  (u = this.context.measureText(e)),
                  (c = !0);
              return c && (e += "..."), e;
            };
          if (
            (this.font.truncate === a.GX.None && h(t, e),
            this.font.truncate === a.GX.Truncate && h((t = f(t)), e),
            this.font.truncate === a.GX.Wrap)
          ) {
            let n = t.split(" "),
              i = 1 / 0,
              r = "",
              a = 0;
            for (
              null != e.h &&
              ((i = e.h / d),
              l()(
                i > 0,
                "DiscordCavas: boundingBox.h of "
                  .concat(e.h, " results in 0 visible lines with font size of ")
                  .concat(d),
              ));
              n.length > 0;

            )
              if ((u = this.context.measureText(r + " " + n[0])).width > s) {
                let t = !1;
                if (
                  (a + 1 >= i && n.length > 0 && (t = !0),
                  "" !== r
                    ? (h(t ? f(r + "...") : r, { x: e.x, y: e.y + d * a }),
                      (r = ""))
                    : h(f(null !== (o = n.shift()) && void 0 !== o ? o : ""), {
                        x: e.x,
                        y: e.y + d * a,
                      }),
                  t)
                )
                  break;
                a += 1;
              } else
                (r += " ".concat(n.shift())),
                  0 === n.length && h(r, { x: e.x, y: e.y + d * a });
          }
          return {
            x: e.x,
            y: e.y,
            w: u.width,
            h: u.actualBoundingBoxAscent + u.actualBoundingBoxDescent,
          };
        }
        drawFormattedMessage(t, e, n) {
          this.font.truncate === a.GX.Wrap &&
            console.warn(
              "DiscordCavas: `drawFormattedMessage` doesn't currently support wrapping formatted text. The results of this draw likely won't match your expectations.",
            );
          let i = this.font.weight,
            l = (t, e, n) => {
              let l;
              if ("strong" === t.type) this.setFont({ weight: 700 });
              return (
                Array.isArray(t.content)
                  ? (l = o(t.content, e, n))
                  : (l = this.drawText(t.content, e, n)),
                this.setFont({ weight: i }),
                l
              );
            },
            o = (t, e, n) => {
              let i = 0;
              return (
                t.forEach((t) => {
                  let { x: o, y: r, w: a, h: s } = e,
                    u = null != a ? a - i : void 0,
                    c = l(t, { x: o + i, y: r, w: u, h: s }, n);
                  null != c && (i += c.w);
                }),
                { x: e.x + i, y: e.y, w: i, h: this.font.size }
              );
            };
          Array.isArray(t) ? o(t, e, n) : l(t, e, n);
        }
        drawImage(t, e, n) {
          let i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : { fillMode: a.JU.Stretch };
          l()(
            null != this.assetMap,
            "DiscordCavas: `drawImage` requires an AssetMap to be initialized.",
          );
          let { fillMode: o } = i;
          if (null == this.context) return a.vP.Failure;
          let r = this.assetMap.get(t);
          if (null == r) return a.vP.ImageNotLoaded;
          if (null != n) {
            if (o === a.JU.Contain) {
              let i;
              let l = { w: r.width, h: r.height },
                o = +(l.w / l.h).toFixed(1);
              if (+(n.w / n.h).toFixed(1) > o) {
                let t = n.h * o;
                i = { x: e.x + (n.w - t) / 2, y: e.y, w: t, h: n.h };
              } else {
                let t = n.w / o;
                i = { x: e.x, y: e.y + (n.h - t) / 2, w: n.w, h: t };
              }
              return (
                this.drawCroppedImage(
                  t,
                  { x: 0, y: 0, w: l.w, h: l.h },
                  { x: i.x, y: i.y, w: i.w, h: i.h },
                ),
                a.vP.Success
              );
            }
            if (o === a.JU.Cover) {
              var s, u, c, d;
              let l;
              let o = { w: r.width, h: r.height },
                h = +(o.w / o.h).toFixed(1),
                f = +(n.w / n.h).toFixed(1);
              if (f > h) {
                let t = o.w / f;
                l = {
                  x: 0,
                  y:
                    (o.h - t) *
                    (null !==
                      (u =
                        null == i
                          ? void 0
                          : null === (s = i.focus) || void 0 === s
                            ? void 0
                            : s.y) && void 0 !== u
                      ? u
                      : 0.5),
                  w: r.width,
                  h: t,
                };
              } else {
                let t = o.h * f;
                l = {
                  x:
                    (r.width - t) *
                    (null !==
                      (d =
                        null == i
                          ? void 0
                          : null === (c = i.focus) || void 0 === c
                            ? void 0
                            : c.x) && void 0 !== d
                      ? d
                      : 0.5),
                  y: 0,
                  w: t,
                  h: r.height,
                };
              }
              return (
                this.drawCroppedImage(t, l, { x: e.x, y: e.y, w: n.w, h: n.h }),
                a.vP.Success
              );
            }
            this.context.drawImage(r, e.x, e.y, n.w, n.h);
          } else this.context.drawImage(r, e.x, e.y);
          return a.vP.Success;
        }
        drawRoundedImage(t, e, n, i, l) {
          if (null == this.context) return a.vP.Failure;
          let { x: o, y: r } = e,
            { w: s, h: u } = n;
          this.context.save();
          let c = new Path2D();
          c.roundRect(o, r, s, u, i), this.context.clip(c);
          let d = this.drawImage(t, e, n, l);
          return this.restoreContext(), d;
        }
        drawCroppedImage(t, e, n) {
          var i;
          if (null == this.context) return a.vP.Failure;
          let l =
            null === (i = this.assetMap) || void 0 === i ? void 0 : i.get(t);
          if (null == l) return a.vP.ImageNotLoaded;
          let { x: o, y: r, w: s, h: u } = e,
            { x: c, y: d, w: h, h: f } = n;
          return (
            this.context.drawImage(l, o, r, s, u, c, d, h, f), a.vP.Success
          );
        }
        drawPath(t, e) {
          let n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 1;
          if (null == this.context) return a.vP.Failure;
          this.setContextProperties(), this.context.save();
          let l = new Path2D(t);
          return (
            this.context.translate(e.x, e.y),
            this.context.scale(i, i),
            n ? this.context.fill(l, "evenodd") : this.context.stroke(l),
            this.restoreContext(),
            a.vP.Success
          );
        }
        setGradientFillStyle(t, e, n) {
          if (null == this.context) return;
          let i = this.context.createLinearGradient(e.x, e.y, n.x, n.y);
          for (let { color: e, stop: n } of t) i.addColorStop(n, e);
          this.context.fillStyle = i;
        }
        drawGradientRect(t, e, n, i) {
          return null == this.context
            ? a.vP.Failure
            : (this.setGradientFillStyle(t, e, n),
              this.drawRect(i, !0, !1),
              a.vP.Success);
        }
        drawRoundedGradientRect(t, e, n, i, l) {
          return null == this.context
            ? a.vP.Failure
            : (this.setGradientFillStyle(t, e, n),
              this.drawRoundedRect(i, l, !0, !1),
              a.vP.Success);
        }
        clip(t, e) {
          if (null == this.context) return;
          this.context.save();
          let { x: n, y: i } = t,
            l = new Path2D(e);
          this.context.translate(n, i), this.context.clip(l);
        }
        clipRect(t, e) {
          if (null == this.context) return;
          this.context.save();
          let { x: n, y: i, w: l, h: o } = t;
          if (e) {
            let t = new Path2D();
            t.moveTo(0, 0),
              t.lineTo(this.canvas.width, 0),
              t.lineTo(this.canvas.width, this.canvas.height),
              t.lineTo(0, this.canvas.height),
              t.lineTo(0, 0),
              t.closePath(),
              t.rect(n, i, l, o),
              this.context.clip(t, "evenodd");
          } else {
            let t = new Path2D();
            t.rect(n, i, l, o), this.context.clip(t);
          }
        }
        clipRoundedRect(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
          if (null == this.context) return;
          this.context.save();
          let { x: i, y: l, w: o, h: r } = t;
          if (n) {
            let t = new Path2D();
            t.moveTo(0, 0),
              t.lineTo(this.canvas.width, 0),
              t.lineTo(this.canvas.width, this.canvas.height),
              t.lineTo(0, this.canvas.height),
              t.lineTo(0, 0),
              t.closePath(),
              t.roundRect(i, l, o, r, e),
              this.context.clip(t, "evenodd");
          } else {
            let t = new Path2D();
            t.roundRect(i, l, o, r, e), this.context.clip(t);
          }
        }
        constructor(t, e) {
          super(t, e),
            s(this, "canvas", void 0),
            s(this, "context", void 0),
            (this.canvas = t),
            (this.context = this.canvas.getContext("2d")),
            null != this.context &&
              (this.context.imageSmoothingQuality = "high");
        }
      }
    },
    921608: function (t, e, n) {
      n.d(e, {
        F: function () {
          return i;
        },
        n: function () {
          return l;
        },
      });
      let i = 12,
        l = 24;
    },
    693824: function (t, e, n) {
      var i, l, o, r, a, s, u, c;
      n.d(e, {
        GX: function () {
          return i;
        },
        JU: function () {
          return l;
        },
        kH: function () {
          return o;
        },
        vP: function () {
          return r;
        },
      }),
        ((a = i || (i = {}))[(a.None = 0)] = "None"),
        (a[(a.Truncate = 1)] = "Truncate"),
        (a[(a.Wrap = 2)] = "Wrap"),
        ((s = l || (l = {}))[(s.Stretch = 0)] = "Stretch"),
        (s[(s.Contain = 1)] = "Contain"),
        (s[(s.Cover = 2)] = "Cover"),
        ((u = o || (o = {}))[(u.Base64 = 0)] = "Base64"),
        (u[(u.Blob = 1)] = "Blob"),
        (u[(u.File = 2)] = "File"),
        (u[(u.CloudUpload = 3)] = "CloudUpload"),
        ((c = r || (r = {}))[(c.Success = 0)] = "Success"),
        (c[(c.Failure = 1)] = "Failure"),
        (c[(c.ImageNotLoaded = 2)] = "ImageNotLoaded");
    },
    690725: function (t, e, n) {
      n.d(e, {
        f: function () {
          return o;
        },
      }),
        n(411104);
      var i = n(4646),
        l = n(665672);
      async function o(t) {
        let { assetsToLoad: e, drawImage: o, exportConfigs: r } = t,
          a = await (0, i.k2)(e);
        await a.loadFonts();
        {
          let t = n(503082).Z,
            e = n(97008).Z,
            i = document.createElement("canvas"),
            s = new t(i, a),
            u = new e(),
            c = new l.Z(s, u);
          o(c.canvas);
          let d = await c.export(r);
          return i.remove(), d;
        }
      }
    },
    871118: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return x;
        },
      });
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        a = n(442837),
        s = n(481060),
        u = n(543882),
        c = n(592125),
        d = n(496675),
        h = n(981631),
        f = n(388032),
        v = n(680809);
      function p(t) {
        let { isLoading: e, noText: n, previewText: l, className: o } = t;
        return (0, i.jsx)("div", {
          className: r()(v.emptyPreviewContainer, o),
          children: e
            ? (0, i.jsx)(s.Spinner, {})
            : (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("div", { className: v.emptyPreviewImage }),
                  n
                    ? null
                    : (0, i.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        className: v.emptyPreviewText,
                        children: null != l ? l : f.intl.string(f.t.uQZTBQ),
                      }),
                ],
              }),
        });
      }
      function x(t) {
        let { stream: e, className: n, noText: o = !1 } = t,
          r = (0, a.e7)([c.Z], () => c.Z.getBasicChannel(e.channelId)),
          s = (0, a.e7)(
            [d.Z],
            () => null != r && d.Z.canBasicChannel(h.S7T.CONNECT, r),
          ),
          { url: x, isLoading: g } = (0, a.cj)([u.Z], () => ({
            url: s
              ? u.Z.getPreviewURL(e.guildId, e.channelId, e.ownerId)
              : null,
            isLoading:
              s && u.Z.getIsPreviewLoading(e.guildId, e.channelId, e.ownerId),
          })),
          m = l.useRef(g ? null : x);
        l.useEffect(() => {
          !g && (m.current = x);
        }, [x, g]);
        let w = null == x || g ? m.current : x;
        return null == w
          ? (0, i.jsx)(p, {
              className: n,
              isLoading: g,
              noText: o,
              previewText: s ? void 0 : f.intl.string(f.t.pgUTZG),
            })
          : (0, i.jsx)("div", {
              className: n,
              children: (0, i.jsx)("img", {
                src: w,
                alt: "",
                className: v.image,
              }),
            });
      }
    },
    62817: function (t, e, n) {
      n(47120), n(177593);
      var i,
        l,
        o,
        r,
        a = n(442837),
        s = n(570140),
        u = n(375954);
      let c = Object.freeze([]),
        d = {},
        h = {},
        f = {},
        v = {},
        p = {};
      function x(t, e) {}
      function g() {
        p = {};
      }
      function m(t, e) {
        let n = d[t];
        return (
          null != n &&
          ((d[t] = n.filter((t) => t.id !== e)),
          delete h[e],
          delete f[e],
          n.length !== d[t].length)
        );
      }
      function w(t, e) {
        let n = d[t];
        if (null == n) return !1;
        d[t] = n.map((t) => (t.id === e.id ? { ...t, ...e } : t));
        let i = f[e.id];
        null != i && null != v[i.id] && (v[i.id] = { ...v[i.id], ...e });
      }
      class y extends (i = a.ZP.Store) {
        initialize() {
          this.waitFor(u.Z);
        }
        getFiles(t) {
          var e;
          return null !== (e = d[t]) && void 0 !== e ? e : c;
        }
        getMessageForFile(t) {
          return f[t];
        }
        getUploaderFileForMessageId(t) {
          return v[t];
        }
        getUploadAttachments(t) {
          if (null != t) return p[t];
        }
      }
      (r = "UploadStore"),
        (o = "displayName") in (l = y)
          ? Object.defineProperty(l, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[o] = r),
        (e.Z = new y(s.Z, {
          CONNECTION_OPEN: function () {
            p = {};
          },
          LOGOUT: function () {
            p = {};
          },
          UPLOAD_START: function (t) {
            var e;
            let { channelId: n, file: i, uploader: l, message: o } = t;
            if (l._aborted || l._errored) return;
            let r = null !== (e = d[n]) && void 0 !== e ? e : c;
            (h[i.id] = l), (d[n] = [...r, i]), (f[i.id] = o);
            let { items: a } = i;
            null != a && (v[o.id] = { ...i, items: a }), x(o.nonce, i);
          },
          UPLOAD_COMPRESSION_PROGRESS: function (t) {
            let { channelId: e, file: n } = t;
            w(e, n);
          },
          UPLOAD_PROGRESS: function (t) {
            let { channelId: e, file: n } = t;
            w(e, n);
          },
          UPLOAD_COMPLETE: function (t) {
            let { channelId: e, file: n } = t;
            return m(e, n.id);
          },
          UPLOAD_FAIL: function (t) {
            let { channelId: e, file: n } = t;
            return m(e, n.id);
          },
          UPLOAD_CANCEL_REQUEST: function (t) {
            let { file: e } = t,
              n = h[e.id];
            if (null == n) return !1;
            setImmediate(() => {
              var t;
              return null === (t = n.cancel) || void 0 === t
                ? void 0
                : t.call(n);
            });
          },
          UPLOAD_ITEM_CANCEL_REQUEST: function (t) {
            let { file: e, itemId: n } = t,
              i = h[e.id];
            if (null == i) return !1;
            setImmediate(() => i.cancelItem(n));
          },
          UPLOAD_FILE_UPDATE: function (t) {
            let { channelId: e, file: n } = t,
              i = f[n.id];
            null != i && x(i.nonce, n), w(e, n);
          },
          UPLOAD_RESTORE_FAILED_UPLOAD: function (t) {
            let { file: e, messageId: n } = t;
            v[n] = e;
          },
        }));
    },
  },
]);
//# sourceMappingURL=6674fc7cb92953ddda6f.js.map
