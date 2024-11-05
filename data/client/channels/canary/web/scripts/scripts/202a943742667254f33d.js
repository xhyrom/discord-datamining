"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87337"],
  {
    444812: function (t) {
      t.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    164375: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return _;
          },
        });
      var i = n(200651),
        a = n(192379),
        s = n(481060),
        r = n(493683),
        o = n(594174),
        l = n(626135),
        d = n(799352),
        c = n(343544),
        u = n(110223),
        x = n(981631),
        m = n(388032);
      function _(t) {
        var e;
        let {
            channelId: n,
            blockedUserIds: _,
            transitionState: h,
            onClose: f,
          } = t,
          g = _.map((t) => o.default.getUser(t));
        a.useEffect(() => {
          l.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: n,
            warning_medium: u.WR.MODAL,
            blocked_user_ids: _,
          });
        }, [n, _]);
        let j = g.length > 1,
          p = [
            {
              icon: j
                ? (0, i.jsx)(s.GroupIcon, {})
                : (0, i.jsx)(s.UserIcon, {}),
              text: j
                ? m.intl.formatToPlainString(m.t.Zqlt5e, {
                    blockedUserCount: g.length,
                  })
                : m.intl.formatToPlainString(m.t.V0aCFx, {
                    userName:
                      null === (e = g[0]) || void 0 === e ? void 0 : e.username,
                  }),
            },
            {
              icon: (0, i.jsx)(s.BellSlashIcon, {}),
              text: m.intl.string(m.t["RIMw5+"]),
            },
            {
              icon: (0, i.jsx)(s.EnvelopeIcon, {}),
              text: m.intl.string(m.t.bejNWF),
            },
          ];
        return (0, i.jsx)(c.Z, {
          headerText: j ? m.intl.string(m.t.aJRlSU) : m.intl.string(m.t.rlBMub),
          secondaryHeaderText: m.intl.string(m.t["mwJJ+f"]),
          infoRows: p,
          onDismissAndStay: () => {
            f(),
              (0, d.O)(n),
              l.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: u.q.CLICK_TO_STAY,
                channel_id: n,
                warning_medium: u.WR.MODAL,
                blocked_user_ids: _,
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
    343544: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651),
        a = n(192379),
        s = n(481060),
        r = n(511010),
        o = n(126743),
        l = n(444812);
      function d(t) {
        let {
          headerText: e,
          secondaryHeaderText: n,
          descriptionText: d,
          infoRows: c,
          onDismissAndStay: u,
          onDismissAndLeave: x,
          leaveButtonText: m,
          stayButtonText: _,
          transitionState: h,
          impression: f,
        } = t;
        return (0, i.jsxs)(s.ModalRoot, {
          transitionState: h,
          impression: f,
          children: [
            (0, i.jsx)("img", { alt: "", className: o.headerImage, src: l }),
            (0, i.jsxs)(s.ModalHeader, {
              separator: !1,
              className: o.header,
              children: [
                (0, i.jsxs)(s.Heading, {
                  variant: "heading-lg/bold",
                  className: o.title,
                  children: [
                    e,
                    null != n &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("br", {}), n],
                      }),
                  ],
                }),
                null != d &&
                  (0, i.jsx)(s.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: d,
                  }),
              ],
            }),
            (0, i.jsxs)(s.ModalContent, {
              className: o.content,
              children: [
                (0, i.jsx)("div", {
                  className: o.infoGroup,
                  children: c.map((t, e) =>
                    (0, i.jsxs)(
                      a.Fragment,
                      {
                        children: [
                          (0, i.jsxs)("div", {
                            className: o.infoRow,
                            children: [
                              t.icon,
                              (0, i.jsx)(s.Text, {
                                variant: "text-md/medium",
                                children: t.text,
                              }),
                            ],
                          }),
                          e < c.length - 1 && (0, i.jsx)(r.Z, {}),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
                (0, i.jsxs)("div", {
                  className: o.buttonGroup,
                  children: [
                    (0, i.jsx)(s.Button, {
                      type: "submit",
                      color: s.Button.Colors.BRAND,
                      size: s.Button.Sizes.MEDIUM,
                      onClick: x,
                      children: m,
                    }),
                    (0, i.jsx)(s.Button, {
                      color: s.Button.Colors.PRIMARY,
                      onClick: u,
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
    126743: function (t, e, n) {
      t.exports = {
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
//# sourceMappingURL=202a943742667254f33d.js.map
