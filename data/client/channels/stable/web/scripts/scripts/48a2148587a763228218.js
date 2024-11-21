"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85505"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    232837: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return E;
          },
        }),
        t(627341);
      var i = t(200651);
      t(192379);
      var s = t(278074),
        a = t(990547),
        r = t(442837),
        o = t(481060),
        l = t(287734),
        d = t(922611),
        c = t(592125),
        u = t(699516),
        _ = t(594174),
        h = t(626135),
        m = t(5192),
        g = t(33194),
        x = t(807031),
        N = t(343544),
        f = t(110223),
        p = t(981631),
        j = t(388032),
        v = t(724076);
      function E(e) {
        let { channelId: n, userId: t, transitionState: E, onClose: C } = e,
          I = (0, x.KR)({ location: "warning_modal" }),
          A = (0, r.e7)([u.Z], () => u.Z.isBlocked(t)),
          w = (0, d.Do)({ location: "BlockedUserJoinedVoiceChannelModal" }),
          R = (0, r.e7)([c.Z], () => c.Z.getChannel(n));
        if (!I) return null;
        let O = _.default.getUser(t),
          T = [
            {
              icon: w
                ? (0, i.jsx)("div", {
                    className: v.icon,
                    children: (0, i.jsx)(o.Avatar, {
                      size: o.AvatarSizes.SIZE_32,
                      src:
                        null == O
                          ? void 0
                          : O.getAvatarURL(null == R ? void 0 : R.guild_id, 32),
                      "aria-hidden": !0,
                    }),
                  })
                : (0, i.jsx)(o.UserIcon, {}),
              text: w
                ? j.intl.formatToPlainString(j.t.V5mxhY, {
                    username: m.ZP.getName(
                      null == R ? void 0 : R.guild_id,
                      n,
                      O,
                    ),
                  })
                : j.intl.formatToPlainString(j.t.w0YvUl, {
                    userName: null == O ? void 0 : O.username,
                  }),
              className: w ? v.row : void 0,
            },
            {
              icon: w
                ? (0, i.jsx)("div", {
                    className: v.icon,
                    children: (0, i.jsx)(o.WarningIcon, {}),
                  })
                : (0, i.jsx)(o.MicrophoneIcon, {}),
              text: j.intl.string(j.t["+4O9nZ"]),
              className: w ? v.row : void 0,
            },
          ],
          b = (0, s.EQ)({ stealthRemediationEnabled: w, isBlocked: A })
            .with({ stealthRemediationEnabled: !0, isBlocked: !0 }, () =>
              (0, i.jsxs)(i.Fragment, {
                children: [
                  j.intl.string(j.t.cpgfFh),
                  (0, i.jsx)("br", {}),
                  j.intl.string(j.t.UKQ4Cg),
                ],
              }),
            )
            .with({ stealthRemediationEnabled: !0, isBlocked: !1 }, () =>
              (0, i.jsxs)(i.Fragment, {
                children: [
                  j.intl.string(j.t["xj3j4+"]),
                  (0, i.jsx)("br", {}),
                  j.intl.string(j.t.wWueRU),
                ],
              }),
            )
            .otherwise(() => j.intl.string(j.t.K8YIgY));
        return (0, i.jsx)(N.Z, {
          headerText: w
            ? j.intl.string(j.t["1/gpFh"])
            : j.intl.string(j.t.LGnmpa),
          secondaryHeaderText: w ? void 0 : j.intl.string(j.t["1/gpFh"]),
          descriptionText: b,
          infoRows: T,
          onDismissAndStay: () => {
            C(),
              (0, g.g6)(n),
              h.default.track(
                p.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: f.q.CLICK_TO_STAY,
                  channel_id: n,
                  blocked_user_ids: A ? [t] : [],
                  ignored_user_ids: A ? [] : [t],
                  warning_surface: f.fz.POST_JOIN_MODAL,
                },
              );
          },
          onDismissAndLeave: () => {
            C(),
              l.default.disconnect(),
              h.default.track(
                p.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: f.q.CLICK_TO_LEAVE,
                  channel_id: n,
                  blocked_user_ids: A ? [t] : [],
                  ignored_user_ids: A ? [] : [t],
                  warning_surface: f.fz.POST_JOIN_MODAL,
                },
              );
          },
          leaveButtonText: j.intl.string(j.t["Y56/oK"]),
          stayButtonText: j.intl.string(j.t["Z+/hfX"]),
          transitionState: E,
          onClose: C,
          impression: {
            impressionName:
              a.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
              channel_id: n,
              blocked_user_ids: A ? [t] : [],
              ignored_user_ids: A ? [] : [t],
              warning_surface: f.fz.POST_JOIN_MODAL,
            },
          },
        });
      }
    },
    343544: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651),
        s = t(192379),
        a = t(120356),
        r = t.n(a),
        o = t(481060),
        l = t(511010),
        d = t(126743),
        c = t(444812);
      function u(e) {
        let {
          headerText: n,
          secondaryHeaderText: t,
          descriptionText: a,
          infoRows: u,
          onDismissAndStay: _,
          onDismissAndLeave: h,
          leaveButtonText: m,
          stayButtonText: g,
          transitionState: x,
          impression: N,
        } = e;
        return (0, i.jsxs)(o.ModalRoot, {
          transitionState: x,
          impression: N,
          children: [
            (0, i.jsx)("img", { alt: "", className: d.headerImage, src: c }),
            (0, i.jsxs)(o.ModalHeader, {
              separator: !1,
              className: d.header,
              children: [
                (0, i.jsxs)(o.Heading, {
                  variant: "heading-lg/bold",
                  className: d.title,
                  children: [
                    n,
                    null != t &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("br", {}), t],
                      }),
                  ],
                }),
                null != a &&
                  (0, i.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: a,
                  }),
              ],
            }),
            (0, i.jsxs)(o.ModalContent, {
              className: d.content,
              children: [
                (0, i.jsx)("div", {
                  className: d.infoGroup,
                  children: u.map((e, n) =>
                    (0, i.jsxs)(
                      s.Fragment,
                      {
                        children: [
                          (0, i.jsxs)("div", {
                            className: r()(d.infoRow, e.className),
                            children: [
                              e.icon,
                              (0, i.jsx)(o.Text, {
                                variant: "text-md/medium",
                                children: e.text,
                              }),
                            ],
                          }),
                          n < u.length - 1 && (0, i.jsx)(l.Z, {}),
                        ],
                      },
                      n,
                    ),
                  ),
                }),
                (0, i.jsxs)("div", {
                  className: d.buttonGroup,
                  children: [
                    (0, i.jsx)(o.Button, {
                      color: o.Button.Colors.PRIMARY,
                      onClick: _,
                      children: g,
                    }),
                    (0, i.jsx)(o.Button, {
                      color: o.Button.Colors.BRAND,
                      size: o.Button.Sizes.MEDIUM,
                      onClick: h,
                      className: d.leave,
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
    724076: function (e, n, t) {
      e.exports = { row: "row_dd8598", icon: "icon_dd8598" };
    },
    126743: function (e, n, t) {
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
//# sourceMappingURL=48a2148587a763228218.js.map
