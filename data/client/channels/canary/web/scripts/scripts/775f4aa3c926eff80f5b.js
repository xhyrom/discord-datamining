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
          return o;
        },
      });
      var l = n(735250);
      n(470079);
      var a = n(120356),
        i = n.n(a),
        r = n(481060),
        s = n(120297);
      function o(e) {
        let { className: t, size: n, ...a } = e;
        return (0, l.jsx)(r.Button, {
          className: i()(s.button, t),
          size: i()(s.buttonSize, n),
          ...a,
        });
      }
    },
    429589: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return F;
        },
      }),
        n(47120);
      var l = n(735250),
        a = n(470079),
        i = n(442837),
        r = n(481060),
        s = n(278323),
        o = n(224706),
        u = n(287734),
        c = n(2052),
        d = n(906732),
        h = n(895924),
        m = n(835473),
        x = n(592745),
        E = n(592125),
        _ = n(757266),
        p = n(650774),
        v = n(430824),
        T = n(283595),
        f = n(496675),
        g = n(699516),
        I = n(944486),
        C = n(594174),
        N = n(979651),
        P = n(181106),
        Z = n(417363),
        S = n(358085),
        M = n(804739),
        y = n(566620),
        A = n(317381),
        O = n(638880),
        R = n(255621),
        j = n(452634),
        w = n(527805),
        L = n(620662),
        b = n(275920),
        U = n(915863),
        D = n(701488),
        B = n(981631),
        k = n(689938);
      function F(e) {
        var t, n;
        let {
            activity: F,
            embeddedActivity: G,
            user: H,
            onAction: V,
            isEmbedded: Y = !1,
            ButtonComponent: z = U.Z,
            ...W
          } = e,
          { analyticsLocations: J } = (0, d.ZP)(),
          [q, K] = a.useState(!1),
          X = (0, i.e7)([C.default], () => C.default.getCurrentUser()),
          $ = H.id === (null == X ? void 0 : X.id),
          Q =
            null !== (t = null == G ? void 0 : G.applicationId) && void 0 !== t
              ? t
              : null == F
                ? void 0
                : F.application_id,
          ee = (0, j.Z)({
            channelId: null == G ? void 0 : G.channelId,
            userId: H.id,
            activity: F,
          }),
          et = (0, i.e7)(
            [T.Z, x.Z, Z.Z, _.Z],
            () =>
              Y ||
              (null != Q &&
                (0, M.t)({
                  LibraryApplicationStore: T.Z,
                  LaunchableGameStore: x.Z,
                  DispatchApplicationStore: Z.Z,
                  ConnectedAppsStore: _.Z,
                  applicationId: Q,
                })),
          ),
          en = (0, i.e7)([A.ZP], () =>
            Array.from(A.ZP.getSelfEmbeddedActivities().values()).some((e) => {
              let { applicationId: t, channelId: n } = e;
              return (
                (t === (null == F ? void 0 : F.application_id) ||
                  t === (null == G ? void 0 : G.applicationId)) &&
                n === ee
              );
            }),
          ),
          el = (0, i.e7)(
            [P.Z],
            () =>
              null != F &&
              null != F.application_id &&
              P.Z.getState(F.application_id, B.mFx.JOIN) === B.OcF.LOADING,
          ),
          [ea] = (0, m.Z)(
            (null == G ? void 0 : G.applicationId) != null
              ? [null == G ? void 0 : G.applicationId]
              : (null == F ? void 0 : F.application_id) != null
                ? [null == F ? void 0 : F.application_id]
                : [],
          ),
          ei = (0, w.s5)({
            userId: H.id,
            activity: F,
            channelId: ee,
            application: ea,
          }),
          er = (0, i.e7)([E.Z, v.Z, p.Z, g.Z, I.Z, N.Z, f.Z], () =>
            null != G
              ? ei === w.Fw.CAN_JOIN
              : null != F
                ? (0, R.Z)({
                    user: H,
                    activity: F,
                    application: ea,
                    channelId: ee,
                    currentUser: X,
                    isEmbedded: Y,
                    ChannelStore: E.Z,
                    GuildStore: v.Z,
                    GuildMemberCountStore: p.Z,
                    RelationshipStore: g.Z,
                    SelectedChannelStore: I.Z,
                    VoiceStateStore: N.Z,
                    PermissionStore: f.Z,
                  })
                : void 0,
          ),
          es = (0, i.e7)([A.ZP], () =>
            Array.from(A.ZP.getSelfEmbeddedActivities().values()).some(
              (e) =>
                e.applicationId === (null == G ? void 0 : G.applicationId) &&
                e.channelId === (null == G ? void 0 : G.channelId),
            ),
          ),
          eo = (0, c.O)(),
          eu = !S.isPlatformEmbedded;
        if (!((0, L.Z)(F, B.xjy.JOIN) || Y) || null == Q) return null;
        let ec = !$ || (Y && !es),
          ed = ec && (eu || et) && !q && !en && (!Y || er),
          eh = null;
        ec
          ? !eu &&
            !et &&
            null != F &&
            (eh = k.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({
              name: F.name,
            }))
          : (eh = k.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF);
        let em =
            null !== (n = null == G ? void 0 : G.launchId) && void 0 !== n
              ? n
              : null == F
                ? void 0
                : F.session_id,
          ex = async (e, t) => {
            var n, l;
            if (null == em || null == Q) return;
            let a = (0, L.Z)(t, B.xjy.EMBEDDED);
            await o.Z.join({
              userId: e.id,
              sessionId: em,
              applicationId: Q,
              channelId: I.Z.getVoiceChannelId(),
              messageId: null,
              intent: D.Ws.PLAY,
              embedded: a,
              partyId:
                null != t
                  ? null == t
                    ? void 0
                    : null === (n = t.party) || void 0 === n
                      ? void 0
                      : n.id
                  : "",
              locationObject: eo.location,
              analyticsLocations: J,
            }),
              !a &&
                (0, b.Z)({
                  type: B.q5t.JOIN,
                  userId: e.id,
                  applicationId: Q,
                  partyId:
                    null != t
                      ? null == t
                        ? void 0
                        : null === (l = t.party) || void 0 === l
                          ? void 0
                          : l.id
                      : "",
                  locationObject: eo.location,
                  analyticsLocations: J,
                });
          },
          eE = async () => {
            let e = !1;
            if (Y) {
              if (!er || null == ee || null == Q) return;
              e = await (0, O.Z)({
                applicationId: Q,
                activityChannelId: ee,
                locationObject: eo.location,
                analyticsLocations: J,
                commandOrigin: h.bB.VOICE_UI,
              });
            }
            if (!e) {
              let e;
              er && (null == V || V(), ex(H, F)),
                K(!0),
                null != ee && null != Q
                  ? (e = await y.pu({
                      channelId: ee,
                      applicationId: Q,
                      userId: H.id,
                      location: B.Sbl.PROFILE_POPOUT,
                    }))
                  : null != F &&
                    (e = await s.Z.sendActivityInviteUser({
                      type: B.mFx.JOIN_REQUEST,
                      userId: H.id,
                      activity: F,
                      location: B.Sbl.PROFILE_POPOUT,
                    })),
                null != e && u.default.selectPrivateChannel(e.id);
            }
          },
          e_ = er
            ? k.Z.Messages.JOIN
            : k.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
        return (
          Y && (e_ = k.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY),
          es && (e_ = k.Z.Messages.EMBEDDED_ACTIVITIES_JOINED),
          (0, l.jsx)(
            r.Tooltip,
            {
              text: eh,
              children: (e) => {
                let { onMouseEnter: t, onMouseLeave: n } = e;
                return (0, l.jsx)(z, {
                  onClick: eE,
                  onMouseEnter: t,
                  onMouseLeave: n,
                  disabled: !ed,
                  submitting: el,
                  fullWidth: !0,
                  ...W,
                  children: e_,
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
          return o;
        },
      });
      var l = n(735250);
      n(470079);
      var a = n(655922),
        i = n(420660),
        r = n(915863),
        s = n(689938);
      function o(e) {
        let { activity: t, onAction: n, ButtonComponent: o = r.Z, ...u } = e;
        return (0, i.Z)(t)
          ? (0, l.jsx)(
              o,
              {
                onClick: () => {
                  null == n || n();
                  let e = (0, a.Z)(t);
                  return window.open(null != e ? e : void 0);
                },
                fullWidth: !0,
                ...u,
                children: s.Z.Messages.WATCH,
              },
              "play-activity",
            )
          : null;
      }
    },
    220779: function (e, t, n) {
      n.d(t, {
        A7: function () {
          return g;
        },
        dE: function () {
          return C;
        },
      }),
        n(47120);
      var l = n(735250),
        a = n(470079),
        i = n(120356),
        r = n.n(i),
        s = n(481060),
        o = n(410030),
        u = n(541716),
        c = n(752305),
        d = n(893718),
        h = n(318766),
        m = n(931651),
        x = n(131704),
        E = n(142550),
        _ = n(981631),
        p = n(689938),
        v = n(763072);
      let T = (0, x.kt)({ id: "1", type: _.d4z.DM }),
        f = a.forwardRef(function (e, t) {
          let {
              placeholder: n,
              headerText: a,
              onEnter: i,
              showPopout: u,
              children: c,
              body: d,
              hide: h,
            } = e,
            m = (0, o.ZP)();
          return (0, l.jsx)(s.Popout, {
            align: "right",
            position: "bottom",
            shouldShow: u,
            disablePointerEvents: !1,
            renderPopout: () =>
              (0, l.jsx)(s.ThemeProvider, {
                theme: m,
                children: (e) =>
                  (0, l.jsx)("div", {
                    className: r()([v.reply, e]),
                    ref: t,
                    children: (0, l.jsx)(s.FocusLock, {
                      containerRef: t,
                      children: (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)(s.Text, {
                            variant: "text-xs/bold",
                            className: v.replyHeader,
                            children: null != a ? a : p.Z.Messages.CHAT,
                          }),
                          d,
                          (0, l.jsx)(g, {
                            onEnter: (e) => {
                              i(e), h();
                            },
                            placeholder: null != n ? n : p.Z.Messages.CHAT,
                          }),
                        ],
                      }),
                    }),
                  }),
              }),
            children: () => c,
          });
        });
      function g(e) {
        let {
            placeholder: t,
            onEnter: n,
            setEditorRef: i,
            showEmojiButton: s = !1,
            renderAttachButton: o,
            autoFocus: h = !0,
            onFocus: m,
            channel: x,
            className: _,
          } = e,
          [p, f] = a.useState(""),
          [g, I] = a.useState((0, c.JM)("")),
          C = () => {
            f(""), I((0, c.JM)(""));
          },
          N = u.I.ATOMIC_REACTOR_REPLY_INPUT,
          P = a.useRef(null);
        return (0, l.jsx)(d.Z, {
          ref: P,
          placeholder: t,
          editorClassName: _,
          className: r()(v.replyInput, _),
          showRemainingCharsAfterCount: -1,
          allowNewLines: !1,
          maxCharacterCount: E.z,
          channel: null != x ? x : T,
          onChange: (e, t, n) => {
            f(t), I(n);
          },
          type: s ? { ...N, emojis: { button: !0 } } : N,
          textValue: p,
          richValue: g,
          onSubmit: (e) => {
            let { value: t } = e;
            return t.length > E.z
              ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
              : (n(t),
                C(),
                Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
          },
          setEditorRef: i,
          focused: h,
          onFocus: m,
          disableThemedBackground: !0,
          emojiPickerCloseOnModalOuterClick: !0,
          disabled: !1,
          autoCompletePosition: (() => {
            if (null == P.current) return "top";
            let e = P.current.getBoundingClientRect(),
              t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
          })(),
          renderAttachButton: o,
        });
      }
      let I = (e, t) => {
          a.useEffect(() => {
            let n = (t) => {
                "Escape" === t.key && e();
              },
              l = (n) => {
                var l;
                null != n.target &&
                  !(null == t
                    ? void 0
                    : null === (l = t.current) || void 0 === l
                      ? void 0
                      : l.contains(null == n ? void 0 : n.target)) &&
                  e();
              };
            return (
              document.addEventListener("keydown", n),
              document.addEventListener("mousedown", l),
              () => {
                document.removeEventListener("keydown", n),
                  document.removeEventListener("mousedown", l);
              }
            );
          }, [e, t]);
        },
        C = (e) => {
          let { onSelectEmoji: t, onClick: n } = e,
            i = (0, o.ZP)(),
            [r, u] = a.useState(!1),
            c = a.useRef(null);
          return (
            I(() => u(!1), c),
            (0, l.jsx)(s.Popout, {
              align: "right",
              position: "top",
              shouldShow: r,
              disablePointerEvents: !1,
              renderPopout: () =>
                (0, l.jsx)(s.ThemeProvider, {
                  theme: i,
                  children: (e) =>
                    (0, l.jsx)("div", {
                      className: e,
                      ref: c,
                      children: (0, l.jsx)(m.$, {
                        messageId: _.lds,
                        channel: T,
                        closePopout: () => {
                          u(!1);
                        },
                        onSelectEmoji: (e, n, l) => {
                          null != e && (t(e, n, l), u(!1));
                        },
                      }),
                    }),
                }),
              children: () =>
                (0, l.jsx)(s.Tooltip, {
                  text: p.Z.Messages.ADD_REACTION,
                  children: (e) =>
                    (0, l.jsx)("div", {
                      ...e,
                      className: v.reaction,
                      children: (0, l.jsx)(h.Z, {
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
            showReply: i = !0,
            popoutProps: o = {},
          } = e,
          { replyHeaderText: u, replyPlaceholder: c, popoutBody: d } = o,
          [h, m] = a.useState(!1),
          x = a.useRef(null);
        return (
          I(() => m(!1), x),
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("div", {
              className: v.reactions,
              children: [
                n &&
                  (0, l.jsx)(C, {
                    onSelectEmoji: (e) => {
                      null != e &&
                        t({
                          interactionType: E.L.ReactSubmit,
                          emoji: e,
                          reply: null,
                        });
                    },
                    onClick: () => {
                      t({
                        interactionType: E.L.ReactBegin,
                        emoji: null,
                        reply: null,
                      }),
                        m(!1);
                    },
                  }),
                i &&
                  (0, l.jsx)(f, {
                    hide: () => m(!1),
                    ref: x,
                    headerText: u,
                    placeholder: c,
                    showPopout: h,
                    body: d,
                    onEnter: (e) => {
                      t({
                        interactionType: E.L.ReplySubmit,
                        emoji: null,
                        reply: e,
                      });
                    },
                    children: (0, l.jsx)(s.Tooltip, {
                      text: p.Z.Messages.MESSAGE_ACTION_REPLY,
                      children: (e) =>
                        (0, l.jsx)("button", {
                          ...e,
                          className: r()(v.reaction, v.emojiButton),
                          onClick: () => {
                            t({
                              interactionType: E.L.ReplyBegin,
                              emoji: null,
                              reply: null,
                            }),
                              m(!0);
                          },
                          children: (0, l.jsx)(s.ArrowAngleLeftUpIcon, {}),
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
      var l, a;
      n.d(t, {
        L: function () {
          return l;
        },
        z: function () {
          return i;
        },
      });
      let i = 200;
      ((a = l || (l = {})).ReactBegin = "React Begin"),
        (a.ReplyBegin = "Reply Begin"),
        (a.ReactSubmit = "React Submit"),
        (a.ReplySubmit = "Reply Submit"),
        (a.ReactSend = "React Send"),
        (a.ReplySend = "Reply Send");
    },
    55e3: function (e, t, n) {
      var l, a;
      n.d(t, {
        Cv: function () {
          return E;
        },
        En: function () {
          return i;
        },
        Nv: function () {
          return c;
        },
        SG: function () {
          return u;
        },
        W3: function () {
          return l;
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
          return s;
        },
        sB: function () {
          return o;
        },
        sp: function () {
          return m;
        },
        vS: function () {
          return h;
        },
      });
      let i = 348,
        r = 88;
      ((a = l || (l = {})).AssetImage = "AssetImage"),
        (a.ApplicationImage = "ApplicationImage"),
        (a.Platform = "Platform"),
        (a.StreamPreview = "StreamPreview"),
        (a.HangStatus = "HangStatus");
      let s = 12,
        o = 12,
        u = 24,
        c = 16,
        d = 24,
        h = 64,
        m = 335,
        x = 310,
        E =
          "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm6.81 7c-.54 0-1 .26-1.23.61A1 1 0 0 1 8.92 8.5 3.49 3.49 0 0 1 11.82 7c1.81 0 3.43 1.38 3.43 3.25 0 1.45-.98 2.61-2.27 3.06a1 1 0 0 1-1.96.37l-.19-1a1 1 0 0 1 .98-1.18c.87 0 1.44-.63 1.44-1.25S12.68 9 11.81 9ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z";
    },
    201133: function (e, t, n) {
      n.d(t, {
        B: function () {
          return E;
        },
        a: function () {
          return x;
        },
      }),
        n(411104);
      var l = n(570140),
        a = n(493683),
        i = n(957730),
        r = n(222677),
        s = n(995774),
        o = n(314897),
        u = n(592125),
        c = n(703558),
        d = n(62817);
      let h = (e) => {
          let t = d.Z.getFiles(e)[0];
          return null == d.Z.getMessageForFile(t.id)
            ? Promise.reject()
            : new Promise((e, n) => {
                let a = (i) => {
                  i.file.id === t.id &&
                    (l.Z.unsubscribe("UPLOAD_COMPLETE", a),
                    l.Z.unsubscribe("UPLOAD_FAIL", a),
                    "UPLOAD_COMPLETE" === i.type
                      ? e(i.messageRecord)
                      : n(Error("Upload failed")));
                };
                l.Z.subscribe("UPLOAD_COMPLETE", a),
                  l.Z.subscribe("UPLOAD_FAIL", a);
              });
        },
        m = async function (e, t) {
          var l;
          let a =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0,
            s = arguments.length > 4 ? arguments[4] : void 0,
            d = u.Z.getChannel(t);
          if (((l = o.default.getToken()), i.ZP.parse(d, ""), a));
          else {
            if (null == u.Z.getChannel(t))
              throw Error(
                "AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(
                  t,
                ),
              );
            {
              let l = n(966390).Z;
              (e.description = r),
                await l.uploadFiles({
                  channelId: t,
                  uploads: [e],
                  draftType: c.d.ChannelMessage,
                  parsedMessage: s,
                });
            }
          }
        },
        x = async (e) => {
          let {
              file: t,
              reaction: n,
              user: l,
              altText: i,
              requireConfirmation: o = !1,
            } = e,
            u = await a.Z.openPrivateChannel(l.id, !1, !1);
          m(t, u, o, i);
          let c = await h(u);
          if (null != c) {
            let e = (0, s.g1)(n);
            await (0, r.rU)(u, c.id, e);
          }
        },
        E = (e) => {
          let {
              file: t,
              reply: n,
              channel: l,
              altText: a,
              requireConfirmation: r = !1,
            } = e,
            s = i.ZP.parse(l, n);
          return m(t, l.id, r, a, s);
        };
    },
    4646: function (e, t, n) {
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
      n.d(t, {
        k2: function () {
          return i;
        },
      }),
        n(47120);
      let a = new (n(259443).Y)("AssetMap");
      async function i(e) {
        let t = new r(),
          n = Object.entries(e).map((e) => {
            let [n, l] = e;
            return t
              .loadRemoteImage(n, l)
              .catch((e) => a.warn("Failed to load canvas asset", e, n, l));
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
          l(this, "assets", {}), l(this, "fontManager", void 0);
        }
      }
    },
    129508: function (e, t, n) {
      n(47120);
      var l = n(512722),
        a = n.n(l),
        i = n(921608),
        r = n(693824);
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
      t.Z = class e {
        getCanvas() {
          return this.canvas;
        }
        setColor(e) {
          this.color = e;
        }
        setFont(e) {
          var t, n, l, a, i;
          (this.font.style =
            null !== (t = e.style) && void 0 !== t ? t : this.font.style),
            (this.font.size =
              null !== (n = e.size) && void 0 !== n ? n : this.font.size),
            (this.font.weight =
              null !== (l = e.weight) && void 0 !== l ? l : this.font.weight),
            (this.font.family =
              null !== (a = e.family) && void 0 !== a ? a : this.font.family),
            (this.font.truncate =
              null !== (i = e.truncate) && void 0 !== i
                ? i
                : this.font.truncate);
        }
        getLoadedImage(e) {
          a()(
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
        drawRoundedImageWithFallbacks(e, t, n, l, a) {
          for (let i of e) {
            let e = this.drawRoundedImage(i, t, n, l, a);
            if (e !== r.vP.Failure) return e;
          }
          return r.vP.Failure;
        }
        constructor(e, t) {
          s(this, "color", "black"),
            s(this, "font", {
              style: "normal",
              weight: 300,
              size: i.n,
              family: ["serif"],
              truncate: r.GX.None,
            }),
            s(this, "assetMap", void 0),
            s(this, "canvas", void 0),
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
      var l = n(512722),
        a = n.n(l);
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
      class r {
        setExporter(e) {
          this.exporter = e;
        }
        export(e) {
          a()(
            null != this.exporter,
            "DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.",
          );
          let t = this.canvas.getCanvasForExport();
          return (
            a()(null != t, "DiscordCanvas: Couldn't get a canvas for export."),
            this.exporter.exportCanvas(t, e)
          );
        }
        constructor(e, t) {
          i(this, "canvas", void 0),
            i(this, "exporter", void 0),
            (this.canvas = e),
            (this.exporter = t);
        }
      }
    },
    97008: function (e, t, n) {
      n(411104);
      var l = n(141795),
        a = n(476326),
        i = n(956664),
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
            fileType: s = "png",
            quality: o = 1,
            fileName: u,
          } = t;
          if (n === r.kH.Base64) return this.toDataUrl(e, s, o);
          if (n === r.kH.Blob) {
            let t = this.toDataUrl(e, s, o);
            return (0, i.kD)(t);
          }
          if (n === r.kH.File) {
            let t = this.toDataUrl(e, s, o);
            return await (0, i.Bo)(t, u, "image/png");
          }
          if (n === r.kH.CloudUpload) {
            let { channelId: n } = t,
              r = this.toDataUrl(e, s, o),
              c = await (0, i.Bo)(r, u, "image/png");
            return new l.n({ file: c, platform: a.ow.WEB, isThumbnail: !1 }, n);
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
      var l = n(512722),
        a = n.n(l),
        i = n(129508),
        r = n(921608),
        s = n(693824);
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
      class u extends i.Z {
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
          let { w: n, h: l } = e;
          null != this.context && null != t
            ? ((this.canvas.width = n * t),
              (this.canvas.height = l * t),
              this.context.scale(t, t))
            : ((this.canvas.width = n), (this.canvas.height = l));
        }
        clearRect(e) {
          if (null == this.context) return;
          let { x: t, y: n, w: l, h: a } = e;
          this.context.clearRect(t, n, l, a);
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
          let { x: l, y: a, w: i, h: r } = e;
          n && this.setContextProperties(),
            t
              ? this.context.fillRect(l, a, i, r)
              : this.context.strokeRect(l, a, i, r);
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
            l =
              !(arguments.length > 3) ||
              void 0 === arguments[3] ||
              arguments[3];
          if (null == this.context) return;
          let { x: a, y: i, w: r, h: s } = e;
          l && this.setContextProperties(),
            this.context.beginPath(),
            this.context.roundRect(a, i, r, s, t),
            n ? this.context.fill() : this.context.stroke();
        }
        drawText(e, t, n) {
          var l, i;
          if (null == this.context) return;
          this.setContextProperties();
          let o =
              null !== (l = t.w) && void 0 !== l ? l : this.canvas.width - t.x,
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
              for (; u.width + r.F > o; )
                (t = t.slice(0, -4)),
                  (u = this.context.measureText(t)),
                  (c = !0);
              return c && (t += "..."), t;
            };
          if (
            (this.font.truncate === s.GX.None && h(e, t),
            this.font.truncate === s.GX.Truncate && h((e = m(e)), t),
            this.font.truncate === s.GX.Wrap)
          ) {
            let n = e.split(" "),
              l = 1 / 0,
              r = "",
              s = 0;
            for (
              null != t.h &&
              ((l = t.h / d),
              a()(
                l > 0,
                "DiscordCavas: boundingBox.h of "
                  .concat(t.h, " results in 0 visible lines with font size of ")
                  .concat(d),
              ));
              n.length > 0;

            )
              if ((u = this.context.measureText(r + " " + n[0])).width > o) {
                let e = !1;
                if (
                  (s + 1 >= l && n.length > 0 && (e = !0),
                  "" !== r
                    ? (h(e ? m(r + "...") : r, { x: t.x, y: t.y + d * s }),
                      (r = ""))
                    : h(m(null !== (i = n.shift()) && void 0 !== i ? i : ""), {
                        x: t.x,
                        y: t.y + d * s,
                      }),
                  e)
                )
                  break;
                s += 1;
              } else
                (r += " ".concat(n.shift())),
                  0 === n.length && h(r, { x: t.x, y: t.y + d * s });
          }
          return {
            x: t.x,
            y: t.y,
            w: u.width,
            h: u.actualBoundingBoxAscent + u.actualBoundingBoxDescent,
          };
        }
        drawFormattedMessage(e, t, n) {
          this.font.truncate === s.GX.Wrap &&
            console.warn(
              "DiscordCavas: `drawFormattedMessage` doesn't currently support wrapping formatted text. The results of this draw likely won't match your expectations.",
            );
          let l = this.font.weight,
            a = (e, t, n) => {
              let a;
              if ("strong" === e.type) this.setFont({ weight: 700 });
              return (
                Array.isArray(e.content)
                  ? (a = i(e.content, t, n))
                  : (a = this.drawText(e.content, t, n)),
                this.setFont({ weight: l }),
                a
              );
            },
            i = (e, t, n) => {
              let l = 0;
              return (
                e.forEach((e) => {
                  let { x: i, y: r, w: s, h: o } = t,
                    u = null != s ? s - l : void 0,
                    c = a(e, { x: i + l, y: r, w: u, h: o }, n);
                  null != c && (l += c.w);
                }),
                { x: t.x + l, y: t.y, w: l, h: this.font.size }
              );
            };
          Array.isArray(e) ? i(e, t, n) : a(e, t, n);
        }
        drawImage(e, t, n) {
          let l =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : { fillMode: s.JU.Stretch };
          a()(
            null != this.assetMap,
            "DiscordCavas: `drawImage` requires an AssetMap to be initialized.",
          );
          let { fillMode: i } = l;
          if (null == this.context) return s.vP.Failure;
          let r = this.assetMap.get(e);
          if (null == r) return s.vP.ImageNotLoaded;
          if (null != n) {
            if (i === s.JU.Contain) {
              let l;
              let a = { w: r.width, h: r.height },
                i = +(a.w / a.h).toFixed(1);
              if (+(n.w / n.h).toFixed(1) > i) {
                let e = n.h * i;
                l = { x: t.x + (n.w - e) / 2, y: t.y, w: e, h: n.h };
              } else {
                let e = n.w / i;
                l = { x: t.x, y: t.y + (n.h - e) / 2, w: n.w, h: e };
              }
              return (
                this.drawCroppedImage(
                  e,
                  { x: 0, y: 0, w: a.w, h: a.h },
                  { x: l.x, y: l.y, w: l.w, h: l.h },
                ),
                s.vP.Success
              );
            }
            if (i === s.JU.Cover) {
              var o, u, c, d;
              let a;
              let i = { w: r.width, h: r.height },
                h = +(i.w / i.h).toFixed(1),
                m = +(n.w / n.h).toFixed(1);
              if (m > h) {
                let e = i.w / m;
                a = {
                  x: 0,
                  y:
                    (i.h - e) *
                    (null !==
                      (u =
                        null == l
                          ? void 0
                          : null === (o = l.focus) || void 0 === o
                            ? void 0
                            : o.y) && void 0 !== u
                      ? u
                      : 0.5),
                  w: r.width,
                  h: e,
                };
              } else {
                let e = i.h * m;
                a = {
                  x:
                    (r.width - e) *
                    (null !==
                      (d =
                        null == l
                          ? void 0
                          : null === (c = l.focus) || void 0 === c
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
                this.drawCroppedImage(e, a, { x: t.x, y: t.y, w: n.w, h: n.h }),
                s.vP.Success
              );
            }
            this.context.drawImage(r, t.x, t.y, n.w, n.h);
          } else this.context.drawImage(r, t.x, t.y);
          return s.vP.Success;
        }
        drawRoundedImage(e, t, n, l, a) {
          if (null == this.context) return s.vP.Failure;
          let { x: i, y: r } = t,
            { w: o, h: u } = n;
          this.context.save();
          let c = new Path2D();
          c.roundRect(i, r, o, u, l), this.context.clip(c);
          let d = this.drawImage(e, t, n, a);
          return this.restoreContext(), d;
        }
        drawCroppedImage(e, t, n) {
          var l;
          if (null == this.context) return s.vP.Failure;
          let a =
            null === (l = this.assetMap) || void 0 === l ? void 0 : l.get(e);
          if (null == a) return s.vP.ImageNotLoaded;
          let { x: i, y: r, w: o, h: u } = t,
            { x: c, y: d, w: h, h: m } = n;
          return (
            this.context.drawImage(a, i, r, o, u, c, d, h, m), s.vP.Success
          );
        }
        drawPath(e, t) {
          let n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            l =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 1;
          if (null == this.context) return s.vP.Failure;
          this.setContextProperties(), this.context.save();
          let a = new Path2D(e);
          return (
            this.context.translate(t.x, t.y),
            this.context.scale(l, l),
            n ? this.context.fill(a, "evenodd") : this.context.stroke(a),
            this.restoreContext(),
            s.vP.Success
          );
        }
        setGradientFillStyle(e, t, n) {
          if (null == this.context) return;
          let l = this.context.createLinearGradient(t.x, t.y, n.x, n.y);
          for (let { color: t, stop: n } of e) l.addColorStop(n, t);
          this.context.fillStyle = l;
        }
        drawGradientRect(e, t, n, l) {
          return null == this.context
            ? s.vP.Failure
            : (this.setGradientFillStyle(e, t, n),
              this.drawRect(l, !0, !1),
              s.vP.Success);
        }
        drawRoundedGradientRect(e, t, n, l, a) {
          return null == this.context
            ? s.vP.Failure
            : (this.setGradientFillStyle(e, t, n),
              this.drawRoundedRect(l, a, !0, !1),
              s.vP.Success);
        }
        clip(e, t) {
          if (null == this.context) return;
          this.context.save();
          let { x: n, y: l } = e,
            a = new Path2D(t);
          this.context.translate(n, l), this.context.clip(a);
        }
        clipRect(e, t) {
          if (null == this.context) return;
          this.context.save();
          let { x: n, y: l, w: a, h: i } = e;
          if (t) {
            let e = new Path2D();
            e.moveTo(0, 0),
              e.lineTo(this.canvas.width, 0),
              e.lineTo(this.canvas.width, this.canvas.height),
              e.lineTo(0, this.canvas.height),
              e.lineTo(0, 0),
              e.closePath(),
              e.rect(n, l, a, i),
              this.context.clip(e, "evenodd");
          } else {
            let e = new Path2D();
            e.rect(n, l, a, i), this.context.clip(e);
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
          let { x: l, y: a, w: i, h: r } = e;
          if (n) {
            let e = new Path2D();
            e.moveTo(0, 0),
              e.lineTo(this.canvas.width, 0),
              e.lineTo(this.canvas.width, this.canvas.height),
              e.lineTo(0, this.canvas.height),
              e.lineTo(0, 0),
              e.closePath(),
              e.roundRect(l, a, i, r, t),
              this.context.clip(e, "evenodd");
          } else {
            let e = new Path2D();
            e.roundRect(l, a, i, r, t), this.context.clip(e);
          }
        }
        constructor(e, t) {
          super(e, t),
            o(this, "canvas", void 0),
            o(this, "context", void 0),
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
          return l;
        },
        n: function () {
          return a;
        },
      });
      let l = 12,
        a = 24;
    },
    693824: function (e, t, n) {
      var l, a, i, r, s, o, u, c;
      n.d(t, {
        GX: function () {
          return l;
        },
        JU: function () {
          return a;
        },
        kH: function () {
          return i;
        },
        vP: function () {
          return r;
        },
      }),
        ((s = l || (l = {}))[(s.None = 0)] = "None"),
        (s[(s.Truncate = 1)] = "Truncate"),
        (s[(s.Wrap = 2)] = "Wrap"),
        ((o = a || (a = {}))[(o.Stretch = 0)] = "Stretch"),
        (o[(o.Contain = 1)] = "Contain"),
        (o[(o.Cover = 2)] = "Cover"),
        ((u = i || (i = {}))[(u.Base64 = 0)] = "Base64"),
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
          return i;
        },
      }),
        n(411104);
      var l = n(4646),
        a = n(665672);
      async function i(e) {
        let { assetsToLoad: t, drawImage: i, exportConfigs: r } = e,
          s = await (0, l.k2)(t);
        await s.loadFonts();
        {
          let e = n(503082).Z,
            t = n(97008).Z,
            l = document.createElement("canvas"),
            o = new e(l, s),
            u = new t(),
            c = new a.Z(o, u);
          i(c.canvas);
          let d = await c.export(r);
          return l.remove(), d;
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
      var l = n(570140);
      n(100527), n(592125);
      var a = n(944486),
        i = n(914010);
      n(594174);
      var r = n(626135),
        s = n(71585);
      n(295955);
      var o = n(981631);
      let u = () => {
        l.Z.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" }),
          r.default.track(o.rMx.MEMBERLIST_CONTENT_FEED_HIDDEN, {
            channel_id: a.Z.getChannelId(),
            guild_id: i.Z.getGuildId(),
            hidden: s.Z.hidden,
          });
      };
      function c() {
        l.Z.dispatch({ type: "GAME_PROFILE_OPEN" });
      }
      function d() {
        l.Z.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
      }
    },
    295955: function () {},
    327220: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(47120);
      var l = n(470079),
        a = n(442837),
        i = n(592125),
        r = n(9156);
      function s(e) {
        let t = (0, a.e7)([i.Z], () => i.Z.getPrivateChannelsVersion()),
          n = (0, a.e7)([i.Z], () => i.Z.getMutableDMsByUserIds(), [t]),
          s = (0, a.e7)([r.ZP], () => r.ZP.getMutedChannels(null)),
          o = l.useMemo(() => {
            let e = new Set();
            for (let t in n) {
              let l = n[t];
              null != l && s.has(l) && e.add(t);
            }
            return e;
          }, [n, s]);
        return l.useMemo(
          () =>
            null == e
              ? void 0
              : e.filter((e) => {
                  for (let t of e.participants) if (o.has(t)) return !1;
                  return !0;
                }),
          [e, o],
        );
      }
    },
    959580: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var l = n(442837),
        a = n(719247);
      let i = [];
      function r(e) {
        return (0, l.Wu)(
          [a.Z],
          () => (null == e ? i : e.filter(a.Z.canRenderContent)),
          [e],
        );
      }
    },
    69259: function (e, t, n) {
      n.d(t, {
        L: function () {
          return o;
        },
        e: function () {
          return s;
        },
      }),
        n(47120);
      var l = n(626135),
        a = n(162461),
        i = n(206583),
        r = n(981631);
      let s = function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
            i < t;
            i++
          )
            n[i - 1] = arguments[i];
          let { trackingEnabled: r } = (0, a.nP)(
            "trackSampledContentEntryAnalytics:".concat(e),
          );
          return r ? l.default.track(e, ...n) : Promise.resolve();
        },
        o = (e, t) => {
          s(r.rMx.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
            request_id: t.requestId,
            item_id: t.entry.id,
            surface_type: i.Kd.GUILD_MEMBER_LIST,
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
          return v;
        },
      }),
        n(653041),
        n(627494),
        n(757143),
        n(512722);
      var l = n(913527),
        a = n.n(l),
        i = n(705512);
      n(812206);
      var r = n(55e3);
      n(220082);
      var s = n(693824),
        o = n(690725);
      n(706454), n(594174);
      var u = n(70956);
      n(5192);
      var c = n(709054),
        d = n(561308);
      n(206295);
      var h = n(737583),
        m = n(169040),
        x = n(689938);
      let E = (e, t) => ({
          AvatarImage1: e[0],
          ...(null != e[1] && { AvatarImage2: e[1] }),
          ...(null != e[2] && { AvatarImage3: e[2] }),
          ...(null != t && { ApplicationImage: t }),
        }),
        _ = (e, t) => {
          let n = [{ iconPath: m.NM, text: t }],
            l = c.default.extractTimestamp(e.extra.application_id);
          if (
            (7 >= a()().diff(a()(l), "days") &&
              n.push({
                iconPath: m.As,
                text: x.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE,
              }),
            (0, d.Ol)(e) &&
              n.push({
                iconPath: m.fO,
                text: x.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
              }),
            (0, d.q_)(e))
          ) {
            let t = (0, d.vU)(e);
            n.push({
              iconPath: m.t1,
              text: x.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
                days: t,
              }),
            });
          }
          (0, d.ig)(e) === i.o.GLOBAL &&
            n.push({
              iconPath: m.Op,
              text: x.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
            });
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
              let e =
                x.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format(
                  { hours: Math.round(t / u.Z.Seconds.HOUR) },
                );
              return [
                {
                  iconPath: m.eF,
                  text: ""
                    .concat(
                      x.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME,
                      " — ",
                    )
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
              colors: l,
              description: a,
              entry: i,
              numAvatars: o,
            } = t,
            u = l.map((e, t) => ({ color: e, stop: t }));
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
            ) === s.vP.Failure &&
              e.drawPath(r.Cv, { x: m.sB, y: m.sB }, !0, 2 + 2 / 3);
          (0, h.l)({
            canvas: e,
            avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(
              0,
              o,
            ),
            position: { x: m.Iq, y: m.sB },
            avatarImageSize: m.$S,
          }),
            e.setColor("white"),
            e.setFont({
              size: 16,
              family: m.I8,
              weight: m.Ue,
              truncate: s.GX.Wrap,
            }),
            e.drawText(a, { x: m.Iq, y: 64, h: 32, w: m.kC }, !0);
          let c = _(i, n);
          (0, h.J)({
            canvas: e,
            badges: c,
            startPosition: m.Iq,
            maxWidth: m.kC,
          });
        },
        v = async (e) => {
          let {
              applicationImageSrc: t,
              entry: n,
              avatarSrcs: l,
              description: a,
              timestamp: i,
              colors: r,
              channelId: u,
            } = e,
            c = n.extra.activity_name,
            d = E(l, t);
          return await (0, o.f)({
            assetsToLoad: d,
            drawImage: (e) =>
              p(e, {
                timestamp: i,
                colors: r,
                description: a,
                entry: n,
                numAvatars: l.length,
              }),
            exportConfigs: {
              format: s.kH.CloudUpload,
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
          return v;
        },
      }),
        n(653041),
        n(512722);
      var l = n(913527),
        a = n.n(l),
        i = n(705512);
      n(812206);
      var r = n(55e3);
      n(220082);
      var s = n(693824),
        o = n(690725);
      n(706454), n(594174);
      var u = n(70956),
        c = n(709054),
        d = n(561308);
      n(206295);
      var h = n(737583);
      n(438226);
      var m = n(169040),
        x = n(689938);
      let E = (e, t) => ({
          AvatarImage1: e[0],
          ...(null != e[1] && { AvatarImage2: e[1] }),
          ...(null != e[2] && { AvatarImage3: e[2] }),
          ...(null != t && { ApplicationImage: t }),
        }),
        _ = (e, t) => {
          let n = [{ iconPath: m.NM, text: t }],
            l = c.default.extractTimestamp(e.extra.application_id);
          if (
            (7 >= a()().diff(a()(l), "days") &&
              n.push({
                iconPath: m.As,
                text: x.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE,
              }),
            (0, d.Ol)(e) &&
              n.push({
                iconPath: m.fO,
                text: x.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
              }),
            (0, d.q_)(e))
          ) {
            let t = (0, d.vU)(e);
            n.push({
              iconPath: m.t1,
              text: x.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
                days: t,
              }),
            });
          }
          (0, d.ig)(e) === i.o.GLOBAL &&
            n.push({
              iconPath: m.Op,
              text: x.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING,
            });
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
              let e =
                x.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format(
                  { hours: Math.round(t / u.Z.Seconds.HOUR) },
                );
              return [
                {
                  iconPath: m.eF,
                  text: ""
                    .concat(
                      x.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME,
                      " — ",
                    )
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
              colors: l,
              description: a,
              entry: i,
              numAvatars: o,
            } = t,
            u = l.map((e, t) => ({ color: e, stop: t }));
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
            ) === s.vP.Failure &&
              e.drawPath(r.Cv, { x: m.sB, y: m.sB }, !0, 2 + 2 / 3);
          (0, h.l)({
            canvas: e,
            avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(
              0,
              o,
            ),
            position: { x: m.Iq, y: m.sB },
            avatarImageSize: m.$S,
          }),
            e.setColor("white"),
            e.setFont({
              size: 16,
              family: m.I8,
              weight: m.Ue,
              truncate: s.GX.Wrap,
            }),
            e.drawText(a, { x: m.Iq, y: 64, h: 32, w: m.kC }, !0);
          let c = _(i, n);
          (0, h.J)({
            canvas: e,
            badges: c,
            startPosition: m.Iq,
            maxWidth: m.kC,
          });
        },
        v = async (e) => {
          let {
              applicationImageSrc: t,
              entry: n,
              avatarSrcs: l,
              description: a,
              timestamp: i,
              colors: r,
              channelId: u,
            } = e,
            c = n.extra.game_name,
            d = E(l, t);
          return await (0, o.f)({
            assetsToLoad: d,
            drawImage: (e) =>
              p(e, {
                timestamp: i,
                colors: r,
                description: a,
                entry: n,
                numAvatars: l.length,
              }),
            exportConfigs: {
              format: s.kH.CloudUpload,
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
          return v;
        },
        As: function () {
          return m;
        },
        I8: function () {
          return P;
        },
        Iq: function () {
          return T;
        },
        Md: function () {
          return o;
        },
        NC: function () {
          return N;
        },
        NM: function () {
          return l;
        },
        Op: function () {
          return h;
        },
        PW: function () {
          return C;
        },
        Pu: function () {
          return p;
        },
        Ue: function () {
          return Z;
        },
        Z: function () {
          return c;
        },
        bg: function () {
          return E;
        },
        eF: function () {
          return u;
        },
        f0: function () {
          return g;
        },
        fO: function () {
          return a;
        },
        fj: function () {
          return s;
        },
        i6: function () {
          return i;
        },
        kC: function () {
          return f;
        },
        m2: function () {
          return I;
        },
        mb: function () {
          return r;
        },
        nx: function () {
          return x;
        },
        sB: function () {
          return _;
        },
        t1: function () {
          return d;
        },
      });
      let l =
          "M20.97 4.06c0 .18.08.35.24.43.55.28.9.82 1.04 1.42.3 1.24.75 3.7.75 7.09v4.91a3.09 3.09 0 0 1-5.85 1.38l-1.76-3.51a1.09 1.09 0 0 0-1.23-.55c-.57.13-1.36.27-2.16.27s-1.6-.14-2.16-.27c-.49-.11-1 .1-1.23.55l-1.76 3.51A3.09 3.09 0 0 1 1 17.91V13c0-3.38.46-5.85.75-7.1.15-.6.49-1.13 1.04-1.4a.47.47 0 0 0 .24-.44c0-.7.48-1.32 1.2-1.47l2.93-.62c.5-.1 1 .06 1.36.4.35.34.78.71 1.28.68a42.4 42.4 0 0 1 4.4 0c.5.03.93-.34 1.28-.69.35-.33.86-.5 1.36-.39l2.94.62c.7.15 1.19.78 1.19 1.47ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
        a =
          "M11.33 13.68c.41.27.93.27 1.34 0 1.73-1.1 6.2-4.3 6.2-8.02 0-2.02-1.6-3.66-3.59-3.66-1.46 0-2.42.58-3.28 1.44A4.33 4.33 0 0 0 8.72 2a3.63 3.63 0 0 0-3.6 3.66c0 3.72 4.48 6.92 6.2 8.02Z M3.93 13.84a.94.94 0 0 0-.93.94 5.6 5.6 0 0 0 6.48 5.6l1.02-.18v1.27c0 .85.67 1.53 1.5 1.53s1.5-.68 1.5-1.53V20.2l1.02.17A5.6 5.6 0 0 0 21 14.78a.94.94 0 0 0-.93-.94h-2.24a5.6 5.6 0 0 0-4.89 2.9L12 18.41l-.94-1.69a5.6 5.6 0 0 0-4.89-2.9H3.93Z",
        i =
          "M 4 1 C 2.3431 1 1 2.3431 1 4 V 13 C 1 14.6569 2.3431 16 4 16 H 20 C 21.6568 16 23 14.6569 23 13 V 4 C 23 2.3431 21.6568 1 20 1 H 4 Z M 6 18 C 5.4477 18 5 18.4477 5 19 C 5 19.5523 5.4477 20 6 20 H 18 C 18.5523 20 19 19.5523 19 19 C 19 18.4477 18.5523 18 18 18 H 6 Z",
        r =
          "M18.03 2.8a11 11 0 1 0 2.52 2.28c-.28-.34-.8-.13-.8.31v7.37c0 1-.4 1.95-1.1 2.65l-.78.78a.6.6 0 0 0-.14.53c.08.53-.08 1.1-.5 1.52l-1 1a1.75 1.75 0 1 1-2.47-2.48l1-1c.42-.41.99-.57 1.52-.49.2.03.4 0 .53-.14l.78-.78c.42-.42.66-1 .66-1.6V3.22a.49.49 0 0 0-.22-.41ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7-2a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 1 0 0-2 8 8 0 0 0-8 8 1 1 0 0 0 1 1Z",
        s =
          "M3.11 8H6v10.82c0 .86.37 1.68 1 2.27.46.43 1.02.71 1.63.84A1 1 0 0 0 9 22h10a4 4 0 0 0 4-4v-1a2 2 0 0 0-2-2h-1V5a3 3 0 0 0-3-3H4.67c-.87 0-1.7.32-2.34.9-.63.6-1 1.42-1 2.28 0 .71.3 1.35.52 1.75a5.35 5.35 0 0 0 .48.7l.01.01h.01L3.11 7l-.76.65a1 1 0 0 0 .76.35Zm1.56-4c-.38 0-.72.14-.97.37-.24.23-.37.52-.37.81a1.69 1.69 0 0 0 .3.82H6v-.83c0-.29-.13-.58-.37-.8C5.4 4.14 5.04 4 4.67 4Zm5 13a3.58 3.58 0 0 1 0 3H19a2 2 0 0 0 2-2v-1H9.66ZM3.86 6.35ZM11 8a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Zm-1 5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z",
        o =
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
        E = 120,
        _ = 12,
        p = 96,
        v = 32,
        T = 120,
        f = 260,
        g = 88,
        I = 99,
        C = 12,
        N = 18,
        P = ["gg sans", "sans-serif"],
        Z = 500;
    },
    737583: function (e, t, n) {
      n.d(t, {
        J: function () {
          return i;
        },
        l: function () {
          return r;
        },
      }),
        n(47120);
      var l = n(693824),
        a = n(169040);
      function i(e) {
        let t,
          { canvas: n, badges: i, startPosition: r, maxWidth: s } = e;
        for (let { iconPath: e, text: o } of (n.setFont({
          size: 12,
          family: a.I8,
          weight: a.Ue,
          truncate: l.GX.None,
        }),
        i)) {
          let l = null != t ? t.w + t.x + a.PW : r,
            i = null != t ? t.w + t.x + a.PW + a.NC : r + a.NC;
          n.drawPath(e, { x: l, y: a.f0 }, !0, 0.6),
            (t = n.drawText(o, { x: i, y: a.m2, w: s }, !0));
        }
      }
      function r(e) {
        let {
          canvas: t,
          avatarSrcs: n,
          position: { x: a, y: i },
          avatarImageSize: r,
        } = e;
        for (let e = 0; e < n.length; e++)
          e < n.length - 1 &&
            t.clipRoundedRect(
              { x: a + (e + 1) * (r - 8) - 2, y: i - 1, w: r + 2, h: r + 2 },
              r / 2,
              !0,
            ),
            t.drawRoundedImage(
              n[e],
              { x: a + e * (r - 8), y: i },
              { w: r, h: r },
              50,
              { fillMode: l.JU.Cover },
            ),
            t.restoreContext();
      }
    },
    438226: function (e, t, n) {
      n.d(t, {
        HV: function () {
          return o;
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
      var l = n(5192),
        a = n(561308),
        i = n(689938);
      let r = (e, t) =>
          i.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: t.username,
            activity: e.extra.game_name,
          }),
        s = (e) => {
          let t = (0, a.kr)(e);
          return (0, a.Ol)(e)
            ? t
              ? i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_NEW_GAME
              : i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_NEW_GAME
            : t
              ? i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_GAME
              : i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME;
        },
        o = (e, t, n) => {
          let a = s(e),
            i = l.ZP.getName(
              null == t ? void 0 : t.guild_id,
              null == t ? void 0 : t.id,
              n,
            ),
            r = e.extra.game_name;
          return a
            .plainFormat({ gameName: r, userName: i })
            .replaceAll("*", "");
        },
        u = (e) => {
          let { entry: t, channel: n, users: r, countOthers: s } = e;
          return (
            (0, a.kr)(t)
              ? i.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYING
              : i.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED
          )
            .plainFormat({
              gameName: t.extra.game_name,
              user1: l.ZP.getName(
                null == n ? void 0 : n.guild_id,
                null == n ? void 0 : n.id,
                r[0],
              ),
              user2: l.ZP.getName(
                null == n ? void 0 : n.guild_id,
                null == n ? void 0 : n.id,
                r[1],
              ),
              countOthers: s,
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
      var l = n(884439),
        a = n(55e3),
        i = n(693824),
        r = n(690725),
        s = n(561308),
        o = n(737583),
        u = n(169040),
        c = n(689938);
      let d = (e) => {
          let { timestamp: t } = e;
          return [{ iconPath: u.mb, text: t }];
        },
        h = (e) => {
          var t;
          let n =
            null === (t = (0, s.PJ)(e, l.N.AGGREGATE_COUNT)) || void 0 === t
              ? void 0
              : t.count;
          return null == n
            ? []
            : [
                {
                  iconPath: u.eF,
                  text: c.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format(
                    { count: n },
                  ),
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
              mediaImageSrc: l,
              artist: s,
              description: c,
              colors: d,
              badges: h,
            } = e,
            x = m({
              avatarSrc: t.getAvatarURL(n.guild_id, 128),
              mediaImageSrc: l,
            }),
            E = s.replaceAll(/[^a-zA-Z0-9 ]/g, "").replaceAll(" ", "-");
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
                    { fillMode: i.JU.Contain },
                  ) === i.vP.Failure &&
                    e.drawPath(a.Cv, { x: u.sB, y: u.sB }, !0, 2 + 2 / 3);
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
                      truncate: i.GX.Wrap,
                    }),
                    e.drawText(t, { x: u.Iq, y: 64, h: 32, w: u.kC }, !0);
                })(e, c),
                (0, o.J)({
                  canvas: e,
                  badges: h,
                  startPosition: u.Iq,
                  maxWidth: u.kC,
                });
            },
            exportConfigs: {
              format: i.kH.CloudUpload,
              quality: 1,
              fileName: "user-reacting-to-".concat(E, ".png").toLowerCase(),
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
      var l = n(55e3),
        a = n(693824),
        i = n(690725),
        r = n(737583),
        s = n(169040);
      let o = (e, t, n) => ({
          AvatarImage: e,
          ...(null != t && { MediaImage: t }),
          ...(null != n && { ApplicationImage: n }),
        }),
        u = (e, t) => {
          let n = [{ iconPath: s.i6, text: e }];
          return null != t && n.push({ iconPath: s.fj, text: t }), n;
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
              channelId: E,
            } = e,
            _ = n.extra.media_title,
            p = o(c, t);
          return await (0, i.f)({
            assetsToLoad: p,
            drawImage: (e) => {
              let t = x.map((e, t) => ({ color: e, stop: t }));
              e.setSize({ w: s.nx, h: s.bg }, 4),
                e.drawRoundedGradientRect(
                  t,
                  { x: 0, y: s.bg },
                  { x: s.nx, y: 0 },
                  { x: 0, y: 0, h: s.bg, w: s.nx },
                  8,
                ),
                e.setColor("white");
              let n = e.drawRoundedImage(
                "MediaImage",
                { x: s.sB, y: s.sB },
                { w: s.Pu, h: s.Pu },
                8,
                { fillMode: a.JU.Contain },
              );
              n === a.vP.Failure &&
                (n = e.drawRoundedImage(
                  "ApplicationImage",
                  { x: s.sB, y: s.sB },
                  { w: s.Pu, h: s.Pu },
                  8,
                )),
                n === a.vP.Failure &&
                  e.drawPath(l.Cv, { x: s.sB, y: s.sB }, !0, 2 + 2 / 3),
                e.drawRoundedImage(
                  "AvatarImage",
                  { x: s.Iq, y: s.sB },
                  { w: s.$S, h: s.$S },
                  50,
                ),
                e.setFont({
                  size: 16,
                  family: s.I8,
                  weight: s.Ue,
                  truncate: a.GX.Wrap,
                }),
                e.drawText(d, { x: s.Iq, y: 64, h: 32, w: s.kC }, !0);
              let i = u(h, m);
              (0, r.J)({
                canvas: e,
                badges: i,
                startPosition: s.Iq,
                maxWidth: s.kC,
              });
            },
            exportConfigs: {
              format: a.kH.CloudUpload,
              quality: 1,
              fileName: "user-reacting-to-".concat(_, ".png").toLowerCase(),
              fileType: "png",
              channelId: E,
            },
          });
        };
    },
    370370: function (e, t, n) {
      var l = n(735250),
        a = n(470079),
        i = n(379357),
        r = n(442550),
        s = n(297781),
        o = n(443487),
        u = n(182022);
      let c = [s.OV, s.EE, s.Af, s.U9, s.n8, s.pQ];
      t.Z = a.memo((e) => {
        let { entry: t, channel: n, selected: a, hovered: d } = e,
          { largeImage: h } = (0, i.rv)({ entry: t });
        return (0, l.jsxs)(o.Zb, {
          selected: a,
          children: [
            (0, l.jsxs)(o.e$, {
              children: [
                (0, l.jsx)(o.F9, {
                  entry: t,
                  channelId: n.id,
                  guildId: n.guild_id,
                }),
                (0, l.jsx)(o.ll, { children: t.extra.activity_name }),
                (0, l.jsx)(s.Gk, {
                  location: s.Gt.CARD,
                  children: c.map((e, n) =>
                    (0, l.jsx)(e, { entry: t, hovered: d }, n),
                  ),
                }),
              ],
            }),
            (0, l.jsx)(r.f, {
              alt: null == h ? void 0 : h.alt,
              src: null == h ? void 0 : h.src,
              size: 48,
              className: u.thumbnail,
            }),
          ],
        });
      });
    },
    107062: function (e, t, n) {
      n(627494), n(757143);
      var l = n(735250),
        a = n(470079),
        i = n(442837),
        r = n(481060),
        s = n(620662),
        o = n(841784),
        u = n(429589),
        c = n(499254),
        d = n(827498),
        h = n(812236),
        m = n(541716),
        x = n(706454),
        E = n(823379),
        _ = n(5192),
        p = n(379357),
        v = n(192918),
        T = n(561308),
        f = n(907152),
        g = n(206295),
        I = n(297781),
        C = n(591853),
        N = n(797342),
        P = n(981631),
        Z = n(689938);
      let S = (e, t) =>
          Z.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: t.username,
            activity: e.extra.activity_name,
          }),
        M = (e, t, n) => {
          let l = Z.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME,
            a = _.ZP.getName(t.guild_id, t.id, n),
            i = e.extra.activity_name;
          return l
            .plainFormat({ gameName: i, userName: a })
            .replaceAll("*", "");
        },
        y = (e) => {
          let { entry: t, channel: n, users: l, countOthers: a } = e;
          return Z.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED.plainFormat(
            {
              gameName: t.extra.activity_name,
              user1: _.ZP.getName(
                null == n ? void 0 : n.guild_id,
                null == n ? void 0 : n.id,
                l[0],
              ),
              user2: _.ZP.getName(
                null == n ? void 0 : n.guild_id,
                null == n ? void 0 : n.id,
                l[1],
              ),
              countOthers: a,
            },
          ).replaceAll("*", "");
        },
        A = (e) => {
          let {
              channel: t,
              entry: n,
              onReaction: c,
              onVoiceChannelPreview: d,
              appLoading: h,
              handleViewActivityClick: m,
            } = e,
            { largeImage: _ } = (0, p.rv)({ entry: n }),
            {
              user: A,
              details: O,
              activity: R,
              embeddedActivity: j,
            } = (0, N.n)(n),
            { primaryColor: w, secondaryColor: L } = (0, g.Z)(
              null == _ ? void 0 : _.src,
            ),
            b = (0, i.e7)([x.default], () => x.default.locale),
            {
              displayParticipants: U,
              participant1: D,
              participant2: B,
              numOtherParticipants: k,
            } = (0, v.Z)(n, 3),
            F = a.useCallback(
              (e) => {
                if (
                  (null == _ ? void 0 : _.src) == null ||
                  null == t ||
                  null == A
                )
                  return;
                let l =
                  k > 0
                    ? y({ entry: n, channel: t, users: [D, B], countOthers: k })
                    : M(n, t, A);
                return (0, f.C4)({
                  entry: n,
                  applicationImageSrc: null == _ ? void 0 : _.src,
                  avatarSrcs: U.map((e) => e.getAvatarURL(t.guild_id, 128)),
                  description: l,
                  timestamp: (0, T.yh)(n, b),
                  colors: [w, L],
                  channelId: e,
                });
              },
              [null == _ ? void 0 : _.src, t, U, n, b, k, D, B, w, L, A],
            );
          if (null == A) return null;
          let G = (0, l.jsx)(I.PZ, { location: I.Gt.POPOUT, entry: n }),
            H = (0, l.jsx)(C.wG, {
              channel: t,
              userDescription: (0, T.kr)(n)
                ? Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2
                : Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
              title: n.extra.activity_name,
              subtitle: O,
              badges: G,
              entry: n,
              onClickTitle: m,
              onClickSubtitle: m,
              onClickThumbnail: m,
            }),
            V = (0, s.Z)(R, P.xjy.JOIN) || (0, o.Z)(R),
            Y = V
              ? (0, l.jsx)(u.Z, {
                  isEmbedded: (0, o.Z)(R),
                  embeddedActivity: j,
                  activity: R,
                  user: A,
                  ButtonComponent: (e) =>
                    (0, l.jsx)(C.Ll, { IconComponent: r.DoorEnterIcon, ...e }),
                })
              : null,
            z = (0, l.jsx)(C.Ll, {
              onClick: m,
              IconComponent: r.AppsIcon,
              disabled: h,
              children: h
                ? Z.Z.Messages.DEFAULT_INPUT_PLACEHOLDER
                : Z.Z.Messages.CONTENT_INVENTORY_VIEW_ACTIVITY,
            }),
            W = [V ? Y : z].filter(E.lm);
          return (0, l.jsxs)(C.yR, {
            children: [
              H,
              (0, l.jsx)(C.St, {
                children: (0, l.jsx)(C.WT, {
                  onReaction: c,
                  onVoiceChannelPreview: d,
                  user: A,
                  channel: t,
                  generateReactionImage: F,
                  reactionImageAltText: S(n, A),
                  entry: n,
                  buttons: W,
                }),
              }),
            ],
          });
        },
        O = (e) => (0, l.jsx)(A, { ...e }),
        R = (e) => {
          let { channel: t, entry: n } = e;
          a.useEffect(() => {
            (0, h.ZP)(t.id, n.extra.application_id);
          }, [n.extra.application_id, t]);
          let { loading: i } = (0, h.SY)(t, n.extra.application_id);
          return (0, l.jsx)(A, {
            ...e,
            appLoading: i,
            handleViewActivityClick: () => {
              if (!i)
                c._(d._b.TEXT, m.I.NORMAL, {
                  applicationId: n.extra.application_id,
                });
            },
          });
        };
      t.ZP = function (e) {
        let { channel: t, ...n } = e;
        return null == t
          ? (0, l.jsx)(O, { ...n })
          : (0, l.jsx)(R, { channel: t, ...n });
      };
    },
    178762: function (e, t, n) {
      n.d(t, {
        J: function () {
          return w;
        },
        YN: function () {
          return A;
        },
        iZ: function () {
          return O;
        },
      }),
        n(47120);
      var l = n(735250),
        a = n(470079),
        i = n(392711),
        r = n.n(i),
        s = n(91192),
        o = n(876215),
        u = n(442837),
        c = n(481060),
        d = n(239091),
        h = n(607070),
        m = n(439170),
        x = n(594174),
        E = n(69259),
        _ = n(370370),
        p = n(107062),
        v = n(91140),
        T = n(227172),
        f = n(551228),
        g = n(678869),
        I = n(278399),
        C = n(886217),
        N = n(555672),
        P = n(644548),
        Z = n(335326),
        S = n(268010),
        M = n(797342),
        y = n(206583);
      let A = 72;
      function O(e) {
        return (null == e ? void 0 : e.type) === m.so.CONTENT_INVENTORY ? A : 0;
      }
      let R = (e) => {
          let { entry: t, ...n } = e;
          switch (t.content_type) {
            case o.s.PLAYED_GAME:
              return (0, l.jsx)(v.Z, { ...n, entry: t });
            case o.s.WATCHED_MEDIA:
              return (0, l.jsx)(Z.Z, { ...n, entry: t });
            case o.s.TOP_GAME:
              return (0, l.jsx)(N.ZP, { ...n, entry: t });
            case o.s.TOP_ARTIST:
              return (0, l.jsx)(I.ZP, { ...n, entry: t });
            case o.s.LISTENED_SESSION:
              return (0, l.jsx)(f.ZP, { ...n, entry: t });
            case o.s.LAUNCHED_ACTIVITY:
              return (0, l.jsx)(_.Z, { ...n, entry: t });
            default:
              return null;
          }
        },
        j = (e) => {
          let { requestId: t, closePopout: n, ...a } = e;
          return (0, l.jsx)(w, {
            onReaction: (e, l) => {
              (0, E.L)(e, {
                entry: a.entry,
                channelId: a.channel.id,
                guildId: a.channel.guild_id,
                requestId: t,
                destinationChannelId: l.id,
                destinationGuildId: l.guild_id,
              }),
                n();
            },
            closePopout: n,
            onVoiceChannelPreview: (e, n) => {
              (0, E.L)(y.xP.VOICE_CHANNEL_PREVIEWED, {
                entry: a.entry,
                channelId: a.channel.id,
                guildId: a.channel.guild_id,
                requestId: t,
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
                richPresenceName: n,
              });
            },
            ...a,
          });
        },
        w = (e) => {
          let { entry: t, ...n } = e;
          switch (t.content_type) {
            case o.s.PLAYED_GAME:
              return (0, l.jsx)(T.Z, { ...n, entry: t });
            case o.s.WATCHED_MEDIA:
              return (0, l.jsx)(S.Z, { ...n, entry: t });
            case o.s.TOP_GAME:
              return (0, l.jsx)(P.Z, { ...n, entry: t });
            case o.s.TOP_ARTIST:
              return (0, l.jsx)(C.Z, { ...n, entry: t });
            case o.s.LISTENED_SESSION:
              return (0, l.jsx)(g.Z, { ...n, entry: t });
            case o.s.LAUNCHED_ACTIVITY:
              return (0, l.jsx)(p.ZP, { ...n, entry: t });
            default:
              return null;
          }
        };
      t.ZP = a.memo((e) => {
        var t;
        let { index: i, ...o } = e,
          [m, _] = a.useState("default"),
          p = (0, s.JA)("".concat(i)),
          v =
            null === (t = x.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.isStaff(),
          { isRich: T, appName: f } = (0, M.n)(o.entry),
          g = {
            entry: o.entry,
            channelId: o.channel.id,
            guildId: o.channel.guild_id,
            requestId: o.requestId,
            richPresenceName: T ? f : void 0,
          },
          I = a.useRef(!1),
          [C, N] = a.useState(!1),
          [P, Z] = a.useState(!1),
          S = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled);
        a.useEffect(() => {
          C && S && Z(!0);
        }, [C, S]);
        let A = a.useCallback(
            (e) => {
              if (!!v)
                (0, d.jW)(e, async () => {
                  let { default: e } = await n.e("153").then(n.bind(n, 330150));
                  return () =>
                    (0, l.jsx)(e, { entry: o.entry, requestId: o.requestId });
                });
            },
            [o, v],
          ),
          O = a.useCallback(() => {
            _(String(Date.now()));
          }, []),
          w = a.useCallback(
            r().throttle(
              (e) => {
                (0, E.L)(y.xP.CARD_POPOUT_OPEN, e);
              },
              2e3,
              { leading: !0, trailing: !1 },
            ),
            [],
          ),
          L = () => {
            (I.current = !1),
              setTimeout(() => {
                !I.current && (N(!1), Z(S));
              }, 100);
          };
        return (0, l.jsx)("div", {
          onMouseEnter: () => {
            (I.current = !0),
              setTimeout(() => {
                I.current && N(!0), w(g);
              }, 100);
          },
          onMouseLeave: L,
          children: (0, l.jsx)(c.Popout, {
            renderPopout: (e) => {
              let { closePopout: t } = e;
              return (0, l.jsx)(j, {
                closePopout: t,
                updatePopoutPosition: O,
                ...o,
              });
            },
            position: "left",
            shouldShow: C,
            positionKey: m,
            onRequestOpen: () => w(g),
            onRequestClose: () => {
              P && L();
            },
            spacing: 8,
            children: (e, t) => {
              let { isShown: n } = t;
              return (0, l.jsx)(c.Clickable, {
                ...e,
                ...p,
                focusProps: {
                  offset: { top: 4, bottom: 4, left: 4, right: 4 },
                },
                onClick: () => {
                  !C && N(!0);
                },
                onContextMenu: A,
                children: (0, l.jsx)(R, {
                  ...o,
                  selected: n,
                  hovered: I.current,
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
          return O;
        },
      });
      var l = n(735250),
        a = n(470079),
        i = n(758713),
        r = n(442837),
        s = n(481060),
        o = n(620662),
        u = n(841784),
        c = n(420660),
        d = n(429589),
        h = n(757182),
        m = n(706454),
        x = n(374129),
        E = n(639351),
        _ = n(823379),
        p = n(379357),
        v = n(192918),
        T = n(22211),
        f = n(561308),
        g = n(919394),
        I = n(438226),
        C = n(206295),
        N = n(91140),
        P = n(297781),
        Z = n(591853),
        S = n(410441),
        M = n(797342),
        y = n(981631),
        A = n(689938);
      let O = {
        [i.z.DESKTOP]: null,
        [i.z.LINUX]: null,
        [i.z.MACOS]: null,
        [i.z.NINTENDO]: null,
        [i.z.IOS]: null,
        [i.z.ANDROID]: null,
        [i.z.XBOX]: E.Z,
        [i.z.PLAYSTATION]: x.Z,
      };
      t.Z = (e) => {
        let {
            channel: t,
            entry: n,
            disableGameProfileLinks: i,
            onReaction: x,
            onVoiceChannelPreview: E,
            onUserPopoutClosed: R,
          } = e,
          { largeImage: j } = (0, p.rv)({ entry: n }),
          { user: w, details: L, appName: b, activity: U } = (0, M.n)(n),
          { primaryColor: D, secondaryColor: B } = (0, C.Z)(
            null == j ? void 0 : j.src,
          ),
          k = (0, r.e7)([m.default], () => m.default.locale),
          { streamPreviewUrl: F, stream: G } = (0, T.Z)(n),
          {
            displayParticipants: H,
            participant1: V,
            participant2: Y,
            numOtherParticipants: z,
          } = (0, v.Z)(n, 3),
          W = a.useCallback(
            (e) => {
              if (
                (null == j ? void 0 : j.src) == null ||
                null == t ||
                null == w
              )
                return;
              let l =
                z > 0
                  ? (0, I.VY)({
                      entry: n,
                      channel: t,
                      users: [V, Y],
                      countOthers: z,
                    })
                  : (0, I.HV)(n, t, w);
              return (0, g.SO)({
                entry: n,
                applicationImageSrc: null == j ? void 0 : j.src,
                avatarSrcs: H.map((e) => e.getAvatarURL(t.guild_id, 128)),
                description: l,
                timestamp: (0, f.yh)(n, k),
                colors: [D, B],
                channelId: e,
              });
            },
            [null == j ? void 0 : j.src, t, H, n, k, z, V, Y, D, B, w],
          );
        if (null == w) return null;
        let J = null != n.extra.platform ? O[n.extra.platform] : null,
          q = (0, l.jsx)(P.Gk, {
            location: null == F ? P.Gt.POPOUT : P.Gt.STREAMING_POPOUT,
            children: N.W.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
          }),
          K =
            null == F
              ? (0, l.jsx)(Z.wG, {
                  channel: t,
                  headerIcons:
                    null == J
                      ? null
                      : (0, l.jsx)(S.Z, {
                          Icon: J,
                          "aria-label":
                            A.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
                        }),
                  userDescription: (0, f.kr)(n)
                    ? A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2
                    : A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                  title: b,
                  subtitle: L,
                  badges: q,
                  entry: n,
                  disableGameProfileLinks: i,
                  onUserPopoutClosed: R,
                })
              : (0, l.jsx)(Z.jL, {
                  channel: t,
                  streamPreviewSrc: F,
                  title: n.extra.game_name,
                  subtitle: L,
                  badges: q,
                  userDescription:
                    A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING_V2,
                  entry: n,
                  stream: G,
                  onUserPopoutClosed: R,
                }),
          X =
            (0, o.Z)(U, y.xjy.JOIN) || (0, u.Z)(U)
              ? (0, l.jsx)(d.Z, {
                  activity: U,
                  user: w,
                  ButtonComponent: (e) =>
                    (0, l.jsx)(Z.Ll, {
                      IconComponent: s.GameControllerIcon,
                      ...e,
                    }),
                })
              : null,
          $ = [
            X,
            (0, c.Z)(U)
              ? (0, l.jsx)(h.Z, {
                  activity: U,
                  ButtonComponent: (e) =>
                    (0, l.jsx)(Z.Ll, { IconComponent: s.EyeIcon, ...e }),
                })
              : null,
          ].filter(_.lm);
        return (0, l.jsxs)(Z.yR, {
          children: [
            K,
            (0, l.jsx)(Z.St, {
              children: (0, l.jsx)(Z.WT, {
                onReaction: x,
                onVoiceChannelPreview: E,
                user: w,
                channel: t,
                generateReactionImage: W,
                reactionImageAltText: (0, I.IS)(n, w),
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
          return R;
        },
      }),
        n(627494),
        n(757143),
        n(653041);
      var l = n(735250),
        a = n(470079),
        i = n(423875),
        r = n(442837),
        s = n(902704),
        o = n(481060),
        u = n(952164),
        c = n(768419),
        d = n(424678),
        h = n(239470),
        m = n(894344),
        x = n(314897),
        E = n(908841),
        _ = n(5192),
        p = n(379357),
        v = n(561308),
        T = n(256726),
        f = n(206295),
        g = n(551228),
        I = n(591853),
        C = n(371991),
        N = n(410441),
        P = n(981631),
        Z = n(616922),
        S = n(689938),
        M = n(346292),
        y = n(164384);
      let A = (e, t, n) => {
        let { artist: l, media: a } = e,
          i =
            S.Z.Messages
              .MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST,
          r = _.ZP.getName(t.guild_id, t.id, n);
        return i
          .plainFormat({ artist: l, userName: r, media: a })
          .replaceAll("*", "");
      };
      function O(e) {
        let { activity: t } = e,
          n = t.timestamps,
          i = (0, C.tS)(),
          { durationTimestamp: r, seekBarStyles: s } = a.useMemo(() => {
            var e;
            let { start: n, end: l } =
              null !== (e = t.timestamps) && void 0 !== e ? e : {};
            if (null == n || null == l) return {};
            let a = Math.min(l, i),
              r = l - n,
              s = Math.floor((Math.max(a - n, 0) / r) * 100);
            return {
              seekBarStyles: { width: "".concat(s, "%") },
              durationTimestamp: (0, v.T_)({ start: 0 }, r),
            };
          }, [t, i]);
        return null == s
          ? null
          : (0, l.jsxs)("div", {
              className: M.listeningTimeline,
              children: [
                (0, l.jsx)(C.x3, { entry: n }),
                (0, l.jsx)("div", {
                  className: M.seekBarContainer,
                  children: (0, l.jsx)("div", {
                    className: M.seekBarFill,
                    style: s,
                  }),
                }),
                (0, l.jsx)(o.Text, {
                  className: M.timestamp,
                  variant: "text-xs/normal",
                  tabularNumbers: !0,
                  color: void 0,
                  children: r,
                }),
              ],
            });
      }
      function R(e) {
        var t, n, _;
        let C,
          M,
          R,
          {
            channel: j,
            entry: w,
            closePopout: L,
            onReaction: b,
            onVoiceChannelPreview: U,
          } = e,
          { largeImage: D } = (0, p.rv)({ entry: w }),
          {
            activity: B,
            currentEntry: k,
            artist: F,
            title: G,
            user: H,
          } = (0, g.pi)(w),
          { primaryColor: V, secondaryColor: Y } = (0, f.Z)(
            null == D ? void 0 : D.src,
          ),
          z = (0, r.e7)(
            [c.Z, x.default],
            () =>
              (null == B ? void 0 : B.type) === P.IIU.LISTENING && null != H
                ? (0, h.Z)(c.Z, x.default, H, B)
                : void 0,
            [B, H],
            s.Z,
          ),
          W = a.useCallback(() => {
            var e;
            if (null == j || null == H) return;
            let t =
                null === (e = B.timestamps) || void 0 === e ? void 0 : e.start,
              n = (0, v.T_)(null != t ? { start: t } : w, Date.now());
            return (0, T.CR)({
              user: H,
              channel: j,
              mediaImageSrc: null == D ? void 0 : D.src,
              artist: F,
              description: A({ artist: F, media: G }, j, H),
              colors: [V, Y],
              badges: (0, T.jE)({ timestamp: n }),
            });
          }, [B, F, j, w, null == D ? void 0 : D.src, V, Y, G, H]);
        if (null == B || null == k) return null;
        let J = F,
          q = [];
        if (k.media.provider === i.p.SPOTIFY) {
          (M = () => {
            (0, u.aG)(B);
          }),
            (R = () => {
              (0, u.Z5)(B, H.id);
            }),
            (C = () => {
              (0, u.aG)(B);
            });
          (J = (0, l.jsx)(d.Z, {
            artists: F,
            canOpen: null != B.sync_id,
            linkClassName: y.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
              (0, u.d$)(B, H.id, e);
            },
          })),
            (null == z ? void 0 : z.syncDisabled) === !1 &&
              q.push(
                (0, l.jsx)(
                  I.Ll,
                  {
                    onClick: () => {
                      (0, m.Z)(z, Z.kG.USER_ACTIVITY_SYNC), L();
                    },
                    IconComponent: o.UserPlayIcon,
                    children:
                      S.Z.Messages
                        .ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG,
                  },
                  "listen-along",
                ),
              );
        }
        let K = (0, l.jsx)(I.wG, {
          onClickThumbnail: R,
          channel: j,
          entry: w,
          headerIcons:
            k.media.provider === i.p.SPOTIFY
              ? (0, l.jsx)(N.Z, {
                  onClick: C,
                  "aria-label":
                    S.Z.Messages
                      .ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
                  Icon: E.Z,
                })
              : null,
          userDescription: (0, v.kr)(w)
            ? S.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING_V2
            : S.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
          title: G,
          onClickTitle: M,
          subtitle: J,
          badges: null,
          children:
            (null === (t = B.timestamps) || void 0 === t ? void 0 : t.start) !=
              null && (0, l.jsx)(O, { activity: B }),
        });
        return (0, l.jsxs)(I.yR, {
          children: [
            K,
            (0, l.jsx)(I.St, {
              children: (0, l.jsx)(I.WT, {
                onReaction: b,
                onVoiceChannelPreview: U,
                user: H,
                channel: j,
                generateReactionImage: W,
                reactionImageAltText:
                  ((n = F),
                  (_ = H),
                  S.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format(
                    { username: _.username, activity: n },
                  )),
                entry: w,
                buttons: q,
              }),
            }),
          ],
        });
      }
    },
    886217: function (e, t, n) {
      n(627494), n(757143);
      var l = n(735250),
        a = n(470079),
        i = n(317261),
        r = n(423875),
        s = n(442837),
        o = n(18323),
        u = n(594174),
        c = n(908841),
        d = n(823379),
        h = n(5192),
        m = n(561308),
        x = n(256726),
        E = n(206295),
        _ = n(278399),
        p = n(297781),
        v = n(591853),
        T = n(410441),
        f = n(616922),
        g = n(689938);
      let I = (e, t, n, l) => {
          let a = (function (e) {
              if (e === i._.WEEK)
                return g.Z.Messages
                  .MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_WEEK_POPOUT;
            })(l),
            r = h.ZP.getName(t.guild_id, t.id, n),
            s = e.extra.artist.name;
          return a.plainFormat({ artist: s, userName: r }).replaceAll("*", "");
        },
        C = (e, t) =>
          g.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_TOP_ARTIST.format({
            username: t.username,
            artist: e.extra.artist.name,
          });
      t.Z = (e) => {
        let {
            channel: t,
            entry: n,
            onReaction: i,
            onVoiceChannelPreview: h,
          } = e,
          { parent_title: N, provider: P, image_url: Z } = n.extra.media,
          S = n.extra.artist.name,
          M = (0, s.e7)([u.default], () => u.default.getUser(n.author_id)),
          { primaryColor: y, secondaryColor: A } = (0, E.Z)(Z),
          O = (0, m.Nq)(n),
          R = a.useCallback(() => {
            if (null == t || null == M || !(0, d.Hi)(O, _.y9)) return;
            let e = I(n, t, M, O);
            return (0, x.CR)({
              user: M,
              channel: t,
              mediaImageSrc: Z,
              artist: S,
              description: e,
              colors: [y, A],
              badges: (0, x.UU)(n),
            });
          }, [Z, S, t, n, y, O, A, M]);
        if (null == M || !(0, d.Hi)(O, _.y9)) return null;
        let j = () => {
          let e = f.Hw.ALBUM,
            t = o.Z.isProtocolRegistered()
              ? f.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id)
              : f.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
          window.open(t);
        };
        return (0, l.jsxs)(v.yR, {
          children: [
            (0, l.jsx)(v.wG, {
              onClickTitle: j,
              onClickSubtitle: () => {
                let e = f.Hw.ARTIST,
                  t = o.Z.isProtocolRegistered()
                    ? f.C7.PLAYER_OPEN(e, n.extra.artist.external_id)
                    : f.C7.WEB_OPEN(e, n.extra.artist.external_id);
                window.open(t);
              },
              onClickThumbnail: j,
              channel: t,
              entry: n,
              headerIcons:
                P === r.p.SPOTIFY
                  ? (0, l.jsx)(T.Z, {
                      Icon: c.Z,
                      "aria-label": g.Z.Messages.SPOTIFY,
                    })
                  : null,
              userDescription:
                g.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
              title: N,
              subtitle: S,
              badges: (0, l.jsx)(p.Gk, {
                location: p.Gt.POPOUT,
                children: _.Ho.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
              }),
            }),
            (0, l.jsx)(v.St, {
              children: (0, l.jsx)(v.WT, {
                onReaction: i,
                onVoiceChannelPreview: h,
                user: M,
                channel: t,
                generateReactionImage: R,
                reactionImageAltText: C(n, M),
                entry: n,
              }),
            }),
          ],
        });
      };
    },
    644548: function (e, t, n) {
      n(627494), n(757143);
      var l = n(735250),
        a = n(470079),
        i = n(317261),
        r = n(70956),
        s = n(5192),
        o = n(379357),
        u = n(561308),
        c = n(919394),
        d = n(206295),
        h = n(227172),
        m = n(555672),
        x = n(297781),
        E = n(591853),
        _ = n(410441),
        p = n(797342),
        v = n(689938);
      let T = (e, t, n, l) => {
          let a = (function (e) {
              if (e === i._.WEEK)
                return v.Z.Messages
                  .MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT;
            })(l),
            r = s.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.game_name;
          return a
            .plainFormat({ gameName: o, userName: r })
            .replaceAll("*", "");
        },
        f = (e, t) =>
          v.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: t.username,
            activity: e.extra.game_name,
          });
      t.Z = (e) => {
        let {
            channel: t,
            entry: n,
            disableGameProfileLinks: i,
            onReaction: s,
            onVoiceChannelPreview: g,
          } = e,
          { largeImage: I } = (0, o.rv)({ entry: n }),
          { user: C, details: N, appName: P } = (0, p.n)(n),
          { primaryColor: Z, secondaryColor: S } = (0, d.Z)(
            null == I ? void 0 : I.src,
          ),
          M = (0, u.yA)(n),
          y = (0, u.Nq)(n),
          A = a.useCallback(
            (e) => {
              if (
                null != t &&
                null != C &&
                null != M &&
                null != y &&
                !!(0, m.qy)(y)
              )
                return (0, c.SO)({
                  entry: n,
                  applicationImageSrc: null == I ? void 0 : I.src,
                  avatarSrcs: [
                    C.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                  ],
                  description: T(n, t, C, y),
                  timestamp:
                    v.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format(
                      { hours: Math.round(M / r.Z.Seconds.HOUR) },
                    ),
                  colors: [Z, S],
                  channelId: e,
                });
            },
            [null == I ? void 0 : I.src, t, M, n, Z, y, S, C],
          );
        if (null == C || null == M || null == y || !(0, m.qy)(y)) return null;
        let O = null != n.extra.platform ? h.v[n.extra.platform] : null;
        return (0, l.jsxs)(E.yR, {
          children: [
            (0, l.jsx)(E.wG, {
              channel: t,
              headerIcons:
                null == O
                  ? null
                  : (0, l.jsx)(_.Z, {
                      Icon: O,
                      "aria-label":
                        v.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
                    }),
              entry: n,
              userDescription:
                v.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
              title: P,
              subtitle: N,
              badges: (0, l.jsx)(x.Gk, {
                location: x.Gt.POPOUT,
                children: m.Hs.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
              }),
              disableGameProfileLinks: i,
            }),
            (0, l.jsx)(E.St, {
              children: (0, l.jsx)(E.WT, {
                onReaction: s,
                onVoiceChannelPreview: g,
                user: C,
                channel: t,
                generateReactionImage: A,
                reactionImageAltText: f(n, C),
                entry: n,
              }),
            }),
          ],
        });
      };
    },
    268010: function (e, t, n) {
      n(627494), n(757143);
      var l = n(735250),
        a = n(470079),
        i = n(442837),
        r = n(481060),
        s = n(706454),
        o = n(594174),
        u = n(49012),
        c = n(5192),
        d = n(591759),
        h = n(379357),
        m = n(561308),
        x = n(644810),
        E = n(206295),
        _ = n(335326),
        p = n(297781),
        v = n(591853),
        T = n(410441),
        f = n(689938);
      let g = (e, t, n) => {
          let l = f.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
            a = c.ZP.getName(
              null == t ? void 0 : t.guild_id,
              null == t ? void 0 : t.id,
              n,
            ),
            i = e.extra.media_title;
          return l
            .plainFormat({
              mediaTitle: i,
              userName: a,
              episodeDescription: e.extra.media_subtitle,
            })
            .replaceAll("*", "");
        },
        I = (e, t) =>
          f.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
            username: t.username,
            activity: e.extra.media_title,
          });
      t.Z = (e) => {
        let {
            channel: t,
            entry: n,
            onReaction: c,
            onVoiceChannelPreview: C,
          } = e,
          N = (0, i.e7)([o.default], () => o.default.getUser(n.author_id)),
          { largeImage: P } = (0, h.rv)({ entry: n }),
          { primaryColor: Z, secondaryColor: S } = (0, E.Z)(
            null == P ? void 0 : P.src,
          ),
          M = (0, i.e7)([s.default], () => s.default.locale),
          y = (0, m.ap)(n.extra.media_assets_large_text),
          A = a.useCallback(
            (e) => {
              if (null != N && (null == P ? void 0 : P.src) != null)
                return (0, x.B)({
                  entry: n,
                  mediaImageSrc: null == P ? void 0 : P.src,
                  avatarSrc: N.getAvatarURL(
                    null == t ? void 0 : t.guild_id,
                    128,
                  ),
                  description: g(n, t, N),
                  timestamp: (0, m.yh)(n, M),
                  episodeDescription: y,
                  colors: [Z, S],
                  channelId: e,
                });
            },
            [t, n, y, M, null == P ? void 0 : P.src, Z, S, N],
          ),
          O = () => {
            if (null == n.extra.url) return;
            let e = d.Z.safeParseWithQuery(n.extra.url);
            if (null != e && null != e.protocol && null != e.hostname)
              (0, u.q)({ href: d.Z.format(e), trusted: !1 });
          };
        return null == N
          ? null
          : (0, l.jsxs)(v.yR, {
              children: [
                (0, l.jsx)(v.wG, {
                  channel: t,
                  entry: n,
                  userDescription: (0, m.kr)(n)
                    ? f.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING_V2
                    : f.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED_V2,
                  title: n.extra.media_title,
                  subtitle: n.extra.media_subtitle,
                  headerIcons: (0, l.jsx)(T.Z, {
                    Icon: r.CrunchyrollNeutralIcon,
                    "aria-label": f.Z.Messages.CRUNCHYROLL,
                  }),
                  badges: (0, l.jsx)(p.Gk, {
                    location: p.Gt.POPOUT,
                    children: _.t.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                  }),
                  onClickTitle: O,
                  onClickThumbnail: O,
                }),
                (0, l.jsx)(v.St, {
                  children: (0, l.jsx)(v.WT, {
                    onReaction: c,
                    onVoiceChannelPreview: C,
                    user: N,
                    channel: t,
                    generateReactionImage: A,
                    reactionImageAltText: I(n, N),
                    entry: n,
                  }),
                }),
              ],
            });
      };
    },
    111386: function (e, t, n) {
      n(47120);
      var l = n(735250),
        a = n(470079),
        i = n(704215),
        r = n(481060),
        s = n(243778),
        o = n(689938),
        u = n(576306),
        c = n(442937);
      let d = () =>
        (0, l.jsxs)("div", {
          className: u.coachtipInner,
          children: [
            (0, l.jsx)("img", {
              src: c,
              alt: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_IMAGE_ALT,
              className: u.coachtipAsset,
            }),
            (0, l.jsxs)("div", {
              className: u.coachtipTextContainer,
              children: [
                (0, l.jsx)(r.Heading, {
                  variant: "heading-lg/semibold",
                  children: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_HEADER,
                }),
                (0, l.jsx)(r.Text, {
                  variant: "text-md/normal",
                  color: "text-secondary",
                  children: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_TEXT,
                }),
              ],
            }),
          ],
        });
      t.Z = (e) => {
        let { children: t } = e,
          [n] = (0, s.US)([i.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
          [o, c] = a.useState(!1);
        return (a.useEffect(() => {
          setTimeout(() => {
            c(!0);
          }, 300);
        }),
        n !== i.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP)
          ? (0, l.jsx)(l.Fragment, { children: t })
          : (0, l.jsx)(r.Tooltip, {
              text: (0, l.jsx)(d, {}),
              tooltipClassName: u.coachtip,
              tooltipContentClassName: u.coachtipContent,
              position: "left",
              allowOverflow: !0,
              forceOpen: o,
              shouldShow: o,
              hideOnClick: !1,
              "aria-label": "test",
              children: (e) => (0, l.jsx)("div", { ...e, children: t }),
            });
      };
    },
    591853: function (e, t, n) {
      n.d(t, {
        Ll: function () {
          return ef;
        },
        St: function () {
          return em;
        },
        WT: function () {
          return ex;
        },
        jL: function () {
          return eT;
        },
        wG: function () {
          return ev;
        },
        yR: function () {
          return ec;
        },
      }),
        n(47120);
      var l = n(735250),
        a = n(470079),
        i = n(120356),
        r = n.n(i),
        s = n(512722),
        o = n.n(s);
      n(699581);
      var u = n(442837),
        c = n(704215),
        d = n(692547),
        h = n(481060),
        m = n(493683),
        x = n(475179),
        E = n(287734),
        _ = n(872810),
        p = n(607070),
        v = n(220779),
        T = n(201133),
        f = n(557135),
        g = n(194082),
        I = n(605236),
        C = n(543241),
        N = n(318374),
        P = n(258609),
        Z = n(810568),
        S = n(168524),
        M = n(382182),
        y = n(871118),
        A = n(565138),
        O = n(66999),
        R = n(790642),
        j = n(359110),
        w = n(12168),
        L = n(237583),
        b = n(592125),
        U = n(430824),
        D = n(496675),
        B = n(699516),
        k = n(9156),
        F = n(594174),
        G = n(979651),
        H = n(938475),
        V = n(626135),
        Y = n(768581),
        z = n(5192),
        W = n(379357),
        J = n(26033),
        q = n(91907),
        K = n(358696),
        X = n(656709),
        $ = n(192918),
        Q = n(22211),
        ee = n(561308),
        et = n(206295),
        en = n(111386),
        el = n(797342),
        ea = n(896449),
        ei = n(469153),
        er = n(206583),
        es = n(981631),
        eo = n(689938),
        eu = n(164384);
      function ec(e) {
        let { children: t } = e,
          n = a.useRef(null);
        return (
          (0, h.useFocusLock)(n),
          (0, l.jsx)("div", { className: eu.popout, ref: n, children: t })
        );
      }
      function ed(e) {
        let {
            children: t,
            backgroundImgSrc: n,
            className: a,
            style: i = {},
          } = e,
          { primaryColor: s, secondaryColor: o } = (0, et.Z)(n);
        return (
          null != n &&
            (i.background = "linear-gradient(45deg, "
              .concat(s, ", ")
              .concat(o, ")")),
          (0, l.jsx)(h.ThemeProvider, {
            theme: es.BRd.DARK,
            children: (e) =>
              (0, l.jsx)("div", {
                "data-disable-adaptive-theme": !0,
                className: r()(eu.hero, e, a),
                style: i,
                children: t,
              }),
          })
        );
      }
      let eh = a.createContext(null);
      function em(e) {
        let { children: t } = e,
          n = a.useRef(null);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className: eu.interactionsContainerHeader,
              ref: (e) => (n.current = e),
            }),
            (0, l.jsx)("div", {
              className: eu.interactionsContainer,
              children: (0, l.jsx)(eh.Provider, {
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
            generateReactionImage: i,
            reactionImageAltText: r,
            onReaction: s,
            entry: E,
            buttons: _ = [],
            header: p,
            onVoiceChannelPreview: g,
          } = e,
          [C, N] = a.useState(!1),
          [P, Z] = a.useState(null),
          S = (0, u.e7)(
            [D.Z],
            () => null != t && D.Z.can(es.Plq.SEND_MESSAGES, t),
          ),
          [M, y] = a.useState(!1),
          [w, F] = a.useState(!1),
          { voiceBar: Y, joinVoiceButton: W } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: i } = e,
              { streamPreviewUrl: r, channel: s } = (0, Q.Z)(n),
              { isRich: o, appName: c } = (0, el.n)(n),
              { needSubscriptionToAccess: m } = (0, O.Z)(
                null == t ? void 0 : t.id,
              ),
              E = (0, u.e7)([U.Z], () =>
                null != s ? U.Z.getGuild(s.guild_id) : void 0,
              ),
              _ = (0, u.Wu)(
                [H.ZP],
                () => (null != s ? H.ZP.getVoiceStatesForChannel(s) : []),
                [s],
              ),
              p = (0, u.e7)([G.Z], () =>
                G.Z.isInChannel(null == s ? void 0 : s.id),
              ),
              v = a.useMemo(() => {
                for (let e of _) {
                  let t = b.Z.getDMFromUserId(e.user.id),
                    n = null != t && k.ZP.isChannelMuted(null, t),
                    l = B.Z.isBlocked(e.user.id);
                  if (n || l) return !0;
                }
                return !1;
              }, [_]);
            if (null == s || null == E)
              return { voiceBar: void 0, joinVoiceButton: void 0 };
            let T = null != r,
              g = () => {
                x.Z.updateChatOpen(s.id, !0), (0, j.Kh)(s.id);
                null == i || i(s, o ? c : void 0);
              },
              I = () => {
                f.Z.handleVoiceConnect({
                  channel: s,
                  connected: p,
                  needSubscriptionToAccess: m,
                  routeDirectlyToChannel: !0,
                });
              },
              C = (e) => {
                let {
                    children: t,
                    text: n,
                    hasBlockedOrMutedVCParticipant: a,
                  } = e,
                  i = a
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          a &&
                            (0, l.jsx)(h.WarningIcon, {
                              size: "custom",
                              width: 13,
                              height: 13,
                              className: eu.popoutBlockedWarningIcon,
                            }),
                          eo.Z.Messages
                            .MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING,
                        ],
                      })
                    : n;
                return (0, l.jsx)(
                  h.Tooltip,
                  {
                    "aria-label": a
                      ? eo.Z.Messages
                          .MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING
                      : null != n && n,
                    text: i,
                    shouldShow: !0,
                    children: t,
                  },
                  "voice-preview",
                );
              },
              N = (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsxs)("div", {
                    className: eu.voiceChannelPopoutReactorHeader,
                    children: [
                      (0, l.jsx)(C, {
                        text: eo.Z.Messages
                          .MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                        hasBlockedOrMutedVCParticipant: v,
                        children: (e) =>
                          (0, l.jsxs)(h.Clickable, {
                            ...e,
                            "aria-label":
                              eo.Z.Messages
                                .MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                            onClick: g,
                            className: eu.voiceChannelPopoutReactorChannel,
                            children: [
                              (0, l.jsx)(A.Z, {
                                guild: E,
                                size: A.Z.Sizes.SMOL,
                                className: eu.voiceChannelGuildIcon,
                                active: !0,
                              }),
                              (0, l.jsx)(h.ChevronSmallRightIcon, {
                                size: "xxs",
                                color: d.Z.colors.INTERACTIVE_NORMAL,
                              }),
                              (0, l.jsx)(h.VoiceNormalIcon, {
                                size: "xs",
                                color: d.Z.colors.TEXT_NORMAL,
                              }),
                              (0, l.jsx)(h.Text, {
                                variant: "text-sm/medium",
                                color: "text-normal",
                                className: eu.voiceChannelName,
                                children: s.name,
                              }),
                            ],
                          }),
                      }),
                      (0, l.jsx)(L.Z, {
                        guildId: E.id,
                        users: _,
                        max: 3,
                        renderUser: (e, t) =>
                          (0, l.jsx)(h.Avatar, {
                            src: e.user.getAvatarURL(E.id, 16),
                            size: h.AvatarSizes.SIZE_16,
                            "aria-label": "avatar",
                            className: t,
                          }),
                        renderMoreUsers: (e) =>
                          (0, l.jsx)("div", {
                            className: eu.voiceChannelAdditionalParticipants,
                            children: (0, l.jsx)(h.Text, {
                              variant: "text-xxs/semibold",
                              color: "text-normal",
                              children: e,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: eu.primaryActionPopoutDivider,
                  }),
                ],
              });
            return {
              voiceBar: N,
              joinVoiceButton: p
                ? null
                : (0, l.jsx)(C, {
                    hasBlockedOrMutedVCParticipant: v,
                    children: (e) =>
                      (0, l.jsx)(ef, {
                        ...e,
                        color: h.Button.Colors.GREEN,
                        onClick: I,
                        IconComponent: T ? h.ScreenIcon : h.VoiceNormalIcon,
                        children: T ? eo.Z.Messages.WATCH : eo.Z.Messages.JOIN,
                      }),
                  }),
            };
          })({ channel: t, entry: E, onVoiceChannelPreview: g }),
          J = null != W && 0 === _.length ? [W] : _,
          q = J.length > 0,
          K = J.length >= 2,
          [$, ee] = a.useState(!q),
          et = z.ZP.getName(
            null == t ? void 0 : t.guild_id,
            null == t ? void 0 : t.id,
            n,
          ),
          ea = null != t && C ? "#".concat(t.name) : "@".concat(et),
          ec = C
            ? eo.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER
            : eo.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL,
          ed = async (e) => {
            let l;
            if (null != e) {
              if (
                (V.default.track(es.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                  surface_type: er.Kd.GUILD_MEMBER_LIST,
                  channel_id: null == t ? void 0 : t.id,
                  guild_id: null == t ? void 0 : t.guild_id,
                }),
                (0, I.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                y(!0),
                F(!1),
                C)
              )
                o()(
                  null != t,
                  "shareToChannelMode should only be true if a valid channel is passed",
                ),
                  (l = t);
              else {
                var a;
                let e = await m.Z.getOrEnsurePrivateChannel(n.id);
                l = null !== (a = b.Z.getChannel(e)) && void 0 !== a ? a : null;
              }
              return (
                o()(null != l, "Send channel must be defined"),
                em({
                  reply: ":".concat(e.name, ":"),
                  sendToChannel: l,
                  onComplete: (e, t) => {
                    F(!0),
                      setTimeout(() => {
                        y(!1), s(e, t);
                      }, 600);
                  },
                  interactionType: er.xP.REACTION_EMOJI_REACT_SENT,
                })
              );
            }
          },
          eh = async (e) => {
            let l;
            if (((0, I.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), C))
              o()(
                null != t,
                "shareToChannelMode should only be true if a valid channel is passed",
              ),
                (l = t);
            else {
              let e = await m.Z.openPrivateChannel(n.id, !1, !1),
                t = b.Z.getChannel(e);
              o()(null != t, "DM channel must be defined"), (l = t);
            }
            let a =
              l.type === es.d4z.DM
                ? er.xP.DM_REACTION_MESSAGE_SENT
                : er.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return em({
              reply: e,
              sendToChannel: l,
              interactionType: a,
              onComplete: s,
            });
          },
          em = async (e) => {
            let {
              reply: t,
              sendToChannel: n,
              onComplete: l,
              interactionType: a,
            } = e;
            if ((null == P || P.focus(), (0, R.Io)("ContentPopout Reactor")))
              await (0, X.p)({
                channel: n,
                content: t,
                entry: E,
                whenReady: !1,
              });
            else {
              var s;
              let e = await ((s = i),
              async function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                try {
                  return await s(...t);
                } catch (e) {
                  throw e;
                }
              })(n.id);
              o()(null != e, "Reaction image must be defined"),
                await (0, T.B)({ file: e, channel: n, altText: r, reply: t });
            }
            null == l || l(a, n);
          },
          ex = null != p ? p : null != Y ? Y : void 0;
        return (
          a.useEffect(() => {
            $ && (null == P || P.focus());
          }, [P, C, $]),
          (0, l.jsxs)("div", {
            style: { pointerEvents: M ? "none" : "all" },
            children: [
              (0, l.jsx)(ei.Z, {
                sent: w,
                shown: M,
                className: eu.toastContainer,
              }),
              null != ex
                ? ex
                : (0, l.jsx)(en.Z, {
                    children: (0, l.jsxs)("div", {
                      className: eu.emojiHotrailShareToChannel,
                      children: [
                        (0, l.jsx)(eE, { channel: t, onClickSuggestion: ed }),
                        (0, l.jsx)(v.dE, { onSelectEmoji: ed }),
                      ],
                    }),
                  }),
              (0, l.jsxs)("div", {
                className: $
                  ? eu.inputContainerShareToChannel
                  : eu.hiddenButRenderedInputField,
                children: [
                  (0, l.jsx)(v.A7, {
                    placeholder: eo.Z.Messages.TEXTAREA_PLACEHOLDER.format({
                      channel: ea,
                    }),
                    onEnter: eh,
                    setEditorRef: (e) => Z(e),
                    channel: C ? t : void 0,
                    showEmojiButton: null != ex,
                    renderAttachButton: S
                      ? () =>
                          (0, l.jsx)(h.Tooltip, {
                            text: ec,
                            children: (e) =>
                              (0, l.jsx)(h.Clickable, {
                                ...e,
                                className: eu.shareToChannelButton,
                                onClick: () => N((e) => !e),
                                children: C
                                  ? (0, l.jsx)(h.TextIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                    })
                                  : (0, l.jsx)(h.AtIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                    }),
                              }),
                          })
                      : void 0,
                  }),
                  q &&
                    (0, l.jsx)(h.Clickable, {
                      onClick: () => ee(!1),
                      className: eu.primaryActionPopoutMessageCloseIcon,
                      children: (0, l.jsx)(h.XSmallIcon, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: d.Z.colors.ICON_PRIMARY,
                      }),
                    }),
                ],
              }),
              !1 === $ &&
                (0, l.jsxs)("div", {
                  className: eu.primaryActionPopoutActionButtons,
                  children: [
                    (0, l.jsxs)(
                      h.Button,
                      {
                        className: eu.secondaryButton,
                        color: h.Button.Colors.CUSTOM,
                        onClick: () => ee(!0),
                        innerClassName: eu.iconButton,
                        size: K ? h.Button.Sizes.MIN : h.Button.Sizes.LARGE,
                        children: [
                          (0, l.jsx)(h.ChatIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            colorClass: eu.secondaryText,
                          }),
                          !K &&
                            (0, l.jsx)(h.Text, {
                              variant: "text-md/semibold",
                              className: eu.secondaryText,
                              children: eo.Z.Messages.USER_POPOUT_MESSAGE,
                            }),
                        ],
                      },
                      "toggleMessageMode",
                    ),
                    J,
                  ],
                }),
            ],
          })
        );
      }
      let eE = (e) => {
        let { channel: t, onClickSuggestion: n } = e,
          [i, r] = a.useState(!1);
        a.useEffect(() => {
          r(!0);
        }, []);
        let s = !!p.Z.keyboardModeEnabled && !i,
          o = (0, C.wC)(null == t ? void 0 : t.guild_id)
            .slice(0, 5)
            .map((e) =>
              null == e.id
                ? { emoji: e, url: e.url }
                : {
                    emoji: e,
                    url: (0, Y.gT)({
                      id: e.id,
                      animated: e.animated,
                      size: 58,
                    }),
                  },
            );
        return (0, l.jsx)(l.Fragment, {
          children: o.map((e) => {
            let { emoji: t, url: a } = e;
            return null != a
              ? (0, l.jsx)(
                  "div",
                  {
                    children: (0, l.jsx)(h.TooltipContainer, {
                      text: eo.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format(
                        { emojiName: t.name },
                      ),
                      position: "top",
                      "aria-label":
                        eo.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format(
                          { emojiName: t.name },
                        ),
                      color: h.Tooltip.Colors.PRIMARY,
                      shouldShow: !s && void 0,
                      children: (0, l.jsx)(w.u, {
                        emoji: t,
                        isDisabled: !i,
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
      function e_(e) {
        let {
            channel: t,
            userDescription: n,
            entry: a,
            disableGameProfileLinks: i,
            onUserPopoutClosed: s,
          } = e,
          o = null == t ? void 0 : t.guild_id,
          {
            displayParticipants: c,
            participant1: d,
            participant2: m,
            numOtherParticipants: x,
          } = (0, $.Z)(a, 3),
          E = (0, u.e7)([F.default], () => F.default.getUser(a.author_id)),
          { streamPreviewUrl: _ } = (0, Q.Z)(a),
          p = [d, m];
        return (0, l.jsxs)("div", {
          className: eu.popoutContentHeader,
          children: [
            (0, l.jsxs)("div", {
              className: eu.popoutUserContainer,
              children: [
                (0, l.jsx)(N.Z, {
                  maxUsers: 3,
                  users: c,
                  size: h.AvatarSizes.SIZE_24,
                  avatarClassName: eu.popoutStackedAvatar,
                  hideOverflowCount: !0,
                  disableUsernameTooltip: !0,
                  onUserPopoutClosed: s,
                }),
                (0, l.jsx)(h.Spacer, { size: 8, horizontal: !0 }),
                (0, l.jsx)(h.Heading, {
                  variant: "heading-sm/normal",
                  className: eu.popoutTextSecondary,
                  children: n.format({
                    user0: z.ZP.getName(o, null == t ? void 0 : t.id, p[0]),
                    user1: z.ZP.getName(o, null == t ? void 0 : t.id, p[1]),
                    countOthers: x,
                    countOthersHook: (e, t) =>
                      (0, l.jsx)(
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
                      (0, l.jsx)(
                        q.Z,
                        {
                          textClassName: r()(
                            eu.popoutUsername,
                            eu.popoutTextPrimary,
                          ),
                          text: e,
                          user: p[0],
                          channel: t,
                          onPopoutClosed: s,
                        },
                        n,
                      ),
                    name1Hook: (e, n) =>
                      (0, l.jsx)(
                        q.Z,
                        {
                          textClassName: r()(
                            eu.popoutUsername,
                            eu.popoutTextPrimary,
                          ),
                          text: e,
                          user: p[1],
                          channel: t,
                          onPopoutClosed: s,
                        },
                        n,
                      ),
                  }),
                }),
              ],
            }),
            null != _ && (0, l.jsx)(g.ZP, { size: g.ZP.Sizes.SMALL }),
            null != E &&
              (0, l.jsx)(ea.Z, {
                user: E,
                channel: t,
                guildId: o,
                entry: a,
                disableGameProfileLinks: i,
              }),
          ],
        });
      }
      function ep(e) {
        let { children: t, onClick: n } = e;
        return null == n
          ? (0, l.jsx)(l.Fragment, { children: t })
          : (0, l.jsx)(h.Clickable, {
              className: eu.maybeClickable,
              onClick: n,
              children: t,
            });
      }
      function ev(e) {
        var t;
        let {
            title: n,
            subtitle: a,
            badges: i,
            children: s,
            onClickThumbnail: o,
            onClickTitle: u,
            onClickSubtitle: c,
            headerIcons: d,
            disableGameProfileLinks: m = !1,
            onUserPopoutClosed: x,
            ...E
          } = e,
          { entry: _ } = E,
          p = (0, J.dX)(_),
          v = (0, S.Z)({
            location: "ContentPopout",
            applicationId:
              p && !m
                ? null === (t = _.extra) || void 0 === t
                  ? void 0
                  : t.application_id
                : void 0,
            source: Z.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: _.author_id,
          }),
          { largeImage: T, smallImage: f } = (0, W.rv)({ entry: _ }),
          g = p ? v : void 0;
        return (0, l.jsxs)("div", {
          className: eu.popoutContentWrapper,
          children: [
            (0, l.jsx)(e_, {
              disableGameProfileLinks: m,
              ...E,
              onUserPopoutClosed: x,
            }),
            (0, l.jsxs)(ed, {
              backgroundImgSrc: null == T ? void 0 : T.src,
              children: [
                (0, l.jsxs)("div", {
                  className: eu.popoutHeroInner,
                  children: [
                    (0, l.jsx)("div", {
                      className: eu.popoutThumbnailContainer,
                      children: (0, l.jsx)(K.E, {
                        image: T,
                        smallImage: f,
                        onClick: null != o ? o : g,
                        size: K.J.SIZE_72,
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: eu.popoutHeroBody,
                      children: [
                        (0, l.jsx)(ep, {
                          onClick: null != u ? u : g,
                          children: (0, l.jsx)(h.Heading, {
                            variant: "heading-md/medium",
                            className: r()(eu.popoutHeroTextPrimary, {
                              [eu.popoutHeroTextPrimaryShort]: null != d,
                            }),
                            lineClamp: 3,
                            children: n,
                          }),
                        }),
                        null != a
                          ? (0, l.jsx)(ep, {
                              onClick: null != c ? c : g,
                              children: (0, l.jsx)(h.Text, {
                                variant: "text-sm/normal",
                                className: eu.popoutHeroTextSecondary,
                                children: a,
                              }),
                            })
                          : null,
                        (0, l.jsx)(h.Spacer, { size: 8 }),
                        i,
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: eu.popoutHeaderIcons,
                      children: d,
                    }),
                  ],
                }),
                s,
              ],
            }),
          ],
        });
      }
      function eT(e) {
        var t;
        let {
            title: n,
            subtitle: i,
            badges: r,
            stream: s,
            onClickThumbnail: o,
            onClickTitle: c,
            onClickSubtitle: d,
            onUserPopoutClosed: m,
            ...x
          } = e,
          p = (0, u.e7)([b.Z], () =>
            b.Z.getChannel(null == s ? void 0 : s.channelId),
          ),
          [v] = a.useMemo(() => (0, M.p9)(p, G.Z, U.Z, D.Z, P.Z), [p]),
          { entry: T } = x,
          f = (0, J.dX)(T),
          g = (0, S.Z)({
            location: "ContentPopout",
            applicationId: f
              ? null === (t = T.extra) || void 0 === t
                ? void 0
                : t.application_id
              : void 0,
            source: Z.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: T.author_id,
          }),
          I = f ? g : void 0,
          {
            activity: C,
            activityApplication: N,
            fallbackApplication: A,
          } = (0, ee.qy)(T),
          { largeImage: O, smallImage: R } = (0, W.YC)(C, null != N ? N : A);
        return null == s
          ? null
          : (0, l.jsxs)("div", {
              className: eu.popoutContentWrapper,
              children: [
                (0, l.jsx)(e_, { ...x, onUserPopoutClosed: m }),
                (0, l.jsxs)("div", {
                  className: eu.streamingPopoutHero,
                  children: [
                    (0, l.jsx)(ep, {
                      onClick: v
                        ? () => {
                            E.default.selectVoiceChannel(s.channelId),
                              (0, _.iV)(s);
                          }
                        : void 0,
                      children: (0, l.jsxs)("div", {
                        style: { position: "relative" },
                        children: [
                          (0, l.jsx)(y.Z, {
                            className: eu.streamingPopoutImg,
                            stream: s,
                          }),
                          v &&
                            (0, l.jsx)("div", {
                              className: eu.streamCTA,
                              children: (0, l.jsx)(h.Text, {
                                variant: "text-md/normal",
                                children: eo.Z.Messages.WATCH_STREAM,
                              }),
                            }),
                        ],
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: eu.streamingPopoutHeader,
                      children: [
                        null != O &&
                          (0, l.jsx)("div", {
                            className: eu.popoutThumbnailContainer,
                            children: (0, l.jsx)(K.E, {
                              image: O,
                              smallImage: R,
                              onClick: null != o ? o : I,
                              size: K.J.SIZE_72,
                            }),
                          }),
                        (0, l.jsxs)("div", {
                          className: eu.streamingPopoutHeaderText,
                          children: [
                            (0, l.jsx)(ep, {
                              onClick: null != c ? c : I,
                              children: (0, l.jsx)(h.Heading, {
                                variant: "heading-md/semibold",
                                className: eu.popoutTextPrimary,
                                lineClamp: 3,
                                children: n,
                              }),
                            }),
                            null != i
                              ? (0, l.jsx)(ep, {
                                  onClick: null != d ? d : I,
                                  children: (0, l.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    className: eu.popoutTextSecondary,
                                    children: i,
                                  }),
                                })
                              : null,
                            (0, l.jsx)(h.Spacer, { size: 8 }),
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
      function ef(e) {
        let { IconComponent: t, children: n, className: a, ...i } = e;
        return (0, l.jsxs)(h.Button, {
          ...i,
          className: r()(a, eu.primaryButton),
          innerClassName: null != t ? eu.iconButton : void 0,
          size: h.Button.Sizes.LARGE,
          children: [
            null != t
              ? (0, l.jsx)(t, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: d.Z.colors.WHITE,
                })
              : null,
            (0, l.jsx)(h.Text, {
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
      var l = n(735250);
      n(470079);
      var a = n(481060),
        i = n(239091),
        r = n(299206),
        s = n(810568),
        o = n(168524),
        u = n(725119),
        c = n(26033),
        d = n(689938),
        h = n(243113);
      function m(e) {
        var t;
        let {
            user: n,
            guildId: m,
            channel: x,
            entry: E,
            onSelect: _,
            disableGameProfileLinks: p,
          } = e,
          v = (0, u.Z)({
            userId: n.id,
            guildId: m,
            channelId: null == x ? void 0 : x.id,
          }),
          T = (0, r.Z)({ id: n.id, label: d.Z.Messages.COPY_ID_USER }),
          f = (0, c.dX)(E),
          g = (0, o.Z)({
            location: "ContentPopoutContextMenu",
            applicationId:
              f && !0 !== p
                ? null === (t = E.extra) || void 0 === t
                  ? void 0
                  : t.application_id
                : void 0,
            source: s.m1.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: E.author_id,
          });
        return (0, l.jsx)(a.Popout, {
          align: "top",
          position: "right",
          disablePointerEvents: !1,
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(a.Menu, {
              navId: "content-inventory-context",
              onClose: () => {
                (0, i.Zy)(), t();
              },
              "aria-label": d.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: _,
              children: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsxs)(a.MenuGroup, {
                    children: [
                      v,
                      null != g &&
                        (0, l.jsx)(a.MenuItem, {
                          id: "game-profile",
                          label: d.Z.Messages.GAME_PROFILE,
                          action: g,
                        }),
                    ],
                  }),
                  (0, l.jsx)(a.MenuGroup, { children: T }),
                ],
              }),
            });
          },
          children: (e) =>
            (0, l.jsx)(a.Tooltip, {
              text: d.Z.Messages.MORE,
              children: (t) =>
                (0, l.jsx)(a.Clickable, {
                  ...t,
                  className: h.menuIcon,
                  ...e,
                  children: (0, l.jsx)(a.MoreHorizontalIcon, {
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
      var l = n(735250);
      n(470079);
      var a = n(180081),
        i = n(442837),
        r = n(481060),
        s = n(607070),
        o = n(689938),
        u = n(348910),
        c = n(810819);
      let d = () =>
        (0, l.jsxs)("div", {
          className: c.toast,
          children: [
            (0, l.jsx)(r.Spinner, {
              type: r.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
              className: u.loadingSpinner,
            }),
            (0, l.jsx)(r.Text, {
              color: "header-primary",
              variant: "text-md/normal",
              children: o.Z.Messages.CONTENT_INVENTORY_MESSAGE_SENDING,
            }),
          ],
        });
      t.Z = (e) => {
        let { shown: t, sent: n, className: u } = e,
          c = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
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
        return (0, l.jsx)(l.Fragment, {
          children: h(
            (e, t) =>
              t &&
              (0, l.jsx)(a.animated.div, {
                className: u,
                style: e,
                children: n
                  ? (0, l.jsx)(r.Toast, {
                      message: o.Z.Messages.CONTENT_INVENTORY_MESSAGE_SENT,
                      type: r.ToastType.SUCCESS,
                      id: "success_message_toast",
                    })
                  : (0, l.jsx)(r.Toast, {
                      message: "",
                      type: r.ToastType.CUSTOM,
                      id: "custom_loading_message_toast",
                      options: { component: (0, l.jsx)(d, {}) },
                    }),
              }),
          ),
        });
      };
    },
    656709: function (e, t, n) {
      n.d(t, {
        p: function () {
          return i;
        },
      });
      var l = n(904245),
        a = n(957730);
      function i(e) {
        let { channel: t, content: n, entry: i, whenReady: r } = e,
          s = a.ZP.parse(t, n);
        return l.Z.sendMessage(t.id, s, r, {
          contentInventoryEntry: { unverified_content: i },
        });
      }
    },
    897674: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
        g: function () {
          return o;
        },
      }),
        n(47120);
      var l = n(470079),
        a = n(442837),
        i = n(146282),
        r = n(327220),
        s = n(959580);
      function o(e, t) {
        let { types: n } = e;
        return !!(null == n || n.has(t.content_type)) || !1;
      }
      function u(e) {
        let { feed: t, filters: n } = (0, a.cj)([i.Z], () => ({
            feed: i.Z.getFeed(e),
            filters: i.Z.getFilters(),
          })),
          u = l.useMemo(() => {
            let e = null == t ? void 0 : t.entries.map((e) => e.content);
            return null != n
              ? null == e
                ? void 0
                : e.filter((e) => o(n, e))
              : e;
          }, [t, n]);
        return (u = (0, r.Z)(u)), (u = (0, s.Z)(u));
      }
    },
    871118: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var l = n(735250),
        a = n(470079),
        i = n(120356),
        r = n.n(i),
        s = n(442837),
        o = n(481060),
        u = n(543882),
        c = n(592125),
        d = n(496675),
        h = n(981631),
        m = n(689938),
        x = n(375387);
      function E(e) {
        let { isLoading: t, noText: n, previewText: a, className: i } = e;
        return (0, l.jsx)("div", {
          className: r()(x.emptyPreviewContainer, i),
          children: t
            ? (0, l.jsx)(o.Spinner, {})
            : (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)("div", { className: x.emptyPreviewImage }),
                  n
                    ? null
                    : (0, l.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        className: x.emptyPreviewText,
                        children:
                          null != a ? a : m.Z.Messages.STREAM_NO_PREVIEW,
                      }),
                ],
              }),
        });
      }
      function _(e) {
        let { stream: t, className: n, noText: i = !1 } = e,
          o = (0, s.e7)([c.Z], () => c.Z.getBasicChannel(t.channelId)),
          _ = (0, s.e7)(
            [d.Z],
            () => null != o && d.Z.canBasicChannel(h.S7T.CONNECT, o),
          ),
          { url: p, isLoading: v } = (0, s.cj)([u.Z], () => ({
            url: _
              ? u.Z.getPreviewURL(t.guildId, t.channelId, t.ownerId)
              : null,
            isLoading:
              _ && u.Z.getIsPreviewLoading(t.guildId, t.channelId, t.ownerId),
          })),
          T = a.useRef(v ? null : p);
        a.useEffect(() => {
          !v && (T.current = p);
        }, [p, v]);
        let f = null == p || v ? T.current : p;
        return null == f
          ? (0, l.jsx)(E, {
              className: n,
              isLoading: v,
              noText: i,
              previewText: _ ? void 0 : m.Z.Messages.STREAM_NO_PERMISSION_CTA,
            })
          : (0, l.jsx)("div", {
              className: r()(n, x.root),
              children: (0, l.jsx)("img", {
                src: f,
                alt: "",
                className: x.image,
              }),
            });
      }
    },
    12168: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return M;
        },
        u: function () {
          return Z;
        },
      }),
        n(47120);
      var l = n(735250),
        a = n(470079),
        i = n(120356),
        r = n.n(i),
        s = n(392711),
        o = n(180081),
        u = n(481060),
        c = n(596454),
        d = n(727637),
        h = n(313201),
        m = n(543241),
        x = n(318766),
        E = n(907040),
        _ = n(633302),
        p = n(806966),
        v = n(176354),
        T = n(823379),
        f = n(354459),
        g = n(185923),
        I = n(420212),
        C = n(894967);
      let N = g.Hz.CHAT,
        P = [
          _.ZP.getByName("thumbsup"),
          _.ZP.getByName("eyes"),
          _.ZP.getByName("laughing"),
          _.ZP.getByName("watermelon"),
          _.ZP.getByName("fork_and_knife"),
          _.ZP.getByName("yum"),
        ].filter(T.lm);
      function Z(e) {
        let { emoji: t, isDisabled: n = !1, onClick: i, className: s } = e,
          h = a.useRef(null),
          m = (0, d.Z)(h);
        return (0, l.jsx)("span", {
          ref: h,
          children: (0, l.jsx)(u.Button, {
            onClick: i,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.NONE,
            focusProps: { enabled: !n },
            children: (0, l.jsx)(u.Spring, {
              config: x.u,
              from: { value: 0 },
              to: { value: m ? 1 : 0 },
              children: (e) => {
                let { value: a } = e;
                return (0, l.jsx)(o.animated.div, {
                  style: {
                    transform: a
                      .to([0, 1], [1, 1.14])
                      .to((e) => "scale(".concat(e, ")")),
                  },
                  children: (0, l.jsx)(c.Z, {
                    className: r()(C.emoji, s, { [C.emojiItemDisabled]: n }),
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
      function S(e) {
        let {
          otherAccessories: t,
          isEmojiPickerExpanded: n,
          onSetExpanded: a,
          onFocus: i,
        } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            t,
            (0, l.jsx)(u.Clickable, {
              className: C.dropDownContainer,
              onClick: () => {
                a(!n), i();
              },
              children: (0, l.jsx)(u.ChevronSmallDownIcon, {
                size: "md",
                color: "currentColor",
                className: r()(C.dropDown, { [C.dropDownOpen]: n }),
              }),
            }),
          ],
        });
      }
      function M(e) {
        let {
            channel: t,
            title: n,
            closePopout: i,
            onFocus: o,
            onSelectEmoji: c,
            onSelectDisabledEmoji: d,
            onExpandedToggle: x,
            emojiSearchProps: _,
            recentlyUsedEmojis: T,
            analyticsOverride: M,
          } = e,
          y = (0, h.Dt)(),
          [A, O] = a.useState(!1),
          R = (0, m.wC)(t.guild_id),
          j = (0, s.uniqBy)([...R, ...P], "name")
            .filter(
              (e) =>
                !v.ZP.isEmojiFilteredOrLocked({
                  emoji: e,
                  channel: t,
                  intention: N,
                }),
            )
            .slice(0, f.e5);
        null != T && T.length > 0 && j.splice(j.length - 1, 1, T[0]);
        let w = (e) => {
            O(e), null == x || x(e);
          },
          L = (e, t) => {
            if (null == e && t) {
              i();
              return;
            }
            null != e && c(e);
            w(!t), t && p.kJ.setSearchPlaceholder(null);
          };
        return (0, l.jsxs)(u.Dialog, {
          "aria-labelledby": y,
          children: [
            (0, l.jsx)(u.HeadingLevel, {
              forceLevel: 2,
              children: (0, l.jsx)(u.HiddenVisually, {
                children: (0, l.jsx)(u.H, { id: y, children: n }),
              }),
            }),
            (0, l.jsxs)("div", {
              className: C.container,
              children: [
                (0, l.jsx)(E.Z, {
                  analyticsOverride: M,
                  channel: t,
                  className: r()(C.animatedPicker, {
                    [C.animatedPickerTall]: A,
                  }),
                  headerClassName: r()(C.emojiPickerHeader, {
                    [C.emojiPickerHeaderExpanded]: A,
                  }),
                  closePopout: i,
                  onSelectEmoji: A ? L : () => {},
                  shouldHidePickerActions: !A,
                  wrapper: "div",
                  pickerIntention: N,
                  searchProps: {
                    ..._,
                    accessory: (0, l.jsx)(S, {
                      otherAccessories: null == _ ? void 0 : _.accessory,
                      isEmojiPickerExpanded: A,
                      onSetExpanded: w,
                      onFocus: o,
                    }),
                    onKeyDown: (e) => {
                      null != e &&
                        e.key !== I.vn.TAB &&
                        (e.key !== I.vn.ENTER || e.shiftKey ? w(!0) : w(!A));
                    },
                  },
                }),
                (0, l.jsx)("div", {
                  className: C.slotsContainer,
                  children: (0, l.jsx)("div", {
                    className: r()(C.slots, C.slotsWide),
                    children: j.map((e) => {
                      let n = v.ZP.isEmojiDisabled({
                        emoji: e,
                        channel: t,
                        intention: g.Hz.CHAT,
                      });
                      return (0, l.jsx)(
                        "div",
                        {
                          className: C.slot,
                          children: (0, l.jsx)(u.TooltipContainer, {
                            text: e.name,
                            position: "top",
                            "aria-label": e.name,
                            tooltipClassName: C.tooltipContainer,
                            color: u.Tooltip.Colors.BRAND,
                            children: (0, l.jsx)(Z, {
                              emoji: e,
                              isDisabled: n,
                              onClick: () => {
                                n ? null == d || d(e) : L(e, !0);
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
      var l,
        a,
        i,
        r,
        s = n(442837),
        o = n(570140),
        u = n(375954);
      let c = Object.freeze([]),
        d = {},
        h = {},
        m = {},
        x = {},
        E = {};
      function _(e, t) {}
      function p() {
        E = {};
      }
      function v(e, t) {
        let n = d[e];
        return (
          null != n &&
          ((d[e] = n.filter((e) => e.id !== t)),
          delete h[t],
          delete m[t],
          n.length !== d[e].length)
        );
      }
      function T(e, t) {
        let n = d[e];
        if (null == n) return !1;
        d[e] = n.map((e) => (e.id === t.id ? { ...e, ...t } : e));
        let l = m[t.id];
        null != l && null != x[l.id] && (x[l.id] = { ...x[l.id], ...t });
      }
      class f extends (l = s.ZP.Store) {
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
          if (null != e) return E[e];
        }
      }
      (r = "UploadStore"),
        (i = "displayName") in (a = f)
          ? Object.defineProperty(a, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[i] = r),
        (t.Z = new f(o.Z, {
          CONNECTION_OPEN: function () {
            E = {};
          },
          LOGOUT: function () {
            E = {};
          },
          UPLOAD_START: function (e) {
            var t;
            let { channelId: n, file: l, uploader: a, message: i } = e;
            if (a._aborted || a._errored) return;
            let r = null !== (t = d[n]) && void 0 !== t ? t : c;
            (h[l.id] = a), (d[n] = [...r, l]), (m[l.id] = i);
            let { items: s } = l;
            null != s && (x[i.id] = { ...l, items: s }), _(i.nonce, l);
          },
          UPLOAD_COMPRESSION_PROGRESS: function (e) {
            let { channelId: t, file: n } = e;
            T(t, n);
          },
          UPLOAD_PROGRESS: function (e) {
            let { channelId: t, file: n } = e;
            T(t, n);
          },
          UPLOAD_COMPLETE: function (e) {
            let { channelId: t, file: n } = e;
            return v(t, n.id);
          },
          UPLOAD_FAIL: function (e) {
            let { channelId: t, file: n } = e;
            return v(t, n.id);
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
              l = h[t.id];
            if (null == l) return !1;
            setImmediate(() => l.cancelItem(n));
          },
          UPLOAD_FILE_UPDATE: function (e) {
            let { channelId: t, file: n } = e,
              l = m[n.id];
            null != l && _(l.nonce, n), T(t, n);
          },
          UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
            let { file: t, messageId: n } = e;
            x[n] = t;
          },
        }));
    },
  },
]);
//# sourceMappingURL=775f4aa3c926eff80f5b.js.map
