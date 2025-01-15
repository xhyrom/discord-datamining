"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56035"],
  {
    242167: function (e, n, t) {
      t(250668)("Uint32", function (e) {
        return function (n, t, l) {
          return e(this, n, t, l);
        };
      });
    },
    903749: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var l = t(512722),
        a = t.n(l),
        i = t(442837),
        r = t(339085),
        s = t(633302);
      function o(e) {
        let { emojiId: n, emojiName: t } = e,
          l = (0, i.e7)([r.ZP], () =>
            null != n ? r.ZP.getCustomEmojiById(n) : null,
          );
        if (null != l || null != t) {
          if (null == n)
            return (
              a()(
                null != t,
                "emojiName must be defined if emojiId is not defined",
              ),
              s.ZP.convertSurrogateToName(t, !1)
            );
          else return null == l ? void 0 : l.name;
        }
      }
    },
    349709: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      });
      var l = t(200651),
        a = t(192379),
        i = t(120356),
        r = t.n(i),
        s = t(442837),
        o = t(481060),
        u = t(596454),
        c = t(225433),
        d = t(727637),
        f = t(318766),
        m = t(907040),
        h = t(984933),
        g = t(903749),
        p = t(185923),
        v = t(388032),
        x = t(83766);
      function N(e) {
        let {
            className: n,
            guildId: t,
            error: i,
            emojiId: N,
            emojiName: y,
            isRequiredField: b = !0,
            shouldUpdateBothEmojiFields: j = !1,
            setEmojiId: C,
            setEmojiName: w,
          } = e,
          S = (0, g.Z)({ emojiId: N, emojiName: y }),
          I = (0, s.e7)([h.ZP], () =>
            null != t ? h.ZP.getDefaultChannel(t) : null,
          ),
          E = a.createRef(),
          M = (0, d.Z)(E),
          Z = () => {
            w(void 0), C(void 0);
          },
          T = (e) => (n, t) => {
            let l = (null == n ? void 0 : n.id) == null;
            Z(),
              l
                ? w(null == n ? void 0 : n.optionallyDiverseSequence)
                : (j && w(null == n ? void 0 : n.name),
                  C(null == n ? void 0 : n.id)),
              t && e();
          },
          _ = (e) => {
            e.stopPropagation(), Z();
          };
        return (0, l.jsx)(o.FormItem, {
          required: b,
          title: v.intl.string(v.t["3BQmiI"]),
          className: r()(n, x.section),
          error: i,
          children: (0, l.jsx)(o.Popout, {
            animation: o.Popout.Animation.NONE,
            position: "top",
            renderPopout: (e) => {
              let { closePopout: n } = e;
              return (0, l.jsx)(m.Z, {
                closePopout: n,
                pickerIntention: p.Hz.SOUNDBOARD,
                onNavigateAway: n,
                onSelectEmoji: T(n),
                guildId: t,
                channel: I,
              });
            },
            children: (e, n) => {
              let { isShown: t } = n;
              return (0, l.jsxs)("div", {
                ...e,
                className: x.emojiInput,
                ref: E,
                children: [
                  (0, l.jsx)(f.Z, {
                    className: x.emojiButton,
                    active: t,
                    tabIndex: 0,
                    renderButtonContents:
                      null != N || null != y
                        ? () => (0, l.jsx)(u.Z, { emojiName: y, emojiId: N })
                        : null,
                  }),
                  (0, l.jsx)(o.TextInput, {
                    inputClassName: x.emojiText,
                    placeholder: v.intl.string(v.t.QTK0TE),
                    value: null != S ? ":".concat(S, ":") : "",
                    readOnly: !0,
                  }),
                  M &&
                    null != S &&
                    (0, l.jsx)(c.Z, {
                      ...e,
                      onClick: _,
                      className: x.removeButton,
                    }),
                ],
              });
            },
          }),
        });
      }
    },
    763610: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var l = t(200651),
        a = t(192379),
        i = t(120356),
        r = t.n(i),
        s = t(481060),
        o = t(53281),
        u = t(296752);
      function c(e) {
        let {
            filename: n,
            className: t,
            filters: i,
            buttonText: c,
            placeholder: d,
            onFileSelect: f,
          } = e,
          m = a.useRef(null);
        return (0, l.jsxs)("div", {
          className: r()(t, u.fileUpload),
          children: [
            (0, l.jsx)("input", {
              className: u.fileUploadInput,
              tabIndex: -1,
              readOnly: !0,
              placeholder: d,
              type: "text",
              value: n,
            }),
            (0, l.jsxs)(s.Button, {
              size: s.Button.Sizes.MIN,
              className: u.fileUploadButton,
              children: [
                c,
                (0, l.jsx)(o.Z, {
                  ref: m,
                  tabIndex: -1,
                  onChange: (e) => {
                    var n;
                    f(
                      null === (n = e.currentTarget.files) || void 0 === n
                        ? void 0
                        : n[0],
                    );
                  },
                  multiple: !1,
                  filters: i,
                }),
              ],
            }),
          ],
        });
      }
    },
    671895: function (e, n, t) {
      var l = t(200651),
        a = t(192379),
        i = t(481060),
        r = t(87686),
        s = t(586826),
        o = t(507419),
        u = t(388032),
        c = t(947554);
      n.Z = a.memo(function (e) {
        let { sound: n, volume: t, disabled: a = !1, onChange: d } = e,
          { file: f } = (0, s.p)();
        return (0, l.jsx)(i.FormSection, {
          className: c.section,
          title: u.intl.string(u.t.CCRKNz),
          children: (0, l.jsxs)("div", {
            className: c.fakeInput,
            children: [
              null != n &&
                (0, l.jsx)(o.Z, { sound: n, volume: t, disabled: a }),
              null == n &&
                null != f &&
                (0, l.jsx)(r.Z, {
                  className: c.audioTrimmer,
                  volume: t,
                  disabled: a,
                  onChange: d,
                }),
            ],
          }),
        });
      });
    },
    87686: function (e, n, t) {
      t(47120);
      var l = t(200651),
        a = t(192379),
        i = t(120356),
        r = t.n(i),
        s = t(481060),
        o = t(70956),
        u = t(747071),
        c = t(586826),
        d = t(622594),
        f = t(174727),
        m = t(710111),
        h = t(899737);
      let g = {
        startPositionMs: 0,
        endPositionMs: 2 * (10 * o.Z.Millis.SECOND),
        playheadPositionMs: 0,
      };
      n.Z = a.memo(function (e) {
        var n;
        let { className: t, volume: i, disabled: p = !1, onChange: v } = e,
          { audio: x } = (0, c.p)(),
          [N, y] = a.useState(!1),
          [b, j] = a.useState(g),
          { playheadPositionMs: C, endPositionMs: w, startPositionMs: S } = b,
          I = null != x,
          E = w - S,
          M = E > m.YW * o.Z.Millis.SECOND;
        a.useEffect(() => {
          null != x &&
            j({
              playheadPositionMs: 0,
              endPositionMs: x.duration * o.Z.Millis.SECOND,
              startPositionMs: 0,
            });
        }, [x]);
        let Z = a.useCallback(
            (e) => {
              null != x && (x.pause(), null != e && (x.currentTime = e), y(!1));
            },
            [x],
          ),
          T = a.useCallback(() => {
            if (null != x) {
              if (N) {
                Z();
                return;
              }
              C >= w
                ? (x.currentTime = (0, f.my)(S))
                : (x.currentTime = (0, f.my)(C)),
                (x.volume = (0, u.Z)(i)),
                x.play(),
                y(!0);
            }
          }, [x, w, Z, C, N, S, i]),
          _ = a.useCallback(
            (e) => {
              j(e),
                null == v ||
                  v({ startMs: e.startPositionMs, endMs: e.endPositionMs });
            },
            [v],
          ),
          k = a.useCallback(
            (e) => {
              null != x && (x.currentTime = e);
            },
            [x],
          );
        return (0, l.jsxs)("div", {
          className: r()(
            h.container,
            { [h.initialized]: I, [h.disabled]: !I || p },
            t,
          ),
          children: [
            (0, l.jsxs)("div", {
              className: h.playButtonContainer,
              children: [
                (0, l.jsx)(s.Clickable, {
                  className: h.playButton,
                  onClick: I ? T : void 0,
                  children: N
                    ? (0, l.jsx)(s.StopIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: h.playButtonIcon,
                      })
                    : (0, l.jsx)(s.PlayIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: h.playButtonIcon,
                      }),
                }),
                (0, l.jsx)("div", {
                  className: h.durationContainer,
                  children: (0, l.jsx)(s.Text, {
                    className: h.__invalid_duration,
                    variant: "text-xs/normal",
                    color: M ? "text-warning" : "text-positive",
                    children:
                      ((n = E), "".concat((0, f.my)(n).toFixed(2), "s")),
                  }),
                }),
              ],
            }),
            (0, l.jsx)(d.Z, {
              playing: N,
              onPlaybackChange: k,
              onPausePlayback: Z,
              onChangePosition: _,
              disabled: p,
            }),
          ],
        });
      });
    },
    943351: function (e, n, t) {
      t.d(n, {
        V3: function () {
          return a;
        },
        bp: function () {
          return r;
        },
        hp: function () {
          return i;
        },
        nl: function () {
          return l;
        },
      }),
        t(47120);
      let l = {
          waveformBlockWidth: 2,
          waveformBarWidth: 0.5,
          fineTuningDelay: 500,
          fineTuningScale: 10,
          loudnessThreshold: 0.3,
        },
        a = (e, n) => {
          let t = ""
            .concat(e[0], "-")
            .concat(e[e.length - 1], "-")
            .concat(e.byteLength);
          return "".concat(t, "-").concat(JSON.stringify(n));
        },
        i = (e) =>
          "".concat(e.name, "-").concat(e.size, "-").concat(e.lastModified),
        r = new Set([
          "audio/mpeg",
          "audio/mp3",
          "audio/wav",
          "audio/x-wav",
          "audio/ogg",
          "video/mp4",
        ]);
    },
    586826: function (e, n, t) {
      t.d(n, {
        p: function () {
          return o;
        },
      });
      var l = t(232713),
        a = t(65400),
        i = t(731965),
        r = t(174727);
      let s = (0, a.F)((e) => ({
        audio: null,
        file: null,
        loading: !1,
        loadAudioFromFile: async (n) => {
          if (
            ((0, i.j)(() => e({ file: n, audio: null, loading: null != n })),
            null == n)
          )
            return;
          let t = await (0, r.lj)(n);
          null != t && (0, i.j)(() => e({ audio: t, loading: !1 }));
        },
        maxVolume: 1,
        setMaxVolume: (n) => {
          (0, i.j)(() => e({ maxVolume: n }));
        },
      }));
      function o() {
        return s(
          (e) => ({
            audio: e.audio,
            file: e.file,
            loading: e.loading,
            loadAudioFromFile: e.loadAudioFromFile,
            maxVolume: e.maxVolume,
            setMaxVolume: e.setMaxVolume,
          }),
          l.X,
        );
      }
    },
    622594: function (e, n, t) {
      t(47120);
      var l,
        a,
        i = t(200651),
        r = t(192379),
        s = t(120356),
        o = t.n(s),
        u = t(259580),
        c = t(70956),
        d = t(586826),
        f = t(174727),
        m = t(882126),
        h = t(943351),
        g = t(792875);
      ((a = l || (l = {}))[(a.START = 0)] = "START"),
        (a[(a.PLAYHEAD = 1)] = "PLAYHEAD"),
        (a[(a.END = 2)] = "END"),
        (n.Z = r.memo(function (e) {
          let {
              playing: n,
              onPausePlayback: t,
              onPlaybackChange: l,
              onChangePosition: a,
              disabled: s = !1,
            } = e,
            p = { ...h.nl },
            { audio: v } = (0, d.p)(),
            x = null != v,
            N = r.useRef(null),
            y = r.useRef(null),
            b = r.useRef(null),
            [j, C] = r.useState(0),
            [w, S] = r.useState(0),
            [I, E] = r.useState(0),
            [M, Z] = r.useState(!1),
            [T, _] = r.useState(!1),
            [k, P] = r.useState(!1),
            [R, F] = r.useState(0),
            [O, D] = r.useState(-1),
            A = r.useMemo(() => R / p.fineTuningScale, [p.fineTuningScale, R]);
          r.useEffect(() => {
            if (null == v) return;
            let e = v.duration * c.Z.Millis.SECOND;
            C(0), S(0), E(e), F(e);
          }, [v]);
          let B = r.useCallback(
              (e, n) => {
                if ((t(), 0 === e.button))
                  switch (n) {
                    case 0:
                      Z(!0);
                      break;
                    case 1:
                      _(!0);
                      break;
                    case 2:
                      P(!0);
                  }
              },
              [t],
            ),
            L = r.useCallback((e) => {
              switch (e) {
                case 0:
                  Z(!1);
                  break;
                case 1:
                  _(!1);
                  break;
                case 2:
                  P(!1);
              }
              D(-1);
            }, []),
            U = r.useCallback(
              (e) => {
                if (null == v || !M) return;
                let n = parseInt(e.target.value),
                  t = n > I ? I : n;
                l((0, f.my)(t)), C(t), S(t);
              },
              [v, l, I, M],
            ),
            G = r.useCallback(
              (e) => {
                if (null == v || !T) return;
                let n = parseInt(e.target.value);
                n < j
                  ? (l((0, f.my)(j)), S(j))
                  : n > I
                    ? (l((0, f.my)(I)), S(I))
                    : (l((0, f.my)(n)), S(n));
              },
              [v, l, I, T, j],
            ),
            z = r.useCallback(
              (e) => {
                if (null == v || !k) return;
                let n = parseInt(e.target.value),
                  t = n > j ? n : j;
                l((0, f.my)(j)), S(j), E(t);
              },
              [v, l, k, j],
            );
          return (
            r.useEffect(() => {
              null != a &&
                x &&
                a({
                  startPositionMs: j,
                  endPositionMs: I,
                  playheadPositionMs: w,
                });
            }, [j, I, a, x, w]),
            r.useEffect(() => {
              let e;
              if (null != v)
                return (
                  n &&
                    (e = setInterval(() => {
                      v.currentTime < (0, f.my)(I)
                        ? v.currentTime >= (0, f.my)(w) &&
                          S(v.currentTime * c.Z.Millis.SECOND)
                        : (t((0, f.my)(j)), S(j));
                    }, 16)),
                  () => {
                    clearInterval(e);
                  }
                );
            }, [v, I, t, w, n, j]),
            r.useEffect(() => {
              if (p.fineTuningDelay <= 0) return;
              let e = setTimeout(() => {
                M && j == j && -1 === O
                  ? D(j)
                  : k && I == I && -1 === O
                    ? D(I)
                    : T && w == w && -1 === O && D(w);
              }, p.fineTuningDelay);
              return () => {
                clearTimeout(e);
              };
            }, [p.fineTuningDelay, k, I, O, T, w, M, j]),
            (0, i.jsxs)("div", {
              className: o()(g.timeline, { [g.initialized]: x }),
              children: [
                (0, i.jsxs)("div", {
                  className: g.rangeHandleContainer,
                  children: [
                    (0, i.jsxs)("div", {
                      className: g.rangeHandleFrame,
                      children: [
                        (0, i.jsx)("input", {
                          ref: N,
                          className: o()(g.rangeHandle, g.rangeHandleStart),
                          type: "range",
                          min: (0, f.ao)(O, A, R),
                          max: (0, f.MN)(O, A, R),
                          value: j,
                          onChange: U,
                          onMouseDown: (e) => B(e, 0),
                          onMouseUp: () => L(0),
                          disabled: !x || s,
                        }),
                        (0, i.jsx)("input", {
                          ref: b,
                          className: o()(g.rangeHandle, g.rangeHandleEnd),
                          type: "range",
                          min: (0, f.ao)(O, A, R),
                          max: (0, f.MN)(O, A, R),
                          value: I,
                          onChange: z,
                          onMouseDown: (e) => B(e, 2),
                          onMouseUp: () => L(2),
                          disabled: !x || s,
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: g.__invalid_handlePlayheadTrack,
                      children: (0, i.jsx)("input", {
                        ref: y,
                        className: o()(g.rangeHandle, g.rangeHandlePlayhead),
                        type: "range",
                        min: (0, f.ao)(O, A, R),
                        max: (0, f.MN)(O, A, R),
                        value: w,
                        onChange: G,
                        onMouseDown: (e) => B(e, 1),
                        onMouseUp: () => L(1),
                        disabled: !x || s,
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: g.handleContainer,
                  children: [
                    (0, i.jsxs)("div", {
                      className: o()(g.handleFrame, {
                        [g.startDragging]: M,
                        [g.endDragging]: k,
                      }),
                      style: {
                        left: "".concat((0, f.pN)(j, O, A, R), "%"),
                        right: "".concat((0, f.kD)(I, O, A, R), "%"),
                      },
                      children: [
                        (0, i.jsx)("div", {
                          className: o()(
                            g.handleIconFrame,
                            g.handleIconFrameStart,
                          ),
                          children: (0, i.jsx)("div", {
                            className: o()(
                              g.handleIconContainer,
                              g.__invalid_start,
                            ),
                            children: (0, i.jsx)(u.Z, {
                              direction: u.Z.Directions.RIGHT,
                              className: g.handleIcon,
                              width: 16,
                              height: 16,
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: o()(
                            g.handleIconFrame,
                            g.handleIconFrameEnd,
                          ),
                          children: (0, i.jsx)("div", {
                            className: o()(
                              g.handleIconContainer,
                              g.__invalid_end,
                            ),
                            children: (0, i.jsx)(u.Z, {
                              direction: u.Z.Directions.LEFT,
                              className: g.handleIcon,
                              width: 16,
                              height: 16,
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: g.playheadTrack,
                      children: (0, i.jsx)("div", {
                        className: o()(g.playhead, {
                          [g.dragging]: T || M || k || n,
                        }),
                        style: { left: "".concat((0, f.pN)(w, O, A, R), "%") },
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: g.waveformContainer,
                  children: (0, i.jsx)(m.Z, {
                    fineTuning: O,
                    fineTuningResolution: A,
                    duration: R,
                  }),
                }),
              ],
            })
          );
        }));
    },
    174727: function (e, n, t) {
      t.d(n, {
        MN: function () {
          return s;
        },
        XG: function () {
          return d;
        },
        ao: function () {
          return i;
        },
        kD: function () {
          return u;
        },
        lj: function () {
          return c;
        },
        my: function () {
          return r;
        },
        pN: function () {
          return o;
        },
      }),
        t(411104),
        t(315314),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120);
      var l = t(943351),
        a = t(388032);
      let i = (e, n, t) => (-1 === e ? 0 : e - (n * e) / t);
      function r(e) {
        return e / 1e3;
      }
      let s = (e, n, t) => (-1 === e ? t : e + (n * (t - e)) / t),
        o = (e, n, t, l) => {
          let a = 0;
          return (a =
            n >= 0 && t > 0
              ? ((e - (n - (t * n) / l)) * 100) / t
              : (100 * e) / l).toFixed(4);
        },
        u = (e, n, t, l) => {
          let a = 0;
          return (a =
            n >= 0 && t > 0
              ? -((e - (n + (t * (l - n)) / l)) * 100) / t
              : (-100 * e) / l + 100).toFixed(4);
        };
      async function c(e) {
        var n;
        if (
          !(e.type.startsWith("audio") || e.type.startsWith("video")) ||
          !l.bp.has(e.type)
        )
          throw Error(
            a.intl.formatToPlainString(a.t["2y3xGR"], { fileType: e.type }),
          );
        let t = new Audio(URL.createObjectURL(e));
        return (
          await ((n = t),
          new Promise((e) => {
            let t = () => {
              e(), n.removeEventListener("canplaythrough", t);
            };
            n.addEventListener("canplaythrough", t), n.load();
          })),
          t
        );
      }
      async function d(e, n) {
        let t = await fetch(e);
        return new File([await t.blob()], n, { type: "audio/mp3" });
      }
    },
    812613: function (e, n, t) {
      t.d(n, {
        Zk: function () {
          return d;
        },
        bb: function () {
          return f;
        },
        kV: function () {
          return h;
        },
      }),
        t(411104),
        t(653041),
        t(951953),
        t(970173),
        t(520712),
        t(268111),
        t(941497),
        t(32026),
        t(480839),
        t(744285),
        t(492257),
        t(873817),
        t(518263);
      var l = t(512722),
        a = t.n(l),
        i = t(304809),
        r = t(70956),
        s = t(208049),
        o = t(419202);
      let u = new AudioContext({
        sampleRate: Math.min((0, i.N)().sampleRate, 48e3),
      });
      async function c(e) {
        let n = await e.arrayBuffer();
        if (!(n instanceof ArrayBuffer)) throw Error("Unexpected file type");
        return u.decodeAudioData(n);
      }
      async function d(e) {
        var n;
        let t = await ((n = (n) => {
          n.readAsDataURL(e);
        }),
        new Promise((e, t) => {
          let l = new FileReader(),
            a = () => {
              l.removeEventListener("load", a),
                l.removeEventListener("error", t),
                e(l.result);
            };
          l.addEventListener("load", a), l.addEventListener("error", t), n(l);
        }));
        if ("string" != typeof t) throw Error("Unexpected file type");
        return t;
      }
      async function f(e) {
        let {
          readPromise: n,
          guildId: t,
          name: l,
          volume: a,
          emojiId: i,
          emojiName: r,
        } = e;
        return (0, s.Dx)({
          guildId: t,
          name: l,
          sound: await n,
          volume: a,
          emojiId: i,
          emojiName: r,
        });
      }
      async function m(e) {
        let n = [],
          t = (function (e) {
            if (1 === e.length) return e[0];
            if (2 === e.length) {
              let n = e[0],
                t = e[1],
                l = [];
              for (let e = 0; e < n.length; e++) l.push(n[e]), l.push(t[e]);
              let a = new Float32Array(l.length);
              return a.set(l), a;
            }
            throw Error("Only handles up to 2 channels");
          })(
            (function (e) {
              let { numberOfChannels: n } = e,
                t = [];
              for (let l = 0; l < n; l++) t.push(e.getChannelData(l));
              return t;
            })(e),
          ),
          l = new AudioData({
            format: "f32",
            sampleRate: e.sampleRate,
            numberOfFrames: e.length,
            numberOfChannels: e.numberOfChannels,
            timestamp: 1e6 * e.duration,
            data: t,
          }),
          i = new AudioEncoder({
            output: function (t) {
              a()(null != t.duration, "Chunk duration must not be null");
              let l = (t.duration / 1e6) * e.sampleRate,
                i = new Uint8Array(t.byteLength);
              t.copyTo(i), n.push({ buffer: i, numSamples: l });
            },
            error: (e) => {
              throw Error("Audio encoding error: ".concat(e.message));
            },
          });
        return (
          i.configure({
            codec: "opus",
            sampleRate: e.sampleRate,
            numberOfChannels: e.numberOfChannels,
          }),
          i.encode(l),
          await i.flush(),
          new Blob(
            [
              (0, o.Z)(n, {
                channelCount: e.numberOfChannels,
                inputSampleRate: e.sampleRate,
                outputGain: 0,
                channelMappingFamily: 0,
              }),
            ],
            { type: "audio/ogg" },
          )
        );
      }
      async function h(e, n) {
        let t = (function (e, n) {
          let { startMs: t, endMs: l } = n,
            { sampleRate: a, numberOfChannels: i, duration: s } = e,
            o = s * r.Z.Millis.SECOND,
            c = Math.min(l, o);
          if (0 === t && c === o) return e;
          let d = Math.floor((t / o) * e.length),
            f = Math.floor((c / o) * e.length),
            m = u.createBuffer(i, f - d, a);
          for (let n = 0; n < i; n++) {
            let t = m.getChannelData(n),
              l = e.getChannelData(n),
              a = 0;
            for (let e = d; e <= f; e++) (t[a] = l[e]), a++;
          }
          return m;
        })(await c(e), n);
        return new File([await m(t)], "sound.ogg", { type: "audio/ogg" });
      }
    },
    882126: function (e, n, t) {
      var l = t(200651),
        a = t(192379),
        i = t(586826),
        r = t(990792);
      n.Z = a.memo(function (e) {
        let { fineTuning: n, fineTuningResolution: t, duration: a } = e,
          { file: s, audio: o } = (0, i.p)();
        return (0, l.jsx)(r.Z, {
          file: s,
          audio: o,
          waveformSettings: {
            fineTuning: n,
            fineTuningResolution: t,
            duration: a,
          },
        });
      });
    },
    990792: function (e, n, t) {
      t(47120);
      var l = t(200651),
        a = t(192379),
        i = t(120356),
        r = t.n(i),
        s = t(392711),
        o = t(780384),
        u = t(481060),
        c = t(410030),
        d = t(44315),
        f = t(293501),
        m = t(943351),
        h = t(231338),
        g = t(495183);
      n.Z = a.memo(function (e) {
        let { file: n, audio: t, className: i, waveformSettings: p } = e,
          [v, x] = a.useState({ width: 0, height: 0 }),
          N = a.useRef(null),
          y = a.useMemo(() => {
            var e;
            let n =
              null !== (e = null == t ? void 0 : t.duration) && void 0 !== e
                ? e
                : 1;
            return {
              fineTuning: -1,
              fineTuningResolution: n / m.nl.fineTuningScale,
              duration: n,
              ...(null != p ? p : {}),
            };
          }, [t, p]),
          b = (0, f.b1)(n),
          j = (0, f.NN)(b, N.current, y),
          C = (0, c.ZP)(),
          w = (0, d.Sl)((0, o.wj)(C) ? h.Il.PRIMARY_300 : h.Il.PRIMARY_700),
          S = null == b || null == j,
          I = (0 === v.width || 0 === v.height || S) && null != n,
          E = a.useCallback(() => {
            null != N.current &&
              x({
                width: N.current.offsetWidth,
                height: N.current.offsetHeight,
              });
          }, []);
        return (
          a.useEffect(() => {
            if (null != N.current) {
              let e = new ResizeObserver((0, s.debounce)(E, 50));
              return (
                e.observe(N.current),
                () => {
                  e.disconnect();
                }
              );
            }
          }, [E]),
          a.useEffect(() => {
            if (null == N.current) return;
            let e = N.current,
              n = e.getContext("2d");
            if (null == n) return;
            let { width: t, height: l } = e;
            if (0 !== v.width && 0 !== v.height) {
              if (null != j && j.length > 0) {
                let e = t / j.length,
                  a = -(e * (m.nl.waveformBarWidth - 1));
                n.clearRect(0, 0, t, l), (n.fillStyle = w.hex);
                for (let t = 0; t < j.length; t++) {
                  let i = j[t] * l,
                    r = t * e + a,
                    s = l / 2 - i / 2;
                  n.fillRect(r, s, e - a, i);
                }
              }
            }
          }, [w, v, C, j]),
          (0, l.jsxs)("div", {
            className: r()(g.container, i),
            children: [
              (0, l.jsx)("canvas", {
                className: g.waveformCanvas,
                ref: N,
                width: 4 * v.width,
                height: 4 * v.height,
              }),
              I &&
                (0, l.jsx)("div", {
                  className: g.loading,
                  children: (0, l.jsx)(u.Spinner, {
                    type: u.SpinnerTypes.SPINNING_CIRCLE,
                  }),
                }),
            ],
          })
        );
      });
    },
    293501: function (e, n, t) {
      t.d(n, {
        NN: function () {
          return m;
        },
        b1: function () {
          return d;
        },
      }),
        t(315314),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120);
      var l = t(192379),
        a = t(772848),
        i = t(304809),
        r = t(586826),
        s = t(943351);
      let o = new Worker(new URL("/assets/" + t.u("14315"), t.b)),
        u = (0, i.N)();
      async function c(e) {
        let n = await e.arrayBuffer();
        return (await u.decodeAudioData(n)).getChannelData(0);
      }
      function d(e) {
        let [n, t] = l.useState(null),
          [a, i] = l.useState(null);
        return (
          l.useEffect(() => {
            if (null == e) return;
            let n = (0, s.hp)(e);
            n !== a && (i(n), t(null), c(e).then(t));
          }, [a, e]),
          n
        );
      }
      let f = { ...s.nl };
      function m(e, n, t) {
        let [i, u] = l.useState(null),
          [c, d] = l.useState(null),
          [m, h] = l.useState(1),
          { setMaxVolume: g } = (0, r.p)(),
          p = l.useCallback(
            (e, n) => {
              var l, i, r, s, u;
              d(null),
                ((l = e),
                (i = n.offsetWidth),
                (r = t),
                (s = f),
                (u = h),
                new Promise((e) => {
                  let n = (0, a.Z)(),
                    t = (l) => {
                      let {
                        data: {
                          waveform: a,
                          id: i,
                          normalizedVolumeMultipler: r,
                        },
                      } = l;
                      n === i && (e(a), u(r)),
                        null == o || o.removeEventListener("message", t);
                    };
                  null == o || o.addEventListener("message", t),
                    null == o ||
                      o.postMessage({
                        id: n,
                        options: r,
                        config: s,
                        width: i,
                        rawBufferData: l,
                      });
                })).then(d);
            },
            [t],
          );
        return (
          l.useEffect(() => {
            if (null == e || null == n) return;
            let l = (0, s.V3)(e, t);
            i !== l && (u(l), p(e, n));
          }, [e, p, n, t, i]),
          l.useEffect(() => {
            g(m);
          }, [m, g]),
          c
        );
      }
    },
    507419: function (e, n, t) {
      t(47120);
      var l = t(200651),
        a = t(192379),
        i = t(481060),
        r = t(22382),
        s = t(747071),
        o = t(586826),
        u = t(174727),
        c = t(990792),
        d = t(388032),
        f = t(413510);
      n.Z = a.memo(function (e) {
        let { sound: n, volume: t, disabled: m } = e,
          [h, g] = a.useState(!1),
          p = a.useRef(null),
          { file: v, audio: x, loadAudioFromFile: N } = (0, o.p)(),
          y = a.useMemo(() => (0, r.Z)(n.soundId), [n]);
        return (
          a.useEffect(() => {
            null == p.current && (p.current = (0, u.XG)(y, n.name).then(N));
          }, [y, N, n.name]),
          (0, l.jsxs)("div", {
            className: f.previewContainer,
            children: [
              (0, l.jsx)(i.Clickable, {
                onClick: m
                  ? void 0
                  : function () {
                      null != x &&
                        (x.paused
                          ? ((x.volume = (0, s.Z)(t)),
                            (x.currentTime = 0),
                            x.play(),
                            g(!0),
                            x.addEventListener("ended", () => g(!1), {
                              once: !0,
                            }))
                          : (x.pause(), g(!1)));
                    },
                className: f.playButton,
                "aria-label": h
                  ? d.intl.string(d.t.hHBkuL)
                  : d.intl.string(d.t.RscU7O),
                children: h
                  ? (0, l.jsx)(i.StopIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: f.playIcon,
                    })
                  : (0, l.jsx)(i.PlayIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: f.playIcon,
                    }),
              }),
              (0, l.jsx)("div", {
                className: f.waveformContainer,
                children: (0, l.jsx)(c.Z, {
                  className: f.waveform,
                  file: v,
                  audio: x,
                }),
              }),
            ],
          })
        );
      });
    },
    419202: function (e, n, t) {
      var l, a, i, r;
      function s(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      t.d(n, {
        Z: function () {
          return u;
        },
      }),
        t(518263),
        t(970173),
        t(520712),
        t(268111),
        t(941497),
        t(32026),
        t(480839),
        t(744285),
        t(492257),
        t(873817),
        t(411104),
        t(47120),
        t(724458),
        t(242167),
        t(653041);
      ((i = l || (l = {}))[(i.NONE = 0)] = "NONE"),
        (i[(i.CONTINUATION = 1)] = "CONTINUATION"),
        (i[(i.BEGINNING_OF_STREAM = 2)] = "BEGINNING_OF_STREAM"),
        (i[(i.END_OF_STREAM = 4)] = "END_OF_STREAM");
      class o {
        appendBytes(e) {
          if (this._offset + e.length > this._buffer.length) {
            let n = this._offset + e.length,
              t = new Uint8Array(
                Math.pow(
                  2,
                  Math.ceil(Math.log2(Math.max(2 * this._buffer.length, n))),
                ),
              );
            t.set(this._buffer.subarray(0, this._offset)), (this._buffer = t);
          }
          this._buffer.set(e, this._offset), (this._offset += e.length);
        }
        addPage(e) {
          if (e.segments.length > 255)
            throw Error(
              "Too many segments: "
                .concat(e.segments.length, " exceeds limit of ")
                .concat(255),
            );
          for (let [n, t] of e.segments.entries())
            if (t.length > 255)
              throw Error(
                "Segment at index "
                  .concat(n, " too large (length ")
                  .concat(t.length, " exceeds ")
                  .concat(255, ")"),
              );
          let n = e.segments.reduce((e, n) => e + n.length, 0),
            t = 27 + e.segments.length + n;
          if (t > 65307)
            throw Error(
              "Page too large (size ".concat(t, " exceeds ").concat(65307, ")"),
            );
          let l = this._offset,
            a = 0;
          switch (e.pageType) {
            case 1:
              a = 1;
              break;
            case 2:
              a = 2;
              break;
            case 4:
              a = 4;
          }
          this.appendBytes([
            79,
            103,
            103,
            83,
            0,
            a,
            255 & e.granulePosition,
            (e.granulePosition >> 8) & 255,
            (e.granulePosition >> 16) & 255,
            (e.granulePosition >> 24) & 255,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            255 & this._pageSequenceNumber,
            (this._pageSequenceNumber >> 8) & 255,
            (this._pageSequenceNumber >> 16) & 255,
            (this._pageSequenceNumber >> 24) & 255,
          ]);
          let i = this._offset;
          for (let n of (this.appendBytes([0, 0, 0, 0, e.segments.length]),
          this.appendBytes(e.segments.map((e) => e.length)),
          e.segments))
            this.appendBytes(n);
          let r = (function (e) {
            return (
              e.reduce((e, n) => ((e << 8) >>> 0) ^ c[(e >>> 24) ^ n], 0) >>> 0
            );
          })(this._buffer.subarray(l, this._offset));
          this._buffer.set(
            [255 & r, (r >> 8) & 255, (r >> 16) & 255, (r >> 24) & 255],
            i,
          ),
            this._pageSequenceNumber++;
        }
        finalize(e) {
          this.addPage({ pageType: 4, granulePosition: e, segments: [] });
          let n = this._buffer,
            t = this._offset;
          return (
            (this._buffer = new Uint8Array(4096)),
            (this._offset = 0),
            (this._pageSequenceNumber = 0),
            n.subarray(0, t)
          );
        }
        constructor() {
          s(this, "_buffer", new Uint8Array(4096)),
            s(this, "_pageSequenceNumber", 0),
            s(this, "_offset", 0);
        }
      }
      function u(e, n) {
        let t = new Uint8Array([
            79,
            112,
            117,
            115,
            72,
            101,
            97,
            100,
            1,
            n.channelCount,
            0,
            0,
            255 & n.inputSampleRate,
            (n.inputSampleRate >> 8) & 255,
            (n.inputSampleRate >> 16) & 255,
            (n.inputSampleRate >> 24) & 255,
            255 & n.outputGain,
            (n.outputGain >> 8) & 255,
            n.channelMappingFamily,
          ]),
          l = new Uint8Array([
            79, 112, 117, 115, 84, 97, 103, 115, 0, 0, 0, 0, 0, 0, 0, 0,
          ]),
          a = new o();
        a.addPage({ pageType: 2, granulePosition: 0, segments: [t] });
        let i = 0;
        for (let n of (a.addPage({
          pageType: 0,
          granulePosition: i,
          segments: [l],
        }),
        e)) {
          let e = (function (e) {
            let n = Math.floor(e.length / 255),
              t = [];
            for (let l = 0; l <= n; l++) {
              let a = 0 === l ? 0 : 255 * l,
                i = l === n ? e.length : (l + 1) * 255;
              t.push(e.slice(a, i));
            }
            return t;
          })(n.buffer);
          (i += n.numSamples),
            a.addPage({ pageType: 0, granulePosition: i, segments: e });
        }
        return a.finalize(i);
      }
      (r = a || (a = {}))[(r.ZERO = 0)] = "ZERO";
      let c = (function () {
        let e = new Uint32Array(256);
        for (let n = 256; n > 0; n--) {
          let t = n << 24;
          for (let e = 8; e > 0; e--)
            t = 2147483648 & t ? 79764919 ^ (t << 1) : t << 1;
          e[n] = t;
        }
        return e;
      })();
    },
    758961: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return E;
          },
        }),
        t(47120),
        t(411104);
      var l,
        a,
        i = t(200651),
        r = t(192379),
        s = t(120356),
        o = t.n(s),
        u = t(512722),
        c = t.n(u),
        d = t(481060),
        f = t(479531),
        m = t(493773),
        h = t(349709),
        g = t(763610),
        p = t(626135),
        v = t(208049),
        x = t(671895),
        N = t(586826),
        y = t(812613),
        b = t(203437),
        j = t(710111),
        C = t(981631),
        w = t(388032),
        S = t(489461);
      ((a = l || (l = {})).READY = "ready"),
        (a.ENCODING_FAILED = "encoding-failed"),
        (a.ENCODING = "encoding"),
        (a.UPLOADING = "uploading");
      let I = [
        {
          name: "audio",
          extensions: ["mp3", "wav", "ogg", "opus", "x-wav", "mp4"],
        },
      ];
      function E(e) {
        var n, t, l, a;
        let {
            guildId: s,
            sourceFile: u,
            existingSound: E,
            onClose: M,
            transitionState: Z,
            showGuildPicker: T = !1,
          } = e,
          [_, k] = r.useState(
            null !==
              (t =
                null !== (n = null == u ? void 0 : u.name) && void 0 !== n
                  ? n
                  : null == E
                    ? void 0
                    : E.name) && void 0 !== t
              ? t
              : "",
          ),
          [P, R] = r.useState(
            null !== (l = null == E ? void 0 : E.volume) && void 0 !== l
              ? l
              : 1,
          ),
          [F, O] = r.useState(null == E ? void 0 : E.emojiId),
          [D, A] = r.useState(null == E ? void 0 : E.emojiName),
          {
            file: B,
            loadAudioFromFile: L,
            maxVolume: U,
            setMaxVolume: G,
          } = (0, N.p)(),
          [z, H] = r.useState(!1),
          [V, Y] = r.useState(null),
          [q, W] = r.useState(null),
          [J, K] = r.useState("ready"),
          [X, Q] = r.useState(s);
        async function $(e) {
          try {
            await L(null != e ? e : null), K("ready"), Y(null);
          } catch (e) {
            ee(e);
          }
        }
        function ee(e) {
          if (e instanceof f.Z) Y(e);
          else if (e instanceof Error) {
            let n = { status: 500, body: { message: e.message } };
            Y(new f.Z(n));
          } else Y(new f.Z(e));
        }
        r.useEffect(() => {
          if ((null == u ? void 0 : u.file) != null)
            (async function e(e) {
              try {
                await L(e), K("ready"), Y(null);
              } catch (e) {
                ee(e);
              }
            })(u.file);
        }, [null == u ? void 0 : u.file, L]);
        let en = (function (e) {
            switch (e) {
              case "encoding":
                return w.intl.string(w.t["4IMMdH"]);
              case "encoding-failed":
                return w.intl.string(w.t.Ka29xs);
              case "uploading":
                return w.intl.string(w.t.ndr58f);
            }
            return null;
          })(J),
          et = "uploading" === J || "encoding" === J,
          el = null != E,
          ea =
            _.length >= 2 &&
            (el || null != B) &&
            null != X &&
            (function (e) {
              if (null == e) return !0;
              let n = (e.endMs - e.startMs) / 1e3;
              return n > 0 && n <= j.YW;
            })(q),
          ei = r.useCallback(async (e, n) => {
            K("encoding");
            try {
              let t = await (0, y.kV)(e, n);
              return K("ready"), t;
            } catch (e) {
              throw (K("encoding-failed"), e);
            }
          }, []),
          er = r.useCallback(async () => {
            if (null == B) return;
            c()(null != X, "Cannot submit soundboard sound with no guildId");
            let e = B;
            if (null != q) {
              let n = await ei(B, q);
              if (null == n) return;
              e = n;
            }
            let n = (0, y.Zk)(e);
            K("uploading");
            try {
              await (0, y.bb)({
                readPromise: n,
                guildId: X,
                name: _,
                volume: P,
                emojiId: F,
                emojiName: D,
              }),
                K("ready");
            } catch (e) {
              throw new f.Z(e);
            }
          }, [B, X, _, ei, q, P, F, D]),
          es = r.useCallback(async () => {
            c()(null != X, "Cannot submit soundboard sound with no guildId"),
              H(!0),
              Y(null);
            try {
              el
                ? await (0, v.$d)({
                    guildId: X,
                    soundId: E.soundId,
                    name: _,
                    volume: P,
                    emojiId: F,
                    emojiName: D,
                  })
                : await er(),
                M();
            } catch (e) {
              ee(e);
            } finally {
              K("ready"), H(!1), R(1), G(1);
            }
          }, [el, M, X, E, _, P, F, D, er, G]);
        (0, m.Z)(() => {
          L(null),
            p.default.track(C.rMx.OPEN_MODAL, {
              type: "Soundboard Upload Sound",
              guild_id: X,
            });
        }),
          r.useEffect(() => {
            R(Math.min(P, U));
          }, [P, R, U]);
        let eo = (0, i.jsx)(h.Z, {
          guildId: X,
          emojiId: F,
          emojiName: D,
          setEmojiId: O,
          setEmojiName: A,
          error: null == V ? void 0 : V.getFirstFieldErrorMessage("emoji"),
          isRequiredField: !1,
        });
        return (0, i.jsxs)(d.ModalRoot, {
          transitionState: Z,
          children: [
            (0, i.jsx)(d.ModalCloseButton, {
              onClick: M,
              className: S.modalClose,
            }),
            (0, i.jsx)(d.ModalHeader, {
              className: S.headerContainer,
              separator: !1,
              children: (0, i.jsx)(d.Heading, {
                className: S.header,
                variant: "heading-xl/extrabold",
                children: el
                  ? w.intl.string(w.t.HmsZGR)
                  : w.intl.string(w.t["ioD/9P"]),
              }),
            }),
            (0, i.jsxs)(d.ModalContent, {
              className: S.__invalid_content,
              children: [
                null != V &&
                  !V.hasFieldErrors() &&
                  (0, i.jsx)(d.FormErrorBlock, {
                    className: S.section,
                    children: V.message,
                  }),
                T
                  ? (0, i.jsx)(d.FormItem, {
                      required: !0,
                      className: S.section,
                      title: w.intl.string(w.t.UYt7iY),
                      children: (0, i.jsx)(b.Z, { value: X, onChange: Q }),
                    })
                  : null,
                (el || null != B) &&
                  (0, i.jsx)(x.Z, {
                    sound: E,
                    volume: P,
                    disabled: et,
                    onChange: W,
                  }),
                el || null != u
                  ? null
                  : (0, i.jsx)(d.FormItem, {
                      required: !0,
                      error:
                        null == V
                          ? void 0
                          : V.getFirstFieldErrorMessage("sound"),
                      className: S.section,
                      title: w.intl.string(w.t.sSHaGx),
                      children: (0, i.jsx)(g.Z, {
                        filename:
                          null !== (a = null == B ? void 0 : B.name) &&
                          void 0 !== a
                            ? a
                            : "",
                        buttonText: w.intl.string(w.t.zpi3XF),
                        placeholder: w.intl.string(w.t["x+YULy"]),
                        onFileSelect: $,
                        filters: I,
                      }),
                    }),
                (0, i.jsxs)("div", {
                  className: S.multiInput,
                  children: [
                    (0, i.jsx)(d.FormItem, {
                      required: !0,
                      error:
                        null == V
                          ? void 0
                          : V.getFirstFieldErrorMessage("name"),
                      className: o()(S.section, S.halfInput),
                      title: w.intl.string(w.t.NpJGaG),
                      children: (0, i.jsx)(d.TextInput, {
                        placeholder: w.intl.string(w.t.NpJGaG),
                        value: _,
                        onChange: k,
                        maxLength: j.Ek,
                      }),
                    }),
                    eo,
                  ],
                }),
                (0, i.jsx)(d.FormItem, {
                  error:
                    null == V ? void 0 : V.getFirstFieldErrorMessage("volume"),
                  className: S.section,
                  title: w.intl.string(w.t["3CJlb2"]),
                  children: (0, i.jsx)(d.Slider, {
                    initialValue: P,
                    onValueChange: (e) => R(e),
                    minValue: 0,
                    maxValue: U,
                  }),
                }),
              ],
            }),
            (0, i.jsxs)(d.ModalFooter, {
              children: [
                (0, i.jsx)(d.Button, {
                  disabled: !ea,
                  submitting: z,
                  size: d.Button.Sizes.SMALL,
                  onClick: es,
                  children: el
                    ? w.intl.string(w.t["bZY17+"])
                    : w.intl.string(w.t.RGJbYG),
                }),
                (0, i.jsx)(d.Button, {
                  disabled: z,
                  onClick: M,
                  size: d.Button.Sizes.SMALL,
                  look: d.Button.Looks.LINK,
                  color: d.Button.Colors.PRIMARY,
                  children: w.intl.string(w.t.Khpixc),
                }),
                null != en &&
                  (0, i.jsx)("div", {
                    className: S.soundStateHint,
                    children: (0, i.jsx)(d.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: en,
                    }),
                  }),
              ],
            }),
          ],
        });
      }
    },
    203437: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return w;
        },
      }),
        t(47120);
      var l = t(200651),
        a = t(192379),
        i = t(120356),
        r = t.n(i),
        s = t(442837),
        o = t(481060),
        u = t(565138),
        c = t(357156),
        d = t(430824),
        f = t(496675),
        m = t(771845),
        h = t(594174),
        g = t(267642),
        p = t(709054),
        v = t(208049),
        x = t(763296),
        N = t(710111),
        y = t(981631),
        b = t(388032),
        j = t(657704);
      function C(e) {
        let { availableSlots: n, className: t } = e;
        return (0, l.jsxs)(o.Text, {
          className: r()(j.suffixNode, t),
          variant: "text-sm/medium",
          color: "text-primary",
          children: [
            (0, l.jsx)(o.VoiceNormalIcon, {
              size: "md",
              color: "currentColor",
              className: j.speakerIcon,
            }),
            b.intl.format(b.t["8Dyg1N"], { slots: n }),
          ],
        });
      }
      function w(e) {
        let { value: n, className: t, onChange: i } = e,
          w = (0, s.cj)([m.ZP, f.Z, h.default, d.Z], () => {
            let e = {};
            for (let n of m.ZP.getFlattenedGuildIds()) {
              let t = d.Z.getGuild(n);
              if (null != t)
                (0, c.Gw)(t, f.Z, h.default).canCreateExpressions &&
                  (e[t.id] = t);
            }
            return e;
          }),
          S = (0, s.cj)(
            [x.Z],
            () => {
              let e = {};
              for (let [t, l] of p.default.entries(w)) {
                var n;
                let a = (0, g.yw)(
                  l,
                  null !== (n = x.Z.getSoundsForGuild(t)) && void 0 !== n
                    ? n
                    : N.Hy,
                  l.premiumTier,
                );
                e[t] = a;
              }
              return e;
            },
            [w],
          );
        a.useEffect(() => {
          (0, v.w)();
        }, []);
        let I = a.useMemo(
            () =>
              Object.values(w).map((e) => {
                let { name: n, id: t } = e;
                return { label: n, value: t, disabled: S[t] <= 0 };
              }),
            [w, S],
          ),
          E = a.useCallback(
            (e) =>
              null == e || "" === e.value
                ? null
                : (0, l.jsx)(u.Z, {
                    className: r()(j.guildSelectOptionIcon, {
                      [j.disabledOption]: e.disabled,
                    }),
                    guild: w[e.value],
                    size: u.Z.Sizes.SMOL,
                    active: !0,
                  }),
            [w],
          ),
          M = a.useCallback(
            (e) => {
              let n = null == e ? void 0 : e.value;
              return null == n || "" === n
                ? null
                : (0, l.jsx)(C, {
                    className: r()({
                      [j.disabledOption]: null == e ? void 0 : e.disabled,
                    }),
                    availableSlots: S[n],
                  });
            },
            [S],
          ),
          Z = a.useCallback(
            (e) =>
              (0, l.jsx)("div", {
                className: r()({ [j.disabledOption]: e.disabled }),
                children: e.label,
              }),
            [],
          ),
          T = a.useCallback(
            (e) => {
              !(S[e] <= 0) && i(e);
            },
            [S, i],
          ),
          _ = (() => {
            let e = S[null != n ? n : y.lds];
            return null == e || e > 0 ? n : void 0;
          })();
        return (0, l.jsx)(o.SearchableSelect, {
          className: t,
          onChange: T,
          value: _,
          multi: !1,
          options: I,
          renderOptionPrefix: E,
          renderOptionSuffix: M,
          renderOptionLabel: Z,
          placeholder:
            0 === I.length
              ? b.intl.string(b.t.O3i2gY)
              : b.intl.string(b.t.CunCMD),
        });
      }
    },
  },
]);
//# sourceMappingURL=992728ab1db4654682d0.js.map
