"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61883"],
  {
    969383: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return a;
          },
        });
      var i = t(200651);
      t(192379);
      var r = t(238246),
        l = t(438162);
      function a(e) {
        let { withTitleBar: n, windowKey: t } = e;
        return (0, i.jsx)(r.Z, {
          withTitleBar: n,
          windowKey: t,
          title: "Discord Overlay",
          children: (0, i.jsx)(l.Z, {}),
        });
      }
      t(606206), t(371467);
    },
    777382: function (e, n, t) {
      t(653041), t(47120);
      var i = t(200651),
        r = t(192379),
        l = t(442837),
        a = t(481060),
        o = t(355863),
        c = t(237997),
        u = t(451478),
        s = t(145597),
        d = t(830917),
        f = t(312178),
        _ = t(388627),
        h = t(892127),
        p = t(561064),
        v = t(982572);
      function m(e) {
        return e.widget.id;
      }
      function C(e, n, t, r) {
        return t === a.TransitionStates.YEETED
          ? null
          : (0, i.jsx)(
              h.Z,
              {
                ...n,
                transitionState: t,
                cleanUp: r,
                dragContainerClassName: v.dragContainer,
                className: v.widget,
              },
              e,
            );
      }
      let g = [];
      n.Z = r.memo(function (e) {
        let { className: n } = e,
          t = (0, p.Z)(),
          h = (0, l.e7)([u.Z], () => u.Z.windowSize((0, d.ZY)(t))),
          v = (0, l.e7)([c.Z], () => c.Z.isPreviewingInGame()),
          Z = (0, l.e7)(
            [o.Z],
            () => {
              let e = o.Z.getLayout(s.qU);
              if (null == e) return g;
              let n = [];
              for (let t of e.widgets) {
                let e = o.Z.getWidget(t);
                if (null == e) continue;
                let i = f.p[e.type];
                null != i &&
                  n.push({
                    widget: e,
                    renderWidget: (n) =>
                      i({
                        ...n,
                        id: e.id,
                        pinned: e.pinned,
                        anchor: e.anchor,
                        isPreviewingInGame: v,
                      }),
                  });
              }
              return n;
            },
            [v],
            _.HP,
          ),
          E = r.useCallback(
            (e) => (0, i.jsx)("div", { className: n, style: h, children: e }),
            [n, h],
          );
        return (0, i.jsx)(a.TransitionGroup, {
          items: Z,
          renderItem: C,
          getItemKey: m,
          wrapChildren: E,
        });
      });
    },
    438162: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return ec;
        },
      }),
        t(653041),
        t(47120);
      var i = t(200651),
        r = t(192379),
        l = t(120356),
        a = t.n(l),
        o = t(442837),
        c = t(952265),
        u = t(481060),
        s = t(239091),
        d = t(13245),
        f = t(100527),
        _ = t(906732),
        h = t(146282),
        p = t(70097),
        v = t(567409),
        m = t(74299),
        C = t(199902),
        g = t(314897),
        Z = t(592125),
        E = t(430824),
        I = t(131951),
        b = t(944486),
        y = t(574254),
        x = t(556296),
        L = t(808506),
        k = t(237997),
        N = t(451478),
        O = t(585483),
        T = t(358085),
        w = t(13140),
        A = t(145597),
        P = t(830917),
        S = t(86071),
        D = t(681603),
        U = t(348733),
        V = t(708383),
        R = t(923532),
        j = t(915614),
        M = t(777382),
        G = t(333031),
        z = t(371651),
        W = t(388627),
        F = t(319414),
        B = t(561064),
        Y = t(987650),
        H = t(981631),
        X = t(206583),
        Q = t(388032),
        K = t(800004);
      let J = !T.isPlatformEmbedded && !1,
        q = J
          ? (0, i.jsx)(p.Z, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: K.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0,
            })
          : null,
        $ = null;
      function ee(e) {
        e.preventDefault();
      }
      function en(e) {
        (0, s.jW)(e, async () => {
          let { default: e } = await t.e("17610").then(t.bind(t, 385620));
          return (n) => (0, i.jsx)(e, { ...n, layoutId: A.qU, version: 1 });
        });
      }
      let et = r.memo(function (e) {
          let { keybind: n, onClick: t, locked: r } = e;
          return (0, i.jsx)(u.Clickable, {
            className: a()(K.overlayBackground, {
              [K.overlayActive]: !r,
              [K.overlayLocked]: r,
            }),
            onMouseDown: (e) => {
              let { currentTarget: n, target: i, button: r } = e;
              r === H.AeJ.PRIMARY && n === i && t();
            },
            onContextMenu: en,
            children: r
              ? null
              : (0, i.jsx)(G.Z, {
                  className: K.closeContainer,
                  children: (0, i.jsx)(j.Z, {
                    keybind: n,
                    onClick: t,
                    IconComponent: u.XLargeIcon,
                  }),
                }),
          });
        }),
        ei = r.memo(function (e) {
          let { locked: n, focused: t } = e;
          return n && t
            ? (0, i.jsx)(G.Z, {
                className: K.closeContainer,
                children: (0, i.jsx)(j.Z, {
                  onClick: () => d.Z.setInputLocked(!1, (0, A.QF)()),
                  IconComponent: u.LockUnlockedIcon,
                }),
              })
            : null;
        });
      function er() {
        if (null != y.Z.getContextMenu()) {
          (0, s.Zy)();
          return;
        }
        d.Z.setInputLocked(!0, (0, A.QF)());
      }
      function el() {
        d.Z.setFocusedPID(A.Js);
      }
      function ea() {
        d.Z.setFocusedPID(null);
      }
      function eo(e) {
        let n = k.Z.isLocked((0, A.QF)());
        "alt" === e.key.toLowerCase() &&
          !n &&
          ("keyup" === e.type.toLowerCase()
            ? O.S.dispatch(H.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })
            : "keydown" === e.type.toLowerCase() &&
              O.S.dispatch(H.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
      }
      function ec() {
        var e, n;
        let t = (0, B.Z)(),
          {
            locked: l,
            focused: s,
            incompatibleApp: p,
            hasValidResolution: y,
            hasZeroSizeDimension: O,
            keybind: T,
            isPreviewingInGame: j,
          } = (0, o.cj)([k.Z, N.Z, x.Z], () => {
            let e = N.Z.windowSize((0, P.ZY)(t)),
              n = x.Z.getOverlayKeybind();
            return {
              locked: k.Z.isLocked((0, A.QF)()),
              focused: k.Z.isFocused((0, A.QF)()),
              incompatibleApp: k.Z.incompatibleApp,
              hasValidResolution: (0, A.Te)(e),
              hasZeroSizeDimension: 0 === e.height || 0 === e.width,
              keybind: null != n ? (0, w.BB)(n.shortcut, !0) : "???",
              isPreviewingInGame: k.Z.isPreviewingInGame(),
            };
          }),
          G = (0, o.e7)([k.Z], () => k.Z.getActiveRegions()),
          { analyticsLocations: en } = (0, _.ZP)(f.Z.OVERLAY),
          ec = l || j;
        !(function (e, n) {
          let t = r.useRef({ mount: e, unmount: n });
          r.useEffect(() => void (t.current = { mount: e, unmount: n })),
            r.useEffect(
              () => (
                t.current.mount(),
                () => {
                  t.current.unmount();
                }
              ),
              [],
            );
        })(
          () => {
            d.Z.overlayReady((0, A.QF)()),
              t.addEventListener("keydown", eo),
              t.addEventListener("keyup", eo),
              J &&
                (t.document.hasFocus() && d.Z.setFocusedPID(A.Js),
                t.addEventListener("focus", el),
                t.addEventListener("blur", ea));
          },
          () => {
            t.removeEventListener("keydown", eo),
              t.removeEventListener("keyup", eo),
              J &&
                (t.removeEventListener("focus", el),
                t.removeEventListener("blur", ea));
          },
        ),
          !(function () {
            let e = r.useRef(!1),
              n = (0, W.pL)(),
              t = b.Z.getVoiceChannelId(),
              i = Z.Z.getChannel(t),
              l = null != i ? E.Z.getGuild(i.guild_id) : null,
              a = null != C.Z.getCurrentUserActiveStream(),
              c = null != t,
              u = (0, m.Z)(I.Z) && !a && null != n,
              s = c && null != l && null != t,
              f = (0, v.Ns)(null == n ? void 0 : n.id),
              _ = (0, o.e7)(
                [h.Z],
                () => null != h.Z.getLastFeedFetchDate(X.YN.GAME_PROFILE_FEED),
              );
            r.useEffect(() => {
              var i;
              if (!_ || e.current) return;
              (e.current = !0),
                d.Z.track(H.rMx.OVERLAY_INITIALIZED, {
                  voice_widget_connected: c,
                  text_widget_connected: !1,
                });
              let r =
                null !== (i = L.Z.getFocusedPID()) && void 0 !== i
                  ? i
                  : (0, A.QF)();
              if (z.Z.hasChangedRenderMode(r)) return;
              let a = [{ type: Y.nc.WELCOME }];
              if (
                (u && s
                  ? a.push({
                      type: Y.nc.GO_LIVE_VOICE,
                      game: n,
                      voiceChannelId: t,
                      voiceGuild: l,
                    })
                  : u && a.push({ type: Y.nc.GO_LIVE_NON_VOICE, game: n }),
                f.length > 0)
              ) {
                let { enabled: e } = S.Z.getCurrentConfig(
                  { location: "Overlay" },
                  { autoTrackExposure: !0 },
                );
                e && a.push({ type: Y.nc.CONTENT_INVENTORY, entries: f });
              }
              d.Z.overlayMounted(...a);
            }, [_, f, c, u, s, n, t, l]);
          })(),
          (e = l),
          (n = t),
          r.useEffect(() => {
            if (e) {
              if (
                ((0, c.Ay)(u.POPOUT_MODAL_CONTEXT),
                n.addEventListener("contextmenu", ee, !1),
                null != $)
              ) {
                let e = Date.now() - $;
                d.Z.track(H.rMx.OVERLAY_LOCKED, { unlocked_duration: e }),
                  ($ = null);
              }
              return () => {
                n.removeEventListener("contextmenu", ee, !1);
              };
            }
            n.removeEventListener("contextmenu", ee, !1),
              null == $ &&
                (($ = Date.now()), d.Z.track(H.rMx.OVERLAY_UNLOCKED));
          }, [e, n]);
        let eu = (0, o.e7)([b.Z], () => b.Z.getVoiceChannelId()),
          es = (0, o.e7)([Z.Z], () => Z.Z.getChannel(eu)),
          ed = (0, o.e7)([E.Z], () =>
            null != es ? E.Z.getGuild(es.guild_id) : null,
          ),
          ef = (0, o.e7)([g.default], () => g.default.getId());
        return O || p
          ? null
          : (0, i.jsx)(_.Gt, {
              value: en,
              children: (0, i.jsx)(u.RedesignIconContextProvider, {
                children: (0, i.jsxs)("div", {
                  className: K.overlay,
                  children: [
                    (0, i.jsx)(V.Z, {}),
                    j &&
                      (0, i.jsx)("header", {
                        className: K.previewingInGameHeader,
                        children: Q.intl.string(Q.t.iOq96u),
                      }),
                    q,
                    (!l || G.has(H.O0n.TEXT_WIDGET)) &&
                      (0, i.jsx)(et, { locked: l, keybind: T, onClick: er }),
                    y
                      ? (0, i.jsx)(M.Z, {
                          className: a()({
                            [K.layoutLocked]: l,
                            [K.layoutUnlocked]: !l,
                          }),
                        })
                      : l
                        ? null
                        : (0, i.jsx)("div", {
                            className: K.invalidContainer,
                            children: (0, i.jsx)("div", {
                              className: K.inactiveContainer,
                              children: Q.intl.format(Q.t.ketnW1, A.FW),
                            }),
                          }),
                    (0, i.jsx)(F.Z, {}),
                    J && (0, i.jsx)(ei, { locked: l, focused: s }),
                    null != ed &&
                      null != eu &&
                      (0, i.jsx)(R.Z, {
                        streamerId: ef,
                        guildId: ed.id,
                        channelId: eu,
                      }),
                    (0, i.jsx)(U.Z, { locked: ec, keybind: T }),
                    (0, i.jsx)(D.Z, {}),
                  ],
                }),
              }),
            });
      }
    },
    905423: function (e, n, t) {
      var i = t(512969),
        r = t(65400),
        l = t(731965),
        a = t(893607),
        o = t(981631);
      function c(e) {
        let n = (0, i.LX)(null != e ? e : "", {
          path: o.Z5c.CHANNEL(
            a.Hw.guildId(),
            a.Hw.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != n) {
          let { guildId: e, channelId: t } = n.params;
          return {
            guildId: e === o.ME ? null : e,
            channelId: null != t ? t : null,
          };
        }
        let t = (0, i.LX)(null != e ? e : "", {
          path: o.Z5c.GUILD_BOOSTING_MARKETING(a.Hw.guildId()),
        });
        return null != t
          ? { guildId: t.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      n.Z = (0, r.F)((e) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(n) {
          let { guildId: t, channelId: i } = c(n);
          (0, l.j)(() => e({ path: n, guildId: t, channelId: i }));
        },
        resetPath(n) {
          let { guildId: t, channelId: i } = c(n);
          (0, l.j)(() =>
            e({ path: null, guildId: t, channelId: i, basePath: n }),
          );
        },
      }));
    },
    977059: function (e, n, t) {
      t.d(n, {
        R: function () {
          return l;
        },
        S: function () {
          return r;
        },
      });
      let i = (0, t(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function r(e) {
        let { location: n } = e;
        return i.useExperiment({ location: n }, { autoTrackExposure: !0 });
      }
      function l(e) {
        let { location: n } = e;
        return i.getCurrentConfig({ location: n }, { autoTrackExposure: !0 });
      }
    },
    829750: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
        t: function () {
          return c;
        },
      });
      var i = t(442837),
        r = t(430824),
        l = t(938475),
        a = t(981631);
      function o(e) {
        return (0, i.cj)(
          [l.ZP, r.Z],
          () => {
            let n = l.ZP.countVoiceStatesForChannel(e.id),
              t = r.Z.getGuild(e.getGuildId());
            return null == t
              ? { reachedLimit: !1, limit: -1 }
              : e.type === a.d4z.GUILD_STAGE_VOICE
                ? {
                    reachedLimit: n > t.maxStageVideoChannelUsers,
                    limit: t.maxStageVideoChannelUsers,
                  }
                : {
                    reachedLimit:
                      t.maxVideoChannelUsers > 0 && n > t.maxVideoChannelUsers,
                    limit: t.maxVideoChannelUsers,
                  };
          },
          [e],
        );
      }
      function c(e) {
        let n = l.ZP.countVoiceStatesForChannel(e.id),
          t = r.Z.getGuild(e.getGuildId());
        return null == t
          ? { reachedLimit: !1, limit: -1 }
          : e.type === a.d4z.GUILD_STAGE_VOICE
            ? {
                reachedLimit: n > t.maxStageVideoChannelUsers,
                limit: t.maxStageVideoChannelUsers,
              }
            : {
                reachedLimit:
                  t.maxVideoChannelUsers > 0 && n > t.maxVideoChannelUsers,
                limit: t.maxVideoChannelUsers,
              };
      }
    },
    173507: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(695346),
        a = t(981631);
      function o(e, n) {
        l.qF.getSetting()
          ? (0, r.openModalLazy)(
              async () => {
                let { default: n } = await Promise.all([
                  t.e("8821"),
                  t.e("39607"),
                ]).then(t.bind(t, 601572));
                return (t) =>
                  (0, i.jsx)(n, { ...t, onEnable: e, videoEnabled: !1 });
              },
              {
                modalKey: "camera-preview",
                contextKey:
                  n === a.IlC.POPOUT
                    ? r.POPOUT_MODAL_CONTEXT
                    : r.DEFAULT_MODAL_CONTEXT,
              },
            )
          : null == e || e();
      }
    },
    606206: function (e, n, t) {
      let i;
      t(47120), t(653041), t(411104);
      var r,
        l,
        a,
        o,
        c = t(442837),
        u = t(570140),
        s = t(278323),
        d = t(212819),
        f = t(933557),
        _ = t(592125),
        h = t(430824),
        p = t(293273),
        v = t(158776),
        m = t(699516),
        C = t(594174),
        g = t(55589),
        Z = t(981631);
      let E = [d.h8.TEXT_CHANNEL, d.h8.GROUP_DM, d.h8.USER],
        I = null,
        b = null,
        y = [],
        x = [];
      function L(e) {
        (y = [...y, e]),
          (x = x.map((e) => ({ ...e, sent: y.includes(e.data.record.id) }))),
          T.emitChange();
      }
      function k() {
        (I = null), null != i && (i.destroy(), (i = null)), null != b && b();
      }
      function N() {
        let e =
          null != I && null != I.application_id
            ? p.Z.getApplicationActivity(I.application_id)
            : null;
        if (null != I && (null == e || null == e.party || null == e.party.id))
          return k();
      }
      class O extends (r = c.ZP.Store) {
        initialize() {
          this.waitFor(p.Z);
        }
        getActivity() {
          return I;
        }
        getQuery() {
          var e;
          return null !== (e = null == i ? void 0 : i.query) && void 0 !== e
            ? e
            : "";
        }
        getResults() {
          return x;
        }
      }
      (o = "ActivityInviteModalStore"),
        (a = "displayName") in (l = O)
          ? Object.defineProperty(l, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[a] = o);
      let T = new O(u.Z, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
          (I = e.activity),
            (b = e.resolve),
            (y = []),
            null == i &&
              (i = new d.ZP(
                (e, n) => {
                  var t;
                  return (
                    (t = e),
                    void ((x = (
                      "" === n.trim()
                        ? (function () {
                            let e = [];
                            return (
                              g.Z.getPrivateChannelIds().forEach((n) => {
                                let t = _.Z.getChannel(n);
                                if (null != t)
                                  if (t.type === Z.d4z.DM) {
                                    let n = t.getRecipientId(),
                                      i =
                                        null != n ? C.default.getUser(n) : null;
                                    null != i &&
                                      e.push({
                                        type: d.h8.USER,
                                        record: i,
                                        score: 0,
                                      });
                                  } else
                                    t.isMultiUserDM() &&
                                      e.push({
                                        type: d.h8.GROUP_DM,
                                        record: t,
                                        score: 0,
                                      });
                              }),
                              e
                            );
                          })()
                        : t
                    ).map((e) => {
                      switch (e.type) {
                        case d.h8.USER: {
                          let { record: n } = e;
                          return {
                            type: d.h8.USER,
                            sent: y.includes(n.id),
                            status: v.Z.getStatus(n.id),
                            data: e,
                          };
                        }
                        case d.h8.TEXT_CHANNEL: {
                          let { record: n } = e,
                            t = _.Z.getChannel(n.parent_id),
                            i = h.Z.getGuild(n.guild_id);
                          return {
                            type: d.h8.TEXT_CHANNEL,
                            sent: y.includes(n.id),
                            categoryName:
                              null != t ? (0, f.F6)(t, C.default, m.Z) : "",
                            guildName: null != i ? i.toString() : "",
                            data: e,
                          };
                        }
                        case d.h8.GROUP_DM: {
                          let { record: n } = e;
                          return {
                            type: d.h8.GROUP_DM,
                            sent: y.includes(n.id),
                            data: e,
                          };
                        }
                        default:
                          throw Error("Unknown Result Type: ".concat(e.type));
                      }
                    })),
                    T.emitChange())
                  );
                },
                E,
                100,
              )),
            i.search("");
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
          let { query: n } = e;
          null != i && i.search(n);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
          if (null == I) return;
          let n = e.channelId,
            t = e.userId;
          null != n
            ? s.Z.sendActivityInvite({
                channelId: n,
                type: Z.mFx.JOIN,
                activity: I,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => L(n))
            : null != t &&
              s.Z.sendActivityInviteUser({
                userId: t,
                type: Z.mFx.JOIN,
                activity: I,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => L(t));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: k,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
          let { locked: n } = e;
          return !!n && null != I && (k(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: N,
        RPC_APP_DISCONNECTED: N,
      });
      n.Z = 12633 == t.j ? T : null;
    },
    13663: function (e, n, t) {
      e.exports = {
        container: "container_e2d331",
        activityCard: "activityCard_e2d331",
        row: "row_e2d331",
        inviteFriendsButton: "inviteFriendsButton_e2d331",
        avatar: "avatar_e2d331",
        details: "details_e2d331",
        usernameWrapper: "usernameWrapper_e2d331",
        username: "username_e2d331",
        inviteButton: "inviteButton_e2d331",
        inviteButtonWrapper: "inviteButtonWrapper_e2d331",
        inviteButtonInner: "inviteButtonInner_e2d331",
        liveIndicator: "liveIndicator_e2d331",
        badgesContainer: "badgesContainer_e2d331",
      };
    },
    932209: function (e, n, t) {
      e.exports = {
        dismissButton: "dismissButton_a9614f",
        dismissIcon: "dismissIcon_a9614f",
      };
    },
    706446: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_c58c1c",
        unlocked: "unlocked_c58c1c",
        lockExtras: "lockExtras_c58c1c",
        operation: "operation_c58c1c",
        resizeNorth: "resizeNorth_c58c1c handle_c58c1c",
        resizeSouth: "resizeSouth_c58c1c handle_c58c1c",
        resizeNSCursor: "resizeNSCursor_c58c1c",
        resizeWest: "resizeWest_c58c1c handle_c58c1c",
        resizeEast: "resizeEast_c58c1c handle_c58c1c",
        resizeEWCursor: "resizeEWCursor_c58c1c",
        resizeNorthWest: "resizeNorthWest_c58c1c handle_c58c1c",
        resizeNorthEast: "resizeNorthEast_c58c1c handle_c58c1c",
        resizeSouthWest: "resizeSouthWest_c58c1c handle_c58c1c",
        resizeSouthEast: "resizeSouthEast_c58c1c handle_c58c1c",
        resizeNWSECursor: "resizeNWSECursor_c58c1c",
        resizeNESWCursor: "resizeNESWCursor_c58c1c",
        extras: "extras_c58c1c",
        extrasBottomOriented: "extrasBottomOriented_c58c1c",
        extrasRightOriented: "extrasRightOriented_c58c1c",
      };
    },
    163752: function (e, n, t) {
      e.exports = {
        buttonContainer: "buttonContainer_b1ba99",
        keybind: "keybind_b1ba99",
        button: "button_b1ba99",
      };
    },
    256403: function (e, n, t) {
      e.exports = { key: "key_da7116" };
    },
    982572: function (e, n, t) {
      e.exports = {
        widget: "widget_e80714",
        dragContainer: "dragContainer_e80714",
      };
    },
    608631: function (e, n, t) {
      e.exports = {
        debugMode: "debugMode_f4091c",
        clickable: "clickable_f4091c",
      };
    },
    800004: function (e, n, t) {
      e.exports = {
        videoDev: "videoDev_c67bb5",
        overlay: "overlay_c67bb5",
        overlayBackground: "overlayBackground_c67bb5",
        overlayActive: "overlayActive_c67bb5",
        overlayLocked: "overlayLocked_c67bb5",
        closeContainer: "closeContainer_c67bb5",
        invalidContainer: "invalidContainer_c67bb5",
        inactiveContainer: "inactiveContainer_c67bb5",
        layoutLocked: "layoutLocked_c67bb5",
        layoutUnlocked: "layoutUnlocked_c67bb5 layoutLocked_c67bb5",
        previewingInGameHeader: "previewingInGameHeader_c67bb5",
      };
    },
    714902: function (e, n, t) {
      e.exports = { container: "container_c7fa60" };
    },
    152397: function (e, n, t) {
      e.exports = {
        extrasContainer: "extrasContainer_b932b3",
        debug: "debug_b932b3",
        debugUnpinned: "debugUnpinned_b932b3",
        debugPinned: "debugPinned_b932b3",
      };
    },
    640784: function (e, n, t) {
      e.exports = { textArea: "textArea_daa88b" };
    },
    176463: function (e, n, t) {
      e.exports = {
        animationWrapper: "animationWrapper_eff2f7",
        clickZone: "clickZone_eff2f7",
        clickable: "clickable_eff2f7",
        overflowWrapper: "overflowWrapper_eff2f7",
        container: "container_eff2f7",
        iconAndDetails: "iconAndDetails_eff2f7",
        footer: "footer_eff2f7",
        details: "details_eff2f7",
        hint: "hint_eff2f7",
        dismissButton: "dismissButton_eff2f7",
        buttonContainer: "buttonContainer_eff2f7",
        button: "button_eff2f7",
        avatar: "avatar_eff2f7",
        icon: "icon_eff2f7",
      };
    },
    802334: function (e, n, t) {
      e.exports = { container: "container_f19072" };
    },
  },
]);
//# sourceMappingURL=e728d022bbb81612f6a9.js.map
