"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72238"],
  {
    573725(e, l, n) {
      n.d(l, { p: () => h });
      var t = n(627968),
        u = n(64700),
        a = n(503698),
        s = n.n(a),
        r = n(187322),
        o = n(504345),
        i = n(511274),
        c = n(985018),
        d = n(482188);
      function h(e) {
        let l,
          {
            className: n,
            inputClassName: a,
            disabled: h = !1,
            editable: g,
            inputRef: p,
            prefixElement: f,
            focusProps: m,
            name: b = "",
            type: v = "text",
            placeholder: x = "",
            maxLength: C = 999,
            value: F,
            defaultValue: I,
            minLength: k,
            error: T,
            defaultDirty: j = !1,
            ...y
          } = e,
          [L, S] = u.useState(j),
          V =
            ((l = u.useContext(o.cK)),
            u.useEffect(() => {
              l.setHasValue?.(
                (null != I && "" !== I) || (null != F && "" !== F),
              ),
                l.setIsFocused?.(!1);
            }, []),
            u.useEffect(() => {
              null != F && "" !== F && l.setHasValue?.(!0);
            }, [l, F]),
            l),
          H = u.useMemo(
            () =>
              null === T || "" === T
                ? null
                : null != T
                  ? T
                  : L
                    ? null != k && (F?.length ?? 0) < k
                      ? c.intl.formatToPlainString(c.t["62rk1K"], {
                          minLength: k,
                        })
                      : null != C && (F?.length ?? 0) > C
                        ? c.intl.formatToPlainString(c.t.ICT5S6, {
                            maxLength: C,
                          })
                        : null
                    : null,
            [T, L, k, C, F?.length],
          ),
          N = (null != T && "" !== T) || null != H;
        return (0, t.jsxs)("div", {
          className: s()(d.I6, n),
          children: [
            null != f && f,
            (0, t.jsx)(r.vN, {
              ...m,
              children: (0, t.jsx)("input", {
                name: b,
                className: s()(d.hF, a, { [d.z3]: N, [d.r9]: h, [d.LL]: g }),
                disabled: h,
                readOnly: !1 === g || void 0,
                type: v,
                placeholder: x,
                maxLength: C,
                minLength: k,
                value: F,
                defaultValue: I,
                ...y,
                "aria-labelledby": y["aria-labelledby"] ?? V.titleId,
                onChange: (e) => {
                  y.onChange?.(e.currentTarget.value, b),
                    S(!0),
                    V.setHasValue?.("" !== e.currentTarget.value);
                },
                onBlur: (e) => {
                  y.onBlur?.(e, b), V.setIsFocused?.(!1);
                },
                onFocus: (e) => {
                  y.onFocus?.(e, b), V.setIsFocused?.(!0);
                },
                ref: p,
              }),
            }),
            (0, t.jsx)(i.U, { error: H }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=72238.3689ace698ec3091.js.map
