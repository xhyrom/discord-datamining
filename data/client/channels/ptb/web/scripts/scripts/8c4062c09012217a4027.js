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
        r = e.n(s),
        l = e(481060),
        o = e(388032),
        a = e(744149);
      let c = Object.freeze({ DEFAULT: a.default, FILLED: a.filled });
      function u(t) {
        let {
          className: n,
          onClick: e,
          "aria-label": s,
          look: u = c.DEFAULT,
        } = t;
        return (0, i.jsx)(l.Clickable, {
          "aria-label": null != s ? s : o.intl.string(o.t.N86XcH),
          className: r()(a.button, u, n),
          onClick: e,
        });
      }
      u.Looks = c;
    },
    484614: function (t, n, e) {
      var i,
        s = e(200651),
        r = e(192379),
        l = e(846519),
        o = e(481060),
        a = e(572004),
        c = e(388032);
      function u(t, n, e) {
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
      class d extends (i = r.PureComponent) {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let { text: t } = this.props,
            { mode: n } = this.state,
            e =
              n === o.CopyInput.Modes.SUCCESS
                ? c.intl.string(c.t["t5VZ8/"])
                : t;
          return (0, s.jsx)(o.CopyInput, {
            ...this.props,
            onCopy: this.handleCopy,
            mode: n,
            text: e,
            supportsCopy: a.wS,
          });
        }
        handleCopy(t) {
          let { onCopy: n, delay: e = 1e3 } = this.props,
            i = (0, a.JG)(t);
          this.setState({
            mode: i ? o.CopyInput.Modes.SUCCESS : o.CopyInput.Modes.ERROR,
          }),
            this._timeout.start(e, () =>
              this.setState({ mode: o.CopyInput.Modes.DEFAULT }),
            ),
            null == n || n(t);
        }
        getVerticalButtonColor(t) {
          switch (t) {
            case o.CopyInput.Modes.SUCCESS:
              return o.Button.Colors.GREEN;
            case o.CopyInput.Modes.ERROR:
              return o.Button.Colors.RED;
            default:
              return o.Button.Colors.BRAND;
          }
        }
        constructor(t) {
          super(t),
            u(this, "_timeout", void 0),
            (this.state = { mode: o.CopyInput.Modes.DEFAULT }),
            (this._timeout = new l.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      u(d, "defaultProps", { delay: 1e3 }), (n.Z = d);
    },
    852860: function (t, n, e) {
      e(47120);
      var i = e(200651),
        s = e(192379),
        r = e(752877),
        l = e(692547),
        o = e(481060),
        a = e(585483),
        c = e(981631),
        u = e(388032),
        d = e(840814);
      n.Z = function (t) {
        var n;
        let {
            message: e,
            errorMessage: g,
            submitting: E,
            onReset: f,
            onSave: h,
            onSaveText: m,
            onResetText: p,
            onSaveButtonColor: x,
            disabled: N,
            saveButtonTooltip: v,
          } = t,
          C = s.useRef(null),
          [{ spring: R }, j] = (0, o.useSpring)(() => ({ spring: 0 }));
        s.useEffect(() => {
          function t() {
            j({ spring: 1, config: r.config.gentle }),
              j({ spring: 0, config: r.config.gentle, delay: 1e3 });
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
              (0, o.useToken)(l.Z.colors.TEXT_NORMAL).hex(),
              (0, o.useToken)(l.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          }),
          S = R.to({
            range: [0, 1],
            output: [
              (0, o.useToken)(l.Z.colors.BACKGROUND_FLOATING).hex(),
              (0, o.useToken)(l.Z.colors.STATUS_DANGER).hex(),
            ],
          }),
          _ = R.to({
            range: [0, 1],
            output: [
              (0, o.useToken)(l.Z.colors.TEXT_DANGER).hex(),
              (0, o.useToken)(l.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          });
        return (0, i.jsx)(r.animated.div, {
          className: d.container,
          style: { backgroundColor: S },
          children: (0, i.jsx)("div", {
            className: d.flexContainer,
            ref: C,
            children: (0, i.jsxs)(o.FocusRingScope, {
              containerRef: C,
              children: [
                (0, i.jsx)("div", {
                  className: d.shrinkingContainer,
                  children: (0, i.jsx)(r.animated.div, {
                    className: d.message,
                    style: { color: null != g ? _ : I },
                    children:
                      null !== (n = null != g ? g : e) && void 0 !== n
                        ? n
                        : u.intl.string(u.t.GP7JLC),
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: d.actions,
                  children: [
                    null != f &&
                      (0, i.jsx)(o.Button, {
                        className: d.resetButton,
                        size: o.Button.Sizes.SMALL,
                        color: o.Button.Colors.PRIMARY,
                        look: o.Button.Looks.LINK,
                        onClick: f,
                        children: (0, i.jsx)(r.animated.span, {
                          style: { color: I },
                          children: null != p ? p : u.intl.string(u.t.yBZMsb),
                        }),
                      }),
                    null != h
                      ? (0, i.jsx)(o.Tooltip, {
                          text: v,
                          children: (t) =>
                            (0, i.jsx)(o.Button, {
                              size: o.Button.Sizes.SMALL,
                              color: null != x ? x : o.Button.Colors.GREEN,
                              submitting: E,
                              disabled: N,
                              onClick: h,
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
        r = e(313201),
        l = e(192635),
        o = e(388032),
        a = e(139266);
      function c(t) {
        let { transitionState: n, Icon: e, title: c, body: u, onClose: d } = t,
          g = (0, r.Dt)();
        return (0, i.jsxs)(s.ModalRoot, {
          className: a.container,
          transitionState: n,
          "aria-labelledby": g,
          children: [
            (0, i.jsxs)(s.ModalContent, {
              children: [
                (0, i.jsx)(l.Z, { Icon: e }),
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
              children: o.intl.string(o.t["NX+WJC"]),
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
          return l;
        },
      });
      var i = e(200651),
        s = e(192379);
      let r = (t) => (n) => {
        null == n || n.stopPropagation(), t();
      };
      function l(t) {
        let { onClick: n, className: e, children: l } = t,
          o = s.useRef(null);
        return (0, i.jsx)("div", {
          onClick: n,
          ref: o,
          className: e,
          children: l({ areaRef: o, handleStopPropagation: r }),
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
        r = e.n(s),
        l = e(481060),
        o = e(759821);
      let a = {
        RED: o.redMessageBlock,
        YELLOW: o.yellowMessageBlock,
        BROWN: o.brownMessageBlock,
      };
      function c(t) {
        let { color: n, icon: e, children: s, className: a } = t;
        return (0, i.jsx)(l.FormErrorBlock, {
          icon: (t) => (0, i.jsx)(e, { height: 20, width: 20, ...t }),
          iconClassName: o.messageBlockIcon,
          className: r()(n, a),
          children: s,
        });
      }
    },
    903773: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = e(200651);
      e(192379);
      var s = e(481060),
        r = e(696936);
      function l(t) {
        let { children: n, className: e, color: l = r.W.YELLOW } = t;
        return (0, i.jsx)(r.Z, {
          className: e,
          color: l,
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
        r = e.n(s),
        l = e(776394),
        o = e(742795),
        a = e(200289);
      function c(t) {
        let { Icon: n, className: e } = t;
        return (0, i.jsx)("div", {
          className: r()(l.container, e),
          children: (0, i.jsxs)("div", {
            className: l.innerContainer,
            children: [
              (0, i.jsx)("img", { src: a, alt: "", className: l.star }),
              (0, i.jsx)("div", {
                className: l.iconWrapper,
                children: (0, i.jsx)(n, { width: 40, height: 40 }),
              }),
              (0, i.jsx)("img", { src: o, alt: "", className: l.sparkle }),
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
        r = e.n(s),
        l = e(780384),
        o = e(481060),
        a = e(410030),
        c = e(696936),
        u = e(903773),
        d = e(529819);
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
            ctaLabel: f,
            ctaLoading: h,
            ctaDisabled: m,
            ctaClassName: p,
            onClick: x,
          } = t,
          N = (0, a.ZP)();
        return (0, i.jsx)(u.Z, {
          className: r()(
            d.statusWarningBlock,
            { [d.statusWarningBlockWithCta]: null != f },
            n,
          ),
          color: (0, l.wj)(N) ? e : c.W.BROWN,
          children: (0, i.jsxs)("div", {
            className: s,
            children: [
              (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "interactive-active",
                children: E,
              }),
              null != f &&
                null != x &&
                (0, i.jsx)("div", {
                  className: d.ctaButtonContainer,
                  children: (0, i.jsx)(o.Button, {
                    className: r()(
                      d.ctaButton,
                      (0, l.wj)(N) ? void 0 : d.ctaBlackButton,
                      p,
                    ),
                    color: (0, l.wj)(N)
                      ? o.Button.Colors.WHITE
                      : o.Button.Colors.CUSTOM,
                    size: o.ButtonSizes.MEDIUM,
                    onClick: x,
                    disabled: m,
                    submitting: h,
                    children: (0, i.jsx)(o.Text, {
                      className: d.ctaButtonText,
                      variant: "text-sm/medium",
                      children: f,
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
        r = e.n(s),
        l = e(481060),
        o = e(813197);
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
        return (0, i.jsx)(l.FocusRing, {
          within: !0,
          children: (0, i.jsxs)("div", {
            className: r()(
              (0, l.getButtonStyle)({ ...d, submitting: u, disabled: c }),
            ),
            style: { width: "max-content" },
            "aria-disabled": c,
            children: [
              (0, i.jsx)("span", { "aria-hidden": !0, children: n }),
              (0, i.jsx)(o.ZP, {
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
          return f;
        },
        c7: function () {
          return E;
        },
      });
      var i = e(524437);
      e(376345);
      var s = e(692547),
        r = e(2150),
        l = e(187819),
        o = e(981631),
        a = e(973005),
        c = e(388032);
      function u(t) {
        return t.map((t) => ({
          title: t.name,
          description: t.desc,
          highlightColor: (function (t) {
            switch (t) {
              case h("PRIMARY_400"):
                return r.q.ACCENT;
              case h("GREEN_360"):
                return r.q.GREEN;
              case h("YELLOW_360"):
                return r.q.YELLOW;
              case h("ORANGE_345"):
                return r.q.ORANGE;
              case h("RED_400"):
                return r.q.RED;
              default:
                return r.q.NONE;
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
            value: o.sFg.NONE,
            disabled: t,
            tooltipText: t ? c.intl.string(c.t.j9WtHx) : null,
          },
          {
            name: c.intl.string(c.t.SsCK8P),
            desc: c.intl.string(c.t["8GCOX1"]),
            value: o.sFg.LOW,
            color: n ? void 0 : h("GREEN_360"),
          },
          {
            name: c.intl.string(c.t.WwNoR0),
            desc: c.intl.formatToPlainString(c.t.VS14gY, {
              min: o.YeM.ACCOUNT_AGE,
            }),
            value: o.sFg.MEDIUM,
            color: n ? void 0 : h("YELLOW_360"),
          },
          {
            name: c.intl.string(c.t.I2jMUF),
            desc: c.intl.formatToPlainString(c.t["r+b3Iy"], {
              min: o.YeM.MEMBER_AGE,
            }),
            value: o.sFg.HIGH,
            color: n ? void 0 : h("ORANGE_345"),
          },
          {
            name: c.intl.string(c.t.cJY8w8),
            desc: c.intl.string(c.t.PWaKmZ),
            value: o.sFg.VERY_HIGH,
            color: n ? void 0 : h("RED_400"),
          },
        ];
      }
      function g() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
          {
            name: c.intl.string(c.t.iHuPEx),
            desc: c.intl.string(c.t.dzbET0),
            value: o.lxg.ALL_MEMBERS,
            color: h("RED_400"),
          },
          {
            name: c.intl.string(c.t.ynfFaG),
            desc: c.intl.string(c.t.qZ1eHh),
            value: o.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: t,
            tooltipText: t ? c.intl.string(c.t.j9WtHx) : null,
            color: h("YELLOW_360"),
          },
          {
            name: c.intl.string(c.t.VbSyAw),
            desc: c.intl.string(c.t.jesz8f),
            value: o.lxg.DISABLED,
            disabled: t,
            tooltipText: t ? c.intl.string(c.t.j9WtHx) : null,
            color: h("PRIMARY_400"),
          },
        ];
      }
      function E() {
        let t = (0, l.sp)({ location: "generate-dm-spam-options" });
        return [
          {
            name: t
              ? c.intl.string(c.t["4IaoCA"])
              : c.intl.string(c.t["DY6/Fx"]),
            desc: t ? c.intl.string(c.t.TgipjI) : c.intl.string(c.t.p5t0h4),
            value: i.Xr.FRIENDS_AND_NON_FRIENDS,
            color: h("GREEN_360"),
          },
          {
            name: t ? c.intl.string(c.t["6NnX6O"]) : c.intl.string(c.t.IUO82t),
            desc: t
              ? c.intl.string(c.t["+dw1qq"])
              : c.intl.string(c.t["Fo/jub"]),
            value: i.Xr.NON_FRIENDS,
            color: h("YELLOW_360"),
          },
          {
            name: t ? c.intl.string(c.t["1tiAFx"]) : c.intl.string(c.t.XV5TIi),
            desc: t ? c.intl.string(c.t.LKTyeH) : c.intl.string(c.t.Ykdtoq),
            value: i.Xr.DISABLED,
            color: h("RED_400"),
          },
        ];
      }
      function f() {
        return [
          {
            name: c.intl.string(c.t.PhNlh4),
            desc: c.intl.string(c.t["Fw+Lvr"]),
            value: a.TI.FRIENDS_AND_NON_FRIENDS,
            color: h("GREEN_360"),
          },
          {
            name: c.intl.string(c.t["8ioJ4e"]),
            desc: c.intl.string(c.t.z4l4Cg),
            value: a.TI.NON_FRIENDS,
            color: h("YELLOW_360"),
          },
          {
            name: c.intl.string(c.t.FLfuhI),
            desc: c.intl.string(c.t.MoZlaG),
            value: a.TI.DISABLED,
            color: h("RED_400"),
          },
        ];
      }
      function h(t) {
        return s.Z.unsafe_rawColors[t].css;
      }
    },
  },
]);
//# sourceMappingURL=8c4062c09012217a4027.js.map
