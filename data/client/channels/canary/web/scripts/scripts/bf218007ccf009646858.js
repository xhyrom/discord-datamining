"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8102"],
  {
    172337: function (e, t, i) {
      var n = i(442837),
        l = i(353926),
        d = i(496675),
        r = i(923726),
        s = i(981631),
        a = i(388032);
      t.Z = {
        title: () => a.intl.string(a.t.aTFQKi),
        description: () => a.intl.string(a.t.oTbFQk),
        canCreateGuild: !1,
        useIsGuildSupported: () =>
          (0, n.e7)(
            [l.Z, d.Z],
            () => (e) =>
              e.hasFeature(s.oNc.ROLE_SUBSCRIPTIONS_ENABLED) &&
              !e.hasFeature(s.oNc.CREATOR_MONETIZABLE_RESTRICTED) &&
              d.Z.can(s.Plq.ADMINISTRATOR, e) &&
              (0, r.$F)() &&
              (0, r.hQ)(e.id),
            [],
          ),
      };
    },
    101492: function (e, t, i) {
      var n = i(442837),
        l = i(674525),
        d = i(388032);
      t.Z = {
        title: () => d.intl.string(d.t["KzCF//"]),
        description: () => d.intl.string(d.t["1ScBCw"]),
        canCreateGuild: !1,
        useIsGuildSupported: () =>
          (0, n.e7)(
            [l.Z],
            () => (e) => l.Z.getEligibleGuildsForNagActivate().includes(e.id),
            [],
          ),
      };
    },
    710091: function (e, t, i) {
      var n = i(442837),
        l = i(223892),
        d = i(738774),
        r = i(353926),
        s = i(923726),
        a = i(144507),
        u = i(388032);
      t.Z = {
        title: () => u.intl.string(u.t["KzCF//"]),
        description: () => u.intl.string(u.t.xMW8FB),
        canCreateGuild: !1,
        useIsGuildSupported: () =>
          (0, n.e7)(
            [r.Z],
            () => (e, t) =>
              e.isOwner(t) &&
              (0, a.X$)({
                guild: e,
                isOwner: !0,
                canManageGuildRoleSubscriptions: !0,
                isMonetizationWaitlistEnabledForGuild: (0, l.mG)(e.id),
                isGuildEligibleForRoleSubscriptions: (0, s.kT)(e.id),
                isExpeditedMonetizationOnboardingGuild: (0, l.Rw)(e),
                isUserInCreatorMonetizationEligibleCountry: (0, l.DB)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, d.cu)(e.id),
              }),
            [],
            n.pF,
          ),
      };
    },
    313741: function (e, t, i) {
      i.d(t, {
        K: function () {
          return p;
        },
      }),
        i(47120);
      var n = i(192379),
        l = i(442837),
        d = i(172337),
        r = i(101492),
        s = i(710091),
        a = i(496675),
        u = i(388032);
      let o = {
          "server-subscriptions-onboarding": s.Z,
          "server-subscriptions-finish-setting-up": r.Z,
          "server-subscriptions-create-tier-from-template": d.Z,
        },
        c = {
          title: () => u.intl.string(u.t.V42OaG),
          description: () => u.intl.string(u.t["7dJ16e"]),
          selectGuildCta: () => u.intl.string(u.t.LhlgY2),
          createGuildDescription: () => u.intl.string(u.t.anOis7),
          createGuildCta: () => u.intl.string(u.t.B44MTk),
          canCreateGuild: !0,
          useIsGuildSupported: () =>
            (0, l.e7)(
              [a.Z],
              () => (e) => a.Z.canAccessGuildSettings(e),
              [],
              l.pF,
            ),
        };
      function p(e) {
        var t;
        let [i] = n.useState(null == e ? void 0 : o[e]),
          l = c.useIsGuildSupported(),
          d =
            null == i
              ? void 0
              : null === (t = i.useIsGuildSupported) || void 0 === t
                ? void 0
                : t.call(i),
          r = { ...c, ...(null != i ? i : {}) };
        return {
          title: r.title(),
          description: r.description(),
          selectGuildCta: r.selectGuildCta(),
          createGuildDescription: r.createGuildDescription(),
          createGuildCta: r.createGuildCta(),
          canCreateGuild: r.canCreateGuild,
          isGuildSupported: (e, t) =>
            l(e, t) && (null == d ? void 0 : d(e, t)) !== !1,
        };
      }
    },
    526079: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = i(192379),
        l = i(512722),
        d = i.n(l),
        r = i(442837),
        s = i(430824),
        a = i(771845),
        u = i(594174);
      function o(e) {
        let { isGuildIncluded: t, selectedGuildId: i } = e,
          l = (0, r.e7)([a.ZP], () => a.ZP.getFlattenedGuildIds()),
          o = (0, r.e7)([s.Z], () => s.Z.getGuilds()),
          c = (0, r.e7)([u.default], () => u.default.getCurrentUser());
        return {
          options: n.useMemo(
            () =>
              null == c
                ? []
                : (null == t
                    ? l
                    : l.filter((e) => {
                        let i = o[e];
                        return (
                          d()(null != i, "guild should not be null"), t(i, c)
                        );
                      })
                  ).map((e) => {
                    let t = o[e];
                    return (
                      d()(null != t, "guild should not be null"),
                      { label: t.name, value: t.id }
                    );
                  }),
            [l, o, c, t],
          ),
          selectedGuild: null == i ? void 0 : o[i],
        };
      }
    },
    674189: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return h;
          },
        }),
        i(47120);
      var n = i(200651),
        l = i(192379),
        d = i(512722),
        r = i.n(d),
        s = i(481060),
        a = i(313201),
        u = i(560067),
        o = i(434404),
        c = i(430824),
        p = i(313741),
        g = i(526079),
        C = i(388032),
        G = i(361955);
      function S(e) {
        let { className: t, guildId: i, onChange: l, isGuildIncluded: d } = e,
          { options: r } = (0, g.Z)({ isGuildIncluded: d });
        return (0, n.jsx)(s.SearchableSelect, {
          className: t,
          onChange: l,
          value: i,
          options: r,
          placeholder: C.intl.string(C.t.etZ9tb),
        });
      }
      function h(e) {
        let {
            transitionState: t,
            onClose: i,
            feature: d,
            section: g,
            subsection: C,
          } = e,
          h = (0, a.Dt)(),
          {
            canCreateGuild: m,
            createGuildCta: f,
            createGuildDescription: v,
            selectGuildCta: Z,
            title: b,
            description: x,
            isGuildSupported: j,
          } = (0, p.K)(d),
          [I, F] = l.useState(),
          [M, R] = l.useState(!1),
          E = async () => {
            var e;
            R(!0);
            let t = await new Promise((e) => {
              u.Z.openCreateGuildModal({ onSuccess: e });
            });
            await ((e = t),
            new Promise((t) => {
              c.Z.addChangeListener(function i() {
                null != c.Z.getGuild(e) && (c.Z.removeChangeListener(i), t());
              });
            })),
              o.Z.open(t, g, void 0, C),
              null == i || i();
          };
        return (0, n.jsxs)(s.ModalRoot, {
          transitionState: t,
          "aria-labelledby": h,
          children: [
            (0, n.jsxs)(s.ModalHeader, {
              className: G.modalHeader,
              separator: !1,
              children: [
                (0, n.jsx)(s.Heading, {
                  id: h,
                  variant: "heading-lg/medium",
                  children: b,
                }),
                (0, n.jsx)(s.ModalCloseButton, { onClick: i }),
              ],
            }),
            (0, n.jsxs)(s.ModalContent, {
              className: G.modalContent,
              children: [
                (0, n.jsx)(s.Text, { variant: "text-md/medium", children: x }),
                (0, n.jsx)(s.Spacer, { size: 16 }),
                (0, n.jsxs)("div", {
                  className: G.guildSelection,
                  children: [
                    (0, n.jsx)("div", {
                      className: G.guildSelectorContainer,
                      children: (0, n.jsx)(S, {
                        guildId: I,
                        onChange: F,
                        isGuildIncluded: j,
                      }),
                    }),
                    (0, n.jsx)(s.Button, {
                      onClick: () => {
                        r()(null != I, "Guild ID must not be null on click"),
                          o.Z.open(I, g, void 0, C),
                          null == i || i();
                      },
                      disabled: null == I,
                      children: Z,
                    }),
                  ],
                }),
                m &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(s.Spacer, { size: 32 }),
                      (0, n.jsx)(s.Text, {
                        variant: "text-md/medium",
                        children: v,
                      }),
                      (0, n.jsx)(s.Spacer, { size: 8 }),
                      (0, n.jsx)(s.Button, {
                        onClick: E,
                        submitting: M,
                        children: f,
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
    },
    361955: function (e, t, i) {
      e.exports = {
        modalHeader: "modalHeader_d6aff6",
        modalContent: "modalContent_d6aff6",
        guildSelection: "guildSelection_d6aff6",
        guildSelectorContainer: "guildSelectorContainer_d6aff6",
      };
    },
  },
]);
//# sourceMappingURL=bf218007ccf009646858.js.map
