"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22564"],
  {
    775322: function (e) {
      e.exports = "/assets/e5e07cf5a6e7f19be45b.svg";
    },
    853453: function (e) {
      e.exports = "/assets/3cfc93ceb08d74acbcf8.svg";
    },
    214852: function (e, t, n) {
      n.d(t, {
        z: function () {
          return o;
        },
      }),
        n(47120);
      var i = n(192379),
        r = n(442837),
        l = n(353926);
      function o(e) {
        let [t, n] = (0, r.Wu)([l.Z], () => [
          l.Z.getAllUserExperimentDescriptors(),
          l.Z.getGuildExperiments(),
        ]);
        i.useEffect(() => {
          e.trigger();
        }, [e, t, n]);
      }
    },
    212632: function (e, t, n) {
      n(47120);
      var i = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        a = n(481060),
        c = n(981631),
        s = n(388032),
        u = n(373780),
        d = n(232186);
      let f = 0,
        _ = () => "notification-position-selector-".concat(f++),
        h = (e) => {
          switch (e) {
            case c._vf.TOP_LEFT:
              return s.intl.string(s.t.xlchpa);
            case c._vf.TOP_RIGHT:
              return s.intl.string(s.t["4uHRHB"]);
            case c._vf.BOTTOM_LEFT:
              return s.intl.string(s.t.ovWFnJ);
            case c._vf.BOTTOM_RIGHT:
              return s.intl.string(s.t["M/9V7+"]);
            default:
              return s.intl.string(s.t.AlY4ZW);
          }
        },
        p = [
          c._vf.DISABLED,
          c._vf.TOP_LEFT,
          c._vf.TOP_RIGHT,
          c._vf.BOTTOM_LEFT,
          c._vf.BOTTOM_RIGHT,
        ];
      function v(e) {
        let { position: t, onChange: n } = e,
          [l] = r.useState(() => _()),
          f =
            t === c._vf.DISABLED
              ? s.intl.string(s.t.R6LxVV)
              : s.intl.formatToPlainString(s.t.XXHDMz, { position: h(t) });
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(a.FocusRing, {
              within: !0,
              offset: -2,
              children: (0, i.jsx)("div", {
                className: o()(u.wrapper, {
                  [u.disabledSelected]: t === c._vf.DISABLED,
                }),
                children: p.map((e) =>
                  (0, i.jsxs)(
                    "label",
                    {
                      className: o()({
                        [u.selected]: e === t,
                        [u.disabled]: e === c._vf.DISABLED,
                        [u.topRight]: e === c._vf.TOP_RIGHT,
                        [u.topLeft]: e === c._vf.TOP_LEFT,
                        [u.bottomRight]: e === c._vf.BOTTOM_RIGHT,
                        [u.bottomLeft]: e === c._vf.BOTTOM_LEFT,
                      }),
                      children: [
                        h(e),
                        e === c._vf.DISABLED
                          ? (0, i.jsx)(a.DenyIcon, {
                              size: "md",
                              color: "currentColor",
                              className: u.disabledIcon,
                            })
                          : null,
                        (0, i.jsx)("input", {
                          type: "radio",
                          name: l,
                          value: e,
                          onChange: (t) => n(t, e),
                          className: u.hiddenInput,
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            }),
            (0, i.jsx)(a.FormText, {
              type: a.FormTextTypes.DESCRIPTION,
              className: d.marginTop8,
              children: f,
            }),
          ],
        });
      }
      (v.Positions = c._vf), (t.Z = v);
    },
    969383: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
        });
      var i = n(200651);
      n(192379);
      var r = n(238246),
        l = n(438162);
      function o(e) {
        let { withTitleBar: t, windowKey: n } = e;
        return (0, i.jsx)(r.Z, {
          withTitleBar: t,
          windowKey: n,
          title: "Discord Overlay",
          children: (0, i.jsx)(l.Z, {}),
        });
      }
      n(606206), n(371467);
    },
    777382: function (e, t, n) {
      n(653041), n(47120);
      var i = n(200651),
        r = n(192379),
        l = n(442837),
        o = n(481060),
        a = n(355863),
        c = n(237997),
        s = n(451478),
        u = n(145597),
        d = n(830917),
        f = n(312178),
        _ = n(388627),
        h = n(892127),
        p = n(561064),
        v = n(982572);
      function m(e) {
        return e.widget.id;
      }
      function g(e, t, n, r) {
        return n === o.TransitionStates.YEETED
          ? null
          : (0, i.jsx)(
              h.Z,
              {
                ...t,
                transitionState: n,
                cleanUp: r,
                dragContainerClassName: v.dragContainer,
                className: v.widget,
              },
              e,
            );
      }
      let I = [];
      t.Z = r.memo(function (e) {
        let { className: t } = e,
          n = (0, p.Z)(),
          h = (0, l.e7)([s.Z], () => s.Z.windowSize((0, d.ZY)(n))),
          v = (0, l.e7)([c.Z], () => c.Z.isPreviewingInGame()),
          b = (0, l.e7)(
            [a.Z],
            () => {
              let e = a.Z.getLayout(u.qU);
              if (null == e) return I;
              let t = [];
              for (let n of e.widgets) {
                let e = a.Z.getWidget(n);
                if (null == e) continue;
                let i = f.p[e.type];
                null != i &&
                  t.push({
                    widget: e,
                    renderWidget: (t) =>
                      i({
                        ...t,
                        id: e.id,
                        pinned: e.pinned,
                        anchor: e.anchor,
                        isPreviewingInGame: v,
                      }),
                  });
              }
              return t;
            },
            [v],
            _.HP,
          ),
          E = r.useCallback(
            (e) => (0, i.jsx)("div", { className: t, style: h, children: e }),
            [t, h],
          );
        return (0, i.jsx)(o.TransitionGroup, {
          items: b,
          renderItem: g,
          getItemKey: m,
          wrapChildren: E,
        });
      });
    },
    438162: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return ed;
        },
      });
      var i = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        a = n(442837),
        c = n(952265),
        s = n(481060),
        u = n(239091),
        d = n(13245),
        f = n(615287),
        _ = n(110924),
        h = n(100527),
        p = n(906732),
        v = n(146282),
        m = n(70097),
        g = n(594190),
        I = n(567409),
        b = n(74299),
        E = n(989941),
        Z = n(199902),
        C = n(314897),
        x = n(592125),
        T = n(430824),
        L = n(131951),
        y = n(944486),
        O = n(449224),
        N = n(574254),
        w = n(556296),
        D = n(237997),
        k = n(451478),
        R = n(585483),
        P = n(358085),
        A = n(13140),
        S = n(145597),
        U = n(830917),
        j = n(681603),
        G = n(358446),
        F = n(348733),
        V = n(708383),
        M = n(923532),
        W = n(915614),
        B = n(777382),
        z = n(333031),
        H = n(388627),
        Y = n(319414),
        X = n(561064),
        K = n(987650),
        Q = n(981631),
        J = n(206583),
        q = n(388032),
        $ = n(800004);
      let ee = !P.isPlatformEmbedded && !1,
        et = ee
          ? (0, i.jsx)(m.Z, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: $.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0,
            })
          : null,
        en = null;
      function ei(e) {
        e.preventDefault();
      }
      function er(e) {
        (0, u.jW)(e, async () => {
          let { default: e } = await n.e("17610").then(n.bind(n, 385620));
          return (t) => (0, i.jsx)(e, { ...t, layoutId: S.qU, version: 1 });
        });
      }
      let el = r.memo(function (e) {
          let { keybind: t, onClick: n, locked: r } = e;
          return (0, i.jsx)(s.Clickable, {
            className: o()($.overlayBackground, {
              [$.overlayActive]: !r,
              [$.overlayLocked]: r,
            }),
            onMouseDown: (e) => {
              let { currentTarget: t, target: i, button: r } = e;
              r === Q.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: er,
            children: r
              ? null
              : (0, i.jsx)(z.Z, {
                  className: $.closeContainer,
                  children: (0, i.jsx)(W.Z, {
                    keybind: t,
                    onClick: n,
                    IconComponent: s.XLargeIcon,
                  }),
                }),
          });
        }),
        eo = r.memo(function (e) {
          let { locked: t, focused: n } = e;
          return t && n
            ? (0, i.jsx)(z.Z, {
                className: $.closeContainer,
                children: (0, i.jsx)(W.Z, {
                  onClick: () => d.Z.setInputLocked(!1, (0, S.QF)()),
                  IconComponent: s.LockUnlockedIcon,
                }),
              })
            : null;
        });
      function ea() {
        if (null != N.Z.getContextMenu()) {
          (0, u.Zy)();
          return;
        }
        d.Z.setInputLocked(!0, (0, S.QF)());
      }
      function ec() {
        d.Z.setFocusedPID(S.Js);
      }
      function es() {
        d.Z.setFocusedPID(null);
      }
      function eu(e) {
        let t = D.Z.isLocked((0, S.QF)());
        "alt" === e.key.toLowerCase() &&
          !t &&
          ("keyup" === e.type.toLowerCase()
            ? R.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })
            : "keydown" === e.type.toLowerCase() &&
              R.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
      }
      function ed() {
        var e, t;
        let n = (0, X.Z)(),
          {
            locked: l,
            focused: u,
            incompatibleApp: m,
            hasValidResolution: N,
            hasZeroSizeDimension: R,
            keybind: P,
            isPreviewingInGame: W,
          } = (0, a.cj)([D.Z, k.Z, w.Z], () => {
            let e = k.Z.windowSize((0, U.ZY)(n)),
              t = w.Z.getOverlayKeybind();
            return {
              locked: D.Z.isLocked((0, S.QF)()),
              focused: D.Z.isFocused((0, S.QF)()),
              incompatibleApp: D.Z.incompatibleApp,
              hasValidResolution: (0, S.Te)(e),
              hasZeroSizeDimension: 0 === e.height || 0 === e.width,
              keybind: null != t ? (0, A.BB)(t.shortcut, !0) : "???",
              isPreviewingInGame: D.Z.isPreviewingInGame(),
            };
          }),
          z = (0, a.e7)([D.Z], () => D.Z.getActiveRegions()),
          { analyticsLocations: er } = (0, p.ZP)(h.Z.OVERLAY),
          ed = l || W;
        !(function (e, t) {
          let n = r.useRef({ mount: e, unmount: t });
          r.useEffect(() => void (n.current = { mount: e, unmount: t })),
            r.useEffect(
              () => (
                n.current.mount(),
                () => {
                  n.current.unmount();
                }
              ),
              [],
            );
        })(
          () => {
            d.Z.overlayReady((0, S.QF)()),
              n.addEventListener("keydown", eu),
              n.addEventListener("keyup", eu),
              ee &&
                (n.document.hasFocus() && d.Z.setFocusedPID(S.Js),
                n.addEventListener("focus", ec),
                n.addEventListener("blur", es));
          },
          () => {
            n.removeEventListener("keydown", eu),
              n.removeEventListener("keyup", eu),
              ee &&
                (n.removeEventListener("focus", ec),
                n.removeEventListener("blur", es));
          },
        ),
          !(function () {
            let e = r.useRef(!1),
              t = (0, H.pL)(),
              n = y.Z.getVoiceChannelId(),
              i = x.Z.getChannel(n),
              l = null != i ? T.Z.getGuild(i.guild_id) : null,
              o = null != Z.Z.getCurrentUserActiveStream(),
              a = null != n,
              c = (0, b.Z)(L.Z) && !o && null != t,
              s = a && null != l && null != n,
              { showKeybindIndicators: u, dismissKeybindNotification: _ } = (0,
              G.K)();
            r.useEffect(() => {
              if (e.current) return;
              (e.current = !0),
                d.Z.track(Q.rMx.OVERLAY_INITIALIZED, {
                  voice_widget_connected: a,
                  text_widget_connected: !1,
                  overlay_render_method: f.gl[f.gl.OutOfProcess],
                });
              let i = null;
              (i = u
                ? { type: K.nc.KEYBIND_INDICATORS, markAsDismissed: _ }
                : { type: K.nc.WELCOME }),
                c && s
                  ? (i = {
                      type: K.nc.GO_LIVE_VOICE,
                      game: t,
                      voiceChannelId: n,
                      voiceGuild: l,
                    })
                  : c && (i = { type: K.nc.GO_LIVE_NON_VOICE, game: t }),
                d.Z.overlayMounted(i);
            }, [a, c, s, t, n, l, u, _]);
          })(),
          (e = l),
          (t = n),
          r.useEffect(() => {
            if (e) {
              if (
                ((0, c.Ay)(s.POPOUT_MODAL_CONTEXT),
                t.addEventListener("contextmenu", ei, !1),
                null != en)
              ) {
                let e = Date.now() - en;
                d.Z.track(Q.rMx.OVERLAY_LOCKED, { unlocked_duration: e }),
                  (en = null);
              }
              return () => {
                t.removeEventListener("contextmenu", ei, !1);
              };
            }
            t.removeEventListener("contextmenu", ei, !1),
              null == en &&
                ((en = Date.now()), d.Z.track(Q.rMx.OVERLAY_UNLOCKED));
          }, [e, t]);
        let ef = (0, a.e7)([y.Z], () => y.Z.getVoiceChannelId()),
          e_ = (0, a.e7)([x.Z], () => x.Z.getChannel(ef)),
          eh = (0, a.e7)([T.Z], () =>
            null != e_ ? T.Z.getGuild(e_.guild_id) : null,
          ),
          ep = (0, a.e7)([C.default], () => C.default.getId()),
          ev = (0, a.e7)([g.ZP, O.Z], () => (0, E.Z)(g.ZP, O.Z)),
          em = (0, I.Ns)(null == ev ? void 0 : ev.id),
          eg = (0, a.e7)(
            [v.Z],
            () => null != v.Z.getLastFeedFetchDate(J.YN.GAME_PROFILE_FEED),
          ),
          eI = (0, _.Z)(eg);
        return (r.useEffect(() => {
          !eI && eg && d.Z.notifyContentInventoryReady(em);
        }, [em, eg, eI]),
        R || m)
          ? null
          : (0, i.jsx)(p.Gt, {
              value: er,
              children: (0, i.jsx)(s.RedesignIconContextProvider, {
                children: (0, i.jsxs)("div", {
                  className: $.overlay,
                  children: [
                    (0, i.jsx)(V.Z, {}),
                    W &&
                      (0, i.jsx)("header", {
                        className: $.previewingInGameHeader,
                        children: q.intl.string(q.t.iOq96u),
                      }),
                    et,
                    (!l || z.has(Q.O0n.TEXT_WIDGET)) &&
                      (0, i.jsx)(el, { locked: l, keybind: P, onClick: ea }),
                    N
                      ? (0, i.jsx)(B.Z, {
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
                              children: q.intl.format(q.t.ketnW1, S.FW),
                            }),
                          }),
                    (0, i.jsx)(Y.Z, {}),
                    ee && (0, i.jsx)(eo, { locked: l, focused: u }),
                    null != eh &&
                      null != ef &&
                      (0, i.jsx)(M.Z, {
                        streamerId: ep,
                        guildId: eh.id,
                        channelId: ef,
                      }),
                    (0, i.jsx)(F.Z, { locked: ed, keybind: P }),
                    (0, i.jsx)(j.Z, {}),
                  ],
                }),
              }),
            });
      }
    },
    905423: function (e, t, n) {
      var i = n(512969),
        r = n(65400),
        l = n(731965),
        o = n(893607),
        a = n(981631);
      function c(e) {
        let t = (0, i.LX)(null != e ? e : "", {
          path: a.Z5c.CHANNEL(
            o.Hw.guildId(),
            o.Hw.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return {
            guildId: e === a.ME ? null : e,
            channelId: null != n ? n : null,
          };
        }
        let n = (0, i.LX)(null != e ? e : "", {
          path: a.Z5c.GUILD_BOOSTING_MARKETING(o.Hw.guildId()),
        });
        return null != n
          ? { guildId: n.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      t.Z = (0, r.F)((e) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: i } = c(t);
          (0, l.j)(() => e({ path: t, guildId: n, channelId: i }));
        },
        resetPath(t) {
          let { guildId: n, channelId: i } = c(t);
          (0, l.j)(() =>
            e({ path: null, guildId: n, channelId: i, basePath: t }),
          );
        },
      }));
    },
    977059: function (e, t, n) {
      n.d(t, {
        R: function () {
          return l;
        },
        S: function () {
          return r;
        },
      });
      let i = (0, n(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function r(e) {
        let { location: t } = e;
        return i.useExperiment({ location: t }, { autoTrackExposure: !0 });
      }
      function l(e) {
        let { location: t } = e;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    829750: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
        t: function () {
          return c;
        },
      });
      var i = n(442837),
        r = n(430824),
        l = n(938475),
        o = n(981631);
      function a(e) {
        return (0, i.cj)(
          [l.ZP, r.Z],
          () => {
            let t = l.ZP.countVoiceStatesForChannel(e.id),
              n = r.Z.getGuild(e.getGuildId());
            return null == n
              ? { reachedLimit: !1, limit: -1 }
              : e.type === o.d4z.GUILD_STAGE_VOICE
                ? {
                    reachedLimit: t > n.maxStageVideoChannelUsers,
                    limit: n.maxStageVideoChannelUsers,
                  }
                : {
                    reachedLimit:
                      n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                    limit: n.maxVideoChannelUsers,
                  };
          },
          [e],
        );
      }
      function c(e) {
        let t = l.ZP.countVoiceStatesForChannel(e.id),
          n = r.Z.getGuild(e.getGuildId());
        return null == n
          ? { reachedLimit: !1, limit: -1 }
          : e.type === o.d4z.GUILD_STAGE_VOICE
            ? {
                reachedLimit: t > n.maxStageVideoChannelUsers,
                limit: n.maxStageVideoChannelUsers,
              }
            : {
                reachedLimit:
                  n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                limit: n.maxVideoChannelUsers,
              };
      }
    },
    173507: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(481060),
        l = n(695346),
        o = n(981631);
      function a(e, t) {
        l.qF.getSetting()
          ? (0, r.openModalLazy)(
              async () => {
                let { default: t } = await Promise.all([
                  n.e("8821"),
                  n.e("39607"),
                ]).then(n.bind(n, 601572));
                return (n) =>
                  (0, i.jsx)(t, { ...n, onEnable: e, videoEnabled: !1 });
              },
              {
                modalKey: "camera-preview",
                contextKey:
                  t === o.IlC.POPOUT
                    ? r.POPOUT_MODAL_CONTEXT
                    : r.DEFAULT_MODAL_CONTEXT,
              },
            )
          : null == e || e();
      }
    },
    606206: function (e, t, n) {
      let i;
      n(47120), n(653041), n(411104);
      var r,
        l,
        o,
        a,
        c = n(442837),
        s = n(570140),
        u = n(278323),
        d = n(212819),
        f = n(933557),
        _ = n(592125),
        h = n(430824),
        p = n(293273),
        v = n(158776),
        m = n(699516),
        g = n(594174),
        I = n(55589),
        b = n(981631);
      let E = [d.h8.TEXT_CHANNEL, d.h8.GROUP_DM, d.h8.USER],
        Z = null,
        C = null,
        x = [],
        T = [];
      function L(e) {
        (x = [...x, e]),
          (T = T.map((e) => ({ ...e, sent: x.includes(e.data.record.id) }))),
          w.emitChange();
      }
      function y() {
        (Z = null), null != i && (i.destroy(), (i = null)), null != C && C();
      }
      function O() {
        let e =
          null != Z && null != Z.application_id
            ? p.Z.getApplicationActivity(Z.application_id)
            : null;
        if (null != Z && (null == e || null == e.party || null == e.party.id))
          return y();
      }
      class N extends (r = c.ZP.Store) {
        initialize() {
          this.waitFor(p.Z);
        }
        getActivity() {
          return Z;
        }
        getQuery() {
          var e;
          return null !== (e = null == i ? void 0 : i.query) && void 0 !== e
            ? e
            : "";
        }
        getResults() {
          return T;
        }
      }
      (a = "ActivityInviteModalStore"),
        (o = "displayName") in (l = N)
          ? Object.defineProperty(l, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[o] = a);
      let w = new N(s.Z, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
          (Z = e.activity),
            (C = e.resolve),
            (x = []),
            null == i &&
              (i = new d.ZP(
                (e, t) => {
                  var n;
                  return (
                    (n = e),
                    void ((T = (
                      "" === t.trim()
                        ? (function () {
                            let e = [];
                            return (
                              I.Z.getPrivateChannelIds().forEach((t) => {
                                let n = _.Z.getChannel(t);
                                if (null != n)
                                  if (n.type === b.d4z.DM) {
                                    let t = n.getRecipientId(),
                                      i =
                                        null != t ? g.default.getUser(t) : null;
                                    null != i &&
                                      e.push({
                                        type: d.h8.USER,
                                        record: i,
                                        score: 0,
                                      });
                                  } else
                                    n.isMultiUserDM() &&
                                      e.push({
                                        type: d.h8.GROUP_DM,
                                        record: n,
                                        score: 0,
                                      });
                              }),
                              e
                            );
                          })()
                        : n
                    ).map((e) => {
                      switch (e.type) {
                        case d.h8.USER: {
                          let { record: t } = e;
                          return {
                            type: d.h8.USER,
                            sent: x.includes(t.id),
                            status: v.Z.getStatus(t.id),
                            data: e,
                          };
                        }
                        case d.h8.TEXT_CHANNEL: {
                          let { record: t } = e,
                            n = _.Z.getChannel(t.parent_id),
                            i = h.Z.getGuild(t.guild_id);
                          return {
                            type: d.h8.TEXT_CHANNEL,
                            sent: x.includes(t.id),
                            categoryName:
                              null != n ? (0, f.F6)(n, g.default, m.Z) : "",
                            guildName: null != i ? i.toString() : "",
                            data: e,
                          };
                        }
                        case d.h8.GROUP_DM: {
                          let { record: t } = e;
                          return {
                            type: d.h8.GROUP_DM,
                            sent: x.includes(t.id),
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
                E,
                100,
              )),
            i.search("");
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
          let { query: t } = e;
          null != i && i.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
          if (null == Z) return;
          let t = e.channelId,
            n = e.userId;
          null != t
            ? u.Z.sendActivityInvite({
                channelId: t,
                type: b.mFx.JOIN,
                activity: Z,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => L(t))
            : null != n &&
              u.Z.sendActivityInviteUser({
                userId: n,
                type: b.mFx.JOIN,
                activity: Z,
                location: "Channel Text Area - Invite to Join Modal",
              }).then(() => L(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: y,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
          let { locked: t } = e;
          return !!t && null != Z && (y(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: O,
        RPC_APP_DISCONNECTED: O,
      });
      t.Z = 12633 == n.j ? w : null;
    },
    460562: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(331595);
      function l(e) {
        let {
          width: t = 32,
          height: n = 32,
          color: l = "currentColor",
          ...o
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.Z)(o),
          width: t,
          height: n,
          viewBox: "0 0 12 12",
          fill: "none",
          children: [
            (0, i.jsx)("path", { d: "M7.25 1H4.75V7.25H7.25V1Z", fill: l }),
            (0, i.jsx)("path", {
              d: "M4.75 9.75C4.75 10.4167 5.33333 11 6 11C6.66667 11 7.25 10.4167 7.25 9.75C7.25 9.08333 6.66667 8.5 6 8.5C5.33333 8.5 4.75 9.08333 4.75 9.75Z",
              fill: l,
            }),
          ],
        });
      }
    },
    671533: function (e, t, n) {
      n(411104);
      var i,
        r,
        l = n(200651);
      n(192379);
      var o = n(120356),
        a = n.n(o),
        c = n(331595),
        s = n(485270);
      ((r = i || (i = {})).LEFT = "LEFT"),
        (r.RIGHT = "RIGHT"),
        (r.UP = "UP"),
        (r.DOWN = "DOWN"),
        (r.UP_LEFT = "UP_LEFT"),
        (r.DOWN_RIGHT = "DOWN_RIGHT");
      let u = (e) => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = "currentColor",
          direction: r,
          foreground: o,
          className: u,
          title: d,
          ...f
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, c.Z)(f),
          width: t,
          height: n,
          className: a()(
            u,
            (function (e) {
              switch (e) {
                case "LEFT":
                  return s.left;
                case "RIGHT":
                  return s.right;
                case "UP":
                  return null;
                case "DOWN":
                  return s.down;
                case "UP_LEFT":
                  return s.upLeft;
                case "DOWN_RIGHT":
                  return s.downRight;
                default:
                  throw Error("Invalid Direction ".concat(e));
              }
            })(r),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != d ? (0, l.jsx)("title", { children: d }) : null,
            (0, l.jsx)("polygon", {
              className: o,
              fill: i,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (u.Directions = i), (t.Z = u);
    },
    971139: function (e, t, n) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    373780: function (e, t, n) {
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
    13663: function (e, t, n) {
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
    932209: function (e, t, n) {
      e.exports = {
        dismissButton: "dismissButton_a9614f",
        dismissIcon: "dismissIcon_a9614f",
      };
    },
    706446: function (e, t, n) {
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
    163752: function (e, t, n) {
      e.exports = {
        buttonContainer: "buttonContainer_b1ba99",
        keybind: "keybind_b1ba99",
        button: "button_b1ba99",
      };
    },
    256403: function (e, t, n) {
      e.exports = { key: "key_da7116" };
    },
    982572: function (e, t, n) {
      e.exports = {
        widget: "widget_e80714",
        dragContainer: "dragContainer_e80714",
      };
    },
    608631: function (e, t, n) {
      e.exports = {
        debugMode: "debugMode_f4091c",
        clickable: "clickable_f4091c",
      };
    },
    800004: function (e, t, n) {
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
    714902: function (e, t, n) {
      e.exports = { container: "container_c7fa60" };
    },
    152397: function (e, t, n) {
      e.exports = {
        extrasContainer: "extrasContainer_b932b3",
        debug: "debug_b932b3",
        debugUnpinned: "debugUnpinned_b932b3",
        debugPinned: "debugPinned_b932b3",
      };
    },
    640784: function (e, t, n) {
      e.exports = { textArea: "textArea_daa88b" };
    },
    176463: function (e, t, n) {
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
    802334: function (e, t, n) {
      e.exports = { container: "container_f19072" };
    },
    485270: function (e, t, n) {
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
//# sourceMappingURL=1bd794e364e9e0d38d00.js.map
