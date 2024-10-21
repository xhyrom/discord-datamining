"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87337"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    799352: function (e, n, t) {
      t.d(n, {
        O: function () {
          return o;
        },
      });
      var s = t(544891),
        a = t(981631);
      function o(e) {
        return s.tn.post({ url: a.ANM.CHANNEL_BLOCKED_USER_WARNING_ACK(e) });
      }
    },
    164375: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return N;
          },
        });
      var s = t(200651),
        a = t(192379),
        o = t(481060),
        r = t(493683),
        _ = t(594174),
        i = t(626135),
        c = t(799352),
        d = t(343544),
        l = t(110223),
        E = t(981631),
        u = t(689938);
      function N(e) {
        var n;
        let {
            channelId: t,
            blockedUserIds: N,
            transitionState: M,
            onClose: D,
          } = e,
          G = N.map((e) => _.default.getUser(e));
        a.useEffect(() => {
          i.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: t,
            warning_medium: l.X.MODAL,
            blocked_user_ids: N,
          });
        }, [t, N]);
        let R = G.length > 1,
          x = [
            {
              icon: R
                ? (0, s.jsx)(o.GroupIcon, {})
                : (0, s.jsx)(o.UserIcon, {}),
              text: R
                ? u.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_PRESENCE.format(
                    { blockedUserCount: G.length },
                  )
                : u.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_PRESENCE.format({
                    userName:
                      null === (n = G[0]) || void 0 === n ? void 0 : n.username,
                  }),
            },
            {
              icon: (0, s.jsx)(o.BellSlashIcon, {}),
              text: u.Z.Messages.GDM_BLOCKED_USER_WARNING_NO_NOTIFY,
            },
            {
              icon: (0, s.jsx)(o.EnvelopeIcon, {}),
              text: u.Z.Messages.GDM_BLOCKED_USER_WARNING_INVITE_NEEDED,
            },
          ];
        return (0, s.jsx)(d.Z, {
          headerText: R
            ? u.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_HEADER_MODAL
            : u.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_HEADER_MODAL,
          secondaryHeaderText:
            u.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE_GROUP_MODAL,
          infoRows: x,
          onDismissAndStay: () => {
            D(),
              (0, c.O)(t),
              i.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: l.q.CLICK_TO_STAY,
                channel_id: t,
                warning_medium: l.X.MODAL,
                blocked_user_ids: N,
              });
          },
          onDismissAndLeave: () => {
            D(),
              (0, c.O)(t),
              r.Z.closePrivateChannel(t, !0, !0),
              i.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: l.q.CLICK_TO_LEAVE,
                channel_id: t,
                warning_medium: l.X.MODAL,
                blocked_user_ids: N,
              });
          },
          leaveButtonText: u.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE,
          stayButtonText: u.Z.Messages.GDM_BLOCKED_USER_WARNING_STAY,
          transitionState: M,
          onClose: D,
        });
      }
    },
    343544: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var s = t(200651),
        a = t(192379),
        o = t(481060),
        r = t(511010),
        _ = t(126743),
        i = t(444812);
      function c(e) {
        let {
          headerText: n,
          secondaryHeaderText: t,
          descriptionText: c,
          infoRows: d,
          onDismissAndStay: l,
          onDismissAndLeave: E,
          leaveButtonText: u,
          stayButtonText: N,
          transitionState: M,
        } = e;
        return (0, s.jsxs)(o.ModalRoot, {
          transitionState: M,
          children: [
            (0, s.jsx)("img", { alt: "", className: _.headerImage, src: i }),
            (0, s.jsxs)(o.ModalHeader, {
              separator: !1,
              className: _.header,
              children: [
                (0, s.jsxs)(o.Heading, {
                  variant: "heading-lg/bold",
                  className: _.title,
                  children: [
                    n,
                    null != t &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("br", {}), t],
                      }),
                  ],
                }),
                null != c &&
                  (0, s.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: c,
                  }),
              ],
            }),
            (0, s.jsxs)(o.ModalContent, {
              className: _.content,
              children: [
                (0, s.jsx)("div", {
                  className: _.infoGroup,
                  children: d.map((e, n) =>
                    (0, s.jsxs)(
                      a.Fragment,
                      {
                        children: [
                          (0, s.jsxs)("div", {
                            className: _.infoRow,
                            children: [
                              e.icon,
                              (0, s.jsx)(o.Text, {
                                variant: "text-md/medium",
                                children: e.text,
                              }),
                            ],
                          }),
                          n < d.length - 1 && (0, s.jsx)(r.Z, {}),
                        ],
                      },
                      n,
                    ),
                  ),
                }),
                (0, s.jsxs)("div", {
                  className: _.buttonGroup,
                  children: [
                    (0, s.jsx)(o.Button, {
                      type: "submit",
                      color: o.Button.Colors.BRAND,
                      size: o.Button.Sizes.MEDIUM,
                      onClick: E,
                      children: u,
                    }),
                    (0, s.jsx)(o.Button, {
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
    126743: function (e, n, t) {
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
//# sourceMappingURL=d26da08fdba6658d52fb.js.map
