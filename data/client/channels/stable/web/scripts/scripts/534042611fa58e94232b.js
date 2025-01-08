"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17925"],
  {
    588705: function (e, n, t) {
      t.d(n, {
        R: function () {
          return C;
        },
      }),
        t(411104);
      var i = t(200651),
        a = t(192379),
        o = t(442837),
        r = t(481060),
        l = t(388905),
        c = t(686546),
        s = t(925329),
        d = t(372769),
        u = t(726745),
        p = t(973616),
        _ = t(131704),
        h = t(601964),
        m = t(598077),
        v = t(594174),
        f = t(51144),
        g = t(981631),
        E = t(888592),
        Z = t(245335),
        b = t(388032),
        y = t(594193);
      let C = () =>
          (0, i.jsxs)(a.Fragment, {
            children: [
              (0, i.jsx)(l.qE, {
                src: null,
                size: r.AvatarSizes.DEPRECATED_SIZE_100,
                className: y.avatar,
              }),
              (0, i.jsx)(l.DK, { children: b.intl.string(b.t["3rE1Pz"]) }),
              (0, i.jsx)(l.Dx, {
                className: y.inviteResolvingGuildName,
                children: b.intl.string(b.t.ZTNur6),
              }),
            ],
          }),
        I = (e) => {
          let { guild: n, user: t, application: a, compact: o } = e;
          if (null != a)
            return (0, i.jsx)(s.Z, {
              className: y.appIcon,
              game: a,
              size: y.appIconSize,
            });
          if (null != t)
            return (0, i.jsx)(l.qE, {
              src: null != t ? t.getAvatarURL(void 0, 80) : null,
              size: r.AvatarSizes.SIZE_80,
              className: o ? y.compactAvatar : y.avatar,
            });
          if (null != n)
            return (0, i.jsx)(c.ZP, {
              mask: c.ZP.Masks.SQUIRCLE,
              width: 64,
              height: 64,
              className: y.guildIcon,
              children: (0, i.jsx)(l.Vj, {
                guild: n,
                size: l.Vj.Sizes.LARGER,
                animate: !0,
              }),
            });
          else return null;
        };
      n.Z = (e) => {
        var n;
        let t,
          a,
          c,
          {
            invite: s,
            disableUser: C = !1,
            error: x,
            flatActivityCount: S = !1,
            isRegister: k = !1,
          } = e,
          { currentUser: L, multiAccounts: N } = (0, o.cj)(
            [u.Z, v.default],
            () => ({
              currentUser: v.default.getCurrentUser(),
              multiAccounts: u.Z.getUsers(),
            }),
          );
        if (null == s) return null;
        let A = null != s.guild ? new h.ZP(s.guild) : null,
          T = null != s.channel ? (0, _.jD)(s.channel) : null,
          P =
            null != s.target_application
              ? new p.ZP(s.target_application)
              : null,
          w = C || null == s.inviter ? null : new m.Z(s.inviter),
          O =
            !(
              (null != s.approximate_member_count &&
                s.approximate_member_count > 100) ||
              (null != A && A.hasFeature(g.oNc.COMMUNITY))
            ) && null != w,
          j = null,
          D = !1;
        if (null != A)
          (j =
            null == w
              ? b.intl.string(b.t["3rE1Pz"])
              : b.intl.formatToPlainString(b.t["5u47vb"], {
                  username: f.ZP.getFormattedName(w),
                })),
            s.target_type === Z.Iq.STREAM &&
              null != s.target_user &&
              (j = b.intl.formatToPlainString(b.t.x2L32d, {
                username: f.ZP.getFormattedName(s.target_user),
              })),
            s.target_type === Z.Iq.EMBEDDED_APPLICATION &&
              null != s.target_application &&
              (j =
                null != w
                  ? b.intl.formatToPlainString(b.t.UW1Cam, {
                      username: f.ZP.getFormattedName(w),
                    })
                  : b.intl.string(b.t.ENSuNz)),
            O &&
              null == P &&
              (t = (0, i.jsx)(l.Vj, {
                className: y.icon,
                guild: A,
                size: l.Vj.Sizes.SMALL,
              })),
            (a = A.name),
            null != P &&
              ((a = P.name),
              (c = (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)(l.DK, {
                    className: y.appIn,
                    children: b.intl.string(b.t["3gg9fH"]),
                  }),
                  (0, i.jsxs)("div", {
                    className: y.guildContainer,
                    children: [
                      (0, i.jsx)(l.Vj, { guild: A, size: l.Vj.Sizes.SMALL }),
                      (0, i.jsx)(r.Text, {
                        tag: "span",
                        variant: "text-lg/normal",
                        color: "header-primary",
                        className: y.appGuildName,
                        children: A.name,
                      }),
                    ],
                  }),
                ],
              })));
        else if (null != T) {
          if (null == w) throw Error("no inviter in group DM invite");
          let e = f.ZP.getFormattedName(w);
          null != T.name && "" !== T.name
            ? ((j = b.intl.formatToPlainString(b.t["5u47vb"], { username: e })),
              (a = T.name),
              null != T.icon &&
                (t = (0, i.jsx)(l.MC, {
                  channel: T,
                  size: r.AvatarSizes.SIZE_32,
                })))
            : ((j = b.intl.string(b.t.OsdY8P)), (a = e));
        } else if (null != w) {
          let e = f.ZP.getFormattedName(w, !0);
          (a = b.intl.formatToPlainString(b.t["4aF92d"], { username: e })),
            (D = !0),
            (c =
              null != x
                ? null
                : (0, i.jsx)(l.DK, {
                    className: y.directInviteSubTitle,
                    children: k
                      ? b.intl.format(b.t["6r4JiY"], { username: e })
                      : b.intl.format(b.t.Quj7HR, { username: e }),
                  }));
        }
        return (0, i.jsxs)("div", {
          className: y.container,
          children: [
            (0, i.jsx)(I, {
              application: P,
              guild: A,
              user: O ? w : null,
              compact: D,
            }),
            null != x
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(l.DK, { children: b.intl.string(b.t.mDFGFh) }),
                    (0, i.jsx)(l.Dx, { children: x }),
                  ],
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(l.DK, { children: j }),
                    (0, i.jsxs)(l.Dx, {
                      className: y.title,
                      children: [
                        null != A
                          ? (0, i.jsx)(d.Z, {
                              guild: A,
                              className: y.guildBadge,
                              tooltipPosition: "left",
                            })
                          : null,
                        t,
                        a,
                      ],
                    }),
                  ],
                }),
            c,
            null != P ||
            D ||
            (null == s
              ? void 0
              : null === (n = s.guild) || void 0 === n
                ? void 0
                : n.id) === E.fQ
              ? null
              : (0, i.jsx)(l.EJ, {
                  className: y.activityCount,
                  online: s.approximate_presence_count,
                  total: s.approximate_member_count,
                  flat: S,
                }),
            N.length > 1 ? (0, i.jsx)(l.jQ, { user: L }) : null,
          ],
        });
      };
    },
    567409: function (e, n, t) {
      t.d(n, {
        Ns: function () {
          return m;
        },
      }),
        t(47120);
      var i = t(192379),
        a = t(392711),
        o = t.n(a),
        r = t(876215),
        l = t(442837),
        c = t(146282),
        s = t(26033),
        d = t(897674),
        u = t(709054),
        p = t(206583);
      let _ = new Set([r.s.PLAYED_GAME, r.s.LAUNCHED_ACTIVITY]),
        h = (e) => _.has(e.content_type);
      function m(e) {
        let { entries: n } = (function () {
          let e = (0, d.Z)(p.YN.GAME_PROFILE_FEED),
            n = (0, d.Z)(p.YN.GLOBAL_FEED),
            t = i.useMemo(
              () =>
                o()(n)
                  .unionBy(e, (e) => e.id)
                  .filter(h)
                  .orderBy((e) => u.default.extractTimestamp(e.id), "desc")
                  .uniqWith(
                    (e, n) =>
                      e.author_id === n.author_id &&
                      e.extra.application_id === n.extra.application_id,
                  )
                  .value(),
              [e, n],
            );
          return {
            requestId: (0, l.e7)([c.Z], () =>
              c.Z.getFeedRequestId(p.YN.GAME_PROFILE_FEED),
            ),
            entries: t,
          };
        })();
        return i.useMemo(
          () =>
            null == n
              ? void 0
              : n.filter(
                  (n) =>
                    ((0, s.dX)(n) || (0, s.Mq)(n)) &&
                    n.extra.application_id === e,
                ),
          [n, e],
        );
      }
    },
    552282: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      function i(e) {
        var n;
        return null != e
          ? { id: e.id, name: null !== (n = e.name) && void 0 !== n ? n : "" }
          : null;
      }
    },
    888592: function (e, n, t) {
      var i, a;
      t.d(n, {
        fQ: function () {
          return o;
        },
        tF: function () {
          return i;
        },
      }),
        ((a = i || (i = {})).STUDENT_PROMPT = "STUDENT_PROMPT"),
        (a.VERIFY_EMAIL = "VERIFY_EMAIL"),
        (a.VERIFY_PIN = "VERIFY_PIN"),
        (a.SELECT_SCHOOL = "SELECT_SCHOOL"),
        (a.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH"),
        (a.SUBMIT_SCHOOL = "SUBMIT_SCHOOL"),
        (a.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION"),
        (a.EMAIL_WAITLIST = "EMAIL_WAITLIST");
      let o = "884924873015689226";
    },
    635324: function (e, n, t) {
      t(47120);
      var i = t(200651),
        a = t(149765),
        o = t(481060),
        r = t(570140),
        l = t(700785);
      __OVERLAY__ &&
        r.Z.subscribe("OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN", function (e) {
          let {
              clientId: n,
              authorizeProps: { authorizations: c, permissions: s, ...d },
            } = e,
            u = "OAuth2Authorize_"
              .concat(n, "_")
              .concat(d.guildId, "_")
              .concat(d.channelId);
          function p(e) {
            let { location: t } = e;
            r.Z.dispatch({
              type: "OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE",
              clientId: n,
              location: t,
            });
          }
          let _ = l.Hn;
          try {
            _ = a.vB(null != s ? s : 0);
          } catch (e) {}
          (0, o.openModalLazy)(
            async () => {
              let { OAuth2AuthorizeModal: e } = await Promise.resolve().then(
                t.bind(t, 69580),
              );
              return (n) =>
                (0, i.jsx)(e, {
                  ...n,
                  ...d,
                  authorizations: new Map(c),
                  permissions: _,
                  callback: p,
                });
            },
            {
              modalKey: u,
              onCloseRequest: () => {
                (0, o.closeModal)(u), p({});
              },
            },
          );
        });
    },
    86071: function (e, n, t) {
      let i = (0, t(818083).B)({
        kind: "user",
        id: "2024-10_hotwheels_overlay_invites",
        label: "Overlay Invites Notification",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      n.Z = i;
    },
    290161: function (e, n, t) {
      t.r(n);
      var i = t(200651),
        a = t(192379),
        o = t(442837),
        r = t(481060),
        l = t(490173),
        c = t(735246),
        s = t(40851),
        d = t(503737),
        u = t(823453),
        p = t(436774),
        _ = t(686546),
        h = t(314910),
        m = t(367207),
        v = t(241890),
        f = t(649561),
        g = t(631553),
        E = t(981631);
      t(635324), t(167666), t(308765), t(913487), o.ZP.initialize();
      n.default = function () {
        return (
          a.useEffect(
            () => (
              m.Z.initialize(),
              d.Z.initialize(),
              v.Z.init(),
              () => {
                m.Z.terminate(), d.Z.terminate();
              }
            ),
            [],
          ),
          (0, i.jsxs)(a.Fragment, {
            children: [
              (0, i.jsx)(u.Z, {}),
              (0, i.jsx)(c.T, {
                children: (0, i.jsxs)(f.Z, {
                  children: [
                    (0, i.jsx)(_.Co, {}),
                    (0, i.jsx)(p.ZP, {}),
                    (0, i.jsx)(s.Wu, {
                      appContext: E.IlC.OVERLAY,
                      renderWindow: window,
                      children: (0, i.jsxs)(h.yP, {
                        children: [
                          (0, i.jsx)(g.Z, {}),
                          (0, i.jsx)(r.Modals, {}),
                          (0, i.jsx)(l.Z, {}),
                          (0, i.jsx)(h.Un, {}),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
    681603: function (e, n, t) {
      var i = t(192379),
        a = t(149765),
        o = t(442837),
        r = t(367907),
        l = t(731429),
        c = t(188471),
        s = t(318885),
        d = t(592125),
        u = t(984933),
        p = t(271383),
        _ = t(430824),
        h = t(496675),
        m = t(944486),
        v = t(914010),
        f = t(594174),
        g = t(237997),
        E = t(145597),
        Z = t(981631);
      class b extends i.Component {
        componentDidUpdate(e) {
          if (this.props.locked) return null;
          let {
            selectedGuild: n,
            selectedChannel: t,
            isMemberPending: i,
            hasPreviewEnabled: a,
            postableChannelCount: o,
          } = this.props;
          if (
            (null != n &&
              (n !== e.selectedGuild || (i && !e.isMemberPending)) &&
              ((0, s.Q)(Z.rMx.GUILD_VIEWED, {
                ...(i ? { is_pending: i, preview_enabled: a } : {}),
                postable_channels: o,
              }),
              (0, c.a)(Z.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: n })),
            null != t && t !== e.selectedChannel)
          ) {
            let e = (0, l.K)(d.Z.getChannel(t), !0);
            (0, s.Q)(Z.rMx.CHANNEL_OPENED, { ...e, ...(0, r.$H)(t) }),
              (0, c.a)(Z.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: t });
          }
        }
        render() {
          return null;
        }
      }
      n.Z = o.ZP.connectStores(
        [v.Z, m.Z, _.Z, f.default, g.Z, u.ZP, h.Z, p.ZP],
        () => {
          var e, n, t;
          let i = v.Z.getGuildId(),
            o = m.Z.getChannelId(i),
            r = _.Z.getGuild(i),
            l = f.default.getCurrentUser(),
            c =
              null !==
                (n = u.ZP.getChannels(null == r ? void 0 : r.id)[u.sH]) &&
              void 0 !== n
                ? n
                : [],
            s =
              c.length > 0
                ? c.filter((e) => {
                    let { channel: n } = e;
                    return h.Z.can(
                      a.$e(Z.Plq.SEND_MESSAGES, Z.Plq.VIEW_CHANNEL),
                      n,
                    );
                  }).length
                : 0,
            d =
              null != l &&
              null != i &&
              null !==
                (t =
                  null === (e = p.ZP.getMember(i, l.id)) || void 0 === e
                    ? void 0
                    : e.isPending) &&
              void 0 !== t &&
              t;
          return {
            selectedGuild: i,
            selectedChannel: o,
            locked: g.Z.isLocked((0, E.QF)()),
            hasPreviewEnabled:
              null == r ? void 0 : r.features.has(Z.oNc.PREVIEW_ENABLED),
            isMemberPending: d,
            postableChannelCount: s,
          };
        },
      )(b);
    },
    649561: function (e, n, t) {
      t(47120), t(177593);
      var i = t(200651),
        a = t(192379),
        o = t(120356),
        r = t.n(o),
        l = t(392711),
        c = t.n(l),
        s = t(818405),
        d = t(587158),
        u = t(286379),
        p = t(481060),
        _ = t(13245),
        h = t(490029),
        m = t(797614),
        v = t(593481),
        f = t(703656),
        g = t(254761),
        E = t(70956),
        Z = t(960048),
        b = t(145597),
        y = t(692546),
        C = t(518084),
        I = t(987650),
        x = t(981631),
        S = t(388032),
        k = t(974881);
      function L(e, n, t) {
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
      let N = 10 * E.Z.Millis.SECOND;
      function A() {
        let e = (0, b.QF)(),
          n = (0, b.Ht)();
        (0, h.lW)({
          type: x.BmY.DISPATCH,
          pid: e,
          token: n,
          payloads: [{ type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: e }],
        });
      }
      class T extends a.PureComponent {
        componentDidMount() {
          (this.notificationTimer = setTimeout(this.hideNotification, N)),
            _.Z.track(x.rMx.NOTIFICATION_VIEWED, {
              notif_type: I.n0.OverlayCrashed,
            });
        }
        componentWillUnmount() {
          let { notificationTimer: e } = this;
          null != e && clearTimeout(e);
        }
        render() {
          let { info: e, error: n } = this.props,
            { showTrace: t } = this.state,
            { notificationTimer: a } = this;
          return null == a
            ? null
            : (0, i.jsx)(y.Z, {
                observe: !1,
                children: (0, i.jsx)(p.ThemeProvider, {
                  theme: x.BRd.DARK,
                  children: (a) =>
                    (0, i.jsxs)(p.Clickable, {
                      className: r()(a, k.container),
                      onClick: (e) => e.stopPropagation(),
                      children: [
                        (0, i.jsx)(v.ZP, {
                          expand: !0,
                          icon: (0, i.jsx)(g.Z, {
                            width: 40,
                            height: 40,
                            className: k.notificationIcon,
                          }),
                          title: S.intl.string(S.t.U38qZm),
                          confirmText: S.intl.string(S.t.TzAl1d),
                          onNotificationClick: this.handleNotificationClick,
                          onConfirmClick: this.handleReload,
                          onDismissClick: this.hideNotification,
                        }),
                        t && null != e
                          ? (0, i.jsxs)(C.ZP, {
                              className: k.stackTrace,
                              children: [
                                (0, i.jsx)(C.ZP.Bar, {
                                  children: "Error Details",
                                }),
                                (0, i.jsx)(C.ZP.Content, {
                                  className: k.stackTraceCode,
                                  children: (0, i.jsx)("code", {
                                    className: k.code,
                                    children: (0, i.jsx)("pre", {
                                      children: n.stack,
                                    }),
                                  }),
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                }),
              });
        }
        constructor(...e) {
          super(...e),
            L(this, "state", { showTrace: !1, busy: !1 }),
            L(this, "notificationTimer", void 0),
            L(this, "hideNotification", () => {
              A();
              let { notificationTimer: e } = this;
              null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            L(this, "handleReload", (e) => {
              this.setState({ busy: !0 }),
                A(),
                _.Z.track(
                  x.rMx.NOTIFICATION_CLICKED,
                  { notif_type: I.n0.OverlayCrashed, action_type: "reload" },
                  !0,
                ),
                e.stopPropagation(),
                setTimeout(() => location.reload(!0), 200);
            }),
            L(this, "handleNotificationClick", (e) => {
              e.stopPropagation();
              let { notificationTimer: n } = this;
              null != n && clearTimeout(n),
                e.shiftKey && this.setState({ showTrace: !0 });
            });
        }
      }
      let P = c().throttle(
        () => {
          m.Z.increment(
            {
              name: u.V.APP_CRASHED,
              tags: [
                "reason:".concat(s.v.UNHANDLED_JS_ERROR),
                "level:".concat(d.c.FATAL),
              ],
            },
            !0,
          );
        },
        100,
        { trailing: !1 },
      );
      class w extends a.PureComponent {
        componentDidCatch(e, n) {
          let t = (0, f.s1)().location;
          this.setState({ error: e, info: n });
          let i = (0, b.QF)(),
            a = (0, b.Ht)();
          (0, h.lW)({
            type: x.BmY.DISPATCH,
            pid: (0, b.QF)(),
            token: a,
            payloads: [
              { type: "OVERLAY_CRASHED", pid: i },
              { type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: i },
            ],
          }),
            setImmediate(() => window.addEventListener("click", A));
          let o = Z.Z.captureCrash(e, { extra: n });
          _.Z.track(x.rMx.APP_CRASHED, {
            path: t.pathname,
            extra: n,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: o,
            error_level: "fatal",
          }),
            P();
        }
        render() {
          let { children: e, className: n } = this.props,
            { error: t, info: a } = this.state;
          return null != t
            ? (0, i.jsx)(T, { error: t, info: a })
            : (0, i.jsx)("div", { className: n, children: e });
        }
        constructor(...e) {
          super(...e), L(this, "state", { error: null, info: null });
        }
      }
      n.Z = w;
    },
    631553: function (e, n, t) {
      let i;
      t.d(n, {
        Z: function () {
          return eg;
        },
      }),
        t(653041);
      var a = t(200651),
        o = t(192379),
        r = t(120356),
        l = t.n(r),
        c = t(921738),
        s = t.n(c),
        d = t(954955),
        u = t.n(d),
        p = t(498607),
        _ = t.n(p),
        h = t(442837),
        m = t(481060),
        v = t(668781),
        f = t(239091),
        g = t(13245),
        E = t(425493),
        Z = t(615287),
        b = t(951483),
        y = t(714338),
        C = t(185666),
        I = t(100527),
        x = t(906732),
        S = t(146282),
        k = t(600164);
      t(70097);
      var L = t(594190),
        N = t(567409),
        A = t(74299),
        T = t(989941),
        P = t(377400),
        w = t(329557),
        O = t(199902),
        j = t(314897),
        D = t(592125),
        R = t(430824),
        M = t(131951),
        G = t(944486),
        U = t(618541),
        z = t(449224),
        F = t(574254),
        K = t(556296),
        V = t(808506),
        Y = t(237997),
        H = t(451478),
        B = t(70956),
        W = t(358085),
        Q = t(998502),
        q = t(13140),
        X = t(145597),
        J = t(658785),
        $ = t(681603),
        ee = t(358446),
        en = t(348733),
        et = t(312178),
        ei = t(708383),
        ea = t(923532),
        eo = t(107200),
        er = t(987650),
        el = t(981631),
        ec = t(206583),
        es = t(388032),
        ed = t(746120);
      function eu(e, n, t) {
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
      (h.ZP.PersistedStore.disableWrites = __OVERLAY__), h.ZP.initialize();
      let ep = null;
      function e_(e) {
        e.preventDefault();
      }
      function eh(e) {
        (0, f.jW)(e, async () => {
          let { default: e } = await t.e("92780").then(t.bind(t, 930381));
          return (n) => (0, a.jsx)(e, { ...n });
        });
      }
      W.isPlatformEmbedded;
      let em = (e) => {
          let { keybind: n, onClick: t, isPreviewingInGame: i, locked: o } = e,
            r = o ? m.Clickable : "div";
          return (0, a.jsx)(r, {
            className: l()(ed.overlayBackground, {
              [ed.overlayActive]: !o,
              [ed.overlayLocked]: o,
              [ed.previewMode]: !o && i,
            }),
            onMouseDown: (e) => {
              let { currentTarget: n, target: i, button: a } = e;
              a === el.AeJ.PRIMARY && n === i && t();
            },
            onContextMenu: eh,
            children: o
              ? null
              : (0, a.jsx)("div", {
                  className: ed.closeContainer,
                  children: (0, a.jsx)(E.Z, {
                    variant: E.Z.Variants.BOLD,
                    keybind: n,
                    closeAction: t,
                  }),
                }),
          });
        },
        ev = (e) => {
          let {
            keyCode: n,
            shiftKey: t,
            metaKey: i,
            altKey: a,
            ctrlKey: o,
          } = e;
          return { keyCode: n, shiftKey: t, metaKey: i, altKey: a, ctrlKey: o };
        };
      class ef extends o.Component {
        handleLock() {
          !(0, m.hasAnyModalOpen)() &&
            !F.Z.isOpen() &&
            g.Z.setInputLocked(!0, (0, X.QF)());
        }
        handleDeactivate() {
          g.Z.deactivateAllRegions();
        }
        componentDidMount() {
          g.Z.startSession(),
            P.Z.initialize(),
            C.Z.initialize(),
            w.Z.initialize();
        }
        componentDidUpdate(e) {
          let { initialized: n } = this.props;
          if (!!n) {
            if (n && !e.initialized) {
              this.initialSetup();
              return;
            }
            if (!e.locked && this.props.locked) {
              if (
                (window.addEventListener("contextmenu", e_, !1), null != ep)
              ) {
                let e = Date.now() - ep;
                g.Z.track(el.rMx.OVERLAY_LOCKED, { unlocked_duration: e }),
                  (ep = null);
              }
              y.Z.disable(),
                (this.activeKeyEventShapes = []),
                Y.Z.isPinned(el.Odu.TEXT) &&
                  (y.Z.setLayout(b.Xq), y.Z.enable());
            } else
              e.locked &&
                !this.props.locked &&
                (window.removeEventListener("contextmenu", e_, !1),
                null == ep &&
                  ((ep = Date.now()), g.Z.track(el.rMx.OVERLAY_UNLOCKED)),
                y.Z.disable(),
                (this.activeKeyEventShapes = []),
                y.Z.setLayout(b.Sr),
                y.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
              (this.lockEventShape = (0, q.d2)(this.props.keybindKeyCodes)),
              !e.hasFetchedContentInventory &&
                this.props.hasFetchedContentInventory &&
                g.Z.notifyContentInventoryReady(
                  this.props.contentInventoryEntries,
                );
          }
        }
        initialSetup() {
          let {
            connectedToVoice: e,
            locked: n,
            canGoLive: t,
            isStreaming: i,
            voiceGuild: a,
            voiceChannelId: o,
            game: r,
            showKeybindNotification: l,
            dismissKeybindNotification: c,
          } = this.props;
          g.Z.track(el.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: Y.Z.isPinned(el.Odu.TEXT),
            overlay_render_method: Z.gl[Z.gl.Hook],
          }),
            J.Z.trackExposure({ location: "Overlay" });
          let s = t && !i && null != r,
            d = e && null != a && null != o,
            u = { type: er.nc.WELCOME };
          if (
            (l
              ? (u = { type: er.nc.KEYBIND_INDICATORS, markAsDismissed: c })
              : s && d
                ? (u = {
                    type: er.nc.GO_LIVE_VOICE,
                    game: r,
                    voiceChannelId: o,
                    voiceGuild: a,
                  })
                : s && (u = { type: er.nc.GO_LIVE_NON_VOICE, game: r }),
            g.Z.overlayMounted(u),
            window.addEventListener("resize", this.handleWindowResize),
            n && window.addEventListener("contextmenu", e_, !1),
            W.isPlatformEmbedded)
          ) {
            let e = Q.ZP.requireModule("discord_overlay2");
            void 0 !== e.setPerfInfoCallback &&
              (e.setPerfInfoCallback((e) => {
                g.Z.track(el.rMx.OVERLAY_PERF_INFO, e);
              }),
              e.broadcastCommand({
                message: "set_perf_report_interval",
                interval: 15 * B.Z.Millis.MINUTE,
              })),
              Q.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (e, n) => {
                Y.Z.getDisableExternalLinkAlert() || n === U.Z.getLastURL()
                  ? Q.ZP.send("OPEN_EXTERNAL_URL", n)
                  : v.Z.show({
                      title: es.intl.string(es.t.WLx4Fx),
                      body: es.intl.string(es.t.H8O1TE),
                      secondaryConfirmText: es.intl.string(es.t.IwqGhY),
                      confirmText: es.intl.string(es.t["3PatS0"]),
                      cancelText: es.intl.string(es.t["ETE/oK"]),
                      onConfirmSecondary: () => {
                        g.Z.disableExternalLinkAlert(),
                          Q.ZP.send("OPEN_EXTERNAL_URL", n);
                      },
                      onConfirm: () => Q.ZP.send("OPEN_EXTERNAL_URL", n),
                    });
              });
          }
          window.addEventListener("keydown", this.onKeyDownGlobal, !0),
            window.addEventListener("keyup", this.onKeyUpGlobal, !0);
        }
        componentWillUnmount() {
          window.removeEventListener("resize", this.handleWindowResize),
            window.removeEventListener("keydown", this.onKeyDownGlobal, !0),
            window.removeEventListener("keyup", this.onKeyUpGlobal, !0),
            this.props.locked &&
              window.removeEventListener("contextmenu", e_, !1),
            P.Z.terminate(),
            C.Z.terminate(),
            w.Z.terminate();
        }
        renderInvalidSizeMessage() {
          return (0, a.jsx)(k.Z, {
            justify: k.Z.Justify.CENTER,
            align: k.Z.Align.CENTER,
            className: ed.invalidContainer,
            children: (0, a.jsx)("div", {
              className: ed.inactiveContainer,
              children: es.intl.format(es.t.ketnW1, X.FW),
            }),
          });
        }
        render() {
          let {
              locked: e,
              keybind: n,
              incompatibleApp: t,
              initialized: o,
              isPreviewingInGame: r,
              activeRegions: c,
              windowSize: s,
              voiceGuild: d,
              voiceChannelId: u,
            } = this.props,
            { width: p, height: _ } = s;
          if (0 === p || 0 === _ || t || !o) return null;
          let h = e || r,
            m = j.default.getId();
          return (0, a.jsxs)("div", {
            className: ed.overlay,
            children: [
              (0, a.jsx)(ei.Z, {}),
              r &&
                (0, a.jsx)("header", {
                  className: ed.previewingInGameHeader,
                  children: es.intl.string(es.t.iOq96u),
                }),
              i,
              (!e || c.has(el.O0n.TEXT_WIDGET)) &&
                (0, a.jsx)(em, {
                  locked: e,
                  keybind: n,
                  onClick: e ? this.handleDeactivate : this.handleLock,
                  isPreviewingInGame: r,
                }),
              (0, X.Te)(s)
                ? (0, a.jsx)(et.Z, {
                    className: l()({
                      [ed.layoutLocked]: e,
                      [ed.layoutUnlocked]: !e,
                    }),
                  })
                : e
                  ? null
                  : this.renderInvalidSizeMessage(),
              (0, a.jsx)(eo.Z, {}),
              null != d &&
                null != u &&
                (0, a.jsx)(ea.Z, {
                  streamerId: m,
                  guildId: d.id,
                  channelId: u,
                }),
              (0, a.jsx)(en.Z, { locked: h, keybind: n }),
              (0, a.jsx)($.Z, {}),
            ],
          });
        }
        constructor(e) {
          super(e),
            eu(this, "handleWindowResize", () => {
              V.Z.isFocusedPidOutOfProcess()
                ? this.forceUpdate()
                : u()(() => {
                    this.forceUpdate();
                  }, 500);
            }),
            eu(this, "activeKeyEventShapes", []),
            eu(this, "lockEventShape", (0, q.d2)(this.props.keybindKeyCodes)),
            eu(this, "getActiveKeyEventIndex", (e) =>
              this.activeKeyEventShapes.findIndex((n) => _()(n, e)),
            ),
            eu(this, "onKeyDownGlobal", (e) => {
              let n = ev(e),
                t = this.getActiveKeyEventIndex(n) > -1,
                i = [16, 17, 18, 91].includes(e.keyCode);
              !t && !i && this.activeKeyEventShapes.push(n),
                this.activeKeyEventShapes.length ===
                  this.lockEventShape.length &&
                  this.lockEventShape.every((e) =>
                    this.activeKeyEventShapes.some((n) => _()(e, n)),
                  ) &&
                  (e.preventDefault(), e.stopPropagation());
              let { locked: a, activeRegions: o } = this.props;
              n.keyCode === s().codes.esc &&
                a &&
                o.has(el.O0n.TEXT_WIDGET) &&
                g.Z.deactivateAllRegions();
            }),
            eu(this, "onKeyUpGlobal", (e) => {
              let n = ev(e),
                t = this.getActiveKeyEventIndex(n);
              t > -1 && this.activeKeyEventShapes.splice(t, 1);
            });
          let n = e.locked && Y.Z.isPinned(el.Odu.TEXT);
          y.Z.setLayout(n ? b.Xq : b.Sr), n && y.Z.enable();
        }
      }
      function eg() {
        let {
            locked: e,
            initialized: n,
            incompatibleApp: t,
            activeRegions: i,
            isPreviewingInGame: o,
          } = (0, h.cj)([Y.Z], () => ({
            locked: Y.Z.isLocked((0, X.QF)()),
            initialized: Y.Z.initialized,
            incompatibleApp: Y.Z.incompatibleApp,
            activeRegions: Y.Z.getActiveRegions(),
            isPreviewingInGame: Y.Z.isPreviewingInGame(),
          })),
          r = (0, h.e7)([H.Z], () => H.Z.windowSize()),
          l = (0, h.e7)([K.Z], () => K.Z.getOverlayKeybind()),
          c = (0, h.e7)([G.Z], () => G.Z.getVoiceChannelId()),
          s = (0, h.e7)([D.Z], () => D.Z.getChannel(c)),
          d = (0, h.e7)([R.Z], () =>
            null != s ? R.Z.getGuild(s.guild_id) : null,
          ),
          u = (0, h.e7)([L.ZP, z.Z], () => (0, T.Z)(L.ZP, z.Z)),
          p = (0, N.Ns)(null == u ? void 0 : u.id),
          _ = (0, h.e7)(
            [S.Z],
            () => null != S.Z.getLastFeedFetchDate(ec.YN.GAME_PROFILE_FEED),
          ),
          v = (0, h.e7)([M.Z], () => (0, A.Z)(M.Z)),
          f = (0, h.e7)([O.Z], () => null != O.Z.getCurrentUserActiveStream()),
          { analyticsLocations: g } = (0, x.ZP)(I.Z.OVERLAY),
          { showKeybindIndicators: E, dismissKeybindNotification: Z } = (0,
          ee.K)();
        return (0, a.jsx)(x.Gt, {
          value: g,
          children: (0, a.jsx)(m.RedesignIconContextProvider, {
            children: (0, a.jsx)(ef, {
              locked: e,
              initialized: n,
              incompatibleApp: t,
              activeRegions: i,
              isPreviewingInGame: o,
              windowSize: r,
              keybind: null != l ? (0, q.BB)(l.shortcut, !0) : "???",
              keybindKeyCodes: null != l ? l.shortcut : [],
              connectedToVoice: null != c,
              voiceChannelId: null != s ? s.id : null,
              voiceGuild: d,
              game: u,
              canGoLive: v,
              isStreaming: f,
              showKeybindNotification: E,
              dismissKeybindNotification: Z,
              contentInventoryEntries: p,
              hasFetchedContentInventory: _,
            }),
          }),
        });
      }
    },
    913487: function (e, n, t) {
      var i = t(570140),
        a = t(703656),
        o = t(981631);
      __OVERLAY__ &&
        i.Z.subscribe("OVERLAY_OPEN_MESSAGE", function (e) {
          let { guildId: n, channelId: t, messageId: i } = e;
          (0, a.dL)({ pathname: o.Z5c.CHANNEL(n, t, i) });
        });
    },
    906037: function (e, n, t) {
      t.d(n, {
        CR: function () {
          return r;
        },
        eM: function () {
          return o;
        },
        m3: function () {
          return l;
        },
      });
      var i = t(570140),
        a = t(449224);
      function o(e) {
        return (!e.isPreviewingInGame && !e.locked) || e.pinned;
      }
      function r(e, n, t) {
        (e.locked !== n.locked ||
          e.pinned !== n.pinned ||
          t(e) !== t(n) ||
          o(e) !== o(n)) &&
          l(n, t(n));
      }
      function l(e, n) {
        var t, r;
        let l = o(e),
          c = a.Z.getGame();
        i.Z.dispatch({
          type: "OVERLAY_WIDGET_CHANGED",
          gameName:
            null !== (t = null == c ? void 0 : c.name) && void 0 !== t
              ? t
              : null,
          gameId:
            null !== (r = null == c ? void 0 : c.id) && void 0 !== r ? r : null,
          widgetType: e.widget,
          visible: l && n,
          locked: e.locked,
          pinned: e.pinned,
        });
      }
    },
    107200: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var a = t(442837),
        o = t(352527),
        r = t(183584),
        l = t(487029),
        c = t(592125),
        s = t(944486),
        d = t(554174),
        u = t(710111),
        p = t(408704);
      function _() {
        let [e, n] = (0, a.Wu)([o.Z], () => [o.Z.enabled, o.Z.keepOpen]),
          t = (0, a.e7)([s.Z], () => s.Z.getVoiceChannelId()),
          _ = (0, a.e7)([c.Z], () => c.Z.getChannel(t), [t]),
          h = null == _ ? void 0 : _.getGuildId();
        return e && null != _
          ? (0, i.jsx)("div", {
              className: p.widget,
              children: (0, i.jsx)(l.Z, {
                width: u.FW.width,
                height: u.FW.height,
                guildId: h,
                channel: _,
                keepOpen: n,
                onClose: function () {
                  let e = (0, d.Z)();
                  null != e && (0, r.oZ)(e);
                },
                analyticsSource: "overlay",
              }),
            })
          : null;
      }
    },
    809357: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
        o: function () {
          return c;
        },
      });
      var i = t(442837),
        a = t(522474),
        o = t(658785),
        r = t(981631);
      function l(e) {
        let { location: n, options: t } = e,
          i = c(),
          { showKeybindIndicators: a } = o.Z.useExperiment({ location: n }, t);
        return a && i;
      }
      function c() {
        return !(0, i.e7)([a.Z], () =>
          a.Z.getWindowVisible(r.KJ3.ACTIVITY_POPOUT),
        );
      }
    },
    352527: function (e, n, t) {
      var i,
        a,
        o,
        r,
        l = t(442837),
        c = t(570140);
      let s = !1,
        d = !1;
      class u extends (r = l.ZP.Store) {
        get keepOpen() {
          return d;
        }
        get enabled() {
          return s;
        }
      }
      (o = "SoundboardOverlayStore"),
        (a = "displayName") in (i = u)
          ? Object.defineProperty(i, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[a] = o),
        (n.Z = new u(c.Z, {
          SOUNDBOARD_SET_OVERLAY_ENABLED: function (e) {
            if (((s = e.enabled), e.enabled)) {
              var n;
              d = null !== (n = e.keepOpen) && void 0 !== n && n;
            }
          },
        }));
    },
    254761: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(331595);
      function o(e) {
        let {
          width: n = 16,
          height: t = 16,
          color: o = "currentColor",
          foreground: r,
          ...l
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, a.Z)(l),
          width: n,
          height: t,
          viewBox: "0 0 430 430",
          children: (0, i.jsx)("path", {
            className: r,
            color: o,
            d: "M187.9,308.1c17.9-13.5,43-13.7,61.1-0.3c1.9,1.3,2.4,4,1.1,5.8s-3.7,2.3-5.6,0.9l-0.3-0.3 c-15.1-11.3-36.3-11.2-51.3,0.1c-0.8,0.5-1.6,0.8-2.4,0.8c-1.2,0-2.4-0.5-3.2-1.6C185.8,312,186.2,309.3,187.9,308.1 M124.4,236 c11.7,0,21.3,9.4,21.3,21.1s-9.4,21.1-21.1,21.1c-11.7,0-21.1-9.4-21.1-21.1C103.1,245.6,112.7,236,124.4,236 M315,236 c11.7,0,21.3,9.4,21.3,21.3c0,11.7-9.4,21.1-21.1,21.1s-21.1-9.4-21.1-21.1C294,245.6,303.5,236,315,236 M347.8,307.2 c2-0.3,4-0.7,6-1.2c2.3-0.5,4.4,0.7,5,2.9c0.7,2.1-0.7,4.4-2.8,5c-2.3,0.7-4.6,1.1-7,1.3c-0.1,0-0.3,0-0.5,0c-2,0-3.7-1.5-4-3.6 C344.1,309.7,345.7,307.6,347.8,307.2 M128.1,87.2l-0.3,0.1c-14.3,5.8-23.6,19.5-23.6,35.1c0,8.5,2.9,16.6,8.5,23.5 c0,0,0,0.1,0.1,0.1l0,0c0.1,0.1,11.3,15.3,31.4,16.9c2.3,0.1,3.9,2.1,3.7,4.4c-0.1,2.1-2,3.7-4,3.7c-0.1,0-0.3,0-0.3,0 c-18.9-1.5-30.8-12.8-35.3-17.8l-4.6,1.7c-0.1,0.1-0.3,0.1-0.5,0.3c-25.6,9.6-42.2,32.1-42.2,57.5c0,10.6,3.1,21.1,8.6,30.4 c0.7,1.1,0.8,2.3,0.4,3.3c-0.3,1.2-1.2,2-2.3,2.5C36.2,263.1,16,293.6,16,327c0,47.6,39.9,86.2,88.9,86.2c32.4,0,68-6.2,106.1-18.5 c3.1-1.3,39.5-16.7,91.1-14.5c2.3,0.1,4,2,3.9,4.3c-0.1,2.3-1.9,4.1-4.3,3.9c-35.6-1.6-64,5.7-78.1,10.4 c26.2,9.6,63.8,14.5,111.7,14.5c43.3,0,78.6-35.2,78.6-78.6c0-20.3-8-39.7-22.1-54.3c-3.2,7.6-10.2,20.2-23.2,28.2 c-0.7,0.4-1.3,0.7-2.1,0.7c-1.3,0-2.7-0.7-3.5-1.9c-1.2-1.9-0.5-4.4,1.3-5.6c16.2-10,21.8-28.7,22.1-29.6 c4.1-17.7,2.4-35.6-4.9-53.3c-4.1-10-10.1-19-17.8-26.8c-1.5-1.6-13.5-11.3-13.5-11.3c-3.6,6.9-12.8,19-33.6,23.6 c-0.3,0-0.5,0.1-0.8,0.1c-1.9,0-3.6-1.3-4-3.2c-0.5-2.3,0.9-4.4,3.1-4.8c23.9-5.2,29.2-21.7,29.6-22.7c3.5-13,2.3-26.4-3.5-39.6 c-8.2-18.9-25.9-32.7-47.4-37.2c-3.5,5.2-12.8,16.1-31.6,20.3c-0.3,0.1-0.7,0.1-0.9,0.1c-1.9,0-3.6-1.3-4-3.2 c-0.5-2.3,0.8-4.4,3.1-4.9c20.2-4.6,27.2-17.7,27.8-18.7c2.8-6.4,2.8-13.7,0.3-21.4c-4.6-14.1-15.9-16.9-31.6-20.9 c-16.9-4.1-37.6-9.3-55.7-31.5c-15.7,10.9-30.8,33.3-29,50.7c1.1,9.8,7.4,16.9,19,20.9c2.1,0.8,3.2,3.1,2.5,5.2 c-0.8,2.1-3.1,3.2-5.2,2.5c-11.8-4.1-18.1-10.5-21.4-17C167,79.1,141.9,80.6,128.1,87.2z",
          }),
        });
      }
    },
    129724: function (e, n, t) {
      t.d(n, {
        A: function () {
          return r;
        },
      });
      var i = t(913527),
        a = t.n(i),
        o = t(388032);
      function r(e) {
        let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : o.intl.string(o.t["Yl1D8/"]),
          i = a().duration(e, "seconds");
        if (i.days() > 0)
          return o.intl.formatToPlainString(n ? o.t.GBLpQ0 : o.t.k2UNz8, {
            days: i.days(),
          });
        if (i.hours() > 0)
          return o.intl.formatToPlainString(n ? o.t.rhY1Rk : o.t.xCjYxM, {
            hours: i.hours(),
          });
        if (i.minutes() > 0)
          return o.intl.formatToPlainString(n ? o.t["XIGt+f"] : o.t.iXLF9f, {
            minutes: i.minutes(),
          });
        else if (e > 0)
          return o.intl.formatToPlainString(n ? o.t.pyvjRk : o.t.geSp4O, {
            seconds: i.seconds(),
          });
        else return n ? o.intl.string(o.t["Yl1D8/"]) : t;
      }
    },
    594193: function (e, n, t) {
      e.exports = {
        container: "container_f9c402",
        guildBadge: "guildBadge_f9c402",
        appIcon: "appIcon_f9c402",
        appIconSize: "appIconSize_f9c402",
        avatar: "avatar_f9c402",
        guildIcon: "guildIcon_f9c402",
        compactAvatar: "compactAvatar_f9c402",
        inviteResolvingGuildName: "inviteResolvingGuildName_f9c402",
        title: "title_f9c402",
        directInviteSubTitle: "directInviteSubTitle_f9c402",
        activityCount: "activityCount_f9c402",
        guildContainer: "guildContainer_f9c402",
        appIn: "appIn_f9c402",
        appGuildName: "appGuildName_f9c402",
        icon: "icon_f9c402",
      };
    },
    939661: function (e, n, t) {
      e.exports = {
        container: "container_ed5743",
        contentWrapper: "contentWrapper_ed5743",
        scroller: "scroller_ed5743",
        noThanksButton: "noThanksButton_ed5743",
        stage: "stage_ed5743",
        inviteContent: "inviteContent_ed5743",
        inviteSplash: "inviteSplash_ed5743",
        buttonGroup: "buttonGroup_ed5743",
        experimentUpsellError: "experimentUpsellError_ed5743",
        experimentUpsellIcon: "experimentUpsellIcon_ed5743",
        experimentUpsellText: "experimentUpsellText_ed5743",
        experimentGetNitro: "experimentGetNitro_ed5743",
        errorContent: "errorContent_ed5743",
        errorImage: "errorImage_ed5743",
        errorBody: "errorBody_ed5743",
        iconContainer: "iconContainer_ed5743",
        iconSparklePlus: "iconSparklePlus_ed5743",
        iconLink: "iconLink_ed5743",
        iconSparkleStar: "iconSparkleStar_ed5743",
      };
    },
    843950: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_a2f8f7",
        lowImportance: "lowImportance_a2f8f7",
      };
    },
    521287: function (e, n, t) {
      e.exports = {
        keyboardShortcutsModal: "keyboardShortcutsModal_ad95dc",
        noBackground: "noBackground_ad95dc",
        noShadow: "noShadow_ad95dc",
        backdrop: "backdrop_ad95dc",
        show: "show_ad95dc",
        modalTitle: "modalTitle_ad95dc",
        content: "content_ad95dc",
        modalSubtitle: "modalSubtitle_ad95dc",
        ddrArrows: "ddrArrows_ad95dc",
        arrow: "arrow_ad95dc",
        active: "active_ad95dc",
        left: "left_ad95dc",
        down: "down_ad95dc",
        up: "up_ad95dc",
        right: "right_ad95dc",
        keybindGroupDescription: "keybindGroupDescription_ad95dc",
        keyboardShortcutList: "keyboardShortcutList_ad95dc",
        keybindGroup: "keybindGroup_ad95dc",
        keybindKey: "keybindKey_ad95dc",
        keyboardShortcutSection: "keyboardShortcutSection_ad95dc",
        keyboardShortcutListGroup: "keyboardShortcutListGroup_ad95dc",
      };
    },
    727688: function (e, n, t) {
      e.exports = {
        ragingDemon: "ragingDemon_f4b0b6",
        visible: "visible_f4b0b6",
        symbol: "symbol_f4b0b6",
        symbolBackground: "symbolBackground_f4b0b6",
        container: "container_f4b0b6",
        animate: "animate_f4b0b6",
        circleInner: "circleInner_f4b0b6",
        circleOuter: "circleOuter_f4b0b6",
        linesSecondary: "linesSecondary_f4b0b6",
        linesMain: "linesMain_f4b0b6",
        primaryExplosion: "primaryExplosion_f4b0b6 explosion_f4b0b6",
        secondaryExplosion: "secondaryExplosion_f4b0b6 explosion_f4b0b6",
      };
    },
    974881: function (e, n, t) {
      e.exports = {
        container: "container_e4a90f",
        stackTrace: "stackTrace_e4a90f",
        stackTraceCode: "stackTraceCode_e4a90f",
        code: "code_e4a90f",
        notificationIcon: "notificationIcon_e4a90f",
      };
    },
    746120: function (e, n, t) {
      e.exports = {
        overlay: "overlay_e17343",
        overlayBackground: "overlayBackground_e17343",
        overlayActive: "overlayActive_e17343",
        overlayLocked: "overlayLocked_e17343",
        previewMode: "previewMode_e17343",
        closeContainer: "closeContainer_e17343",
        invalidContainer: "invalidContainer_e17343",
        inactiveContainer: "inactiveContainer_e17343",
        layoutLocked: "layoutLocked_e17343",
        layoutUnlocked: "layoutUnlocked_e17343 layoutLocked_e17343",
        previewingInGameHeader: "previewingInGameHeader_e17343",
      };
    },
    408704: function (e, n, t) {
      e.exports = { widget: "widget_a7182b" };
    },
    449532: function (e, n, t) {
      e.exports = {
        container: "container_f4e139",
        mobileContainer: "mobileContainer_f4e139",
        quickswitcher: "quickswitcher_f4e139",
        mobileQuickswitcher: "mobileQuickswitcher_f4e139",
        input: "input_f4e139",
        autocompleteQuerySymbol: "autocompleteQuerySymbol_f4e139",
        scroller: "scroller_f4e139",
        protip: "protip_f4e139",
        hasContent: "hasContent_f4e139",
        emptyState: "emptyState_f4e139",
        emptyStateNote: "emptyStateNote_f4e139",
        emptyStateCTA: "emptyStateCTA_f4e139",
        miscContainer: "miscContainer_f4e139",
      };
    },
    431872: function (e, n, t) {
      e.exports = {
        result: "result_e3c1c6",
        contentUnread: "contentUnread_e3c1c6 content_e3c1c6",
        contentDefault: "contentDefault_e3c1c6 content_e3c1c6",
        voiceSummaryContainer: "voiceSummaryContainer_e3c1c6",
        iconContainer: "iconContainer_e3c1c6",
        gameIcon: "gameIcon_e3c1c6",
        gameIconSize: "gameIconSize_e3c1c6",
        icon: "icon_e3c1c6",
        name: "name_e3c1c6",
        misc: "misc_e3c1c6",
        match: "match_e3c1c6",
        badge: "badge_e3c1c6",
        note: "note_e3c1c6",
        username: "username_e3c1c6",
        header: "header_e3c1c6",
        guildIconContainer: "guildIconContainer_e3c1c6 iconContainer_e3c1c6",
        guildIcon: "guildIcon_e3c1c6",
        dmIconContainer: "dmIconContainer_e3c1c6 iconContainer_e3c1c6",
        score: "score_e3c1c6",
      };
    },
    159381: function (e, n, t) {
      e.exports = {
        tutorial: "tutorial_c36bbe",
        shown: "shown_c36bbe",
        arrowGroup: "arrowGroup_c36bbe",
        right: "right_c36bbe",
        arrowContainer: "arrowContainer_c36bbe",
        horizontal: "horizontal_c36bbe",
        diag1: "diag1_c36bbe",
        diag2: "diag2_c36bbe",
        arrowIcon: "arrowIcon_c36bbe",
        tutorialMessages: "tutorialMessages_c36bbe",
        searchMessage: "searchMessage_c36bbe message_c36bbe",
        selectMessage: "selectMessage_c36bbe message_c36bbe",
        hasQuery: "hasQuery_c36bbe",
      };
    },
  },
]);
//# sourceMappingURL=534042611fa58e94232b.js.map
