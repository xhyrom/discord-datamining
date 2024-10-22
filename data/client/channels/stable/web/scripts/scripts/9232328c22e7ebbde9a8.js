"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26177"],
  {
    158524: function (e, a, s) {
      s.r(a),
        s.d(a, {
          default: function () {
            return x;
          },
        });
      var t = s(200651),
        o = s(192379),
        n = s(990547),
        l = s(481060),
        i = s(442837),
        c = s(194359),
        r = s(906732),
        d = s(321488),
        m = s(417183),
        u = s(170245),
        p = s(735778),
        h = s(171368),
        _ = s(974042),
        N = s(626135),
        C = s(981631),
        E = s(689938),
        I = s(61845);
      function g(e) {
        let { user: a, status: s } = e,
          n = o.useContext(N.AnalyticsContext),
          { analyticsLocations: i } = (0, r.ZP)(),
          p = (e) => {
            e.stopPropagation(),
              c.Z.cancelFriendRequest(a.id, {
                location: "Spam requests modal",
              });
          },
          _ = (e) => {
            e.stopPropagation(),
              c.Z.addRelationship({
                userId: a.id,
                context: { location: "Spam requests modal" },
              });
          },
          g = s === C.Skl.OFFLINE ? C.Skl.UNKNOWN : s;
        return (0, t.jsx)("div", {
          className: I.spamRequest,
          children: (0, t.jsx)(m.Z, {
            isFocused: !1,
            user: a,
            className: I.listItem,
            activeClassName: I.active,
            onClick: () =>
              (0, h.openUserProfileModal)({
                userId: a.id,
                sourceAnalyticsLocations: i,
                analyticsLocation: n.location,
              }),
            children: (e) =>
              (0, t.jsxs)("div", {
                className: I.listItemContents,
                children: [
                  (0, t.jsx)(u.Z, {
                    user: a,
                    hovered: e,
                    status: g,
                    subText: a.username,
                    className: I.userInfo,
                  }),
                  (0, t.jsxs)("div", {
                    className: I.actions,
                    children: [
                      (0, t.jsx)(d.Z, {
                        icon: l.CheckmarkLargeIcon,
                        actionType: d.Z.ActionTypes.ACCEPT,
                        tooltip: E.Z.Messages.FRIEND_REQUEST_ACCEPT,
                        onClick: _,
                        shouldHighlight: e,
                      }),
                      (0, t.jsx)(d.Z, {
                        icon: l.XSmallIcon,
                        actionType: d.Z.ActionTypes.DENY,
                        tooltip: E.Z.Messages.FRIEND_REQUEST_IGNORE,
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
      function x(e) {
        let { transitionState: a, onClose: s } = e,
          { rows: r } = (0, i.cj)([_.ZP], () => _.ZP.getState()),
          d = r.filter(C.pJs.SPAM),
          m = d.length;
        return (o.useEffect(() => {
          0 === m && s();
        }, [m, s]),
        (0, p.A)({ location: "friend_request_spam_inbox" }))
          ? (0, t.jsxs)(l.ModalRoot, {
              transitionState: a,
              className: I.modal,
              impression: {
                impressionName: n.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX,
              },
              children: [
                (0, t.jsxs)(l.ModalHeader, {
                  separator: !1,
                  children: [
                    (0, t.jsx)(l.Heading, {
                      variant: "heading-lg/bold",
                      className: I.heading,
                      children: E.Z.Messages.FRIEND_REQUESTS_SPAM_REQUESTS,
                    }),
                    (0, t.jsx)(l.ModalCloseButton, {
                      onClick: s,
                      className: I.closeButton,
                    }),
                  ],
                }),
                (0, t.jsx)(l.ModalContent, {
                  className: I.modalContent,
                  children: d.map((e) =>
                    (0, o.createElement)(g, {
                      ...e,
                      isFocused: !1,
                      key: e.key,
                    }),
                  ),
                }),
                m > 1 &&
                  (0, t.jsx)("div", {
                    className: I.modalFooter,
                    children: (0, t.jsx)(l.Button, {
                      className: I.clearAllButton,
                      onClick: () => {
                        c.Z.clearPendingSpam(), s();
                      },
                      children: E.Z.Messages.CLEAR_ALL,
                    }),
                  }),
              ],
            })
          : null;
      }
    },
    61845: function (e, a, s) {
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
//# sourceMappingURL=9232328c22e7ebbde9a8.js.map
