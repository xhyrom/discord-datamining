"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85505"],
  {
    444812: function (e) {
      e.exports = "/assets/8a9a3fad79236820ed1b.svg";
    },
    232837: function (e, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return E;
          },
        }),
        i(627341);
      var t = i(200651);
      i(192379);
      var s = i(278074),
        a = i(990547),
        r = i(442837),
        o = i(481060),
        l = i(287734),
        d = i(922611),
        c = i(592125),
        u = i(699516),
        _ = i(594174),
        h = i(626135),
        m = i(5192),
        g = i(33194),
        x = i(807031),
        N = i(343544),
        f = i(110223),
        p = i(981631),
        j = i(388032),
        v = i(724076);
      function E(e) {
        let { channelId: n, userId: i, transitionState: E, onClose: C } = e,
          I = (0, x.KR)({ location: "warning_modal" }),
          w = (0, r.e7)([u.Z], () => u.Z.isBlocked(i)),
          A = (0, d.Do)({ location: "BlockedUserJoinedVoiceChannelModal" }),
          R = (0, r.e7)([c.Z], () => c.Z.getChannel(n));
        if (!I) return null;
        let O = _.default.getUser(i),
          b = [
            {
              icon: A
                ? (0, t.jsx)("div", {
                    className: v.icon,
                    children: (0, t.jsx)(o.Avatar, {
                      size: o.AvatarSizes.SIZE_32,
                      src:
                        null == O
                          ? void 0
                          : O.getAvatarURL(null == R ? void 0 : R.guild_id, 32),
                      "aria-hidden": !0,
                    }),
                  })
                : (0, t.jsx)(o.UserIcon, {}),
              text: A
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
              className: A ? v.row : void 0,
            },
            {
              icon: A
                ? (0, t.jsx)("div", {
                    className: v.icon,
                    children: (0, t.jsx)(o.WarningIcon, {}),
                  })
                : (0, t.jsx)(o.MicrophoneIcon, {}),
              text: j.intl.string(j.t["+4O9nZ"]),
              className: A ? v.row : void 0,
            },
          ],
          T = (0, s.EQ)({ stealthRemediationEnabled: A, isBlocked: w })
            .with({ stealthRemediationEnabled: !0, isBlocked: !0 }, () =>
              (0, t.jsxs)(t.Fragment, {
                children: [
                  j.intl.string(j.t.cpgfFh),
                  (0, t.jsx)("br", {}),
                  j.intl.string(j.t.UKQ4Cg),
                ],
              }),
            )
            .with({ stealthRemediationEnabled: !0, isBlocked: !1 }, () =>
              (0, t.jsxs)(t.Fragment, {
                children: [
                  j.intl.string(j.t["xj3j4+"]),
                  (0, t.jsx)("br", {}),
                  j.intl.string(j.t.wWueRU),
                ],
              }),
            )
            .otherwise(() => j.intl.string(j.t.K8YIgY));
        return (0, t.jsx)(N.Z, {
          headerText: A
            ? j.intl.string(j.t["1/gpFh"])
            : j.intl.string(j.t.LGnmpa),
          secondaryHeaderText: A ? void 0 : j.intl.string(j.t["1/gpFh"]),
          descriptionText: T,
          infoRows: b,
          onDismissAndStay: () => {
            C(),
              (0, g.g6)(n),
              h.default.track(
                p.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT,
                {
                  action: f.q.CLICK_TO_STAY,
                  channel_id: n,
                  blocked_user_ids: w ? [i] : [],
                  ignored_user_ids: w ? [] : [i],
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
                  blocked_user_ids: w ? [i] : [],
                  ignored_user_ids: w ? [] : [i],
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
              blocked_user_ids: w ? [i] : [],
              ignored_user_ids: w ? [] : [i],
              warning_surface: f.fz.POST_JOIN_MODAL,
            },
          },
        });
      }
    },
    343544: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return _;
        },
      });
      var t = i(200651),
        s = i(192379),
        a = i(120356),
        r = i.n(a),
        o = i(481060),
        l = i(511010),
        d = i(922611),
        c = i(126743),
        u = i(444812);
      function _(e) {
        let {
            headerText: n,
            secondaryHeaderText: i,
            descriptionText: a,
            infoRows: _,
            onDismissAndStay: h,
            onDismissAndLeave: m,
            leaveButtonText: g,
            stayButtonText: x,
            transitionState: N,
            impression: f,
          } = e,
          p = (0, d.Do)({ location: "blocked_user_warning_modal" });
        return (0, t.jsxs)(o.ModalRoot, {
          transitionState: N,
          impression: f,
          children: [
            (0, t.jsx)("img", { alt: "", className: c.headerImage, src: u }),
            (0, t.jsxs)(o.ModalHeader, {
              separator: !1,
              className: c.header,
              children: [
                (0, t.jsxs)(o.Heading, {
                  variant: p ? "heading-xl/bold" : "heading-lg/bold",
                  color: p ? "header-primary" : void 0,
                  className: c.title,
                  children: [
                    n,
                    null != i &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)("br", {}), i],
                      }),
                  ],
                }),
                null != a &&
                  (0, t.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "header-secondary",
                    children: a,
                  }),
              ],
            }),
            (0, t.jsxs)(o.ModalContent, {
              className: c.content,
              children: [
                (0, t.jsx)("div", {
                  className: c.infoGroup,
                  children: _.map((e, n) =>
                    (0, t.jsxs)(
                      s.Fragment,
                      {
                        children: [
                          (0, t.jsxs)("div", {
                            className: r()(c.infoRow, e.className),
                            children: [
                              e.icon,
                              (0, t.jsx)(o.Text, {
                                variant: "text-md/medium",
                                children: e.text,
                              }),
                            ],
                          }),
                          n < _.length - 1 && (0, t.jsx)(l.Z, {}),
                        ],
                      },
                      n,
                    ),
                  ),
                }),
                (0, t.jsxs)("div", {
                  className: c.buttonGroup,
                  children: [
                    (0, t.jsx)(o.Button, {
                      color: o.Button.Colors.PRIMARY,
                      onClick: h,
                      children: x,
                    }),
                    (0, t.jsx)(o.Button, {
                      color: o.Button.Colors.BRAND,
                      size: o.Button.Sizes.MEDIUM,
                      onClick: m,
                      className: c.leave,
                      children: g,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    724076: function (e, n, i) {
      e.exports = { row: "row_dd8598", icon: "icon_dd8598" };
    },
    126743: function (e, n, i) {
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
//# sourceMappingURL=555727609ef08f3c8ae2.js.map
