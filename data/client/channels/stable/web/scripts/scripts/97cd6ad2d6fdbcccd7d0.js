"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51714"],
  {
    787885: function (e) {
      e.exports = "/assets/b22001ff9333d078c09c.svg";
    },
    875425: function (e, t, a) {
      a.d(t, {
        F: function () {
          return l;
        },
        s: function () {
          return n;
        },
      });
      let s = 36e5,
        n = 128,
        l = Object.freeze({
          MINUTES_30: 18e5,
          HOURS_1: 36e5,
          HOURS_4: 144e5,
          TODAY: "TODAY",
        });
    },
    720449: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return u;
        },
      });
      var s = a(913527),
        n = a.n(s),
        l = a(695346),
        o = a(626135),
        r = a(337953),
        i = a(981631);
      function u(e, t, a, s) {
        let u = e.trim();
        if (u.length > 0 || null != t) {
          var d;
          l.Ok.updateSetting({
            text: u.length > 0 ? u : "",
            expiresAtMs:
              null != a
                ? String(
                    n()()
                      .add((0, r.Z)(a), "ms")
                      .toDate()
                      .getTime(),
                  )
                : "0",
            emojiId: null != t && null != t.id ? t.id : "0",
            emojiName: null != t ? t.name : "",
            createdAtMs: String(n()().toDate().getTime()),
          }),
            o.default.track(i.rMx.CUSTOM_STATUS_UPDATED, {
              location: null != s ? s.location : null,
              emoji_type:
                null == (d = t) ? null : null != d.id ? "custom" : "unicode",
              text_len: u.length,
              clear_after: null != a ? "".concat(a) : null,
            });
        } else l.Ok.updateSetting(void 0);
      }
    },
    337953: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = a(512722),
        n = a.n(s),
        l = a(875425);
      function o(e) {
        if (e !== l.F.TODAY)
          return (
            n()("number" == typeof e, "Invalid custom status clear timeout"), e
          );
        {
          let e = new Date();
          return (
            new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1).getTime() -
            e.getTime()
          );
        }
      }
    },
    211065: function (e, t, a) {
      a.r(t), a(47120);
      var s = a(735250),
        n = a(470079),
        l = a(512722),
        o = a.n(l),
        r = a(442837),
        i = a(481060),
        u = a(596454),
        d = a(410575),
        c = a(318766),
        S = a(907040),
        m = a(246133),
        h = a(695346),
        T = a(293273),
        p = a(594174),
        _ = a(626135),
        C = a(51144),
        g = a(720449),
        f = a(875425),
        A = a(981631),
        O = a(185923),
        j = a(689938),
        M = a(473937);
      function b(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      let N = Object.values(f.F)
        .filter((e) => "number" == typeof e)
        .sort((e, t) => e - t);
      function x(e) {
        return (0, s.jsxs)("div", {
          className: M.statusOptionItem,
          children: [
            (0, s.jsx)(i.Status, {
              status: e.value,
              size: 10,
              className: M.statusIcon,
            }),
            e.label,
          ],
        });
      }
      let U = [
        {
          key: 1,
          value: i.StatusTypes.ONLINE,
          label: (0, C.u5)(i.StatusTypes.ONLINE),
        },
        {
          key: 2,
          value: i.StatusTypes.IDLE,
          label: (0, C.u5)(i.StatusTypes.IDLE),
        },
        {
          key: 3,
          value: i.StatusTypes.DND,
          label: (0, C.u5)(i.StatusTypes.DND),
        },
        {
          key: 4,
          value: i.StatusTypes.INVISIBLE,
          label: (0, C.u5)(i.StatusTypes.INVISIBLE),
        },
      ];
      class v extends n.PureComponent {
        componentDidMount() {
          let { sourceAnalyticsLocations: e, sourceAnalyticsContext: t } =
            this.props;
          _.default.track(A.rMx.OPEN_MODAL, {
            source: null == t ? void 0 : t.location,
            type: A.jXE.CUSTOM_STATUS_MODAL,
            load_id: null == t ? void 0 : t.loadId,
            location_stack: e,
          });
        }
        get clearAfterOptions() {
          return [
            {
              key: 1,
              value: f.F.TODAY,
              label: j.Z.Messages.CUSTOM_STATUS_TODAY,
            },
            {
              key: 2,
              value: f.F.HOURS_4,
              label: j.Z.Messages.CUSTOM_STATUS_HOURS.format({ hours: 4 }),
            },
            {
              key: 3,
              value: f.F.HOURS_1,
              label: j.Z.Messages.CUSTOM_STATUS_HOURS.format({ hours: 1 }),
            },
            {
              key: 4,
              value: f.F.MINUTES_30,
              label: j.Z.Messages.CUSTOM_STATUS_MINUTES.format({ minutes: 30 }),
            },
            {
              key: 5,
              value: null,
              label: j.Z.Messages.CUSTOM_STATUS_DONT_CLEAR,
            },
          ];
        }
        get analyticsLocation() {
          return { page: A.ZY5.CUSTOM_STATUS_MODAL };
        }
        getEmojiButtonRenderer() {
          let { emojiInfo: e } = this.state;
          return null == e
            ? null
            : () =>
                (0, s.jsx)(u.Z, {
                  className: M.emoji,
                  emojiId: e.id,
                  emojiName: e.name,
                  animated: !!e.animated,
                });
        }
        renderCustomStatusInput() {
          let { user: e } = this.props,
            { text: t, emojiInfo: a } = this.state;
          return (0, s.jsx)(i.FormSection, {
            className: M.formGroup,
            title: j.Z.Messages.CUSTOM_STATUS_MODAL_BODY.format({
              username: e.username,
            }),
            children: (0, s.jsxs)("div", {
              className: M.inputContainer,
              children: [
                (0, s.jsx)("div", {
                  className: M.emojiButtonContainer,
                  children: (0, s.jsx)(i.Popout, {
                    renderPopout: this.renderEmojiPicker,
                    position: "left",
                    animation: i.Popout.Animation.NONE,
                    align: "top",
                    children: (e, t) => {
                      let { isShown: a } = t;
                      return (0, s.jsx)(c.Z, {
                        ...e,
                        active: a,
                        className: M.emojiButton,
                        tabIndex: 0,
                        renderButtonContents: this.getEmojiButtonRenderer(),
                      });
                    },
                  }),
                }),
                (0, s.jsx)(i.TextInput, {
                  maxLength: f.s,
                  value: t,
                  inputClassName: M.input,
                  placeholder: j.Z.Messages.CUSTOM_STATUS_MODAL_PLACEHOLDER,
                  onChange: this.handleStatusChange,
                  onKeyPress: this.handleKeyPress,
                  autoFocus: !0,
                }),
                t.length > 0 || null != a
                  ? (0, s.jsx)(i.Button, {
                      focusProps: {
                        offset: { top: 8, bottom: 8, left: -2, right: -2 },
                      },
                      className: M.clearButton,
                      onClick: this.handleClearStatus,
                      look: i.Button.Looks.BLANK,
                      size: i.Button.Sizes.NONE,
                      children: (0, s.jsx)(i.CircleXIcon, {
                        size: "md",
                        color: "currentColor",
                        className: M.clearIcon,
                      }),
                    })
                  : null,
              ],
            }),
          });
        }
        renderClearAfter() {
          let { clearAfter: e } = this.state;
          return (0, s.jsx)(i.FormSection, {
            className: M.formGroup,
            title: j.Z.Messages.CUSTOM_STATUS_CLEAR_AFTER,
            children: (0, s.jsx)(i.SingleSelect, {
              placeholder: j.Z.Messages.CUSTOM_STATUS_CLEAR_AFTER,
              maxVisibleItems: 5,
              value: e,
              options: this.clearAfterOptions,
              onChange: this.handleChangeClearAfter,
            }),
          });
        }
        renderStatusInput() {
          let { status: e } = this.state;
          return (0, s.jsx)(i.FormSection, {
            className: M.formGroup,
            title: j.Z.Messages.CUSTOM_STATUS_STATUS_TITLE,
            children: (0, s.jsx)(i.SingleSelect, {
              maxVisibleItems: 4,
              value: e,
              options: U,
              onChange: this.handleChangeStatus,
              renderOptionLabel: x,
            }),
          });
        }
        render() {
          let { transitionState: e, onClose: t } = this.props;
          return (0, s.jsx)(d.Z, {
            ...this.analyticsLocation,
            children: (0, s.jsxs)(i.ModalRoot, {
              transitionState: e,
              className: M.modalRoot,
              "aria-label": j.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS,
              children: [
                (0, s.jsxs)(i.ModalHeader, {
                  separator: !1,
                  className: M.headerContainer,
                  children: [
                    (0, s.jsx)("div", { className: M.art }),
                    (0, s.jsx)("div", {
                      className: M.header,
                      children: (0, s.jsx)(i.H, {
                        className: M.headerText,
                        children: j.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS,
                      }),
                    }),
                    (0, s.jsx)(i.ModalCloseButton, {
                      onClick: t,
                      className: M.modalCloseButton,
                    }),
                  ],
                }),
                (0, s.jsxs)(i.ModalContent, {
                  children: [
                    this.renderCustomStatusInput(),
                    this.renderClearAfter(),
                    (0, s.jsx)(i.FormDivider, { className: M.formDivider }),
                    this.renderStatusInput(),
                  ],
                }),
                (0, s.jsxs)(i.ModalFooter, {
                  children: [
                    (0, s.jsx)(i.Button, {
                      onClick: this.handleSubmit,
                      children: j.Z.Messages.SAVE,
                    }),
                    (0, s.jsx)(i.Button, {
                      onClick: t,
                      look: i.Button.Looks.LINK,
                      color: M.cancelButton,
                      children: j.Z.Messages.CANCEL,
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            b(this, "state", {
              emojiInfo:
                null != this.props.customStatus
                  ? this.props.customStatus.emoji
                  : null,
              text:
                null != this.props.customStatus &&
                null != this.props.customStatus.state
                  ? this.props.customStatus.state
                  : "",
              clearAfter: (function () {
                var e, t, a;
                let s = h.Ok.getSetting();
                if (null == s || "" === s.expiresAtMs) return f.F.TODAY;
                let n = Number(s.expiresAtMs);
                if (isNaN(n)) return f.F.TODAY;
                let l = new Date(),
                  o = new Date(n);
                if (
                  ((t = l),
                  (a = o),
                  t.getFullYear() !== a.getFullYear() ||
                    t.getMonth() !== a.getMonth() ||
                    t.getDate() !== a.getDate())
                )
                  return f.F.TODAY;
                let r = Number(n) - Date.now();
                return null !== (e = N.find((e) => r <= e)) && void 0 !== e
                  ? e
                  : f.F.TODAY;
              })(),
              status: (function () {
                let e = h.co.getSetting();
                return U.some((t) => t.value === e) ? e : i.StatusTypes.ONLINE;
              })(),
            }),
            b(this, "handleClearStatus", () => {
              this.setState({ emojiInfo: null, text: "" });
            }),
            b(this, "handleSubmit", (e) => {
              e.preventDefault(), this.handleSaveStatus();
            }),
            b(this, "handleStatusChange", (e) => {
              this.setState({ text: e });
            }),
            b(this, "handleEmojiChange", (e) => {
              if (null == e) return;
              let t =
                null != e.id
                  ? { id: e.id, name: e.name, animated: e.animated }
                  : {
                      id: null,
                      name: e.optionallyDiverseSequence,
                      animated: !1,
                    };
              this.setState({ emojiInfo: t });
            }),
            b(this, "handleChangeClearAfter", (e) => {
              this.setState({ clearAfter: e });
            }),
            b(this, "handleChangeStatus", (e) => {
              this.setState({ status: e });
            }),
            b(this, "handleSaveStatus", () => {
              let { sourceAnalyticsContext: e, onClose: t } = this.props,
                {
                  emojiInfo: a,
                  text: s,
                  clearAfter: n,
                  status: l,
                } = this.state,
                o = h.co.getSetting();
              o !== l && (0, m.Z)(l, o, e), (0, g.Z)(s, a, n, e), t();
            }),
            b(this, "handleKeyPress", (e) => {
              e.which === A.yXg.ENTER && this.handleSaveStatus();
            }),
            b(this, "renderEmojiPicker", (e) => {
              let { closePopout: t } = e,
                { onClose: a } = this.props;
              return (0, s.jsx)(S.Z, {
                closePopout: t,
                onSelectEmoji: (e, a) => {
                  this.handleEmojiChange(e), a && t();
                },
                pickerIntention: O.Hz.STATUS,
                onNavigateAway: a,
              });
            });
        }
      }
      t.default = r.ZP.connectStores(
        [T.Z, p.default],
        () => {
          let e = p.default.getCurrentUser();
          return (
            o()(null != e, "CustomStatusModal: user cannot be null"),
            { customStatus: T.Z.getCustomStatusActivity(), user: e }
          );
        },
        { forwardRef: !0 },
      )(v);
    },
    473937: function (e, t, a) {
      e.exports = {
        formGroup: "formGroup_d5bea8",
        formDivider: "formDivider_d5bea8",
        modalRoot: "modalRoot_d5bea8",
        inputContainer: "inputContainer_d5bea8",
        header: "header_d5bea8",
        modalCloseButton: "modalCloseButton_d5bea8",
        headerText: "headerText_d5bea8",
        emojiButton: "emojiButton_d5bea8",
        emojiButtonContainer: "emojiButtonContainer_d5bea8",
        emoji: "emoji_d5bea8",
        input: "input_d5bea8",
        clearButton: "clearButton_d5bea8",
        clearIcon: "clearIcon_d5bea8",
        headerContainer: "headerContainer_d5bea8",
        art: "art_d5bea8",
        cancelButton: "cancelButton_d5bea8",
        statusOptionItem: "statusOptionItem_d5bea8",
        statusIcon: "statusIcon_d5bea8",
      };
    },
  },
]);
//# sourceMappingURL=97cd6ad2d6fdbcccd7d0.js.map
