"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90628"],
  {
    231443: function (e) {
      e.exports = "/assets/e04bcb7316f7205e85fb.svg";
    },
    74830: function (e) {
      e.exports = "/assets/23a7a3fd6624342117bf.svg";
    },
    206818: function (e) {
      e.exports = "/assets/17a91e9b4e7eb3921ed5.svg";
    },
    73117: function (e, s, n) {
      e.exports = n.p + "39b91170d9f2309e4c5e.mov";
    },
    988868: function (e, s, n) {
      e.exports = n.p + "15aad6b83736f221e23b.mp4";
    },
    554355: function (e) {
      e.exports = "/assets/fb70c6325a7d728cb6d0.png";
    },
    991989: function (e, s, n) {
      e.exports = n.p + "48ad19e80083bee682d2.webm";
    },
    787462: function (e, s, n) {
      e.exports = n.p + "a476863d4f441618840f.mov";
    },
    635507: function (e, s, n) {
      e.exports = n.p + "87c3abd90e246db4b38a.mp4";
    },
    470794: function (e) {
      e.exports = "/assets/7df11a68a272724be266.png";
    },
    886777: function (e, s, n) {
      e.exports = n.p + "b235c36699192662a3fe.webm";
    },
    588705: function (e, s, n) {
      n.d(s, {
        R: function () {
          return f;
        },
      }),
        n(411104);
      var t = n(735250),
        a = n(470079),
        l = n(442837),
        r = n(481060),
        i = n(388905),
        u = n(686546),
        o = n(925329),
        c = n(372769),
        m = n(726745),
        d = n(973616),
        I = n(131704),
        N = n(601964),
        _ = n(598077),
        E = n(594174),
        x = n(51144),
        p = n(981631),
        T = n(888592),
        g = n(245335),
        j = n(689938),
        h = n(658797);
      let f = () =>
          (0, t.jsxs)(a.Fragment, {
            children: [
              (0, t.jsx)(i.qE, {
                src: null,
                size: r.AvatarSizes.DEPRECATED_SIZE_100,
                className: h.avatar,
              }),
              (0, t.jsx)(i.DK, {
                children:
                  j.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN,
              }),
              (0, t.jsx)(i.Dx, {
                className: h.inviteResolvingGuildName,
                children: j.Z.Messages.LOADING,
              }),
            ],
          }),
        A = (e) => {
          let { guild: s, user: n, application: a, compact: l } = e;
          if (null != a)
            return (0, t.jsx)(o.Z, {
              className: h.appIcon,
              game: a,
              size: h.appIconSize,
            });
          if (null != n)
            return (0, t.jsx)(i.qE, {
              src: null != n ? n.getAvatarURL(void 0, 80) : null,
              size: r.AvatarSizes.SIZE_80,
              className: l ? h.compactAvatar : h.avatar,
            });
          if (null != s)
            return (0, t.jsx)(u.ZP, {
              mask: u.ZP.Masks.SQUIRCLE,
              width: 64,
              height: 64,
              className: h.guildIcon,
              children: (0, t.jsx)(i.Vj, {
                guild: s,
                size: i.Vj.Sizes.LARGER,
                animate: !0,
              }),
            });
          else return null;
        };
      s.Z = (e) => {
        var s;
        let n,
          a,
          u,
          {
            invite: o,
            disableUser: f = !1,
            error: S,
            flatActivityCount: v = !1,
            isRegister: M = !1,
          } = e,
          { currentUser: R, multiAccounts: O } = (0, l.cj)(
            [m.Z, E.default],
            () => ({
              currentUser: E.default.getCurrentUser(),
              multiAccounts: m.Z.getUsers(),
            }),
          );
        if (null == o) return null;
        let D = null != o.guild ? new N.ZP(o.guild) : null,
          L = null != o.channel ? (0, I.jD)(o.channel) : null,
          Z =
            null != o.target_application ? new d.Z(o.target_application) : null,
          C = f || null == o.inviter ? null : new _.Z(o.inviter),
          b =
            !(
              (null != o.approximate_member_count &&
                o.approximate_member_count > 100) ||
              (null != D && D.hasFeature(p.oNc.COMMUNITY))
            ) && null != C,
          V = null,
          B = !1;
        if (null != D)
          (V =
            null == C
              ? j.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
              : j.Z.Messages.AUTH_MESSAGE_INVITED_BY.format({
                  username: x.ZP.getFormattedName(C),
                })),
            o.target_type === g.Iq.STREAM &&
              null != o.target_user &&
              (V = j.Z.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                username: x.ZP.getFormattedName(o.target_user),
              })),
            o.target_type === g.Iq.EMBEDDED_APPLICATION &&
              null != o.target_application &&
              (V =
                null != C
                  ? j.Z.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
                      username: x.ZP.getFormattedName(C),
                    })
                  : j.Z.Messages.AUTH_MESSAGE_INVITED_TO_PLAY),
            b &&
              null == Z &&
              (n = (0, t.jsx)(i.Vj, {
                className: h.icon,
                guild: D,
                size: i.Vj.Sizes.SMALL,
              })),
            (a = D.name),
            null != Z &&
              ((a = Z.name),
              (u = (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)(i.DK, {
                    className: h.appIn,
                    children: j.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_IN,
                  }),
                  (0, t.jsxs)("div", {
                    className: h.guildContainer,
                    children: [
                      (0, t.jsx)(i.Vj, { guild: D, size: i.Vj.Sizes.SMALL }),
                      (0, t.jsx)(r.Text, {
                        tag: "span",
                        variant: "text-lg/normal",
                        color: "header-primary",
                        className: h.appGuildName,
                        children: D.name,
                      }),
                    ],
                  }),
                ],
              })));
        else if (null != L) {
          if (null == C) throw Error("no inviter in group DM invite");
          let e = x.ZP.getFormattedName(C);
          null != L.name && "" !== L.name
            ? ((V = j.Z.Messages.AUTH_MESSAGE_INVITED_BY.format({
                username: e,
              })),
              (a = L.name),
              null != L.icon &&
                (n = (0, t.jsx)(i.MC, {
                  channel: L,
                  size: r.AvatarSizes.SIZE_32,
                })))
            : ((V =
                j.Z.Messages
                  .INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM),
              (a = e));
        } else if (null != C) {
          let e = x.ZP.getFormattedName(C, !0);
          (a = j.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format(
            { username: e },
          )),
            (B = !0),
            (u =
              null != S
                ? null
                : (0, t.jsx)(i.DK, {
                    className: h.directInviteSubTitle,
                    children: M
                      ? j.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format(
                          { username: e },
                        )
                      : j.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format(
                          { username: e },
                        ),
                  }));
        }
        return (0, t.jsxs)("div", {
          className: h.container,
          children: [
            (0, t.jsx)(A, {
              application: Z,
              guild: D,
              user: b ? C : null,
              compact: B,
            }),
            null != S
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(i.DK, {
                      children: j.Z.Messages.INVITE_MODAL_ERROR_TITLE,
                    }),
                    (0, t.jsx)(i.Dx, { children: S }),
                  ],
                })
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(i.DK, { children: V }),
                    (0, t.jsxs)(i.Dx, {
                      className: h.title,
                      children: [
                        null != D
                          ? (0, t.jsx)(c.Z, {
                              guild: D,
                              className: h.guildBadge,
                              tooltipPosition: "left",
                            })
                          : null,
                        n,
                        a,
                      ],
                    }),
                  ],
                }),
            u,
            null != Z ||
            B ||
            (null == o
              ? void 0
              : null === (s = o.guild) || void 0 === s
                ? void 0
                : s.id) === T.fQ
              ? null
              : (0, t.jsx)(i.EJ, {
                  className: h.activityCount,
                  online: o.approximate_presence_count,
                  total: o.approximate_member_count,
                  flat: v,
                }),
            O.length > 1 ? (0, t.jsx)(i.jQ, { user: R }) : null,
          ],
        });
      };
    },
    388905: function (e, s, n) {
      n.d(s, {
        DK: function () {
          return T;
        },
        Dx: function () {
          return p;
        },
        EJ: function () {
          return O;
        },
        Ee: function () {
          return g;
        },
        Hh: function () {
          return R;
        },
        II: function () {
          return S;
        },
        MC: function () {
          return A;
        },
        Vj: function () {
          return f;
        },
        gO: function () {
          return v;
        },
        i_: function () {
          return M;
        },
        jQ: function () {
          return D;
        },
        qE: function () {
          return h;
        },
        v6: function () {
          return L;
        },
        zx: function () {
          return j;
        },
      }),
        n(536091);
      var t = n(735250);
      n(470079);
      var a = n(120356),
        l = n.n(a),
        r = n(481060),
        i = n(43267),
        u = n(905656),
        o = n(600164),
        c = n(313201),
        m = n(565138),
        d = n(361207),
        I = n(63063),
        N = n(981631),
        _ = n(689938),
        E = n(878145);
      let x = r.Avatar;
      null == x && (x = () => null);
      let p = (e) => {
          let { className: s, id: n, children: a } = e;
          return (0, t.jsx)(r.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: l()(E.title, s),
            id: n,
            children: a,
          });
        },
        T = (e) => {
          let { className: s, children: n } = e;
          return (0, t.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: s,
            children: n,
          });
        },
        g = (e) => {
          let { className: s, src: n } = e;
          return (0, t.jsx)("img", {
            alt: "",
            src: n,
            className: l()(E.image, s),
          });
        },
        j = (e) => {
          let { className: s, ...n } = e,
            a = n.look === r.Button.Looks.LINK;
          return (0, t.jsx)(r.Button, {
            size: a ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
            fullWidth: !a,
            className: l()(s, { [E.button]: !a, [E.linkButton]: a }),
            ...n,
          });
        };
      (j.Looks = r.Button.Looks),
        (j.Colors = r.Button.Colors),
        (j.Sizes = r.Button.Sizes);
      let h = (e) => {
          let { className: s, src: n, size: a } = e;
          return (0, t.jsx)(x, {
            src: n,
            size: a,
            className: l()(E.inviteLargeIcon, s),
            "aria-hidden": !0,
          });
        },
        f = (e) => {
          let { guild: s, size: n, animate: a = !1, className: l } = e;
          return (0, t.jsx)(m.Z, {
            active: !0,
            guild: s,
            size: n,
            animate: a,
            className: l,
          });
        };
      f.Sizes = m.Z.Sizes;
      let A = (e) => {
        let { className: s, channel: n, size: a } = e;
        return (0, t.jsx)(x, {
          src: (0, i.x)(n),
          size: a,
          className: l()(E.inviteIcon, s),
          "aria-hidden": !0,
        });
      };
      A.Sizes = r.AvatarSizes;
      let S = (e) => {
          let {
              label: s,
              error: n,
              placeholder: a,
              value: i,
              className: u,
              inputClassName: o,
              setRef: m,
              type: d = "text",
              onChange: I,
              autoComplete: N,
              autoFocus: _,
              maxLength: x,
              spellCheck: p,
              name: T,
              description: g,
              required: j,
              onFocus: h,
              onBlur: f,
            } = e,
            A = (0, c.Dt)();
          return (0, t.jsxs)(r.FormItem, {
            title: s,
            error: n,
            className: u,
            required: j,
            tag: "label",
            htmlFor: A,
            children: [
              (0, t.jsx)(r.TextInput, {
                name: T,
                type: d,
                value: i,
                inputRef: m,
                placeholder: a,
                inputClassName: l()(o, { [E.inputError]: null != n }),
                "aria-label": s,
                onChange: I,
                autoComplete: N,
                autoFocus: _,
                maxLength: x,
                spellCheck: p,
                id: A,
                onFocus: h,
                onBlur: f,
              }),
              null != g
                ? (0, t.jsx)(r.FormText, {
                    type: r.FormText.Types.DESCRIPTION,
                    className: E.description,
                    children: g,
                  })
                : null,
            ],
          });
        },
        v = (e) => {
          let { className: s, children: n } = e;
          return (0, t.jsx)("div", { className: l()(E.block, s), children: n });
        },
        M = (e) => {
          let { className: s, children: n, isProminent: a } = e;
          return (0, t.jsx)(r.Text, {
            variant: a ? "text-sm/normal" : "text-xs/normal",
            className: l()(E.subText, s),
            children: n,
          });
        },
        R = (e) => {
          let { className: s } = e;
          return (0, t.jsx)(o.Z, {
            direction: o.Z.Direction.VERTICAL,
            align: o.Z.Align.CENTER,
            className: s,
            children: (0, t.jsx)(u.Z, { className: E.spinnerVideo }),
          });
        },
        O = (e) => {
          let s,
            {
              online: n,
              total: a,
              className: i,
              flat: u,
              textClassName: c,
            } = e;
          return null == a
            ? null
            : (null != n &&
                n > 0 &&
                (s = (0, t.jsxs)("div", {
                  className: l()(E.pill, E.pillOnline, u && E.pillFlat),
                  children: [
                    (0, t.jsx)("i", { className: E.pillIconOnline }),
                    (0, t.jsx)(r.Text, {
                      tag: "span",
                      className: l()(E.pillMessage, c),
                      variant: "text-sm/normal",
                      children:
                        _.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                          { membersOnline: n },
                        ),
                    }),
                  ],
                })),
              (0, t.jsxs)(o.Z, {
                justify: o.Z.Justify.CENTER,
                className: i,
                children: [
                  s,
                  (0, t.jsxs)("div", {
                    className: l()(E.pill, u && E.pillFlat),
                    children: [
                      (0, t.jsx)("i", { className: E.pillIconTotal }),
                      (0, t.jsx)(r.Text, {
                        tag: "span",
                        className: l()(E.pillMessage, c),
                        variant: "text-sm/normal",
                        children:
                          _.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: a },
                          ),
                      }),
                    ],
                  }),
                ],
              }));
        },
        D = (e) => {
          let { user: s } = e;
          return null == s
            ? null
            : (0, t.jsxs)("div", {
                className: E.joiningAs,
                children: [
                  (0, t.jsx)(r.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      _.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS,
                  }),
                  (0, t.jsx)(h, {
                    className: E.joiningAsAvatar,
                    src: s.getAvatarURL(void 0, 24),
                    size: r.AvatarSizes.SIZE_24,
                    "aria-label": s.username,
                  }),
                  (0, t.jsx)(r.Text, {
                    className: E.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: s.username,
                  }),
                ],
              });
        },
        L = (e) => {
          let { className: s } = e;
          return (0, t.jsxs)(v, {
            className: s,
            children: [
              (0, t.jsx)(j, {
                onClick: () => window.open((0, d.t3)()),
                children: _.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                  platform: (0, d.DW)(),
                }),
              }),
              (0, t.jsx)(M, {
                className: E.downloadButtonSubtext,
                children: _.Z.Messages.INCOMPATIBLE_BROWSER.format({
                  supportedBrowserURL: I.Z.getArticleURL(
                    N.BhN.SUPPORTED_BROWSERS,
                  ),
                }),
              }),
            ],
          });
        };
      s.ZP = (e) => {
        let {
          className: s,
          contentClassName: n,
          tag: a = "section",
          onSubmit: i,
          children: u,
          expanded: o = !1,
          theme: c = N.BRd.DARK,
          style: m,
        } = e;
        return (0, t.jsx)(r.ThemeProvider, {
          theme: c,
          children: (e) =>
            (0, t.jsxs)(a, {
              "data-theme": c,
              "data-disable-adaptive-theme": !0,
              onSubmit: i,
              style: m,
              className: l()(o ? E.authBoxExpanded : E.authBox, e, s),
              children: [
                (0, t.jsx)("div", { className: E.discordLogo }),
                (0, t.jsx)("div", {
                  className: l()(E.centeringWrapper, n),
                  children: u,
                }),
              ],
            }),
        });
      };
    },
    905656: function (e, s, n) {
      n(733860);
      var t = n(735250),
        a = n(470079),
        l = n(780384),
        r = n(481060),
        i = n(197344),
        u = n(526167),
        o = n(70097),
        c = n(981631),
        m = n(73117),
        d = n(988868),
        I = n(554355),
        N = n(991989),
        _ = n(787462),
        E = n(635507),
        x = n(470794),
        p = n(886777);
      function T(e) {
        let {
            movDark: s = m,
            movLight: n = _,
            mp4Dark: a = d,
            mp4Light: l = E,
            pngDark: r = I,
            pngLight: i = x,
            webmDark: o = N,
            webmLight: T = p,
          } = e,
          g = (0, u.vu)(),
          j = [
            (0, t.jsx)("source", { src: a, type: "video/mp4" }, "mp4"),
            (0, t.jsx)("img", { alt: "", src: r }, "png"),
          ],
          h = [
            (0, t.jsx)("source", { src: l, type: "video/mp4" }, "mp4"),
            (0, t.jsx)("img", { alt: "", src: i }, "png"),
          ];
        return (
          (g > 52 || -1 === g) &&
            (j.unshift(
              (0, t.jsx)("source", { src: o, type: "video/webm" }, "webm"),
            ),
            h.unshift(
              (0, t.jsx)("source", { src: T, type: "video/webm" }, "webm"),
            )),
          (0, u.rO)() &&
            (j.unshift(
              (0, t.jsx)("source", { src: s, type: "video/mp4" }, "hevc"),
            ),
            h.unshift(
              (0, t.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            )),
          { [c.BRd.DARK]: j, [c.BRd.LIGHT]: h }
        );
      }
      let g = i.Z.getAppSpinnerSources(),
        j = null != g ? T(g) : null,
        h = T({});
      s.Z = (e) => {
        var s;
        let {
            loop: n = !0,
            autoPlay: i = !0,
            setRef: u,
            className: m,
            onReady: d,
          } = e,
          { theme: I } = (0, r.useThemeContext)(),
          { reducedMotion: N } = a.useContext(
            r.AccessibilityPreferencesContext,
          ),
          _ = h;
        null != j && (_ = j);
        let E =
          null !== (s = _[(0, l.wj)(I) ? c.BRd.DARK : c.BRd.LIGHT]) &&
          void 0 !== s
            ? s
            : _[c.BRd.DARK];
        return (0, t.jsx)(
          o.Z,
          {
            ref: u,
            onLoadedData: d,
            className: m,
            loop: !N.enabled && n,
            autoPlay: !N.enabled && i,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: E,
          },
          I,
        );
      };
    },
    888592: function (e, s, n) {
      var t, a;
      n.d(s, {
        fQ: function () {
          return l;
        },
        tF: function () {
          return t;
        },
      }),
        ((a = t || (t = {})).STUDENT_PROMPT = "STUDENT_PROMPT"),
        (a.VERIFY_EMAIL = "VERIFY_EMAIL"),
        (a.VERIFY_PIN = "VERIFY_PIN"),
        (a.SELECT_SCHOOL = "SELECT_SCHOOL"),
        (a.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH"),
        (a.SUBMIT_SCHOOL = "SUBMIT_SCHOOL"),
        (a.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION"),
        (a.EMAIL_WAITLIST = "EMAIL_WAITLIST");
      let l = "884924873015689226";
    },
  },
]);
//# sourceMappingURL=b595a2694f43514497d1.js.map
