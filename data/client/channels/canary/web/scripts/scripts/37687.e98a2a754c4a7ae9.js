"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37687"],
  {
    109802(t, e, s) {
      s.d(e, { e: () => C, q: () => R });
      var n = s(627968),
        i = s(64700),
        l = s(503698),
        a = s.n(l),
        r = s(862482),
        c = s(504345),
        o = s(187322),
        p = s(235986),
        u = s(821589),
        d = s(985018),
        h = s(797525);
      let R = { DEFAULT: "default", SUCCESS: "success", ERROR: "error" };
      class C extends i.PureComponent {
        inputRef = i.createRef();
        containerRef = i.createRef();
        static contextType = c.cK;
        static defaultProps = {
          supportsCopy: !0,
          buttonColor: r.XD.PRIMARY,
          buttonLook: r.pR.FILLED,
          mode: R.DEFAULT,
        };
        static Modes = R;
        static ButtonColors = r.XD;
        static ButtonLooks = r.pR;
        select() {
          this.inputRef.current?.select();
        }
        renderInput(t) {
          let {
              value: e,
              mode: s,
              autoFocus: i,
              spellCheck: l,
              inputClassName: r,
              placeholder: c,
            } = this.props,
            o = this.context?.titleId;
          return (0, n.jsx)("input", {
            className: a()((0, u.t)(h, "input", s), r, { [h.inputHidden]: t }),
            ref: this.inputRef,
            type: "text",
            value: e,
            onClick: this.handleInputClick,
            readOnly: !0,
            "aria-labelledby": o,
            autoFocus: i,
            spellCheck: l,
            placeholder: c,
          });
        }
        render() {
          let t,
            {
              text: e = d.intl.string(d.t.OpuAlK),
              mode: s,
              hideMessage: i,
              className: l,
              buttonLook: c,
              supportsCopy: C,
              disabled: k,
            } = this.props,
            f = null != i;
          switch (s) {
            case R.SUCCESS:
              t = r.XD.GREEN;
              break;
            case R.ERROR:
              t = r.XD.RED;
              break;
            default:
              t = this.props.buttonColor;
          }
          return (0, n.jsx)(o.vN, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, n.jsx)("div", {
              className: a()((0, u.t)(h, "copyInput", s), l),
              ref: this.containerRef,
              "data-disabled": k,
              children: (0, n.jsxs)(p.A, {
                className: h.layout,
                children: [
                  (0, n.jsxs)(p.A, {
                    className: h.inputWrapper,
                    children: [
                      this.renderInput(f),
                      f
                        ? (0, n.jsx)("div", {
                            className: h.hiddenMessage,
                            children: i,
                          })
                        : null,
                    ],
                  }),
                  C
                    ? (0, n.jsx)(p.A, {
                        shrink: 1,
                        grow: 0,
                        style: { margin: 0 },
                        children: (0, n.jsx)(r.$n, {
                          "data-migration-pending": !0,
                          className: h.button,
                          onClick: this.handleButtonClick,
                          size: r.lO.MIN,
                          color: t,
                          look: c,
                          disabled: k,
                          children: e,
                        }),
                      })
                    : null,
                ],
              }),
            }),
          });
        }
        handleButtonClick = () => {
          this.select();
          let { onCopy: t, value: e } = this.props;
          t(e);
        };
        handleInputClick = () => {
          this.select();
        };
      }
    },
  },
]);
//# sourceMappingURL=37687.e98a2a754c4a7ae9.js.map
