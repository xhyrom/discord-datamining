"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43889"],
  {
    279875: function (e, t, n) {
      n.r(t),
        n.d(t, {
          GuildSubscriptionSelectionModal: function () {
            return x;
          },
        }),
        n(47120),
        n(733860),
        n(653041);
      var l = n(200651),
        s = n(192379),
        i = n(481060),
        r = n(565138),
        o = n(430824),
        a = n(270144),
        d = n(689011),
        c = n(388032),
        u = n(979643);
      function x(e) {
        let {
            transitionState: t,
            onClose: n,
            sku: x,
            onSelect: b,
            currentGuildId: m,
          } = e,
          [p, h] = s.useState(),
          { guilds: f, isFetching: j } = (0, a.CR)(x.applicationId, x.id, !0),
          g = s.useMemo(() => {
            if (!j && null != m)
              return (
                f.findIndex((e) => {
                  let { id: t } = e;
                  return t === m;
                }) >= 0
              );
          }, [m, f, j]);
        s.useLayoutEffect(() => {
          g && h(m);
        }, [m, g]);
        let S = s.useMemo(() => {
          let e = [];
          for (let t of f) {
            let n = { value: t.id, label: t.name };
            g && t.id === m ? e.unshift(n) : e.push(n);
          }
          return e;
        }, [m, f, g]);
        return (0, l.jsxs)(i.ModalRoot, {
          transitionState: t,
          size: i.ModalSize.SMALL,
          className: u.modal,
          children: [
            (0, l.jsx)(d.t, { onClose: n }),
            (0, l.jsxs)(i.ModalContent, {
              className: u.content,
              children: [
                (0, l.jsx)(i.Text, {
                  variant: "text-sm/medium",
                  className: u.breadCrumb,
                  children: c.intl.string(c.t["xgtI/P"]),
                }),
                (0, l.jsxs)("div", {
                  className: u.selectionBody,
                  children: [
                    (0, l.jsx)(i.Text, {
                      variant: "text-md/medium",
                      children: c.intl.string(c.t.rAXXxM),
                    }),
                    (0, l.jsx)(i.Text, {
                      variant: "eyebrow",
                      children: c.intl.string(c.t["5qyruL"]),
                    }),
                    j
                      ? (0, l.jsx)(i.Spinner, {
                          type: i.Spinner.Type.PULSING_ELLIPSIS,
                          className: u.spinner,
                        })
                      : S.length > 0
                        ? (0, l.jsx)(i.SearchableSelect, {
                            options: S,
                            value: p,
                            onChange: h,
                            renderOptionPrefix: (e) => {
                              let t = null == e ? void 0 : e.value,
                                n = null != t ? o.Z.getGuild(t) : null;
                              return null == n
                                ? null
                                : (0, l.jsx)(r.Z, {
                                    guild: n,
                                    size: r.Z.Sizes.MINI,
                                  });
                            },
                            renderOptionLabel: (e) => {
                              let { label: t, value: n } = e;
                              return (0, l.jsxs)("div", {
                                children: [
                                  (0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: t,
                                  }),
                                  n === m &&
                                    (0, l.jsx)(i.Text, {
                                      variant: "text-xs/normal",
                                      color: "header-secondary",
                                      children: c.intl.string(c.t.RjtuAA),
                                    }),
                                ],
                              });
                            },
                          })
                        : (0, l.jsx)(i.HelpMessage, {
                            messageType: i.HelpMessageTypes.WARNING,
                            children: (0, l.jsx)(i.Text, {
                              variant: "text-sm/normal",
                              children: c.intl.string(c.t.M2TbbG),
                            }),
                          }),
                  ],
                }),
              ],
            }),
            (0, l.jsxs)(i.ModalFooter, {
              className: u.footer,
              children: [
                (0, l.jsx)(i.Button, {
                  look: i.Button.Looks.BLANK,
                  size: i.Button.Sizes.MIN,
                  className: u.closeBtn,
                  onClick: n,
                  children: c.intl.string(c.t.cpT0Cg),
                }),
                (0, l.jsx)(i.Button, {
                  size: i.Button.Sizes.SMALL,
                  disabled: null == p,
                  onClick: function () {
                    null != p && (b(p), n());
                  },
                  children: c.intl.string(c.t["cY+Ooa"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    979643: function (e, t, n) {
      e.exports = {
        modal: "modal_b4f08b",
        content: "content_b4f08b",
        breadCrumb: "breadCrumb_b4f08b",
        selectionBody: "selectionBody_b4f08b",
        footer: "footer_b4f08b",
        closeBtn: "closeBtn_b4f08b",
        spinner: "spinner_b4f08b",
      };
    },
  },
]);
//# sourceMappingURL=1234dffe07312a68025f.js.map
