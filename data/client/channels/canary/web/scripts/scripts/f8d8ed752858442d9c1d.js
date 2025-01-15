"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46786"],
  {
    388131: function (e, t, n) {
      n.r(t),
        n.d(t, {
          createModeratorOverwrite: function () {
            return j;
          },
          default: function () {
            return R;
          },
        }),
        n(47120);
      var r = n(200651),
        l = n(192379),
        o = n(442837),
        i = n(481060),
        a = n(741361),
        d = n(881052),
        s = n(911969),
        c = n(185413),
        u = n(600164),
        h = n(313201),
        x = n(592125),
        g = n(430824),
        m = n(700785),
        b = n(146085),
        p = n(71080),
        S = n(388032),
        M = n(20821);
      function j(e, t) {
        return { id: e, type: t, deny: m.Hn, allow: b.yP };
      }
      function R(e) {
        let { transitionState: t, onClose: n, channelId: m } = e,
          R = (0, h.Dt)(),
          f = (0, o.e7)([x.Z], () => x.Z.getChannel(m)),
          y = (0, o.e7)([g.Z], () =>
            g.Z.getGuild(null == f ? void 0 : f.getGuildId()),
          ),
          [C, E] = l.useState({}),
          [k, N] = l.useState(!1),
          [w, A] = l.useState(null);
        if (null == f || null == y) return null;
        let B = async () => {
          N(!0);
          try {
            await (function (e, t) {
              let n = Object.values(t)
                .filter((e) => {
                  let { row: t } = e;
                  return null != t.id;
                })
                .map((e) => {
                  let { row: t } = e;
                  return t.rowType === p.aC.ROLE
                    ? j(t.id, s.BN.ROLE)
                    : j(t.id, s.BN.MEMBER);
                });
              return (0, a.hw)(e.id, n, !0);
            })(f, C),
              n();
          } catch (t) {
            let e = new d.Hx(t);
            N(!1), A(e);
          }
        };
        return (0, r.jsxs)(i.ModalRoot, {
          transitionState: t,
          "aria-labelledby": R,
          size: i.ModalSize.SMALL,
          className: M.modalRoot,
          children: [
            (0, r.jsxs)(i.ModalHeader, {
              separator: !1,
              direction: u.Z.Direction.VERTICAL,
              align: u.Z.Align.CENTER,
              className: M.header,
              children: [
                (0, r.jsx)(i.Heading, {
                  variant: "heading-xl/semibold",
                  children: S.intl.string(S.t.dMJ3Y2),
                }),
                (0, r.jsxs)(i.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: M.headerSubtitle,
                  children: [
                    (0, r.jsx)(i.StageIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: M.headerSubtitleIcon,
                    }),
                    f.name,
                  ],
                }),
              ],
            }),
            (0, r.jsx)(c.AddMembersBody, {
              guild: y,
              channel: f,
              permission: b.yP,
              pendingAdditions: C,
              setPendingAdditions: E,
            }),
            null != w
              ? (0, r.jsx)(i.Text, {
                  className: M.error,
                  variant: "text-xs/normal",
                  color: "text-danger",
                  children: w.getAnyErrorMessage(),
                })
              : null,
            (0, r.jsxs)(i.ModalFooter, {
              children: [
                (0, r.jsx)(i.Button, {
                  onClick: B,
                  submitting: k,
                  children: S.intl.string(S.t.OYkgVl),
                }),
                (0, r.jsx)(i.Button, {
                  look: i.Button.Looks.LINK,
                  color: i.Button.Colors.PRIMARY,
                  onClick: n,
                  children: S.intl.string(S.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    20821: function (e, t, n) {
      e.exports = {
        modalRoot: "modalRoot_d3497c",
        header: "header_d3497c",
        headerSubtitle: "headerSubtitle_d3497c",
        headerSubtitleIcon: "headerSubtitleIcon_d3497c",
        error: "error_d3497c",
      };
    },
  },
]);
//# sourceMappingURL=f8d8ed752858442d9c1d.js.map
