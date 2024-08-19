"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95688"],
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
        p = n(375294);
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
      class _ extends (r = s.PureComponent) {
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
            m(this, "_timeout", void 0),
            (this.state = { mode: d.CopyInput.Modes.DEFAULT }),
            (this._timeout = new i.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      m(_, "defaultProps", { isVertical: !1, delay: 300 }), (t.Z = _);
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
          } = e,
          [c, u] = r.useState(!1),
          p = r.useCallback((e, t, n) => {
            u(!1);
            try {
              (0, s.QB)(e, t, n);
            } catch (e) {
              u(!0);
            }
          }, []),
          m = r.useCallback((e) => {
            u(!1);
            try {
              (0, s.pf)(e);
            } catch (e) {
              u(!0);
            }
          }, []);
        return (
          r.useEffect(() => {
            var e, r;
            if (null == i && !c && !t && !n && !l)
              (null === (e = o.userStatus) || void 0 === e
                ? void 0
                : e.claimedAt) == null && null != d
                ? p(o.id, d, a)
                : (null === (r = o.userStatus) || void 0 === r
                    ? void 0
                    : r.claimedAt) != null && m(o.id);
          }, [p, m, c, t, n, a, o, l, i, d]),
          { claimCode: p, fetchCode: m, hasError: c, setHasError: u }
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
    471985: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(831565),
        a = n(282421);
      function s(e) {
        let t = (0, r.v)({ location: e, autoTrackExposure: !1 }),
          { enabled: n } = a.B.useExperiment(
            { location: e },
            { autoTrackExposure: !1 },
          );
        return n || t;
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
        m = n(410030),
        _ = n(607070),
        C = n(530618),
        E = n(454585),
        S = n(246946),
        R = n(572004),
        g = n(302221),
        T = n(617136),
        f = n(569984),
        h = n(497505),
        b = n(918701),
        D = n(804127),
        x = n(566078),
        A = n(617889),
        I = n(644646),
        O = n(78826),
        w = n(46140),
        v = n(675654),
        y = n(689938),
        N = n(880340);
      function j(e) {
        var t;
        let { quest: n, rewardCode: a, hasTieredRewardCodes: s } = e,
          l = (0, c.wj)((0, m.ZP)()),
          i = {
            border: "1px solid ".concat(n.config.colors.primary),
            background:
              "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      "
                .concat(
                  (0, g.aD)(n.config.colors.primary, 0.2),
                  " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ",
                )
                .concat(
                  (0, g.aD)(n.config.colors.primary, 0.6),
                  " 44%,\n      transparent 76%\n    ),\n    ",
                )
                .concat(l ? "var(--black)" : "var(--white)", "\n    "),
          },
          p = (0, A.B)(n, !1),
          _ =
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
                : y.Z.Messages
                    .QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER,
              c = l
                ? (0, b.o9)({
                    quest: s,
                    idx:
                      null !== (r = null == o ? void 0 : o.tier) && void 0 !== r
                        ? r
                        : null === (n = s.userStatus) || void 0 === n
                          ? void 0
                          : n.claimedTier,
                  })
                : null,
              u = x.r.build(s.config),
              p =
                null != c && null !== (a = c.messages.name) && void 0 !== a
                  ? a
                  : u.defaultReward.messages.name,
              m = l
                ? y.Z.Messages.QUESTS_CLAIM_REWARD
                : u.defaultReward.messages.name;
            return {
              subHeader: i
                ? y.Z.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER
                : d,
              header: i ? p : m,
            };
          })({ quest: n, rewardCode: a, hasTieredRewardCodes: s }),
          { hasError: S, isLoading: R } = (0, O.d7)();
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
                R &&
                  !S &&
                  (0, r.jsx)(u.Spinner, {
                    className: N.rewardTileAssetStatusIcon,
                    type: u.SpinnerTypes.SPINNING_CIRCLE,
                  }),
                S &&
                  (0, r.jsx)(u.ImageWarningIcon, {
                    className: N.rewardTileAssetStatusIcon,
                  }),
                (0, r.jsx)(I.Z, {
                  className: o()(N.rewardTileAsset, {
                    [N.rewardTileAssetLoading]: R || S,
                  }),
                  quest: n,
                  questContent: p.trackingCtx.content,
                  location: w.dr.REWARD_CODE_MODAL,
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: N.rewardSubheading,
              children: [
                _ &&
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
      function M(e) {
        let t = (0, i.e7)([f.Z], () => f.Z.getQuest(e.questId));
        return null != t ? (0, r.jsx)(L, { ...e, quest: t }) : null;
      }
      function L(e) {
        var t;
        let {
            transitionState: n,
            onClose: s,
            quest: o,
            location: d,
            questContentPosition: c,
          } = e,
          m = a.useMemo(() => {
            var e;
            return (
              (null === (e = o.userStatus) || void 0 === e
                ? void 0
                : e.claimedAt) != null
            );
          }, []),
          g = x.r.build(o.config).rewardPlatforms,
          A = g.length > 1,
          [I, M] = a.useState(A ? null : g[0]),
          L = a.useRef(new l.qA()),
          B = a.useRef(null),
          [Z, W] = a.useState(null),
          U = (0, i.e7)([_.Z], () => _.Z.useReducedMotion),
          k = (0, i.e7)([S.Z], () => S.Z.hidePersonalInformation),
          {
            rewardCode: P,
            isFetchingRewardCode: Q,
            isClaimingReward: F,
          } = (0, i.cj)([f.Z], () => ({
            rewardCode: f.Z.getRewardCode(o.id),
            isFetchingRewardCode: f.Z.isFetchingRewardCode(o.id),
            isClaimingReward: f.Z.isClaimingReward(o.id),
          })),
          H = (0, b.oo)({ quest: o }),
          q =
            A &&
            (null === (t = o.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) == null &&
            null == P,
          {
            claimCode: G,
            fetchCode: z,
            hasError: $,
            setHasError: V,
          } = (0, D.u)({
            isClaimingReward: F,
            isFetchingRewardCode: Q,
            quest: o,
            questContent: d,
            requiresPlatformSelection: q,
            rewardCode: P,
            selectedPlatformType: I,
          }),
          X = null;
        m && null != P
          ? (X = y.Z.Messages.QUESTS_REWARD_CODE_HEADER)
          : null != P
            ? (X = y.Z.Messages.QUESTS_REWARD_CODE_CONGRATS)
            : q &&
              (X = y.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
        let Y =
            null != X
              ? (0, r.jsx)(u.Heading, {
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  className: N.heading,
                  children: X,
                })
              : null,
          J = (function (e) {
            let {
                quest: t,
                selectedPlatform: n,
                requiresPlatformSelection: a,
                rewardCode: s,
                hasTieredRewardCodes: o,
              } = e,
              l = x.r.build(t.config);
            if (a)
              return (0, r.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "text-normal",
                className: N.bodyCopy,
                children: o
                  ? y.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS_TIERED.format()
                  : y.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format(
                      { rewardName: l.defaultReward.messages.name },
                    ),
              });
            let i = (0, b.C1)({
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
            selectedPlatform: I,
            requiresPlatformSelection: q,
            rewardCode: P,
            hasTieredRewardCodes: H,
          }),
          K = a.useMemo(
            () => g.map((e) => ({ label: (0, b.t2)(e), value: e })),
            [g],
          ),
          ee = null;
        q &&
          (ee = (0, r.jsxs)(u.FormItem, {
            title: y.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
            children: [
              (0, r.jsx)(u.Select, {
                placeholder:
                  y.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
                options: K,
                select: (e) => {
                  V(!1), M(e);
                },
                isSelected: (e) => e === I,
                serialize: (e) => (0, b.t2)(e),
                className: $ ? N.errorInput : "",
                isDisabled: F,
                renderOptionLabel: (e) => {
                  let t = (function (e) {
                    switch (e) {
                      case h.y$.CROSS_PLATFORM:
                        return (0, r.jsx)(u.ScienceIcon, {
                          className: N.platformSelectionOptionIcon,
                        });
                      case h.y$.PC:
                        return (0, r.jsx)(u.ScreenIcon, {
                          className: N.platformSelectionOptionIcon,
                        });
                      case h.y$.PLAYSTATION:
                        return (0, r.jsx)(u.PlaystationNeutralIcon, {
                          className: N.platformSelectionOptionIcon,
                        });
                      case h.y$.SWITCH:
                        return (0, r.jsx)(u.NintendoSwitchNeutralIcon, {
                          className: N.platformSelectionOptionIcon,
                        });
                      case h.y$.XBOX:
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
              $
                ? (0, r.jsx)(u.InputError, {
                    error: y.Z.Messages.QUESTS_REWARD_CODE_ERROR,
                  })
                : null,
            ],
          }));
        let et = null == P && (Q || F),
          en = et && !q ? (0, r.jsx)(u.Spinner, {}) : null,
          er = null;
        null != P
          ? (er = (0, r.jsx)(u.FormItem, {
              title: y.Z.Messages.QUESTS_REWARD_CODE_HEADER,
              children: (0, r.jsx)(p.Z, {
                value: k ? y.Z.Messages.QUEST_REWARD_CODE_HIDDEN : P.code,
                delay: 1e3,
                buttonColor: u.Button.Colors.BRAND,
                onCopy: () => {
                  k && (0, R.JG)(P.code),
                    (0, T._3)({
                      questId: o.id,
                      questContent: d,
                      questContentPosition: c,
                      questContentCTA: T.jZ.COPY_REWARD_CODE,
                    });
                },
              }),
            }))
          : $ &&
            !q &&
            (er = (0, r.jsx)(u.FormItem, {
              title: y.Z.Messages.QUESTS_REWARD_CODE_HEADER,
              children: (0, r.jsx)(u.TextInput, {
                disabled: !0,
                error: y.Z.Messages.QUESTS_REWARD_CODE_ERROR,
                inputClassName: N.errorInput,
              }),
            }));
        let ea = (0, D.G)({
            claimCode: G,
            fetchCode: z,
            hasError: $,
            onDismiss: s,
            quest: o,
            questContent: d,
            questContentPosition: c,
            requiresPlatformSelection: q,
            selectedPlatformType: I,
          }),
          es = q && F,
          eo = !es && ((q && null == I) || et),
          el = y.Z.Messages.QUESTS_REWARD_CODE_DONE;
        q
          ? (el = y.Z.Messages.QUESTS_REWARD_CODE_GET_CODE)
          : !q && $ && (el = y.Z.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
        let ei = !U && null != P && !m && !$,
          ed = null != en && H;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(l.O_, {
              ref: W,
              className: N.confettiCanvas,
              environment: L.current,
            }),
            (0, r.jsx)("div", {
              ref: B,
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
                      !ed &&
                        (0, r.jsx)(O.p, {
                          source: w.dr.REWARD_CODE_MODAL,
                          questId: o.id,
                          children: (0, r.jsx)(j, {
                            quest: o,
                            rewardCode: P,
                            hasTieredRewardCodes: H,
                          }),
                        }),
                      (0, r.jsxs)("div", {
                        className: N.modalContent,
                        children: [Y, J, ee, en, er],
                      }),
                    ],
                  }),
                  (0, r.jsx)(u.ModalFooter, {
                    children: (0, r.jsx)(u.Button, {
                      onClick: ea,
                      submitting: es,
                      disabled: eo,
                      children: el,
                    }),
                  }),
                ],
              }),
            }),
            ei &&
              (0, r.jsx)(C.Z, {
                confettiTarget: B.current,
                confettiCanvas: Z,
                sprites: v.CA,
                colors: v.Br,
              }),
          ],
        });
      }
    },
    375294: function (e, t, n) {
      e.exports = { button: "button_f23d00" };
    },
    272326: function (e, t, n) {
      e.exports = {
        partnerBranding: "partnerBranding_fc6f68",
        partnerBrandingGameTile: "partnerBrandingGameTile_fc6f68",
        partnerBrandingLogotype: "partnerBrandingLogotype_fc6f68",
        rewardHighlightLogotype: "rewardHighlightLogotype_fc6f68",
      };
    },
    601084: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_d572e7",
        percentCompleteWrapper: "percentCompleteWrapper_d572e7",
        percentCompleteLabel: "percentCompleteLabel_d572e7",
        progressBar: "progressBar_d572e7",
        progressBarFill: "progressBarFill_d572e7",
        percentCompleteLabelOffset: "percentCompleteLabelOffset_d572e7",
      };
    },
    608561: function (e, t, n) {
      e.exports = {
        promotedTag: "promotedTag_a4a2b0",
        promotedTagBackground: "promotedTagBackground_a4a2b0",
      };
    },
    656588: function (e, t, n) {
      e.exports = {
        desktopTooltip: "desktopTooltip_a9b354",
        infoIcon: "infoIcon_a9b354",
      };
    },
    880340: function (e, t, n) {
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
  },
]);
//# sourceMappingURL=c1128bc294600dec6dea.js.map
