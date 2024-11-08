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
            return m;
          },
        });
      var a = n(200651),
        i = n(192379),
        s = n(481060),
        r = n(493683),
        o = n(594174),
        l = n(626135),
        d = n(799352),
        c = n(343544),
        u = n(110223),
        x = n(981631),
        _ = n(388032);
      function m(e) {
        var t;
        let {
            channelId: n,
            blockedUserIds: m,
            transitionState: h,
            onClose: f,
          } = e,
          g = m.map((e) => o.default.getUser(e));
        i.useEffect(() => {
          l.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: n,
            warning_medium: u.WR.MODAL,
            blocked_user_ids: m,
          });
        }, [n, m]);
        let j = g.length > 1,
          p = [
            {
              icon: j
                ? (0, a.jsx)(s.GroupIcon, {})
                : (0, a.jsx)(s.UserIcon, {}),
              text: j
                ? _.intl.formatToPlainString(_.t.Zqlt5e, {
                    blockedUserCount: g.length,
                  })
                : _.intl.formatToPlainString(_.t.V0aCFx, {
                    userName:
                      null === (t = g[0]) || void 0 === t ? void 0 : t.username,
                  }),
            },
            {
              icon: (0, a.jsx)(s.BellSlashIcon, {}),
              text: _.intl.string(_.t["RIMw5+"]),
            },
            {
              icon: (0, a.jsx)(s.EnvelopeIcon, {}),
              text: _.intl.string(_.t.bejNWF),
            },
          ];
        return (0, a.jsx)(c.Z, {
          headerText: j ? _.intl.string(_.t.aJRlSU) : _.intl.string(_.t.rlBMub),
          secondaryHeaderText: _.intl.string(_.t["mwJJ+f"]),
          infoRows: p,
          onDismissAndStay: () => {
            f(),
              (0, d.O)(n),
              l.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: u.q.CLICK_TO_STAY,
                channel_id: n,
                warning_medium: u.WR.MODAL,
                blocked_user_ids: m,
              });
          },
          onDismissAndLeave: () => {
            f(),
              (0, d.O)(n),
              r.Z.closePrivateChannel(n, !0, !0),
              l.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: u.q.CLICK_TO_LEAVE,
                channel_id: n,
                warning_medium: u.WR.MODAL,
                blocked_user_ids: m,
              });
          },
          leaveButtonText: _.intl.string(_.t.I4q1kJ),
          stayButtonText: _.intl.string(_.t.DRJhmZ),
          transitionState: h,
          onClose: f,
        });
      }
    },
    343544: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var a = n(200651),
        i = n(192379),
        s = n(481060),
        r = n(511010),
        o = n(633930),
        l = n(444812);
      function d(e) {
        let {
          headerText: t,
          secondaryHeaderText: n,
          descriptionText: d,
          infoRows: c,
          onDismissAndStay: u,
          onDismissAndLeave: x,
          leaveButtonText: _,
          stayButtonText: m,
          transitionState: h,
          impression: f,
        } = e;
        return (0, a.jsxs)(s.ModalRoot, {
          transitionState: h,
          impression: f,
          children: [
            (0, a.jsx)("img", { alt: "", className: o.headerImage, src: l }),
            (0, a.jsxs)(s.ModalHeader, {
              separator: !1,
              className: o.header,
              children: [
                (0, a.jsxs)(s.Heading, {
                  variant: "heading-lg/bold",
                  className: o.title,
                  children: [
                    t,
                    null != n &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("br", {}), n],
                      }),
                  ],
                }),
                null != d &&
                  (0, a.jsx)(s.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: d,
                  }),
              ],
            }),
            (0, a.jsxs)(s.ModalContent, {
              className: o.content,
              children: [
                (0, a.jsx)("div", {
                  className: o.infoGroup,
                  children: c.map((e, t) =>
                    (0, a.jsxs)(
                      i.Fragment,
                      {
                        children: [
                          (0, a.jsxs)("div", {
                            className: o.infoRow,
                            children: [
                              e.icon,
                              (0, a.jsx)(s.Text, {
                                variant: "text-md/medium",
                                children: e.text,
                              }),
                            ],
                          }),
                          t < c.length - 1 && (0, a.jsx)(r.Z, {}),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
                (0, a.jsxs)("div", {
                  className: o.buttonGroup,
                  children: [
                    (0, a.jsx)(s.Button, {
                      color: s.Button.Colors.PRIMARY,
                      onClick: u,
                      children: m,
                    }),
                    (0, a.jsx)(s.Button, {
                      color: s.Button.Colors.BRAND,
                      size: s.Button.Sizes.MEDIUM,
                      onClick: x,
                      className: o.leave,
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
    633930: function (e, t, n) {
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
//# sourceMappingURL=e932434ea8c78a1b3e32.js.map
