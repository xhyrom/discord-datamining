"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89406"],
  {
    969383: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return o;
          },
        });
      var i = t(200651);
      t(192379);
      var r = t(238246),
        l = t(438162);
      function o(e) {
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
        o = t(481060),
        a = t(355863),
        c = t(237997),
        u = t(451478),
        d = t(145597),
        s = t(830917),
        f = t(312178),
        _ = t(388627),
        p = t(892127),
        h = t(561064),
        v = t(982572);
      function m(e) {
        return e.widget.id;
      }
      function b(e, n, t, r) {
        return t === o.TransitionStates.YEETED
          ? null
          : (0, i.jsx)(
              p.Z,
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
          t = (0, h.Z)(),
          p = (0, l.e7)([u.Z], () => u.Z.windowSize((0, s.ZY)(t))),
          v = (0, l.e7)([c.Z], () => c.Z.isPreviewingInGame()),
          I = (0, l.e7)(
            [a.Z],
            () => {
              let e = a.Z.getLayout(d.qU);
              if (null == e) return g;
              let n = [];
              for (let t of e.widgets) {
                let e = a.Z.getWidget(t);
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
          Z = r.useCallback(
            (e) => (0, i.jsx)("div", { className: n, style: p, children: e }),
            [n, p],
          );
        return (0, i.jsx)(o.TransitionGroup, {
          items: I,
          renderItem: b,
          getItemKey: m,
          wrapChildren: Z,
        });
      });
    },
    438162: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return es;
        },
      });
      var i = t(200651),
        r = t(192379),
        l = t(120356),
        o = t.n(l),
        a = t(442837),
        c = t(952265),
        u = t(481060),
        d = t(239091),
        s = t(13245),
        f = t(615287),
        _ = t(110924),
        p = t(100527),
        h = t(906732),
        v = t(146282),
        m = t(70097),
        b = t(594190),
        g = t(567409),
        I = t(74299),
        Z = t(989941),
        C = t(199902),
        E = t(314897),
        y = t(592125),
        x = t(430824),
        L = t(131951),
        k = t(944486),
        N = t(449224),
        O = t(574254),
        w = t(556296),
        T = t(237997),
        A = t(451478),
        S = t(585483),
        P = t(358085),
        D = t(13140),
        R = t(145597),
        U = t(830917),
        V = t(681603),
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
      let ee = !P.isPlatformEmbedded && !1,
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
        (0, d.jW)(e, async () => {
          let { default: e } = await t.e("17610").then(t.bind(t, 385620));
          return (n) => (0, i.jsx)(e, { ...n, layoutId: R.qU, version: 1 });
        });
      }
      let el = r.memo(function (e) {
          let { keybind: n, onClick: t, locked: r } = e;
          return (0, i.jsx)(u.Clickable, {
            className: o()($.overlayBackground, {
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
        eo = r.memo(function (e) {
          let { locked: n, focused: t } = e;
          return n && t
            ? (0, i.jsx)(B.Z, {
                className: $.closeContainer,
                children: (0, i.jsx)(W.Z, {
                  onClick: () => s.Z.setInputLocked(!1, (0, R.QF)()),
                  IconComponent: u.LockUnlockedIcon,
                }),
              })
            : null;
        });
      function ea() {
        if (null != O.Z.getContextMenu()) {
          (0, d.Zy)();
          return;
        }
        s.Z.setInputLocked(!0, (0, R.QF)());
      }
      function ec() {
        s.Z.setFocusedPID(R.Js);
      }
      function eu() {
        s.Z.setFocusedPID(null);
      }
      function ed(e) {
        let n = T.Z.isLocked((0, R.QF)());
        "alt" === e.key.toLowerCase() &&
          !n &&
          ("keyup" === e.type.toLowerCase()
            ? S.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })
            : "keydown" === e.type.toLowerCase() &&
              S.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
      }
      function es() {
        var e, n;
        let t = (0, X.Z)(),
          {
            locked: l,
            focused: d,
            incompatibleApp: m,
            hasValidResolution: O,
            hasZeroSizeDimension: S,
            keybind: P,
            isPreviewingInGame: W,
          } = (0, a.cj)([T.Z, A.Z, w.Z], () => {
            let e = A.Z.windowSize((0, U.ZY)(t)),
              n = w.Z.getOverlayKeybind();
            return {
              locked: T.Z.isLocked((0, R.QF)()),
              focused: T.Z.isFocused((0, R.QF)()),
              incompatibleApp: T.Z.incompatibleApp,
              hasValidResolution: (0, R.Te)(e),
              hasZeroSizeDimension: 0 === e.height || 0 === e.width,
              keybind: null != n ? (0, D.BB)(n.shortcut, !0) : "???",
              isPreviewingInGame: T.Z.isPreviewingInGame(),
            };
          }),
          B = (0, a.e7)([T.Z], () => T.Z.getActiveRegions()),
          { analyticsLocations: er } = (0, h.ZP)(p.Z.OVERLAY),
          es = l || W;
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
            s.Z.overlayReady((0, R.QF)()),
              t.addEventListener("keydown", ed),
              t.addEventListener("keyup", ed),
              ee &&
                (t.document.hasFocus() && s.Z.setFocusedPID(R.Js),
                t.addEventListener("focus", ec),
                t.addEventListener("blur", eu));
          },
          () => {
            t.removeEventListener("keydown", ed),
              t.removeEventListener("keyup", ed),
              ee &&
                (t.removeEventListener("focus", ec),
                t.removeEventListener("blur", eu));
          },
        ),
          !(function () {
            let e = r.useRef(!1),
              n = (0, Y.pL)(),
              t = k.Z.getVoiceChannelId(),
              i = y.Z.getChannel(t),
              l = null != i ? x.Z.getGuild(i.guild_id) : null,
              o = null != C.Z.getCurrentUserActiveStream(),
              a = null != t,
              c = (0, I.Z)(L.Z) && !o && null != n,
              u = a && null != l && null != t,
              { showKeybindIndicators: d, dismissKeybindNotification: _ } = (0,
              j.K)();
            r.useEffect(() => {
              if (e.current) return;
              (e.current = !0),
                s.Z.track(Q.rMx.OVERLAY_INITIALIZED, {
                  voice_widget_connected: a,
                  text_widget_connected: !1,
                  overlay_render_method: f.gl[f.gl.OutOfProcess],
                });
              let i = null;
              (i = d
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
                s.Z.overlayMounted(i);
            }, [a, c, u, n, t, l, d, _]);
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
                s.Z.track(Q.rMx.OVERLAY_LOCKED, { unlocked_duration: e }),
                  (et = null);
              }
              return () => {
                n.removeEventListener("contextmenu", ei, !1);
              };
            }
            n.removeEventListener("contextmenu", ei, !1),
              null == et &&
                ((et = Date.now()), s.Z.track(Q.rMx.OVERLAY_UNLOCKED));
          }, [e, n]);
        let ef = (0, a.e7)([k.Z], () => k.Z.getVoiceChannelId()),
          e_ = (0, a.e7)([y.Z], () => y.Z.getChannel(ef)),
          ep = (0, a.e7)([x.Z], () =>
            null != e_ ? x.Z.getGuild(e_.guild_id) : null,
          ),
          eh = (0, a.e7)([E.default], () => E.default.getId()),
          ev = (0, a.e7)([b.ZP, N.Z], () => (0, Z.Z)(b.ZP, N.Z)),
          em = (0, g.Ns)(null == ev ? void 0 : ev.id),
          eb = (0, a.e7)(
            [v.Z],
            () => null != v.Z.getLastFeedFetchDate(J.YN.GAME_PROFILE_FEED),
          ),
          eg = (0, _.Z)(eb);
        return (r.useEffect(() => {
          !eg && eb && s.Z.notifyContentInventoryReady(em);
        }, [em, eb, eg]),
        S || m)
          ? null
          : (0, i.jsx)(h.Gt, {
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
                      (0, i.jsx)(el, { locked: l, keybind: P, onClick: ea }),
                    O
                      ? (0, i.jsx)(F.Z, {
                          className: o()({
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
                              children: q.intl.format(q.t.ketnW1, R.FW),
                            }),
                          }),
                    (0, i.jsx)(H.Z, {}),
                    ee && (0, i.jsx)(eo, { locked: l, focused: d }),
                    null != ep &&
                      null != ef &&
                      (0, i.jsx)(z.Z, {
                        streamerId: eh,
                        guildId: ep.id,
                        channelId: ef,
                      }),
                    (0, i.jsx)(G.Z, { locked: es, keybind: P }),
                    (0, i.jsx)(V.Z, {}),
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
        o = t(893607),
        a = t(981631);
      function c(e) {
        let n = (0, i.LX)(null != e ? e : "", {
          path: a.Z5c.CHANNEL(
            o.Hw.guildId(),
            o.Hw.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != n) {
          let { guildId: e, channelId: t } = n.params;
          return {
            guildId: e === a.ME ? null : e,
            channelId: null != t ? t : null,
          };
        }
        let t = (0, i.LX)(null != e ? e : "", {
          path: a.Z5c.GUILD_BOOSTING_MARKETING(o.Hw.guildId()),
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
          return a;
        },
        t: function () {
          return c;
        },
      });
      var i = t(442837),
        r = t(430824),
        l = t(938475),
        o = t(981631);
      function a(e) {
        return (0, i.cj)(
          [l.ZP, r.Z],
          () => {
            let n = l.ZP.countVoiceStatesForChannel(e.id),
              t = r.Z.getGuild(e.getGuildId());
            return null == t
              ? { reachedLimit: !1, limit: -1 }
              : e.type === o.d4z.GUILD_STAGE_VOICE
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
          : e.type === o.d4z.GUILD_STAGE_VOICE
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
          return a;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(695346),
        o = t(981631);
      function a(e, n) {
        l.qF.getSetting()
          ? (0, r.openModalLazy)(
              async () => {
                let { default: n } = await Promise.all([
                  t.e("50506"),
                  t.e("96211"),
                  t.e("23217"),
                  t.e("84605"),
                  t.e("8016"),
                  t.e("51269"),
                  t.e("22878"),
                  t.e("90508"),
                  t.e("13351"),
                  t.e("66711"),
                  t.e("17938"),
                  t.e("21628"),
                  t.e("6380"),
                  t.e("46097"),
                  t.e("76540"),
                  t.e("8739"),
                  t.e("58059"),
                  t.e("86282"),
                  t.e("18543"),
                  t.e("18895"),
                  t.e("68445"),
                  t.e("19652"),
                  t.e("99393"),
                  t.e("99008"),
                  t.e("37229"),
                  t.e("22646"),
                  t.e("95393"),
                  t.e("3940"),
                  t.e("25183"),
                  t.e("80284"),
                  t.e("81463"),
                  t.e("65889"),
                  t.e("31135"),
                  t.e("48923"),
                  t.e("30419"),
                  t.e("69174"),
                  t.e("18824"),
                  t.e("30203"),
                  t.e("82544"),
                  t.e("88455"),
                ]).then(t.bind(t, 601572));
                return (t) =>
                  (0, i.jsx)(n, { ...t, onEnable: e, videoEnabled: !1 });
              },
              {
                modalKey: "camera-preview",
                contextKey:
                  n === o.IlC.POPOUT
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
        o,
        a,
        c = t(442837),
        u = t(570140),
        d = t(278323),
        s = t(212819),
        f = t(933557),
        _ = t(592125),
        p = t(430824),
        h = t(293273),
        v = t(158776),
        m = t(699516),
        b = t(594174),
        g = t(55589),
        I = t(981631);
      let Z = [s.h8.TEXT_CHANNEL, s.h8.GROUP_DM, s.h8.USER],
        C = null,
        E = null,
        y = [],
        x = [];
      function L(e) {
        (y = [...y, e]),
          (x = x.map((e) => ({ ...e, sent: y.includes(e.data.record.id) }))),
          w.emitChange();
      }
      function k() {
        (C = null), null != i && (i.destroy(), (i = null)), null != E && E();
      }
      function N() {
        let e =
          null != C && null != C.application_id
            ? h.Z.getApplicationActivity(C.application_id)
            : null;
        if (null != C && (null == e || null == e.party || null == e.party.id))
          return k();
      }
      class O extends (r = c.ZP.Store) {
        initialize() {
          this.waitFor(h.Z);
        }
        getActivity() {
          return C;
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
      (a = "ActivityInviteModalStore"),
        (o = "displayName") in (l = O)
          ? Object.defineProperty(l, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[o] = a);
      let w = new O(u.Z, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
          (C = e.activity),
            (E = e.resolve),
            (y = []),
            null == i &&
              (i = new s.ZP(
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
                                  if (t.type === I.d4z.DM) {
                                    let n = t.getRecipientId(),
                                      i =
                                        null != n ? b.default.getUser(n) : null;
                                    null != i &&
                                      e.push({
                                        type: s.h8.USER,
                                        record: i,
                                        score: 0,
                                      });
                                  } else
                                    t.isMultiUserDM() &&
                                      e.push({
                                        type: s.h8.GROUP_DM,
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
                        case s.h8.USER: {
                          let { record: n } = e;
                          return {
                            type: s.h8.USER,
                            sent: y.includes(n.id),
                            status: v.Z.getStatus(n.id),
                            data: e,
                          };
                        }
                        case s.h8.TEXT_CHANNEL: {
                          let { record: n } = e,
                            t = _.Z.getChannel(n.parent_id),
                            i = p.Z.getGuild(n.guild_id);
                          return {
                            type: s.h8.TEXT_CHANNEL,
                            sent: y.includes(n.id),
                            categoryName:
                              null != t ? (0, f.F6)(t, b.default, m.Z) : "",
                            guildName: null != i ? i.toString() : "",
                            data: e,
                          };
                        }
                        case s.h8.GROUP_DM: {
                          let { record: n } = e;
                          return {
                            type: s.h8.GROUP_DM,
                            sent: y.includes(n.id),
                            data: e,
                          };
                        }
                        default:
                          throw Error("Unknown Result Type: ".concat(e.type));
                      }
                    })),
                    w.emitChange())
                  );
                },
                Z,
                100,
              )),
            i.search("");
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
          let { query: n } = e;
          null != i && i.search(n);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
          if (null == C) return;
          let n = e.channelId,
            t = e.userId;
          null != n
            ? d.Z.sendActivityInvite({
                channelId: n,
                type: I.mFx.JOIN,
                activity: C,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => L(n))
            : null != t &&
              d.Z.sendActivityInviteUser({
                userId: t,
                type: I.mFx.JOIN,
                activity: C,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => L(t));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: k,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
          let { locked: n } = e;
          return !!n && null != C && (k(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: N,
        RPC_APP_DISCONNECTED: N,
      });
      n.Z = 12633 == t.j ? w : null;
    },
    971139: function (e, n, t) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    373780: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_b877fa",
        disabledSelected: "disabledSelected_b877fa",
        hiddenInput: "hiddenInput_b877fa",
        bottomLeft: "bottomLeft_b877fa option_b877fa",
        bottomRight: "bottomRight_b877fa option_b877fa",
        topLeft: "topLeft_b877fa option_b877fa",
        topRight: "topRight_b877fa option_b877fa",
        disabled: "disabled_b877fa",
        disabledIcon: "disabledIcon_b877fa",
        selected: "selected_b877fa",
      };
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
    485270: function (e, n, t) {
      e.exports = {
        left: "left_c48316",
        right: "right_c48316",
        down: "down_c48316",
        downRight: "downRight_c48316",
        upLeft: "upLeft_c48316",
      };
    },
  },
]);
//# sourceMappingURL=ba4b72e8168cabee3ddc.js.map
