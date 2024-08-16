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
      var i = n(120356),
        r = n.n(i),
        l = n(780384),
        u = n(918701),
        c = n(302245),
        d = n(78826),
        E = n(46140),
        C = n(981631),
        m = n(272326);
      ((s = o || (o = {}))[(s.SMALL = 24)] = "SMALL"),
        (s[(s.MEDIUM = 32)] = "MEDIUM");
      t.Z = function (e) {
        let {
            className: t,
            gameTileSize: n = 24,
            quest: s,
            theme: o = C.BRd.DARK,
            withGameTile: i = !0,
          } = e,
          p = (0, l.wj)(o) ? C.BRd.DARK : C.BRd.LIGHT,
          x = (0, c.vI)(s, E.dr.QUESTS_BAR);
        return (0, a.jsxs)("div", {
          className: r()(m.partnerBranding, t),
          children: [
            i &&
              (0, a.jsx)(d.Fl, {
                id: "QuestPartnerBranding_gameTile",
                children: (e) =>
                  (0, a.jsx)("img", {
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
            (0, a.jsx)(d.Fl, {
              id: "QuestPartnerBranding_gameLogotype",
              children: (e) =>
                (0, a.jsx)("img", {
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
      var s = n(735250);
      n(470079);
      var o = n(120356),
        a = n.n(o),
        i = n(692547),
        r = n(481060),
        l = n(113434),
        u = n(918701),
        c = n(330039),
        d = n(601084);
      t.Z = function (e) {
        let {
            className: t,
            color: n = i.Z.colors.WHITE,
            quest: o,
            isInventory: E,
          } = e,
          C = (0, u.rV)(o),
          { percentComplete: m, completedRatioDisplay: p } = (0, l.I)(o);
        return C && !E
          ? (0, s.jsx)(c.Z, {})
          : (0, s.jsxs)("div", {
              className: a()(d.wrapper, t),
              style: { color: n.css },
              children: [
                (0, s.jsxs)("div", {
                  className: d.percentCompleteWrapper,
                  children: [
                    (0, s.jsx)(r.Text, {
                      variant: "text-xs/semibold",
                      className: d.percentCompleteLabel,
                      color: "none",
                      children: p,
                    }),
                    (0, s.jsx)("div", {
                      className: d.percentCompleteLabelOffset,
                      style: { width: "".concat(100 - m, "%") },
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: d.progressBar,
                  role: "progressbar",
                  "aria-valuenow": m,
                  children: (0, s.jsx)("div", {
                    className: d.progressBarFill,
                    style: { width: "".concat(m, "%") },
                  }),
                }),
                C && (0, s.jsx)(c.Z, { isInventory: E }),
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
          return M;
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
        E = n(113434),
        C = n(569984),
        m = n(918701),
        p = n(471985),
        x = n(341907),
        T = n(46140),
        _ = n(231338),
        q = n(689938);
      function h(e) {
        var t;
        let n = (0, a.e7)([C.Z], () => C.Z.questDeliveryOverride, []),
          u = (0, m.GN)(e.questContent),
          h = (0, m.zK)(e.quest, T.S7.IN_HOUSE_CONSOLE_QUEST),
          M = (0, m.KM)(e.quest),
          N = (0, p.Z)(T.dr.QUEST_CONTEXT_MENU),
          {
            handleComplete: j,
            handleResetDismissibilityClick: I,
            handleResetStatusClick: S,
            handleOverrideDeliveryClick: b,
          } = (0, E.kJ)(e.quest.id),
          g = o.useCallback(() => {
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
              : _.dG,
          children: [
            !1 === M &&
              (0, s.jsxs)(
                i.MenuGroup,
                {
                  children: [
                    !1 === h &&
                      (0, s.jsx)(i.MenuItem, {
                        id: "play-game",
                        label: q.Z.Messages.QUESTS_GET_THIS_GAME,
                        action: g,
                        icon: i.LinkExternalMediumIcon,
                      }),
                    !0 === e.showShareLink &&
                      (0, s.jsx)(i.MenuItem, {
                        id: "share-link",
                        label: q.Z.Messages.COPY_LINK,
                        action: f,
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
                            T.dr.QUEST_CONTEXT_MENU,
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
                i.MenuGroup,
                {
                  label: "Preview Controls",
                  children: [
                    (0, s.jsx)(i.MenuCheckboxItem, {
                      id: "delivery",
                      label: "Show in Quest Bar",
                      checked: (null == n ? void 0 : n.id) === e.quest.id,
                      action: b,
                    }),
                    (0, s.jsx)(i.MenuItem, {
                      id: "dismiss",
                      label: "Reset Dismissibility",
                      action: I,
                    }),
                    (0, s.jsx)(i.MenuItem, {
                      id: "enrollment",
                      label: "Reset Quest",
                      action: S,
                    }),
                    (0, s.jsx)(i.MenuItem, {
                      id: "complete",
                      label: "Complete Quest",
                      action: j,
                    }),
                    (0, m.$J)(e.quest) &&
                      (0, s.jsxs)(i.MenuItem, {
                        id: "console",
                        label: "Console Heartbeat",
                        children: [
                          (0, s.jsx)(i.MenuItem, {
                            disabled: !0,
                            id: "status",
                            label: "Status: ".concat(
                              (0, m.Bz)(e.quest) ? "alive" : "dead",
                            ),
                          }),
                          (0, s.jsx)(i.MenuItem, {
                            id: "start",
                            label: "Start heartbeat (cheatmode)",
                            action: () => (0, d.CS)(e.quest.id, !0).catch(v),
                          }),
                          (0, s.jsx)(i.MenuItem, {
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
            onClose: a,
            preventIdle: r,
            quest: l,
            questContent: d,
            questContentPosition: E,
            ...C
          } = e,
          m = o.useCallback(() => {
            (0, c._3)({
              questId: l.id,
              questContent: d,
              questContentCTA: c.jZ.OPEN_CONTEXT_MENU,
              questContentPosition: E,
            }),
              null != n && n();
          }, [n, l.id, d, E]);
        return (0, s.jsx)(i.Popout, {
          onRequestOpen: m,
          onRequestClose: a,
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return r
              ? (0, s.jsx)(u.Z, {
                  children: (0, s.jsx)(h, {
                    ...C,
                    quest: l,
                    questContent: d,
                    questContentPosition: E,
                    onClose: t,
                  }),
                })
              : (0, s.jsx)(h, {
                  ...C,
                  quest: l,
                  questContent: d,
                  questContentPosition: E,
                  onClose: t,
                });
          },
          animation: i.Popout.Animation.NONE,
          children: (e) => t(e),
        });
      }
    },
    330039: function (e, t, n) {
      var s = n(735250),
        o = n(470079),
        a = n(481060),
        i = n(377171),
        r = n(689938),
        l = n(30897);
      t.Z = o.forwardRef(function (e, t) {
        let { isInventory: n, style: o } = e;
        return (0, s.jsxs)("div", {
          ref: t,
          className: l.desktopTooltip,
          style: { marginTop: n ? 8 : 0, ...o },
          children: [
            (0, s.jsx)(a.CircleInformationIcon, {
              size: "custom",
              className: l.infoIcon,
              height: n ? 16 : 12,
              width: n ? 16 : 12,
              color: n ? i.Z.TEXT_MUTED : i.Z.WHITE,
            }),
            (0, s.jsx)(a.Text, {
              color: n ? "text-muted" : "always-white",
              variant: n ? "text-xs/normal" : "text-xxs/normal",
              children: r.Z.Messages.QUESTS_PROGRESS_WEB_TIP,
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
//# sourceMappingURL=692382c59b3908b2004f.js.map
