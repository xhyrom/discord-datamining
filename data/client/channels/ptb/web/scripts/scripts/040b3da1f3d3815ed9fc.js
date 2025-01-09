"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57383"],
  {
    484614: function (e, t, r) {
      var n,
        o = r(200651),
        a = r(192379),
        s = r(846519),
        i = r(481060),
        l = r(572004),
        d = r(388032);
      function c(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      class p extends (n = a.PureComponent) {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let { text: e } = this.props,
            { mode: t } = this.state,
            r =
              t === i.CopyInput.Modes.SUCCESS
                ? d.intl.string(d.t["t5VZ8/"])
                : e;
          return (0, o.jsx)(i.CopyInput, {
            ...this.props,
            onCopy: this.handleCopy,
            mode: t,
            text: r,
            supportsCopy: l.wS,
          });
        }
        handleCopy(e) {
          let { onCopy: t, delay: r = 1e3 } = this.props,
            n = (0, l.JG)(e);
          this.setState({
            mode: n ? i.CopyInput.Modes.SUCCESS : i.CopyInput.Modes.ERROR,
          }),
            this._timeout.start(r, () =>
              this.setState({ mode: i.CopyInput.Modes.DEFAULT }),
            ),
            null == t || t(e);
        }
        getVerticalButtonColor(e) {
          switch (e) {
            case i.CopyInput.Modes.SUCCESS:
              return i.Button.Colors.GREEN;
            case i.CopyInput.Modes.ERROR:
              return i.Button.Colors.RED;
            default:
              return i.Button.Colors.BRAND;
          }
        }
        constructor(e) {
          super(e),
            c(this, "_timeout", void 0),
            (this.state = { mode: i.CopyInput.Modes.DEFAULT }),
            (this._timeout = new s.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      c(p, "defaultProps", { delay: 1e3 }), (t.Z = p);
    },
    804127: function (e, t, r) {
      r.d(t, {
        G: function () {
          return i;
        },
        u: function () {
          return s;
        },
      }),
        r(47120);
      var n = r(192379),
        o = r(617136),
        a = r(272008);
      function s(e) {
        let {
            isClaimingReward: t,
            isFetchingRewardCode: r,
            questContent: o,
            quest: s,
            requiresPlatformSelection: i,
            rewardCode: l,
            selectedPlatformType: d,
            preview: c,
          } = e,
          [p, u] = n.useState(!1),
          m = n.useCallback((e, t, r) => {
            u(!1);
            try {
              (0, a.QB)(e, t, r);
            } catch (e) {
              u(!0);
            }
          }, []),
          f = n.useCallback((e) => {
            u(!1);
            try {
              (0, a.pf)(e);
            } catch (e) {
              u(!0);
            }
          }, []);
        return (
          n.useEffect(() => {
            var e, n;
            if (!0 !== c && null == l && !p && !t && !r && !i)
              (null === (e = s.userStatus) || void 0 === e
                ? void 0
                : e.claimedAt) == null && null != d
                ? m(s.id, d, o)
                : (null === (n = s.userStatus) || void 0 === n
                    ? void 0
                    : n.claimedAt) != null && f(s.id);
          }, [m, f, p, t, r, o, s, i, l, d, c]),
          { claimCode: m, fetchCode: f, hasError: p, setHasError: u }
        );
      }
      function i(e) {
        var t;
        let {
            claimCode: r,
            fetchCode: a,
            hasError: s,
            onDismiss: i,
            quest: l,
            questContent: d,
            questContentCTA: c = o.jZ.GET_REWARD_CODE,
            questContentPosition: p,
            requiresPlatformSelection: u,
            selectedPlatformType: m,
          } = e,
          f = (0, o.O5)();
        return n.useCallback(() => {
          var e;
          u && null != m
            ? (r(l.id, m, d),
              f({
                questId: l.id,
                questContent: d,
                questContentCTA: c,
                questContentPosition: p,
              }))
            : s
              ? (null === (e = l.userStatus) || void 0 === e
                  ? void 0
                  : e.claimedAt) != null
                ? a(l.id)
                : null != m &&
                  (r(l.id, m, d),
                  f({
                    questId: l.id,
                    questContent: d,
                    questContentCTA: c,
                    questContentPosition: p,
                  }))
              : i();
        }, [
          r,
          a,
          s,
          i,
          l.id,
          null === (t = l.userStatus) || void 0 === t ? void 0 : t.claimedAt,
          d,
          c,
          p,
          u,
          m,
          f,
        ]);
      }
    },
    985866: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return M;
          },
        }),
        r(47120);
      var n = r(200651),
        o = r(192379),
        a = r(120356),
        s = r.n(a),
        i = r(119617),
        l = r(442837),
        d = r(692547),
        c = r(780384),
        p = r(481060),
        u = r(484614),
        m = r(211266),
        f = r(410030),
        _ = r(607070),
        C = r(530618),
        g = r(454585),
        h = r(246946),
        b = r(572004),
        w = r(302221),
        x = r(617136),
        T = r(113434),
        I = r(569984),
        S = r(497505),
        v = r(918701),
        y = r(804127),
        B = r(566078),
        R = r(617889),
        j = r(652380),
        N = r(644646),
        E = r(78826),
        W = r(46140),
        q = r(675654),
        A = r(388032),
        L = r(993950);
      function P(e) {
        var t;
        let { quest: r, rewardCode: o, hasTieredRewardCodes: a } = e,
          i = (0, c.wj)((0, f.ZP)()),
          l = {
            border: "1px solid ".concat(r.config.colors.primary),
            background:
              "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      "
                .concat(
                  (0, w.aD)(r.config.colors.primary, 0.2),
                  " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ",
                )
                .concat(
                  (0, w.aD)(r.config.colors.primary, 0.6),
                  " 44%,\n      transparent 76%\n    ),\n    ",
                )
                .concat(i ? "var(--black)" : "var(--white)", "\n    "),
          },
          u = (0, R.B)(r, !1),
          m =
            (null === (t = r.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null || null != o,
          { header: _, subHeader: C } = (function (e) {
            var t, r, n, o;
            let { quest: a, rewardCode: s, hasTieredRewardCodes: i } = e,
              l =
                (null === (t = a.userStatus) || void 0 === t
                  ? void 0
                  : t.claimedAt) != null || null != s,
              d = i ? "" : A.intl.string(A.t.UUKbio),
              c = i
                ? (0, v.o9)({
                    quest: a,
                    idx:
                      null !== (n = null == s ? void 0 : s.tier) && void 0 !== n
                        ? n
                        : null === (r = a.userStatus) || void 0 === r
                          ? void 0
                          : r.claimedTier,
                  })
                : null,
              p = B.r.build(a.config),
              u =
                null != c && null !== (o = c.messages.name) && void 0 !== o
                  ? o
                  : p.defaultReward.messages.name,
              m = i ? A.intl.string(A.t.cfY4PD) : p.defaultReward.messages.name;
            return {
              subHeader: l ? A.intl.string(A.t.YpswQk) : d,
              header: l ? u : m,
            };
          })({ quest: r, rewardCode: o, hasTieredRewardCodes: a }),
          { hasError: g, isLoading: h } = (0, E.d7)();
        return (0, n.jsxs)("div", {
          style: l,
          className: L.rewardTile,
          children: [
            (0, n.jsxs)("div", {
              className: L.rewardTileWrapper,
              style: {
                "--custom-reward-tile-border-color": r.config.colors.primary,
              },
              children: [
                h &&
                  !g &&
                  (0, n.jsx)(p.Spinner, {
                    className: L.rewardTileAssetStatusIcon,
                    type: p.SpinnerTypes.SPINNING_CIRCLE,
                  }),
                g &&
                  (0, n.jsx)(p.ImageWarningIcon, {
                    className: L.rewardTileAssetStatusIcon,
                  }),
                (0, n.jsx)(N.Z, {
                  className: s()(L.rewardTileAsset, {
                    [L.rewardTileAssetLoading]: h || g,
                  }),
                  quest: r,
                  questContent: u.trackingCtx.content,
                  location: W.dr.REWARD_CODE_MODAL,
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: L.rewardSubheading,
              children: [
                m &&
                  (0, n.jsx)(p.CheckmarkSmallIcon, {
                    size: "xs",
                    color: d.Z.colors.TEXT_MUTED,
                    className: L.rewardSubheadingIcon,
                  }),
                (0, n.jsx)(p.Text, {
                  variant: "eyebrow",
                  color: "text-muted",
                  className: L.rewardSubheadingText,
                  children: C,
                }),
              ],
            }),
            (0, n.jsx)(p.Heading, {
              variant: "display-sm",
              color: "header-primary",
              className: L.rewardHeading,
              children: _,
            }),
          ],
        });
      }
      function M(e) {
        let t = (0, l.e7)([I.Z], () => I.Z.getQuest(e.questId));
        return (null == t && null != e.previewQuest && (t = e.previewQuest),
        null != t)
          ? (0, n.jsx)(k, { ...e, quest: t, preview: e.preview })
          : null;
      }
      function k(e) {
        var t;
        let {
            transitionState: r,
            onClose: a,
            quest: s,
            location: d,
            questContentPosition: c,
            preview: f,
          } = e,
          w = (0, m.Z)(() => {
            var e;
            return (
              (null === (e = s.userStatus) || void 0 === e
                ? void 0
                : e.claimedAt) != null
            );
          }),
          R = B.r.build(s.config).rewardPlatforms,
          N = R.length > 1,
          [M, k] = o.useState(N ? null : R[0]),
          O = o.useRef(new i.qA()),
          Z = o.useRef(null),
          [D, U] = o.useState(null),
          F = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
          G = (0, l.e7)([h.Z], () => h.Z.hidePersonalInformation),
          {
            questStoreRewardCode: H,
            isFetchingRewardCode: X,
            isClaimingReward: Q,
          } = (0, l.cj)([I.Z], () => ({
            questStoreRewardCode: I.Z.getRewardCode(s.id),
            isFetchingRewardCode: I.Z.isFetchingRewardCode(s.id),
            isClaimingReward: I.Z.isClaimingReward(s.id),
          })),
          z = (0, x.O5)(),
          J = (0, v.oo)({ quest: s }),
          Y = !0 === f ? (0, j.b)(s) : H,
          $ =
            N &&
            (null === (t = s.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) == null &&
            null == Y,
          {
            claimCode: V,
            fetchCode: K,
            hasError: ee,
            setHasError: et,
          } = (0, y.u)({
            isClaimingReward: Q,
            isFetchingRewardCode: X,
            quest: s,
            questContent: d,
            requiresPlatformSelection: $,
            rewardCode: Y,
            selectedPlatformType: M,
            preview: f,
          }),
          er = null;
        w && null != Y
          ? (er = A.intl.string(A.t.srzsU1))
          : null != Y
            ? (er = A.intl.string(A.t.PJBpdX))
            : $ && (er = A.intl.string(A.t.JRU8dn));
        let en =
            null != er
              ? (0, n.jsx)(p.Heading, {
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  className: L.heading,
                  children: er,
                })
              : null,
          eo = (function (e) {
            let {
                quest: t,
                selectedPlatform: r,
                requiresPlatformSelection: o,
                rewardCode: a,
                hasTieredRewardCodes: s,
              } = e,
              i = B.r.build(t.config);
            if (o)
              return (0, n.jsx)(p.Text, {
                variant: "text-sm/normal",
                color: "text-normal",
                className: L.bodyCopy,
                children: s
                  ? A.intl.format(A.t.m0btAQ, {})
                  : A.intl.format(A.t["ZUA/Ul"], {
                      rewardName: i.defaultReward.messages.name,
                    }),
              });
            let l = (0, v.C1)({
              quest: t,
              rewardCode: a,
              selectedPlatformType: r,
              sharedQuestFields: i,
            });
            return null != a && null != l
              ? (0, n.jsx)(p.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  className: L.bodyCopy,
                  children: g.Z.parse(l, !1, { allowLinks: !0 }),
                })
              : null;
          })({
            quest: s,
            selectedPlatform: M,
            requiresPlatformSelection: $,
            rewardCode: Y,
            hasTieredRewardCodes: J,
          }),
          ea = o.useMemo(
            () => R.map((e) => ({ label: (0, v.t2)(e), value: e })),
            [R],
          ),
          es = null;
        $ &&
          (es = (0, n.jsxs)(p.FormItem, {
            title: A.intl.string(A.t.vVcTtL),
            children: [
              (0, n.jsx)(p.Select, {
                placeholder: A.intl.string(A.t.EMrUHR),
                options: ea,
                select: (e) => {
                  et(!1), k(e);
                },
                isSelected: (e) => e === M,
                serialize: (e) => (0, v.t2)(e),
                className: ee ? L.errorInput : "",
                isDisabled: Q,
                renderOptionLabel: (e) => {
                  let t = (function (e) {
                    switch (e) {
                      case S.y$.CROSS_PLATFORM:
                        return (0, n.jsx)(p.ScienceIcon, {
                          className: L.platformSelectionOptionIcon,
                        });
                      case S.y$.PC:
                        return (0, n.jsx)(p.ScreenIcon, {
                          className: L.platformSelectionOptionIcon,
                        });
                      case S.y$.PLAYSTATION:
                        return (0, n.jsx)(p.PlaystationNeutralIcon, {
                          className: L.platformSelectionOptionIcon,
                        });
                      case S.y$.SWITCH:
                        return (0, n.jsx)(p.NintendoSwitchNeutralIcon, {
                          className: L.platformSelectionOptionIcon,
                        });
                      case S.y$.XBOX:
                        return (0, n.jsx)(p.XboxNeutralIcon, {
                          className: L.platformSelectionOptionIcon,
                        });
                    }
                  })(e.value);
                  return (0, n.jsxs)("div", {
                    className: L.platformSelectionOptionLabelContainer,
                    children: [t, e.label],
                  });
                },
              }),
              ee
                ? (0, n.jsx)(p.InputError, { error: A.intl.string(A.t.rbZBMT) })
                : null,
            ],
          }));
        let ei = null == Y && (X || Q),
          el = ei && !$ ? (0, n.jsx)(p.Spinner, {}) : null,
          ed = null;
        null != Y
          ? (ed = (0, n.jsx)(p.FormItem, {
              title: A.intl.string(A.t.srzsU1),
              children: (0, n.jsx)(u.Z, {
                value: G ? A.intl.string(A.t["0n2u0t"]) : Y.code,
                delay: 1e3,
                buttonColor: p.Button.Colors.BRAND,
                onCopy: () => {
                  G && (0, b.JG)(Y.code),
                    z({
                      questId: s.id,
                      questContent: d,
                      questContentPosition: c,
                      questContentCTA: x.jZ.COPY_REWARD_CODE,
                    });
                },
              }),
            }))
          : ee &&
            !$ &&
            (ed = (0, n.jsx)(p.FormItem, {
              title: A.intl.string(A.t.srzsU1),
              children: (0, n.jsx)(p.TextInput, {
                disabled: !0,
                error: A.intl.string(A.t.rbZBMT),
                inputClassName: L.errorInput,
              }),
            }));
        let ec = (0, y.G)({
            claimCode: V,
            fetchCode: K,
            hasError: ee,
            onDismiss: a,
            quest: s,
            questContent: d,
            questContentPosition: c,
            requiresPlatformSelection: $,
            selectedPlatformType: M,
          }),
          ep = $ && Q,
          eu = !ep && (($ && null == M) || ei),
          em = A.intl.string(A.t["23SS+/"]);
        $
          ? (em = A.intl.string(A.t.SLZMi4))
          : !$ && ee && (em = A.intl.string(A.t.gNJHHh));
        let ef = !F && null != Y && !w && !ee,
          e_ = null != el && J,
          eC = (0, T.Gd)(s.id);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(i.O_, {
              ref: U,
              className: L.confettiCanvas,
              environment: O.current,
            }),
            (0, n.jsx)("div", {
              ref: Z,
              children: (0, n.jsxs)(p.ModalRoot, {
                transitionState: r,
                size: p.ModalSize.DYNAMIC,
                children: [
                  (0, n.jsxs)("div", {
                    className: L.modalBody,
                    children: [
                      (0, n.jsx)(p.ModalCloseButton, {
                        className: L.closeButton,
                        onClick: () => a(),
                      }),
                      !e_ &&
                        (0, n.jsx)(E.p, {
                          source: W.dr.REWARD_CODE_MODAL,
                          questId: s.id,
                          children: (0, n.jsx)(P, {
                            quest: s,
                            rewardCode: Y,
                            hasTieredRewardCodes: J,
                          }),
                        }),
                      (0, n.jsxs)("div", {
                        className: L.modalContent,
                        children: [
                          en,
                          eo,
                          es,
                          el,
                          ed,
                          null != s.config.cosponsorMetadata &&
                            null != eC &&
                            (0, n.jsxs)("div", {
                              className: L.cosponsorFooter,
                              children: [
                                (0, n.jsx)("img", {
                                  className: L.cosponsorLogotype,
                                  alt: s.config.cosponsorMetadata.name,
                                  src: eC.url,
                                }),
                                (0, n.jsx)(p.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  className: L.cosponsorName,
                                  children: A.intl.format(A.t.CSf4ER, {
                                    cosponsorName:
                                      s.config.cosponsorMetadata.name,
                                  }),
                                }),
                                (0, n.jsx)(p.Text, {
                                  variant: "text-md/normal",
                                  color: "text-normal",
                                  className: L.cosponsorRedemptionInstructions,
                                  children: g.Z.parse(
                                    s.config.cosponsorMetadata
                                      .redemptionInstructions,
                                    !1,
                                    { allowLinks: !0 },
                                  ),
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(p.ModalFooter, {
                    children: (0, n.jsx)(p.Button, {
                      onClick: ec,
                      submitting: ep,
                      disabled: eu,
                      children: em,
                    }),
                  }),
                ],
              }),
            }),
            ef &&
              (0, n.jsx)(C.Z, {
                confettiTarget: Z.current,
                confettiCanvas: D,
                sprites: q.CA,
                colors: q.Br,
              }),
          ],
        });
      }
    },
    14943: function (e, t, r) {
      e.exports = {
        fileUploadButton: "fileUploadButton_aef0dd",
        fileUpload: "fileUpload_aef0dd " + r("921382").container,
        fileUploadInput: "fileUploadInput_aef0dd " + r("921382").input,
      };
    },
    806145: function (e, t, r) {
      e.exports = {
        partnerBranding: "partnerBranding_fc6f68",
        partnerBrandingGameTile: "partnerBrandingGameTile_fc6f68",
        partnerBrandingLogotype: "partnerBrandingLogotype_fc6f68",
        partnerBrandingLogotypeWithCosponsor:
          "partnerBrandingLogotypeWithCosponsor_fc6f68",
        cosponsorBrandSeparatorWrapper: "cosponsorBrandSeparatorWrapper_fc6f68",
        cosponsorBrandSeparator: "cosponsorBrandSeparator_fc6f68",
      };
    },
    102787: function (e, t, r) {
      e.exports = {
        heading: "heading_e92711",
        subheading: "subheading_e92711",
        componentPreviews: "componentPreviews_e92711",
        componentPreviewWrapper: "componentPreviewWrapper_e92711",
        componentPreviewWrapperBordered:
          "componentPreviewWrapperBordered_e92711",
        componentPreview: "componentPreview_e92711",
        questBarPreviewWrapper: "questBarPreviewWrapper_e92711",
        questBarPreview: "questBarPreview_e92711",
        questChannelCallHeaderPreview: "questChannelCallHeaderPreview_e92711",
        toggleSwitch: "toggleSwitch_e92711",
        fields: "fields_e92711",
        swatchContainer: "swatchContainer_e92711",
        swatchIcon: "swatchIcon_e92711",
        errorBoundary: "errorBoundary_e92711",
        errorBoundaryIcon: "errorBoundaryIcon_e92711",
        headingWithTooltip: "headingWithTooltip_e92711",
        errorMessageWrapper: "errorMessageWrapper_e92711",
        errorMessage: "errorMessage_e92711",
        questTile: "questTile_e92711",
      };
    },
    416457: function (e, t, r) {
      e.exports = { taskPresetSelect: "taskPresetSelect_eb7367" };
    },
    355533: function (e, t, r) {
      e.exports = {
        wrapper: "wrapper_d572e7",
        percentCompleteWrapper: "percentCompleteWrapper_d572e7",
        percentCompleteLabel: "percentCompleteLabel_d572e7",
        progressBar: "progressBar_d572e7",
        progressBarFill: "progressBarFill_d572e7",
        percentCompleteLabelOffset: "percentCompleteLabelOffset_d572e7",
      };
    },
    973395: function (e, t, r) {
      e.exports = {
        promotedTag: "promotedTag_a4a2b0",
        promotedTagBackground: "promotedTagBackground_a4a2b0",
      };
    },
    882924: function (e, t, r) {
      e.exports = {
        container: "container_fc06b0",
        info: "info_fc06b0",
        header: "header_fc06b0",
        headerIcon: "headerIcon_fc06b0",
        warning: "warning_fc06b0",
        danger: "danger_fc06b0",
        cta: "cta_fc06b0",
        ctaInner: "ctaInner_fc06b0",
        refreshIcon: "refreshIcon_fc06b0",
        inFlight: "inFlight_fc06b0",
      };
    },
    451938: function (e, t, r) {
      e.exports = { questsCard: "questsCard_c366aa" };
    },
    441347: function (e, t, r) {
      e.exports = {
        outerContainer: "outerContainer_d7df05",
        outerContainerNoProgress: "outerContainerNoProgress_d7df05",
        outerContainerSm: "outerContainerSm_d7df05",
        outerContainerXs: "outerContainerXs_d7df05",
        gridImg: "gridImg_d7df05",
        gridText: "gridText_d7df05",
        gridCtaButtons: "gridCtaButtons_d7df05",
        gridProgressBar: "gridProgressBar_d7df05",
        questRewardGiftInventory: "questRewardGiftInventory_d7df05",
        questRewardEmbed: "questRewardEmbed_d7df05",
        questRewardEmbedSm: "questRewardEmbedSm_d7df05",
        questRewardEmbedXs: "questRewardEmbedXs_d7df05",
        taskDetails: "taskDetails_d7df05",
        taskInstructions: "taskInstructions_d7df05",
        ctaButtonContainer: "ctaButtonContainer_d7df05",
        ctaButtonWrapper: "ctaButtonWrapper_d7df05",
        ctaButtonInner: "ctaButtonInner_d7df05",
        learnMoreLink: "learnMoreLink_d7df05",
        ctaTooltipText: "ctaTooltipText_d7df05",
        root: "root_d7df05",
        rewardTileWrapper: "rewardTileWrapper_d7df05",
        rewardTileExpired: "rewardTileExpired_d7df05",
        rewardTileExpirationTooltip: "rewardTileExpirationTooltip_d7df05",
        separator: "separator_d7df05",
        microphoneContainer: "microphoneContainer_d7df05",
      };
    },
    747028: function (e, t, r) {
      e.exports = {
        outerContainer: "outerContainer_af8856",
        outerContainerGiftInventory: "outerContainerGiftInventory_af8856",
        outerContainerEmbed: "outerContainerEmbed_af8856",
        questSplash: "questSplash_af8856",
        header: "header_af8856",
        outerContainerXs: "outerContainerXs_af8856",
        headerContent: "headerContent_af8856",
        headerContentEmbed: "headerContentEmbed_af8856",
        headerExpandedContent: "headerExpandedContent_af8856",
        headerExpandedWrapper: "headerExpandedWrapper_af8856",
        headerCollapsedContent: "headerCollapsedContent_af8856",
        headerCollapsedClickableContainer:
          "headerCollapsedClickableContainer_af8856",
        headerCollapsedContentRewardWrapper:
          "headerCollapsedContentRewardWrapper_af8856",
        headerCollapsedRewardTile: "headerCollapsedRewardTile_af8856",
        headerCollapsedContentCopyWrapper:
          "headerCollapsedContentCopyWrapper_af8856",
        headerCollapsedContentCopyLogos:
          "headerCollapsedContentCopyLogos_af8856",
        iconLogotypeContainer: "iconLogotypeContainer_af8856",
        partnerBranding: "partnerBranding_af8856",
        partnerBrandingLogotypes: "partnerBrandingLogotypes_af8856",
        questInfo: "questInfo_af8856",
        heading: "heading_af8856",
        iconsContainer: "iconsContainer_af8856",
        iconWrapper: "iconWrapper_af8856",
        shareButton: "shareButton_af8856",
      };
    },
    443763: function (e, t, r) {
      e.exports = { questsCollectibleReward: "questsCollectibleReward_c76d5b" };
    },
    815405: function (e, t, r) {
      e.exports = {
        wrapper: "wrapper_b9619e",
        wrapperAccepted: "wrapperAccepted_b9619e",
        rewardTileWrapper: "rewardTileWrapper_b9619e",
        rewardTile: "rewardTile_b9619e",
        heading: "heading_b9619e",
        promotedTag: "promotedTag_b9619e",
        content: "content_b9619e",
        headingWithSubmenu: "headingWithSubmenu_b9619e",
        questTitle: "questTitle_b9619e",
        gameTile: "gameTile_b9619e",
        ctas: "ctas_b9619e",
        cta: "cta_b9619e",
        submenuWrapper: "submenuWrapper_b9619e",
        submenuIcon: "submenuIcon_b9619e",
      };
    },
    625838: function (e, t, r) {
      e.exports = {
        container: "container_e97a06",
        wide: "wide_e97a06",
        tall: "tall_e97a06",
        contentContainer: "contentContainer_e97a06",
        buttonContainer: "buttonContainer_e97a06",
        button: "button_e97a06",
        imgContainer: "imgContainer_e97a06",
        missingQuestImage: "missingQuestImage_e97a06",
      };
    },
    281300: function (e, t, r) {
      e.exports = {
        desktopTooltip: "desktopTooltip_a9b354",
        infoIcon: "infoIcon_a9b354",
      };
    },
    993950: function (e, t, r) {
      e.exports = {
        modalBody: "modalBody_c631eb",
        modalContent: "modalContent_c631eb",
        closeButton: "closeButton_c631eb",
        heading: "heading_c631eb",
        bodyCopy: "bodyCopy_c631eb",
        errorInput: "errorInput_c631eb",
        rewardTile: "rewardTile_c631eb",
        rewardTileWrapper: "rewardTileWrapper_c631eb",
        rewardTileAsset: "rewardTileAsset_c631eb",
        rewardTileAssetLoading: "rewardTileAssetLoading_c631eb",
        rewardTileAssetStatusIcon: "rewardTileAssetStatusIcon_c631eb",
        rewardSubheading: "rewardSubheading_c631eb",
        rewardHeading: "rewardHeading_c631eb",
        rewardSubheadingText: "rewardSubheadingText_c631eb",
        rewardSubheadingIcon: "rewardSubheadingIcon_c631eb",
        platformSelectionOptionLabelContainer:
          "platformSelectionOptionLabelContainer_c631eb",
        platformSelectionOptionIcon: "platformSelectionOptionIcon_c631eb",
        confettiCanvas: "confettiCanvas_c631eb",
        cosponsorFooter: "cosponsorFooter_c631eb",
        cosponsorLogotype: "cosponsorLogotype_c631eb",
        cosponsorName: "cosponsorName_c631eb",
        cosponsorRedemptionInstructions:
          "cosponsorRedemptionInstructions_c631eb",
      };
    },
    56233: function (e, t, r) {
      e.exports = {
        wrapper: "wrapper_c34599",
        instructions: "instructions_c34599",
        rewardTile: "rewardTile_c34599",
      };
    },
    921382: function (e, t, r) {
      r.r(
        (e.exports = {
          container: "container_c67e31",
          layout: "layout_c67e31",
          base: "base_c67e31",
          hiddenMessage: "hiddenMessage_c67e31 base_c67e31",
          input: "input_c67e31 base_c67e31",
          button: "button_c67e31",
          disabled: "disabled_c67e31",
        }),
      );
    },
  },
]);
//# sourceMappingURL=040b3da1f3d3815ed9fc.js.map
