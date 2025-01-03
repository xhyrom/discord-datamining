"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53682"],
  {
    621054: function (e) {
      e.exports = "/assets/a315359c0fd32511b45e.svg";
    },
    560361: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var l = n(192379);
      function r(e) {
        let t = l.useRef();
        (t.current = e),
          l.useEffect(
            () => () => {
              var e;
              return null === (e = t.current) || void 0 === e
                ? void 0
                : e.call(t);
            },
            [],
          );
      }
    },
    683958: function (e, t, n) {
      n.r(t),
        n.d(t, {
          ApplicationCommandShareModal: function () {
            return _;
          },
          useQueryForAppCommands: function () {
            return N;
          },
        }),
        n(47120);
      var l = n(200651),
        r = n(192379),
        i = n(481060),
        a = n(911969),
        s = n(835473),
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
        v = n(5859),
        C = n(621054);
      let S = [a.yU.CHAT],
        Z = () => {
          (0, i.closeModal)(b.s);
        };
      function y(e) {
        let { sendLabel: t, canSend: n, isSending: a, onSend: s } = e,
          o = r.useCallback(() => {
            s();
          }, [s]);
        return (0, l.jsx)(i.ModalFooter, {
          className: v.footerWithMessage,
          children: (0, l.jsx)("div", {
            className: v.footerButtons,
            children: (0, l.jsx)(i.Button, {
              className: v.sendWithMessage,
              submitting: a,
              disabled: !n,
              onClick: o,
              children: t,
            }),
          }),
        });
      }
      function N(e, t) {
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
            command: a,
            onClose: f,
            onRequestSent: b,
            previewMessage: S,
            ..._
          } = e,
          j = r.useMemo(() => (0, o.dL)(n.id), [n]),
          [E, M] = r.useState(!1),
          { commands: L, loading: T } = N(n, t),
          P = r.useRef(0),
          [w, A] = r.useState([j]),
          R = w.length,
          k = R >= 5,
          [D, I] = r.useState(""),
          { results: F, updateSearchText: H } = (0, u.s)({
            selectedDestinations: w,
            originDestination: j,
            includeMissingDMs: !0,
          }),
          U = r.useCallback(
            (e) => {
              I(e), H(e);
            },
            [H],
          ),
          q = r.useCallback(() => {
            f();
          }, [f]),
          [W] = (0, s.Z)([t]),
          z = r.useCallback(() => {
            I("");
          }, [I]),
          O = r.useRef(null);
        r.useEffect(() => {
          if ("" === D) {
            var e;
            null === (e = O.current) || void 0 === e || e.focus();
          }
        }, [D]);
        let B = r.useCallback(
            (e) => {
              A((t) => {
                let n = t.findIndex((t) => {
                  let { type: n, id: l } = t;
                  return n === e.type && l === e.id;
                });
                if (-1 === n)
                  return k ? t : (I(""), (P.current += 1), [e, ...t]);
                let l = [...t];
                return l.splice(n, 1), (P.current += 1), l;
              });
            },
            [k],
          ),
          [G, V] = r.useMemo(() => {
            if (T) return [null, !1];
            let e = L.find((e) => e.untranslatedName === a);
            return void 0 !== e ? [e, !1] : [null, !0];
          }, [a, L, T]),
          X = r.useCallback(
            async function (e) {
              let { closeAfterSend: t } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if (null === G) return;
              M(!0);
              let n = (await Promise.all(e.map(o.qx))).filter(h.lm);
              t && Z(),
                null == b || b(),
                n.forEach(async (e) => {
                  let t = c.Z.getChannel(e);
                  if (null == t) return;
                  let n = d.Z.getGuild(null == t ? void 0 : t.guild_id);
                  null !=
                    (await (0, m.Z)({
                      command: G,
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
                Z();
            },
            [b, G],
          ),
          J = r.useCallback(() => {
            X(w, { closeAfterSend: !0 });
          }, [X, w]);
        if (T)
          return (0, l.jsx)(i.ModalRoot, {
            className: v.modal,
            "aria-label": x.intl.string(x.t.fuFvw8),
            ..._,
            children: (0, l.jsx)(i.Spinner, { className: v.spinnerContainer }),
          });
        V &&
          (i.ModalRoot,
          v.modal,
          x.intl.string(x.t.fuFvw8),
          i.ModalContent,
          x.intl.string(x.t.yAk8ZW));
        let Q =
          F.length > 0
            ? (0, l.jsx)(p.F, {
                paddingBottom: 16,
                paddingTop: 16,
                rowData: F,
                handleToggleDestination: B,
                selectedDestinations: w,
                disableSelection: k,
                originDestination: j,
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
          ..._,
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
                            null == W ? void 0 : W.name,
                            "?",
                          ],
                        }),
                        children: [
                          k
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
                      onClick: q,
                    }),
                  ],
                }),
                void 0 !== S ? (0, l.jsx)(g.z, { previewMessage: S }) : null,
                (0, l.jsx)(i.SearchBar, {
                  className: v.search,
                  ref: O,
                  size: i.SearchBar.Sizes.MEDIUM,
                  query: D,
                  onChange: U,
                  onClear: z,
                  placeholder: x.intl.string(x.t["5h0QOD"]),
                  "aria-label": x.intl.string(x.t["5h0QOD"]),
                  autoFocus: !0,
                }),
              ],
            }),
            Q,
            (0, l.jsx)(y, {
              sendLabel: x.intl.string(x.t.TXNS7e),
              canSend: R > 0,
              isSending: E,
              onSend: J,
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
        a = n(937889),
        s = n(930282),
        o = n(524444),
        u = n(315971);
      function c(e) {
        let { previewMessage: t } = e,
          { content: n } = (0, a.ZP)(t, { allowHeading: !0, allowLinks: !0 }),
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
                (0, l.jsx)(s.ZP, { message: t, content: n }),
                c,
                t.components.length > 0
                  ? (0, l.jsx)(i.ZP, { message: t })
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
        a = n.n(i),
        s = n(913527),
        o = n.n(s),
        u = n(91192),
        c = n(442837),
        d = n(481060),
        h = n(700582),
        f = n(560361),
        m = n(724757),
        g = n(212819),
        p = n(933557),
        b = n(266076),
        x = n(810123),
        v = n(448486),
        C = n(987509),
        S = n(131704),
        Z = n(592125),
        y = n(430824),
        N = n(496675),
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
        k = n(5859);
      function D(e) {
        let {
            destination: t,
            icon: n,
            label: i,
            subLabel: s,
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
          (0, f.Z)(() => {
            b.current &&
              ((b.current = !1),
              null == h ||
                h(t, { transitionToDestination: !1, closeAfterSend: !1 }));
          }),
          (0, l.jsxs)(d.Clickable, {
            className: a()(k.destinationRow, { [k.disabled]: c }),
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
                        children: s,
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
          a = P.ZP.useUserTag(t, { decoration: "never" }),
          s = (0, c.e7)([E.Z], () => E.Z.getNickname(t.id)),
          o = (0, c.e7)([_.Z], () => _.Z.getStatus(t.id));
        return (0, l.jsx)(D, {
          ...r,
          icon: (0, l.jsx)(h.Z, {
            "aria-hidden": !0,
            size: d.AvatarSizes.SIZE_32,
            user: t,
            status: o,
          }),
          label: null != s ? s : i,
          subLabel: null != n ? n : a,
        });
      }
      function F(e) {
        let { channel: t, subLabel: n, ...r } = e,
          i = (0, p.ZP)(t),
          a = (0, v._)(t);
        return (0, l.jsx)(D, {
          ...r,
          icon: (0, l.jsx)(b.Z, {
            "aria-hidden": !0,
            size: d.AvatarSizes.SIZE_32,
            channel: t,
            experimentLocation: "application-command-modal",
          }),
          label: i,
          subLabel: null != n ? n : a,
        });
      }
      function H(e) {
        let { channel: t, subLabel: n, ...r } = e,
          i = (0, c.e7)([y.Z], () =>
            y.Z.getGuild(null == t ? void 0 : t.guild_id),
          ),
          a = (0, p.ZP)(t),
          s = (0, c.e7)([Z.Z, M.default, E.Z], () => {
            let e = Z.Z.getChannel(t.parent_id);
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
                children: s,
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
          label: a,
          subLabel: null != n ? n : h,
        });
      }
      function U(e) {
        let {
            rowData: t,
            selectedDestinations: n,
            handleToggleDestination: i,
            disableSelection: a,
            originDestination: s,
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
                        N.Z.can(w.Plq.MANAGE_CHANNELS, t) ||
                        N.Z.can(w.Plq.MANAGE_MESSAGES, t)
                      )
                    )
                      return { label: R.intl.string(R.t.Icu3bW) };
                    if (
                      t.isThread() ||
                      t.isForumPost() ||
                      !N.Z.can(w.Plq.USE_APPLICATION_COMMANDS, t)
                    )
                      return { label: R.intl.string(R.t.v8MLq6) };
                    let n = (0, C.dL)(t.id);
                    if (e.id === n.id)
                      return { label: R.intl.string(R.t.mD4gqa) };
                  }
                })(s, u),
                m = f.includes(d),
                p = {
                  key: d,
                  destination: c,
                  subLabel: null != h ? h.label : void 0,
                  disabled: (a && !m) || null != h,
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
            [a, i, s, t, f],
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
        a = n(823379),
        s = n(51144),
        o = n(388032);
      function u(e) {
        let t = (0, r.Wu)([i.default], () =>
          e.recipients
            .map((e) => i.default.getUser(e))
            .filter(a.lm)
            .map((e) => s.ZP.getName(e)),
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
        a = n(938078),
        s = n(823385),
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
        if ("user" !== e.type) return (0, a.Z)(e.id);
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
          m = s.Z.getChannelHistory(),
          g = m.length > 0 ? m.map((e) => (0, a.Z)(e)) : [],
          p = i.length > 0 ? i.map((e) => (0, a.Z)(e.id)) : [],
          b = C([...f, null != o ? x(o) : null, ...g, ...p], h),
          S =
            (null == u ? void 0 : u.find((e) => (0, l.isEqual)(e, d))) != null,
          Z = null == d || S ? [] : [d.id];
        return null != r
          ? v(b.filter((e) => e.type === r))
          : v(b, Z).slice(0, 15);
      }
    },
    601565: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      }),
        n(47120);
      var l = n(192379),
        r = n(75124),
        i = n(212819);
      function a(e) {
        let { searchOptions: t } = e,
          [n, a] = l.useState({ results: [], query: "" }),
          s = (0, r.Z)(() => {
            let e = new i.ZP((e, t) => {
              a({ results: e, query: t });
            });
            return e.setLimit(20), e.search(""), e;
          });
        return (
          l.useEffect(() => () => s.destroy(), [s]),
          l.useEffect(() => {
            null != t && t !== s.options && s.setOptions(t);
          }, [s, t]),
          {
            search: l.useCallback(
              (e) => {
                var t, n;
                let { query: l, resultTypes: r } = e;
                if (
                  null == s.resultTypes ||
                  ((t = r),
                  (n = s.resultTypes),
                  !(t.length === n.size && t.every((e) => n.has(e))))
                )
                  s.setResultTypes(r), s.setLimit(1 === r.length ? 50 : 20);
                s.search("" === l.trim() ? "" : l);
              },
              [s],
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
        a = n(51596),
        s = n(516373),
        o = n(314897),
        u = n(580005),
        c = n(987509),
        d = n(601565),
        h = n(41837);
      function f(e) {
        let { query: t, queryMode: n } = (0, a.F_)(e),
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
            originDestination: a,
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
          { queryMode: Z } = v,
          [y, N] = l.useState(null != n ? n : []);
        l.useLayoutEffect(() => {
          let { query: e, resultTypes: t } = v;
          p({ query: e, resultTypes: t }), N(null != n ? n : []);
        }, [p, v]),
          (0, s.D)();
        let _ = (0, r.e7)([u.Z], () =>
            u.Z.getFrequentlyWithoutFetchingLatest(),
          ),
          j = (0, r.e7)([i.Z], () => i.Z.isConnected()),
          E = "" !== b;
        return {
          results: l.useMemo(
            () =>
              (0, c.ZP)({
                results: x,
                hasQuery: E,
                queryMode: Z,
                targetDestination: t,
                frequentChannels: _,
                selectedDestinations: n,
                pinnedDestinations: y,
                originDestination: a,
                includeMissingDMs: h,
                isConnected: j,
              }),
            [x, E, Z, t, _, n, y, a, h, j],
          ),
          updateSearchText: S,
        };
      }
    },
    5859: function (e, t, n) {
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
    315971: function (e, t, n) {
      e.exports = {
        previewContainer: "previewContainer_bc5069",
        quote: "quote_bc5069",
        content: "content_bc5069",
        previewImage: "previewImage_bc5069",
      };
    },
  },
]);
//# sourceMappingURL=87d09c03f8d8314fdff2.js.map
