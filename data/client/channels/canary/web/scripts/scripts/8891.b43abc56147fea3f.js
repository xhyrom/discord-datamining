"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8891"],
  {
    260598(e, t, r) {
      r.d(t, { f: () => m });
      var a = r(627968),
        o = r(64700),
        l = r(503698),
        n = r.n(l),
        i = r(452027),
        d = r(862301),
        u = r(187322),
        s = r(15626),
        c = r(504345),
        g = r(823607),
        b = r(511274),
        p = r(189812),
        h = r(264451),
        x = r(429128);
      function m(e) {
        let {
            value: t,
            placeholder: r = "",
            autoFocus: l = !1,
            autosize: s = !1,
            minLength: c,
            maxLength: p,
            error: m,
            defaultDirty: f,
            showCharacterCount: v,
            showRemainingCharacterCount: w = !0,
            rows: j = 3,
            inputRef: z,
            ...C
          } = e,
          { fieldProps: V, props: M } = (0, i.n)(C),
          { disabled: P } = V,
          A = (0, b.Y)({
            validateOn: "change",
            error: m,
            value: t,
            minLength: c,
            maxLength: p,
            defaultDirty: f,
          }),
          F = o.useMemo(() => {
            if (null == p) return 10;
            let e = `${p}`.length;
            return 7.23 * (e += `${p} / `.length) + 10;
          }, [p]),
          k = v
            ? (0, a.jsx)(g.n, {
                value: t,
                maxLength: w && null != p ? p : void 0,
              })
            : null;
        return (0, a.jsx)(i.D, {
          ...V,
          trailingAuxiliaryContent: k,
          errorMessage: A.hasError ? (A.errorMessage ?? void 0) : void 0,
          children: (0, a.jsx)(d.F, {
            validation: A,
            disabled: P,
            children: (0, a.jsx)(u.vN, {
              children: (0, a.jsx)(y, {
                autosize: s,
                className: n()(h.Tg, x.qD),
                style: { paddingRight: F },
                placeholder: r,
                value: t,
                autoFocus: l,
                minLength: c,
                maxLength: p,
                rows: j,
                disabled: P,
                "data-mana-component": "text-area",
                ...M,
                onChange: (e) => {
                  let { onChange: t } = M;
                  t?.(e.currentTarget.value), A.setShouldValidate(!0);
                },
                ref: z,
              }),
            }),
          }),
        });
      }
      function y(e) {
        let { "aria-labelledby": t, autosize: r, ...l } = e,
          n = (0, c.xW)(),
          i = o.useContext(s._),
          d = r ? p.d : "textarea";
        return (0, a.jsx)(d, {
          ...l,
          id: i?.controlId,
          "aria-labelledby": t ?? n.titleId,
          "aria-describedby": i?.describedById,
          "aria-errormessage": i?.errorMessageId,
          "aria-invalid": i?.errorMessageId != null,
        });
      }
    },
    189812(e, t, r) {
      let a;
      r.d(t, { d: () => s });
      var o = r(627968),
        l = r(64700),
        n = r(745262),
        i = r(187322);
      let d = `
  visibility:hidden;
  overflow:hidden;
  position:absolute;
  z-index:-1000;
  top:0;
  right:0;
`,
        u = [
          "letter-spacing",
          "line-height",
          "padding-top",
          "padding-bottom",
          "font-family",
          "font-weight",
          "font-size",
          "text-transform",
          "width",
          "padding-left",
          "padding-right",
          "border-width",
          "box-sizing",
        ],
        s = l.forwardRef(function (e, t) {
          let {
              style: r,
              autoFocus: a = !1,
              disabled: n = !1,
              autoCorrect: d = "off",
              ...u
            } = e,
            s = l.useRef(null),
            [g, b] = l.useState(() => c(s.current, u.rows, u.value));
          return (
            l.useLayoutEffect(() => {
              b(c(s.current, u.rows, u.value));
            }, [u.rows, u.value]),
            (0, o.jsx)(i.vN, {
              children: (0, o.jsx)("textarea", {
                ...u,
                ref: (e) => {
                  (s.current = e),
                    "function" == typeof t
                      ? t(s.current)
                      : null != t && (t.current = e);
                },
                style: { ...r, height: g },
                autoFocus: a,
                disabled: n,
                autoCorrect: d,
              }),
            })
          );
        });
      function c(e, t, r) {
        var o, l, i, s, c;
        let g, b, p, h, x, m;
        if (null == e) return;
        (r = r ?? e.value),
          null == a &&
            null != document.body &&
            ((a = document.createElement("textarea")),
            document.body.appendChild(a));
        let {
            paddingSize: y,
            borderSize: f,
            boxSizing: v,
            sizingStyle: w,
          } = ((o = e),
          (g = window.getComputedStyle(o)),
          (b = (0, n.G)(
            g.getPropertyValue("box-sizing"),
            g.getPropertyValue("-moz-box-sizing"),
            g.getPropertyValue("-webkit-box-sizing"),
          )),
          (p =
            parseFloat(g.getPropertyValue("padding-bottom")) +
            parseFloat(g.getPropertyValue("padding-top"))),
          (h =
            parseFloat(g.getPropertyValue("border-bottom-width")) +
            parseFloat(g.getPropertyValue("border-top-width"))),
          {
            sizingStyle: u
              .map((e) => `${e}:${g.getPropertyValue(e)}`)
              .join(";"),
            paddingSize: p,
            borderSize: h,
            boxSizing: b,
          }),
          { minHeight: j, maxHeight: z } =
            ((l = w),
            (i = y),
            (s = f),
            (c = v),
            null == a &&
              null != document.body &&
              ((a = document.createElement("textarea")),
              document.body.appendChild(a)),
            a.setAttribute("style", l + ";" + d),
            a.setAttribute("rows", "1"),
            (a.value = ""),
            (x = a.scrollHeight),
            a.setAttribute("rows", "15"),
            (a.value = ""),
            (m = a.scrollHeight),
            "border-box" === c
              ? ((x += s), (m += s))
              : "content-box" === c && ((x -= i), (m -= i)),
            { minHeight: x, maxHeight: m });
        a.setAttribute("style", w + ";" + d),
          (a.value = r),
          null != t
            ? a.setAttribute("rows", `${t}`)
            : a.removeAttribute("rows");
        let C = Math.ceil(a.scrollHeight + 1);
        return (
          "border-box" === v ? (C += f) : "content-box" === v && (C -= y),
          (C = Math.max(j, Math.min(C, z)))
        );
      }
    },
  },
]);
//# sourceMappingURL=8891.b43abc56147fea3f.js.map
