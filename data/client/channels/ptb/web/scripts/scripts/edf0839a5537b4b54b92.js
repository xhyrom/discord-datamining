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
        N = l(566078),
        f = l(602667),
        h = l(340100),
        Z = l(611855),
        g = l(644646),
        x = l(670638),
        M = l(667105),
        U = l(860151),
        Q = l(341907),
        I = l(46140),
        B = l(981631),
        q = l(354459),
        D = l(689938),
        H = l(869630);
      t.Z = function (e) {
        var t, l, i;
        let { channelId: b, previewQuest: k, isParticipatingOverride: V } = e,
          [y, z] = n.useState(!1),
          w = n.useCallback(() => z(!0), []),
          O = n.useCallback(() => z(!1), []),
          P = n.useContext(A.h9),
          W = (0, u.e7)([_.default], () => _.default.getCurrentUser()),
          G = (0, u.e7)([S.Z], () => S.Z.getState().theme),
          K = (0, r.wj)(G) ? B.BRd.DARK : B.BRd.LIGHT,
          { isCurrentUserStreamingQuestApplication: $, quest: F } = (0, u.cj)(
            [T.Z, c.Z, L.Z],
            () => {
              var e, t, l, s;
              let n = c.Z.getParticipants(b),
                i =
                  null != k
                    ? k
                    : (function (e, t, l) {
                        for (let a of e) {
                          var s, n, i;
                          if (a.type === q.fO.STREAM) {
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
                            if (!(0, q.I)(s))
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
                  null != W &&
                  ((e = n),
                  (t = i),
                  (l = W),
                  (s = T.Z),
                  e.some((e) => {
                    if (e.type !== q.fO.STREAM || e.user.id !== l.id) return !1;
                    let n = (0, E.Um)(e.stream, s);
                    return null != n && (0, p._D)(n, t);
                  })),
                quest: i,
              };
            },
            [b, W, k],
          ),
          J = null != F ? N.r.build(F.config) : null,
          Y = null == J ? void 0 : J.application.id,
          X = (0, u.e7)(
            [d.ZP, T.Z],
            () => {
              if (null == F) return !1;
              let e = d.ZP.getRunningGames().map((e) => e.id);
              if ((0, p.$H)(F) && e.includes(Y)) return !0;
              let t =
                null != W
                  ? T.Z.findActivity(
                      W.id,
                      (e) => e.type !== B.IIU.CUSTOM_STATUS,
                    )
                  : null;
              return !!(null != t && (0, p.$J)(F) && (0, p._D)(t, F)) || !1;
            },
            [F, Y, W],
          ),
          ee = !0 === V || $ || X,
          et = (0, u.e7)([L.Z], () => null != F && L.Z.isEnrolling(F.id), [F]),
          el = (0, u.e7)(
            [c.Z],
            () =>
              ((null == W ? void 0 : W.id) == null
                ? null
                : c.Z.getParticipant(b, W.id)) != null,
            [b, W],
          ),
          es = (0, j.B6)(null == F ? void 0 : F.config.expiresAt),
          en = (0, j.B6)(null == J ? void 0 : J.rewardsExpireAt),
          ei = n.useCallback(() => {
            null != F &&
              (0, C.AH)(F.id, {
                questContent: v.jn.QUEST_LIVE_STREAM,
                questContentCTA: m.jZ.ACCEPT_QUEST,
              });
          }, [F]),
          ea = n.useCallback(() => {
            null != F &&
              ((0, m._3)({
                questId: F.id,
                questContent: v.jn.QUEST_LIVE_STREAM,
                questContentCTA: m.jZ.TRACK_PROGRESS,
              }),
              (0, Q.navigateToQuestHome)(
                I.dr.QUEST_CHANNEL_CALL_HEADER,
                v.jn.QUEST_LIVE_STREAM,
                F.id,
              ));
          }, [F]),
          eu = n.useCallback(() => {
            null != F &&
              ((0, m._3)({
                questId: F.id,
                questContent: v.jn.QUEST_LIVE_STREAM,
                questContentCTA: m.jZ.LEARN_MORE,
              }),
              (0, Q.navigateToQuestHome)(
                I.dr.QUEST_CHANNEL_CALL_HEADER,
                v.jn.QUEST_LIVE_STREAM,
                F.id,
              ));
          }, [F]),
          er = (0, M.hf)({ quest: F, location: v.jn.QUEST_LIVE_STREAM }),
          eo = n.useMemo(
            () =>
              (0, R.T)({ quest: F, location: I.dr.QUEST_CHANNEL_CALL_HEADER }),
            [F],
          ),
          ec = (0, j.tP)(F);
        if (null == F || !(0, p.dl)(F)) return null;
        let ed =
            (null === (t = F.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          eE =
            (null === (l = F.userStatus) || void 0 === l
              ? void 0
              : l.completedAt) != null,
          eS =
            null != F.userStatus &&
            (0, p.zE)(F.userStatus, v.jn.QUEST_LIVE_STREAM),
          eA = null != F.userStatus && (0, p.zE)(F.userStatus, v.jn.QUEST_BAR),
          eT = (0, p.Mi)(F, v.jn.QUEST_BAR) && !eA;
        eo.info({
          isQuestCallHeaderDismissed: eS,
          isQuestExpired: ec,
          isQuestBarShowing: eT,
          isCurrentUserCallParticipant: el,
        });
        let e_ =
          null != k &&
          (null === (i = F.userStatus) || void 0 === i
            ? void 0
            : i.claimedAt) == null;
        if ((!e_ && (eS || ec || eT)) || (!e_ && !el)) return null;
        let em = (0, p.il)(F),
          eC = (0, s.jsx)(g.Z, {
            className: H.rewardTile,
            autoplay: y,
            quest: F,
            questContent: v.jn.QUEST_LIVE_STREAM,
            location: I.dr.QUEST_CHANNEL_CALL_HEADER,
          });
        return (0, s.jsx)(f.A, {
          questOrQuests: F,
          overrideVisibility: !P,
          questContent: v.jn.QUEST_LIVE_STREAM,
          children: () => {
            var e;
            return (0, s.jsxs)("div", {
              className: a()(H.wrapper, { [H.wrapperAccepted]: ed }),
              onFocus: w,
              onMouseEnter: w,
              onBlur: O,
              onMouseLeave: O,
              children: [
                !ed &&
                  (0, s.jsxs)("div", {
                    className: H.rewardTileWrapper,
                    children: [
                      eC,
                      (0, s.jsx)(Z.Z, {
                        bgOpacity: 0.32,
                        className: H.promotedTag,
                      }),
                    ],
                  }),
                (0, s.jsxs)("div", {
                  className: H.content,
                  children: [
                    (0, s.jsxs)("div", {
                      className: H.heading,
                      children: [
                        ed && ee
                          ? eC
                          : (0, s.jsx)("img", {
                              className: H.gameTile,
                              alt: F.config.messages.gameTitle,
                              src: (0, p.uo)(F, K),
                            }),
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsxs)("div", {
                              className: H.headingWithSubmenu,
                              children: [
                                (0, s.jsx)(o.Heading, {
                                  className: H.questTitle,
                                  variant: "heading-md/semibold",
                                  color: "header-primary",
                                  children: ee
                                    ? (0, p.AV)({ quest: F, taskDetails: em })
                                    : D.Z.Messages.QUESTS_TITLE.format({
                                        questName: F.config.messages.questName,
                                      }),
                                }),
                                (0, s.jsx)(x.r, {
                                  questContent: v.jn.QUEST_LIVE_STREAM,
                                  quest: F,
                                  preventIdle: !0,
                                  shouldShowDisclosure:
                                    (null === (e = F.userStatus) || void 0 === e
                                      ? void 0
                                      : e.enrolledAt) == null,
                                  children: (e) =>
                                    (0, s.jsx)(o.Clickable, {
                                      ...e,
                                      className: H.submenuWrapper,
                                      "aria-label": D.Z.Messages.ACTIONS,
                                      children: (0, s.jsx)(
                                        o.MoreHorizontalIcon,
                                        {
                                          size: "md",
                                          color: "currentColor",
                                          className: H.submenuIcon,
                                        },
                                      ),
                                    }),
                                }),
                              ],
                            }),
                            (0, s.jsx)(o.Text, {
                              color: "header-secondary",
                              variant: "text-xs/medium",
                              children: eE
                                ? D.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
                                    expirationDate: en,
                                  })
                                : D.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format(
                                    { expirationDate: es },
                                  ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    ed &&
                      !eE &&
                      !ee &&
                      (0, s.jsx)(U.Z, {
                        autoplay: y,
                        quest: F,
                        questContent: v.jn.QUEST_LIVE_STREAM,
                        taskDetails: em,
                        location: I.dr.QUEST_CHANNEL_CALL_HEADER,
                      }),
                    (0, s.jsxs)("div", {
                      className: H.ctas,
                      children: [
                        !ed &&
                          (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(o.Button, {
                                className: H.cta,
                                color: o.Button.Colors.PRIMARY,
                                fullWidth: !0,
                                size: o.Button.Sizes.SMALL,
                                onClick: eu,
                                children: D.Z.Messages.QUESTS_LEARN_MORE_V2,
                              }),
                              (0, s.jsx)(o.Button, {
                                className: H.cta,
                                color: o.Button.Colors.BRAND,
                                fullWidth: !0,
                                onClick: ei,
                                size: o.Button.Sizes.SMALL,
                                submitting: et,
                                children: D.Z.Messages.QUESTS_ACCEPT_QUEST,
                              }),
                            ],
                          }),
                        ed &&
                          !eE &&
                          ee &&
                          (0, s.jsx)(h.Z, {
                            color: o.tokens.colors.BG_BRAND,
                            quest: F,
                          }),
                        ed &&
                          !eE &&
                          !ee &&
                          (0, s.jsx)(o.Button, {
                            className: H.cta,
                            color: o.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: ea,
                            size: o.Button.Sizes.SMALL,
                            children: D.Z.Messages.QUESTS_CHECK_PROGRESS,
                          }),
                        eE &&
                          (0, s.jsx)(o.Button, {
                            className: H.cta,
                            color: o.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: er,
                            size: o.Button.Sizes.SMALL,
                            children: D.Z.Messages.QUESTS_CLAIM_REWARD,
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
//# sourceMappingURL=edf0839a5537b4b54b92.js.map
