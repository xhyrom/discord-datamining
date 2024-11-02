"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87337"],
  {
    444812: function (t) {
      t.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    799352: function (t, n, e) {
      e.d(n, {
        O: function () {
          return a;
        },
      });
      var i = e(544891),
        r = e(981631);
      function a(t) {
        return i.tn.post({ url: r.ANM.CHANNEL_BLOCKED_USER_WARNING_ACK(t) });
      }
    },
    164375: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return m;
          },
        });
      var i = e(200651),
        r = e(192379),
        a = e(481060),
        s = e(493683),
        o = e(594174),
        l = e(626135),
        c = e(799352),
        d = e(343544),
        u = e(110223),
        _ = e(981631),
        x = e(388032);
      function m(t) {
        var n;
        let {
            channelId: e,
            blockedUserIds: m,
            transitionState: h,
            onClose: f,
          } = t,
          g = m.map((t) => o.default.getUser(t));
        r.useEffect(() => {
          l.default.track(_.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: e,
            warning_medium: u.WR.MODAL,
            blocked_user_ids: m,
          });
        }, [e, m]);
        let N = g.length > 1,
          p = [
            {
              icon: N
                ? (0, i.jsx)(a.GroupIcon, {})
                : (0, i.jsx)(a.UserIcon, {}),
              text: N
                ? x.intl.formatToPlainString(x.t.Zqlt5e, {
                    blockedUserCount: g.length,
                  })
                : x.intl.formatToPlainString(x.t.V0aCFx, {
                    userName:
                      null === (n = g[0]) || void 0 === n ? void 0 : n.username,
                  }),
            },
            {
              icon: (0, i.jsx)(a.BellSlashIcon, {}),
              text: x.intl.string(x.t["RIMw5+"]),
            },
            {
              icon: (0, i.jsx)(a.EnvelopeIcon, {}),
              text: x.intl.string(x.t.bejNWF),
            },
          ];
        return (0, i.jsx)(d.Z, {
          headerText: N ? x.intl.string(x.t.aJRlSU) : x.intl.string(x.t.rlBMub),
          secondaryHeaderText: x.intl.string(x.t["mwJJ+f"]),
          infoRows: p,
          onDismissAndStay: () => {
            f(),
              (0, c.O)(e),
              l.default.track(_.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: u.q.CLICK_TO_STAY,
                channel_id: e,
                warning_medium: u.WR.MODAL,
                blocked_user_ids: m,
              });
          },
          onDismissAndLeave: () => {
            f(),
              (0, c.O)(e),
              s.Z.closePrivateChannel(e, !0, !0),
              l.default.track(_.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: u.q.CLICK_TO_LEAVE,
                channel_id: e,
                warning_medium: u.WR.MODAL,
                blocked_user_ids: m,
              });
          },
          leaveButtonText: x.intl.string(x.t.I4q1kJ),
          stayButtonText: x.intl.string(x.t.DRJhmZ),
          transitionState: h,
          onClose: f,
        });
      }
    },
    343544: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = e(200651),
        r = e(192379),
        a = e(481060),
        s = e(511010),
        o = e(126743),
        l = e(444812);
      function c(t) {
        let {
          headerText: n,
          secondaryHeaderText: e,
          descriptionText: c,
          infoRows: d,
          onDismissAndStay: u,
          onDismissAndLeave: _,
          leaveButtonText: x,
          stayButtonText: m,
          transitionState: h,
          impression: f,
        } = t;
        return (0, i.jsxs)(a.ModalRoot, {
          transitionState: h,
          impression: f,
          children: [
            (0, i.jsx)("img", { alt: "", className: o.headerImage, src: l }),
            (0, i.jsxs)(a.ModalHeader, {
              separator: !1,
              className: o.header,
              children: [
                (0, i.jsxs)(a.Heading, {
                  variant: "heading-lg/bold",
                  className: o.title,
                  children: [
                    n,
                    null != e &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("br", {}), e],
                      }),
                  ],
                }),
                null != c &&
                  (0, i.jsx)(a.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: c,
                  }),
              ],
            }),
            (0, i.jsxs)(a.ModalContent, {
              className: o.content,
              children: [
                (0, i.jsx)("div", {
                  className: o.infoGroup,
                  children: d.map((t, n) =>
                    (0, i.jsxs)(
                      r.Fragment,
                      {
                        children: [
                          (0, i.jsxs)("div", {
                            className: o.infoRow,
                            children: [
                              t.icon,
                              (0, i.jsx)(a.Text, {
                                variant: "text-md/medium",
                                children: t.text,
                              }),
                            ],
                          }),
                          n < d.length - 1 && (0, i.jsx)(s.Z, {}),
                        ],
                      },
                      n,
                    ),
                  ),
                }),
                (0, i.jsxs)("div", {
                  className: o.buttonGroup,
                  children: [
                    (0, i.jsx)(a.Button, {
                      type: "submit",
                      color: a.Button.Colors.BRAND,
                      size: a.Button.Sizes.MEDIUM,
                      onClick: _,
                      children: x,
                    }),
                    (0, i.jsx)(a.Button, {
                      color: a.Button.Colors.PRIMARY,
                      onClick: u,
                      children: m,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    126743: function (t, n, e) {
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
//# sourceMappingURL=e61475d9fe9eb9c835cd.js.map
