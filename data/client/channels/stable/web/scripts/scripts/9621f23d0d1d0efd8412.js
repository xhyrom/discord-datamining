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
    212039: function (e, t, a) {
      a.d(t, {
        w: function () {
          return l;
        },
      }),
        a(47120),
        a(653041);
      var n = a(735630);
      async function l(e) {
        let t = n.createFile(),
          a = n.createFile(),
          l = {};
        (e.fileStart = 0),
          (t.onReady = (e) => {
            for (let n of (a.init({
              duration: e.duration,
              timescale: e.timescale,
            }),
            e.audioTracks))
              (l[n.id] = n),
                t.setExtractionOptions(n.id, null, { nbSamples: 1 / 0 }),
                a.addTrack({
                  id: n.id,
                  timescale: n.timescale,
                  hdlr: "soun",
                  type: "mp4a",
                  duration: n.duration,
                  layer: n.layer,
                  channel_count: n.audio.channel_count,
                  samplerate: n.audio.sample_rate,
                  samplesize: n.audio.sample_size,
                  name: n.name,
                });
            t.start();
          });
        let i = new Promise((e) => {
          t.onSamples = (n, i, r) => {
            for (let e of r) a.addSample(n, e.data, e);
            t.releaseUsedSamples(n, r.length), delete l[n];
            let o = a.getTrackById(n),
              s = t.getTrackById(n);
            if (null != s.edts) {
              let e = s.edts.elst;
              o.add("edts").boxes.push(e);
            }
            0 === Object.keys(l).length && e();
          };
        });
        return t.appendBuffer(e), t.flush(), await i, a.getBuffer();
      }
    },
    362693: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = a(735250),
        l = a(470079),
        i = a(481060),
        r = a(673462),
        o = a(826078),
        s = a(917042),
        u = a(20437),
        d = a(948061);
      function c(e) {
        let {
            isLoading: t,
            onDoneLoading: a,
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
            null === (e = v.current) || void 0 === e || e.seek(f.start), a();
          }, [a, f.start]);
        return (
          l.useEffect(() => {
            function e(e) {
              var t, a;
              if (
                (null === (t = document.activeElement) || void 0 === t
                  ? void 0
                  : t.tagName) === "INPUT"
              )
                return;
              let n = v.current;
              if (null == n) return;
              let l =
                null === (a = v.current) || void 0 === a
                  ? void 0
                  : a.videoElement;
              if (null == l) return;
              let i = (0, s.Z)(l.duration, e.shiftKey),
                r = !1;
              switch (e.key) {
                case " ":
                  (r = !0), l.paused ? n.play() : n.pause();
                  break;
                case "ArrowLeft":
                  (r = !0), n.seek(Math.max(l.currentTime - i, f.start));
                  break;
                case "ArrowRight":
                  (r = !0), n.seek(Math.min(l.currentTime + i, f.end));
              }
              r && (e.stopPropagation(), e.preventDefault());
            }
            return (
              document.addEventListener("keydown", e),
              () => document.removeEventListener("keydown", e)
            );
          }, [f.start, f.end, v]),
          (0, n.jsxs)("div", {
            className: d.editorPane,
            children: [
              (0, n.jsx)("div", {
                className: d.videoSizer,
                children: (0, n.jsx)(r.Z, {
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
                ? (0, n.jsx)(o.Z, { sourceURL: c })
                : null,
            ],
          })
        );
      }
    },
    678651: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return p;
        },
      }),
        a(47120);
      var n = a(735250),
        l = a(470079),
        i = a(442837),
        r = a(481060),
        o = a(835473),
        s = a(925329),
        u = a(706454),
        d = a(709054),
        c = a(689938),
        m = a(755732);
      function p(e) {
        var t, a;
        let { clip: p } = e,
          [v] = (0, o.Z)([
            null !== (t = p.applicationId) && void 0 !== t ? t : "",
          ]),
          f = (0, i.e7)([u.default], () => u.default.locale),
          b = l.useMemo(
            () => new Date(d.default.extractTimestamp(p.id)),
            [p.id],
          );
        return (0, n.jsxs)("div", {
          className: m.root,
          children: [
            (0, n.jsxs)("div", {
              className: m.nameSection,
              children: [
                (0, n.jsx)(s.Z, { game: v }),
                (0, n.jsx)(r.Text, {
                  className: m.name,
                  variant: "text-md/medium",
                  color: "interactive-active",
                  children:
                    null !== (a = null == v ? void 0 : v.name) && void 0 !== a
                      ? a
                      : p.applicationName,
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: m.timeContainer,
              children: [
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)(r.FormTitle, {
                      className: m.timeTitle,
                      children: c.Z.Messages.CLIPS_EDIT_DATE_TITLE,
                    }),
                    (0, n.jsx)(r.Text, {
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
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)(r.FormTitle, {
                      className: m.timeTitle,
                      children: c.Z.Messages.CLIPS_EDIT_TIME_TITLE,
                    }),
                    (0, n.jsx)(r.Text, {
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
    674908: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return y;
        },
      }),
        a(47120);
      var n = a(735250),
        l = a(470079),
        i = a(120356),
        r = a.n(i),
        o = a(952265),
        s = a(481060),
        u = a(239091),
        d = a(579806),
        c = a(357156),
        m = a(592125),
        p = a(430824),
        v = a(496675),
        f = a(594174),
        b = a(709054),
        h = a(39604),
        x = a(680056),
        g = a(678651),
        C = a(445229),
        _ = a(20437),
        j = a(356659),
        S = a(710111),
        I = a(689938),
        E = a(804553),
        T = a(413135).Buffer;
      function y(e) {
        let {
            clip: t,
            channelId: i,
            clipName: y,
            onSetClipName: w,
            onClose: N,
          } = e,
          {
            videoPlayerRef: L,
            cropData: k,
            voiceAudioEnabled: R,
            setVoiceAudioEnabled: M,
            applicationAudioEnabled: P,
            setApplicationAudioEnabled: Z,
          } = (0, _.S)(),
          [A, F] = l.useState(null),
          { onShareClick: D } = (0, x.Z)({
            channelId: i,
            setExporting: (e) => F(null != e ? "share" : null),
          });
        async function B() {
          var e;
          let l = m.Z.getChannel(i);
          F("export"), null === (e = L.current) || void 0 === e || e.pause();
          try {
            let e = await (0, h.rO)(t, {
              ...k,
              applicationAudio: P,
              voiceAudio: R,
            });
            (0, s.openModalLazy)(async () => {
              let { default: i } = await Promise.all([
                  a.e("56035"),
                  a.e("55876"),
                ]).then(a.bind(a, 758961)),
                r =
                  (null == l ? void 0 : l.guild_id) != null
                    ? p.Z.getGuild(l.guild_id)
                    : null,
                o =
                  null != r &&
                  (0, c.Gw)(r, v.Z, f.default).canCreateExpressions,
                s =
                  null == y || "" === y
                    ? (0, j.yl)(b.default.extractTimestamp(t.id))
                    : y,
                u = s.slice(0, S.Ek);
              return (t) =>
                (0, n.jsx)(i, {
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
            F(null);
          }
        }
        async function O() {
          var e;
          F("export"), null === (e = L.current) || void 0 === e || e.pause();
          try {
            let e = await (0, h.rO)(t, {
                ...k,
                applicationAudio: P,
                voiceAudio: R,
              }),
              a = await e.arrayBuffer();
            await d.Z.fileManager.saveWithDialog(T.from(a), (0, j.EF)(t.id));
          } catch (e) {
          } finally {
            F(null);
          }
        }
        function H() {
          var e;
          null === (e = L.current) || void 0 === e || e.pause(),
            (0, s.openModalLazy)(async () => {
              let { default: e } = await a.e("15915").then(a.bind(a, 799677));
              return (a) =>
                (0, n.jsx)(e, {
                  clip: t,
                  ...a,
                  onClose: async () => {
                    await a.onClose();
                  },
                  onAfterDelete: async () => {
                    await a.onClose(), N();
                  },
                });
            });
        }
        return (0, n.jsxs)("div", {
          className: E.clipForm,
          children: [
            (0, n.jsxs)("div", {
              className: r()(E.clipFormSection, E.editSection),
              children: [
                (0, n.jsx)(s.FormItem, {
                  className: E.clipFormItem,
                  title: I.Z.Messages.CLIPS_EDIT_TITLE,
                  children: (0, n.jsx)(s.TextInput, {
                    onChange: (e) => {
                      "" === e ? w(void 0) : w(e);
                    },
                    value: y,
                    minLength: j.XH,
                    maxLength: j.MG,
                    placeholder: I.Z.Messages.CLIPS_UNTITLED,
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: E.clipFormSwitches,
                  children: [
                    (0, n.jsx)(s.FormSwitch, {
                      onChange: Z,
                      value: P,
                      hideBorder: !0,
                      children: I.Z.Messages.CLIPS_EDIT_GAME_AUDIO,
                    }),
                    (0, n.jsx)(s.FormSwitch, {
                      onChange: M,
                      value: R,
                      hideBorder: !0,
                      children: I.Z.Messages.CLIPS_EDIT_VOICE_CHANNEL_AUDIO,
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: r()(E.clipFormSection, E.metadataSection),
              children: [
                (0, n.jsx)(g.Z, { clip: t }),
                (0, n.jsx)(C.Z, { className: E.userList, clip: t }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: E.clipFormFooter,
              children: [
                (0, n.jsx)(s.Button, {
                  submitting: "share" === A,
                  disabled: null != A && "share" !== A,
                  color: s.Button.Colors.BRAND,
                  wrapperClassName: E.clipFormFooterButton,
                  onClick: () =>
                    D({
                      clip: { ...t, name: y },
                      cropData: k,
                      applicationAudioEnabled: P,
                      voiceAudioEnabled: R,
                      onShareComplete: () => {
                        o.Mr(j.Ut), o.Mr(j.Qr);
                      },
                    }),
                  children: I.Z.Messages.CLIPS_EDIT_SHARE_CLIP,
                }),
                (0, n.jsx)(s.Button, {
                  size: s.Button.Sizes.ICON,
                  className: E.clipFormFooterButton,
                  disabled: null != A,
                  wrapperClassName: r()(E.clipFormFooterButton, {
                    [E.submittingWrapperFix]: null != A,
                  }),
                  color: s.Button.Colors.PRIMARY,
                  onClick: N,
                  children: I.Z.Messages.SAVE_CHANGES,
                }),
                (0, n.jsx)(s.Button, {
                  "aria-label": I.Z.Messages.MORE_OPTIONS,
                  size: s.Button.Sizes.ICON,
                  wrapperClassName: r()(E.clipFormFooterButton, {
                    [E.submittingWrapperFix]: null != A,
                  }),
                  submitting: "export" === A,
                  disabled: null != A && "export" !== A,
                  color: s.Button.Colors.PRIMARY,
                  onClick: function (e) {
                    (0, u.jW)(e, async () => {
                      let { default: e } = await a
                        .e("32157")
                        .then(a.bind(a, 151090));
                      return (t) =>
                        (0, n.jsx)(e, {
                          ...t,
                          onExportToSoundboard: B,
                          onExportToFile: O,
                          onDelete: H,
                          channelId: i,
                        });
                    });
                  },
                  children: (0, n.jsx)(s.MoreHorizontalIcon, {
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
    22989: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return C;
          },
        }),
        a(47120),
        a(315314),
        a(610138),
        a(216116),
        a(78328),
        a(815648);
      var n = a(735250),
        l = a(470079),
        i = a(990547),
        r = a(481060),
        o = a(240872),
        s = a(579806),
        u = a(100527),
        d = a(906732),
        c = a(39604),
        m = a(212039),
        p = a(259612),
        v = a(572720),
        f = a(362693),
        b = a(674908),
        h = a(20437),
        x = a(689938),
        g = a(948061);
      function C(e) {
        var t, a, C, _, j, S, I, E;
        let { clip: T, channelId: y, transitionState: w, onClose: N } = e,
          [L, k] = l.useState(!0),
          [R, M] = l.useState(null),
          [P, Z] = l.useState(null),
          { analyticsLocations: A } = (0, d.ZP)(u.Z.CLIPS_EDITOR);
        l.useEffect(() => {
          (async function e() {
            let e;
            try {
              e = await s.Z.clips.loadClip(T.filepath);
            } catch {
              N(),
                o.Z.show({
                  title: x.Z.Messages.CLIPS_LOAD_ERROR_TITLE,
                  body: x.Z.Messages.CLIPS_LOAD_ERROR_BODY,
                });
              return;
            }
            let t = e.data.buffer,
              a = await (0, m.w)(t),
              n = URL.createObjectURL(new Blob([a], { type: "audio/mp4" })),
              l = URL.createObjectURL(
                new Blob([e.data], { type: "video/mp4" }),
              );
            Z(n), M(l);
          })();
        }, [T.filepath, N]),
          l.useEffect(
            () => () => {
              null != R && URL.revokeObjectURL(R);
            },
            [R],
          ),
          l.useEffect(
            () => () => {
              null != P && URL.revokeObjectURL(P);
            },
            [P],
          );
        let [F, D] = l.useState(
            null ===
              (j =
                null === (t = T.editMetadata) || void 0 === t
                  ? void 0
                  : t.voiceAudio) ||
              void 0 === j ||
              j,
          ),
          [B, O] = l.useState(
            null ===
              (S =
                null === (a = T.editMetadata) || void 0 === a
                  ? void 0
                  : a.applicationAudio) ||
              void 0 === S ||
              S,
          ),
          [H, U] = l.useState({
            start:
              null !==
                (I =
                  null === (C = T.editMetadata) || void 0 === C
                    ? void 0
                    : C.start) && void 0 !== I
                ? I
                : 0,
            end:
              null !==
                (E =
                  null === (_ = T.editMetadata) || void 0 === _
                    ? void 0
                    : _.end) && void 0 !== E
                ? E
                : 0,
          }),
          [z, W] = l.useState(T.name),
          V = l.useRef({
            name: z,
            editMetadata: {
              start: H.start,
              end: H.end,
              voiceAudio: F,
              applicationAudio: B,
            },
          });
        V.current = {
          name: z,
          editMetadata: {
            start: H.start,
            end: H.end,
            voiceAudio: F,
            applicationAudio: B,
          },
        };
        let G = (0, v.l)(T);
        l.useEffect(() => {
          async function e() {
            let e = {};
            null != G &&
              (e = {
                thumbnail: await (0, p.R)(G, V.current.editMetadata.start),
              }),
              (0, c.Tm)(T.id, { ...V.current, ...e });
          }
          return () => {
            e();
          };
        }, [T.id, G]);
        let K = l.useRef(null),
          Y = l.useMemo(
            () => ({
              videoPlayerRef: K,
              applicationAudioEnabled: B,
              setApplicationAudioEnabled: O,
              voiceAudioEnabled: F,
              setVoiceAudioEnabled: D,
              cropData: H,
              setCropData: U,
            }),
            [B, F, H],
          );
        return (0, n.jsx)(r.ModalRoot, {
          impression: { impressionName: i.ImpressionNames.CLIP_EDITOR_VIEWED },
          size: r.ModalSize.DYNAMIC,
          className: g.modalRoot,
          transitionState: w,
          children: (0, n.jsx)(d.Gt, {
            value: A,
            children: (0, n.jsx)(r.ModalContent, {
              className: g.modalContent,
              children: (0, n.jsx)(h.Q.Provider, {
                value: Y,
                children:
                  null == R || null == P
                    ? (0, n.jsx)("div", {
                        className: g.spinnerContainer,
                        children: (0, n.jsx)(r.Spinner, {}),
                      })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(f.Z, {
                            videoURL: R,
                            isLoading: L,
                            onDoneLoading: () => k(!1),
                            audioURL: P,
                            transitionState: w,
                          }),
                          !L &&
                            (0, n.jsx)(b.Z, {
                              channelId: y,
                              onSetClipName: W,
                              clipName: z,
                              clip: T,
                              onClose: N,
                            }),
                        ],
                      }),
              }),
            }),
          }),
        });
      }
    },
    673462: function (e, t, a) {
      a(47120), a(653041);
      var n = a(735250),
        l = a(470079),
        i = a(392711),
        r = a(98650),
        o = a(70097),
        s = a(948061);
      function u(e) {
        let { setRef: t, audioTrackLabel: a, src: i, muted: r } = e,
          o = l.useCallback(
            (e) => {
              t(e, a);
            },
            [t, a],
          ),
          u = l.useCallback(
            (e) => {
              Object.values(e.currentTarget.audioTracks).forEach((e) => {
                e.enabled = a === e.label;
              });
            },
            [a],
          );
        return (0, n.jsx)("audio", {
          id: "ClipsPlayerAudioTrack:".concat(a),
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
            src: a,
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
          C = l.useRef(!1),
          _ = l.useCallback(() => {
            let e = h.current.main;
            if (null == e) return;
            let t = (0, i.round)(e.currentTime, 3),
              a = (0, i.round)(f, 3);
            if (
              t >=
                (null != b
                  ? (0, i.round)(b, 3)
                  : (0, i.round)(e.duration, 3)) ||
              t < a
            ) {
              for (let e of Object.values(h.current))
                null != e && (e.currentTime = f);
              return !0;
            }
          }, [f, b]);
        (0, r.Z)(() => {
          C.current && _() && j();
        });
        let j = l.useCallback(() => {
            for (let e of ((C.current = !0), _(), Object.values(h.current)))
              null != e && e.play();
          }, [_]),
          S = l.useCallback(() => {
            for (let e of Object.values(h.current)) null != e && e.pause();
          }, []),
          I = l.useCallback((e) => {
            var t;
            for (let a of ((null === (t = h.current.main) || void 0 === t
              ? void 0
              : t.paused) && (C.current = !1),
            Object.values(h.current)))
              null != a && (a.currentTime = e);
          }, []),
          E = l.useCallback(() => {
            var e;
            (null === (e = h.current.main) || void 0 === e ? void 0 : e.paused)
              ? j()
              : S();
          }, [j, S]),
          T = l.useCallback((e) => {
            h.current.main = e;
          }, []),
          y = l.useCallback((e) => {
            let t = [];
            for (let a of Object.values(e.currentTarget.audioTracks))
              a.label.includes(":application")
                ? (a.enabled = !0)
                : a.label.includes(":voice")
                  ? ((a.enabled = !1), !t.includes(a.label) && t.push(a.label))
                  : (a.enabled = !1);
            g(t);
          }, []),
          w = l.useCallback((e, t) => {
            h.current[t] = e;
          }, []);
        return (l.useImperativeHandle(t, () => ({
          play: j,
          seek: I,
          pause: S,
          videoElement: h.current.main,
        })),
        null == a)
          ? null
          : (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(o.Z, {
                  onClick: E,
                  className: p ? s.hidden : s.displayVideo,
                  ref: T,
                  src: a,
                  muted: !0,
                  onLoadedData: v,
                  preload: "auto",
                }),
                (0, n.jsx)("audio", {
                  id: "ClipsPlayerAudioTrack:application",
                  src: d,
                  muted: !c,
                  preload: "auto",
                  className: s.hidden,
                  ref: (e) => w(e, "application"),
                  onLoadedMetadata: y,
                }),
                x.map((e) =>
                  (0, n.jsx)(
                    u,
                    { audioTrackLabel: e, setRef: w, src: d, muted: !m },
                    e,
                  ),
                ),
              ],
            });
      });
    },
    826078: function (e, t, a) {
      a(47120);
      var n = a(735250),
        l = a(470079),
        i = a(120356),
        r = a.n(i),
        o = a(392711),
        s = a(399606),
        u = a(84735),
        d = a(481060),
        c = a(393238),
        m = a(98650),
        p = a(70097),
        v = a(451478),
        f = a(917042),
        b = a(20437),
        h = a(356659),
        x = a(689938),
        g = a(419561);
      function C(e) {
        ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
        let t = Math.floor(e / 60),
          a = Math.floor(e % 60),
          n = Math.floor((e % 1) * 100);
        return (
          (t = t < 10 ? "0" + t : t),
          (a = a < 10 ? "0" + a : a),
          (n = n < 10 ? "0" + n : n),
          "".concat(t, ":").concat(a, ".").concat(n)
        );
      }
      function _(e) {
        let t = Math.floor(e / 60),
          a = x.Z.Messages.DURATION_MINUTES.format({ minutes: t }),
          n = x.Z.Messages.DURATION_SECONDS.format({ seconds: e % 60 });
        return "".concat(a, " ").concat(n);
      }
      t.Z = function (e) {
        var t, a, i, j, S, I;
        let { sourceURL: E } = e,
          { videoPlayerRef: T, cropData: y, setCropData: w } = (0, b.S)(),
          [N, L] = l.useState(
            ((I = !(null === (a = T.current) || void 0 === a
              ? void 0
              : null === (t = a.videoElement) || void 0 === t
                ? void 0
                : t.paused)),
            I),
          ),
          k = l.useRef(null),
          [R, M] = l.useState(null),
          [P, Z] = l.useState(),
          A = l.useRef(null),
          F = l.useRef(null),
          [D, B] = l.useState(0),
          [O, H] = l.useState(!1),
          [U, z] = l.useState(null);
        (0, m.Z)(() => {
          var e;
          let t =
            null === (e = T.current) || void 0 === e ? void 0 : e.videoElement;
          null != t && D !== t.currentTime && B(t.currentTime);
        });
        let W = l.useMemo(() => y.end - y.start, [y]);
        l.useEffect(() => {
          var e;
          let t =
              null === (e = T.current) || void 0 === e
                ? void 0
                : e.videoElement,
            a = A.current,
            n = F.current;
          if (null == t || null == a || null == n) return;
          let l = (0, o.debounce)(L, h.HW),
            i = () => {
              M(null), H(!1), l.cancel(), l(!0);
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
        }, [T]);
        let { ref: V, width: G = 0, height: K = 0 } = (0, c.Z)(),
          Y = (0, s.e7)([v.Z], () => v.Z.windowSize());
        l.useMemo(() => {
          let e = V.current;
          null != e && z(e.getBoundingClientRect());
        }, [Y.width, Y.height, G]);
        let Q = l.useRef(null),
          X = l.useRef({}),
          q = l.useCallback(
            (e) => {
              var t;
              let a = (0, o.clamp)(e, 0, y.end - h.Hp);
              w({ ...y, start: a }),
                null === (t = T.current) || void 0 === t || t.seek(a);
            },
            [y, w, T],
          ),
          $ = l.useCallback(
            (e) => {
              var t, a;
              let n =
                null === (t = T.current) || void 0 === t
                  ? void 0
                  : t.videoElement;
              if (null == n) return;
              let l = (0, o.clamp)(e, y.start + h.Hp, n.duration);
              w({ ...y, end: l }),
                null === (a = T.current) || void 0 === a || a.seek(l);
            },
            [y, w, T],
          ),
          J = l.useCallback(
            (e, t) => {
              var a, n;
              if (null == P) return;
              if (null == U) return null;
              let l =
                  (((0, o.clamp)(e, U.left, U.right) - U.left) / U.width) * P,
                i = (0, o.clamp)(l, 0, P),
                r = R;
              if (
                (null == r &&
                  t &&
                  ((r =
                    i <= y.start ? "start" : i >= y.end ? "end" : "playhead"),
                  null === (a = T.current) || void 0 === a || a.pause(),
                  M(r),
                  H(N)),
                "start" === r)
              )
                q(i);
              else if ("end" === r) $(i);
              else if ("playhead" === r) {
                let e = (0, o.clamp)(i, y.start, y.end);
                null === (n = T.current) || void 0 === n || n.seek(e);
              }
            },
            [P, U, R, y.start, y.end, T, N, q, $],
          ),
          ee = l.useCallback(
            (e) => {
              var t;
              let a =
                null === (t = T.current) || void 0 === t
                  ? void 0
                  : t.videoElement;
              if (null == a) return;
              let n = (0, f.Z)(a.duration, e.shiftKey),
                l = !1;
              switch (e.key) {
                case "ArrowLeft":
                  (l = !0), q(y.start - n);
                  break;
                case "ArrowRight":
                  (l = !0), q(y.start + n);
              }
              l && (e.stopPropagation(), e.preventDefault());
            },
            [T, q, y.start],
          ),
          et = l.useCallback(
            (e) => {
              var t;
              let a =
                null === (t = T.current) || void 0 === t
                  ? void 0
                  : t.videoElement;
              if (null == a) return;
              let n = (0, f.Z)(a.duration, e.shiftKey),
                l = !1;
              switch (e.key) {
                case "ArrowLeft":
                  (l = !0), $(y.end - n);
                  break;
                case "ArrowRight":
                  (l = !0), $(y.end + n);
              }
              l && (e.stopPropagation(), e.preventDefault());
            },
            [T, $, y.end],
          ),
          ea = l.useCallback(
            (e) => {
              J(e.clientX, !0);
            },
            [J],
          ),
          en = l.useCallback(
            (e) => {
              J(e.clientX, !1);
            },
            [J],
          ),
          el = l.useCallback(() => {
            if (O) {
              var e;
              null === (e = T.current) || void 0 === e || e.play();
            }
            H(!1), M(null);
          }, [T, O]);
        l.useEffect(
          () => (
            document.addEventListener("mousemove", en),
            document.addEventListener("mouseup", el),
            () => {
              document.removeEventListener("mousemove", en),
                document.removeEventListener("mouseup", el);
            }
          ),
          [en, el],
        ),
          l.useEffect(() => {
            (async function e() {
              var e;
              let t = V.current,
                a = k.current;
              if (null == t || null == a || null == P) return;
              (t.height = K), (t.width = G);
              let n = t.getContext("2d");
              if (null == n) return;
              (n.fillStyle = "#000"), n.fillRect(0, 0, G, K);
              let l = Math.ceil(K * (a.videoWidth / a.videoHeight)),
                i = Math.ceil(G / l),
                r = Q.current;
              if (null == r) return;
              (r.width = l), (r.height = K);
              let o =
                null == r
                  ? void 0
                  : r.getContext("2d", { willReadFrequently: !0 });
              if (null == o) return;
              let s = X.current;
              if (
                (null === (e = s[i]) || void 0 === e ? void 0 : e.length) === i
              ) {
                for (let e = 0; e < i; e++) n.putImageData(s[i][e], l * e, 0);
                return;
              }
              for (let e = 0; e < i; e++)
                await new Promise((t) => {
                  (a.onseeked = () => {
                    n.drawImage(a, l * e, 0, l, K), o.drawImage(a, 0, 0, l, K);
                    let r = o.getImageData(0, 0, l, K);
                    null == s[i] && (s[i] = []), (s[i][e] = r), t();
                  }),
                    (a.currentTime = (l / G) * P * e);
                });
            })();
          }, [G, K, V, P, Q]);
        let ei = D - y.start,
          er =
            null === (i = T.current) || void 0 === i ? void 0 : i.videoElement;
        return (0, n.jsx)("div", {
          className: g.centeringWrapper,
          children: (0, n.jsxs)("div", {
            className: g.timelineContainer,
            children: [
              (0, n.jsx)("div", {
                className: g.playPauseButtonWrapper,
                children: (0, n.jsx)(d.Clickable, {
                  tabIndex: 0,
                  onClick: () => {
                    var e, t;
                    return N
                      ? null === (e = T.current) || void 0 === e
                        ? void 0
                        : e.pause()
                      : null === (t = T.current) || void 0 === t
                        ? void 0
                        : t.play();
                  },
                  className: g.playPauseButton,
                  children: N
                    ? (0, n.jsx)(d.PauseIcon, {
                        size: "md",
                        color: "currentColor",
                        className: g.playPauseIcon,
                      })
                    : (0, n.jsx)(d.PlayIcon, {
                        size: "md",
                        color: "currentColor",
                        className: g.playPauseIcon,
                      }),
                }),
              }),
              (0, n.jsxs)("div", {
                className: r()(g.timeline, { [g.timelineDragging]: null != R }),
                onMouseDown: ea,
                children: [
                  (0, n.jsx)("canvas", { className: g.hiddenCanvas, ref: Q }),
                  (0, n.jsx)("canvas", {
                    className: g.timelineBackground,
                    ref: V,
                  }),
                  (0, n.jsx)(u.t, {
                    children: (0, n.jsx)("div", {
                      tabIndex: 0,
                      ref: A,
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
                  (0, n.jsx)(p.Z, {
                    preload: "auto",
                    onLoadedMetadata: function () {
                      let e = k.current;
                      if (null != e) {
                        if (
                          (Z(e.duration),
                          0 === y.start &&
                            (0 === y.end || y.end === e.duration))
                        ) {
                          var t;
                          null === (t = T.current) ||
                            void 0 === t ||
                            t.seek(e.duration / 2),
                            B(e.duration / 2);
                        }
                        0 === y.end && w((t) => ({ ...t, end: e.duration }));
                      }
                    },
                    className: g.timelineVideo,
                    ref: k,
                    src: E,
                    muted: !0,
                  }),
                  (0, n.jsxs)("div", {
                    className: g.dragBox,
                    style: {
                      left:
                        null != P ? "".concat((y.start / P) * 100, "%") : "0",
                      right:
                        null != P
                          ? "".concat(((P - y.end) / P) * 100, "%")
                          : "0",
                    },
                    children: [
                      (0, n.jsx)("div", {
                        className: g.timePillContainer,
                        children: (0, n.jsx)("div", {
                          ref: F,
                          className: g.timePillBackground,
                          children: (0, n.jsxs)(d.Text, {
                            variant: "text-sm/normal",
                            className: g.timePillText,
                            color: "always-white",
                            children: [
                              C(ei),
                              (0, n.jsx)("span", {
                                className: g.slashCharacter,
                                children: " / ",
                              }),
                              C(W),
                            ],
                          }),
                        }),
                      }),
                      (0, n.jsx)(u.t, {
                        children: (0, n.jsx)("button", {
                          className: r()(g.dragHandleLeft, {
                            [g.dragging]: "start" === R,
                          }),
                          onMouseDown: ea,
                          onKeyDown: ee,
                          role: "slider",
                          tabIndex: 0,
                          "aria-valuemin": 0,
                          "aria-valuenow": y.start,
                          "aria-valuetext": _(y.start),
                          "aria-valuemax": y.end - h.Hp,
                          "aria-label": x.Z.Messages.CLIPS_CROP_START,
                          children: (0, n.jsx)("div", {
                            className: g.cropLeftArrow,
                          }),
                        }),
                      }),
                      (0, n.jsx)(u.t, {
                        children: (0, n.jsx)("button", {
                          className: r()(g.dragHandleRight, {
                            [g.dragging]: "end" === R,
                          }),
                          onMouseDown: ea,
                          onKeyDown: et,
                          role: "slider",
                          tabIndex: 0,
                          "aria-valuemin": y.start + h.Hp,
                          "aria-valuenow": y.end,
                          "aria-valuetext": _(y.end),
                          "aria-valuemax":
                            null === (S = T.current) || void 0 === S
                              ? void 0
                              : null === (j = S.videoElement) || void 0 === j
                                ? void 0
                                : j.duration,
                          "aria-label": x.Z.Messages.CLIPS_CROP_END,
                          children: (0, n.jsx)("div", {
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
    445229: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return b;
        },
      });
      var n = a(735250),
        l = a(470079),
        i = a(120356),
        r = a.n(i),
        o = a(442837),
        s = a(481060),
        u = a(99690),
        d = a(594174),
        c = a(823379),
        m = a(5192),
        p = a(689938),
        v = a(630265);
      function f(e) {
        let { user: t } = e,
          a = m.ZP.useName(null, null, t);
        return (0, n.jsxs)("div", {
          className: v.userItem,
          children: [
            (0, n.jsx)(u.Z, { user: t }),
            (0, n.jsx)(s.Text, {
              color: "header-primary",
              variant: "text-sm/medium",
              children: a,
            }),
          ],
        });
      }
      function b(e) {
        let { clip: t, className: a } = e,
          i = (0, o.Wu)([d.default], () =>
            t.users.map(d.default.getUser).filter(c.lm),
          ),
          u = l.useCallback(
            (e) => {
              let { row: t } = e,
                a = i[t];
              return null == a ? null : (0, n.jsx)(f, { user: a }, t);
            },
            [i],
          );
        return (0, n.jsxs)("div", {
          className: r()(a, v.root),
          children: [
            (0, n.jsx)("div", {
              className: v.__invalid_header,
              children: (0, n.jsxs)(s.FormTitle, {
                className: v.title,
                children: [
                  p.Z.Messages.CLIPS_EDIT_USER_LIST_TITLE,
                  (0, n.jsxs)("div", {
                    className: v.userCountPill,
                    children: [
                      (0, n.jsx)(s.Text, {
                        color: "text-normal",
                        variant: "text-xs/medium",
                        children: i.length,
                      }),
                      (0, n.jsx)(s.FriendsIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: v.userCountIcon,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, n.jsx)(s.List, {
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
    917042: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = a(356659);
      function l(e, t) {
        let a = e / n.ji;
        return t && (a /= n.i$), a;
      }
    },
    20437: function (e, t, a) {
      a.d(t, {
        Q: function () {
          return l;
        },
        S: function () {
          return i;
        },
      });
      var n = a(470079);
      let l = n.createContext({
        videoPlayerRef: { current: null },
        applicationAudioEnabled: !0,
        setApplicationAudioEnabled: () => {},
        voiceAudioEnabled: !0,
        setVoiceAudioEnabled: () => {},
        cropData: { start: 0, end: 0 },
        setCropData: () => {},
      });
      function i() {
        return n.useContext(l);
      }
    },
    755732: function (e, t, a) {
      e.exports = {
        root: "root_a1f5c2",
        nameSection: "nameSection_a1f5c2",
        name: "name_a1f5c2",
        timeContainer: "timeContainer_a1f5c2",
        timeTitle: "timeTitle_a1f5c2",
      };
    },
    804553: function (e, t, a) {
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
    948061: function (e, t, a) {
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
    419561: function (e, t, a) {
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
    630265: function (e, t, a) {
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
//# sourceMappingURL=9621f23d0d1d0efd8412.js.map
