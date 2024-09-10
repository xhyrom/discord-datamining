"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["35641"],
  {
    592614: function (e) {
      e.exports = "/assets/d23caa1a32fe7bd06a34.svg";
    },
    589279: function (e, a, l) {
      l.r(a),
        l.d(a, {
          default: function () {
            return N;
          },
        }),
        l(47120);
      var s = l(735250),
        t = l(470079),
        n = l(392711),
        i = l.n(n),
        o = l(442837),
        c = l(481060),
        r = l(741361),
        d = l(596454),
        m = l(447003),
        x = l(471445),
        h = l(605436),
        u = l(313201),
        _ = l(633302),
        T = l(984933),
        C = l(689938),
        E = l(536867);
      function I(e) {
        var a, t, n;
        let { onClose: i, handleReviewPermissions: o } = e,
          r = (e) =>
            (0, s.jsx)(c.Text, {
              tag: "span",
              variant: "text-md/medium",
              color: "header-primary",
              children: e,
            });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(c.ModalContent, {
              className: E.infoContent,
              children: [
                (0, s.jsxs)("div", {
                  className: E.modalHeader,
                  children: [
                    (0, s.jsx)("img", {
                      className: E.modalImage,
                      "data-accessibility": "desaturate",
                      alt: "",
                      src: l(592614),
                    }),
                    (0, s.jsx)(c.Heading, {
                      variant: "heading-lg/semibold",
                      color: "header-primary",
                      children:
                        C.Z.Messages.GUILD_SETTINGS_DEPRIVATE_MODAL_HEADER,
                    }),
                  ],
                }),
                (0, s.jsxs)("ul", {
                  children: [
                    (0, s.jsxs)("li", {
                      className: E.infoListItem,
                      children: [
                        (0, s.jsx)("div", {
                          className: E.iconWrapper,
                          children: (0, s.jsx)(d.Z, {
                            emojiName:
                              null === (a = _.ZP.getByName("eyes")) ||
                              void 0 === a
                                ? void 0
                                : a.surrogates,
                          }),
                        }),
                        (0, s.jsx)(c.Text, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children:
                            C.Z.Messages.GUILD_SETTINGS_DEPRIVATE_EXPLAINER_1.format(
                              { emphasisHook: r },
                            ),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("li", {
                      className: E.infoListItem,
                      children: [
                        (0, s.jsx)("div", {
                          className: E.iconWrapper,
                          children: (0, s.jsx)(d.Z, {
                            emojiName:
                              null === (t = _.ZP.getByName("star_struck")) ||
                              void 0 === t
                                ? void 0
                                : t.surrogates,
                          }),
                        }),
                        (0, s.jsx)(c.Text, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children:
                            C.Z.Messages.GUILD_SETTINGS_DEPRIVATE_EXPLAINER_2.format(
                              { emphasisHook: r },
                            ),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("li", {
                      className: E.infoListItem,
                      children: [
                        (0, s.jsx)("div", {
                          className: E.iconWrapper,
                          children: (0, s.jsx)(d.Z, {
                            emojiName:
                              null === (n = _.ZP.getByName("books")) ||
                              void 0 === n
                                ? void 0
                                : n.surrogates,
                          }),
                        }),
                        (0, s.jsx)(c.Text, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children:
                            C.Z.Messages.GUILD_SETTINGS_DEPRIVATE_EXPLAINER_3.format(
                              { emphasisHook: r },
                            ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)(c.ModalFooter, {
              children: [
                (0, s.jsx)(c.Button, {
                  onClick: o,
                  children: (0, s.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "always-white",
                    children: C.Z.Messages.GUILD_SETTINGS_REVIEW_PERMISSIONS,
                  }),
                }),
                (0, s.jsx)(c.Button, {
                  className: E.__invalid_modalCancel,
                  look: c.Button.Looks.LINK,
                  color: c.Button.Colors.PRIMARY,
                  onClick: i,
                  children: (0, s.jsx)(c.Text, {
                    variant: "text-md/medium",
                    children: C.Z.Messages.CANCEL,
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function j(e) {
        var a;
        let { channel: l, selected: n, onChange: i } = e,
          o = null !== (a = (0, x.KS)(l)) && void 0 !== a ? a : c.TextIcon,
          r = t.useCallback(() => {
            i(l);
          }, [l, i]);
        return (0, s.jsxs)(c.Clickable, {
          "aria-label": l.name,
          "aria-checked": n,
          className: E.selectableChannelRow,
          onClick: r,
          children: [
            (0, s.jsxs)("div", {
              className: E.selectableChannelCellFirst,
              children: [
                (0, s.jsx)(o, {
                  className: E.channelIcon,
                  size: "xs",
                  color: "currentColor",
                }),
                (0, s.jsx)(c.Text, {
                  className: E.__invalid_channelName,
                  variant: "text-md/medium",
                  color: "text-normal",
                  lineClamp: 1,
                  children: l.name,
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: E.selectableChannelCellSecond,
              children: (0, s.jsx)(c.Checkbox, {
                type: c.Checkbox.Types.INVERTED,
                value: n,
                displayOnly: !0,
              }),
            }),
          ],
        });
      }
      function N(e) {
        let {
            transitionState: a,
            onClose: l,
            guildId: n,
            startingChannelId: d,
          } = e,
          x = (0, o.Wu)([T.ZP], () => {
            var e, a;
            let l = T.ZP.getChannels(n);
            return (null !== (e = l[T.sH]) && void 0 !== e ? e : [])
              .concat(null !== (a = l[T.Zb]) && void 0 !== a ? a : [])
              .filter((e) => (0, m.Z)(e.channel))
              .map((e) => e.channel);
          }),
          [_, N] = t.useState(0),
          v = x.find((e) => e.id === d),
          [p, b] = t.useState(null != v ? [v] : []),
          S = (0, u.Dt)(),
          g = p.length === x.length,
          L = t.useCallback(() => {
            N(1);
          }, [N]),
          A = t.useCallback(
            (e) => {
              b((a) => (a.includes(e) ? [...i().pull(a, e)] : [...a, e]));
            },
            [b],
          ),
          k = t.useCallback(() => {
            g ? b([]) : b(x);
          }, [g, x, b]),
          M = t.useCallback(() => {
            p.forEach((e) => {
              let a = (0, h._A)(e, e.accessPermissions, !0);
              (0, r.hw)(e.id, [a]), l();
            });
          }, [p, l]);
        return 0 === _
          ? (0, s.jsx)(c.ModalRoot, {
              transitionState: a,
              "aria-labelledby": S,
              size: c.ModalSize.SMALL,
              children: (0, s.jsx)(I, {
                handleReviewPermissions: L,
                onClose: l,
              }),
            })
          : (0, s.jsxs)(c.ModalRoot, {
              transitionState: a,
              "aria-labelledby": S,
              size: c.ModalSize.SMALL,
              children: [
                (0, s.jsxs)(c.ModalContent, {
                  className: E.updateContent,
                  children: [
                    (0, s.jsxs)("div", {
                      className: E.modalHeader,
                      children: [
                        (0, s.jsx)(c.Heading, {
                          variant: "heading-lg/semibold",
                          color: "header-primary",
                          children: C.Z.Messages.GUILD_SETTINGS_DEPRIVATE_TITLE,
                        }),
                        (0, s.jsx)(c.Text, {
                          className: E.__invalid_modalSubheader,
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children:
                            C.Z.Messages.GUILD_SETTINGS_DEPRIVATE_SUBTITLE,
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: E.selectAllContainer,
                      children: [
                        (0, s.jsx)(c.Text, {
                          className: E.selectAllTitle,
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children:
                            C.Z.Messages.GUILD_SETTINGS_DEPRIVATE_CHANNEL_COUNT.format(
                              { count: x.length },
                            ),
                        }),
                        (0, s.jsxs)(c.Clickable, {
                          "aria-label": C.Z.Messages.SELECT_ALL,
                          className: E.selectAllButton,
                          onClick: k,
                          children: [
                            (0, s.jsx)(c.Text, {
                              variant: "text-xs/normal",
                              children: C.Z.Messages.SELECT_ALL,
                            }),
                            (0, s.jsx)(c.Checkbox, {
                              size: 16,
                              type: c.Checkbox.Types.INVERTED,
                              value: g,
                              displayOnly: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: E.deprivateTableBody,
                      children: x.map((e) =>
                        (0, s.jsx)(
                          j,
                          { channel: e, selected: p.includes(e), onChange: A },
                          e.id,
                        ),
                      ),
                    }),
                    (0, s.jsx)("div", {
                      className: E.deprivateExplainer,
                      children: (0, s.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children:
                          C.Z.Messages.GUILD_SETTINGS_DEPRIVATE_EXPLAINER_4.format(
                            {
                              emphasisHook: (e) =>
                                (0, s.jsx)(c.Text, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "interactive-active",
                                  children: e,
                                }),
                              brandHook: (e) =>
                                (0, s.jsx)(c.Text, {
                                  tag: "span",
                                  variant: "text-xs/normal",
                                  color: "text-brand",
                                  children: e,
                                }),
                            },
                          ),
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)(c.ModalFooter, {
                  className: E.modalFooter,
                  children: [
                    (0, s.jsx)(c.Button, {
                      disabled: 0 === p.length,
                      onClick: M,
                      children: (0, s.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children:
                          C.Z.Messages.GUILD_SETTINGS_UPDATE_PERMISSIONS,
                      }),
                    }),
                    (0, s.jsx)(c.Button, {
                      look: c.Button.Looks.LINK,
                      color: c.Button.Colors.PRIMARY,
                      onClick: l,
                      children: (0, s.jsx)(c.Text, {
                        variant: "text-md/medium",
                        children: C.Z.Messages.CANCEL,
                      }),
                    }),
                  ],
                }),
              ],
            });
      }
    },
    536867: function (e, a, l) {
      e.exports = {
        modalHeader: "modalHeader_ac8d32",
        modalFooter: "modalFooter_ac8d32",
        modalImage: "modalImage_ac8d32",
        infoContent: "infoContent_ac8d32",
        updateContent: "updateContent_ac8d32",
        infoListItem: "infoListItem_ac8d32",
        iconWrapper: "iconWrapper_ac8d32",
        deprivateTableBody: "deprivateTableBody_ac8d32",
        deprivateExplainer: "deprivateExplainer_ac8d32",
        selectableChannelCellFirst: "selectableChannelCellFirst_ac8d32",
        selectableChannelCellSecond: "selectableChannelCellSecond_ac8d32",
        channelIcon: "channelIcon_ac8d32",
        selectableChannelRow: "selectableChannelRow_ac8d32",
        selectAllContainer: "selectAllContainer_ac8d32",
        selectAllTitle: "selectAllTitle_ac8d32",
        selectAllButton: "selectAllButton_ac8d32",
      };
    },
  },
]);
//# sourceMappingURL=e6be428f959d81e68057.js.map
