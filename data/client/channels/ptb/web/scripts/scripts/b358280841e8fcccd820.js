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
    73117: function (e, t, n) {
      e.exports = n.p + "39b91170d9f2309e4c5e.mov";
    },
    988868: function (e, t, n) {
      e.exports = n.p + "15aad6b83736f221e23b.mp4";
    },
    554355: function (e) {
      e.exports = "/assets/fb70c6325a7d728cb6d0.png";
    },
    991989: function (e, t, n) {
      e.exports = n.p + "48ad19e80083bee682d2.webm";
    },
    787462: function (e, t, n) {
      e.exports = n.p + "a476863d4f441618840f.mov";
    },
    635507: function (e, t, n) {
      e.exports = n.p + "87c3abd90e246db4b38a.mp4";
    },
    470794: function (e) {
      e.exports = "/assets/7df11a68a272724be266.png";
    },
    886777: function (e, t, n) {
      e.exports = n.p + "b235c36699192662a3fe.webm";
    },
    588705: function (e, t, n) {
      n.d(t, {
        R: function () {
          return I;
        },
      }),
        n(411104);
      var l = n(200651),
        s = n(192379),
        a = n(442837),
        r = n(481060),
        i = n(388905),
        u = n(686546),
        o = n(925329),
        c = n(372769),
        m = n(726745),
        d = n(973616),
        x = n(131704),
        p = n(601964),
        g = n(598077),
        j = n(594174),
        h = n(51144),
        f = n(981631),
        v = n(888592),
        N = n(245335),
        S = n(388032),
        E = n(658797);
      let I = () =>
          (0, l.jsxs)(s.Fragment, {
            children: [
              (0, l.jsx)(i.qE, {
                src: null,
                size: r.AvatarSizes.DEPRECATED_SIZE_100,
                className: E.avatar,
              }),
              (0, l.jsx)(i.DK, { children: S.intl.string(S.t["3rE1Pz"]) }),
              (0, l.jsx)(i.Dx, {
                className: E.inviteResolvingGuildName,
                children: S.intl.string(S.t.ZTNur6),
              }),
            ],
          }),
        T = (e) => {
          let { guild: t, user: n, application: s, compact: a } = e;
          if (null != s)
            return (0, l.jsx)(o.Z, {
              className: E.appIcon,
              game: s,
              size: E.appIconSize,
            });
          if (null != n)
            return (0, l.jsx)(i.qE, {
              src: null != n ? n.getAvatarURL(void 0, 80) : null,
              size: r.AvatarSizes.SIZE_80,
              className: a ? E.compactAvatar : E.avatar,
            });
          if (null != t)
            return (0, l.jsx)(u.ZP, {
              mask: u.ZP.Masks.SQUIRCLE,
              width: 64,
              height: 64,
              className: E.guildIcon,
              children: (0, l.jsx)(i.Vj, {
                guild: t,
                size: i.Vj.Sizes.LARGER,
                animate: !0,
              }),
            });
          else return null;
        };
      t.Z = (e) => {
        var t;
        let n,
          s,
          u,
          {
            invite: o,
            disableUser: I = !1,
            error: b,
            flatActivityCount: L = !1,
            isRegister: A = !1,
          } = e,
          { currentUser: _, multiAccounts: R } = (0, a.cj)(
            [m.Z, j.default],
            () => ({
              currentUser: j.default.getCurrentUser(),
              multiAccounts: m.Z.getUsers(),
            }),
          );
        if (null == o) return null;
        let C = null != o.guild ? new p.ZP(o.guild) : null,
          z = null != o.channel ? (0, x.jD)(o.channel) : null,
          P =
            null != o.target_application ? new d.Z(o.target_application) : null,
          Z = I || null == o.inviter ? null : new g.Z(o.inviter),
          D =
            !(
              (null != o.approximate_member_count &&
                o.approximate_member_count > 100) ||
              (null != C && C.hasFeature(f.oNc.COMMUNITY))
            ) && null != Z,
          O = null,
          F = !1;
        if (null != C)
          (O =
            null == Z
              ? S.intl.string(S.t["3rE1Pz"])
              : S.intl.formatToPlainString(S.t["5u47vb"], {
                  username: h.ZP.getFormattedName(Z),
                })),
            o.target_type === N.Iq.STREAM &&
              null != o.target_user &&
              (O = S.intl.formatToPlainString(S.t.x2L32d, {
                username: h.ZP.getFormattedName(o.target_user),
              })),
            o.target_type === N.Iq.EMBEDDED_APPLICATION &&
              null != o.target_application &&
              (O =
                null != Z
                  ? S.intl.formatToPlainString(S.t.UW1Cam, {
                      username: h.ZP.getFormattedName(Z),
                    })
                  : S.intl.string(S.t.ENSuNz)),
            D &&
              null == P &&
              (n = (0, l.jsx)(i.Vj, {
                className: E.icon,
                guild: C,
                size: i.Vj.Sizes.SMALL,
              })),
            (s = C.name),
            null != P &&
              ((s = P.name),
              (u = (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)(i.DK, {
                    className: E.appIn,
                    children: S.intl.string(S.t["3gg9fH"]),
                  }),
                  (0, l.jsxs)("div", {
                    className: E.guildContainer,
                    children: [
                      (0, l.jsx)(i.Vj, { guild: C, size: i.Vj.Sizes.SMALL }),
                      (0, l.jsx)(r.Text, {
                        tag: "span",
                        variant: "text-lg/normal",
                        color: "header-primary",
                        className: E.appGuildName,
                        children: C.name,
                      }),
                    ],
                  }),
                ],
              })));
        else if (null != z) {
          if (null == Z) throw Error("no inviter in group DM invite");
          let e = h.ZP.getFormattedName(Z);
          null != z.name && "" !== z.name
            ? ((O = S.intl.formatToPlainString(S.t["5u47vb"], { username: e })),
              (s = z.name),
              null != z.icon &&
                (n = (0, l.jsx)(i.MC, {
                  channel: z,
                  size: r.AvatarSizes.SIZE_32,
                })))
            : ((O = S.intl.string(S.t.OsdY8P)), (s = e));
        } else if (null != Z) {
          let e = h.ZP.getFormattedName(Z, !0);
          (s = S.intl.formatToPlainString(S.t["4aF92d"], { username: e })),
            (F = !0),
            (u =
              null != b
                ? null
                : (0, l.jsx)(i.DK, {
                    className: E.directInviteSubTitle,
                    children: A
                      ? S.intl.format(S.t["6r4JiY"], { username: e })
                      : S.intl.format(S.t.Quj7HR, { username: e }),
                  }));
        }
        return (0, l.jsxs)("div", {
          className: E.container,
          children: [
            (0, l.jsx)(T, {
              application: P,
              guild: C,
              user: D ? Z : null,
              compact: F,
            }),
            null != b
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(i.DK, { children: S.intl.string(S.t.mDFGFh) }),
                    (0, l.jsx)(i.Dx, { children: b }),
                  ],
                })
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(i.DK, { children: O }),
                    (0, l.jsxs)(i.Dx, {
                      className: E.title,
                      children: [
                        null != C
                          ? (0, l.jsx)(c.Z, {
                              guild: C,
                              className: E.guildBadge,
                              tooltipPosition: "left",
                            })
                          : null,
                        n,
                        s,
                      ],
                    }),
                  ],
                }),
            u,
            null != P ||
            F ||
            (null == o
              ? void 0
              : null === (t = o.guild) || void 0 === t
                ? void 0
                : t.id) === v.fQ
              ? null
              : (0, l.jsx)(i.EJ, {
                  className: E.activityCount,
                  online: o.approximate_presence_count,
                  total: o.approximate_member_count,
                  flat: L,
                }),
            R.length > 1 ? (0, l.jsx)(i.jQ, { user: _ }) : null,
          ],
        });
      };
    },
    388905: function (e, t, n) {
      n.d(t, {
        DK: function () {
          return v;
        },
        Dx: function () {
          return f;
        },
        EJ: function () {
          return R;
        },
        Ee: function () {
          return N;
        },
        Hh: function () {
          return _;
        },
        II: function () {
          return b;
        },
        MC: function () {
          return T;
        },
        Vj: function () {
          return I;
        },
        gO: function () {
          return L;
        },
        i_: function () {
          return A;
        },
        jQ: function () {
          return C;
        },
        qE: function () {
          return E;
        },
        v6: function () {
          return z;
        },
        zx: function () {
          return S;
        },
      }),
        n(536091);
      var l = n(200651);
      n(192379);
      var s = n(120356),
        a = n.n(s),
        r = n(481060),
        i = n(43267),
        u = n(905656),
        o = n(600164),
        c = n(313201),
        m = n(565138),
        d = n(361207),
        x = n(63063),
        p = n(981631),
        g = n(388032),
        j = n(878145);
      let h = r.Avatar;
      null == h && (h = () => null);
      let f = (e) => {
          let { className: t, id: n, children: s } = e;
          return (0, l.jsx)(r.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: a()(j.title, t),
            id: n,
            children: s,
          });
        },
        v = (e) => {
          let { className: t, children: n } = e;
          return (0, l.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: t,
            children: n,
          });
        },
        N = (e) => {
          let { className: t, src: n } = e;
          return (0, l.jsx)("img", {
            alt: "",
            src: n,
            className: a()(j.image, t),
          });
        },
        S = (e) => {
          let { className: t, ...n } = e,
            s = n.look === r.Button.Looks.LINK;
          return (0, l.jsx)(r.Button, {
            size: s ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
            fullWidth: !s,
            className: a()(t, { [j.button]: !s, [j.linkButton]: s }),
            ...n,
          });
        };
      (S.Looks = r.Button.Looks),
        (S.Colors = r.Button.Colors),
        (S.Sizes = r.Button.Sizes);
      let E = (e) => {
          let { className: t, src: n, size: s } = e;
          return (0, l.jsx)(h, {
            src: n,
            size: s,
            className: a()(j.inviteLargeIcon, t),
            "aria-hidden": !0,
          });
        },
        I = (e) => {
          let { guild: t, size: n, animate: s = !1, className: a } = e;
          return (0, l.jsx)(m.Z, {
            active: !0,
            guild: t,
            size: n,
            animate: s,
            className: a,
          });
        };
      I.Sizes = m.Z.Sizes;
      let T = (e) => {
        let { className: t, channel: n, size: s } = e;
        return (0, l.jsx)(h, {
          src: (0, i.x)(n),
          size: s,
          className: a()(j.inviteIcon, t),
          "aria-hidden": !0,
        });
      };
      T.Sizes = r.AvatarSizes;
      let b = (e) => {
          let {
              label: t,
              error: n,
              placeholder: s,
              value: i,
              className: u,
              inputClassName: o,
              setRef: m,
              type: d = "text",
              onChange: x,
              autoComplete: p,
              autoFocus: g,
              maxLength: h,
              spellCheck: f,
              name: v,
              description: N,
              required: S,
              onFocus: E,
              onBlur: I,
            } = e,
            T = (0, c.Dt)();
          return (0, l.jsxs)(r.FormItem, {
            title: t,
            error: n,
            className: u,
            required: S,
            tag: "label",
            htmlFor: T,
            children: [
              (0, l.jsx)(r.TextInput, {
                name: v,
                type: d,
                value: i,
                inputRef: m,
                placeholder: s,
                inputClassName: a()(o, { [j.inputError]: null != n }),
                "aria-label": t,
                onChange: x,
                autoComplete: p,
                autoFocus: g,
                maxLength: h,
                spellCheck: f,
                id: T,
                onFocus: E,
                onBlur: I,
              }),
              null != N
                ? (0, l.jsx)(r.FormText, {
                    type: r.FormText.Types.DESCRIPTION,
                    className: j.description,
                    children: N,
                  })
                : null,
            ],
          });
        },
        L = (e) => {
          let { className: t, children: n } = e;
          return (0, l.jsx)("div", { className: a()(j.block, t), children: n });
        },
        A = (e) => {
          let { className: t, children: n, isProminent: s } = e;
          return (0, l.jsx)(r.Text, {
            variant: s ? "text-sm/normal" : "text-xs/normal",
            className: a()(j.subText, t),
            children: n,
          });
        },
        _ = (e) => {
          let { className: t } = e;
          return (0, l.jsx)(o.Z, {
            direction: o.Z.Direction.VERTICAL,
            align: o.Z.Align.CENTER,
            className: t,
            children: (0, l.jsx)(u.Z, { className: j.spinnerVideo }),
          });
        },
        R = (e) => {
          let t,
            {
              online: n,
              total: s,
              className: i,
              flat: u,
              textClassName: c,
            } = e;
          return null == s
            ? null
            : (null != n &&
                n > 0 &&
                (t = (0, l.jsxs)("div", {
                  className: a()(j.pill, j.pillOnline, u && j.pillFlat),
                  children: [
                    (0, l.jsx)("i", { className: j.pillIconOnline }),
                    (0, l.jsx)(r.Text, {
                      tag: "span",
                      className: a()(j.pillMessage, c),
                      variant: "text-sm/normal",
                      children: g.intl.format(g.t["LC+S+v"], {
                        membersOnline: n,
                      }),
                    }),
                  ],
                })),
              (0, l.jsxs)(o.Z, {
                justify: o.Z.Justify.CENTER,
                className: i,
                children: [
                  t,
                  (0, l.jsxs)("div", {
                    className: a()(j.pill, u && j.pillFlat),
                    children: [
                      (0, l.jsx)("i", { className: j.pillIconTotal }),
                      (0, l.jsx)(r.Text, {
                        tag: "span",
                        className: a()(j.pillMessage, c),
                        variant: "text-sm/normal",
                        children: g.intl.format(g.t.zRl6XV, { count: s }),
                      }),
                    ],
                  }),
                ],
              }));
        },
        C = (e) => {
          let { user: t } = e;
          return null == t
            ? null
            : (0, l.jsxs)("div", {
                className: j.joiningAs,
                children: [
                  (0, l.jsx)(r.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: g.intl.string(g.t["/8WWvL"]),
                  }),
                  (0, l.jsx)(E, {
                    className: j.joiningAsAvatar,
                    src: t.getAvatarURL(void 0, 24),
                    size: r.AvatarSizes.SIZE_24,
                    "aria-label": t.username,
                  }),
                  (0, l.jsx)(r.Text, {
                    className: j.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: t.username,
                  }),
                ],
              });
        },
        z = (e) => {
          let { className: t } = e;
          return (0, l.jsxs)(L, {
            className: t,
            children: [
              (0, l.jsx)(S, {
                onClick: () => window.open((0, d.t3)()),
                children: g.intl.format(g.t.JoS1i4, { platform: (0, d.DW)() }),
              }),
              (0, l.jsx)(A, {
                className: j.downloadButtonSubtext,
                children: g.intl.format(g.t.wO1VBg, {
                  supportedBrowserURL: x.Z.getArticleURL(
                    p.BhN.SUPPORTED_BROWSERS,
                  ),
                }),
              }),
            ],
          });
        };
      t.ZP = (e) => {
        let {
          className: t,
          contentClassName: n,
          tag: s = "section",
          onSubmit: i,
          children: u,
          expanded: o = !1,
          theme: c = p.BRd.DARK,
          style: m,
        } = e;
        return (0, l.jsx)(r.ThemeProvider, {
          theme: c,
          children: (e) =>
            (0, l.jsxs)(s, {
              "data-theme": c,
              "data-disable-adaptive-theme": !0,
              onSubmit: i,
              style: m,
              className: a()(o ? j.authBoxExpanded : j.authBox, e, t),
              children: [
                (0, l.jsx)("div", { className: j.discordLogo }),
                (0, l.jsx)("div", {
                  className: a()(j.centeringWrapper, n),
                  children: u,
                }),
              ],
            }),
        });
      };
    },
    905656: function (e, t, n) {
      n(733860);
      var l = n(200651),
        s = n(192379),
        a = n(780384),
        r = n(481060),
        i = n(197344),
        u = n(526167),
        o = n(70097),
        c = n(981631),
        m = n(73117),
        d = n(988868),
        x = n(554355),
        p = n(991989),
        g = n(787462),
        j = n(635507),
        h = n(470794),
        f = n(886777);
      function v(e) {
        let {
            movDark: t = m,
            movLight: n = g,
            mp4Dark: s = d,
            mp4Light: a = j,
            pngDark: r = x,
            pngLight: i = h,
            webmDark: o = p,
            webmLight: v = f,
          } = e,
          N = (0, u.vu)(),
          S = [
            (0, l.jsx)("source", { src: s, type: "video/mp4" }, "mp4"),
            (0, l.jsx)("img", { alt: "", src: r }, "png"),
          ],
          E = [
            (0, l.jsx)("source", { src: a, type: "video/mp4" }, "mp4"),
            (0, l.jsx)("img", { alt: "", src: i }, "png"),
          ];
        return (
          (N > 52 || -1 === N) &&
            (S.unshift(
              (0, l.jsx)("source", { src: o, type: "video/webm" }, "webm"),
            ),
            E.unshift(
              (0, l.jsx)("source", { src: v, type: "video/webm" }, "webm"),
            )),
          (0, u.rO)() &&
            (S.unshift(
              (0, l.jsx)("source", { src: t, type: "video/mp4" }, "hevc"),
            ),
            E.unshift(
              (0, l.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            )),
          { [c.BRd.DARK]: S, [c.BRd.LIGHT]: E }
        );
      }
      let N = i.Z.getAppSpinnerSources(),
        S = null != N ? v(N) : null,
        E = v({});
      t.Z = (e) => {
        var t;
        let {
            loop: n = !0,
            autoPlay: i = !0,
            setRef: u,
            className: m,
            onReady: d,
          } = e,
          { theme: x } = (0, r.useThemeContext)(),
          { reducedMotion: p } = s.useContext(
            r.AccessibilityPreferencesContext,
          ),
          g = E;
        null != S && (g = S);
        let j =
          null !== (t = g[(0, a.wj)(x) ? c.BRd.DARK : c.BRd.LIGHT]) &&
          void 0 !== t
            ? t
            : g[c.BRd.DARK];
        return (0, l.jsx)(
          o.Z,
          {
            ref: u,
            onLoadedData: d,
            className: m,
            loop: !p.enabled && n,
            autoPlay: !p.enabled && i,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: j,
          },
          x,
        );
      };
    },
    888592: function (e, t, n) {
      var l, s;
      n.d(t, {
        fQ: function () {
          return a;
        },
        tF: function () {
          return l;
        },
      }),
        ((s = l || (l = {})).STUDENT_PROMPT = "STUDENT_PROMPT"),
        (s.VERIFY_EMAIL = "VERIFY_EMAIL"),
        (s.VERIFY_PIN = "VERIFY_PIN"),
        (s.SELECT_SCHOOL = "SELECT_SCHOOL"),
        (s.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH"),
        (s.SUBMIT_SCHOOL = "SUBMIT_SCHOOL"),
        (s.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION"),
        (s.EMAIL_WAITLIST = "EMAIL_WAITLIST");
      let a = "884924873015689226";
    },
  },
]);
//# sourceMappingURL=b358280841e8fcccd820.js.map
