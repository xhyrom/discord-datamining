"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58120"],
  {
    691435: function (e) {
      e.exports = "/assets/0465f5c853ca9dd2cf24.svg";
    },
    660216: function (e, t, n) {
      var i = n(570140);
      t.Z = {
        addKeybind(e) {
          i.Z.dispatch({ type: "KEYBINDS_ADD_KEYBIND", keybind: e });
        },
        setKeybind(e) {
          i.Z.dispatch({ type: "KEYBINDS_SET_KEYBIND", keybind: e });
        },
        deleteKeybind(e) {
          i.Z.dispatch({ type: "KEYBINDS_DELETE_KEYBIND", id: e });
        },
        enableAll(e) {
          i.Z.dispatch({ type: "KEYBINDS_ENABLE_ALL_KEYBINDS", enable: e });
        },
      };
    },
    825209: function (e, t, n) {
      n(47120), n(653041);
      var i = n(200651),
        s = n(192379),
        r = n(921738),
        o = n.n(r),
        a = n(213005),
        l = n(455279),
        d = n(358085),
        c = n(998502),
        u = n(981631);
      function h(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let p =
        d.isPlatformEmbedded &&
        null != c.ZP.getDiscordUtils().inputCaptureRegisterElement;
      class b extends s.PureComponent {
        componentDidMount() {
          this._mounted = !0;
        }
        componentWillUnmount() {
          (this._mounted = !1), this.cleanUp();
        }
        componentDidUpdate(e) {
          this.props.defaultValue !== e.defaultValue &&
            this.setState({ codes: this.props.defaultValue });
        }
        cleanUp() {
          d.isPlatformEmbedded &&
            null != this.gs &&
            (this.gs.destroy(), (this.gs = null));
        }
        handleComboChange(e) {
          let { mode: t } = this.state,
            { onChange: n } = this.props;
          t === l.c.RECORDING &&
            (null != n && n(e), this.setState({ codes: e }));
        }
        render() {
          let e, t;
          let { codes: n, mode: s } = this.state,
            { disabled: r } = this.props;
          return (
            p
              ? ((t = c.ZP.getDiscordUtils().inputCaptureRegisterElement),
                (e = this.handleNativeChange))
              : !d.isPlatformEmbedded && (e = this.handleComboKeys),
            (0, i.jsx)(l.Z, {
              disabled: r,
              value: n,
              mode: s,
              onClick: this.toggleRecordMode,
              onChange: e,
              registerNativeRecorder: t,
              disableOnClickWhileRecording: p,
            })
          );
        }
        constructor(e) {
          super(e),
            h(this, "_input", void 0),
            h(this, "gs", void 0),
            h(this, "_mounted", !1),
            h(this, "recordStart", () => {
              d.isPlatformEmbedded &&
                !p &&
                ((this.gs = new a.Z()),
                this.gs.on("change", this.handleGSChange)),
                this.setState({ mode: l.c.RECORDING });
            }),
            h(this, "recordEnd", () => {
              this.cleanUp(), this.setState({ mode: l.c.DEFAULT });
            }),
            h(this, "toggleRecordMode", () => {
              this.state.mode === l.c.DEFAULT
                ? this.recordStart()
                : this.recordEnd();
            }),
            h(this, "handleComboKeys", (e, t, n) => {
              if ((n.preventDefault(), "keydown" === n.type)) {
                let e = t.map((e) => [
                    u.MoX.KEYBOARD_KEY,
                    o()(e),
                    u.CgE.BROWSER,
                  ]),
                  { keyCode: i } = n;
                null ==
                  e.find((e) => {
                    let [, t] = e;
                    return i === t;
                  }) && e.push([u.MoX.KEYBOARD_KEY, i, u.CgE.BROWSER]),
                  this.handleComboChange(e);
              }
            }),
            h(this, "handleGSChange", (e) => {
              if (!1 === this._mounted) return;
              let t = [...e.combo];
              this.handleComboChange(t);
            }),
            h(this, "handleNativeChange", (e) => {
              e.length > 0 && this.handleComboChange(e), this.recordEnd();
            });
          let { defaultValue: t } = e;
          this.state = { codes: t, mode: l.c.DEFAULT };
        }
      }
      t.Z = b;
    },
    213005: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120),
        n(653041);
      var i = n(836560),
        s = n(358085),
        r = n(998502),
        o = n(13140),
        a = n(981631);
      let l = [],
        d = (e, t, n) => {
          let i = (0, s.isWindows)() ? 0 : 1;
          if (e !== a.MoX.MOUSE_BUTTON || n !== i)
            l.forEach((i) => i._handleEvent(e, t, n));
        };
      class c extends i.EventEmitter {
        destroy() {
          this.removeAllListeners(),
            0 === (l = l.filter((e) => e !== this)).length &&
              r.ZP.setOnInputEventCallback(null);
        }
        toString() {
          return (0, o.BB)(this.combo);
        }
        _handleEvent(e, t, n) {
          0 === t
            ? (this.combo = this.combo.filter((t) => {
                let [i, s] = t;
                return !(i === e && s === n);
              }))
            : (this.combo.push([e, n, (0, o.dU)()]), this.emit("change", this));
        }
        constructor() {
          var e, t, n;
          super(),
            (e = this),
            (n = []),
            (t = "combo") in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            l.push(this),
            1 === l.length && r.ZP.setOnInputEventCallback(d);
        }
      }
    },
    455279: function (e, t, n) {
      n.d(t, {
        c: function () {
          return i;
        },
      }),
        n(47120);
      var i,
        s,
        r = n(200651),
        o = n(192379),
        a = n(120356),
        l = n.n(a),
        d = n(879443),
        c = n.n(d),
        u = n(392711),
        h = n.n(u),
        p = n(481060),
        b = n(600164),
        g = n(13140),
        m = n(388032),
        f = n(944500);
      function _(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      ((s = i || (i = {})).DEFAULT = "DEFAULT"), (s.RECORDING = "RECORDING");
      let E = { DEFAULT: f.__invalid_default, RECORDING: f.recording };
      class R extends o.PureComponent {
        componentWillUnmount() {
          null != this._unregisterNativeRecorder &&
            this._unregisterNativeRecorder();
        }
        componentDidUpdate(e) {
          let { mode: t } = this.props,
            { mode: n } = e;
          if (n === t) return;
          let { _inputRef: i } = this;
          if (null == i.current) return;
          let { activeElement: s } = document;
          "DEFAULT" === t && i.current === s && i.current.blur(),
            "RECORDING" === t && i.current !== s && i.current.focus();
        }
        render() {
          let e;
          let { mode: t, value: n, disabled: i } = this.props,
            s = (0, g.BB)(n, !0);
          e =
            "RECORDING" === t
              ? m.intl.string(m.t.bmOri4)
              : 0 === n.length
                ? m.intl.string(m.t.co3wt7)
                : m.intl.string(m.t.idFMvL);
          let o = "DEFAULT" === t && n.length > 0;
          return (0, r.jsx)(p.FocusRing, {
            focusTarget: this._inputRef,
            ringTarget: this._containerRef,
            children: (0, r.jsx)("div", {
              onClick: this.handleClick,
              onMouseDown: this.handleMouseDown,
              ref: this._containerRef,
              className: l()(f.recorderContainer, E[t], {
                [f.hasValue]: o,
                [f.containerDisabled]: i,
              }),
              children: (0, r.jsxs)(b.Z, {
                className: f.recorderLayout,
                children: [
                  (0, r.jsx)(b.Z.Child, {
                    className: f.keybindInput,
                    children: (0, r.jsx)("input", {
                      id: this._inputId,
                      placeholder: m.intl.string(m.t.nWRdnp),
                      type: "text",
                      ref: this.setInputRef,
                      readOnly: !0,
                      value: s,
                      disabled: "RECORDING" !== this.props.mode || i,
                    }),
                  }),
                  (0, r.jsx)(b.Z, {
                    shrink: 1,
                    grow: 0,
                    style: { margin: 0 },
                    children: (0, r.jsxs)(p.Button, {
                      className: f.addKeybindButton,
                      disabled: i,
                      onClick: (e) => {
                        e.stopPropagation(),
                          e.preventDefault(),
                          this.handleClick(e);
                      },
                      size: p.Button.Sizes.MIN,
                      color: p.ButtonColors.PRIMARY,
                      children: [
                        (0, r.jsx)("span", { className: f.text, children: e }),
                        (0, r.jsx)("span", { className: f.editIcon }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            _(this, "_inputId", h().uniqueId("key-recorder-")),
            _(this, "_unregisterNativeRecorder", null),
            _(this, "_mousedownMode", null),
            _(this, "_inputRef", o.createRef()),
            _(this, "_containerRef", o.createRef()),
            _(this, "setInputRef", (e) => {
              var t;
              let { registerNativeRecorder: n, onChange: i } = this.props;
              if (
                ((this._inputRef.current = e),
                null === (t = this._unregisterNativeRecorder) ||
                  void 0 === t ||
                  t.call(this),
                null != e)
              ) {
                if (null != n && null != i)
                  try {
                    this._unregisterNativeRecorder = n(e.id, i);
                  } catch (e) {
                    this._unregisterNativeRecorder = null;
                  }
                else null != i && (new (c())(e).handleKey = i);
              }
            }),
            _(this, "handleClick", (e) => {
              e.stopPropagation(), e.preventDefault();
              let { onClick: t, disableOnClickWhileRecording: n } = this.props;
              if (!n || "RECORDING" !== this._mousedownMode) t();
            }),
            _(this, "handleMouseDown", () => {
              this._mousedownMode = this.props.mode;
            });
        }
      }
      t.Z = R;
    },
    355453: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(442837),
        o = n(481060),
        a = n(660216),
        l = n(825209),
        d = n(714338),
        c = n(556296),
        u = n(13140),
        h = n(710111),
        p = n(981631),
        b = n(388032),
        g = n(111764);
      function m(e) {
        var t;
        let { transitionState: n, onClose: m } = e,
          f = (0, r.e7)([c.Z], () =>
            c.Z.getKeybindForAction(p.kg4.SOUNDBOARD_HOLD),
          ),
          [_, E] = s.useState(
            null !== (t = null == f ? void 0 : f.shortcut) && void 0 !== t
              ? t
              : [],
          );
        return (
          s.useEffect(
            () => (
              d.Z.disable(),
              () => {
                d.Z.enable();
              }
            ),
            [],
          ),
          (0, i.jsxs)(o.ModalRoot, {
            transitionState: n,
            children: [
              (0, i.jsxs)(o.ModalHeader, {
                separator: !1,
                children: [
                  (0, i.jsx)(o.Heading, {
                    className: g.header,
                    variant: "heading-xl/semibold",
                    children: b.intl.string(b.t["0Osu39"]),
                  }),
                  (0, i.jsx)(o.ModalCloseButton, {
                    className: g.closeButton,
                    onClick: m,
                  }),
                ],
              }),
              (0, i.jsxs)(o.ModalContent, {
                className: g.content,
                children: [
                  (0, i.jsx)(o.HelpMessage, {
                    className: g.warning,
                    messageType: o.HelpMessageTypes.WARNING,
                    children: b.intl.string(b.t["O2v/eH"]),
                  }),
                  (0, i.jsx)(o.Heading, {
                    className: g.formHeader,
                    variant: "eyebrow",
                    color: "header-secondary",
                    children: b.intl.string(b.t.UUpADw),
                  }),
                  (0, i.jsx)(o.Text, {
                    className: g.action,
                    variant: "text-md/normal",
                    children: b.intl.string(b.t["1xFbPz"]),
                  }),
                  (0, i.jsx)(o.Text, {
                    className: g.actionDescription,
                    variant: "text-sm/normal",
                    children: b.intl.string(b.t.laNlTk),
                  }),
                  (0, i.jsx)(o.Heading, {
                    className: g.formHeader,
                    variant: "eyebrow",
                    color: "header-secondary",
                    children: b.intl.string(b.t["1La4tL"]),
                  }),
                  (0, i.jsx)(l.Z, { defaultValue: _, onChange: E }),
                  (0, i.jsx)(o.Anchor, {
                    className: g.resetButton,
                    onClick: () => E((0, u.Kd)(h.D_)),
                    children: b.intl.string(b.t["s7+2ra"]),
                  }),
                ],
              }),
              (0, i.jsxs)(o.ModalFooter, {
                children: [
                  (0, i.jsx)(o.Button, {
                    onClick: function () {
                      if (0 === _.length)
                        return null != f && a.Z.deleteKeybind(f.id), m();
                      null == f
                        ? a.Z.addKeybind({
                            action: p.kg4.SOUNDBOARD_HOLD,
                            shortcut: _,
                            enabled: !0,
                            params: {},
                          })
                        : a.Z.setKeybind({ ...f, shortcut: _ });
                      m();
                    },
                    children: b.intl.string(b.t.R3BPHx),
                  }),
                  (0, i.jsx)(o.Button, {
                    onClick: m,
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.PRIMARY,
                    children: b.intl.string(b.t["ETE/oK"]),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    944500: function (e, t, n) {
      e.exports = {
        recorderContainer: "recorderContainer_fb7bb2 " + n("921382").container,
        hasValue: "hasValue_fb7bb2",
        addKeybindButton: "addKeybindButton_fb7bb2 " + n("921382").button,
        containerDisabled: "containerDisabled_fb7bb2 " + n("921382").disabled,
        recorderLayout: "recorderLayout_fb7bb2 " + n("921382").layout,
        recording: "recording_fb7bb2",
        keybindInput: "keybindInput_fb7bb2 " + n("921382").input,
        editIcon: "editIcon_fb7bb2",
        text: "text_fb7bb2",
      };
    },
    111764: function (e, t, n) {
      e.exports = {
        closeButton: "closeButton_aa4ca4",
        content: "content_aa4ca4",
        header: "header_aa4ca4",
        warning: "warning_aa4ca4",
        formHeader: "formHeader_aa4ca4",
        action: "action_aa4ca4",
        actionDescription: "actionDescription_aa4ca4",
        resetButton: "resetButton_aa4ca4",
      };
    },
    921382: function (e, t, n) {
      n.r(
        (e.exports = {
          container: "container_c67e31",
          layout: "layout_c67e31",
          base: "base_c67e31",
          hiddenMessage: "hiddenMessage_c67e31 base_c67e31",
          input: "input_c67e31 base_c67e31",
          button: "button_c67e31",
          disabled: "disabled_c67e31",
        }),
      );
    },
  },
]);
//# sourceMappingURL=a59125adbeab53648890.js.map
