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
        i = n(735250);
      n(470079);
      var a = n(120356),
        r = n.n(a),
        l = n(780384),
        u = n(918701),
        c = n(302245),
        d = n(78826),
        C = n(46140),
        E = n(981631),
        m = n(272326);
      ((s = o || (o = {}))[(s.SMALL = 24)] = "SMALL"),
        (s[(s.MEDIUM = 32)] = "MEDIUM");
      t.Z = function (e) {
        let {
            className: t,
            gameTileSize: n = 24,
            quest: s,
            theme: o = E.BRd.DARK,
            withGameTile: a = !0,
          } = e,
          p = (0, l.wj)(o) ? E.BRd.DARK : E.BRd.LIGHT,
          x = (0, c.vI)(s, C.dr.QUESTS_BAR);
        return (0, i.jsxs)("div", {
          className: r()(m.partnerBranding, t),
          children: [
            a &&
              (0, i.jsx)(d.Fl, {
                id: "QuestPartnerBranding_gameTile",
                children: (e) =>
                  (0, i.jsx)("img", {
                    ref: e,
                    className: m.partnerBrandingGameTile,
                    alt: "",
                    src: (0, u.uo)(s, p),
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
            (0, i.jsx)(d.Fl, {
              id: "QuestPartnerBranding_gameLogotype",
              children: (e) =>
                (0, i.jsx)("img", {
                  ref: e,
                  className: r()(m.partnerBrandingLogotype, {
                    [m.rewardHighlightLogotype]: x,
                  }),
                  alt: s.config.messages.gameTitle,
                  src: (0, u.Gs)(s, p),
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
        i = n.n(o),
        a = n(692547),
        r = n(481060),
        l = n(113434),
        u = n(26650),
        c = n(601084);
      t.Z = function (e) {
        let {
            className: t,
            color: n = a.Z.colors.WHITE,
            quest: o,
            isInventory: d,
          } = e,
          C = (0, l.qb)(e.quest),
          { percentComplete: E, completedRatioDisplay: m } = (0, l.I)(o);
        return !d && C.length > 0
          ? (0, s.jsx)(u.Z, { children: C.at(0) })
          : (0, s.jsxs)("div", {
              className: i()(c.wrapper, t),
              style: { color: n.css },
              children: [
                (0, s.jsxs)("div", {
                  className: c.percentCompleteWrapper,
                  children: [
                    (0, s.jsx)(r.Text, {
                      variant: "text-xs/semibold",
                      className: c.percentCompleteLabel,
                      color: "none",
                      children: m,
                    }),
                    (0, s.jsx)("div", {
                      className: c.percentCompleteLabelOffset,
                      style: { width: "".concat(100 - E, "%") },
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: c.progressBar,
                  role: "progressbar",
                  "aria-valuenow": E,
                  children: (0, s.jsx)("div", {
                    className: c.progressBarFill,
                    style: { width: "".concat(E, "%") },
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
        i = n.n(o),
        a = n(481060),
        r = n(689938),
        l = n(608561);
      t.Z = function (e) {
        let {
          className: t,
          color: n = "header-primary",
          textOpacity: o = 0.9,
          bgOpacity: u = 0.4,
        } = e;
        return (0, s.jsxs)(a.Text, {
          variant: "text-xxs/medium",
          color: n,
          className: i()(l.promotedTag, t),
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
          return M;
        },
      });
      var s = n(735250),
        o = n(470079),
        i = n(442837),
        a = n(481060),
        r = n(239091),
        l = n(479531),
        u = n(390322),
        c = n(617136),
        d = n(272008),
        C = n(113434),
        E = n(569984),
        m = n(918701),
        p = n(471985),
        x = n(341907),
        T = n(46140),
        _ = n(231338),
        q = n(689938);
      function h(e) {
        var t;
        let n = (0, i.e7)([E.Z], () => E.Z.questDeliveryOverride, []),
          u = (0, m.GN)(e.questContent),
          h = (0, m.zK)(e.quest, T.S7.IN_HOUSE_CONSOLE_QUEST),
          M = (0, m.KM)(e.quest),
          N = (0, p.Z)(T.dr.QUEST_CONTEXT_MENU),
          {
            handleComplete: j,
            handleResetDismissibilityClick: I,
            handleResetStatusClick: g,
            handleOverrideDeliveryClick: S,
          } = (0, C.kJ)(e.quest.id),
          b = o.useCallback(() => {
            (0, m.FE)(e.quest, {
              content: e.questContent,
              ctaContent: c.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
            });
          }, [e.quest, e.questContent]),
          f = o.useCallback(() => {
            (0, m.f2)(e.quest.id, {
              content: e.questContent,
              position: e.questContentPosition,
              ctaContent: c.jZ.CONTEXT_MENU_COPY_LINK,
            });
          }, [e.quest, e.questContent, e.questContentPosition]),
          v = (e) =>
            (0, a.showToast)(
              (0, a.createToast)(
                new l.Z(e, e.status).message,
                a.ToastType.FAILURE,
              ),
            );
        return (0, s.jsxs)(a.Menu, {
          variant: "fixed",
          onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, r.Zy)();
          },
          navId: "quests-entry",
          "aria-label": q.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
          onClose:
            null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t
              ? t
              : _.dG,
          children: [
            !1 === M &&
              (0, s.jsxs)(
                a.MenuGroup,
                {
                  children: [
                    !1 === h &&
                      (0, s.jsx)(a.MenuItem, {
                        id: "play-game",
                        label: q.Z.Messages.QUESTS_GET_THIS_GAME,
                        action: b,
                        icon: a.LinkExternalMediumIcon,
                      }),
                    !0 === e.showShareLink &&
                      (0, s.jsx)(a.MenuItem, {
                        id: "share-link",
                        label: q.Z.Messages.COPY_LINK,
                        action: f,
                        icon: a.CopyIcon,
                      }),
                  ],
                },
                "major-actions",
              ),
            (0, s.jsxs)(
              a.MenuGroup,
              {
                children: [
                  !e.hideLearnMore &&
                    (0, s.jsx)(a.MenuItem, {
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
                            T.dr.QUEST_CONTEXT_MENU,
                            e.questContent,
                            e.quest.id,
                          );
                      },
                    }),
                  e.shouldShowDisclosure &&
                    (0, s.jsx)(a.MenuItem, {
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
                    (0, s.jsx)(a.MenuItem, {
                      id: "hide-entrypoint",
                      label: q.Z.Messages.QUESTS_HIDE_THIS,
                      action: () => {
                        (0, c._3)({
                          questId: e.quest.id,
                          questContent: e.questContent,
                          questContentPosition: e.questContentPosition,
                          questContentCTA: c.jZ.CONTEXT_MENU_HIDE_CONTENT,
                        }),
                          (0, m.GN)(e.questContent) &&
                            (0, d.gl)(e.quest.id, e.questContent);
                      },
                      subtext: N
                        ? q.Z.Messages.QUESTS_FIND_THIS_IN_DISCOVERY_QUEST_HOME
                        : q.Z.Messages.QUESTS_FIND_QUEST,
                    }),
                ],
              },
              "minor-actions",
            ),
            e.quest.preview &&
              (0, s.jsxs)(
                a.MenuGroup,
                {
                  label: "Preview Controls",
                  children: [
                    (0, s.jsx)(a.MenuCheckboxItem, {
                      id: "delivery",
                      label: "Show in Quest Bar",
                      checked: (null == n ? void 0 : n.id) === e.quest.id,
                      action: S,
                    }),
                    (0, s.jsx)(a.MenuItem, {
                      id: "dismiss",
                      label: "Reset Dismissibility",
                      action: I,
                    }),
                    (0, s.jsx)(a.MenuItem, {
                      id: "enrollment",
                      label: "Reset Quest",
                      action: g,
                    }),
                    (0, s.jsx)(a.MenuItem, {
                      id: "complete",
                      label: "Complete Quest",
                      action: j,
                    }),
                    (0, m.$J)(e.quest) &&
                      (0, s.jsxs)(a.MenuItem, {
                        id: "console",
                        label: "Console Heartbeat",
                        children: [
                          (0, s.jsx)(a.MenuItem, {
                            disabled: !0,
                            id: "status",
                            label: "Status: ".concat(
                              (0, m.Bz)(e.quest) ? "alive" : "dead",
                            ),
                          }),
                          (0, s.jsx)(a.MenuItem, {
                            id: "start",
                            label: "Start heartbeat (cheatmode)",
                            action: () => (0, d.CS)(e.quest.id, !0).catch(v),
                          }),
                          (0, s.jsx)(a.MenuItem, {
                            id: "stop",
                            label: "Stop heartbeat",
                            action: () => (0, d.is)(e.quest.id).catch(v),
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
      function M(e) {
        let {
            children: t,
            onOpen: n,
            onClose: i,
            preventIdle: r,
            quest: l,
            questContent: d,
            questContentPosition: C,
            ...E
          } = e,
          m = o.useCallback(() => {
            (0, c._3)({
              questId: l.id,
              questContent: d,
              questContentCTA: c.jZ.OPEN_CONTEXT_MENU,
              questContentPosition: C,
            }),
              null != n && n();
          }, [n, l.id, d, C]);
        return (0, s.jsx)(a.Popout, {
          onRequestOpen: m,
          onRequestClose: i,
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return r
              ? (0, s.jsx)(u.Z, {
                  children: (0, s.jsx)(h, {
                    ...E,
                    quest: l,
                    questContent: d,
                    questContentPosition: C,
                    onClose: t,
                  }),
                })
              : (0, s.jsx)(h, {
                  ...E,
                  quest: l,
                  questContent: d,
                  questContentPosition: C,
                  onClose: t,
                });
          },
          animation: a.Popout.Animation.NONE,
          children: (e) => t(e),
        });
      }
    },
    26650: function (e, t, n) {
      var s = n(735250),
        o = n(470079),
        i = n(481060),
        a = n(377171),
        r = n(656588);
      t.Z = o.forwardRef(function (e, t) {
        let { isInventory: n, style: o, children: l } = e;
        return (0, s.jsxs)("div", {
          ref: t,
          className: r.desktopTooltip,
          style: { marginTop: n ? 8 : 0, ...o },
          children: [
            (0, s.jsx)(i.CircleInformationIcon, {
              size: "custom",
              className: r.infoIcon,
              height: n ? 16 : 12,
              width: n ? 16 : 12,
              color: n ? a.Z.TEXT_MUTED : a.Z.WHITE,
            }),
            (0, s.jsx)(i.Text, {
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
          return a;
        },
      });
      var s = n(735250),
        o = n(470079),
        i = n(618158);
      function a(e) {
        let { children: t } = e,
          { preventIdle: n, allowIdle: a } = (0, i.Y)("popup");
        return (
          o.useEffect(() => (n(), () => a()), [a, n]),
          (0, s.jsx)(s.Fragment, { children: t })
        );
      }
    },
  },
]);
//# sourceMappingURL=71925851312219a96334.js.map
