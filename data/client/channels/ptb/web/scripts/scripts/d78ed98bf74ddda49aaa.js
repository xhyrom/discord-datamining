"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93826"],
  {
    775322: function (e) {
      e.exports = "/assets/e5e07cf5a6e7f19be45b.svg";
    },
    853453: function (e) {
      e.exports = "/assets/3cfc93ceb08d74acbcf8.svg";
    },
    570928: function (e, s, n) {
      var r,
        t,
        i,
        l,
        a = n(735250),
        o = n(470079),
        c = n(120356),
        d = n.n(c),
        u = n(207341);
      class h extends (l = o.PureComponent) {
        render() {
          let {
            tag: e,
            children: s,
            hoverText: n,
            className: r,
            forceHover: t,
            ...i
          } = this.props;
          return (0, a.jsxs)("div", {
            ...i,
            className: d()(r, u.hoverRoll, {
              [u.disabled]: null == n,
              [u.forceHover]: t,
            }),
            children: [
              (0, a.jsx)(e, { className: u.hovered, children: n }),
              (0, a.jsx)(e, { className: u.default, children: s }),
            ],
          });
        }
      }
      (i = { tag: "div", forceHover: !1 }),
        (t = "defaultProps") in (r = h)
          ? Object.defineProperty(r, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[t] = i),
        (s.Z = h);
    },
    787740: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return a;
        },
      });
      var r = n(735250);
      n(470079);
      var t = n(481060),
        i = n(688465),
        l = n(689938);
      function a(e) {
        let { className: s } = e;
        return (0, r.jsx)(t.Tooltip, {
          text: l.Z.Messages.BROADCASTING_BETA_TOOLTIP_TEXT,
          children: (e) => (0, r.jsx)(i.Z, { ...e, className: s }),
        });
      }
    },
    16206: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return i;
        },
      });
      var r = n(981631),
        t = n(689938);
      function i(e) {
        if (null == e) return null;
        switch (e.type) {
          case r.d4z.GUILD_ANNOUNCEMENT:
            return t.Z.Messages.NEWS_CHANNEL;
          case r.d4z.GUILD_STORE:
            return t.Z.Messages.STORE_CHANNEL;
          case r.d4z.DM:
          case r.d4z.GROUP_DM:
            return t.Z.Messages.DM;
          case r.d4z.PRIVATE_THREAD:
            return t.Z.Messages.PRIVATE_THREAD;
          case r.d4z.ANNOUNCEMENT_THREAD:
          case r.d4z.PUBLIC_THREAD:
            return t.Z.Messages.THREAD;
          case r.d4z.GUILD_TEXT:
            return t.Z.Messages.TEXT_CHANNEL;
          case r.d4z.GUILD_FORUM:
            return e.isMediaChannel()
              ? t.Z.Messages.MEDIA_CHANNEL
              : t.Z.Messages.FORUM_CHANNEL;
          case r.d4z.GUILD_MEDIA:
            return t.Z.Messages.MEDIA_CHANNEL;
          case r.d4z.GUILD_STAGE_VOICE:
            return t.Z.Messages.STAGE_CHANNEL;
          case r.d4z.GUILD_VOICE:
            return t.Z.Messages.VOICE_CHANNEL;
          case r.d4z.GUILD_CATEGORY:
          default:
            return null;
        }
      }
    },
    214852: function (e, s, n) {
      n.d(s, {
        z: function () {
          return l;
        },
      }),
        n(47120);
      var r = n(470079),
        t = n(442837),
        i = n(353926);
      function l(e) {
        let [s, n] = (0, t.Wu)([i.Z], () => [
          i.Z.getAllUserExperimentDescriptors(),
          i.Z.getGuildExperiments(),
        ]);
        r.useEffect(() => {
          e.trigger();
        }, [e, s, n]);
      }
    },
    879463: function (e, s, n) {
      n.d(s, {
        eP: function () {
          return r;
        },
      });
      let r = (0, n(818083).B)({
        kind: "user",
        id: "2023-12_pause_subscriptions_experiment",
        label: "Pause Subscriptions Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Pause Subscription Enabled",
            config: { enabled: !0 },
          },
        ],
      });
      s.ZP = (e) => {
        let {
          location: s,
          autoTrackExposure: n = !0,
          trackExposureOptions: t = {},
        } = e;
        return r.useExperiment(
          { location: s },
          { autoTrackExposure: n, trackExposureOptions: t },
        );
      };
    },
    822070: function (e, s, n) {
      n.d(s, {
        $: function () {
          return r;
        },
      });
      let r = (0, n(818083).B)({
        kind: "user",
        id: "2024-07_referral_program_sender_incentive",
        label: "Referral Program Sender Incentive",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 0, label: "Disabled", config: { enabled: !1 } },
          { id: 1, label: "Enabled", config: { enabled: !0 } },
        ],
      });
    },
    520540: function (e, s, n) {
      n.d(s, {
        g: function () {
          return l;
        },
        p: function () {
          return t;
        },
      });
      var r,
        t,
        i = n(818083);
      ((r = t || (t = {}))[(r.VARIANT_1 = 0)] = "VARIANT_1"),
        (r[(r.VARIANT_2 = 1)] = "VARIANT_2");
      let l = (0, i.B)({
        kind: "user",
        id: "2024-03_referral_program_sender",
        label: "Referral Program Sender Experience",
        defaultConfig: {
          enabled: !1,
          subscriberHomeVariant: null,
          eligibleToFetch: !1,
        },
        treatments: [
          {
            id: 0,
            label: "Disabled",
            config: {
              enabled: !1,
              subscriberHomeVariant: null,
              eligibleToFetch: !0,
            },
          },
          {
            id: 1,
            label: "Enabled",
            config: {
              enabled: !0,
              subscriberHomeVariant: 0,
              eligibleToFetch: !0,
            },
          },
          {
            id: 2,
            label: "Enabled",
            config: {
              enabled: !0,
              subscriberHomeVariant: 1,
              eligibleToFetch: !0,
            },
          },
        ],
      });
    },
    415795: function (e, s, n) {
      n.d(s, {
        $W: function () {
          return A;
        },
        Mx: function () {
          return S;
        },
        PZ: function () {
          return Z;
        },
        h4: function () {
          return T;
        },
        ic: function () {
          return M;
        },
        n5: function () {
          return L;
        },
        rU: function () {
          return U;
        },
        s8: function () {
          return R;
        },
      }),
        n(47120);
      var r,
        t = n(735250),
        i = n(470079),
        l = n(481060),
        a = n(815372),
        o = n(43267),
        c = n(933557),
        d = n(471445),
        u = n(16206),
        h = n(790145),
        p = n(245216),
        m = n(925329),
        x = n(565138),
        C = n(754688),
        N = n(237583),
        f = n(430824),
        E = n(699516),
        g = n(594174),
        b = n(51144),
        _ = n(689938),
        I = n(30352);
      function v(e, s, n) {
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
      class j extends i.PureComponent {
        componentDidMount() {
          let { focused: e, onFocus: s } = this.props,
            { node: n } = this;
          e && null != n && s(n);
        }
        componentDidUpdate(e) {
          let { focused: s, onFocus: n } = this.props,
            { node: r } = this;
          null != r && s && !e.focused && n(r);
        }
        render() {
          let {
            focused: e,
            children: s,
            score: n,
            onContextMenu: r,
            id: i,
            "aria-label": a,
          } = this.props;
          return (0, t.jsxs)(l.Clickable, {
            role: "option",
            id: i,
            "aria-label": a,
            "aria-selected": e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: I.result,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: r,
            children: [
              s,
              null != n
                ? (0, t.jsx)("div", { className: I.score, children: n >> 0 })
                : null,
            ],
          });
        }
        constructor(...e) {
          super(...e),
            v(this, "node", void 0),
            v(this, "handleClick", (e) => {
              e.preventDefault();
              let { onClick: s } = this.props,
                { node: n } = this;
              null != n && s(e, n);
            }),
            v(this, "handleMouseEnter", (e) => {
              let { onMouseEnter: s } = this.props,
                { node: n } = this;
              null != n && s(e, n);
            }),
            v(this, "setRef", (e) => {
              this.node = e;
            });
        }
      }
      class M extends i.Component {
        renderIcon() {
          let { guild: e } = this.props;
          return (0, t.jsx)("div", {
            className: I.guildIconContainer,
            children: (0, t.jsx)(x.Z, {
              tabIndex: -1,
              guild: e,
              size: x.Z.Sizes.MINI,
              className: I.guildIcon,
            }),
          });
        }
        renderName() {
          let { guild: e } = this.props;
          return (0, t.jsx)("div", {
            className: I.name,
            children: (0, t.jsx)("span", {
              className: I.match,
              children: e.name,
            }),
          });
        }
        renderContent() {
          let { unread: e, children: s } = this.props;
          return (0, t.jsxs)("div", {
            className: e ? I.contentUnread : I.contentDefault,
            children: [
              this.renderIcon(),
              this.renderName(),
              (0, t.jsx)("div", { className: I.misc, children: s }),
            ],
          });
        }
        getAccessibilityLabel() {
          let { guild: e } = this.props;
          return _.Z.Messages.QUICK_SWITCHER_RESULTS_GUILD_LABEL.format({
            name: e.name,
          });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            onContextMenu: r,
            focused: i,
            score: l,
            id: a,
          } = this.props;
          return (0, t.jsx)(j, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            onContextMenu: r,
            focused: i,
            score: l,
            children: this.renderContent(),
          });
        }
      }
      class A extends (r = i.Component) {
        renderIcon() {
          var e;
          let { channel: s } = this.props,
            n = (0, d.KS)(s);
          if (null == n) return null;
          let r = null !== (e = (0, u.Z)(s)) && void 0 !== e ? e : "";
          return (0, t.jsx)("div", {
            className: I.iconContainer,
            role: "img",
            "aria-label": r,
            children: (0, t.jsx)(n, {
              className: I.icon,
              size: "xs",
              color: "currentColor",
            }),
          });
        }
        renderName() {
          let e, s;
          let { mentions: n, category: r, channel: i } = this.props;
          return (
            null != n &&
              n > 0 &&
              (e = (0, t.jsx)(h.Z, { className: I.badge, value: n })),
            null != r &&
              (s = (0, t.jsx)("span", {
                className: I.note,
                children: (0, c.F6)(r, g.default, E.Z),
              })),
            (0, t.jsxs)("div", {
              className: I.name,
              children: [
                (0, t.jsx)("span", {
                  className: I.match,
                  children: (0, c.F6)(i, g.default, E.Z),
                }),
                e,
                this.renderVoiceStates(),
                s,
              ],
            })
          );
        }
        renderVoiceStates() {
          let { voiceStates: e, channel: s } = this.props;
          return null == e
            ? null
            : (0, t.jsx)(N.Z, {
                className: I.voiceSummaryContainer,
                guildId: s.guild_id,
                users: e.map((e) => {
                  let { user: s } = e;
                  return { user: s };
                }),
                max: 4,
              });
        }
        renderContent() {
          let { unread: e, mentions: s, children: n } = this.props;
          return (0, t.jsxs)("div", {
            "aria-hidden": !0,
            className:
              e || (null != s && s > 0) ? I.contentUnread : I.contentDefault,
            children: [
              this.renderIcon(),
              this.renderName(),
              (0, t.jsx)("div", { className: I.misc, children: n }),
            ],
          });
        }
        getAccessibilityLabel() {
          var e;
          let { channel: s } = this.props,
            n =
              null === (e = f.Z.getGuild(this.props.channel.guild_id)) ||
              void 0 === e
                ? void 0
                : e.name,
            r = (0, c.F6)(s, g.default, E.Z),
            t = (0, u.Z)(s);
          return _.Z.Messages.QUICK_SWITCHER_RESULTS_CHANNEL_LABEL.format({
            name: r,
            type: t,
            guild: n,
          });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            onContextMenu: r,
            focused: i,
            score: l,
            id: a,
          } = this.props;
          return (0, t.jsx)(j, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            onContextMenu: r,
            focused: i,
            score: l,
            children: this.renderContent(),
          });
        }
      }
      v(A, "defaultProps", { unread: !1 });
      class Z extends i.Component {
        renderIcon() {
          let { channel: e } = this.props;
          return (0, t.jsx)("div", {
            className: I.dmIconContainer,
            children: (0, t.jsx)(l.Avatar, {
              src: (0, o.x)(e),
              size: l.AvatarSizes.SIZE_20,
              "aria-hidden": !0,
            }),
          });
        }
        renderName() {
          let e;
          let { mentions: s, channel: n } = this.props;
          return (
            null != s &&
              s > 0 &&
              (e = (0, t.jsx)(h.Z, { className: I.badge, value: s })),
            (0, t.jsxs)("div", {
              className: I.name,
              children: [
                (0, t.jsx)("span", {
                  className: I.match,
                  children: (0, c.F6)(n, g.default, E.Z),
                }),
                e,
              ],
            })
          );
        }
        renderContent() {
          let { mentions: e, children: s } = this.props;
          return (0, t.jsxs)("div", {
            className: null != e && e > 0 ? I.contentUnread : I.contentDefault,
            children: [
              this.renderIcon(),
              this.renderName(),
              (0, t.jsx)("div", { className: I.misc, children: s }),
            ],
          });
        }
        getAccessibilityLabel() {
          let { channel: e, mentions: s } = this.props,
            n = (0, c.F6)(e, g.default, E.Z);
          return null != s && s > 0
            ? _.Z.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_UNREAD_LABEL.format({
                name: n,
                mentions: s,
              })
            : _.Z.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_LABEL.format({
                name: n,
              });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            onContextMenu: r,
            focused: i,
            score: l,
            id: a,
          } = this.props;
          return (0, t.jsx)(j, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            onContextMenu: r,
            focused: i,
            score: l,
            children: this.renderContent(),
          });
        }
      }
      class L extends i.Component {
        renderIcon() {
          let { user: e } = this.props;
          return (0, t.jsx)("div", {
            className: I.iconContainer,
            children: (0, t.jsx)(l.Avatar, {
              src: e.getAvatarURL(void 0, 20),
              "aria-hidden": !0,
              size: l.AvatarSizes.SIZE_20,
            }),
          });
        }
        getDisplayNickname() {
          let e;
          let { user: s, comparator: n } = this.props,
            r = E.Z.getNickname(s.id);
          return (
            ((e = n === s.tag || null == n || "" === n ? s.username : n) ===
              s.username ||
              e === s.id) &&
              (e = null != r ? r : b.ZP.getName(s)),
            e
          );
        }
        renderName() {
          let e;
          let { user: s, mentions: n } = this.props,
            r = this.getDisplayNickname();
          return (
            null != n &&
              n > 0 &&
              (e = (0, t.jsx)(h.Z, { className: I.badge, value: n })),
            (0, t.jsxs)("div", {
              className: I.name,
              children: [
                (0, t.jsx)("span", { className: I.match, children: r }),
                e,
                (0, t.jsx)("span", {
                  className: I.username,
                  children: b.ZP.getUserTag(s),
                }),
              ],
            })
          );
        }
        renderContent() {
          let { children: e, mentions: s } = this.props;
          return (0, t.jsxs)("div", {
            className: null != s && s > 0 ? I.contentUnread : I.contentDefault,
            children: [
              this.renderIcon(),
              this.renderName(),
              (0, t.jsx)("div", { className: I.misc, children: e }),
            ],
          });
        }
        getAccessibilityLabel() {
          let { mentions: e, user: s } = this.props,
            n = this.getDisplayNickname(),
            r = b.ZP.getUserTag(s);
          return null != e && e > 0
            ? _.Z.Messages.QUICK_SWITCHER_RESULTS_USER_UNREAD_LABEL.format({
                name: n,
                id: r,
                mentions: e,
              })
            : _.Z.Messages.QUICK_SWITCHER_RESULTS_USER_LABEL.format({
                name: n,
                id: r,
              });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            onContextMenu: r,
            focused: i,
            score: l,
            id: a,
          } = this.props;
          return (0, t.jsx)(j, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            onContextMenu: r,
            focused: i,
            score: l,
            children: this.renderContent(),
          });
        }
      }
      class S extends i.Component {
        renderContent() {
          let { children: e, application: s } = this.props;
          return (0, t.jsxs)("div", {
            className: I.contentDefault,
            children: [
              (0, t.jsx)("div", {
                className: I.iconContainer,
                children: (0, t.jsx)(m.Z, {
                  tabIndex: -1,
                  className: I.gameIcon,
                  game: s,
                  size: I.gameIconSize,
                }),
              }),
              s.name,
              (0, t.jsx)("div", { className: I.misc, children: e }),
            ],
          });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            focused: r,
            id: i,
          } = this.props;
          return (0, t.jsx)(j, {
            id: i,
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            focused: r,
            children: this.renderContent(),
          });
        }
      }
      class T extends i.Component {
        render() {
          return (0, t.jsx)("div", {
            className: I.__invalid_resultDefault,
            children: (0, t.jsx)("div", {
              className: I.contentDefault,
              children: (0, t.jsx)("div", {
                className: I.header,
                children: this.props.children,
              }),
            }),
          });
        }
      }
      class U extends i.Component {
        renderContent() {
          let e, s;
          let { link: n, children: r } = this.props,
            i = (0, C.Qj)(n.path);
          return (
            null == i || void 0 === i.messageId
              ? ((e = _.Z.Messages.QUICKSWITCHER_LINK_UNKNOWN),
                (s = (0, t.jsx)(l.LinkIcon, {
                  size: "xs",
                  color: "currentColor",
                })))
              : (0, C.VO)(i)
                ? ((e = _.Z.Messages.QUICKSWITCHER_LINK_MESSAGE),
                  (s = (0, t.jsx)(p.Z, { size: "xs", color: "currentColor" })))
                : ((e = _.Z.Messages.QUICKSWITCHER_LINK_NO_ACCESS),
                  (s = (0, t.jsx)(l.LockIcon, {
                    size: "xs",
                    color: "currentColor",
                  }))),
            (0, t.jsxs)("div", {
              className: I.contentDefault,
              children: [
                (0, t.jsx)("div", { className: I.iconContainer, children: s }),
                e,
                (0, t.jsx)("div", { className: I.misc, children: r }),
              ],
            })
          );
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            onContextMenu: r,
            focused: i,
            score: l,
            id: a,
          } = this.props;
          return (0, t.jsx)(j, {
            id: a,
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            onContextMenu: r,
            focused: i,
            score: l,
            children: this.renderContent(),
          });
        }
      }
      class R extends i.Component {
        renderContent() {
          let e;
          let { navigationRecord: s, children: n } = this.props,
            r = "";
          switch (s.type) {
            case a.Ky.SHOP:
              (r = _.Z.Messages.COLLECTIBLES_SHOP),
                (e = (0, t.jsx)(l.ShopIcon, {
                  size: "xs",
                  color: "currentColor",
                }));
              break;
            case a.Ky.NITRO_HOME:
              (r = _.Z.Messages.PREMIUM),
                (e = (0, t.jsx)(l.NitroWheelIcon, {
                  size: "xs",
                  color: "currentColor",
                }));
              break;
            case a.Ky.QUEST_HOME:
              (r = _.Z.Messages.QUESTS),
                (e = (0, t.jsx)(l.QuestsIcon, {
                  size: "xs",
                  color: "currentColor",
                }));
              break;
            default:
              (r = s.id),
                (e = (0, t.jsx)(l.LinkIcon, {
                  size: "xs",
                  color: "currentColor",
                }));
          }
          return (0, t.jsxs)("div", {
            className: I.contentDefault,
            children: [
              (0, t.jsx)("div", { className: I.iconContainer, children: e }),
              r,
              (0, t.jsx)("div", { className: I.misc, children: n }),
            ],
          });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            onContextMenu: r,
            focused: i,
            score: l,
            id: a,
          } = this.props;
          return (0, t.jsx)(j, {
            id: a,
            onMouseEnter: e,
            onClick: s,
            onFocus: n,
            onContextMenu: r,
            focused: i,
            score: l,
            children: this.renderContent(),
          });
        }
      }
    },
    460562: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return i;
        },
      });
      var r = n(735250);
      n(470079);
      var t = n(325767);
      function i(e) {
        let {
          width: s = 32,
          height: n = 32,
          color: i = "currentColor",
          ...l
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, t.Z)(l),
          width: s,
          height: n,
          viewBox: "0 0 12 12",
          fill: "none",
          children: [
            (0, r.jsx)("path", { d: "M7.25 1H4.75V7.25H7.25V1Z", fill: i }),
            (0, r.jsx)("path", {
              d: "M4.75 9.75C4.75 10.4167 5.33333 11 6 11C6.66667 11 7.25 10.4167 7.25 9.75C7.25 9.08333 6.66667 8.5 6 8.5C5.33333 8.5 4.75 9.08333 4.75 9.75Z",
              fill: i,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=d78ed98bf74ddda49aaa.js.map
