"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28128"],
  {
    442937: function (e) {
      e.exports = "/assets/709211f9d166e74b02a5.png";
    },
    915863: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        a = n.n(l),
        r = n(481060),
        o = n(968333);
      function s(e) {
        let { className: t, size: n, ...l } = e;
        return (0, i.jsx)(r.Button, {
          className: a()(o.button, t),
          size: a()(o.buttonSize, n),
          ...l,
        });
      }
    },
    429589: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return U;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        a = n(442837),
        r = n(481060),
        o = n(278323),
        s = n(224706),
        u = n(287734),
        c = n(2052),
        d = n(906732),
        h = n(835473),
        m = n(592745),
        x = n(592125),
        v = n(757266),
        f = n(650774),
        p = n(430824),
        g = n(283595),
        C = n(496675),
        I = n(699516),
        P = n(944486),
        Z = n(594174),
        y = n(979651),
        j = n(181106),
        w = n(417363),
        T = n(358085),
        L = n(804739),
        S = n(317381),
        N = n(638880),
        E = n(255621),
        _ = n(452634),
        A = n(527805),
        R = n(620662),
        b = n(275920),
        M = n(915863),
        O = n(701488),
        k = n(981631),
        H = n(388032);
      function U(e) {
        var t, n;
        let {
            activity: U,
            embeddedActivity: D,
            user: B,
            onAction: V,
            isEmbedded: F = !1,
            ButtonComponent: G = M.Z,
            ...z
          } = e,
          { analyticsLocations: W } = (0, d.ZP)(),
          [q, Y] = l.useState(!1),
          J = (0, a.e7)([Z.default], () => Z.default.getCurrentUser()),
          X = B.id === (null == J ? void 0 : J.id),
          K =
            null !== (t = null == D ? void 0 : D.applicationId) && void 0 !== t
              ? t
              : null == U
                ? void 0
                : U.application_id,
          Q = (0, _.Z)({
            channelId: null == D ? void 0 : D.channelId,
            userId: B.id,
            activity: U,
          }),
          $ = (0, a.e7)(
            [g.Z, m.Z, w.Z, v.Z],
            () =>
              F ||
              (null != K &&
                (0, L.t)({
                  LibraryApplicationStore: g.Z,
                  LaunchableGameStore: m.Z,
                  DispatchApplicationStore: w.Z,
                  ConnectedAppsStore: v.Z,
                  applicationId: K,
                })),
          ),
          ee = (0, a.e7)([S.ZP], () =>
            Array.from(S.ZP.getSelfEmbeddedActivities().values()).some((e) => {
              let { applicationId: t, channelId: n } = e;
              return (
                (t === (null == U ? void 0 : U.application_id) ||
                  t === (null == D ? void 0 : D.applicationId)) &&
                n === Q
              );
            }),
          ),
          et = (0, a.e7)(
            [j.Z],
            () =>
              null != U &&
              null != U.application_id &&
              j.Z.getState(U.application_id, k.mFx.JOIN) === k.OcF.LOADING,
          ),
          [en] = (0, h.Z)(
            (null == D ? void 0 : D.applicationId) != null
              ? [null == D ? void 0 : D.applicationId]
              : (null == U ? void 0 : U.application_id) != null
                ? [null == U ? void 0 : U.application_id]
                : [],
          ),
          ei = (0, A.s5)({
            userId: B.id,
            activity: U,
            channelId: Q,
            application: en,
          }),
          el = (0, a.e7)([x.Z, p.Z, f.Z, I.Z, P.Z, y.Z, C.Z], () =>
            null != D
              ? ei === A.Fw.CAN_JOIN
              : null != U
                ? (0, E.Z)({
                    user: B,
                    activity: U,
                    application: en,
                    channelId: Q,
                    currentUser: J,
                    isEmbedded: F,
                    ChannelStore: x.Z,
                    GuildStore: p.Z,
                    GuildMemberCountStore: f.Z,
                    RelationshipStore: I.Z,
                    SelectedChannelStore: P.Z,
                    VoiceStateStore: y.Z,
                    PermissionStore: C.Z,
                  })
                : void 0,
          ),
          ea = (0, a.e7)([S.ZP], () =>
            Array.from(S.ZP.getSelfEmbeddedActivities().values()).some(
              (e) =>
                e.applicationId === (null == D ? void 0 : D.applicationId) &&
                e.channelId === (null == D ? void 0 : D.channelId),
            ),
          ),
          er = (0, c.O)(),
          eo = !T.isPlatformEmbedded;
        if (!((0, R.Z)(U, k.xjy.JOIN) || F) || null == K) return null;
        let es = !X || (F && !ea),
          eu = es && (eo || $) && !q && !ee && (!F || el),
          ec = null;
        es
          ? !eo &&
            !$ &&
            null != U &&
            (ec = H.intl.formatToPlainString(H.t.SqJBnJ, { name: U.name }))
          : (ec = H.intl.string(H.t["0OiwfH"]));
        let ed =
            null !== (n = null == D ? void 0 : D.launchId) && void 0 !== n
              ? n
              : null == U
                ? void 0
                : U.session_id,
          eh = async (e, t) => {
            var n, i;
            if (null == ed || null == K) return;
            let l = (0, R.Z)(t, k.xjy.EMBEDDED),
              a = P.Z.getVoiceChannelId(),
              r = x.Z.getChannel(a);
            await s.Z.join({
              userId: e.id,
              sessionId: ed,
              applicationId: K,
              channelId: a,
              messageId: null,
              intent: O.Ws.PLAY,
              embedded: l,
              partyId:
                null != t
                  ? null == t
                    ? void 0
                    : null === (n = t.party) || void 0 === n
                      ? void 0
                      : n.id
                  : "",
              locationObject: er.location,
              analyticsLocations: W,
            }),
              !l &&
                (0, b.Z)({
                  type: k.q5t.JOIN,
                  userId: e.id,
                  guildId: null == r ? void 0 : r.guild_id,
                  channelId: a,
                  channelType: null == r ? void 0 : r.type,
                  applicationId: K,
                  partyId:
                    null != t
                      ? null == t
                        ? void 0
                        : null === (i = t.party) || void 0 === i
                          ? void 0
                          : i.id
                      : "",
                  locationObject: er.location,
                  analyticsLocations: W,
                });
          },
          em = async () => {
            let e = !1;
            if (F) {
              if (!el || null == Q || null == K) return;
              e = await (0, N.Z)({
                applicationId: K,
                activityChannelId: Q,
                locationObject: er.location,
                analyticsLocations: W,
              });
            }
            if (!e) {
              let e;
              el && (null == V || V(), eh(B, U)),
                Y(!0),
                null != U &&
                  (e = await o.Z.sendActivityInviteUser({
                    type: k.mFx.JOIN_REQUEST,
                    userId: B.id,
                    activity: U,
                    location: k.Sbl.PROFILE_POPOUT,
                  })),
                null != e && u.default.selectPrivateChannel(e.id);
            }
          },
          ex = el ? H.intl.string(H.t.VJlc0d) : H.intl.string(H.t.OKsSCQ);
        return (
          F && (ex = H.intl.string(H.t["4i2vj4"])),
          ea && (ex = H.intl.string(H.t.DPfdsr)),
          (0, i.jsx)(
            r.Tooltip,
            {
              text: ec,
              children: (e) => {
                let { onMouseEnter: t, onMouseLeave: n } = e;
                return (0, i.jsx)(G, {
                  onClick: em,
                  onMouseEnter: t,
                  onMouseLeave: n,
                  disabled: !eu,
                  submitting: et,
                  fullWidth: !0,
                  ...z,
                  children: ex,
                });
              },
            },
            "join",
          )
        );
      }
    },
    757182: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(655922),
        a = n(420660),
        r = n(915863),
        o = n(388032);
      function s(e) {
        let { activity: t, onAction: n, ButtonComponent: s = r.Z, ...u } = e;
        return (0, a.Z)(t)
          ? (0, i.jsx)(
              s,
              {
                onClick: () => {
                  null == n || n();
                  let e = (0, l.Z)(t);
                  return window.open(null != e ? e : void 0);
                },
                fullWidth: !0,
                ...u,
                children: o.intl.string(o.t["I6JG4+"]),
              },
              "play-activity",
            )
          : null;
      }
    },
    220779: function (e, t, n) {
      n.d(t, {
        A7: function () {
          return P;
        },
        dE: function () {
          return y;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        a = n(120356),
        r = n.n(a),
        o = n(481060),
        s = n(410030),
        u = n(541716),
        c = n(752305),
        d = n(893718),
        h = n(318766),
        m = n(931651),
        x = n(131704),
        v = n(142550),
        f = n(981631),
        p = n(388032),
        g = n(793834);
      let C = (0, x.kt)({ id: "1", type: f.d4z.DM }),
        I = l.forwardRef(function (e, t) {
          let {
              placeholder: n,
              headerText: l,
              onEnter: a,
              showPopout: u,
              children: c,
              body: d,
              hide: h,
            } = e,
            m = (0, s.ZP)();
          return (0, i.jsx)(o.Popout, {
            align: "right",
            position: "bottom",
            shouldShow: u,
            disablePointerEvents: !1,
            renderPopout: () =>
              (0, i.jsx)(o.ThemeProvider, {
                theme: m,
                children: (e) =>
                  (0, i.jsx)("div", {
                    className: r()([g.reply, e]),
                    ref: t,
                    children: (0, i.jsx)(o.FocusLock, {
                      containerRef: t,
                      children: (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)(o.Text, {
                            variant: "text-xs/bold",
                            className: g.replyHeader,
                            children:
                              null != l ? l : p.intl.string(p.t["/VQax8"]),
                          }),
                          d,
                          (0, i.jsx)(P, {
                            onEnter: (e) => {
                              a(e), h();
                            },
                            placeholder:
                              null != n ? n : p.intl.string(p.t["/VQax8"]),
                          }),
                        ],
                      }),
                    }),
                  }),
              }),
            children: () => c,
          });
        });
      function P(e) {
        let {
            placeholder: t,
            onEnter: n,
            setEditorRef: a,
            showEmojiButton: o = !1,
            renderAttachButton: s,
            autoFocus: h = !0,
            onFocus: m,
            channel: x,
            className: f,
          } = e,
          [p, I] = l.useState(""),
          [P, Z] = l.useState((0, c.JM)("")),
          y = () => {
            I(""), Z((0, c.JM)(""));
          },
          j = u.I.ATOMIC_REACTOR_REPLY_INPUT,
          w = l.useRef(null);
        return (0, i.jsx)(d.Z, {
          ref: w,
          placeholder: t,
          editorClassName: f,
          className: r()(g.replyInput, f),
          showRemainingCharsAfterCount: -1,
          allowNewLines: !1,
          maxCharacterCount: v.z,
          channel: null != x ? x : C,
          onChange: (e, t, n) => {
            I(t), Z(n);
          },
          type: o ? { ...j, emojis: { button: !0 } } : j,
          textValue: p,
          richValue: P,
          onSubmit: (e) => {
            let { value: t } = e;
            return t.length > v.z
              ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
              : (n(t),
                y(),
                Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
          },
          setEditorRef: a,
          focused: h,
          onFocus: m,
          disableThemedBackground: !0,
          emojiPickerCloseOnModalOuterClick: !0,
          disabled: !1,
          autoCompletePosition: (() => {
            if (null == w.current) return "top";
            let e = w.current.getBoundingClientRect(),
              t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
          })(),
          renderAttachButton: s,
        });
      }
      let Z = (e, t) => {
          l.useEffect(() => {
            let n = (t) => {
                "Escape" === t.key && e();
              },
              i = (n) => {
                var i;
                null != n.target &&
                  !(null == t
                    ? void 0
                    : null === (i = t.current) || void 0 === i
                      ? void 0
                      : i.contains(null == n ? void 0 : n.target)) &&
                  e();
              };
            return (
              document.addEventListener("keydown", n),
              document.addEventListener("mousedown", i),
              () => {
                document.removeEventListener("keydown", n),
                  document.removeEventListener("mousedown", i);
              }
            );
          }, [e, t]);
        },
        y = (e) => {
          let { onSelectEmoji: t, onClick: n } = e,
            a = (0, s.ZP)(),
            [r, u] = l.useState(!1),
            c = l.useRef(null);
          return (
            Z(() => u(!1), c),
            (0, i.jsx)(o.Popout, {
              align: "right",
              position: "top",
              shouldShow: r,
              disablePointerEvents: !1,
              renderPopout: () =>
                (0, i.jsx)(o.ThemeProvider, {
                  theme: a,
                  children: (e) =>
                    (0, i.jsx)("div", {
                      className: e,
                      ref: c,
                      children: (0, i.jsx)(m.$, {
                        messageId: f.lds,
                        channel: C,
                        closePopout: () => {
                          u(!1);
                        },
                        onSelectEmoji: (e, n, i) => {
                          null != e && (t(e, n, i), u(!1));
                        },
                      }),
                    }),
                }),
              children: () =>
                (0, i.jsx)(o.Tooltip, {
                  text: p.intl.string(p.t.lfIHs7),
                  children: (e) =>
                    (0, i.jsx)("div", {
                      ...e,
                      className: g.reaction,
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
      t.ZP = (e) => {
        let {
            onInteraction: t,
            showReact: n = !0,
            showReply: a = !0,
            popoutProps: s = {},
          } = e,
          { replyHeaderText: u, replyPlaceholder: c, popoutBody: d } = s,
          [h, m] = l.useState(!1),
          x = l.useRef(null);
        return (
          Z(() => m(!1), x),
          (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("div", {
              className: g.reactions,
              children: [
                n &&
                  (0, i.jsx)(y, {
                    onSelectEmoji: (e) => {
                      null != e &&
                        t({
                          interactionType: v.L.ReactSubmit,
                          emoji: e,
                          reply: null,
                        });
                    },
                    onClick: () => {
                      t({
                        interactionType: v.L.ReactBegin,
                        emoji: null,
                        reply: null,
                      }),
                        m(!1);
                    },
                  }),
                a &&
                  (0, i.jsx)(I, {
                    hide: () => m(!1),
                    ref: x,
                    headerText: u,
                    placeholder: c,
                    showPopout: h,
                    body: d,
                    onEnter: (e) => {
                      t({
                        interactionType: v.L.ReplySubmit,
                        emoji: null,
                        reply: e,
                      });
                    },
                    children: (0, i.jsx)(o.Tooltip, {
                      text: p.intl.string(p.t["5IEsGx"]),
                      children: (e) =>
                        (0, i.jsx)("button", {
                          ...e,
                          className: r()(g.reaction, g.emojiButton),
                          onClick: () => {
                            t({
                              interactionType: v.L.ReplyBegin,
                              emoji: null,
                              reply: null,
                            }),
                              m(!0);
                          },
                          children: (0, i.jsx)(o.ArrowAngleLeftUpIcon, {}),
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
      var i, l;
      n.d(t, {
        L: function () {
          return i;
        },
        z: function () {
          return a;
        },
      });
      let a = 200;
      ((l = i || (i = {})).ReactBegin = "React Begin"),
        (l.ReplyBegin = "Reply Begin"),
        (l.ReactSubmit = "React Submit"),
        (l.ReplySubmit = "Reply Submit"),
        (l.ReactSend = "React Send"),
        (l.ReplySend = "Reply Send");
    },
    55e3: function (e, t, n) {
      var i, l;
      n.d(t, {
        Cv: function () {
          return v;
        },
        En: function () {
          return a;
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
          return x;
        },
        ez: function () {
          return d;
        },
        o3: function () {
          return o;
        },
        sB: function () {
          return s;
        },
        sp: function () {
          return m;
        },
        vS: function () {
          return h;
        },
      });
      let a = 348,
        r = 88;
      ((l = i || (i = {})).AssetImage = "AssetImage"),
        (l.ApplicationImage = "ApplicationImage"),
        (l.Platform = "Platform"),
        (l.StreamPreview = "StreamPreview"),
        (l.HangStatus = "HangStatus");
      let o = 12,
        s = 12,
        u = 24,
        c = 16,
        d = 24,
        h = 64,
        m = 335,
        x = 310,
        v =
          "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm6.81 7c-.54 0-1 .26-1.23.61A1 1 0 0 1 8.92 8.5 3.49 3.49 0 0 1 11.82 7c1.81 0 3.43 1.38 3.43 3.25 0 1.45-.98 2.61-2.27 3.06a1 1 0 0 1-1.96.37l-.19-1a1 1 0 0 1 .98-1.18c.87 0 1.44-.63 1.44-1.25S12.68 9 11.81 9ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z";
    },
    201133: function (e, t, n) {
      n.d(t, {
        B: function () {
          return f;
        },
        a: function () {
          return v;
        },
      }),
        n(411104);
      var i = n(570140),
        l = n(493683),
        a = n(957730),
        r = n(222677),
        o = n(995774),
        s = n(314897),
        u = n(592125),
        c = n(703558),
        d = n(62817),
        h = n(960048);
      let m = (e) => {
          let t = d.Z.getFiles(e)[0];
          return null == d.Z.getMessageForFile(t.id)
            ? (h.Z.addBreadcrumb({ message: "No message found for upload" }),
              Promise.reject())
            : new Promise((e, n) => {
                let l = (a) => {
                  a.file.id === t.id &&
                    (i.Z.unsubscribe("UPLOAD_COMPLETE", l),
                    i.Z.unsubscribe("UPLOAD_FAIL", l),
                    "UPLOAD_COMPLETE" === a.type
                      ? e(a.messageRecord)
                      : n(Error("Upload failed")));
                };
                i.Z.subscribe("UPLOAD_COMPLETE", l),
                  i.Z.subscribe("UPLOAD_FAIL", l);
              });
        },
        x = async function (e, t) {
          var i;
          let l =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0,
            o = arguments.length > 4 ? arguments[4] : void 0,
            d = u.Z.getChannel(t);
          if (((i = s.default.getToken()), a.ZP.parse(d, ""), l));
          else {
            if (null == u.Z.getChannel(t))
              throw Error(
                "AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(
                  t,
                ),
              );
            {
              let i = n(966390).Z;
              (e.description = r),
                await i.uploadFiles({
                  channelId: t,
                  uploads: [e],
                  draftType: c.d.ChannelMessage,
                  parsedMessage: o,
                });
            }
          }
        },
        v = async (e) => {
          let {
              file: t,
              reaction: n,
              user: i,
              altText: a,
              requireConfirmation: s = !1,
            } = e,
            u = await l.Z.openPrivateChannel(i.id, !1, !1);
          x(t, u, s, a);
          let c = await m(u);
          if (null != c) {
            let e = (0, o.g1)(n);
            await (0, r.rU)(u, c.id, e);
          }
        },
        f = (e) => {
          let {
              file: t,
              reply: n,
              channel: i,
              altText: l,
              requireConfirmation: r = !1,
            } = e,
            o = a.ZP.parse(i, n);
          return x(t, i.id, r, l, o);
        };
    },
    4646: function (e, t, n) {
      function i(e, t, n) {
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
      n.d(t, {
        k2: function () {
          return a;
        },
      }),
        n(47120);
      let l = new (n(259443).Y)("AssetMap");
      async function a(e) {
        let t = new r(),
          n = Object.entries(e).map((e) => {
            let [n, i] = e;
            return t
              .loadRemoteImage(n, i)
              .catch((e) => l.warn("Failed to load canvas asset", e, n, i));
          });
        return await Promise.all(n), t;
      }
      class r {
        loadFonts() {
          return Promise.resolve();
        }
        async loadRemoteImage(e, t) {
          let n = new Image();
          return (
            (n.src = t),
            (n.crossOrigin = "anonymous"),
            await n.decode(),
            (this.assets[e] = n),
            Promise.resolve()
          );
        }
        get(e) {
          return this.assets[e];
        }
        has(e) {
          return null != this.assets[e];
        }
        constructor() {
          i(this, "assets", {}), i(this, "fontManager", void 0);
        }
      }
    },
    129508: function (e, t, n) {
      n(47120);
      var i = n(512722),
        l = n.n(i),
        a = n(921608),
        r = n(693824);
      function o(e, t, n) {
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
      t.Z = class e {
        getCanvas() {
          return this.canvas;
        }
        setColor(e) {
          this.color = e;
        }
        setFont(e) {
          var t, n, i, l, a;
          (this.font.style =
            null !== (t = e.style) && void 0 !== t ? t : this.font.style),
            (this.font.size =
              null !== (n = e.size) && void 0 !== n ? n : this.font.size),
            (this.font.weight =
              null !== (i = e.weight) && void 0 !== i ? i : this.font.weight),
            (this.font.family =
              null !== (l = e.family) && void 0 !== l ? l : this.font.family),
            (this.font.truncate =
              null !== (a = e.truncate) && void 0 !== a
                ? a
                : this.font.truncate);
        }
        getLoadedImage(e) {
          l()(
            null != this.assetMap,
            "DiscordCanvas: An AssetStore has not been initialized.",
          );
          let t = this.assetMap.get(e);
          if (void 0 === t) {
            console.error(
              "DiscordCanvas: AssetMap hasn't loaded ".concat(
                e,
                ".  Make sure to load it before trying to render.",
              ),
            );
            return;
          }
          return t;
        }
        drawRoundedImageWithFallbacks(e, t, n, i, l) {
          for (let a of e) {
            let e = this.drawRoundedImage(a, t, n, i, l);
            if (e !== r.vP.Failure) return e;
          }
          return r.vP.Failure;
        }
        constructor(e, t) {
          o(this, "color", "black"),
            o(this, "font", {
              style: "normal",
              weight: 300,
              size: a.n,
              family: ["serif"],
              truncate: r.GX.None,
            }),
            o(this, "assetMap", void 0),
            o(this, "canvas", void 0),
            (this.canvas = e),
            (this.assetMap = t);
        }
      };
    },
    665672: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(512722),
        l = n.n(i);
      function a(e, t, n) {
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
      class r {
        setExporter(e) {
          this.exporter = e;
        }
        export(e) {
          l()(
            null != this.exporter,
            "DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.",
          );
          let t = this.canvas.getCanvasForExport();
          return (
            l()(null != t, "DiscordCanvas: Couldn't get a canvas for export."),
            this.exporter.exportCanvas(t, e)
          );
        }
        constructor(e, t) {
          a(this, "canvas", void 0),
            a(this, "exporter", void 0),
            (this.canvas = e),
            (this.exporter = t);
        }
      }
    },
    97008: function (e, t, n) {
      n(411104);
      var i = n(141795),
        l = n(476326),
        a = n(956664),
        r = n(693824);
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
            fileType: o = "png",
            quality: s = 1,
            fileName: u,
          } = t;
          if (n === r.kH.Base64) return this.toDataUrl(e, o, s);
          if (n === r.kH.Blob) {
            let t = this.toDataUrl(e, o, s);
            return (0, a.kD)(t);
          }
          if (n === r.kH.File) {
            let t = this.toDataUrl(e, o, s);
            return await (0, a.Bo)(t, u, "image/png");
          }
          if (n === r.kH.CloudUpload) {
            let { channelId: n } = t,
              r = this.toDataUrl(e, o, s),
              c = await (0, a.Bo)(r, u, "image/png");
            return new i.n({ file: c, platform: l.ow.WEB, isThumbnail: !1 }, n);
          }
          throw Error(
            "DiscordCanvas: ".concat(n, " is not a valid export format."),
          );
        }
      };
    },
    503082: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(512722),
        l = n.n(i),
        a = n(129508),
        r = n(921608),
        o = n(693824);
      function s(e, t, n) {
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
      class u extends a.Z {
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
        setSize(e, t) {
          let { w: n, h: i } = e;
          null != this.context && null != t
            ? ((this.canvas.width = n * t),
              (this.canvas.height = i * t),
              this.context.scale(t, t))
            : ((this.canvas.width = n), (this.canvas.height = i));
        }
        clearRect(e) {
          if (null == this.context) return;
          let { x: t, y: n, w: i, h: l } = e;
          this.context.clearRect(t, n, i, l);
        }
        restoreContext() {
          null != this.context && this.context.restore();
        }
        drawRect(e) {
          let t =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
          if (null == this.context) return;
          let { x: i, y: l, w: a, h: r } = e;
          n && this.setContextProperties(),
            t
              ? this.context.fillRect(i, l, a, r)
              : this.context.strokeRect(i, l, a, r);
        }
        drawRoundedRect(e) {
          let t =
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
          let { x: l, y: a, w: r, h: o } = e;
          i && this.setContextProperties(),
            this.context.beginPath(),
            this.context.roundRect(l, a, r, o, t),
            n ? this.context.fill() : this.context.stroke();
        }
        drawText(e, t, n) {
          var i, a;
          if (null == this.context) return;
          this.setContextProperties();
          let s =
              null !== (i = t.w) && void 0 !== i ? i : this.canvas.width - t.x,
            u = this.context.measureText(e),
            c = !1,
            d = this.font.size,
            h = (e, t) => {
              null != this.context &&
                (n
                  ? this.context.fillText(e, t.x, t.y)
                  : this.context.strokeText(e, t.x, t.y));
            },
            m = (e) => {
              if (null == this.context || u.width <= r.F) return "";
              let t = "".concat(e);
              for (; u.width + r.F > s; )
                (t = t.slice(0, -4)),
                  (u = this.context.measureText(t)),
                  (c = !0);
              return c && (t += "..."), t;
            };
          if (
            (this.font.truncate === o.GX.None && h(e, t),
            this.font.truncate === o.GX.Truncate && h((e = m(e)), t),
            this.font.truncate === o.GX.Wrap)
          ) {
            let n = e.split(" "),
              i = 1 / 0,
              r = "",
              o = 0;
            for (
              null != t.h &&
              ((i = t.h / d),
              l()(
                i > 0,
                "DiscordCavas: boundingBox.h of "
                  .concat(t.h, " results in 0 visible lines with font size of ")
                  .concat(d),
              ));
              n.length > 0;

            )
              if ((u = this.context.measureText(r + " " + n[0])).width > s) {
                let e = !1;
                if (
                  (o + 1 >= i && n.length > 0 && (e = !0),
                  "" !== r
                    ? (h(e ? m(r + "...") : r, { x: t.x, y: t.y + d * o }),
                      (r = ""))
                    : h(m(null !== (a = n.shift()) && void 0 !== a ? a : ""), {
                        x: t.x,
                        y: t.y + d * o,
                      }),
                  e)
                )
                  break;
                o += 1;
              } else
                (r += " ".concat(n.shift())),
                  0 === n.length && h(r, { x: t.x, y: t.y + d * o });
          }
          return {
            x: t.x,
            y: t.y,
            w: u.width,
            h: u.actualBoundingBoxAscent + u.actualBoundingBoxDescent,
          };
        }
        drawFormattedMessage(e, t, n) {
          this.font.truncate === o.GX.Wrap &&
            console.warn(
              "DiscordCavas: `drawFormattedMessage` doesn't currently support wrapping formatted text. The results of this draw likely won't match your expectations.",
            );
          let i = this.font.weight,
            l = (e, t, n) => {
              let l;
              if ("strong" === e.type) this.setFont({ weight: 700 });
              return (
                Array.isArray(e.content)
                  ? (l = a(e.content, t, n))
                  : (l = this.drawText(e.content, t, n)),
                this.setFont({ weight: i }),
                l
              );
            },
            a = (e, t, n) => {
              let i = 0;
              return (
                e.forEach((e) => {
                  let { x: a, y: r, w: o, h: s } = t,
                    u = null != o ? o - i : void 0,
                    c = l(e, { x: a + i, y: r, w: u, h: s }, n);
                  null != c && (i += c.w);
                }),
                { x: t.x + i, y: t.y, w: i, h: this.font.size }
              );
            };
          Array.isArray(e) ? a(e, t, n) : l(e, t, n);
        }
        drawImage(e, t, n) {
          let i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : { fillMode: o.JU.Stretch };
          l()(
            null != this.assetMap,
            "DiscordCavas: `drawImage` requires an AssetMap to be initialized.",
          );
          let { fillMode: a } = i;
          if (null == this.context) return o.vP.Failure;
          let r = this.assetMap.get(e);
          if (null == r) return o.vP.ImageNotLoaded;
          if (null != n) {
            if (a === o.JU.Contain) {
              let i;
              let l = { w: r.width, h: r.height },
                a = +(l.w / l.h).toFixed(1);
              if (+(n.w / n.h).toFixed(1) > a) {
                let e = n.h * a;
                i = { x: t.x + (n.w - e) / 2, y: t.y, w: e, h: n.h };
              } else {
                let e = n.w / a;
                i = { x: t.x, y: t.y + (n.h - e) / 2, w: n.w, h: e };
              }
              return (
                this.drawCroppedImage(
                  e,
                  { x: 0, y: 0, w: l.w, h: l.h },
                  { x: i.x, y: i.y, w: i.w, h: i.h },
                ),
                o.vP.Success
              );
            }
            if (a === o.JU.Cover) {
              var s, u, c, d;
              let l;
              let a = { w: r.width, h: r.height },
                h = +(a.w / a.h).toFixed(1),
                m = +(n.w / n.h).toFixed(1);
              if (m > h) {
                let e = a.w / m;
                l = {
                  x: 0,
                  y:
                    (a.h - e) *
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
                  h: e,
                };
              } else {
                let e = a.h * m;
                l = {
                  x:
                    (r.width - e) *
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
                  w: e,
                  h: r.height,
                };
              }
              return (
                this.drawCroppedImage(e, l, { x: t.x, y: t.y, w: n.w, h: n.h }),
                o.vP.Success
              );
            }
            this.context.drawImage(r, t.x, t.y, n.w, n.h);
          } else this.context.drawImage(r, t.x, t.y);
          return o.vP.Success;
        }
        drawRoundedImage(e, t, n, i, l) {
          if (null == this.context) return o.vP.Failure;
          let { x: a, y: r } = t,
            { w: s, h: u } = n;
          this.context.save();
          let c = new Path2D();
          c.roundRect(a, r, s, u, i), this.context.clip(c);
          let d = this.drawImage(e, t, n, l);
          return this.restoreContext(), d;
        }
        drawCroppedImage(e, t, n) {
          var i;
          if (null == this.context) return o.vP.Failure;
          let l =
            null === (i = this.assetMap) || void 0 === i ? void 0 : i.get(e);
          if (null == l) return o.vP.ImageNotLoaded;
          let { x: a, y: r, w: s, h: u } = t,
            { x: c, y: d, w: h, h: m } = n;
          return (
            this.context.drawImage(l, a, r, s, u, c, d, h, m), o.vP.Success
          );
        }
        drawPath(e, t) {
          let n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 1;
          if (null == this.context) return o.vP.Failure;
          this.setContextProperties(), this.context.save();
          let l = new Path2D(e);
          return (
            this.context.translate(t.x, t.y),
            this.context.scale(i, i),
            n ? this.context.fill(l, "evenodd") : this.context.stroke(l),
            this.restoreContext(),
            o.vP.Success
          );
        }
        setGradientFillStyle(e, t, n) {
          if (null == this.context) return;
          let i = this.context.createLinearGradient(t.x, t.y, n.x, n.y);
          for (let { color: t, stop: n } of e) i.addColorStop(n, t);
          this.context.fillStyle = i;
        }
        drawGradientRect(e, t, n, i) {
          return null == this.context
            ? o.vP.Failure
            : (this.setGradientFillStyle(e, t, n),
              this.drawRect(i, !0, !1),
              o.vP.Success);
        }
        drawRoundedGradientRect(e, t, n, i, l) {
          return null == this.context
            ? o.vP.Failure
            : (this.setGradientFillStyle(e, t, n),
              this.drawRoundedRect(i, l, !0, !1),
              o.vP.Success);
        }
        clip(e, t) {
          if (null == this.context) return;
          this.context.save();
          let { x: n, y: i } = e,
            l = new Path2D(t);
          this.context.translate(n, i), this.context.clip(l);
        }
        clipRect(e, t) {
          if (null == this.context) return;
          this.context.save();
          let { x: n, y: i, w: l, h: a } = e;
          if (t) {
            let e = new Path2D();
            e.moveTo(0, 0),
              e.lineTo(this.canvas.width, 0),
              e.lineTo(this.canvas.width, this.canvas.height),
              e.lineTo(0, this.canvas.height),
              e.lineTo(0, 0),
              e.closePath(),
              e.rect(n, i, l, a),
              this.context.clip(e, "evenodd");
          } else {
            let e = new Path2D();
            e.rect(n, i, l, a), this.context.clip(e);
          }
        }
        clipRoundedRect(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
          if (null == this.context) return;
          this.context.save();
          let { x: i, y: l, w: a, h: r } = e;
          if (n) {
            let e = new Path2D();
            e.moveTo(0, 0),
              e.lineTo(this.canvas.width, 0),
              e.lineTo(this.canvas.width, this.canvas.height),
              e.lineTo(0, this.canvas.height),
              e.lineTo(0, 0),
              e.closePath(),
              e.roundRect(i, l, a, r, t),
              this.context.clip(e, "evenodd");
          } else {
            let e = new Path2D();
            e.roundRect(i, l, a, r, t), this.context.clip(e);
          }
        }
        constructor(e, t) {
          super(e, t),
            s(this, "canvas", void 0),
            s(this, "context", void 0),
            (this.canvas = e),
            (this.context = this.canvas.getContext("2d")),
            null != this.context &&
              (this.context.imageSmoothingQuality = "high");
        }
      }
    },
    921608: function (e, t, n) {
      n.d(t, {
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
    693824: function (e, t, n) {
      var i, l, a, r, o, s, u, c;
      n.d(t, {
        GX: function () {
          return i;
        },
        JU: function () {
          return l;
        },
        kH: function () {
          return a;
        },
        vP: function () {
          return r;
        },
      }),
        ((o = i || (i = {}))[(o.None = 0)] = "None"),
        (o[(o.Truncate = 1)] = "Truncate"),
        (o[(o.Wrap = 2)] = "Wrap"),
        ((s = l || (l = {}))[(s.Stretch = 0)] = "Stretch"),
        (s[(s.Contain = 1)] = "Contain"),
        (s[(s.Cover = 2)] = "Cover"),
        ((u = a || (a = {}))[(u.Base64 = 0)] = "Base64"),
        (u[(u.Blob = 1)] = "Blob"),
        (u[(u.File = 2)] = "File"),
        (u[(u.CloudUpload = 3)] = "CloudUpload"),
        ((c = r || (r = {}))[(c.Success = 0)] = "Success"),
        (c[(c.Failure = 1)] = "Failure"),
        (c[(c.ImageNotLoaded = 2)] = "ImageNotLoaded");
    },
    690725: function (e, t, n) {
      n.d(t, {
        f: function () {
          return a;
        },
      }),
        n(411104);
      var i = n(4646),
        l = n(665672);
      async function a(e) {
        let { assetsToLoad: t, drawImage: a, exportConfigs: r } = e,
          o = await (0, i.k2)(t);
        await o.loadFonts();
        {
          let e = n(503082).Z,
            t = n(97008).Z,
            i = document.createElement("canvas"),
            s = new e(i, o),
            u = new t(),
            c = new l.Z(s, u);
          a(c.canvas);
          let d = await c.export(r);
          return i.remove(), d;
        }
      }
    },
    485267: function (e, t, n) {
      n.d(t, {
        Bt: function () {
          return d;
        },
        Jn: function () {
          return c;
        },
        lY: function () {
          return u;
        },
      });
      var i = n(570140);
      n(100527), n(592125);
      var l = n(944486),
        a = n(914010);
      n(594174);
      var r = n(626135),
        o = n(71585);
      n(295955);
      var s = n(981631);
      let u = () => {
        i.Z.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" }),
          r.default.track(s.rMx.MEMBERLIST_CONTENT_FEED_HIDDEN, {
            channel_id: l.Z.getChannelId(),
            guild_id: a.Z.getGuildId(),
            hidden: o.Z.hidden,
          });
      };
      function c() {
        i.Z.dispatch({ type: "GAME_PROFILE_OPEN" });
      }
      function d() {
        i.Z.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
      }
    },
    295955: function () {},
    327220: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(47120);
      var i = n(192379),
        l = n(442837),
        a = n(592125),
        r = n(9156);
      function o(e) {
        let t = (0, l.e7)([a.Z], () => a.Z.getPrivateChannelsVersion()),
          n = (0, l.e7)([a.Z], () => a.Z.getMutableDMsByUserIds(), [t]),
          o = (0, l.e7)([r.ZP], () => r.ZP.getMutedChannels(null)),
          s = i.useMemo(() => {
            let e = new Set();
            for (let t in n) {
              let i = n[t];
              null != i && o.has(i) && e.add(t);
            }
            return e;
          }, [n, o]);
        return i.useMemo(
          () =>
            null == e
              ? void 0
              : e.filter((e) => {
                  for (let t of e.participants) if (s.has(t)) return !1;
                  return !0;
                }),
          [e, s],
        );
      }
    },
    959580: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(442837),
        l = n(719247);
      let a = [];
      function r(e) {
        return (0, i.Wu)(
          [l.Z],
          () => (null == e ? a : e.filter(l.Z.canRenderContent)),
          [e],
        );
      }
    },
    371177: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(192379),
        l = n(442837),
        a = n(902704),
        r = n(158776),
        o = n(561308),
        s = n(231338);
      function u(e) {
        let t = i.useRef(new Set()),
          n = i.useMemo(() => {
            let n = new Set(null == e ? void 0 : e.map((e) => e.author_id));
            return (
              !(0, a.E)([...t.current], [...n]) && (t.current = n), t.current
            );
          }, [e]),
          u = (0, l.Wu)([r.Z], () =>
            Array.from(n).filter((e) => {
              let t = r.Z.getStatus(e);
              return null !== t && [s.Sk.OFFLINE, s.Sk.INVISIBLE].includes(t);
            }),
          );
        return i.useMemo(() => {
          let t = new Set(u);
          return null == e
            ? void 0
            : e.filter((e) => !(0, o.kr)(e) || !t.has(e.author_id));
        }, [e, u]);
      }
    },
    69259: function (e, t, n) {
      n.d(t, {
        L: function () {
          return s;
        },
        e: function () {
          return o;
        },
      }),
        n(47120);
      var i = n(626135),
        l = n(162461),
        a = n(206583),
        r = n(981631);
      let o = function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            n[a - 1] = arguments[a];
          let { trackingEnabled: r } = (0, l.nP)(
            "trackSampledContentEntryAnalytics:".concat(e),
          );
          return r ? i.default.track(e, ...n) : Promise.resolve();
        },
        s = (e, t) => {
          o(r.rMx.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
            request_id: t.requestId,
            item_id: t.entry.id,
            surface_type: a.Kd.GUILD_MEMBER_LIST,
            channel_id: t.channelId,
            guild_id: t.guildId,
            interaction_type: e,
            destination_channel_id: t.destinationChannelId,
            destination_guild_id: t.destinationGuildId,
            rich_presence_name: t.richPresenceName,
          });
        };
    },
    907152: function (e, t, n) {
      n.d(t, {
        C4: function () {
          return g;
        },
      }),
        n(653041),
        n(627494),
        n(757143),
        n(512722);
      var i = n(913527),
        l = n.n(i),
        a = n(705512);
      n(812206);
      var r = n(55e3);
      n(220082);
      var o = n(693824),
        s = n(690725);
      n(706454), n(594174);
      var u = n(70956);
      n(5192);
      var c = n(709054),
        d = n(561308);
      n(206295);
      var h = n(737583),
        m = n(169040),
        x = n(388032);
      let v = (e, t) => ({
          AvatarImage1: e[0],
          ...(null != e[1] && { AvatarImage2: e[1] }),
          ...(null != e[2] && { AvatarImage3: e[2] }),
          ...(null != t && { ApplicationImage: t }),
        }),
        f = (e, t) => {
          let n = [{ iconPath: m.NM, text: t }],
            i = c.default.extractTimestamp(e.extra.application_id);
          if (
            (7 >= l()().diff(l()(i), "days") &&
              n.push({ iconPath: m.As, text: x.intl.string(x.t.vYuyWV) }),
            (0, d.Ol)(e) &&
              n.push({ iconPath: m.fO, text: x.intl.string(x.t.keY6mZ) }),
            (0, d.q_)(e))
          ) {
            let t = (0, d.vU)(e);
            n.push({
              iconPath: m.t1,
              text: x.intl.formatToPlainString(x.t["Klie/P"], { days: t }),
            });
          }
          (0, d.ig)(e) === a.o.GLOBAL &&
            n.push({ iconPath: m.Op, text: x.intl.string(x.t.kAlUs7) });
          let r = (0, d.dw)(e);
          if (
            (null != r && n.push({ iconPath: m.Z, text: (0, d.GE)(r) }),
            (0, d.V5)(e))
          ) {
            let { text: t } = (0, d.zo)(e);
            null != t && n.push({ iconPath: m.Md, text: t });
          }
          if ((0, d.Jd)(e)) {
            let t = (0, d.yA)(e);
            if (null != t) {
              let e = x.intl.formatToPlainString(x.t.C0Axoa, {
                hours: Math.round(t / u.Z.Seconds.HOUR),
              });
              return [
                {
                  iconPath: m.eF,
                  text: ""
                    .concat(x.intl.string(x.t["/50eHh"]), " — ")
                    .concat(e),
                },
              ];
            }
          }
          return n;
        },
        p = (e, t) => {
          let {
              timestamp: n,
              colors: i,
              description: l,
              entry: a,
              numAvatars: s,
            } = t,
            u = i.map((e, t) => ({ color: e, stop: t }));
          e.setSize({ w: m.nx, h: m.bg }, 4),
            e.drawRoundedGradientRect(
              u,
              { x: 0, y: m.bg },
              { x: m.nx, y: 0 },
              { x: 0, y: 0, h: m.bg, w: m.nx },
              8,
            ),
            e.setColor("white"),
            e.drawRoundedImage(
              "ApplicationImage",
              { x: m.sB, y: m.sB },
              { w: m.Pu, h: m.Pu },
              8,
            ) === o.vP.Failure &&
              e.drawPath(r.Cv, { x: m.sB, y: m.sB }, !0, 2 + 2 / 3);
          (0, h.l)({
            canvas: e,
            avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(
              0,
              s,
            ),
            position: { x: m.Iq, y: m.sB },
            avatarImageSize: m.$S,
          }),
            e.setColor("white"),
            e.setFont({
              size: 16,
              family: m.I8,
              weight: m.Ue,
              truncate: o.GX.Wrap,
            }),
            e.drawText(l, { x: m.Iq, y: 64, h: 32, w: m.kC }, !0);
          let c = f(a, n);
          (0, h.J)({
            canvas: e,
            badges: c,
            startPosition: m.Iq,
            maxWidth: m.kC,
          });
        },
        g = async (e) => {
          let {
              applicationImageSrc: t,
              entry: n,
              avatarSrcs: i,
              description: l,
              timestamp: a,
              colors: r,
              channelId: u,
            } = e,
            c = n.extra.activity_name,
            d = v(i, t);
          return await (0, s.f)({
            assetsToLoad: d,
            drawImage: (e) =>
              p(e, {
                timestamp: a,
                colors: r,
                description: l,
                entry: n,
                numAvatars: i.length,
              }),
            exportConfigs: {
              format: o.kH.CloudUpload,
              quality: 1,
              fileName: "user-reacting-to-".concat(c, ".png").toLowerCase(),
              fileType: "png",
              channelId: u,
            },
          });
        };
    },
    919394: function (e, t, n) {
      n.d(t, {
        SO: function () {
          return g;
        },
      }),
        n(653041),
        n(512722);
      var i = n(913527),
        l = n.n(i),
        a = n(705512);
      n(812206);
      var r = n(55e3);
      n(220082);
      var o = n(693824),
        s = n(690725);
      n(706454), n(594174);
      var u = n(70956),
        c = n(709054),
        d = n(561308);
      n(206295);
      var h = n(737583);
      n(438226);
      var m = n(169040),
        x = n(388032);
      let v = (e, t) => ({
          AvatarImage1: e[0],
          ...(null != e[1] && { AvatarImage2: e[1] }),
          ...(null != e[2] && { AvatarImage3: e[2] }),
          ...(null != t && { ApplicationImage: t }),
        }),
        f = (e, t) => {
          let n = [{ iconPath: m.NM, text: t }],
            i = c.default.extractTimestamp(e.extra.application_id);
          if (
            (7 >= l()().diff(l()(i), "days") &&
              n.push({ iconPath: m.As, text: x.intl.string(x.t.vYuyWV) }),
            (0, d.Ol)(e) &&
              n.push({ iconPath: m.fO, text: x.intl.string(x.t.keY6mZ) }),
            (0, d.q_)(e))
          ) {
            let t = (0, d.vU)(e);
            n.push({
              iconPath: m.t1,
              text: x.intl.formatToPlainString(x.t["Klie/P"], { days: t }),
            });
          }
          (0, d.ig)(e) === a.o.GLOBAL &&
            n.push({ iconPath: m.Op, text: x.intl.string(x.t.kAlUs7) });
          let r = (0, d.dw)(e);
          if (
            (null != r && n.push({ iconPath: m.Z, text: (0, d.GE)(r) }),
            (0, d.V5)(e))
          ) {
            let { text: t } = (0, d.zo)(e);
            null != t && n.push({ iconPath: m.Md, text: t });
          }
          if ((0, d.Jd)(e)) {
            let t = (0, d.yA)(e);
            if (null != t) {
              let e = x.intl.formatToPlainString(x.t.C0Axoa, {
                hours: Math.round(t / u.Z.Seconds.HOUR),
              });
              return [
                {
                  iconPath: m.eF,
                  text: ""
                    .concat(x.intl.string(x.t["/50eHh"]), " — ")
                    .concat(e),
                },
              ];
            }
          }
          return n;
        },
        p = (e, t) => {
          let {
              timestamp: n,
              colors: i,
              description: l,
              entry: a,
              numAvatars: s,
            } = t,
            u = i.map((e, t) => ({ color: e, stop: t }));
          e.setSize({ w: m.nx, h: m.bg }, 4),
            e.drawRoundedGradientRect(
              u,
              { x: 0, y: m.bg },
              { x: m.nx, y: 0 },
              { x: 0, y: 0, h: m.bg, w: m.nx },
              8,
            ),
            e.setColor("white"),
            e.drawRoundedImage(
              "ApplicationImage",
              { x: m.sB, y: m.sB },
              { w: m.Pu, h: m.Pu },
              8,
            ) === o.vP.Failure &&
              e.drawPath(r.Cv, { x: m.sB, y: m.sB }, !0, 2 + 2 / 3);
          (0, h.l)({
            canvas: e,
            avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(
              0,
              s,
            ),
            position: { x: m.Iq, y: m.sB },
            avatarImageSize: m.$S,
          }),
            e.setColor("white"),
            e.setFont({
              size: 16,
              family: m.I8,
              weight: m.Ue,
              truncate: o.GX.Wrap,
            }),
            e.drawText(l, { x: m.Iq, y: 64, h: 32, w: m.kC }, !0);
          let c = f(a, n);
          (0, h.J)({
            canvas: e,
            badges: c,
            startPosition: m.Iq,
            maxWidth: m.kC,
          });
        },
        g = async (e) => {
          let {
              applicationImageSrc: t,
              entry: n,
              avatarSrcs: i,
              description: l,
              timestamp: a,
              colors: r,
              channelId: u,
            } = e,
            c = n.extra.game_name,
            d = v(i, t);
          return await (0, s.f)({
            assetsToLoad: d,
            drawImage: (e) =>
              p(e, {
                timestamp: a,
                colors: r,
                description: l,
                entry: n,
                numAvatars: i.length,
              }),
            exportConfigs: {
              format: o.kH.CloudUpload,
              quality: 1,
              fileName: "user-reacting-to-".concat(c, ".png").toLowerCase(),
              fileType: "png",
              channelId: u,
            },
          });
        };
    },
    169040: function (e, t, n) {
      n.d(t, {
        $S: function () {
          return g;
        },
        As: function () {
          return m;
        },
        I8: function () {
          return w;
        },
        Iq: function () {
          return C;
        },
        Md: function () {
          return s;
        },
        NC: function () {
          return j;
        },
        NM: function () {
          return i;
        },
        Op: function () {
          return h;
        },
        PW: function () {
          return y;
        },
        Pu: function () {
          return p;
        },
        Ue: function () {
          return T;
        },
        Z: function () {
          return c;
        },
        bg: function () {
          return v;
        },
        eF: function () {
          return u;
        },
        f0: function () {
          return P;
        },
        fO: function () {
          return l;
        },
        fj: function () {
          return o;
        },
        i6: function () {
          return a;
        },
        kC: function () {
          return I;
        },
        m2: function () {
          return Z;
        },
        mb: function () {
          return r;
        },
        nx: function () {
          return x;
        },
        sB: function () {
          return f;
        },
        t1: function () {
          return d;
        },
      });
      let i =
          "M20.97 4.06c0 .18.08.35.24.43.55.28.9.82 1.04 1.42.3 1.24.75 3.7.75 7.09v4.91a3.09 3.09 0 0 1-5.85 1.38l-1.76-3.51a1.09 1.09 0 0 0-1.23-.55c-.57.13-1.36.27-2.16.27s-1.6-.14-2.16-.27c-.49-.11-1 .1-1.23.55l-1.76 3.51A3.09 3.09 0 0 1 1 17.91V13c0-3.38.46-5.85.75-7.1.15-.6.49-1.13 1.04-1.4a.47.47 0 0 0 .24-.44c0-.7.48-1.32 1.2-1.47l2.93-.62c.5-.1 1 .06 1.36.4.35.34.78.71 1.28.68a42.4 42.4 0 0 1 4.4 0c.5.03.93-.34 1.28-.69.35-.33.86-.5 1.36-.39l2.94.62c.7.15 1.19.78 1.19 1.47ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
        l =
          "M11.33 13.68c.41.27.93.27 1.34 0 1.73-1.1 6.2-4.3 6.2-8.02 0-2.02-1.6-3.66-3.59-3.66-1.46 0-2.42.58-3.28 1.44A4.33 4.33 0 0 0 8.72 2a3.63 3.63 0 0 0-3.6 3.66c0 3.72 4.48 6.92 6.2 8.02Z M3.93 13.84a.94.94 0 0 0-.93.94 5.6 5.6 0 0 0 6.48 5.6l1.02-.18v1.27c0 .85.67 1.53 1.5 1.53s1.5-.68 1.5-1.53V20.2l1.02.17A5.6 5.6 0 0 0 21 14.78a.94.94 0 0 0-.93-.94h-2.24a5.6 5.6 0 0 0-4.89 2.9L12 18.41l-.94-1.69a5.6 5.6 0 0 0-4.89-2.9H3.93Z",
        a =
          "M 4 1 C 2.3431 1 1 2.3431 1 4 V 13 C 1 14.6569 2.3431 16 4 16 H 20 C 21.6568 16 23 14.6569 23 13 V 4 C 23 2.3431 21.6568 1 20 1 H 4 Z M 6 18 C 5.4477 18 5 18.4477 5 19 C 5 19.5523 5.4477 20 6 20 H 18 C 18.5523 20 19 19.5523 19 19 C 19 18.4477 18.5523 18 18 18 H 6 Z",
        r =
          "M18.03 2.8a11 11 0 1 0 2.52 2.28c-.28-.34-.8-.13-.8.31v7.37c0 1-.4 1.95-1.1 2.65l-.78.78a.6.6 0 0 0-.14.53c.08.53-.08 1.1-.5 1.52l-1 1a1.75 1.75 0 1 1-2.47-2.48l1-1c.42-.41.99-.57 1.52-.49.2.03.4 0 .53-.14l.78-.78c.42-.42.66-1 .66-1.6V3.22a.49.49 0 0 0-.22-.41ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7-2a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 1 0 0-2 8 8 0 0 0-8 8 1 1 0 0 0 1 1Z",
        o =
          "M3.11 8H6v10.82c0 .86.37 1.68 1 2.27.46.43 1.02.71 1.63.84A1 1 0 0 0 9 22h10a4 4 0 0 0 4-4v-1a2 2 0 0 0-2-2h-1V5a3 3 0 0 0-3-3H4.67c-.87 0-1.7.32-2.34.9-.63.6-1 1.42-1 2.28 0 .71.3 1.35.52 1.75a5.35 5.35 0 0 0 .48.7l.01.01h.01L3.11 7l-.76.65a1 1 0 0 0 .76.35Zm1.56-4c-.38 0-.72.14-.97.37-.24.23-.37.52-.37.81a1.69 1.69 0 0 0 .3.82H6v-.83c0-.29-.13-.58-.37-.8C5.4 4.14 5.04 4 4.67 4Zm5 13a3.58 3.58 0 0 1 0 3H19a2 2 0 0 0 2-2v-1H9.66ZM3.86 6.35ZM11 8a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Zm-1 5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z",
        s =
          "M12 22a9 9 0 0 0 7.03-14.62l.68-.67a1 1 0 0 0-1.42-1.42l-.67.68A8.96 8.96 0 0 0 13 4.05V3h2a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2h2v1.05c-1.74.2-3.32.88-4.62 1.92l-.67-.68a1 1 0 0 0-1.42 1.42l.68.67A9 9 0 0 0 12 22Zm3.7-11.3a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 0 1.4 1.4l3-3Z",
        u =
          "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
        c =
          "M4 12a8 8 0 0 1 14.93-4H15a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v3a9.98 9.98 0 0 0-18 6 10 10 0 0 0 16.29 7.78 1 1 0 0 0-1.26-1.56A8 8 0 0 1 4 12Z",
        d =
          "M7.65 21.75a1 1 0 0 0 1.64.96l11.24-9.96a1 1 0 0 0-.66-1.75h-4.81a.5.5 0 0 1-.5-.6l1.79-8.15a1 1 0 0 0-1.64-.96L3.47 11.25A1 1 0 0 0 4.13 13h4.81c.32 0 .56.3.5.6l-1.79 8.15Z",
        h =
          "M3 14a9 9 0 1 0 18 0c0-2.63-.61-5.22-1.79-7.58L18.2 4.38a.7.7 0 0 0-1.3.18l-.78 3.9a.66.66 0 0 1-1.27.11L12.22 1.6a.9.9 0 0 0-1.48-.33l-4.2 4.2A12.07 12.07 0 0 0 3 14Zm9.26-.84a.57.57 0 0 0-1-.23L9.6 15a3.08 3.08 0 1 0 5.12.48c-.14-.26-.5-.28-.71-.06L13 16.5l-.74-3.34Z",
        m =
          "M17.93 1.51a.74.74 0 0 0-1.41 0l-1.13 3.47h-3.65a.74.74 0 0 0-.43 1.35l2.95 2.14-1.13 3.47a.74.74 0 0 0 1.14.83l2.95-2.15 2.96 2.15a.74.74 0 0 0 1.14-.83l-1.13-3.47 2.95-2.14a.74.74 0 0 0-.43-1.35h-3.65l-1.13-3.47ZM10.7 14.7a1 1 0 0 0-1.4-1.4l-8 8a1 1 0 1 0 1.4 1.4l8-8ZM9.7 8.3a1 1 0 0 1 0 1.4l-6 6a1 1 0 0 1-1.4-1.4l6-6a1 1 0 0 1 1.4 0ZM15.7 15.7a1 1 0 0 0-1.4-1.4l-6 6a1 1 0 1 0 1.4 1.4l6-6Z",
        x = 400,
        v = 120,
        f = 12,
        p = 96,
        g = 32,
        C = 120,
        I = 260,
        P = 88,
        Z = 99,
        y = 12,
        j = 18,
        w = ["gg sans", "sans-serif"],
        T = 500;
    },
    737583: function (e, t, n) {
      n.d(t, {
        J: function () {
          return a;
        },
        l: function () {
          return r;
        },
      }),
        n(47120);
      var i = n(693824),
        l = n(169040);
      function a(e) {
        let t,
          { canvas: n, badges: a, startPosition: r, maxWidth: o } = e;
        for (let { iconPath: e, text: s } of (n.setFont({
          size: 12,
          family: l.I8,
          weight: l.Ue,
          truncate: i.GX.None,
        }),
        a)) {
          let i = null != t ? t.w + t.x + l.PW : r,
            a = null != t ? t.w + t.x + l.PW + l.NC : r + l.NC;
          n.drawPath(e, { x: i, y: l.f0 }, !0, 0.6),
            (t = n.drawText(s, { x: a, y: l.m2, w: o }, !0));
        }
      }
      function r(e) {
        let {
          canvas: t,
          avatarSrcs: n,
          position: { x: l, y: a },
          avatarImageSize: r,
        } = e;
        for (let e = 0; e < n.length; e++)
          e < n.length - 1 &&
            t.clipRoundedRect(
              { x: l + (e + 1) * (r - 8) - 2, y: a - 1, w: r + 2, h: r + 2 },
              r / 2,
              !0,
            ),
            t.drawRoundedImage(
              n[e],
              { x: l + e * (r - 8), y: a },
              { w: r, h: r },
              50,
              { fillMode: i.JU.Cover },
            ),
            t.restoreContext();
      }
    },
    438226: function (e, t, n) {
      n.d(t, {
        HV: function () {
          return s;
        },
        IS: function () {
          return r;
        },
        VY: function () {
          return u;
        },
      }),
        n(627494),
        n(757143),
        n(201133);
      var i = n(5192),
        l = n(561308),
        a = n(388032);
      let r = (e, t) =>
          a.intl.formatToPlainString(a.t.tAwI1t, {
            username: t.username,
            activity: e.extra.game_name,
          }),
        o = (e) => {
          let t = (0, l.kr)(e);
          return (0, l.Ol)(e)
            ? t
              ? a.t.MHO1AQ
              : a.t.i7AOz8
            : t
              ? a.t.lLPKY2
              : a.t["bES+y8"];
        },
        s = (e, t, n) => {
          let l = o(e),
            r = i.ZP.getName(
              null == t ? void 0 : t.guild_id,
              null == t ? void 0 : t.id,
              n,
            ),
            s = e.extra.game_name;
          return a.intl
            .formatToMarkdownString(l, { gameName: s, userName: r })
            .replaceAll("*", "");
        },
        u = (e) => {
          let { entry: t, channel: n, users: r, countOthers: o } = e,
            s = (0, l.kr)(t) ? a.t.QaUWPT : a.t["7j/5mp"];
          return a.intl
            .formatToMarkdownString(s, {
              gameName: t.extra.game_name,
              user1: i.ZP.getName(
                null == n ? void 0 : n.guild_id,
                null == n ? void 0 : n.id,
                r[0],
              ),
              user2: i.ZP.getName(
                null == n ? void 0 : n.guild_id,
                null == n ? void 0 : n.id,
                r[1],
              ),
              countOthers: o,
            })
            .replaceAll("*", "");
        };
    },
    256726: function (e, t, n) {
      n.d(t, {
        CR: function () {
          return x;
        },
        UU: function () {
          return h;
        },
        jE: function () {
          return d;
        },
      }),
        n(627494),
        n(757143);
      var i = n(884439),
        l = n(55e3),
        a = n(693824),
        r = n(690725),
        o = n(561308),
        s = n(737583),
        u = n(169040),
        c = n(388032);
      let d = (e) => {
          let { timestamp: t } = e;
          return [{ iconPath: u.mb, text: t }];
        },
        h = (e) => {
          var t;
          let n =
            null === (t = (0, o.PJ)(e, i.N.AGGREGATE_COUNT)) || void 0 === t
              ? void 0
              : t.count;
          return null == n
            ? []
            : [
                {
                  iconPath: u.eF,
                  text: c.intl.formatToPlainString(c.t.HtifnJ, { count: n }),
                },
              ];
        },
        m = (e) => {
          let { avatarSrc: t, mediaImageSrc: n } = e;
          return { AvatarImage: t, ...(null != n && { MediaImage: n }) };
        },
        x = async (e) => {
          let {
              user: t,
              channel: n,
              mediaImageSrc: i,
              artist: o,
              description: c,
              colors: d,
              badges: h,
            } = e,
            x = m({
              avatarSrc: t.getAvatarURL(n.guild_id, 128),
              mediaImageSrc: i,
            }),
            v = o.replaceAll(/[^a-zA-Z0-9 ]/g, "").replaceAll(" ", "-");
          return await (0, r.f)({
            assetsToLoad: x,
            drawImage: (e) => {
              (function (e, t) {
                let n = t.map((e, t) => ({ color: e, stop: t }));
                e.setSize({ w: u.nx, h: u.bg }, 4),
                  e.drawRoundedGradientRect(
                    n,
                    { x: 0, y: u.bg },
                    { x: u.nx, y: 0 },
                    { x: 0, y: 0, h: u.bg, w: u.nx },
                    8,
                  );
              })(e, d),
                (function (e) {
                  e.drawRoundedImage(
                    "MediaImage",
                    { x: u.sB, y: u.sB },
                    { w: u.Pu, h: u.Pu },
                    8,
                    { fillMode: a.JU.Contain },
                  ) === a.vP.Failure &&
                    e.drawPath(l.Cv, { x: u.sB, y: u.sB }, !0, 2 + 2 / 3);
                })(e),
                (function (e) {
                  e.drawRoundedImage(
                    "AvatarImage",
                    { x: u.Iq, y: u.sB },
                    { w: u.$S, h: u.$S },
                    50,
                  );
                })(e),
                (function (e, t) {
                  e.setColor("white"),
                    e.setFont({
                      size: 16,
                      family: u.I8,
                      weight: u.Ue,
                      truncate: a.GX.Wrap,
                    }),
                    e.drawText(t, { x: u.Iq, y: 64, h: 32, w: u.kC }, !0);
                })(e, c),
                (0, s.J)({
                  canvas: e,
                  badges: h,
                  startPosition: u.Iq,
                  maxWidth: u.kC,
                });
            },
            exportConfigs: {
              format: a.kH.CloudUpload,
              quality: 1,
              fileName: "user-reacting-to-".concat(v, ".png").toLowerCase(),
              fileType: "png",
              channelId: n.id,
            },
          });
        };
    },
    644810: function (e, t, n) {
      n.d(t, {
        B: function () {
          return c;
        },
      }),
        n(653041);
      var i = n(55e3),
        l = n(693824),
        a = n(690725),
        r = n(737583),
        o = n(169040);
      let s = (e, t, n) => ({
          AvatarImage: e,
          ...(null != t && { MediaImage: t }),
          ...(null != n && { ApplicationImage: n }),
        }),
        u = (e, t) => {
          let n = [{ iconPath: o.i6, text: e }];
          return null != t && n.push({ iconPath: o.fj, text: t }), n;
        },
        c = async (e) => {
          let {
              mediaImageSrc: t,
              entry: n,
              avatarSrc: c,
              description: d,
              timestamp: h,
              episodeDescription: m,
              colors: x,
              channelId: v,
            } = e,
            f = n.extra.media_title,
            p = s(c, t);
          return await (0, a.f)({
            assetsToLoad: p,
            drawImage: (e) => {
              let t = x.map((e, t) => ({ color: e, stop: t }));
              e.setSize({ w: o.nx, h: o.bg }, 4),
                e.drawRoundedGradientRect(
                  t,
                  { x: 0, y: o.bg },
                  { x: o.nx, y: 0 },
                  { x: 0, y: 0, h: o.bg, w: o.nx },
                  8,
                ),
                e.setColor("white");
              let n = e.drawRoundedImage(
                "MediaImage",
                { x: o.sB, y: o.sB },
                { w: o.Pu, h: o.Pu },
                8,
                { fillMode: l.JU.Contain },
              );
              n === l.vP.Failure &&
                (n = e.drawRoundedImage(
                  "ApplicationImage",
                  { x: o.sB, y: o.sB },
                  { w: o.Pu, h: o.Pu },
                  8,
                )),
                n === l.vP.Failure &&
                  e.drawPath(i.Cv, { x: o.sB, y: o.sB }, !0, 2 + 2 / 3),
                e.drawRoundedImage(
                  "AvatarImage",
                  { x: o.Iq, y: o.sB },
                  { w: o.$S, h: o.$S },
                  50,
                ),
                e.setFont({
                  size: 16,
                  family: o.I8,
                  weight: o.Ue,
                  truncate: l.GX.Wrap,
                }),
                e.drawText(d, { x: o.Iq, y: 64, h: 32, w: o.kC }, !0);
              let a = u(h, m);
              (0, r.J)({
                canvas: e,
                badges: a,
                startPosition: o.Iq,
                maxWidth: o.kC,
              });
            },
            exportConfigs: {
              format: l.kH.CloudUpload,
              quality: 1,
              fileName: "user-reacting-to-".concat(f, ".png").toLowerCase(),
              fileType: "png",
              channelId: v,
            },
          });
        };
    },
    107062: function (e, t, n) {
      n(627494), n(757143);
      var i = n(200651),
        l = n(192379),
        a = n(442837),
        r = n(481060),
        o = n(620662),
        s = n(841784),
        u = n(429589),
        c = n(499254),
        d = n(827498),
        h = n(541716),
        m = n(706454),
        x = n(823379),
        v = n(5192),
        f = n(379357),
        p = n(192918),
        g = n(561308),
        C = n(907152),
        I = n(206295),
        P = n(297781),
        Z = n(591853),
        y = n(797342),
        j = n(981631),
        w = n(388032);
      let T = (e, t) =>
          w.intl.formatToPlainString(w.t.tAwI1t, {
            username: t.username,
            activity: e.extra.activity_name,
          }),
        L = (e, t, n) => {
          let i = w.t["bES+y8"],
            l = v.ZP.getName(t.guild_id, t.id, n),
            a = e.extra.activity_name;
          return w.intl
            .formatToMarkdownString(i, { gameName: a, userName: l })
            .replaceAll("*", "");
        },
        S = (e) => {
          let { entry: t, channel: n, users: i, countOthers: l } = e,
            a = w.t["7j/5mp"];
          return w.intl
            .formatToMarkdownString(a, {
              gameName: t.extra.activity_name,
              user1: v.ZP.getName(
                null == n ? void 0 : n.guild_id,
                null == n ? void 0 : n.id,
                i[0],
              ),
              user2: v.ZP.getName(
                null == n ? void 0 : n.guild_id,
                null == n ? void 0 : n.id,
                i[1],
              ),
              countOthers: l,
            })
            .replaceAll("*", "");
        };
      t.ZP = (e) => {
        let {
            channel: t,
            entry: n,
            onReaction: v,
            onVoiceChannelPreview: N,
          } = e,
          { largeImage: E } = (0, f.rv)({ entry: n }),
          {
            user: _,
            details: A,
            activity: R,
            embeddedActivity: b,
          } = (0, y.n)(n),
          { primaryColor: M, secondaryColor: O } = (0, I.Z)(
            null == E ? void 0 : E.src,
          ),
          k = (0, a.e7)([m.default], () => m.default.locale),
          {
            displayParticipants: H,
            participant1: U,
            participant2: D,
            numOtherParticipants: B,
          } = (0, p.Z)(n, 3),
          V = () => {
            c.__(d._b.TEXT, h.I.NORMAL, {
              applicationId: n.extra.application_id,
            });
          },
          F = l.useCallback(
            (e) => {
              if (
                (null == E ? void 0 : E.src) == null ||
                null == t ||
                null == _
              )
                return;
              let i =
                B > 0
                  ? S({ entry: n, channel: t, users: [U, D], countOthers: B })
                  : L(n, t, _);
              return (0, C.C4)({
                entry: n,
                applicationImageSrc: null == E ? void 0 : E.src,
                avatarSrcs: H.map((e) => e.getAvatarURL(t.guild_id, 128)),
                description: i,
                timestamp: (0, g.yh)(n, k),
                colors: [M, O],
                channelId: e,
              });
            },
            [null == E ? void 0 : E.src, t, H, n, k, B, U, D, M, O, _],
          );
        if (null == _) return null;
        let G = (0, i.jsx)(P.PZ, { location: P.Gt.POPOUT, entry: n }),
          z = (0, i.jsx)(Z.wG, {
            channel: t,
            userDescription: (0, g.kr)(n) ? w.t.vPg1JS : w.t.rPqqtr,
            title: n.extra.activity_name,
            subtitle: A,
            badges: G,
            entry: n,
            onClickTitle: V,
            onClickSubtitle: V,
            onClickThumbnail: V,
          }),
          W = (0, o.Z)(R, j.xjy.JOIN) || (0, s.Z)(R),
          q = W
            ? (0, i.jsx)(u.Z, {
                isEmbedded: (0, s.Z)(R),
                embeddedActivity: b,
                activity: R,
                user: _,
                ButtonComponent: (e) =>
                  (0, i.jsx)(Z.Ll, { IconComponent: r.DoorEnterIcon, ...e }),
              })
            : null,
          Y = (0, i.jsx)(Z.Ll, {
            onClick: V,
            IconComponent: r.AppsIcon,
            children: w.intl.string(w.t.GDWYR0),
          }),
          J = [W ? q : Y].filter(x.lm);
        return (0, i.jsxs)(Z.yR, {
          children: [
            z,
            (0, i.jsx)(Z.St, {
              children: (0, i.jsx)(Z.WT, {
                onReaction: v,
                onVoiceChannelPreview: N,
                user: _,
                channel: t,
                generateReactionImage: F,
                reactionImageAltText: T(n, _),
                entry: n,
                buttons: J,
              }),
            }),
          ],
        });
      };
    },
    178762: function (e, t, n) {
      n.d(t, {
        J: function () {
          return O;
        },
        YN: function () {
          return A;
        },
        iZ: function () {
          return R;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        a = n(392711),
        r = n.n(a),
        o = n(91192),
        s = n(876215),
        u = n(442837),
        c = n(481060),
        d = n(239091),
        h = n(607070),
        m = n(704041),
        x = n(475676),
        v = n(439170),
        f = n(594174),
        p = n(69259),
        g = n(370370),
        C = n(107062),
        I = n(91140),
        P = n(227172),
        Z = n(551228),
        y = n(678869),
        j = n(278399),
        w = n(886217),
        T = n(555672),
        L = n(644548),
        S = n(335326),
        N = n(268010),
        E = n(797342),
        _ = n(206583);
      let A = 72;
      function R(e) {
        return (null == e ? void 0 : e.type) === v.so.CONTENT_INVENTORY ? A : 0;
      }
      let b = (e) => {
          let { entry: t, ...n } = e;
          switch (t.content_type) {
            case s.s.PLAYED_GAME:
              return (0, i.jsx)(I.Z, { ...n, entry: t });
            case s.s.WATCHED_MEDIA:
              return (0, i.jsx)(S.Z, { ...n, entry: t });
            case s.s.TOP_GAME:
              return (0, i.jsx)(T.ZP, { ...n, entry: t });
            case s.s.TOP_ARTIST:
              return (0, i.jsx)(j.ZP, { ...n, entry: t });
            case s.s.LISTENED_SESSION:
              return (0, i.jsx)(Z.ZP, { ...n, entry: t });
            case s.s.LAUNCHED_ACTIVITY:
              return (0, i.jsx)(g.Z, { ...n, entry: t });
            case s.s.LEADERBOARD:
              return (0, i.jsx)(x.Z, { ...n, entry: t });
            default:
              return null;
          }
        },
        M = (e) => {
          let { closePopout: t, ...n } = e;
          return (0, i.jsx)(O, {
            onReaction: (e, i) => {
              n.trackRankingItemInteraction(e, {
                destinationChannelId: i.id,
                destinationGuildId: i.guild_id,
              }),
                t();
            },
            closePopout: t,
            onVoiceChannelPreview: (e) => {
              n.trackRankingItemInteraction(_.xP.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
              });
            },
            ...n,
          });
        },
        O = (e) => {
          let { entry: t, ...n } = e;
          switch (t.content_type) {
            case s.s.PLAYED_GAME:
              return (0, i.jsx)(P.Z, { ...n, entry: t });
            case s.s.WATCHED_MEDIA:
              return (0, i.jsx)(N.Z, { ...n, entry: t });
            case s.s.TOP_GAME:
              return (0, i.jsx)(L.Z, { ...n, entry: t });
            case s.s.TOP_ARTIST:
              return (0, i.jsx)(w.Z, { ...n, entry: t });
            case s.s.LISTENED_SESSION:
              return (0, i.jsx)(y.Z, { ...n, entry: t });
            case s.s.LAUNCHED_ACTIVITY:
              return (0, i.jsx)(C.ZP, { ...n, entry: t });
            case s.s.LEADERBOARD:
              var l;
              return (null === (l = n.channel) || void 0 === l
                ? void 0
                : l.guild_id) != null
                ? (0, i.jsx)(m.Z, { guildId: n.channel.guild_id })
                : null;
            default:
              return null;
          }
        };
      t.ZP = l.memo((e) => {
        var t;
        let { index: a, ...s } = e,
          [m, x] = l.useState("default"),
          v = (0, o.JA)("".concat(a)),
          g =
            null === (t = f.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.isStaff(),
          { isRich: C, appName: I } = (0, E.n)(s.entry),
          P = l.useMemo(
            () => ({
              entry: s.entry,
              channelId: s.channel.id,
              guildId: s.channel.guild_id,
              requestId: s.requestId,
              richPresenceName: C ? I : void 0,
            }),
            [I, s.channel.guild_id, s.channel.id, s.entry, s.requestId, C],
          ),
          Z = l.useRef(!1),
          [y, j] = l.useState(!1),
          [w, T] = l.useState(!1),
          L = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled);
        l.useEffect(() => {
          y && L && T(!0);
        }, [y, L]);
        let S = l.useCallback(
            (e) => {
              if (!!g)
                (0, d.jW)(e, async () => {
                  let { default: e } = await n.e("153").then(n.bind(n, 330150));
                  return () =>
                    (0, i.jsx)(e, { entry: s.entry, requestId: s.requestId });
                });
            },
            [s, g],
          ),
          N = l.useCallback(() => {
            x(String(Date.now()));
          }, []),
          A = l.useCallback(
            function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (0, p.L)(e, { ...P, ...t });
            },
            [P],
          ),
          R = l.useCallback(
            r().throttle(
              (e) => {
                (0, p.L)(_.xP.CARD_POPOUT_OPEN, e);
              },
              2e3,
              { leading: !0, trailing: !1 },
            ),
            [],
          ),
          O = () => {
            (Z.current = !1),
              setTimeout(() => {
                !Z.current && (j(!1), T(L));
              }, 100);
          };
        return (0, i.jsx)("div", {
          onMouseEnter: () => {
            (Z.current = !0),
              setTimeout(() => {
                Z.current && j(!0), R(P);
              }, 100);
          },
          onMouseLeave: O,
          children: (0, i.jsx)(c.Popout, {
            renderPopout: (e) => {
              let { closePopout: t } = e;
              return (0, i.jsx)(M, {
                closePopout: t,
                updatePopoutPosition: N,
                trackRankingItemInteraction: A,
                ...s,
              });
            },
            position: "left",
            shouldShow: y,
            positionKey: m,
            onRequestOpen: () => R(P),
            onRequestClose: () => {
              w && O();
            },
            spacing: 8,
            children: (e, t) => {
              let { isShown: n } = t;
              return (0, i.jsx)(c.Clickable, {
                ...e,
                ...v,
                focusProps: {
                  offset: { top: 4, bottom: 4, left: 4, right: 4 },
                },
                onClick: () => {
                  !y && j(!0);
                },
                onContextMenu: S,
                children: (0, i.jsx)(b, {
                  ...s,
                  selected: n,
                  hovered: Z.current,
                }),
              });
            },
          }),
        });
      });
    },
    227172: function (e, t, n) {
      n.d(t, {
        v: function () {
          return _;
        },
      });
      var i = n(200651),
        l = n(192379),
        a = n(758713),
        r = n(442837),
        o = n(481060),
        s = n(620662),
        u = n(841784),
        c = n(420660),
        d = n(429589),
        h = n(757182),
        m = n(706454),
        x = n(374129),
        v = n(639351),
        f = n(823379),
        p = n(379357),
        g = n(192918),
        C = n(22211),
        I = n(561308),
        P = n(919394),
        Z = n(438226),
        y = n(206295),
        j = n(91140),
        w = n(297781),
        T = n(591853),
        L = n(410441),
        S = n(797342),
        N = n(981631),
        E = n(388032);
      let _ = {
        [a.z.DESKTOP]: null,
        [a.z.LINUX]: null,
        [a.z.MACOS]: null,
        [a.z.NINTENDO]: null,
        [a.z.IOS]: null,
        [a.z.ANDROID]: null,
        [a.z.XBOX]: v.Z,
        [a.z.PLAYSTATION]: x.Z,
      };
      t.Z = (e) => {
        let {
            channel: t,
            entry: n,
            disableGameProfileLinks: a,
            onReaction: x,
            onVoiceChannelPreview: v,
            onUserPopoutClosed: A,
            trackRankingItemInteraction: R,
          } = e,
          { largeImage: b } = (0, p.rv)({ entry: n }),
          { user: M, details: O, appName: k, activity: H } = (0, S.n)(n),
          { primaryColor: U, secondaryColor: D } = (0, y.Z)(
            null == b ? void 0 : b.src,
          ),
          B = (0, r.e7)([m.default], () => m.default.locale),
          { streamPreviewUrl: V, stream: F } = (0, C.Z)(n),
          {
            displayParticipants: G,
            participant1: z,
            participant2: W,
            numOtherParticipants: q,
          } = (0, g.Z)(n, 3),
          Y = l.useCallback(
            (e) => {
              if (
                (null == b ? void 0 : b.src) == null ||
                null == t ||
                null == M
              )
                return;
              let i =
                q > 0
                  ? (0, Z.VY)({
                      entry: n,
                      channel: t,
                      users: [z, W],
                      countOthers: q,
                    })
                  : (0, Z.HV)(n, t, M);
              return (0, P.SO)({
                entry: n,
                applicationImageSrc: null == b ? void 0 : b.src,
                avatarSrcs: G.map((e) => e.getAvatarURL(t.guild_id, 128)),
                description: i,
                timestamp: (0, I.yh)(n, B),
                colors: [U, D],
                channelId: e,
              });
            },
            [null == b ? void 0 : b.src, t, G, n, B, q, z, W, U, D, M],
          );
        if (null == M) return null;
        let J = null != n.extra.platform ? _[n.extra.platform] : null,
          X = (0, i.jsx)(w.Gk, {
            location: null == V ? w.Gt.POPOUT : w.Gt.STREAMING_POPOUT,
            children: j.W.map((e, t) => (0, i.jsx)(e, { entry: n }, t)),
          }),
          K =
            null == V
              ? (0, i.jsx)(T.wG, {
                  channel: t,
                  headerIcons:
                    null == J
                      ? null
                      : (0, i.jsx)(L.Z, {
                          Icon: J,
                          "aria-label": E.intl.string(E.t.YR4cHB),
                        }),
                  userDescription: (0, I.kr)(n) ? E.t.vPg1JS : E.t.rPqqtr,
                  title: k,
                  subtitle: O,
                  badges: X,
                  entry: n,
                  disableGameProfileLinks: a,
                  onUserPopoutClosed: A,
                  trackRankingItemInteraction: R,
                })
              : (0, i.jsx)(T.jL, {
                  channel: t,
                  streamPreviewSrc: V,
                  title: n.extra.game_name,
                  subtitle: O,
                  badges: X,
                  userDescription: E.t["6oWFUF"],
                  entry: n,
                  stream: F,
                  onUserPopoutClosed: A,
                  trackRankingItemInteraction: R,
                }),
          Q =
            (0, s.Z)(H, N.xjy.JOIN) || (0, u.Z)(H)
              ? (0, i.jsx)(d.Z, {
                  activity: H,
                  user: M,
                  ButtonComponent: (e) =>
                    (0, i.jsx)(T.Ll, {
                      IconComponent: o.GameControllerIcon,
                      ...e,
                    }),
                })
              : null,
          $ = [
            Q,
            (0, c.Z)(H)
              ? (0, i.jsx)(h.Z, {
                  activity: H,
                  ButtonComponent: (e) =>
                    (0, i.jsx)(T.Ll, { IconComponent: o.EyeIcon, ...e }),
                })
              : null,
          ].filter(f.lm);
        return (0, i.jsxs)(T.yR, {
          children: [
            K,
            (0, i.jsx)(T.St, {
              children: (0, i.jsx)(T.WT, {
                onReaction: x,
                onVoiceChannelPreview: v,
                user: M,
                channel: t,
                generateReactionImage: Y,
                reactionImageAltText: (0, Z.IS)(n, M),
                entry: n,
                buttons: $,
              }),
            }),
          ],
        });
      };
    },
    678869: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return A;
        },
      }),
        n(627494),
        n(757143),
        n(653041);
      var i = n(200651),
        l = n(192379),
        a = n(423875),
        r = n(442837),
        o = n(902704),
        s = n(481060),
        u = n(952164),
        c = n(768419),
        d = n(424678),
        h = n(239470),
        m = n(894344),
        x = n(314897),
        v = n(908841),
        f = n(5192),
        p = n(379357),
        g = n(561308),
        C = n(256726),
        I = n(206295),
        P = n(551228),
        Z = n(591853),
        y = n(371991),
        j = n(410441),
        w = n(981631),
        T = n(616922),
        L = n(388032),
        S = n(290500),
        N = n(738127);
      let E = (e, t, n) => {
        let { artist: i, media: l } = e,
          a = L.t["6iNxrq"],
          r = f.ZP.getName(t.guild_id, t.id, n);
        return L.intl
          .formatToMarkdownString(a, { artist: i, userName: r, media: l })
          .replaceAll("*", "");
      };
      function _(e) {
        let { activity: t } = e,
          n = t.timestamps,
          a = (0, y.tS)(),
          { durationTimestamp: r, seekBarStyles: o } = l.useMemo(() => {
            var e;
            let { start: n, end: i } =
              null !== (e = t.timestamps) && void 0 !== e ? e : {};
            if (null == n || null == i) return {};
            let l = Math.min(i, a),
              r = i - n,
              o = Math.floor((Math.max(l - n, 0) / r) * 100);
            return {
              seekBarStyles: { width: "".concat(o, "%") },
              durationTimestamp: (0, g.T_)({ start: 0 }, r),
            };
          }, [t, a]);
        return null == o
          ? null
          : (0, i.jsxs)("div", {
              className: S.listeningTimeline,
              children: [
                (0, i.jsx)(y.x3, { entry: n }),
                (0, i.jsx)("div", {
                  className: S.seekBarContainer,
                  children: (0, i.jsx)("div", {
                    className: S.seekBarFill,
                    style: o,
                  }),
                }),
                (0, i.jsx)(s.Text, {
                  className: S.timestamp,
                  variant: "text-xs/normal",
                  tabularNumbers: !0,
                  color: void 0,
                  children: r,
                }),
              ],
            });
      }
      function A(e) {
        var t, n, f;
        let y,
          S,
          A,
          {
            channel: R,
            entry: b,
            closePopout: M,
            onReaction: O,
            onVoiceChannelPreview: k,
          } = e,
          { largeImage: H } = (0, p.rv)({ entry: b }),
          {
            activity: U,
            currentEntry: D,
            artist: B,
            title: V,
            user: F,
          } = (0, P.pi)(b),
          { primaryColor: G, secondaryColor: z } = (0, I.Z)(
            null == H ? void 0 : H.src,
          ),
          W = (0, r.e7)(
            [c.Z, x.default],
            () =>
              (null == U ? void 0 : U.type) === w.IIU.LISTENING && null != F
                ? (0, h.Z)(c.Z, x.default, F, U)
                : void 0,
            [U, F],
            o.Z,
          ),
          q = l.useCallback(() => {
            var e;
            if (null == R || null == F) return;
            let t =
                null === (e = U.timestamps) || void 0 === e ? void 0 : e.start,
              n = (0, g.T_)(null != t ? { start: t } : b, Date.now());
            return (0, C.CR)({
              user: F,
              channel: R,
              mediaImageSrc: null == H ? void 0 : H.src,
              artist: B,
              description: E({ artist: B, media: V }, R, F),
              colors: [G, z],
              badges: (0, C.jE)({ timestamp: n }),
            });
          }, [U, B, R, b, null == H ? void 0 : H.src, G, z, V, F]);
        if (null == U || null == D) return null;
        let Y = B,
          J = [];
        if (D.media.provider === a.p.SPOTIFY) {
          (S = () => {
            (0, u.aG)(U);
          }),
            (A = () => {
              (0, u.Z5)(U, F.id);
            }),
            (y = () => {
              (0, u.aG)(U);
            });
          (Y = (0, i.jsx)(d.Z, {
            artists: B,
            canOpen: null != U.sync_id,
            linkClassName: N.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
              (0, u.d$)(U, F.id, e);
            },
          })),
            (null == W ? void 0 : W.syncDisabled) === !1 &&
              J.push(
                (0, i.jsx)(
                  Z.Ll,
                  {
                    onClick: () => {
                      (0, m.Z)(W, T.kG.USER_ACTIVITY_SYNC), M();
                    },
                    IconComponent: s.UserPlayIcon,
                    children: L.intl.string(L.t.eU3inJ),
                  },
                  "listen-along",
                ),
              );
        }
        let X = (0, i.jsx)(Z.wG, {
          onClickThumbnail: A,
          channel: R,
          entry: b,
          headerIcons:
            D.media.provider === a.p.SPOTIFY
              ? (0, i.jsx)(j.Z, {
                  onClick: y,
                  "aria-label": L.intl.string(L.t.rRffNz),
                  Icon: v.Z,
                })
              : null,
          userDescription: (0, g.kr)(b) ? L.t.Tzx5Dw : L.t.CcVI1d,
          title: V,
          onClickTitle: S,
          subtitle: Y,
          badges: null,
          children:
            (null === (t = U.timestamps) || void 0 === t ? void 0 : t.start) !=
              null && (0, i.jsx)(_, { activity: U }),
        });
        return (0, i.jsxs)(Z.yR, {
          children: [
            X,
            (0, i.jsx)(Z.St, {
              children: (0, i.jsx)(Z.WT, {
                onReaction: O,
                onVoiceChannelPreview: k,
                user: F,
                channel: R,
                generateReactionImage: q,
                reactionImageAltText:
                  ((n = B),
                  (f = F),
                  L.intl.formatToPlainString(L.t.h2yWWV, {
                    username: f.username,
                    activity: n,
                  })),
                entry: b,
                buttons: J,
              }),
            }),
          ],
        });
      }
    },
    886217: function (e, t, n) {
      n(627494), n(757143);
      var i = n(200651),
        l = n(192379),
        a = n(317261),
        r = n(423875),
        o = n(442837),
        s = n(18323),
        u = n(594174),
        c = n(908841),
        d = n(823379),
        h = n(5192),
        m = n(561308),
        x = n(256726),
        v = n(206295),
        f = n(278399),
        p = n(297781),
        g = n(591853),
        C = n(410441),
        I = n(616922),
        P = n(388032);
      let Z = (e, t, n, i) => {
          let l = (function (e) {
              if (e === a._.WEEK) return P.t.SjOZfn;
            })(i),
            r = h.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.artist.name;
          return P.intl
            .formatToMarkdownString(l, { artist: o, userName: r })
            .replaceAll("*", "");
        },
        y = (e, t) =>
          P.intl.formatToPlainString(P.t.Osmpr6, {
            username: t.username,
            artist: e.extra.artist.name,
          });
      t.Z = (e) => {
        let {
            channel: t,
            entry: n,
            onReaction: a,
            onVoiceChannelPreview: h,
          } = e,
          { parent_title: j, provider: w, image_url: T } = n.extra.media,
          L = n.extra.artist.name,
          S = (0, o.e7)([u.default], () => u.default.getUser(n.author_id)),
          { primaryColor: N, secondaryColor: E } = (0, v.Z)(T),
          _ = (0, m.Nq)(n),
          A = l.useCallback(() => {
            if (null == t || null == S || !(0, d.Hi)(_, f.y9)) return;
            let e = Z(n, t, S, _);
            return (0, x.CR)({
              user: S,
              channel: t,
              mediaImageSrc: T,
              artist: L,
              description: e,
              colors: [N, E],
              badges: (0, x.UU)(n),
            });
          }, [T, L, t, n, N, _, E, S]);
        if (null == S || !(0, d.Hi)(_, f.y9)) return null;
        let R = () => {
          let e = I.Hw.ALBUM,
            t = s.Z.isProtocolRegistered()
              ? I.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id)
              : I.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
          window.open(t);
        };
        return (0, i.jsxs)(g.yR, {
          children: [
            (0, i.jsx)(g.wG, {
              onClickTitle: R,
              onClickSubtitle: () => {
                let e = I.Hw.ARTIST,
                  t = s.Z.isProtocolRegistered()
                    ? I.C7.PLAYER_OPEN(e, n.extra.artist.external_id)
                    : I.C7.WEB_OPEN(e, n.extra.artist.external_id);
                window.open(t);
              },
              onClickThumbnail: R,
              channel: t,
              entry: n,
              headerIcons:
                w === r.p.SPOTIFY
                  ? (0, i.jsx)(C.Z, {
                      Icon: c.Z,
                      "aria-label": P.intl.string(P.t["0ZB/XF"]),
                    })
                  : null,
              userDescription: P.t.CcVI1d,
              title: j,
              subtitle: L,
              badges: (0, i.jsx)(p.Gk, {
                location: p.Gt.POPOUT,
                children: f.Ho.map((e, t) => (0, i.jsx)(e, { entry: n }, t)),
              }),
            }),
            (0, i.jsx)(g.St, {
              children: (0, i.jsx)(g.WT, {
                onReaction: a,
                onVoiceChannelPreview: h,
                user: S,
                channel: t,
                generateReactionImage: A,
                reactionImageAltText: y(n, S),
                entry: n,
              }),
            }),
          ],
        });
      };
    },
    644548: function (e, t, n) {
      n(627494), n(757143);
      var i = n(200651),
        l = n(192379),
        a = n(317261),
        r = n(70956),
        o = n(5192),
        s = n(379357),
        u = n(561308),
        c = n(919394),
        d = n(206295),
        h = n(227172),
        m = n(555672),
        x = n(297781),
        v = n(591853),
        f = n(410441),
        p = n(797342),
        g = n(388032);
      let C = (e, t, n, i) => {
          let l = (function (e) {
              if (e === a._.WEEK) return g.t["7TXfc3"];
            })(i),
            r = o.ZP.getName(t.guild_id, t.id, n),
            s = e.extra.game_name;
          return g.intl
            .formatToMarkdownString(l, { gameName: s, userName: r })
            .replaceAll("*", "");
        },
        I = (e, t) =>
          g.intl.formatToPlainString(g.t.tAwI1t, {
            username: t.username,
            activity: e.extra.game_name,
          });
      t.Z = (e) => {
        let {
            channel: t,
            entry: n,
            disableGameProfileLinks: a,
            onReaction: o,
            onVoiceChannelPreview: P,
          } = e,
          { largeImage: Z } = (0, s.rv)({ entry: n }),
          { user: y, details: j, appName: w } = (0, p.n)(n),
          { primaryColor: T, secondaryColor: L } = (0, d.Z)(
            null == Z ? void 0 : Z.src,
          ),
          S = (0, u.yA)(n),
          N = (0, u.Nq)(n),
          E = l.useCallback(
            (e) => {
              if (
                null != t &&
                null != y &&
                null != S &&
                null != N &&
                !!(0, m.qy)(N)
              )
                return (0, c.SO)({
                  entry: n,
                  applicationImageSrc: null == Z ? void 0 : Z.src,
                  avatarSrcs: [
                    y.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                  ],
                  description: C(n, t, y, N),
                  timestamp: g.intl.formatToPlainString(g.t.YL7UEx, {
                    hours: Math.round(S / r.Z.Seconds.HOUR),
                  }),
                  colors: [T, L],
                  channelId: e,
                });
            },
            [null == Z ? void 0 : Z.src, t, S, n, T, N, L, y],
          );
        if (null == y || null == S || null == N || !(0, m.qy)(N)) return null;
        let _ = null != n.extra.platform ? h.v[n.extra.platform] : null;
        return (0, i.jsxs)(v.yR, {
          children: [
            (0, i.jsx)(v.wG, {
              channel: t,
              headerIcons:
                null == _
                  ? null
                  : (0, i.jsx)(f.Z, {
                      Icon: _,
                      "aria-label": g.intl.string(g.t.YR4cHB),
                    }),
              entry: n,
              userDescription: g.t.rPqqtr,
              title: w,
              subtitle: j,
              badges: (0, i.jsx)(x.Gk, {
                location: x.Gt.POPOUT,
                children: m.Hs.map((e, t) => (0, i.jsx)(e, { entry: n }, t)),
              }),
              disableGameProfileLinks: a,
            }),
            (0, i.jsx)(v.St, {
              children: (0, i.jsx)(v.WT, {
                onReaction: o,
                onVoiceChannelPreview: P,
                user: y,
                channel: t,
                generateReactionImage: E,
                reactionImageAltText: I(n, y),
                entry: n,
              }),
            }),
          ],
        });
      };
    },
    268010: function (e, t, n) {
      n(627494), n(757143);
      var i = n(200651),
        l = n(192379),
        a = n(442837),
        r = n(481060),
        o = n(706454),
        s = n(594174),
        u = n(49012),
        c = n(5192),
        d = n(591759),
        h = n(379357),
        m = n(561308),
        x = n(644810),
        v = n(206295),
        f = n(335326),
        p = n(297781),
        g = n(591853),
        C = n(410441),
        I = n(388032);
      let P = (e, t, n) => {
          let i = I.t.LHF6Dw,
            l = c.ZP.getName(
              null == t ? void 0 : t.guild_id,
              null == t ? void 0 : t.id,
              n,
            ),
            a = e.extra.media_title;
          return I.intl
            .formatToMarkdownString(i, {
              mediaTitle: a,
              userName: l,
              episodeDescription: e.extra.media_subtitle,
            })
            .replaceAll("*", "");
        },
        Z = (e, t) =>
          I.intl.formatToPlainString(I.t.kCbfbG, {
            username: t.username,
            activity: e.extra.media_title,
          });
      t.Z = (e) => {
        let {
            channel: t,
            entry: n,
            onReaction: c,
            onVoiceChannelPreview: y,
          } = e,
          j = (0, a.e7)([s.default], () => s.default.getUser(n.author_id)),
          { largeImage: w } = (0, h.rv)({ entry: n }),
          { primaryColor: T, secondaryColor: L } = (0, v.Z)(
            null == w ? void 0 : w.src,
          ),
          S = (0, a.e7)([o.default], () => o.default.locale),
          N = (0, m.ap)(n.extra.media_assets_large_text),
          E = l.useCallback(
            (e) => {
              if (null != j && (null == w ? void 0 : w.src) != null)
                return (0, x.B)({
                  entry: n,
                  mediaImageSrc: null == w ? void 0 : w.src,
                  avatarSrc: j.getAvatarURL(
                    null == t ? void 0 : t.guild_id,
                    128,
                  ),
                  description: P(n, t, j),
                  timestamp: (0, m.yh)(n, S),
                  episodeDescription: N,
                  colors: [T, L],
                  channelId: e,
                });
            },
            [t, n, N, S, null == w ? void 0 : w.src, T, L, j],
          ),
          _ = () => {
            if (null == n.extra.url) return;
            let e = d.Z.safeParseWithQuery(n.extra.url);
            if (null != e && null != e.protocol && null != e.hostname)
              (0, u.q)({ href: d.Z.format(e), trusted: !1 });
          };
        return null == j
          ? null
          : (0, i.jsxs)(g.yR, {
              children: [
                (0, i.jsx)(g.wG, {
                  channel: t,
                  entry: n,
                  userDescription: (0, m.kr)(n) ? I.t["LH+Z39"] : I.t.YuKgmp,
                  title: n.extra.media_title,
                  subtitle: n.extra.media_subtitle,
                  headerIcons: (0, i.jsx)(C.Z, {
                    Icon: r.CrunchyrollNeutralIcon,
                    "aria-label": I.intl.string(I.t.jdJYX1),
                  }),
                  badges: (0, i.jsx)(p.Gk, {
                    location: p.Gt.POPOUT,
                    children: f.t.map((e, t) => (0, i.jsx)(e, { entry: n }, t)),
                  }),
                  onClickTitle: _,
                  onClickThumbnail: _,
                }),
                (0, i.jsx)(g.St, {
                  children: (0, i.jsx)(g.WT, {
                    onReaction: c,
                    onVoiceChannelPreview: y,
                    user: j,
                    channel: t,
                    generateReactionImage: E,
                    reactionImageAltText: Z(n, j),
                    entry: n,
                  }),
                }),
              ],
            });
      };
    },
    111386: function (e, t, n) {
      n(47120);
      var i = n(200651),
        l = n(192379),
        a = n(704215),
        r = n(481060),
        o = n(243778),
        s = n(388032),
        u = n(765388),
        c = n(442937);
      let d = () =>
        (0, i.jsxs)("div", {
          className: u.coachtipInner,
          children: [
            (0, i.jsx)("img", {
              src: c,
              alt: s.intl.string(s.t["9wkT19"]),
              className: u.coachtipAsset,
            }),
            (0, i.jsxs)("div", {
              className: u.coachtipTextContainer,
              children: [
                (0, i.jsx)(r.Heading, {
                  variant: "heading-lg/semibold",
                  children: s.intl.string(s.t.V5y3qa),
                }),
                (0, i.jsx)(r.Text, {
                  variant: "text-md/normal",
                  color: "text-secondary",
                  children: s.intl.string(s.t.eSDHDg),
                }),
              ],
            }),
          ],
        });
      t.Z = (e) => {
        let { children: t } = e,
          [n] = (0, o.US)([a.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
          [s, c] = l.useState(!1);
        return (l.useEffect(() => {
          setTimeout(() => {
            c(!0);
          }, 300);
        }),
        n !== a.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP)
          ? (0, i.jsx)(i.Fragment, { children: t })
          : (0, i.jsx)(r.Tooltip, {
              text: (0, i.jsx)(d, {}),
              tooltipClassName: u.coachtip,
              tooltipContentClassName: u.coachtipContent,
              position: "left",
              allowOverflow: !0,
              forceOpen: s,
              shouldShow: s,
              hideOnClick: !1,
              "aria-label": "test",
              children: (e) => (0, i.jsx)("div", { ...e, children: t }),
            });
      };
    },
    591853: function (e, t, n) {
      n.d(t, {
        Ll: function () {
          return eI;
        },
        St: function () {
          return em;
        },
        WT: function () {
          return ex;
        },
        jL: function () {
          return eC;
        },
        wG: function () {
          return eg;
        },
        yR: function () {
          return ec;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        a = n(120356),
        r = n.n(a),
        o = n(512722),
        s = n.n(o);
      n(995295);
      var u = n(442837),
        c = n(704215),
        d = n(692547),
        h = n(481060),
        m = n(493683),
        x = n(475179),
        v = n(287734),
        f = n(872810),
        p = n(607070),
        g = n(220779),
        C = n(201133),
        I = n(557135),
        P = n(194082),
        Z = n(605236),
        y = n(543241),
        j = n(318374),
        w = n(258609),
        T = n(810568),
        L = n(168524),
        S = n(382182),
        N = n(871118),
        E = n(565138),
        _ = n(66999),
        A = n(790642),
        R = n(359110),
        b = n(12168),
        M = n(237583),
        O = n(131704),
        k = n(592125),
        H = n(430824),
        U = n(496675),
        D = n(699516),
        B = n(9156),
        V = n(594174),
        F = n(979651),
        G = n(938475),
        z = n(626135),
        W = n(768581),
        q = n(5192),
        Y = n(379357),
        J = n(26033),
        X = n(91907),
        K = n(358696),
        Q = n(656709),
        $ = n(192918),
        ee = n(22211),
        et = n(561308),
        en = n(206295),
        ei = n(111386),
        el = n(896449),
        ea = n(469153),
        er = n(206583),
        eo = n(981631),
        es = n(388032),
        eu = n(738127);
      function ec(e) {
        let { children: t } = e,
          n = l.useRef(null);
        return (
          (0, h.useFocusLock)(n),
          (0, i.jsx)("div", { className: eu.popout, ref: n, children: t })
        );
      }
      function ed(e) {
        let {
            children: t,
            backgroundImgSrc: n,
            className: l,
            style: a = {},
          } = e,
          { primaryColor: o, secondaryColor: s } = (0, en.Z)(n);
        return (
          null != n &&
            (a.background = "linear-gradient(45deg, "
              .concat(o, ", ")
              .concat(s, ")")),
          (0, i.jsx)(h.ThemeProvider, {
            theme: eo.BRd.DARK,
            children: (e) =>
              (0, i.jsx)("div", {
                "data-disable-adaptive-theme": !0,
                className: r()(eu.hero, e, l),
                style: a,
                children: t,
              }),
          })
        );
      }
      let eh = l.createContext(null);
      function em(e) {
        let { children: t } = e,
          n = l.useRef(null);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: eu.interactionsContainerHeader,
              ref: (e) => (n.current = e),
            }),
            (0, i.jsx)("div", {
              className: eu.interactionsContainer,
              children: (0, i.jsx)(eh.Provider, {
                value: n.current,
                children: t,
              }),
            }),
          ],
        });
      }
      function ex(e) {
        let {
            channel: t,
            user: n,
            generateReactionImage: a,
            reactionImageAltText: r,
            onReaction: o,
            entry: v,
            buttons: f = [],
            header: p,
            onVoiceChannelPreview: P,
          } = e,
          [y, j] = l.useState(!1),
          [w, T] = l.useState(null),
          L = (0, u.e7)(
            [U.Z],
            () =>
              null != t &&
              eo.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) &&
              U.Z.can(eo.Plq.SEND_MESSAGES, t),
          ),
          [S, N] = l.useState(!1),
          [b, W] = l.useState(!1),
          { voiceBar: Y, joinVoiceButton: J } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: a } = e,
              { streamPreviewUrl: r, channel: o } = (0, ee.Z)(n),
              { needSubscriptionToAccess: s } = (0, _.Z)(
                null == t ? void 0 : t.id,
              ),
              c = (0, u.e7)([H.Z], () =>
                null != o ? H.Z.getGuild(o.guild_id) : void 0,
              ),
              m = (0, u.Wu)(
                [G.ZP],
                () => (null != o ? G.ZP.getVoiceStatesForChannel(o) : []),
                [o],
              ),
              v = (0, u.e7)([F.Z], () =>
                F.Z.isInChannel(null == o ? void 0 : o.id),
              ),
              f = l.useMemo(() => {
                for (let e of m) {
                  let t = k.Z.getDMFromUserId(e.user.id),
                    n = null != t && B.ZP.isChannelMuted(null, t),
                    i = D.Z.isBlocked(e.user.id);
                  if (n || i) return !0;
                }
                return !1;
              }, [m]);
            if (null == o || null == c)
              return { voiceBar: void 0, joinVoiceButton: void 0 };
            let p = null != r,
              g = () => {
                x.Z.updateChatOpen(o.id, !0),
                  (0, R.Kh)(o.id),
                  null == a || a(o);
              },
              C = () => {
                I.Z.handleVoiceConnect({
                  channel: o,
                  connected: v,
                  needSubscriptionToAccess: s,
                  routeDirectlyToChannel: !0,
                });
              },
              P = (e) => {
                let {
                    children: t,
                    text: n,
                    hasBlockedOrMutedVCParticipant: l,
                  } = e,
                  a = l
                    ? (0, i.jsxs)(i.Fragment, {
                        children: [
                          l &&
                            (0, i.jsx)(h.WarningIcon, {
                              size: "custom",
                              width: 13,
                              height: 13,
                              className: eu.popoutBlockedWarningIcon,
                            }),
                          es.intl.string(es.t.d6DpXF),
                        ],
                      })
                    : n;
                return (0, i.jsx)(
                  h.Tooltip,
                  {
                    "aria-label": l
                      ? es.intl.string(es.t.d6DpXF)
                      : null != n && n,
                    text: a,
                    shouldShow: !0,
                    children: t,
                  },
                  "voice-preview",
                );
              },
              Z = (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsxs)("div", {
                    className: eu.voiceChannelPopoutReactorHeader,
                    children: [
                      (0, i.jsx)(P, {
                        text: es.intl.string(es.t.WIVYqK),
                        hasBlockedOrMutedVCParticipant: f,
                        children: (e) =>
                          (0, i.jsxs)(h.Clickable, {
                            ...e,
                            "aria-label": es.intl.string(es.t.WIVYqK),
                            onClick: g,
                            className: eu.voiceChannelPopoutReactorChannel,
                            children: [
                              (0, i.jsx)(E.Z, {
                                guild: c,
                                size: E.Z.Sizes.SMOL,
                                className: eu.voiceChannelGuildIcon,
                                active: !0,
                              }),
                              (0, i.jsx)(h.ChevronSmallRightIcon, {
                                size: "xxs",
                                color: d.Z.colors.INTERACTIVE_NORMAL,
                              }),
                              (0, i.jsx)(h.VoiceNormalIcon, {
                                size: "xs",
                                color: d.Z.colors.TEXT_NORMAL,
                              }),
                              (0, i.jsx)(h.Text, {
                                variant: "text-sm/medium",
                                color: "text-normal",
                                className: eu.voiceChannelName,
                                children: o.name,
                              }),
                            ],
                          }),
                      }),
                      (0, i.jsx)(M.Z, {
                        guildId: c.id,
                        users: m,
                        max: 3,
                        renderUser: (e, t) =>
                          (0, i.jsx)(h.Avatar, {
                            src: e.user.getAvatarURL(c.id, 16),
                            size: h.AvatarSizes.SIZE_16,
                            "aria-label": "avatar",
                            className: t,
                          }),
                        renderMoreUsers: (e) =>
                          (0, i.jsx)("div", {
                            className: eu.voiceChannelAdditionalParticipants,
                            children: (0, i.jsx)(h.Text, {
                              variant: "text-xxs/semibold",
                              color: "text-normal",
                              children: e,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: eu.primaryActionPopoutDivider,
                  }),
                ],
              });
            return {
              voiceBar: Z,
              joinVoiceButton: v
                ? null
                : (0, i.jsx)(P, {
                    hasBlockedOrMutedVCParticipant: f,
                    children: (e) =>
                      (0, i.jsx)(eI, {
                        ...e,
                        color: h.Button.Colors.GREEN,
                        onClick: C,
                        IconComponent: p ? h.ScreenIcon : h.VoiceNormalIcon,
                        children: p
                          ? es.intl.string(es.t["I6JG4+"])
                          : es.intl.string(es.t.VJlc0d),
                      }),
                  }),
            };
          })({ channel: t, entry: v, onVoiceChannelPreview: P }),
          { embeddedActivity: X } = (0, et.qy)(v),
          K = (function (e) {
            let t = (0, u.e7)([H.Z], () =>
                H.Z.getGuild(null == e ? void 0 : e.guildId),
              ),
              n = (0, u.e7)([k.Z], () =>
                k.Z.getChannel(null == e ? void 0 : e.channelId),
              ),
              l = (0, u.Wu)([V.default], () => {
                var t, n;
                return null !==
                  (n =
                    null == e
                      ? void 0
                      : null === (t = e.participants) || void 0 === t
                        ? void 0
                        : t.map((e) => V.default.getUser(e.userId))) &&
                  void 0 !== n
                  ? n
                  : [];
              });
            return null != e && null != t && null != n && O.sR.has(n.type)
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsxs)("div", {
                      className: eu.voiceChannelPopoutReactorHeader,
                      children: [
                        (0, i.jsxs)(h.Clickable, {
                          "aria-label": es.intl.string(es.t["W/A4Qk"]),
                          onClick: () => (0, R.Kh)(n.id),
                          className: eu.voiceChannelPopoutReactorChannel,
                          children: [
                            (0, i.jsx)(E.Z, {
                              guild: t,
                              size: E.Z.Sizes.SMOL,
                              className: eu.voiceChannelGuildIcon,
                              active: !0,
                            }),
                            (0, i.jsx)(h.ChevronSmallRightIcon, {
                              size: "xxs",
                              color: d.Z.colors.INTERACTIVE_NORMAL,
                            }),
                            (0, i.jsx)(h.TextIcon, {
                              size: "xs",
                              color: d.Z.colors.TEXT_NORMAL,
                            }),
                            (0, i.jsx)(h.Text, {
                              variant: "text-sm/medium",
                              color: "text-normal",
                              className: eu.voiceChannelName,
                              children: null == n ? void 0 : n.name,
                            }),
                          ],
                        }),
                        (0, i.jsx)(M.Z, {
                          guildId: t.id,
                          users: l,
                          max: 3,
                          renderUser: (e, n) =>
                            (0, i.jsx)(h.Avatar, {
                              src: e.getAvatarURL(t.id, 16),
                              size: h.AvatarSizes.SIZE_16,
                              "aria-label": "avatar",
                              className: n,
                            }),
                          renderMoreUsers: (e) =>
                            (0, i.jsx)("div", {
                              className: eu.voiceChannelAdditionalParticipants,
                              children: (0, i.jsx)(h.Text, {
                                variant: "text-xxs/semibold",
                                color: "text-normal",
                                children: e,
                              }),
                            }),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: eu.primaryActionPopoutDivider,
                    }),
                  ],
                })
              : null;
          })(X),
          $ = null != J && 0 === f.length ? [J] : f,
          en = $.length > 0,
          el = $.length >= 2,
          [ec, ed] = l.useState(!en),
          eh = q.ZP.getName(
            null == t ? void 0 : t.guild_id,
            null == t ? void 0 : t.id,
            n,
          ),
          em = null != t && y ? "#".concat(t.name) : "@".concat(eh),
          ex = y ? es.intl.string(es.t.Z2CUgo) : es.intl.string(es.t.XLGiTE),
          ef = async (e) => {
            let i;
            if (null != e) {
              if (
                (z.default.track(eo.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                  surface_type: er.Kd.GUILD_MEMBER_LIST,
                  channel_id: null == t ? void 0 : t.id,
                  guild_id: null == t ? void 0 : t.guild_id,
                }),
                (0, Z.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                N(!0),
                W(!1),
                y)
              )
                s()(
                  null != t,
                  "shareToChannelMode should only be true if a valid channel is passed",
                ),
                  (i = t);
              else {
                var l;
                let e = await m.Z.getOrEnsurePrivateChannel(n.id);
                i = null !== (l = k.Z.getChannel(e)) && void 0 !== l ? l : null;
              }
              return (
                s()(null != i, "Send channel must be defined"),
                eg({
                  reply: ":".concat(e.name, ":"),
                  sendToChannel: i,
                  onComplete: (e, t) => {
                    W(!0),
                      setTimeout(() => {
                        N(!1), o(e, t);
                      }, 600);
                  },
                  interactionType: er.xP.REACTION_EMOJI_REACT_SENT,
                  requiresChannelReadiness: !1,
                })
              );
            }
          },
          ep = async (e) => {
            let i;
            if (((0, Z.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), y))
              s()(
                null != t,
                "shareToChannelMode should only be true if a valid channel is passed",
              ),
                (i = t);
            else {
              let e = await m.Z.openPrivateChannel(n.id, !1, !1),
                t = k.Z.getChannel(e);
              s()(null != t, "DM channel must be defined"), (i = t);
            }
            let l =
              i.type === eo.d4z.DM
                ? er.xP.DM_REACTION_MESSAGE_SENT
                : er.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return eg({
              reply: e,
              sendToChannel: i,
              interactionType: l,
              onComplete: o,
              requiresChannelReadiness: !0,
            });
          },
          eg = async (e) => {
            let {
              reply: t,
              sendToChannel: n,
              onComplete: i,
              interactionType: l,
              requiresChannelReadiness: o,
            } = e;
            if ((null == w || w.focus(), (0, A.Io)("ContentPopout Reactor")))
              await (0, Q.p)({
                channel: n,
                content: t,
                entry: v,
                whenReady: o,
              });
            else {
              var u;
              let e = await ((u = a),
              async function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                try {
                  return await u(...t);
                } catch (e) {
                  throw e;
                }
              })(n.id);
              s()(null != e, "Reaction image must be defined"),
                await (0, C.B)({ file: e, channel: n, altText: r, reply: t });
            }
            null == i || i(l, n);
          },
          eC = null != p ? p : null != Y ? Y : null != K ? K : void 0;
        return (
          l.useEffect(() => {
            ec && (null == w || w.focus());
          }, [w, y, ec]),
          (0, i.jsxs)("div", {
            style: { pointerEvents: S ? "none" : "all" },
            children: [
              (0, i.jsx)(ea.Z, {
                sent: b,
                shown: S,
                className: eu.toastContainer,
              }),
              null != eC
                ? eC
                : (0, i.jsx)(ei.Z, {
                    children: (0, i.jsxs)("div", {
                      className: eu.emojiHotrailShareToChannel,
                      children: [
                        (0, i.jsx)(ev, { channel: t, onClickSuggestion: ef }),
                        (0, i.jsx)(g.dE, { onSelectEmoji: ef }),
                      ],
                    }),
                  }),
              (0, i.jsxs)("div", {
                className: ec
                  ? eu.inputContainerShareToChannel
                  : eu.hiddenButRenderedInputField,
                children: [
                  (0, i.jsx)(g.A7, {
                    placeholder: es.intl.formatToPlainString(es.t["8lzR/f"], {
                      channel: em,
                    }),
                    onEnter: ep,
                    setEditorRef: (e) => T(e),
                    channel: y ? t : void 0,
                    showEmojiButton: null != eC,
                    renderAttachButton: L
                      ? () =>
                          (0, i.jsx)(h.Tooltip, {
                            text: ex,
                            children: (e) =>
                              (0, i.jsx)(h.Clickable, {
                                ...e,
                                className: eu.shareToChannelButton,
                                onClick: () => j((e) => !e),
                                children: y
                                  ? (0, i.jsx)(h.TextIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                    })
                                  : (0, i.jsx)(h.AtIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                    }),
                              }),
                          })
                      : void 0,
                  }),
                  en &&
                    (0, i.jsx)(h.Clickable, {
                      onClick: () => ed(!1),
                      className: eu.primaryActionPopoutMessageCloseIcon,
                      children: (0, i.jsx)(h.XSmallIcon, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: d.Z.colors.ICON_PRIMARY,
                      }),
                    }),
                ],
              }),
              !1 === ec &&
                (0, i.jsxs)("div", {
                  className: eu.primaryActionPopoutActionButtons,
                  children: [
                    (0, i.jsxs)(
                      h.Button,
                      {
                        className: eu.secondaryButton,
                        color: h.Button.Colors.CUSTOM,
                        onClick: () => ed(!0),
                        innerClassName: eu.iconButton,
                        size: el ? h.Button.Sizes.MIN : h.Button.Sizes.LARGE,
                        children: [
                          (0, i.jsx)(h.ChatIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            colorClass: eu.secondaryText,
                          }),
                          !el &&
                            (0, i.jsx)(h.Text, {
                              variant: "text-md/semibold",
                              className: eu.secondaryText,
                              children: es.intl.string(es.t.OAJQlJ),
                            }),
                        ],
                      },
                      "toggleMessageMode",
                    ),
                    $,
                  ],
                }),
            ],
          })
        );
      }
      let ev = (e) => {
        let { channel: t, onClickSuggestion: n } = e,
          [a, r] = l.useState(!1);
        l.useEffect(() => {
          r(!0);
        }, []);
        let o = !!p.Z.keyboardModeEnabled && !a,
          s = (0, y.wC)(null == t ? void 0 : t.guild_id)
            .slice(0, 5)
            .map((e) =>
              null == e.id
                ? { emoji: e, url: e.url }
                : {
                    emoji: e,
                    url: (0, W.gT)({
                      id: e.id,
                      animated: e.animated,
                      size: 58,
                    }),
                  },
            );
        return (0, i.jsx)(i.Fragment, {
          children: s.map((e) => {
            let { emoji: t, url: l } = e;
            return null != l
              ? (0, i.jsx)(
                  "div",
                  {
                    children: (0, i.jsx)(h.TooltipContainer, {
                      text: es.intl.formatToPlainString(es.t.kilW3t, {
                        emojiName: t.name,
                      }),
                      position: "top",
                      "aria-label": es.intl.formatToPlainString(es.t.kilW3t, {
                        emojiName: t.name,
                      }),
                      color: h.Tooltip.Colors.PRIMARY,
                      shouldShow: !o && void 0,
                      children: (0, i.jsx)(b.u, {
                        emoji: t,
                        isDisabled: !a,
                        onClick: () => n(t),
                        className: eu.emoji,
                      }),
                    }),
                  },
                  t.name,
                )
              : null;
          }),
        });
      };
      function ef(e) {
        let {
            channel: t,
            userDescription: n,
            entry: l,
            disableGameProfileLinks: a,
            onUserPopoutClosed: o,
          } = e,
          s = null == t ? void 0 : t.guild_id,
          {
            displayParticipants: c,
            participant1: d,
            participant2: m,
            numOtherParticipants: x,
          } = (0, $.Z)(l, 3),
          v = (0, u.e7)([V.default], () => V.default.getUser(l.author_id)),
          { streamPreviewUrl: f } = (0, ee.Z)(l),
          p = [d, m];
        return (0, i.jsxs)("div", {
          className: eu.popoutContentHeader,
          children: [
            (0, i.jsxs)("div", {
              className: eu.popoutUserContainer,
              children: [
                (0, i.jsx)(j.Z, {
                  maxUsers: 3,
                  users: c,
                  size: h.AvatarSizes.SIZE_24,
                  avatarClassName: eu.popoutStackedAvatar,
                  hideOverflowCount: !0,
                  disableUsernameTooltip: !0,
                  onUserPopoutClosed: o,
                }),
                (0, i.jsx)(h.Spacer, { size: 8, horizontal: !0 }),
                (0, i.jsx)(h.Heading, {
                  variant: "heading-sm/normal",
                  className: eu.popoutTextSecondary,
                  children: es.intl.format(n, {
                    user0: q.ZP.getName(s, null == t ? void 0 : t.id, p[0]),
                    user1: q.ZP.getName(s, null == t ? void 0 : t.id, p[1]),
                    countOthers: x,
                    countOthersHook: (e, t) =>
                      (0, i.jsx)(
                        h.Text,
                        {
                          variant: "text-sm/medium",
                          className: r()(
                            eu.popoutUsername,
                            eu.popoutTextPrimary,
                          ),
                          children: e,
                        },
                        t,
                      ),
                    name0Hook: (e, n) =>
                      (0, i.jsx)(
                        X.Z,
                        {
                          textClassName: r()(
                            eu.popoutUsername,
                            eu.popoutTextPrimary,
                          ),
                          text: e,
                          user: p[0],
                          channel: t,
                          onPopoutClosed: o,
                        },
                        n,
                      ),
                    name1Hook: (e, n) =>
                      (0, i.jsx)(
                        X.Z,
                        {
                          textClassName: r()(
                            eu.popoutUsername,
                            eu.popoutTextPrimary,
                          ),
                          text: e,
                          user: p[1],
                          channel: t,
                          onPopoutClosed: o,
                        },
                        n,
                      ),
                  }),
                }),
              ],
            }),
            null != f && (0, i.jsx)(P.ZP, { size: P.ZP.Sizes.SMALL }),
            null != v &&
              (0, i.jsx)(el.Z, {
                user: v,
                channel: t,
                guildId: s,
                entry: l,
                disableGameProfileLinks: a,
              }),
          ],
        });
      }
      function ep(e) {
        let { children: t, onClick: n } = e;
        return null == n
          ? (0, i.jsx)(i.Fragment, { children: t })
          : (0, i.jsx)(h.Clickable, {
              className: eu.maybeClickable,
              onClick: n,
              children: t,
            });
      }
      function eg(e) {
        var t;
        let {
            title: n,
            subtitle: l,
            badges: a,
            children: o,
            onClickThumbnail: s,
            onClickTitle: u,
            onClickSubtitle: c,
            headerIcons: d,
            disableGameProfileLinks: m = !1,
            onUserPopoutClosed: x,
            trackRankingItemInteraction: v,
            ...f
          } = e,
          { entry: p } = f,
          g = (0, J.dX)(p),
          C = (0, L.Z)(
            {
              location: "ContentPopout",
              applicationId:
                g && !m
                  ? null === (t = p.extra) || void 0 === t
                    ? void 0
                    : t.application_id
                  : void 0,
              source: T.m1.ActivityCard,
              trackEntryPointImpression: !0,
              sourceUserId: p.author_id,
            },
            {
              onOpened: () =>
                null == v ? void 0 : v(er.xP.OPENED_GAME_PROFILE),
            },
          ),
          { largeImage: I, smallImage: P } = (0, Y.rv)({ entry: p }),
          Z = g ? C : void 0;
        return (0, i.jsxs)("div", {
          className: eu.popoutContentWrapper,
          children: [
            (0, i.jsx)(ef, {
              disableGameProfileLinks: m,
              ...f,
              onUserPopoutClosed: x,
            }),
            (0, i.jsxs)(ed, {
              backgroundImgSrc: null == I ? void 0 : I.src,
              children: [
                (0, i.jsxs)("div", {
                  className: eu.popoutHeroInner,
                  children: [
                    (0, i.jsx)("div", {
                      className: eu.popoutThumbnailContainer,
                      children: (0, i.jsx)(K.E, {
                        image: I,
                        smallImage: P,
                        onClick: null != s ? s : Z,
                        size: K.J.SIZE_72,
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: eu.popoutHeroBody,
                      children: [
                        (0, i.jsx)(ep, {
                          onClick: null != u ? u : Z,
                          children: (0, i.jsx)(h.Heading, {
                            variant: "heading-md/medium",
                            className: r()(eu.popoutHeroTextPrimary, {
                              [eu.popoutHeroTextPrimaryShort]: null != d,
                            }),
                            lineClamp: 3,
                            children: n,
                          }),
                        }),
                        null != l
                          ? (0, i.jsx)(ep, {
                              onClick: null != c ? c : Z,
                              children: (0, i.jsx)(h.Text, {
                                variant: "text-sm/normal",
                                className: eu.popoutHeroTextSecondary,
                                children: l,
                              }),
                            })
                          : null,
                        (0, i.jsx)(h.Spacer, { size: 8 }),
                        a,
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: eu.popoutHeaderIcons,
                      children: d,
                    }),
                  ],
                }),
                o,
              ],
            }),
          ],
        });
      }
      function eC(e) {
        var t;
        let {
            title: n,
            subtitle: a,
            badges: r,
            stream: o,
            onClickThumbnail: s,
            onClickTitle: c,
            onClickSubtitle: d,
            onUserPopoutClosed: m,
            trackRankingItemInteraction: x,
            ...p
          } = e,
          g = (0, u.e7)([k.Z], () =>
            k.Z.getChannel(null == o ? void 0 : o.channelId),
          ),
          [C] = l.useMemo(() => (0, S.p9)(g, F.Z, H.Z, U.Z, w.Z), [g]),
          { entry: I } = p,
          P = (0, J.dX)(I),
          Z = (0, L.Z)(
            {
              location: "ContentPopout",
              applicationId: P
                ? null === (t = I.extra) || void 0 === t
                  ? void 0
                  : t.application_id
                : void 0,
              source: T.m1.ActivityCard,
              trackEntryPointImpression: !0,
              sourceUserId: I.author_id,
            },
            {
              onOpened: () =>
                null == x ? void 0 : x(er.xP.OPENED_GAME_PROFILE),
            },
          ),
          y = P ? Z : void 0,
          {
            activity: j,
            activityApplication: E,
            fallbackApplication: _,
          } = (0, et.qy)(I),
          { largeImage: A, smallImage: R } = (0, Y.YC)(j, null != E ? E : _);
        return null == o
          ? null
          : (0, i.jsxs)("div", {
              className: eu.popoutContentWrapper,
              children: [
                (0, i.jsx)(ef, { ...p, onUserPopoutClosed: m }),
                (0, i.jsxs)("div", {
                  className: eu.streamingPopoutHero,
                  children: [
                    (0, i.jsx)(ep, {
                      onClick: C
                        ? () => {
                            v.default.selectVoiceChannel(o.channelId),
                              (0, f.iV)(o);
                          }
                        : void 0,
                      children: (0, i.jsxs)("div", {
                        className: eu.streamingPopoutPreviewContainer,
                        children: [
                          (0, i.jsx)(N.Z, {
                            className: eu.streamingPopoutImg,
                            stream: o,
                          }),
                          C &&
                            (0, i.jsx)("div", {
                              className: eu.streamCTA,
                              children: (0, i.jsx)(h.Text, {
                                variant: "text-md/normal",
                                children: es.intl.string(es.t["7Xq/nZ"]),
                              }),
                            }),
                        ],
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: eu.streamingPopoutHeader,
                      children: [
                        null != A &&
                          (0, i.jsx)("div", {
                            className: eu.popoutThumbnailContainer,
                            children: (0, i.jsx)(K.E, {
                              image: A,
                              smallImage: R,
                              onClick: null != s ? s : y,
                              size: K.J.SIZE_72,
                            }),
                          }),
                        (0, i.jsxs)("div", {
                          className: eu.streamingPopoutHeaderText,
                          children: [
                            (0, i.jsx)(ep, {
                              onClick: null != c ? c : y,
                              children: (0, i.jsx)(h.Heading, {
                                variant: "heading-md/semibold",
                                className: eu.popoutTextPrimary,
                                lineClamp: 3,
                                children: n,
                              }),
                            }),
                            null != a
                              ? (0, i.jsx)(ep, {
                                  onClick: null != d ? d : y,
                                  children: (0, i.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    className: eu.popoutTextSecondary,
                                    children: a,
                                  }),
                                })
                              : null,
                            (0, i.jsx)(h.Spacer, { size: 8 }),
                            r,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
      }
      function eI(e) {
        let { IconComponent: t, children: n, className: l, ...a } = e;
        return (0, i.jsxs)(h.Button, {
          ...a,
          className: r()(l, eu.primaryButton),
          innerClassName: null != t ? eu.iconButton : void 0,
          size: h.Button.Sizes.LARGE,
          children: [
            null != t
              ? (0, i.jsx)(t, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: d.Z.colors.WHITE,
                })
              : null,
            (0, i.jsx)(h.Text, {
              variant: "text-md/semibold",
              color: "always-white",
              children: n,
            }),
          ],
        });
      }
    },
    896449: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        a = n(239091),
        r = n(299206),
        o = n(810568),
        s = n(168524),
        u = n(725119),
        c = n(26033),
        d = n(388032),
        h = n(301698);
      function m(e) {
        var t;
        let {
            user: n,
            guildId: m,
            channel: x,
            entry: v,
            onSelect: f,
            disableGameProfileLinks: p,
          } = e,
          g = (0, u.Z)({
            userId: n.id,
            guildId: m,
            channelId: null == x ? void 0 : x.id,
          }),
          C = (0, r.Z)({ id: n.id, label: d.intl.string(d.t["/AXYnJ"]) }),
          I = (0, c.dX)(v),
          P = (0, s.Z)({
            location: "ContentPopoutContextMenu",
            applicationId:
              I && !0 !== p
                ? null === (t = v.extra) || void 0 === t
                  ? void 0
                  : t.application_id
                : void 0,
            source: o.m1.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: v.author_id,
          });
        return (0, i.jsx)(l.Popout, {
          align: "top",
          position: "right",
          disablePointerEvents: !1,
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(l.Menu, {
              navId: "content-inventory-context",
              onClose: () => {
                (0, a.Zy)(), t();
              },
              "aria-label": d.intl.string(d.t.liqwPD),
              onSelect: f,
              children: (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsxs)(l.MenuGroup, {
                    children: [
                      g,
                      null != P &&
                        (0, i.jsx)(l.MenuItem, {
                          id: "game-profile",
                          label: d.intl.string(d.t.f7aVGh),
                          action: P,
                        }),
                    ],
                  }),
                  (0, i.jsx)(l.MenuGroup, { children: C }),
                ],
              }),
            });
          },
          children: (e) =>
            (0, i.jsx)(l.Tooltip, {
              text: d.intl.string(d.t.UKOtz8),
              children: (t) =>
                (0, i.jsx)(l.Clickable, {
                  ...t,
                  className: h.menuIcon,
                  ...e,
                  children: (0, i.jsx)(l.MoreHorizontalIcon, {
                    color: "currentColor",
                    size: "custom",
                    width: 16,
                    height: 16,
                  }),
                }),
            }),
        });
      }
    },
    469153: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var l = n(100621),
        a = n(442837),
        r = n(481060),
        o = n(607070),
        s = n(388032),
        u = n(704108),
        c = n(482617);
      let d = () =>
        (0, i.jsxs)("div", {
          className: c.toast,
          children: [
            (0, i.jsx)(r.Spinner, {
              type: r.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
              className: u.loadingSpinner,
            }),
            (0, i.jsx)(r.Text, {
              color: "header-primary",
              variant: "text-md/normal",
              children: s.intl.string(s.t["5z/hlJ"]),
            }),
          ],
        });
      t.Z = (e) => {
        let { shown: t, sent: n, className: u } = e,
          c = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
          h = (0, r.useTransition)(
            t,
            {
              from: {
                transform: c ? "translateY(0)" : "translateY(16px)",
                opacity: 0,
              },
              enter: { transform: "translateY(0)", opacity: 1 },
              leave: {
                transform: c ? "translateY(0)" : "translateY(16px)",
                opacity: 0,
              },
              config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
              delay: 200,
            },
            "animate-always",
          );
        return (0, i.jsx)(i.Fragment, {
          children: h(
            (e, t) =>
              t &&
              (0, i.jsx)(l.animated.div, {
                className: u,
                style: e,
                children: n
                  ? (0, i.jsx)(r.Toast, {
                      message: s.intl.string(s.t.fjcCk5),
                      type: r.ToastType.SUCCESS,
                      id: "success_message_toast",
                    })
                  : (0, i.jsx)(r.Toast, {
                      message: "",
                      type: r.ToastType.CUSTOM,
                      id: "custom_loading_message_toast",
                      options: { component: (0, i.jsx)(d, {}) },
                    }),
              }),
          ),
        });
      };
    },
    656709: function (e, t, n) {
      n.d(t, {
        p: function () {
          return a;
        },
      });
      var i = n(904245),
        l = n(957730);
      function a(e) {
        let { channel: t, content: n, entry: a, whenReady: r } = e,
          o = l.ZP.parse(t, n);
        return i.Z.sendMessage(t.id, o, r, {
          contentInventoryEntry: { unverified_content: a },
        });
      }
    },
    897674: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
        g: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(192379),
        l = n(442837),
        a = n(146282),
        r = n(327220),
        o = n(959580),
        s = n(371177);
      function u(e, t) {
        let { types: n } = e;
        return !!(null == n || n.has(t.content_type)) || !1;
      }
      function c(e) {
        let { feed: t, filters: n } = (0, l.cj)([a.Z], () => ({
            feed: a.Z.getFeed(e),
            filters: a.Z.getFilters(),
          })),
          c = i.useMemo(() => {
            let e = null == t ? void 0 : t.entries.map((e) => e.content);
            return null != n
              ? null == e
                ? void 0
                : e.filter((e) => u(n, e))
              : e;
          }, [t, n]);
        return (c = (0, r.Z)(c)), (c = (0, o.Z)(c)), (c = (0, s.Z)(c));
      }
    },
    871118: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var i = n(200651),
        l = n(192379),
        a = n(120356),
        r = n.n(a),
        o = n(442837),
        s = n(481060),
        u = n(543882),
        c = n(592125),
        d = n(496675),
        h = n(981631),
        m = n(388032),
        x = n(445524);
      function v(e) {
        let { isLoading: t, noText: n, previewText: l, className: a } = e;
        return (0, i.jsx)("div", {
          className: r()(x.emptyPreviewContainer, a),
          children: t
            ? (0, i.jsx)(s.Spinner, {})
            : (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("div", { className: x.emptyPreviewImage }),
                  n
                    ? null
                    : (0, i.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        className: x.emptyPreviewText,
                        children: null != l ? l : m.intl.string(m.t.uQZTBQ),
                      }),
                ],
              }),
        });
      }
      function f(e) {
        let { stream: t, className: n, noText: a = !1 } = e,
          r = (0, o.e7)([c.Z], () => c.Z.getBasicChannel(t.channelId)),
          s = (0, o.e7)(
            [d.Z],
            () => null != r && d.Z.canBasicChannel(h.S7T.CONNECT, r),
          ),
          { url: f, isLoading: p } = (0, o.cj)([u.Z], () => ({
            url: s
              ? u.Z.getPreviewURL(t.guildId, t.channelId, t.ownerId)
              : null,
            isLoading:
              s && u.Z.getIsPreviewLoading(t.guildId, t.channelId, t.ownerId),
          })),
          g = l.useRef(p ? null : f);
        l.useEffect(() => {
          !p && (g.current = f);
        }, [f, p]);
        let C = null == f || p ? g.current : f;
        return null == C
          ? (0, i.jsx)(v, {
              className: n,
              isLoading: p,
              noText: a,
              previewText: s ? void 0 : m.intl.string(m.t.pgUTZG),
            })
          : (0, i.jsx)("div", {
              className: n,
              children: (0, i.jsx)("img", {
                src: C,
                alt: "",
                className: x.image,
              }),
            });
      }
    },
    475676: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return P;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        a = n(442837),
        r = n(481060),
        o = n(297781),
        s = n(443487),
        u = n(314897),
        c = n(594174),
        d = n(5192),
        h = n(873128),
        m = n(246627),
        x = n(709737),
        v = n(69589),
        f = n(531501),
        p = n(463031),
        g = n(388032),
        C = n(835777);
      function I() {
        return (0, i.jsxs)("div", {
          className: C.gameTitleContainer,
          children: [
            (0, i.jsx)(r.LeagueOfLegendsBrandIcon, { size: "xs" }),
            (0, i.jsx)(r.Text, {
              variant: "text-sm/medium",
              className: C.gameTitle,
              children: "League of Legends",
            }),
          ],
        });
      }
      function P(e) {
        var t, n, f, C;
        let P,
          { selected: y, channel: j } = e,
          w = j.guild_id,
          T = (0, h.Z)({ guildId: w, leaderboardId: p._, intervalOffset: 0 }),
          { rankChanges: L } = (0, m.Z)({
            guildId: w,
            leaderboardId: p._,
            intervalStart:
              null !== (f = null == T ? void 0 : T.interval_start) &&
              void 0 !== f
                ? f
                : "",
          }),
          S = (0, a.e7)([u.default], () => u.default.getId()),
          [N, E] = l.useMemo(() => {
            let e = L.find((e) => e.userId === S),
              t = L[0],
              n = null != e ? e : t,
              i =
                null == T
                  ? void 0
                  : T.users.find(
                      (e) => e.user_id === (null == n ? void 0 : n.userId),
                    );
            return [n, i];
          }, [T, L, S]),
          _ = (0, a.e7)([c.default], () =>
            c.default.getUser(null == N ? void 0 : N.userId),
          ),
          A = d.ZP.getName(w, void 0, _);
        if (null == T) return null;
        if (0 === T.users.length || null == N)
          return (0, i.jsx)(Z, { selected: y });
        let { sort_by_statistic_id: R } = T.guild_settings,
          b =
            null !==
              (C =
                null == E
                  ? void 0
                  : null === (n = E.statistics) || void 0 === n
                    ? void 0
                    : null === (t = n[R]) || void 0 === t
                      ? void 0
                      : t.value) && void 0 !== C
              ? C
              : 0,
          { currentRank: M } = N;
        return (
          (P =
            N.userId === S
              ? g.intl.formatToPlainString(g.t["eU+JxM"], { rank: M })
              : g.intl.formatToPlainString(g.t["8BLSQ0"], {
                  rank: M,
                  username: A,
                })),
          (0, i.jsxs)(s.Zb, {
            selected: y,
            children: [
              (0, i.jsxs)(s.e$, {
                children: [
                  (0, i.jsx)(I, {}),
                  (0, i.jsx)(r.Spacer, { size: 2 }),
                  (0, i.jsx)(s.ll, { children: P }),
                  (0, i.jsx)(o.Gk, {
                    location: o.Gt.CARD,
                    children: (0, i.jsx)(x.DC, { value: b, statisticId: R }),
                  }),
                ],
              }),
              (0, i.jsx)(v.Z, { rank: M }),
            ],
          })
        );
      }
      function Z(e) {
        let { selected: t } = e;
        return (0, i.jsxs)(s.Zb, {
          selected: t,
          children: [
            (0, i.jsxs)(s.e$, {
              children: [
                (0, i.jsx)(I, {}),
                (0, i.jsx)(r.Spacer, { size: 2 }),
                (0, i.jsx)(s.ll, { children: g.intl.string(g.t["t+b0DA"]) }),
                (0, i.jsx)(o.Gk, {
                  location: o.Gt.CARD,
                  children: (0, i.jsx)(x.ZR, {
                    text: g.intl.string(g.t.zX8HUl),
                  }),
                }),
              ],
            }),
            (0, i.jsx)(f.Z, {
              color: "#5B5A56",
              children: (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/173a83bdbe0a455bf0d251f4cc9c2c027cd3da855384773916f3eb08298a880c.png",
                alt: "",
                className: C.emptyStateImage,
              }),
            }),
          ],
        });
      }
    },
    709737: function (e, t, n) {
      n.d(t, {
        DC: function () {
          return s;
        },
        ZR: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(657707),
        a = n(297781);
      n(709054);
      var r = n(528567);
      n(814059);
      var o = n(388032);
      function s(e) {
        let { value: t, statisticId: n } = e,
          l = o.intl.formatToPlainString(o.t.yhdo8v, {
            value: t,
            statisticName: (0, r.C)(n),
          });
        return (0, i.jsx)(u, { text: l });
      }
      function u(e) {
        let { text: t } = e;
        return (0, i.jsx)(a.ej, { Icon: l.hAD, text: t });
      }
    },
    69589: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651),
        l = n(481060),
        a = n(531501),
        r = n(211494);
      function o(e) {
        let { rank: t } = e;
        return (0, i.jsx)(a.Z, {
          color: "#cbaa62",
          children: (0, i.jsx)("div", {
            className: r.innerContainer,
            children: (0, i.jsx)(l.Text, {
              variant: "text-sm/medium",
              className: r.rankText,
              children: t,
            }),
          }),
        });
      }
    },
    531501: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        a = n.n(l),
        r = n(416405);
      function o(e) {
        let { children: t, className: n, color: l } = e;
        return (0, i.jsxs)("div", {
          className: a()(r.container, n),
          children: [
            (0, i.jsxs)("svg", {
              className: r.border,
              width: "48",
              height: "48",
              viewBox: "0 0 48 48",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, i.jsx)("path", {
                  fill: l,
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M2.56494 3.99827V6.685L0.953743 8.27307C0.681432 8.54147 0.527646 8.90755 0.526583 9.2899L0.445318 38.5096C0.444267 38.8875 0.592525 39.2505 0.857827 39.5197L2.56494 41.2517V43.9983C2.56494 44.7899 3.20666 45.4316 3.99827 45.4316H6.68488L8.27307 47.0429C8.54147 47.3152 8.90755 47.469 9.2899 47.4701L38.5096 47.5514C38.8875 47.5524 39.2505 47.4041 39.5197 47.1388L41.2518 45.4316H43.9983C44.7899 45.4316 45.4316 44.7899 45.4316 43.9983V41.3118L47.0429 39.7236C47.3152 39.4552 47.469 39.0891 47.4701 38.7068L47.5514 9.48712C47.5524 9.10919 47.4041 8.74613 47.1388 8.47697L45.4316 6.74487V3.99827C45.4316 3.20666 44.7899 2.56494 43.9983 2.56494H41.3117L39.7236 0.953746C39.4552 0.681434 39.0891 0.527649 38.7068 0.526586L9.48712 0.445318C9.10918 0.444267 8.74613 0.592525 8.47696 0.857827L6.74499 2.56494H3.99827C3.20666 2.56494 2.56494 3.20666 2.56494 3.99827ZM3.99837 5.41255V5.41421L4.00202 5.41061V5.40895L3.99837 5.41255ZM3.99837 41.7865V41.788L4.00202 41.7917V41.7902L3.99837 41.7865ZM3.99837 43.9983V43.9998H43.9984V3.99983L43.9983 43.9983H3.99837ZM42.5856 3.99983H42.5841L42.5861 4.00189H42.5876L42.5856 3.99983ZM5.43126 4.00189H5.42957L5.43166 3.99983H5.43334L5.43126 4.00189ZM7.5647 2.66494L7.56312 2.6665H40.504L40.5025 2.66494H7.5647ZM40.265 2.56494H7.80693L9.00026 1.38874C9.12943 1.26142 9.30367 1.19027 9.48504 1.19077L38.7047 1.27204C38.8882 1.27255 39.0639 1.34635 39.1927 1.47704L40.265 2.56494ZM3.99827 2.66494C3.26189 2.66494 2.66494 3.26189 2.66494 3.99827V6.72684L1.02394 8.34429C0.770628 8.59397 0.627571 8.9345 0.626582 9.29018L0.545318 38.5098C0.545237 38.5389 0.546107 38.5679 0.547913 38.5968C0.546173 38.5685 0.545336 38.54 0.545415 38.5114L0.62668 9.29174C0.627669 8.93607 0.770725 8.59553 1.02404 8.34585L2.66504 6.72841V3.99983C2.66504 3.26345 3.26199 2.6665 3.99837 2.6665H6.78609L8.54726 0.930609C8.79765 0.683816 9.13537 0.545902 9.48694 0.54688L38.7066 0.628148C39.0623 0.629137 39.4028 0.772193 39.6525 1.02551L41.2699 2.6665H43.9984C44.7057 2.6665 45.2844 3.21725 45.3289 3.91329C45.2851 3.21651 44.7061 2.66494 43.9983 2.66494H41.2698L39.6524 1.02394C39.4027 0.770631 39.0622 0.627574 38.7065 0.626585L9.48684 0.545318C9.13527 0.54434 8.79755 0.682254 8.54716 0.929047L6.78599 2.66494H3.99827ZM45.3317 6.78597V6.78743L47.0677 8.54873C47.2941 8.77839 47.4288 9.08152 47.4489 9.40142C47.4292 9.08095 47.2944 8.7772 47.0676 8.54716L45.3317 6.78597ZM2.66743 44.0804C2.66584 44.0538 2.66504 44.0269 2.66504 43.9998V41.2122L2.66494 43.9983C2.66494 44.0259 2.66578 44.0533 2.66743 44.0804ZM7.49413 45.3332L8.73276 46.5898C8.8803 46.7395 9.08153 46.8241 9.2917 46.8246L38.5113 46.9059C38.7191 46.9065 38.9187 46.825 39.0666 46.6792L40.4322 45.3332H40.4339L39.0667 46.6807C38.9188 46.8265 38.7192 46.908 38.5114 46.9075L9.29179 46.8262C9.08162 46.8256 8.88039 46.7411 8.73286 46.5914L7.49269 45.3332H7.49413ZM8.80398 46.5196L7.73157 45.4316H40.1899L38.9964 46.6079C38.8672 46.7353 38.693 46.8064 38.5116 46.8059L9.29198 46.7246C9.10848 46.7241 8.93279 46.6503 8.80398 46.5196ZM45.3317 40.504L46.5898 39.2639C46.7395 39.1164 46.824 38.9151 46.8246 38.705L46.9059 9.48532C46.9059 9.46799 46.9054 9.45072 46.9043 9.43352C46.9055 9.45123 46.906 9.46903 46.906 9.48689L46.8247 38.7065C46.8241 38.9167 46.7396 39.1179 46.5899 39.2655L45.3317 40.5056V40.504ZM46.5196 39.1927L45.4316 40.2651V7.8068L46.6079 9.00026C46.7353 9.12944 46.8064 9.30367 46.8059 9.48505L46.7246 38.7047C46.7241 38.8882 46.6503 39.0639 46.5196 39.1927ZM1.09232 38.5631C1.10421 38.752 1.18383 38.931 1.31752 39.0666L2.66494 40.4337V7.49438L2.66504 40.4352L1.31762 39.0682C1.18356 38.9322 1.10387 38.7526 1.09232 38.5631ZM1.47704 8.80398L2.56494 7.73169V40.1897L1.38874 38.9964C1.26142 38.8672 1.19027 38.693 1.19077 38.5116L1.27203 9.29198C1.27254 9.10848 1.34635 8.93279 1.47704 8.80398ZM5.18566 4.10189L5.18933 4.09827H4.09827V5.17367L4.10202 5.16998V6.21667L4.09827 6.22037V41.7454L4.10202 41.7492V42.8111L4.09827 42.8073V43.8983H43.8983V4.09827H42.823L42.8266 4.10189H41.7799L41.7763 4.09827H6.25127L6.2476 4.10189H5.18566Z",
                }),
                (0, i.jsx)("path", {
                  fill: l,
                  stroke: l,
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M2.56494 3.99827V6.685L0.953743 8.27307C0.681432 8.54147 0.527646 8.90755 0.526583 9.2899L0.445318 38.5096C0.444267 38.8875 0.592525 39.2505 0.857827 39.5197L2.56494 41.2517V43.9983C2.56494 44.7899 3.20666 45.4316 3.99827 45.4316H6.68488L8.27307 47.0429C8.54147 47.3152 8.90755 47.469 9.2899 47.4701L38.5096 47.5514C38.8875 47.5524 39.2505 47.4041 39.5197 47.1388L41.2518 45.4316H43.9983C44.7899 45.4316 45.4316 44.7899 45.4316 43.9983V41.3118L47.0429 39.7236C47.3152 39.4552 47.469 39.0891 47.4701 38.7068L47.5514 9.48712C47.5524 9.10919 47.4041 8.74613 47.1388 8.47697L45.4316 6.74487V3.99827C45.4316 3.20666 44.7899 2.56494 43.9983 2.56494H41.3117L39.7236 0.953746C39.4552 0.681434 39.0891 0.527649 38.7068 0.526586L9.48712 0.445318C9.10918 0.444267 8.74613 0.592525 8.47696 0.857827L6.74499 2.56494H3.99827C3.20666 2.56494 2.56494 3.20666 2.56494 3.99827ZM3.99837 5.41255V5.41421L4.00202 5.41061V5.40895L3.99837 5.41255ZM3.99837 41.7865V41.788L4.00202 41.7917V41.7902L3.99837 41.7865ZM3.99837 43.9983V43.9998H43.9984V3.99983L43.9983 43.9983H3.99837ZM42.5856 3.99983H42.5841L42.5861 4.00189H42.5876L42.5856 3.99983ZM5.43126 4.00189H5.42957L5.43166 3.99983H5.43334L5.43126 4.00189ZM7.5647 2.66494L7.56312 2.6665H40.504L40.5025 2.66494H7.5647ZM40.265 2.56494H7.80693L9.00026 1.38874C9.12943 1.26142 9.30367 1.19027 9.48504 1.19077L38.7047 1.27204C38.8882 1.27255 39.0639 1.34635 39.1927 1.47704L40.265 2.56494ZM3.99827 2.66494C3.26189 2.66494 2.66494 3.26189 2.66494 3.99827V6.72684L1.02394 8.34429C0.770628 8.59397 0.627571 8.9345 0.626582 9.29018L0.545318 38.5098C0.545237 38.5389 0.546107 38.5679 0.547913 38.5968C0.546173 38.5685 0.545336 38.54 0.545415 38.5114L0.62668 9.29174C0.627669 8.93607 0.770725 8.59553 1.02404 8.34585L2.66504 6.72841V3.99983C2.66504 3.26345 3.26199 2.6665 3.99837 2.6665H6.78609L8.54726 0.930609C8.79765 0.683816 9.13537 0.545902 9.48694 0.54688L38.7066 0.628148C39.0623 0.629137 39.4028 0.772193 39.6525 1.02551L41.2699 2.6665H43.9984C44.7057 2.6665 45.2844 3.21725 45.3289 3.91329C45.2851 3.21651 44.7061 2.66494 43.9983 2.66494H41.2698L39.6524 1.02394C39.4027 0.770631 39.0622 0.627574 38.7065 0.626585L9.48684 0.545318C9.13527 0.54434 8.79755 0.682254 8.54716 0.929047L6.78599 2.66494H3.99827ZM45.3317 6.78597V6.78743L47.0677 8.54873C47.2941 8.77839 47.4288 9.08152 47.4489 9.40142C47.4292 9.08095 47.2944 8.7772 47.0676 8.54716L45.3317 6.78597ZM2.66743 44.0804C2.66584 44.0538 2.66504 44.0269 2.66504 43.9998V41.2122L2.66494 43.9983C2.66494 44.0259 2.66578 44.0533 2.66743 44.0804ZM7.49413 45.3332L8.73276 46.5898C8.8803 46.7395 9.08153 46.8241 9.2917 46.8246L38.5113 46.9059C38.7191 46.9065 38.9187 46.825 39.0666 46.6792L40.4322 45.3332H40.4339L39.0667 46.6807C38.9188 46.8265 38.7192 46.908 38.5114 46.9075L9.29179 46.8262C9.08162 46.8256 8.88039 46.7411 8.73286 46.5914L7.49269 45.3332H7.49413ZM8.80398 46.5196L7.73157 45.4316H40.1899L38.9964 46.6079C38.8672 46.7353 38.693 46.8064 38.5116 46.8059L9.29198 46.7246C9.10848 46.7241 8.93279 46.6503 8.80398 46.5196ZM45.3317 40.504L46.5898 39.2639C46.7395 39.1164 46.824 38.9151 46.8246 38.705L46.9059 9.48532C46.9059 9.46799 46.9054 9.45072 46.9043 9.43352C46.9055 9.45123 46.906 9.46903 46.906 9.48689L46.8247 38.7065C46.8241 38.9167 46.7396 39.1179 46.5899 39.2655L45.3317 40.5056V40.504ZM46.5196 39.1927L45.4316 40.2651V7.8068L46.6079 9.00026C46.7353 9.12944 46.8064 9.30367 46.8059 9.48505L46.7246 38.7047C46.7241 38.8882 46.6503 39.0639 46.5196 39.1927ZM1.09232 38.5631C1.10421 38.752 1.18383 38.931 1.31752 39.0666L2.66494 40.4337V7.49438L2.66504 40.4352L1.31762 39.0682C1.18356 38.9322 1.10387 38.7526 1.09232 38.5631ZM1.47704 8.80398L2.56494 7.73169V40.1897L1.38874 38.9964C1.26142 38.8672 1.19027 38.693 1.19077 38.5116L1.27203 9.29198C1.27254 9.10848 1.34635 8.93279 1.47704 8.80398ZM5.18566 4.10189L5.18933 4.09827H4.09827V5.17367L4.10202 5.16998V6.21667L4.09827 6.22037V41.7454L4.10202 41.7492V42.8111L4.09827 42.8073V43.8983H43.8983V4.09827H42.823L42.8266 4.10189H41.7799L41.7763 4.09827H6.25127L6.2476 4.10189H5.18566Z",
                  "stroke-width": "0.4",
                }),
              ],
            }),
            t,
          ],
        });
      }
    },
    12168: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
        },
        u: function () {
          return T;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        a = n(120356),
        r = n.n(a),
        o = n(392711),
        s = n(100621),
        u = n(481060),
        c = n(596454),
        d = n(727637),
        h = n(313201),
        m = n(543241),
        x = n(318766),
        v = n(907040),
        f = n(633302),
        p = n(806966),
        g = n(176354),
        C = n(823379),
        I = n(354459),
        P = n(185923),
        Z = n(420212),
        y = n(264699);
      let j = P.Hz.CHAT,
        w = [
          f.ZP.getByName("thumbsup"),
          f.ZP.getByName("eyes"),
          f.ZP.getByName("laughing"),
          f.ZP.getByName("watermelon"),
          f.ZP.getByName("fork_and_knife"),
          f.ZP.getByName("yum"),
        ].filter(C.lm);
      function T(e) {
        let { emoji: t, isDisabled: n = !1, onClick: a, className: o } = e,
          h = l.useRef(null),
          m = (0, d.Z)(h);
        return (0, i.jsx)("span", {
          ref: h,
          children: (0, i.jsx)(u.Button, {
            onClick: a,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.NONE,
            focusProps: { enabled: !n },
            children: (0, i.jsx)(u.Spring, {
              config: x.u,
              from: { value: 0 },
              to: { value: m ? 1 : 0 },
              children: (e) => {
                let { value: l } = e;
                return (0, i.jsx)(s.animated.div, {
                  style: {
                    transform: l
                      .to([0, 1], [1, 1.14])
                      .to((e) => "scale(".concat(e, ")")),
                  },
                  children: (0, i.jsx)(c.Z, {
                    className: r()(y.emoji, o, { [y.emojiItemDisabled]: n }),
                    emojiId: t.id,
                    emojiName: null == t ? void 0 : t.surrogates,
                    animated: t.animated,
                  }),
                });
              },
            }),
          }),
        });
      }
      function L(e) {
        let {
          otherAccessories: t,
          isEmojiPickerExpanded: n,
          onSetExpanded: l,
          onFocus: a,
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            t,
            (0, i.jsx)(u.Clickable, {
              className: y.dropDownContainer,
              onClick: () => {
                l(!n), a();
              },
              children: (0, i.jsx)(u.ChevronSmallDownIcon, {
                size: "md",
                color: "currentColor",
                className: r()(y.dropDown, { [y.dropDownOpen]: n }),
              }),
            }),
          ],
        });
      }
      function S(e) {
        let {
            channel: t,
            title: n,
            closePopout: a,
            onFocus: s,
            onSelectEmoji: c,
            onSelectDisabledEmoji: d,
            onExpandedToggle: x,
            emojiSearchProps: f,
            recentlyUsedEmojis: C,
            analyticsOverride: S,
          } = e,
          N = (0, h.Dt)(),
          [E, _] = l.useState(!1),
          A = (0, m.wC)(t.guild_id),
          R = (0, o.uniqBy)([...A, ...w], "name")
            .filter(
              (e) =>
                !g.ZP.isEmojiFilteredOrLocked({
                  emoji: e,
                  channel: t,
                  intention: j,
                }),
            )
            .slice(0, I.e5);
        null != C && C.length > 0 && R.splice(R.length - 1, 1, C[0]);
        let b = (e) => {
            _(e), null == x || x(e);
          },
          M = (e, t) => {
            if (null == e && t) {
              a();
              return;
            }
            null != e && c(e);
            b(!t), t && p.kJ.setSearchPlaceholder(null);
          };
        return (0, i.jsxs)(u.Dialog, {
          "aria-labelledby": N,
          children: [
            (0, i.jsx)(u.HeadingLevel, {
              forceLevel: 2,
              children: (0, i.jsx)(u.HiddenVisually, {
                children: (0, i.jsx)(u.H, { id: N, children: n }),
              }),
            }),
            (0, i.jsxs)("div", {
              className: y.container,
              children: [
                (0, i.jsx)(v.Z, {
                  analyticsOverride: S,
                  channel: t,
                  className: r()(y.animatedPicker, {
                    [y.animatedPickerTall]: E,
                  }),
                  headerClassName: r()(y.emojiPickerHeader, {
                    [y.emojiPickerHeaderExpanded]: E,
                  }),
                  closePopout: a,
                  onSelectEmoji: E ? M : () => {},
                  shouldHidePickerActions: !E,
                  wrapper: "div",
                  pickerIntention: j,
                  searchProps: {
                    ...f,
                    accessory: (0, i.jsx)(L, {
                      otherAccessories: null == f ? void 0 : f.accessory,
                      isEmojiPickerExpanded: E,
                      onSetExpanded: b,
                      onFocus: s,
                    }),
                    onKeyDown: (e) => {
                      null != e &&
                        e.key !== Z.vn.TAB &&
                        (e.key !== Z.vn.ENTER || e.shiftKey ? b(!0) : b(!E));
                    },
                  },
                }),
                (0, i.jsx)("div", {
                  className: y.slotsContainer,
                  children: (0, i.jsx)("div", {
                    className: r()(y.slots, y.slotsWide),
                    children: R.map((e) => {
                      let n = g.ZP.isEmojiDisabled({
                        emoji: e,
                        channel: t,
                        intention: P.Hz.CHAT,
                      });
                      return (0, i.jsx)(
                        "div",
                        {
                          className: y.slot,
                          children: (0, i.jsx)(u.TooltipContainer, {
                            text: e.name,
                            position: "top",
                            "aria-label": e.name,
                            tooltipClassName: y.tooltipContainer,
                            color: u.Tooltip.Colors.BRAND,
                            children: (0, i.jsx)(T, {
                              emoji: e,
                              isDisabled: n,
                              onClick: () => {
                                n ? null == d || d(e) : M(e, !0);
                              },
                            }),
                          }),
                        },
                        e.name,
                      );
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    62817: function (e, t, n) {
      n(47120), n(177593);
      var i,
        l,
        a,
        r,
        o = n(442837),
        s = n(570140),
        u = n(375954);
      let c = Object.freeze([]),
        d = {},
        h = {},
        m = {},
        x = {},
        v = {};
      function f(e, t) {}
      function p() {
        v = {};
      }
      function g(e, t) {
        let n = d[e];
        return (
          null != n &&
          ((d[e] = n.filter((e) => e.id !== t)),
          delete h[t],
          delete m[t],
          n.length !== d[e].length)
        );
      }
      function C(e, t) {
        let n = d[e];
        if (null == n) return !1;
        d[e] = n.map((e) => (e.id === t.id ? { ...e, ...t } : e));
        let i = m[t.id];
        null != i && null != x[i.id] && (x[i.id] = { ...x[i.id], ...t });
      }
      class I extends (i = o.ZP.Store) {
        initialize() {
          this.waitFor(u.Z);
        }
        getFiles(e) {
          var t;
          return null !== (t = d[e]) && void 0 !== t ? t : c;
        }
        getMessageForFile(e) {
          return m[e];
        }
        getUploaderFileForMessageId(e) {
          return x[e];
        }
        getUploadAttachments(e) {
          if (null != e) return v[e];
        }
      }
      (r = "UploadStore"),
        (a = "displayName") in (l = I)
          ? Object.defineProperty(l, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[a] = r),
        (t.Z = new I(s.Z, {
          CONNECTION_OPEN: function () {
            v = {};
          },
          LOGOUT: function () {
            v = {};
          },
          UPLOAD_START: function (e) {
            var t;
            let { channelId: n, file: i, uploader: l, message: a } = e;
            if (l._aborted || l._errored) return;
            let r = null !== (t = d[n]) && void 0 !== t ? t : c;
            (h[i.id] = l), (d[n] = [...r, i]), (m[i.id] = a);
            let { items: o } = i;
            null != o && (x[a.id] = { ...i, items: o }), f(a.nonce, i);
          },
          UPLOAD_COMPRESSION_PROGRESS: function (e) {
            let { channelId: t, file: n } = e;
            C(t, n);
          },
          UPLOAD_PROGRESS: function (e) {
            let { channelId: t, file: n } = e;
            C(t, n);
          },
          UPLOAD_COMPLETE: function (e) {
            let { channelId: t, file: n } = e;
            return g(t, n.id);
          },
          UPLOAD_FAIL: function (e) {
            let { channelId: t, file: n } = e;
            return g(t, n.id);
          },
          UPLOAD_CANCEL_REQUEST: function (e) {
            let { file: t } = e,
              n = h[t.id];
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
              i = h[t.id];
            if (null == i) return !1;
            setImmediate(() => i.cancelItem(n));
          },
          UPLOAD_FILE_UPDATE: function (e) {
            let { channelId: t, file: n } = e,
              i = m[n.id];
            null != i && f(i.nonce, n), C(t, n);
          },
          UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
            let { file: t, messageId: n } = e;
            x[n] = t;
          },
        }));
    },
  },
]);
//# sourceMappingURL=93f508ab7f414715e1fd.js.map
