"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21378"],
  {
    484614: function (e, t, n) {
      var s,
        o = n(735250),
        a = n(470079),
        r = n(120356),
        l = n.n(r),
        i = n(846519),
        u = n(481060),
        d = n(572004),
        c = n(689938),
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
      class C extends (s = a.PureComponent) {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let {
              isVertical: e,
              value: t,
              text: n,
              className: s,
              inputClassName: a,
            } = this.props,
            { mode: r } = this.state,
            i = r === u.CopyInput.Modes.SUCCESS ? c.Z.Messages.COPIED : n;
          return e
            ? (0, o.jsxs)("div", {
                className: l()(s, r),
                children: [
                  (0, o.jsx)(u.TextInput, { value: t, inputClassName: a }),
                  (0, o.jsx)(u.Button, {
                    className: p.button,
                    onClick: this.handleCopy,
                    size: u.Button.Sizes.MIN,
                    color: this.getVerticalButtonColor(r),
                    look: u.Button.Looks.FILLED,
                    children: i,
                  }),
                ],
              })
            : (0, o.jsx)(u.CopyInput, {
                ...this.props,
                onCopy: this.handleCopy,
                mode: r,
                text: i,
              });
        }
        handleCopy() {
          let { onCopy: e, value: t, delay: n } = this.props,
            s = (0, d.JG)(t);
          this.setState({
            mode: s ? u.CopyInput.Modes.SUCCESS : u.CopyInput.Modes.ERROR,
          }),
            this._timeout.start(n, () =>
              this.setState({ mode: u.CopyInput.Modes.DEFAULT }),
            ),
            null == e || e();
        }
        getVerticalButtonColor(e) {
          switch (e) {
            case u.CopyInput.Modes.SUCCESS:
              return u.Button.Colors.GREEN;
            case u.CopyInput.Modes.ERROR:
              return u.Button.Colors.RED;
            default:
              return u.Button.Colors.BRAND;
          }
        }
        constructor(e) {
          super(e),
            m(this, "_timeout", void 0),
            (this.state = { mode: u.CopyInput.Modes.DEFAULT }),
            (this._timeout = new i.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      m(C, "defaultProps", { isVertical: !1, delay: 300 }), (t.Z = C);
    },
    111382: function (e, t, n) {
      n.d(t, {
        n: function () {
          return o;
        },
      });
      let s = (0, n(818083).B)({
          id: "2024-07_quest_interactable_expired_crendentials",
          kind: "user",
          label: "Quest interactable expired crendentials errors",
          defaultConfig: { enabled: !1 },
          treatments: [
            { id: 0, label: "not interactable", config: { enabled: !1 } },
            { id: 1, label: "interactable", config: { enabled: !0 } },
          ],
        }),
        o = () =>
          s.useExperiment({ location: "never" }, { autoTrackExposure: !1 })
            .enabled;
    },
    804127: function (e, t, n) {
      n.d(t, {
        G: function () {
          return l;
        },
        u: function () {
          return r;
        },
      }),
        n(47120);
      var s = n(470079),
        o = n(617136),
        a = n(272008);
      function r(e) {
        let {
            isClaimingReward: t,
            isFetchingRewardCode: n,
            questContent: o,
            quest: r,
            requiresPlatformSelection: l,
            rewardCode: i,
            selectedPlatformType: u,
          } = e,
          [d, c] = s.useState(!1),
          p = s.useCallback((e, t, n) => {
            c(!1);
            try {
              (0, a.QB)(e, t, n);
            } catch (e) {
              c(!0);
            }
          }, []),
          m = s.useCallback((e) => {
            c(!1);
            try {
              (0, a.pf)(e);
            } catch (e) {
              c(!0);
            }
          }, []);
        return (
          s.useEffect(() => {
            var e, s;
            if (null == i && !d && !t && !n && !l)
              (null === (e = r.userStatus) || void 0 === e
                ? void 0
                : e.claimedAt) == null && null != u
                ? p(r.id, u, o)
                : (null === (s = r.userStatus) || void 0 === s
                    ? void 0
                    : s.claimedAt) != null && m(r.id);
          }, [p, m, d, t, n, o, r, l, i, u]),
          { claimCode: p, fetchCode: m, hasError: d, setHasError: c }
        );
      }
      function l(e) {
        let {
          claimCode: t,
          fetchCode: n,
          hasError: a,
          onDismiss: r,
          quest: l,
          questContent: i,
          questContentCTA: u = o.jZ.GET_REWARD_CODE,
          questContentPosition: d,
          requiresPlatformSelection: c,
          selectedPlatformType: p,
        } = e;
        return s.useCallback(() => {
          var e;
          c && null != p
            ? (t(l.id, p, i),
              (0, o._3)({
                questId: l.id,
                questContent: i,
                questContentCTA: u,
                questContentPosition: d,
              }))
            : a
              ? (null === (e = l.userStatus) || void 0 === e
                  ? void 0
                  : e.claimedAt) != null
                ? n(l.id)
                : null != p &&
                  (t(l.id, p, i),
                  (0, o._3)({
                    questId: l.id,
                    questContent: i,
                    questContentCTA: u,
                    questContentPosition: d,
                  }))
              : r();
        }, [t, n, a, r, l, i, u, d, c, p]);
      }
    },
    471985: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var s = n(831565),
        o = n(282421);
      function a(e) {
        let t = (0, s.v)({ location: e, autoTrackExposure: !1 }),
          { enabled: n } = o.B.useExperiment(
            { location: e },
            { autoTrackExposure: !1 },
          );
        return n || t;
      }
    },
    685613: function (e, t, n) {
      n.d(t, {
        f: function () {
          return o;
        },
      });
      var s,
        o,
        a = n(735250);
      n(470079);
      var r = n(120356),
        l = n.n(r),
        i = n(780384),
        u = n(918701),
        d = n(302245),
        c = n(78826),
        p = n(46140),
        m = n(981631),
        C = n(272326);
      ((s = o || (o = {}))[(s.SMALL = 24)] = "SMALL"),
        (s[(s.MEDIUM = 32)] = "MEDIUM");
      t.Z = function (e) {
        let {
            className: t,
            gameTileSize: n = 24,
            quest: s,
            theme: o = m.BRd.DARK,
            withGameTile: r = !0,
          } = e,
          E = (0, i.wj)(o) ? m.BRd.DARK : m.BRd.LIGHT,
          _ = (0, d.vI)(s, p.dr.QUESTS_BAR);
        return (0, a.jsxs)("div", {
          className: l()(C.partnerBranding, t),
          children: [
            r &&
              (0, a.jsx)(c.Fl, {
                id: "QuestPartnerBranding_gameTile",
                children: (e) =>
                  (0, a.jsx)("img", {
                    ref: e,
                    className: C.partnerBrandingGameTile,
                    alt: "",
                    src: (0, u.uo)(s, E),
                    style: {
                      borderRadius: (function (e) {
                        switch (e) {
                          case 24:
                            return 3;
                          case 32:
                            return 4;
                        }
                      })(n),
                      width: n,
                      height: n,
                    },
                  }),
              }),
            (0, a.jsx)(c.Fl, {
              id: "QuestPartnerBranding_gameLogotype",
              children: (e) =>
                (0, a.jsx)("img", {
                  ref: e,
                  className: l()(C.partnerBrandingLogotype, {
                    [C.rewardHighlightLogotype]: _,
                  }),
                  alt: s.config.messages.gameTitle,
                  src: (0, u.Gs)(s, E),
                }),
            }),
          ],
        });
      };
    },
    340100: function (e, t, n) {
      var s = n(735250);
      n(470079);
      var o = n(120356),
        a = n.n(o),
        r = n(692547),
        l = n(481060),
        i = n(113434),
        u = n(918701),
        d = n(330039),
        c = n(601084);
      t.Z = function (e) {
        let {
            className: t,
            color: n = r.Z.colors.WHITE,
            quest: o,
            isInventory: p,
          } = e,
          m = (0, u.rV)(o),
          { percentComplete: C, completedRatioDisplay: E } = (0, i.I)(o);
        return m && !p
          ? (0, s.jsx)(d.Z, {})
          : (0, s.jsxs)("div", {
              className: a()(c.wrapper, t),
              style: { color: n.css },
              children: [
                (0, s.jsxs)("div", {
                  className: c.percentCompleteWrapper,
                  children: [
                    (0, s.jsx)(l.Text, {
                      variant: "text-xs/semibold",
                      className: c.percentCompleteLabel,
                      color: "none",
                      children: E,
                    }),
                    (0, s.jsx)("div", {
                      className: c.percentCompleteLabelOffset,
                      style: { width: "".concat(100 - C, "%") },
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: c.progressBar,
                  role: "progressbar",
                  "aria-valuenow": C,
                  children: (0, s.jsx)("div", {
                    className: c.progressBarFill,
                    style: { width: "".concat(C, "%") },
                  }),
                }),
                m && (0, s.jsx)(d.Z, { isInventory: p }),
              ],
            });
      };
    },
    611855: function (e, t, n) {
      var s = n(735250);
      n(470079);
      var o = n(120356),
        a = n.n(o),
        r = n(481060),
        l = n(689938),
        i = n(608561);
      t.Z = function (e) {
        let {
          className: t,
          color: n = "header-primary",
          textOpacity: o = 0.9,
          bgOpacity: u = 0.4,
        } = e;
        return (0, s.jsxs)(r.Text, {
          variant: "text-xxs/medium",
          color: n,
          className: a()(i.promotedTag, t),
          children: [
            (0, s.jsx)("span", {
              className: i.promotedTagBackground,
              style: { opacity: u },
            }),
            (0, s.jsx)("span", {
              style: { opacity: o },
              children: l.Z.Messages.QUESTS_PROMOTED,
            }),
          ],
        });
      };
    },
    670638: function (e, t, n) {
      n.d(t, {
        r: function () {
          return h;
        },
      });
      var s = n(735250),
        o = n(470079),
        a = n(442837),
        r = n(481060),
        l = n(239091),
        i = n(479531),
        u = n(390322),
        d = n(617136),
        c = n(272008),
        p = n(113434),
        m = n(569984),
        C = n(918701),
        E = n(471985),
        _ = n(341907),
        S = n(46140),
        T = n(231338),
        g = n(689938);
      function x(e) {
        var t;
        let n = (0, a.e7)([m.Z], () => m.Z.questDeliveryOverride, []),
          u = (0, C.GN)(e.questContent),
          x = (0, C.zK)(e.quest, S.S7.IN_HOUSE_CONSOLE_QUEST),
          h = (0, C.KM)(e.quest),
          f = (0, E.Z)(S.dr.QUEST_CONTEXT_MENU),
          {
            handleComplete: R,
            handleResetDismissibilityClick: I,
            handleResetStatusClick: b,
            handleOverrideDeliveryClick: N,
          } = (0, p.kJ)(e.quest.id),
          M = o.useCallback(() => {
            (0, C.FE)(e.quest, {
              content: e.questContent,
              ctaContent: d.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
            });
          }, [e.quest, e.questContent]),
          j = o.useCallback(() => {
            (0, C.f2)(e.quest.id, {
              content: e.questContent,
              position: e.questContentPosition,
              ctaContent: d.jZ.CONTEXT_MENU_COPY_LINK,
            });
          }, [e.quest, e.questContent, e.questContentPosition]),
          v = (e) =>
            (0, r.showToast)(
              (0, r.createToast)(
                new i.Z(e, e.status).message,
                r.ToastType.FAILURE,
              ),
            );
        return (0, s.jsxs)(r.Menu, {
          variant: "fixed",
          onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, l.Zy)();
          },
          navId: "quests-entry",
          "aria-label": g.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
          onClose:
            null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t
              ? t
              : T.dG,
          children: [
            !1 === h &&
              (0, s.jsxs)(
                r.MenuGroup,
                {
                  children: [
                    !1 === x &&
                      (0, s.jsx)(r.MenuItem, {
                        id: "play-game",
                        label: g.Z.Messages.QUESTS_GET_THIS_GAME,
                        action: M,
                        icon: r.LinkExternalMediumIcon,
                      }),
                    !0 === e.showShareLink &&
                      (0, s.jsx)(r.MenuItem, {
                        id: "share-link",
                        label: g.Z.Messages.COPY_LINK,
                        action: j,
                        icon: r.CopyIcon,
                      }),
                  ],
                },
                "major-actions",
              ),
            (0, s.jsxs)(
              r.MenuGroup,
              {
                children: [
                  !e.hideLearnMore &&
                    (0, s.jsx)(r.MenuItem, {
                      id: "learn-more",
                      label: g.Z.Messages.QUESTS_LEARN_MORE_V2,
                      action: () => {
                        (0, d._3)({
                          questId: e.quest.id,
                          questContent: e.questContent,
                          questContentPosition: e.questContentPosition,
                          questContentCTA: d.jZ.CONTEXT_MENU_LEARN_MORE,
                        }),
                          (0, _.navigateToQuestHome)(
                            S.dr.QUEST_CONTEXT_MENU,
                            e.quest.id,
                          );
                      },
                    }),
                  e.shouldShowDisclosure &&
                    (0, s.jsx)(r.MenuItem, {
                      id: "display-disclosure",
                      label: g.Z.Messages.QUESTS_DISCLOSURE_LABEL,
                      action: () => {
                        (0, _.openDisclosureModal)(e.quest, {
                          content: e.questContent,
                          position: e.questContentPosition,
                          ctaContent: d.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                        });
                      },
                    }),
                  u &&
                    (0, s.jsx)(r.MenuItem, {
                      id: "hide-entrypoint",
                      label: g.Z.Messages.QUESTS_HIDE_THIS,
                      action: () => {
                        (0, d._3)({
                          questId: e.quest.id,
                          questContent: e.questContent,
                          questContentPosition: e.questContentPosition,
                          questContentCTA: d.jZ.CONTEXT_MENU_HIDE_CONTENT,
                        }),
                          (0, C.GN)(e.questContent) &&
                            (0, c.gl)(e.quest.id, e.questContent);
                      },
                      subtext: f
                        ? g.Z.Messages.QUESTS_FIND_THIS_IN_DISCOVERY_QUEST_HOME
                        : g.Z.Messages.QUESTS_FIND_QUEST,
                    }),
                ],
              },
              "minor-actions",
            ),
            e.quest.preview &&
              (0, s.jsxs)(
                r.MenuGroup,
                {
                  label: "Preview Controls",
                  children: [
                    (0, s.jsx)(r.MenuCheckboxItem, {
                      id: "delivery",
                      label: "Show in Quest Bar",
                      checked: (null == n ? void 0 : n.id) === e.quest.id,
                      action: N,
                    }),
                    (0, s.jsx)(r.MenuItem, {
                      id: "dismiss",
                      label: "Reset Dismissibility",
                      action: I,
                    }),
                    (0, s.jsx)(r.MenuItem, {
                      id: "enrollment",
                      label: "Reset Quest",
                      action: b,
                    }),
                    (0, s.jsx)(r.MenuItem, {
                      id: "complete",
                      label: "Complete Quest",
                      action: R,
                    }),
                    (0, C.$J)(e.quest) &&
                      (0, s.jsxs)(r.MenuItem, {
                        id: "console",
                        label: "Console Heartbeat",
                        children: [
                          (0, s.jsx)(r.MenuItem, {
                            disabled: !0,
                            id: "status",
                            label: "Status: ".concat(
                              (0, C.Bz)(e.quest) ? "alive" : "dead",
                            ),
                          }),
                          (0, s.jsx)(r.MenuItem, {
                            id: "start",
                            label: "Start heartbeat (cheatmode)",
                            action: () => (0, c.CS)(e.quest.id, !0).catch(v),
                          }),
                          (0, s.jsx)(r.MenuItem, {
                            id: "stop",
                            label: "Stop heartbeat",
                            action: () => (0, c.is)(e.quest.id).catch(v),
                          }),
                        ],
                      }),
                  ],
                },
                "preview-controls",
              ),
          ],
        });
      }
      function h(e) {
        let {
            children: t,
            onOpen: n,
            onClose: a,
            preventIdle: l,
            quest: i,
            questContent: c,
            questContentPosition: p,
            ...m
          } = e,
          C = o.useCallback(() => {
            (0, d._3)({
              questId: i.id,
              questContent: c,
              questContentCTA: d.jZ.OPEN_CONTEXT_MENU,
              questContentPosition: p,
            }),
              null != n && n();
          }, [n, i.id, c, p]);
        return (0, s.jsx)(r.Popout, {
          onRequestOpen: C,
          onRequestClose: a,
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return l
              ? (0, s.jsx)(u.Z, {
                  children: (0, s.jsx)(x, {
                    ...m,
                    quest: i,
                    questContent: c,
                    questContentPosition: p,
                    onClose: t,
                  }),
                })
              : (0, s.jsx)(x, {
                  ...m,
                  quest: i,
                  questContent: c,
                  questContentPosition: p,
                  onClose: t,
                });
          },
          animation: r.Popout.Animation.NONE,
          children: (e) => t(e),
        });
      }
    },
    330039: function (e, t, n) {
      var s = n(735250),
        o = n(470079),
        a = n(481060),
        r = n(377171),
        l = n(689938),
        i = n(30897);
      t.Z = o.forwardRef(function (e, t) {
        let { isInventory: n, style: o } = e;
        return (0, s.jsxs)("div", {
          ref: t,
          className: i.desktopTooltip,
          style: { marginTop: n ? 8 : 0, ...o },
          children: [
            (0, s.jsx)(a.CircleInformationIcon, {
              size: "custom",
              className: i.infoIcon,
              height: n ? 16 : 12,
              width: n ? 16 : 12,
              color: n ? r.Z.TEXT_MUTED : r.Z.WHITE,
            }),
            (0, s.jsx)(a.Text, {
              color: n ? "text-muted" : "always-white",
              variant: n ? "text-xs/normal" : "text-xxs/normal",
              children: l.Z.Messages.QUESTS_PROGRESS_WEB_TIP,
            }),
          ],
        });
      });
    },
    985866: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        }),
        n(47120);
      var s = n(735250),
        o = n(470079),
        a = n(120356),
        r = n.n(a),
        l = n(887024),
        i = n(442837),
        u = n(692547),
        d = n(780384),
        c = n(481060),
        p = n(484614),
        m = n(410030),
        C = n(607070),
        E = n(530618),
        _ = n(454585),
        S = n(246946),
        T = n(572004),
        g = n(302221),
        x = n(617136),
        h = n(569984),
        f = n(497505),
        R = n(918701),
        I = n(804127),
        b = n(566078),
        N = n(617889),
        M = n(644646),
        j = n(78826),
        v = n(46140),
        D = n(675654),
        O = n(689938),
        A = n(880340);
      function y(e) {
        var t;
        let { quest: n, rewardCode: o, hasTieredRewardCodes: a } = e,
          l = (0, d.wj)((0, m.ZP)()),
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
          p = (0, N.B)(n, !1),
          C =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null || null != o,
          { header: E, subHeader: _ } = (function (e) {
            var t, n, s, o;
            let { quest: a, rewardCode: r, hasTieredRewardCodes: l } = e,
              i =
                (null === (t = a.userStatus) || void 0 === t
                  ? void 0
                  : t.claimedAt) != null || null != r,
              u = l
                ? ""
                : O.Z.Messages
                    .QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER,
              d = l
                ? (0, R.o9)({
                    quest: a,
                    idx:
                      null !== (s = null == r ? void 0 : r.tier) && void 0 !== s
                        ? s
                        : null === (n = a.userStatus) || void 0 === n
                          ? void 0
                          : n.claimedTier,
                  })
                : null,
              c = b.r.build(a.config),
              p =
                null != d && null !== (o = d.messages.name) && void 0 !== o
                  ? o
                  : c.defaultReward.messages.name,
              m = l
                ? O.Z.Messages.QUESTS_CLAIM_REWARD
                : c.defaultReward.messages.name;
            return {
              subHeader: i
                ? O.Z.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER
                : u,
              header: i ? p : m,
            };
          })({ quest: n, rewardCode: o, hasTieredRewardCodes: a }),
          { hasError: S, isLoading: T } = (0, j.d7)();
        return (0, s.jsxs)("div", {
          style: i,
          className: A.rewardTile,
          children: [
            (0, s.jsxs)("div", {
              className: A.rewardTileWrapper,
              style: {
                "--custom-reward-tile-border-color": n.config.colors.primary,
              },
              children: [
                T &&
                  !S &&
                  (0, s.jsx)(c.Spinner, {
                    className: A.rewardTileAssetStatusIcon,
                    type: c.SpinnerTypes.SPINNING_CIRCLE,
                  }),
                S &&
                  (0, s.jsx)(c.ImageWarningIcon, {
                    className: A.rewardTileAssetStatusIcon,
                  }),
                (0, s.jsx)(M.Z, {
                  className: r()(A.rewardTileAsset, {
                    [A.rewardTileAssetLoading]: T || S,
                  }),
                  quest: n,
                  questContent: p.trackingCtx.content,
                  location: v.dr.REWARD_CODE_MODAL,
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: A.rewardSubheading,
              children: [
                C &&
                  (0, s.jsx)(c.CheckmarkSmallIcon, {
                    size: "xs",
                    color: u.Z.colors.TEXT_MUTED,
                    className: A.rewardSubheadingIcon,
                  }),
                (0, s.jsx)(c.Text, {
                  variant: "eyebrow",
                  color: "text-muted",
                  className: A.rewardSubheadingText,
                  children: _,
                }),
              ],
            }),
            (0, s.jsx)(c.Heading, {
              variant: "display-sm",
              color: "header-primary",
              className: A.rewardHeading,
              children: E,
            }),
          ],
        });
      }
      function w(e) {
        let t = (0, i.e7)([h.Z], () => h.Z.getQuest(e.questId));
        return null != t ? (0, s.jsx)(q, { ...e, quest: t }) : null;
      }
      function q(e) {
        var t;
        let {
            transitionState: n,
            onClose: a,
            quest: r,
            location: u,
            questContentPosition: d,
          } = e,
          m = o.useMemo(() => {
            var e;
            return (
              (null === (e = r.userStatus) || void 0 === e
                ? void 0
                : e.claimedAt) != null
            );
          }, []),
          g = b.r.build(r.config).rewardPlatforms,
          N = g.length > 1,
          [M, w] = o.useState(N ? null : g[0]),
          q = o.useRef(new l.qA()),
          L = o.useRef(null),
          [Z, U] = o.useState(null),
          B = (0, i.e7)([C.Z], () => C.Z.useReducedMotion),
          P = (0, i.e7)([S.Z], () => S.Z.hidePersonalInformation),
          {
            rewardCode: Q,
            isFetchingRewardCode: k,
            isClaimingReward: W,
          } = (0, i.cj)([h.Z], () => ({
            rewardCode: h.Z.getRewardCode(r.id),
            isFetchingRewardCode: h.Z.isFetchingRewardCode(r.id),
            isClaimingReward: h.Z.isClaimingReward(r.id),
          })),
          H = (0, R.oo)({ quest: r }),
          F =
            N &&
            (null === (t = r.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) == null &&
            null == Q,
          {
            claimCode: G,
            fetchCode: X,
            hasError: z,
            setHasError: Y,
          } = (0, I.u)({
            isClaimingReward: W,
            isFetchingRewardCode: k,
            quest: r,
            questContent: u,
            requiresPlatformSelection: F,
            rewardCode: Q,
            selectedPlatformType: M,
          }),
          K = null;
        m && null != Q
          ? (K = O.Z.Messages.QUESTS_REWARD_CODE_HEADER)
          : null != Q
            ? (K = O.Z.Messages.QUESTS_REWARD_CODE_CONGRATS)
            : F &&
              (K = O.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
        let V =
            null != K
              ? (0, s.jsx)(c.Heading, {
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  className: A.heading,
                  children: K,
                })
              : null,
          $ = (function (e) {
            let {
                quest: t,
                selectedPlatform: n,
                requiresPlatformSelection: o,
                rewardCode: a,
                hasTieredRewardCodes: r,
              } = e,
              l = b.r.build(t.config);
            if (o)
              return (0, s.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "text-normal",
                className: A.bodyCopy,
                children: r
                  ? O.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS_TIERED.format()
                  : O.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format(
                      { rewardName: l.defaultReward.messages.name },
                    ),
              });
            let i = (0, R.C1)({
              quest: t,
              rewardCode: a,
              selectedPlatformType: n,
              sharedQuestFields: l,
            });
            return null != a && null != i
              ? (0, s.jsx)(c.Text, {
                  variant: "text-sm/normal",
                  color: "text-normal",
                  className: A.bodyCopy,
                  children: _.Z.parse(i, !1, { allowLinks: !0 }),
                })
              : null;
          })({
            quest: r,
            selectedPlatform: M,
            requiresPlatformSelection: F,
            rewardCode: Q,
            hasTieredRewardCodes: H,
          }),
          J = o.useMemo(
            () => g.map((e) => ({ label: (0, R.t2)(e), value: e })),
            [g],
          ),
          ee = null;
        F &&
          (ee = (0, s.jsxs)(c.FormItem, {
            title: O.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
            children: [
              (0, s.jsx)(c.Select, {
                placeholder:
                  O.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
                options: J,
                select: (e) => {
                  Y(!1), w(e);
                },
                isSelected: (e) => e === M,
                serialize: (e) => (0, R.t2)(e),
                className: z ? A.errorInput : "",
                isDisabled: W,
                renderOptionLabel: (e) => {
                  let t = (function (e) {
                    switch (e) {
                      case f.y$.CROSS_PLATFORM:
                        return (0, s.jsx)(c.ScienceIcon, {
                          className: A.platformSelectionOptionIcon,
                        });
                      case f.y$.PC:
                        return (0, s.jsx)(c.ScreenIcon, {
                          className: A.platformSelectionOptionIcon,
                        });
                      case f.y$.PLAYSTATION:
                        return (0, s.jsx)(c.PlaystationNeutralIcon, {
                          className: A.platformSelectionOptionIcon,
                        });
                      case f.y$.SWITCH:
                        return (0, s.jsx)(c.NintendoSwitchNeutralIcon, {
                          className: A.platformSelectionOptionIcon,
                        });
                      case f.y$.XBOX:
                        return (0, s.jsx)(c.XboxNeutralIcon, {
                          className: A.platformSelectionOptionIcon,
                        });
                    }
                  })(e.value);
                  return (0, s.jsxs)("div", {
                    className: A.platformSelectionOptionLabelContainer,
                    children: [t, e.label],
                  });
                },
              }),
              z
                ? (0, s.jsx)(c.InputError, {
                    error: O.Z.Messages.QUESTS_REWARD_CODE_ERROR,
                  })
                : null,
            ],
          }));
        let et = null == Q && (k || W),
          en = et && !F ? (0, s.jsx)(c.Spinner, {}) : null,
          es = null;
        null != Q
          ? (es = (0, s.jsx)(c.FormItem, {
              title: O.Z.Messages.QUESTS_REWARD_CODE_HEADER,
              children: (0, s.jsx)(p.Z, {
                value: P ? O.Z.Messages.QUEST_REWARD_CODE_HIDDEN : Q.code,
                delay: 1e3,
                buttonColor: c.Button.Colors.BRAND,
                onCopy: () => {
                  P && (0, T.JG)(Q.code),
                    (0, x._3)({
                      questId: r.id,
                      questContent: u,
                      questContentPosition: d,
                      questContentCTA: x.jZ.COPY_REWARD_CODE,
                    });
                },
              }),
            }))
          : z &&
            !F &&
            (es = (0, s.jsx)(c.FormItem, {
              title: O.Z.Messages.QUESTS_REWARD_CODE_HEADER,
              children: (0, s.jsx)(c.TextInput, {
                disabled: !0,
                error: O.Z.Messages.QUESTS_REWARD_CODE_ERROR,
                inputClassName: A.errorInput,
              }),
            }));
        let eo = (0, I.G)({
            claimCode: G,
            fetchCode: X,
            hasError: z,
            onDismiss: a,
            quest: r,
            questContent: u,
            questContentPosition: d,
            requiresPlatformSelection: F,
            selectedPlatformType: M,
          }),
          ea = F && W,
          er = !ea && ((F && null == M) || et),
          el = O.Z.Messages.QUESTS_REWARD_CODE_DONE;
        F
          ? (el = O.Z.Messages.QUESTS_REWARD_CODE_GET_CODE)
          : !F && z && (el = O.Z.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
        let ei = !B && null != Q && !m && !z,
          eu = null != en && H;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(l.O_, {
              ref: U,
              className: A.confettiCanvas,
              environment: q.current,
            }),
            (0, s.jsx)("div", {
              ref: L,
              children: (0, s.jsxs)(c.ModalRoot, {
                transitionState: n,
                size: c.ModalSize.DYNAMIC,
                children: [
                  (0, s.jsxs)("div", {
                    className: A.modalBody,
                    children: [
                      (0, s.jsx)(c.ModalCloseButton, {
                        className: A.closeButton,
                        onClick: () => a(),
                      }),
                      !eu &&
                        (0, s.jsx)(j.p, {
                          source: v.dr.REWARD_CODE_MODAL,
                          questId: r.id,
                          children: (0, s.jsx)(y, {
                            quest: r,
                            rewardCode: Q,
                            hasTieredRewardCodes: H,
                          }),
                        }),
                      (0, s.jsxs)("div", {
                        className: A.modalContent,
                        children: [V, $, ee, en, es],
                      }),
                    ],
                  }),
                  (0, s.jsx)(c.ModalFooter, {
                    children: (0, s.jsx)(c.Button, {
                      onClick: eo,
                      submitting: ea,
                      disabled: er,
                      children: el,
                    }),
                  }),
                ],
              }),
            }),
            ei &&
              (0, s.jsx)(E.Z, {
                confettiTarget: L.current,
                confettiCanvas: Z,
                sprites: D.CA,
                colors: D.Br,
              }),
          ],
        });
      }
    },
    390322: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = n(735250),
        o = n(470079),
        a = n(618158);
      function r(e) {
        let { children: t } = e,
          { preventIdle: n, allowIdle: r } = (0, a.Y)("popup");
        return (
          o.useEffect(() => (n(), () => r()), [r, n]),
          (0, s.jsx)(s.Fragment, { children: t })
        );
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
    30897: function (e, t, n) {
      e.exports = {
        desktopTooltip: "desktopTooltip_c8d5bd",
        infoIcon: "infoIcon_c8d5bd",
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
//# sourceMappingURL=5f05262d3b01652eb3df.js.map
