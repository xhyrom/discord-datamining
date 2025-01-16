"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94204"],
  {
    796111: function (e, n, t) {
      t.d(n, {
        P: function () {
          return r;
        },
      });
      let o = (0, t(818083).B)({
          id: "2024-06_quest_inline_console_connection",
          kind: "user",
          label: "Quest Inline Console Connection Experiment",
          defaultConfig: { enabled: !1 },
          treatments: [
            {
              id: 0,
              label: "Simplified console connection flow",
              config: { enabled: !1 },
            },
            {
              id: 1,
              label: "Inline console connection flow",
              config: { enabled: !0 },
            },
          ],
        }),
        r = (e) => {
          let { location: n, autoTrackExposure: t = !1 } = e,
            { enabled: r } = o.useExperiment(
              { location: n },
              { autoTrackExposure: t },
            );
          return r;
        };
    },
    164495: function (e, n, t) {
      t.d(n, {
        i0: function () {
          return x;
        },
        yD: function () {
          return h;
        },
      });
      var o = t(200651);
      t(192379);
      var r = t(120356),
        c = t.n(r),
        a = t(481060),
        i = t(617136),
        s = t(915750),
        l = t(497505),
        d = t(918701),
        f = t(796111),
        u = t(667105),
        p = t(341907),
        _ = t(604162),
        C = t(46140),
        v = t(388032),
        g = t(977174);
      function B(e) {
        let { quest: n, taskDetails: t } = e;
        return (0, o.jsx)(a.Button, {
          className: g.cta,
          color: a.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: () => {
            (0, p.openVideoQuestModal)(n);
          },
          size: a.Button.Sizes.SMALL,
          children: (0, _.F9)(t),
        });
      }
      let m = (e) => {
          let { quest: n } = e,
            t = (0, s.aM)();
          return (0, o.jsx)(a.Button, {
            className: g.cta,
            size: a.Button.Sizes.SMALL,
            onClick: () =>
              (0, d.FE)(n, {
                content: l.jn.QUEST_BAR_V2,
                ctaContent: i.jZ.OPEN_GAME_LINK,
                impressionId: t,
              }),
            children: (0, d.pO)(n)
              ? v.intl.string(v.t.hvVgAQ)
              : v.intl.string(v.t.lwQdjI),
          });
        },
        S = (e) => {
          var n;
          let { quest: t } = e,
            r = null === (n = (0, s.WD)()) || void 0 === n ? void 0 : n.getId();
          return (0, o.jsx)(a.Button, {
            fullWidth: !0,
            className: g.cta,
            onClick: () =>
              (0, d.gI)(
                { quest: t },
                {
                  content: l.jn.QUEST_BAR_V2,
                  ctaContent: i.jZ.CONNECT_CONSOLE,
                  impressionId: r,
                },
              ),
            size: a.Button.Sizes.SMALL,
            children: v.intl.string(v.t.csptqa),
          });
        },
        x = (e) => {
          let {
              quest: n,
              useReducedMotion: t,
              isExpanded: r,
              className: i,
              ctaLabel: s,
              ...d
            } = e,
            f = (0, u.hf)({ quest: n, location: l.jn.QUEST_BAR_V2 });
          return (0, o.jsx)(a.ShinyButton, {
            fullWidth: !0,
            size: a.Button.Sizes.SMALL,
            onClick: f,
            pauseAnimation: t || !r,
            className: c()(g.cta, i),
            buttonShineClassName: g.shine,
            ...d,
            children: null != s ? s : v.intl.string(v.t.cfY4PD),
          });
        },
        b = (e) => {
          var n;
          let {
              quest: t,
              useReducedMotion: r,
              isExpanded: c,
              awaitingConsoleConnections: a,
              hasMadeProgress: i,
              isProgressing: s,
              activeScreen: u,
              taskDetails: p,
            } = e,
            _ =
              (null === (n = t.userStatus) || void 0 === n
                ? void 0
                : n.completedAt) != null,
            v = (0, f.P)({ location: C.dr.QUESTS_BAR }),
            g = (0, d.q8)(t);
          if (_)
            return (0, o.jsx)(x, {
              quest: t,
              useReducedMotion: r,
              isExpanded: c,
            });
          if (g) return (0, o.jsx)(B, { quest: t, taskDetails: p });
          if (u === l.LI.CONSOLE && a && !v) return (0, o.jsx)(S, { quest: t });
          else if (u !== l.LI.SELECT && !i && !s)
            return (0, o.jsx)(m, { quest: t });
          return null;
        };
      function h(e) {
        return (0, o.jsxs)("div", {
          className: g.ctaButtons,
          children: [
            e.showBackButton &&
              (0, o.jsx)(a.Button, {
                className: g.backButton,
                innerClassName: g.backButtonInner,
                look: "blank",
                grow: !1,
                fullWidth: !1,
                size: "none",
                onClick: e.onBack,
                children: (0, o.jsx)(a.ChevronSmallLeftIcon, {
                  className: g.backIcon,
                }),
              }),
            (0, o.jsx)(b, { ...e }),
          ],
        });
      }
    },
    472144: function (e, n, t) {
      var o = t(200651),
        r = t(192379),
        c = t(120356),
        a = t.n(c),
        i = t(476183),
        s = t(481060),
        l = t(569379),
        d = t(642145),
        f = t(793436);
      n.Z = r.forwardRef((e, n) => {
        let {
            quest: t,
            percentComplete: r,
            size: c = 42,
            strokeWidth: u = 3,
            glowBlur: p = 0.4,
            percentCompleteText: _,
            percentCompleteTextVariant: C = "text-lg/medium",
            children: v,
          } = e,
          g = (0, l.E)(t, r > 0),
          B = c / 2,
          m = c / 2 - u / 2,
          S = 2 * Math.PI * m,
          x = S - r * S,
          b = {
            strokeDasharray: "".concat(S, " ").concat(S),
            strokeDashoffset: x,
          },
          h = {
            strokeDasharray: "".concat(S, " ").concat(S),
            strokeDashoffset: -r * S,
          },
          y = { boxShadow: "0 0 30px 0px ".concat(g.glow) },
          { progressTextAnimation: T } = (0, s.useSpring)({
            progressTextAnimation: null != _ && 1 !== r ? 1 : 0,
            config: d.Y,
          });
        return (0, o.jsxs)("div", {
          className: f.outer,
          ref: n,
          children: [
            (0, o.jsxs)("div", {
              className: f.inner,
              style: y,
              children: [
                v,
                (0, o.jsxs)(i.animated.div, {
                  style: { opacity: T },
                  className: a()(f.coverContent, f.progressTextWrapper),
                  children: [
                    (0, o.jsx)("div", {
                      className: a()(f.coverContent, f.progressTextOverlay),
                    }),
                    (0, o.jsx)(s.Text, {
                      variant: C,
                      color: "text-primary",
                      className: f.progressText,
                      children: _,
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsxs)("svg", {
              className: f.progressBar,
              height: c,
              width: c,
              children: [
                (0, o.jsxs)("defs", {
                  children: [
                    (0, o.jsxs)("filter", {
                      id: "glow",
                      children: [
                        (0, o.jsx)("feGaussianBlur", {
                          result: "coloredBlur",
                          stdDeviation: p,
                        }),
                        (0, o.jsxs)("feMerge", {
                          children: [
                            (0, o.jsx)("feMergeNode", { in: "coloredBlur" }),
                            (0, o.jsx)("feMergeNode", { in: "coloredBlur" }),
                            (0, o.jsx)("feMergeNode", { in: "coloredBlur" }),
                            (0, o.jsx)("feMergeNode", { in: "SourceGraphic" }),
                          ],
                        }),
                      ],
                    }),
                    (0, o.jsxs)("linearGradient", {
                      id: "linear",
                      x1: "100%",
                      y1: "0%",
                      x2: "0%",
                      y2: "0%",
                      children: [
                        (0, o.jsx)("stop", {
                          offset: "0%",
                          stopColor: g.backgroundTop,
                        }),
                        (0, o.jsx)("stop", {
                          offset: "100%",
                          stopColor: g.backgroundBottom,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsx)("circle", {
                  className: f.progress,
                  strokeWidth: u,
                  fill: "transparent",
                  r: m,
                  cx: B,
                  cy: B,
                  stroke: "url(#linear)",
                  style: h,
                }),
                (0, o.jsx)("circle", {
                  className: f.progress,
                  strokeWidth: u,
                  fill: "transparent",
                  r: m,
                  cx: B,
                  cy: B,
                  stroke: g.foreground,
                  style: b,
                }),
              ],
            }),
          ],
        });
      });
    },
    569379: function (e, n, t) {
      t.d(n, {
        E: function () {
          return s;
        },
        G: function () {
          return i;
        },
      }),
        t(47120);
      var o = t(192379),
        r = t(481060),
        c = t(410030),
        a = t(113434);
      function i() {
        let [{ spring: e }, n] = (0, r.useSpring)(
          () => ({ spring: 0 }),
          "animate-always",
        );
        return {
          completionSpring: e,
          startCompletionAnimation: o.useCallback(() => {
            n({ spring: 1 }), n({ spring: 0, delay: 2e3 });
          }, [n]),
        };
      }
      function s(e, n) {
        var t;
        let o = (0, a.z)(e),
          r = null !== (t = (0, c.i6)()) && void 0 !== t ? t : 0,
          i = "var(--green-330)",
          s = ["var(--background-tertiary)", "var(--interactive-normal)"],
          l = n ? s[r] : ["#828288", "#CBCDD4"][r];
        return {
          backgroundTop: l,
          backgroundBottom: n ? s[r] : ["#535356", "#8B8C95"][r],
          foreground: i,
          glow: n && o ? i : "#C4C1D66E",
        };
      }
    },
    642145: function (e, n, t) {
      t.d(n, {
        Y: function () {
          return o;
        },
      });
      let o = { tension: 250, friction: 20 };
    },
    977174: function (e, n, t) {
      e.exports = {
        ctaButtons: "ctaButtons_e60321",
        cta: "cta_e60321",
        shine: "shine_e60321",
        backButton: "backButton_e60321",
        backButtonInner: "backButtonInner_e60321",
        backIcon: "backIcon_e60321",
      };
    },
    793436: function (e, n, t) {
      e.exports = {
        outer: "outer_df6b25",
        progressBar: "progressBar_df6b25",
        progress: "progress_df6b25",
        inner: "inner_df6b25",
        coverContent: "coverContent_df6b25",
        progressTextWrapper: "progressTextWrapper_df6b25",
        progressTextOverlay: "progressTextOverlay_df6b25",
        progressText: "progressText_df6b25",
      };
    },
    835153: function (e, n, t) {
      e.exports = {
        endScreenOverlay: "endScreenOverlay_c962f1",
        endScreenImageBackground: "endScreenImageBackground_c962f1",
        endScreenContainer: "endScreenContainer_c962f1",
        endScreenCard: "endScreenCard_c962f1",
        endScreenCtaContainer: "endScreenCtaContainer_c962f1",
        endScreenCtaTitleContainer: "endScreenCtaTitleContainer_c962f1",
        endScreenCtaTitle: "endScreenCtaTitle_c962f1",
        endScreenCtaBtnTitle: "endScreenCtaBtnTitle_c962f1",
        endScreenCtaSubtitle: "endScreenCtaSubtitle_c962f1",
        endScreenCtaBtn: "endScreenCtaBtn_c962f1",
        accentOnHover: "accentOnHover_c962f1",
        endScreenIcon: "endScreenIcon_c962f1",
      };
    },
    451680: function (e, n, t) {
      e.exports = {
        modalRoot: "modalRoot_c73f92",
        modalBody: "modalBody_c73f92",
        modalBg: "modalBg_c73f92",
        modalContent: "modalContent_c73f92",
        videoCont: "videoCont_c73f92",
        videoContInnerRelative: "videoContInnerRelative_c73f92",
        videoContOverlay: "videoContOverlay_c73f92",
        hidden: "hidden_c73f92",
        videoInner: "videoInner_c73f92",
        videoFooterCont: "videoFooterCont_c73f92",
        videoFooterContGradient: "videoFooterContGradient_c73f92",
        videoControlsCont: "videoControlsCont_c73f92",
        videoControlsGroup: "videoControlsGroup_c73f92",
        videoControlsGroupMid: "videoControlsGroupMid_c73f92",
        videoControlsGroupEnd: "videoControlsGroupEnd_c73f92",
        videoControlsBtnCont: "videoControlsBtnCont_c73f92",
        videoControlsBtn: "videoControlsBtn_c73f92",
        videoControlsBtnContDisabled: "videoControlsBtnContDisabled_c73f92",
        videoControlsBtnTooltip: "videoControlsBtnTooltip_c73f92",
        videoControlsBtnTooltipKeyCombo:
          "videoControlsBtnTooltipKeyCombo_c73f92",
        volumeControlGroup: "volumeControlGroup_c73f92",
        controlsBarItem: "controlsBarItem_c73f92",
        controlsBarItemActive: "controlsBarItemActive_c73f92",
        durationTimeWrapper: "durationTimeWrapper_c73f92",
        durationTimeSeparator: "durationTimeSeparator_c73f92",
        durationTimeDisplay: "durationTimeDisplay_c73f92",
        volumeSlider: "volumeSlider_c73f92",
        contentHeader: "contentHeader_c73f92",
        contentHeaderGameInfo: "contentHeaderGameInfo_c73f92",
        contentHeaderLogotype: "contentHeaderLogotype_c73f92",
        accentOnHover: "accentOnHover_c73f92",
        questHeading: "questHeading_c73f92",
        contentFooter: "contentFooter_c73f92",
        contentFooterButtonCont: "contentFooterButtonCont_c73f92",
        claimBtn: "claimBtn_c73f92",
        progressCont: "progressCont_c73f92",
        questProgressRewardTile: "questProgressRewardTile_c73f92",
        transcriptOverlay: "transcriptOverlay_c73f92",
        transcriptCont: "transcriptCont_c73f92",
        transcriptScroller: "transcriptScroller_c73f92",
        transcriptBackBtn: "transcriptBackBtn_c73f92",
        transcriptHeader: "transcriptHeader_c73f92",
        transcriptBody: "transcriptBody_c73f92",
        stillFrameImageCard: "stillFrameImageCard_c73f92",
        stillFrameImageCardHidden: "stillFrameImageCardHidden_c73f92",
        endScreenPanel: "endScreenPanel_c73f92",
        endScreenPanelInner: "endScreenPanelInner_c73f92",
        endScreenPanelTextCont: "endScreenPanelTextCont_c73f92",
        endScreenPanelTextTitle: "endScreenPanelTextTitle_c73f92",
        endScreenPanelTextSubtitle: "endScreenPanelTextSubtitle_c73f92",
        endScreenPanelRight: "endScreenPanelRight_c73f92",
        endScreenIcon: "endScreenIcon_c73f92",
        verticalDivider: "verticalDivider_c73f92",
        loadingSpinner: "loadingSpinner_c73f92",
        captionContainer: "captionContainer_c73f92",
        captionText: "captionText_c73f92",
        playPausePopCont: "playPausePopCont_c73f92",
        playPausePopIcon: "playPausePopIcon_c73f92",
        play: "play_c73f92",
        pause: "pause_c73f92",
        transcriptBodySpinner: "transcriptBodySpinner_c73f92",
        pauseText: "pauseText_c73f92",
        copyLinkBtn: "copyLinkBtn_c73f92",
      };
    },
    452973: function (e, n, t) {
      e.exports = {
        cont: "cont_cdc1bf",
        hitboxArea: "hitboxArea_cdc1bf",
        interactionEnabled: "interactionEnabled_cdc1bf",
        progress: "progress_cdc1bf",
        progressGlow: "progressGlow_cdc1bf",
        buffer: "buffer_cdc1bf",
        seekableBar: "seekableBar_cdc1bf",
        bufferHovered: "bufferHovered_cdc1bf",
        timeDisplay: "timeDisplay_cdc1bf",
        grabber: "grabber_cdc1bf",
      };
    },
  },
]);
//# sourceMappingURL=14dfcd1f5c30d0eee1ba.js.map
