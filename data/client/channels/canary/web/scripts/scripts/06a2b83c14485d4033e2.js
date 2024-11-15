"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72920"],
  {
    91176: function (t, e, l) {
      var n = l(913527),
        a = l.n(n),
        o = l(749210);
      e.Z = {
        async setCommunicationDisabledDuration(t, e, l, n, s) {
          let r = null != l ? a()().add(l, "s").toISOString() : null;
          await o.Z.setCommunicationDisabledUntil({
            guildId: t,
            userId: e,
            communicationDisabledUntilTimestamp: r,
            duration: l,
            reason: n,
            location: s,
          });
        },
      };
    },
    109730: function (t, e, l) {
      l.r(e),
        l.d(e, {
          default: function () {
            return g;
          },
        }),
        l(47120);
      var n = l(200651),
        a = l(192379),
        o = l(442837),
        s = l(481060),
        r = l(91176),
        i = l(906732),
        c = l(313201),
        u = l(910693),
        d = l(594174),
        f = l(626135),
        x = l(5192),
        m = l(590433),
        T = l(981631),
        h = l(388032),
        _ = l(880535);
      function C(t) {
        return {
          value: t,
          get label() {
            var e;
            return null === (e = (0, m.L9)(t)) || void 0 === e
              ? void 0
              : e.toLocaleUpperCase();
          },
        };
      }
      let N = [
        C(m.UK.DURATION_60_SEC),
        C(m.UK.DURATION_5_MIN),
        C(m.UK.DURATION_10_MIN),
        C(m.UK.DURATION_1_HOUR),
        C(m.UK.DURATION_1_DAY),
        C(m.UK.DURATION_1_WEEK),
      ];
      function g(t) {
        var e, l;
        let {
            guildId: C,
            userId: g,
            anaylticsLocations: U,
            transitionState: p,
            onClose: v,
          } = t,
          I = (0, c.Dt)(),
          { analyticsLocations: S } = (0, i.ZP)(),
          b =
            null !==
              (l =
                null !== (e = null == U ? void 0 : U[0]) && void 0 !== e
                  ? e
                  : null == S
                    ? void 0
                    : S[0]) && void 0 !== l
              ? l
              : null,
          j = (0, o.e7)([d.default], () => d.default.getUser(g), [g]),
          [B, D] = a.useState(m.UK.DURATION_60_SEC),
          k = (0, u.sE)(C, { location: b, targetUserId: g }),
          [O, A] = a.useState(""),
          [E, R] = a.useState(!1),
          y = a.useCallback(async () => {
            if (null != j) {
              R(!0);
              try {
                await r.Z.setCommunicationDisabledDuration(C, g, B, O, b),
                  k(u.jQ.TIMEOUT),
                  (0, s.showToast)(
                    (0, s.createToast)(
                      h.intl.formatToPlainString(h.t.O9C3Nj, {
                        user: x.ZP.getName(C, null, j),
                      }),
                      s.ToastType.SUCCESS,
                    ),
                  ),
                  v();
              } catch (t) {
                (0, s.showToast)(
                  (0, s.createToast)(
                    h.intl.string(h.t.epyCur),
                    s.ToastType.FAILURE,
                  ),
                );
              } finally {
                R(!1);
              }
            }
          }, [C, j, g, v, B, O, b, k]);
        return (a.useEffect(() => {
          if (null != j)
            f.default.track(T.rMx.OPEN_MODAL, {
              type: m.Cl,
              guild_id: C,
              other_user_id: j.id,
            });
        }, []),
        a.useEffect(() => {
          (null == j || null == C) && v();
        }, [C, j, v]),
        null == j || null == C)
          ? null
          : (0, n.jsxs)(s.ModalRoot, {
              transitionState: p,
              "aria-labelledby": I,
              children: [
                (0, n.jsxs)(s.ModalHeader, {
                  className: _.header,
                  separator: !1,
                  children: [
                    (0, n.jsx)(s.Heading, {
                      id: I,
                      variant: "heading-lg/semibold",
                      children: h.intl.format(h.t.OhsOy8, {
                        user: x.ZP.getName(C, null, j),
                      }),
                    }),
                    (0, n.jsx)(s.Clickable, {
                      onClick: v,
                      className: _.closeButton,
                      "aria-label": h.intl.string(h.t.cpT0Cg),
                      children: (0, n.jsx)(s.XSmallIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: _.closeIcon,
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)(s.ModalContent, {
                  className: _.contentContainer,
                  children: [
                    (0, n.jsx)(s.Text, {
                      variant: "text-md/normal",
                      color: "interactive-normal",
                      children: h.intl.format(h.t.Ns83GR, {
                        helpdeskArticle: m.cu,
                      }),
                    }),
                    (0, n.jsx)(s.Text, {
                      className: _.selectorHeader,
                      variant: "text-xs/semibold",
                      color: "interactive-normal",
                      children: h.intl.string(h.t["9XsExs"]),
                    }),
                    (0, n.jsx)(s.ButtonGroup, {
                      buttons: N.map((t) =>
                        (function (t, e, l) {
                          let { value: a, label: o } = t;
                          return {
                            content: (0, n.jsx)(s.Text, {
                              variant: "text-xs/normal",
                              className: e
                                ? _.selectorTextSelected
                                : _.selectorText,
                              children: o,
                            }),
                            className: e
                              ? _.selectorButtonSelected
                              : _.selectorButton,
                            onClick: () => l(a),
                          };
                        })(t, t.value === B, D),
                      ),
                    }),
                    (0, n.jsx)(s.Text, {
                      className: _.selectorHeader,
                      variant: "text-xs/semibold",
                      color: "interactive-normal",
                      children: h.intl.string(h.t.ewHW19),
                    }),
                    (0, n.jsx)(s.TextArea, {
                      value: O,
                      onChange: (t) => A(t),
                      placeholder: h.intl.string(h.t.GakiHx),
                      rows: 2,
                      maxLength: m.GN,
                    }),
                  ],
                }),
                (0, n.jsxs)(s.ModalFooter, {
                  children: [
                    (0, n.jsx)(s.Button, {
                      onClick: y,
                      color: s.Button.Colors.BRAND,
                      submitting: E,
                      children: h.intl.string(h.t.MlPTIi),
                    }),
                    (0, n.jsx)(s.Button, {
                      type: "button",
                      look: s.Button.Looks.LINK,
                      color: s.Button.Colors.PRIMARY,
                      onClick: v,
                      children: h.intl.string(h.t["ETE/oK"]),
                    }),
                  ],
                }),
              ],
            });
      }
    },
    880535: function (t, e, l) {
      t.exports = {
        header: "header_aa7dff",
        closeButton: "closeButton_aa7dff",
        closeIcon: "closeIcon_aa7dff",
        selectorHeader: "selectorHeader_aa7dff",
        selectorText: "selectorText_aa7dff",
        selectorTextSelected: "selectorTextSelected_aa7dff",
        selectorButton: "selectorButton_aa7dff",
        selectorButtonSelected:
          "selectorButtonSelected_aa7dff selectorButton_aa7dff",
        contentContainer: "contentContainer_aa7dff",
      };
    },
  },
]);
//# sourceMappingURL=06a2b83c14485d4033e2.js.map
