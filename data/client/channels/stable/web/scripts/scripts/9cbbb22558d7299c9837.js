"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26177"],
  {
    158524: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return k;
          },
        });
      var s = a(200651),
        o = a(192379),
        n = a(990547),
        i = a(481060),
        l = a(442837),
        c = a(194359),
        r = a(906732),
        d = a(321488),
        u = a(417183),
        m = a(170245),
        p = a(735778),
        h = a(171368),
        N = a(974042),
        x = a(626135),
        C = a(981631),
        g = a(388032),
        _ = a(61845);
      function I(e) {
        let { user: t, status: a } = e,
          n = o.useContext(x.AnalyticsContext),
          { analyticsLocations: l } = (0, r.ZP)(),
          p = (e) => {
            e.stopPropagation(),
              c.Z.cancelFriendRequest(t.id, {
                location: "Spam requests modal",
              });
          },
          N = (e) => {
            e.stopPropagation(),
              c.Z.addRelationship({
                userId: t.id,
                context: { location: "Spam requests modal" },
              });
          },
          I = a === C.Skl.OFFLINE ? C.Skl.UNKNOWN : a;
        return (0, s.jsx)("div", {
          className: _.spamRequest,
          children: (0, s.jsx)(u.Z, {
            isFocused: !1,
            user: t,
            className: _.listItem,
            activeClassName: _.active,
            onClick: () =>
              (0, h.openUserProfileModal)({
                userId: t.id,
                sourceAnalyticsLocations: l,
                analyticsLocation: n.location,
              }),
            children: (e) =>
              (0, s.jsxs)("div", {
                className: _.listItemContents,
                children: [
                  (0, s.jsx)(m.Z, {
                    user: t,
                    hovered: e,
                    status: I,
                    subText: t.username,
                    className: _.userInfo,
                  }),
                  (0, s.jsxs)("div", {
                    className: _.actions,
                    children: [
                      (0, s.jsx)(d.Z, {
                        icon: i.CheckmarkLargeIcon,
                        actionType: d.Z.ActionTypes.ACCEPT,
                        tooltip: g.intl.string(g.t.ZcibdX),
                        onClick: N,
                        shouldHighlight: e,
                      }),
                      (0, s.jsx)(d.Z, {
                        icon: i.XSmallIcon,
                        actionType: d.Z.ActionTypes.DENY,
                        tooltip: g.intl.string(g.t.xuio0N),
                        onClick: p,
                        shouldHighlight: e,
                      }),
                    ],
                  }),
                ],
              }),
          }),
        });
      }
      function k(e) {
        let { transitionState: t, onClose: a } = e,
          { rows: r } = (0, l.cj)([N.ZP], () => N.ZP.getState()),
          d = r.filter(C.pJs.SPAM),
          u = d.length;
        return (o.useEffect(() => {
          0 === u && a();
        }, [u, a]),
        (0, p.A)({ location: "friend_request_spam_inbox" }))
          ? (0, s.jsxs)(i.ModalRoot, {
              transitionState: t,
              className: _.modal,
              impression: {
                impressionName: n.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX,
              },
              children: [
                (0, s.jsxs)(i.ModalHeader, {
                  separator: !1,
                  children: [
                    (0, s.jsx)(i.Heading, {
                      variant: "heading-lg/bold",
                      className: _.heading,
                      children: g.intl.string(g.t["rIMT+v"]),
                    }),
                    (0, s.jsx)(i.ModalCloseButton, {
                      onClick: a,
                      className: _.closeButton,
                    }),
                  ],
                }),
                (0, s.jsx)(i.ModalContent, {
                  className: _.modalContent,
                  children: d.map((e) =>
                    (0, o.createElement)(I, {
                      ...e,
                      isFocused: !1,
                      key: e.key,
                    }),
                  ),
                }),
                u > 1 &&
                  (0, s.jsx)("div", {
                    className: _.modalFooter,
                    children: (0, s.jsx)(i.Button, {
                      className: _.clearAllButton,
                      onClick: () => {
                        c.Z.clearPendingSpam(), a();
                      },
                      children: g.intl.string(g.t.O8k7Oz),
                    }),
                  }),
              ],
            })
          : null;
      }
    },
    61845: function (e, t, a) {
      e.exports = {
        modal: "modal_e985aa",
        heading: "heading_e985aa",
        closeButton: "closeButton_e985aa",
        modalContent: "modalContent_e985aa",
        modalFooter: "modalFooter_e985aa",
        clearAllButton: "clearAllButton_e985aa",
        spamRequest: "spamRequest_e985aa",
        listItem: "listItem_e985aa",
        active: "active_e985aa",
        listItemContents: "listItemContents_e985aa",
        userInfo: "userInfo_e985aa",
        actions: "actions_e985aa",
      };
    },
  },
]);
//# sourceMappingURL=9cbbb22558d7299c9837.js.map
