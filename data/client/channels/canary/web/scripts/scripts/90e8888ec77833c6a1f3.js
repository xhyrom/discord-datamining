"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12127"],
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
        c = n(146282),
        s = n(26033),
        d = n(897674),
        u = n(709054),
        p = n(206583);
      let h = new Set([a.s.PLAYED_GAME, a.s.LAUNCHED_ACTIVITY]),
        _ = (e) => h.has(e.content_type);
      function v(e) {
        let { entries: t } = (function () {
          let e = (0, d.Z)(p.YN.GAME_PROFILE_FEED),
            t = (0, d.Z)(p.YN.GLOBAL_FEED),
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
            requestId: (0, l.e7)([c.Z], () =>
              c.Z.getFeedRequestId(p.YN.GAME_PROFILE_FEED),
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
                    ((0, s.dX)(t) || (0, s.Mq)(t)) &&
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
              authorizeProps: { authorizations: c, permissions: s, ...d },
            } = e,
            u = "OAuth2Authorize_"
              .concat(t, "_")
              .concat(d.guildId, "_")
              .concat(d.channelId);
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
            h = o.vB(null != s ? s : 0);
          } catch (e) {}
          (0, r.openModalLazy)(
            async () => {
              let { OAuth2AuthorizeModal: e } = await Promise.resolve().then(
                n.bind(n, 69580),
              );
              return (t) =>
                (0, i.jsx)(e, {
                  ...t,
                  ...d,
                  authorizations: new Map(c),
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
    86071: function (e, t, n) {
      let i = (0, n(818083).B)({
        kind: "user",
        id: "2024-10_hotwheels_overlay_invites",
        label: "Overlay Invites Notification",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      t.Z = i;
    },
    290161: function (e, t, n) {
      n.r(t);
      var i = n(200651),
        o = n(192379),
        r = n(442837),
        a = n(481060),
        l = n(490173),
        c = n(735246),
        s = n(40851),
        d = n(503737),
        u = n(823453),
        p = n(436774),
        h = n(686546),
        _ = n(314910),
        v = n(367207),
        f = n(887604),
        m = n(649561),
        b = n(631553),
        y = n(981631);
      n(635324), n(167666), n(308765), n(913487), r.ZP.initialize();
      t.default = function () {
        return (
          o.useEffect(
            () => (
              v.Z.initialize(),
              d.Z.initialize(),
              f.Z.init(),
              () => {
                v.Z.terminate(), d.Z.terminate();
              }
            ),
            [],
          ),
          (0, i.jsxs)(o.Fragment, {
            children: [
              (0, i.jsx)(u.Z, {}),
              (0, i.jsx)(c.T, {
                children: (0, i.jsxs)(m.Z, {
                  children: [
                    (0, i.jsx)(h.Co, {}),
                    (0, i.jsx)(p.ZP, {}),
                    (0, i.jsx)(s.Wu, {
                      appContext: y.IlC.OVERLAY,
                      renderWindow: window,
                      children: (0, i.jsxs)(_.yP, {
                        children: [
                          (0, i.jsx)(b.Z, {}),
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
        c = n(188471),
        s = n(318885),
        d = n(592125),
        u = n(984933),
        p = n(271383),
        h = n(430824),
        _ = n(496675),
        v = n(944486),
        f = n(914010),
        m = n(594174),
        b = n(237997),
        y = n(145597),
        E = n(981631);
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
              ((0, s.Q)(E.rMx.GUILD_VIEWED, {
                ...(i ? { is_pending: i, preview_enabled: o } : {}),
                postable_channels: r,
              }),
              (0, c.a)(E.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: t })),
            null != n && n !== e.selectedChannel)
          ) {
            let e = (0, l.K)(d.Z.getChannel(n), !0);
            (0, s.Q)(E.rMx.CHANNEL_OPENED, { ...e, ...(0, a.$H)(n) }),
              (0, c.a)(E.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: n });
          }
        }
        render() {
          return null;
        }
      }
      t.Z = r.ZP.connectStores(
        [f.Z, v.Z, h.Z, m.default, b.Z, u.ZP, _.Z, p.ZP],
        () => {
          var e, t, n;
          let i = f.Z.getGuildId(),
            r = v.Z.getChannelId(i),
            a = h.Z.getGuild(i),
            l = m.default.getCurrentUser(),
            c =
              null !==
                (t = u.ZP.getChannels(null == a ? void 0 : a.id)[u.sH]) &&
              void 0 !== t
                ? t
                : [],
            s =
              c.length > 0
                ? c.filter((e) => {
                    let { channel: t } = e;
                    return _.Z.can(
                      o.$e(E.Plq.SEND_MESSAGES, E.Plq.VIEW_CHANNEL),
                      t,
                    );
                  }).length
                : 0,
            d =
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
            locked: b.Z.isLocked((0, y.QF)()),
            hasPreviewEnabled:
              null == a ? void 0 : a.features.has(E.oNc.PREVIEW_ENABLED),
            isMemberPending: d,
            postableChannelCount: s,
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
        c = n.n(l),
        s = n(818405),
        d = n(587158),
        u = n(286379),
        p = n(481060),
        h = n(13245),
        _ = n(490029),
        v = n(797614),
        f = n(593481),
        m = n(703656),
        b = n(254761),
        y = n(70956),
        E = n(960048),
        Z = n(145597),
        g = n(692546),
        k = n(518084),
        C = n(987650),
        x = n(981631),
        w = n(388032),
        I = n(190079);
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
      let S = 10 * y.Z.Millis.SECOND;
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
                      className: a()(o, I.container),
                      onClick: (e) => e.stopPropagation(),
                      children: [
                        (0, i.jsx)(f.ZP, {
                          expand: !0,
                          icon: (0, i.jsx)(b.Z, {
                            width: 40,
                            height: 40,
                            className: I.notificationIcon,
                          }),
                          title: w.intl.string(w.t.U38qZm),
                          confirmText: w.intl.string(w.t.TzAl1d),
                          onNotificationClick: this.handleNotificationClick,
                          onConfirmClick: this.handleReload,
                          onDismissClick: this.hideNotification,
                        }),
                        n && null != e
                          ? (0, i.jsxs)(k.ZP, {
                              className: I.stackTrace,
                              children: [
                                (0, i.jsx)(k.ZP.Bar, {
                                  children: "Error Details",
                                }),
                                (0, i.jsx)(k.ZP.Content, {
                                  className: I.stackTraceCode,
                                  children: (0, i.jsx)("code", {
                                    className: I.code,
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
      let O = c().throttle(
        () => {
          v.Z.increment(
            {
              name: u.V.APP_CRASHED,
              tags: [
                "reason:".concat(s.v.UNHANDLED_JS_ERROR),
                "level:".concat(d.c.FATAL),
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
          let n = (0, m.s1)().location;
          this.setState({ error: e, info: t });
          let i = (0, Z.QF)(),
            o = (0, Z.Ht)();
          (0, _.lW)({
            type: x.BmY.DISPATCH,
            pid: (0, Z.QF)(),
            token: o,
            payloads: [
              { type: "OVERLAY_CRASHED", pid: i },
              { type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: i },
            ],
          }),
            setImmediate(() => window.addEventListener("click", A));
          let r = E.Z.captureCrash(e, { extra: t });
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
        c = n(921738),
        s = n.n(c),
        d = n(954955),
        u = n.n(d),
        p = n(498607),
        h = n.n(p),
        _ = n(442837),
        v = n(481060),
        f = n(668781),
        m = n(239091),
        b = n(13245),
        y = n(425493),
        E = n(615287),
        Z = n(951483),
        g = n(714338),
        k = n(185666),
        C = n(100527),
        x = n(906732),
        w = n(146282),
        I = n(600164);
      n(70097);
      var L = n(594190),
        S = n(567409),
        A = n(74299),
        P = n(989941),
        O = n(377400),
        T = n(329557),
        N = n(199902),
        D = n(314897),
        R = n(592125),
        M = n(430824),
        j = n(131951),
        G = n(944486),
        U = n(618541),
        K = n(449224),
        V = n(574254),
        Y = n(556296),
        F = n(808506),
        z = n(237997),
        B = n(451478),
        W = n(70956),
        H = n(358085),
        Q = n(998502),
        q = n(13140),
        X = n(145597),
        J = n(658785),
        $ = n(681603),
        ee = n(358446),
        et = n(348733),
        en = n(312178),
        ei = n(708383),
        eo = n(923532),
        er = n(107200),
        ea = n(987650),
        el = n(981631),
        ec = n(206583),
        es = n(388032),
        ed = n(550841);
      function eu(e, t, n) {
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
      let ep = null;
      function eh(e) {
        e.preventDefault();
      }
      function e_(e) {
        (0, m.jW)(e, async () => {
          let { default: e } = await n.e("92780").then(n.bind(n, 930381));
          return (t) => (0, o.jsx)(e, { ...t });
        });
      }
      H.isPlatformEmbedded;
      let ev = (e) => {
          let { keybind: t, onClick: n, isPreviewingInGame: i, locked: r } = e,
            a = r ? v.Clickable : "div";
          return (0, o.jsx)(a, {
            className: l()(ed.overlayBackground, {
              [ed.overlayActive]: !r,
              [ed.overlayLocked]: r,
              [ed.previewMode]: !r && i,
            }),
            onMouseDown: (e) => {
              let { currentTarget: t, target: i, button: o } = e;
              o === el.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: e_,
            children: r
              ? null
              : (0, o.jsx)("div", {
                  className: ed.closeContainer,
                  children: (0, o.jsx)(y.Z, {
                    variant: y.Z.Variants.BOLD,
                    keybind: t,
                    closeAction: n,
                  }),
                }),
          });
        },
        ef = (e) => {
          let {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: o,
            ctrlKey: r,
          } = e;
          return { keyCode: t, shiftKey: n, metaKey: i, altKey: o, ctrlKey: r };
        };
      class em extends r.Component {
        handleLock() {
          !(0, v.hasAnyModalOpen)() &&
            !V.Z.isOpen() &&
            b.Z.setInputLocked(!0, (0, X.QF)());
        }
        handleDeactivate() {
          b.Z.deactivateAllRegions();
        }
        componentDidMount() {
          b.Z.startSession(),
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
                (window.addEventListener("contextmenu", eh, !1), null != ep)
              ) {
                let e = Date.now() - ep;
                b.Z.track(el.rMx.OVERLAY_LOCKED, { unlocked_duration: e }),
                  (ep = null);
              }
              g.Z.disable(),
                (this.activeKeyEventShapes = []),
                z.Z.isPinned(el.Odu.TEXT) &&
                  (g.Z.setLayout(Z.Xq), g.Z.enable());
            } else
              e.locked &&
                !this.props.locked &&
                (window.removeEventListener("contextmenu", eh, !1),
                null == ep &&
                  ((ep = Date.now()), b.Z.track(el.rMx.OVERLAY_UNLOCKED)),
                g.Z.disable(),
                (this.activeKeyEventShapes = []),
                g.Z.setLayout(Z.Sr),
                g.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
              (this.lockEventShape = (0, q.d2)(this.props.keybindKeyCodes)),
              !e.hasFetchedContentInventory &&
                this.props.hasFetchedContentInventory &&
                b.Z.notifyContentInventoryReady(
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
            dismissKeybindNotification: c,
          } = this.props;
          b.Z.track(el.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: z.Z.isPinned(el.Odu.TEXT),
            overlay_render_method: E.gl[E.gl.Hook],
          }),
            J.Z.trackExposure({ location: "Overlay" });
          let s = n && !i && null != a,
            d = e && null != o && null != r,
            u = { type: ea.nc.WELCOME };
          if (
            (l
              ? (u = { type: ea.nc.KEYBIND_INDICATORS, markAsDismissed: c })
              : s && d
                ? (u = {
                    type: ea.nc.GO_LIVE_VOICE,
                    game: a,
                    voiceChannelId: r,
                    voiceGuild: o,
                  })
                : s && (u = { type: ea.nc.GO_LIVE_NON_VOICE, game: a }),
            b.Z.overlayMounted(u),
            window.addEventListener("resize", this.handleWindowResize),
            t && window.addEventListener("contextmenu", eh, !1),
            H.isPlatformEmbedded)
          ) {
            let e = Q.ZP.requireModule("discord_overlay2");
            void 0 !== e.setPerfInfoCallback &&
              (e.setPerfInfoCallback((e) => {
                b.Z.track(el.rMx.OVERLAY_PERF_INFO, e);
              }),
              e.broadcastCommand({
                message: "set_perf_report_interval",
                interval: 15 * W.Z.Millis.MINUTE,
              })),
              Q.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                z.Z.getDisableExternalLinkAlert() || t === U.Z.getLastURL()
                  ? Q.ZP.send("OPEN_EXTERNAL_URL", t)
                  : f.Z.show({
                      title: es.intl.string(es.t.WLx4Fx),
                      body: es.intl.string(es.t.H8O1TE),
                      secondaryConfirmText: es.intl.string(es.t.IwqGhY),
                      confirmText: es.intl.string(es.t["3PatS0"]),
                      cancelText: es.intl.string(es.t["ETE/oK"]),
                      onConfirmSecondary: () => {
                        b.Z.disableExternalLinkAlert(),
                          Q.ZP.send("OPEN_EXTERNAL_URL", t);
                      },
                      onConfirm: () => Q.ZP.send("OPEN_EXTERNAL_URL", t),
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
              window.removeEventListener("contextmenu", eh, !1),
            O.Z.terminate(),
            k.Z.terminate(),
            T.Z.terminate();
        }
        renderInvalidSizeMessage() {
          return (0, o.jsx)(I.Z, {
            justify: I.Z.Justify.CENTER,
            align: I.Z.Align.CENTER,
            className: ed.invalidContainer,
            children: (0, o.jsx)("div", {
              className: ed.inactiveContainer,
              children: es.intl.format(es.t.ketnW1, X.FW),
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
              activeRegions: c,
              windowSize: s,
              voiceGuild: d,
              voiceChannelId: u,
            } = this.props,
            { width: p, height: h } = s;
          if (0 === p || 0 === h || n || !r) return null;
          let _ = e || a,
            v = D.default.getId();
          return (0, o.jsxs)("div", {
            className: ed.overlay,
            children: [
              (0, o.jsx)(ei.Z, {}),
              a &&
                (0, o.jsx)("header", {
                  className: ed.previewingInGameHeader,
                  children: es.intl.string(es.t.iOq96u),
                }),
              i,
              (!e || c.has(el.O0n.TEXT_WIDGET)) &&
                (0, o.jsx)(ev, {
                  locked: e,
                  keybind: t,
                  onClick: e ? this.handleDeactivate : this.handleLock,
                  isPreviewingInGame: a,
                }),
              (0, X.Te)(s)
                ? (0, o.jsx)(en.Z, {
                    className: l()({
                      [ed.layoutLocked]: e,
                      [ed.layoutUnlocked]: !e,
                    }),
                  })
                : e
                  ? null
                  : this.renderInvalidSizeMessage(),
              (0, o.jsx)(er.Z, {}),
              null != d &&
                null != u &&
                (0, o.jsx)(eo.Z, {
                  streamerId: v,
                  guildId: d.id,
                  channelId: u,
                }),
              (0, o.jsx)(et.Z, { locked: _, keybind: t }),
              (0, o.jsx)($.Z, {}),
            ],
          });
        }
        constructor(e) {
          super(e),
            eu(this, "handleWindowResize", () => {
              F.Z.isFocusedPidOutOfProcess()
                ? this.forceUpdate()
                : u()(() => {
                    this.forceUpdate();
                  }, 500);
            }),
            eu(this, "activeKeyEventShapes", []),
            eu(this, "lockEventShape", (0, q.d2)(this.props.keybindKeyCodes)),
            eu(this, "getActiveKeyEventIndex", (e) =>
              this.activeKeyEventShapes.findIndex((t) => h()(t, e)),
            ),
            eu(this, "onKeyDownGlobal", (e) => {
              let t = ef(e),
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
              t.keyCode === s().codes.esc &&
                o &&
                r.has(el.O0n.TEXT_WIDGET) &&
                b.Z.deactivateAllRegions();
            }),
            eu(this, "onKeyUpGlobal", (e) => {
              let t = ef(e),
                n = this.getActiveKeyEventIndex(t);
              n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
          let t = e.locked && z.Z.isPinned(el.Odu.TEXT);
          g.Z.setLayout(t ? Z.Xq : Z.Sr), t && g.Z.enable();
        }
      }
      function eb() {
        let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: r,
          } = (0, _.cj)([z.Z], () => ({
            locked: z.Z.isLocked((0, X.QF)()),
            initialized: z.Z.initialized,
            incompatibleApp: z.Z.incompatibleApp,
            activeRegions: z.Z.getActiveRegions(),
            isPreviewingInGame: z.Z.isPreviewingInGame(),
          })),
          a = (0, _.e7)([B.Z], () => B.Z.windowSize()),
          l = (0, _.e7)([Y.Z], () => Y.Z.getOverlayKeybind()),
          c = (0, _.e7)([G.Z], () => G.Z.getVoiceChannelId()),
          s = (0, _.e7)([R.Z], () => R.Z.getChannel(c)),
          d = (0, _.e7)([M.Z], () =>
            null != s ? M.Z.getGuild(s.guild_id) : null,
          ),
          u = (0, _.e7)([L.ZP, K.Z], () => (0, P.Z)(L.ZP, K.Z)),
          p = (0, S.Ns)(null == u ? void 0 : u.id),
          h = (0, _.e7)(
            [w.Z],
            () => null != w.Z.getLastFeedFetchDate(ec.YN.GAME_PROFILE_FEED),
          ),
          f = (0, _.e7)([j.Z], () => (0, A.Z)(j.Z)),
          m = (0, _.e7)([N.Z], () => null != N.Z.getCurrentUserActiveStream()),
          { analyticsLocations: b } = (0, x.ZP)(C.Z.OVERLAY),
          { showKeybindIndicators: y, dismissKeybindNotification: E } = (0,
          ee.K)();
        return (0, o.jsx)(x.Gt, {
          value: b,
          children: (0, o.jsx)(v.RedesignIconContextProvider, {
            children: (0, o.jsx)(em, {
              locked: e,
              initialized: t,
              incompatibleApp: n,
              activeRegions: i,
              isPreviewingInGame: r,
              windowSize: a,
              keybind: null != l ? (0, q.BB)(l.shortcut, !0) : "???",
              keybindKeyCodes: null != l ? l.shortcut : [],
              connectedToVoice: null != c,
              voiceChannelId: null != s ? s.id : null,
              voiceGuild: d,
              game: u,
              canGoLive: f,
              isStreaming: m,
              showKeybindNotification: y,
              dismissKeybindNotification: E,
              contentInventoryEntries: p,
              hasFetchedContentInventory: h,
            }),
          }),
        });
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
          c = o.Z.getGame();
        i.Z.dispatch({
          type: "OVERLAY_WIDGET_CHANGED",
          gameName:
            null !== (n = null == c ? void 0 : c.name) && void 0 !== n
              ? n
              : null,
          gameId:
            null !== (a = null == c ? void 0 : c.id) && void 0 !== a ? a : null,
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
        c = n(592125),
        s = n(944486),
        d = n(554174),
        u = n(710111),
        p = n(136098);
      function h() {
        let [e, t] = (0, o.Wu)([r.Z], () => [r.Z.enabled, r.Z.keepOpen]),
          n = (0, o.e7)([s.Z], () => s.Z.getVoiceChannelId()),
          h = (0, o.e7)([c.Z], () => c.Z.getChannel(n), [n]),
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
                  let e = (0, d.Z)();
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
        c = n(570140);
      let s = !1,
        d = !1;
      class u extends (a = l.ZP.Store) {
        get keepOpen() {
          return d;
        }
        get enabled() {
          return s;
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
        (t.Z = new u(c.Z, {
          SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
            if (((s = e.enabled), e.enabled)) {
              var t;
              d = null !== (t = e.keepOpen) && void 0 !== t && t;
            }
          },
        }));
    },
    254761: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(331595);
      function r(e) {
        let {
          width: t = 16,
          height: n = 16,
          color: r = "currentColor",
          foreground: a,
          ...l
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, o.Z)(l),
          width: t,
          height: n,
          viewBox: "0 0 430 430",
          children: (0, i.jsx)("path", {
            className: a,
            color: r,
            d: "M187.9,308.1c17.9-13.5,43-13.7,61.1-0.3c1.9,1.3,2.4,4,1.1,5.8s-3.7,2.3-5.6,0.9l-0.3-0.3 c-15.1-11.3-36.3-11.2-51.3,0.1c-0.8,0.5-1.6,0.8-2.4,0.8c-1.2,0-2.4-0.5-3.2-1.6C185.8,312,186.2,309.3,187.9,308.1 M124.4,236 c11.7,0,21.3,9.4,21.3,21.1s-9.4,21.1-21.1,21.1c-11.7,0-21.1-9.4-21.1-21.1C103.1,245.6,112.7,236,124.4,236 M315,236 c11.7,0,21.3,9.4,21.3,21.3c0,11.7-9.4,21.1-21.1,21.1s-21.1-9.4-21.1-21.1C294,245.6,303.5,236,315,236 M347.8,307.2 c2-0.3,4-0.7,6-1.2c2.3-0.5,4.4,0.7,5,2.9c0.7,2.1-0.7,4.4-2.8,5c-2.3,0.7-4.6,1.1-7,1.3c-0.1,0-0.3,0-0.5,0c-2,0-3.7-1.5-4-3.6 C344.1,309.7,345.7,307.6,347.8,307.2 M128.1,87.2l-0.3,0.1c-14.3,5.8-23.6,19.5-23.6,35.1c0,8.5,2.9,16.6,8.5,23.5 c0,0,0,0.1,0.1,0.1l0,0c0.1,0.1,11.3,15.3,31.4,16.9c2.3,0.1,3.9,2.1,3.7,4.4c-0.1,2.1-2,3.7-4,3.7c-0.1,0-0.3,0-0.3,0 c-18.9-1.5-30.8-12.8-35.3-17.8l-4.6,1.7c-0.1,0.1-0.3,0.1-0.5,0.3c-25.6,9.6-42.2,32.1-42.2,57.5c0,10.6,3.1,21.1,8.6,30.4 c0.7,1.1,0.8,2.3,0.4,3.3c-0.3,1.2-1.2,2-2.3,2.5C36.2,263.1,16,293.6,16,327c0,47.6,39.9,86.2,88.9,86.2c32.4,0,68-6.2,106.1-18.5 c3.1-1.3,39.5-16.7,91.1-14.5c2.3,0.1,4,2,3.9,4.3c-0.1,2.3-1.9,4.1-4.3,3.9c-35.6-1.6-64,5.7-78.1,10.4 c26.2,9.6,63.8,14.5,111.7,14.5c43.3,0,78.6-35.2,78.6-78.6c0-20.3-8-39.7-22.1-54.3c-3.2,7.6-10.2,20.2-23.2,28.2 c-0.7,0.4-1.3,0.7-2.1,0.7c-1.3,0-2.7-0.7-3.5-1.9c-1.2-1.9-0.5-4.4,1.3-5.6c16.2-10,21.8-28.7,22.1-29.6 c4.1-17.7,2.4-35.6-4.9-53.3c-4.1-10-10.1-19-17.8-26.8c-1.5-1.6-13.5-11.3-13.5-11.3c-3.6,6.9-12.8,19-33.6,23.6 c-0.3,0-0.5,0.1-0.8,0.1c-1.9,0-3.6-1.3-4-3.2c-0.5-2.3,0.9-4.4,3.1-4.8c23.9-5.2,29.2-21.7,29.6-22.7c3.5-13,2.3-26.4-3.5-39.6 c-8.2-18.9-25.9-32.7-47.4-37.2c-3.5,5.2-12.8,16.1-31.6,20.3c-0.3,0.1-0.7,0.1-0.9,0.1c-1.9,0-3.6-1.3-4-3.2 c-0.5-2.3,0.8-4.4,3.1-4.9c20.2-4.6,27.2-17.7,27.8-18.7c2.8-6.4,2.8-13.7,0.3-21.4c-4.6-14.1-15.9-16.9-31.6-20.9 c-16.9-4.1-37.6-9.3-55.7-31.5c-15.7,10.9-30.8,33.3-29,50.7c1.1,9.8,7.4,16.9,19,20.9c2.1,0.8,3.2,3.1,2.5,5.2 c-0.8,2.1-3.1,3.2-5.2,2.5c-11.8-4.1-18.1-10.5-21.4-17C167,79.1,141.9,80.6,128.1,87.2z",
          }),
        });
      }
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
    255065: function (e, t, n) {
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
    930903: function (e, t, n) {
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
    697814: function (e, t, n) {
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
    190079: function (e, t, n) {
      e.exports = {
        container: "container_e4a90f",
        stackTrace: "stackTrace_e4a90f",
        stackTraceCode: "stackTraceCode_e4a90f",
        code: "code_e4a90f",
        notificationIcon: "notificationIcon_e4a90f",
      };
    },
    550841: function (e, t, n) {
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
    136098: function (e, t, n) {
      e.exports = { widget: "widget_a7182b" };
    },
    878383: function (e, t, n) {
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
    436340: function (e, t, n) {
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
//# sourceMappingURL=90e8888ec77833c6a1f3.js.map
