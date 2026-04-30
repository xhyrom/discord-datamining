"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39038"],
  {
    59520(t, e, n) {
      n.d(e, { I: () => u, J: () => l });
      var i = n(64700),
        r = n(735438);
      let s = (t) => t,
        l = function (t, e) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            r = arguments.length > 3 ? arguments[3] : void 0,
            l = u(s, e, n, r),
            o = i.useRef(t);
          return (
            i.useEffect(() => {
              o.current = l(t);
            }, [t, l]),
            0 === e ? t : o.current
          );
        },
        u = function (t, e) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            s = arguments.length > 3 ? arguments[3] : void 0,
            l = i.useRef((0, r.throttle)(t, e, s));
          return (
            i.useEffect(
              () => (
                (l.current = (0, r.throttle)(t, e, s)),
                () => {
                  l.current?.cancel();
                }
              ),
              [t, e, s, ...n],
            ),
            l.current
          );
        };
    },
    201805(t, e, n) {
      n.d(e, {
        H1: () => B,
        Lk: () => K,
        TQ: () => G,
        Xf: () => F,
        _c: () => W,
        c9: () => H,
        dN: () => V,
        ix: () => N,
      });
      var i = n(627968),
        r = n(64700),
        s = n(785651),
        l = n(17928),
        u = n(717421),
        o = n(663417),
        a = n(691540),
        c = n(857250),
        C = n(97483),
        T = n(59520);
      n(328153);
      var A = n(87719),
        f = n(287809),
        d = n(166403),
        _ = n(829219),
        E = n(859703),
        g = n(507107),
        v = n(302654),
        x = n(890687),
        S = n(971276),
        h = n(18437),
        p = n(590202),
        y = n(971649),
        Q = n(773545),
        b = n(651892),
        O = n(710969),
        m = n(901406),
        k = n(801365),
        q = n(792620),
        P = n(814793),
        U = n(753386),
        L = n(175248),
        R = n(545986),
        D = n(654487),
        I = n(985018);
      function N(t) {
        let {
            quest: e,
            questContent: n,
            questContentPosition: i,
            questContentRowIndex: s,
            sourceQuestContent: u,
          } = t,
          o = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
          a = o?.hasVerifiedEmailOrPhone(),
          c = o?.verified,
          C = (0, h.Ut)();
        return r.useCallback(() => {
          null != e &&
            (C({
              questId: e.id,
              questContent: n,
              questContentCTA: p.Cy.CLAIM_REWARD,
              questContentPosition: i,
              questContentRowIndex: s,
              sourceQuestContent: u,
            }),
            (0, k.ks)(e.config) && !c
              ? (0, L.E)()
              : a
                ? (0, k.K9)(e.config)
                  ? (0, A.x)()
                  : (0, k.tU)(e.config)
                    ? (0, R.hJ)(e, n, u)
                    : (0, k.HG)(e.config)
                      ? (0, R.cf)(e, n, u)
                      : (0, k.ks)(e.config)
                        ? (0, R.Df)(e, n, u)
                        : (0, R.rx)({ quest: e, sourceQuestContent: u })
                : (0, L.E)());
        }, [e, C, n, i, s, a, c, u]);
      }
      let F = (t) => {
          let { useReducedMotion: e, className: n } = t,
            [l, a] = (0, u.z)(() => ({})),
            c = r.useRef(!1),
            C = (0, s.animated)(o.f);
          return {
            render: () =>
              (0, i.jsx)(C, {
                className: n,
                style: e ? void 0 : l,
                color: "currentColor",
                size: "xs",
              }),
            startAnimation: (t) => {
              (c.current = !0),
                a({
                  from: { rotate: "0deg" },
                  to: { rotate: "360deg" },
                  config: { tension: 750, mass: 5, friction: 100 },
                  loop: () => t ?? c.current,
                  immediate: e,
                });
            },
            stopAnimation: () => {
              c.current = !1;
            },
          };
        },
        B = (t, e, n) => {
          let { message: r, xboxURL: s } = (0, x.UX)(),
            l = (0, h.Ut)();
          return (0, i.jsx)("span", {
            onClick: (i) => {
              let r = i.target;
              r?.tagName?.toLowerCase() !== "a" ||
                l({
                  questId: t,
                  questContent: e,
                  questContentCTA:
                    r.getAttribute("href") === s
                      ? p.Cy.HOW_TO_HELP_ARTICLE_XBOX
                      : p.Cy.HOW_TO_HELP_ARTICLE_PLAYSTATION,
                  sourceQuestContent: n,
                });
            },
            children: r,
          });
        };
      function w(t) {
        return (0, q.vl)(t)
          ? t.config.features.includes(D.Li.CLOUD_GAMING_ACTIVITY)
            ? {
                text: I.intl.string(I.t["+qoymD"]),
                questContentCTA: p.Cy.START_QUEST,
              }
            : {
                text: I.intl.string(I.t.E4kW5O),
                questContentCTA: p.Cy.START_QUEST,
              }
          : (0, q.Ov)(t)
            ? {
                text: I.intl.string(I.t.CkUzLd),
                questContentCTA: p.Cy.START_QUEST,
              }
            : {
                text: I.intl.string(I.t.l7E81v),
                questContentCTA: p.Cy.ACCEPT_QUEST,
              };
      }
      function W(t) {
        let {
            quest: e,
            progressState: n,
            questContent: i,
            questContentPosition: s,
            questContentRowIndex: l,
            inGiftInventory: u,
            isVideoQuest: o,
            inGameQuest: a,
            sourceQuestContent: c,
          } = t,
          C = N({
            quest: e,
            questContent: i,
            questContentPosition: s,
            questContentRowIndex: l,
            sourceQuestContent: c,
          }),
          T = (0, x.RR)({ quest: e }),
          A = (0, x.fc)(e),
          f = (0, y.vU)()?.getId(),
          { launchInGameActivity: d } = (0, x.zW)(e),
          E = (0, P.vA)(e);
        return r.useMemo(() => {
          switch (n) {
            case x.F3.UNACCEPTED:
              let t = I.intl.string(I.t.kUQLMJ),
                r = p.Cy.ACCEPT_QUEST;
              return (
                o && ((t = I.intl.string(I.t.umdNin)), (r = p.Cy.START_QUEST)),
                (a || (0, q.vl)(e)) && ({ text: t, questContentCTA: r } = w(e)),
                {
                  text: t,
                  tooltipText: null,
                  onClick: async () => {
                    if ((0, q.K$)(e)) {
                      await (0, _.Oy)(e.id, {
                        questContent: i,
                        questContentCTA: r,
                        questContentPosition: s,
                        questContentRowIndex: l,
                        sourceQuestContent: c,
                      }),
                        (0, R.Fy)(e);
                      return;
                    }
                    o ||
                      E ||
                      (0, _.Oy)(e.id, {
                        questContent: i,
                        questContentCTA: r,
                        questContentPosition: s,
                        questContentRowIndex: l,
                        sourceQuestContent: c,
                      }),
                      o
                        ? await (0, R.e0)(e, {
                            questContent: i,
                            questContentCTA: r,
                            sourceQuestContent: c,
                            sourceQuestContentCTA: p.Cy.ACCEPT_QUEST,
                            questContentPosition: s,
                            questContentRowIndex: l,
                          })
                        : E &&
                          (await (0, _.Oy)(e.id, {
                            questContent: i,
                            questContentCTA: r,
                            questContentPosition: s,
                            questContentRowIndex: l,
                            sourceQuestContent: c,
                          }),
                          d());
                  },
                }
              );
            case x.F3.ACCEPTED:
            case x.F3.IN_PROGRESS:
              if (T && u)
                return {
                  text: I.intl.string(I.t.Cfye4v),
                  tooltipText: null,
                  onClick: () =>
                    (0, m.se)(
                      { quest: e },
                      {
                        content: i,
                        ctaContent: p.Cy.CONNECT_CONSOLE,
                        position: s,
                        rowIndex: l,
                        impressionId: f,
                        sourceQuestContent: c,
                      },
                    ),
                };
              if ((0, q.K$)(e))
                return {
                  text: I.intl.string(I.t.IsH2Sp),
                  tooltipText: null,
                  onClick: () => {
                    (0, R.Fy)(e);
                  },
                };
              if (o)
                return {
                  text: (0, U.WM)(A),
                  tooltipText: I.intl.string(I.t.hsbwjv),
                  onClick: () =>
                    (0, R.d5)({
                      quest: e,
                      questContent: i,
                      sourceQuestContent: c,
                      sourceQuestContentCTA: p.Cy.WATCH_VIDEO,
                    }),
                };
              else if (E) {
                let { text: t } = w(e);
                return {
                  text: t,
                  tooltipText: I.intl.string(I.t.hsbwjv),
                  onClick: () => {
                    d();
                  },
                };
              }
              return {
                text: I.intl.string(I.t.cfY4PE),
                tooltipText: I.intl.string(I.t.hsbwjv),
                onClick: null,
              };
            case x.F3.COMPLETED:
              return {
                text: I.intl.string(I.t.cfY4PE),
                tooltipText: null,
                onClick: C,
              };
            case x.F3.CLAIMED:
              return {
                tooltipText: null,
                onClick: C,
                text: (0, k.r7)(e.config)
                  ? I.intl.string(I.t.bAGFz3)
                  : I.intl.string(I.t.vTgCWx),
              };
          }
        }, [n, o, T, u, C, e, i, s, l, f, A, a, d, c, E]);
      }
      function V() {
        let { enableNewRequestBehavior: t } = v.A.useConfig({
            location: "useQuestBarQuest",
          }),
          e = (0, Q.A)(g.yW.DESKTOP_ACCOUNT_PANEL_AREA),
          n = (0, l.bG)(
            [E.A],
            () =>
              E.A.questDeliveryOverride ??
              (0, O.t6)(
                E.A.quests,
                E.A.questToDeliverForPlacement,
                g.yW.DESKTOP_ACCOUNT_PANEL_AREA,
              ) ??
              null,
          );
        return t ? e : n;
      }
      function G(t) {
        let { quest: e } = t,
          n = (0, S.s)(),
          i = (0, x.LS)(e),
          { premiumSubscription: r } = (0, l.cf)([d.A], () => ({
            premiumSubscription: d.A.getPremiumSubscription(),
          })),
          s = (0, l.bG)([E.A], () => null != E.A.questDeliveryOverride);
        if (null == e)
          return { isQuestBarVisible: !1, reason: "quest_is_null" };
        if ((0, k.K9)(e.config) && r?.isPurchasedExternally)
          return {
            isQuestBarVisible: !1,
            reason: "premium_subscription_is_purchased_externally",
          };
        let u = e.userStatus?.claimedAt != null,
          o =
            !s &&
            null != e.userStatus &&
            (0, O.gO)(e.userStatus, g.uF.QUEST_BAR);
        return u
          ? { isQuestBarVisible: !1, reason: "quest_claimed" }
          : i
            ? { isQuestBarVisible: !1, reason: "quest_expired" }
            : n
              ? o
                ? { isQuestBarVisible: !1, reason: "quest_dismissed" }
                : { isQuestBarVisible: !0, reason: "quest_bar_visible" }
              : {
                  isQuestBarVisible: !1,
                  reason: "quest_not_eligible_for_quests",
                };
      }
      function H() {
        let { isQuestBarVisible: t } = G({ quest: V() }),
          { lastFetchedCurrentQuests: e, lastFetchedQuestToDeliver: n } = (0,
          l.cf)([E.A], () => ({
            lastFetchedCurrentQuests: E.A.lastFetchedCurrentQuests,
            lastFetchedQuestToDeliver: E.A.lastFetchedQuestToDeliver,
          }));
        return { isQuestBarEmpty: !t, hasLoadedQuestBar: 0 !== e && 0 !== n };
      }
      let M = { leading: !0, trailing: !1 };
      function K(t) {
        let { isShareable: e, questId: n, trackingCtx: i } = t;
        return (0, T.I)(
          r.useCallback(() => {
            e &&
              ((0, b.Xm)(n, i),
              (0, a.P0)((0, c.o)(I.intl.string(I.t["+5kSoW"]), C.Ck.SUCCESS)));
          }, [e, n, i]),
          3e3,
          [],
          M,
        );
      }
    },
  },
]);
//# sourceMappingURL=39038.dd3af348f58c153c.js.map
