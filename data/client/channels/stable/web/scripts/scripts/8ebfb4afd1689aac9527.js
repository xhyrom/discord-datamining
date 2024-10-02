"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64838"],
  {
    134483: function (e, t, l) {
      l(47120);
      var s = l(735250),
        n = l(470079),
        i = l(120356),
        a = l.n(i),
        u = l(442837),
        r = l(780384),
        o = l(481060),
        c = l(358221),
        d = l(594190),
        E = l(687516),
        S = l(210887),
        A = l(937995),
        T = l(158776),
        _ = l(594174),
        m = l(617136),
        C = l(272008),
        j = l(113434),
        L = l(569984),
        v = l(497505),
        p = l(918701),
        R = l(5881),
        f = l(475595),
        h = l(566078),
        N = l(602667),
        Z = l(340100),
        g = l(611855),
        x = l(644646),
        M = l(670638),
        U = l(667105),
        Q = l(860151),
        I = l(341907),
        B = l(46140),
        q = l(981631),
        D = l(354459),
        H = l(689938),
        b = l(869630);
      t.Z = function (e) {
        var t, l, i;
        let { channelId: k, previewQuest: V, isParticipatingOverride: y } = e,
          [z, w] = n.useState(!1),
          O = n.useCallback(() => w(!0), []),
          P = n.useCallback(() => w(!1), []),
          W = n.useContext(A.h9),
          G = (0, u.e7)([_.default], () => _.default.getCurrentUser()),
          K = (0, u.e7)([S.Z], () => S.Z.getState().theme),
          $ = (0, r.wj)(K) ? q.BRd.DARK : q.BRd.LIGHT,
          { isCurrentUserStreamingQuestApplication: F, quest: J } = (0, u.cj)(
            [T.Z, c.Z, L.Z],
            () => {
              var e, t, l, s;
              let n = c.Z.getParticipants(k),
                i =
                  null != V
                    ? V
                    : (function (e, t, l) {
                        for (let a of e) {
                          var s, n, i;
                          if (a.type === D.fO.STREAM) {
                            let e =
                                null !== (n = (0, E.Um)(a.stream, l)) &&
                                void 0 !== n
                                  ? n
                                  : null,
                              i = (0, p.ZZ)(t, e);
                            if (
                              null != i &&
                              (null === (s = i.userStatus) || void 0 === s
                                ? void 0
                                : s.claimedAt) == null
                            )
                              return i;
                          }
                          for (let s of e) {
                            if (!(0, D.I)(s))
                              for (let e of l.getActivities(s.user.id)) {
                                let l = (0, p.ZZ)(t, e);
                                if (
                                  null != l &&
                                  (null === (i = l.userStatus) || void 0 === i
                                    ? void 0
                                    : i.claimedAt) == null &&
                                  ((0, p.Nj)({ quest: l }) || (0, p.$J)(l))
                                )
                                  return l;
                              }
                          }
                        }
                        return null;
                      })(n, L.Z.quests, T.Z);
              return {
                isCurrentUserStreamingQuestApplication:
                  null != i &&
                  null != G &&
                  ((e = n),
                  (t = i),
                  (l = G),
                  (s = T.Z),
                  e.some((e) => {
                    if (e.type !== D.fO.STREAM || e.user.id !== l.id) return !1;
                    let n = (0, E.Um)(e.stream, s);
                    return null != n && (0, p._D)(n, t);
                  })),
                quest: i,
              };
            },
            [k, G, V],
          ),
          Y = null != J ? h.r.build(J.config) : null,
          X = null == Y ? void 0 : Y.application.id,
          ee = (0, u.e7)(
            [d.ZP, T.Z],
            () => {
              if (null == J) return !1;
              let e = d.ZP.getRunningGames().map((e) => e.id);
              if ((0, p.$H)(J) && e.includes(X)) return !0;
              let t =
                null != G
                  ? T.Z.findActivity(
                      G.id,
                      (e) => e.type !== q.IIU.CUSTOM_STATUS,
                    )
                  : null;
              return !!(null != t && (0, p.$J)(J) && (0, p._D)(t, J)) || !1;
            },
            [J, X, G],
          ),
          et = !0 === y || F || ee,
          el = (0, u.e7)([L.Z], () => null != J && L.Z.isEnrolling(J.id), [J]),
          es = (0, u.e7)(
            [c.Z],
            () =>
              ((null == G ? void 0 : G.id) == null
                ? null
                : c.Z.getParticipant(k, G.id)) != null,
            [k, G],
          ),
          en = (0, j.B6)(null == J ? void 0 : J.config.expiresAt),
          ei = (0, j.B6)(null == Y ? void 0 : Y.rewardsExpireAt),
          ea = n.useCallback(() => {
            null != J &&
              (0, C.AH)(J.id, {
                questContent: v.jn.QUEST_LIVE_STREAM,
                questContentCTA: m.jZ.ACCEPT_QUEST,
              });
          }, [J]),
          eu = n.useCallback(() => {
            null != J &&
              ((0, m._3)({
                questId: J.id,
                questContent: v.jn.QUEST_LIVE_STREAM,
                questContentCTA: m.jZ.TRACK_PROGRESS,
              }),
              (0, I.navigateToQuestHome)(
                B.dr.QUEST_CHANNEL_CALL_HEADER,
                v.jn.QUEST_LIVE_STREAM,
                J.id,
              ));
          }, [J]),
          er = n.useCallback(() => {
            null != J &&
              ((0, m._3)({
                questId: J.id,
                questContent: v.jn.QUEST_LIVE_STREAM,
                questContentCTA: m.jZ.LEARN_MORE,
              }),
              (0, I.navigateToQuestHome)(
                B.dr.QUEST_CHANNEL_CALL_HEADER,
                v.jn.QUEST_LIVE_STREAM,
                J.id,
              ));
          }, [J]),
          eo = (0, U.hf)({ quest: J, location: v.jn.QUEST_LIVE_STREAM }),
          ec = n.useMemo(
            () =>
              (0, R.T)({ quest: J, location: B.dr.QUEST_CHANNEL_CALL_HEADER }),
            [J],
          ),
          ed = (0, j.tP)(J);
        if (null == J || !(0, p.dl)(J)) return null;
        let eE =
            (null === (t = J.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          eS =
            (null === (l = J.userStatus) || void 0 === l
              ? void 0
              : l.completedAt) != null,
          eA =
            null != J.userStatus &&
            (0, p.zE)(J.userStatus, v.jn.QUEST_LIVE_STREAM),
          eT = null != J.userStatus && (0, p.zE)(J.userStatus, v.jn.QUEST_BAR),
          e_ = (0, p.Mi)(J, v.jn.QUEST_BAR) && !eT;
        ec.info({
          isQuestCallHeaderDismissed: eA,
          isQuestExpired: ed,
          isQuestBarShowing: e_,
          isCurrentUserCallParticipant: es,
        });
        let em =
          null != V &&
          (null === (i = J.userStatus) || void 0 === i
            ? void 0
            : i.claimedAt) == null;
        if ((!em && (eA || ed || e_)) || (!em && !es)) return null;
        let eC = (0, p.il)(J),
          ej = (0, s.jsx)(x.Z, {
            className: b.rewardTile,
            autoplay: z,
            quest: J,
            questContent: v.jn.QUEST_LIVE_STREAM,
            location: B.dr.QUEST_CHANNEL_CALL_HEADER,
          });
        return (0, s.jsx)(N.A, {
          questOrQuests: J,
          overrideVisibility: !W,
          questContent: v.jn.QUEST_LIVE_STREAM,
          children: () => {
            var e;
            return (0, s.jsxs)("div", {
              className: a()(b.wrapper, { [b.wrapperAccepted]: eE }),
              onFocus: O,
              onMouseEnter: O,
              onBlur: P,
              onMouseLeave: P,
              children: [
                !eE &&
                  (0, s.jsxs)("div", {
                    className: b.rewardTileWrapper,
                    children: [
                      ej,
                      (0, s.jsx)(g.Z, {
                        bgOpacity: 0.32,
                        className: b.promotedTag,
                      }),
                    ],
                  }),
                (0, s.jsxs)("div", {
                  className: b.content,
                  children: [
                    (0, s.jsxs)("div", {
                      className: b.heading,
                      children: [
                        eE && et
                          ? ej
                          : (0, s.jsx)("img", {
                              className: b.gameTile,
                              alt: J.config.messages.gameTitle,
                              src: (0, f.fh)(J, f.Bd.GAME_TILE, $).url,
                            }),
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsxs)("div", {
                              className: b.headingWithSubmenu,
                              children: [
                                (0, s.jsx)(o.Heading, {
                                  className: b.questTitle,
                                  variant: "heading-md/semibold",
                                  color: "header-primary",
                                  children: et
                                    ? (0, p.AV)({ quest: J, taskDetails: eC })
                                    : H.Z.Messages.QUESTS_TITLE.format({
                                        questName: J.config.messages.questName,
                                      }),
                                }),
                                (0, s.jsx)(M.r, {
                                  questContent: v.jn.QUEST_LIVE_STREAM,
                                  quest: J,
                                  preventIdle: !0,
                                  shouldShowDisclosure:
                                    (null === (e = J.userStatus) || void 0 === e
                                      ? void 0
                                      : e.enrolledAt) == null,
                                  children: (e) =>
                                    (0, s.jsx)(o.Clickable, {
                                      ...e,
                                      className: b.submenuWrapper,
                                      "aria-label": H.Z.Messages.ACTIONS,
                                      children: (0, s.jsx)(
                                        o.MoreHorizontalIcon,
                                        {
                                          size: "md",
                                          color: "currentColor",
                                          className: b.submenuIcon,
                                        },
                                      ),
                                    }),
                                }),
                              ],
                            }),
                            (0, s.jsx)(o.Text, {
                              color: "header-secondary",
                              variant: "text-xs/medium",
                              children: eS
                                ? H.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
                                    expirationDate: ei,
                                  })
                                : H.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format(
                                    { expirationDate: en },
                                  ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    eE &&
                      !eS &&
                      !et &&
                      (0, s.jsx)(Q.Z, {
                        autoplay: z,
                        quest: J,
                        questContent: v.jn.QUEST_LIVE_STREAM,
                        taskDetails: eC,
                        location: B.dr.QUEST_CHANNEL_CALL_HEADER,
                      }),
                    (0, s.jsxs)("div", {
                      className: b.ctas,
                      children: [
                        !eE &&
                          (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(o.Button, {
                                className: b.cta,
                                color: o.Button.Colors.PRIMARY,
                                fullWidth: !0,
                                size: o.Button.Sizes.SMALL,
                                onClick: er,
                                children: H.Z.Messages.QUESTS_LEARN_MORE_V2,
                              }),
                              (0, s.jsx)(o.Button, {
                                className: b.cta,
                                color: o.Button.Colors.BRAND,
                                fullWidth: !0,
                                onClick: ea,
                                size: o.Button.Sizes.SMALL,
                                submitting: el,
                                children: H.Z.Messages.QUESTS_ACCEPT_QUEST,
                              }),
                            ],
                          }),
                        eE &&
                          !eS &&
                          et &&
                          (0, s.jsx)(Z.Z, {
                            color: o.tokens.colors.BG_BRAND,
                            quest: J,
                          }),
                        eE &&
                          !eS &&
                          !et &&
                          (0, s.jsx)(o.Button, {
                            className: b.cta,
                            color: o.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: eu,
                            size: o.Button.Sizes.SMALL,
                            children: H.Z.Messages.QUESTS_CHECK_PROGRESS,
                          }),
                        eS &&
                          (0, s.jsx)(o.Button, {
                            className: b.cta,
                            color: o.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: eo,
                            size: o.Button.Sizes.SMALL,
                            children: H.Z.Messages.QUESTS_CLAIM_REWARD,
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
        });
      };
    },
    860151: function (e, t, l) {
      var s = l(735250);
      l(470079);
      var n = l(120356),
        i = l.n(n),
        a = l(481060),
        u = l(585500),
        r = l(644646),
        o = l(489066);
      t.Z = function (e) {
        let {
            className: t,
            autoplay: l,
            quest: n,
            questContent: c,
            taskDetails: d,
            location: E,
          } = e,
          S = (0, u.D)({
            quest: n,
            taskDetails: d,
            location: E,
            questContent: c,
          });
        return (0, s.jsxs)("div", {
          className: i()(o.wrapper, t),
          style: { color: n.config.colors.primary },
          children: [
            (0, s.jsx)(r.Z, {
              autoplay: l,
              className: o.rewardTile,
              quest: n,
              questContent: c,
              location: E,
            }),
            (0, s.jsx)(a.Text, {
              className: o.instructions,
              variant: "text-sm/normal",
              color: "text-normal",
              children: S,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=8ebfb4afd1689aac9527.js.map
