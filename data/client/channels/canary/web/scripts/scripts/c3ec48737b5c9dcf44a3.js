"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94904"],
  {
    301107: function (e, n, t) {
      t.d(n, {
        W: function () {
          return r;
        },
      }),
        t(411104);
      var o = t(470079),
        s = t(250683),
        c = t(253135);
      function r(e) {
        let { fingerprintBase64: n, chunkSize: t, desiredLength: r } = e,
          i = o.useMemo(() => {
            if (null == n || "" === n) return null;
            let e = s.toByteArray(n),
              o = (0, c.Dq)(e, r, t);
            if (null == o) return null;
            let i = RegExp(".{1,".concat(t, "}"), "g"),
              l = o.match(i);
            return null == l ? null : Array.from(l);
          }, [t, n, r]);
        if (null != n && "" !== n && null == i)
          throw Error(
            "[useReadableSecureFramesCode] Failed to parse base 64 code.",
          );
        return i;
      }
    },
    785792: function (e, n, t) {
      t.d(n, {
        b: function () {
          return a;
        },
      });
      var o = t(735250),
        s = t(470079),
        c = t(120356),
        r = t.n(c),
        i = t(481060),
        l = t(956731);
      function a(e) {
        let { chunks: n, columns: t, className: c } = e,
          a = s.useMemo(() => ({ "--secure-frames-columns": t }), [t]);
        return null == n
          ? (0, o.jsx)("div", {
              className: l.loading,
              children: (0, o.jsx)(i.Spinner, {}),
            })
          : (0, o.jsx)("div", {
              style: a,
              className: r()(l.code, c),
              children: n.map((e, n) =>
                (0, o.jsx)(
                  "div",
                  {
                    className: r()(l.chunk, { [l.divider]: n > t - 1 }),
                    children: (0, o.jsx)(i.Text, {
                      className: l.codeText,
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
      var o = t(735250),
        s = t(470079),
        c = t(120356),
        r = t.n(c),
        i = t(481060),
        l = t(572004),
        a = t(689938),
        d = t(606053);
      function u(e) {
        let { chunks: n, className: t, onCopy: c, ...u } = e,
          h = s.useMemo(() => (null == n ? void 0 : n.join(" ")), [n]),
          [f, x] = s.useState(!1),
          _ = s.useCallback(() => {
            x(!0), (0, l.JG)(h), null == c || c();
          }, [c, h]),
          m = f ? i.CircleCheckIcon : i.CopyIcon;
        return (0, o.jsx)(i.Clickable, {
          className: r()(d.container, t),
          onClick: _,
          children: (0, o.jsx)(i.Tooltip, {
            text: f ? a.Z.Messages.COPIED : a.Z.Messages.COPY,
            children: (e) =>
              (0, o.jsx)(m, {
                ...u,
                ...e,
                size: "xxs",
                color: f
                  ? i.tokens.colors.TEXT_POSITIVE
                  : i.tokens.colors.INTERACTIVE_NORMAL,
              }),
          }),
        });
      }
    },
    660250: function (e, n, t) {
      t.r(n);
      var o = t(735250),
        s = t(470079),
        c = t(442837),
        r = t(481060),
        i = t(959457),
        l = t(571826),
        a = t(630759),
        d = t(301107),
        u = t(785792),
        h = t(190054),
        f = t(245581),
        x = t(760373),
        _ = t(689938),
        m = t(722041);
      n.default = function (e) {
        let { transitionState: n, streamKey: t, channelId: E } = e,
          v = (0, c.e7)([i.Z], () => {
            var e;
            return null === (e = i.Z.getSecureFramesState(t)) || void 0 === e
              ? void 0
              : e.epochAuthenticator;
          }),
          p = (0, d.W)({
            fingerprintBase64: v,
            chunkSize: x.y6,
            desiredLength: x.YP,
          }),
          I = s.useCallback(() => {
            (0, l.ih)({ channelId: E });
          }, [E]);
        return (0, o.jsxs)(f.Z, {
          transitionState: n,
          title: _.Z.Messages.E2EE_STREAM_PRIVACY_CODE,
          subtitle: _.Z.Messages.E2EE_STREAM_VERIFICATION_SUBTITLE,
          children: [
            (0, o.jsxs)("div", {
              className: m.verification,
              children: [
                (0, o.jsxs)("div", {
                  className: m.header,
                  children: [
                    (0, o.jsx)(r.Heading, {
                      variant: "text-sm/bold",
                      color: "header-primary",
                      children: _.Z.Messages.E2EE_PRIVACY_CODE,
                    }),
                    null != p &&
                      (0, o.jsx)(h.H, {
                        className: m.copyIcon,
                        chunks: p,
                        color: r.tokens.colors.INTERACTIVE_NORMAL,
                        onCopy: I,
                      }),
                  ],
                }),
                (0, o.jsx)(u.b, {
                  className: m.code,
                  chunks: p,
                  columns: x.WK,
                }),
              ],
            }),
            (0, o.jsx)(r.Text, {
              className: m.footer,
              variant: "text-sm/normal",
              color: "text-muted",
              children:
                _.Z.Messages.E2EE_STREAM_VERIFICATION_FOOTER_TEXT.format({
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
          return i;
        },
      });
      var o = t(735250);
      t(470079);
      var s = t(481060),
        c = t(313201),
        r = t(722041);
      function i(e) {
        let { transitionState: n, title: t, subtitle: i, children: l } = e,
          a = (0, c.Dt)();
        return (0, o.jsxs)(s.ModalRoot, {
          transitionState: n,
          "aria-labelledby": a,
          children: [
            (0, o.jsx)("div", {
              className: r.shieldIconContainer,
              children: (0, o.jsx)("div", {
                className: r.shieldIcon,
                children: (0, o.jsx)(s.ShieldLockIcon, {
                  size: "custom",
                  width: 55,
                  height: 55,
                  color: s.tokens.colors.HEADER_SECONDARY,
                }),
              }),
            }),
            (0, o.jsxs)(s.ModalContent, {
              className: r.content,
              children: [
                (0, o.jsx)(s.Heading, {
                  className: r.title,
                  variant: "heading-lg/bold",
                  color: "header-primary",
                  children: t,
                }),
                (0, o.jsx)(s.Text, {
                  className: r.subtitle,
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: i,
                }),
                l,
              ],
            }),
          ],
        });
      }
    },
    956731: function (e, n, t) {
      e.exports = {
        code: "code_e9fe13",
        chunk: "chunk_e9fe13",
        divider: "divider_e9fe13",
        codeText: "codeText_e9fe13",
        loading: "loading_e9fe13",
      };
    },
    606053: function (e, n, t) {
      e.exports = { container: "container_a7c5d3" };
    },
    722041: function (e, n, t) {
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
//# sourceMappingURL=c3ec48737b5c9dcf44a3.js.map
