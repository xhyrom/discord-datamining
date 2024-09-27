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
          return u;
        },
      });
      var l = t(512722),
        a = t.n(l),
        i = t(442837),
        s = t(339085),
        r = t(633302);
      function u(e) {
        let { emojiId: n, emojiName: t } = e,
          l = (0, i.e7)([s.ZP], () =>
            null != n ? s.ZP.getCustomEmojiById(n) : null,
          );
        if (null != l || null != t) {
          if (null == n)
            return (
              a()(
                null != t,
                "emojiName must be defined if emojiId is not defined",
              ),
              r.ZP.convertSurrogateToName(t, !1)
            );
          else return null == l ? void 0 : l.name;
        }
      }
    },
    349709: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
      });
      var l = t(735250),
        a = t(470079),
        i = t(120356),
        s = t.n(i),
        r = t(442837),
        u = t(481060),
        o = t(596454),
        c = t(225433),
        d = t(727637),
        f = t(318766),
        m = t(907040),
        h = t(984933),
        g = t(903749),
        p = t(185923),
        N = t(689938),
        _ = t(309464);
      function v(e) {
        let {
            className: n,
            guildId: t,
            error: i,
            emojiId: v,
            emojiName: D,
            isRequiredField: O = !0,
            shouldUpdateBothEmojiFields: S = !1,
            setEmojiId: x,
            setEmojiName: y,
          } = e,
          E = (0, g.Z)({ emojiId: v, emojiName: D }),
          A = (0, r.e7)([h.ZP], () =>
            null != t ? h.ZP.getDefaultChannel(t) : null,
          ),
          b = a.createRef(),
          M = (0, d.Z)(b),
          j = () => {
            y(void 0), x(void 0);
          },
          C = (e) => (n, t) => {
            let l = (null == n ? void 0 : n.id) == null;
            j(),
              l
                ? y(null == n ? void 0 : n.optionallyDiverseSequence)
                : (S && y(null == n ? void 0 : n.name),
                  x(null == n ? void 0 : n.id)),
              t && e();
          },
          I = (e) => {
            e.stopPropagation(), j();
          };
        return (0, l.jsx)(u.FormItem, {
          required: O,
          title: N.Z.Messages.GUILD_STICKER_UPLOAD_RELATED_EMOJI_TITLE,
          className: s()(n, _.section),
          error: i,
          children: (0, l.jsx)(u.Popout, {
            animation: u.Popout.Animation.NONE,
            position: "top",
            renderPopout: (e) => {
              let { closePopout: n } = e;
              return (0, l.jsx)(m.Z, {
                closePopout: n,
                pickerIntention: p.Hz.SOUNDBOARD,
                onNavigateAway: n,
                onSelectEmoji: C(n),
                guildId: t,
                channel: A,
              });
            },
            children: (e, n) => {
              let { isShown: t } = n;
              return (0, l.jsxs)("div", {
                ...e,
                className: _.emojiInput,
                ref: b,
                children: [
                  (0, l.jsx)(f.Z, {
                    className: _.emojiButton,
                    active: t,
                    tabIndex: 0,
                    renderButtonContents:
                      null != v || null != D
                        ? () => (0, l.jsx)(o.Z, { emojiName: D, emojiId: v })
                        : null,
                  }),
                  (0, l.jsx)(u.TextInput, {
                    inputClassName: _.emojiText,
                    placeholder:
                      N.Z.Messages
                        .GUILD_STICKER_UPLOAD_RELATED_EMOJI_PLACEHOLDER,
                    value: null != E ? ":".concat(E, ":") : "",
                    readOnly: !0,
                  }),
                  M &&
                    null != E &&
                    (0, l.jsx)(c.Z, {
                      ...e,
                      onClick: I,
                      className: _.removeButton,
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
      var l = t(735250),
        a = t(470079),
        i = t(120356),
        s = t.n(i),
        r = t(481060),
        u = t(53281),
        o = t(914530);
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
          className: s()(t, o.fileUpload),
          children: [
            (0, l.jsx)("input", {
              className: o.fileUploadInput,
              tabIndex: -1,
              readOnly: !0,
              placeholder: d,
              type: "text",
              value: n,
            }),
            (0, l.jsxs)(r.Button, {
              size: r.Button.Sizes.MIN,
              className: o.fileUploadButton,
              children: [
                c,
                (0, l.jsx)(u.Z, {
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
      var l = t(735250),
        a = t(470079),
        i = t(481060),
        s = t(87686),
        r = t(586826),
        u = t(507419),
        o = t(689938),
        c = t(7516);
      n.Z = a.memo(function (e) {
        let { sound: n, volume: t, disabled: a = !1, onChange: d } = e,
          { file: f } = (0, r.p)();
        return (0, l.jsx)(i.FormSection, {
          className: c.section,
          title: o.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_PREVIEW,
          children: (0, l.jsxs)("div", {
            className: c.fakeInput,
            children: [
              null != n &&
                (0, l.jsx)(u.Z, { sound: n, volume: t, disabled: a }),
              null == n &&
                null != f &&
                (0, l.jsx)(s.Z, {
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
      var l = t(735250),
        a = t(470079),
        i = t(120356),
        s = t.n(i),
        r = t(481060),
        u = t(70956),
        o = t(747071),
        c = t(586826),
        d = t(622594),
        f = t(174727),
        m = t(710111),
        h = t(976618);
      let g = {
        startPositionMs: 0,
        endPositionMs: 2 * (10 * u.Z.Millis.SECOND),
        playheadPositionMs: 0,
      };
      n.Z = a.memo(function (e) {
        var n;
        let { className: t, volume: i, disabled: p = !1, onChange: N } = e,
          { audio: _ } = (0, c.p)(),
          [v, D] = a.useState(!1),
          [O, S] = a.useState(g),
          { playheadPositionMs: x, endPositionMs: y, startPositionMs: E } = O,
          A = null != _,
          b = y - E,
          M = b > m.YW * u.Z.Millis.SECOND;
        a.useEffect(() => {
          null != _ &&
            S({
              playheadPositionMs: 0,
              endPositionMs: _.duration * u.Z.Millis.SECOND,
              startPositionMs: 0,
            });
        }, [_]);
        let j = a.useCallback(
            (e) => {
              null != _ && (_.pause(), null != e && (_.currentTime = e), D(!1));
            },
            [_],
          ),
          C = a.useCallback(() => {
            if (null != _) {
              if (v) {
                j();
                return;
              }
              x >= y
                ? (_.currentTime = (0, f.my)(E))
                : (_.currentTime = (0, f.my)(x)),
                (_.volume = (0, o.Z)(i)),
                _.play(),
                D(!0);
            }
          }, [_, y, j, x, v, E, i]),
          I = a.useCallback(
            (e) => {
              S(e),
                null == N ||
                  N({ startMs: e.startPositionMs, endMs: e.endPositionMs });
            },
            [N],
          ),
          w = a.useCallback(
            (e) => {
              null != _ && (_.currentTime = e);
            },
            [_],
          );
        return (0, l.jsxs)("div", {
          className: s()(
            h.container,
            { [h.initialized]: A, [h.disabled]: !A || p },
            t,
          ),
          children: [
            (0, l.jsxs)("div", {
              className: h.playButtonContainer,
              children: [
                (0, l.jsx)(r.Clickable, {
                  className: h.playButton,
                  onClick: A ? C : void 0,
                  children: v
                    ? (0, l.jsx)(r.StopIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: h.playButtonIcon,
                      })
                    : (0, l.jsx)(r.PlayIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: h.playButtonIcon,
                      }),
                }),
                (0, l.jsx)("div", {
                  className: h.durationContainer,
                  children: (0, l.jsx)(r.Text, {
                    className: h.__invalid_duration,
                    variant: "text-xs/normal",
                    color: M ? "text-warning" : "text-positive",
                    children:
                      ((n = b), "".concat((0, f.my)(n).toFixed(2), "s")),
                  }),
                }),
              ],
            }),
            (0, l.jsx)(d.Z, {
              playing: v,
              onPlaybackChange: w,
              onPausePlayback: j,
              onChangePosition: I,
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
          return s;
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
        s = new Set([
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
          return u;
        },
      });
      var l = t(652874),
        a = t(143927),
        i = t(731965),
        s = t(174727);
      let r = (0, l.Z)((e) => ({
        audio: null,
        file: null,
        loading: !1,
        loadAudioFromFile: async (n) => {
          if (
            ((0, i.j)(() => e({ file: n, audio: null, loading: null != n })),
            null == n)
          )
            return;
          let t = await (0, s.lj)(n);
          null != t && (0, i.j)(() => e({ audio: t, loading: !1 }));
        },
        maxVolume: 1,
        setMaxVolume: (n) => {
          (0, i.j)(() => e({ maxVolume: n }));
        },
      }));
      function u() {
        return r(
          (e) => ({
            audio: e.audio,
            file: e.file,
            loading: e.loading,
            loadAudioFromFile: e.loadAudioFromFile,
            maxVolume: e.maxVolume,
            setMaxVolume: e.setMaxVolume,
          }),
          a.Z,
        );
      }
    },
    622594: function (e, n, t) {
      t(47120);
      var l,
        a,
        i = t(735250),
        s = t(470079),
        r = t(120356),
        u = t.n(r),
        o = t(259580),
        c = t(70956),
        d = t(586826),
        f = t(174727),
        m = t(882126),
        h = t(943351),
        g = t(578730);
      ((a = l || (l = {}))[(a.START = 0)] = "START"),
        (a[(a.PLAYHEAD = 1)] = "PLAYHEAD"),
        (a[(a.END = 2)] = "END"),
        (n.Z = s.memo(function (e) {
          let {
              playing: n,
              onPausePlayback: t,
              onPlaybackChange: l,
              onChangePosition: a,
              disabled: r = !1,
            } = e,
            p = { ...h.nl },
            { audio: N } = (0, d.p)(),
            _ = null != N,
            v = s.useRef(null),
            D = s.useRef(null),
            O = s.useRef(null),
            [S, x] = s.useState(0),
            [y, E] = s.useState(0),
            [A, b] = s.useState(0),
            [M, j] = s.useState(!1),
            [C, I] = s.useState(!1),
            [w, U] = s.useState(!1),
            [L, Z] = s.useState(0),
            [R, P] = s.useState(-1),
            T = s.useMemo(() => L / p.fineTuningScale, [p.fineTuningScale, L]);
          s.useEffect(() => {
            if (null == N) return;
            let e = N.duration * c.Z.Millis.SECOND;
            x(0), E(0), b(e), Z(e);
          }, [N]);
          let B = s.useCallback(
              (e, n) => {
                if ((t(), 0 === e.button))
                  switch (n) {
                    case 0:
                      j(!0);
                      break;
                    case 1:
                      I(!0);
                      break;
                    case 2:
                      U(!0);
                  }
              },
              [t],
            ),
            k = s.useCallback((e) => {
              switch (e) {
                case 0:
                  j(!1);
                  break;
                case 1:
                  I(!1);
                  break;
                case 2:
                  U(!1);
              }
              P(-1);
            }, []),
            F = s.useCallback(
              (e) => {
                if (null == N || !M) return;
                let n = parseInt(e.target.value),
                  t = n > A ? A : n;
                l((0, f.my)(t)), x(t), E(t);
              },
              [N, l, A, M],
            ),
            G = s.useCallback(
              (e) => {
                if (null == N || !C) return;
                let n = parseInt(e.target.value);
                n < S
                  ? (l((0, f.my)(S)), E(S))
                  : n > A
                    ? (l((0, f.my)(A)), E(A))
                    : (l((0, f.my)(n)), E(n));
              },
              [N, l, A, C, S],
            ),
            H = s.useCallback(
              (e) => {
                if (null == N || !w) return;
                let n = parseInt(e.target.value),
                  t = n > S ? n : S;
                l((0, f.my)(S)), E(S), b(t);
              },
              [N, l, w, S],
            );
          return (
            s.useEffect(() => {
              null != a &&
                _ &&
                a({
                  startPositionMs: S,
                  endPositionMs: A,
                  playheadPositionMs: y,
                });
            }, [S, A, a, _, y]),
            s.useEffect(() => {
              let e;
              if (null != N)
                return (
                  n &&
                    (e = setInterval(() => {
                      N.currentTime < (0, f.my)(A)
                        ? N.currentTime >= (0, f.my)(y) &&
                          E(N.currentTime * c.Z.Millis.SECOND)
                        : (t((0, f.my)(S)), E(S));
                    }, 16)),
                  () => {
                    clearInterval(e);
                  }
                );
            }, [N, A, t, y, n, S]),
            s.useEffect(() => {
              if (p.fineTuningDelay <= 0) return;
              let e = setTimeout(() => {
                M && S == S && -1 === R
                  ? P(S)
                  : w && A == A && -1 === R
                    ? P(A)
                    : C && y == y && -1 === R && P(y);
              }, p.fineTuningDelay);
              return () => {
                clearTimeout(e);
              };
            }, [p.fineTuningDelay, w, A, R, C, y, M, S]),
            (0, i.jsxs)("div", {
              className: u()(g.timeline, { [g.initialized]: _ }),
              children: [
                (0, i.jsxs)("div", {
                  className: g.rangeHandleContainer,
                  children: [
                    (0, i.jsxs)("div", {
                      className: g.rangeHandleFrame,
                      children: [
                        (0, i.jsx)("input", {
                          ref: v,
                          className: u()(g.rangeHandle, g.rangeHandleStart),
                          type: "range",
                          min: (0, f.ao)(R, T, L),
                          max: (0, f.MN)(R, T, L),
                          value: S,
                          onChange: F,
                          onMouseDown: (e) => B(e, 0),
                          onMouseUp: () => k(0),
                          disabled: !_ || r,
                        }),
                        (0, i.jsx)("input", {
                          ref: O,
                          className: u()(g.rangeHandle, g.rangeHandleEnd),
                          type: "range",
                          min: (0, f.ao)(R, T, L),
                          max: (0, f.MN)(R, T, L),
                          value: A,
                          onChange: H,
                          onMouseDown: (e) => B(e, 2),
                          onMouseUp: () => k(2),
                          disabled: !_ || r,
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: g.__invalid_handlePlayheadTrack,
                      children: (0, i.jsx)("input", {
                        ref: D,
                        className: u()(g.rangeHandle, g.rangeHandlePlayhead),
                        type: "range",
                        min: (0, f.ao)(R, T, L),
                        max: (0, f.MN)(R, T, L),
                        value: y,
                        onChange: G,
                        onMouseDown: (e) => B(e, 1),
                        onMouseUp: () => k(1),
                        disabled: !_ || r,
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: g.handleContainer,
                  children: [
                    (0, i.jsxs)("div", {
                      className: u()(g.handleFrame, {
                        [g.startDragging]: M,
                        [g.endDragging]: w,
                      }),
                      style: {
                        left: "".concat((0, f.pN)(S, R, T, L), "%"),
                        right: "".concat((0, f.kD)(A, R, T, L), "%"),
                      },
                      children: [
                        (0, i.jsx)("div", {
                          className: u()(
                            g.handleIconFrame,
                            g.handleIconFrameStart,
                          ),
                          children: (0, i.jsx)("div", {
                            className: u()(
                              g.handleIconContainer,
                              g.__invalid_start,
                            ),
                            children: (0, i.jsx)(o.Z, {
                              direction: o.Z.Directions.RIGHT,
                              className: g.handleIcon,
                              width: 16,
                              height: 16,
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: u()(
                            g.handleIconFrame,
                            g.handleIconFrameEnd,
                          ),
                          children: (0, i.jsx)("div", {
                            className: u()(
                              g.handleIconContainer,
                              g.__invalid_end,
                            ),
                            children: (0, i.jsx)(o.Z, {
                              direction: o.Z.Directions.LEFT,
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
                        className: u()(g.playhead, {
                          [g.dragging]: C || M || w || n,
                        }),
                        style: { left: "".concat((0, f.pN)(y, R, T, L), "%") },
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: g.waveformContainer,
                  children: (0, i.jsx)(m.Z, {
                    fineTuning: R,
                    fineTuningResolution: T,
                    duration: L,
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
          return r;
        },
        XG: function () {
          return d;
        },
        ao: function () {
          return i;
        },
        kD: function () {
          return o;
        },
        lj: function () {
          return c;
        },
        my: function () {
          return s;
        },
        pN: function () {
          return u;
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
        a = t(689938);
      let i = (e, n, t) => (-1 === e ? 0 : e - (n * e) / t);
      function s(e) {
        return e / 1e3;
      }
      let r = (e, n, t) => (-1 === e ? t : e + (n * (t - e)) / t),
        u = (e, n, t, l) => {
          let a = 0;
          return (a =
            n >= 0 && t > 0
              ? ((e - (n - (t * n) / l)) * 100) / t
              : (100 * e) / l).toFixed(4);
        },
        o = (e, n, t, l) => {
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
            a.Z.Messages.SOUNDBOARD_ERROR_INVALID_FILE_TYPE.format({
              fileType: e.type,
            }),
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
        s = t(70956),
        r = t(208049),
        u = t(419202);
      let o = new AudioContext({
        sampleRate: Math.min((0, i.N)().sampleRate, 48e3),
      });
      async function c(e) {
        let n = await e.arrayBuffer();
        if (!(n instanceof ArrayBuffer)) throw Error("Unexpected file type");
        return o.decodeAudioData(n);
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
          emojiName: s,
        } = e;
        return (0, r.Dx)({
          guildId: t,
          name: l,
          sound: await n,
          volume: a,
          emojiId: i,
          emojiName: s,
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
              (0, u.Z)(n, {
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
            { sampleRate: a, numberOfChannels: i, duration: r } = e,
            u = r * s.Z.Millis.SECOND,
            c = Math.min(l, u);
          if (0 === t && c === u) return e;
          let d = Math.floor((t / u) * e.length),
            f = Math.floor((c / u) * e.length),
            m = o.createBuffer(i, f - d, a);
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
      var l = t(735250),
        a = t(470079),
        i = t(586826),
        s = t(990792);
      n.Z = a.memo(function (e) {
        let { fineTuning: n, fineTuningResolution: t, duration: a } = e,
          { file: r, audio: u } = (0, i.p)();
        return (0, l.jsx)(s.Z, {
          file: r,
          audio: u,
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
      var l = t(735250),
        a = t(470079),
        i = t(120356),
        s = t.n(i),
        r = t(392711),
        u = t(780384),
        o = t(481060),
        c = t(410030),
        d = t(44315),
        f = t(293501),
        m = t(943351),
        h = t(231338),
        g = t(690780);
      n.Z = a.memo(function (e) {
        let { file: n, audio: t, className: i, waveformSettings: p } = e,
          [N, _] = a.useState({ width: 0, height: 0 }),
          v = a.useRef(null),
          D = a.useMemo(() => {
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
          O = (0, f.b1)(n),
          S = (0, f.NN)(O, v.current, D),
          x = (0, c.ZP)(),
          y = (0, d.Sl)((0, u.wj)(x) ? h.Il.PRIMARY_300 : h.Il.PRIMARY_700),
          E = null == O || null == S,
          A = (0 === N.width || 0 === N.height || E) && null != n,
          b = a.useCallback(() => {
            null != v.current &&
              _({
                width: v.current.offsetWidth,
                height: v.current.offsetHeight,
              });
          }, []);
        return (
          a.useEffect(() => {
            if (null != v.current) {
              let e = new ResizeObserver((0, r.debounce)(b, 50));
              return (
                e.observe(v.current),
                () => {
                  e.disconnect();
                }
              );
            }
          }, [b]),
          a.useEffect(() => {
            if (null == v.current) return;
            let e = v.current,
              n = e.getContext("2d");
            if (null == n) return;
            let { width: t, height: l } = e;
            if (0 !== N.width && 0 !== N.height) {
              if (null != S && S.length > 0) {
                let e = t / S.length,
                  a = -(e * (m.nl.waveformBarWidth - 1));
                n.clearRect(0, 0, t, l), (n.fillStyle = y.hex);
                for (let t = 0; t < S.length; t++) {
                  let i = S[t] * l,
                    s = t * e + a,
                    r = l / 2 - i / 2;
                  n.fillRect(s, r, e - a, i);
                }
              }
            }
          }, [y, N, x, S]),
          (0, l.jsxs)("div", {
            className: s()(g.container, i),
            children: [
              (0, l.jsx)("canvas", {
                className: g.waveformCanvas,
                ref: v,
                width: 4 * N.width,
                height: 4 * N.height,
              }),
              A &&
                (0, l.jsx)("div", {
                  className: g.loading,
                  children: (0, l.jsx)(o.Spinner, {
                    type: o.SpinnerTypes.SPINNING_CIRCLE,
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
      var l = t(470079),
        a = t(772848),
        i = t(304809),
        s = t(586826),
        r = t(943351);
      let u = new Worker(new URL("/assets/" + t.u("14315"), t.b)),
        o = (0, i.N)();
      async function c(e) {
        let n = await e.arrayBuffer();
        return (await o.decodeAudioData(n)).getChannelData(0);
      }
      function d(e) {
        let [n, t] = l.useState(null),
          [a, i] = l.useState(null);
        return (
          l.useEffect(() => {
            if (null == e) return;
            let n = (0, r.hp)(e);
            n !== a && (i(n), t(null), c(e).then(t));
          }, [a, e]),
          n
        );
      }
      let f = { ...r.nl };
      function m(e, n, t) {
        let [i, o] = l.useState(null),
          [c, d] = l.useState(null),
          [m, h] = l.useState(1),
          { setMaxVolume: g } = (0, s.p)(),
          p = l.useCallback(
            (e, n) => {
              var l, i, s, r, o;
              d(null),
                ((l = e),
                (i = n.offsetWidth),
                (s = t),
                (r = f),
                (o = h),
                new Promise((e) => {
                  let n = (0, a.Z)(),
                    t = (l) => {
                      let {
                        data: {
                          waveform: a,
                          id: i,
                          normalizedVolumeMultipler: s,
                        },
                      } = l;
                      n === i && (e(a), o(s)),
                        null == u || u.removeEventListener("message", t);
                    };
                  null == u || u.addEventListener("message", t),
                    null == u ||
                      u.postMessage({
                        id: n,
                        options: s,
                        config: r,
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
            let l = (0, r.V3)(e, t);
            i !== l && (o(l), p(e, n));
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
      var l = t(735250),
        a = t(470079),
        i = t(481060),
        s = t(22382),
        r = t(747071),
        u = t(586826),
        o = t(174727),
        c = t(990792),
        d = t(689938),
        f = t(582709);
      n.Z = a.memo(function (e) {
        let { sound: n, volume: t, disabled: m } = e,
          [h, g] = a.useState(!1),
          p = a.useRef(null),
          { file: N, audio: _, loadAudioFromFile: v } = (0, u.p)(),
          D = a.useMemo(() => (0, s.Z)(n.soundId), [n]);
        return (
          a.useEffect(() => {
            null == p.current && (p.current = (0, o.XG)(D, n.name).then(v));
          }, [D, v, n.name]),
          (0, l.jsxs)("div", {
            className: f.previewContainer,
            children: [
              (0, l.jsx)(i.Clickable, {
                onClick: m
                  ? void 0
                  : function () {
                      null != _ &&
                        (_.paused
                          ? ((_.volume = (0, r.Z)(t)),
                            (_.currentTime = 0),
                            _.play(),
                            g(!0),
                            _.addEventListener("ended", () => g(!1), {
                              once: !0,
                            }))
                          : (_.pause(), g(!1)));
                    },
                className: f.playButton,
                "aria-label": h ? d.Z.Messages.STOP : d.Z.Messages.PLAY,
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
                  file: N,
                  audio: _,
                }),
              }),
            ],
          })
        );
      });
    },
    419202: function (e, n, t) {
      var l, a, i, s;
      function r(e, n, t) {
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
          return o;
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
      class u {
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
          let s = (function (e) {
            return (
              e.reduce((e, n) => ((e << 8) >>> 0) ^ c[(e >>> 24) ^ n], 0) >>> 0
            );
          })(this._buffer.subarray(l, this._offset));
          this._buffer.set(
            [255 & s, (s >> 8) & 255, (s >> 16) & 255, (s >> 24) & 255],
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
          r(this, "_buffer", new Uint8Array(4096)),
            r(this, "_pageSequenceNumber", 0),
            r(this, "_offset", 0);
        }
      }
      function o(e, n) {
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
          a = new u();
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
      (s = a || (a = {}))[(s.ZERO = 0)] = "ZERO";
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
            return A;
          },
        }),
        t(47120),
        t(411104);
      var l,
        a,
        i = t(735250),
        s = t(470079),
        r = t(120356),
        u = t.n(r),
        o = t(512722),
        c = t.n(o),
        d = t(481060),
        f = t(479531),
        m = t(349709),
        h = t(763610),
        g = t(626135),
        p = t(208049),
        N = t(671895),
        _ = t(586826),
        v = t(812613),
        D = t(203437),
        O = t(710111),
        S = t(981631),
        x = t(689938),
        y = t(274362);
      ((a = l || (l = {})).READY = "ready"),
        (a.ENCODING_FAILED = "encoding-failed"),
        (a.ENCODING = "encoding"),
        (a.UPLOADING = "uploading");
      let E = [
        { name: "audio", extensions: ["mp3", "wav", "ogg", "x-wav", "mp4"] },
      ];
      function A(e) {
        var n, t, l, a;
        let {
            guildId: r,
            sourceFile: o,
            existingSound: A,
            onClose: b,
            transitionState: M,
            showGuildPicker: j = !1,
          } = e,
          [C, I] = s.useState(
            null !==
              (t =
                null !== (n = null == o ? void 0 : o.name) && void 0 !== n
                  ? n
                  : null == A
                    ? void 0
                    : A.name) && void 0 !== t
              ? t
              : "",
          ),
          [w, U] = s.useState(
            null !== (l = null == A ? void 0 : A.volume) && void 0 !== l
              ? l
              : 1,
          ),
          [L, Z] = s.useState(null == A ? void 0 : A.emojiId),
          [R, P] = s.useState(null == A ? void 0 : A.emojiName),
          {
            file: T,
            loadAudioFromFile: B,
            maxVolume: k,
            setMaxVolume: F,
          } = (0, _.p)(),
          [G, H] = s.useState(!1),
          [z, V] = s.useState(null),
          [q, W] = s.useState(null),
          [Y, J] = s.useState("ready"),
          [K, X] = s.useState(r);
        async function $(e) {
          try {
            await B(null != e ? e : null), J("ready"), V(null);
          } catch (e) {
            Q(e);
          }
        }
        function Q(e) {
          if (e instanceof f.Z) V(e);
          else if (e instanceof Error) {
            let n = { status: 500, body: { message: e.message } };
            V(new f.Z(n));
          } else V(new f.Z(e));
        }
        s.useEffect(() => {
          if ((null == o ? void 0 : o.file) != null)
            (async function e(e) {
              try {
                await B(e), J("ready"), V(null);
              } catch (e) {
                Q(e);
              }
            })(o.file);
        }, [null == o ? void 0 : o.file, B]);
        let ee = (function (e) {
            switch (e) {
              case "encoding":
                return x.Z.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING;
              case "encoding-failed":
                return x.Z.Messages
                  .SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING_FAILED;
              case "uploading":
                return x.Z.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_UPLOADING;
            }
            return null;
          })(Y),
          en = "uploading" === Y || "encoding" === Y,
          et = null != A,
          el =
            C.length >= 2 &&
            (et || null != T) &&
            null != K &&
            (function (e) {
              if (null == e) return !0;
              let n = (e.endMs - e.startMs) / 1e3;
              return n > 0 && n <= O.YW;
            })(q),
          ea = s.useCallback(async (e, n) => {
            J("encoding");
            try {
              let t = await (0, v.kV)(e, n);
              return J("ready"), t;
            } catch (e) {
              throw (J("encoding-failed"), e);
            }
          }, []),
          ei = s.useCallback(async () => {
            if (null == T) return;
            c()(null != K, "Cannot submit soundboard sound with no guildId");
            let e = T;
            if (null != q) {
              let n = await ea(T, q);
              if (null == n) return;
              e = n;
            }
            let n = (0, v.Zk)(e);
            J("uploading");
            try {
              await (0, v.bb)({
                readPromise: n,
                guildId: K,
                name: C,
                volume: w,
                emojiId: L,
                emojiName: R,
              }),
                J("ready");
            } catch (e) {
              throw new f.Z(e);
            }
          }, [T, K, C, ea, q, w, L, R]),
          es = s.useCallback(async () => {
            c()(null != K, "Cannot submit soundboard sound with no guildId"),
              H(!0),
              V(null);
            try {
              et
                ? await (0, p.$d)({
                    guildId: K,
                    soundId: A.soundId,
                    name: C,
                    volume: w,
                    emojiId: L,
                    emojiName: R,
                  })
                : await ei(),
                b();
            } catch (e) {
              Q(e);
            } finally {
              J("ready"), H(!1), U(1), F(1);
            }
          }, [et, b, K, A, C, w, L, R, ei, F]);
        s.useEffect(() => {
          B(null),
            g.default.track(S.rMx.OPEN_MODAL, {
              type: "Soundboard Upload Sound",
              guild_id: K,
            });
        }, []),
          s.useEffect(() => {
            U(Math.min(w, k));
          }, [w, U, k]);
        let er = (0, i.jsx)(m.Z, {
          guildId: K,
          emojiId: L,
          emojiName: R,
          setEmojiId: Z,
          setEmojiName: P,
          error: null == z ? void 0 : z.getFirstFieldErrorMessage("emoji"),
          isRequiredField: !1,
        });
        return (0, i.jsxs)(d.ModalRoot, {
          transitionState: M,
          children: [
            (0, i.jsx)(d.ModalCloseButton, {
              onClick: b,
              className: y.modalClose,
            }),
            (0, i.jsx)(d.ModalHeader, {
              className: y.headerContainer,
              separator: !1,
              children: (0, i.jsx)(d.Heading, {
                className: y.header,
                variant: "heading-xl/extrabold",
                children: et
                  ? x.Z.Messages.SOUNDBOARD_SOUND_UPDATE_MODAL_HEADER
                  : x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_HEADER,
              }),
            }),
            (0, i.jsxs)(d.ModalContent, {
              className: y.__invalid_content,
              children: [
                null != z &&
                  !z.hasFieldErrors() &&
                  (0, i.jsx)(d.FormErrorBlock, {
                    className: y.section,
                    children: z.message,
                  }),
                j
                  ? (0, i.jsx)(d.FormItem, {
                      required: !0,
                      className: y.section,
                      title: x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT,
                      children: (0, i.jsx)(D.Z, { value: K, onChange: X }),
                    })
                  : null,
                (et || null != T) &&
                  (0, i.jsx)(N.Z, {
                    sound: A,
                    volume: w,
                    disabled: en,
                    onChange: W,
                  }),
                et || null != o
                  ? null
                  : (0, i.jsx)(d.FormItem, {
                      required: !0,
                      error:
                        null == z
                          ? void 0
                          : z.getFirstFieldErrorMessage("sound"),
                      className: y.section,
                      title: x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_FILE,
                      children: (0, i.jsx)(h.Z, {
                        filename:
                          null !== (a = null == T ? void 0 : T.name) &&
                          void 0 !== a
                            ? a
                            : "",
                        buttonText:
                          x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_BROWSE,
                        placeholder:
                          x.Z.Messages
                            .SOUNDBOARD_SOUND_UPLOAD_MODAL_INPUT_PLACEHOLDER,
                        onFileSelect: $,
                        filters: E,
                      }),
                    }),
                (0, i.jsxs)("div", {
                  className: y.multiInput,
                  children: [
                    (0, i.jsx)(d.FormItem, {
                      required: !0,
                      error:
                        null == z
                          ? void 0
                          : z.getFirstFieldErrorMessage("name"),
                      className: u()(y.section, y.halfInput),
                      title:
                        x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                      children: (0, i.jsx)(d.TextInput, {
                        placeholder:
                          x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                        value: C,
                        onChange: I,
                        maxLength: O.Ek,
                      }),
                    }),
                    er,
                  ],
                }),
                (0, i.jsx)(d.FormItem, {
                  error:
                    null == z ? void 0 : z.getFirstFieldErrorMessage("volume"),
                  className: y.section,
                  title:
                    x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_VOLUME,
                  children: (0, i.jsx)(d.Slider, {
                    initialValue: w,
                    onValueChange: (e) => U(e),
                    minValue: 0,
                    maxValue: k,
                  }),
                }),
              ],
            }),
            (0, i.jsxs)(d.ModalFooter, {
              children: [
                (0, i.jsx)(d.Button, {
                  disabled: !el,
                  submitting: G,
                  size: d.Button.Sizes.SMALL,
                  onClick: es,
                  children: et
                    ? x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SAVE
                    : x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_UPLOAD,
                }),
                (0, i.jsx)(d.Button, {
                  disabled: G,
                  onClick: b,
                  size: d.Button.Sizes.SMALL,
                  look: d.Button.Looks.LINK,
                  color: d.Button.Colors.PRIMARY,
                  children: x.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_CANCEL,
                }),
                null != ee &&
                  (0, i.jsx)("div", {
                    className: y.soundStateHint,
                    children: (0, i.jsx)(d.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: ee,
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
          return y;
        },
      }),
        t(47120);
      var l = t(735250),
        a = t(470079),
        i = t(120356),
        s = t.n(i),
        r = t(442837),
        u = t(481060),
        o = t(565138),
        c = t(357156),
        d = t(430824),
        f = t(496675),
        m = t(771845),
        h = t(594174),
        g = t(267642),
        p = t(709054),
        N = t(208049),
        _ = t(763296),
        v = t(710111),
        D = t(981631),
        O = t(689938),
        S = t(999507);
      function x(e) {
        let { availableSlots: n, className: t } = e;
        return (0, l.jsxs)(u.Text, {
          className: s()(S.suffixNode, t),
          variant: "text-sm/medium",
          color: "text-primary",
          children: [
            (0, l.jsx)(u.VoiceNormalIcon, {
              size: "md",
              color: "currentColor",
              className: S.speakerIcon,
            }),
            O.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format(
              { slots: n },
            ),
          ],
        });
      }
      function y(e) {
        let { value: n, className: t, onChange: i } = e,
          y = (0, r.cj)([m.ZP, f.Z, h.default, d.Z], () => {
            let e = {};
            for (let n of m.ZP.getFlattenedGuildIds()) {
              let t = d.Z.getGuild(n);
              if (null != t)
                (0, c.Gw)(t, f.Z, h.default).canCreateExpressions &&
                  (e[t.id] = t);
            }
            return e;
          }),
          E = (0, r.cj)(
            [_.Z],
            () => {
              let e = {};
              for (let [t, l] of p.default.entries(y)) {
                var n;
                let a = (0, g.yw)(
                  l,
                  null !== (n = _.Z.getSoundsForGuild(t)) && void 0 !== n
                    ? n
                    : v.Hy,
                  l.premiumTier,
                );
                e[t] = a;
              }
              return e;
            },
            [y],
          );
        a.useEffect(() => {
          (0, N.w)();
        }, []);
        let A = a.useMemo(
            () =>
              Object.values(y).map((e) => {
                let { name: n, id: t } = e;
                return { label: n, value: t, disabled: E[t] <= 0 };
              }),
            [y, E],
          ),
          b = a.useCallback(
            (e) =>
              null == e || "" === e.value
                ? null
                : (0, l.jsx)(o.Z, {
                    className: s()(S.guildSelectOptionIcon, {
                      [S.disabledOption]: e.disabled,
                    }),
                    guild: y[e.value],
                    size: o.Z.Sizes.SMOL,
                    active: !0,
                  }),
            [y],
          ),
          M = a.useCallback(
            (e) => {
              let n = null == e ? void 0 : e.value;
              return null == n || "" === n
                ? null
                : (0, l.jsx)(x, {
                    className: s()({
                      [S.disabledOption]: null == e ? void 0 : e.disabled,
                    }),
                    availableSlots: E[n],
                  });
            },
            [E],
          ),
          j = a.useCallback(
            (e) =>
              (0, l.jsx)("div", {
                className: s()({ [S.disabledOption]: e.disabled }),
                children: e.label,
              }),
            [],
          ),
          C = a.useCallback(
            (e) => {
              !(E[e] <= 0) && i(e);
            },
            [E, i],
          ),
          I = (() => {
            let e = E[null != n ? n : D.lds];
            return null == e || e > 0 ? n : void 0;
          })();
        return (0, l.jsx)(u.SearchableSelect, {
          className: t,
          onChange: C,
          value: I,
          multi: !1,
          options: A,
          renderOptionPrefix: b,
          renderOptionSuffix: M,
          renderOptionLabel: j,
          placeholder:
            0 === A.length
              ? O.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE
              : O.Z.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER,
        });
      }
    },
  },
]);
//# sourceMappingURL=d9ec93b1d51af4035606.js.map
