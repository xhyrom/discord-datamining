"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5863"],
  {
    650455: function (e) {
      e.exports = "/assets/f836b92b3f6efec289a9.png";
    },
    751212: function (e, s, t) {
      t.r(s),
        t.d(s, {
          default: function () {
            return z;
          },
        }),
        t(47120),
        t(653041);
      var n,
        i,
        l = t(735250),
        a = t(470079),
        r = t(392711),
        o = t.n(r),
        d = t(913527),
        c = t.n(d),
        u = t(699581),
        h = t(374470),
        N = t(442837),
        S = t(692547),
        E = t(481060),
        g = t(92114),
        m = t(798140),
        _ = t(740504),
        T = t(933557),
        x = t(471445),
        I = t(600164),
        O = t(423589),
        C = t(74888),
        M = t(444899),
        p = t(11352),
        v = t(610617),
        L = t(777861),
        j = t(131704),
        Z = t(592125),
        A = t(324067),
        R = t(650774),
        f = t(430824),
        b = t(699516),
        U = t(9156),
        G = t(594174),
        P = t(823379),
        F = t(63063),
        D = t(621600),
        k = t(981631),
        B = t(969943),
        w = t(689938),
        H = t(736475);
      function y(e, s, t) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = t),
          e
        );
      }
      ((i = n || (n = {})).MUTED = "muted"),
        (i.MESSAGE_NOTIFICATIONS = "message_notifications"),
        (i.SUPPRESS_EVERYONE = "suppress_everyone"),
        (i.SUPPRESS_ROLES = "suppress_roles"),
        (i.MOBILE_PUSH = "mobile_push"),
        (i.MUTE_EVENTS = "mute_scheduled_events"),
        (i.NOTIFY_HIGHLIGHTS = "notify_highlights");
      class Y extends a.PureComponent {
        static getDerivedStateFromProps(e, s) {
          let { overrides: t, channelOverridesProp: n } = s;
          return e.channelOverrides !== n
            ? ((t = new Set(t)),
              (0, O.OD)(e.channelOverrides).forEach((e) => t.add(e)),
              { overrides: t, channelOverridesProp: e.channelOverrides })
            : null;
        }
        componentDidUpdate(e, s) {
          let { lastSelected: t } = this.state,
            n = null != t ? this._channelRefs[t] : null;
          if (null != this._scroller && null != n && t !== s.lastSelected) {
            let e = (0, u.findDOMNode)(n);
            if (null != this._scroller && (0, h.k)(e, HTMLElement)) {
              var i;
              null === (i = this._scroller) ||
                void 0 === i ||
                i.scrollIntoViewNode({
                  node: e,
                  animate: !0,
                  padding: 20,
                  callback: () => this.setState({ lastSelected: null }),
                }),
                n.highlight();
            }
          }
          if (this.props.channelOverrides !== e.channelOverrides) {
            let { overrides: e } = this.state;
            (e = new Set(e)),
              (0, O.OD)(this.props.channelOverrides).forEach((s) => e.add(s)),
              this.setState({ overrides: e });
          }
        }
        handleCheckboxChange(e, s, t) {
          g.Z.updateGuildNotificationSettings(
            this.props.guildId,
            { [e]: s },
            t,
          );
        }
        handleRadioChange(e, s, t) {
          let { value: n } = s;
          g.Z.updateGuildNotificationSettings(
            this.props.guildId,
            { [e]: n },
            t,
          );
        }
        renderHeader() {
          let { guild: e } = this.props;
          return null == e
            ? null
            : (0, l.jsxs)(E.ModalHeader, {
                children: [
                  (0, l.jsxs)(I.Z.Child, {
                    children: [
                      (0, l.jsx)(E.Heading, {
                        variant: "heading-lg/semibold",
                        children: w.Z.Messages.NOTIFICATION_SETTINGS,
                      }),
                      (0, l.jsx)(E.Text, {
                        variant: "text-md/normal",
                        className: H.guildName,
                        children: e.name,
                      }),
                    ],
                  }),
                  (0, l.jsx)(I.Z.Child, {
                    grow: 0,
                    children: (0, l.jsx)(E.ModalCloseButton, {
                      onClick: this.props.onClose,
                    }),
                  }),
                ],
              });
        }
        renderFooter() {
          return (0, l.jsx)(E.ModalFooter, {
            children: (0, l.jsx)(E.Button, {
              onClick: this.props.onClose,
              children: w.Z.Messages.DONE,
            }),
          });
        }
        renderMute() {
          var e;
          let { muted: s, muteConfig: t, guild: n } = this.props,
            i =
              null !== (e = null == t ? void 0 : t.selected_time_window) &&
              void 0 !== e
                ? e
                : B.Oe.ALWAYS;
          return null == n
            ? null
            : (0, l.jsxs)(E.FormItem, {
                className: H.largeSpacing,
                children: [
                  (0, l.jsx)(E.FormSwitch, {
                    hideBorder: !0,
                    value: s,
                    onChange: (e) =>
                      this.handleCheckboxChange("muted", e, D.UE.muted(e)),
                    note: w.Z.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                    children: w.Z.Messages.FORM_LABEL_MUTE_SERVER.format({
                      name: n.name,
                    }),
                  }),
                  s
                    ? (0, l.jsxs)(I.Z, {
                        className: H.spacing,
                        align: I.Z.Align.CENTER,
                        children: [
                          (0, l.jsxs)(I.Z, {
                            direction: I.Z.Direction.VERTICAL,
                            className: H.__invalid_muteUntilTextWrapper,
                            children: [
                              (0, l.jsx)(E.FormTitle, {
                                tag: "h3",
                                className: H.muteUntilTitle,
                                children: w.Z.Messages.MUTE_UNTIL,
                              }),
                              (0, l.jsx)(L.Z, {
                                className: H.muteUntilText,
                                muteConfig: t,
                              }),
                            ],
                          }),
                          (0, l.jsx)(E.SingleSelect, {
                            className: H.muteTimeSelector,
                            options: (0, O.W9)(),
                            value: i,
                            onChange: this.handleSelectMuteTime,
                          }),
                        ],
                      })
                    : null,
                  (0, l.jsx)(E.FormDivider, {}),
                ],
              });
        }
        renderServerSettings() {
          var e;
          let {
            messageNotifications: s,
            muted: t,
            memberCount: n,
          } = this.props;
          return (0, l.jsxs)("div", {
            className: H.spacing,
            children: [
              (0, l.jsx)(E.FormItem, {
                title: w.Z.Messages.FORM_LABEL_SERVER_NOTIFICATION_SETTINGS,
                className: H.largeSpacing,
                children: (0, l.jsx)(E.RadioGroup, {
                  disabled: t,
                  value: s,
                  onChange: (e) =>
                    this.handleRadioChange(
                      "message_notifications",
                      e,
                      D.UE.notifications(e.value),
                    ),
                  options:
                    ((e = n),
                    [
                      {
                        name: w.Z.Messages.FORM_LABEL_ALL_MESSAGES,
                        value: k.bL.ALL_MESSAGES,
                        desc:
                          null != e && e >= k.qWG
                            ? w.Z.Messages
                                .LARGE_GUILD_NOTIFY_ALL_MESSAGES_DESCRIPTION
                            : null,
                      },
                      {
                        name: w.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
                        value: k.bL.ONLY_MENTIONS,
                      },
                      {
                        name: w.Z.Messages.FORM_LABEL_NOTHING,
                        value: k.bL.NO_MESSAGES,
                      },
                    ]),
                }),
              }),
              (0, l.jsx)(E.FormDivider, {}),
            ],
          });
        }
        renderNotificationOptions() {
          let {
            suppressEveryone: e,
            suppressRoles: s,
            mobilePush: t,
            muted: n,
            muteEvents: i,
            notifyHighlights: a,
            guildId: r,
          } = this.props;
          return (0, l.jsxs)(E.FormItem, {
            className: H.largeSpacing,
            children: [
              (0, l.jsx)(E.FormSwitch, {
                onChange: (e) =>
                  this.handleCheckboxChange(
                    "suppress_everyone",
                    e,
                    D.UE.suppressEveryone(e),
                  ),
                value: e,
                children: w.Z.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
              }),
              (0, l.jsx)(E.FormSwitch, {
                onChange: (e) =>
                  this.handleCheckboxChange(
                    "suppress_roles",
                    e,
                    D.UE.suppressRoles(e),
                  ),
                value: s,
                children: w.Z.Messages.FORM_LABEL_SUPPRESS_ROLES,
              }),
              (0, l.jsx)(E.FormSwitch, {
                onChange: (e) => {
                  g.Z.updateGuildNotificationSettings(
                    r,
                    { notify_highlights: e ? k.gLR.DISABLED : k.gLR.ENABLED },
                    D.UE.highlights(!e),
                  );
                },
                value: n || a === k.gLR.DISABLED,
                disabled: n,
                note: (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(E.Text, {
                      variant: "text-sm/normal",
                      children: w.Z.Messages.HIGHLIGHTS_NOTE_SUBTEXT,
                    }),
                    (0, l.jsx)("div", {
                      className: H.highlightsLink,
                      children: (0, l.jsx)(E.Anchor, {
                        href: F.Z.getArticleURL(k.BhN.HIGHLIGHTS),
                        children: w.Z.Messages.HIGHLIGHTS_LEARN_MORE,
                      }),
                    }),
                  ],
                }),
                children: (0, l.jsx)(l.Fragment, {
                  children: w.Z.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                }),
              }),
              (0, l.jsx)(E.FormSwitch, {
                value: i,
                onChange: (e) =>
                  this.handleCheckboxChange(
                    "mute_scheduled_events",
                    e,
                    D.UE.mutedEvents(e),
                  ),
                children: w.Z.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
              }),
              (0, l.jsx)(E.FormSwitch, {
                value: !n && t,
                disabled: n,
                onChange: (e) =>
                  this.handleCheckboxChange(
                    "mobile_push",
                    e,
                    D.UE.mobilePush(e),
                  ),
                children: w.Z.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
              }),
            ],
          });
        }
        renderCustomNotificationSoundOptions() {
          let {
            shouldShowCustomNotificationSounds: e,
            guildId: s,
            onClose: t,
          } = this.props;
          if (!!e)
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(v.Z, { guildId: s, onClose: t }),
                (0, l.jsx)(E.FormDivider, {
                  className: H.customNotificationSoundsDivider,
                }),
              ],
            });
        }
        renderOverrideSelect() {
          let { channels: e, categories: s } = this.props,
            t = o()(e)
              .filter((e) => {
                let { channel: t } = e;
                return (
                  t.type !== k.d4z.GUILD_CATEGORY ||
                  (null != s[t.id] && s[t.id].length > 0)
                );
              })
              .map((e) => {
                let { channel: s } = e;
                return { value: s.id, label: (0, T.F6)(s, G.default, b.Z) };
              })
              .value();
          return (0, l.jsxs)(E.FormItem, {
            title: w.Z.Messages.NOTIFICATION_OVERRIDES,
            className: H.largeSpacing,
            children: [
              (0, l.jsx)(E.FormText, {
                type: E.FormText.Types.DESCRIPTION,
                className: H.smallSpacing,
                children: w.Z.Messages.ADD_CHANNEL_TO_OVERRIDE,
              }),
              (0, l.jsx)(E.SearchableSelect, {
                value: k.lds,
                placeholder: w.Z.Messages.SELECT_CHANNEL_OR_CATEGORY,
                renderOptionLabel: this.renderOptionLabel,
                options: t,
                onChange: this.handleSelectChange,
              }),
            ],
          });
        }
        renderChannelNotifications() {
          let {
              channelOverrides: e,
              muted: s,
              channels: t,
              messageNotifications: n,
              categories: i,
              checkboxColor: a,
            } = this.props,
            { overrides: r } = this.state,
            o = t
              .map((t) => {
                let { channel: o } = t;
                if (!r.has(o.id) || (null != i[o.id] && 0 === i[o.id].length))
                  return null;
                let d = e[o.id];
                return (0, l.jsx)(
                  M.f,
                  {
                    ref: (e) => {
                      this._channelRefs[o.id] = e;
                    },
                    channel: o,
                    guildMuted: s,
                    muted: null != d && (0, m.m$)(d),
                    messageNotifications:
                      null != d ? d.message_notifications : null,
                    guildMessageNotifications: n,
                    onDelete: this.handleDeleteOverride,
                    checkboxColor: a,
                  },
                  o.id,
                );
              })
              .filter(P.lm);
          return (
            (0 === r.size || 0 === o.length) &&
              o.push(
                (0, l.jsx)(
                  "div",
                  {
                    className: H.overridePlaceholder,
                    children: (0, l.jsx)(E.Text, {
                      className: H.overrideHeader,
                      variant: "text-sm/semibold",
                      children: w.Z.Messages.ADD_CHANNEL_TO_OVERRIDE,
                    }),
                  },
                  "placeholder",
                ),
              ),
            (0, l.jsxs)("div", {
              className: H.overrideList,
              children: [
                (0, l.jsxs)(I.Z, {
                  children: [
                    (0, l.jsx)(E.Heading, {
                      variant: "eyebrow",
                      className: H.headerName,
                      children: w.Z.Messages.CHANNEL_OR_CATEGORY,
                    }),
                    (0, l.jsx)(E.Heading, {
                      variant: "eyebrow",
                      className: H.headerOption,
                      children: w.Z.Messages.FORM_LABEL_ALL,
                    }),
                    (0, l.jsx)(E.Heading, {
                      variant: "eyebrow",
                      className: H.headerOption,
                      children: w.Z.Messages.FORM_LABEL_MENTIONS,
                    }),
                    (0, l.jsx)(E.Heading, {
                      variant: "eyebrow",
                      className: H.headerOption,
                      children: w.Z.Messages.FORM_LABEL_NOTHING,
                    }),
                    (0, l.jsx)(E.Heading, {
                      variant: "eyebrow",
                      className: H.headerOption,
                      children: (0, l.jsx)(E.Tooltip, {
                        text: w.Z.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                        position: "bottom",
                        children: (e) =>
                          (0, l.jsx)("span", {
                            ...e,
                            children: w.Z.Messages.SOUND_MUTE,
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
          return (0, l.jsxs)(E.ModalRoot, {
            "aria-label": w.Z.Messages.NOTIFICATION_SETTINGS,
            size: E.ModalSize.MEDIUM,
            transitionState: this.props.transitionState,
            children: [
              this.renderHeader(),
              (0, l.jsxs)(E.ModalContent, {
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
            y(this, "_scroller", null),
            y(this, "_channelRefs", {}),
            y(this, "state", {
              overrides: new Set((0, O.OD)(this.props.channelOverrides)),
              channelOverridesProp: this.props.channelOverrides,
              lastSelected: null,
            }),
            y(this, "setScrollerRef", (e) => {
              this._scroller = e;
            }),
            y(this, "handleSelectChange", (e) => {
              if (null == e) return;
              let { overrides: s } = this.state;
              (s = new Set(s)).add(e),
                this.setState({ overrides: s, lastSelected: e });
            }),
            y(this, "handleSelectMuteTime", (e) => {
              let s = e > 0 ? c()().add(e, "second").toISOString() : null;
              g.Z.updateGuildNotificationSettings(
                this.props.guildId,
                {
                  muted: !0,
                  mute_config: { selected_time_window: e, end_time: s },
                },
                D.ZB.Muted,
              );
            }),
            y(this, "handleDeleteOverride", (e) => {
              let { overrides: s } = this.state;
              (s = new Set(s)).delete(e), this.setState({ overrides: s });
            }),
            y(this, "renderOptionLabel", (e) => {
              let s = Z.Z.getChannel(e.value);
              if (null == s) return e.label;
              let t = Z.Z.getChannel(s.parent_id),
                n = null != t ? t.name : null;
              return (0, l.jsx)(E.IconSelectOption, {
                icon: (0, x.KS)(s),
                title: e.label,
                subtitle: n,
              });
            });
        }
      }
      function V(e) {
        let { guildId: s, ...t } = e,
          n = (0, N.cj)([A.Z, f.Z, R.Z, U.ZP], () => {
            let e = A.Z.getCategories(s);
            return {
              guildId: s,
              categories: e,
              guild: f.Z.getGuild(s),
              memberCount: R.Z.getMemberCount(s),
              suppressEveryone: U.ZP.isSuppressEveryoneEnabled(s),
              suppressRoles: U.ZP.isSuppressRolesEnabled(s),
              muteEvents: U.ZP.isMuteScheduledEventsEnabled(s),
              mobilePush: U.ZP.isMobilePushEnabled(s),
              muted: U.ZP.isMuted(s),
              muteConfig: U.ZP.getMuteConfig(s),
              messageNotifications: U.ZP.getMessageNotifications(s),
              channelOverrides: U.ZP.getChannelOverrides(s),
              channels: (0, _.Z)(e._categories, e, (e) => {
                let {
                  channel: { type: s },
                } = e;
                return (0, j.r8)(s) || s === k.d4z.GUILD_CATEGORY;
              }),
              notifyHighlights: U.ZP.getNotifyHighlights(s),
            };
          }),
          i = p.Y.useExperiment(
            { location: "connected_notification_settings" },
            { autoTrackExposure: !0 },
          ).enabled,
          a = (0, E.useToken)(S.Z.unsafe_rawColors.GREEN_360).hex();
        return (0, l.jsx)(Y, {
          ...n,
          ...t,
          shouldShowCustomNotificationSounds: i,
          checkboxColor: a,
        });
      }
      function z(e) {
        let s = (0, O.Mn)("NotificationSettingsModal") ? C.Z : V;
        return (0, l.jsx)(s, { ...e });
      }
    },
    732760: function (e, s, t) {
      t.d(s, {
        d: function () {
          return a;
        },
        y: function () {
          return r;
        },
      });
      var n = t(981631),
        i = t(490897),
        l = t(689938);
      let a = (e) => [
          {
            label: l.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
            value: n.bL.ALL_MESSAGES,
          },
          {
            label: l.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
            value: n.bL.ONLY_MENTIONS,
          },
          {
            label: l.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
            value: n.bL.NO_MESSAGES,
          },
        ],
        r = (e) => [
          {
            label: l.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
            value: i.i.ALL_MESSAGES,
          },
          {
            value: i.i.ONLY_MENTIONS,
            label: l.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
            disabled:
              (null == e ? void 0 : e.notificationSetting) ===
              n.bL.ALL_MESSAGES,
          },
        ];
    },
    958648: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return i;
        },
      });
      var n = t(470079);
      function i(e, s) {
        let t = n.useRef(e);
        n.useEffect(() => {
          e.length > t.current.length && s(), (t.current = e);
        }, [e, s]);
      }
    },
    413684: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return h;
        },
      });
      var n = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        a = t(92114),
        r = t(9156),
        o = t(621600),
        d = t(981631),
        c = t(689938),
        u = t(202370);
      function h(e) {
        let { guildId: s } = e,
          t = (0, i.cj)([r.ZP], () => ({
            highligths: r.ZP.getNotifyHighlights(s),
            mobilePush: r.ZP.isMobilePushEnabled(s),
            suppressRoles: r.ZP.isSuppressRolesEnabled(s),
            suppressEveryone: r.ZP.isSuppressEveryoneEnabled(s),
            muteScheduledEvents: r.ZP.isMuteScheduledEventsEnabled(s),
          })),
          h = a.Z.updateGuildNotificationSettings;
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)(N, {
              value: t.suppressEveryone,
              title: c.Z.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
              onChange: (e) =>
                h(s, { suppress_everyone: e }, o.UE.suppressEveryone(e)),
            }),
            (0, n.jsx)(N, {
              value: t.suppressRoles,
              title: c.Z.Messages.FORM_LABEL_SUPPRESS_ROLES,
              onChange: (e) =>
                h(s, { suppress_roles: e }, o.UE.suppressRoles(e)),
            }),
            (0, n.jsx)(N, {
              title: (0, n.jsxs)("div", {
                className: u.advanceSettingTitle,
                children: [
                  c.Z.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                  (0, n.jsx)(l.Tooltip, {
                    text: c.Z.Messages.HIGHLIGHTS_NOTE_SUBTEXT,
                    children: (e) => {
                      let { onMouseEnter: s, onMouseLeave: t } = e;
                      return (0, n.jsx)(l.CircleInformationIcon, {
                        size: "custom",
                        width: 14,
                        height: 14,
                        onMouseEnter: s,
                        onMouseLeave: t,
                        color: l.tokens.colors.ICON_MUTED,
                        className: u.settingTitleIcon,
                      });
                    },
                  }),
                ],
              }),
              value: t.highligths === d.gLR.ENABLED,
              onChange: (e) =>
                h(
                  s,
                  { notify_highlights: e ? d.gLR.ENABLED : d.gLR.DISABLED },
                  o.UE.highlights(e),
                ),
            }),
            (0, n.jsx)(N, {
              value: t.muteScheduledEvents,
              title: c.Z.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
              onChange: (e) =>
                h(s, { mute_scheduled_events: e }, o.UE.mutedEvents(e)),
            }),
            (0, n.jsx)(N, {
              value: t.mobilePush,
              title: c.Z.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
              onChange: (e) => h(s, { mobile_push: e }, o.UE.mobilePush(e)),
            }),
          ],
        });
      }
      function N(e) {
        return (0, n.jsx)(l.FormSwitch, {
          hideBorder: !0,
          className: u.advanceSetting,
          value: e.value,
          onChange: e.onChange,
          note: e.subtitle,
          children: e.title,
        });
      }
    },
    298812: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return f;
        },
      }),
        t(47120);
      var n = t(735250),
        i = t(470079),
        l = t(120356),
        a = t.n(l),
        r = t(442837),
        o = t(692547),
        d = t(481060),
        c = t(239091),
        u = t(92114),
        h = t(225433),
        N = t(933557),
        S = t(775666),
        E = t(471445),
        g = t(592125),
        m = t(324067),
        _ = t(699516),
        T = t(9156),
        x = t(594174),
        I = t(823379),
        O = t(621600),
        C = t(423589),
        M = t(221259),
        p = t(113449),
        v = t(686660),
        L = t(958648),
        j = t(569658),
        Z = t(981631),
        A = t(689938),
        R = t(805747);
      function f(e) {
        let { guildId: s, requestScrollToBottom: t } = e,
          i = (0, r.Wu)([g.Z, T.ZP], () =>
            (0, C.OD)(T.ZP.getChannelOverrides(s), {
              ignoreMute: !0,
              ignoreUnreadSetting: !1,
              ignoreNotificationSetting: !1,
            })
              .map((e) => g.Z.getChannel(e))
              .filter(I.lm),
          );
        (0, L.Z)(i, () => t());
        let l = (0, r.e7)([m.Z], () => m.Z.getCategories(s)),
          a = i.map((e, s) =>
            (0, n.jsxs)(
              "div",
              {
                className: R.channelRow,
                children: [
                  (0, n.jsx)(b, { channel: e, categories: l }, e.id),
                  s < i.length - 1 &&
                    (0, n.jsx)("div", { className: R.separator }),
                ],
              },
              e.id,
            ),
          );
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)(j.Z, {
              guildId: s,
              onSelected: (e) => {
                if (null != i.find((s) => s.id === e)) return;
                let t = g.Z.getChannel(e);
                null != t &&
                  u.Z.updateChannelOverrideSettings(
                    s,
                    e,
                    {
                      muted: !1,
                      message_notifications:
                        T.ZP.resolvedMessageNotifications(t),
                      flags: (0, p.pq)(
                        T.ZP.getChannelIdFlags(t.guild_id, t.id),
                        T.ZP.resolveUnreadSetting(t),
                      ),
                    },
                    O.ZB.OverrideCreated,
                  );
              },
            }),
            a.length > 0 &&
              (0, n.jsxs)("div", {
                className: R.table,
                children: [
                  (0, n.jsxs)("div", {
                    className: R.row,
                    children: [
                      (0, n.jsx)(d.Text, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: R.rowName,
                        children: A.Z.Messages.CHANNEL_OR_CATEGORY,
                      }),
                      (0, n.jsx)(d.Text, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: R.rowOption,
                        children: A.Z.Messages.NOTIFICATION_PRESET_1,
                      }),
                      (0, n.jsx)(d.Text, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: R.rowOption,
                        children: A.Z.Messages.NOTIFICATION_PRESET_2,
                      }),
                      (0, n.jsx)(d.Text, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: R.rowOption,
                        children: A.Z.Messages.NOTIFICATION_PRESET_3,
                      }),
                      (0, n.jsx)(d.Text, {
                        variant: "text-xs/bold",
                        color: "text-muted",
                        className: R.rowOption,
                        children: A.Z.Messages.NOTIFICATION_PRESET_CUSTOM,
                      }),
                    ],
                  }),
                  a.length > 0 &&
                    (0, n.jsx)("div", { className: R.channels, children: a }),
                ],
              }),
          ],
        });
      }
      function b(e) {
        let { channel: s, categories: t } = e,
          l = (0, d.useToken)(o.Z.unsafe_rawColors.GREEN_360).hex(),
          u = (0, r.e7)([g.Z], () =>
            g.Z.getChannel(null == s ? void 0 : s.parent_id),
          ),
          m = (0, M.ZA)(s),
          [T, I] = i.useState(!1);
        if (null == s) return null;
        let O = A.Z.Messages.NO_CATEGORY,
          C = (0, E.KS)(s);
        s.type === Z.d4z.GUILD_CATEGORY &&
        null != s.guild_id &&
        "" !== s.guild_id
          ? (O = A.Z.Messages.NUM_CHANNELS.format({
              num: null != t[s.id] ? t[s.id].length : 0,
            }))
          : null != u &&
            (O = A.Z.Messages.IN_CATEGORY.format({
              categoryName: (0, N.F6)(u, x.default, _.Z),
            }));
        let p = T ? v.s8.CUSTOM : m.preset;
        return (0, n.jsx)("div", {
          children: (0, n.jsxs)("div", {
            className: a()(R.row, R.channel),
            children: [
              (0, n.jsxs)("div", {
                className: a()(R.rowName, R.modColor),
                children: [
                  null != C
                    ? (0, n.jsx)(C, {
                        size: "custom",
                        color: "currentColor",
                        height: 20,
                        width: 20,
                        className: R.icon,
                      })
                    : null,
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        className: R.modColor,
                        children: (0, N.F6)(s, x.default, _.Z),
                      }),
                      (0, n.jsx)(d.Text, {
                        variant: "text-xs/medium",
                        className: R.modColor,
                        children: O,
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: R.rowOption,
                children: (0, n.jsx)("div", {
                  children: (0, n.jsx)(d.Checkbox, {
                    color: l,
                    shape: d.Checkbox.Shapes.ROUND,
                    type: d.Checkbox.Types.INVERTED,
                    value: p === v.s8.ALL_MESSAGES,
                    onChange: () => (
                      (0, M._m)(s.guild_id, s.id, v.s8.ALL_MESSAGES), I(!1)
                    ),
                  }),
                }),
              }),
              (0, n.jsx)("div", {
                className: R.rowOption,
                children: (0, n.jsx)("div", {
                  children: (0, n.jsx)(d.Checkbox, {
                    color: l,
                    shape: d.Checkbox.Shapes.ROUND,
                    type: d.Checkbox.Types.INVERTED,
                    value: p === v.s8.MENTIONS,
                    onChange: () => (
                      (0, M._m)(s.guild_id, s.id, v.s8.MENTIONS), I(!1)
                    ),
                  }),
                }),
              }),
              (0, n.jsx)("div", {
                className: R.rowOption,
                children: (0, n.jsx)("div", {
                  children: (0, n.jsx)(d.Checkbox, {
                    color: l,
                    shape: d.Checkbox.Shapes.ROUND,
                    type: d.Checkbox.Types.INVERTED,
                    value: p === v.s8.NOTHING,
                    onChange: () => (
                      (0, M._m)(s.guild_id, s.id, v.s8.NOTHING), I(!1)
                    ),
                  }),
                }),
              }),
              (0, n.jsx)("div", {
                className: R.rowOption,
                children: (0, n.jsx)("div", {
                  children: (0, n.jsx)(d.Checkbox, {
                    onClick: (e) => {
                      (0, c.vq)(e, () =>
                        (0, n.jsx)(d.Menu, {
                          navId: "ChannelNotificationCustomSettingsItems",
                          "aria-label":
                            A.Z.Messages
                              .NOTIFICATION_SETTINGS_CHANNELS_CUSTOM_MENU_ARIA_LABEL,
                          onClose: () => {},
                          onSelect: () => {},
                          children: (0, S.T5)(s, () => I(!1)),
                        }),
                      );
                    },
                    color: l,
                    shape: d.Checkbox.Shapes.ROUND,
                    type: d.Checkbox.Types.INVERTED,
                    value: p === v.s8.CUSTOM,
                    onChange: () => I(!0),
                  }),
                }),
              }),
              (0, n.jsx)(h.Z, {
                onClick: () => (0, M.JK)(s.guild_id, s.id),
                className: R.removeButton,
              }),
            ],
          }),
        });
      }
    },
    569658: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return x;
        },
      });
      var n = t(735250);
      t(470079);
      var i = t(392711),
        l = t.n(i),
        a = t(442837),
        r = t(481060),
        o = t(740504),
        d = t(933557),
        c = t(471445),
        u = t(131704),
        h = t(592125),
        N = t(324067),
        S = t(699516),
        E = t(594174),
        g = t(981631),
        m = t(689938),
        _ = t(647200);
      let T = (e) => {
        let {
          channel: { type: s },
        } = e;
        return (0, u.r8)(s) || s === g.d4z.GUILD_CATEGORY;
      };
      function x(e) {
        var s;
        let { guildId: t, onSelected: i } = e;
        let { channels: u, categories: x } =
            ((s = t),
            (0, a.cj)([N.Z], () => {
              let e = N.Z.getCategories(s);
              return { channels: (0, o.Z)(e._categories, e, T), categories: e };
            })),
          I = l()(u)
            .filter((e) => {
              let { channel: s } = e;
              return (
                s.type !== g.d4z.GUILD_CATEGORY ||
                (null != x[s.id] && x[s.id].length > 0)
              );
            })
            .map((e) => {
              let { channel: s } = e;
              return { value: s.id, label: (0, d.F6)(s, E.default, S.Z) };
            })
            .value();
        return (0, n.jsxs)(r.FormItem, {
          children: [
            (0, n.jsx)(r.FormText, {
              type: r.FormText.Types.DESCRIPTION,
              children: m.Z.Messages.ADD_CHANNEL_TO_OVERRIDE,
            }),
            (0, n.jsx)("div", {
              className: _.input,
              children: (0, n.jsx)(r.SearchableSelect, {
                value: g.lds,
                onChange: i,
                options: I,
                renderOptionLabel: (e) => {
                  let s = h.Z.getChannel(e.value);
                  if (null == s) return e.label;
                  let t = h.Z.getChannel(s.parent_id),
                    i = null != t ? t.name : null;
                  return (0, n.jsx)(r.IconSelectOption, {
                    icon: (0, c.KS)(s),
                    title: e.label,
                    subtitle: i,
                  });
                },
                placeholder: m.Z.Messages.SELECT_CHANNEL_OR_CATEGORY,
              }),
            }),
          ],
        });
      }
    },
    74888: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return T;
        },
      });
      var n = t(735250),
        i = t(470079),
        l = t(120356),
        a = t.n(l),
        r = t(481060),
        o = t(11352),
        d = t(610617),
        c = t(413684),
        u = t(298812),
        h = t(200115),
        N = t(406205),
        S = t(689938),
        E = t(235968);
      function g(e) {
        return (0, n.jsx)("div", {
          className: E.sectionHeader,
          children: (0, n.jsx)(r.Heading, {
            variant: "text-xs/bold",
            className: E.sectionHeaderTitle,
            color: "text-muted",
            children: e.title,
          }),
        });
      }
      function m(e) {
        return (0, n.jsxs)("div", {
          children: [
            null != e.title && (0, n.jsx)(g, { title: e.title }),
            (0, n.jsx)("div", {
              className: a()(E.sectionContent, {
                [E.sectionContentPadding]: !0 !== e.noPadding,
              }),
              children: e.children,
            }),
          ],
        });
      }
      function _(e) {
        let { onClose: s } = e;
        return (0, n.jsxs)(r.ModalHeader, {
          className: E.header,
          children: [
            (0, n.jsxs)("div", {
              className: E.headerLeft,
              children: [
                (0, n.jsx)(r.BellIcon, {
                  size: "md",
                  color: "currentColor",
                  className: E.headerBell,
                }),
                (0, n.jsx)(r.Heading, {
                  variant: "heading-lg/semibold",
                  children: S.Z.Messages.NOTIFICATION_SETTINGS,
                }),
              ],
            }),
            (0, n.jsx)(r.ModalCloseButton, { onClick: s }),
          ],
        });
      }
      function T(e) {
        let s = i.useRef(null),
          t = o.Y.useExperiment(
            { location: "notification_settings_modal_redesign" },
            { autoTrackExposure: !0 },
          ).enabled;
        return (0, n.jsxs)(r.ModalRoot, {
          size: r.ModalSize.MEDIUM,
          transitionState: e.transitionState,
          "aria-label": S.Z.Messages.NOTIFICATION_SETTINGS,
          children: [
            (0, n.jsx)(_, { onClose: e.onClose }),
            (0, n.jsxs)(r.ModalContent, {
              className: E.content,
              scrollerRef: s,
              children: [
                (0, n.jsx)(m, {
                  children: (0, n.jsx)(h.Z, { guildId: e.guildId }),
                }),
                (0, n.jsx)(m, {
                  title: S.Z.Messages.NOTIFICATION_SETTINGS_PRESETS,
                  noPadding: !0,
                  children: (0, n.jsx)(N.Z, { guildId: e.guildId }),
                }),
                t &&
                  (0, n.jsx)(m, {
                    children: (0, n.jsx)(d.Z, {
                      onClose: e.onClose,
                      guildId: e.guildId,
                      isRedesign: !0,
                    }),
                  }),
                (0, n.jsx)(m, {
                  title: S.Z.Messages.NOTIFICATION_SETTINGS_ADVANCED,
                  children: (0, n.jsx)(c.Z, { guildId: e.guildId }),
                }),
                (0, n.jsx)(g, {
                  title: S.Z.Messages.CHANNEL_NOTIFICATION_OVERRIDES,
                }),
                (0, n.jsx)(u.Z, {
                  guildId: e.guildId,
                  requestScrollToBottom: () => {
                    null != s &&
                      null != s.current &&
                      s.current.scrollToBottom({ animate: !0 });
                  },
                }),
              ],
            }),
          ],
        });
      }
    },
    200115: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return g;
        },
      });
      var n = t(735250);
      t(470079);
      var i = t(913527),
        l = t.n(i),
        a = t(399606),
        r = t(481060),
        o = t(92114),
        d = t(430824),
        c = t(9156),
        u = t(621600),
        h = t(423589),
        N = t(969943),
        S = t(689938),
        E = t(871839);
      function g(e) {
        var s;
        let { guildId: t } = e,
          i = (0, a.e7)([d.Z], () => d.Z.getGuild(t)),
          g = (0, a.e7)([c.ZP], () => c.ZP.isMuted(t)),
          m = (0, a.e7)([c.ZP], () => c.ZP.getMuteConfig(t));
        return null == i
          ? null
          : (0, n.jsxs)(r.FormItem, {
              children: [
                (0, n.jsx)(r.FormSwitch, {
                  hideBorder: !0,
                  value: g,
                  onChange: (e) => {
                    o.Z.updateGuildNotificationSettings(
                      t,
                      { muted: e },
                      u.UE.muted(e),
                    );
                  },
                  style: { marginBottom: 0 },
                  note: S.Z.Messages.FOR_LABEL_MUTE_SEVER_DESCRIPTION_V2,
                  children: S.Z.Messages.FORM_LABEL_MUTE_SERVER.format({
                    name: i.name,
                  }),
                }),
                g &&
                  (0, n.jsxs)("div", {
                    className: E.mutedConfig,
                    children: [
                      (0, n.jsxs)("div", {
                        children: [
                          (0, n.jsx)(r.FormTitle, {
                            tag: "h3",
                            children: S.Z.Messages.MUTE_UNTIL,
                          }),
                          (0, n.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: (function (e) {
                              return null == e || null == e.end_time
                                ? null
                                : S.Z.Messages.MUTED_UNTIL_TIME.format({
                                    endTime: new Date(
                                      e.end_time,
                                    ).toLocaleString(S.Z.getLocale(), {
                                      month: "numeric",
                                      day: "numeric",
                                      hour: "numeric",
                                      minute: "2-digit",
                                    }),
                                  });
                            })(m),
                          }),
                        ],
                      }),
                      (0, n.jsx)(r.SingleSelect, {
                        onChange: (e) => {
                          let s =
                            e > 0 ? l()().add(e, "second").toISOString() : null;
                          o.Z.updateGuildNotificationSettings(
                            t,
                            {
                              mute_config: {
                                selected_time_window: e,
                                end_time: s,
                              },
                              muted: !0,
                            },
                            u.ZB.Muted,
                          );
                        },
                        options: (0, h.W9)(),
                        value:
                          null !==
                            (s = null == m ? void 0 : m.selected_time_window) &&
                          void 0 !== s
                            ? s
                            : N.Oe.ALWAYS,
                      }),
                    ],
                  }),
              ],
            });
      }
    },
    406205: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return C;
        },
      }),
        t(47120),
        t(789020);
      var n = t(735250),
        i = t(470079),
        l = t(120356),
        a = t.n(l),
        r = t(399606),
        o = t(481060),
        d = t(92114),
        c = t(9156),
        u = t(621600),
        h = t(113449),
        N = t(748756),
        S = t(732760),
        E = t(686660),
        g = t(981631),
        m = t(490897),
        _ = t(526761),
        T = t(689938),
        x = t(942748),
        I = t(650455);
      let O = () => [
        { value: E.s8.ALL_MESSAGES, name: T.Z.Messages.NOTIFICATION_PRESET_1 },
        { value: E.s8.MENTIONS, name: T.Z.Messages.NOTIFICATION_PRESET_2 },
        { value: E.s8.NOTHING, name: T.Z.Messages.NOTIFICATION_PRESET_3 },
        { value: E.s8.CUSTOM, name: T.Z.Messages.NOTIFICATION_PRESET_CUSTOM },
      ];
      function C(e) {
        let { guildId: s } = e,
          t = (0, r.e7)([c.ZP], () => c.ZP.getGuildFlags(s)),
          l = (0, r.e7)([c.ZP], () => {
            let e = c.ZP.getGuildUnreadSetting(s),
              t = c.ZP.getMessageNotifications(s);
            return e === m.i.UNSET
              ? t === g.bL.ALL_MESSAGES
                ? m.i.ALL_MESSAGES
                : m.i.ONLY_MENTIONS
              : e;
          }),
          a = (0, r.e7)([c.ZP], () => c.ZP.getMessageNotifications(s)),
          [I, C] = (0, i.useState)(!1),
          v = I ? E.s8.CUSTOM : (0, E.gs)(l, a),
          L = (e) => {
            if (e === E.s8.CUSTOM) {
              C(!0);
              return;
            }
            C(!1), (0, N.V)(s, e);
          };
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)("div", {
              className: x.segmentedControlsContainer,
              children: (0, n.jsx)(o.SegmentedControl, {
                value: v,
                options: O(),
                onChange: (e) => {
                  let { value: s } = e;
                  return L(s);
                },
                className: x.segmentedControl,
                look: "pill",
              }),
            }),
            (0, n.jsx)("div", { className: x.presetSeparator }),
            (0, n.jsxs)("div", {
              className: x.customPresetsContainer,
              children: [
                (0, n.jsxs)("div", {
                  className: x.grid,
                  children: [
                    (0, n.jsx)(M, { unreadSetting: l }),
                    (0, n.jsx)(p, { notificationSetting: a }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: x.grid,
                  children: [
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)(o.Text, {
                          variant: "text-sm/semibold",
                          color: "header-primary",
                          children:
                            T.Z.Messages
                              .NOTIFICATION_SETTINGS_PRESETS_UNREAD_TITLE,
                        }),
                        (0, n.jsx)(o.Text, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children:
                            T.Z.Messages
                              .NOTIFICATION_SETTINGS_PRESETS_UNREAD_SUBTITLE,
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)(o.Text, {
                          variant: "text-sm/semibold",
                          color: "header-primary",
                          children:
                            T.Z.Messages
                              .NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_TITLE,
                        }),
                        (0, n.jsx)(o.Text, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children:
                            T.Z.Messages
                              .NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_SUBTITLE,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: x.grid,
                  children: [
                    (0, n.jsx)(o.SingleSelect, {
                      value: l,
                      className: x.input,
                      onChange: (e) => {
                        C(!1),
                          d.Z.updateGuildNotificationSettings(
                            s,
                            {
                              flags: (0, h.Q4)(
                                t,
                                e === m.i.ALL_MESSAGES
                                  ? _.vc.UNREADS_ALL_MESSAGES
                                  : _.vc.UNREADS_ONLY_MENTIONS,
                              ),
                            },
                            u.UE.unreads(e),
                          );
                      },
                      options: (0, S.y)({ notificationSetting: a }),
                      renderOptionLabel: (e) => {
                        let s =
                          e.disabled &&
                          e.value === m.i.ONLY_MENTIONS &&
                          l !== m.i.ONLY_MENTIONS;
                        return (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("div", {
                              children: (0, n.jsx)(o.Text, {
                                variant: "text-md/normal",
                                color: e.disabled ? "text-muted" : void 0,
                                children: e.label,
                              }),
                            }),
                            s &&
                              (0, n.jsx)(o.Tooltip, {
                                text: T.Z.Messages
                                  .NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED,
                                children: (e) =>
                                  (0, n.jsx)(o.DenyIcon, {
                                    size: "custom",
                                    ...e,
                                    width: 20,
                                    height: 20,
                                    className: x.muted,
                                  }),
                              }),
                          ],
                        });
                      },
                    }),
                    (0, n.jsx)(o.SingleSelect, {
                      className: x.input,
                      value: a,
                      onChange: (e) => {
                        C(!1);
                        let t = { message_notifications: e };
                        e === g.bL.ALL_MESSAGES &&
                          l !== m.i.ALL_MESSAGES &&
                          (t.flags = (0, h.Q4)(
                            c.ZP.getGuildFlags(s),
                            _.vc.UNREADS_ALL_MESSAGES,
                          )),
                          d.Z.updateGuildNotificationSettings(
                            s,
                            t,
                            u.UE.notifications(e),
                          );
                      },
                      options: (0, S.d)({ notificationSetting: a }),
                      renderOptionLabel: (e) => {
                        let s =
                          e.value === g.bL.ALL_MESSAGES &&
                          l !== m.i.ALL_MESSAGES &&
                          a !== g.bL.ALL_MESSAGES;
                        return (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)(o.Text, {
                              variant: "text-md/normal",
                              children: e.label,
                            }),
                            s &&
                              (0, n.jsx)(o.Tooltip, {
                                text: T.Z.Messages
                                  .NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING,
                                children: (e) =>
                                  (0, n.jsx)(o.CircleInformationIcon, {
                                    size: "custom",
                                    ...e,
                                    width: 20,
                                    height: 20,
                                    className: x.muted,
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
      function M(e) {
        let { unreadSetting: s } = e,
          t = [
            {
              badged: !0,
              unread: !0,
              muted: !1,
              name: T.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_1,
            },
            {
              badged: !1,
              unread: !0,
              muted: !0,
              name: T.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_2,
            },
            {
              badged: !1,
              unread: !1,
              muted: !0,
              name: T.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_3,
            },
          ];
        return (
          s === m.i.ALL_MESSAGES && (t[1].muted = !1),
          (0, n.jsx)("div", {
            className: x.channeList,
            children: t.map((e) =>
              (0, n.jsxs)(
                "div",
                {
                  className: x.channelListChannel,
                  children: [
                    (0, n.jsxs)("div", {
                      className: x.channelListChannelName,
                      children: [
                        (0, n.jsx)("div", {
                          className: a()(x.unread, {
                            [x.hidden]: !e.unread,
                            [x.unreadMuted]: e.muted,
                          }),
                        }),
                        (0, n.jsx)(o.TextIcon, {
                          size: "xxs",
                          color: "currentColor",
                          className: a()(x.channelListChannelIcon, {
                            [x.muted]: e.muted,
                          }),
                        }),
                        (0, n.jsx)(o.Text, {
                          variant: "text-xs/normal",
                          color: e.muted ? "text-muted" : void 0,
                          children: e.name,
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: a()(x.badge, { [x.hidden]: !e.badged }),
                      children: (0, n.jsx)(o.NumberBadge, { count: 1 }),
                    }),
                  ],
                },
                e.name,
              ),
            ),
          })
        );
      }
      function p(e) {
        return (0, n.jsxs)("div", {
          className: x.mockMessage,
          children: [
            e.notificationSetting === g.bL.NO_MESSAGES &&
              (0, n.jsx)("div", { className: x.mockMessageDisabled }),
            (0, n.jsx)("div", {
              children: (0, n.jsx)("img", {
                className: x.mockMessageAvatar,
                src: I,
                alt: "",
              }),
            }),
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)(o.Text, {
                  variant: "text-xs/medium",
                  children:
                    T.Z.Messages
                      .NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_AUTHOR,
                }),
                e.notificationSetting === g.bL.ALL_MESSAGES &&
                  (0, n.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children:
                      T.Z.Messages
                        .NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE,
                  }),
                e.notificationSetting !== g.bL.ALL_MESSAGES &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsxs)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: ["@Roka", " "],
                      }),
                      (0, n.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tag: "span",
                        children:
                          T.Z.Messages
                            .NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE,
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
    },
    444899: function (e, s, t) {
      t.d(s, {
        f: function () {
          return x;
        },
      }),
        t(47120);
      var n = t(735250),
        i = t(470079),
        l = t(481060),
        a = t(92114),
        r = t(225433),
        o = t(933557),
        d = t(471445),
        c = t(600164),
        u = t(592125),
        h = t(324067),
        N = t(699516),
        S = t(594174),
        E = t(621600),
        g = t(981631),
        m = t(689938),
        _ = t(736475);
      function T(e, s, t) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = t),
          e
        );
      }
      class x extends i.PureComponent {
        highlight() {
          this.setState({ highlight: !0 }, () => {
            null != this._timeout && clearTimeout(this._timeout),
              (this._timeout = setTimeout(this.unhighlight, 1e3));
          });
        }
        componentWillUnmount() {
          null != this._timeout && clearTimeout(this._timeout);
        }
        setMessageNotification(e, s, t) {
          let { channel: n } = this.props,
            i = n.getGuildId();
          null != i &&
            a.Z.updateChannelOverrideSettings(
              i,
              n.id,
              { message_notifications: e, muted: null != s && s },
              t,
            );
        }
        handleRadioChange(e) {
          this.setMessageNotification(e, void 0, E.UE.notifications(e));
        }
        renderMessageNotificationsRadioOption(e) {
          let {
              messageNotifications: s,
              guildMuted: t,
              muted: i,
              guildMessageNotifications: a,
              checkboxColor: r,
            } = this.props,
            o = s === e;
          (null == s || s === g.bL.NULL) && e === a && (o = !0);
          let d = l.Checkbox.Types.INVERTED;
          return (
            (i || s === g.bL.NULL || null == s) && (d = l.Checkbox.Types.GHOST),
            (0, n.jsx)(l.Checkbox, {
              value: !t && o,
              disabled: t,
              shape: l.Checkbox.Shapes.ROUND,
              color: r,
              type: d,
              onChange: this.handleRadioChange.bind(this, e),
            })
          );
        }
        renderName() {
          let e, s;
          let { channel: t } = this.props;
          null != t.parent_id && (e = u.Z.getChannel(t.parent_id));
          let i = (0, d.KS)(t);
          if (
            t.type === g.d4z.GUILD_CATEGORY &&
            null != t.guild_id &&
            "" !== t.guild_id
          ) {
            let e = h.Z.getCategories(t.guild_id);
            s = m.Z.Messages.NUM_CHANNELS.format({
              num: null != e[t.id] ? e[t.id].length : 0,
            });
          } else
            s =
              null != e
                ? m.Z.Messages.IN_CATEGORY.format({
                    categoryName: (0, o.F6)(e, S.default, N.Z),
                  })
                : m.Z.Messages.NO_CATEGORY;
          return (0, n.jsxs)(c.Z, {
            grow: 1,
            className: _.nameContainer,
            children: [
              null != i ? (0, n.jsx)(i, { className: _.icon }) : null,
              (0, n.jsxs)("div", {
                className: _.channelNameContainer,
                children: [
                  (0, n.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    className: _.channelName,
                    children: (0, o.F6)(t, S.default, N.Z),
                  }),
                  (0, n.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    className: _.channelNameByline,
                    children: s,
                  }),
                ],
              }),
            ],
          });
        }
        renderOptions() {
          let { muted: e, guildMuted: s } = this.props;
          return (0, n.jsxs)(c.Z, {
            grow: 0,
            shrink: 0,
            className: _.checkboxGroup,
            justify: c.Z.Justify.AROUND,
            align: c.Z.Align.CENTER,
            children: [
              (0, n.jsx)(c.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: s ? _.checkboxContainerMuted : _.checkboxContainer,
                children: this.renderMessageNotificationsRadioOption(
                  g.bL.ALL_MESSAGES,
                ),
              }),
              (0, n.jsx)(c.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: s ? _.checkboxContainerMuted : _.checkboxContainer,
                children: this.renderMessageNotificationsRadioOption(
                  g.bL.ONLY_MENTIONS,
                ),
              }),
              (0, n.jsx)(c.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: s ? _.checkboxContainerMuted : _.checkboxContainer,
                children: this.renderMessageNotificationsRadioOption(
                  g.bL.NO_MESSAGES,
                ),
              }),
              (0, n.jsx)(c.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: _.checkboxMute,
                children: (0, n.jsx)(l.Checkbox, {
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
          return (0, n.jsxs)(l.Card, {
            outline: !0,
            editable: !0,
            className: e ? _.overrideHighlight : _.override,
            children: [
              this.renderName(),
              this.renderOptions(),
              (0, n.jsx)(r.Z, {
                className: _.removeOverride,
                onClick: this.handleDelete,
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            T(this, "_timeout", void 0),
            T(this, "state", { highlight: !1 }),
            T(this, "unhighlight", () => {
              this.setState({ highlight: !1 });
            }),
            T(this, "handleMute", (e, s) => {
              let { messageNotifications: t } = this.props;
              this.setMessageNotification(
                null != t ? t : g.bL.NULL,
                s,
                E.UE.muted(s),
              );
            }),
            T(this, "handleDelete", () => {
              let { onDelete: e, channel: s } = this.props;
              this.setMessageNotification(g.bL.NULL, !1, E.ZB.OverrideDeleted),
                null != e && e(s.id);
            });
        }
      }
    },
    610617: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return j;
        },
      }),
        t(47120);
      var n = t(735250),
        i = t(470079),
        l = t(120356),
        a = t.n(l),
        r = t(392711),
        o = t.n(r),
        d = t(831209),
        c = t(442837),
        u = t(704215),
        h = t(433517),
        N = t(481060),
        S = t(243778),
        E = t(430824),
        g = t(9156),
        m = t(594174),
        _ = t(74538),
        T = t(671105),
        x = t(552958),
        I = t(213931),
        O = t(940165),
        C = t(820408),
        M = t(921944),
        p = t(871465),
        v = t(689938),
        L = t(364966);
      function j(e) {
        let { guildId: s, onClose: t, isRedesign: l = !1 } = e,
          r = (0, c.e7)([E.Z], () => E.Z.getGuild(s)),
          j = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
          { playSound: Z, isPlaying: A, soundpackPlaying: R } = (0, x.Z)(),
          f = (0, T.OR)(s),
          b = _.ZP.canUseCustomNotificationSounds(j),
          U = b ? f : p.YC.CLASSIC,
          G = i.useRef(0),
          P = i.useRef(-1),
          [F, D] = i.useState(!1),
          k = (0, p.LB)(),
          B = i.useCallback(() => {
            clearTimeout(P.current),
              (G.current += 1),
              G.current > 10 && (D(!0), h.K.set(p.CZ, !0)),
              (P.current = setTimeout(() => {
                G.current = 0;
              }, 1e3));
          }, []),
          [w, H] = o().partition(
            k,
            (e) => !e.requirePremium || (e.requirePremium && b),
          ),
          y = w.map((e) => {
            var s, t, n, i;
            return {
              name: e.label,
              value: e.value,
              desc: e.description,
              radioBarClassName:
                ((s = e.value),
                (t = R),
                (n = A),
                (i = l),
                a()(L.option, {
                  [L.optionRedesign]: i,
                  [L.optionPlaying]: s === t && n,
                })),
            };
          }),
          [Y, V] = (0, S.US)([
            u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE,
          ]),
          z = Y === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
        i.useEffect(
          () => () => {
            V(M.L.AUTO_DISMISS);
          },
          [V],
        );
        let W = _.ZP.canUseCustomNotificationSounds(j),
          q = (0, c.e7)([g.ZP], () => g.ZP.isMuted(s), [s]);
        return null == j
          ? null
          : (0, n.jsxs)("div", {
              children: [
                (0, n.jsxs)("div", {
                  className: L.header,
                  children: [
                    (0, n.jsx)(N.Heading, {
                      variant: "heading-md/semibold",
                      children: v.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND,
                    }),
                    (0, n.jsx)(N.Clickable, {
                      onClick: B,
                      className: L.nitroWheelContainer,
                      children: (0, n.jsx)(N.NitroWheelIcon, {
                        size: "md",
                        color: "currentColor",
                        className: L.nitroWheel,
                      }),
                    }),
                    z &&
                      (0, n.jsx)(N.TextBadge, {
                        className: L.newBadge,
                        text: v.Z.Messages.NEW,
                      }),
                  ],
                }),
                (0, n.jsx)(N.Text, {
                  className: L.subheader,
                  variant: "text-sm/normal",
                  children:
                    v.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_DESCRIPTION_V2.format(
                      {
                        guildName: (e, s) =>
                          (0, n.jsx)(
                            N.Text,
                            {
                              tag: "span",
                              variant: "text-sm/medium",
                              children: null == r ? void 0 : r.name,
                            },
                            s,
                          ),
                      },
                    ),
                }),
                q &&
                  (0, n.jsxs)("div", {
                    className: L.warningContainer,
                    children: [
                      (0, n.jsx)(N.CircleWarningIcon, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: d.Z.STATUS_WARNING,
                      }),
                      (0, n.jsx)(N.Text, {
                        className: L.warningLabel,
                        variant: "text-sm/medium",
                        children:
                          v.Z.Messages
                            .PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_WARNING,
                      }),
                    ],
                  }),
                (0, n.jsx)(N.FormItem, {
                  className: L.optionsContainer,
                  title:
                    v.Z.Messages
                      .PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_LABEL,
                  children: (0, n.jsxs)("div", {
                    className: a()({ [L.options]: !W }),
                    children: [
                      (0, n.jsx)(N.RadioGroup, {
                        className: a()({ [L.options]: W }),
                        value: null != U ? U : p.YC.CLASSIC,
                        onChange: (e) => {
                          Z(e.value),
                            b &&
                              (0, I.t)(s, U, e.value, "notificationSettings");
                        },
                        options: y,
                        radioItemClassName: L.option,
                      }),
                      H.map((e, s) =>
                        (0, n.jsx)(
                          O.Z,
                          {
                            className: L.playableOption,
                            label: e.label,
                            description: e.description,
                            soundpack: e.value,
                            location: "notificationSettings",
                          },
                          "sound_option_".concat(s),
                        ),
                      ),
                    ],
                  }),
                }),
                !W && (0, n.jsx)(C.Z, { onClose: t }),
              ],
            });
      }
    },
    940165: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return N;
        },
      });
      var n = t(735250);
      t(470079);
      var i = t(120356),
        l = t.n(i),
        a = t(793030),
        r = t(481060),
        o = t(759198),
        d = t(552958),
        c = t(767157),
        u = t(689938),
        h = t(618900);
      function N(e) {
        let {
            label: s,
            className: t,
            description: i,
            soundpack: N,
            location: S,
          } = e,
          { playSound: E, isPlaying: g } = (0, d.Z)();
        return (0, n.jsxs)(r.Clickable, {
          "aria-label": u.Z.Messages.PLAY,
          className: l()(h.container, t, { [h.containerActive]: g }),
          onClick: () => {
            (0, c.Z)(N, S), E(N);
          },
          children: [
            (0, n.jsx)(r.CirclePlayIcon, {
              className: h.playButton,
              color: g
                ? r.tokens.colors.INTERACTIVE_ACTIVE
                : r.tokens.colors.INTERACTIVE_NORMAL,
            }),
            (0, n.jsxs)("div", {
              className: h.textContainer,
              children: [
                (0, n.jsx)(o.Z, { variant: "text-md/medium", children: s }),
                (0, n.jsx)(a.xv, { variant: "text-sm/normal", children: i }),
              ],
            }),
          ],
        });
      }
    },
    820408: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return _;
        },
      }),
        t(47120);
      var n = t(735250),
        i = t(470079),
        l = t(481060),
        a = t(230711),
        r = t(2052),
        o = t(434650),
        d = t(906732),
        c = t(436774),
        u = t(690221),
        h = t(626135),
        N = t(197115),
        S = t(474936),
        E = t(981631),
        g = t(689938),
        m = t(999317);
      function _(e) {
        let { onClose: s } = e,
          t = (0, r.O)(),
          { analyticsLocations: _ } = (0, d.ZP)(),
          [T, x] = i.useState(!1),
          I = i.useCallback(
            (e) => {
              if (!T && !!e)
                h.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                  type: S.cd.CUSTOM_NOTIFICATION_SOUNDS_SETTINGS_UPSELL,
                  location: t.location,
                  location_stack: _,
                }),
                  x(!0);
            },
            [t.location, _, T],
          ),
          O = (0, o.O)(I, 0.8, !0);
        return (0, n.jsxs)("div", {
          ref: O,
          className: m.container,
          children: [
            (0, n.jsx)(l.NitroWheelIcon, {
              size: "md",
              color: c.JX.PREMIUM_TIER_2,
              className: m.nitroWheel,
            }),
            (0, n.jsxs)(l.Text, {
              className: m.text,
              variant: "text-sm/normal",
              children: [
                g.Z.Messages
                  .PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_UPSELL,
                " ",
                (0, n.jsx)(u.Z, {
                  onClick: () => {
                    s(), a.Z.open(E.oAB.PREMIUM);
                  },
                  children: g.Z.Messages.LEARN_MORE,
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: m.nitroButton,
              children: (0, n.jsx)(N.Z, {
                showGradient: !0,
                buttonText: g.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
                size: l.Button.Sizes.SMALL,
                shinyButtonClassName: m.nitroButton,
                subscriptionTier: S.Si.TIER_2,
                premiumModalAnalyticsLocation: {
                  section:
                    E.jXE.PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL,
                },
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=e55ba871d81469488509.js.map
