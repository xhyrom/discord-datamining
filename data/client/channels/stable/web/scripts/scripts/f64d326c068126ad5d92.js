"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52205"],
  {
    775322: function (e) {
      e.exports = "/assets/e5e07cf5a6e7f19be45b.svg";
    },
    853453: function (e) {
      e.exports = "/assets/3cfc93ceb08d74acbcf8.svg";
    },
    588705: function (e, t, n) {
      n.d(t, {
        R: function () {
          return C;
        },
      }),
        n(411104);
      var i = n(200651),
        r = n(192379),
        a = n(442837),
        l = n(481060),
        o = n(388905),
        c = n(686546),
        s = n(925329),
        d = n(372769),
        u = n(44609),
        f = n(47343),
        _ = n(973616),
        g = n(131704),
        m = n(601964),
        p = n(598077),
        b = n(594174),
        v = n(51144),
        h = n(981631),
        T = n(888592),
        S = n(245335),
        I = n(388032),
        x = n(594193);
      let C = () =>
          (0, i.jsxs)(r.Fragment, {
            children: [
              (0, i.jsx)(o.qE, {
                src: null,
                size: l.AvatarSizes.DEPRECATED_SIZE_100,
                className: x.avatar,
              }),
              (0, i.jsx)(o.DK, { children: I.intl.string(I.t["3rE1Pz"]) }),
              (0, i.jsx)(o.Dx, {
                className: x.inviteResolvingGuildName,
                children: I.intl.string(I.t.ZTNur6),
              }),
            ],
          }),
        E = (e) => {
          let { guild: t, user: n, application: r, compact: a } = e;
          if (null != r)
            return (0, i.jsx)(s.Z, {
              className: x.appIcon,
              game: r,
              size: x.appIconSize,
            });
          if (null != n)
            return (0, i.jsx)(o.qE, {
              src: null != n ? n.getAvatarURL(void 0, 80) : null,
              size: l.AvatarSizes.SIZE_80,
              className: a ? x.compactAvatar : x.avatar,
            });
          if (null != t)
            return (0, i.jsx)(c.ZP, {
              mask: c.ZP.Masks.SQUIRCLE,
              width: 64,
              height: 64,
              className: x.guildIcon,
              children: (0, i.jsx)(o.Vj, {
                guild: t,
                size: o.Vj.Sizes.LARGER,
                animate: !0,
              }),
            });
          else return null;
        };
      t.Z = (e) => {
        var t;
        let n,
          r,
          c,
          {
            invite: s,
            disableUser: C = !1,
            error: N,
            flatActivityCount: R = !1,
            isRegister: B = !1,
          } = e,
          O = (0, u.WR)({ location: "invite" }),
          { currentUser: L } = (0, a.cj)([b.default], () => ({
            currentUser: b.default.getCurrentUser(),
          }));
        if (null == s) return null;
        let P = null != s.guild ? new m.ZP(s.guild) : null,
          j = null != s.channel ? (0, g.jD)(s.channel) : null,
          w =
            null != s.target_application
              ? new _.ZP(s.target_application)
              : null,
          A = C || null == s.inviter ? null : new p.Z(s.inviter),
          D =
            !(
              (null != s.approximate_member_count &&
                s.approximate_member_count > 100) ||
              (null != P && P.hasFeature(h.oNc.COMMUNITY))
            ) && null != A,
          k = null,
          Z = !1;
        if (null != P)
          (k =
            null == A
              ? I.intl.string(I.t["3rE1Pz"])
              : I.intl.formatToPlainString(I.t["5u47vb"], {
                  username: v.ZP.getFormattedName(A),
                })),
            s.target_type === S.Iq.STREAM &&
              null != s.target_user &&
              (k = I.intl.formatToPlainString(I.t.x2L32d, {
                username: v.ZP.getFormattedName(s.target_user),
              })),
            s.target_type === S.Iq.EMBEDDED_APPLICATION &&
              null != s.target_application &&
              (k =
                null != A
                  ? I.intl.formatToPlainString(I.t.UW1Cam, {
                      username: v.ZP.getFormattedName(A),
                    })
                  : I.intl.string(I.t.ENSuNz)),
            D &&
              null == w &&
              (n = (0, i.jsx)(o.Vj, {
                className: x.icon,
                guild: P,
                size: o.Vj.Sizes.SMALL,
              })),
            (r = P.name),
            null != w &&
              ((r = w.name),
              (c = (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)(o.DK, {
                    className: x.appIn,
                    children: I.intl.string(I.t["3gg9fH"]),
                  }),
                  (0, i.jsxs)("div", {
                    className: x.guildContainer,
                    children: [
                      (0, i.jsx)(o.Vj, { guild: P, size: o.Vj.Sizes.SMALL }),
                      (0, i.jsx)(l.Text, {
                        tag: "span",
                        variant: "text-lg/normal",
                        color: "header-primary",
                        className: x.appGuildName,
                        children: P.name,
                      }),
                    ],
                  }),
                ],
              })));
        else if (null != j) {
          if (null == A) throw Error("no inviter in group DM invite");
          let e = v.ZP.getFormattedName(A);
          null != j.name && "" !== j.name
            ? ((k = I.intl.formatToPlainString(I.t["5u47vb"], { username: e })),
              (r = j.name),
              null != j.icon &&
                (n = (0, i.jsx)(o.MC, {
                  channel: j,
                  size: l.AvatarSizes.SIZE_32,
                })))
            : ((k = I.intl.string(I.t.OsdY8P)), (r = e));
        } else if (null != A) {
          let e = v.ZP.getFormattedName(A, !0);
          (r = I.intl.formatToPlainString(I.t["4aF92d"], { username: e })),
            (Z = !0),
            (c =
              null != N
                ? null
                : (0, i.jsx)(o.DK, {
                    className: x.directInviteSubTitle,
                    children: B
                      ? I.intl.format(I.t["6r4JiY"], { username: e })
                      : I.intl.format(I.t.Quj7HR, { username: e }),
                  }));
        }
        return (0, i.jsxs)("div", {
          className: x.container,
          children: [
            (0, i.jsx)(E, {
              application: w,
              guild: P,
              user: D ? A : null,
              compact: Z,
            }),
            null != N
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(o.DK, { children: I.intl.string(I.t.mDFGFh) }),
                    (0, i.jsx)(o.Dx, { children: N }),
                  ],
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(o.DK, { children: k }),
                    (0, i.jsxs)(o.Dx, {
                      className: x.title,
                      children: [
                        null != P
                          ? (0, i.jsx)(d.Z, {
                              guild: P,
                              className: x.guildBadge,
                              tooltipPosition: "left",
                            })
                          : null,
                        n,
                        r,
                      ],
                    }),
                  ],
                }),
            c,
            null != w ||
            Z ||
            (null == s
              ? void 0
              : null === (t = s.guild) || void 0 === t
                ? void 0
                : t.id) === T.fQ
              ? null
              : (0, i.jsx)(o.EJ, {
                  className: x.activityCount,
                  online: s.approximate_presence_count,
                  total: s.approximate_member_count,
                  flat: R,
                }),
            O ? (0, i.jsx)(f.R, {}) : (0, i.jsx)(o.jQ, { user: L }),
          ],
        });
      };
    },
    590965: function (e, t, n) {
      let i;
      n(47120), n(653041);
      var r,
        a,
        l,
        o,
        c = n(442837),
        s = n(570140),
        d = n(413605),
        u = n(703656),
        f = n(131704),
        _ = n(601964),
        g = n(592125),
        m = n(430824),
        p = n(701190),
        b = n(496675),
        v = n(594174),
        h = n(998502),
        T = n(981631),
        S = n(176505);
      let I = T.IlC.APP,
        x = !1,
        C = !1,
        E = [];
      function N() {
        x = !0;
      }
      class R extends (r = c.ZP.Store) {
        initialize() {
          this.waitFor(m.Z, p.Z, v.default);
        }
        isOpen() {
          let e = __OVERLAY__ ? T.IlC.OVERLAY : T.IlC.APP;
          return !!(x && E.length > 0 && I === e);
        }
        getProps() {
          return {
            invite: E.length > 0 ? E[0][0] : null,
            error: null != i && "" !== i ? i : null,
            submitting: C,
          };
        }
      }
      (o = "InviteModalStore"),
        (l = "displayName") in (a = R)
          ? Object.defineProperty(a, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[l] = o),
        (t.Z = new R(s.Z, {
          OVERLAY_INITIALIZE: N,
          CONNECTION_OPEN: N,
          CONNECTION_CLOSED: function () {
            x = !1;
          },
          INVITE_MODAL_OPEN: function (e) {
            let t = e.invite;
            if (null == t) return !1;
            if (
              !(
                t.state === T.r2o.EXPIRED ||
                t.state === T.r2o.BANNED ||
                t.state === T.r2o.ERROR
              )
            ) {
              let { channel: e, guild: n } = t;
              if (null == e) return !1;
              if ((0, f.bc)(e.type)) {
                if (null != g.Z.getChannel(e.id))
                  return (0, u.XU)(T.ME, e.id), h.ZP.focus(), !1;
              } else {
                if (null == n) return !1;
                if (null != m.Z.getGuild(n.id) && !(0, d.TY)(t)) {
                  let e = (function (e) {
                    if ((0, d.W6)(e)) return S.oC.ROLE_SUBSCRIPTIONS;
                    let { channel: t } = e;
                    if (null != t) {
                      let e = g.Z.getChannel(t.id);
                      if (b.Z.can(T.Plq.VIEW_CHANNEL, e)) return t.id;
                    }
                    return null;
                  })(t);
                  return (0, u.XU)(n.id, e), h.ZP.focus(), !1;
                }
              }
            }
            if (
              E.some((e) => {
                let [n] = e;
                return n.code === t.code;
              })
            )
              return !1;
            (I = e.context), (C = !1);
            let n = (function (e) {
              let {
                  approximate_member_count: t,
                  approximate_presence_count: n,
                  code: i,
                  state: r,
                  target_type: a,
                  target_user: l,
                  target_application: o,
                  stage_instance: c,
                  type: s,
                  channel: d,
                  guild: u,
                  is_nickname_changeable: f,
                } = e,
                g = {
                  code: i,
                  state: r,
                  approximate_member_count: t,
                  approximate_presence_count: n,
                  target_type: a,
                  target_user: l,
                  target_application: o,
                  stage_instance: c,
                  type: s,
                  is_nickname_changeable: f,
                };
              return (
                null != d && (g.channel = { ...d }),
                null != u && (g.guild = new _.ZP(u)),
                null != e.inviter && (g.inviter = { ...e.inviter }),
                g
              );
            })(t);
            E.push([n, e.resolve]);
          },
          INVITE_MODAL_CLOSE: function () {
            if (((i = null), (C = !1), E.length > 0)) {
              let [, e] = E.shift();
              null != e && e();
            }
          },
          INVITE_ACCEPT: function () {
            C = !0;
          },
          INVITE_MODAL_ERROR: function (e) {
            let { message: t } = e;
            (i = t), (C = !1);
          },
        }));
    },
    214852: function (e, t, n) {
      n.d(t, {
        z: function () {
          return l;
        },
      }),
        n(47120);
      var i = n(192379),
        r = n(442837),
        a = n(353926);
      function l(e) {
        let [t, n] = (0, r.Wu)([a.Z], () => [
          a.Z.getAllUserExperimentDescriptors(),
          a.Z.getGuildExperiments(),
        ]);
        i.useEffect(() => {
          e.trigger();
        }, [e, t, n]);
      }
    },
    44609: function (e, t, n) {
      n.d(t, {
        WR: function () {
          return r;
        },
      });
      let i = (0, n(818083).B)({
        kind: "user",
        id: "2025-01_advanced_server_join",
        label: "Advanced Server Join Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable Advanced Server Join",
            config: { enabled: !0 },
          },
        ],
      });
      function r(e) {
        let { location: t } = e;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    731971: function (e, t, n) {
      n.d(t, {
        U1: function () {
          return o;
        },
        XW: function () {
          return i;
        },
        c4: function () {
          return c;
        },
        h6: function () {
          return l;
        },
        oE: function () {
          return r;
        },
        y: function () {
          return a;
        },
      });
      let i = (0, n(15729).U)((e) => ({
          nickname: void 0,
          dmsAllowed: !0,
          showActivity: !0,
          receiveNotifications: !1,
          setNickname: (t) => e({ nickname: t }),
          setDmsAllowed: (t) => e({ dmsAllowed: t }),
          setShowActivity: (t) => e({ showActivity: t }),
          setReceiveNotifications: (t) => e({ receiveNotifications: t }),
          reset: () =>
            e({
              nickname: void 0,
              dmsAllowed: !0,
              showActivity: !0,
              receiveNotifications: !1,
            }),
        })),
        r = () => {
          i.getState().reset();
        },
        a = () => i.getState().nickname,
        l = () => i.getState().dmsAllowed,
        o = () => i.getState().showActivity,
        c = () => i.getState().receiveNotifications;
    },
    47343: function (e, t, n) {
      n.d(t, {
        R: function () {
          return m;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        a = n(120356),
        l = n.n(a),
        o = n(481060),
        c = n(590965),
        s = n(51331),
        d = n(259580),
        u = n(731971),
        f = n(981631),
        _ = n(388032),
        g = n(671149);
      let m = () => {
        var e;
        let {
            nickname: t,
            dmsAllowed: n,
            showActivity: a,
            receiveNotifications: m,
            setNickname: p,
            setDmsAllowed: b,
            setShowActivity: v,
            setReceiveNotifications: h,
          } = (0, u.XW)(),
          [T, S] = r.useState(!1),
          I =
            null === (e = c.Z.getProps().invite) || void 0 === e
              ? void 0
              : e.is_nickname_changeable;
        return (0, i.jsxs)("div", {
          className: l()(g.editProfileContainer, { [g.opened]: T }),
          children: [
            (0, i.jsxs)(o.Clickable, {
              className: g.header,
              onClick: () => S((e) => !e),
              children: [
                (0, i.jsx)("div", {
                  className: g.headerIconWrapper,
                  children: (0, i.jsx)(o.SettingsIcon, { size: "md" }),
                }),
                (0, i.jsxs)("div", {
                  className: g.title,
                  children: [
                    (0, i.jsx)(o.Text, {
                      variant: "eyebrow",
                      color: "header-secondary",
                      children: _.intl.string(_.t.A5wHQ0),
                    }),
                    (0, i.jsx)(o.Text, {
                      variant: "text-sm/medium",
                      color: "interactive-normal",
                      children: _.intl.string(_.t.UKCSER),
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: l()(g.caret, { [g.opened]: T }),
                  children: (0, i.jsx)(d.Z, {
                    width: 18,
                    height: 18,
                    direction: d.Z.Directions.UP,
                  }),
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: l()(
                g.customizationSection,
                { [g.opened]: T },
                I ? null : g.condensed,
              ),
              children: [
                I &&
                  (0, i.jsxs)("div", {
                    className: g.serverNickname,
                    children: [
                      (0, i.jsx)(o.Text, {
                        variant: "eyebrow",
                        color: "header-secondary",
                        children: _.intl.string(_.t.me1lRk),
                      }),
                      (0, i.jsx)(o.TextInput, {
                        placeholder: _.intl.string(_.t["09Q8ys"]),
                        maxLength: f.l$U,
                        value: t,
                        onChange: p,
                      }),
                    ],
                  }),
                (0, i.jsx)(s.Z, {
                  title: _.intl.string(_.t["/2ed39"]),
                  value: n,
                  onChange: b,
                }),
                (0, i.jsx)(s.Z, {
                  title: _.intl.string(_.t.bN4m1N),
                  value: a,
                  onChange: v,
                }),
                (0, i.jsx)(s.Z, {
                  title: _.intl.string(_.t.rnrPkZ),
                  value: m,
                  onChange: h,
                }),
              ],
            }),
          ],
        });
      };
    },
    888592: function (e, t, n) {
      var i, r;
      n.d(t, {
        fQ: function () {
          return a;
        },
        tF: function () {
          return i;
        },
      }),
        ((r = i || (i = {})).STUDENT_PROMPT = "STUDENT_PROMPT"),
        (r.VERIFY_EMAIL = "VERIFY_EMAIL"),
        (r.VERIFY_PIN = "VERIFY_PIN"),
        (r.SELECT_SCHOOL = "SELECT_SCHOOL"),
        (r.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH"),
        (r.SUBMIT_SCHOOL = "SUBMIT_SCHOOL"),
        (r.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION"),
        (r.EMAIL_WAITLIST = "EMAIL_WAITLIST");
      let a = "884924873015689226";
    },
    212632: function (e, t, n) {
      n(47120);
      var i = n(200651),
        r = n(192379),
        a = n(120356),
        l = n.n(a),
        o = n(481060),
        c = n(981631),
        s = n(388032),
        d = n(373780),
        u = n(232186);
      let f = 0,
        _ = () => "notification-position-selector-".concat(f++),
        g = (e) => {
          switch (e) {
            case c._vf.TOP_LEFT:
              return s.intl.string(s.t.xlchpa);
            case c._vf.TOP_RIGHT:
              return s.intl.string(s.t["4uHRHB"]);
            case c._vf.BOTTOM_LEFT:
              return s.intl.string(s.t.ovWFnJ);
            case c._vf.BOTTOM_RIGHT:
              return s.intl.string(s.t["M/9V7+"]);
            default:
              return s.intl.string(s.t.AlY4ZW);
          }
        },
        m = [
          c._vf.DISABLED,
          c._vf.TOP_LEFT,
          c._vf.TOP_RIGHT,
          c._vf.BOTTOM_LEFT,
          c._vf.BOTTOM_RIGHT,
        ];
      function p(e) {
        let { position: t, onChange: n } = e,
          [a] = r.useState(() => _()),
          f =
            t === c._vf.DISABLED
              ? s.intl.string(s.t.R6LxVV)
              : s.intl.formatToPlainString(s.t.XXHDMz, { position: g(t) });
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(o.FocusRing, {
              within: !0,
              offset: -2,
              children: (0, i.jsx)("div", {
                className: l()(d.wrapper, {
                  [d.disabledSelected]: t === c._vf.DISABLED,
                }),
                children: m.map((e) =>
                  (0, i.jsxs)(
                    "label",
                    {
                      className: l()({
                        [d.selected]: e === t,
                        [d.disabled]: e === c._vf.DISABLED,
                        [d.topRight]: e === c._vf.TOP_RIGHT,
                        [d.topLeft]: e === c._vf.TOP_LEFT,
                        [d.bottomRight]: e === c._vf.BOTTOM_RIGHT,
                        [d.bottomLeft]: e === c._vf.BOTTOM_LEFT,
                      }),
                      children: [
                        g(e),
                        e === c._vf.DISABLED
                          ? (0, i.jsx)(o.DenyIcon, {
                              size: "md",
                              color: "currentColor",
                              className: d.disabledIcon,
                            })
                          : null,
                        (0, i.jsx)("input", {
                          type: "radio",
                          name: a,
                          value: e,
                          onChange: (t) => n(t, e),
                          className: d.hiddenInput,
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            }),
            (0, i.jsx)(o.FormText, {
              type: o.FormTextTypes.DESCRIPTION,
              className: u.marginTop8,
              children: f,
            }),
          ],
        });
      }
      (p.Positions = c._vf), (t.Z = p);
    },
    460562: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(331595);
      function a(e) {
        let {
          width: t = 32,
          height: n = 32,
          color: a = "currentColor",
          ...l
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.Z)(l),
          width: t,
          height: n,
          viewBox: "0 0 12 12",
          fill: "none",
          children: [
            (0, i.jsx)("path", { d: "M7.25 1H4.75V7.25H7.25V1Z", fill: a }),
            (0, i.jsx)("path", {
              d: "M4.75 9.75C4.75 10.4167 5.33333 11 6 11C6.66667 11 7.25 10.4167 7.25 9.75C7.25 9.08333 6.66667 8.5 6 8.5C5.33333 8.5 4.75 9.08333 4.75 9.75Z",
              fill: a,
            }),
          ],
        });
      }
    },
    671533: function (e, t, n) {
      n(411104);
      var i,
        r,
        a = n(200651);
      n(192379);
      var l = n(120356),
        o = n.n(l),
        c = n(331595),
        s = n(485270);
      ((r = i || (i = {})).LEFT = "LEFT"),
        (r.RIGHT = "RIGHT"),
        (r.UP = "UP"),
        (r.DOWN = "DOWN"),
        (r.UP_LEFT = "UP_LEFT"),
        (r.DOWN_RIGHT = "DOWN_RIGHT");
      let d = (e) => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = "currentColor",
          direction: r,
          foreground: l,
          className: d,
          title: u,
          ...f
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, c.Z)(f),
          width: t,
          height: n,
          className: o()(
            d,
            (function (e) {
              switch (e) {
                case "LEFT":
                  return s.left;
                case "RIGHT":
                  return s.right;
                case "UP":
                  return null;
                case "DOWN":
                  return s.down;
                case "UP_LEFT":
                  return s.upLeft;
                case "DOWN_RIGHT":
                  return s.downRight;
                default:
                  throw Error("Invalid Direction ".concat(e));
              }
            })(r),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != u ? (0, a.jsx)("title", { children: u }) : null,
            (0, a.jsx)("polygon", {
              className: l,
              fill: i,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (d.Directions = i), (t.Z = d);
    },
    88658: function (e, t, n) {
      n.d(t, {
        $6: function () {
          return p;
        },
        YK: function () {
          return u;
        },
        _o: function () {
          return _;
        },
        ac: function () {
          return b;
        },
        bL: function () {
          return m;
        },
        g0: function () {
          return i;
        },
        gl: function () {
          return f;
        },
        rr: function () {
          return g;
        },
        xH: function () {
          return v;
        },
      }),
        n(47120);
      var i,
        r,
        a = n(695346),
        l = n(486472),
        o = n(430824);
      n(626135);
      var c = n(981631),
        s = n(388032);
      let d = 864e5 * c.eBq;
      function u() {
        let e = a.h2.getSetting();
        return (
          0 === l.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          new Set(e)
        );
      }
      function f() {
        let e = a.zA.getSetting();
        return (
          0 === l.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          new Set(e)
        );
      }
      function _() {
        let e = a.SE.getSetting();
        return (
          0 === l.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          new Set(e)
        );
      }
      function g() {
        let e = a.iH.getSetting();
        return (
          0 === l.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          new Set(e)
        );
      }
      function m(e) {
        return (e & c.HGf) === c.HGf
          ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
          : {
              all: !1,
              mutualFriends:
                (e & c.SOq.MUTUAL_FRIENDS) === c.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & c.SOq.MUTUAL_GUILDS) === c.SOq.MUTUAL_GUILDS,
            };
      }
      function p(e, t) {
        return (
          !!(!t.verified || t.isStaff()) ||
          (null != e && d > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((r = i || (i = {}))[(r.UNDECIDED = 0)] = "UNDECIDED"),
        (r[(r.OPTIN = 1)] = "OPTIN"),
        (r[(r.OPTOUT = 2)] = "OPTOUT");
      let b = { 0: void 0, 1: !0, 2: !1 };
      function v() {
        return [
          {
            name: s.intl.string(s.t["/yLMRU"]),
            desc: s.intl.string(s.t["3fzkPj"]),
            value: 1,
          },
          {
            name: s.intl.string(s.t["21fP2d"]),
            desc: s.intl.string(s.t.ggJ9jY),
            value: 2,
          },
          {
            name: s.intl.string(s.t["OWIo8/"]),
            desc: s.intl.string(s.t.HqYXp6),
            value: 0,
          },
        ];
      }
    },
    744149: function (e, t, n) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    594193: function (e, t, n) {
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
    840814: function (e, t, n) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    583535: function (e, t, n) {
      e.exports = {
        tabBarItemContainer: "tabBarItemContainer_e7c031",
        searchFilterCount: "searchFilterCount_e7c031",
        searchBar: "searchBar_e7c031",
      };
    },
    670189: function (e, t, n) {
      n.r(
        (e.exports = {
          standardSidebarView: "standardSidebarView_c25c6d",
          withUpsell: "withUpsell_c25c6d",
          sidebarRegion: "sidebarRegion_c25c6d",
          sidebarRegionScroller: "sidebarRegionScroller_c25c6d",
          sidebar: "sidebar_c25c6d",
          mobileSidebar: "mobileSidebar_c25c6d",
          contentTransitionWrap: "contentTransitionWrap_c25c6d",
          contentRegionScroller: "contentRegionScroller_c25c6d",
          toolsContainer: "toolsContainer_c25c6d",
          tools: "tools_c25c6d",
          contentRegionHiddenSidebar: "contentRegionHiddenSidebar_c25c6d",
          contentRegionShownSidebar: "contentRegionShownSidebar_c25c6d",
          contentRegion: "contentRegion_c25c6d",
          customColumn: "customColumn_c25c6d",
          contentColumn: "contentColumn_c25c6d",
          contentColumnWide: "contentColumnWide_c25c6d",
          contentColumnDefault: "contentColumnDefault_c25c6d",
          contentColumnMinimal: "contentColumnMinimal_c25c6d",
          customHeader: "customHeader_c25c6d",
          customContainer: "customContainer_c25c6d",
          customScroller: "customScroller_c25c6d",
          noticeRegion: "noticeRegion_c25c6d",
          noticeRegionHiddenSidebar: "noticeRegionHiddenSidebar_c25c6d",
          mobileSidebarTools: "mobileSidebarTools_c25c6d",
          flexFullWidth: "flexFullWidth_c25c6d",
          hidden: "hidden_c25c6d",
          mobileContent: "mobileContent_c25c6d",
          mobileContentHeader: "mobileContentHeader_c25c6d",
          hideHamburger: "hideHamburger_c25c6d",
          mobileToolsContainer: "mobileToolsContainer_c25c6d",
          closeIconOnly: "closeIconOnly_c25c6d",
          isMobileAndroid: "isMobileAndroid_c25c6d",
          mobileToolsCloseIcon: "mobileToolsCloseIcon_c25c6d",
          mobileSidebarHeader: "mobileSidebarHeader_c25c6d",
        }),
      );
    },
    971139: function (e, t, n) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    671149: function (e, t, n) {
      e.exports = {
        editProfileContainer: "editProfileContainer_b81758",
        opened: "opened_b81758",
        customizationSection: "customizationSection_b81758",
        condensed: "condensed_b81758",
        header: "header_b81758",
        headerIconWrapper: "headerIconWrapper_b81758",
        title: "title_b81758",
        caret: "caret_b81758",
        serverNickname: "serverNickname_b81758",
      };
    },
    139266: function (e, t, n) {
      e.exports = { container: "container_e39b68", body: "body_e39b68" };
    },
    759821: function (e, t, n) {
      e.exports = {
        yellowMessageBlock: "yellowMessageBlock_b74455 messageBlock_b74455",
        messageBlockIcon: "messageBlockIcon_b74455",
        redMessageBlock: "redMessageBlock_b74455 messageBlock_b74455",
        brownMessageBlock: "brownMessageBlock_b74455 messageBlock_b74455",
      };
    },
    776394: function (e, t, n) {
      e.exports = {
        container: "container_e08e86",
        innerContainer: "innerContainer_e08e86",
        iconWrapper: "iconWrapper_e08e86",
        star: "star_e08e86",
        sparkle: "sparkle_e08e86",
      };
    },
    529819: function (e, t, n) {
      e.exports = {
        statusWarningBlock: "statusWarningBlock_e45fae",
        statusWarningBlockWithCta: "statusWarningBlockWithCta_e45fae",
        horizontalStatusWarningBlock: "horizontalStatusWarningBlock_e45fae",
        verticalStatusWarningBlock: "verticalStatusWarningBlock_e45fae",
        ctaButtonContainer: "ctaButtonContainer_e45fae",
        ctaButton: "ctaButton_e45fae",
        ctaBlackButton: "ctaBlackButton_e45fae",
        ctaButtonText: "ctaButtonText_e45fae",
      };
    },
    373780: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_b877fa",
        disabledSelected: "disabledSelected_b877fa",
        hiddenInput: "hiddenInput_b877fa",
        bottomLeft: "bottomLeft_b877fa option_b877fa",
        bottomRight: "bottomRight_b877fa option_b877fa",
        topLeft: "topLeft_b877fa option_b877fa",
        topRight: "topRight_b877fa option_b877fa",
        disabled: "disabled_b877fa",
        disabledIcon: "disabledIcon_b877fa",
        selected: "selected_b877fa",
      };
    },
    767493: function (e, t, n) {
      n.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    229830: function (e, t, n) {
      e.exports = {
        premiumTrialBadge: "premiumTrialBadge_b089d3",
        premiumTrialBadgeV2: "premiumTrialBadgeV2_b089d3",
        premiumTrialBadgeIcon: "premiumTrialBadgeIcon_b089d3",
        premiumTrialTier0UnacknowledgedBadge:
          "premiumTrialTier0UnacknowledgedBadge_b089d3",
        premiumTrialTier2UnacknowledgedBadge:
          "premiumTrialTier2UnacknowledgedBadge_b089d3",
        premiumDiscountUnacknowledgedBadge:
          "premiumDiscountUnacknowledgedBadge_b089d3",
        premiumTrialAcknowledgedBadge: "premiumTrialAcknowledgedBadge_b089d3",
        premiumTrialBadgeSelected: "premiumTrialBadgeSelected_b089d3",
        premiumOfferBadgeCopy: "premiumOfferBadgeCopy_b089d3",
      };
    },
    844812: function (e, t, n) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    913074: function (e, t, n) {
      e.exports = {
        premiumLabel: "premiumLabel_ae3c77",
        selected: "selected_ae3c77",
        background: "background_ae3c77",
        selectedBackground: "selectedBackground_ae3c77",
        auPromo: "auPromo_ae3c77",
        auPromoSelected: "auPromoSelected_ae3c77",
      };
    },
    684309: function (e, t, n) {
      n.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
    485270: function (e, t, n) {
      e.exports = {
        left: "left_c48316",
        right: "right_c48316",
        down: "down_c48316",
        downRight: "downRight_c48316",
        upLeft: "upLeft_c48316",
      };
    },
  },
]);
//# sourceMappingURL=f64d326c068126ad5d92.js.map
