"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58120"],
  {
    691435: function (e) {
      e.exports = "/assets/0465f5c853ca9dd2cf24.svg";
    },
    660216: function (e, t, n) {
      var s = n(570140);
      t.Z = {
        addKeybind(e) {
          s.Z.dispatch({ type: "KEYBINDS_ADD_KEYBIND", keybind: e });
        },
        setKeybind(e) {
          s.Z.dispatch({ type: "KEYBINDS_SET_KEYBIND", keybind: e });
        },
        deleteKeybind(e) {
          s.Z.dispatch({ type: "KEYBINDS_DELETE_KEYBIND", id: e });
        },
        enableAll(e) {
          s.Z.dispatch({ type: "KEYBINDS_ENABLE_ALL_KEYBINDS", enable: e });
        },
      };
    },
    825209: function (e, t, n) {
      n(47120), n(653041);
      var s = n(735250),
        i = n(470079),
        a = n(921738),
        o = n.n(a),
        r = n(213005),
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
      class _ extends i.PureComponent {
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
          let { codes: n, mode: i } = this.state,
            { disabled: a } = this.props;
          return (
            p
              ? ((t = c.ZP.getDiscordUtils().inputCaptureRegisterElement),
                (e = this.handleNativeChange))
              : !d.isPlatformEmbedded && (e = this.handleComboKeys),
            (0, s.jsx)(l.Z, {
              disabled: a,
              value: n,
              mode: i,
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
                ((this.gs = new r.Z()),
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
                  { keyCode: s } = n;
                null ==
                  e.find((e) => {
                    let [, t] = e;
                    return s === t;
                  }) && e.push([u.MoX.KEYBOARD_KEY, s, u.CgE.BROWSER]),
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
      t.Z = _;
    },
    213005: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120),
        n(653041);
      var s = n(836560),
        i = n(358085),
        a = n(998502),
        o = n(13140),
        r = n(981631);
      let l = [],
        d = (e, t, n) => {
          let s = (0, i.isWindows)() ? 0 : 1;
          if (e !== r.MoX.MOUSE_BUTTON || n !== s)
            l.forEach((s) => s._handleEvent(e, t, n));
        };
      class c extends s.EventEmitter {
        destroy() {
          this.removeAllListeners(),
            0 === (l = l.filter((e) => e !== this)).length &&
              a.ZP.setOnInputEventCallback(null);
        }
        toString() {
          return (0, o.BB)(this.combo);
        }
        _handleEvent(e, t, n) {
          0 === t
            ? (this.combo = this.combo.filter((t) => {
                let [s, i] = t;
                return !(s === e && i === n);
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
            1 === l.length && a.ZP.setOnInputEventCallback(d);
        }
      }
    },
    455279: function (e, t, n) {
      n.d(t, {
        c: function () {
          return s;
        },
      }),
        n(47120);
      var s,
        i,
        a = n(735250),
        o = n(470079),
        r = n(120356),
        l = n.n(r),
        d = n(879443),
        c = n.n(d),
        u = n(392711),
        h = n.n(u),
        p = n(481060),
        _ = n(600164),
        b = n(13140),
        E = n(689938),
        D = n(98256);
      function g(e, t, n) {
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
      ((i = s || (s = {})).DEFAULT = "DEFAULT"), (i.RECORDING = "RECORDING");
      let R = { DEFAULT: D.__invalid_default, RECORDING: D.recording };
      class m extends o.PureComponent {
        componentWillUnmount() {
          null != this._unregisterNativeRecorder &&
            this._unregisterNativeRecorder();
        }
        componentDidUpdate(e) {
          let { mode: t } = this.props,
            { mode: n } = e;
          if (n === t) return;
          let { _inputRef: s } = this;
          if (null == s.current) return;
          let { activeElement: i } = document;
          "DEFAULT" === t && s.current === i && s.current.blur(),
            "RECORDING" === t && s.current !== i && s.current.focus();
        }
        render() {
          let e;
          let { mode: t, value: n, disabled: s } = this.props,
            i = (0, b.BB)(n, !0);
          e =
            "RECORDING" === t
              ? E.Z.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING
              : 0 === n.length
                ? E.Z.Messages.SHORTCUT_RECORDER_BUTTON
                : E.Z.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
          let o = "DEFAULT" === t && n.length > 0;
          return (0, a.jsx)(p.FocusRing, {
            focusTarget: this._inputRef,
            ringTarget: this._containerRef,
            children: (0, a.jsx)("div", {
              onClick: this.handleClick,
              onMouseDown: this.handleMouseDown,
              ref: this._containerRef,
              className: l()(D.recorderContainer, R[t], {
                [D.hasValue]: o,
                [D.containerDisabled]: s,
              }),
              children: (0, a.jsxs)(_.Z, {
                className: D.recorderLayout,
                children: [
                  (0, a.jsx)(_.Z.Child, {
                    className: D.keybindInput,
                    children: (0, a.jsx)("input", {
                      id: this._inputId,
                      placeholder: E.Z.Messages.SHORTCUT_RECORDER_NO_BIND,
                      type: "text",
                      ref: this.setInputRef,
                      readOnly: !0,
                      value: i,
                      disabled: "RECORDING" !== this.props.mode || s,
                    }),
                  }),
                  (0, a.jsx)(_.Z, {
                    shrink: 1,
                    grow: 0,
                    style: { margin: 0 },
                    children: (0, a.jsxs)(p.Button, {
                      className: D.addKeybindButton,
                      disabled: s,
                      onClick: (e) => {
                        e.stopPropagation(),
                          e.preventDefault(),
                          this.handleClick(e);
                      },
                      size: p.Button.Sizes.MIN,
                      color: p.ButtonColors.PRIMARY,
                      children: [
                        (0, a.jsx)("span", { className: D.text, children: e }),
                        (0, a.jsx)("span", { className: D.editIcon }),
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
            g(this, "_inputId", h().uniqueId("key-recorder-")),
            g(this, "_unregisterNativeRecorder", null),
            g(this, "_mousedownMode", null),
            g(this, "_inputRef", o.createRef()),
            g(this, "_containerRef", o.createRef()),
            g(this, "setInputRef", (e) => {
              var t;
              let { registerNativeRecorder: n, onChange: s } = this.props;
              (this._inputRef.current = e),
                null === (t = this._unregisterNativeRecorder) ||
                  void 0 === t ||
                  t.call(this),
                null != e &&
                  (null != n && null != s
                    ? (this._unregisterNativeRecorder = n(e.id, s))
                    : null != s && (new (c())(e).handleKey = s));
            }),
            g(this, "handleClick", (e) => {
              e.stopPropagation(), e.preventDefault();
              let { onClick: t, disableOnClickWhileRecording: n } = this.props;
              if (!n || "RECORDING" !== this._mousedownMode) t();
            }),
            g(this, "handleMouseDown", () => {
              this._mousedownMode = this.props.mode;
            });
        }
      }
      t.Z = m;
    },
    355453: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n(47120);
      var s = n(735250),
        i = n(470079),
        a = n(442837),
        o = n(481060),
        r = n(660216),
        l = n(825209),
        d = n(714338),
        c = n(556296),
        u = n(13140),
        h = n(710111),
        p = n(981631),
        _ = n(689938),
        b = n(371496);
      function E(e) {
        var t;
        let { transitionState: n, onClose: E } = e,
          D = (0, a.e7)([c.Z], () =>
            c.Z.getKeybindForAction(p.kg4.SOUNDBOARD_HOLD),
          ),
          [g, R] = i.useState(
            null !== (t = null == D ? void 0 : D.shortcut) && void 0 !== t
              ? t
              : [],
          );
        return (
          i.useEffect(
            () => (
              d.Z.disable(),
              () => {
                d.Z.enable();
              }
            ),
            [],
          ),
          (0, s.jsxs)(o.ModalRoot, {
            transitionState: n,
            children: [
              (0, s.jsxs)(o.ModalHeader, {
                separator: !1,
                children: [
                  (0, s.jsx)(o.Heading, {
                    className: b.header,
                    variant: "heading-xl/semibold",
                    children: _.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER,
                  }),
                  (0, s.jsx)(o.ModalCloseButton, {
                    className: b.closeButton,
                    onClick: E,
                  }),
                ],
              }),
              (0, s.jsxs)(o.ModalContent, {
                className: b.content,
                children: [
                  (0, s.jsx)(o.HelpMessage, {
                    className: b.warning,
                    messageType: o.HelpMessageTypes.WARNING,
                    children:
                      _.Z.Messages
                        .SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE,
                  }),
                  (0, s.jsx)(o.Heading, {
                    className: b.formHeader,
                    variant: "eyebrow",
                    color: "header-secondary",
                    children: _.Z.Messages.USER_SETTINGS_KEYBINDS_ACTION,
                  }),
                  (0, s.jsx)(o.Text, {
                    className: b.action,
                    variant: "text-md/normal",
                    children: _.Z.Messages.KEYBIND_SOUNDBOARD_HOLD,
                  }),
                  (0, s.jsx)(o.Text, {
                    className: b.actionDescription,
                    variant: "text-sm/normal",
                    children: _.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD,
                  }),
                  (0, s.jsx)(o.Heading, {
                    className: b.formHeader,
                    variant: "eyebrow",
                    color: "header-secondary",
                    children: _.Z.Messages.USER_SETTINGS_KEYBINDS_KEYBIND,
                  }),
                  (0, s.jsx)(l.Z, { defaultValue: g, onChange: R }),
                  (0, s.jsx)(o.Anchor, {
                    className: b.resetButton,
                    onClick: () => R((0, u.Kd)(h.D_)),
                    children:
                      _.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND,
                  }),
                ],
              }),
              (0, s.jsxs)(o.ModalFooter, {
                children: [
                  (0, s.jsx)(o.Button, {
                    onClick: function () {
                      if (0 === g.length)
                        return null != D && r.Z.deleteKeybind(D.id), E();
                      null == D
                        ? r.Z.addKeybind({
                            action: p.kg4.SOUNDBOARD_HOLD,
                            shortcut: g,
                            enabled: !0,
                            params: {},
                          })
                        : r.Z.setKeybind({ ...D, shortcut: g });
                      E();
                    },
                    children: _.Z.Messages.SAVE,
                  }),
                  (0, s.jsx)(o.Button, {
                    onClick: E,
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.PRIMARY,
                    children: _.Z.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    98256: function (e, t, n) {
      e.exports = {
        recorderContainer: "recorderContainer_fb7bb2 " + n("903884").container,
        hasValue: "hasValue_fb7bb2",
        addKeybindButton: "addKeybindButton_fb7bb2 " + n("903884").button,
        containerDisabled: "containerDisabled_fb7bb2 " + n("903884").disabled,
        recorderLayout: "recorderLayout_fb7bb2 " + n("903884").layout,
        recording: "recording_fb7bb2",
        keybindInput: "keybindInput_fb7bb2 " + n("903884").input,
        editIcon: "editIcon_fb7bb2",
        text: "text_fb7bb2",
      };
    },
    371496: function (e, t, n) {
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
    903884: function (e, t, n) {
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
//# sourceMappingURL=b9311dad3de4bd4ddb22.js.map
