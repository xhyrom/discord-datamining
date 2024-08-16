"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17764"],
  {
    231443: function (e) {
      e.exports = "/assets/e04bcb7316f7205e85fb.svg";
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
          return S;
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
        p = n(51144),
        x = n(981631),
        T = n(888592),
        g = n(245335),
        j = n(689938),
        A = n(919458);
      let S = () =>
          (0, t.jsxs)(a.Fragment, {
            children: [
              (0, t.jsx)(i.qE, {
                src: null,
                size: r.AvatarSizes.DEPRECATED_SIZE_100,
                className: A.avatar,
              }),
              (0, t.jsx)(i.DK, {
                children:
                  j.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN,
              }),
              (0, t.jsx)(i.Dx, {
                className: A.inviteResolvingGuildName,
                children: j.Z.Messages.LOADING,
              }),
            ],
          }),
        h = (e) => {
          let { guild: s, user: n, application: a, compact: l } = e;
          if (null != a)
            return (0, t.jsx)(o.Z, {
              className: A.appIcon,
              game: a,
              size: A.appIconSize,
            });
          if (null != n)
            return (0, t.jsx)(i.qE, {
              src: null != n ? n.getAvatarURL(void 0, 80) : null,
              size: r.AvatarSizes.SIZE_80,
              className: l ? A.compactAvatar : A.avatar,
            });
          if (null != s)
            return (0, t.jsx)(u.ZP, {
              mask: u.ZP.Masks.SQUIRCLE,
              width: 64,
              height: 64,
              className: A.guildIcon,
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
            disableUser: S = !1,
            error: f,
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
          C = S || null == o.inviter ? null : new _.Z(o.inviter),
          b =
            !(
              (null != o.approximate_member_count &&
                o.approximate_member_count > 100) ||
              (null != D && D.hasFeature(x.oNc.COMMUNITY))
            ) && null != C,
          V = null,
          B = !1;
        if (null != D)
          (V =
            null == C
              ? j.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
              : j.Z.Messages.AUTH_MESSAGE_INVITED_BY.format({
                  username: p.ZP.getFormattedName(C),
                })),
            o.target_type === g.Iq.STREAM &&
              null != o.target_user &&
              (V = j.Z.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                username: p.ZP.getFormattedName(o.target_user),
              })),
            o.target_type === g.Iq.EMBEDDED_APPLICATION &&
              null != o.target_application &&
              (V =
                null != C
                  ? j.Z.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
                      username: p.ZP.getFormattedName(C),
                    })
                  : j.Z.Messages.AUTH_MESSAGE_INVITED_TO_PLAY),
            b &&
              null == Z &&
              (n = (0, t.jsx)(i.Vj, {
                className: A.icon,
                guild: D,
                size: i.Vj.Sizes.SMALL,
              })),
            (a = D.name),
            null != Z &&
              ((a = Z.name),
              (u = (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)(i.DK, {
                    className: A.appIn,
                    children: j.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_IN,
                  }),
                  (0, t.jsxs)("div", {
                    className: A.guildContainer,
                    children: [
                      (0, t.jsx)(i.Vj, { guild: D, size: i.Vj.Sizes.SMALL }),
                      (0, t.jsx)(r.Text, {
                        tag: "span",
                        variant: "text-lg/normal",
                        color: "header-primary",
                        className: A.appGuildName,
                        children: D.name,
                      }),
                    ],
                  }),
                ],
              })));
        else if (null != L) {
          if (null == C) throw Error("no inviter in group DM invite");
          let e = p.ZP.getFormattedName(C);
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
          let e = p.ZP.getFormattedName(C, !0);
          (a = j.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format(
            { username: e },
          )),
            (B = !0),
            (u =
              null != f
                ? null
                : (0, t.jsx)(i.DK, {
                    className: A.directInviteSubTitle,
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
          className: A.container,
          children: [
            (0, t.jsx)(h, {
              application: Z,
              guild: D,
              user: b ? C : null,
              compact: B,
            }),
            null != f
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(i.DK, {
                      children: j.Z.Messages.INVITE_MODAL_ERROR_TITLE,
                    }),
                    (0, t.jsx)(i.Dx, { children: f }),
                  ],
                })
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(i.DK, { children: V }),
                    (0, t.jsxs)(i.Dx, {
                      className: A.title,
                      children: [
                        null != D
                          ? (0, t.jsx)(c.Z, {
                              guild: D,
                              className: A.guildBadge,
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
                  className: A.activityCount,
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
          return g;
        },
        Dx: function () {
          return T;
        },
        EJ: function () {
          return D;
        },
        Ee: function () {
          return j;
        },
        Hh: function () {
          return O;
        },
        II: function () {
          return v;
        },
        MC: function () {
          return f;
        },
        Vj: function () {
          return h;
        },
        gO: function () {
          return M;
        },
        i_: function () {
          return R;
        },
        jQ: function () {
          return L;
        },
        qE: function () {
          return S;
        },
        v6: function () {
          return Z;
        },
        zx: function () {
          return A;
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
        N = n(792125),
        _ = n(981631),
        E = n(689938),
        p = n(986579);
      let x = r.Avatar;
      null == x && (x = () => null);
      let T = (e) => {
          let { className: s, id: n, children: a } = e;
          return (0, t.jsx)(r.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: l()(p.title, s),
            id: n,
            children: a,
          });
        },
        g = (e) => {
          let { className: s, children: n } = e;
          return (0, t.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: s,
            children: n,
          });
        },
        j = (e) => {
          let { className: s, src: n } = e;
          return (0, t.jsx)("img", {
            alt: "",
            src: n,
            className: l()(p.image, s),
          });
        },
        A = (e) => {
          let { className: s, ...n } = e,
            a = n.look === r.Button.Looks.LINK;
          return (0, t.jsx)(r.Button, {
            size: a ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
            fullWidth: !a,
            className: l()(s, { [p.button]: !a, [p.linkButton]: a }),
            ...n,
          });
        };
      (A.Looks = r.Button.Looks),
        (A.Colors = r.Button.Colors),
        (A.Sizes = r.Button.Sizes);
      let S = (e) => {
          let { className: s, src: n, size: a } = e;
          return (0, t.jsx)(x, {
            src: n,
            size: a,
            className: l()(p.inviteLargeIcon, s),
            "aria-hidden": !0,
          });
        },
        h = (e) => {
          let { guild: s, size: n, animate: a = !1, className: l } = e;
          return (0, t.jsx)(m.Z, {
            active: !0,
            guild: s,
            size: n,
            animate: a,
            className: l,
          });
        };
      h.Sizes = m.Z.Sizes;
      let f = (e) => {
        let { className: s, channel: n, size: a } = e;
        return (0, t.jsx)(x, {
          src: (0, i.x)(n),
          size: a,
          className: l()(p.inviteIcon, s),
          "aria-hidden": !0,
        });
      };
      f.Sizes = r.AvatarSizes;
      let v = (e) => {
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
              maxLength: E,
              spellCheck: x,
              name: T,
              description: g,
              required: j,
              onFocus: A,
              onBlur: S,
            } = e,
            h = (0, c.Dt)();
          return (0, t.jsxs)(r.FormItem, {
            title: s,
            error: n,
            className: u,
            required: j,
            tag: "label",
            htmlFor: h,
            children: [
              (0, t.jsx)(r.TextInput, {
                name: T,
                type: d,
                value: i,
                inputRef: m,
                placeholder: a,
                inputClassName: l()(o, { [p.inputError]: null != n }),
                "aria-label": s,
                onChange: I,
                autoComplete: N,
                autoFocus: _,
                maxLength: E,
                spellCheck: x,
                id: h,
                onFocus: A,
                onBlur: S,
              }),
              null != g
                ? (0, t.jsx)(r.FormText, {
                    type: r.FormText.Types.DESCRIPTION,
                    className: p.description,
                    children: g,
                  })
                : null,
            ],
          });
        },
        M = (e) => {
          let { className: s, children: n } = e;
          return (0, t.jsx)("div", { className: l()(p.block, s), children: n });
        },
        R = (e) => {
          let { className: s, children: n, isProminent: a } = e;
          return (0, t.jsx)(r.Text, {
            variant: a ? "text-sm/normal" : "text-xs/normal",
            className: l()(p.subText, s),
            children: n,
          });
        },
        O = (e) => {
          let { className: s } = e;
          return (0, t.jsx)(o.Z, {
            direction: o.Z.Direction.VERTICAL,
            align: o.Z.Align.CENTER,
            className: s,
            children: (0, t.jsx)(u.Z, { className: p.spinnerVideo }),
          });
        },
        D = (e) => {
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
                  className: l()(p.pill, p.pillOnline, u && p.pillFlat),
                  children: [
                    (0, t.jsx)("i", { className: p.pillIconOnline }),
                    (0, t.jsx)(r.Text, {
                      tag: "span",
                      className: l()(p.pillMessage, c),
                      variant: "text-sm/normal",
                      children:
                        E.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
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
                    className: l()(p.pill, u && p.pillFlat),
                    children: [
                      (0, t.jsx)("i", { className: p.pillIconTotal }),
                      (0, t.jsx)(r.Text, {
                        tag: "span",
                        className: l()(p.pillMessage, c),
                        variant: "text-sm/normal",
                        children:
                          E.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: a },
                          ),
                      }),
                    ],
                  }),
                ],
              }));
        },
        L = (e) => {
          let { user: s } = e;
          return null == s
            ? null
            : (0, t.jsxs)("div", {
                className: p.joiningAs,
                children: [
                  (0, t.jsx)(r.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      E.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS,
                  }),
                  (0, t.jsx)(S, {
                    className: p.joiningAsAvatar,
                    src: s.getAvatarURL(void 0, 24),
                    size: r.AvatarSizes.SIZE_24,
                    "aria-label": s.username,
                  }),
                  (0, t.jsx)(r.Text, {
                    className: p.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: s.username,
                  }),
                ],
              });
        },
        Z = (e) => {
          let { className: s } = e;
          return (0, t.jsxs)(M, {
            className: s,
            children: [
              (0, t.jsx)(A, {
                onClick: () => window.open((0, d.t3)()),
                children: E.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                  platform: (0, d.DW)(),
                }),
              }),
              (0, t.jsx)(R, {
                className: p.downloadButtonSubtext,
                children: E.Z.Messages.INCOMPATIBLE_BROWSER.format({
                  supportedBrowserURL: I.Z.getArticleURL(
                    _.BhN.SUPPORTED_BROWSERS,
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
          onSubmit: r,
          children: i,
          expanded: u = !1,
          theme: o = _.BRd.DARK,
          style: c,
        } = e;
        return (0, t.jsxs)(a, {
          "data-theme": o,
          "data-disable-adaptive-theme": !0,
          onSubmit: r,
          style: c,
          className: l()(u ? p.authBoxExpanded : p.authBox, (0, N.Q)(o), s),
          children: [
            (0, t.jsx)("div", { className: p.discordLogo }),
            (0, t.jsx)("div", {
              className: l()(p.centeringWrapper, n),
              children: i,
            }),
          ],
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
        o = n(73117),
        c = n(787462),
        m = n(70097),
        d = n(981631),
        I = n(988868),
        N = n(554355),
        _ = n(991989),
        E = n(635507),
        p = n(470794),
        x = n(886777);
      function T(e) {
        let {
            movDark: s = o,
            movLight: n = c,
            mp4Dark: a = I,
            mp4Light: l = E,
            pngDark: r = N,
            pngLight: i = p,
            webmDark: m = _,
            webmLight: T = x,
          } = e,
          g = (0, u.vu)(),
          j = [
            (0, t.jsx)("source", { src: a, type: "video/mp4" }, "mp4"),
            (0, t.jsx)("img", { alt: "", src: r }, "png"),
          ],
          A = [
            (0, t.jsx)("source", { src: l, type: "video/mp4" }, "mp4"),
            (0, t.jsx)("img", { alt: "", src: i }, "png"),
          ];
        return (
          (g > 52 || -1 === g) &&
            (j.unshift(
              (0, t.jsx)("source", { src: m, type: "video/webm" }, "webm"),
            ),
            A.unshift(
              (0, t.jsx)("source", { src: T, type: "video/webm" }, "webm"),
            )),
          (0, u.rO)() &&
            (j.unshift(
              (0, t.jsx)("source", { src: s, type: "video/mp4" }, "hevc"),
            ),
            A.unshift(
              (0, t.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            )),
          { [d.BRd.DARK]: j, [d.BRd.LIGHT]: A }
        );
      }
      let g = i.Z.getAppSpinnerSources(),
        j = null != g ? T(g) : null,
        A = T({});
      s.Z = (e) => {
        var s;
        let {
            loop: n = !0,
            autoPlay: i = !0,
            setRef: u,
            className: o,
            onReady: c,
          } = e,
          { theme: I } = (0, r.useThemeContext)(),
          { reducedMotion: N } = a.useContext(
            r.AccessibilityPreferencesContext,
          ),
          _ = A;
        null != j && (_ = j);
        let E =
          null !== (s = _[(0, l.wj)(I) ? d.BRd.DARK : d.BRd.LIGHT]) &&
          void 0 !== s
            ? s
            : _[d.BRd.DARK];
        return (0, t.jsx)(
          m.Z,
          {
            ref: u,
            onLoadedData: c,
            className: o,
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
//# sourceMappingURL=85e7e31603ed834cc139.js.map
