"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87337"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    511010: function (e, n, t) {
      var s = t(735250),
        a = t(470079),
        o = t(120356),
        r = t.n(o),
        i = t(661824),
        _ = t(916315);
      let l = a.forwardRef(function (e, n) {
        let { className: t, isBeforeGroup: a = !1, ...o } = e,
          { children: l } = o;
        return (0, s.jsx)(i.Z, {
          ...o,
          ref: n,
          role: "separator",
          "aria-label": "string" == typeof l ? l : void 0,
          className: r()(t, {
            [_.divider]: !0,
            [_.hasContent]: null != l,
            [_.beforeGroup]: a,
          }),
        });
      });
      n.Z = a.memo(l);
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
      var s = t(735250),
        a = t(470079),
        o = t(481060),
        r = t(493683),
        i = t(594174),
        _ = t(626135),
        l = t(799352),
        d = t(343544),
        c = t(110223),
        u = t(981631),
        E = t(689938);
      function N(e) {
        var n;
        let {
            channelId: t,
            blockedUserIds: N,
            transitionState: M,
            onClose: D,
          } = e,
          G = N.map((e) => i.default.getUser(e));
        a.useEffect(() => {
          _.default.track(u.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: t,
            warning_medium: c.X.MODAL,
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
                ? E.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_PRESENCE.format(
                    { blockedUserCount: G.length },
                  )
                : E.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_PRESENCE.format({
                    userName:
                      null === (n = G[0]) || void 0 === n ? void 0 : n.username,
                  }),
            },
            {
              icon: (0, s.jsx)(o.BellSlashIcon, {}),
              text: E.Z.Messages.GDM_BLOCKED_USER_WARNING_NO_NOTIFY,
            },
            {
              icon: (0, s.jsx)(o.EnvelopeIcon, {}),
              text: E.Z.Messages.GDM_BLOCKED_USER_WARNING_INVITE_NEEDED,
            },
          ];
        return (0, s.jsx)(d.Z, {
          headerText: R
            ? E.Z.Messages.GDM_MULTIPLE_BLOCKED_USERS_WARNING_HEADER_MODAL
            : E.Z.Messages.GDM_SINGLE_BLOCKED_USER_WARNING_HEADER_MODAL,
          secondaryHeaderText:
            E.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE_GROUP_MODAL,
          infoRows: x,
          onDismissAndStay: () => {
            D(),
              (0, l.O)(t),
              _.default.track(u.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: c.q.CLICK_TO_STAY,
                channel_id: t,
                warning_medium: c.X.MODAL,
                blocked_user_ids: N,
              });
          },
          onDismissAndLeave: () => {
            D(),
              (0, l.O)(t),
              r.Z.closePrivateChannel(t, !0, !0),
              _.default.track(u.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: c.q.CLICK_TO_LEAVE,
                channel_id: t,
                warning_medium: c.X.MODAL,
                blocked_user_ids: N,
              });
          },
          leaveButtonText: E.Z.Messages.GDM_BLOCKED_USER_WARNING_LEAVE,
          stayButtonText: E.Z.Messages.GDM_BLOCKED_USER_WARNING_STAY,
          transitionState: M,
          onClose: D,
        });
      }
    },
    343544: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var s = t(735250),
        a = t(470079),
        o = t(481060),
        r = t(511010),
        i = t(126743),
        _ = t(444812);
      function l(e) {
        let {
          headerText: n,
          secondaryHeaderText: t,
          descriptionText: l,
          infoRows: d,
          onDismissAndStay: c,
          onDismissAndLeave: u,
          leaveButtonText: E,
          stayButtonText: N,
          transitionState: M,
        } = e;
        return (0, s.jsxs)(o.ModalRoot, {
          transitionState: M,
          children: [
            (0, s.jsx)("img", { alt: "", className: i.headerImage, src: _ }),
            (0, s.jsxs)(o.ModalHeader, {
              separator: !1,
              className: i.header,
              children: [
                (0, s.jsxs)(o.Heading, {
                  variant: "heading-lg/bold",
                  className: i.title,
                  children: [
                    n,
                    null != t &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("br", {}), t],
                      }),
                  ],
                }),
                null != l &&
                  (0, s.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: l,
                  }),
              ],
            }),
            (0, s.jsxs)(o.ModalContent, {
              className: i.content,
              children: [
                (0, s.jsx)("div", {
                  className: i.infoGroup,
                  children: d.map((e, n) =>
                    (0, s.jsxs)(
                      a.Fragment,
                      {
                        children: [
                          (0, s.jsxs)("div", {
                            className: i.infoRow,
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
                  className: i.buttonGroup,
                  children: [
                    (0, s.jsx)(o.Button, {
                      type: "submit",
                      color: o.Button.Colors.BRAND,
                      size: o.Button.Sizes.MEDIUM,
                      onClick: u,
                      children: E,
                    }),
                    (0, s.jsx)(o.Button, {
                      color: o.Button.Colors.PRIMARY,
                      onClick: c,
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
//# sourceMappingURL=eca44d43499604bc16b0.js.map
