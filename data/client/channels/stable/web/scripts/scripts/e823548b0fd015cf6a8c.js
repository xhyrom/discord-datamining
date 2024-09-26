"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30755"],
  {
    484614: function (e, t, n) {
      var r,
        a = n(735250),
        s = n(470079),
        o = n(120356),
        l = n.n(o),
        i = n(846519),
        d = n(481060),
        c = n(572004),
        u = n(689938),
        p = n(681130);
      function _(e, t, n) {
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
      class m extends (r = s.PureComponent) {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let {
              isVertical: e,
              value: t,
              text: n,
              className: r,
              inputClassName: s,
            } = this.props,
            { mode: o } = this.state,
            i = o === d.CopyInput.Modes.SUCCESS ? u.Z.Messages.COPIED : n;
          return e
            ? (0, a.jsxs)("div", {
                className: l()(r, o),
                children: [
                  (0, a.jsx)(d.TextInput, { value: t, inputClassName: s }),
                  (0, a.jsx)(d.Button, {
                    className: p.button,
                    onClick: this.handleCopy,
                    size: d.Button.Sizes.MIN,
                    color: this.getVerticalButtonColor(o),
                    look: d.Button.Looks.FILLED,
                    children: i,
                  }),
                ],
              })
            : (0, a.jsx)(d.CopyInput, {
                ...this.props,
                onCopy: this.handleCopy,
                mode: o,
                text: i,
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
            _(this, "_timeout", void 0),
            (this.state = { mode: d.CopyInput.Modes.DEFAULT }),
            (this._timeout = new i.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      _(m, "defaultProps", { isVertical: !1, delay: 300 }), (t.Z = m);
    },
    804127: function (e, t, n) {
      n.d(t, {
        G: function () {
          return l;
        },
        u: function () {
          return o;
        },
      }),
        n(47120);
      var r = n(470079),
        a = n(617136),
        s = n(272008);
      function o(e) {
        let {
            isClaimingReward: t,
            isFetchingRewardCode: n,
            questContent: a,
            quest: o,
            requiresPlatformSelection: l,
            rewardCode: i,
            selectedPlatformType: d,
            preview: c,
          } = e,
          [u, p] = r.useState(!1),
          _ = r.useCallback((e, t, n) => {
            p(!1);
            try {
              (0, s.QB)(e, t, n);
            } catch (e) {
              p(!0);
            }
          }, []),
          m = r.useCallback((e) => {
            p(!1);
            try {
              (0, s.pf)(e);
            } catch (e) {
              p(!0);
            }
          }, []);
        return (
          r.useEffect(() => {
            var e, r;
            if (!0 !== c && null == i && !u && !t && !n && !l)
              (null === (e = o.userStatus) || void 0 === e
                ? void 0
                : e.claimedAt) == null && null != d
                ? _(o.id, d, a)
                : (null === (r = o.userStatus) || void 0 === r
                    ? void 0
                    : r.claimedAt) != null && m(o.id);
          }, [_, m, u, t, n, a, o, l, i, d, c]),
          { claimCode: _, fetchCode: m, hasError: u, setHasError: p }
        );
      }
      function l(e) {
        let {
          claimCode: t,
          fetchCode: n,
          hasError: s,
          onDismiss: o,
          quest: l,
          questContent: i,
          questContentCTA: d = a.jZ.GET_REWARD_CODE,
          questContentPosition: c,
          requiresPlatformSelection: u,
          selectedPlatformType: p,
        } = e;
        return r.useCallback(() => {
          var e;
          u && null != p
            ? (t(l.id, p, i),
              (0, a._3)({
                questId: l.id,
                questContent: i,
                questContentCTA: d,
                questContentPosition: c,
              }))
            : s
              ? (null === (e = l.userStatus) || void 0 === e
                  ? void 0
                  : e.claimedAt) != null
                ? n(l.id)
                : null != p &&
                  (t(l.id, p, i),
                  (0, a._3)({
                    questId: l.id,
                    questContent: i,
                    questContentCTA: d,
                    questContentPosition: c,
                  }))
              : o();
        }, [t, n, s, o, l, i, d, c, u, p]);
      }
    },
    985866: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return W;
          },
        }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        s = n(120356),
        o = n.n(s),
        l = n(887024),
        i = n(442837),
        d = n(692547),
        c = n(780384),
        u = n(481060),
        p = n(484614),
        _ = n(410030),
        m = n(607070),
        C = n(530618),
        E = n(454585),
        S = n(246946),
        h = n(572004),
        R = n(302221),
        b = n(617136),
        g = n(569984),
        T = n(497505),
        w = n(918701),
        f = n(804127),
        I = n(566078),
        A = n(617889),
        D = n(652380),
        x = n(644646),
        v = n(78826),
        y = n(46140),
        O = n(675654),
        M = n(689938),
        N = n(422446);
      function j(e) {
        var t;
        let { quest: n, rewardCode: a, hasTieredRewardCodes: s } = e,
          l = (0, c.wj)((0, _.ZP)()),
          i = {
            border: "1px solid ".concat(n.config.colors.primary),
            background:
              "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      "
                .concat(
                  (0, R.aD)(n.config.colors.primary, 0.2),
                  " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ",
                )
                .concat(
                  (0, R.aD)(n.config.colors.primary, 0.6),
                  " 44%,\n      transparent 76%\n    ),\n    ",
                )
                .concat(l ? "var(--black)" : "var(--white)", "\n    "),
          },
          p = (0, A.B)(n, !1),
          m =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null || null != a,
          { header: C, subHeader: E } = (function (e) {
            var t, n, r, a;
            let { quest: s, rewardCode: o, hasTieredRewardCodes: l } = e,
              i =
                (null === (t = s.userStatus) || void 0 === t
                  ? void 0
                  : t.claimedAt) != null || null != o,
              d = l
                ? ""
                : M.Z.Messages
                    .QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER,
              c = l
                ? (0, w.o9)({
                    quest: s,
                    idx:
                      null !== (r = null == o ? void 0 : o.tier) && void 0 !== r
                        ? r
                        : null === (n = s.userStatus) || void 0 === n
                          ? void 0
                          : n.claimedTier,
                  })
                : null,
              u = I.r.build(s.config),
              p =
                null != c && null !== (a = c.messages.name) && void 0 !== a
                  ? a
                  : u.defaultReward.messages.name,
              _ = l
                ? M.Z.Messages.QUESTS_CLAIM_REWARD
                : u.defaultReward.messages.name;
            return {
              subHeader: i
                ? M.Z.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER
                : d,
              header: i ? p : _,
            };
          })({ quest: n, rewardCode: a, hasTieredRewardCodes: s }),
          { hasError: S, isLoading: h } = (0, v.d7)();
        return (0, r.jsxs)("div", {
          style: i,
          className: N.rewardTile,
          children: [
            (0, r.jsxs)("div", {
              className: N.rewardTileWrapper,
              style: {
                "--custom-reward-tile-border-color": n.config.colors.primary,
              },
              children: [
                h &&
                  !S &&
                  (0, r.jsx)(u.Spinner, {
                    className: N.rewardTileAssetStatusIcon,
                    type: u.SpinnerTypes.SPINNING_CIRCLE,
                  }),
                S &&
                  (0, r.jsx)(u.ImageWarningIcon, {
                    className: N.rewardTileAssetStatusIcon,
                  }),
                (0, r.jsx)(x.Z, {
                  className: o()(N.rewardTileAsset, {
                    [N.rewardTileAssetLoading]: h || S,
                  }),
                  quest: n,
                  questContent: p.trackingCtx.content,
                  location: y.dr.REWARD_CODE_MODAL,
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: N.rewardSubheading,
              children: [
                m &&
                  (0, r.jsx)(u.CheckmarkSmallIcon, {
                    size: "xs",
                    color: d.Z.colors.TEXT_MUTED,
                    className: N.rewardSubheadingIcon,
                  }),
                (0, r.jsx)(u.Text, {
                  variant: "eyebrow",
                  color: "text-muted",
                  className: N.rewardSubheadingText,
                  children: E,
                }),
              ],
            }),
            (0, r.jsx)(u.Heading, {
              variant: "display-sm",
              color: "header-primary",
              className: N.rewardHeading,
              children: C,
            }),
          ],
        });
      }
      function W(e) {
        let t = (0, i.e7)([g.Z], () => g.Z.getQuest(e.questId));
        return null != t
          ? (0, r.jsx)(B, { ...e, quest: t, preview: e.preview })
          : null;
      }
      function B(e) {
        var t;
        let {
            transitionState: n,
            onClose: s,
            quest: o,
            location: d,
            questContentPosition: c,
            preview: _,
          } = e,
          R = a.useMemo(() => {
            var e;
            return (
              (null === (e = o.userStatus) || void 0 === e
                ? void 0
                : e.claimedAt) != null
            );
          }, []),
          A = I.r.build(o.config).rewardPlatforms,
          x = A.length > 1,
          [W, B] = a.useState(x ? null : A[0]),
          Z = a.useRef(new l.qA()),
          L = a.useRef(null),
          [P, U] = a.useState(null),
          q = (0, i.e7)([m.Z], () => m.Z.useReducedMotion),
          Q = (0, i.e7)([S.Z], () => S.Z.hidePersonalInformation),
          {
            questStoreRewardCode: k,
            isFetchingRewardCode: H,
            isClaimingReward: F,
          } = (0, i.cj)([g.Z], () => ({
            questStoreRewardCode: g.Z.getRewardCode(o.id),
            isFetchingRewardCode: g.Z.isFetchingRewardCode(o.id),
            isClaimingReward: g.Z.isClaimingReward(o.id),
          })),
          G = (0, w.oo)({ quest: o }),
          z = !0 === _ ? (0, D.b)(o) : k,
          $ =
            x &&
            (null === (t = o.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) == null &&
            null == z,
          {
            claimCode: V,
            fetchCode: X,
            hasError: Y,
            setHasError: J,
          } = (0, f.u)({
            isClaimingReward: F,
            isFetchingRewardCode: H,
            quest: o,
            questContent: d,
            requiresPlatformSelection: $,
            rewardCode: z,
            selectedPlatformType: W,
            preview: _,
          }),
          K = null;
        R && null != z
          ? (K = M.Z.Messages.QUESTS_REWARD_CODE_HEADER)
          : null != z
            ? (K = M.Z.Messages.QUESTS_REWARD_CODE_CONGRATS)
            : $ &&
              (K = M.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
        let ee =
            null != K
              ? (0, r.jsx)(u.Heading, {
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  className: N.heading,
                  children: K,
                })
              : null,
          et = (function (e) {
            let {
                quest: t,
                selectedPlatform: n,
                requiresPlatformSelection: a,
                rewardCode: s,
                hasTieredRewardCodes: o,
              } = e,
              l = I.r.build(t.config);
            if (a)
              return (0, r.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "text-normal",
                className: N.bodyCopy,
                children: o
                  ? M.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS_TIERED.format()
                  : M.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format(
                      { rewardName: l.defaultReward.messages.name },
                    ),
              });
            let i = (0, w.C1)({
              quest: t,
              rewardCode: s,
              selectedPlatformType: n,
              sharedQuestFields: l,
            });
            return null != s && null != i
              ? (0, r.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  className: N.bodyCopy,
                  children: E.Z.parse(i, !1, { allowLinks: !0 }),
                })
              : null;
          })({
            quest: o,
            selectedPlatform: W,
            requiresPlatformSelection: $,
            rewardCode: z,
            hasTieredRewardCodes: G,
          }),
          en = a.useMemo(
            () => A.map((e) => ({ label: (0, w.t2)(e), value: e })),
            [A],
          ),
          er = null;
        $ &&
          (er = (0, r.jsxs)(u.FormItem, {
            title: M.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
            children: [
              (0, r.jsx)(u.Select, {
                placeholder:
                  M.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
                options: en,
                select: (e) => {
                  J(!1), B(e);
                },
                isSelected: (e) => e === W,
                serialize: (e) => (0, w.t2)(e),
                className: Y ? N.errorInput : "",
                isDisabled: F,
                renderOptionLabel: (e) => {
                  let t = (function (e) {
                    switch (e) {
                      case T.y$.CROSS_PLATFORM:
                        return (0, r.jsx)(u.ScienceIcon, {
                          className: N.platformSelectionOptionIcon,
                        });
                      case T.y$.PC:
                        return (0, r.jsx)(u.ScreenIcon, {
                          className: N.platformSelectionOptionIcon,
                        });
                      case T.y$.PLAYSTATION:
                        return (0, r.jsx)(u.PlaystationNeutralIcon, {
                          className: N.platformSelectionOptionIcon,
                        });
                      case T.y$.SWITCH:
                        return (0, r.jsx)(u.NintendoSwitchNeutralIcon, {
                          className: N.platformSelectionOptionIcon,
                        });
                      case T.y$.XBOX:
                        return (0, r.jsx)(u.XboxNeutralIcon, {
                          className: N.platformSelectionOptionIcon,
                        });
                    }
                  })(e.value);
                  return (0, r.jsxs)("div", {
                    className: N.platformSelectionOptionLabelContainer,
                    children: [t, e.label],
                  });
                },
              }),
              Y
                ? (0, r.jsx)(u.InputError, {
                    error: M.Z.Messages.QUESTS_REWARD_CODE_ERROR,
                  })
                : null,
            ],
          }));
        let ea = null == z && (H || F),
          es = ea && !$ ? (0, r.jsx)(u.Spinner, {}) : null,
          eo = null;
        null != z
          ? (eo = (0, r.jsx)(u.FormItem, {
              title: M.Z.Messages.QUESTS_REWARD_CODE_HEADER,
              children: (0, r.jsx)(p.Z, {
                value: Q ? M.Z.Messages.QUEST_REWARD_CODE_HIDDEN : z.code,
                delay: 1e3,
                buttonColor: u.Button.Colors.BRAND,
                onCopy: () => {
                  Q && (0, h.JG)(z.code),
                    (0, b._3)({
                      questId: o.id,
                      questContent: d,
                      questContentPosition: c,
                      questContentCTA: b.jZ.COPY_REWARD_CODE,
                    });
                },
              }),
            }))
          : Y &&
            !$ &&
            (eo = (0, r.jsx)(u.FormItem, {
              title: M.Z.Messages.QUESTS_REWARD_CODE_HEADER,
              children: (0, r.jsx)(u.TextInput, {
                disabled: !0,
                error: M.Z.Messages.QUESTS_REWARD_CODE_ERROR,
                inputClassName: N.errorInput,
              }),
            }));
        let el = (0, f.G)({
            claimCode: V,
            fetchCode: X,
            hasError: Y,
            onDismiss: s,
            quest: o,
            questContent: d,
            questContentPosition: c,
            requiresPlatformSelection: $,
            selectedPlatformType: W,
          }),
          ei = $ && F,
          ed = !ei && (($ && null == W) || ea),
          ec = M.Z.Messages.QUESTS_REWARD_CODE_DONE;
        $
          ? (ec = M.Z.Messages.QUESTS_REWARD_CODE_GET_CODE)
          : !$ && Y && (ec = M.Z.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
        let eu = !q && null != z && !R && !Y,
          ep = null != es && G;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(l.O_, {
              ref: U,
              className: N.confettiCanvas,
              environment: Z.current,
            }),
            (0, r.jsx)("div", {
              ref: L,
              children: (0, r.jsxs)(u.ModalRoot, {
                transitionState: n,
                size: u.ModalSize.DYNAMIC,
                children: [
                  (0, r.jsxs)("div", {
                    className: N.modalBody,
                    children: [
                      (0, r.jsx)(u.ModalCloseButton, {
                        className: N.closeButton,
                        onClick: () => s(),
                      }),
                      !ep &&
                        (0, r.jsx)(v.p, {
                          source: y.dr.REWARD_CODE_MODAL,
                          questId: o.id,
                          children: (0, r.jsx)(j, {
                            quest: o,
                            rewardCode: z,
                            hasTieredRewardCodes: G,
                          }),
                        }),
                      (0, r.jsxs)("div", {
                        className: N.modalContent,
                        children: [ee, et, er, es, eo],
                      }),
                    ],
                  }),
                  (0, r.jsx)(u.ModalFooter, {
                    children: (0, r.jsx)(u.Button, {
                      onClick: el,
                      submitting: ei,
                      disabled: ed,
                      children: ec,
                    }),
                  }),
                ],
              }),
            }),
            eu &&
              (0, r.jsx)(C.Z, {
                confettiTarget: L.current,
                confettiCanvas: P,
                sprites: O.CA,
                colors: O.Br,
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
//# sourceMappingURL=e823548b0fd015cf6a8c.js.map
