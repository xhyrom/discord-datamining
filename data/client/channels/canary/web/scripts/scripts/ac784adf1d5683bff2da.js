(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92421"],
  {
    869469: function (e) {
      function t(e) {
        var t = Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      (t.keys = function () {
        return [];
      }),
        (t.resolve = t),
        (t.id = "869469"),
        (e.exports = t);
    },
    132399: function (e) {
      "use strict";
      e.exports = "/assets/7b057c07b77e5ef1edd3.svg";
    },
    208578: function (e) {
      "use strict";
      e.exports = "/assets/658353e531bde7fbe174.svg";
    },
    325484: function (e) {
      "use strict";
      e.exports = "/assets/3e405b86c55c8d5007fd.svg";
    },
    414575: function (e) {
      "use strict";
      e.exports = "/assets/63f1102bb425e0c8bf49.png";
    },
    807612: function (e) {
      "use strict";
      e.exports = "/assets/be6c0986a4b6ad539915.png";
    },
    24124: function (e, t, n) {
      "use strict";
      n.d(t, {
        GG: function () {
          return a;
        },
        R2: function () {
          return s;
        },
        h7: function () {
          return l;
        },
        rh: function () {
          return r;
        },
      });
      var i = n(570140);
      function l(e, t, n) {
        return new Promise((l) => {
          setTimeout(() => {
            i.Z.dispatch({
              type: "ACTIVITY_INVITE_MODAL_OPEN",
              activity: e,
              isPrivate: t,
              context: n,
              resolve: l,
            });
          }, 0);
        });
      }
      function r(e) {
        i.Z.dispatch({ type: "ACTIVITY_INVITE_MODAL_QUERY", query: e });
      }
      function a(e) {
        i.Z.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", channelId: e });
      }
      function s(e) {
        i.Z.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", userId: e });
      }
    },
    717881: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return P;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        s = n(442837),
        o = n(481060),
        c = n(620662),
        u = n(387903),
        d = n(850827),
        m = n(812206),
        f = n(202458),
        p = n(220779),
        h = n(142550),
        g = n(954017),
        v = n(314091),
        S = n(159244),
        I = n(574176),
        x = n(952164),
        _ = n(199902),
        C = n(592125),
        b = n(430824),
        E = n(496675),
        y = n(979651),
        Z = n(626135),
        T = n(153066),
        N = n(981631),
        A = n(388032),
        j = n(243718);
      function w(e) {
        let {
          type: t,
          source: n,
          activity: l,
          applicationStream: r,
          user: a,
          guildId: s,
          channelId: c,
          onAction: u,
          actionColor: m,
        } = e;
        return (0, i.jsx)(d.Z, {
          className: (0, T.l)(j, "actions", t),
          type: t,
          source: n,
          activity: l,
          applicationStream: r,
          user: a,
          guildId: s,
          look: o.Button.Looks.FILLED,
          color: null != m ? m : o.Button.Colors.PRIMARY,
          channelId: c,
          onAction: u,
        });
      }
      let P = u.Z.Types;
      t.Z = function (e) {
        let {
            activity: t,
            user: n,
            useStoreStream: r = !0,
            showActions: o = !0,
            hideHeader: d = !1,
            showChannelDetails: T = !1,
            analyticsParams: P,
            ...R
          } = e,
          O = (0, s.e7)([y.Z, C.Z], () => {
            var e;
            return C.Z.getChannel(
              null === (e = y.Z.getVoiceStateForUser(n.id)) || void 0 === e
                ? void 0
                : e.channelId,
            );
          }),
          { enableHangStatus: M } = I.n.useExperiment(
            {
              guildId: null == O ? void 0 : O.guild_id,
              location: "UserActivityContainer",
            },
            { autoTrackExposure: !1 },
          ),
          k = (0, s.e7)([_.Z], () =>
            r ? _.Z.getAnyStreamForUser(n.id) : null,
          ),
          L = M && E.Z.can(N.Plq.CONNECT, O),
          D =
            (null == t ? void 0 : t.type) === N.IIU.HANG_STATUS && L ? O : null,
          U = (0, s.e7)([b.Z, y.Z, C.Z], () => {
            var e, i;
            return (0, c.Z)(t, N.xjy.EMBEDDED)
              ? b.Z.getGuild(
                  null ===
                    (e = C.Z.getChannel(
                      null ===
                        (i = y.Z.getVoiceStateForSession(
                          n.id,
                          null == t ? void 0 : t.session_id,
                        )) || void 0 === i
                        ? void 0
                        : i.channelId,
                    )) || void 0 === e
                    ? void 0
                    : e.getGuildId(),
                )
              : null != D
                ? b.Z.getGuild(D.getGuildId())
                : null;
          }),
          V = (0, s.e7)([b.Z], () =>
            null != k ? b.Z.getGuild(k.guildId) : null,
          ),
          F = (0, s.e7)([m.Z], () => {
            if (null != t)
              return null != t.application_id
                ? m.Z.getApplication(t.application_id)
                : m.Z.getApplicationByName(t.name);
            return null;
          }),
          z = (0, f.Z)(),
          B = (0, S.Z)(n),
          W = z && null != t && B;
        return (l.useEffect(() => {
          (null == t ? void 0 : t.type) === N.IIU.HANG_STATUS &&
            L &&
            Z.default.track(N.rMx.VIEW_HANG_STATUS, {
              source: "UserProfilePopout",
              guild_id: null == D ? void 0 : D.guild_id,
              channel_id: null == D ? void 0 : D.id,
            });
        }, [null == t ? void 0 : t.type, L, D]),
        (null == t ? void 0 : t.type) !== N.IIU.HANG_STATUS || L)
          ? (0, i.jsx)(u.Z, {
              ...R,
              activity: t,
              user: n,
              application: F,
              hideHeader: d,
              activityGuild: null != U ? U : V,
              showReactions: W,
              showChannelDetails: T,
              channel: T ? O : void 0,
              renderActions: o
                ? () =>
                    (0, i.jsxs)("div", {
                      className: a()(W && j.actionsWrapper),
                      children: [
                        (0, i.jsx)(w, {
                          ...R,
                          applicationStream: k,
                          activity: t,
                          user: n,
                        }),
                        W &&
                          (0, i.jsx)(p.ZP, {
                            showReact: !0,
                            showReply: !0,
                            popoutProps: {
                              replyHeaderText: A.intl.formatToPlainString(
                                A.t["1JSA19"],
                                { activity: t.name },
                              ),
                              replyPlaceholder: A.intl.formatToPlainString(
                                A.t["8lzR/f"],
                                { channel: "@".concat(n.globalName) },
                              ),
                            },
                            onInteraction: (e) => {
                              let {
                                interactionType: i,
                                emoji: l,
                                reply: r,
                              } = e;
                              Z.default.track(
                                N.rMx.ACTIVITY_REACTOR_INTERACTED,
                                {
                                  application_id: t.application_id,
                                  interaction_type: i,
                                  ...P,
                                },
                              ),
                                i === h.L.ReactSubmit &&
                                  null != l &&
                                  (0, g.sendReactionToActivity)({
                                    reaction: l,
                                    user: n,
                                    activity: t,
                                    application: F,
                                    altText: (0, v.xC)(n, t),
                                    stream: k,
                                  }),
                                i === h.L.ReplySubmit &&
                                  null != r &&
                                  (0, g.sendReplyToActivity)({
                                    reply: r,
                                    user: n,
                                    activity: t,
                                    application: F,
                                    altText: (0, v.xC)(n, t),
                                    stream: k,
                                  });
                            },
                          }),
                      ],
                    })
                : null,
              onOpenSpotifyTrack: x.aG,
              onOpenSpotifyArtist: x.d$,
              onOpenSpotifyAlbum: x.Z5,
            })
          : null;
      };
    },
    144830: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return h;
        },
      }),
        n(411104),
        n(47120);
      var i,
        l,
        r,
        a,
        s = n(200651),
        o = n(192379),
        c = n(379649),
        u = n(846519),
        d = n(388032);
      function m(e, t, n) {
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
      ((r = i || (i = {})).ACTIVITY_FEED = "ACTIVITY_FEED"),
        (r.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW"),
        (r.USER_ACTIVITY = "USER_ACTIVITY"),
        (r.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED"),
        (r.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED"),
        ((a = l || (l = {})).START = "START"),
        (a.END = "END"),
        (a.TIME = "TIME");
      let f = (e) => (t, n) =>
          null == n ? "" : d.intl.format(e(), { time: t, ...n }),
        p = {
          ACTIVITY_FEED: {
            START: {
              [c.J6.SECONDS]: () => d.intl.string(d.t.ahzZr6),
              [c.J6.MINUTES]: (e) =>
                d.intl.formatToPlainString(d.t["03mIHR"], { time: e }),
              [c.J6.HOURS]: (e) =>
                d.intl.formatToPlainString(d.t.eNoooa, { time: e }),
              [c.J6.DAYS]: (e) =>
                d.intl.formatToPlainString(d.t["2rUo/v"], { time: e }),
            },
            END: {
              [c.J6.SECONDS]: () => d.intl.string(d.t.EluAd3),
              [c.J6.MINUTES]: (e) =>
                d.intl.formatToPlainString(d.t.BZxG8f, { time: e }),
              [c.J6.HOURS]: (e) =>
                d.intl.formatToPlainString(d.t.cRMUp6, { time: e }),
              [c.J6.DAYS]: (e) =>
                d.intl.formatToPlainString(d.t["yP1T8/"], { time: e }),
              [c.J6.WEEKS]: (e) =>
                d.intl.formatToPlainString(d.t.AWkdqa, { time: e }),
              [c.J6.MONTHS]: (e) =>
                d.intl.formatToPlainString(d.t.upamAw, { time: e }),
              [c.J6.YEARS]: (e) =>
                d.intl.formatToPlainString(d.t.vfMC2t, { time: e }),
            },
          },
          ACTIVITY_FEED_NEW: {
            START: {
              [c.J6.SECONDS]: f(() => d.t.Bf3PRU),
              [c.J6.MINUTES]: f(() => d.t["A9P+dX"]),
              [c.J6.HOURS]: f(() => d.t.KwVzfn),
              [c.J6.DAYS]: f(() => d.t.hbUpBA),
            },
            END: {
              [c.J6.SECONDS]: (e) =>
                d.intl.formatToPlainString(d.t.C3MTOD, { seconds: e }),
              [c.J6.MINUTES]: (e) =>
                d.intl.formatToPlainString(d.t["GqQ/Y2"], { minutes: e }),
              [c.J6.HOURS]: (e) =>
                d.intl.formatToPlainString(d.t.c5zfWV, { hours: e }),
              [c.J6.DAYS]: (e) =>
                d.intl.formatToPlainString(d.t.amjnaG, { days: e }),
            },
          },
          USER_ACTIVITY: {
            START: {
              [c.J6.SECONDS]: () => d.intl.string(d.t.ahzZr6),
              [c.J6.MINUTES]: function (e, t) {
                let n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                return n
                  ? d.intl.formatToPlainString(d.t["03mIHR"], { time: e })
                  : d.intl.formatToPlainString(d.t["vQml+P"], { time: e });
              },
              [c.J6.HOURS]: function (e, t) {
                let n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                return n
                  ? d.intl.formatToPlainString(d.t.eNoooa, { time: e })
                  : d.intl.formatToPlainString(d.t["4Wq+6+"], { time: e });
              },
              [c.J6.DAYS]: function (e, t) {
                let n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                return n
                  ? d.intl.formatToPlainString(d.t["2rUo/v"], { time: e })
                  : d.intl.formatToPlainString(d.t["jN3/fX"], { time: e });
              },
            },
          },
          GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
              [c.J6.NONE]: () => d.intl.string(d.t.LqDiCg),
              [c.J6.SECONDS]: (e) =>
                d.intl.formatToPlainString(d.t.xDIDBA, { time: e }),
              [c.J6.MINUTES]: (e) =>
                d.intl.formatToPlainString(d.t.KGqJcX, { time: e }),
              [c.J6.HOURS]: (e) =>
                d.intl.formatToPlainString(d.t.OLchUF, { time: e }),
            },
          },
          GAME_LIBRARY_LAST_PLAYED: {
            END: {
              [c.J6.NONE]: () => d.intl.string(d.t.EoWLrq),
              [c.J6.SECONDS]: () => d.intl.string(d.t.QTHa8f),
              [c.J6.MINUTES]: (e) =>
                d.intl.formatToPlainString(d.t.SVEfcX, { time: e }),
              [c.J6.HOURS]: (e) =>
                d.intl.formatToPlainString(d.t["0Gbusb"], { time: e }),
              [c.J6.DAYS]: (e) =>
                d.intl.formatToPlainString(d.t.hnPZZ2, { time: e }),
              [c.J6.WEEKS]: (e) =>
                d.intl.formatToPlainString(d.t.L3fTpK, { time: e }),
              [c.J6.MONTHS]: (e) =>
                d.intl.formatToPlainString(d.t.xAFWQU, { time: e }),
              [c.J6.YEARS]: (e) =>
                d.intl.formatToPlainString(d.t["9Yr3NT"], { time: e }),
            },
          },
        };
      function h(e) {
        var t, n;
        return (
          (n = class extends (t = o.PureComponent) {
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
            getTimeUnit(e, t, n) {
              let i = (0, c.jU)(e, (e) =>
                (function (e, t, n) {
                  let i = p[n];
                  if (null != i) {
                    let n = i[t];
                    if (null != n) return null != n[e];
                  }
                  return !1;
                })(e, n, t),
              );
              if (null == i)
                throw Error(
                  "Could not get the time unit in PlayTime with time: "
                    .concat(e, " for type: ")
                    .concat(n, " in location: ")
                    .concat(t),
                );
              return i;
            }
            getType() {
              let { start: e, end: t, time: n } = this.props;
              if (null != e) return "START";
              if (null != t) return "END";
              if (null != n) return "TIME";
              return null;
            }
            render() {
              let {
                  location: t,
                  messageProps: n,
                  isApplicationStreaming: i,
                  ...l
                } = this.props,
                { time: r } = this.state,
                a = this.getType();
              if (null == a) return null;
              let o = this.getTimeUnit(r, t, a),
                u = p[t][a];
              if (null == u) return null;
              let d = u[o],
                m = Math.floor((0, c.A3)(r, o));
              return (0, s.jsx)(e, {
                ...l,
                children: null == d ? void 0 : d(m, n, i),
              });
            }
            constructor(...e) {
              super(...e),
                m(this, "timer", new u.Xp()),
                m(this, "state", { time: this.getDiff() }),
                m(this, "update", () => {
                  this.setState({ time: this.getDiff() });
                });
            }
          }),
          m(n, "Locations", i),
          m(n, "Types", l),
          n
        );
      }
    },
    438139: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(846519),
        a = n(388032);
      function s(e) {
        return "".concat(e).length < 13 ? 1e3 * e : e;
      }
      function o(e) {
        return class extends l.PureComponent {
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
              ? this.getDiff(t, s(e.end) / 1e3)
              : null != e.start
                ? this.getDiff(s(e.start) / 1e3, t)
                : { hours: 0, minutes: 0, seconds: 0 };
          }
          renderTime(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return t && e <= 0 ? -1 : e < 10 ? "0".concat(e) : e;
          }
          getDiff(e, t) {
            let n = Math.max(t - e, 0),
              i = Math.floor(n) % 60,
              l = Math.floor(n / 60) % 60;
            return { hours: Math.floor(n / 3600) % 24, minutes: l, seconds: i };
          }
          render() {
            let { timestamps: t, ...n } = this.props,
              { hours: l, minutes: r, seconds: s } = this.state,
              o = {
                hours: this.renderTime(l, !0),
                minutes: this.renderTime(r),
                seconds: this.renderTime(s),
              };
            return null != t.end
              ? (0, i.jsx)(e, {
                  ...n,
                  message: a.intl.formatToPlainString(a.t["I/J7vL"], o),
                })
              : null != t.start
                ? (0, i.jsx)(e, {
                    ...n,
                    message: a.intl.formatToPlainString(a.t.M9Fexc, o),
                  })
                : null;
          }
          constructor(e) {
            var t, n, i;
            super(e),
              (t = this),
              (i = void 0),
              (n = "_interval") in t
                ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = i),
              (this._interval = new r.Xp()),
              (this.state = { ...this.getUpdatedTime() });
          }
        };
      }
    },
    652844: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return s;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(709014);
      let a = {
          mute: { name: "mute", start: 0, duration: 70 },
          unmute: { name: "unmute", start: 100, duration: 70 },
          hover_unmuted: { name: "hover_unmuted", start: 180, duration: 40 },
          hover_muted: { name: "hover_muted", start: 240, duration: 40 },
        },
        s = (e) => {
          let t = l.useRef(null),
            s = l.useRef(e);
          s.current = e;
          let o = l.useMemo(
              () => () => {
                null != t.current && t.current.play(e);
              },
              [e],
            ),
            c = l.useCallback(() => {
              if (null == t.current) return;
              let n = "mute" === e ? "hover_unmuted" : "hover_muted";
              t.current.play(n);
            }, [e]),
            u = l.useCallback(() => {
              if (null == t.current) return;
              let n = "mute" === e ? "hover_unmuted" : "hover_muted";
              t.current.stopIfPlaying(n);
            }, [e]);
          return {
            events: { onClick: o, onMouseEnter: c, onMouseLeave: u },
            play: o,
            Component: l.useCallback(
              (e) =>
                (0, i.jsx)(r.L, {
                  ...e,
                  src: () => n.e("410").then(n.t.bind(n, 992285, 19)),
                  ref: t,
                  initialAnimation: s.current,
                  markers: a,
                }),
              [],
            ),
          };
        };
    },
    582019: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return s;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(709014);
      let a = { all: { name: "all", start: 0, duration: 66 } },
        s = () => {
          let e = l.useRef(null),
            t = l.useCallback(() => {
              null != e.current && e.current.play("all");
            }, []),
            s = l.useCallback(() => {
              null != e.current && e.current.play("all");
            }, []),
            o = l.useCallback(() => {
              null != e.current && e.current.stopIfPlaying("all");
            }, []);
          return {
            events: { onClick: t, onMouseEnter: s, onMouseLeave: o },
            play: t,
            Component: l.useCallback(
              (t) =>
                (0, i.jsx)(r.L, {
                  ...t,
                  src: () => n.e("66944").then(n.t.bind(n, 166174, 19)),
                  ref: e,
                  markers: a,
                }),
              [],
            ),
          };
        };
    },
    393903: function (e, t, n) {
      "use strict";
      n.d(t, {
        y: function () {
          return a;
        },
      });
      var i = n(192379),
        l = n(237617),
        r = n(889711);
      function a(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = (0, i.useRef)(null),
          a = (0, i.useRef)(null),
          s = (0, l.Z)(() => e(n.current));
        return (
          (0, i.useLayoutEffect)(() => {
            if (!t) return;
            null == a.current && (a.current = (0, r.pP)(s.current));
            let e = n.current,
              i = a.current;
            if (null != e && null != i) (0, r.YP)(i, e);
          }, [t, e, s]),
          (0, i.useEffect)(() => {
            if (!t) return;
            let e = n.current,
              i = a.current;
            if (null != e && null != i)
              return () => {
                (0, r.UC)(i, e);
              };
          }, [t]),
          n
        );
      }
    },
    448986: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      }),
        n(47120);
      var i = n(192379);
      function l(e) {
        let t = i.useRef(e);
        return (
          i.useInsertionEffect(() => {
            t.current = e;
          }),
          i.useCallback(function () {
            for (var e = arguments.length, n = Array(e), i = 0; i < e; i++)
              n[i] = arguments[i];
            return t.current(...n);
          }, [])
        );
      }
    },
    763520: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return i;
        },
        o: function () {
          return g;
        },
      }),
        n(47120);
      var i,
        l,
        r = n(259443),
        a = n(379649),
        s = n(314897),
        o = n(592125),
        c = n(866960),
        u = n(19780),
        d = n(979651),
        m = n(626135),
        f = n(981631);
      function p(e, t, n) {
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
      ((l = i || (i = {})).SELF_VIDEO = "self_video"),
        (l.SELF_STREAM = "self_stream"),
        (l.REMOTE_VIDEO = "remote_video"),
        (l.REMOTE_STREAM = "remote_stream"),
        (l.CHANGE_VIDEO_BACKGROUND = "change_video_background"),
        (l.VIDEO_PLAYER = "video_player"),
        (l.REPLAY_VIDEO_STREAM = "replay_video_stream");
      let h = new Map();
      class g {
        onSpinnerStarted() {
          null == this.spinnerVisibleStart &&
            (this.spinnerVisibleStart = (0, a.zO)());
        }
        trackSpinnerDuration(e, t, n) {
          if (null == this.spinnerVisibleStart) return;
          let i = (function (e) {
              var t;
              let n = (null !== (t = h.get(e)) && void 0 !== t ? t : 0) + 1;
              return h.set(e, n), n;
            })(n),
            l = (0, a.zO)() - this.spinnerVisibleStart;
          if (((this.spinnerVisibleStart = null), l < 0)) {
            this.logger.warn(
              "spinner duration is negative: "
                .concat(l, " ms\n        [")
                .concat(e, ", count for stream: ")
                .concat(i, "]"),
            );
            return;
          }
          this.logger.info(
            "spinner visible for "
              .concat(l, " ms\n      [")
              .concat(e, ", count for stream: ")
              .concat(i, "]"),
          );
          let r = u.Z.getGuildId(),
            p = d.Z.getUserVoiceChannelId(r, s.default.getId()),
            g = (function (e) {
              if (null != e) {
                if (e.isGuildVoice()) return "guild_voice";
                if (e.isGuildStageVoice()) return "is_stage_channel";
                if (e.isDM()) return "dm";
                if (e.isGroupDM()) return "group_dm";
              }
              return null;
            })(o.Z.getChannel(p));
          m.default.track(f.rMx.VIDEO_SPINNER_SHOWN_V2, {
            video_spinner_context: e,
            duration_video_spinner_visible_ms: l,
            rtc_connection_id: u.Z.getRTCConnectionId(),
            media_session_id: u.Z.getMediaSessionId(),
            event_count_for_stream: i,
            guild_id: r,
            channel_id: p,
            channel_type: g,
            spinning_user_id: t,
            connection_type: c.Z.getType(),
            effective_connection_speed: c.Z.getEffectiveConnectionSpeed(),
            service_provider: c.Z.getServiceProvider(),
          });
        }
        constructor(e) {
          p(this, "logger", void 0),
            p(this, "spinnerVisibleStart", null),
            (this.logger = new r.Yd(e));
        }
      }
    },
    740265: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(726542),
        l = n(603113),
        r = n(981631),
        a = n(388032);
      function s(e) {
        var t;
        let n = null !== (t = (0, l.Z)(e)) && void 0 !== t ? t : "";
        switch (n) {
          case r.M7m.PS4:
          case r.M7m.PS5:
            return a.intl.formatToPlainString(a.t.A17aMz, {
              platform: n.toUpperCase(),
            });
          case r.M7m.XBOX:
          case r.M7m.SAMSUNG:
            return a.intl.formatToPlainString(a.t.A17aMz, {
              platform: i.Z.get(n).name,
            });
          default:
            return a.intl.string(a.t["2TbM/P"]);
        }
      }
    },
    39628: function (e, t, n) {
      "use strict";
      n(47120);
      var i,
        l = n(200651),
        r = n(192379),
        a = n(120356),
        s = n.n(a),
        o = n(846519),
        c = n(600164),
        u = n(969577);
      function d(e, t, n) {
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
      function m(e) {
        let { percentage: t, isSingleLine: n } = e;
        return (0, l.jsx)("div", {
          className: s()({ [u.bar]: n, [u.barInMultiLine]: !n }),
          children: (0, l.jsx)("div", {
            className: u.barInner,
            style: { width: "".concat(100 * Math.max(Math.min(t, 1), 0), "%") },
          }),
        });
      }
      function f(e) {
        return String(e).padStart(2, "0");
      }
      function p(e) {
        let { time: t, padLargestUnit: n } = e,
          i = Math.floor(t) % 60,
          l = Math.floor(t / 60) % 60,
          r = Math.floor(t / 3600);
        return 0 === r
          ? n
            ? "".concat(f(l), ":").concat(f(i))
            : "".concat(l, ":").concat(f(i))
          : n
            ? "".concat(f(r), ":").concat(f(l), ":").concat(f(i))
            : "".concat(r, ":").concat(f(l), ":").concat(f(i));
      }
      class h extends (i = r.PureComponent) {
        componentDidMount() {
          this.timer.start(500, () => {
            this.setState({ now: Date.now() });
          });
        }
        componentWillUnmount() {
          this.timer.stop();
        }
        render() {
          let {
              start: e,
              end: t,
              className: n,
              themed: i,
              singleLine: r = !1,
            } = this.props,
            { now: a } = this.state,
            o = (t - e) / 1e3,
            d = Math.max(Math.min((a - e) / 1e3, o), 0);
          return r
            ? (0, l.jsxs)("div", {
                className: s()(n, { [u.themed]: i }, u.singleLineContainer),
                children: [
                  (0, l.jsx)("div", {
                    className: u.textLeftInSingleLine,
                    children: p({ time: d, padLargestUnit: !0 }),
                  }),
                  (0, l.jsx)("div", {
                    className: u.barInSingleLine,
                    children: (0, l.jsx)(m, {
                      percentage: d / o,
                      isSingleLine: !0,
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: u.textRight,
                    children: p({ time: o, padLargestUnit: !0 }),
                  }),
                ],
              })
            : (0, l.jsxs)("div", {
                className: s()(n, { [u.themed]: i }),
                children: [
                  (0, l.jsx)(m, { percentage: d / o, isSingleLine: !1 }),
                  (0, l.jsxs)(c.Z, {
                    children: [
                      (0, l.jsx)(c.Z.Child, {
                        grow: 1,
                        className: u.textLeft,
                        children: p({ time: d, padLargestUnit: !1 }),
                      }),
                      (0, l.jsx)(c.Z.Child, {
                        grow: 0,
                        className: u.textRight,
                        children: p({ time: o, padLargestUnit: !1 }),
                      }),
                    ],
                  }),
                ],
              });
        }
        constructor(...e) {
          super(...e),
            d(this, "timer", new o.Xp()),
            d(this, "state", { now: Date.now() });
        }
      }
      d(h, "defaultProps", { themed: !1 }), (t.Z = h);
    },
    563218: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return v;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        a = n(570140),
        s = n(519938),
        o = n(928518),
        c = n(585483),
        u = n(317381),
        d = n(16609),
        m = n(917107),
        f = n(716600),
        p = n(918559),
        h = n(981631);
      let g = (e, t) => {
        a.Z.wait(() => {
          (0, s.Cz)(e, t);
        });
      };
      function v(e) {
        let t,
          { embedId: n, className: a, style: s } = e,
          v = (0, r.e7)([o.Z], () => o.Z.getWindow(h.KJ3.CHANNEL_CALL_POPOUT)),
          S = (0, f.Z)(),
          I = (0, r.e7)([u.ZP], () => u.ZP.getActivityPanelMode());
        if (null != S && !(0, m.Z)((0, d.p)(S.location)) && I === p.Ez.PANEL)
          t = window;
        else {
          var x;
          t =
            null !== (x = null == v ? void 0 : v.window) && void 0 !== x
              ? x
              : window;
        }
        let _ = l.useRef(null),
          C = l.useMemo(() => {
            let e = null;
            return () => {
              null == e &&
                (e = t.requestAnimationFrame(() => {
                  var t, i;
                  g(
                    n,
                    null !==
                      (i =
                        null === (t = _.current) || void 0 === t
                          ? void 0
                          : t.getBoundingClientRect()) && void 0 !== i
                      ? i
                      : null,
                  ),
                    (e = null);
                }));
            };
          }, [n, t]);
        return (
          l.useEffect(
            () => (
              t.addEventListener("resize", C),
              c.S.subscribe(h.CkL.REMEASURE_TARGET, C),
              () => {
                t.removeEventListener("resize", C),
                  c.S.unsubscribe(h.CkL.REMEASURE_TARGET, C);
              }
            ),
            [C, t],
          ),
          l.useLayoutEffect(() => {
            let e = _.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            C();
            let i = new t.ResizeObserver(C);
            return (
              i.observe(e),
              () => {
                i.disconnect(), g(n, null);
              }
            );
          }, [n, C]),
          (0, i.jsx)("div", { ref: _, style: s, className: a })
        );
      }
    },
    387903: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return i;
        },
      }),
        n(789020),
        n(47120);
      var i,
        l,
        r,
        a = n(200651),
        s = n(192379),
        o = n(120356),
        c = n.n(o),
        u = n(512722),
        d = n.n(u),
        m = n(780384),
        f = n(481060),
        p = n(438139),
        h = n(410030),
        g = n(726542),
        v = n(600164),
        S = n(686546),
        I = n(111028),
        x = n(925329),
        _ = n(810568),
        C = n(168524),
        b = n(565138),
        E = n(833858),
        y = n(223135),
        Z = n(707409),
        T = n(769654),
        N = n(424678),
        A = n(750154),
        j = n(768581),
        w = n(630388),
        P = n(153066),
        R = n(740265),
        O = n(122810),
        M = n(833664),
        k = n(503438),
        L = n(802856),
        D = n(420660),
        U = n(39628),
        V = n(701488),
        F = n(981631),
        z = n(388032),
        B = n(344782);
      function W(e, t, n) {
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
      ((r = i || (i = {})).ACTIVITY_FEED = "ActivityFeed"),
        (r.STREAM_PREVIEW = "StreamPreview"),
        (r.VOICE_CHANNEL = "VoiceChannel");
      let G = {
          StreamPreview: [108, 60],
          VoiceChannel: [108, 60],
          ActivityFeed: [900, 500],
        },
        { getAssetImage: H } = n(81063),
        Y = (0, p.Z)(
          class extends s.PureComponent {
            render() {
              return (0, a.jsx)("div", {
                className: B.timestamp,
                children: this.props.message,
              });
            }
          },
        );
      function q(e) {
        let { activity: t } = e,
          n = (0, h.ZP)(),
          i = (function (e) {
            let { activity: t } = e,
              n = null;
            return (
              (0, k.Z)(t) && (n = F.ABu.SPOTIFY),
              null != t.platform &&
                [F.M7m.PS4, F.M7m.PS5].includes(t.platform) &&
                (n = F.ABu.PLAYSTATION),
              n
            );
          })({ activity: t });
        if (null == i) return null;
        let l = g.Z.get(i);
        return (0, a.jsx)("img", {
          alt: "",
          src: (0, m.ap)(n) ? l.icon.lightSVG : l.icon.darkSVG,
          className: B.platformIcon,
        });
      }
      class J extends (l = s.PureComponent) {
        get activity() {
          let { activity: e, activityGuild: t } = this.props;
          return null != t &&
            (null == e ? void 0 : e.type) !== F.IIU.PLAYING &&
            (null == e ? void 0 : e.type) !== F.IIU.WATCHING &&
            (null == e ? void 0 : e.type) !== F.IIU.LISTENING &&
            (null == e ? void 0 : e.type) !== F.IIU.HANG_STATUS
            ? { type: F.IIU.PLAYING, name: z.intl.string(z.t.eXan7O) }
            : e;
        }
        getTypeClass(e, t) {
          return (0, P.l)(B, e, this.props.type, t);
        }
        isStreamerOnTypeActivityFeed() {
          return (0, D.Z)(this.activity) && "ActivityFeed" === this.props.type;
        }
        renderHeader(e) {
          let t;
          let {
              hideHeader: n,
              activityGuild: i,
              showChannelDetails: l,
              renderHeaderAccessory: r,
            } = this.props,
            s = this.activity;
          if (n || null == s) return null;
          let { name: o } = s;
          switch (s.type) {
            case F.IIU.STREAMING:
              t = z.intl.formatToPlainString(z.t.Dzgz4u, {
                platform: [F.ABu.TWITCH, F.ABu.YOUTUBE].includes(
                  o.toLowerCase(),
                )
                  ? o
                  : g.Z.get(F.ABu.TWITCH).name,
              });
              break;
            case F.IIU.LISTENING:
              t = z.intl.formatToPlainString(z.t["5sYPnp"], { name: o });
              break;
            case F.IIU.WATCHING:
              t = z.intl.formatToPlainString(z.t.Ge29Z2, { name: o });
              break;
            case F.IIU.PLAYING:
              t = (0, R.Z)(s);
              break;
            case F.IIU.COMPETING:
              t = z.intl.formatToPlainString(z.t.SQCo6O, { name: o });
          }
          if (null != i) {
            var u;
            t = (0, w.yE)(
              null !== (u = null == s ? void 0 : s.flags) && void 0 !== u
                ? u
                : 0,
              F.xjy.EMBEDDED,
            )
              ? s.type === F.IIU.WATCHING
                ? z.intl.formatToPlainString(z.t["M/L8oq"], {
                    guildName: i.name,
                  })
                : z.intl.formatToPlainString(z.t["4chKQk"], {
                    guildName: i.name,
                  })
              : z.intl.formatToPlainString(z.t.sddlGB, { server: i.name });
          }
          return (
            (null == s ? void 0 : s.type) === F.IIU.HANG_STATUS &&
              (t = z.intl.string(z.t["74vS//"])),
            (0, a.jsxs)("div", {
              className: B.headerContainer,
              children: [
                (0, a.jsx)(f.Heading, {
                  className: c()(
                    (0, P.l)(B, "headerText", e ? "EmptyBody" : "Normal"),
                  ),
                  variant: l ? "text-xs/semibold" : "eyebrow",
                  children: (0, a.jsx)(I.Z, { children: t }),
                }),
                null == r ? void 0 : r(),
              ],
            })
          );
        }
        renderXboxImage() {
          return (0, a.jsx)("div", {
            className: B.assets,
            children: (0, a.jsx)("img", {
              alt: "",
              src: g.Z.get(F.ABu.XBOX).icon.customPNG,
              className: c()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
          });
        }
        renderImage(e) {
          var t, n, i;
          let l, r;
          if (e.type === F.IIU.HANG_STATUS)
            return (0, a.jsx)("div", {
              className: B.assets,
              children: (0, a.jsx)(y.Z, {
                hangStatusActivity: e,
                className: c()(
                  B.assetsHangStatus,
                  this.getTypeClass("assetsSmallImage", "WithoutLargeImage"),
                ),
              }),
            });
          let { type: o } = this.props,
            { assets: u, application_id: d } = e;
          if (null == u || (null == u.large_image && null == u.small_image))
            return null;
          (0, D.Z)(e) && (l = G[o]);
          let m = (0, k.Z)(e),
            p =
              null != u.large_image
                ? (0, a.jsx)("img", {
                    alt: null !== (t = u.large_text) && void 0 !== t ? t : "",
                    src: H(
                      d,
                      u.large_image,
                      null != l ? l : [V.Si.LARGE, V.Si.LARGE],
                    ),
                    className: c()(
                      this.getTypeClass(
                        "assetsLargeImage",
                        this.isStreamerOnTypeActivityFeed() ? F.ABu.TWITCH : "",
                      ),
                      {
                        [null !== (n = this.getTypeClass("assetsLargeMask")) &&
                        void 0 !== n
                          ? n
                          : ""]: null != u.small_image,
                        [B.assetsLargeImageSpotify]: m,
                      },
                    ),
                  })
                : null;
          if (m)
            p = (0, a.jsx)(f.Anchor, {
              onClick: this.handleOpenSpotifyAlbum,
              children: p,
            });
          else if ((0, A.dS)(e)) {
            let t = (0, A.rq)(e);
            if (null == t) return null;
            p = (0, a.jsx)(S.ZP, {
              mask: S.ZP.Masks.SQUIRCLE,
              width: V.Si.SMALL,
              height: V.Si.SMALL,
              children: (0, a.jsx)("img", {
                src:
                  null !==
                    (i = j.ZP.getGuildIconURL({
                      id: t.guildId,
                      icon: u.small_image,
                      size: V.Si.SMALL,
                    })) && void 0 !== i
                    ? i
                    : void 0,
                className: B.assetsLargeImageVoiceChannel,
                alt: "",
              }),
            });
          }
          return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            "" !== e.url &&
            (p = (0, a.jsxs)("div", {
              className: B.twitchImageContainer,
              children: [
                (0, a.jsxs)("div", {
                  className: B.twitchImageOverlay,
                  children: [
                    (0, a.jsx)(f.H, {
                      className: B.streamName,
                      children: e.name,
                    }),
                    (0, a.jsx)("div", {
                      className: B.streamGame,
                      children: z.intl.format(z.t.gmCZRU, { game: e.details }),
                    }),
                  ],
                }),
                (0, a.jsx)(f.Anchor, {
                  className: B.twitchBackgroundImage,
                  href: e.url,
                  children: p,
                }),
              ],
            })),
          !(0, A.dS)(e) &&
            null != u.small_image &&
            (r = (0, a.jsx)(f.Tooltip, {
              text: "" !== u.small_text ? u.small_text : null,
              position: "top",
              children: (e) => {
                var t;
                return (0, a.jsx)("img", {
                  alt: null !== (t = u.small_text) && void 0 !== t ? t : "",
                  src: H(d, u.small_image, [V.Si.SMALL, V.Si.SMALL]),
                  className: this.getTypeClass(
                    "assetsSmallImage",
                    null == p ? "WithoutLargeImage" : void 0,
                  ),
                  ...e,
                });
              },
            })),
          null == p)
            ? (0, a.jsx)("div", { className: B.assets, children: r })
            : (0, a.jsxs)("div", {
                className: B.assets,
                children: [
                  (0, a.jsx)(f.Tooltip, {
                    text: null != u.large_text ? u.large_text : null,
                    position: "top",
                    children: (e) => {
                      let { onMouseEnter: t, onMouseLeave: n } = e;
                      return null != p
                        ? s.cloneElement(p, {
                            onMouseEnter: t,
                            onMouseLeave: n,
                          })
                        : null;
                    },
                  }),
                  r,
                ],
              });
        }
        renderGameImage(e) {
          let {
            user: t,
            type: n,
            application: i,
            activityGuild: l,
          } = this.props;
          return null != e.assets ||
            (0, O.Z)(e) ||
            e.type !== F.IIU.PLAYING ||
            "ActivityFeed" === n ||
            t.bot
            ? null
            : null == i && null != l
              ? (0, a.jsx)("div", {
                  className: c()(B.gameIcon, B.screenshareIcon),
                })
              : (0, a.jsx)(x.Z, { className: B.gameIcon, game: i });
        }
        renderName(e) {
          let { user: t, application: n, hideName: i } = this.props;
          if (i) return null;
          let { details: l, type: r } = e;
          if (r === F.IIU.CUSTOM_STATUS) return null;
          let s = (0, M.Z)(e),
            o = e.name,
            u = o;
          return (r === F.IIU.HANG_STATUS
            ? (u = (0, E.O8)(e))
            : s && null != n
              ? (u = (0, a.jsx)("span", {
                  className: B.activityName,
                  children: u,
                }))
              : !s &&
                ((o = l),
                (u = l),
                (0, k.Z)(e) && null != e.sync_id && null != l
                  ? (u = (0, a.jsx)(f.Anchor, {
                      className: B.bodyLink,
                      onClick: this.handleOpenSpotifyTrack,
                      children: l,
                    }))
                  : (0, A.dS)(e) && (u = e.name)),
          null == u)
            ? null
            : (0, a.jsx)(f.Text, {
                title: o,
                variant: "text-sm/semibold",
                className: c()((0, P.l)(B, "name", t.bot ? "wrap" : "normal")),
                children: u,
              });
        }
        renderDetails(e) {
          let t;
          let { details: n, state: i } = e,
            { activityGuild: l } = this.props,
            r = n,
            s = n;
          if (e.type === F.IIU.CUSTOM_STATUS) r = i;
          else if (e.type === F.IIU.HANG_STATUS)
            (r =
              null != l
                ? z.intl.formatToPlainString(z.t.IAZiW1, { guildName: l.name })
                : void 0),
              (t =
                null != l
                  ? () => {
                      (0, T.X)(l.id);
                    }
                  : void 0);
          else if (!(0, M.Z)(e)) {
            if (((r = i), (s = i), (0, k.Z)(e) && null != i))
              r = z.intl.format(z.t.uU9le3, {
                artists: s,
                artistsHook: (t, n) =>
                  (0, a.jsx)(
                    N.Z,
                    {
                      artists: i,
                      linkClassName: B.bodyLink,
                      canOpen: null != e.sync_id,
                      onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                    },
                    n,
                  ),
              });
            else if ((0, A.dS)(e)) {
              var o;
              r =
                null === (o = e.assets) || void 0 === o ? void 0 : o.small_text;
            }
          }
          return null == r || "" === r
            ? null
            : ((0, D.Z)(e) &&
                  (r = z.intl.formatToPlainString(z.t.gmCZRU, { game: r })),
                null != t)
              ? (0, a.jsx)(f.Clickable, {
                  onClick: t,
                  title: null != s ? s : void 0,
                  className: B.clickableDetails,
                  children: r,
                })
              : (0, a.jsx)("div", {
                  title: null != s ? s : void 0,
                  className:
                    (0, D.Z)(e) || (0, k.Z)(e) ? B.detailsWrap : B.details,
                  children: r,
                });
        }
        renderChannelDetails(e) {
          let {
            activityGuild: t,
            showChannelDetails: n,
            channel: i,
          } = this.props;
          return n && null != t
            ? null == i
              ? (0, a.jsx)("div", {
                  className:
                    (0, D.Z)(e) || (0, k.Z)(e) ? B.detailsWrap : B.details,
                  children: z.intl.format(z.t["hq/Qzc"], { guildName: t.name }),
                })
              : (0, a.jsxs)("div", {
                  className: c()(
                    (0, D.Z)(e) || (0, k.Z)(e) ? B.detailsWrap : B.details,
                    B.guildDetails,
                  ),
                  children: [
                    (0, a.jsx)(b.Z, {
                      guild: t,
                      size: b.Z.Sizes.SMOL,
                      className: B.guildIcon,
                    }),
                    (0, a.jsx)(f.ChevronSmallRightIcon, {
                      size: "xxs",
                      color: "currentColor",
                    }),
                    (0, a.jsxs)("div", {
                      className: B.voiceChannelInfo,
                      children: [
                        (0, a.jsx)(f.VoiceNormalIcon, {
                          size: "xxs",
                          color: "currentColor",
                        }),
                        (0, a.jsx)(f.Text, {
                          variant: "text-xs/normal",
                          children: null == i ? void 0 : i.name,
                        }),
                      ],
                    }),
                  ],
                })
            : null;
        }
        renderTimePlayed(e) {
          let { activityGuild: t } = this.props;
          if (!(0, M.Z)(e) || (0, k.Z)(e)) return null;
          let { timestamps: n } = e;
          return null == n
            ? null
            : (0, O.Z)(e)
              ? (0, a.jsx)(Y, { timestamps: n })
              : (0, a.jsx)(Z.ZP, {
                  start: n.start,
                  location: Z.ZP.Locations.USER_ACTIVITY,
                  className: B.playTime,
                  isApplicationStreaming: null != t,
                });
        }
        renderTimeBar(e) {
          if (!(0, k.Z)(e)) return null;
          let { timestamps: t } = e;
          if (null == t) return null;
          let { start: n, end: i } = t;
          return null == n || null == i
            ? null
            : (0, a.jsx)(U.Z, {
                start: n,
                end: i,
                className: this.getTypeClass("timeBar"),
                themed: "VoiceChannel" === this.props.type,
              });
        }
        renderState(e, t) {
          var n, i;
          let l;
          let { state: r, party: s, assets: o } = e,
            c = r,
            u = r;
          return (!(0, M.Z)(e) &&
            ((c = null == o ? void 0 : o.large_text),
            (u = null == o ? void 0 : o.large_text),
            (0, k.Z)(e) &&
              null != c &&
              (c = z.intl.format(z.t.vOLBEx, {
                album: u,
                albumHook: (t, n) =>
                  null != e.sync_id && null != u
                    ? (0, a.jsx)(
                        f.Anchor,
                        {
                          className: B.bodyLink,
                          onClick: this.handleOpenSpotifyAlbum,
                          children: u,
                        },
                        n,
                      )
                    : u,
              }))),
          (null != c && "" !== c && e.type !== F.IIU.CUSTOM_STATUS) ||
            (0, A.dS)(e))
            ? ((null == s ? void 0 : s.size) == null &&
              [V.Zc].includes(
                null !== (n = e.application_id) && void 0 !== n ? n : "",
              )
                ? (l = z.intl.formatToPlainString(z.t["u//9Bw"], {
                    count: "0",
                    max:
                      null !==
                        (i = null == t ? void 0 : t.getMaxParticipants()) &&
                      void 0 !== i
                        ? i
                        : 0,
                  }))
                : (0, A.dS)(e) && (null == s ? void 0 : s.size) != null
                  ? (l = z.intl.formatToPlainString(z.t["JC/3x8"], {
                      numSpeakers: s.size[0],
                      numListeners: s.size[1] - s.size[0],
                    }))
                  : (null == s ? void 0 : s.size) != null &&
                    s.size.length >= 2 &&
                    (l = z.intl.formatToPlainString(z.t["u//9Bw"], {
                      count: s.size[0],
                      max: s.size[1],
                    })),
              (0, a.jsxs)("div", {
                className: B.state,
                children: [
                  (0, a.jsx)("span", { title: u, children: c }),
                  null != l
                    ? (0, a.jsxs)("span", { children: [" ", l] })
                    : null,
                ],
              }))
            : null;
        }
        render() {
          let e;
          let {
              type: t,
              renderActions: n,
              className: i,
              application: l,
              showReactions: r,
              onClose: s,
              onOpenGameProfileModal: o,
            } = this.props,
            u = this.activity;
          if (null == u || u.type === F.IIU.CUSTOM_STATUS) return null;
          let d = "ActivityFeed" === t,
            m = "StreamPreview" === t,
            p = !1;
          (0, L.Z)(u)
            ? ((e = this.renderXboxImage()), (p = !0))
            : null == (e = this.renderImage(u)) &&
              (p = null != (e = this.renderGameImage(u)));
          let h = this.renderName(u),
            g = this.renderDetails(u),
            S = this.renderState(u, l),
            I = this.renderTimePlayed(u),
            x = this.renderChannelDetails(u),
            _ = null != n ? n() : null,
            C = this.renderTimeBar(u),
            b = ![e, h, g, S, I, C, _].some((e) => null != e);
          return (0, a.jsxs)("div", {
            className: c()(this.getTypeClass("activity"), i),
            children: [
              this.renderHeader(b),
              (0, a.jsx)("div", {
                className: c()(
                  p ? B.bodyAlignCenter : B.bodyNormal,
                  r && !m && B.wrap,
                ),
                children: (0, a.jsxs)("div", {
                  className: B.activityDetails,
                  children: [
                    e,
                    this.isStreamerOnTypeActivityFeed()
                      ? null
                      : (0, a.jsxs)(v.Z.Child, {
                          className: c()(
                            (0, P.l)(
                              B,
                              "content",
                              p
                                ? "GameImage"
                                : null != e
                                  ? "Images"
                                  : "NoImages",
                              t,
                            ),
                          ),
                          children: [
                            (0, a.jsxs)(f.Clickable, {
                              className: c()(null != o && B.openGameProfile),
                              onClick:
                                null != o
                                  ? (e) => {
                                      o(e), null == s || s();
                                    }
                                  : void 0,
                              children: [h, g, S, I],
                            }),
                            x,
                            m ? null : C,
                            d ? _ : null,
                          ],
                        }),
                  ],
                }),
              }),
              m ? _ : null,
              (0, a.jsx)(q, { activity: u }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            W(this, "handleOpenSpotifyTrack", () => {
              let { activity: e, onOpenSpotifyTrack: t } = this.props;
              d()(null != e, "Spotify activity was null"), null == t || t(e);
            }),
            W(this, "handleOpenSpotifyArtist", (e) => {
              let { activity: t, onOpenSpotifyArtist: n, user: i } = this.props;
              d()(null != t, "Spotify activity was null"),
                null == n || n(t, i.id, e);
            }),
            W(this, "handleOpenSpotifyAlbum", () => {
              let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
              d()(null != e, "Spotify activity was null"),
                null == t || t(e, n.id);
            });
        }
      }
      W(J, "Types", i);
      let X = (e) => {
        var t, n, i;
        let l = (0, C.Z)({
          location: "UserActivity",
          applicationId:
            null !==
              (i =
                null === (t = e.application) || void 0 === t ? void 0 : t.id) &&
            void 0 !== i
              ? i
              : null === (n = e.activity) || void 0 === n
                ? void 0
                : n.application_id,
          source: _.m1.UserProfile,
          sourceUserId: e.user.id,
          trackEntryPointImpression: !0,
        });
        return (0, a.jsx)(J, { ...e, onOpenGameProfileModal: l });
      };
      (X.Types = i), (t.Z = X);
    },
    850827: function (e, t, n) {
      "use strict";
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(512722),
        s = n.n(a),
        o = n(442837),
        c = n(481060),
        u = n(730749),
        d = n(726542),
        m = n(600164),
        f = n(750154),
        p = n(592125),
        h = n(594174),
        g = n(979651),
        v = n(374129),
        S = n(639351),
        I = n(503438),
        x = n(802856),
        _ = n(387903),
        C = n(606925),
        b = n(719216),
        E = n(429589),
        y = n(276149),
        Z = n(636245),
        T = n(697761),
        N = n(611459),
        A = n(544671),
        j = n(757182),
        w = n(910424),
        P = n(981631),
        R = n(522832);
      t.Z = (0, u.Z)((e) => {
        let {
            activity: t,
            embeddedActivity: n,
            user: l,
            applicationStream: a,
            className: u,
            guildId: O,
            channelId: M,
            source: k,
            color: L = c.Button.Colors.WHITE,
            look: D = c.Button.Looks.OUTLINED,
            type: U,
            onAction: V,
          } = e,
          F = (0, o.e7)([h.default], () => {
            let e = h.default.getCurrentUser();
            return (
              s()(
                null != e,
                "UserActivityActions: currentUser cannot be undefined",
              ),
              e
            );
          }),
          z = U === _.Y.STREAM_PREVIEW || null != a,
          B = (0, I.Z)(t),
          W = B || z ? m.Z.Direction.HORIZONTAL : m.Z.Direction.VERTICAL,
          G = (null == t ? void 0 : t.type) === P.IIU.HANG_STATUS,
          H = (0, o.e7)([g.Z, p.Z], () => {
            var e;
            return G
              ? p.Z.getChannel(
                  null === (e = g.Z.getVoiceStateForUser(l.id)) || void 0 === e
                    ? void 0
                    : e.channelId,
                )
              : null;
          }),
          Y = W === m.Z.Direction.VERTICAL;
        return (0, i.jsx)(m.Z, {
          grow: 0,
          align: m.Z.Align.STRETCH,
          direction: W,
          wrap: Y ? m.Z.Wrap.WRAP : m.Z.Wrap.NO_WRAP,
          className: r()(u, R.buttonsWrapper, Y ? R.vertical : R.horizontal),
          children: (() => {
            if ((0, x.Z)(t))
              return (0, i.jsx)(
                C.Z,
                {
                  platform: d.Z.get(P.ABu.XBOX),
                  look: D,
                  color: L,
                  onAction: V,
                  Icon: S.Z,
                },
                "ConnectPlatformActivityButton",
              );
            if (
              (null == t ? void 0 : t.platform) === P.M7m.PS4 ||
              (null == t ? void 0 : t.platform) === P.M7m.PS5
            )
              return (0, i.jsx)(
                C.Z,
                {
                  look: D,
                  color: L,
                  platform: d.Z.get(P.ABu.PLAYSTATION),
                  onAction: V,
                  Icon: v.Z,
                },
                "ConnectPlatformActivityButton",
              );
            if (B) {
              let e = (0, i.jsx)(
                  A.Z,
                  {
                    activity: t,
                    user: l,
                    guildId: O,
                    channelId: M,
                    source: k,
                    look: D,
                    color: L,
                    onAction: V,
                  },
                  "spotify-activity-sync-button",
                ),
                n = (0, i.jsx)(
                  N.Z,
                  {
                    activity: t,
                    user: l,
                    source: k,
                    look: D,
                    color: L,
                    onAction: V,
                  },
                  "spotify-activity-play-button",
                );
              return (0, i.jsxs)(i.Fragment, { children: [n, e] });
            }
            if ((0, f.dS)(t)) {
              let e = (0, f.rq)(t);
              return null == e
                ? null
                : (0, i.jsx)(
                    Z.Z,
                    {
                      guildId: e.guildId,
                      channelId: e.channelId,
                      color: L,
                      look: D,
                      onAction: V,
                    },
                    e.channelId,
                  );
            }
            return z
              ? (0, i.jsx)(
                  w.Z,
                  {
                    isCurrentUser: F.id === l.id,
                    color: L,
                    look: D,
                    applicationStream: a,
                    onAction: V,
                  },
                  "watch-button",
                )
              : G && null != H
                ? (0, i.jsx)(
                    y.Z,
                    { color: L, look: D, hangStatusChannel: H, onAction: V },
                    "hang-status-button",
                  )
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(
                        j.Z,
                        { activity: t, color: L, look: D, onAction: V },
                        "watch-button",
                      ),
                      (0, i.jsx)(
                        E.Z,
                        {
                          activity: t,
                          embeddedActivity: n,
                          user: l,
                          color: L,
                          look: D,
                          onAction: V,
                        },
                        "join-activity-button",
                      ),
                      (0, i.jsx)(
                        T.Z,
                        {
                          activity: t,
                          user: l,
                          color: L,
                          look: D,
                          onAction: V,
                        },
                        "notify-button",
                      ),
                      (0, i.jsx)(
                        b.Z,
                        {
                          user: l,
                          color: L,
                          look: D,
                          activity: t,
                          onAction: V,
                        },
                        "custom-activity-button",
                      ),
                    ],
                  });
          })(),
        });
      });
    },
    606925: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(231757),
        a = n(553795),
        s = n(915863),
        o = n(388032),
        c = n(542471);
      function u(e) {
        let { platform: t, color: n, look: u, onAction: d, Icon: m } = e;
        if (
          (0, l.e7)([a.Z], () =>
            a.Z.getAccounts().some((e) => e.type === t.type),
          )
        )
          return null;
        let f =
          null != m
            ? (0, i.jsx)(m, { className: c.platformIcon })
            : (0, i.jsx)("img", {
                alt: "",
                className: c.platformIcon,
                src: t.icon.whiteSVG,
              });
        return (0, i.jsx)(
          s.Z,
          {
            onClick: () => {
              null == d || d(),
                (0, r.Z)({ platformType: t.type, location: "Activity Action" });
            },
            color: n,
            look: u,
            fullWidth: !0,
            children: (0, i.jsxs)("div", {
              className: c.flex,
              children: [f, o.intl.format(o.t.XWSHTU, { platform: t.name })],
            }),
          },
          "connect-platform-activity",
        );
      }
    },
    719216: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(763472),
        r = n(49012),
        a = n(591759),
        s = n(915863);
      function o(e) {
        let { activity: t, color: n, user: o, look: c, onAction: u } = e;
        if ((null == t ? void 0 : t.buttons) == null || t.buttons.length < 1)
          return null;
        async function d(e, t, n) {
          try {
            let i = await (0, l.sd)(e, t);
            if (i.button_urls.length <= n) return;
            let s = i.button_urls[n];
            if ("string" != typeof s) return;
            let o = a.Z.safeParseWithQuery(s);
            if (null == o || null == o.protocol || null == o.hostname) return;
            (0, r.q)({ href: a.Z.format(o), trusted: !1 });
          } catch (e) {}
        }
        return (0, i.jsx)(i.Fragment, {
          children: t.buttons.map((e, l) =>
            (0, i.jsx)(
              s.Z,
              {
                color: n,
                look: c,
                onClick: () => {
                  null == u || u(), d(t, o.id, l);
                },
                children: e,
              },
              "customButton-".concat(l),
            ),
          ),
        });
      }
    },
    276149: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(287734),
        a = n(19780),
        s = n(626135),
        o = n(915863),
        c = n(981631),
        u = n(388032);
      function d(e) {
        let {
            className: t,
            color: n,
            look: d,
            hangStatusChannel: m,
            onAction: f,
          } = e,
          p = (0, l.e7)([a.Z], () => a.Z.getChannelId() === m.id);
        return (0, i.jsx)(
          o.Z,
          {
            className: t,
            disabled: p,
            onClick: () => {
              null == f || f(),
                r.default.selectVoiceChannel(m.id),
                s.default.track(c.rMx.HANG_STATUS_CTA_CLICKED, {
                  source: "UserProfilePopout",
                  guild_id: m.guild_id,
                  channel_id: m.id,
                });
            },
            color: n,
            look: d,
            fullWidth: !0,
            children: u.intl.string(u.t["9C444u"]),
          },
          "join-hang",
        );
      }
    },
    636245: function (e, t, n) {
      "use strict";
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(922482),
        a = n(979651),
        s = n(915863),
        o = n(388032),
        c = n(614774);
      t.Z = (e) => {
        let { guildId: t, channelId: n, color: u, look: d, onAction: m } = e,
          f = (0, l.e7)([a.Z], () => a.Z.isInChannel(n), [n]);
        return (0, i.jsx)(
          s.Z,
          {
            className: c.button,
            color: u,
            look: d,
            disabled: f,
            onClick: () => {
              null == m || m(), r.AC(t, n);
            },
            fullWidth: !0,
            children: o.intl.string(o.t.ZYO5OD),
          },
          "stage",
        );
      };
    },
    697761: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(710845),
        r = n(620662),
        a = n(915863),
        s = n(981631),
        o = n(388032);
      function c(e) {
        let { activity: t, user: n, look: c, color: u, onAction: d } = e;
        return (0, r.Z)(t, s.xjy.INSTANCE)
          ? (0, i.jsx)(
              a.Z,
              {
                look: c,
                color: u,
                onClick: () => {
                  null == d || d(),
                    new l.Z("UserActivityActions").log("notify", n.id, t);
                },
                fullWidth: !0,
                children: o.intl.string(o.t.vwl1PD),
              },
              "notify",
            )
          : null;
      }
    },
    611459: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(246841),
        r = n(620662),
        a = n(503438),
        s = n(981631),
        o = n(472113);
      function c(e) {
        let {
          activity: t,
          user: n,
          source: c,
          look: u,
          color: d,
          onAction: m,
        } = e;
        return null != t && (0, r.Z)(t, s.xjy.PLAY) && (0, a.Z)(t)
          ? (0, i.jsx)(
              l.Z,
              {
                className: o.button,
                size: o.buttonSize,
                look: u,
                color: d,
                fullWidth: !0,
                activity: t,
                user: n,
                source: c,
                onAction: m,
              },
              "play",
            )
          : null;
      }
    },
    544671: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(557711),
        r = n(620662),
        a = n(503438),
        s = n(981631),
        o = n(472113);
      function c(e) {
        let {
          activity: t,
          user: n,
          guildId: c,
          channelId: u,
          source: d,
          look: m,
          color: f,
          onAction: p,
        } = e;
        return null != t && (0, r.Z)(t, s.xjy.SYNC) && (0, a.Z)(t)
          ? (0, i.jsx)(
              l.Z,
              {
                className: o.button,
                size: o.buttonSize,
                look: m,
                color: f,
                user: n,
                activity: t,
                guildId: null != c ? c : void 0,
                channelId: u,
                source: d,
                onAction: p,
              },
              "sync",
            )
          : null;
      }
    },
    910424: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return S;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        a = n(572691),
        s = n(287734),
        o = n(872810),
        c = n(40851),
        u = n(102172),
        d = n(199902),
        m = n(592125),
        f = n(585483),
        p = n(915863),
        h = n(981631),
        g = n(388032),
        v = n(951908);
      function S(e) {
        let {
            isCurrentUser: t,
            color: n,
            look: S,
            applicationStream: I,
            onAction: x,
          } = e,
          { activeStream: _, watchingOtherStream: C } = (0, l.cj)(
            [d.Z],
            () => ({
              activeStream: d.Z.getActiveStreamForApplicationStream(I),
              watchingOtherStream:
                null != I &&
                d.Z.getAllActiveStreamsForChannel(I.channelId).filter((e) => {
                  let { ownerId: t } = e;
                  return t !== I.ownerId;
                }).length > 0,
            }),
          ),
          b = (0, l.e7)([m.Z], () =>
            m.Z.getChannel(null == I ? void 0 : I.channelId),
          ),
          [E, y] = (0, u.wq)(b),
          Z = (0, c.Aq)(),
          T =
            null != _ &&
            null != I &&
            _.state !== h.jm8.ENDED &&
            _.ownerId === I.ownerId,
          N = (e) => {
            if (null != I)
              null == x || x(),
                s.default.selectVoiceChannel(I.channelId),
                !T && (0, o.iV)(I, { forceMultiple: e }),
                Z.dispatch(h.CkL.POPOUT_CLOSE),
                f.S.dispatch(h.CkL.MODAL_CLOSE),
                a.Z.popAll();
          };
        if (null == I) return null;
        let A = (0, u.P9)(y);
        t
          ? (A = g.intl.string(g.t.XvBdeX))
          : T && (A = g.intl.string(g.t.JH1SJy));
        let j = { color: n, look: S };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(
              p.Z,
              {
                disabled: t || T || !E,
                onClick: () => N(!1),
                ...j,
                fullWidth: !0,
                children: [
                  (0, i.jsx)(r.ScreenArrowIcon, {
                    size: "md",
                    color: "currentColor",
                    className: v.streamIcon,
                  }),
                  A,
                ],
              },
              "play",
            ),
            C && !T
              ? (0, i.jsx)(r.Tooltip, {
                  text: g.intl.string(g.t.wCrzur),
                  children: (e) =>
                    (0, i.jsx)(p.Z, {
                      ...e,
                      onClick: () => {
                        var t;
                        null === (t = e.onClick) || void 0 === t || t.call(e),
                          N(!0);
                      },
                      ...j,
                      className: v.iconButton,
                      size: v.iconButtonSize,
                      children: (0, i.jsx)(r.EyePlusIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: v.iconSize,
                      }),
                    }),
                })
              : null,
          ],
        });
      }
    },
    496616: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(153867),
        a = n(468026),
        s = n(740492),
        o = n(388032);
      function c(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : () => {},
          n = (t) => {
            r.ZP.updatedUnsyncedSettings({
              disableEmbeddedActivityPopOutAlert: !0,
            }),
              t(),
              e();
          };
        s.ZP.disableEmbeddedActivityPopOutAlert
          ? e()
          : (0, l.openModal)(
              (l) =>
                (0, i.jsx)(a.default, {
                  confirmText: o.intl.string(o.t.efSOLC),
                  secondaryConfirmText: o.intl.string(o.t["JdIQ/f"]),
                  title: o.intl.string(o.t.pVr7Cg),
                  cancelText: o.intl.string(o.t.EwoEOT),
                  onConfirm: () => {
                    l.onClose(), e();
                  },
                  onCancel: t,
                  onConfirmSecondary: () => n(l.onClose),
                  body: o.intl.string(o.t.ugSbNT),
                  ...l,
                }),
              {},
              l.POPOUT_MODAL_CONTEXT,
            );
      }
    },
    890280: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(192379),
        l = n(442837),
        r = n(110924),
        a = n(317381);
      function s(e) {
        let {
            applicationId: t,
            context: n,
            launchingComponentId: s,
            onSubmissionComplete: o,
          } = e,
          c = "channel" === n.type ? n.channel.id : void 0,
          u = (0, l.e7)([a.ZP], () => a.ZP.getLaunchState(t, c)),
          d = null != u && u.isLaunching && u.componentId === s,
          m = (0, r.Z)(d);
        return (
          i.useEffect(() => {
            !d && m && (null == o || o());
          }, [d, m, o]),
          { submitting: d, wasSubmitting: m }
        );
      }
    },
    202458: function (e, t, n) {
      "use strict";
      let i = (0, n(818083).B)({
        kind: "user",
        id: "2024-02_activity_react_reply",
        label: "Activity React Reply",
        defaultConfig: { enableActivityReactReply: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable Activity React / Reply Buttons",
            config: { enableActivityReactReply: !0 },
          },
        ],
      });
      t.Z = function () {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return i.useExperiment(
          { location: "useIsEligibleForActivityReactReply" },
          { autoTrackExposure: e },
        ).enableActivityReactReply;
      };
    },
    954017: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          sendReactionToActivity: function () {
            return x;
          },
          sendReplyToActivity: function () {
            return _;
          },
        });
      var i = n(512722),
        l = n.n(i),
        r = n(493683),
        a = n(726542),
        s = n(122810),
        o = n(503438),
        c = n(693824),
        u = n(690725),
        d = n(90712),
        m = n(592125),
        f = n(81063),
        p = n(176354),
        h = n(201133),
        g = n(55e3),
        v = n(314091),
        S = n(981631),
        I = n(388032);
      let x = async (e) => {
          let { reaction: t, altText: n, ...i } = e,
            l = await b(i);
          (0, h.a)({ file: l, altText: n, user: i.user, reaction: t });
        },
        _ = async (e) => {
          let { reply: t, altText: n, ...i } = e,
            a = await b(i),
            s = await r.Z.openPrivateChannel(i.user.id, !1, !1),
            o = m.Z.getChannel(s);
          l()(null != o, "Channel cannot be null"),
            (0, h.B)({ file: a, altText: n, channel: o, reply: t });
        },
        C = (e) => {
          var t;
          let { activity: i, application: l, user: r } = e,
            { theme: a } = (0, v.j3)(r, "black"),
            s = "dark" === a,
            o = (0, d.Z)(i),
            { assets: c, application_id: u } = i,
            m = (0, f.getAssetImage)(u, null == c ? void 0 : c.large_image, 64),
            h = null == l ? void 0 : l.getIconURL(64),
            g =
              null != o
                ? s
                  ? o.icon.darkPNG
                  : o.icon.lightPNG
                : i.type === S.IIU.PLAYING
                  ? s
                    ? n(414575)
                    : n(807612)
                  : null,
            I =
              i.type === S.IIU.HANG_STATUS &&
              (null === (t = i.emoji) || void 0 === t ? void 0 : t.id) != null
                ? (0, p.qc)({
                    id: i.emoji.id,
                    name: i.emoji.name,
                    animated: !1,
                  })
                : null;
          return {
            ...(null != g && { Platform: g }),
            ...(null != m && {
              AssetImage: m.includes("http") ? m : n(869469)(m),
            }),
            ...(null != h && { ApplicationImage: h }),
            ...(null != I && { HangStatus: I }),
          };
        },
        b = async (e) => {
          let { user: t, activity: n, application: i, stream: l } = e,
            d = await r.Z.openPrivateChannel(t.id, !1, !1),
            m = C({ activity: n, application: i, user: t });
          return await (0, u.f)({
            assetsToLoad: m,
            drawImage: (e) => {
              var i;
              e.setFont({ truncate: c.GX.Truncate }),
                null != l
                  ? A(e, n, t)
                  : (0, o.Z)(n)
                    ? Z(e, n, t)
                    : (0, s.Z)(n) &&
                        n.name === a.Z.get(S.ABu.LEAGUE_OF_LEGENDS).name
                      ? N(e, n, t)
                      : n.type === S.IIU.HANG_STATUS
                        ? T(e, n, t)
                        : y(e, n, t),
                (null === (i = e.assetMap) || void 0 === i
                  ? void 0
                  : i.has("Platform")) &&
                  e.drawImage(
                    "Platform",
                    { x: g.En - g.o3 - g.ez, y: g.o3 },
                    { w: g.ez, h: g.ez },
                  );
            },
            exportConfigs: {
              format: c.kH.CloudUpload,
              quality: 1,
              fileName: "user-reacting-to-"
                .concat(n.name, ".png")
                .toLowerCase(),
              fileType: "png",
              channelId: d,
            },
          });
        },
        E = (e, t) => {
          e.setColor("dark" === t ? "white" : "black"),
            e.drawPath(g.Cv, { x: g.o3, y: g.o3 }, !0, 2 + 2 / 3);
        },
        y = (e, t, n) => {
          var i, l, r;
          e.setSize({ w: g.En, h: g.dI });
          let { color: a, theme: s } = (0, v.j3)(n, "black");
          e.setColor(a),
            e.drawRoundedRect({ x: 0, y: 0, h: g.dI, w: g.En }, 8, !0),
            e.setColor(
              "dark" === s ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)",
            ),
            e.drawRoundedRect({ x: 0, y: 0, h: g.dI, w: g.En }, 8, !0),
            (
              null === (i = e.assetMap) || void 0 === i
                ? void 0
                : i.has("AssetImage")
            )
              ? e.drawRoundedImage(
                  "AssetImage",
                  { x: g.o3, y: g.o3 },
                  { w: g.vS, h: g.vS },
                  8,
                )
              : (
                    null === (l = e.assetMap) || void 0 === l
                      ? void 0
                      : l.has("ApplicationImage")
                  )
                ? e.drawRoundedImage(
                    "ApplicationImage",
                    { x: g.o3, y: g.o3 },
                    { w: g.vS, h: g.vS },
                    8,
                  )
                : E(e, s);
          let o = g.vS + g.o3 + g.sB;
          e.setColor("dark" === s ? "white" : "rgb(6, 6, 7)"),
            e.setFont({
              size: 16,
              family: ["gg sans", "sans-serif"],
              weight: 700,
            }),
            e.drawText(
              "".concat(t.name),
              {
                x: o,
                y: g.SG + 1 * g.Nv,
                w: (
                  null === (r = e.assetMap) || void 0 === r
                    ? void 0
                    : r.has(g.W3.Platform)
                )
                  ? g.ee
                  : g.sp,
              },
              !0,
            ),
            null != t.timestamps &&
              (e.setFont({ size: 14, weight: 400 }),
              e.drawText(
                "for ".concat((0, v.b6)(t.timestamps)),
                { x: o, y: g.SG + 2 * g.Nv },
                !0,
              ));
        },
        Z = (e, t, n) => {
          var i, l;
          e.setSize({ w: g.En, h: g.dI });
          let { color: r, theme: a } = (0, v.j3)(n, "black");
          e.setColor(r),
            e.drawRoundedRect({ x: 0, y: 0, h: g.dI, w: g.En }, 8, !0),
            e.setColor(
              "dark" === a ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)",
            ),
            e.drawRoundedRect({ x: 0, y: 0, h: g.dI, w: g.En }, 8, !0),
            (null === (i = e.assetMap) || void 0 === i
              ? void 0
              : i.has("AssetImage")) &&
              e.drawRoundedImage(
                "AssetImage",
                { x: g.o3, y: g.o3 },
                { w: g.vS, h: g.vS },
                8,
              );
          let s = g.vS + g.o3 + g.sB;
          e.setColor("dark" === a ? "white" : "rgb(6, 6, 7)"),
            e.setFont({
              size: 14,
              family: ["gg sans", "sans-serif"],
              weight: 700,
            }),
            e.drawText(
              "".concat(t.details),
              {
                x: s,
                y: g.SG + 1 * g.Nv,
                w: (
                  null === (l = e.assetMap) || void 0 === l
                    ? void 0
                    : l.has(g.W3.Platform)
                )
                  ? g.ee
                  : g.sp,
              },
              !0,
            ),
            e.setFont({ size: 14, weight: 400 }),
            e.drawText("by ".concat(t.state), { x: s, y: g.SG + 2 * g.Nv }, !0);
        },
        T = (e, t, i) => {
          var l, r;
          e.setSize({ w: g.En, h: g.dI });
          let { color: a, theme: s } = (0, v.j3)(i, "black");
          e.setColor(a),
            e.drawRoundedRect({ x: 0, y: 0, h: g.dI, w: g.En }, 8, !0),
            e.setColor(
              "dark" === s ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)",
            ),
            e.drawRoundedRect({ x: 0, y: 0, h: g.dI, w: g.En }, 8, !0),
            (
              null === (l = e.assetMap) || void 0 === l
                ? void 0
                : l.has("HangStatus")
            )
              ? e.drawRoundedImage(
                  "HangStatus",
                  { x: g.o3, y: g.o3 },
                  { w: g.vS, h: g.vS },
                  8,
                )
              : E(e, s);
          let o = g.vS + g.o3 + g.sB;
          e.setColor("dark" === s ? "white" : "rgb(6, 6, 7)"),
            e.setFont({
              size: 14,
              family: ["gg sans", "sans-serif"],
              weight: 700,
            }),
            e.drawText(
              I.intl.string(I.t["74vS//"]),
              {
                x: o,
                y: g.SG + 1 * g.Nv,
                w: (
                  null === (r = e.assetMap) || void 0 === r
                    ? void 0
                    : r.has(g.W3.Platform)
                )
                  ? g.ee
                  : g.sp,
              },
              !0,
            ),
            e.setFont({ size: 14, weight: 400 });
          let c = "";
          (c = (0, n(833858).O8)(t)),
            e.drawText(c, { x: o, y: g.SG + 2 * g.Nv }, !0);
        },
        N = (e, t, n) => {
          var i;
          e.setSize({ w: g.En, h: g.dI });
          let { color: l, theme: r } = (0, v.j3)(n, "black");
          e.setColor(l),
            e.drawRoundedRect({ x: 0, y: 0, h: g.dI, w: g.En }, 8, !0),
            e.setColor(
              "dark" === r ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)",
            ),
            e.drawRoundedRect({ x: 0, y: 0, h: g.dI, w: g.En }, 8, !0),
            e.setColor("dark" === r ? "white" : "black"),
            e.drawRoundedImage(
              "AssetImage",
              { x: g.o3, y: g.o3 },
              { w: g.vS, h: g.vS },
              8,
            ) === c.vP.Failure &&
              e.drawPath(g.Cv, { x: g.o3, y: g.o3 }, !0, 2 + 2 / 3);
          let a = g.vS + g.o3 + g.sB;
          e.setColor("dark" === r ? "white" : "rgb(6, 6, 7)"),
            e.setFont({
              size: 14,
              family: ["gg sans", "sans-serif"],
              weight: 700,
            }),
            e.drawText(
              "".concat(t.details),
              {
                x: a,
                y: g.SG + 1 * g.Nv,
                w: (
                  null === (i = e.assetMap) || void 0 === i
                    ? void 0
                    : i.has("Platform")
                )
                  ? g.ee
                  : g.sp,
              },
              !0,
            ),
            e.setFont({ size: 14, weight: 400 }),
            e.drawText("".concat(t.state), { x: a, y: g.SG + 2 * g.Nv }, !0);
        },
        A = (e, t, n) => {
          var i, l, r;
          e.setSize({ w: g.En, h: g.dI });
          let { color: a, theme: s } = (0, v.j3)(n, "black");
          e.setColor(a),
            e.drawRoundedRect({ x: 0, y: 0, h: g.dI, w: g.En }, 8, !0),
            e.setColor(
              "dark" === s ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)",
            ),
            e.drawRoundedRect({ x: 0, y: 0, h: g.dI, w: g.En }, 8, !0),
            (
              null === (i = e.assetMap) || void 0 === i
                ? void 0
                : i.has("AssetImage")
            )
              ? e.drawRoundedImage(
                  "AssetImage",
                  { x: g.o3, y: g.o3 },
                  { w: g.vS, h: g.vS },
                  8,
                )
              : (
                    null === (l = e.assetMap) || void 0 === l
                      ? void 0
                      : l.has("ApplicationImage")
                  )
                ? e.drawRoundedImage(
                    "ApplicationImage",
                    { x: g.o3, y: g.o3 },
                    { w: g.vS, h: g.vS },
                    8,
                  )
                : E(e, s);
          let o = g.vS + g.o3 + g.sB;
          e.setColor("dark" === s ? "white" : "rgb(6, 6, 7)"),
            e.setFont({
              size: 16,
              family: ["gg sans", "sans-serif"],
              weight: 700,
            }),
            e.drawText(
              "Streaming ".concat(t.name),
              {
                x: o,
                y: g.SG + g.Nv * (null != t.timestamps ? 1 : 1.5),
                w: (
                  null === (r = e.assetMap) || void 0 === r
                    ? void 0
                    : r.has(g.W3.Platform)
                )
                  ? g.ee
                  : g.sp,
              },
              !0,
            ),
            null != t.timestamps &&
              (e.setFont({ size: 14, weight: 500 }),
              e.drawText(
                "for ".concat((0, v.b6)(t.timestamps)),
                { x: o, y: g.SG + 2 * g.Nv },
                !0,
              ));
        };
    },
    314091: function (e, t, n) {
      "use strict";
      n.d(t, {
        b6: function () {
          return f;
        },
        j3: function () {
          return p;
        },
        xC: function () {
          return h;
        },
      }),
        n(47120);
      var i = n(866442),
        l = n(503438),
        r = n(420660),
        a = n(168631),
        s = n(621853),
        o = n(981631),
        c = n(388032);
      let u = (e) => ("".concat(e).length < 13 ? 1e3 * e : e),
        d = (e) => {
          let t = Date.now() / 1e3;
          return null != e.end
            ? m(t, u(e.end) / 1e3)
            : null != e.start
              ? m(u(e.start) / 1e3, t)
              : { hours: 0, minutes: 0, seconds: 0 };
        },
        m = (e, t) => {
          let n = Math.max(t - e, 0),
            i = Math.floor(n) % 60,
            l = Math.floor(n / 60) % 60;
          return { hours: Math.floor(n / 3600) % 24, minutes: l, seconds: i };
        },
        f = (e) => {
          let t = d(e);
          return t.hours > 0
            ? "".concat(t.hours, " hours")
            : t.minutes > 0
              ? "".concat(t.minutes, " minutes")
              : "".concat(t.seconds, " seconds");
        },
        p = (e, t) => {
          var n;
          let l = s.Z.getUserProfile(e.id),
            [r, o] =
              null !== (n = null == l ? void 0 : l.themeColors) && void 0 !== n
                ? n
                : [],
            c = (0, a.V3)(r),
            u = null != o ? (0, i.Rf)(o) : t;
          return { color: u, theme: u === t ? "dark" : c };
        },
        h = (e, t) =>
          (0, l.Z)(t)
            ? c.intl.formatToPlainString(c.t.Xuqn4e, {
                username: e.username,
                song: t.details,
                artist: t.state,
              })
            : t.type === o.IIU.PLAYING
              ? c.intl.formatToPlainString(c.t.tAwI1t, {
                  username: e.username,
                  activity: t.name,
                })
              : t.type === o.IIU.WATCHING
                ? c.intl.formatToPlainString(c.t.kCbfbG, {
                    username: e.username,
                    activity: t.name,
                  })
                : t.type === o.IIU.LISTENING
                  ? c.intl.formatToPlainString(c.t.h2yWWV, {
                      username: e.username,
                      activity: t.name,
                    })
                  : (0, r.Z)(t) || t.type === o.IIU.STREAMING
                    ? c.intl.formatToPlainString(c.t.wqU7Wl, {
                        username: e.username,
                        activity: t.name,
                      })
                    : c.intl.formatToPlainString(c.t["75iW6e"], {
                        username: e.username,
                        activity: t.name,
                      });
    },
    159244: function (e, t, n) {
      "use strict";
      var i = n(442837),
        l = n(699516),
        r = n(594174),
        a = n(981631);
      t.Z = (e) => {
        let t = (0, i.e7)([r.default], () => r.default.getCurrentUser()),
          n = (0, i.e7)([l.Z], () => l.Z.getRelationshipType(e.id)),
          s = e.isNonUserBot();
        return (
          e.id !== (null == t ? void 0 : t.id) && n !== a.OGo.BLOCKED && !s
        );
      };
    },
    682901: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      let i = (0, n(818083).B)({
        kind: "user",
        id: "2025-1_call_settings",
        label: "Simplified Call Settings Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 1, label: "Simplified Call Settings", config: { enabled: !0 } },
        ],
      });
      function l(e) {
        return i.useExperiment(e);
      }
    },
    628581: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(388032);
      function l(e, t, n, l, r) {
        return l
          ? i.intl.string(i.t["2Ne/Y2"])
          : n
            ? i.intl.string(i.t.FJSZVF)
            : t
              ? i.intl.string(i.t["+JQCa2"])
              : r
                ? e
                  ? i.intl.string(i.t.YqAjX1)
                  : i.intl.string(i.t["w4m94+"])
                : e
                  ? i.intl.string(i.t.QbFzMz)
                  : i.intl.string(i.t["Fx/4wc"]);
      }
    },
    659580: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        });
      var i = n(200651);
      n(192379);
      var l = n(990547),
        r = n(481060),
        a = n(410575),
        s = n(906732),
        o = n(213609),
        c = n(821564),
        u = n(453925),
        d = n(632304),
        m = n(947150),
        f = n(488021),
        p = n(822556),
        h = n(981631),
        g = n(388032),
        v = n(126741);
      function S(e) {
        let {
            onClose: t,
            renderOutputDevices: n = !1,
            renderInputDevices: S = !1,
            renderInputModes: I = !1,
            renderInputVolume: x = !1,
            renderOutputVolume: _ = !1,
            onSelect: C,
          } = e,
          { analyticsLocations: b } = (0, s.ZP)();
        (0, o.Z)({
          type: l.ImpressionTypes.MENU,
          name: l.ImpressionNames.AUDIO_DEVICE_MENU,
          properties: { location_stack: b },
        });
        let E = (0, p.Z)(),
          y = (0, m.Z)(b),
          Z = (0, f.Z)(b),
          T = (0, c.Z)(b),
          N = (0, u.Z)(b),
          A = (0, d.Z)(b);
        return (0, i.jsx)(a.Z, {
          object: h.qAy.CONTEXT_MENU,
          children: (0, i.jsxs)(r.Menu, {
            onSelect: C,
            className: v.menu,
            onClose: t,
            navId: "audio-device-context",
            "aria-label": g.intl.string(g.t.ZR1Ss7),
            children: [
              S
                ? (0, i.jsx)(r.MenuGroup, {
                    label: g.intl.string(g.t.ElbIXF),
                    children: y,
                  })
                : null,
              n
                ? (0, i.jsx)(r.MenuGroup, {
                    label: g.intl.string(g.t["6Ww0iI"]),
                    children: Z,
                  })
                : null,
              I
                ? (0, i.jsx)(r.MenuGroup, {
                    label: g.intl.string(g.t["pS+K2N"]),
                    children: T,
                  })
                : null,
              (0, i.jsxs)(r.MenuGroup, {
                children: [x ? N : null, _ ? A : null, E],
              }),
            ],
          }),
        });
      }
    },
    415635: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return g;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(772848),
        a = n(442837),
        s = n(570140),
        o = n(607070),
        c = n(367907),
        u = n(37091),
        d = n(721264),
        m = n(963838),
        f = n(39127),
        p = n(981631),
        h = n(972213);
      function g(e) {
        let { channelId: t, guildId: n, userId: g, containerDimensions: v } = e,
          S = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
          [I, x] = l.useState([]),
          _ = I.length < 50;
        l.useEffect(() => {
          function e(e) {
            var i;
            let {
              channelId: l,
              userId: a,
              emoji: s,
              animationType: o,
              animationId: f,
            } = e;
            if (
              (null != g && g !== a) ||
              (u.Z.getEnabled() &&
                (0, d.Z)(
                  null !== (i = null == s ? void 0 : s.name) && void 0 !== i
                    ? i
                    : "",
                ))
            )
              return;
            let h = null != s && null != o && null != f;
            if (l === t && !S && _ && h) {
              let e = (0, m._r)(s),
                i = null != s.id && !s.animated,
                l = {
                  id: (0, r.Z)(),
                  animationType: o,
                  animationId: f,
                  shouldResize: i,
                  url: e,
                  userId: a,
                };
              x((e) => [...e, l]),
                c.ZP.trackWithMetadata(p.rMx.VOICE_CHANNEL_EFFECT_VIEWED, {
                  channel_id: t,
                  guild_id: n,
                });
            }
          }
          return (
            s.Z.subscribe("VOICE_CHANNEL_EFFECT_SEND", e),
            () => {
              s.Z.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e);
            }
          );
        }, [t, n, g, S, _]);
        let C = l.useCallback((e) => {
          x((t) => {
            let n = [...t],
              i = n.findIndex((t) => t.id === e);
            return n.splice(i, 1), n;
          });
        }, []);
        return S
          ? null
          : (0, i.jsx)("div", {
              className: h.effectsWrapper,
              style: { width: v.width },
              children: (0, i.jsx)("div", {
                className: h.effects,
                children: I.map((e) =>
                  (0, i.jsx)(
                    f.Z,
                    { containerDimensions: v, effect: e, onComplete: C },
                    e.id,
                  ),
                ),
              }),
            });
      }
    },
    575175: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(846027),
        a = n(468026),
        s = n(503856),
        o = n(388032);
      function c(e, t, c) {
        if (t && (0, s.p)()) {
          (0, l.openModalLazy)(async () => {
            let { default: e } = await n.e("41281").then(n.bind(n, 669732));
            return (t) => (0, i.jsx)(e, { ...t });
          });
          return;
        }
        if (t) {
          (0, l.openModal)((e) =>
            (0, i.jsx)(a.default, {
              ...e,
              title: o.intl.string(o.t.FJSZVF),
              body: o.intl.string(o.t.etJjgY),
            }),
          );
          return;
        }
        if (e) {
          (0, l.openModal)((e) =>
            (0, i.jsx)(a.default, {
              ...e,
              title: o.intl.string(o.t["+JQCa2"]),
              body: o.intl.string(o.t.hsNm7e),
            }),
          );
          return;
        }
        r.Z.toggleSelfMute({ location: c });
      }
    },
    947150: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        a = n(846027),
        s = n(687058),
        o = n(131951);
      function c(e) {
        let t = (0, s.Z)(),
          n = (0, l.e7)([o.Z], () => o.Z.getInputDeviceId());
        return Object.values(t).map((t) => {
          let { id: l, disabled: s, name: o } = t;
          return (0, i.jsx)(
            r.MenuRadioItem,
            {
              id: "input-".concat(l),
              group: "input-devices",
              disabled: s,
              label: o,
              checked: l === n,
              action: () => a.Z.setInputDevice(l, { analyticsLocations: e }),
            },
            "input-".concat(l),
          );
        });
      }
    },
    488021: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        a = n(846027),
        s = n(253052),
        o = n(131951);
      function c(e) {
        let t = (0, s.Z)(),
          n = (0, l.e7)([o.Z], () => o.Z.getOutputDeviceId());
        return Object.values(t).map((t) => {
          let { id: l, disabled: s, name: o } = t;
          return (0, i.jsx)(
            r.MenuRadioItem,
            {
              group: "output-devices",
              id: "output-".concat(l),
              disabled: s,
              label: o,
              checked: l === n,
              action: () => a.Z.setOutputDevice(l, { analyticsLocations: e }),
            },
            "output-".concat(l),
          );
        });
      }
    },
    822556: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(230711),
        a = n(906732),
        s = n(981631),
        o = n(388032);
      function c() {
        let { analyticsLocations: e } = (0, a.ZP)();
        return (0, i.jsx)(l.MenuItem, {
          id: "voice-settings",
          label: o.intl.string(o.t.NiTd0d),
          action: () => r.Z.open(s.oAB.VOICE, null, { analyticsLocations: e }),
          icon: l.SettingsIcon,
        });
      }
    },
    655687: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(933557),
        l = n(981631),
        r = n(388032);
      function a(e) {
        let { channel: t, isReadonly: n = !1, isCreatingThread: a = !1 } = e,
          s = (0, i.ZP)(t, !0),
          o = (0, i.ZP)(t, !1);
        if (null == t || null == s)
          return {
            placeholder: r.intl.string(r.t.MKDeyM),
            accessibilityLabel: r.intl.string(r.t.MKDeyM),
          };
        if (a)
          return {
            placeholder: r.intl.string(r.t.YzpScX),
            accessibilityLabel: r.intl.string(r.t.YzpScX),
          };
        if (n)
          return {
            placeholder: r.intl.string(r.t.RRvRp6),
            accessibilityLabel: r.intl.string(r.t.RRvRp6),
          };
        if (t.isForumPost())
          return {
            placeholder: r.intl.formatToPlainString(r.t.Y6qWLS, { channel: s }),
            accessibilityLabel: r.intl.formatToPlainString(r.t.KffKoa, {
              channel: o,
            }),
          };
        if (l.TPd.THREADS.has(t.type))
          return {
            placeholder: r.intl.formatToPlainString(r.t["8lzR/f"], {
              channel: s,
            }),
            accessibilityLabel: r.intl.formatToPlainString(r.t.UZIMWV, {
              channel: o,
            }),
          };
        if (t.type === l.d4z.DM)
          return {
            placeholder: r.intl.formatToPlainString(r.t["4c+CAw"], {
              channel: s,
            }),
            accessibilityLabel: r.intl.formatToPlainString(r.t.fqOxbW, {
              channel: o,
            }),
          };
        return {
          placeholder: r.intl.formatToPlainString(r.t["8lzR/f"], {
            channel: s,
          }),
          accessibilityLabel: r.intl.formatToPlainString(r.t.ih7ZSE, {
            channel: o,
          }),
        };
      }
    },
    282256: function (e, t, n) {
      "use strict";
      n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        s = n(434650),
        o = n(393903),
        c = n(448986),
        u = n(353093),
        d = n(979264),
        m = n(506800);
      t.Z = l.memo(function (e) {
        let { children: t, isOverlay: n, contextGuildId: r, ...f } = e,
          p = l.useRef(null),
          [h, g] = l.useState({ maskImage: "none" }),
          v = (0, c.Z)(() => {
            var e, t;
            if (n) {
              g({ maskImage: "none" });
              return;
            }
            let i =
                null === (e = S.current) || void 0 === e
                  ? void 0
                  : e.getBoundingClientRect(),
              l =
                null === (t = p.current) || void 0 === t
                  ? void 0
                  : t.getBoundingClientRect();
            if (null == i || null == l) {
              g({ maskImage: "none" });
              return;
            }
            let r = l.right - i.right,
              a = l.width - r;
            if (a > l.width) {
              g({ maskImage: "none" });
              return;
            }
            g({
              maskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(
                  a,
                  "px)",
                ),
            });
          }),
          S = (0, o.y)(v),
          I = (0, u.p0)(f.userId, r),
          x = { handleResize: v, positionTrackerRef: S },
          _ = l.useRef(x);
        l.useEffect(() => {
          _.current = x;
        }),
          l.useEffect(() => {
            let { handleResize: e, positionTrackerRef: t } = _.current;
            if (null != t.current) e();
          }, [I]);
        let C = (0, s.O)(v);
        return (0, i.jsxs)("div", {
          className: a()(m.container, n && m.isOverlayContainer),
          ref: S,
          children: [
            (0, i.jsx)("div", { className: m.usernameContainer, children: t }),
            (0, i.jsx)("div", {
              className: m.chipletParent,
              ref: C,
              children: (0, i.jsx)("span", {
                className: a()(m.chipletContainer, !I && n && m.noPadding),
                ref: p,
                style: h,
                children: (0, i.jsx)(d.ZP, {
                  ...f,
                  contextGuildId: r,
                  className: a()(f.className, n && m.isOverlayTag),
                }),
              }),
            }),
          ],
        });
      });
    },
    475674: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(442837),
        l = n(199902),
        r = n(314897),
        a = n(858340),
        s = n(959457),
        o = n(557457),
        c = n(614963),
        u = n(981631);
      function d(e) {
        let t = (0, o.Wc)(e),
          n = e.stream.guildId,
          d = e.stream.ownerId;
        return (0, i.e7)(
          [s.Z, a.Z, r.default, l.Z],
          () => {
            if (null == d) return null;
            let e = d === r.default.getId();
            if (!e && null == l.Z.getActiveStreamForUser(d, n)) return null;
            let i = e && null != a.Z.getHookError(u.K3D.SOUND);
            return (0, c.Z)(
              s.Z.getQuality(),
              s.Z.getStatsHistory(n, d, e),
              i,
              t,
            );
          },
          [t, n, d],
        );
      }
    },
    718805: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(569545),
        l = n(102172),
        r = n(981631),
        a = n(388032);
      function s(e, t, n, s) {
        return null == t ||
          t.state === r.jm8.ENDED ||
          (0, i.V9)(t) !== (0, i.V9)(e)
          ? (0, l.P9)(s)
          : t.ownerId === n
            ? a.intl.string(a.t.XvBdeX)
            : a.intl.string(a.t.JH1SJy);
      }
    },
    614963: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var i,
        l,
        r = n(251625),
        a = n(823379),
        s = n(981631),
        o = n(388032);
      function c() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        return e <= 5 ? 3 : e <= 15 ? 10 : 15;
      }
      function u(e, t) {
        let n = {
            packetsSentOrReceived: 0,
            packetsLost: 0,
            packetLossRate: 0,
            frameRate: 0,
            resolution: 0,
            numDatapoints: 0,
          },
          i = e.slice(-1 * t).filter(a.lm);
        if (0 === i.length) return { type: "streamer", ...n };
        i.forEach((e, t, i) => {
          (n.packetsSentOrReceived +=
            t > 0
              ? i[t].packetsSentOrReceived - i[t - 1].packetsSentOrReceived
              : 0),
            (n.packetsLost +=
              t > 0 ? i[t].packetsLost - i[t - 1].packetsLost : 0),
            (n.frameRate += e.frameRate),
            (n.resolution += e.resolution);
        });
        let l = i[0].type,
          r = i.length;
        return {
          type: l,
          packetsSentOrReceived: n.packetsSentOrReceived,
          packetsLost: n.packetsLost,
          packetLossRate:
            n.packetsLost / (n.packetsLost + n.packetsSentOrReceived),
          frameRate: n.frameRate / r,
          resolution: n.resolution / r,
          numDatapoints: r,
        };
      }
      ((i = l || (l = {})).PACKET_LOSS = "Packet Loss"),
        (i.FRAME_RATE_INPUT = "Frame Rate Encode"),
        (i.FRAME_RATE_NETWORK = "Frame Rate Decode"),
        (i.SOUNDSHARE_FAILED = "Soundshare Failed"),
        (i.BAD_CONNECTION = "Bad Connection");
      let d = (0, r.oH)((e, t) => ({ message: e, errorType: t }));
      function m(e, t) {
        if ("streamer" === e.type) {
          if (100 * e.packetLossRate > 10)
            return d(o.intl.string(o.t["1f1LHh"]), "Packet Loss");
          if (e.frameRate <= c(t))
            return d(o.intl.string(o.t["1f1LHh"]), "Frame Rate Encode");
        } else {
          if (100 * e.packetLossRate > 10)
            return d(o.intl.string(o.t.BcOif3), "Packet Loss");
          if (e.frameRate <= c(t))
            return d(o.intl.string(o.t.BcOif3), "Frame Rate Decode");
        }
        return null;
      }
      function f(e, t, n, i) {
        if (n) return d(o.intl.string(o.t["9lcycn"]), "Soundshare Failed");
        if (null != t) {
          let e = u(t, 5),
            n = u(t, 30);
          if (n.numDatapoints >= 5) {
            var l;
            return null !== (l = m(e, null == i ? void 0 : i.maxFrameRate)) &&
              void 0 !== l
              ? l
              : m(n, null == i ? void 0 : i.maxFrameRate);
          }
        }
        return e === s.IE4.BAD
          ? d(o.intl.string(o.t.Ic588P), "Bad Connection")
          : null;
      }
    },
    701362: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return A;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        s = n(442837),
        o = n(481060),
        c = n(717881),
        u = n(616780),
        d = n(850827),
        m = n(576855),
        f = n(258609),
        p = n(199902),
        h = n(314897),
        g = n(430824),
        v = n(496675),
        S = n(158776),
        I = n(979651),
        x = n(626135),
        _ = n(102172),
        C = n(687516),
        b = n(718805),
        E = n(871118),
        y = n(981631),
        Z = n(388032),
        T = n(846450);
      class N extends l.PureComponent {
        componentDidMount() {
          let { user: e, streamApplication: t } = this.props;
          x.default.track(y.rMx.OPEN_POPOUT, {
            type: "Stream Preview",
            other_user_id: e.id,
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
            is_streaming: !0,
          });
        }
        renderPreview(e) {
          let {
            onWatch: t,
            activeStream: n,
            currentUserId: l,
            canWatch: r,
            unavailableReason: a,
          } = this.props;
          return (0, i.jsxs)(o.Clickable, {
            onClick: t,
            className: T.previewContainer,
            children: [
              (0, i.jsx)(E.Z, { className: T.previewImage, stream: e }),
              r
                ? (0, i.jsx)("div", {
                    className: T.previewHover,
                    children: (0, i.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "none",
                      className: T.white,
                      children: (0, b.Z)(e, n, l, a),
                    }),
                  })
                : null,
            ],
          });
        }
        render() {
          let {
            activity: e,
            user: t,
            stream: n,
            previewIsOpen: l,
            onAction: r,
            hideTip: s,
          } = this.props;
          return null == n
            ? null
            : (0, i.jsx)("div", {
                className: a()(T.streamPreviewWrapper, { [T.mounted]: l }),
                children: (0, i.jsxs)("div", {
                  className: T.streamPreview,
                  children: [
                    this.renderPreview(n),
                    (0, i.jsxs)("div", {
                      className: T.body,
                      children: [
                        null != e
                          ? (0, i.jsx)(c.Z, {
                              hideHeader: !0,
                              type: c.P.STREAM_PREVIEW,
                              activity: e,
                              user: t,
                              guildId: n.guildId,
                              channelId: n.channelId,
                              analyticsParams: {
                                location: {
                                  page: y.ZY5.GO_LIVE_MODAL,
                                  section: y.jXE.STREAM_VIEWER_POPOUT,
                                },
                              },
                              onAction: r,
                            })
                          : (0, i.jsx)(d.Z, {
                              type: c.P.STREAM_PREVIEW,
                              applicationStream: n,
                              user: t,
                              guildId: n.guildId,
                              channelId: n.channelId,
                              className: T.activityActions,
                              color: T.watchButton,
                              onAction: r,
                            }),
                        !s &&
                          (0, i.jsx)(m.Z, {
                            type: m.Z.Types.INLINE,
                            className: T.protip,
                            children: __OVERLAY__
                              ? Z.intl.string(Z.t["YRdw7+"])
                              : Z.intl.string(Z.t.CCTgbG),
                          }),
                      ],
                    }),
                  ],
                }),
              });
        }
      }
      function A(e) {
        let { user: t, channel: n, ...r } = e,
          [a, o] = (0, s.Wu)([I.Z, g.Z, v.Z, f.Z], () =>
            (0, _.p9)(n, I.Z, g.Z, v.Z, f.Z),
          ),
          c = (0, s.e7)([p.Z], () =>
            p.Z.getStreamForUser(t.id, n.getGuildId()),
          ),
          d = (0, s.e7)([p.Z], () =>
            p.Z.getActiveStreamForApplicationStream(c),
          ),
          m = (0, s.e7)([h.default], () => h.default.getId()),
          x = (0, C.Cf)(c),
          b = (0, s.e7)([S.Z], () => (0, C.Um)(c, S.Z)),
          E = l.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
        return (
          (0, u.$)(E),
          (0, i.jsx)(N, {
            ...r,
            canWatch: a,
            unavailableReason: o,
            user: t,
            streamApplication: x,
            stream: c,
            activeStream: d,
            currentUserId: m,
            activity: b,
          })
        );
      }
    },
    517525: function (e, t, n) {
      "use strict";
      n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        s = n(642128),
        o = n(468194),
        c = n(442837),
        u = n(692547),
        d = n(477690),
        m = n(481060),
        f = n(2052),
        p = n(906732),
        h = n(194082),
        g = n(484459),
        v = n(594174),
        S = n(626135),
        I = n(74538),
        x = n(557457),
        _ = n(475674),
        C = n(981631),
        b = n(474936),
        E = n(388032),
        y = n(891252);
      let Z = (0, o.Mg)(d.Z.LIVE_INDICATOR_BORDER_RADIUS),
        T = { opacity: 0, transform: "translate3d(100%, 0, 0)" },
        N = { opacity: 1, transform: "translate3d(0%, 0, 0)" },
        A = { opacity: 0 },
        j = { opacity: 1 },
        w = {
          borderRadius: ""
            .concat(Z, "px ")
            .concat(Z, "px ")
            .concat(Z, "px ")
            .concat(Z, "px"),
        },
        P = { borderRadius: "0px ".concat(Z, "px ").concat(Z, "px 0px") },
        R = { mass: 1, tension: 500, friction: 18, clamp: !0 },
        O = (e) => {
          let t,
            r,
            {
              participant: s,
              isUpsellEnabled: o,
              shape: d,
              size: g,
              didTrackUpsellViewed: Z,
              setDidTrackUpsellViewed: T,
              className: N,
              premiumIndicator: A,
            } = e,
            j = (0, x.Wc)(s),
            { analyticsLocations: w } = (0, p.ZP)(),
            P = null != (0, _.Z)(s);
          try {
            t = (0, x.nG)(j);
          } catch (e) {
            t = !1;
          }
          try {
            r = (0, x.tR)(j);
          } catch (e) {
            r = !1;
          }
          let R = t || r,
            { location: O } = (0, f.O)(),
            M = (0, c.e7)([v.default], () => v.default.getCurrentUser()),
            k =
              o &&
              !I.ZP.isPremium(M, b.p9.TIER_1) &&
              !I.ZP.canStreamQuality(I.ZP.StreamQuality.MID, M),
            L = l.useCallback(() => {
              k &&
                R &&
                (0, m.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("28479")
                    .then(n.bind(n, 78865));
                  return (t) => (0, i.jsx)(e, { ...t, analyticsSource: O });
                });
            }, [k, R, O]);
          if (
            (l.useEffect(() => {
              !Z &&
                R &&
                (S.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
                  type: b.cd.STREAM_QUALITY_INDICATOR,
                  has_premium_stream_fps: t,
                  has_premium_stream_resolution: r,
                  location_stack: w,
                }),
                T(!0));
            }, [t, r, R, Z, T, w]),
            null == j)
          )
            return null;
          let D = (0, i.jsx)(m.Tooltip, {
            text: P
              ? E.intl.string(E.t.q8TiVl)
              : R
                ? E.intl.string(E.t.IHgpEh)
                : E.intl.string(E.t.vLb0VV),
            position: "bottom",
            color: m.Tooltip.Colors.GREY,
            children: (e) =>
              (0, i.jsxs)(m.Clickable, {
                ...e,
                onClick: L,
                className: a()(
                  y.qualityIndicator,
                  g,
                  h.eE[d],
                  P
                    ? y.qualityIndicatorLowQuality
                    : y.qualityIndicatorFullQuality,
                  { [y.clickable]: k && R },
                ),
                children: [
                  R
                    ? (0, i.jsx)(m.NitroWheelIcon, {
                        size: "md",
                        color: "currentColor",
                        className: y.premiumStreamIcon,
                      })
                    : null,
                  (0, i.jsx)("span", {
                    className: y.qualityResolution,
                    children: (0, x.ml)(j.maxResolution),
                  }),
                  (0, i.jsx)("span", { children: (0, x.bp)(j.maxFrameRate) }),
                ],
              }),
          });
          return (0, i.jsx)(m.TextBadge, {
            text: D,
            className: a()(N, y.qualityIndicatorBadge, {
              [y.qualityIndicatorBadgePremium]: R && A,
            }),
            color: u.Z.unsafe_rawColors.PRIMARY_500.css,
            shape: d,
          });
        };
      t.Z = (e) => {
        let {
            participant: t,
            showQuality: n,
            isUpsellEnabled: r = !0,
            size: o,
            className: c,
            premiumIndicator: u,
          } = e,
          [d, f] = l.useState(!1),
          p = (0, x.Wc)(t),
          { reducedMotion: v } = l.useContext(
            m.AccessibilityPreferencesContext,
          ),
          S = n && null != p;
        l.useEffect(() => {
          (0, g.Z)(
            t.stream.ownerId,
            t.user.getAvatarURL(t.stream.guildId, 80),
            { dispatchWait: !0 },
          );
        }, [t]);
        let I = (0, m.useTransition)(
            S,
            {
              enter: { from: v.enabled ? A : T, to: v.enabled ? j : N },
              leave: v.enabled ? A : T,
              config: R,
            },
            "animate-always",
          ),
          _ = (0, m.useSpring)({ to: S ? P : w, config: R }, "animate-always");
        return ((e) => {
          let { className: n, popoutProps: l } = e;
          return (0, i.jsxs)("div", {
            className: a()(y.streamQualityIndicator, n),
            ...l,
            children: [
              I((e, n) =>
                n
                  ? (0, i.jsx)(s.animated.div, {
                      style: e,
                      children: (0, i.jsx)(O, {
                        className: y.liveQualityIndicator,
                        participant: t,
                        size: o,
                        shape: m.BadgeShapes.ROUND_LEFT,
                        isUpsellEnabled: r,
                        didTrackUpsellViewed: d,
                        setDidTrackUpsellViewed: f,
                        premiumIndicator: u,
                      }),
                    })
                  : null,
              ),
              (0, i.jsx)(s.animated.div, {
                style: _,
                className: y.liveIndicator,
                children: (0, i.jsx)(h.ZP, {
                  look: h.jZ.RED,
                  size: o,
                  shape: S ? m.BadgeShapes.ROUND_RIGHT : m.BadgeShapes.ROUND,
                }),
              }),
            ],
          });
        })({ className: c });
      };
    },
    6572: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(442837),
        s = n(963838),
        o = n(37091),
        c = n(388032),
        u = n(710453);
      function d(e) {
        let t,
          { channelId: n, userId: l } = e,
          [d, m] = (0, a.Wu)([o.Z], () => [
            o.Z.getWaitingHighFive(n, l),
            o.Z.getCompletedHighFive(n, l),
          ]);
        if (null != m)
          t = (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("img", {
                alt: c.intl.string(c.t.W6HwU1),
                src: (0, s._r)({ name: m[0], id: null, animated: !1 }),
                className: r()(u.completeLeft, u.highFive),
              }),
              (0, i.jsx)("img", {
                alt: c.intl.string(c.t.W6HwU1),
                src: (0, s._r)({ name: m[1], id: null, animated: !1 }),
                className: r()(u.completeRight, u.highFive),
              }),
            ],
          });
        else {
          if (null == d) return null;
          t = (0, i.jsx)("img", {
            alt: c.intl.string(c.t.W6HwU1),
            src: (0, s._r)({ name: d, id: null, animated: !1 }),
            className: r()(u.waiting, u.highFive),
          });
        }
        return (0, i.jsx)("div", { className: u.root, children: t });
      }
    },
    707409: function (e, t, n) {
      "use strict";
      n.d(t, {
        CI: function () {
          return r.CI;
        },
        J6: function () {
          return r.J6;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(144830),
        r = n(379649);
      t.ZP = (0, l.Z)(function (e) {
        let { children: t, className: n } = e;
        return (0, i.jsx)("span", { className: n, children: t });
      });
    },
    352978: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return i;
        },
      }),
        n(47120);
      var i,
        l,
        r = n(200651),
        a = n(192379),
        s = n(120356),
        o = n.n(s),
        c = n(481060),
        u = n(763520),
        d = n(153066),
        m = n(435315);
      ((l = i || (i = {})).CONTAIN = "contain"), (l.COVER = "cover");
      let f = a.memo(function (e) {
        let {
            streamId: t,
            onResize: n,
            wrapperClassName: i,
            videoComponent: l,
            className: s,
            fit: f = "contain",
            mirror: p = !1,
            paused: h = !1,
            streamPreviewURL: g,
            videoSpinnerContext: v,
            userId: S,
          } = e,
          [I, x] = a.useState(!0),
          [_] = a.useState(() => new u.o("VideoStream"));
        a.useEffect(() => {
          !h &&
            (I
              ? _.onSpinnerStarted()
              : null != t && _.trackSpinnerDuration(v, S, t));
        }, [I, h, t, _, v, S]);
        let C = a.useCallback(() => {
          x(!1);
        }, []);
        return (0, r.jsxs)("div", {
          className: o()(m.wrapper, i),
          children: [
            null != t &&
              (0, r.jsx)(l, {
                className: o()(
                  m.video,
                  (0, d.l)(m, "video", f),
                  { [m.mirror]: p },
                  s,
                ),
                streamId: t,
                onResize: n,
                onReady: C,
                paused: h,
              }),
            h
              ? null
              : (0, r.jsx)("div", {
                  className: o()(m.previewWrapper, { [m.loading]: I }),
                  children:
                    I &&
                    (0, r.jsxs)(a.Fragment, {
                      children: [
                        null != g
                          ? (0, r.jsx)("img", {
                              src: g,
                              alt: "",
                              className: m.previewImage,
                            })
                          : (0, r.jsx)("div", {
                              className: m.emptyPreviewWrapper,
                              children: (0, r.jsx)("div", {
                                className: m.emptyPreview,
                              }),
                            }),
                        (0, r.jsx)(c.Spinner, { className: m.spinner }),
                      ],
                    }),
                }),
          ],
        });
      });
      t.Z = f;
    },
    691891: function (e, t, n) {
      "use strict";
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(481060),
        s = n(932209);
      let o = (e) => {
        let { className: t, onDismiss: n, "aria-label": l } = e;
        return (0, i.jsx)(a.Button, {
          look: a.Button.Looks.BLANK,
          size: a.Button.Sizes.NONE,
          onClick: n,
          className: r()(s.dismissButton, t),
          "aria-label": l,
          children: (0, i.jsx)(a.XSmallIcon, {
            size: "xs",
            color: "currentColor",
            colorClass: s.dismissIcon,
          }),
        });
      };
      (o.displayName = "DismissButton"), (t.Z = o);
    },
    44359: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(256403);
      function s(e) {
        let { keybind: t, className: n } = e;
        return (0, i.jsx)(i.Fragment, {
          children: t.map((e, t) =>
            (0, i.jsx)("span", { className: r()(a.key, n), children: e }, t),
          ),
        });
      }
    },
    22205: function (e, t, n) {
      "use strict";
      n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(392711),
        a = n.n(r),
        s = n(642128),
        o = n(818405),
        c = n(587158),
        u = n(286379),
        d = n(442837),
        m = n(481060),
        f = n(224706),
        p = n(13245),
        h = n(615287),
        g = n(493773),
        v = n(797614),
        S = n(703656),
        I = n(594174),
        x = n(254761),
        _ = n(70956),
        C = n(960048),
        b = n(145597),
        E = n(333031),
        y = n(610394),
        Z = n(380736),
        T = n(987650),
        N = n(981631),
        A = n(388032),
        j = n(806128);
      function w(e, t, n) {
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
      let P = a().throttle(
          () => {
            v.Z.increment(
              {
                name: u.V.APP_CRASHED,
                tags: [
                  "reason:".concat(o.v.UNHANDLED_JS_ERROR),
                  "level:".concat(c.c.FATAL),
                ],
              },
              !0,
            );
          },
          100,
          { trailing: !1 },
        ),
        R = 10 * _.Z.Millis.SECOND;
      function O(e) {
        var t, n;
        let {
            error: r,
            onLock: a,
            onReload: o,
            onDisable: c,
            onCrashDisabled: u,
          } = e,
          f = l.useMemo(() => new s.SpringValue(1), []),
          h = l.useRef(null),
          [v, S] = l.useState(!1),
          [_, C] = l.useState(!1),
          b = (0, d.e7)([I.default], () => I.default.getCurrentUser());
        (0, g.Z)(
          () => (
            (h.current = setTimeout(E, R)),
            p.Z.track(N.rMx.NOTIFICATION_VIEWED, {
              notif_type: T.n0.OverlayCrashed,
            }),
            () => {
              null != h.current && clearTimeout(h.current);
            }
          ),
        );
        let E = l.useCallback(() => {
            f.set(0),
              null != h.current && clearTimeout(h.current),
              (h.current = null),
              null == a || a(),
              null == u || u();
          }, [f, a, u]),
          w = l.useCallback(
            (e) => {
              if (!_)
                C(!0),
                  null == a || a(),
                  p.Z.track(
                    N.rMx.NOTIFICATION_CLICKED,
                    { notif_type: T.n0.OverlayCrashed, action_type: "reload" },
                    !0,
                  ),
                  e.stopPropagation(),
                  setTimeout(() => (null == o ? void 0 : o()), 200);
            },
            [a, o, _],
          ),
          P = l.useCallback(
            (e) => {
              e.stopPropagation(),
                e.shiftKey
                  ? (S(!0), null != h.current && clearTimeout(h.current))
                  : S(!1);
            },
            [S],
          ),
          O = l.useCallback(
            (e) => {
              e.stopPropagation(), null == a || a(), null == c || c();
            },
            [c, a],
          ),
          M = (0, d.e7)([y.ZP], () => y.ZP.getFocusedRunningGame()),
          k = v
            ? (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)(m.Text, {
                    variant: "text-md/semibold",
                    color: "text-primary",
                    children: A.intl.string(A.t.mn4eXF),
                  }),
                  (0, i.jsxs)("div", {
                    className: j.stackTraceCode,
                    children: [
                      (0, i.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        children: r.message,
                      }),
                      (0, i.jsx)(m.Text, {
                        variant: "text-xxs/normal",
                        color: "text-secondary",
                        children: (0, i.jsx)("code", {
                          className: j.code,
                          children: (0, i.jsx)("pre", { children: r.stack }),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : null,
          L = v ? null : A.intl.string(A.t.oEJEFh),
          D =
            (null !== (t = null == b ? void 0 : b.isStaff()) &&
              void 0 !== t &&
              t) ||
            (null !== (n = null == b ? void 0 : b.isStaffPersonal()) &&
              void 0 !== n &&
              n);
        return (0, i.jsx)(Z.Yj, {
          title: A.intl.string(A.t.U38qZm),
          body: k,
          hint: D ? L : void 0,
          confirmText: A.intl.string(A.t.a3HlgI),
          cancelText: null != M ? A.intl.string(A.t.qIYnPj) : void 0,
          icon: (0, i.jsx)(x.Z, {
            width: 40,
            height: 40,
            className: j.notificationIcon,
          }),
          onNotificationClick: P,
          onConfirmClick: w,
          onCancelClick: null != M ? O : void 0,
          onDismissClick: a,
          expand: !0,
          locked: !0,
          notificationId: "overlay-crashed",
          index: 0,
          status: N._1z.ACTIVE,
          containerRef: null,
          contentOpacity: f,
          className: j.errorNotificationContainer,
          wrapperClassName: j.errorNotificationWrapper,
        });
      }
      class M extends l.PureComponent {
        componentDidCatch(e, t) {
          let n = (0, S.s1)().location;
          this.setState({ error: e, info: t });
          let i = (0, b.QF)();
          p.Z.setOverlayCrashed(i, e), p.Z.setInputLocked(!0, i);
          let l = C.Z.captureCrash(e, { extra: t });
          p.Z.track(N.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: l,
            error_level: "fatal",
          }),
            P(),
            (this.pid = i);
        }
        render() {
          let { children: e, className: t } = this.props,
            { error: n, showError: l } = this.state;
          if (null != n)
            return l
              ? (0, i.jsx)(E.Z, {
                  className: j.errorClickNotification,
                  children: (0, i.jsx)(O, {
                    error: n,
                    onLock: () => {
                      var e;
                      let t =
                        null !== (e = this.pid) && void 0 !== e
                          ? e
                          : (0, b.QF)();
                      p.Z.setInputLocked(!0, t),
                        this.setState({ showError: !1 });
                    },
                    onDisable: () => {
                      let e = y.ZP.getFocusedRunningGame();
                      null != e && f.Z.toggleOverlay(e, !1);
                    },
                    onCrashDisabled: () => {
                      var e;
                      let t =
                        null !== (e = this.pid) && void 0 !== e
                          ? e
                          : (0, b.QF)();
                      p.Z.updateOverlayState(t, h.mM.OVERLAY_CRASHED_DISABLED),
                        this.setState({ showError: !1 });
                    },
                    onReload: () => {
                      p.Z.setReloadOverlay((0, b.QF)()),
                        this.setState({ showError: !1 });
                    },
                  }),
                })
              : null;
          return (0, i.jsx)("div", { className: t, children: e });
        }
        constructor(...e) {
          super(...e),
            w(this, "state", { error: null, showError: !0, info: null }),
            w(this, "pid", null);
        }
      }
      t.Z = M;
    },
    306381: function (e, t, n) {
      "use strict";
      var i, l;
      n.d(t, {
        G: function () {
          return i;
        },
      }),
        ((l = i || (i = {})).ClickZones = "click_zones"),
        (l.WidgetAreas = "widget_areas"),
        (l.ExperimentalPerformance = "experimental_performance");
    },
    333031: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return b;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        s = n(954955),
        o = n.n(s),
        c = n(772848),
        u = n(442837),
        d = n(902704),
        m = n(13245),
        f = n(928518),
        p = n(358085),
        h = n(306381),
        g = n(610394),
        v = n(561064),
        S = n(501787),
        I = n(608631);
      function x(e, t, n) {
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
      function _(e, t) {
        return {
          name: e,
          left: Math.ceil(t.left),
          top: Math.ceil(t.top),
          right: Math.ceil(t.right),
          bottom: Math.ceil(t.bottom),
        };
      }
      let C = l.createContext(
        new (class e {
          observe(e) {
            var t;
            if (
              (null == this.resizeObserver &&
                (this.resizeObserver = new this.window.ResizeObserver(
                  this.handleResize,
                )),
              null == this.mutationObserver)
            ) {
              this.mutationObserver = new MutationObserver(
                this.handleMutations,
              );
              let e = f.Z.getWindow(S.OVERLAY_V3_KEY);
              null != e &&
                this.mutationObserver.observe(
                  null == e ? void 0 : e.document.body,
                  { subtree: !0, attributes: !0 },
                );
            }
            let n = this.zones.get(e);
            null != n && this.resizeObserver.unobserve(n.element);
            let i = e.getBoundingClientRect();
            this.zones.set(e, {
              element: e,
              zone: _(
                null !== (t = null == n ? void 0 : n.zone.name) && void 0 !== t
                  ? t
                  : (0, c.Z)(),
                i,
              ),
            }),
              this.elements.add(e),
              this.resizeObserver.observe(e),
              this.updateZones();
          }
          unobserve(e) {
            var t;
            null != this.zones.get(e) &&
              (null === (t = this.resizeObserver) ||
                void 0 === t ||
                t.unobserve(e),
              this.zones.delete(e),
              this.elements.delete(e),
              this.updateZones());
          }
          updateZones() {
            if (!p.isPlatformEmbedded) return;
            let e = f.Z.getWindow(S.OVERLAY_V3_KEY);
            null != e &&
              m.Z.setClickZones(
                Array.from(this.zones.values()).map((t) => {
                  let { zone: n } = t;
                  return {
                    name: n.name,
                    left: n.left / e.innerWidth,
                    top: n.top / e.innerHeight,
                    right: n.right / e.innerWidth,
                    bottom: n.bottom / e.innerHeight,
                  };
                }),
              );
          }
          cleanUp() {
            var e, t;
            this.globalUpdate.cancel(),
              this.zones.clear(),
              this.elements.clear(),
              null === (e = this.resizeObserver) ||
                void 0 === e ||
                e.disconnect(),
              null === (t = this.mutationObserver) ||
                void 0 === t ||
                t.disconnect(),
              this.updateZones();
          }
          constructor(e) {
            x(this, "resizeObserver", void 0),
              x(this, "mutationObserver", void 0),
              x(this, "zones", new Map()),
              x(this, "elements", new Set()),
              x(this, "window", void 0),
              x(this, "handleResize", () => {
                this.globalUpdate();
              }),
              x(this, "handleMutations", () => {
                this.globalUpdate();
              }),
              x(
                this,
                "globalUpdate",
                o()(
                  () => {
                    let e = !1;
                    for (let [t, n] of this.zones) {
                      let i = t.getBoundingClientRect(),
                        l = _(n.zone.name, i);
                      if (!(0, d.Z)(l, n.zone))
                        (e = !0),
                          (n = { element: n.element, zone: l }),
                          this.zones.set(t, n);
                    }
                    e && this.updateZones();
                  },
                  250,
                  { trailing: !0, maxWait: 1e3 },
                ),
              ),
              (this.window = e);
          }
        })((0, v.i)()),
      );
      function b(e) {
        let { observe: t = !0, className: n, children: r } = e,
          s = l.useContext(C),
          o = (0, u.e7)([g.ZP], () => g.ZP.hasRenderDebugMode(h.G.ClickZones)),
          [{ refHandler: c, setObserve: d }] = l.useState(() => {
            let e = null;
            return {
              setObserve(t) {
                null != e && (t ? s.observe(e) : s.unobserve(e));
              },
              refHandler(t) {
                null != e && s.unobserve(e), (e = t);
              },
            };
          });
        return (
          l.useLayoutEffect(() => {
            d(t);
          }, [t, d]),
          (0, i.jsx)("div", {
            ref: c,
            className: a()(n, I.clickable, o && I.debugMode),
            "data-click-zone": !0,
            children: r,
          })
        );
      }
    },
    380736: function (e, t, n) {
      "use strict";
      n.d(t, {
        QR: function () {
          return S;
        },
        Yj: function () {
          return _;
        },
        ZP: function () {
          return b;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        s = n(642128),
        o = n(481060),
        c = n(13245),
        u = n(809357),
        d = n(691891),
        m = n(44359),
        f = n(333031),
        p = n(693091),
        h = n(981631),
        g = n(388032),
        v = n(176463);
      function S(e, t, n) {
        return (0, i.jsx)(I, {
          keybind: e,
          message: t,
          messageWithoutKeybind: n,
        });
      }
      function I(e) {
        let { keybind: t, message: n, messageWithoutKeybind: l } = e,
          r = (0, u.o)();
        return (0, i.jsx)(i.Fragment, {
          children: r
            ? g.intl.format(n, {
                keybind: t,
                keybindHook: (e) =>
                  (0, i.jsx)(m.Z, { keybind: t }, t.join("+")),
              })
            : l,
        });
      }
      function x(e) {
        e.currentTarget.scrollTo(0, 0);
      }
      let _ = l.memo(function (e) {
        let {
            maxBodyLines: t,
            expand: n = !1,
            onNotificationShow: r,
            onDismissClick: c,
            onConfirmClick: u,
            onCancelClick: m,
            onNotificationClick: f,
            hint: p,
            cancelText: S,
            confirmText: I,
            icon: _,
            body: C,
            title: b,
            renderFooter: E,
            contentOpacity: y,
            status: Z,
            containerRef: T,
            className: N,
            wrapperClassName: A,
          } = e,
          [j, w] = l.useState(!1),
          P = n || j || Z === h._1z.FOCUSED;
        l.useEffect(() => {
          null == r || r();
        }, [r]);
        let R = l.useCallback(
            (e) => {
              e.stopPropagation(), null == c || c(e);
            },
            [c],
          ),
          O = l.useCallback(
            (e) => {
              e.stopPropagation(), null == u || u(e);
            },
            [u],
          ),
          M = l.useCallback(
            (e) => {
              e.stopPropagation(), null == m || m(e);
            },
            [m],
          ),
          k = l.useCallback(() => {
            w(!0);
          }, []),
          L = l.useCallback(() => {
            w(!1);
          }, []);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: a()(v.overflowWrapper, A),
              onScroll: x,
              children: (0, i.jsx)(o.Clickable, {
                innerRef: T,
                ignoreKeyPress: !0,
                onMouseOver: k,
                onMouseLeave: L,
                onClick: f,
                className: a()(v.container, { [v.clickable]: null != f }, N),
                children: (function () {
                  let e = null == E ? void 0 : E(P);
                  return (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(s.animated.div, {
                        className: v.iconAndDetails,
                        style: { opacity: y },
                        children: [
                          null == _
                            ? null
                            : "string" == typeof _
                              ? (0, i.jsx)(o.Avatar, {
                                  src: _,
                                  size: o.AvatarSizes.SIZE_40,
                                  className: v.avatar,
                                  "aria-hidden": !0,
                                })
                              : (0, i.jsx)("div", {
                                  className: v.avatar,
                                  children: _,
                                }),
                          (0, i.jsxs)("div", {
                            className: v.details,
                            children: [
                              (0, i.jsx)(o.Text, {
                                color: "interactive-normal",
                                variant: "text-sm/semibold",
                                lineClamp: 2,
                                children: b,
                              }),
                              null != C
                                ? (0, i.jsx)(o.Text, {
                                    color: "interactive-normal",
                                    variant: "text-sm/normal",
                                    lineClamp:
                                      null != t ? t * (P ? 2 : 1) : void 0,
                                    children: C,
                                  })
                                : null,
                              (function () {
                                let e = "function" == typeof p ? p(P) : p;
                                return null != p
                                  ? (0, i.jsx)(o.Text, {
                                      className: v.hint,
                                      color: "text-muted",
                                      variant: "text-xxs/medium",
                                      children: e,
                                    })
                                  : null;
                              })(),
                              null == u && null == m
                                ? null
                                : (0, i.jsxs)("div", {
                                    className: v.buttonContainer,
                                    children: [
                                      null != u
                                        ? (0, i.jsx)(o.Button, {
                                            className: v.button,
                                            size: o.Button.Sizes.SMALL,
                                            color: o.Button.Colors.GREEN,
                                            onClick: O,
                                            children:
                                              null != I
                                                ? I
                                                : g.intl.string(g.t.BddRzc),
                                          })
                                        : null,
                                      null != m
                                        ? (0, i.jsx)(o.Button, {
                                            className: v.button,
                                            size: o.Button.Sizes.SMALL,
                                            look: o.Button.Looks.OUTLINED,
                                            color: o.Button.Colors.PRIMARY,
                                            onClick: M,
                                            children:
                                              null != S
                                                ? S
                                                : g.intl.string(g.t["ETE/oK"]),
                                          })
                                        : null,
                                    ],
                                  }),
                            ],
                          }),
                        ],
                      }),
                      null != e &&
                        (0, i.jsx)(o.Clickable, {
                          className: v.footer,
                          ignoreKeyPress: !0,
                          onClick: (e) => e.stopPropagation(),
                          children: e,
                        }),
                    ],
                  });
                })(),
              }),
            }),
            (0, i.jsx)(d.Z, {
              className: v.dismissButton,
              onDismiss: R,
              "aria-label": g.intl.string(g.t.LnEgqa),
            }),
          ],
        });
      });
      function C(e) {
        let {
          springs: { opacity: t, scale: n, transform: l, height: r },
          index: a,
          children: o,
          locked: c,
        } = e;
        return (0, i.jsx)(s.animated.div, {
          className: v.animationWrapper,
          style: {
            pointerEvents: c && 0 !== a ? "none" : "auto",
            zIndex: Math.max(5 - a, 0),
            opacity: t,
            transform: l.to((e) => "translate3d(0, ".concat(e, "px, 0)")),
            scale: n.to([0, 1], [0.7, 1]),
            height: r,
          },
          children: o,
        });
      }
      function b(e) {
        let {
            notification: t,
            index: n,
            locked: r,
            transitionState: a,
            cleanUp: s,
          } = e,
          {
            id: o,
            props: {
              onNotificationShow: u,
              onDismissClick: d,
              onNotificationClick: m,
              onConfirmClick: h,
              onCancelClick: g,
              renderFooter: S,
            },
          } = t,
          I = l.useCallback(() => {
            u(o);
          }, [u, o]),
          x = l.useCallback(
            (e) => {
              c.Z.updateNotificationStatus(o), null == d || d(e, o);
            },
            [o, d],
          ),
          b = l.useCallback(
            (e) => {
              null == m || m(e, o);
            },
            [m, o],
          ),
          E = l.useCallback(
            (e) => {
              null == h || h(e, o);
            },
            [h, o],
          ),
          y = l.useCallback(
            (e) => {
              null == g || g(e, o);
            },
            [g, o],
          ),
          Z = l.useCallback((e) => (null == S ? void 0 : S(e, o)), [S, o]),
          {
            props: {
              onNotificationShow: T,
              onDismissClick: N,
              renderFooter: A,
              onNotificationClick: j,
              onConfirmClick: w,
              onCancelClick: P,
              ...R
            },
            status: O,
          } = t,
          { ref: M, springs: k } = (0, p.X4)(t.id, a, s);
        return (0, i.jsx)(C, {
          transitionState: a,
          springs: k,
          index: n,
          locked: r,
          children: (0, i.jsx)(f.Z, {
            observe: 0 === n,
            className: v.clickZone,
            children: (0, i.jsx)(_, {
              ...R,
              title: "function" == typeof R.title ? R.title(x) : R.title,
              containerRef: M,
              notificationId: t.id,
              onNotificationShow: 0 === n ? I : void 0,
              onDismissClick: x,
              onNotificationClick: null != m ? b : void 0,
              onConfirmClick: null != h ? E : void 0,
              onCancelClick: null != g ? y : void 0,
              renderFooter: Z,
              expand: !1,
              index: n,
              locked: r,
              status: O,
              contentOpacity: k.contentOpacity,
            }),
          }),
        });
      }
    },
    693091: function (e, t, n) {
      "use strict";
      n.d(t, {
        AS: function () {
          return a;
        },
        S4: function () {
          return s;
        },
        X4: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(192379),
        l = n(481060);
      function r(e, t, n) {
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
      class a {
        updateState(e, t) {
          this.items = e;
          let n = this.locked !== t;
          (this.locked = t), this.computeLayout(n);
        }
        initialize(e) {
          if (null == this.resizeObserver) {
            for (let [, { element: n }] of ((this.resizeObserver =
              new e.ResizeObserver(this.handleResize)),
            this.listeners)) {
              var t;
              null === (t = this.resizeObserver) ||
                void 0 === t ||
                t.observe(n);
            }
            this.queueCompute();
          }
        }
        cleanUp() {
          var e;
          null === (e = this.resizeObserver) || void 0 === e || e.disconnect(),
            (this.resizeObserver = void 0),
            this.listeners.clear();
        }
        queueCompute() {
          !this.queuedCompute &&
            ((this.queuedCompute = !0),
            Promise.resolve().then(() => this.computeLayout()));
        }
        computeLayout() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          this.queuedCompute = !1;
          let t = 0,
            n = 0;
          for (let i of this.items) {
            let l = this.listeners.get(i.notification.id);
            if (null == l) continue;
            let { offsetHeight: r } = l.element;
            (l.top !== t || l.height !== r || l.index !== n) && (e = !0),
              (l.top = t),
              (l.height = r),
              (l.index = n),
              0 === t &&
                (this.matchHeight !== r && (e = !0), (this.matchHeight = r)),
              (t += r + 8),
              n++;
          }
          e && this.broadcastLayoutUpdates();
        }
        broadcastLayoutUpdates() {
          for (let e of this.items) {
            let t = this.listeners.get(e.notification.id);
            null != t &&
              t.callback({
                locked: this.locked,
                matchHeight: this.matchHeight,
                height: t.height,
                top: t.top,
                index: t.index,
              });
          }
        }
        subscribe(e, t, n) {
          var i;
          this.listeners.set(e, {
            notificationId: e,
            callback: n,
            element: t,
            height: 0,
            top: 0,
            index: 0,
          }),
            null === (i = this.resizeObserver) || void 0 === i || i.observe(t),
            this.queueCompute();
        }
        unsubscribe(e) {
          var t;
          let n = this.listeners.get(e);
          null != n &&
            (null === (t = this.resizeObserver) ||
              void 0 === t ||
              t.unobserve(n.element),
            this.listeners.delete(e),
            this.queueCompute());
        }
        getLayoutSpecs(e) {
          return this.listeners.get(e);
        }
        constructor(e) {
          r(this, "resizeObserver", void 0),
            r(this, "listeners", new Map()),
            r(this, "queuedCompute", !1),
            r(this, "items", []),
            r(this, "matchHeight", 0),
            r(this, "locked", !0),
            r(this, "handleResize", (e) => {
              this.computeLayout();
            }),
            (this.locked = e);
        }
      }
      let s = i.createContext(new a(!0));
      function o(e, t, n) {
        return t && 0 !== e ? 20 * Math.max(e / 5, 0) : n;
      }
      let c = { mass: 0.8, friction: 25, tension: 320 };
      function u(e, t, n) {
        let [r, a] = (0, l.useSpring)(
            () => ({
              from: {
                opacity: 0,
                scale: 1,
                transform: 0,
                height: 0,
                contentOpacity: 1,
              },
            }),
            void 0,
            [],
          ),
          u = i.useRef(a),
          d = i.useContext(s),
          m = i.useMemo(() => {
            let t = !1;
            return (n) => {
              null == n
                ? d.unsubscribe(e)
                : d.subscribe(e, n, (e) => {
                    var n, i, l, r;
                    let {
                        locked: a,
                        matchHeight: s,
                        height: d,
                        top: m,
                        index: f,
                      } = e,
                      { current: p } = u;
                    let h = {
                      opacity:
                        ((n = f),
                        (i = a) && n > 4 ? 0 : i ? Math.min(1 - n / 4, 1) : 1),
                      scale: ((l = f), a ? Math.min(1 - l / 4, 1) : 1),
                      transform: o(f, a, m),
                      contentOpacity: ((r = f), a ? (r > 0 ? 0 : 1) : 1),
                      height: a ? s : d,
                    };
                    p({
                      from: t
                        ? void 0
                        : {
                            opacity: 0,
                            scale: 1.1,
                            transform: -((a ? s : d) * 1),
                            contentOpacity: 1,
                            height: a ? s : d,
                          },
                      to: h,
                      config: c,
                    }),
                      (t = !0);
                  });
            };
          }, [e, d]);
        return (
          i.useLayoutEffect(() => {
            if (t === l.TransitionStates.YEETED) {
              let t = d.getLayoutSpecs(e);
              if (null == t) {
                n();
                return;
              }
              u.current({
                to: {
                  scale: 0.8,
                  opacity: 0,
                  transform:
                    o(t.index, d.locked, t.top) + (d.locked ? 0 : t.height / 2),
                },
                config: c,
              }),
                setTimeout(n, 300);
            }
          }, [t, n, e, d]),
          { ref: m, springs: r }
        );
      }
    },
    561064: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
        i: function () {
          return o;
        },
      });
      var i = n(442837),
        l = n(214629),
        r = n(928518),
        a = n(501787),
        s = n(981631);
      function o() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : r.Z,
          i =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (0, l.e1)();
        return null !==
          (t =
            null !== (e = n.getWindow(a.OVERLAY_V3_KEY)) && void 0 !== e
              ? e
              : i
                ? n.getWindow(s.KJ3.ACTIVITY_POPOUT)
                : void 0) && void 0 !== t
          ? t
          : window;
      }
      function c() {
        let e = (0, l.PR)();
        return (0, i.e7)([r.Z], () => o(r.Z, e));
      }
    },
    936847: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(576125),
        a = n(465858),
        s = n(112843),
        o = n(524484);
      function c(e) {
        let { callTileRef: t, isFiring: n } = e,
          i = (0, s.Z)(),
          r = (0, a.Z)(t);
        return (
          l.useEffect(() => {
            n &&
              null != r &&
              null != t &&
              i.fire(r.x + t.clientWidth / 2, r.y + t.clientHeight / 2, {
                countMultiplier: 4,
              });
          }, [t, i, n, r]),
          null
        );
      }
      function u(e) {
        return (0, i.jsx)(r.Z, {
          confettiLocation: o.Hn.CALL_TILE,
          children: (0, i.jsx)(c, { ...e }),
        });
      }
    },
    512384: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(399606),
        r = n(481060),
        a = n(351780),
        s = n(170248);
      function o(e) {
        let { isShaking: t, shakeLocation: n, children: o, className: c } = e,
          u = (0, s.Z)(n);
        return (0, l.e7)([a.Z], () => a.Z.isEnabled({ shakeLocation: n }))
          ? (0, i.jsx)(r.Shaker, {
              isShaking: t,
              intensity: u,
              className: c,
              children: o,
            })
          : (0, i.jsx)(i.Fragment, { children: o });
      }
    },
    170248: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(442837),
        l = n(451478),
        r = n(351780);
      function a(e) {
        let t = (0, i.e7)([l.Z], () => l.Z.isFocused());
        return (0, i.e7)([r.Z], () =>
          r.Z.isEnabled({ shakeLocation: e }) && t ? r.Z.shakeIntensity : 0,
        );
      }
    },
    238246: function (e, t, n) {
      "use strict";
      n(47120);
      var i,
        l = n(200651),
        r = n(192379),
        a = n(120356),
        s = n.n(a),
        o = n(512722),
        c = n.n(o),
        u = n(568611),
        d = n(731965),
        m = n(442837),
        f = n(481060),
        p = n(490173),
        h = n(40851),
        g = n(607070),
        v = n(899663),
        S = n(636449),
        I = n(317381),
        x = n(496616),
        _ = n(100527),
        C = n(906732),
        b = n(168551),
        E = n(260035),
        y = n(597952),
        Z = n(628123),
        T = n(686546),
        N = n(950796),
        A = n(80006),
        j = n(151851),
        w = n(587061),
        P = n(392358),
        R = n(540059),
        O = n(314910),
        M = n(22205),
        k = n(892254),
        L = n(706454),
        D = n(210887),
        U = n(740492),
        V = n(451478),
        F = n(358085),
        z = n(62883),
        B = n(998502),
        W = n(473159),
        G = n(928518),
        H = n(981631),
        Y = n(501787),
        q = n(388032),
        J = n(81796);
      function X(e, t, n) {
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
      class K extends (i = r.Component) {
        componentDidMount() {
          let { guestWindow: e } = this.props,
            t = e.document;
          null == t.querySelector("title") &&
            null != t.head &&
            t.head.appendChild(t.createElement("title")),
            this.updateTitle(),
            this.updateFontScale(),
            this.updateLocale(),
            this.updateClientTheme(),
            this.updateSaturationFactor(),
            this.updateForcedColors(),
            (0, W.O)(e),
            e.addEventListener("blur", this.handleBlur),
            F.isPlatformEmbedded
              ? t.addEventListener(
                  "contextmenu",
                  z.contextMenuCallbackNative,
                  !1,
                )
              : t.addEventListener("contextmenu", z.contextMenuCallbackWeb, !1),
            e.addEventListener("beforeunload", this.beforeUnload);
        }
        componentDidUpdate(e) {
          let {
            title: t,
            fontScale: n,
            locale: i,
            clientThemesCSS: l,
          } = this.props;
          e.title !== t && this.updateTitle(),
            e.fontScale !== n && this.updateFontScale(),
            e.locale !== i && this.updateLocale(),
            e.clientThemesCSS !== l && this.updateClientTheme(),
            e.saturation !== this.props.saturation &&
              this.updateSaturationFactor(),
            (e.forcedColors !== this.props.forcedColors ||
              e.systemForcedColors !== this.props.systemForcedColors) &&
              this.updateForcedColors();
        }
        componentWillUnmount() {
          let { guestWindow: e } = this.props,
            t = e.document;
          e.removeEventListener("blur", this.handleBlur),
            F.isPlatformEmbedded
              ? t.removeEventListener(
                  "contextmenu",
                  z.contextMenuCallbackNative,
                )
              : t.removeEventListener("contextmenu", z.contextMenuCallbackWeb),
            (0, d.j)(() =>
              f.useModalsStore.setState((e) => ({
                ...e,
                [f.POPOUT_MODAL_CONTEXT]: [],
              })),
            ),
            e.removeEventListener("beforeunload", this.beforeUnload);
        }
        updateSaturationFactor() {
          let { saturation: e, guestWindow: t } = this.props,
            n = t.document.documentElement;
          c()(null != n, "Window document element was null"),
            n.style.setProperty("--saturation-factor", e.toString());
        }
        updateLocale() {
          let { locale: e, guestWindow: t } = this.props,
            n = t.document.documentElement;
          c()(null != n, "Window document element was null"), (n.lang = e);
        }
        updateTitle() {
          let { title: e, guestWindow: t } = this.props,
            n = t.document.querySelector("title");
          null != n && (n.innerText = e);
        }
        updateFontScale() {
          let { fontScale: e, guestWindow: t } = this.props,
            n = t.document.documentElement;
          c()(null != n, "Window document element was null"),
            (n.style.fontSize = "".concat(e, "%"));
        }
        updateClientTheme() {
          let { clientThemesCSS: e, guestWindow: t } = this.props,
            n = t.document,
            i = (0, n.head);
          c()(null != i, "Window document ".concat("head", " was null"));
          let l = i.querySelector("style[".concat(b.PQ, "]"));
          if (null != l) {
            l.textContent = e;
            return;
          }
          let r = n.createElement("style");
          r.setAttribute(b.PQ, "true"), (r.textContent = e), i.appendChild(r);
        }
        updateForcedColors() {
          let {
            useForcedColors: e,
            systemForcedColors: t,
            guestWindow: n,
          } = this.props;
          n.document.documentElement.classList.toggle(
            "disable-forced-colors",
            !e && "active" === t,
          );
        }
        render() {
          let {
              theme: e,
              forcedColors: t,
              focused: n,
              appFocused: i,
              children: r,
              windowKey: a,
              isRefreshEnabled: o,
              isRefreshChatInputEnabled: c,
              mouseModeEnabled: d,
              reducedMotionEnabled: m,
              fontScaleClass: g,
              withTitleBar: S,
              guestWindow: I,
              clientThemesClassName: x,
              contentClassName: _,
              appWrapperClassName: C,
            } = this.props,
            b = (0, F.getPlatform)(),
            A = s()(g, {
              "mouse-mode": d,
              "reduce-motion": m,
              "full-motion": !m,
              "app-focused": n || i,
              "visual-refresh": o,
              "visual-refresh-chat-input": c,
            }),
            w = a === Y.OVERLAY_V3_KEY ? M.Z : Z.Z;
          return (0, l.jsx)(u.VK, {
            children: (0, l.jsx)(
              k.Z,
              {
                children: (0, l.jsx)(f.ThemeProvider, {
                  theme: e,
                  children: (e) =>
                    (0, l.jsx)(f.RedesignIconContextProvider, {
                      children: (0, l.jsx)("div", {
                        "data-popout-root": !0,
                        ref: this.rootRef,
                        className: s()(e, (0, y.Z)(), A, x, C),
                        children: (0, l.jsx)(f.FocusRingScope, {
                          containerRef: this.rootRef,
                          children: (0, l.jsx)(v.Z, {
                            children: (0, l.jsxs)(w, {
                              children: [
                                (0, l.jsx)(T.Co, {}),
                                (0, l.jsx)(h.Wu, {
                                  appContext: H.IlC.POPOUT,
                                  renderWindow: I,
                                  children: (0, l.jsx)(E.m, {
                                    children: (0, l.jsxs)(O.yP, {
                                      children: [
                                        (0, l.jsxs)("div", {
                                          className: J.popout,
                                          children: [
                                            o &&
                                              S &&
                                              (0, l.jsx)(N.T, {
                                                windowKey: a,
                                                short: !0,
                                              }),
                                            !o && S && null != b
                                              ? (0, l.jsx)(j.Z, {
                                                  focused: n,
                                                  type: b,
                                                  windowKey: a,
                                                  macOSFrame: !0,
                                                })
                                              : null,
                                            (0, l.jsx)("div", {
                                              className: s()(J.content, _),
                                              children: r,
                                            }),
                                          ],
                                        }),
                                        (0, l.jsx)(f.Modals, {}),
                                        (0, l.jsx)(p.Z, {}),
                                        (0, l.jsx)(O.Un, {}),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    }),
                }),
              },
              t,
            ),
          });
        }
        constructor(...e) {
          super(...e),
            X(this, "rootRef", r.createRef()),
            X(this, "_cleanupWindowActionCreators", void 0),
            X(this, "beforeUnload", (e) => {
              let t = () => {
                G.Z.unmountWindow(this.props.windowKey),
                  F.isPlatformEmbedded && B.ZP.close(this.props.windowKey);
              };
              if (
                this.props.connectedToEmbeddedActivity &&
                !U.ZP.disableEmbeddedActivityPopOutAlert
              ) {
                if (!F.isPlatformEmbedded) return;
                (0, S.R)()
                  ? t()
                  : ((e.returnValue = q.intl.string(q.t["bST/Y2"])),
                    (0, x.Z)(() => {
                      t();
                    }));
              } else t();
            }),
            X(this, "handleBlur", () => {
              var e, t;
              null === (e = (t = this.props).onBlur) ||
                void 0 === e ||
                e.call(t);
            });
        }
      }
      X(K, "defaultProps", { withTitleBar: !0 });
      let Q = r.forwardRef(function (e, t) {
        let { guestWindow: n, focused: i } = (0, m.cj)([G.Z], () => ({
          guestWindow: G.Z.getWindow(e.windowKey),
          focused: G.Z.getWindowFocused(e.windowKey),
        }));
        c()(null != n, "Missing guestWindow reference");
        let r = (0, R.Q3)("PopoutWindow"),
          a = (0, R.R6)("PopoutWindow"),
          s = (0, m.e7)([V.Z], () => V.Z.isFocused()),
          { locale: o, theme: u } = (0, m.cj)([D.Z, L.default], () => ({
            locale: L.default.locale,
            theme: D.Z.theme,
          })),
          d = (0, m.e7)([g.Z], () => (g.Z.useForcedColors ? "yes" : "no")),
          { accessibilitySettings: p, appWrapperClassName: h } = (0, A.I)(),
          v = (0, m.e7)(
            [I.ZP],
            () =>
              null != e.channelId &&
              null !== I.ZP.getSelfEmbeddedActivityForChannel(e.channelId),
          );
        (0, w.Z)(n, !1);
        let S = (0, P.Z)(n, i),
          { analyticsLocations: x } = (0, C.ZP)(_.Z.POPOUT_WINDOW),
          { clientThemesClassName: E, clientThemesCSS: y } = (0, b.ZP)();
        return null == n
          ? null
          : (0, l.jsx)(f.DnDProvider, {
              children: (0, l.jsx)(C.Gt, {
                value: x,
                children: (0, l.jsx)(K, {
                  ref: t,
                  ...e,
                  guestWindow: n,
                  focused: i,
                  appFocused: s,
                  locale: o,
                  theme: u,
                  forcedColors: d,
                  useForcedColors: p.useForcedColors,
                  systemForcedColors: p.systemForcedColors,
                  fontScale: p.fontScale,
                  keyboardModeEnabled: p.keyboardModeEnabled,
                  mouseModeEnabled: S,
                  reducedMotionEnabled: p.useReducedMotion,
                  connectedToEmbeddedActivity: v,
                  fontScaleClass: p.fontScaleClass,
                  saturation: p.saturation,
                  alwaysShowLinkDecorations: p.alwaysShowLinkDecorations,
                  clientThemesClassName: E,
                  clientThemesCSS: y,
                  appWrapperClassName: h,
                  isRefreshEnabled: r,
                  isRefreshChatInputEnabled: a,
                }),
              }),
            });
      });
      t.Z = Q;
    },
    33316: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(70097),
        a = n(576645),
        s = n(540538);
      function o(e) {
        let { baseTileRef: t, cleanup: n } = e,
          o = (0, a.bK)(),
          c = (0, l.useRef)(o);
        return null == t || 0 === t.offsetHeight || c.current
          ? null
          : (0, i.jsx)("div", {
              style: {
                width: 1.22 * t.offsetWidth,
                height: 1.22 * t.offsetHeight,
              },
              className: s.demoEffectOverlay,
              children: (0, i.jsx)(r.Z, {
                autoPlay: !0,
                className: s.demoEffectImg,
                onEnded: n,
                children: (0, i.jsx)("source", {
                  src: "https://cdn.discordapp.com/assets/content/165a5256895e59f96fdfae485b1a4fdc3810995ac694302ca4692aefa97d49dc.webm",
                  type: "video/webm",
                }),
              }),
            });
      }
    },
    6242: function (e, t, n) {
      "use strict";
      n.d(t, {
        TD: function () {
          return c;
        },
        lL: function () {
          return u;
        },
      });
      var i = n(818083),
        l = n(594174),
        r = n(74538),
        a = n(474936);
      let s = (0, i.B)({
        kind: "user",
        id: "2024-08_hd_streaming_viewer",
        label: "HD Streaming Viewer Upsell",
        defaultConfig: { enabled: !1, sendNitroMessage: !1 },
        treatments: [
          {
            id: 1,
            label: "Enabled",
            config: { enabled: !0, sendNitroMessage: !0 },
          },
        ],
      });
      function o(e, t) {
        return (0, r.I5)(e, a.p9.TIER_2) || t;
      }
      function c(e) {
        let t = l.default.getCurrentUser();
        return s.getCurrentConfig(
          { location: "get_hd_streaming_viewer_config" },
          { autoTrackExposure: !1, disable: o(t, e) },
        );
      }
      function u(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0,
          i = arguments.length > 3 ? arguments[3] : void 0;
        return s.useExperiment(
          { location: e },
          { autoTrackExposure: t, disable: o(n, i) },
        );
      }
    },
    757692: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return s;
        },
      });
      var i = n(451467),
        l = n(557457),
        r = n(354459),
        a = n(37113);
      function s(e, t) {
        var n, s;
        if (
          null == e ||
          e.type !== r.fO.STREAM ||
          null == e.maxResolution ||
          null == e.maxFrameRate ||
          !(
            (null == e
              ? void 0
              : null === (n = e.maxResolution) || void 0 === n
                ? void 0
                : n.height) in a.LY
          ) ||
          !(e.maxFrameRate in a.ws)
        )
          return !1;
        let o = (0, i.Z)(
          a.tI.PRESET_VIDEO,
          (0, a.aW)(
            null == e
              ? void 0
              : null === (s = e.maxResolution) || void 0 === s
                ? void 0
                : s.height,
          ),
          (0, a.L9)(e.maxFrameRate),
          t,
        );
        return (
          !(
            null == e ||
            (0, l.tR)({
              maxResolution: e.maxResolution,
              maxFrameRate: e.maxFrameRate,
            })
          ) || o
        );
      }
    },
    231664: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(848246),
        l = n(442837),
        r = n(361291),
        a = n(557457),
        s = n(933843),
        o = n(37113);
      function c() {
        let { resolution: e, fps: t } = (0, l.cj)([r.Z], () => r.Z.getState());
        if (!(!(0, s.So)(i.q.STREAM_HIGH_QUALITY) || (0, s.mc)(e, t)))
          return "".concat((0, o.o6)(e), " ").concat((0, a.bp)(t));
      }
    },
    98369: function (e, t, n) {
      "use strict";
      n(47120),
        n(518263),
        n(970173),
        n(520712),
        n(268111),
        n(941497),
        n(32026),
        n(480839),
        n(744285),
        n(492257),
        n(873817),
        n(724458);
      var i,
        l,
        r,
        a,
        s = n(442837),
        o = n(46973),
        c = n(570140),
        u = n(569545),
        d = n(314897),
        m = n(19780),
        f = n(959457),
        p = n(630759),
        h = n(729303),
        g = n(651941),
        v = n(981631);
      let S = new Map(),
        I = new Map(),
        x = !1,
        _ = null;
      function C() {
        return f.Z.getAllActiveStreamKeys().reduce((e, t) => {
          let { ownerId: n } = (0, u.my)(t),
            i = !0 === S.get(n),
            l = I.get(t) !== i;
          return I.set(t, i), !!l || e;
        }, !1);
      }
      function b() {
        var e;
        let t = null !== (e = m.Z.getUserIds()) && void 0 !== e ? e : new Set(),
          n = d.default.getId(),
          i = !0;
        for (let e of t)
          if (n !== e && !0 !== S.get(e)) {
            i = !1;
            break;
          }
        let l = i !== x;
        return (x = i), l;
      }
      function E(e) {
        let { userId: t } = e;
        if (d.default.getId() === t) return !1;
        let n = (function (e) {
            let t = m.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
              i = g.Z.isKeyVerified(e, n) || h.Z.isKeyVerified(e, n),
              l = (0, p.UB)(e, [m.Z, f.Z]),
              r = i && !l,
              a = r !== S.get(e);
            return S.set(e, r), a;
          })(t),
          i = C(),
          l = b();
        return n || i || l;
      }
      function y() {
        S.clear(), I.clear(), (x = !1);
      }
      class Z extends (i = s.ZP.Store) {
        initialize() {
          this.waitFor(h.Z, g.Z, m.Z, f.Z);
        }
        isCallVerified() {
          return x;
        }
        isStreamVerified(e) {
          return I.get(e);
        }
        isUserVerified(e) {
          return S.get(e);
        }
      }
      (a = "SecureFramesVerifiedStore"),
        (r = "displayName") in (l = Z)
          ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = a),
        (t.Z = new Z(c.Z, {
          CONNECTION_OPEN: y,
          VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (t === _) return !1;
            (_ = t), y();
          },
          RTC_CONNECTION_STATE: function (e) {
            let { streamKey: t, state: n, context: i } = e;
            if (n !== v.hes.DISCONNECTED) return !1;
            switch (i) {
              case o.Yn.STREAM:
                if (null == t) return !1;
                return I.delete(t), b();
              case o.Yn.DEFAULT:
                y();
            }
          },
          RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
            let { userIds: t } = e,
              n = d.default.getId(),
              i = t.reduce(
                (e, t) => (n === t ? e : !!E({ userId: t }) || e),
                !1,
              ),
              l = C(),
              r = b();
            return i || l || r;
          },
          SECURE_FRAMES_TRANSIENT_KEY_CREATE: E,
          SECURE_FRAMES_TRANSIENT_KEY_DELETE: E,
          SECURE_FRAMES_VERIFIED_KEY_CREATE: E,
          SECURE_FRAMES_VERIFIED_KEY_DELETE: E,
          SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: E,
        }));
    },
    729303: function (e, t, n) {
      "use strict";
      n(47120),
        n(518263),
        n(970173),
        n(520712),
        n(268111),
        n(941497),
        n(32026),
        n(480839),
        n(744285),
        n(492257),
        n(873817);
      var i,
        l,
        r,
        a,
        s = n(442837),
        o = n(570140);
      let c = new Map();
      class u extends (i = s.ZP.Store) {
        getUsers() {
          return c;
        }
        isKeyVerified(e, t) {
          let n = c.get(e);
          if (null == t || null == n || n.length !== t.length) return !1;
          for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return !1;
          return !0;
        }
      }
      (a = "TransientKeyStore"),
        (r = "displayName") in (l = u)
          ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = a),
        (t.Z = new u(o.Z, {
          CONNECTION_OPEN: function () {
            c.clear();
          },
          SECURE_FRAMES_TRANSIENT_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
              i = new Uint8Array(n);
            c.set(t, i);
          },
          SECURE_FRAMES_TRANSIENT_KEY_DELETE: function (e) {
            let { userId: t } = e;
            return c.delete(t);
          },
        }));
    },
    277642: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return c;
        },
        t: function () {
          return o;
        },
      });
      var i = n(442837),
        l = n(314897),
        r = n(19780),
        a = n(959457);
      function s(e, t) {
        return 0 === e.size || (1 === e.size && e.has(t));
      }
      function o(e) {
        return (0, i.e7)([a.Z, l.default], () => {
          if (null == e) return !0;
          let t = a.Z.getUserIds(e);
          return null == t || s(t, l.default.getId());
        });
      }
      function c() {
        return (0, i.e7)([r.Z, l.default], () => {
          let e = r.Z.getUserIds();
          return null == e || s(e, l.default.getId());
        });
      }
    },
    441894: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return o;
        },
      }),
        n(47120);
      var i = n(442837),
        l = n(592125),
        r = n(19780),
        a = n(977059),
        s = n(760373);
      function o(e) {
        let { channelId: t, location: n } = e,
          { enabled: o } = (0, a.S)({ location: n });
        return (0, i.e7)(
          [r.Z, l.Z],
          () =>
            (function (e, t) {
              var n;
              let [i, a] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [r.Z, l.Z];
              if (!t || null == e || i.getChannelId() !== e) return !1;
              let o = a.getChannel(e);
              if (null == o || o.isGuildStageVoice()) return !1;
              let c =
                null === (n = i.getSecureFramesState()) || void 0 === n
                  ? void 0
                  : n.version;
              return null != c && c !== s.Eg;
            })(t, o, [r.Z, l.Z]),
          [t, o],
        );
      }
    },
    210975: function (e, t, n) {
      "use strict";
      n.d(t, {
        m$: function () {
          return m;
        },
        wV: function () {
          return u;
        },
        zU: function () {
          return d;
        },
      });
      var i = n(442837),
        l = n(569545),
        r = n(314897),
        a = n(19780),
        s = n(98369),
        o = n(277642),
        c = n(441894);
      function u(e) {
        let { userId: t, channelId: n, location: l } = e,
          o = (0, c.J)({ channelId: n, location: l });
        return (0, i.e7)(
          [s.Z, r.default, a.Z],
          () =>
            null != t &&
            o &&
            a.Z.isUserConnected(t) &&
            r.default.getId() !== t &&
            s.Z.isUserVerified(t),
          [o, t],
        );
      }
      function d(e) {
        let { streamKey: t, channelId: n, location: a } = e,
          u = (0, c.J)({ channelId: n, location: a }),
          d = (0, o.t)(t);
        return (0, i.e7)(
          [s.Z, r.default],
          () => {
            if (!u || d || null == t) return !1;
            let e = r.default.getId(),
              { ownerId: n } = (0, l.my)(t);
            return n !== e && s.Z.isStreamVerified(t);
          },
          [d, u, t],
        );
      }
      function m(e) {
        let { channelId: t, location: n } = e,
          l = (0, c.J)({ channelId: t, location: n }),
          r = (0, o.r)();
        return (0, i.e7)([s.Z], () => !!l && !r && s.Z.isCallVerified(), [
          r,
          l,
        ]);
      }
    },
    125268: function (e, t, n) {
      "use strict";
      n.d(t, {
        AX: function () {
          return c;
        },
        BR: function () {
          return d;
        },
        Bo: function () {
          return g;
        },
        Df: function () {
          return m;
        },
        LT: function () {
          return v;
        },
        ZZ: function () {
          return f;
        },
        cV: function () {
          return u;
        },
        fW: function () {
          return h;
        },
        gr: function () {
          return p;
        },
        oW: function () {
          return o;
        },
      });
      var i = n(261470),
        l = n(544891),
        r = n(570140),
        a = n(984063),
        s = n(981631);
      function o(e, t, n, i, l) {
        r.Z.dispatch({
          type: "SHARED_CANVAS_DRAW_LINE_POINT",
          channelId: e,
          userId: n,
          lineId: t,
          streamerId: i,
          point: l,
        });
      }
      function c(e, t, n, i) {
        return l.tn.post({
          url: s.ANM.SHARED_CANVAS_LINES(e, n),
          body: { line_id: t, points: i },
          rejectWithError: !1,
        });
      }
      function u(e, t, n, i) {
        r.Z.dispatch({
          type: "SHARED_CANVAS_UPDATE_LINE_POINTS",
          userId: t,
          lineId: e,
          newPoints: i,
          streamerId: n,
        });
      }
      function d(e, t, n) {
        return l.tn.post({
          url: s.ANM.SHARED_CANVAS_EMOJI_HOSES(e, t),
          body: { emoji_hose: n },
          rejectWithError: !1,
        });
      }
      function m(e, t, n) {
        l.tn.del({
          url: s.ANM.SHARED_CANVAS_EMOJI_HOSE(e, t, n),
          backoff: new i.Z(),
          rejectWithError: !0,
        });
      }
      function f(e, t) {
        (t.state = a.f.STOP),
          r.Z.dispatch({
            type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
            emojiHose: t,
            userId: t.userId,
            streamerId: e,
          });
      }
      function p(e, t, n) {
        r.Z.dispatch({
          type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
          emojiHose: e,
          userId: t,
          streamerId: n,
        });
      }
      function h(e, t) {
        r.Z.dispatch({
          type: "SHARED_CANVAS_CLEAR_DRAWABLES",
          drawables: e,
          streamerId: t,
        });
      }
      function g(e) {
        r.Z.dispatch({ type: "SHARED_CANVAS_SET_DRAW_MODE", drawMode: e });
      }
      function v() {
        r.Z.dispatch({ type: "TOGGLE_OVERLAY_CANVAS" });
      }
    },
    813900: function (e, t, n) {
      "use strict";
      n.d(t, {
        FO: function () {
          return s;
        },
        Fq: function () {
          return a;
        },
        Ks: function () {
          return i;
        },
        q2: function () {
          return r;
        },
        qh: function () {
          return l;
        },
      });
      let i = 80,
        l = 48,
        r = 3,
        a = 500,
        s = 5e3;
    },
    822183: function (e, t, n) {
      "use strict";
      let i = (0, n(818083).B)({
        kind: "guild",
        id: "2023-01_shared_canvas",
        label: "Shared Canvas",
        defaultConfig: { isSharedCanvasEnabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable Shared Canvas",
            config: { isSharedCanvasEnabled: !0 },
          },
        ],
      });
      t.Z = i;
    },
    673125: function (e, t, n) {
      "use strict";
      n(653041), n(47120);
      var i,
        l,
        r,
        a,
        s = n(442837),
        o = n(570140),
        c = n(633302),
        u = n(594174),
        d = n(176354),
        m = n(984063),
        f = n(88315),
        p = n(813900);
      let h = {},
        g = {},
        v = {},
        S = !0,
        I = null;
      function x(e) {
        if (null == g[e]) {
          let t = u.default.getUser(e);
          if (null == t) return;
          let n = t.getAvatarURL(null, p.Ks),
            i = new Image();
          (i.src = n), (g[e] = i);
        }
      }
      class _ extends (i = s.ZP.Store) {
        get visibleOverlayCanvas() {
          return S;
        }
        getDrawables(e) {
          return null != h[e] ? h[e] : [];
        }
        getAvatarImage(e) {
          return g[e];
        }
        getEmojiImage(e) {
          return v[e];
        }
        getDrawMode() {
          return I;
        }
      }
      (a = "SharedCanvasStore"),
        (r = "displayName") in (l = _)
          ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = a);
      let C = new _(o.Z, {
        SHARED_CANVAS_UPDATE_LINE_POINTS: function (e) {
          let { lineId: t, newPoints: n, userId: i, streamerId: l } = e,
            r = h[l];
          if (null == r)
            h[l] = [{ type: m.W.LINE, id: t, userId: i, points: n }];
          else {
            let e = r.find((e) => e.id === t);
            null == e
              ? r.push({ type: m.W.LINE, id: t, userId: i, points: n })
              : (0, f.P7)(e) && e.points.push(...n);
          }
          x(i);
        },
        SHARED_CANVAS_UPDATE_EMOJI_HOSE: function (e) {
          var t, n, i;
          let { emojiHose: l, streamerId: r, userId: a } = e,
            s = { ...l, type: m.W.EMOJI_HOSE };
          if (null == h[r]) h[r] = [s];
          else {
            let e = h[r].findIndex((e) => e.id === l.id);
            e >= 0 ? (h[r][e] = { ...h[r][e], ...s }) : h[r].push(s);
          }
          let o =
            null !==
              (n =
                null !== (t = l.emojiId) && void 0 !== t ? t : l.emojiName) &&
            void 0 !== n
              ? n
              : "";
          if (null == v[o]) {
            let e =
              null != l.emojiName
                ? c.ZP.convertNameToSurrogate(l.emojiName)
                : null;
            (v[o] = new Image()),
              (v[o].src = (0, d.qc)(
                {
                  id: l.emojiId,
                  name:
                    null !== (i = null != e ? e : l.emojiName) && void 0 !== i
                      ? i
                      : "",
                  animated: !1,
                },
                p.qh,
              ));
          }
          x(a);
        },
        SHARED_CANVAS_CLEAR_DRAWABLES: function (e) {
          let { drawables: t, streamerId: n } = e;
          if (null != h[n]) {
            let e = new Set();
            t.forEach((t) => e.add(t.id)),
              (h[n] = h[n].filter((t) => !e.has(t.id)));
          }
        },
        SHARED_CANVAS_SET_DRAW_MODE: function (e) {
          let { drawMode: t } = e;
          I = t;
        },
        TOGGLE_OVERLAY_CANVAS: function (e) {
          let {} = e;
          S = !S;
        },
      });
      t.Z = C;
    },
    984063: function (e, t, n) {
      "use strict";
      var i, l, r, a;
      n.d(t, {
        W: function () {
          return i;
        },
        f: function () {
          return l;
        },
      }),
        ((r = i || (i = {})).LINE = "line"),
        (r.EMOJI_HOSE = "emoji_hose"),
        ((a = l || (l = {})).START = "START"),
        (a.STOP = "STOP");
    },
    88315: function (e, t, n) {
      "use strict";
      n.d(t, {
        P7: function () {
          return p;
        },
        RR: function () {
          return f;
        },
        UN: function () {
          return u;
        },
        bg: function () {
          return h;
        },
        hn: function () {
          return d;
        },
        np: function () {
          return m;
        },
      });
      var i = n(979590),
        l = n.n(i),
        r = n(866442),
        a = n(220082),
        s = n(594174),
        o = n(984063),
        c = n(813900);
      function u(e) {
        let t = e.current,
          n = null == t ? void 0 : t.getContext("2d");
        if (null != t && null != n) n.clearRect(0, 0, t.width, t.height);
      }
      function d(e, t) {
        let {
            width: n,
            height: i,
            left: l,
            top: r,
          } = e.getBoundingClientRect(),
          a = (t.clientX - l) / n;
        return { x: a, y: (t.clientY - r) / i };
      }
      function m(e, t) {
        return Math.round(e * t * window.devicePixelRatio);
      }
      function f(e, t, n) {
        return { x: m(e.x, t), y: m(e.y, n), deltaTime: e.deltaTime };
      }
      function p(e) {
        return e.type === o.W.LINE;
      }
      function h(e, t, n, i) {
        var o;
        let u = s.default.getUser(e),
          d = null == u ? void 0 : u.getAvatarURL(null, c.Ks),
          m =
            null != d
              ? null === (o = a.SR.getState().palette[d]) || void 0 === o
                ? void 0
                : o[0]
              : null,
          f =
            null != m
              ? "#".concat(l()({ r: m[0], g: m[1], b: m[2] }).toHex())
              : i,
          p = (0, r.Bd)((0, r._i)(f)) > 0.5 ? n : t;
        return { fillColor: f, outlineColor: p };
      }
    },
    199766: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return l;
        },
        T: function () {
          return r;
        },
      });
      var i = n(673125);
      function l(e, t, n, i, l) {
        e.save(),
          e.beginPath(),
          (e.fillStyle = i),
          e.arc(
            t,
            n,
            Math.round(20 * window.devicePixelRatio) / 2 + l,
            0,
            2 * Math.PI,
          ),
          e.fill(),
          e.restore();
      }
      function r(e, t, n, l) {
        e.save();
        let r = i.Z.getAvatarImage(l);
        if (null == r) return;
        let a = 20 * window.devicePixelRatio;
        e.beginPath(),
          e.arc(t, n, a / 2, 0, 2 * Math.PI),
          e.clip(),
          e.drawImage(r, t - a / 2, n - a / 2, a, a),
          e.restore();
      }
    },
    262433: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return h;
        },
        Z: function () {
          return v;
        },
      }),
        n(653041);
      var i = n(392711),
        l = n.n(i),
        r = n(772848),
        a = n(15729),
        s = n(731965),
        o = n(125268),
        c = n(673125),
        u = n(984063),
        d = n(88315),
        m = n(199766),
        f = n(813900);
      let p = {
          X_OFFSET: 2 * f.qh,
          Y_OFFSET: 25,
          X_SPEED: 0.5,
          Y_SPEED_MIN: -1,
          Y_SPEED_MAX: -5,
          OPACITY: 1,
          OPACITY_SPEED_MIN: 0.01,
          OPACITY_SPEED_MAX: 0.05,
          SIZE_MIN: f.qh / 2,
          SIZE_MAX: f.qh,
        },
        h = (0, a.U)(() => ({ particles: {}, lastSpawned: {} }));
      function g(e, t) {
        var n;
        l()(
          null !== (n = h.getState().particles[e.id]) && void 0 !== n ? n : {},
        ).forEach(t);
      }
      function v(e) {
        var t, n, i, a;
        let {
          emojiHose: v,
          context: S,
          canvasWidth: I,
          canvasHeight: x,
          fallbackColor: _,
          outlineColorDark: C,
          outlineColorLight: b,
          streamerId: E,
          deadDrawables: y,
        } = e;
        S.save();
        let Z = c.Z.getEmojiImage(
            null !==
              (n =
                null !== (t = v.emojiId) && void 0 !== t ? t : v.emojiName) &&
              void 0 !== n
              ? n
              : "",
          ),
          T = (0, d.np)(v.x, I),
          N = (0, d.np)(v.y, x),
          { outlineColor: A } = (0, d.bg)(v.userId, C, b, _);
        if (
          (g(v, (e) => {
            var t, n;
            return (
              (t = v),
              (n = e),
              void ((n.x += n.xSpeed * window.devicePixelRatio),
              (n.y += n.ySpeed * window.devicePixelRatio),
              (n.opacity -= n.opacitySpeed),
              n.opacity <= 0 &&
                (0, s.j)(() => {
                  h.setState(
                    (e) => (
                      delete e.particles[t.id][n.id],
                      0 === Object.keys(e.particles[t.id]).length &&
                        delete e.particles[t.id],
                      e
                    ),
                  );
                }))
            );
          }),
          !(function (e, t, n) {
            var i;
            let a =
                null !== (i = h.getState().lastSpawned[e.id]) && void 0 !== i
                  ? i
                  : 0,
              o = Date.now();
            if (
              !(a + 100 > o) &&
              e.state !== u.f.STOP &&
              !!(0.8 >= Math.random() || a + 300 < o)
            )
              (0, s.j)(() => {
                h.setState((i) => {
                  var a, s, o;
                  let c =
                      null !== (a = i.particles[e.id]) && void 0 !== a ? a : {},
                    u = l().random(1, 2);
                  for (let e = 0; e < u; e++) {
                    let e =
                      ((s = t),
                      (o = n),
                      {
                        id: (0, r.Z)(),
                        x: s + l().random(-p.X_OFFSET, p.X_OFFSET),
                        y: o + l().random(-p.Y_OFFSET, p.Y_OFFSET),
                        xSpeed: l().random(-p.X_SPEED, p.X_SPEED),
                        ySpeed: l().random(p.Y_SPEED_MIN, p.Y_SPEED_MAX),
                        opacity: p.OPACITY,
                        opacitySpeed: l().random(
                          p.OPACITY_SPEED_MIN,
                          p.OPACITY_SPEED_MAX,
                        ),
                        size: l().random(p.SIZE_MIN, p.SIZE_MAX),
                      });
                    c[e.id] = e;
                  }
                  return (
                    (i.particles[e.id] = c),
                    (i.lastSpawned[e.id] = Date.now()),
                    i
                  );
                });
              });
          })(v, T, N),
          (0, m.I)(S, T, N, A, f.q2),
          (0, m.T)(S, T, N, v.userId),
          g(v, (e) =>
            (function (e, t, n) {
              if (null == t) return;
              let i = n.size * window.devicePixelRatio,
                l = n.x - (i / 2) * window.devicePixelRatio,
                r = n.y - 1.2 * i * window.devicePixelRatio;
              (e.globalAlpha = n.opacity),
                e.drawImage(t, i / 2 + l, i / 2 + r, i, i);
            })(S, Z, e),
          ),
          v.lastUpdatedAt + f.FO < Date.now() && (0, o.ZZ)(E, v),
          v.state === u.f.STOP &&
            ((i = v),
            !(
              Object.keys(
                null !== (a = h.getState().particles[i.id]) && void 0 !== a
                  ? a
                  : {},
              ).length > 0
            )))
        )
          y.push(v);
        S.restore();
      }
    },
    400321: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      }),
        n(653041);
      var i = n(88315),
        l = n(199766),
        r = n(813900);
      function a(e) {
        let {
          line: t,
          context: n,
          canvasWidth: a,
          canvasHeight: s,
          fallbackColor: o,
          outlineColorDark: c,
          outlineColorLight: u,
          linesDrawnAt: d,
          deadDrawables: m,
        } = e;
        null == d.current[t.id] && (d.current[t.id] = Date.now()),
          (n.lineCap = "round"),
          (n.lineJoin = "round");
        let f = t.points.map((e) => (0, i.RR)(e, a, s)),
          p = d.current[t.id],
          h = (e) => p + e.deltaTime,
          g = (e) => h(e) + 1500 >= Date.now(),
          v = (e) => h(e) <= Date.now() && g(e),
          S = f.find(v);
        if (null == S) {
          !g(t.points[t.points.length - 1]) && m.push(t);
          return;
        }
        let I = (e, t) => {
            let i = null;
            (n.lineWidth = t * window.devicePixelRatio),
              (n.strokeStyle = e),
              n.beginPath(),
              n.moveTo(S.x, S.y);
            for (let e = 1; e < f.length; e++) {
              let t = f[e];
              v(t) && (n.lineTo(t.x, t.y), (i = t));
            }
            return n.stroke(), i;
          },
          { fillColor: x, outlineColor: _ } = (0, i.bg)(t.userId, c, u, o),
          C = I(_, 6 + r.q2),
          b = null != C && v(C);
        b && (0, l.I)(n, C.x, C.y, _, r.q2),
          I(x, 6),
          b && (0, l.T)(n, C.x, C.y, t.userId);
      }
    },
    179295: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(192379),
        l = n(442837),
        r = n(569545),
        a = n(959457),
        s = n(626135),
        o = n(981631),
        c = n(474936);
      function u(e, t) {
        let {
            handleMouseDown: n,
            handleMouseMove: u,
            handleMouseUp: d,
            handleMouseEnter: m,
          } = e,
          f = i.useRef(null),
          p = (0, l.e7)([a.Z], () => a.Z.getRTCConnection((0, r.V9)(t))),
          h = i.useCallback(
            (e, t, i) => {
              (f.current = Date.now()), n(e, t, i);
            },
            [n],
          );
        return {
          handleMouseUp: i.useCallback(
            (e, t, n) => {
              if ((d(e, t, n), null != f.current)) {
                if (null != p) {
                  var i, l, r;
                  (i = e),
                    (l = p),
                    (r = Date.now() - f.current),
                    s.default.track(o.rMx.PREMIUM_FEATURE_USAGE, {
                      feature_name: ""
                        .concat(c.QP.SHARED_CANVAS, "_")
                        .concat(i.type),
                      feature_tier: c.h1.FREE,
                      media_session_id: l.getMediaSessionId(),
                      parent_media_session_id: l.parentMediaSessionId,
                      guild_id: l.guildId,
                      duration: r,
                    });
                }
                f.current = null;
              }
            },
            [d, p],
          ),
          handleMouseDown: h,
          handleMouseMove: u,
          handleMouseEnter: m,
        };
      }
    },
    370663: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(192379),
        l = n(772848),
        r = n(125268);
      let a = () => {};
      function s(e, t, n) {
        let s = i.useRef((0, l.Z)()),
          o = i.useRef(Date.now()),
          c = i.useCallback(
            (i, l) => {
              let a = { x: i, y: l, deltaTime: Date.now() - o.current };
              (0, r.oW)(t, s.current, e, n, a), (0, r.cV)(s.current, e, n, [a]);
            },
            [t, n, e],
          ),
          u = i.useCallback(
            (e, t, n) => {
              (s.current = (0, l.Z)()), (o.current = Date.now()), c(t, n);
            },
            [c],
          ),
          d = i.useCallback((e, t, n) => c(t, n), [c]),
          m = i.useCallback((e, t, n) => u(e, t, n), [u]);
        return i.useMemo(
          () => ({
            handleMouseDown: u,
            handleMouseMove: d,
            handleMouseUp: a,
            handleMouseEnter: m,
          }),
          [u, m, d],
        );
      }
    },
    743597: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(192379),
        l = n(392711),
        r = n.n(l),
        a = n(772848),
        s = n(846519),
        o = n(125268),
        c = n(984063),
        u = n(813900);
      let d = r().debounce(o.BR, u.Fq, { maxWait: u.Fq });
      function m(e, t, n) {
        let l = i.useRef((0, a.Z)()),
          r = i.useRef(new s.Xp()),
          m = i.useCallback(
            (i) => {
              (i.lastUpdatedAt = Date.now()),
                (0, o.gr)(i, e, n),
                (0, o.BR)(t, n, i);
            },
            [t, n, e],
          ),
          f = i.useCallback(
            (i, s, d) => {
              l.current = (0, a.Z)();
              let f = {
                ...i,
                id: l.current,
                x: s,
                y: d,
                userId: e,
                state: c.f.START,
                lastUpdatedAt: Date.now(),
              };
              (0, o.BR)(t, n, f),
                (0, o.gr)(f, e, n),
                r.current.start(u.FO, () => m(f));
            },
            [e, t, n, m],
          ),
          p = i.useCallback(
            (i, a, s) => {
              let f = {
                ...i,
                id: l.current,
                x: a,
                y: s,
                userId: e,
                state: c.f.START,
                lastUpdatedAt: Date.now(),
              };
              d(t, n, f), (0, o.gr)(f, e, n), r.current.start(u.FO, () => m(f));
            },
            [e, t, n, m],
          ),
          h = i.useCallback(
            (i, a, s) => {
              d.cancel(),
                (0, o.Df)(t, n, l.current),
                (0, o.gr)(
                  {
                    ...i,
                    id: l.current,
                    x: a,
                    y: s,
                    userId: e,
                    state: c.f.STOP,
                    lastUpdatedAt: Date.now(),
                  },
                  e,
                  n,
                ),
                r.current.stop();
            },
            [t, n, e],
          ),
          g = i.useCallback((e, t, n) => p(e, t, n), [p]);
        return i.useMemo(
          () => ({
            handleMouseDown: f,
            handleMouseMove: p,
            handleMouseUp: h,
            handleMouseEnter: g,
          }),
          [f, g, p, h],
        );
      }
    },
    364125: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(192379),
        l = n(399606),
        r = n(673125),
        a = n(984063),
        s = n(88315),
        o = n(179295),
        c = n(370663),
        u = n(743597);
      function d(e) {
        let {
            user: t,
            channelId: n,
            streamerId: d,
            stream: m,
            focused: f,
            canvas: p,
          } = e,
          h = i.useRef(!1),
          g = (0, l.e7)([r.Z], () => r.Z.getDrawMode()),
          v = (0, o.Z)((0, c.Z)(t.id, n, d), m),
          S = (0, o.Z)((0, u.Z)(t.id, n, d), m),
          I = i.useCallback(
            (e, t, n) => {
              if (null == p) return;
              let { x: i, y: l } = (0, s.hn)(p, n);
              switch (t.type) {
                case a.W.LINE:
                  return v[e](t, i, l);
                case a.W.EMOJI_HOSE:
                  return S[e](t, i, l);
              }
            },
            [p, v, S],
          ),
          x = i.useCallback(
            (e) => {
              if (!!f && null != g)
                e.stopPropagation(),
                  (h.current = !0),
                  I("handleMouseDown", g, e);
            },
            [I, g, f],
          ),
          _ = i.useCallback(
            (e) => {
              if (!!f && null != g)
                e.stopPropagation(), h.current && I("handleMouseMove", g, e);
            },
            [I, g, f],
          ),
          C = i.useCallback(
            (e) => {
              if (!!f && null != g)
                e.stopPropagation(), (h.current = !1), I("handleMouseUp", g, e);
            },
            [I, g, f],
          ),
          b = i.useCallback(
            (e) => {
              if (!!h.current && null != g) I("handleMouseEnter", g, e);
            },
            [I, g],
          );
        return (
          i.useEffect(() => {
            let e = (e) => {
              if (null != g) (h.current = !1), I("handleMouseUp", g, e);
            };
            return (
              window.addEventListener("mouseup", e),
              () => window.removeEventListener("mouseup", e)
            );
          }, [I, g]),
          {
            handleClick: i.useCallback(
              (e) => {
                f && null != g && e.stopPropagation();
              },
              [g, f],
            ),
            handleMouseDown: x,
            handleMouseEnter: b,
            handleMouseMove: _,
            handleMouseUp: C,
          }
        );
      }
    },
    610947: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return v;
        },
      }),
        n(653041);
      var i = n(192379),
        l = n(846519),
        r = n(692547),
        a = n(481060),
        s = n(220082),
        o = n(979651),
        c = n(125268),
        u = n(673125),
        d = n(984063),
        m = n(88315),
        f = n(262433),
        p = n(400321),
        h = n(813900);
      let g = 1e3 / 60;
      function v(e, t, n, v) {
        let S = (0, a.useToken)(r.Z.unsafe_rawColors.BRAND_500).hex(),
          I = (0, a.useToken)(r.Z.unsafe_rawColors.BLACK_500).hex(),
          x = (0, a.useToken)(r.Z.unsafe_rawColors.WHITE_500).hex(),
          _ = i.useRef({}),
          C = i.useRef(new l.Xp()),
          b = i.useCallback(
            (t) => {
              let n = u.Z.getDrawables(t);
              (0, m.UN)(e),
                !(function (e) {
                  let {
                    canvasRef: t,
                    drawables: n,
                    fallbackColor: i,
                    linesDrawnAt: l,
                    streamerId: r,
                    channelId: a,
                    outlineColorDark: s,
                    outlineColorLight: u,
                  } = e;
                  if (0 === n.length) return;
                  let m = t.current;
                  if (null == m) return;
                  let h = m.getContext("2d");
                  if (null == h) return;
                  let { width: g, height: v } = m.getBoundingClientRect(),
                    S = [];
                  n.forEach((e) => {
                    if (!(null != o.Z.getVoiceStateForChannel(a, e.userId))) {
                      S.push(e);
                      return;
                    }
                    !(function (e) {
                      let {
                        drawable: t,
                        context: n,
                        canvasWidth: i,
                        canvasHeight: l,
                        fallbackColor: r,
                        outlineColorDark: a,
                        outlineColorLight: s,
                        linesDrawnAt: o,
                        streamerId: c,
                        deadDrawables: u,
                      } = e;
                      switch (t.type) {
                        case d.W.LINE:
                          return (0, p.Z)({
                            line: t,
                            context: n,
                            canvasWidth: i,
                            canvasHeight: l,
                            fallbackColor: r,
                            outlineColorDark: a,
                            outlineColorLight: s,
                            linesDrawnAt: o,
                            deadDrawables: u,
                          });
                        case d.W.EMOJI_HOSE:
                          return (0, f.Z)({
                            emojiHose: t,
                            context: n,
                            canvasWidth: i,
                            canvasHeight: l,
                            fallbackColor: r,
                            outlineColorDark: a,
                            outlineColorLight: s,
                            streamerId: c,
                            deadDrawables: u,
                          });
                      }
                    })({
                      drawable: e,
                      context: h,
                      canvasWidth: g,
                      canvasHeight: v,
                      fallbackColor: i,
                      outlineColorDark: s,
                      outlineColorLight: u,
                      linesDrawnAt: l,
                      deadDrawables: S,
                      streamerId: r,
                    });
                  }),
                    S.length > 0 && (0, c.fW)(S, r);
                })({
                  canvasRef: e,
                  drawables: n,
                  fallbackColor: S,
                  linesDrawnAt: _,
                  streamerId: t,
                  outlineColorDark: I,
                  outlineColorLight: x,
                  channelId: v,
                });
            },
            [e, v, S, I, x],
          );
        i.useEffect(() => {
          let t = new ResizeObserver(() => {
            let t = e.current;
            if (null == t) return;
            let { width: i, height: l } = t.getBoundingClientRect();
            (t.width = i * window.devicePixelRatio),
              (t.height = l * window.devicePixelRatio),
              b(n);
          });
          return (
            null != e.current && t.observe(e.current), () => t.disconnect()
          );
        }, [e, b, n]);
        let E = i.useCallback(() => {
          let t = u.Z.getDrawables(n),
            i = f.U.getState().particles,
            l = t.length > 0 || Object.keys(i).length > 0;
          l &&
            null == C.current._ref &&
            (null == C.current._ref
              ? (b(n), C.current.start(g, () => b(n)))
              : !l &&
                null != C.current._ref &&
                (C.current.stop(), (0, m.UN)(e)));
        }, [e, b, n]);
        i.useEffect(() => {
          let e = C.current;
          return (
            u.Z.addChangeListener(E),
            E(),
            (0, s.vM)(t.getAvatarURL(null, h.Ks)),
            () => {
              u.Z.removeChangeListener(E), e.stop();
            }
          );
        });
      }
    },
    590076: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(512722),
        a = n.n(r),
        s = n(399606),
        o = n(618158),
        c = n(594174),
        u = n(822183),
        d = n(364125),
        m = n(610947),
        f = n(848212);
      function p(e) {
        let { focused: t, channelId: n, streamerId: r, stream: u } = e,
          p = l.useRef(null),
          h = (0, s.e7)([c.default], () => c.default.getCurrentUser());
        a()(null != h, "user cannot be null"), (0, m.Z)(p, h, r, n);
        let {
          handleClick: g,
          handleMouseDown: v,
          handleMouseEnter: S,
          handleMouseMove: I,
          handleMouseUp: x,
        } = (0, d.Z)({
          user: h,
          channelId: n,
          streamerId: r,
          stream: u,
          focused: t,
          canvas: p.current,
        });
        return (0, i.jsx)(o.Z, {
          children: (0, i.jsx)("canvas", {
            ref: p,
            onClick: g,
            onMouseDown: v,
            onMouseEnter: S,
            onMouseMove: I,
            onMouseUp: x,
            className: f.sharedCanvas,
          }),
        });
      }
      function h(e) {
        let { isSharedCanvasEnabled: t } = u.Z.useExperiment(
          { guildId: e.guildId, location: "d0de1c_1" },
          { autoTrackExposure: !0 },
        );
        return !t || e.hasScreenMessage ? null : (0, i.jsx)(p, { ...e });
      }
    },
    246841: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(395361),
        a = n(733597),
        s = n(629257);
      function o(e) {
        let {
            activity: t,
            user: n,
            source: o,
            className: c,
            size: u,
            look: d,
            color: m,
            fullWidth: f,
            onAction: p,
          } = e,
          {
            label: h,
            tooltip: g,
            loading: v,
            disabled: S,
            onClick: I,
          } = (0, a.Ih)(t, n, o),
          x = () => {
            null == p || p(), I();
          };
        return (0, i.jsx)(l.Tooltip, {
          text: g,
          children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, i.jsxs)(l.Button, {
              className: c,
              innerClassName: s.playButtonInner,
              size: u,
              look: d,
              color: m,
              fullWidth: f,
              onClick: x,
              onMouseEnter: t,
              onMouseLeave: n,
              disabled: S,
              submitting: v,
              children: [(0, i.jsx)(r.Z, { width: 16, height: 16 }), h],
            });
          },
        });
      }
    },
    557711: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(481060),
        s = n(5192),
        o = n(733597),
        c = n(629257);
      function u(e) {
        let {
            activity: t,
            user: n,
            channelId: l,
            guildId: u,
            source: d,
            size: m,
            look: f,
            color: p,
            className: h,
            onAction: g,
          } = e,
          {
            tooltip: v,
            loading: S,
            disabled: I,
            onClick: x,
          } = (0, o.Fe)(t, n, d, s.ZP.getNickname(u, l, n)),
          _ = () => {
            null == g || g(), x();
          };
        return (0, i.jsx)(a.Tooltip, {
          text: v,
          children: (e) => {
            let { onMouseEnter: n, onMouseLeave: l } = e;
            return (0, i.jsx)(a.Button, {
              size: m,
              className: r()(c.syncButton, h),
              innerClassName: c.syncButtonInner,
              look: f,
              color: p,
              onClick: _,
              onMouseEnter: n,
              onMouseLeave: l,
              disabled: I,
              submitting: S,
              "aria-label": null != v ? v : t.name,
              children: (0, i.jsx)(a.UserPlayIcon, {
                size: "xs",
                color: "currentColor",
              }),
            });
          },
        });
      }
    },
    453925: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        a = n(846027),
        s = n(131951),
        o = n(36703),
        c = n(388032);
      function u(e) {
        let t = (0, l.e7)([s.Z], () => (0, o.P)(s.Z.getInputVolume()));
        return (0, i.jsx)(r.MenuControlItem, {
          id: "input",
          label: c.intl.string(c.t.OX2Bnp),
          control: (n, l) =>
            (0, i.jsx)(r.MenuSliderControl, {
              ...n,
              ref: l,
              value: t,
              onChange: (t) =>
                a.Z.setInputVolume((0, o.A)(t), { analyticsLocations: e }),
              "aria-label": c.intl.string(c.t.OX2Bnp),
            }),
        });
      }
    },
    821564: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        a = n(846027),
        s = n(131951),
        o = n(358085),
        c = n(981631),
        u = n(388032);
      function d(e) {
        let t = !o.isPlatformEmbedded,
          n = (0, l.e7)([s.Z], () => s.Z.getMode()),
          d = (t, l) =>
            (0, i.jsx)(
              r.MenuRadioItem,
              {
                id: t,
                group: "input-modes",
                label: l,
                checked: n === t,
                action: () =>
                  a.Z.setMode(t, void 0, void 0, { analyticsLocations: e }),
              },
              t,
            );
        return [
          d(c.pM4.VOICE_ACTIVITY, u.intl.string(u.t.cHCEOD)),
          d(
            c.pM4.PUSH_TO_TALK,
            t ? u.intl.string(u.t["1AINrK"]) : u.intl.string(u.t.Q8gkVF),
          ),
        ];
      }
    },
    632304: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        a = n(846027),
        s = n(131951),
        o = n(36703),
        c = n(358085),
        u = n(388032);
      function d(e) {
        let t = (0, l.e7)([s.Z], () => (0, o.P)(s.Z.getOutputVolume()));
        return (0, i.jsx)(r.MenuControlItem, {
          id: "output",
          label: u.intl.string(u.t.eATD2N),
          control: (n, l) =>
            (0, i.jsx)(r.MenuSliderControl, {
              ...n,
              ref: l,
              value: t,
              maxValue: c.isPlatformEmbedded ? 200 : 100,
              onChange: (t) =>
                a.Z.setOutputVolume((0, o.A)(t), { analyticsLocations: e }),
              "aria-label": u.intl.string(u.t.eATD2N),
            }),
        });
      }
    },
    584729: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(271383),
        l = n(5192),
        r = n(354459),
        a = n(388032);
      function s(e, t, n) {
        var s, o;
        if (t.type === r.fO.ACTIVITY)
          return null !== (o = null == n ? void 0 : n.name) && void 0 !== o
            ? o
            : null;
        let c = i.ZP.isGuestOrLurker(
          e.guild_id,
          null === (s = t.user) || void 0 === s ? void 0 : s.id,
        );
        return (
          l.ZP.getName(e.getGuildId(), e.id, t.user) +
          (c ? " ".concat(a.intl.string(a.t["pFO/Pj"])) : "")
        );
      }
    },
    44136: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZP: function () {
          return l;
        },
      }),
        n(442837),
        n(314897),
        n(131951);
      var i = n(354459);
      function l(e) {
        var t, n;
        return (
          e.type !== i.fO.ACTIVITY &&
          e.type !== i.fO.PRESENCE_EMBEDDED_ACTIVITY &&
          ((0, i._5)(e)
            ? null != e.streamId
            : null !==
                (n =
                  null === (t = e.voiceState) || void 0 === t
                    ? void 0
                    : t.selfVideo) &&
              void 0 !== n &&
              n)
        );
      }
    },
    334374: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(47120),
        n(571269),
        n(298267);
      var i = n(200651),
        l = n(192379),
        r = n(414910),
        a = n(226961),
        s = n(284902);
      function o(e) {
        let { currentUserId: t, participant: n } = e,
          o = (0, r.Z)(n.type),
          [c, u] = l.useState(),
          [d, m] = l.useState(),
          [f, p] = l.useState(),
          h = n.id.split(":").at(-1),
          g = t === h,
          v = l.useCallback((e, t, n) => {
            var i, l, r;
            let s = n ? a.ZP.getOutboundStats(t) : a.ZP.getInboundStats(e, t);
            u(
              null !== (i = null == s ? void 0 : s.codec) && void 0 !== i
                ? i
                : "unknown",
            ),
              m(
                void 0 === (l = null == s ? void 0 : s.resolution) ||
                  (0 === l.width && 0 === l.height)
                  ? "unknown"
                  : l.width + " x " + l.height,
              ),
              p(
                (null == s ? void 0 : s.bitrateEstimate) !== void 0
                  ? ((r = s.bitrateEstimate),
                    "".concat((r / 1e3).toFixed(2), " Kbps"))
                  : "unknown",
              );
          }, []);
        return (
          l.useEffect(() => {
            let e = () => v(h, o, g);
            e();
            let t = setInterval(e, 1e3);
            return () => clearInterval(t);
          }, [g, h, o, v]),
          (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("div", {
              className: s.streamInfoContainer,
              children: [
                (0, i.jsx)("div", {
                  children: (0, i.jsx)("strong", { children: "Stream Info" }),
                }),
                (0, i.jsxs)("div", {
                  className: s.infoRow,
                  children: [
                    (0, i.jsx)("span", { children: "Video Codec: " }),
                    (0, i.jsx)("strong", { children: c }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: s.infoRow,
                  children: [
                    (0, i.jsx)("span", { children: "Resolution: " }),
                    (0, i.jsx)("strong", { children: d }),
                  ],
                }),
                g &&
                  (0, i.jsxs)("div", {
                    className: s.infoRow,
                    children: [
                      (0, i.jsx)("span", { children: "Bitrate Estimate: " }),
                      (0, i.jsx)("strong", { children: f }),
                    ],
                  }),
              ],
            }),
          })
        );
      }
    },
    849171: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ix: function () {
          return L;
        },
        OV: function () {
          return V;
        },
        V_: function () {
          return D;
        },
        Ym: function () {
          return U;
        },
        ZP: function () {
          return B;
        },
        ac: function () {
          return F;
        },
        bn: function () {
          return k;
        },
        nR: function () {
          return i;
        },
      }),
        n(47120);
      var i,
        l,
        r = n(200651),
        a = n(192379),
        s = n(120356),
        o = n.n(s),
        c = n(442837),
        u = n(481060),
        d = n(2052),
        m = n(317381),
        f = n(638880),
        p = n(413458),
        h = n(16609),
        g = n(527805),
        v = n(716600),
        S = n(778569),
        I = n(563218),
        x = n(318891),
        _ = n(884338),
        C = n(719296),
        b = n(958185),
        E = n(100527),
        y = n(906732),
        Z = n(890280),
        T = n(835473),
        N = n(522474),
        A = n(314897),
        j = n(819640),
        w = n(594174),
        P = n(823379),
        R = n(5192),
        O = n(388032),
        M = n(262745);
      ((l = i || (i = {}))[(l.SMALL = 0)] = "SMALL"),
        (l[(l.MEDIUM = 1)] = "MEDIUM"),
        (l[(l.LARGE = 2)] = "LARGE");
      let k = 1024,
        L = ["embedded_background"];
      function D(e) {
        return e > 400 ? 2 : e > 300 ? 1 : 0;
      }
      function U(e) {
        return e > 400
          ? [u.AvatarSizes.SIZE_56, 56]
          : e > 300
            ? [u.AvatarSizes.SIZE_32, 32]
            : [u.AvatarSizes.SIZE_24, 24];
      }
      function V(e) {
        let { avatarSize: t, guildId: n, channelId: i, users: l } = e,
          a = null != t ? t : u.AvatarSizes.SIZE_32,
          s = (0, u.getAvatarSize)(a);
        return (0, r.jsx)(_.Z, {
          size: s,
          guildId: n,
          users: l,
          max: 4,
          renderUser: (e) => {
            if (null == e) return null;
            let t = R.ZP.getName(n, i, e);
            return (0, r.jsx)(
              u.TooltipContainer,
              {
                text: t,
                color: u.TooltipColors.GREY,
                children: (0, r.jsx)(
                  "img",
                  { src: e.getAvatarURL(n, s), alt: t, className: M.avatar },
                  e.id,
                ),
              },
              e.id,
            );
          },
        });
      }
      function F(e) {
        switch (e) {
          case 2:
            return u.Button.Sizes.LARGE;
          case 1:
            return u.Button.Sizes.MEDIUM;
          case 0:
            return u.Button.Sizes.SMALL;
        }
      }
      function z(e) {
        var t, n;
        let { participants: i, application: l, channel: s, width: h } = e,
          v = D(h),
          [S] = U(h),
          I = (0, c.Wu)([w.default, A.default], () =>
            Array.from(i)
              .map((e) =>
                (0, p.J)(e, A.default) ? null : w.default.getUser(e.userId),
              )
              .filter(P.lm),
          ),
          x = (0, c.e7)([m.ZP], () =>
            m.ZP.getEmbeddedActivitiesForChannel(s.id).find(
              (e) => e.applicationId === l.id,
            ),
          ),
          { analyticsLocations: _ } = (0, y.ZP)(),
          C = (0, d.O)(),
          b = R.ZP.getName(s.getGuildId(), s.id, null == I ? void 0 : I[0]),
          E =
            (0, g.s5)({
              userId:
                null === (t = w.default.getCurrentUser()) || void 0 === t
                  ? void 0
                  : t.id,
              channelId: s.id,
              application: l,
            }) === g.Fw.CAN_JOIN,
          T = null !== (n = s.getGuildId()) && void 0 !== n ? n : void 0,
          N = a.useId(),
          j = l.id,
          k = a.useMemo(() => ({ channel: s, type: "channel" }), [s]),
          { submitting: L } = (0, Z.Z)({
            applicationId: j,
            context: k,
            launchingComponentId: N,
          });
        return (0, r.jsxs)("div", {
          className: M.splash,
          children: [
            (0, r.jsx)(V, {
              avatarSize: S,
              guildId: T,
              channelId: s.id,
              users: I,
            }),
            (0, r.jsx)(u.Text, {
              className: o()(M.subheader, {
                [M.small]: 0 === v,
                [M.medium]: 1 === v,
              }),
              variant: "text-sm/normal",
              children:
                I.length > 1
                  ? O.intl.formatToPlainString(O.t.cpe6CA, {
                      username: b,
                      count: I.length - 1,
                    })
                  : O.intl.formatToPlainString(O.t["7Uuia2"], { username: b }),
            }),
            (0, r.jsx)(u.Text, {
              className: o()(M.header, {
                [M.small]: 0 === v,
                [M.medium]: 1 === v,
              }),
              variant: "text-sm/normal",
              children: l.name,
            }),
            (0, r.jsx)("div", {
              className: M.buttons,
              children: E
                ? (0, r.jsx)(u.Button, {
                    onClick: function (e) {
                      if ((e.stopPropagation(), null != x))
                        (0, f.Z)({
                          applicationId: x.applicationId,
                          activityChannelId: s.id,
                          locationObject: C.location,
                          analyticsLocations: _,
                          componentId: N,
                        });
                    },
                    submitting: L,
                    size: F(v),
                    className: M.button,
                    look: u.ButtonLooks.FILLED,
                    color: u.Button.Colors.WHITE,
                    children: O.intl.string(O.t["4i2vj4"]),
                  })
                : null,
            }),
          ],
        });
      }
      function B(e) {
        let {
            participant: t,
            width: n,
            selected: i,
            interactible: l,
            channel: s,
          } = e,
          { analyticsLocations: o } = (0, y.ZP)(E.Z.ACTIVITY_TILE),
          { applicationId: u } = t,
          d = (0, v.Z)(),
          m =
            null != d && (0, h.p)(d.location) === s.id && d.applicationId === u,
          [f] = (0, T.Z)([u]),
          { url: p } = (0, S.Z)({ applicationId: u, names: L, size: k }),
          g = !i && m,
          _ = !m,
          Z = !m && !i,
          A = (0, c.e7)([j.Z, N.Z], () =>
            (0, b.Z)({ LayerStore: j.Z, PopoutWindowStore: N.Z }),
          );
        return (
          a.useEffect(() => {
            if (g && null != d && !A) {
              let e = (0, C.Z)(d.location.id, d.applicationId);
              (0, x.jy)(e);
            }
          }, [g, d, A]),
          (0, r.jsx)(y.Gt, {
            value: o,
            children: (0, r.jsx)("div", {
              className: M.container,
              children: (0, r.jsxs)(r.Fragment, {
                children: [
                  g &&
                    null != d &&
                    (0, r.jsx)(I.Z, {
                      className: M.iframe,
                      embedId: (0, C.Z)(d.location.id, u),
                    }),
                  _ && null != f && null != p && "" !== p
                    ? (0, r.jsx)("img", {
                        className: M.splashImage,
                        alt: f.name,
                        src: p,
                      })
                    : null,
                  Z &&
                    null != f &&
                    (0, r.jsx)(z, {
                      width: n,
                      channel: s,
                      participants: t.participants,
                      application: f,
                    }),
                  l || _
                    ? null
                    : (0, r.jsx)("div", { className: M.clickShield }),
                ],
              }),
            }),
          })
        );
      }
    },
    27457: function (e, t, n) {
      "use strict";
      n.d(t, {
        BP: function () {
          return e_;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        s = n(848246),
        o = n(442837),
        c = n(692547),
        u = n(481060),
        d = n(846027),
        m = n(410575),
        f = n(607070),
        p = n(812206),
        h = n(835473),
        g = n(682901),
        v = n(414910),
        S = n(415635),
        I = n(578976),
        x = n(925329),
        _ = n(649739),
        C = n(574176),
        b = n(833858),
        E = n(223135),
        y = n(37091),
        Z = n(6572),
        T = n(352978),
        N = n(936847),
        A = n(512384),
        j = n(33316),
        w = n(576645),
        P = n(6242),
        R = n(757692),
        O = n(386542),
        M = n(933843),
        k = n(746599),
        L = n(231664),
        D = n(614011),
        U = n(210975),
        V = n(695346),
        F = n(937995),
        z = n(456631),
        B = n(274459),
        W = n(314897),
        G = n(857192),
        H = n(77498),
        Y = n(131951),
        q = n(158776),
        J = n(594174),
        X = n(979651),
        K = n(374129),
        Q = n(639351),
        $ = n(74538),
        ee = n(584729),
        et = n(334374),
        en = n(849171),
        ei = n(607187),
        el = n(624834),
        er = n(833519),
        ea = n(462061),
        es = n(623825),
        eo = n(839662),
        ec = n(981631),
        eu = n(354459),
        ed = n(37113),
        em = n(524484),
        ef = n(65154),
        ep = n(388032),
        eh = n(995544);
      let eg = [eu.fO.ACTIVITY, eu.fO.PRESENCE_EMBEDDED_ACTIVITY],
        ev = l.memo((e) => {
          var t, n, r, c, x;
          let {
              participant: b,
              onDoubleClick: E,
              onContextMenu: K,
              onClick: Q,
              onMouseDown: es,
              onKeyDown: ev,
              className: eS,
              style: e_,
              containerStyle: eC,
              channel: eb,
              width: eE,
              inPopout: ey,
              onVideoResize: eZ,
              inCall: eT = !1,
              selected: eN = !1,
              noBorder: eA = !1,
              noVideoRender: ej = !1,
              focused: ew = !1,
              blocked: eP = !1,
              ignored: eR = !1,
              fit: eO = T.L.CONTAIN,
              paused: eM = !1,
              pulseSpeakingIndicator: ek = !1,
              forceIdle: eL = !1,
              inOverlayPopout: eD = !1,
            } = e,
            eU = l.useContext(F.h9) || eL,
            [eV, eF] = l.useState(!1),
            ez = V.Sb.useSetting(),
            eB = (0, o.e7)(
              [G.default],
              () => G.default.isStreamInfoOverlayEnabled,
            ),
            [eW, eG] = l.useState(!1),
            eH = (0, o.e7)([W.default], () => W.default.getId()),
            eY = (0, o.e7)([J.default], () => J.default.getCurrentUser()),
            eq =
              b.type === eu.fO.ACTIVITY
                ? null
                : null === (t = b.user) || void 0 === t
                  ? void 0
                  : t.id,
            [eJ] = (0, h.Z)(b.type === eu.fO.ACTIVITY ? [b.applicationId] : []),
            eX = (0, o.e7)([y.Z], () => y.Z.getEnabled()),
            eK = (0, o.e7)(
              [Y.Z],
              () =>
                null != eq && Y.Z.isLocalVideoDisabled(eq, (0, v.Z)(b.type)),
              [eq, b.type],
            ),
            eQ = (0, o.e7)(
              [Y.Z],
              () =>
                null != eq
                  ? Y.Z.getVideoToggleState(eq, (0, v.Z)(b.type))
                  : ec.ZUi.NONE,
              [eq, b.type],
            ),
            e$ = eQ === ec.ZUi.AUTO_PROBING,
            { speaking: e0, ringing: e1, hasVideo: e2 } = (0, eo.Z)(b, eH),
            e3 = (function (e, t, n) {
              var i, l, r, a;
              let s = t.type !== eu.fO.ACTIVITY ? t.user.id : t.applicationId,
                c = (0, o.cj)([X.Z], () => {
                  var e, t, i;
                  let l = X.Z.getVoiceState(n, s);
                  return {
                    muted:
                      null !== (e = null == l ? void 0 : l.mute) &&
                      void 0 !== e &&
                      e,
                    deafened:
                      null !== (t = null == l ? void 0 : l.deaf) &&
                      void 0 !== t &&
                      t,
                    suppressed:
                      null !== (i = null == l ? void 0 : l.suppress) &&
                      void 0 !== i &&
                      i,
                    voiceChannelId: null == l ? void 0 : l.channelId,
                  };
                }),
                u = (0, o.cj)(
                  [Y.Z],
                  () => {
                    let n = (0, v.Z)(t.type);
                    return e === s
                      ? { muted: !1, deafened: !1 }
                      : {
                          muted: Y.Z.isLocalMute(s, n),
                          localVideoDisabled: Y.Z.isLocalVideoDisabled(s, n),
                          localVideoAutoDisabled: Y.Z.isLocalVideoAutoDisabled(
                            s,
                            n,
                          ),
                        };
                  },
                  [e, t.type, s],
                );
              return {
                serverMuted: c.muted,
                serverDeafened: c.deafened,
                suppressed: c.suppressed,
                localMuted: u.muted,
                muted:
                  null !==
                    (r =
                      t.type === eu.fO.USER &&
                      (null === (i = t.voiceState) || void 0 === i
                        ? void 0
                        : i.isVoiceMuted())) &&
                  void 0 !== r &&
                  r,
                deafened:
                  null !==
                    (a =
                      t.type === eu.fO.USER &&
                      (null === (l = t.voiceState) || void 0 === l
                        ? void 0
                        : l.isVoiceDeafened())) &&
                  void 0 !== a &&
                  a,
              };
            })(eH, b, eb.getGuildId()),
            e4 = b.type === eu.fO.STREAM && eq === eH;
          l.useEffect(() => {
            if (
              e4 &&
              !$.ZP.isPremium(eY) &&
              null != eb.hdStreamingUntil &&
              new Date(eb.hdStreamingUntil) > new Date()
            ) {
              let e = setTimeout(
                () => {
                  let e = Y.Z.getGoLiveSource(),
                    t = (0, I.s)(ed.LY.RESOLUTION_720, ed.ws.FPS_30, e);
                  d.Z.setGoLiveSource(t);
                },
                new Date(eb.hdStreamingUntil).getTime() - Date.now(),
              );
              return () => clearTimeout(e);
            }
          });
          let e7 = (0, M.So)(s.q.STREAM_HIGH_QUALITY),
            { hqStreamingState: e9 } = (0, O.k)(s.q.STREAM_HIGH_QUALITY),
            e6 = (0, L.Z)(),
            e8 = e7 && e4 && null != e6,
            e5 = (0, R.o)(b, eY),
            te = (0, P.lL)("CallTile", !0, eY, e5),
            tt = (0, o.e7)([z.Z], () =>
              b.type === eu.fO.USER && null != eq
                ? z.Z.getEffectForUserId(eq)
                : null,
            ),
            tn = (0, o.e7)([X.Z], () =>
              X.Z.getVoicePlatformForChannel(eb.id, null != eq ? eq : ec.lds),
            ),
            { enabled: ti } = (0, g.Z)({ location: "CallTile" }),
            { enableHangStatus: tl } = C.n.useExperiment({
              guildId: eb.guild_id,
              location: "VoiceUsers",
            }),
            { showGameIcon: tr } = _.ZP.useExperiment(
              { location: "voice_users" },
              { autoTrackExposure: !1 },
            ),
            ta = tr || tl,
            { hangStatusActivity: ts, gameActivity: to } = (0, o.cj)(
              [q.Z],
              () => ({
                hangStatusActivity:
                  tl && null != eq
                    ? q.Z.findActivity(eq, (e) => e.type === ec.IIU.HANG_STATUS)
                    : null,
                gameActivity:
                  ta && null != eq
                    ? q.Z.findActivity(
                        eq,
                        (e) =>
                          null != e.application_id && e.type === ec.IIU.PLAYING,
                      )
                    : null,
              }),
              [tl, eq, ta],
            ),
            tc = (0, o.e7)([H.Z], () =>
              (null == to ? void 0 : to.application_id) != null
                ? H.Z.getDetectableGame(to.application_id)
                : null,
            ),
            tu = (0, o.e7)([p.Z], () =>
              null != tc && (null == to ? void 0 : to.application_id) != null
                ? p.Z.getApplication(null == to ? void 0 : to.application_id)
                : void 0,
            ),
            td = (0, U.wV)({
              userId: eq,
              channelId: eb.id,
              location: "CallTile",
            }),
            tm = (0, U.zU)({
              streamKey: b.type === eu.fO.STREAM ? b.id : null,
              channelId: eb.id,
              location: "CallTile",
            }),
            tf = l.useMemo(
              () =>
                b.type === eu.fO.STREAM
                  ? null != tm && tm
                  : b.type === eu.fO.USER && null != td && td,
              [tm, td, b.type],
            );
          l.useEffect(() => {
            eF(ew);
          }, [ew]);
          let [tp, th] = l.useState(!1),
            tg = l.useCallback(() => {
              !f.Z.useReducedMotion && th(!0);
            }, []);
          (0, w.J)(eb, tg);
          let tv = l.useCallback(() => {
              null != eq && d.Z.toggleLocalMute(eq, ef.Yn.STREAM);
            }, [eq]),
            tS = l.useCallback(() => {
              (0, k.hP)();
            }, []),
            tI = l.useCallback(
              (e) => {
                null == Q || Q(b, e);
              },
              [Q, b],
            ),
            tx = l.useCallback(
              (e) => {
                null == E || E(b, e);
              },
              [E, b],
            ),
            t_ = l.useCallback(
              (e) => {
                null == K || K(b, e);
              },
              [K, b],
            ),
            tC = eU;
          e8 && (tC = !1);
          let tb = null,
            tE = null,
            ty = "";
          switch (b.type) {
            case eu.fO.STREAM:
              (tb = (0, i.jsx)(er.Z, {
                participant: b,
                selected: eN,
                width: eE,
                fit: eO,
                onVideoResize: eZ,
                paused: eM,
                inPopout: ey,
                focused: ew,
                inOverlayPopout: eD,
              })),
                (tE = (0, i.jsx)(er._, {
                  participant: b,
                  selected: eN,
                  width: eE,
                  focused: ew,
                  idle: tC,
                  premiumIndicator: e8 || te.enabled,
                })),
                (ty = ep.intl.formatToPlainString(ep.t.gHPz3d, {
                  streamerName: b.user.username,
                }));
              break;
            case eu.fO.USER:
              (tb = (0, i.jsx)(ea.Z, {
                channel: eb,
                inCall: eT,
                participant: b,
                fit: eO,
                onVideoResize: eZ,
                paused: eM,
                selected: eN,
                width: eE,
                blocked: eP,
                ignored: eR,
                noVideoRender: ej || e$,
                pulseSpeakingIndicator: ek,
                inOverlayPopout: eD,
              })),
                (tE = (0, i.jsx)(ea.T, {
                  userId: b.user.id,
                  channelId: eb.id,
                })),
                (ty = ep.intl.formatToPlainString(ep.t["iC/x/f"], {
                  username: b.user.username,
                }));
              break;
            case eu.fO.ACTIVITY:
              (tb = (0, i.jsx)(en.ZP, {
                interactible: ew,
                participant: b,
                selected: eN,
                channel: eb,
                width: eE,
              })),
                (ty = ep.intl.formatToPlainString(ep.t.YCvOsL, {
                  activityName: null == eJ ? void 0 : eJ.name,
                }));
              break;
            case eu.fO.PRESENCE_EMBEDDED_ACTIVITY:
              tb = (0, i.jsx)(el.Z, {
                participant: b,
                width: eE,
                channelId: eb.id,
              });
              break;
            case eu.fO.HIDDEN_STREAM:
              tb = (0, i.jsx)(er.Z, {
                participant: b,
                selected: eN,
                width: eE,
                fit: eO,
                onVideoResize: eZ,
                paused: eM,
                inPopout: ey,
                focused: ew,
                inOverlayPopout: eD,
              });
          }
          let tZ = l.useRef(null),
            tT = b.type === eu.fO.STREAM ? u.ScreenIcon : u.VideoIcon,
            tN = ti ? eI : ex;
          return (0, i.jsx)(m.Z, {
            section: ec.jXE.VOICE_CHANNEL_TILE,
            children: (0, i.jsxs)("div", {
              className: a()(eh.wrapper, { [eh.ringing]: e1 }, eS),
              style: eC,
              onMouseEnter: () => {
                eG(!0);
              },
              onMouseLeave: () => {
                eG(!1);
              },
              children: [
                tp &&
                  b.type === eu.fO.STREAM &&
                  (0, i.jsx)(j.Z, {
                    baseTileRef: tZ.current,
                    cleanup: () => th(!1),
                  }),
                (0, i.jsxs)(A.Z, {
                  shakeLocation: em.oZ.VOICE_USER,
                  isShaking: e0,
                  className: eh.tile,
                  children: [
                    (0, i.jsx)(ei.Z, {
                      ref: tZ,
                      className: a()(eh.tile, {
                        [eh.noBorder]: eA,
                        [eh.noInteraction]: null == Q,
                        [eh.idle]: eU,
                      }),
                      noBorder: eA,
                      style: e_,
                      participantUserId: eq,
                      children: (0, i.jsxs)(u.ClickableContainer, {
                        "aria-label": ty,
                        className: eh.tileChild,
                        onDoubleClick: tx,
                        onContextMenu: t_,
                        onClick: tI,
                        onMouseDown: es,
                        onKeyDown: ev,
                        focusProps: { offset: 1 },
                        children: [
                          null != tt && null != eq
                            ? (0, i.jsx)(B.Z, {
                                voiceChannelEffect: tt,
                                onComplete: () => (0, z.H)(eq),
                                userId: eq,
                              })
                            : null,
                          b.type === eu.fO.USER
                            ? (0, i.jsx)("div", {
                                className: eh.voiceChannelEffectsContainer,
                                children: (0, i.jsx)(S.Z, {
                                  userId: eq,
                                  channelId: eb.id,
                                  guildId: eb.getGuildId(),
                                  containerDimensions: {
                                    width:
                                      null !==
                                        (c =
                                          null == tZ
                                            ? void 0
                                            : null === (n = tZ.current) ||
                                                void 0 === n
                                              ? void 0
                                              : n.clientWidth) && void 0 !== c
                                        ? c
                                        : 0,
                                    height:
                                      null !==
                                        (x =
                                          null == tZ
                                            ? void 0
                                            : null === (r = tZ.current) ||
                                                void 0 === r
                                              ? void 0
                                              : r.clientHeight) && void 0 !== x
                                        ? x
                                        : 0,
                                  },
                                }),
                              })
                            : null,
                          tb,
                          e8
                            ? (0, i.jsx)(D.W, {
                                onPlayed: tS,
                                played: e9.hqStreamingFrameAnimationPlayed,
                              })
                            : null,
                          eA
                            ? null
                            : (0, i.jsx)("div", {
                                className: eh.indicators,
                                children: tE,
                              }),
                          eN
                            ? (0, i.jsx)("div", {
                                className: eh.selectedScreen,
                                children: (0, i.jsx)(tT, {
                                  size: "md",
                                  color: "currentColor",
                                  className: eh.selectedIcon,
                                }),
                              })
                            : null,
                          eg.includes(b.type)
                            ? null
                            : (0, i.jsx)(tN, {
                                focused: ew,
                                width: eE,
                                inCall: eT,
                                participantType: b.type,
                                hasVideo: null != e2 && e2,
                                ...e3,
                                idle: eU,
                                platform: tn,
                                title: (0, ee.Z)(eb, b),
                                blocked: eP,
                                ignored: eR,
                                localVideoDisabled: eK,
                                videoToggleState: eQ,
                                hideAudioIcon: e4,
                                onContextMenu: t_,
                                onToggleMute: tv,
                                participantUserId: eq,
                                hangStatusActivity: ts,
                                application: tu,
                                speaking: e0,
                                secureFramesVerified: tf,
                              }),
                          b.type === eu.fO.USER && eX
                            ? (0, i.jsx)(Z.Z, {
                                userId: b.id,
                                channelId: eb.id,
                              })
                            : null,
                          eT && !eA
                            ? (0, i.jsx)("div", {
                                className: a()(eh.border, {
                                  [eh.voiceChannelEffect]: !ew && null != tt,
                                  [eh.speaking]: e0 && !ew,
                                }),
                              })
                            : null,
                        ],
                      }),
                    }),
                    ez &&
                      eB &&
                      eW &&
                      (0, i.jsx)(et.Z, { currentUserId: eH, participant: b }),
                    (0, i.jsx)(N.Z, { isFiring: eV, callTileRef: tZ.current }),
                  ],
                }),
              ],
            }),
          });
        });
      function eS(e) {
        let { participantType: t, platform: n, className: l } = e;
        if (t === eu.fO.STREAM)
          return n === eu.wR.XBOX
            ? (0, i.jsx)(Q.Z, { className: l })
            : (0, i.jsx)(u.ScreenIcon, {
                size: "md",
                color: "currentColor",
                className: l,
              });
        switch (n) {
          case eu.wR.MOBILE:
            return (0, i.jsx)(u.MobilePhoneIcon, {
              size: "xs",
              color: "currentColor",
              className: l,
            });
          case eu.wR.XBOX:
            return (0, i.jsx)(Q.Z, { className: l });
          case eu.wR.PLAYSTATION:
            return (0, i.jsx)(K.Z, { className: l });
          default:
            return null;
        }
      }
      ev.displayName = "CallTile";
      let eI = l.memo((e) => {
        let {
            idle: t,
            title: n,
            width: l,
            videoToggleState: r,
            blocked: s,
            ignored: d,
            participantType: m,
            participantUserId: f,
            platform: p,
            secureFramesVerified: h,
          } = e,
          g = (0, o.e7)(
            [Y.Z],
            () => null != f && Y.Z.isLocalVideoAutoDisabled(f, (0, v.Z)(m)),
            [f, m],
          );
        return (0, i.jsxs)("div", {
          className: eh.overlayContainer,
          children: [
            (0, i.jsx)("div", {
              className: a()(eh.overlayTop, { [eh.small]: l < 195 }),
              children:
                g || r === ec.ZUi.AUTO_PROBING
                  ? t
                    ? (0, i.jsx)("div", {
                        className: eh.status,
                        children: (0, i.jsx)(u.VideoSlashIcon, {
                          size: "md",
                          color: "currentColor",
                        }),
                      })
                    : (0, i.jsxs)("div", {
                        className: a()(eh.overlayTitle, eh.videoDisabledTitle),
                        children: [
                          (0, i.jsx)("div", {
                            className: eh.status,
                            children: (0, i.jsx)(u.VideoSlashIcon, {
                              size: "md",
                              color: "currentColor",
                            }),
                          }),
                          (0, i.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            className: eh.overlayTitleText,
                            children: ep.intl.string(ep.t.m2Hyj4),
                          }),
                        ],
                      })
                  : null,
            }),
            (0, i.jsxs)("div", {
              className: a()(eh.overlayBottom, { [eh.small]: l < 195 }),
              children: [
                (0, i.jsxs)(u.Text, {
                  className: a()(eh.overlayTitle, { [eh.idle]: t && !1 }),
                  color: "none",
                  variant: "text-md/normal",
                  children: [
                    s
                      ? (0, i.jsx)("div", {
                          className: eh.blocked,
                          children: (0, i.jsx)(u.DenyIcon, {
                            size: "lg",
                            className: eh.blockedIcon,
                            color: c.Z.unsafe_rawColors.RED_400.css,
                          }),
                        })
                      : null,
                    d
                      ? (0, i.jsx)("div", {
                          className: eh.ignored,
                          children: (0, i.jsx)(u.EyeSlashIcon, {
                            size: "lg",
                            className: eh.blockedIcon,
                          }),
                        })
                      : null,
                    (0, i.jsx)(eS, {
                      participantType: m,
                      platform: p,
                      className: eh.titleIcon,
                    }),
                    null != n && "" !== n
                      ? (0, i.jsx)("span", {
                          className: eh.overlayTitleText,
                          children: n,
                        })
                      : null,
                    h &&
                      (0, i.jsx)(u.Tooltip, {
                        text: ep.intl.string(ep.t.ZEem6O),
                        children: (e) =>
                          (0, i.jsx)(u.ShieldLockIcon, {
                            ...e,
                            className: eh.secureFramesIcon,
                            size: "xs",
                            color: c.Z.colors.HEADER_PRIMARY,
                            "aria-label": ep.intl.string(ep.t.mR9cf3),
                          }),
                      }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: a()(eh.overlayButtonContainer, {
                    [eh.idle]: t && !1,
                  }),
                  children: (0, i.jsx)(u.Clickable, {
                    className: eh.overlayButton,
                    children: (0, i.jsx)(u.MoreHorizontalIcon, {}),
                  }),
                }),
              ],
            }),
          ],
        });
      });
      eI.displayName = "CallTileOverlayV2";
      let ex = l.memo((e) => {
        let {
            muted: t,
            deafened: n,
            localMuted: l,
            serverMuted: r,
            serverDeafened: s,
            idle: d,
            title: m,
            width: f,
            hasVideo: p,
            inCall: h,
            localVideoDisabled: g,
            videoToggleState: S,
            focused: I,
            blocked: _,
            ignored: C,
            hideAudioIcon: y,
            participantType: Z,
            participantUserId: T,
            onContextMenu: N,
            onToggleMute: A,
            platform: j,
            hangStatusActivity: w,
            application: P,
            speaking: R,
            secureFramesVerified: O,
          } = e,
          M = null,
          k = null,
          L = null,
          D = null,
          U = (0, es.K)(f),
          V = (0, es.N)(f),
          F = (0, o.e7)(
            [Y.Z],
            () => null != T && Y.Z.isLocalVideoAutoDisabled(T, (0, v.Z)(Z)),
            [T, Z],
          ),
          z = (0, u.useRedesignIconContext)().enabled;
        if (!y) {
          if (l && Z === eu.fO.STREAM && p && !I)
            M = (0, i.jsx)(u.Tooltip, {
              text: ep.intl.string(ep.t.YqAjX1),
              children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, i.jsx)(u.Clickable, {
                  ...n,
                  onClick: (e) => {
                    e.stopPropagation(), null == t || t(), A();
                  },
                  className: a()(eh.interactive, eh.toggleMute, eh.status),
                  children: (0, i.jsx)(u.VoiceXIcon, {
                    size: "md",
                    color: "currentColor",
                  }),
                });
              },
            });
          else if (l || Z !== eu.fO.STREAM || !p || U || I) {
            if (z) {
              let e;
              s
                ? (e = u.HeadphonesDenyIcon)
                : r
                  ? (e = u.MicrophoneDenyIcon)
                  : n
                    ? (e = u.HeadphonesSlashIcon)
                    : l
                      ? (e = u.MicrophoneDenyIcon)
                      : t && (e = u.MicrophoneSlashIcon),
                (M =
                  null != e
                    ? (0, i.jsx)(e, { color: c.Z.colors.WHITE })
                    : null);
            } else if (n || t || l) {
              let e = n ? u.HeadphonesSlashIcon : u.MicrophoneSlashIcon;
              M = (0, i.jsx)(e, { color: "currentColor" });
            }
            M =
              null != M
                ? (0, i.jsx)("div", { className: eh.status, children: M })
                : null;
          } else
            M = (0, i.jsx)(u.Tooltip, {
              text: ep.intl.string(ep.t["w4m94+"]),
              children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, i.jsx)(u.Clickable, {
                  ...n,
                  onClick: (e) => {
                    e.stopPropagation(), null == t || t(), A();
                  },
                  className: a()(eh.interactive, eh.toggleMute, eh.status),
                  children: (0, i.jsx)(u.VoiceNormalIcon, {
                    size: "md",
                    color: "currentColor",
                  }),
                });
              },
            });
        }
        return (
          (h && Y.Z.supports(ef.AN.VIDEO)) || !p
            ? h &&
              p &&
              g &&
              !F &&
              (k = (0, i.jsx)(u.VideoSlashIcon, {
                size: "md",
                color: "currentColor",
                colorClass: eh.localMuteStrikethrough,
              }))
            : (k = (0, i.jsx)(u.VideoIcon, {
                size: "md",
                color: "currentColor",
              })),
          Z === eu.fO.STREAM &&
            !I &&
            p &&
            (L = (0, i.jsx)(u.Tooltip, {
              text: ep.intl.string(ep.t["+1H47u"]),
              children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, i.jsx)(u.Clickable, {
                  ...n,
                  onClick: (e) => {
                    e.stopPropagation(), null == t || t(), N(e);
                  },
                  className: a()(eh.status, eh.interactive),
                  children: (0, i.jsx)(u.MoreHorizontalIcon, {
                    size: "md",
                    color: "currentColor",
                  }),
                });
              },
            })),
          Z === eu.fO.USER && null != w
            ? (D = (0, i.jsx)(u.Tooltip, {
                text: (0, b.O8)(w),
                children: (e) =>
                  (0, i.jsx)("div", {
                    ...e,
                    className: a()(eh.hangStatusContainer, {
                      [eh.hangStatusSmall]: f < 500,
                    }),
                    children: (0, i.jsx)(E.Z, {
                      hangStatusActivity: w,
                      className: eh.hangStatusIcon,
                      animate: R,
                    }),
                  }),
              }))
            : Z === eu.fO.USER &&
              null != P &&
              (D = (0, i.jsx)(u.Tooltip, {
                text: ep.intl.formatToPlainString(ep.t.Sq9xJy, {
                  game: P.name,
                }),
                children: (e) =>
                  (0, i.jsx)("div", {
                    ...e,
                    className: a()(eh.hangStatusContainer, {
                      [eh.hangStatusSmall]: f < 500,
                    }),
                    children: (0, i.jsx)(x.Z, {
                      className: eh.hangStatusIcon,
                      game: P,
                      size: x.Z.Sizes.SMALL,
                    }),
                  }),
              })),
          (0, i.jsxs)("div", {
            className: eh.overlayContainer,
            children: [
              (0, i.jsx)("div", {
                className: a()(eh.overlayTop, { [eh.small]: f < 195 }),
                children:
                  F || S === ec.ZUi.AUTO_PROBING
                    ? d
                      ? (0, i.jsx)("div", {
                          className: eh.status,
                          children: (0, i.jsx)(u.VideoSlashIcon, {
                            size: "md",
                            color: "currentColor",
                          }),
                        })
                      : (0, i.jsxs)("div", {
                          className: a()(
                            eh.overlayTitle,
                            eh.videoDisabledTitle,
                          ),
                          children: [
                            (0, i.jsx)("div", {
                              className: eh.status,
                              children: (0, i.jsx)(u.VideoSlashIcon, {
                                size: "md",
                                color: "currentColor",
                              }),
                            }),
                            (0, i.jsx)(u.Text, {
                              variant: "text-sm/normal",
                              className: eh.overlayTitleText,
                              children: ep.intl.string(ep.t.m2Hyj4),
                            }),
                          ],
                        })
                    : null,
              }),
              (0, i.jsxs)("div", {
                className: a()(eh.overlayBottom, { [eh.small]: f < 195 }),
                children: [
                  V
                    ? (0, i.jsx)("div", {})
                    : (0, i.jsxs)(u.Text, {
                        className: a()(eh.overlayTitle, { [eh.idle]: d }),
                        color: "none",
                        variant: "text-md/normal",
                        children: [
                          _
                            ? (0, i.jsx)("div", {
                                className: eh.blocked,
                                children: (0, i.jsx)(u.DenyIcon, {
                                  size: "lg",
                                  className: eh.blockedIcon,
                                  color: c.Z.unsafe_rawColors.RED_400.css,
                                }),
                              })
                            : null,
                          C
                            ? (0, i.jsx)("div", {
                                className: eh.ignored,
                                children: (0, i.jsx)(u.EyeSlashIcon, {
                                  size: "lg",
                                  className: eh.blockedIcon,
                                }),
                              })
                            : null,
                          (0, i.jsx)(eS, {
                            participantType: Z,
                            platform: j,
                            className: eh.titleIcon,
                          }),
                          null != m && "" !== m
                            ? (0, i.jsx)("span", {
                                className: eh.overlayTitleText,
                                children: m,
                              })
                            : null,
                          O &&
                            (0, i.jsx)(u.Tooltip, {
                              text: ep.intl.string(ep.t.ZEem6O),
                              children: (e) =>
                                (0, i.jsx)(u.ShieldLockIcon, {
                                  ...e,
                                  className: eh.secureFramesIcon,
                                  size: "xs",
                                  color: c.Z.colors.HEADER_PRIMARY,
                                  "aria-label": ep.intl.string(ep.t.mR9cf3),
                                }),
                            }),
                        ],
                      }),
                  (0, i.jsxs)("div", {
                    className: eh.statusContainer,
                    children: [
                      null != k &&
                        (0, i.jsx)("div", {
                          className: eh.status,
                          children: k,
                        }),
                      M,
                      L,
                      D,
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      });
      ex.displayName = "CallTileOverlay";
      let e_ = T.L;
      t.ZP = ev;
    },
    796638: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZB: function () {
          return v;
        },
        ZP: function () {
          return S;
        },
        cF: function () {
          return f;
        },
      }),
        n(47120),
        n(653041);
      var i = n(200651),
        l = n(192379),
        r = n(392711),
        a = n(933546),
        s = n(314897),
        o = n(70956),
        c = n(823379),
        u = n(27457),
        d = n(354459),
        m = n(340665);
      let f = 112,
        p = (16 / 9) * f + 8,
        h = 10 * o.Z.Millis.SECOND;
      function g(e) {
        var t;
        let n = s.default.getId();
        return (
          e.type === d.fO.USER &&
          e.user.id === n &&
          (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo)
        );
      }
      function v(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : {
                  tileWidth: p,
                  tileMinWidth: 124,
                  tileMargin: 8,
                  limit: 12,
                  cropSelfVideo: !1,
                },
          {
            tileWidth: i,
            tileMinWidth: s,
            tileMargin: o,
            limit: u,
            cropSelfVideo: m,
            version: f,
          } = n,
          [v, S] = l.useState(Date.now());
        l.useEffect(() => {
          let e = setTimeout(() => {
            S(Date.now());
          }, h);
          return () => {
            clearTimeout(e);
          };
        }, [t]);
        let I = l.useRef({}),
          { visibleParticipants: x, participantTileWidth: _ } =
            l.useMemo(() => {
              let n = Date.now(),
                l = (0, r.sortBy)(t, (e) =>
                  (function (e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : Date.now();
                    switch (e.type) {
                      case d.fO.PRESENCE_EMBEDDED_ACTIVITY:
                        return "\0";
                      case d.fO.ACTIVITY:
                        return "\x01".concat(e.sortKey);
                      case d.fO.HIDDEN_STREAM:
                      case d.fO.STREAM:
                        return "\x02".concat((0, a.Z)(e.userNick, e.user));
                      case d.fO.USER:
                        var n;
                        let i = "\x06";
                        return (
                          e.speaking
                            ? (i = "\x03")
                            : t - e.lastSpoke < h
                              ? (i = "\x04")
                              : (null === (n = e.voiceState) || void 0 === n
                                  ? void 0
                                  : n.selfVideo) && (i = "\x05"),
                          ""
                            .concat(i)
                            .concat(
                              (function (e) {
                                let t = String(864e13).length;
                                return String(864e13 - e).padStart(t, "0");
                              })(e.lastSpoke),
                            )
                            .concat((0, a.Z)(e.userNick, e.user))
                        );
                    }
                  })(e, n),
                ),
                [f, p] = (0, r.partition)(l, d.Io),
                v = f.findIndex(g),
                S = null;
              -1 !== v && ((S = f[v]), f.splice(v, 1));
              let x = null == S || m ? e : e - i - o,
                _ = Math.max(
                  0,
                  Math.min(Math.floor((x - o) / (s + o)), u, t.length),
                ),
                C = Math.min((x - o) / _ - o, i),
                b = Math.max(0, _ - p.length),
                E = p.slice(0, _),
                y = f.slice(0, b),
                Z = Array(b);
              if (b > 0) {
                let e = [];
                for (let t of y) {
                  let n = I.current[t.id];
                  null != n && n < b ? (Z[n] = t) : e.push(t);
                }
                for (let t = 0; t < Z.length; t++) {
                  if (null != Z[t]) continue;
                  let n = e.shift();
                  if (null == n) break;
                  Z[t] = n;
                }
              }
              let T = Z.filter(c.lm),
                N = (0, r.keyBy)((0, r.range)(T.length), (e) => T[e].id);
              I.current = N;
              let A = [...E, ...T];
              return (
                null != S &&
                  (m && A.length >= _
                    ? (A[Math.max(0, A.length - 1)] = S)
                    : A.push(S)),
                { visibleParticipants: A, participantTileWidth: C }
              );
            }, [e, t, v, f, m, u, o, s, i]);
        return { visibleParticipants: x, participantTileWidth: _ };
      }
      function S(e) {
        let {
            participants: t,
            participantTileWidth: n,
            selectedParticipantId: l,
            onDoubleClick: r,
            onContextMenu: a,
            onClick: s,
            channel: o,
            inCall: c,
            popoutWindow: d,
            paused: f = !1,
          } = e,
          h = null != d;
        return (0, i.jsx)("div", {
          className: m.root,
          children: t.map((e) => {
            if (null == e) return null;
            let t = g(e);
            return (0, i.jsx)(
              "div",
              {
                className: m.tileSizer,
                style: t ? { flexShrink: 0 } : void 0,
                children: (0, i.jsx)(u.ZP, {
                  participant: e,
                  selected: l === e.id,
                  channel: o,
                  className: m.tile,
                  fit: u.BP.COVER,
                  onClick: s,
                  onDoubleClick: r,
                  onContextMenu: a,
                  width: t ? p : n,
                  inCall: c,
                  paused: f,
                  inPopout: h,
                }),
              },
              e.id,
            );
          }),
        });
      }
    },
    624834: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return C;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        s = n(442837),
        o = n(481060),
        c = n(2052),
        u = n(638880),
        d = n(413458),
        m = n(778569),
        f = n(100527),
        p = n(906732),
        h = n(835473),
        g = n(314897),
        v = n(592125),
        S = n(594174),
        I = n(849171),
        x = n(388032),
        _ = n(712434);
      function C(e) {
        let { participant: t, width: n, channelId: r } = e,
          { analyticsLocations: a } = (0, p.ZP)(f.Z.PRESENCE_ACTIVITY_TILE),
          { activity: s } = t,
          o = s.application_id,
          [c] = (0, h.Z)([o]),
          { url: u } = (0, m.Z)({ applicationId: o, names: I.Ix, size: I.bn }),
          d = l.useMemo(
            () => ({ userId: t.user.id, sessionId: t.activity.session_id }),
            [t],
          );
        return (0, i.jsx)(p.Gt, {
          value: a,
          children: (0, i.jsx)("div", {
            className: _.container,
            children: (0, i.jsxs)(i.Fragment, {
              children: [
                null != c && null != o && null != u && "" !== u
                  ? (0, i.jsx)("img", {
                      className: _.splashImage,
                      alt: c.name,
                      src: u,
                    })
                  : null,
                null != c && null != o
                  ? (0, i.jsx)(b, {
                      width: n,
                      channelId: r,
                      participant: d,
                      applicationId: o,
                    })
                  : null,
              ],
            }),
          }),
        });
      }
      function b(e) {
        let { width: t, channelId: n, participant: r, applicationId: m } = e,
          f = (0, I.V_)(t),
          [C] = (0, I.Ym)(t),
          b = (0, s.e7)([v.Z], () => v.Z.getChannel(n)),
          E = (0, s.e7)([S.default, g.default], () =>
            (0, d.J)(r, g.default) ? null : S.default.getUser(r.userId),
          ),
          y = l.useMemo(() => (null != E ? [E] : []), [E]),
          Z = (0, h.q)(m),
          { analyticsLocations: T } = (0, p.ZP)(),
          N = (0, c.O)(),
          A = r.sessionId,
          [j, w] = l.useState(!1),
          P = null == E ? void 0 : E.id,
          R = l.useCallback(
            async (e) => {
              if ((e.stopPropagation(), null != m && null != P))
                w(!0),
                  await (0, u.Z)({
                    applicationId: m,
                    activityChannelId: void 0,
                    locationObject: N.location,
                    analyticsLocations: T,
                    joinUserId: P,
                    joinSessionId: A,
                  }),
                  w(!1);
            },
            [m, P, N.location, T, A],
          );
        return null == b || null == E || null == Z
          ? null
          : (0, i.jsxs)("div", {
              className: _.splash,
              children: [
                (0, i.jsx)(I.OV, {
                  avatarSize: C,
                  guildId: b.guild_id,
                  channelId: b.id,
                  users: y,
                }),
                (0, i.jsx)(o.Text, {
                  className: a()(_.subheader, {
                    [_.small]: f === I.nR.SMALL,
                    [_.medium]: f === I.nR.MEDIUM,
                  }),
                  variant: "text-sm/normal",
                  children: x.intl.formatToPlainString(x.t["7Uuia2"], {
                    username: E.username,
                  }),
                }),
                (0, i.jsx)(o.Text, {
                  className: a()(_.header, {
                    [_.small]: f === I.nR.SMALL,
                    [_.medium]: f === I.nR.MEDIUM,
                  }),
                  variant: "text-sm/normal",
                  children: Z.name,
                }),
                (0, i.jsx)("div", {
                  className: _.buttons,
                  children: (0, i.jsx)(o.Button, {
                    onClick: R,
                    submitting: j,
                    size: (0, I.ac)(f),
                    className: _.button,
                    color: o.Button.Colors.PRIMARY,
                    children: x.intl.string(x.t["4i2vj4"]),
                  }),
                }),
              ],
            });
      }
    },
    442168: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return I;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(642128),
        a = n(442837),
        s = n(780384),
        o = n(481060),
        c = n(435064),
        u = n(39604),
        d = n(175470),
        m = n(569545),
        f = n(314910),
        p = n(340534);
      let h = { visibility: "hidden" },
        g = { precision: 1e-4, duration: 300 },
        v = { tension: 150, friction: 20, precision: 1e-4, bounce: 0 },
        S = { duration: 1e3 };
      function I(e) {
        let { stream: t, inPopout: n } = e,
          { reducedMotion: I } = l.useContext(s.Sf),
          x = (0, l.useRef)(null),
          _ = d.n.getState().clipsButtonRef,
          C = (0, m.V9)(t),
          b = (0, a.e7)([c.Z], () => c.Z.getActiveAnimation()),
          E = (0, a.Wu)([c.Z], () => c.Z.getStreamClipAnimations(C)),
          y = (0, l.useRef)();
        l.useEffect(
          () => () => {
            (0, u.Gh)(C);
          },
          [C],
        );
        let Z = () => {
            var e;
            let t =
              null === (e = x.current) || void 0 === e
                ? void 0
                : e.getBoundingClientRect();
            return null == t || n
              ? h
              : { width: t.width, height: t.height, top: t.top, left: t.left };
          },
          T = (e) => {
            let t = null == _ ? void 0 : _.getBoundingClientRect();
            if (((y.current = t), e.timestamp !== b || null == t || n))
              return h;
            let { top: i, left: l } = t;
            return { top: i + 36, left: l - 216, height: 151, width: 268 };
          },
          N = (0, l.useRef)(null),
          A = (0, o.useTransition)(
            E,
            {
              keys: (e) => e.timestamp,
              ref: N,
              from: { opacity: 0.2 },
              enter: { opacity: 0 },
              config: g,
            },
            "animate-always",
          ),
          j = (0, l.useRef)(null),
          w = (0, o.useTransition)(
            E,
            {
              ref: j,
              keys: (e) => e.timestamp,
              from: (e) => ({
                position: "fixed",
                visibility: "hidden",
                opacity: 1,
                ...(I.enabled ? T(e) : Z()),
              }),
              enter: (e) => [{ opacity: 1, visibility: "visible", ...T(e) }],
              leave: {
                opacity: 0,
                ...(!I.enabled && {
                  height: 0,
                  width: 0,
                  ...(() => {
                    if (null != y.current)
                      return {
                        top: y.current.top + 12,
                        left: y.current.left + 12,
                      };
                  })(),
                }),
              },
              config: I.enabled ? S : v,
              onRest: (e, t) => {
                null != t.item &&
                  null != E.find((e) => e.timestamp === t.item.timestamp) &&
                  (0, u.Gh)(C, t.item.timestamp);
              },
            },
            "animate-always",
          );
        return (
          (0, r.useChain)([N, j], [0, 0.1], 3e3),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", { className: p.hidden, ref: x }),
              A(
                (e, t) =>
                  null != t &&
                  (0, i.jsx)(r.animated.div, {
                    className: p.whiteFlash,
                    style: e,
                  }),
              ),
              (0, i.jsx)(f.ZP, {
                children: (0, i.jsx)("div", {
                  className: p.hidden,
                  children: w(
                    (e, t, n, l) =>
                      (null == t ? void 0 : t.thumbnail) != null &&
                      (0, i.jsx)(r.animated.img, {
                        src: t.thumbnail,
                        className: p.movingImage,
                        style: e,
                      }),
                  ),
                }),
              }),
            ],
          })
        );
      }
    },
    979425: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(481060),
        s = n(871118),
        o = n(388032),
        c = n(995544);
      function u(e) {
        let { stream: t, isSmall: n, selected: l, isSelfStream: u } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(s.Z, {
              className: r()(c.absoluteFill, c.streamPreviewOpacity),
              stream: t,
              noText: !0,
            }),
            !l &&
              (0, i.jsxs)("div", {
                className: r()(c.content, c.streamUnavailable, {
                  [c.small]: n,
                }),
                children: [
                  (0, i.jsx)(a.Text, {
                    className: c.streamUnavailableText,
                    color: "always-white",
                    variant: n ? "text-sm/semibold" : "text-md/semibold",
                    children: u
                      ? o.intl.string(o.t.UeEwj4)
                      : o.intl.string(o.t["1i3tSU"]),
                  }),
                  (0, i.jsx)(a.TooltipContainer, {
                    text: u
                      ? o.intl.string(o.t["ro/HNz"])
                      : o.intl.string(o.t.UPf6ZG),
                    className: c.darkCircle,
                    children: (0, i.jsx)("div", {
                      children: (0, i.jsx)(a.ScreenSlashIcon, {
                        size: "md",
                        color: "currentColor",
                        className: c.stopStreamIcon,
                        colorClass: c.stopStreamForeground,
                      }),
                    }),
                  }),
                ],
              }),
          ],
        });
      }
    },
    833519: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return G;
        },
        _: function () {
          return W;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        s = n(442837),
        o = n(481060),
        c = n(475179),
        u = n(872810),
        d = n(493773),
        m = n(763520),
        f = n(194082),
        p = n(710845),
        h = n(590293),
        g = n(863908),
        v = n(871118),
        S = n(517525),
        I = n(352978),
        x = n(576645),
        _ = n(590076),
        C = n(507675),
        b = n(199902),
        E = n(314897),
        y = n(592125),
        Z = n(131951),
        T = n(451478),
        N = n(685203),
        A = n(112560),
        j = n(442168),
        w = n(822296),
        P = n(916771),
        R = n(792517),
        O = n(351483),
        M = n(979425),
        k = n(651183),
        L = n(623825),
        D = n(981631),
        U = n(354459),
        V = n(65154),
        F = n(388032),
        z = n(995544);
      let B = new p.Z("StreamTile");
      function W(e) {
        let {
            participant: t,
            selected: n,
            focused: r,
            idle: a,
            width: o,
            premiumIndicator: c,
          } = e,
          u = (0, s.e7)([b.Z], () =>
            b.Z.getActiveStreamForUser(t.user.id, t.stream.guildId),
          ),
          d = (0, L.K)(o),
          [m, p] = l.useState(!1),
          h = (0, s.e7)([y.Z], () =>
            y.Z.getChannel(null == u ? void 0 : u.channelId),
          );
        return (
          (0, x.J)(h, () => {
            let e = setTimeout(() => {
                p(!0);
              }, 5e3),
              t = setTimeout(() => {
                p(!1);
              }, 15e3);
            return () => {
              p(!1), clearTimeout(e), clearTimeout(t);
            };
          }),
          (0, i.jsxs)(i.Fragment, {
            children: [
              n ? null : (0, i.jsx)(k.Z, { participant: t }),
              r ||
              null == u ||
              u.state === D.jm8.ENDED ||
              u.state === D.jm8.FAILED
                ? null
                : (0, i.jsx)(S.Z, {
                    size: f.ZP.Sizes.SMALL,
                    className: z.liveIndicator,
                    participant: t,
                    showQuality: (!d && !a) || m,
                    isUpsellEnabled: !1,
                    premiumIndicator: c,
                  }),
            ],
          })
        );
      }
      function G(e) {
        let {
            participant: t,
            selected: n,
            onVideoResize: r,
            paused: f,
            fit: p,
            inPopout: S,
            inOverlayPopout: x = !1,
            width: O,
            focused: k,
            wrapperClassName: L,
          } = e,
          W = Z.Z.getVideoComponent(),
          G = (0, s.e7)([E.default], () => E.default.getId()),
          H = (0, h.Z)(),
          { stream: Y, user: q, streamId: J } = t,
          X = (0, s.e7)([y.Z], () => y.Z.getChannel(Y.channelId)),
          K = (0, s.e7)(
            [b.Z],
            () => b.Z.getActiveStreamForUser(q.id, Y.guildId),
            [q.id, Y.guildId],
          ),
          Q = (0, s.e7)([b.Z], () => b.Z.getAllActiveStreams().length > 0),
          $ = (0, s.e7)([T.Z], () => T.Z.isFocused()),
          ee = (null == K ? void 0 : K.ownerId) === G,
          et = ee && !$ && !S,
          en = null != K ? (0, g.Z)(K, q, q.id === G, et) : null,
          ei = O < 195;
        (0, d.Z)(() => {
          !Q &&
            (null == X ? void 0 : X.isGuildStageVoice()) &&
            !ee &&
            ((0, u.rn)(Y), c.Z.updateStageStreamSize(Y.channelId, !1));
        }),
          l.useEffect(() => {
            B.info(
              "Stream Tile State - activeStream: "
                .concat(null != K, " | selected: ")
                .concat(n, " | Video: ")
                .concat(null != W, " | MediaEngine: ")
                .concat(Z.Z.supports(V.AN.VIDEO)),
            );
          }, [W, K, n]);
        if (H)
          return (0, i.jsx)(M.Z, {
            stream: t.stream,
            isSmall: ei,
            selected: n,
            isSelfStream: q.id === G,
          });
        if ((null == K ? void 0 : K.state) === D.jm8.ENDED)
          return (0, i.jsx)(w.Z, { selected: n, stream: K, width: O });
        if ((null == K ? void 0 : K.state) === D.jm8.FAILED)
          return (0, i.jsx)(P.Z, { selected: n, stream: K, width: O });
        else if (t.type === U.fO.HIDDEN_STREAM)
          return (0, i.jsx)(R.Z, { selected: n, participant: t, width: O });
        else if (!(null != K && !n && null != W && Z.Z.supports(V.AN.VIDEO)))
          return (0, i.jsxs)("div", {
            className: a()(z.content, z.streamPreview, { [z.small]: ei }),
            children: [
              (0, i.jsx)(v.Z, {
                noText: !0,
                className: a()(z.absoluteFill, {
                  [z.streamPreviewOpacity]: null == K,
                }),
                stream: t.stream,
              }),
              n
                ? null
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(N.a, {
                        isSmall: ei,
                        children: (0, i.jsx)(o.Text, {
                          variant: ei ? "text-sm/semibold" : "text-md/semibold",
                          color: "none",
                          children:
                            O < 175
                              ? F.intl.string(F.t["I6JG4+"])
                              : F.intl.string(F.t["7Xq/nZ"]),
                        }),
                      }),
                      Q
                        ? (0, i.jsx)(N.a, {
                            className: z.addCTA,
                            tooltip: F.intl.string(F.t.wCrzur),
                            onClick: (e) => {
                              e.stopPropagation(),
                                (0, u.rn)(Y, { forceMultiple: !0 });
                            },
                            isSmall: ei,
                            children: (0, i.jsx)(o.EyePlusIcon, {
                              size: "xs",
                              color: "currentColor",
                              className: z.addStreamIcon,
                            }),
                          })
                        : null,
                    ],
                  }),
            ],
          });
        else
          return (0, i.jsxs)(i.Fragment, {
            children: [
              null != X
                ? (0, i.jsx)(_.Z, {
                    focused: k,
                    channelId: X.id,
                    guildId: X.guild_id,
                    streamerId: q.id,
                    hasScreenMessage: null != en,
                    stream: Y,
                  })
                : null,
              (0, i.jsx)(
                I.Z,
                {
                  onResize: r,
                  wrapperClassName: a()(z.videoWrapper, L),
                  className: z.content,
                  streamId: J,
                  videoComponent: W,
                  fit: p,
                  paused: f || et,
                  videoSpinnerContext: ee ? m.m.SELF_STREAM : m.m.REMOTE_STREAM,
                  userId: q.id,
                },
                J,
              ),
              null != en ? (0, i.jsx)(C.Z, { size: (0, A.L)(O), ...en }) : null,
              (0, i.jsx)(j.Z, { stream: Y, inPopout: S }),
            ],
          });
      }
    },
    651183: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(475674),
        r = n(42326),
        a = n(906467);
      function s(e) {
        var t;
        let { participant: n, className: s } = e;
        let o =
          null == (t = (0, l.Z)(n))
            ? null
            : a.Z.isDeveloper
              ? "".concat(t.message, " (").concat(t.errorType, ")")
              : t.message;
        return null != o
          ? (0, i.jsx)(r.Z, { className: s, errorMessage: o })
          : null;
      }
    },
    462061: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return w;
        },
        Z: function () {
          return P;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        s = n(442837),
        o = n(481060),
        c = n(475179),
        u = n(763520),
        d = n(358221),
        m = n(414910),
        f = n(266910),
        p = n(352978),
        h = n(928518),
        g = n(518950),
        v = n(470956),
        S = n(314897),
        I = n(271383),
        x = n(131951),
        _ = n(451478),
        C = n(5192),
        b = n(44136),
        E = n(351483),
        y = n(981631),
        Z = n(65154),
        T = n(388032),
        N = n(995544);
      let A = o.AvatarSizes.SIZE_80,
        j = o.AvatarSizes.SIZE_40;
      function w(e) {
        let { channelId: t, userId: n } = e;
        return (0, v.Eu)(t, n)
          ? (0, i.jsx)(o.Tooltip, {
              text: T.intl.string(T.t.HFwRpq),
              position: "bottom",
              color: o.TooltipColors.GREY,
              children: (e) =>
                (0, i.jsx)("div", {
                  ...e,
                  className: N.interactive,
                  children: (0, i.jsx)(o.CircleWarningIcon, {
                    color: o.tokens.colors.STATUS_WARNING_BACKGROUND,
                  }),
                }),
            })
          : null;
      }
      function P(e) {
        let {
            participant: t,
            channel: n,
            inCall: r,
            width: o,
            paused: v,
            selected: E,
            fit: w,
            onVideoResize: P,
            blocked: R,
            ignored: O,
            noVideoRender: M = !1,
            pulseSpeakingIndicator: k = !1,
            inOverlayPopout: L = !1,
          } = e,
          D = x.Z.getVideoComponent(),
          U = (0, s.e7)([S.default], () => S.default.getId()),
          { user: V, streamId: F, speaking: z } = t,
          B = V.id === U,
          W = (0, b.ZP)(t),
          G = (0, s.e7)([_.Z], () => _.Z.isFocused()),
          H = (0, s.e7)([h.Z], () =>
            h.Z.getWindowFocused(y.KJ3.CHANNEL_CALL_POPOUT),
          ),
          Y = (0, s.e7)(
            [x.Z],
            () =>
              null != V.id && x.Z.isLocalVideoDisabled(V.id, (0, m.Z)(t.type)),
            [V.id, t.type],
          ),
          q = (0, s.e7)([I.ZP], () => I.ZP.isGuestOrLurker(n.guild_id, V.id)),
          J =
            C.ZP.getName(n.getGuildId(), n.id, V) +
            (q ? " ".concat(T.intl.string(T.t["pFO/Pj"])) : ""),
          X = z && (H || G),
          K = o < 124 ? j : A,
          { avatarSrc: Q, avatarDecorationSrc: $ } = (0, g.Z)({
            user: V,
            guildId: n.guild_id,
            size: K,
            animateOnHover: !X,
          }),
          ee = (0, s.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)),
          et = { channel: n, selectedParticipant: ee, user: V },
          en = l.useRef(et);
        return (l.useEffect(() => {
          en.current = et;
        }),
        l.useEffect(() => {
          let { channel: e, selectedParticipant: t, user: n } = en.current;
          e.isGuildStageVoice() &&
            !W &&
            (null == t ? void 0 : t.id) === n.id &&
            c.Z.selectParticipant(e.id, null);
        }, [W]),
        r && !Y && !M && W && !E && null != D && x.Z.supports(Z.AN.VIDEO))
          ? (0, i.jsx)(
              p.Z,
              {
                onResize: P,
                wrapperClassName: N.videoWrapper,
                className: N.content,
                mirror: B,
                streamId: F,
                videoComponent: D,
                fit: w,
                paused: v,
                videoSpinnerContext:
                  V.id === U ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
                userId: V.id,
              },
              F,
            )
          : (0, i.jsx)("div", {
              className: a()(N.content, { [N.blockedAvatar]: R || O }),
              children: (0, i.jsx)(f.Z, {
                "aria-label": J,
                src: Q,
                avatarDecoration: $,
                backgroundSrc: V.getAvatarURL(n.guild_id, 80),
                size: K,
                pulseSpeakingIndicator: k,
                speaking: z,
                userId: V.id,
              }),
            });
      }
    },
    623825: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return i;
        },
        N: function () {
          return l;
        },
      });
      function i(e) {
        return e <= 220;
      }
      function l(e) {
        return e <= 124;
      }
    },
    839662: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(44136),
        l = n(354459);
      function r(e, t) {
        var n, r;
        let a = null,
          s = null,
          o = null,
          c = !1,
          u = !1;
        switch (e.type) {
          case l.fO.ACTIVITY:
            break;
          case l.fO.USER:
            (a = e.streamId),
              (o = e.voiceState),
              (c = e.speaking),
              (u = e.ringing);
            break;
          case l.fO.STREAM:
            (a = e.streamId), (s = e.stream);
        }
        return {
          streamId: a,
          stream: s,
          speaking: c,
          ringing: u,
          muted:
            null !== (n = null == o ? void 0 : o.isVoiceMuted()) &&
            void 0 !== n &&
            n,
          deafen:
            null !== (r = null == o ? void 0 : o.isVoiceDeafened()) &&
            void 0 !== r &&
            r,
          mirror: e.type === l.fO.USER && e.user.id === t,
          hasVideo: (0, i.ZP)(e),
        };
      }
    },
    42326: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        a = n(481060),
        s = n(618158),
        o = n(339445);
      function c(e) {
        let { errorMessage: t, className: n } = e;
        return (0, i.jsx)(a.TooltipContainer, {
          className: r()(n, o.root),
          text: t,
          position: "bottom",
          color: a.TooltipColors.GREY,
          children: (0, i.jsx)(s.Z, {
            children: (0, i.jsx)(a.CircleWarningIcon, {
              size: "custom",
              width: 20,
              height: 20,
              color: "currentColor",
              "aria-label": null != t ? t : "",
              className: o.warningIcon,
            }),
          }),
        });
      }
    },
    470956: function (e, t, n) {
      "use strict";
      n.d(t, {
        Es: function () {
          return v;
        },
        Eu: function () {
          return I;
        },
        bt: function () {
          return S;
        },
      }),
        n(47120),
        n(653041);
      var i = n(192379),
        l = n(392711),
        r = n(442837),
        a = n(413523),
        s = n(358221),
        o = n(189786),
        c = n(314897),
        u = n(592125),
        d = n(271383),
        m = n(878884),
        f = n(19780),
        p = n(594174),
        h = n(979651),
        g = n(823379);
      function v(e, t) {
        let n = (0, r.e7)([m.Z, f.Z], () =>
            e === f.Z.getChannelId() ? m.Z.getDesyncedVoiceStates() : null,
          ),
          a = (0, r.Wu)([s.Z], () => [...s.Z.getGuildRingingUsers(e)]),
          c = (0, r.Wu)([p.default], () =>
            a.map((e) => p.default.getUser(e)).filter(g.lm),
          ),
          h = (0, r.e7)([u.Z], () => u.Z.getBasicChannel(e)),
          v = i.useMemo(
            () =>
              c.map((e) => ({
                voiceState: new o.Z(e.id),
                user: e,
                member:
                  (null == h ? void 0 : h.guild_id) != null
                    ? d.ZP.getMember(null == h ? void 0 : h.guild_id, e.id)
                    : null,
                nick: e.globalName,
                comparator: e.globalName,
                _isPlaceholder: !1,
              })),
            [c, null == h ? void 0 : h.guild_id],
          );
        return i.useMemo(
          () =>
            (function (e, t, n) {
              if ((null == e || 0 === e.length) && 0 === n.length) return t;
              let i = [],
                r = new Set();
              for (let e of t) i.push(e), r.add(e.user.id);
              return (null == e ||
                e.forEach((e) => {
                  i.splice(
                    (0, l.sortedIndexBy)(i, e, (e) => {
                      let { comparator: t } = e;
                      return t;
                    }),
                    0,
                    e,
                  );
                }),
              n.length > 0)
                ? [...i, ...n]
                : i;
            })(n, t, v),
          [n, t, v],
        );
      }
      function S(e, t) {
        var n;
        let s =
          ((n = e),
          (0, r.e7)([m.Z, f.Z], () =>
            n === f.Z.getChannelId() ? m.Z.getDesyncedParticipants() : null,
          ));
        return i.useMemo(
          () =>
            (function (e, t) {
              if (null == e || 0 === e.length) return t;
              let n = [...t];
              return (
                e.forEach((e) => {
                  n.splice(
                    (0, l.sortedIndexBy)(n, e, (e) => (0, a.Yr)(e)),
                    0,
                    e,
                  );
                }),
                n
              );
            })(s, t),
          [s, t],
        );
      }
      function I(e, t) {
        let n = (0, r.e7)([c.default], () => c.default.getId() === t),
          l = (0, r.e7)([f.Z], () => f.Z.getChannelId()),
          a = i.useRef(null),
          [s, o] = i.useState(!1),
          [u, d] = i.useState(!1),
          m = (0, r.e7)(
            [f.Z, h.Z],
            () =>
              null != t &&
              null != e &&
              f.Z.getChannelId() === e &&
              null != h.Z.isInChannel(e, t) &&
              f.Z.isUserConnected(t),
          ),
          p = (0, r.e7)(
            [f.Z, h.Z],
            () =>
              null != t &&
              null != e &&
              f.Z.getChannelId() === e &&
              null != h.Z.isInChannel(e, t) &&
              !f.Z.isUserConnected(t),
          );
        return (
          i.useEffect(() => {
            m && d(!0);
          }, [m]),
          i.useEffect(() => {
            l !== e && d(!1);
          }, [e, l]),
          i.useEffect(
            () => (
              p && null == a.current
                ? (a.current = setTimeout(() => {
                    (a.current = null), o(!0);
                  }, 250))
                : (clearTimeout(a.current), (a.current = null), o(!1)),
              () => {
                clearTimeout(a.current), (a.current = null);
              }
            ),
            [p],
          ),
          !n && u && s
        );
      }
    },
    597998: function (e, t, n) {
      "use strict";
      n.d(t, {
        eJ: function () {
          return T;
        },
        nm: function () {
          return A;
        },
      }),
        n(653041),
        n(789020),
        n(47120);
      var i,
        l = n(200651),
        r = n(192379),
        a = n(120356),
        s = n.n(a),
        o = n(481060),
        c = n(434650),
        u = n(657305),
        d = n(367907),
        m = n(194082),
        f = n(282256),
        p = n(925329),
        h = n(833858),
        g = n(223135),
        v = n(374129),
        S = n(639351),
        I = n(630388),
        x = n(51144),
        _ = n(981631),
        C = n(354459),
        b = n(927923),
        E = n(388032),
        y = n(939214);
      function Z(e, t, n) {
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
      let T = (e) => {
          let { children: t, collapsed: n = !1, className: i } = e;
          return (0, l.jsx)("div", {
            className: s()(i, y.list, n ? y.listCollapse : y.listDefault),
            role: "group",
            children: t,
          });
        },
        N = (e) => {
          let { hangStatusActivity: t, iconClassName: n, isSelf: i } = e;
          return i && null == t
            ? (0, l.jsx)(
                o.TooltipContainer,
                {
                  className: y.iconSpacing,
                  text: E.intl.string(E.t.qstQub),
                  children: (0, l.jsx)(o.PlusLargeIcon, {
                    className: s()(y.icon, n),
                  }),
                },
                "add-status",
              )
            : (0, l.jsx)(
                o.TooltipContainer,
                {
                  className: y.iconSpacing,
                  text: (0, h.O8)(t),
                  children: (0, l.jsx)(g.Z, {
                    hangStatusActivity: t,
                    className: s()(y.hangStatusIcon, n),
                  }),
                },
                "hang-status",
              );
        };
      function A(e) {
        let {
          className: t,
          mute: n,
          localMute: i,
          localVideoDisabled: r,
          serverMute: a,
          deaf: c,
          serverDeaf: d,
          collapsed: f,
          video: p,
          isStreaming: h,
          disabled: g,
          isWatching: x,
          iconClassName: Z,
          embeddedApplication: T,
          otherClientSessionType: A,
          voicePlatform: j,
          hangStatusActivity: R,
          showHangStatus: O,
          isSelf: M,
          application: k,
          guildId: L,
          channelId: D,
          user: U,
          handleHoverHangStatus: V,
          handleHoverIcons: F,
          disconnected: z,
        } = e;
        if (f || g) return null;
        let B = [],
          W = (0, l.jsx)(P, {
            iconClassName: Z,
            mute: n,
            localMute: i,
            serverMute: a,
            deaf: c,
            serverDeaf: d,
          });
        p &&
          (r
            ? B.push(
                (0, l.jsx)(
                  o.TooltipContainer,
                  {
                    className: y.iconSpacing,
                    text: E.intl.string(E.t["PXMZ//"]),
                    children: (0, l.jsx)(o.VideoSlashIcon, {
                      size: "md",
                      color: "currentColor",
                      className: s()(y.icon, Z),
                      colorClass: y.strikethrough,
                    }),
                  },
                  "video",
                ),
              )
            : B.push(
                (0, l.jsx)(
                  o.TooltipContainer,
                  {
                    className: y.iconSpacing,
                    text: E.intl.string(E.t.FlNoSU),
                    children: (0, l.jsx)(o.VideoIcon, {
                      size: "md",
                      color: "currentColor",
                      className: s()(y.icon, Z),
                    }),
                  },
                  "video",
                ),
              )),
          z &&
            B.push(
              (0, l.jsx)(
                o.TooltipContainer,
                {
                  className: y.iconSpacing,
                  text: E.intl.string(E.t.HFwRpq),
                  children: (0, l.jsx)(o.CircleWarningIcon, {
                    className: s()(y.icon, Z),
                    color: o.tokens.colors.STATUS_WARNING_BACKGROUND,
                  }),
                },
                "disconnected",
              ),
            ),
          null != T &&
            B.push(
              (0, l.jsx)(
                o.TooltipContainer,
                {
                  text: (0, u.Z)(T.name),
                  className: y.iconSpacing,
                  children: (0, l.jsx)(o.ActivitiesIcon, {
                    size: "md",
                    color: "currentColor",
                    className: s()(y.icon, Z),
                  }),
                },
                "activity",
              ),
            ),
          A === b.YE.XBOX || j === C.wR.XBOX
            ? B.push(
                (0, l.jsx)(
                  "div",
                  {
                    className: s()(y.iconSpacing),
                    children: (0, l.jsx)(S.Z, { className: s()(y.icon, Z) }),
                  },
                  "xbox",
                ),
              )
            : (A === b.YE.PLAYSTATION || j === C.wR.PLAYSTATION) &&
              B.push(
                (0, l.jsx)(
                  "div",
                  {
                    className: s()(y.iconSpacing),
                    children: (0, l.jsx)(v.Z, { className: s()(y.icon, Z) }),
                  },
                  "playstation",
                ),
              ),
          h
            ? B.push(
                (0, l.jsx)(
                  "div",
                  {
                    className: s()(y.iconSpacing, y.liveIconSpacing),
                    children: (0, l.jsx)(m.ZP, { size: m.ZP.Sizes.SMALL }),
                  },
                  "stream",
                ),
              )
            : x &&
              B.push(
                (0, l.jsx)(
                  o.TooltipContainer,
                  {
                    className: y.iconSpacing,
                    text: E.intl.string(E.t.JH1SJy),
                    children: (0, l.jsx)(o.EyeIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: s()(y.icon, Z),
                    }),
                  },
                  "watch",
                ),
              );
        let G = null != k && !(0, I.yE)(k.flags, _.udG.EMBEDDED),
          H = null == R && G;
        return 0 !== B.length || null != W || O || H
          ? (0, l.jsxs)("div", {
              className: s()(y.icons, t),
              children: [
                (0, l.jsxs)("div", {
                  className: y.iconGroup,
                  onMouseEnter: () => (null == F ? void 0 : F(!0)),
                  onMouseLeave: () => (null == F ? void 0 : F(!1)),
                  children: [W, B],
                }),
                O || H
                  ? (0, l.jsx)("div", {
                      className: y.iconGroup,
                      onMouseEnter: () => (null == V ? void 0 : V(!0)),
                      onMouseLeave: () => (null == V ? void 0 : V(!1)),
                      children: H
                        ? (0, l.jsx)(
                            w,
                            {
                              application: k,
                              iconClassName: Z,
                              guildId: L,
                              channelId: D,
                              userId: U.id,
                            },
                            "".concat(U.id, "-game"),
                          )
                        : (0, l.jsx)(N, {
                            hangStatusActivity: R,
                            iconClassName: Z,
                            isSelf: M,
                          }),
                    })
                  : null,
              ],
            })
          : null;
      }
      class j extends (i = r.Component) {
        renderPrioritySpeaker() {
          let {
            speaking: e,
            priority: t,
            collapsed: n,
            mute: i,
            serverMute: r,
          } = this.props;
          return t && !n
            ? (0, l.jsx)(o.Tooltip, {
                text: E.intl.string(E.t.BVK71t),
                children: (t) =>
                  (0, l.jsx)("div", {
                    className: s()(y.iconPriortySpeaker, {
                      [y.iconPriortySpeakerSpeaking]: !i && !r && e,
                    }),
                    ...t,
                  }),
              })
            : null;
        }
        renderAvatar() {
          let {
            speaking: e,
            user: t,
            size: n,
            avatarContainerClass: i,
            guildId: r,
          } = this.props;
          return (0, l.jsx)("div", {
            className: s()(i, y.avatar, {
              [y.avatarLarge]: n === _.ipw.LARGE,
              [y.avatarSmall]: n === _.ipw.SMALL,
              [y.avatarSpeaking]: e,
            }),
            style: {
              backgroundImage: "url(".concat(
                t.getAvatarURL(r, n === _.ipw.LARGE ? 38 : 24),
                ")",
              ),
            },
          });
        }
        renderName() {
          let {
              nick: e,
              user: t,
              collapsed: n,
              speaking: i,
              userNameClassName: r,
              mute: a,
              serverMute: o,
              isGuest: c,
              isOverlay: u,
              guildId: d,
            } = this.props,
            m = (0, l.jsxs)("div", {
              className: s()(r, {
                [y.username]: !0,
                [y.usernameSpeaking]: !a && !o && i,
              }),
              children: [
                null != e ? e : x.ZP.getName(t),
                c
                  ? (0, l.jsxs)("span", {
                      className: y.guestSuffix,
                      children: ["\xa0", E.intl.string(E.t["pFO/Pj"])],
                    })
                  : "",
              ],
            }),
            p = {
              primaryGuild: t.primaryGuild,
              userId: t.id,
              contextGuildId: d,
              isOverlay: u,
              disableTooltip: !0,
              className: s()(y.clanTag, u && y.isOverlay),
              profileViewedAnalytics: {
                source: u ? _.jXE.OVERLAY : _.Sbl.VOICE_PANEL,
              },
            };
          return !n || u
            ? (0, l.jsx)(l.Fragment, {
                children: (0, l.jsx)(f.Z, { ...p, children: m }),
              })
            : null;
        }
        renderIcons() {
          return (0, l.jsx)(A, { ...this.props });
        }
        render() {
          let {
            onClick: e,
            onKeyDown: t,
            flipped: n,
            size: i,
            className: r,
            selected: a,
            disabled: c,
            overlap: u,
            "aria-label": d,
            tabIndex: m,
            ringing: f,
          } = this.props;
          return (0, l.jsx)(o.Clickable, {
            className: s()(r, {
              [y.voiceUser]: !0,
              [y.overlap]: u,
              [y.selected]: a,
              [y.clickable]: null != e,
              [y.userSmall]: i === _.ipw.SMALL,
              [y.userLarge]: i === _.ipw.LARGE,
              [y.disabled]: !a && c,
              [y.ringing]: f,
            }),
            onClick: this.handleClick,
            onDoubleClick: this.handleDoubleClick,
            onContextMenu: this.handleContextMenu,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseDown: this.handleMouseDown,
            onKeyDown: t,
            "aria-label": d,
            tabIndex: m,
            children: (0, l.jsxs)("div", {
              className: s()(y.content, { [y.flipped]: n }),
              children: [
                this.renderPrioritySpeaker(),
                this.renderAvatar(),
                this.renderName(),
                this.renderIcons(),
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            Z(this, "handleClick", (e) => {
              let { onClick: t, user: n } = this.props;
              null == t || t(e, n);
            }),
            Z(this, "handleDoubleClick", (e) => {
              let { onDoubleClick: t, user: n } = this.props;
              null == t || t(e, n);
            }),
            Z(this, "handleContextMenu", (e) => {
              let { onContextMenu: t, user: n } = this.props;
              null == t || t(e, n);
            }),
            Z(this, "handleMouseLeave", (e) => {
              let { onMouseLeave: t, user: n } = this.props;
              null == t || t(e, n);
            }),
            Z(this, "handleMouseEnter", (e) => {
              let { onMouseEnter: t, user: n } = this.props;
              null == t || t(e, n);
            }),
            Z(this, "handleMouseDown", (e) => {
              let { onMouseDown: t, user: n } = this.props;
              null == t || t(e, n);
            });
        }
      }
      function w(e) {
        let {
            application: t,
            iconClassName: n,
            guildId: i,
            channelId: a,
            userId: u,
          } = e,
          [m, f] = r.useState(!1),
          h = (0, c.O)((e) => f(e));
        return (
          r.useEffect(() => {
            m &&
              d.ZP.trackWithMetadata(
                _.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED,
                { channel_id: a, guild_id: i, user_id: u },
              );
          }, [t.id, a, i, u, m]),
          (0, l.jsx)(o.TooltipContainer, {
            text: E.intl.formatToPlainString(E.t.Sq9xJy, { game: t.name }),
            "aria-label": E.intl.formatToPlainString(E.t.Sq9xJy, {
              game: t.name,
            }),
            className: y.iconSpacing,
            children: (0, l.jsx)("div", {
              ref: h,
              children: (0, l.jsx)(p.Z, {
                className: s()(y.icon, n),
                game: t,
                size: p.Z.Sizes.XSMALL,
                onMouseEnter: () => {
                  d.ZP.trackWithMetadata(
                    _.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED,
                    {
                      channel_id: a,
                      guild_id: i,
                      game_name: t.name,
                      user_id: u,
                    },
                  );
                },
              }),
            }),
          })
        );
      }
      function P(e) {
        let {
            iconClassName: t,
            mute: n,
            localMute: i,
            serverMute: r,
            deaf: a,
            serverDeaf: c,
          } = e,
          u = (0, o.useRedesignIconContext)().enabled,
          d = [];
        if (n) {
          let e;
          if (u) {
            let n;
            (n = r
              ? o.MicrophoneDenyIcon
              : i
                ? o.MicrophoneDenyIcon
                : o.MicrophoneSlashIcon),
              (e = (0, l.jsx)(n, {
                className: s()(y.icon, t, { [y.iconServer]: r }),
                color: "currentColor",
              }));
          } else
            e = (0, l.jsx)(o.MicrophoneSlashIcon, {
              size: "md",
              color: "currentColor",
              className: s()(y.icon, t, { [y.iconServer]: r }),
              colorClass: i ? y.strikethrough : void 0,
            });
          d.push(
            (0, l.jsx)(
              o.TooltipContainer,
              {
                text: i
                  ? E.intl.string(E.t.Q8Uzoa)
                  : r
                    ? E.intl.string(E.t.uLddbW)
                    : E.intl.string(E.t.tjtv3N),
                className: y.iconSpacing,
                children: e,
              },
              "mute",
            ),
          );
        }
        if (c || a) {
          let e;
          if (u) {
            let n = c ? o.HeadphonesDenyIcon : o.HeadphonesSlashIcon;
            e = (0, l.jsx)(n, {
              className: s()(y.icon, t, { [y.iconServer]: c }),
              color: "currentColor",
            });
          } else
            e = (0, l.jsx)(o.HeadphonesSlashIcon, {
              size: "md",
              color: "currentColor",
              className: s()(y.icon, t, { [y.iconServer]: c }),
            });
          d.push(
            (0, l.jsx)(
              o.TooltipContainer,
              {
                className: y.iconSpacing,
                text: c ? E.intl.string(E.t.btxSdH) : E.intl.string(E.t.NjmiOD),
                children: e,
              },
              "deaf",
            ),
          );
        }
        return 0 === d.length ? null : (0, l.jsx)(l.Fragment, { children: d });
      }
      Z(j, "defaultProps", {
        avatarContainerClass: y.avatarContainer,
        userNameClassName: y.usernameFont,
        size: _.ipw.SMALL,
        selected: !1,
        disabled: !1,
        isOverlay: !1,
      }),
        (t.ZP = j);
    },
    274459: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return I;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        a = n.n(r),
        s = n(642128),
        o = n(442837),
        c = n(481060),
        u = n(596454),
        d = n(607070),
        m = n(70956),
        f = n(456631),
        p = n(890913);
      let h = 6 * m.Z.Millis.SECOND,
        g = 2 * m.Z.Millis.SECOND,
        v = 2 * m.Z.Millis.SECOND,
        S = (e) =>
          "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");
      function I(e) {
        let { userId: t, voiceChannelEffect: n, onComplete: r } = e,
          { emoji: m, sentAt: I } = n,
          x = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
          [_, C] = l.useState(!0),
          b = !x,
          E = (0, c.useTransition)(_, {
            from: { rotate: -120 },
            enter: { rotate: 0 },
            leave: { rotate: -120 },
            config: s.config.default,
            onRest: (e, t) => {
              let { phase: n } = t;
              "leave" === n && r();
            },
          });
        return (l.useEffect(() => {
          let e;
          return (
            Date.now() - I >= v
              ? (0, f.H)(t)
              : (e = setTimeout(
                  () => {
                    C(!1), b && (0, f.H)(t);
                  },
                  b ? g : h,
                )),
            () => {
              null != e && clearTimeout(e);
            }
          );
        }, [I, t, b]),
        b)
          ? null
          : E((e, t) => {
              var n;
              let { rotate: l } = e;
              return (
                t &&
                (0, i.jsx)(s.animated.div, {
                  className: p.voiceChannelEffectEmojiContainer,
                  style: { transform: l.to(S) },
                  children: (0, i.jsx)(u.Z, {
                    className: a()(p.voiceChannelEffectEmoji),
                    emojiId: m.id,
                    emojiName: m.name,
                    animated: null !== (n = m.animated) && void 0 !== n && n,
                  }),
                })
              );
            });
      }
    },
    878884: function (e, t, n) {
      "use strict";
      n(47120), n(724458);
      var i,
        l,
        r,
        a,
        s = n(442837),
        o = n(46973),
        c = n(570140),
        u = n(642047),
        d = n(189786),
        m = n(5192),
        f = n(592125),
        p = n(19780),
        h = n(594174),
        g = n(979651),
        v = n(938475),
        S = n(981631),
        I = n(354459);
      let x = new u.Z(),
        _ = new u.Z(),
        C = new Set();
      function b(e, t, n) {
        let i = new d.Z({ userId: e.id, channelId: n }),
          l = (0, v.PH)(i, null != t ? t : S.ME, e.id);
        x.set(e.id, l);
        let r = {
          type: I.fO.USER,
          user: e,
          id: e.id,
          streamId: null,
          voiceState: i,
          voicePlatform: null,
          speaking: !1,
          lastSpoke: 0,
          soundsharing: !1,
          ringing: !1,
          userNick: m.ZP.getName(t, n, e),
          localVideoDisabled: !1,
        };
        _.set(e.id, r);
      }
      function E(e) {
        let t = x.delete(e),
          n = _.delete(e),
          i = C.delete(e);
        return t || n || i;
      }
      function y() {
        var e;
        let t = p.Z.getChannelId();
        if (null == t) return !1;
        let n =
            null === (e = f.Z.getChannel(t)) || void 0 === e
              ? void 0
              : e.getGuildId(),
          i = !1;
        return (
          C.forEach((e) => {
            if (null != g.Z.getVoiceStateForChannel(t, e)) {
              C.delete(e);
              return;
            }
            let l = h.default.getUser(e);
            null != l && ((i = !0), C.delete(e), b(l, n, t));
          }),
          i
        );
      }
      function Z() {
        x.clear(), _.clear(), C.clear();
      }
      class T extends (i = s.ZP.Store) {
        initialize() {
          this.waitFor(g.Z, h.default, f.Z, p.Z), this.syncWith([h.default], y);
        }
        get desyncedVoiceStatesCount() {
          return x.size();
        }
        getDesyncedUserIds() {
          return x.keys();
        }
        getDesyncedVoiceStates() {
          return x.values();
        }
        getDesyncedParticipants() {
          return _.values();
        }
      }
      (a = "RTCConnectionDesyncStore"),
        (r = "displayName") in (l = T)
          ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = a),
        (t.Z = new T(c.Z, {
          CONNECTION_OPEN: function () {
            Z();
          },
          VOICE_CHANNEL_SELECT: Z,
          RTC_CONNECTION_STATE: function (e) {
            let { state: t, context: n } = e;
            if (n !== o.Yn.DEFAULT || t !== S.hes.DISCONNECTED) return !1;
            Z();
          },
          VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
              n = p.Z.getChannelId();
            return (
              null != n &&
              t.reduce((e, t) => {
                let { userId: i, channelId: l } = t;
                return (l === n && !!E(i)) || e;
              }, !1)
            );
          },
          RTC_CONNECTION_CLIENT_CONNECT: function (e) {
            let { userIds: t, guildId: n, channelId: i, context: l } = e;
            return (
              l === o.Yn.DEFAULT &&
              t.reduce((e, t) => {
                if (null != g.Z.getVoiceStateForChannel(i, t)) return e;
                let l = h.default.getUser(t);
                return null == l ? (C.add(t), e) : (b(l, n, i), !0);
              }, !1)
            );
          },
          RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
            let { userId: t, context: n } = e;
            return n === o.Yn.DEFAULT && E(t);
          },
        }));
    },
    254761: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(331595);
      function r(e) {
        let {
          width: t = 16,
          height: n = 16,
          color: r = "currentColor",
          foreground: a,
          ...s
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, l.Z)(s),
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
    889711: function (e, t, n) {
      "use strict";
      function i(e) {
        return new ResizeObserver(e);
      }
      function l(e, t) {
        e.observe(t);
      }
      function r(e, t) {
        e.unobserve(t);
      }
      n.d(t, {
        UC: function () {
          return r;
        },
        YP: function () {
          return l;
        },
        pP: function () {
          return i;
        },
      });
    },
    243718: function (e, t, n) {
      "use strict";
      n.r(
        (e.exports = {
          actionsStreamPreview: "actionsStreamPreview_dafd61",
          actionsProfile: "actionsProfile_dafd61",
          actionsProfileV2: "actionsProfileV2_dafd61",
          actionsSimplifiedProfile: "actionsSimplifiedProfile_dafd61",
          actionsActivityFeed: "actionsActivityFeed_dafd61",
          errorImage: "errorImage_dafd61",
          cannotLaunchImage: "cannotLaunchImage_dafd61 errorImage_dafd61",
          actionsUserPopoutV2: "actionsUserPopoutV2_dafd61",
          actionsUserPopout: "actionsUserPopout_dafd61",
          actionsVoiceChannel: "actionsVoiceChannel_dafd61",
          actionsBiteSizePopout: "actionsBiteSizePopout_dafd61",
          actionsWrapper: "actionsWrapper_dafd61",
        }),
      );
    },
    969577: function (e, t, n) {
      "use strict";
      e.exports = {
        textLeft: "textLeft_ec2fa7 text_ec2fa7",
        textRight: "textRight_ec2fa7 text_ec2fa7",
        bar: "bar_ec2fa7",
        barInMultiLine: "barInMultiLine_ec2fa7 bar_ec2fa7",
        barInner: "barInner_ec2fa7",
        themed: "themed_ec2fa7",
        singleLineContainer: "singleLineContainer_ec2fa7",
        barInSingleLine: "barInSingleLine_ec2fa7",
        textLeftInSingleLine:
          "textLeftInSingleLine_ec2fa7 textLeft_ec2fa7 text_ec2fa7",
      };
    },
    344782: function (e, t, n) {
      "use strict";
      n.r(
        (e.exports = {
          ellipsis: "ellipsis_c1d9fd",
          headerContainer: "headerContainer_c1d9fd",
          headerText: "headerText_c1d9fd",
          headerTextNormal:
            "headerTextNormal_c1d9fd headerText_c1d9fd ellipsis_c1d9fd",
          headerTextEmptyBody: "headerTextEmptyBody_c1d9fd headerText_c1d9fd",
          body: "body_c1d9fd",
          bodyNormal: "bodyNormal_c1d9fd body_c1d9fd",
          bodyAlignCenter: "bodyAlignCenter_c1d9fd body_c1d9fd",
          openGameProfile: "openGameProfile_c1d9fd",
          assets: "assets_c1d9fd",
          assetsHangStatus: "assetsHangStatus_c1d9fd",
          assetsLargeMaskStreamPreview: "assetsLargeMaskStreamPreview_c1d9fd",
          assetsLargeMaskVoiceChannel: "assetsLargeMaskVoiceChannel_c1d9fd",
          assetsLargeMaskActivityFeed: "assetsLargeMaskActivityFeed_c1d9fd",
          assetsLargeImage: "assetsLargeImage_c1d9fd",
          assetsLargeImageSpotify: "assetsLargeImageSpotify_c1d9fd",
          assetsLargeImageStreamPreview:
            "assetsLargeImageStreamPreview_c1d9fd assetsLargeImage_c1d9fd",
          assetsLargeImageStreamPreviewXbox:
            "assetsLargeImageStreamPreviewXbox_c1d9fd assetsLargeImage_c1d9fd",
          assetsLargeImageActivityFeed:
            "assetsLargeImageActivityFeed_c1d9fd assetsLargeImage_c1d9fd",
          assetsLargeImageActivityFeedXbox:
            "assetsLargeImageActivityFeedXbox_c1d9fd assetsLargeImage_c1d9fd",
          assetsLargeImageVoiceChannel:
            "assetsLargeImageVoiceChannel_c1d9fd assetsLargeImage_c1d9fd",
          assetsLargeImageActivityFeedTwitch:
            "assetsLargeImageActivityFeedTwitch_c1d9fd assetsLargeImage_c1d9fd",
          assetsSmallImage: "assetsSmallImage_c1d9fd",
          assetsSmallImageStreamPreview:
            "assetsSmallImageStreamPreview_c1d9fd assetsSmallImage_c1d9fd",
          assetsSmallImageVoiceChannel:
            "assetsSmallImageVoiceChannel_c1d9fd assetsSmallImage_c1d9fd",
          assetsSmallImageActivityFeed:
            "assetsSmallImageActivityFeed_c1d9fd assetsSmallImage_c1d9fd",
          assetsSmallImageStreamPreviewWithoutLargeImage:
            "assetsSmallImageStreamPreviewWithoutLargeImage_c1d9fd assetsLargeImage_c1d9fd",
          assetsSmallImageVoiceChannelWithoutLargeImage:
            "assetsSmallImageVoiceChannelWithoutLargeImage_c1d9fd assetsLargeImage_c1d9fd",
          assetsSmallImageActivityFeedWithoutLargeImage:
            "assetsSmallImageActivityFeedWithoutLargeImage_c1d9fd assetsLargeImage_c1d9fd",
          gameIcon: "gameIcon_c1d9fd",
          screenshareIcon: "screenshareIcon_c1d9fd",
          content: "content_c1d9fd",
          contentImagesStreamPreview:
            "contentImagesStreamPreview_c1d9fd content_c1d9fd",
          contentImagesVoiceChannel:
            "contentImagesVoiceChannel_c1d9fd content_c1d9fd",
          contentImagesActivityFeed:
            "contentImagesActivityFeed_c1d9fd content_c1d9fd",
          contentNoImagesVoiceChannel:
            "contentNoImagesVoiceChannel_c1d9fd content_c1d9fd",
          contentNoImagesStreamPreview:
            "contentNoImagesStreamPreview_c1d9fd content_c1d9fd",
          contentNoImagesActivityFeed:
            "contentNoImagesActivityFeed_c1d9fd content_c1d9fd",
          contentGameImageStreamPreview:
            "contentGameImageStreamPreview_c1d9fd content_c1d9fd",
          contentGameImageVoiceChannel:
            "contentGameImageVoiceChannel_c1d9fd content_c1d9fd",
          textRow: "textRow_c1d9fd",
          state: "state_c1d9fd ellipsis_c1d9fd textRow_c1d9fd",
          playTime: "playTime_c1d9fd ellipsis_c1d9fd textRow_c1d9fd",
          timestamp: "timestamp_c1d9fd ellipsis_c1d9fd textRow_c1d9fd",
          details: "details_c1d9fd ellipsis_c1d9fd textRow_c1d9fd",
          clickableDetails:
            "clickableDetails_c1d9fd ellipsis_c1d9fd textRow_c1d9fd",
          nameNormal: "nameNormal_c1d9fd ellipsis_c1d9fd textRow_c1d9fd",
          detailsWrap: "detailsWrap_c1d9fd textRow_c1d9fd",
          guildIcon: "guildIcon_c1d9fd",
          guildDetails: "guildDetails_c1d9fd",
          voiceChannelInfo: "voiceChannelInfo_c1d9fd",
          nameWrap: "nameWrap_c1d9fd textRow_c1d9fd",
          activityActivityFeed: "activityActivityFeed_c1d9fd",
          name: "name_c1d9fd",
          timeBarActivityFeed: "timeBarActivityFeed_c1d9fd",
          timeBarVoiceChannel: "timeBarVoiceChannel_c1d9fd",
          activityName: "activityName_c1d9fd",
          bodyLink: "bodyLink_c1d9fd activityName_c1d9fd",
          twitchImageContainer: "twitchImageContainer_c1d9fd",
          twitchImageOverlay: "twitchImageOverlay_c1d9fd",
          twitchBackgroundImage: "twitchBackgroundImage_c1d9fd",
          streamUsername: "streamUsername_c1d9fd",
          streamName: "streamName_c1d9fd",
          streamGame: "streamGame_c1d9fd",
          activityVoiceChannel: "activityVoiceChannel_c1d9fd",
          platformIcon: "platformIcon_c1d9fd",
          icon: "icon_c1d9fd",
          wrap: "wrap_c1d9fd",
          activityDetails: "activityDetails_c1d9fd",
          activityStreamPreview: "activityStreamPreview_c1d9fd",
        }),
      );
    },
    522832: function (e, t, n) {
      "use strict";
      e.exports = {
        buttonsWrapper: "buttonsWrapper_bf8eca",
        horizontal: "horizontal_bf8eca",
        vertical: "vertical_bf8eca",
      };
    },
    472113: function (e, t, n) {
      "use strict";
      e.exports = { button: "button_c6eb7b", buttonSize: "buttonSize_c6eb7b" };
    },
    542471: function (e, t, n) {
      "use strict";
      e.exports = { flex: "flex_c4746b", platformIcon: "platformIcon_c4746b" };
    },
    614774: function (e, t, n) {
      "use strict";
      e.exports = { button: "button_da7790" };
    },
    951908: function (e, t, n) {
      "use strict";
      e.exports = {
        streamIcon: "streamIcon_a2aefc",
        iconButton: "iconButton_a2aefc",
        iconButtonSize: "iconButtonSize_a2aefc",
        iconSize: "iconSize_a2aefc",
      };
    },
    26858: function (e, t, n) {
      "use strict";
      e.exports = {
        reactions: "reactions_d0fc0d",
        reply: "reply_d0fc0d",
        replyHeader: "replyHeader_d0fc0d",
        replyInput: "replyInput_d0fc0d",
        emojiButton: "emojiButton_d0fc0d",
        reaction: "reaction_d0fc0d",
      };
    },
    126741: function (e, t, n) {
      "use strict";
      e.exports = { menu: "menu_ce1f7d" };
    },
    972213: function (e, t, n) {
      "use strict";
      e.exports = {
        effectsWrapper: "effectsWrapper_efd99b",
        effects: "effects_efd99b",
      };
    },
    506800: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_d0fc80",
        chipletContainer: "chipletContainer_d0fc80",
        chipletParent: "chipletParent_d0fc80",
        usernameContainer: "usernameContainer_d0fc80",
        isOverlayContainer: "isOverlayContainer_d0fc80",
        noPadding: "noPadding_d0fc80",
        isOverlayTag: "isOverlayTag_d0fc80",
      };
    },
    680809: function (e, t, n) {
      "use strict";
      e.exports = {
        image: "image_ed81cc",
        emptyPreviewContainer: "emptyPreviewContainer_ed81cc",
        emptyPreviewImage: "emptyPreviewImage_ed81cc",
        emptyPreviewText: "emptyPreviewText_ed81cc",
      };
    },
    846450: function (e, t, n) {
      "use strict";
      e.exports = {
        body: "body_adbea6",
        streamPreviewWrapper: "streamPreviewWrapper_adbea6",
        mounted: "mounted_adbea6",
        streamPreview: "streamPreview_adbea6",
        previewContainer: "previewContainer_adbea6",
        previewHover: "previewHover_adbea6",
        previewImage: "previewImage_adbea6",
        activityActions: "activityActions_adbea6",
        protip: "protip_adbea6",
        white: "white_adbea6",
        watchButton: "watchButton_adbea6",
      };
    },
    891252: function (e, t, n) {
      "use strict";
      e.exports = {
        qualityIndicator: "qualityIndicator_c5881c",
        clickable: "clickable_c5881c",
        qualityIndicatorFullQuality: "qualityIndicatorFullQuality_c5881c",
        qualityIndicatorLowQuality: "qualityIndicatorLowQuality_c5881c",
        premiumStreamIcon: "premiumStreamIcon_c5881c",
        qualityResolution: "qualityResolution_c5881c",
        qualityIndicatorBadge: "qualityIndicatorBadge_c5881c",
        qualityIndicatorBadgePremium: "qualityIndicatorBadgePremium_c5881c",
        streamQualityIndicator: "streamQualityIndicator_c5881c",
        liveIndicator: "liveIndicator_c5881c",
        liveQualityIndicator: "liveQualityIndicator_c5881c",
      };
    },
    710453: function (e, t, n) {
      "use strict";
      e.exports = {
        root: "root_b1717f",
        highFive: "highFive_b1717f",
        waiting: "waiting_b1717f",
        completeLeft: "completeLeft_b1717f complete_b1717f",
        completeRight: "completeRight_b1717f complete_b1717f",
      };
    },
    435315: function (e, t, n) {
      "use strict";
      n.r(
        (e.exports = {
          wrapper: "wrapper_a5989d",
          video: "video_a5989d",
          videoCover: "videoCover_a5989d",
          videoContain: "videoContain_a5989d",
          mirror: "mirror_a5989d",
          previewWrapper: "previewWrapper_a5989d video_a5989d",
          loading: "loading_a5989d",
          previewImage: "previewImage_a5989d",
          emptyPreviewWrapper: "emptyPreviewWrapper_a5989d",
          emptyPreview: "emptyPreview_a5989d",
          spinner: "spinner_a5989d",
        }),
      );
    },
    932209: function (e, t, n) {
      "use strict";
      e.exports = {
        dismissButton: "dismissButton_a9614f",
        dismissIcon: "dismissIcon_a9614f",
      };
    },
    256403: function (e, t, n) {
      "use strict";
      e.exports = { key: "key_da7116" };
    },
    806128: function (e, t, n) {
      "use strict";
      e.exports = {
        errorNotificationContainer: "errorNotificationContainer_fb285e",
        errorNotificationWrapper: "errorNotificationWrapper_fb285e",
        errorClickNotification: "errorClickNotification_fb285e",
        stackTraceCode: "stackTraceCode_fb285e",
        code: "code_fb285e",
        notificationIcon: "notificationIcon_fb285e",
      };
    },
    608631: function (e, t, n) {
      "use strict";
      e.exports = {
        debugMode: "debugMode_f4091c",
        clickable: "clickable_f4091c",
      };
    },
    176463: function (e, t, n) {
      "use strict";
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
    81796: function (e, t, n) {
      "use strict";
      e.exports = { popout: "popout_a998c0", content: "content_a998c0" };
    },
    540538: function (e, t, n) {
      "use strict";
      e.exports = {
        demoEffectOverlay: "demoEffectOverlay_d61e21",
        demoEffectImg: "demoEffectImg_d61e21",
      };
    },
    848212: function (e, t, n) {
      "use strict";
      e.exports = { sharedCanvas: "sharedCanvas_dd2b1e" };
    },
    629257: function (e, t, n) {
      "use strict";
      e.exports = {
        playButtonInner: "playButtonInner_deca39",
        syncButton: "syncButton_deca39",
        syncButtonInner: "syncButtonInner_deca39",
      };
    },
    284902: function (e, t, n) {
      "use strict";
      e.exports = {
        streamInfoContainer: "streamInfoContainer_e6c3b6",
        infoRow: "infoRow_e6c3b6",
      };
    },
    262745: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_b13ff2",
        iframe: "iframe_b13ff2",
        clickShield: "clickShield_b13ff2",
        splashImage: "splashImage_b13ff2",
        splash: "splash_b13ff2",
        avatar: "avatar_b13ff2",
        subheader: "subheader_b13ff2",
        medium: "medium_b13ff2",
        small: "small_b13ff2",
        header: "header_b13ff2",
        buttons: "buttons_b13ff2",
        button: "button_b13ff2",
      };
    },
    995544: function (e, t, n) {
      "use strict";
      e.exports = {
        wrapper: "wrapper_ba4b17",
        ringing: "ringing_ba4b17",
        tile: "tile_ba4b17",
        idle: "idle_ba4b17",
        noInteraction: "noInteraction_ba4b17",
        tileChild: "tileChild_ba4b17",
        border: "border_ba4b17",
        voiceChannelEffect: "voiceChannelEffect_ba4b17",
        speaking: "speaking_ba4b17",
        noBorder: "noBorder_ba4b17",
        overlayContainer: "overlayContainer_ba4b17",
        overlayTop: "overlayTop_ba4b17",
        overlayBottom: "overlayBottom_ba4b17",
        overlayTitle: "overlayTitle_ba4b17",
        overlayTitleText: "overlayTitleText_ba4b17",
        overlayButton: "overlayButton_ba4b17",
        overlayButtonContainer: "overlayButtonContainer_ba4b17",
        titleIcon: "titleIcon_ba4b17",
        secureFramesIcon: "secureFramesIcon_ba4b17",
        statusContainer: "statusContainer_ba4b17",
        status: "status_ba4b17",
        interactive: "interactive_ba4b17",
        hangStatusContainer: "hangStatusContainer_ba4b17",
        hangStatusIcon: "hangStatusIcon_ba4b17",
        hangStatusSmall: "hangStatusSmall_ba4b17",
        videoDisabledTitle: "videoDisabledTitle_ba4b17",
        content: "content_ba4b17",
        streamPreview: "streamPreview_ba4b17",
        streamPreviewOpacity: "streamPreviewOpacity_ba4b17",
        indicators: "indicators_ba4b17",
        selectedScreen: "selectedScreen_ba4b17",
        toggleMute: "toggleMute_ba4b17",
        selectedIcon: "selectedIcon_ba4b17",
        localMuteStrikethrough: "localMuteStrikethrough_ba4b17",
        liveIndicator: "liveIndicator_ba4b17",
        addStreamIcon: "addStreamIcon_ba4b17",
        addCTA: "addCTA_ba4b17",
        absoluteFill: "absoluteFill_ba4b17",
        videoWrapper: "videoWrapper_ba4b17",
        blocked: "blocked_ba4b17",
        ignored: "ignored_ba4b17",
        blockedIcon: "blockedIcon_ba4b17",
        blockedAvatar: "blockedAvatar_ba4b17",
        small: "small_ba4b17",
        stopStreamIcon: "stopStreamIcon_ba4b17",
        darkCircle: "darkCircle_ba4b17",
        streamUnavailable: "streamUnavailable_ba4b17",
        streamUnavailableText: "streamUnavailableText_ba4b17",
        voiceChannelEffectsContainer: "voiceChannelEffectsContainer_ba4b17",
        stopStreamForeground: "stopStreamForeground_ba4b17",
      };
    },
    340665: function (e, t, n) {
      "use strict";
      e.exports = {
        tile: "tile_d737b4",
        tileSizer: "tileSizer_d737b4",
        root: "root_d737b4",
      };
    },
    712434: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_b02370",
        splash: "splash_b02370",
        splashImage: "splashImage_b02370",
        header: "header_b02370",
        medium: "medium_b02370",
        small: "small_b02370",
        subheader: "subheader_b02370",
        button: "button_b02370",
        buttons: "buttons_b02370",
      };
    },
    340534: function (e, t, n) {
      "use strict";
      e.exports = {
        hidden: "hidden_d9fa46",
        whiteFlash: "whiteFlash_d9fa46",
        movingImage: "movingImage_d9fa46",
      };
    },
    339445: function (e, t, n) {
      "use strict";
      e.exports = { root: "root_eb1d73", warningIcon: "warningIcon_eb1d73" };
    },
    939214: function (e, t, n) {
      "use strict";
      e.exports = {
        list: "list_d80634",
        listDefault: "listDefault_d80634",
        listCollapse: "listCollapse_d80634",
        voiceUser: "voiceUser_d80634",
        clickable: "clickable_d80634",
        content: "content_d80634",
        flipped: "flipped_d80634",
        userLarge: "userLarge_d80634",
        userSmall: "userSmall_d80634",
        avatarContainer: "avatarContainer_d80634",
        overlap: "overlap_d80634",
        avatar: "avatar_d80634",
        avatarSmall: "avatarSmall_d80634",
        avatarLarge: "avatarLarge_d80634",
        avatarSpeaking: "avatarSpeaking_d80634",
        username: "username_d80634",
        usernameFont: "usernameFont_d80634",
        icons: "icons_d80634",
        iconGroup: "iconGroup_d80634",
        icon: "icon_d80634",
        iconSpacing: "iconSpacing_d80634",
        liveIconSpacing: "liveIconSpacing_d80634",
        iconPriortySpeaker: "iconPriortySpeaker_d80634",
        iconServer: "iconServer_d80634",
        strikethrough: "strikethrough_d80634",
        hangStatusIcon: "hangStatusIcon_d80634",
        selected: "selected_d80634",
        clanTag: "clanTag_d80634",
        isOverlay: "isOverlay_d80634",
        usernameSpeaking: "usernameSpeaking_d80634",
        iconPriortySpeakerSpeaking: "iconPriortySpeakerSpeaking_d80634",
        disabled: "disabled_d80634",
        ringing: "ringing_d80634",
        guestSuffix: "guestSuffix_d80634",
      };
    },
    890913: function (e, t, n) {
      "use strict";
      e.exports = {
        voiceChannelEffectEmojiContainer:
          "voiceChannelEffectEmojiContainer_b4f8d6",
        voiceChannelEffectEmoji: "voiceChannelEffectEmoji_b4f8d6",
      };
    },
  },
]);
//# sourceMappingURL=ac784adf1d5683bff2da.js.map
