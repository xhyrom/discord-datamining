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
        s = n(968333);
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
          return H;
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
        h = n(835473),
        m = n(592745),
        x = n(592125),
        E = n(757266),
        v = n(650774),
        _ = n(430824),
        C = n(283595),
        p = n(496675),
        f = n(699516),
        T = n(944486),
        g = n(594174),
        I = n(979651),
        N = n(181106),
        Z = n(417363),
        P = n(358085),
        M = n(804739),
        L = n(317381),
        S = n(638880),
        A = n(255621),
        R = n(452634),
        y = n(527805),
        O = n(620662),
        j = n(275920),
        w = n(915863),
        b = n(701488),
        D = n(981631),
        U = n(689938);
      function H(e) {
        var t, n;
        let {
            activity: H,
            embeddedActivity: B,
            user: k,
            onAction: V,
            isEmbedded: G = !1,
            ButtonComponent: F = w.Z,
            ...Y
          } = e,
          { analyticsLocations: z } = (0, d.ZP)(),
          [W, q] = a.useState(!1),
          J = (0, i.e7)([g.default], () => g.default.getCurrentUser()),
          K = k.id === (null == J ? void 0 : J.id),
          X =
            null !== (t = null == B ? void 0 : B.applicationId) && void 0 !== t
              ? t
              : null == H
                ? void 0
                : H.application_id,
          $ = (0, R.Z)({
            channelId: null == B ? void 0 : B.channelId,
            userId: k.id,
            activity: H,
          }),
          Q = (0, i.e7)(
            [C.Z, m.Z, Z.Z, E.Z],
            () =>
              G ||
              (null != X &&
                (0, M.t)({
                  LibraryApplicationStore: C.Z,
                  LaunchableGameStore: m.Z,
                  DispatchApplicationStore: Z.Z,
                  ConnectedAppsStore: E.Z,
                  applicationId: X,
                })),
          ),
          ee = (0, i.e7)([L.ZP], () =>
            Array.from(L.ZP.getSelfEmbeddedActivities().values()).some((e) => {
              let { applicationId: t, channelId: n } = e;
              return (
                (t === (null == H ? void 0 : H.application_id) ||
                  t === (null == B ? void 0 : B.applicationId)) &&
                n === $
              );
            }),
          ),
          et = (0, i.e7)(
            [N.Z],
            () =>
              null != H &&
              null != H.application_id &&
              N.Z.getState(H.application_id, D.mFx.JOIN) === D.OcF.LOADING,
          ),
          [en] = (0, h.Z)(
            (null == B ? void 0 : B.applicationId) != null
              ? [null == B ? void 0 : B.applicationId]
              : (null == H ? void 0 : H.application_id) != null
                ? [null == H ? void 0 : H.application_id]
                : [],
          ),
          el = (0, y.s5)({
            userId: k.id,
            activity: H,
            channelId: $,
            application: en,
          }),
          ea = (0, i.e7)([x.Z, _.Z, v.Z, f.Z, T.Z, I.Z, p.Z], () =>
            null != B
              ? el === y.Fw.CAN_JOIN
              : null != H
                ? (0, A.Z)({
                    user: k,
                    activity: H,
                    application: en,
                    channelId: $,
                    currentUser: J,
                    isEmbedded: G,
                    ChannelStore: x.Z,
                    GuildStore: _.Z,
                    GuildMemberCountStore: v.Z,
                    RelationshipStore: f.Z,
                    SelectedChannelStore: T.Z,
                    VoiceStateStore: I.Z,
                    PermissionStore: p.Z,
                  })
                : void 0,
          ),
          ei = (0, i.e7)([L.ZP], () =>
            Array.from(L.ZP.getSelfEmbeddedActivities().values()).some(
              (e) =>
                e.applicationId === (null == B ? void 0 : B.applicationId) &&
                e.channelId === (null == B ? void 0 : B.channelId),
            ),
          ),
          er = (0, c.O)(),
          es = !P.isPlatformEmbedded;
        if (!((0, O.Z)(H, D.xjy.JOIN) || G) || null == X) return null;
        let eo = !K || (G && !ei),
          eu = eo && (es || Q) && !W && !ee && (!G || ea),
          ec = null;
        eo
          ? !es &&
            !Q &&
            null != H &&
            (ec = U.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({
              name: H.name,
            }))
          : (ec = U.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF);
        let ed =
            null !== (n = null == B ? void 0 : B.launchId) && void 0 !== n
              ? n
              : null == H
                ? void 0
                : H.session_id,
          eh = async (e, t) => {
            var n, l;
            if (null == ed || null == X) return;
            let a = (0, O.Z)(t, D.xjy.EMBEDDED),
              i = T.Z.getVoiceChannelId(),
              r = x.Z.getChannel(i);
            await o.Z.join({
              userId: e.id,
              sessionId: ed,
              applicationId: X,
              channelId: i,
              messageId: null,
              intent: b.Ws.PLAY,
              embedded: a,
              partyId:
                null != t
                  ? null == t
                    ? void 0
                    : null === (n = t.party) || void 0 === n
                      ? void 0
                      : n.id
                  : "",
              locationObject: er.location,
              analyticsLocations: z,
            }),
              !a &&
                (0, j.Z)({
                  type: D.q5t.JOIN,
                  userId: e.id,
                  guildId: null == r ? void 0 : r.guild_id,
                  channelId: i,
                  channelType: null == r ? void 0 : r.type,
                  applicationId: X,
                  partyId:
                    null != t
                      ? null == t
                        ? void 0
                        : null === (l = t.party) || void 0 === l
                          ? void 0
                          : l.id
                      : "",
                  locationObject: er.location,
                  analyticsLocations: z,
                });
          },
          em = async () => {
            let e = !1;
            if (G) {
              if (!ea || null == $ || null == X) return;
              e = await (0, S.Z)({
                applicationId: X,
                activityChannelId: $,
                locationObject: er.location,
                analyticsLocations: z,
              });
            }
            if (!e) {
              let e;
              ea && (null == V || V(), eh(k, H)),
                q(!0),
                null != H &&
                  (e = await s.Z.sendActivityInviteUser({
                    type: D.mFx.JOIN_REQUEST,
                    userId: k.id,
                    activity: H,
                    location: D.Sbl.PROFILE_POPOUT,
                  })),
                null != e && u.default.selectPrivateChannel(e.id);
            }
          },
          ex = ea
            ? U.Z.Messages.JOIN
            : U.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
        return (
          G && (ex = U.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY),
          ei && (ex = U.Z.Messages.EMBEDDED_ACTIVITIES_JOINED),
          (0, l.jsx)(
            r.Tooltip,
            {
              text: ec,
              children: (e) => {
                let { onMouseEnter: t, onMouseLeave: n } = e;
                return (0, l.jsx)(F, {
                  onClick: em,
                  onMouseEnter: t,
                  onMouseLeave: n,
                  disabled: !eu,
                  submitting: et,
                  fullWidth: !0,
                  ...Y,
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
          return T;
        },
        dE: function () {
          return I;
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
        v = n(981631),
        _ = n(689938),
        C = n(793834);
      let p = (0, x.kt)({ id: "1", type: v.d4z.DM }),
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
                    className: r()([C.reply, e]),
                    ref: t,
                    children: (0, l.jsx)(s.FocusLock, {
                      containerRef: t,
                      children: (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)(s.Text, {
                            variant: "text-xs/bold",
                            className: C.replyHeader,
                            children: null != a ? a : _.Z.Messages.CHAT,
                          }),
                          d,
                          (0, l.jsx)(T, {
                            onEnter: (e) => {
                              i(e), h();
                            },
                            placeholder: null != n ? n : _.Z.Messages.CHAT,
                          }),
                        ],
                      }),
                    }),
                  }),
              }),
            children: () => c,
          });
        });
      function T(e) {
        let {
            placeholder: t,
            onEnter: n,
            setEditorRef: i,
            showEmojiButton: s = !1,
            renderAttachButton: o,
            autoFocus: h = !0,
            onFocus: m,
            channel: x,
            className: v,
          } = e,
          [_, f] = a.useState(""),
          [T, g] = a.useState((0, c.JM)("")),
          I = () => {
            f(""), g((0, c.JM)(""));
          },
          N = u.I.ATOMIC_REACTOR_REPLY_INPUT,
          Z = a.useRef(null);
        return (0, l.jsx)(d.Z, {
          ref: Z,
          placeholder: t,
          editorClassName: v,
          className: r()(C.replyInput, v),
          showRemainingCharsAfterCount: -1,
          allowNewLines: !1,
          maxCharacterCount: E.z,
          channel: null != x ? x : p,
          onChange: (e, t, n) => {
            f(t), g(n);
          },
          type: s ? { ...N, emojis: { button: !0 } } : N,
          textValue: _,
          richValue: T,
          onSubmit: (e) => {
            let { value: t } = e;
            return t.length > E.z
              ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
              : (n(t),
                I(),
                Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
          },
          setEditorRef: i,
          focused: h,
          onFocus: m,
          disableThemedBackground: !0,
          emojiPickerCloseOnModalOuterClick: !0,
          disabled: !1,
          autoCompletePosition: (() => {
            if (null == Z.current) return "top";
            let e = Z.current.getBoundingClientRect(),
              t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
          })(),
          renderAttachButton: o,
        });
      }
      let g = (e, t) => {
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
        I = (e) => {
          let { onSelectEmoji: t, onClick: n } = e,
            i = (0, o.ZP)(),
            [r, u] = a.useState(!1),
            c = a.useRef(null);
          return (
            g(() => u(!1), c),
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
                        messageId: v.lds,
                        channel: p,
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
                  text: _.Z.Messages.ADD_REACTION,
                  children: (e) =>
                    (0, l.jsx)("div", {
                      ...e,
                      className: C.reaction,
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
          g(() => m(!1), x),
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("div", {
              className: C.reactions,
              children: [
                n &&
                  (0, l.jsx)(I, {
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
                      text: _.Z.Messages.MESSAGE_ACTION_REPLY,
                      children: (e) =>
                        (0, l.jsx)("button", {
                          ...e,
                          className: r()(C.reaction, C.emojiButton),
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
    371177: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var l = n(470079),
        a = n(442837),
        i = n(902704),
        r = n(158776),
        s = n(561308),
        o = n(231338);
      function u(e) {
        let t = l.useRef(new Set()),
          n = l.useMemo(() => {
            let n = new Set(null == e ? void 0 : e.map((e) => e.author_id));
            return (
              !(0, i.E)([...t.current], [...n]) && (t.current = n), t.current
            );
          }, [e]),
          u = (0, a.Wu)([r.Z], () =>
            Array.from(n).filter((e) => {
              let t = r.Z.getStatus(e);
              return null !== t && [o.Sk.OFFLINE, o.Sk.INVISIBLE].includes(t);
            }),
          );
        return l.useMemo(() => {
          let t = new Set(u);
          return null == e
            ? void 0
            : e.filter((e) => !(0, s.kr)(e) || !t.has(e.author_id));
        }, [e, u]);
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
          return C;
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
        v = (e, t) => {
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
        _ = (e, t) => {
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
          let c = v(i, n);
          (0, h.J)({
            canvas: e,
            badges: c,
            startPosition: m.Iq,
            maxWidth: m.kC,
          });
        },
        C = async (e) => {
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
              _(e, {
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
          return C;
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
        v = (e, t) => {
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
        _ = (e, t) => {
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
          let c = v(i, n);
          (0, h.J)({
            canvas: e,
            badges: c,
            startPosition: m.Iq,
            maxWidth: m.kC,
          });
        },
        C = async (e) => {
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
              _(e, {
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
          return C;
        },
        As: function () {
          return m;
        },
        I8: function () {
          return Z;
        },
        Iq: function () {
          return p;
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
          return I;
        },
        Pu: function () {
          return _;
        },
        Ue: function () {
          return P;
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
          return T;
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
          return g;
        },
        mb: function () {
          return r;
        },
        nx: function () {
          return x;
        },
        sB: function () {
          return v;
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
        v = 12,
        _ = 96,
        C = 32,
        p = 120,
        f = 260,
        T = 88,
        g = 99,
        I = 12,
        N = 18,
        Z = ["gg sans", "sans-serif"],
        P = 500;
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
            v = n.extra.media_title,
            _ = o(c, t);
          return await (0, i.f)({
            assetsToLoad: _,
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
              fileName: "user-reacting-to-".concat(v, ".png").toLowerCase(),
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
        u = n(494399);
      let c = [s.OV, s.EE, s.Af, s.U9, s.n8, s.pQ];
      t.Z = a.memo((e) => {
        let { entry: t, channel: n, selected: a, hovered: d } = e,
          { largeImage: h } = (0, i.rv)({ entry: t, showCoverImage: !1 });
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
        h = n(541716),
        m = n(706454),
        x = n(823379),
        E = n(5192),
        v = n(379357),
        _ = n(192918),
        C = n(561308),
        p = n(907152),
        f = n(206295),
        T = n(297781),
        g = n(591853),
        I = n(797342),
        N = n(981631),
        Z = n(689938);
      let P = (e, t) =>
          Z.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: t.username,
            activity: e.extra.activity_name,
          }),
        M = (e, t, n) => {
          let l = Z.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME,
            a = E.ZP.getName(t.guild_id, t.id, n),
            i = e.extra.activity_name;
          return l
            .plainFormat({ gameName: i, userName: a })
            .replaceAll("*", "");
        },
        L = (e) => {
          let { entry: t, channel: n, users: l, countOthers: a } = e;
          return Z.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED.plainFormat(
            {
              gameName: t.extra.activity_name,
              user1: E.ZP.getName(
                null == n ? void 0 : n.guild_id,
                null == n ? void 0 : n.id,
                l[0],
              ),
              user2: E.ZP.getName(
                null == n ? void 0 : n.guild_id,
                null == n ? void 0 : n.id,
                l[1],
              ),
              countOthers: a,
            },
          ).replaceAll("*", "");
        };
      t.ZP = (e) => {
        let {
            channel: t,
            entry: n,
            onReaction: E,
            onVoiceChannelPreview: S,
          } = e,
          { largeImage: A } = (0, v.rv)({ entry: n }),
          {
            user: R,
            details: y,
            activity: O,
            embeddedActivity: j,
          } = (0, I.n)(n),
          { primaryColor: w, secondaryColor: b } = (0, f.Z)(
            null == A ? void 0 : A.src,
          ),
          D = (0, i.e7)([m.default], () => m.default.locale),
          {
            displayParticipants: U,
            participant1: H,
            participant2: B,
            numOtherParticipants: k,
          } = (0, _.Z)(n, 3),
          V = () => {
            c.__(d._b.TEXT, h.I.NORMAL, {
              applicationId: n.extra.application_id,
            });
          },
          G = a.useCallback(
            (e) => {
              if (
                (null == A ? void 0 : A.src) == null ||
                null == t ||
                null == R
              )
                return;
              let l =
                k > 0
                  ? L({ entry: n, channel: t, users: [H, B], countOthers: k })
                  : M(n, t, R);
              return (0, p.C4)({
                entry: n,
                applicationImageSrc: null == A ? void 0 : A.src,
                avatarSrcs: U.map((e) => e.getAvatarURL(t.guild_id, 128)),
                description: l,
                timestamp: (0, C.yh)(n, D),
                colors: [w, b],
                channelId: e,
              });
            },
            [null == A ? void 0 : A.src, t, U, n, D, k, H, B, w, b, R],
          );
        if (null == R) return null;
        let F = (0, l.jsx)(T.PZ, { location: T.Gt.POPOUT, entry: n }),
          Y = (0, l.jsx)(g.wG, {
            channel: t,
            userDescription: (0, C.kr)(n)
              ? Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2
              : Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
            title: n.extra.activity_name,
            subtitle: y,
            badges: F,
            entry: n,
            onClickTitle: V,
            onClickSubtitle: V,
            onClickThumbnail: V,
          }),
          z = (0, s.Z)(O, N.xjy.JOIN) || (0, o.Z)(O),
          W = z
            ? (0, l.jsx)(u.Z, {
                isEmbedded: (0, o.Z)(O),
                embeddedActivity: j,
                activity: O,
                user: R,
                ButtonComponent: (e) =>
                  (0, l.jsx)(g.Ll, { IconComponent: r.DoorEnterIcon, ...e }),
              })
            : null,
          q = (0, l.jsx)(g.Ll, {
            onClick: V,
            IconComponent: r.AppsIcon,
            children: Z.Z.Messages.CONTENT_INVENTORY_VIEW_ACTIVITY,
          }),
          J = [z ? W : q].filter(x.lm);
        return (0, l.jsxs)(g.yR, {
          children: [
            Y,
            (0, l.jsx)(g.St, {
              children: (0, l.jsx)(g.WT, {
                onReaction: E,
                onVoiceChannelPreview: S,
                user: R,
                channel: t,
                generateReactionImage: G,
                reactionImageAltText: P(n, R),
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
          return b;
        },
        YN: function () {
          return y;
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
        m = n(704041),
        x = n(475676),
        E = n(439170),
        v = n(594174),
        _ = n(69259),
        C = n(370370),
        p = n(107062),
        f = n(91140),
        T = n(227172),
        g = n(551228),
        I = n(678869),
        N = n(278399),
        Z = n(886217),
        P = n(555672),
        M = n(644548),
        L = n(335326),
        S = n(268010),
        A = n(797342),
        R = n(206583);
      let y = 72;
      function O(e) {
        return (null == e ? void 0 : e.type) === E.so.CONTENT_INVENTORY ? y : 0;
      }
      let j = (e) => {
          let { entry: t, ...n } = e;
          switch (t.content_type) {
            case o.s.PLAYED_GAME:
              return (0, l.jsx)(f.Z, { ...n, entry: t });
            case o.s.WATCHED_MEDIA:
              return (0, l.jsx)(L.Z, { ...n, entry: t });
            case o.s.TOP_GAME:
              return (0, l.jsx)(P.ZP, { ...n, entry: t });
            case o.s.TOP_ARTIST:
              return (0, l.jsx)(N.ZP, { ...n, entry: t });
            case o.s.LISTENED_SESSION:
              return (0, l.jsx)(g.ZP, { ...n, entry: t });
            case o.s.LAUNCHED_ACTIVITY:
              return (0, l.jsx)(C.Z, { ...n, entry: t });
            case o.s.LEADERBOARD:
              return (0, l.jsx)(x.Z, { ...n, entry: t });
            default:
              return null;
          }
        },
        w = (e) => {
          let { requestId: t, closePopout: n, ...a } = e;
          return (0, l.jsx)(b, {
            onReaction: (e, l) => {
              (0, _.L)(e, {
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
              (0, _.L)(R.xP.VOICE_CHANNEL_PREVIEWED, {
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
        b = (e) => {
          let { entry: t, ...n } = e;
          switch (t.content_type) {
            case o.s.PLAYED_GAME:
              return (0, l.jsx)(T.Z, { ...n, entry: t });
            case o.s.WATCHED_MEDIA:
              return (0, l.jsx)(S.Z, { ...n, entry: t });
            case o.s.TOP_GAME:
              return (0, l.jsx)(M.Z, { ...n, entry: t });
            case o.s.TOP_ARTIST:
              return (0, l.jsx)(Z.Z, { ...n, entry: t });
            case o.s.LISTENED_SESSION:
              return (0, l.jsx)(I.Z, { ...n, entry: t });
            case o.s.LAUNCHED_ACTIVITY:
              return (0, l.jsx)(p.ZP, { ...n, entry: t });
            case o.s.LEADERBOARD:
              var a;
              return (0, l.jsx)(m.Z, {
                guildId:
                  null === (a = n.channel) || void 0 === a
                    ? void 0
                    : a.guild_id,
              });
            default:
              return null;
          }
        };
      t.ZP = a.memo((e) => {
        var t;
        let { index: i, ...o } = e,
          [m, x] = a.useState("default"),
          E = (0, s.JA)("".concat(i)),
          C =
            null === (t = v.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.isStaff(),
          { isRich: p, appName: f } = (0, A.n)(o.entry),
          T = {
            entry: o.entry,
            channelId: o.channel.id,
            guildId: o.channel.guild_id,
            requestId: o.requestId,
            richPresenceName: p ? f : void 0,
          },
          g = a.useRef(!1),
          [I, N] = a.useState(!1),
          [Z, P] = a.useState(!1),
          M = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled);
        a.useEffect(() => {
          I && M && P(!0);
        }, [I, M]);
        let L = a.useCallback(
            (e) => {
              if (!!C)
                (0, d.jW)(e, async () => {
                  let { default: e } = await n.e("153").then(n.bind(n, 330150));
                  return () =>
                    (0, l.jsx)(e, { entry: o.entry, requestId: o.requestId });
                });
            },
            [o, C],
          ),
          S = a.useCallback(() => {
            x(String(Date.now()));
          }, []),
          y = a.useCallback(
            r().throttle(
              (e) => {
                (0, _.L)(R.xP.CARD_POPOUT_OPEN, e);
              },
              2e3,
              { leading: !0, trailing: !1 },
            ),
            [],
          ),
          O = () => {
            (g.current = !1),
              setTimeout(() => {
                !g.current && (N(!1), P(M));
              }, 100);
          };
        return (0, l.jsx)("div", {
          onMouseEnter: () => {
            (g.current = !0),
              setTimeout(() => {
                g.current && N(!0), y(T);
              }, 100);
          },
          onMouseLeave: O,
          children: (0, l.jsx)(c.Popout, {
            renderPopout: (e) => {
              let { closePopout: t } = e;
              return (0, l.jsx)(w, {
                closePopout: t,
                updatePopoutPosition: S,
                ...o,
              });
            },
            position: "left",
            shouldShow: I,
            positionKey: m,
            onRequestOpen: () => y(T),
            onRequestClose: () => {
              Z && O();
            },
            spacing: 8,
            children: (e, t) => {
              let { isShown: n } = t;
              return (0, l.jsx)(c.Clickable, {
                ...e,
                ...E,
                focusProps: {
                  offset: { top: 4, bottom: 4, left: 4, right: 4 },
                },
                onClick: () => {
                  !I && N(!0);
                },
                onContextMenu: L,
                children: (0, l.jsx)(j, {
                  ...o,
                  selected: n,
                  hovered: g.current,
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
          return R;
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
        v = n(823379),
        _ = n(379357),
        C = n(192918),
        p = n(22211),
        f = n(561308),
        T = n(919394),
        g = n(438226),
        I = n(206295),
        N = n(91140),
        Z = n(297781),
        P = n(591853),
        M = n(410441),
        L = n(797342),
        S = n(981631),
        A = n(689938);
      let R = {
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
            onUserPopoutClosed: y,
          } = e,
          { largeImage: O } = (0, _.rv)({ entry: n }),
          { user: j, details: w, appName: b, activity: D } = (0, L.n)(n),
          { primaryColor: U, secondaryColor: H } = (0, I.Z)(
            null == O ? void 0 : O.src,
          ),
          B = (0, r.e7)([m.default], () => m.default.locale),
          { streamPreviewUrl: k, stream: V } = (0, p.Z)(n),
          {
            displayParticipants: G,
            participant1: F,
            participant2: Y,
            numOtherParticipants: z,
          } = (0, C.Z)(n, 3),
          W = a.useCallback(
            (e) => {
              if (
                (null == O ? void 0 : O.src) == null ||
                null == t ||
                null == j
              )
                return;
              let l =
                z > 0
                  ? (0, g.VY)({
                      entry: n,
                      channel: t,
                      users: [F, Y],
                      countOthers: z,
                    })
                  : (0, g.HV)(n, t, j);
              return (0, T.SO)({
                entry: n,
                applicationImageSrc: null == O ? void 0 : O.src,
                avatarSrcs: G.map((e) => e.getAvatarURL(t.guild_id, 128)),
                description: l,
                timestamp: (0, f.yh)(n, B),
                colors: [U, H],
                channelId: e,
              });
            },
            [null == O ? void 0 : O.src, t, G, n, B, z, F, Y, U, H, j],
          );
        if (null == j) return null;
        let q = null != n.extra.platform ? R[n.extra.platform] : null,
          J = (0, l.jsx)(Z.Gk, {
            location: null == k ? Z.Gt.POPOUT : Z.Gt.STREAMING_POPOUT,
            children: N.W.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
          }),
          K =
            null == k
              ? (0, l.jsx)(P.wG, {
                  channel: t,
                  headerIcons:
                    null == q
                      ? null
                      : (0, l.jsx)(M.Z, {
                          Icon: q,
                          "aria-label":
                            A.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
                        }),
                  userDescription: (0, f.kr)(n)
                    ? A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2
                    : A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                  title: b,
                  subtitle: w,
                  badges: J,
                  entry: n,
                  disableGameProfileLinks: i,
                  onUserPopoutClosed: y,
                })
              : (0, l.jsx)(P.jL, {
                  channel: t,
                  streamPreviewSrc: k,
                  title: n.extra.game_name,
                  subtitle: w,
                  badges: J,
                  userDescription:
                    A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING_V2,
                  entry: n,
                  stream: V,
                  onUserPopoutClosed: y,
                }),
          X =
            (0, o.Z)(D, S.xjy.JOIN) || (0, u.Z)(D)
              ? (0, l.jsx)(d.Z, {
                  activity: D,
                  user: j,
                  ButtonComponent: (e) =>
                    (0, l.jsx)(P.Ll, {
                      IconComponent: s.GameControllerIcon,
                      ...e,
                    }),
                })
              : null,
          $ = [
            X,
            (0, c.Z)(D)
              ? (0, l.jsx)(h.Z, {
                  activity: D,
                  ButtonComponent: (e) =>
                    (0, l.jsx)(P.Ll, { IconComponent: s.EyeIcon, ...e }),
                })
              : null,
          ].filter(v.lm);
        return (0, l.jsxs)(P.yR, {
          children: [
            K,
            (0, l.jsx)(P.St, {
              children: (0, l.jsx)(P.WT, {
                onReaction: x,
                onVoiceChannelPreview: E,
                user: j,
                channel: t,
                generateReactionImage: W,
                reactionImageAltText: (0, g.IS)(n, j),
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
          return y;
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
        v = n(5192),
        _ = n(379357),
        C = n(561308),
        p = n(256726),
        f = n(206295),
        T = n(551228),
        g = n(591853),
        I = n(371991),
        N = n(410441),
        Z = n(981631),
        P = n(616922),
        M = n(689938),
        L = n(290500),
        S = n(738127);
      let A = (e, t, n) => {
        let { artist: l, media: a } = e,
          i =
            M.Z.Messages
              .MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST,
          r = v.ZP.getName(t.guild_id, t.id, n);
        return i
          .plainFormat({ artist: l, userName: r, media: a })
          .replaceAll("*", "");
      };
      function R(e) {
        let { activity: t } = e,
          n = t.timestamps,
          i = (0, I.tS)(),
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
              durationTimestamp: (0, C.T_)({ start: 0 }, r),
            };
          }, [t, i]);
        return null == s
          ? null
          : (0, l.jsxs)("div", {
              className: L.listeningTimeline,
              children: [
                (0, l.jsx)(I.x3, { entry: n }),
                (0, l.jsx)("div", {
                  className: L.seekBarContainer,
                  children: (0, l.jsx)("div", {
                    className: L.seekBarFill,
                    style: s,
                  }),
                }),
                (0, l.jsx)(o.Text, {
                  className: L.timestamp,
                  variant: "text-xs/normal",
                  tabularNumbers: !0,
                  color: void 0,
                  children: r,
                }),
              ],
            });
      }
      function y(e) {
        var t, n, v;
        let I,
          L,
          y,
          {
            channel: O,
            entry: j,
            closePopout: w,
            onReaction: b,
            onVoiceChannelPreview: D,
          } = e,
          { largeImage: U } = (0, _.rv)({ entry: j }),
          {
            activity: H,
            currentEntry: B,
            artist: k,
            title: V,
            user: G,
          } = (0, T.pi)(j),
          { primaryColor: F, secondaryColor: Y } = (0, f.Z)(
            null == U ? void 0 : U.src,
          ),
          z = (0, r.e7)(
            [c.Z, x.default],
            () =>
              (null == H ? void 0 : H.type) === Z.IIU.LISTENING && null != G
                ? (0, h.Z)(c.Z, x.default, G, H)
                : void 0,
            [H, G],
            s.Z,
          ),
          W = a.useCallback(() => {
            var e;
            if (null == O || null == G) return;
            let t =
                null === (e = H.timestamps) || void 0 === e ? void 0 : e.start,
              n = (0, C.T_)(null != t ? { start: t } : j, Date.now());
            return (0, p.CR)({
              user: G,
              channel: O,
              mediaImageSrc: null == U ? void 0 : U.src,
              artist: k,
              description: A({ artist: k, media: V }, O, G),
              colors: [F, Y],
              badges: (0, p.jE)({ timestamp: n }),
            });
          }, [H, k, O, j, null == U ? void 0 : U.src, F, Y, V, G]);
        if (null == H || null == B) return null;
        let q = k,
          J = [];
        if (B.media.provider === i.p.SPOTIFY) {
          (L = () => {
            (0, u.aG)(H);
          }),
            (y = () => {
              (0, u.Z5)(H, G.id);
            }),
            (I = () => {
              (0, u.aG)(H);
            });
          (q = (0, l.jsx)(d.Z, {
            artists: k,
            canOpen: null != H.sync_id,
            linkClassName: S.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
              (0, u.d$)(H, G.id, e);
            },
          })),
            (null == z ? void 0 : z.syncDisabled) === !1 &&
              J.push(
                (0, l.jsx)(
                  g.Ll,
                  {
                    onClick: () => {
                      (0, m.Z)(z, P.kG.USER_ACTIVITY_SYNC), w();
                    },
                    IconComponent: o.UserPlayIcon,
                    children:
                      M.Z.Messages
                        .ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG,
                  },
                  "listen-along",
                ),
              );
        }
        let K = (0, l.jsx)(g.wG, {
          onClickThumbnail: y,
          channel: O,
          entry: j,
          headerIcons:
            B.media.provider === i.p.SPOTIFY
              ? (0, l.jsx)(N.Z, {
                  onClick: I,
                  "aria-label":
                    M.Z.Messages
                      .ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
                  Icon: E.Z,
                })
              : null,
          userDescription: (0, C.kr)(j)
            ? M.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING_V2
            : M.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
          title: V,
          onClickTitle: L,
          subtitle: q,
          badges: null,
          children:
            (null === (t = H.timestamps) || void 0 === t ? void 0 : t.start) !=
              null && (0, l.jsx)(R, { activity: H }),
        });
        return (0, l.jsxs)(g.yR, {
          children: [
            K,
            (0, l.jsx)(g.St, {
              children: (0, l.jsx)(g.WT, {
                onReaction: b,
                onVoiceChannelPreview: D,
                user: G,
                channel: O,
                generateReactionImage: W,
                reactionImageAltText:
                  ((n = k),
                  (v = G),
                  M.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format(
                    { username: v.username, activity: n },
                  )),
                entry: j,
                buttons: J,
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
        v = n(278399),
        _ = n(297781),
        C = n(591853),
        p = n(410441),
        f = n(616922),
        T = n(689938);
      let g = (e, t, n, l) => {
          let a = (function (e) {
              if (e === i._.WEEK)
                return T.Z.Messages
                  .MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_WEEK_POPOUT;
            })(l),
            r = h.ZP.getName(t.guild_id, t.id, n),
            s = e.extra.artist.name;
          return a.plainFormat({ artist: s, userName: r }).replaceAll("*", "");
        },
        I = (e, t) =>
          T.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_TOP_ARTIST.format({
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
          { parent_title: N, provider: Z, image_url: P } = n.extra.media,
          M = n.extra.artist.name,
          L = (0, s.e7)([u.default], () => u.default.getUser(n.author_id)),
          { primaryColor: S, secondaryColor: A } = (0, E.Z)(P),
          R = (0, m.Nq)(n),
          y = a.useCallback(() => {
            if (null == t || null == L || !(0, d.Hi)(R, v.y9)) return;
            let e = g(n, t, L, R);
            return (0, x.CR)({
              user: L,
              channel: t,
              mediaImageSrc: P,
              artist: M,
              description: e,
              colors: [S, A],
              badges: (0, x.UU)(n),
            });
          }, [P, M, t, n, S, R, A, L]);
        if (null == L || !(0, d.Hi)(R, v.y9)) return null;
        let O = () => {
          let e = f.Hw.ALBUM,
            t = o.Z.isProtocolRegistered()
              ? f.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id)
              : f.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
          window.open(t);
        };
        return (0, l.jsxs)(C.yR, {
          children: [
            (0, l.jsx)(C.wG, {
              onClickTitle: O,
              onClickSubtitle: () => {
                let e = f.Hw.ARTIST,
                  t = o.Z.isProtocolRegistered()
                    ? f.C7.PLAYER_OPEN(e, n.extra.artist.external_id)
                    : f.C7.WEB_OPEN(e, n.extra.artist.external_id);
                window.open(t);
              },
              onClickThumbnail: O,
              channel: t,
              entry: n,
              headerIcons:
                Z === r.p.SPOTIFY
                  ? (0, l.jsx)(p.Z, {
                      Icon: c.Z,
                      "aria-label": T.Z.Messages.SPOTIFY,
                    })
                  : null,
              userDescription:
                T.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
              title: N,
              subtitle: M,
              badges: (0, l.jsx)(_.Gk, {
                location: _.Gt.POPOUT,
                children: v.Ho.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
              }),
            }),
            (0, l.jsx)(C.St, {
              children: (0, l.jsx)(C.WT, {
                onReaction: i,
                onVoiceChannelPreview: h,
                user: L,
                channel: t,
                generateReactionImage: y,
                reactionImageAltText: I(n, L),
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
        v = n(410441),
        _ = n(797342),
        C = n(689938);
      let p = (e, t, n, l) => {
          let a = (function (e) {
              if (e === i._.WEEK)
                return C.Z.Messages
                  .MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT;
            })(l),
            r = s.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.game_name;
          return a
            .plainFormat({ gameName: o, userName: r })
            .replaceAll("*", "");
        },
        f = (e, t) =>
          C.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: t.username,
            activity: e.extra.game_name,
          });
      t.Z = (e) => {
        let {
            channel: t,
            entry: n,
            disableGameProfileLinks: i,
            onReaction: s,
            onVoiceChannelPreview: T,
          } = e,
          { largeImage: g } = (0, o.rv)({ entry: n }),
          { user: I, details: N, appName: Z } = (0, _.n)(n),
          { primaryColor: P, secondaryColor: M } = (0, d.Z)(
            null == g ? void 0 : g.src,
          ),
          L = (0, u.yA)(n),
          S = (0, u.Nq)(n),
          A = a.useCallback(
            (e) => {
              if (
                null != t &&
                null != I &&
                null != L &&
                null != S &&
                !!(0, m.qy)(S)
              )
                return (0, c.SO)({
                  entry: n,
                  applicationImageSrc: null == g ? void 0 : g.src,
                  avatarSrcs: [
                    I.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                  ],
                  description: p(n, t, I, S),
                  timestamp:
                    C.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format(
                      { hours: Math.round(L / r.Z.Seconds.HOUR) },
                    ),
                  colors: [P, M],
                  channelId: e,
                });
            },
            [null == g ? void 0 : g.src, t, L, n, P, S, M, I],
          );
        if (null == I || null == L || null == S || !(0, m.qy)(S)) return null;
        let R = null != n.extra.platform ? h.v[n.extra.platform] : null;
        return (0, l.jsxs)(E.yR, {
          children: [
            (0, l.jsx)(E.wG, {
              channel: t,
              headerIcons:
                null == R
                  ? null
                  : (0, l.jsx)(v.Z, {
                      Icon: R,
                      "aria-label":
                        C.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
                    }),
              entry: n,
              userDescription:
                C.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
              title: Z,
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
                onVoiceChannelPreview: T,
                user: I,
                channel: t,
                generateReactionImage: A,
                reactionImageAltText: f(n, I),
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
        v = n(335326),
        _ = n(297781),
        C = n(591853),
        p = n(410441),
        f = n(689938);
      let T = (e, t, n) => {
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
        g = (e, t) =>
          f.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
            username: t.username,
            activity: e.extra.media_title,
          });
      t.Z = (e) => {
        let {
            channel: t,
            entry: n,
            onReaction: c,
            onVoiceChannelPreview: I,
          } = e,
          N = (0, i.e7)([o.default], () => o.default.getUser(n.author_id)),
          { largeImage: Z } = (0, h.rv)({ entry: n }),
          { primaryColor: P, secondaryColor: M } = (0, E.Z)(
            null == Z ? void 0 : Z.src,
          ),
          L = (0, i.e7)([s.default], () => s.default.locale),
          S = (0, m.ap)(n.extra.media_assets_large_text),
          A = a.useCallback(
            (e) => {
              if (null != N && (null == Z ? void 0 : Z.src) != null)
                return (0, x.B)({
                  entry: n,
                  mediaImageSrc: null == Z ? void 0 : Z.src,
                  avatarSrc: N.getAvatarURL(
                    null == t ? void 0 : t.guild_id,
                    128,
                  ),
                  description: T(n, t, N),
                  timestamp: (0, m.yh)(n, L),
                  episodeDescription: S,
                  colors: [P, M],
                  channelId: e,
                });
            },
            [t, n, S, L, null == Z ? void 0 : Z.src, P, M, N],
          ),
          R = () => {
            if (null == n.extra.url) return;
            let e = d.Z.safeParseWithQuery(n.extra.url);
            if (null != e && null != e.protocol && null != e.hostname)
              (0, u.q)({ href: d.Z.format(e), trusted: !1 });
          };
        return null == N
          ? null
          : (0, l.jsxs)(C.yR, {
              children: [
                (0, l.jsx)(C.wG, {
                  channel: t,
                  entry: n,
                  userDescription: (0, m.kr)(n)
                    ? f.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING_V2
                    : f.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED_V2,
                  title: n.extra.media_title,
                  subtitle: n.extra.media_subtitle,
                  headerIcons: (0, l.jsx)(p.Z, {
                    Icon: r.CrunchyrollNeutralIcon,
                    "aria-label": f.Z.Messages.CRUNCHYROLL,
                  }),
                  badges: (0, l.jsx)(_.Gk, {
                    location: _.Gt.POPOUT,
                    children: v.t.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                  }),
                  onClickTitle: R,
                  onClickThumbnail: R,
                }),
                (0, l.jsx)(C.St, {
                  children: (0, l.jsx)(C.WT, {
                    onReaction: c,
                    onVoiceChannelPreview: I,
                    user: N,
                    channel: t,
                    generateReactionImage: A,
                    reactionImageAltText: g(n, N),
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
        u = n(765388),
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
          return eT;
        },
        St: function () {
          return ex;
        },
        WT: function () {
          return eE;
        },
        jL: function () {
          return ef;
        },
        wG: function () {
          return ep;
        },
        yR: function () {
          return ed;
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
        v = n(872810),
        _ = n(607070),
        C = n(220779),
        p = n(201133),
        f = n(557135),
        T = n(194082),
        g = n(605236),
        I = n(543241),
        N = n(318374),
        Z = n(258609),
        P = n(810568),
        M = n(168524),
        L = n(382182),
        S = n(871118),
        A = n(565138),
        R = n(66999),
        y = n(790642),
        O = n(359110),
        j = n(12168),
        w = n(237583),
        b = n(131704),
        D = n(592125),
        U = n(430824),
        H = n(496675),
        B = n(699516),
        k = n(9156),
        V = n(594174),
        G = n(979651),
        F = n(938475),
        Y = n(626135),
        z = n(768581),
        W = n(5192),
        q = n(379357),
        J = n(26033),
        K = n(91907),
        X = n(358696),
        $ = n(656709),
        Q = n(192918),
        ee = n(22211),
        et = n(561308),
        en = n(206295),
        el = n(111386),
        ea = n(797342),
        ei = n(896449),
        er = n(469153),
        es = n(206583),
        eo = n(981631),
        eu = n(689938),
        ec = n(738127);
      function ed(e) {
        let { children: t } = e,
          n = a.useRef(null);
        return (
          (0, h.useFocusLock)(n),
          (0, l.jsx)("div", { className: ec.popout, ref: n, children: t })
        );
      }
      function eh(e) {
        let {
            children: t,
            backgroundImgSrc: n,
            className: a,
            style: i = {},
          } = e,
          { primaryColor: s, secondaryColor: o } = (0, en.Z)(n);
        return (
          null != n &&
            (i.background = "linear-gradient(45deg, "
              .concat(s, ", ")
              .concat(o, ")")),
          (0, l.jsx)(h.ThemeProvider, {
            theme: eo.BRd.DARK,
            children: (e) =>
              (0, l.jsx)("div", {
                "data-disable-adaptive-theme": !0,
                className: r()(ec.hero, e, a),
                style: i,
                children: t,
              }),
          })
        );
      }
      let em = a.createContext(null);
      function ex(e) {
        let { children: t } = e,
          n = a.useRef(null);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className: ec.interactionsContainerHeader,
              ref: (e) => (n.current = e),
            }),
            (0, l.jsx)("div", {
              className: ec.interactionsContainer,
              children: (0, l.jsx)(em.Provider, {
                value: n.current,
                children: t,
              }),
            }),
          ],
        });
      }
      function eE(e) {
        let {
            channel: t,
            user: n,
            generateReactionImage: i,
            reactionImageAltText: r,
            onReaction: s,
            entry: E,
            buttons: v = [],
            header: _,
            onVoiceChannelPreview: T,
          } = e,
          [I, N] = a.useState(!1),
          [Z, P] = a.useState(null),
          M = (0, u.e7)(
            [H.Z],
            () =>
              null != t &&
              eo.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) &&
              H.Z.can(eo.Plq.SEND_MESSAGES, t),
          ),
          [L, S] = a.useState(!1),
          [j, z] = a.useState(!1),
          { voiceBar: q, joinVoiceButton: J } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: i } = e,
              { streamPreviewUrl: r, channel: s } = (0, ee.Z)(n),
              { isRich: o, appName: c } = (0, ea.n)(n),
              { needSubscriptionToAccess: m } = (0, R.Z)(
                null == t ? void 0 : t.id,
              ),
              E = (0, u.e7)([U.Z], () =>
                null != s ? U.Z.getGuild(s.guild_id) : void 0,
              ),
              v = (0, u.Wu)(
                [F.ZP],
                () => (null != s ? F.ZP.getVoiceStatesForChannel(s) : []),
                [s],
              ),
              _ = (0, u.e7)([G.Z], () =>
                G.Z.isInChannel(null == s ? void 0 : s.id),
              ),
              C = a.useMemo(() => {
                for (let e of v) {
                  let t = D.Z.getDMFromUserId(e.user.id),
                    n = null != t && k.ZP.isChannelMuted(null, t),
                    l = B.Z.isBlocked(e.user.id);
                  if (n || l) return !0;
                }
                return !1;
              }, [v]);
            if (null == s || null == E)
              return { voiceBar: void 0, joinVoiceButton: void 0 };
            let p = null != r,
              T = () => {
                x.Z.updateChatOpen(s.id, !0), (0, O.Kh)(s.id);
                null == i || i(s, o ? c : void 0);
              },
              g = () => {
                f.Z.handleVoiceConnect({
                  channel: s,
                  connected: _,
                  needSubscriptionToAccess: m,
                  routeDirectlyToChannel: !0,
                });
              },
              I = (e) => {
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
                              className: ec.popoutBlockedWarningIcon,
                            }),
                          eu.Z.Messages
                            .MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING,
                        ],
                      })
                    : n;
                return (0, l.jsx)(
                  h.Tooltip,
                  {
                    "aria-label": a
                      ? eu.Z.Messages
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
                    className: ec.voiceChannelPopoutReactorHeader,
                    children: [
                      (0, l.jsx)(I, {
                        text: eu.Z.Messages
                          .MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                        hasBlockedOrMutedVCParticipant: C,
                        children: (e) =>
                          (0, l.jsxs)(h.Clickable, {
                            ...e,
                            "aria-label":
                              eu.Z.Messages
                                .MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                            onClick: T,
                            className: ec.voiceChannelPopoutReactorChannel,
                            children: [
                              (0, l.jsx)(A.Z, {
                                guild: E,
                                size: A.Z.Sizes.SMOL,
                                className: ec.voiceChannelGuildIcon,
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
                                className: ec.voiceChannelName,
                                children: s.name,
                              }),
                            ],
                          }),
                      }),
                      (0, l.jsx)(w.Z, {
                        guildId: E.id,
                        users: v,
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
                            className: ec.voiceChannelAdditionalParticipants,
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
                    className: ec.primaryActionPopoutDivider,
                  }),
                ],
              });
            return {
              voiceBar: N,
              joinVoiceButton: _
                ? null
                : (0, l.jsx)(I, {
                    hasBlockedOrMutedVCParticipant: C,
                    children: (e) =>
                      (0, l.jsx)(eT, {
                        ...e,
                        color: h.Button.Colors.GREEN,
                        onClick: g,
                        IconComponent: p ? h.ScreenIcon : h.VoiceNormalIcon,
                        children: p ? eu.Z.Messages.WATCH : eu.Z.Messages.JOIN,
                      }),
                  }),
            };
          })({ channel: t, entry: E, onVoiceChannelPreview: T }),
          { embeddedActivity: K } = (0, et.qy)(E),
          X = (function (e) {
            let t = (0, u.e7)([U.Z], () =>
                U.Z.getGuild(null == e ? void 0 : e.guildId),
              ),
              n = (0, u.e7)([D.Z], () =>
                D.Z.getChannel(null == e ? void 0 : e.channelId),
              ),
              a = (0, u.Wu)([V.default], () => {
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
            return null != e && null != t && null != n && b.sR.has(n.type)
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)("div", {
                      className: ec.voiceChannelPopoutReactorHeader,
                      children: [
                        (0, l.jsxs)(h.Clickable, {
                          "aria-label": eu.Z.Messages.VIEW_CHANNEL,
                          onClick: () => (0, O.Kh)(n.id),
                          className: ec.voiceChannelPopoutReactorChannel,
                          children: [
                            (0, l.jsx)(A.Z, {
                              guild: t,
                              size: A.Z.Sizes.SMOL,
                              className: ec.voiceChannelGuildIcon,
                              active: !0,
                            }),
                            (0, l.jsx)(h.ChevronSmallRightIcon, {
                              size: "xxs",
                              color: d.Z.colors.INTERACTIVE_NORMAL,
                            }),
                            (0, l.jsx)(h.TextIcon, {
                              size: "xs",
                              color: d.Z.colors.TEXT_NORMAL,
                            }),
                            (0, l.jsx)(h.Text, {
                              variant: "text-sm/medium",
                              color: "text-normal",
                              className: ec.voiceChannelName,
                              children: null == n ? void 0 : n.name,
                            }),
                          ],
                        }),
                        (0, l.jsx)(w.Z, {
                          guildId: t.id,
                          users: a,
                          max: 3,
                          renderUser: (e, n) =>
                            (0, l.jsx)(h.Avatar, {
                              src: e.getAvatarURL(t.id, 16),
                              size: h.AvatarSizes.SIZE_16,
                              "aria-label": "avatar",
                              className: n,
                            }),
                          renderMoreUsers: (e) =>
                            (0, l.jsx)("div", {
                              className: ec.voiceChannelAdditionalParticipants,
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
                      className: ec.primaryActionPopoutDivider,
                    }),
                  ],
                })
              : null;
          })(K),
          Q = null != J && 0 === v.length ? [J] : v,
          en = Q.length > 0,
          ei = Q.length >= 2,
          [ed, eh] = a.useState(!en),
          em = W.ZP.getName(
            null == t ? void 0 : t.guild_id,
            null == t ? void 0 : t.id,
            n,
          ),
          ex = null != t && I ? "#".concat(t.name) : "@".concat(em),
          eE = I
            ? eu.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER
            : eu.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL,
          e_ = async (e) => {
            let l;
            if (null != e) {
              if (
                (Y.default.track(eo.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                  surface_type: es.Kd.GUILD_MEMBER_LIST,
                  channel_id: null == t ? void 0 : t.id,
                  guild_id: null == t ? void 0 : t.guild_id,
                }),
                (0, g.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                S(!0),
                z(!1),
                I)
              )
                o()(
                  null != t,
                  "shareToChannelMode should only be true if a valid channel is passed",
                ),
                  (l = t);
              else {
                var a;
                let e = await m.Z.getOrEnsurePrivateChannel(n.id);
                l = null !== (a = D.Z.getChannel(e)) && void 0 !== a ? a : null;
              }
              return (
                o()(null != l, "Send channel must be defined"),
                ep({
                  reply: ":".concat(e.name, ":"),
                  sendToChannel: l,
                  onComplete: (e, t) => {
                    z(!0),
                      setTimeout(() => {
                        S(!1), s(e, t);
                      }, 600);
                  },
                  interactionType: es.xP.REACTION_EMOJI_REACT_SENT,
                  requiresChannelReadiness: !1,
                })
              );
            }
          },
          eC = async (e) => {
            let l;
            if (((0, g.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), I))
              o()(
                null != t,
                "shareToChannelMode should only be true if a valid channel is passed",
              ),
                (l = t);
            else {
              let e = await m.Z.openPrivateChannel(n.id, !1, !1),
                t = D.Z.getChannel(e);
              o()(null != t, "DM channel must be defined"), (l = t);
            }
            let a =
              l.type === eo.d4z.DM
                ? es.xP.DM_REACTION_MESSAGE_SENT
                : es.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return ep({
              reply: e,
              sendToChannel: l,
              interactionType: a,
              onComplete: s,
              requiresChannelReadiness: !0,
            });
          },
          ep = async (e) => {
            let {
              reply: t,
              sendToChannel: n,
              onComplete: l,
              interactionType: a,
              requiresChannelReadiness: s,
            } = e;
            if ((null == Z || Z.focus(), (0, y.Io)("ContentPopout Reactor")))
              await (0, $.p)({
                channel: n,
                content: t,
                entry: E,
                whenReady: s,
              });
            else {
              var u;
              let e = await ((u = i),
              async function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                try {
                  return await u(...t);
                } catch (e) {
                  throw e;
                }
              })(n.id);
              o()(null != e, "Reaction image must be defined"),
                await (0, p.B)({ file: e, channel: n, altText: r, reply: t });
            }
            null == l || l(a, n);
          },
          ef = null != _ ? _ : null != q ? q : null != X ? X : void 0;
        return (
          a.useEffect(() => {
            ed && (null == Z || Z.focus());
          }, [Z, I, ed]),
          (0, l.jsxs)("div", {
            style: { pointerEvents: L ? "none" : "all" },
            children: [
              (0, l.jsx)(er.Z, {
                sent: j,
                shown: L,
                className: ec.toastContainer,
              }),
              null != ef
                ? ef
                : (0, l.jsx)(el.Z, {
                    children: (0, l.jsxs)("div", {
                      className: ec.emojiHotrailShareToChannel,
                      children: [
                        (0, l.jsx)(ev, { channel: t, onClickSuggestion: e_ }),
                        (0, l.jsx)(C.dE, { onSelectEmoji: e_ }),
                      ],
                    }),
                  }),
              (0, l.jsxs)("div", {
                className: ed
                  ? ec.inputContainerShareToChannel
                  : ec.hiddenButRenderedInputField,
                children: [
                  (0, l.jsx)(C.A7, {
                    placeholder: eu.Z.Messages.TEXTAREA_PLACEHOLDER.format({
                      channel: ex,
                    }),
                    onEnter: eC,
                    setEditorRef: (e) => P(e),
                    channel: I ? t : void 0,
                    showEmojiButton: null != ef,
                    renderAttachButton: M
                      ? () =>
                          (0, l.jsx)(h.Tooltip, {
                            text: eE,
                            children: (e) =>
                              (0, l.jsx)(h.Clickable, {
                                ...e,
                                className: ec.shareToChannelButton,
                                onClick: () => N((e) => !e),
                                children: I
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
                  en &&
                    (0, l.jsx)(h.Clickable, {
                      onClick: () => eh(!1),
                      className: ec.primaryActionPopoutMessageCloseIcon,
                      children: (0, l.jsx)(h.XSmallIcon, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: d.Z.colors.ICON_PRIMARY,
                      }),
                    }),
                ],
              }),
              !1 === ed &&
                (0, l.jsxs)("div", {
                  className: ec.primaryActionPopoutActionButtons,
                  children: [
                    (0, l.jsxs)(
                      h.Button,
                      {
                        className: ec.secondaryButton,
                        color: h.Button.Colors.CUSTOM,
                        onClick: () => eh(!0),
                        innerClassName: ec.iconButton,
                        size: ei ? h.Button.Sizes.MIN : h.Button.Sizes.LARGE,
                        children: [
                          (0, l.jsx)(h.ChatIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            colorClass: ec.secondaryText,
                          }),
                          !ei &&
                            (0, l.jsx)(h.Text, {
                              variant: "text-md/semibold",
                              className: ec.secondaryText,
                              children: eu.Z.Messages.USER_POPOUT_MESSAGE,
                            }),
                        ],
                      },
                      "toggleMessageMode",
                    ),
                    Q,
                  ],
                }),
            ],
          })
        );
      }
      let ev = (e) => {
        let { channel: t, onClickSuggestion: n } = e,
          [i, r] = a.useState(!1);
        a.useEffect(() => {
          r(!0);
        }, []);
        let s = !!_.Z.keyboardModeEnabled && !i,
          o = (0, I.wC)(null == t ? void 0 : t.guild_id)
            .slice(0, 5)
            .map((e) =>
              null == e.id
                ? { emoji: e, url: e.url }
                : {
                    emoji: e,
                    url: (0, z.gT)({
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
                      text: eu.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format(
                        { emojiName: t.name },
                      ),
                      position: "top",
                      "aria-label":
                        eu.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format(
                          { emojiName: t.name },
                        ),
                      color: h.Tooltip.Colors.PRIMARY,
                      shouldShow: !s && void 0,
                      children: (0, l.jsx)(j.u, {
                        emoji: t,
                        isDisabled: !i,
                        onClick: () => n(t),
                        className: ec.emoji,
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
          } = (0, Q.Z)(a, 3),
          E = (0, u.e7)([V.default], () => V.default.getUser(a.author_id)),
          { streamPreviewUrl: v } = (0, ee.Z)(a),
          _ = [d, m];
        return (0, l.jsxs)("div", {
          className: ec.popoutContentHeader,
          children: [
            (0, l.jsxs)("div", {
              className: ec.popoutUserContainer,
              children: [
                (0, l.jsx)(N.Z, {
                  maxUsers: 3,
                  users: c,
                  size: h.AvatarSizes.SIZE_24,
                  avatarClassName: ec.popoutStackedAvatar,
                  hideOverflowCount: !0,
                  disableUsernameTooltip: !0,
                  onUserPopoutClosed: s,
                }),
                (0, l.jsx)(h.Spacer, { size: 8, horizontal: !0 }),
                (0, l.jsx)(h.Heading, {
                  variant: "heading-sm/normal",
                  className: ec.popoutTextSecondary,
                  children: n.format({
                    user0: W.ZP.getName(o, null == t ? void 0 : t.id, _[0]),
                    user1: W.ZP.getName(o, null == t ? void 0 : t.id, _[1]),
                    countOthers: x,
                    countOthersHook: (e, t) =>
                      (0, l.jsx)(
                        h.Text,
                        {
                          variant: "text-sm/medium",
                          className: r()(
                            ec.popoutUsername,
                            ec.popoutTextPrimary,
                          ),
                          children: e,
                        },
                        t,
                      ),
                    name0Hook: (e, n) =>
                      (0, l.jsx)(
                        K.Z,
                        {
                          textClassName: r()(
                            ec.popoutUsername,
                            ec.popoutTextPrimary,
                          ),
                          text: e,
                          user: _[0],
                          channel: t,
                          onPopoutClosed: s,
                        },
                        n,
                      ),
                    name1Hook: (e, n) =>
                      (0, l.jsx)(
                        K.Z,
                        {
                          textClassName: r()(
                            ec.popoutUsername,
                            ec.popoutTextPrimary,
                          ),
                          text: e,
                          user: _[1],
                          channel: t,
                          onPopoutClosed: s,
                        },
                        n,
                      ),
                  }),
                }),
              ],
            }),
            null != v && (0, l.jsx)(T.ZP, { size: T.ZP.Sizes.SMALL }),
            null != E &&
              (0, l.jsx)(ei.Z, {
                user: E,
                channel: t,
                guildId: o,
                entry: a,
                disableGameProfileLinks: i,
              }),
          ],
        });
      }
      function eC(e) {
        let { children: t, onClick: n } = e;
        return null == n
          ? (0, l.jsx)(l.Fragment, { children: t })
          : (0, l.jsx)(h.Clickable, {
              className: ec.maybeClickable,
              onClick: n,
              children: t,
            });
      }
      function ep(e) {
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
          { entry: v } = E,
          _ = (0, J.dX)(v),
          C = (0, M.Z)({
            location: "ContentPopout",
            applicationId:
              _ && !m
                ? null === (t = v.extra) || void 0 === t
                  ? void 0
                  : t.application_id
                : void 0,
            source: P.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: v.author_id,
          }),
          { largeImage: p, smallImage: f } = (0, q.rv)({ entry: v }),
          T = _ ? C : void 0;
        return (0, l.jsxs)("div", {
          className: ec.popoutContentWrapper,
          children: [
            (0, l.jsx)(e_, {
              disableGameProfileLinks: m,
              ...E,
              onUserPopoutClosed: x,
            }),
            (0, l.jsxs)(eh, {
              backgroundImgSrc: null == p ? void 0 : p.src,
              children: [
                (0, l.jsxs)("div", {
                  className: ec.popoutHeroInner,
                  children: [
                    (0, l.jsx)("div", {
                      className: ec.popoutThumbnailContainer,
                      children: (0, l.jsx)(X.E, {
                        image: p,
                        smallImage: f,
                        onClick: null != o ? o : T,
                        size: X.J.SIZE_72,
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: ec.popoutHeroBody,
                      children: [
                        (0, l.jsx)(eC, {
                          onClick: null != u ? u : T,
                          children: (0, l.jsx)(h.Heading, {
                            variant: "heading-md/medium",
                            className: r()(ec.popoutHeroTextPrimary, {
                              [ec.popoutHeroTextPrimaryShort]: null != d,
                            }),
                            lineClamp: 3,
                            children: n,
                          }),
                        }),
                        null != a
                          ? (0, l.jsx)(eC, {
                              onClick: null != c ? c : T,
                              children: (0, l.jsx)(h.Text, {
                                variant: "text-sm/normal",
                                className: ec.popoutHeroTextSecondary,
                                children: a,
                              }),
                            })
                          : null,
                        (0, l.jsx)(h.Spacer, { size: 8 }),
                        i,
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: ec.popoutHeaderIcons,
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
      function ef(e) {
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
          _ = (0, u.e7)([D.Z], () =>
            D.Z.getChannel(null == s ? void 0 : s.channelId),
          ),
          [C] = a.useMemo(() => (0, L.p9)(_, G.Z, U.Z, H.Z, Z.Z), [_]),
          { entry: p } = x,
          f = (0, J.dX)(p),
          T = (0, M.Z)({
            location: "ContentPopout",
            applicationId: f
              ? null === (t = p.extra) || void 0 === t
                ? void 0
                : t.application_id
              : void 0,
            source: P.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: p.author_id,
          }),
          g = f ? T : void 0,
          {
            activity: I,
            activityApplication: N,
            fallbackApplication: A,
          } = (0, et.qy)(p),
          { largeImage: R, smallImage: y } = (0, q.YC)(I, null != N ? N : A);
        return null == s
          ? null
          : (0, l.jsxs)("div", {
              className: ec.popoutContentWrapper,
              children: [
                (0, l.jsx)(e_, { ...x, onUserPopoutClosed: m }),
                (0, l.jsxs)("div", {
                  className: ec.streamingPopoutHero,
                  children: [
                    (0, l.jsx)(eC, {
                      onClick: C
                        ? () => {
                            E.default.selectVoiceChannel(s.channelId),
                              (0, v.iV)(s);
                          }
                        : void 0,
                      children: (0, l.jsxs)("div", {
                        className: ec.streamingPopoutPreviewContainer,
                        children: [
                          (0, l.jsx)(S.Z, {
                            className: ec.streamingPopoutImg,
                            stream: s,
                          }),
                          C &&
                            (0, l.jsx)("div", {
                              className: ec.streamCTA,
                              children: (0, l.jsx)(h.Text, {
                                variant: "text-md/normal",
                                children: eu.Z.Messages.WATCH_STREAM,
                              }),
                            }),
                        ],
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: ec.streamingPopoutHeader,
                      children: [
                        null != R &&
                          (0, l.jsx)("div", {
                            className: ec.popoutThumbnailContainer,
                            children: (0, l.jsx)(X.E, {
                              image: R,
                              smallImage: y,
                              onClick: null != o ? o : g,
                              size: X.J.SIZE_72,
                            }),
                          }),
                        (0, l.jsxs)("div", {
                          className: ec.streamingPopoutHeaderText,
                          children: [
                            (0, l.jsx)(eC, {
                              onClick: null != c ? c : g,
                              children: (0, l.jsx)(h.Heading, {
                                variant: "heading-md/semibold",
                                className: ec.popoutTextPrimary,
                                lineClamp: 3,
                                children: n,
                              }),
                            }),
                            null != i
                              ? (0, l.jsx)(eC, {
                                  onClick: null != d ? d : g,
                                  children: (0, l.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    className: ec.popoutTextSecondary,
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
      function eT(e) {
        let { IconComponent: t, children: n, className: a, ...i } = e;
        return (0, l.jsxs)(h.Button, {
          ...i,
          className: r()(a, ec.primaryButton),
          innerClassName: null != t ? ec.iconButton : void 0,
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
        h = n(301698);
      function m(e) {
        var t;
        let {
            user: n,
            guildId: m,
            channel: x,
            entry: E,
            onSelect: v,
            disableGameProfileLinks: _,
          } = e,
          C = (0, u.Z)({
            userId: n.id,
            guildId: m,
            channelId: null == x ? void 0 : x.id,
          }),
          p = (0, r.Z)({ id: n.id, label: d.Z.Messages.COPY_ID_USER }),
          f = (0, c.dX)(E),
          T = (0, o.Z)({
            location: "ContentPopoutContextMenu",
            applicationId:
              f && !0 !== _
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
              onSelect: v,
              children: (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsxs)(a.MenuGroup, {
                    children: [
                      C,
                      null != T &&
                        (0, l.jsx)(a.MenuItem, {
                          id: "game-profile",
                          label: d.Z.Messages.GAME_PROFILE,
                          action: T,
                        }),
                    ],
                  }),
                  (0, l.jsx)(a.MenuGroup, { children: p }),
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
      var a = n(212433),
        i = n(442837),
        r = n(481060),
        s = n(607070),
        o = n(689938),
        u = n(704108),
        c = n(482617);
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
          return c;
        },
        g: function () {
          return u;
        },
      }),
        n(47120);
      var l = n(470079),
        a = n(442837),
        i = n(146282),
        r = n(327220),
        s = n(959580),
        o = n(371177);
      function u(e, t) {
        let { types: n } = e;
        return !!(null == n || n.has(t.content_type)) || !1;
      }
      function c(e) {
        let { feed: t, filters: n } = (0, a.cj)([i.Z], () => ({
            feed: i.Z.getFeed(e),
            filters: i.Z.getFilters(),
          })),
          c = l.useMemo(() => {
            let e = null == t ? void 0 : t.entries.map((e) => e.content);
            return null != n
              ? null == e
                ? void 0
                : e.filter((e) => u(n, e))
              : e;
          }, [t, n]);
        return (c = (0, r.Z)(c)), (c = (0, s.Z)(c)), (c = (0, o.Z)(c));
      }
    },
    871118: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
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
        x = n(445524);
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
      function v(e) {
        let { stream: t, className: n, noText: i = !1 } = e,
          r = (0, s.e7)([c.Z], () => c.Z.getBasicChannel(t.channelId)),
          o = (0, s.e7)(
            [d.Z],
            () => null != r && d.Z.canBasicChannel(h.S7T.CONNECT, r),
          ),
          { url: v, isLoading: _ } = (0, s.cj)([u.Z], () => ({
            url: o
              ? u.Z.getPreviewURL(t.guildId, t.channelId, t.ownerId)
              : null,
            isLoading:
              o && u.Z.getIsPreviewLoading(t.guildId, t.channelId, t.ownerId),
          })),
          C = a.useRef(_ ? null : v);
        a.useEffect(() => {
          !_ && (C.current = v);
        }, [v, _]);
        let p = null == v || _ ? C.current : v;
        return null == p
          ? (0, l.jsx)(E, {
              className: n,
              isLoading: _,
              noText: i,
              previewText: o ? void 0 : m.Z.Messages.STREAM_NO_PERMISSION_CTA,
            })
          : (0, l.jsx)("div", {
              className: n,
              children: (0, l.jsx)("img", {
                src: p,
                alt: "",
                className: x.image,
              }),
            });
      }
    },
    475676: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return T;
        },
      }),
        n(47120);
      var l = n(735250),
        a = n(470079),
        i = n(442837),
        r = n(481060),
        s = n(297781),
        o = n(443487),
        u = n(314897),
        c = n(594174),
        d = n(5192),
        h = n(873128),
        m = n(246627),
        x = n(709737),
        E = n(69589),
        v = n(531501),
        _ = n(463031),
        C = n(689938),
        p = n(835777);
      function f() {
        return (0, l.jsxs)("div", {
          className: p.gameTitleContainer,
          children: [
            (0, l.jsx)(r.LeagueOfLegendsBrandIcon, { size: "xs" }),
            (0, l.jsx)(r.Text, {
              variant: "text-sm/medium",
              className: p.gameTitle,
              children: "League of Legends",
            }),
          ],
        });
      }
      function T(e) {
        var t, n, v, p;
        let T,
          { selected: I, channel: N } = e,
          Z = N.guild_id,
          P = (0, h.Z)({ guildId: Z, leaderboardId: _._, intervalOffset: 0 }),
          { rankChanges: M } = (0, m.Z)({
            guildId: Z,
            leaderboardId: _._,
            intervalStart:
              null !== (v = null == P ? void 0 : P.interval_start) &&
              void 0 !== v
                ? v
                : "",
          }),
          L = (0, i.e7)([u.default], () => u.default.getId()),
          [S, A] = a.useMemo(() => {
            let e = M.find((e) => e.userId === L),
              t = M[0],
              n = null != e ? e : t,
              l =
                null == P
                  ? void 0
                  : P.users.find(
                      (e) => e.user_id === (null == n ? void 0 : n.userId),
                    );
            return [n, l];
          }, [P, M, L]),
          R = (0, i.e7)([c.default], () =>
            c.default.getUser(null == S ? void 0 : S.userId),
          ),
          y = d.ZP.getName(Z, void 0, R);
        if (null == P) return null;
        if (0 === P.users.length || null == S)
          return (0, l.jsx)(g, { selected: I });
        let { sort_by_statistic_id: O } = P.settings,
          j =
            null !==
              (p =
                null == A
                  ? void 0
                  : null === (n = A.statistics) || void 0 === n
                    ? void 0
                    : null === (t = n[O]) || void 0 === t
                      ? void 0
                      : t.value) && void 0 !== p
              ? p
              : 0,
          { currentRank: w } = S;
        return (
          (T =
            S.userId === L
              ? C.Z.Messages.LEADERBOARD_RANK_CHANGE_CURRENT_USER.format({
                  rank: w,
                })
              : C.Z.Messages.LEADERBOARD_RANK_CHANGE_OTHER_USER.format({
                  rank: w,
                  username: y,
                })),
          (0, l.jsxs)(o.Zb, {
            selected: I,
            children: [
              (0, l.jsxs)(o.e$, {
                children: [
                  (0, l.jsx)(f, {}),
                  (0, l.jsx)(r.Spacer, { size: 2 }),
                  (0, l.jsx)(o.ll, { children: T }),
                  (0, l.jsx)(s.Gk, {
                    location: s.Gt.CARD,
                    children: (0, l.jsx)(x.DC, { value: j, statisticId: O }),
                  }),
                ],
              }),
              (0, l.jsx)(E.Z, { rank: w }),
            ],
          })
        );
      }
      function g(e) {
        let { selected: t } = e;
        return (0, l.jsxs)(o.Zb, {
          selected: t,
          children: [
            (0, l.jsxs)(o.e$, {
              children: [
                (0, l.jsx)(f, {}),
                (0, l.jsx)(r.Spacer, { size: 2 }),
                (0, l.jsx)(o.ll, {
                  children:
                    C.Z.Messages
                      .MEMBER_LIST_CONTENT_FEED_LEADERBOARD_CARD_EMPTY_STATE_TITLE,
                }),
                (0, l.jsx)(s.Gk, {
                  location: s.Gt.CARD,
                  children: (0, l.jsx)(x.ZR, {
                    text: C.Z.Messages
                      .MEMBER_LIST_CONTENT_FEED_LEADERBOARD_CARD_EMPTY_STATE_SUBTITLE,
                  }),
                }),
              ],
            }),
            (0, l.jsx)(v.Z, {
              color: "#5B5A56",
              children: (0, l.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/173a83bdbe0a455bf0d251f4cc9c2c027cd3da855384773916f3eb08298a880c.png",
                alt: "",
                className: p.emptyStateImage,
              }),
            }),
          ],
        });
      }
    },
    69589: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var l = n(735250),
        a = n(481060),
        i = n(531501),
        r = n(211494);
      function s(e) {
        let { rank: t } = e;
        return (0, l.jsx)(i.Z, {
          color: "#cbaa62",
          children: (0, l.jsx)("div", {
            className: r.innerContainer,
            children: (0, l.jsx)(a.Text, {
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
          return s;
        },
      });
      var l = n(735250);
      n(470079);
      var a = n(120356),
        i = n.n(a),
        r = n(416405);
      function s(e) {
        let { children: t, className: n, color: a } = e;
        return (0, l.jsxs)("div", {
          className: i()(r.container, n),
          children: [
            (0, l.jsxs)("svg", {
              className: r.border,
              width: "48",
              height: "48",
              viewBox: "0 0 48 48",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, l.jsx)("path", {
                  fill: a,
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M2.56494 3.99827V6.685L0.953743 8.27307C0.681432 8.54147 0.527646 8.90755 0.526583 9.2899L0.445318 38.5096C0.444267 38.8875 0.592525 39.2505 0.857827 39.5197L2.56494 41.2517V43.9983C2.56494 44.7899 3.20666 45.4316 3.99827 45.4316H6.68488L8.27307 47.0429C8.54147 47.3152 8.90755 47.469 9.2899 47.4701L38.5096 47.5514C38.8875 47.5524 39.2505 47.4041 39.5197 47.1388L41.2518 45.4316H43.9983C44.7899 45.4316 45.4316 44.7899 45.4316 43.9983V41.3118L47.0429 39.7236C47.3152 39.4552 47.469 39.0891 47.4701 38.7068L47.5514 9.48712C47.5524 9.10919 47.4041 8.74613 47.1388 8.47697L45.4316 6.74487V3.99827C45.4316 3.20666 44.7899 2.56494 43.9983 2.56494H41.3117L39.7236 0.953746C39.4552 0.681434 39.0891 0.527649 38.7068 0.526586L9.48712 0.445318C9.10918 0.444267 8.74613 0.592525 8.47696 0.857827L6.74499 2.56494H3.99827C3.20666 2.56494 2.56494 3.20666 2.56494 3.99827ZM3.99837 5.41255V5.41421L4.00202 5.41061V5.40895L3.99837 5.41255ZM3.99837 41.7865V41.788L4.00202 41.7917V41.7902L3.99837 41.7865ZM3.99837 43.9983V43.9998H43.9984V3.99983L43.9983 43.9983H3.99837ZM42.5856 3.99983H42.5841L42.5861 4.00189H42.5876L42.5856 3.99983ZM5.43126 4.00189H5.42957L5.43166 3.99983H5.43334L5.43126 4.00189ZM7.5647 2.66494L7.56312 2.6665H40.504L40.5025 2.66494H7.5647ZM40.265 2.56494H7.80693L9.00026 1.38874C9.12943 1.26142 9.30367 1.19027 9.48504 1.19077L38.7047 1.27204C38.8882 1.27255 39.0639 1.34635 39.1927 1.47704L40.265 2.56494ZM3.99827 2.66494C3.26189 2.66494 2.66494 3.26189 2.66494 3.99827V6.72684L1.02394 8.34429C0.770628 8.59397 0.627571 8.9345 0.626582 9.29018L0.545318 38.5098C0.545237 38.5389 0.546107 38.5679 0.547913 38.5968C0.546173 38.5685 0.545336 38.54 0.545415 38.5114L0.62668 9.29174C0.627669 8.93607 0.770725 8.59553 1.02404 8.34585L2.66504 6.72841V3.99983C2.66504 3.26345 3.26199 2.6665 3.99837 2.6665H6.78609L8.54726 0.930609C8.79765 0.683816 9.13537 0.545902 9.48694 0.54688L38.7066 0.628148C39.0623 0.629137 39.4028 0.772193 39.6525 1.02551L41.2699 2.6665H43.9984C44.7057 2.6665 45.2844 3.21725 45.3289 3.91329C45.2851 3.21651 44.7061 2.66494 43.9983 2.66494H41.2698L39.6524 1.02394C39.4027 0.770631 39.0622 0.627574 38.7065 0.626585L9.48684 0.545318C9.13527 0.54434 8.79755 0.682254 8.54716 0.929047L6.78599 2.66494H3.99827ZM45.3317 6.78597V6.78743L47.0677 8.54873C47.2941 8.77839 47.4288 9.08152 47.4489 9.40142C47.4292 9.08095 47.2944 8.7772 47.0676 8.54716L45.3317 6.78597ZM2.66743 44.0804C2.66584 44.0538 2.66504 44.0269 2.66504 43.9998V41.2122L2.66494 43.9983C2.66494 44.0259 2.66578 44.0533 2.66743 44.0804ZM7.49413 45.3332L8.73276 46.5898C8.8803 46.7395 9.08153 46.8241 9.2917 46.8246L38.5113 46.9059C38.7191 46.9065 38.9187 46.825 39.0666 46.6792L40.4322 45.3332H40.4339L39.0667 46.6807C38.9188 46.8265 38.7192 46.908 38.5114 46.9075L9.29179 46.8262C9.08162 46.8256 8.88039 46.7411 8.73286 46.5914L7.49269 45.3332H7.49413ZM8.80398 46.5196L7.73157 45.4316H40.1899L38.9964 46.6079C38.8672 46.7353 38.693 46.8064 38.5116 46.8059L9.29198 46.7246C9.10848 46.7241 8.93279 46.6503 8.80398 46.5196ZM45.3317 40.504L46.5898 39.2639C46.7395 39.1164 46.824 38.9151 46.8246 38.705L46.9059 9.48532C46.9059 9.46799 46.9054 9.45072 46.9043 9.43352C46.9055 9.45123 46.906 9.46903 46.906 9.48689L46.8247 38.7065C46.8241 38.9167 46.7396 39.1179 46.5899 39.2655L45.3317 40.5056V40.504ZM46.5196 39.1927L45.4316 40.2651V7.8068L46.6079 9.00026C46.7353 9.12944 46.8064 9.30367 46.8059 9.48505L46.7246 38.7047C46.7241 38.8882 46.6503 39.0639 46.5196 39.1927ZM1.09232 38.5631C1.10421 38.752 1.18383 38.931 1.31752 39.0666L2.66494 40.4337V7.49438L2.66504 40.4352L1.31762 39.0682C1.18356 38.9322 1.10387 38.7526 1.09232 38.5631ZM1.47704 8.80398L2.56494 7.73169V40.1897L1.38874 38.9964C1.26142 38.8672 1.19027 38.693 1.19077 38.5116L1.27203 9.29198C1.27254 9.10848 1.34635 8.93279 1.47704 8.80398ZM5.18566 4.10189L5.18933 4.09827H4.09827V5.17367L4.10202 5.16998V6.21667L4.09827 6.22037V41.7454L4.10202 41.7492V42.8111L4.09827 42.8073V43.8983H43.8983V4.09827H42.823L42.8266 4.10189H41.7799L41.7763 4.09827H6.25127L6.2476 4.10189H5.18566Z",
                }),
                (0, l.jsx)("path", {
                  fill: a,
                  stroke: a,
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
          return L;
        },
        u: function () {
          return P;
        },
      }),
        n(47120);
      var l = n(735250),
        a = n(470079),
        i = n(120356),
        r = n.n(i),
        s = n(392711),
        o = n(212433),
        u = n(481060),
        c = n(596454),
        d = n(727637),
        h = n(313201),
        m = n(543241),
        x = n(318766),
        E = n(907040),
        v = n(633302),
        _ = n(806966),
        C = n(176354),
        p = n(823379),
        f = n(354459),
        T = n(185923),
        g = n(420212),
        I = n(264699);
      let N = T.Hz.CHAT,
        Z = [
          v.ZP.getByName("thumbsup"),
          v.ZP.getByName("eyes"),
          v.ZP.getByName("laughing"),
          v.ZP.getByName("watermelon"),
          v.ZP.getByName("fork_and_knife"),
          v.ZP.getByName("yum"),
        ].filter(p.lm);
      function P(e) {
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
                    className: r()(I.emoji, s, { [I.emojiItemDisabled]: n }),
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
      function M(e) {
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
              className: I.dropDownContainer,
              onClick: () => {
                a(!n), i();
              },
              children: (0, l.jsx)(u.ChevronSmallDownIcon, {
                size: "md",
                color: "currentColor",
                className: r()(I.dropDown, { [I.dropDownOpen]: n }),
              }),
            }),
          ],
        });
      }
      function L(e) {
        let {
            channel: t,
            title: n,
            closePopout: i,
            onFocus: o,
            onSelectEmoji: c,
            onSelectDisabledEmoji: d,
            onExpandedToggle: x,
            emojiSearchProps: v,
            recentlyUsedEmojis: p,
            analyticsOverride: L,
          } = e,
          S = (0, h.Dt)(),
          [A, R] = a.useState(!1),
          y = (0, m.wC)(t.guild_id),
          O = (0, s.uniqBy)([...y, ...Z], "name")
            .filter(
              (e) =>
                !C.ZP.isEmojiFilteredOrLocked({
                  emoji: e,
                  channel: t,
                  intention: N,
                }),
            )
            .slice(0, f.e5);
        null != p && p.length > 0 && O.splice(O.length - 1, 1, p[0]);
        let j = (e) => {
            R(e), null == x || x(e);
          },
          w = (e, t) => {
            if (null == e && t) {
              i();
              return;
            }
            null != e && c(e);
            j(!t), t && _.kJ.setSearchPlaceholder(null);
          };
        return (0, l.jsxs)(u.Dialog, {
          "aria-labelledby": S,
          children: [
            (0, l.jsx)(u.HeadingLevel, {
              forceLevel: 2,
              children: (0, l.jsx)(u.HiddenVisually, {
                children: (0, l.jsx)(u.H, { id: S, children: n }),
              }),
            }),
            (0, l.jsxs)("div", {
              className: I.container,
              children: [
                (0, l.jsx)(E.Z, {
                  analyticsOverride: L,
                  channel: t,
                  className: r()(I.animatedPicker, {
                    [I.animatedPickerTall]: A,
                  }),
                  headerClassName: r()(I.emojiPickerHeader, {
                    [I.emojiPickerHeaderExpanded]: A,
                  }),
                  closePopout: i,
                  onSelectEmoji: A ? w : () => {},
                  shouldHidePickerActions: !A,
                  wrapper: "div",
                  pickerIntention: N,
                  searchProps: {
                    ...v,
                    accessory: (0, l.jsx)(M, {
                      otherAccessories: null == v ? void 0 : v.accessory,
                      isEmojiPickerExpanded: A,
                      onSetExpanded: j,
                      onFocus: o,
                    }),
                    onKeyDown: (e) => {
                      null != e &&
                        e.key !== g.vn.TAB &&
                        (e.key !== g.vn.ENTER || e.shiftKey ? j(!0) : j(!A));
                    },
                  },
                }),
                (0, l.jsx)("div", {
                  className: I.slotsContainer,
                  children: (0, l.jsx)("div", {
                    className: r()(I.slots, I.slotsWide),
                    children: O.map((e) => {
                      let n = C.ZP.isEmojiDisabled({
                        emoji: e,
                        channel: t,
                        intention: T.Hz.CHAT,
                      });
                      return (0, l.jsx)(
                        "div",
                        {
                          className: I.slot,
                          children: (0, l.jsx)(u.TooltipContainer, {
                            text: e.name,
                            position: "top",
                            "aria-label": e.name,
                            tooltipClassName: I.tooltipContainer,
                            color: u.Tooltip.Colors.BRAND,
                            children: (0, l.jsx)(P, {
                              emoji: e,
                              isDisabled: n,
                              onClick: () => {
                                n ? null == d || d(e) : w(e, !0);
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
      function v(e, t) {}
      function _() {
        E = {};
      }
      function C(e, t) {
        let n = d[e];
        return (
          null != n &&
          ((d[e] = n.filter((e) => e.id !== t)),
          delete h[t],
          delete m[t],
          n.length !== d[e].length)
        );
      }
      function p(e, t) {
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
            null != s && (x[i.id] = { ...l, items: s }), v(i.nonce, l);
          },
          UPLOAD_COMPRESSION_PROGRESS: function (e) {
            let { channelId: t, file: n } = e;
            p(t, n);
          },
          UPLOAD_PROGRESS: function (e) {
            let { channelId: t, file: n } = e;
            p(t, n);
          },
          UPLOAD_COMPLETE: function (e) {
            let { channelId: t, file: n } = e;
            return C(t, n.id);
          },
          UPLOAD_FAIL: function (e) {
            let { channelId: t, file: n } = e;
            return C(t, n.id);
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
            null != l && v(l.nonce, n), p(t, n);
          },
          UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
            let { file: t, messageId: n } = e;
            x[n] = t;
          },
        }));
    },
  },
]);
//# sourceMappingURL=b032ee4b00c761132b71.js.map
