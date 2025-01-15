"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61526"],
  {
    581498: function (e) {
      e.exports = "/assets/c1a7dffaf53e7de97c97.svg";
    },
    898406: function (e) {
      e.exports = "/assets/a4f6d53e2aac17f5d11f.svg";
    },
    212039: function (e, t, n) {
      n.d(t, {
        w: function () {
          return l;
        },
      }),
        n(47120),
        n(653041);
      var a = n(735630);
      async function l(e) {
        let t = a.createFile(),
          n = a.createFile(),
          l = {};
        (e.fileStart = 0),
          (t.onReady = (e) => {
            for (let a of (n.init({
              duration: e.duration,
              timescale: e.timescale,
            }),
            e.audioTracks))
              (l[a.id] = a),
                t.setExtractionOptions(a.id, null, { nbSamples: 1 / 0 }),
                n.addTrack({
                  id: a.id,
                  timescale: a.timescale,
                  hdlr: "soun",
                  type: "mp4a",
                  duration: a.duration,
                  layer: a.layer,
                  channel_count: a.audio.channel_count,
                  samplerate: a.audio.sample_rate,
                  samplesize: a.audio.sample_size,
                  name: a.name,
                });
            t.start();
          });
        let i = new Promise((e) => {
          t.onSamples = (a, i, r) => {
            for (let e of r) n.addSample(a, e.data, e);
            t.releaseUsedSamples(a, r.length), delete l[a];
            let o = n.getTrackById(a),
              s = t.getTrackById(a);
            if (null != s.edts) {
              let e = s.edts.elst;
              o.add("edts").boxes.push(e);
            }
            0 === Object.keys(l).length && e();
          };
        });
        return t.appendBuffer(e), t.flush(), await i, n.getBuffer();
      }
    },
    362693: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(200651),
        l = n(192379),
        i = n(481060),
        r = n(673462),
        o = n(826078),
        s = n(917042),
        u = n(20437),
        d = n(730568);
      function c(e) {
        let {
            isLoading: t,
            onDoneLoading: n,
            videoURL: c,
            audioURL: m,
            transitionState: p,
          } = e,
          {
            videoPlayerRef: v,
            cropData: f,
            applicationAudioEnabled: b,
            voiceAudioEnabled: h,
          } = (0, u.S)(),
          x = l.useCallback(() => {
            var e;
            null === (e = v.current) || void 0 === e || e.seek(f.start), n();
          }, [n, f.start, v]);
        return (
          l.useEffect(() => {
            function e(e) {
              var t, n;
              if (
                (null === (t = document.activeElement) || void 0 === t
                  ? void 0
                  : t.tagName) === "INPUT"
              )
                return;
              let a = v.current;
              if (null == a) return;
              let l =
                null === (n = v.current) || void 0 === n
                  ? void 0
                  : n.videoElement;
              if (null == l) return;
              let i = (0, s.Z)(l.duration, e.shiftKey),
                r = !1;
              switch (e.key) {
                case " ":
                  (r = !0), l.paused ? a.play() : a.pause();
                  break;
                case "ArrowLeft":
                  (r = !0), a.seek(Math.max(l.currentTime - i, f.start));
                  break;
                case "ArrowRight":
                  (r = !0), a.seek(Math.min(l.currentTime + i, f.end));
              }
              r && (e.stopPropagation(), e.preventDefault());
            }
            return (
              document.addEventListener("keydown", e),
              () => document.removeEventListener("keydown", e)
            );
          }, [f.start, f.end, v]),
          (0, a.jsxs)("div", {
            className: d.editorPane,
            children: [
              (0, a.jsx)("div", {
                className: d.videoSizer,
                children: (0, a.jsx)(r.Z, {
                  applicationAudioEnabled: b,
                  voiceAudioEnabled: h,
                  ref: v,
                  audioSrc: m,
                  src: c,
                  isLoading: t,
                  onDoneLoading: x,
                  startTime: f.start,
                  endTime: f.end,
                }),
              }),
              !t &&
              p &&
              [
                i.ModalTransitionState.ENTERED,
                i.ModalTransitionState.HIDDEN,
              ].includes(p)
                ? (0, a.jsx)(o.Z, { sourceURL: c })
                : null,
            ],
          })
        );
      }
    },
    678651: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      }),
        n(47120);
      var a = n(200651),
        l = n(192379),
        i = n(442837),
        r = n(481060),
        o = n(835473),
        s = n(925329),
        u = n(706454),
        d = n(709054),
        c = n(388032),
        m = n(257645);
      function p(e) {
        var t, n;
        let { clip: p } = e,
          [v] = (0, o.Z)([
            null !== (t = p.applicationId) && void 0 !== t ? t : "",
          ]),
          f = (0, i.e7)([u.default], () => u.default.locale),
          b = l.useMemo(
            () => new Date(d.default.extractTimestamp(p.id)),
            [p.id],
          );
        return (0, a.jsxs)("div", {
          className: m.root,
          children: [
            (0, a.jsxs)("div", {
              className: m.nameSection,
              children: [
                (0, a.jsx)(s.Z, { game: v }),
                (0, a.jsx)(r.Text, {
                  className: m.name,
                  variant: "text-md/medium",
                  color: "interactive-active",
                  children:
                    null !== (n = null == v ? void 0 : v.name) && void 0 !== n
                      ? n
                      : p.applicationName,
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: m.timeContainer,
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)(r.FormTitle, {
                      className: m.timeTitle,
                      children: c.intl.string(c.t.g8pDeX),
                    }),
                    (0, a.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      color: "interactive-active",
                      children: b.toLocaleDateString(f, {
                        year: "2-digit",
                        month: "2-digit",
                        day: "2-digit",
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)(r.FormTitle, {
                      className: m.timeTitle,
                      children: c.intl.string(c.t.v6XAgo),
                    }),
                    (0, a.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      color: "interactive-active",
                      children: b.toLocaleTimeString(f, {
                        hour: "numeric",
                        minute: "numeric",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    674908: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
      }),
        n(47120);
      var a = n(200651),
        l = n(192379),
        i = n(120356),
        r = n.n(i),
        o = n(952265),
        s = n(481060),
        u = n(239091),
        d = n(579806),
        c = n(357156),
        m = n(592125),
        p = n(430824),
        v = n(496675),
        f = n(594174),
        b = n(709054),
        h = n(39604),
        x = n(680056),
        g = n(678651),
        j = n(445229),
        C = n(20437),
        w = n(356659),
        y = n(710111),
        _ = n(388032),
        k = n(2117),
        S = n(413135).Buffer;
      function N(e) {
        let {
            clip: t,
            channelId: i,
            clipName: N,
            onSetClipName: T,
            onClose: L,
          } = e,
          {
            videoPlayerRef: F,
            cropData: R,
            voiceAudioEnabled: E,
            setVoiceAudioEnabled: I,
            applicationAudioEnabled: P,
            setApplicationAudioEnabled: B,
          } = (0, C.S)(),
          [M, A] = l.useState(null),
          { onShareClick: Z } = (0, x.Z)({
            channelId: i,
            setExporting: (e) => A(null != e ? "share" : null),
          });
        async function D() {
          var e;
          let l = m.Z.getChannel(i);
          A("export"), null === (e = F.current) || void 0 === e || e.pause();
          try {
            let e = await (0, h.rO)(t, {
              ...R,
              applicationAudio: P,
              voiceAudio: E,
            });
            (0, s.openModalLazy)(async () => {
              let { default: i } = await Promise.all([
                  n.e("56035"),
                  n.e("97207"),
                ]).then(n.bind(n, 758961)),
                r =
                  (null == l ? void 0 : l.guild_id) != null
                    ? p.Z.getGuild(l.guild_id)
                    : null,
                o =
                  null != r &&
                  (0, c.Gw)(r, v.Z, f.default).canCreateExpressions,
                s =
                  null == N || "" === N
                    ? (0, w.yl)(b.default.extractTimestamp(t.id))
                    : N,
                u = s.slice(0, y.Ek);
              return (t) =>
                (0, a.jsx)(i, {
                  ...t,
                  showGuildPicker: !0,
                  guildId: o ? (null == l ? void 0 : l.guild_id) : void 0,
                  sourceFile: {
                    file: new File([e], "".concat(s, ".mp4"), {
                      type: "video/mp4",
                    }),
                    name: u,
                  },
                });
            });
          } catch (e) {
          } finally {
            A(null);
          }
        }
        async function z() {
          var e;
          A("export"), null === (e = F.current) || void 0 === e || e.pause();
          try {
            let e = await (0, h.rO)(t, {
                ...R,
                applicationAudio: P,
                voiceAudio: E,
              }),
              n = await e.arrayBuffer();
            await d.Z.fileManager.saveWithDialog(S.from(n), (0, w.EF)(t.id));
          } catch (e) {
          } finally {
            A(null);
          }
        }
        function O() {
          var e;
          null === (e = F.current) || void 0 === e || e.pause(),
            (0, s.openModalLazy)(async () => {
              let { default: e } = await n.e("15915").then(n.bind(n, 799677));
              return (n) =>
                (0, a.jsx)(e, {
                  clip: t,
                  ...n,
                  onClose: async () => {
                    await n.onClose();
                  },
                  onAfterDelete: async () => {
                    await n.onClose(), L();
                  },
                });
            });
        }
        return (0, a.jsxs)("div", {
          className: k.clipForm,
          children: [
            (0, a.jsxs)("div", {
              className: r()(k.clipFormSection, k.editSection),
              children: [
                (0, a.jsx)(s.FormItem, {
                  className: k.clipFormItem,
                  title: _.intl.string(_.t.SJKc5u),
                  children: (0, a.jsx)(s.TextInput, {
                    onChange: (e) => {
                      "" === e ? T(void 0) : T(e);
                    },
                    value: N,
                    minLength: w.XH,
                    maxLength: w.MG,
                    placeholder: _.intl.string(_.t.Cyxddn),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: k.clipFormSwitches,
                  children: [
                    (0, a.jsx)(s.FormSwitch, {
                      onChange: B,
                      value: P,
                      hideBorder: !0,
                      children: _.intl.string(_.t.GnQui4),
                    }),
                    (0, a.jsx)(s.FormSwitch, {
                      onChange: I,
                      value: E,
                      hideBorder: !0,
                      children: _.intl.string(_.t["5mVOCQ"]),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: r()(k.clipFormSection, k.metadataSection),
              children: [
                (0, a.jsx)(g.Z, { clip: t }),
                (0, a.jsx)(j.Z, { className: k.userList, clip: t }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: k.clipFormFooter,
              children: [
                (0, a.jsx)(s.Button, {
                  submitting: "share" === M,
                  disabled: null != M && "share" !== M,
                  color: s.Button.Colors.BRAND,
                  wrapperClassName: k.clipFormFooterButton,
                  onClick: () =>
                    Z({
                      clip: { ...t, name: N },
                      cropData: R,
                      applicationAudioEnabled: P,
                      voiceAudioEnabled: E,
                      onShareComplete: () => {
                        o.Mr(w.Ut), o.Mr(w.Qr);
                      },
                    }),
                  children: _.intl.string(_.t.I8lglZ),
                }),
                (0, a.jsx)(s.Button, {
                  size: s.Button.Sizes.ICON,
                  className: k.clipFormFooterButton,
                  disabled: null != M,
                  wrapperClassName: r()(k.clipFormFooterButton, {
                    [k.submittingWrapperFix]: null != M,
                  }),
                  color: s.Button.Colors.PRIMARY,
                  onClick: L,
                  children: _.intl.string(_.t.K344S0),
                }),
                (0, a.jsx)(s.Button, {
                  "aria-label": _.intl.string(_.t.PdRCRk),
                  size: s.Button.Sizes.ICON,
                  wrapperClassName: r()(k.clipFormFooterButton, {
                    [k.submittingWrapperFix]: null != M,
                  }),
                  submitting: "export" === M,
                  disabled: null != M && "export" !== M,
                  color: s.Button.Colors.PRIMARY,
                  onClick: function (e) {
                    (0, u.jW)(e, async () => {
                      let { default: e } = await n
                        .e("32157")
                        .then(n.bind(n, 151090));
                      return (t) =>
                        (0, a.jsx)(e, {
                          ...t,
                          onExportToSoundboard: D,
                          onExportToFile: z,
                          onDelete: O,
                          channelId: i,
                        });
                    });
                  },
                  children: (0, a.jsx)(s.MoreHorizontalIcon, {
                    size: "md",
                    color: "currentColor",
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    22989: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return j;
          },
        }),
        n(47120),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648);
      var a = n(200651),
        l = n(192379),
        i = n(990547),
        r = n(481060),
        o = n(240872),
        s = n(579806),
        u = n(100527),
        d = n(906732),
        c = n(39604),
        m = n(212039),
        p = n(259612),
        v = n(572720),
        f = n(362693),
        b = n(674908),
        h = n(20437),
        x = n(388032),
        g = n(730568);
      function j(e) {
        var t, n, j, C, w, y, _, k;
        let { clip: S, channelId: N, transitionState: T, onClose: L } = e,
          [F, R] = l.useState(!0),
          [E, I] = l.useState(null),
          [P, B] = l.useState(null),
          { analyticsLocations: M } = (0, d.ZP)(u.Z.CLIPS_EDITOR);
        l.useEffect(() => {
          (async function e() {
            let e;
            try {
              e = await s.Z.clips.loadClip(S.filepath);
            } catch {
              L(),
                o.Z.show({
                  title: x.intl.string(x.t.yjoSOD),
                  body: x.intl.string(x.t.JmYczc),
                });
              return;
            }
            let t = e.data.buffer,
              n = await (0, m.w)(t),
              a = URL.createObjectURL(new Blob([n], { type: "audio/mp4" })),
              l = URL.createObjectURL(
                new Blob([e.data], { type: "video/mp4" }),
              );
            B(a), I(l);
          })();
        }, [S.filepath, L]),
          l.useEffect(
            () => () => {
              null != E && URL.revokeObjectURL(E);
            },
            [E],
          ),
          l.useEffect(
            () => () => {
              null != P && URL.revokeObjectURL(P);
            },
            [P],
          );
        let [A, Z] = l.useState(
            null ===
              (w =
                null === (t = S.editMetadata) || void 0 === t
                  ? void 0
                  : t.voiceAudio) ||
              void 0 === w ||
              w,
          ),
          [D, z] = l.useState(
            null ===
              (y =
                null === (n = S.editMetadata) || void 0 === n
                  ? void 0
                  : n.applicationAudio) ||
              void 0 === y ||
              y,
          ),
          [O, H] = l.useState({
            start:
              null !==
                (_ =
                  null === (j = S.editMetadata) || void 0 === j
                    ? void 0
                    : j.start) && void 0 !== _
                ? _
                : 0,
            end:
              null !==
                (k =
                  null === (C = S.editMetadata) || void 0 === C
                    ? void 0
                    : C.end) && void 0 !== k
                ? k
                : 0,
          }),
          [W, U] = l.useState(S.name),
          V = l.useRef({
            name: W,
            editMetadata: {
              start: O.start,
              end: O.end,
              voiceAudio: A,
              applicationAudio: D,
            },
          });
        V.current = {
          name: W,
          editMetadata: {
            start: O.start,
            end: O.end,
            voiceAudio: A,
            applicationAudio: D,
          },
        };
        let K = (0, v.l)(S);
        l.useEffect(() => {
          async function e() {
            let e = {};
            null != K &&
              (e = {
                thumbnail: await (0, p.R)(K, V.current.editMetadata.start),
              }),
              (0, c.Tm)(S.id, { ...V.current, ...e });
          }
          return () => {
            e();
          };
        }, [S.id, K]);
        let G = l.useRef(null),
          X = l.useMemo(
            () => ({
              videoPlayerRef: G,
              applicationAudioEnabled: D,
              setApplicationAudioEnabled: z,
              voiceAudioEnabled: A,
              setVoiceAudioEnabled: Z,
              cropData: O,
              setCropData: H,
            }),
            [D, A, O],
          );
        return (0, a.jsx)(r.ModalRoot, {
          impression: { impressionName: i.ImpressionNames.CLIP_EDITOR_VIEWED },
          size: r.ModalSize.DYNAMIC,
          className: g.modalRoot,
          transitionState: T,
          children: (0, a.jsx)(d.Gt, {
            value: M,
            children: (0, a.jsx)(r.ModalContent, {
              className: g.modalContent,
              children: (0, a.jsx)(h.Q.Provider, {
                value: X,
                children:
                  null == E || null == P
                    ? (0, a.jsx)("div", {
                        className: g.spinnerContainer,
                        children: (0, a.jsx)(r.Spinner, {}),
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(f.Z, {
                            videoURL: E,
                            isLoading: F,
                            onDoneLoading: () => R(!1),
                            audioURL: P,
                            transitionState: T,
                          }),
                          !F &&
                            (0, a.jsx)(b.Z, {
                              channelId: N,
                              onSetClipName: U,
                              clipName: W,
                              clip: S,
                              onClose: L,
                            }),
                        ],
                      }),
              }),
            }),
          }),
        });
      }
    },
    673462: function (e, t, n) {
      n(47120), n(653041);
      var a = n(200651),
        l = n(192379),
        i = n(392711),
        r = n(98650),
        o = n(70097),
        s = n(730568);
      function u(e) {
        let { setRef: t, audioTrackLabel: n, src: i, muted: r } = e,
          o = l.useCallback(
            (e) => {
              t(e, n);
            },
            [t, n],
          ),
          u = l.useCallback(
            (e) => {
              Object.values(e.currentTarget.audioTracks).forEach((e) => {
                e.enabled = n === e.label;
              });
            },
            [n],
          );
        return (0, a.jsx)("audio", {
          id: "ClipsPlayerAudioTrack:".concat(n),
          className: s.hidden,
          ref: o,
          src: i,
          muted: r,
          preload: "auto",
          onLoadedMetadata: u,
        });
      }
      t.Z = l.forwardRef(function (e, t) {
        let {
            src: n,
            audioSrc: d,
            applicationAudioEnabled: c,
            voiceAudioEnabled: m,
            isLoading: p,
            onDoneLoading: v,
            startTime: f = 0,
            endTime: b,
          } = e,
          h = l.useRef({}),
          [x, g] = l.useState([]),
          j = l.useRef(!1),
          C = l.useCallback(() => {
            let e = h.current.main;
            if (null == e) return;
            let t = (0, i.round)(e.currentTime, 3),
              n = (0, i.round)(f, 3);
            if (
              t >=
                (null != b
                  ? (0, i.round)(b, 3)
                  : (0, i.round)(e.duration, 3)) ||
              t < n
            ) {
              for (let e of Object.values(h.current))
                null != e && (e.currentTime = f);
              return !0;
            }
          }, [f, b]);
        (0, r.Z)(() => {
          j.current && C() && w();
        });
        let w = l.useCallback(() => {
            for (let e of ((j.current = !0), C(), Object.values(h.current)))
              null != e && e.play();
          }, [C]),
          y = l.useCallback(() => {
            for (let e of Object.values(h.current)) null != e && e.pause();
          }, []),
          _ = l.useCallback((e) => {
            var t;
            for (let n of ((null === (t = h.current.main) || void 0 === t
              ? void 0
              : t.paused) && (j.current = !1),
            Object.values(h.current)))
              null != n && (n.currentTime = e);
          }, []),
          k = l.useCallback(() => {
            var e;
            (null === (e = h.current.main) || void 0 === e ? void 0 : e.paused)
              ? w()
              : y();
          }, [w, y]),
          S = l.useCallback((e) => {
            h.current.main = e;
          }, []),
          N = l.useCallback((e) => {
            let t = [];
            for (let n of Object.values(e.currentTarget.audioTracks))
              n.label.includes(":application")
                ? (n.enabled = !0)
                : n.label.includes(":voice")
                  ? ((n.enabled = !1), !t.includes(n.label) && t.push(n.label))
                  : (n.enabled = !1);
            g(t);
          }, []),
          T = l.useCallback((e, t) => {
            h.current[t] = e;
          }, []);
        return (l.useImperativeHandle(t, () => ({
          play: w,
          seek: _,
          pause: y,
          videoElement: h.current.main,
        })),
        null == n)
          ? null
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(o.Z, {
                  onClick: k,
                  className: p ? s.hidden : s.displayVideo,
                  ref: S,
                  src: n,
                  muted: !0,
                  onLoadedData: v,
                  preload: "auto",
                }),
                (0, a.jsx)("audio", {
                  id: "ClipsPlayerAudioTrack:application",
                  src: d,
                  muted: !c,
                  preload: "auto",
                  className: s.hidden,
                  ref: (e) => T(e, "application"),
                  onLoadedMetadata: N,
                }),
                x.map((e) =>
                  (0, a.jsx)(
                    u,
                    { audioTrackLabel: e, setRef: T, src: d, muted: !m },
                    e,
                  ),
                ),
              ],
            });
      });
    },
    826078: function (e, t, n) {
      n(47120);
      var a = n(200651),
        l = n(192379),
        i = n(120356),
        r = n.n(i),
        o = n(392711),
        s = n(399606),
        u = n(84735),
        d = n(481060),
        c = n(393238),
        m = n(98650),
        p = n(70097),
        v = n(451478),
        f = n(917042),
        b = n(20437),
        h = n(356659),
        x = n(388032),
        g = n(222758);
      function j(e) {
        ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
        let t = Math.floor(e / 60),
          n = Math.floor(e % 60),
          a = Math.floor((e % 1) * 100);
        return (
          (t = t < 10 ? "0" + t : t),
          (n = n < 10 ? "0" + n : n),
          (a = a < 10 ? "0" + a : a),
          "".concat(t, ":").concat(n, ".").concat(a)
        );
      }
      function C(e) {
        let t = Math.floor(e / 60),
          n = x.intl.formatToPlainString(x.t.iXLF9f, { minutes: t }),
          a = x.intl.formatToPlainString(x.t.geSp4O, { seconds: e % 60 });
        return "".concat(n, " ").concat(a);
      }
      t.Z = function (e) {
        var t, n, i, w, y, _;
        let { sourceURL: k } = e,
          { videoPlayerRef: S, cropData: N, setCropData: T } = (0, b.S)(),
          [L, F] = l.useState(
            ((_ = !(null === (n = S.current) || void 0 === n
              ? void 0
              : null === (t = n.videoElement) || void 0 === t
                ? void 0
                : t.paused)),
            _),
          ),
          R = l.useRef(null),
          [E, I] = l.useState(null),
          [P, B] = l.useState(),
          M = l.useRef(null),
          A = l.useRef(null),
          [Z, D] = l.useState(0),
          [z, O] = l.useState(!1),
          [H, W] = l.useState(null);
        (0, m.Z)(() => {
          var e;
          let t =
            null === (e = S.current) || void 0 === e ? void 0 : e.videoElement;
          null != t && Z !== t.currentTime && D(t.currentTime);
        });
        let U = l.useMemo(() => N.end - N.start, [N]);
        l.useEffect(() => {
          var e;
          let t =
              null === (e = S.current) || void 0 === e
                ? void 0
                : e.videoElement,
            n = M.current,
            a = A.current;
          if (null == t || null == n || null == a) return;
          let l = (0, o.debounce)(F, h.HW),
            i = () => {
              I(null), O(!1), l.cancel(), l(!0);
            },
            r = () => {
              l.cancel(), l(!1);
            };
          return (
            t.addEventListener("play", i),
            t.addEventListener("pause", r),
            () => {
              t.removeEventListener("play", i),
                t.removeEventListener("pause", r);
            }
          );
        }, [S]);
        let { ref: V, width: K = 0, height: G = 0 } = (0, c.Z)(),
          X = (0, s.e7)([v.Z], () => v.Z.windowSize());
        l.useMemo(() => {
          X.width, X.height;
          let e = V.current;
          null != e && W(e.getBoundingClientRect());
        }, [X.width, X.height, K, V]);
        let Q = l.useRef(null),
          Y = l.useRef({}),
          J = l.useCallback(
            (e) => {
              var t;
              let n = (0, o.clamp)(e, 0, N.end - h.Hp);
              T({ ...N, start: n }),
                null === (t = S.current) || void 0 === t || t.seek(n);
            },
            [N, T, S],
          ),
          q = l.useCallback(
            (e) => {
              var t, n;
              let a =
                null === (t = S.current) || void 0 === t
                  ? void 0
                  : t.videoElement;
              if (null == a) return;
              let l = (0, o.clamp)(e, N.start + h.Hp, a.duration);
              T({ ...N, end: l }),
                null === (n = S.current) || void 0 === n || n.seek(l);
            },
            [N, T, S],
          ),
          $ = l.useCallback(
            (e, t) => {
              var n, a;
              if (null == P) return;
              if (null == H) return null;
              let l =
                  (((0, o.clamp)(e, H.left, H.right) - H.left) / H.width) * P,
                i = (0, o.clamp)(l, 0, P),
                r = E;
              if (
                (null == r &&
                  t &&
                  ((r =
                    i <= N.start ? "start" : i >= N.end ? "end" : "playhead"),
                  null === (n = S.current) || void 0 === n || n.pause(),
                  I(r),
                  O(L)),
                "start" === r)
              )
                J(i);
              else if ("end" === r) q(i);
              else if ("playhead" === r) {
                let e = (0, o.clamp)(i, N.start, N.end);
                null === (a = S.current) || void 0 === a || a.seek(e);
              }
            },
            [P, H, E, N.start, N.end, S, L, J, q],
          ),
          ee = l.useCallback(
            (e) => {
              var t;
              let n =
                null === (t = S.current) || void 0 === t
                  ? void 0
                  : t.videoElement;
              if (null == n) return;
              let a = (0, f.Z)(n.duration, e.shiftKey),
                l = !1;
              switch (e.key) {
                case "ArrowLeft":
                  (l = !0), J(N.start - a);
                  break;
                case "ArrowRight":
                  (l = !0), J(N.start + a);
              }
              l && (e.stopPropagation(), e.preventDefault());
            },
            [S, J, N.start],
          ),
          et = l.useCallback(
            (e) => {
              var t;
              let n =
                null === (t = S.current) || void 0 === t
                  ? void 0
                  : t.videoElement;
              if (null == n) return;
              let a = (0, f.Z)(n.duration, e.shiftKey),
                l = !1;
              switch (e.key) {
                case "ArrowLeft":
                  (l = !0), q(N.end - a);
                  break;
                case "ArrowRight":
                  (l = !0), q(N.end + a);
              }
              l && (e.stopPropagation(), e.preventDefault());
            },
            [S, q, N.end],
          ),
          en = l.useCallback(
            (e) => {
              $(e.clientX, !0);
            },
            [$],
          ),
          ea = l.useCallback(
            (e) => {
              $(e.clientX, !1);
            },
            [$],
          ),
          el = l.useCallback(() => {
            if (z) {
              var e;
              null === (e = S.current) || void 0 === e || e.play();
            }
            O(!1), I(null);
          }, [S, z]);
        l.useEffect(
          () => (
            document.addEventListener("mousemove", ea),
            document.addEventListener("mouseup", el),
            () => {
              document.removeEventListener("mousemove", ea),
                document.removeEventListener("mouseup", el);
            }
          ),
          [ea, el],
        ),
          l.useEffect(() => {
            (async function e() {
              var e;
              let t = V.current,
                n = R.current;
              if (null == t || null == n || null == P) return;
              (t.height = G), (t.width = K);
              let a = t.getContext("2d");
              if (null == a) return;
              (a.fillStyle = "#000"), a.fillRect(0, 0, K, G);
              let l = Math.ceil(G * (n.videoWidth / n.videoHeight)),
                i = Math.ceil(K / l),
                r = Q.current;
              if (null == r) return;
              (r.width = l), (r.height = G);
              let o =
                null == r
                  ? void 0
                  : r.getContext("2d", { willReadFrequently: !0 });
              if (null == o) return;
              let s = Y.current;
              if (
                (null === (e = s[i]) || void 0 === e ? void 0 : e.length) === i
              ) {
                for (let e = 0; e < i; e++) a.putImageData(s[i][e], l * e, 0);
                return;
              }
              for (let e = 0; e < i; e++)
                await new Promise((t) => {
                  (n.onseeked = () => {
                    a.drawImage(n, l * e, 0, l, G), o.drawImage(n, 0, 0, l, G);
                    let r = o.getImageData(0, 0, l, G);
                    null == s[i] && (s[i] = []), (s[i][e] = r), t();
                  }),
                    (n.currentTime = (l / K) * P * e);
                });
            })();
          }, [K, G, V, P, Q]);
        let ei = Z - N.start,
          er =
            null === (i = S.current) || void 0 === i ? void 0 : i.videoElement;
        return (0, a.jsx)("div", {
          className: g.centeringWrapper,
          children: (0, a.jsxs)("div", {
            className: g.timelineContainer,
            children: [
              (0, a.jsx)("div", {
                className: g.playPauseButtonWrapper,
                children: (0, a.jsx)(d.Clickable, {
                  tabIndex: 0,
                  onClick: () => {
                    var e, t;
                    return L
                      ? null === (e = S.current) || void 0 === e
                        ? void 0
                        : e.pause()
                      : null === (t = S.current) || void 0 === t
                        ? void 0
                        : t.play();
                  },
                  className: g.playPauseButton,
                  children: L
                    ? (0, a.jsx)(d.PauseIcon, {
                        size: "md",
                        color: "currentColor",
                        className: g.playPauseIcon,
                      })
                    : (0, a.jsx)(d.PlayIcon, {
                        size: "md",
                        color: "currentColor",
                        className: g.playPauseIcon,
                      }),
                }),
              }),
              (0, a.jsxs)("div", {
                className: r()(g.timeline, { [g.timelineDragging]: null != E }),
                onMouseDown: en,
                children: [
                  (0, a.jsx)("canvas", { className: g.hiddenCanvas, ref: Q }),
                  (0, a.jsx)("canvas", {
                    className: g.timelineBackground,
                    ref: V,
                  }),
                  (0, a.jsx)(u.t, {
                    children: (0, a.jsx)("div", {
                      tabIndex: 0,
                      ref: M,
                      className: g.playhead,
                      style: {
                        left:
                          null != er
                            ? "".concat(
                                (er.currentTime / er.duration) * 100,
                                "%",
                              )
                            : 0,
                      },
                    }),
                  }),
                  (0, a.jsx)(p.Z, {
                    preload: "auto",
                    onLoadedMetadata: function () {
                      let e = R.current;
                      if (null != e) {
                        if (
                          (B(e.duration),
                          0 === N.start &&
                            (0 === N.end || N.end === e.duration))
                        ) {
                          var t;
                          null === (t = S.current) ||
                            void 0 === t ||
                            t.seek(e.duration / 2),
                            D(e.duration / 2);
                        }
                        0 === N.end && T((t) => ({ ...t, end: e.duration }));
                      }
                    },
                    className: g.timelineVideo,
                    ref: R,
                    src: k,
                    muted: !0,
                  }),
                  (0, a.jsxs)("div", {
                    className: g.dragBox,
                    style: {
                      left:
                        null != P ? "".concat((N.start / P) * 100, "%") : "0",
                      right:
                        null != P
                          ? "".concat(((P - N.end) / P) * 100, "%")
                          : "0",
                    },
                    children: [
                      (0, a.jsx)("div", {
                        className: g.timePillContainer,
                        children: (0, a.jsx)("div", {
                          ref: A,
                          className: g.timePillBackground,
                          children: (0, a.jsxs)(d.Text, {
                            variant: "text-sm/normal",
                            className: g.timePillText,
                            color: "always-white",
                            children: [
                              j(ei),
                              (0, a.jsx)("span", {
                                className: g.slashCharacter,
                                children: " / ",
                              }),
                              j(U),
                            ],
                          }),
                        }),
                      }),
                      (0, a.jsx)(u.t, {
                        children: (0, a.jsx)("button", {
                          className: r()(g.dragHandleLeft, {
                            [g.dragging]: "start" === E,
                          }),
                          onMouseDown: en,
                          onKeyDown: ee,
                          role: "slider",
                          tabIndex: 0,
                          "aria-valuemin": 0,
                          "aria-valuenow": N.start,
                          "aria-valuetext": C(N.start),
                          "aria-valuemax": N.end - h.Hp,
                          "aria-label": x.intl.string(x.t["+BTvw8"]),
                          children: (0, a.jsx)("div", {
                            className: g.cropLeftArrow,
                          }),
                        }),
                      }),
                      (0, a.jsx)(u.t, {
                        children: (0, a.jsx)("button", {
                          className: r()(g.dragHandleRight, {
                            [g.dragging]: "end" === E,
                          }),
                          onMouseDown: en,
                          onKeyDown: et,
                          role: "slider",
                          tabIndex: 0,
                          "aria-valuemin": N.start + h.Hp,
                          "aria-valuenow": N.end,
                          "aria-valuetext": C(N.end),
                          "aria-valuemax":
                            null === (y = S.current) || void 0 === y
                              ? void 0
                              : null === (w = y.videoElement) || void 0 === w
                                ? void 0
                                : w.duration,
                          "aria-label": x.intl.string(x.t.bBgBYm),
                          children: (0, a.jsx)("div", {
                            className: g.cropRightArrow,
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    445229: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      });
      var a = n(200651),
        l = n(192379),
        i = n(120356),
        r = n.n(i),
        o = n(442837),
        s = n(481060),
        u = n(99690),
        d = n(594174),
        c = n(823379),
        m = n(5192),
        p = n(388032),
        v = n(241846);
      function f(e) {
        let { user: t } = e,
          n = m.ZP.useName(null, null, t);
        return (0, a.jsxs)("div", {
          className: v.userItem,
          children: [
            (0, a.jsx)(u.Z, { user: t }),
            (0, a.jsx)(s.Text, {
              color: "header-primary",
              variant: "text-sm/medium",
              children: n,
            }),
          ],
        });
      }
      function b(e) {
        let { clip: t, className: n } = e,
          i = (0, o.Wu)([d.default], () =>
            t.users.map(d.default.getUser).filter(c.lm),
          ),
          u = l.useCallback(
            (e) => {
              let { row: t } = e,
                n = i[t];
              return null == n ? null : (0, a.jsx)(f, { user: n }, t);
            },
            [i],
          );
        return (0, a.jsxs)("div", {
          className: r()(n, v.root),
          children: [
            (0, a.jsx)("div", {
              className: v.__invalid_header,
              children: (0, a.jsxs)(s.FormTitle, {
                className: v.title,
                children: [
                  p.intl.string(p.t.WTozwc),
                  (0, a.jsxs)("div", {
                    className: v.userCountPill,
                    children: [
                      (0, a.jsx)(s.Text, {
                        color: "text-normal",
                        variant: "text-xs/medium",
                        children: i.length,
                      }),
                      (0, a.jsx)(s.FriendsIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: v.userCountIcon,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)(s.List, {
              className: v.__invalid_userList,
              sectionHeight: 0,
              rowHeight: 40,
              sections: [i.length],
              renderRow: u,
            }),
          ],
        });
      }
    },
    917042: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(356659);
      function l(e, t) {
        let n = e / a.ji;
        return t && (n /= a.i$), n;
      }
    },
    20437: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return l;
        },
        S: function () {
          return i;
        },
      });
      var a = n(192379);
      let l = a.createContext({
        videoPlayerRef: { current: null },
        applicationAudioEnabled: !0,
        setApplicationAudioEnabled: () => {},
        voiceAudioEnabled: !0,
        setVoiceAudioEnabled: () => {},
        cropData: { start: 0, end: 0 },
        setCropData: () => {},
      });
      function i() {
        return a.useContext(l);
      }
    },
    257645: function (e, t, n) {
      e.exports = {
        root: "root_a1f5c2",
        nameSection: "nameSection_a1f5c2",
        name: "name_a1f5c2",
        timeContainer: "timeContainer_a1f5c2",
        timeTitle: "timeTitle_a1f5c2",
      };
    },
    2117: function (e, t, n) {
      e.exports = {
        clipForm: "clipForm_b00e1b",
        clipFormSection: "clipFormSection_b00e1b",
        editSection: "editSection_b00e1b",
        metadataSection: "metadataSection_b00e1b",
        clipFormFooter: "clipFormFooter_b00e1b",
        clipFormFooterButton: "clipFormFooterButton_b00e1b",
        submittingWrapperFix: "submittingWrapperFix_b00e1b",
        clipFormItem: "clipFormItem_b00e1b",
        clipFormSwitches: "clipFormSwitches_b00e1b",
        userList: "userList_b00e1b",
      };
    },
    730568: function (e, t, n) {
      e.exports = {
        modalContent: "modalContent_d7bf1b",
        editorPane: "editorPane_d7bf1b",
        displayVideo: "displayVideo_d7bf1b",
        modalRoot: "modalRoot_d7bf1b",
        videoSizer: "videoSizer_d7bf1b",
        hidden: "hidden_d7bf1b",
        spinnerContainer: "spinnerContainer_d7bf1b",
      };
    },
    222758: function (e, t, n) {
      e.exports = {
        centeringWrapper: "centeringWrapper_bb2184",
        timelineContainer: "timelineContainer_bb2184",
        playPauseButtonWrapper: "playPauseButtonWrapper_bb2184",
        playPauseIcon: "playPauseIcon_bb2184",
        timeline: "timeline_bb2184",
        timelineDragging: "timelineDragging_bb2184",
        timelineVideo: "timelineVideo_bb2184",
        timelineBackground: "timelineBackground_bb2184",
        hiddenCanvas: "hiddenCanvas_bb2184",
        dragHandleLeft: "dragHandleLeft_bb2184 dragHandle_bb2184",
        dragHandleRight: "dragHandleRight_bb2184 dragHandle_bb2184",
        dragBox: "dragBox_bb2184",
        dragging: "dragging_bb2184",
        playhead: "playhead_bb2184",
        timePillBackground: "timePillBackground_bb2184",
        timePillText: "timePillText_bb2184",
        cropLeftArrow: "cropLeftArrow_bb2184 cropArrow_bb2184",
        cropRightArrow: "cropRightArrow_bb2184 cropArrow_bb2184",
        timePillContainer: "timePillContainer_bb2184",
        playPauseButton: "playPauseButton_bb2184",
        slashCharacter: "slashCharacter_bb2184 char_bb2184",
      };
    },
    241846: function (e, t, n) {
      e.exports = {
        root: "root_e48bd3",
        userItem: "userItem_e48bd3",
        title: "title_e48bd3",
        userCountPill: "userCountPill_e48bd3",
        userCountIcon: "userCountIcon_e48bd3",
      };
    },
  },
]);
//# sourceMappingURL=cbcc1faa257ba1b12ba4.js.map
