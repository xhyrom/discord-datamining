"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26138"],
  {
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
      var i = n(120356),
        r = n.n(i),
        l = n(780384),
        u = n(918701),
        c = n(302245),
        d = n(78826),
        C = n(46140),
        m = n(981631),
        p = n(272326);
      ((s = o || (o = {}))[(s.SMALL = 24)] = "SMALL"),
        (s[(s.MEDIUM = 32)] = "MEDIUM");
      t.Z = function (e) {
        let {
            className: t,
            gameTileSize: n = 24,
            quest: s,
            theme: o = m.BRd.DARK,
            withGameTile: i = !0,
          } = e,
          x = (0, l.wj)(o) ? m.BRd.DARK : m.BRd.LIGHT,
          E = (0, c.vI)(s, C.dr.QUESTS_BAR);
        return (0, a.jsxs)("div", {
          className: r()(p.partnerBranding, t),
          children: [
            i &&
              (0, a.jsx)(d.Fl, {
                id: "QuestPartnerBranding_gameTile",
                children: (e) =>
                  (0, a.jsx)("img", {
                    ref: e,
                    className: p.partnerBrandingGameTile,
                    alt: "",
                    src: (0, u.uo)(s, x),
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
            (0, a.jsx)(d.Fl, {
              id: "QuestPartnerBranding_gameLogotype",
              children: (e) =>
                (0, a.jsx)("img", {
                  ref: e,
                  className: r()(p.partnerBrandingLogotype, {
                    [p.rewardHighlightLogotype]: E,
                  }),
                  alt: s.config.messages.gameTitle,
                  src: (0, u.Gs)(s, x),
                }),
            }),
          ],
        });
      };
    },
    340100: function (e, t, n) {
      n(571269), n(298267);
      var s = n(735250);
      n(470079);
      var o = n(120356),
        a = n.n(o),
        i = n(692547),
        r = n(481060),
        l = n(113434),
        u = n(26650),
        c = n(601084);
      t.Z = function (e) {
        let {
            className: t,
            color: n = i.Z.colors.WHITE,
            quest: o,
            isInventory: d,
          } = e,
          C = (0, l.qb)(e.quest),
          { percentComplete: m, completedRatioDisplay: p } = (0, l.I)(o);
        return !d && C.length > 0
          ? (0, s.jsx)(u.Z, { children: C.at(0) })
          : (0, s.jsxs)("div", {
              className: a()(c.wrapper, t),
              style: { color: n.css },
              children: [
                (0, s.jsxs)("div", {
                  className: c.percentCompleteWrapper,
                  children: [
                    (0, s.jsx)(r.Text, {
                      variant: "text-xs/semibold",
                      className: c.percentCompleteLabel,
                      color: "none",
                      children: p,
                    }),
                    (0, s.jsx)("div", {
                      className: c.percentCompleteLabelOffset,
                      style: { width: "".concat(100 - m, "%") },
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: c.progressBar,
                  role: "progressbar",
                  "aria-valuenow": m,
                  children: (0, s.jsx)("div", {
                    className: c.progressBarFill,
                    style: { width: "".concat(m, "%") },
                  }),
                }),
                C.length > 0 &&
                  (0, s.jsx)(u.Z, { isInventory: d, children: C.at(0) }),
              ],
            });
      };
    },
    611855: function (e, t, n) {
      var s = n(735250);
      n(470079);
      var o = n(120356),
        a = n.n(o),
        i = n(481060),
        r = n(689938),
        l = n(608561);
      t.Z = function (e) {
        let {
          className: t,
          color: n = "header-primary",
          textOpacity: o = 0.9,
          bgOpacity: u = 0.4,
        } = e;
        return (0, s.jsxs)(i.Text, {
          variant: "text-xxs/medium",
          color: n,
          className: a()(l.promotedTag, t),
          children: [
            (0, s.jsx)("span", {
              className: l.promotedTagBackground,
              style: { opacity: u },
            }),
            (0, s.jsx)("span", {
              style: { opacity: o },
              children: r.Z.Messages.QUESTS_PROMOTED,
            }),
          ],
        });
      };
    },
    670638: function (e, t, n) {
      n.d(t, {
        r: function () {
          return _;
        },
      });
      var s = n(735250),
        o = n(470079),
        a = n(442837),
        i = n(481060),
        r = n(239091),
        l = n(479531),
        u = n(390322),
        c = n(617136),
        d = n(272008),
        C = n(113434),
        m = n(569984),
        p = n(918701),
        x = n(341907),
        E = n(46140),
        h = n(231338),
        q = n(689938);
      function T(e) {
        var t;
        let n = (0, a.e7)([m.Z], () => m.Z.questDeliveryOverride, []),
          u = (0, p.GN)(e.questContent),
          T = (0, p.zK)(e.quest, E.S7.IN_HOUSE_CONSOLE_QUEST),
          _ = (0, p.KM)(e.quest),
          {
            handleComplete: M,
            handleProgress: j,
            handleResetDismissibilityClick: I,
            handleResetStatusClick: N,
            handleOverrideDeliveryClick: g,
          } = (0, C.kJ)(e.quest.id),
          b = o.useCallback(() => {
            (0, p.FE)(e.quest, {
              content: e.questContent,
              ctaContent: c.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
            });
          }, [e.quest, e.questContent]),
          S = o.useCallback(() => {
            (0, p.f2)(e.quest.id, {
              content: e.questContent,
              position: e.questContentPosition,
              ctaContent: c.jZ.CONTEXT_MENU_COPY_LINK,
            });
          }, [e.quest, e.questContent, e.questContentPosition]),
          f = (e) =>
            (0, i.showToast)(
              (0, i.createToast)(
                new l.Z(e, e.status).message,
                i.ToastType.FAILURE,
              ),
            );
        return (0, s.jsxs)(i.Menu, {
          variant: "fixed",
          onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, r.Zy)();
          },
          navId: "quests-entry",
          "aria-label": q.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
          onClose:
            null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t
              ? t
              : h.dG,
          children: [
            !1 === _ &&
              (0, s.jsxs)(
                i.MenuGroup,
                {
                  children: [
                    !1 === T &&
                      (0, s.jsx)(i.MenuItem, {
                        id: "play-game",
                        label: q.Z.Messages.QUESTS_GET_THIS_GAME,
                        action: b,
                        icon: i.LinkExternalMediumIcon,
                      }),
                    !0 === e.showShareLink &&
                      (0, s.jsx)(i.MenuItem, {
                        id: "share-link",
                        label: q.Z.Messages.COPY_LINK,
                        action: S,
                        icon: i.CopyIcon,
                      }),
                  ],
                },
                "major-actions",
              ),
            (0, s.jsxs)(
              i.MenuGroup,
              {
                children: [
                  !e.hideLearnMore &&
                    (0, s.jsx)(i.MenuItem, {
                      id: "learn-more",
                      label: q.Z.Messages.QUESTS_LEARN_MORE_V2,
                      action: () => {
                        (0, c._3)({
                          questId: e.quest.id,
                          questContent: e.questContent,
                          questContentPosition: e.questContentPosition,
                          questContentCTA: c.jZ.CONTEXT_MENU_LEARN_MORE,
                        }),
                          (0, x.navigateToQuestHome)(
                            E.dr.QUEST_CONTEXT_MENU,
                            e.questContent,
                            e.quest.id,
                          );
                      },
                    }),
                  e.shouldShowDisclosure &&
                    (0, s.jsx)(i.MenuItem, {
                      id: "display-disclosure",
                      label: q.Z.Messages.QUESTS_DISCLOSURE_LABEL,
                      action: () => {
                        (0, x.openDisclosureModal)(e.quest, {
                          content: e.questContent,
                          position: e.questContentPosition,
                          ctaContent: c.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                        });
                      },
                    }),
                  u &&
                    (0, s.jsx)(i.MenuItem, {
                      id: "hide-entrypoint",
                      label: q.Z.Messages.QUESTS_HIDE_THIS,
                      action: () => {
                        (0, c._3)({
                          questId: e.quest.id,
                          questContent: e.questContent,
                          questContentPosition: e.questContentPosition,
                          questContentCTA: c.jZ.CONTEXT_MENU_HIDE_CONTENT,
                        }),
                          (0, p.GN)(e.questContent) &&
                            (0, d.gl)(e.quest.id, e.questContent);
                      },
                      subtext:
                        q.Z.Messages.QUESTS_FIND_THIS_IN_DISCOVERY_QUEST_HOME,
                    }),
                ],
              },
              "minor-actions",
            ),
            e.quest.preview &&
              (0, s.jsxs)(
                i.MenuGroup,
                {
                  label: "Preview Controls",
                  children: [
                    (0, s.jsx)(i.MenuCheckboxItem, {
                      id: "delivery",
                      label: "Show in Quest Bar",
                      checked: (null == n ? void 0 : n.id) === e.quest.id,
                      action: g,
                    }),
                    (0, s.jsx)(i.MenuItem, {
                      id: "dismiss",
                      label: "Reset Dismissibility",
                      action: I,
                    }),
                    (0, s.jsx)(i.MenuItem, {
                      id: "enrollment",
                      label: "Reset Quest",
                      action: N,
                    }),
                    (0, s.jsx)(i.MenuItem, {
                      id: "progress",
                      label: "Set Random Quest Progress",
                      action: () => {
                        j(0.9 * Math.random() + 0.03);
                      },
                    }),
                    (0, s.jsx)(i.MenuItem, {
                      id: "complete",
                      label: "Complete Quest",
                      action: M,
                    }),
                    (0, p.$J)(e.quest) &&
                      (0, s.jsxs)(i.MenuItem, {
                        id: "console",
                        label: "Console Heartbeat",
                        children: [
                          (0, s.jsx)(i.MenuItem, {
                            disabled: !0,
                            id: "status",
                            label: "Status: ".concat(
                              (0, p.Bz)(e.quest) ? "alive" : "dead",
                            ),
                          }),
                          (0, s.jsx)(i.MenuItem, {
                            id: "start",
                            label: "Start heartbeat (cheatmode)",
                            action: () => (0, d.CS)(e.quest.id, !0).catch(f),
                          }),
                          (0, s.jsx)(i.MenuItem, {
                            id: "stop",
                            label: "Stop heartbeat",
                            action: () => (0, d.is)(e.quest.id).catch(f),
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
      function _(e) {
        let {
            children: t,
            onOpen: n,
            onClose: a,
            preventIdle: r,
            quest: l,
            questContent: d,
            questContentPosition: C,
            ...m
          } = e,
          p = o.useCallback(() => {
            (0, c._3)({
              questId: l.id,
              questContent: d,
              questContentCTA: c.jZ.OPEN_CONTEXT_MENU,
              questContentPosition: C,
            }),
              null != n && n();
          }, [n, l.id, d, C]);
        return (0, s.jsx)(i.Popout, {
          onRequestOpen: p,
          onRequestClose: a,
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return r
              ? (0, s.jsx)(u.Z, {
                  children: (0, s.jsx)(T, {
                    ...m,
                    quest: l,
                    questContent: d,
                    questContentPosition: C,
                    onClose: t,
                  }),
                })
              : (0, s.jsx)(T, {
                  ...m,
                  quest: l,
                  questContent: d,
                  questContentPosition: C,
                  onClose: t,
                });
          },
          animation: i.Popout.Animation.NONE,
          children: (e) => t(e),
        });
      }
    },
    26650: function (e, t, n) {
      var s = n(735250),
        o = n(470079),
        a = n(481060),
        i = n(377171),
        r = n(656588);
      t.Z = o.forwardRef(function (e, t) {
        let { isInventory: n, style: o, children: l } = e;
        return (0, s.jsxs)("div", {
          ref: t,
          className: r.desktopTooltip,
          style: { marginTop: n ? 8 : 0, ...o },
          children: [
            (0, s.jsx)(a.CircleInformationIcon, {
              size: "custom",
              className: r.infoIcon,
              height: n ? 16 : 12,
              width: n ? 16 : 12,
              color: n ? i.Z.TEXT_MUTED : i.Z.WHITE,
            }),
            (0, s.jsx)(a.Text, {
              color: n ? "text-muted" : "always-white",
              variant: n ? "text-xs/normal" : "text-xxs/normal",
              children: l,
            }),
          ],
        });
      });
    },
    390322: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var s = n(735250),
        o = n(470079),
        a = n(618158);
      function i(e) {
        let { children: t } = e,
          { preventIdle: n, allowIdle: i } = (0, a.Y)("popup");
        return (
          o.useEffect(() => (n(), () => i()), [i, n]),
          (0, s.jsx)(s.Fragment, { children: t })
        );
      }
    },
  },
]);
//# sourceMappingURL=71cbb2f8bcdd9b700bc9.js.map
