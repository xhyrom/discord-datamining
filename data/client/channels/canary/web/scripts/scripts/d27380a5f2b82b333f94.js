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
    648159: function (e, t, n) {
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
        v = n(902704),
        p = n(692547),
        x = n(481060),
        I = n(447543),
        S = n(247272),
        T = n(110924),
        N = n(100527),
        C = n(906732),
        f = n(835473),
        E = n(447003),
        _ = n(471445),
        j = n(259473),
        Z = n(600164),
        y = n(687516),
        M = n(648159),
        w = n(227672),
        b = n(397195),
        U = n(427679),
        A = n(199902),
        R = n(662594),
        B = n(592125),
        P = n(984933),
        V = n(341165),
        G = n(751771),
        L = n(496675),
        k = n(158776),
        D = n(944486),
        F = n(594174),
        O = n(938475),
        H = n(626135),
        q = n(630388),
        W = n(971130),
        z = n(264229),
        K = n(366980),
        Y = n(444260),
        Q = n(585385),
        $ = n(603236),
        J = n(462376),
        X = n(245335),
        ee = n(981631),
        et = n(176505),
        en = n(388032),
        el = n(546820),
        ei = n(275477),
        er = n(642291),
        es = n(622577);
      function ea(e, t, n) {
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
        INVITE_OPTIONS_FOREVER: eo,
        INVITE_OPTIONS_7_DAYS: ed,
        INVITE_OPTIONS_UNLIMITED: eu,
      } = W.ZP;
      class ec extends (l = r.PureComponent) {
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
            { maxAge: v, maxUses: p, temporary: x } = g;
          if (i) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            m({ networkError: void 0 }),
              I.Z.createInvite(
                n,
                {
                  validate: null != t ? t : null,
                  max_age: v,
                  max_uses: p,
                  target_user_id: o,
                  target_type: a,
                  target_application_id: null == d ? void 0 : d.id,
                  temporary: x,
                },
                l,
              ).catch((e) => m({ networkError: e }));
          }
          if (
            (h &&
              H.default.track(ee.rMx.INVITE_SUGGESTION_OPENED, {
                location: l,
                num_suggestions: c.length,
                num_friends: u.numFriends,
                num_dms: u.numDms,
                num_group_dms: u.numGroupDms,
                guild_id: n.id,
                application_id: null == d ? void 0 : d.id,
              }),
            null != s)
          ) {
            let e = A.Z.getStreamForUser(s, n.id),
              t = (0, y.L2)(e, k.Z);
            H.default.track(ee.rMx.OPEN_MODAL, {
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
              H.default.track(ee.rMx.OPEN_MODAL, {
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
          (0, q.yE)(t, g.$.IS_GUEST_INVITE) &&
            null != e &&
            (n((0, q.Ge)(t, g.$.IS_GUEST_INVITE)),
            I.Z.clearInviteFromStore(e.id));
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
            : (0, z.tV)({
                baseCode: r,
                guildScheduledEventId: null == n ? void 0 : n.id,
              });
        }
        renderChannelWarning() {
          let { inviteChannel: e } = this.props;
          return (0, E.Z)(e)
            ? (0, i.jsxs)("div", {
                className: el.warningContainer,
                children: [
                  (0, i.jsx)(x.CircleWarningIcon, {
                    size: "custom",
                    className: el.warningIcon,
                    color: p.Z.unsafe_rawColors.YELLOW_300.css,
                    width: 12,
                  }),
                  (0, i.jsx)(x.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: en.intl.string(en.t.x1SQZW),
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
                ? en.intl.string(en.t["6VQaqa"])
                : null != s
                  ? en.intl.formatToPlainString(en.t.ZdK3dX, {
                      applicationName: s.name,
                    })
                  : null != l
                    ? en.intl.string(en.t.JKV4FB)
                    : (null == d ? void 0 : d.isGuildStageVoice())
                      ? en.intl.string(en.t.zTrsHx)
                      : en.intl.format(en.t.NvVBJS, { name: t.toString() })),
            null != d)
          ) {
            let e = (0, _.KS)(d, t);
            null != e &&
              (m = (0, i.jsxs)("div", {
                className: el.headerChannelContainer,
                children: [
                  (0, i.jsx)(e, { className: el.channelIcon }),
                  (0, i.jsx)(x.Text, {
                    color: "interactive-normal",
                    variant: "text-md/normal",
                    children: d.name,
                  }),
                ],
              }));
          }
          return (
            (g = t.hasFeature(ee.oNc.HUB)
              ? (0, i.jsxs)("div", {
                  className: el.hubHeader,
                  children: [
                    (0, i.jsx)(x.Heading, {
                      className: a()(
                        el.hubInviteTitle,
                        el.headerCloseButtonSpacing,
                      ),
                      id: this._headerId,
                      variant: "heading-xl/semibold",
                      color: "header-primary",
                      children: en.intl.string(en.t.WhR38v),
                    }),
                    (0, i.jsx)(x.Text, {
                      color: "header-secondary",
                      variant: "text-md/normal",
                      children: en.intl.string(en.t.Ed4BMj),
                    }),
                    n &&
                      (0, i.jsx)(x.SearchBar, {
                        query: h,
                        className: el.hubFriendSearch,
                        onChange: this.handleQueryChange,
                        placeholder: en.intl.string(en.t.CmSHY2),
                        "aria-label": en.intl.string(en.t.CmSHY2),
                        autoFocus: !0,
                        onClear: this.handleClearSearch,
                      }),
                  ],
                })
              : n
                ? (0, i.jsxs)("div", {
                    className: el.header,
                    children: [
                      (0, i.jsx)("div", {
                        className: el.__invalid_headerTopRow,
                        children: (0, i.jsx)(x.FormTitle, {
                          id: this._headerId,
                          tag: "h2",
                          className: a()(
                            ei.marginBottom4,
                            el.headerCloseButtonSpacing,
                            el.headerText,
                          ),
                          children: e,
                        }),
                      }),
                      m,
                      (0, i.jsx)(x.SearchBar, {
                        query: h,
                        className: el.searchBar,
                        onChange: this.handleQueryChange,
                        placeholder: en.intl.string(en.t.CmSHY2),
                        autoFocus: !0,
                        onClear: this.handleClearSearch,
                      }),
                      (0, i.jsx)("div", {
                        className: ei.marginTop8,
                        children: this.renderChannelWarning(),
                      }),
                    ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(x.FormTitle, {
                        id: this._headerId,
                        tag: "h2",
                        className: a()(
                          ei.marginReset,
                          el.headerCloseButtonSpacing,
                          el.headerText,
                        ),
                        children: e,
                      }),
                      m,
                      this.renderChannelWarning(),
                    ],
                  })),
            (0, i.jsxs)(x.ModalHeader, {
              separator: n,
              children: [
                (0, i.jsx)("div", {
                  className: el.closeButton,
                  children: (0, i.jsx)(x.ModalCloseButton, { onClick: c }),
                }),
                (0, i.jsxs)("div", {
                  className: el.headerContainer,
                  children: [
                    o &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)("img", {
                            className: el.welcomeImage,
                            src: es,
                            alt: "",
                          }),
                          (0, i.jsx)(x.Heading, {
                            variant: "heading-lg/semibold",
                            className: el.welcomeHeading,
                            children: en.intl.string(en.t.DpoBNz),
                          }),
                          (0, i.jsx)(x.Text, {
                            variant: "text-md/normal",
                            color: "text-secondary",
                            className: el.welcomeSubheading,
                            children: en.intl.string(en.t["wJ/ouL"]),
                          }),
                        ],
                      }),
                    null != r ? (0, i.jsx)(M.Z, {}) : null,
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
            ? (0, i.jsx)(x.ModalContent, {
                className: a()(el.inviteRowEmptyState),
                children: (0, i.jsx)(x.EmptyStateText, {
                  children: en.intl.string(en.t.ojoWgY),
                }),
              })
            : null == t
              ? (0, i.jsx)(x.ModalContent, {
                  className: a()(el.inviteRowEmptyState),
                  children: (0, i.jsx)(x.EmptyStateText, {
                    children: en.intl.string(en.t.hzPwGB),
                  }),
                })
              : (0, i.jsx)(x.ModalListContent, {
                  className: el.scroller,
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
          let s = (0, K.Z)(
              null !== (e = this.getInviteKey()) && void 0 !== e ? e : "",
            ),
            a = F.default.getCurrentUser();
          d()(null != a, "InstantInviteModal: user cannot be undefined");
          let o = t.isOwner(a)
            ? en.intl.string(en.t.HFbByM)
            : en.intl.string(en.t.ueBhAw);
          return (
            null != l
              ? (o = en.intl.string(en.t.CXpS1N))
              : null != r && (o = en.intl.string(en.t.ueCrHB)),
            (0, i.jsx)(x.ModalContent, {
              className: el.noScroll,
              children: (0, i.jsxs)(Z.Z, {
                direction: Z.Z.Direction.VERTICAL,
                className: ei.marginBottom20,
                children: [
                  (0, i.jsx)(x.Text, {
                    className: el.subText,
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
            h = (0, K.Z)(
              null !== (e = this.getInviteKey()) && void 0 !== e ? e : "",
            );
          if (n) {
            let e = en.intl.string(en.t.MLkj7O);
            null != r
              ? (e = en.intl.string(en.t["1b9nen"]))
              : null != s
                ? (e = en.intl.string(en.t.iI1gMj))
                : null != l
                  ? (e = en.intl.string(en.t.KaWCyM))
                  : (null == o ? void 0 : o.isGuildStageVoice()) &&
                    (e = en.intl.string(en.t["2frWa2"])),
              (c = (0, i.jsxs)(Z.Z, {
                direction: Z.Z.Direction.VERTICAL,
                className: el.content,
                children: [
                  (0, i.jsx)(x.FormTitle, {
                    tag: "h5",
                    className: ei.marginBottom8,
                    children: e,
                  }),
                  (0, i.jsx)($.I, { ...this.props, copyValue: h }),
                ],
              }));
          } else
            !t &&
              (c = (0, i.jsxs)(Z.Z, {
                justify: Z.Z.Justify.BETWEEN,
                className: ei.marginTop20,
                children: [
                  (0, i.jsx)(x.Checkbox, {
                    size: 18,
                    type: x.Checkbox.Types.INVERTED,
                    value: u === eo.value,
                    onChange: this.handleToggleMaxAge,
                    children: (0, i.jsx)(x.Text, {
                      variant: "text-sm/normal",
                      children: en.intl.string(en.t.QKJru7),
                    }),
                  }),
                  (0, i.jsx)(x.Tooltip, {
                    text: en.intl.string(en.t.Yx4IiI),
                    children: (e) => {
                      let { onMouseEnter: t, onMouseLeave: n } = e;
                      return (0, i.jsx)(x.Clickable, {
                        onClick: this.openSettings,
                        onMouseEnter: t,
                        onMouseLeave: n,
                        className: er.cursorPointer,
                        children: (0, i.jsx)(x.SettingsIcon, {
                          size: "sm",
                          color: p.Z.unsafe_rawColors.PRIMARY_400.css,
                        }),
                      });
                    },
                  }),
                ],
              }));
          return null != c
            ? (0, i.jsx)(x.ModalFooter, {
                className: a()({ [el.noPadding]: !n, [el.footer]: n }),
                children: c,
              })
            : null;
        }
        getModalContent() {
          let { modalState: e, handleDone: t } = this.props,
            { currentPage: n } = e;
          switch (n) {
            case X.RV.MAIN:
              return (0, i.jsxs)(i.Fragment, {
                children: [
                  this.renderHeader(),
                  this.renderBody(),
                  this.renderFooter(),
                ],
              });
            case X.RV.SETTINGS:
              return (0, i.jsx)(Q.D, {
                ...this.props,
                headerId: this._headerId,
                onSelectMaxAge: this.handleSelectMaxAge,
                onSelectMaxUses: this.handleSelectMaxUses,
                onToggleTemporary: this.handleToggleTemporary,
                handleDone: t,
              });
            case X.RV.GUEST:
              var l;
              let r = (0, K.Z)(
                null !== (l = this.getInviteKey()) && void 0 !== l ? l : "",
              );
              return (0, i.jsx)(Y.B, {
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
            className: this.props.showFriends ? el.wrapper : void 0,
            children: (0, i.jsx)(x.ModalRoot, {
              impression: {
                impressionName: h.ImpressionNames.GUILD_INVITE,
                impressionProperties: {
                  invite_channel_id: null == t ? void 0 : t.id,
                  invite_guild_id: n.id,
                },
              },
              "aria-labelledby": this._headerId,
              transitionState: e,
              className: el.modal,
              children: this.getModalContent(),
            }),
          });
        }
        constructor(...e) {
          super(...e),
            ea(this, "_scroller", null),
            ea(this, "_headerId", c().uniqueId()),
            ea(this, "openSettings", () => {
              let { changePage: e } = this.props;
              e(X.RV.SETTINGS);
            }),
            ea(this, "handleSelectMaxAge", (e) => {
              let { modalState: t, setModalState: n } = this.props;
              n({ maxAge: e, savedMaxAge: t.maxAge });
            }),
            ea(this, "handleSelectMaxUses", (e) => {
              let { setModalState: t } = this.props;
              t({ maxUses: e });
            }),
            ea(this, "handleToggleTemporary", (e) => {
              let { setModalState: t } = this.props;
              t({ temporary: e });
            }),
            ea(this, "handleToggleGuest", (e) => {
              let { inviteFlags: t, setInviteFlags: n } = this.props;
              n((0, q.mB)(t, g.$.IS_GUEST_INVITE, e));
            }),
            ea(this, "handleQueryChange", (e) => {
              var t;
              let { setModalState: n } = this.props;
              null === (t = this._scroller) ||
                void 0 === t ||
                t.scrollTo({ to: 0 }),
                (0, S.C)(e),
                n({ query: e });
            }),
            ea(this, "handleClearSearch", () => {
              this.handleQueryChange("");
            }),
            ea(this, "handleToggleMaxAge", () => {
              let { modalState: e, setModalState: t } = this.props,
                { maxAge: n, savedMaxAge: l } = e;
              t({ maxAge: l, savedMaxAge: n });
            }),
            ea(this, "getRowHeight", (e, t) => {
              if (e > 0) return 0;
              switch (this.props.rows[t].type) {
                case W.bm.CHANNEL:
                case W.bm.GROUP_DM:
                case W.bm.DM:
                case W.bm.FRIEND:
                  return J.k;
                default:
                  return 0;
              }
            }),
            ea(this, "renderRow", (e) => {
              let { section: t, row: n } = e;
              if (t > 0) return null;
              let { analyticsLocation: l } = this.props,
                r = this.getInviteKey(),
                s = this.props.rows[n],
                a = "".concat(s.type, "-").concat(s.item.id);
              switch (s.type) {
                case W.bm.GROUP_DM:
                case W.bm.CHANNEL:
                  return (0, i.jsx)(
                    J.d,
                    { row: s, channel: s.item, inviteKey: r, location: l },
                    a,
                  );
                case W.bm.DM:
                case W.bm.FRIEND:
                  return (0, i.jsx)(
                    J.d,
                    { row: s, user: s.item, inviteKey: r, location: l },
                    a,
                  );
                default:
                  return null;
              }
            });
        }
      }
      ea(ec, "defaultProps", {
        analyticsLocation: ee.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
        defaultMaxAge: ed.value,
      }),
        (t.default = r.forwardRef(function (e, t) {
          var n;
          let {
              channel: l,
              guild: s,
              source: a,
              guildScheduledEvent: o,
              streamUserId: d,
              applicationId: u,
              transitionState: c,
              onClose: h,
              welcomeToServer: p,
              page: x,
              analyticsLocation: _,
            } = e,
            [Z, y] = r.useState(x === X.RV.GUEST ? g.$.IS_GUEST_INVITE : 0),
            { analyticsLocations: M } = (0, C.ZP)(N.Z.INSTANT_INVITE_MODAL),
            A = (0, m.e7)([B.Z, D.Z], () => {
              let e = D.Z.getVoiceChannelId();
              if (null == e) return null;
              let t = B.Z.getChannel(e);
              return (null == t ? void 0 : t.guild_id) === s.id ? t : null;
            }),
            k =
              null != A &&
              !(0, E.Z)(A) &&
              [ee.t4x.GUILD_CONTEXT_MENU, ee.t4x.GUILD_HEADER].includes(a),
            F = (0, b.Z)(s.id),
            H = (0, m.e7)(
              [D.Z, B.Z, P.ZP],
              () => {
                if (
                  k &&
                  ((0, q.yE)(Z, g.$.IS_GUEST_INVITE) || x === X.RV.GUEST)
                )
                  return A;
                if (x === X.RV.GUEST) return 1 === F.length ? F[0] : void 0;
                if (null != l) return l;
                let e = D.Z.getChannelId(),
                  t = null == e || (0, et.AB)(e) ? void 0 : B.Z.getChannel(e);
                return (
                  (null == t ? void 0 : t.isThread()) &&
                    (t = B.Z.getChannel(t.parent_id)),
                  null != t
                    ? t
                    : P.ZP.getDefaultChannel(
                        s.id,
                        !0,
                        ee.Plq.CREATE_INSTANT_INVITE,
                      )
                );
              },
              [k, Z, x, l, s.id, A, F],
            ),
            [W, z] = r.useState(null),
            K = null != W ? W : H,
            Y = null;
          null != d
            ? (Y = X.Iq.STREAM)
            : null != u && (Y = X.Iq.EMBEDDED_APPLICATION);
          let Q = null != l ? l.getGuildId() : null != s ? s.id : null,
            $ = (0, m.e7)(
              [V.Z],
              () => {
                let e = null != K ? K.id : null;
                return null == e
                  ? null
                  : V.Z.getInvite(e, {
                      targetType: Y,
                      targetUserId: d,
                      targetApplicationId: u,
                    });
              },
              [K, Y, d, u],
            ),
            [J, en, el, ei] = (0, m.Wu)(
              [G.Z, O.ZP],
              () => [
                G.Z.getInviteSuggestionRows(),
                G.Z.getTotalSuggestionsCount() >= 1,
                G.Z.getInitialCounts(),
                null != l && null != K
                  ? O.ZP.getVoiceStatesForChannel(K)
                  : null,
              ],
              [K, l],
            ),
            er = (0, m.e7)(
              [R.ZP],
              () => {
                let e = null != K ? K.id : null;
                return null != Q ? R.ZP.getProps(Q, e) : void 0;
              },
              [K, Q],
              v.Z,
            ),
            es = (0, m.e7)(
              [L.Z],
              () => null != K && L.Z.can(ee.Plq.CREATE_INSTANT_INVITE, K),
              [K],
            ),
            ea = null === $ || !es,
            [eh] = r.useState(() => {
              let e = new Set();
              return (
                null != d && null != ei
                  ? ei.forEach((t) => {
                      let { user: n } = t;
                      e.add(n.id);
                    })
                  : null != Q &&
                    null != er &&
                    Y !== X.Iq.EMBEDDED_APPLICATION &&
                    er.rows.forEach((t) => {
                      t.type === R.so.MEMBER && e.add(t.userId);
                    }),
                e
              );
            }),
            eg = null == l ? void 0 : l.id,
            em = (0, m.e7)([U.Z], () => U.Z.getStageInstanceByChannel(eg), [
              eg,
            ]);
          r.useEffect(() => {
            (0, S.x)({
              omitUserIds: eh,
              guild: s,
              channel: l,
              applicationId: u,
              inviteTargetType: Y,
            }).catch(ee.VqG);
          }, [eh, l, s, u, Y]);
          let [ev] = (0, f.Z)(null != u ? [u] : []),
            ep = (0, j.Z)({ guildId: Q }),
            ex = null != $ ? $.code : void 0,
            eI = null == $ ? void 0 : $.maxAge,
            eS = null == $ ? void 0 : $.maxUses,
            eT = null == $ ? void 0 : $.temporary,
            eN = s.vanityURLCode,
            eC = null != eN && eN.length > 0,
            ef = !es && !(null == K ? void 0 : K.isGuildVocal()) && eC,
            eE = (null == K ? void 0 : K.type) === ee.d4z.GUILD_VOICE,
            e_ = (0, E.Z)(K);
          !es &&
            (null == em ? void 0 : em.invite_code) != null &&
            (ex = em.invite_code);
          let [ej, eZ] = r.useState({
              query: "",
              maxAge:
                null !== (n = null != eI ? eI : ep) && void 0 !== n
                  ? n
                  : ed.value,
              savedMaxAge:
                eI === eo.value ? (null != ep ? ep : ed.value) : eo.value,
              maxUses: null != eS && 0 !== eS ? eS : eu.value,
              temporary: null != eT && eT,
              networkError: void 0,
              showVanityURL: ef,
              currentPage: null != x ? x : X.RV.MAIN,
              lastPage: void 0,
            }),
            ey = r.useCallback((e) => {
              eZ((t) => ({ ...t, ...e }));
            }, []),
            eM = r.useCallback(
              (e) => {
                ey({ currentPage: e, lastPage: ej.currentPage });
              },
              [ej.currentPage, ey],
            ),
            ew = (eE || k) && x !== X.RV.GUEST && !ef && !ea && !e_,
            { enabled: eb } = w.o.useExperiment(
              { guildId: null == s ? void 0 : s.id, location: "acc417_3" },
              { autoTrackExposure: ew },
            ),
            { maxAge: eU, maxUses: eA, temporary: eR, savedMaxAge: eB } = ej,
            eP = r.useCallback(() => {
              let { currentPage: e, lastPage: t } = ej;
              e === X.RV.SETTINGS && null != t ? eM(t) : h();
            }, [eM, ej, h]),
            eV = r.useCallback(() => {
              let e = null == K ? void 0 : K.id;
              0 === eA && 0 === eU && !eR && ef
                ? ey({ networkError: void 0, showVanityURL: !0 })
                : es &&
                  null != e &&
                  (ey({ networkError: void 0, showVanityURL: !1 }),
                  I.Z.createInvite(
                    e,
                    {
                      max_age: eU,
                      max_uses: eA,
                      target_type: Y,
                      target_user_id: d,
                      target_application_id: null == ev ? void 0 : ev.id,
                      temporary: eR,
                      flags: Z,
                    },
                    a,
                  ).catch((e) => ey({ networkError: e, showVanityURL: ef }))),
                eU !== eo.value &&
                  eB !== eo.value &&
                  ey({ savedMaxAge: eo.value });
            }, [
              ef,
              es,
              K,
              a,
              null == ev ? void 0 : ev.id,
              Y,
              d,
              eU,
              eA,
              eR,
              Z,
              ey,
              eB,
            ]),
            eG = (0, T.Z)(K),
            eL = (0, T.Z)(Z),
            ek = eG !== K,
            eD = eL !== Z;
          return (
            r.useEffect(() => {
              !ef && (ek || eD) && eV();
            }, [eV, ek, eD, ef]),
            (0, i.jsx)(C.Gt, {
              value: M,
              children: (0, i.jsx)(ec, {
                ref: t,
                canCreateInvites: es,
                noInvitesAvailable: ea,
                inviteChannel: K,
                guild: s,
                guildScheduledEvent: o,
                streamUserId: d,
                vanityURLCode: eN,
                targetType: Y,
                targetUserId: d,
                application: ev,
                rows: J,
                showFriends: en,
                initialCounts: el,
                code: ex,
                source: a,
                welcomeToServer: p,
                analyticsLocations: M,
                analyticsLocation: _,
                transitionState: c,
                onClose: h,
                canShowVanityURL: ef,
                isGuestInviteCreationToggleEnabled: eb && ew,
                shouldHideTemporaryInviteToggle: (eb && ew) || x === X.RV.GUEST,
                modalState: ej,
                setModalState: ey,
                changePage: eM,
                onGenerateNewLink: eV,
                inviteFlags: Z,
                setInviteFlags: y,
                showGuestInviteToggleForCurrentVoiceChannel: k,
                setInviteChannel: z,
                handleDone: eP,
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
        h = n(546820),
        g = n(275477);
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
                  (0, l.jsx)("div", {
                    className: h.closeButton,
                    children: (0, l.jsx)(a.ModalCloseButton, { onClick: t }),
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
        d = n(802870),
        u = n(275477);
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
          T = g.find((e) => e.value === a);
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
                  value: null == T ? void 0 : T.value,
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
        c = n(546820),
        h = n(275477);
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
          { maxAge: S, maxUses: T, temporary: N } = i;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(s.ModalHeader, {
              children: [
                (0, l.jsx)("div", {
                  className: c.closeButton,
                  children: (0, l.jsx)(s.ModalCloseButton, { onClick: t }),
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
              maxUses: T,
              temporary: N,
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
          return f;
        },
        S: function () {
          return C;
        },
      });
      var l = n(200651),
        i = n(192379),
        r = n(120356),
        s = n.n(r),
        a = n(533800),
        o = n(442837),
        d = n(481060),
        u = n(484614),
        c = n(914010),
        h = n(246946),
        g = n(626135),
        m = n(630388),
        v = n(971130),
        p = n(530436),
        x = n(245335),
        I = n(981631),
        S = n(388032),
        T = n(546820),
        N = n(275477);
      let C = o.ZP.connectStores([h.Z], () => ({
          hideValue: h.Z.hideInstantInvites,
        }))((e) => {
          let {
            value: t,
            autoFocus: n,
            hideValue: i,
            onCopy: r,
            disabled: s,
          } = e;
          return (0, l.jsx)(u.Z, {
            value: i ? S.intl.string(S.t["6HzNgY"]) : t,
            buttonColor: d.Button.Colors.BRAND,
            onCopy: r,
            autoFocus: n,
            disabled: s,
          });
        }),
        f = (e) => {
          let {
              guild: t,
              noInvitesAvailable: n,
              showFriends: r,
              onClose: o,
              modalState: u,
              isGuestInviteCreationToggleEnabled: h,
              inviteFlags: f,
              setInviteFlags: E,
              showGuestInviteToggleForCurrentVoiceChannel: _,
              copyValue: j,
              changePage: Z,
              inviteChannel: y,
              source: M,
              code: w,
              guildScheduledEvent: b,
              disabled: U,
              application: A,
            } = e,
            { maxAge: R, maxUses: B, networkError: P, showVanityURL: V } = u,
            G = i.useCallback(() => {
              g.default.track(I.rMx.COPY_INSTANT_INVITE, {
                server: c.Z.getGuildId(),
                channel: null == y ? void 0 : y.id,
                channel_type: null == y ? void 0 : y.type,
                location: M,
                code: w,
                guild_scheduled_event_id: null == b ? void 0 : b.id,
                application_id: null == A ? void 0 : A.id,
              });
            }, [null == A ? void 0 : A.id, y, M, w, b]);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(C, { value: j, autoFocus: r, onCopy: G, disabled: U }),
              h
                ? (0, l.jsx)("div", {
                    className: T.temporaryMembershipContainerBackground,
                    children: (0, l.jsx)(d.FormSwitch, {
                      className: T.temporaryMembershipContainer,
                      value: (0, m.yE)(f, a.$.IS_GUEST_INVITE),
                      onChange: (e) => E((0, m.mB)(f, a.$.IS_GUEST_INVITE, e)),
                      note: S.intl.string(S.t["/FeTKy"]),
                      disabled: U,
                      hideBorder: !0,
                      children: _
                        ? S.intl.string(S.t.BPL98f)
                        : S.intl.string(S.t["2snqsL"]),
                    }),
                  })
                : null,
              n || V
                ? null
                : (0, l.jsxs)(d.Text, {
                    variant: "text-xs/normal",
                    className: s()(N.marginTop8, T.footerText),
                    children: [
                      (0, v.Vg)(R, B),
                      " ",
                      r
                        ? (0, l.jsx)(d.Anchor, {
                            onClick: () => Z(x.RV.SETTINGS),
                            children: S.intl.string(S.t.VNe8Pz),
                          })
                        : null,
                    ],
                  }),
              !n && r && V
                ? (0, l.jsxs)(d.Text, {
                    variant: "text-xs/normal",
                    className: s()(N.marginTop8, T.footerText),
                    children: [S.intl.string(S.t["0M2U9/"]), " "],
                  })
                : null,
              null != P
                ? (0, l.jsx)(p.W, { guild: t, error: P, onClose: o })
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
        u = n(546820);
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
          return C;
        },
        k: function () {
          return N;
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
        S = n(546820);
      function T(e, t, n) {
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
      let N = 44;
      class C extends i.Component {
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
            T(this, "state", { sending: !1, invited: !1, hovered: !1 }),
            T(this, "handleMouseEnter", () => {
              this.setState({ hovered: !0 });
            }),
            T(this, "handleMouseLeave", () => {
              this.setState({ hovered: !1 });
            }),
            T(this, "getSuggestedProps", () => {
              var e;
              let { row: t } = this.props;
              return null !==
                (e = null != t ? h.Z.getSelectedInviteMetadata(t) : null) &&
                void 0 !== e
                ? e
                : null;
            }),
            T(this, "handleClickInvite", () => {
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
        T = n(592125),
        N = n(496675),
        C = n(699516),
        f = n(981631),
        E = n(245335);
      let _ = new Set(),
        j = [],
        Z = new Map();
      function y(e) {
        let t = new Set(),
          n = null == s || d === E.Iq.EMBEDDED_APPLICATION ? void 0 : s.id,
          l = (0, S.rh)(_, n);
        for (let e of (null != l && !C.Z.isBlocked(l.id) && t.add(l.id),
        x.Z.getUserAffinitiesUserIds()))
          t.add(e);
        let i = new Set();
        return (
          d === E.Iq.EMBEDDED_APPLICATION &&
            p.Z.getChannelHistory()
              .map((e) => T.Z.getChannel(e))
              .filter(I.lm)
              .filter((e) => e.type === f.d4z.GUILD_TEXT)
              .filter((e) => N.Z.can(f.Plq.SEND_MESSAGES, e))
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
      function M(e) {
        (j = e),
          (Z = new Map()),
          e.forEach((e, t) => {
            Z.set(e, { index: t });
          });
      }
      class w extends (u = m.ZP.Store) {
        initialize() {
          this.waitFor(C.Z, x.Z);
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
          let t = Z.get(e),
            n = x.Z.getUserAffinitiesUserIds();
          return null != t
            ? {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: j.length,
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
            let g = C.Z.getBlockedOrIgnoredIDs();
            (_ = new Set([
              ...t,
              ...g,
              ...(0, S.Sz)({
                channel: a,
                applicationId: o,
                inviteTargetType: h,
              }),
            ])),
              (r = !1);
            let { rows: m, counts: v } = y("");
            M(m), (l = v), (i = j.length);
          },
          INVITE_SUGGESTIONS_SEARCH: function (e) {
            let { query: t } = e;
            r = "" !== t;
            let { rows: n } = y(t);
            M(n);
          },
        }));
    },
  },
]);
//# sourceMappingURL=d27380a5f2b82b333f94.js.map
