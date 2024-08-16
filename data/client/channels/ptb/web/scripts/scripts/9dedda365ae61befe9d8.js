"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9707"],
  {
    526232: function (e) {
      e.exports = "/assets/a30f1f73b76c0a00e345.svg";
    },
    818276: function (e) {
      e.exports = "/assets/645fa840d8b2b6da92a5.svg";
    },
    995923: function (e, t, a) {
      a.d(t, {
        Ly: function () {
          return l;
        },
        UK: function () {
          return n;
        },
        uv: function () {
          return s;
        },
      });
      let n = 200,
        l = 10,
        s = 10;
    },
    498058: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = a(470079),
        l = a(442837),
        s = a(592125),
        r = a(594174),
        i = a(292584),
        o = a(158631);
      function c(e) {
        var t;
        let a = (0, l.e7)([r.default], () => r.default.getCurrentUser()),
          c = (0, l.e7)([s.Z], () => s.Z.getChannel(e)),
          d = (0, l.e7)([i.Z], () =>
            null != e ? i.Z.getBroadcastByChannel(e) : null,
          ),
          u = (0, o.ZP)(),
          m = n.useMemo(() => {
            var e, t;
            return null !==
              (t =
                null == c
                  ? void 0
                  : null === (e = c.recipients) || void 0 === e
                    ? void 0
                    : e
                        .map((e) => r.default.getUser(e))
                        .filter(
                          (e) =>
                            null != e &&
                            e.id !== (null == d ? void 0 : d.userId),
                        )) && void 0 !== t
              ? t
              : [];
          }, [
            null == d ? void 0 : d.userId,
            null == c ? void 0 : c.recipients,
          ]);
        return null == a
          ? []
          : u
            ? m
            : null !==
                  (t =
                    m.length > 0
                      ? [a].concat(m)
                      : null == d
                        ? void 0
                        : d.viewers) && void 0 !== t
              ? t
              : [];
      }
    },
    644148: function (e, t, a) {
      a.d(t, {
        BT: function () {
          return I;
        },
        KO: function () {
          return A;
        },
        Kw: function () {
          return C;
        },
        OU: function () {
          return E;
        },
        bI: function () {
          return w;
        },
        jp: function () {
          return M;
        },
      }),
        a(653041),
        a(47120);
      var n = a(470079),
        l = a(512722),
        s = a.n(l),
        r = a(442837),
        i = a(461745),
        o = a(971628),
        c = a(695346),
        d = a(314897),
        u = a(592125),
        m = a(650774),
        h = a(271383),
        S = a(430824),
        x = a(699516),
        T = a(771845),
        g = a(594174),
        f = a(709054),
        v = a(51144),
        _ = a(995923),
        b = a(71080);
      function E(e) {
        let t;
        return (
          e.rowType === b.aC.USER
            ? (t = { type: i.Fj.USER, label: e.name, avatar: e.avatarURL })
            : e.rowType === b.aC.GUILD &&
              (t = { type: i.Fj.GUILD, label: e.name, guild: e.guild }),
          s()(null != t, "RowData must be a guild or a user"),
          { display: t, row: e }
        );
      }
      function C(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : () => !0;
        return (0, r.Wu)(
          [S.Z, m.Z],
          () => {
            let a = [];
            return (
              e.forEach((e) => {
                var n;
                let l = S.Z.getGuild(e),
                  s =
                    null !== (n = m.Z.getMemberCount(e)) && void 0 !== n
                      ? n
                      : _.UK;
                null != l &&
                  s < _.UK &&
                  (null == t ? void 0 : t(l.name)) &&
                  a.push(l);
              }),
              a
            );
          },
          [e, t],
        );
      }
      function R(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : () => !0,
          a = C(e, t);
        return n.useMemo(
          () =>
            a.map((e) => ({
              rowType: b.aC.GUILD,
              name: e.name,
              id: e.id,
              disabled: !1,
              guild: e,
              key: "".concat(b.aC.GUILD, ":").concat(e.id),
            })),
          [a],
        );
      }
      function p(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : () => !0,
          a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return e
          .filter((e) => null != e && (null == t ? void 0 : t(e.username)))
          .map((e) => ({
            rowType: b.aC.USER,
            name: v.ZP.getUserTag(e),
            id: e.id,
            disabled: a && x.Z.isFriend(e.id),
            avatarURL: e.getAvatarURL(null, 24),
            key: "".concat(b.aC.USER, ":").concat(e.id),
          }));
      }
      function I(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : () => !0,
          a = arguments.length > 2 ? arguments[2] : void 0,
          l = (0, r.e7)([T.ZP], () => T.ZP.getFlattenedGuildIds()),
          s = R(l, t),
          i = (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : () => !0,
              t = arguments.length > 1 ? arguments[1] : void 0,
              a = arguments.length > 2 ? arguments[2] : void 0,
              l = (0, r.Wu)([x.Z], () => x.Z.getFriendIDs()),
              s = C(t),
              i = (0, r.e7)([d.default], () => d.default.getId()),
              o = (0, r.e7)([h.ZP], () => h.ZP.getMemberVersion()),
              c = n.useMemo(() => {
                let e = new Set(l);
                return (
                  s.forEach((t) => {
                    h.ZP.getMemberIds(t.id).forEach((t) => {
                      !e.has(t) && !x.Z.isBlocked(t) && e.add(t);
                    });
                  }),
                  e
                );
              }, [s, l, o]);
            return p(
              (0, r.Wu)(
                [g.default],
                () => [...c].map((e) => g.default.getUser(e)),
                [c],
              )
                .filter((e) => null != e && !e.bot && e.id !== i)
                .sort((e, t) => {
                  let a = u.Z.getChannel(
                      u.Z.getDMFromUserId(null == e ? void 0 : e.id),
                    ),
                    n = u.Z.getChannel(
                      u.Z.getDMFromUserId(null == t ? void 0 : t.id),
                    );
                  return f.default.compare(
                    null == a ? void 0 : a.lastMessageId,
                    null == n ? void 0 : n.lastMessageId,
                  ) > 0
                    ? -1
                    : 1;
                }),
              e,
              a,
            );
          })(t, l, a);
        return [i, e ? [] : s];
      }
      function M() {
        let e = c.MI.useSetting(),
          t = c.GA.useSetting(),
          a = {},
          n = {};
        return (
          R(e).forEach((e) => {
            a[(0, o.G)(e)] = E(e);
          }),
          t.length > 0 &&
            p(t.map((e) => g.default.getUser(e)).filter((e) => null != e)).map(
              (e) => {
                n[(0, o.G)(e)] = E(e);
              },
            ),
          { [b.aC.GUILD]: a, [b.aC.USER]: n }
        );
      }
      function A(e) {
        let t = d.default.getId(),
          a = e;
        return (
          a.length > _.Ly && (a = a.slice(0, _.Ly)),
          (a = a.filter((e) => {
            var a;
            return (
              h.ZP.isMember(e, t) &&
              (null !== (a = m.Z.getMemberCount(e)) && void 0 !== a
                ? a
                : _.UK) < _.UK
            );
          }))
        );
      }
      function w(e) {
        let t = e;
        return t.length > _.uv && (t = t.slice(0, _.uv)), t;
      }
    },
    243980: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = a(735250);
      a(470079);
      var l = a(120356),
        s = a.n(l),
        r = a(481060),
        i = a(971628),
        o = a(689938),
        c = a(760882);
      function d(e) {
        let {
          selectedTags: t,
          title: a,
          hintText: l,
          placeholderText: d,
          expanded: u,
          setExpanded: m,
          users: h,
          guilds: S,
          query: x,
          maxCount: T,
          onQueryChange: g,
          onClickRow: f,
          onRemoveTag: v,
        } = e;
        return (0, n.jsx)(r.Collapsible, {
          className: c.collapsible,
          isExpanded: u,
          collapsibleContent: (0, n.jsx)("div", {
            className: s()(c.collapsibleContent, { [c.visible]: u }),
            children: (0, n.jsx)(i.Z, {
              listClassName: c.list,
              pendingAdditions: t,
              query: x,
              onQueryChange: g,
              onClickRow: f,
              onRemovePendingAddition: v,
              users: h,
              guilds: S,
              renderEmptyText: (e) =>
                o.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format(
                  { query: e },
                ),
              hintText: l,
              placeholderText: d,
              disabledText:
                o.Z.Messages.BROADCASTING_SETTINGS_MODAL_DISABLED_DESCRIPTION,
              maxCount: T,
              hideRowLabel: !0,
            }),
          }),
          children: (e) => {
            let { onClick: t } = e;
            return (0, n.jsxs)(r.Clickable, {
              className: c.content,
              onClick: (e) => {
                m(!u), t(e);
              },
              children: [
                (0, n.jsx)(r.Heading, {
                  variant: "text-sm/normal",
                  children: a,
                }),
                u
                  ? (0, n.jsx)(r.ChevronSmallUpIcon, {
                      size: "md",
                      color: "currentColor",
                    })
                  : (0, n.jsx)(r.ChevronSmallDownIcon, {
                      size: "md",
                      color: "currentColor",
                    }),
              ],
            });
          },
        });
      }
    },
    137167: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return p;
          },
        }),
        a(47120);
      var n = a(735250),
        l = a(470079),
        s = a(392711),
        r = a(442837),
        i = a(381499),
        o = a(481060),
        c = a(367907),
        d = a(971628),
        u = a(695346),
        m = a(675478),
        h = a(430824),
        S = a(892880),
        x = a(226951),
        T = a(498058),
        g = a(158631),
        f = a(644148),
        v = a(243980),
        _ = a(995923),
        b = a(981631),
        E = a(71080),
        C = a(689938),
        R = a(268405);
      function p(e) {
        let {
            headerText: t = C.Z.Messages.BROADCASTING_SETTINGS,
            buttonCTA: a = C.Z.Messages.BROADCAST_SETTINGS_SAVE,
            transitionState: p,
            onClose: I,
            onSave: M,
          } = e,
          A = (0, f.jp)(),
          [w, N] = l.useState(A),
          [Z, j] = l.useState(""),
          L = u.Uc.useSetting(),
          [U, D] = l.useState(null == L || L),
          y = u.xd.useSetting(),
          [O, G] = l.useState(y),
          [B, k] = l.useState(!1),
          [P, F] = l.useState(!1),
          H = (0, g._n)(),
          z = (0, T.Z)(null == H ? void 0 : H.channelId),
          $ = null != H,
          K = l.useMemo(
            () => L !== U || !(0, s.isEqual)(A, w) || y !== O,
            [L, U, A, w, y, O],
          ),
          Q = null != M,
          W = l.useMemo(
            () =>
              U ||
              Object.keys(w[E.aC.USER]).length > 0 ||
              Object.keys(w[E.aC.GUILD]).length > 0,
            [U, w],
          ),
          q = (!W && $) || (!W && Q) || (!K && !Q),
          V = l.useMemo(() => "@" === Z.trim().charAt(0), [Z]),
          Y = (0, r.Wu)([h.Z], () => h.Z.getGuildIds()),
          J = (0, f.Kw)(Y),
          X = l.useMemo(() => J.map((e) => e.id), [J]),
          [ee, et] = (0, f.BT)(
            V,
            function (e) {
              var t;
              let a = ((t = Z.trim()), V ? t.slice(1) : t);
              return RegExp("".concat(x.Z.escape(a)), "i").test(e);
            },
            U,
          );
        function ea() {
          var e;
          null == M || M();
          let [t, a] = er();
          c.ZP.trackWithMetadata(b.rMx.BROADCAST_SETTINGS_UPDATED, {
            auto_broadcast: O,
            broadcast_to_all_friends: U,
            num_allowed_users_in_broadcast: a.length,
            allowed_users: a,
            num_guilds_in_broadcast: t.length,
            guilds: t,
            num_viewers_in_broadcast: z.length,
            current_viewers:
              null !== (e = z.map((e) => e.id)) && void 0 !== e ? e : [],
            started_broadcast: Q,
          });
        }
        function en(e) {
          j(e);
        }
        function el(e, t) {
          let a = (0, d.G)(t);
          N((n) => {
            let l = { ...n };
            return (
              (l[e] = { ...l[e] }),
              a in l[e] ? delete l[e][a] : (l[e][a] = (0, f.OU)(t)),
              l
            );
          });
        }
        function es(e, t) {
          N((a) => {
            let n = { ...a };
            return (n[e] = { ...n[e] }), delete n[e][t], n;
          });
        }
        function er() {
          let e = new Set(),
            t = new Set();
          Object.values(w[E.aC.USER]).forEach((e) => {
            let { row: a } = e;
            return t.add(a.id);
          }),
            Object.values(w[E.aC.GUILD]).forEach((t) => {
              let { row: a } = t;
              return e.add(a.id);
            });
          let a = (0, f.KO)(Array.from(e));
          return [a, (0, f.bI)(Array.from(t))];
        }
        return (
          l.useEffect(() => {
            c.ZP.trackWithMetadata(b.rMx.OPEN_MODAL, {
              type: Q ? "Start Broadcast" : "Update Broadcast",
            });
          }, [Q]),
          l.useEffect(() => {
            (0, s.chunk)(X, 100).forEach((e) => {
              S.Z.requestMembers(e, Z.trim());
            });
          }, [X, Z]),
          (0, n.jsxs)(o.ModalRoot, {
            transitionState: p,
            children: [
              (0, n.jsx)(o.Heading, {
                variant: "heading-xl/semibold",
                className: R.header,
                children: t,
              }),
              (0, n.jsx)(o.ModalCloseButton, {
                onClick: I,
                className: R.close,
              }),
              (0, n.jsxs)(o.ModalContent, {
                className: R.content,
                paddingFix: !1,
                children: [
                  (0, n.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    className: R.description,
                    children: C.Z.Messages.BROADCASTING_DESCRIPTION,
                  }),
                  (0, n.jsx)(o.FormTitle, {
                    tag: o.FormTitleTags.H5,
                    className: R.title,
                    children:
                      C.Z.Messages.BROADCASTING_SETTINGS_MODAL_AUDIENCE_TITLE,
                  }),
                  (0, n.jsxs)("div", {
                    className: R.switch,
                    children: [
                      (0, n.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children:
                          C.Z.Messages.BROADCASTING_SETTINGS_MODAL_FRIENDS,
                      }),
                      (0, n.jsx)(o.Switch, {
                        checked: U,
                        onChange: (e) => {
                          D(e);
                        },
                      }),
                    ],
                  }),
                  (0, n.jsx)(v.Z, {
                    selectedTags: w[E.aC.USER],
                    query: Z,
                    onQueryChange: en,
                    onClickRow: (e) => el(E.aC.USER, e),
                    onRemoveTag: (e) => es(E.aC.USER, e),
                    title:
                      C.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS,
                    hintText:
                      C.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS_HINT.format(
                        { count: _.uv },
                      ),
                    placeholderText:
                      C.Z.Messages
                        .BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_USERS,
                    users: ee,
                    expanded: B,
                    setExpanded: (e) => {
                      en(""), k(e), F(!1);
                    },
                    maxCount: _.uv,
                  }),
                  (0, n.jsx)(v.Z, {
                    selectedTags: w[E.aC.GUILD],
                    query: Z,
                    onQueryChange: en,
                    onClickRow: (e) => el(E.aC.GUILD, e),
                    onRemoveTag: (e) => es(E.aC.GUILD, e),
                    title:
                      C.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS,
                    hintText:
                      C.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS_HINT.format(
                        { count: _.Ly },
                      ),
                    placeholderText:
                      C.Z.Messages
                        .BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_GUILDS,
                    guilds: et,
                    expanded: P,
                    setExpanded: (e) => {
                      en(""), F(e), k(!1);
                    },
                    maxCount: _.Ly,
                  }),
                  (0, n.jsx)(o.FormTitle, {
                    tag: o.FormTitleTags.H5,
                    className: R.title,
                    children:
                      C.Z.Messages.BROADCASTING_SETTINGS_MODAL_BEHAVIOR_TITLE,
                  }),
                  (0, n.jsxs)("div", {
                    className: R.switch,
                    children: [
                      (0, n.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: C.Z.Messages.AUTO_BROADCAST_TOGGLE,
                      }),
                      (0, n.jsx)(o.Switch, { checked: O, onChange: G }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)(o.ModalFooter, {
                children: (0, n.jsx)(o.Button, {
                  disabled: q,
                  onClick: function () {
                    if (!q) {
                      if (K) {
                        let [e, t] = er();
                        m.hW.updateAsync(
                          "broadcast",
                          (a) => {
                            (a.allowedGuildIds = e),
                              (a.allowedUserIds = t),
                              (a.allowFriends = i.D5.create({ value: U })),
                              (a.autoBroadcast = i.D5.create({ value: O })),
                              ea(),
                              I();
                          },
                          m.fy.INFREQUENT_USER_ACTION,
                        );
                        return;
                      }
                      ea(), I();
                    }
                  },
                  children: a,
                }),
              }),
            ],
          })
        );
      }
    },
    971628: function (e, t, a) {
      a.d(t, {
        G: function () {
          return b;
        },
        Z: function () {
          return R;
        },
      }),
        a(47120),
        a(724458);
      var n = a(735250),
        l = a(470079),
        s = a(120356),
        r = a.n(s),
        i = a(91192),
        o = a(481060),
        c = a(385499),
        d = a(600164),
        u = a(313201),
        m = a(565138),
        h = a(631969),
        S = a(605436),
        x = a(537383),
        T = a(71080),
        g = a(689938),
        f = a(779077);
      let v = (0, u.hQ)(),
        _ = (0, u.hQ)();
      function b(e) {
        return "".concat(e.rowType, ":").concat(e.id);
      }
      function E(e) {
        return (0, n.jsx)(
          o.FormTitle,
          {
            tag: "h5",
            className: r()(f.sectionTitle, f.rowHeight),
            children: e,
          },
          e,
        );
      }
      function C(e) {
        let {
            id: t,
            children: a,
            rowLabel: l,
            checked: s,
            onSelect: c,
            disabled: u,
            showCheckbox: m,
            selected: h,
            onMouseEnter: S,
            "aria-posinset": x,
            "aria-setsize": T,
          } = e,
          g = (0, i.JA)(t);
        return (0, n.jsx)(o.Clickable, {
          ...g,
          id: t,
          className: r()(f.addMemberRow, { [f.selectedRow]: h }),
          onClick: (e) => {
            !u && (e.preventDefault(), c());
          },
          onMouseEnter: S,
          role: "option",
          "aria-disabled": u,
          "aria-selected": s,
          "aria-setsize": T,
          "aria-posinset": x,
          children: (0, n.jsxs)(d.Z, {
            justify: d.Z.Justify.BETWEEN,
            align: d.Z.Align.CENTER,
            children: [
              m
                ? (0, n.jsx)(o.Checkbox, {
                    displayOnly: !0,
                    size: 18,
                    value: s,
                    type: o.Checkbox.Types.INVERTED,
                    disabled: u,
                    children: (0, n.jsx)("div", {
                      className: f.checkboxLabel,
                      children: a,
                    }),
                  })
                : a,
              null != l
                ? (0, n.jsx)(o.Text, {
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: l,
                  })
                : null,
            ],
          }),
        });
      }
      function R(e) {
        let {
            listClassName: t,
            pendingAdditions: a,
            query: s,
            onQueryChange: i,
            onClickRow: u,
            onRemovePendingAddition: R,
            roles: p = [],
            members: I = [],
            users: M = [],
            guilds: A = [],
            placeholderText: w,
            disabledText: N,
            hintText: Z,
            searchTitleText: j,
            renderEmptyText: L,
            focusSearchAfterReady: U,
            isReady: D,
            maxCount: y,
            hideRowLabel: O = !1,
          } = e,
          G = l.useRef(null),
          B = l.useRef(null),
          k = [p.length, I.length, M.length, A.length],
          [P, F] = l.useState(!1),
          [H, z] = l.useState(0),
          [$, K] = l.useState(-1);
        l.useEffect(() => {
          var e;
          null === (e = G.current) || void 0 === e || e.focus();
        }, []);
        let Q = l.useCallback(function (e, t) {
            let a =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
            if ((z(e), K(t), a)) {
              var n;
              null === (n = B.current) ||
                void 0 === n ||
                n.scrollToIndex({
                  section: null != e ? e : 0,
                  row: null != t ? t : 0,
                  padding: 8,
                });
            }
          }, []),
          W = l.useCallback(
            (e, t) => {
              if (null == t) return;
              i("");
              let a = (e === T.m$.ROLES ? p : [])[t];
              a.rowType !== T.aC.EMPTY_STATE && u(a);
            },
            [p, u, i],
          ),
          q = l.useCallback(
            (e) => {
              var t;
              if (null != e && e.rowType !== T.aC.EMPTY_STATE)
                u(e),
                  i(""),
                  null === (t = G.current) || void 0 === t || t.focus();
            },
            [u, i],
          ),
          V = l.useMemo(() => Object.keys(a), [a]),
          Y =
            l.useMemo(
              () =>
                I.some((e) => !e.disabled) ||
                p.some((e) => !e.disabled) ||
                M.some((e) => !e.disabled) ||
                A.some((e) => !e.disabled),
              [I, p, M, A],
            ) || "" === s.trim();
        function J() {
          var e;
          F(
            !(null === (e = B.current) || void 0 === e
              ? void 0
              : e.isScrolledToTop()) && Y,
          );
        }
        return (
          l.useEffect(() => {
            J();
          }),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("div", {
                className: r()(f.searchBox, { [f.scrollSeparator]: P }),
                children: [
                  null != j &&
                    (0, n.jsx)(o.FormTitle, {
                      tag: o.FormTitleTags.H5,
                      children: j,
                    }),
                  (0, n.jsx)(x.Z, {
                    ref: G,
                    query: s,
                    onQueryChange: i,
                    selectedSection: H,
                    selectedRow: $,
                    onSelectionChange: Q,
                    onSelect: W,
                    tags: V.map((e) => a[e].display),
                    sections: k,
                    onRemoveTag: function (e) {
                      R(V[e]);
                    },
                    placeholder: w,
                    focusAfterReady: U,
                    isReady: D,
                    "aria-labelledby": v,
                    "aria-controls": _,
                  }),
                  null != Z
                    ? (0, n.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        children: Z,
                      })
                    : null,
                ],
              }),
              Y
                ? (0, n.jsx)(o.List, {
                    ref: B,
                    className: r()(f.roleMemberList, t),
                    sections: k,
                    renderRow: (e) => {
                      let t,
                        l,
                        { section: s, row: i } = e,
                        d = null,
                        u = !1,
                        h = !1,
                        x = !1,
                        g = null != y && Object.keys(a).length >= y;
                      switch (s) {
                        case T.m$.ROLES:
                          (u = (l = b((d = p[i]))) in a || d.disabled),
                            (h = d.disabled || g),
                            (x = H === T.m$.ROLES && $ === i),
                            (t = (0, n.jsxs)("div", {
                              className: f.rowBody,
                              children: [
                                (0, n.jsx)("div", {
                                  className: r()(f.rowHeight, f.alignCenter),
                                  children: (0, n.jsx)(o.ShieldUserIcon, {
                                    size: "custom",
                                    color: d.colorString,
                                    height: 20,
                                  }),
                                }),
                                (0, n.jsxs)("div", {
                                  className: f.rowLabel,
                                  children: [
                                    (0, n.jsx)(o.Text, {
                                      variant: "text-sm/medium",
                                      className: f.__invalid_rowTitle,
                                      color:
                                        d.rowType === T.aC.EMPTY_STATE
                                          ? "text-muted"
                                          : "text-normal",
                                      children: d.name,
                                    }),
                                    d.disabled && null != N
                                      ? (0, n.jsx)(o.Text, {
                                          color: "header-secondary",
                                          variant: "text-xs/normal",
                                          children: N,
                                        })
                                      : null,
                                  ],
                                }),
                              ],
                            }));
                          break;
                        case T.m$.MEMBERS:
                          (u = (l = b((d = I[i]))) in a || d.disabled),
                            (h = d.disabled || g),
                            (x = H === T.m$.MEMBERS && $ === i),
                            (t = (0, n.jsxs)("div", {
                              className: f.rowBody,
                              children: [
                                (0, n.jsx)(o.Avatar, {
                                  src: d.avatarURL,
                                  size: o.AvatarSizes.SIZE_24,
                                  "aria-label": "",
                                }),
                                (0, n.jsx)(o.Text, {
                                  className: f.rowLabel,
                                  variant: "text-sm/normal",
                                  children: d.name,
                                }),
                                null != d.nickname
                                  ? (0, n.jsx)(o.Text, {
                                      color: "text-muted",
                                      className: f.rowLabelSubText,
                                      variant: "text-sm/normal",
                                      "aria-hidden": !0,
                                      children: d.username,
                                    })
                                  : null,
                                d.bot &&
                                  (0, n.jsx)(c.Z, { verified: d.verifiedBot }),
                              ],
                            }));
                          break;
                        case T.m$.USERS:
                          (u = (l = b((d = M[i]))) in a || d.disabled),
                            (h = d.disabled || g),
                            (x = H === T.m$.USERS && $ === i),
                            (t = (0, n.jsxs)("div", {
                              className: f.rowBody,
                              children: [
                                (0, n.jsx)(o.Avatar, {
                                  src: d.avatarURL,
                                  size: o.AvatarSizes.SIZE_24,
                                  "aria-label": "",
                                }),
                                (0, n.jsxs)("div", {
                                  className: f.rowLabel,
                                  children: [
                                    (0, n.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      children: d.name,
                                    }),
                                    d.disabled && null != N
                                      ? (0, n.jsx)(o.Text, {
                                          color: "header-secondary",
                                          variant: "text-xs/normal",
                                          children: N,
                                        })
                                      : null,
                                  ],
                                }),
                              ],
                            }));
                          break;
                        case T.m$.GUILDS:
                          (u = (l = b((d = A[i]))) in a || d.disabled),
                            (h = d.disabled || g),
                            (x = H === T.m$.GUILDS && $ === i),
                            (t = (0, n.jsxs)("div", {
                              className: f.rowBody,
                              children: [
                                (0, n.jsx)(m.Z, {
                                  guild: d.guild,
                                  active: !0,
                                  size: m.Z.Sizes.SMALLER,
                                }),
                                (0, n.jsx)("div", {
                                  className: f.rowLabel,
                                  children: (0, n.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: d.name,
                                  }),
                                }),
                              ],
                            }));
                      }
                      return null == d
                        ? null
                        : (0, n.jsx)(
                            C,
                            {
                              id: "user-row-".concat(i),
                              rowLabel: O ? null : S.zB(d.rowType),
                              checked: u,
                              disabled: h,
                              onSelect: () => q(d),
                              showCheckbox: d.rowType !== T.aC.EMPTY_STATE,
                              onMouseEnter: () => Q(s, i, !1),
                              selected: x,
                              "aria-posinset": i + 1,
                              "aria-setsize": k.reduce((e, t) => e + t, 0),
                              children: t,
                            },
                            l,
                          );
                    },
                    rowHeight: 40,
                    renderSection: (e) => {
                      let { section: t } = e;
                      switch (t) {
                        case T.m$.ROLES:
                          return E(g.Z.Messages.ROLES);
                        case T.m$.MEMBERS:
                          return E(g.Z.Messages.MEMBERS);
                        case T.m$.USERS:
                          return E(g.Z.Messages.USERS);
                        case T.m$.GUILDS:
                          return E(g.Z.Messages.SERVERS);
                      }
                    },
                    sectionHeight: 32,
                    onScroll: J,
                    role: void 0,
                    innerRole: "listbox",
                    innerId: _,
                    innerAriaMultiselectable: !0,
                    innerAriaOrientation: "vertical",
                  })
                : (0, n.jsxs)(d.Z, {
                    className: t,
                    align: d.Z.Align.CENTER,
                    justify: d.Z.Justify.CENTER,
                    direction: d.Z.Direction.VERTICAL,
                    children: [
                      (0, n.jsx)(h.Z, { className: f.noResultIcon }),
                      (0, n.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: L(s),
                      }),
                    ],
                  }),
            ],
          })
        );
      }
    },
    537383: function (e, t, a) {
      var n = a(735250),
        l = a(470079),
        s = a(461745),
        r = a(990801);
      let i = l.forwardRef(function (e, t) {
        let {
          query: a,
          onQueryChange: l,
          onRemoveTag: i,
          onSelect: o,
          onSelectionChange: c,
          selectedSection: d,
          selectedRow: u,
          tags: m,
          sections: h,
          placeholder: S = "",
          focusAfterReady: x,
          isReady: T,
          "aria-labelledby": g,
          "aria-controls": f,
        } = e;
        return (0, n.jsx)(s.ZP, {
          autoFocus: !0,
          className: r.searchBar,
          maxHeight: 100,
          onQueryChange: l,
          onRemoveTag: i,
          selectedSection: d,
          selectedRow: u,
          onSelect: o,
          onSelectionChange: c,
          placeholder: 0 === m.length ? S : "",
          query: a,
          ref: t,
          size: s.ZP.Sizes.MEDIUM,
          tags: m,
          sections: h,
          focusAfterReady: x,
          isReady: T,
          inputProps: {
            "aria-labelledby": g,
            "aria-controls": f,
            "aria-expanded": !0,
            "aria-activedescendant": "user-row-".concat(u),
          },
        });
      });
      t.Z = i;
    },
    631969: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = a(735250);
      a(470079);
      var l = a(120356),
        s = a.n(l),
        r = a(410638);
      function i(e) {
        let { className: t } = e;
        return (0, n.jsx)("div", { className: s()(r.image, t) });
      }
    },
    760882: function (e, t, a) {
      e.exports = {
        content: "content_f90cbf",
        collapsible: "collapsible_f90cbf",
        collapsibleContent: "collapsibleContent_f90cbf",
        visible: "visible_f90cbf",
        list: "list_f90cbf",
      };
    },
    268405: function (e, t, a) {
      e.exports = {
        content: "content_a3300d",
        title: "title_a3300d",
        switch: "switch_a3300d",
        header: "header_a3300d",
        description: "description_a3300d",
        close: "close_a3300d",
      };
    },
    779077: function (e, t, a) {
      e.exports = {
        modalRoot: "modalRoot_a0cc0d",
        button: "button_a0cc0d",
        header: "header_a0cc0d",
        headerSubtitle: "headerSubtitle_a0cc0d",
        alignCenter: "alignCenter_a0cc0d",
        headerSubtitleIcon: "headerSubtitleIcon_a0cc0d",
        content: "content_a0cc0d",
        searchBox: "searchBox_a0cc0d",
        roleMemberList: "roleMemberList_a0cc0d",
        addMemberRow: "addMemberRow_a0cc0d",
        selectedRow: "selectedRow_a0cc0d",
        rowBody: "rowBody_a0cc0d",
        checkboxLabel: "checkboxLabel_a0cc0d",
        rowHeight: "rowHeight_a0cc0d",
        rowLabel: "rowLabel_a0cc0d",
        rowLabelSubText: "rowLabelSubText_a0cc0d",
        sectionTitle: "sectionTitle_a0cc0d",
        noResultIcon: "noResultIcon_a0cc0d",
        description: "description_a0cc0d",
        scrollSeparator: "scrollSeparator_a0cc0d",
      };
    },
    990801: function (e, t, a) {
      e.exports = { searchBar: "searchBar_ac8310" };
    },
    410638: function (e, t, a) {
      e.exports = { image: "image_fea561" };
    },
  },
]);
//# sourceMappingURL=9dedda365ae61befe9d8.js.map
