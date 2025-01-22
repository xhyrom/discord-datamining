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
          return r;
        },
        x: function () {
          return s;
        },
      }),
        n(47120);
      var l = n(570140),
        i = n(93127);
      function s(e) {
        let {
          omitUserIds: t,
          guild: n,
          channel: s,
          applicationId: r,
          inviteTargetType: a,
        } = e;
        return (0, i.W)().then(() => {
          l.Z.dispatch({
            type: "LOAD_INVITE_SUGGESTIONS",
            omitUserIds: null != t ? t : new Set(),
            guild: n,
            channel: s,
            applicationId: r,
            inviteTargetType: a,
          });
        });
      }
      function r(e) {
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
        s = n(493683),
        r = n(904245),
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
          r.Z.sendInvite(e.id, t, n, l).then(
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
              s.Z.ensurePrivateChannel(e.user.id).then(
                (i) => {
                  let s = o.Z.getChannel(i);
                  null != s && this._sendInvite(s, e.inviteKey, n, l, t);
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
        s = n(971130),
        r = n(956829),
        a = n(981631);
      function o(e) {
        let { guildId: t } = e,
          n = r.h.useExperiment({
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
                  : r.h.getCurrentConfig({
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
              return s.ZP.INVITE_OPTIONS_FOREVER.value;
          })({ guild: o, experimentConfig: n })
        );
      }
    },
    648159: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var l = n(192379),
        i = n(252618),
        s = n(358085),
        r = n(388032);
      function a() {
        return (
          l.useEffect(() => {
            !s.isPlatformEmbedded &&
              (0, i.EM)({
                messages: [
                  r.intl.string(r.t.KIX3cn),
                  r.intl.string(r.t["UbO+8v"]),
                  r.intl.string(r.t.MbySu7),
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
    227672: function (e, t, n) {
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
    560114: function (e, t, n) {
      n.r(t), n(789020), n(47120);
      var l,
        i = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        o = n(512722),
        d = n.n(o),
        u = n(392711),
        c = n.n(u),
        h = n(990547),
        g = n(533800),
        m = n(442837),
        v = n(902704),
        x = n(692547),
        I = n(481060),
        p = n(447543),
        S = n(247272),
        N = n(110924),
        C = n(100527),
        f = n(906732),
        E = n(835473),
        T = n(447003),
        _ = n(471445),
        j = n(259473),
        y = n(600164),
        Z = n(687516),
        A = n(648159),
        M = n(227672),
        w = n(63568),
        P = n(427679),
        b = n(199902),
        R = n(662594),
        B = n(592125),
        U = n(984933),
        L = n(341165),
        F = n(751771),
        k = n(496675),
        D = n(158776),
        V = n(944486),
        G = n(594174),
        O = n(938475),
        H = n(626135),
        K = n(630388),
        z = n(971130),
        W = n(264229),
        q = n(366980),
        Y = n(585385),
        Q = n(603236),
        $ = n(462376),
        J = n(245335),
        X = n(981631),
        ee = n(176505),
        et = n(388032),
        en = n(755527),
        el = n(232186),
        ei = n(107720),
        es = n(622577);
      function er(e, t, n) {
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
        INVITE_OPTIONS_FOREVER: ea,
        INVITE_OPTIONS_7_DAYS: eo,
        INVITE_OPTIONS_UNLIMITED: ed,
      } = z.ZP;
      class eu extends (l = s.PureComponent) {
        componentDidMount() {
          let {
              inviteChannel: e,
              code: t,
              guild: n,
              source: l,
              canCreateInvites: i,
              analyticsLocation: s,
              streamUserId: r,
              targetType: a,
              targetUserId: o,
              application: d,
              initialCounts: u,
              rows: c,
              showFriends: h,
              modalState: g,
              setModalState: m,
            } = this.props,
            { maxAge: v, maxUses: x, temporary: I, flags: S } = g;
          if (i) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            m({ networkError: void 0 }),
              p.Z.createInvite(
                n,
                {
                  validate: null != t ? t : null,
                  max_age: v,
                  max_uses: x,
                  target_user_id: o,
                  target_type: a,
                  target_application_id: null == d ? void 0 : d.id,
                  temporary: I,
                  flags: S,
                },
                l,
              ).catch((e) => m({ networkError: e }));
          }
          if (
            (h &&
              H.default.track(X.rMx.INVITE_SUGGESTION_OPENED, {
                location: l,
                num_suggestions: c.length,
                num_friends: u.numFriends,
                num_dms: u.numDms,
                num_group_dms: u.numGroupDms,
                guild_id: n.id,
                application_id: null == d ? void 0 : d.id,
              }),
            null != r)
          ) {
            let e = b.Z.getStreamForUser(r, n.id),
              t = (0, Z.L2)(e, D.Z);
            H.default.track(X.rMx.OPEN_MODAL, {
              type: "Send Stream Invite",
              source: l,
              location: s,
              other_user_id: r,
              application_id: null != t ? t.id : null,
              application_name: null != t ? t.name : null,
              game_id: null != t ? t.id : null,
            });
          } else
            (null == d ? void 0 : d.id) != null ||
              H.default.track(X.rMx.OPEN_MODAL, {
                type: "Instant Invite Modal",
                source: l,
                location: s,
              });
        }
        componentWillUnmount() {
          let { inviteChannel: e, modalState: t } = this.props;
          (0, K.yE)(t.flags, g.$.IS_GUEST_INVITE) &&
            null != e &&
            p.Z.clearInviteFromStore(e.id);
        }
        getInviteKey() {
          let {
              code: e,
              vanityURLCode: t,
              guildScheduledEvent: n,
              modalState: l,
            } = this.props,
            { showVanityURL: i } = l,
            s = i ? t : null != e ? e : t;
          return null == s
            ? s
            : (0, W.tV)({
                baseCode: s,
                guildScheduledEventId: null == n ? void 0 : n.id,
              });
        }
        renderChannelWarning() {
          let { inviteChannel: e } = this.props;
          return (0, T.Z)(e)
            ? (0, i.jsxs)("div", {
                className: en.warningContainer,
                children: [
                  (0, i.jsx)(I.CircleWarningIcon, {
                    size: "custom",
                    className: en.warningIcon,
                    color: x.Z.unsafe_rawColors.YELLOW_300.css,
                    width: 12,
                  }),
                  (0, i.jsx)(I.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: et.intl.string(et.t.x1SQZW),
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
              streamUserId: s,
              application: r,
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
              : null != s
                ? et.intl.string(et.t["6VQaqa"])
                : null != r
                  ? et.intl.formatToPlainString(et.t.ZdK3dX, {
                      applicationName: r.name,
                    })
                  : null != l
                    ? et.intl.string(et.t.JKV4FB)
                    : (null == d ? void 0 : d.isGuildStageVoice())
                      ? et.intl.string(et.t.zTrsHx)
                      : et.intl.format(et.t.NvVBJS, { name: t.toString() })),
            null != d)
          ) {
            let e = (0, _.KS)(d, t);
            null != e &&
              (m = (0, i.jsxs)("div", {
                className: en.headerChannelContainer,
                children: [
                  (0, i.jsx)(e, { className: en.channelIcon }),
                  (0, i.jsx)(I.Text, {
                    color: "interactive-normal",
                    variant: "text-md/normal",
                    children: d.name,
                  }),
                ],
              }));
          }
          return (
            (g = t.hasFeature(X.oNc.HUB)
              ? (0, i.jsxs)("div", {
                  className: en.hubHeader,
                  children: [
                    (0, i.jsx)(I.Heading, {
                      className: a()(
                        en.hubInviteTitle,
                        en.headerCloseButtonSpacing,
                      ),
                      id: this._headerId,
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children: et.intl.string(et.t.WhR38v),
                    }),
                    (0, i.jsx)(I.Text, {
                      color: "header-secondary",
                      variant: "text-md/normal",
                      children: et.intl.string(et.t.Ed4BMj),
                    }),
                    n &&
                      (0, i.jsx)(I.SearchBar, {
                        query: h,
                        className: en.hubFriendSearch,
                        onChange: this.handleQueryChange,
                        placeholder: et.intl.string(et.t.CmSHY2),
                        "aria-label": et.intl.string(et.t.CmSHY2),
                        autoFocus: !0,
                        onClear: this.handleClearSearch,
                      }),
                  ],
                })
              : n
                ? (0, i.jsxs)("div", {
                    className: en.header,
                    children: [
                      (0, i.jsx)("div", {
                        className: en.__invalid_headerTopRow,
                        children: (0, i.jsx)(I.FormTitle, {
                          id: this._headerId,
                          tag: "h2",
                          className: a()(
                            el.marginBottom4,
                            en.headerCloseButtonSpacing,
                            en.headerText,
                          ),
                          children: e,
                        }),
                      }),
                      m,
                      (0, i.jsx)(I.SearchBar, {
                        query: h,
                        className: en.searchBar,
                        onChange: this.handleQueryChange,
                        placeholder: et.intl.string(et.t.CmSHY2),
                        autoFocus: !0,
                        onClear: this.handleClearSearch,
                      }),
                      (0, i.jsx)("div", {
                        className: el.marginTop8,
                        children: this.renderChannelWarning(),
                      }),
                    ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(I.FormTitle, {
                        id: this._headerId,
                        tag: "h2",
                        className: a()(
                          el.marginReset,
                          en.headerCloseButtonSpacing,
                          en.headerText,
                        ),
                        children: e,
                      }),
                      m,
                      this.renderChannelWarning(),
                    ],
                  })),
            (0, i.jsxs)(I.ModalHeader, {
              separator: n,
              children: [
                (0, i.jsx)("div", {
                  className: en.closeButton,
                  children: (0, i.jsx)(I.ModalCloseButton, { onClick: c }),
                }),
                (0, i.jsxs)("div", {
                  className: en.headerContainer,
                  children: [
                    o &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)("img", {
                            className: en.welcomeImage,
                            src: es,
                            alt: "",
                          }),
                          (0, i.jsx)(I.Heading, {
                            variant: "heading-lg/semibold",
                            className: en.welcomeHeading,
                            children: et.intl.string(et.t.DpoBNz),
                          }),
                          (0, i.jsx)(I.Text, {
                            variant: "text-md/normal",
                            color: "text-secondary",
                            className: en.welcomeSubheading,
                            children: et.intl.string(et.t["wJ/ouL"]),
                          }),
                        ],
                      }),
                    null != s ? (0, i.jsx)(A.Z, {}) : null,
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
            ? (0, i.jsx)(I.ModalContent, {
                className: a()(en.inviteRowEmptyState),
                children: (0, i.jsx)(I.EmptyStateText, {
                  children: et.intl.string(et.t.ojoWgY),
                }),
              })
            : null == t
              ? (0, i.jsx)(I.ModalContent, {
                  className: a()(en.inviteRowEmptyState),
                  children: (0, i.jsx)(I.EmptyStateText, {
                    children: et.intl.string(et.t.hzPwGB),
                  }),
                })
              : (0, i.jsx)(I.ModalListContent, {
                  className: en.scroller,
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
            application: s,
          } = this.props;
          if (n) return this.renderFriendsBody();
          let r = (0, q.Z)(
              null !== (e = this.getInviteKey()) && void 0 !== e ? e : "",
            ),
            a = G.default.getCurrentUser();
          d()(null != a, "InstantInviteModal: user cannot be undefined");
          let o = t.isOwner(a)
            ? et.intl.string(et.t.HFbByM)
            : et.intl.string(et.t.ueBhAw);
          return (
            null != l
              ? (o = et.intl.string(et.t.CXpS1N))
              : null != s && (o = et.intl.string(et.t.ueCrHB)),
            (0, i.jsx)(I.ModalContent, {
              className: en.noScroll,
              children: (0, i.jsxs)(y.Z, {
                direction: y.Z.Direction.VERTICAL,
                className: el.marginBottom20,
                children: [
                  (0, i.jsx)(I.Text, {
                    className: en.subText,
                    variant: "text-sm/normal",
                    children: o,
                  }),
                  (0, i.jsx)(Q.I, {
                    ...this.props,
                    setInviteFlags: this.handleSetInviteFlags,
                    copyValue: r,
                  }),
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
              streamUserId: s,
              application: r,
              inviteChannel: o,
              modalState: d,
            } = this.props,
            { maxAge: u } = d,
            c = null,
            h = (0, q.Z)(
              null !== (e = this.getInviteKey()) && void 0 !== e ? e : "",
            );
          if (n) {
            let e = et.intl.string(et.t.MLkj7O);
            null != s
              ? (e = et.intl.string(et.t["1b9nen"]))
              : null != r
                ? (e = et.intl.string(et.t.iI1gMj))
                : null != l
                  ? (e = et.intl.string(et.t.KaWCyM))
                  : (null == o ? void 0 : o.isGuildStageVoice()) &&
                    (e = et.intl.string(et.t["2frWa2"])),
              (c = (0, i.jsxs)(y.Z, {
                direction: y.Z.Direction.VERTICAL,
                className: en.content,
                children: [
                  (0, i.jsx)(I.FormTitle, {
                    tag: "h5",
                    className: el.marginBottom8,
                    children: e,
                  }),
                  (0, i.jsx)(Q.I, {
                    ...this.props,
                    setInviteFlags: this.handleSetInviteFlags,
                    copyValue: h,
                  }),
                ],
              }));
          } else
            !t &&
              (c = (0, i.jsxs)(y.Z, {
                justify: y.Z.Justify.BETWEEN,
                className: el.marginTop20,
                children: [
                  (0, i.jsx)(I.Checkbox, {
                    size: 18,
                    type: I.Checkbox.Types.INVERTED,
                    value: u === ea.value,
                    onChange: this.handleToggleMaxAge,
                    children: (0, i.jsx)(I.Text, {
                      variant: "text-sm/normal",
                      children: et.intl.string(et.t.QKJru7),
                    }),
                  }),
                  (0, i.jsx)(I.Tooltip, {
                    text: et.intl.string(et.t.Yx4IiI),
                    children: (e) => {
                      let { onMouseEnter: t, onMouseLeave: n } = e;
                      return (0, i.jsx)(I.Clickable, {
                        onClick: this.openSettings,
                        onMouseEnter: t,
                        onMouseLeave: n,
                        className: ei.cursorPointer,
                        children: (0, i.jsx)(I.SettingsIcon, {
                          size: "sm",
                          color: x.Z.unsafe_rawColors.PRIMARY_400.css,
                        }),
                      });
                    },
                  }),
                ],
              }));
          return null != c
            ? (0, i.jsx)(I.ModalFooter, {
                className: a()({ [en.noPadding]: !n, [en.footer]: n }),
                children: c,
              })
            : null;
        }
        getModalContent() {
          let { modalState: e, handleDone: t } = this.props,
            { currentPage: n } = e;
          switch (n) {
            case J.RV.MAIN:
              return (0, i.jsxs)(i.Fragment, {
                children: [
                  this.renderHeader(),
                  this.renderBody(),
                  this.renderFooter(),
                ],
              });
            case J.RV.SETTINGS:
              return (0, i.jsx)(Y.D, {
                ...this.props,
                onSetInviteFlags: this.handleSetInviteFlags,
                headerId: this._headerId,
                onSelectMaxAge: this.handleSelectMaxAge,
                onSelectMaxUses: this.handleSelectMaxUses,
                onToggleTemporary: this.handleToggleTemporary,
                handleDone: t,
              });
            default:
              return null;
          }
        }
        render() {
          let { transitionState: e, inviteChannel: t, guild: n } = this.props;
          return (0, i.jsx)("div", {
            className: this.props.showFriends ? en.wrapper : void 0,
            children: (0, i.jsx)(I.ModalRoot, {
              impression: {
                impressionName: h.ImpressionNames.GUILD_INVITE,
                impressionProperties: {
                  invite_channel_id: null == t ? void 0 : t.id,
                  invite_guild_id: n.id,
                },
              },
              "aria-labelledby": this._headerId,
              transitionState: e,
              className: en.modal,
              children: this.getModalContent(),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            er(this, "_scroller", null),
            er(this, "_headerId", c().uniqueId()),
            er(this, "openSettings", () => {
              let { changePage: e } = this.props;
              e(J.RV.SETTINGS);
            }),
            er(this, "handleSelectMaxAge", (e) => {
              let { modalState: t, setModalState: n } = this.props;
              n({ maxAge: e, savedMaxAge: t.maxAge });
            }),
            er(this, "handleSelectMaxUses", (e) => {
              let { setModalState: t } = this.props;
              t({ maxUses: e });
            }),
            er(this, "handleToggleTemporary", (e) => {
              let { setModalState: t } = this.props;
              t({ temporary: e });
            }),
            er(this, "handleSetInviteFlags", (e) => {
              let { setModalState: t } = this.props;
              t({ flags: e });
            }),
            er(this, "handleQueryChange", (e) => {
              var t;
              let { setModalState: n } = this.props;
              null === (t = this._scroller) ||
                void 0 === t ||
                t.scrollTo({ to: 0 }),
                (0, S.C)(e),
                n({ query: e });
            }),
            er(this, "handleClearSearch", () => {
              this.handleQueryChange("");
            }),
            er(this, "handleToggleMaxAge", () => {
              let { modalState: e, setModalState: t } = this.props,
                { maxAge: n, savedMaxAge: l } = e;
              t({ maxAge: l, savedMaxAge: n });
            }),
            er(this, "getRowHeight", (e, t) => {
              if (e > 0) return 0;
              switch (this.props.rows[t].type) {
                case z.bm.CHANNEL:
                case z.bm.GROUP_DM:
                case z.bm.DM:
                case z.bm.FRIEND:
                  return $.k;
                default:
                  return 0;
              }
            }),
            er(this, "renderRow", (e) => {
              let { section: t, row: n } = e;
              if (t > 0) return null;
              let { analyticsLocation: l } = this.props,
                s = this.getInviteKey(),
                r = this.props.rows[n],
                a = "".concat(r.type, "-").concat(r.item.id);
              switch (r.type) {
                case z.bm.GROUP_DM:
                case z.bm.CHANNEL:
                  return (0, i.jsx)(
                    $.d,
                    { row: r, channel: r.item, inviteKey: s, location: l },
                    a,
                  );
                case z.bm.DM:
                case z.bm.FRIEND:
                  return (0, i.jsx)(
                    $.d,
                    { row: r, user: r.item, inviteKey: s, location: l },
                    a,
                  );
                default:
                  return null;
              }
            });
        }
      }
      er(eu, "defaultProps", {
        analyticsLocation: X.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
        defaultMaxAge: eo.value,
      }),
        (t.default = s.forwardRef(function (e, t) {
          var n, l;
          let {
              channel: r,
              guild: a,
              source: o,
              guildScheduledEvent: d,
              streamUserId: u,
              applicationId: c,
              transitionState: h,
              onClose: x,
              welcomeToServer: I,
              page: _,
              analyticsLocation: y,
            } = e,
            { analyticsLocations: Z } = (0, f.ZP)(C.Z.INSTANT_INVITE_MODAL),
            A = (0, m.e7)(
              [V.Z, B.Z, U.ZP],
              () => {
                if (null != r) return r;
                let e = V.Z.getChannelId(),
                  t = null == e || (0, ee.AB)(e) ? void 0 : B.Z.getChannel(e);
                return (
                  (null == t ? void 0 : t.isThread()) &&
                    (t = B.Z.getChannel(t.parent_id)),
                  null != t
                    ? t
                    : U.ZP.getDefaultChannel(
                        a.id,
                        !0,
                        X.Plq.CREATE_INSTANT_INVITE,
                      )
                );
              },
              [r, a.id],
            ),
            b = null;
          null != u
            ? (b = J.Iq.STREAM)
            : null != c && (b = J.Iq.EMBEDDED_APPLICATION);
          let D = null != r ? r.getGuildId() : null != a ? a.id : null,
            G = (0, m.e7)(
              [L.Z],
              () => {
                let e = null != A ? A.id : null;
                return null == e
                  ? null
                  : L.Z.getInvite(e, {
                      targetType: b,
                      targetUserId: u,
                      targetApplicationId: c,
                    });
              },
              [A, b, u, c],
            ),
            [H, z, W, q] = (0, m.Wu)(
              [F.Z, O.ZP],
              () => [
                F.Z.getInviteSuggestionRows(),
                F.Z.getTotalSuggestionsCount() >= 1,
                F.Z.getInitialCounts(),
                null != r && null != A
                  ? O.ZP.getVoiceStatesForChannel(A)
                  : null,
              ],
              [A, r],
            ),
            Y = (0, m.e7)(
              [R.ZP],
              () => {
                let e = null != A ? A.id : null;
                return null != D ? R.ZP.getProps(D, e) : void 0;
              },
              [A, D],
              v.Z,
            ),
            { canCreateInvites: Q, canKickMembers: $ } = (0, m.cj)(
              [k.Z],
              () => ({
                canCreateInvites:
                  null != A && k.Z.can(X.Plq.CREATE_INSTANT_INVITE, A),
                canKickMembers: k.Z.can(X.Plq.KICK_MEMBERS, a),
              }),
              [a, A],
            ),
            et = null === G || !Q,
            [en] = s.useState(() => {
              let e = new Set();
              return (
                null != u && null != q
                  ? q.forEach((t) => {
                      let { user: n } = t;
                      e.add(n.id);
                    })
                  : null != D &&
                    null != Y &&
                    b !== J.Iq.EMBEDDED_APPLICATION &&
                    Y.rows.forEach((t) => {
                      t.type === R.so.MEMBER && e.add(t.userId);
                    }),
                e
              );
            }),
            el = null == r ? void 0 : r.id,
            ei = (0, m.e7)([P.Z], () => P.Z.getStageInstanceByChannel(el), [
              el,
            ]);
          s.useEffect(() => {
            (0, S.x)({
              omitUserIds: en,
              guild: a,
              channel: r,
              applicationId: c,
              inviteTargetType: b,
            }).catch(X.VqG);
          }, [en, r, a, c, b]);
          let [es] = (0, E.Z)(null != c ? [c] : []),
            er = (0, j.Z)({ guildId: D }),
            ec = null != G ? G.code : void 0,
            eh = null == G ? void 0 : G.maxAge,
            eg = null == G ? void 0 : G.maxUses,
            em = null == G ? void 0 : G.temporary,
            ev = a.vanityURLCode,
            ex = null != ev && ev.length > 0,
            eI = !Q && !(null == A ? void 0 : A.isGuildVocal()) && ex,
            ep = (null == A ? void 0 : A.type) === X.d4z.GUILD_VOICE,
            eS =
              null !== (n = null == G ? void 0 : G.flags) && void 0 !== n
                ? n
                : 0,
            eN = (0, T.Z)(A);
          !Q &&
            (null == ei ? void 0 : ei.invite_code) != null &&
            (ec = ei.invite_code);
          let [eC, ef] = s.useState({
              query: "",
              maxAge:
                null !== (l = null != eh ? eh : er) && void 0 !== l
                  ? l
                  : eo.value,
              savedMaxAge:
                eh === ea.value ? (null != er ? er : eo.value) : ea.value,
              maxUses: null != eg && 0 !== eg ? eg : ed.value,
              temporary: null != em && em,
              networkError: void 0,
              showVanityURL: eI,
              currentPage: null != _ ? _ : J.RV.MAIN,
              lastPage: void 0,
              flags: eS,
            }),
            eE = s.useCallback((e) => {
              ef((t) => ({ ...t, ...e }));
            }, []),
            eT = s.useCallback(
              (e) => {
                eE({ currentPage: e, lastPage: eC.currentPage });
              },
              [eC.currentPage, eE],
            ),
            e_ = ep && !eI && !et && !eN,
            { enabled: ej } = M.o.useExperiment(
              { guildId: null == a ? void 0 : a.id, location: "acc417_3" },
              { autoTrackExposure: e_ },
            ),
            {
              maxAge: ey,
              maxUses: eZ,
              temporary: eA,
              savedMaxAge: eM,
              flags: ew,
            } = eC,
            eP = s.useCallback(() => {
              let { currentPage: e, lastPage: t } = eC;
              e === J.RV.SETTINGS && null != t ? eT(t) : x();
            }, [eT, eC, x]),
            eb = s.useCallback(() => {
              let e = null == A ? void 0 : A.id;
              0 === eZ && 0 === ey && !eA && eI
                ? eE({ networkError: void 0, showVanityURL: !0 })
                : Q &&
                  null != e &&
                  (eE({ networkError: void 0, showVanityURL: !1 }),
                  p.Z.createInvite(
                    e,
                    {
                      max_age: ey,
                      max_uses: eZ,
                      target_type: b,
                      target_user_id: u,
                      target_application_id: null == es ? void 0 : es.id,
                      temporary: eA,
                      flags: ew,
                    },
                    o,
                  ).catch((e) => eE({ networkError: e, showVanityURL: eI }))),
                ey !== ea.value &&
                  eM !== ea.value &&
                  eE({ savedMaxAge: ea.value });
            }, [
              eI,
              Q,
              A,
              o,
              null == es ? void 0 : es.id,
              b,
              u,
              ey,
              eZ,
              eA,
              eE,
              eM,
              ew,
            ]),
            eR = (0, N.Z)(A),
            eB = (0, N.Z)((0, K.yE)(ew, g.$.IS_APPLICATION_BYPASS)),
            eU = null != eR && eR !== A,
            eL = null != eB && eB !== (0, K.yE)(ew, g.$.IS_APPLICATION_BYPASS);
          s.useEffect(() => {
            !eI && (eU || eL) && eb();
          }, [eb, eU, eL, eI]);
          let eF =
              (0, w.jS)(a.id, "InstantInvite") &&
              a.hasFeature(X.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
            ek = eF && $ && !et;
          return (0, i.jsx)(f.Gt, {
            value: Z,
            children: (0, i.jsx)(eu, {
              ref: t,
              canCreateInvites: Q,
              noInvitesAvailable: et,
              inviteChannel: A,
              guild: a,
              guildScheduledEvent: d,
              streamUserId: u,
              vanityURLCode: ev,
              targetType: b,
              targetUserId: u,
              application: es,
              rows: H,
              showFriends: z,
              initialCounts: W,
              code: ec,
              source: o,
              welcomeToServer: I,
              analyticsLocations: Z,
              analyticsLocation: y,
              transitionState: h,
              onClose: x,
              canShowVanityURL: eI,
              isGuestInviteCreationToggleEnabled: ej && e_,
              shouldHideTemporaryInviteToggle: (ej && e_) || eF,
              modalState: eC,
              setModalState: eE,
              changePage: eT,
              onGenerateNewLink: eb,
              handleDone: eP,
              isApplicationBypassToggleEnabled: ek,
            }),
          });
        }));
    },
    948851: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var l = n(200651);
      n(192379);
      var i = n(533800),
        s = n(481060),
        r = n(630388),
        a = n(971130),
        o = n(388032),
        d = n(24182);
      let u = a.ZP.getMaxAgeOptions,
        c = a.ZP.getMaxUsesOptions;
      function h(e) {
        var t;
        let {
            shouldHideTemporaryInviteToggle: n,
            maxAge: a,
            maxUses: h,
            temporary: g,
            onGenerateNewLink: m,
            onToggleTemporary: v,
            onSelectMaxAge: x,
            onSelectMaxUses: I,
            isGuestInviteCreationToggleEnabled: p,
            inviteFlags: S,
            onSetInviteFlags: N,
          } = e,
          C = u.find((e) => e.value === a),
          f = c.find((e) => e.value === h);
        return (0, l.jsx)("div", {
          className: d.settingsContent,
          children: (0, l.jsxs)("form", {
            onSubmit: m,
            className: d.settingsForm,
            children: [
              (0, l.jsx)(s.FormItem, {
                title: o.intl.string(o.t["60qw29"]),
                children: (0, l.jsx)(s.SingleSelect, {
                  value:
                    null !== (t = null == C ? void 0 : C.value) && void 0 !== t
                      ? t
                      : u[0].value,
                  options: u,
                  onChange: x,
                  maxVisibleItems: 8,
                }),
              }),
              (0, l.jsx)(s.FormItem, {
                title: o.intl.string(o.t.jDqWHR),
                children: (0, l.jsx)(s.SingleSelect, {
                  value: null == f ? void 0 : f.value,
                  options: c,
                  onChange: I,
                }),
              }),
              !n &&
                (0, l.jsx)(s.FormItem, {
                  children: (0, l.jsx)(s.FormSwitch, {
                    className: d.switch,
                    value: g,
                    onChange: (e) => v(e),
                    note: o.intl.string(o.t.UN5IRU),
                    hideBorder: !0,
                    children: (0, l.jsx)(s.Text, {
                      variant: "text-sm/normal",
                      children: o.intl.string(o.t["wE+9dn"]),
                    }),
                  }),
                }),
              p &&
                (0, l.jsx)(s.FormItem, {
                  children: (0, l.jsx)(s.FormSwitch, {
                    className: d.switch,
                    value: (0, r.yE)(S, i.$.IS_GUEST_INVITE),
                    onChange: (e) => N((0, r.mB)(S, i.$.IS_GUEST_INVITE, e)),
                    note: o.intl.string(o.t["/FeTKy"]),
                    hideBorder: !0,
                    children: (0, l.jsx)(s.Text, {
                      variant: "text-sm/normal",
                      children: o.intl.string(o.t.siexRU),
                    }),
                  }),
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
        s = n(780384),
        r = n(481060),
        a = n(388032);
      function o(e) {
        let { onConfirm: t, onDismiss: n, theme: o } = e;
        return (0, l.jsxs)(i.Fragment, {
          children: [
            (0, l.jsx)(r.Button, {
              onClick: t,
              children: a.intl.string(a.t.pz1lRE),
            }),
            (0, l.jsx)(r.Button, {
              look: r.Button.Looks.LINK,
              color: (0, s.ap)(o)
                ? r.Button.Colors.PRIMARY
                : r.Button.Colors.WHITE,
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
      }),
        n(789020);
      var l = n(200651);
      n(192379);
      var i = n(120356),
        s = n.n(i),
        r = n(481060),
        a = n(410030),
        o = n(948851),
        d = n(868728),
        u = n(388032),
        c = n(755527),
        h = n(232186);
      let g = (e) => {
        let {
            handleDone: t,
            headerId: n,
            modalState: i,
            shouldHideTemporaryInviteToggle: g,
            onGenerateNewLink: m,
            onToggleTemporary: v,
            onSelectMaxAge: x,
            onSelectMaxUses: I,
            isGuestInviteCreationToggleEnabled: p,
            onSetInviteFlags: S,
          } = e,
          N = (0, a.ZP)(),
          { maxAge: C, maxUses: f, temporary: E, flags: T } = i;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(r.ModalHeader, {
              children: [
                (0, l.jsx)("div", {
                  className: c.closeButton,
                  children: (0, l.jsx)(r.ModalCloseButton, { onClick: t }),
                }),
                (0, l.jsx)("div", {
                  className: c.headerContainer,
                  children: (0, l.jsx)(r.FormTitle, {
                    id: n,
                    tag: "h2",
                    className: s()(
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
              maxAge: C,
              maxUses: f,
              temporary: E,
              onToggleTemporary: v,
              onSelectMaxAge: x,
              onSelectMaxUses: I,
              onGenerateNewLink: m,
              isGuestInviteCreationToggleEnabled: p,
              onSetInviteFlags: S,
              inviteFlags: T,
            }),
            (0, l.jsx)(r.ModalFooter, {
              className: c.settingsFooter,
              children: (0, l.jsx)(d.Z, {
                theme: N,
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
          return E;
        },
        S: function () {
          return f;
        },
      }),
        n(789020);
      var l = n(200651),
        i = n(192379),
        s = n(120356),
        r = n.n(s),
        a = n(533800),
        o = n(442837),
        d = n(481060),
        u = n(484614),
        c = n(914010),
        h = n(246946),
        g = n(626135),
        m = n(630388),
        v = n(971130),
        x = n(530436),
        I = n(245335),
        p = n(981631),
        S = n(388032),
        N = n(755527),
        C = n(232186);
      let f = o.ZP.connectStores([h.Z], () => ({
          hideValue: h.Z.hideInstantInvites,
        }))((e) => {
          let {
            value: t,
            autoFocus: n,
            hideValue: i,
            onCopy: s,
            disabled: r,
          } = e;
          return (0, l.jsx)(u.Z, {
            value: i ? S.intl.string(S.t["6HzNgY"]) : t,
            buttonColor: d.Button.Colors.BRAND,
            onCopy: s,
            autoFocus: n,
            disabled: r,
          });
        }),
        E = (e) => {
          let {
              guild: t,
              noInvitesAvailable: n,
              showFriends: s,
              onClose: o,
              modalState: u,
              isApplicationBypassToggleEnabled: h,
              setInviteFlags: E,
              copyValue: T,
              changePage: _,
              inviteChannel: j,
              source: y,
              code: Z,
              guildScheduledEvent: A,
              disabled: M,
              application: w,
            } = e,
            {
              maxAge: P,
              maxUses: b,
              networkError: R,
              showVanityURL: B,
              flags: U,
            } = u,
            L = i.useCallback(() => {
              g.default.track(p.rMx.COPY_INSTANT_INVITE, {
                server: c.Z.getGuildId(),
                channel: null == j ? void 0 : j.id,
                channel_type: null == j ? void 0 : j.type,
                location: y,
                code: Z,
                guild_scheduled_event_id: null == A ? void 0 : A.id,
                application_id: null == w ? void 0 : w.id,
              });
            }, [null == w ? void 0 : w.id, j, y, Z, A]);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(f, { value: T, autoFocus: s, onCopy: L, disabled: M }),
              h &&
                (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)("div", { className: N.divider }),
                    (0, l.jsx)(d.FormSwitch, {
                      className: N.toggle,
                      value: (0, m.yE)(U, a.$.IS_APPLICATION_BYPASS),
                      onChange: (e) =>
                        E((0, m.mB)(U, a.$.IS_APPLICATION_BYPASS, e)),
                      disabled: M,
                      hideBorder: !0,
                      children: (0, l.jsxs)("div", {
                        className: N.formText,
                        children: [
                          (0, l.jsx)(d.Text, {
                            variant: "text-md/semibold",
                            children: S.intl.string(S.t["1i1bUl"]),
                          }),
                          (0, l.jsx)(d.Tooltip, {
                            text: S.intl.string(S.t["jvd/LC"]),
                            children: (e) =>
                              (0, l.jsx)(d.CircleInformationIcon, {
                                size: "xs",
                                color: "currentColor",
                                ...e,
                              }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              n || B
                ? null
                : (0, l.jsxs)(d.Text, {
                    variant: "text-xs/normal",
                    className: r()(C.marginTop8, N.footerText),
                    children: [
                      (0, v.Vg)(P, b),
                      " ",
                      s
                        ? (0, l.jsx)(d.Anchor, {
                            onClick: () => _(I.RV.SETTINGS),
                            children: S.intl.string(S.t.VNe8Pz),
                          })
                        : null,
                    ],
                  }),
              !n && s && B
                ? (0, l.jsxs)(d.Text, {
                    variant: "text-xs/normal",
                    className: r()(C.marginTop8, N.footerText),
                    children: [S.intl.string(S.t["0M2U9/"]), " "],
                  })
                : null,
              null != R
                ? (0, l.jsx)(x.W, { guild: t, error: R, onClose: o })
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
        s = n(481060),
        r = n(434404),
        a = n(496675),
        o = n(981631),
        d = n(388032),
        u = n(755527);
      function c(e) {
        let { guild: t, error: n, onClose: c } = e,
          h = t.id,
          g = i.useCallback(() => {
            c(), r.Z.open(h, o.pNK.INSTANT_INVITES);
          }, [h, c]),
          m = i.useCallback(
            (e) =>
              (0, l.jsx)(s.Clickable, {
                className: u.errorLink,
                onClick: g,
                children: (0, l.jsx)(s.Text, {
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
              (0, l.jsx)(s.Anchor, {
                href: o.EYA.INVITES_HELP,
                target: "_blank",
                children: (0, l.jsx)(s.Text, {
                  variant: "text-xs/normal",
                  color: "text-link",
                  tag: "span",
                  children: e,
                }),
              }),
            [],
          ),
          x =
            n.code !== o.evJ.TOO_MANY_INVITES
              ? n.getAnyErrorMessage()
              : a.Z.can(o.Plq.MANAGE_GUILD, t)
                ? d.intl.format(d.t["H/RUY2"], {
                    inviteListHook: m,
                    inviteHelpHook: v,
                  })
                : d.intl.string(d.t["/FxH6O"]);
        return (0, l.jsx)(s.Text, {
          className: u.errorMessage,
          variant: "text-xs/normal",
          color: "text-danger",
          children: x,
        });
      }
    },
    462376: function (e, t, n) {
      n.d(t, {
        d: function () {
          return f;
        },
        k: function () {
          return C;
        },
      }),
        n(47120);
      var l = n(200651),
        i = n(192379),
        s = n(780384),
        r = n(481060),
        a = n(630810),
        o = n(43267),
        d = n(933557),
        u = n(210887),
        c = n(430824),
        h = n(751771),
        g = n(699516),
        m = n(594174),
        v = n(768581),
        x = n(624138),
        I = n(51144),
        p = n(388032),
        S = n(755527);
      function N(e, t, n) {
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
      let C = 44;
      class f extends i.Component {
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
          let { user: i, channel: s } = this.props;
          if (null != i)
            (t = i.getAvatarURL(null == s ? void 0 : s.guild_id, 32)),
              (n = I.ZP.getName(i));
          else if (
            null != s &&
            ((t = (0, o.x)(s)),
            (n = (0, d.F6)(s, m.default, g.Z)),
            null == t && null != s.guild_id)
          ) {
            let n = c.Z.getGuild(s.guild_id);
            null != n &&
              (null != n.icon
                ? (t = v.ZP.getGuildIconURL({
                    id: s.guild_id,
                    icon: n.icon,
                    size: 32,
                  }))
                : (e = (0, x.Zg)(n.name)));
          }
          if (null == t || null == n)
            return null != e
              ? (0, l.jsx)(r.Text, {
                  variant: "text-md/medium",
                  className: S.acronym,
                  "aria-hidden": !0,
                  children: e,
                })
              : null;
          return (0, l.jsx)(r.Avatar, {
            src: t,
            "aria-label": n,
            size: r.AvatarSizes.SIZE_32,
            className: S.inviteRowAvatar,
          });
        }
        render() {
          let e;
          let { user: t, channel: n } = this.props,
            { sending: i, invited: a, hovered: o } = this.state;
          return (
            (e = a
              ? (0, l.jsx)(r.Button, {
                  look: r.Button.Looks.LINK,
                  size: r.Button.Sizes.SMALL,
                  disabled: !0,
                  color: (0, s.wj)(u.Z.theme)
                    ? r.Button.Colors.WHITE
                    : r.Button.Colors.BRAND,
                  children: p.intl.string(p.t["dVT14+"]),
                })
              : (0, l.jsx)(r.Button, {
                  color: r.Button.Colors.GREEN,
                  look: o ? r.Button.Looks.FILLED : r.Button.Looks.OUTLINED,
                  className: S.inviteRowButton,
                  size: r.Button.Sizes.SMALL,
                  submitting: i,
                  onClick: this.handleClickInvite,
                  children: p.intl.string(p.t.jYnGPD),
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
                        I.ZP.getName(t),
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
            N(this, "state", { sending: !1, invited: !1, hovered: !1 }),
            N(this, "handleMouseEnter", () => {
              this.setState({ hovered: !0 });
            }),
            N(this, "handleMouseLeave", () => {
              this.setState({ hovered: !1 });
            }),
            N(this, "getSuggestedProps", () => {
              var e;
              let { row: t } = this.props;
              return null !==
                (e = null != t ? h.Z.getSelectedInviteMetadata(t) : null) &&
                void 0 !== e
                ? e
                : null;
            }),
            N(this, "handleClickInvite", () => {
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
      let l, i, s, r, a, o, d;
      n(47120);
      var u,
        c,
        h,
        g,
        m = n(442837),
        v = n(570140),
        x = n(823385),
        I = n(814443),
        p = n(823379),
        S = n(971130),
        N = n(592125),
        C = n(496675),
        f = n(699516),
        E = n(981631),
        T = n(245335);
      let _ = new Set(),
        j = [],
        y = new Map();
      function Z(e) {
        let t = new Set(),
          n = null == r || d === T.Iq.EMBEDDED_APPLICATION ? void 0 : r.id,
          l = (0, S.rh)(_, n);
        for (let e of (null != l && !f.Z.isBlocked(l.id) && t.add(l.id),
        I.Z.getUserAffinitiesUserIds()))
          t.add(e);
        let i = new Set();
        return (
          d === T.Iq.EMBEDDED_APPLICATION &&
            x.Z.getChannelHistory()
              .map((e) => N.Z.getChannel(e))
              .filter(p.lm)
              .filter((e) => e.type === E.d4z.GUILD_TEXT)
              .filter((e) => C.Z.can(E.Plq.SEND_MESSAGES, e))
              .slice(0, 3)
              .forEach((e) => i.add(e.id)),
          (0, S.an)({
            query: e,
            omitUserIds: _,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: n,
            suggestedChannelIds: i,
            inviteTargetType: d,
          })
        );
      }
      function A(e) {
        (j = e),
          (y = new Map()),
          e.forEach((e, t) => {
            y.set(e, { index: t });
          });
      }
      class M extends (u = m.ZP.Store) {
        initialize() {
          this.waitFor(f.Z, I.Z);
        }
        getInviteSuggestionRows() {
          return j;
        }
        getTotalSuggestionsCount() {
          return i;
        }
        getInitialCounts() {
          return l;
        }
        getSelectedInviteMetadata(e) {
          let t = y.get(e),
            n = I.Z.getUserAffinitiesUserIds();
          return null != t
            ? {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: j.length,
                numAffinityConnections: n.size,
                isFiltered: s,
              }
            : null;
        }
      }
      (g = "InviteSuggestionsStore"),
        (h = "displayName") in (c = M)
          ? Object.defineProperty(c, h, {
              value: g,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (c[h] = g),
        (t.Z = new M(v.Z, {
          LOAD_INVITE_SUGGESTIONS: function (e) {
            let {
              omitUserIds: t,
              guild: n,
              channel: u,
              applicationId: c,
              inviteTargetType: h,
            } = e;
            (r = null != u ? n : null), (a = u), (o = c), (d = h);
            let g = f.Z.getBlockedOrIgnoredIDs();
            (_ = new Set([
              ...t,
              ...g,
              ...(0, S.Sz)({
                channel: a,
                applicationId: o,
                inviteTargetType: h,
              }),
            ])),
              (s = !1);
            let { rows: m, counts: v } = Z("");
            A(m), (l = v), (i = j.length);
          },
          INVITE_SUGGESTIONS_SEARCH: function (e) {
            let { query: t } = e;
            s = "" !== t;
            let { rows: n } = Z(t);
            A(n);
          },
        }));
    },
  },
]);
//# sourceMappingURL=32f3f86a4a8f983c2ec3.js.map
