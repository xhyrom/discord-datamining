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
            a = e[l.id].map((e) => e.channel).filter((e) => o.iR.has(e.type));
          if (null != a && 0 !== a.length)
            for (let e of ("null" !== l.id && n.push(l), a)) n.push(e);
        }
        return n;
      }
    },
    178125: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return f;
          },
        }),
        t(47120);
      var o = t(200651),
        l = t(192379),
        a = t(106351),
        i = t(442837),
        r = t(481060),
        d = t(471445),
        c = t(856768),
        s = t(324067),
        u = t(771845),
        h = t(9156),
        m = t(117984),
        x = t(593214),
        g = t(378337),
        C = t(388032),
        j = t(550358);
      function f(e) {
        let { transitionState: n, onClose: t, parentId: a } = e,
          d = (0, i.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()[0]),
          [s, h] = l.useState(d),
          [m, x] = l.useState(!1);
        return (0, o.jsxs)(r.ModalRoot, {
          transitionState: n,
          children: [
            (0, o.jsxs)(r.ModalHeader, {
              className: j.modalHeader,
              children: [
                (0, o.jsxs)("div", {
                  className: j.modalHeaderTitle,
                  children: [
                    (0, o.jsx)(r.Heading, {
                      variant: "text-lg/semibold",
                      children: C.intl.string(C.t["4wcdEx"]),
                    }),
                    (0, o.jsx)(r.ModalCloseButton, { onClick: t }),
                  ],
                }),
                (0, o.jsx)("div", {
                  className: j.guildSelector,
                  children: (0, o.jsx)(c.q, {
                    guildId: s,
                    onChange: function (e) {
                      null != e && h(e.id);
                    },
                  }),
                }),
              ],
            }),
            (0, o.jsx)(r.ModalContent, {
              className: j.modalContent,
              children: (0, o.jsx)(k, {
                guildId: s,
                hideMutedChannels: m,
                parentId: a,
              }),
            }),
            (0, o.jsxs)(r.ModalFooter, {
              className: j.modalFooter,
              children: [
                (0, o.jsx)(r.Button, {
                  className: j.goBackButton,
                  look: r.ButtonLooks.BLANK,
                  color: r.ButtonColors.PRIMARY,
                  size: r.ButtonSizes.SMALL,
                  onClick: t,
                  children: C.intl.string(C.t["/g10LC"]),
                }),
                (0, o.jsx)("div", {
                  children: (0, o.jsx)(r.Checkbox, {
                    type: r.Checkbox.Types.INVERTED,
                    value: m,
                    onChange: (e, n) => x(n),
                    children: (0, o.jsx)(r.Text, {
                      variant: "text-sm/medium",
                      color: "interactive-normal",
                      children: C.intl.string(C.t.UwOLJC),
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function k(e) {
        let { guildId: n, hideMutedChannels: t, parentId: r } = e,
          d = (0, i.e7)([s.Z], () => s.Z.getCategories(n)),
          c = (0, g.Z)(d),
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
              e.type === a.d.GUILD_CATEGORY
                ? (0, o.jsx)(B, { name: e.name }, e.id)
                : (0, o.jsx)(
                    p,
                    { channel: e, hideMutedChannels: t, parentId: r },
                    e.id,
                  ),
            ),
          })
        );
      }
      function B(e) {
        let { name: n } = e;
        return (0, o.jsx)(r.Text, {
          className: j.categoryRow,
          variant: "eyebrow",
          color: "interactive-normal",
          children: n,
        });
      }
      function p(e) {
        let { channel: n, hideMutedChannels: t, parentId: l } = e,
          a = (0, x.s4)(n.id);
        if ((0, i.e7)([h.ZP], () => h.ZP.isChannelMuted(n.guild_id, n.id)) && t)
          return null;
        let c = (0, d.KS)(n);
        return (0, o.jsxs)(
          "div",
          {
            className: j.channelRow,
            children: [
              (0, o.jsxs)("div", {
                className: j.channelName,
                children: [
                  null != c &&
                    (0, o.jsx)("div", {
                      className: j.channelIconContainer,
                      children: (0, o.jsx)(c, {
                        className: j.channelIcon,
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
              null != a
                ? (0, o.jsx)(v, { channelId: n.id })
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
          children: C.intl.string(C.t.OYkgVl),
        });
      }
      function v(e) {
        let { channelId: n } = e;
        return (0, o.jsx)(r.Button, {
          look: r.ButtonLooks.FILLED,
          size: r.ButtonSizes.SMALL,
          color: r.ButtonColors.PRIMARY,
          onClick: function () {
            (0, m.oC)(n);
          },
          children: C.intl.string(C.t.N86XcH),
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
  },
]);
//# sourceMappingURL=8d6662c1db9722c31cc1.js.map
