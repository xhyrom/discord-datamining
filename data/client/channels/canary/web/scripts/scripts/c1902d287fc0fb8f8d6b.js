"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31835"],
  {
    53365: function (n, t, e) {
      e.d(t, {
        $J: function () {
          return A;
        },
        He: function () {
          return s;
        },
        av: function () {
          return E;
        },
        df: function () {
          return N;
        },
        hY: function () {
          return R;
        },
        oL: function () {
          return O;
        },
        wE: function () {
          return l;
        },
        wZ: function () {
          return _;
        },
        yk: function () {
          return u;
        },
        zo: function () {
          return T;
        },
      });
      var a = e(544891),
        r = e(570140),
        i = e(728345),
        o = e(981631),
        c = e(674563);
      async function s(n) {
        await a.tn.post({ url: o.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(n) });
      }
      async function u(n) {
        return (
          await a.tn.get({ url: o.ANM.CREATOR_MONETIZATION_ELIGIBILITY(n) })
        ).body;
      }
      async function l(n, t) {
        await a.tn.post({ url: o.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(n, t) });
      }
      async function T(n) {
        await a.tn.post({ url: o.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(n) });
      }
      async function _(n) {
        return (
          await a.tn.get({
            url: o.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(n),
          })
        ).body;
      }
      async function E(n) {
        try {
          let t = await a.tn.get({
            url: o.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: n },
          });
          r.Z.dispatch({
            type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
            eligibleGuilds: t.body.eligible_guilds,
          });
        } catch (n) {}
      }
      async function N(n, t) {
        let e = (
          await a.tn.post({
            url: o.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(n),
            body: { team_id: t },
          })
        ).body;
        return (
          null != e.application &&
            r.Z.dispatch({
              type: "APPLICATION_FETCH_SUCCESS",
              application: e.application,
            }),
          e
        );
      }
      function R(n) {
        return a.tn.post({
          url: o.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(n),
        });
      }
      function A(n) {
        return a.tn.post({
          url: o.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(n),
        });
      }
      async function I(n) {
        await a.tn.post({
          url: o.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(n),
          body: {},
        });
      }
      async function O(n) {
        return (
          await I(n),
          await i.ZP.getApplicationsForGuild(n, {
            type: c.wW.GUILD_ROLE_SUBSCRIPTIONS,
            includeTeam: !0,
          })
        );
      }
    },
    377176: function (n, t, e) {
      e.d(t, {
        f: function () {
          return o;
        },
      });
      var a = e(63063),
        r = e(981631),
        i = e(689938);
      function o() {
        return i.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_V2_ACCEPT_TERMS_CHECKBOX.format(
          {
            fullTermsUrl: a.Z.getArticleURL(r.BhN.CREATOR_TERMS),
            creatorRevenuePolicyUrl: a.Z.getArticleURL(r.BhN.CREATOR_POLICY),
          },
        );
      }
    },
    393809: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return l;
          },
        }),
        e(47120);
      var a = e(735250),
        r = e(470079),
        i = e(481060),
        o = e(53365),
        c = e(377176),
        s = e(689938),
        u = e(383089);
      function l(n) {
        let { guildId: t, transitionState: e, onClose: l } = n,
          [T, _] = r.useState(!1),
          [E, N] = r.useState(!1),
          R = async () => {
            _(!0);
            try {
              await (0, o.zo)(t), l();
            } finally {
              _(!1);
            }
          },
          A = s.Z.Messages.GUILD_PRODUCT_TERMS_NOT_ACCEPTED_ERROR_TITLE;
        return (0, a.jsxs)(i.ModalRoot, {
          className: u.__invalid_container,
          size: i.ModalSize.DYNAMIC,
          transitionState: e,
          "aria-label": A,
          children: [
            (0, a.jsxs)(i.ModalContent, {
              className: u.content,
              children: [
                (0, a.jsxs)("div", {
                  className: u.header,
                  children: [
                    (0, a.jsx)(i.CircleWarningIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                      className: u.warningIcon,
                    }),
                    (0, a.jsx)(i.Spacer, { size: 8, horizontal: !0 }),
                    (0, a.jsx)(i.Heading, {
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children: A,
                    }),
                  ],
                }),
                (0, a.jsx)(i.Spacer, { size: 12 }),
                (0, a.jsx)(i.Text, {
                  variant: "text-md/normal",
                  color: "text-muted",
                  className: u.__invalid_body,
                  children:
                    s.Z.Messages.GUILD_PRODUCT_TERMS_NOT_ACCEPTED_ERROR_BODY,
                }),
                (0, a.jsx)(i.Spacer, { size: 28 }),
                (0, a.jsx)(i.Checkbox, {
                  onChange: () => {
                    N((n) => !n);
                  },
                  size: 20,
                  type: i.Checkbox.Types.INVERTED,
                  value: E,
                  children: (0, a.jsx)(i.Text, {
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: (0, c.f)(),
                  }),
                }),
              ],
            }),
            (0, a.jsxs)(i.ModalFooter, {
              children: [
                (0, a.jsx)(i.Button, {
                  color: i.Button.Colors.BRAND,
                  disabled: !E,
                  onClick: R,
                  submitting: T,
                  children: s.Z.Messages.CONFIRM,
                }),
                (0, a.jsx)(i.Spacer, { size: 12, horizontal: !0 }),
                (0, a.jsx)(i.Button, {
                  color: i.Button.Colors.PRIMARY,
                  look: i.Button.Looks.OUTLINED,
                  onClick: l,
                  children: s.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    383089: function (n, t, e) {
      n.exports = {
        content: "content_e7ba43",
        header: "header_e7ba43",
        warningIcon: "warningIcon_e7ba43",
      };
    },
  },
]);
//# sourceMappingURL=c1902d287fc0fb8f8d6b.js.map
