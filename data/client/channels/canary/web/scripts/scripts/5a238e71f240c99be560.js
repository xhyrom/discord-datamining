"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51714"],
  {
    787885: function (t) {
      t.exports = "/assets/b22001ff9333d078c09c.svg";
    },
    875425: function (t, e, n) {
      n.d(e, {
        F: function () {
          return s;
        },
        s: function () {
          return l;
        },
      });
      let a = 36e5,
        l = 128,
        s = Object.freeze({
          MINUTES_30: 18e5,
          HOURS_1: 36e5,
          HOURS_4: 144e5,
          TODAY: "TODAY",
          DONT_CLEAR: "DONT_CLEAR",
        });
    },
    720449: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return d;
        },
      });
      var a = n(913527),
        l = n.n(a),
        s = n(695346),
        i = n(626135),
        o = n(337953),
        r = n(875425),
        u = n(981631);
      function d(t, e, n, a, d) {
        let c = t.trim();
        if (!(c.length > 0) && null == e) return s.Ok.updateSetting(void 0);
        {
          var m;
          let t = s.Ok.updateSetting({
            text: c.length > 0 ? c : "",
            expiresAtMs:
              null != n && n !== r.F.DONT_CLEAR
                ? String(
                    l()()
                      .add((0, o.Z)(n), "ms")
                      .toDate()
                      .getTime(),
                  )
                : "0",
            emojiId: null != e && null != e.id ? e.id : "0",
            emojiName: null != e ? e.name : "",
            createdAtMs: String(null != d ? d : l()().toDate().getTime()),
          });
          return (
            i.default.track(u.rMx.CUSTOM_STATUS_UPDATED, {
              location: null != a ? a.location : null,
              emoji_type:
                null == (m = e) ? null : null != m.id ? "custom" : "unicode",
              text_len: c.length,
              clear_after: null != n ? "".concat(n) : null,
            }),
            t
          );
        }
      }
    },
    684269: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var a = n(652831),
        l = n(695346),
        s = n(875425);
      let i = Object.values(s.F)
        .filter((t) => "number" == typeof t)
        .sort((t, e) => t - e);
      function o() {
        var t, e, n;
        let o = l.Ok.getSetting();
        if (null == o || "" === o.expiresAtMs)
          return (0, a.q)({ location: "computeInitialClearAfter" })
            ? s.F.DONT_CLEAR
            : s.F.TODAY;
        let r = Number(o.expiresAtMs);
        if (isNaN(r)) return s.F.TODAY;
        if (0 === r) return s.F.DONT_CLEAR;
        let u = new Date(),
          d = new Date(r);
        if (
          ((e = u),
          (n = d),
          e.getFullYear() !== n.getFullYear() ||
            e.getMonth() !== n.getMonth() ||
            e.getDate() !== n.getDate())
        )
          return s.F.TODAY;
        let c = Number(r) - Date.now();
        return null !== (t = i.find((t) => c <= t)) && void 0 !== t
          ? t
          : s.F.TODAY;
      }
    },
    337953: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var a = n(512722),
        l = n.n(a),
        s = n(875425);
      function i(t) {
        if (t !== s.F.TODAY)
          return (
            l()("number" == typeof t, "Invalid custom status clear timeout"), t
          );
        {
          let t = new Date();
          return (
            new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1).getTime() -
            t.getTime()
          );
        }
      }
    },
    211065: function (t, e, n) {
      n.r(e), n(47120);
      var a = n(200651),
        l = n(192379),
        s = n(512722),
        i = n.n(s),
        o = n(442837),
        r = n(481060),
        u = n(596454),
        d = n(410575),
        c = n(318766),
        m = n(907040),
        h = n(246133),
        p = n(695346),
        S = n(293273),
        f = n(594174),
        g = n(626135),
        C = n(51144),
        b = n(720449),
        j = n(684269),
        N = n(875425),
        T = n(981631),
        x = n(185923),
        _ = n(388032),
        v = n(58448);
      function D(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function O(t) {
        return (0, a.jsxs)("div", {
          className: v.statusOptionItem,
          children: [
            (0, a.jsx)(r.Status, {
              status: t.value,
              size: 10,
              className: v.statusIcon,
            }),
            t.label,
          ],
        });
      }
      let I = [
        {
          key: 1,
          value: r.StatusTypes.ONLINE,
          label: (0, C.u5)(r.StatusTypes.ONLINE),
        },
        {
          key: 2,
          value: r.StatusTypes.IDLE,
          label: (0, C.u5)(r.StatusTypes.IDLE),
        },
        {
          key: 3,
          value: r.StatusTypes.DND,
          label: (0, C.u5)(r.StatusTypes.DND),
        },
        {
          key: 4,
          value: r.StatusTypes.INVISIBLE,
          label: (0, C.u5)(r.StatusTypes.INVISIBLE),
        },
      ];
      class A extends l.PureComponent {
        componentDidMount() {
          let { sourceAnalyticsLocations: t, sourceAnalyticsContext: e } =
            this.props;
          g.default.track(T.rMx.OPEN_MODAL, {
            source: null == e ? void 0 : e.location,
            type: T.jXE.CUSTOM_STATUS_MODAL,
            load_id: null == e ? void 0 : e.loadId,
            location_stack: t,
          });
        }
        get clearAfterOptions() {
          return [
            { key: 1, value: N.F.TODAY, label: _.intl.string(_.t.GQmLra) },
            {
              key: 2,
              value: N.F.HOURS_4,
              label: _.intl.formatToPlainString(_.t.Rea2gY, { hours: 4 }),
            },
            {
              key: 3,
              value: N.F.HOURS_1,
              label: _.intl.formatToPlainString(_.t.Rea2gY, { hours: 1 }),
            },
            {
              key: 4,
              value: N.F.MINUTES_30,
              label: _.intl.formatToPlainString(_.t.TS3eJS, { minutes: 30 }),
            },
            { key: 5, value: N.F.DONT_CLEAR, label: _.intl.string(_.t.bRn8cn) },
          ];
        }
        get analyticsLocation() {
          return { page: T.ZY5.CUSTOM_STATUS_MODAL };
        }
        getEmojiButtonRenderer() {
          let { emojiInfo: t } = this.state;
          return null == t
            ? null
            : () =>
                (0, a.jsx)(u.Z, {
                  className: v.emoji,
                  emojiId: t.id,
                  emojiName: t.name,
                  animated: !!t.animated,
                });
        }
        renderCustomStatusInput() {
          let { user: t } = this.props,
            { text: e, emojiInfo: n } = this.state;
          return (0, a.jsx)(r.FormSection, {
            className: v.formGroup,
            title: _.intl.formatToPlainString(_.t["/w9pHx"], {
              username: t.username,
            }),
            children: (0, a.jsxs)("div", {
              className: v.inputContainer,
              children: [
                (0, a.jsx)("div", {
                  className: v.emojiButtonContainer,
                  children: (0, a.jsx)(r.Popout, {
                    renderPopout: this.renderEmojiPicker,
                    position: "left",
                    animation: r.Popout.Animation.NONE,
                    align: "top",
                    children: (t, e) => {
                      let { isShown: n } = e;
                      return (0, a.jsx)(c.Z, {
                        ...t,
                        active: n,
                        className: v.emojiButton,
                        tabIndex: 0,
                        renderButtonContents: this.getEmojiButtonRenderer(),
                      });
                    },
                  }),
                }),
                (0, a.jsx)(r.TextInput, {
                  maxLength: N.s,
                  value: e,
                  inputClassName: v.input,
                  placeholder: _.intl.string(_.t["zYR38/"]),
                  onChange: this.handleStatusChange,
                  onKeyPress: this.handleKeyPress,
                  autoFocus: !0,
                }),
                e.length > 0 || null != n
                  ? (0, a.jsx)(r.Button, {
                      focusProps: {
                        offset: { top: 8, bottom: 8, left: -2, right: -2 },
                      },
                      className: v.clearButton,
                      onClick: this.handleClearStatus,
                      look: r.Button.Looks.BLANK,
                      size: r.Button.Sizes.NONE,
                      children: (0, a.jsx)(r.CircleXIcon, {
                        size: "md",
                        color: "currentColor",
                        className: v.clearIcon,
                      }),
                    })
                  : null,
              ],
            }),
          });
        }
        renderClearAfter() {
          let { clearAfter: t } = this.state;
          return (0, a.jsx)(r.FormSection, {
            className: v.formGroup,
            title: _.intl.string(_.t.E45wvL),
            children: (0, a.jsx)(r.SingleSelect, {
              placeholder: _.intl.string(_.t.E45wvL),
              maxVisibleItems: 5,
              value: t,
              options: this.clearAfterOptions,
              onChange: this.handleChangeClearAfter,
            }),
          });
        }
        renderStatusInput() {
          let { status: t } = this.state;
          return (0, a.jsx)(r.FormSection, {
            className: v.formGroup,
            title: _.intl.string(_.t.zOdg0N),
            children: (0, a.jsx)(r.SingleSelect, {
              maxVisibleItems: 4,
              value: t,
              options: I,
              onChange: this.handleChangeStatus,
              renderOptionLabel: O,
            }),
          });
        }
        render() {
          let { transitionState: t, onClose: e } = this.props;
          return (0, a.jsx)(d.Z, {
            ...this.analyticsLocation,
            children: (0, a.jsxs)(r.ModalRoot, {
              transitionState: t,
              className: v.modalRoot,
              "aria-label": _.intl.string(_.t["/UonHB"]),
              children: [
                (0, a.jsxs)(r.ModalHeader, {
                  separator: !1,
                  className: v.headerContainer,
                  children: [
                    (0, a.jsx)("div", { className: v.art }),
                    (0, a.jsx)("div", {
                      className: v.header,
                      children: (0, a.jsx)(r.H, {
                        className: v.headerText,
                        children: _.intl.string(_.t["/UonHB"]),
                      }),
                    }),
                    (0, a.jsx)(r.ModalCloseButton, {
                      onClick: e,
                      className: v.modalCloseButton,
                    }),
                  ],
                }),
                (0, a.jsxs)(r.ModalContent, {
                  children: [
                    this.renderCustomStatusInput(),
                    this.renderClearAfter(),
                    (0, a.jsx)(r.FormDivider, { className: v.formDivider }),
                    this.renderStatusInput(),
                  ],
                }),
                (0, a.jsxs)(r.ModalFooter, {
                  children: [
                    (0, a.jsx)(r.Button, {
                      onClick: this.handleSubmit,
                      children: _.intl.string(_.t.R3BPHx),
                    }),
                    (0, a.jsx)(r.Button, {
                      onClick: e,
                      look: r.Button.Looks.LINK,
                      color: v.cancelButton,
                      children: _.intl.string(_.t["ETE/oK"]),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        constructor(...t) {
          super(...t),
            D(this, "state", {
              emojiInfo:
                null != this.props.customStatus
                  ? this.props.customStatus.emoji
                  : null,
              text:
                null != this.props.customStatus &&
                null != this.props.customStatus.state
                  ? this.props.customStatus.state
                  : "",
              clearAfter: (0, j.Z)(),
              status: (function () {
                let t = p.co.getSetting();
                return I.some((e) => e.value === t) ? t : r.StatusTypes.ONLINE;
              })(),
            }),
            D(this, "handleClearStatus", () => {
              this.setState({ emojiInfo: null, text: "" });
            }),
            D(this, "handleSubmit", (t) => {
              t.preventDefault(), this.handleSaveStatus();
            }),
            D(this, "handleStatusChange", (t) => {
              this.setState({ text: t });
            }),
            D(this, "handleEmojiChange", (t) => {
              if (null == t) return;
              let e =
                null != t.id
                  ? { id: t.id, name: t.name, animated: t.animated }
                  : {
                      id: null,
                      name: t.optionallyDiverseSequence,
                      animated: !1,
                    };
              this.setState({ emojiInfo: e });
            }),
            D(this, "handleChangeClearAfter", (t) => {
              this.setState({ clearAfter: t });
            }),
            D(this, "handleChangeStatus", (t) => {
              this.setState({ status: t });
            }),
            D(this, "handleSaveStatus", () => {
              let { sourceAnalyticsContext: t, onClose: e } = this.props,
                {
                  emojiInfo: n,
                  text: a,
                  clearAfter: l,
                  status: s,
                } = this.state,
                i = p.co.getSetting();
              i !== s && (0, h.Z)(s, i, t), (0, b.Z)(a, n, l, t), e();
            }),
            D(this, "handleKeyPress", (t) => {
              t.which === T.yXg.ENTER && this.handleSaveStatus();
            }),
            D(this, "renderEmojiPicker", (t) => {
              let { closePopout: e } = t,
                { onClose: n } = this.props;
              return (0, a.jsx)(m.Z, {
                closePopout: e,
                onSelectEmoji: (t, n) => {
                  this.handleEmojiChange(t), n && e();
                },
                pickerIntention: x.Hz.STATUS,
                onNavigateAway: n,
              });
            });
        }
      }
      e.default = o.ZP.connectStores(
        [S.Z, f.default],
        () => {
          let t = f.default.getCurrentUser();
          return (
            i()(null != t, "CustomStatusModal: user cannot be null"),
            { customStatus: S.Z.getCustomStatusActivity(), user: t }
          );
        },
        { forwardRef: !0 },
      )(A);
    },
    652831: function (t, e, n) {
      n.d(e, {
        q: function () {
          return l;
        },
      });
      let a = (0, n(818083).B)({
        kind: "user",
        id: "2025-01_user_profile_custom_status_default_duration",
        label: "User Profile Custom Status Default Duration",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Default duration set to Don't Clear",
            config: { enabled: !0 },
          },
        ],
      });
      function l(t) {
        let { location: e, autoTrackExposure: n = !0 } = t;
        return a.getCurrentConfig({ location: e }, { autoTrackExposure: n })
          .enabled;
      }
    },
    58448: function (t, e, n) {
      t.exports = {
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
//# sourceMappingURL=5a238e71f240c99be560.js.map
