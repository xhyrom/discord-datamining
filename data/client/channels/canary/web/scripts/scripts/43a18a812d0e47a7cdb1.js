"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58950"],
  {
    484614: function (e, t, n) {
      var r,
        a = n(200651),
        o = n(192379),
        i = n(120356),
        s = n.n(i),
        l = n(846519),
        d = n(481060),
        c = n(572004),
        u = n(388032),
        p = n(137900);
      function f(e, t, n) {
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
      class _ extends (r = o.PureComponent) {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let {
              isVertical: e,
              value: t,
              text: n,
              className: r,
              inputClassName: o,
            } = this.props,
            { mode: i } = this.state,
            l =
              i === d.CopyInput.Modes.SUCCESS
                ? u.intl.string(u.t["t5VZ8/"])
                : n;
          return e
            ? (0, a.jsxs)("div", {
                className: s()(r, i),
                children: [
                  (0, a.jsx)(d.TextInput, { value: t, inputClassName: o }),
                  (0, a.jsx)(d.Button, {
                    className: p.button,
                    onClick: this.handleCopy,
                    size: d.Button.Sizes.MIN,
                    color: this.getVerticalButtonColor(i),
                    look: d.Button.Looks.FILLED,
                    children: l,
                  }),
                ],
              })
            : (0, a.jsx)(d.CopyInput, {
                ...this.props,
                onCopy: this.handleCopy,
                mode: i,
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
            f(this, "_timeout", void 0),
            (this.state = { mode: d.CopyInput.Modes.DEFAULT }),
            (this._timeout = new l.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      f(_, "defaultProps", { isVertical: !1, delay: 300 }), (t.Z = _);
    },
    804127: function (e, t, n) {
      n.d(t, {
        G: function () {
          return s;
        },
        u: function () {
          return i;
        },
      }),
        n(47120);
      var r = n(192379),
        a = n(617136),
        o = n(272008);
      function i(e) {
        let {
            isClaimingReward: t,
            isFetchingRewardCode: n,
            questContent: a,
            quest: i,
            requiresPlatformSelection: s,
            rewardCode: l,
            selectedPlatformType: d,
            preview: c,
          } = e,
          [u, p] = r.useState(!1),
          f = r.useCallback((e, t, n) => {
            p(!1);
            try {
              (0, o.QB)(e, t, n);
            } catch (e) {
              p(!0);
            }
          }, []),
          _ = r.useCallback((e) => {
            p(!1);
            try {
              (0, o.pf)(e);
            } catch (e) {
              p(!0);
            }
          }, []);
        return (
          r.useEffect(() => {
            var e, r;
            if (!0 !== c && null == l && !u && !t && !n && !s)
              (null === (e = i.userStatus) || void 0 === e
                ? void 0
                : e.claimedAt) == null && null != d
                ? f(i.id, d, a)
                : (null === (r = i.userStatus) || void 0 === r
                    ? void 0
                    : r.claimedAt) != null && _(i.id);
          }, [f, _, u, t, n, a, i, s, l, d, c]),
          { claimCode: f, fetchCode: _, hasError: u, setHasError: p }
        );
      }
      function s(e) {
        let {
          claimCode: t,
          fetchCode: n,
          hasError: o,
          onDismiss: i,
          quest: s,
          questContent: l,
          questContentCTA: d = a.jZ.GET_REWARD_CODE,
          questContentPosition: c,
          requiresPlatformSelection: u,
          selectedPlatformType: p,
        } = e;
        return r.useCallback(() => {
          var e;
          u && null != p
            ? (t(s.id, p, l),
              (0, a._3)({
                questId: s.id,
                questContent: l,
                questContentCTA: d,
                questContentPosition: c,
              }))
            : o
              ? (null === (e = s.userStatus) || void 0 === e
                  ? void 0
                  : e.claimedAt) != null
                ? n(s.id)
                : null != p &&
                  (t(s.id, p, l),
                  (0, a._3)({
                    questId: s.id,
                    questContent: l,
                    questContentCTA: d,
                    questContentPosition: c,
                  }))
              : i();
        }, [t, n, o, i, s, l, d, c, u, p]);
      }
    },
    985866: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return P;
          },
        }),
        n(47120);
      var r = n(200651),
        a = n(192379),
        o = n(120356),
        i = n.n(o),
        s = n(703533),
        l = n(442837),
        d = n(692547),
        c = n(780384),
        u = n(481060),
        p = n(484614),
        f = n(410030),
        _ = n(607070),
        m = n(530618),
        C = n(454585),
        g = n(246946),
        h = n(572004),
        b = n(302221),
        w = n(617136),
        x = n(569984),
        I = n(497505),
        T = n(918701),
        S = n(804127),
        v = n(566078),
        y = n(617889),
        B = n(652380),
        R = n(644646),
        j = n(78826),
        E = n(46140),
        N = n(675654),
        q = n(388032),
        W = n(690431);
      function A(e) {
        var t;
        let { quest: n, rewardCode: a, hasTieredRewardCodes: o } = e,
          s = (0, c.wj)((0, f.ZP)()),
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
                .concat(s ? "var(--black)" : "var(--white)", "\n    "),
          },
          p = (0, y.B)(n, !1),
          _ =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null || null != a,
          { header: m, subHeader: C } = (function (e) {
            var t, n, r, a;
            let { quest: o, rewardCode: i, hasTieredRewardCodes: s } = e,
              l =
                (null === (t = o.userStatus) || void 0 === t
                  ? void 0
                  : t.claimedAt) != null || null != i,
              d = s ? "" : q.intl.string(q.t.UUKbio),
              c = s
                ? (0, T.o9)({
                    quest: o,
                    idx:
                      null !== (r = null == i ? void 0 : i.tier) && void 0 !== r
                        ? r
                        : null === (n = o.userStatus) || void 0 === n
                          ? void 0
                          : n.claimedTier,
                  })
                : null,
              u = v.r.build(o.config),
              p =
                null != c && null !== (a = c.messages.name) && void 0 !== a
                  ? a
                  : u.defaultReward.messages.name,
              f = s ? q.intl.string(q.t.cfY4PD) : u.defaultReward.messages.name;
            return {
              subHeader: l ? q.intl.string(q.t.YpswQk) : d,
              header: l ? p : f,
            };
          })({ quest: n, rewardCode: a, hasTieredRewardCodes: o }),
          { hasError: g, isLoading: h } = (0, j.d7)();
        return (0, r.jsxs)("div", {
          style: l,
          className: W.rewardTile,
          children: [
            (0, r.jsxs)("div", {
              className: W.rewardTileWrapper,
              style: {
                "--custom-reward-tile-border-color": n.config.colors.primary,
              },
              children: [
                h &&
                  !g &&
                  (0, r.jsx)(u.Spinner, {
                    className: W.rewardTileAssetStatusIcon,
                    type: u.SpinnerTypes.SPINNING_CIRCLE,
                  }),
                g &&
                  (0, r.jsx)(u.ImageWarningIcon, {
                    className: W.rewardTileAssetStatusIcon,
                  }),
                (0, r.jsx)(R.Z, {
                  className: i()(W.rewardTileAsset, {
                    [W.rewardTileAssetLoading]: h || g,
                  }),
                  quest: n,
                  questContent: p.trackingCtx.content,
                  location: E.dr.REWARD_CODE_MODAL,
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: W.rewardSubheading,
              children: [
                _ &&
                  (0, r.jsx)(u.CheckmarkSmallIcon, {
                    size: "xs",
                    color: d.Z.colors.TEXT_MUTED,
                    className: W.rewardSubheadingIcon,
                  }),
                (0, r.jsx)(u.Text, {
                  variant: "eyebrow",
                  color: "text-muted",
                  className: W.rewardSubheadingText,
                  children: C,
                }),
              ],
            }),
            (0, r.jsx)(u.Heading, {
              variant: "display-sm",
              color: "header-primary",
              className: W.rewardHeading,
              children: m,
            }),
          ],
        });
      }
      function P(e) {
        let t = (0, l.e7)([x.Z], () => x.Z.getQuest(e.questId));
        return null != t
          ? (0, r.jsx)(L, { ...e, quest: t, preview: e.preview })
          : null;
      }
      function L(e) {
        var t;
        let {
            transitionState: n,
            onClose: o,
            quest: i,
            location: d,
            questContentPosition: c,
            preview: f,
          } = e,
          b = a.useMemo(() => {
            var e;
            return (
              (null === (e = i.userStatus) || void 0 === e
                ? void 0
                : e.claimedAt) != null
            );
          }, []),
          y = v.r.build(i.config).rewardPlatforms,
          R = y.length > 1,
          [P, L] = a.useState(R ? null : y[0]),
          M = a.useRef(new s.qA()),
          k = a.useRef(null),
          [O, D] = a.useState(null),
          Z = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
          U = (0, l.e7)([g.Z], () => g.Z.hidePersonalInformation),
          {
            questStoreRewardCode: H,
            isFetchingRewardCode: F,
            isClaimingReward: G,
          } = (0, l.cj)([x.Z], () => ({
            questStoreRewardCode: x.Z.getRewardCode(i.id),
            isFetchingRewardCode: x.Z.isFetchingRewardCode(i.id),
            isClaimingReward: x.Z.isClaimingReward(i.id),
          })),
          X = (0, T.oo)({ quest: i }),
          z = !0 === f ? (0, B.b)(i) : H,
          Q =
            R &&
            (null === (t = i.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) == null &&
            null == z,
          {
            claimCode: V,
            fetchCode: J,
            hasError: Y,
            setHasError: $,
          } = (0, S.u)({
            isClaimingReward: G,
            isFetchingRewardCode: F,
            quest: i,
            questContent: d,
            requiresPlatformSelection: Q,
            rewardCode: z,
            selectedPlatformType: P,
            preview: f,
          }),
          K = null;
        b && null != z
          ? (K = q.intl.string(q.t.srzsU1))
          : null != z
            ? (K = q.intl.string(q.t.PJBpdX))
            : Q && (K = q.intl.string(q.t.JRU8dn));
        let ee =
            null != K
              ? (0, r.jsx)(u.Heading, {
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  className: W.heading,
                  children: K,
                })
              : null,
          et = (function (e) {
            let {
                quest: t,
                selectedPlatform: n,
                requiresPlatformSelection: a,
                rewardCode: o,
                hasTieredRewardCodes: i,
              } = e,
              s = v.r.build(t.config);
            if (a)
              return (0, r.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "text-normal",
                className: W.bodyCopy,
                children: i
                  ? q.intl.format(q.t.m0btAQ, {})
                  : q.intl.format(q.t["ZUA/Ul"], {
                      rewardName: s.defaultReward.messages.name,
                    }),
              });
            let l = (0, T.C1)({
              quest: t,
              rewardCode: o,
              selectedPlatformType: n,
              sharedQuestFields: s,
            });
            return null != o && null != l
              ? (0, r.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  className: W.bodyCopy,
                  children: C.Z.parse(l, !1, { allowLinks: !0 }),
                })
              : null;
          })({
            quest: i,
            selectedPlatform: P,
            requiresPlatformSelection: Q,
            rewardCode: z,
            hasTieredRewardCodes: X,
          }),
          en = a.useMemo(
            () => y.map((e) => ({ label: (0, T.t2)(e), value: e })),
            [y],
          ),
          er = null;
        Q &&
          (er = (0, r.jsxs)(u.FormItem, {
            title: q.intl.string(q.t.vVcTtL),
            children: [
              (0, r.jsx)(u.Select, {
                placeholder: q.intl.string(q.t.EMrUHR),
                options: en,
                select: (e) => {
                  $(!1), L(e);
                },
                isSelected: (e) => e === P,
                serialize: (e) => (0, T.t2)(e),
                className: Y ? W.errorInput : "",
                isDisabled: G,
                renderOptionLabel: (e) => {
                  let t = (function (e) {
                    switch (e) {
                      case I.y$.CROSS_PLATFORM:
                        return (0, r.jsx)(u.ScienceIcon, {
                          className: W.platformSelectionOptionIcon,
                        });
                      case I.y$.PC:
                        return (0, r.jsx)(u.ScreenIcon, {
                          className: W.platformSelectionOptionIcon,
                        });
                      case I.y$.PLAYSTATION:
                        return (0, r.jsx)(u.PlaystationNeutralIcon, {
                          className: W.platformSelectionOptionIcon,
                        });
                      case I.y$.SWITCH:
                        return (0, r.jsx)(u.NintendoSwitchNeutralIcon, {
                          className: W.platformSelectionOptionIcon,
                        });
                      case I.y$.XBOX:
                        return (0, r.jsx)(u.XboxNeutralIcon, {
                          className: W.platformSelectionOptionIcon,
                        });
                    }
                  })(e.value);
                  return (0, r.jsxs)("div", {
                    className: W.platformSelectionOptionLabelContainer,
                    children: [t, e.label],
                  });
                },
              }),
              Y
                ? (0, r.jsx)(u.InputError, { error: q.intl.string(q.t.rbZBMT) })
                : null,
            ],
          }));
        let ea = null == z && (F || G),
          eo = ea && !Q ? (0, r.jsx)(u.Spinner, {}) : null,
          ei = null;
        null != z
          ? (ei = (0, r.jsx)(u.FormItem, {
              title: q.intl.string(q.t.srzsU1),
              children: (0, r.jsx)(p.Z, {
                value: U ? q.intl.string(q.t["0n2u0t"]) : z.code,
                delay: 1e3,
                buttonColor: u.Button.Colors.BRAND,
                onCopy: () => {
                  U && (0, h.JG)(z.code),
                    (0, w._3)({
                      questId: i.id,
                      questContent: d,
                      questContentPosition: c,
                      questContentCTA: w.jZ.COPY_REWARD_CODE,
                    });
                },
              }),
            }))
          : Y &&
            !Q &&
            (ei = (0, r.jsx)(u.FormItem, {
              title: q.intl.string(q.t.srzsU1),
              children: (0, r.jsx)(u.TextInput, {
                disabled: !0,
                error: q.intl.string(q.t.rbZBMT),
                inputClassName: W.errorInput,
              }),
            }));
        let es = (0, S.G)({
            claimCode: V,
            fetchCode: J,
            hasError: Y,
            onDismiss: o,
            quest: i,
            questContent: d,
            questContentPosition: c,
            requiresPlatformSelection: Q,
            selectedPlatformType: P,
          }),
          el = Q && G,
          ed = !el && ((Q && null == P) || ea),
          ec = q.intl.string(q.t["23SS+/"]);
        Q
          ? (ec = q.intl.string(q.t.SLZMi4))
          : !Q && Y && (ec = q.intl.string(q.t.gNJHHh));
        let eu = !Z && null != z && !b && !Y,
          ep = null != eo && X;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(s.O_, {
              ref: D,
              className: W.confettiCanvas,
              environment: M.current,
            }),
            (0, r.jsx)("div", {
              ref: k,
              children: (0, r.jsxs)(u.ModalRoot, {
                transitionState: n,
                size: u.ModalSize.DYNAMIC,
                children: [
                  (0, r.jsxs)("div", {
                    className: W.modalBody,
                    children: [
                      (0, r.jsx)(u.ModalCloseButton, {
                        className: W.closeButton,
                        onClick: () => o(),
                      }),
                      !ep &&
                        (0, r.jsx)(j.p, {
                          source: E.dr.REWARD_CODE_MODAL,
                          questId: i.id,
                          children: (0, r.jsx)(A, {
                            quest: i,
                            rewardCode: z,
                            hasTieredRewardCodes: X,
                          }),
                        }),
                      (0, r.jsxs)("div", {
                        className: W.modalContent,
                        children: [ee, et, er, eo, ei],
                      }),
                    ],
                  }),
                  (0, r.jsx)(u.ModalFooter, {
                    children: (0, r.jsx)(u.Button, {
                      onClick: es,
                      submitting: el,
                      disabled: ed,
                      children: ec,
                    }),
                  }),
                ],
              }),
            }),
            eu &&
              (0, r.jsx)(m.Z, {
                confettiTarget: k.current,
                confettiCanvas: O,
                sprites: N.CA,
                colors: N.Br,
              }),
          ],
        });
      }
    },
    137900: function (e, t, n) {
      e.exports = { button: "button_f23d00" };
    },
    300869: function (e, t, n) {
      e.exports = {
        fileUploadButton: "fileUploadButton_aef0dd",
        fileUpload: "fileUpload_aef0dd " + n("396468").container,
        fileUploadInput: "fileUploadInput_aef0dd " + n("396468").input,
      };
    },
    900019: function (e, t, n) {
      e.exports = {
        partnerBranding: "partnerBranding_fc6f68",
        partnerBrandingGameTile: "partnerBrandingGameTile_fc6f68",
        partnerBrandingLogotype: "partnerBrandingLogotype_fc6f68",
        rewardHighlightLogotype: "rewardHighlightLogotype_fc6f68",
      };
    },
    309206: function (e, t, n) {
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
    761266: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_d572e7",
        percentCompleteWrapper: "percentCompleteWrapper_d572e7",
        percentCompleteLabel: "percentCompleteLabel_d572e7",
        progressBar: "progressBar_d572e7",
        progressBarFill: "progressBarFill_d572e7",
        percentCompleteLabelOffset: "percentCompleteLabelOffset_d572e7",
      };
    },
    990440: function (e, t, n) {
      e.exports = {
        promotedTag: "promotedTag_a4a2b0",
        promotedTagBackground: "promotedTagBackground_a4a2b0",
      };
    },
    490752: function (e, t, n) {
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
    444098: function (e, t, n) {
      e.exports = { questsCard: "questsCard_c366aa" };
    },
    513088: function (e, t, n) {
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
        inHouseButton: "inHouseButton_d7df05",
        inHouseIcon: "inHouseIcon_d7df05",
        separator: "separator_d7df05",
        microphoneContainer: "microphoneContainer_d7df05",
      };
    },
    821565: function (e, t, n) {
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
        questInfo: "questInfo_af8856",
        heading: "heading_af8856",
        iconsContainer: "iconsContainer_af8856",
        iconWrapper: "iconWrapper_af8856",
        shareButton: "shareButton_af8856",
      };
    },
    644596: function (e, t, n) {
      e.exports = { questsCollectibleReward: "questsCollectibleReward_c76d5b" };
    },
    684905: function (e, t, n) {
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
    727506: function (e, t, n) {
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
    352137: function (e, t, n) {
      e.exports = {
        desktopTooltip: "desktopTooltip_a9b354",
        infoIcon: "infoIcon_a9b354",
      };
    },
    690431: function (e, t, n) {
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
      };
    },
    89246: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_c34599",
        instructions: "instructions_c34599",
        rewardTile: "rewardTile_c34599",
      };
    },
    396468: function (e, t, n) {
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
//# sourceMappingURL=43a18a812d0e47a7cdb1.js.map
