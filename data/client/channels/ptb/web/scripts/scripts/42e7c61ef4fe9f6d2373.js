"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61624"],
  {
    484614: function (e, t, n) {
      var s,
        a = n(735250),
        r = n(470079),
        l = n(120356),
        o = n.n(l),
        i = n(846519),
        d = n(481060),
        u = n(572004),
        c = n(689938),
        E = n(681130);
      function C(e, t, n) {
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
      class m extends (s = r.PureComponent) {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let {
              isVertical: e,
              value: t,
              text: n,
              className: s,
              inputClassName: r,
            } = this.props,
            { mode: l } = this.state,
            i = l === d.CopyInput.Modes.SUCCESS ? c.Z.Messages.COPIED : n;
          return e
            ? (0, a.jsxs)("div", {
                className: o()(s, l),
                children: [
                  (0, a.jsx)(d.TextInput, { value: t, inputClassName: r }),
                  (0, a.jsx)(d.Button, {
                    className: E.button,
                    onClick: this.handleCopy,
                    size: d.Button.Sizes.MIN,
                    color: this.getVerticalButtonColor(l),
                    look: d.Button.Looks.FILLED,
                    children: i,
                  }),
                ],
              })
            : (0, a.jsx)(d.CopyInput, {
                ...this.props,
                onCopy: this.handleCopy,
                mode: l,
                text: i,
              });
        }
        handleCopy() {
          let { onCopy: e, value: t, delay: n } = this.props,
            s = (0, u.JG)(t);
          this.setState({
            mode: s ? d.CopyInput.Modes.SUCCESS : d.CopyInput.Modes.ERROR,
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
            C(this, "_timeout", void 0),
            (this.state = { mode: d.CopyInput.Modes.DEFAULT }),
            (this._timeout = new i.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      C(m, "defaultProps", { isVertical: !1, delay: 300 }), (t.Z = m);
    },
    804127: function (e, t, n) {
      n.d(t, {
        G: function () {
          return o;
        },
        u: function () {
          return l;
        },
      }),
        n(47120);
      var s = n(470079),
        a = n(617136),
        r = n(272008);
      function l(e) {
        let {
            isClaimingReward: t,
            isFetchingRewardCode: n,
            questContent: a,
            quest: l,
            requiresPlatformSelection: o,
            rewardCode: i,
            selectedPlatformType: d,
          } = e,
          [u, c] = s.useState(!1),
          E = s.useCallback((e, t, n) => {
            c(!1);
            try {
              (0, r.QB)(e, t, n);
            } catch (e) {
              c(!0);
            }
          }, []),
          C = s.useCallback((e) => {
            c(!1);
            try {
              (0, r.pf)(e);
            } catch (e) {
              c(!0);
            }
          }, []);
        return (
          s.useEffect(() => {
            var e, s;
            if (null == i && !u && !t && !n && !o)
              (null === (e = l.userStatus) || void 0 === e
                ? void 0
                : e.claimedAt) == null && null != d
                ? E(l.id, d, a)
                : (null === (s = l.userStatus) || void 0 === s
                    ? void 0
                    : s.claimedAt) != null && C(l.id);
          }, [E, C, u, t, n, a, l, o, i, d]),
          { claimCode: E, fetchCode: C, hasError: u, setHasError: c }
        );
      }
      function o(e) {
        let {
          claimCode: t,
          fetchCode: n,
          hasError: r,
          onDismiss: l,
          quest: o,
          questContent: i,
          questContentCTA: d = a.jZ.GET_REWARD_CODE,
          questContentPosition: u,
          requiresPlatformSelection: c,
          selectedPlatformType: E,
        } = e;
        return s.useCallback(() => {
          var e;
          c && null != E
            ? (t(o.id, E, i),
              (0, a._3)({
                questId: o.id,
                questContent: i,
                questContentCTA: d,
                questContentPosition: u,
              }))
            : r
              ? (null === (e = o.userStatus) || void 0 === e
                  ? void 0
                  : e.claimedAt) != null
                ? n(o.id)
                : null != E &&
                  (t(o.id, E, i),
                  (0, a._3)({
                    questId: o.id,
                    questContent: i,
                    questContentCTA: d,
                    questContentPosition: u,
                  }))
              : l();
        }, [t, n, r, l, o, i, d, u, c, E]);
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
      var s = n(735250),
        a = n(470079),
        r = n(120356),
        l = n.n(r),
        o = n(887024),
        i = n(442837),
        d = n(692547),
        u = n(780384),
        c = n(481060),
        E = n(484614),
        C = n(410030),
        m = n(607070),
        _ = n(530618),
        p = n(454585),
        S = n(246946),
        R = n(572004),
        T = n(302221),
        h = n(617136),
        D = n(569984),
        A = n(497505),
        g = n(918701),
        I = n(804127),
        b = n(566078),
        x = n(617889),
        f = n(644646),
        O = n(78826),
        v = n(46140),
        w = n(675654),
        y = n(689938),
        N = n(422446);
      function j(e) {
        var t;
        let { quest: n, rewardCode: a, hasTieredRewardCodes: r } = e,
          o = (0, u.wj)((0, C.ZP)()),
          i = {
            border: "1px solid ".concat(n.config.colors.primary),
            background:
              "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      "
                .concat(
                  (0, T.aD)(n.config.colors.primary, 0.2),
                  " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ",
                )
                .concat(
                  (0, T.aD)(n.config.colors.primary, 0.6),
                  " 44%,\n      transparent 76%\n    ),\n    ",
                )
                .concat(o ? "var(--black)" : "var(--white)", "\n    "),
          },
          E = (0, x.B)(n, !1),
          m =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null || null != a,
          { header: _, subHeader: p } = (function (e) {
            var t, n, s, a;
            let { quest: r, rewardCode: l, hasTieredRewardCodes: o } = e,
              i =
                (null === (t = r.userStatus) || void 0 === t
                  ? void 0
                  : t.claimedAt) != null || null != l,
              d = o
                ? ""
                : y.Z.Messages
                    .QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER,
              u = o
                ? (0, g.o9)({
                    quest: r,
                    idx:
                      null !== (s = null == l ? void 0 : l.tier) && void 0 !== s
                        ? s
                        : null === (n = r.userStatus) || void 0 === n
                          ? void 0
                          : n.claimedTier,
                  })
                : null,
              c = b.r.build(r.config),
              E =
                null != u && null !== (a = u.messages.name) && void 0 !== a
                  ? a
                  : c.defaultReward.messages.name,
              C = o
                ? y.Z.Messages.QUESTS_CLAIM_REWARD
                : c.defaultReward.messages.name;
            return {
              subHeader: i
                ? y.Z.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER
                : d,
              header: i ? E : C,
            };
          })({ quest: n, rewardCode: a, hasTieredRewardCodes: r }),
          { hasError: S, isLoading: R } = (0, O.d7)();
        return (0, s.jsxs)("div", {
          style: i,
          className: N.rewardTile,
          children: [
            (0, s.jsxs)("div", {
              className: N.rewardTileWrapper,
              style: {
                "--custom-reward-tile-border-color": n.config.colors.primary,
              },
              children: [
                R &&
                  !S &&
                  (0, s.jsx)(c.Spinner, {
                    className: N.rewardTileAssetStatusIcon,
                    type: c.SpinnerTypes.SPINNING_CIRCLE,
                  }),
                S &&
                  (0, s.jsx)(c.ImageWarningIcon, {
                    className: N.rewardTileAssetStatusIcon,
                  }),
                (0, s.jsx)(f.Z, {
                  className: l()(N.rewardTileAsset, {
                    [N.rewardTileAssetLoading]: R || S,
                  }),
                  quest: n,
                  questContent: E.trackingCtx.content,
                  location: v.dr.REWARD_CODE_MODAL,
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: N.rewardSubheading,
              children: [
                m &&
                  (0, s.jsx)(c.CheckmarkSmallIcon, {
                    size: "xs",
                    color: d.Z.colors.TEXT_MUTED,
                    className: N.rewardSubheadingIcon,
                  }),
                (0, s.jsx)(c.Text, {
                  variant: "eyebrow",
                  color: "text-muted",
                  className: N.rewardSubheadingText,
                  children: p,
                }),
              ],
            }),
            (0, s.jsx)(c.Heading, {
              variant: "display-sm",
              color: "header-primary",
              className: N.rewardHeading,
              children: _,
            }),
          ],
        });
      }
      function M(e) {
        let t = (0, i.e7)([D.Z], () => D.Z.getQuest(e.questId));
        return null != t ? (0, s.jsx)(Z, { ...e, quest: t }) : null;
      }
      function Z(e) {
        var t;
        let {
            transitionState: n,
            onClose: r,
            quest: l,
            location: d,
            questContentPosition: u,
          } = e,
          C = a.useMemo(() => {
            var e;
            return (
              (null === (e = l.userStatus) || void 0 === e
                ? void 0
                : e.claimedAt) != null
            );
          }, []),
          T = b.r.build(l.config).rewardPlatforms,
          x = T.length > 1,
          [f, M] = a.useState(x ? null : T[0]),
          Z = a.useRef(new o.qA()),
          L = a.useRef(null),
          [U, W] = a.useState(null),
          B = (0, i.e7)([m.Z], () => m.Z.useReducedMotion),
          P = (0, i.e7)([S.Z], () => S.Z.hidePersonalInformation),
          {
            rewardCode: Q,
            isFetchingRewardCode: k,
            isClaimingReward: q,
          } = (0, i.cj)([D.Z], () => ({
            rewardCode: D.Z.getRewardCode(l.id),
            isFetchingRewardCode: D.Z.isFetchingRewardCode(l.id),
            isClaimingReward: D.Z.isClaimingReward(l.id),
          })),
          F = (0, g.oo)({ quest: l }),
          H =
            x &&
            (null === (t = l.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) == null &&
            null == Q,
          {
            claimCode: G,
            fetchCode: z,
            hasError: $,
            setHasError: V,
          } = (0, I.u)({
            isClaimingReward: q,
            isFetchingRewardCode: k,
            quest: l,
            questContent: d,
            requiresPlatformSelection: H,
            rewardCode: Q,
            selectedPlatformType: f,
          }),
          X = null;
        C && null != Q
          ? (X = y.Z.Messages.QUESTS_REWARD_CODE_HEADER)
          : null != Q
            ? (X = y.Z.Messages.QUESTS_REWARD_CODE_CONGRATS)
            : H &&
              (X = y.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
        let Y =
            null != X
              ? (0, s.jsx)(c.Heading, {
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
                rewardCode: r,
                hasTieredRewardCodes: l,
              } = e,
              o = b.r.build(t.config);
            if (a)
              return (0, s.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "text-normal",
                className: N.bodyCopy,
                children: l
                  ? y.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS_TIERED.format()
                  : y.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format(
                      { rewardName: o.defaultReward.messages.name },
                    ),
              });
            let i = (0, g.C1)({
              quest: t,
              rewardCode: r,
              selectedPlatformType: n,
              sharedQuestFields: o,
            });
            return null != r && null != i
              ? (0, s.jsx)(c.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  className: N.bodyCopy,
                  children: p.Z.parse(i, !1, { allowLinks: !0 }),
                })
              : null;
          })({
            quest: l,
            selectedPlatform: f,
            requiresPlatformSelection: H,
            rewardCode: Q,
            hasTieredRewardCodes: F,
          }),
          K = a.useMemo(
            () => T.map((e) => ({ label: (0, g.t2)(e), value: e })),
            [T],
          ),
          ee = null;
        H &&
          (ee = (0, s.jsxs)(c.FormItem, {
            title: y.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
            children: [
              (0, s.jsx)(c.Select, {
                placeholder:
                  y.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
                options: K,
                select: (e) => {
                  V(!1), M(e);
                },
                isSelected: (e) => e === f,
                serialize: (e) => (0, g.t2)(e),
                className: $ ? N.errorInput : "",
                isDisabled: q,
                renderOptionLabel: (e) => {
                  let t = (function (e) {
                    switch (e) {
                      case A.y$.CROSS_PLATFORM:
                        return (0, s.jsx)(c.ScienceIcon, {
                          className: N.platformSelectionOptionIcon,
                        });
                      case A.y$.PC:
                        return (0, s.jsx)(c.ScreenIcon, {
                          className: N.platformSelectionOptionIcon,
                        });
                      case A.y$.PLAYSTATION:
                        return (0, s.jsx)(c.PlaystationNeutralIcon, {
                          className: N.platformSelectionOptionIcon,
                        });
                      case A.y$.SWITCH:
                        return (0, s.jsx)(c.NintendoSwitchNeutralIcon, {
                          className: N.platformSelectionOptionIcon,
                        });
                      case A.y$.XBOX:
                        return (0, s.jsx)(c.XboxNeutralIcon, {
                          className: N.platformSelectionOptionIcon,
                        });
                    }
                  })(e.value);
                  return (0, s.jsxs)("div", {
                    className: N.platformSelectionOptionLabelContainer,
                    children: [t, e.label],
                  });
                },
              }),
              $
                ? (0, s.jsx)(c.InputError, {
                    error: y.Z.Messages.QUESTS_REWARD_CODE_ERROR,
                  })
                : null,
            ],
          }));
        let et = null == Q && (k || q),
          en = et && !H ? (0, s.jsx)(c.Spinner, {}) : null,
          es = null;
        null != Q
          ? (es = (0, s.jsx)(c.FormItem, {
              title: y.Z.Messages.QUESTS_REWARD_CODE_HEADER,
              children: (0, s.jsx)(E.Z, {
                value: P ? y.Z.Messages.QUEST_REWARD_CODE_HIDDEN : Q.code,
                delay: 1e3,
                buttonColor: c.Button.Colors.BRAND,
                onCopy: () => {
                  P && (0, R.JG)(Q.code),
                    (0, h._3)({
                      questId: l.id,
                      questContent: d,
                      questContentPosition: u,
                      questContentCTA: h.jZ.COPY_REWARD_CODE,
                    });
                },
              }),
            }))
          : $ &&
            !H &&
            (es = (0, s.jsx)(c.FormItem, {
              title: y.Z.Messages.QUESTS_REWARD_CODE_HEADER,
              children: (0, s.jsx)(c.TextInput, {
                disabled: !0,
                error: y.Z.Messages.QUESTS_REWARD_CODE_ERROR,
                inputClassName: N.errorInput,
              }),
            }));
        let ea = (0, I.G)({
            claimCode: G,
            fetchCode: z,
            hasError: $,
            onDismiss: r,
            quest: l,
            questContent: d,
            questContentPosition: u,
            requiresPlatformSelection: H,
            selectedPlatformType: f,
          }),
          er = H && q,
          el = !er && ((H && null == f) || et),
          eo = y.Z.Messages.QUESTS_REWARD_CODE_DONE;
        H
          ? (eo = y.Z.Messages.QUESTS_REWARD_CODE_GET_CODE)
          : !H && $ && (eo = y.Z.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
        let ei = !B && null != Q && !C && !$,
          ed = null != en && F;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(o.O_, {
              ref: W,
              className: N.confettiCanvas,
              environment: Z.current,
            }),
            (0, s.jsx)("div", {
              ref: L,
              children: (0, s.jsxs)(c.ModalRoot, {
                transitionState: n,
                size: c.ModalSize.DYNAMIC,
                children: [
                  (0, s.jsxs)("div", {
                    className: N.modalBody,
                    children: [
                      (0, s.jsx)(c.ModalCloseButton, {
                        className: N.closeButton,
                        onClick: () => r(),
                      }),
                      !ed &&
                        (0, s.jsx)(O.p, {
                          source: v.dr.REWARD_CODE_MODAL,
                          questId: l.id,
                          children: (0, s.jsx)(j, {
                            quest: l,
                            rewardCode: Q,
                            hasTieredRewardCodes: F,
                          }),
                        }),
                      (0, s.jsxs)("div", {
                        className: N.modalContent,
                        children: [Y, J, ee, en, es],
                      }),
                    ],
                  }),
                  (0, s.jsx)(c.ModalFooter, {
                    children: (0, s.jsx)(c.Button, {
                      onClick: ea,
                      submitting: er,
                      disabled: el,
                      children: eo,
                    }),
                  }),
                ],
              }),
            }),
            ei &&
              (0, s.jsx)(_.Z, {
                confettiTarget: L.current,
                confettiCanvas: U,
                sprites: w.CA,
                colors: w.Br,
              }),
          ],
        });
      }
    },
    681130: function (e, t, n) {
      e.exports = { button: "button_f23d00" };
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
  },
]);
//# sourceMappingURL=42e7c61ef4fe9f6d2373.js.map
