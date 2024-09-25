"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40390"],
  {
    251871: function (e, s, n) {
      n.r(s),
        n.d(s, {
          default: function () {
            return N;
          },
        }),
        n(47120);
      var t = n(735250),
        o = n(470079),
        a = n(399606),
        r = n(481060),
        i = n(100527),
        l = n(906732),
        d = n(565138),
        c = n(314897),
        _ = n(271383),
        I = n(430824),
        u = n(626135),
        M = n(715903),
        A = n(295474),
        O = n(273504),
        L = n(981631),
        D = n(372897),
        E = n(689938),
        C = n(140494);
      function N(e) {
        var s;
        let { onClose: n, transitionState: N, guildId: h } = e,
          U = (0, a.e7)([c.default], () => c.default.getId()),
          T = (0, a.e7)([_.ZP], () => _.ZP.getMember(h, U), [h, U]),
          R = (0, a.e7)([I.Z], () => I.Z.getGuild(h), [h]),
          x =
            null !== (s = null == R ? void 0 : R.name) && void 0 !== s ? s : "",
          g = (0, M.no)(T),
          { analyticsLocations: p } = (0, l.ZP)(
            i.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT,
          ),
          [Z, f] = (0, A.ww)({
            guildId: h,
            analyticsLocations: p,
            openWithoutBackstack: !0,
          }),
          j = g.has(D.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)
            ? E.Z.Messages
                .GUILD_AUTOMOD_USERNAME_INVALID_MODAL_DESCRIPTION_MOBILE
            : E.Z.Messages.GUILD_AUTOMOD_BIO_INVALID_MODAL_DESCRIPTION_MOBILE;
        !f &&
          (j =
            E.Z.Messages
              .GUILD_AUTOMOD_USERNAME_INVALID_NO_PERMS_MODAL_DESCRIPTION_MOBILE);
        let m = f
          ? E.Z.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA
          : E.Z.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
        return (o.useEffect(() => {
          u.default.track(L.rMx.OPEN_MODAL, {
            type: O.dc,
            guild_id: h,
            other_user_id: U,
          });
        }, []),
        o.useEffect(() => {
          if (null == R) {
            n();
            return;
          }
        }, [R, n]),
        null == R)
          ? null
          : (0, t.jsxs)(r.ModalRoot, {
              transitionState: N,
              size: r.ModalSize.SMALL,
              children: [
                (0, t.jsx)(r.ModalHeader, {
                  separator: !1,
                  children: (0, t.jsxs)("div", {
                    className: C.headerContainer,
                    children: [
                      (0, t.jsxs)("div", {
                        className: C.guildIconContainer,
                        children: [
                          (0, t.jsx)(d.Z, { guild: R, size: d.Z.Sizes.LARGER }),
                          (0, t.jsx)("div", {
                            className: C.statusContainer,
                            children: (0, t.jsx)(r.ChatXIcon, {
                              size: "md",
                              color: "currentColor",
                              className: C.statusIcon,
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)(r.Heading, {
                        color: "header-primary",
                        variant: "heading-md/semibold",
                        children:
                          E.Z.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format(
                            { guildName: x },
                          ),
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)(r.ModalContent, {
                  children: (0, t.jsx)("div", {
                    className: C.descriptionContainer,
                    children: (0, t.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: j,
                    }),
                  }),
                }),
                (0, t.jsxs)(r.ModalFooter, {
                  children: [
                    (0, t.jsx)(r.Button, {
                      onClick: () => {
                        Z(), n();
                      },
                      color: r.Button.Colors.BRAND,
                      look: r.Button.Looks.FILLED,
                      children: m,
                    }),
                    (0, t.jsx)(r.Button, {
                      onClick: n,
                      color: r.Button.Colors.PRIMARY,
                      look: r.Button.Looks.LINK,
                      children: E.Z.Messages.CANCEL,
                    }),
                  ],
                }),
              ],
            });
      }
    },
    140494: function (e, s, n) {
      e.exports = {
        headerContainer: "headerContainer_e8233c",
        guildIconContainer: "guildIconContainer_e8233c",
        statusContainer: "statusContainer_e8233c",
        statusIcon: "statusIcon_e8233c",
        descriptionContainer: "descriptionContainer_e8233c",
      };
    },
  },
]);
//# sourceMappingURL=a1ca424c74e3e0e00dd1.js.map
