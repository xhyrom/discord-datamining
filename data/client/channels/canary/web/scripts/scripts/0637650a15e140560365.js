"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92006"],
  {
    945778: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return s;
          },
        });
      var n = r(200651);
      r(192379);
      var a = r(238246),
        i = r(153731),
        l = r(388032);
      function s(e) {
        let { windowKey: t } = e;
        return (0, n.jsx)(a.Z, {
          withTitleBar: !0,
          windowKey: t,
          title: l.intl.string(l.t["5I/1fn"]),
          children: (0, n.jsx)(i.Z, {}),
        });
      }
    },
    153731: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return k;
        },
      }),
        r(653041),
        r(47120),
        r(390547),
        r(733860);
      var n = r(200651),
        a = r(192379),
        i = r(392711),
        l = r.n(i),
        s = r(442837),
        o = r(481060),
        c = r(304680),
        d = r(503089),
        u = r(493544),
        m = r(600164),
        p = r(210887),
        h = r(592125),
        g = r(271383),
        f = r(19780),
        y = r(226961),
        v = r(594174),
        D = r(51144),
        F = r(189648),
        S = r(775194),
        C = r(499848),
        E = r(724392),
        Z = r(442580),
        R = r(770800),
        b = r(981631),
        x = r(65154),
        P = r(388032),
        N = r(378481);
      let j = (e, t, r) =>
          (0, n.jsx)(m.Z, {
            align: m.Z.Align.CENTER,
            children: (0, n.jsx)(m.Z.Child, {
              children: (0, n.jsxs)(m.Z, {
                align: m.Z.Align.CENTER,
                children: [
                  (0, n.jsx)(o.Avatar, {
                    size: o.AvatarSizes.SIZE_24,
                    src: e.getAvatarURL(r, 24),
                    "aria-label": e.username,
                    className: N.avatar,
                  }),
                  (0, n.jsx)("span", {
                    className: N.username,
                    children: null != t ? t : D.ZP.getName(e),
                  }),
                ],
              }),
            }),
          }),
        I = (e) =>
          (0, n.jsx)(m.Z, {
            align: m.Z.Align.CENTER,
            children: (0, n.jsx)(m.Z.Child, {
              children: (0, n.jsx)(m.Z, {
                align: m.Z.Align.CENTER,
                children: (0, n.jsx)("span", {
                  className: N.username,
                  children: e,
                }),
              }),
            }),
          });
      function T(e, t, r, n, a) {
        let i = [];
        if (null == t) return i;
        let {
          transport: s,
          rtp: { inbound: o, outbound: d },
          camera: m,
        } = t;
        if (
          (i.push({
            section: u.ID.HEADER,
            label: P.intl.formatToPlainString(P.t.PK5fOD, { context: e }),
          }),
          null != s &&
            i.push({
              section: (0, y.J$)(e, b._s_.TRANSPORT, r),
              label: P.intl.string(P.t.wU9INz),
              element: R.Z,
              elementProps: { context: e, index: r },
            }),
          null != d &&
            !l().isEmpty(d) &&
            i.push({
              section: (0, y.J$)(e, b._s_.OUTBOUND, r),
              label: P.intl.string(P.t["3u0gIC"]),
              element: E.Z,
              elementProps: { context: e, index: r },
            }),
          null != m &&
            i.push({
              section: (0, y.J$)(e, b._s_.CAMERA, r),
              label: P.intl.string(P.t["2AGBWF"]),
              element: F.Z,
              elementProps: { context: e, index: r, camera: m },
            }),
          null != o && !l().isEmpty(o))
        ) {
          let t = [];
          Object.keys(o).forEach((i) => {
            let l = v.default.getUser(i),
              s = g.ZP.getNick(a, i),
              d = (0, y.J$)(e, i, r);
            null != o[i] &&
              o[i].length > 0 &&
              t.push({
                section: d,
                label: null != l ? j(l, s, a) : I(null != s ? s : i),
                ariaLabel: null != l ? l.tag : i,
                onClick: () => {
                  c.zc(d);
                },
                element: C.Z,
                elementProps: { context: e, index: r, videoStreams: n },
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
      function k() {
        var e, t;
        let { defaultStats: r, streamStats: i } = (0, s.e7)(
            [y.ZP],
            () => ({
              defaultStats: y.ZP.getAllStats(x.Yn.DEFAULT),
              streamStats: y.ZP.getAllStats(x.Yn.STREAM),
            }),
            [],
            s.pF,
          ),
          l = (0, s.e7)([f.Z, h.Z], () => h.Z.getChannel(f.Z.getChannelId())),
          m =
            null === (e = r.concat(i).find((e) => null != e.screenshare)) ||
            void 0 === e
              ? void 0
              : e.screenshare,
          g =
            null === (t = i.find((e) => null != e.clips)) || void 0 === t
              ? void 0
              : t.clips,
          v = (0, s.e7)([p.Z], () => p.Z.theme),
          D = (0, s.e7)([p.Z], () => (p.Z.darkSidebar ? b.BRd.DARK : void 0)),
          F = (0, s.e7)([y.ZP], () => y.ZP.getSection()),
          C = (0, s.e7)([y.ZP], () => y.ZP.getVideoStreams()),
          E = (function (e) {
            let {
                defaultStats: t,
                streamStats: r,
                videoStreams: a,
                screenshare: i,
                clips: l,
                channel: s,
                connectionState: c,
              } = e,
              d = t.flatMap((e, t) =>
                T(x.Yn.DEFAULT, e, t, a, null == s ? void 0 : s.getGuildId()),
              ),
              m = r.flatMap((e, t) =>
                T(x.Yn.STREAM, e, t, a, null == s ? void 0 : s.getGuildId()),
              ),
              p = [],
              h = [],
              g = { section: u.ID.DIVIDER };
            null != i &&
              (p.push(g),
              p.push({
                section: b._s_.SCREENSHARE,
                label: P.intl.string(P.t["gWbr/f"]),
                element: Z.Z,
                elementProps: { screenshare: i },
              })),
              null != l &&
                (h.push(g),
                h.push({
                  section: b._s_.CLIPS,
                  label: P.intl.string(P.t.MKrFKC),
                  element: S.Z,
                  elementProps: { clips: l },
                })),
              m.length > 0 && m.unshift(g);
            let f =
              null != s
                ? [
                    {
                      section: u.ID.CUSTOM,
                      label: "Channel Name",
                      element: () =>
                        (0, n.jsx)(o.Heading, {
                          className: N.channelName,
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
                  (0, n.jsx)(o.Heading, {
                    className: N.channelName,
                    variant: "heading-md/normal",
                    children:
                      c === b.hes.RTC_CONNECTED ? "Connected" : "Disconnected",
                  }),
              },
              ...d,
              ...m,
              ...p,
              ...h,
            ];
          })({
            defaultStats: r,
            streamStats: i,
            videoStreams: C,
            screenshare: m,
            clips: g,
            channel: l,
            connectionState: (0, s.e7)([f.Z], () => f.Z.getState()),
          });
        return (
          a.useEffect(
            () => () => {
              c.xv();
            },
            [],
          ),
          (0, n.jsx)(d.ZP, {
            theme: v,
            sidebarTheme: D,
            section: F,
            onSetSection: c.zc,
            sections: E,
          })
        );
      }
    },
    189648: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = r(200651);
      r(192379);
      var a = r(392711),
        i = r.n(a),
        l = r(481060),
        s = r(481250),
        o = r(513547),
        c = r(388032);
      function d(e) {
        let { camera: t } = e;
        if (null == t)
          return (0, n.jsx)(l.Spinner, {
            type: l.Spinner.Type.SPINNING_CIRCLE,
          });
        let r = i().map(t, (e, t) => {
          if (!(o.al[t] || void 0 === e))
            return (0, n.jsx)(o.ck, { label: t, value: e }, t);
        });
        return (0, n.jsx)(l.FormSection, {
          tag: l.FormTitleTags.H2,
          title: c.intl.string(c.t["2AGBWF"]),
          children: (0, s.a)(r),
        });
      }
    },
    775194: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return p;
        },
      }),
        r(653041),
        r(47120);
      var n = r(200651);
      r(192379);
      var a = r(392711),
        i = r.n(a),
        l = r(481060),
        s = r(481250),
        o = r(513547),
        c = r(388032),
        d = r(378481),
        u = r(232186);
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
          return (0, n.jsx)(l.Spinner, {
            type: l.Spinner.Type.SPINNING_CIRCLE,
          });
        let r = i().map(t, (e, t) => {
          if (void 0 !== e && "buffers" !== t)
            return (0, n.jsx)(o.ck, { label: t, value: e }, t);
        });
        return (
          r.push(
            (0, n.jsx)(
              o.ck,
              {
                label: "Frames Per Second",
                value: t.recentEncodedFrames / (t.recentDurationMs / 1e3),
              },
              "framerate",
            ),
          ),
          (0, n.jsxs)(l.FormSection, {
            tag: l.FormTitleTags.H2,
            title: c.intl.string(c.t.MKrFKC),
            children: [
              (0, s.a)(r),
              (function (e) {
                if (null != e.buffers)
                  return e.buffers.map((e) => {
                    let t = [];
                    for (let r of Object.keys(e).sort((e, t) => {
                      let r = m[e],
                        n = m[t];
                      if (r !== n)
                        return void 0 === r ? 1 : void 0 === n ? -1 : r - n;
                      return e > t ? 1 : -1;
                    })) {
                      let a = e[r];
                      if (null !== a && "key" !== r)
                        t.push((0, n.jsx)(o.ck, { label: r, value: a }, r));
                    }
                    return (0, n.jsx)(
                      l.FormSection,
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
    481250: function (e, t, r) {
      r.d(t, {
        V: function () {
          return F;
        },
        a: function () {
          return v;
        },
      }),
        r(653041),
        r(47120);
      var n = r(200651);
      r(192379);
      var a = r(120356),
        i = r.n(a),
        l = r(481060),
        s = r(304680),
        o = r(763520),
        c = r(600164),
        d = r(352978),
        u = r(131951),
        m = r(226961),
        p = r(513547),
        h = r(65154),
        g = r(378481),
        f = r(232186);
      let y = {
        [h.Z.NO_OVERRIDE]: "None",
        [h.Z.LOW]: "Low Quality Stream",
        [h.Z.HIGH]: "High Quality Stream",
      };
      function v(e) {
        let t = [],
          r = 0;
        for (
          e.length % 2 != 0 &&
          e.push((0, n.jsx)(c.Z, { basis: "50%", grow: 0 }, r++));
          e.length > 0;

        )
          t.push(
            (0, n.jsx)(
              c.Z,
              { basis: "50%", grow: 0, children: e.splice(0, 2) },
              r++,
            ),
          );
        return t;
      }
      let D = { ssrc: 1, codec: 2 };
      function F(e, t, r, a, F) {
        return e.map((S, C) => {
          var E, Z;
          let R = [];
          for (let e of Object.keys(S).sort((e, t) => {
            let r = D[e],
              n = D[t];
            if (r !== n) return void 0 === r ? 1 : void 0 === n ? -1 : r - n;
            return m.Pz[e] !== m.Pz[t] ? (m.Pz[e] ? 1 : -1) : e > t ? 1 : -1;
          })) {
            let t = S[e];
            if (!p.al[e] && void 0 !== t)
              R.push((0, n.jsx)(p.ck, { section: a, label: e, value: t }, e));
          }
          return (0, n.jsxs)(
            l.FormSection,
            {
              className: f.marginBottom40,
              title: S.type,
              titleClassName: g.sectionHeader,
              children: [
                "video" === S.type &&
                  null != r &&
                  null != a &&
                  null != F &&
                  (function (e, t, r, a) {
                    let l = a.get(t, r, e.ssrc);
                    return null != l
                      ? (0, n.jsx)("div", {
                          className: i()(g.videoWrapper, f.marginBottom40),
                          children: (0, n.jsx)(d.Z, {
                            streamId: l,
                            videoComponent: u.Z.getMediaEngine().Video,
                            paused: !1,
                            videoSpinnerContext: o.m.REPLAY_VIDEO_STREAM,
                            userId: r,
                          }),
                        })
                      : null;
                  })(S, r, a, F),
                v(R),
                "video" === S.type &&
                  C === e.length - 1 &&
                  null != r &&
                  null != a &&
                  null != F &&
                  ((E = a),
                  (Z = t),
                  (0, n.jsx)(c.Z, {
                    className: f.marginBottom20,
                    children: (0, n.jsxs)(c.Z.Child, {
                      basis: "100%",
                      children: [
                        (0, n.jsx)(l.FormTitle, {
                          tag: l.FormTitleTags.H5,
                          className: f.marginBottom8,
                          children: "Simulcast Override",
                        }),
                        (0, n.jsx)(l.SingleSelect, {
                          value: m.ZP.getSimulcastDebugOverride(E, Z),
                          onChange: (e) => {
                            s.MS(E, Z, e);
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
            "".concat(S.type, " + ").concat(S.ssrc),
          );
        });
      }
    },
    499848: function (e, t, r) {
      r(411104);
      var n = r(200651),
        a = r(192379),
        i = r(442837),
        l = r(481060),
        s = r(271383),
        o = r(19780),
        c = r(226961),
        d = r(594174),
        u = r(51144),
        m = r(481250),
        p = r(388032);
      class h extends a.PureComponent {
        render() {
          let {
            streams: e,
            context: t,
            userId: r,
            mediaEngineConnectionId: a,
            videoStreams: i,
          } = this.props;
          if (null == r || null == e || 0 === e.length)
            return (0, n.jsx)(l.Spinner, {
              type: l.Spinner.Type.SPINNING_CIRCLE,
            });
          let c = o.Z.getGuildId(),
            h = d.default.getUser(r),
            g = s.ZP.getNick(c, r),
            f =
              null == h
                ? p.intl.string(p.t.SJmZam)
                : ""
                    .concat(p.intl.string(p.t.SJmZam), " — ")
                    .concat(null != g ? g : u.ZP.getName(h));
          return (0, n.jsx)(l.FormSection, {
            tag: l.FormTitleTags.H2,
            title: f,
            children: (0, m.V)(e, t, a, r, i),
          });
        }
      }
      t.Z = i.ZP.connectStores([c.ZP], (e) => {
        let { context: t, index: r, videoStreams: n } = e,
          a = c.ZP.getAllStats(t)[r],
          { section: i } = (0, c.fZ)(c.ZP.getSection());
        if (null == i) throw Error("Unrecognized section format");
        let l = null;
        if (null != a && null != a.rtp.inbound) {
          var s;
          l = null !== (s = a.rtp.inbound[i]) && void 0 !== s ? s : [];
        }
        return {
          mediaEngineConnectionId:
            null == a ? void 0 : a.mediaEngineConnectionId,
          userId: i,
          streams: l,
          videoStreams: n,
        };
      })(h);
    },
    206314: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return p;
        },
      });
      var n = r(200651),
        a = r(192379),
        i = r(120356),
        l = r.n(i),
        s = r(692547),
        o = r(481060),
        c = r(600164),
        d = r(4912),
        u = r(378481);
      let m = ["firCount", "nackCount"];
      class p extends a.PureComponent {
        renderValueIcon() {
          let { label: e } = this.props;
          return m.includes(e)
            ? (0, n.jsx)(d.Z, {
                color: s.Z.unsafe_rawColors.YELLOW_300.css,
                className: u.valueIcon,
              })
            : null;
        }
        render() {
          let {
            children: e,
            className: t,
            valueRendered: r,
            section: a,
            label: i,
            renderGraph: s,
          } = this.props;
          return (0, n.jsxs)(c.Z, {
            className: l()(u.item, t),
            direction: c.Z.Direction.VERTICAL,
            basis: "50%",
            children: [
              (0, n.jsxs)(c.Z, {
                className: u.kvContainer,
                align: c.Z.Align.START,
                children: [
                  (0, n.jsx)(c.Z.Child, {
                    children: (0, n.jsx)(o.H, {
                      className: u.title,
                      children: e,
                    }),
                  }),
                  Array.isArray(r)
                    ? (0, n.jsx)(c.Z.Child, { grow: 1, children: r })
                    : (0, n.jsxs)(c.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: [
                          this.renderValueIcon(),
                          (0, n.jsx)("span", {
                            className: u.itemValue,
                            title: r,
                            children: r,
                          }),
                        ],
                      }),
                ],
              }),
              null !== s &&
                (0, n.jsx)(
                  c.Z.Child,
                  {
                    className: u.graph,
                    children: (0, n.jsx)(o.FormText, {
                      type: o.FormTextTypes.DESCRIPTION,
                      children: s,
                    }),
                  },
                  null != a ? "".concat(a, "-").concat(i) : i,
                ),
              (0, n.jsx)(o.FormDivider, { className: u.divider }),
            ],
          });
        }
      }
    },
    513547: function (e, t, r) {
      r.d(t, {
        al: function () {
          return D;
        },
        ck: function () {
          return E;
        },
      }),
        r(47120),
        r(653041),
        r(571269),
        r(298267);
      var n = r(200651),
        a = r(192379),
        i = r(112456),
        l = r.n(i),
        s = r(226961),
        o = r(706619),
        c = r(206314);
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
        return l().filesize(e);
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
      function v(e) {
        let { last: t } = e;
        return "".concat(t, " ms");
      }
      let D = {
          audioJitterBuffer: !0,
          audioJitterDelay: !0,
          audioJitterTarget: !0,
          audioPlayoutUnderruns: !0,
          decryptAttempts: !0,
          decryptDuration: !0,
          decryptMissingKeyCount: !0,
          decryptInvalidNonceCount: !0,
          encryptAttempts: !0,
          encryptDuration: !0,
          encryptMaxAttempts: !0,
          encryptMissingKeyCount: !0,
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
        F = {
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
            let { id: t, name: r } = e;
            return (
              (r = null != (r = "" === r ? "unknown" : r) ? r : "unknown"),
              ""
                .concat(r[0].toUpperCase())
                .concat(r.slice(1), " (")
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
          relativePlayoutDelay: v,
          relativeReceptionDelay: v,
          renderDelay: h,
          resolution: (e) => {
            let { width: t, height: r } = e;
            return "".concat(t, "x").concat(r);
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
        S = (e) => e,
        C = (e) => {
          let [t] = a.useState([]);
          return (
            t.push({ value: e.value, time: Date.now() }),
            t.length > 600 && t.shift(),
            (0, n.jsx)(o.Z, { dataPoints: t, width: e.width, height: e.height })
          );
        };
      function E(e) {
        var t, r, a, i;
        let { label: l, value: u, section: m } = e,
          p = null !== (r = F[l]) && void 0 !== r ? r : S;
        let h =
            s.Pz[l] &&
            (Array.isArray((i = u)) &&
            i.length > 0 &&
            "number" == typeof i[0].value
              ? (0, n.jsx)(o.Z, { dataPoints: i, width: 300, height: 100 })
              : "number" == typeof i
                ? (0, n.jsx)(C, { value: i, width: 300, height: 100 })
                : void 0),
          g = Array.isArray(u)
            ? null === (t = u.at(-1)) || void 0 === t
              ? void 0
              : t.value
            : u;
        return (0, n.jsx)(c.Z, {
          label: l,
          valueRendered: p(g),
          section: m,
          renderGraph: h,
          children: null !== (a = d[l]) && void 0 !== a ? a : l,
        });
      }
    },
    724392: function (e, t, r) {
      var n = r(200651),
        a = r(192379),
        i = r(442837),
        l = r(481060),
        s = r(226961),
        o = r(481250),
        c = r(388032);
      class d extends a.PureComponent {
        render() {
          let { outbound: e, context: t } = this.props;
          return null == e
            ? (0, n.jsx)(l.Spinner, { type: l.Spinner.Type.SPINNING_CIRCLE })
            : (0, n.jsx)(l.FormSection, {
                tag: l.FormTitleTags.H2,
                title: c.intl.string(c.t["3u0gIC"]),
                children: (0, o.V)(e, t),
              });
        }
      }
      t.Z = i.ZP.connectStores([s.ZP], (e) => {
        let { context: t, index: r } = e,
          n = s.ZP.getAllStats(t)[r];
        return { outbound: null != n ? n.rtp.outbound : null };
      })(d);
    },
    442580: function (e, t, r) {
      var n = r(200651),
        a = r(192379),
        i = r(392711),
        l = r.n(i),
        s = r(481060),
        o = r(481250),
        c = r(513547),
        d = r(388032);
      class u extends a.PureComponent {
        render() {
          let { screenshare: e } = this.props;
          if (null == e)
            return (0, n.jsx)(s.Spinner, {
              type: s.Spinner.Type.SPINNING_CIRCLE,
            });
          let t = l().map(e, (e, t) => {
            if (!(c.al[t] || void 0 === e))
              return (0, n.jsx)(c.ck, { label: t, value: e }, t);
          });
          return (0, n.jsx)(s.FormSection, {
            tag: s.FormTitleTags.H2,
            title: d.intl.string(d.t["gWbr/f"]),
            children: (0, o.a)(t),
          });
        }
      }
      t.Z = u;
    },
    770800: function (e, t, r) {
      r(571269), r(298267);
      var n = r(200651),
        a = r(192379),
        i = r(392711),
        l = r.n(i),
        s = r(442837),
        o = r(481060),
        c = r(600164),
        d = r(19780),
        u = r(226961),
        m = r(914010),
        p = r(959457),
        h = r(246946),
        g = r(594174),
        f = r(5192),
        y = r(476221),
        v = r(481250),
        D = r(206314),
        F = r(513547),
        S = r(65154),
        C = r(388032),
        E = r(378481),
        Z = r(232186);
      class R extends a.PureComponent {
        render() {
          let {
            transport: e,
            mediaSessionId: t,
            hidePersonalInformation: r,
            hostname: a,
          } = this.props;
          if (null == e)
            return (0, n.jsx)(o.Spinner, {
              type: o.Spinner.Type.SPINNING_CIRCLE,
            });
          let i = { ...e, hostname: a },
            s = l().map(i, (e, t) => {
              if ("receiverReports" !== t && (!r || "localAddress" !== t))
                return (0, n.jsx)(F.ck, { label: t, value: e }, t);
            }),
            d = l().map(i.receiverReports, (e) => {
              let t = Array.isArray(e.bitrate)
                  ? null === (n = e.bitrate.at(-1)) || void 0 === n
                    ? void 0
                    : n.value
                  : e.bitrate,
                r = g.default.getUser(e.id);
              var n,
                a = f.ZP.getNickname(m.Z.getGuildId(), void 0, r);
              return (
                null == a && (a = null != r ? r.username : e.id),
                {
                  displayName: a,
                  bitrate: t / 1e3,
                  lost: (100 * e.fractionLost) / 256,
                }
              );
            }),
            u = l().sortBy(d, (e) => e.displayName),
            p = l().map(u, (e) =>
              (function (e, t, r) {
                let a = (0, n.jsxs)(c.Z, {
                    id: "bitrate-".concat(e),
                    justify: c.Z.Justify.BETWEEN,
                    children: [
                      (0, n.jsx)("span", { children: "Bitrate:" }),
                      (0, n.jsxs)("span", {
                        children: [t.toFixed(2), " Kbps"],
                      }),
                    ],
                  }),
                  i = (0, n.jsxs)(c.Z, {
                    id: "lost-".concat(e),
                    justify: c.Z.Justify.BETWEEN,
                    children: [
                      (0, n.jsx)("span", { children: "Packet Loss:" }),
                      (0, n.jsxs)("span", { children: [r.toFixed(0), "%"] }),
                    ],
                  });
                return (0, n.jsx)(
                  D.Z,
                  { label: e, valueRendered: [a, i], children: e },
                  e,
                );
              })(e.displayName, e.bitrate, e.lost),
            );
          return (0, n.jsxs)(o.FormSection, {
            tag: o.FormTitleTags.H2,
            title: C.intl.string(C.t.wU9INz) + (null != t ? " - " + t : ""),
            className: E.allowSelection,
            children: [
              (0, v.a)(s),
              0 === p.length
                ? null
                : (0, n.jsx)(o.FormDivider, { className: Z.marginBottom20 }),
              (0, v.a)(p),
            ],
          });
        }
      }
      t.Z = s.ZP.connectStores([u.ZP, d.Z, h.Z, p.Z], (e) => {
        let { context: t, index: r } = e,
          n = u.ZP.getAllStats(t)[r],
          a =
            t === S.Yn.STREAM
              ? p.Z.getHostname(p.Z.getActiveStreamKey())
              : d.Z.getHostname();
        return {
          hidePersonalInformation: h.Z.hidePersonalInformation,
          transport: null != n ? n.transport : null,
          mediaSessionId: d.Z.getMediaSessionId(),
          hostname: y.Z.getShortHostname(a),
        };
      })(R);
    },
  },
]);
//# sourceMappingURL=0637650a15e140560365.js.map
