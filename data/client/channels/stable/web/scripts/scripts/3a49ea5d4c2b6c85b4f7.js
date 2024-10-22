"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87337"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    799352: function (e, n, s) {
      s.d(n, {
        O: function () {
          return o;
        },
      });
      var t = s(544891),
        a = s(981631);
      function o(e) {
        return t.tn.post({ url: a.ANM.CHANNEL_BLOCKED_USER_WARNING_ACK(e) });
      }
    },
    164375: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return N;
          },
        });
      var t = s(200651),
        a = s(192379),
        o = s(481060),
        r = s(493683),
        _ = s(594174),
        i = s(626135),
        c = s(799352),
        d = s(343544),
        l = s(110223),
        E = s(981631),
        u = s(689938);
      function N(e) {
        var n;
        let {
            channelId: s,
            blockedUserIds: N,
            transitionState: R,
            onClose: M,
          } = e,
          D = N.map((e) => _.default.getUser(e));
        a.useEffect(() => {
          i.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: s,
            warning_medium: l.WR.MODAL,
            blocked_user_ids: N,
          });
        }, [s, N]);
        let G = D.length > 1,
          x = [
            {
              icon: G
                ? (0, t.jsx)(o.GroupIcon, {})
                : (0, t.jsx)(o.UserIcon, {}),
              text: G
                ? u.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_PRESENCE.format(
                    { blockedUserCount: D.length },
                  )
                : u.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_PRESENCE.format({
                    userName:
                      null === (n = D[0]) || void 0 === n ? void 0 : n.username,
                  }),
            },
            {
              icon: (0, t.jsx)(o.BellSlashIcon, {}),
              text: u.Z.Messages.GDM_BLOCKED_USER_WARNING_NO_NOTIFY,
            },
            {
              icon: (0, t.jsx)(o.EnvelopeIcon, {}),
              text: u.Z.Messages.GDM_BLOCKED_USER_WARNING_INVITE_NEEDED,
            },
          ];
        return (0, t.jsx)(d.Z, {
          headerText: G
            ? u.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_HEADER_MODAL
            : u.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_HEADER_MODAL,
          secondaryHeaderText:
            u.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE_GROUP_MODAL,
          infoRows: x,
          onDismissAndStay: () => {
            M(),
              (0, c.O)(s),
              i.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: l.q.CLICK_TO_STAY,
                channel_id: s,
                warning_medium: l.WR.MODAL,
                blocked_user_ids: N,
              });
          },
          onDismissAndLeave: () => {
            M(),
              (0, c.O)(s),
              r.Z.closePrivateChannel(s, !0, !0),
              i.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: l.q.CLICK_TO_LEAVE,
                channel_id: s,
                warning_medium: l.WR.MODAL,
                blocked_user_ids: N,
              });
          },
          leaveButtonText: u.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE,
          stayButtonText: u.Z.Messages.GDM_BLOCKED_USER_WARNING_STAY,
          transitionState: R,
          onClose: M,
        });
      }
    },
    343544: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return c;
        },
      });
      var t = s(200651),
        a = s(192379),
        o = s(481060),
        r = s(511010),
        _ = s(126743),
        i = s(444812);
      function c(e) {
        let {
          headerText: n,
          secondaryHeaderText: s,
          descriptionText: c,
          infoRows: d,
          onDismissAndStay: l,
          onDismissAndLeave: E,
          leaveButtonText: u,
          stayButtonText: N,
          transitionState: R,
          impression: M,
        } = e;
        return (0, t.jsxs)(o.ModalRoot, {
          transitionState: R,
          impression: M,
          children: [
            (0, t.jsx)("img", { alt: "", className: _.headerImage, src: i }),
            (0, t.jsxs)(o.ModalHeader, {
              separator: !1,
              className: _.header,
              children: [
                (0, t.jsxs)(o.Heading, {
                  variant: "heading-lg/bold",
                  className: _.title,
                  children: [
                    n,
                    null != s &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)("br", {}), s],
                      }),
                  ],
                }),
                null != c &&
                  (0, t.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: c,
                  }),
              ],
            }),
            (0, t.jsxs)(o.ModalContent, {
              className: _.content,
              children: [
                (0, t.jsx)("div", {
                  className: _.infoGroup,
                  children: d.map((e, n) =>
                    (0, t.jsxs)(
                      a.Fragment,
                      {
                        children: [
                          (0, t.jsxs)("div", {
                            className: _.infoRow,
                            children: [
                              e.icon,
                              (0, t.jsx)(o.Text, {
                                variant: "text-md/medium",
                                children: e.text,
                              }),
                            ],
                          }),
                          n < d.length - 1 && (0, t.jsx)(r.Z, {}),
                        ],
                      },
                      n,
                    ),
                  ),
                }),
                (0, t.jsxs)("div", {
                  className: _.buttonGroup,
                  children: [
                    (0, t.jsx)(o.Button, {
                      type: "submit",
                      color: o.Button.Colors.BRAND,
                      size: o.Button.Sizes.MEDIUM,
                      onClick: E,
                      children: u,
                    }),
                    (0, t.jsx)(o.Button, {
                      color: o.Button.Colors.PRIMARY,
                      onClick: l,
                      children: N,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    126743: function (e, n, s) {
      e.exports = {
        header: "header_a70452",
        headerImage: "headerImage_a70452",
        title: "title_a70452",
        content: "content_a70452",
        buttonGroup: "buttonGroup_a70452",
        infoGroup: "infoGroup_a70452",
        infoRow: "infoRow_a70452",
      };
    },
  },
]);
//# sourceMappingURL=3a49ea5d4c2b6c85b4f7.js.map
