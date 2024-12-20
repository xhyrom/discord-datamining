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
      function Z(e, n, t, r) {
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
      let C = [];
      n.Z = r.memo(function (e) {
        let { className: n } = e,
          t = (0, p.Z)(),
          h = (0, l.e7)([u.Z], () => u.Z.windowSize((0, d.ZY)(t))),
          v = (0, l.e7)([c.Z], () => c.Z.isPreviewingInGame()),
          I = (0, l.e7)(
            [o.Z],
            () => {
              let e = o.Z.getLayout(s.qU);
              if (null == e) return C;
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
          g = r.useCallback(
            (e) => (0, i.jsx)("div", { className: n, style: h, children: e }),
            [n, h],
          );
        return (0, i.jsx)(a.TransitionGroup, {
          items: I,
          renderItem: Z,
          getItemKey: m,
          wrapChildren: g,
        });
      });
    },
    438162: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return ed;
        },
      });
      var i = t(200651),
        r = t(192379),
        l = t(120356),
        a = t.n(l),
        o = t(442837),
        c = t(952265),
        u = t(481060),
        s = t(239091),
        d = t(13245),
        f = t(615287),
        _ = t(110924),
        h = t(100527),
        p = t(906732),
        v = t(146282),
        m = t(70097),
        Z = t(594190),
        C = t(567409),
        I = t(74299),
        g = t(989941),
        E = t(199902),
        y = t(314897),
        b = t(592125),
        x = t(430824),
        L = t(131951),
        k = t(944486),
        N = t(449224),
        O = t(574254),
        T = t(556296),
        A = t(237997),
        w = t(451478),
        P = t(585483),
        D = t(358085),
        S = t(13140),
        U = t(145597),
        V = t(830917),
        R = t(681603),
        j = t(358446),
        G = t(348733),
        M = t(708383),
        z = t(923532),
        W = t(915614),
        F = t(777382),
        B = t(333031),
        Y = t(388627),
        H = t(319414),
        X = t(561064),
        K = t(987650),
        Q = t(981631),
        J = t(206583),
        q = t(388032),
        $ = t(800004);
      let ee = !D.isPlatformEmbedded && !1,
        en = ee
          ? (0, i.jsx)(m.Z, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: $.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0,
            })
          : null,
        et = null;
      function ei(e) {
        e.preventDefault();
      }
      function er(e) {
        (0, s.jW)(e, async () => {
          let { default: e } = await t.e("17610").then(t.bind(t, 385620));
          return (n) => (0, i.jsx)(e, { ...n, layoutId: U.qU, version: 1 });
        });
      }
      let el = r.memo(function (e) {
          let { keybind: n, onClick: t, locked: r } = e;
          return (0, i.jsx)(u.Clickable, {
            className: a()($.overlayBackground, {
              [$.overlayActive]: !r,
              [$.overlayLocked]: r,
            }),
            onMouseDown: (e) => {
              let { currentTarget: n, target: i, button: r } = e;
              r === Q.AeJ.PRIMARY && n === i && t();
            },
            onContextMenu: er,
            children: r
              ? null
              : (0, i.jsx)(B.Z, {
                  className: $.closeContainer,
                  children: (0, i.jsx)(W.Z, {
                    keybind: n,
                    onClick: t,
                    IconComponent: u.XLargeIcon,
                  }),
                }),
          });
        }),
        ea = r.memo(function (e) {
          let { locked: n, focused: t } = e;
          return n && t
            ? (0, i.jsx)(B.Z, {
                className: $.closeContainer,
                children: (0, i.jsx)(W.Z, {
                  onClick: () => d.Z.setInputLocked(!1, (0, U.QF)()),
                  IconComponent: u.LockUnlockedIcon,
                }),
              })
            : null;
        });
      function eo() {
        if (null != O.Z.getContextMenu()) {
          (0, s.Zy)();
          return;
        }
        d.Z.setInputLocked(!0, (0, U.QF)());
      }
      function ec() {
        d.Z.setFocusedPID(U.Js);
      }
      function eu() {
        d.Z.setFocusedPID(null);
      }
      function es(e) {
        let n = A.Z.isLocked((0, U.QF)());
        "alt" === e.key.toLowerCase() &&
          !n &&
          ("keyup" === e.type.toLowerCase()
            ? P.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })
            : "keydown" === e.type.toLowerCase() &&
              P.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
      }
      function ed() {
        var e, n;
        let t = (0, X.Z)(),
          {
            locked: l,
            focused: s,
            incompatibleApp: m,
            hasValidResolution: O,
            hasZeroSizeDimension: P,
            keybind: D,
            isPreviewingInGame: W,
          } = (0, o.cj)([A.Z, w.Z, T.Z], () => {
            let e = w.Z.windowSize((0, V.ZY)(t)),
              n = T.Z.getOverlayKeybind();
            return {
              locked: A.Z.isLocked((0, U.QF)()),
              focused: A.Z.isFocused((0, U.QF)()),
              incompatibleApp: A.Z.incompatibleApp,
              hasValidResolution: (0, U.Te)(e),
              hasZeroSizeDimension: 0 === e.height || 0 === e.width,
              keybind: null != n ? (0, S.BB)(n.shortcut, !0) : "???",
              isPreviewingInGame: A.Z.isPreviewingInGame(),
            };
          }),
          B = (0, o.e7)([A.Z], () => A.Z.getActiveRegions()),
          { analyticsLocations: er } = (0, p.ZP)(h.Z.OVERLAY),
          ed = l || W;
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
            d.Z.overlayReady((0, U.QF)()),
              t.addEventListener("keydown", es),
              t.addEventListener("keyup", es),
              ee &&
                (t.document.hasFocus() && d.Z.setFocusedPID(U.Js),
                t.addEventListener("focus", ec),
                t.addEventListener("blur", eu));
          },
          () => {
            t.removeEventListener("keydown", es),
              t.removeEventListener("keyup", es),
              ee &&
                (t.removeEventListener("focus", ec),
                t.removeEventListener("blur", eu));
          },
        ),
          !(function () {
            let e = r.useRef(!1),
              n = (0, Y.pL)(),
              t = k.Z.getVoiceChannelId(),
              i = b.Z.getChannel(t),
              l = null != i ? x.Z.getGuild(i.guild_id) : null,
              a = null != E.Z.getCurrentUserActiveStream(),
              o = null != t,
              c = (0, I.Z)(L.Z) && !a && null != n,
              u = o && null != l && null != t,
              { showKeybindIndicators: s, dismissKeybindNotification: _ } = (0,
              j.K)();
            r.useEffect(() => {
              if (e.current) return;
              (e.current = !0),
                d.Z.track(Q.rMx.OVERLAY_INITIALIZED, {
                  voice_widget_connected: o,
                  text_widget_connected: !1,
                  overlay_method: f.gl[f.gl.OutOfProcess],
                });
              let i = null;
              (i = s
                ? { type: K.nc.KEYBIND_INDICATORS, markAsDismissed: _ }
                : { type: K.nc.WELCOME }),
                c && u
                  ? (i = {
                      type: K.nc.GO_LIVE_VOICE,
                      game: n,
                      voiceChannelId: t,
                      voiceGuild: l,
                    })
                  : c && (i = { type: K.nc.GO_LIVE_NON_VOICE, game: n }),
                d.Z.overlayMounted(i);
            }, [o, c, u, n, t, l, s, _]);
          })(),
          (e = l),
          (n = t),
          r.useEffect(() => {
            if (e) {
              if (
                ((0, c.Ay)(u.POPOUT_MODAL_CONTEXT),
                n.addEventListener("contextmenu", ei, !1),
                null != et)
              ) {
                let e = Date.now() - et;
                d.Z.track(Q.rMx.OVERLAY_LOCKED, { unlocked_duration: e }),
                  (et = null);
              }
              return () => {
                n.removeEventListener("contextmenu", ei, !1);
              };
            }
            n.removeEventListener("contextmenu", ei, !1),
              null == et &&
                ((et = Date.now()), d.Z.track(Q.rMx.OVERLAY_UNLOCKED));
          }, [e, n]);
        let ef = (0, o.e7)([k.Z], () => k.Z.getVoiceChannelId()),
          e_ = (0, o.e7)([b.Z], () => b.Z.getChannel(ef)),
          eh = (0, o.e7)([x.Z], () =>
            null != e_ ? x.Z.getGuild(e_.guild_id) : null,
          ),
          ep = (0, o.e7)([y.default], () => y.default.getId()),
          ev = (0, o.e7)([Z.ZP, N.Z], () => (0, g.Z)(Z.ZP, N.Z)),
          em = (0, C.Ns)(null == ev ? void 0 : ev.id),
          eZ = (0, o.e7)(
            [v.Z],
            () => null != v.Z.getLastFeedFetchDate(J.YN.GAME_PROFILE_FEED),
          ),
          eC = (0, _.Z)(eZ);
        return (r.useEffect(() => {
          !eC && eZ && d.Z.notifyContentInventoryReady(em);
        }, [em, eZ, eC]),
        P || m)
          ? null
          : (0, i.jsx)(p.Gt, {
              value: er,
              children: (0, i.jsx)(u.RedesignIconContextProvider, {
                children: (0, i.jsxs)("div", {
                  className: $.overlay,
                  children: [
                    (0, i.jsx)(M.Z, {}),
                    W &&
                      (0, i.jsx)("header", {
                        className: $.previewingInGameHeader,
                        children: q.intl.string(q.t.iOq96u),
                      }),
                    en,
                    (!l || B.has(Q.O0n.TEXT_WIDGET)) &&
                      (0, i.jsx)(el, { locked: l, keybind: D, onClick: eo }),
                    O
                      ? (0, i.jsx)(F.Z, {
                          className: a()({
                            [$.layoutLocked]: l,
                            [$.layoutUnlocked]: !l,
                          }),
                        })
                      : l
                        ? null
                        : (0, i.jsx)("div", {
                            className: $.invalidContainer,
                            children: (0, i.jsx)("div", {
                              className: $.inactiveContainer,
                              children: q.intl.format(q.t.ketnW1, U.FW),
                            }),
                          }),
                    (0, i.jsx)(H.Z, {}),
                    ee && (0, i.jsx)(ea, { locked: l, focused: s }),
                    null != eh &&
                      null != ef &&
                      (0, i.jsx)(z.Z, {
                        streamerId: ep,
                        guildId: eh.id,
                        channelId: ef,
                      }),
                    (0, i.jsx)(G.Z, { locked: ed, keybind: D }),
                    (0, i.jsx)(R.Z, {}),
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
        Z = t(594174),
        C = t(55589),
        I = t(981631);
      let g = [d.h8.TEXT_CHANNEL, d.h8.GROUP_DM, d.h8.USER],
        E = null,
        y = null,
        b = [],
        x = [];
      function L(e) {
        (b = [...b, e]),
          (x = x.map((e) => ({ ...e, sent: b.includes(e.data.record.id) }))),
          T.emitChange();
      }
      function k() {
        (E = null), null != i && (i.destroy(), (i = null)), null != y && y();
      }
      function N() {
        let e =
          null != E && null != E.application_id
            ? p.Z.getApplicationActivity(E.application_id)
            : null;
        if (null != E && (null == e || null == e.party || null == e.party.id))
          return k();
      }
      class O extends (r = c.ZP.Store) {
        initialize() {
          this.waitFor(p.Z);
        }
        getActivity() {
          return E;
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
          (E = e.activity),
            (y = e.resolve),
            (b = []),
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
                              C.Z.getPrivateChannelIds().forEach((n) => {
                                let t = _.Z.getChannel(n);
                                if (null != t)
                                  if (t.type === I.d4z.DM) {
                                    let n = t.getRecipientId(),
                                      i =
                                        null != n ? Z.default.getUser(n) : null;
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
                            sent: b.includes(n.id),
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
                            sent: b.includes(n.id),
                            categoryName:
                              null != t ? (0, f.F6)(t, Z.default, m.Z) : "",
                            guildName: null != i ? i.toString() : "",
                            data: e,
                          };
                        }
                        case d.h8.GROUP_DM: {
                          let { record: n } = e;
                          return {
                            type: d.h8.GROUP_DM,
                            sent: b.includes(n.id),
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
                g,
                100,
              )),
            i.search("");
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
          let { query: n } = e;
          null != i && i.search(n);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
          if (null == E) return;
          let n = e.channelId,
            t = e.userId;
          null != n
            ? s.Z.sendActivityInvite({
                channelId: n,
                type: I.mFx.JOIN,
                activity: E,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => L(n))
            : null != t &&
              s.Z.sendActivityInviteUser({
                userId: t,
                type: I.mFx.JOIN,
                activity: E,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => L(t));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: k,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
          let { locked: n } = e;
          return !!n && null != E && (k(), !0);
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
//# sourceMappingURL=6d9e7c32759de26cdad7.js.map
