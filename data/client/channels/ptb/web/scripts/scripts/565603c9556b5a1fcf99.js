"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8102"],
  {
    172337: function (e, i, t) {
      var n = t(442837),
        l = t(353926),
        s = t(496675),
        a = t(923726),
        d = t(981631),
        u = t(689938);
      i.Z = {
        title: () => u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_TITLE,
        description: () =>
          u.Z.Messages
            .GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_DEEPLINK_MODAL_DESCRIPTION,
        canCreateGuild: !1,
        useIsGuildSupported: () =>
          (0, n.e7)(
            [l.Z, s.Z],
            () => (e) =>
              e.hasFeature(d.oNc.ROLE_SUBSCRIPTIONS_ENABLED) &&
              !e.hasFeature(d.oNc.CREATOR_MONETIZABLE_RESTRICTED) &&
              s.Z.can(d.Plq.ADMINISTRATOR, e) &&
              (0, a.$F)() &&
              (0, a.hQ)(e.id),
            [],
          ),
      };
    },
    101492: function (e, i, t) {
      var n = t(442837),
        l = t(674525),
        s = t(689938);
      i.Z = {
        title: () => s.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
        description: () =>
          s.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_FINISH_SETTING_UP_DESCRIPTION,
        canCreateGuild: !1,
        useIsGuildSupported: () =>
          (0, n.e7)(
            [l.Z],
            () => (e) => l.Z.getEligibleGuildsForNagActivate().includes(e.id),
            [],
          ),
      };
    },
    710091: function (e, i, t) {
      var n = t(442837),
        l = t(223892),
        s = t(738774),
        a = t(353926),
        d = t(923726),
        u = t(144507),
        r = t(689938);
      i.Z = {
        title: () => r.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
        description: () =>
          r.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_ONBOARDING_DESCRIPTION,
        canCreateGuild: !1,
        useIsGuildSupported: () =>
          (0, n.e7)(
            [a.Z],
            () => (e, i) =>
              e.isOwner(i) &&
              (0, u.X$)({
                guild: e,
                isOwner: !0,
                canManageGuildRoleSubscriptions: !0,
                isMonetizationWaitlistEnabledForGuild: (0, l.mG)(e.id),
                isGuildEligibleForRoleSubscriptions: (0, d.kT)(e.id),
                isExpeditedMonetizationOnboardingGuild: (0, l.Rw)(e),
                isUserInCreatorMonetizationEligibleCountry: (0, l.DB)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, s.cu)(e.id),
              }),
            [],
            n.pF,
          ),
      };
    },
    313741: function (e, i, t) {
      t.d(i, {
        K: function () {
          return I;
        },
      }),
        t(47120);
      var n = t(470079),
        l = t(442837),
        s = t(172337),
        a = t(101492),
        d = t(710091),
        u = t(496675),
        r = t(689938);
      let o = {
          "server-subscriptions-onboarding": d.Z,
          "server-subscriptions-finish-setting-up": a.Z,
          "server-subscriptions-create-tier-from-template": s.Z,
        },
        c = {
          title: () => r.Z.Messages.GUILD_SETTINGS_PICKER_DEFAULT_TITLE,
          description: () =>
            r.Z.Messages.GUILD_SETTINGS_PICKER_DEFAULT_DESCRIPTION,
          selectGuildCta: () => r.Z.Messages.GET_STARTED,
          createGuildDescription: () =>
            r.Z.Messages.GUILD_SETTINGS_PICKER_DEFAULT_CREATE_DESCRIPTION,
          createGuildCta: () => r.Z.Messages.CREATE_SERVER_BUTTON_CTA,
          canCreateGuild: !0,
          useIsGuildSupported: () =>
            (0, l.e7)(
              [u.Z],
              () => (e) => u.Z.canAccessGuildSettings(e),
              [],
              l.pF,
            ),
        };
      function I(e) {
        var i;
        let [t] = n.useState(null == e ? void 0 : o[e]),
          l = c.useIsGuildSupported(),
          s =
            null == t
              ? void 0
              : null === (i = t.useIsGuildSupported) || void 0 === i
                ? void 0
                : i.call(t),
          a = { ...c, ...(null != t ? t : {}) };
        return {
          title: a.title(),
          description: a.description(),
          selectGuildCta: a.selectGuildCta(),
          createGuildDescription: a.createGuildDescription(),
          createGuildCta: a.createGuildCta(),
          canCreateGuild: a.canCreateGuild,
          isGuildSupported: (e, i) =>
            l(e, i) && (null == s ? void 0 : s(e, i)) !== !1,
        };
      }
    },
    526079: function (e, i, t) {
      t.d(i, {
        Z: function () {
          return o;
        },
      });
      var n = t(470079),
        l = t(512722),
        s = t.n(l),
        a = t(442837),
        d = t(430824),
        u = t(771845),
        r = t(594174);
      function o(e) {
        let { isGuildIncluded: i, selectedGuildId: t } = e,
          l = (0, a.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()),
          o = (0, a.e7)([d.Z], () => d.Z.getGuilds()),
          c = (0, a.e7)([r.default], () => r.default.getCurrentUser());
        return {
          options: n.useMemo(
            () =>
              null == c
                ? []
                : (null == i
                    ? l
                    : l.filter((e) => {
                        let t = o[e];
                        return (
                          s()(null != t, "guild should not be null"), i(t, c)
                        );
                      })
                  ).map((e) => {
                    let i = o[e];
                    return (
                      s()(null != i, "guild should not be null"),
                      { label: i.name, value: i.id }
                    );
                  }),
            [l, o, c, i],
          ),
          selectedGuild: null == t ? void 0 : o[t],
        };
      }
    },
    674189: function (e, i, t) {
      t.r(i),
        t.d(i, {
          default: function () {
            return p;
          },
        }),
        t(47120);
      var n = t(735250),
        l = t(470079),
        s = t(512722),
        a = t.n(s),
        d = t(481060),
        u = t(313201),
        r = t(560067),
        o = t(434404),
        c = t(430824),
        I = t(313741),
        S = t(526079),
        C = t(689938),
        E = t(507876);
      function _(e) {
        let { className: i, guildId: t, onChange: l, isGuildIncluded: s } = e,
          { options: a } = (0, S.Z)({ isGuildIncluded: s });
        return (0, n.jsx)(d.SearchableSelect, {
          className: i,
          onChange: l,
          value: t,
          options: a,
          placeholder: C.Z.Messages.GUILD_SELECT,
        });
      }
      function p(e) {
        let {
            transitionState: i,
            onClose: t,
            feature: s,
            section: S,
            subsection: C,
          } = e,
          p = (0, u.Dt)(),
          {
            canCreateGuild: G,
            createGuildCta: T,
            createGuildDescription: g,
            selectGuildCta: R,
            title: Z,
            description: L,
            isGuildSupported: N,
          } = (0, I.K)(s),
          [m, D] = l.useState(),
          [h, O] = l.useState(!1),
          f = async () => {
            var e;
            O(!0);
            let i = await new Promise((e) => {
              r.Z.openCreateGuildModal({ onSuccess: e });
            });
            await ((e = i),
            new Promise((i) => {
              c.Z.addChangeListener(function t() {
                null != c.Z.getGuild(e) && (c.Z.removeChangeListener(t), i());
              });
            })),
              o.Z.open(i, S, void 0, C),
              null == t || t();
          };
        return (0, n.jsxs)(d.ModalRoot, {
          transitionState: i,
          "aria-labelledby": p,
          children: [
            (0, n.jsxs)(d.ModalHeader, {
              className: E.modalHeader,
              separator: !1,
              children: [
                (0, n.jsx)(d.Heading, {
                  id: p,
                  variant: "heading-lg/medium",
                  children: Z,
                }),
                (0, n.jsx)(d.ModalCloseButton, { onClick: t }),
              ],
            }),
            (0, n.jsxs)(d.ModalContent, {
              className: E.modalContent,
              children: [
                (0, n.jsx)(d.Text, { variant: "text-md/medium", children: L }),
                (0, n.jsx)(d.Spacer, { size: 16 }),
                (0, n.jsxs)("div", {
                  className: E.guildSelection,
                  children: [
                    (0, n.jsx)("div", {
                      className: E.guildSelectorContainer,
                      children: (0, n.jsx)(_, {
                        guildId: m,
                        onChange: D,
                        isGuildIncluded: N,
                      }),
                    }),
                    (0, n.jsx)(d.Button, {
                      onClick: () => {
                        a()(null != m, "Guild ID must not be null on click"),
                          o.Z.open(m, S, void 0, C),
                          null == t || t();
                      },
                      disabled: null == m,
                      children: R,
                    }),
                  ],
                }),
                G &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(d.Spacer, { size: 32 }),
                      (0, n.jsx)(d.Text, {
                        variant: "text-md/medium",
                        children: g,
                      }),
                      (0, n.jsx)(d.Spacer, { size: 8 }),
                      (0, n.jsx)(d.Button, {
                        onClick: f,
                        submitting: h,
                        children: T,
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
    },
    507876: function (e, i, t) {
      e.exports = {
        modalHeader: "modalHeader_d6aff6",
        modalContent: "modalContent_d6aff6",
        guildSelection: "guildSelection_d6aff6",
        guildSelectorContainer: "guildSelectorContainer_d6aff6",
      };
    },
  },
]);
//# sourceMappingURL=565603c9556b5a1fcf99.js.map
