"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["35639"],
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
    73117: function (e, n, t) {
      e.exports = t.p + "39b91170d9f2309e4c5e.mov";
    },
    988868: function (e, n, t) {
      e.exports = t.p + "15aad6b83736f221e23b.mp4";
    },
    554355: function (e) {
      e.exports = "/assets/fb70c6325a7d728cb6d0.png";
    },
    991989: function (e, n, t) {
      e.exports = t.p + "48ad19e80083bee682d2.webm";
    },
    787462: function (e, n, t) {
      e.exports = t.p + "a476863d4f441618840f.mov";
    },
    635507: function (e, n, t) {
      e.exports = t.p + "87c3abd90e246db4b38a.mp4";
    },
    470794: function (e) {
      e.exports = "/assets/7df11a68a272724be266.png";
    },
    886777: function (e, n, t) {
      e.exports = t.p + "b235c36699192662a3fe.webm";
    },
    296507: function (e) {
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    816782: function (e, n, t) {
      var s = t(570140);
      n.Z = {
        toggleMembersSection() {
          s.Z.dispatch({ type: "CHANNEL_TOGGLE_MEMBERS_SECTION" });
        },
        toggleProfilePanelSection() {
          s.Z.dispatch({ type: "PROFILE_PANEL_TOGGLE_SECTION" });
        },
        toggleSummariesSection() {
          s.Z.dispatch({ type: "CHANNEL_TOGGLE_SUMMARIES_SECTION" });
        },
      };
    },
    388905: function (e, n, t) {
      t.d(n, {
        DK: function () {
          return g;
        },
        Dx: function () {
          return E;
        },
        EJ: function () {
          return M;
        },
        Ee: function () {
          return Z;
        },
        Hh: function () {
          return L;
        },
        II: function () {
          return T;
        },
        MC: function () {
          return b;
        },
        Vj: function () {
          return C;
        },
        gO: function () {
          return v;
        },
        i_: function () {
          return S;
        },
        jQ: function () {
          return I;
        },
        qE: function () {
          return j;
        },
        v6: function () {
          return A;
        },
        zx: function () {
          return _;
        },
      }),
        t(536091);
      var s = t(735250);
      t(470079);
      var r = t(120356),
        a = t.n(r),
        i = t(481060),
        l = t(43267),
        o = t(905656),
        u = t(600164),
        c = t(313201),
        d = t(565138),
        p = t(361207),
        m = t(63063),
        x = t(981631),
        h = t(689938),
        f = t(878145);
      let N = i.Avatar;
      null == N && (N = () => null);
      let E = (e) => {
          let { className: n, id: t, children: r } = e;
          return (0, s.jsx)(i.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            className: a()(f.title, n),
            id: t,
            children: r,
          });
        },
        g = (e) => {
          let { className: n, children: t } = e;
          return (0, s.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: n,
            children: t,
          });
        },
        Z = (e) => {
          let { className: n, src: t } = e;
          return (0, s.jsx)("img", {
            alt: "",
            src: t,
            className: a()(f.image, n),
          });
        },
        _ = (e) => {
          let { className: n, ...t } = e,
            r = t.look === i.Button.Looks.LINK;
          return (0, s.jsx)(i.Button, {
            size: r ? i.Button.Sizes.MIN : i.Button.Sizes.LARGE,
            fullWidth: !r,
            className: a()(n, { [f.button]: !r, [f.linkButton]: r }),
            ...t,
          });
        };
      (_.Looks = i.Button.Looks),
        (_.Colors = i.Button.Colors),
        (_.Sizes = i.Button.Sizes);
      let j = (e) => {
          let { className: n, src: t, size: r } = e;
          return (0, s.jsx)(N, {
            src: t,
            size: r,
            className: a()(f.inviteLargeIcon, n),
            "aria-hidden": !0,
          });
        },
        C = (e) => {
          let { guild: n, size: t, animate: r = !1, className: a } = e;
          return (0, s.jsx)(d.Z, {
            active: !0,
            guild: n,
            size: t,
            animate: r,
            className: a,
          });
        };
      C.Sizes = d.Z.Sizes;
      let b = (e) => {
        let { className: n, channel: t, size: r } = e;
        return (0, s.jsx)(N, {
          src: (0, l.x)(t),
          size: r,
          className: a()(f.inviteIcon, n),
          "aria-hidden": !0,
        });
      };
      b.Sizes = i.AvatarSizes;
      let T = (e) => {
          let {
              label: n,
              error: t,
              placeholder: r,
              value: l,
              className: o,
              inputClassName: u,
              setRef: d,
              type: p = "text",
              onChange: m,
              autoComplete: x,
              autoFocus: h,
              maxLength: N,
              spellCheck: E,
              name: g,
              description: Z,
              required: _,
              onFocus: j,
              onBlur: C,
            } = e,
            b = (0, c.Dt)();
          return (0, s.jsxs)(i.FormItem, {
            title: n,
            error: t,
            className: o,
            required: _,
            tag: "label",
            htmlFor: b,
            children: [
              (0, s.jsx)(i.TextInput, {
                name: g,
                type: p,
                value: l,
                inputRef: d,
                placeholder: r,
                inputClassName: a()(u, { [f.inputError]: null != t }),
                "aria-label": n,
                onChange: m,
                autoComplete: x,
                autoFocus: h,
                maxLength: N,
                spellCheck: E,
                id: b,
                onFocus: j,
                onBlur: C,
              }),
              null != Z
                ? (0, s.jsx)(i.FormText, {
                    type: i.FormText.Types.DESCRIPTION,
                    className: f.description,
                    children: Z,
                  })
                : null,
            ],
          });
        },
        v = (e) => {
          let { className: n, children: t } = e;
          return (0, s.jsx)("div", { className: a()(f.block, n), children: t });
        },
        S = (e) => {
          let { className: n, children: t, isProminent: r } = e;
          return (0, s.jsx)(i.Text, {
            variant: r ? "text-sm/normal" : "text-xs/normal",
            className: a()(f.subText, n),
            children: t,
          });
        },
        L = (e) => {
          let { className: n } = e;
          return (0, s.jsx)(u.Z, {
            direction: u.Z.Direction.VERTICAL,
            align: u.Z.Align.CENTER,
            className: n,
            children: (0, s.jsx)(o.Z, { className: f.spinnerVideo }),
          });
        },
        M = (e) => {
          let n,
            {
              online: t,
              total: r,
              className: l,
              flat: o,
              textClassName: c,
            } = e;
          return null == r
            ? null
            : (null != t &&
                t > 0 &&
                (n = (0, s.jsxs)("div", {
                  className: a()(f.pill, f.pillOnline, o && f.pillFlat),
                  children: [
                    (0, s.jsx)("i", { className: f.pillIconOnline }),
                    (0, s.jsx)(i.Text, {
                      tag: "span",
                      className: a()(f.pillMessage, c),
                      variant: "text-sm/normal",
                      children:
                        h.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                          { membersOnline: t },
                        ),
                    }),
                  ],
                })),
              (0, s.jsxs)(u.Z, {
                justify: u.Z.Justify.CENTER,
                className: l,
                children: [
                  n,
                  (0, s.jsxs)("div", {
                    className: a()(f.pill, o && f.pillFlat),
                    children: [
                      (0, s.jsx)("i", { className: f.pillIconTotal }),
                      (0, s.jsx)(i.Text, {
                        tag: "span",
                        className: a()(f.pillMessage, c),
                        variant: "text-sm/normal",
                        children:
                          h.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                            { count: r },
                          ),
                      }),
                    ],
                  }),
                ],
              }));
        },
        I = (e) => {
          let { user: n } = e;
          return null == n
            ? null
            : (0, s.jsxs)("div", {
                className: f.joiningAs,
                children: [
                  (0, s.jsx)(i.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children:
                      h.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS,
                  }),
                  (0, s.jsx)(j, {
                    className: f.joiningAsAvatar,
                    src: n.getAvatarURL(void 0, 24),
                    size: i.AvatarSizes.SIZE_24,
                    "aria-label": n.username,
                  }),
                  (0, s.jsx)(i.Text, {
                    className: f.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: n.username,
                  }),
                ],
              });
        },
        A = (e) => {
          let { className: n } = e;
          return (0, s.jsxs)(v, {
            className: n,
            children: [
              (0, s.jsx)(_, {
                onClick: () => window.open((0, p.t3)()),
                children: h.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                  platform: (0, p.DW)(),
                }),
              }),
              (0, s.jsx)(S, {
                className: f.downloadButtonSubtext,
                children: h.Z.Messages.INCOMPATIBLE_BROWSER.format({
                  supportedBrowserURL: m.Z.getArticleURL(
                    x.BhN.SUPPORTED_BROWSERS,
                  ),
                }),
              }),
            ],
          });
        };
      n.ZP = (e) => {
        let {
          className: n,
          contentClassName: t,
          tag: r = "section",
          onSubmit: l,
          children: o,
          expanded: u = !1,
          theme: c = x.BRd.DARK,
          style: d,
        } = e;
        return (0, s.jsx)(i.ThemeProvider, {
          theme: c,
          children: (e) =>
            (0, s.jsxs)(r, {
              "data-theme": c,
              "data-disable-adaptive-theme": !0,
              onSubmit: l,
              style: d,
              className: a()(u ? f.authBoxExpanded : f.authBox, e, n),
              children: [
                (0, s.jsx)("div", { className: f.discordLogo }),
                (0, s.jsx)("div", {
                  className: a()(f.centeringWrapper, t),
                  children: o,
                }),
              ],
            }),
        });
      };
    },
    207035: function (e, n, t) {
      t.d(n, {
        P: function () {
          return r;
        },
      });
      let s = (0, t(818083).B)({
        kind: "user",
        id: "2023-08-30_open-in-popout",
        label: "Open Channel in Popout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function r(e) {
        return s.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    373651: function (e, n, t) {
      t.r(n);
      var s = t(735250);
      t(470079);
      var r = t(481060),
        a = t(239091),
        i = t(883385),
        l = t(108843),
        o = t(947440),
        u = t(100527),
        c = t(299206),
        d = t(916069),
        p = t(895563),
        m = t(212205),
        x = t(478035),
        h = t(62420),
        f = t(423589),
        N = t(398048),
        E = t(109764),
        g = t(3689),
        Z = t(323597),
        _ = t(852245),
        j = t(367722),
        C = t(461535),
        b = t(776568),
        T = t(218035),
        v = t(775666),
        S = t(593589),
        L = t(442754),
        M = t(981631),
        I = t(689938);
      function A(e) {
        let { channel: n, onSelect: t } = e,
          i = (0, C.Z)(n),
          l = (0, E.Z)(n),
          u = (0, p.l)(n),
          d = (0, p.P)(n),
          N = (0, m.Z)(n),
          g = (0, x.Z)(n),
          Z = (0, h.Z)(n),
          j = (0, b.ZP)(n),
          S = (0, T.Z)(n),
          L = (0, _.Z)(n),
          M = (0, c.Z)({ id: n.id, label: I.Z.Messages.COPY_ID_CHANNEL }),
          A = (0, o.Z)(n),
          O = (0, v.ZP)(n),
          P = (0, f.Mn)("ChannelContextFavoritesMenu");
        return (0, s.jsxs)(r.Menu, {
          navId: "channel-context",
          onClose: a.Zy,
          "aria-label": I.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: t,
          children: [
            (0, s.jsx)(r.MenuGroup, { children: i }),
            (0, s.jsxs)(r.MenuGroup, { children: [g, Z, N, u] }),
            (0, s.jsxs)(r.MenuGroup, { children: [j, P ? O : S] }),
            (0, s.jsx)(r.MenuGroup, { children: L }),
            (0, s.jsx)(r.MenuGroup, { children: A }),
            (0, s.jsx)(r.MenuGroup, { children: d }),
            (0, s.jsx)(r.MenuGroup, { children: l }),
            (0, s.jsx)(r.MenuGroup, { children: M }),
          ],
        });
      }
      function O(e) {
        let { channel: n, guild: t, onSelect: i } = e,
          l = (0, C.Z)(n),
          o = (0, E.Z)(n),
          u = (0, p.l)(n),
          d = (0, p.P)(n),
          m = (0, L.Z)(n),
          x = (0, b.ZP)(n),
          h = (0, _.Z)(n),
          M = (0, j.Z)(n, t),
          A = (0, N.Z)(n, t),
          O = (0, g.Z)(n, t),
          P = (0, Z.Z)(n),
          R = (0, c.Z)({ id: n.id, label: I.Z.Messages.COPY_ID_CHANNEL }),
          y = (0, S.Z)(n, "list_text_channel_context_menu"),
          U = (0, T.Z)(n),
          V = (0, v.ZP)(n),
          G = (0, f.Mn)("ChannelContextMenuNormal");
        return (0, s.jsxs)(r.Menu, {
          navId: "channel-context",
          onClose: a.Zy,
          "aria-label": I.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: i,
          children: [
            (0, s.jsxs)(
              r.MenuGroup,
              { children: [l, u] },
              "mark-as-read-or-favorite",
            ),
            (0, s.jsxs)(
              r.MenuGroup,
              { children: [M, m, o, y] },
              "channel-actions",
            ),
            (0, s.jsxs)(
              r.MenuGroup,
              { children: [x, G ? V : U] },
              "notifications",
            ),
            (0, s.jsxs)(
              r.MenuGroup,
              { children: [h, A, O, P] },
              "admin-actions",
            ),
            (0, s.jsx)(r.MenuGroup, { children: d }),
            (0, s.jsx)(r.MenuGroup, { children: R }, "developer-actions"),
          ],
        });
      }
      n.default = (0, l.Z)(
        (0, i.Z)(
          function (e) {
            return (0, d.Z)()
              ? (0, s.jsx)(A, { ...e })
              : (0, s.jsx)(O, { ...e });
          },
          { object: M.qAy.CONTEXT_MENU },
        ),
        [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU],
      );
    },
    593589: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var s = t(735250),
        r = t(470079),
        a = t(481060),
        i = t(372900),
        l = t(238246),
        o = t(788983),
        u = t(207035),
        c = t(823748),
        d = t(981631),
        p = t(405601);
      function m(e) {
        let { windowKey: n, channel: t } = e;
        return (0, s.jsx)(l.Z, {
          withTitleBar: !0,
          windowKey: n,
          title: t.name,
          channelId: t.id,
          contentClassName: p.popoutContent,
          children: (0, s.jsx)(i.Z.Provider, {
            value: t.guild_id,
            children: (0, s.jsx)(c.Z, { providedChannel: t }),
          }),
        });
      }
      function x(e, n) {
        let t = (0, u.P)(n),
          i = r.useCallback(() => {
            o.bA(
              "".concat(d.KJ3.CHANNEL_POPOUT, "-").concat(e.id),
              (n) => (0, s.jsx)(m, { windowKey: n, channel: e }),
              { defaultWidth: 854, defaultHeight: 480 },
            );
          }, [e]);
        return t
          ? (0, s.jsx)(a.MenuItem, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => i(),
            })
          : null;
      }
    },
    905656: function (e, n, t) {
      t(733860);
      var s = t(735250),
        r = t(470079),
        a = t(780384),
        i = t(481060),
        l = t(197344),
        o = t(526167),
        u = t(70097),
        c = t(981631),
        d = t(73117),
        p = t(988868),
        m = t(554355),
        x = t(991989),
        h = t(787462),
        f = t(635507),
        N = t(470794),
        E = t(886777);
      function g(e) {
        let {
            movDark: n = d,
            movLight: t = h,
            mp4Dark: r = p,
            mp4Light: a = f,
            pngDark: i = m,
            pngLight: l = N,
            webmDark: u = x,
            webmLight: g = E,
          } = e,
          Z = (0, o.vu)(),
          _ = [
            (0, s.jsx)("source", { src: r, type: "video/mp4" }, "mp4"),
            (0, s.jsx)("img", { alt: "", src: i }, "png"),
          ],
          j = [
            (0, s.jsx)("source", { src: a, type: "video/mp4" }, "mp4"),
            (0, s.jsx)("img", { alt: "", src: l }, "png"),
          ];
        return (
          (Z > 52 || -1 === Z) &&
            (_.unshift(
              (0, s.jsx)("source", { src: u, type: "video/webm" }, "webm"),
            ),
            j.unshift(
              (0, s.jsx)("source", { src: g, type: "video/webm" }, "webm"),
            )),
          (0, o.rO)() &&
            (_.unshift(
              (0, s.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            ),
            j.unshift(
              (0, s.jsx)("source", { src: t, type: "video/mp4" }, "hevc"),
            )),
          { [c.BRd.DARK]: _, [c.BRd.LIGHT]: j }
        );
      }
      let Z = l.Z.getAppSpinnerSources(),
        _ = null != Z ? g(Z) : null,
        j = g({});
      n.Z = (e) => {
        var n;
        let {
            loop: t = !0,
            autoPlay: l = !0,
            setRef: o,
            className: d,
            onReady: p,
          } = e,
          { theme: m } = (0, i.useThemeContext)(),
          { reducedMotion: x } = r.useContext(
            i.AccessibilityPreferencesContext,
          ),
          h = j;
        null != _ && (h = _);
        let f =
          null !== (n = h[(0, a.wj)(m) ? c.BRd.DARK : c.BRd.LIGHT]) &&
          void 0 !== n
            ? n
            : h[c.BRd.DARK];
        return (0, s.jsx)(
          u.Z,
          {
            ref: o,
            onLoadedData: p,
            className: d,
            loop: !x.enabled && t,
            autoPlay: !x.enabled && l,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: f,
          },
          m,
        );
      };
    },
    977059: function (e, n, t) {
      t.d(n, {
        R: function () {
          return a;
        },
        S: function () {
          return r;
        },
      });
      let s = (0, t(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function r(e) {
        let { location: n } = e;
        return s.useExperiment({ location: n }, { autoTrackExposure: !0 });
      }
      function a(e) {
        let { location: n } = e;
        return s.getCurrentConfig({ location: n }, { autoTrackExposure: !0 });
      }
    },
    829750: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
        t: function () {
          return o;
        },
      });
      var s = t(442837),
        r = t(430824),
        a = t(938475),
        i = t(981631);
      function l(e) {
        return (0, s.cj)(
          [a.ZP, r.Z],
          () => {
            let n = a.ZP.countVoiceStatesForChannel(e.id),
              t = r.Z.getGuild(e.getGuildId());
            return null == t
              ? { reachedLimit: !1, limit: -1 }
              : e.type === i.d4z.GUILD_STAGE_VOICE
                ? {
                    reachedLimit: n > t.maxStageVideoChannelUsers,
                    limit: t.maxStageVideoChannelUsers,
                  }
                : {
                    reachedLimit:
                      t.maxVideoChannelUsers > 0 && n > t.maxVideoChannelUsers,
                    limit: t.maxVideoChannelUsers,
                  };
          },
          [e],
        );
      }
      function o(e) {
        let n = a.ZP.countVoiceStatesForChannel(e.id),
          t = r.Z.getGuild(e.getGuildId());
        return null == t
          ? { reachedLimit: !1, limit: -1 }
          : e.type === i.d4z.GUILD_STAGE_VOICE
            ? {
                reachedLimit: n > t.maxStageVideoChannelUsers,
                limit: t.maxStageVideoChannelUsers,
              }
            : {
                reachedLimit:
                  t.maxVideoChannelUsers > 0 && n > t.maxVideoChannelUsers,
                limit: t.maxVideoChannelUsers,
              };
      }
    },
    173507: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var s = t(735250);
      t(470079);
      var r = t(481060),
        a = t(695346),
        i = t(981631);
      function l(e, n) {
        a.qF.getSetting()
          ? (0, r.openModalLazy)(
              async () => {
                let { default: n } = await Promise.all([
                  t.e("8821"),
                  t.e("62010"),
                ]).then(t.bind(t, 601572));
                return (t) =>
                  (0, s.jsx)(n, { ...t, onEnable: e, videoEnabled: !1 });
              },
              {
                modalKey: "camera-preview",
                contextKey:
                  n === i.IlC.POPOUT
                    ? r.POPOUT_MODAL_CONTEXT
                    : r.DEFAULT_MODAL_CONTEXT,
              },
            )
          : null == e || e();
      }
    },
    896797: function (e, n, t) {
      var s,
        r = t(442837),
        a = t(433517),
        i = t(570140),
        l = t(981631);
      function o(e, n, t) {
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
      let u = { lastViewedPath: null, lastViewedNonVoicePath: null },
        c = u,
        d = "LAST_VIEWED_PATH";
      class p extends (s = r.ZP.PersistedStore) {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
          c = null != e ? e : u;
        }
        get defaultRoute() {
          return l.Z5c.ME;
        }
        get lastNonVoiceRoute() {
          var e;
          return null !== (e = c.lastViewedNonVoicePath) && void 0 !== e
            ? e
            : l.Z5c.ME;
        }
        get fallbackRoute() {
          return l.Z5c.ME;
        }
        getState() {
          return c;
        }
      }
      o(p, "displayName", "DefaultRouteStore"),
        o(p, "persistKey", "DefaultRouteStore"),
        o(p, "migrations", [
          () => {
            let e = a.K.get(d, null);
            return a.K.remove(d), { lastViewedPath: e };
          },
        ]),
        (n.Z = new p(i.Z, {
          SAVE_LAST_ROUTE: function (e) {
            let { path: n } = e;
            return (c.lastViewedPath = n), !0;
          },
          SAVE_LAST_NON_VOICE_ROUTE: function (e) {
            let { path: n } = e;
            return (c.lastViewedNonVoicePath = n), !0;
          },
        }));
    },
    405601: function (e, n, t) {
      e.exports = { popoutContent: "popoutContent_fc32a6" };
    },
  },
]);
//# sourceMappingURL=a7f1f6b24c7ec3cef583.js.map
