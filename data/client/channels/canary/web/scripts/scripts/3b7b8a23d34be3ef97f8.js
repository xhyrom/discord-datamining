"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87337"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    164375: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var a = n(200651),
        i = n(192379),
        s = n(481060),
        r = n(493683),
        o = n(594174),
        l = n(626135),
        c = n(799352),
        d = n(343544),
        u = n(110223),
        x = n(981631),
        m = n(388032);
      function _(e) {
        var t;
        let {
            channelId: n,
            blockedUserIds: _,
            transitionState: h,
            onClose: f,
          } = e,
          g = _.map((e) => o.default.getUser(e));
        i.useEffect(() => {
          l.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: n,
            warning_medium: u.WR.MODAL,
            blocked_user_ids: _,
          });
        }, [n, _]);
        let j = g.length > 1,
          N = [
            {
              icon: j
                ? (0, a.jsx)(s.GroupIcon, {})
                : (0, a.jsx)(s.UserIcon, {}),
              text: j
                ? m.intl.formatToPlainString(m.t.Zqlt5e, {
                    blockedUserCount: g.length,
                  })
                : m.intl.formatToPlainString(m.t.V0aCFx, {
                    userName:
                      null === (t = g[0]) || void 0 === t ? void 0 : t.username,
                  }),
            },
            {
              icon: (0, a.jsx)(s.BellSlashIcon, {}),
              text: m.intl.string(m.t["RIMw5+"]),
            },
            {
              icon: (0, a.jsx)(s.EnvelopeIcon, {}),
              text: m.intl.string(m.t.bejNWF),
            },
          ];
        return (0, a.jsx)(d.Z, {
          headerText: j ? m.intl.string(m.t.aJRlSU) : m.intl.string(m.t.rlBMub),
          secondaryHeaderText: m.intl.string(m.t["mwJJ+f"]),
          infoRows: N,
          onDismissAndStay: () => {
            f(),
              (0, c.O)(n),
              l.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: u.q.CLICK_TO_STAY,
                channel_id: n,
                warning_medium: u.WR.MODAL,
                blocked_user_ids: _,
              });
          },
          onDismissAndLeave: () => {
            f(),
              (0, c.O)(n),
              r.Z.closePrivateChannel(n, !0, !0),
              l.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: u.q.CLICK_TO_LEAVE,
                channel_id: n,
                warning_medium: u.WR.MODAL,
                blocked_user_ids: _,
              });
          },
          leaveButtonText: m.intl.string(m.t.I4q1kJ),
          stayButtonText: m.intl.string(m.t.DRJhmZ),
          transitionState: h,
          onClose: f,
        });
      }
    },
    343544: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var a = n(200651),
        i = n(192379),
        s = n(120356),
        r = n.n(s),
        o = n(481060),
        l = n(511010),
        c = n(126743),
        d = n(444812);
      function u(e) {
        let {
          headerText: t,
          secondaryHeaderText: n,
          descriptionText: s,
          infoRows: u,
          onDismissAndStay: x,
          onDismissAndLeave: m,
          leaveButtonText: _,
          stayButtonText: h,
          transitionState: f,
          impression: g,
        } = e;
        return (0, a.jsxs)(o.ModalRoot, {
          transitionState: f,
          impression: g,
          children: [
            (0, a.jsx)("img", { alt: "", className: c.headerImage, src: d }),
            (0, a.jsxs)(o.ModalHeader, {
              separator: !1,
              className: c.header,
              children: [
                (0, a.jsxs)(o.Heading, {
                  variant: "heading-lg/bold",
                  className: c.title,
                  children: [
                    t,
                    null != n &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("br", {}), n],
                      }),
                  ],
                }),
                null != s &&
                  (0, a.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: s,
                  }),
              ],
            }),
            (0, a.jsxs)(o.ModalContent, {
              className: c.content,
              children: [
                (0, a.jsx)("div", {
                  className: c.infoGroup,
                  children: u.map((e, t) =>
                    (0, a.jsxs)(
                      i.Fragment,
                      {
                        children: [
                          (0, a.jsxs)("div", {
                            className: r()(c.infoRow, e.className),
                            children: [
                              e.icon,
                              (0, a.jsx)(o.Text, {
                                variant: "text-md/medium",
                                children: e.text,
                              }),
                            ],
                          }),
                          t < u.length - 1 && (0, a.jsx)(l.Z, {}),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
                (0, a.jsxs)("div", {
                  className: c.buttonGroup,
                  children: [
                    (0, a.jsx)(o.Button, {
                      color: o.Button.Colors.PRIMARY,
                      onClick: x,
                      children: h,
                    }),
                    (0, a.jsx)(o.Button, {
                      color: o.Button.Colors.BRAND,
                      size: o.Button.Sizes.MEDIUM,
                      onClick: m,
                      className: c.leave,
                      children: _,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    126743: function (e, t, n) {
      e.exports = {
        header: "header_a70452",
        headerImage: "headerImage_a70452",
        title: "title_a70452",
        content: "content_a70452",
        buttonGroup: "buttonGroup_a70452",
        leave: "leave_a70452",
        infoGroup: "infoGroup_a70452",
        infoRow: "infoRow_a70452",
      };
    },
  },
]);
//# sourceMappingURL=3b7b8a23d34be3ef97f8.js.map
