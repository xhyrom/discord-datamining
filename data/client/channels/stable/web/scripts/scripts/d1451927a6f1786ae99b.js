"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5863"],
  {
    650455: function (e) {
      e.exports = "/assets/f836b92b3f6efec289a9.png";
    },
    751212: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return z;
          },
        }),
        n(47120),
        n(653041);
      var i,
        s,
        l = n(200651),
        r = n(192379),
        a = n(392711),
        o = n.n(a),
        d = n(913527),
        c = n.n(d),
        u = n(995295),
        h = n(513431),
        m = n(442837),
        g = n(692547),
        x = n(481060),
        S = n(87051),
        p = n(798140),
        N = n(740504),
        v = n(933557),
        j = n(471445),
        C = n(600164),
        f = n(423589),
        E = n(74888),
        b = n(444899),
        _ = n(11352),
        T = n(610617),
        Z = n(777861),
        O = n(131704),
        L = n(592125),
        I = n(324067),
        M = n(650774),
        A = n(430824),
        R = n(699516),
        P = n(9156),
        G = n(594174),
        U = n(823379),
        k = n(63063),
        w = n(621600),
        y = n(981631),
        D = n(969943),
        F = n(388032),
        H = n(777138);
      function B(e, t, n) {
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
      ((s = i || (i = {})).MUTED = "muted"),
        (s.MESSAGE_NOTIFICATIONS = "message_notifications"),
        (s.SUPPRESS_EVERYONE = "suppress_everyone"),
        (s.SUPPRESS_ROLES = "suppress_roles"),
        (s.MOBILE_PUSH = "mobile_push"),
        (s.MUTE_EVENTS = "mute_scheduled_events"),
        (s.NOTIFY_HIGHLIGHTS = "notify_highlights");
      class Y extends r.PureComponent {
        static getDerivedStateFromProps(e, t) {
          let { overrides: n, channelOverridesProp: i } = t;
          return e.channelOverrides !== i
            ? ((n = new Set(n)),
              (0, f.OD)(e.channelOverrides).forEach((e) => n.add(e)),
              { overrides: n, channelOverridesProp: e.channelOverrides })
            : null;
        }
        componentDidUpdate(e, t) {
          let { lastSelected: n } = this.state,
            i = null != n ? this._channelRefs[n] : null;
          if (null != this._scroller && null != i && n !== t.lastSelected) {
            let e = (0, u.findDOMNode)(i);
            if (null != this._scroller && (0, h.k)(e, HTMLElement)) {
              var s;
              null === (s = this._scroller) ||
                void 0 === s ||
                s.scrollIntoViewNode({
                  node: e,
                  animate: !0,
                  padding: 20,
                  callback: () => this.setState({ lastSelected: null }),
                }),
                i.highlight();
            }
          }
          if (this.props.channelOverrides !== e.channelOverrides) {
            let { overrides: e } = this.state;
            (e = new Set(e)),
              (0, f.OD)(this.props.channelOverrides).forEach((t) => e.add(t)),
              this.setState({ overrides: e });
          }
        }
        handleCheckboxChange(e, t, n) {
          S.Z.updateGuildNotificationSettings(
            this.props.guildId,
            { [e]: t },
            n,
          );
        }
        handleRadioChange(e, t, n) {
          let { value: i } = t;
          S.Z.updateGuildNotificationSettings(
            this.props.guildId,
            { [e]: i },
            n,
          );
        }
        renderHeader() {
          let { guild: e } = this.props;
          return null == e
            ? null
            : (0, l.jsxs)(x.ModalHeader, {
                className: H.modalHeader,
                children: [
                  (0, l.jsxs)(C.Z.Child, {
                    children: [
                      (0, l.jsx)(x.Heading, {
                        variant: "heading-lg/semibold",
                        children: F.intl.string(F.t.h850Sk),
                      }),
                      (0, l.jsx)(x.Text, {
                        variant: "text-md/normal",
                        className: H.guildName,
                        children: e.name,
                      }),
                    ],
                  }),
                  (0, l.jsx)(C.Z.Child, {
                    grow: 0,
                    children: (0, l.jsx)(x.ModalCloseButton, {
                      onClick: this.props.onClose,
                    }),
                  }),
                ],
              });
        }
        renderFooter() {
          return (0, l.jsx)(x.ModalFooter, {
            children: (0, l.jsx)(x.Button, {
              onClick: this.props.onClose,
              children: F.intl.string(F.t.i4jeWV),
            }),
          });
        }
        renderMute() {
          var e;
          let { muted: t, muteConfig: n, guild: i } = this.props,
            s =
              null !== (e = null == n ? void 0 : n.selected_time_window) &&
              void 0 !== e
                ? e
                : D.Oe.ALWAYS;
          return null == i
            ? null
            : (0, l.jsxs)(x.FormItem, {
                className: H.largeSpacing,
                children: [
                  (0, l.jsx)(x.FormSwitch, {
                    hideBorder: !0,
                    value: t,
                    onChange: (e) =>
                      this.handleCheckboxChange("muted", e, w.UE.muted(e)),
                    note: F.intl.string(F.t["8wbTQ0"]),
                    children: F.intl.format(F.t["J+7D9P"], { name: i.name }),
                  }),
                  t
                    ? (0, l.jsxs)(C.Z, {
                        className: H.spacing,
                        align: C.Z.Align.CENTER,
                        children: [
                          (0, l.jsxs)(C.Z, {
                            direction: C.Z.Direction.VERTICAL,
                            className: H.__invalid_muteUntilTextWrapper,
                            children: [
                              (0, l.jsx)(x.FormTitle, {
                                tag: "h3",
                                className: H.muteUntilTitle,
                                children: F.intl.string(F.t.Ztu2Ym),
                              }),
                              (0, l.jsx)(Z.Z, {
                                className: H.muteUntilText,
                                muteConfig: n,
                              }),
                            ],
                          }),
                          (0, l.jsx)(x.SingleSelect, {
                            className: H.muteTimeSelector,
                            options: (0, f.W9)(),
                            value: s,
                            onChange: this.handleSelectMuteTime,
                          }),
                        ],
                      })
                    : null,
                  (0, l.jsx)(x.FormDivider, {}),
                ],
              });
        }
        renderServerSettings() {
          var e;
          let {
            messageNotifications: t,
            muted: n,
            memberCount: i,
          } = this.props;
          return (0, l.jsxs)("div", {
            className: H.spacing,
            children: [
              (0, l.jsx)(x.FormItem, {
                title: F.intl.string(F.t.lprV7e),
                className: H.largeSpacing,
                children: (0, l.jsx)(x.RadioGroup, {
                  disabled: n,
                  value: t,
                  onChange: (e) =>
                    this.handleRadioChange(
                      "message_notifications",
                      e,
                      w.UE.notifications(e.value),
                    ),
                  options:
                    ((e = i),
                    [
                      {
                        name: F.intl.string(F.t["n/bTaW"]),
                        value: y.bL.ALL_MESSAGES,
                        desc:
                          null != e && e >= y.qWG
                            ? F.intl.string(F.t.Dh5p5u)
                            : null,
                      },
                      {
                        name: F.intl.format(F.t.L2hmY2, {}),
                        value: y.bL.ONLY_MENTIONS,
                      },
                      {
                        name: F.intl.string(F.t.CtVGyc),
                        value: y.bL.NO_MESSAGES,
                      },
                    ]),
                }),
              }),
              (0, l.jsx)(x.FormDivider, {}),
            ],
          });
        }
        renderNotificationOptions() {
          let {
            suppressEveryone: e,
            suppressRoles: t,
            mobilePush: n,
            muted: i,
            muteEvents: s,
            notifyHighlights: r,
            guildId: a,
          } = this.props;
          return (0, l.jsxs)(x.FormItem, {
            className: H.largeSpacing,
            children: [
              (0, l.jsx)(x.FormSwitch, {
                onChange: (e) =>
                  this.handleCheckboxChange(
                    "suppress_everyone",
                    e,
                    w.UE.suppressEveryone(e),
                  ),
                value: e,
                children: F.intl.format(F.t.OWiWAg, {}),
              }),
              (0, l.jsx)(x.FormSwitch, {
                onChange: (e) =>
                  this.handleCheckboxChange(
                    "suppress_roles",
                    e,
                    w.UE.suppressRoles(e),
                  ),
                value: t,
                children: F.intl.string(F.t["O/QdoK"]),
              }),
              (0, l.jsx)(x.FormSwitch, {
                onChange: (e) => {
                  S.Z.updateGuildNotificationSettings(
                    a,
                    { notify_highlights: e ? y.gLR.DISABLED : y.gLR.ENABLED },
                    w.UE.highlights(!e),
                  );
                },
                value: i || r === y.gLR.DISABLED,
                disabled: i,
                note: (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(x.Text, {
                      variant: "text-sm/normal",
                      children: F.intl.string(F.t["Vw/Xn5"]),
                    }),
                    (0, l.jsx)("div", {
                      className: H.highlightsLink,
                      children: (0, l.jsx)(x.Anchor, {
                        href: k.Z.getArticleURL(y.BhN.HIGHLIGHTS),
                        children: F.intl.string(F.t.PRBn9P),
                      }),
                    }),
                  ],
                }),
                children: (0, l.jsx)(l.Fragment, {
                  children: F.intl.string(F.t.gPuteH),
                }),
              }),
              (0, l.jsx)(x.FormSwitch, {
                value: s,
                onChange: (e) =>
                  this.handleCheckboxChange(
                    "mute_scheduled_events",
                    e,
                    w.UE.mutedEvents(e),
                  ),
                children: F.intl.string(F.t.ONG3Y2),
              }),
              (0, l.jsx)(x.FormSwitch, {
                value: !i && n,
                disabled: i,
                onChange: (e) =>
                  this.handleCheckboxChange(
                    "mobile_push",
                    e,
                    w.UE.mobilePush(e),
                  ),
                children: F.intl.string(F.t["h1DL6+"]),
              }),
            ],
          });
        }
        renderCustomNotificationSoundOptions() {
          let {
            shouldShowCustomNotificationSounds: e,
            guildId: t,
            onClose: n,
          } = this.props;
          if (!!e)
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(T.Z, { guildId: t, onClose: n }),
                (0, l.jsx)(x.FormDivider, {
                  className: H.customNotificationSoundsDivider,
                }),
              ],
            });
        }
        renderOverrideSelect() {
          let { channels: e, categories: t } = this.props,
            n = o()(e)
              .filter((e) => {
                let { channel: n } = e;
                return (
                  n.type !== y.d4z.GUILD_CATEGORY ||
                  (null != t[n.id] && t[n.id].length > 0)
                );
              })
              .map((e) => {
                let { channel: t } = e;
                return { value: t.id, label: (0, v.F6)(t, G.default, R.Z) };
              })
              .value();
          return (0, l.jsxs)(x.FormItem, {
            title: F.intl.string(F.t.O4TIvr),
            className: H.largeSpacing,
            children: [
              (0, l.jsx)(x.FormText, {
                type: x.FormText.Types.DESCRIPTION,
                className: H.smallSpacing,
                children: F.intl.string(F.t["2Y9ZfH"]),
              }),
              (0, l.jsx)(x.SearchableSelect, {
                value: y.lds,
                placeholder: F.intl.string(F.t["Z+oF8v"]),
                renderOptionLabel: this.renderOptionLabel,
                options: n,
                onChange: this.handleSelectChange,
              }),
            ],
          });
        }
        renderChannelNotifications() {
          let {
              channelOverrides: e,
              muted: t,
              channels: n,
              messageNotifications: i,
              categories: s,
              checkboxColor: r,
            } = this.props,
            { overrides: a } = this.state,
            o = n
              .map((n) => {
                let { channel: o } = n;
                if (!a.has(o.id) || (null != s[o.id] && 0 === s[o.id].length))
                  return null;
                let d = e[o.id];
                return (0, l.jsx)(
                  b.f,
                  {
                    ref: (e) => {
                      this._channelRefs[o.id] = e;
                    },
                    channel: o,
                    guildMuted: t,
                    muted: null != d && (0, p.m$)(d),
                    messageNotifications:
                      null != d ? d.message_notifications : null,
                    guildMessageNotifications: i,
                    onDelete: this.handleDeleteOverride,
                    checkboxColor: r,
                  },
                  o.id,
                );
              })
              .filter(U.lm);
          return (
            (0 === a.size || 0 === o.length) &&
              o.push(
                (0, l.jsx)(
                  "div",
                  {
                    className: H.overridePlaceholder,
                    children: (0, l.jsx)(x.Text, {
                      className: H.overrideHeader,
                      variant: "text-sm/semibold",
                      children: F.intl.string(F.t["2Y9ZfH"]),
                    }),
                  },
                  "placeholder",
                ),
              ),
            (0, l.jsxs)("div", {
              className: H.overrideList,
              children: [
                (0, l.jsxs)(C.Z, {
                  children: [
                    (0, l.jsx)(x.Heading, {
                      variant: "eyebrow",
                      className: H.headerName,
                      children: F.intl.string(F.t.uShwWl),
                    }),
                    (0, l.jsx)(x.Heading, {
                      variant: "eyebrow",
                      className: H.headerOption,
                      children: F.intl.string(F.t.e29Z19),
                    }),
                    (0, l.jsx)(x.Heading, {
                      variant: "eyebrow",
                      className: H.headerOption,
                      children: F.intl.string(F.t.DD6gNT),
                    }),
                    (0, l.jsx)(x.Heading, {
                      variant: "eyebrow",
                      className: H.headerOption,
                      children: F.intl.string(F.t.CtVGyc),
                    }),
                    (0, l.jsx)(x.Heading, {
                      variant: "eyebrow",
                      className: H.headerOption,
                      children: (0, l.jsx)(x.Tooltip, {
                        text: F.intl.string(F.t["8wbTQ0"]),
                        position: "bottom",
                        children: (e) =>
                          (0, l.jsx)("span", {
                            ...e,
                            children: F.intl.string(F.t.sWmtIy),
                          }),
                      }),
                    }),
                  ],
                }),
                o,
              ],
            })
          );
        }
        render() {
          return (0, l.jsxs)(x.ModalRoot, {
            "aria-label": F.intl.string(F.t.h850Sk),
            size: x.ModalSize.MEDIUM,
            transitionState: this.props.transitionState,
            children: [
              this.renderHeader(),
              (0, l.jsxs)(x.ModalContent, {
                scrollerRef: this.setScrollerRef,
                children: [
                  this.renderMute(),
                  this.renderServerSettings(),
                  this.renderCustomNotificationSoundOptions(),
                  this.renderNotificationOptions(),
                  this.renderOverrideSelect(),
                  this.renderChannelNotifications(),
                ],
              }),
              this.renderFooter(),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            B(this, "_scroller", null),
            B(this, "_channelRefs", {}),
            B(this, "state", {
              overrides: new Set((0, f.OD)(this.props.channelOverrides)),
              channelOverridesProp: this.props.channelOverrides,
              lastSelected: null,
            }),
            B(this, "setScrollerRef", (e) => {
              this._scroller = e;
            }),
            B(this, "handleSelectChange", (e) => {
              if (null == e) return;
              let { overrides: t } = this.state;
              (t = new Set(t)).add(e),
                this.setState({ overrides: t, lastSelected: e });
            }),
            B(this, "handleSelectMuteTime", (e) => {
              let t = e > 0 ? c()().add(e, "second").toISOString() : null;
              S.Z.updateGuildNotificationSettings(
                this.props.guildId,
                {
                  muted: !0,
                  mute_config: { selected_time_window: e, end_time: t },
                },
                w.ZB.Muted,
              );
            }),
            B(this, "handleDeleteOverride", (e) => {
              let { overrides: t } = this.state;
              (t = new Set(t)).delete(e), this.setState({ overrides: t });
            }),
            B(this, "renderOptionLabel", (e) => {
              let t = L.Z.getChannel(e.value);
              if (null == t) return e.label;
              let n = L.Z.getChannel(t.parent_id),
                i = null != n ? n.name : null;
              return (0, l.jsx)(x.IconSelectOption, {
                icon: (0, j.KS)(t),
                title: e.label,
                subtitle: i,
              });
            });
        }
      }
      function W(e) {
        let { guildId: t, ...n } = e,
          i = (0, m.cj)([I.Z, A.Z, M.Z, P.ZP], () => {
            let e = I.Z.getCategories(t);
            return {
              guildId: t,
              categories: e,
              guild: A.Z.getGuild(t),
              memberCount: M.Z.getMemberCount(t),
              suppressEveryone: P.ZP.isSuppressEveryoneEnabled(t),
              suppressRoles: P.ZP.isSuppressRolesEnabled(t),
              muteEvents: P.ZP.isMuteScheduledEventsEnabled(t),
              mobilePush: P.ZP.isMobilePushEnabled(t),
              muted: P.ZP.isMuted(t),
              muteConfig: P.ZP.getMuteConfig(t),
              messageNotifications: P.ZP.getMessageNotifications(t),
              channelOverrides: P.ZP.getChannelOverrides(t),
              notifyHighlights: P.ZP.getNotifyHighlights(t),
            };
          }),
          s = (0, N.Z)(i.categories._categories, i.categories, (e) => {
            let {
              channel: { type: t },
            } = e;
            return (0, O.r8)(t) || t === y.d4z.GUILD_CATEGORY;
          }),
          r = _.Y.useExperiment(
            { location: "connected_notification_settings" },
            { autoTrackExposure: !0 },
          ).enabled,
          a = (0, x.useToken)(g.Z.unsafe_rawColors.GREEN_360).hex();
        return (0, l.jsx)(Y, {
          ...i,
          channels: s,
          ...n,
          shouldShowCustomNotificationSounds: r,
          checkboxColor: a,
        });
      }
      function z(e) {
        let { scrollToChannels: t, ...n } = e;
        return (0, f.Mn)("NotificationSettingsModal")
          ? (0, l.jsx)(E.Z, { ...n, scrollToChannels: t })
          : (0, l.jsx)(W, { ...n });
      }
    },
    732760: function (e, t, n) {
      n.d(t, {
        d: function () {
          return r;
        },
        y: function () {
          return a;
        },
      });
      var i = n(981631),
        s = n(490897),
        l = n(388032);
      let r = (e) => [
          { label: l.intl.string(l.t["HVah//"]), value: i.bL.ALL_MESSAGES },
          { label: l.intl.string(l.t["tu+ZWF"]), value: i.bL.ONLY_MENTIONS },
          { label: l.intl.string(l.t.X4wWUl), value: i.bL.NO_MESSAGES },
        ],
        a = (e) => [
          { label: l.intl.string(l.t["HVah//"]), value: s.i.ALL_MESSAGES },
          {
            value: s.i.ONLY_MENTIONS,
            label: l.intl.string(l.t["tu+ZWF"]),
            disabled:
              (null == e ? void 0 : e.notificationSetting) ===
              i.bL.ALL_MESSAGES,
          },
        ];
    },
    958648: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(192379);
      function s(e, t) {
        let n = i.useRef(e);
        i.useEffect(() => {
          e.length > n.current.length && t(), (n.current = e);
        }, [e, t]);
      }
    },
    413684: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(442837),
        l = n(481060),
        r = n(87051),
        a = n(9156),
        o = n(621600),
        d = n(981631),
        c = n(388032),
        u = n(773307);
      function h(e) {
        let { guildId: t } = e,
          n = (0, s.cj)([a.ZP], () => ({
            highligths: a.ZP.getNotifyHighlights(t),
            mobilePush: a.ZP.isMobilePushEnabled(t),
            suppressRoles: a.ZP.isSuppressRolesEnabled(t),
            suppressEveryone: a.ZP.isSuppressEveryoneEnabled(t),
            muteScheduledEvents: a.ZP.isMuteScheduledEventsEnabled(t),
          })),
          h = r.Z.updateGuildNotificationSettings;
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(m, {
              value: n.suppressEveryone,
              title: c.intl.format(c.t.OWiWAg, {}),
              onChange: (e) =>
                h(t, { suppress_everyone: e }, o.UE.suppressEveryone(e)),
            }),
            (0, i.jsx)(m, {
              value: n.suppressRoles,
              title: c.intl.string(c.t["O/QdoK"]),
              onChange: (e) =>
                h(t, { suppress_roles: e }, o.UE.suppressRoles(e)),
            }),
            (0, i.jsx)(m, {
              title: (0, i.jsxs)("div", {
                className: u.advanceSettingTitle,
                children: [
                  c.intl.string(c.t.gPuteH),
                  (0, i.jsx)(l.Tooltip, {
                    text: c.intl.string(c.t["Vw/Xn5"]),
                    children: (e) => {
                      let { onMouseEnter: t, onMouseLeave: n } = e;
                      return (0, i.jsx)(l.CircleInformationIcon, {
                        size: "custom",
                        width: 14,
                        height: 14,
                        onMouseEnter: t,
                        onMouseLeave: n,
                        color: l.tokens.colors.ICON_MUTED,
                        className: u.settingTitleIcon,
                      });
                    },
                  }),
                ],
              }),
              value: n.highligths === d.gLR.ENABLED,
              onChange: (e) =>
                h(
                  t,
                  { notify_highlights: e ? d.gLR.ENABLED : d.gLR.DISABLED },
                  o.UE.highlights(e),
                ),
            }),
            (0, i.jsx)(m, {
              value: n.muteScheduledEvents,
              title: c.intl.string(c.t.ONG3Y2),
              onChange: (e) =>
                h(t, { mute_scheduled_events: e }, o.UE.mutedEvents(e)),
            }),
            (0, i.jsx)(m, {
              value: n.mobilePush,
              title: c.intl.string(c.t["h1DL6+"]),
              onChange: (e) => h(t, { mobile_push: e }, o.UE.mobilePush(e)),
            }),
          ],
        });
      }
      function m(e) {
        return (0, i.jsx)(l.FormSwitch, {
          hideBorder: !0,
          className: u.advanceSetting,
          value: e.value,
          onChange: e.onChange,
          note: e.subtitle,
          children: e.title,
        });
      }
    },
    298812: function (e, t, n) {
      n(47120);
      var i = n(200651),
        s = n(192379),
        l = n(120356),
        r = n.n(l),
        a = n(442837),
        o = n(692547),
        d = n(481060),
        c = n(239091),
        u = n(87051),
        h = n(225433),
        m = n(933557),
        g = n(775666),
        x = n(471445),
        S = n(592125),
        p = n(324067),
        N = n(699516),
        v = n(9156),
        j = n(594174),
        C = n(823379),
        f = n(621600),
        E = n(423589),
        b = n(221259),
        _ = n(113449),
        T = n(686660),
        Z = n(958648),
        O = n(569658),
        L = n(981631),
        I = n(388032),
        M = n(532868);
      function A(e) {
        let { channel: t, categories: n } = e,
          l = (0, d.useToken)(o.Z.unsafe_rawColors.GREEN_360).hex(),
          u = (0, a.e7)([S.Z], () =>
            S.Z.getChannel(null == t ? void 0 : t.parent_id),
          ),
          p = (0, b.ZA)(t),
          [v, C] = s.useState(!1);
        if (null == t) return null;
        let f = I.intl.string(I.t.uIzfCA),
          E = (0, x.KS)(t);
        t.type === L.d4z.GUILD_CATEGORY &&
        null != t.guild_id &&
        "" !== t.guild_id
          ? (f = I.intl.formatToPlainString(I.t["2KzH8/"], {
              num: null != n[t.id] ? n[t.id].length : 0,
            }))
          : null != u &&
            (f = I.intl.formatToPlainString(I.t.L1zJgY, {
              categoryName: (0, m.F6)(u, j.default, N.Z),
            }));
        let _ = v ? T.s8.CUSTOM : p.preset;
        return (0, i.jsx)("div", {
          children: (0, i.jsxs)("div", {
            className: r()(M.row, M.channel),
            children: [
              (0, i.jsxs)("div", {
                className: r()(M.rowName, M.modColor),
                children: [
                  null != E
                    ? (0, i.jsx)(E, {
                        size: "custom",
                        color: "currentColor",
                        height: 20,
                        width: 20,
                        className: M.icon,
                      })
                    : null,
                  (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        className: M.modColor,
                        children: (0, m.F6)(t, j.default, N.Z),
                      }),
                      (0, i.jsx)(d.Text, {
                        variant: "text-xs/medium",
                        className: M.modColor,
                        children: f,
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: M.rowOption,
                children: (0, i.jsx)("div", {
                  children: (0, i.jsx)(d.Checkbox, {
                    color: l,
                    shape: d.Checkbox.Shapes.ROUND,
                    type: d.Checkbox.Types.INVERTED,
                    value: _ === T.s8.ALL_MESSAGES,
                    onChange: () => (
                      (0, b._m)(t.guild_id, t.id, T.s8.ALL_MESSAGES), C(!1)
                    ),
                  }),
                }),
              }),
              (0, i.jsx)("div", {
                className: M.rowOption,
                children: (0, i.jsx)("div", {
                  children: (0, i.jsx)(d.Checkbox, {
                    color: l,
                    shape: d.Checkbox.Shapes.ROUND,
                    type: d.Checkbox.Types.INVERTED,
                    value: _ === T.s8.MENTIONS,
                    onChange: () => (
                      (0, b._m)(t.guild_id, t.id, T.s8.MENTIONS), C(!1)
                    ),
                  }),
                }),
              }),
              (0, i.jsx)("div", {
                className: M.rowOption,
                children: (0, i.jsx)("div", {
                  children: (0, i.jsx)(d.Checkbox, {
                    color: l,
                    shape: d.Checkbox.Shapes.ROUND,
                    type: d.Checkbox.Types.INVERTED,
                    value: _ === T.s8.NOTHING,
                    onChange: () => (
                      (0, b._m)(t.guild_id, t.id, T.s8.NOTHING), C(!1)
                    ),
                  }),
                }),
              }),
              (0, i.jsx)("div", {
                className: M.rowOption,
                children: (0, i.jsx)("div", {
                  children: (0, i.jsx)(d.Checkbox, {
                    onClick: (e) => {
                      (0, c.vq)(e, () =>
                        (0, i.jsx)(d.Menu, {
                          navId: "ChannelNotificationCustomSettingsItems",
                          "aria-label": I.intl.string(I.t.kMdneX),
                          onClose: () => {},
                          onSelect: () => {},
                          children: (0, g.T5)(t, () => C(!1)),
                        }),
                      );
                    },
                    color: l,
                    shape: d.Checkbox.Shapes.ROUND,
                    type: d.Checkbox.Types.INVERTED,
                    value: _ === T.s8.CUSTOM,
                    onChange: () => C(!0),
                  }),
                }),
              }),
              (0, i.jsx)(h.Z, {
                onClick: () => (0, b.JK)(t.guild_id, t.id),
                className: M.removeButton,
              }),
            ],
          }),
        });
      }
      t.Z = s.forwardRef(function (e, t) {
        let { guildId: n, requestScrollToBottom: s } = e,
          l = (0, a.Wu)([S.Z, v.ZP], () =>
            (0, E.OD)(v.ZP.getChannelOverrides(n), {
              ignoreMute: !0,
              ignoreUnreadSetting: !1,
              ignoreNotificationSetting: !1,
            })
              .map((e) => S.Z.getChannel(e))
              .filter(C.lm),
          );
        (0, Z.Z)(l, () => s());
        let r = (0, a.e7)([p.Z], () => p.Z.getCategories(n)),
          o = l.map((e, t) =>
            (0, i.jsxs)(
              "div",
              {
                className: M.channelRow,
                children: [
                  (0, i.jsx)(A, { channel: e, categories: r }, e.id),
                  t < l.length - 1 &&
                    (0, i.jsx)("div", { className: M.separator }),
                ],
              },
              e.id,
            ),
          );
        return (0, i.jsxs)("div", {
          ref: t,
          children: [
            (0, i.jsx)(O.Z, {
              guildId: n,
              onSelected: (e) => {
                if (null != l.find((t) => t.id === e)) return;
                let t = S.Z.getChannel(e);
                null != t &&
                  u.Z.updateChannelOverrideSettings(
                    n,
                    e,
                    {
                      muted: !1,
                      message_notifications:
                        v.ZP.resolvedMessageNotifications(t),
                      flags: (0, _.pq)(
                        v.ZP.getChannelIdFlags(t.guild_id, t.id),
                        v.ZP.resolveUnreadSetting(t),
                      ),
                    },
                    f.ZB.OverrideCreated,
                  );
              },
            }),
            o.length > 0 &&
              (0, i.jsxs)("div", {
                className: M.table,
                children: [
                  (0, i.jsxs)("div", {
                    className: M.row,
                    children: [
                      (0, i.jsx)(d.Text, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: M.rowName,
                        children: I.intl.string(I.t.uShwWl),
                      }),
                      (0, i.jsx)(d.Text, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: M.rowOption,
                        children: I.intl.string(I.t.hZrr6u),
                      }),
                      (0, i.jsx)(d.Text, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: M.rowOption,
                        children: I.intl.string(I.t.y59NJi),
                      }),
                      (0, i.jsx)(d.Text, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: M.rowOption,
                        children: I.intl.string(I.t["pGn/bG"]),
                      }),
                      (0, i.jsx)(d.Text, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: M.rowOption,
                        children: I.intl.string(I.t["32yow8"]),
                      }),
                    ],
                  }),
                  o.length > 0 &&
                    (0, i.jsx)("div", { className: M.channels, children: o }),
                ],
              }),
          ],
        });
      });
    },
    569658: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(392711),
        l = n.n(s),
        r = n(442837),
        a = n(481060),
        o = n(740504),
        d = n(933557),
        c = n(471445),
        u = n(131704),
        h = n(592125),
        m = n(324067),
        g = n(699516),
        x = n(594174),
        S = n(981631),
        p = n(388032),
        N = n(539673);
      let v = (e) => {
        let {
          channel: { type: t },
        } = e;
        return (0, u.r8)(t) || t === S.d4z.GUILD_CATEGORY;
      };
      function j(e) {
        var t;
        let { guildId: n, onSelected: s } = e;
        let { channels: u, categories: j } =
            ((t = n),
            (0, r.cj)([m.Z], () => {
              let e = m.Z.getCategories(t);
              return { channels: (0, o.Z)(e._categories, e, v), categories: e };
            })),
          C = l()(u)
            .filter((e) => {
              let { channel: t } = e;
              return (
                t.type !== S.d4z.GUILD_CATEGORY ||
                (null != j[t.id] && j[t.id].length > 0)
              );
            })
            .map((e) => {
              let { channel: t } = e;
              return { value: t.id, label: (0, d.F6)(t, x.default, g.Z) };
            })
            .value();
        return (0, i.jsxs)(a.FormItem, {
          children: [
            (0, i.jsx)(a.FormText, {
              type: a.FormText.Types.DESCRIPTION,
              children: p.intl.string(p.t["2Y9ZfH"]),
            }),
            (0, i.jsx)("div", {
              className: N.input,
              children: (0, i.jsx)(a.SearchableSelect, {
                value: S.lds,
                onChange: s,
                options: C,
                renderOptionLabel: (e) => {
                  let t = h.Z.getChannel(e.value);
                  if (null == t) return e.label;
                  let n = h.Z.getChannel(t.parent_id),
                    s = null != n ? n.name : null;
                  return (0, i.jsx)(a.IconSelectOption, {
                    icon: (0, c.KS)(t),
                    title: e.label,
                    subtitle: s,
                  });
                },
                placeholder: p.intl.string(p.t["Z+oF8v"]),
              }),
            }),
          ],
        });
      }
    },
    74888: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j;
        },
      });
      var i = n(200651),
        s = n(192379),
        l = n(120356),
        r = n.n(l),
        a = n(481060),
        o = n(493773),
        d = n(11352),
        c = n(610617),
        u = n(413684),
        h = n(298812),
        m = n(200115),
        g = n(406205),
        x = n(388032),
        S = n(752863);
      function p(e) {
        return (0, i.jsx)("div", {
          className: S.sectionHeader,
          children: (0, i.jsx)(a.Heading, {
            variant: "text-xs/bold",
            className: S.sectionHeaderTitle,
            color: "text-muted",
            children: e.title,
          }),
        });
      }
      function N(e) {
        return (0, i.jsxs)("div", {
          children: [
            null != e.title && (0, i.jsx)(p, { title: e.title }),
            (0, i.jsx)("div", {
              className: r()(S.sectionContent, {
                [S.sectionContentPadding]: !0 !== e.noPadding,
              }),
              children: e.children,
            }),
          ],
        });
      }
      function v(e) {
        let { onClose: t } = e;
        return (0, i.jsxs)(a.ModalHeader, {
          className: S.header,
          children: [
            (0, i.jsxs)("div", {
              className: S.headerLeft,
              children: [
                (0, i.jsx)(a.BellIcon, {
                  size: "md",
                  color: "currentColor",
                  className: S.headerBell,
                }),
                (0, i.jsx)(a.Heading, {
                  variant: "heading-lg/semibold",
                  children: x.intl.string(x.t.h850Sk),
                }),
              ],
            }),
            (0, i.jsx)(a.ModalCloseButton, { onClick: t }),
          ],
        });
      }
      function j(e) {
        let t = s.useRef(null),
          n = d.Y.useExperiment(
            { location: "notification_settings_modal_redesign" },
            { autoTrackExposure: !0 },
          ).enabled,
          l = s.useRef(null);
        return (
          (0, o.N)(() => {
            let n = setTimeout(() => {
              e.scrollToChannels &&
                null != t.current &&
                null != l.current &&
                t.current.scrollIntoViewNode({
                  node: l.current,
                  shouldScrollToStart: !0,
                  padding: 40,
                });
            }, 1e3);
            return () => clearTimeout(n);
          }),
          (0, i.jsxs)(a.ModalRoot, {
            size: a.ModalSize.MEDIUM,
            transitionState: e.transitionState,
            "aria-label": x.intl.string(x.t.h850Sk),
            children: [
              (0, i.jsx)(v, { onClose: e.onClose }),
              (0, i.jsxs)(a.ModalContent, {
                className: S.content,
                scrollerRef: t,
                children: [
                  (0, i.jsx)(N, {
                    children: (0, i.jsx)(m.Z, { guildId: e.guildId }),
                  }),
                  (0, i.jsx)(N, {
                    title: x.intl.string(x.t["R9Ej9/"]),
                    noPadding: !0,
                    children: (0, i.jsx)(g.Z, { guildId: e.guildId }),
                  }),
                  n &&
                    (0, i.jsx)(N, {
                      children: (0, i.jsx)(c.Z, {
                        onClose: e.onClose,
                        guildId: e.guildId,
                        isRedesign: !0,
                      }),
                    }),
                  (0, i.jsx)(N, {
                    title: x.intl.string(x.t["31DySk"]),
                    children: (0, i.jsx)(u.Z, { guildId: e.guildId }),
                  }),
                  (0, i.jsx)(p, { title: x.intl.string(x.t.JrySi4) }),
                  (0, i.jsx)(h.Z, {
                    guildId: e.guildId,
                    requestScrollToBottom: () => {
                      null != t &&
                        null != t.current &&
                        t.current.scrollToBottom({ animate: !0 });
                    },
                    ref: l,
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    200115: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(913527),
        l = n.n(s),
        r = n(399606),
        a = n(481060),
        o = n(87051),
        d = n(430824),
        c = n(9156),
        u = n(621600),
        h = n(423589),
        m = n(969943),
        g = n(388032),
        x = n(401387);
      function S(e) {
        var t;
        let { guildId: n } = e,
          s = (0, r.e7)([d.Z], () => d.Z.getGuild(n)),
          S = (0, r.e7)([c.ZP], () => c.ZP.isMuted(n)),
          p = (0, r.e7)([c.ZP], () => c.ZP.getMuteConfig(n));
        return null == s
          ? null
          : (0, i.jsxs)(a.FormItem, {
              children: [
                (0, i.jsx)(a.FormSwitch, {
                  hideBorder: !0,
                  value: S,
                  onChange: (e) => {
                    o.Z.updateGuildNotificationSettings(
                      n,
                      { muted: e },
                      u.UE.muted(e),
                    );
                  },
                  style: { marginBottom: 0 },
                  note: g.intl.string(g.t.IngcUl),
                  children: g.intl.format(g.t["J+7D9P"], { name: s.name }),
                }),
                S &&
                  (0, i.jsxs)("div", {
                    className: x.mutedConfig,
                    children: [
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)(a.FormTitle, {
                            tag: "h3",
                            children: g.intl.string(g.t.Ztu2Ym),
                          }),
                          (0, i.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: (function (e) {
                              return null == e || null == e.end_time
                                ? null
                                : g.intl.formatToPlainString(g.t.j7h4AA, {
                                    endTime: new Date(
                                      e.end_time,
                                    ).toLocaleString(g.intl.currentLocale, {
                                      month: "numeric",
                                      day: "numeric",
                                      hour: "numeric",
                                      minute: "2-digit",
                                    }),
                                  });
                            })(p),
                          }),
                        ],
                      }),
                      (0, i.jsx)(a.SingleSelect, {
                        onChange: (e) => {
                          let t =
                            e > 0 ? l()().add(e, "second").toISOString() : null;
                          o.Z.updateGuildNotificationSettings(
                            n,
                            {
                              mute_config: {
                                selected_time_window: e,
                                end_time: t,
                              },
                              muted: !0,
                            },
                            u.ZB.Muted,
                          );
                        },
                        options: (0, h.W9)(),
                        value:
                          null !==
                            (t = null == p ? void 0 : p.selected_time_window) &&
                          void 0 !== t
                            ? t
                            : m.Oe.ALWAYS,
                      }),
                    ],
                  }),
              ],
            });
      }
    },
    406205: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      }),
        n(47120),
        n(789020);
      var i = n(200651),
        s = n(192379),
        l = n(120356),
        r = n.n(l),
        a = n(399606),
        o = n(481060),
        d = n(87051),
        c = n(9156),
        u = n(621600),
        h = n(113449),
        m = n(748756),
        g = n(732760),
        x = n(686660),
        S = n(981631),
        p = n(490897),
        N = n(526761),
        v = n(388032),
        j = n(249704),
        C = n(650455);
      let f = () => [
        { value: x.s8.ALL_MESSAGES, name: v.intl.string(v.t.hZrr6u) },
        { value: x.s8.MENTIONS, name: v.intl.string(v.t.y59NJi) },
        { value: x.s8.NOTHING, name: v.intl.string(v.t["pGn/bG"]) },
        { value: x.s8.CUSTOM, name: v.intl.string(v.t["32yow8"]) },
      ];
      function E(e) {
        let { guildId: t } = e,
          n = (0, a.e7)([c.ZP], () => c.ZP.getGuildFlags(t)),
          l = (0, a.e7)([c.ZP], () => {
            let e = c.ZP.getGuildUnreadSetting(t),
              n = c.ZP.getMessageNotifications(t);
            return e === p.i.UNSET
              ? n === S.bL.ALL_MESSAGES
                ? p.i.ALL_MESSAGES
                : p.i.ONLY_MENTIONS
              : e;
          }),
          r = (0, a.e7)([c.ZP], () => c.ZP.getMessageNotifications(t)),
          [C, E] = (0, s.useState)(!1),
          T = C ? x.s8.CUSTOM : (0, x.gs)(l, r),
          Z = (e) => {
            if (e === x.s8.CUSTOM) {
              E(!0);
              return;
            }
            E(!1), (0, m.V)(t, e);
          };
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)("div", {
              className: j.segmentedControlsContainer,
              children: (0, i.jsx)(o.SegmentedControl, {
                value: T,
                options: f(),
                onChange: (e) => {
                  let { value: t } = e;
                  return Z(t);
                },
                className: j.segmentedControl,
                look: "pill",
              }),
            }),
            (0, i.jsx)("div", { className: j.presetSeparator }),
            (0, i.jsxs)("div", {
              className: j.customPresetsContainer,
              children: [
                (0, i.jsxs)("div", {
                  className: j.grid,
                  children: [
                    (0, i.jsx)(b, { unreadSetting: l }),
                    (0, i.jsx)(_, { notificationSetting: r }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: j.grid,
                  children: [
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)(o.Text, {
                          variant: "text-sm/semibold",
                          color: "header-primary",
                          children: v.intl.string(v.t.Tqd1AQ),
                        }),
                        (0, i.jsx)(o.Text, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: v.intl.string(v.t.RpQgm5),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)(o.Text, {
                          variant: "text-sm/semibold",
                          color: "header-primary",
                          children: v.intl.string(v.t["1m22ZG"]),
                        }),
                        (0, i.jsx)(o.Text, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: v.intl.string(v.t["4bP2ZW"]),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: j.grid,
                  children: [
                    (0, i.jsx)(o.SingleSelect, {
                      value: l,
                      className: j.input,
                      onChange: (e) => {
                        E(!1),
                          d.Z.updateGuildNotificationSettings(
                            t,
                            {
                              flags: (0, h.Q4)(
                                n,
                                e === p.i.ALL_MESSAGES
                                  ? N.vc.UNREADS_ALL_MESSAGES
                                  : N.vc.UNREADS_ONLY_MENTIONS,
                              ),
                            },
                            u.UE.unreads(e),
                          );
                      },
                      options: (0, g.y)({ notificationSetting: r }),
                      renderOptionLabel: (e) => {
                        let t =
                          e.disabled &&
                          e.value === p.i.ONLY_MENTIONS &&
                          l !== p.i.ONLY_MENTIONS;
                        return (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)("div", {
                              children: (0, i.jsx)(o.Text, {
                                variant: "text-md/normal",
                                color: e.disabled ? "text-muted" : void 0,
                                children: e.label,
                              }),
                            }),
                            t &&
                              (0, i.jsx)(o.Tooltip, {
                                text: v.intl.string(v.t.eP8yWV),
                                children: (e) =>
                                  (0, i.jsx)(o.DenyIcon, {
                                    size: "custom",
                                    ...e,
                                    width: 20,
                                    height: 20,
                                    className: j.muted,
                                  }),
                              }),
                          ],
                        });
                      },
                    }),
                    (0, i.jsx)(o.SingleSelect, {
                      className: j.input,
                      value: r,
                      onChange: (e) => {
                        E(!1);
                        let n = { message_notifications: e };
                        e === S.bL.ALL_MESSAGES &&
                          l !== p.i.ALL_MESSAGES &&
                          (n.flags = (0, h.Q4)(
                            c.ZP.getGuildFlags(t),
                            N.vc.UNREADS_ALL_MESSAGES,
                          )),
                          d.Z.updateGuildNotificationSettings(
                            t,
                            n,
                            u.UE.notifications(e),
                          );
                      },
                      options: (0, g.d)({ notificationSetting: r }),
                      renderOptionLabel: (e) => {
                        let t =
                          e.value === S.bL.ALL_MESSAGES &&
                          l !== p.i.ALL_MESSAGES &&
                          r !== S.bL.ALL_MESSAGES;
                        return (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(o.Text, {
                              variant: "text-md/normal",
                              children: e.label,
                            }),
                            t &&
                              (0, i.jsx)(o.Tooltip, {
                                text: v.intl.string(v.t.idXSbG),
                                children: (e) =>
                                  (0, i.jsx)(o.CircleInformationIcon, {
                                    size: "custom",
                                    ...e,
                                    width: 20,
                                    height: 20,
                                    className: j.muted,
                                  }),
                              }),
                          ],
                        });
                      },
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function b(e) {
        let { unreadSetting: t } = e,
          n = [
            {
              badged: !0,
              unread: !0,
              muted: !1,
              name: v.intl.string(v.t.EjLobG),
            },
            {
              badged: !1,
              unread: !0,
              muted: !0,
              name: v.intl.string(v.t.Wgpwpq),
            },
            {
              badged: !1,
              unread: !1,
              muted: !0,
              name: v.intl.string(v.t.g9VImp),
            },
          ];
        return (
          t === p.i.ALL_MESSAGES && (n[1].muted = !1),
          (0, i.jsx)("div", {
            className: j.channeList,
            children: n.map((e) =>
              (0, i.jsxs)(
                "div",
                {
                  className: j.channelListChannel,
                  children: [
                    (0, i.jsxs)("div", {
                      className: j.channelListChannelName,
                      children: [
                        (0, i.jsx)("div", {
                          className: r()(j.unread, {
                            [j.hidden]: !e.unread,
                            [j.unreadMuted]: e.muted,
                          }),
                        }),
                        (0, i.jsx)(o.TextIcon, {
                          size: "xxs",
                          color: "currentColor",
                          className: r()(j.channelListChannelIcon, {
                            [j.muted]: e.muted,
                          }),
                        }),
                        (0, i.jsx)(o.Text, {
                          variant: "text-xs/normal",
                          color: e.muted ? "text-muted" : void 0,
                          children: e.name,
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: r()(j.badge, { [j.hidden]: !e.badged }),
                      children: (0, i.jsx)(o.NumberBadge, { count: 1 }),
                    }),
                  ],
                },
                e.name,
              ),
            ),
          })
        );
      }
      function _(e) {
        return (0, i.jsxs)("div", {
          className: j.mockMessage,
          children: [
            e.notificationSetting === S.bL.NO_MESSAGES &&
              (0, i.jsx)("div", { className: j.mockMessageDisabled }),
            (0, i.jsx)("div", {
              children: (0, i.jsx)("img", {
                className: j.mockMessageAvatar,
                src: C,
                alt: "",
              }),
            }),
            (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(o.Text, {
                  variant: "text-xs/medium",
                  children: v.intl.string(v.t.qSq0tL),
                }),
                e.notificationSetting === S.bL.ALL_MESSAGES &&
                  (0, i.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: v.intl.string(v.t.WYyzIy),
                  }),
                e.notificationSetting !== S.bL.ALL_MESSAGES &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: ["@Roka", " "],
                      }),
                      (0, i.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tag: "span",
                        children: v.intl.string(v.t.WYyzIy),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
    },
    444899: function (e, t, n) {
      n.d(t, {
        f: function () {
          return j;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        l = n(481060),
        r = n(87051),
        a = n(225433),
        o = n(933557),
        d = n(471445),
        c = n(600164),
        u = n(592125),
        h = n(324067),
        m = n(699516),
        g = n(594174),
        x = n(621600),
        S = n(981631),
        p = n(388032),
        N = n(777138);
      function v(e, t, n) {
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
      class j extends s.PureComponent {
        highlight() {
          this.setState({ highlight: !0 }, () => {
            null != this._timeout && clearTimeout(this._timeout),
              (this._timeout = setTimeout(this.unhighlight, 1e3));
          });
        }
        componentWillUnmount() {
          null != this._timeout && clearTimeout(this._timeout);
        }
        setMessageNotification(e, t, n) {
          let { channel: i } = this.props,
            s = i.getGuildId();
          null != s &&
            r.Z.updateChannelOverrideSettings(
              s,
              i.id,
              { message_notifications: e, muted: null != t && t },
              n,
            );
        }
        handleRadioChange(e) {
          this.setMessageNotification(e, void 0, x.UE.notifications(e));
        }
        renderMessageNotificationsRadioOption(e) {
          let {
              messageNotifications: t,
              guildMuted: n,
              muted: s,
              guildMessageNotifications: r,
              checkboxColor: a,
            } = this.props,
            o = t === e;
          (null == t || t === S.bL.NULL) && e === r && (o = !0);
          let d = l.Checkbox.Types.INVERTED;
          return (
            (s || t === S.bL.NULL || null == t) && (d = l.Checkbox.Types.GHOST),
            (0, i.jsx)(l.Checkbox, {
              value: !n && o,
              disabled: n,
              shape: l.Checkbox.Shapes.ROUND,
              color: a,
              type: d,
              onChange: this.handleRadioChange.bind(this, e),
            })
          );
        }
        renderName() {
          let e, t;
          let { channel: n } = this.props;
          null != n.parent_id && (e = u.Z.getChannel(n.parent_id));
          let s = (0, d.KS)(n);
          if (
            n.type === S.d4z.GUILD_CATEGORY &&
            null != n.guild_id &&
            "" !== n.guild_id
          ) {
            let e = h.Z.getCategories(n.guild_id);
            t = p.intl.formatToPlainString(p.t["2KzH8/"], {
              num: null != e[n.id] ? e[n.id].length : 0,
            });
          } else
            t =
              null != e
                ? p.intl.formatToPlainString(p.t.L1zJgY, {
                    categoryName: (0, o.F6)(e, g.default, m.Z),
                  })
                : p.intl.string(p.t.uIzfCA);
          return (0, i.jsxs)(c.Z, {
            grow: 1,
            className: N.nameContainer,
            children: [
              null != s ? (0, i.jsx)(s, { className: N.icon }) : null,
              (0, i.jsxs)("div", {
                className: N.channelNameContainer,
                children: [
                  (0, i.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    className: N.channelName,
                    children: (0, o.F6)(n, g.default, m.Z),
                  }),
                  (0, i.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    className: N.channelNameByline,
                    children: t,
                  }),
                ],
              }),
            ],
          });
        }
        renderOptions() {
          let { muted: e, guildMuted: t } = this.props;
          return (0, i.jsxs)(c.Z, {
            grow: 0,
            shrink: 0,
            className: N.checkboxGroup,
            justify: c.Z.Justify.AROUND,
            align: c.Z.Align.CENTER,
            children: [
              (0, i.jsx)(c.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: t ? N.checkboxContainerMuted : N.checkboxContainer,
                children: this.renderMessageNotificationsRadioOption(
                  S.bL.ALL_MESSAGES,
                ),
              }),
              (0, i.jsx)(c.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: t ? N.checkboxContainerMuted : N.checkboxContainer,
                children: this.renderMessageNotificationsRadioOption(
                  S.bL.ONLY_MENTIONS,
                ),
              }),
              (0, i.jsx)(c.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: t ? N.checkboxContainerMuted : N.checkboxContainer,
                children: this.renderMessageNotificationsRadioOption(
                  S.bL.NO_MESSAGES,
                ),
              }),
              (0, i.jsx)(c.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: N.checkboxMute,
                children: (0, i.jsx)(l.Checkbox, {
                  value: e,
                  shape: l.Checkbox.Shapes.BOX,
                  type: l.Checkbox.Types.INVERTED,
                  onChange: this.handleMute,
                }),
              }),
            ],
          });
        }
        render() {
          let { highlight: e } = this.state;
          return (0, i.jsxs)(l.Card, {
            outline: !0,
            editable: !0,
            className: e ? N.overrideHighlight : N.override,
            children: [
              this.renderName(),
              this.renderOptions(),
              (0, i.jsx)(a.Z, {
                className: N.removeOverride,
                onClick: this.handleDelete,
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            v(this, "_timeout", void 0),
            v(this, "state", { highlight: !1 }),
            v(this, "unhighlight", () => {
              this.setState({ highlight: !1 });
            }),
            v(this, "handleMute", (e, t) => {
              let { messageNotifications: n } = this.props;
              this.setMessageNotification(
                null != n ? n : S.bL.NULL,
                t,
                x.UE.muted(t),
              );
            }),
            v(this, "handleDelete", () => {
              let { onDelete: e, channel: t } = this.props;
              this.setMessageNotification(S.bL.NULL, !1, x.ZB.OverrideDeleted),
                null != e && e(t.id);
            });
        }
      }
    },
    610617: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return O;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        l = n(120356),
        r = n.n(l),
        a = n(392711),
        o = n.n(a),
        d = n(831209),
        c = n(442837),
        u = n(704215),
        h = n(433517),
        m = n(481060),
        g = n(243778),
        x = n(430824),
        S = n(9156),
        p = n(594174),
        N = n(74538),
        v = n(671105),
        j = n(552958),
        C = n(213931),
        f = n(940165),
        E = n(820408),
        b = n(921944),
        _ = n(871465),
        T = n(388032),
        Z = n(609388);
      function O(e) {
        let { guildId: t, onClose: n, isRedesign: l = !1 } = e,
          a = (0, c.e7)([x.Z], () => x.Z.getGuild(t)),
          O = (0, c.e7)([p.default], () => p.default.getCurrentUser()),
          { playSound: L, isPlaying: I, soundpackPlaying: M } = (0, j.Z)(),
          A = (0, v.OR)(t),
          R = N.ZP.canUseCustomNotificationSounds(O),
          P = R ? A : _.YC.CLASSIC,
          G = s.useRef(0),
          U = s.useRef(-1),
          [k, w] = s.useState(!1),
          y = (0, _.LB)(),
          D = s.useCallback(() => {
            clearTimeout(U.current),
              (G.current += 1),
              G.current > 10 && (w(!0), h.K.set(_.CZ, !0)),
              (U.current = setTimeout(() => {
                G.current = 0;
              }, 1e3));
          }, []),
          [F, H] = o().partition(
            y,
            (e) => !e.requirePremium || (e.requirePremium && R),
          ),
          B = F.map((e) => {
            var t, n, i, s;
            return {
              name: e.label,
              value: e.value,
              desc: e.description,
              radioBarClassName:
                ((t = e.value),
                (n = M),
                (i = I),
                (s = l),
                r()(Z.option, {
                  [Z.optionRedesign]: s,
                  [Z.optionPlaying]: t === n && i,
                })),
            };
          }),
          [Y, W] = (0, g.US)([
            u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE,
          ]),
          z = Y === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
        s.useEffect(
          () => () => {
            W(b.L.AUTO_DISMISS);
          },
          [W],
        );
        let V = N.ZP.canUseCustomNotificationSounds(O),
          q = (0, c.e7)([S.ZP], () => S.ZP.isMuted(t), [t]);
        return null == O
          ? null
          : (0, i.jsxs)("div", {
              children: [
                (0, i.jsxs)("div", {
                  className: Z.header,
                  children: [
                    (0, i.jsx)(m.Heading, {
                      variant: "heading-md/semibold",
                      children: T.intl.string(T.t.mrqSOj),
                    }),
                    (0, i.jsx)(m.Clickable, {
                      onClick: D,
                      className: Z.nitroWheelContainer,
                      children: (0, i.jsx)(m.NitroWheelIcon, {
                        size: "md",
                        color: "currentColor",
                        className: Z.nitroWheel,
                      }),
                    }),
                    z &&
                      (0, i.jsx)(m.TextBadge, {
                        className: Z.newBadge,
                        text: T.intl.string(T.t.y2b7CA),
                      }),
                  ],
                }),
                (0, i.jsx)(m.Text, {
                  className: Z.subheader,
                  variant: "text-sm/normal",
                  children: T.intl.format(T.t.LuYDy8, {
                    guildName: (e, t) =>
                      (0, i.jsx)(
                        m.Text,
                        {
                          tag: "span",
                          variant: "text-sm/medium",
                          children: null == a ? void 0 : a.name,
                        },
                        t,
                      ),
                  }),
                }),
                q &&
                  (0, i.jsxs)("div", {
                    className: Z.warningContainer,
                    children: [
                      (0, i.jsx)(m.CircleWarningIcon, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: d.Z.STATUS_WARNING,
                      }),
                      (0, i.jsx)(m.Text, {
                        className: Z.warningLabel,
                        variant: "text-sm/medium",
                        children: T.intl.string(T.t["a9G/ER"]),
                      }),
                    ],
                  }),
                (0, i.jsx)(m.FormItem, {
                  className: Z.optionsContainer,
                  title: T.intl.string(T.t.xxvoAg),
                  children: (0, i.jsxs)("div", {
                    className: r()({ [Z.options]: !V }),
                    children: [
                      (0, i.jsx)(m.RadioGroup, {
                        className: r()({ [Z.options]: V }),
                        value: null != P ? P : _.YC.CLASSIC,
                        onChange: (e) => {
                          L(e.value),
                            R &&
                              (0, C.t)(t, P, e.value, "notificationSettings");
                        },
                        options: B,
                        radioItemClassName: Z.option,
                      }),
                      H.map((e, t) =>
                        (0, i.jsx)(
                          f.Z,
                          {
                            className: Z.playableOption,
                            label: e.label,
                            description: e.description,
                            soundpack: e.value,
                            location: "notificationSettings",
                          },
                          "sound_option_".concat(t),
                        ),
                      ),
                    ],
                  }),
                }),
                !V && (0, i.jsx)(E.Z, { onClose: n }),
              ],
            });
      }
    },
    940165: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(120356),
        l = n.n(s),
        r = n(793030),
        a = n(481060),
        o = n(759198),
        d = n(552958),
        c = n(767157),
        u = n(388032),
        h = n(270207);
      function m(e) {
        let {
            label: t,
            className: n,
            description: s,
            soundpack: m,
            location: g,
          } = e,
          { playSound: x, isPlaying: S } = (0, d.Z)();
        return (0, i.jsxs)(a.Clickable, {
          "aria-label": u.intl.string(u.t.RscU7O),
          className: l()(h.container, n, { [h.containerActive]: S }),
          onClick: () => {
            (0, c.Z)(m, g), x(m);
          },
          children: [
            (0, i.jsx)(a.CirclePlayIcon, {
              className: h.playButton,
              color: S
                ? a.tokens.colors.INTERACTIVE_ACTIVE
                : a.tokens.colors.INTERACTIVE_NORMAL,
            }),
            (0, i.jsxs)("div", {
              className: h.textContainer,
              children: [
                (0, i.jsx)(o.Z, { variant: "text-md/medium", children: t }),
                (0, i.jsx)(r.xv, { variant: "text-sm/normal", children: s }),
              ],
            }),
          ],
        });
      }
    },
    820408: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        l = n(481060),
        r = n(230711),
        a = n(2052),
        o = n(434650),
        d = n(906732),
        c = n(436774),
        u = n(690221),
        h = n(626135),
        m = n(197115),
        g = n(474936),
        x = n(981631),
        S = n(388032),
        p = n(205459);
      function N(e) {
        let { onClose: t } = e,
          n = (0, a.O)(),
          { analyticsLocations: N } = (0, d.ZP)(),
          [v, j] = s.useState(!1),
          C = s.useCallback(
            (e) => {
              if (!v && !!e)
                h.default.track(x.rMx.PREMIUM_UPSELL_VIEWED, {
                  type: g.cd.CUSTOM_NOTIFICATION_SOUNDS_SETTINGS_UPSELL,
                  location: n.location,
                  location_stack: N,
                }),
                  j(!0);
            },
            [n.location, N, v],
          ),
          f = (0, o.O)(C, 0.8, !0);
        return (0, i.jsxs)("div", {
          ref: f,
          className: p.container,
          children: [
            (0, i.jsx)(l.NitroWheelIcon, {
              size: "md",
              color: c.JX.PREMIUM_TIER_2,
              className: p.nitroWheel,
            }),
            (0, i.jsxs)(l.Text, {
              className: p.text,
              variant: "text-sm/normal",
              children: [
                S.intl.string(S.t["Pb0O6+"]),
                " ",
                (0, i.jsx)(u.Z, {
                  onClick: () => {
                    t(), r.Z.open(x.oAB.PREMIUM);
                  },
                  children: S.intl.string(S.t.hvVgAQ),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: p.nitroButton,
              children: (0, i.jsx)(m.Z, {
                showGradient: !0,
                buttonText: S.intl.string(S.t.pj0XBA),
                size: l.Button.Sizes.SMALL,
                shinyButtonClassName: p.nitroButton,
                subscriptionTier: g.Si.TIER_2,
                premiumModalAnalyticsLocation: {
                  section:
                    x.jXE.PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL,
                },
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=d1451927a6f1786ae99b.js.map
