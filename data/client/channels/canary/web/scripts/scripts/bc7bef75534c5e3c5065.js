"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["35641"],
  {
    592614: function (e) {
      e.exports = "/assets/d23caa1a32fe7bd06a34.svg";
    },
    89216: function (e, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return N;
          },
        }),
        a(47120);
      var t = a(200651),
        n = a(192379),
        s = a(392711),
        i = a.n(s),
        o = a(442837),
        r = a(481060),
        c = a(741361),
        d = a(596454),
        m = a(447003),
        x = a(471445),
        h = a(605436),
        u = a(313201),
        j = a(633302),
        v = a(984933),
        C = a(388032),
        p = a(901701);
      function b(e) {
        var l, n, s;
        let { onClose: i, handleReviewPermissions: o } = e,
          c = (e) =>
            (0, t.jsx)(r.Text, {
              tag: "span",
              variant: "text-md/medium",
              color: "header-primary",
              children: e,
            });
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(r.ModalContent, {
              className: p.infoContent,
              children: [
                (0, t.jsxs)("div", {
                  className: p.modalHeader,
                  children: [
                    (0, t.jsx)("img", {
                      className: p.modalImage,
                      "data-accessibility": "desaturate",
                      alt: "",
                      src: a(592614),
                    }),
                    (0, t.jsx)(r.Heading, {
                      variant: "heading-lg/semibold",
                      color: "header-primary",
                      children: C.intl.string(C.t.PJOCLy),
                    }),
                  ],
                }),
                (0, t.jsxs)("ul", {
                  children: [
                    (0, t.jsxs)("li", {
                      className: p.infoListItem,
                      children: [
                        (0, t.jsx)("div", {
                          className: p.iconWrapper,
                          children: (0, t.jsx)(d.Z, {
                            emojiName:
                              null === (l = j.ZP.getByName("eyes")) ||
                              void 0 === l
                                ? void 0
                                : l.surrogates,
                          }),
                        }),
                        (0, t.jsx)(r.Text, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children: C.intl.format(C.t["8JzOBg"], {
                            emphasisHook: c,
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("li", {
                      className: p.infoListItem,
                      children: [
                        (0, t.jsx)("div", {
                          className: p.iconWrapper,
                          children: (0, t.jsx)(d.Z, {
                            emojiName:
                              null === (n = j.ZP.getByName("star_struck")) ||
                              void 0 === n
                                ? void 0
                                : n.surrogates,
                          }),
                        }),
                        (0, t.jsx)(r.Text, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children: C.intl.format(C.t.UcGDkp, {
                            emphasisHook: c,
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("li", {
                      className: p.infoListItem,
                      children: [
                        (0, t.jsx)("div", {
                          className: p.iconWrapper,
                          children: (0, t.jsx)(d.Z, {
                            emojiName:
                              null === (s = j.ZP.getByName("books")) ||
                              void 0 === s
                                ? void 0
                                : s.surrogates,
                          }),
                        }),
                        (0, t.jsx)(r.Text, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children: C.intl.format(C.t.kALJ5u, {
                            emphasisHook: c,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)(r.ModalFooter, {
              children: [
                (0, t.jsx)(r.Button, {
                  onClick: o,
                  children: (0, t.jsx)(r.Text, {
                    variant: "text-md/medium",
                    color: "always-white",
                    children: C.intl.string(C.t.bEnlen),
                  }),
                }),
                (0, t.jsx)(r.Button, {
                  className: p.__invalid_modalCancel,
                  look: r.Button.Looks.LINK,
                  color: r.Button.Colors.PRIMARY,
                  onClick: i,
                  children: (0, t.jsx)(r.Text, {
                    variant: "text-md/medium",
                    children: C.intl.string(C.t["ETE/oK"]),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function g(e) {
        var l;
        let { channel: a, selected: s, onChange: i } = e,
          o = null !== (l = (0, x.KS)(a)) && void 0 !== l ? l : r.TextIcon,
          c = n.useCallback(() => {
            i(a);
          }, [a, i]);
        return (0, t.jsxs)(r.Clickable, {
          "aria-label": a.name,
          "aria-checked": s,
          className: p.selectableChannelRow,
          onClick: c,
          children: [
            (0, t.jsxs)("div", {
              className: p.selectableChannelCellFirst,
              children: [
                (0, t.jsx)(o, {
                  className: p.channelIcon,
                  size: "xs",
                  color: "currentColor",
                }),
                (0, t.jsx)(r.Text, {
                  className: p.__invalid_channelName,
                  variant: "text-md/medium",
                  color: "text-normal",
                  lineClamp: 1,
                  children: a.name,
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: p.selectableChannelCellSecond,
              children: (0, t.jsx)(r.Checkbox, {
                type: r.Checkbox.Types.INVERTED,
                value: s,
                displayOnly: !0,
              }),
            }),
          ],
        });
      }
      function N(e) {
        let {
            transitionState: l,
            onClose: a,
            guildId: s,
            startingChannelId: d,
          } = e,
          x = (0, o.Wu)([v.ZP], () => {
            var e, l;
            let a = v.ZP.getChannels(s);
            return (null !== (e = a[v.sH]) && void 0 !== e ? e : [])
              .concat(null !== (l = a[v.Zb]) && void 0 !== l ? l : [])
              .filter((e) => (0, m.Z)(e.channel))
              .map((e) => e.channel);
          }),
          [j, N] = n.useState(0),
          k = x.find((e) => e.id === d),
          [_, T] = n.useState(null != k ? [k] : []),
          y = (0, u.Dt)(),
          f = _.length === x.length,
          B = n.useCallback(() => {
            N(1);
          }, [N]),
          I = n.useCallback(
            (e) => {
              T((l) => (l.includes(e) ? [...i().pull(l, e)] : [...l, e]));
            },
            [T],
          ),
          A = n.useCallback(() => {
            f ? T([]) : T(x);
          }, [f, x, T]),
          L = n.useCallback(() => {
            _.forEach((e) => {
              let l = (0, h._A)(e, e.accessPermissions, !0);
              (0, c.hw)(e.id, [l]), a();
            });
          }, [_, a]);
        return 0 === j
          ? (0, t.jsx)(r.ModalRoot, {
              transitionState: l,
              "aria-labelledby": y,
              size: r.ModalSize.SMALL,
              children: (0, t.jsx)(b, {
                handleReviewPermissions: B,
                onClose: a,
              }),
            })
          : (0, t.jsxs)(r.ModalRoot, {
              transitionState: l,
              "aria-labelledby": y,
              size: r.ModalSize.SMALL,
              children: [
                (0, t.jsxs)(r.ModalContent, {
                  className: p.updateContent,
                  children: [
                    (0, t.jsxs)("div", {
                      className: p.modalHeader,
                      children: [
                        (0, t.jsx)(r.Heading, {
                          variant: "heading-lg/semibold",
                          color: "header-primary",
                          children: C.intl.string(C.t.y77PiY),
                        }),
                        (0, t.jsx)(r.Text, {
                          className: p.__invalid_modalSubheader,
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children: C.intl.string(C.t.ZSzBe3),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: p.selectAllContainer,
                      children: [
                        (0, t.jsx)(r.Text, {
                          className: p.selectAllTitle,
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: C.intl.format(C.t.rrYCq6, {
                            count: x.length,
                          }),
                        }),
                        (0, t.jsxs)(r.Clickable, {
                          "aria-label": C.intl.string(C.t.l4rqa2),
                          className: p.selectAllButton,
                          onClick: A,
                          children: [
                            (0, t.jsx)(r.Text, {
                              variant: "text-xs/normal",
                              children: C.intl.string(C.t.l4rqa2),
                            }),
                            (0, t.jsx)(r.Checkbox, {
                              size: 16,
                              type: r.Checkbox.Types.INVERTED,
                              value: f,
                              displayOnly: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: p.deprivateTableBody,
                      children: x.map((e) =>
                        (0, t.jsx)(
                          g,
                          { channel: e, selected: _.includes(e), onChange: I },
                          e.id,
                        ),
                      ),
                    }),
                    (0, t.jsx)("div", {
                      className: p.deprivateExplainer,
                      children: (0, t.jsx)(r.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: C.intl.format(C.t["OP/pKi"], {
                          emphasisHook: (e) =>
                            (0, t.jsx)(r.Text, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "interactive-active",
                              children: e,
                            }),
                          brandHook: (e) =>
                            (0, t.jsx)(r.Text, {
                              tag: "span",
                              variant: "text-xs/normal",
                              color: "text-brand",
                              children: e,
                            }),
                        }),
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)(r.ModalFooter, {
                  className: p.modalFooter,
                  children: [
                    (0, t.jsx)(r.Button, {
                      disabled: 0 === _.length,
                      onClick: L,
                      children: (0, t.jsx)(r.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: C.intl.string(C.t.PggHmp),
                      }),
                    }),
                    (0, t.jsx)(r.Button, {
                      look: r.Button.Looks.LINK,
                      color: r.Button.Colors.PRIMARY,
                      onClick: a,
                      children: (0, t.jsx)(r.Text, {
                        variant: "text-md/medium",
                        children: C.intl.string(C.t["ETE/oK"]),
                      }),
                    }),
                  ],
                }),
              ],
            });
      }
    },
    901701: function (e, l, a) {
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
//# sourceMappingURL=bc7bef75534c5e3c5065.js.map
