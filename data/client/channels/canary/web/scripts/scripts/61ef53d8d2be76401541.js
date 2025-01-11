(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67762"],
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
    717881: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return R;
        },
      });
      var i = n(200651),
        l = n(192379),
        a = n(120356),
        r = n.n(a),
        s = n(442837),
        o = n(481060),
        c = n(620662),
        u = n(841784),
        d = n(387903),
        m = n(850827),
        f = n(812206),
        p = n(202458),
        g = n(220779),
        h = n(142550),
        v = n(954017),
        S = n(314091),
        I = n(159244),
        _ = n(574176),
        x = n(952164),
        E = n(199902),
        C = n(592125),
        Z = n(430824),
        y = n(496675),
        b = n(979651),
        T = n(626135),
        A = n(153066),
        N = n(981631),
        w = n(388032),
        j = n(243718);
      function P(e) {
        let {
          type: t,
          source: n,
          activity: l,
          applicationStream: a,
          user: r,
          guildId: s,
          channelId: c,
          onAction: d,
          isEmbedded: f = (0, u.Z)(l),
          actionColor: p,
        } = e;
        return (0, i.jsx)(m.Z, {
          className: (0, A.l)(j, "actions", t),
          type: t,
          source: n,
          activity: l,
          applicationStream: a,
          user: r,
          guildId: s,
          look: o.Button.Looks.FILLED,
          color: null != p ? p : o.Button.Colors.PRIMARY,
          channelId: c,
          onAction: d,
          isEmbedded: f,
        });
      }
      let R = d.Z.Types;
      t.Z = function (e) {
        let {
            activity: t,
            user: n,
            useStoreStream: a = !0,
            showActions: o = !0,
            hideHeader: u = !1,
            showChannelDetails: m = !1,
            analyticsParams: A,
            ...R
          } = e,
          M = (0, s.e7)([b.Z, C.Z], () => {
            var e;
            return C.Z.getChannel(
              null === (e = b.Z.getVoiceStateForUser(n.id)) || void 0 === e
                ? void 0
                : e.channelId,
            );
          }),
          { enableHangStatus: O } = _.n.useExperiment(
            {
              guildId: null == M ? void 0 : M.guild_id,
              location: "UserActivityContainer",
            },
            { autoTrackExposure: !1 },
          ),
          L = (0, s.e7)([E.Z], () =>
            a ? E.Z.getAnyStreamForUser(n.id) : null,
          ),
          k = O && y.Z.can(N.Plq.CONNECT, M),
          D =
            (null == t ? void 0 : t.type) === N.IIU.HANG_STATUS && k ? M : null,
          U = (0, s.e7)([Z.Z, b.Z, C.Z], () => {
            var e, i;
            return (0, c.Z)(t, N.xjy.EMBEDDED)
              ? Z.Z.getGuild(
                  null ===
                    (e = C.Z.getChannel(
                      null ===
                        (i = b.Z.getVoiceStateForSession(
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
                ? Z.Z.getGuild(D.getGuildId())
                : null;
          }),
          V = (0, s.e7)([Z.Z], () =>
            null != L ? Z.Z.getGuild(L.guildId) : null,
          ),
          F = (0, s.e7)([f.Z], () => {
            if (null != t)
              return null != t.application_id
                ? f.Z.getApplication(t.application_id)
                : f.Z.getApplicationByName(t.name);
            return null;
          }),
          W = (0, p.Z)(),
          B = (0, I.Z)(n),
          G = W && null != t && B;
        return (l.useEffect(() => {
          (null == t ? void 0 : t.type) === N.IIU.HANG_STATUS &&
            k &&
            T.default.track(N.rMx.VIEW_HANG_STATUS, {
              source: "UserProfilePopout",
              guild_id: null == D ? void 0 : D.guild_id,
              channel_id: null == D ? void 0 : D.id,
            });
        }, [null == t ? void 0 : t.type, k, D]),
        (null == t ? void 0 : t.type) !== N.IIU.HANG_STATUS || k)
          ? (0, i.jsx)(d.Z, {
              ...R,
              activity: t,
              user: n,
              application: F,
              hideHeader: u,
              activityGuild: null != U ? U : V,
              showReactions: G,
              showChannelDetails: m,
              channel: m ? M : void 0,
              renderActions: o
                ? () =>
                    (0, i.jsxs)("div", {
                      className: r()(G && j.actionsWrapper),
                      children: [
                        (0, i.jsx)(P, {
                          ...R,
                          applicationStream: L,
                          activity: t,
                          user: n,
                        }),
                        G &&
                          (0, i.jsx)(g.ZP, {
                            showReact: !0,
                            showReply: !0,
                            popoutProps: {
                              replyHeaderText: w.intl.formatToPlainString(
                                w.t["1JSA19"],
                                { activity: t.name },
                              ),
                              replyPlaceholder: w.intl.formatToPlainString(
                                w.t["8lzR/f"],
                                { channel: "@".concat(n.globalName) },
                              ),
                            },
                            onInteraction: (e) => {
                              let {
                                interactionType: i,
                                emoji: l,
                                reply: a,
                              } = e;
                              T.default.track(
                                N.rMx.ACTIVITY_REACTOR_INTERACTED,
                                {
                                  application_id: t.application_id,
                                  interaction_type: i,
                                  ...A,
                                },
                              ),
                                i === h.L.ReactSubmit &&
                                  null != l &&
                                  (0, v.sendReactionToActivity)({
                                    reaction: l,
                                    user: n,
                                    activity: t,
                                    application: F,
                                    altText: (0, S.xC)(n, t),
                                    stream: L,
                                  }),
                                i === h.L.ReplySubmit &&
                                  null != a &&
                                  (0, v.sendReplyToActivity)({
                                    reply: a,
                                    user: n,
                                    activity: t,
                                    application: F,
                                    altText: (0, S.xC)(n, t),
                                    stream: L,
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
          return g;
        },
      }),
        n(411104),
        n(47120);
      var i,
        l,
        a,
        r,
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
      ((a = i || (i = {})).ACTIVITY_FEED = "ACTIVITY_FEED"),
        (a.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW"),
        (a.USER_ACTIVITY = "USER_ACTIVITY"),
        (a.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED"),
        (a.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED"),
        ((r = l || (l = {})).START = "START"),
        (r.END = "END"),
        (r.TIME = "TIME");
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
      function g(e) {
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
                { time: a } = this.state,
                r = this.getType();
              if (null == r) return null;
              let o = this.getTimeUnit(a, t, r),
                u = p[t][r];
              if (null == u) return null;
              let d = u[o],
                m = Math.floor((0, c.A3)(a, o));
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
        a = n(846519),
        r = n(388032);
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
              { hours: l, minutes: a, seconds: s } = this.state,
              o = {
                hours: this.renderTime(l, !0),
                minutes: this.renderTime(a),
                seconds: this.renderTime(s),
              };
            return null != t.end
              ? (0, i.jsx)(e, {
                  ...n,
                  message: r.intl.formatToPlainString(r.t["I/J7vL"], o),
                })
              : null != t.start
                ? (0, i.jsx)(e, {
                    ...n,
                    message: r.intl.formatToPlainString(r.t.M9Fexc, o),
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
              (this._interval = new a.Xp()),
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
        a = n(709014);
      let r = {
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
                (0, i.jsx)(a.L, {
                  ...e,
                  src: () => n.e("410").then(n.t.bind(n, 992285, 19)),
                  ref: t,
                  initialAnimation: s.current,
                  markers: r,
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
        a = n(709014);
      let r = { all: { name: "all", start: 0, duration: 66 } },
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
                (0, i.jsx)(a.L, {
                  ...t,
                  src: () => n.e("66944").then(n.t.bind(n, 166174, 19)),
                  ref: e,
                  markers: r,
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
          return r;
        },
      });
      var i = n(192379),
        l = n(237617),
        a = n(889711);
      function r(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          n = (0, i.useRef)(null),
          r = (0, i.useRef)(null),
          s = (0, l.Z)(() => e(n.current));
        return (
          (0, i.useLayoutEffect)(() => {
            if (!t) return;
            null == r.current && (r.current = (0, a.pP)(s.current));
            let e = n.current,
              i = r.current;
            if (null != e && null != i) (0, a.YP)(i, e);
          }, [t, e, s]),
          (0, i.useEffect)(() => {
            if (!t) return;
            let e = n.current,
              i = r.current;
            if (null != e && null != i)
              return () => {
                (0, a.UC)(i, e);
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
          return h;
        },
      }),
        n(47120);
      var i,
        l,
        a = n(259443),
        r = n(379649),
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
      let g = new Map();
      class h {
        onSpinnerStarted() {
          null == this.spinnerVisibleStart &&
            (this.spinnerVisibleStart = (0, r.zO)());
        }
        trackSpinnerDuration(e, t, n) {
          if (null == this.spinnerVisibleStart) return;
          let i = (function (e) {
              var t;
              let n = (null !== (t = g.get(e)) && void 0 !== t ? t : 0) + 1;
              return g.set(e, n), n;
            })(n),
            l = (0, r.zO)() - this.spinnerVisibleStart;
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
          let a = u.Z.getGuildId(),
            p = d.Z.getUserVoiceChannelId(a, s.default.getId()),
            h = (function (e) {
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
            guild_id: a,
            channel_id: p,
            channel_type: h,
            spinning_user_id: t,
            connection_type: c.Z.getType(),
            effective_connection_speed: c.Z.getEffectiveConnectionSpeed(),
            service_provider: c.Z.getServiceProvider(),
          });
        }
        constructor(e) {
          p(this, "logger", void 0),
            p(this, "spinnerVisibleStart", null),
            (this.logger = new a.Yd(e));
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
        a = n(981631),
        r = n(388032);
      function s(e) {
        var t;
        let n = null !== (t = (0, l.Z)(e)) && void 0 !== t ? t : "";
        switch (n) {
          case a.M7m.PS4:
          case a.M7m.PS5:
            return r.intl.formatToPlainString(r.t.A17aMz, {
              platform: n.toUpperCase(),
            });
          case a.M7m.XBOX:
          case a.M7m.SAMSUNG:
            return r.intl.formatToPlainString(r.t.A17aMz, {
              platform: i.Z.get(n).name,
            });
          default:
            return r.intl.string(r.t["2TbM/P"]);
        }
      }
    },
    39628: function (e, t, n) {
      "use strict";
      n(47120);
      var i,
        l = n(200651),
        a = n(192379),
        r = n(120356),
        s = n.n(r),
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
          a = Math.floor(t / 3600);
        return 0 === a
          ? n
            ? "".concat(f(l), ":").concat(f(i))
            : "".concat(l, ":").concat(f(i))
          : n
            ? "".concat(f(a), ":").concat(f(l), ":").concat(f(i))
            : "".concat(a, ":").concat(f(l), ":").concat(f(i));
      }
      class g extends (i = a.PureComponent) {
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
              singleLine: a = !1,
            } = this.props,
            { now: r } = this.state,
            o = (t - e) / 1e3,
            d = Math.max(Math.min((r - e) / 1e3, o), 0);
          return a
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
      d(g, "defaultProps", { themed: !1 }), (t.Z = g);
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
        a = n(442837),
        r = n(570140),
        s = n(519938),
        o = n(928518),
        c = n(585483),
        u = n(317381),
        d = n(16609),
        m = n(917107),
        f = n(716600),
        p = n(918559),
        g = n(981631);
      let h = (e, t) => {
        r.Z.wait(() => {
          (0, s.Cz)(e, t);
        });
      };
      function v(e) {
        let t,
          { embedId: n, className: r, style: s } = e,
          v = (0, a.e7)([o.Z], () => o.Z.getWindow(g.KJ3.CHANNEL_CALL_POPOUT)),
          S = (0, f.Z)(),
          I = (0, a.e7)([u.ZP], () => u.ZP.getActivityPanelMode());
        if (null != S && !(0, m.Z)((0, d.p)(S.location)) && I === p.Ez.PANEL)
          t = window;
        else {
          var _;
          t =
            null !== (_ = null == v ? void 0 : v.window) && void 0 !== _
              ? _
              : window;
        }
        let x = l.useRef(null),
          E = l.useMemo(() => {
            let e = null;
            return () => {
              null == e &&
                (e = t.requestAnimationFrame(() => {
                  var t, i;
                  h(
                    n,
                    null !==
                      (i =
                        null === (t = x.current) || void 0 === t
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
              t.addEventListener("resize", E),
              c.S.subscribe(g.CkL.REMEASURE_TARGET, E),
              () => {
                t.removeEventListener("resize", E),
                  c.S.unsubscribe(g.CkL.REMEASURE_TARGET, E);
              }
            ),
            [E, t],
          ),
          l.useLayoutEffect(() => {
            let e = x.current;
            if (null == e) return;
            let t = e.ownerDocument.defaultView;
            if (null == t) return;
            E();
            let i = new t.ResizeObserver(E);
            return (
              i.observe(e),
              () => {
                i.disconnect(), h(n, null);
              }
            );
          }, [n, E]),
          (0, i.jsx)("div", { ref: x, style: s, className: r })
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
        a,
        r = n(200651),
        s = n(192379),
        o = n(120356),
        c = n.n(o),
        u = n(512722),
        d = n.n(u),
        m = n(780384),
        f = n(481060),
        p = n(438139),
        g = n(410030),
        h = n(726542),
        v = n(600164),
        S = n(686546),
        I = n(111028),
        _ = n(925329),
        x = n(810568),
        E = n(168524),
        C = n(565138),
        Z = n(833858),
        y = n(223135),
        b = n(707409),
        T = n(769654),
        A = n(424678),
        N = n(750154),
        w = n(768581),
        j = n(630388),
        P = n(153066),
        R = n(740265),
        M = n(122810),
        O = n(833664),
        L = n(503438),
        k = n(802856),
        D = n(420660),
        U = n(39628),
        V = n(701488),
        F = n(981631),
        W = n(388032),
        B = n(344782);
      function G(e, t, n) {
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
      ((a = i || (i = {})).ACTIVITY_FEED = "ActivityFeed"),
        (a.STREAM_PREVIEW = "StreamPreview"),
        (a.VOICE_CHANNEL = "VoiceChannel");
      let z = {
          StreamPreview: [108, 60],
          VoiceChannel: [108, 60],
          ActivityFeed: [900, 500],
        },
        { getAssetImage: H } = n(81063),
        Y = (0, p.Z)(
          class extends s.PureComponent {
            render() {
              return (0, r.jsx)("div", {
                className: B.timestamp,
                children: this.props.message,
              });
            }
          },
        );
      function J(e) {
        let { activity: t } = e,
          n = (0, g.ZP)(),
          i = (function (e) {
            let { activity: t } = e,
              n = null;
            return (
              (0, L.Z)(t) && (n = F.ABu.SPOTIFY),
              null != t.platform &&
                [F.M7m.PS4, F.M7m.PS5].includes(t.platform) &&
                (n = F.ABu.PLAYSTATION),
              n
            );
          })({ activity: t });
        if (null == i) return null;
        let l = h.Z.get(i);
        return (0, r.jsx)("img", {
          alt: "",
          src: (0, m.ap)(n) ? l.icon.lightSVG : l.icon.darkSVG,
          className: B.platformIcon,
        });
      }
      class q extends (l = s.PureComponent) {
        get activity() {
          let { activity: e, activityGuild: t } = this.props;
          return null != t &&
            (null == e ? void 0 : e.type) !== F.IIU.PLAYING &&
            (null == e ? void 0 : e.type) !== F.IIU.WATCHING &&
            (null == e ? void 0 : e.type) !== F.IIU.LISTENING &&
            (null == e ? void 0 : e.type) !== F.IIU.HANG_STATUS
            ? { type: F.IIU.PLAYING, name: W.intl.string(W.t.eXan7O) }
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
              renderHeaderAccessory: a,
            } = this.props,
            s = this.activity;
          if (n || null == s) return null;
          let { name: o } = s;
          switch (s.type) {
            case F.IIU.STREAMING:
              t = W.intl.formatToPlainString(W.t.Dzgz4u, {
                platform: [F.ABu.TWITCH, F.ABu.YOUTUBE].includes(
                  o.toLowerCase(),
                )
                  ? o
                  : h.Z.get(F.ABu.TWITCH).name,
              });
              break;
            case F.IIU.LISTENING:
              t = W.intl.formatToPlainString(W.t["5sYPnp"], { name: o });
              break;
            case F.IIU.WATCHING:
              t = W.intl.formatToPlainString(W.t.Ge29Z2, { name: o });
              break;
            case F.IIU.PLAYING:
              t = (0, R.Z)(s);
              break;
            case F.IIU.COMPETING:
              t = W.intl.formatToPlainString(W.t.SQCo6O, { name: o });
          }
          if (null != i) {
            var u;
            t = (0, j.yE)(
              null !== (u = null == s ? void 0 : s.flags) && void 0 !== u
                ? u
                : 0,
              F.xjy.EMBEDDED,
            )
              ? s.type === F.IIU.WATCHING
                ? W.intl.formatToPlainString(W.t["M/L8oq"], {
                    guildName: i.name,
                  })
                : W.intl.formatToPlainString(W.t["4chKQk"], {
                    guildName: i.name,
                  })
              : W.intl.formatToPlainString(W.t.sddlGB, { server: i.name });
          }
          return (
            (null == s ? void 0 : s.type) === F.IIU.HANG_STATUS &&
              (t = W.intl.string(W.t["74vS//"])),
            (0, r.jsxs)("div", {
              className: B.headerContainer,
              children: [
                (0, r.jsx)(f.Heading, {
                  className: c()(
                    (0, P.l)(B, "headerText", e ? "EmptyBody" : "Normal"),
                  ),
                  variant: l ? "text-xs/semibold" : "eyebrow",
                  children: (0, r.jsx)(I.Z, { children: t }),
                }),
                null == a ? void 0 : a(),
              ],
            })
          );
        }
        renderXboxImage() {
          return (0, r.jsx)("div", {
            className: B.assets,
            children: (0, r.jsx)("img", {
              alt: "",
              src: h.Z.get(F.ABu.XBOX).icon.customPNG,
              className: c()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
          });
        }
        renderImage(e) {
          var t, n, i;
          let l, a;
          if (e.type === F.IIU.HANG_STATUS)
            return (0, r.jsx)("div", {
              className: B.assets,
              children: (0, r.jsx)(y.Z, {
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
          (0, D.Z)(e) && (l = z[o]);
          let m = (0, L.Z)(e),
            p =
              null != u.large_image
                ? (0, r.jsx)("img", {
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
            p = (0, r.jsx)(f.Anchor, {
              onClick: this.handleOpenSpotifyAlbum,
              children: p,
            });
          else if ((0, N.dS)(e)) {
            let t = (0, N.rq)(e);
            if (null == t) return null;
            p = (0, r.jsx)(S.ZP, {
              mask: S.ZP.Masks.SQUIRCLE,
              width: V.Si.SMALL,
              height: V.Si.SMALL,
              children: (0, r.jsx)("img", {
                src:
                  null !==
                    (i = w.ZP.getGuildIconURL({
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
            (p = (0, r.jsxs)("div", {
              className: B.twitchImageContainer,
              children: [
                (0, r.jsxs)("div", {
                  className: B.twitchImageOverlay,
                  children: [
                    (0, r.jsx)(f.H, {
                      className: B.streamName,
                      children: e.name,
                    }),
                    (0, r.jsx)("div", {
                      className: B.streamGame,
                      children: W.intl.format(W.t.gmCZRU, { game: e.details }),
                    }),
                  ],
                }),
                (0, r.jsx)(f.Anchor, {
                  className: B.twitchBackgroundImage,
                  href: e.url,
                  children: p,
                }),
              ],
            })),
          !(0, N.dS)(e) &&
            null != u.small_image &&
            (a = (0, r.jsx)(f.Tooltip, {
              text: "" !== u.small_text ? u.small_text : null,
              position: "top",
              children: (e) => {
                var t;
                return (0, r.jsx)("img", {
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
            ? (0, r.jsx)("div", { className: B.assets, children: a })
            : (0, r.jsxs)("div", {
                className: B.assets,
                children: [
                  (0, r.jsx)(f.Tooltip, {
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
                  a,
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
            (0, M.Z)(e) ||
            e.type !== F.IIU.PLAYING ||
            "ActivityFeed" === n ||
            t.bot
            ? null
            : null == i && null != l
              ? (0, r.jsx)("div", {
                  className: c()(B.gameIcon, B.screenshareIcon),
                })
              : (0, r.jsx)(_.Z, { className: B.gameIcon, game: i });
        }
        renderName(e) {
          let { user: t, application: n, hideName: i } = this.props;
          if (i) return null;
          let { details: l, type: a } = e;
          if (a === F.IIU.CUSTOM_STATUS) return null;
          let s = (0, O.Z)(e),
            o = e.name,
            u = o;
          return (a === F.IIU.HANG_STATUS
            ? (u = (0, Z.O8)(e))
            : s && null != n
              ? (u = (0, r.jsx)("span", {
                  className: B.activityName,
                  children: u,
                }))
              : !s &&
                ((o = l),
                (u = l),
                (0, L.Z)(e) && null != e.sync_id && null != l
                  ? (u = (0, r.jsx)(f.Anchor, {
                      className: B.bodyLink,
                      onClick: this.handleOpenSpotifyTrack,
                      children: l,
                    }))
                  : (0, N.dS)(e) && (u = e.name)),
          null == u)
            ? null
            : (0, r.jsx)(f.Text, {
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
            a = n,
            s = n;
          if (e.type === F.IIU.CUSTOM_STATUS) a = i;
          else if (e.type === F.IIU.HANG_STATUS)
            (a =
              null != l
                ? W.intl.formatToPlainString(W.t.IAZiW1, { guildName: l.name })
                : void 0),
              (t =
                null != l
                  ? () => {
                      (0, T.X)(l.id);
                    }
                  : void 0);
          else if (!(0, O.Z)(e)) {
            if (((a = i), (s = i), (0, L.Z)(e) && null != i))
              a = W.intl.format(W.t.uU9le3, {
                artists: s,
                artistsHook: (t, n) =>
                  (0, r.jsx)(
                    A.Z,
                    {
                      artists: i,
                      linkClassName: B.bodyLink,
                      canOpen: null != e.sync_id,
                      onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                    },
                    n,
                  ),
              });
            else if ((0, N.dS)(e)) {
              var o;
              a =
                null === (o = e.assets) || void 0 === o ? void 0 : o.small_text;
            }
          }
          return null == a || "" === a
            ? null
            : ((0, D.Z)(e) &&
                  (a = W.intl.formatToPlainString(W.t.gmCZRU, { game: a })),
                null != t)
              ? (0, r.jsx)(f.Clickable, {
                  onClick: t,
                  title: null != s ? s : void 0,
                  className: B.clickableDetails,
                  children: a,
                })
              : (0, r.jsx)("div", {
                  title: null != s ? s : void 0,
                  className:
                    (0, D.Z)(e) || (0, L.Z)(e) ? B.detailsWrap : B.details,
                  children: a,
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
              ? (0, r.jsx)("div", {
                  className:
                    (0, D.Z)(e) || (0, L.Z)(e) ? B.detailsWrap : B.details,
                  children: W.intl.format(W.t["hq/Qzc"], { guildName: t.name }),
                })
              : (0, r.jsxs)("div", {
                  className: c()(
                    (0, D.Z)(e) || (0, L.Z)(e) ? B.detailsWrap : B.details,
                    B.guildDetails,
                  ),
                  children: [
                    (0, r.jsx)(C.Z, {
                      guild: t,
                      size: C.Z.Sizes.SMOL,
                      className: B.guildIcon,
                    }),
                    (0, r.jsx)(f.ChevronSmallRightIcon, {
                      size: "xxs",
                      color: "currentColor",
                    }),
                    (0, r.jsxs)("div", {
                      className: B.voiceChannelInfo,
                      children: [
                        (0, r.jsx)(f.VoiceNormalIcon, {
                          size: "xxs",
                          color: "currentColor",
                        }),
                        (0, r.jsx)(f.Text, {
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
          if (!(0, O.Z)(e) || (0, L.Z)(e)) return null;
          let { timestamps: n } = e;
          return null == n
            ? null
            : (0, M.Z)(e)
              ? (0, r.jsx)(Y, { timestamps: n })
              : (0, r.jsx)(b.ZP, {
                  start: n.start,
                  location: b.ZP.Locations.USER_ACTIVITY,
                  className: B.playTime,
                  isApplicationStreaming: null != t,
                });
        }
        renderTimeBar(e) {
          if (!(0, L.Z)(e)) return null;
          let { timestamps: t } = e;
          if (null == t) return null;
          let { start: n, end: i } = t;
          return null == n || null == i
            ? null
            : (0, r.jsx)(U.Z, {
                start: n,
                end: i,
                className: this.getTypeClass("timeBar"),
                themed: "VoiceChannel" === this.props.type,
              });
        }
        renderState(e, t) {
          var n, i;
          let l;
          let { state: a, party: s, assets: o } = e,
            c = a,
            u = a;
          return (!(0, O.Z)(e) &&
            ((c = null == o ? void 0 : o.large_text),
            (u = null == o ? void 0 : o.large_text),
            (0, L.Z)(e) &&
              null != c &&
              (c = W.intl.format(W.t.vOLBEx, {
                album: u,
                albumHook: (t, n) =>
                  null != e.sync_id && null != u
                    ? (0, r.jsx)(
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
            (0, N.dS)(e))
            ? ((null == s ? void 0 : s.size) == null &&
              [V.Zc].includes(
                null !== (n = e.application_id) && void 0 !== n ? n : "",
              )
                ? (l = W.intl.formatToPlainString(W.t["u//9Bw"], {
                    count: "0",
                    max:
                      null !==
                        (i = null == t ? void 0 : t.getMaxParticipants()) &&
                      void 0 !== i
                        ? i
                        : 0,
                  }))
                : (0, N.dS)(e) && (null == s ? void 0 : s.size) != null
                  ? (l = W.intl.formatToPlainString(W.t["JC/3x8"], {
                      numSpeakers: s.size[0],
                      numListeners: s.size[1] - s.size[0],
                    }))
                  : (null == s ? void 0 : s.size) != null &&
                    s.size.length >= 2 &&
                    (l = W.intl.formatToPlainString(W.t["u//9Bw"], {
                      count: s.size[0],
                      max: s.size[1],
                    })),
              (0, r.jsxs)("div", {
                className: B.state,
                children: [
                  (0, r.jsx)("span", { title: u, children: c }),
                  null != l
                    ? (0, r.jsxs)("span", { children: [" ", l] })
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
              showReactions: a,
              onClose: s,
              onOpenGameProfileModal: o,
            } = this.props,
            u = this.activity;
          if (null == u || u.type === F.IIU.CUSTOM_STATUS) return null;
          let d = "ActivityFeed" === t,
            m = "StreamPreview" === t,
            p = !1;
          (0, k.Z)(u)
            ? ((e = this.renderXboxImage()), (p = !0))
            : null == (e = this.renderImage(u)) &&
              (p = null != (e = this.renderGameImage(u)));
          let g = this.renderName(u),
            h = this.renderDetails(u),
            S = this.renderState(u, l),
            I = this.renderTimePlayed(u),
            _ = this.renderChannelDetails(u),
            x = null != n ? n() : null,
            E = this.renderTimeBar(u),
            C = ![e, g, h, S, I, E, x].some((e) => null != e);
          return (0, r.jsxs)("div", {
            className: c()(this.getTypeClass("activity"), i),
            children: [
              this.renderHeader(C),
              (0, r.jsx)("div", {
                className: c()(
                  p ? B.bodyAlignCenter : B.bodyNormal,
                  a && !m && B.wrap,
                ),
                children: (0, r.jsxs)("div", {
                  className: B.activityDetails,
                  children: [
                    e,
                    this.isStreamerOnTypeActivityFeed()
                      ? null
                      : (0, r.jsxs)(v.Z.Child, {
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
                            (0, r.jsxs)(f.Clickable, {
                              className: c()(null != o && B.openGameProfile),
                              onClick:
                                null != o
                                  ? (e) => {
                                      o(e), null == s || s();
                                    }
                                  : void 0,
                              children: [g, h, S, I],
                            }),
                            _,
                            m ? null : E,
                            d ? x : null,
                          ],
                        }),
                  ],
                }),
              }),
              m ? x : null,
              (0, r.jsx)(J, { activity: u }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            G(this, "handleOpenSpotifyTrack", () => {
              let { activity: e, onOpenSpotifyTrack: t } = this.props;
              d()(null != e, "Spotify activity was null"), null == t || t(e);
            }),
            G(this, "handleOpenSpotifyArtist", (e) => {
              let { activity: t, onOpenSpotifyArtist: n, user: i } = this.props;
              d()(null != t, "Spotify activity was null"),
                null == n || n(t, i.id, e);
            }),
            G(this, "handleOpenSpotifyAlbum", () => {
              let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
              d()(null != e, "Spotify activity was null"),
                null == t || t(e, n.id);
            });
        }
      }
      G(q, "Types", i);
      let X = (e) => {
        var t, n, i;
        let l = (0, E.Z)({
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
          source: x.m1.UserProfile,
          sourceUserId: e.user.id,
          trackEntryPointImpression: !0,
        });
        return (0, r.jsx)(q, { ...e, onOpenGameProfileModal: l });
      };
      (X.Types = i), (t.Z = X);
    },
    850827: function (e, t, n) {
      "use strict";
      var i = n(200651);
      n(192379);
      var l = n(120356),
        a = n.n(l),
        r = n(512722),
        s = n.n(r),
        o = n(442837),
        c = n(481060),
        u = n(730749),
        d = n(726542),
        m = n(600164),
        f = n(750154),
        p = n(592125),
        g = n(594174),
        h = n(979651),
        v = n(374129),
        S = n(639351),
        I = n(503438),
        _ = n(802856),
        x = n(387903),
        E = n(606925),
        C = n(719216),
        Z = n(429589),
        y = n(276149),
        b = n(636245),
        T = n(697761),
        A = n(611459),
        N = n(544671),
        w = n(757182),
        j = n(910424),
        P = n(981631),
        R = n(522832);
      t.Z = (0, u.Z)((e) => {
        let {
            activity: t,
            embeddedActivity: n,
            user: l,
            applicationStream: r,
            className: u,
            guildId: M,
            channelId: O,
            source: L,
            color: k = c.Button.Colors.WHITE,
            look: D = c.Button.Looks.OUTLINED,
            type: U,
            onAction: V,
            isEmbedded: F = !1,
          } = e,
          W = (0, o.e7)([g.default], () => {
            let e = g.default.getCurrentUser();
            return (
              s()(
                null != e,
                "UserActivityActions: currentUser cannot be undefined",
              ),
              e
            );
          }),
          B = U === x.Y.STREAM_PREVIEW || null != r,
          G = (0, I.Z)(t),
          z = G || B ? m.Z.Direction.HORIZONTAL : m.Z.Direction.VERTICAL,
          H = (null == t ? void 0 : t.type) === P.IIU.HANG_STATUS,
          Y = (0, o.e7)([h.Z, p.Z], () => {
            var e;
            return H
              ? p.Z.getChannel(
                  null === (e = h.Z.getVoiceStateForUser(l.id)) || void 0 === e
                    ? void 0
                    : e.channelId,
                )
              : null;
          }),
          J = z === m.Z.Direction.VERTICAL;
        return (0, i.jsx)(m.Z, {
          grow: 0,
          align: m.Z.Align.STRETCH,
          direction: z,
          wrap: J ? m.Z.Wrap.WRAP : m.Z.Wrap.NO_WRAP,
          className: a()(u, R.buttonsWrapper, J ? R.vertical : R.horizontal),
          children: (() => {
            if ((0, _.Z)(t))
              return (0, i.jsx)(
                E.Z,
                {
                  platform: d.Z.get(P.ABu.XBOX),
                  look: D,
                  color: k,
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
                E.Z,
                {
                  look: D,
                  color: k,
                  platform: d.Z.get(P.ABu.PLAYSTATION),
                  onAction: V,
                  Icon: v.Z,
                },
                "ConnectPlatformActivityButton",
              );
            if (G) {
              let e = (0, i.jsx)(
                  N.Z,
                  {
                    activity: t,
                    user: l,
                    guildId: M,
                    channelId: O,
                    source: L,
                    look: D,
                    color: k,
                    onAction: V,
                  },
                  "spotify-activity-sync-button",
                ),
                n = (0, i.jsx)(
                  A.Z,
                  {
                    activity: t,
                    user: l,
                    source: L,
                    look: D,
                    color: k,
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
                    b.Z,
                    {
                      guildId: e.guildId,
                      channelId: e.channelId,
                      color: k,
                      look: D,
                      onAction: V,
                    },
                    e.channelId,
                  );
            }
            return B
              ? (0, i.jsx)(
                  j.Z,
                  {
                    isCurrentUser: W.id === l.id,
                    color: k,
                    look: D,
                    applicationStream: r,
                    onAction: V,
                  },
                  "watch-button",
                )
              : H && null != Y
                ? (0, i.jsx)(
                    y.Z,
                    { color: k, look: D, hangStatusChannel: Y, onAction: V },
                    "hang-status-button",
                  )
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(
                        w.Z,
                        { activity: t, color: k, look: D, onAction: V },
                        "watch-button",
                      ),
                      (0, i.jsx)(
                        Z.Z,
                        {
                          activity: t,
                          embeddedActivity: n,
                          user: l,
                          color: k,
                          look: D,
                          isEmbedded: F,
                          onAction: V,
                        },
                        "join-activity-button",
                      ),
                      (0, i.jsx)(
                        T.Z,
                        {
                          activity: t,
                          user: l,
                          color: k,
                          look: D,
                          onAction: V,
                        },
                        "notify-button",
                      ),
                      (0, i.jsx)(
                        C.Z,
                        {
                          user: l,
                          color: k,
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
        a = n(231757),
        r = n(553795),
        s = n(915863),
        o = n(388032),
        c = n(542471);
      function u(e) {
        let { platform: t, color: n, look: u, onAction: d, Icon: m } = e;
        if (
          (0, l.e7)([r.Z], () =>
            r.Z.getAccounts().some((e) => e.type === t.type),
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
                (0, a.Z)({ platformType: t.type, location: "Activity Action" });
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
        a = n(49012),
        r = n(591759),
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
            let o = r.Z.safeParseWithQuery(s);
            if (null == o || null == o.protocol || null == o.hostname) return;
            (0, a.q)({ href: r.Z.format(o), trusted: !1 });
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
        a = n(287734),
        r = n(19780),
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
          p = (0, l.e7)([r.Z], () => r.Z.getChannelId() === m.id);
        return (0, i.jsx)(
          o.Z,
          {
            className: t,
            disabled: p,
            onClick: () => {
              null == f || f(),
                a.default.selectVoiceChannel(m.id),
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
        a = n(922482),
        r = n(979651),
        s = n(915863),
        o = n(388032),
        c = n(614774);
      t.Z = (e) => {
        let { guildId: t, channelId: n, color: u, look: d, onAction: m } = e,
          f = (0, l.e7)([r.Z], () => r.Z.isInChannel(n), [n]);
        return (0, i.jsx)(
          s.Z,
          {
            className: c.button,
            color: u,
            look: d,
            disabled: f,
            onClick: () => {
              null == m || m(), a.AC(t, n);
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
        a = n(620662),
        r = n(915863),
        s = n(981631),
        o = n(388032);
      function c(e) {
        let { activity: t, user: n, look: c, color: u, onAction: d } = e;
        return (0, a.Z)(t, s.xjy.INSTANCE)
          ? (0, i.jsx)(
              r.Z,
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
        a = n(620662),
        r = n(503438),
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
        return null != t && (0, a.Z)(t, s.xjy.PLAY) && (0, r.Z)(t)
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
        a = n(620662),
        r = n(503438),
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
        return null != t && (0, a.Z)(t, s.xjy.SYNC) && (0, r.Z)(t)
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
        a = n(481060),
        r = n(572691),
        s = n(287734),
        o = n(872810),
        c = n(40851),
        u = n(102172),
        d = n(199902),
        m = n(592125),
        f = n(585483),
        p = n(915863),
        g = n(981631),
        h = n(388032),
        v = n(951908);
      function S(e) {
        let {
            isCurrentUser: t,
            color: n,
            look: S,
            applicationStream: I,
            onAction: _,
          } = e,
          { activeStream: x, watchingOtherStream: E } = (0, l.cj)(
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
          C = (0, l.e7)([m.Z], () =>
            m.Z.getChannel(null == I ? void 0 : I.channelId),
          ),
          [Z, y] = (0, u.wq)(C),
          b = (0, c.Aq)(),
          T =
            null != x &&
            null != I &&
            x.state !== g.jm8.ENDED &&
            x.ownerId === I.ownerId,
          A = (e) => {
            if (null != I)
              null == _ || _(),
                s.default.selectVoiceChannel(I.channelId),
                !T && (0, o.iV)(I, { forceMultiple: e }),
                b.dispatch(g.CkL.POPOUT_CLOSE),
                f.S.dispatch(g.CkL.MODAL_CLOSE),
                r.Z.popAll();
          };
        if (null == I) return null;
        let N = (0, u.P9)(y);
        t
          ? (N = h.intl.string(h.t.XvBdeX))
          : T && (N = h.intl.string(h.t.JH1SJy));
        let w = { color: n, look: S };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(
              p.Z,
              {
                disabled: t || T || !Z,
                onClick: () => A(!1),
                ...w,
                fullWidth: !0,
                children: [
                  (0, i.jsx)(a.ScreenArrowIcon, {
                    size: "md",
                    color: "currentColor",
                    className: v.streamIcon,
                  }),
                  N,
                ],
              },
              "play",
            ),
            E && !T
              ? (0, i.jsx)(a.Tooltip, {
                  text: h.intl.string(h.t.wCrzur),
                  children: (e) =>
                    (0, i.jsx)(p.Z, {
                      ...e,
                      onClick: () => {
                        var t;
                        null === (t = e.onClick) || void 0 === t || t.call(e),
                          A(!0);
                      },
                      ...w,
                      className: v.iconButton,
                      size: v.iconButtonSize,
                      children: (0, i.jsx)(a.EyePlusIcon, {
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
        a = n(153867),
        r = n(468026),
        s = n(740492),
        o = n(388032);
      function c(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : () => {},
          n = (t) => {
            a.ZP.updatedUnsyncedSettings({
              disableEmbeddedActivityPopOutAlert: !0,
            }),
              t(),
              e();
          };
        s.ZP.disableEmbeddedActivityPopOutAlert
          ? e()
          : (0, l.openModal)(
              (l) =>
                (0, i.jsx)(r.default, {
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
        a = n(110924),
        r = n(317381);
      function s(e) {
        let {
            applicationId: t,
            channelId: n,
            launchingComponentId: s,
            onSubmissionComplete: o,
          } = e,
          c = (0, l.e7)([r.ZP], () => r.ZP.getLaunchState(t, n)),
          u = null != c && c.isLaunching && c.componentId === s,
          d = (0, a.Z)(u);
        return (
          i.useEffect(() => {
            !u && d && (null == o || o());
          }, [u, d, o]),
          { submitting: u, wasSubmitting: d }
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
            return _;
          },
          sendReplyToActivity: function () {
            return x;
          },
        });
      var i = n(512722),
        l = n.n(i),
        a = n(493683),
        r = n(726542),
        s = n(122810),
        o = n(503438),
        c = n(693824),
        u = n(690725),
        d = n(90712),
        m = n(592125),
        f = n(81063),
        p = n(176354),
        g = n(201133),
        h = n(55e3),
        v = n(314091),
        S = n(981631),
        I = n(388032);
      let _ = async (e) => {
          let { reaction: t, altText: n, ...i } = e,
            l = await C(i);
          (0, g.a)({ file: l, altText: n, user: i.user, reaction: t });
        },
        x = async (e) => {
          let { reply: t, altText: n, ...i } = e,
            r = await C(i),
            s = await a.Z.openPrivateChannel(i.user.id, !1, !1),
            o = m.Z.getChannel(s);
          l()(null != o, "Channel cannot be null"),
            (0, g.B)({ file: r, altText: n, channel: o, reply: t });
        },
        E = (e) => {
          var t;
          let { activity: i, application: l, user: a } = e,
            { theme: r } = (0, v.j3)(a, "black"),
            s = "dark" === r,
            o = (0, d.Z)(i),
            { assets: c, application_id: u } = i,
            m = (0, f.getAssetImage)(u, null == c ? void 0 : c.large_image, 64),
            g = null == l ? void 0 : l.getIconURL(64),
            h =
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
            ...(null != h && { Platform: h }),
            ...(null != m && {
              AssetImage: m.includes("http") ? m : n(869469)(m),
            }),
            ...(null != g && { ApplicationImage: g }),
            ...(null != I && { HangStatus: I }),
          };
        },
        C = async (e) => {
          let { user: t, activity: n, application: i, stream: l } = e,
            d = await a.Z.openPrivateChannel(t.id, !1, !1),
            m = E({ activity: n, application: i, user: t });
          return await (0, u.f)({
            assetsToLoad: m,
            drawImage: (e) => {
              var i;
              e.setFont({ truncate: c.GX.Truncate }),
                null != l
                  ? N(e, n, t)
                  : (0, o.Z)(n)
                    ? b(e, n, t)
                    : (0, s.Z)(n) &&
                        n.name === r.Z.get(S.ABu.LEAGUE_OF_LEGENDS).name
                      ? A(e, n, t)
                      : n.type === S.IIU.HANG_STATUS
                        ? T(e, n, t)
                        : y(e, n, t),
                (null === (i = e.assetMap) || void 0 === i
                  ? void 0
                  : i.has("Platform")) &&
                  e.drawImage(
                    "Platform",
                    { x: h.En - h.o3 - h.ez, y: h.o3 },
                    { w: h.ez, h: h.ez },
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
        Z = (e, t) => {
          e.setColor("dark" === t ? "white" : "black"),
            e.drawPath(h.Cv, { x: h.o3, y: h.o3 }, !0, 2 + 2 / 3);
        },
        y = (e, t, n) => {
          var i, l, a;
          e.setSize({ w: h.En, h: h.dI });
          let { color: r, theme: s } = (0, v.j3)(n, "black");
          e.setColor(r),
            e.drawRoundedRect({ x: 0, y: 0, h: h.dI, w: h.En }, 8, !0),
            e.setColor(
              "dark" === s ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)",
            ),
            e.drawRoundedRect({ x: 0, y: 0, h: h.dI, w: h.En }, 8, !0),
            (
              null === (i = e.assetMap) || void 0 === i
                ? void 0
                : i.has("AssetImage")
            )
              ? e.drawRoundedImage(
                  "AssetImage",
                  { x: h.o3, y: h.o3 },
                  { w: h.vS, h: h.vS },
                  8,
                )
              : (
                    null === (l = e.assetMap) || void 0 === l
                      ? void 0
                      : l.has("ApplicationImage")
                  )
                ? e.drawRoundedImage(
                    "ApplicationImage",
                    { x: h.o3, y: h.o3 },
                    { w: h.vS, h: h.vS },
                    8,
                  )
                : Z(e, s);
          let o = h.vS + h.o3 + h.sB;
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
                y: h.SG + 1 * h.Nv,
                w: (
                  null === (a = e.assetMap) || void 0 === a
                    ? void 0
                    : a.has(h.W3.Platform)
                )
                  ? h.ee
                  : h.sp,
              },
              !0,
            ),
            null != t.timestamps &&
              (e.setFont({ size: 14, weight: 400 }),
              e.drawText(
                "for ".concat((0, v.b6)(t.timestamps)),
                { x: o, y: h.SG + 2 * h.Nv },
                !0,
              ));
        },
        b = (e, t, n) => {
          var i, l;
          e.setSize({ w: h.En, h: h.dI });
          let { color: a, theme: r } = (0, v.j3)(n, "black");
          e.setColor(a),
            e.drawRoundedRect({ x: 0, y: 0, h: h.dI, w: h.En }, 8, !0),
            e.setColor(
              "dark" === r ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)",
            ),
            e.drawRoundedRect({ x: 0, y: 0, h: h.dI, w: h.En }, 8, !0),
            (null === (i = e.assetMap) || void 0 === i
              ? void 0
              : i.has("AssetImage")) &&
              e.drawRoundedImage(
                "AssetImage",
                { x: h.o3, y: h.o3 },
                { w: h.vS, h: h.vS },
                8,
              );
          let s = h.vS + h.o3 + h.sB;
          e.setColor("dark" === r ? "white" : "rgb(6, 6, 7)"),
            e.setFont({
              size: 14,
              family: ["gg sans", "sans-serif"],
              weight: 700,
            }),
            e.drawText(
              "".concat(t.details),
              {
                x: s,
                y: h.SG + 1 * h.Nv,
                w: (
                  null === (l = e.assetMap) || void 0 === l
                    ? void 0
                    : l.has(h.W3.Platform)
                )
                  ? h.ee
                  : h.sp,
              },
              !0,
            ),
            e.setFont({ size: 14, weight: 400 }),
            e.drawText("by ".concat(t.state), { x: s, y: h.SG + 2 * h.Nv }, !0);
        },
        T = (e, t, i) => {
          var l, a;
          e.setSize({ w: h.En, h: h.dI });
          let { color: r, theme: s } = (0, v.j3)(i, "black");
          e.setColor(r),
            e.drawRoundedRect({ x: 0, y: 0, h: h.dI, w: h.En }, 8, !0),
            e.setColor(
              "dark" === s ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)",
            ),
            e.drawRoundedRect({ x: 0, y: 0, h: h.dI, w: h.En }, 8, !0),
            (
              null === (l = e.assetMap) || void 0 === l
                ? void 0
                : l.has("HangStatus")
            )
              ? e.drawRoundedImage(
                  "HangStatus",
                  { x: h.o3, y: h.o3 },
                  { w: h.vS, h: h.vS },
                  8,
                )
              : Z(e, s);
          let o = h.vS + h.o3 + h.sB;
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
                y: h.SG + 1 * h.Nv,
                w: (
                  null === (a = e.assetMap) || void 0 === a
                    ? void 0
                    : a.has(h.W3.Platform)
                )
                  ? h.ee
                  : h.sp,
              },
              !0,
            ),
            e.setFont({ size: 14, weight: 400 });
          let c = "";
          (c = (0, n(833858).O8)(t)),
            e.drawText(c, { x: o, y: h.SG + 2 * h.Nv }, !0);
        },
        A = (e, t, n) => {
          var i;
          e.setSize({ w: h.En, h: h.dI });
          let { color: l, theme: a } = (0, v.j3)(n, "black");
          e.setColor(l),
            e.drawRoundedRect({ x: 0, y: 0, h: h.dI, w: h.En }, 8, !0),
            e.setColor(
              "dark" === a ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)",
            ),
            e.drawRoundedRect({ x: 0, y: 0, h: h.dI, w: h.En }, 8, !0),
            e.setColor("dark" === a ? "white" : "black"),
            e.drawRoundedImage(
              "AssetImage",
              { x: h.o3, y: h.o3 },
              { w: h.vS, h: h.vS },
              8,
            ) === c.vP.Failure &&
              e.drawPath(h.Cv, { x: h.o3, y: h.o3 }, !0, 2 + 2 / 3);
          let r = h.vS + h.o3 + h.sB;
          e.setColor("dark" === a ? "white" : "rgb(6, 6, 7)"),
            e.setFont({
              size: 14,
              family: ["gg sans", "sans-serif"],
              weight: 700,
            }),
            e.drawText(
              "".concat(t.details),
              {
                x: r,
                y: h.SG + 1 * h.Nv,
                w: (
                  null === (i = e.assetMap) || void 0 === i
                    ? void 0
                    : i.has("Platform")
                )
                  ? h.ee
                  : h.sp,
              },
              !0,
            ),
            e.setFont({ size: 14, weight: 400 }),
            e.drawText("".concat(t.state), { x: r, y: h.SG + 2 * h.Nv }, !0);
        },
        N = (e, t, n) => {
          var i, l, a;
          e.setSize({ w: h.En, h: h.dI });
          let { color: r, theme: s } = (0, v.j3)(n, "black");
          e.setColor(r),
            e.drawRoundedRect({ x: 0, y: 0, h: h.dI, w: h.En }, 8, !0),
            e.setColor(
              "dark" === s ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.7)",
            ),
            e.drawRoundedRect({ x: 0, y: 0, h: h.dI, w: h.En }, 8, !0),
            (
              null === (i = e.assetMap) || void 0 === i
                ? void 0
                : i.has("AssetImage")
            )
              ? e.drawRoundedImage(
                  "AssetImage",
                  { x: h.o3, y: h.o3 },
                  { w: h.vS, h: h.vS },
                  8,
                )
              : (
                    null === (l = e.assetMap) || void 0 === l
                      ? void 0
                      : l.has("ApplicationImage")
                  )
                ? e.drawRoundedImage(
                    "ApplicationImage",
                    { x: h.o3, y: h.o3 },
                    { w: h.vS, h: h.vS },
                    8,
                  )
                : Z(e, s);
          let o = h.vS + h.o3 + h.sB;
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
                y: h.SG + h.Nv * (null != t.timestamps ? 1 : 1.5),
                w: (
                  null === (a = e.assetMap) || void 0 === a
                    ? void 0
                    : a.has(h.W3.Platform)
                )
                  ? h.ee
                  : h.sp,
              },
              !0,
            ),
            null != t.timestamps &&
              (e.setFont({ size: 14, weight: 500 }),
              e.drawText(
                "for ".concat((0, v.b6)(t.timestamps)),
                { x: o, y: h.SG + 2 * h.Nv },
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
          return g;
        },
      }),
        n(47120);
      var i = n(866442),
        l = n(503438),
        a = n(420660),
        r = n(168631),
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
            [a, o] =
              null !== (n = null == l ? void 0 : l.themeColors) && void 0 !== n
                ? n
                : [],
            c = (0, r.V3)(a),
            u = null != o ? (0, i.Rf)(o) : t;
          return { color: u, theme: u === t ? "dark" : c };
        },
        g = (e, t) =>
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
                  : (0, a.Z)(t) || t.type === o.IIU.STREAMING
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
        a = n(594174),
        r = n(981631);
      t.Z = (e) => {
        let t = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
          n = (0, i.e7)([l.Z], () => l.Z.getRelationshipType(e.id)),
          s = e.isNonUserBot();
        return (
          e.id !== (null == t ? void 0 : t.id) && n !== r.OGo.BLOCKED && !s
        );
      };
    },
    628581: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(388032);
      function l(e, t, n, l, a) {
        return l
          ? i.intl.string(i.t["2Ne/Y2"])
          : n
            ? i.intl.string(i.t.FJSZVF)
            : t
              ? i.intl.string(i.t["+JQCa2"])
              : a
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
        a = n(481060),
        r = n(410575),
        s = n(906732),
        o = n(213609),
        c = n(821564),
        u = n(453925),
        d = n(632304),
        m = n(947150),
        f = n(488021),
        p = n(822556),
        g = n(981631),
        h = n(388032),
        v = n(126741);
      function S(e) {
        let {
            onClose: t,
            renderOutputDevices: n = !1,
            renderInputDevices: S = !1,
            renderInputModes: I = !1,
            renderInputVolume: _ = !1,
            renderOutputVolume: x = !1,
            onSelect: E,
          } = e,
          { analyticsLocations: C } = (0, s.ZP)();
        (0, o.Z)({
          type: l.ImpressionTypes.MENU,
          name: l.ImpressionNames.AUDIO_DEVICE_MENU,
          properties: { location_stack: C },
        });
        let Z = (0, p.Z)(),
          y = (0, m.Z)(C),
          b = (0, f.Z)(C),
          T = (0, c.Z)(C),
          A = (0, u.Z)(C),
          N = (0, d.Z)(C);
        return (0, i.jsx)(r.Z, {
          object: g.qAy.CONTEXT_MENU,
          children: (0, i.jsxs)(a.Menu, {
            onSelect: E,
            className: v.menu,
            onClose: t,
            navId: "audio-device-context",
            "aria-label": h.intl.string(h.t.ZR1Ss7),
            children: [
              S
                ? (0, i.jsx)(a.MenuGroup, {
                    label: h.intl.string(h.t.ElbIXF),
                    children: y,
                  })
                : null,
              n
                ? (0, i.jsx)(a.MenuGroup, {
                    label: h.intl.string(h.t["6Ww0iI"]),
                    children: b,
                  })
                : null,
              I
                ? (0, i.jsx)(a.MenuGroup, {
                    label: h.intl.string(h.t["pS+K2N"]),
                    children: T,
                  })
                : null,
              (0, i.jsxs)(a.MenuGroup, {
                children: [_ ? A : null, x ? N : null, Z],
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
          return h;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        a = n(772848),
        r = n(442837),
        s = n(570140),
        o = n(607070),
        c = n(367907),
        u = n(37091),
        d = n(721264),
        m = n(963838),
        f = n(39127),
        p = n(981631),
        g = n(972213);
      function h(e) {
        let { channelId: t, guildId: n, userId: h, containerDimensions: v } = e,
          S = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
          [I, _] = l.useState([]),
          x = I.length < 50;
        l.useEffect(() => {
          function e(e) {
            var i;
            let {
              channelId: l,
              userId: r,
              emoji: s,
              animationType: o,
              animationId: f,
            } = e;
            if (
              (null != h && h !== r) ||
              (u.Z.getEnabled() &&
                (0, d.Z)(
                  null !== (i = null == s ? void 0 : s.name) && void 0 !== i
                    ? i
                    : "",
                ))
            )
              return;
            let g = null != s && null != o && null != f;
            if (l === t && !S && x && g) {
              let e = (0, m._r)(s),
                i = null != s.id && !s.animated,
                l = {
                  id: (0, a.Z)(),
                  animationType: o,
                  animationId: f,
                  shouldResize: i,
                  url: e,
                  userId: r,
                };
              _((e) => [...e, l]),
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
        }, [t, n, h, S, x]);
        let E = l.useCallback((e) => {
          _((t) => {
            let n = [...t],
              i = n.findIndex((t) => t.id === e);
            return n.splice(i, 1), n;
          });
        }, []);
        return S
          ? null
          : (0, i.jsx)("div", {
              className: g.effectsWrapper,
              style: { width: v.width },
              children: (0, i.jsx)("div", {
                className: g.effects,
                children: I.map((e) =>
                  (0, i.jsx)(
                    f.Z,
                    { containerDimensions: v, effect: e, onComplete: E },
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
        a = n(846027),
        r = n(468026),
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
            (0, i.jsx)(r.default, {
              ...e,
              title: o.intl.string(o.t.FJSZVF),
              body: o.intl.string(o.t.etJjgY),
            }),
          );
          return;
        }
        if (e) {
          (0, l.openModal)((e) =>
            (0, i.jsx)(r.default, {
              ...e,
              title: o.intl.string(o.t["+JQCa2"]),
              body: o.intl.string(o.t.hsNm7e),
            }),
          );
          return;
        }
        a.Z.toggleSelfMute({ location: c });
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
        a = n(481060),
        r = n(846027),
        s = n(687058),
        o = n(131951);
      function c(e) {
        let t = (0, s.Z)(),
          n = (0, l.e7)([o.Z], () => o.Z.getInputDeviceId());
        return Object.values(t).map((t) => {
          let { id: l, disabled: s, name: o } = t;
          return (0, i.jsx)(
            a.MenuRadioItem,
            {
              id: "input-".concat(l),
              group: "input-devices",
              disabled: s,
              label: o,
              checked: l === n,
              action: () => r.Z.setInputDevice(l, { analyticsLocations: e }),
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
        a = n(481060),
        r = n(846027),
        s = n(253052),
        o = n(131951);
      function c(e) {
        let t = (0, s.Z)(),
          n = (0, l.e7)([o.Z], () => o.Z.getOutputDeviceId());
        return Object.values(t).map((t) => {
          let { id: l, disabled: s, name: o } = t;
          return (0, i.jsx)(
            a.MenuRadioItem,
            {
              group: "output-devices",
              id: "output-".concat(l),
              disabled: s,
              label: o,
              checked: l === n,
              action: () => r.Z.setOutputDevice(l, { analyticsLocations: e }),
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
        a = n(230711),
        r = n(906732),
        s = n(981631),
        o = n(388032);
      function c() {
        let { analyticsLocations: e } = (0, r.ZP)();
        return (0, i.jsx)(l.MenuItem, {
          id: "voice-settings",
          label: o.intl.string(o.t.NiTd0d),
          action: () => a.Z.open(s.oAB.VOICE, null, { analyticsLocations: e }),
          icon: l.SettingsIcon,
        });
      }
    },
    655687: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(933557),
        l = n(981631),
        a = n(388032);
      function r(e) {
        let { channel: t, isReadonly: n = !1, isCreatingThread: r = !1 } = e,
          s = (0, i.ZP)(t, !0),
          o = (0, i.ZP)(t, !1);
        if (null == t || null == s)
          return {
            placeholder: a.intl.string(a.t.MKDeyM),
            accessibilityLabel: a.intl.string(a.t.MKDeyM),
          };
        if (r)
          return {
            placeholder: a.intl.string(a.t.YzpScX),
            accessibilityLabel: a.intl.string(a.t.YzpScX),
          };
        if (n)
          return {
            placeholder: a.intl.string(a.t.RRvRp6),
            accessibilityLabel: a.intl.string(a.t.RRvRp6),
          };
        if (t.isForumPost())
          return {
            placeholder: a.intl.formatToPlainString(a.t.Y6qWLS, { channel: s }),
            accessibilityLabel: a.intl.formatToPlainString(a.t.KffKoa, {
              channel: o,
            }),
          };
        if (l.TPd.THREADS.has(t.type))
          return {
            placeholder: a.intl.formatToPlainString(a.t["8lzR/f"], {
              channel: s,
            }),
            accessibilityLabel: a.intl.formatToPlainString(a.t.UZIMWV, {
              channel: o,
            }),
          };
        if (t.type === l.d4z.DM)
          return {
            placeholder: a.intl.formatToPlainString(a.t["4c+CAw"], {
              channel: s,
            }),
            accessibilityLabel: a.intl.formatToPlainString(a.t.fqOxbW, {
              channel: o,
            }),
          };
        return {
          placeholder: a.intl.formatToPlainString(a.t["8lzR/f"], {
            channel: s,
          }),
          accessibilityLabel: a.intl.formatToPlainString(a.t.ih7ZSE, {
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
        a = n(120356),
        r = n.n(a),
        s = n(434650),
        o = n(393903),
        c = n(448986),
        u = n(353093),
        d = n(979264),
        m = n(506800);
      t.Z = l.memo(function (e) {
        let { children: t, isOverlay: n, contextGuildId: a, ...f } = e,
          p = l.useRef(null),
          [g, h] = l.useState({ maskImage: "none" }),
          v = (0, c.Z)(() => {
            var e, t;
            if (n) {
              h({ maskImage: "none" });
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
              h({ maskImage: "none" });
              return;
            }
            let a = l.right - i.right,
              r = l.width - a;
            if (r > l.width) {
              h({ maskImage: "none" });
              return;
            }
            h({
              maskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(
                  r,
                  "px)",
                ),
            });
          }),
          S = (0, o.y)(v),
          I = (0, u.p0)(f.userId, a),
          _ = { handleResize: v, positionTrackerRef: S },
          x = l.useRef(_);
        l.useEffect(() => {
          x.current = _;
        }),
          l.useEffect(() => {
            let { handleResize: e, positionTrackerRef: t } = x.current;
            if (null != t.current) e();
          }, [I]);
        let E = (0, s.O)(v);
        return (0, i.jsxs)("div", {
          className: r()(m.container, n && m.isOverlayContainer),
          ref: S,
          children: [
            (0, i.jsx)("div", { className: m.usernameContainer, children: t }),
            (0, i.jsx)("div", {
              className: m.chipletParent,
              ref: E,
              children: (0, i.jsx)("span", {
                className: r()(m.chipletContainer, !I && n && m.noPadding),
                ref: p,
                style: g,
                children: (0, i.jsx)(d.ZP, {
                  ...f,
                  contextGuildId: a,
                  className: r()(f.className, n && m.isOverlayTag),
                }),
              }),
            }),
          ],
        });
      });
    },
    332487: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651),
        l = n(192379),
        a = n(70097),
        r = n(324085),
        s = n(557261);
      function o(e) {
        let { baseTileRef: t, cleanup: n } = e,
          o = (0, r.bK)(),
          c = (0, l.useRef)(o);
        return null == t || 0 === t.offsetHeight || c.current
          ? null
          : (0, i.jsx)("div", {
              style: {
                width: 1.22 * t.offsetWidth,
                height: 1.22 * t.offsetHeight,
              },
              className: s.demoEffectOverlay,
              children: (0, i.jsx)(a.Z, {
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
    475674: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(442837),
        l = n(199902),
        a = n(314897),
        r = n(858340),
        s = n(959457),
        o = n(557457),
        c = n(614963),
        u = n(981631);
      function d(e) {
        let t = (0, o.Wc)(e),
          n = e.stream.guildId,
          d = e.stream.ownerId;
        return (0, i.e7)(
          [s.Z, r.Z, a.default, l.Z],
          () => {
            if (null == d) return null;
            let e = d === a.default.getId();
            if (!e && null == l.Z.getActiveStreamForUser(d, n)) return null;
            let i = e && null != r.Z.getHookError(u.K3D.SOUND);
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
        a = n(981631),
        r = n(388032);
      function s(e, t, n, s) {
        return null == t ||
          t.state === a.jm8.ENDED ||
          (0, i.V9)(t) !== (0, i.V9)(e)
          ? (0, l.P9)(s)
          : t.ownerId === n
            ? r.intl.string(r.t.XvBdeX)
            : r.intl.string(r.t.JH1SJy);
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
        a = n(251625),
        r = n(823379),
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
          i = e.slice(-1 * t).filter(r.lm);
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
          a = i.length;
        return {
          type: l,
          packetsSentOrReceived: n.packetsSentOrReceived,
          packetsLost: n.packetsLost,
          packetLossRate:
            n.packetsLost / (n.packetsLost + n.packetsSentOrReceived),
          frameRate: n.frameRate / a,
          resolution: n.resolution / a,
          numDatapoints: a,
        };
      }
      ((i = l || (l = {})).PACKET_LOSS = "Packet Loss"),
        (i.FRAME_RATE_INPUT = "Frame Rate Encode"),
        (i.FRAME_RATE_NETWORK = "Frame Rate Decode"),
        (i.SOUNDSHARE_FAILED = "Soundshare Failed"),
        (i.BAD_CONNECTION = "Bad Connection");
      let d = (0, a.oH)((e, t) => ({ message: e, errorType: t }));
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
          return N;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        a = n(120356),
        r = n.n(a),
        s = n(442837),
        o = n(481060),
        c = n(717881),
        u = n(616780),
        d = n(850827),
        m = n(576855),
        f = n(258609),
        p = n(199902),
        g = n(314897),
        h = n(430824),
        v = n(496675),
        S = n(158776),
        I = n(979651),
        _ = n(626135),
        x = n(102172),
        E = n(687516),
        C = n(718805),
        Z = n(871118),
        y = n(981631),
        b = n(388032),
        T = n(846450);
      class A extends l.PureComponent {
        componentDidMount() {
          let { user: e, streamApplication: t } = this.props;
          _.default.track(y.rMx.OPEN_POPOUT, {
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
            canWatch: a,
            unavailableReason: r,
          } = this.props;
          return (0, i.jsxs)(o.Clickable, {
            onClick: t,
            className: T.previewContainer,
            children: [
              (0, i.jsx)(Z.Z, { className: T.previewImage, stream: e }),
              a
                ? (0, i.jsx)("div", {
                    className: T.previewHover,
                    children: (0, i.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "none",
                      className: T.white,
                      children: (0, C.Z)(e, n, l, r),
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
            onAction: a,
            hideTip: s,
          } = this.props;
          return null == n
            ? null
            : (0, i.jsx)("div", {
                className: r()(T.streamPreviewWrapper, { [T.mounted]: l }),
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
                              onAction: a,
                            })
                          : (0, i.jsx)(d.Z, {
                              type: c.P.STREAM_PREVIEW,
                              applicationStream: n,
                              user: t,
                              guildId: n.guildId,
                              channelId: n.channelId,
                              className: T.activityActions,
                              color: T.watchButton,
                              onAction: a,
                            }),
                        !s &&
                          (0, i.jsx)(m.Z, {
                            type: m.Z.Types.INLINE,
                            className: T.protip,
                            children: __OVERLAY__
                              ? b.intl.string(b.t["YRdw7+"])
                              : b.intl.string(b.t.CCTgbG),
                          }),
                      ],
                    }),
                  ],
                }),
              });
        }
      }
      function N(e) {
        let { user: t, channel: n, ...a } = e,
          [r, o] = (0, s.Wu)([I.Z, h.Z, v.Z, f.Z], () =>
            (0, x.p9)(n, I.Z, h.Z, v.Z, f.Z),
          ),
          c = (0, s.e7)([p.Z], () =>
            p.Z.getStreamForUser(t.id, n.getGuildId()),
          ),
          d = (0, s.e7)([p.Z], () =>
            p.Z.getActiveStreamForApplicationStream(c),
          ),
          m = (0, s.e7)([g.default], () => g.default.getId()),
          _ = (0, E.Cf)(c),
          C = (0, s.e7)([S.Z], () => (0, E.Um)(c, S.Z)),
          Z = l.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
        return (
          (0, u.$)(Z),
          (0, i.jsx)(A, {
            ...a,
            canWatch: r,
            unavailableReason: o,
            user: t,
            streamApplication: _,
            stream: c,
            activeStream: d,
            currentUserId: m,
            activity: C,
          })
        );
      }
    },
    517525: function (e, t, n) {
      "use strict";
      n(47120);
      var i = n(200651),
        l = n(192379),
        a = n(120356),
        r = n.n(a),
        s = n(666912),
        o = n(468194),
        c = n(442837),
        u = n(692547),
        d = n(477690),
        m = n(481060),
        f = n(2052),
        p = n(906732),
        g = n(194082),
        h = n(484459),
        v = n(594174),
        S = n(626135),
        I = n(74538),
        _ = n(557457),
        x = n(475674),
        E = n(981631),
        C = n(474936),
        Z = n(388032),
        y = n(891252);
      let b = (0, o.Mg)(d.Z.LIVE_INDICATOR_BORDER_RADIUS),
        T = { opacity: 0, transform: "translate3d(100%, 0, 0)" },
        A = { opacity: 1, transform: "translate3d(0%, 0, 0)" },
        N = { opacity: 0 },
        w = { opacity: 1 },
        j = {
          borderRadius: ""
            .concat(b, "px ")
            .concat(b, "px ")
            .concat(b, "px ")
            .concat(b, "px"),
        },
        P = { borderRadius: "0px ".concat(b, "px ").concat(b, "px 0px") },
        R = { mass: 1, tension: 500, friction: 18, clamp: !0 },
        M = (e) => {
          let t,
            a,
            {
              participant: s,
              isUpsellEnabled: o,
              shape: d,
              size: h,
              didTrackUpsellViewed: b,
              setDidTrackUpsellViewed: T,
              className: A,
              premiumIndicator: N,
            } = e,
            w = (0, _.Wc)(s),
            { analyticsLocations: j } = (0, p.ZP)(),
            P = null != (0, x.Z)(s);
          try {
            t = (0, _.nG)(w);
          } catch (e) {
            t = !1;
          }
          try {
            a = (0, _.tR)(w);
          } catch (e) {
            a = !1;
          }
          let R = t || a,
            { location: M } = (0, f.O)(),
            O = (0, c.e7)([v.default], () => v.default.getCurrentUser()),
            L =
              o &&
              !I.ZP.isPremium(O, C.p9.TIER_1) &&
              !I.ZP.canStreamQuality(I.ZP.StreamQuality.MID, O),
            k = l.useCallback(() => {
              L &&
                R &&
                (0, m.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("28479")
                    .then(n.bind(n, 78865));
                  return (t) => (0, i.jsx)(e, { ...t, analyticsSource: M });
                });
            }, [L, R, M]);
          if (
            (l.useEffect(() => {
              !b &&
                R &&
                (S.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                  type: C.cd.STREAM_QUALITY_INDICATOR,
                  has_premium_stream_fps: t,
                  has_premium_stream_resolution: a,
                  location_stack: j,
                }),
                T(!0));
            }, [t, a, R, b, T, j]),
            null == w)
          )
            return null;
          let D = (0, i.jsx)(m.Tooltip, {
            text: P
              ? Z.intl.string(Z.t.q8TiVl)
              : R
                ? Z.intl.string(Z.t.IHgpEh)
                : Z.intl.string(Z.t.vLb0VV),
            position: "bottom",
            color: m.Tooltip.Colors.GREY,
            children: (e) =>
              (0, i.jsxs)(m.Clickable, {
                ...e,
                onClick: k,
                className: r()(
                  y.qualityIndicator,
                  h,
                  g.eE[d],
                  P
                    ? y.qualityIndicatorLowQuality
                    : y.qualityIndicatorFullQuality,
                  { [y.clickable]: L && R },
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
                    children: (0, _.ml)(w.maxResolution),
                  }),
                  (0, i.jsx)("span", { children: (0, _.bp)(w.maxFrameRate) }),
                ],
              }),
          });
          return (0, i.jsx)(m.TextBadge, {
            text: D,
            className: r()(A, y.qualityIndicatorBadge, {
              [y.qualityIndicatorBadgePremium]: R && N,
            }),
            color: u.Z.unsafe_rawColors.PRIMARY_500.css,
            shape: d,
          });
        };
      t.Z = (e) => {
        let {
            participant: t,
            showQuality: n,
            isUpsellEnabled: a = !0,
            size: o,
            className: c,
            premiumIndicator: u,
          } = e,
          [d, f] = l.useState(!1),
          p = (0, _.Wc)(t),
          { reducedMotion: v } = l.useContext(
            m.AccessibilityPreferencesContext,
          ),
          S = n && null != p;
        l.useEffect(() => {
          (0, h.Z)(
            t.stream.ownerId,
            t.user.getAvatarURL(t.stream.guildId, 80),
            { dispatchWait: !0 },
          );
        }, [t]);
        let I = (0, m.useTransition)(
            S,
            {
              enter: { from: v.enabled ? N : T, to: v.enabled ? w : A },
              leave: v.enabled ? N : T,
              config: R,
            },
            "animate-always",
          ),
          x = (0, m.useSpring)({ to: S ? P : j, config: R }, "animate-always");
        return ((e) => {
          let { className: n, popoutProps: l } = e;
          return (0, i.jsxs)("div", {
            className: r()(y.streamQualityIndicator, n),
            ...l,
            children: [
              I((e, n) =>
                n
                  ? (0, i.jsx)(s.animated.div, {
                      style: e,
                      children: (0, i.jsx)(M, {
                        className: y.liveQualityIndicator,
                        participant: t,
                        size: o,
                        shape: m.BadgeShapes.ROUND_LEFT,
                        isUpsellEnabled: a,
                        didTrackUpsellViewed: d,
                        setDidTrackUpsellViewed: f,
                        premiumIndicator: u,
                      }),
                    })
                  : null,
              ),
              (0, i.jsx)(s.animated.div, {
                style: x,
                className: y.liveIndicator,
                children: (0, i.jsx)(g.ZP, {
                  look: g.jZ.RED,
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
        a = n.n(l),
        r = n(442837),
        s = n(963838),
        o = n(37091),
        c = n(388032),
        u = n(710453);
      function d(e) {
        let t,
          { channelId: n, userId: l } = e,
          [d, m] = (0, r.Wu)([o.Z], () => [
            o.Z.getWaitingHighFive(n, l),
            o.Z.getCompletedHighFive(n, l),
          ]);
        if (null != m)
          t = (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("img", {
                alt: c.intl.string(c.t.W6HwU1),
                src: (0, s._r)({ name: m[0], id: null, animated: !1 }),
                className: a()(u.completeLeft, u.highFive),
              }),
              (0, i.jsx)("img", {
                alt: c.intl.string(c.t.W6HwU1),
                src: (0, s._r)({ name: m[1], id: null, animated: !1 }),
                className: a()(u.completeRight, u.highFive),
              }),
            ],
          });
        else {
          if (null == d) return null;
          t = (0, i.jsx)("img", {
            alt: c.intl.string(c.t.W6HwU1),
            src: (0, s._r)({ name: d, id: null, animated: !1 }),
            className: a()(u.waiting, u.highFive),
          });
        }
        return (0, i.jsx)("div", { className: u.root, children: t });
      }
    },
    707409: function (e, t, n) {
      "use strict";
      n.d(t, {
        CI: function () {
          return a.CI;
        },
        J6: function () {
          return a.J6;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(144830),
        a = n(379649);
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
        a = n(200651),
        r = n(192379),
        s = n(120356),
        o = n.n(s),
        c = n(481060),
        u = n(763520),
        d = n(153066),
        m = n(435315);
      ((l = i || (i = {})).CONTAIN = "contain"), (l.COVER = "cover");
      let f = r.memo(function (e) {
        let {
            streamId: t,
            onResize: n,
            wrapperClassName: i,
            videoComponent: l,
            className: s,
            fit: f = "contain",
            mirror: p = !1,
            paused: g = !1,
            streamPreviewURL: h,
            videoSpinnerContext: v,
            userId: S,
          } = e,
          [I, _] = r.useState(!0),
          [x] = r.useState(() => new u.o("VideoStream"));
        r.useEffect(() => {
          !g &&
            (I
              ? x.onSpinnerStarted()
              : null != t && x.trackSpinnerDuration(v, S, t));
        }, [I, g, t, x, v, S]);
        let E = r.useCallback(() => {
          _(!1);
        }, []);
        return (0, a.jsxs)("div", {
          className: o()(m.wrapper, i),
          children: [
            null != t &&
              (0, a.jsx)(l, {
                className: o()(
                  m.video,
                  (0, d.l)(m, "video", f),
                  { [m.mirror]: p },
                  s,
                ),
                streamId: t,
                onResize: n,
                onReady: E,
                paused: g,
              }),
            g
              ? null
              : (0, a.jsx)("div", {
                  className: o()(m.previewWrapper, { [m.loading]: I }),
                  children:
                    I &&
                    (0, a.jsxs)(r.Fragment, {
                      children: [
                        null != h
                          ? (0, a.jsx)("img", {
                              src: h,
                              alt: "",
                              className: m.previewImage,
                            })
                          : (0, a.jsx)("div", {
                              className: m.emptyPreviewWrapper,
                              children: (0, a.jsx)("div", {
                                className: m.emptyPreview,
                              }),
                            }),
                        (0, a.jsx)(c.Spinner, { className: m.spinner }),
                      ],
                    }),
                }),
          ],
        });
      });
      t.Z = f;
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
        a = n(576125),
        r = n(465858),
        s = n(112843),
        o = n(524484);
      function c(e) {
        let { callTileRef: t, isFiring: n } = e,
          i = (0, s.Z)(),
          a = (0, r.Z)(t);
        return (
          l.useEffect(() => {
            n &&
              null != a &&
              null != t &&
              i.fire(a.x + t.clientWidth / 2, a.y + t.clientHeight / 2, {
                countMultiplier: 4,
              });
          }, [t, i, n, a]),
          null
        );
      }
      function u(e) {
        return (0, i.jsx)(a.Z, {
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
        a = n(481060),
        r = n(351780),
        s = n(170248);
      function o(e) {
        let { isShaking: t, shakeLocation: n, children: o, className: c } = e,
          u = (0, s.Z)(n);
        return (0, l.e7)([r.Z], () => r.Z.isEnabled({ shakeLocation: n }))
          ? (0, i.jsx)(a.Shaker, {
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
          return r;
        },
      });
      var i = n(442837),
        l = n(451478),
        a = n(351780);
      function r(e) {
        let t = (0, i.e7)([l.Z], () => l.Z.isFocused());
        return (0, i.e7)([a.Z], () =>
          a.Z.isEnabled({ shakeLocation: e }) && t ? a.Z.shakeIntensity : 0,
        );
      }
    },
    238246: function (e, t, n) {
      "use strict";
      n(47120);
      var i,
        l = n(200651),
        a = n(192379),
        r = n(120356),
        s = n.n(r),
        o = n(512722),
        c = n.n(o),
        u = n(568611),
        d = n(731965),
        m = n(442837),
        f = n(481060),
        p = n(490173),
        g = n(40851),
        h = n(607070),
        v = n(899663),
        S = n(636449),
        I = n(317381),
        _ = n(496616),
        x = n(100527),
        E = n(906732),
        C = n(168551),
        Z = n(260035),
        y = n(597952),
        b = n(628123),
        T = n(686546),
        A = n(950796),
        N = n(80006),
        w = n(151851),
        j = n(587061),
        P = n(392358),
        R = n(540059),
        M = n(314910),
        O = n(892254),
        L = n(706454),
        k = n(210887),
        D = n(740492),
        U = n(451478),
        V = n(358085),
        F = n(62883),
        W = n(998502),
        B = n(473159),
        G = n(928518),
        z = n(981631),
        H = n(388032),
        Y = n(81796);
      function J(e, t, n) {
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
      class q extends (i = a.Component) {
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
            (0, B.O)(e),
            e.addEventListener("blur", this.handleBlur),
            V.isPlatformEmbedded
              ? t.addEventListener(
                  "contextmenu",
                  F.contextMenuCallbackNative,
                  !1,
                )
              : t.addEventListener("contextmenu", F.contextMenuCallbackWeb, !1),
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
            V.isPlatformEmbedded
              ? t.removeEventListener(
                  "contextmenu",
                  F.contextMenuCallbackNative,
                )
              : t.removeEventListener("contextmenu", F.contextMenuCallbackWeb),
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
          let l = i.querySelector("style[".concat(C.PQ, "]"));
          if (null != l) {
            l.textContent = e;
            return;
          }
          let a = n.createElement("style");
          a.setAttribute(C.PQ, "true"), (a.textContent = e), i.appendChild(a);
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
              children: a,
              windowKey: r,
              isRefreshEnabled: o,
              mouseModeEnabled: c,
              reducedMotionEnabled: d,
              fontScaleClass: m,
              withTitleBar: h,
              guestWindow: S,
              clientThemesClassName: I,
              contentClassName: _,
              appWrapperClassName: x,
            } = this.props,
            E = (0, V.getPlatform)(),
            C = s()(m, {
              "mouse-mode": c,
              "reduce-motion": d,
              "full-motion": !d,
              "app-focused": n || i,
              "visual-refresh": o,
            });
          return (0, l.jsx)(u.VK, {
            children: (0, l.jsx)(
              O.Z,
              {
                children: (0, l.jsx)(f.ThemeProvider, {
                  theme: e,
                  children: (e) =>
                    (0, l.jsx)(f.RedesignIconContextProvider, {
                      children: (0, l.jsx)("div", {
                        "data-popout-root": !0,
                        ref: this.rootRef,
                        className: s()(e, (0, y.Z)(), C, I, x),
                        children: (0, l.jsx)(f.FocusRingScope, {
                          containerRef: this.rootRef,
                          children: (0, l.jsx)(v.Z, {
                            children: (0, l.jsxs)(b.Z, {
                              children: [
                                (0, l.jsx)(T.Co, {}),
                                (0, l.jsx)(g.Wu, {
                                  appContext: z.IlC.POPOUT,
                                  renderWindow: S,
                                  children: (0, l.jsx)(Z.m, {
                                    children: (0, l.jsxs)(M.yP, {
                                      children: [
                                        (0, l.jsxs)("div", {
                                          className: Y.popout,
                                          children: [
                                            o &&
                                              h &&
                                              (0, l.jsx)(A.T, {
                                                windowKey: r,
                                                short: !0,
                                              }),
                                            !o && h && null != E
                                              ? (0, l.jsx)(w.Z, {
                                                  focused: n,
                                                  type: E,
                                                  windowKey: r,
                                                  macOSFrame: !0,
                                                })
                                              : null,
                                            (0, l.jsx)("div", {
                                              className: s()(Y.content, _),
                                              children: a,
                                            }),
                                          ],
                                        }),
                                        (0, l.jsx)(f.Modals, {}),
                                        (0, l.jsx)(p.Z, {}),
                                        (0, l.jsx)(M.Un, {}),
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
            J(this, "rootRef", a.createRef()),
            J(this, "_cleanupWindowActionCreators", void 0),
            J(this, "beforeUnload", (e) => {
              let t = () => {
                G.Z.unmountWindow(this.props.windowKey),
                  V.isPlatformEmbedded && W.ZP.close(this.props.windowKey);
              };
              if (
                this.props.connectedToEmbeddedActivity &&
                !D.ZP.disableEmbeddedActivityPopOutAlert
              ) {
                if (!V.isPlatformEmbedded) return;
                (0, S.R)()
                  ? t()
                  : ((e.returnValue = H.intl.string(H.t["bST/Y2"])),
                    (0, _.Z)(() => {
                      t();
                    }));
              } else t();
            }),
            J(this, "handleBlur", () => {
              var e, t;
              null === (e = (t = this.props).onBlur) ||
                void 0 === e ||
                e.call(t);
            });
        }
      }
      J(q, "defaultProps", { withTitleBar: !0 });
      let X = a.forwardRef(function (e, t) {
        let { guestWindow: n, focused: i } = (0, m.cj)([G.Z], () => ({
          guestWindow: G.Z.getWindow(e.windowKey),
          focused: G.Z.getWindowFocused(e.windowKey),
        }));
        c()(null != n, "Missing guestWindow reference");
        let a = (0, R.Q3)("PopoutWindow"),
          r = (0, m.e7)([U.Z], () => U.Z.isFocused()),
          { locale: s, theme: o } = (0, m.cj)([k.Z, L.default], () => ({
            locale: L.default.locale,
            theme: k.Z.theme,
          })),
          u = (0, m.e7)([h.Z], () => (h.Z.useForcedColors ? "yes" : "no")),
          { accessibilitySettings: d, appWrapperClassName: p } = (0, N.I)(),
          g = (0, m.e7)(
            [I.ZP],
            () =>
              null != e.channelId &&
              null !== I.ZP.getSelfEmbeddedActivityForChannel(e.channelId),
          );
        (0, j.Z)(n, !1);
        let v = (0, P.Z)(n, i),
          { analyticsLocations: S } = (0, E.ZP)(x.Z.POPOUT_WINDOW),
          { clientThemesClassName: _, clientThemesCSS: Z } = (0, C.ZP)();
        return null == n
          ? null
          : (0, l.jsx)(f.DnDProvider, {
              children: (0, l.jsx)(E.Gt, {
                value: S,
                children: (0, l.jsx)(q, {
                  ref: t,
                  ...e,
                  guestWindow: n,
                  focused: i,
                  appFocused: r,
                  locale: s,
                  theme: o,
                  forcedColors: u,
                  useForcedColors: d.useForcedColors,
                  systemForcedColors: d.systemForcedColors,
                  fontScale: d.fontScale,
                  keyboardModeEnabled: d.keyboardModeEnabled,
                  mouseModeEnabled: v,
                  reducedMotionEnabled: d.useReducedMotion,
                  connectedToEmbeddedActivity: g,
                  fontScaleClass: d.fontScaleClass,
                  saturation: d.saturation,
                  alwaysShowLinkDecorations: d.alwaysShowLinkDecorations,
                  clientThemesClassName: _,
                  clientThemesCSS: Z,
                  appWrapperClassName: p,
                  isRefreshEnabled: a,
                }),
              }),
            });
      });
      t.Z = X;
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
        a = n(74538),
        r = n(474936);
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
        return (0, a.I5)(e, r.p9.TIER_2) || t;
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
        a = n(354459),
        r = n(37113);
      function s(e, t) {
        var n, s;
        if (
          null == e ||
          e.type !== a.fO.STREAM ||
          null == e.maxResolution ||
          null == e.maxFrameRate ||
          !(
            (null == e
              ? void 0
              : null === (n = e.maxResolution) || void 0 === n
                ? void 0
                : n.height) in r.LY
          ) ||
          !(e.maxFrameRate in r.ws)
        )
          return !1;
        let o = (0, i.Z)(
          r.tI.PRESET_VIDEO,
          (0, r.aW)(
            null == e
              ? void 0
              : null === (s = e.maxResolution) || void 0 === s
                ? void 0
                : s.height,
          ),
          (0, r.L9)(e.maxFrameRate),
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
        a = n(361291),
        r = n(557457),
        s = n(933843),
        o = n(37113);
      function c() {
        let { resolution: e, fps: t } = (0, l.cj)([a.Z], () => a.Z.getState());
        if (!(!(0, s.So)(i.q.STREAM_HIGH_QUALITY) || (0, s.mc)(e, t)))
          return "".concat((0, o.o6)(e), " ").concat((0, r.bp)(t));
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
        a,
        r,
        s = n(442837),
        o = n(46973),
        c = n(570140),
        u = n(569545),
        d = n(314897),
        m = n(19780),
        f = n(959457),
        p = n(630759),
        g = n(729303),
        h = n(651941),
        v = n(981631);
      let S = new Map(),
        I = new Map(),
        _ = !1,
        x = null;
      function E() {
        return f.Z.getAllActiveStreamKeys().reduce((e, t) => {
          let { ownerId: n } = (0, u.my)(t),
            i = !0 === S.get(n),
            l = I.get(t) !== i;
          return I.set(t, i), !!l || e;
        }, !1);
      }
      function C() {
        var e;
        let t = null !== (e = m.Z.getUserIds()) && void 0 !== e ? e : new Set(),
          n = d.default.getId(),
          i = !0;
        for (let e of t)
          if (n !== e && !0 !== S.get(e)) {
            i = !1;
            break;
          }
        let l = i !== _;
        return (_ = i), l;
      }
      function Z(e) {
        let { userId: t } = e;
        if (d.default.getId() === t) return !1;
        let n = (function (e) {
            let t = m.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
              i = h.Z.isKeyVerified(e, n) || g.Z.isKeyVerified(e, n),
              l = (0, p.UB)(e, [m.Z, f.Z]),
              a = i && !l,
              r = a !== S.get(e);
            return S.set(e, a), r;
          })(t),
          i = E(),
          l = C();
        return n || i || l;
      }
      function y() {
        S.clear(), I.clear(), (_ = !1);
      }
      class b extends (i = s.ZP.Store) {
        initialize() {
          this.waitFor(g.Z, h.Z, m.Z, f.Z);
        }
        isCallVerified() {
          return _;
        }
        isStreamVerified(e) {
          return I.get(e);
        }
        isUserVerified(e) {
          return S.get(e);
        }
      }
      (r = "SecureFramesVerifiedStore"),
        (a = "displayName") in (l = b)
          ? Object.defineProperty(l, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[a] = r),
        (t.Z = new b(c.Z, {
          CONNECTION_OPEN: y,
          VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (t === x) return !1;
            (x = t), y();
          },
          RTC_CONNECTION_STATE: function (e) {
            let { streamKey: t, state: n, context: i } = e;
            if (n !== v.hes.DISCONNECTED) return !1;
            switch (i) {
              case o.Yn.STREAM:
                if (null == t) return !1;
                return I.delete(t), C();
              case o.Yn.DEFAULT:
                y();
            }
          },
          RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
            let { userIds: t } = e,
              n = d.default.getId(),
              i = t.reduce(
                (e, t) => (n === t ? e : !!Z({ userId: t }) || e),
                !1,
              ),
              l = E(),
              a = C();
            return i || l || a;
          },
          SECURE_FRAMES_TRANSIENT_KEY_CREATE: Z,
          SECURE_FRAMES_TRANSIENT_KEY_DELETE: Z,
          SECURE_FRAMES_VERIFIED_KEY_CREATE: Z,
          SECURE_FRAMES_VERIFIED_KEY_DELETE: Z,
          SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: Z,
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
        a,
        r,
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
      (r = "TransientKeyStore"),
        (a = "displayName") in (l = u)
          ? Object.defineProperty(l, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[a] = r),
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
        a = n(19780),
        r = n(959457);
      function s(e, t) {
        return 0 === e.size || (1 === e.size && e.has(t));
      }
      function o(e) {
        return (0, i.e7)([r.Z, l.default], () => {
          if (null == e) return !0;
          let t = r.Z.getUserIds(e);
          return null == t || s(t, l.default.getId());
        });
      }
      function c() {
        return (0, i.e7)([a.Z, l.default], () => {
          let e = a.Z.getUserIds();
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
        a = n(19780),
        r = n(977059),
        s = n(760373);
      function o(e) {
        let { channelId: t, location: n } = e,
          { enabled: o } = (0, r.S)({ location: n });
        return (0, i.e7)(
          [a.Z, l.Z],
          () =>
            (function (e, t) {
              var n;
              let [i, r] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [a.Z, l.Z];
              if (!t || null == e || i.getChannelId() !== e) return !1;
              let o = r.getChannel(e);
              if (null == o || o.isGuildStageVoice()) return !1;
              let c =
                null === (n = i.getSecureFramesState()) || void 0 === n
                  ? void 0
                  : n.version;
              return null != c && c !== s.Eg;
            })(t, o, [a.Z, l.Z]),
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
        a = n(314897),
        r = n(19780),
        s = n(98369),
        o = n(277642),
        c = n(441894);
      function u(e) {
        let { userId: t, channelId: n, location: l } = e,
          o = (0, c.J)({ channelId: n, location: l });
        return (0, i.e7)(
          [s.Z, a.default, r.Z],
          () =>
            null != t &&
            o &&
            r.Z.isUserConnected(t) &&
            a.default.getId() !== t &&
            s.Z.isUserVerified(t),
          [o, t],
        );
      }
      function d(e) {
        let { streamKey: t, channelId: n, location: r } = e,
          u = (0, c.J)({ channelId: n, location: r }),
          d = (0, o.t)(t);
        return (0, i.e7)(
          [s.Z, a.default],
          () => {
            if (!u || d || null == t) return !1;
            let e = a.default.getId(),
              { ownerId: n } = (0, l.my)(t);
            return n !== e && s.Z.isStreamVerified(t);
          },
          [d, u, t],
        );
      }
      function m(e) {
        let { channelId: t, location: n } = e,
          l = (0, c.J)({ channelId: t, location: n }),
          a = (0, o.r)();
        return (0, i.e7)([s.Z], () => !!l && !a && s.Z.isCallVerified(), [
          a,
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
          return h;
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
          return g;
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
        a = n(570140),
        r = n(984063),
        s = n(981631);
      function o(e, t, n, i, l) {
        a.Z.dispatch({
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
        a.Z.dispatch({
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
        (t.state = r.f.STOP),
          a.Z.dispatch({
            type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
            emojiHose: t,
            userId: t.userId,
            streamerId: e,
          });
      }
      function p(e, t, n) {
        a.Z.dispatch({
          type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
          emojiHose: e,
          userId: t,
          streamerId: n,
        });
      }
      function g(e, t) {
        a.Z.dispatch({
          type: "SHARED_CANVAS_CLEAR_DRAWABLES",
          drawables: e,
          streamerId: t,
        });
      }
      function h(e) {
        a.Z.dispatch({ type: "SHARED_CANVAS_SET_DRAW_MODE", drawMode: e });
      }
      function v() {
        a.Z.dispatch({ type: "TOGGLE_OVERLAY_CANVAS" });
      }
    },
    813900: function (e, t, n) {
      "use strict";
      n.d(t, {
        FO: function () {
          return s;
        },
        Fq: function () {
          return r;
        },
        Ks: function () {
          return i;
        },
        q2: function () {
          return a;
        },
        qh: function () {
          return l;
        },
      });
      let i = 80,
        l = 48,
        a = 3,
        r = 500,
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
        a,
        r,
        s = n(442837),
        o = n(570140),
        c = n(633302),
        u = n(594174),
        d = n(176354),
        m = n(984063),
        f = n(88315),
        p = n(813900);
      let g = {},
        h = {},
        v = {},
        S = !0,
        I = null;
      function _(e) {
        if (null == h[e]) {
          let t = u.default.getUser(e);
          if (null == t) return;
          let n = t.getAvatarURL(null, p.Ks),
            i = new Image();
          (i.src = n), (h[e] = i);
        }
      }
      class x extends (i = s.ZP.Store) {
        get visibleOverlayCanvas() {
          return S;
        }
        getDrawables(e) {
          return null != g[e] ? g[e] : [];
        }
        getAvatarImage(e) {
          return h[e];
        }
        getEmojiImage(e) {
          return v[e];
        }
        getDrawMode() {
          return I;
        }
      }
      (r = "SharedCanvasStore"),
        (a = "displayName") in (l = x)
          ? Object.defineProperty(l, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[a] = r);
      let E = new x(o.Z, {
        SHARED_CANVAS_UPDATE_LINE_POINTS: function (e) {
          let { lineId: t, newPoints: n, userId: i, streamerId: l } = e,
            a = g[l];
          if (null == a)
            g[l] = [{ type: m.W.LINE, id: t, userId: i, points: n }];
          else {
            let e = a.find((e) => e.id === t);
            null == e
              ? a.push({ type: m.W.LINE, id: t, userId: i, points: n })
              : (0, f.P7)(e) && e.points.push(...n);
          }
          _(i);
        },
        SHARED_CANVAS_UPDATE_EMOJI_HOSE: function (e) {
          var t, n, i;
          let { emojiHose: l, streamerId: a, userId: r } = e,
            s = { ...l, type: m.W.EMOJI_HOSE };
          if (null == g[a]) g[a] = [s];
          else {
            let e = g[a].findIndex((e) => e.id === l.id);
            e >= 0 ? (g[a][e] = { ...g[a][e], ...s }) : g[a].push(s);
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
          _(r);
        },
        SHARED_CANVAS_CLEAR_DRAWABLES: function (e) {
          let { drawables: t, streamerId: n } = e;
          if (null != g[n]) {
            let e = new Set();
            t.forEach((t) => e.add(t.id)),
              (g[n] = g[n].filter((t) => !e.has(t.id)));
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
      t.Z = E;
    },
    984063: function (e, t, n) {
      "use strict";
      var i, l, a, r;
      n.d(t, {
        W: function () {
          return i;
        },
        f: function () {
          return l;
        },
      }),
        ((a = i || (i = {})).LINE = "line"),
        (a.EMOJI_HOSE = "emoji_hose"),
        ((r = l || (l = {})).START = "START"),
        (r.STOP = "STOP");
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
          return g;
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
        a = n(866442),
        r = n(220082),
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
            top: a,
          } = e.getBoundingClientRect(),
          r = (t.clientX - l) / n;
        return { x: r, y: (t.clientY - a) / i };
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
      function g(e, t, n, i) {
        var o;
        let u = s.default.getUser(e),
          d = null == u ? void 0 : u.getAvatarURL(null, c.Ks),
          m =
            null != d
              ? null === (o = r.SR.getState().palette[d]) || void 0 === o
                ? void 0
                : o[0]
              : null,
          f =
            null != m
              ? "#".concat(l()({ r: m[0], g: m[1], b: m[2] }).toHex())
              : i,
          p = (0, a.Bd)((0, a._i)(f)) > 0.5 ? n : t;
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
          return a;
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
      function a(e, t, n, l) {
        e.save();
        let a = i.Z.getAvatarImage(l);
        if (null == a) return;
        let r = 20 * window.devicePixelRatio;
        e.beginPath(),
          e.arc(t, n, r / 2, 0, 2 * Math.PI),
          e.clip(),
          e.drawImage(a, t - r / 2, n - r / 2, r, r),
          e.restore();
      }
    },
    262433: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return g;
        },
        Z: function () {
          return v;
        },
      }),
        n(653041);
      var i = n(392711),
        l = n.n(i),
        a = n(772848),
        r = n(15729),
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
        g = (0, r.U)(() => ({ particles: {}, lastSpawned: {} }));
      function h(e, t) {
        var n;
        l()(
          null !== (n = g.getState().particles[e.id]) && void 0 !== n ? n : {},
        ).forEach(t);
      }
      function v(e) {
        var t, n, i, r;
        let {
          emojiHose: v,
          context: S,
          canvasWidth: I,
          canvasHeight: _,
          fallbackColor: x,
          outlineColorDark: E,
          outlineColorLight: C,
          streamerId: Z,
          deadDrawables: y,
        } = e;
        S.save();
        let b = c.Z.getEmojiImage(
            null !==
              (n =
                null !== (t = v.emojiId) && void 0 !== t ? t : v.emojiName) &&
              void 0 !== n
              ? n
              : "",
          ),
          T = (0, d.np)(v.x, I),
          A = (0, d.np)(v.y, _),
          { outlineColor: N } = (0, d.bg)(v.userId, E, C, x);
        if (
          (h(v, (e) => {
            var t, n;
            return (
              (t = v),
              (n = e),
              void ((n.x += n.xSpeed * window.devicePixelRatio),
              (n.y += n.ySpeed * window.devicePixelRatio),
              (n.opacity -= n.opacitySpeed),
              n.opacity <= 0 &&
                (0, s.j)(() => {
                  g.setState(
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
            let r =
                null !== (i = g.getState().lastSpawned[e.id]) && void 0 !== i
                  ? i
                  : 0,
              o = Date.now();
            if (
              !(r + 100 > o) &&
              e.state !== u.f.STOP &&
              !!(0.8 >= Math.random() || r + 300 < o)
            )
              (0, s.j)(() => {
                g.setState((i) => {
                  var r, s, o;
                  let c =
                      null !== (r = i.particles[e.id]) && void 0 !== r ? r : {},
                    u = l().random(1, 2);
                  for (let e = 0; e < u; e++) {
                    let e =
                      ((s = t),
                      (o = n),
                      {
                        id: (0, a.Z)(),
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
          })(v, T, A),
          (0, m.I)(S, T, A, N, f.q2),
          (0, m.T)(S, T, A, v.userId),
          h(v, (e) =>
            (function (e, t, n) {
              if (null == t) return;
              let i = n.size * window.devicePixelRatio,
                l = n.x - (i / 2) * window.devicePixelRatio,
                a = n.y - 1.2 * i * window.devicePixelRatio;
              (e.globalAlpha = n.opacity),
                e.drawImage(t, i / 2 + l, i / 2 + a, i, i);
            })(S, b, e),
          ),
          v.lastUpdatedAt + f.FO < Date.now() && (0, o.ZZ)(Z, v),
          v.state === u.f.STOP &&
            ((i = v),
            !(
              Object.keys(
                null !== (r = g.getState().particles[i.id]) && void 0 !== r
                  ? r
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
          return r;
        },
      }),
        n(653041);
      var i = n(88315),
        l = n(199766),
        a = n(813900);
      function r(e) {
        let {
          line: t,
          context: n,
          canvasWidth: r,
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
        let f = t.points.map((e) => (0, i.RR)(e, r, s)),
          p = d.current[t.id],
          g = (e) => p + e.deltaTime,
          h = (e) => g(e) + 1500 >= Date.now(),
          v = (e) => g(e) <= Date.now() && h(e),
          S = f.find(v);
        if (null == S) {
          !h(t.points[t.points.length - 1]) && m.push(t);
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
          { fillColor: _, outlineColor: x } = (0, i.bg)(t.userId, c, u, o),
          E = I(x, 6 + a.q2),
          C = null != E && v(E);
        C && (0, l.I)(n, E.x, E.y, x, a.q2),
          I(_, 6),
          C && (0, l.T)(n, E.x, E.y, t.userId);
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
        a = n(569545),
        r = n(959457),
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
          p = (0, l.e7)([r.Z], () => r.Z.getRTCConnection((0, a.V9)(t))),
          g = i.useCallback(
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
                  var i, l, a;
                  (i = e),
                    (l = p),
                    (a = Date.now() - f.current),
                    s.default.track(o.rMx.PREMIUM_FEATURE_USAGE, {
                      feature_name: ""
                        .concat(c.QP.SHARED_CANVAS, "_")
                        .concat(i.type),
                      feature_tier: c.h1.FREE,
                      media_session_id: l.getMediaSessionId(),
                      parent_media_session_id: l.parentMediaSessionId,
                      guild_id: l.guildId,
                      duration: a,
                    });
                }
                f.current = null;
              }
            },
            [d, p],
          ),
          handleMouseDown: g,
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
        a = n(125268);
      let r = () => {};
      function s(e, t, n) {
        let s = i.useRef((0, l.Z)()),
          o = i.useRef(Date.now()),
          c = i.useCallback(
            (i, l) => {
              let r = { x: i, y: l, deltaTime: Date.now() - o.current };
              (0, a.oW)(t, s.current, e, n, r), (0, a.cV)(s.current, e, n, [r]);
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
            handleMouseUp: r,
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
        a = n.n(l),
        r = n(772848),
        s = n(846519),
        o = n(125268),
        c = n(984063),
        u = n(813900);
      let d = a().debounce(o.BR, u.Fq, { maxWait: u.Fq });
      function m(e, t, n) {
        let l = i.useRef((0, r.Z)()),
          a = i.useRef(new s.Xp()),
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
              l.current = (0, r.Z)();
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
                a.current.start(u.FO, () => m(f));
            },
            [e, t, n, m],
          ),
          p = i.useCallback(
            (i, r, s) => {
              let f = {
                ...i,
                id: l.current,
                x: r,
                y: s,
                userId: e,
                state: c.f.START,
                lastUpdatedAt: Date.now(),
              };
              d(t, n, f), (0, o.gr)(f, e, n), a.current.start(u.FO, () => m(f));
            },
            [e, t, n, m],
          ),
          g = i.useCallback(
            (i, r, s) => {
              d.cancel(),
                (0, o.Df)(t, n, l.current),
                (0, o.gr)(
                  {
                    ...i,
                    id: l.current,
                    x: r,
                    y: s,
                    userId: e,
                    state: c.f.STOP,
                    lastUpdatedAt: Date.now(),
                  },
                  e,
                  n,
                ),
                a.current.stop();
            },
            [t, n, e],
          ),
          h = i.useCallback((e, t, n) => p(e, t, n), [p]);
        return i.useMemo(
          () => ({
            handleMouseDown: f,
            handleMouseMove: p,
            handleMouseUp: g,
            handleMouseEnter: h,
          }),
          [f, h, p, g],
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
        a = n(673125),
        r = n(984063),
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
          g = i.useRef(!1),
          h = (0, l.e7)([a.Z], () => a.Z.getDrawMode()),
          v = (0, o.Z)((0, c.Z)(t.id, n, d), m),
          S = (0, o.Z)((0, u.Z)(t.id, n, d), m),
          I = i.useCallback(
            (e, t, n) => {
              if (null == p) return;
              let { x: i, y: l } = (0, s.hn)(p, n);
              switch (t.type) {
                case r.W.LINE:
                  return v[e](t, i, l);
                case r.W.EMOJI_HOSE:
                  return S[e](t, i, l);
              }
            },
            [p, v, S],
          ),
          _ = i.useCallback(
            (e) => {
              if (!!f && null != h)
                e.stopPropagation(),
                  (g.current = !0),
                  I("handleMouseDown", h, e);
            },
            [I, h, f],
          ),
          x = i.useCallback(
            (e) => {
              if (!!f && null != h)
                e.stopPropagation(), g.current && I("handleMouseMove", h, e);
            },
            [I, h, f],
          ),
          E = i.useCallback(
            (e) => {
              if (!!f && null != h)
                e.stopPropagation(), (g.current = !1), I("handleMouseUp", h, e);
            },
            [I, h, f],
          ),
          C = i.useCallback(
            (e) => {
              if (!!g.current && null != h) I("handleMouseEnter", h, e);
            },
            [I, h],
          );
        return (
          i.useEffect(() => {
            let e = (e) => {
              if (null != h) (g.current = !1), I("handleMouseUp", h, e);
            };
            return (
              window.addEventListener("mouseup", e),
              () => window.removeEventListener("mouseup", e)
            );
          }, [I, h]),
          {
            handleClick: i.useCallback(
              (e) => {
                f && null != h && e.stopPropagation();
              },
              [h, f],
            ),
            handleMouseDown: _,
            handleMouseEnter: C,
            handleMouseMove: x,
            handleMouseUp: E,
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
        a = n(692547),
        r = n(481060),
        s = n(220082),
        o = n(979651),
        c = n(125268),
        u = n(673125),
        d = n(984063),
        m = n(88315),
        f = n(262433),
        p = n(400321),
        g = n(813900);
      let h = 1e3 / 60;
      function v(e, t, n, v) {
        let S = (0, r.useToken)(a.Z.unsafe_rawColors.BRAND_500).hex(),
          I = (0, r.useToken)(a.Z.unsafe_rawColors.BLACK_500).hex(),
          _ = (0, r.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex(),
          x = i.useRef({}),
          E = i.useRef(new l.Xp()),
          C = i.useCallback(
            (t) => {
              let n = u.Z.getDrawables(t);
              (0, m.UN)(e),
                !(function (e) {
                  let {
                    canvasRef: t,
                    drawables: n,
                    fallbackColor: i,
                    linesDrawnAt: l,
                    streamerId: a,
                    channelId: r,
                    outlineColorDark: s,
                    outlineColorLight: u,
                  } = e;
                  if (0 === n.length) return;
                  let m = t.current;
                  if (null == m) return;
                  let g = m.getContext("2d");
                  if (null == g) return;
                  let { width: h, height: v } = m.getBoundingClientRect(),
                    S = [];
                  n.forEach((e) => {
                    if (!(null != o.Z.getVoiceStateForChannel(r, e.userId))) {
                      S.push(e);
                      return;
                    }
                    !(function (e) {
                      let {
                        drawable: t,
                        context: n,
                        canvasWidth: i,
                        canvasHeight: l,
                        fallbackColor: a,
                        outlineColorDark: r,
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
                            fallbackColor: a,
                            outlineColorDark: r,
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
                            fallbackColor: a,
                            outlineColorDark: r,
                            outlineColorLight: s,
                            streamerId: c,
                            deadDrawables: u,
                          });
                      }
                    })({
                      drawable: e,
                      context: g,
                      canvasWidth: h,
                      canvasHeight: v,
                      fallbackColor: i,
                      outlineColorDark: s,
                      outlineColorLight: u,
                      linesDrawnAt: l,
                      deadDrawables: S,
                      streamerId: a,
                    });
                  }),
                    S.length > 0 && (0, c.fW)(S, a);
                })({
                  canvasRef: e,
                  drawables: n,
                  fallbackColor: S,
                  linesDrawnAt: x,
                  streamerId: t,
                  outlineColorDark: I,
                  outlineColorLight: _,
                  channelId: v,
                });
            },
            [e, v, S, I, _],
          );
        i.useEffect(() => {
          let t = new ResizeObserver(() => {
            let t = e.current;
            if (null == t) return;
            let { width: i, height: l } = t.getBoundingClientRect();
            (t.width = i * window.devicePixelRatio),
              (t.height = l * window.devicePixelRatio),
              C(n);
          });
          return (
            null != e.current && t.observe(e.current), () => t.disconnect()
          );
        }, [e, C, n]);
        let Z = i.useCallback(() => {
          let t = u.Z.getDrawables(n),
            i = f.U.getState().particles,
            l = t.length > 0 || Object.keys(i).length > 0;
          l &&
            null == E.current._ref &&
            (null == E.current._ref
              ? (C(n), E.current.start(h, () => C(n)))
              : !l &&
                null != E.current._ref &&
                (E.current.stop(), (0, m.UN)(e)));
        }, [e, C, n]);
        i.useEffect(() => {
          let e = E.current;
          return (
            u.Z.addChangeListener(Z),
            Z(),
            (0, s.vM)(t.getAvatarURL(null, g.Ks)),
            () => {
              u.Z.removeChangeListener(Z), e.stop();
            }
          );
        });
      }
    },
    590076: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var i = n(200651),
        l = n(192379),
        a = n(512722),
        r = n.n(a),
        s = n(399606),
        o = n(618158),
        c = n(594174),
        u = n(822183),
        d = n(364125),
        m = n(610947),
        f = n(848212);
      function p(e) {
        let { focused: t, channelId: n, streamerId: a, stream: u } = e,
          p = l.useRef(null),
          g = (0, s.e7)([c.default], () => c.default.getCurrentUser());
        r()(null != g, "user cannot be null"), (0, m.Z)(p, g, a, n);
        let {
          handleClick: h,
          handleMouseDown: v,
          handleMouseEnter: S,
          handleMouseMove: I,
          handleMouseUp: _,
        } = (0, d.Z)({
          user: g,
          channelId: n,
          streamerId: a,
          stream: u,
          focused: t,
          canvas: p.current,
        });
        return (0, i.jsx)(o.Z, {
          children: (0, i.jsx)("canvas", {
            ref: p,
            onClick: h,
            onMouseDown: v,
            onMouseEnter: S,
            onMouseMove: I,
            onMouseUp: _,
            className: f.sharedCanvas,
          }),
        });
      }
      function g(e) {
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
        a = n(395361),
        r = n(733597),
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
            label: g,
            tooltip: h,
            loading: v,
            disabled: S,
            onClick: I,
          } = (0, r.Ih)(t, n, o),
          _ = () => {
            null == p || p(), I();
          };
        return (0, i.jsx)(l.Tooltip, {
          text: h,
          children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n } = e;
            return (0, i.jsxs)(l.Button, {
              className: c,
              innerClassName: s.playButtonInner,
              size: u,
              look: d,
              color: m,
              fullWidth: f,
              onClick: _,
              onMouseEnter: t,
              onMouseLeave: n,
              disabled: S,
              submitting: v,
              children: [(0, i.jsx)(a.Z, { width: 16, height: 16 }), g],
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
        a = n.n(l),
        r = n(481060),
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
            className: g,
            onAction: h,
          } = e,
          {
            tooltip: v,
            loading: S,
            disabled: I,
            onClick: _,
          } = (0, o.Fe)(t, n, d, s.ZP.getNickname(u, l, n)),
          x = () => {
            null == h || h(), _();
          };
        return (0, i.jsx)(r.Tooltip, {
          text: v,
          children: (e) => {
            let { onMouseEnter: n, onMouseLeave: l } = e;
            return (0, i.jsx)(r.Button, {
              size: m,
              className: a()(c.syncButton, g),
              innerClassName: c.syncButtonInner,
              look: f,
              color: p,
              onClick: x,
              onMouseEnter: n,
              onMouseLeave: l,
              disabled: I,
              submitting: S,
              "aria-label": null != v ? v : t.name,
              children: (0, i.jsx)(r.UserPlayIcon, {
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
        a = n(481060),
        r = n(846027),
        s = n(131951),
        o = n(36703),
        c = n(388032);
      function u(e) {
        let t = (0, l.e7)([s.Z], () => (0, o.P)(s.Z.getInputVolume()));
        return (0, i.jsx)(a.MenuControlItem, {
          id: "input",
          label: c.intl.string(c.t.OX2Bnp),
          control: (n, l) =>
            (0, i.jsx)(a.MenuSliderControl, {
              ...n,
              ref: l,
              value: t,
              onChange: (t) =>
                r.Z.setInputVolume((0, o.A)(t), { analyticsLocations: e }),
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
        a = n(481060),
        r = n(846027),
        s = n(131951),
        o = n(358085),
        c = n(981631),
        u = n(388032);
      function d(e) {
        let t = !o.isPlatformEmbedded,
          n = (0, l.e7)([s.Z], () => s.Z.getMode()),
          d = (t, l) =>
            (0, i.jsx)(
              a.MenuRadioItem,
              {
                id: t,
                group: "input-modes",
                label: l,
                checked: n === t,
                action: () =>
                  r.Z.setMode(t, void 0, void 0, { analyticsLocations: e }),
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
        a = n(481060),
        r = n(846027),
        s = n(131951),
        o = n(36703),
        c = n(358085),
        u = n(388032);
      function d(e) {
        let t = (0, l.e7)([s.Z], () => (0, o.P)(s.Z.getOutputVolume()));
        return (0, i.jsx)(a.MenuControlItem, {
          id: "output",
          label: u.intl.string(u.t.eATD2N),
          control: (n, l) =>
            (0, i.jsx)(a.MenuSliderControl, {
              ...n,
              ref: l,
              value: t,
              maxValue: c.isPlatformEmbedded ? 200 : 100,
              onChange: (t) =>
                r.Z.setOutputVolume((0, o.A)(t), { analyticsLocations: e }),
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
        a = n(354459),
        r = n(388032);
      function s(e, t, n) {
        var s, o;
        if (t.type === a.fO.ACTIVITY)
          return null !== (o = null == n ? void 0 : n.name) && void 0 !== o
            ? o
            : null;
        let c = i.ZP.isGuestOrLurker(
          e.guild_id,
          null === (s = t.user) || void 0 === s ? void 0 : s.id,
        );
        return (
          l.ZP.getName(e.getGuildId(), e.id, t.user) +
          (c ? " ".concat(r.intl.string(r.t["pFO/Pj"])) : "")
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
    294629: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(442837),
        l = n(160404),
        a = n(314897),
        r = n(131951),
        s = n(496675),
        o = n(979651),
        c = n(981631);
      function u(e) {
        return (0, i.cj)([a.default, o.Z, r.Z, s.Z, l.Z], () =>
          (function (e) {
            var t;
            let {
                channel: n,
                authenticationStore: i = a.default,
                voiceStateStore: u = o.Z,
                mediaEngineStore: d = r.Z,
                permissionStore: m = s.Z,
                impersonateStore: f = l.Z,
              } = e,
              p = null != n ? u.getVoiceState(n.getGuildId(), i.getId()) : null,
              g = d.isSelfMute() || d.isSelfMutedTemporarily(),
              h = null == n ? void 0 : n.getGuildId(),
              v = f.isViewingRoles(h) && !m.can(c.Plq.SPEAK, n);
            return {
              selfMute: g,
              suppress: (null == p ? void 0 : p.suppress) || v,
              mute:
                null !== (t = null == p ? void 0 : p.mute) && void 0 !== t && t,
            };
          })({
            channel: e,
            authenticationStore: a.default,
            voiceStateStore: o.Z,
            mediaEngineStore: r.Z,
            permissionStore: s.Z,
            impersonateStore: l.Z,
          }),
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
        a = n(414910),
        r = n(226961),
        s = n(284902);
      function o(e) {
        let { currentUserId: t, participant: n } = e,
          o = (0, a.Z)(n.type),
          [c, u] = l.useState(),
          [d, m] = l.useState(),
          [f, p] = l.useState(),
          g = n.id.split(":").at(-1),
          h = t === g,
          v = l.useCallback((e, t, n) => {
            var i, l, a;
            let s = n ? r.ZP.getOutboundStats(t) : r.ZP.getInboundStats(e, t);
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
                  ? ((a = s.bitrateEstimate),
                    "".concat((a / 1e3).toFixed(2), " Kbps"))
                  : "unknown",
              );
          }, []);
        return (
          l.useEffect(() => {
            let e = () => v(g, o, h);
            e();
            let t = setInterval(e, 1e3);
            return () => clearInterval(t);
          }, [h, g, o, v]),
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
                h &&
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
        OV: function () {
          return k;
        },
        ZP: function () {
          return U;
        },
      }),
        n(47120);
      var i,
        l,
        a = n(200651),
        r = n(192379),
        s = n(120356),
        o = n.n(s),
        c = n(442837),
        u = n(481060),
        d = n(2052),
        m = n(317381),
        f = n(638880),
        p = n(413458),
        g = n(16609),
        h = n(527805),
        v = n(716600),
        S = n(778569),
        I = n(563218),
        _ = n(318891),
        x = n(884338),
        E = n(719296),
        C = n(958185),
        Z = n(100527),
        y = n(906732),
        b = n(890280),
        T = n(835473),
        A = n(522474),
        N = n(314897),
        w = n(819640),
        j = n(594174),
        P = n(823379),
        R = n(5192),
        M = n(388032),
        O = n(262745);
      ((l = i || (i = {}))[(l.SMALL = 0)] = "SMALL"),
        (l[(l.MEDIUM = 1)] = "MEDIUM"),
        (l[(l.LARGE = 2)] = "LARGE");
      let L = ["embedded_background"];
      function k(e) {
        let { avatarSize: t, guildId: n, channelId: i, users: l } = e,
          r = null != t ? t : u.AvatarSizes.SIZE_32,
          s = (0, u.getAvatarSize)(r);
        return (0, a.jsx)(x.Z, {
          size: s,
          guildId: n,
          users: l,
          max: 4,
          renderUser: (e) => {
            if (null == e) return null;
            let t = R.ZP.getName(n, i, e);
            return (0, a.jsx)(
              u.TooltipContainer,
              {
                text: t,
                color: u.TooltipColors.GREY,
                children: (0, a.jsx)(
                  "img",
                  { src: e.getAvatarURL(n, s), alt: t, className: O.avatar },
                  e.id,
                ),
              },
              e.id,
            );
          },
        });
      }
      function D(e) {
        var t, n, i, l;
        let { participants: s, application: g, channel: v, width: S } = e;
        let I = (i = S) > 400 ? 2 : i > 300 ? 1 : 0;
        let [_] =
            (l = S) > 400
              ? [u.AvatarSizes.SIZE_56, 56]
              : l > 300
                ? [u.AvatarSizes.SIZE_32, 32]
                : [u.AvatarSizes.SIZE_24, 24],
          x = (0, c.Wu)([j.default, N.default], () =>
            Array.from(s)
              .map((e) =>
                (0, p.J)(e, N.default) ? null : j.default.getUser(e.userId),
              )
              .filter(P.lm),
          ),
          E = (0, c.e7)([m.ZP], () =>
            m.ZP.getEmbeddedActivitiesForChannel(v.id).find(
              (e) => e.applicationId === g.id,
            ),
          ),
          { analyticsLocations: C } = (0, y.ZP)(),
          Z = (0, d.O)(),
          T = R.ZP.getName(v.getGuildId(), v.id, null == x ? void 0 : x[0]),
          A =
            (0, h.s5)({
              userId:
                null === (t = j.default.getCurrentUser()) || void 0 === t
                  ? void 0
                  : t.id,
              channelId: v.id,
              application: g,
            }) === h.Fw.CAN_JOIN,
          w = null !== (n = v.getGuildId()) && void 0 !== n ? n : void 0,
          L = r.useId(),
          D = v.id,
          U = g.id,
          { submitting: V } = (0, b.Z)({
            applicationId: U,
            channelId: D,
            launchingComponentId: L,
          });
        return (0, a.jsxs)("div", {
          className: O.splash,
          children: [
            (0, a.jsx)(k, {
              avatarSize: _,
              guildId: w,
              channelId: v.id,
              users: x,
            }),
            (0, a.jsx)(u.Text, {
              className: o()(O.subheader, {
                [O.small]: 0 === I,
                [O.medium]: 1 === I,
              }),
              variant: "text-sm/normal",
              children:
                x.length > 1
                  ? M.intl.formatToPlainString(M.t.cpe6CA, {
                      username: T,
                      count: x.length - 1,
                    })
                  : M.intl.formatToPlainString(M.t["7Uuia2"], { username: T }),
            }),
            (0, a.jsx)(u.Text, {
              className: o()(O.header, {
                [O.small]: 0 === I,
                [O.medium]: 1 === I,
              }),
              variant: "text-sm/normal",
              children: g.name,
            }),
            (0, a.jsx)("div", {
              className: O.buttons,
              children: A
                ? (0, a.jsx)(u.Button, {
                    onClick: function (e) {
                      if ((e.stopPropagation(), null != E))
                        (0, f.Z)({
                          applicationId: E.applicationId,
                          activityChannelId: v.id,
                          locationObject: Z.location,
                          analyticsLocations: C,
                          componentId: L,
                        });
                    },
                    submitting: V,
                    size: (function (e) {
                      switch (e) {
                        case 2:
                          return u.Button.Sizes.LARGE;
                        case 1:
                          return u.Button.Sizes.MEDIUM;
                        case 0:
                          return u.Button.Sizes.SMALL;
                      }
                    })(I),
                    className: O.button,
                    color: u.Button.Colors.PRIMARY,
                    children: M.intl.string(M.t["4i2vj4"]),
                  })
                : null,
            }),
          ],
        });
      }
      function U(e) {
        let {
            participant: t,
            width: n,
            selected: i,
            interactible: l,
            channel: s,
          } = e,
          { analyticsLocations: o } = (0, y.ZP)(Z.Z.ACTIVITY_TILE),
          { id: u } = t,
          d = (0, v.Z)(),
          m =
            null != d && (0, g.p)(d.location) === s.id && d.applicationId === u,
          [f] = (0, T.Z)([u]),
          { url: p } = (0, S.Z)({ applicationId: u, names: L, size: 1024 }),
          h = !i && m,
          x = !m,
          b = !m && !i,
          N = (0, c.e7)([w.Z, A.Z], () =>
            (0, C.Z)({ LayerStore: w.Z, PopoutWindowStore: A.Z }),
          );
        return (
          r.useEffect(() => {
            if (h && null != d && !N) {
              let e = (0, E.Z)(d.location.id, d.applicationId);
              (0, _.jy)(e);
            }
          }, [h, d, N]),
          (0, a.jsx)(y.Gt, {
            value: o,
            children: (0, a.jsx)("div", {
              className: O.container,
              children: (0, a.jsxs)(a.Fragment, {
                children: [
                  h &&
                    null != d &&
                    (0, a.jsx)(I.Z, {
                      className: O.iframe,
                      embedId: (0, E.Z)(d.location.id, u),
                    }),
                  x && null != f && null != p && "" !== p
                    ? (0, a.jsx)("img", {
                        className: O.splashImage,
                        alt: f.name,
                        src: p,
                      })
                    : null,
                  b &&
                    null != f &&
                    (0, a.jsx)(D, {
                      width: n,
                      channel: s,
                      participants: t.participants,
                      application: f,
                    }),
                  l || x
                    ? null
                    : (0, a.jsx)("div", { className: O.clickShield }),
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
          return ev;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        a = n(120356),
        r = n.n(a),
        s = n(848246),
        o = n(442837),
        c = n(692547),
        u = n(481060),
        d = n(846027),
        m = n(410575),
        f = n(607070),
        p = n(812206),
        g = n(835473),
        h = n(414910),
        v = n(415635),
        S = n(578976),
        I = n(332487),
        _ = n(324085),
        x = n(925329),
        E = n(649739),
        C = n(574176),
        Z = n(833858),
        y = n(223135),
        b = n(37091),
        T = n(6572),
        A = n(352978),
        N = n(936847),
        w = n(512384),
        j = n(6242),
        P = n(757692),
        R = n(386542),
        M = n(933843),
        O = n(746599),
        L = n(231664),
        k = n(614011),
        D = n(210975),
        U = n(695346),
        V = n(937995),
        F = n(456631),
        W = n(274459),
        B = n(314897),
        G = n(857192),
        z = n(77498),
        H = n(131951),
        Y = n(158776),
        J = n(594174),
        q = n(979651),
        X = n(374129),
        K = n(639351),
        Q = n(74538),
        $ = n(584729),
        ee = n(334374),
        et = n(849171),
        en = n(607187),
        ei = n(833519),
        el = n(462061),
        ea = n(623825),
        er = n(839662),
        es = n(981631),
        eo = n(354459),
        ec = n(37113),
        eu = n(524484),
        ed = n(65154),
        em = n(388032),
        ef = n(995544);
      let ep = l.memo((e) => {
        var t, n, a, c, x;
        let {
            participant: Z,
            onDoubleClick: y,
            onContextMenu: X,
            onClick: K,
            onMouseDown: ea,
            onKeyDown: ep,
            className: eg,
            style: ev,
            containerStyle: eS,
            channel: eI,
            width: e_,
            inPopout: ex,
            onVideoResize: eE,
            inCall: eC = !1,
            selected: eZ = !1,
            noBorder: ey = !1,
            noVideoRender: eb = !1,
            focused: eT = !1,
            blocked: eA = !1,
            ignored: eN = !1,
            fit: ew = A.L.CONTAIN,
            paused: ej = !1,
            pulseSpeakingIndicator: eP = !1,
            forceIdle: eR = !1,
          } = e,
          eM = l.useContext(V.h9) || eR,
          [eO, eL] = l.useState(!1),
          ek = U.Sb.useSetting(),
          eD = (0, o.e7)(
            [G.default],
            () => G.default.isStreamInfoOverlayEnabled,
          ),
          [eU, eV] = l.useState(!1),
          eF = (0, o.e7)([B.default], () => B.default.getId()),
          eW = (0, o.e7)([J.default], () => J.default.getCurrentUser()),
          eB =
            Z.type === eo.fO.ACTIVITY
              ? null
              : null === (t = Z.user) || void 0 === t
                ? void 0
                : t.id,
          [eG] = (0, g.Z)(Z.type === eo.fO.ACTIVITY ? [Z.id] : []),
          ez = (0, o.e7)([b.Z], () => b.Z.getEnabled()),
          eH = (0, o.e7)(
            [H.Z],
            () => null != eB && H.Z.isLocalVideoDisabled(eB, (0, h.Z)(Z.type)),
            [eB, Z.type],
          ),
          eY = (0, o.e7)(
            [H.Z],
            () =>
              null != eB
                ? H.Z.getVideoToggleState(eB, (0, h.Z)(Z.type))
                : es.ZUi.NONE,
            [eB, Z.type],
          ),
          eJ = eY === es.ZUi.AUTO_PROBING,
          { speaking: eq, ringing: eX, hasVideo: eK } = (0, er.Z)(Z, eF),
          eQ = (function (e, t, n) {
            var i, l, a, r;
            let s = (0, o.cj)([q.Z], () => {
                var e, i, l;
                let a = q.Z.getVoiceState(n, t.id);
                return {
                  muted:
                    null !== (e = null == a ? void 0 : a.mute) &&
                    void 0 !== e &&
                    e,
                  deafened:
                    null !== (i = null == a ? void 0 : a.deaf) &&
                    void 0 !== i &&
                    i,
                  suppressed:
                    null !== (l = null == a ? void 0 : a.suppress) &&
                    void 0 !== l &&
                    l,
                  voiceChannelId: null == a ? void 0 : a.channelId,
                };
              }),
              c = (0, o.cj)(
                [H.Z],
                () => {
                  let n = (0, h.Z)(t.type),
                    i = t.type !== eo.fO.ACTIVITY ? t.user.id : t.id;
                  return e === i
                    ? { muted: !1, deafened: !1 }
                    : {
                        muted: H.Z.isLocalMute(i, n),
                        localVideoDisabled: H.Z.isLocalVideoDisabled(i, n),
                        localVideoAutoDisabled: H.Z.isLocalVideoAutoDisabled(
                          i,
                          n,
                        ),
                      };
                },
                [e, t],
              );
            return {
              serverMuted: s.muted,
              serverDeafened: s.deafened,
              suppressed: s.suppressed,
              localMuted: c.muted,
              muted:
                null !==
                  (a =
                    t.type === eo.fO.USER &&
                    (null === (i = t.voiceState) || void 0 === i
                      ? void 0
                      : i.isVoiceMuted())) &&
                void 0 !== a &&
                a,
              deafened:
                null !==
                  (r =
                    t.type === eo.fO.USER &&
                    (null === (l = t.voiceState) || void 0 === l
                      ? void 0
                      : l.isVoiceDeafened())) &&
                void 0 !== r &&
                r,
            };
          })(eF, Z, eI.getGuildId()),
          e$ = Z.type === eo.fO.STREAM && eB === eF;
        l.useEffect(() => {
          if (
            e$ &&
            !Q.ZP.isPremium(eW) &&
            null != eI.hdStreamingUntil &&
            new Date(eI.hdStreamingUntil) > new Date()
          ) {
            let e = setTimeout(
              () => {
                let e = H.Z.getGoLiveSource(),
                  t = (0, S.s)(ec.LY.RESOLUTION_720, ec.ws.FPS_30, e);
                d.Z.setGoLiveSource(t);
              },
              new Date(eI.hdStreamingUntil).getTime() - Date.now(),
            );
            return () => clearTimeout(e);
          }
        });
        let e0 = (0, M.So)(s.q.STREAM_HIGH_QUALITY),
          { hqStreamingState: e1 } = (0, R.k)(s.q.STREAM_HIGH_QUALITY),
          e2 = (0, L.Z)(),
          e3 = e0 && e$ && null != e2,
          e9 = (0, P.o)(Z, eW),
          e4 = (0, j.lL)("CallTile", !0, eW, e9),
          e7 = (0, o.e7)([F.Z], () =>
            Z.type === eo.fO.USER && null != eB
              ? F.Z.getEffectForUserId(eB)
              : null,
          ),
          e6 = (0, o.e7)([q.Z], () =>
            q.Z.getVoicePlatformForChannel(eI.id, null != eB ? eB : es.lds),
          ),
          { enableHangStatus: e8 } = C.n.useExperiment({
            guildId: eI.guild_id,
            location: "VoiceUsers",
          }),
          { showGameIcon: e5 } = E.ZP.useExperiment(
            { location: "voice_users" },
            { autoTrackExposure: !1 },
          ),
          te = e5 || e8,
          { hangStatusActivity: tt, gameActivity: tn } = (0, o.cj)(
            [Y.Z],
            () => ({
              hangStatusActivity:
                e8 && null != eB
                  ? Y.Z.findActivity(eB, (e) => e.type === es.IIU.HANG_STATUS)
                  : null,
              gameActivity:
                te && null != eB
                  ? Y.Z.findActivity(
                      eB,
                      (e) =>
                        null != e.application_id && e.type === es.IIU.PLAYING,
                    )
                  : null,
            }),
            [e8, eB, te],
          ),
          ti = (0, o.e7)([z.Z], () =>
            (null == tn ? void 0 : tn.application_id) != null
              ? z.Z.getDetectableGame(tn.application_id)
              : null,
          ),
          tl = (0, o.e7)([p.Z], () =>
            null != ti && (null == tn ? void 0 : tn.application_id) != null
              ? p.Z.getApplication(null == tn ? void 0 : tn.application_id)
              : void 0,
          ),
          ta = (0, D.wV)({
            userId: eB,
            channelId: eI.id,
            location: "CallTile",
          }),
          tr = (0, D.zU)({
            streamKey: Z.type === eo.fO.STREAM ? Z.id : null,
            channelId: eI.id,
            location: "CallTile",
          }),
          ts = l.useMemo(
            () =>
              Z.type === eo.fO.STREAM
                ? null != tr && tr
                : Z.type === eo.fO.USER && null != ta && ta,
            [tr, ta, Z.type],
          );
        l.useEffect(() => {
          eL(eT);
        }, [eT]);
        let [to, tc] = l.useState(!1),
          tu = l.useCallback(() => {
            !f.Z.useReducedMotion && tc(!0);
          }, []);
        (0, _.J)(eI, tu);
        let td = l.useCallback(() => {
            null != eB && d.Z.toggleLocalMute(eB, ed.Yn.STREAM);
          }, [eB]),
          tm = l.useCallback(() => {
            (0, O.hP)();
          }, []),
          tf = l.useCallback(
            (e) => {
              null == K || K(Z, e);
            },
            [K, Z],
          ),
          tp = l.useCallback(
            (e) => {
              null == y || y(Z, e);
            },
            [y, Z],
          ),
          tg = l.useCallback(
            (e) => {
              null == X || X(Z, e);
            },
            [X, Z],
          ),
          th = eM;
        e3 && (th = !1);
        let tv = null,
          tS = null,
          tI = "";
        switch (Z.type) {
          case eo.fO.STREAM:
            (tv = (0, i.jsx)(ei.Z, {
              participant: Z,
              selected: eZ,
              width: e_,
              fit: ew,
              onVideoResize: eE,
              paused: ej,
              inPopout: ex,
              focused: eT,
            })),
              (tS = (0, i.jsx)(ei._, {
                participant: Z,
                selected: eZ,
                width: e_,
                focused: eT,
                idle: th,
                premiumIndicator: e3 || e4.enabled,
              })),
              (tI = em.intl.formatToPlainString(em.t.gHPz3d, {
                streamerName: Z.user.username,
              }));
            break;
          case eo.fO.USER:
            (tv = (0, i.jsx)(el.Z, {
              channel: eI,
              inCall: eC,
              participant: Z,
              fit: ew,
              onVideoResize: eE,
              paused: ej,
              selected: eZ,
              width: e_,
              blocked: eA,
              ignored: eN,
              noVideoRender: eb || eJ,
              pulseSpeakingIndicator: eP,
            })),
              (tS = (0, i.jsx)(el.T, { userId: Z.user.id, channelId: eI.id })),
              (tI = em.intl.formatToPlainString(em.t["iC/x/f"], {
                username: Z.user.username,
              }));
            break;
          case eo.fO.ACTIVITY:
            (tv = (0, i.jsx)(et.ZP, {
              interactible: eT,
              participant: Z,
              selected: eZ,
              channel: eI,
              width: e_,
            })),
              (tI = em.intl.formatToPlainString(em.t.YCvOsL, {
                activityName: null == eG ? void 0 : eG.name,
              }));
            break;
          case eo.fO.HIDDEN_STREAM:
            tv = (0, i.jsx)(ei.Z, {
              participant: Z,
              selected: eZ,
              width: e_,
              fit: ew,
              onVideoResize: eE,
              paused: ej,
              inPopout: ex,
              focused: eT,
            });
        }
        let t_ = l.useRef(null),
          tx = Z.type === eo.fO.STREAM ? u.ScreenIcon : u.VideoIcon;
        return (0, i.jsx)(m.Z, {
          section: es.jXE.VOICE_CHANNEL_TILE,
          children: (0, i.jsxs)("div", {
            className: r()(ef.wrapper, { [ef.ringing]: eX }, eg),
            style: eS,
            onMouseEnter: () => {
              eV(!0);
            },
            onMouseLeave: () => {
              eV(!1);
            },
            children: [
              to &&
                Z.type === eo.fO.STREAM &&
                (0, i.jsx)(I.Z, {
                  baseTileRef: t_.current,
                  cleanup: () => tc(!1),
                }),
              (0, i.jsxs)(w.Z, {
                shakeLocation: eu.oZ.VOICE_USER,
                isShaking: eq,
                className: ef.tile,
                children: [
                  (0, i.jsx)(en.Z, {
                    ref: t_,
                    className: r()(ef.tile, {
                      [ef.noBorder]: ey,
                      [ef.noInteraction]: null == K,
                      [ef.idle]: eM,
                    }),
                    noBorder: ey,
                    style: ev,
                    participantUserId: eB,
                    children: (0, i.jsxs)(u.ClickableContainer, {
                      "aria-label": tI,
                      className: ef.tileChild,
                      onDoubleClick: tp,
                      onContextMenu: tg,
                      onClick: tf,
                      onMouseDown: ea,
                      onKeyDown: ep,
                      focusProps: { offset: 1 },
                      children: [
                        null != e7 && null != eB
                          ? (0, i.jsx)(W.Z, {
                              voiceChannelEffect: e7,
                              onComplete: () => (0, F.H)(eB),
                              userId: eB,
                            })
                          : null,
                        Z.type === eo.fO.USER
                          ? (0, i.jsx)("div", {
                              className: ef.voiceChannelEffectsContainer,
                              children: (0, i.jsx)(v.Z, {
                                userId: eB,
                                channelId: eI.id,
                                guildId: eI.getGuildId(),
                                containerDimensions: {
                                  width:
                                    null !==
                                      (c =
                                        null == t_
                                          ? void 0
                                          : null === (n = t_.current) ||
                                              void 0 === n
                                            ? void 0
                                            : n.clientWidth) && void 0 !== c
                                      ? c
                                      : 0,
                                  height:
                                    null !==
                                      (x =
                                        null == t_
                                          ? void 0
                                          : null === (a = t_.current) ||
                                              void 0 === a
                                            ? void 0
                                            : a.clientHeight) && void 0 !== x
                                      ? x
                                      : 0,
                                },
                              }),
                            })
                          : null,
                        tv,
                        e3
                          ? (0, i.jsx)(k.W, {
                              onPlayed: tm,
                              played: e1.hqStreamingFrameAnimationPlayed,
                            })
                          : null,
                        ey
                          ? null
                          : (0, i.jsx)("div", {
                              className: ef.indicators,
                              children: tS,
                            }),
                        eZ
                          ? (0, i.jsx)("div", {
                              className: ef.selectedScreen,
                              children: (0, i.jsx)(tx, {
                                size: "md",
                                color: "currentColor",
                                className: ef.selectedIcon,
                              }),
                            })
                          : null,
                        Z.type !== eo.fO.ACTIVITY
                          ? (0, i.jsx)(eh, {
                              focused: eT,
                              width: e_,
                              inCall: eC,
                              participantType: Z.type,
                              hasVideo: null != eK && eK,
                              ...eQ,
                              idle: eM,
                              platform: e6,
                              title: (0, $.Z)(eI, Z),
                              blocked: eA,
                              ignored: eN,
                              localVideoDisabled: eH,
                              videoToggleState: eY,
                              hideAudioIcon: e$,
                              onContextMenu: tg,
                              onToggleMute: td,
                              participantUserId: eB,
                              hangStatusActivity: tt,
                              application: tl,
                              speaking: eq,
                              secureFramesVerified: ts,
                            })
                          : null,
                        Z.type === eo.fO.USER && ez
                          ? (0, i.jsx)(T.Z, { userId: Z.id, channelId: eI.id })
                          : null,
                        eC && !ey
                          ? (0, i.jsx)("div", {
                              className: r()(ef.border, {
                                [ef.voiceChannelEffect]: !eT && null != e7,
                                [ef.speaking]: eq && !eT,
                              }),
                            })
                          : null,
                      ],
                    }),
                  }),
                  ek &&
                    eD &&
                    eU &&
                    (0, i.jsx)(ee.Z, { currentUserId: eF, participant: Z }),
                  (0, i.jsx)(N.Z, { isFiring: eO, callTileRef: t_.current }),
                ],
              }),
            ],
          }),
        });
      });
      function eg(e) {
        let { participantType: t, platform: n, className: l } = e;
        if (t === eo.fO.STREAM)
          return n === eo.wR.XBOX
            ? (0, i.jsx)(K.Z, { className: l })
            : (0, i.jsx)(u.ScreenIcon, {
                size: "md",
                color: "currentColor",
                className: l,
              });
        switch (n) {
          case eo.wR.MOBILE:
            return (0, i.jsx)(u.MobilePhoneIcon, {
              size: "xs",
              color: "currentColor",
              className: l,
            });
          case eo.wR.XBOX:
            return (0, i.jsx)(K.Z, { className: l });
          case eo.wR.PLAYSTATION:
            return (0, i.jsx)(X.Z, { className: l });
          default:
            return null;
        }
      }
      ep.displayName = "CallTile";
      let eh = l.memo((e) => {
        let {
            muted: t,
            deafened: n,
            localMuted: l,
            serverMuted: a,
            serverDeafened: s,
            idle: d,
            title: m,
            width: f,
            hasVideo: p,
            inCall: g,
            localVideoDisabled: v,
            videoToggleState: S,
            focused: I,
            blocked: _,
            ignored: E,
            hideAudioIcon: C,
            participantType: b,
            participantUserId: T,
            onContextMenu: A,
            onToggleMute: N,
            platform: w,
            hangStatusActivity: j,
            application: P,
            speaking: R,
            secureFramesVerified: M,
          } = e,
          O = null,
          L = null,
          k = null,
          D = null,
          U = (0, ea.K)(f),
          V = (0, ea.N)(f),
          F = (0, o.e7)(
            [H.Z],
            () => null != T && H.Z.isLocalVideoAutoDisabled(T, (0, h.Z)(b)),
            [T, b],
          ),
          W = (0, u.useRedesignIconContext)().enabled;
        if (!C) {
          if (l && b === eo.fO.STREAM && p && !I)
            O = (0, i.jsx)(u.Tooltip, {
              text: em.intl.string(em.t.YqAjX1),
              children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, i.jsx)(u.Clickable, {
                  ...n,
                  onClick: (e) => {
                    e.stopPropagation(), null == t || t(), N();
                  },
                  className: r()(ef.interactive, ef.toggleMute),
                  children: (0, i.jsx)(u.VoiceXIcon, {
                    size: "md",
                    color: "currentColor",
                  }),
                });
              },
            });
          else if (l || b !== eo.fO.STREAM || !p || U || I) {
            if (W) {
              let e;
              s
                ? (e = u.HeadphonesDenyIcon)
                : a
                  ? (e = u.MicrophoneDenyIcon)
                  : n
                    ? (e = u.HeadphonesSlashIcon)
                    : l
                      ? (e = u.MicrophoneDenyIcon)
                      : t && (e = u.MicrophoneSlashIcon),
                (O =
                  null != e
                    ? (0, i.jsx)(e, { color: c.Z.colors.WHITE })
                    : null);
            } else if (n || t || l) {
              let e = n ? u.HeadphonesSlashIcon : u.MicrophoneSlashIcon;
              O = (0, i.jsx)(e, { color: "currentColor" });
            }
          } else
            O = (0, i.jsx)(u.Tooltip, {
              text: em.intl.string(em.t["w4m94+"]),
              children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, i.jsx)(u.Clickable, {
                  ...n,
                  onClick: (e) => {
                    e.stopPropagation(), null == t || t(), N();
                  },
                  className: r()(ef.interactive, ef.toggleMute),
                  children: (0, i.jsx)(u.VoiceNormalIcon, {
                    size: "md",
                    color: "currentColor",
                  }),
                });
              },
            });
        }
        return (
          (g && H.Z.supports(ed.AN.VIDEO)) || !p
            ? g &&
              p &&
              v &&
              !F &&
              (L = (0, i.jsx)(u.VideoSlashIcon, {
                size: "md",
                color: "currentColor",
                colorClass: ef.localMuteStrikethrough,
              }))
            : (L = (0, i.jsx)(u.VideoIcon, {
                size: "md",
                color: "currentColor",
              })),
          b === eo.fO.STREAM &&
            !I &&
            p &&
            (k = (0, i.jsx)(u.Tooltip, {
              text: em.intl.string(em.t["+1H47u"]),
              children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, i.jsx)(u.Clickable, {
                  ...n,
                  onClick: (e) => {
                    e.stopPropagation(), null == t || t(), A(e);
                  },
                  className: r()(ef.status, ef.interactive),
                  children: (0, i.jsx)(u.MoreHorizontalIcon, {
                    size: "md",
                    color: "currentColor",
                  }),
                });
              },
            })),
          b === eo.fO.USER && null != j
            ? (D = (0, i.jsx)(u.Tooltip, {
                text: (0, Z.O8)(j),
                children: (e) =>
                  (0, i.jsx)("div", {
                    ...e,
                    className: r()(ef.hangStatusContainer, {
                      [ef.hangStatusSmall]: f < 500,
                    }),
                    children: (0, i.jsx)(y.Z, {
                      hangStatusActivity: j,
                      className: ef.hangStatusIcon,
                      animate: R,
                    }),
                  }),
              }))
            : b === eo.fO.USER &&
              null != P &&
              (D = (0, i.jsx)(u.Tooltip, {
                text: em.intl.formatToPlainString(em.t.Sq9xJy, {
                  game: P.name,
                }),
                children: (e) =>
                  (0, i.jsx)("div", {
                    ...e,
                    className: r()(ef.hangStatusContainer, {
                      [ef.hangStatusSmall]: f < 500,
                    }),
                    children: (0, i.jsx)(x.Z, {
                      className: ef.hangStatusIcon,
                      game: P,
                      size: x.Z.Sizes.SMALL,
                    }),
                  }),
              })),
          (0, i.jsxs)("div", {
            className: ef.overlayContainer,
            children: [
              (0, i.jsx)("div", {
                className: r()(ef.overlayTop, { [ef.small]: f < 195 }),
                children:
                  F || S === es.ZUi.AUTO_PROBING
                    ? d
                      ? (0, i.jsx)("div", {
                          className: ef.status,
                          children: (0, i.jsx)(u.VideoSlashIcon, {
                            size: "md",
                            color: "currentColor",
                          }),
                        })
                      : (0, i.jsxs)("div", {
                          className: r()(
                            ef.overlayTitle,
                            ef.videoDisabledTitle,
                          ),
                          children: [
                            (0, i.jsx)("div", {
                              className: ef.status,
                              children: (0, i.jsx)(u.VideoSlashIcon, {
                                size: "md",
                                color: "currentColor",
                              }),
                            }),
                            (0, i.jsx)(u.Text, {
                              variant: "text-sm/normal",
                              className: ef.overlayTitleText,
                              children: em.intl.string(em.t.m2Hyj4),
                            }),
                          ],
                        })
                    : null,
              }),
              (0, i.jsxs)("div", {
                className: r()(ef.overlayBottom, { [ef.small]: f < 195 }),
                children: [
                  V
                    ? (0, i.jsx)("div", {})
                    : (0, i.jsxs)(u.Text, {
                        className: r()(ef.overlayTitle, { [ef.idle]: d }),
                        color: "none",
                        variant: "text-md/normal",
                        children: [
                          _
                            ? (0, i.jsx)("div", {
                                className: ef.blocked,
                                children: (0, i.jsx)(u.DenyIcon, {
                                  size: "lg",
                                  className: ef.blockedIcon,
                                  color: c.Z.unsafe_rawColors.RED_400.css,
                                }),
                              })
                            : null,
                          E
                            ? (0, i.jsx)("div", {
                                className: ef.ignored,
                                children: (0, i.jsx)(u.EyeSlashIcon, {
                                  size: "lg",
                                  className: ef.blockedIcon,
                                }),
                              })
                            : null,
                          (0, i.jsx)(eg, {
                            participantType: b,
                            platform: w,
                            className: ef.titleIcon,
                          }),
                          null != m && "" !== m
                            ? (0, i.jsx)("span", {
                                className: ef.overlayTitleText,
                                children: m,
                              })
                            : null,
                          M &&
                            (0, i.jsx)(u.Tooltip, {
                              text: em.intl.string(em.t.ZEem6O),
                              children: (e) =>
                                (0, i.jsx)(u.ShieldLockIcon, {
                                  ...e,
                                  className: ef.secureFramesIcon,
                                  size: "xs",
                                  color: c.Z.colors.HEADER_PRIMARY,
                                  "aria-label": em.intl.string(em.t.mR9cf3),
                                }),
                            }),
                        ],
                      }),
                  (0, i.jsxs)("div", {
                    className: ef.statusContainer,
                    children: [
                      null != L &&
                        (0, i.jsx)("div", {
                          className: ef.status,
                          children: L,
                        }),
                      null != O &&
                        (0, i.jsx)("div", {
                          className: ef.status,
                          children: O,
                        }),
                      k,
                      D,
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      });
      eh.displayName = "CallTileOverlay";
      let ev = A.L;
      t.ZP = ep;
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
        a = n(392711),
        r = n(933546),
        s = n(314897),
        o = n(70956),
        c = n(823379),
        u = n(27457),
        d = n(354459),
        m = n(340665);
      let f = 112,
        p = (16 / 9) * f + 8,
        g = 10 * o.Z.Millis.SECOND;
      function h(e) {
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
          }, g);
          return () => {
            clearTimeout(e);
          };
        }, [t]);
        let I = l.useRef({}),
          { visibleParticipants: _, participantTileWidth: x } =
            l.useMemo(() => {
              let n = Date.now(),
                l = (0, a.sortBy)(t, (e) =>
                  (function (e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : Date.now();
                    switch (e.type) {
                      case d.fO.ACTIVITY:
                        return "\0".concat(e.sortKey);
                      case d.fO.HIDDEN_STREAM:
                      case d.fO.STREAM:
                        return "\x01".concat((0, r.Z)(e.userNick, e.user));
                      case d.fO.USER:
                        var n;
                        let i = "\x05";
                        return (
                          e.speaking
                            ? (i = "\x02")
                            : t - e.lastSpoke < g
                              ? (i = "\x03")
                              : (null === (n = e.voiceState) || void 0 === n
                                  ? void 0
                                  : n.selfVideo) && (i = "\x04"),
                          ""
                            .concat(i)
                            .concat(
                              (function (e) {
                                let t = String(864e13).length;
                                return String(864e13 - e).padStart(t, "0");
                              })(e.lastSpoke),
                            )
                            .concat((0, r.Z)(e.userNick, e.user))
                        );
                    }
                  })(e, n),
                ),
                [f, p] = (0, a.partition)(l, d.Io),
                v = f.findIndex(h),
                S = null;
              -1 !== v && ((S = f[v]), f.splice(v, 1));
              let _ = null == S || m ? e : e - i - o,
                x = Math.max(
                  0,
                  Math.min(Math.floor((_ - o) / (s + o)), u, t.length),
                ),
                E = Math.min((_ - o) / x - o, i),
                C = Math.max(0, x - p.length),
                Z = p.slice(0, x),
                y = f.slice(0, C),
                b = Array(C);
              if (C > 0) {
                let e = [];
                for (let t of y) {
                  let n = I.current[t.id];
                  null != n && n < C ? (b[n] = t) : e.push(t);
                }
                for (let t = 0; t < b.length; t++) {
                  if (null != b[t]) continue;
                  let n = e.shift();
                  if (null == n) break;
                  b[t] = n;
                }
              }
              let T = b.filter(c.lm),
                A = (0, a.keyBy)((0, a.range)(T.length), (e) => T[e].id);
              I.current = A;
              let N = [...Z, ...T];
              return (
                null != S &&
                  (m && N.length >= x
                    ? (N[Math.max(0, N.length - 1)] = S)
                    : N.push(S)),
                { visibleParticipants: N, participantTileWidth: E }
              );
            }, [e, t, v, f, m, u, o, s, i]);
        return { visibleParticipants: _, participantTileWidth: x };
      }
      function S(e) {
        let {
            participants: t,
            participantTileWidth: n,
            selectedParticipantId: l,
            onDoubleClick: a,
            onContextMenu: r,
            onClick: s,
            channel: o,
            inCall: c,
            popoutWindow: d,
            paused: f = !1,
          } = e,
          g = null != d;
        return (0, i.jsx)("div", {
          className: m.root,
          children: t.map((e) => {
            if (null == e) return null;
            let t = h(e);
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
                  onDoubleClick: a,
                  onContextMenu: r,
                  width: t ? p : n,
                  inCall: c,
                  paused: f,
                  inPopout: g,
                }),
              },
              e.id,
            );
          }),
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
        a = n(666912),
        r = n(442837),
        s = n(780384),
        o = n(481060),
        c = n(435064),
        u = n(39604),
        d = n(175470),
        m = n(569545),
        f = n(314910),
        p = n(340534);
      let g = { visibility: "hidden" },
        h = { precision: 1e-4, duration: 300 },
        v = { tension: 150, friction: 20, precision: 1e-4, bounce: 0 },
        S = { duration: 1e3 };
      function I(e) {
        let { stream: t, inPopout: n } = e,
          { reducedMotion: I } = l.useContext(s.Sf),
          _ = (0, l.useRef)(null),
          x = d.n.getState().clipsButtonRef,
          E = (0, m.V9)(t),
          C = (0, r.e7)([c.Z], () => c.Z.getActiveAnimation()),
          Z = (0, r.Wu)([c.Z], () => c.Z.getStreamClipAnimations(E)),
          y = (0, l.useRef)();
        l.useEffect(
          () => () => {
            (0, u.Gh)(E);
          },
          [E],
        );
        let b = () => {
            var e;
            let t =
              null === (e = _.current) || void 0 === e
                ? void 0
                : e.getBoundingClientRect();
            return null == t || n
              ? g
              : { width: t.width, height: t.height, top: t.top, left: t.left };
          },
          T = (e) => {
            let t = null == x ? void 0 : x.getBoundingClientRect();
            if (((y.current = t), e.timestamp !== C || null == t || n))
              return g;
            let { top: i, left: l } = t;
            return { top: i + 36, left: l - 216, height: 151, width: 268 };
          },
          A = (0, l.useRef)(null),
          N = (0, o.useTransition)(
            Z,
            {
              keys: (e) => e.timestamp,
              ref: A,
              from: { opacity: 0.2 },
              enter: { opacity: 0 },
              config: h,
            },
            "animate-always",
          ),
          w = (0, l.useRef)(null),
          j = (0, o.useTransition)(
            Z,
            {
              ref: w,
              keys: (e) => e.timestamp,
              from: (e) => ({
                position: "fixed",
                visibility: "hidden",
                opacity: 1,
                ...(I.enabled ? T(e) : b()),
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
                  null != Z.find((e) => e.timestamp === t.item.timestamp) &&
                  (0, u.Gh)(E, t.item.timestamp);
              },
            },
            "animate-always",
          );
        return (
          (0, a.useChain)([A, w], [0, 0.1], 3e3),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", { className: p.hidden, ref: _ }),
              N(
                (e, t) =>
                  null != t &&
                  (0, i.jsx)(a.animated.div, {
                    className: p.whiteFlash,
                    style: e,
                  }),
              ),
              (0, i.jsx)(f.ZP, {
                children: (0, i.jsx)("div", {
                  className: p.hidden,
                  children: j(
                    (e, t, n, l) =>
                      (null == t ? void 0 : t.thumbnail) != null &&
                      (0, i.jsx)(a.animated.img, {
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
        a = n.n(l),
        r = n(481060),
        s = n(871118),
        o = n(388032),
        c = n(995544);
      function u(e) {
        let { stream: t, isSmall: n, selected: l, isSelfStream: u } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(s.Z, {
              className: a()(c.absoluteFill, c.streamPreviewOpacity),
              stream: t,
              noText: !0,
            }),
            !l &&
              (0, i.jsxs)("div", {
                className: a()(c.content, c.streamUnavailable, {
                  [c.small]: n,
                }),
                children: [
                  (0, i.jsx)(r.Text, {
                    className: c.streamUnavailableText,
                    color: "always-white",
                    variant: n ? "text-sm/semibold" : "text-md/semibold",
                    children: u
                      ? o.intl.string(o.t.UeEwj4)
                      : o.intl.string(o.t["1i3tSU"]),
                  }),
                  (0, i.jsx)(r.TooltipContainer, {
                    text: u
                      ? o.intl.string(o.t["ro/HNz"])
                      : o.intl.string(o.t.UPf6ZG),
                    className: c.darkCircle,
                    children: (0, i.jsx)("div", {
                      children: (0, i.jsx)(r.ScreenSlashIcon, {
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
          return B;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        a = n(120356),
        r = n.n(a),
        s = n(442837),
        o = n(481060),
        c = n(475179),
        u = n(872810),
        d = n(493773),
        m = n(763520),
        f = n(194082),
        p = n(324085),
        g = n(710845),
        h = n(590293),
        v = n(863908),
        S = n(871118),
        I = n(517525),
        _ = n(352978),
        x = n(590076),
        E = n(507675),
        C = n(199902),
        Z = n(314897),
        y = n(592125),
        b = n(131951),
        T = n(451478),
        A = n(685203),
        N = n(112560),
        w = n(442168),
        j = n(822296),
        P = n(916771),
        R = n(792517),
        M = n(979425),
        O = n(651183),
        L = n(623825),
        k = n(981631),
        D = n(354459),
        U = n(65154),
        V = n(388032),
        F = n(995544);
      let W = new g.Z("StreamTile");
      function B(e) {
        let {
            participant: t,
            selected: n,
            focused: a,
            idle: r,
            width: o,
            premiumIndicator: c,
          } = e,
          u = (0, s.e7)([C.Z], () =>
            C.Z.getActiveStreamForUser(t.user.id, t.stream.guildId),
          ),
          d = (0, L.K)(o),
          [m, g] = l.useState(!1),
          h = (0, s.e7)([y.Z], () =>
            y.Z.getChannel(null == u ? void 0 : u.channelId),
          );
        return (
          (0, p.J)(h, () => {
            let e = setTimeout(() => {
                g(!0);
              }, 5e3),
              t = setTimeout(() => {
                g(!1);
              }, 15e3);
            return () => {
              g(!1), clearTimeout(e), clearTimeout(t);
            };
          }),
          (0, i.jsxs)(i.Fragment, {
            children: [
              n ? null : (0, i.jsx)(O.Z, { participant: t }),
              a ||
              null == u ||
              u.state === k.jm8.ENDED ||
              u.state === k.jm8.FAILED
                ? null
                : (0, i.jsx)(I.Z, {
                    size: f.ZP.Sizes.SMALL,
                    className: F.liveIndicator,
                    participant: t,
                    showQuality: (!d && !r) || m,
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
            onVideoResize: a,
            paused: f,
            fit: p,
            inPopout: g,
            width: I,
            focused: O,
            wrapperClassName: L,
          } = e,
          B = b.Z.getVideoComponent(),
          G = (0, s.e7)([Z.default], () => Z.default.getId()),
          z = (0, h.Z)(),
          { stream: H, user: Y, streamId: J } = t,
          q = (0, s.e7)([y.Z], () => y.Z.getChannel(H.channelId)),
          X = (0, s.e7)(
            [C.Z],
            () => C.Z.getActiveStreamForUser(Y.id, H.guildId),
            [Y.id, H.guildId],
          ),
          K = (0, s.e7)([C.Z], () => C.Z.getAllActiveStreams().length > 0),
          Q = (0, s.e7)([T.Z], () => T.Z.isFocused()),
          $ = (null == X ? void 0 : X.ownerId) === G,
          ee = $ && !Q && !g,
          et = null != X ? (0, v.Z)(X, Y, Y.id === G, ee) : null,
          en = I < 195;
        if (
          ((0, d.Z)(() => {
            !K &&
              (null == q ? void 0 : q.isGuildStageVoice()) &&
              !$ &&
              ((0, u.rn)(H), c.Z.updateStageStreamSize(H.channelId, !1));
          }),
          l.useEffect(() => {
            W.info(
              "Stream Tile State - activeStream: "
                .concat(null != X, " | selected: ")
                .concat(n, " | Video: ")
                .concat(null != B, " | MediaEngine: ")
                .concat(b.Z.supports(U.AN.VIDEO)),
            );
          }, [B, X, n]),
          z)
        )
          return (0, i.jsx)(M.Z, {
            stream: t.stream,
            isSmall: en,
            selected: n,
            isSelfStream: Y.id === G,
          });
        if ((null == X ? void 0 : X.state) === k.jm8.ENDED)
          return (0, i.jsx)(j.Z, { selected: n, stream: X, width: I });
        if ((null == X ? void 0 : X.state) === k.jm8.FAILED)
          return (0, i.jsx)(P.Z, { selected: n, stream: X, width: I });
        else if (t.type === D.fO.HIDDEN_STREAM)
          return (0, i.jsx)(R.Z, { selected: n, participant: t, width: I });
        else if (null != X && !n && null != B && b.Z.supports(U.AN.VIDEO))
          return (0, i.jsxs)(i.Fragment, {
            children: [
              null != q
                ? (0, i.jsx)(x.Z, {
                    focused: O,
                    channelId: q.id,
                    guildId: q.guild_id,
                    streamerId: Y.id,
                    hasScreenMessage: null != et,
                    stream: H,
                  })
                : null,
              (0, i.jsx)(
                _.Z,
                {
                  onResize: a,
                  wrapperClassName: r()(F.videoWrapper, L),
                  className: F.content,
                  streamId: J,
                  videoComponent: B,
                  fit: p,
                  paused: f || ee,
                  videoSpinnerContext: $ ? m.m.SELF_STREAM : m.m.REMOTE_STREAM,
                  userId: Y.id,
                },
                J,
              ),
              null != et ? (0, i.jsx)(E.Z, { size: (0, N.L)(I), ...et }) : null,
              (0, i.jsx)(w.Z, { stream: H, inPopout: g }),
            ],
          });
        else
          return (0, i.jsxs)("div", {
            className: r()(F.content, F.streamPreview, { [F.small]: en }),
            children: [
              (0, i.jsx)(S.Z, {
                noText: !0,
                className: r()(F.absoluteFill, {
                  [F.streamPreviewOpacity]: null == X,
                }),
                stream: t.stream,
              }),
              n
                ? null
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(A.a, {
                        isSmall: en,
                        children: (0, i.jsx)(o.Text, {
                          variant: en ? "text-sm/semibold" : "text-md/semibold",
                          color: "none",
                          children:
                            I < 175
                              ? V.intl.string(V.t["I6JG4+"])
                              : V.intl.string(V.t["7Xq/nZ"]),
                        }),
                      }),
                      K
                        ? (0, i.jsx)(A.a, {
                            className: F.addCTA,
                            tooltip: V.intl.string(V.t.wCrzur),
                            onClick: (e) => {
                              e.stopPropagation(),
                                (0, u.rn)(H, { forceMultiple: !0 });
                            },
                            isSmall: en,
                            children: (0, i.jsx)(o.EyePlusIcon, {
                              size: "xs",
                              color: "currentColor",
                              className: F.addStreamIcon,
                            }),
                          })
                        : null,
                    ],
                  }),
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
        a = n(42326),
        r = n(906467);
      function s(e) {
        var t;
        let { participant: n, className: s } = e;
        let o =
          null == (t = (0, l.Z)(n))
            ? null
            : r.Z.isDeveloper
              ? "".concat(t.message, " (").concat(t.errorType, ")")
              : t.message;
        return null != o
          ? (0, i.jsx)(a.Z, { className: s, errorMessage: o })
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
          return j;
        },
      });
      var i = n(200651),
        l = n(192379),
        a = n(120356),
        r = n.n(a),
        s = n(442837),
        o = n(481060),
        c = n(475179),
        u = n(763520),
        d = n(358221),
        m = n(414910),
        f = n(266910),
        p = n(352978),
        g = n(928518),
        h = n(518950),
        v = n(470956),
        S = n(314897),
        I = n(271383),
        _ = n(131951),
        x = n(451478),
        E = n(5192),
        C = n(44136),
        Z = n(981631),
        y = n(65154),
        b = n(388032),
        T = n(995544);
      let A = o.AvatarSizes.SIZE_80,
        N = o.AvatarSizes.SIZE_40;
      function w(e) {
        let { channelId: t, userId: n } = e;
        return (0, v.Eu)(t, n)
          ? (0, i.jsx)(o.Tooltip, {
              text: b.intl.string(b.t.HFwRpq),
              position: "bottom",
              color: o.TooltipColors.GREY,
              children: (e) =>
                (0, i.jsx)("div", {
                  ...e,
                  className: T.interactive,
                  children: (0, i.jsx)(o.CircleWarningIcon, {
                    color: o.tokens.colors.STATUS_WARNING_BACKGROUND,
                  }),
                }),
            })
          : null;
      }
      function j(e) {
        let {
            participant: t,
            channel: n,
            inCall: a,
            width: o,
            paused: v,
            selected: w,
            fit: j,
            onVideoResize: P,
            blocked: R,
            ignored: M,
            noVideoRender: O = !1,
            pulseSpeakingIndicator: L = !1,
          } = e,
          k = _.Z.getVideoComponent(),
          D = (0, s.e7)([S.default], () => S.default.getId()),
          { user: U, streamId: V, speaking: F } = t,
          W = U.id === D,
          B = (0, C.ZP)(t),
          G = (0, s.e7)([x.Z], () => x.Z.isFocused()),
          z = (0, s.e7)([g.Z], () =>
            g.Z.getWindowFocused(Z.KJ3.CHANNEL_CALL_POPOUT),
          ),
          H = (0, s.e7)(
            [_.Z],
            () =>
              null != U.id && _.Z.isLocalVideoDisabled(U.id, (0, m.Z)(t.type)),
            [U.id, t.type],
          ),
          Y = (0, s.e7)([I.ZP], () => I.ZP.isGuestOrLurker(n.guild_id, U.id)),
          J =
            E.ZP.getName(n.getGuildId(), n.id, U) +
            (Y ? " ".concat(b.intl.string(b.t["pFO/Pj"])) : ""),
          q = F && (z || G),
          X = o < 124 ? N : A,
          { avatarSrc: K, avatarDecorationSrc: Q } = (0, h.Z)({
            user: U,
            guildId: n.guild_id,
            size: X,
            animateOnHover: !q,
          }),
          $ = (0, s.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)),
          ee = { channel: n, selectedParticipant: $, user: U },
          et = l.useRef(ee);
        return (l.useEffect(() => {
          et.current = ee;
        }),
        l.useEffect(() => {
          let { channel: e, selectedParticipant: t, user: n } = et.current;
          e.isGuildStageVoice() &&
            !B &&
            (null == t ? void 0 : t.id) === n.id &&
            c.Z.selectParticipant(e.id, null);
        }, [B]),
        a && !H && !O && B && !w && null != k && _.Z.supports(y.AN.VIDEO))
          ? (0, i.jsx)(
              p.Z,
              {
                onResize: P,
                wrapperClassName: T.videoWrapper,
                className: T.content,
                mirror: W,
                streamId: V,
                videoComponent: k,
                fit: j,
                paused: v,
                videoSpinnerContext:
                  U.id === D ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
                userId: U.id,
              },
              V,
            )
          : (0, i.jsx)("div", {
              className: r()(T.content, { [T.blockedAvatar]: R || M }),
              children: (0, i.jsx)(f.Z, {
                "aria-label": J,
                src: K,
                avatarDecoration: Q,
                backgroundSrc: U.getAvatarURL(n.guild_id, 80),
                size: X,
                pulseSpeakingIndicator: L,
                speaking: F,
                userId: U.id,
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
          return a;
        },
      });
      var i = n(44136),
        l = n(354459);
      function a(e, t) {
        var n, a;
        let r = null,
          s = null,
          o = null,
          c = !1,
          u = !1;
        switch (e.type) {
          case l.fO.ACTIVITY:
            break;
          case l.fO.USER:
            (r = e.streamId),
              (o = e.voiceState),
              (c = e.speaking),
              (u = e.ringing);
            break;
          case l.fO.STREAM:
            (r = e.streamId), (s = e.stream);
        }
        return {
          streamId: r,
          stream: s,
          speaking: c,
          ringing: u,
          muted:
            null !== (n = null == o ? void 0 : o.isVoiceMuted()) &&
            void 0 !== n &&
            n,
          deafen:
            null !== (a = null == o ? void 0 : o.isVoiceDeafened()) &&
            void 0 !== a &&
            a,
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
        a = n.n(l),
        r = n(481060),
        s = n(618158),
        o = n(339445);
      function c(e) {
        let { errorMessage: t, className: n } = e;
        return (0, i.jsx)(r.TooltipContainer, {
          className: a()(n, o.root),
          text: t,
          position: "bottom",
          color: r.TooltipColors.GREY,
          children: (0, i.jsx)(s.Z, {
            children: (0, i.jsx)(r.CircleWarningIcon, {
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
          return d;
        },
        Eu: function () {
          return f;
        },
        bt: function () {
          return m;
        },
      }),
        n(47120),
        n(653041);
      var i = n(192379),
        l = n(392711),
        a = n(442837),
        r = n(413523),
        s = n(314897),
        o = n(878884),
        c = n(19780),
        u = n(979651);
      function d(e, t) {
        let n = (0, a.e7)([o.Z, c.Z], () =>
          e === c.Z.getChannelId() ? o.Z.getDesyncedVoiceStates() : null,
        );
        return i.useMemo(
          () =>
            (function (e, t) {
              if (null == e || 0 === e.length) return t;
              let n = [],
                i = new Set();
              for (let e of t) n.push(e), i.add(e.user.id);
              return (
                e.forEach((e) => {
                  n.splice(
                    (0, l.sortedIndexBy)(n, e, (e) => {
                      let { comparator: t } = e;
                      return t;
                    }),
                    0,
                    e,
                  );
                }),
                n
              );
            })(n, t),
          [n, t],
        );
      }
      function m(e, t) {
        var n;
        let s =
          ((n = e),
          (0, a.e7)([o.Z, c.Z], () =>
            n === c.Z.getChannelId() ? o.Z.getDesyncedParticipants() : null,
          ));
        return i.useMemo(
          () =>
            (function (e, t) {
              if (null == e || 0 === e.length) return t;
              let n = [...t];
              return (
                e.forEach((e) => {
                  n.splice(
                    (0, l.sortedIndexBy)(n, e, (e) => (0, r.Yr)(e)),
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
      function f(e, t) {
        let n = (0, a.e7)([s.default], () => s.default.getId() === t),
          l = (0, a.e7)([c.Z], () => c.Z.getChannelId()),
          r = i.useRef(null),
          [o, d] = i.useState(!1),
          [m, f] = i.useState(!1),
          p = (0, a.e7)(
            [c.Z, u.Z],
            () =>
              null != t &&
              null != e &&
              c.Z.getChannelId() === e &&
              null != u.Z.isInChannel(e, t) &&
              c.Z.isUserConnected(t),
          ),
          g = (0, a.e7)(
            [c.Z, u.Z],
            () =>
              null != t &&
              null != e &&
              c.Z.getChannelId() === e &&
              null != u.Z.isInChannel(e, t) &&
              !c.Z.isUserConnected(t),
          );
        return (
          i.useEffect(() => {
            p && f(!0);
          }, [p]),
          i.useEffect(() => {
            l !== e && f(!1);
          }, [e, l]),
          i.useEffect(
            () => (
              g && null == r.current
                ? (r.current = setTimeout(() => {
                    (r.current = null), d(!0);
                  }, 250))
                : (clearTimeout(r.current), (r.current = null), d(!1)),
              () => {
                clearTimeout(r.current), (r.current = null);
              }
            ),
            [g],
          ),
          !n && m && o
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
          return N;
        },
      }),
        n(653041),
        n(789020),
        n(47120);
      var i,
        l = n(200651),
        a = n(192379),
        r = n(120356),
        s = n.n(r),
        o = n(481060),
        c = n(434650),
        u = n(657305),
        d = n(367907),
        m = n(194082),
        f = n(282256),
        p = n(925329),
        g = n(833858),
        h = n(223135),
        v = n(374129),
        S = n(639351),
        I = n(630388),
        _ = n(51144),
        x = n(981631),
        E = n(354459),
        C = n(927923),
        Z = n(388032),
        y = n(939214);
      function b(e, t, n) {
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
        A = (e) => {
          let { hangStatusActivity: t, iconClassName: n, isSelf: i } = e;
          return i && null == t
            ? (0, l.jsx)(
                o.TooltipContainer,
                {
                  className: y.iconSpacing,
                  text: Z.intl.string(Z.t.qstQub),
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
                  text: (0, g.O8)(t),
                  children: (0, l.jsx)(h.Z, {
                    hangStatusActivity: t,
                    className: s()(y.hangStatusIcon, n),
                  }),
                },
                "hang-status",
              );
        };
      function N(e) {
        let {
          className: t,
          mute: n,
          localMute: i,
          localVideoDisabled: a,
          serverMute: r,
          deaf: c,
          serverDeaf: d,
          collapsed: f,
          video: p,
          isStreaming: g,
          disabled: h,
          isWatching: _,
          iconClassName: b,
          embeddedApplication: T,
          otherClientSessionType: N,
          voicePlatform: w,
          hangStatusActivity: R,
          showHangStatus: M,
          isSelf: O,
          application: L,
          guildId: k,
          channelId: D,
          user: U,
          handleHoverHangStatus: V,
          handleHoverIcons: F,
          disconnected: W,
        } = e;
        if (f || h) return null;
        let B = [],
          G = (0, l.jsx)(P, {
            iconClassName: b,
            mute: n,
            localMute: i,
            serverMute: r,
            deaf: c,
            serverDeaf: d,
          });
        p &&
          (a
            ? B.push(
                (0, l.jsx)(
                  o.TooltipContainer,
                  {
                    className: y.iconSpacing,
                    text: Z.intl.string(Z.t["PXMZ//"]),
                    children: (0, l.jsx)(o.VideoSlashIcon, {
                      size: "md",
                      color: "currentColor",
                      className: s()(y.icon, b),
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
                    text: Z.intl.string(Z.t.FlNoSU),
                    children: (0, l.jsx)(o.VideoIcon, {
                      size: "md",
                      color: "currentColor",
                      className: s()(y.icon, b),
                    }),
                  },
                  "video",
                ),
              )),
          W &&
            B.push(
              (0, l.jsx)(
                o.TooltipContainer,
                {
                  className: y.iconSpacing,
                  text: Z.intl.string(Z.t.HFwRpq),
                  children: (0, l.jsx)(o.CircleWarningIcon, {
                    className: s()(y.icon, b),
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
                    className: s()(y.icon, b),
                  }),
                },
                "activity",
              ),
            ),
          N === C.YE.XBOX || w === E.wR.XBOX
            ? B.push(
                (0, l.jsx)(
                  "div",
                  {
                    className: s()(y.iconSpacing),
                    children: (0, l.jsx)(S.Z, { className: s()(y.icon, b) }),
                  },
                  "xbox",
                ),
              )
            : (N === C.YE.PLAYSTATION || w === E.wR.PLAYSTATION) &&
              B.push(
                (0, l.jsx)(
                  "div",
                  {
                    className: s()(y.iconSpacing),
                    children: (0, l.jsx)(v.Z, { className: s()(y.icon, b) }),
                  },
                  "playstation",
                ),
              ),
          g
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
            : _ &&
              B.push(
                (0, l.jsx)(
                  o.TooltipContainer,
                  {
                    className: y.iconSpacing,
                    text: Z.intl.string(Z.t.JH1SJy),
                    children: (0, l.jsx)(o.EyeIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: s()(y.icon, b),
                    }),
                  },
                  "watch",
                ),
              );
        let z = null != L && !(0, I.yE)(L.flags, x.udG.EMBEDDED),
          H = null == R && z;
        return 0 !== B.length || null != G || M || H
          ? (0, l.jsxs)("div", {
              className: s()(y.icons, t),
              children: [
                (0, l.jsxs)("div", {
                  className: y.iconGroup,
                  onMouseEnter: () => (null == F ? void 0 : F(!0)),
                  onMouseLeave: () => (null == F ? void 0 : F(!1)),
                  children: [G, B],
                }),
                M || H
                  ? (0, l.jsx)("div", {
                      className: y.iconGroup,
                      onMouseEnter: () => (null == V ? void 0 : V(!0)),
                      onMouseLeave: () => (null == V ? void 0 : V(!1)),
                      children: H
                        ? (0, l.jsx)(
                            j,
                            {
                              application: L,
                              iconClassName: b,
                              guildId: k,
                              channelId: D,
                              userId: U.id,
                            },
                            "".concat(U.id, "-game"),
                          )
                        : (0, l.jsx)(A, {
                            hangStatusActivity: R,
                            iconClassName: b,
                            isSelf: O,
                          }),
                    })
                  : null,
              ],
            })
          : null;
      }
      class w extends (i = a.Component) {
        renderPrioritySpeaker() {
          let {
            speaking: e,
            priority: t,
            collapsed: n,
            mute: i,
            serverMute: a,
          } = this.props;
          return t && !n
            ? (0, l.jsx)(o.Tooltip, {
                text: Z.intl.string(Z.t.BVK71t),
                children: (t) =>
                  (0, l.jsx)("div", {
                    className: s()(y.iconPriortySpeaker, {
                      [y.iconPriortySpeakerSpeaking]: !i && !a && e,
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
            guildId: a,
          } = this.props;
          return (0, l.jsx)("div", {
            className: s()(i, y.avatar, {
              [y.avatarLarge]: n === x.ipw.LARGE,
              [y.avatarSmall]: n === x.ipw.SMALL,
              [y.avatarSpeaking]: e,
            }),
            style: {
              backgroundImage: "url(".concat(
                t.getAvatarURL(a, n === x.ipw.LARGE ? 38 : 24),
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
              userNameClassName: a,
              mute: r,
              serverMute: o,
              isGuest: c,
              isOverlay: u,
              guildId: d,
            } = this.props,
            m = (0, l.jsxs)("div", {
              className: s()(a, {
                [y.username]: !0,
                [y.usernameSpeaking]: !r && !o && i,
              }),
              children: [
                null != e ? e : _.ZP.getName(t),
                c
                  ? (0, l.jsxs)("span", {
                      className: y.guestSuffix,
                      children: ["\xa0", Z.intl.string(Z.t["pFO/Pj"])],
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
                source: u ? x.jXE.OVERLAY : x.Sbl.VOICE_PANEL,
              },
            };
          return !n || u
            ? (0, l.jsx)(l.Fragment, {
                children: (0, l.jsx)(f.Z, { ...p, children: m }),
              })
            : null;
        }
        renderIcons() {
          return (0, l.jsx)(N, { ...this.props });
        }
        render() {
          let {
            onClick: e,
            onKeyDown: t,
            flipped: n,
            size: i,
            className: a,
            selected: r,
            disabled: c,
            overlap: u,
            "aria-label": d,
            tabIndex: m,
          } = this.props;
          return (0, l.jsx)(o.Clickable, {
            className: s()(a, {
              [y.voiceUser]: !0,
              [y.overlap]: u,
              [y.selected]: r,
              [y.clickable]: null != e,
              [y.userSmall]: i === x.ipw.SMALL,
              [y.userLarge]: i === x.ipw.LARGE,
              [y.disabled]: !r && c,
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
            b(this, "handleClick", (e) => {
              let { onClick: t, user: n } = this.props;
              null == t || t(e, n);
            }),
            b(this, "handleDoubleClick", (e) => {
              let { onDoubleClick: t, user: n } = this.props;
              null == t || t(e, n);
            }),
            b(this, "handleContextMenu", (e) => {
              let { onContextMenu: t, user: n } = this.props;
              null == t || t(e, n);
            }),
            b(this, "handleMouseLeave", (e) => {
              let { onMouseLeave: t, user: n } = this.props;
              null == t || t(e, n);
            }),
            b(this, "handleMouseEnter", (e) => {
              let { onMouseEnter: t, user: n } = this.props;
              null == t || t(e, n);
            }),
            b(this, "handleMouseDown", (e) => {
              let { onMouseDown: t, user: n } = this.props;
              null == t || t(e, n);
            });
        }
      }
      function j(e) {
        let {
            application: t,
            iconClassName: n,
            guildId: i,
            channelId: r,
            userId: u,
          } = e,
          [m, f] = a.useState(!1),
          g = (0, c.O)((e) => f(e));
        return (
          a.useEffect(() => {
            m &&
              d.ZP.trackWithMetadata(
                x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED,
                { channel_id: r, guild_id: i, user_id: u },
              );
          }, [t.id, r, i, u, m]),
          (0, l.jsx)(o.TooltipContainer, {
            text: Z.intl.formatToPlainString(Z.t.Sq9xJy, { game: t.name }),
            "aria-label": Z.intl.formatToPlainString(Z.t.Sq9xJy, {
              game: t.name,
            }),
            className: y.iconSpacing,
            children: (0, l.jsx)("div", {
              ref: g,
              children: (0, l.jsx)(p.Z, {
                className: s()(y.icon, n),
                game: t,
                size: p.Z.Sizes.XSMALL,
                onMouseEnter: () => {
                  d.ZP.trackWithMetadata(
                    x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED,
                    {
                      channel_id: r,
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
            serverMute: a,
            deaf: r,
            serverDeaf: c,
          } = e,
          u = (0, o.useRedesignIconContext)().enabled,
          d = [];
        if (n) {
          let e;
          if (u) {
            let n;
            (n = a
              ? o.MicrophoneDenyIcon
              : i
                ? o.MicrophoneDenyIcon
                : o.MicrophoneSlashIcon),
              (e = (0, l.jsx)(n, {
                className: s()(y.icon, t, { [y.iconServer]: a }),
                color: "currentColor",
              }));
          } else
            e = (0, l.jsx)(o.MicrophoneSlashIcon, {
              size: "md",
              color: "currentColor",
              className: s()(y.icon, t, { [y.iconServer]: a }),
              colorClass: i ? y.strikethrough : void 0,
            });
          d.push(
            (0, l.jsx)(
              o.TooltipContainer,
              {
                text: i
                  ? Z.intl.string(Z.t.Q8Uzoa)
                  : a
                    ? Z.intl.string(Z.t.uLddbW)
                    : Z.intl.string(Z.t.tjtv3N),
                className: y.iconSpacing,
                children: e,
              },
              "mute",
            ),
          );
        }
        if (c || r) {
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
                text: c ? Z.intl.string(Z.t.btxSdH) : Z.intl.string(Z.t.NjmiOD),
                children: e,
              },
              "deaf",
            ),
          );
        }
        return 0 === d.length ? null : (0, l.jsx)(l.Fragment, { children: d });
      }
      b(w, "defaultProps", {
        avatarContainerClass: y.avatarContainer,
        userNameClassName: y.usernameFont,
        size: x.ipw.SMALL,
        selected: !1,
        disabled: !1,
        isOverlay: !1,
      }),
        (t.ZP = w);
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
        a = n(120356),
        r = n.n(a),
        s = n(666912),
        o = n(442837),
        c = n(481060),
        u = n(596454),
        d = n(607070),
        m = n(70956),
        f = n(456631),
        p = n(890913);
      let g = 6 * m.Z.Millis.SECOND,
        h = 2 * m.Z.Millis.SECOND,
        v = 2 * m.Z.Millis.SECOND,
        S = (e) =>
          "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");
      function I(e) {
        let { userId: t, voiceChannelEffect: n, onComplete: a } = e,
          { emoji: m, sentAt: I } = n,
          _ = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
          [x, E] = l.useState(!0),
          C = !_,
          Z = (0, c.useTransition)(x, {
            from: { rotate: -120 },
            enter: { rotate: 0 },
            leave: { rotate: -120 },
            config: s.config.default,
            onRest: (e, t) => {
              let { phase: n } = t;
              "leave" === n && a();
            },
          });
        return (l.useEffect(() => {
          let e;
          return (
            Date.now() - I >= v
              ? (0, f.H)(t)
              : (e = setTimeout(
                  () => {
                    E(!1), C && (0, f.H)(t);
                  },
                  C ? h : g,
                )),
            () => {
              null != e && clearTimeout(e);
            }
          );
        }, [I, t, C]),
        C)
          ? null
          : Z((e, t) => {
              var n;
              let { rotate: l } = e;
              return (
                t &&
                (0, i.jsx)(s.animated.div, {
                  className: p.voiceChannelEffectEmojiContainer,
                  style: { transform: l.to(S) },
                  children: (0, i.jsx)(u.Z, {
                    className: r()(p.voiceChannelEffectEmoji),
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
        a,
        r,
        s = n(442837),
        o = n(46973),
        c = n(570140),
        u = n(642047),
        d = n(189786),
        m = n(5192),
        f = n(592125),
        p = n(19780),
        g = n(594174),
        h = n(979651),
        v = n(938475),
        S = n(981631),
        I = n(354459);
      let _ = new u.Z(),
        x = new u.Z(),
        E = new Set();
      function C(e, t, n) {
        let i = new d.Z({ userId: e.id, channelId: n }),
          l = (0, v.PH)(i, null != t ? t : S.ME, e.id);
        _.set(e.id, l);
        let a = {
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
        x.set(e.id, a);
      }
      function Z(e) {
        let t = _.delete(e),
          n = x.delete(e),
          i = E.delete(e);
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
          E.forEach((e) => {
            if (null != h.Z.getVoiceStateForChannel(t, e)) {
              E.delete(e);
              return;
            }
            let l = g.default.getUser(e);
            null != l && ((i = !0), E.delete(e), C(l, n, t));
          }),
          i
        );
      }
      function b() {
        _.clear(), x.clear(), E.clear();
      }
      class T extends (i = s.ZP.Store) {
        initialize() {
          this.waitFor(h.Z, g.default, f.Z, p.Z), this.syncWith([g.default], y);
        }
        get desyncedVoiceStatesCount() {
          return _.size();
        }
        getDesyncedUserIds() {
          return _.keys();
        }
        getDesyncedVoiceStates() {
          return _.values();
        }
        getDesyncedParticipants() {
          return x.values();
        }
      }
      (r = "RTCConnectionDesyncStore"),
        (a = "displayName") in (l = T)
          ? Object.defineProperty(l, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[a] = r),
        (t.Z = new T(c.Z, {
          CONNECTION_OPEN: function () {
            b();
          },
          VOICE_CHANNEL_SELECT: b,
          RTC_CONNECTION_STATE: function (e) {
            let { state: t, context: n } = e;
            if (n !== o.Yn.DEFAULT || t !== S.hes.DISCONNECTED) return !1;
            b();
          },
          VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
              n = p.Z.getChannelId();
            return (
              null != n &&
              t.reduce((e, t) => {
                let { userId: i, channelId: l } = t;
                return (l === n && !!Z(i)) || e;
              }, !1)
            );
          },
          RTC_CONNECTION_CLIENT_CONNECT: function (e) {
            let { userIds: t, guildId: n, channelId: i, context: l } = e;
            return (
              l === o.Yn.DEFAULT &&
              t.reduce((e, t) => {
                if (null != h.Z.getVoiceStateForChannel(i, t)) return e;
                let l = g.default.getUser(t);
                return null == l ? (E.add(t), e) : (C(l, n, i), !0);
              }, !1)
            );
          },
          RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
            let { userId: t, context: n } = e;
            return n === o.Yn.DEFAULT && Z(t);
          },
        }));
    },
    889711: function (e, t, n) {
      "use strict";
      function i(e) {
        return new ResizeObserver(e);
      }
      function l(e, t) {
        e.observe(t);
      }
      function a(e, t) {
        e.unobserve(t);
      }
      n.d(t, {
        UC: function () {
          return a;
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
    557261: function (e, t, n) {
      "use strict";
      e.exports = {
        demoEffectOverlay: "demoEffectOverlay_ba9473",
        demoEffectImg: "demoEffectImg_ba9473",
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
    81796: function (e, t, n) {
      "use strict";
      e.exports = { popout: "popout_a998c0", content: "content_a998c0" };
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
//# sourceMappingURL=61ef53d8d2be76401541.js.map
