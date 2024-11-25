"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54934"],
  {
    823985: function (t, e, n) {
      n.d(e, {
        j: function () {
          return i;
        },
        r: function () {
          return r;
        },
      });
      var o = n(981631);
      function i(t, e) {
        return (
          e === o.ABu.MASTODON &&
            /^@?[a-z0-9_]+([.-]+[a-z0-9_]+)*@[^@]+\.[^.@]{2,}$/i.test(t),
          /^.+\.[^.@]{2,}$/.test(t)
        );
      }
      function r(t) {
        return t === o.ABu.MASTODON
          ? "@clyde@mastodon.social"
          : t === o.ABu.BLUESKY
            ? "clyde.bsky.social"
            : "clyde@example.com";
      }
    },
    701460: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return h;
          },
        }),
        n(47120),
        n(411104);
      var o = n(200651),
        i = n(192379),
        r = n(481060),
        l = n(726542),
        s = n(600164),
        a = n(823985),
        c = n(202120),
        d = n(388032),
        u = n(582810);
      function h(t) {
        var e, n;
        let {
            onClose: h,
            transitionState: m,
            location: f,
            successRedirect: x,
            platformType: p,
          } = t,
          [j, B] = i.useState(""),
          [g, _] = i.useState(null),
          [b, v] = i.useState(!1),
          C =
            null !==
              (n =
                null === (e = l.Z.get(p)) || void 0 === e ? void 0 : e.name) &&
            void 0 !== n
              ? n
              : d.intl.string(d.t["bU/GZm"]),
          N = async () => {
            v(!0), _(null);
            try {
              let t = await (0, c.H)(p, {
                location: f,
                successRedirect: x,
                handle: j,
              });
              if (null == t) throw Error();
              h();
            } catch {
              _(d.intl.string(d.t["7wbPNj"])), v(!1);
            }
          },
          S = (0, a.r)(p),
          T = (0, a.j)(j, p);
        return (0, o.jsxs)(r.ModalRoot, {
          transitionState: m,
          className: u.__invalid_modal,
          children: [
            (0, o.jsxs)(r.ModalHeader, {
              direction: s.Z.Direction.VERTICAL,
              className: u.header,
              separator: !1,
              children: [
                (0, o.jsx)(r.Heading, {
                  variant: "heading-xl/semibold",
                  children: d.intl.formatToPlainString(d.t.ImMhq6, {
                    serviceName: C,
                  }),
                }),
                (0, o.jsx)(r.ModalCloseButton, {
                  className: u.closeButton,
                  onClick: h,
                }),
              ],
            }),
            (0, o.jsxs)("form", {
              onSubmit: (t) => {
                t.preventDefault(), N();
              },
              children: [
                (0, o.jsxs)(r.ModalContent, {
                  className: u.content,
                  children: [
                    (0, o.jsx)(r.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      className: u.description,
                      children: d.intl.formatToPlainString(d.t["7TByKi"], {
                        serviceName: C,
                      }),
                    }),
                    (0, o.jsx)(r.FormItem, {
                      title: d.intl.string(d.t.tZ9QFR),
                      error: g,
                      children: (0, o.jsx)(r.TextInput, {
                        onChange: B,
                        placeholder: S,
                        value: j,
                        disabled: b,
                        autoFocus: !0,
                      }),
                    }),
                  ],
                }),
                (0, o.jsxs)(r.ModalFooter, {
                  className: u.footer,
                  children: [
                    (0, o.jsx)(r.Button, {
                      type: "submit",
                      submitting: b,
                      disabled: !T,
                      children: d.intl.string(d.t.PDTjLC),
                    }),
                    (0, o.jsx)(r.Button, {
                      look: r.Button.Looks.LINK,
                      color: r.Button.Colors.PRIMARY,
                      onClick: h,
                      children: d.intl.string(d.t["ETE/oK"]),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    582810: function (t, e, n) {
      t.exports = {
        header: "header_e53007",
        closeButton: "closeButton_e53007",
        description: "description_e53007",
        content: "content_e53007",
        footer: "footer_e53007",
      };
    },
  },
]);
//# sourceMappingURL=e406a1a0b944d6dd7e23.js.map
