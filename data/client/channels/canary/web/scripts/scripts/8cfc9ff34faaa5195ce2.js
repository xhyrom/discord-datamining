"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36312"],
  {
    153932: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return k;
          },
        });
      var s = a(200651),
        n = a(192379),
        i = a(990547),
        o = a(481060),
        l = a(442837),
        r = a(194359),
        c = a(906732),
        d = a(321488),
        m = a(417183),
        u = a(170245),
        p = a(735778),
        h = a(922611),
        g = a(171368),
        N = a(974042),
        x = a(626135),
        I = a(981631),
        _ = a(388032),
        b = a(995811);
      function C(e) {
        let { user: t, status: a, ignoredUser: i } = e,
          l = n.useContext(x.AnalyticsContext),
          { analyticsLocations: p } = (0, c.ZP)(),
          N = (e) => {
            e.stopPropagation(),
              r.Z.cancelFriendRequest(t.id, {
                location: "Spam requests modal",
              });
          },
          C = (e) => {
            e.stopPropagation(),
              r.Z.addRelationship({
                userId: t.id,
                context: { location: "Spam requests modal" },
              });
          },
          k = a === I.Skl.OFFLINE ? I.Skl.UNKNOWN : a,
          f = (function (e, t, a) {
            return e
              ? t
                ? _.intl.string(_.t.pO68Oz)
                : _.intl.string(_.t["gp+Yt7"])
              : a.username;
          })((0, h.JX)({ location: "FriendRequestSpamModal" }), i, t);
        return (0, s.jsx)("div", {
          className: b.spamRequest,
          children: (0, s.jsx)(m.Z, {
            isFocused: !1,
            user: t,
            className: b.listItem,
            activeClassName: b.active,
            onClick: () =>
              (0, g.openUserProfileModal)({
                userId: t.id,
                sourceAnalyticsLocations: p,
                analyticsLocation: l.location,
              }),
            children: (e) =>
              (0, s.jsxs)("div", {
                className: b.listItemContents,
                children: [
                  (0, s.jsx)(u.Z, {
                    user: t,
                    hovered: e,
                    status: k,
                    subText: f,
                    className: b.userInfo,
                  }),
                  (0, s.jsxs)("div", {
                    className: b.actions,
                    children: [
                      (0, s.jsx)(d.Z, {
                        icon: o.CheckmarkLargeIcon,
                        actionType: d.Z.ActionTypes.ACCEPT,
                        tooltip: _.intl.string(_.t.ZcibdX),
                        onClick: C,
                        shouldHighlight: e,
                      }),
                      (0, s.jsx)(d.Z, {
                        icon: o.XSmallIcon,
                        actionType: d.Z.ActionTypes.DENY,
                        tooltip: _.intl.string(_.t.xuio0N),
                        onClick: N,
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
          c = (0, h.Do)({ location: "FriendRequestSpamModal" }),
          { rows: d } = (0, l.cj)([N.ZP], () => N.ZP.getState()),
          m = d.filter(I.pJs.PENDING_IGNORED),
          u = d.filter(I.pJs.SPAM),
          g = u.length + m.length;
        return (n.useEffect(() => {
          0 === g && a();
        }, [g, a]),
        (0, p.A)({ location: "friend_request_spam_inbox" }))
          ? (0, s.jsxs)(o.ModalRoot, {
              transitionState: t,
              className: b.modal,
              impression: {
                impressionName: i.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX,
              },
              children: [
                (0, s.jsxs)(o.ModalHeader, {
                  separator: !1,
                  className: b.modalHeader,
                  children: [
                    (0, s.jsx)(o.Heading, {
                      variant: "heading-lg/bold",
                      className: b.heading,
                      children: c
                        ? _.intl.string(_.t.kaYqnp)
                        : _.intl.string(_.t["rIMT+v"]),
                    }),
                    c &&
                      (0, s.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "header-secondary",
                        children: _.intl.string(_.t.tRxb4O),
                      }),
                  ],
                }),
                (0, s.jsxs)(o.ModalContent, {
                  className: b.modalContent,
                  children: [
                    m.map((e) =>
                      (0, n.createElement)(C, {
                        ...e,
                        isFocused: !1,
                        key: e.key,
                        ignoredUser: !0,
                      }),
                    ),
                    u.map((e) =>
                      (0, n.createElement)(C, {
                        ...e,
                        isFocused: !1,
                        key: e.key,
                      }),
                    ),
                  ],
                }),
                g > 1 &&
                  (0, s.jsx)("div", {
                    className: b.modalFooter,
                    children: (0, s.jsx)(o.Button, {
                      className: b.clearAllButton,
                      onClick: () => {
                        r.Z.clearPendingSpamAndIgnored(), a();
                      },
                      children: _.intl.string(_.t.O8k7Oz),
                    }),
                  }),
              ],
            })
          : null;
      }
    },
    995811: function (e, t, a) {
      e.exports = {
        modal: "modal_ba6508",
        modalHeader: "modalHeader_ba6508",
        heading: "heading_ba6508",
        modalContent: "modalContent_ba6508",
        modalFooter: "modalFooter_ba6508",
        clearAllButton: "clearAllButton_ba6508",
        spamRequest: "spamRequest_ba6508",
        listItem: "listItem_ba6508",
        active: "active_ba6508",
        listItemContents: "listItemContents_ba6508",
        userInfo: "userInfo_ba6508",
        actions: "actions_ba6508",
      };
    },
  },
]);
//# sourceMappingURL=8cfc9ff34faaa5195ce2.js.map
