"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95257"],
  {
    593214: function (e, n, t) {
      t.d(n, {
        Mt: function () {
          return g;
        },
        li: function () {
          return m;
        },
        s4: function () {
          return h;
        },
        up: function () {
          return v;
        },
        zv: function () {
          return f;
        },
      }),
        t(47120),
        t(653041);
      var r = t(470079),
        i = t(106351),
        o = t(442837);
      t(592125);
      var l = t(984933),
        a = t(914010);
      t(709054);
      var d = t(853856),
        c = t(362658),
        s = t(434065),
        u = t(981631);
      function m(e) {
        let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, c.z)(
            "useCanFavoriteChannel",
          ),
          r = (0, o.e7)([d.Z], () => d.Z.isFavorite(e.id)),
          i = e.isDM() || e.isThread();
        return n && !__OVERLAY__ && !r && (!i || t);
      }
      function h(e) {
        return (0, o.e7)([d.Z], () => d.Z.getFavorite(e));
      }
      function f() {
        return (0, o.e7)([l.ZP], () => l.ZP.getChannels(u.I_8))[
          i.d.GUILD_CATEGORY
        ].map((e) => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function g() {
        return (0, o.e7)([a.Z], () => a.Z.getGuildId()) === u.I_8;
      }
      function v() {
        let { isFavoritesPerk: e } = (0, c.z)("useFavoriteAdded"),
          n = (0, s.r)(),
          t = r.useCallback(() => {
            e && n.notifyFavoriteAdded();
          }, [n, e]),
          i = r.useCallback(() => {
            e && n.clearFavoriteAdded();
          }, [n, e]);
        return {
          favoriteAdded: n.favoriteAdded,
          notifyFavoriteAdded: t,
          clearFavoriteAdded: i,
        };
      }
    },
    434065: function (e, n, t) {
      t.d(n, {
        r: function () {
          return o;
        },
      });
      var r = t(652874),
        i = t(731965);
      let o = (0, r.Z)((e) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, i.j)(() => e({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, i.j)(() => e({ favoriteAdded: !1 })),
      }));
    },
    378337: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      }),
        t(653041),
        t(47120);
      var r = t(131704);
      function i(e) {
        let n = [];
        for (let t = 0; t < e._categories.length; t++) {
          let i = e._categories[t].channel,
            o = e[i.id].map((e) => e.channel).filter((e) => r.iR.has(e.type));
          if (null != o && 0 !== o.length)
            for (let e of ("null" !== i.id && n.push(i), o)) n.push(e);
        }
        return n;
      }
    },
    178125: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return _;
          },
        }),
        t(47120);
      var r = t(735250),
        i = t(470079),
        o = t(106351),
        l = t(442837),
        a = t(481060),
        d = t(471445),
        c = t(856768),
        s = t(324067),
        u = t(771845),
        m = t(9156),
        h = t(117984),
        f = t(593214),
        g = t(378337),
        v = t(689938),
        x = t(421372);
      function _(e) {
        let { transitionState: n, onClose: t, parentId: o } = e,
          d = (0, l.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()[0]),
          [s, m] = i.useState(d),
          [h, f] = i.useState(!1);
        return (0, r.jsxs)(a.ModalRoot, {
          transitionState: n,
          children: [
            (0, r.jsxs)(a.ModalHeader, {
              className: x.modalHeader,
              children: [
                (0, r.jsxs)("div", {
                  className: x.modalHeaderTitle,
                  children: [
                    (0, r.jsx)(a.Heading, {
                      variant: "text-lg/semibold",
                      children: v.Z.Messages.FAVORITE_CHANNEL,
                    }),
                    (0, r.jsx)(a.ModalCloseButton, { onClick: t }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: x.guildSelector,
                  children: (0, r.jsx)(c.q, {
                    guildId: s,
                    onChange: function (e) {
                      null != e && m(e.id);
                    },
                  }),
                }),
              ],
            }),
            (0, r.jsx)(a.ModalContent, {
              className: x.modalContent,
              children: (0, r.jsx)(p, {
                guildId: s,
                hideMutedChannels: h,
                parentId: o,
              }),
            }),
            (0, r.jsxs)(a.ModalFooter, {
              className: x.modalFooter,
              children: [
                (0, r.jsx)(a.Button, {
                  className: x.goBackButton,
                  look: a.ButtonLooks.BLANK,
                  color: a.ButtonColors.PRIMARY,
                  size: a.ButtonSizes.SMALL,
                  onClick: t,
                  children: v.Z.Messages.GO_BACK,
                }),
                (0, r.jsx)("div", {
                  children: (0, r.jsx)(a.Checkbox, {
                    type: a.Checkbox.Types.INVERTED,
                    value: h,
                    onChange: (e, n) => f(n),
                    children: (0, r.jsx)(a.Text, {
                      variant: "text-sm/medium",
                      color: "interactive-normal",
                      children: v.Z.Messages.HIDE_MUTED_CHANNELS,
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function p(e) {
        let { guildId: n, hideMutedChannels: t, parentId: a } = e,
          d = (0, l.e7)([s.Z], () => s.Z.getCategories(n)),
          c = (0, g.Z)(d),
          u = i.useRef(null);
        return (
          i.useEffect(() => {
            var e;
            null == u ||
              null === (e = u.current) ||
              void 0 === e ||
              e.scroll({ top: 0 });
          }, [n]),
          (0, r.jsx)("div", {
            ref: u,
            children: c.map((e) =>
              e.type === o.d.GUILD_CATEGORY
                ? (0, r.jsx)(C, { name: e.name }, e.id)
                : (0, r.jsx)(
                    B,
                    { channel: e, hideMutedChannels: t, parentId: a },
                    e.id,
                  ),
            ),
          })
        );
      }
      function C(e) {
        let { name: n } = e;
        return (0, r.jsx)(a.Text, {
          className: x.categoryRow,
          variant: "eyebrow",
          color: "interactive-normal",
          children: n,
        });
      }
      function B(e) {
        let { channel: n, hideMutedChannels: t, parentId: i } = e,
          o = (0, f.s4)(n.id);
        if ((0, l.e7)([m.ZP], () => m.ZP.isChannelMuted(n.guild_id, n.id)) && t)
          return null;
        let c = (0, d.KS)(n);
        return (0, r.jsxs)(
          "div",
          {
            className: x.channelRow,
            children: [
              (0, r.jsxs)("div", {
                className: x.channelName,
                children: [
                  null != c &&
                    (0, r.jsx)("div", {
                      className: x.channelIconContainer,
                      children: (0, r.jsx)(c, {
                        className: x.channelIcon,
                        size: "custom",
                        color: "currentColor",
                        height: 20,
                        width: 20,
                      }),
                    }),
                  (0, r.jsx)(a.Text, {
                    variant: "text-md/medium",
                    color: "interactive-normal",
                    children: n.name,
                  }),
                ],
              }),
              null != o
                ? (0, r.jsx)(j, { channelId: n.id })
                : (0, r.jsx)(I, { channelId: n.id, parentId: i }),
            ],
          },
          n.id,
        );
      }
      function I(e) {
        let { channelId: n, parentId: t } = e;
        return (0, r.jsx)(a.Button, {
          look: a.ButtonLooks.OUTLINED,
          size: a.ButtonSizes.SMALL,
          color: a.ButtonColors.BRAND,
          onClick: function () {
            (0, h.kj)(n, t);
          },
          children: v.Z.Messages.ADD,
        });
      }
      function j(e) {
        let { channelId: n } = e;
        return (0, r.jsx)(a.Button, {
          look: a.ButtonLooks.FILLED,
          size: a.ButtonSizes.SMALL,
          color: a.ButtonColors.PRIMARY,
          onClick: function () {
            (0, h.oC)(n);
          },
          children: v.Z.Messages.REMOVE,
        });
      }
    },
    856768: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
        q: function () {
          return _;
        },
      }),
        t(733860);
      var r = t(735250),
        i = t(470079),
        o = t(120356),
        l = t.n(o),
        a = t(442837),
        d = t(481060),
        c = t(565138),
        s = t(993413),
        u = t(430824),
        m = t(771845),
        h = t(823379),
        f = t(778825),
        g = t(689938),
        v = t(381520);
      function x(e) {
        let {
          guildId: n,
          className: t,
          globalOption: i,
          hideDivider: o = !1,
          onChange: a,
          renderOptionSuffix: d,
        } = e;
        return (0, r.jsx)(s.Z, {
          className: l()(v.section, t),
          title: g.Z.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_TITLE,
          hideDivider: o,
          forcedDivider: !0,
          children: (0, r.jsx)(_, {
            guildId: n,
            onChange: a,
            renderOptionSuffix: d,
            globalOption: i,
          }),
        });
      }
      function _(e) {
        let {
            guildId: n,
            globalOption: t,
            onChange: o,
            renderOptionSuffix: l,
          } = e,
          s = (0, a.e7)([f.Z], () => f.Z.showNotice()),
          x = (0, a.e7)([m.ZP], () => m.ZP.getFlattenedGuildIds()),
          _ = (0, a.e7)([u.Z], () => u.Z.getGuilds()),
          p = i.useMemo(() => {
            let e = x
              .map((e) => {
                let n = _[e];
                return null == n ? null : { label: n.name, value: n.id };
              })
              .filter(h.lm);
            return null != t && e.unshift(t), e;
          }, [x, _, t]),
          C = i.useCallback(
            (e) => {
              let n =
                (null == e ? void 0 : e.label) ===
                  (null == t ? void 0 : t.label) &&
                (null == e ? void 0 : e.value) ===
                  (null == t ? void 0 : t.value);
              return null == e || "" === e.value || n
                ? null
                : (0, r.jsx)(c.Z, {
                    className: v.guildSelectOptionIcon,
                    guild: _[e.value],
                    size: c.Z.Sizes.SMOL,
                    active: !0,
                  });
            },
            [_, t],
          );
        return (0, r.jsx)(d.SearchableSelect, {
          isDisabled: s,
          onChange: (e) => {
            if ("" === e || e === (null == t ? void 0 : t.value)) {
              o(null);
              return;
            }
            let n = _[e];
            null != n && o(n);
          },
          value: n,
          options: p,
          renderOptionPrefix: C,
          renderOptionSuffix: l,
          placeholder:
            g.Z.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_PLACEHOLDER,
        });
      }
    },
    993413: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      }),
        t(757143);
      var r = t(735250);
      t(470079);
      var i = t(120356),
        o = t.n(i),
        l = t(481060),
        a = t(403182),
        d = t(587446),
        c = t(504983),
        s = t(651523);
      function u(e) {
        let { errors: n } = e;
        return (0, r.jsx)(r.Fragment, {
          children: n.map((e, n) =>
            (0, r.jsx)(
              l.Text,
              {
                variant: "text-xs/normal",
                color: "text-danger",
                className: s.errorMessage,
                children: e.replace(/[0-9.,]+ ?kb/g, (e) => {
                  let n = 1024 * parseInt(e, 10);
                  return isNaN(n) ? e : (0, a.Ng)(n);
                }),
              },
              n,
            ),
          ),
        });
      }
      function m(e) {
        let {
          title: n,
          titleIcon: t,
          titleId: i,
          description: a,
          children: m,
          className: h,
          errors: f,
          disabled: g = !1,
          hideDivider: v = !1,
          showBorder: x = !1,
          borderType: _,
          hasBackground: p = !1,
          forcedDivider: C = !1,
          showPremiumIcon: B = !1,
        } = e;
        return (0, r.jsx)("div", {
          className: o()(s.customizationSection, h, {
            [s.disabled]: g,
            [s.hideDivider]: v,
            [s.showBorder]: x,
            [s.withDivider]: C,
          }),
          children: (0, r.jsxs)(c.Z, {
            className: s.customizationSectionBorder,
            backgroundClassName: s.customizationSectionBackground,
            isShown: x,
            type: _,
            hasBackground: p,
            children: [
              (0, r.jsxs)(l.FormTitle, {
                className: s.title,
                id: i,
                children: [n, B && (0, r.jsx)(d.Z, {}), t],
              }),
              null != a
                ? (0, r.jsx)(l.FormText, {
                    type: l.FormText.Types.DESCRIPTION,
                    className: s.sectionDescription,
                    children: a,
                  })
                : null,
              m,
              null != f && (0, r.jsx)(u, { errors: f }),
            ],
          }),
        });
      }
    },
    504983: function (e, n, t) {
      t.d(n, {
        Y: function () {
          return i;
        },
      });
      var r,
        i,
        o = t(735250),
        l = t(470079),
        a = t(120356),
        d = t.n(a),
        c = t(261842);
      ((r = i || (i = {})).PREMIUM = "premium"), (r.LIMITED = "limited");
      let s = {
        premium: {
          border: c.premiumFeatureBorder,
          background: c.premiumBackground,
        },
        limited: {
          border: c.limitedFeatureBorder,
          background: c.limitedBackground,
        },
      };
      n.Z = l.forwardRef(function (e, n) {
        let {
          children: t,
          type: r = "premium",
          isShown: i,
          hasBackground: l = !1,
          className: a,
          backgroundClassName: u,
        } = e;
        if (!i) return (0, o.jsx)(o.Fragment, { children: t });
        let { border: m, background: h } = s[r];
        return (0, o.jsx)("div", {
          ref: n,
          className: d()(m, a),
          children: (0, o.jsx)("div", {
            className: d()(l ? h : c.background, u),
            children: t,
          }),
        });
      });
    },
    421372: function (e, n, t) {
      e.exports = {
        modalHeader: "modalHeader_d85614",
        modalHeaderTitle: "modalHeaderTitle_d85614",
        modalContent: "modalContent_d85614",
        guildSelector: "guildSelector_d85614",
        categoryRow: "categoryRow_d85614",
        channelRow: "channelRow_d85614",
        channelName: "channelName_d85614",
        channelIconContainer: "channelIconContainer_d85614",
        channelIcon: "channelIcon_d85614",
        modalFooter: "modalFooter_d85614",
        goBackButton: "goBackButton_d85614",
      };
    },
    381520: function (e, n, t) {
      e.exports = {
        section: "section_c95253",
        guildSelectOptionIcon: "guildSelectOptionIcon_c95253",
      };
    },
    651523: function (e, n, t) {
      e.exports = {
        title: "title_b3a5c2",
        disabled: "disabled_b3a5c2",
        customizationSection: "customizationSection_b3a5c2",
        hideDivider: "hideDivider_b3a5c2",
        withDivider: "withDivider_b3a5c2",
        showBorder: "showBorder_b3a5c2",
        customizationSectionBackground: "customizationSectionBackground_b3a5c2",
        sectionDescription: "sectionDescription_b3a5c2",
        errorMessage: "errorMessage_b3a5c2",
        customizationSectionBorder: "customizationSectionBorder_b3a5c2",
      };
    },
    261842: function (e, n, t) {
      e.exports = {
        premiumFeatureBorder:
          "premiumFeatureBorder_c6d722 featureBorder_c6d722",
        limitedFeatureBorder:
          "limitedFeatureBorder_c6d722 featureBorder_c6d722",
        background: "background_c6d722",
        premiumBackground: "premiumBackground_c6d722 background_c6d722",
        limitedBackground: "limitedBackground_c6d722 background_c6d722",
      };
    },
  },
]);
//# sourceMappingURL=995bc59c3bc98e8cdc1d.js.map
