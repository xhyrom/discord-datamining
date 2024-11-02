"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68638"],
  {
    945778: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var r = n(200651);
      n(192379);
      var a = n(238246),
        i = n(153731),
        o = n(388032);
      function l(e) {
        let { windowKey: t } = e;
        return (0, r.jsx)(a.Z, {
          withTitleBar: !0,
          windowKey: t,
          title: o.intl.string(o.t["5I/1fn"]),
          children: (0, r.jsx)(i.Z, {}),
        });
      }
    },
    153731: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      }),
        n(653041),
        n(47120),
        n(390547),
        n(733860);
      var r = n(200651),
        a = n(192379),
        i = n(392711),
        o = n.n(i),
        l = n(442837),
        s = n(481060),
        c = n(304680),
        d = n(503089),
        u = n(493544),
        m = n(600164),
        p = n(210887),
        h = n(592125),
        g = n(271383),
        f = n(19780),
        y = n(226961),
        b = n(594174),
        S = n(51144),
        v = n(189648),
        C = n(775194),
        D = n(499848),
        F = n(724392),
        R = n(442580),
        E = n(770800),
        Z = n(981631),
        x = n(65154),
        P = n(388032),
        N = n(701491);
      let I = (e, t, n) =>
          (0, r.jsx)(m.Z, {
            align: m.Z.Align.CENTER,
            children: (0, r.jsx)(m.Z.Child, {
              children: (0, r.jsxs)(m.Z, {
                align: m.Z.Align.CENTER,
                children: [
                  (0, r.jsx)(s.Avatar, {
                    size: s.AvatarSizes.SIZE_24,
                    src: e.getAvatarURL(n, 24),
                    "aria-label": e.username,
                    className: N.avatar,
                  }),
                  (0, r.jsx)("span", {
                    className: N.username,
                    children: null != t ? t : S.ZP.getName(e),
                  }),
                ],
              }),
            }),
          }),
        j = (e) =>
          (0, r.jsx)(m.Z, {
            align: m.Z.Align.CENTER,
            children: (0, r.jsx)(m.Z.Child, {
              children: (0, r.jsx)(m.Z, {
                align: m.Z.Align.CENTER,
                children: (0, r.jsx)("span", {
                  className: N.username,
                  children: e,
                }),
              }),
            }),
          });
      function T(e, t, n, r, a) {
        let i = [];
        if (null == t) return i;
        let {
          transport: l,
          rtp: { inbound: s, outbound: d },
          camera: m,
        } = t;
        if (
          (i.push({
            section: u.ID.HEADER,
            label: P.intl.formatToPlainString(P.t.PK5fOD, { context: e }),
          }),
          null != l &&
            i.push({
              section: (0, y.J$)(e, Z._s_.TRANSPORT, n),
              label: P.intl.string(P.t.wU9INz),
              element: E.Z,
              elementProps: { context: e, index: n },
            }),
          null != d &&
            i.push({
              section: (0, y.J$)(e, Z._s_.OUTBOUND, n),
              label: P.intl.string(P.t["3u0gIC"]),
              element: F.Z,
              elementProps: { context: e, index: n },
            }),
          null != m &&
            i.push({
              section: (0, y.J$)(e, Z._s_.CAMERA, n),
              label: P.intl.string(P.t["2AGBWF"]),
              element: v.Z,
              elementProps: { context: e, index: n, camera: m },
            }),
          null != s && !o().isEmpty(s))
        ) {
          let t = [];
          Object.keys(s).forEach((i) => {
            let o = b.default.getUser(i),
              l = g.ZP.getNick(a, i),
              d = (0, y.J$)(e, i, n);
            null != s[i] &&
              s[i].length > 0 &&
              t.push({
                section: d,
                label: null != o ? I(o, l, a) : j(null != l ? l : i),
                ariaLabel: null != o ? o.tag : i,
                onClick: () => {
                  c.zc(d);
                },
                element: D.Z,
                elementProps: { context: e, index: n, videoStreams: r },
              });
          }),
            t.length > 0 &&
              (i.push({
                section: u.ID.HEADER,
                label: P.intl.string(P.t.SJmZam),
              }),
              i.push(...t));
        }
        return i;
      }
      function _() {
        var e, t;
        let { defaultStats: n, streamStats: i } = (0, l.e7)(
            [y.ZP],
            () => ({
              defaultStats: y.ZP.getAllStats(x.Yn.DEFAULT),
              streamStats: y.ZP.getAllStats(x.Yn.STREAM),
            }),
            [],
            l.pF,
          ),
          o = (0, l.e7)([f.Z, h.Z], () => h.Z.getChannel(f.Z.getChannelId())),
          m =
            null === (e = n.concat(i).find((e) => null != e.screenshare)) ||
            void 0 === e
              ? void 0
              : e.screenshare,
          g =
            null === (t = i.find((e) => null != e.clips)) || void 0 === t
              ? void 0
              : t.clips,
          b = (0, l.e7)([p.Z], () => p.Z.theme),
          S = (0, l.e7)([p.Z], () => (p.Z.darkSidebar ? Z.BRd.DARK : void 0)),
          v = (0, l.e7)([y.ZP], () => y.ZP.getSection()),
          D = (0, l.e7)([y.ZP], () => y.ZP.getVideoStreams()),
          F = (function (e) {
            let {
                defaultStats: t,
                streamStats: n,
                videoStreams: a,
                screenshare: i,
                clips: o,
                channel: l,
                connectionState: c,
              } = e,
              d = t.flatMap((e, t) =>
                T(x.Yn.DEFAULT, e, t, a, null == l ? void 0 : l.getGuildId()),
              ),
              m = n.flatMap((e, t) =>
                T(x.Yn.STREAM, e, t, a, null == l ? void 0 : l.getGuildId()),
              ),
              p = [],
              h = [],
              g = { section: u.ID.DIVIDER };
            null != i &&
              (p.push(g),
              p.push({
                section: Z._s_.SCREENSHARE,
                label: P.intl.string(P.t["gWbr/f"]),
                element: R.Z,
                elementProps: { screenshare: i },
              })),
              null != o &&
                (h.push(g),
                h.push({
                  section: Z._s_.CLIPS,
                  label: P.intl.string(P.t.MKrFKC),
                  element: C.Z,
                  elementProps: { clips: o },
                })),
              m.length > 0 && m.unshift(g);
            let f =
              null != l
                ? [
                    {
                      section: u.ID.CUSTOM,
                      label: "Channel Name",
                      element: () =>
                        (0, r.jsx)(s.Heading, {
                          className: N.channelName,
                          variant: "heading-lg/semibold",
                          children: l.name,
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
                  (0, r.jsx)(s.Heading, {
                    className: N.channelName,
                    variant: "heading-md/normal",
                    children:
                      c === Z.hes.RTC_CONNECTED ? "Connected" : "Disconnected",
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
            videoStreams: D,
            screenshare: m,
            clips: g,
            channel: o,
            connectionState: (0, l.e7)([f.Z], () => f.Z.getState()),
          });
        return (
          a.useEffect(
            () => () => {
              c.xv();
            },
            [],
          ),
          (0, r.jsx)(d.ZP, {
            theme: b,
            sidebarTheme: S,
            section: v,
            onSetSection: c.zc,
            sections: F,
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
      var r = n(200651);
      n(192379);
      var a = n(392711),
        i = n.n(a),
        o = n(481060),
        l = n(481250),
        s = n(513547),
        c = n(388032);
      function d(e) {
        let { camera: t } = e;
        if (null == t)
          return (0, r.jsx)(o.Spinner, {
            type: o.Spinner.Type.SPINNING_CIRCLE,
          });
        let n = i().map(t, (e, t) => {
          if (!(s.al[t] || void 0 === e))
            return (0, r.jsx)(s.ck, { label: t, value: e }, t);
        });
        return (0, r.jsx)(o.FormSection, {
          tag: o.FormTitleTags.H2,
          title: c.intl.string(c.t["2AGBWF"]),
          children: (0, l.a)(n),
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
      var r = n(200651);
      n(192379);
      var a = n(392711),
        i = n.n(a),
        o = n(481060),
        l = n(481250),
        s = n(513547),
        c = n(388032),
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
            return (0, r.jsx)(s.ck, { label: t, value: e }, t);
        });
        return (
          n.push(
            (0, r.jsx)(
              s.ck,
              {
                label: "Frames Per Second",
                value: t.recentEncodedFrames / (t.recentDurationMs / 1e3),
              },
              "framerate",
            ),
          ),
          (0, r.jsxs)(o.FormSection, {
            tag: o.FormTitleTags.H2,
            title: c.intl.string(c.t.MKrFKC),
            children: [
              (0, l.a)(n),
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
                        t.push((0, r.jsx)(s.ck, { label: n, value: a }, n));
                    }
                    return (0, r.jsx)(
                      o.FormSection,
                      {
                        className: u.marginBottom40,
                        title: "Buffer: ".concat(e.key),
                        titleClassName: d.title,
                        children: (0, l.a)(t),
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
          return v;
        },
        a: function () {
          return b;
        },
      }),
        n(653041),
        n(47120);
      var r = n(200651);
      n(192379);
      var a = n(120356),
        i = n.n(a),
        o = n(481060),
        l = n(304680),
        s = n(763520),
        c = n(600164),
        d = n(352978),
        u = n(131951),
        m = n(226961),
        p = n(513547),
        h = n(65154),
        g = n(701491),
        f = n(113207);
      let y = {
        [h.Z.NO_OVERRIDE]: "None",
        [h.Z.LOW]: "Low Quality Stream",
        [h.Z.HIGH]: "High Quality Stream",
      };
      function b(e) {
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
      let S = { ssrc: 1, codec: 2 };
      function v(e, t, n, a, v) {
        return e.map((C, D) => {
          var F, R;
          let E = [];
          for (let e of Object.keys(C).sort((e, t) => {
            let n = S[e],
              r = S[t];
            if (n !== r) return void 0 === n ? 1 : void 0 === r ? -1 : n - r;
            return m.Pz[e] !== m.Pz[t] ? (m.Pz[e] ? 1 : -1) : e > t ? 1 : -1;
          })) {
            let t = C[e];
            if (!p.al[e] && void 0 !== t)
              E.push((0, r.jsx)(p.ck, { section: a, label: e, value: t }, e));
          }
          return (0, r.jsxs)(
            o.FormSection,
            {
              className: f.marginBottom40,
              title: C.type,
              titleClassName: g.sectionHeader,
              children: [
                "video" === C.type &&
                  null != n &&
                  null != a &&
                  null != v &&
                  (function (e, t, n, a) {
                    let o = a.get(t, n, e.ssrc);
                    return null != o
                      ? (0, r.jsx)("div", {
                          className: i()(g.videoWrapper, f.marginBottom40),
                          children: (0, r.jsx)(d.Z, {
                            streamId: o,
                            videoComponent: u.Z.getMediaEngine().Video,
                            paused: !1,
                            videoSpinnerContext: s.m.REPLAY_VIDEO_STREAM,
                            userId: n,
                          }),
                        })
                      : null;
                  })(C, n, a, v),
                b(E),
                "video" === C.type &&
                  D === e.length - 1 &&
                  null != n &&
                  null != a &&
                  null != v &&
                  ((F = a),
                  (R = t),
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
                          value: m.ZP.getSimulcastDebugOverride(F, R),
                          onChange: (e) => {
                            l.MS(F, R, e);
                          },
                          options: Object.values(h.Z).map((e) => ({
                            value: e,
                            label: y[e],
                          })),
                        }),
                      ],
                    }),
                  })),
              ],
            },
            "".concat(C.type, " + ").concat(C.ssrc),
          );
        });
      }
    },
    499848: function (e, t, n) {
      n(411104);
      var r = n(200651),
        a = n(192379),
        i = n(442837),
        o = n(481060),
        l = n(271383),
        s = n(19780),
        c = n(226961),
        d = n(594174),
        u = n(51144),
        m = n(481250),
        p = n(388032);
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
          let c = s.Z.getGuildId(),
            h = d.default.getUser(n),
            g = l.ZP.getNick(c, n),
            f =
              null == h
                ? p.intl.string(p.t.SJmZam)
                : ""
                    .concat(p.intl.string(p.t.SJmZam), " — ")
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
          var l;
          o = null !== (l = a.rtp.inbound[i]) && void 0 !== l ? l : [];
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
      var r = n(200651),
        a = n(192379),
        i = n(120356),
        o = n.n(i),
        l = n(692547),
        s = n(481060),
        c = n(600164),
        d = n(4912),
        u = n(701491);
      let m = ["firCount", "nackCount"];
      class p extends a.PureComponent {
        renderValueIcon() {
          let { label: e } = this.props;
          return m.includes(e)
            ? (0, r.jsx)(d.Z, {
                color: l.Z.unsafe_rawColors.YELLOW_300.css,
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
            renderGraph: l,
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
                    children: (0, r.jsx)(s.H, {
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
              null !== l &&
                (0, r.jsx)(
                  c.Z.Child,
                  {
                    className: u.graph,
                    children: (0, r.jsx)(s.FormText, {
                      type: s.FormTextTypes.DESCRIPTION,
                      children: l,
                    }),
                  },
                  null != a ? "".concat(a, "-").concat(i) : i,
                ),
              (0, r.jsx)(s.FormDivider, { className: u.divider }),
            ],
          });
        }
      }
    },
    513547: function (e, t, n) {
      n.d(t, {
        al: function () {
          return S;
        },
        ck: function () {
          return F;
        },
      }),
        n(47120),
        n(653041),
        n(571269),
        n(298267);
      var r = n(200651),
        a = n(192379),
        i = n(112456),
        o = n.n(i),
        l = n(226961),
        s = n(706619),
        c = n(206314);
      let d = {
        accelerateRate: "Accelerate Rate",
        audioDetected: "Audio Detected",
        audioLevel: "Audio Level",
        availableOutgoingBitrate: "Available Outgoing Bitrate",
        averageDecodeTime: "Average Decode Time",
        averageEncodeTime: "Average Encode Time",
        bandwidthLimitedFrameRate: "Bandwidth Limited Frame Rate",
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
        decryptFailureCount: "Decrypt Failures",
        decryptionFailures: "Decryption Failures",
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
        framesDroppedEncoder: "Frames Dropped by Encoder",
        framesDroppedEncoderQueue: "Frames Dropped by Encoder Queue",
        framesDroppedRateLimiter: "Frames Dropped by Bitrate Limiter",
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
        qualityFrameDrops: "Encoder Quality Frame Drops",
        qualityScoreErrors: "Encoder Quality Score Errors",
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
      function y(e) {
        return "".concat(Math.max(e, 0).toFixed(2), " dB");
      }
      function b(e) {
        let { last: t } = e;
        return "".concat(t, " ms");
      }
      let S = {
          audioJitterBuffer: !0,
          audioJitterDelay: !0,
          audioJitterTarget: !0,
          audioPlayoutUnderruns: !0,
          decryptAttempts: !0,
          decryptDuration: !0,
          encryptAttempts: !0,
          encryptDuration: !0,
          encryptMaxAttempts: !0,
          fractionLost: !0,
          framesCaptured: !0,
          framesRendered: !0,
          hqSimulcastStreamEncoded: !0,
          lqSimulcastStreamEncoded: !0,
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
        },
        v = {
          accelerateRate: g,
          audioDetected: f,
          audioLevel: y,
          availableOutgoingBitrate: u,
          averageDecodeTime: h,
          averageEncodeTime: h,
          bandwidthLimitedFrameRate: f,
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
          encoderQualityPsnr: y,
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
          relativePlayoutDelay: b,
          relativeReceptionDelay: b,
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
        C = (e) => e,
        D = (e) => {
          let [t] = a.useState([]);
          return (
            t.push({ value: e.value, time: Date.now() }),
            t.length > 600 && t.shift(),
            (0, r.jsx)(s.Z, { dataPoints: t, width: e.width, height: e.height })
          );
        };
      function F(e) {
        var t, n, a, i;
        let { label: o, value: u, section: m } = e,
          p = null !== (n = v[o]) && void 0 !== n ? n : C;
        let h =
            l.Pz[o] &&
            (Array.isArray((i = u)) &&
            i.length > 0 &&
            "number" == typeof i[0].value
              ? (0, r.jsx)(s.Z, { dataPoints: i, width: 300, height: 100 })
              : "number" == typeof i
                ? (0, r.jsx)(D, { value: i, width: 300, height: 100 })
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
      var r = n(200651),
        a = n(192379),
        i = n(442837),
        o = n(481060),
        l = n(226961),
        s = n(481250),
        c = n(388032);
      class d extends a.PureComponent {
        render() {
          let { outbound: e, context: t } = this.props;
          return null == e
            ? (0, r.jsx)(o.Spinner, { type: o.Spinner.Type.SPINNING_CIRCLE })
            : (0, r.jsx)(o.FormSection, {
                tag: o.FormTitleTags.H2,
                title: c.intl.string(c.t["3u0gIC"]),
                children: (0, s.V)(e, t),
              });
        }
      }
      t.Z = i.ZP.connectStores([l.ZP], (e) => {
        let { context: t, index: n } = e,
          r = l.ZP.getAllStats(t)[n];
        return { outbound: null != r ? r.rtp.outbound : null };
      })(d);
    },
    442580: function (e, t, n) {
      var r = n(200651),
        a = n(192379),
        i = n(392711),
        o = n.n(i),
        l = n(481060),
        s = n(481250),
        c = n(513547),
        d = n(388032);
      class u extends a.PureComponent {
        render() {
          let { screenshare: e } = this.props;
          if (null == e)
            return (0, r.jsx)(l.Spinner, {
              type: l.Spinner.Type.SPINNING_CIRCLE,
            });
          let t = o().map(e, (e, t) => {
            if (!(c.al[t] || void 0 === e))
              return (0, r.jsx)(c.ck, { label: t, value: e }, t);
          });
          return (0, r.jsx)(l.FormSection, {
            tag: l.FormTitleTags.H2,
            title: d.intl.string(d.t["gWbr/f"]),
            children: (0, s.a)(t),
          });
        }
      }
      t.Z = u;
    },
    770800: function (e, t, n) {
      n(571269), n(298267);
      var r = n(200651),
        a = n(192379),
        i = n(392711),
        o = n.n(i),
        l = n(442837),
        s = n(481060),
        c = n(600164),
        d = n(19780),
        u = n(226961),
        m = n(914010),
        p = n(959457),
        h = n(246946),
        g = n(594174),
        f = n(5192),
        y = n(476221),
        b = n(481250),
        S = n(206314),
        v = n(513547),
        C = n(65154),
        D = n(388032),
        F = n(701491),
        R = n(113207);
      class E extends a.PureComponent {
        render() {
          let {
            transport: e,
            mediaSessionId: t,
            hidePersonalInformation: n,
            hostname: a,
          } = this.props;
          if (null == e)
            return (0, r.jsx)(s.Spinner, {
              type: s.Spinner.Type.SPINNING_CIRCLE,
            });
          let i = { ...e, hostname: a },
            l = o().map(i, (e, t) => {
              if ("receiverReports" !== t && (!n || "localAddress" !== t))
                return (0, r.jsx)(v.ck, { label: t, value: e }, t);
            }),
            d = o().map(i.receiverReports, (e) => {
              let t = Array.isArray(e.bitrate)
                  ? null === (r = e.bitrate.at(-1)) || void 0 === r
                    ? void 0
                    : r.value
                  : e.bitrate,
                n = g.default.getUser(e.id);
              var r,
                a = f.ZP.getNickname(m.Z.getGuildId(), void 0, n);
              return (
                null == a && (a = null != n ? n.username : e.id),
                {
                  displayName: a,
                  bitrate: t / 1e3,
                  lost: (100 * e.fractionLost) / 256,
                }
              );
            }),
            u = o().sortBy(d, (e) => e.displayName),
            p = o().map(u, (e) =>
              (function (e, t, n) {
                let a = (0, r.jsxs)(c.Z, {
                    id: "bitrate-".concat(e),
                    justify: c.Z.Justify.BETWEEN,
                    children: [
                      (0, r.jsx)("span", { children: "Bitrate:" }),
                      (0, r.jsxs)("span", {
                        children: [t.toFixed(2), " Kbps"],
                      }),
                    ],
                  }),
                  i = (0, r.jsxs)(c.Z, {
                    id: "lost-".concat(e),
                    justify: c.Z.Justify.BETWEEN,
                    children: [
                      (0, r.jsx)("span", { children: "Packet Loss:" }),
                      (0, r.jsxs)("span", { children: [n.toFixed(0), "%"] }),
                    ],
                  });
                return (0, r.jsx)(
                  S.Z,
                  { label: e, valueRendered: [a, i], children: e },
                  e,
                );
              })(e.displayName, e.bitrate, e.lost),
            );
          return (0, r.jsxs)(s.FormSection, {
            tag: s.FormTitleTags.H2,
            title: D.intl.string(D.t.wU9INz) + (null != t ? " - " + t : ""),
            className: F.allowSelection,
            children: [
              (0, b.a)(l),
              0 === p.length
                ? null
                : (0, r.jsx)(s.FormDivider, { className: R.marginBottom20 }),
              (0, b.a)(p),
            ],
          });
        }
      }
      t.Z = l.ZP.connectStores([u.ZP, d.Z, h.Z, p.Z], (e) => {
        let { context: t, index: n } = e,
          r = u.ZP.getAllStats(t)[n],
          a =
            t === C.Yn.STREAM
              ? p.Z.getHostname(p.Z.getActiveStreamKey())
              : d.Z.getHostname();
        return {
          hidePersonalInformation: h.Z.hidePersonalInformation,
          transport: null != r ? r.transport : null,
          mediaSessionId: d.Z.getMediaSessionId(),
          hostname: y.Z.getShortHostname(a),
        };
      })(E);
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
//# sourceMappingURL=962502f00050dc8110e9.js.map
