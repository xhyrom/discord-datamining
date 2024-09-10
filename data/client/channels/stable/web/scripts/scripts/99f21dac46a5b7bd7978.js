"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72920"],
  {
    91176: function (e, t, a) {
      var l = a(913527),
        s = a.n(l),
        o = a(749210);
      t.Z = {
        async setCommunicationDisabledDuration(e, t, a, l, n) {
          let r = null != a ? s()().add(a, "s").toISOString() : null;
          await o.Z.setCommunicationDisabledUntil({
            guildId: e,
            userId: t,
            communicationDisabledUntilTimestamp: r,
            duration: a,
            reason: l,
            location: n,
          });
        },
      };
    },
    109730: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return D;
          },
        }),
        a(47120);
      var l = a(735250),
        s = a(470079),
        o = a(442837),
        n = a(481060),
        r = a(91176),
        c = a(906732),
        i = a(313201),
        u = a(910693),
        d = a(594174),
        _ = a(626135),
        I = a(5192),
        C = a(590433),
        N = a(981631),
        f = a(689938),
        T = a(293579);
      function U(e) {
        return {
          value: e,
          get label() {
            var t;
            return null === (t = (0, C.L9)(e)) || void 0 === t
              ? void 0
              : t.toLocaleUpperCase();
          },
        };
      }
      let x = [
        U(C.UK.DURATION_60_SEC),
        U(C.UK.DURATION_5_MIN),
        U(C.UK.DURATION_10_MIN),
        U(C.UK.DURATION_1_HOUR),
        U(C.UK.DURATION_1_DAY),
        U(C.UK.DURATION_1_WEEK),
      ];
      function D(e) {
        var t, a;
        let {
            guildId: U,
            userId: D,
            anaylticsLocations: A,
            transitionState: O,
            onClose: S,
          } = e,
          M = (0, i.Dt)(),
          { analyticsLocations: E } = (0, c.ZP)(),
          m =
            null !==
              (a =
                null !== (t = null == A ? void 0 : A[0]) && void 0 !== t
                  ? t
                  : null == E
                    ? void 0
                    : E[0]) && void 0 !== a
              ? a
              : null,
          h = (0, o.e7)([d.default], () => d.default.getUser(D), [D]),
          [L, R] = s.useState(C.UK.DURATION_60_SEC),
          B = (0, u.sE)(U, { location: m, targetUserId: D }),
          [g, v] = s.useState(""),
          [p, b] = s.useState(!1),
          j = s.useCallback(async () => {
            if (null != h) {
              b(!0);
              try {
                await r.Z.setCommunicationDisabledDuration(U, D, L, g, m),
                  B(u.jQ.TIMEOUT),
                  (0, n.showToast)(
                    (0, n.createToast)(
                      f.Z.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
                        user: I.ZP.getName(U, null, h),
                      }),
                      n.ToastType.SUCCESS,
                    ),
                  ),
                  S();
              } catch (e) {
                (0, n.showToast)(
                  (0, n.createToast)(
                    f.Z.Messages
                      .APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR,
                    n.ToastType.FAILURE,
                  ),
                );
              } finally {
                b(!1);
              }
            }
          }, [U, h, D, S, L, g, m, B]);
        return (s.useEffect(() => {
          if (null != h)
            _.default.track(N.rMx.OPEN_MODAL, {
              type: C.Cl,
              guild_id: U,
              other_user_id: h.id,
            });
        }, []),
        s.useEffect(() => {
          (null == h || null == U) && S();
        }, [U, h, S]),
        null == h || null == U)
          ? null
          : (0, l.jsxs)(n.ModalRoot, {
              transitionState: O,
              "aria-labelledby": M,
              children: [
                (0, l.jsxs)(n.ModalHeader, {
                  className: T.header,
                  separator: !1,
                  children: [
                    (0, l.jsx)(n.Heading, {
                      id: M,
                      variant: "heading-lg/semibold",
                      children:
                        f.Z.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format(
                          { user: I.ZP.getName(U, null, h) },
                        ),
                    }),
                    (0, l.jsx)(n.Clickable, {
                      onClick: S,
                      className: T.closeButton,
                      "aria-label": f.Z.Messages.CLOSE,
                      children: (0, l.jsx)(n.XSmallIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: T.closeIcon,
                      }),
                    }),
                  ],
                }),
                (0, l.jsxs)(n.ModalContent, {
                  className: T.contentContainer,
                  children: [
                    (0, l.jsx)(n.Text, {
                      variant: "text-md/normal",
                      color: "interactive-normal",
                      children:
                        f.Z.Messages.DISABLE_GUILD_COMMUNICATION_BODY_HEADER.format(
                          { helpdeskArticle: C.cu },
                        ),
                    }),
                    (0, l.jsx)(n.Text, {
                      className: T.selectorHeader,
                      variant: "text-xs/semibold",
                      color: "interactive-normal",
                      children:
                        f.Z.Messages.GUILD_COMMUNICATION_DISABLED_DURATION,
                    }),
                    (0, l.jsx)(n.ButtonGroup, {
                      buttons: x.map((e) =>
                        (function (e, t, a) {
                          let { value: s, label: o } = e;
                          return {
                            content: (0, l.jsx)(n.Text, {
                              variant: "text-xs/normal",
                              className: t
                                ? T.selectorTextSelected
                                : T.selectorText,
                              children: o,
                            }),
                            className: t
                              ? T.selectorButtonSelected
                              : T.selectorButton,
                            onClick: () => a(s),
                          };
                        })(e, e.value === L, R),
                      ),
                    }),
                    (0, l.jsx)(n.Text, {
                      className: T.selectorHeader,
                      variant: "text-xs/semibold",
                      color: "interactive-normal",
                      children:
                        f.Z.Messages.GUILD_COMMUNICATION_DISABLED_REASON,
                    }),
                    (0, l.jsx)(n.TextArea, {
                      value: g,
                      onChange: (e) => v(e),
                      placeholder:
                        f.Z.Messages
                          .GUILD_COMMUNICATION_DISABLED_REASON_PLACEHOLDER,
                      rows: 2,
                      maxLength: C.GN,
                    }),
                  ],
                }),
                (0, l.jsxs)(n.ModalFooter, {
                  children: [
                    (0, l.jsx)(n.Button, {
                      onClick: j,
                      color: n.Button.Colors.BRAND,
                      submitting: p,
                      children: f.Z.Messages.TIMEOUT_SUBMIT,
                    }),
                    (0, l.jsx)(n.Button, {
                      type: "button",
                      look: n.Button.Looks.LINK,
                      color: n.Button.Colors.PRIMARY,
                      onClick: S,
                      children: f.Z.Messages.CANCEL,
                    }),
                  ],
                }),
              ],
            });
      }
    },
    293579: function (e, t, a) {
      e.exports = {
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
//# sourceMappingURL=99f21dac46a5b7bd7978.js.map
