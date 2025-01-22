"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95257"],
  {
    593214: function (e, n, t) {
      t.d(n, {
        Mt: function () {
          return m;
        },
        li: function () {
          return h;
        },
        s4: function () {
          return f;
        },
        up: function () {
          return g;
        },
        zv: function () {
          return v;
        },
      }),
        t(47120),
        t(653041);
      var l = t(192379),
        o = t(106351),
        i = t(442837);
      t(592125);
      var r = t(984933),
        a = t(914010);
      t(709054);
      var d = t(853856),
        c = t(362658),
        u = t(434065),
        s = t(981631);
      function h(e) {
        let { favoritesEnabled: n, hasStaffPrivileges: t } = (0, c.z)(
            "useCanFavoriteChannel",
          ),
          l = (0, i.e7)([d.Z], () => d.Z.isFavorite(e.id)),
          o = e.isDM() || e.isThread();
        return n && !__OVERLAY__ && !l && (!o || t);
      }
      function f(e) {
        return (0, i.e7)([d.Z], () => d.Z.getFavorite(e));
      }
      function v() {
        return (0, i.e7)([r.ZP], () => r.ZP.getChannels(s.I_8))[
          o.d.GUILD_CATEGORY
        ].map((e) => ({
          id: "null" === e.channel.id ? null : e.channel.id,
          name: e.channel.name,
        }));
      }
      function m() {
        return (0, i.e7)([a.Z], () => a.Z.getGuildId()) === s.I_8;
      }
      function g() {
        let { isFavoritesPerk: e } = (0, c.z)("useFavoriteAdded"),
          n = (0, u.r)(),
          t = l.useCallback(() => {
            e && n.notifyFavoriteAdded();
          }, [n, e]),
          o = l.useCallback(() => {
            e && n.clearFavoriteAdded();
          }, [n, e]);
        return {
          favoriteAdded: n.favoriteAdded,
          notifyFavoriteAdded: t,
          clearFavoriteAdded: o,
        };
      }
    },
    434065: function (e, n, t) {
      t.d(n, {
        r: function () {
          return i;
        },
      });
      var l = t(15729),
        o = t(731965);
      let i = (0, l.U)((e) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, o.j)(() => e({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, o.j)(() => e({ favoriteAdded: !1 })),
      }));
    },
    378337: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      }),
        t(653041),
        t(47120);
      var l = t(131704);
      function o(e) {
        let n = [];
        for (let t = 0; t < e._categories.length; t++) {
          let o = e._categories[t].channel,
            i = e[o.id].map((e) => e.channel).filter((e) => l.iR.has(e.type));
          if (null != i && 0 !== i.length)
            for (let e of ("null" !== o.id && n.push(o), i)) n.push(e);
        }
        return n;
      }
    },
    178125: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return C;
          },
        }),
        t(47120);
      var l = t(200651),
        o = t(192379),
        i = t(106351),
        r = t(442837),
        a = t(481060),
        d = t(471445),
        c = t(856768),
        u = t(324067),
        s = t(771845),
        h = t(9156),
        f = t(117984),
        v = t(593214),
        m = t(378337),
        g = t(388032),
        x = t(550358);
      function C(e) {
        let { transitionState: n, onClose: t, parentId: i } = e,
          d = (0, r.e7)([s.ZP], () => s.ZP.getFlattenedGuildIds()[0]),
          [u, h] = o.useState(d),
          [f, v] = o.useState(!1);
        return (0, l.jsxs)(a.ModalRoot, {
          transitionState: n,
          children: [
            (0, l.jsxs)(a.ModalHeader, {
              className: x.modalHeader,
              children: [
                (0, l.jsxs)("div", {
                  className: x.modalHeaderTitle,
                  children: [
                    (0, l.jsx)(a.Heading, {
                      variant: "text-lg/semibold",
                      children: g.intl.string(g.t["4wcdEx"]),
                    }),
                    (0, l.jsx)(a.ModalCloseButton, { onClick: t }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: x.guildSelector,
                  children: (0, l.jsx)(c.q, {
                    guildId: u,
                    onChange: function (e) {
                      null != e && h(e.id);
                    },
                  }),
                }),
              ],
            }),
            (0, l.jsx)(a.ModalContent, {
              className: x.modalContent,
              children: (0, l.jsx)(j, {
                guildId: u,
                hideMutedChannels: f,
                parentId: i,
              }),
            }),
            (0, l.jsxs)(a.ModalFooter, {
              className: x.modalFooter,
              children: [
                (0, l.jsx)(a.Button, {
                  className: x.goBackButton,
                  look: a.ButtonLooks.BLANK,
                  color: a.ButtonColors.PRIMARY,
                  size: a.ButtonSizes.SMALL,
                  onClick: t,
                  children: g.intl.string(g.t["/g10LC"]),
                }),
                (0, l.jsx)("div", {
                  children: (0, l.jsx)(a.Checkbox, {
                    type: a.Checkbox.Types.INVERTED,
                    value: f,
                    onChange: (e, n) => v(n),
                    children: (0, l.jsx)(a.Text, {
                      variant: "text-sm/medium",
                      color: "interactive-normal",
                      children: g.intl.string(g.t.UwOLJC),
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
          d = (0, r.e7)([u.Z], () => u.Z.getCategories(n)),
          c = (0, m.Z)(d),
          s = o.useRef(null);
        return (
          o.useEffect(() => {
            var e;
            null == s ||
              null === (e = s.current) ||
              void 0 === e ||
              e.scroll({ top: 0 });
          }, [n]),
          (0, l.jsx)("div", {
            ref: s,
            children: c.map((e) =>
              e.type === i.d.GUILD_CATEGORY
                ? (0, l.jsx)(p, { name: e.name }, e.id)
                : (0, l.jsx)(
                    I,
                    { channel: e, hideMutedChannels: t, parentId: a },
                    e.id,
                  ),
            ),
          })
        );
      }
      function p(e) {
        let { name: n } = e;
        return (0, l.jsx)(a.Text, {
          className: x.categoryRow,
          variant: "eyebrow",
          color: "interactive-normal",
          children: n,
        });
      }
      function I(e) {
        let { channel: n, hideMutedChannels: t, parentId: o } = e,
          i = (0, v.s4)(n.id);
        if ((0, r.e7)([h.ZP], () => h.ZP.isChannelMuted(n.guild_id, n.id)) && t)
          return null;
        let c = (0, d.KS)(n);
        return (0, l.jsxs)(
          "div",
          {
            className: x.channelRow,
            children: [
              (0, l.jsxs)("div", {
                className: x.channelName,
                children: [
                  null != c &&
                    (0, l.jsx)("div", {
                      className: x.channelIconContainer,
                      children: (0, l.jsx)(c, {
                        className: x.channelIcon,
                        size: "custom",
                        color: "currentColor",
                        height: 20,
                        width: 20,
                      }),
                    }),
                  (0, l.jsx)(a.Text, {
                    variant: "text-md/medium",
                    color: "interactive-normal",
                    children: n.name,
                  }),
                ],
              }),
              null != i
                ? (0, l.jsx)(_, { channelId: n.id })
                : (0, l.jsx)(Z, { channelId: n.id, parentId: o }),
            ],
          },
          n.id,
        );
      }
      function Z(e) {
        let { channelId: n, parentId: t } = e;
        return (0, l.jsx)(a.Button, {
          look: a.ButtonLooks.OUTLINED,
          size: a.ButtonSizes.SMALL,
          color: a.ButtonColors.BRAND,
          onClick: function () {
            (0, f.kj)(n, t);
          },
          children: g.intl.string(g.t.OYkgVl),
        });
      }
      function _(e) {
        let { channelId: n } = e;
        return (0, l.jsx)(a.Button, {
          look: a.ButtonLooks.FILLED,
          size: a.ButtonSizes.SMALL,
          color: a.ButtonColors.PRIMARY,
          onClick: function () {
            (0, f.oC)(n);
          },
          children: g.intl.string(g.t.N86XcH),
        });
      }
    },
    856768: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
        q: function () {
          return C;
        },
      }),
        t(733860);
      var l = t(200651),
        o = t(192379),
        i = t(120356),
        r = t.n(i),
        a = t(442837),
        d = t(481060),
        c = t(565138),
        u = t(993413),
        s = t(430824),
        h = t(771845),
        f = t(823379),
        v = t(778825),
        m = t(388032),
        g = t(317486);
      function x(e) {
        let {
          guildId: n,
          className: t,
          globalOption: o,
          hideDivider: i = !1,
          onChange: a,
          renderOptionSuffix: d,
        } = e;
        return (0, l.jsx)(u.Z, {
          className: r()(g.section, t),
          title: m.intl.string(m.t.ref7Ki),
          hideDivider: i,
          forcedDivider: !0,
          children: (0, l.jsx)(C, {
            guildId: n,
            onChange: a,
            renderOptionSuffix: d,
            globalOption: o,
          }),
        });
      }
      function C(e) {
        let {
            guildId: n,
            globalOption: t,
            onChange: i,
            renderOptionSuffix: r,
          } = e,
          u = (0, a.e7)([v.Z], () => v.Z.showNotice()),
          x = (0, a.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()),
          C = (0, a.e7)([s.Z], () => s.Z.getGuilds()),
          j = o.useMemo(() => {
            let e = x
              .map((e) => {
                let n = C[e];
                return null == n ? null : { label: n.name, value: n.id };
              })
              .filter(f.lm);
            return null != t && e.unshift(t), e;
          }, [x, C, t]),
          p = o.useCallback(
            (e) => {
              let n =
                (null == e ? void 0 : e.label) ===
                  (null == t ? void 0 : t.label) &&
                (null == e ? void 0 : e.value) ===
                  (null == t ? void 0 : t.value);
              return null == e || "" === e.value || n
                ? null
                : (0, l.jsx)(c.Z, {
                    className: g.guildSelectOptionIcon,
                    guild: C[e.value],
                    size: c.Z.Sizes.SMOL,
                    active: !0,
                  });
            },
            [C, t],
          );
        return (0, l.jsx)(d.SearchableSelect, {
          isDisabled: u,
          onChange: (e) => {
            if ("" === e || e === (null == t ? void 0 : t.value)) {
              i(null);
              return;
            }
            let n = C[e];
            null != n && i(n);
          },
          value: n,
          options: j,
          renderOptionPrefix: p,
          renderOptionSuffix: r,
          placeholder: m.intl.string(m.t["kMgj+f"]),
        });
      }
    },
    550358: function (e, n, t) {
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
    317486: function (e, n, t) {
      e.exports = {
        section: "section_c95253",
        guildSelectOptionIcon: "guildSelectOptionIcon_c95253",
      };
    },
  },
]);
//# sourceMappingURL=d12a5adb65da4e72a591.js.map
