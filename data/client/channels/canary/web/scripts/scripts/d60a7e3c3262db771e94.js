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
            return x;
          },
        });
      var a = n(200651),
        i = n(192379),
        o = n(481060),
        s = n(493683),
        r = n(594174),
        l = n(626135),
        d = n(799352),
        c = n(343544),
        u = n(110223),
        _ = n(981631),
        m = n(388032);
      function x(e) {
        var t;
        let {
            channelId: n,
            blockedUserIds: x,
            transitionState: h,
            onClose: g,
          } = e,
          f = x.map((e) => r.default.getUser(e));
        i.useEffect(() => {
          l.default.track(_.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: n,
            warning_medium: u.WR.MODAL,
            blocked_user_ids: x,
          });
        }, [n, x]);
        let j = f.length > 1,
          p = [
            {
              icon: j
                ? (0, a.jsx)(o.GroupIcon, {})
                : (0, a.jsx)(o.UserIcon, {}),
              text: j
                ? m.intl.formatToPlainString(m.t.Zqlt5e, {
                    blockedUserCount: f.length,
                  })
                : m.intl.formatToPlainString(m.t.V0aCFx, {
                    userName:
                      null === (t = f[0]) || void 0 === t ? void 0 : t.username,
                  }),
            },
            {
              icon: (0, a.jsx)(o.BellSlashIcon, {}),
              text: m.intl.string(m.t["RIMw5+"]),
            },
            {
              icon: (0, a.jsx)(o.EnvelopeIcon, {}),
              text: m.intl.string(m.t.bejNWF),
            },
          ];
        return (0, a.jsx)(c.Z, {
          headerText: j ? m.intl.string(m.t.aJRlSU) : m.intl.string(m.t.rlBMub),
          secondaryHeaderText: m.intl.string(m.t["mwJJ+f"]),
          infoRows: p,
          onDismissAndStay: () => {
            g(),
              (0, d.O)(n),
              l.default.track(_.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: u.q.CLICK_TO_STAY,
                channel_id: n,
                warning_medium: u.WR.MODAL,
                blocked_user_ids: x,
              });
          },
          onDismissAndLeave: () => {
            g(),
              (0, d.O)(n),
              s.Z.closePrivateChannel(n, !0, !0),
              l.default.track(_.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: u.q.CLICK_TO_LEAVE,
                channel_id: n,
                warning_medium: u.WR.MODAL,
                blocked_user_ids: x,
              });
          },
          leaveButtonText: m.intl.string(m.t.I4q1kJ),
          stayButtonText: m.intl.string(m.t.DRJhmZ),
          transitionState: h,
          onClose: g,
        });
      }
    },
    343544: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var a = n(200651),
        i = n(192379),
        o = n(120356),
        s = n.n(o),
        r = n(481060),
        l = n(511010),
        d = n(922611),
        c = n(126743),
        u = n(444812);
      function _(e) {
        let {
            headerText: t,
            secondaryHeaderText: n,
            descriptionText: o,
            infoRows: _,
            onDismissAndStay: m,
            onDismissAndLeave: x,
            leaveButtonText: h,
            stayButtonText: g,
            transitionState: f,
            impression: j,
          } = e,
          p = (0, d.Do)({ location: "blocked_user_warning_modal" });
        return (0, a.jsxs)(r.ModalRoot, {
          transitionState: f,
          impression: j,
          children: [
            (0, a.jsx)("img", { alt: "", className: c.headerImage, src: u }),
            (0, a.jsxs)(r.ModalHeader, {
              separator: !1,
              className: c.header,
              children: [
                (0, a.jsxs)(r.Heading, {
                  variant: p ? "heading-xl/bold" : "heading-lg/bold",
                  color: p ? "header-primary" : void 0,
                  className: c.title,
                  children: [
                    t,
                    null != n &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("br", {}), n],
                      }),
                  ],
                }),
                null != o &&
                  (0, a.jsx)(r.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: o,
                  }),
              ],
            }),
            (0, a.jsxs)(r.ModalContent, {
              className: c.content,
              children: [
                (0, a.jsx)("div", {
                  className: c.infoGroup,
                  children: _.map((e, t) =>
                    (0, a.jsxs)(
                      i.Fragment,
                      {
                        children: [
                          (0, a.jsxs)("div", {
                            className: s()(c.infoRow, e.className),
                            children: [
                              e.icon,
                              (0, a.jsx)(r.Text, {
                                variant: "text-md/medium",
                                children: e.text,
                              }),
                            ],
                          }),
                          t < _.length - 1 && (0, a.jsx)(l.Z, {}),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
                (0, a.jsxs)("div", {
                  className: c.buttonGroup,
                  children: [
                    (0, a.jsx)(r.Button, {
                      color: r.Button.Colors.PRIMARY,
                      onClick: m,
                      children: g,
                    }),
                    (0, a.jsx)(r.Button, {
                      color: r.Button.Colors.BRAND,
                      size: r.Button.Sizes.MEDIUM,
                      onClick: x,
                      className: c.leave,
                      children: h,
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
//# sourceMappingURL=d60a7e3c3262db771e94.js.map
