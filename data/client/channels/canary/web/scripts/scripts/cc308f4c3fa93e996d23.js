"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94904"],
  {
    301107: function (e, n, t) {
      t.d(n, {
        W: function () {
          return c;
        },
      }),
        t(411104);
      var o = t(192379),
        i = t(250683),
        r = t(253135);
      function c(e) {
        let { fingerprintBase64: n, chunkSize: t, desiredLength: c } = e,
          l = o.useMemo(() => {
            if (null == n || "" === n) return null;
            let e = i.toByteArray(n),
              o = (0, r.Dq)(e, c, t);
            if (null == o) return null;
            let l = RegExp(".{1,".concat(t, "}"), "g"),
              s = o.match(l);
            return null == s ? null : Array.from(s);
          }, [t, n, c]);
        if (null != n && "" !== n && null == l)
          throw Error(
            "[useReadableSecureFramesCode] Failed to parse base 64 code.",
          );
        return l;
      }
    },
    785792: function (e, n, t) {
      t.d(n, {
        b: function () {
          return a;
        },
      });
      var o = t(200651),
        i = t(192379),
        r = t(120356),
        c = t.n(r),
        l = t(481060),
        s = t(797448);
      function a(e) {
        let { chunks: n, columns: t, className: r } = e,
          a = i.useMemo(() => ({ "--secure-frames-columns": t }), [t]);
        return null == n
          ? (0, o.jsx)("div", {
              className: s.loading,
              children: (0, o.jsx)(l.Spinner, {}),
            })
          : (0, o.jsx)("div", {
              style: a,
              className: c()(s.code, r),
              children: n.map((e, n) =>
                (0, o.jsx)(
                  "div",
                  {
                    className: c()(s.chunk, { [s.divider]: n > t - 1 }),
                    children: (0, o.jsx)(l.Text, {
                      className: s.codeText,
                      variant: "code",
                      color: "text-normal",
                      children: e,
                    }),
                  },
                  "".concat(e, "-").concat(n),
                ),
              ),
            });
      }
    },
    190054: function (e, n, t) {
      t.d(n, {
        H: function () {
          return u;
        },
      }),
        t(47120);
      var o = t(200651),
        i = t(192379),
        r = t(120356),
        c = t.n(r),
        l = t(481060),
        s = t(572004),
        a = t(388032),
        d = t(66050);
      function u(e) {
        let { chunks: n, className: t, onCopy: r, ...u } = e,
          h = i.useMemo(() => (null == n ? void 0 : n.join(" ")), [n]),
          [f, x] = i.useState(!1),
          m = i.useCallback(() => {
            x(!0), (0, s.JG)(h), null == r || r();
          }, [r, h]),
          p = f ? l.CircleCheckIcon : l.CopyIcon;
        return (0, o.jsx)(l.Clickable, {
          className: c()(d.container, t),
          onClick: m,
          children: (0, o.jsx)(l.Tooltip, {
            text: f ? a.intl.string(a.t["t5VZ8/"]) : a.intl.string(a.t.OpuAlJ),
            children: (e) =>
              (0, o.jsx)(p, {
                ...u,
                ...e,
                size: "xxs",
                color: f
                  ? l.tokens.colors.TEXT_POSITIVE
                  : l.tokens.colors.INTERACTIVE_NORMAL,
              }),
          }),
        });
      }
    },
    660250: function (e, n, t) {
      t.r(n);
      var o = t(200651),
        i = t(192379),
        r = t(442837),
        c = t(481060),
        l = t(959457),
        s = t(571826),
        a = t(630759),
        d = t(301107),
        u = t(785792),
        h = t(190054),
        f = t(245581),
        x = t(760373),
        m = t(388032),
        p = t(822466);
      n.default = function (e) {
        let { transitionState: n, streamKey: t, channelId: v } = e,
          _ = (0, r.e7)([l.Z], () => {
            var e;
            return null === (e = l.Z.getSecureFramesState(t)) || void 0 === e
              ? void 0
              : e.epochAuthenticator;
          }),
          j = (0, d.W)({
            fingerprintBase64: _,
            chunkSize: x.y6,
            desiredLength: x.YP,
          }),
          g = i.useCallback(() => {
            (0, s.ih)({ channelId: v });
          }, [v]);
        return (0, o.jsxs)(f.Z, {
          transitionState: n,
          title: m.intl.string(m.t.QogHlZ),
          subtitle: m.intl.string(m.t.qODBkZ),
          children: [
            (0, o.jsxs)("div", {
              className: p.verification,
              children: [
                (0, o.jsxs)("div", {
                  className: p.header,
                  children: [
                    (0, o.jsx)(c.Heading, {
                      variant: "text-sm/bold",
                      color: "header-primary",
                      children: m.intl.string(m.t.cgBTyM),
                    }),
                    null != j &&
                      (0, o.jsx)(h.H, {
                        className: p.copyIcon,
                        chunks: j,
                        color: c.tokens.colors.INTERACTIVE_NORMAL,
                        onCopy: g,
                      }),
                  ],
                }),
                (0, o.jsx)(u.b, {
                  className: p.code,
                  chunks: j,
                  columns: x.WK,
                }),
              ],
            }),
            (0, o.jsx)(c.Text, {
              className: p.footer,
              variant: "text-sm/normal",
              color: "text-muted",
              children: m.intl.format(m.t["H3+ktr"], {
                helpArticle: (0, a.uV)(),
              }),
            }),
          ],
        });
      };
    },
    245581: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var o = t(200651);
      t(192379);
      var i = t(481060),
        r = t(313201),
        c = t(822466);
      function l(e) {
        let { transitionState: n, title: t, subtitle: l, children: s } = e,
          a = (0, r.Dt)();
        return (0, o.jsxs)(i.ModalRoot, {
          transitionState: n,
          "aria-labelledby": a,
          children: [
            (0, o.jsx)("div", {
              className: c.shieldIconContainer,
              children: (0, o.jsx)("div", {
                className: c.shieldIcon,
                children: (0, o.jsx)(i.ShieldLockIcon, {
                  size: "custom",
                  width: 55,
                  height: 55,
                  color: i.tokens.colors.HEADER_SECONDARY,
                }),
              }),
            }),
            (0, o.jsxs)(i.ModalContent, {
              className: c.content,
              children: [
                (0, o.jsx)(i.Heading, {
                  className: c.title,
                  variant: "heading-lg/bold",
                  color: "header-primary",
                  children: t,
                }),
                (0, o.jsx)(i.Text, {
                  className: c.subtitle,
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: l,
                }),
                s,
              ],
            }),
          ],
        });
      }
    },
    797448: function (e, n, t) {
      e.exports = {
        code: "code_e9fe13",
        chunk: "chunk_e9fe13",
        divider: "divider_e9fe13",
        codeText: "codeText_e9fe13",
        loading: "loading_e9fe13",
      };
    },
    66050: function (e, n, t) {
      e.exports = { container: "container_a7c5d3" };
    },
    822466: function (e, n, t) {
      e.exports = {
        content: "content_efee60",
        title: "title_efee60",
        subtitle: "subtitle_efee60",
        shieldIconContainer: "shieldIconContainer_efee60",
        shieldIcon: "shieldIcon_efee60",
        verification: "verification_efee60",
        header: "header_efee60",
        copyIcon: "copyIcon_efee60",
        code: "code_efee60",
        footer: "footer_efee60",
        verifiedButton: "verifiedButton_efee60",
        codeStatus: "codeStatus_efee60",
        spinner: "spinner_efee60",
        helpMessage: "helpMessage_efee60",
      };
    },
  },
]);
//# sourceMappingURL=cc308f4c3fa93e996d23.js.map
