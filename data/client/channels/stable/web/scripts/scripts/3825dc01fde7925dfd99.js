"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["71740"],
  {
    484614: function (e, t, n) {
      var r,
        o = n(200651),
        a = n(192379),
        s = n(120356),
        i = n.n(s),
        l = n(846519),
        d = n(481060),
        c = n(572004),
        u = n(388032),
        p = n(681130);
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
      class f extends (r = a.PureComponent) {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let {
              isVertical: e,
              value: t,
              text: n,
              className: r,
              inputClassName: a,
            } = this.props,
            { mode: s } = this.state,
            l =
              s === d.CopyInput.Modes.SUCCESS
                ? u.intl.string(u.t["t5VZ8/"])
                : n;
          return e
            ? (0, o.jsxs)("div", {
                className: i()(r, s),
                children: [
                  (0, o.jsx)(d.TextInput, { value: t, inputClassName: a }),
                  (0, o.jsx)(d.Button, {
                    className: p.button,
                    onClick: this.handleCopy,
                    size: d.Button.Sizes.MIN,
                    color: this.getVerticalButtonColor(s),
                    look: d.Button.Looks.FILLED,
                    children: l,
                  }),
                ],
              })
            : (0, o.jsx)(d.CopyInput, {
                ...this.props,
                onCopy: this.handleCopy,
                mode: s,
                text: l,
              });
        }
        handleCopy() {
          let { onCopy: e, value: t, delay: n } = this.props,
            r = (0, c.JG)(t);
          this.setState({
            mode: r ? d.CopyInput.Modes.SUCCESS : d.CopyInput.Modes.ERROR,
          }),
            this._timeout.start(n, () =>
              this.setState({ mode: d.CopyInput.Modes.DEFAULT }),
            ),
            null == e || e();
        }
        getVerticalButtonColor(e) {
          switch (e) {
            case d.CopyInput.Modes.SUCCESS:
              return d.Button.Colors.GREEN;
            case d.CopyInput.Modes.ERROR:
              return d.Button.Colors.RED;
            default:
              return d.Button.Colors.BRAND;
          }
        }
        constructor(e) {
          super(e),
            m(this, "_timeout", void 0),
            (this.state = { mode: d.CopyInput.Modes.DEFAULT }),
            (this._timeout = new l.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      m(f, "defaultProps", { isVertical: !1, delay: 300 }), (t.Z = f);
    },
    804127: function (e, t, n) {
      n.d(t, {
        G: function () {
          return i;
        },
        u: function () {
          return s;
        },
      }),
        n(47120);
      var r = n(192379),
        o = n(617136),
        a = n(272008);
      function s(e) {
        let {
            isClaimingReward: t,
            isFetchingRewardCode: n,
            questContent: o,
            quest: s,
            requiresPlatformSelection: i,
            rewardCode: l,
            selectedPlatformType: d,
            preview: c,
          } = e,
          [u, p] = r.useState(!1),
          m = r.useCallback((e, t, n) => {
            p(!1);
            try {
              (0, a.QB)(e, t, n);
            } catch (e) {
              p(!0);
            }
          }, []),
          f = r.useCallback((e) => {
            p(!1);
            try {
              (0, a.pf)(e);
            } catch (e) {
              p(!0);
            }
          }, []);
        return (
          r.useEffect(() => {
            var e, r;
            if (!0 !== c && null == l && !u && !t && !n && !i)
              (null === (e = s.userStatus) || void 0 === e
                ? void 0
                : e.claimedAt) == null && null != d
                ? m(s.id, d, o)
                : (null === (r = s.userStatus) || void 0 === r
                    ? void 0
                    : r.claimedAt) != null && f(s.id);
          }, [m, f, u, t, n, o, s, i, l, d, c]),
          { claimCode: m, fetchCode: f, hasError: u, setHasError: p }
        );
      }
      function i(e) {
        let {
          claimCode: t,
          fetchCode: n,
          hasError: a,
          onDismiss: s,
          quest: i,
          questContent: l,
          questContentCTA: d = o.jZ.GET_REWARD_CODE,
          questContentPosition: c,
          requiresPlatformSelection: u,
          selectedPlatformType: p,
        } = e;
        return r.useCallback(() => {
          var e;
          u && null != p
            ? (t(i.id, p, l),
              (0, o._3)({
                questId: i.id,
                questContent: l,
                questContentCTA: d,
                questContentPosition: c,
              }))
            : a
              ? (null === (e = i.userStatus) || void 0 === e
                  ? void 0
                  : e.claimedAt) != null
                ? n(i.id)
                : null != p &&
                  (t(i.id, p, l),
                  (0, o._3)({
                    questId: i.id,
                    questContent: l,
                    questContentCTA: d,
                    questContentPosition: c,
                  }))
              : s();
        }, [t, n, a, s, i, l, d, c, u, p]);
      }
    },
    985866: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        }),
        n(47120);
      var r = n(200651),
        o = n(192379),
        a = n(120356),
        s = n.n(a),
        i = n(703533),
        l = n(442837),
        d = n(692547),
        c = n(780384),
        u = n(481060),
        p = n(484614),
        m = n(410030),
        f = n(607070),
        _ = n(530618),
        C = n(454585),
        g = n(246946),
        h = n(572004),
        b = n(302221),
        w = n(617136),
        x = n(113434),
        I = n(569984),
        T = n(497505),
        S = n(918701),
        v = n(804127),
        y = n(566078),
        B = n(617889),
        R = n(652380),
        j = n(644646),
        N = n(78826),
        E = n(46140),
        W = n(675654),
        q = n(388032),
        L = n(422446);
      function A(e) {
        var t;
        let { quest: n, rewardCode: o, hasTieredRewardCodes: a } = e,
          i = (0, c.wj)((0, m.ZP)()),
          l = {
            border: "1px solid ".concat(n.config.colors.primary),
            background:
              "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      "
                .concat(
                  (0, b.aD)(n.config.colors.primary, 0.2),
                  " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ",
                )
                .concat(
                  (0, b.aD)(n.config.colors.primary, 0.6),
                  " 44%,\n      transparent 76%\n    ),\n    ",
                )
                .concat(i ? "var(--black)" : "var(--white)", "\n    "),
          },
          p = (0, B.B)(n, !1),
          f =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null || null != o,
          { header: _, subHeader: C } = (function (e) {
            var t, n, r, o;
            let { quest: a, rewardCode: s, hasTieredRewardCodes: i } = e,
              l =
                (null === (t = a.userStatus) || void 0 === t
                  ? void 0
                  : t.claimedAt) != null || null != s,
              d = i ? "" : q.intl.string(q.t.UUKbio),
              c = i
                ? (0, S.o9)({
                    quest: a,
                    idx:
                      null !== (r = null == s ? void 0 : s.tier) && void 0 !== r
                        ? r
                        : null === (n = a.userStatus) || void 0 === n
                          ? void 0
                          : n.claimedTier,
                  })
                : null,
              u = y.r.build(a.config),
              p =
                null != c && null !== (o = c.messages.name) && void 0 !== o
                  ? o
                  : u.defaultReward.messages.name,
              m = i ? q.intl.string(q.t.cfY4PD) : u.defaultReward.messages.name;
            return {
              subHeader: l ? q.intl.string(q.t.YpswQk) : d,
              header: l ? p : m,
            };
          })({ quest: n, rewardCode: o, hasTieredRewardCodes: a }),
          { hasError: g, isLoading: h } = (0, N.d7)();
        return (0, r.jsxs)("div", {
          style: l,
          className: L.rewardTile,
          children: [
            (0, r.jsxs)("div", {
              className: L.rewardTileWrapper,
              style: {
                "--custom-reward-tile-border-color": n.config.colors.primary,
              },
              children: [
                h &&
                  !g &&
                  (0, r.jsx)(u.Spinner, {
                    className: L.rewardTileAssetStatusIcon,
                    type: u.SpinnerTypes.SPINNING_CIRCLE,
                  }),
                g &&
                  (0, r.jsx)(u.ImageWarningIcon, {
                    className: L.rewardTileAssetStatusIcon,
                  }),
                (0, r.jsx)(j.Z, {
                  className: s()(L.rewardTileAsset, {
                    [L.rewardTileAssetLoading]: h || g,
                  }),
                  quest: n,
                  questContent: p.trackingCtx.content,
                  location: E.dr.REWARD_CODE_MODAL,
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: L.rewardSubheading,
              children: [
                f &&
                  (0, r.jsx)(u.CheckmarkSmallIcon, {
                    size: "xs",
                    color: d.Z.colors.TEXT_MUTED,
                    className: L.rewardSubheadingIcon,
                  }),
                (0, r.jsx)(u.Text, {
                  variant: "eyebrow",
                  color: "text-muted",
                  className: L.rewardSubheadingText,
                  children: C,
                }),
              ],
            }),
            (0, r.jsx)(u.Heading, {
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
        return null != t
          ? (0, r.jsx)(P, { ...e, quest: t, preview: e.preview })
          : null;
      }
      function P(e) {
        var t;
        let {
            transitionState: n,
            onClose: a,
            quest: s,
            location: d,
            questContentPosition: c,
            preview: m,
          } = e,
          b = o.useMemo(() => {
            var e;
            return (
              (null === (e = s.userStatus) || void 0 === e
                ? void 0
                : e.claimedAt) != null
            );
          }, []),
          B = y.r.build(s.config).rewardPlatforms,
          j = B.length > 1,
          [M, P] = o.useState(j ? null : B[0]),
          k = o.useRef(new i.qA()),
          O = o.useRef(null),
          [D, Z] = o.useState(null),
          U = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
          F = (0, l.e7)([g.Z], () => g.Z.hidePersonalInformation),
          {
            questStoreRewardCode: G,
            isFetchingRewardCode: H,
            isClaimingReward: X,
          } = (0, l.cj)([I.Z], () => ({
            questStoreRewardCode: I.Z.getRewardCode(s.id),
            isFetchingRewardCode: I.Z.isFetchingRewardCode(s.id),
            isClaimingReward: I.Z.isClaimingReward(s.id),
          })),
          z = (0, S.oo)({ quest: s }),
          Q = !0 === m ? (0, R.b)(s) : G,
          V =
            j &&
            (null === (t = s.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) == null &&
            null == Q,
          {
            claimCode: J,
            fetchCode: Y,
            hasError: $,
            setHasError: K,
          } = (0, v.u)({
            isClaimingReward: X,
            isFetchingRewardCode: H,
            quest: s,
            questContent: d,
            requiresPlatformSelection: V,
            rewardCode: Q,
            selectedPlatformType: M,
            preview: m,
          }),
          ee = null;
        b && null != Q
          ? (ee = q.intl.string(q.t.srzsU1))
          : null != Q
            ? (ee = q.intl.string(q.t.PJBpdX))
            : V && (ee = q.intl.string(q.t.JRU8dn));
        let et =
            null != ee
              ? (0, r.jsx)(u.Heading, {
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  className: L.heading,
                  children: ee,
                })
              : null,
          en = (function (e) {
            let {
                quest: t,
                selectedPlatform: n,
                requiresPlatformSelection: o,
                rewardCode: a,
                hasTieredRewardCodes: s,
              } = e,
              i = y.r.build(t.config);
            if (o)
              return (0, r.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "text-normal",
                className: L.bodyCopy,
                children: s
                  ? q.intl.format(q.t.m0btAQ, {})
                  : q.intl.format(q.t["ZUA/Ul"], {
                      rewardName: i.defaultReward.messages.name,
                    }),
              });
            let l = (0, S.C1)({
              quest: t,
              rewardCode: a,
              selectedPlatformType: n,
              sharedQuestFields: i,
            });
            return null != a && null != l
              ? (0, r.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  className: L.bodyCopy,
                  children: C.Z.parse(l, !1, { allowLinks: !0 }),
                })
              : null;
          })({
            quest: s,
            selectedPlatform: M,
            requiresPlatformSelection: V,
            rewardCode: Q,
            hasTieredRewardCodes: z,
          }),
          er = o.useMemo(
            () => B.map((e) => ({ label: (0, S.t2)(e), value: e })),
            [B],
          ),
          eo = null;
        V &&
          (eo = (0, r.jsxs)(u.FormItem, {
            title: q.intl.string(q.t.vVcTtL),
            children: [
              (0, r.jsx)(u.Select, {
                placeholder: q.intl.string(q.t.EMrUHR),
                options: er,
                select: (e) => {
                  K(!1), P(e);
                },
                isSelected: (e) => e === M,
                serialize: (e) => (0, S.t2)(e),
                className: $ ? L.errorInput : "",
                isDisabled: X,
                renderOptionLabel: (e) => {
                  let t = (function (e) {
                    switch (e) {
                      case T.y$.CROSS_PLATFORM:
                        return (0, r.jsx)(u.ScienceIcon, {
                          className: L.platformSelectionOptionIcon,
                        });
                      case T.y$.PC:
                        return (0, r.jsx)(u.ScreenIcon, {
                          className: L.platformSelectionOptionIcon,
                        });
                      case T.y$.PLAYSTATION:
                        return (0, r.jsx)(u.PlaystationNeutralIcon, {
                          className: L.platformSelectionOptionIcon,
                        });
                      case T.y$.SWITCH:
                        return (0, r.jsx)(u.NintendoSwitchNeutralIcon, {
                          className: L.platformSelectionOptionIcon,
                        });
                      case T.y$.XBOX:
                        return (0, r.jsx)(u.XboxNeutralIcon, {
                          className: L.platformSelectionOptionIcon,
                        });
                    }
                  })(e.value);
                  return (0, r.jsxs)("div", {
                    className: L.platformSelectionOptionLabelContainer,
                    children: [t, e.label],
                  });
                },
              }),
              $
                ? (0, r.jsx)(u.InputError, { error: q.intl.string(q.t.rbZBMT) })
                : null,
            ],
          }));
        let ea = null == Q && (H || X),
          es = ea && !V ? (0, r.jsx)(u.Spinner, {}) : null,
          ei = null;
        null != Q
          ? (ei = (0, r.jsx)(u.FormItem, {
              title: q.intl.string(q.t.srzsU1),
              children: (0, r.jsx)(p.Z, {
                value: F ? q.intl.string(q.t["0n2u0t"]) : Q.code,
                delay: 1e3,
                buttonColor: u.Button.Colors.BRAND,
                onCopy: () => {
                  F && (0, h.JG)(Q.code),
                    (0, w._3)({
                      questId: s.id,
                      questContent: d,
                      questContentPosition: c,
                      questContentCTA: w.jZ.COPY_REWARD_CODE,
                    });
                },
              }),
            }))
          : $ &&
            !V &&
            (ei = (0, r.jsx)(u.FormItem, {
              title: q.intl.string(q.t.srzsU1),
              children: (0, r.jsx)(u.TextInput, {
                disabled: !0,
                error: q.intl.string(q.t.rbZBMT),
                inputClassName: L.errorInput,
              }),
            }));
        let el = (0, v.G)({
            claimCode: J,
            fetchCode: Y,
            hasError: $,
            onDismiss: a,
            quest: s,
            questContent: d,
            questContentPosition: c,
            requiresPlatformSelection: V,
            selectedPlatformType: M,
          }),
          ed = V && X,
          ec = !ed && ((V && null == M) || ea),
          eu = q.intl.string(q.t["23SS+/"]);
        V
          ? (eu = q.intl.string(q.t.SLZMi4))
          : !V && $ && (eu = q.intl.string(q.t.gNJHHh));
        let ep = !U && null != Q && !b && !$,
          em = null != es && z,
          ef = (0, x.Gd)(s.id);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i.O_, {
              ref: Z,
              className: L.confettiCanvas,
              environment: k.current,
            }),
            (0, r.jsx)("div", {
              ref: O,
              children: (0, r.jsxs)(u.ModalRoot, {
                transitionState: n,
                size: u.ModalSize.DYNAMIC,
                children: [
                  (0, r.jsxs)("div", {
                    className: L.modalBody,
                    children: [
                      (0, r.jsx)(u.ModalCloseButton, {
                        className: L.closeButton,
                        onClick: () => a(),
                      }),
                      !em &&
                        (0, r.jsx)(N.p, {
                          source: E.dr.REWARD_CODE_MODAL,
                          questId: s.id,
                          children: (0, r.jsx)(A, {
                            quest: s,
                            rewardCode: Q,
                            hasTieredRewardCodes: z,
                          }),
                        }),
                      (0, r.jsxs)("div", {
                        className: L.modalContent,
                        children: [
                          et,
                          en,
                          eo,
                          es,
                          ei,
                          null != s.config.cosponsorMetadata &&
                            null != ef &&
                            (0, r.jsxs)("div", {
                              className: L.cosponsorFooter,
                              children: [
                                (0, r.jsx)("img", {
                                  className: L.cosponsorLogotype,
                                  alt: s.config.cosponsorMetadata.name,
                                  src: ef.url,
                                }),
                                (0, r.jsx)(u.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  className: L.cosponsorName,
                                  children: q.intl.format(q.t.CSf4ER, {
                                    cosponsorName:
                                      s.config.cosponsorMetadata.name,
                                  }),
                                }),
                                (0, r.jsx)(u.Text, {
                                  variant: "text-md/normal",
                                  color: "text-normal",
                                  className: L.cosponsorRedemptionInstructions,
                                  children: C.Z.parse(
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
                  (0, r.jsx)(u.ModalFooter, {
                    children: (0, r.jsx)(u.Button, {
                      onClick: el,
                      submitting: ed,
                      disabled: ec,
                      children: eu,
                    }),
                  }),
                ],
              }),
            }),
            ep &&
              (0, r.jsx)(_.Z, {
                confettiTarget: O.current,
                confettiCanvas: D,
                sprites: W.CA,
                colors: W.Br,
              }),
          ],
        });
      }
    },
    681130: function (e, t, n) {
      e.exports = { button: "button_f23d00" };
    },
    914530: function (e, t, n) {
      e.exports = {
        fileUploadButton: "fileUploadButton_aef0dd",
        fileUpload: "fileUpload_aef0dd " + n("903884").container,
        fileUploadInput: "fileUploadInput_aef0dd " + n("903884").input,
      };
    },
    789935: function (e, t, n) {
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
    720778: function (e, t, n) {
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
    597799: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_d572e7",
        percentCompleteWrapper: "percentCompleteWrapper_d572e7",
        percentCompleteLabel: "percentCompleteLabel_d572e7",
        progressBar: "progressBar_d572e7",
        progressBarFill: "progressBarFill_d572e7",
        percentCompleteLabelOffset: "percentCompleteLabelOffset_d572e7",
      };
    },
    967979: function (e, t, n) {
      e.exports = {
        promotedTag: "promotedTag_a4a2b0",
        promotedTagBackground: "promotedTagBackground_a4a2b0",
      };
    },
    727526: function (e, t, n) {
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
    271074: function (e, t, n) {
      e.exports = { questsCard: "questsCard_c366aa" };
    },
    389444: function (e, t, n) {
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
    128175: function (e, t, n) {
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
    52539: function (e, t, n) {
      e.exports = { questsCollectibleReward: "questsCollectibleReward_c76d5b" };
    },
    869630: function (e, t, n) {
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
    424621: function (e, t, n) {
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
    1494: function (e, t, n) {
      e.exports = {
        desktopTooltip: "desktopTooltip_a9b354",
        infoIcon: "infoIcon_a9b354",
      };
    },
    422446: function (e, t, n) {
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
    489066: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_c34599",
        instructions: "instructions_c34599",
        rewardTile: "rewardTile_c34599",
      };
    },
    903884: function (e, t, n) {
      n.r(
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
//# sourceMappingURL=3825dc01fde7925dfd99.js.map
