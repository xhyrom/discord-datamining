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
            return U;
          },
        }),
        l(47120);
      var n = l(200651),
        a = l(192379),
        o = l(442837),
        s = l(481060),
        r = l(91176),
        i = l(493773),
        c = l(906732),
        u = l(313201),
        d = l(910693),
        f = l(594174),
        x = l(626135),
        m = l(5192),
        T = l(590433),
        h = l(981631),
        _ = l(388032),
        C = l(903066);
      function N(t) {
        return {
          value: t,
          get label() {
            var e;
            return null === (e = (0, T.L9)(t)) || void 0 === e
              ? void 0
              : e.toLocaleUpperCase();
          },
        };
      }
      let g = [
        N(T.UK.DURATION_60_SEC),
        N(T.UK.DURATION_5_MIN),
        N(T.UK.DURATION_10_MIN),
        N(T.UK.DURATION_1_HOUR),
        N(T.UK.DURATION_1_DAY),
        N(T.UK.DURATION_1_WEEK),
      ];
      function U(t) {
        var e, l;
        let {
            guildId: N,
            userId: U,
            anaylticsLocations: p,
            transitionState: v,
            onClose: I,
          } = t,
          S = (0, u.Dt)(),
          { analyticsLocations: b } = (0, c.ZP)(),
          j =
            null !==
              (l =
                null !== (e = null == p ? void 0 : p[0]) && void 0 !== e
                  ? e
                  : null == b
                    ? void 0
                    : b[0]) && void 0 !== l
              ? l
              : null,
          B = (0, o.e7)([f.default], () => f.default.getUser(U), [U]),
          [D, k] = a.useState(T.UK.DURATION_60_SEC),
          O = (0, d.sE)(N, { location: j, targetUserId: U }),
          [A, R] = a.useState(""),
          [E, y] = a.useState(!1),
          M = a.useCallback(async () => {
            if (null != B) {
              y(!0);
              try {
                await r.Z.setCommunicationDisabledDuration(N, U, D, A, j),
                  O(d.jQ.TIMEOUT),
                  (0, s.showToast)(
                    (0, s.createToast)(
                      _.intl.formatToPlainString(_.t.O9C3Nj, {
                        user: m.ZP.getName(N, null, B),
                      }),
                      s.ToastType.SUCCESS,
                    ),
                  ),
                  I();
              } catch (t) {
                (0, s.showToast)(
                  (0, s.createToast)(
                    _.intl.string(_.t.epyCur),
                    s.ToastType.FAILURE,
                  ),
                );
              } finally {
                y(!1);
              }
            }
          }, [N, B, U, I, D, A, j, O]);
        return ((0, i.Z)(() => {
          if (null != B)
            x.default.track(h.rMx.OPEN_MODAL, {
              type: T.Cl,
              guild_id: N,
              other_user_id: B.id,
            });
        }),
        a.useEffect(() => {
          (null == B || null == N) && I();
        }, [N, B, I]),
        null == B || null == N)
          ? null
          : (0, n.jsxs)(s.ModalRoot, {
              transitionState: v,
              "aria-labelledby": S,
              children: [
                (0, n.jsxs)(s.ModalHeader, {
                  className: C.header,
                  separator: !1,
                  children: [
                    (0, n.jsx)(s.Heading, {
                      id: S,
                      variant: "heading-lg/semibold",
                      children: _.intl.format(_.t.OhsOy8, {
                        user: m.ZP.getName(N, null, B),
                      }),
                    }),
                    (0, n.jsx)(s.Clickable, {
                      onClick: I,
                      className: C.closeButton,
                      "aria-label": _.intl.string(_.t.cpT0Cg),
                      children: (0, n.jsx)(s.XSmallIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: C.closeIcon,
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)(s.ModalContent, {
                  className: C.contentContainer,
                  children: [
                    (0, n.jsx)(s.Text, {
                      variant: "text-md/normal",
                      color: "interactive-normal",
                      children: _.intl.format(_.t.Ns83GR, {
                        helpdeskArticle: T.cu,
                      }),
                    }),
                    (0, n.jsx)(s.Text, {
                      className: C.selectorHeader,
                      variant: "text-xs/semibold",
                      color: "interactive-normal",
                      children: _.intl.string(_.t["9XsExs"]),
                    }),
                    (0, n.jsx)(s.ButtonGroup, {
                      buttons: g.map((t) =>
                        (function (t, e, l) {
                          let { value: a, label: o } = t;
                          return {
                            content: (0, n.jsx)(s.Text, {
                              variant: "text-xs/normal",
                              className: e
                                ? C.selectorTextSelected
                                : C.selectorText,
                              children: o,
                            }),
                            className: e
                              ? C.selectorButtonSelected
                              : C.selectorButton,
                            onClick: () => l(a),
                          };
                        })(t, t.value === D, k),
                      ),
                    }),
                    (0, n.jsx)(s.Text, {
                      className: C.selectorHeader,
                      variant: "text-xs/semibold",
                      color: "interactive-normal",
                      children: _.intl.string(_.t.ewHW19),
                    }),
                    (0, n.jsx)(s.TextArea, {
                      value: A,
                      onChange: (t) => R(t),
                      placeholder: _.intl.string(_.t.GakiHx),
                      rows: 2,
                      maxLength: T.GN,
                    }),
                  ],
                }),
                (0, n.jsxs)(s.ModalFooter, {
                  children: [
                    (0, n.jsx)(s.Button, {
                      onClick: M,
                      color: s.Button.Colors.BRAND,
                      submitting: E,
                      children: _.intl.string(_.t.MlPTIi),
                    }),
                    (0, n.jsx)(s.Button, {
                      type: "button",
                      look: s.Button.Looks.LINK,
                      color: s.Button.Colors.PRIMARY,
                      onClick: I,
                      children: _.intl.string(_.t["ETE/oK"]),
                    }),
                  ],
                }),
              ],
            });
      }
    },
    903066: function (t, e, l) {
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
//# sourceMappingURL=eec061d588386b2221c9.js.map
