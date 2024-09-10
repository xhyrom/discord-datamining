"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7654"],
  {
    622577: function (e) {
      e.exports = "/assets/cff409ce6ad136be8d0a.svg";
    },
    247272: function (e, n, t) {
      t.d(n, {
        C: function () {
          return i;
        },
        x: function () {
          return a;
        },
      }),
        t(47120);
      var l = t(570140),
        s = t(93127);
      function a(e) {
        let {
          omitUserIds: n,
          guild: t,
          channel: a,
          applicationId: i,
          inviteTargetType: r,
        } = e;
        return (0, s.W)().then(() => {
          l.Z.dispatch({
            type: "LOAD_INVITE_SUGGESTIONS",
            omitUserIds: null != n ? n : new Set(),
            guild: t,
            channel: a,
            applicationId: i,
            inviteTargetType: r,
          });
        });
      }
      function i(e) {
        l.Z.dispatch({ type: "INVITE_SUGGESTIONS_SEARCH", query: e });
      }
    },
    630810: function (e, n, t) {
      t.d(n, {
        m: function () {
          return s;
        },
      });
      var l,
        s,
        a = t(493683),
        i = t(904245),
        r = t(710845),
        o = t(592125),
        d = t(70956),
        u = t(651655);
      let c = 1 * d.Z.Millis.SECOND + 10;
      ((l = s || (s = {}))[(l.GROUP_DM = 0)] = "GROUP_DM"),
        (l[(l.USER = 1)] = "USER"),
        (l[(l.CHANNEL = 2)] = "CHANNEL");
      class h extends u.Z {
        _sendInvite(e, n, t, l, s) {
          i.Z.sendInvite(e.id, n, t, l).then(
            () => s(null, !0),
            () => s(null, !1),
          );
        }
        drain(e, n) {
          let { location: t, suggested: l } = e;
          switch (e.type) {
            case 0:
            case 2:
              this._sendInvite(e.channel, e.inviteKey, t, l, n);
              break;
            case 1:
              a.Z.ensurePrivateChannel(e.user.id).then(
                (s) => {
                  let a = o.Z.getChannel(s);
                  null != a && this._sendInvite(a, e.inviteKey, t, l, n);
                },
                () => n(null, !1),
              );
          }
        }
        constructor() {
          super(new r.Z("InviteQueue"), c);
        }
      }
      n.Z = new h();
    },
    956829: function (e, n, t) {
      t.d(n, {
        h: function () {
          return l;
        },
      });
      let l = (0, t(818083).B)({
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
    259473: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var l = t(399606),
        s = t(430824),
        a = t(971130),
        i = t(956829),
        r = t(981631);
      function o(e) {
        let { guildId: n } = e,
          t = i.h.useExperiment({
            guildId: null != n ? n : r.lds,
            location: "6798be_2",
          }),
          o = (0, l.e7)([s.Z], () => s.Z.getGuild(n));
        return (
          null != n &&
          (function (e) {
            var n;
            let { guild: t, experimentConfig: l } = e,
              { defaultInvitesToNeverExpire: s } =
                null != l
                  ? l
                  : i.h.getCurrentConfig({
                      guildId:
                        null !== (n = null == t ? void 0 : t.id) && void 0 !== n
                          ? n
                          : r.lds,
                      location: "6798be_1",
                    });
            if (
              (null == t ? void 0 : t.hasFeature(r.oNc.HUB)) === !0 ||
              ((null == t ? void 0 : t.hasFeature(r.oNc.COMMUNITY)) === !0 && s)
            )
              return a.ZP.INVITE_OPTIONS_FOREVER.value;
          })({ guild: o, experimentConfig: t })
        );
      }
    },
    111810: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var l = t(470079),
        s = t(252618),
        a = t(358085),
        i = t(689938);
      function r() {
        return (
          l.useEffect(() => {
            !a.isPlatformEmbedded &&
              (0, s.EM)({
                messages: [
                  i.Z.Messages.GO_LIVE_HEY,
                  i.Z.Messages.GO_LIVE_LOOK,
                  i.Z.Messages.GO_LIVE_LISTEN,
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
    301935: function (e, n, t) {
      t.d(n, {
        o: function () {
          return l;
        },
      });
      let l = (0, t(818083).B)({
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
    397195: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var l = t(470079),
        s = t(106351),
        a = t(399606),
        i = t(447003),
        r = t(592125),
        o = t(984933),
        d = t(823379);
      function u(e) {
        let n = (0, a.Wu)([o.ZP], () => o.ZP.getVocalChannelIds(e)),
          t = (0, a.Wu)(
            [r.Z],
            () => n.map((e) => r.Z.getChannel(e)).filter(d.lm),
            [n],
          );
        return l.useMemo(
          () => t.filter((e) => !(0, i.Z)(e) && e.type === s.d.GUILD_VOICE),
          [t],
        );
      }
    },
    751499: function (e, n, t) {
      var l = t(818083);
      n.Z = (0, l.B)({
        kind: "guild",
        id: "2022-11_default_to_server_vanity_v2",
        label: "Default To Server Vanity v2",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
    },
    181852: function (e, n, t) {
      var l = t(818083);
      n.Z = (0, l.B)({
        kind: "guild",
        id: "2022-05_vanity_url_target",
        label: "Vanity URL Targeting",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
    },
    560114: function (e, n, t) {
      t.r(n), t(47120);
      var l,
        s = t(735250),
        a = t(470079),
        i = t(120356),
        r = t.n(i),
        o = t(512722),
        d = t.n(o),
        u = t(392711),
        c = t.n(u),
        h = t(990547),
        I = t(533800),
        g = t(442837),
        E = t(692547),
        _ = t(481060),
        m = t(447543),
        T = t(247272),
        N = t(110924),
        v = t(100527),
        S = t(906732),
        p = t(835473),
        x = t(447003),
        M = t(471445),
        C = t(259473),
        f = t(600164),
        Z = t(687516),
        A = t(111810),
        R = t(301935),
        V = t(397195),
        j = t(427679),
        y = t(199902),
        L = t(439170),
        O = t(592125),
        D = t(984933),
        G = t(341165),
        U = t(751771),
        b = t(496675),
        B = t(158776),
        P = t(944486),
        w = t(594174),
        F = t(938475),
        k = t(626135),
        H = t(630388),
        K = t(971130),
        W = t(264229),
        Y = t(751499),
        z = t(181852),
        q = t(366980),
        X = t(444260),
        $ = t(585385),
        Q = t(603236),
        J = t(462376),
        ee = t(245335),
        en = t(981631),
        et = t(176505),
        el = t(689938),
        es = t(871820),
        ea = t(113207),
        ei = t(579861),
        er = t(622577);
      function eo(e, n, t) {
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
      let {
        INVITE_OPTIONS_FOREVER: ed,
        INVITE_OPTIONS_7_DAYS: eu,
        INVITE_OPTIONS_UNLIMITED: ec,
      } = K.ZP;
      class eh extends (l = a.PureComponent) {
        componentDidMount() {
          let {
              inviteChannel: e,
              code: n,
              guild: t,
              source: l,
              canCreateInvites: s,
              analyticsLocation: a,
              streamUserId: i,
              targetType: r,
              targetUserId: o,
              application: d,
              initialCounts: u,
              rows: c,
              showFriends: h,
              modalState: I,
              setModalState: g,
            } = this.props,
            { maxAge: E, maxUses: _, temporary: T } = I;
          if (s) {
            let t = null == e ? void 0 : e.id;
            if (null == t) return;
            g({ networkError: void 0 }),
              m.Z.createInvite(
                t,
                {
                  validate: null != n ? n : null,
                  max_age: E,
                  max_uses: _,
                  target_user_id: o,
                  target_type: r,
                  target_application_id: null == d ? void 0 : d.id,
                  temporary: T,
                },
                l,
              ).catch((e) => g({ networkError: e }));
          }
          if (
            (h &&
              k.default.track(en.rMx.INVITE_SUGGESTION_OPENED, {
                location: l,
                num_suggestions: c.length,
                num_friends: u.numFriends,
                num_dms: u.numDms,
                num_group_dms: u.numGroupDms,
                guild_id: t.id,
              }),
            z.Z.trackExposure({
              guildId: null == t ? void 0 : t.id,
              location: "acc417_1",
            }),
            null != i)
          ) {
            let e = y.Z.getStreamForUser(i, t.id),
              n = (0, Z.L2)(e, B.Z);
            k.default.track(en.rMx.OPEN_MODAL, {
              type: "Send Stream Invite",
              source: l,
              location: a,
              other_user_id: i,
              application_id: null != n ? n.id : null,
              application_name: null != n ? n.name : null,
              game_id: null != n ? n.id : null,
            });
          } else
            (null == d ? void 0 : d.id) != null ||
              k.default.track(en.rMx.OPEN_MODAL, {
                type: "Instant Invite Modal",
                source: l,
                location: a,
              });
        }
        componentWillUnmount() {
          let {
            inviteChannel: e,
            inviteFlags: n,
            setInviteFlags: t,
          } = this.props;
          (0, H.yE)(n, I.$.IS_GUEST_INVITE) &&
            null != e &&
            (t((0, H.Ge)(n, I.$.IS_GUEST_INVITE)),
            m.Z.clearInviteFromStore(e.id));
        }
        getInviteKey() {
          let {
              code: e,
              vanityURLCode: n,
              guildScheduledEvent: t,
              modalState: l,
            } = this.props,
            { showVanityURL: s } = l,
            a = s ? n : null != e ? e : n;
          return null == a
            ? a
            : (0, W.tV)({
                baseCode: a,
                guildScheduledEventId: null == t ? void 0 : t.id,
              });
        }
        renderChannelWarning() {
          let { inviteChannel: e } = this.props;
          return (0, x.Z)(e)
            ? (0, s.jsxs)("div", {
                className: es.warningContainer,
                children: [
                  (0, s.jsx)(_.CircleWarningIcon, {
                    size: "custom",
                    className: es.warningIcon,
                    color: E.Z.unsafe_rawColors.YELLOW_300.css,
                    width: 12,
                  }),
                  (0, s.jsx)(_.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: el.Z.Messages.INVITE_PRIVATE_CHANNEL_WARNING,
                  }),
                ],
              })
            : null;
        }
        renderHeader() {
          let e;
          let {
              guild: n,
              showFriends: t,
              guildScheduledEvent: l,
              streamUserId: a,
              application: i,
              welcomeToServer: o,
              inviteChannel: d,
              modalState: u,
              handleDone: c,
            } = this.props,
            { query: h } = u,
            I = null,
            g = null;
          if (
            ((e = o
              ? null
              : null != a
                ? el.Z.Messages.INVITE_STREAM_HEADER
                : null != i
                  ? el.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_FRIENDS_TO_ACTIVITY_NAME.format(
                      { applicationName: i.name },
                    )
                  : null != l
                    ? el.Z.Messages.GUILD_EVENT_INVITE_MODAL_TITLE
                    : (null == d ? void 0 : d.isGuildStageVoice())
                      ? el.Z.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_HEADER
                      : el.Z.Messages.INVITE_TO_SERVER_NAME.format({
                          name: n.toString(),
                        })),
            null != d)
          ) {
            let e = (0, M.KS)(d, n);
            null != e &&
              (g = (0, s.jsxs)("div", {
                className: es.headerChannelContainer,
                children: [
                  (0, s.jsx)(e, { className: es.channelIcon }),
                  (0, s.jsx)(_.Text, {
                    color: "interactive-normal",
                    variant: "text-md/normal",
                    children: d.name,
                  }),
                ],
              }));
          }
          return (
            (I = n.hasFeature(en.oNc.HUB)
              ? (0, s.jsxs)("div", {
                  className: es.hubHeader,
                  children: [
                    (0, s.jsx)(_.Heading, {
                      className: r()(
                        es.hubInviteTitle,
                        es.headerCloseButtonSpacing,
                      ),
                      id: this._headerId,
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children: el.Z.Messages.HUB_INVITE_HEADER,
                    }),
                    (0, s.jsx)(_.Text, {
                      color: "header-secondary",
                      variant: "text-md/normal",
                      children: el.Z.Messages.HUB_INVITE_SUBHEADER,
                    }),
                    t &&
                      (0, s.jsx)(_.SearchBar, {
                        query: h,
                        className: es.hubFriendSearch,
                        onChange: this.handleQueryChange,
                        placeholder: el.Z.Messages.INVITE_SEARCH_FOR_FRIENDS,
                        "aria-label": el.Z.Messages.INVITE_SEARCH_FOR_FRIENDS,
                        autoFocus: !0,
                        onClear: this.handleClearSearch,
                      }),
                  ],
                })
              : t
                ? (0, s.jsxs)("div", {
                    className: es.header,
                    children: [
                      (0, s.jsx)("div", {
                        className: es.__invalid_headerTopRow,
                        children: (0, s.jsx)(_.FormTitle, {
                          id: this._headerId,
                          tag: "h2",
                          className: r()(
                            ea.marginBottom4,
                            es.headerCloseButtonSpacing,
                            es.headerText,
                          ),
                          children: e,
                        }),
                      }),
                      g,
                      (0, s.jsx)(_.SearchBar, {
                        query: h,
                        className: es.searchBar,
                        onChange: this.handleQueryChange,
                        placeholder: el.Z.Messages.INVITE_SEARCH_FOR_FRIENDS,
                        autoFocus: !0,
                        onClear: this.handleClearSearch,
                      }),
                      (0, s.jsx)("div", {
                        className: ea.marginTop8,
                        children: this.renderChannelWarning(),
                      }),
                    ],
                  })
                : (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(_.FormTitle, {
                        id: this._headerId,
                        tag: "h2",
                        className: r()(
                          ea.marginReset,
                          es.headerCloseButtonSpacing,
                          es.headerText,
                        ),
                        children: e,
                      }),
                      g,
                      this.renderChannelWarning(),
                    ],
                  })),
            (0, s.jsxs)(_.ModalHeader, {
              separator: t,
              children: [
                (0, s.jsx)(_.ModalCloseButton, {
                  className: es.closeButton,
                  onClick: c,
                }),
                (0, s.jsxs)("div", {
                  className: es.headerContainer,
                  children: [
                    o &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)("img", {
                            className: es.welcomeImage,
                            src: er,
                            alt: "",
                          }),
                          (0, s.jsx)(_.Heading, {
                            variant: "heading-lg/semibold",
                            className: es.welcomeHeading,
                            children: el.Z.Messages.INVITE_WELCOME_HEADING,
                          }),
                          (0, s.jsx)(_.Text, {
                            variant: "text-md/normal",
                            color: "text-secondary",
                            className: es.welcomeSubheading,
                            children: el.Z.Messages.INVITE_WELCOME_SUBHEADING,
                          }),
                        ],
                      }),
                    null != a ? (0, s.jsx)(A.Z, {}) : null,
                    I,
                  ],
                }),
              ],
            })
          );
        }
        renderFriendsBody() {
          let { rows: e } = this.props,
            n = this.getInviteKey();
          return 0 === e.length
            ? (0, s.jsx)(_.ModalContent, {
                className: r()(es.inviteRowEmptyState),
                children: (0, s.jsx)(_.EmptyStateText, {
                  children: el.Z.Messages.INVITE_FRIEND_MODAL_NO_RESULTS,
                }),
              })
            : null == n
              ? (0, s.jsx)(_.ModalContent, {
                  className: r()(es.inviteRowEmptyState),
                  children: (0, s.jsx)(_.EmptyStateText, {
                    children: el.Z.Messages.INVITE_FRIEND_MODAL_LOADING,
                  }),
                })
              : (0, s.jsx)(_.ModalListContent, {
                  className: es.scroller,
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
            guild: n,
            showFriends: t,
            streamUserId: l,
            application: a,
          } = this.props;
          if (t) return this.renderFriendsBody();
          let i = (0, q.Z)(
              null !== (e = this.getInviteKey()) && void 0 !== e ? e : "",
            ),
            r = w.default.getCurrentUser();
          d()(null != r, "InstantInviteModal: user cannot be undefined");
          let o = n.isOwner(r)
            ? el.Z.Messages.INVITE_SHARE_LINK_OWN_SERVER
            : el.Z.Messages.SHARE_INVITE_LINK_FOR_ACCESS;
          return (
            null != l
              ? (o = el.Z.Messages.INVITE_SHARE_LINK_TO_STREAM)
              : null != a &&
                (o = el.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_LINK_TO_ACTIVITY),
            (0, s.jsx)(_.ModalContent, {
              className: es.noScroll,
              children: (0, s.jsxs)(f.Z, {
                direction: f.Z.Direction.VERTICAL,
                className: ea.marginBottom20,
                children: [
                  (0, s.jsx)(_.Text, {
                    className: es.subText,
                    variant: "text-sm/normal",
                    children: o,
                  }),
                  (0, s.jsx)(Q.I, { ...this.props, copyValue: i }),
                ],
              }),
            })
          );
        }
        renderFooter() {
          var e;
          let {
              noInvitesAvailable: n,
              showFriends: t,
              guildScheduledEvent: l,
              streamUserId: a,
              application: i,
              inviteChannel: o,
              modalState: d,
            } = this.props,
            { maxAge: u } = d,
            c = null,
            h = (0, q.Z)(
              null !== (e = this.getInviteKey()) && void 0 !== e ? e : "",
            );
          if (t) {
            let e = el.Z.Messages.INVITE_FOOTER_LINK_HEADER;
            null != a
              ? (e = el.Z.Messages.INVITE_STREAM_FOOTER_LINK_HEADER)
              : null != i
                ? (e =
                    el.Z.Messages
                      .EMBEDDED_ACTIVITIES_INVITE_ACTIVITY_FOOTER_LINK_HEADER)
                : null != l
                  ? (e = el.Z.Messages.GUILD_EVENT_INVITE_MODAL_FOOTER)
                  : (null == o ? void 0 : o.isGuildStageVoice()) &&
                    (e =
                      el.Z.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_FOOTER),
              (c = (0, s.jsxs)(f.Z, {
                direction: f.Z.Direction.VERTICAL,
                className: es.content,
                children: [
                  (0, s.jsx)(_.FormTitle, {
                    tag: "h5",
                    className: ea.marginBottom8,
                    children: e,
                  }),
                  (0, s.jsx)(Q.I, { ...this.props, copyValue: h }),
                ],
              }));
          } else
            !n &&
              (c = (0, s.jsxs)(f.Z, {
                justify: f.Z.Justify.BETWEEN,
                className: ea.marginTop20,
                children: [
                  (0, s.jsx)(_.Checkbox, {
                    size: 18,
                    type: _.Checkbox.Types.INVERTED,
                    value: u === ed.value,
                    onChange: this.handleToggleMaxAge,
                    children: (0, s.jsx)(_.Text, {
                      variant: "text-sm/normal",
                      children: el.Z.Messages.SET_INVITE_LINK_NEVER_EXPIRE,
                    }),
                  }),
                  (0, s.jsx)(_.Tooltip, {
                    text: el.Z.Messages.LINK_SETTINGS,
                    children: (e) => {
                      let { onMouseEnter: n, onMouseLeave: t } = e;
                      return (0, s.jsx)(_.Clickable, {
                        onClick: this.openSettings,
                        onMouseEnter: n,
                        onMouseLeave: t,
                        className: ei.cursorPointer,
                        children: (0, s.jsx)(_.SettingsIcon, {
                          size: "sm",
                          color: E.Z.unsafe_rawColors.PRIMARY_400.css,
                        }),
                      });
                    },
                  }),
                ],
              }));
          return null != c
            ? (0, s.jsx)(_.ModalFooter, {
                className: r()({ [es.noPadding]: !t, [es.footer]: t }),
                children: c,
              })
            : null;
        }
        getModalContent() {
          let { modalState: e, handleDone: n } = this.props,
            { currentPage: t } = e;
          switch (t) {
            case ee.RV.MAIN:
              return (0, s.jsxs)(s.Fragment, {
                children: [
                  this.renderHeader(),
                  this.renderBody(),
                  this.renderFooter(),
                ],
              });
            case ee.RV.SETTINGS:
              return (0, s.jsx)($.D, {
                ...this.props,
                headerId: this._headerId,
                onSelectMaxAge: this.handleSelectMaxAge,
                onSelectMaxUses: this.handleSelectMaxUses,
                onToggleTemporary: this.handleToggleTemporary,
                handleDone: n,
              });
            case ee.RV.GUEST:
              var l;
              let a = (0, q.Z)(
                null !== (l = this.getInviteKey()) && void 0 !== l ? l : "",
              );
              return (0, s.jsx)(X.B, {
                ...this.props,
                headerId: this._headerId,
                handleDone: n,
                copyValue: a,
              });
            default:
              return null;
          }
        }
        render() {
          let { transitionState: e, inviteChannel: n, guild: t } = this.props;
          return (0, s.jsx)("div", {
            className: this.props.showFriends ? es.wrapper : void 0,
            children: (0, s.jsx)(_.ModalRoot, {
              impression: {
                impressionName: h.ImpressionNames.GUILD_INVITE,
                impressionProperties: {
                  invite_channel_id: null == n ? void 0 : n.id,
                  invite_guild_id: t.id,
                },
              },
              "aria-labelledby": this._headerId,
              transitionState: e,
              className: es.modal,
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
              let { modalState: n, setModalState: t } = this.props;
              t({ maxAge: e, savedMaxAge: n.maxAge });
            }),
            eo(this, "handleSelectMaxUses", (e) => {
              let { setModalState: n } = this.props;
              n({ maxUses: e });
            }),
            eo(this, "handleToggleTemporary", (e) => {
              let { setModalState: n } = this.props;
              n({ temporary: e });
            }),
            eo(this, "handleToggleGuest", (e) => {
              let { inviteFlags: n, setInviteFlags: t } = this.props;
              t((0, H.mB)(n, I.$.IS_GUEST_INVITE, e));
            }),
            eo(this, "handleQueryChange", (e) => {
              var n;
              let { setModalState: t } = this.props;
              null === (n = this._scroller) ||
                void 0 === n ||
                n.scrollTo({ to: 0 }),
                (0, T.C)(e),
                t({ query: e });
            }),
            eo(this, "handleClearSearch", () => {
              this.handleQueryChange("");
            }),
            eo(this, "handleToggleMaxAge", () => {
              let { modalState: e, setModalState: n } = this.props,
                { maxAge: t, savedMaxAge: l } = e;
              n({ maxAge: l, savedMaxAge: t });
            }),
            eo(this, "getRowHeight", (e, n) => {
              if (e > 0) return 0;
              switch (this.props.rows[n].type) {
                case K.bm.CHANNEL:
                case K.bm.GROUP_DM:
                case K.bm.DM:
                case K.bm.FRIEND:
                  return J.k;
                default:
                  return 0;
              }
            }),
            eo(this, "renderRow", (e) => {
              let { section: n, row: t } = e;
              if (n > 0) return null;
              let { analyticsLocation: l } = this.props,
                a = this.getInviteKey(),
                i = this.props.rows[t],
                r = "".concat(i.type, "-").concat(i.item.id);
              switch (i.type) {
                case K.bm.GROUP_DM:
                case K.bm.CHANNEL:
                  return (0, s.jsx)(
                    J.d,
                    { row: i, channel: i.item, inviteKey: a, location: l },
                    r,
                  );
                case K.bm.DM:
                case K.bm.FRIEND:
                  return (0, s.jsx)(
                    J.d,
                    { row: i, user: i.item, inviteKey: a, location: l },
                    r,
                  );
                default:
                  return null;
              }
            });
        }
      }
      eo(eh, "defaultProps", {
        analyticsLocation: en.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
        defaultMaxAge: eu.value,
      }),
        (n.default = a.forwardRef(function (e, n) {
          var t, l, i, r;
          let {
              channel: o,
              guild: d,
              source: u,
              guildScheduledEvent: c,
              streamUserId: h,
              applicationId: E,
              transitionState: _,
              onClose: M,
              welcomeToServer: f,
              page: Z,
              analyticsLocation: A,
            } = e,
            [y, B] = a.useState(Z === ee.RV.GUEST ? I.$.IS_GUEST_INVITE : 0),
            { analyticsLocations: w } = (0, S.ZP)(v.Z.INSTANT_INVITE_MODAL),
            k = (0, g.e7)([O.Z, P.Z], () => {
              let e = P.Z.getVoiceChannelId();
              if (null == e) return null;
              let n = O.Z.getChannel(e);
              return (null == n ? void 0 : n.guild_id) === d.id ? n : null;
            }),
            K =
              null != k &&
              !(0, x.Z)(k) &&
              [en.t4x.GUILD_CONTEXT_MENU, en.t4x.GUILD_HEADER].includes(u),
            W = (0, V.Z)(d.id),
            z = (0, g.e7)(
              [P.Z, O.Z, D.ZP],
              () => {
                if (
                  K &&
                  ((0, H.yE)(y, I.$.IS_GUEST_INVITE) || Z === ee.RV.GUEST)
                )
                  return k;
                if (Z === ee.RV.GUEST) return 1 === W.length ? W[0] : void 0;
                if (null != o) return o;
                let e = P.Z.getChannelId(),
                  n = null == e || (0, et.AB)(e) ? void 0 : O.Z.getChannel(e);
                return (
                  (null == n ? void 0 : n.isThread()) &&
                    (n = O.Z.getChannel(n.parent_id)),
                  null != n
                    ? n
                    : D.ZP.getDefaultChannel(
                        d.id,
                        !0,
                        en.Plq.CREATE_INSTANT_INVITE,
                      )
                );
              },
              [K, y, Z, o, d.id, k, W],
            ),
            [q, X] = a.useState(null),
            $ = null != q ? q : z,
            Q = null;
          null != h
            ? (Q = ee.Iq.STREAM)
            : null != E && (Q = ee.Iq.EMBEDDED_APPLICATION);
          let J = null != o ? o.getGuildId() : null != d ? d.id : null,
            el = (0, g.e7)(
              [G.Z],
              () => {
                let e = null != $ ? $.id : null;
                return null == e
                  ? null
                  : G.Z.getInvite(e, {
                      targetType: Q,
                      targetUserId: h,
                      targetApplicationId: E,
                    });
              },
              [$, Q, h, E],
            ),
            [es, ea, ei, er, eo] = (0, g.Wu)(
              [U.Z, F.ZP, L.ZP],
              () => {
                let e = null != $ ? $.id : null;
                return [
                  U.Z.getInviteSuggestionRows(),
                  U.Z.getTotalSuggestionsCount() >= 1,
                  U.Z.getInitialCounts(),
                  null != o && null != $
                    ? F.ZP.getVoiceStatesForChannel($)
                    : null,
                  null != J ? L.ZP.getProps(J, e) : null,
                ];
              },
              [$, o, J],
            ),
            eI = (0, g.e7)(
              [b.Z],
              () => null != $ && b.Z.can(en.Plq.CREATE_INSTANT_INVITE, $),
              [$],
            ),
            eg = null === el || !eI,
            [eE] = a.useState(() => {
              let e = new Set();
              return (
                null != h && null != er
                  ? er.forEach((n) => {
                      let { user: t } = n;
                      e.add(t.id);
                    })
                  : null != J &&
                    null != eo &&
                    Q !== ee.Iq.EMBEDDED_APPLICATION &&
                    eo.rows.forEach((n) => {
                      n.type === L.so.MEMBER && e.add(n.userId);
                    }),
                e
              );
            }),
            e_ = null == o ? void 0 : o.id,
            em = (0, g.e7)([j.Z], () => j.Z.getStageInstanceByChannel(e_), [
              e_,
            ]);
          a.useEffect(() => {
            (0, T.x)({
              omitUserIds: eE,
              guild: d,
              channel: o,
              applicationId: E,
              inviteTargetType: Q,
            }).catch(en.VqG);
          }, [eE, o, d, E, Q]);
          let [eT] = (0, p.Z)(null != E ? [E] : []),
            eN = (0, C.Z)({ guildId: J }),
            ev = null != el ? el.code : void 0,
            eS = null == el ? void 0 : el.maxAge,
            ep = null == el ? void 0 : el.maxUses,
            ex = null == el ? void 0 : el.temporary,
            eM = d.vanityURLCode,
            eC = null != eM && eM.length > 0,
            { enabled: ef } = Y.Z.useExperiment(
              {
                guildId:
                  null !==
                    (i =
                      null !==
                        (l =
                          null !== (t = d.id) && void 0 !== t
                            ? t
                            : null == el
                              ? void 0
                              : el.guild.id) && void 0 !== l
                        ? l
                        : J) && void 0 !== i
                    ? i
                    : en.lds,
                location: "acc417_2",
              },
              { autoTrackExposure: eC },
            ),
            eZ = ef && !(null == $ ? void 0 : $.isGuildVocal()) && eC,
            eA = (null == $ ? void 0 : $.type) === en.d4z.GUILD_VOICE,
            eR = (0, x.Z)($);
          !eI &&
            (null == em ? void 0 : em.invite_code) != null &&
            (ev = em.invite_code);
          let [eV, ej] = a.useState({
              query: "",
              maxAge:
                null !== (r = null != eS ? eS : eN) && void 0 !== r
                  ? r
                  : eu.value,
              savedMaxAge:
                eS === ed.value ? (null != eN ? eN : eu.value) : ed.value,
              maxUses: null != ep && 0 !== ep ? ep : ec.value,
              temporary: null != ex && ex,
              networkError: void 0,
              showVanityURL: eZ,
              currentPage: null != Z ? Z : ee.RV.MAIN,
              lastPage: void 0,
            }),
            ey = a.useCallback((e) => {
              ej((n) => ({ ...n, ...e }));
            }, []),
            eL = a.useCallback(
              (e) => {
                ey({ currentPage: e, lastPage: eV.currentPage });
              },
              [eV.currentPage, ey],
            ),
            eO = (eA || K) && Z !== ee.RV.GUEST && !eZ && !eg && !eR,
            { enabled: eD } = R.o.useExperiment(
              { guildId: null == d ? void 0 : d.id, location: "acc417_3" },
              { autoTrackExposure: eO },
            ),
            { maxAge: eG, maxUses: eU, temporary: eb, savedMaxAge: eB } = eV,
            eP = a.useCallback(() => {
              let { currentPage: e, lastPage: n } = eV;
              e === ee.RV.SETTINGS && null != n ? eL(n) : M();
            }, [eL, eV, M]),
            ew = a.useCallback(() => {
              let e = null == $ ? void 0 : $.id;
              0 === eU && 0 === eG && !eb && eZ
                ? ey({ networkError: void 0, showVanityURL: !0 })
                : null != e &&
                  (ey({ networkError: void 0, showVanityURL: !1 }),
                  m.Z.createInvite(
                    e,
                    {
                      max_age: eG,
                      max_uses: eU,
                      target_type: Q,
                      target_user_id: h,
                      target_application_id: null == eT ? void 0 : eT.id,
                      temporary: eb,
                      flags: y,
                    },
                    u,
                  ).catch((e) => ey({ networkError: e, showVanityURL: eZ }))),
                eG !== ed.value &&
                  eB !== ed.value &&
                  ey({ savedMaxAge: ed.value });
            }, [
              eZ,
              $,
              u,
              null == eT ? void 0 : eT.id,
              Q,
              h,
              eG,
              eU,
              eb,
              y,
              ey,
              eB,
            ]),
            eF = (0, N.Z)($),
            ek = (0, N.Z)(y),
            eH = eF !== $,
            eK = ek !== y;
          return (
            a.useEffect(() => {
              (eH || eK) && ew();
            }, [ew, eH, eK]),
            (0, s.jsx)(S.Gt, {
              value: w,
              children: (0, s.jsx)(eh, {
                ref: n,
                canCreateInvites: eI,
                noInvitesAvailable: eg,
                inviteChannel: $,
                guild: d,
                guildScheduledEvent: c,
                streamUserId: h,
                vanityURLCode: eM,
                targetType: Q,
                targetUserId: h,
                application: eT,
                rows: es,
                showFriends: ea,
                initialCounts: ei,
                code: ev,
                source: u,
                welcomeToServer: f,
                analyticsLocations: w,
                analyticsLocation: A,
                transitionState: _,
                onClose: M,
                canShowVanityURL: eZ,
                isGuestInviteCreationToggleEnabled: eD && eO,
                shouldHideTemporaryInviteToggle:
                  (eD && eO) || Z === ee.RV.GUEST,
                modalState: eV,
                setModalState: ey,
                changePage: eL,
                onGenerateNewLink: ew,
                inviteFlags: y,
                setInviteFlags: B,
                showGuestInviteToggleForCurrentVoiceChannel: K,
                setInviteChannel: X,
                handleDone: eP,
              }),
            })
          );
        }));
    },
    444260: function (e, n, t) {
      t.d(n, {
        B: function () {
          return E;
        },
      }),
        t(724458);
      var l = t(735250),
        s = t(470079),
        a = t(120356),
        i = t.n(a),
        r = t(481060),
        o = t(397195),
        d = t(473403),
        u = t(603236),
        c = t(689938),
        h = t(871820),
        I = t(113207);
      let g = (e) => {
          let { guild: n, inviteChannel: t, setInviteChannel: a } = e,
            i = (0, o.Z)(n.id),
            u = s.useMemo(
              () => i.reduce((e, n) => ({ ...e, [n.id]: n }), {}),
              [i],
            ),
            h = s.useMemo(
              () =>
                Object.values(u).map((e) => ({ value: e.id, label: e.name })),
              [u],
            );
          return (0, l.jsx)(r.SearchableSelect, {
            options: h,
            value: null == t ? void 0 : t.id,
            onChange: (e) => {
              a(u[e]);
            },
            placeholder: c.Z.Messages.INVITE_A_GUEST_SELECT_VOICE_CHANNEL,
            renderOptionPrefix: (e) => {
              if (null == e) return null;
              let t = u[e.value];
              return null == t
                ? null
                : (0, l.jsx)(d._, { channel: t, guild: n });
            },
          });
        },
        E = (e) => {
          let {
            handleDone: n,
            headerId: t,
            inviteChannel: s,
            copyValue: a,
          } = e;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)(r.ModalHeader, {
                children: [
                  (0, l.jsx)(r.ModalCloseButton, {
                    className: h.closeButton,
                    onClick: n,
                  }),
                  (0, l.jsx)("div", {
                    className: h.headerContainer,
                    children: (0, l.jsx)(r.FormTitle, {
                      id: t,
                      tag: "h2",
                      className: i()(
                        I.marginReset,
                        h.headerCloseButtonSpacing,
                        h.headerText,
                      ),
                      children: c.Z.Messages.INVITE_A_GUEST_VOICE_ONLY,
                    }),
                  }),
                ],
              }),
              (0, l.jsx)(r.ModalContent, {
                className: h.noScroll,
                children: (0, l.jsxs)("div", {
                  className: h.guestBody,
                  children: [
                    (0, l.jsx)(r.Text, {
                      tag: "div",
                      variant: "heading-sm/normal",
                      color: "header-secondary",
                      children: c.Z.Messages.INVITE_A_GUEST_EXPLANATION,
                    }),
                    (0, l.jsx)(r.FormTitle, {
                      tag: "h5",
                      className: h.guestSelectChannelHeader,
                      children: c.Z.Messages.INVITE_A_GUEST_STEP_1,
                    }),
                    (0, l.jsx)(g, { ...e }),
                    (0, l.jsx)(r.FormTitle, {
                      tag: "h5",
                      className: h.guestSendInviteLinkHeader,
                      children: c.Z.Messages.INVITE_A_GUEST_STEP_2,
                    }),
                    (0, l.jsx)(u.I, {
                      ...e,
                      copyValue: null == s ? "" : a,
                      disabled: null == s,
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    948851: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var l = t(735250);
      t(470079);
      var s = t(120356),
        a = t.n(s),
        i = t(481060),
        r = t(971130),
        o = t(689938),
        d = t(600923),
        u = t(113207);
      let c = r.ZP.getMaxAgeOptions;
      function h(e) {
        let { temporary: n, shouldHide: t, onToggleTemporary: s } = e;
        return t
          ? (0, l.jsx)("div", { className: u.marginTop20 })
          : (0, l.jsx)(i.FormItem, {
              className: a()(u.marginTop20, d.switch),
              children: (0, l.jsx)(i.FormSwitch, {
                value: n,
                onChange: (e) => s(e),
                note: o.Z.Messages.TEMPORARY_MEMBERSHIP_EXPLANATION,
                hideBorder: !0,
                children: (0, l.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  children: o.Z.Messages.GRANT_TEMPORARY_MEMBERSHIP,
                }),
              }),
            });
      }
      let I = r.ZP.getMaxUsesOptions;
      function g(e) {
        var n;
        let {
            shouldHideTemporaryInviteToggle: t,
            maxAge: s,
            maxUses: r,
            temporary: g,
            onGenerateNewLink: E,
            onToggleTemporary: _,
            onSelectMaxAge: m,
            onSelectMaxUses: T,
          } = e,
          N = c.find((e) => e.value === s),
          v = I.find((e) => e.value === r);
        return (0, l.jsx)("div", {
          className: d.settingsContent,
          children: (0, l.jsxs)("form", {
            onSubmit: E,
            children: [
              (0, l.jsx)(i.FormItem, {
                title: o.Z.Messages.EXPIRE_AFTER,
                className: u.marginTop20,
                children: (0, l.jsx)(i.SingleSelect, {
                  value:
                    null !== (n = null == N ? void 0 : N.value) && void 0 !== n
                      ? n
                      : c[0].value,
                  options: c,
                  onChange: m,
                  maxVisibleItems: 8,
                }),
              }),
              (0, l.jsx)(i.FormItem, {
                title: o.Z.Messages.MAX_NUMBER_OF_USES,
                className: a()(u.marginTop20, u.marginBottom4),
                children: (0, l.jsx)(i.SingleSelect, {
                  value: null == v ? void 0 : v.value,
                  options: I,
                  onChange: T,
                }),
              }),
              (0, l.jsx)(h, {
                temporary: g,
                shouldHide: t,
                onToggleTemporary: _,
              }),
            ],
          }),
        });
      }
    },
    868728: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var l = t(735250),
        s = t(470079),
        a = t(780384),
        i = t(481060),
        r = t(689938);
      function o(e) {
        let { onConfirm: n, onDismiss: t, theme: o } = e;
        return (0, l.jsxs)(s.Fragment, {
          children: [
            (0, l.jsx)(i.Button, {
              onClick: n,
              children: r.Z.Messages.GENERATE_A_NEW_LINK,
            }),
            (0, l.jsx)(i.Button, {
              look: i.Button.Looks.LINK,
              color: (0, a.ap)(o)
                ? i.Button.Colors.PRIMARY
                : i.Button.Colors.WHITE,
              onClick: t,
              children: r.Z.Messages.CANCEL,
            }),
          ],
        });
      }
    },
    585385: function (e, n, t) {
      t.d(n, {
        D: function () {
          return I;
        },
      });
      var l = t(735250);
      t(470079);
      var s = t(120356),
        a = t.n(s),
        i = t(481060),
        r = t(410030),
        o = t(948851),
        d = t(868728),
        u = t(689938),
        c = t(871820),
        h = t(113207);
      let I = (e) => {
        let {
            handleDone: n,
            headerId: t,
            modalState: s,
            shouldHideTemporaryInviteToggle: I,
            onGenerateNewLink: g,
            onToggleTemporary: E,
            onSelectMaxAge: _,
            onSelectMaxUses: m,
          } = e,
          T = (0, r.ZP)(),
          { maxAge: N, maxUses: v, temporary: S } = s;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(i.ModalHeader, {
              children: [
                (0, l.jsx)(i.ModalCloseButton, {
                  className: c.closeButton,
                  onClick: n,
                }),
                (0, l.jsx)("div", {
                  className: c.headerContainer,
                  children: (0, l.jsx)(i.FormTitle, {
                    id: t,
                    tag: "h2",
                    className: a()(
                      h.marginReset,
                      c.headerCloseButtonSpacing,
                      c.headerText,
                    ),
                    children: u.Z.Messages.INVITE_SETTINGS_TITLE,
                  }),
                }),
              ],
            }),
            (0, l.jsx)(o.Z, {
              shouldHideTemporaryInviteToggle: I,
              maxAge: N,
              maxUses: v,
              temporary: S,
              onToggleTemporary: E,
              onSelectMaxAge: _,
              onSelectMaxUses: m,
              onGenerateNewLink: g,
            }),
            (0, l.jsx)(i.ModalFooter, {
              className: c.settingsFooter,
              children: (0, l.jsx)(d.Z, {
                theme: T,
                onConfirm: () => {
                  g(), n();
                },
                onDismiss: n,
              }),
            }),
          ],
        });
      };
    },
    603236: function (e, n, t) {
      t.d(n, {
        I: function () {
          return f;
        },
        S: function () {
          return C;
        },
      }),
        t(47120);
      var l = t(735250),
        s = t(470079),
        a = t(120356),
        i = t.n(a),
        r = t(533800),
        o = t(442837),
        d = t(846519),
        u = t(481060),
        c = t(914010),
        h = t(246946),
        I = t(626135),
        g = t(572004),
        E = t(630388),
        _ = t(971130),
        m = t(530436),
        T = t(245335),
        N = t(981631),
        v = t(689938),
        S = t(871820),
        p = t(803636),
        x = t(739017),
        M = t(113207);
      let C = o.ZP.connectStores([h.Z], () => ({
          hideValue: h.Z.hideInstantInvites,
        }))((e) => {
          let {
              value: n,
              autoFocus: t,
              hideValue: a,
              onCopy: r,
              disabled: o,
            } = e,
            [c, h] = s.useState(!1),
            [I, E] = s.useState(!1),
            _ = s.useMemo(() => new d.sW(1e3, () => E(!1)), [E]);
          return (
            s.useEffect(
              () => () => {
                _.cancel();
              },
              [_],
            ),
            (0, l.jsxs)("div", {
              className: i()(
                p.input,
                x.__invalid_flexJustifyBetween,
                x.flexCenter,
                { [p.success]: I, [p.focused]: c },
              ),
              children: [
                (0, l.jsx)(u.TextInput, {
                  className: S.copyInput,
                  name: "invite",
                  value: a ? v.Z.Messages.INSTANT_INVITE_HIDDEN : n,
                  editable: !1,
                  inputClassName: S.input,
                  autoFocus: t,
                  onFocus: () => (t ? h(!0) : null),
                  onBlur: () => (t ? h(!1) : null),
                  spellCheck: "false",
                  onClick: (e) => e.currentTarget.select(),
                  "aria-label": v.Z.Messages.FORM_LABEL_INVITE_LINK,
                  disabled: o,
                }),
                g.wS
                  ? (0, l.jsx)(u.Button, {
                      size: u.Button.Sizes.SMALL,
                      color: I ? u.Button.Colors.GREEN : u.Button.Colors.BRAND,
                      className: S.copyButton,
                      onClick: () => {
                        E(!0), _.delay(), r(n);
                      },
                      disabled: o,
                      children: I
                        ? v.Z.Messages.INVITE_COPIED
                        : v.Z.Messages.COPY,
                    })
                  : null,
              ],
            })
          );
        }),
        f = (e) => {
          let {
              guild: n,
              noInvitesAvailable: t,
              showFriends: a,
              onClose: o,
              modalState: d,
              isGuestInviteCreationToggleEnabled: h,
              inviteFlags: p,
              setInviteFlags: x,
              showGuestInviteToggleForCurrentVoiceChannel: f,
              copyValue: Z,
              changePage: A,
              inviteChannel: R,
              source: V,
              code: j,
              guildScheduledEvent: y,
              disabled: L,
            } = e,
            { maxAge: O, maxUses: D, networkError: G, showVanityURL: U } = d,
            b = s.useCallback(() => {
              (0, g.JG)(Z),
                I.default.track(N.rMx.COPY_INSTANT_INVITE, {
                  server: c.Z.getGuildId(),
                  channel: null == R ? void 0 : R.id,
                  channel_type: null == R ? void 0 : R.type,
                  location: V,
                  code: j,
                  guild_scheduled_event_id: null == y ? void 0 : y.id,
                });
            }, [Z, R, V, j, y]);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(C, { value: Z, autoFocus: a, onCopy: b, disabled: L }),
              h
                ? (0, l.jsx)("div", {
                    className: S.temporaryMembershipContainerBackground,
                    children: (0, l.jsx)(u.FormSwitch, {
                      className: S.temporaryMembershipContainer,
                      value: (0, E.yE)(p, r.$.IS_GUEST_INVITE),
                      onChange: (e) => x((0, E.mB)(p, r.$.IS_GUEST_INVITE, e)),
                      note: v.Z.Messages.GUEST_MEMBERSHIP_EXPLANATION,
                      disabled: L,
                      hideBorder: !0,
                      children: f
                        ? v.Z.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY
                        : v.Z.Messages.GRANT_GUEST_MEMBERSHIP,
                    }),
                  })
                : null,
              t || U
                ? null
                : (0, l.jsxs)(u.Text, {
                    variant: "text-xs/normal",
                    className: i()(M.marginTop8, S.footerText),
                    children: [
                      (0, _.Vg)(O, D),
                      " ",
                      a
                        ? (0, l.jsx)(u.Anchor, {
                            onClick: () => A(T.RV.SETTINGS),
                            children: v.Z.Messages.INVITE_EDIT_LINK,
                          })
                        : null,
                    ],
                  }),
              !t && a && U
                ? (0, l.jsxs)(u.Text, {
                    variant: "text-xs/normal",
                    className: i()(M.marginTop8, S.footerText),
                    children: [
                      v.Z.Messages.INVITE_VANITY_USED,
                      " ",
                      (0, l.jsx)(u.Anchor, {
                        onClick: () => A(T.RV.SETTINGS),
                        children: v.Z.Messages.INVITE_EDIT_LINK,
                      }),
                    ],
                  })
                : null,
              null != G
                ? (0, l.jsx)(m.W, { guild: n, error: G, onClose: o })
                : null,
            ],
          });
        };
    },
    530436: function (e, n, t) {
      t.d(n, {
        W: function () {
          return c;
        },
      });
      var l = t(735250),
        s = t(470079),
        a = t(481060),
        i = t(434404),
        r = t(496675),
        o = t(981631),
        d = t(689938),
        u = t(871820);
      function c(e) {
        let { guild: n, error: t, onClose: c } = e,
          h = n.id,
          I = s.useCallback(() => {
            c(), i.Z.open(h, o.pNK.INSTANT_INVITES);
          }, [h, c]),
          g = s.useCallback(
            (e) =>
              (0, l.jsx)(a.Clickable, {
                className: u.errorLink,
                onClick: I,
                children: (0, l.jsx)(a.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  tag: "span",
                  children: e,
                }),
              }),
            [I],
          ),
          E = s.useCallback(
            (e) =>
              (0, l.jsx)(a.Anchor, {
                href: o.EYA.INVITES_HELP,
                target: "_blank",
                children: (0, l.jsx)(a.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  tag: "span",
                  children: e,
                }),
              }),
            [],
          ),
          _ =
            t.code !== o.evJ.TOO_MANY_INVITES
              ? t.getAnyErrorMessage()
              : r.Z.can(o.Plq.MANAGE_GUILD, n)
                ? d.Z.Messages.TOO_MANY_INVITES_ERROR.format({
                    inviteListHook: g,
                    inviteHelpHook: E,
                  })
                : d.Z.Messages.TOO_MANY_INVITES_ERROR_MEMBER;
        return (0, l.jsx)(a.Text, {
          className: u.errorMessage,
          variant: "text-xs/normal",
          color: "text-danger",
          children: _,
        });
      }
    },
    462376: function (e, n, t) {
      t.d(n, {
        d: function () {
          return p;
        },
        k: function () {
          return S;
        },
      }),
        t(47120);
      var l = t(735250),
        s = t(470079),
        a = t(780384),
        i = t(481060),
        r = t(630810),
        o = t(43267),
        d = t(933557),
        u = t(210887),
        c = t(430824),
        h = t(751771),
        I = t(699516),
        g = t(594174),
        E = t(768581),
        _ = t(624138),
        m = t(51144),
        T = t(689938),
        N = t(871820);
      function v(e, n, t) {
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
      let S = 44;
      class p extends s.Component {
        shouldComponentUpdate(e, n) {
          return (
            this.state.sending !== n.sending ||
            this.state.invited !== n.invited ||
            this.state.hovered !== n.hovered ||
            this.props.user !== e.user ||
            this.props.channel !== e.channel
          );
        }
        renderUserOrChannel() {
          let e, n, t;
          let { user: s, channel: a } = this.props;
          if (null != s)
            (n = s.getAvatarURL(null == a ? void 0 : a.guild_id, 32)),
              (t = m.ZP.getName(s));
          else if (
            null != a &&
            ((n = (0, o.x)(a)),
            (t = (0, d.F6)(a, g.default, I.Z)),
            null == n && null != a.guild_id)
          ) {
            let t = c.Z.getGuild(a.guild_id);
            null != t &&
              (null != t.icon
                ? (n = E.ZP.getGuildIconURL({
                    id: a.guild_id,
                    icon: t.icon,
                    size: 32,
                  }))
                : (e = (0, _.Zg)(t.name)));
          }
          if (null == n || null == t)
            return null != e
              ? (0, l.jsx)(i.Text, {
                  variant: "text-md/medium",
                  className: N.acronym,
                  "aria-hidden": !0,
                  children: e,
                })
              : null;
          return (0, l.jsx)(i.Avatar, {
            src: n,
            "aria-label": t,
            size: i.AvatarSizes.SIZE_32,
            className: N.inviteRowAvatar,
          });
        }
        render() {
          let e;
          let { user: n, channel: t } = this.props,
            { sending: s, invited: r, hovered: o } = this.state;
          return (
            (e = r
              ? (0, l.jsx)(i.Button, {
                  look: i.Button.Looks.LINK,
                  size: i.Button.Sizes.SMALL,
                  disabled: !0,
                  color: (0, a.wj)(u.Z.theme)
                    ? i.Button.Colors.WHITE
                    : i.Button.Colors.BRAND,
                  children: T.Z.Messages.INVITE_FRIEND_MODAL_SENT,
                })
              : (0, l.jsx)(i.Button, {
                  color: i.Button.Colors.GREEN,
                  look: o ? i.Button.Looks.FILLED : i.Button.Looks.OUTLINED,
                  className: N.inviteRowButton,
                  size: i.Button.Sizes.SMALL,
                  submitting: s,
                  onClick: this.handleClickInvite,
                  children: T.Z.Messages.INVITE_FRIEND_MODAL_INVITE,
                })),
            (0, l.jsxs)("div", {
              className: N.inviteRow,
              onMouseEnter: this.handleMouseEnter,
              onMouseLeave: this.handleMouseLeave,
              children: [
                (0, l.jsxs)("div", {
                  className: N.inviteRowInfo,
                  children: [
                    this.renderUserOrChannel(),
                    (0, l.jsxs)("div", {
                      className: N.inviteRowName,
                      children: [
                        m.ZP.getName(n),
                        null != t ? (0, d.F6)(t, g.default, I.Z, !0) : null,
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
            v(this, "state", { sending: !1, invited: !1, hovered: !1 }),
            v(this, "handleMouseEnter", () => {
              this.setState({ hovered: !0 });
            }),
            v(this, "handleMouseLeave", () => {
              this.setState({ hovered: !1 });
            }),
            v(this, "getSuggestedProps", () => {
              var e;
              let { row: n } = this.props;
              return null !==
                (e = null != n ? h.Z.getSelectedInviteMetadata(n) : null) &&
                void 0 !== e
                ? e
                : null;
            }),
            v(this, "handleClickInvite", () => {
              let {
                user: e,
                channel: n,
                inviteKey: t,
                location: l,
              } = this.props;
              if (null != t)
                null != n
                  ? (this.setState({ sending: !0 }),
                    r.Z.enqueue(
                      {
                        type: r.m.GROUP_DM,
                        channel: n,
                        inviteKey: t,
                        location: l,
                        suggested: this.getSuggestedProps(),
                      },
                      (e) => {
                        this.setState({ sending: !1, invited: e });
                      },
                    ))
                  : null != e &&
                    (this.setState({ sending: !0 }),
                    r.Z.enqueue(
                      {
                        type: r.m.USER,
                        user: e,
                        inviteKey: t,
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
    751771: function (e, n, t) {
      let l, s, a, i, r, o, d;
      t(47120);
      var u,
        c,
        h,
        I,
        g = t(442837),
        E = t(570140),
        _ = t(823385),
        m = t(814443),
        T = t(823379),
        N = t(971130),
        v = t(709054),
        S = t(592125),
        p = t(496675),
        x = t(699516),
        M = t(981631),
        C = t(245335);
      let f = new Set(),
        Z = [],
        A = new Map();
      function R(e) {
        let n = new Set(),
          t = null == i || d === C.Iq.EMBEDDED_APPLICATION ? void 0 : i.id,
          l = (0, N.rh)(f, t);
        for (let e of (null != l && !x.Z.isBlocked(l.id) && n.add(l.id),
        m.Z.getUserAffinitiesUserIds()))
          n.add(e);
        let s = new Set();
        return (
          d === C.Iq.EMBEDDED_APPLICATION &&
            _.Z.getChannelHistory()
              .map((e) => S.Z.getChannel(e))
              .filter(T.lm)
              .filter((e) => e.type === M.d4z.GUILD_TEXT)
              .filter((e) => p.Z.can(M.Plq.SEND_MESSAGES, e))
              .slice(0, 3)
              .forEach((e) => s.add(e.id)),
          (0, N.an)({
            query: e,
            omitUserIds: f,
            suggestedUserIds: n,
            maxRowsWithoutQuery: 100,
            omitGuildId: t,
            suggestedChannelIds: s,
            inviteTargetType: d,
          })
        );
      }
      function V(e) {
        (Z = e),
          (A = new Map()),
          e.forEach((e, n) => {
            A.set(e, { index: n });
          });
      }
      class j extends (u = g.ZP.Store) {
        initialize() {
          this.waitFor(x.Z, m.Z);
        }
        getInviteSuggestionRows() {
          return Z;
        }
        getTotalSuggestionsCount() {
          return s;
        }
        getInitialCounts() {
          return l;
        }
        getSelectedInviteMetadata(e) {
          let n = A.get(e),
            t = m.Z.getUserAffinitiesUserIds();
          return null != n
            ? {
                rowNum: n.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: Z.length,
                numAffinityConnections: t.size,
                isFiltered: a,
              }
            : null;
        }
      }
      (I = "InviteSuggestionsStore"),
        (h = "displayName") in (c = j)
          ? Object.defineProperty(c, h, {
              value: I,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (c[h] = I),
        (n.Z = new j(E.Z, {
          LOAD_INVITE_SUGGESTIONS: function (e) {
            let {
              omitUserIds: n,
              guild: t,
              channel: u,
              applicationId: c,
              inviteTargetType: h,
            } = e;
            (i = null != u ? t : null), (r = u), (o = c), (d = h);
            let I = x.Z.getRelationships(),
              g = v.default.keys(I).filter((e) => I[e] === M.OGo.BLOCKED);
            (f = new Set([
              ...n,
              ...g,
              ...(0, N.Sz)({
                channel: r,
                applicationId: o,
                inviteTargetType: h,
              }),
            ])),
              (a = !1);
            let { rows: E, counts: _ } = R("");
            V(E), (l = _), (s = Z.length);
          },
          INVITE_SUGGESTIONS_SEARCH: function (e) {
            let { query: n } = e;
            a = "" !== n;
            let { rows: t } = R(n);
            V(t);
          },
        }));
    },
  },
]);
//# sourceMappingURL=1e487b451057a60051e2.js.map
