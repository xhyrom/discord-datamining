"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29608"],
  {
    378337: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return o;
        },
      }),
        l(653041),
        l(47120);
      var t = l(131704);
      function o(e) {
        let n = [];
        for (let l = 0; l < e._categories.length; l++) {
          let o = e._categories[l].channel,
            i = e[o.id].map((e) => e.channel).filter((e) => t.iR.has(e.type));
          if (null != i && 0 !== i.length)
            for (let e of ("null" !== o.id && n.push(o), i)) n.push(e);
        }
        return n;
      }
    },
    178125: function (e, n, l) {
      l.r(n),
        l.d(n, {
          default: function () {
            return I;
          },
        }),
        l(47120);
      var t = l(200651),
        o = l(192379),
        i = l(106351),
        a = l(442837),
        s = l(481060),
        r = l(471445),
        d = l(856768),
        c = l(324067),
        u = l(771845),
        h = l(9156),
        m = l(117984),
        x = l(593214),
        f = l(378337),
        g = l(689938),
        C = l(421372);
      function I(e) {
        let { transitionState: n, onClose: l, parentId: i } = e,
          r = (0, a.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()[0]),
          [c, h] = o.useState(r),
          [m, x] = o.useState(!1);
        return (0, t.jsxs)(s.ModalRoot, {
          transitionState: n,
          children: [
            (0, t.jsxs)(s.ModalHeader, {
              className: C.modalHeader,
              children: [
                (0, t.jsxs)("div", {
                  className: C.modalHeaderTitle,
                  children: [
                    (0, t.jsx)(s.Heading, {
                      variant: "text-lg/semibold",
                      children: g.Z.Messages.FAVORITE_CHANNEL,
                    }),
                    (0, t.jsx)(s.ModalCloseButton, { onClick: l }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: C.guildSelector,
                  children: (0, t.jsx)(d.q, {
                    guildId: c,
                    onChange: function (e) {
                      null != e && h(e.id);
                    },
                  }),
                }),
              ],
            }),
            (0, t.jsx)(s.ModalContent, {
              className: C.modalContent,
              children: (0, t.jsx)(v, {
                guildId: c,
                hideMutedChannels: m,
                parentId: i,
              }),
            }),
            (0, t.jsxs)(s.ModalFooter, {
              className: C.modalFooter,
              children: [
                (0, t.jsx)(s.Button, {
                  className: C.goBackButton,
                  look: s.ButtonLooks.BLANK,
                  color: s.ButtonColors.PRIMARY,
                  size: s.ButtonSizes.SMALL,
                  onClick: l,
                  children: g.Z.Messages.GO_BACK,
                }),
                (0, t.jsx)("div", {
                  children: (0, t.jsx)(s.Checkbox, {
                    type: s.Checkbox.Types.INVERTED,
                    value: m,
                    onChange: (e, n) => x(n),
                    children: (0, t.jsx)(s.Text, {
                      variant: "text-sm/medium",
                      color: "interactive-normal",
                      children: g.Z.Messages.HIDE_MUTED_CHANNELS,
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function v(e) {
        let { guildId: n, hideMutedChannels: l, parentId: s } = e,
          r = (0, a.e7)([c.Z], () => c.Z.getCategories(n)),
          d = (0, f.Z)(r),
          u = o.useRef(null);
        return (
          o.useEffect(() => {
            var e;
            null == u ||
              null === (e = u.current) ||
              void 0 === e ||
              e.scroll({ top: 0 });
          }, [n]),
          (0, t.jsx)("div", {
            ref: u,
            children: d.map((e) =>
              e.type === i.d.GUILD_CATEGORY
                ? (0, t.jsx)(j, { name: e.name }, e.id)
                : (0, t.jsx)(
                    p,
                    { channel: e, hideMutedChannels: l, parentId: s },
                    e.id,
                  ),
            ),
          })
        );
      }
      function j(e) {
        let { name: n } = e;
        return (0, t.jsx)(s.Text, {
          className: C.categoryRow,
          variant: "eyebrow",
          color: "interactive-normal",
          children: n,
        });
      }
      function p(e) {
        let { channel: n, hideMutedChannels: l, parentId: o } = e,
          i = (0, x.s4)(n.id);
        if ((0, a.e7)([h.ZP], () => h.ZP.isChannelMuted(n.guild_id, n.id)) && l)
          return null;
        let d = (0, r.KS)(n);
        return (0, t.jsxs)(
          "div",
          {
            className: C.channelRow,
            children: [
              (0, t.jsxs)("div", {
                className: C.channelName,
                children: [
                  null != d &&
                    (0, t.jsx)("div", {
                      className: C.channelIconContainer,
                      children: (0, t.jsx)(d, {
                        className: C.channelIcon,
                        size: "custom",
                        color: "currentColor",
                        height: 20,
                        width: 20,
                      }),
                    }),
                  (0, t.jsx)(s.Text, {
                    variant: "text-md/medium",
                    color: "interactive-normal",
                    children: n.name,
                  }),
                ],
              }),
              null != i
                ? (0, t.jsx)(N, { channelId: n.id })
                : (0, t.jsx)(_, { channelId: n.id, parentId: o }),
            ],
          },
          n.id,
        );
      }
      function _(e) {
        let { channelId: n, parentId: l } = e;
        return (0, t.jsx)(s.Button, {
          look: s.ButtonLooks.OUTLINED,
          size: s.ButtonSizes.SMALL,
          color: s.ButtonColors.BRAND,
          onClick: function () {
            (0, m.kj)(n, l);
          },
          children: g.Z.Messages.ADD,
        });
      }
      function N(e) {
        let { channelId: n } = e;
        return (0, t.jsx)(s.Button, {
          look: s.ButtonLooks.FILLED,
          size: s.ButtonSizes.SMALL,
          color: s.ButtonColors.PRIMARY,
          onClick: function () {
            (0, m.oC)(n);
          },
          children: g.Z.Messages.REMOVE,
        });
      }
    },
    856768: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return C;
        },
        q: function () {
          return I;
        },
      }),
        l(733860);
      var t = l(200651),
        o = l(192379),
        i = l(120356),
        a = l.n(i),
        s = l(442837),
        r = l(481060),
        d = l(565138),
        c = l(993413),
        u = l(430824),
        h = l(771845),
        m = l(823379),
        x = l(778825),
        f = l(689938),
        g = l(381520);
      function C(e) {
        let {
          guildId: n,
          className: l,
          globalOption: o,
          hideDivider: i = !1,
          onChange: s,
          renderOptionSuffix: r,
        } = e;
        return (0, t.jsx)(c.Z, {
          className: a()(g.section, l),
          title: f.Z.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_TITLE,
          hideDivider: i,
          forcedDivider: !0,
          children: (0, t.jsx)(I, {
            guildId: n,
            onChange: s,
            renderOptionSuffix: r,
            globalOption: o,
          }),
        });
      }
      function I(e) {
        let {
            guildId: n,
            globalOption: l,
            onChange: i,
            renderOptionSuffix: a,
          } = e,
          c = (0, s.e7)([x.Z], () => x.Z.showNotice()),
          C = (0, s.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()),
          I = (0, s.e7)([u.Z], () => u.Z.getGuilds()),
          v = o.useMemo(() => {
            let e = C.map((e) => {
              let n = I[e];
              return null == n ? null : { label: n.name, value: n.id };
            }).filter(m.lm);
            return null != l && e.unshift(l), e;
          }, [C, I, l]),
          j = o.useCallback(
            (e) => {
              let n =
                (null == e ? void 0 : e.label) ===
                  (null == l ? void 0 : l.label) &&
                (null == e ? void 0 : e.value) ===
                  (null == l ? void 0 : l.value);
              return null == e || "" === e.value || n
                ? null
                : (0, t.jsx)(d.Z, {
                    className: g.guildSelectOptionIcon,
                    guild: I[e.value],
                    size: d.Z.Sizes.SMOL,
                    active: !0,
                  });
            },
            [I, l],
          );
        return (0, t.jsx)(r.SearchableSelect, {
          isDisabled: c,
          onChange: (e) => {
            if ("" === e || e === (null == l ? void 0 : l.value)) {
              i(null);
              return;
            }
            let n = I[e];
            null != n && i(n);
          },
          value: n,
          options: v,
          renderOptionPrefix: j,
          renderOptionSuffix: a,
          placeholder:
            f.Z.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_PLACEHOLDER,
        });
      }
    },
    421372: function (e, n, l) {
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
    381520: function (e, n, l) {
      e.exports = {
        section: "section_c95253",
        guildSelectOptionIcon: "guildSelectOptionIcon_c95253",
      };
    },
  },
]);
//# sourceMappingURL=be52e2d2b03ff56ca196.js.map
