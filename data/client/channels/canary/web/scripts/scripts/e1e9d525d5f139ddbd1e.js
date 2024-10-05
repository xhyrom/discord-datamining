"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["71740"],
  {
    484614: function (e, t, r) {
      var n,
        a = r(735250),
        o = r(470079),
        s = r(120356),
        i = r.n(s),
        d = r(846519),
        l = r(481060),
        c = r(572004),
        u = r(689938),
        p = r(681130);
      function _(e, t, r) {
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
      class C extends (n = o.PureComponent) {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let {
              isVertical: e,
              value: t,
              text: r,
              className: n,
              inputClassName: o,
            } = this.props,
            { mode: s } = this.state,
            d = s === l.CopyInput.Modes.SUCCESS ? u.Z.Messages.COPIED : r;
          return e
            ? (0, a.jsxs)("div", {
                className: i()(n, s),
                children: [
                  (0, a.jsx)(l.TextInput, { value: t, inputClassName: o }),
                  (0, a.jsx)(l.Button, {
                    className: p.button,
                    onClick: this.handleCopy,
                    size: l.Button.Sizes.MIN,
                    color: this.getVerticalButtonColor(s),
                    look: l.Button.Looks.FILLED,
                    children: d,
                  }),
                ],
              })
            : (0, a.jsx)(l.CopyInput, {
                ...this.props,
                onCopy: this.handleCopy,
                mode: s,
                text: d,
              });
        }
        handleCopy() {
          let { onCopy: e, value: t, delay: r } = this.props,
            n = (0, c.JG)(t);
          this.setState({
            mode: n ? l.CopyInput.Modes.SUCCESS : l.CopyInput.Modes.ERROR,
          }),
            this._timeout.start(r, () =>
              this.setState({ mode: l.CopyInput.Modes.DEFAULT }),
            ),
            null == e || e();
        }
        getVerticalButtonColor(e) {
          switch (e) {
            case l.CopyInput.Modes.SUCCESS:
              return l.Button.Colors.GREEN;
            case l.CopyInput.Modes.ERROR:
              return l.Button.Colors.RED;
            default:
              return l.Button.Colors.BRAND;
          }
        }
        constructor(e) {
          super(e),
            _(this, "_timeout", void 0),
            (this.state = { mode: l.CopyInput.Modes.DEFAULT }),
            (this._timeout = new d.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      _(C, "defaultProps", { isVertical: !1, delay: 300 }), (t.Z = C);
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
      var n = r(470079),
        a = r(617136),
        o = r(272008);
      function s(e) {
        let {
            isClaimingReward: t,
            isFetchingRewardCode: r,
            questContent: a,
            quest: s,
            requiresPlatformSelection: i,
            rewardCode: d,
            selectedPlatformType: l,
            preview: c,
          } = e,
          [u, p] = n.useState(!1),
          _ = n.useCallback((e, t, r) => {
            p(!1);
            try {
              (0, o.QB)(e, t, r);
            } catch (e) {
              p(!0);
            }
          }, []),
          C = n.useCallback((e) => {
            p(!1);
            try {
              (0, o.pf)(e);
            } catch (e) {
              p(!0);
            }
          }, []);
        return (
          n.useEffect(() => {
            var e, n;
            if (!0 !== c && null == d && !u && !t && !r && !i)
              (null === (e = s.userStatus) || void 0 === e
                ? void 0
                : e.claimedAt) == null && null != l
                ? _(s.id, l, a)
                : (null === (n = s.userStatus) || void 0 === n
                    ? void 0
                    : n.claimedAt) != null && C(s.id);
          }, [_, C, u, t, r, a, s, i, d, l, c]),
          { claimCode: _, fetchCode: C, hasError: u, setHasError: p }
        );
      }
      function i(e) {
        let {
          claimCode: t,
          fetchCode: r,
          hasError: o,
          onDismiss: s,
          quest: i,
          questContent: d,
          questContentCTA: l = a.jZ.GET_REWARD_CODE,
          questContentPosition: c,
          requiresPlatformSelection: u,
          selectedPlatformType: p,
        } = e;
        return n.useCallback(() => {
          var e;
          u && null != p
            ? (t(i.id, p, d),
              (0, a._3)({
                questId: i.id,
                questContent: d,
                questContentCTA: l,
                questContentPosition: c,
              }))
            : o
              ? (null === (e = i.userStatus) || void 0 === e
                  ? void 0
                  : e.claimedAt) != null
                ? r(i.id)
                : null != p &&
                  (t(i.id, p, d),
                  (0, a._3)({
                    questId: i.id,
                    questContent: d,
                    questContentCTA: l,
                    questContentPosition: c,
                  }))
              : s();
        }, [t, r, o, s, i, d, l, c, u, p]);
      }
    },
    985866: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return N;
          },
        }),
        r(47120);
      var n = r(735250),
        a = r(470079),
        o = r(120356),
        s = r.n(o),
        i = r(887024),
        d = r(442837),
        l = r(692547),
        c = r(780384),
        u = r(481060),
        p = r(484614),
        _ = r(410030),
        C = r(607070),
        f = r(530618),
        m = r(454585),
        g = r(246946),
        h = r(572004),
        E = r(302221),
        b = r(617136),
        S = r(569984),
        T = r(497505),
        w = r(918701),
        R = r(804127),
        I = r(566078),
        x = r(617889),
        D = r(652380),
        A = r(644646),
        v = r(78826),
        y = r(46140),
        B = r(675654),
        O = r(689938),
        W = r(422446);
      function M(e) {
        var t;
        let { quest: r, rewardCode: a, hasTieredRewardCodes: o } = e,
          i = (0, c.wj)((0, _.ZP)()),
          d = {
            border: "1px solid ".concat(r.config.colors.primary),
            background:
              "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      "
                .concat(
                  (0, E.aD)(r.config.colors.primary, 0.2),
                  " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ",
                )
                .concat(
                  (0, E.aD)(r.config.colors.primary, 0.6),
                  " 44%,\n      transparent 76%\n    ),\n    ",
                )
                .concat(i ? "var(--black)" : "var(--white)", "\n    "),
          },
          p = (0, x.B)(r, !1),
          C =
            (null === (t = r.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null || null != a,
          { header: f, subHeader: m } = (function (e) {
            var t, r, n, a;
            let { quest: o, rewardCode: s, hasTieredRewardCodes: i } = e,
              d =
                (null === (t = o.userStatus) || void 0 === t
                  ? void 0
                  : t.claimedAt) != null || null != s,
              l = i
                ? ""
                : O.Z.Messages
                    .QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER,
              c = i
                ? (0, w.o9)({
                    quest: o,
                    idx:
                      null !== (n = null == s ? void 0 : s.tier) && void 0 !== n
                        ? n
                        : null === (r = o.userStatus) || void 0 === r
                          ? void 0
                          : r.claimedTier,
                  })
                : null,
              u = I.r.build(o.config),
              p =
                null != c && null !== (a = c.messages.name) && void 0 !== a
                  ? a
                  : u.defaultReward.messages.name,
              _ = i
                ? O.Z.Messages.QUESTS_CLAIM_REWARD
                : u.defaultReward.messages.name;
            return {
              subHeader: d
                ? O.Z.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER
                : l,
              header: d ? p : _,
            };
          })({ quest: r, rewardCode: a, hasTieredRewardCodes: o }),
          { hasError: g, isLoading: h } = (0, v.d7)();
        return (0, n.jsxs)("div", {
          style: d,
          className: W.rewardTile,
          children: [
            (0, n.jsxs)("div", {
              className: W.rewardTileWrapper,
              style: {
                "--custom-reward-tile-border-color": r.config.colors.primary,
              },
              children: [
                h &&
                  !g &&
                  (0, n.jsx)(u.Spinner, {
                    className: W.rewardTileAssetStatusIcon,
                    type: u.SpinnerTypes.SPINNING_CIRCLE,
                  }),
                g &&
                  (0, n.jsx)(u.ImageWarningIcon, {
                    className: W.rewardTileAssetStatusIcon,
                  }),
                (0, n.jsx)(A.Z, {
                  className: s()(W.rewardTileAsset, {
                    [W.rewardTileAssetLoading]: h || g,
                  }),
                  quest: r,
                  questContent: p.trackingCtx.content,
                  location: y.dr.REWARD_CODE_MODAL,
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: W.rewardSubheading,
              children: [
                C &&
                  (0, n.jsx)(u.CheckmarkSmallIcon, {
                    size: "xs",
                    color: l.Z.colors.TEXT_MUTED,
                    className: W.rewardSubheadingIcon,
                  }),
                (0, n.jsx)(u.Text, {
                  variant: "eyebrow",
                  color: "text-muted",
                  className: W.rewardSubheadingText,
                  children: m,
                }),
              ],
            }),
            (0, n.jsx)(u.Heading, {
              variant: "display-sm",
              color: "header-primary",
              className: W.rewardHeading,
              children: f,
            }),
          ],
        });
      }
      function N(e) {
        let t = (0, d.e7)([S.Z], () => S.Z.getQuest(e.questId));
        return null != t
          ? (0, n.jsx)(L, { ...e, quest: t, preview: e.preview })
          : null;
      }
      function L(e) {
        var t;
        let {
            transitionState: r,
            onClose: o,
            quest: s,
            location: l,
            questContentPosition: c,
            preview: _,
          } = e,
          E = a.useMemo(() => {
            var e;
            return (
              (null === (e = s.userStatus) || void 0 === e
                ? void 0
                : e.claimedAt) != null
            );
          }, []),
          x = I.r.build(s.config).rewardPlatforms,
          A = x.length > 1,
          [N, L] = a.useState(A ? null : x[0]),
          j = a.useRef(new i.qA()),
          q = a.useRef(null),
          [P, Z] = a.useState(null),
          U = (0, d.e7)([C.Z], () => C.Z.useReducedMotion),
          k = (0, d.e7)([g.Z], () => g.Z.hidePersonalInformation),
          {
            questStoreRewardCode: H,
            isFetchingRewardCode: Q,
            isClaimingReward: F,
          } = (0, d.cj)([S.Z], () => ({
            questStoreRewardCode: S.Z.getRewardCode(s.id),
            isFetchingRewardCode: S.Z.isFetchingRewardCode(s.id),
            isClaimingReward: S.Z.isClaimingReward(s.id),
          })),
          G = (0, w.oo)({ quest: s }),
          X = !0 === _ ? (0, D.b)(s) : H,
          z =
            A &&
            (null === (t = s.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) == null &&
            null == X,
          {
            claimCode: $,
            fetchCode: V,
            hasError: Y,
            setHasError: J,
          } = (0, R.u)({
            isClaimingReward: F,
            isFetchingRewardCode: Q,
            quest: s,
            questContent: l,
            requiresPlatformSelection: z,
            rewardCode: X,
            selectedPlatformType: N,
            preview: _,
          }),
          K = null;
        E && null != X
          ? (K = O.Z.Messages.QUESTS_REWARD_CODE_HEADER)
          : null != X
            ? (K = O.Z.Messages.QUESTS_REWARD_CODE_CONGRATS)
            : z &&
              (K = O.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
        let ee =
            null != K
              ? (0, n.jsx)(u.Heading, {
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  className: W.heading,
                  children: K,
                })
              : null,
          et = (function (e) {
            let {
                quest: t,
                selectedPlatform: r,
                requiresPlatformSelection: a,
                rewardCode: o,
                hasTieredRewardCodes: s,
              } = e,
              i = I.r.build(t.config);
            if (a)
              return (0, n.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "text-normal",
                className: W.bodyCopy,
                children: s
                  ? O.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS_TIERED.format()
                  : O.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format(
                      { rewardName: i.defaultReward.messages.name },
                    ),
              });
            let d = (0, w.C1)({
              quest: t,
              rewardCode: o,
              selectedPlatformType: r,
              sharedQuestFields: i,
            });
            return null != o && null != d
              ? (0, n.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  className: W.bodyCopy,
                  children: m.Z.parse(d, !1, { allowLinks: !0 }),
                })
              : null;
          })({
            quest: s,
            selectedPlatform: N,
            requiresPlatformSelection: z,
            rewardCode: X,
            hasTieredRewardCodes: G,
          }),
          er = a.useMemo(
            () => x.map((e) => ({ label: (0, w.t2)(e), value: e })),
            [x],
          ),
          en = null;
        z &&
          (en = (0, n.jsxs)(u.FormItem, {
            title: O.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
            children: [
              (0, n.jsx)(u.Select, {
                placeholder:
                  O.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
                options: er,
                select: (e) => {
                  J(!1), L(e);
                },
                isSelected: (e) => e === N,
                serialize: (e) => (0, w.t2)(e),
                className: Y ? W.errorInput : "",
                isDisabled: F,
                renderOptionLabel: (e) => {
                  let t = (function (e) {
                    switch (e) {
                      case T.y$.CROSS_PLATFORM:
                        return (0, n.jsx)(u.ScienceIcon, {
                          className: W.platformSelectionOptionIcon,
                        });
                      case T.y$.PC:
                        return (0, n.jsx)(u.ScreenIcon, {
                          className: W.platformSelectionOptionIcon,
                        });
                      case T.y$.PLAYSTATION:
                        return (0, n.jsx)(u.PlaystationNeutralIcon, {
                          className: W.platformSelectionOptionIcon,
                        });
                      case T.y$.SWITCH:
                        return (0, n.jsx)(u.NintendoSwitchNeutralIcon, {
                          className: W.platformSelectionOptionIcon,
                        });
                      case T.y$.XBOX:
                        return (0, n.jsx)(u.XboxNeutralIcon, {
                          className: W.platformSelectionOptionIcon,
                        });
                    }
                  })(e.value);
                  return (0, n.jsxs)("div", {
                    className: W.platformSelectionOptionLabelContainer,
                    children: [t, e.label],
                  });
                },
              }),
              Y
                ? (0, n.jsx)(u.InputError, {
                    error: O.Z.Messages.QUESTS_REWARD_CODE_ERROR,
                  })
                : null,
            ],
          }));
        let ea = null == X && (Q || F),
          eo = ea && !z ? (0, n.jsx)(u.Spinner, {}) : null,
          es = null;
        null != X
          ? (es = (0, n.jsx)(u.FormItem, {
              title: O.Z.Messages.QUESTS_REWARD_CODE_HEADER,
              children: (0, n.jsx)(p.Z, {
                value: k ? O.Z.Messages.QUEST_REWARD_CODE_HIDDEN : X.code,
                delay: 1e3,
                buttonColor: u.Button.Colors.BRAND,
                onCopy: () => {
                  k && (0, h.JG)(X.code),
                    (0, b._3)({
                      questId: s.id,
                      questContent: l,
                      questContentPosition: c,
                      questContentCTA: b.jZ.COPY_REWARD_CODE,
                    });
                },
              }),
            }))
          : Y &&
            !z &&
            (es = (0, n.jsx)(u.FormItem, {
              title: O.Z.Messages.QUESTS_REWARD_CODE_HEADER,
              children: (0, n.jsx)(u.TextInput, {
                disabled: !0,
                error: O.Z.Messages.QUESTS_REWARD_CODE_ERROR,
                inputClassName: W.errorInput,
              }),
            }));
        let ei = (0, R.G)({
            claimCode: $,
            fetchCode: V,
            hasError: Y,
            onDismiss: o,
            quest: s,
            questContent: l,
            questContentPosition: c,
            requiresPlatformSelection: z,
            selectedPlatformType: N,
          }),
          ed = z && F,
          el = !ed && ((z && null == N) || ea),
          ec = O.Z.Messages.QUESTS_REWARD_CODE_DONE;
        z
          ? (ec = O.Z.Messages.QUESTS_REWARD_CODE_GET_CODE)
          : !z && Y && (ec = O.Z.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
        let eu = !U && null != X && !E && !Y,
          ep = null != eo && G;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(i.O_, {
              ref: Z,
              className: W.confettiCanvas,
              environment: j.current,
            }),
            (0, n.jsx)("div", {
              ref: q,
              children: (0, n.jsxs)(u.ModalRoot, {
                transitionState: r,
                size: u.ModalSize.DYNAMIC,
                children: [
                  (0, n.jsxs)("div", {
                    className: W.modalBody,
                    children: [
                      (0, n.jsx)(u.ModalCloseButton, {
                        className: W.closeButton,
                        onClick: () => o(),
                      }),
                      !ep &&
                        (0, n.jsx)(v.p, {
                          source: y.dr.REWARD_CODE_MODAL,
                          questId: s.id,
                          children: (0, n.jsx)(M, {
                            quest: s,
                            rewardCode: X,
                            hasTieredRewardCodes: G,
                          }),
                        }),
                      (0, n.jsxs)("div", {
                        className: W.modalContent,
                        children: [ee, et, en, eo, es],
                      }),
                    ],
                  }),
                  (0, n.jsx)(u.ModalFooter, {
                    children: (0, n.jsx)(u.Button, {
                      onClick: ei,
                      submitting: ed,
                      disabled: el,
                      children: ec,
                    }),
                  }),
                ],
              }),
            }),
            eu &&
              (0, n.jsx)(f.Z, {
                confettiTarget: q.current,
                confettiCanvas: P,
                sprites: B.CA,
                colors: B.Br,
              }),
          ],
        });
      }
    },
    681130: function (e, t, r) {
      e.exports = { button: "button_f23d00" };
    },
    914530: function (e, t, r) {
      e.exports = {
        fileUploadButton: "fileUploadButton_aef0dd",
        fileUpload: "fileUpload_aef0dd " + r("903884").container,
        fileUploadInput: "fileUploadInput_aef0dd " + r("903884").input,
      };
    },
    789935: function (e, t, r) {
      e.exports = {
        partnerBranding: "partnerBranding_fc6f68",
        partnerBrandingGameTile: "partnerBrandingGameTile_fc6f68",
        partnerBrandingLogotype: "partnerBrandingLogotype_fc6f68",
        rewardHighlightLogotype: "rewardHighlightLogotype_fc6f68",
      };
    },
    720778: function (e, t, r) {
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
    597799: function (e, t, r) {
      e.exports = {
        wrapper: "wrapper_d572e7",
        percentCompleteWrapper: "percentCompleteWrapper_d572e7",
        percentCompleteLabel: "percentCompleteLabel_d572e7",
        progressBar: "progressBar_d572e7",
        progressBarFill: "progressBarFill_d572e7",
        percentCompleteLabelOffset: "percentCompleteLabelOffset_d572e7",
      };
    },
    967979: function (e, t, r) {
      e.exports = {
        promotedTag: "promotedTag_a4a2b0",
        promotedTagBackground: "promotedTagBackground_a4a2b0",
      };
    },
    727526: function (e, t, r) {
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
    271074: function (e, t, r) {
      e.exports = { questsCard: "questsCard_c366aa" };
    },
    389444: function (e, t, r) {
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
    128175: function (e, t, r) {
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
    52539: function (e, t, r) {
      e.exports = { questsCollectibleReward: "questsCollectibleReward_c76d5b" };
    },
    869630: function (e, t, r) {
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
    424621: function (e, t, r) {
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
    1494: function (e, t, r) {
      e.exports = {
        desktopTooltip: "desktopTooltip_a9b354",
        infoIcon: "infoIcon_a9b354",
      };
    },
    422446: function (e, t, r) {
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
    489066: function (e, t, r) {
      e.exports = {
        wrapper: "wrapper_c34599",
        instructions: "instructions_c34599",
        rewardTile: "rewardTile_c34599",
      };
    },
    903884: function (e, t, r) {
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
//# sourceMappingURL=e1e9d525d5f139ddbd1e.js.map
