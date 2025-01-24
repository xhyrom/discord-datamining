"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22419"],
  {
    567409: function (e, t, n) {
      n.d(t, {
        Ns: function () {
          return v;
        },
      }),
        n(47120);
      var i = n(192379),
        o = n(392711),
        r = n.n(o),
        a = n(876215),
        l = n(442837),
        s = n(146282),
        d = n(26033),
        c = n(897674),
        u = n(709054),
        p = n(206583);
      let h = new Set([a.s.PLAYED_GAME, a.s.LAUNCHED_ACTIVITY]),
        _ = (e) => h.has(e.content_type);
      function v(e) {
        let { entries: t } = (function () {
          let e = (0, c.Z)(p.YN.GAME_PROFILE_FEED),
            t = (0, c.Z)(p.YN.GLOBAL_FEED),
            n = i.useMemo(
              () =>
                r()(t)
                  .unionBy(e, (e) => e.id)
                  .filter(_)
                  .orderBy((e) => u.default.extractTimestamp(e.id), "desc")
                  .uniqWith(
                    (e, t) =>
                      e.author_id === t.author_id &&
                      e.extra.application_id === t.extra.application_id,
                  )
                  .value(),
              [e, t],
            );
          return {
            requestId: (0, l.e7)([s.Z], () =>
              s.Z.getFeedRequestId(p.YN.GAME_PROFILE_FEED),
            ),
            entries: n,
          };
        })();
        return i.useMemo(
          () =>
            null == t
              ? void 0
              : t.filter(
                  (t) =>
                    ((0, d.dX)(t) || (0, d.Mq)(t)) &&
                    t.extra.application_id === e,
                ),
          [t, e],
        );
      }
    },
    552282: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      function i(e) {
        var t;
        return null != e
          ? { id: e.id, name: null !== (t = e.name) && void 0 !== t ? t : "" }
          : null;
      }
    },
    635324: function (e, t, n) {
      n(47120);
      var i = n(200651),
        o = n(149765),
        r = n(481060),
        a = n(570140),
        l = n(700785);
      __OVERLAY__ &&
        a.Z.subscribe("OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN", function (e) {
          let {
              clientId: t,
              authorizeProps: { authorizations: s, permissions: d, ...c },
            } = e,
            u = "OAuth2Authorize_"
              .concat(t, "_")
              .concat(c.guildId, "_")
              .concat(c.channelId);
          function p(e) {
            let { location: n } = e;
            a.Z.dispatch({
              type: "OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE",
              clientId: t,
              location: n,
            });
          }
          let h = l.Hn;
          try {
            h = o.vB(null != d ? d : 0);
          } catch (e) {}
          (0, r.openModalLazy)(
            async () => {
              let { OAuth2AuthorizeModal: e } = await Promise.resolve().then(
                n.bind(n, 69580),
              );
              return (t) =>
                (0, i.jsx)(e, {
                  ...t,
                  ...c,
                  authorizations: new Map(s),
                  permissions: h,
                  callback: p,
                });
            },
            {
              modalKey: u,
              onCloseRequest: () => {
                (0, r.closeModal)(u), p({});
              },
            },
          );
        });
    },
    290161: function (e, t, n) {
      n.r(t);
      var i = n(200651),
        o = n(192379),
        r = n(442837),
        a = n(481060),
        l = n(490173),
        s = n(735246),
        d = n(40851),
        c = n(503737),
        u = n(823453),
        p = n(436774),
        h = n(686546),
        _ = n(314910),
        v = n(367207),
        m = n(241890),
        f = n(649561),
        y = n(631553),
        E = n(981631);
      n(635324), n(167666), n(308765), n(913487), r.ZP.initialize();
      t.default = function () {
        return (
          o.useEffect(
            () => (
              v.Z.initialize(),
              c.Z.initialize(),
              m.Z.init(),
              () => {
                v.Z.terminate(), c.Z.terminate();
              }
            ),
            [],
          ),
          (0, i.jsxs)(o.Fragment, {
            children: [
              (0, i.jsx)(u.Z, {}),
              (0, i.jsx)(s.T, {
                children: (0, i.jsxs)(f.Z, {
                  children: [
                    (0, i.jsx)(h.Co, {}),
                    (0, i.jsx)(p.ZP, {}),
                    (0, i.jsx)(d.Wu, {
                      appContext: E.IlC.OVERLAY,
                      renderWindow: window,
                      children: (0, i.jsxs)(_.yP, {
                        children: [
                          (0, i.jsx)(y.Z, {}),
                          (0, i.jsx)(a.Modals, {}),
                          (0, i.jsx)(l.Z, {}),
                          (0, i.jsx)(_.Un, {}),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
    681603: function (e, t, n) {
      var i = n(192379),
        o = n(149765),
        r = n(442837),
        a = n(367907),
        l = n(731429),
        s = n(188471),
        d = n(318885),
        c = n(592125),
        u = n(984933),
        p = n(271383),
        h = n(430824),
        _ = n(496675),
        v = n(944486),
        m = n(914010),
        f = n(594174),
        y = n(237997),
        E = n(145597),
        b = n(981631);
      class Z extends i.Component {
        componentDidUpdate(e) {
          if (this.props.locked) return null;
          let {
            selectedGuild: t,
            selectedChannel: n,
            isMemberPending: i,
            hasPreviewEnabled: o,
            postableChannelCount: r,
          } = this.props;
          if (
            (null != t &&
              (t !== e.selectedGuild || (i && !e.isMemberPending)) &&
              ((0, d.Q)(b.rMx.GUILD_VIEWED, {
                ...(i ? { is_pending: i, preview_enabled: o } : {}),
                postable_channels: r,
              }),
              (0, s.a)(b.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != n && n !== e.selectedChannel)
          ) {
            let e = (0, l.K)(c.Z.getChannel(n), !0);
            (0, d.Q)(b.rMx.CHANNEL_OPENED, { ...e, ...(0, a.$H)(n) }),
              (0, s.a)(b.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
          }
        }
        render() {
          return null;
        }
      }
      t.Z = r.ZP.connectStores(
        [m.Z, v.Z, h.Z, f.default, y.Z, u.ZP, _.Z, p.ZP],
        () => {
          var e, t, n;
          let i = m.Z.getGuildId(),
            r = v.Z.getChannelId(i),
            a = h.Z.getGuild(i),
            l = f.default.getCurrentUser(),
            s =
              null !==
                (t = u.ZP.getChannels(null == a ? void 0 : a.id)[u.sH]) &&
              void 0 !== t
                ? t
                : [],
            d =
              s.length > 0
                ? s.filter((e) => {
                    let { channel: t } = e;
                    return _.Z.can(
                      o.$e(b.Plq.SEND_MESSAGES, b.Plq.VIEW_CHANNEL),
                      t,
                    );
                  }).length
                : 0,
            c =
              null != l &&
              null != i &&
              null !==
                (n =
                  null === (e = p.ZP.getMember(i, l.id)) || void 0 === e
                    ? void 0
                    : e.isPending) &&
              void 0 !== n &&
              n;
          return {
            selectedGuild: i,
            selectedChannel: r,
            locked: y.Z.isLocked((0, E.QF)()),
            hasPreviewEnabled:
              null == a ? void 0 : a.features.has(b.oNc.PREVIEW_ENABLED),
            isMemberPending: c,
            postableChannelCount: d,
          };
        },
      )(Z);
    },
    649561: function (e, t, n) {
      n(47120), n(177593);
      var i = n(200651),
        o = n(192379),
        r = n(120356),
        a = n.n(r),
        l = n(392711),
        s = n.n(l),
        d = n(818405),
        c = n(587158),
        u = n(286379),
        p = n(481060),
        h = n(13245),
        _ = n(490029),
        v = n(797614),
        m = n(593481),
        f = n(703656),
        y = n(254761),
        E = n(70956),
        b = n(960048),
        Z = n(145597),
        g = n(692546),
        k = n(518084),
        C = n(987650),
        x = n(981631),
        I = n(388032),
        w = n(974881);
      function L(e, t, n) {
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
      let S = 10 * E.Z.Millis.SECOND;
      function A() {
        let e = (0, Z.QF)(),
          t = (0, Z.Ht)();
        (0, _.lW)({
          type: x.BmY.DISPATCH,
          pid: e,
          token: t,
          payloads: [{ type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: e }],
        });
      }
      class P extends o.PureComponent {
        componentDidMount() {
          (this.notificationTimer = setTimeout(this.hideNotification, S)),
            h.Z.track(x.rMx.NOTIFICATION_VIEWED, {
              notif_type: C.n0.OverlayCrashed,
            });
        }
        componentWillUnmount() {
          let { notificationTimer: e } = this;
          null != e && clearTimeout(e);
        }
        render() {
          let { info: e, error: t } = this.props,
            { showTrace: n } = this.state,
            { notificationTimer: o } = this;
          return null == o
            ? null
            : (0, i.jsx)(g.Z, {
                observe: !1,
                children: (0, i.jsx)(p.ThemeProvider, {
                  theme: x.BRd.DARK,
                  children: (o) =>
                    (0, i.jsxs)(p.Clickable, {
                      className: a()(o, w.container),
                      onClick: (e) => e.stopPropagation(),
                      children: [
                        (0, i.jsx)(m.ZP, {
                          expand: !0,
                          icon: (0, i.jsx)(y.Z, {
                            width: 40,
                            height: 40,
                            className: w.notificationIcon,
                          }),
                          title: I.intl.string(I.t.U38qZm),
                          confirmText: I.intl.string(I.t.TzAl1d),
                          onNotificationClick: this.handleNotificationClick,
                          onConfirmClick: this.handleReload,
                          onDismissClick: this.hideNotification,
                        }),
                        n && null != e
                          ? (0, i.jsxs)(k.ZP, {
                              className: w.stackTrace,
                              children: [
                                (0, i.jsx)(k.ZP.Bar, {
                                  children: "Error Details",
                                }),
                                (0, i.jsx)(k.ZP.Content, {
                                  className: w.stackTraceCode,
                                  children: (0, i.jsx)("code", {
                                    className: w.code,
                                    children: (0, i.jsx)("pre", {
                                      children: t.stack,
                                    }),
                                  }),
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                }),
              });
        }
        constructor(...e) {
          super(...e),
            L(this, "state", { showTrace: !1, busy: !1 }),
            L(this, "notificationTimer", void 0),
            L(this, "hideNotification", () => {
              A();
              let { notificationTimer: e } = this;
              null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            L(this, "handleReload", (e) => {
              this.setState({ busy: !0 }),
                A(),
                h.Z.track(
                  x.rMx.NOTIFICATION_CLICKED,
                  { notif_type: C.n0.OverlayCrashed, action_type: "reload" },
                  !0,
                ),
                e.stopPropagation(),
                setTimeout(() => location.reload(!0), 200);
            }),
            L(this, "handleNotificationClick", (e) => {
              e.stopPropagation();
              let { notificationTimer: t } = this;
              null != t && clearTimeout(t),
                e.shiftKey && this.setState({ showTrace: !0 });
            });
        }
      }
      let O = s().throttle(
        () => {
          v.Z.increment(
            {
              name: u.V.APP_CRASHED,
              tags: [
                "reason:".concat(d.v.UNHANDLED_JS_ERROR),
                "level:".concat(c.c.FATAL),
              ],
            },
            !0,
          );
        },
        100,
        { trailing: !1 },
      );
      class T extends o.PureComponent {
        componentDidCatch(e, t) {
          let n = (0, f.s1)().location;
          this.setState({ error: e, info: t });
          let i = (0, Z.QF)(),
            o = (0, Z.Ht)();
          (0, _.lW)({
            type: x.BmY.DISPATCH,
            pid: (0, Z.QF)(),
            token: o,
            payloads: [
              { type: "OVERLAY_CRASHED", error: e.message, pid: i },
              { type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: i },
            ],
          }),
            setImmediate(() => window.addEventListener("click", A));
          let r = b.Z.captureCrash(e, { extra: t });
          h.Z.track(x.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: r,
            error_level: "fatal",
          }),
            O();
        }
        render() {
          let { children: e, className: t } = this.props,
            { error: n, info: o } = this.state;
          return null != n
            ? (0, i.jsx)(P, { error: n, info: o })
            : (0, i.jsx)("div", { className: t, children: e });
        }
        constructor(...e) {
          super(...e), L(this, "state", { error: null, info: null });
        }
      }
      t.Z = T;
    },
    631553: function (e, t, n) {
      let i;
      n.d(t, {
        Z: function () {
          return eb;
        },
      }),
        n(653041);
      var o = n(200651),
        r = n(192379),
        a = n(120356),
        l = n.n(a),
        s = n(921738),
        d = n.n(s),
        c = n(954955),
        u = n.n(c),
        p = n(498607),
        h = n.n(p),
        _ = n(442837),
        v = n(481060),
        m = n(668781),
        f = n(239091),
        y = n(13245),
        E = n(425493),
        b = n(615287),
        Z = n(951483),
        g = n(714338),
        k = n(185666),
        C = n(100527),
        x = n(906732),
        I = n(146282),
        w = n(600164);
      n(70097);
      var L = n(594190),
        S = n(567409),
        A = n(74299),
        P = n(989941),
        O = n(377400),
        T = n(329557),
        N = n(93127),
        D = n(199902),
        R = n(314897),
        M = n(592125),
        j = n(480294),
        G = n(430824),
        U = n(131951),
        K = n(944486),
        V = n(618541),
        Y = n(449224),
        F = n(574254),
        W = n(556296),
        z = n(808506),
        B = n(237997),
        H = n(451478),
        Q = n(70956),
        q = n(358085),
        X = n(998502),
        J = n(13140),
        $ = n(145597),
        ee = n(658785),
        et = n(681603),
        en = n(358446),
        ei = n(348733),
        eo = n(312178),
        er = n(708383),
        ea = n(923532),
        el = n(107200),
        es = n(987650),
        ed = n(981631),
        ec = n(206583),
        eu = n(388032),
        ep = n(746120);
      function eh(e, t, n) {
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
      (_.ZP.PersistedStore.disableWrites = __OVERLAY__), _.ZP.initialize();
      let e_ = null;
      function ev(e) {
        e.preventDefault();
      }
      function em(e) {
        (0, f.jW)(e, async () => {
          let { default: e } = await n.e("92780").then(n.bind(n, 930381));
          return (t) => (0, o.jsx)(e, { ...t });
        });
      }
      q.isPlatformEmbedded;
      let ef = (e) => {
          let { keybind: t, onClick: n, isPreviewingInGame: i, locked: r } = e,
            a = r ? v.Clickable : "div";
          return (0, o.jsx)(a, {
            className: l()(ep.overlayBackground, {
              [ep.overlayActive]: !r,
              [ep.overlayLocked]: r,
              [ep.previewMode]: !r && i,
            }),
            onMouseDown: (e) => {
              let { currentTarget: t, target: i, button: o } = e;
              o === ed.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: em,
            children: r
              ? null
              : (0, o.jsx)("div", {
                  className: ep.closeContainer,
                  children: (0, o.jsx)(E.Z, {
                    variant: E.Z.Variants.BOLD,
                    keybind: t,
                    closeAction: n,
                  }),
                }),
          });
        },
        ey = (e) => {
          let {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: o,
            ctrlKey: r,
          } = e;
          return { keyCode: t, shiftKey: n, metaKey: i, altKey: o, ctrlKey: r };
        };
      class eE extends r.Component {
        handleLock() {
          !(0, v.hasAnyModalOpen)() &&
            !F.Z.isOpen() &&
            y.Z.setInputLocked(!0, (0, $.QF)());
        }
        handleDeactivate() {
          y.Z.deactivateAllRegions();
        }
        componentDidMount() {
          y.Z.startSession(),
            O.Z.initialize(),
            k.Z.initialize(),
            T.Z.initialize();
        }
        componentDidUpdate(e) {
          let { initialized: t } = this.props;
          if (!!t) {
            if (t && !e.initialized) {
              this.initialSetup();
              return;
            }
            if (!e.locked && this.props.locked) {
              if (
                (window.addEventListener("contextmenu", ev, !1), null != e_)
              ) {
                let e = Date.now() - e_;
                y.Z.track(ed.rMx.OVERLAY_LOCKED, { unlocked_duration: e }),
                  (e_ = null);
              }
              g.Z.disable(),
                (this.activeKeyEventShapes = []),
                B.Z.isPinned(ed.Odu.TEXT) &&
                  (g.Z.setLayout(Z.Xq), g.Z.enable());
            } else
              e.locked &&
                !this.props.locked &&
                (window.removeEventListener("contextmenu", ev, !1),
                null == e_ &&
                  ((e_ = Date.now()), y.Z.track(ed.rMx.OVERLAY_UNLOCKED)),
                g.Z.disable(),
                (this.activeKeyEventShapes = []),
                g.Z.setLayout(Z.Sr),
                g.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
              (this.lockEventShape = (0, J.d2)(this.props.keybindKeyCodes)),
              !e.hasFetchedContentInventory &&
                this.props.hasFetchedContentInventory &&
                y.Z.notifyContentInventoryReady(
                  this.props.contentInventoryEntries,
                );
          }
        }
        initialSetup() {
          let {
            connectedToVoice: e,
            locked: t,
            canGoLive: n,
            isStreaming: i,
            voiceGuild: o,
            voiceChannelId: r,
            game: a,
            showKeybindNotification: l,
            dismissKeybindNotification: s,
          } = this.props;
          y.Z.track(ed.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: B.Z.isPinned(ed.Odu.TEXT),
            overlay_render_method: b.gl[b.gl.Hook],
          }),
            ee.Z.trackExposure({ location: "Overlay" });
          let d = n && !i && null != a,
            c = e && null != o && null != r,
            u = { type: es.nc.WELCOME };
          if (
            (l
              ? (u = { type: es.nc.KEYBIND_INDICATORS, markAsDismissed: s })
              : d && c
                ? (u = {
                    type: es.nc.GO_LIVE_VOICE,
                    game: a,
                    voiceChannelId: r,
                    voiceGuild: o,
                  })
                : d && (u = { type: es.nc.GO_LIVE_NON_VOICE, game: a }),
            y.Z.overlayMounted(u),
            window.addEventListener("resize", this.handleWindowResize),
            t && window.addEventListener("contextmenu", ev, !1),
            q.isPlatformEmbedded)
          ) {
            let e = X.ZP.requireModule("discord_overlay2");
            void 0 !== e.setPerfInfoCallback &&
              (e.setPerfInfoCallback((e) => {
                y.Z.track(ed.rMx.OVERLAY_PERF_INFO, e);
              }),
              e.broadcastCommand({
                message: "set_perf_report_interval",
                interval: 15 * Q.Z.Millis.MINUTE,
              })),
              X.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                B.Z.getDisableExternalLinkAlert() || t === V.Z.getLastURL()
                  ? X.ZP.send("OPEN_EXTERNAL_URL", t)
                  : m.Z.show({
                      title: eu.intl.string(eu.t.WLx4Fx),
                      body: eu.intl.string(eu.t.H8O1TE),
                      secondaryConfirmText: eu.intl.string(eu.t.IwqGhY),
                      confirmText: eu.intl.string(eu.t["3PatS0"]),
                      cancelText: eu.intl.string(eu.t["ETE/oK"]),
                      onConfirmSecondary: () => {
                        y.Z.disableExternalLinkAlert(),
                          X.ZP.send("OPEN_EXTERNAL_URL", t);
                      },
                      onConfirm: () => X.ZP.send("OPEN_EXTERNAL_URL", t),
                    });
              });
          }
          window.addEventListener("keydown", this.onKeyDownGlobal, !0),
            window.addEventListener("keyup", this.onKeyUpGlobal, !0);
        }
        componentWillUnmount() {
          window.removeEventListener("resize", this.handleWindowResize),
            window.removeEventListener("keydown", this.onKeyDownGlobal, !0),
            window.removeEventListener("keyup", this.onKeyUpGlobal, !0),
            this.props.locked &&
              window.removeEventListener("contextmenu", ev, !1),
            O.Z.terminate(),
            k.Z.terminate(),
            T.Z.terminate();
        }
        renderInvalidSizeMessage() {
          return (0, o.jsx)(w.Z, {
            justify: w.Z.Justify.CENTER,
            align: w.Z.Align.CENTER,
            className: ep.invalidContainer,
            children: (0, o.jsx)("div", {
              className: ep.inactiveContainer,
              children: eu.intl.format(eu.t.ketnW1, $.FW),
            }),
          });
        }
        render() {
          let {
              locked: e,
              keybind: t,
              incompatibleApp: n,
              initialized: r,
              isPreviewingInGame: a,
              activeRegions: s,
              windowSize: d,
              voiceGuild: c,
              voiceChannelId: u,
            } = this.props,
            { width: p, height: h } = d;
          if (0 === p || 0 === h || n || !r) return null;
          let _ = e || a,
            v = R.default.getId();
          return (0, o.jsxs)("div", {
            className: ep.overlay,
            children: [
              (0, o.jsx)(er.Z, {}),
              a &&
                (0, o.jsx)("header", {
                  className: ep.previewingInGameHeader,
                  children: eu.intl.string(eu.t.iOq96u),
                }),
              i,
              (!e || s.has(ed.O0n.TEXT_WIDGET)) &&
                (0, o.jsx)(ef, {
                  locked: e,
                  keybind: t,
                  onClick: e ? this.handleDeactivate : this.handleLock,
                  isPreviewingInGame: a,
                }),
              (0, $.Te)(d)
                ? (0, o.jsx)(eo.Z, {
                    className: l()({
                      [ep.layoutLocked]: e,
                      [ep.layoutUnlocked]: !e,
                    }),
                  })
                : e
                  ? null
                  : this.renderInvalidSizeMessage(),
              (0, o.jsx)(el.Z, {}),
              null != c &&
                null != u &&
                (0, o.jsx)(ea.Z, {
                  streamerId: v,
                  guildId: c.id,
                  channelId: u,
                }),
              (0, o.jsx)(ei.Z, { locked: _, keybind: t }),
              (0, o.jsx)(et.Z, {}),
            ],
          });
        }
        constructor(e) {
          super(e),
            eh(this, "handleWindowResize", () => {
              z.Z.isFocusedPidOutOfProcess()
                ? this.forceUpdate()
                : u()(() => {
                    this.forceUpdate();
                  }, 500);
            }),
            eh(this, "activeKeyEventShapes", []),
            eh(this, "lockEventShape", (0, J.d2)(this.props.keybindKeyCodes)),
            eh(this, "getActiveKeyEventIndex", (e) =>
              this.activeKeyEventShapes.findIndex((t) => h()(t, e)),
            ),
            eh(this, "onKeyDownGlobal", (e) => {
              let t = ey(e),
                n = this.getActiveKeyEventIndex(t) > -1,
                i = [16, 17, 18, 91].includes(e.keyCode);
              !n && !i && this.activeKeyEventShapes.push(t),
                this.activeKeyEventShapes.length ===
                  this.lockEventShape.length &&
                  this.lockEventShape.every((e) =>
                    this.activeKeyEventShapes.some((t) => h()(e, t)),
                  ) &&
                  (e.preventDefault(), e.stopPropagation());
              let { locked: o, activeRegions: r } = this.props;
              t.keyCode === d().codes.esc &&
                o &&
                r.has(ed.O0n.TEXT_WIDGET) &&
                y.Z.deactivateAllRegions();
            }),
            eh(this, "onKeyUpGlobal", (e) => {
              let t = ey(e),
                n = this.getActiveKeyEventIndex(t);
              n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
          let t = e.locked && B.Z.isPinned(ed.Odu.TEXT);
          g.Z.setLayout(t ? Z.Xq : Z.Sr), t && g.Z.enable();
        }
      }
      function eb() {
        let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: a,
          } = (0, _.cj)([B.Z], () => ({
            locked: B.Z.isLocked((0, $.QF)()),
            initialized: B.Z.initialized,
            incompatibleApp: B.Z.incompatibleApp,
            activeRegions: B.Z.getActiveRegions(),
            isPreviewingInGame: B.Z.isPreviewingInGame(),
          })),
          l = (0, _.e7)([H.Z], () => H.Z.windowSize()),
          s = (0, _.e7)([W.Z], () => W.Z.getOverlayKeybind()),
          d = (0, _.e7)([K.Z], () => K.Z.getVoiceChannelId()),
          c = (0, _.e7)([M.Z], () => M.Z.getChannel(d)),
          u = (0, _.e7)([G.Z], () =>
            null != c ? G.Z.getGuild(c.guild_id) : null,
          ),
          p = (0, _.e7)([L.ZP, Y.Z], () => (0, P.Z)(L.ZP, Y.Z)),
          h = (0, S.Ns)(null == p ? void 0 : p.id),
          m = (0, _.e7)(
            [I.Z],
            () => null != I.Z.getLastFeedFetchDate(ec.YN.GAME_PROFILE_FEED),
          ),
          f = (0, _.e7)([U.Z], () => (0, A.Z)(U.Z)),
          y = (0, _.e7)([D.Z], () => null != D.Z.getCurrentUserActiveStream()),
          { analyticsLocations: E } = (0, x.ZP)(C.Z.OVERLAY),
          { showKeybindIndicators: b, dismissKeybindNotification: Z } = (0,
          en.K)(),
          g = (0, _.e7)([j.Z], () => j.Z.fetchedConsents);
        return (
          r.useEffect(() => {
            g && (0, N._)();
          }, [g]),
          (0, o.jsx)(x.Gt, {
            value: E,
            children: (0, o.jsx)(v.RedesignIconContextProvider, {
              children: (0, o.jsx)(eE, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: a,
                windowSize: l,
                keybind: null != s ? (0, J.BB)(s.shortcut, !0) : "???",
                keybindKeyCodes: null != s ? s.shortcut : [],
                connectedToVoice: null != d,
                voiceChannelId: null != c ? c.id : null,
                voiceGuild: u,
                game: p,
                canGoLive: f,
                isStreaming: y,
                showKeybindNotification: b,
                dismissKeybindNotification: Z,
                contentInventoryEntries: h,
                hasFetchedContentInventory: m,
              }),
            }),
          })
        );
      }
    },
    913487: function (e, t, n) {
      var i = n(570140),
        o = n(703656),
        r = n(981631);
      __OVERLAY__ &&
        i.Z.subscribe("OVERLAY_OPEN_MESSAGE", function (e) {
          let { guildId: t, channelId: n, messageId: i } = e;
          (0, o.dL)({ pathname: r.Z5c.CHANNEL(t, n, i) });
        });
    },
    906037: function (e, t, n) {
      n.d(t, {
        CR: function () {
          return a;
        },
        eM: function () {
          return r;
        },
        m3: function () {
          return l;
        },
      });
      var i = n(570140),
        o = n(449224);
      function r(e) {
        return (!e.isPreviewingInGame && !e.locked) || e.pinned;
      }
      function a(e, t, n) {
        (e.locked !== t.locked ||
          e.pinned !== t.pinned ||
          n(e) !== n(t) ||
          r(e) !== r(t)) &&
          l(t, n(t));
      }
      function l(e, t) {
        var n, a;
        let l = r(e),
          s = o.Z.getGame();
        i.Z.dispatch({
          type: "OVERLAY_WIDGET_CHANGED",
          gameName:
            null !== (n = null == s ? void 0 : s.name) && void 0 !== n
              ? n
              : null,
          gameId:
            null !== (a = null == s ? void 0 : s.id) && void 0 !== a ? a : null,
          widgetType: e.widget,
          visible: l && t,
          locked: e.locked,
          pinned: e.pinned,
        });
      }
    },
    107200: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var o = n(442837),
        r = n(352527),
        a = n(183584),
        l = n(487029),
        s = n(592125),
        d = n(944486),
        c = n(554174),
        u = n(710111),
        p = n(408704);
      function h() {
        let [e, t] = (0, o.Wu)([r.Z], () => [r.Z.enabled, r.Z.keepOpen]),
          n = (0, o.e7)([d.Z], () => d.Z.getVoiceChannelId()),
          h = (0, o.e7)([s.Z], () => s.Z.getChannel(n), [n]),
          _ = null == h ? void 0 : h.getGuildId();
        return e && null != h
          ? (0, i.jsx)("div", {
              className: p.widget,
              children: (0, i.jsx)(l.Z, {
                width: u.FW.width,
                height: u.FW.height,
                guildId: _,
                channel: h,
                keepOpen: t,
                onClose: function () {
                  let e = (0, c.Z)();
                  null != e && (0, a.oZ)(e);
                },
                analyticsSource: "overlay",
              }),
            })
          : null;
      }
    },
    352527: function (e, t, n) {
      var i,
        o,
        r,
        a,
        l = n(442837),
        s = n(570140);
      let d = !1,
        c = !1;
      class u extends (a = l.ZP.Store) {
        get keepOpen() {
          return c;
        }
        get enabled() {
          return d;
        }
      }
      (r = "SoundboardOverlayStore"),
        (o = "displayName") in (i = u)
          ? Object.defineProperty(i, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[o] = r),
        (t.Z = new u(s.Z, {
          SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
            if (((d = e.enabled), e.enabled)) {
              var t;
              c = null !== (t = e.keepOpen) && void 0 !== t && t;
            }
          },
        }));
    },
    129724: function (e, t, n) {
      n.d(t, {
        A: function () {
          return a;
        },
      });
      var i = n(913527),
        o = n.n(i),
        r = n(388032);
      function a(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : r.intl.string(r.t["Yl1D8/"]),
          i = o().duration(e, "seconds");
        if (i.days() > 0)
          return r.intl.formatToPlainString(t ? r.t.GBLpQ0 : r.t.k2UNz8, {
            days: i.days(),
          });
        if (i.hours() > 0)
          return r.intl.formatToPlainString(t ? r.t.rhY1Rk : r.t.xCjYxM, {
            hours: i.hours(),
          });
        if (i.minutes() > 0)
          return r.intl.formatToPlainString(t ? r.t["XIGt+f"] : r.t.iXLF9f, {
            minutes: i.minutes(),
          });
        else if (e > 0)
          return r.intl.formatToPlainString(t ? r.t.pyvjRk : r.t.geSp4O, {
            seconds: i.seconds(),
          });
        else return t ? r.intl.string(r.t["Yl1D8/"]) : n;
      }
    },
    939661: function (e, t, n) {
      e.exports = {
        container: "container_ed5743",
        contentWrapper: "contentWrapper_ed5743",
        noThanksButton: "noThanksButton_ed5743",
        stage: "stage_ed5743",
        inviteContent: "inviteContent_ed5743",
        inviteSplash: "inviteSplash_ed5743",
        buttonGroup: "buttonGroup_ed5743",
        experimentUpsellError: "experimentUpsellError_ed5743",
        experimentUpsellIcon: "experimentUpsellIcon_ed5743",
        experimentUpsellText: "experimentUpsellText_ed5743",
        experimentGetNitro: "experimentGetNitro_ed5743",
        errorContent: "errorContent_ed5743",
        errorImage: "errorImage_ed5743",
        errorBody: "errorBody_ed5743",
        iconContainer: "iconContainer_ed5743",
        ctas: "ctas_ed5743",
        iconSparklePlus: "iconSparklePlus_ed5743",
        iconLink: "iconLink_ed5743",
        iconSparkleStar: "iconSparkleStar_ed5743",
        acceptAs: "acceptAs_ed5743",
      };
    },
    521287: function (e, t, n) {
      e.exports = {
        keyboardShortcutsModal: "keyboardShortcutsModal_ad95dc",
        noBackground: "noBackground_ad95dc",
        noShadow: "noShadow_ad95dc",
        backdrop: "backdrop_ad95dc",
        show: "show_ad95dc",
        modalTitle: "modalTitle_ad95dc",
        content: "content_ad95dc",
        modalSubtitle: "modalSubtitle_ad95dc",
        ddrArrows: "ddrArrows_ad95dc",
        arrow: "arrow_ad95dc",
        active: "active_ad95dc",
        left: "left_ad95dc",
        down: "down_ad95dc",
        up: "up_ad95dc",
        right: "right_ad95dc",
        keybindGroupDescription: "keybindGroupDescription_ad95dc",
        keyboardShortcutList: "keyboardShortcutList_ad95dc",
        keybindGroup: "keybindGroup_ad95dc",
        keybindKey: "keybindKey_ad95dc",
        keyboardShortcutSection: "keyboardShortcutSection_ad95dc",
        keyboardShortcutListGroup: "keyboardShortcutListGroup_ad95dc",
      };
    },
    727688: function (e, t, n) {
      e.exports = {
        ragingDemon: "ragingDemon_f4b0b6",
        visible: "visible_f4b0b6",
        symbol: "symbol_f4b0b6",
        symbolBackground: "symbolBackground_f4b0b6",
        container: "container_f4b0b6",
        animate: "animate_f4b0b6",
        circleInner: "circleInner_f4b0b6",
        circleOuter: "circleOuter_f4b0b6",
        linesSecondary: "linesSecondary_f4b0b6",
        linesMain: "linesMain_f4b0b6",
        primaryExplosion: "primaryExplosion_f4b0b6 explosion_f4b0b6",
        secondaryExplosion: "secondaryExplosion_f4b0b6 explosion_f4b0b6",
      };
    },
    974881: function (e, t, n) {
      e.exports = {
        container: "container_e4a90f",
        stackTrace: "stackTrace_e4a90f",
        stackTraceCode: "stackTraceCode_e4a90f",
        code: "code_e4a90f",
        notificationIcon: "notificationIcon_e4a90f",
      };
    },
    746120: function (e, t, n) {
      e.exports = {
        overlay: "overlay_e17343",
        overlayBackground: "overlayBackground_e17343",
        overlayActive: "overlayActive_e17343",
        overlayLocked: "overlayLocked_e17343",
        previewMode: "previewMode_e17343",
        closeContainer: "closeContainer_e17343",
        invalidContainer: "invalidContainer_e17343",
        inactiveContainer: "inactiveContainer_e17343",
        layoutLocked: "layoutLocked_e17343",
        layoutUnlocked: "layoutUnlocked_e17343 layoutLocked_e17343",
        previewingInGameHeader: "previewingInGameHeader_e17343",
      };
    },
    408704: function (e, t, n) {
      e.exports = { widget: "widget_a7182b" };
    },
    449532: function (e, t, n) {
      e.exports = {
        container: "container_f4e139",
        mobileContainer: "mobileContainer_f4e139",
        quickswitcher: "quickswitcher_f4e139",
        mobileQuickswitcher: "mobileQuickswitcher_f4e139",
        input: "input_f4e139",
        autocompleteQuerySymbol: "autocompleteQuerySymbol_f4e139",
        scroller: "scroller_f4e139",
        protip: "protip_f4e139",
        hasContent: "hasContent_f4e139",
        emptyState: "emptyState_f4e139",
        emptyStateNote: "emptyStateNote_f4e139",
        emptyStateCTA: "emptyStateCTA_f4e139",
        miscContainer: "miscContainer_f4e139",
      };
    },
    159381: function (e, t, n) {
      e.exports = {
        tutorial: "tutorial_c36bbe",
        shown: "shown_c36bbe",
        arrowGroup: "arrowGroup_c36bbe",
        right: "right_c36bbe",
        arrowContainer: "arrowContainer_c36bbe",
        horizontal: "horizontal_c36bbe",
        diag1: "diag1_c36bbe",
        diag2: "diag2_c36bbe",
        arrowIcon: "arrowIcon_c36bbe",
        tutorialMessages: "tutorialMessages_c36bbe",
        searchMessage: "searchMessage_c36bbe message_c36bbe",
        selectMessage: "selectMessage_c36bbe message_c36bbe",
        hasQuery: "hasQuery_c36bbe",
      };
    },
  },
]);
//# sourceMappingURL=e92da1a66a9ade985265.js.map
