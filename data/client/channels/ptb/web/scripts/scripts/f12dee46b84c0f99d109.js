"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24582"],
  {
    775322: function (e) {
      e.exports = "/assets/e5e07cf5a6e7f19be45b.svg";
    },
    853453: function (e) {
      e.exports = "/assets/3cfc93ceb08d74acbcf8.svg";
    },
    570928: function (e, n, t) {
      var r,
        s,
        i,
        l,
        a = t(200651),
        o = t(192379),
        c = t(120356),
        d = t.n(c),
        u = t(207341);
      class h extends (l = o.PureComponent) {
        render() {
          let {
            tag: e,
            children: n,
            hoverText: t,
            className: r,
            forceHover: s,
            ...i
          } = this.props;
          return (0, a.jsxs)("div", {
            ...i,
            className: d()(r, u.hoverRoll, {
              [u.disabled]: null == t,
              [u.forceHover]: s,
            }),
            children: [
              (0, a.jsx)(e, { className: u.hovered, children: t }),
              (0, a.jsx)(e, { className: u.default, children: n }),
            ],
          });
        }
      }
      (i = { tag: "div", forceHover: !1 }),
        (s = "defaultProps") in (r = h)
          ? Object.defineProperty(r, s, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[s] = i),
        (n.Z = h);
    },
    16206: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var r = t(981631),
        s = t(388032);
      function i(e) {
        if (null == e) return null;
        switch (e.type) {
          case r.d4z.GUILD_ANNOUNCEMENT:
            return s.intl.string(s.t.l1dkSE);
          case r.d4z.GUILD_STORE:
            return s.intl.string(s.t["P1/Erq"]);
          case r.d4z.DM:
          case r.d4z.GROUP_DM:
            return s.intl.string(s.t.jN2DfX);
          case r.d4z.PRIVATE_THREAD:
            return s.intl.string(s.t.F1zyvb);
          case r.d4z.ANNOUNCEMENT_THREAD:
          case r.d4z.PUBLIC_THREAD:
            return s.intl.string(s.t["7Xm5QE"]);
          case r.d4z.GUILD_TEXT:
            return s.intl.string(s.t.Pnajj4);
          case r.d4z.GUILD_FORUM:
            return e.isMediaChannel()
              ? s.intl.string(s.t.seKITE)
              : s.intl.string(s.t.GbryDQ);
          case r.d4z.GUILD_MEDIA:
            return s.intl.string(s.t.seKITE);
          case r.d4z.GUILD_STAGE_VOICE:
            return s.intl.string(s.t.EErMzM);
          case r.d4z.GUILD_VOICE:
            return s.intl.string(s.t.BVZqJi);
          case r.d4z.GUILD_CATEGORY:
          default:
            return null;
        }
      }
    },
    214852: function (e, n, t) {
      t.d(n, {
        z: function () {
          return l;
        },
      }),
        t(47120);
      var r = t(192379),
        s = t(442837),
        i = t(353926);
      function l(e) {
        let [n, t] = (0, s.Wu)([i.Z], () => [
          i.Z.getAllUserExperimentDescriptors(),
          i.Z.getGuildExperiments(),
        ]);
        r.useEffect(() => {
          e.trigger();
        }, [e, n, t]);
      }
    },
    879463: function (e, n, t) {
      t.d(n, {
        eP: function () {
          return r;
        },
      });
      let r = (0, t(818083).B)({
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
      n.ZP = (e) => {
        let {
          location: n,
          autoTrackExposure: t = !0,
          trackExposureOptions: s = {},
        } = e;
        return r.useExperiment(
          { location: n },
          { autoTrackExposure: t, trackExposureOptions: s },
        );
      };
    },
    822070: function (e, n, t) {
      t.d(n, {
        $: function () {
          return r;
        },
      });
      let r = (0, t(818083).B)({
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
    520540: function (e, n, t) {
      t.d(n, {
        g: function () {
          return l;
        },
        p: function () {
          return s;
        },
      });
      var r,
        s,
        i = t(818083);
      ((r = s || (s = {}))[(r.VARIANT_1 = 0)] = "VARIANT_1"),
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
    415795: function (e, n, t) {
      t.d(n, {
        $W: function () {
          return A;
        },
        Mx: function () {
          return M;
        },
        PZ: function () {
          return D;
        },
        h4: function () {
          return Z;
        },
        ic: function () {
          return _;
        },
        n5: function () {
          return z;
        },
        rU: function () {
          return T;
        },
        s8: function () {
          return k;
        },
      }),
        t(47120);
      var r,
        s = t(200651),
        i = t(192379),
        l = t(481060),
        a = t(815372),
        o = t(43267),
        c = t(933557),
        d = t(471445),
        u = t(16206),
        h = t(790145),
        p = t(925329),
        m = t(565138),
        x = t(754688),
        f = t(237583),
        b = t(430824),
        g = t(699516),
        C = t(594174),
        N = t(51144),
        j = t(388032),
        v = t(30352);
      function I(e, n, t) {
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
      class E extends i.PureComponent {
        componentDidMount() {
          let { focused: e, onFocus: n } = this.props,
            { node: t } = this;
          e && null != t && n(t);
        }
        componentDidUpdate(e) {
          let { focused: n, onFocus: t } = this.props,
            { node: r } = this;
          null != r && n && !e.focused && t(r);
        }
        render() {
          let {
            focused: e,
            children: n,
            score: t,
            onContextMenu: r,
            id: i,
            "aria-label": a,
          } = this.props;
          return (0, s.jsxs)(l.Clickable, {
            role: "option",
            id: i,
            "aria-label": a,
            "aria-selected": e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: v.result,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: r,
            children: [
              n,
              null != t
                ? (0, s.jsx)("div", { className: v.score, children: t >> 0 })
                : null,
            ],
          });
        }
        constructor(...e) {
          super(...e),
            I(this, "node", void 0),
            I(this, "handleClick", (e) => {
              e.preventDefault();
              let { onClick: n } = this.props,
                { node: t } = this;
              null != t && n(e, t);
            }),
            I(this, "handleMouseEnter", (e) => {
              let { onMouseEnter: n } = this.props,
                { node: t } = this;
              null != t && n(e, t);
            }),
            I(this, "setRef", (e) => {
              this.node = e;
            });
        }
      }
      class _ extends i.Component {
        renderIcon() {
          let { guild: e } = this.props;
          return (0, s.jsx)("div", {
            className: v.guildIconContainer,
            children: (0, s.jsx)(m.Z, {
              tabIndex: -1,
              guild: e,
              size: m.Z.Sizes.MINI,
              className: v.guildIcon,
            }),
          });
        }
        renderName() {
          let { guild: e } = this.props;
          return (0, s.jsx)("div", {
            className: v.name,
            children: (0, s.jsx)("span", {
              className: v.match,
              children: e.name,
            }),
          });
        }
        renderContent() {
          let { unread: e, children: n } = this.props;
          return (0, s.jsxs)("div", {
            className: e ? v.contentUnread : v.contentDefault,
            children: [
              this.renderIcon(),
              this.renderName(),
              (0, s.jsx)("div", { className: v.misc, children: n }),
            ],
          });
        }
        getAccessibilityLabel() {
          let { guild: e } = this.props;
          return j.intl.formatToPlainString(j.t.WVq3Li, { name: e.name });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: r,
            focused: i,
            score: l,
            id: a,
          } = this.props;
          return (0, s.jsx)(E, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
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
          let { channel: n } = this.props,
            t = (0, d.KS)(n);
          if (null == t) return null;
          let r = null !== (e = (0, u.Z)(n)) && void 0 !== e ? e : "";
          return (0, s.jsx)("div", {
            className: v.iconContainer,
            role: "img",
            "aria-label": r,
            children: (0, s.jsx)(t, {
              className: v.icon,
              size: "xs",
              color: "currentColor",
            }),
          });
        }
        renderName() {
          let e, n;
          let { mentions: t, category: r, channel: i } = this.props;
          return (
            null != t &&
              t > 0 &&
              (e = (0, s.jsx)(h.Z, { className: v.badge, value: t })),
            null != r &&
              (n = (0, s.jsx)("span", {
                className: v.note,
                children: (0, c.F6)(r, C.default, g.Z),
              })),
            (0, s.jsxs)("div", {
              className: v.name,
              children: [
                (0, s.jsx)("span", {
                  className: v.match,
                  children: (0, c.F6)(i, C.default, g.Z),
                }),
                e,
                this.renderVoiceStates(),
                n,
              ],
            })
          );
        }
        renderVoiceStates() {
          let { voiceStates: e, channel: n } = this.props;
          return null == e
            ? null
            : (0, s.jsx)(f.Z, {
                className: v.voiceSummaryContainer,
                guildId: n.guild_id,
                users: e.map((e) => {
                  let { user: n } = e;
                  return { user: n };
                }),
                max: 4,
              });
        }
        renderContent() {
          let { unread: e, mentions: n, children: t } = this.props;
          return (0, s.jsxs)("div", {
            "aria-hidden": !0,
            className:
              e || (null != n && n > 0) ? v.contentUnread : v.contentDefault,
            children: [
              this.renderIcon(),
              this.renderName(),
              (0, s.jsx)("div", { className: v.misc, children: t }),
            ],
          });
        }
        getAccessibilityLabel() {
          var e;
          let { channel: n } = this.props,
            t =
              null === (e = b.Z.getGuild(this.props.channel.guild_id)) ||
              void 0 === e
                ? void 0
                : e.name,
            r = (0, c.F6)(n, C.default, g.Z),
            s = (0, u.Z)(n);
          return j.intl.formatToPlainString(j.t["Vw/da2"], {
            name: r,
            type: s,
            guild: t,
          });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: r,
            focused: i,
            score: l,
            id: a,
          } = this.props;
          return (0, s.jsx)(E, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: r,
            focused: i,
            score: l,
            children: this.renderContent(),
          });
        }
      }
      I(A, "defaultProps", { unread: !1 });
      class D extends i.Component {
        renderIcon() {
          let { channel: e } = this.props;
          return (0, s.jsx)("div", {
            className: v.dmIconContainer,
            children: (0, s.jsx)(l.Avatar, {
              src: (0, o.x)(e),
              size: l.AvatarSizes.SIZE_20,
              "aria-hidden": !0,
            }),
          });
        }
        renderName() {
          let e;
          let { mentions: n, channel: t } = this.props;
          return (
            null != n &&
              n > 0 &&
              (e = (0, s.jsx)(h.Z, { className: v.badge, value: n })),
            (0, s.jsxs)("div", {
              className: v.name,
              children: [
                (0, s.jsx)("span", {
                  className: v.match,
                  children: (0, c.F6)(t, C.default, g.Z),
                }),
                e,
              ],
            })
          );
        }
        renderContent() {
          let { mentions: e, children: n } = this.props;
          return (0, s.jsxs)("div", {
            className: null != e && e > 0 ? v.contentUnread : v.contentDefault,
            children: [
              this.renderIcon(),
              this.renderName(),
              (0, s.jsx)("div", { className: v.misc, children: n }),
            ],
          });
        }
        getAccessibilityLabel() {
          let { channel: e, mentions: n } = this.props,
            t = (0, c.F6)(e, C.default, g.Z);
          return null != n && n > 0
            ? j.intl.formatToPlainString(j.t.LYdVfH, { name: t, mentions: n })
            : j.intl.formatToPlainString(j.t.lLSbnp, { name: t });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: r,
            focused: i,
            score: l,
            id: a,
          } = this.props;
          return (0, s.jsx)(E, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: r,
            focused: i,
            score: l,
            children: this.renderContent(),
          });
        }
      }
      class z extends i.Component {
        renderIcon() {
          let { user: e } = this.props;
          return (0, s.jsx)("div", {
            className: v.iconContainer,
            children: (0, s.jsx)(l.Avatar, {
              src: e.getAvatarURL(void 0, 20),
              "aria-hidden": !0,
              size: l.AvatarSizes.SIZE_20,
            }),
          });
        }
        getDisplayNickname() {
          let e;
          let { user: n, comparator: t } = this.props,
            r = g.Z.getNickname(n.id);
          return (
            ((e = t === n.tag || null == t || "" === t ? n.username : t) ===
              n.username ||
              e === n.id) &&
              (e = null != r ? r : N.ZP.getName(n)),
            e
          );
        }
        renderName() {
          let e;
          let { user: n, mentions: t } = this.props,
            r = this.getDisplayNickname();
          return (
            null != t &&
              t > 0 &&
              (e = (0, s.jsx)(h.Z, { className: v.badge, value: t })),
            (0, s.jsxs)("div", {
              className: v.name,
              children: [
                (0, s.jsx)("span", { className: v.match, children: r }),
                e,
                (0, s.jsx)("span", {
                  className: v.username,
                  children: N.ZP.getUserTag(n),
                }),
              ],
            })
          );
        }
        renderContent() {
          let { children: e, mentions: n } = this.props;
          return (0, s.jsxs)("div", {
            className: null != n && n > 0 ? v.contentUnread : v.contentDefault,
            children: [
              this.renderIcon(),
              this.renderName(),
              (0, s.jsx)("div", { className: v.misc, children: e }),
            ],
          });
        }
        getAccessibilityLabel() {
          let { mentions: e, user: n } = this.props,
            t = this.getDisplayNickname(),
            r = N.ZP.getUserTag(n);
          return null != e && e > 0
            ? j.intl.formatToPlainString(j.t["6b9Ura"], {
                name: t,
                id: r,
                mentions: e,
              })
            : j.intl.formatToPlainString(j.t.GWYOAQ, { name: t, id: r });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: r,
            focused: i,
            score: l,
            id: a,
          } = this.props;
          return (0, s.jsx)(E, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: r,
            focused: i,
            score: l,
            children: this.renderContent(),
          });
        }
      }
      class M extends i.Component {
        renderContent() {
          let { children: e, application: n } = this.props;
          return (0, s.jsxs)("div", {
            className: v.contentDefault,
            children: [
              (0, s.jsx)("div", {
                className: v.iconContainer,
                children: (0, s.jsx)(p.Z, {
                  tabIndex: -1,
                  className: v.gameIcon,
                  game: n,
                  size: v.gameIconSize,
                }),
              }),
              n.name,
              (0, s.jsx)("div", { className: v.misc, children: e }),
            ],
          });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            focused: r,
            id: i,
          } = this.props;
          return (0, s.jsx)(E, {
            id: i,
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            focused: r,
            children: this.renderContent(),
          });
        }
      }
      class Z extends i.Component {
        render() {
          return (0, s.jsx)("div", {
            className: v.__invalid_resultDefault,
            children: (0, s.jsx)("div", {
              className: v.contentDefault,
              children: (0, s.jsx)("div", {
                className: v.header,
                children: this.props.children,
              }),
            }),
          });
        }
      }
      class T extends i.Component {
        renderContent() {
          let e, n;
          let { link: t, children: r } = this.props,
            i = (0, x.Qj)(t.path);
          return (
            null == i || void 0 === i.messageId
              ? ((e = j.intl.string(j.t.qbSCqq)),
                (n = (0, s.jsx)(l.LinkIcon, {
                  size: "xs",
                  color: "currentColor",
                })))
              : (0, x.VO)(i)
                ? ((e = j.intl.string(j.t["6Fd/j4"])),
                  (n = (0, s.jsx)(l.ChatArrowRightIcon, {
                    size: "xs",
                    color: "currentColor",
                  })))
                : ((e = j.intl.string(j.t.jQRwp6)),
                  (n = (0, s.jsx)(l.LockIcon, {
                    size: "xs",
                    color: "currentColor",
                  }))),
            (0, s.jsxs)("div", {
              className: v.contentDefault,
              children: [
                (0, s.jsx)("div", { className: v.iconContainer, children: n }),
                e,
                (0, s.jsx)("div", { className: v.misc, children: r }),
              ],
            })
          );
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: r,
            focused: i,
            score: l,
            id: a,
          } = this.props;
          return (0, s.jsx)(E, {
            id: a,
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: r,
            focused: i,
            score: l,
            children: this.renderContent(),
          });
        }
      }
      class k extends i.Component {
        renderContent() {
          let e, n;
          let { navigationRecord: t, children: r } = this.props;
          switch (t.type) {
            case a.Ky.SHOP:
              (e = j.intl.string(j.t.pWG4zc)),
                (n = (0, s.jsx)(l.ShopIcon, {
                  size: "xs",
                  color: "currentColor",
                }));
              break;
            case a.Ky.NITRO_HOME:
              (e = j.intl.string(j.t.Ipxkoq)),
                (n = (0, s.jsx)(l.NitroWheelIcon, {
                  size: "xs",
                  color: "currentColor",
                }));
              break;
            case a.Ky.QUEST_HOME:
              (e = j.intl.string(j.t.JALI2N)),
                (n = (0, s.jsx)(l.QuestsIcon, {
                  size: "xs",
                  color: "currentColor",
                }));
              break;
            default:
              (e = t.id),
                (n = (0, s.jsx)(l.LinkIcon, {
                  size: "xs",
                  color: "currentColor",
                }));
          }
          return (0, s.jsxs)("div", {
            className: v.contentDefault,
            children: [
              (0, s.jsx)("div", { className: v.iconContainer, children: n }),
              e,
              (0, s.jsx)("div", { className: v.misc, children: r }),
            ],
          });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: r,
            focused: i,
            score: l,
            id: a,
          } = this.props;
          return (0, s.jsx)(E, {
            id: a,
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: r,
            focused: i,
            score: l,
            children: this.renderContent(),
          });
        }
      }
    },
    460562: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var r = t(200651);
      t(192379);
      var s = t(325767);
      function i(e) {
        let {
          width: n = 32,
          height: t = 32,
          color: i = "currentColor",
          ...l
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, s.Z)(l),
          width: n,
          height: t,
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
//# sourceMappingURL=f12dee46b84c0f99d109.js.map
