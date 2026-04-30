"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10360"],
  {
    888906(e, t, n) {
      n.d(t, { A: () => l });
      var i = n(228366);
      let l = {
        search(e, t) {
          i.h.dispatch({
            type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY",
            query: e,
            channelId: t,
          });
        },
        clear(e) {
          i.h.dispatch({
            type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY",
            query: "",
            channelId: e,
          });
        },
        select(e) {
          i.h.dispatch({
            type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT",
            row: e,
          });
        },
        addUser(e) {
          i.h.dispatch({
            type: "PRIVATE_CHANNEL_RECIPIENTS_ADD_USER",
            userId: e,
          });
        },
        removeUser(e) {
          i.h.dispatch({
            type: "PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER",
            userId: e,
          });
        },
        open(e) {
          i.h.dispatch({
            type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN",
            channelId: e,
          });
        },
        close() {
          i.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE" });
        },
      };
    },
    439447(e, t, n) {
      n.d(t, { A: () => f });
      var i,
        l,
        s = n(627968),
        r = n(64700),
        a = n(499979),
        u = n(451988),
        o = n(985018),
        d =
          (((i = d || {}).ACTIVITY_FEED = "ACTIVITY_FEED"),
          (i.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW"),
          (i.USER_ACTIVITY = "USER_ACTIVITY"),
          (i.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED"),
          (i.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED"),
          (i.VOICE_CHANNEL_HISTORY = "VOICE_CHANNEL_HISTORY"),
          i),
        c =
          (((l = c || {}).START = "START"),
          (l.END = "END"),
          (l.TIME = "TIME"),
          l);
      let h = (e) => (t, n) =>
          null == n ? "" : o.intl.format(e(), { time: t, ...n }),
        A = {
          ACTIVITY_FEED: {
            START: {
              [a.pJ.SECONDS]: () => o.intl.string(o.t["ahzZr+"]),
              [a.pJ.MINUTES]: (e) =>
                o.intl.formatToPlainString(o.t["03mIHW"], { time: e }),
              [a.pJ.HOURS]: (e) =>
                o.intl.formatToPlainString(o.t.eNoooU, { time: e }),
              [a.pJ.DAYS]: (e) =>
                o.intl.formatToPlainString(o.t["2rUo/p"], { time: e }),
            },
            END: {
              [a.pJ.SECONDS]: () => o.intl.string(o.t.EluAd9),
              [a.pJ.MINUTES]: (e) =>
                o.intl.formatToPlainString(o.t.BZxG8Z, { time: e }),
              [a.pJ.HOURS]: (e) =>
                o.intl.formatToPlainString(o.t.cRMUpw, { time: e }),
              [a.pJ.DAYS]: (e) =>
                o.intl.formatToPlainString(o.t.yP1T84, { time: e }),
              [a.pJ.WEEKS]: (e) =>
                o.intl.formatToPlainString(o.t.AWkdqe, { time: e }),
              [a.pJ.MONTHS]: (e) =>
                o.intl.formatToPlainString(o.t.upamA7, { time: e }),
              [a.pJ.YEARS]: (e) =>
                o.intl.formatToPlainString(o.t.vfMC2h, { time: e }),
            },
          },
          ACTIVITY_FEED_NEW: {
            START: {
              [a.pJ.SECONDS]: h(() => o.t.Bf3PRU),
              [a.pJ.MINUTES]: h(() => o.t["A9P+dT"]),
              [a.pJ.HOURS]: h(() => o.t.KwVzfh),
              [a.pJ.DAYS]: h(() => o.t.hbUpBN),
            },
            END: {
              [a.pJ.SECONDS]: (e) =>
                o.intl.formatToPlainString(o.t.C3MTOD, { seconds: e }),
              [a.pJ.MINUTES]: (e) =>
                o.intl.formatToPlainString(o.t["GqQ/Y9"], { minutes: e }),
              [a.pJ.HOURS]: (e) =>
                o.intl.formatToPlainString(o.t.c5zfWZ, { hours: e }),
              [a.pJ.DAYS]: (e) =>
                o.intl.formatToPlainString(o.t.amjnaI, { days: e }),
            },
          },
          USER_ACTIVITY: {
            START: {
              [a.pJ.SECONDS]: function (e, t) {
                return (
                  arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  o.intl.string(o.t["ahzZr+"])
                );
              },
              [a.pJ.MINUTES]: function (e, t) {
                let n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                return n
                  ? o.intl.formatToPlainString(o.t["03mIHW"], { time: e })
                  : o.intl.formatToPlainString(o.t["vQml+P"], { time: e });
              },
              [a.pJ.HOURS]: function (e, t) {
                let n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                return n
                  ? o.intl.formatToPlainString(o.t.eNoooU, { time: e })
                  : o.intl.formatToPlainString(o.t["4Wq+6x"], { time: e });
              },
              [a.pJ.DAYS]: function (e, t) {
                let n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                return n
                  ? o.intl.formatToPlainString(o.t["2rUo/p"], { time: e })
                  : o.intl.formatToPlainString(o.t["jN3/fR"], { time: e });
              },
            },
          },
          GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
              [a.pJ.NONE]: () => o.intl.string(o.t.LqDiCt),
              [a.pJ.SECONDS]: (e) =>
                o.intl.formatToPlainString(o.t.xDIDBL, { time: e }),
              [a.pJ.MINUTES]: (e) =>
                o.intl.formatToPlainString(o.t.KGqJce, { time: e }),
              [a.pJ.HOURS]: (e) =>
                o.intl.formatToPlainString(o.t.OLchUE, { time: e }),
            },
          },
          GAME_LIBRARY_LAST_PLAYED: {
            END: {
              [a.pJ.NONE]: () => o.intl.string(o.t.EoWLru),
              [a.pJ.SECONDS]: () => o.intl.string(o.t.QTHa8b),
              [a.pJ.MINUTES]: (e) =>
                o.intl.formatToPlainString(o.t.SVEfcd, { time: e }),
              [a.pJ.HOURS]: (e) =>
                o.intl.formatToPlainString(o.t["0Gbusd"], { time: e }),
              [a.pJ.DAYS]: (e) =>
                o.intl.formatToPlainString(o.t.hnPZZ7, { time: e }),
              [a.pJ.WEEKS]: (e) =>
                o.intl.formatToPlainString(o.t.L3fTpL, { time: e }),
              [a.pJ.MONTHS]: (e) =>
                o.intl.formatToPlainString(o.t.xAFWQV, { time: e }),
              [a.pJ.YEARS]: (e) =>
                o.intl.formatToPlainString(o.t["9Yr3NW"], { time: e }),
            },
          },
          VOICE_CHANNEL_HISTORY: {
            END: {
              [a.pJ.SECONDS]: () => o.intl.string(o.t["1QsMmY"]),
              [a.pJ.MINUTES]: (e) =>
                o.intl.formatToPlainString(o.t.LRNgHp, { count: e }),
              [a.pJ.HOURS]: (e) =>
                o.intl.formatToPlainString(o.t.raJpz3, { count: e }),
              [a.pJ.DAYS]: (e) =>
                o.intl.formatToPlainString(o.t.KkvKhi, { count: e }),
            },
          },
        };
      function f(e) {
        return class extends r.PureComponent {
          static Locations = d;
          static Types = c;
          timer = new u.IX();
          state = { time: this.getDiff() };
          componentDidMount() {
            this.timer.start(1e4, this.update);
          }
          componentDidUpdate(e) {
            let { start: t, end: n, time: i } = this.props;
            (e.start !== t || e.end !== n || e.time !== i) && this.update();
          }
          componentWillUnmount() {
            this.timer.stop();
          }
          getDiff() {
            let { start: e, end: t, time: n } = this.props;
            if (null != n) return n / 1e3 / 60;
            let i = Date.now(),
              l = 0;
            return (
              null != e ? (l = i - e) : null != t && (l = i - t),
              Math.abs(l) / 1e3 / 60
            );
          }
          update = () => {
            this.setState({ time: this.getDiff() });
          };
          getTimeUnit(e, t, n) {
            let i = (0, a.Ul)(e, (e) =>
              (function (e, t, n) {
                let i = A[n];
                if (null != i) {
                  let n = i[t];
                  if (null != n) return null != n[e];
                }
                return !1;
              })(e, n, t),
            );
            if (null == i)
              throw Error(
                `Could not get the time unit in PlayTime with time: ${e} for type: ${n} in location: ${t}`,
              );
            return i;
          }
          getType() {
            let { start: e, end: t, time: n } = this.props;
            return null != e
              ? "START"
              : null != t
                ? "END"
                : null != n
                  ? "TIME"
                  : null;
          }
          render() {
            let {
                location: t,
                messageProps: n,
                isApplicationStreaming: i,
                ...l
              } = this.props,
              { time: r } = this.state,
              u = this.getType();
            if (null == u) return null;
            let o = this.getTimeUnit(r, t, u),
              d = A[t][u];
            if (null == d) return null;
            let c = d[o],
              h = Math.floor((0, a.eZ)(r, o));
            return (0, s.jsx)(e, { ...l, children: c?.(h, n, i) });
          }
        };
      }
    },
    492684(e, t, n) {
      n.d(t, { A: () => u });
      var i = n(627968),
        l = n(64700),
        s = n(451988),
        r = n(985018);
      function a(e) {
        return `${e}`.length < 13 ? 1e3 * e : e;
      }
      function u(e) {
        return class extends l.PureComponent {
          _interval;
          constructor(e) {
            super(e),
              (this._interval = new s.IX()),
              (this.state = { ...this.getUpdatedTime() });
          }
          componentDidMount() {
            this._interval.start(1e3, () =>
              this.setState(this.getUpdatedTime()),
            );
          }
          componentWillUnmount() {
            this._interval.stop();
          }
          componentDidUpdate(e) {
            (e.timestamps.end !== this.props.timestamps.end ||
              e.timestamps.start !== this.props.timestamps.start) &&
              this.setState(this.getUpdatedTime());
          }
          getUpdatedTime() {
            let { timestamps: e } = this.props,
              t = Date.now() / 1e3;
            return null != e.end
              ? this.getDiff(t, a(e.end) / 1e3)
              : null != e.start
                ? this.getDiff(a(e.start) / 1e3, t)
                : { hours: 0, minutes: 0, seconds: 0 };
          }
          renderTime(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return t && e <= 0 ? -1 : e < 10 ? `0${e}` : e;
          }
          getDiff(e, t) {
            let n = Math.max(t - e, 0),
              i = Math.floor(n) % 60,
              l = Math.floor(n / 60) % 60;
            return { hours: Math.floor(n / 3600) % 24, minutes: l, seconds: i };
          }
          render() {
            let { timestamps: t, ...n } = this.props,
              l = this.renderTime(this.state.hours, !0),
              s = this.renderTime(this.state.minutes),
              a = this.renderTime(this.state.seconds),
              u = -1 === l ? `${s}:${a}` : `${l}:${s}:${a}`;
            return null != t.end
              ? (0, i.jsx)(e, {
                  ...n,
                  message: r.intl.formatToPlainString(r.t["I/J7vI"], {
                    duration: u,
                  }),
                })
              : null != t.start
                ? (0, i.jsx)(e, {
                    ...n,
                    message: r.intl.formatToPlainString(r.t.M9Fexd, {
                      duration: u,
                    }),
                  })
                : null;
          }
        };
      }
    },
    523875(e, t, n) {
      n.d(t, { L: () => a });
      var i = n(627968),
        l = n(64700),
        s = n(744682);
      let r = {
          mute: { name: "mute", start: 0, duration: 70 },
          unmute: { name: "unmute", start: 100, duration: 70 },
          hover_unmuted: { name: "hover_unmuted", start: 180, duration: 40 },
          hover_muted: { name: "hover_muted", start: 240, duration: 40 },
        },
        a = (e) => {
          let t = l.useRef(null),
            a = l.useRef(e);
          a.current = e;
          let u = l.useMemo(
              () => () => {
                null != t.current && t.current.play(e);
              },
              [e],
            ),
            o = l.useCallback(() => {
              if (null == t.current) return;
              let n = "mute" === e ? "hover_unmuted" : "hover_muted";
              t.current.play(n);
            }, [e]),
            d = l.useCallback(() => {
              if (null == t.current) return;
              let n = "mute" === e ? "hover_unmuted" : "hover_muted";
              t.current.stopIfPlaying(n);
            }, [e]),
            c = l.useCallback(
              (e) =>
                (0, i.jsx)(s.P, {
                  ...e,
                  src: () => n.e("18133").then(n.t.bind(n, 705844, 19)),
                  ref: t,
                  initialAnimation: a.current,
                  markers: r,
                }),
              [],
            );
          return {
            events: { onClick: u, onMouseEnter: o, onMouseLeave: d },
            play: u,
            getDuration: l.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: l.useCallback(
              () => t.current?.getCurrentFrame() ?? null,
              [],
            ),
            Component: c,
          };
        };
    },
    621956(e, t, n) {
      n.d(t, { E: () => a });
      var i = n(627968),
        l = n(64700),
        s = n(744682);
      let r = { all: { name: "all", start: 0, duration: 66 } },
        a = () => {
          let e = l.useRef(null),
            t = l.useCallback(() => {
              null != e.current && e.current.play("all");
            }, []),
            a = l.useCallback(() => {
              null != e.current && e.current.play("all");
            }, []),
            u = l.useCallback(() => {
              null != e.current && e.current.stopIfPlaying("all");
            }, []),
            o = l.useCallback(
              (t) =>
                (0, i.jsx)(s.P, {
                  ...t,
                  src: () => n.e("5506").then(n.t.bind(n, 429286, 19)),
                  ref: e,
                  markers: r,
                }),
              [],
            );
          return {
            events: { onClick: t, onMouseEnter: a, onMouseLeave: u },
            play: t,
            getDuration: l.useCallback(() => e.current?.getDuration(), []),
            getCurrentFrame: l.useCallback(
              () => e.current?.getCurrentFrame() ?? null,
              [],
            ),
            Component: o,
          };
        };
    },
    732637(e, t, n) {
      n.d(t, { A: () => I });
      var i = n(627968),
        l = n(64700),
        s = n(17928),
        r = n(228366),
        a = n(31728),
        u = n(869146),
        o = n(625494),
        d = n(933958),
        c = n(969151),
        h = n(108959),
        A = n(902439),
        f = n(5867),
        g = n(652215);
      let E = (e, t) => {
        r.h.wait(() => {
          (0, a.I_)(e, t);
        });
      };
      function I(e) {
        let t,
          { embedId: n, className: r, style: a } = e,
          I = (0, s.bG)([u.A], () => u.A.getWindow(g.MLl.CHANNEL_CALL_POPOUT)),
          S = (0, A.A)(),
          _ = (0, s.bG)([d.Ay], () => d.Ay.getActivityPanelMode());
        t =
          null == S || (0, h.A)((0, c.H)(S.location)) || _ !== f.Gd.PANEL
            ? (I?.window ?? window)
            : window;
        let T = l.useRef(null),
          C = l.useMemo(() => {
            let e = null;
            return () => {
              null == e &&
                (e = t.requestAnimationFrame(() => {
                  E(n, T.current?.getBoundingClientRect() ?? null), (e = null);
                }));
            };
          }, [n, t]);
        return (
          l.useEffect(
            () => (
              t.addEventListener("resize", C),
              o._.subscribe(g.jej.REMEASURE_TARGET, C),
              () => {
                t.removeEventListener("resize", C),
                  o._.unsubscribe(g.jej.REMEASURE_TARGET, C);
              }
            ),
            [C, t],
          ),
          l.useLayoutEffect(() => {
            let e = T.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            C();
            let i = new t.ResizeObserver(C);
            return (
              i.observe(e),
              () => {
                i.disconnect(), E(n, null);
              }
            );
          }, [n, C]),
          (0, i.jsx)("div", { ref: T, style: a, className: r })
        );
      }
    },
    980923(e, t, n) {
      n.d(t, { A: () => l });
      var i = n(985018);
      function l(e, t, n, l) {
        return l
          ? i.intl.string(i.t["2Ne/Y1"])
          : n
            ? i.intl.string(i.t.FJSZVM)
            : t
              ? i.intl.string(i.t["+JQCa/"])
              : e
                ? i.intl.string(i.t.YqAjXy)
                : i.intl.string(i.t.w4m945);
      }
    },
    206018(e, t, n) {
      n.d(t, { A: () => v });
      var i = n(627968);
      n(64700);
      var l = n(110259),
        s = n(17928),
        r = n(205693),
        a = n(550079),
        u = n(477782),
        o = n(827343),
        d = n(820284),
        c = n(688810),
        h = n(139286),
        A = n(270816),
        f = n(485873),
        g = n(24933),
        E = n(964592),
        I = n(51760),
        S = n(763827),
        _ = n(532624),
        T = n(152567),
        C = n(819027),
        m = n(652215),
        p = n(509381),
        N = n(731854),
        M = n(985018),
        D = n(347933);
      function v(e) {
        let {
            appContext: t,
            onInteraction: n,
            onSelect: v,
            onClose: y,
            maybeRenderPTTCheckbox: U = !1,
            renderDeafenCheckbox: O = !1,
            renderInputProfiles: L = !1,
            renderOutputDevices: R = !1,
            renderOutputVolume: w = !1,
            renderInputDevices: P = !1,
            renderInputVolume: G = !1,
            maybeRenderInputMeter: x = !1,
            renderSettingsButton: F = !1,
          } = e,
          { analyticsLocations: V } = (0, c.Ay)();
        (0, h.A)({
          type: l.ImpressionTypes.MENU,
          name: l.ImpressionNames.AUDIO_DEVICE_MENU,
          properties: { location_stack: V },
        });
        let b = (0, C.A)(t),
          H = (0, A.H)({
            deviceType: N.oh.AUDIO_INPUT,
            analyticsLocations: V,
            asSubmenu: !0,
          }),
          k = (0, A.H)({
            deviceType: N.oh.AUDIO_OUTPUT,
            analyticsLocations: V,
            asSubmenu: !0,
          }),
          Y = (0, s.bG)([I.Ay], () => I.Ay.getActiveInputProfile()),
          j = (0, g.A)(V),
          W = (0, f.A)(V),
          J = (0, E.A)(V),
          $ = r.x.DEFAULT,
          B = I.Ay.isSelfDeaf($),
          z = (0, s.bG)([I.Ay], () => I.Ay.getMode()),
          Z =
            z === m.TBI.VOICE_ACTIVITY
              ? m.TBI.PUSH_TO_TALK
              : m.TBI.VOICE_ACTIVITY,
          K = (0, s.bG)([I.Ay, _.Ay], () => {
            let e = I.Ay.getModeOptions().shortcut?.length > 0,
              t = null != _.Ay.getKeybindForAction(m.hCu.PUSH_TO_TALK, !1, !0),
              n =
                null !=
                _.Ay.getKeybindForAction(m.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n;
          }),
          Q = (0, s.bG)([S.A], () => null != S.A.getChannelId());
        return (0, i.jsx)(d.A, {
          object: m.ZSU.CONTEXT_MENU,
          children: (0, i.jsxs)(a.W, {
            "data-menu-migrated": !0,
            onSelect: v,
            onInteraction: n,
            onClose: y,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": M.intl.string(M.t.ZR1Ss6),
            className: D.MK,
            children: [
              (0, i.jsxs)(u.rX, { children: [P && H, L && j, R && k] }),
              (0, i.jsxs)(u.rX, {
                children: [
                  G && W,
                  x &&
                    Q &&
                    (0, i.jsx)(u.aK, {
                      id: "input-device-meter",
                      interactive: !1,
                      control: () =>
                        (0, i.jsx)(T.A, {
                          notchBackground: T.V.BLACK,
                          location: { section: m.JJy.CONTEXT_MENU },
                          meterOnly: !0,
                          containerClassName: D.Eq,
                          notchClassName: D.CO,
                        }),
                    }),
                  w && J,
                ],
              }),
              (0, i.jsxs)(u.rX, {
                children: [
                  U && K
                    ? (0, i.jsx)(u.sL, {
                        checked: z === m.TBI.PUSH_TO_TALK,
                        id: "input-mode",
                        label: M.intl.string(M.t.Q8gkVL),
                        action: () =>
                          o.A.setMode(Z, void 0, void 0, {
                            analyticsLocations: V,
                          }),
                        disabled: Y === p.m.STUDIO,
                      })
                    : null,
                  O &&
                    (0, i.jsx)(
                      u.sL,
                      {
                        id: "deafen",
                        label: M.intl.string(M.t.wjcRFX),
                        action: () =>
                          o.A.toggleSelfDeaf({
                            context: $,
                            location: "AudioDeviceMenu",
                          }),
                        checked: B,
                      },
                      "self-deafen",
                    ),
                  F && b,
                ],
              }),
            ],
          }),
        });
      }
    },
    152567(e, t, n) {
      n.d(t, { V: () => p, A: () => G });
      var i,
        l = n(627968),
        s = n(64700),
        r = n(503698),
        a = n.n(r),
        u = n(735438),
        o = n.n(u),
        d = n(17928),
        c = n(205693),
        h = n(451988),
        A = n(990078),
        f = n(834730),
        g = n(452027),
        E = n(821609),
        I = n(827343),
        S = n(765671),
        _ = n(661531),
        T = n(953727);
      function C(e) {
        let {
            width: t = 80,
            height: n = 28,
            color: i = "currentColor",
            foreground: r,
            ...a
          } = e,
          u = `pill-frame-pattern-${n}`,
          o = s.useMemo(() => {
            let e;
            return (
              (e = n - 8),
              `m0 0h8v${n}h-8zm4 2c-1.1045695 0-2 .8954305-2 2v${e}c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-${e}c0-1.1045695-.8954305-2-2-2z`
            );
          }, [n]);
        return (0, l.jsxs)("svg", {
          ...(0, T.A)(a),
          width: t,
          height: n,
          viewBox: `0 0 ${t} ${n}`,
          children: [
            (0, l.jsx)("pattern", {
              id: u,
              width: 8 / t,
              height: "1",
              children: (0, l.jsx)("path", {
                d: o,
                fillRule: "evenodd",
                fill: i,
                className: r,
              }),
            }),
            (0, l.jsx)("rect", {
              fill: `url(#${u})`,
              height: "100%",
              width: "100%",
            }),
          ],
        });
      }
      var m = n(75753),
        p = (((i = {}).BLACK = "BLACK"), (i.GRAY = "GRAY"), i);
      let N = { BLACK: m.Ql, GRAY: m.wm },
        M = { sm: 20, md: 28 };
      function D(e) {
        return 8 * Math.round(e / 8);
      }
      function v(e) {
        let {
            notchBackground: t,
            progress: n,
            size: i = "md",
            gradientStart: r = _.A.unsafe_rawColors.YELLOW_260.css,
            gradientEnd: u = _.A.unsafe_rawColors.GREEN_360.css,
            className: o,
            notchClassName: d,
            children: c,
          } = e,
          h = M[i],
          { ref: A, width: f } = (0, S.Ay)(),
          g = s.useMemo(() => (null != f ? D(f) : 0), [f]),
          E = s.useMemo(() => {
            let e = Math.abs(
              D((g * (100 - Math.max(0, Math.min(100, n)))) / 100) - g,
            );
            return { transform: `translateX(${e}px)` };
          }, [n, g]),
          I = s.useMemo(
            () => ({
              width: `${g}px`,
              background:
                n <= 0 ? "none" : `linear-gradient(to right, ${r}, ${u})`,
            }),
            [u, r, n, g],
          );
        return (0, l.jsxs)("div", {
          className: m.iE,
          ref: A,
          style: { height: h },
          children: [
            (0, l.jsxs)("div", {
              className: a()(m.kL, o),
              style: I,
              children: [
                (0, l.jsx)("div", { className: m.qB, style: E }),
                0 !== g &&
                  (0, l.jsx)(C, {
                    width: g,
                    height: h,
                    className: a()(m.DR, N[t], d),
                  }),
              ],
            }),
            c,
          ],
        });
      }
      var y = n(51760),
        U = n(763827),
        O = n(954571),
        L = n(652215),
        R = n(985018),
        w = n(32854);
      class P extends s.PureComponent {
        _initTimeout = new h.Ep();
        _silenceTimeout = new h.Ep();
        _messageTimeout = new h.Ep();
        _micTestStartTime;
        state = {
          volume: -100,
          isMicTesting: !1,
          isDetectingInput: !0,
          didDeafenUser: !1,
        };
        componentDidMount() {
          this._initTimeout.start(1e3, this.setupVoiceActivity);
        }
        setupVoiceActivity = () => {
          y.Ay.getMediaEngine().on(
            c.bg.VoiceActivity,
            this.handleVoiceActivity,
          );
        };
        componentWillUnmount() {
          this._initTimeout.stop(),
            this._silenceTimeout.stop(),
            this._micTestStop(),
            y.Ay.getMediaEngine().removeListener(
              c.bg.VoiceActivity,
              this.handleVoiceActivity,
            );
        }
        handleVoiceActivity = (e) => {
          let { isMicTesting: t } = this.state;
          if (t && e <= -100) {
            this._silenceTimeout.isStarted() ||
              this._silenceTimeout.start(2e3, () => {
                this.setState({ isDetectingInput: !1 });
              }),
              this.setState({ volume: -100 });
            return;
          }
          this._silenceTimeout.stop(),
            this.setState({ volume: e, isDetectingInput: !0 });
        };
        _micTestStart() {
          let {
              isVoiceConnected: e,
              inputDeviceName: t,
              inputVolume: n,
              outputDeviceName: i,
              outputVolume: l,
              inputMode: s,
              vadAutoThreshold: r,
              vadThreshold: a,
              location: u,
              isDeafened: o,
            } = this.props,
            d = !1;
          e && !o && (I.A.toggleSelfDeaf(), (d = !0)),
            I.A.setLoopback("mic_test", !0),
            (this._micTestStartTime = Date.now()),
            this.setState({
              isMicTesting: !0,
              isDetectingInput: !0,
              didDeafenUser: d,
            }),
            O.default.track(L.HAw.MIC_TESTING_STARTED, {
              input_device_name: t,
              input_device_volume: n,
              output_device_name: i,
              output_device_volume: l,
              input_mode: s,
              input_sensitivity_is_automatic: r,
              input_sensitivity_threshold: Math.round(a),
              location: u,
            });
        }
        _micTestStop() {
          let { didDeafenUser: e, isMicTesting: t } = this.state,
            { isVoiceConnected: n, isDeafened: i } = this.props;
          t &&
            (n && i && e && I.A.toggleSelfDeaf(),
            I.A.setLoopback("mic_test", !1),
            this.setState({ isMicTesting: !1, didDeafenUser: !1 }),
            null != this._micTestStartTime &&
              O.default.track(L.HAw.MIC_TESTING_STOPPED, {
                testing_duration: Math.round(
                  (Date.now() - this._micTestStartTime) / 1e3,
                ),
              }));
        }
        handleToggleMicTest = () => {
          this.state.isMicTesting ? this._micTestStop() : this._micTestStart();
        };
        renderCaption() {
          let { captionVoice: e, captionNoVoice: t } = this.props,
            { isMicTesting: n, isDetectingInput: i } = this.state;
          return null == e && null == t
            ? null
            : (0, l.jsx)(f.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: w.Qe,
                children: n ? (i ? e : t) : void 0,
              });
        }
        render() {
          let {
              isVoiceConnected: e,
              title: t,
              description: n,
              notchBackground: i,
              buttonTest: s = "",
              buttonStop: r = "",
              buttonVariant: u = "secondary",
              size: o = "sm",
              isDeafened: d,
              buttonMinWidth: c,
              measureButtonRef: h,
              meterOnly: I = !1,
              containerClassName: S,
              helpText: _,
            } = this.props,
            { isMicTesting: T, volume: C, isDetectingInput: m } = this.state,
            p = e && !T ? R.intl.string(R.t["9viE2A"]) : null;
          T && e && !d && this._micTestStop();
          let N = r.length >= s.length ? r : s;
          return (0, l.jsxs)("div", {
            className: a()(w.kL, S),
            children: [
              (0, l.jsx)(g.D, {
                label: t ?? void 0,
                hideLabel: I,
                description: I ? null : n,
                children: (0, l.jsxs)("div", {
                  className: a()(w.ak, { [w.mi]: I, [w.EX]: "sm" === o }),
                  children: [
                    !I &&
                      (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)("div", {
                            className: w.km,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(E.$, {
                              buttonRef: h,
                              size: o,
                              variant: u,
                              text: N,
                            }),
                          }),
                          (0, l.jsx)(A.m, {
                            text: p,
                            children: (0, l.jsx)("div", {
                              style:
                                null != c
                                  ? { minWidth: c }
                                  : { visibility: "hidden" },
                              children: (0, l.jsx)(E.$, {
                                size: o,
                                variant: u,
                                text: T ? r : s,
                                onClick: this.handleToggleMicTest,
                                fullWidth: !0,
                              }),
                            }),
                          }),
                        ],
                      }),
                    (0, l.jsx)(v, {
                      progress: T || I ? C + 100 : 0,
                      notchBackground: i,
                      notchClassName: this.props.notchClassName,
                      size: o,
                    }),
                    this.renderCaption(),
                  ],
                }),
              }),
              null != _ &&
                (0, l.jsx)(f.E, {
                  variant: "text-sm/normal",
                  color: "text-subtle",
                  style: { visibility: T && !m ? "hidden" : "visible" },
                  children: _,
                }),
            ],
          });
        }
      }
      function G(e) {
        let {
            inputDevice: t,
            outputDevice: n,
            threshold: i,
            autoThreshold: s,
            inputVolume: r,
            outputVolume: a,
            inputMode: u,
            isDeafened: c,
          } = (0, d.cf)([y.Ay], () => {
            let e = y.Ay.getInputDeviceId(),
              t = y.Ay.getInputDevices(),
              n = o().find(t, (t) => {
                let { id: n } = t;
                return n === e;
              }),
              i = y.Ay.getOutputDeviceId(),
              l = y.Ay.getOutputDevices(),
              s = o().find(l, (e) => {
                let { id: t } = e;
                return t === i;
              }),
              { threshold: r, autoThreshold: a } = y.Ay.getModeOptions(),
              u = y.Ay.getInputVolume(),
              d = y.Ay.getOutputVolume();
            return {
              inputDevice: n,
              outputDevice: s,
              threshold: r,
              autoThreshold: a,
              inputVolume: u,
              outputVolume: d,
              inputMode: y.Ay.getMode(),
              isDeafened: y.Ay.isSelfDeaf(),
            };
          }),
          h = (0, d.bG)([U.A], () => U.A.isConnected()),
          { ref: A, width: f } = (0, S.Ay)();
        return (0, l.jsx)(P, {
          isVoiceConnected: h,
          inputVolume: r,
          outputVolume: a,
          inputMode: u,
          isDeafened: c,
          vadThreshold: i,
          vadAutoThreshold: s,
          inputDeviceName: t?.name ?? "",
          outputDeviceName: n?.name ?? "",
          measureButtonRef: A,
          buttonMinWidth: f,
          ...e,
        });
      }
    },
    958005(e, t, n) {
      n.d(t, { A: () => l });
      var i = n(652215);
      function l(e, t) {
        return `${i.MLl.CALL_TILE_POPOUT}_${e}_${t}`;
      }
    },
    183184(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(627968);
      n(64700);
      var l = n(192308),
        s = n(827343),
        r = n(579872),
        a = n(48686),
        u = n(985018);
      function o(e, t, o) {
        t && (0, a.t)()
          ? (0, l.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("39765"),
                n.e("59866"),
              ]).then(n.bind(n, 937489));
              return (t) => (0, i.jsx)(e, { ...t });
            })
          : t
            ? r.A.show({
                title: u.intl.string(u.t.FJSZVM),
                body: u.intl.string(u.t.etJjgW),
              })
            : e
              ? r.A.show({
                  title: u.intl.string(u.t["+JQCa/"]),
                  body: u.intl.string(u.t.hsNm7d),
                })
              : s.A.toggleSelfMute({ location: o });
      }
    },
    819027(e, t, n) {
      n.d(t, { A: () => h });
      var i = n(627968);
      n(64700);
      var l = n(477782),
        s = n(625903),
        r = n(688810),
        a = n(474397),
        u = n(780964),
        o = n(858897),
        d = n(652215),
        c = n(985018);
      function h(e) {
        let { analyticsLocations: t } = (0, r.Ay)();
        return (0, i.jsx)(l.Dr, {
          id: "voice-settings",
          label: c.intl.string(c.t.NiTd0e),
          action: () => {
            (0, o.openUserSettings)(u.X.VOICE_CATEGORY, {
              analyticsLocations: t,
              appContext: e,
            }),
              (0, a.A)(e, e === d.BRT.POPOUT);
          },
          icon: s.Z,
          leadingAccessory: { type: "icon", icon: s.Z },
        });
      }
    },
    870391(e, t, n) {
      n.d(t, { A: () => h }), n(321073);
      var i = n(17928),
        l = n(228366),
        s = n(427358),
        r = n(153488),
        a = n(994500),
        u = n(287809);
      let o = [],
        d = !1;
      class c extends i.Ay.PersistedStore {
        static displayName = "FriendGroupsStore";
        static persistKey = "FriendGroupsStoreV2";
        initialize(e) {
          this.waitFor(r.A, a.A, s.A, u.default),
            null != e && ((o = e.groups ?? []), (d = e.isInitialized ?? !1));
        }
        getGroups() {
          return o;
        }
        getGroup(e) {
          return o.find((t) => t.id === e) ?? null;
        }
        getGroupIds() {
          return o.map((e) => e.id);
        }
        getUserGroups(e) {
          return o.filter((t) => t.userIds.includes(e));
        }
        isGroupEmpty(e) {
          let t = this.getGroup(e);
          return null == t || 0 === t.userIds.length;
        }
        isInitialized() {
          return d;
        }
        getState() {
          return { groups: o, isInitialized: d };
        }
      }
      let h = new c(l.h, {
        POST_CONNECTION_OPEN: function () {
          if (d || o.length > 0) return !1;
          (o = []), (d = !0);
        },
        CREATE_FRIEND_GROUP: function (e) {
          let { groupId: t, name: n } = e;
          return (
            !o.some((e) => e.id === t) &&
            (o.push({ id: t, name: n, userIds: [] }), !0)
          );
        },
        UPDATE_FRIEND_GROUP: function (e) {
          let { groupId: t, name: n } = e,
            i = o.findIndex((e) => e.id === t);
          return -1 !== i && ((o[i] = { ...o[i], name: n }), !0);
        },
        DELETE_FRIEND_GROUP: function (e) {
          let { groupId: t } = e,
            n = o.length;
          return (o = o.filter((e) => e.id !== t)).length !== n;
        },
        REORDER_FRIEND_GROUPS: function (e) {
          let { groupIds: t } = e,
            n = [],
            i = new Map(o.map((e) => [e.id, e]));
          for (let e of t) {
            let t = i.get(e);
            null != t && n.push(t);
          }
          return n.length === o.length && ((o = n), !0);
        },
        ADD_USERS_TO_GROUP: function (e) {
          let { groupId: t, userIds: n } = e,
            i = o.findIndex((e) => e.id === t);
          if (-1 === i) return !1;
          let l = o[i],
            s = new Set(l.userIds),
            r = n.filter((e) => !s.has(e));
          return (
            0 !== r.length &&
            ((o[i] = { ...l, userIds: [...l.userIds, ...r] }), !0)
          );
        },
        REMOVE_USERS_FROM_GROUP: function (e) {
          let { groupId: t, userIds: n } = e,
            i = o.findIndex((e) => e.id === t);
          if (-1 === i) return !1;
          let l = o[i],
            s = new Set(n),
            r = l.userIds.filter((e) => !s.has(e));
          return (
            r.length !== l.userIds.length && ((o[i] = { ...l, userIds: r }), !0)
          );
        },
      });
    },
    586774(e, t, n) {
      n.d(t, { A: () => E });
      var i = n(735438),
        l = n.n(i),
        s = n(17928),
        r = n(228366),
        a = n(889227),
        u = n(287809),
        o = n(38910);
      let d = {},
        c = 0,
        h = !1,
        A = !1;
      function f(e) {
        let t =
          null != e.contact_names && e.contact_names.length >= 2
            ? e.contact_names.slice(0, 2)
            : [];
        return {
          key: e.suggested_user.id,
          name: l().first(e.reasons)?.name,
          user: new a.A(e.suggested_user),
          mutualFriendsCount: e.mutual_friends_count,
          contactNames: t,
        };
      }
      class g extends s.Ay.Store {
        static displayName = "FriendSuggestionStore";
        initialize() {
          this.waitFor(u.default);
        }
        getSuggestionCount() {
          return c;
        }
        getSuggestions() {
          return Object.entries(d).map((e) => {
            let [t, n] = e;
            return n;
          });
        }
        getSuggestion(e) {
          return d[e];
        }
      }
      let E = new g(r.h, {
        CONNECTION_OPEN: function (e) {
          (d = {}),
            (c = e.friendSuggestionCount) > 0
              ? ((A = !0), !h && A && ((h = !0), (A = !1), o.A.fetch()))
              : (function () {
                  arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                })();
        },
        FRIEND_SUGGESTION_CREATE: function (e) {
          let t = f(e.suggestion);
          if (null != d[t.key]) return !1;
          c++, (d = { ...d, [t.key]: t });
        },
        FRIEND_SUGGESTION_DELETE: function (e) {
          (c = Math.max(0, --c)), delete d[e.suggestedUserId];
        },
        LOAD_FRIEND_SUGGESTIONS_SUCCESS: function (e) {
          var t;
          (h = !1),
            (t = e.suggestions),
            (d = l()
              .chain(t)
              .map((e) => f(e))
              .keyBy((e) => e.key)
              .value()),
            (c = l().keys(d).length);
        },
        LOAD_FRIEND_SUGGESTIONS_FAILURE: function () {
          (h = !1), (d = {});
        },
      });
    },
    41e4(e, t, n) {
      n.d(t, { A: () => i });
      let i = (0, n(250105).Ay)({
        kind: "user",
        name: "2026-04-add-to-dm-updates",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
      });
    },
    662367(e, t, n) {
      n.d(t, { i: () => l });
      let i = (0, n(250105).Ay)({
        kind: "user",
        name: "2026-02-longer-group-dm-invites",
        defaultConfig: { inviteMaxAgeSeconds: 86400 },
        variations: {
          0: { inviteMaxAgeSeconds: 86400 },
          1: { inviteMaxAgeSeconds: 604800 },
        },
      });
      function l(e) {
        let { location: t } = e,
          { inviteMaxAgeSeconds: n } = i.getConfig({ location: t });
        return n;
      }
    },
    286498(e, t, n) {
      n.d(t, { A: () => I });
      var i = n(627968);
      n(64700);
      var l = n(503698),
        s = n.n(l),
        r = n(837381),
        a = n(17928),
        u = n(939249),
        o = n(834730),
        d = n(658675),
        c = n(297413),
        h = n(966327),
        A = n(235986),
        f = n(290863),
        g = n(427262),
        E = n(973081);
      function I(e) {
        let {
            user: t,
            row: n,
            hideDiscriminator: l,
            comparator: I,
            selected: S,
            checked: _,
            disabled: T = !1,
            onClick: C,
            onMouseEnter: m,
            "aria-setsize": p,
            "aria-posinset": N,
          } = e,
          M = (0, a.bG)([f.A], () => f.A.getStatus(t.id)),
          D = (0, r.rm)(String(t.id));
        return (0, i.jsx)(u.D, {
          id: `user-row-${n}`,
          className: s()(E.Se, { [E.r9]: T }),
          onClick: () => {
            C?.(t.id);
          },
          onMouseEnter: () => {
            m?.(n);
          },
          ...D,
          role: "checkbox",
          "aria-checked": _,
          "aria-disabled": T,
          "aria-setsize": p,
          "aria-posinset": N,
          children: (0, i.jsxs)(A.A, {
            align: A.A.Align.CENTER,
            className: s()(E.Bc, { [E.oz]: S }),
            children: [
              (0, i.jsx)(h.A, { user: t, status: M, className: E.my }),
              (0, i.jsxs)("div", {
                className: E.YW,
                children: [
                  (0, i.jsx)(o.E, {
                    tag: "strong",
                    className: E.$R,
                    "aria-hidden": !0,
                    variant: "text-md/medium",
                    children:
                      null != I && I === t.tag
                        ? g.Ay.getName(t)
                        : null != I && "" !== I
                          ? I
                          : g.Ay.getName(t),
                  }),
                  (0, i.jsx)(o.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: (0, i.jsx)(c.A, {
                      user: t,
                      hideDiscriminator: l,
                      className: E.xK,
                      forceUsername: !0,
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(d.P, { checked: _, disabled: T }),
            ],
          }),
        });
      }
    },
    578623(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(17928),
        l = n(228366),
        s = n(717125),
        r = n(495544),
        a = n(734057),
        u = n(935208);
      n(702841);
      let o = new Set();
      class d extends i.Ay.Store {
        initialize() {
          this.waitFor(r.default, a.A, s.A);
        }
        static displayName = "MediaPostSharePromptStore";
        shouldDisplayPrompt(e) {
          return o.has(e);
        }
      }
      let c = new d(l.h, {
        CONNECTION_OPEN: function () {
          o = new Set();
        },
        MESSAGE_CREATE: function (e) {
          if (e.isPushNotification) return;
          let t = e.message;
          if (
            r.default.getId() !== t.author?.id ||
            !(function (e, t) {
              if (e !== u.default.castChannelIdAsMessageId(t)) return !1;
              let n = a.A.getChannel(t);
              if (null == n || !n.isForumPost()) return !1;
              let i = a.A.getChannel(n.parent_id);
              return i?.isMediaChannel() === !0;
            })(t.id, t.channel_id)
          )
            return;
          let n = a.A.getChannel(t.channel_id);
          null == n ||
            null == n.parent_id ||
            (s.A.isChannelGated(n.guild_id, n.parent_id) &&
              o.add(u.default.castMessageIdAsChannelId(e.message.id)));
        },
        DISMISS_MEDIA_POST_SHARE_PROMPT: function (e) {
          let { threadId: t } = e;
          o.delete(t);
        },
        LOGOUT: function (e) {
          o.clear();
        },
      });
    },
    973153(e, t, n) {
      n.d(t, { A: () => I });
      var i = n(17928),
        l = n(228366),
        s = n(640631),
        r = n(626584),
        a = n(734057),
        u = n(232835),
        o = n(320095),
        d = n(383233),
        c = n(222823),
        h = n(935208);
      class A {
        localNeeded = !0;
        messages = new Map();
        isLatest(e, t) {
          return this.messageGeneration(e, t) === t;
        }
        messageGeneration(e, t) {
          let n = this.messages.get(e);
          return null == n
            ? -1 / 0
            : n.generation !== t &&
                null != n.message &&
                n.message.id === c.Ay.lastMessageId(e)
              ? (this.messages.set(e, { ...n, generation: t }), t)
              : n.generation;
        }
        messageId(e) {
          let t = this.messages.get(e);
          return t?.message?.id ?? null;
        }
        messageRecord(e) {
          let t = this.messages.get(e);
          return (
            null == t ||
              null == t.message ||
              t.message instanceof d.Ay ||
              (t.message = (0, o.rh)(t.message)),
            t?.message ?? null
          );
        }
        has(e) {
          return this.messages.has(e);
        }
        put(e, t, n) {
          this.messages.set(e, { message: t, generation: n });
        }
        putNew(e, t, n) {
          var i, l;
          let s = this.messages.get(e);
          null != t &&
            ((i = t.id),
            null == (l = s?.message?.id) || h.default.compare(i, l) > 0) &&
            this.put(e, t, n);
        }
        putMany(e, t) {
          for (let n of e) this.put(n.channel_id, n, t);
        }
        update(e) {
          if (null == e.id || null == e.channel_id) return;
          let t = e.channel_id,
            n = this.messages.get(t);
          if (n?.message?.id !== e.id) return;
          let i =
            n.message instanceof d.Ay
              ? (0, o.IU)(n.message, e)
              : (0, o.SP)(n.message, e);
          this.messages.set(t, { ...n, message: i });
        }
        delete(e) {
          this.messages.delete(e);
        }
      }
      let f = -1 / 0,
        g = new r.A("MessagePreviewStore");
      class E extends i.Ay.Store {
        initialize() {
          this.waitFor(a.A, u.A);
        }
        guilds = new Map();
        generation = 0;
        constructor() {
          super(l.h, {
            CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
            GUILD_CREATE: (e) => this.handleGuildCreate(e),
            GUILD_DELETE: (e) => this.handleGuildDelete(e),
            LOAD_MESSAGES_SUCCESS: (e) => this.handleLoadMessagesSuccess(e),
            LOCAL_MESSAGES_LOADED: (e) => this.handleLocalMessagesLoaded(e),
            LOGOUT: (e) => this.handleLogout(e),
            MESSAGE_CREATE: (e) => this.handleMessageCreate(e),
            MESSAGE_DELETE: (e) => this.handleMessageDelete(e),
            MESSAGE_PREVIEWS_LOADED: (e) => this.handleMessagePreviewsLoaded(e),
            MESSAGE_PREVIEWS_LOCALLY_LOADED: (e) =>
              this.handleMessagePreviewsLocallyLoaded(e),
            MESSAGE_UPDATE: (e) => this.handleMessageUpdate(e),
            THREAD_LIST_SYNC: (e) => this.handleThreadListSync(e),
          });
        }
        isLatest(e, t) {
          let n = this.guilds.get(e ?? null);
          return n?.isLatest(t, this.generation) ?? !1;
        }
        isLocalFetchNeeded(e) {
          return this.guilds.get(e)?.localNeeded ?? !0;
        }
        message(e, t) {
          return this.guilds.get(e)?.messageRecord(t) ?? null;
        }
        data(e) {
          return (
            this.guilds.has(e) || this.guilds.set(e, new A()),
            this.guilds.get(e)
          );
        }
        handleOneGuildCreate(e) {
          let t = this.data(e.id);
          t.putMany(e.lastMessages ?? [], this.generation),
            t.putMany(e.threadMessages ?? [], this.generation),
            null != e.lastMessages && (t.localNeeded = !1);
        }
        handleConnectionOpen(e) {
          for (let t of ((this.generation += 1), e.guilds))
            this.handleOneGuildCreate(t);
        }
        handleGuildCreate(e) {
          this.handleOneGuildCreate(e.guild);
        }
        handleGuildDelete(e) {
          this.guilds.delete(e.guild.id);
        }
        handleMessageCreate(e) {
          if (e.optimistic || e.isPushNotification) return !1;
          this.data(e.guildId ?? null).put(
            e.message.channel_id,
            e.message,
            this.generation,
          );
        }
        handleMessageDelete(e) {
          let t = e.guildId ?? null;
          if (this.data(t)?.messageId(e.channelId) === e.id) {
            let n = u.A.getMessages(e.channelId),
              i = n.hasMoreAfter ? null : n.last();
            null != i
              ? this.data(t).put(e.channelId, i, this.generation)
              : this.data(t).delete(e.channelId);
          }
        }
        handleMessageUpdate(e) {
          let t = e.guildId ?? null,
            n = e.message.channel_id,
            i = e.message.id;
          if (null == n || null == i) return !1;
          let l = this.data(t);
          if (l?.messageId(n) !== i) return !1;
          l?.update(e.message);
        }
        handleThreadListSync(e) {
          this.data(e.guildId).putMany(
            e.mostRecentMessages ?? [],
            this.generation,
          );
        }
        handleLoadMessagesSuccess(e) {
          let t = a.A.getBasicChannel(e.channelId);
          if (null == t) return !1;
          (0, s.D)(e.messages),
            e.isAfter || e.isBefore || e.hasMoreAfter
              ? this.data(t.guild_id).putNew(
                  e.channelId,
                  e.messages[0] ?? null,
                  this.generation,
                )
              : this.data(t.guild_id).put(
                  e.channelId,
                  e.messages[0] ?? null,
                  this.generation,
                );
        }
        handleLocalMessagesLoaded(e) {
          let t = a.A.getBasicChannel(e.channelId);
          null != t &&
            ((0, s.D)(e.messages),
            this.data(t.guild_id).putNew(
              e.channelId,
              e.messages[0] ?? null,
              f,
            ));
        }
        handleMessagePreviewsLoaded(e) {
          g.verbose(
            `adding remote previews (guildId: ${e.guildId}, messages: ${e.messages.length})`,
          );
          let t = this.data(e.guildId);
          for (let n of e.messages)
            t.isLatest(n.channel_id, this.generation) ||
              t.put(n.channel_id, n, this.generation);
        }
        handleMessagePreviewsLocallyLoaded(e) {
          g.verbose(
            `adding local previews (guildId: ${e.guildId}, messages: ${e.messages.length})`,
          );
          let t = this.data(e.guildId);
          for (let [n, i] of e.messages) t.has(n) || t.put(n, i, f);
          t.localNeeded = !1;
        }
        handleLogout(e) {
          this.guilds.clear();
        }
      }
      let I = new E();
    },
    401565(e, t, n) {
      n.d(t, { A: () => f });
      var i = n(17928),
        l = n(228366),
        s = n(320095),
        r = n(287809),
        a = n(380335),
        u = n(157550);
      let o = {},
        d = new Set();
      function c(e) {
        return a.A.isMessageRequest(e) || u.A.isSpam(e);
      }
      function h(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!c(e) || (null != t && e !== t?.channel_id)) return;
        let i = null == t ? null : (0, s.rh)(t);
        o[e] = { loaded: !0, error: n, message: i };
      }
      class A extends i.Ay.Store {
        static displayName = "MessageRequestPreviewStore";
        initialize() {
          this.waitFor(a.A, u.A, r.default);
        }
        shouldLoadMessageRequestPreview(e) {
          return !d.has(e);
        }
        getMessageRequestPreview(e) {
          return (
            e in o || (o[e] = { loaded: !1, error: !1, message: null }), o[e]
          );
        }
      }
      let f = new A(l.h, {
        CONNECTION_OPEN: function () {
          (o = {}), d.clear();
        },
        CHANNEL_CREATE: function (e) {
          let { channel: t } = e;
          c(t.id) && d.add(t.id);
        },
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e;
          for (let e of t) c(e.id) || (d.delete(e.id), delete o[e.id]);
        },
        CHANNEL_DELETE: function (e) {
          let { channel: t } = e;
          d.delete(t.id), delete o[t.id];
        },
        MESSAGE_CREATE: function (e) {
          if (e.isPushNotification) return !1;
          h(e.message.channel_id, e.message);
        },
        MESSAGE_UPDATE: function (e) {
          let t = e.message.channel_id;
          if (null == t) return !1;
          let n = o[t];
          if (null == n || null == n.message) return !1;
          o[t] = { ...n, message: (0, s.IU)(n.message, e.message) };
        },
        MESSAGE_DELETE: function (e) {
          if (!c(e.channelId)) return !1;
          o[e.channelId] = { loaded: !0, error: !1, message: null };
        },
        LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function (e) {
          let { requestedChannelIds: t, supplementalData: n } = e,
            i = new Set([...t]);
          for (let e of (n.forEach((e) => {
            h(e.channel_id, e.message_preview), i.delete(e.channel_id);
          }),
          Array.from(i)))
            h(e, null);
        },
        LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: function (e) {
          let { requestedChannelIds: t } = e;
          t.forEach((e) => {
            h(e, null, !0);
          });
        },
      });
    },
    517092(e, t, n) {
      n.d(t, { A: () => R }), n(938796);
      var i = n(665260),
        l = n(17928),
        s = n(228366),
        r = n(495544),
        a = n(734057),
        u = n(71393),
        o = n(309010),
        d = n(543465),
        c = n(927813),
        h = n(935208),
        A = n(887560),
        f = n(652215),
        g = n(790782),
        E = n(355097);
      let I = [
          {
            timeSinceJoin: +c.A.Millis.HOUR,
            sends: 1,
            viewTime: +c.A.Millis.MINUTE,
          },
          {
            timeSinceJoin: +c.A.Millis.DAY,
            sends: 2,
            viewTime: 2 * c.A.Millis.MINUTE,
          },
          {
            timeSinceJoin: +c.A.Millis.WEEK,
            sends: 5,
            viewTime: 5 * c.A.Millis.MINUTE,
          },
          {
            timeSinceJoin: +c.A.Millis.DAYS_30,
            sends: 10,
            viewTime: 30 * c.A.Millis.MINUTE,
          },
        ],
        S = 5 * I[I.length - 1].viewTime,
        _ = c.A.Millis.WEEK,
        T = { channels: {} },
        C = new Set(),
        m = null,
        p = 0,
        N = 0;
      function M() {
        if (null == m || !y(m)) return !1;
        let e = v(m);
        if (
          e.lastActionTime > Date.now() - c.A.Millis.DAY &&
          e.viewDuration > S
        )
          return !1;
        let t = Date.now();
        return (e.lastActionTime = t), (e.viewDuration += t - p), (p = t), !0;
      }
      function D() {
        return (
          0 !== N && (clearInterval(N), (N = 0)),
          d.Ay.useNewNotifications &&
            (N = setInterval(() => {
              M() && L.emitChange();
            }, 15 * c.A.Millis.SECOND)),
          !1
        );
      }
      function v(e) {
        return (
          e in T.channels ||
            (T.channels[e] = {
              lastActionTime: 0,
              viewDuration: 0,
              numSends: 0,
            }),
          T.channels[e]
        );
      }
      function y(e) {
        if (!d.Ay.useNewNotifications || C.has(e)) return !1;
        let t = a.A.getBasicChannel(e);
        if (
          null == t ||
          null == t.guild_id ||
          d.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) ||
          U(t.guild_id, t.id) ||
          U(t.guild_id, t.parent_id)
        )
          return !1;
        let n = d.Ay.resolveUnreadSetting(t);
        return (
          d.Ay.getChannelUnreadSetting(t.guild_id, t.id) === g.e.UNSET &&
          n !== g.e.ALL_MESSAGES
        );
      }
      function U(e, t) {
        if (null == t) return !1;
        let n = d.Ay.getChannelOverrides(e)[t];
        return (
          null != n &&
          !!(
            (null != n.message_notifications &&
              n.message_notifications !== f.orn.NULL) ||
            (null != n.flags &&
              (0, i.br)(
                n.flags,
                E.vv.UNREADS_ALL_MESSAGES | E.vv.UNREADS_ONLY_MENTIONS,
              ))
          )
        );
      }
      class O extends l.Ay.PersistedStore {
        static displayName = "UnreadSettingNoticeStore2";
        static persistKey = "UnreadSettingNoticeStore2";
        initialize(e) {
          null != e && (T.channels = e.channels),
            this.syncWith([d.Ay], D),
            this.waitFor(r.default, a.A, u.A, o.A, d.Ay);
        }
        getState() {
          return T;
        }
        getLastActionTime(e) {
          return T.channels[e]?.lastActionTime ?? 0;
        }
        maybeAutoUpgradeChannel(e) {
          if (!y(e)) return !1;
          let t = a.A.getBasicChannel(e);
          return (
            null != t &&
            null != t.guild_id &&
            !!(function (e) {
              let t = u.A.getGuild(e.guild_id),
                n = t?.joinedAt ?? new Date(),
                i = Math.min(h.default.age(e.id), Date.now() - n.getTime()),
                l = T.channels[e.id];
              if (null == l || l.lastActionTime < Date.now() - _) return !1;
              for (let e of I)
                if (
                  i < e.timeSinceJoin &&
                  (l.numSends >= e.sends || l.viewDuration >= e.viewTime)
                )
                  return !0;
              return !1;
            })(t) &&
            (delete T.channels[e],
            C.add(e),
            (0, A.mA)(t.guild_id, t.id, g.e.ALL_MESSAGES),
            !0)
          );
        }
      }
      let L = new O(s.h, {
          CHANNEL_SELECT: function () {
            let e = M();
            return (m = o.A.getChannelId()), (p = Date.now()), e;
          },
          CONNECTION_OPEN: function () {
            (m = o.A.getChannelId()), (p = Date.now()), D();
            let e = Date.now() - _;
            h.default.forEach(T.channels, (t, n) => {
              let { lastActionTime: i } = t;
              i < e && delete T.channels[n];
            });
          },
          MESSAGE_CREATE: function (e) {
            if (
              e.optimistic ||
              e.isPushNotification ||
              e.message.author?.id !== r.default.getId() ||
              !y(e.channelId)
            )
              return !1;
            let t = v(e.channelId);
            (t.lastActionTime = Date.now()), t.numSends++;
          },
        }),
        R = L;
    },
    648427(e, t, n) {
      n.d(t, { A: () => g }), n(667532);
      var i = n(17928),
        l = n(228366),
        s = n(95701),
        r = n(734057),
        a = n(696451),
        u = n(71393);
      let o = [],
        d = new Set(),
        c = [],
        h = new Set();
      function A(e) {
        let { channelId: t, history: n, historySet: i } = e;
        if (i.has(t)) {
          let e = n.filter((e) => e !== t);
          return (
            e.unshift(t),
            { didChange: !0, history: e, historySet: new Set([...e]) }
          );
        }
        let l = [t, ...n],
          s = new Set(i);
        return (s.add(t), l.length > 10)
          ? ((l.length = 10),
            { didChange: !0, history: l, historySet: new Set([...l]) })
          : { didChange: !0, history: l, historySet: s };
      }
      class f extends i.Ay.PersistedStore {
        static displayName = "RecentVoiceChannelStore";
        static persistKey = "RecentVoiceChannelStore";
        static migrations = [
          (e) =>
            null == e || "object" != typeof e
              ? { voiceChannelHistory: [], textChannelHistory: [] }
              : {
                  voiceChannelHistory:
                    e.voiceChannelHistory ?? e.channelHistory ?? [],
                  textChannelHistory: e.textChannelHistory ?? [],
                },
        ];
        initialize(e) {
          this.waitFor(a.Ay, u.A, r.A),
            (o = e?.voiceChannelHistory ?? []),
            (c = e?.textChannelHistory ?? []),
            (d = new Set([...o])),
            (h = new Set([...c]));
        }
        getState() {
          return { voiceChannelHistory: o, textChannelHistory: c };
        }
        getVoiceChannelHistory() {
          return o;
        }
        getTextChannelHistory() {
          return c;
        }
      }
      let g = new f(l.h, {
        POST_CONNECTION_OPEN: function () {
          (d = new Set([...o])), (h = new Set([...c]));
        },
        VOICE_CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          if (null == t || !r.A.getChannel(t)?.isVocal()) return !1;
          let n = A({ channelId: t, history: o, historySet: d });
          return (o = n.history), (d = n.historySet), n.didChange;
        },
        CHANNEL_SELECT: function (e) {
          let { channelId: t } = e;
          if (null == t) return !1;
          let n = r.A.getChannel(t);
          if (null == n || n.isVocal() || n.isPrivate() || !(0, s.ke)(n.type))
            return !1;
          let i = A({ channelId: t, history: c, historySet: h });
          return (c = i.history), (h = i.historySet), i.didChange;
        },
      });
    },
    240516(e, t, n) {
      n.d(t, { u: () => l });
      var i,
        l =
          (((i = {})[(i.HIGH_AFFINITY_MINIMUM = 0.1634)] =
            "HIGH_AFFINITY_MINIMUM"),
          (i[(i.MINIMUM_GUILD_AFFINITY = 0.001)] = "MINIMUM_GUILD_AFFINITY"),
          (i[(i.MINIMUM_USER_AFFINITY = 0.0028)] = "MINIMUM_USER_AFFINITY"),
          (i[(i.FRIEND_BASE_COMMUNICATION_AFFINITY = 0.4)] =
            "FRIEND_BASE_COMMUNICATION_AFFINITY"),
          i);
    },
    185657(e, t, n) {
      let i;
      n.d(t, { A: () => x, j: () => N }), n(321073);
      var l,
        s = n(17928),
        r = n(713402),
        a = n(228366),
        u = n(870391),
        o = n(427358),
        d = n(734057),
        c = n(290863),
        h = n(994500),
        A = n(309010),
        f = n(461213),
        g = n(287809),
        E = n(977997),
        I = n(562153),
        S = n(914853),
        _ = n(956753),
        T = n(406595),
        C = n(70191),
        m = n(240516),
        p = n(652215),
        N =
          (((l = {}).FRIEND_REQUESTS = "FRIEND_REQUESTS"),
          (l.SUGGESTIONS = "SUGGESTIONS"),
          (l.SAME_ACTIVITY = "SAME_ACTIVITY"),
          (l.ACTIVITIES = "ACTIVITIES"),
          (l.IN_GAME = "IN_GAME"),
          (l.ONLINE = "ONLINE"),
          (l.OFFLINE = "OFFLINE"),
          l);
      let M = new r.J(
        function (e) {
          if ("FRIEND_REQUEST" === e.category) return ["FRIEND_REQUESTS"];
          if ("SUGGESTION" === e.category) return ["SUGGESTIONS"];
          let t = [];
          for (let n of (null != e.activityCategory &&
            t.push(e.activityCategory),
          e.groupIds))
            t.push(`GROUP:${n}`);
          return t;
        },
        function (e) {
          return e.sortKey;
        },
      );
      function D(e, t) {
        return String(
          Math.floor(Math.max(0, Math.min(e, Number("9".repeat(t))))),
        ).padStart(t, "0");
      }
      function v(e) {
        return D(1e6 - Math.max(0, Math.min(1e6, Math.round(1e6 * e))), 7);
      }
      let y = new Map();
      function U() {
        let e = new Map();
        for (let t of u.A.getGroups())
          for (let n of t.userIds) {
            let i = e.get(n);
            null == i && ((i = []), e.set(n, i)), i.push(t.id);
          }
        y = e;
      }
      function O() {
        let e = f.A.getPrimaryActivity();
        i = e?.application_id;
      }
      function L(e) {
        return (
          e.type === p.$pd.PLAYING ||
          e.type === p.$pd.COMPETING ||
          e.type === p.$pd.WATCHING ||
          e.type === p.$pd.STREAMING
        );
      }
      function R(e) {
        let t = (function (e) {
          let t = g.default.getUser(e);
          if (null == t) return null;
          let n = h.A.getRelationshipType(e),
            l = n === p.eA$.PENDING_INCOMING || n === p.eA$.PENDING_OUTGOING,
            s = h.A.isFriend(e),
            r = c.A.getActivities(e),
            a = h.A.getNickname(e),
            u = o.A.getUserAffinity(e)?.communicationProbability ?? 0;
          return l
            ? (function (e) {
                var t, n;
                let {
                    userId: i,
                    user: l,
                    activities: s,
                    nickname: r,
                    relationshipType: a,
                  } = e,
                  u = h.A.getSince(i),
                  o = null != u ? new Date(u).getTime() : 0;
                return {
                  id: i,
                  userId: i,
                  user: l,
                  activities: s,
                  nickname: r,
                  relationshipType: a,
                  category: "FRIEND_REQUEST",
                  activityCategory: null,
                  groupIds: [],
                  sortKey:
                    ((t = Number.isFinite(o) ? o : 0),
                    (n = i),
                    `REQ\0${D(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(t))), 13)}\0${n}`),
                };
              })({
                userId: e,
                user: t,
                activities: r,
                nickname: a,
                relationshipType: n,
              })
            : s
              ? (function (e) {
                  let t,
                    n,
                    l,
                    s,
                    r,
                    a,
                    u,
                    o,
                    h,
                    {
                      userId: g,
                      user: _,
                      activities: m,
                      nickname: N,
                      affinity: M,
                    } = e,
                    { category: D, displayActivities: U } =
                      ((t = f.A.getPrimaryActivity()),
                      (n = i),
                      (l = t?.name != null && null != n),
                      (s = c.A.getStatus(g)),
                      (r = E.A.getVoiceStateForUser(g)),
                      (a = r?.channelId != null),
                      (o = (u = m.filter(L)).filter(C.A)),
                      (h = u.filter((e) => e.application_id === n)),
                      l && h.length > 0
                        ? { category: "SAME_ACTIVITY", displayActivities: h }
                        : o.length > 0
                          ? { category: "IN_GAME", displayActivities: o }
                          : a
                            ? { category: "ACTIVITIES", displayActivities: m }
                            : s === p.clD.ONLINE ||
                                s === p.clD.IDLE ||
                                s === p.clD.DND
                              ? { category: "ONLINE", displayActivities: u }
                              : { category: "OFFLINE", displayActivities: u }),
                    O = "IN_GAME" === D ? (U[0]?.name ?? null) : null,
                    R = y.get(g) ?? [],
                    [w] = T.A.isFavorite(S.x.FRIENDS, g),
                    P = A.A.getVoiceChannelId() ?? A.A.getChannelId(),
                    G = null != P ? d.A.getChannel(P)?.guild_id : null,
                    x = c.A.getStatus(g),
                    F = x === p.clD.ONLINE,
                    V = U.some(L),
                    b = x === p.clD.DND || x === p.clD.IDLE,
                    H = I.Ay.getName(G, P, _);
                  return {
                    id: g,
                    userId: g,
                    user: _,
                    activities: U,
                    nickname: N,
                    category: "FRIEND",
                    activityCategory: w ? null : D,
                    groupIds: R,
                    sortKey: (function (e) {
                      let {
                          isOnline: t,
                          hasDisplayableActivity: n,
                          isDndOrIdle: i,
                          activityCategory: l,
                          inGameActivityName: s,
                          affinity: r,
                          displayName: a,
                          userId: u,
                        } = e,
                        o = t ? "0" : "1",
                        d = n ? "0" : "1",
                        c = i ? "0" : "1",
                        h = a.toLowerCase();
                      if ("IN_GAME" === l) {
                        let e,
                          t =
                            (e = s?.trim().toLowerCase() ?? "").length > 0
                              ? e
                              : "￿";
                        return `FRD\0${o}\0${d}\0${c}\0${t}\0${v(r)}\0${h}\0${u}`;
                      }
                      return `FRD\0${o}\0${d}\0${c}\0${v(r)}\0${h}\0${u}`;
                    })({
                      isOnline: F,
                      hasDisplayableActivity: V,
                      isDndOrIdle: b,
                      activityCategory: D,
                      inGameActivityName: O,
                      affinity: M,
                      displayName: H,
                      userId: g,
                    }),
                  };
                })({
                  userId: e,
                  user: t,
                  activities: r,
                  nickname: a,
                  affinity: u,
                })
              : (function (e) {
                  let {
                    userId: t,
                    user: n,
                    activities: i,
                    nickname: l,
                    affinity: s,
                  } = e;
                  if (!(s > m.u.HIGH_AFFINITY_MINIMUM)) return null;
                  let r = E.A.getVoiceStateForUser(t),
                    a = r?.channelId,
                    u = null != a ? d.A.getChannel(a)?.guild_id : null,
                    o = i.length > 0 || null != a,
                    c = I.Ay.getName(u, a, n);
                  return {
                    id: t,
                    userId: t,
                    user: n,
                    activities: i,
                    nickname: l,
                    category: "SUGGESTION",
                    activityCategory: null,
                    groupIds: [],
                    sortKey: `SUG\0${o ? "0" : "1"}\0${v(s)}\0${c.toLowerCase()}\0${t}`,
                  };
                })({
                  userId: e,
                  user: t,
                  activities: r,
                  nickname: a,
                  affinity: u,
                });
        })(e);
        return null == t ? M.delete(e) : M.set(e, t);
      }
      function w() {
        M.clear(), U(), O();
        let e = !1;
        for (let [t, n] of h.A.getMutableRelationships().entries())
          (n === p.eA$.PENDING_INCOMING || n === p.eA$.PENDING_OUTGOING) &&
            (e = R(t) || e);
        for (let t of o.A.getUserAffinitiesMap().keys())
          h.A.isFriend(t) || (e = R(t) || e);
        for (let t of h.A.getFriendIDs()) e = R(t) || e;
        return e;
      }
      class P extends s.Ay.Store {
        static displayName = "FriendsWidgetFriendsStore";
        initialize() {
          this.waitFor(d.A, u.A, T.A, c.A, h.A, A.A, f.A, o.A, g.default, E.A),
            w();
        }
        getRows(e) {
          return [M.values(e), M.version];
        }
        getFriend(e) {
          return M.get(e);
        }
      }
      let G = (e) => (0, _.v$)(e, "FriendsWidgetFriendsStore"),
        x = new P(
          a.h,
          __OVERLAY__
            ? {}
            : {
                POST_CONNECTION_OPEN: G(w),
                OVERLAY_INITIALIZE: G(w),
                CACHE_LOADED: G(w),
                CACHE_LOADED_LAZY: G(w),
                FRIENDS_LIST_POPOUT_MOUNTED: G(w),
                OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: G(function (e) {
                  return e.tab === S.x.FRIENDS && R(e.targetId);
                }),
                PRESENCE_UPDATES: G(function (e) {
                  let t = !1;
                  for (let n of e.updates) {
                    let e = n.user?.id;
                    null != e && (t = R(e) || t);
                  }
                  return t;
                }),
                PRESENCES_REPLACE: G(function (e) {
                  let t = !1;
                  for (let n of e.presences) {
                    let e = n.user?.id;
                    null != e && (t = R(e) || t);
                  }
                  return t;
                }),
                ACTIVITY_METADATA_UPDATE: G(function (e) {
                  return R(e.userId);
                }),
                VOICE_STATE_UPDATES: G(function (e) {
                  let t = !1;
                  for (let n of e.voiceStates) t = R(n.userId) || t;
                  return t;
                }),
                VOICE_CHANNEL_SELECT: G(function (e) {
                  O();
                  let t = !1;
                  for (let e of h.A.getFriendIDs()) t = R(e) || t;
                  return t;
                }),
                RELATIONSHIP_ADD: G(function (e) {
                  return R(e.relationship.id);
                }),
                RELATIONSHIP_REMOVE: G(function (e) {
                  return R(e.relationship.id);
                }),
                RELATIONSHIP_UPDATE: G(function (e) {
                  return R(e.relationship.id);
                }),
                RELATIONSHIP_PENDING_INCOMING_REMOVED: G(function (e) {
                  let t = !1;
                  for (let e of M.values("FRIEND_REQUESTS", !0))
                    e.relationshipType === p.eA$.PENDING_INCOMING &&
                      (t = R(e.userId) || t);
                  return t;
                }),
                CREATE_FRIEND_GROUP: G(function (e) {
                  return U(), !1;
                }),
                DELETE_FRIEND_GROUP: G(function (e) {
                  U();
                  let t = !1;
                  for (let e of h.A.getFriendIDs()) t = R(e) || t;
                  return t;
                }),
                ADD_USERS_TO_GROUP: G(function (e) {
                  U();
                  let t = !1;
                  for (let n of e.userIds) t = R(n) || t;
                  return t;
                }),
                REMOVE_USERS_FROM_GROUP: G(function (e) {
                  U();
                  let t = !1;
                  for (let n of e.userIds) t = R(n) || t;
                  return t;
                }),
                LOAD_USER_AFFINITIES_V2_SUCCESS: G(function (e) {
                  let t = !1;
                  for (let e of o.A.getUserAffinitiesMap().keys())
                    t = R(e) || t;
                  return t;
                }),
                USER_UPDATE: G(function (e) {
                  return R(e.user.id);
                }),
                CURRENT_USER_UPDATE: G(function (e) {
                  O();
                  let t = !1;
                  for (let e of h.A.getFriendIDs()) t = R(e) || t;
                  return t;
                }),
                LOGOUT: G(function () {
                  let e = M.size() > 0;
                  return M.clear(), (i = void 0), (y = new Map()), e;
                }),
              },
        );
    },
    91868(e, t, n) {
      n.d(t, { A: () => O, Y: () => _ }), n(321073);
      var i,
        l = n(17928),
        s = n(713402),
        r = n(228366),
        a = n(174768),
        u = n(95701),
        o = n(734057),
        d = n(222823),
        c = n(994500),
        h = n(567761),
        A = n(935208),
        f = n(914853),
        g = n(956753),
        E = n(648427),
        I = n(315240),
        S = n(652215),
        _ =
          (((i = {}).ACTIVE_NOW = "ACTIVE_NOW"),
          (i.DMS = "DMS"),
          (i.RECENT_TEXT = "RECENT_TEXT"),
          i);
      let T = new s.J(
          function (e) {
            let t = [];
            return (
              e.isInActiveNow && t.push("ACTIVE_NOW"),
              e.isInDmsList && t.push("DMS"),
              e.isInRecentTextList && t.push("RECENT_TEXT"),
              t
            );
          },
          function (e) {
            return e.sortKey;
          },
        ),
        C = null,
        m = new Set();
      function p(e) {
        return String(
          Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(e))),
        ).padStart(13, "0");
      }
      function N(e) {
        let t = (function (e) {
          let t = o.A.getChannel(e);
          if (null == t) return null;
          let n = t.isPrivate(),
            i = !n && (0, u.ke)(t.type);
          if (!n && !i) return null;
          if (t.isDM()) {
            let e = t.getRecipientId?.();
            if (
              null != e &&
              c.A.getRelationshipType(e) === S.eA$.PENDING_INCOMING &&
              (c.A.isIgnored(e) || c.A.isSpam(e))
            )
              return null;
          }
          let l = I.A.hasActiveNowChannelId({ kind: I.u.Text, channelId: e }),
            s =
              i &&
              (a.A.getChannelHistory().includes(e) ||
                E.A.getTextChannelHistory().includes(e)),
            r = d.Ay.hasUnread(e) || d.Ay.getMentionCount(e) > 0,
            h =
              null != t.lastMessageId
                ? A.default.extractTimestamp(t.lastMessageId)
                : 0,
            f = (() => {
              var t;
              if (n) return `DM\0${p(h)}\0${e}`;
              if (l) {
                let n;
                return (
                  (t = I.A.getScoreForChannelId(e) ?? 0),
                  (n = Math.floor(Math.max(0, Math.min(0x2540be3ff, 1e6 * t)))),
                  `AN\0${String(0x2540be3ff - n).padStart(10, "0")}\0${e}`
                );
              }
              return `GT\0${r ? "0" : "1"}\0${p(h)}\0${e}`;
            })();
          return {
            id: e,
            channelId: e,
            isInActiveNow: l,
            isInDmsList: n,
            isInRecentTextList: s,
            hasUnread: r,
            lastActivityAtMs: h,
            sortKey: f,
          };
        })(e);
        return null == t ? T.delete(e) : T.set(e, t);
      }
      function M() {
        let e = I.A.getActiveNowChannelIds({ kind: I.u.Text }),
          t = new Set(e),
          n = !1;
        for (let t of e) n = N(t) || n;
        for (let e of [...T.values("ACTIVE_NOW")])
          t.has(e.channelId) || (n = N(e.channelId) || n);
        return (m = t), n;
      }
      function D() {
        T.clear(), (m = new Set());
        let e = !1;
        for (let t of h.default.getPrivateChannelIds()) e = N(t) || e;
        for (let t of a.A.getChannelHistory()) e = N(t) || e;
        for (let t of E.A.getTextChannelHistory()) e = N(t) || e;
        let t = I.A.getActiveNowChannelIds({ kind: I.u.Text });
        for (let n of ((m = new Set(t)), t)) e = N(n) || e;
        return e;
      }
      function v(e) {
        let t = o.A.getDMFromUserId(e);
        return null != t && N(t);
      }
      class y extends l.Ay.Store {
        static displayName = "FriendsWidgetMessagesStore";
        initialize() {
          this.waitFor(o.A, I.A, a.A, d.Ay, c.A, h.default, E.A), D();
        }
        getRows(e) {
          return [T.values(e), T.version];
        }
        getChannel(e) {
          return T.get(e);
        }
      }
      let U = (e) => (0, g.v$)(e, "FriendsWidgetMessagesStore"),
        O = new y(
          r.h,
          __OVERLAY__
            ? {}
            : {
                OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: U(function (e) {
                  return e.tab === f.x.MESSAGES && N(e.targetId);
                }),
                CHANNEL_SELECT: U(function (e) {
                  let t = e.channelId ?? null,
                    n = C;
                  C = t;
                  let i = !1;
                  null != n && (i = N(n) || i), null != t && (i = N(t) || i);
                  let l = M();
                  return i || l;
                }),
                MESSAGE_CREATE: U(function (e) {
                  if (e.optimistic) return !1;
                  let t = N(e.channelId),
                    n = M();
                  return t || n;
                }),
                MESSAGE_ACK: U(function (e) {
                  return N(e.channelId);
                }),
                TYPING_START: U(function (e) {
                  var t = e.channelId;
                  let n = new Set(
                      I.A.getActiveNowChannelIds({ kind: I.u.Text }),
                    ),
                    i = !1;
                  for (let e of ((i = N(t) || i), n))
                    m.has(e) || (i = N(e) || i);
                  for (let e of m) n.has(e) || (i = N(e) || i);
                  return (m = n), i;
                }),
                RTC_CONNECTION_STATE: U(function () {
                  return M();
                }),
                VOICE_CHANNEL_SELECT: U(function () {
                  return M();
                }),
                USER_GUILD_SETTINGS_CHANNEL_UPDATE: U(M),
                USER_GUILD_SETTINGS_GUILD_UPDATE: U(M),
                USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: U(M),
                RELATIONSHIP_ADD: U(function (e) {
                  return v(e.relationship.id);
                }),
                RELATIONSHIP_REMOVE: U(function (e) {
                  return v(e.relationship.id);
                }),
                RELATIONSHIP_UPDATE: U(function (e) {
                  return v(e.relationship.id);
                }),
                RELATIONSHIP_PENDING_INCOMING_REMOVED: U(function (e) {
                  let t = !1;
                  for (let e of h.default.getPrivateChannelIds()) {
                    let n = o.A.getChannel(e);
                    null != n && n.isDM() && (t = N(e) || t);
                  }
                  return t;
                }),
                OVERLAY_INITIALIZE: U(D),
                POST_CONNECTION_OPEN: U(D),
                CACHE_LOADED: U(D),
                CACHE_LOADED_LAZY: U(D),
                FRIENDS_LIST_POPOUT_MOUNTED: U(D),
                LOGOUT: U(function () {
                  let e = T.size() > 0;
                  return T.clear(), (C = null), (m = new Set()), e;
                }),
              },
        );
    },
    315240(e, t, n) {
      n.d(t, { A: () => ea, u: () => F }), n(321073);
      var i,
        l,
        s = n(17928),
        r = n(228366),
        a = n(427358),
        u = n(95701),
        o = n(734057),
        d = n(776096),
        c = n(576705),
        h = n(763827),
        A = n(222823),
        f = n(543465),
        g = n(287809),
        E = n(977997),
        I = n(927813),
        S = n(935208),
        _ = n(914853),
        T = n(41984),
        C = n(956753),
        m = n(833551),
        p =
          (((i = {}).GuildText = "GUILD_TEXT"),
          (i.GuildVoice = "GUILD_VOICE"),
          (i.DirectMessage = "DIRECT_MESSAGE"),
          (i.GroupDM = "GROUP_DM"),
          i);
      function N(e, t, n, i) {
        let l = 0;
        for (let [s, r] of e.entries()) {
          let e = i(s);
          if (e <= 0) continue;
          let a = e * v(r, t, n);
          a > l && (l = a);
        }
        return l;
      }
      class M {
        signals;
        providers;
        lastActivityAtMs;
        scoreInfo = { rawSignalsScore: {} };
        constructor(e, t) {
          (this.signals = e),
            (this.providers = t),
            (this.lastActivityAtMs = Date.now());
        }
        _computeMentionScore(e) {
          if (this.signals.mentionCount <= 0) return 0;
          let t = v(this.signals.lastDirectMentionAtMs, e, 6e5);
          this.scoreInfo.rawSignalsScore.lastDirectMentionAtMs = t;
          let n = v(this.signals.lastRoleMentionAtMs, e, 6e5);
          return (
            (this.scoreInfo.rawSignalsScore.lastRoleMentionAtMs = n),
            2 * Math.min(this.signals.mentionCount, 3) * Math.max(t, n)
          );
        }
        _computeMessageScore(e) {
          let t;
          if (
            ((t =
              0 +
              (function (e, t) {
                if (null == e) return 0;
                let n = t - e;
                return n <= 0 || n <= 18e4
                  ? 0.8
                  : n >= 6e5
                    ? 0
                    : 0.8 * (1 - (n - 18e4) / 42e4);
              })(this.signals.lastMessageAtMs, e)),
            this.signals.unread)
          ) {
            let n = v(this.signals.lastUnreadAtMs, e, 18e5);
            (t += 0.8 * n), (this.scoreInfo.rawSignalsScore.lastUnreadAtMs = n);
          }
          let n = N(
            this.signals.recentMessageAuthorIds,
            e,
            6e5,
            this.providers.getNormalizedUserAffinity,
          );
          return (
            (this.scoreInfo.rawSignalsScore.recentMessageAuthorIds = n),
            (t += 1.2 * n)
          );
        }
        _computeActivityScore(e) {
          if (!this.signals.isTyping) return 0;
          let t = N(
            this.signals.typingUserIdsWithTimestampMs,
            e,
            15e3,
            this.providers.getNormalizedUserAffinity,
          );
          return (
            (this.scoreInfo.rawSignalsScore.typingUserIdsWithTimestampMs = t),
            1.5 * t
          );
        }
        getScoreWithoutPenalty(e) {
          let t = this._computeActivityScore(e),
            n = this._computeMentionScore(e),
            i = this._computeMessageScore(e);
          return (
            (this.scoreInfo.activityScore = t),
            (this.scoreInfo.mentionScore = n),
            (this.scoreInfo.messageScore = i),
            t + n + i
          );
        }
        computeScore(e) {
          let t = O(e, this.lastActivityAtMs);
          return (
            (this.scoreInfo.penalty = t),
            this.getScoreWithoutPenalty(e) * (1 - t)
          );
        }
        pruneSignals(e) {
          if (this.signals.typingUserIdsWithTimestampMs.size > 0) {
            let t = new Map();
            for (let [
              n,
              i,
            ] of this.signals.typingUserIdsWithTimestampMs.entries())
              e - i <= 15e3 && t.set(n, i);
            let n = Array.from(t.keys());
            this.signals = {
              ...this.signals,
              typingUserIdsWithTimestampMs: t,
              typingUserIds: n,
              isTyping: n.length > 0,
            };
          }
          if (this.signals.recentMessageAuthorIds.size > 0) {
            let t = new Map();
            for (let [n, i] of this.signals.recentMessageAuthorIds.entries())
              e - i <= 6e5 && t.set(n, i);
            let n =
              null != this.signals.recentMessageAuthorId &&
              t.has(this.signals.recentMessageAuthorId)
                ? this.signals.recentMessageAuthorId
                : null;
            this.signals = {
              ...this.signals,
              recentMessageAuthorIds: t,
              recentMessageAuthorId: n,
            };
          }
        }
        updateSignals(e, t) {
          (this.lastActivityAtMs = t), (this.signals = e);
        }
      }
      class D {
        signals;
        providers;
        lastActivityAtMs;
        scoreInfo = { rawSignalsScore: {} };
        _textualScore;
        constructor(e, t) {
          (this.signals = e),
            (this.providers = t),
            (this._textualScore = new M(e, t)),
            (this.lastActivityAtMs = Date.now());
        }
        _computeTextualScore(e) {
          let t = this._textualScore.getScoreWithoutPenalty(e);
          return (
            (this.scoreInfo = {
              ...this.scoreInfo,
              ...this._textualScore.scoreInfo,
              rawSignalsScore: {
                ...this.scoreInfo.rawSignalsScore,
                ...this._textualScore.scoreInfo.rawSignalsScore,
              },
            }),
            y(t, 2)
          );
        }
        _computeVoiceUsersScore(e) {
          if (0 === this.signals.voiceUsersWithJoinTimestampMs.size) return 0;
          let t = N(
            this.signals.voiceUsersWithJoinTimestampMs,
            e,
            6e5,
            this.providers.getNormalizedUserAffinity,
          );
          return (
            (this.scoreInfo.rawSignalsScore.voiceUsersWithJoinTimestampMs = t),
            1.25 * t
          );
        }
        _computeVoiceActivityScore(e) {
          let t = 0;
          null != this.signals.lastVoiceJoinAtMs &&
            (t = Math.max(t, v(this.signals.lastVoiceJoinAtMs, e, 12e4))),
            (this.scoreInfo.rawSignalsScore.lastVoiceJoinAtMs = t);
          let n = N(
            this.signals.lastUnmuteActivityAtMs,
            e,
            12e4,
            this.providers.getNormalizedUserAffinity,
          );
          return (
            (this.scoreInfo.rawSignalsScore.lastUnmuteActivityAtMs = n),
            (n = Math.max(
              n,
              N(
                this.signals.lastUndeafenActivityAtMs,
                e,
                12e4,
                this.providers.getNormalizedUserAffinity,
              ),
            )),
            (this.scoreInfo.rawSignalsScore.lastUndeafenActivityAtMs = n),
            1.25 * (n + t)
          );
        }
        _computeStreamUsersScore(e) {
          let t = N(
            this.signals.streamUsersWithTimestampMs,
            e,
            6e5,
            this.providers.getNormalizedUserAffinity,
          );
          this.scoreInfo.rawSignalsScore.streamUsersWithTimestampMs = t;
          let n = N(
            this.signals.videoUsersWithTimestampMs,
            e,
            6e5,
            this.providers.getNormalizedUserAffinity,
          );
          return (
            (this.scoreInfo.rawSignalsScore.videoUsersWithTimestampMs = n),
            2 * (t + n)
          );
        }
        computeScore(e) {
          let t = this._computeTextualScore(e),
            n = this._computeVoiceUsersScore(e),
            i = this._computeVoiceActivityScore(e),
            l = this._computeStreamUsersScore(e),
            s = O(e, this.lastActivityAtMs);
          return (
            (this.scoreInfo.penalty = s),
            (this.scoreInfo.voiceUsersScore = n),
            (this.scoreInfo.voiceActivityScore = i),
            (this.scoreInfo.streamUsersScore = l),
            (t + n + i + l) * (1 - s)
          );
        }
        pruneSignals(e) {
          this._textualScore.pruneSignals(e);
          let t = (t) => {
            if (0 === t.size) return t;
            let n = new Map();
            for (let [i, l] of t.entries()) e - l <= 12e4 && n.set(i, l);
            return n;
          };
          this.signals = {
            ...this.signals,
            lastUnmuteActivityAtMs: t(this.signals.lastUnmuteActivityAtMs),
            lastUndeafenActivityAtMs: t(this.signals.lastUndeafenActivityAtMs),
          };
        }
        updateSignals(e, t) {
          this._textualScore.updateSignals(e, t),
            (this.signals = e),
            (this.lastActivityAtMs = t);
        }
      }
      function v(e, t, n) {
        if (null == e) return 0;
        let i = t - e;
        return i <= 0 ? 1 : i >= n ? 0 : 1 - i / n;
      }
      function y(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return e <= 0 ? 0 : e >= t ? t : e;
      }
      function U(e) {
        let t = e.getGuildId?.() ?? null;
        if (e.isDM?.()) {
          let t = e.getRecipientId?.() ?? null;
          return {
            channelId: e.id,
            kind: "DIRECT_MESSAGE",
            guildId: null,
            recipientIds: null != t ? [t] : [],
          };
        }
        return e.isGroupDM?.() || e.isMultiUserDM?.()
          ? {
              channelId: e.id,
              kind: "GROUP_DM",
              guildId: null,
              recipientIds: e.recipients ?? [],
            }
          : null != t
            ? {
                channelId: e.id,
                kind: e.isVocal?.() ? "GUILD_VOICE" : "GUILD_TEXT",
                guildId: t,
                recipientIds: [],
              }
            : null;
      }
      function O(e, t) {
        let n = e - t;
        return n <= 6e5 ? 0 : n >= 18e5 ? 1 : (n - 6e5) / 12e5;
      }
      function L(e, t) {
        let n = e.guildId;
        if (null == n) return 0;
        let i = 0;
        return (
          null != t.voiceGuildId && n === t.voiceGuildId && (i += 1),
          null != t.mostRecentGuildId &&
            n === t.mostRecentGuildId &&
            (i += 0.4),
          i
        );
      }
      function R(e, t) {
        return (
          0.8 *
          (null != e.guildId ? y(t.getNormalizedGuildAffinity(e.guildId)) : 0)
        );
      }
      class w {
        candidate;
        signals;
        _activeNowScoreSource;
        _score = 0;
        constructor(e, t, n) {
          (this.candidate = e),
            (this.signals = t),
            "GUILD_VOICE" === e.kind || "GROUP_DM" === e.kind
              ? (this._activeNowScoreSource = new D(t, n))
              : (this._activeNowScoreSource = new M(t, n)),
            this.recomputeScore(Date.now());
        }
        get score() {
          return this._score;
        }
        get lastScoreInfo() {
          return this._activeNowScoreSource.scoreInfo;
        }
        get prunable() {
          return this._score <= 0;
        }
        recomputeScore(e) {
          return (
            (this._score = this._activeNowScoreSource.computeScore(e)),
            this._score
          );
        }
        prepareForUpdate(e) {
          return (
            this.candidate.kind,
            this._activeNowScoreSource.pruneSignals(e),
            (this.signals = this._activeNowScoreSource.signals),
            this.signals
          );
        }
        updateSignalsAndRescore(e, t) {
          return (
            this.prepareForUpdate(t),
            (this.signals = { ...this.signals, ...e }),
            this.candidate.kind,
            this._activeNowScoreSource.updateSignals(this.signals, t),
            this.recomputeScore(t)
          );
        }
      }
      var P = n(406595),
        G = n(240516),
        x = n(652215),
        F = (((l = {}).Text = "TEXT"), (l.Voice = "VOICE"), l);
      class V {
        _maxItems;
        _channelsByChannelId = new Map();
        _sortedScoreIndex = [];
        _sortedChannelIdSet = new Set();
        _isDirty = !1;
        constructor(e) {
          this._maxItems = e;
        }
        get size() {
          return this._channelsByChannelId.size;
        }
        getChannel(e) {
          return this._channelsByChannelId.get(e) ?? null;
        }
        upsert(e) {
          this._channelsByChannelId.set(e.candidate.channelId, e),
            (this._isDirty = !0);
        }
        delete(e) {
          this._channelsByChannelId.has(e) &&
            (this._channelsByChannelId.delete(e), (this._isDirty = !0));
        }
        applyBatch(e) {
          e(), (this._isDirty = !0);
        }
        rebuildSortedIndexIfDirty(e) {
          if (!this._isDirty) return;
          let t = [];
          for (let [n, i] of this._channelsByChannelId.entries()) {
            let l = e(i);
            l > 0 && t.push({ channelId: n, score: l });
          }
          t.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : e.channelId < t.channelId
                ? -1
                : 1,
          );
          let n = t.slice(0, this._maxItems);
          (this._sortedScoreIndex = n),
            (this._sortedChannelIdSet = new Set(n.map((e) => e.channelId))),
            (this._isDirty = !1);
        }
        getSortedChannels() {
          let e = [];
          for (let { channelId: t } of this._sortedScoreIndex) {
            let n = this._channelsByChannelId.get(t);
            null != n && e.push(n);
          }
          return e;
        }
        getSortedChannelIds() {
          return this._sortedScoreIndex.map((e) => e.channelId);
        }
        hasSortedChannelId(e) {
          return this._sortedChannelIdSet.has(e);
        }
        clear() {
          this._channelsByChannelId.clear(),
            (this._sortedScoreIndex = []),
            this._sortedChannelIdSet.clear(),
            (this._isDirty = !1);
        }
      }
      let b = !1,
        H = null,
        k = !1,
        Y = new V(100),
        j = new V(100);
      function W() {
        return m.default.isAnyOverlayRendering();
      }
      function J(e) {
        return (!!e || !k) && b !== e && ((b = e), !0);
      }
      function $() {
        let e = h.A.getChannelId();
        if (null == e) return null;
        let t = o.A.getChannel(e);
        return t?.getGuildId?.() ?? null;
      }
      function B(e) {
        let {
          isAlreadyTracked: t,
          guildId: n,
          updatingUserId: i,
          providers: l,
        } = e;
        return (
          !!(
            t ||
            (function (e, t) {
              if (null == e) return !1;
              if (null != H && e === H) return !0;
              let n = $();
              return (
                (null != n && e === n) ||
                t.getNormalizedGuildAffinity(e) > G.u.MINIMUM_GUILD_AFFINITY
              );
            })(n, l)
          ) ||
          !!(
            null != i &&
            l.getNormalizedUserAffinity(i) > G.u.MINIMUM_USER_AFFINITY
          )
        );
      }
      function z(e) {
        let t = d.A.affinities,
          n = 0;
        for (let e = 0; e < t.length; e += 1) {
          let i = t[e].score ?? 0;
          i > n && (n = i);
        }
        return (
          n <= 0 && (n = 1),
          {
            getNormalizedGuildAffinity: (e) => {
              let t = (d.A.getGuildAffinity(e)?.score ?? 0) / n;
              return t <= 0 ? 0 : t >= 1 ? 1 : t;
            },
            getNormalizedUserAffinity: (t) => {
              let n = a.A.getUserAffinity(t);
              if (n?.isFriend) return G.u.FRIEND_BASE_COMMUNICATION_AFFINITY;
              let i = n?.communicationProbability ?? 0,
                l = e.includeVcProbability
                  ? Math.max(i, n?.vcProbability ?? 0)
                  : i;
              return l <= 0 ? 0 : l >= 1 ? 1 : l;
            },
          }
        );
      }
      function Z(e, t) {
        let n = L(e.candidate, { voiceGuildId: $(), mostRecentGuildId: H });
        return (
          e.score *
          (1 + n) *
          (e.candidate.kind === p.DirectMessage ||
          e.candidate.kind === p.GroupDM
            ? 1
            : 1 + R(e.candidate, t))
        );
      }
      function K() {
        let e = z({ includeVcProbability: !1 }),
          t = z({ includeVcProbability: !0 });
        Y.rebuildSortedIndexIfDirty((t) => Z(t, e)),
          j.rebuildSortedIndexIfDirty((e) => Z(e, t));
      }
      function Q() {
        return {
          mentionCount: 0,
          lastDirectMentionAtMs: null,
          lastRoleMentionAtMs: null,
          unread: !1,
          lastUnreadAtMs: null,
          lastMessageAtMs: null,
          recentMessageAuthorIds: new Map(),
          recentMessageAuthorId: null,
          typingUserIdsWithTimestampMs: new Map(),
          typingUserIds: [],
          isTyping: !1,
          unreadOrMentionAgeMs: null,
        };
      }
      function X() {
        return {
          ...Q(),
          voiceUsersWithJoinTimestampMs: new Map(),
          lastVoiceJoinAtMs: null,
          lastUnmuteActivityAtMs: new Map(),
          lastUndeafenActivityAtMs: new Map(),
          streamUsersWithTimestampMs: new Map(),
          videoUsersWithTimestampMs: new Map(),
        };
      }
      function q(e, t) {
        let n = o.A.getChannel(e);
        if (null == n) return !1;
        let [i] = P.A.isFavorite(_.x.MESSAGES, e);
        if (i || n.isPrivate?.()) return !1;
        let l = n.getGuildId?.() ?? null;
        return (
          !(null == l || f.Ay.isGuildOrCategoryOrChannelMuted(l, n.id)) &&
          !!c.A.can(x.xBc.READ_MESSAGE_HISTORY, n) &&
          ("TEXT" === t ? (0, u.ke)(n.type) : n.isVocal?.() === !0)
        );
      }
      function ee(e, t, n) {
        if (!q(e, "TEXT")) return null;
        let i = o.A.getChannel(e);
        if (null == i) return null;
        let l = U({
          id: i.id,
          getGuildId: () => i.getGuildId?.() ?? null,
          isDM: () => i.isDM?.() ?? !1,
          isGroupDM: () => i.isGroupDM?.() ?? !1,
          isMultiUserDM: () => i.isMultiUserDM?.() ?? !1,
          recipients: i.recipients ?? [],
          isVocal: () => i.isVocal?.() ?? !1,
        });
        if (null == l || l.kind !== p.GuildText) return null;
        let s = Y.getChannel(e);
        if (null != s) return s;
        let r = new w(l, t, n);
        return Y.upsert(r), r;
      }
      function et(e, t, n) {
        if (!q(e, "VOICE")) return null;
        let i = o.A.getChannel(e);
        if (null == i) return null;
        let l = U({
          id: i.id,
          getGuildId: () => i.getGuildId?.() ?? null,
          isDM: () => i.isDM?.() ?? !1,
          isGroupDM: () => i.isGroupDM?.() ?? !1,
          isMultiUserDM: () => i.isMultiUserDM?.() ?? !1,
          recipients: i.recipients ?? [],
          isVocal: () => i.isVocal?.() ?? !1,
        });
        if (null == l || l.kind !== p.GuildVoice) return null;
        let s = j.getChannel(e);
        if (null != s) return s;
        let r = new w(l, t, n);
        return j.upsert(r), r;
      }
      let en = 30 * I.A.Millis.MINUTE;
      function ei() {
        let e = Date.now(),
          t = e - en,
          n = d.A.affinities
            .filter((e) => (e.score ?? 0) > 0)
            .slice(0, 3)
            .map((e) => e.guildId),
          i = $();
        null == i || n.includes(i) || n.push(i);
        let l = z({ includeVcProbability: !1 }),
          s = z({ includeVcProbability: !0 });
        for (let i of n) {
          let n = o.A.getMutableGuildChannelsForGuild(i);
          for (let i in n) {
            let r = n[i];
            if (null != r) {
              if ((0, u.ke)(r.type)) {
                let e = r.lastMessageId;
                if (null == e) continue;
                let n = S.default.extractTimestamp(e);
                if (n < t || null != Y.getChannel(i)) continue;
                let s = Q();
                (s.lastMessageAtMs = n),
                  (s.unread = A.Ay.hasUnread(i)),
                  (s.mentionCount = A.Ay.getMentionCount(i)),
                  s.unread && (s.lastUnreadAtMs = n),
                  s.mentionCount > 0 && (s.lastDirectMentionAtMs = n),
                  ee(i, s, l);
              }
              if (r.isVocal()) {
                if (null != j.getChannel(i)) continue;
                let t = Object.entries(E.A.getVoiceStatesForChannel(i));
                if (0 === t.length) continue;
                let n = new Map();
                for (let [i] of t) n.set(i, e);
                et(
                  i,
                  {
                    ...X(),
                    voiceUsersWithJoinTimestampMs: n,
                    lastVoiceJoinAtMs: e,
                  },
                  s,
                );
              }
            }
          }
        }
        K();
      }
      function el(e) {
        let t = o.A.getChannel(e);
        if (null == t) return !1;
        let n = t.getGuildId?.() ?? null;
        if (null == n || !f.Ay.isGuildOrCategoryOrChannelMuted(n, e)) return !1;
        let i = null != Y.getChannel(e),
          l = null != j.getChannel(e);
        return i && Y.delete(e), l && j.delete(e), i || l;
      }
      class es extends s.Ay.Store {
        static displayName = "OverlayActiveNowStore";
        initialize() {
          this.waitFor(
            o.A,
            d.A,
            P.A,
            m.default,
            c.A,
            A.Ay,
            h.A,
            a.A,
            g.default,
            f.Ay,
            E.A,
          );
        }
        getActiveNowChannelByChannelId(e, t) {
          return "TEXT" === t ? Y.getChannel(e) : j.getChannel(e);
        }
        getActiveNowChannels(e) {
          let { kind: t } = e;
          return "VOICE" === t ? j.getSortedChannels() : Y.getSortedChannels();
        }
        getActiveNowChannelIds(e) {
          let { kind: t } = e;
          return "VOICE" === t
            ? j.getSortedChannelIds()
            : Y.getSortedChannelIds();
        }
        hasActiveNowChannelId(e) {
          let { kind: t, channelId: n } = e;
          return "VOICE" === t
            ? j.hasSortedChannelId(n)
            : Y.hasSortedChannelId(n);
        }
        getScoreForChannelId(e) {
          let t = Y.getChannel(e) ?? j.getChannel(e);
          if (null == t) return null;
          let n = z({
            includeVcProbability: t.candidate.kind === p.GuildVoice,
          });
          return Z(t, n);
        }
        getScoreBreakdownForChannelId(e) {
          let t = Y.getChannel(e) ?? j.getChannel(e) ?? null;
          if (null == t) return null;
          let n = t.candidate.kind === p.GuildVoice ? "VOICE" : "TEXT",
            i = z({ includeVcProbability: t.candidate.kind === p.GuildVoice }),
            l = L(t.candidate, { voiceGuildId: $(), mostRecentGuildId: H }),
            s =
              t.candidate.kind === p.DirectMessage ||
              t.candidate.kind === p.GroupDM,
            r = s ? 0 : R(t.candidate, i),
            a = t.score;
          return {
            channelId: e,
            kind: n,
            baseScore: a,
            contextBoost: l,
            guildAffinity:
              null != t.candidate.guildId
                ? i.getNormalizedGuildAffinity(t.candidate.guildId)
                : 0,
            finalScore: a * (1 + l) * (s ? 1 : 1 + r),
            scoreInfo: t.lastScoreInfo,
          };
        }
      }
      let er = (e) => (0, C.v$)(e, "OverlayActiveNowStore"),
        ea = new es(
          r.h,
          __OVERLAY__
            ? {}
            : {
                OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: er(function (e) {
                  if (e.tab !== _.x.MESSAGES) return !1;
                  let t = e.targetId;
                  if (e.isFavorite) {
                    let e = null != Y.getChannel(t),
                      n = null != j.getChannel(t);
                    return e && Y.delete(t), n && j.delete(t), e || n;
                  }
                  return !1;
                }),
                OVERLAY_MOUNTED: er(function (e) {
                  return J(!0), ei(), !0;
                }),
                OVERLAY_UPDATE_OVERLAY_METHOD: er(function (e) {
                  let { overlayMethod: t } = e;
                  return t === T.Ue.OutOfProcess ||
                    t === T.Ue.OutOfProcessLimitedInteraction
                    ? (J(!0), K(), !0)
                    : !W() && J(!1);
                }),
                OVERLAY_CRASHED: er(function (e) {
                  return !W() && J(!1);
                }),
                OVERLAY_SET_INPUT_LOCKED: er(function (e) {
                  return !e.locked && (J(!0), K(), !0);
                }),
                FRIENDS_LIST_POPOUT_MOUNTED: er(function () {
                  return (k = !0), J(!0), ei(), !0;
                }),
                MESSAGE_CREATE: er(function (e) {
                  if (!b || e.optimistic) return !1;
                  let t = g.default.getCurrentUser()?.id ?? null,
                    n = e.message?.author?.id ?? null;
                  if (null == t || null == n || n === t) return !1;
                  let i = o.A.getChannel(e.channelId);
                  if (null == i || i.isPrivate() || !(0, u.ke)(i.type))
                    return !1;
                  let l = (function (e) {
                      let t = e.timestamp;
                      if (null == t) return Date.now();
                      let n = new Date(t).getTime();
                      return Number.isFinite(n) ? n : Date.now();
                    })(e.message),
                    s = z({ includeVcProbability: !1 }),
                    r = i.getGuildId?.() ?? null;
                  if (
                    !B({
                      isAlreadyTracked: null != Y.getChannel(e.channelId),
                      guildId: r,
                      updatingUserId: n,
                      providers: s,
                    })
                  )
                    return !1;
                  let a = ee(e.channelId, Q(), s);
                  if (null == a) return !1;
                  let d = (e.message?.mentions ?? []).some((e) => e?.id === t),
                    c = e.message?.mention_roles,
                    h = Array.isArray(c) && c.length > 0,
                    A = a.prepareForUpdate(l),
                    f = new Map(A.recentMessageAuthorIds);
                  f.set(n, l);
                  let E = {
                    lastMessageAtMs: l,
                    unread: !0,
                    lastUnreadAtMs: l,
                    recentMessageAuthorId: n,
                    recentMessageAuthorIds: f,
                  };
                  return (
                    (d || h) &&
                      ((E.mentionCount = Math.max(A.mentionCount, +!!d + +!!h)),
                      d && (E.lastDirectMentionAtMs = l),
                      h && (E.lastRoleMentionAtMs = l)),
                    a.updateSignalsAndRescore(E, l),
                    a.prunable && Y.delete(e.channelId),
                    K(),
                    !0
                  );
                }),
                MESSAGE_ACK: er(function (e) {
                  if (!b) return !1;
                  let t = Y.getChannel(e.channelId);
                  if (null == t) return !1;
                  let n = Date.now(),
                    i = { unread: !1, lastUnreadAtMs: null };
                  return (
                    null != e.newMentionCount &&
                      (e.newMentionCount > 0
                        ? ((i.mentionCount = e.newMentionCount),
                          null == t.signals.lastDirectMentionAtMs &&
                            (i.lastDirectMentionAtMs = n))
                        : ((i.mentionCount = 0),
                          (i.lastDirectMentionAtMs = null),
                          (i.lastRoleMentionAtMs = null))),
                    t.updateSignalsAndRescore(i, n),
                    t.prunable && Y.delete(e.channelId),
                    K(),
                    !0
                  );
                }),
                TYPING_START: er(function (e) {
                  if (!b) return !1;
                  let t = g.default.getCurrentUser()?.id ?? null;
                  if (null == t || e.userId === t) return !1;
                  let n = o.A.getChannel(e.channelId);
                  if (null == n || n.isPrivate() || !(0, u.ke)(n.type))
                    return !1;
                  let i = Date.now(),
                    l = z({ includeVcProbability: !1 }),
                    s = n.getGuildId?.() ?? null;
                  if (
                    !B({
                      isAlreadyTracked: null != Y.getChannel(e.channelId),
                      guildId: s,
                      updatingUserId: e.userId,
                      providers: l,
                    })
                  )
                    return !1;
                  let r = ee(e.channelId, Q(), l);
                  if (null == r) return !1;
                  let a = new Map(
                    r.prepareForUpdate(i).typingUserIdsWithTimestampMs,
                  );
                  a.set(e.userId, i);
                  let d = Array.from(a.keys());
                  return (
                    r.updateSignalsAndRescore(
                      {
                        typingUserIdsWithTimestampMs: a,
                        typingUserIds: d,
                        isTyping: d.length > 0,
                      },
                      i,
                    ),
                    r.prunable && Y.delete(e.channelId),
                    K(),
                    !0
                  );
                }),
                VOICE_STATE_UPDATES: er(function (e) {
                  if (!b) return !1;
                  let t = Date.now(),
                    n = z({ includeVcProbability: !0 }),
                    i = !1;
                  return (
                    j.applyBatch(() => {
                      for (let l of e.voiceStates) {
                        let e = l.userId,
                          s = l.channelId ?? null,
                          r = l.oldChannelId ?? null,
                          a = (n) => {
                            let l = j.getChannel(n);
                            if (null == l) return;
                            let s = l.signals,
                              r = new Map(s.voiceUsersWithJoinTimestampMs);
                            r.delete(e);
                            let a = new Map(s.streamUsersWithTimestampMs);
                            a.delete(e);
                            let u = new Map(s.videoUsersWithTimestampMs);
                            u.delete(e);
                            let o = new Map(s.lastUnmuteActivityAtMs);
                            o.delete(e);
                            let d = new Map(s.lastUndeafenActivityAtMs);
                            d.delete(e),
                              l.updateSignalsAndRescore(
                                {
                                  voiceUsersWithJoinTimestampMs: r,
                                  streamUsersWithTimestampMs: a,
                                  videoUsersWithTimestampMs: u,
                                  lastUnmuteActivityAtMs: o,
                                  lastUndeafenActivityAtMs: d,
                                },
                                t,
                              ),
                              l.prunable && j.delete(n),
                              (i = !0);
                          };
                        if ((null != r && r !== s && a(r), null != s)) {
                          let a = o.A.getChannel(s),
                            u = a?.getGuildId?.() ?? null;
                          if (
                            !B({
                              isAlreadyTracked: null != j.getChannel(s),
                              guildId: u,
                              updatingUserId: e,
                              providers: n,
                            })
                          )
                            continue;
                          let d = et(s, X(), n);
                          if (null == d) continue;
                          let c = d.prepareForUpdate(t),
                            h = null == r || r !== s,
                            A = new Map(c.voiceUsersWithJoinTimestampMs);
                          h && !A.has(e) && A.set(e, t);
                          let f = new Map(c.streamUsersWithTimestampMs);
                          l.selfStream ? f.has(e) || f.set(e, t) : f.delete(e);
                          let g = new Map(c.videoUsersWithTimestampMs);
                          l.selfVideo ? g.has(e) || g.set(e, t) : g.delete(e);
                          let E = new Map(c.lastUnmuteActivityAtMs);
                          if (!l.selfMute && !l.mute) {
                            let n = E.get(e) ?? null;
                            (null == n || t - n >= 15e3) && E.set(e, t);
                          }
                          let I = new Map(c.lastUndeafenActivityAtMs);
                          if (!l.selfDeaf && !l.deaf) {
                            let n = I.get(e) ?? null;
                            (null == n || t - n >= 15e3) && I.set(e, t);
                          }
                          d.updateSignalsAndRescore(
                            {
                              voiceUsersWithJoinTimestampMs: A,
                              lastVoiceJoinAtMs: h ? t : c.lastVoiceJoinAtMs,
                              streamUsersWithTimestampMs: f,
                              videoUsersWithTimestampMs: g,
                              lastUnmuteActivityAtMs: E,
                              lastUndeafenActivityAtMs: I,
                            },
                            t,
                          ),
                            d.prunable && j.delete(s),
                            (i = !0);
                        }
                      }
                    }),
                    i && K(),
                    i
                  );
                }),
                VOICE_CHANNEL_SELECT: er(function (e) {
                  return K(), !0;
                }),
                RTC_CONNECTION_STATE: er(function (e) {
                  return K(), !0;
                }),
                CHANNEL_SELECT: er(function (e) {
                  let { channelId: t } = e;
                  if (null == t) return !1;
                  let n = o.A.getChannel(t);
                  return (
                    !(null == n || n.isPrivate()) &&
                    ((H = n.getGuildId?.() ?? null), K(), !0)
                  );
                }),
                USER_GUILD_SETTINGS_CHANNEL_UPDATE: er(function (e) {
                  return el(e.channelId);
                }),
                USER_GUILD_SETTINGS_GUILD_UPDATE: er(function (e) {
                  let t = e.guildId,
                    n = !1;
                  for (let e of Y.getSortedChannels())
                    e.candidate.guildId === t &&
                      (n = el(e.candidate.channelId) || n);
                  for (let e of j.getSortedChannels())
                    e.candidate.guildId === t &&
                      (n = el(e.candidate.channelId) || n);
                  return n;
                }),
                USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: er(function (e) {
                  let t = e.guildId,
                    n = !1;
                  for (let e of Y.getSortedChannels())
                    e.candidate.guildId === t &&
                      (n = el(e.candidate.channelId) || n);
                  for (let e of j.getSortedChannels())
                    e.candidate.guildId === t &&
                      (n = el(e.candidate.channelId) || n);
                  return n;
                }),
                LOGOUT: er(function () {
                  let e = Y.size > 0 || j.size > 0;
                  return (
                    Y.clear(), j.clear(), (b = !1), (k = !1), (H = null), e
                  );
                }),
              },
        );
    },
    406595(e, t, n) {
      n.d(t, { A: () => J });
      var i = n(17928),
        l = n(713402),
        s = n(228366),
        r = n(427358),
        a = n(95701),
        u = n(734057),
        o = n(776096),
        d = n(576705),
        c = n(290863),
        h = n(222823),
        A = n(994500),
        f = n(287809),
        g = n(914853),
        E = n(956753),
        I = n(652215);
      let S = Number.MAX_SAFE_INTEGER,
        _ = new l.J(
          (e) => [e.tab],
          (e) => e.sortKey,
        ),
        T = new Set(Object.values(g.x)),
        C = new Map(),
        m = !1;
      function p(e, t, n) {
        return e < t ? t : e > n ? n : e;
      }
      function N(e, t) {
        return String(e).padStart(t, "0");
      }
      function M(e) {
        return Number.isFinite(e) ? Math.floor(p(e, 0, S)) : Date.now();
      }
      function D(e) {
        return e ? "0" : "1";
      }
      function v(e, t) {
        return `${e}:${t}`;
      }
      function y(e) {
        let t = C.get(e);
        return null == t && ((t = new Map()), C.set(e, t)), t;
      }
      function U(e) {
        return Array.from(y(e).values());
      }
      function O() {
        let e = o.A.affinities,
          t = 0;
        for (let n = 0; n < e.length; n += 1) {
          let i = e[n].score ?? 0;
          i > t && (t = i);
        }
        return t > 0 ? t : 1;
      }
      function L(e) {
        return {
          hasMention: h.Ay.getMentionCount(e) > 0,
          hasUnread: h.Ay.hasUnread(e),
        };
      }
      function R(e, t) {
        let n = u.A.getChannel(t);
        if (null == n) return !1;
        switch (e) {
          case g.x.MESSAGES:
            if (n.isDM() || n.isMultiUserDM() || n.isPrivate()) return !0;
            if (!(0, a.ke)(n.type)) return !1;
            return d.A.can(I.xBc.READ_MESSAGE_HISTORY, n);
          case g.x.VOICE:
            if (!(0, a.ay)(n.type)) return !1;
            return d.A.can(I.xBc.VIEW_CHANNEL, n);
          case g.x.FRIENDS:
            return !1;
          default:
            return e;
        }
      }
      function w(e) {
        var t;
        let n,
          {
            tab: i,
            targetId: l,
            isOnline: s,
            affinityScore: r,
            hasMention: a,
            hasUnread: u,
            addedTimestampMs: o,
          } = e,
          d = {
            rowId: v(i, l),
            tab: i,
            targetId: l,
            isOnline: s,
            affinityScore: r,
            hasMention: a,
            hasUnread: u,
            addedTimestampMs: o,
            sortKey: "",
          };
        return (
          (d.sortKey = [
            (t = d).tab,
            D(t.isOnline),
            N(Math.round((1 - p(t.affinityScore, 0, 1)) * 1e6), 7),
            D(t.hasMention),
            D(t.hasUnread),
            ((n = p(t.addedTimestampMs, 0, S)), N(S - n, 16)),
            t.rowId,
          ].join("\0")),
          d
        );
      }
      function P(e) {
        let {
          tab: t,
          targetId: n,
          addedTimestampMs: i,
          guildAffinityNormalizationMax: l,
          pruneInvalid: s,
        } = e;
        if (t === g.x.FRIENDS) {
          if (null == f.default.getUser(n)) return { kind: "NOT_READY_YET" };
          if (!A.A.isFriend(n))
            return s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
          let e = (function (e, t, n) {
            var i;
            if (
              e !== g.x.FRIENDS ||
              null == f.default.getUser(t) ||
              !A.A.isFriend(t)
            )
              return null;
            let l =
                (i = c.A.getStatus(t)) === I.clD.ONLINE ||
                i === I.clD.IDLE ||
                i === I.clD.DND,
              s = r.A.getUserAffinity(t)?.communicationProbability ?? 0,
              a = u.A.getDMFromUserId(t),
              { hasMention: o, hasUnread: d } =
                null != a ? L(a) : { hasMention: !1, hasUnread: !1 };
            return w({
              tab: e,
              targetId: t,
              isOnline: l,
              affinityScore: s,
              hasMention: o,
              hasUnread: d,
              addedTimestampMs: n,
            });
          })(t, n, i);
          return null == e
            ? s
              ? { kind: "INVALID" }
              : { kind: "NOT_READY_YET" }
            : { kind: "BUILT", row: e };
        }
        if (null == u.A.getChannel(n)) return { kind: "NOT_READY_YET" };
        if (!R(t, n))
          return s ? { kind: "INVALID" } : { kind: "NOT_READY_YET" };
        let d = (function (e, t, n, i) {
          if (!R(e, t)) return null;
          let l = u.A.getChannel(t);
          if (null == l) return null;
          let s = l.getGuildId() ?? null,
            r = p(
              (null != s ? (o.A.getGuildAffinity(s)?.score ?? 0) : 0) / i,
              0,
              1,
            ),
            { hasMention: d, hasUnread: c } =
              (0, a.ke)(l.type) ||
              l.isDM() ||
              l.isMultiUserDM() ||
              l.isPrivate()
                ? L(t)
                : { hasMention: !1, hasUnread: !1 };
          return w({
            tab: e,
            targetId: t,
            isOnline: !1,
            affinityScore: r,
            hasMention: d,
            hasUnread: c,
            addedTimestampMs: n,
          });
        })(t, n, i, l);
        return null == d
          ? s
            ? { kind: "INVALID" }
            : { kind: "NOT_READY_YET" }
          : { kind: "BUILT", row: d };
      }
      function G(e, t) {
        return (
          e.rowId !== t.rowId ||
          e.tab !== t.tab ||
          e.targetId !== t.targetId ||
          e.isOnline !== t.isOnline ||
          e.affinityScore !== t.affinityScore ||
          e.hasMention !== t.hasMention ||
          e.hasUnread !== t.hasUnread ||
          e.addedTimestampMs !== t.addedTimestampMs ||
          e.sortKey !== t.sortKey
        );
      }
      function x(e) {
        let { pruneInvalid: t } = e,
          n = new Set(_.values().map((e) => e.rowId)),
          i = O(),
          l = !1;
        for (let e of T) {
          let s = y(e);
          for (let [r, a] of s.entries()) {
            let u = v(e, r),
              o = P({
                tab: e,
                targetId: r,
                addedTimestampMs: a.addedTimestampMs,
                guildAffinityNormalizationMax: i,
                pruneInvalid: t,
              });
            switch ((n.delete(u), o.kind)) {
              case "BUILT": {
                let e = o.row,
                  t = _.get(e.rowId);
                (null == t || G(t, e)) && (l = _.set(e.rowId, e) || l);
                break;
              }
              case "NOT_READY_YET":
                l = _.delete(u) || l;
                break;
              case "INVALID":
                s.delete(r), (l = !0), (l = _.delete(u) || l);
                break;
              default:
                return o;
            }
          }
        }
        for (let e of n) l = _.delete(e) || l;
        return l;
      }
      function F(e, t) {
        let n = y(e).delete(t),
          i = _.delete(v(e, t));
        return n || i;
      }
      function V(e) {
        let {
            tab: t,
            targetId: n,
            pruneInvalid: i,
            guildAffinityNormalizationMax: l,
          } = e,
          s = y(t),
          r = s.get(n),
          a = v(t, n);
        if (null == r) return _.delete(a);
        let u = P({
          tab: t,
          targetId: n,
          addedTimestampMs: r.addedTimestampMs,
          guildAffinityNormalizationMax: l,
          pruneInvalid: i,
        });
        switch (u.kind) {
          case "BUILT": {
            let e = u.row,
              t = _.get(e.rowId);
            return !!(null == t || G(t, e)) && _.set(e.rowId, e);
          }
          case "NOT_READY_YET":
            return _.delete(a);
          case "INVALID":
            return i && s.delete(n), _.delete(a);
          default:
            return u;
        }
      }
      function b(e, t) {
        let { pruneInvalid: n } = t,
          i = y(e);
        if (0 === i.size && 0 === _.values(e).length) return !1;
        let l = O(),
          s = !1,
          r = new Set();
        for (let t of i.keys())
          r.add(v(e, t)),
            (s =
              V({
                tab: e,
                targetId: t,
                pruneInvalid: n,
                guildAffinityNormalizationMax: l,
              }) || s);
        for (let t of _.values(e))
          r.has(t.rowId) || (s = _.delete(t.rowId) || s);
        return s;
      }
      function H(e, t) {
        let { pruneInvalid: n } = t,
          i = y(g.x.FRIENDS);
        if (0 === i.size) return !1;
        let l = O(),
          s = !1;
        for (let t of i.keys())
          u.A.getDMFromUserId(t) === e &&
            (s =
              V({
                tab: g.x.FRIENDS,
                targetId: t,
                pruneInvalid: n,
                guildAffinityNormalizationMax: l,
              }) || s);
        return s;
      }
      function k(e) {
        let t = m,
          n = O(),
          i = !1;
        return (
          y(g.x.MESSAGES).has(e) &&
            (i =
              V({
                tab: g.x.MESSAGES,
                targetId: e,
                pruneInvalid: t,
                guildAffinityNormalizationMax: n,
              }) || i),
          (i = H(e, { pruneInvalid: t }) || i)
        );
      }
      function Y() {
        return (m = !0), x({ pruneInvalid: !0 });
      }
      class j extends i.Ay.PersistedStore {
        static displayName = "OverlayFriendsWidgetFavoritesStore";
        static persistKey = "OverlayFriendsWidgetFavoritesStore";
        initialize(e) {
          this.waitFor(u.A, o.A, d.A, c.A, h.Ay, A.A, r.A, f.default),
            (function (e) {
              (C = new Map()), _.clear();
              for (let t of T)
                (function (e, t) {
                  let n = (function (e, t) {
                      if (null == e) return [];
                      switch (t) {
                        case g.x.FRIENDS:
                          return e.friendsFavoriteTargetIds ?? [];
                        case g.x.MESSAGES:
                          return e.messagesFavoriteTargetIds ?? [];
                        case g.x.VOICE:
                          return e.voiceFavoriteTargetIds ?? [];
                        default:
                          return t;
                      }
                    })(e, t),
                    i = y(t),
                    l = 0;
                  for (let e of n) {
                    let t =
                      null == e || "string" != typeof e.targetId
                        ? null
                        : {
                            targetId: e.targetId,
                            addedTimestampMs: M(e.addedTimestampMs),
                          };
                    null != t && (i.set(t.targetId, t), (l += 1));
                  }
                })(e, t);
            })(e),
            x({ pruneInvalid: !1 });
        }
        getState() {
          return {
            friendsFavoriteTargetIds: U(g.x.FRIENDS),
            messagesFavoriteTargetIds: U(g.x.MESSAGES),
            voiceFavoriteTargetIds: U(g.x.VOICE),
          };
        }
        getFavoriteTargetIdsForTab(e) {
          return [_.values(e).map((e) => e.targetId), _.version];
        }
        isFavorite(e, t) {
          return [y(e).has(t), _.version];
        }
      }
      let W = (e) => (0, E.v$)(e, "OverlayFriendsWidgetFavoritesStore"),
        J = new j(
          s.h,
          __OVERLAY__
            ? {}
            : {
                OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: W(function (e) {
                  let t = v(e.tab, e.targetId);
                  if (!e.isFavorite) {
                    let n = y(e.tab).delete(e.targetId),
                      i = _.delete(t);
                    return n || i;
                  }
                  let n = M(
                      e.addedTimestampMs ??
                        y(e.tab).get(e.targetId)?.addedTimestampMs ??
                        Date.now(),
                    ),
                    i = y(e.tab);
                  i.set(e.targetId, {
                    targetId: e.targetId,
                    addedTimestampMs: n,
                  });
                  let l = O(),
                    s = P({
                      tab: e.tab,
                      targetId: e.targetId,
                      addedTimestampMs: n,
                      guildAffinityNormalizationMax: l,
                      pruneInvalid: m,
                    });
                  switch (s.kind) {
                    case "BUILT": {
                      let e = s.row,
                        t = _.get(e.rowId);
                      (null == t || G(t, e)) && _.set(e.rowId, e);
                      break;
                    }
                    case "NOT_READY_YET":
                      _.delete(t);
                      break;
                    case "INVALID":
                      i.delete(e.targetId), _.delete(t);
                      break;
                    default:
                      return s;
                  }
                  return !0;
                }),
                POST_CONNECTION_OPEN: W(Y),
                OVERLAY_INITIALIZE: W(Y),
                CACHE_LOADED: W(Y),
                CACHE_LOADED_LAZY: W(Y),
                FRIENDS_LIST_POPOUT_MOUNTED: W(Y),
                PRESENCE_UPDATES: W(function (e) {
                  let t = y(g.x.FRIENDS);
                  if (0 === t.size) return !1;
                  let n = O(),
                    i = !1;
                  for (let l of e.updates) {
                    let e = l.user?.id;
                    null != e &&
                      t.has(e) &&
                      (i =
                        V({
                          tab: g.x.FRIENDS,
                          targetId: e,
                          pruneInvalid: m,
                          guildAffinityNormalizationMax: n,
                        }) || i);
                  }
                  return i;
                }),
                PRESENCES_REPLACE: W(function (e) {
                  let t = y(g.x.FRIENDS);
                  if (0 === t.size) return !1;
                  let n = O(),
                    i = !1;
                  for (let l of e.presences) {
                    let e = l.user?.id;
                    null != e &&
                      t.has(e) &&
                      (i =
                        V({
                          tab: g.x.FRIENDS,
                          targetId: e,
                          pruneInvalid: m,
                          guildAffinityNormalizationMax: n,
                        }) || i);
                  }
                  return i;
                }),
                LOAD_USER_AFFINITIES_V2_SUCCESS: W(function () {
                  return b(g.x.FRIENDS, { pruneInvalid: m });
                }),
                LOAD_GUILD_AFFINITIES_SUCCESS: W(function () {
                  let e = m;
                  return (
                    b(g.x.MESSAGES, { pruneInvalid: e }) ||
                    b(g.x.VOICE, { pruneInvalid: e })
                  );
                }),
                MESSAGE_CREATE: W((e) => k(e.channelId)),
                MESSAGE_ACK: W((e) => k(e.channelId)),
                CHANNEL_ACK: W((e) => k(e.channelId)),
                CHANNEL_UPDATES: W(function (e) {
                  let t = m,
                    n = O(),
                    i = !1,
                    l = y(g.x.MESSAGES),
                    s = y(g.x.VOICE);
                  for (let r of e.channels) {
                    let e = r?.id;
                    null != e &&
                      (l.has(e) &&
                        (i =
                          V({
                            tab: g.x.MESSAGES,
                            targetId: e,
                            pruneInvalid: t,
                            guildAffinityNormalizationMax: n,
                          }) || i),
                      s.has(e) &&
                        (i =
                          V({
                            tab: g.x.VOICE,
                            targetId: e,
                            pruneInvalid: t,
                            guildAffinityNormalizationMax: n,
                          }) || i),
                      (i = H(e, { pruneInvalid: t }) || i));
                  }
                  return i;
                }),
                CHANNEL_DELETE: W(function (e) {
                  let t = e.channel?.id;
                  if (null == t) return !1;
                  let n = !1;
                  return (
                    (n = F(g.x.MESSAGES, t) || n),
                    (n = F(g.x.VOICE, t) || n),
                    (n = H(t, { pruneInvalid: m }) || n)
                  );
                }),
                RELATIONSHIP_ADD: W(function (e) {
                  let t = e.relationship?.id;
                  if (null == t || !y(g.x.FRIENDS).has(t)) return !1;
                  let n = O();
                  return V({
                    tab: g.x.FRIENDS,
                    targetId: t,
                    pruneInvalid: m,
                    guildAffinityNormalizationMax: n,
                  });
                }),
                RELATIONSHIP_REMOVE: W(function (e) {
                  let t = e.relationship?.id;
                  return null != t && F(g.x.FRIENDS, t);
                }),
                LOGOUT: W(function () {
                  let e = _.size() > 0 || C.size > 0;
                  return _.clear(), (C = new Map()), (m = !1), e;
                }),
              },
        );
    },
    70191(e, t, n) {
      n.d(t, { A: () => l });
      var i = n(652215);
      function l(e) {
        return (
          (e.type === i.$pd.PLAYING || e.type === i.$pd.COMPETING) &&
          null != e.application_id
        );
      }
    },
    551826(e, t, n) {
      n.d(t, { A: () => u });
      var i = n(627968);
      n(64700);
      var l = n(702841),
        s = n(568602),
        r = n(3137),
        a = n(208343);
      function u(e) {
        let { isShaking: t, shakeLocation: n, children: u, className: o } = e,
          d = (0, a.A)(n);
        return (0, l.bG)([r.A], () => r.A.isEnabled({ shakeLocation: n }))
          ? (0, i.jsx)(s.b, {
              isShaking: t,
              intensity: d,
              className: o,
              children: u,
            })
          : u;
      }
    },
    208343(e, t, n) {
      n.d(t, { A: () => r });
      var i = n(17928),
        l = n(531685),
        s = n(3137);
      function r(e) {
        let t = (0, i.bG)([l.A], () => l.A.isFocused());
        return (0, i.bG)([s.A], () =>
          s.A.isEnabled({ shakeLocation: e }) && t ? s.A.shakeIntensity : 0,
        );
      }
    },
    911411(e, t, n) {
      n.d(t, { A: () => g }), n(321073);
      var i = n(17928),
        l = n(451988),
        s = n(228366),
        r = n(308368),
        a = n(290863),
        u = n(360469);
      let o = {},
        d = {},
        c = new l.J_(3e3, function () {
          let e = [];
          for (let [t, n] of Object.entries(d))
            e.push(n), (o[t] = n), delete d[t];
          0 !== e.length && r.A.subscribeActivities(e);
        });
      function h(e) {
        var t, n;
        let i = ((t = e.applicationId), (n = e.partyId), `${t}:${n}`);
        return i in o || i in d;
      }
      function A() {
        (o = {}), (d = {});
      }
      class f extends i.Ay.Store {
        static displayName = "PresenceSubscriptionsStore";
        initialize() {
          this.waitFor(a.A);
        }
        isSubscribed(e) {
          return h(e);
        }
      }
      let g = new f(s.h, {
        PRESENCE_SUBSCRIPTIONS_ADD: function (e) {
          let { subscription: t } = e,
            n = (function () {
              let e = !1,
                t = Date.now();
              for (let [n, i] of Object.entries(o))
                i.expiresAt < t && (delete o[n], (e = !0));
              for (let [n, i] of Object.entries(d))
                i.expiresAt < t && (delete d[n], (e = !0));
              return e;
            })(),
            {
              userId: i,
              applicationId: l,
              partyId: s,
              messageId: r,
              channelId: a,
              inviteTime: A,
            } = t;
          if (h(t) || A + u.dm < Date.now()) return n;
          let f = `${l}:${s}`,
            g = u.dm + Date.now();
          return (
            (d[f] = {
              userId: i,
              applicationId: l,
              partyId: s,
              messageId: r,
              channelId: a,
              expiresAt: g,
            }),
            c.delay(),
            !0
          );
        },
        CONNECTION_OPEN: A,
        CONNECTION_RESUMED: A,
        LOGOUT: function () {
          (o = {}), (d = {});
        },
      });
    },
    199160(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(17928),
        l = n(228366);
      let s = !1,
        r = {},
        a = new Set(),
        u = {};
      function o() {
        u = {};
      }
      class d extends i.Ay.Store {
        static displayName = "scheduledMessageStore";
        getMessagesPendingDeletion() {
          return a;
        }
        getScheduledMessagesForInbox() {
          return r;
        }
        getPendingScheduledMessage(e) {
          return u[e];
        }
        get loading() {
          return s;
        }
      }
      let c = new d(l.h, {
        SCHEDULED_MESSAGES_CREATE_SUCCESS: function (e) {
          let { channelId: t, scheduledMessageSend: n } = e;
          (r = { ...r, [n.scheduledMessageId]: n }),
            (u = { ...u }),
            delete u[t];
        },
        SCHEDULED_MESSAGES_UPDATE_SUCCESS: function (e) {
          let { scheduledMessageSend: t } = e;
          r = { ...r, [t.scheduledMessageId]: t };
        },
        SCHEDULED_MESSAGES_DELETE_START: function (e) {
          let { scheduledMessageId: t } = e;
          if (a.has(t)) return !1;
          (a = new Set(a)).add(t);
        },
        SCHEDULED_MESSAGES_DELETE_SUCCESS: function (e) {
          let { scheduledMessageId: t } = e;
          if (!a.has(t)) return !1;
          (a = new Set(a)).delete(t), (r = { ...r }), delete r[t];
        },
        SCHEDULED_MESSAGES_DELETE_FAILURE: function (e) {
          let { scheduledMessageId: t } = e;
          if (!a.has(t)) return !1;
          (a = new Set(a)).delete(t);
        },
        FETCH_SCHEDULED_MESSAGES: function (e) {
          let {} = e;
          s = !0;
        },
        FETCH_SCHEDULED_MESSAGES_SUCCESS: function (e) {
          let { messages: t } = e;
          for (let e of ((r = {}), t)) r[e.scheduledMessageId] = e;
          s = !1;
        },
        FETCH_SCHEDULED_MESSAGES_FAILURE: function (e) {
          let {} = e;
          s = !1;
        },
        CREATE_PENDING_SCHEDULED_MESSAGE: function (e) {
          let { channelId: t, scheduledTimestamp: n } = e;
          u = { ...u, [t]: { channelId: t, scheduledTimestamp: n } };
        },
        DELETE_PENDING_SCHEDULED_MESSAGE: function (e) {
          let { channelId: t } = e;
          (u = { ...u }), delete u[t];
        },
        LOGOUT: o,
        CONNECTION_OPEN: o,
      });
    },
    485873(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(627968);
      n(64700);
      var l = n(17928),
        s = n(477782),
        r = n(964355),
        a = n(827343),
        u = n(51760),
        o = n(824744),
        d = n(985018);
      function c(e) {
        let t = (0, l.bG)([u.Ay], () => (0, o.M)(u.Ay.getInputVolume()));
        return (0, i.jsx)(s.aK, {
          id: "input",
          label: d.intl.string(d.t.OX2Bnr),
          interactive: !1,
          control: (n, l) =>
            (0, i.jsx)(r.i, {
              ...n,
              ref: l,
              value: t,
              onChange: (t) =>
                a.A.setInputVolume((0, o.w)(t), { analyticsLocations: e }),
              "aria-label": d.intl.string(d.t.OX2Bnr),
            }),
        });
      }
    },
    24933(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(627968);
      n(64700);
      var l = n(17928),
        s = n(477782),
        r = n(827343),
        a = n(51760),
        u = n(533488),
        o = n(509381),
        d = n(985018);
      function c(e) {
        let { enabledInputProfiles: t } = (0, u.d)({
            location: "useInputProfileItems",
          }),
          n = {
            [o.m.VOICE_ISOLATION]: d.intl.string(d.t.cjPbpT),
            [o.m.STUDIO]: d.intl.string(d.t.VZPR0R),
            [o.m.CUSTOM]: d.intl.string(d.t["N/PQjv"]),
          },
          c = (0, l.bG)([a.Ay], () => a.Ay.getActiveInputProfile()),
          h = t.map((t) =>
            (0, i.jsx)(
              s.iD,
              {
                id: t,
                group: "input-profiles",
                label: n[t],
                checked: t === (c ?? o.m.CUSTOM),
                action: () =>
                  r.A.setActiveInputProfile(t, { analyticsLocations: e }),
              },
              t,
            ),
          );
        return (0, i.jsx)(s.Dr, {
          id: "input-profiles",
          label: d.intl.string(d.t.LM3U3k),
          subtext: n[c ?? o.m.CUSTOM],
          children: h,
        });
      }
    },
    964592(e, t, n) {
      n.d(t, { A: () => h });
      var i = n(627968);
      n(64700);
      var l = n(17928),
        s = n(477782),
        r = n(964355),
        a = n(827343),
        u = n(51760),
        o = n(824744),
        d = n(723702),
        c = n(985018);
      function h(e) {
        let t = (0, l.bG)([u.Ay], () => (0, o.M)(u.Ay.getOutputVolume()));
        return (0, i.jsx)(s.aK, {
          id: "output",
          label: c.intl.string(c.t.eATD2B),
          control: (n, l) =>
            (0, i.jsx)(r.i, {
              ...n,
              ref: l,
              value: t,
              maxValue: d.isPlatformEmbedded ? 200 : 100,
              onChange: (t) =>
                a.A.setOutputVolume((0, o.w)(t), { analyticsLocations: e }),
              "aria-label": c.intl.string(c.t.eATD2B),
            }),
        });
      }
    },
    533488(e, t, n) {
      n.d(t, { _: () => s, d: () => r });
      var i = n(509381);
      let l = [i.m.VOICE_ISOLATION, i.m.STUDIO, i.m.CUSTOM];
      function s(e) {
        let { location: t } = e;
        return { enabledInputProfiles: l };
      }
      function r(e) {
        let { location: t } = e;
        return { enabledInputProfiles: l };
      }
    },
    776096(e, t, n) {
      n.d(t, { A: () => c }), n(321073);
      var i = n(17928),
        l = n(228366),
        s = n(636537),
        r = n(652215),
        a = n(71393);
      let u = {},
        o = () => {
          u = {
            guildAffinitiesByGuildId: {},
            guildAffinities: [],
            lastFetched: 0,
          };
        };
      o();
      class d extends i.Ay.PersistedStore {
        static displayName = "GuildAffinitiesStore";
        static persistKey = "GuildAffinitiesStore";
        initialize(e) {
          null != e && (u = e), this.waitFor(a.A);
        }
        getState() {
          return u;
        }
        getGuildAffinity(e) {
          return u.guildAffinitiesByGuildId[e];
        }
        get affinities() {
          return u.guildAffinities;
        }
        get hasRequestResolved() {
          return 0 !== u.lastFetched;
        }
      }
      let c = new d(l.h, {
        CONNECTION_OPEN: function () {
          return (
            Date.now() - u.lastFetched > 864e5 &&
              s.Bo.get({
                url: r.Rsh.GUILD_AFFINITIES,
                oldFormErrors: !0,
                rejectWithError: !1,
              }).then(
                (e) => {
                  let {
                    body: { guild_affinities: t },
                  } = e;
                  l.h.dispatch({
                    type: "LOAD_GUILD_AFFINITIES_SUCCESS",
                    guildAffinities: t,
                  });
                },
                () => {
                  l.h.dispatch({ type: "LOAD_GUILD_AFFINITIES_FAILURE" });
                },
              ),
            !1
          );
        },
        LOAD_GUILD_AFFINITIES_SUCCESS: function (e) {
          let { guildAffinities: t } = e;
          (u.guildAffinities = []),
            (u.guildAffinitiesByGuildId = {}),
            (u.lastFetched = Date.now()),
            t.forEach((e, t) => {
              let { affinity: n, guild_id: i } = e,
                l = { score: n, guildId: i, index: t };
              (u.guildAffinitiesByGuildId[i] = l), u.guildAffinities.push(l);
            });
        },
        LOGOUT: function () {
          o();
        },
      });
    },
    584777(e, t, n) {
      let i;
      n.d(t, { A: () => F }), n(321073);
      var l = n(17928),
        s = n(228366),
        r = n(450827),
        a = n(736056),
        u = n(427358),
        o = n(95701),
        d = n(240248),
        c = n(427262),
        h = n(734057),
        A = n(153488),
        f = n(205761),
        g = n(994500),
        E = n(287809),
        I = n(652215);
      let S = !1,
        _ = "",
        T = 0,
        C = [],
        m = !1,
        p = new Set(),
        N = null;
      function M() {
        (_ = ""), (T = 0), (C = []), (p = new Set()), (S = !1), (N = null);
      }
      function D(e) {
        (_ = e), (T = 0), v();
      }
      function v() {
        if (!S) return !1;
        let e = h.A.getChannel(N);
        if (0 === _.trim().length) {
          var t;
          let n, l;
          return (
            null != i && i.clearQuery(),
            (t = e),
            (n = g.A.getFriendIDs()),
            (l = E.default.getCurrentUser()),
            l?.isStaff() &&
              (n = Array.from(
                new Set([
                  ...n,
                  ...E.default
                    .filter((e) => e.isStaff() && e.id !== l.id, !1)
                    .map((e) => e.id),
                ]),
              )),
            t?.isGroupDM() && (n = n.filter((e) => !t.recipients.includes(e))),
            (C = n
              .reduce((e, t) => {
                let n = E.default.getUser(t);
                return (
                  null == n ||
                    n.isProvisional ||
                    e.push({ user: n, comparator: c.Ay.getName(n) }),
                  e
                );
              }, [])
              .sort(U)),
            !0
          );
        }
        let n = null != e ? e.recipients : [];
        if (null != i) {
          let e,
            t,
            l,
            s = E.default.getCurrentUser(),
            r = s?.isStaff() ?? !1;
          i.setQuery({
            query: _,
            filters: { friends: !0, staff: r, provisional: !1 },
            blacklist: n,
            boosters:
              ((t = Math.max(
                ...(e = f.A.getFrequentlyWithoutFetchingLatest().filter(
                  (e) => e instanceof o.cq && e.isDM(),
                )).map((e) => {
                  let { id: t } = e;
                  return f.A.getScoreWithoutFetchingLatest(t);
                }),
              )),
              (l = {}),
              e.forEach((e) => {
                let n = f.A.getScoreWithoutFetchingLatest(e.id),
                  i = e.getRecipientId(),
                  s = 0.2 * !!g.A.isFriend(i),
                  r = 0.1 * (null != h.A.getDMFromUserId(i));
                l[i] = 1 + n / t + s + r;
              }),
              l),
          });
        }
        return !1;
      }
      function y() {
        if (!S) return !1;
        let e = m;
        return (m = g.A.getFriendCount() > 0) !== e;
      }
      function U(e, t) {
        if (A.A.hasConsented(I.YAq.PERSONALIZATION)) {
          let n = u.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = u.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
          if (n !== i) return i - n;
        }
        return (0, d.sS)(
          c.Ay.getName(e.user).toLocaleLowerCase(),
        ).localeCompare((0, d.sS)(c.Ay.getName(t.user).toLocaleLowerCase()));
      }
      function O(e) {
        let { results: t } = e;
        if (!S || "" === _) return;
        let n = [];
        for (let { id: e, comparator: i } of t) {
          let t = E.default.getUser(e);
          null != t && n.push({ user: t, comparator: i });
        }
        (C = n), x.emitChange();
      }
      function L() {
        return (
          null != i && (i.destroy(), (i = null)),
          r.A.getUserSearchContext(O, 1e3)
        );
      }
      function R(e) {
        if (e.key !== I.TLS) return !1;
        (S = !0), y(), (i = L()), (N = null), D("");
      }
      function w(e) {
        if (e.key !== I.TLS) return !1;
        P();
      }
      function P() {
        null != i && (i.destroy(), (i = null)), M();
      }
      class G extends l.Ay.Store {
        static displayName = "PrivateChannelRecipientsInviteStore";
        initialize() {
          this.waitFor(h.A, A.A, a.A, f.A, g.A, u.A, E.default),
            this.syncWith([E.default, h.A], v),
            this.syncWith([g.A], y);
        }
        getResults() {
          return C;
        }
        hasFriends() {
          return m;
        }
        getSelectedUsers() {
          return p;
        }
        getQuery() {
          return _;
        }
        getState() {
          return {
            query: _,
            selectedRow: T,
            selectedUsers: p,
            results: C,
            hasFriends: m,
          };
        }
      }
      let x = new G(s.h, {
          CONNECTION_OPEN: function () {
            M();
          },
          CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (null != t) return !1;
            let i = S;
            return M(), (S = i), (N = n), v();
          },
          MODAL_PUSH: R,
          SHOW_ACTION_SHEET: R,
          PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
            (S = !0), y(), (i = L()), (N = e.channelId), D("");
          },
          MODAL_POP: w,
          HIDE_ACTION_SHEET: w,
          PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: P,
          PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
            (N = e.channelId), D(e.query);
          },
          PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
            T = e.row;
          },
          PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
            let { userId: t } = e;
            p.add(t), (p = new Set(p));
          },
          PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
            let { userId: t } = e;
            p.delete(t), (p = new Set(p));
          },
        }),
        F = x;
    },
    584569(e, t, n) {
      n.d(t, { A: () => M });
      var i = n(17928),
        l = n(205693),
        s = n(228366),
        r = n(194862),
        a = n(259464),
        u = n(288737),
        o = n(562153),
        d = n(734057),
        c = n(763827),
        h = n(287809),
        A = n(977997),
        f = n(607567),
        g = n(652215),
        E = n(806931);
      let I = new r.A(),
        S = new r.A(),
        _ = new Set();
      function T(e, t, n) {
        let i = new u.A({ userId: e.id, channelId: n }),
          l = (0, f.RQ)(i, t ?? g.ME, e.id);
        I.set(e.id, l);
        let s = {
          type: E.lp.USER,
          user: e,
          id: e.id,
          streamId: null,
          voiceState: i,
          voicePlatform: null,
          speaking: !1,
          lastSpoke: 0,
          soundsharing: !1,
          ringing: !1,
          userNick: o.Ay.getName(t, n, e),
          userAvatarDecoration: (0, a.U)(e, t),
          localVideoDisabled: !1,
          isPoppedOut: !1,
        };
        S.set(e.id, s);
      }
      function C(e) {
        let t = I.delete(e),
          n = S.delete(e),
          i = _.delete(e);
        return t || n || i;
      }
      function m() {
        let e = c.A.getChannelId();
        if (null == e) return !1;
        let t = d.A.getChannel(e)?.getGuildId(),
          n = !1;
        return (
          _.forEach((i) => {
            if (null != A.A.getVoiceStateForChannel(e, i))
              return void _.delete(i);
            let l = h.default.getUser(i);
            null != l && ((n = !0), _.delete(i), T(l, t, e));
          }),
          n
        );
      }
      function p() {
        I.clear(), S.clear(), _.clear();
      }
      class N extends i.Ay.Store {
        static displayName = "RTCConnectionDesyncStore";
        initialize() {
          this.waitFor(A.A, h.default, d.A, c.A), this.syncWith([h.default], m);
        }
        get desyncedVoiceStatesCount() {
          return I.size();
        }
        getDesyncedUserIds() {
          return I.keys();
        }
        getDesyncedVoiceStates() {
          return I.values();
        }
        getDesyncedParticipants() {
          return S.values();
        }
      }
      let M = new N(s.h, {
        CONNECTION_OPEN: function () {
          p();
        },
        VOICE_CHANNEL_SELECT: p,
        RTC_CONNECTION_STATE: function (e) {
          let { state: t, context: n } = e;
          if (n !== l.x.DEFAULT || t !== g.S7L.DISCONNECTED) return !1;
          p();
        },
        VOICE_STATE_UPDATES: function (e) {
          let { voiceStates: t } = e,
            n = c.A.getChannelId();
          return (
            null != n &&
            t.reduce((e, t) => {
              let { userId: i, channelId: l } = t;
              return (l === n && !!C(i)) || e;
            }, !1)
          );
        },
        RTC_CONNECTION_CLIENT_CONNECT: function (e) {
          let { userIds: t, guildId: n, channelId: i, context: s } = e;
          return (
            s === l.x.DEFAULT &&
            t.reduce((e, t) => {
              if (null != A.A.getVoiceStateForChannel(i, t)) return e;
              let l = h.default.getUser(t);
              return null == l ? (_.add(t), e) : (T(l, n, i), !0);
            }, !1)
          );
        },
        RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
          let { userId: t, context: n } = e;
          return n === l.x.DEFAULT && C(t);
        },
      });
    },
    459793(e, t, n) {
      n.d(t, { A: () => s });
      var i = n(627968);
      n(64700);
      var l = n(953727);
      function s(e) {
        let { width: t = 20, height: n = 20, className: s, ...r } = e;
        return (0, i.jsx)("svg", {
          width: t,
          height: n,
          className: s,
          ...(0, l.A)(r),
          viewBox: "0 0 20 20",
          children: (0, i.jsxs)("g", {
            clipPath: "url(#clip0_198_5469)",
            children: [
              (0, i.jsx)("path", {
                "aria-hidden": !0,
                d: "M19.15 17C19.41 17.11 19.6 17 19.51 16.73L18.89 15.15L18.28 13.56C18.23 13.4421 18.1442 13.3429 18.0348 13.2765C17.9253 13.2101 17.7977 13.1798 17.67 13.19L13.67 14.28C13.4 14.36 13.56 14.79 13.92 14.93L19.15 17Z",
                fill: "#FF73FA",
              }),
              (0, i.jsx)("path", {
                "aria-hidden": !0,
                d: "M9.80009 14L7.08009 8.67001L0.440092 18C0.351927 18.1221 0.299095 18.2662 0.287392 18.4163C0.275688 18.5665 0.305566 18.7169 0.373746 18.8512C0.441926 18.9855 0.545775 19.0985 0.673902 19.1776C0.802029 19.2568 0.949484 19.2991 1.10009 19.3H12.5201L9.80009 14Z",
                fill: "#8086FF",
              }),
              (0, i.jsx)("path", {
                "aria-hidden": !0,
                d: "M12.27 19C11.57 19 9.92997 17.31 8.52997 14.57C7.86795 13.3426 7.37674 12.0304 7.06997 10.67C6.83997 9.54999 6.99997 8.99999 7.19997 8.89999H7.32997C8.03997 8.89999 9.66997 10.59 11.07 13.32C12.68 16.46 12.93 18.76 12.4 19.03C12.3549 19.0306 12.3103 19.0203 12.27 19Z",
                fill: "#05124A",
              }),
              (0, i.jsx)("path", {
                "aria-hidden": !0,
                d: "M7.33009 9.14999C7.86009 9.14999 9.42009 10.67 10.8301 13.43C12.4501 16.57 12.5201 18.55 12.2701 18.77C11.7401 18.77 10.1801 17.25 8.77009 14.49C7.15009 11.35 7.08009 9.35999 7.32009 9.14999H7.33009ZM7.32009 8.60999C7.233 8.60831 7.14693 8.62897 7.07009 8.66999C6.23009 9.08999 6.78009 11.81 8.28009 14.74C9.65009 17.4 11.3401 19.31 12.2801 19.31C12.3672 19.3117 12.4532 19.291 12.5301 19.25C13.3701 18.82 12.8301 16.11 11.3201 13.18C9.96009 10.52 8.26009 8.60999 7.32009 8.60999Z",
                fill: "#373BE1",
              }),
              (0, i.jsx)("path", {
                "aria-hidden": !0,
                d: "M3.53991 17.22C3.16017 16.4754 2.85534 15.6949 2.62991 14.89L1.40991 16.6C1.5797 17.0776 1.77669 17.545 1.99991 18C2.21943 18.4301 2.46316 18.8475 2.72991 19.25H4.84991C4.34607 18.6191 3.90718 17.939 3.53991 17.22Z",
                fill: "#373BE1",
              }),
              (0, i.jsx)("path", {
                "aria-hidden": !0,
                d: "M6.83003 19.25H9.23003C8.09101 18.2623 7.1538 17.0636 6.47003 15.72C5.75671 14.3452 5.32173 12.8432 5.19003 11.3L3.78003 13.3C4.05054 14.4137 4.46044 15.4889 5.00003 16.5C5.49463 17.4884 6.10927 18.4121 6.83003 19.25Z",
                fill: "#373BE1",
              }),
              (0, i.jsx)("path", {
                "aria-hidden": !0,
                d: "M12.2699 18.77C11.7199 18.7 10.2699 17.3 8.7899 14.49C7.2499 11.49 7.1199 9.57 7.3199 9.19L6.9999 8.69C6.2199 9.19 6.7699 11.86 8.2499 14.74C9.5699 17.31 11.2499 19.19 12.1399 19.3C12.2557 19.3201 12.3748 19.3026 12.4799 19.25L12.2699 18.77Z",
                fill: "#373BE1",
              }),
              (0, i.jsx)("path", {
                "aria-hidden": !0,
                d: "M15.5901 9.23L14.6201 8C14.5734 7.94051 14.5118 7.89439 14.4416 7.8663C14.3713 7.8382 14.2949 7.82913 14.2201 7.84L10.8601 8.28C10.786 8.29082 10.7158 8.32037 10.6563 8.36587C10.5968 8.41137 10.5499 8.47131 10.5201 8.54L9.22008 11.68C9.18969 11.7486 9.1792 11.8243 9.18981 11.8986C9.20042 11.9729 9.2317 12.0427 9.28008 12.1L10.2801 13.37C10.3268 13.4295 10.3884 13.4756 10.4586 13.5037C10.5288 13.5318 10.6052 13.5409 10.6801 13.53L14.0001 13.05C14.0742 13.0392 14.1443 13.0096 14.2038 12.9641C14.2633 12.9186 14.3102 12.8587 14.3401 12.79L15.6401 9.65C15.6718 9.58232 15.684 9.50709 15.6751 9.43285C15.6663 9.35862 15.6368 9.28834 15.5901 9.23Z",
                fill: "#FFD836",
              }),
              (0, i.jsx)("path", {
                "aria-hidden": !0,
                d: "M12.6801 10.21L11.4101 9.74001C11.3617 9.72337 11.3182 9.69501 11.2834 9.65748C11.2487 9.61994 11.2238 9.57439 11.2109 9.52489C11.198 9.47539 11.1976 9.42347 11.2097 9.37376C11.2217 9.32405 11.2459 9.27811 11.2801 9.24001L14.7201 5.24001C14.7617 5.1903 14.8178 5.15488 14.8806 5.13873C14.9434 5.12259 15.0096 5.12653 15.0701 5.15001L16.3401 5.61001C16.3871 5.62978 16.4288 5.66018 16.4621 5.69881C16.4954 5.73745 16.5193 5.78327 16.5319 5.83268C16.5445 5.8821 16.5454 5.93376 16.5347 5.98361C16.524 6.03346 16.5019 6.08015 16.4701 6.12001L13.0301 10.12C12.9884 10.1697 12.9323 10.2051 12.8695 10.2213C12.8067 10.2374 12.7405 10.2335 12.6801 10.21Z",
                fill: "#AEC7FF",
              }),
              (0, i.jsx)("path", {
                "aria-hidden": !0,
                d: "M11.61 17.25L11.35 16.33C11.3396 16.2949 11.3383 16.2577 11.346 16.2219C11.3537 16.1861 11.3702 16.1527 11.394 16.1249C11.4179 16.0971 11.4483 16.0757 11.4825 16.0626C11.5167 16.0495 11.5536 16.0452 11.59 16.05L15.31 16.37C15.3545 16.373 15.397 16.3901 15.4311 16.4189C15.4653 16.4477 15.4894 16.4866 15.5 16.53L15.76 17.45C15.7697 17.4856 15.7707 17.523 15.763 17.5591C15.7552 17.5952 15.7388 17.6289 15.7153 17.6574C15.6918 17.6858 15.6617 17.7082 15.6277 17.7225C15.5937 17.7369 15.5568 17.7429 15.52 17.74L11.8 17.42C11.7546 17.4149 11.7119 17.3958 11.6778 17.3653C11.6438 17.3349 11.6201 17.2946 11.61 17.25Z",
                fill: "#AEC7FF",
              }),
              (0, i.jsx)("path", {
                "aria-hidden": !0,
                d: "M10.51 4.87L9.51004 4.8C9.47171 4.79882 9.43428 4.78808 9.40117 4.76875C9.36805 4.74942 9.34029 4.72212 9.32041 4.68932C9.30054 4.65653 9.28918 4.61928 9.28737 4.58098C9.28555 4.54268 9.29335 4.50453 9.31004 4.47L10.93 0.900003C10.9491 0.856352 10.9819 0.820078 11.0234 0.796634C11.0648 0.773191 11.1128 0.763846 11.16 0.770003L12.16 0.840003C12.1984 0.841182 12.2358 0.851926 12.2689 0.871256C12.302 0.890587 12.3298 0.917891 12.3497 0.950685C12.3695 0.98348 12.3809 1.02072 12.3827 1.05903C12.3845 1.09733 12.3767 1.13548 12.36 1.17L10.74 4.73C10.7213 4.77455 10.689 4.81205 10.6477 4.83718C10.6064 4.86231 10.5582 4.87379 10.51 4.87Z",
                fill: "#FF73FA",
              }),
              (0, i.jsx)("path", {
                "aria-hidden": !0,
                d: "M9.11995 3.16L9.38995 3.89C9.40593 3.92181 9.43011 3.94877 9.46 3.96811C9.48988 3.98744 9.52439 3.99846 9.55995 4H10.3699C10.5599 4 10.6099 4.26 10.4499 4.41L9.76995 5.07C9.71086 5.13269 9.67549 5.21403 9.66995 5.3V6.13C9.66965 6.17649 9.6589 6.22232 9.63849 6.2641C9.61808 6.30587 9.58854 6.34252 9.55204 6.37133C9.51555 6.40013 9.47305 6.42037 9.42768 6.43052C9.38231 6.44068 9.33524 6.4405 9.28995 6.43L8.59995 6.1C8.56441 6.08159 8.52497 6.07198 8.48495 6.07198C8.44492 6.07198 8.40549 6.08159 8.36995 6.1L7.57995 6.57C7.38995 6.69 7.20995 6.57 7.26995 6.35L7.51995 5.49C7.53745 5.45777 7.54662 5.42168 7.54662 5.385C7.54662 5.34833 7.53745 5.31223 7.51995 5.28L6.99995 4.81C6.86995 4.68 6.99995 4.42 7.18995 4.37L7.99995 4.17C8.04629 4.1582 8.08971 4.13702 8.12755 4.10779C8.16539 4.07855 8.19684 4.04187 8.21995 4L8.68995 3.2C8.79995 3 9.05995 3 9.11995 3.16Z",
                fill: "#A5F7DE",
              }),
            ],
          }),
        });
      }
    },
    763175(e, t, n) {
      n.d(t, { D: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: u = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
          } = e,
          c = (0, r.J)(t),
          h = c?.width ?? n,
          A = c?.height ?? a;
        return (0, i.jsx)("svg", {
          ...(0, s.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: A,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            d: "M12.7 3.3a1 1 0 0 0-1.4 0l-8 8a1 1 0 1 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l6.3 6.3a1 1 0 0 0 1.4-1.42l-8-8Z",
            className: o,
          }),
        });
      };
    },
    111219(e, t, n) {
      n.d(t, { L: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: u = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
          } = e,
          c = (0, r.J)(t),
          h = c?.width ?? n,
          A = c?.height ?? a;
        return (0, i.jsx)("svg", {
          ...(0, s.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: A,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            d: "M14.41 8.09A2 2 0 0 0 15 6.67V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2.67a2 2 0 0 0 .59 1.42l1.7 1.7a1 1 0 0 0 1.42 0l1.7-1.7ZM8.1 9.59A2 2 0 0 0 6.67 9H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h2.67a2 2 0 0 0 1.42-.59l1.7-1.7a1 1 0 0 0 0-1.42L8.1 9.6Zm1.5 6.32A2 2 0 0 0 9 17.33V20c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-2.67a2 2 0 0 0-.59-1.42l-1.7-1.7a1 1 0 0 0-1.42 0l-1.7 1.7ZM17.33 9a2 2 0 0 0-1.42.59l-1.7 1.7a1 1 0 0 0 0 1.42l1.7 1.7a2 2 0 0 0 1.42.59H20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2.67Z",
            className: o,
          }),
        });
      };
    },
    289020(e, t, n) {
      n.d(t, { E: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: u = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
          } = e,
          c = (0, r.J)(t),
          h = c?.width ?? n,
          A = c?.height ?? a;
        return (0, i.jsx)("svg", {
          ...(0, s.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: A,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            d: "M7.4 2A5.4 5.4 0 0 0 2 7.4v.31C2 15.61 8.4 22 16.29 22h.37C19.6 22 22 19.6 22 16.66c0-.4-.25-.74-.63-.85l-5.06-1.56a1 1 0 0 0-1.19.5L14 17a8.52 8.52 0 0 1-7-7l2.73-1.56a1 1 0 0 0 .43-1.25L8.23 2.55A.9.9 0 0 0 7.4 2Z",
            className: o,
          }),
        });
      };
    },
    788120(e, t, n) {
      n.d(t, { q: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: u = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
          } = e,
          c = (0, r.J)(t),
          h = c?.width ?? n,
          A = c?.height ?? a;
        return (0, i.jsx)("svg", {
          ...(0, s.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: A,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            d: "M16.91 5C18.61 5 20 3.48 20 1.6v-.1a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.5.5v.1C4 3.49 5.38 5 7.09 5H8v4.35l-3.39 3.26A2 2 0 0 0 4 14.05V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-.95a2 2 0 0 0-.61-1.44L16 9.35V5h.91ZM13.37 17.25c.33 0 .56.3.5.61l-1.08 4.75a.5.5 0 0 1-.49.39h-.6a.5.5 0 0 1-.49-.39l-1.07-4.75a.5.5 0 0 1 .49-.61h2.74Z",
            className: o,
          }),
        });
      };
    },
    609731(e, t, n) {
      n.d(t, { h: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: u = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
          } = e,
          c = (0, r.J)(t),
          h = c?.width ?? n,
          A = c?.height ?? a;
        return (0, i.jsx)("svg", {
          ...(0, s.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: A,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            d: "M22.7 2.7a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4l20-20ZM4.5 1h13.17a.5.5 0 0 1 .36.85L4.62 15.25c-.2.22-.56.2-.6-.1A1 1 0 0 1 4 15v-.95a2 2 0 0 1 .61-1.44L8 9.35V5h-.91C5.39 5 4 3.48 4 1.6v-.1c0-.28.22-.5.5-.5ZM17.77 11.05a.5.5 0 0 0-.7 0l-4.1 4.1a.5.5 0 0 0 .36.85H19a1 1 0 0 0 1-1v-.95a2 2 0 0 0-.61-1.44l-1.62-1.56ZM11.08 17.25a.5.5 0 0 0-.36.15l-.36.37a.5.5 0 0 0-.14.46l.99 4.38a.5.5 0 0 0 .49.39h.6a.5.5 0 0 0 .49-.39l1.07-4.75a.5.5 0 0 0-.49-.61h-2.3Z",
            className: o,
          }),
        });
      };
    },
    1215(e, t, n) {
      n.d(t, { n: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: u = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
          } = e,
          c = (0, r.J)(t),
          h = c?.width ?? n,
          A = c?.height ?? a;
        return (0, i.jsx)("svg", {
          ...(0, s.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: A,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            d: "m2.7 22.7 20-20a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4ZM13.2 16a.5.5 0 0 1-.35-.85l8.3-8.3a.5.5 0 0 1 .85.36V13a3 3 0 0 1-3 3h-5.8ZM17.15 2.85a.5.5 0 0 0-.36-.85H5a3 3 0 0 0-3 3v8a3 3 0 0 0 1.85 2.77c.17.07.36.02.49-.11l12.8-12.8ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z",
            className: o,
          }),
        });
      };
    },
    109487(e, t, n) {
      n.d(t, { L: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: u = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
          } = e,
          c = (0, r.J)(t),
          h = c?.width ?? n,
          A = c?.height ?? a;
        return (0, i.jsx)("svg", {
          ...(0, s.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: A,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            fillRule: "evenodd",
            d: "M12 1C5.94 1 1 5.94 1 12s4.94 11 11 11 11-4.94 11-11S18.06 1 12 1Zm4.8 15.79a.68.68 0 0 1-.95.23c-2.57-1.58-5.8-1.93-9.62-1.06a.68.68 0 0 1-.3-1.33c4.17-.95 7.75-.54 10.64 1.22.32.2.42.62.22.94Zm1.33-2.98a.85.85 0 0 1-1.17.28c-2.94-1.81-7.43-2.34-10.91-1.28a.86.86 0 0 1-.5-1.63c3.98-1.2 8.92-.62 12.3 1.45.4.25.53.78.28 1.18Zm1.52-3.47c-.29.49-.92.65-1.4.36C14.72 8.6 8.9 8.41 5.53 9.44a1.02 1.02 0 1 1-.6-1.96C8.8 6.3 15.23 6.53 19.3 8.94c.5.29.65.92.36 1.4Z",
            clipRule: "evenodd",
            className: o,
          }),
        });
      };
    },
    523056(e, t, n) {
      n.d(t, { G: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: u = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
          } = e,
          c = (0, r.J)(t),
          h = c?.width ?? n,
          A = c?.height ?? a;
        return (0, i.jsx)("svg", {
          ...(0, s.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: A,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 1-1ZM12 19c0-.22.03-.44.08-.66a.56.56 0 0 0-.21-.58l-8.84-6.22a1 1 0 0 0-1.3.13l-.69.69a1 1 0 0 0 0 1.41l9.2 9.2a1 1 0 0 0 1.4 0l.36-.36a1 1 0 0 0 0-1.41l-.35-.36.37-.37a.56.56 0 0 0 .12-.56A3 3 0 0 1 12 19ZM15 16h.16c.33 0 .56-.32.3-.53a.98.98 0 0 0-.07-.06L6.9 9.76a1 1 0 1 0-1.1 1.66l7.3 4.88c.17.1.39.1.56.02.4-.2.86-.32 1.34-.32ZM15.82 13.39c.25.17.6.07.77-.17.12-.17.26-.32.42-.46.29-.26.32-.76 0-.98L9.73 6.93a1 1 0 0 0-1.11 1.66l7.2 4.8ZM12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8Z",
            fill: "string" == typeof u ? u : u.css,
            className: o,
          }),
        });
      };
    },
    12470(e, t, n) {
      n.d(t, { _: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: u = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
          } = e,
          c = (0, r.J)(t),
          h = c?.width ?? n,
          A = c?.height ?? a;
        return (0, i.jsxs)("svg", {
          ...(0, s.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: A,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              d: "M9 22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v3.59l4.3-4.3a1 1 0 0 1 1.4 1.42L4.42 21H8a1 1 0 0 1 1 1Z",
              className: o,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              d: "M19 22a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v6a1 1 0 1 0 2 0V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6a1 1 0 1 0 0 2h6Z",
              className: o,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=10360.8181b7f2fa2ca418.js.map
