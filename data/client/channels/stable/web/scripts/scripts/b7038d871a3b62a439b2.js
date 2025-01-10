"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83098"],
  {
    621054: function (e) {
      e.exports = "/assets/a315359c0fd32511b45e.svg";
    },
    207003: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return H;
        },
      });
      var l = n(200651),
        r = n(192379),
        s = n(120356),
        i = n.n(s),
        a = n(913527),
        u = n.n(a),
        o = n(91192),
        c = n(442837),
        d = n(481060),
        f = n(700582),
        h = n(724757),
        m = n(212819),
        b = n(933557),
        p = n(266076),
        x = n(810123),
        g = n(448486),
        y = n(987509),
        C = n(131704),
        S = n(592125),
        v = n(430824),
        E = n(496675),
        Z = n(158776),
        N = n(306680),
        L = n(699516),
        _ = n(594174),
        j = n(55935),
        M = n(823379),
        T = n(51144),
        R = n(981631),
        k = n(490897),
        P = n(388032),
        I = n(409267);
      function D(e) {
        let {
            destination: t,
            icon: n,
            label: s,
            subLabel: a,
            selected: u,
            disabled: c,
            onPressDestination: f,
            "aria-setsize": h,
            "aria-posinset": m,
          } = e,
          b = (0, o.JA)(t.id),
          p = r.useCallback(() => {
            !c && (null == f || f(t));
          }, [f, c, t]);
        return (0, l.jsxs)(d.Clickable, {
          className: i()(I.destinationRow, { [I.disabled]: c }),
          onClick: p,
          "aria-selected": u,
          "aria-setsize": h,
          "aria-posinset": m,
          ...b,
          children: [
            (0, l.jsxs)("div", {
              className: I.identity,
              children: [
                (0, l.jsx)("div", { className: I.iconWrapper, children: n }),
                (0, l.jsxs)("div", {
                  className: I.labels,
                  children: [
                    (0, l.jsx)(d.Text, {
                      tag: "strong",
                      className: I.label,
                      variant: "text-md/semibold",
                      lineClamp: 1,
                      children: s,
                    }),
                    (0, l.jsx)(d.Text, {
                      className: I.subLabel,
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: a,
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)(d.Checkbox, {
              type: d.Checkbox.Types.INVERTED,
              displayOnly: !0,
              size: 24,
              value: u,
              className: I.checkbox,
            }),
          ],
        });
      }
      function A(e) {
        let { user: t, subLabel: n, ...r } = e,
          s = T.ZP.useName(t),
          i = T.ZP.useUserTag(t, { decoration: "never" }),
          a = (0, c.e7)([L.Z], () => L.Z.getNickname(t.id)),
          u = (0, c.e7)([Z.Z], () => Z.Z.getStatus(t.id));
        return (0, l.jsx)(D, {
          ...r,
          icon: (0, l.jsx)(f.Z, {
            "aria-hidden": !0,
            size: d.AvatarSizes.SIZE_32,
            user: t,
            status: u,
          }),
          label: null != a ? a : s,
          subLabel: null != n ? n : i,
        });
      }
      function U(e) {
        let { channel: t, subLabel: n, ...r } = e,
          s = (0, b.ZP)(t),
          i = (0, g._)(t);
        return (0, l.jsx)(D, {
          ...r,
          icon: (0, l.jsx)(p.Z, {
            "aria-hidden": !0,
            size: d.AvatarSizes.SIZE_32,
            channel: t,
            experimentLocation: "application-command-modal",
          }),
          label: s,
          subLabel: null != n ? n : i,
        });
      }
      function B(e) {
        let { channel: t, subLabel: n, ...r } = e,
          s = (0, c.e7)([v.Z], () =>
            v.Z.getGuild(null == t ? void 0 : t.guild_id),
          ),
          i = (0, b.ZP)(t),
          a = (0, c.e7)([S.Z, _.default, L.Z], () => {
            let e = S.Z.getChannel(t.parent_id);
            return null == e ? null : (0, b.F6)(e, _.default, L.Z, !1);
          }),
          o = (0, c.e7)([N.ZP], () =>
            N.ZP.lastMessageTimestamp(t.id, k.W.CHANNEL),
          ),
          f = null == s ? void 0 : s.name;
        if (t.isThread() || t.isForumPost()) {
          let e = t.isForumPost() ? d.ForumIcon : d.TextIcon;
          f = (0, l.jsxs)("div", {
            className: I.threadSubLabel,
            children: [
              (0, l.jsx)(e, {
                color: d.tokens.colors.TEXT_SECONDARY,
                className: I.subLabelIcon,
              }),
              (0, l.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "text-secondary",
                lineClamp: 1,
                children: a,
              }),
              null != o
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(d.Text, {
                        className: I.subLabelSeparator,
                        variant: "text-xs/medium",
                        color: "text-secondary",
                        children: "•",
                      }),
                      (0, l.jsx)(d.Text, {
                        variant: "text-xs/medium",
                        color: "text-secondary",
                        children: (0, j.Xf)(u()(o)),
                      }),
                    ],
                  })
                : null,
            ],
          });
        }
        return (0, l.jsx)(D, {
          ...r,
          icon: (0, l.jsx)(x.Z, { size: x.E.SMALL_32, guild: s, channel: t }),
          label: i,
          subLabel: null != n ? n : f,
        });
      }
      function H(e) {
        let {
            rowData: t,
            selectedDestinations: n,
            handleToggleDestination: s,
            disableSelection: i,
            ...a
          } = e,
          u = r.useMemo(() => [t.length], [t.length]),
          c = r.useCallback(() => 48, []),
          f = r.useMemo(() => {
            var e;
            return null !== (e = null == n ? void 0 : n.map(y.hC)) &&
              void 0 !== e
              ? e
              : [];
          }, [n]),
          b = r.useCallback(
            (e) => {
              let { section: n, row: r } = e;
              if (n > 0) return;
              let { type: a, record: u } = t[r];
              if (a === m.h8.HEADER) return;
              let o =
                  a === m.h8.USER
                    ? { type: "user", id: u.id }
                    : { type: "channel", id: u.id },
                c = (0, y.hC)(o),
                d = (function (e) {
                  if (
                    e instanceof C.Sf &&
                    (0, C.Km)(e.type) &&
                    null != e.rateLimitPerUser &&
                    e.rateLimitPerUser > 0 &&
                    !(
                      E.Z.can(R.Plq.MANAGE_CHANNELS, e) ||
                      E.Z.can(R.Plq.MANAGE_MESSAGES, e)
                    )
                  )
                    return { label: P.intl.string(P.t.Icu3bW) };
                })(u),
                h = f.includes(c),
                b = {
                  key: c,
                  destination: o,
                  subLabel: null != d ? d.label : void 0,
                  disabled: (i && !h) || null != d,
                  selected: h,
                  onPressDestination: s,
                  "aria-posinset": r + 1,
                  "aria-setsize": t.length,
                };
              if (a === m.h8.USER) return (0, l.jsx)(A, { user: u, ...b });
              if (a === m.h8.GROUP_DM)
                return (0, l.jsx)(U, { channel: u, ...b });
              if (a === m.h8.TEXT_CHANNEL || a === m.h8.VOICE_CHANNEL)
                return (0, l.jsx)(B, { channel: u, ...b });
              else (0, M.vE)(a);
            },
            [i, s, t, f],
          ),
          p = r.useRef(null),
          x = (0, h.Z)("share-command-modal", p);
        return (0, l.jsx)(o.bG, {
          navigator: x,
          children: (0, l.jsx)(o.SJ, {
            children: (e) => {
              let { ref: t, ...n } = e;
              return (0, l.jsx)(d.ModalListContent, {
                scrollerRef: (e) => {
                  var n;
                  (p.current = e),
                    (t.current =
                      null !== (n = null == e ? void 0 : e.getScrollerNode()) &&
                      void 0 !== n
                        ? n
                        : null);
                },
                ...n,
                ...a,
                sections: u,
                sectionHeight: 0,
                renderRow: b,
                rowHeight: c,
              });
            },
          }),
        });
      }
    },
    137021: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
        }),
        n(47120);
      var l = n(200651),
        r = n(192379),
        s = n(442837),
        i = n(481060),
        a = n(904245),
        u = n(311819),
        o = n(835473),
        c = n(957730),
        d = n(987509),
        f = n(72214),
        h = n(592125),
        m = n(594174),
        b = n(572004),
        p = n(823379),
        x = n(207003),
        g = n(388032),
        y = n(409267),
        C = n(621054);
      function S(e) {
        let {
            applicationId: t,
            onClose: n,
            transitionState: b,
            message: S,
            launchParams: E,
            onShare: Z,
            ...N
          } = e,
          [L] = (0, o.Z)([t]),
          _ = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
          [j, M] = r.useState(!1),
          [T, R] = r.useState(""),
          [k, P] = r.useState("");
        r.useEffect(() => {
          let { referrerId: e, customId: n } = E;
          P(
            (0, u.H)({
              applicationId: t,
              referrerId: null != e ? e : null == _ ? void 0 : _.id,
              customId: n,
            }),
          );
        }, [t, _, E, P]);
        let I = r.useRef(0),
          [D, A] = r.useState([]),
          U = D.length,
          B = U >= 5;
        r.useEffect(() => {
          if ("" === T) {
            var e;
            null === (e = z.current) || void 0 === e || e.focus();
          }
        }, [T]);
        let H = r.useCallback(() => {
            R("");
          }, [R]),
          z = r.useRef(null),
          { results: w, updateSearchText: q } = (0, f.s)({
            selectedDestinations: D,
            includeMissingDMs: !0,
          }),
          F = r.useCallback(
            (e) => {
              R(e), q(e);
            },
            [R, q],
          ),
          O = r.useCallback(
            (e) => {
              A((t) => {
                let n = t.findIndex((t) => {
                  let { type: n, id: l } = t;
                  return n === e.type && l === e.id;
                });
                if (-1 === n)
                  return B ? t : (R(""), (I.current += 1), [e, ...t]);
                let l = [...t];
                return l.splice(n, 1), (I.current += 1), l;
              });
            },
            [B],
          ),
          W = r.useCallback(
            async (e) => {
              if (null == L) return;
              let t = "".concat(S, "\n").concat(k);
              M(!0),
                (await Promise.all(e.map(d.qx)))
                  .filter(p.lm)
                  .forEach(async (e) => {
                    let n = h.Z.getChannel(e);
                    if (null != n) await a.Z.sendMessage(e, c.ZP.parse(n, t));
                  }),
                (0, i.showToast)(
                  (0, i.createToast)(
                    g.intl.formatToPlainString(g.t.jQULqK, {
                      applicationName: L.name,
                    }),
                    i.ToastType.SUCCESS,
                  ),
                ),
                Z(!0),
                n();
            },
            [S, k, n, Z, L],
          ),
          G =
            w.length > 0
              ? (0, l.jsx)(x.Q, {
                  paddingBottom: 16,
                  paddingTop: 16,
                  rowData: w,
                  handleToggleDestination: O,
                  selectedDestinations: D,
                  disableSelection: B,
                })
              : (0, l.jsxs)(i.ModalContent, {
                  className: y.noResults,
                  children: [
                    (0, l.jsx)("img", {
                      className: y.noResultsImg,
                      src: C,
                      alt: "",
                    }),
                    (0, l.jsx)(i.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: g.intl.string(g.t.V6nAfH),
                    }),
                  ],
                });
        return (0, l.jsxs)(i.ModalRoot, {
          transitionState: b,
          ...N,
          className: y.modalRoot,
          children: [
            (0, l.jsxs)(i.ModalHeader, {
              className: y.header,
              children: [
                (0, l.jsxs)("div", {
                  className: y.titleLine,
                  children: [
                    (0, l.jsx)("div", {
                      className: y.title,
                      children: (0, l.jsx)(i.HeadingLevel, {
                        component: (0, l.jsx)(i.Heading, {
                          variant: "heading-lg/semibold",
                          children: g.intl.string(g.t.r9qKo6),
                        }),
                        children: (0, l.jsx)(i.Text, {
                          className: y.message,
                          lineClamp: 1,
                          variant: "text-sm/medium",
                          color: "text-secondary",
                          children: S,
                        }),
                      }),
                    }),
                    (0, l.jsx)(i.ModalCloseButton, {
                      className: y.closeButton,
                      onClick: n,
                    }),
                  ],
                }),
                (0, l.jsx)(i.SearchBar, {
                  ref: z,
                  size: i.SearchBar.Sizes.MEDIUM,
                  query: T,
                  onChange: F,
                  onClear: H,
                  placeholder: g.intl.string(g.t["5h0QOD"]),
                  "aria-label": g.intl.string(g.t["5h0QOD"]),
                  autoFocus: !0,
                }),
              ],
            }),
            G,
            (0, l.jsx)(i.ModalFooter, {
              className: y.footer,
              children: (0, l.jsxs)("div", {
                className: y.copySendBar,
                children: [
                  (0, l.jsx)(v, { link: k }),
                  (0, l.jsx)(i.Button, {
                    className: y.sendWithMessage,
                    onClick: () => W(D),
                    submitting: j,
                    disabled: !(U > 0),
                    children: g.intl.string(g.t.TXNS7e),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function v(e) {
        let { link: t } = e,
          [n, s] = r.useState(!1);
        return (
          r.useEffect(() => {
            let e;
            return (
              n &&
                (e = setTimeout(() => {
                  s(!1);
                }, 1e3)),
              () => {
                null != e && clearTimeout(e);
              }
            );
          }, [n]),
          (0, l.jsxs)(i.Button, {
            look: i.Button.Looks.LINK,
            color: i.Button.Colors.LINK,
            onClick: function () {
              (0, b.JG)(t), s(!0);
            },
            innerClassName: y.copyButton,
            children: [
              n
                ? (0, l.jsx)(i.CircleCheckIcon, {
                    size: "md",
                    color: "currentColor",
                  })
                : (0, l.jsx)(i.CopyIcon, { size: "xs", color: "currentColor" }),
              n ? g.intl.string(g.t["t5VZ8/"]) : g.intl.string(g.t.WqhZsr),
            ],
          })
        );
      }
    },
    448486: function (e, t, n) {
      n.d(t, {
        _: function () {
          return o;
        },
      });
      var l = n(192379),
        r = n(442837),
        s = n(594174),
        i = n(823379),
        a = n(51144),
        u = n(388032);
      function o(e) {
        let t = (0, r.Wu)([s.default], () =>
          e.recipients
            .map((e) => s.default.getUser(e))
            .filter(i.lm)
            .map((e) => a.ZP.getName(e)),
        );
        return l.useMemo(
          () =>
            "" === e.name
              ? null
              : (function (e) {
                  if (0 === e.length) return null;
                  if (1 === e.length)
                    return u.intl.formatToPlainString(u.t["J+Wpsr"], {
                      first: e[0],
                    });
                  if (2 === e.length)
                    return u.intl.formatToPlainString(u.t.gwRP0d, {
                      first: e[0],
                      second: e[1],
                    });
                  if (3 === e.length)
                    return u.intl.formatToPlainString(u.t.QDB5en, {
                      first: e[0],
                      second: e[1],
                      third: e[2],
                    });
                  let t = e.length - 3;
                  return u.intl.formatToPlainString(u.t.VYfueX, {
                    first: e[0],
                    second: e[1],
                    third: e[2],
                    count: t,
                  });
                })(t),
          [e, t],
        );
      }
    },
    41837: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
        o: function () {
          return s;
        },
      });
      var l = n(212819);
      let r = Array.from([
        l.h8.USER,
        l.h8.TEXT_CHANNEL,
        l.h8.VOICE_CHANNEL,
        l.h8.GROUP_DM,
      ]);
      function s(e) {
        return r.includes(e.type);
      }
    },
    987509: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return S;
        },
        dL: function () {
          return m;
        },
        hC: function () {
          return b;
        },
        hl: function () {
          return p;
        },
        qx: function () {
          return x;
        },
      }),
        n(47120),
        n(653041);
      var l = n(392711),
        r = n(493683),
        s = n(212819),
        i = n(938078),
        a = n(823385),
        u = n(592125),
        o = n(496675),
        c = n(594174),
        d = n(823379),
        f = n(41837),
        h = n(981631);
      n(388032);
      function m(e) {
        let t = u.Z.getChannel(e);
        return (null == t ? void 0 : t.type) === h.d4z.DM
          ? { type: "user", id: t.recipients[0] }
          : { type: "channel", id: e };
      }
      function b(e) {
        return "".concat(e.type, "-").concat(e.id);
      }
      function p(e) {
        if ("channel" === e.type) return e.id;
        let t = u.Z.getDMFromUserId(e.id);
        if (null != t) return t;
      }
      async function x(e) {
        let t = p(e);
        if (null != t) return t;
        if ("user" === e.type)
          try {
            return await r.Z.getOrEnsurePrivateChannel(e.id);
          } catch (e) {
            return;
          }
      }
      function g(e) {
        if ("user" !== e.type) return (0, i.Z)(e.id);
        {
          let t = c.default.getUser(e.id);
          return null != t ? { type: s.h8.USER, record: t, score: 0 } : null;
        }
      }
      function y(e, t) {
        let n;
        let l = new Set();
        if (null != t) for (let e of t) l.add(e);
        let r = [];
        for (let t of e) {
          if (null != t)
            if (t.type === s.h8.HEADER) n = t;
            else {
              let { id: e } = t.record;
              !l.has(e) &&
                (l.add(e), null != n && (r.push(n), (n = void 0)), r.push(t));
            }
        }
        return r;
      }
      function C(e, t) {
        return e.filter((e) => {
          var n, l;
          return (
            (0, d.lm)(e) &&
            (e.type === s.h8.HEADER ||
              ((0, f.o)(e) &&
                ((n = e),
                (l = t),
                n.type === s.h8.USER
                  ? l || null != u.Z.getDMChannelFromUserId(n.record.id)
                  : n.type === s.h8.GROUP_DM ||
                    (n.record.type !== h.d4z.GUILD_FORUM &&
                      n.record.type !== h.d4z.GUILD_MEDIA &&
                      o.Z.can(h.Plq.VIEW_CHANNEL, n.record) &&
                      o.Z.can(h.Plq.SEND_MESSAGES, n.record)))))
          );
        });
      }
      function S(e) {
        let {
          results: t,
          hasQuery: n,
          queryMode: r,
          frequentChannels: s,
          targetDestination: u,
          selectedDestinations: o,
          pinnedDestinations: c,
          originDestination: d,
          includeMissingDMs: f,
        } = e;
        if (n) return y(C(t, f));
        let h = null != c && c.length > 0 ? c.map((e) => g(e)) : [],
          m = a.Z.getChannelHistory(),
          b = m.length > 0 ? m.map((e) => (0, i.Z)(e)) : [],
          p = s.length > 0 ? s.map((e) => (0, i.Z)(e.id)) : [],
          x = C([...h, null != u ? g(u) : null, ...b, ...p], f),
          S =
            (null == o ? void 0 : o.find((e) => (0, l.isEqual)(e, d))) != null,
          v = null == d || S ? [] : [d.id];
        return null != r
          ? y(x.filter((e) => e.type === r))
          : y(x, v).slice(0, 15);
      }
    },
    601565: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      }),
        n(47120);
      var l = n(192379),
        r = n(211266),
        s = n(212819);
      function i(e) {
        let { searchOptions: t } = e,
          [n, i] = l.useState({ results: [], query: "" }),
          a = (0, r.Z)(() => {
            let e = new s.ZP((e, t) => {
              i({ results: e, query: t });
            });
            return e.setLimit(20), e.search(""), e;
          });
        return (
          l.useEffect(() => () => a.destroy(), [a]),
          l.useEffect(() => {
            null != t && t !== a.options && a.setOptions(t);
          }, [a, t]),
          {
            search: l.useCallback(
              (e) => {
                var t, n;
                let { query: l, resultTypes: r } = e;
                if (
                  null == a.resultTypes ||
                  ((t = r),
                  (n = a.resultTypes),
                  !(t.length === n.size && t.every((e) => n.has(e))))
                )
                  a.setResultTypes(r), a.setLimit(1 === r.length ? 50 : 20);
                a.search("" === l.trim() ? "" : l);
              },
              [a],
            ),
            ...n,
          }
        );
      }
    },
    72214: function (e, t, n) {
      n.d(t, {
        s: function () {
          return m;
        },
      }),
        n(47120);
      var l = n(192379),
        r = n(442837),
        s = n(38618),
        i = n(51596),
        a = n(516373),
        u = n(314897),
        o = n(580005),
        c = n(987509),
        d = n(601565),
        f = n(41837);
      function h(e) {
        let { query: t, queryMode: n } = (0, i.F_)(e),
          l = f.M,
          r = null;
        return (
          null != n && f.M.includes(n) && ((l = [n]), (r = n)),
          { query: t, queryMode: r, resultTypes: l }
        );
      }
      function m(e) {
        let {
            targetDestination: t,
            selectedDestinations: n,
            originDestination: i,
            includeMissingDMs: f = !1,
          } = e,
          m = (0, r.e7)([u.default], () => u.default.getId()),
          b = l.useMemo(
            () => ({
              searchOptions: {
                blacklist: new Set(["user:".concat(m)]),
                frecencyBoosters: !0,
                userFilters: null,
              },
            }),
            [m],
          ),
          { search: p, query: x, results: g } = (0, d.Z)(b),
          [y, C] = l.useState(h("")),
          S = l.useCallback((e) => C(h(e)), [C]),
          { queryMode: v } = y,
          [E, Z] = l.useState(null != n ? n : []),
          N = l.useRef(n);
        l.useEffect(() => {
          N.current = n;
        }),
          l.useLayoutEffect(() => {
            var e;
            let { query: t, resultTypes: n } = y;
            p({ query: t, resultTypes: n }),
              Z(null !== (e = N.current) && void 0 !== e ? e : []);
          }, [p, y]),
          (0, a.D)();
        let L = (0, r.e7)([o.Z], () =>
            o.Z.getFrequentlyWithoutFetchingLatest(),
          ),
          _ = (0, r.e7)([s.Z], () => s.Z.isConnected()),
          j = "" !== x;
        return {
          results: l.useMemo(
            () =>
              (0, c.ZP)({
                results: g,
                hasQuery: j,
                queryMode: v,
                targetDestination: t,
                frequentChannels: L,
                selectedDestinations: n,
                pinnedDestinations: E,
                originDestination: i,
                includeMissingDMs: f,
                isConnected: _,
              }),
            [g, j, v, t, L, n, E, i, f, _],
          ),
          updateSearchText: S,
        };
      }
    },
    409267: function (e, t, n) {
      e.exports = {
        modalRoot: "modalRoot_d93e0b",
        header: "header_d93e0b",
        titleLine: "titleLine_d93e0b",
        title: "title_d93e0b",
        closeButton: "closeButton_d93e0b",
        message: "message_d93e0b",
        footer: "footer_d93e0b",
        copySendBar: "copySendBar_d93e0b",
        copyButton: "copyButton_d93e0b",
        destinationRow: "destinationRow_d93e0b",
        disabled: "disabled_d93e0b",
        identity: "identity_d93e0b",
        labels: "labels_d93e0b",
        label: "label_d93e0b",
        threadSubLabel: "threadSubLabel_d93e0b",
        subLabelIcon: "subLabelIcon_d93e0b",
        subLabelSeparator: "subLabelSeparator_d93e0b",
        iconWrapper: "iconWrapper_d93e0b",
        subLabel: "subLabel_d93e0b",
        checkbox: "checkbox_d93e0b",
        noResults: "noResults_d93e0b",
        noResultsImg: "noResultsImg_d93e0b",
        sendWithMessage: "sendWithMessage_d93e0b",
      };
    },
  },
]);
//# sourceMappingURL=b7038d871a3b62a439b2.js.map
