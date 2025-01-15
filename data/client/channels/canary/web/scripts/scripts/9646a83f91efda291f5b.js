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
      var i = t(192379),
        r = t(106351),
        o = t(442837);
      t(592125);
      var l = t(984933),
        a = t(914010);
      t(709054);
      var d = t(853856),
        c = t(362658),
        u = t(434065),
        s = t(981631);
      function m(e) {
        let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, c.z)(
            "useCanFavoriteChannel",
          ),
          i = (0, o.e7)([d.Z], () => d.Z.isFavorite(e.id)),
          r = e.isDM() || e.isThread();
        return n && !__OVERLAY__ && !i && (!r || t);
      }
      function h(e) {
        return (0, o.e7)([d.Z], () => d.Z.getFavorite(e));
      }
      function f() {
        return (0, o.e7)([l.ZP], () => l.ZP.getChannels(s.I_8))[
          r.d.GUILD_CATEGORY
        ].map((e) => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function g() {
        return (0, o.e7)([a.Z], () => a.Z.getGuildId()) === s.I_8;
      }
      function v() {
        let { isFavoritesPerk: e } = (0, c.z)("useFavoriteAdded"),
          n = (0, u.r)(),
          t = i.useCallback(() => {
            e && n.notifyFavoriteAdded();
          }, [n, e]),
          r = i.useCallback(() => {
            e && n.clearFavoriteAdded();
          }, [n, e]);
        return {
          favoriteAdded: n.favoriteAdded,
          notifyFavoriteAdded: t,
          clearFavoriteAdded: r,
        };
      }
    },
    434065: function (e, n, t) {
      t.d(n, {
        r: function () {
          return o;
        },
      });
      var i = t(15729),
        r = t(731965);
      let o = (0, i.U)((e) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, r.j)(() => e({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, r.j)(() => e({ favoriteAdded: !1 })),
      }));
    },
    378337: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      }),
        t(653041),
        t(47120);
      var i = t(131704);
      function r(e) {
        let n = [];
        for (let t = 0; t < e._categories.length; t++) {
          let r = e._categories[t].channel,
            o = e[r.id].map((e) => e.channel).filter((e) => i.iR.has(e.type));
          if (null != o && 0 !== o.length)
            for (let e of ("null" !== r.id && n.push(r), o)) n.push(e);
        }
        return n;
      }
    },
    759701: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return p;
          },
        }),
        t(47120);
      var i = t(200651),
        r = t(192379),
        o = t(106351),
        l = t(442837),
        a = t(481060),
        d = t(471445),
        c = t(856768),
        u = t(324067),
        s = t(771845),
        m = t(9156),
        h = t(117984),
        f = t(593214),
        g = t(378337),
        v = t(388032),
        x = t(157473);
      function p(e) {
        let { transitionState: n, onClose: t, parentId: o } = e,
          d = (0, l.e7)([s.ZP], () => s.ZP.getFlattenedGuildIds()[0]),
          [u, m] = r.useState(d),
          [h, f] = r.useState(!1);
        return (0, i.jsxs)(a.ModalRoot, {
          transitionState: n,
          children: [
            (0, i.jsxs)(a.ModalHeader, {
              className: x.modalHeader,
              children: [
                (0, i.jsxs)("div", {
                  className: x.modalHeaderTitle,
                  children: [
                    (0, i.jsx)(a.Heading, {
                      variant: "text-lg/semibold",
                      children: v.intl.string(v.t["4wcdEx"]),
                    }),
                    (0, i.jsx)(a.ModalCloseButton, { onClick: t }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: x.guildSelector,
                  children: (0, i.jsx)(c.q, {
                    guildId: u,
                    onChange: function (e) {
                      null != e && m(e.id);
                    },
                  }),
                }),
              ],
            }),
            (0, i.jsx)(a.ModalContent, {
              className: x.modalContent,
              children: (0, i.jsx)(j, {
                guildId: u,
                hideMutedChannels: h,
                parentId: o,
              }),
            }),
            (0, i.jsxs)(a.ModalFooter, {
              className: x.modalFooter,
              children: [
                (0, i.jsx)(a.Button, {
                  className: x.goBackButton,
                  look: a.ButtonLooks.BLANK,
                  color: a.ButtonColors.PRIMARY,
                  size: a.ButtonSizes.SMALL,
                  onClick: t,
                  children: v.intl.string(v.t["/g10LC"]),
                }),
                (0, i.jsx)("div", {
                  children: (0, i.jsx)(a.Checkbox, {
                    type: a.Checkbox.Types.INVERTED,
                    value: h,
                    onChange: (e, n) => f(n),
                    children: (0, i.jsx)(a.Text, {
                      variant: "text-sm/medium",
                      color: "interactive-normal",
                      children: v.intl.string(v.t.UwOLJC),
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function j(e) {
        let { guildId: n, hideMutedChannels: t, parentId: a } = e,
          d = (0, l.e7)([u.Z], () => u.Z.getCategories(n)),
          c = (0, g.Z)(d),
          s = r.useRef(null);
        return (
          r.useEffect(() => {
            var e;
            null == s ||
              null === (e = s.current) ||
              void 0 === e ||
              e.scroll({ top: 0 });
          }, [n]),
          (0, i.jsx)("div", {
            ref: s,
            children: c.map((e) =>
              e.type === o.d.GUILD_CATEGORY
                ? (0, i.jsx)(B, { name: e.name }, e.id)
                : (0, i.jsx)(
                    _,
                    { channel: e, hideMutedChannels: t, parentId: a },
                    e.id,
                  ),
            ),
          })
        );
      }
      function B(e) {
        let { name: n } = e;
        return (0, i.jsx)(a.Text, {
          className: x.categoryRow,
          variant: "eyebrow",
          color: "interactive-normal",
          children: n,
        });
      }
      function _(e) {
        let { channel: n, hideMutedChannels: t, parentId: r } = e,
          o = (0, f.s4)(n.id);
        if ((0, l.e7)([m.ZP], () => m.ZP.isChannelMuted(n.guild_id, n.id)) && t)
          return null;
        let c = (0, d.KS)(n);
        return (0, i.jsxs)(
          "div",
          {
            className: x.channelRow,
            children: [
              (0, i.jsxs)("div", {
                className: x.channelName,
                children: [
                  null != c &&
                    (0, i.jsx)("div", {
                      className: x.channelIconContainer,
                      children: (0, i.jsx)(c, {
                        className: x.channelIcon,
                        size: "custom",
                        color: "currentColor",
                        height: 20,
                        width: 20,
                      }),
                    }),
                  (0, i.jsx)(a.Text, {
                    variant: "text-md/medium",
                    color: "interactive-normal",
                    children: n.name,
                  }),
                ],
              }),
              null != o
                ? (0, i.jsx)(C, { channelId: n.id })
                : (0, i.jsx)(k, { channelId: n.id, parentId: r }),
            ],
          },
          n.id,
        );
      }
      function k(e) {
        let { channelId: n, parentId: t } = e;
        return (0, i.jsx)(a.Button, {
          look: a.ButtonLooks.OUTLINED,
          size: a.ButtonSizes.SMALL,
          color: a.ButtonColors.BRAND,
          onClick: function () {
            (0, h.kj)(n, t);
          },
          children: v.intl.string(v.t.OYkgVl),
        });
      }
      function C(e) {
        let { channelId: n } = e;
        return (0, i.jsx)(a.Button, {
          look: a.ButtonLooks.FILLED,
          size: a.ButtonSizes.SMALL,
          color: a.ButtonColors.PRIMARY,
          onClick: function () {
            (0, h.oC)(n);
          },
          children: v.intl.string(v.t.N86XcH),
        });
      }
    },
    856768: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
        q: function () {
          return p;
        },
      }),
        t(733860);
      var i = t(200651),
        r = t(192379),
        o = t(120356),
        l = t.n(o),
        a = t(442837),
        d = t(481060),
        c = t(565138),
        u = t(993413),
        s = t(430824),
        m = t(771845),
        h = t(823379),
        f = t(778825),
        g = t(388032),
        v = t(112023);
      function x(e) {
        let {
          guildId: n,
          className: t,
          globalOption: r,
          hideDivider: o = !1,
          onChange: a,
          renderOptionSuffix: d,
        } = e;
        return (0, i.jsx)(u.Z, {
          className: l()(v.section, t),
          title: g.intl.string(g.t.ref7Ki),
          hideDivider: o,
          forcedDivider: !0,
          children: (0, i.jsx)(p, {
            guildId: n,
            onChange: a,
            renderOptionSuffix: d,
            globalOption: r,
          }),
        });
      }
      function p(e) {
        let {
            guildId: n,
            globalOption: t,
            onChange: o,
            renderOptionSuffix: l,
          } = e,
          u = (0, a.e7)([f.Z], () => f.Z.showNotice()),
          x = (0, a.e7)([m.ZP], () => m.ZP.getFlattenedGuildIds()),
          p = (0, a.e7)([s.Z], () => s.Z.getGuilds()),
          j = r.useMemo(() => {
            let e = x
              .map((e) => {
                let n = p[e];
                return null == n ? null : { label: n.name, value: n.id };
              })
              .filter(h.lm);
            return null != t && e.unshift(t), e;
          }, [x, p, t]),
          B = r.useCallback(
            (e) => {
              let n =
                (null == e ? void 0 : e.label) ===
                  (null == t ? void 0 : t.label) &&
                (null == e ? void 0 : e.value) ===
                  (null == t ? void 0 : t.value);
              return null == e || "" === e.value || n
                ? null
                : (0, i.jsx)(c.Z, {
                    className: v.guildSelectOptionIcon,
                    guild: p[e.value],
                    size: c.Z.Sizes.SMOL,
                    active: !0,
                  });
            },
            [p, t],
          );
        return (0, i.jsx)(d.SearchableSelect, {
          isDisabled: u,
          onChange: (e) => {
            if ("" === e || e === (null == t ? void 0 : t.value)) {
              o(null);
              return;
            }
            let n = p[e];
            null != n && o(n);
          },
          value: n,
          options: j,
          renderOptionPrefix: B,
          renderOptionSuffix: l,
          placeholder: g.intl.string(g.t["kMgj+f"]),
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
      var i = t(200651);
      t(192379);
      var r = t(120356),
        o = t.n(r),
        l = t(481060),
        a = t(403182),
        d = t(587446),
        c = t(504983),
        u = t(789906);
      function s(e) {
        let { errors: n } = e;
        return (0, i.jsx)(i.Fragment, {
          children: n.map((e, n) =>
            (0, i.jsx)(
              l.Text,
              {
                variant: "text-xs/normal",
                color: "text-danger",
                className: u.errorMessage,
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
          titleId: r,
          description: a,
          children: m,
          className: h,
          errors: f,
          disabled: g = !1,
          hideDivider: v = !1,
          showBorder: x = !1,
          borderType: p,
          hasBackground: j = !1,
          forcedDivider: B = !1,
          showPremiumIcon: _ = !1,
        } = e;
        return (0, i.jsx)("div", {
          className: o()(u.customizationSection, h, {
            [u.disabled]: g,
            [u.hideDivider]: v,
            [u.showBorder]: x,
            [u.withDivider]: B,
          }),
          children: (0, i.jsxs)(c.Z, {
            className: u.customizationSectionBorder,
            backgroundClassName: u.customizationSectionBackground,
            isShown: x,
            type: p,
            hasBackground: j,
            children: [
              (0, i.jsxs)(l.FormTitle, {
                className: u.title,
                id: r,
                children: [n, _ && (0, i.jsx)(d.Z, {}), t],
              }),
              null != a
                ? (0, i.jsx)(l.FormText, {
                    type: l.FormText.Types.DESCRIPTION,
                    className: u.sectionDescription,
                    children: a,
                  })
                : null,
              m,
              null != f && (0, i.jsx)(s, { errors: f }),
            ],
          }),
        });
      }
    },
    504983: function (e, n, t) {
      t.d(n, {
        Y: function () {
          return r;
        },
      });
      var i,
        r,
        o = t(200651),
        l = t(192379),
        a = t(120356),
        d = t.n(a),
        c = t(59437);
      ((i = r || (r = {})).PREMIUM = "premium"), (i.LIMITED = "limited");
      let u = {
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
          type: i = "premium",
          isShown: r,
          hasBackground: l = !1,
          className: a,
          backgroundClassName: s,
        } = e;
        if (!r) return (0, o.jsx)(o.Fragment, { children: t });
        let { border: m, background: h } = u[i];
        return (0, o.jsx)("div", {
          ref: n,
          className: d()(m, a),
          children: (0, o.jsx)("div", {
            className: d()(l ? h : c.background, s),
            children: t,
          }),
        });
      });
    },
    157473: function (e, n, t) {
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
    112023: function (e, n, t) {
      e.exports = {
        section: "section_c95253",
        guildSelectOptionIcon: "guildSelectOptionIcon_c95253",
      };
    },
    789906: function (e, n, t) {
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
    59437: function (e, n, t) {
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
//# sourceMappingURL=9646a83f91efda291f5b.js.map
