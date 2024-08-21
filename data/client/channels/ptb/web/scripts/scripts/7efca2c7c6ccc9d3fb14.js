"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37581"],
  {
    776226: function (e) {
      e.exports = "/assets/c824173d0d5f34be9341.svg";
    },
    878799: function (e) {
      e.exports = "/assets/80f2c4e73f4aba89fc3c.svg";
    },
    742795: function (e) {
      e.exports = "/assets/c5cde26e05ae7f8c3ec8.svg";
    },
    200289: function (e) {
      e.exports = "/assets/105aec4628453ffe01be.svg";
    },
    225433: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var s = t(735250);
      t(470079);
      var o = t(120356),
        r = t.n(o),
        a = t(481060),
        l = t(689938),
        i = t(642769);
      let c = Object.freeze({ DEFAULT: i.default, FILLED: i.filled });
      function u(e) {
        let {
          className: n,
          onClick: t,
          "aria-label": o,
          look: u = c.DEFAULT,
        } = e;
        return (0, s.jsx)(a.Clickable, {
          "aria-label": null != o ? o : l.Z.Messages.REMOVE,
          className: r()(i.button, u, n),
          onClick: t,
        });
      }
      u.Looks = c;
    },
    484614: function (e, n, t) {
      var s,
        o = t(735250),
        r = t(470079),
        a = t(120356),
        l = t.n(a),
        i = t(846519),
        c = t(481060),
        u = t(572004),
        d = t(689938),
        E = t(375294);
      function _(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      class I extends (s = r.PureComponent) {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let {
              isVertical: e,
              value: n,
              text: t,
              className: s,
              inputClassName: r,
            } = this.props,
            { mode: a } = this.state,
            i = a === c.CopyInput.Modes.SUCCESS ? d.Z.Messages.COPIED : t;
          return e
            ? (0, o.jsxs)("div", {
                className: l()(s, a),
                children: [
                  (0, o.jsx)(c.TextInput, { value: n, inputClassName: r }),
                  (0, o.jsx)(c.Button, {
                    className: E.button,
                    onClick: this.handleCopy,
                    size: c.Button.Sizes.MIN,
                    color: this.getVerticalButtonColor(a),
                    look: c.Button.Looks.FILLED,
                    children: i,
                  }),
                ],
              })
            : (0, o.jsx)(c.CopyInput, {
                ...this.props,
                onCopy: this.handleCopy,
                mode: a,
                text: i,
              });
        }
        handleCopy() {
          let { onCopy: e, value: n, delay: t } = this.props,
            s = (0, u.JG)(n);
          this.setState({
            mode: s ? c.CopyInput.Modes.SUCCESS : c.CopyInput.Modes.ERROR,
          }),
            this._timeout.start(t, () =>
              this.setState({ mode: c.CopyInput.Modes.DEFAULT }),
            ),
            null == e || e();
        }
        getVerticalButtonColor(e) {
          switch (e) {
            case c.CopyInput.Modes.SUCCESS:
              return c.Button.Colors.GREEN;
            case c.CopyInput.Modes.ERROR:
              return c.Button.Colors.RED;
            default:
              return c.Button.Colors.BRAND;
          }
        }
        constructor(e) {
          super(e),
            _(this, "_timeout", void 0),
            (this.state = { mode: c.CopyInput.Modes.DEFAULT }),
            (this._timeout = new i.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      _(I, "defaultProps", { isVertical: !1, delay: 300 }), (n.Z = I);
    },
    852860: function (e, n, t) {
      t(47120);
      var s = t(735250),
        o = t(470079),
        r = t(338545),
        a = t(692547),
        l = t(481060),
        i = t(585483),
        c = t(981631),
        u = t(689938),
        d = t(591318);
      n.Z = function (e) {
        var n;
        let {
            message: t,
            errorMessage: E,
            submitting: _,
            onReset: I,
            onSave: N,
            onSaveText: h,
            onResetText: p,
            onSaveButtonColor: g,
            disabled: R,
            saveButtonTooltip: T,
          } = e,
          v = o.useRef(null),
          [{ spring: C }, L] = (0, l.useSpring)(() => ({ spring: 0 }));
        o.useEffect(() => {
          function e() {
            L({ spring: 1, config: r.config.gentle }),
              L({ spring: 0, config: r.config.gentle, delay: 1e3 });
          }
          return (
            i.S.subscribe(c.CkL.EMPHASIZE_NOTICE, e),
            () => {
              i.S.unsubscribe(c.CkL.EMPHASIZE_NOTICE, e);
            }
          );
        }, [L]);
        let M = C.to({
            range: [0, 1],
            output: [
              (0, l.useToken)(a.Z.colors.TEXT_NORMAL).hex(),
              (0, l.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          }),
          f = C.to({
            range: [0, 1],
            output: [
              (0, l.useToken)(a.Z.colors.BACKGROUND_FLOATING).hex(),
              (0, l.useToken)(a.Z.colors.STATUS_DANGER).hex(),
            ],
          }),
          m = C.to({
            range: [0, 1],
            output: [
              (0, l.useToken)(a.Z.colors.TEXT_DANGER).hex(),
              (0, l.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          });
        return (0, s.jsx)(r.animated.div, {
          className: d.container,
          style: { backgroundColor: f },
          children: (0, s.jsx)("div", {
            className: d.flexContainer,
            ref: v,
            children: (0, s.jsxs)(l.FocusRingScope, {
              containerRef: v,
              children: [
                (0, s.jsx)("div", {
                  className: d.shrinkingContainer,
                  children: (0, s.jsx)(r.animated.div, {
                    className: d.message,
                    style: { color: null != E ? m : M },
                    children:
                      null !== (n = null != E ? E : t) && void 0 !== n
                        ? n
                        : u.Z.Messages.SETTINGS_NOTICE_MESSAGE,
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: d.actions,
                  children: [
                    null != I &&
                      (0, s.jsx)(l.Button, {
                        className: d.resetButton,
                        size: l.Button.Sizes.SMALL,
                        color: l.Button.Colors.PRIMARY,
                        look: l.Button.Looks.LINK,
                        onClick: I,
                        children: (0, s.jsx)(r.animated.span, {
                          style: { color: M },
                          children: null != p ? p : u.Z.Messages.RESET,
                        }),
                      }),
                    null != N
                      ? (0, s.jsx)(l.Tooltip, {
                          text: T,
                          children: (e) =>
                            (0, s.jsx)(l.Button, {
                              size: l.Button.Sizes.SMALL,
                              color: null != g ? g : l.Button.Colors.GREEN,
                              submitting: _,
                              disabled: R,
                              onClick: N,
                              ...e,
                              children:
                                null != h ? h : u.Z.Messages.SAVE_CHANGES,
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
    285888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
        v: function () {
          return h;
        },
      }),
        t(47120);
      var s,
        o,
        r,
        a = t(735250),
        l = t(470079),
        i = t(120356),
        c = t.n(i),
        u = t(536640),
        d = t(481060),
        E = t(981631),
        _ = t(689938),
        I = t(471753);
      function N(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      ((r = s || (s = {})).TOP = "top"), (r.BOTTOM = "bottom");
      let h = {
        container: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            cursor: t ? "not-allowed" : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: "100%",
          };
        },
        control: (e, n) => {
          let { isDisabled: t, menuIsOpen: s } = n;
          return {
            ...e,
            backgroundColor: "var(--input-background)",
            borderColor: "var(--input-background)",
            opacity: t ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: s ? "4px 4px 0 0" : "4px",
            minHeight: 40,
            transition: "border 0.15s ease",
            cursor: t ? "not-allowed" : void 0,
            pointerEvents: t ? "none" : void 0,
            "&:hover": { borderColor: "var(--input-background)" },
          };
        },
        singleValue: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            color: "var(--interactive-normal)",
            opacity: t ? 0.5 : 1,
          };
        },
        input: (e) => ({ ...e, color: "var(--interactive-normal)" }),
        menu: (e) => ({
          ...e,
          backgroundColor: "var(--background-secondary)",
          border: "1px solid var(--background-tertiary)",
          borderRadius: "0 0 4px 4px",
          color: "var(--interactive-normal)",
          marginTop: -1,
          marginBottom: -1,
        }),
        clearIndicator: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: t ? void 0 : "pointer",
            opacity: 0.3,
            padding: "8px 0",
            transform: "scale(0.8)",
            ":hover": { color: "var(--text-danger)", opacity: 1 },
          };
        },
        indicatorsContainer: (e) => ({ ...e, alignItems: "flex-start" }),
        dropdownIndicator: (e, n) => {
          let { isDisabled: t } = n;
          return {
            ...e,
            color: "var(--interactive-normal)",
            cursor: t ? void 0 : "pointer",
            opacity: t ? 0.3 : 1,
            padding: "8px 8px 8px 0",
            ":hover": {
              color: "var(--interactive-hover)",
              opacity: t ? 0.3 : 1,
            },
          };
        },
        menuList: (e) => ({
          ...e,
          padding: 0,
          "&::-webkit-scrollbar": { width: 8, padding: "0px 2px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--scrollbar-thin-thumb)",
            border: "2px solid transparent",
            backgroundClip: "padding-box",
            borderRadius: 4,
          },
          "&::-webkit-scrollbar-track-piece": {
            backgroundColor: "transparent",
            borderColor: "transparent",
          },
        }),
        option: (e, n) => {
          let { isSelected: t, isFocused: s } = n;
          return {
            ...e,
            ...(t
              ? {
                  backgroundColor: "var(--background-modifier-selected)",
                  color: "var(--interactive-active)",
                }
              : s
                ? {
                    backgroundColor: "var(--background-modifier-hover)",
                    color: "var(--interactive-hover)",
                  }
                : {
                    backgroundColor: "transparent",
                    color: "var(--interactive-normal)",
                  }),
            cursor: "pointer",
            display: "flex",
            padding: 12,
            alignItems: "center",
            minHeight: 40,
            "&:active": {
              backgroundColor: "var(--background-modifier-selected)",
              color: "var(--interactive-active)",
            },
          };
        },
        placeholder: (e) => ({ ...e, color: "var(--text-muted)" }),
      };
      class p extends (o = l.Component) {
        focus() {
          var e;
          null === (e = this._selectRef.current) || void 0 === e || e.focus();
        }
        render() {
          let e;
          let {
              className: n,
              selectClassName: t,
              error: s,
              valueRenderer: o,
              optionRenderer: r,
              multiValueRenderer: l,
              options: i,
              value: E,
              autofocus: N,
              disabled: p,
              clearable: g,
              searchable: R,
              styleOverrides: T,
              isMulti: v,
              placeholder: C,
              filterOption: L,
              closeMenuOnSelect: M = !0,
              ...f
            } = this.props,
            m = { ...f };
          null != N && (m.autoFocus = N),
            null != p && (m.isDisabled = p),
            null != g && (m.isClearable = g),
            null != R && (m.isSearchable = R);
          let S = { IndicatorSeparator: () => null };
          null != r &&
            (S.Option = (e) =>
              (0, a.jsx)(u.wx.Option, { ...e, children: r(e.data) })),
            null != o &&
              (S.SingleValue = (e) =>
                (0, a.jsx)(u.wx.SingleValue, { ...e, children: o(e.data) })),
            null != l && (S.MultiValue = (e) => l(e.data));
          if (v && Array.isArray(E)) {
            let n = {};
            i.forEach((e) => {
              n[String(e.value)] = e;
            }),
              (e = E.map((e) => n[String(e)]));
          } else e = null != E ? i.find((e) => e.value === E) : null;
          return (0, a.jsx)(d.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, a.jsxs)("div", {
              className: c()(I.select, n, { [I.error]: null != s }),
              ref: this._containerRef,
              children: [
                (0, a.jsx)(u.ZP, {
                  ...m,
                  className: t,
                  ref: this._selectRef,
                  isMulti: v,
                  components: S,
                  options: i,
                  styles: null != T ? T : h,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  onMenuOpen: this.handleMenuOpen,
                  onMenuClose: this.handleMenuClose,
                  closeMenuOnSelect: M,
                  value: e,
                  onKeyDown: this.handleKeyDown,
                  placeholder: null != C ? C : _.Z.Messages.SELECT,
                  noOptionsMessage: () => _.Z.Messages.NO_RESULTS_FOUND,
                  filterOption: L,
                }),
                null != s
                  ? (0, a.jsx)("div", {
                      className: I.errorMessage,
                      children: s,
                    })
                  : null,
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            N(this, "_selectRef", l.createRef()),
            N(this, "_containerRef", l.createRef()),
            N(this, "state", { isFocused: !1, isOpen: !1 }),
            N(this, "handleFocus", (e) => {
              var n, t;
              this.setState({ isFocused: !0 }),
                null === (n = (t = this.props).onFocus) ||
                  void 0 === n ||
                  n.call(t, e);
            }),
            N(this, "handleBlur", (e) => {
              var n, t;
              this.setState({ isFocused: !1 }),
                null === (n = (t = this.props).onBlur) ||
                  void 0 === n ||
                  n.call(t, e);
            }),
            N(this, "handleKeyDown", (e) => {
              e.which === E.yXg.ESCAPE &&
                this.state.isOpen &&
                e.stopPropagation();
            }),
            N(this, "handleMenuOpen", () => {
              this.setState({ isOpen: !0 });
            }),
            N(this, "handleMenuClose", () => {
              this.setState({ isOpen: !1 });
            });
        }
      }
      N(p, "MenuPlacements", s);
    },
    416867: function (e, n, t) {
      t.d(n, {
        B: function () {
          return u;
        },
      });
      var s = t(735250);
      t(470079);
      var o = t(481060),
        r = t(313201),
        a = t(192635),
        l = t(689938),
        i = t(676648);
      function c(e) {
        let { transitionState: n, Icon: t, title: c, body: u, onClose: d } = e,
          E = (0, r.Dt)();
        return (0, s.jsxs)(o.ModalRoot, {
          className: i.container,
          transitionState: n,
          "aria-labelledby": E,
          children: [
            (0, s.jsxs)(o.ModalContent, {
              children: [
                (0, s.jsx)(a.Z, { Icon: t }),
                (0, s.jsx)(o.Spacer, { size: 24 }),
                (0, s.jsx)(o.Heading, {
                  id: E,
                  className: i.__invalid_title,
                  variant: "heading-xl/semibold",
                  children: c,
                }),
                (0, s.jsx)(o.Spacer, { size: 8 }),
                (0, s.jsx)(o.Text, {
                  className: i.body,
                  variant: "text-sm/normal",
                  children: u,
                }),
              ],
            }),
            (0, s.jsx)(o.Spacer, { size: 24 }),
            (0, s.jsx)(o.Button, {
              size: o.Button.Sizes.MEDIUM,
              grow: !1,
              onClick: d,
              children: l.Z.Messages.GOT_IT,
            }),
          ],
        });
      }
      function u(e) {
        (0, o.openModal)((n) => (0, s.jsx)(c, { ...n, ...e }));
      }
    },
    404203: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var s = t(735250),
        o = t(470079);
      let r = (e) => (n) => {
        null == n || n.stopPropagation(), e();
      };
      function a(e) {
        let { onClick: n, className: t, children: a } = e,
          l = o.useRef(null);
        return (0, s.jsx)("div", {
          onClick: n,
          ref: l,
          className: t,
          children: a({ areaRef: l, handleStopPropagation: r }),
        });
      }
    },
    696936: function (e, n, t) {
      t.d(n, {
        W: function () {
          return i;
        },
        Z: function () {
          return c;
        },
      });
      var s = t(735250);
      t(470079);
      var o = t(120356),
        r = t.n(o),
        a = t(481060),
        l = t(74633);
      let i = {
        RED: l.redMessageBlock,
        YELLOW: l.yellowMessageBlock,
        BROWN: l.brownMessageBlock,
      };
      function c(e) {
        let { color: n, icon: t, children: o, className: i } = e;
        return (0, s.jsx)(a.FormErrorBlock, {
          icon: (e) => (0, s.jsx)(t, { height: 20, width: 20, ...e }),
          iconClassName: l.messageBlockIcon,
          className: r()(n, i),
          children: o,
        });
      }
    },
    903773: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var s = t(735250);
      t(470079);
      var o = t(481060),
        r = t(696936);
      function a(e) {
        let { children: n, className: t, color: a = r.W.YELLOW } = e;
        return (0, s.jsx)(r.Z, {
          className: t,
          color: a,
          icon: o.CircleWarningIcon,
          children: n,
        });
      }
    },
    192635: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var s = t(735250);
      t(470079);
      var o = t(120356),
        r = t.n(o),
        a = t(560814),
        l = t(742795),
        i = t(200289);
      function c(e) {
        let { Icon: n, className: t } = e;
        return (0, s.jsx)("div", {
          className: r()(a.container, t),
          children: (0, s.jsxs)("div", {
            className: a.innerContainer,
            children: [
              (0, s.jsx)("img", { src: i, alt: "", className: a.star }),
              (0, s.jsx)("div", {
                className: a.iconWrapper,
                children: (0, s.jsx)(n, { width: 40, height: 40 }),
              }),
              (0, s.jsx)("img", { src: l, alt: "", className: a.sparkle }),
            ],
          }),
        });
      }
    },
    539290: function (e, n, t) {
      t.d(n, {
        E: function () {
          return E;
        },
        Z: function () {
          return _;
        },
      });
      var s = t(735250);
      t(470079);
      var o = t(120356),
        r = t.n(o),
        a = t(780384),
        l = t(481060),
        i = t(410030),
        c = t(696936),
        u = t(903773),
        d = t(72105);
      let E = {
        RIGHT: d.horizontalStatusWarningBlock,
        BOTTOM: d.verticalStatusWarningBlock,
      };
      function _(e) {
        let {
            className: n,
            color: t = c.W.YELLOW,
            buttonPosition: o = E.BOTTOM,
            notice: _,
            ctaLabel: I,
            ctaLoading: N,
            ctaDisabled: h,
            ctaClassName: p,
            onClick: g,
          } = e,
          R = (0, i.ZP)();
        return (0, s.jsx)(u.Z, {
          className: r()(
            d.statusWarningBlock,
            { [d.statusWarningBlockWithCta]: null != I },
            n,
          ),
          color: (0, a.wj)(R) ? t : c.W.BROWN,
          children: (0, s.jsxs)("div", {
            className: o,
            children: [
              (0, s.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: "interactive-active",
                children: _,
              }),
              null != I &&
                null != g &&
                (0, s.jsx)("div", {
                  className: d.ctaButtonContainer,
                  children: (0, s.jsx)(l.Button, {
                    className: r()(
                      d.ctaButton,
                      (0, a.wj)(R) ? void 0 : d.ctaBlackButton,
                      p,
                    ),
                    color: (0, a.wj)(R)
                      ? l.Button.Colors.WHITE
                      : l.Button.Colors.CUSTOM,
                    size: l.ButtonSizes.MEDIUM,
                    onClick: g,
                    disabled: h,
                    submitting: N,
                    children: (0, s.jsx)(l.Text, {
                      className: d.ctaButtonText,
                      variant: "text-sm/medium",
                      children: I,
                    }),
                  }),
                }),
            ],
          }),
        });
      }
    },
    2150: function (e, n, t) {
      var s, o;
      t.d(n, {
        q: function () {
          return s;
        },
      }),
        ((o = s || (s = {})).ACCENT = "accent"),
        (o.GREEN = "statusGreen"),
        (o.YELLOW = "statusYellow"),
        (o.ORANGE = "statusOrange"),
        (o.RED = "statusRed"),
        (o.NONE = "transparent");
    },
    345861: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var s = t(735250);
      t(470079);
      var o = t(120356),
        r = t.n(o),
        a = t(481060),
        l = t(813197);
      function i(e) {
        let {
          buttonCTA: n,
          onChange: t,
          "aria-label": o,
          multiple: i = !1,
          disabled: c = !1,
          submitting: u = !1,
          ...d
        } = e;
        return (0, s.jsx)(a.FocusRing, {
          within: !0,
          children: (0, s.jsxs)("div", {
            className: r()(
              (0, a.getButtonStyle)({ ...d, submitting: u, disabled: c }),
            ),
            style: { width: "max-content" },
            "aria-disabled": c,
            children: [
              (0, s.jsx)("span", { "aria-hidden": !0, children: n }),
              (0, s.jsx)(l.ZP, {
                tabIndex: 0,
                onChange: t,
                multiple: i,
                "aria-label": null != o ? o : n,
                disabled: c,
              }),
            ],
          }),
        });
      }
    },
    4912: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var s = t(735250);
      t(470079);
      var o = t(325767);
      function r(e) {
        let {
          width: n = 14,
          height: t = 14,
          color: r = "currentColor",
          foreground: a,
          ...l
        } = e;
        return (0, s.jsx)("svg", {
          ...(0, o.Z)(l),
          width: n,
          height: t,
          viewBox: "0 0 14 14",
          children: (0, s.jsx)("path", {
            className: a,
            fill: r,
            d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z",
          }),
        });
      }
    },
    78451: function (e, n, t) {
      t.d(n, {
        IF: function () {
          return u;
        },
        LJ: function () {
          return c;
        },
        MF: function () {
          return d;
        },
        X7: function () {
          return _;
        },
        c7: function () {
          return E;
        },
      });
      var s = t(524437);
      t(376345);
      var o = t(692547),
        r = t(2150),
        a = t(981631),
        l = t(973005),
        i = t(689938);
      function c(e) {
        return e.map((e) => ({
          title: e.name,
          description: e.desc,
          highlightColor: (function (e) {
            switch (e) {
              case I("PRIMARY_400"):
                return r.q.ACCENT;
              case I("GREEN_360"):
                return r.q.GREEN;
              case I("YELLOW_360"):
                return r.q.YELLOW;
              case I("ORANGE_345"):
                return r.q.ORANGE;
              case I("RED_400"):
                return r.q.RED;
              default:
                return r.q.NONE;
            }
          })(e.color),
          value: e.value,
          disabled: e.disabled,
        }));
      }
      function u() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return [
          {
            name: i.Z.Messages.VERIFICATION_LEVEL_NONE,
            desc: i.Z.Messages.VERIFICATION_LEVEL_NONE_CRITERIA,
            value: a.sFg.NONE,
            disabled: e,
            tooltipText: e
              ? i.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
          },
          {
            name: i.Z.Messages.VERIFICATION_LEVEL_LOW,
            desc: i.Z.Messages.VERIFICATION_LEVEL_LOW_CRITERIA,
            value: a.sFg.LOW,
            color: n ? void 0 : I("GREEN_360"),
          },
          {
            name: i.Z.Messages.VERIFICATION_LEVEL_MEDIUM,
            desc: i.Z.Messages.VERIFICATION_LEVEL_MEDIUM_CRITERIA.format({
              min: a.YeM.ACCOUNT_AGE,
            }),
            value: a.sFg.MEDIUM,
            color: n ? void 0 : I("YELLOW_360"),
          },
          {
            name: i.Z.Messages.VERIFICATION_LEVEL_HIGH,
            desc: i.Z.Messages.VERIFICATION_LEVEL_HIGH_CRITERIA.format({
              min: a.YeM.MEMBER_AGE,
            }),
            value: a.sFg.HIGH,
            color: n ? void 0 : I("ORANGE_345"),
          },
          {
            name: i.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH,
            desc: i.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH_CRITERIA,
            value: a.sFg.VERY_HIGH,
            color: n ? void 0 : I("RED_400"),
          },
        ];
      }
      function d() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
          {
            name: i.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_V2,
            desc: i.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_DESCRIPTION_V2,
            value: a.lxg.ALL_MEMBERS,
            color: I("RED_400"),
          },
          {
            name: i.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_V2,
            desc: i.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_DESCRIPTION_V2,
            value: a.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e
              ? i.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
            color: I("YELLOW_360"),
          },
          {
            name: i.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_V2,
            desc: i.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_DESCRIPTION_V2,
            value: a.lxg.DISABLED,
            disabled: e,
            tooltipText: e
              ? i.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
            color: I("PRIMARY_400"),
          },
        ];
      }
      function E() {
        return [
          {
            name: i.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS,
            desc: i.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP,
            value: s.Xr.FRIENDS_AND_NON_FRIENDS,
            color: I("GREEN_360"),
          },
          {
            name: i.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS,
            desc: i.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP,
            value: s.Xr.NON_FRIENDS,
            color: I("YELLOW_360"),
          },
          {
            name: i.Z.Messages.USER_DM_SPAM_FILTER_DISABLED,
            desc: i.Z.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP,
            value: s.Xr.DISABLED,
            color: I("RED_400"),
          },
        ];
      }
      function _() {
        return [
          {
            name: i.Z.Messages
              .USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_V2,
            desc: i.Z.Messages
              .USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2,
            value: l.TI.FRIENDS_AND_NON_FRIENDS,
            color: I("GREEN_360"),
          },
          {
            name: i.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_V2,
            desc: i.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_HELP_V2,
            value: l.TI.NON_FRIENDS,
            color: I("YELLOW_360"),
          },
          {
            name: i.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_V2,
            desc: i.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_HELP_V2,
            value: l.TI.DISABLED,
            color: I("RED_400"),
          },
        ];
      }
      function I(e) {
        return o.Z.unsafe_rawColors[e].css;
      }
    },
  },
]);
//# sourceMappingURL=7efca2c7c6ccc9d3fb14.js.map
