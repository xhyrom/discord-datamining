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
        u = n(388032),
        c = n(389142);
      function x(e) {
        let {
            transitionState: t,
            onClose: n,
            sku: x,
            onSelect: b,
            currentGuildId: m,
          } = e,
          [h, p] = s.useState(),
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
          g && p(m);
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
          className: c.modal,
          children: [
            (0, l.jsx)(d.t, { onClose: n }),
            (0, l.jsxs)(i.ModalContent, {
              className: c.content,
              children: [
                (0, l.jsx)(i.Text, {
                  variant: "text-sm/medium",
                  className: c.breadCrumb,
                  children: u.intl.string(u.t["xgtI/P"]),
                }),
                (0, l.jsxs)("div", {
                  className: c.selectionBody,
                  children: [
                    (0, l.jsx)(i.Text, {
                      variant: "text-md/medium",
                      children: u.intl.string(u.t.rAXXxM),
                    }),
                    (0, l.jsx)(i.Text, {
                      variant: "eyebrow",
                      children: u.intl.string(u.t["5qyruL"]),
                    }),
                    j
                      ? (0, l.jsx)(i.Spinner, {
                          type: i.Spinner.Type.PULSING_ELLIPSIS,
                        })
                      : S.length > 0
                        ? (0, l.jsx)(i.SearchableSelect, {
                            options: S,
                            value: h,
                            onChange: p,
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
                                      children: u.intl.string(u.t.RjtuAA),
                                    }),
                                ],
                              });
                            },
                          })
                        : (0, l.jsx)(i.HelpMessage, {
                            messageType: i.HelpMessageTypes.WARNING,
                            children: (0, l.jsx)(i.Text, {
                              variant: "text-sm/normal",
                              children: u.intl.string(u.t.M2TbbG),
                            }),
                          }),
                  ],
                }),
              ],
            }),
            (0, l.jsxs)(i.ModalFooter, {
              className: c.footer,
              children: [
                (0, l.jsx)(i.Button, {
                  look: i.Button.Looks.BLANK,
                  size: i.Button.Sizes.MIN,
                  className: c.closeBtn,
                  onClick: n,
                  children: u.intl.string(u.t.cpT0Cg),
                }),
                (0, l.jsx)(i.Button, {
                  size: i.Button.Sizes.SMALL,
                  disabled: null == h,
                  onClick: function () {
                    null != h && (b(h), n());
                  },
                  children: u.intl.string(u.t["cY+Ooa"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    389142: function (e, t, n) {
      e.exports = {
        modal: "modal_b4f08b",
        content: "content_b4f08b",
        breadCrumb: "breadCrumb_b4f08b",
        selectionBody: "selectionBody_b4f08b",
        footer: "footer_b4f08b",
        closeBtn: "closeBtn_b4f08b",
      };
    },
  },
]);
//# sourceMappingURL=9430a9a7845b370a7654.js.map
