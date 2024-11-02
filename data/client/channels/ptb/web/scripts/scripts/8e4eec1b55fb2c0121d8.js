"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7654"],
  {
    622577: function (e) {
      e.exports = "/assets/cff409ce6ad136be8d0a.svg";
    },
    247272: function (e, t, n) {
      n.d(t, {
        C: function () {
          return s;
        },
        x: function () {
          return r;
        },
      }),
        n(47120);
      var l = n(570140),
        i = n(93127);
      function r(e) {
        let {
          omitUserIds: t,
          guild: n,
          channel: r,
          applicationId: s,
          inviteTargetType: a,
        } = e;
        return (0, i.W)().then(() => {
          l.Z.dispatch({
            type: "LOAD_INVITE_SUGGESTIONS",
            omitUserIds: null != t ? t : new Set(),
            guild: n,
            channel: r,
            applicationId: s,
            inviteTargetType: a,
          });
        });
      }
      function s(e) {
        l.Z.dispatch({ type: "INVITE_SUGGESTIONS_SEARCH", query: e });
      }
    },
    630810: function (e, t, n) {
      n.d(t, {
        m: function () {
          return i;
        },
      });
      var l,
        i,
        r = n(493683),
        s = n(904245),
        a = n(710845),
        o = n(592125),
        d = n(70956),
        u = n(651655);
      let c = 1 * d.Z.Millis.SECOND + 10;
      ((l = i || (i = {}))[(l.GROUP_DM = 0)] = "GROUP_DM"),
        (l[(l.USER = 1)] = "USER"),
        (l[(l.CHANNEL = 2)] = "CHANNEL");
      class h extends u.Z {
        _sendInvite(e, t, n, l, i) {
          s.Z.sendInvite(e.id, t, n, l).then(
            () => i(null, !0),
            () => i(null, !1),
          );
        }
        drain(e, t) {
          let { location: n, suggested: l } = e;
          switch (e.type) {
            case 0:
            case 2:
              this._sendInvite(e.channel, e.inviteKey, n, l, t);
              break;
            case 1:
              r.Z.ensurePrivateChannel(e.user.id).then(
                (i) => {
                  let r = o.Z.getChannel(i);
                  null != r && this._sendInvite(r, e.inviteKey, n, l, t);
                },
                () => t(null, !1),
              );
          }
        }
        constructor() {
          super(new a.Z("InviteQueue"), c);
        }
      }
      t.Z = new h();
    },
    956829: function (e, t, n) {
      n.d(t, {
        h: function () {
          return l;
        },
      });
      let l = (0, n(818083).B)({
        kind: "guild",
        id: "2023-04_community_endless_invites",
        label: "Community Endless Invites",
        defaultConfig: { defaultInvitesToNeverExpire: !1 },
        treatments: [
          {
            id: 1,
            label: "Causes invites to never expire (by default) in the Guild",
            config: { defaultInvitesToNeverExpire: !0 },
          },
        ],
      });
    },
    259473: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var l = n(399606),
        i = n(430824),
        r = n(971130),
        s = n(956829),
        a = n(981631);
      function o(e) {
        let { guildId: t } = e,
          n = s.h.useExperiment({
            guildId: null != t ? t : a.lds,
            location: "6798be_2",
          }),
          o = (0, l.e7)([i.Z], () => i.Z.getGuild(t));
        return (
          null != t &&
          (function (e) {
            var t;
            let { guild: n, experimentConfig: l } = e,
              { defaultInvitesToNeverExpire: i } =
                null != l
                  ? l
                  : s.h.getCurrentConfig({
                      guildId:
                        null !== (t = null == n ? void 0 : n.id) && void 0 !== t
                          ? t
                          : a.lds,
                      location: "6798be_1",
                    });
            if (
              (null == n ? void 0 : n.hasFeature(a.oNc.HUB)) === !0 ||
              ((null == n ? void 0 : n.hasFeature(a.oNc.COMMUNITY)) === !0 && i)
            )
              return r.ZP.INVITE_OPTIONS_FOREVER.value;
          })({ guild: o, experimentConfig: n })
        );
      }
    },
    111810: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var l = n(192379),
        i = n(252618),
        r = n(358085),
        s = n(388032);
      function a() {
        return (
          l.useEffect(() => {
            !r.isPlatformEmbedded &&
              (0, i.EM)({
                messages: [
                  s.intl.string(s.t.KIX3cn),
                  s.intl.string(s.t["UbO+8v"]),
                  s.intl.string(s.t.MbySu7),
                ],
                interval: 600,
                count: 20,
                onlyWhenBlurred: !0,
              });
          }, []),
          null
        );
      }
    },
    301935: function (e, t, n) {
      n.d(t, {
        o: function () {
          return l;
        },
      });
      let l = (0, n(818083).B)({
        kind: "guild",
        id: "2023-02_guest_voice_invites",
        label: "Guest Voice Invites",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Allow creation of guest voice invites",
            config: { enabled: !0 },
          },
        ],
      });
    },
    397195: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var l = n(192379),
        i = n(106351),
        r = n(399606),
        s = n(447003),
        a = n(592125),
        o = n(984933),
        d = n(823379);
      function u(e) {
        let t = (0, r.Wu)([o.ZP], () => o.ZP.getVocalChannelIds(e)),
          n = (0, r.Wu)(
            [a.Z],
            () => t.map((e) => a.Z.getChannel(e)).filter(d.lm),
            [t],
          );
        return l.useMemo(
          () => n.filter((e) => !(0, s.Z)(e) && e.type === i.d.GUILD_VOICE),
          [n],
        );
      }
    },
    751499: function (e, t, n) {
      var l = n(818083);
      t.Z = (0, l.B)({
        kind: "guild",
        id: "2022-11_default_to_server_vanity_v2",
        label: "Default To Server Vanity v2",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
    },
    181852: function (e, t, n) {
      var l = n(818083);
      t.Z = (0, l.B)({
        kind: "guild",
        id: "2022-05_vanity_url_target",
        label: "Vanity URL Targeting",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
    },
    560114: function (e, t, n) {
      n.r(t), n(47120);
      var l,
        i = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        o = n(512722),
        d = n.n(o),
        u = n(392711),
        c = n.n(u),
        h = n(990547),
        g = n(533800),
        m = n(442837),
        v = n(692547),
        p = n(481060),
        x = n(447543),
        I = n(247272),
        S = n(110924),
        f = n(100527),
        T = n(906732),
        N = n(835473),
        E = n(447003),
        C = n(471445),
        _ = n(259473),
        j = n(600164),
        y = n(687516),
        Z = n(111810),
        M = n(301935),
        b = n(397195),
        w = n(427679),
        B = n(199902),
        A = n(439170),
        R = n(592125),
        U = n(984933),
        V = n(341165),
        P = n(751771),
        G = n(496675),
        k = n(158776),
        L = n(944486),
        D = n(594174),
        F = n(938475),
        O = n(626135),
        H = n(630388),
        q = n(971130),
        W = n(264229),
        z = n(751499),
        K = n(181852),
        Y = n(366980),
        J = n(444260),
        Q = n(585385),
        $ = n(603236),
        X = n(462376),
        ee = n(245335),
        et = n(981631),
        en = n(176505),
        el = n(388032),
        ei = n(871820),
        er = n(113207),
        es = n(579861),
        ea = n(622577);
      function eo(e, t, n) {
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
      let {
        INVITE_OPTIONS_FOREVER: ed,
        INVITE_OPTIONS_7_DAYS: eu,
        INVITE_OPTIONS_UNLIMITED: ec,
      } = q.ZP;
      class eh extends (l = r.PureComponent) {
        componentDidMount() {
          let {
              inviteChannel: e,
              code: t,
              guild: n,
              source: l,
              canCreateInvites: i,
              analyticsLocation: r,
              streamUserId: s,
              targetType: a,
              targetUserId: o,
              application: d,
              initialCounts: u,
              rows: c,
              showFriends: h,
              modalState: g,
              setModalState: m,
            } = this.props,
            { maxAge: v, maxUses: p, temporary: I } = g;
          if (i) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            m({ networkError: void 0 }),
              x.Z.createInvite(
                n,
                {
                  validate: null != t ? t : null,
                  max_age: v,
                  max_uses: p,
                  target_user_id: o,
                  target_type: a,
                  target_application_id: null == d ? void 0 : d.id,
                  temporary: I,
                },
                l,
              ).catch((e) => m({ networkError: e }));
          }
          if (
            (h &&
              O.default.track(et.rMx.INVITE_SUGGESTION_OPENED, {
                location: l,
                num_suggestions: c.length,
                num_friends: u.numFriends,
                num_dms: u.numDms,
                num_group_dms: u.numGroupDms,
                guild_id: n.id,
              }),
            K.Z.trackExposure({
              guildId: null == n ? void 0 : n.id,
              location: "acc417_1",
            }),
            null != s)
          ) {
            let e = B.Z.getStreamForUser(s, n.id),
              t = (0, y.L2)(e, k.Z);
            O.default.track(et.rMx.OPEN_MODAL, {
              type: "Send Stream Invite",
              source: l,
              location: r,
              other_user_id: s,
              application_id: null != t ? t.id : null,
              application_name: null != t ? t.name : null,
              game_id: null != t ? t.id : null,
            });
          } else
            (null == d ? void 0 : d.id) != null ||
              O.default.track(et.rMx.OPEN_MODAL, {
                type: "Instant Invite Modal",
                source: l,
                location: r,
              });
        }
        componentWillUnmount() {
          let {
            inviteChannel: e,
            inviteFlags: t,
            setInviteFlags: n,
          } = this.props;
          (0, H.yE)(t, g.$.IS_GUEST_INVITE) &&
            null != e &&
            (n((0, H.Ge)(t, g.$.IS_GUEST_INVITE)),
            x.Z.clearInviteFromStore(e.id));
        }
        getInviteKey() {
          let {
              code: e,
              vanityURLCode: t,
              guildScheduledEvent: n,
              modalState: l,
            } = this.props,
            { showVanityURL: i } = l,
            r = i ? t : null != e ? e : t;
          return null == r
            ? r
            : (0, W.tV)({
                baseCode: r,
                guildScheduledEventId: null == n ? void 0 : n.id,
              });
        }
        renderChannelWarning() {
          let { inviteChannel: e } = this.props;
          return (0, E.Z)(e)
            ? (0, i.jsxs)("div", {
                className: ei.warningContainer,
                children: [
                  (0, i.jsx)(p.CircleWarningIcon, {
                    size: "custom",
                    className: ei.warningIcon,
                    color: v.Z.unsafe_rawColors.YELLOW_300.css,
                    width: 12,
                  }),
                  (0, i.jsx)(p.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: el.intl.string(el.t.x1SQZW),
                  }),
                ],
              })
            : null;
        }
        renderHeader() {
          let e;
          let {
              guild: t,
              showFriends: n,
              guildScheduledEvent: l,
              streamUserId: r,
              application: s,
              welcomeToServer: o,
              inviteChannel: d,
              modalState: u,
              handleDone: c,
            } = this.props,
            { query: h } = u,
            g = null,
            m = null;
          if (
            ((e = o
              ? null
              : null != r
                ? el.intl.string(el.t["6VQaqa"])
                : null != s
                  ? el.intl.formatToPlainString(el.t.ZdK3dX, {
                      applicationName: s.name,
                    })
                  : null != l
                    ? el.intl.string(el.t.JKV4FB)
                    : (null == d ? void 0 : d.isGuildStageVoice())
                      ? el.intl.string(el.t.zTrsHx)
                      : el.intl.format(el.t.NvVBJS, { name: t.toString() })),
            null != d)
          ) {
            let e = (0, C.KS)(d, t);
            null != e &&
              (m = (0, i.jsxs)("div", {
                className: ei.headerChannelContainer,
                children: [
                  (0, i.jsx)(e, { className: ei.channelIcon }),
                  (0, i.jsx)(p.Text, {
                    color: "interactive-normal",
                    variant: "text-md/normal",
                    children: d.name,
                  }),
                ],
              }));
          }
          return (
            (g = t.hasFeature(et.oNc.HUB)
              ? (0, i.jsxs)("div", {
                  className: ei.hubHeader,
                  children: [
                    (0, i.jsx)(p.Heading, {
                      className: a()(
                        ei.hubInviteTitle,
                        ei.headerCloseButtonSpacing,
                      ),
                      id: this._headerId,
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children: el.intl.string(el.t.WhR38v),
                    }),
                    (0, i.jsx)(p.Text, {
                      color: "header-secondary",
                      variant: "text-md/normal",
                      children: el.intl.string(el.t.Ed4BMj),
                    }),
                    n &&
                      (0, i.jsx)(p.SearchBar, {
                        query: h,
                        className: ei.hubFriendSearch,
                        onChange: this.handleQueryChange,
                        placeholder: el.intl.string(el.t.CmSHY2),
                        "aria-label": el.intl.string(el.t.CmSHY2),
                        autoFocus: !0,
                        onClear: this.handleClearSearch,
                      }),
                  ],
                })
              : n
                ? (0, i.jsxs)("div", {
                    className: ei.header,
                    children: [
                      (0, i.jsx)("div", {
                        className: ei.__invalid_headerTopRow,
                        children: (0, i.jsx)(p.FormTitle, {
                          id: this._headerId,
                          tag: "h2",
                          className: a()(
                            er.marginBottom4,
                            ei.headerCloseButtonSpacing,
                            ei.headerText,
                          ),
                          children: e,
                        }),
                      }),
                      m,
                      (0, i.jsx)(p.SearchBar, {
                        query: h,
                        className: ei.searchBar,
                        onChange: this.handleQueryChange,
                        placeholder: el.intl.string(el.t.CmSHY2),
                        autoFocus: !0,
                        onClear: this.handleClearSearch,
                      }),
                      (0, i.jsx)("div", {
                        className: er.marginTop8,
                        children: this.renderChannelWarning(),
                      }),
                    ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(p.FormTitle, {
                        id: this._headerId,
                        tag: "h2",
                        className: a()(
                          er.marginReset,
                          ei.headerCloseButtonSpacing,
                          ei.headerText,
                        ),
                        children: e,
                      }),
                      m,
                      this.renderChannelWarning(),
                    ],
                  })),
            (0, i.jsxs)(p.ModalHeader, {
              separator: n,
              children: [
                (0, i.jsx)(p.ModalCloseButton, {
                  className: ei.closeButton,
                  onClick: c,
                }),
                (0, i.jsxs)("div", {
                  className: ei.headerContainer,
                  children: [
                    o &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)("img", {
                            className: ei.welcomeImage,
                            src: ea,
                            alt: "",
                          }),
                          (0, i.jsx)(p.Heading, {
                            variant: "heading-lg/semibold",
                            className: ei.welcomeHeading,
                            children: el.intl.string(el.t.DpoBNz),
                          }),
                          (0, i.jsx)(p.Text, {
                            variant: "text-md/normal",
                            color: "text-secondary",
                            className: ei.welcomeSubheading,
                            children: el.intl.string(el.t["wJ/ouL"]),
                          }),
                        ],
                      }),
                    null != r ? (0, i.jsx)(Z.Z, {}) : null,
                    g,
                  ],
                }),
              ],
            })
          );
        }
        renderFriendsBody() {
          let { rows: e } = this.props,
            t = this.getInviteKey();
          return 0 === e.length
            ? (0, i.jsx)(p.ModalContent, {
                className: a()(ei.inviteRowEmptyState),
                children: (0, i.jsx)(p.EmptyStateText, {
                  children: el.intl.string(el.t.ojoWgY),
                }),
              })
            : null == t
              ? (0, i.jsx)(p.ModalContent, {
                  className: a()(ei.inviteRowEmptyState),
                  children: (0, i.jsx)(p.EmptyStateText, {
                    children: el.intl.string(el.t.hzPwGB),
                  }),
                })
              : (0, i.jsx)(p.ModalListContent, {
                  className: ei.scroller,
                  sections: [e.length],
                  renderSection: this.renderSection,
                  sectionHeight: 0,
                  renderRow: this.renderRow,
                  rowHeight: this.getRowHeight,
                  paddingBottom: 16,
                });
        }
        renderSection() {
          return null;
        }
        renderBody() {
          var e;
          let {
            guild: t,
            showFriends: n,
            streamUserId: l,
            application: r,
          } = this.props;
          if (n) return this.renderFriendsBody();
          let s = (0, Y.Z)(
              null !== (e = this.getInviteKey()) && void 0 !== e ? e : "",
            ),
            a = D.default.getCurrentUser();
          d()(null != a, "InstantInviteModal: user cannot be undefined");
          let o = t.isOwner(a)
            ? el.intl.string(el.t.HFbByM)
            : el.intl.string(el.t.ueBhAw);
          return (
            null != l
              ? (o = el.intl.string(el.t.CXpS1N))
              : null != r && (o = el.intl.string(el.t.ueCrHB)),
            (0, i.jsx)(p.ModalContent, {
              className: ei.noScroll,
              children: (0, i.jsxs)(j.Z, {
                direction: j.Z.Direction.VERTICAL,
                className: er.marginBottom20,
                children: [
                  (0, i.jsx)(p.Text, {
                    className: ei.subText,
                    variant: "text-sm/normal",
                    children: o,
                  }),
                  (0, i.jsx)($.I, { ...this.props, copyValue: s }),
                ],
              }),
            })
          );
        }
        renderFooter() {
          var e;
          let {
              noInvitesAvailable: t,
              showFriends: n,
              guildScheduledEvent: l,
              streamUserId: r,
              application: s,
              inviteChannel: o,
              modalState: d,
            } = this.props,
            { maxAge: u } = d,
            c = null,
            h = (0, Y.Z)(
              null !== (e = this.getInviteKey()) && void 0 !== e ? e : "",
            );
          if (n) {
            let e = el.intl.string(el.t.MLkj7O);
            null != r
              ? (e = el.intl.string(el.t["1b9nen"]))
              : null != s
                ? (e = el.intl.string(el.t.iI1gMj))
                : null != l
                  ? (e = el.intl.string(el.t.KaWCyM))
                  : (null == o ? void 0 : o.isGuildStageVoice()) &&
                    (e = el.intl.string(el.t["2frWa2"])),
              (c = (0, i.jsxs)(j.Z, {
                direction: j.Z.Direction.VERTICAL,
                className: ei.content,
                children: [
                  (0, i.jsx)(p.FormTitle, {
                    tag: "h5",
                    className: er.marginBottom8,
                    children: e,
                  }),
                  (0, i.jsx)($.I, { ...this.props, copyValue: h }),
                ],
              }));
          } else
            !t &&
              (c = (0, i.jsxs)(j.Z, {
                justify: j.Z.Justify.BETWEEN,
                className: er.marginTop20,
                children: [
                  (0, i.jsx)(p.Checkbox, {
                    size: 18,
                    type: p.Checkbox.Types.INVERTED,
                    value: u === ed.value,
                    onChange: this.handleToggleMaxAge,
                    children: (0, i.jsx)(p.Text, {
                      variant: "text-sm/normal",
                      children: el.intl.string(el.t.QKJru7),
                    }),
                  }),
                  (0, i.jsx)(p.Tooltip, {
                    text: el.intl.string(el.t.Yx4IiI),
                    children: (e) => {
                      let { onMouseEnter: t, onMouseLeave: n } = e;
                      return (0, i.jsx)(p.Clickable, {
                        onClick: this.openSettings,
                        onMouseEnter: t,
                        onMouseLeave: n,
                        className: es.cursorPointer,
                        children: (0, i.jsx)(p.SettingsIcon, {
                          size: "sm",
                          color: v.Z.unsafe_rawColors.PRIMARY_400.css,
                        }),
                      });
                    },
                  }),
                ],
              }));
          return null != c
            ? (0, i.jsx)(p.ModalFooter, {
                className: a()({ [ei.noPadding]: !n, [ei.footer]: n }),
                children: c,
              })
            : null;
        }
        getModalContent() {
          let { modalState: e, handleDone: t } = this.props,
            { currentPage: n } = e;
          switch (n) {
            case ee.RV.MAIN:
              return (0, i.jsxs)(i.Fragment, {
                children: [
                  this.renderHeader(),
                  this.renderBody(),
                  this.renderFooter(),
                ],
              });
            case ee.RV.SETTINGS:
              return (0, i.jsx)(Q.D, {
                ...this.props,
                headerId: this._headerId,
                onSelectMaxAge: this.handleSelectMaxAge,
                onSelectMaxUses: this.handleSelectMaxUses,
                onToggleTemporary: this.handleToggleTemporary,
                handleDone: t,
              });
            case ee.RV.GUEST:
              var l;
              let r = (0, Y.Z)(
                null !== (l = this.getInviteKey()) && void 0 !== l ? l : "",
              );
              return (0, i.jsx)(J.B, {
                ...this.props,
                headerId: this._headerId,
                handleDone: t,
                copyValue: r,
              });
            default:
              return null;
          }
        }
        render() {
          let { transitionState: e, inviteChannel: t, guild: n } = this.props;
          return (0, i.jsx)("div", {
            className: this.props.showFriends ? ei.wrapper : void 0,
            children: (0, i.jsx)(p.ModalRoot, {
              impression: {
                impressionName: h.ImpressionNames.GUILD_INVITE,
                impressionProperties: {
                  invite_channel_id: null == t ? void 0 : t.id,
                  invite_guild_id: n.id,
                },
              },
              "aria-labelledby": this._headerId,
              transitionState: e,
              className: ei.modal,
              children: this.getModalContent(),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            eo(this, "_scroller", null),
            eo(this, "_headerId", c().uniqueId()),
            eo(this, "openSettings", () => {
              let { changePage: e } = this.props;
              e(ee.RV.SETTINGS);
            }),
            eo(this, "handleSelectMaxAge", (e) => {
              let { modalState: t, setModalState: n } = this.props;
              n({ maxAge: e, savedMaxAge: t.maxAge });
            }),
            eo(this, "handleSelectMaxUses", (e) => {
              let { setModalState: t } = this.props;
              t({ maxUses: e });
            }),
            eo(this, "handleToggleTemporary", (e) => {
              let { setModalState: t } = this.props;
              t({ temporary: e });
            }),
            eo(this, "handleToggleGuest", (e) => {
              let { inviteFlags: t, setInviteFlags: n } = this.props;
              n((0, H.mB)(t, g.$.IS_GUEST_INVITE, e));
            }),
            eo(this, "handleQueryChange", (e) => {
              var t;
              let { setModalState: n } = this.props;
              null === (t = this._scroller) ||
                void 0 === t ||
                t.scrollTo({ to: 0 }),
                (0, I.C)(e),
                n({ query: e });
            }),
            eo(this, "handleClearSearch", () => {
              this.handleQueryChange("");
            }),
            eo(this, "handleToggleMaxAge", () => {
              let { modalState: e, setModalState: t } = this.props,
                { maxAge: n, savedMaxAge: l } = e;
              t({ maxAge: l, savedMaxAge: n });
            }),
            eo(this, "getRowHeight", (e, t) => {
              if (e > 0) return 0;
              switch (this.props.rows[t].type) {
                case q.bm.CHANNEL:
                case q.bm.GROUP_DM:
                case q.bm.DM:
                case q.bm.FRIEND:
                  return X.k;
                default:
                  return 0;
              }
            }),
            eo(this, "renderRow", (e) => {
              let { section: t, row: n } = e;
              if (t > 0) return null;
              let { analyticsLocation: l } = this.props,
                r = this.getInviteKey(),
                s = this.props.rows[n],
                a = "".concat(s.type, "-").concat(s.item.id);
              switch (s.type) {
                case q.bm.GROUP_DM:
                case q.bm.CHANNEL:
                  return (0, i.jsx)(
                    X.d,
                    { row: s, channel: s.item, inviteKey: r, location: l },
                    a,
                  );
                case q.bm.DM:
                case q.bm.FRIEND:
                  return (0, i.jsx)(
                    X.d,
                    { row: s, user: s.item, inviteKey: r, location: l },
                    a,
                  );
                default:
                  return null;
              }
            });
        }
      }
      eo(eh, "defaultProps", {
        analyticsLocation: et.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
        defaultMaxAge: eu.value,
      }),
        (t.default = r.forwardRef(function (e, t) {
          var n, l, s, a;
          let {
              channel: o,
              guild: d,
              source: u,
              guildScheduledEvent: c,
              streamUserId: h,
              applicationId: v,
              transitionState: p,
              onClose: C,
              welcomeToServer: j,
              page: y,
              analyticsLocation: Z,
            } = e,
            [B, k] = r.useState(y === ee.RV.GUEST ? g.$.IS_GUEST_INVITE : 0),
            { analyticsLocations: D } = (0, T.ZP)(f.Z.INSTANT_INVITE_MODAL),
            O = (0, m.e7)([R.Z, L.Z], () => {
              let e = L.Z.getVoiceChannelId();
              if (null == e) return null;
              let t = R.Z.getChannel(e);
              return (null == t ? void 0 : t.guild_id) === d.id ? t : null;
            }),
            q =
              null != O &&
              !(0, E.Z)(O) &&
              [et.t4x.GUILD_CONTEXT_MENU, et.t4x.GUILD_HEADER].includes(u),
            W = (0, b.Z)(d.id),
            K = (0, m.e7)(
              [L.Z, R.Z, U.ZP],
              () => {
                if (
                  q &&
                  ((0, H.yE)(B, g.$.IS_GUEST_INVITE) || y === ee.RV.GUEST)
                )
                  return O;
                if (y === ee.RV.GUEST) return 1 === W.length ? W[0] : void 0;
                if (null != o) return o;
                let e = L.Z.getChannelId(),
                  t = null == e || (0, en.AB)(e) ? void 0 : R.Z.getChannel(e);
                return (
                  (null == t ? void 0 : t.isThread()) &&
                    (t = R.Z.getChannel(t.parent_id)),
                  null != t
                    ? t
                    : U.ZP.getDefaultChannel(
                        d.id,
                        !0,
                        et.Plq.CREATE_INSTANT_INVITE,
                      )
                );
              },
              [q, B, y, o, d.id, O, W],
            ),
            [Y, J] = r.useState(null),
            Q = null != Y ? Y : K,
            $ = null;
          null != h
            ? ($ = ee.Iq.STREAM)
            : null != v && ($ = ee.Iq.EMBEDDED_APPLICATION);
          let X = null != o ? o.getGuildId() : null != d ? d.id : null,
            el = (0, m.e7)(
              [V.Z],
              () => {
                let e = null != Q ? Q.id : null;
                return null == e
                  ? null
                  : V.Z.getInvite(e, {
                      targetType: $,
                      targetUserId: h,
                      targetApplicationId: v,
                    });
              },
              [Q, $, h, v],
            ),
            [ei, er, es, ea, eo] = (0, m.Wu)(
              [P.Z, F.ZP, A.ZP],
              () => {
                let e = null != Q ? Q.id : null;
                return [
                  P.Z.getInviteSuggestionRows(),
                  P.Z.getTotalSuggestionsCount() >= 1,
                  P.Z.getInitialCounts(),
                  null != o && null != Q
                    ? F.ZP.getVoiceStatesForChannel(Q)
                    : null,
                  null != X ? A.ZP.getProps(X, e) : null,
                ];
              },
              [Q, o, X],
            ),
            eg = (0, m.e7)(
              [G.Z],
              () => null != Q && G.Z.can(et.Plq.CREATE_INSTANT_INVITE, Q),
              [Q],
            ),
            em = null === el || !eg,
            [ev] = r.useState(() => {
              let e = new Set();
              return (
                null != h && null != ea
                  ? ea.forEach((t) => {
                      let { user: n } = t;
                      e.add(n.id);
                    })
                  : null != X &&
                    null != eo &&
                    $ !== ee.Iq.EMBEDDED_APPLICATION &&
                    eo.rows.forEach((t) => {
                      t.type === A.so.MEMBER && e.add(t.userId);
                    }),
                e
              );
            }),
            ep = null == o ? void 0 : o.id,
            ex = (0, m.e7)([w.Z], () => w.Z.getStageInstanceByChannel(ep), [
              ep,
            ]);
          r.useEffect(() => {
            (0, I.x)({
              omitUserIds: ev,
              guild: d,
              channel: o,
              applicationId: v,
              inviteTargetType: $,
            }).catch(et.VqG);
          }, [ev, o, d, v, $]);
          let [eI] = (0, N.Z)(null != v ? [v] : []),
            eS = (0, _.Z)({ guildId: X }),
            ef = null != el ? el.code : void 0,
            eT = null == el ? void 0 : el.maxAge,
            eN = null == el ? void 0 : el.maxUses,
            eE = null == el ? void 0 : el.temporary,
            eC = d.vanityURLCode,
            e_ = null != eC && eC.length > 0,
            { enabled: ej } = z.Z.useExperiment(
              {
                guildId:
                  null !==
                    (s =
                      null !==
                        (l =
                          null !== (n = d.id) && void 0 !== n
                            ? n
                            : null == el
                              ? void 0
                              : el.guild.id) && void 0 !== l
                        ? l
                        : X) && void 0 !== s
                    ? s
                    : et.lds,
                location: "acc417_2",
              },
              { autoTrackExposure: e_ },
            ),
            ey = ej && !(null == Q ? void 0 : Q.isGuildVocal()) && e_,
            eZ = (null == Q ? void 0 : Q.type) === et.d4z.GUILD_VOICE,
            eM = (0, E.Z)(Q);
          !eg &&
            (null == ex ? void 0 : ex.invite_code) != null &&
            (ef = ex.invite_code);
          let [eb, ew] = r.useState({
              query: "",
              maxAge:
                null !== (a = null != eT ? eT : eS) && void 0 !== a
                  ? a
                  : eu.value,
              savedMaxAge:
                eT === ed.value ? (null != eS ? eS : eu.value) : ed.value,
              maxUses: null != eN && 0 !== eN ? eN : ec.value,
              temporary: null != eE && eE,
              networkError: void 0,
              showVanityURL: ey,
              currentPage: null != y ? y : ee.RV.MAIN,
              lastPage: void 0,
            }),
            eB = r.useCallback((e) => {
              ew((t) => ({ ...t, ...e }));
            }, []),
            eA = r.useCallback(
              (e) => {
                eB({ currentPage: e, lastPage: eb.currentPage });
              },
              [eb.currentPage, eB],
            ),
            eR = (eZ || q) && y !== ee.RV.GUEST && !ey && !em && !eM,
            { enabled: eU } = M.o.useExperiment(
              { guildId: null == d ? void 0 : d.id, location: "acc417_3" },
              { autoTrackExposure: eR },
            ),
            { maxAge: eV, maxUses: eP, temporary: eG, savedMaxAge: ek } = eb,
            eL = r.useCallback(() => {
              let { currentPage: e, lastPage: t } = eb;
              e === ee.RV.SETTINGS && null != t ? eA(t) : C();
            }, [eA, eb, C]),
            eD = r.useCallback(() => {
              let e = null == Q ? void 0 : Q.id;
              0 === eP && 0 === eV && !eG && ey
                ? eB({ networkError: void 0, showVanityURL: !0 })
                : null != e &&
                  (eB({ networkError: void 0, showVanityURL: !1 }),
                  x.Z.createInvite(
                    e,
                    {
                      max_age: eV,
                      max_uses: eP,
                      target_type: $,
                      target_user_id: h,
                      target_application_id: null == eI ? void 0 : eI.id,
                      temporary: eG,
                      flags: B,
                    },
                    u,
                  ).catch((e) => eB({ networkError: e, showVanityURL: ey }))),
                eV !== ed.value &&
                  ek !== ed.value &&
                  eB({ savedMaxAge: ed.value });
            }, [
              ey,
              Q,
              u,
              null == eI ? void 0 : eI.id,
              $,
              h,
              eV,
              eP,
              eG,
              B,
              eB,
              ek,
            ]),
            eF = (0, S.Z)(Q),
            eO = (0, S.Z)(B),
            eH = eF !== Q,
            eq = eO !== B;
          return (
            r.useEffect(() => {
              (eH || eq) && eD();
            }, [eD, eH, eq]),
            (0, i.jsx)(T.Gt, {
              value: D,
              children: (0, i.jsx)(eh, {
                ref: t,
                canCreateInvites: eg,
                noInvitesAvailable: em,
                inviteChannel: Q,
                guild: d,
                guildScheduledEvent: c,
                streamUserId: h,
                vanityURLCode: eC,
                targetType: $,
                targetUserId: h,
                application: eI,
                rows: ei,
                showFriends: er,
                initialCounts: es,
                code: ef,
                source: u,
                welcomeToServer: j,
                analyticsLocations: D,
                analyticsLocation: Z,
                transitionState: p,
                onClose: C,
                canShowVanityURL: ey,
                isGuestInviteCreationToggleEnabled: eU && eR,
                shouldHideTemporaryInviteToggle:
                  (eU && eR) || y === ee.RV.GUEST,
                modalState: eb,
                setModalState: eB,
                changePage: eA,
                onGenerateNewLink: eD,
                inviteFlags: B,
                setInviteFlags: k,
                showGuestInviteToggleForCurrentVoiceChannel: q,
                setInviteChannel: J,
                handleDone: eL,
              }),
            })
          );
        }));
    },
    444260: function (e, t, n) {
      n.d(t, {
        B: function () {
          return v;
        },
      }),
        n(724458);
      var l = n(200651),
        i = n(192379),
        r = n(120356),
        s = n.n(r),
        a = n(481060),
        o = n(397195),
        d = n(473403),
        u = n(603236),
        c = n(388032),
        h = n(871820),
        g = n(113207);
      let m = (e) => {
          let { guild: t, inviteChannel: n, setInviteChannel: r } = e,
            s = (0, o.Z)(t.id),
            u = i.useMemo(
              () => s.reduce((e, t) => ({ ...e, [t.id]: t }), {}),
              [s],
            ),
            h = i.useMemo(
              () =>
                Object.values(u).map((e) => ({ value: e.id, label: e.name })),
              [u],
            );
          return (0, l.jsx)(a.SearchableSelect, {
            options: h,
            value: null == n ? void 0 : n.id,
            onChange: (e) => {
              r(u[e]);
            },
            placeholder: c.intl.string(c.t.VY7qjo),
            renderOptionPrefix: (e) => {
              if (null == e) return null;
              let n = u[e.value];
              return null == n
                ? null
                : (0, l.jsx)(d._, { channel: n, guild: t });
            },
          });
        },
        v = (e) => {
          let {
            handleDone: t,
            headerId: n,
            inviteChannel: i,
            copyValue: r,
          } = e;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)(a.ModalHeader, {
                children: [
                  (0, l.jsx)(a.ModalCloseButton, {
                    className: h.closeButton,
                    onClick: t,
                  }),
                  (0, l.jsx)("div", {
                    className: h.headerContainer,
                    children: (0, l.jsx)(a.FormTitle, {
                      id: n,
                      tag: "h2",
                      className: s()(
                        g.marginReset,
                        h.headerCloseButtonSpacing,
                        h.headerText,
                      ),
                      children: c.intl.string(c.t.HF5aqq),
                    }),
                  }),
                ],
              }),
              (0, l.jsx)(a.ModalContent, {
                className: h.noScroll,
                children: (0, l.jsxs)("div", {
                  className: h.guestBody,
                  children: [
                    (0, l.jsx)(a.Text, {
                      tag: "div",
                      variant: "heading-sm/normal",
                      color: "header-secondary",
                      children: c.intl.string(c.t.BlXIsr),
                    }),
                    (0, l.jsx)(a.FormTitle, {
                      tag: "h5",
                      className: h.guestSelectChannelHeader,
                      children: c.intl.string(c.t.sqHWY2),
                    }),
                    (0, l.jsx)(m, { ...e }),
                    (0, l.jsx)(a.FormTitle, {
                      tag: "h5",
                      className: h.guestSendInviteLinkHeader,
                      children: c.intl.string(c.t.Fp6SU1),
                    }),
                    (0, l.jsx)(u.I, {
                      ...e,
                      copyValue: null == i ? "" : r,
                      disabled: null == i,
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    948851: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var l = n(200651);
      n(192379);
      var i = n(120356),
        r = n.n(i),
        s = n(481060),
        a = n(971130),
        o = n(388032),
        d = n(600923),
        u = n(113207);
      let c = a.ZP.getMaxAgeOptions;
      function h(e) {
        let { temporary: t, shouldHide: n, onToggleTemporary: i } = e;
        return n
          ? (0, l.jsx)("div", { className: u.marginTop20 })
          : (0, l.jsx)(s.FormItem, {
              className: r()(u.marginTop20, d.switch),
              children: (0, l.jsx)(s.FormSwitch, {
                value: t,
                onChange: (e) => i(e),
                note: o.intl.string(o.t.UN5IRU),
                hideBorder: !0,
                children: (0, l.jsx)(s.Text, {
                  variant: "text-sm/normal",
                  children: o.intl.string(o.t["wE+9dn"]),
                }),
              }),
            });
      }
      let g = a.ZP.getMaxUsesOptions;
      function m(e) {
        var t;
        let {
            shouldHideTemporaryInviteToggle: n,
            maxAge: i,
            maxUses: a,
            temporary: m,
            onGenerateNewLink: v,
            onToggleTemporary: p,
            onSelectMaxAge: x,
            onSelectMaxUses: I,
          } = e,
          S = c.find((e) => e.value === i),
          f = g.find((e) => e.value === a);
        return (0, l.jsx)("div", {
          className: d.settingsContent,
          children: (0, l.jsxs)("form", {
            onSubmit: v,
            children: [
              (0, l.jsx)(s.FormItem, {
                title: o.intl.string(o.t["60qw29"]),
                className: u.marginTop20,
                children: (0, l.jsx)(s.SingleSelect, {
                  value:
                    null !== (t = null == S ? void 0 : S.value) && void 0 !== t
                      ? t
                      : c[0].value,
                  options: c,
                  onChange: x,
                  maxVisibleItems: 8,
                }),
              }),
              (0, l.jsx)(s.FormItem, {
                title: o.intl.string(o.t.jDqWHR),
                className: r()(u.marginTop20, u.marginBottom4),
                children: (0, l.jsx)(s.SingleSelect, {
                  value: null == f ? void 0 : f.value,
                  options: g,
                  onChange: I,
                }),
              }),
              (0, l.jsx)(h, {
                temporary: m,
                shouldHide: n,
                onToggleTemporary: p,
              }),
            ],
          }),
        });
      }
    },
    868728: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var l = n(200651),
        i = n(192379),
        r = n(780384),
        s = n(481060),
        a = n(388032);
      function o(e) {
        let { onConfirm: t, onDismiss: n, theme: o } = e;
        return (0, l.jsxs)(i.Fragment, {
          children: [
            (0, l.jsx)(s.Button, {
              onClick: t,
              children: a.intl.string(a.t.pz1lRE),
            }),
            (0, l.jsx)(s.Button, {
              look: s.Button.Looks.LINK,
              color: (0, r.ap)(o)
                ? s.Button.Colors.PRIMARY
                : s.Button.Colors.WHITE,
              onClick: n,
              children: a.intl.string(a.t["ETE/oK"]),
            }),
          ],
        });
      }
    },
    585385: function (e, t, n) {
      n.d(t, {
        D: function () {
          return g;
        },
      });
      var l = n(200651);
      n(192379);
      var i = n(120356),
        r = n.n(i),
        s = n(481060),
        a = n(410030),
        o = n(948851),
        d = n(868728),
        u = n(388032),
        c = n(871820),
        h = n(113207);
      let g = (e) => {
        let {
            handleDone: t,
            headerId: n,
            modalState: i,
            shouldHideTemporaryInviteToggle: g,
            onGenerateNewLink: m,
            onToggleTemporary: v,
            onSelectMaxAge: p,
            onSelectMaxUses: x,
          } = e,
          I = (0, a.ZP)(),
          { maxAge: S, maxUses: f, temporary: T } = i;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(s.ModalHeader, {
              children: [
                (0, l.jsx)(s.ModalCloseButton, {
                  className: c.closeButton,
                  onClick: t,
                }),
                (0, l.jsx)("div", {
                  className: c.headerContainer,
                  children: (0, l.jsx)(s.FormTitle, {
                    id: n,
                    tag: "h2",
                    className: r()(
                      h.marginReset,
                      c.headerCloseButtonSpacing,
                      c.headerText,
                    ),
                    children: u.intl.string(u.t.Atdlys),
                  }),
                }),
              ],
            }),
            (0, l.jsx)(o.Z, {
              shouldHideTemporaryInviteToggle: g,
              maxAge: S,
              maxUses: f,
              temporary: T,
              onToggleTemporary: v,
              onSelectMaxAge: p,
              onSelectMaxUses: x,
              onGenerateNewLink: m,
            }),
            (0, l.jsx)(s.ModalFooter, {
              className: c.settingsFooter,
              children: (0, l.jsx)(d.Z, {
                theme: I,
                onConfirm: () => {
                  m(), t();
                },
                onDismiss: t,
              }),
            }),
          ],
        });
      };
    },
    603236: function (e, t, n) {
      n.d(t, {
        I: function () {
          return j;
        },
        S: function () {
          return _;
        },
      }),
        n(47120);
      var l = n(200651),
        i = n(192379),
        r = n(120356),
        s = n.n(r),
        a = n(533800),
        o = n(442837),
        d = n(846519),
        u = n(481060),
        c = n(914010),
        h = n(246946),
        g = n(626135),
        m = n(572004),
        v = n(630388),
        p = n(971130),
        x = n(530436),
        I = n(245335),
        S = n(981631),
        f = n(388032),
        T = n(871820),
        N = n(803636),
        E = n(739017),
        C = n(113207);
      let _ = o.ZP.connectStores([h.Z], () => ({
          hideValue: h.Z.hideInstantInvites,
        }))((e) => {
          let {
              value: t,
              autoFocus: n,
              hideValue: r,
              onCopy: a,
              disabled: o,
            } = e,
            [c, h] = i.useState(!1),
            [g, v] = i.useState(!1),
            p = i.useMemo(() => new d.sW(1e3, () => v(!1)), [v]);
          return (
            i.useEffect(
              () => () => {
                p.cancel();
              },
              [p],
            ),
            (0, l.jsxs)("div", {
              className: s()(
                N.input,
                E.__invalid_flexJustifyBetween,
                E.flexCenter,
                { [N.success]: g, [N.focused]: c },
              ),
              children: [
                (0, l.jsx)(u.TextInput, {
                  className: T.copyInput,
                  name: "invite",
                  value: r ? f.intl.string(f.t["6HzNgY"]) : t,
                  editable: !1,
                  inputClassName: T.input,
                  autoFocus: n,
                  onFocus: () => (n ? h(!0) : null),
                  onBlur: () => (n ? h(!1) : null),
                  spellCheck: "false",
                  onClick: (e) => e.currentTarget.select(),
                  "aria-label": f.intl.string(f.t.qreV29),
                  disabled: o,
                }),
                m.wS
                  ? (0, l.jsx)(u.Button, {
                      size: u.Button.Sizes.SMALL,
                      color: g ? u.Button.Colors.GREEN : u.Button.Colors.BRAND,
                      className: T.copyButton,
                      onClick: () => {
                        v(!0), p.delay(), a(t);
                      },
                      disabled: o,
                      children: g
                        ? f.intl.string(f.t.q30c5u)
                        : f.intl.string(f.t.OpuAlJ),
                    })
                  : null,
              ],
            })
          );
        }),
        j = (e) => {
          let {
              guild: t,
              noInvitesAvailable: n,
              showFriends: r,
              onClose: o,
              modalState: d,
              isGuestInviteCreationToggleEnabled: h,
              inviteFlags: N,
              setInviteFlags: E,
              showGuestInviteToggleForCurrentVoiceChannel: j,
              copyValue: y,
              changePage: Z,
              inviteChannel: M,
              source: b,
              code: w,
              guildScheduledEvent: B,
              disabled: A,
            } = e,
            { maxAge: R, maxUses: U, networkError: V, showVanityURL: P } = d,
            G = i.useCallback(() => {
              (0, m.JG)(y),
                g.default.track(S.rMx.COPY_INSTANT_INVITE, {
                  server: c.Z.getGuildId(),
                  channel: null == M ? void 0 : M.id,
                  channel_type: null == M ? void 0 : M.type,
                  location: b,
                  code: w,
                  guild_scheduled_event_id: null == B ? void 0 : B.id,
                });
            }, [y, M, b, w, B]);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(_, { value: y, autoFocus: r, onCopy: G, disabled: A }),
              h
                ? (0, l.jsx)("div", {
                    className: T.temporaryMembershipContainerBackground,
                    children: (0, l.jsx)(u.FormSwitch, {
                      className: T.temporaryMembershipContainer,
                      value: (0, v.yE)(N, a.$.IS_GUEST_INVITE),
                      onChange: (e) => E((0, v.mB)(N, a.$.IS_GUEST_INVITE, e)),
                      note: f.intl.string(f.t["/FeTKy"]),
                      disabled: A,
                      hideBorder: !0,
                      children: j
                        ? f.intl.string(f.t.BPL98f)
                        : f.intl.string(f.t["2snqsL"]),
                    }),
                  })
                : null,
              n || P
                ? null
                : (0, l.jsxs)(u.Text, {
                    variant: "text-xs/normal",
                    className: s()(C.marginTop8, T.footerText),
                    children: [
                      (0, p.Vg)(R, U),
                      " ",
                      r
                        ? (0, l.jsx)(u.Anchor, {
                            onClick: () => Z(I.RV.SETTINGS),
                            children: f.intl.string(f.t.VNe8Pz),
                          })
                        : null,
                    ],
                  }),
              !n && r && P
                ? (0, l.jsxs)(u.Text, {
                    variant: "text-xs/normal",
                    className: s()(C.marginTop8, T.footerText),
                    children: [
                      f.intl.string(f.t["0M2U9/"]),
                      " ",
                      (0, l.jsx)(u.Anchor, {
                        onClick: () => Z(I.RV.SETTINGS),
                        children: f.intl.string(f.t.VNe8Pz),
                      }),
                    ],
                  })
                : null,
              null != V
                ? (0, l.jsx)(x.W, { guild: t, error: V, onClose: o })
                : null,
            ],
          });
        };
    },
    530436: function (e, t, n) {
      n.d(t, {
        W: function () {
          return c;
        },
      });
      var l = n(200651),
        i = n(192379),
        r = n(481060),
        s = n(434404),
        a = n(496675),
        o = n(981631),
        d = n(388032),
        u = n(871820);
      function c(e) {
        let { guild: t, error: n, onClose: c } = e,
          h = t.id,
          g = i.useCallback(() => {
            c(), s.Z.open(h, o.pNK.INSTANT_INVITES);
          }, [h, c]),
          m = i.useCallback(
            (e) =>
              (0, l.jsx)(r.Clickable, {
                className: u.errorLink,
                onClick: g,
                children: (0, l.jsx)(r.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  tag: "span",
                  children: e,
                }),
              }),
            [g],
          ),
          v = i.useCallback(
            (e) =>
              (0, l.jsx)(r.Anchor, {
                href: o.EYA.INVITES_HELP,
                target: "_blank",
                children: (0, l.jsx)(r.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  tag: "span",
                  children: e,
                }),
              }),
            [],
          ),
          p =
            n.code !== o.evJ.TOO_MANY_INVITES
              ? n.getAnyErrorMessage()
              : a.Z.can(o.Plq.MANAGE_GUILD, t)
                ? d.intl.format(d.t["H/RUY2"], {
                    inviteListHook: m,
                    inviteHelpHook: v,
                  })
                : d.intl.string(d.t["/FxH6O"]);
        return (0, l.jsx)(r.Text, {
          className: u.errorMessage,
          variant: "text-xs/normal",
          color: "text-danger",
          children: p,
        });
      }
    },
    462376: function (e, t, n) {
      n.d(t, {
        d: function () {
          return N;
        },
        k: function () {
          return T;
        },
      }),
        n(47120);
      var l = n(200651),
        i = n(192379),
        r = n(780384),
        s = n(481060),
        a = n(630810),
        o = n(43267),
        d = n(933557),
        u = n(210887),
        c = n(430824),
        h = n(751771),
        g = n(699516),
        m = n(594174),
        v = n(768581),
        p = n(624138),
        x = n(51144),
        I = n(388032),
        S = n(871820);
      function f(e, t, n) {
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
      let T = 44;
      class N extends i.Component {
        shouldComponentUpdate(e, t) {
          return (
            this.state.sending !== t.sending ||
            this.state.invited !== t.invited ||
            this.state.hovered !== t.hovered ||
            this.props.user !== e.user ||
            this.props.channel !== e.channel
          );
        }
        renderUserOrChannel() {
          let e, t, n;
          let { user: i, channel: r } = this.props;
          if (null != i)
            (t = i.getAvatarURL(null == r ? void 0 : r.guild_id, 32)),
              (n = x.ZP.getName(i));
          else if (
            null != r &&
            ((t = (0, o.x)(r)),
            (n = (0, d.F6)(r, m.default, g.Z)),
            null == t && null != r.guild_id)
          ) {
            let n = c.Z.getGuild(r.guild_id);
            null != n &&
              (null != n.icon
                ? (t = v.ZP.getGuildIconURL({
                    id: r.guild_id,
                    icon: n.icon,
                    size: 32,
                  }))
                : (e = (0, p.Zg)(n.name)));
          }
          if (null == t || null == n)
            return null != e
              ? (0, l.jsx)(s.Text, {
                  variant: "text-md/medium",
                  className: S.acronym,
                  "aria-hidden": !0,
                  children: e,
                })
              : null;
          return (0, l.jsx)(s.Avatar, {
            src: t,
            "aria-label": n,
            size: s.AvatarSizes.SIZE_32,
            className: S.inviteRowAvatar,
          });
        }
        render() {
          let e;
          let { user: t, channel: n } = this.props,
            { sending: i, invited: a, hovered: o } = this.state;
          return (
            (e = a
              ? (0, l.jsx)(s.Button, {
                  look: s.Button.Looks.LINK,
                  size: s.Button.Sizes.SMALL,
                  disabled: !0,
                  color: (0, r.wj)(u.Z.theme)
                    ? s.Button.Colors.WHITE
                    : s.Button.Colors.BRAND,
                  children: I.intl.string(I.t["dVT14+"]),
                })
              : (0, l.jsx)(s.Button, {
                  color: s.Button.Colors.GREEN,
                  look: o ? s.Button.Looks.FILLED : s.Button.Looks.OUTLINED,
                  className: S.inviteRowButton,
                  size: s.Button.Sizes.SMALL,
                  submitting: i,
                  onClick: this.handleClickInvite,
                  children: I.intl.string(I.t.jYnGPD),
                })),
            (0, l.jsxs)("div", {
              className: S.inviteRow,
              onMouseEnter: this.handleMouseEnter,
              onMouseLeave: this.handleMouseLeave,
              children: [
                (0, l.jsxs)("div", {
                  className: S.inviteRowInfo,
                  children: [
                    this.renderUserOrChannel(),
                    (0, l.jsxs)("div", {
                      className: S.inviteRowName,
                      children: [
                        x.ZP.getName(t),
                        null != n ? (0, d.F6)(n, m.default, g.Z, !0) : null,
                      ],
                    }),
                  ],
                }),
                e,
              ],
            })
          );
        }
        constructor(...e) {
          super(...e),
            f(this, "state", { sending: !1, invited: !1, hovered: !1 }),
            f(this, "handleMouseEnter", () => {
              this.setState({ hovered: !0 });
            }),
            f(this, "handleMouseLeave", () => {
              this.setState({ hovered: !1 });
            }),
            f(this, "getSuggestedProps", () => {
              var e;
              let { row: t } = this.props;
              return null !==
                (e = null != t ? h.Z.getSelectedInviteMetadata(t) : null) &&
                void 0 !== e
                ? e
                : null;
            }),
            f(this, "handleClickInvite", () => {
              let {
                user: e,
                channel: t,
                inviteKey: n,
                location: l,
              } = this.props;
              if (null != n)
                null != t
                  ? (this.setState({ sending: !0 }),
                    a.Z.enqueue(
                      {
                        type: a.m.GROUP_DM,
                        channel: t,
                        inviteKey: n,
                        location: l,
                        suggested: this.getSuggestedProps(),
                      },
                      (e) => {
                        this.setState({ sending: !1, invited: e });
                      },
                    ))
                  : null != e &&
                    (this.setState({ sending: !0 }),
                    a.Z.enqueue(
                      {
                        type: a.m.USER,
                        user: e,
                        inviteKey: n,
                        location: l,
                        suggested: this.getSuggestedProps(),
                      },
                      (e) => {
                        this.setState({ sending: !1, invited: e });
                      },
                    ));
            });
        }
      }
    },
    751771: function (e, t, n) {
      let l, i, r, s, a, o, d;
      n(47120);
      var u,
        c,
        h,
        g,
        m = n(442837),
        v = n(570140),
        p = n(823385),
        x = n(814443),
        I = n(823379),
        S = n(971130),
        f = n(709054),
        T = n(592125),
        N = n(496675),
        E = n(699516),
        C = n(981631),
        _ = n(245335);
      let j = new Set(),
        y = [],
        Z = new Map();
      function M(e) {
        let t = new Set(),
          n = null == s || d === _.Iq.EMBEDDED_APPLICATION ? void 0 : s.id,
          l = (0, S.rh)(j, n);
        for (let e of (null != l && !E.Z.isBlocked(l.id) && t.add(l.id),
        x.Z.getUserAffinitiesUserIds()))
          t.add(e);
        let i = new Set();
        return (
          d === _.Iq.EMBEDDED_APPLICATION &&
            p.Z.getChannelHistory()
              .map((e) => T.Z.getChannel(e))
              .filter(I.lm)
              .filter((e) => e.type === C.d4z.GUILD_TEXT)
              .filter((e) => N.Z.can(C.Plq.SEND_MESSAGES, e))
              .slice(0, 3)
              .forEach((e) => i.add(e.id)),
          (0, S.an)({
            query: e,
            omitUserIds: j,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: n,
            suggestedChannelIds: i,
            inviteTargetType: d,
          })
        );
      }
      function b(e) {
        (y = e),
          (Z = new Map()),
          e.forEach((e, t) => {
            Z.set(e, { index: t });
          });
      }
      class w extends (u = m.ZP.Store) {
        initialize() {
          this.waitFor(E.Z, x.Z);
        }
        getInviteSuggestionRows() {
          return y;
        }
        getTotalSuggestionsCount() {
          return i;
        }
        getInitialCounts() {
          return l;
        }
        getSelectedInviteMetadata(e) {
          let t = Z.get(e),
            n = x.Z.getUserAffinitiesUserIds();
          return null != t
            ? {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: y.length,
                numAffinityConnections: n.size,
                isFiltered: r,
              }
            : null;
        }
      }
      (g = "InviteSuggestionsStore"),
        (h = "displayName") in (c = w)
          ? Object.defineProperty(c, h, {
              value: g,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (c[h] = g),
        (t.Z = new w(v.Z, {
          LOAD_INVITE_SUGGESTIONS: function (e) {
            let {
              omitUserIds: t,
              guild: n,
              channel: u,
              applicationId: c,
              inviteTargetType: h,
            } = e;
            (s = null != u ? n : null), (a = u), (o = c), (d = h);
            let g = E.Z.getRelationships(),
              m = f.default.keys(g).filter((e) => g[e] === C.OGo.BLOCKED);
            (j = new Set([
              ...t,
              ...m,
              ...(0, S.Sz)({
                channel: a,
                applicationId: o,
                inviteTargetType: h,
              }),
            ])),
              (r = !1);
            let { rows: v, counts: p } = M("");
            b(v), (l = p), (i = y.length);
          },
          INVITE_SUGGESTIONS_SEARCH: function (e) {
            let { query: t } = e;
            r = "" !== t;
            let { rows: n } = M(t);
            b(n);
          },
        }));
    },
  },
]);
//# sourceMappingURL=8e4eec1b55fb2c0121d8.js.map
