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
      var a = n(735250);
      n(470079);
      var l = n(120356),
        i = n.n(l),
        r = n(481060),
        s = n(968333);
      function o(e) {
        let { className: t, size: n, ...l } = e;
        return (0, a.jsx)(r.Button, {
          className: i()(s.button, t),
          size: i()(s.buttonSize, n),
          ...l,
        });
      }
    },
    429589: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return B;
        },
      }),
        n(47120);
      var a = n(735250),
        l = n(470079),
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
        f = n(283595),
        T = n(496675),
        p = n(699516),
        g = n(944486),
        I = n(594174),
        N = n(979651),
        C = n(181106),
        A = n(417363),
        Z = n(358085),
        P = n(804739),
        S = n(317381),
        M = n(638880),
        O = n(255621),
        R = n(452634),
        j = n(527805),
        y = n(620662),
        L = n(275920),
        w = n(915863),
        D = n(701488),
        b = n(981631),
        U = n(689938);
      function B(e) {
        var t, n;
        let {
            activity: B,
            embeddedActivity: k,
            user: F,
            onAction: G,
            isEmbedded: H = !1,
            ButtonComponent: Y = w.Z,
            ...z
          } = e,
          { analyticsLocations: V } = (0, d.ZP)(),
          [W, q] = l.useState(!1),
          K = (0, i.e7)([I.default], () => I.default.getCurrentUser()),
          J = F.id === (null == K ? void 0 : K.id),
          X =
            null !== (t = null == k ? void 0 : k.applicationId) && void 0 !== t
              ? t
              : null == B
                ? void 0
                : B.application_id,
          $ = (0, R.Z)({
            channelId: null == k ? void 0 : k.channelId,
            userId: F.id,
            activity: B,
          }),
          Q = (0, i.e7)(
            [f.Z, m.Z, A.Z, E.Z],
            () =>
              H ||
              (null != X &&
                (0, P.t)({
                  LibraryApplicationStore: f.Z,
                  LaunchableGameStore: m.Z,
                  DispatchApplicationStore: A.Z,
                  ConnectedAppsStore: E.Z,
                  applicationId: X,
                })),
          ),
          ee = (0, i.e7)([S.ZP], () =>
            Array.from(S.ZP.getSelfEmbeddedActivities().values()).some((e) => {
              let { applicationId: t, channelId: n } = e;
              return (
                (t === (null == B ? void 0 : B.application_id) ||
                  t === (null == k ? void 0 : k.applicationId)) &&
                n === $
              );
            }),
          ),
          et = (0, i.e7)(
            [C.Z],
            () =>
              null != B &&
              null != B.application_id &&
              C.Z.getState(B.application_id, b.mFx.JOIN) === b.OcF.LOADING,
          ),
          [en] = (0, h.Z)(
            (null == k ? void 0 : k.applicationId) != null
              ? [null == k ? void 0 : k.applicationId]
              : (null == B ? void 0 : B.application_id) != null
                ? [null == B ? void 0 : B.application_id]
                : [],
          ),
          ea = (0, j.s5)({
            userId: F.id,
            activity: B,
            channelId: $,
            application: en,
          }),
          el = (0, i.e7)([x.Z, _.Z, v.Z, p.Z, g.Z, N.Z, T.Z], () =>
            null != k
              ? ea === j.Fw.CAN_JOIN
              : null != B
                ? (0, O.Z)({
                    user: F,
                    activity: B,
                    application: en,
                    channelId: $,
                    currentUser: K,
                    isEmbedded: H,
                    ChannelStore: x.Z,
                    GuildStore: _.Z,
                    GuildMemberCountStore: v.Z,
                    RelationshipStore: p.Z,
                    SelectedChannelStore: g.Z,
                    VoiceStateStore: N.Z,
                    PermissionStore: T.Z,
                  })
                : void 0,
          ),
          ei = (0, i.e7)([S.ZP], () =>
            Array.from(S.ZP.getSelfEmbeddedActivities().values()).some(
              (e) =>
                e.applicationId === (null == k ? void 0 : k.applicationId) &&
                e.channelId === (null == k ? void 0 : k.channelId),
            ),
          ),
          er = (0, c.O)(),
          es = !Z.isPlatformEmbedded;
        if (!((0, y.Z)(B, b.xjy.JOIN) || H) || null == X) return null;
        let eo = !J || (H && !ei),
          eu = eo && (es || Q) && !W && !ee && (!H || el),
          ec = null;
        eo
          ? !es &&
            !Q &&
            null != B &&
            (ec = U.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({
              name: B.name,
            }))
          : (ec = U.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF);
        let ed =
            null !== (n = null == k ? void 0 : k.launchId) && void 0 !== n
              ? n
              : null == B
                ? void 0
                : B.session_id,
          eh = async (e, t) => {
            var n, a;
            if (null == ed || null == X) return;
            let l = (0, y.Z)(t, b.xjy.EMBEDDED),
              i = g.Z.getVoiceChannelId(),
              r = x.Z.getChannel(i);
            await o.Z.join({
              userId: e.id,
              sessionId: ed,
              applicationId: X,
              channelId: i,
              messageId: null,
              intent: D.Ws.PLAY,
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
              analyticsLocations: V,
            }),
              !l &&
                (0, L.Z)({
                  type: b.q5t.JOIN,
                  userId: e.id,
                  guildId: null == r ? void 0 : r.guild_id,
                  channelId: i,
                  channelType: null == r ? void 0 : r.type,
                  applicationId: X,
                  partyId:
                    null != t
                      ? null == t
                        ? void 0
                        : null === (a = t.party) || void 0 === a
                          ? void 0
                          : a.id
                      : "",
                  locationObject: er.location,
                  analyticsLocations: V,
                });
          },
          em = async () => {
            let e = !1;
            if (H) {
              if (!el || null == $ || null == X) return;
              e = await (0, M.Z)({
                applicationId: X,
                activityChannelId: $,
                locationObject: er.location,
                analyticsLocations: V,
              });
            }
            if (!e) {
              let e;
              el && (null == G || G(), eh(F, B)),
                q(!0),
                null != B &&
                  (e = await s.Z.sendActivityInviteUser({
                    type: b.mFx.JOIN_REQUEST,
                    userId: F.id,
                    activity: B,
                    location: b.Sbl.PROFILE_POPOUT,
                  })),
                null != e && u.default.selectPrivateChannel(e.id);
            }
          },
          ex = el
            ? U.Z.Messages.JOIN
            : U.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
        return (
          H && (ex = U.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY),
          ei && (ex = U.Z.Messages.EMBEDDED_ACTIVITIES_JOINED),
          (0, a.jsx)(
            r.Tooltip,
            {
              text: ec,
              children: (e) => {
                let { onMouseEnter: t, onMouseLeave: n } = e;
                return (0, a.jsx)(Y, {
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
          return o;
        },
      });
      var a = n(735250);
      n(470079);
      var l = n(655922),
        i = n(420660),
        r = n(915863),
        s = n(689938);
      function o(e) {
        let { activity: t, onAction: n, ButtonComponent: o = r.Z, ...u } = e;
        return (0, i.Z)(t)
          ? (0, a.jsx)(
              o,
              {
                onClick: () => {
                  null == n || n();
                  let e = (0, l.Z)(t);
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
          return N;
        },
      }),
        n(47120);
      var a = n(735250),
        l = n(470079),
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
        f = n(793834);
      let T = (0, x.kt)({ id: "1", type: v.d4z.DM }),
        p = l.forwardRef(function (e, t) {
          let {
              placeholder: n,
              headerText: l,
              onEnter: i,
              showPopout: u,
              children: c,
              body: d,
              hide: h,
            } = e,
            m = (0, o.ZP)();
          return (0, a.jsx)(s.Popout, {
            align: "right",
            position: "bottom",
            shouldShow: u,
            disablePointerEvents: !1,
            renderPopout: () =>
              (0, a.jsx)(s.ThemeProvider, {
                theme: m,
                children: (e) =>
                  (0, a.jsx)("div", {
                    className: r()([f.reply, e]),
                    ref: t,
                    children: (0, a.jsx)(s.FocusLock, {
                      containerRef: t,
                      children: (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)(s.Text, {
                            variant: "text-xs/bold",
                            className: f.replyHeader,
                            children: null != l ? l : _.Z.Messages.CHAT,
                          }),
                          d,
                          (0, a.jsx)(g, {
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
            className: v,
          } = e,
          [_, p] = l.useState(""),
          [g, I] = l.useState((0, c.JM)("")),
          N = () => {
            p(""), I((0, c.JM)(""));
          },
          C = u.I.ATOMIC_REACTOR_REPLY_INPUT,
          A = l.useRef(null);
        return (0, a.jsx)(d.Z, {
          ref: A,
          placeholder: t,
          editorClassName: v,
          className: r()(f.replyInput, v),
          showRemainingCharsAfterCount: -1,
          allowNewLines: !1,
          maxCharacterCount: E.z,
          channel: null != x ? x : T,
          onChange: (e, t, n) => {
            p(t), I(n);
          },
          type: s ? { ...C, emojis: { button: !0 } } : C,
          textValue: _,
          richValue: g,
          onSubmit: (e) => {
            let { value: t } = e;
            return t.length > E.z
              ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
              : (n(t),
                N(),
                Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
          },
          setEditorRef: i,
          focused: h,
          onFocus: m,
          disableThemedBackground: !0,
          emojiPickerCloseOnModalOuterClick: !0,
          disabled: !1,
          autoCompletePosition: (() => {
            if (null == A.current) return "top";
            let e = A.current.getBoundingClientRect(),
              t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
          })(),
          renderAttachButton: o,
        });
      }
      let I = (e, t) => {
          l.useEffect(() => {
            let n = (t) => {
                "Escape" === t.key && e();
              },
              a = (n) => {
                var a;
                null != n.target &&
                  !(null == t
                    ? void 0
                    : null === (a = t.current) || void 0 === a
                      ? void 0
                      : a.contains(null == n ? void 0 : n.target)) &&
                  e();
              };
            return (
              document.addEventListener("keydown", n),
              document.addEventListener("mousedown", a),
              () => {
                document.removeEventListener("keydown", n),
                  document.removeEventListener("mousedown", a);
              }
            );
          }, [e, t]);
        },
        N = (e) => {
          let { onSelectEmoji: t, onClick: n } = e,
            i = (0, o.ZP)(),
            [r, u] = l.useState(!1),
            c = l.useRef(null);
          return (
            I(() => u(!1), c),
            (0, a.jsx)(s.Popout, {
              align: "right",
              position: "top",
              shouldShow: r,
              disablePointerEvents: !1,
              renderPopout: () =>
                (0, a.jsx)(s.ThemeProvider, {
                  theme: i,
                  children: (e) =>
                    (0, a.jsx)("div", {
                      className: e,
                      ref: c,
                      children: (0, a.jsx)(m.$, {
                        messageId: v.lds,
                        channel: T,
                        closePopout: () => {
                          u(!1);
                        },
                        onSelectEmoji: (e, n, a) => {
                          null != e && (t(e, n, a), u(!1));
                        },
                      }),
                    }),
                }),
              children: () =>
                (0, a.jsx)(s.Tooltip, {
                  text: _.Z.Messages.ADD_REACTION,
                  children: (e) =>
                    (0, a.jsx)("div", {
                      ...e,
                      className: f.reaction,
                      children: (0, a.jsx)(h.Z, {
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
          [h, m] = l.useState(!1),
          x = l.useRef(null);
        return (
          I(() => m(!1), x),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("div", {
              className: f.reactions,
              children: [
                n &&
                  (0, a.jsx)(N, {
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
                  (0, a.jsx)(p, {
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
                    children: (0, a.jsx)(s.Tooltip, {
                      text: _.Z.Messages.MESSAGE_ACTION_REPLY,
                      children: (e) =>
                        (0, a.jsx)("button", {
                          ...e,
                          className: r()(f.reaction, f.emojiButton),
                          onClick: () => {
                            t({
                              interactionType: E.L.ReplyBegin,
                              emoji: null,
                              reply: null,
                            }),
                              m(!0);
                          },
                          children: (0, a.jsx)(s.ArrowAngleLeftUpIcon, {}),
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
      var a, l;
      n.d(t, {
        L: function () {
          return a;
        },
        z: function () {
          return i;
        },
      });
      let i = 200;
      ((l = a || (a = {})).ReactBegin = "React Begin"),
        (l.ReplyBegin = "Reply Begin"),
        (l.ReactSubmit = "React Submit"),
        (l.ReplySubmit = "Reply Submit"),
        (l.ReactSend = "React Send"),
        (l.ReplySend = "Reply Send");
    },
    55e3: function (e, t, n) {
      var a, l;
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
          return a;
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
      ((l = a || (a = {})).AssetImage = "AssetImage"),
        (l.ApplicationImage = "ApplicationImage"),
        (l.Platform = "Platform"),
        (l.StreamPreview = "StreamPreview"),
        (l.HangStatus = "HangStatus");
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
      var a = n(570140),
        l = n(493683),
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
                let l = (i) => {
                  i.file.id === t.id &&
                    (a.Z.unsubscribe("UPLOAD_COMPLETE", l),
                    a.Z.unsubscribe("UPLOAD_FAIL", l),
                    "UPLOAD_COMPLETE" === i.type
                      ? e(i.messageRecord)
                      : n(Error("Upload failed")));
                };
                a.Z.subscribe("UPLOAD_COMPLETE", l),
                  a.Z.subscribe("UPLOAD_FAIL", l);
              });
        },
        m = async function (e, t) {
          var a;
          let l =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0,
            s = arguments.length > 4 ? arguments[4] : void 0,
            d = u.Z.getChannel(t);
          if (((a = o.default.getToken()), i.ZP.parse(d, ""), l));
          else {
            if (null == u.Z.getChannel(t))
              throw Error(
                "AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(
                  t,
                ),
              );
            {
              let a = n(966390).Z;
              (e.description = r),
                await a.uploadFiles({
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
              user: a,
              altText: i,
              requireConfirmation: o = !1,
            } = e,
            u = await l.Z.openPrivateChannel(a.id, !1, !1);
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
              channel: a,
              altText: l,
              requireConfirmation: r = !1,
            } = e,
            s = i.ZP.parse(a, n);
          return m(t, a.id, r, l, s);
        };
    },
    4646: function (e, t, n) {
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
      n.d(t, {
        k2: function () {
          return i;
        },
      }),
        n(47120);
      let l = new (n(259443).Y)("AssetMap");
      async function i(e) {
        let t = new r(),
          n = Object.entries(e).map((e) => {
            let [n, a] = e;
            return t
              .loadRemoteImage(n, a)
              .catch((e) => l.warn("Failed to load canvas asset", e, n, a));
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
          a(this, "assets", {}), a(this, "fontManager", void 0);
        }
      }
    },
    129508: function (e, t, n) {
      n(47120);
      var a = n(512722),
        l = n.n(a),
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
          var t, n, a, l, i;
          (this.font.style =
            null !== (t = e.style) && void 0 !== t ? t : this.font.style),
            (this.font.size =
              null !== (n = e.size) && void 0 !== n ? n : this.font.size),
            (this.font.weight =
              null !== (a = e.weight) && void 0 !== a ? a : this.font.weight),
            (this.font.family =
              null !== (l = e.family) && void 0 !== l ? l : this.font.family),
            (this.font.truncate =
              null !== (i = e.truncate) && void 0 !== i
                ? i
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
        drawRoundedImageWithFallbacks(e, t, n, a, l) {
          for (let i of e) {
            let e = this.drawRoundedImage(i, t, n, a, l);
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
      var a = n(512722),
        l = n.n(a);
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
          i(this, "canvas", void 0),
            i(this, "exporter", void 0),
            (this.canvas = e),
            (this.exporter = t);
        }
      }
    },
    97008: function (e, t, n) {
      n(411104);
      var a = n(141795),
        l = n(476326),
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
            return new a.n({ file: c, platform: l.ow.WEB, isThumbnail: !1 }, n);
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
      var a = n(512722),
        l = n.n(a),
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
          let { w: n, h: a } = e;
          null != this.context && null != t
            ? ((this.canvas.width = n * t),
              (this.canvas.height = a * t),
              this.context.scale(t, t))
            : ((this.canvas.width = n), (this.canvas.height = a));
        }
        clearRect(e) {
          if (null == this.context) return;
          let { x: t, y: n, w: a, h: l } = e;
          this.context.clearRect(t, n, a, l);
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
          let { x: a, y: l, w: i, h: r } = e;
          n && this.setContextProperties(),
            t
              ? this.context.fillRect(a, l, i, r)
              : this.context.strokeRect(a, l, i, r);
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
            a =
              !(arguments.length > 3) ||
              void 0 === arguments[3] ||
              arguments[3];
          if (null == this.context) return;
          let { x: l, y: i, w: r, h: s } = e;
          a && this.setContextProperties(),
            this.context.beginPath(),
            this.context.roundRect(l, i, r, s, t),
            n ? this.context.fill() : this.context.stroke();
        }
        drawText(e, t, n) {
          var a, i;
          if (null == this.context) return;
          this.setContextProperties();
          let o =
              null !== (a = t.w) && void 0 !== a ? a : this.canvas.width - t.x,
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
              a = 1 / 0,
              r = "",
              s = 0;
            for (
              null != t.h &&
              ((a = t.h / d),
              l()(
                a > 0,
                "DiscordCavas: boundingBox.h of "
                  .concat(t.h, " results in 0 visible lines with font size of ")
                  .concat(d),
              ));
              n.length > 0;

            )
              if ((u = this.context.measureText(r + " " + n[0])).width > o) {
                let e = !1;
                if (
                  (s + 1 >= a && n.length > 0 && (e = !0),
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
          let a = this.font.weight,
            l = (e, t, n) => {
              let l;
              if ("strong" === e.type) this.setFont({ weight: 700 });
              return (
                Array.isArray(e.content)
                  ? (l = i(e.content, t, n))
                  : (l = this.drawText(e.content, t, n)),
                this.setFont({ weight: a }),
                l
              );
            },
            i = (e, t, n) => {
              let a = 0;
              return (
                e.forEach((e) => {
                  let { x: i, y: r, w: s, h: o } = t,
                    u = null != s ? s - a : void 0,
                    c = l(e, { x: i + a, y: r, w: u, h: o }, n);
                  null != c && (a += c.w);
                }),
                { x: t.x + a, y: t.y, w: a, h: this.font.size }
              );
            };
          Array.isArray(e) ? i(e, t, n) : l(e, t, n);
        }
        drawImage(e, t, n) {
          let a =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : { fillMode: s.JU.Stretch };
          l()(
            null != this.assetMap,
            "DiscordCavas: `drawImage` requires an AssetMap to be initialized.",
          );
          let { fillMode: i } = a;
          if (null == this.context) return s.vP.Failure;
          let r = this.assetMap.get(e);
          if (null == r) return s.vP.ImageNotLoaded;
          if (null != n) {
            if (i === s.JU.Contain) {
              let a;
              let l = { w: r.width, h: r.height },
                i = +(l.w / l.h).toFixed(1);
              if (+(n.w / n.h).toFixed(1) > i) {
                let e = n.h * i;
                a = { x: t.x + (n.w - e) / 2, y: t.y, w: e, h: n.h };
              } else {
                let e = n.w / i;
                a = { x: t.x, y: t.y + (n.h - e) / 2, w: n.w, h: e };
              }
              return (
                this.drawCroppedImage(
                  e,
                  { x: 0, y: 0, w: l.w, h: l.h },
                  { x: a.x, y: a.y, w: a.w, h: a.h },
                ),
                s.vP.Success
              );
            }
            if (i === s.JU.Cover) {
              var o, u, c, d;
              let l;
              let i = { w: r.width, h: r.height },
                h = +(i.w / i.h).toFixed(1),
                m = +(n.w / n.h).toFixed(1);
              if (m > h) {
                let e = i.w / m;
                l = {
                  x: 0,
                  y:
                    (i.h - e) *
                    (null !==
                      (u =
                        null == a
                          ? void 0
                          : null === (o = a.focus) || void 0 === o
                            ? void 0
                            : o.y) && void 0 !== u
                      ? u
                      : 0.5),
                  w: r.width,
                  h: e,
                };
              } else {
                let e = i.h * m;
                l = {
                  x:
                    (r.width - e) *
                    (null !==
                      (d =
                        null == a
                          ? void 0
                          : null === (c = a.focus) || void 0 === c
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
                s.vP.Success
              );
            }
            this.context.drawImage(r, t.x, t.y, n.w, n.h);
          } else this.context.drawImage(r, t.x, t.y);
          return s.vP.Success;
        }
        drawRoundedImage(e, t, n, a, l) {
          if (null == this.context) return s.vP.Failure;
          let { x: i, y: r } = t,
            { w: o, h: u } = n;
          this.context.save();
          let c = new Path2D();
          c.roundRect(i, r, o, u, a), this.context.clip(c);
          let d = this.drawImage(e, t, n, l);
          return this.restoreContext(), d;
        }
        drawCroppedImage(e, t, n) {
          var a;
          if (null == this.context) return s.vP.Failure;
          let l =
            null === (a = this.assetMap) || void 0 === a ? void 0 : a.get(e);
          if (null == l) return s.vP.ImageNotLoaded;
          let { x: i, y: r, w: o, h: u } = t,
            { x: c, y: d, w: h, h: m } = n;
          return (
            this.context.drawImage(l, i, r, o, u, c, d, h, m), s.vP.Success
          );
        }
        drawPath(e, t) {
          let n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 1;
          if (null == this.context) return s.vP.Failure;
          this.setContextProperties(), this.context.save();
          let l = new Path2D(e);
          return (
            this.context.translate(t.x, t.y),
            this.context.scale(a, a),
            n ? this.context.fill(l, "evenodd") : this.context.stroke(l),
            this.restoreContext(),
            s.vP.Success
          );
        }
        setGradientFillStyle(e, t, n) {
          if (null == this.context) return;
          let a = this.context.createLinearGradient(t.x, t.y, n.x, n.y);
          for (let { color: t, stop: n } of e) a.addColorStop(n, t);
          this.context.fillStyle = a;
        }
        drawGradientRect(e, t, n, a) {
          return null == this.context
            ? s.vP.Failure
            : (this.setGradientFillStyle(e, t, n),
              this.drawRect(a, !0, !1),
              s.vP.Success);
        }
        drawRoundedGradientRect(e, t, n, a, l) {
          return null == this.context
            ? s.vP.Failure
            : (this.setGradientFillStyle(e, t, n),
              this.drawRoundedRect(a, l, !0, !1),
              s.vP.Success);
        }
        clip(e, t) {
          if (null == this.context) return;
          this.context.save();
          let { x: n, y: a } = e,
            l = new Path2D(t);
          this.context.translate(n, a), this.context.clip(l);
        }
        clipRect(e, t) {
          if (null == this.context) return;
          this.context.save();
          let { x: n, y: a, w: l, h: i } = e;
          if (t) {
            let e = new Path2D();
            e.moveTo(0, 0),
              e.lineTo(this.canvas.width, 0),
              e.lineTo(this.canvas.width, this.canvas.height),
              e.lineTo(0, this.canvas.height),
              e.lineTo(0, 0),
              e.closePath(),
              e.rect(n, a, l, i),
              this.context.clip(e, "evenodd");
          } else {
            let e = new Path2D();
            e.rect(n, a, l, i), this.context.clip(e);
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
          let { x: a, y: l, w: i, h: r } = e;
          if (n) {
            let e = new Path2D();
            e.moveTo(0, 0),
              e.lineTo(this.canvas.width, 0),
              e.lineTo(this.canvas.width, this.canvas.height),
              e.lineTo(0, this.canvas.height),
              e.lineTo(0, 0),
              e.closePath(),
              e.roundRect(a, l, i, r, t),
              this.context.clip(e, "evenodd");
          } else {
            let e = new Path2D();
            e.roundRect(a, l, i, r, t), this.context.clip(e);
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
          return a;
        },
        n: function () {
          return l;
        },
      });
      let a = 12,
        l = 24;
    },
    693824: function (e, t, n) {
      var a, l, i, r, s, o, u, c;
      n.d(t, {
        GX: function () {
          return a;
        },
        JU: function () {
          return l;
        },
        kH: function () {
          return i;
        },
        vP: function () {
          return r;
        },
      }),
        ((s = a || (a = {}))[(s.None = 0)] = "None"),
        (s[(s.Truncate = 1)] = "Truncate"),
        (s[(s.Wrap = 2)] = "Wrap"),
        ((o = l || (l = {}))[(o.Stretch = 0)] = "Stretch"),
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
      var a = n(4646),
        l = n(665672);
      async function i(e) {
        let { assetsToLoad: t, drawImage: i, exportConfigs: r } = e,
          s = await (0, a.k2)(t);
        await s.loadFonts();
        {
          let e = n(503082).Z,
            t = n(97008).Z,
            a = document.createElement("canvas"),
            o = new e(a, s),
            u = new t(),
            c = new l.Z(o, u);
          i(c.canvas);
          let d = await c.export(r);
          return a.remove(), d;
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
      var a = n(570140);
      n(100527), n(592125);
      var l = n(944486),
        i = n(914010);
      n(594174);
      var r = n(626135),
        s = n(71585);
      n(295955);
      var o = n(981631);
      let u = () => {
        a.Z.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" }),
          r.default.track(o.rMx.MEMBERLIST_CONTENT_FEED_HIDDEN, {
            channel_id: l.Z.getChannelId(),
            guild_id: i.Z.getGuildId(),
            hidden: s.Z.hidden,
          });
      };
      function c() {
        a.Z.dispatch({ type: "GAME_PROFILE_OPEN" });
      }
      function d() {
        a.Z.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
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
      var a = n(470079),
        l = n(442837),
        i = n(592125),
        r = n(9156);
      function s(e) {
        let t = (0, l.e7)([i.Z], () => i.Z.getPrivateChannelsVersion()),
          n = (0, l.e7)([i.Z], () => i.Z.getMutableDMsByUserIds(), [t]),
          s = (0, l.e7)([r.ZP], () => r.ZP.getMutedChannels(null)),
          o = a.useMemo(() => {
            let e = new Set();
            for (let t in n) {
              let a = n[t];
              null != a && s.has(a) && e.add(t);
            }
            return e;
          }, [n, s]);
        return a.useMemo(
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
      var a = n(442837),
        l = n(719247);
      let i = [];
      function r(e) {
        return (0, a.Wu)(
          [l.Z],
          () => (null == e ? i : e.filter(l.Z.canRenderContent)),
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
      var a = n(470079),
        l = n(442837),
        i = n(902704),
        r = n(158776),
        s = n(561308),
        o = n(231338);
      function u(e) {
        let t = a.useRef(new Set()),
          n = a.useMemo(() => {
            let n = new Set(null == e ? void 0 : e.map((e) => e.author_id));
            return (
              !(0, i.E)([...t.current], [...n]) && (t.current = n), t.current
            );
          }, [e]),
          u = (0, l.Wu)([r.Z], () =>
            Array.from(n).filter((e) => {
              let t = r.Z.getStatus(e);
              return null !== t && [o.Sk.OFFLINE, o.Sk.INVISIBLE].includes(t);
            }),
          );
        return a.useMemo(() => {
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
      var a = n(626135),
        l = n(162461),
        i = n(206583),
        r = n(981631);
      let s = function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
            i < t;
            i++
          )
            n[i - 1] = arguments[i];
          let { trackingEnabled: r } = (0, l.nP)(
            "trackSampledContentEntryAnalytics:".concat(e),
          );
          return r ? a.default.track(e, ...n) : Promise.resolve();
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
          return f;
        },
      }),
        n(653041),
        n(627494),
        n(757143),
        n(512722);
      var a = n(913527),
        l = n.n(a),
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
            a = c.default.extractTimestamp(e.extra.application_id);
          if (
            (7 >= l()().diff(l()(a), "days") &&
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
              colors: a,
              description: l,
              entry: i,
              numAvatars: o,
            } = t,
            u = a.map((e, t) => ({ color: e, stop: t }));
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
            e.drawText(l, { x: m.Iq, y: 64, h: 32, w: m.kC }, !0);
          let c = v(i, n);
          (0, h.J)({
            canvas: e,
            badges: c,
            startPosition: m.Iq,
            maxWidth: m.kC,
          });
        },
        f = async (e) => {
          let {
              applicationImageSrc: t,
              entry: n,
              avatarSrcs: a,
              description: l,
              timestamp: i,
              colors: r,
              channelId: u,
            } = e,
            c = n.extra.activity_name,
            d = E(a, t);
          return await (0, o.f)({
            assetsToLoad: d,
            drawImage: (e) =>
              _(e, {
                timestamp: i,
                colors: r,
                description: l,
                entry: n,
                numAvatars: a.length,
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
          return f;
        },
      }),
        n(653041),
        n(512722);
      var a = n(913527),
        l = n.n(a),
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
            a = c.default.extractTimestamp(e.extra.application_id);
          if (
            (7 >= l()().diff(l()(a), "days") &&
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
              colors: a,
              description: l,
              entry: i,
              numAvatars: o,
            } = t,
            u = a.map((e, t) => ({ color: e, stop: t }));
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
            e.drawText(l, { x: m.Iq, y: 64, h: 32, w: m.kC }, !0);
          let c = v(i, n);
          (0, h.J)({
            canvas: e,
            badges: c,
            startPosition: m.Iq,
            maxWidth: m.kC,
          });
        },
        f = async (e) => {
          let {
              applicationImageSrc: t,
              entry: n,
              avatarSrcs: a,
              description: l,
              timestamp: i,
              colors: r,
              channelId: u,
            } = e,
            c = n.extra.game_name,
            d = E(a, t);
          return await (0, o.f)({
            assetsToLoad: d,
            drawImage: (e) =>
              _(e, {
                timestamp: i,
                colors: r,
                description: l,
                entry: n,
                numAvatars: a.length,
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
          return f;
        },
        As: function () {
          return m;
        },
        I8: function () {
          return A;
        },
        Iq: function () {
          return T;
        },
        Md: function () {
          return o;
        },
        NC: function () {
          return C;
        },
        NM: function () {
          return a;
        },
        Op: function () {
          return h;
        },
        PW: function () {
          return N;
        },
        Pu: function () {
          return _;
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
          return l;
        },
        fj: function () {
          return s;
        },
        i6: function () {
          return i;
        },
        kC: function () {
          return p;
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
          return v;
        },
        t1: function () {
          return d;
        },
      });
      let a =
          "M20.97 4.06c0 .18.08.35.24.43.55.28.9.82 1.04 1.42.3 1.24.75 3.7.75 7.09v4.91a3.09 3.09 0 0 1-5.85 1.38l-1.76-3.51a1.09 1.09 0 0 0-1.23-.55c-.57.13-1.36.27-2.16.27s-1.6-.14-2.16-.27c-.49-.11-1 .1-1.23.55l-1.76 3.51A3.09 3.09 0 0 1 1 17.91V13c0-3.38.46-5.85.75-7.1.15-.6.49-1.13 1.04-1.4a.47.47 0 0 0 .24-.44c0-.7.48-1.32 1.2-1.47l2.93-.62c.5-.1 1 .06 1.36.4.35.34.78.71 1.28.68a42.4 42.4 0 0 1 4.4 0c.5.03.93-.34 1.28-.69.35-.33.86-.5 1.36-.39l2.94.62c.7.15 1.19.78 1.19 1.47ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
        l =
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
        f = 32,
        T = 120,
        p = 260,
        g = 88,
        I = 99,
        N = 12,
        C = 18,
        A = ["gg sans", "sans-serif"],
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
      var a = n(693824),
        l = n(169040);
      function i(e) {
        let t,
          { canvas: n, badges: i, startPosition: r, maxWidth: s } = e;
        for (let { iconPath: e, text: o } of (n.setFont({
          size: 12,
          family: l.I8,
          weight: l.Ue,
          truncate: a.GX.None,
        }),
        i)) {
          let a = null != t ? t.w + t.x + l.PW : r,
            i = null != t ? t.w + t.x + l.PW + l.NC : r + l.NC;
          n.drawPath(e, { x: a, y: l.f0 }, !0, 0.6),
            (t = n.drawText(o, { x: i, y: l.m2, w: s }, !0));
        }
      }
      function r(e) {
        let {
          canvas: t,
          avatarSrcs: n,
          position: { x: l, y: i },
          avatarImageSize: r,
        } = e;
        for (let e = 0; e < n.length; e++)
          e < n.length - 1 &&
            t.clipRoundedRect(
              { x: l + (e + 1) * (r - 8) - 2, y: i - 1, w: r + 2, h: r + 2 },
              r / 2,
              !0,
            ),
            t.drawRoundedImage(
              n[e],
              { x: l + e * (r - 8), y: i },
              { w: r, h: r },
              50,
              { fillMode: a.JU.Cover },
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
      var a = n(5192),
        l = n(561308),
        i = n(689938);
      let r = (e, t) =>
          i.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: t.username,
            activity: e.extra.game_name,
          }),
        s = (e) => {
          let t = (0, l.kr)(e);
          return (0, l.Ol)(e)
            ? t
              ? i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_NEW_GAME
              : i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_NEW_GAME
            : t
              ? i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_GAME
              : i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME;
        },
        o = (e, t, n) => {
          let l = s(e),
            i = a.ZP.getName(
              null == t ? void 0 : t.guild_id,
              null == t ? void 0 : t.id,
              n,
            ),
            r = e.extra.game_name;
          return l
            .plainFormat({ gameName: r, userName: i })
            .replaceAll("*", "");
        },
        u = (e) => {
          let { entry: t, channel: n, users: r, countOthers: s } = e;
          return (
            (0, l.kr)(t)
              ? i.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYING
              : i.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED
          )
            .plainFormat({
              gameName: t.extra.game_name,
              user1: a.ZP.getName(
                null == n ? void 0 : n.guild_id,
                null == n ? void 0 : n.id,
                r[0],
              ),
              user2: a.ZP.getName(
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
      var a = n(884439),
        l = n(55e3),
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
            null === (t = (0, s.PJ)(e, a.N.AGGREGATE_COUNT)) || void 0 === t
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
              mediaImageSrc: a,
              artist: s,
              description: c,
              colors: d,
              badges: h,
            } = e,
            x = m({
              avatarSrc: t.getAvatarURL(n.guild_id, 128),
              mediaImageSrc: a,
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
      var a = n(55e3),
        l = n(693824),
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
                { fillMode: l.JU.Contain },
              );
              n === l.vP.Failure &&
                (n = e.drawRoundedImage(
                  "ApplicationImage",
                  { x: s.sB, y: s.sB },
                  { w: s.Pu, h: s.Pu },
                  8,
                )),
                n === l.vP.Failure &&
                  e.drawPath(a.Cv, { x: s.sB, y: s.sB }, !0, 2 + 2 / 3),
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
                  truncate: l.GX.Wrap,
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
              format: l.kH.CloudUpload,
              quality: 1,
              fileName: "user-reacting-to-".concat(v, ".png").toLowerCase(),
              fileType: "png",
              channelId: E,
            },
          });
        };
    },
    370370: function (e, t, n) {
      var a = n(735250),
        l = n(470079),
        i = n(379357),
        r = n(442550),
        s = n(297781),
        o = n(443487),
        u = n(494399);
      let c = [s.OV, s.EE, s.Af, s.U9, s.n8, s.pQ];
      t.Z = l.memo((e) => {
        let { entry: t, channel: n, selected: l, hovered: d } = e,
          { largeImage: h } = (0, i.rv)({ entry: t, showCoverImage: !1 });
        return (0, a.jsxs)(o.Zb, {
          selected: l,
          children: [
            (0, a.jsxs)(o.e$, {
              children: [
                (0, a.jsx)(o.F9, {
                  entry: t,
                  channelId: n.id,
                  guildId: n.guild_id,
                }),
                (0, a.jsx)(o.ll, { children: t.extra.activity_name }),
                (0, a.jsx)(s.Gk, {
                  location: s.Gt.CARD,
                  children: c.map((e, n) =>
                    (0, a.jsx)(e, { entry: t, hovered: d }, n),
                  ),
                }),
              ],
            }),
            (0, a.jsx)(r.f, {
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
      var a = n(735250),
        l = n(470079),
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
        f = n(561308),
        T = n(907152),
        p = n(206295),
        g = n(297781),
        I = n(591853),
        N = n(797342),
        C = n(981631),
        A = n(689938);
      let Z = (e, t) =>
          A.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: t.username,
            activity: e.extra.activity_name,
          }),
        P = (e, t, n) => {
          let a = A.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME,
            l = E.ZP.getName(t.guild_id, t.id, n),
            i = e.extra.activity_name;
          return a
            .plainFormat({ gameName: i, userName: l })
            .replaceAll("*", "");
        },
        S = (e) => {
          let { entry: t, channel: n, users: a, countOthers: l } = e;
          return A.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED.plainFormat(
            {
              gameName: t.extra.activity_name,
              user1: E.ZP.getName(
                null == n ? void 0 : n.guild_id,
                null == n ? void 0 : n.id,
                a[0],
              ),
              user2: E.ZP.getName(
                null == n ? void 0 : n.guild_id,
                null == n ? void 0 : n.id,
                a[1],
              ),
              countOthers: l,
            },
          ).replaceAll("*", "");
        };
      t.ZP = (e) => {
        let {
            channel: t,
            entry: n,
            onReaction: E,
            onVoiceChannelPreview: M,
          } = e,
          { largeImage: O } = (0, v.rv)({ entry: n }),
          {
            user: R,
            details: j,
            activity: y,
            embeddedActivity: L,
          } = (0, N.n)(n),
          { primaryColor: w, secondaryColor: D } = (0, p.Z)(
            null == O ? void 0 : O.src,
          ),
          b = (0, i.e7)([m.default], () => m.default.locale),
          {
            displayParticipants: U,
            participant1: B,
            participant2: k,
            numOtherParticipants: F,
          } = (0, _.Z)(n, 3),
          G = () => {
            c._(d._b.TEXT, h.I.NORMAL, {
              applicationId: n.extra.application_id,
            });
          },
          H = l.useCallback(
            (e) => {
              if (
                (null == O ? void 0 : O.src) == null ||
                null == t ||
                null == R
              )
                return;
              let a =
                F > 0
                  ? S({ entry: n, channel: t, users: [B, k], countOthers: F })
                  : P(n, t, R);
              return (0, T.C4)({
                entry: n,
                applicationImageSrc: null == O ? void 0 : O.src,
                avatarSrcs: U.map((e) => e.getAvatarURL(t.guild_id, 128)),
                description: a,
                timestamp: (0, f.yh)(n, b),
                colors: [w, D],
                channelId: e,
              });
            },
            [null == O ? void 0 : O.src, t, U, n, b, F, B, k, w, D, R],
          );
        if (null == R) return null;
        let Y = (0, a.jsx)(g.PZ, { location: g.Gt.POPOUT, entry: n }),
          z = (0, a.jsx)(I.wG, {
            channel: t,
            userDescription: (0, f.kr)(n)
              ? A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2
              : A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
            title: n.extra.activity_name,
            subtitle: j,
            badges: Y,
            entry: n,
            onClickTitle: G,
            onClickSubtitle: G,
            onClickThumbnail: G,
          }),
          V = (0, s.Z)(y, C.xjy.JOIN) || (0, o.Z)(y),
          W = V
            ? (0, a.jsx)(u.Z, {
                isEmbedded: (0, o.Z)(y),
                embeddedActivity: L,
                activity: y,
                user: R,
                ButtonComponent: (e) =>
                  (0, a.jsx)(I.Ll, { IconComponent: r.DoorEnterIcon, ...e }),
              })
            : null,
          q = (0, a.jsx)(I.Ll, {
            onClick: G,
            IconComponent: r.AppsIcon,
            children: A.Z.Messages.CONTENT_INVENTORY_VIEW_ACTIVITY,
          }),
          K = [V ? W : q].filter(x.lm);
        return (0, a.jsxs)(I.yR, {
          children: [
            z,
            (0, a.jsx)(I.St, {
              children: (0, a.jsx)(I.WT, {
                onReaction: E,
                onVoiceChannelPreview: M,
                user: R,
                channel: t,
                generateReactionImage: H,
                reactionImageAltText: Z(n, R),
                entry: n,
                buttons: K,
              }),
            }),
          ],
        });
      };
    },
    178762: function (e, t, n) {
      n.d(t, {
        J: function () {
          return D;
        },
        YN: function () {
          return j;
        },
        iZ: function () {
          return y;
        },
      }),
        n(47120);
      var a = n(735250),
        l = n(470079),
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
        f = n(370370),
        T = n(107062),
        p = n(91140),
        g = n(227172),
        I = n(551228),
        N = n(678869),
        C = n(278399),
        A = n(886217),
        Z = n(555672),
        P = n(644548),
        S = n(335326),
        M = n(268010),
        O = n(797342),
        R = n(206583);
      let j = 72;
      function y(e) {
        return (null == e ? void 0 : e.type) === E.so.CONTENT_INVENTORY ? j : 0;
      }
      let L = (e) => {
          let { entry: t, ...n } = e;
          switch (t.content_type) {
            case o.s.PLAYED_GAME:
              return (0, a.jsx)(p.Z, { ...n, entry: t });
            case o.s.WATCHED_MEDIA:
              return (0, a.jsx)(S.Z, { ...n, entry: t });
            case o.s.TOP_GAME:
              return (0, a.jsx)(Z.ZP, { ...n, entry: t });
            case o.s.TOP_ARTIST:
              return (0, a.jsx)(C.ZP, { ...n, entry: t });
            case o.s.LISTENED_SESSION:
              return (0, a.jsx)(I.ZP, { ...n, entry: t });
            case o.s.LAUNCHED_ACTIVITY:
              return (0, a.jsx)(f.Z, { ...n, entry: t });
            case o.s.LEADERBOARD:
              return (0, a.jsx)(x.Z, { ...n, entry: t });
            default:
              return null;
          }
        },
        w = (e) => {
          let { requestId: t, closePopout: n, ...l } = e;
          return (0, a.jsx)(D, {
            onReaction: (e, a) => {
              (0, _.L)(e, {
                entry: l.entry,
                channelId: l.channel.id,
                guildId: l.channel.guild_id,
                requestId: t,
                destinationChannelId: a.id,
                destinationGuildId: a.guild_id,
              }),
                n();
            },
            closePopout: n,
            onVoiceChannelPreview: (e, n) => {
              (0, _.L)(R.xP.VOICE_CHANNEL_PREVIEWED, {
                entry: l.entry,
                channelId: l.channel.id,
                guildId: l.channel.guild_id,
                requestId: t,
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
                richPresenceName: n,
              });
            },
            ...l,
          });
        },
        D = (e) => {
          let { entry: t, ...n } = e;
          switch (t.content_type) {
            case o.s.PLAYED_GAME:
              return (0, a.jsx)(g.Z, { ...n, entry: t });
            case o.s.WATCHED_MEDIA:
              return (0, a.jsx)(M.Z, { ...n, entry: t });
            case o.s.TOP_GAME:
              return (0, a.jsx)(P.Z, { ...n, entry: t });
            case o.s.TOP_ARTIST:
              return (0, a.jsx)(A.Z, { ...n, entry: t });
            case o.s.LISTENED_SESSION:
              return (0, a.jsx)(N.Z, { ...n, entry: t });
            case o.s.LAUNCHED_ACTIVITY:
              return (0, a.jsx)(T.ZP, { ...n, entry: t });
            case o.s.LEADERBOARD:
              return (0, a.jsx)(m.Z, { channel: n.channel });
            default:
              return null;
          }
        };
      t.ZP = l.memo((e) => {
        var t;
        let { index: i, ...o } = e,
          [m, x] = l.useState("default"),
          E = (0, s.JA)("".concat(i)),
          f =
            null === (t = v.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.isStaff(),
          { isRich: T, appName: p } = (0, O.n)(o.entry),
          g = {
            entry: o.entry,
            channelId: o.channel.id,
            guildId: o.channel.guild_id,
            requestId: o.requestId,
            richPresenceName: T ? p : void 0,
          },
          I = l.useRef(!1),
          [N, C] = l.useState(!1),
          [A, Z] = l.useState(!1),
          P = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled);
        l.useEffect(() => {
          N && P && Z(!0);
        }, [N, P]);
        let S = l.useCallback(
            (e) => {
              if (!!f)
                (0, d.jW)(e, async () => {
                  let { default: e } = await n.e("153").then(n.bind(n, 330150));
                  return () =>
                    (0, a.jsx)(e, { entry: o.entry, requestId: o.requestId });
                });
            },
            [o, f],
          ),
          M = l.useCallback(() => {
            x(String(Date.now()));
          }, []),
          j = l.useCallback(
            r().throttle(
              (e) => {
                (0, _.L)(R.xP.CARD_POPOUT_OPEN, e);
              },
              2e3,
              { leading: !0, trailing: !1 },
            ),
            [],
          ),
          y = () => {
            (I.current = !1),
              setTimeout(() => {
                !I.current && (C(!1), Z(P));
              }, 100);
          };
        return (0, a.jsx)("div", {
          onMouseEnter: () => {
            (I.current = !0),
              setTimeout(() => {
                I.current && C(!0), j(g);
              }, 100);
          },
          onMouseLeave: y,
          children: (0, a.jsx)(c.Popout, {
            renderPopout: (e) => {
              let { closePopout: t } = e;
              return (0, a.jsx)(w, {
                closePopout: t,
                updatePopoutPosition: M,
                ...o,
              });
            },
            position: "left",
            shouldShow: N,
            positionKey: m,
            onRequestOpen: () => j(g),
            onRequestClose: () => {
              A && y();
            },
            spacing: 8,
            children: (e, t) => {
              let { isShown: n } = t;
              return (0, a.jsx)(c.Clickable, {
                ...e,
                ...E,
                focusProps: {
                  offset: { top: 4, bottom: 4, left: 4, right: 4 },
                },
                onClick: () => {
                  !N && C(!0);
                },
                onContextMenu: S,
                children: (0, a.jsx)(L, {
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
          return R;
        },
      });
      var a = n(735250),
        l = n(470079),
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
        f = n(192918),
        T = n(22211),
        p = n(561308),
        g = n(919394),
        I = n(438226),
        N = n(206295),
        C = n(91140),
        A = n(297781),
        Z = n(591853),
        P = n(410441),
        S = n(797342),
        M = n(981631),
        O = n(689938);
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
            onUserPopoutClosed: j,
          } = e,
          { largeImage: y } = (0, _.rv)({ entry: n }),
          { user: L, details: w, appName: D, activity: b } = (0, S.n)(n),
          { primaryColor: U, secondaryColor: B } = (0, N.Z)(
            null == y ? void 0 : y.src,
          ),
          k = (0, r.e7)([m.default], () => m.default.locale),
          { streamPreviewUrl: F, stream: G } = (0, T.Z)(n),
          {
            displayParticipants: H,
            participant1: Y,
            participant2: z,
            numOtherParticipants: V,
          } = (0, f.Z)(n, 3),
          W = l.useCallback(
            (e) => {
              if (
                (null == y ? void 0 : y.src) == null ||
                null == t ||
                null == L
              )
                return;
              let a =
                V > 0
                  ? (0, I.VY)({
                      entry: n,
                      channel: t,
                      users: [Y, z],
                      countOthers: V,
                    })
                  : (0, I.HV)(n, t, L);
              return (0, g.SO)({
                entry: n,
                applicationImageSrc: null == y ? void 0 : y.src,
                avatarSrcs: H.map((e) => e.getAvatarURL(t.guild_id, 128)),
                description: a,
                timestamp: (0, p.yh)(n, k),
                colors: [U, B],
                channelId: e,
              });
            },
            [null == y ? void 0 : y.src, t, H, n, k, V, Y, z, U, B, L],
          );
        if (null == L) return null;
        let q = null != n.extra.platform ? R[n.extra.platform] : null,
          K = (0, a.jsx)(A.Gk, {
            location: null == F ? A.Gt.POPOUT : A.Gt.STREAMING_POPOUT,
            children: C.W.map((e, t) => (0, a.jsx)(e, { entry: n }, t)),
          }),
          J =
            null == F
              ? (0, a.jsx)(Z.wG, {
                  channel: t,
                  headerIcons:
                    null == q
                      ? null
                      : (0, a.jsx)(P.Z, {
                          Icon: q,
                          "aria-label":
                            O.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
                        }),
                  userDescription: (0, p.kr)(n)
                    ? O.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2
                    : O.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                  title: D,
                  subtitle: w,
                  badges: K,
                  entry: n,
                  disableGameProfileLinks: i,
                  onUserPopoutClosed: j,
                })
              : (0, a.jsx)(Z.jL, {
                  channel: t,
                  streamPreviewSrc: F,
                  title: n.extra.game_name,
                  subtitle: w,
                  badges: K,
                  userDescription:
                    O.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING_V2,
                  entry: n,
                  stream: G,
                  onUserPopoutClosed: j,
                }),
          X =
            (0, o.Z)(b, M.xjy.JOIN) || (0, u.Z)(b)
              ? (0, a.jsx)(d.Z, {
                  activity: b,
                  user: L,
                  ButtonComponent: (e) =>
                    (0, a.jsx)(Z.Ll, {
                      IconComponent: s.GameControllerIcon,
                      ...e,
                    }),
                })
              : null,
          $ = [
            X,
            (0, c.Z)(b)
              ? (0, a.jsx)(h.Z, {
                  activity: b,
                  ButtonComponent: (e) =>
                    (0, a.jsx)(Z.Ll, { IconComponent: s.EyeIcon, ...e }),
                })
              : null,
          ].filter(v.lm);
        return (0, a.jsxs)(Z.yR, {
          children: [
            J,
            (0, a.jsx)(Z.St, {
              children: (0, a.jsx)(Z.WT, {
                onReaction: x,
                onVoiceChannelPreview: E,
                user: L,
                channel: t,
                generateReactionImage: W,
                reactionImageAltText: (0, I.IS)(n, L),
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
          return j;
        },
      }),
        n(627494),
        n(757143),
        n(653041);
      var a = n(735250),
        l = n(470079),
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
        f = n(561308),
        T = n(256726),
        p = n(206295),
        g = n(551228),
        I = n(591853),
        N = n(371991),
        C = n(410441),
        A = n(981631),
        Z = n(616922),
        P = n(689938),
        S = n(290500),
        M = n(738127);
      let O = (e, t, n) => {
        let { artist: a, media: l } = e,
          i =
            P.Z.Messages
              .MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST,
          r = v.ZP.getName(t.guild_id, t.id, n);
        return i
          .plainFormat({ artist: a, userName: r, media: l })
          .replaceAll("*", "");
      };
      function R(e) {
        let { activity: t } = e,
          n = t.timestamps,
          i = (0, N.tS)(),
          { durationTimestamp: r, seekBarStyles: s } = l.useMemo(() => {
            var e;
            let { start: n, end: a } =
              null !== (e = t.timestamps) && void 0 !== e ? e : {};
            if (null == n || null == a) return {};
            let l = Math.min(a, i),
              r = a - n,
              s = Math.floor((Math.max(l - n, 0) / r) * 100);
            return {
              seekBarStyles: { width: "".concat(s, "%") },
              durationTimestamp: (0, f.T_)({ start: 0 }, r),
            };
          }, [t, i]);
        return null == s
          ? null
          : (0, a.jsxs)("div", {
              className: S.listeningTimeline,
              children: [
                (0, a.jsx)(N.x3, { entry: n }),
                (0, a.jsx)("div", {
                  className: S.seekBarContainer,
                  children: (0, a.jsx)("div", {
                    className: S.seekBarFill,
                    style: s,
                  }),
                }),
                (0, a.jsx)(o.Text, {
                  className: S.timestamp,
                  variant: "text-xs/normal",
                  tabularNumbers: !0,
                  color: void 0,
                  children: r,
                }),
              ],
            });
      }
      function j(e) {
        var t, n, v;
        let N,
          S,
          j,
          {
            channel: y,
            entry: L,
            closePopout: w,
            onReaction: D,
            onVoiceChannelPreview: b,
          } = e,
          { largeImage: U } = (0, _.rv)({ entry: L }),
          {
            activity: B,
            currentEntry: k,
            artist: F,
            title: G,
            user: H,
          } = (0, g.pi)(L),
          { primaryColor: Y, secondaryColor: z } = (0, p.Z)(
            null == U ? void 0 : U.src,
          ),
          V = (0, r.e7)(
            [c.Z, x.default],
            () =>
              (null == B ? void 0 : B.type) === A.IIU.LISTENING && null != H
                ? (0, h.Z)(c.Z, x.default, H, B)
                : void 0,
            [B, H],
            s.Z,
          ),
          W = l.useCallback(() => {
            var e;
            if (null == y || null == H) return;
            let t =
                null === (e = B.timestamps) || void 0 === e ? void 0 : e.start,
              n = (0, f.T_)(null != t ? { start: t } : L, Date.now());
            return (0, T.CR)({
              user: H,
              channel: y,
              mediaImageSrc: null == U ? void 0 : U.src,
              artist: F,
              description: O({ artist: F, media: G }, y, H),
              colors: [Y, z],
              badges: (0, T.jE)({ timestamp: n }),
            });
          }, [B, F, y, L, null == U ? void 0 : U.src, Y, z, G, H]);
        if (null == B || null == k) return null;
        let q = F,
          K = [];
        if (k.media.provider === i.p.SPOTIFY) {
          (S = () => {
            (0, u.aG)(B);
          }),
            (j = () => {
              (0, u.Z5)(B, H.id);
            }),
            (N = () => {
              (0, u.aG)(B);
            });
          (q = (0, a.jsx)(d.Z, {
            artists: F,
            canOpen: null != B.sync_id,
            linkClassName: M.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
              (0, u.d$)(B, H.id, e);
            },
          })),
            (null == V ? void 0 : V.syncDisabled) === !1 &&
              K.push(
                (0, a.jsx)(
                  I.Ll,
                  {
                    onClick: () => {
                      (0, m.Z)(V, Z.kG.USER_ACTIVITY_SYNC), w();
                    },
                    IconComponent: o.UserPlayIcon,
                    children:
                      P.Z.Messages
                        .ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG,
                  },
                  "listen-along",
                ),
              );
        }
        let J = (0, a.jsx)(I.wG, {
          onClickThumbnail: j,
          channel: y,
          entry: L,
          headerIcons:
            k.media.provider === i.p.SPOTIFY
              ? (0, a.jsx)(C.Z, {
                  onClick: N,
                  "aria-label":
                    P.Z.Messages
                      .ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
                  Icon: E.Z,
                })
              : null,
          userDescription: (0, f.kr)(L)
            ? P.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING_V2
            : P.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
          title: G,
          onClickTitle: S,
          subtitle: q,
          badges: null,
          children:
            (null === (t = B.timestamps) || void 0 === t ? void 0 : t.start) !=
              null && (0, a.jsx)(R, { activity: B }),
        });
        return (0, a.jsxs)(I.yR, {
          children: [
            J,
            (0, a.jsx)(I.St, {
              children: (0, a.jsx)(I.WT, {
                onReaction: D,
                onVoiceChannelPreview: b,
                user: H,
                channel: y,
                generateReactionImage: W,
                reactionImageAltText:
                  ((n = F),
                  (v = H),
                  P.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format(
                    { username: v.username, activity: n },
                  )),
                entry: L,
                buttons: K,
              }),
            }),
          ],
        });
      }
    },
    886217: function (e, t, n) {
      n(627494), n(757143);
      var a = n(735250),
        l = n(470079),
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
        f = n(591853),
        T = n(410441),
        p = n(616922),
        g = n(689938);
      let I = (e, t, n, a) => {
          let l = (function (e) {
              if (e === i._.WEEK)
                return g.Z.Messages
                  .MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_WEEK_POPOUT;
            })(a),
            r = h.ZP.getName(t.guild_id, t.id, n),
            s = e.extra.artist.name;
          return l.plainFormat({ artist: s, userName: r }).replaceAll("*", "");
        },
        N = (e, t) =>
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
          { parent_title: C, provider: A, image_url: Z } = n.extra.media,
          P = n.extra.artist.name,
          S = (0, s.e7)([u.default], () => u.default.getUser(n.author_id)),
          { primaryColor: M, secondaryColor: O } = (0, E.Z)(Z),
          R = (0, m.Nq)(n),
          j = l.useCallback(() => {
            if (null == t || null == S || !(0, d.Hi)(R, v.y9)) return;
            let e = I(n, t, S, R);
            return (0, x.CR)({
              user: S,
              channel: t,
              mediaImageSrc: Z,
              artist: P,
              description: e,
              colors: [M, O],
              badges: (0, x.UU)(n),
            });
          }, [Z, P, t, n, M, R, O, S]);
        if (null == S || !(0, d.Hi)(R, v.y9)) return null;
        let y = () => {
          let e = p.Hw.ALBUM,
            t = o.Z.isProtocolRegistered()
              ? p.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id)
              : p.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
          window.open(t);
        };
        return (0, a.jsxs)(f.yR, {
          children: [
            (0, a.jsx)(f.wG, {
              onClickTitle: y,
              onClickSubtitle: () => {
                let e = p.Hw.ARTIST,
                  t = o.Z.isProtocolRegistered()
                    ? p.C7.PLAYER_OPEN(e, n.extra.artist.external_id)
                    : p.C7.WEB_OPEN(e, n.extra.artist.external_id);
                window.open(t);
              },
              onClickThumbnail: y,
              channel: t,
              entry: n,
              headerIcons:
                A === r.p.SPOTIFY
                  ? (0, a.jsx)(T.Z, {
                      Icon: c.Z,
                      "aria-label": g.Z.Messages.SPOTIFY,
                    })
                  : null,
              userDescription:
                g.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
              title: C,
              subtitle: P,
              badges: (0, a.jsx)(_.Gk, {
                location: _.Gt.POPOUT,
                children: v.Ho.map((e, t) => (0, a.jsx)(e, { entry: n }, t)),
              }),
            }),
            (0, a.jsx)(f.St, {
              children: (0, a.jsx)(f.WT, {
                onReaction: i,
                onVoiceChannelPreview: h,
                user: S,
                channel: t,
                generateReactionImage: j,
                reactionImageAltText: N(n, S),
                entry: n,
              }),
            }),
          ],
        });
      };
    },
    644548: function (e, t, n) {
      n(627494), n(757143);
      var a = n(735250),
        l = n(470079),
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
        f = n(689938);
      let T = (e, t, n, a) => {
          let l = (function (e) {
              if (e === i._.WEEK)
                return f.Z.Messages
                  .MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT;
            })(a),
            r = s.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.game_name;
          return l
            .plainFormat({ gameName: o, userName: r })
            .replaceAll("*", "");
        },
        p = (e, t) =>
          f.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
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
          { user: N, details: C, appName: A } = (0, _.n)(n),
          { primaryColor: Z, secondaryColor: P } = (0, d.Z)(
            null == I ? void 0 : I.src,
          ),
          S = (0, u.yA)(n),
          M = (0, u.Nq)(n),
          O = l.useCallback(
            (e) => {
              if (
                null != t &&
                null != N &&
                null != S &&
                null != M &&
                !!(0, m.qy)(M)
              )
                return (0, c.SO)({
                  entry: n,
                  applicationImageSrc: null == I ? void 0 : I.src,
                  avatarSrcs: [
                    N.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                  ],
                  description: T(n, t, N, M),
                  timestamp:
                    f.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format(
                      { hours: Math.round(S / r.Z.Seconds.HOUR) },
                    ),
                  colors: [Z, P],
                  channelId: e,
                });
            },
            [null == I ? void 0 : I.src, t, S, n, Z, M, P, N],
          );
        if (null == N || null == S || null == M || !(0, m.qy)(M)) return null;
        let R = null != n.extra.platform ? h.v[n.extra.platform] : null;
        return (0, a.jsxs)(E.yR, {
          children: [
            (0, a.jsx)(E.wG, {
              channel: t,
              headerIcons:
                null == R
                  ? null
                  : (0, a.jsx)(v.Z, {
                      Icon: R,
                      "aria-label":
                        f.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM,
                    }),
              entry: n,
              userDescription:
                f.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
              title: A,
              subtitle: C,
              badges: (0, a.jsx)(x.Gk, {
                location: x.Gt.POPOUT,
                children: m.Hs.map((e, t) => (0, a.jsx)(e, { entry: n }, t)),
              }),
              disableGameProfileLinks: i,
            }),
            (0, a.jsx)(E.St, {
              children: (0, a.jsx)(E.WT, {
                onReaction: s,
                onVoiceChannelPreview: g,
                user: N,
                channel: t,
                generateReactionImage: O,
                reactionImageAltText: p(n, N),
                entry: n,
              }),
            }),
          ],
        });
      };
    },
    268010: function (e, t, n) {
      n(627494), n(757143);
      var a = n(735250),
        l = n(470079),
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
        f = n(591853),
        T = n(410441),
        p = n(689938);
      let g = (e, t, n) => {
          let a = p.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
            l = c.ZP.getName(
              null == t ? void 0 : t.guild_id,
              null == t ? void 0 : t.id,
              n,
            ),
            i = e.extra.media_title;
          return a
            .plainFormat({
              mediaTitle: i,
              userName: l,
              episodeDescription: e.extra.media_subtitle,
            })
            .replaceAll("*", "");
        },
        I = (e, t) =>
          p.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
            username: t.username,
            activity: e.extra.media_title,
          });
      t.Z = (e) => {
        let {
            channel: t,
            entry: n,
            onReaction: c,
            onVoiceChannelPreview: N,
          } = e,
          C = (0, i.e7)([o.default], () => o.default.getUser(n.author_id)),
          { largeImage: A } = (0, h.rv)({ entry: n }),
          { primaryColor: Z, secondaryColor: P } = (0, E.Z)(
            null == A ? void 0 : A.src,
          ),
          S = (0, i.e7)([s.default], () => s.default.locale),
          M = (0, m.ap)(n.extra.media_assets_large_text),
          O = l.useCallback(
            (e) => {
              if (null != C && (null == A ? void 0 : A.src) != null)
                return (0, x.B)({
                  entry: n,
                  mediaImageSrc: null == A ? void 0 : A.src,
                  avatarSrc: C.getAvatarURL(
                    null == t ? void 0 : t.guild_id,
                    128,
                  ),
                  description: g(n, t, C),
                  timestamp: (0, m.yh)(n, S),
                  episodeDescription: M,
                  colors: [Z, P],
                  channelId: e,
                });
            },
            [t, n, M, S, null == A ? void 0 : A.src, Z, P, C],
          ),
          R = () => {
            if (null == n.extra.url) return;
            let e = d.Z.safeParseWithQuery(n.extra.url);
            if (null != e && null != e.protocol && null != e.hostname)
              (0, u.q)({ href: d.Z.format(e), trusted: !1 });
          };
        return null == C
          ? null
          : (0, a.jsxs)(f.yR, {
              children: [
                (0, a.jsx)(f.wG, {
                  channel: t,
                  entry: n,
                  userDescription: (0, m.kr)(n)
                    ? p.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING_V2
                    : p.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED_V2,
                  title: n.extra.media_title,
                  subtitle: n.extra.media_subtitle,
                  headerIcons: (0, a.jsx)(T.Z, {
                    Icon: r.CrunchyrollNeutralIcon,
                    "aria-label": p.Z.Messages.CRUNCHYROLL,
                  }),
                  badges: (0, a.jsx)(_.Gk, {
                    location: _.Gt.POPOUT,
                    children: v.t.map((e, t) => (0, a.jsx)(e, { entry: n }, t)),
                  }),
                  onClickTitle: R,
                  onClickThumbnail: R,
                }),
                (0, a.jsx)(f.St, {
                  children: (0, a.jsx)(f.WT, {
                    onReaction: c,
                    onVoiceChannelPreview: N,
                    user: C,
                    channel: t,
                    generateReactionImage: O,
                    reactionImageAltText: I(n, C),
                    entry: n,
                  }),
                }),
              ],
            });
      };
    },
    111386: function (e, t, n) {
      n(47120);
      var a = n(735250),
        l = n(470079),
        i = n(704215),
        r = n(481060),
        s = n(243778),
        o = n(689938),
        u = n(765388),
        c = n(442937);
      let d = () =>
        (0, a.jsxs)("div", {
          className: u.coachtipInner,
          children: [
            (0, a.jsx)("img", {
              src: c,
              alt: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_IMAGE_ALT,
              className: u.coachtipAsset,
            }),
            (0, a.jsxs)("div", {
              className: u.coachtipTextContainer,
              children: [
                (0, a.jsx)(r.Heading, {
                  variant: "heading-lg/semibold",
                  children: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_HEADER,
                }),
                (0, a.jsx)(r.Text, {
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
          [o, c] = l.useState(!1);
        return (l.useEffect(() => {
          setTimeout(() => {
            c(!0);
          }, 300);
        }),
        n !== i.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP)
          ? (0, a.jsx)(a.Fragment, { children: t })
          : (0, a.jsx)(r.Tooltip, {
              text: (0, a.jsx)(d, {}),
              tooltipClassName: u.coachtip,
              tooltipContentClassName: u.coachtipContent,
              position: "left",
              allowOverflow: !0,
              forceOpen: o,
              shouldShow: o,
              hideOnClick: !1,
              "aria-label": "test",
              children: (e) => (0, a.jsx)("div", { ...e, children: t }),
            });
      };
    },
    591853: function (e, t, n) {
      n.d(t, {
        Ll: function () {
          return eg;
        },
        St: function () {
          return ex;
        },
        WT: function () {
          return eE;
        },
        jL: function () {
          return ep;
        },
        wG: function () {
          return eT;
        },
        yR: function () {
          return ed;
        },
      }),
        n(47120);
      var a = n(735250),
        l = n(470079),
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
        f = n(220779),
        T = n(201133),
        p = n(557135),
        g = n(194082),
        I = n(605236),
        N = n(543241),
        C = n(318374),
        A = n(258609),
        Z = n(810568),
        P = n(168524),
        S = n(382182),
        M = n(871118),
        O = n(565138),
        R = n(66999),
        j = n(790642),
        y = n(359110),
        L = n(12168),
        w = n(237583),
        D = n(131704),
        b = n(592125),
        U = n(430824),
        B = n(496675),
        k = n(699516),
        F = n(9156),
        G = n(594174),
        H = n(979651),
        Y = n(938475),
        z = n(626135),
        V = n(768581),
        W = n(5192),
        q = n(379357),
        K = n(26033),
        J = n(91907),
        X = n(358696),
        $ = n(656709),
        Q = n(192918),
        ee = n(22211),
        et = n(561308),
        en = n(206295),
        ea = n(111386),
        el = n(797342),
        ei = n(896449),
        er = n(469153),
        es = n(206583),
        eo = n(981631),
        eu = n(689938),
        ec = n(738127);
      function ed(e) {
        let { children: t } = e,
          n = l.useRef(null);
        return (
          (0, h.useFocusLock)(n),
          (0, a.jsx)("div", { className: ec.popout, ref: n, children: t })
        );
      }
      function eh(e) {
        let {
            children: t,
            backgroundImgSrc: n,
            className: l,
            style: i = {},
          } = e,
          { primaryColor: s, secondaryColor: o } = (0, en.Z)(n);
        return (
          null != n &&
            (i.background = "linear-gradient(45deg, "
              .concat(s, ", ")
              .concat(o, ")")),
          (0, a.jsx)(h.ThemeProvider, {
            theme: eo.BRd.DARK,
            children: (e) =>
              (0, a.jsx)("div", {
                "data-disable-adaptive-theme": !0,
                className: r()(ec.hero, e, l),
                style: i,
                children: t,
              }),
          })
        );
      }
      let em = l.createContext(null);
      function ex(e) {
        let { children: t } = e,
          n = l.useRef(null);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("div", {
              className: ec.interactionsContainerHeader,
              ref: (e) => (n.current = e),
            }),
            (0, a.jsx)("div", {
              className: ec.interactionsContainer,
              children: (0, a.jsx)(em.Provider, {
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
            onVoiceChannelPreview: g,
          } = e,
          [N, C] = l.useState(!1),
          [A, Z] = l.useState(null),
          P = (0, u.e7)(
            [B.Z],
            () =>
              null != t &&
              eo.TPd.CONTENT_ENTRY_EMBEDS.has(t.type) &&
              B.Z.can(eo.Plq.SEND_MESSAGES, t),
          ),
          [S, M] = l.useState(!1),
          [L, V] = l.useState(!1),
          { voiceBar: q, joinVoiceButton: K } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: i } = e,
              { streamPreviewUrl: r, channel: s } = (0, ee.Z)(n),
              { isRich: o, appName: c } = (0, el.n)(n),
              { needSubscriptionToAccess: m } = (0, R.Z)(
                null == t ? void 0 : t.id,
              ),
              E = (0, u.e7)([U.Z], () =>
                null != s ? U.Z.getGuild(s.guild_id) : void 0,
              ),
              v = (0, u.Wu)(
                [Y.ZP],
                () => (null != s ? Y.ZP.getVoiceStatesForChannel(s) : []),
                [s],
              ),
              _ = (0, u.e7)([H.Z], () =>
                H.Z.isInChannel(null == s ? void 0 : s.id),
              ),
              f = l.useMemo(() => {
                for (let e of v) {
                  let t = b.Z.getDMFromUserId(e.user.id),
                    n = null != t && F.ZP.isChannelMuted(null, t),
                    a = k.Z.isBlocked(e.user.id);
                  if (n || a) return !0;
                }
                return !1;
              }, [v]);
            if (null == s || null == E)
              return { voiceBar: void 0, joinVoiceButton: void 0 };
            let T = null != r,
              g = () => {
                x.Z.updateChatOpen(s.id, !0), (0, y.Kh)(s.id);
                null == i || i(s, o ? c : void 0);
              },
              I = () => {
                p.Z.handleVoiceConnect({
                  channel: s,
                  connected: _,
                  needSubscriptionToAccess: m,
                  routeDirectlyToChannel: !0,
                });
              },
              N = (e) => {
                let {
                    children: t,
                    text: n,
                    hasBlockedOrMutedVCParticipant: l,
                  } = e,
                  i = l
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          l &&
                            (0, a.jsx)(h.WarningIcon, {
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
                return (0, a.jsx)(
                  h.Tooltip,
                  {
                    "aria-label": l
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
              C = (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className: ec.voiceChannelPopoutReactorHeader,
                    children: [
                      (0, a.jsx)(N, {
                        text: eu.Z.Messages
                          .MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                        hasBlockedOrMutedVCParticipant: f,
                        children: (e) =>
                          (0, a.jsxs)(h.Clickable, {
                            ...e,
                            "aria-label":
                              eu.Z.Messages
                                .MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
                            onClick: g,
                            className: ec.voiceChannelPopoutReactorChannel,
                            children: [
                              (0, a.jsx)(O.Z, {
                                guild: E,
                                size: O.Z.Sizes.SMOL,
                                className: ec.voiceChannelGuildIcon,
                                active: !0,
                              }),
                              (0, a.jsx)(h.ChevronSmallRightIcon, {
                                size: "xxs",
                                color: d.Z.colors.INTERACTIVE_NORMAL,
                              }),
                              (0, a.jsx)(h.VoiceNormalIcon, {
                                size: "xs",
                                color: d.Z.colors.TEXT_NORMAL,
                              }),
                              (0, a.jsx)(h.Text, {
                                variant: "text-sm/medium",
                                color: "text-normal",
                                className: ec.voiceChannelName,
                                children: s.name,
                              }),
                            ],
                          }),
                      }),
                      (0, a.jsx)(w.Z, {
                        guildId: E.id,
                        users: v,
                        max: 3,
                        renderUser: (e, t) =>
                          (0, a.jsx)(h.Avatar, {
                            src: e.user.getAvatarURL(E.id, 16),
                            size: h.AvatarSizes.SIZE_16,
                            "aria-label": "avatar",
                            className: t,
                          }),
                        renderMoreUsers: (e) =>
                          (0, a.jsx)("div", {
                            className: ec.voiceChannelAdditionalParticipants,
                            children: (0, a.jsx)(h.Text, {
                              variant: "text-xxs/semibold",
                              color: "text-normal",
                              children: e,
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: ec.primaryActionPopoutDivider,
                  }),
                ],
              });
            return {
              voiceBar: C,
              joinVoiceButton: _
                ? null
                : (0, a.jsx)(N, {
                    hasBlockedOrMutedVCParticipant: f,
                    children: (e) =>
                      (0, a.jsx)(eg, {
                        ...e,
                        color: h.Button.Colors.GREEN,
                        onClick: I,
                        IconComponent: T ? h.ScreenIcon : h.VoiceNormalIcon,
                        children: T ? eu.Z.Messages.WATCH : eu.Z.Messages.JOIN,
                      }),
                  }),
            };
          })({ channel: t, entry: E, onVoiceChannelPreview: g }),
          { embeddedActivity: J } = (0, et.qy)(E),
          X = (function (e) {
            let t = (0, u.e7)([U.Z], () =>
                U.Z.getGuild(null == e ? void 0 : e.guildId),
              ),
              n = (0, u.e7)([b.Z], () =>
                b.Z.getChannel(null == e ? void 0 : e.channelId),
              ),
              l = (0, u.Wu)([G.default], () => {
                var t, n;
                return null !==
                  (n =
                    null == e
                      ? void 0
                      : null === (t = e.participants) || void 0 === t
                        ? void 0
                        : t.map((e) => G.default.getUser(e.userId))) &&
                  void 0 !== n
                  ? n
                  : [];
              });
            return null != e && null != t && null != n && D.sR.has(n.type)
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)("div", {
                      className: ec.voiceChannelPopoutReactorHeader,
                      children: [
                        (0, a.jsxs)(h.Clickable, {
                          "aria-label": eu.Z.Messages.VIEW_CHANNEL,
                          onClick: () => (0, y.Kh)(n.id),
                          className: ec.voiceChannelPopoutReactorChannel,
                          children: [
                            (0, a.jsx)(O.Z, {
                              guild: t,
                              size: O.Z.Sizes.SMOL,
                              className: ec.voiceChannelGuildIcon,
                              active: !0,
                            }),
                            (0, a.jsx)(h.ChevronSmallRightIcon, {
                              size: "xxs",
                              color: d.Z.colors.INTERACTIVE_NORMAL,
                            }),
                            (0, a.jsx)(h.TextIcon, {
                              size: "xs",
                              color: d.Z.colors.TEXT_NORMAL,
                            }),
                            (0, a.jsx)(h.Text, {
                              variant: "text-sm/medium",
                              color: "text-normal",
                              className: ec.voiceChannelName,
                              children: null == n ? void 0 : n.name,
                            }),
                          ],
                        }),
                        (0, a.jsx)(w.Z, {
                          guildId: t.id,
                          users: l,
                          max: 3,
                          renderUser: (e, n) =>
                            (0, a.jsx)(h.Avatar, {
                              src: e.getAvatarURL(t.id, 16),
                              size: h.AvatarSizes.SIZE_16,
                              "aria-label": "avatar",
                              className: n,
                            }),
                          renderMoreUsers: (e) =>
                            (0, a.jsx)("div", {
                              className: ec.voiceChannelAdditionalParticipants,
                              children: (0, a.jsx)(h.Text, {
                                variant: "text-xxs/semibold",
                                color: "text-normal",
                                children: e,
                              }),
                            }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: ec.primaryActionPopoutDivider,
                    }),
                  ],
                })
              : null;
          })(J),
          Q = null != K && 0 === v.length ? [K] : v,
          en = Q.length > 0,
          ei = Q.length >= 2,
          [ed, eh] = l.useState(!en),
          em = W.ZP.getName(
            null == t ? void 0 : t.guild_id,
            null == t ? void 0 : t.id,
            n,
          ),
          ex = null != t && N ? "#".concat(t.name) : "@".concat(em),
          eE = N
            ? eu.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER
            : eu.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL,
          e_ = async (e) => {
            let a;
            if (null != e) {
              if (
                (z.default.track(eo.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
                  surface_type: es.Kd.GUILD_MEMBER_LIST,
                  channel_id: null == t ? void 0 : t.id,
                  guild_id: null == t ? void 0 : t.guild_id,
                }),
                (0, I.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                M(!0),
                V(!1),
                N)
              )
                o()(
                  null != t,
                  "shareToChannelMode should only be true if a valid channel is passed",
                ),
                  (a = t);
              else {
                var l;
                let e = await m.Z.getOrEnsurePrivateChannel(n.id);
                a = null !== (l = b.Z.getChannel(e)) && void 0 !== l ? l : null;
              }
              return (
                o()(null != a, "Send channel must be defined"),
                eT({
                  reply: ":".concat(e.name, ":"),
                  sendToChannel: a,
                  onComplete: (e, t) => {
                    V(!0),
                      setTimeout(() => {
                        M(!1), s(e, t);
                      }, 600);
                  },
                  interactionType: es.xP.REACTION_EMOJI_REACT_SENT,
                  requiresChannelReadiness: !1,
                })
              );
            }
          },
          ef = async (e) => {
            let a;
            if (((0, I.EW)(c.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), N))
              o()(
                null != t,
                "shareToChannelMode should only be true if a valid channel is passed",
              ),
                (a = t);
            else {
              let e = await m.Z.openPrivateChannel(n.id, !1, !1),
                t = b.Z.getChannel(e);
              o()(null != t, "DM channel must be defined"), (a = t);
            }
            let l =
              a.type === eo.d4z.DM
                ? es.xP.DM_REACTION_MESSAGE_SENT
                : es.xP.CHANNEL_REACTION_MESSAGE_SENT;
            return eT({
              reply: e,
              sendToChannel: a,
              interactionType: l,
              onComplete: s,
              requiresChannelReadiness: !0,
            });
          },
          eT = async (e) => {
            let {
              reply: t,
              sendToChannel: n,
              onComplete: a,
              interactionType: l,
              requiresChannelReadiness: s,
            } = e;
            if ((null == A || A.focus(), (0, j.Io)("ContentPopout Reactor")))
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
                await (0, T.B)({ file: e, channel: n, altText: r, reply: t });
            }
            null == a || a(l, n);
          },
          ep = null != _ ? _ : null != q ? q : null != X ? X : void 0;
        return (
          l.useEffect(() => {
            ed && (null == A || A.focus());
          }, [A, N, ed]),
          (0, a.jsxs)("div", {
            style: { pointerEvents: S ? "none" : "all" },
            children: [
              (0, a.jsx)(er.Z, {
                sent: L,
                shown: S,
                className: ec.toastContainer,
              }),
              null != ep
                ? ep
                : (0, a.jsx)(ea.Z, {
                    children: (0, a.jsxs)("div", {
                      className: ec.emojiHotrailShareToChannel,
                      children: [
                        (0, a.jsx)(ev, { channel: t, onClickSuggestion: e_ }),
                        (0, a.jsx)(f.dE, { onSelectEmoji: e_ }),
                      ],
                    }),
                  }),
              (0, a.jsxs)("div", {
                className: ed
                  ? ec.inputContainerShareToChannel
                  : ec.hiddenButRenderedInputField,
                children: [
                  (0, a.jsx)(f.A7, {
                    placeholder: eu.Z.Messages.TEXTAREA_PLACEHOLDER.format({
                      channel: ex,
                    }),
                    onEnter: ef,
                    setEditorRef: (e) => Z(e),
                    channel: N ? t : void 0,
                    showEmojiButton: null != ep,
                    renderAttachButton: P
                      ? () =>
                          (0, a.jsx)(h.Tooltip, {
                            text: eE,
                            children: (e) =>
                              (0, a.jsx)(h.Clickable, {
                                ...e,
                                className: ec.shareToChannelButton,
                                onClick: () => C((e) => !e),
                                children: N
                                  ? (0, a.jsx)(h.TextIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                    })
                                  : (0, a.jsx)(h.AtIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                    }),
                              }),
                          })
                      : void 0,
                  }),
                  en &&
                    (0, a.jsx)(h.Clickable, {
                      onClick: () => eh(!1),
                      className: ec.primaryActionPopoutMessageCloseIcon,
                      children: (0, a.jsx)(h.XSmallIcon, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: d.Z.colors.ICON_PRIMARY,
                      }),
                    }),
                ],
              }),
              !1 === ed &&
                (0, a.jsxs)("div", {
                  className: ec.primaryActionPopoutActionButtons,
                  children: [
                    (0, a.jsxs)(
                      h.Button,
                      {
                        className: ec.secondaryButton,
                        color: h.Button.Colors.CUSTOM,
                        onClick: () => eh(!0),
                        innerClassName: ec.iconButton,
                        size: ei ? h.Button.Sizes.MIN : h.Button.Sizes.LARGE,
                        children: [
                          (0, a.jsx)(h.ChatIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            colorClass: ec.secondaryText,
                          }),
                          !ei &&
                            (0, a.jsx)(h.Text, {
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
          [i, r] = l.useState(!1);
        l.useEffect(() => {
          r(!0);
        }, []);
        let s = !!_.Z.keyboardModeEnabled && !i,
          o = (0, N.wC)(null == t ? void 0 : t.guild_id)
            .slice(0, 5)
            .map((e) =>
              null == e.id
                ? { emoji: e, url: e.url }
                : {
                    emoji: e,
                    url: (0, V.gT)({
                      id: e.id,
                      animated: e.animated,
                      size: 58,
                    }),
                  },
            );
        return (0, a.jsx)(a.Fragment, {
          children: o.map((e) => {
            let { emoji: t, url: l } = e;
            return null != l
              ? (0, a.jsx)(
                  "div",
                  {
                    children: (0, a.jsx)(h.TooltipContainer, {
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
                      children: (0, a.jsx)(L.u, {
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
            entry: l,
            disableGameProfileLinks: i,
            onUserPopoutClosed: s,
          } = e,
          o = null == t ? void 0 : t.guild_id,
          {
            displayParticipants: c,
            participant1: d,
            participant2: m,
            numOtherParticipants: x,
          } = (0, Q.Z)(l, 3),
          E = (0, u.e7)([G.default], () => G.default.getUser(l.author_id)),
          { streamPreviewUrl: v } = (0, ee.Z)(l),
          _ = [d, m];
        return (0, a.jsxs)("div", {
          className: ec.popoutContentHeader,
          children: [
            (0, a.jsxs)("div", {
              className: ec.popoutUserContainer,
              children: [
                (0, a.jsx)(C.Z, {
                  maxUsers: 3,
                  users: c,
                  size: h.AvatarSizes.SIZE_24,
                  avatarClassName: ec.popoutStackedAvatar,
                  hideOverflowCount: !0,
                  disableUsernameTooltip: !0,
                  onUserPopoutClosed: s,
                }),
                (0, a.jsx)(h.Spacer, { size: 8, horizontal: !0 }),
                (0, a.jsx)(h.Heading, {
                  variant: "heading-sm/normal",
                  className: ec.popoutTextSecondary,
                  children: n.format({
                    user0: W.ZP.getName(o, null == t ? void 0 : t.id, _[0]),
                    user1: W.ZP.getName(o, null == t ? void 0 : t.id, _[1]),
                    countOthers: x,
                    countOthersHook: (e, t) =>
                      (0, a.jsx)(
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
                      (0, a.jsx)(
                        J.Z,
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
                      (0, a.jsx)(
                        J.Z,
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
            null != v && (0, a.jsx)(g.ZP, { size: g.ZP.Sizes.SMALL }),
            null != E &&
              (0, a.jsx)(ei.Z, {
                user: E,
                channel: t,
                guildId: o,
                entry: l,
                disableGameProfileLinks: i,
              }),
          ],
        });
      }
      function ef(e) {
        let { children: t, onClick: n } = e;
        return null == n
          ? (0, a.jsx)(a.Fragment, { children: t })
          : (0, a.jsx)(h.Clickable, {
              className: ec.maybeClickable,
              onClick: n,
              children: t,
            });
      }
      function eT(e) {
        var t;
        let {
            title: n,
            subtitle: l,
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
          _ = (0, K.dX)(v),
          f = (0, P.Z)({
            location: "ContentPopout",
            applicationId:
              _ && !m
                ? null === (t = v.extra) || void 0 === t
                  ? void 0
                  : t.application_id
                : void 0,
            source: Z.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: v.author_id,
          }),
          { largeImage: T, smallImage: p } = (0, q.rv)({ entry: v }),
          g = _ ? f : void 0;
        return (0, a.jsxs)("div", {
          className: ec.popoutContentWrapper,
          children: [
            (0, a.jsx)(e_, {
              disableGameProfileLinks: m,
              ...E,
              onUserPopoutClosed: x,
            }),
            (0, a.jsxs)(eh, {
              backgroundImgSrc: null == T ? void 0 : T.src,
              children: [
                (0, a.jsxs)("div", {
                  className: ec.popoutHeroInner,
                  children: [
                    (0, a.jsx)("div", {
                      className: ec.popoutThumbnailContainer,
                      children: (0, a.jsx)(X.E, {
                        image: T,
                        smallImage: p,
                        onClick: null != o ? o : g,
                        size: X.J.SIZE_72,
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: ec.popoutHeroBody,
                      children: [
                        (0, a.jsx)(ef, {
                          onClick: null != u ? u : g,
                          children: (0, a.jsx)(h.Heading, {
                            variant: "heading-md/medium",
                            className: r()(ec.popoutHeroTextPrimary, {
                              [ec.popoutHeroTextPrimaryShort]: null != d,
                            }),
                            lineClamp: 3,
                            children: n,
                          }),
                        }),
                        null != l
                          ? (0, a.jsx)(ef, {
                              onClick: null != c ? c : g,
                              children: (0, a.jsx)(h.Text, {
                                variant: "text-sm/normal",
                                className: ec.popoutHeroTextSecondary,
                                children: l,
                              }),
                            })
                          : null,
                        (0, a.jsx)(h.Spacer, { size: 8 }),
                        i,
                      ],
                    }),
                    (0, a.jsx)("div", {
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
      function ep(e) {
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
          _ = (0, u.e7)([b.Z], () =>
            b.Z.getChannel(null == s ? void 0 : s.channelId),
          ),
          [f] = l.useMemo(() => (0, S.p9)(_, H.Z, U.Z, B.Z, A.Z), [_]),
          { entry: T } = x,
          p = (0, K.dX)(T),
          g = (0, P.Z)({
            location: "ContentPopout",
            applicationId: p
              ? null === (t = T.extra) || void 0 === t
                ? void 0
                : t.application_id
              : void 0,
            source: Z.m1.ActivityCard,
            trackEntryPointImpression: !0,
            sourceUserId: T.author_id,
          }),
          I = p ? g : void 0,
          {
            activity: N,
            activityApplication: C,
            fallbackApplication: O,
          } = (0, et.qy)(T),
          { largeImage: R, smallImage: j } = (0, q.YC)(N, null != C ? C : O);
        return null == s
          ? null
          : (0, a.jsxs)("div", {
              className: ec.popoutContentWrapper,
              children: [
                (0, a.jsx)(e_, { ...x, onUserPopoutClosed: m }),
                (0, a.jsxs)("div", {
                  className: ec.streamingPopoutHero,
                  children: [
                    (0, a.jsx)(ef, {
                      onClick: f
                        ? () => {
                            E.default.selectVoiceChannel(s.channelId),
                              (0, v.iV)(s);
                          }
                        : void 0,
                      children: (0, a.jsxs)("div", {
                        style: { position: "relative" },
                        children: [
                          (0, a.jsx)(M.Z, {
                            className: ec.streamingPopoutImg,
                            stream: s,
                          }),
                          f &&
                            (0, a.jsx)("div", {
                              className: ec.streamCTA,
                              children: (0, a.jsx)(h.Text, {
                                variant: "text-md/normal",
                                children: eu.Z.Messages.WATCH_STREAM,
                              }),
                            }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: ec.streamingPopoutHeader,
                      children: [
                        null != R &&
                          (0, a.jsx)("div", {
                            className: ec.popoutThumbnailContainer,
                            children: (0, a.jsx)(X.E, {
                              image: R,
                              smallImage: j,
                              onClick: null != o ? o : I,
                              size: X.J.SIZE_72,
                            }),
                          }),
                        (0, a.jsxs)("div", {
                          className: ec.streamingPopoutHeaderText,
                          children: [
                            (0, a.jsx)(ef, {
                              onClick: null != c ? c : I,
                              children: (0, a.jsx)(h.Heading, {
                                variant: "heading-md/semibold",
                                className: ec.popoutTextPrimary,
                                lineClamp: 3,
                                children: n,
                              }),
                            }),
                            null != i
                              ? (0, a.jsx)(ef, {
                                  onClick: null != d ? d : I,
                                  children: (0, a.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    className: ec.popoutTextSecondary,
                                    children: i,
                                  }),
                                })
                              : null,
                            (0, a.jsx)(h.Spacer, { size: 8 }),
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
      function eg(e) {
        let { IconComponent: t, children: n, className: l, ...i } = e;
        return (0, a.jsxs)(h.Button, {
          ...i,
          className: r()(l, ec.primaryButton),
          innerClassName: null != t ? ec.iconButton : void 0,
          size: h.Button.Sizes.LARGE,
          children: [
            null != t
              ? (0, a.jsx)(t, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: d.Z.colors.WHITE,
                })
              : null,
            (0, a.jsx)(h.Text, {
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
      var a = n(735250);
      n(470079);
      var l = n(481060),
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
          f = (0, u.Z)({
            userId: n.id,
            guildId: m,
            channelId: null == x ? void 0 : x.id,
          }),
          T = (0, r.Z)({ id: n.id, label: d.Z.Messages.COPY_ID_USER }),
          p = (0, c.dX)(E),
          g = (0, o.Z)({
            location: "ContentPopoutContextMenu",
            applicationId:
              p && !0 !== _
                ? null === (t = E.extra) || void 0 === t
                  ? void 0
                  : t.application_id
                : void 0,
            source: s.m1.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: E.author_id,
          });
        return (0, a.jsx)(l.Popout, {
          align: "top",
          position: "right",
          disablePointerEvents: !1,
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(l.Menu, {
              navId: "content-inventory-context",
              onClose: () => {
                (0, i.Zy)(), t();
              },
              "aria-label": d.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: v,
              children: (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)(l.MenuGroup, {
                    children: [
                      f,
                      null != g &&
                        (0, a.jsx)(l.MenuItem, {
                          id: "game-profile",
                          label: d.Z.Messages.GAME_PROFILE,
                          action: g,
                        }),
                    ],
                  }),
                  (0, a.jsx)(l.MenuGroup, { children: T }),
                ],
              }),
            });
          },
          children: (e) =>
            (0, a.jsx)(l.Tooltip, {
              text: d.Z.Messages.MORE,
              children: (t) =>
                (0, a.jsx)(l.Clickable, {
                  ...t,
                  className: h.menuIcon,
                  ...e,
                  children: (0, a.jsx)(l.MoreHorizontalIcon, {
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
      var a = n(735250);
      n(470079);
      var l = n(526629),
        i = n(442837),
        r = n(481060),
        s = n(607070),
        o = n(689938),
        u = n(704108),
        c = n(482617);
      let d = () =>
        (0, a.jsxs)("div", {
          className: c.toast,
          children: [
            (0, a.jsx)(r.Spinner, {
              type: r.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
              className: u.loadingSpinner,
            }),
            (0, a.jsx)(r.Text, {
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
        return (0, a.jsx)(a.Fragment, {
          children: h(
            (e, t) =>
              t &&
              (0, a.jsx)(l.animated.div, {
                className: u,
                style: e,
                children: n
                  ? (0, a.jsx)(r.Toast, {
                      message: o.Z.Messages.CONTENT_INVENTORY_MESSAGE_SENT,
                      type: r.ToastType.SUCCESS,
                      id: "success_message_toast",
                    })
                  : (0, a.jsx)(r.Toast, {
                      message: "",
                      type: r.ToastType.CUSTOM,
                      id: "custom_loading_message_toast",
                      options: { component: (0, a.jsx)(d, {}) },
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
      var a = n(904245),
        l = n(957730);
      function i(e) {
        let { channel: t, content: n, entry: i, whenReady: r } = e,
          s = l.ZP.parse(t, n);
        return a.Z.sendMessage(t.id, s, r, {
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
      var a = n(470079),
        l = n(442837),
        i = n(146282),
        r = n(327220),
        s = n(959580),
        o = n(371177);
      function u(e, t) {
        let { types: n } = e;
        return !!(null == n || n.has(t.content_type)) || !1;
      }
      function c(e) {
        let { feed: t, filters: n } = (0, l.cj)([i.Z], () => ({
            feed: i.Z.getFeed(e),
            filters: i.Z.getFilters(),
          })),
          c = a.useMemo(() => {
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
      var a = n(735250),
        l = n(470079),
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
        let { isLoading: t, noText: n, previewText: l, className: i } = e;
        return (0, a.jsx)("div", {
          className: r()(x.emptyPreviewContainer, i),
          children: t
            ? (0, a.jsx)(o.Spinner, {})
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("div", { className: x.emptyPreviewImage }),
                  n
                    ? null
                    : (0, a.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        className: x.emptyPreviewText,
                        children:
                          null != l ? l : m.Z.Messages.STREAM_NO_PREVIEW,
                      }),
                ],
              }),
        });
      }
      function v(e) {
        let { stream: t, className: n, noText: i = !1 } = e,
          o = (0, s.e7)([c.Z], () => c.Z.getBasicChannel(t.channelId)),
          v = (0, s.e7)(
            [d.Z],
            () => null != o && d.Z.canBasicChannel(h.S7T.CONNECT, o),
          ),
          { url: _, isLoading: f } = (0, s.cj)([u.Z], () => ({
            url: v
              ? u.Z.getPreviewURL(t.guildId, t.channelId, t.ownerId)
              : null,
            isLoading:
              v && u.Z.getIsPreviewLoading(t.guildId, t.channelId, t.ownerId),
          })),
          T = l.useRef(f ? null : _);
        l.useEffect(() => {
          !f && (T.current = _);
        }, [_, f]);
        let p = null == _ || f ? T.current : _;
        return null == p
          ? (0, a.jsx)(E, {
              className: n,
              isLoading: f,
              noText: i,
              previewText: v ? void 0 : m.Z.Messages.STREAM_NO_PERMISSION_CTA,
            })
          : (0, a.jsx)("div", {
              className: r()(n, x.root),
              children: (0, a.jsx)("img", {
                src: p,
                alt: "",
                className: x.image,
              }),
            });
      }
    },
    463031: function (e, t, n) {
      n.d(t, {
        _: function () {
          return s;
        },
        x: function () {
          return r;
        },
      });
      var a = n(152057),
        l = n(381338),
        i = n(99815);
      let r = {
          [a.v.LEAGUE_OF_LEGENDS_WEEKLY]: {
            sortByStatisticId: i.E.LOL_TOTAL_KILLS,
            sortDesc: !0,
            intervalType: l.q.WEEKLY,
          },
        },
        s = a.v.LEAGUE_OF_LEGENDS_WEEKLY;
    },
    814059: function (e, t, n) {
      n.d(t, {
        n: function () {
          return s;
        },
      });
      var a = n(913527),
        l = n.n(a),
        i = n(70956),
        r = n(689938);
      let s = (e) => {
        let t = Math.max(0, l()(e).diff(l()(), "s"));
        if (t < i.Z.Seconds.DAY) {
          let e = Math.round(t / i.Z.Seconds.HOUR);
          return r.Z.Messages.LEADERBOARD_INTERVAL_END_DAYS_LEFT.format({
            count: e,
          });
        }
        {
          let e = Math.round(t / i.Z.Seconds.DAY);
          return r.Z.Messages.LEADERBOARD_INTERVAL_END_DAYS_LEFT.format({
            count: e,
          });
        }
      };
    },
    235070: function (e, t, n) {
      n.d(t, {
        A: function () {
          return r;
        },
      });
      var a = n(512722),
        l = n.n(a),
        i = n(463031);
      function r(e) {
        let t = i.x[e];
        return (
          l()(null != t, "Leaderboard settings not found for ".concat(e)), t
        );
      }
    },
    584283: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var a = n(470079),
        l = n(392711),
        i = n(442837),
        r = n(994752),
        s = n(235070);
      let o = [];
      function u(e) {
        let { guildId: t, leaderboardId: n, intervalOffset: u = 0 } = e,
          { sortByStatisticId: c, sortDesc: d } = (0, s.A)(n),
          h = (0, i.e7)([r.Z], () => r.Z.get(t, n, u));
        return a.useMemo(() => {
          if (null == h) return o;
          let e = d ? -1 / 0 : 1 / 0;
          return (0, l.orderBy)(
            h.users,
            (t) => {
              var n, a;
              return null !==
                (a =
                  null === (n = t.statistics[c]) || void 0 === n
                    ? void 0
                    : n.value) && void 0 !== a
                ? a
                : e;
            },
            d ? "desc" : "asc",
          );
        }, [h, c, d]);
      }
    },
    704041: function (e, t, n) {
      var a = n(735250),
        l = n(470079),
        i = n(512722),
        r = n.n(i),
        s = n(481060),
        o = n(114201),
        u = n(154658),
        c = n(370611),
        d = n(463031),
        h = n(689938),
        m = n(304818);
      t.Z = (e) => {
        let { channel: t } = e,
          n = l.useRef(null);
        return (
          (0, s.useFocusLock)(n),
          r()(t, "Channel must be defined"),
          (0, a.jsxs)("div", {
            className: m.popout,
            ref: n,
            children: [
              (0, a.jsxs)("div", {
                className: m.header,
                children: [
                  (0, a.jsx)(s.LeagueOfLegendsBrandIcon, { size: "md" }),
                  (0, a.jsx)(s.Spacer, { size: 8, horizontal: !0 }),
                  (0, a.jsx)(s.Heading, {
                    variant: "heading-sm/normal",
                    className: m.leaderboardTitle,
                    children: h.Z.Messages.LEADERBOARD_POPOUT_TITLE.format({
                      leaderboardName: "League of Legends",
                      leaderboardNameHook: (e, t) =>
                        (0, a.jsx)(
                          s.Text,
                          {
                            variant: "text-sm/medium",
                            className: m.leaderboardName,
                            children: e,
                          },
                          t,
                        ),
                    }),
                  }),
                  (0, a.jsx)(o.Z, {}),
                ],
              }),
              (0, a.jsx)(c.Z, {
                guildId: t.guild_id,
                leaderboardId: d._,
                intervalOffset: 0,
              }),
              (0, a.jsx)(u.Z, {
                className: m.previousChampion,
                guildId: t.guild_id,
                leaderboardId: d._,
                intervalOffset: -1,
              }),
            ],
          })
        );
      };
    },
    114201: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var a = n(735250);
      n(470079);
      var l = n(442837),
        i = n(481060),
        r = n(239091),
        s = n(553795),
        o = n(425128),
        u = n(981631),
        c = n(689938),
        d = n(288984);
      function h(e) {
        let t = (0, l.e7)([s.Z], () =>
            s.Z.getAccount(null, u.ABu.LEAGUE_OF_LEGENDS),
          ),
          n = (0, l.e7)([s.Z], () =>
            s.Z.getAccount(null, u.ABu.LEAGUE_OF_LEGENDS),
          ),
          h =
            null != n && null != t
              ? () => {
                  (0, o._)(t.id, n.id);
                }
              : u.dG4;
        return (0, a.jsx)(i.Popout, {
          align: "top",
          position: "right",
          disablePointerEvents: !1,
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(i.Menu, {
              navId: "leaderboard-popout-context-menu",
              onClose: () => {
                (0, r.Zy)(), t();
              },
              "aria-label": c.Z.Messages.LEADERBOARD_ACTIONS_MENU_LABEL,
              onSelect: void 0,
              children: (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(i.MenuGroup, {
                  children: (0, a.jsx)(i.MenuItem, {
                    id: "refresh-my-data",
                    label:
                      c.Z.Messages
                        .MEMBER_LIST_CONTENT_FEED_LEADERBOARD_MENU_REFRESH_MY_DATA,
                    action: h,
                  }),
                }),
              }),
            });
          },
          children: (e) =>
            (0, a.jsx)(i.Tooltip, {
              text: c.Z.Messages.MORE,
              children: (t) =>
                (0, a.jsx)(i.Clickable, {
                  ...t,
                  className: d.menuIcon,
                  ...e,
                  children: (0, a.jsx)(i.MoreHorizontalIcon, {
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
    475676: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var a = n(735250);
      n(470079);
      var l = n(481060),
        i = n(297781),
        r = n(443487),
        s = n(235070),
        o = n(584283),
        u = n(709737),
        c = n(463031),
        d = n(835777);
      function h(e) {
        var t, n, h;
        let { selected: m, channel: x } = e,
          E = x.guild_id,
          v = (0, o.Z)({ guildId: E, leaderboardId: c._, intervalOffset: 0 }),
          { sortByStatisticId: _ } = (0, s.A)(c._),
          f = v[0],
          T =
            null !==
              (h =
                null == f
                  ? void 0
                  : null === (n = f.statistics) || void 0 === n
                    ? void 0
                    : null === (t = n[_]) || void 0 === t
                      ? void 0
                      : t.value) && void 0 !== h
              ? h
              : 0;
        return (0, a.jsx)(r.Zb, {
          selected: m,
          children: (0, a.jsxs)(r.e$, {
            children: [
              (0, a.jsxs)("div", {
                className: d.gameTitleContainer,
                children: [
                  (0, a.jsx)(l.LeagueOfLegendsBrandIcon, { size: "xs" }),
                  (0, a.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    className: d.gameTitle,
                    children: "League of Legends",
                  }),
                ],
              }),
              (0, a.jsx)(l.Spacer, { size: 2 }),
              (0, a.jsx)(r.ll, { children: "New #1 Player" }),
              (0, a.jsx)(i.Gk, {
                location: i.Gt.CARD,
                children: (0, a.jsx)(u.D, { value: T, statisticId: _ }),
              }),
            ],
          }),
        });
      }
    },
    709737: function (e, t, n) {
      n.d(t, {
        D: function () {
          return d;
        },
        l: function () {
          return h;
        },
      });
      var a = n(735250),
        l = n(470079),
        i = n(99815),
        r = n(657707),
        s = n(297781),
        o = n(709054),
        u = n(814059),
        c = n(689938);
      function d(e) {
        let { value: t, statisticId: n } = e,
          l = (function (e) {
            if (e === i.E.LOL_TOTAL_KILLS)
              return c.Z.Messages.MEMBER_LIST_CONTENT_FEED_LEADERBOARD_KILLS;
          })(n);
        return null == l
          ? null
          : (0, a.jsx)(s.ej, { Icon: r.hAD, text: l.format({ value: t }) });
      }
      function h(e) {
        let { intervalEnd: t } = e,
          n = l.useMemo(() => (0, u.n)(o.default.extractTimestamp(t)), [t]);
        return (0, a.jsx)(s.ej, { Icon: r.Que, text: n });
      }
    },
    249268: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var a = n(735250),
        l = n(470079),
        i = n(913527),
        r = n.n(i),
        s = n(442837),
        o = n(481060),
        u = n(297781),
        c = n(594174),
        d = n(5192),
        h = n(709054),
        m = n(994752),
        x = n(709737),
        E = n(689938),
        v = n(20037);
      function _(e) {
        var t;
        let {
            userId: n,
            guildId: i,
            leaderboardId: _,
            intervalOffset: f,
            highlightStatisticId: T,
          } = e,
          p = (0, s.e7)([c.default], () => c.default.getUser(n)),
          g = (0, s.e7)([m.Z], () => m.Z.get(i, _, f)),
          I = l.useMemo(() => {
            var e;
            return null == g
              ? void 0
              : null === (e = g.users.find((e) => e.user_id === n)) ||
                  void 0 === e
                ? void 0
                : e.statistics[T];
          }, [T, g, n]);
        if (null == p || null == g) return null;
        let N = h.default.fromTimestamp(
            1e3 *
              r()(h.default.extractTimestamp(g.interval_start))
                .add(1, "week")
                .unix(),
          ),
          C = d.ZP.getName(i, void 0, p);
        return (0, a.jsxs)("div", {
          className: v.container,
          children: [
            (0, a.jsx)(o.Text, {
              variant: "text-xs/semibold",
              color: "interactive-active",
              children: E.Z.Messages.LEADERBOARD_LOL_SUMMONERS_RIFT,
            }),
            (0, a.jsx)(o.Spacer, { size: 8 }),
            (0, a.jsxs)("div", {
              className: v.userContainer,
              children: [
                (0, a.jsx)(o.Avatar, {
                  src: p.getAvatarURL(i, 32),
                  size: o.AvatarSizes.SIZE_32,
                  "aria-label": "avatar",
                }),
                (0, a.jsx)(o.Spacer, { size: 8, horizontal: !0 }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsxs)("div", {
                      className: v.userNameContainer,
                      children: [
                        (0, a.jsx)(o.Text, {
                          variant: "text-sm/semibold",
                          className: v.userName,
                          children: C,
                        }),
                        (0, a.jsx)(o.Spacer, { size: 4, horizontal: !0 }),
                        (0, a.jsx)(o.LeagueOfLegendsBrandIcon, {
                          size: "custom",
                          width: 14,
                          height: 14,
                        }),
                      ],
                    }),
                    (0, a.jsx)(o.Text, {
                      variant: "text-xs/normal",
                      className: v.userSubtitle,
                      children: E.Z.Messages.LEADERBOARD_CURRENT_CHAMPION,
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(o.Spacer, { size: 8 }),
            (0, a.jsxs)(u.Gk, {
              location: u.Gt.LEADERBOARD_POPOUT,
              children: [
                (0, a.jsx)(x.D, {
                  value:
                    null !== (t = null == I ? void 0 : I.value) && void 0 !== t
                      ? t
                      : 0,
                  statisticId: T,
                }),
                (0, a.jsx)(x.l, { intervalEnd: N }),
              ],
            }),
          ],
        });
      }
    },
    154658: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      });
      var a = n(735250);
      n(470079);
      var l = n(120356),
        i = n.n(l),
        r = n(381338),
        s = n(442837),
        o = n(481060),
        u = n(594174),
        c = n(5192),
        d = n(235070),
        h = n(584283),
        m = n(689938),
        x = n(98518);
      function E(e) {
        let {
            guildId: t,
            leaderboardId: n,
            intervalOffset: l = -1,
            className: E,
          } = e,
          { intervalType: v } = (0, d.A)(n),
          _ = (0, h.Z)({ guildId: t, leaderboardId: n, intervalOffset: l })[0],
          f = (0, s.e7)([u.default], () =>
            u.default.getUser(null == _ ? void 0 : _.user_id),
          );
        if (null == f) return null;
        let T = c.ZP.getName(t, void 0, f);
        return (0, a.jsxs)("div", {
          className: i()(x.container, E),
          children: [
            (0, a.jsx)(o.Text, {
              variant: "text-xs/medium",
              className: x.title,
              children: (function (e) {
                switch (e) {
                  case r.q.DAILY:
                    return m.Z.Messages.LEADERBOARD_YESTERDAYS_CHAMPION;
                  case r.q.WEEKLY:
                    return m.Z.Messages.LEADERBOARD_LAST_WEEKS_CHAMPION;
                  case r.q.MONTHLY:
                    return m.Z.Messages.LEADERBOARD_LAST_MONTHS_CHAMPION;
                  default:
                    return m.Z.Messages.LEADERBOARD_LAST_CHAMPION;
                }
              })(v),
            }),
            (0, a.jsx)(o.Avatar, {
              src: f.getAvatarURL(t, 16),
              size: o.AvatarSizes.SIZE_16,
              "aria-label": "avatar",
            }),
            (0, a.jsx)(o.Spacer, { size: 6, horizontal: !0 }),
            (0, a.jsx)(o.Text, {
              variant: "text-xs/semibold",
              color: "header-primary",
              children: T,
            }),
          ],
        });
      }
    },
    370611: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      });
      var a = n(735250),
        l = n(470079),
        i = n(99815),
        r = n(442837),
        s = n(481060),
        o = n(594174),
        u = n(5192),
        c = n(235070),
        d = n(584283),
        h = n(249268),
        m = n(689938),
        x = n(881894);
      function E(e) {
        let { guildId: t, leaderboardId: n, intervalOffset: r } = e,
          { sortByStatisticId: o } = (0, c.A)(n),
          u = (0, d.Z)({ guildId: t, leaderboardId: n, intervalOffset: r }),
          E = l.useMemo(
            () =>
              u.map((e, t) => {
                var n, a;
                return {
                  userId: e.user_id,
                  value:
                    null !==
                      (a =
                        null === (n = e.statistics[o]) || void 0 === n
                          ? void 0
                          : n.value) && void 0 !== a
                      ? a
                      : 0,
                  rank: t + 1,
                };
              }),
            [u, o],
          ),
          _ = u[0];
        return (0, a.jsxs)("div", {
          className: x.container,
          children: [
            (0, a.jsx)(h.Z, {
              userId: null == _ ? void 0 : _.user_id,
              guildId: t,
              leaderboardId: n,
              intervalOffset: r,
              highlightStatisticId: o,
            }),
            (0, a.jsxs)("div", {
              className: x.table,
              children: [
                (0, a.jsxs)("div", {
                  className: x.headerRow,
                  children: [
                    (0, a.jsx)(s.Text, {
                      variant: "text-xxs/medium",
                      className: x.headerRank,
                      children: "#",
                    }),
                    (0, a.jsx)(s.Text, {
                      variant: "text-xxs/medium",
                      className: x.headerPlayer,
                      children: m.Z.Messages.LEADERBOARD_TABLE_HEADER_PLAYER,
                    }),
                    (0, a.jsx)(s.Text, {
                      variant: "text-xxs/medium",
                      className: x.headerValue,
                      children: (function (e) {
                        if (e === i.E.LOL_TOTAL_KILLS)
                          return m.Z.Messages
                            .LEADERBOARD_TABLE_HEADER_WEEKLY_KILLS;
                        return "Unknown statistic";
                      })(o),
                    }),
                  ],
                }),
                E.map((e) =>
                  (0, l.createElement)(v, { ...e, key: e.userId, guildId: t }),
                ),
              ],
            }),
          ],
        });
      }
      function v(e) {
        let { userId: t, rank: n, value: l, guildId: i } = e,
          c = (0, r.e7)([o.default], () => o.default.getUser(t)),
          d = u.ZP.getName(i, void 0, c);
        return (0, a.jsxs)("div", {
          className: x.userRow,
          children: [
            (0, a.jsx)(s.Text, {
              variant: "text-xxs/medium",
              className: x.userRank,
              children: n,
            }),
            (0, a.jsxs)("div", {
              className: x.userPlayer,
              children: [
                (0, a.jsx)(s.Avatar, {
                  src: null == c ? void 0 : c.getAvatarURL(i, 16),
                  size: s.AvatarSizes.SIZE_16,
                  "aria-label": "avatar",
                }),
                (0, a.jsx)(s.Spacer, { size: 6, horizontal: !0 }),
                (0, a.jsx)(s.Heading, {
                  variant: "heading-sm/medium",
                  color: "header-primary",
                  children: d,
                }),
                1 === n
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(s.Spacer, { size: 4, horizontal: !0 }),
                        (0, a.jsx)(s.LeagueOfLegendsBrandIcon, {
                          size: "custom",
                          width: 14,
                          height: 14,
                        }),
                      ],
                    })
                  : null,
              ],
            }),
            (0, a.jsx)(s.Heading, {
              variant: "heading-sm/medium",
              color: "header-primary",
              children: l,
            }),
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
          return Z;
        },
      }),
        n(47120);
      var a = n(735250),
        l = n(470079),
        i = n(120356),
        r = n.n(i),
        s = n(392711),
        o = n(526629),
        u = n(481060),
        c = n(596454),
        d = n(727637),
        h = n(313201),
        m = n(543241),
        x = n(318766),
        E = n(907040),
        v = n(633302),
        _ = n(806966),
        f = n(176354),
        T = n(823379),
        p = n(354459),
        g = n(185923),
        I = n(420212),
        N = n(264699);
      let C = g.Hz.CHAT,
        A = [
          v.ZP.getByName("thumbsup"),
          v.ZP.getByName("eyes"),
          v.ZP.getByName("laughing"),
          v.ZP.getByName("watermelon"),
          v.ZP.getByName("fork_and_knife"),
          v.ZP.getByName("yum"),
        ].filter(T.lm);
      function Z(e) {
        let { emoji: t, isDisabled: n = !1, onClick: i, className: s } = e,
          h = l.useRef(null),
          m = (0, d.Z)(h);
        return (0, a.jsx)("span", {
          ref: h,
          children: (0, a.jsx)(u.Button, {
            onClick: i,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.NONE,
            focusProps: { enabled: !n },
            children: (0, a.jsx)(u.Spring, {
              config: x.u,
              from: { value: 0 },
              to: { value: m ? 1 : 0 },
              children: (e) => {
                let { value: l } = e;
                return (0, a.jsx)(o.animated.div, {
                  style: {
                    transform: l
                      .to([0, 1], [1, 1.14])
                      .to((e) => "scale(".concat(e, ")")),
                  },
                  children: (0, a.jsx)(c.Z, {
                    className: r()(N.emoji, s, { [N.emojiItemDisabled]: n }),
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
      function P(e) {
        let {
          otherAccessories: t,
          isEmojiPickerExpanded: n,
          onSetExpanded: l,
          onFocus: i,
        } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            t,
            (0, a.jsx)(u.Clickable, {
              className: N.dropDownContainer,
              onClick: () => {
                l(!n), i();
              },
              children: (0, a.jsx)(u.ChevronSmallDownIcon, {
                size: "md",
                color: "currentColor",
                className: r()(N.dropDown, { [N.dropDownOpen]: n }),
              }),
            }),
          ],
        });
      }
      function S(e) {
        let {
            channel: t,
            title: n,
            closePopout: i,
            onFocus: o,
            onSelectEmoji: c,
            onSelectDisabledEmoji: d,
            onExpandedToggle: x,
            emojiSearchProps: v,
            recentlyUsedEmojis: T,
            analyticsOverride: S,
          } = e,
          M = (0, h.Dt)(),
          [O, R] = l.useState(!1),
          j = (0, m.wC)(t.guild_id),
          y = (0, s.uniqBy)([...j, ...A], "name")
            .filter(
              (e) =>
                !f.ZP.isEmojiFilteredOrLocked({
                  emoji: e,
                  channel: t,
                  intention: C,
                }),
            )
            .slice(0, p.e5);
        null != T && T.length > 0 && y.splice(y.length - 1, 1, T[0]);
        let L = (e) => {
            R(e), null == x || x(e);
          },
          w = (e, t) => {
            if (null == e && t) {
              i();
              return;
            }
            null != e && c(e);
            L(!t), t && _.kJ.setSearchPlaceholder(null);
          };
        return (0, a.jsxs)(u.Dialog, {
          "aria-labelledby": M,
          children: [
            (0, a.jsx)(u.HeadingLevel, {
              forceLevel: 2,
              children: (0, a.jsx)(u.HiddenVisually, {
                children: (0, a.jsx)(u.H, { id: M, children: n }),
              }),
            }),
            (0, a.jsxs)("div", {
              className: N.container,
              children: [
                (0, a.jsx)(E.Z, {
                  analyticsOverride: S,
                  channel: t,
                  className: r()(N.animatedPicker, {
                    [N.animatedPickerTall]: O,
                  }),
                  headerClassName: r()(N.emojiPickerHeader, {
                    [N.emojiPickerHeaderExpanded]: O,
                  }),
                  closePopout: i,
                  onSelectEmoji: O ? w : () => {},
                  shouldHidePickerActions: !O,
                  wrapper: "div",
                  pickerIntention: C,
                  searchProps: {
                    ...v,
                    accessory: (0, a.jsx)(P, {
                      otherAccessories: null == v ? void 0 : v.accessory,
                      isEmojiPickerExpanded: O,
                      onSetExpanded: L,
                      onFocus: o,
                    }),
                    onKeyDown: (e) => {
                      null != e &&
                        e.key !== I.vn.TAB &&
                        (e.key !== I.vn.ENTER || e.shiftKey ? L(!0) : L(!O));
                    },
                  },
                }),
                (0, a.jsx)("div", {
                  className: N.slotsContainer,
                  children: (0, a.jsx)("div", {
                    className: r()(N.slots, N.slotsWide),
                    children: y.map((e) => {
                      let n = f.ZP.isEmojiDisabled({
                        emoji: e,
                        channel: t,
                        intention: g.Hz.CHAT,
                      });
                      return (0, a.jsx)(
                        "div",
                        {
                          className: N.slot,
                          children: (0, a.jsx)(u.TooltipContainer, {
                            text: e.name,
                            position: "top",
                            "aria-label": e.name,
                            tooltipClassName: N.tooltipContainer,
                            color: u.Tooltip.Colors.BRAND,
                            children: (0, a.jsx)(Z, {
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
      var a,
        l,
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
      function f(e, t) {
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
        let a = m[t.id];
        null != a && null != x[a.id] && (x[a.id] = { ...x[a.id], ...t });
      }
      class p extends (a = s.ZP.Store) {
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
        (i = "displayName") in (l = p)
          ? Object.defineProperty(l, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[i] = r),
        (t.Z = new p(o.Z, {
          CONNECTION_OPEN: function () {
            E = {};
          },
          LOGOUT: function () {
            E = {};
          },
          UPLOAD_START: function (e) {
            var t;
            let { channelId: n, file: a, uploader: l, message: i } = e;
            if (l._aborted || l._errored) return;
            let r = null !== (t = d[n]) && void 0 !== t ? t : c;
            (h[a.id] = l), (d[n] = [...r, a]), (m[a.id] = i);
            let { items: s } = a;
            null != s && (x[i.id] = { ...a, items: s }), v(i.nonce, a);
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
            return f(t, n.id);
          },
          UPLOAD_FAIL: function (e) {
            let { channelId: t, file: n } = e;
            return f(t, n.id);
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
              a = h[t.id];
            if (null == a) return !1;
            setImmediate(() => a.cancelItem(n));
          },
          UPLOAD_FILE_UPDATE: function (e) {
            let { channelId: t, file: n } = e,
              a = m[n.id];
            null != a && v(a.nonce, n), T(t, n);
          },
          UPLOAD_RESTORE_FAILED_UPLOAD: function (e) {
            let { file: t, messageId: n } = e;
            x[n] = t;
          },
        }));
    },
    381338: function (e, t, n) {
      var a, l;
      n.d(t, {
        q: function () {
          return a;
        },
      }),
        ((l = a || (a = {}))[(l.DAILY = 1)] = "DAILY"),
        (l[(l.WEEKLY = 2)] = "WEEKLY"),
        (l[(l.MONTHLY = 3)] = "MONTHLY"),
        (l[(l.ALL_TIME = 4)] = "ALL_TIME");
    },
    99815: function (e, t, n) {
      var a, l;
      n.d(t, {
        E: function () {
          return a;
        },
      }),
        ((l = a || (a = {})).LOL_TOTAL_KILLS = "1280436311425024000"),
        (l.LOL_TOTAL_DEATHS = "1285569699119104000"),
        (l.LOL_TOTAL_ASSISTS = "1285569703313408000"),
        (l.LOL_TOTAL_DAMAGE_DEALT = "1285569707507712000"),
        (l.LOL_TOTAL_DAMAGE_TAKEN = "1285569711702016000"),
        (l.LOL_TOTAL_WINS = "1285569720090624000"),
        (l.LOL_MAX_CREEP_SCORE = "1285569715896320000");
    },
  },
]);
//# sourceMappingURL=7a30db6e254596d35f17.js.map
