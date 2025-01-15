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
        p = a(922611),
        h = a(171368),
        g = a(974042),
        N = a(626135),
        x = a(981631),
        I = a(388032),
        C = a(522066);
      function b(e) {
        let { user: t, status: a, ignoredUser: i } = e,
          l = n.useContext(N.AnalyticsContext),
          { analyticsLocations: g } = (0, c.ZP)(),
          b = (e) => {
            e.stopPropagation(),
              r.Z.cancelFriendRequest(t.id, {
                location: "Spam requests modal",
              });
          },
          k = (e) => {
            e.stopPropagation(),
              r.Z.addRelationship({
                userId: t.id,
                context: { location: "Spam requests modal" },
              });
          },
          _ = a === x.Skl.OFFLINE ? x.Skl.UNKNOWN : a,
          f = (function (e, t, a) {
            return e
              ? t
                ? I.intl.string(I.t.pO68Oz)
                : I.intl.string(I.t["gp+Yt7"])
              : a.username;
          })((0, p.JX)({ location: "FriendRequestSpamModal" }), i, t);
        return (0, s.jsx)("div", {
          className: C.spamRequest,
          children: (0, s.jsx)(m.Z, {
            isFocused: !1,
            user: t,
            className: C.listItem,
            activeClassName: C.active,
            onClick: () =>
              (0, h.openUserProfileModal)({
                userId: t.id,
                sourceAnalyticsLocations: g,
                analyticsLocation: l.location,
              }),
            children: (e) =>
              (0, s.jsxs)("div", {
                className: C.listItemContents,
                children: [
                  (0, s.jsx)(u.Z, {
                    user: t,
                    hovered: e,
                    status: _,
                    subText: f,
                    className: C.userInfo,
                  }),
                  (0, s.jsxs)("div", {
                    className: C.actions,
                    children: [
                      (0, s.jsx)(d.Z, {
                        icon: o.CheckmarkLargeIcon,
                        actionType: d.Z.ActionTypes.ACCEPT,
                        tooltip: I.intl.string(I.t.ZcibdX),
                        onClick: k,
                        shouldHighlight: e,
                      }),
                      (0, s.jsx)(d.Z, {
                        icon: o.XSmallIcon,
                        actionType: d.Z.ActionTypes.DENY,
                        tooltip: I.intl.string(I.t.xuio0N),
                        onClick: b,
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
          c = (0, p.Do)({ location: "FriendRequestSpamModal" }),
          { rows: d } = (0, l.cj)([g.ZP], () => g.ZP.getState()),
          m = d.filter(x.pJs.PENDING_IGNORED),
          u = d.filter(x.pJs.SPAM),
          h = u.length + m.length;
        return (
          n.useEffect(() => {
            0 === h && a();
          }, [h, a]),
          (0, s.jsxs)(o.ModalRoot, {
            transitionState: t,
            className: C.modal,
            impression: {
              impressionName: i.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX,
            },
            children: [
              (0, s.jsxs)(o.ModalHeader, {
                separator: !1,
                className: C.modalHeader,
                children: [
                  (0, s.jsx)(o.Heading, {
                    variant: "heading-lg/bold",
                    className: C.heading,
                    children: c
                      ? I.intl.string(I.t.kaYqnp)
                      : I.intl.string(I.t["rIMT+v"]),
                  }),
                  c &&
                    (0, s.jsx)(o.Text, {
                      variant: "text-md/medium",
                      color: "header-secondary",
                      children: I.intl.string(I.t.tRxb4O),
                    }),
                ],
              }),
              (0, s.jsxs)(o.ModalContent, {
                className: C.modalContent,
                children: [
                  m.map((e) =>
                    (0, n.createElement)(b, {
                      ...e,
                      isFocused: !1,
                      key: e.key,
                      ignoredUser: !0,
                    }),
                  ),
                  u.map((e) =>
                    (0, n.createElement)(b, {
                      ...e,
                      isFocused: !1,
                      key: e.key,
                    }),
                  ),
                ],
              }),
              h > 1 &&
                (0, s.jsx)("div", {
                  className: C.modalFooter,
                  children: (0, s.jsx)(o.Button, {
                    className: C.clearAllButton,
                    onClick: () => {
                      r.Z.clearPendingSpamAndIgnored(), a();
                    },
                    children: I.intl.string(I.t.O8k7Oz),
                  }),
                }),
            ],
          })
        );
      }
    },
    522066: function (e, t, a) {
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
//# sourceMappingURL=0c91702ee62d87123bfd.js.map
