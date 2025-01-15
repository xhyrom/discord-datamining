"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53682"],
  {
    621054: function (e) {
      e.exports = "/assets/a315359c0fd32511b45e.svg";
    },
    683958: function (e, t, n) {
      n.r(t),
        n.d(t, {
          ApplicationCommandShareModal: function () {
            return _;
          },
          useQueryForAppCommands: function () {
            return Z;
          },
        }),
        n(47120);
      var l = n(200651),
        r = n(192379),
        i = n(481060),
        s = n(911969),
        a = n(835473),
        o = n(987509),
        u = n(72214),
        c = n(592125),
        d = n(430824),
        h = n(823379),
        f = n(213459),
        m = n(667204),
        g = n(739980),
        p = n(617266),
        b = n(333861),
        x = n(388032),
        v = n(661966),
        C = n(621054);
      let S = [s.yU.CHAT],
        y = () => {
          (0, i.closeModal)(b.s);
        };
      function N(e) {
        let { sendLabel: t, canSend: n, isSending: s, onSend: a } = e,
          o = r.useCallback(() => {
            a();
          }, [a]);
        return (0, l.jsx)(i.ModalFooter, {
          className: v.footerWithMessage,
          children: (0, l.jsx)("div", {
            className: v.footerButtons,
            children: (0, l.jsx)(i.Button, {
              className: v.sendWithMessage,
              submitting: s,
              disabled: !n,
              onClick: o,
              children: t,
            }),
          }),
        });
      }
      function Z(e, t) {
        return (0, f.v1)(
          e,
          { commandTypes: S },
          { applicationId: t, allowFetch: !1, allowApplicationState: !0 },
        );
      }
      function _(e) {
        let {
            applicationId: t,
            channel: n,
            command: s,
            onClose: f,
            requireLaunchChannel: b,
            onShareResult: S,
            previewMessage: _,
            ...j
          } = e,
          E = r.useMemo(() => (0, o.dL)(n.id), [n]),
          [M, L] = r.useState(!1),
          { commands: T, loading: P } = Z(n, t),
          w = r.useRef(0),
          [A, R] = r.useState(b ? [E] : []),
          k = A.length,
          D = k >= 5,
          [I, F] = r.useState(""),
          { results: H, updateSearchText: U } = (0, u.s)({
            selectedDestinations: A,
            originDestination: E,
            includeMissingDMs: !0,
          }),
          q = r.useCallback(
            (e) => {
              F(e), U(e);
            },
            [U],
          ),
          W = r.useCallback(() => {
            S(!1), f();
          }, [S, f]),
          [z] = (0, a.Z)([t]),
          O = r.useCallback(() => {
            F("");
          }, [F]),
          B = r.useRef(null);
        r.useEffect(() => {
          if ("" === I) {
            var e;
            null === (e = B.current) || void 0 === e || e.focus();
          }
        }, [I]);
        let G = r.useCallback(
            (e) => {
              R((t) => {
                let n = t.findIndex((t) => {
                  let { type: n, id: l } = t;
                  return n === e.type && l === e.id;
                });
                if (-1 === n)
                  return D ? t : (F(""), (w.current += 1), [e, ...t]);
                let l = [...t];
                return l.splice(n, 1), (w.current += 1), l;
              });
            },
            [D],
          ),
          [V, X] = r.useMemo(() => {
            if (P) return [null, !1];
            let e = T.find((e) => e.untranslatedName === s);
            return void 0 !== e ? [e, !1] : [null, !0];
          }, [s, T, P]),
          J = r.useCallback(
            async function (e) {
              let { closeAfterSend: t } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if (null === V) return;
              L(!0);
              let n = (await Promise.all(e.map(o.qx))).filter(h.lm);
              t && (S(!0), y()),
                n.forEach(async (e) => {
                  let t = c.Z.getChannel(e);
                  if (null == t) return;
                  let n = d.Z.getGuild(null == t ? void 0 : t.guild_id);
                  null !=
                    (await (0, m.Z)({
                      command: V,
                      optionValues: {},
                      context: { channel: t, guild: n },
                    })) &&
                    (0, i.showToast)(
                      (0, i.createToast)(
                        x.intl.string(x.t["5WjJcn"]),
                        i.ToastType.MESSAGE,
                      ),
                    );
                }),
                S(!0),
                y();
            },
            [S, V],
          ),
          Q = r.useCallback(() => {
            J(A, { closeAfterSend: !0 });
          }, [J, A]);
        if (P)
          return (0, l.jsx)(i.ModalRoot, {
            className: v.modal,
            "aria-label": x.intl.string(x.t.fuFvw8),
            ...j,
            children: (0, l.jsx)(i.Spinner, { className: v.spinnerContainer }),
          });
        X &&
          (i.ModalRoot,
          v.modal,
          x.intl.string(x.t.fuFvw8),
          i.ModalContent,
          x.intl.string(x.t.yAk8ZW));
        let Y =
          H.length > 0
            ? (0, l.jsx)(p.F, {
                paddingBottom: 16,
                paddingTop: 16,
                rowData: H,
                handleToggleDestination: G,
                selectedDestinations: A,
                disableSelection: D,
                originDestination: E,
              })
            : (0, l.jsxs)(i.ModalContent, {
                className: v.noResults,
                children: [
                  (0, l.jsx)("img", {
                    className: v.noResultsImg,
                    src: C,
                    alt: "",
                  }),
                  (0, l.jsx)(i.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: x.intl.string(x.t.V6nAfH),
                  }),
                ],
              });
        return (0, l.jsxs)(i.ModalRoot, {
          className: v.modal,
          "aria-label": x.intl.string(x.t.fuFvw8),
          ...j,
          children: [
            (0, l.jsxs)(i.ModalHeader, {
              className: v.header,
              children: [
                (0, l.jsxs)("div", {
                  className: v.titleLine,
                  children: [
                    (0, l.jsx)("div", {
                      className: v.title,
                      children: (0, l.jsxs)(i.HeadingLevel, {
                        component: (0, l.jsxs)(i.Heading, {
                          variant: "heading-lg/semibold",
                          children: [
                            "Share from ",
                            null == z ? void 0 : z.name,
                            "?",
                          ],
                        }),
                        children: [
                          D
                            ? (0, l.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-warning",
                                children: x.intl.format(x.t["/KhyPT"], {
                                  count: 5,
                                }),
                              })
                            : null,
                          (0, l.jsx)(i.Heading, {
                            variant: "heading-sm/normal",
                            color: "header-muted",
                            children: x.intl.string(x.t["DF+q2t"]),
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)(i.ModalCloseButton, {
                      className: v.closeButton,
                      onClick: W,
                    }),
                  ],
                }),
                void 0 !== _ ? (0, l.jsx)(g.z, { previewMessage: _ }) : null,
                (0, l.jsx)(i.SearchBar, {
                  className: v.search,
                  ref: B,
                  size: i.SearchBar.Sizes.MEDIUM,
                  query: I,
                  onChange: q,
                  onClear: O,
                  placeholder: x.intl.string(x.t["5h0QOD"]),
                  "aria-label": x.intl.string(x.t["5h0QOD"]),
                  autoFocus: !0,
                }),
              ],
            }),
            Y,
            (0, l.jsx)(N, {
              sendLabel: x.intl.string(x.t.TXNS7e),
              canSend: k > 0,
              isSending: M,
              onSend: Q,
            }),
          ],
        });
      }
    },
    739980: function (e, t, n) {
      n.d(t, {
        z: function () {
          return c;
        },
      });
      var l = n(200651),
        r = n(192379),
        i = n(954654),
        s = n(937889),
        a = n(930282),
        o = n(524444),
        u = n(98444);
      function c(e) {
        let { previewMessage: t } = e,
          { content: n } = (0, s.ZP)(t, { allowHeading: !0, allowLinks: !0 }),
          c = t.attachments.map((e, t) => {
            let n = (0, o.Yi)({
              src: e.url,
              containerClassName: u.previewImage,
              imageContainerClassName: u.previewImage,
              height: void 0 !== e.height ? e.height : 225,
              width: void 0 !== e.width ? e.width : 225,
              maxHeight: 225,
              maxWidth: 225,
              analyticsSource: "ApplicationCommandSharePreview",
            });
            return (0, l.jsx)(r.Fragment, { children: n }, t);
          });
        return (0, l.jsxs)("div", {
          className: u.previewContainer,
          children: [
            (0, l.jsx)("div", { className: u.quote }),
            (0, l.jsxs)("div", {
              className: u.content,
              children: [
                (0, l.jsx)(a.ZP, { message: t, content: n }),
                c,
                t.components.length > 0
                  ? (0, l.jsx)(i.ZP, {
                      message: t,
                      shouldDisableInteractiveComponents: !0,
                    })
                  : null,
              ],
            }),
          ],
        });
      }
    },
    617266: function (e, t, n) {
      n.d(t, {
        F: function () {
          return U;
        },
      });
      var l = n(200651),
        r = n(192379),
        i = n(120356),
        s = n.n(i),
        a = n(913527),
        o = n.n(a),
        u = n(91192),
        c = n(442837),
        d = n(481060),
        h = n(700582),
        f = n(493773),
        m = n(724757),
        g = n(212819),
        p = n(933557),
        b = n(266076),
        x = n(810123),
        v = n(448486),
        C = n(987509),
        S = n(131704),
        y = n(592125),
        N = n(430824),
        Z = n(496675),
        _ = n(158776),
        j = n(306680),
        E = n(699516),
        M = n(594174),
        L = n(55935),
        T = n(823379),
        P = n(51144),
        w = n(981631),
        A = n(490897),
        R = n(388032),
        k = n(661966);
      function D(e) {
        let {
            destination: t,
            icon: n,
            label: i,
            subLabel: a,
            selected: o,
            disabled: c,
            onPressDestination: h,
            "aria-setsize": m,
            "aria-posinset": g,
          } = e,
          p = (0, u.JA)(t.id),
          b = r.useRef(!1),
          x = r.useCallback(() => {
            !c && (null == h || h(t));
          }, [h, c, t]);
        return (
          (0, f.Z)(() => () => () => {
            b.current &&
              ((b.current = !1),
              null == h ||
                h(t, { transitionToDestination: !1, closeAfterSend: !1 }));
          }),
          (0, l.jsxs)(d.Clickable, {
            className: s()(k.destinationRow, { [k.disabled]: c }),
            onClick: x,
            "aria-selected": o,
            "aria-setsize": m,
            "aria-posinset": g,
            ...p,
            children: [
              (0, l.jsxs)("div", {
                className: k.identity,
                children: [
                  (0, l.jsx)("div", { className: k.iconWrapper, children: n }),
                  (0, l.jsxs)("div", {
                    className: k.labels,
                    children: [
                      (0, l.jsx)(d.Text, {
                        tag: "strong",
                        className: k.label,
                        variant: "text-md/semibold",
                        lineClamp: 1,
                        children: i,
                      }),
                      (0, l.jsx)(d.Text, {
                        className: k.subLabel,
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
                value: o,
                className: k.checkbox,
              }),
            ],
          })
        );
      }
      function I(e) {
        let { user: t, subLabel: n, ...r } = e,
          i = P.ZP.useName(t),
          s = P.ZP.useUserTag(t, { decoration: "never" }),
          a = (0, c.e7)([E.Z], () => E.Z.getNickname(t.id)),
          o = (0, c.e7)([_.Z], () => _.Z.getStatus(t.id));
        return (0, l.jsx)(D, {
          ...r,
          icon: (0, l.jsx)(h.Z, {
            "aria-hidden": !0,
            size: d.AvatarSizes.SIZE_32,
            user: t,
            status: o,
          }),
          label: null != a ? a : i,
          subLabel: null != n ? n : s,
        });
      }
      function F(e) {
        let { channel: t, subLabel: n, ...r } = e,
          i = (0, p.ZP)(t),
          s = (0, v._)(t);
        return (0, l.jsx)(D, {
          ...r,
          icon: (0, l.jsx)(b.Z, {
            "aria-hidden": !0,
            size: d.AvatarSizes.SIZE_32,
            channel: t,
            experimentLocation: "application-command-modal",
          }),
          label: i,
          subLabel: null != n ? n : s,
        });
      }
      function H(e) {
        let { channel: t, subLabel: n, ...r } = e,
          i = (0, c.e7)([N.Z], () =>
            N.Z.getGuild(null == t ? void 0 : t.guild_id),
          ),
          s = (0, p.ZP)(t),
          a = (0, c.e7)([y.Z, M.default, E.Z], () => {
            let e = y.Z.getChannel(t.parent_id);
            return null == e ? null : (0, p.F6)(e, M.default, E.Z, !1);
          }),
          u = (0, c.e7)([j.ZP], () =>
            j.ZP.lastMessageTimestamp(t.id, A.W.CHANNEL),
          ),
          h = null == i ? void 0 : i.name;
        if (t.isThread() || t.isForumPost()) {
          let e = t.isForumPost() ? d.ForumIcon : d.TextIcon;
          h = (0, l.jsxs)("div", {
            className: k.threadSubLabel,
            children: [
              (0, l.jsx)(e, {
                color: d.tokens.colors.TEXT_SECONDARY,
                className: k.subLabelIcon,
              }),
              (0, l.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "text-secondary",
                lineClamp: 1,
                children: a,
              }),
              null != u
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(d.Text, {
                        className: k.subLabelSeparator,
                        variant: "text-xs/medium",
                        color: "text-secondary",
                        children: "•",
                      }),
                      (0, l.jsx)(d.Text, {
                        variant: "text-xs/medium",
                        color: "text-secondary",
                        children: (0, L.Xf)(o()(u)),
                      }),
                    ],
                  })
                : null,
            ],
          });
        }
        return (0, l.jsx)(D, {
          ...r,
          icon: (0, l.jsx)(x.Z, { size: x.E.SMALL_32, guild: i, channel: t }),
          label: s,
          subLabel: null != n ? n : h,
        });
      }
      function U(e) {
        let {
            rowData: t,
            selectedDestinations: n,
            handleToggleDestination: i,
            disableSelection: s,
            originDestination: a,
            ...o
          } = e,
          c = r.useMemo(() => [t.length], [t.length]),
          h = r.useCallback(() => 48, []),
          f = r.useMemo(() => {
            var e;
            return null !== (e = null == n ? void 0 : n.map(C.hC)) &&
              void 0 !== e
              ? e
              : [];
          }, [n]),
          p = r.useCallback(
            (e) => {
              let { section: n, row: r } = e;
              if (n > 0) return;
              let { type: o, record: u } = t[r];
              if (o === g.h8.HEADER) return;
              let c =
                  o === g.h8.USER
                    ? { type: "user", id: u.id }
                    : { type: "channel", id: u.id },
                d = (0, C.hC)(c),
                h = (function (e, t) {
                  if (t instanceof S.Sf && (0, S.Km)(t.type)) {
                    if (
                      null != t.rateLimitPerUser &&
                      t.rateLimitPerUser > 0 &&
                      !(
                        Z.Z.can(w.Plq.MANAGE_CHANNELS, t) ||
                        Z.Z.can(w.Plq.MANAGE_MESSAGES, t)
                      )
                    )
                      return { label: R.intl.string(R.t.Icu3bW) };
                    if (
                      t.isThread() ||
                      t.isForumPost() ||
                      !Z.Z.can(w.Plq.USE_APPLICATION_COMMANDS, t)
                    )
                      return { label: R.intl.string(R.t.v8MLq6) };
                    let n = (0, C.dL)(t.id);
                    if (e.id === n.id)
                      return { label: R.intl.string(R.t.mD4gqa) };
                  }
                })(a, u),
                m = f.includes(d),
                p = {
                  key: d,
                  destination: c,
                  subLabel: null != h ? h.label : void 0,
                  disabled: (s && !m) || null != h,
                  selected: m,
                  onPressDestination: i,
                  "aria-posinset": r + 1,
                  "aria-setsize": t.length,
                };
              if (o === g.h8.USER) return (0, l.jsx)(I, { user: u, ...p });
              if (o === g.h8.GROUP_DM)
                return (0, l.jsx)(F, { channel: u, ...p });
              if (o === g.h8.TEXT_CHANNEL || o === g.h8.VOICE_CHANNEL)
                return (0, l.jsx)(H, { channel: u, ...p });
              else (0, T.vE)(o);
            },
            [s, i, a, t, f],
          ),
          b = r.useRef(null),
          x = (0, m.Z)("share-command-modal", b);
        return (0, l.jsx)(u.bG, {
          navigator: x,
          children: (0, l.jsx)(u.SJ, {
            children: (e) => {
              let { ref: t, ...n } = e;
              return (0, l.jsx)(d.ModalListContent, {
                scrollerRef: (e) => {
                  var n;
                  (b.current = e),
                    (t.current =
                      null !== (n = null == e ? void 0 : e.getScrollerNode()) &&
                      void 0 !== n
                        ? n
                        : null);
                },
                ...n,
                ...o,
                sections: c,
                sectionHeight: 0,
                renderRow: p,
                rowHeight: h,
              });
            },
          }),
        });
      }
    },
    448486: function (e, t, n) {
      n.d(t, {
        _: function () {
          return u;
        },
      });
      var l = n(192379),
        r = n(442837),
        i = n(594174),
        s = n(823379),
        a = n(51144),
        o = n(388032);
      function u(e) {
        let t = (0, r.Wu)([i.default], () =>
          e.recipients
            .map((e) => i.default.getUser(e))
            .filter(s.lm)
            .map((e) => a.ZP.getName(e)),
        );
        return l.useMemo(
          () =>
            "" === e.name
              ? null
              : (function (e) {
                  if (0 === e.length) return null;
                  if (1 === e.length)
                    return o.intl.formatToPlainString(o.t["J+Wpsr"], {
                      first: e[0],
                    });
                  if (2 === e.length)
                    return o.intl.formatToPlainString(o.t.gwRP0d, {
                      first: e[0],
                      second: e[1],
                    });
                  if (3 === e.length)
                    return o.intl.formatToPlainString(o.t.QDB5en, {
                      first: e[0],
                      second: e[1],
                      third: e[2],
                    });
                  let t = e.length - 3;
                  return o.intl.formatToPlainString(o.t.VYfueX, {
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
          return i;
        },
      });
      var l = n(212819);
      let r = Array.from([
        l.h8.USER,
        l.h8.TEXT_CHANNEL,
        l.h8.VOICE_CHANNEL,
        l.h8.GROUP_DM,
      ]);
      function i(e) {
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
          return g;
        },
        hl: function () {
          return p;
        },
        qx: function () {
          return b;
        },
      }),
        n(47120),
        n(653041);
      var l = n(392711),
        r = n(493683),
        i = n(212819),
        s = n(938078),
        a = n(823385),
        o = n(592125),
        u = n(496675),
        c = n(594174),
        d = n(823379),
        h = n(41837),
        f = n(981631);
      n(388032);
      function m(e) {
        let t = o.Z.getChannel(e);
        return (null == t ? void 0 : t.type) === f.d4z.DM
          ? { type: "user", id: t.recipients[0] }
          : { type: "channel", id: e };
      }
      function g(e) {
        return "".concat(e.type, "-").concat(e.id);
      }
      function p(e) {
        if ("channel" === e.type) return e.id;
        let t = o.Z.getDMFromUserId(e.id);
        if (null != t) return t;
      }
      async function b(e) {
        let t = p(e);
        if (null != t) return t;
        if ("user" === e.type)
          try {
            return await r.Z.getOrEnsurePrivateChannel(e.id);
          } catch (e) {
            return;
          }
      }
      function x(e) {
        if ("user" !== e.type) return (0, s.Z)(e.id);
        {
          let t = c.default.getUser(e.id);
          return null != t ? { type: i.h8.USER, record: t, score: 0 } : null;
        }
      }
      function v(e, t) {
        let n;
        let l = new Set();
        if (null != t) for (let e of t) l.add(e);
        let r = [];
        for (let t of e) {
          if (null != t)
            if (t.type === i.h8.HEADER) n = t;
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
            (e.type === i.h8.HEADER ||
              ((0, h.o)(e) &&
                ((n = e),
                (l = t),
                n.type === i.h8.USER
                  ? l || null != o.Z.getDMChannelFromUserId(n.record.id)
                  : n.type === i.h8.GROUP_DM ||
                    (n.record.type !== f.d4z.GUILD_FORUM &&
                      n.record.type !== f.d4z.GUILD_MEDIA &&
                      u.Z.can(f.Plq.VIEW_CHANNEL, n.record) &&
                      u.Z.can(f.Plq.SEND_MESSAGES, n.record)))))
          );
        });
      }
      function S(e) {
        let {
          results: t,
          hasQuery: n,
          queryMode: r,
          frequentChannels: i,
          targetDestination: o,
          selectedDestinations: u,
          pinnedDestinations: c,
          originDestination: d,
          includeMissingDMs: h,
        } = e;
        if (n) return v(C(t, h));
        let f = null != c && c.length > 0 ? c.map((e) => x(e)) : [],
          m = a.Z.getChannelHistory(),
          g = m.length > 0 ? m.map((e) => (0, s.Z)(e)) : [],
          p = i.length > 0 ? i.map((e) => (0, s.Z)(e.id)) : [],
          b = C([...f, null != o ? x(o) : null, ...g, ...p], h),
          S =
            (null == u ? void 0 : u.find((e) => (0, l.isEqual)(e, d))) != null,
          y = null == d || S ? [] : [d.id];
        return null != r
          ? v(b.filter((e) => e.type === r))
          : v(b, y).slice(0, 15);
      }
    },
    601565: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(47120);
      var l = n(192379),
        r = n(211266),
        i = n(212819);
      function s(e) {
        let { searchOptions: t } = e,
          [n, s] = l.useState({ results: [], query: "" }),
          a = (0, r.Z)(() => {
            let e = new i.ZP((e, t) => {
              s({ results: e, query: t });
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
        i = n(38618),
        s = n(51596),
        a = n(516373),
        o = n(314897),
        u = n(580005),
        c = n(987509),
        d = n(601565),
        h = n(41837);
      function f(e) {
        let { query: t, queryMode: n } = (0, s.F_)(e),
          l = h.M,
          r = null;
        return (
          null != n && h.M.includes(n) && ((l = [n]), (r = n)),
          { query: t, queryMode: r, resultTypes: l }
        );
      }
      function m(e) {
        let {
            targetDestination: t,
            selectedDestinations: n,
            originDestination: s,
            includeMissingDMs: h = !1,
          } = e,
          m = (0, r.e7)([o.default], () => o.default.getId()),
          g = l.useMemo(
            () => ({
              searchOptions: {
                blacklist: new Set(["user:".concat(m)]),
                frecencyBoosters: !0,
                userFilters: null,
              },
            }),
            [m],
          ),
          { search: p, query: b, results: x } = (0, d.Z)(g),
          [v, C] = l.useState(f("")),
          S = l.useCallback((e) => C(f(e)), [C]),
          { queryMode: y } = v,
          [N, Z] = l.useState(null != n ? n : []),
          _ = l.useRef(n);
        l.useEffect(() => {
          _.current = n;
        }),
          l.useLayoutEffect(() => {
            var e;
            let { query: t, resultTypes: n } = v;
            p({ query: t, resultTypes: n }),
              Z(null !== (e = _.current) && void 0 !== e ? e : []);
          }, [p, v]),
          (0, a.D)();
        let j = (0, r.e7)([u.Z], () =>
            u.Z.getFrequentlyWithoutFetchingLatest(),
          ),
          E = (0, r.e7)([i.Z], () => i.Z.isConnected()),
          M = "" !== b;
        return {
          results: l.useMemo(
            () =>
              (0, c.ZP)({
                results: x,
                hasQuery: M,
                queryMode: y,
                targetDestination: t,
                frequentChannels: j,
                selectedDestinations: n,
                pinnedDestinations: N,
                originDestination: s,
                includeMissingDMs: h,
                isConnected: E,
              }),
            [x, M, y, t, j, n, N, s, h, E],
          ),
          updateSearchText: S,
        };
      }
    },
    661966: function (e, t, n) {
      e.exports = {
        modal: "modal_ec4ed3",
        header: "header_ec4ed3",
        search: "search_ec4ed3",
        titleLine: "titleLine_ec4ed3",
        title: "title_ec4ed3",
        closeButton: "closeButton_ec4ed3",
        footerWithMessage: "footerWithMessage_ec4ed3",
        footerButtons: "footerButtons_ec4ed3",
        destinationRow: "destinationRow_ec4ed3",
        disabled: "disabled_ec4ed3",
        identity: "identity_ec4ed3",
        labels: "labels_ec4ed3",
        label: "label_ec4ed3",
        threadSubLabel: "threadSubLabel_ec4ed3",
        subLabelIcon: "subLabelIcon_ec4ed3",
        subLabelSeparator: "subLabelSeparator_ec4ed3",
        iconWrapper: "iconWrapper_ec4ed3",
        subLabel: "subLabel_ec4ed3",
        checkbox: "checkbox_ec4ed3",
        noResults: "noResults_ec4ed3",
        noResultsImg: "noResultsImg_ec4ed3",
        sendWithMessage: "sendWithMessage_ec4ed3",
        spinnerContainer: "spinnerContainer_ec4ed3",
      };
    },
    98444: function (e, t, n) {
      e.exports = {
        previewContainer: "previewContainer_bc5069",
        quote: "quote_bc5069",
        content: "content_bc5069",
        previewImage: "previewImage_bc5069",
      };
    },
  },
]);
//# sourceMappingURL=a8ef6c1d23c0f144af66.js.map
