"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["15669"],
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
    225433: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return c;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(120356),
        a = n.n(o),
        l = n(481060),
        r = n(689938),
        i = n(60179);
      let E = Object.freeze({ DEFAULT: i.default, FILLED: i.filled });
      function c(e) {
        let {
          className: s,
          onClick: n,
          "aria-label": o,
          look: c = E.DEFAULT,
        } = e;
        return (0, t.jsx)(l.Clickable, {
          "aria-label": null != o ? o : r.Z.Messages.REMOVE,
          className: a()(i.button, c, s),
          onClick: n,
        });
      }
      c.Looks = E;
    },
    484614: function (e, s, n) {
      var t,
        o = n(200651),
        a = n(192379),
        l = n(120356),
        r = n.n(l),
        i = n(846519),
        E = n(481060),
        c = n(572004),
        _ = n(689938),
        u = n(681130);
      function I(e, s, n) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = n),
          e
        );
      }
      class N extends (t = a.PureComponent) {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let {
              isVertical: e,
              value: s,
              text: n,
              className: t,
              inputClassName: a,
            } = this.props,
            { mode: l } = this.state,
            i = l === E.CopyInput.Modes.SUCCESS ? _.Z.Messages.COPIED : n;
          return e
            ? (0, o.jsxs)("div", {
                className: r()(t, l),
                children: [
                  (0, o.jsx)(E.TextInput, { value: s, inputClassName: a }),
                  (0, o.jsx)(E.Button, {
                    className: u.button,
                    onClick: this.handleCopy,
                    size: E.Button.Sizes.MIN,
                    color: this.getVerticalButtonColor(l),
                    look: E.Button.Looks.FILLED,
                    children: i,
                  }),
                ],
              })
            : (0, o.jsx)(E.CopyInput, {
                ...this.props,
                onCopy: this.handleCopy,
                mode: l,
                text: i,
              });
        }
        handleCopy() {
          let { onCopy: e, value: s, delay: n } = this.props,
            t = (0, c.JG)(s);
          this.setState({
            mode: t ? E.CopyInput.Modes.SUCCESS : E.CopyInput.Modes.ERROR,
          }),
            this._timeout.start(n, () =>
              this.setState({ mode: E.CopyInput.Modes.DEFAULT }),
            ),
            null == e || e();
        }
        getVerticalButtonColor(e) {
          switch (e) {
            case E.CopyInput.Modes.SUCCESS:
              return E.Button.Colors.GREEN;
            case E.CopyInput.Modes.ERROR:
              return E.Button.Colors.RED;
            default:
              return E.Button.Colors.BRAND;
          }
        }
        constructor(e) {
          super(e),
            I(this, "_timeout", void 0),
            (this.state = { mode: E.CopyInput.Modes.DEFAULT }),
            (this._timeout = new i.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      I(N, "defaultProps", { isVertical: !1, delay: 300 }), (s.Z = N);
    },
    852860: function (e, s, n) {
      n(47120);
      var t = n(200651),
        o = n(192379),
        a = n(100621),
        l = n(692547),
        r = n(481060),
        i = n(585483),
        E = n(981631),
        c = n(689938),
        _ = n(147768);
      s.Z = function (e) {
        var s;
        let {
            message: n,
            errorMessage: u,
            submitting: I,
            onReset: N,
            onSave: d,
            onSaveText: T,
            onResetText: R,
            onSaveButtonColor: L,
            disabled: M,
            saveButtonTooltip: S,
          } = e,
          C = o.useRef(null),
          [{ spring: g }, D] = (0, r.useSpring)(() => ({ spring: 0 }));
        o.useEffect(() => {
          function e() {
            D({ spring: 1, config: a.config.gentle }),
              D({ spring: 0, config: a.config.gentle, delay: 1e3 });
          }
          return (
            i.S.subscribe(E.CkL.EMPHASIZE_NOTICE, e),
            () => {
              i.S.unsubscribe(E.CkL.EMPHASIZE_NOTICE, e);
            }
          );
        }, [D]);
        let O = g.to({
            range: [0, 1],
            output: [
              (0, r.useToken)(l.Z.colors.TEXT_NORMAL).hex(),
              (0, r.useToken)(l.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          }),
          h = g.to({
            range: [0, 1],
            output: [
              (0, r.useToken)(l.Z.colors.BACKGROUND_FLOATING).hex(),
              (0, r.useToken)(l.Z.colors.STATUS_DANGER).hex(),
            ],
          }),
          f = g.to({
            range: [0, 1],
            output: [
              (0, r.useToken)(l.Z.colors.TEXT_DANGER).hex(),
              (0, r.useToken)(l.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          });
        return (0, t.jsx)(a.animated.div, {
          className: _.container,
          style: { backgroundColor: h },
          children: (0, t.jsx)("div", {
            className: _.flexContainer,
            ref: C,
            children: (0, t.jsxs)(r.FocusRingScope, {
              containerRef: C,
              children: [
                (0, t.jsx)("div", {
                  className: _.shrinkingContainer,
                  children: (0, t.jsx)(a.animated.div, {
                    className: _.message,
                    style: { color: null != u ? f : O },
                    children:
                      null !== (s = null != u ? u : n) && void 0 !== s
                        ? s
                        : c.Z.Messages.SETTINGS_NOTICE_MESSAGE,
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: _.actions,
                  children: [
                    null != N &&
                      (0, t.jsx)(r.Button, {
                        className: _.resetButton,
                        size: r.Button.Sizes.SMALL,
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.LINK,
                        onClick: N,
                        children: (0, t.jsx)(a.animated.span, {
                          style: { color: O },
                          children: null != R ? R : c.Z.Messages.RESET,
                        }),
                      }),
                    null != d
                      ? (0, t.jsx)(r.Tooltip, {
                          text: S,
                          children: (e) =>
                            (0, t.jsx)(r.Button, {
                              size: r.Button.Sizes.SMALL,
                              color: null != L ? L : r.Button.Colors.GREEN,
                              submitting: I,
                              disabled: M,
                              onClick: d,
                              ...e,
                              children:
                                null != T ? T : c.Z.Messages.SAVE_CHANGES,
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
    416867: function (e, s, n) {
      n.d(s, {
        B: function () {
          return c;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(481060),
        a = n(313201),
        l = n(192635),
        r = n(689938),
        i = n(169528);
      function E(e) {
        let { transitionState: s, Icon: n, title: E, body: c, onClose: _ } = e,
          u = (0, a.Dt)();
        return (0, t.jsxs)(o.ModalRoot, {
          className: i.container,
          transitionState: s,
          "aria-labelledby": u,
          children: [
            (0, t.jsxs)(o.ModalContent, {
              children: [
                (0, t.jsx)(l.Z, { Icon: n }),
                (0, t.jsx)(o.Spacer, { size: 24 }),
                (0, t.jsx)(o.Heading, {
                  id: u,
                  className: i.__invalid_title,
                  variant: "heading-xl/semibold",
                  children: E,
                }),
                (0, t.jsx)(o.Spacer, { size: 8 }),
                (0, t.jsx)(o.Text, {
                  className: i.body,
                  variant: "text-sm/normal",
                  children: c,
                }),
              ],
            }),
            (0, t.jsx)(o.Spacer, { size: 24 }),
            (0, t.jsx)(o.Button, {
              size: o.Button.Sizes.MEDIUM,
              grow: !1,
              onClick: _,
              children: r.Z.Messages.GOT_IT,
            }),
          ],
        });
      }
      function c(e) {
        (0, o.openModal)((s) => (0, t.jsx)(E, { ...s, ...e }));
      }
    },
    404203: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return l;
        },
      });
      var t = n(200651),
        o = n(192379);
      let a = (e) => (s) => {
        null == s || s.stopPropagation(), e();
      };
      function l(e) {
        let { onClick: s, className: n, children: l } = e,
          r = o.useRef(null);
        return (0, t.jsx)("div", {
          onClick: s,
          ref: r,
          className: n,
          children: l({ areaRef: r, handleStopPropagation: a }),
        });
      }
    },
    696936: function (e, s, n) {
      n.d(s, {
        W: function () {
          return i;
        },
        Z: function () {
          return E;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(120356),
        a = n.n(o),
        l = n(481060),
        r = n(915938);
      let i = {
        RED: r.redMessageBlock,
        YELLOW: r.yellowMessageBlock,
        BROWN: r.brownMessageBlock,
      };
      function E(e) {
        let { color: s, icon: n, children: o, className: i } = e;
        return (0, t.jsx)(l.FormErrorBlock, {
          icon: (e) => (0, t.jsx)(n, { height: 20, width: 20, ...e }),
          iconClassName: r.messageBlockIcon,
          className: a()(s, i),
          children: o,
        });
      }
    },
    903773: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return l;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(481060),
        a = n(696936);
      function l(e) {
        let { children: s, className: n, color: l = a.W.YELLOW } = e;
        return (0, t.jsx)(a.Z, {
          className: n,
          color: l,
          icon: o.CircleWarningIcon,
          children: s,
        });
      }
    },
    192635: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return E;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(120356),
        a = n.n(o),
        l = n(848435),
        r = n(742795),
        i = n(200289);
      function E(e) {
        let { Icon: s, className: n } = e;
        return (0, t.jsx)("div", {
          className: a()(l.container, n),
          children: (0, t.jsxs)("div", {
            className: l.innerContainer,
            children: [
              (0, t.jsx)("img", { src: i, alt: "", className: l.star }),
              (0, t.jsx)("div", {
                className: l.iconWrapper,
                children: (0, t.jsx)(s, { width: 40, height: 40 }),
              }),
              (0, t.jsx)("img", { src: r, alt: "", className: l.sparkle }),
            ],
          }),
        });
      }
    },
    539290: function (e, s, n) {
      n.d(s, {
        E: function () {
          return u;
        },
        Z: function () {
          return I;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(120356),
        a = n.n(o),
        l = n(780384),
        r = n(481060),
        i = n(410030),
        E = n(696936),
        c = n(903773),
        _ = n(861277);
      let u = {
        RIGHT: _.horizontalStatusWarningBlock,
        BOTTOM: _.verticalStatusWarningBlock,
      };
      function I(e) {
        let {
            className: s,
            color: n = E.W.YELLOW,
            buttonPosition: o = u.BOTTOM,
            notice: I,
            ctaLabel: N,
            ctaLoading: d,
            ctaDisabled: T,
            ctaClassName: R,
            onClick: L,
          } = e,
          M = (0, i.ZP)();
        return (0, t.jsx)(c.Z, {
          className: a()(
            _.statusWarningBlock,
            { [_.statusWarningBlockWithCta]: null != N },
            s,
          ),
          color: (0, l.wj)(M) ? n : E.W.BROWN,
          children: (0, t.jsxs)("div", {
            className: o,
            children: [
              (0, t.jsx)(r.Text, {
                variant: "text-sm/normal",
                color: "interactive-active",
                children: I,
              }),
              null != N &&
                null != L &&
                (0, t.jsx)("div", {
                  className: _.ctaButtonContainer,
                  children: (0, t.jsx)(r.Button, {
                    className: a()(
                      _.ctaButton,
                      (0, l.wj)(M) ? void 0 : _.ctaBlackButton,
                      R,
                    ),
                    color: (0, l.wj)(M)
                      ? r.Button.Colors.WHITE
                      : r.Button.Colors.CUSTOM,
                    size: r.ButtonSizes.MEDIUM,
                    onClick: L,
                    disabled: T,
                    submitting: d,
                    children: (0, t.jsx)(r.Text, {
                      className: _.ctaButtonText,
                      variant: "text-sm/medium",
                      children: N,
                    }),
                  }),
                }),
            ],
          }),
        });
      }
    },
    2150: function (e, s, n) {
      var t, o;
      n.d(s, {
        q: function () {
          return t;
        },
      }),
        ((o = t || (t = {})).ACCENT = "accent"),
        (o.GREEN = "statusGreen"),
        (o.YELLOW = "statusYellow"),
        (o.ORANGE = "statusOrange"),
        (o.RED = "statusRed"),
        (o.NONE = "transparent");
    },
    345861: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return i;
        },
      });
      var t = n(200651);
      n(192379);
      var o = n(120356),
        a = n.n(o),
        l = n(481060),
        r = n(813197);
      function i(e) {
        let {
          buttonCTA: s,
          onChange: n,
          "aria-label": o,
          multiple: i = !1,
          disabled: E = !1,
          submitting: c = !1,
          ..._
        } = e;
        return (0, t.jsx)(l.FocusRing, {
          within: !0,
          children: (0, t.jsxs)("div", {
            className: a()(
              (0, l.getButtonStyle)({ ..._, submitting: c, disabled: E }),
            ),
            style: { width: "max-content" },
            "aria-disabled": E,
            children: [
              (0, t.jsx)("span", { "aria-hidden": !0, children: s }),
              (0, t.jsx)(r.ZP, {
                tabIndex: 0,
                onChange: n,
                multiple: i,
                "aria-label": null != o ? o : s,
                disabled: E,
              }),
            ],
          }),
        });
      }
    },
    78451: function (e, s, n) {
      n.d(s, {
        IF: function () {
          return _;
        },
        LJ: function () {
          return c;
        },
        MF: function () {
          return u;
        },
        X7: function () {
          return N;
        },
        c7: function () {
          return I;
        },
      });
      var t = n(524437);
      n(376345);
      var o = n(692547),
        a = n(2150),
        l = n(187819),
        r = n(981631),
        i = n(973005),
        E = n(689938);
      function c(e) {
        return e.map((e) => ({
          title: e.name,
          description: e.desc,
          highlightColor: (function (e) {
            switch (e) {
              case d("PRIMARY_400"):
                return a.q.ACCENT;
              case d("GREEN_360"):
                return a.q.GREEN;
              case d("YELLOW_360"):
                return a.q.YELLOW;
              case d("ORANGE_345"):
                return a.q.ORANGE;
              case d("RED_400"):
                return a.q.RED;
              default:
                return a.q.NONE;
            }
          })(e.color),
          value: e.value,
          disabled: e.disabled,
        }));
      }
      function _() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return [
          {
            name: E.Z.Messages.VERIFICATION_LEVEL_NONE,
            desc: E.Z.Messages.VERIFICATION_LEVEL_NONE_CRITERIA,
            value: r.sFg.NONE,
            disabled: e,
            tooltipText: e
              ? E.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
          },
          {
            name: E.Z.Messages.VERIFICATION_LEVEL_LOW,
            desc: E.Z.Messages.VERIFICATION_LEVEL_LOW_CRITERIA,
            value: r.sFg.LOW,
            color: s ? void 0 : d("GREEN_360"),
          },
          {
            name: E.Z.Messages.VERIFICATION_LEVEL_MEDIUM,
            desc: E.Z.Messages.VERIFICATION_LEVEL_MEDIUM_CRITERIA.format({
              min: r.YeM.ACCOUNT_AGE,
            }),
            value: r.sFg.MEDIUM,
            color: s ? void 0 : d("YELLOW_360"),
          },
          {
            name: E.Z.Messages.VERIFICATION_LEVEL_HIGH,
            desc: E.Z.Messages.VERIFICATION_LEVEL_HIGH_CRITERIA.format({
              min: r.YeM.MEMBER_AGE,
            }),
            value: r.sFg.HIGH,
            color: s ? void 0 : d("ORANGE_345"),
          },
          {
            name: E.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH,
            desc: E.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH_CRITERIA,
            value: r.sFg.VERY_HIGH,
            color: s ? void 0 : d("RED_400"),
          },
        ];
      }
      function u() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
          {
            name: E.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_V2,
            desc: E.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_DESCRIPTION_V2,
            value: r.lxg.ALL_MEMBERS,
            color: d("RED_400"),
          },
          {
            name: E.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_V2,
            desc: E.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_DESCRIPTION_V2,
            value: r.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e
              ? E.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
            color: d("YELLOW_360"),
          },
          {
            name: E.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_V2,
            desc: E.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_DESCRIPTION_V2,
            value: r.lxg.DISABLED,
            disabled: e,
            tooltipText: e
              ? E.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED
              : null,
            color: d("PRIMARY_400"),
          },
        ];
      }
      function I() {
        let e = (0, l.sp)({ location: "generate-dm-spam-options" });
        return [
          {
            name: e
              ? E.Z.Messages.USER_SETTING_DM_SPAM_FILTER_ALL_TITLE
              : E.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS,
            desc: e
              ? E.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2
              : E.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP,
            value: t.Xr.FRIENDS_AND_NON_FRIENDS,
            color: d("GREEN_360"),
          },
          {
            name: e
              ? E.Z.Messages.USER_SETTING_DM_SPAM_FILTER_NON_FRIENDS_TITLE
              : E.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS,
            desc: e
              ? E.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP_V2
              : E.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP,
            value: t.Xr.NON_FRIENDS,
            color: d("YELLOW_360"),
          },
          {
            name: e
              ? E.Z.Messages.USER_SETTING_DM_SPAM_FILTER_DISABLED_TITLE
              : E.Z.Messages.USER_DM_SPAM_FILTER_DISABLED,
            desc: e
              ? E.Z.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP_V2
              : E.Z.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP,
            value: t.Xr.DISABLED,
            color: d("RED_400"),
          },
        ];
      }
      function N() {
        return [
          {
            name: E.Z.Messages
              .USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_V2,
            desc: E.Z.Messages
              .USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2,
            value: i.TI.FRIENDS_AND_NON_FRIENDS,
            color: d("GREEN_360"),
          },
          {
            name: E.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_V2,
            desc: E.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_HELP_V2,
            value: i.TI.NON_FRIENDS,
            color: d("YELLOW_360"),
          },
          {
            name: E.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_V2,
            desc: E.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_HELP_V2,
            value: i.TI.DISABLED,
            color: d("RED_400"),
          },
        ];
      }
      function d(e) {
        return o.Z.unsafe_rawColors[e].css;
      }
    },
  },
]);
//# sourceMappingURL=987cdf899f4572ec3574.js.map
