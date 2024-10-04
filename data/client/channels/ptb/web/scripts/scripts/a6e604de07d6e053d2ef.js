"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68638"],
  {
    945778: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n(735250);
      n(470079);
      var a = n(238246),
        i = n(153731),
        o = n(689938);
      function s(e) {
        let { windowKey: t } = e;
        return (0, r.jsx)(a.Z, {
          withTitleBar: !0,
          windowKey: t,
          title: o.Z.Messages.RTC_DEBUG_POPOUT_WINDOW_TITLE,
          children: (0, r.jsx)(i.Z, {}),
        });
      }
    },
    153731: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j;
        },
      }),
        n(653041),
        n(47120),
        n(390547),
        n(733860);
      var r = n(735250),
        a = n(470079),
        i = n(392711),
        o = n.n(i),
        s = n(442837),
        l = n(481060),
        c = n(304680),
        d = n(503089),
        u = n(493544),
        m = n(600164),
        p = n(210887),
        h = n(592125),
        g = n(271383),
        f = n(19780),
        C = n(226961),
        y = n(594174),
        D = n(51144),
        S = n(189648),
        R = n(775194),
        v = n(499848),
        b = n(724392),
        E = n(442580),
        Z = n(770800),
        F = n(981631),
        P = n(65154),
        x = n(689938),
        T = n(701491);
      let _ = (e, t, n) =>
          (0, r.jsx)(m.Z, {
            align: m.Z.Align.CENTER,
            children: (0, r.jsx)(m.Z.Child, {
              children: (0, r.jsxs)(m.Z, {
                align: m.Z.Align.CENTER,
                children: [
                  (0, r.jsx)(l.Avatar, {
                    size: l.AvatarSizes.SIZE_24,
                    src: e.getAvatarURL(n, 24),
                    "aria-label": e.username,
                    className: T.avatar,
                  }),
                  (0, r.jsx)("span", {
                    className: T.username,
                    children: null != t ? t : D.ZP.getName(e),
                  }),
                ],
              }),
            }),
          }),
        N = (e) =>
          (0, r.jsx)(m.Z, {
            align: m.Z.Align.CENTER,
            children: (0, r.jsx)(m.Z.Child, {
              children: (0, r.jsx)(m.Z, {
                align: m.Z.Align.CENTER,
                children: (0, r.jsx)("span", {
                  className: T.username,
                  children: e,
                }),
              }),
            }),
          });
      function I(e, t, n, r, a) {
        let i = [];
        if (null == t) return i;
        let {
          transport: s,
          rtp: { inbound: l, outbound: d },
          camera: m,
        } = t;
        if (
          (i.push({
            section: u.ID.HEADER,
            label: x.Z.Messages.RTC_DEBUG_CONTEXT.format({ context: e }),
          }),
          null != s &&
            i.push({
              section: (0, C.J$)(e, F._s_.TRANSPORT, n),
              label: x.Z.Messages.RTC_DEBUG_TRANSPORT,
              element: Z.Z,
              elementProps: { context: e, index: n },
            }),
          null != d &&
            i.push({
              section: (0, C.J$)(e, F._s_.OUTBOUND, n),
              label: x.Z.Messages.RTC_DEBUG_RTP_OUTBOUND,
              element: b.Z,
              elementProps: { context: e, index: n },
            }),
          null != m &&
            i.push({
              section: (0, C.J$)(e, F._s_.CAMERA, n),
              label: x.Z.Messages.RTC_DEBUG_CAMERA,
              element: S.Z,
              elementProps: { context: e, index: n, camera: m },
            }),
          null != l && !o().isEmpty(l))
        ) {
          let t = [];
          Object.keys(l).forEach((i) => {
            let o = y.default.getUser(i),
              s = g.ZP.getNick(a, i),
              d = (0, C.J$)(e, i, n);
            null != l[i] &&
              l[i].length > 0 &&
              t.push({
                section: d,
                label: null != o ? _(o, s, a) : N(null != s ? s : i),
                ariaLabel: null != o ? o.tag : i,
                onClick: () => {
                  c.zc(d);
                },
                element: v.Z,
                elementProps: { context: e, index: n, videoStreams: r },
              });
          }),
            t.length > 0 &&
              (i.push({
                section: u.ID.HEADER,
                label: x.Z.Messages.RTC_DEBUG_RTP_INBOUND,
              }),
              i.push(...t));
        }
        return i;
      }
      function j() {
        var e, t;
        let { defaultStats: n, streamStats: i } = (0, s.e7)(
            [C.ZP],
            () => ({
              defaultStats: C.ZP.getAllStats(P.Yn.DEFAULT),
              streamStats: C.ZP.getAllStats(P.Yn.STREAM),
            }),
            [],
            s.pF,
          ),
          o = (0, s.e7)([f.Z, h.Z], () => h.Z.getChannel(f.Z.getChannelId())),
          m =
            null === (e = n.concat(i).find((e) => null != e.screenshare)) ||
            void 0 === e
              ? void 0
              : e.screenshare,
          g =
            null === (t = i.find((e) => null != e.clips)) || void 0 === t
              ? void 0
              : t.clips,
          y = (0, s.e7)([p.Z], () => p.Z.theme),
          D = (0, s.e7)([p.Z], () => (p.Z.darkSidebar ? F.BRd.DARK : void 0)),
          S = (0, s.e7)([C.ZP], () => C.ZP.getSection()),
          v = (0, s.e7)([C.ZP], () => C.ZP.getVideoStreams()),
          b = (function (e) {
            let {
                defaultStats: t,
                streamStats: n,
                videoStreams: a,
                screenshare: i,
                clips: o,
                channel: s,
                connectionState: c,
              } = e,
              d = t.flatMap((e, t) =>
                I(P.Yn.DEFAULT, e, t, a, null == s ? void 0 : s.getGuildId()),
              ),
              m = n.flatMap((e, t) =>
                I(P.Yn.STREAM, e, t, a, null == s ? void 0 : s.getGuildId()),
              ),
              p = [],
              h = [],
              g = { section: u.ID.DIVIDER };
            null != i &&
              (p.push(g),
              p.push({
                section: F._s_.SCREENSHARE,
                label: x.Z.Messages.RTC_DEBUG_SCREENSHARE,
                element: E.Z,
                elementProps: { screenshare: i },
              })),
              null != o &&
                (h.push(g),
                h.push({
                  section: F._s_.CLIPS,
                  label: x.Z.Messages.RTC_DEBUG_CLIPS,
                  element: R.Z,
                  elementProps: { clips: o },
                })),
              m.length > 0 && m.unshift(g);
            let f =
              null != s
                ? [
                    {
                      section: u.ID.CUSTOM,
                      label: "Channel Name",
                      element: () =>
                        (0, r.jsx)(l.Heading, {
                          className: T.channelName,
                          variant: "heading-lg/semibold",
                          children: s.name,
                        }),
                    },
                  ]
                : [];
            return [
              ...f,
              {
                section: u.ID.CUSTOM,
                label: "Connection State",
                element: () =>
                  (0, r.jsx)(l.Heading, {
                    className: T.channelName,
                    variant: "heading-md/normal",
                    children:
                      c === F.hes.RTC_CONNECTED ? "Connected" : "Disconnected",
                  }),
              },
              ...d,
              ...m,
              ...p,
              ...h,
            ];
          })({
            defaultStats: n,
            streamStats: i,
            videoStreams: v,
            screenshare: m,
            clips: g,
            channel: o,
            connectionState: (0, s.e7)([f.Z], () => f.Z.getState()),
          });
        return (
          a.useEffect(
            () => () => {
              c.xv();
            },
            [],
          ),
          (0, r.jsx)(d.ZP, {
            theme: y,
            sidebarTheme: D,
            section: S,
            onSetSection: c.zc,
            sections: b,
          })
        );
      }
    },
    189648: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(392711),
        i = n.n(a),
        o = n(481060),
        s = n(481250),
        l = n(513547),
        c = n(689938);
      function d(e) {
        let { camera: t } = e;
        if (null == t)
          return (0, r.jsx)(o.Spinner, {
            type: o.Spinner.Type.SPINNING_CIRCLE,
          });
        let n = i().map(t, (e, t) => {
          if (!(l.al[t] || void 0 === e))
            return (0, r.jsx)(l.ck, { label: t, value: e }, t);
        });
        return (0, r.jsx)(o.FormSection, {
          tag: o.FormTitleTags.H2,
          title: c.Z.Messages.RTC_DEBUG_CAMERA,
          children: (0, s.a)(n),
        });
      }
    },
    775194: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      }),
        n(653041),
        n(47120);
      var r = n(735250);
      n(470079);
      var a = n(392711),
        i = n.n(a),
        o = n(481060),
        s = n(481250),
        l = n(513547),
        c = n(689938),
        d = n(701491),
        u = n(113207);
      let m = {
        userId: 1,
        dataType: 2,
        savedKB: 3,
        numFrames: 4,
        startTimestampMs: 5,
        endTimestampMs: 6,
        width: 7,
        height: 8,
        audioChannels: 9,
        sampleRate: 10,
      };
      function p(e) {
        let { clips: t } = e;
        if (null == t)
          return (0, r.jsx)(o.Spinner, {
            type: o.Spinner.Type.SPINNING_CIRCLE,
          });
        let n = i().map(t, (e, t) => {
          if (void 0 !== e && "buffers" !== t)
            return (0, r.jsx)(l.ck, { label: t, value: e }, t);
        });
        return (
          n.push(
            (0, r.jsx)(
              l.ck,
              {
                label: "Frames Per Second",
                value: t.recentEncodedFrames / (t.recentDurationMs / 1e3),
              },
              "framerate",
            ),
          ),
          (0, r.jsxs)(o.FormSection, {
            tag: o.FormTitleTags.H2,
            title: c.Z.Messages.RTC_DEBUG_CLIPS,
            children: [
              (0, s.a)(n),
              (function (e) {
                if (null != e.buffers)
                  return e.buffers.map((e) => {
                    let t = [];
                    for (let n of Object.keys(e).sort((e, t) => {
                      let n = m[e],
                        r = m[t];
                      if (n !== r)
                        return void 0 === n ? 1 : void 0 === r ? -1 : n - r;
                      return e > t ? 1 : -1;
                    })) {
                      let a = e[n];
                      if (null !== a && "key" !== n)
                        t.push((0, r.jsx)(l.ck, { label: n, value: a }, n));
                    }
                    return (0, r.jsx)(
                      o.FormSection,
                      {
                        className: u.marginBottom40,
                        title: "Buffer: ".concat(e.key),
                        titleClassName: d.title,
                        children: (0, s.a)(t),
                      },
                      "Buffer: ".concat(e.key),
                    );
                  });
              })(t),
            ],
          })
        );
      }
    },
    481250: function (e, t, n) {
      n.d(t, {
        V: function () {
          return S;
        },
        a: function () {
          return y;
        },
      }),
        n(653041),
        n(47120);
      var r = n(735250);
      n(470079);
      var a = n(120356),
        i = n.n(a),
        o = n(481060),
        s = n(304680),
        l = n(763520),
        c = n(600164),
        d = n(352978),
        u = n(131951),
        m = n(226961),
        p = n(513547),
        h = n(65154),
        g = n(701491),
        f = n(113207);
      let C = {
        [h.Z.NO_OVERRIDE]: "None",
        [h.Z.LOW]: "Low Quality Stream",
        [h.Z.HIGH]: "High Quality Stream",
      };
      function y(e) {
        let t = [],
          n = 0;
        for (
          e.length % 2 != 0 &&
          e.push((0, r.jsx)(c.Z, { basis: "50%", grow: 0 }, n++));
          e.length > 0;

        )
          t.push(
            (0, r.jsx)(
              c.Z,
              { basis: "50%", grow: 0, children: e.splice(0, 2) },
              n++,
            ),
          );
        return t;
      }
      let D = { ssrc: 1, codec: 2 };
      function S(e, t, n, a, S) {
        return e.map((R, v) => {
          var b, E;
          let Z = [];
          for (let e of Object.keys(R).sort((e, t) => {
            let n = D[e],
              r = D[t];
            if (n !== r) return void 0 === n ? 1 : void 0 === r ? -1 : n - r;
            return m.Pz[e] !== m.Pz[t] ? (m.Pz[e] ? 1 : -1) : e > t ? 1 : -1;
          })) {
            let t = R[e];
            if (!p.al[e] && void 0 !== t)
              Z.push((0, r.jsx)(p.ck, { section: a, label: e, value: t }, e));
          }
          return (0, r.jsxs)(
            o.FormSection,
            {
              className: f.marginBottom40,
              title: R.type,
              titleClassName: g.sectionHeader,
              children: [
                "video" === R.type &&
                  null != n &&
                  null != a &&
                  null != S &&
                  (function (e, t, n, a) {
                    let o = a.get(t, n, e.ssrc);
                    return null != o
                      ? (0, r.jsx)("div", {
                          className: i()(g.videoWrapper, f.marginBottom40),
                          children: (0, r.jsx)(d.Z, {
                            streamId: o,
                            videoComponent: u.Z.getMediaEngine().Video,
                            paused: !1,
                            videoSpinnerContext: l.m.REPLAY_VIDEO_STREAM,
                            userId: n,
                          }),
                        })
                      : null;
                  })(R, n, a, S),
                y(Z),
                "video" === R.type &&
                  v === e.length - 1 &&
                  null != n &&
                  null != a &&
                  null != S &&
                  ((b = a),
                  (E = t),
                  (0, r.jsx)(c.Z, {
                    className: f.marginBottom20,
                    children: (0, r.jsxs)(c.Z.Child, {
                      basis: "100%",
                      children: [
                        (0, r.jsx)(o.FormTitle, {
                          tag: o.FormTitleTags.H5,
                          className: f.marginBottom8,
                          children: "Simulcast Override",
                        }),
                        (0, r.jsx)(o.SingleSelect, {
                          value: m.ZP.getSimulcastDebugOverride(b, E),
                          onChange: (e) => {
                            s.MS(b, E, e);
                          },
                          options: Object.values(h.Z).map((e) => ({
                            value: e,
                            label: C[e],
                          })),
                        }),
                      ],
                    }),
                  })),
              ],
            },
            "".concat(R.type, " + ").concat(R.ssrc),
          );
        });
      }
    },
    499848: function (e, t, n) {
      n(411104);
      var r = n(735250),
        a = n(470079),
        i = n(442837),
        o = n(481060),
        s = n(271383),
        l = n(19780),
        c = n(226961),
        d = n(594174),
        u = n(51144),
        m = n(481250),
        p = n(689938);
      class h extends a.PureComponent {
        render() {
          let {
            streams: e,
            context: t,
            userId: n,
            mediaEngineConnectionId: a,
            videoStreams: i,
          } = this.props;
          if (null == n || null == e || 0 === e.length)
            return (0, r.jsx)(o.Spinner, {
              type: o.Spinner.Type.SPINNING_CIRCLE,
            });
          let c = l.Z.getGuildId(),
            h = d.default.getUser(n),
            g = s.ZP.getNick(c, n),
            f =
              null == h
                ? p.Z.Messages.RTC_DEBUG_RTP_INBOUND
                : ""
                    .concat(p.Z.Messages.RTC_DEBUG_RTP_INBOUND, " — ")
                    .concat(null != g ? g : u.ZP.getName(h));
          return (0, r.jsx)(o.FormSection, {
            tag: o.FormTitleTags.H2,
            title: f,
            children: (0, m.V)(e, t, a, n, i),
          });
        }
      }
      t.Z = i.ZP.connectStores([c.ZP], (e) => {
        let { context: t, index: n, videoStreams: r } = e,
          a = c.ZP.getAllStats(t)[n],
          { section: i } = (0, c.fZ)(c.ZP.getSection());
        if (null == i) throw Error("Unrecognized section format");
        let o = null;
        if (null != a && null != a.rtp.inbound) {
          var s;
          o = null !== (s = a.rtp.inbound[i]) && void 0 !== s ? s : [];
        }
        return {
          mediaEngineConnectionId:
            null == a ? void 0 : a.mediaEngineConnectionId,
          userId: i,
          streams: o,
          videoStreams: r,
        };
      })(h);
    },
    206314: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var r = n(735250),
        a = n(470079),
        i = n(120356),
        o = n.n(i),
        s = n(692547),
        l = n(481060),
        c = n(600164),
        d = n(4912),
        u = n(701491);
      let m = ["firCount", "nackCount"];
      class p extends a.PureComponent {
        renderValueIcon() {
          let { label: e } = this.props;
          return m.includes(e)
            ? (0, r.jsx)(d.Z, {
                color: s.Z.unsafe_rawColors.YELLOW_300.css,
                className: u.valueIcon,
              })
            : null;
        }
        render() {
          let {
            children: e,
            className: t,
            valueRendered: n,
            section: a,
            label: i,
            renderGraph: s,
          } = this.props;
          return (0, r.jsxs)(c.Z, {
            className: o()(u.item, t),
            direction: c.Z.Direction.VERTICAL,
            basis: "50%",
            children: [
              (0, r.jsxs)(c.Z, {
                className: u.kvContainer,
                align: c.Z.Align.START,
                children: [
                  (0, r.jsx)(c.Z.Child, {
                    children: (0, r.jsx)(l.H, {
                      className: u.title,
                      children: e,
                    }),
                  }),
                  Array.isArray(n)
                    ? (0, r.jsx)(c.Z.Child, { grow: 1, children: n })
                    : (0, r.jsxs)(c.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: [
                          this.renderValueIcon(),
                          (0, r.jsx)("span", {
                            className: u.itemValue,
                            title: n,
                            children: n,
                          }),
                        ],
                      }),
                ],
              }),
              null !== s &&
                (0, r.jsx)(
                  c.Z.Child,
                  {
                    className: u.graph,
                    children: (0, r.jsx)(l.FormText, {
                      type: l.FormTextTypes.DESCRIPTION,
                      children: s,
                    }),
                  },
                  null != a ? "".concat(a, "-").concat(i) : i,
                ),
              (0, r.jsx)(l.FormDivider, { className: u.divider }),
            ],
          });
        }
      }
    },
    513547: function (e, t, n) {
      n.d(t, {
        al: function () {
          return D;
        },
        ck: function () {
          return b;
        },
      }),
        n(47120),
        n(653041),
        n(571269),
        n(298267);
      var r = n(735250),
        a = n(470079),
        i = n(112456),
        o = n.n(i),
        s = n(226961),
        l = n(706619),
        c = n(206314);
      let d = {
        accelerateRate: "Accelerate Rate",
        audioDetected: "Audio Detected",
        audioLevel: "Audio Level",
        availableOutgoingBitrate: "Available Outgoing Bitrate",
        averageDecodeTime: "Average Decode Time",
        averageEncodeTime: "Average Encode Time",
        bandwidthLimitedResolution: "Bandwidth Limited Resolution",
        bitrate: "Bitrate",
        bitrateTarget: "Bitrate (Target)",
        bytesReceived: "Bytes Received",
        bytesSent: "Bytes Sent",
        capturedFramesCount: "Captured Frames per Second",
        capturedFramesDropped: "Captured Frames Dropped",
        capturedFramesMean: "Captured Frames Mean (ms)",
        capturedFramesStdev: "Captured Frames Standard Deviation (ms)",
        codec: "Codec",
        cpuLimitedResolution: "CPU Limited Resolution",
        currentDelay: "Current Delay",
        decoderImplementationName: "Decoder",
        decodingCNG: "Decoding CNG",
        decodingMutedOutput: "Decoding Muted Output",
        decodingNormal: "Decoding Normal",
        decodingPLC: "Decoding PLC",
        decodingPLCCNG: "Decoding PLC CNG",
        decryptionFailures: "Decryption Failures",
        decryptFailureCount: "Decrypt Failures",
        decryptSuccessCount: "Decrypt Successes",
        delayEstimate: "Delay Estimate",
        encoderImplementationName: "Encoder",
        encoderQualityPsnr: "Encoder PSNR (dB)",
        encoderQualityVmaf: "Encoder VMAF",
        encodeUsage: "Encode Usage",
        encryptFailureCount: "Encrypt Failures",
        encryptSuccessCount: "Encrypt Successes",
        expandRate: "Expand Rate",
        filter: "Filter",
        firCount: "FIR",
        fractionLost: "Packet Loss",
        frameRateDecode: "Frame Rate (Decode)",
        frameRateEncode: "Frame Rate (Encode)",
        frameRateInput: "Frame Rate (Input)",
        frameRateNetwork: "Frame Rate (Network)",
        frameRateRender: "Frame Rate (Render)",
        framesDecoded: "Frames Decoded",
        framesDecodeErrors: "Decoder Error Count",
        framesDropped: "Frames Dropped",
        framesDroppedCongestionWindow: "Frames Dropped by Congestion Window",
        framesDroppedEncoderQueue: "Frames Dropped by Encoder Queue",
        framesDroppedRateLimiter: "Frames Dropped by Bitrate Limiter",
        framesDroppedEncoder: "Frames Dropped by Encoder",
        framesEncoded: "Frames Encoded",
        framesReceived: "Frames Received",
        framesSent: "Frames Sent",
        freezeCount: "Freeze Count",
        hostname: "Hostname",
        hybridCaptureMethodSwitches: "Hybrid Capture Method Switches",
        hybridDxgiFrames: "Hybrid DXGI Frames",
        hybridGdiBitBltFrames: "Hybrid GDI BitBlt Frames",
        hybridGdiFrames: "Hybrid GDI Frames",
        hybridGdiPrintWindowFrames: "Hybrid GDI PrintWindow Frames",
        hybridGraphicsCaptureFrames: "Hybrid Graphics Capture Frames",
        hybridVideohookFrames: "Hybrid Videohook Frames",
        inboundBitrateEstimate: "Inbound Bitrate Estimate",
        jitter: "Jitter",
        jitterBuffer: "Jitter Buffer",
        jitterBufferPreferred: "Jitter Buffer (Preferred)",
        keyFrameInterval: "Key Frame Interval",
        keyFramesDecoded: "Key Frames Decoded",
        keyFramesEncoded: "Key Frames Encoded",
        localAddress: "Local Address",
        minPlayoutDelay: "Minimum Playout Delay",
        nackCount: "NACK",
        networkFramesDropped: "Frames Dropped By Network",
        opAccelerate: "Accelerated Frames",
        opCNG: "CNG Frames",
        opExpand: "Expand Frames",
        opMerge: "Merge Frames",
        opNormal: "Normal Frames",
        opPreemptiveExpand: "Preemptive Expand Frames",
        opSilence: "Silent Frames",
        outboundBitrateEstimate: "Outbound Bitrate Estimate",
        pacerDelay: "Pacer Delay",
        packetsLost: "Packets Lost",
        packetsReceived: "Packets Received",
        packetsSent: "Packets Sent",
        passthroughCount: "Passthrough",
        pauseCount: "Pause Count",
        ping: "Ping",
        pliCount: "PLI",
        preemptiveExpandRate: "Pre-emptive Expand Rate",
        qpSum: "QP Sum",
        qualityDecodeErrors: "Encoder Quality Decode Errors",
        qualityDecoderReboots: "Encoder Quality Decoder Reboots",
        qualityScoreErrors: "Encoder Quality Score Errors",
        qualityFrameDrops: "Encoder Quality Frame Drops",
        qualitySizeMismatches: "Encoder Quality Size Mismatches",
        quartzFrames: "Quartz Frames",
        receiverBitrateEstimate: "Receiver Bitrate Estimate (REMB)",
        relativePlayoutDelay: "Relative Playout Delay",
        relativeReceptionDelay: "Relative Reception Delay",
        renderDelay: "Render Delay",
        resolution: "Resolution",
        routingFailures: "Routing Failures",
        screenCaptureKitFrames: "ScreenCaptureKit frames",
        screenshareFrames: "WebRTC Frames",
        secondaryDecodedRate: "Secondary Decode Rate",
        secureFramesProtocolVersion: "DAVE Protocol",
        sinkWant: "Sink Quality Level (Remote)",
        sinkWantLocal: "Sink Quality Level (Local)",
        speechExpandRate: "Speech Expand Rate",
        ssrc: "SSRC",
        targetDelay: "Target Delay",
        totalFramesDuration: "Frames Duration (ms)",
        totalFreezesDuration: "Freezes Duration (ms)",
        totalPausesDuration: "Pauses Duration (ms)",
        videohookBackend: "Videohook Backend",
        videohookFrames: "Videohook Frames",
      };
      function u(e) {
        return "".concat((e / 1e3).toFixed(2), " Kbps");
      }
      function m(e) {
        return o().filesize(e);
      }
      function p(e) {
        return e;
      }
      function h(e) {
        return "".concat(e, " ms");
      }
      function g(e) {
        return "".concat(e.toFixed(0), "%");
      }
      function f(e) {
        return e ? "Yes" : "No";
      }
      function C(e) {
        return "".concat(Math.max(e, 0).toFixed(2), " dB");
      }
      function y(e) {
        let { last: t } = e;
        return "".concat(t, " ms");
      }
      let D = {
          audioJitterBuffer: !0,
          audioJitterDelay: !0,
          audioJitterTarget: !0,
          audioPlayoutUnderruns: !0,
          fractionLost: !0,
          framesCaptured: !0,
          framesRendered: !0,
          noiseCancellerFrames: !0,
          noiseCancellerProcessTime: !0,
          sinkWantAsInt: !0,
          sumOfSquaredFramesDurations: !0,
          timestamp: !0,
          type: !0,
          videoJitterBuffer: !0,
          videoJitterDelay: !0,
          videoJitterTarget: !0,
          voiceActivityDetectorProcessTime: !0,
          decryptAttempts: !0,
          decryptDuration: !0,
          encryptAttempts: !0,
          encryptDuration: !0,
          encryptMaxAttempts: !0,
          lqSimulcastStreamEncoded: !0,
          hqSimulcastStreamEncoded: !0,
        },
        S = {
          accelerateRate: g,
          audioDetected: f,
          audioLevel: C,
          availableOutgoingBitrate: u,
          averageDecodeTime: h,
          averageEncodeTime: h,
          bandwidthLimitedResolution: f,
          bitrate: u,
          bitrateTarget: u,
          bytesReceived: m,
          bytesSent: m,
          codec: function (e) {
            let { id: t, name: n } = e;
            return (
              (n = null != (n = "" === n ? "unknown" : n) ? n : "unknown"),
              ""
                .concat(n[0].toUpperCase())
                .concat(n.slice(1), " (")
                .concat(t, ")")
            );
          },
          cpuLimitedResolution: f,
          currentDelay: h,
          decoderImplementationName: p,
          delayEstimate: h,
          encoderImplementationName: p,
          encoderQualityPsnr: C,
          encoderQualityVmaf: (e) => "".concat(e.toFixed(2)),
          encodeUsage: g,
          expandRate: g,
          filter: p,
          fractionLost: g,
          inboundBitrateEstimate: u,
          jitter: h,
          jitterBuffer: h,
          jitterBufferPreferred: h,
          keyFrameInterval: h,
          minPlayoutDelay: h,
          outboundBitrateEstimate: u,
          pacerDelay: h,
          ping: h,
          preemptiveExpandRate: g,
          receiverBitrateEstimate: u,
          relativePlayoutDelay: y,
          relativeReceptionDelay: y,
          renderDelay: h,
          resolution: (e) => {
            let { width: t, height: n } = e;
            return "".concat(t, "x").concat(n);
          },
          secondaryDecodedRate: g,
          secureFramesProtocolVersion: function (e) {
            return e > 0 ? "Version ".concat(e) : "Disabled";
          },
          speechExpandRate: g,
          targetDelay: h,
          videohookBackend: function (e) {
            let t = [
              "N/A",
              "Direct3D 9",
              "Direct3D 10",
              "Direct3D 11",
              "Direct3D 12",
              "OpenGL",
              "Vulkan",
            ];
            return e < t.length ? t[e] : "Unknown";
          },
        },
        R = (e) => e,
        v = (e) => {
          let [t] = a.useState([]);
          return (
            t.push({ value: e.value, time: Date.now() }),
            t.length > 600 && t.shift(),
            (0, r.jsx)(l.Z, { dataPoints: t, width: e.width, height: e.height })
          );
        };
      function b(e) {
        var t, n, a, i;
        let { label: o, value: u, section: m } = e,
          p = null !== (n = S[o]) && void 0 !== n ? n : R;
        let h =
            s.Pz[o] &&
            (Array.isArray((i = u)) &&
            i.length > 0 &&
            "number" == typeof i[0].value
              ? (0, r.jsx)(l.Z, { dataPoints: i, width: 300, height: 100 })
              : "number" == typeof i
                ? (0, r.jsx)(v, { value: i, width: 300, height: 100 })
                : void 0),
          g = Array.isArray(u)
            ? null === (t = u.at(-1)) || void 0 === t
              ? void 0
              : t.value
            : u;
        return (0, r.jsx)(c.Z, {
          label: o,
          valueRendered: p(g),
          section: m,
          renderGraph: h,
          children: null !== (a = d[o]) && void 0 !== a ? a : o,
        });
      }
    },
    724392: function (e, t, n) {
      var r = n(735250),
        a = n(470079),
        i = n(442837),
        o = n(481060),
        s = n(226961),
        l = n(481250),
        c = n(689938);
      class d extends a.PureComponent {
        render() {
          let { outbound: e, context: t } = this.props;
          return null == e
            ? (0, r.jsx)(o.Spinner, { type: o.Spinner.Type.SPINNING_CIRCLE })
            : (0, r.jsx)(o.FormSection, {
                tag: o.FormTitleTags.H2,
                title: c.Z.Messages.RTC_DEBUG_RTP_OUTBOUND,
                children: (0, l.V)(e, t),
              });
        }
      }
      t.Z = i.ZP.connectStores([s.ZP], (e) => {
        let { context: t, index: n } = e,
          r = s.ZP.getAllStats(t)[n];
        return { outbound: null != r ? r.rtp.outbound : null };
      })(d);
    },
    442580: function (e, t, n) {
      var r = n(735250),
        a = n(470079),
        i = n(392711),
        o = n.n(i),
        s = n(481060),
        l = n(481250),
        c = n(513547),
        d = n(689938);
      class u extends a.PureComponent {
        render() {
          let { screenshare: e } = this.props;
          if (null == e)
            return (0, r.jsx)(s.Spinner, {
              type: s.Spinner.Type.SPINNING_CIRCLE,
            });
          let t = o().map(e, (e, t) => {
            if (!(c.al[t] || void 0 === e))
              return (0, r.jsx)(c.ck, { label: t, value: e }, t);
          });
          return (0, r.jsx)(s.FormSection, {
            tag: s.FormTitleTags.H2,
            title: d.Z.Messages.RTC_DEBUG_SCREENSHARE,
            children: (0, l.a)(t),
          });
        }
      }
      t.Z = u;
    },
    770800: function (e, t, n) {
      n(571269), n(298267);
      var r = n(735250),
        a = n(470079),
        i = n(392711),
        o = n.n(i),
        s = n(442837),
        l = n(481060),
        c = n(600164),
        d = n(19780),
        u = n(226961),
        m = n(914010),
        p = n(959457),
        h = n(246946),
        g = n(594174),
        f = n(5192),
        C = n(476221),
        y = n(481250),
        D = n(206314),
        S = n(513547),
        R = n(65154),
        v = n(689938),
        b = n(701491),
        E = n(113207);
      class Z extends a.PureComponent {
        render() {
          let {
            transport: e,
            mediaSessionId: t,
            hidePersonalInformation: n,
            hostname: a,
          } = this.props;
          if (null == e)
            return (0, r.jsx)(l.Spinner, {
              type: l.Spinner.Type.SPINNING_CIRCLE,
            });
          let i = { ...e, hostname: a },
            s = o().map(i, (e, t) => {
              if ("receiverReports" !== t && (!n || "localAddress" !== t))
                return (0, r.jsx)(S.ck, { label: t, value: e }, t);
            }),
            d = o().map(i.receiverReports, (e) => {
              let t = Array.isArray(e.bitrate)
                  ? null === (o = e.bitrate.at(-1)) || void 0 === o
                    ? void 0
                    : o.value
                  : e,
                n = (0, r.jsxs)(c.Z, {
                  id: "bitrate-".concat(e.id),
                  justify: c.Z.Justify.BETWEEN,
                  children: [
                    (0, r.jsx)("span", { children: "Bitrate:" }),
                    (0, r.jsxs)("span", {
                      children: [(t / 1e3).toFixed(2), " Kbps"],
                    }),
                  ],
                }),
                a = (0, r.jsxs)(c.Z, {
                  id: "lost-".concat(e.id),
                  justify: c.Z.Justify.BETWEEN,
                  children: [
                    (0, r.jsx)("span", { children: "Packet Loss:" }),
                    (0, r.jsxs)("span", {
                      children: [
                        ((100 * e.fractionLost) / 256).toFixed(0),
                        "%",
                      ],
                    }),
                  ],
                }),
                i = g.default.getUser(e.id);
              var o,
                s = f.ZP.getNickname(m.Z.getGuildId(), void 0, i);
              return (
                null == s && (s = null != i ? i.username : e.id),
                (0, r.jsx)(
                  D.Z,
                  { label: e.id, valueRendered: [n, a], children: s },
                  e.id,
                )
              );
            });
          return (0, r.jsxs)(l.FormSection, {
            tag: l.FormTitleTags.H2,
            title:
              v.Z.Messages.RTC_DEBUG_TRANSPORT + (null != t ? " - " + t : ""),
            className: b.allowSelection,
            children: [
              (0, y.a)(s),
              0 === d.length
                ? null
                : (0, r.jsx)(l.FormDivider, { className: E.marginBottom20 }),
              (0, y.a)(d),
            ],
          });
        }
      }
      t.Z = s.ZP.connectStores([u.ZP, d.Z, h.Z, p.Z], (e) => {
        let { context: t, index: n } = e,
          r = u.ZP.getAllStats(t)[n],
          a =
            t === R.Yn.STREAM
              ? p.Z.getHostname(p.Z.getActiveStreamKey())
              : d.Z.getHostname();
        return {
          hidePersonalInformation: h.Z.hidePersonalInformation,
          transport: null != r ? r.transport : null,
          mediaSessionId: d.Z.getMediaSessionId(),
          hostname: C.Z.getShortHostname(a),
        };
      })(Z);
    },
    4912: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(325767);
      function i(e) {
        let {
          width: t = 14,
          height: n = 14,
          color: i = "currentColor",
          foreground: o,
          ...s
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, a.Z)(s),
          width: t,
          height: n,
          viewBox: "0 0 14 14",
          children: (0, r.jsx)("path", {
            className: o,
            fill: i,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    11377: function (e, t, n) {
      e.exports = {
        tabBarItemContainer: "tabBarItemContainer_e7c031",
        searchFilterCount: "searchFilterCount_e7c031",
        searchBar: "searchBar_e7c031",
      };
    },
    156725: function (e, t, n) {
      n.r(
        (e.exports = {
          standardSidebarView: "standardSidebarView_c25c6d",
          withUpsell: "withUpsell_c25c6d",
          sidebarRegion: "sidebarRegion_c25c6d",
          sidebarRegionScroller: "sidebarRegionScroller_c25c6d",
          sidebar: "sidebar_c25c6d",
          mobileSidebar: "mobileSidebar_c25c6d",
          contentTransitionWrap: "contentTransitionWrap_c25c6d",
          contentRegionScroller: "contentRegionScroller_c25c6d",
          toolsContainer: "toolsContainer_c25c6d",
          tools: "tools_c25c6d",
          contentRegionHiddenSidebar: "contentRegionHiddenSidebar_c25c6d",
          contentRegionShownSidebar: "contentRegionShownSidebar_c25c6d",
          contentRegion: "contentRegion_c25c6d",
          customColumn: "customColumn_c25c6d",
          contentColumn: "contentColumn_c25c6d",
          contentColumnWide: "contentColumnWide_c25c6d",
          contentColumnDefault: "contentColumnDefault_c25c6d",
          contentColumnMinimal: "contentColumnMinimal_c25c6d",
          customHeader: "customHeader_c25c6d",
          customContainer: "customContainer_c25c6d",
          customScroller: "customScroller_c25c6d",
          noticeRegion: "noticeRegion_c25c6d",
          noticeRegionHiddenSidebar: "noticeRegionHiddenSidebar_c25c6d",
          mobileSidebarTools: "mobileSidebarTools_c25c6d",
          flexFullWidth: "flexFullWidth_c25c6d",
          hidden: "hidden_c25c6d",
          mobileContent: "mobileContent_c25c6d",
          mobileContentHeader: "mobileContentHeader_c25c6d",
          hideHamburger: "hideHamburger_c25c6d",
          mobileToolsContainer: "mobileToolsContainer_c25c6d",
          closeIconOnly: "closeIconOnly_c25c6d",
          isMobileAndroid: "isMobileAndroid_c25c6d",
          mobileToolsCloseIcon: "mobileToolsCloseIcon_c25c6d",
          mobileSidebarHeader: "mobileSidebarHeader_c25c6d",
        }),
      );
    },
    655580: function (e, t, n) {
      e.exports = {
        premiumLabel: "premiumLabel_ae3c77",
        selected: "selected_ae3c77",
        background: "background_ae3c77",
        selectedBackground: "selectedBackground_ae3c77",
        auPromo: "auPromo_ae3c77",
        auPromoSelected: "auPromoSelected_ae3c77",
      };
    },
  },
]);
//# sourceMappingURL=a6e604de07d6e053d2ef.js.map
