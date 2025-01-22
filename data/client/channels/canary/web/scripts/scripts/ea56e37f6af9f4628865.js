"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8653"],
  {
    591876: function (e) {
      e.exports = "/assets/c54c91ba13d39fe38d6f.svg";
    },
    689963: function (e) {
      e.exports = "/assets/a9a68ec0f731c3646899.svg";
    },
    928090: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        }),
        n(47120);
      var r = n(200651),
        a = n(192379),
        s = n(990547),
        i = n(481060),
        o = n(37234),
        l = n(700582),
        c = n(213609),
        d = n(600164),
        u = n(434404),
        m = n(706454),
        f = n(768581),
        x = n(5192),
        T = n(51144),
        p = n(981631),
        N = n(72766),
        h = n(388032),
        _ = n(413096);
      let E = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : m.default.locale;
        return "https://"
          .concat(p.xr4, "/hc/")
          .concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000168511");
      };
      function I(e) {
        let {
            guild: t,
            toUser: m,
            fromUser: I,
            onClose: R,
            transitionState: b,
          } = e,
          [A, S] = a.useState(!1),
          g = t.hasFeature(p.oNc.VERIFIED) || t.hasFeature(p.oNc.PARTNERED),
          v = g ? h.intl.string(h.t.wDkfrK) : null,
          j = g ? h.intl.format(h.t.A37vwM, { ticketUrl: E() }) : null,
          C =
            t.hasFeature(p.oNc.CREATOR_MONETIZABLE) ||
            t.hasFeature(p.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
        async function F(e) {
          await u.Z.transferOwnership(t.id, m.id, N.X.EMAIL, e);
        }
        async function O() {
          await u.Z.sendTransferOwnershipPincode(t.id, !0);
        }
        async function k(e) {
          e.preventDefault(), R();
          try {
            I.mfaEnabled || null == I.email
              ? (await u.Z.transferOwnership(
                  t.id,
                  m.id,
                  I.mfaEnabled ? N.X.MFA : null,
                ),
                (0, o.xf)())
              : (await u.Z.sendTransferOwnershipPincode(t.id),
                (0, i.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("94566")
                    .then(n.bind(n, 965072));
                  return (t) =>
                    (0, r.jsx)(e, {
                      ...t,
                      onFormSubmit: F,
                      onResend: O,
                      onSuccess: o.xf,
                      headerText: h.intl.string(h.t.Z5s7PD),
                      confirmButtonText: h.intl.string(h.t.Z5s7PD),
                      confirmButtonColor: i.Button.Colors.RED,
                      impressionName:
                        s.ImpressionNames
                          .GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE,
                    });
                }));
          } catch (e) {
            e.body.code ===
              p.evJ.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION &&
              (0, i.openModal)((e) =>
                (0, r.jsx)(i.ConfirmModal, {
                  ...e,
                  header: h.intl.string(h.t["m+nQlp"]),
                  confirmText: h.intl.string(h.t["NX+WJC"]),
                  confirmButtonColor: i.Button.Colors.BRAND,
                  children: (0, r.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: h.intl.format(h.t.wG747e, {
                      server_subscription_owner_transfer_article: p.T23,
                    }),
                  }),
                }),
              );
          }
        }
        (0, c.Z)({
          type: s.ImpressionTypes.MODAL,
          name: s.ImpressionNames.GUILD_TRANSFER_OWNERSHIP,
        });
        let M = x.ZP.getNickname(t.id, void 0, m),
          L = m.hasAvatarForGuild(t.id),
          Z = () =>
            (0, r.jsxs)("span", {
              className: _.guildTransfer,
              children: [
                null != t.icon
                  ? (0, r.jsx)(i.Avatar, {
                      src: f.ZP.getGuildIconURL({
                        id: t.id,
                        icon: t.icon,
                        size: 16,
                      }),
                      size: i.AvatarSizes.SIZE_16,
                      className: _.miniGuildIcon,
                      "aria-hidden": !0,
                    })
                  : null,
                (0, r.jsx)(i.Text, {
                  className: _.guildName,
                  variant: "text-sm/bold",
                  children: t.toString(),
                }),
              ],
            });
        return (0, r.jsx)(i.ModalRoot, {
          transitionState: b,
          children: (0, r.jsxs)("form", {
            onSubmit: k,
            children: [
              (0, r.jsx)(i.ModalHeader, {
                separator: !1,
                children: (0, r.jsx)(i.Heading, {
                  variant: "heading-lg/semibold",
                  className: _.header,
                  children: h.intl.string(h.t.Z5s7PD),
                }),
              }),
              (0, r.jsxs)(i.ModalContent, {
                children: [
                  (0, r.jsx)(i.FormText, {
                    type: i.FormText.Types.DESCRIPTION,
                    className: _.subHeader,
                    children:
                      null != M || L
                        ? h.intl.format(h.t.E90vgo, {
                            GuildHook: Z,
                            user: (0, T.W5)(m),
                            AKAHook: function () {
                              return (0, r.jsxs)("span", {
                                className: _.akaTransfer,
                                children: [
                                  (0, r.jsx)(i.TextBadge, {
                                    text: h.intl.string(h.t.l1QVfn),
                                    disableColor: !0,
                                    className: _.akaBadge,
                                  }),
                                  L
                                    ? (0, r.jsx)(i.Avatar, {
                                        src: m.getAvatarURL(t.id, 16, !0),
                                        size: i.AvatarSizes.SIZE_16,
                                        className: _.miniAvatar,
                                        "aria-hidden": !0,
                                      })
                                    : null,
                                  (0, r.jsx)(i.Text, {
                                    className: _.nickname,
                                    variant: "text-sm/normal",
                                    children: null != M ? M : T.ZP.getName(m),
                                  }),
                                ],
                              });
                            },
                          })
                        : h.intl.format(h.t["2XLnGx"], {
                            GuildHook: Z,
                            user: (0, T.W5)(m),
                          }),
                  }),
                  (0, r.jsxs)(d.Z, {
                    className: _.fromToWrapper,
                    justify: d.Z.Justify.CENTER,
                    children: [
                      (0, r.jsx)("div", {
                        className: _.from,
                        children: (0, r.jsx)(l.Z, {
                          user: I,
                          size: i.AvatarSizes.SIZE_80,
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: _.to,
                        children: (0, r.jsx)(l.Z, {
                          user: m,
                          size: i.AvatarSizes.SIZE_80,
                        }),
                      }),
                    ],
                  }),
                  C &&
                    (0, r.jsx)(i.FormText, {
                      type: i.FormText.Types.DESCRIPTION,
                      className: _.roleSubscriptionText,
                      children: h.intl.format(h.t.LAlucX, {
                        server_subscription_owner_transfer_article: p.T23,
                      }),
                    }),
                  (0, r.jsx)(i.FormSwitch, {
                    disabled: g,
                    tooltipNote: v,
                    hideBorder: !0,
                    value: A,
                    onChange: function (e) {
                      S(e);
                    },
                    children: (0, r.jsx)(i.FormText, {
                      type: i.FormText.Types.DESCRIPTION,
                      children: h.intl.format(h.t.xm6ACA, {
                        username: (0, T.W5)(m),
                      }),
                    }),
                  }),
                  (0, r.jsx)(i.FormText, {
                    className: _.protectedText,
                    type: i.FormText.Types.DEFAULT,
                    children: j,
                  }),
                ],
              }),
              (0, r.jsxs)(i.ModalFooter, {
                children: [
                  (0, r.jsx)(i.Button, {
                    type: "submit",
                    disabled: !A,
                    color: i.Button.Colors.RED,
                    children: h.intl.string(h.t.Z5s7PD),
                  }),
                  (0, r.jsx)(i.Button, {
                    look: i.Button.Looks.LINK,
                    color: i.Button.Colors.PRIMARY,
                    onClick: R,
                    children: h.intl.string(h.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    72766: function (e, t, n) {
      var r, a, s, i;
      n.d(t, {
        X: function () {
          return a;
        },
      }),
        ((s = r || (r = {})).TRANFSER_OWNERSHIP = "TRANFSER_OWNERSHIP"),
        (s.CONFIRM_EMAIL_CODE = "CONFIRM_EMAIL_CODE"),
        ((i = a || (a = {})).MFA = "mfa"),
        (i.SMS = "sms"),
        (i.EMAIL = "email");
    },
    413096: function (e, t, n) {
      e.exports = {
        akaBadge: "akaBadge_b24f45",
        header: "header_b24f45",
        subHeader: "subHeader_b24f45",
        miniAvatar: "miniAvatar_b24f45",
        miniGuildIcon: "miniGuildIcon_b24f45",
        akaTransfer: "akaTransfer_b24f45",
        guildTransfer: "guildTransfer_b24f45",
        guildName: "guildName_b24f45",
        nickname: "nickname_b24f45",
        fromToWrapper: "fromToWrapper_b24f45 spacing_b24f45",
        from: "from_b24f45",
        to: "to_b24f45",
        protectedText: "protectedText_b24f45",
        roleSubscriptionText: "roleSubscriptionText_b24f45",
      };
    },
  },
]);
//# sourceMappingURL=ea56e37f6af9f4628865.js.map
