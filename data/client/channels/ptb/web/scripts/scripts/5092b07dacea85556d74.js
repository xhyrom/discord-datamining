"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29608"],
  {
    378337: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      }),
        t(653041),
        t(47120);
      var o = t(131704);
      function l(e) {
        let n = [];
        for (let t = 0; t < e._categories.length; t++) {
          let l = e._categories[t].channel,
            i = e[l.id].map((e) => e.channel).filter((e) => o.iR.has(e.type));
          if (null != i && 0 !== i.length)
            for (let e of ("null" !== l.id && n.push(l), i)) n.push(e);
        }
        return n;
      }
    },
    178125: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return p;
          },
        }),
        t(47120);
      var o = t(735250),
        l = t(470079),
        i = t(106351),
        a = t(442837),
        r = t(481060),
        s = t(471445),
        c = t(856768),
        d = t(324067),
        u = t(771845),
        h = t(9156),
        m = t(117984),
        x = t(593214),
        g = t(378337),
        f = t(689938),
        v = t(421372);
      function p(e) {
        let { transitionState: n, onClose: t, parentId: i } = e,
          s = (0, a.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()[0]),
          [d, h] = l.useState(s),
          [m, x] = l.useState(!1);
        return (0, o.jsxs)(r.ModalRoot, {
          transitionState: n,
          children: [
            (0, o.jsxs)(r.ModalHeader, {
              className: v.modalHeader,
              children: [
                (0, o.jsxs)("div", {
                  className: v.modalHeaderTitle,
                  children: [
                    (0, o.jsx)(r.Heading, {
                      variant: "text-lg/semibold",
                      children: f.Z.Messages.FAVORITE_CHANNEL,
                    }),
                    (0, o.jsx)(r.ModalCloseButton, { onClick: t }),
                  ],
                }),
                (0, o.jsx)("div", {
                  className: v.guildSelector,
                  children: (0, o.jsx)(c.q, {
                    guildId: d,
                    onChange: function (e) {
                      null != e && h(e.id);
                    },
                  }),
                }),
              ],
            }),
            (0, o.jsx)(r.ModalContent, {
              className: v.modalContent,
              children: (0, o.jsx)(C, {
                guildId: d,
                hideMutedChannels: m,
                parentId: i,
              }),
            }),
            (0, o.jsxs)(r.ModalFooter, {
              className: v.modalFooter,
              children: [
                (0, o.jsx)(r.Button, {
                  className: v.goBackButton,
                  look: r.ButtonLooks.BLANK,
                  color: r.ButtonColors.PRIMARY,
                  size: r.ButtonSizes.SMALL,
                  onClick: t,
                  children: f.Z.Messages.GO_BACK,
                }),
                (0, o.jsx)("div", {
                  children: (0, o.jsx)(r.Checkbox, {
                    type: r.Checkbox.Types.INVERTED,
                    value: m,
                    onChange: (e, n) => x(n),
                    children: (0, o.jsx)(r.Text, {
                      variant: "text-sm/medium",
                      color: "interactive-normal",
                      children: f.Z.Messages.HIDE_MUTED_CHANNELS,
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function C(e) {
        let { guildId: n, hideMutedChannels: t, parentId: r } = e,
          s = (0, a.e7)([d.Z], () => d.Z.getCategories(n)),
          c = (0, g.Z)(s),
          u = l.useRef(null);
        return (
          l.useEffect(() => {
            var e;
            null == u ||
              null === (e = u.current) ||
              void 0 === e ||
              e.scroll({ top: 0 });
          }, [n]),
          (0, o.jsx)("div", {
            ref: u,
            children: c.map((e) =>
              e.type === i.d.GUILD_CATEGORY
                ? (0, o.jsx)(_, { name: e.name }, e.id)
                : (0, o.jsx)(
                    j,
                    { channel: e, hideMutedChannels: t, parentId: r },
                    e.id,
                  ),
            ),
          })
        );
      }
      function _(e) {
        let { name: n } = e;
        return (0, o.jsx)(r.Text, {
          className: v.categoryRow,
          variant: "eyebrow",
          color: "interactive-normal",
          children: n,
        });
      }
      function j(e) {
        let { channel: n, hideMutedChannels: t, parentId: l } = e,
          i = (0, x.s4)(n.id);
        if ((0, a.e7)([h.ZP], () => h.ZP.isChannelMuted(n.guild_id, n.id)) && t)
          return null;
        let c = (0, s.KS)(n);
        return (0, o.jsxs)(
          "div",
          {
            className: v.channelRow,
            children: [
              (0, o.jsxs)("div", {
                className: v.channelName,
                children: [
                  null != c &&
                    (0, o.jsx)("div", {
                      className: v.channelIconContainer,
                      children: (0, o.jsx)(c, {
                        className: v.channelIcon,
                        size: "custom",
                        color: "currentColor",
                        height: 20,
                        width: 20,
                      }),
                    }),
                  (0, o.jsx)(r.Text, {
                    variant: "text-md/medium",
                    color: "interactive-normal",
                    children: n.name,
                  }),
                ],
              }),
              null != i
                ? (0, o.jsx)(S, { channelId: n.id })
                : (0, o.jsx)(I, { channelId: n.id, parentId: l }),
            ],
          },
          n.id,
        );
      }
      function I(e) {
        let { channelId: n, parentId: t } = e;
        return (0, o.jsx)(r.Button, {
          look: r.ButtonLooks.OUTLINED,
          size: r.ButtonSizes.SMALL,
          color: r.ButtonColors.BRAND,
          onClick: function () {
            (0, m.kj)(n, t);
          },
          children: f.Z.Messages.ADD,
        });
      }
      function S(e) {
        let { channelId: n } = e;
        return (0, o.jsx)(r.Button, {
          look: r.ButtonLooks.FILLED,
          size: r.ButtonSizes.SMALL,
          color: r.ButtonColors.PRIMARY,
          onClick: function () {
            (0, m.oC)(n);
          },
          children: f.Z.Messages.REMOVE,
        });
      }
    },
    856768: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
        q: function () {
          return p;
        },
      }),
        t(733860);
      var o = t(735250),
        l = t(470079),
        i = t(120356),
        a = t.n(i),
        r = t(442837),
        s = t(481060),
        c = t(565138),
        d = t(993413),
        u = t(430824),
        h = t(771845),
        m = t(823379),
        x = t(778825),
        g = t(689938),
        f = t(381520);
      function v(e) {
        let {
          guildId: n,
          className: t,
          globalOption: l,
          hideDivider: i = !1,
          onChange: r,
          renderOptionSuffix: s,
        } = e;
        return (0, o.jsx)(d.Z, {
          className: a()(f.section, t),
          title: g.Z.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_TITLE,
          hideDivider: i,
          forcedDivider: !0,
          children: (0, o.jsx)(p, {
            guildId: n,
            onChange: r,
            renderOptionSuffix: s,
            globalOption: l,
          }),
        });
      }
      function p(e) {
        let {
            guildId: n,
            globalOption: t,
            onChange: i,
            renderOptionSuffix: a,
          } = e,
          d = (0, r.e7)([x.Z], () => x.Z.showNotice()),
          v = (0, r.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()),
          p = (0, r.e7)([u.Z], () => u.Z.getGuilds()),
          C = l.useMemo(() => {
            let e = v
              .map((e) => {
                let n = p[e];
                return null == n ? null : { label: n.name, value: n.id };
              })
              .filter(m.lm);
            return null != t && e.unshift(t), e;
          }, [v, p, t]),
          _ = l.useCallback(
            (e) => {
              let n =
                (null == e ? void 0 : e.label) ===
                  (null == t ? void 0 : t.label) &&
                (null == e ? void 0 : e.value) ===
                  (null == t ? void 0 : t.value);
              return null == e || "" === e.value || n
                ? null
                : (0, o.jsx)(c.Z, {
                    className: f.guildSelectOptionIcon,
                    guild: p[e.value],
                    size: c.Z.Sizes.SMOL,
                    active: !0,
                  });
            },
            [p, t],
          );
        return (0, o.jsx)(s.SearchableSelect, {
          isDisabled: d,
          onChange: (e) => {
            if ("" === e || e === (null == t ? void 0 : t.value)) {
              i(null);
              return;
            }
            let n = p[e];
            null != n && i(n);
          },
          value: n,
          options: C,
          renderOptionPrefix: _,
          renderOptionSuffix: a,
          placeholder:
            g.Z.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_PLACEHOLDER,
        });
      }
    },
    993413: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      }),
        t(757143);
      var o = t(735250);
      t(470079);
      var l = t(120356),
        i = t.n(l),
        a = t(481060),
        r = t(403182),
        s = t(587446),
        c = t(504983),
        d = t(651523);
      function u(e) {
        let { errors: n } = e;
        return (0, o.jsx)(o.Fragment, {
          children: n.map((e, n) =>
            (0, o.jsx)(
              a.Text,
              {
                variant: "text-xs/normal",
                color: "text-danger",
                className: d.errorMessage,
                children: e.replace(/[0-9.,]+ ?kb/g, (e) => {
                  let n = 1024 * parseInt(e, 10);
                  return isNaN(n) ? e : (0, r.Ng)(n);
                }),
              },
              n,
            ),
          ),
        });
      }
      function h(e) {
        let {
          title: n,
          titleIcon: t,
          titleId: l,
          description: r,
          children: h,
          className: m,
          errors: x,
          disabled: g = !1,
          hideDivider: f = !1,
          showBorder: v = !1,
          borderType: p,
          hasBackground: C = !1,
          forcedDivider: _ = !1,
          showPremiumIcon: j = !1,
        } = e;
        return (0, o.jsx)("div", {
          className: i()(d.customizationSection, m, {
            [d.disabled]: g,
            [d.hideDivider]: f,
            [d.showBorder]: v,
            [d.withDivider]: _,
          }),
          children: (0, o.jsxs)(c.Z, {
            className: d.customizationSectionBorder,
            backgroundClassName: d.customizationSectionBackground,
            isShown: v,
            type: p,
            hasBackground: C,
            children: [
              (0, o.jsxs)(a.FormTitle, {
                className: d.title,
                id: l,
                children: [n, j && (0, o.jsx)(s.Z, {}), t],
              }),
              null != r
                ? (0, o.jsx)(a.FormText, {
                    type: a.FormText.Types.DESCRIPTION,
                    className: d.sectionDescription,
                    children: r,
                  })
                : null,
              h,
              null != x && (0, o.jsx)(u, { errors: x }),
            ],
          }),
        });
      }
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
  },
]);
//# sourceMappingURL=5092b07dacea85556d74.js.map
