"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94566"],
  {
    965072: function (t, e, s) {
      s.r(e),
        s.d(e, {
          default: function () {
            return h;
          },
        }),
        s(47120);
      var a = s(200651),
        n = s(192379),
        l = s(990547),
        o = s(481060),
        r = s(479531),
        i = s(213609),
        d = s(388032),
        u = s(720765),
        c = s(800010);
      function h(t) {
        let {
            transitionState: e,
            onFormSubmit: s,
            onResend: h,
            onSuccess: m,
            onClose: p,
            headerText: x,
            confirmButtonText: f,
            confirmButtonColor: g,
            impressionName: b,
          } = t,
          [y, j] = n.useState(!1),
          [C, T] = n.useState(""),
          [B, M] = n.useState(!1),
          [S, I] = n.useState(null),
          k = n.useRef(null);
        (0, i.Z)({ type: l.ImpressionTypes.MODAL, name: b });
        let w = async (t) => {
            t.preventDefault(), I(null), j(!0);
            try {
              let t = await s(C);
              null != m && m(t), p();
            } catch (t) {
              I(new r.Z(t).getAnyErrorMessage());
            } finally {
              j(!1);
            }
          },
          N = async () => {
            if (!B) {
              M(!0);
              try {
                await h(),
                  (0, o.showToast)(
                    (0, o.createToast)(
                      d.intl.string(d.t["84yeo6"]),
                      o.ToastType.SUCCESS,
                    ),
                  );
              } catch (e) {
                let t = new r.Z(e).getAnyErrorMessage();
                null != t &&
                  (0, o.showToast)((0, o.createToast)(t, o.ToastType.FAILURE));
              } finally {
                M(!1);
              }
            }
          };
        return (0, a.jsx)(o.ModalRoot, {
          transitionState: e,
          children: (0, a.jsxs)("form", {
            onSubmit: w,
            children: [
              (0, a.jsx)("img", { alt: "", className: u.headerImage, src: c }),
              (0, a.jsxs)(o.ModalHeader, {
                separator: !1,
                className: u.header,
                children: [
                  (0, a.jsx)(o.Heading, {
                    variant: "heading-lg/semibold",
                    className: u.title,
                    children: x,
                  }),
                  (0, a.jsx)(o.Text, {
                    color: "header-secondary",
                    variant: "text-md/normal",
                    className: u.subtitle,
                    children: d.intl.string(d.t.SZJow8),
                  }),
                  (0, a.jsx)(o.ModalCloseButton, {
                    onClick: p,
                    className: u.modalCloseButton,
                  }),
                ],
              }),
              (0, a.jsxs)(o.ModalContent, {
                children: [
                  (0, a.jsx)(o.FormItem, {
                    title: d.intl.string(d.t["8mZX6O"]),
                    error: S,
                    children: (0, a.jsx)(o.TextInput, {
                      value: C,
                      onChange: T,
                      inputRef: k,
                    }),
                  }),
                  (0, a.jsx)(o.Text, {
                    className: u.help,
                    variant: "text-sm/normal",
                    children: d.intl.format(d.t.P0sak5, { onResend: N }),
                  }),
                ],
              }),
              (0, a.jsxs)(o.ModalFooter, {
                children: [
                  (0, a.jsx)(o.Button, {
                    type: "submit",
                    color: null != g ? g : o.Button.Colors.BRAND,
                    size: o.Button.Sizes.MEDIUM,
                    submitting: y,
                    children: f,
                  }),
                  (0, a.jsx)(o.Button, {
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.PRIMARY,
                    onClick: p,
                    children: d.intl.string(d.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    720765: function (t, e, s) {
      t.exports = {
        header: "header_bf03d5",
        headerImage: "headerImage_bf03d5",
        title: "title_bf03d5",
        subtitle: "subtitle_bf03d5",
        modalCloseButton: "modalCloseButton_bf03d5",
        help: "help_bf03d5",
      };
    },
  },
]);
//# sourceMappingURL=4b9a06929c7a06e88ed6.js.map
