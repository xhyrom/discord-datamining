"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["15669"],
  {
    776226: function (t) {
      t.exports = "/assets/c824173d0d5f34be9341.svg";
    },
    878799: function (t) {
      t.exports = "/assets/80f2c4e73f4aba89fc3c.svg";
    },
    742795: function (t) {
      t.exports = "/assets/c5cde26e05ae7f8c3ec8.svg";
    },
    200289: function (t) {
      t.exports = "/assets/105aec4628453ffe01be.svg";
    },
    225433: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var s = e(120356),
        l = e.n(s),
        o = e(481060),
        r = e(388032),
        a = e(343968);
      let c = Object.freeze({ DEFAULT: a.default, FILLED: a.filled });
      function u(t) {
        let {
          className: n,
          onClick: e,
          "aria-label": s,
          look: u = c.DEFAULT,
        } = t;
        return (0, i.jsx)(o.Clickable, {
          "aria-label": null != s ? s : r.intl.string(r.t.N86XcH),
          className: l()(a.button, u, n),
          onClick: e,
        });
      }
      u.Looks = c;
    },
    484614: function (t, n, e) {
      var i,
        s = e(200651),
        l = e(192379),
        o = e(120356),
        r = e.n(o),
        a = e(846519),
        c = e(481060),
        u = e(572004),
        d = e(388032),
        g = e(137900);
      function E(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      class h extends (i = l.PureComponent) {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let {
              isVertical: t,
              value: n,
              text: e,
              className: i,
              inputClassName: l,
            } = this.props,
            { mode: o } = this.state,
            a =
              o === c.CopyInput.Modes.SUCCESS
                ? d.intl.string(d.t["t5VZ8/"])
                : e;
          return t
            ? (0, s.jsxs)("div", {
                className: r()(i, o),
                children: [
                  (0, s.jsx)(c.TextInput, { value: n, inputClassName: l }),
                  (0, s.jsx)(c.Button, {
                    className: g.button,
                    onClick: this.handleCopy,
                    size: c.Button.Sizes.MIN,
                    color: this.getVerticalButtonColor(o),
                    look: c.Button.Looks.FILLED,
                    children: a,
                  }),
                ],
              })
            : (0, s.jsx)(c.CopyInput, {
                ...this.props,
                onCopy: this.handleCopy,
                mode: o,
                text: a,
              });
        }
        handleCopy() {
          let { onCopy: t, value: n, delay: e } = this.props,
            i = (0, u.JG)(n);
          this.setState({
            mode: i ? c.CopyInput.Modes.SUCCESS : c.CopyInput.Modes.ERROR,
          }),
            this._timeout.start(e, () =>
              this.setState({ mode: c.CopyInput.Modes.DEFAULT }),
            ),
            null == t || t();
        }
        getVerticalButtonColor(t) {
          switch (t) {
            case c.CopyInput.Modes.SUCCESS:
              return c.Button.Colors.GREEN;
            case c.CopyInput.Modes.ERROR:
              return c.Button.Colors.RED;
            default:
              return c.Button.Colors.BRAND;
          }
        }
        constructor(t) {
          super(t),
            E(this, "_timeout", void 0),
            (this.state = { mode: c.CopyInput.Modes.DEFAULT }),
            (this._timeout = new a.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      E(h, "defaultProps", { isVertical: !1, delay: 300 }), (n.Z = h);
    },
    852860: function (t, n, e) {
      e(47120);
      var i = e(200651),
        s = e(192379),
        l = e(100621),
        o = e(692547),
        r = e(481060),
        a = e(585483),
        c = e(981631),
        u = e(388032),
        d = e(544751);
      n.Z = function (t) {
        var n;
        let {
            message: e,
            errorMessage: g,
            submitting: E,
            onReset: h,
            onSave: f,
            onSaveText: m,
            onResetText: x,
            onSaveButtonColor: N,
            disabled: p,
            saveButtonTooltip: v,
          } = t,
          C = s.useRef(null),
          [{ spring: R }, j] = (0, r.useSpring)(() => ({ spring: 0 }));
        s.useEffect(() => {
          function t() {
            j({ spring: 1, config: l.config.gentle }),
              j({ spring: 0, config: l.config.gentle, delay: 1e3 });
          }
          return (
            a.S.subscribe(c.CkL.EMPHASIZE_NOTICE, t),
            () => {
              a.S.unsubscribe(c.CkL.EMPHASIZE_NOTICE, t);
            }
          );
        }, [j]);
        let I = R.to({
            range: [0, 1],
            output: [
              (0, r.useToken)(o.Z.colors.TEXT_NORMAL).hex(),
              (0, r.useToken)(o.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          }),
          L = R.to({
            range: [0, 1],
            output: [
              (0, r.useToken)(o.Z.colors.BACKGROUND_FLOATING).hex(),
              (0, r.useToken)(o.Z.colors.STATUS_DANGER).hex(),
            ],
          }),
          S = R.to({
            range: [0, 1],
            output: [
              (0, r.useToken)(o.Z.colors.TEXT_DANGER).hex(),
              (0, r.useToken)(o.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          });
        return (0, i.jsx)(l.animated.div, {
          className: d.container,
          style: { backgroundColor: L },
          children: (0, i.jsx)("div", {
            className: d.flexContainer,
            ref: C,
            children: (0, i.jsxs)(r.FocusRingScope, {
              containerRef: C,
              children: [
                (0, i.jsx)("div", {
                  className: d.shrinkingContainer,
                  children: (0, i.jsx)(l.animated.div, {
                    className: d.message,
                    style: { color: null != g ? S : I },
                    children:
                      null !== (n = null != g ? g : e) && void 0 !== n
                        ? n
                        : u.intl.string(u.t.GP7JLC),
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: d.actions,
                  children: [
                    null != h &&
                      (0, i.jsx)(r.Button, {
                        className: d.resetButton,
                        size: r.Button.Sizes.SMALL,
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.LINK,
                        onClick: h,
                        children: (0, i.jsx)(l.animated.span, {
                          style: { color: I },
                          children: null != x ? x : u.intl.string(u.t.yBZMsb),
                        }),
                      }),
                    null != f
                      ? (0, i.jsx)(r.Tooltip, {
                          text: v,
                          children: (t) =>
                            (0, i.jsx)(r.Button, {
                              size: r.Button.Sizes.SMALL,
                              color: null != N ? N : r.Button.Colors.GREEN,
                              submitting: E,
                              disabled: p,
                              onClick: f,
                              ...t,
                              children:
                                null != m ? m : u.intl.string(u.t.K344S0),
                            }),
                        })
                      : null,
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    416867: function (t, n, e) {
      e.d(n, {
        B: function () {
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var s = e(481060),
        l = e(313201),
        o = e(192635),
        r = e(388032),
        a = e(322683);
      function c(t) {
        let { transitionState: n, Icon: e, title: c, body: u, onClose: d } = t,
          g = (0, l.Dt)();
        return (0, i.jsxs)(s.ModalRoot, {
          className: a.container,
          transitionState: n,
          "aria-labelledby": g,
          children: [
            (0, i.jsxs)(s.ModalContent, {
              children: [
                (0, i.jsx)(o.Z, { Icon: e }),
                (0, i.jsx)(s.Spacer, { size: 24 }),
                (0, i.jsx)(s.Heading, {
                  id: g,
                  className: a.__invalid_title,
                  variant: "heading-xl/semibold",
                  children: c,
                }),
                (0, i.jsx)(s.Spacer, { size: 8 }),
                (0, i.jsx)(s.Text, {
                  className: a.body,
                  variant: "text-sm/normal",
                  children: u,
                }),
              ],
            }),
            (0, i.jsx)(s.Spacer, { size: 24 }),
            (0, i.jsx)(s.Button, {
              size: s.Button.Sizes.MEDIUM,
              grow: !1,
              onClick: d,
              children: r.intl.string(r.t["NX+WJC"]),
            }),
          ],
        });
      }
      function u(t) {
        (0, s.openModal)((n) => (0, i.jsx)(c, { ...n, ...t }));
      }
    },
    404203: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = e(200651),
        s = e(192379);
      let l = (t) => (n) => {
        null == n || n.stopPropagation(), t();
      };
      function o(t) {
        let { onClick: n, className: e, children: o } = t,
          r = s.useRef(null);
        return (0, i.jsx)("div", {
          onClick: n,
          ref: r,
          className: e,
          children: o({ areaRef: r, handleStopPropagation: l }),
        });
      }
    },
    696936: function (t, n, e) {
      e.d(n, {
        W: function () {
          return a;
        },
        Z: function () {
          return c;
        },
      });
      var i = e(200651);
      e(192379);
      var s = e(120356),
        l = e.n(s),
        o = e(481060),
        r = e(58700);
      let a = {
        RED: r.redMessageBlock,
        YELLOW: r.yellowMessageBlock,
        BROWN: r.brownMessageBlock,
      };
      function c(t) {
        let { color: n, icon: e, children: s, className: a } = t;
        return (0, i.jsx)(o.FormErrorBlock, {
          icon: (t) => (0, i.jsx)(e, { height: 20, width: 20, ...t }),
          iconClassName: r.messageBlockIcon,
          className: l()(n, a),
          children: s,
        });
      }
    },
    903773: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = e(200651);
      e(192379);
      var s = e(481060),
        l = e(696936);
      function o(t) {
        let { children: n, className: e, color: o = l.W.YELLOW } = t;
        return (0, i.jsx)(l.Z, {
          className: e,
          color: o,
          icon: s.CircleWarningIcon,
          children: n,
        });
      }
    },
    192635: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = e(200651);
      e(192379);
      var s = e(120356),
        l = e.n(s),
        o = e(430457),
        r = e(742795),
        a = e(200289);
      function c(t) {
        let { Icon: n, className: e } = t;
        return (0, i.jsx)("div", {
          className: l()(o.container, e),
          children: (0, i.jsxs)("div", {
            className: o.innerContainer,
            children: [
              (0, i.jsx)("img", { src: a, alt: "", className: o.star }),
              (0, i.jsx)("div", {
                className: o.iconWrapper,
                children: (0, i.jsx)(n, { width: 40, height: 40 }),
              }),
              (0, i.jsx)("img", { src: r, alt: "", className: o.sparkle }),
            ],
          }),
        });
      }
    },
    539290: function (t, n, e) {
      e.d(n, {
        E: function () {
          return g;
        },
        Z: function () {
          return E;
        },
      });
      var i = e(200651);
      e(192379);
      var s = e(120356),
        l = e.n(s),
        o = e(780384),
        r = e(481060),
        a = e(410030),
        c = e(696936),
        u = e(903773),
        d = e(53080);
      let g = {
        RIGHT: d.horizontalStatusWarningBlock,
        BOTTOM: d.verticalStatusWarningBlock,
      };
      function E(t) {
        let {
            className: n,
            color: e = c.W.YELLOW,
            buttonPosition: s = g.BOTTOM,
            notice: E,
            ctaLabel: h,
            ctaLoading: f,
            ctaDisabled: m,
            ctaClassName: x,
            onClick: N,
          } = t,
          p = (0, a.ZP)();
        return (0, i.jsx)(u.Z, {
          className: l()(
            d.statusWarningBlock,
            { [d.statusWarningBlockWithCta]: null != h },
            n,
          ),
          color: (0, o.wj)(p) ? e : c.W.BROWN,
          children: (0, i.jsxs)("div", {
            className: s,
            children: [
              (0, i.jsx)(r.Text, {
                variant: "text-sm/normal",
                color: "interactive-active",
                children: E,
              }),
              null != h &&
                null != N &&
                (0, i.jsx)("div", {
                  className: d.ctaButtonContainer,
                  children: (0, i.jsx)(r.Button, {
                    className: l()(
                      d.ctaButton,
                      (0, o.wj)(p) ? void 0 : d.ctaBlackButton,
                      x,
                    ),
                    color: (0, o.wj)(p)
                      ? r.Button.Colors.WHITE
                      : r.Button.Colors.CUSTOM,
                    size: r.ButtonSizes.MEDIUM,
                    onClick: N,
                    disabled: m,
                    submitting: f,
                    children: (0, i.jsx)(r.Text, {
                      className: d.ctaButtonText,
                      variant: "text-sm/medium",
                      children: h,
                    }),
                  }),
                }),
            ],
          }),
        });
      }
    },
    2150: function (t, n, e) {
      var i, s;
      e.d(n, {
        q: function () {
          return i;
        },
      }),
        ((s = i || (i = {})).ACCENT = "accent"),
        (s.GREEN = "statusGreen"),
        (s.YELLOW = "statusYellow"),
        (s.ORANGE = "statusOrange"),
        (s.RED = "statusRed"),
        (s.NONE = "transparent");
    },
    345861: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = e(200651);
      e(192379);
      var s = e(120356),
        l = e.n(s),
        o = e(481060),
        r = e(813197);
      function a(t) {
        let {
          buttonCTA: n,
          onChange: e,
          "aria-label": s,
          multiple: a = !1,
          disabled: c = !1,
          submitting: u = !1,
          ...d
        } = t;
        return (0, i.jsx)(o.FocusRing, {
          within: !0,
          children: (0, i.jsxs)("div", {
            className: l()(
              (0, o.getButtonStyle)({ ...d, submitting: u, disabled: c }),
            ),
            style: { width: "max-content" },
            "aria-disabled": c,
            children: [
              (0, i.jsx)("span", { "aria-hidden": !0, children: n }),
              (0, i.jsx)(r.ZP, {
                tabIndex: 0,
                onChange: e,
                multiple: a,
                "aria-label": null != s ? s : n,
                disabled: c,
              }),
            ],
          }),
        });
      }
    },
    78451: function (t, n, e) {
      e.d(n, {
        IF: function () {
          return d;
        },
        LJ: function () {
          return u;
        },
        MF: function () {
          return g;
        },
        X7: function () {
          return h;
        },
        c7: function () {
          return E;
        },
      });
      var i = e(524437);
      e(376345);
      var s = e(692547),
        l = e(2150),
        o = e(187819),
        r = e(981631),
        a = e(973005),
        c = e(388032);
      function u(t) {
        return t.map((t) => ({
          title: t.name,
          description: t.desc,
          highlightColor: (function (t) {
            switch (t) {
              case f("PRIMARY_400"):
                return l.q.ACCENT;
              case f("GREEN_360"):
                return l.q.GREEN;
              case f("YELLOW_360"):
                return l.q.YELLOW;
              case f("ORANGE_345"):
                return l.q.ORANGE;
              case f("RED_400"):
                return l.q.RED;
              default:
                return l.q.NONE;
            }
          })(t.color),
          value: t.value,
          disabled: t.disabled,
        }));
      }
      function d() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return [
          {
            name: c.intl.string(c.t.PEzffn),
            desc: c.intl.string(c.t.nDQy0t),
            value: r.sFg.NONE,
            disabled: t,
            tooltipText: t ? c.intl.string(c.t.j9WtHx) : null,
          },
          {
            name: c.intl.string(c.t.SsCK8P),
            desc: c.intl.string(c.t["8GCOX1"]),
            value: r.sFg.LOW,
            color: n ? void 0 : f("GREEN_360"),
          },
          {
            name: c.intl.string(c.t.WwNoR0),
            desc: c.intl.formatToPlainString(c.t.VS14gY, {
              min: r.YeM.ACCOUNT_AGE,
            }),
            value: r.sFg.MEDIUM,
            color: n ? void 0 : f("YELLOW_360"),
          },
          {
            name: c.intl.string(c.t.I2jMUF),
            desc: c.intl.formatToPlainString(c.t["r+b3Iy"], {
              min: r.YeM.MEMBER_AGE,
            }),
            value: r.sFg.HIGH,
            color: n ? void 0 : f("ORANGE_345"),
          },
          {
            name: c.intl.string(c.t.cJY8w8),
            desc: c.intl.string(c.t.PWaKmZ),
            value: r.sFg.VERY_HIGH,
            color: n ? void 0 : f("RED_400"),
          },
        ];
      }
      function g() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
          {
            name: c.intl.string(c.t.iHuPEx),
            desc: c.intl.string(c.t.dzbET0),
            value: r.lxg.ALL_MEMBERS,
            color: f("RED_400"),
          },
          {
            name: c.intl.string(c.t.ynfFaG),
            desc: c.intl.string(c.t.qZ1eHh),
            value: r.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: t,
            tooltipText: t ? c.intl.string(c.t.j9WtHx) : null,
            color: f("YELLOW_360"),
          },
          {
            name: c.intl.string(c.t.VbSyAw),
            desc: c.intl.string(c.t.jesz8f),
            value: r.lxg.DISABLED,
            disabled: t,
            tooltipText: t ? c.intl.string(c.t.j9WtHx) : null,
            color: f("PRIMARY_400"),
          },
        ];
      }
      function E() {
        let t = (0, o.sp)({ location: "generate-dm-spam-options" });
        return [
          {
            name: t
              ? c.intl.string(c.t["4IaoCA"])
              : c.intl.string(c.t["DY6/Fx"]),
            desc: t ? c.intl.string(c.t.TgipjI) : c.intl.string(c.t.p5t0h4),
            value: i.Xr.FRIENDS_AND_NON_FRIENDS,
            color: f("GREEN_360"),
          },
          {
            name: t ? c.intl.string(c.t["6NnX6O"]) : c.intl.string(c.t.IUO82t),
            desc: t
              ? c.intl.string(c.t["+dw1qq"])
              : c.intl.string(c.t["Fo/jub"]),
            value: i.Xr.NON_FRIENDS,
            color: f("YELLOW_360"),
          },
          {
            name: t ? c.intl.string(c.t["1tiAFx"]) : c.intl.string(c.t.XV5TIi),
            desc: t ? c.intl.string(c.t.LKTyeH) : c.intl.string(c.t.Ykdtoq),
            value: i.Xr.DISABLED,
            color: f("RED_400"),
          },
        ];
      }
      function h() {
        return [
          {
            name: c.intl.string(c.t.PhNlh4),
            desc: c.intl.string(c.t["Fw+Lvr"]),
            value: a.TI.FRIENDS_AND_NON_FRIENDS,
            color: f("GREEN_360"),
          },
          {
            name: c.intl.string(c.t["8ioJ4e"]),
            desc: c.intl.string(c.t.z4l4Cg),
            value: a.TI.NON_FRIENDS,
            color: f("YELLOW_360"),
          },
          {
            name: c.intl.string(c.t.FLfuhI),
            desc: c.intl.string(c.t.MoZlaG),
            value: a.TI.DISABLED,
            color: f("RED_400"),
          },
        ];
      }
      function f(t) {
        return s.Z.unsafe_rawColors[t].css;
      }
    },
  },
]);
//# sourceMappingURL=c3cf431941b5b92ba191.js.map
