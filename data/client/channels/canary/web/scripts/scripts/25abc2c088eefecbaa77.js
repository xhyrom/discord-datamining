"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30419"],
  {
    623714: function (e) {
      e.exports = "/assets/790bfab2df3833fbef30.svg";
    },
    267988: function (e) {
      e.exports = "/assets/790bfab2df3833fbef30.svg";
    },
    396767: function (e) {
      e.exports = "/assets/dabe612d0838b2380b62.svg";
    },
    987656: function (e) {
      e.exports = "/assets/926ad5823547b5014594.svg";
    },
    395199: function (e, l, n) {
      n(724458), n(653041), n(47120);
      var t,
        s = n(200651),
        r = n(192379),
        i = n(120356),
        o = n.n(i),
        a = n(442837),
        d = n(215569),
        u = n(481060),
        c = n(600164),
        m = n(777789),
        x = n(78839),
        C = n(709054),
        h = n(388032),
        g = n(688131);
      function f(e, l, n) {
        return (
          l in e
            ? Object.defineProperty(e, l, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[l] = n),
          e
        );
      }
      class p extends r.PureComponent {
        render() {
          let { onClose: e } = this.props;
          return (0, s.jsxs)(u.ModalHeader, {
            separator: !1,
            justify: c.Z.Justify.BETWEEN,
            children: [
              (0, s.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                children: this.props.text,
              }),
              null != e ? (0, s.jsx)(u.ModalCloseButton, { onClick: e }) : null,
            ],
          });
        }
      }
      function S(e) {
        let { imageClass: l, children: n, error: t, onDismissError: r } = e;
        return (0, s.jsxs)("div", {
          className: g.content,
          children: [
            (0, s.jsx)("div", { className: o()(g.image, l) }),
            n,
            (0, s.jsx)(d.W, {
              children:
                null != t
                  ? (0, s.jsx)(u.SlideIn, {
                      className: g.error,
                      children: (0, s.jsx)(u.FormErrorBlock, {
                        onDismiss: r,
                        children: t.message,
                      }),
                    })
                  : null,
            }),
          ],
        });
      }
      let j = (e) => {
        let { canceledCount: l } = e,
          n = (0, a.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription());
        return null == n
          ? null
          : (0, s.jsxs)("div", {
              className: g.pendingCancellation,
              children: [
                (0, s.jsx)(u.CircleWarningIcon, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: "currentColor",
                  className: g.pendingCancellationIcon,
                }),
                (0, s.jsx)(u.Text, {
                  variant: "text-md/normal",
                  className: g.pendingCancellationMessage,
                  children: h.intl.format(h.t.SFpsCA, {
                    date: n.currentPeriodEnd,
                    canceledCount: l,
                  }),
                }),
              ],
            });
      };
      function v(e) {
        let {
          imageClass: l,
          blurb: n,
          guild: t,
          warning: r,
          error: i,
          onDismissError: o,
          slotCount: a = 1,
          canceledCount: d = 0,
        } = e;
        return (0, s.jsxs)(S, {
          imageClass: l,
          error: i,
          onDismissError: o,
          children: [
            (0, s.jsx)(u.Text, { variant: "text-md/normal", children: n }),
            (0, s.jsx)(m.Z, {
              className: g.guildCard,
              guild: t,
              subscriptionChange: a,
            }),
            (0, s.jsx)(u.Text, { variant: "text-md/normal", children: r }),
            d > 0 ? (0, s.jsx)(j, { canceledCount: d }) : null,
          ],
        });
      }
      class N extends r.PureComponent {
        render() {
          let {
            confirmation: e,
            confirmationLabel: l,
            isModifyingSubscription: n,
            onConfirm: t,
            onCancel: r,
          } = this.props;
          return (0, s.jsxs)(u.ModalFooter, {
            children: [
              (0, s.jsx)(u.Button, {
                onClick: t,
                submitting: n,
                "aria-label": l,
                children: e,
              }),
              (0, s.jsx)(u.Button, {
                look: u.Button.Looks.LINK,
                color: u.Button.Colors.PRIMARY,
                onClick: r,
                disabled: n,
                children: h.intl.string(h.t["ETE/oK"]),
              }),
            ],
          });
        }
      }
      class b extends (t = r.PureComponent) {
        render() {
          let {
            guild: e,
            header: l,
            blurb: n,
            warning: t,
            confirmation: i,
            confirmationLabel: o,
            imageClass: a,
            error: d,
            isModifyingSubscription: c,
            onConfirm: m,
            onCancel: x,
            onDismissError: C,
            canceledCount: h,
          } = this.props;
          return (0, s.jsxs)(r.Fragment, {
            children: [
              (0, s.jsx)(p, { text: l }),
              (0, s.jsx)(u.ModalContent, {
                children: (0, s.jsx)(v, {
                  guild: e,
                  blurb: n,
                  warning: t,
                  imageClass: a,
                  error: d,
                  onDismissError: C,
                  canceledCount: h,
                }),
              }),
              (0, s.jsx)(N, {
                confirmation: i,
                confirmationLabel: o,
                isModifyingSubscription: c,
                onConfirm: m,
                onCancel: x,
              }),
            ],
          });
        }
      }
      f(b, "Header", p),
        f(b, "ApplyBody", v),
        f(b, "TransferBody", function (e) {
          var l, n;
          let {
              imageClass: t,
              blurb: i,
              fromGuilds: o,
              toGuild: a,
              error: d,
              onDismissError: c,
              slotCount: x = 1,
              canceledCount: f = 0,
            } = e,
            p = r.useRef(o),
            v = null === (l = p.current) || void 0 === l ? void 0 : l.length,
            N =
              null === (n = p.current) || void 0 === n
                ? void 0
                : n.reduce(
                    (e, l) => (
                      !e.hasOwnProperty(l.id) && (e[l.id] = []),
                      e[l.id].push(l),
                      e
                    ),
                    {},
                  );
          return (0, s.jsxs)(S, {
            imageClass: t,
            error: d,
            onDismissError: c,
            children: [
              (0, s.jsx)(u.Text, { variant: "text-md/normal", children: i }),
              (0, s.jsx)(u.Text, {
                variant: "text-xs/bold",
                className: g.transferGuildCardHeader,
                children: h.intl.format(h.t["5zQYEx"], { guildCount: v }),
              }),
              null != N
                ? C.default
                    .keys(N)
                    .map((e) =>
                      (0, s.jsx)(
                        m.Z,
                        {
                          className: g.transferFromGuildCard,
                          guild: N[e][0],
                          subscriptionChange: -1 * N[e].length,
                        },
                        e,
                      ),
                    )
                : null,
              (0, s.jsx)(u.Text, {
                variant: "text-xs/normal",
                className: g.transferGuildCardHeader,
                children: h.intl.format(h.t.ct6oxM, { slotCount: x }),
              }),
              (0, s.jsx)("div", {
                className: g.activeTransferGuildCardBorder,
                children: (0, s.jsx)(m.Z, {
                  className: g.transferToGuildCard,
                  guild: a,
                  subscriptionChange: null != o ? o.length : 1,
                }),
              }),
              f > 0 ? (0, s.jsx)(j, { canceledCount: f }) : null,
            ],
          });
        }),
        f(b, "Footer", N),
        (l.Z = b);
    },
    760558: function (e, l, n) {
      n.r(l),
        n.d(l, {
          Steps: function () {
            return t;
          },
        }),
        n(47120);
      var t,
        s,
        r = n(200651),
        i = n(192379),
        o = n(512722),
        a = n.n(o),
        d = n(442837),
        u = n(481060),
        c = n(179360),
        m = n(899667),
        x = n(430824),
        C = n(314884),
        h = n(626135),
        g = n(267642),
        f = n(395199),
        p = n(719228),
        S = n(4434),
        j = n(981631),
        v = n(388032),
        N = n(398087);
      ((s = t || (t = {})).UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT"),
        (s.GUILD_SELECT = "GUILD_SELECT"),
        (s.CONFIRM = "CONFIRM"),
        (s.SUCCESS = "SUCCESS");
      l.default = (e) => {
        var l, n;
        let {
            guildBoostSlots: t,
            selectedGuild: s,
            locationSection: o,
            transitionState: b,
            onClose: M,
          } = e,
          E = (0, g.vx)(C.Z.boostSlots);
        a()(
          null != t || null != s,
          "Must either provide slots or an initial selected guild",
        ),
          a()(
            !(null == t ? void 0 : t.some((e) => e.isOnCooldown())),
            "If slots are provided, they must not be on cooldown",
          );
        let T = [
            null == t ? "UNUSED_QUANTITY_SELECT" : null,
            null == s ? "GUILD_SELECT" : null,
            "CONFIRM",
            "SUCCESS",
          ].filter((e) => null != e),
          [y, L] = (0, d.Wu)([m.Z], () => [
            m.Z.isModifyingAppliedBoost,
            m.Z.applyBoostError,
          ]),
          [I, Z] = i.useState(""),
          [G, B] = i.useState(T[0]),
          [U, P] = i.useState(!1),
          [D, w] = i.useState(s),
          [R, _] = i.useState(null != t ? t : E.slice(0, 1)),
          k = i.useMemo(
            () =>
              null == R
                ? []
                : R.map((e) => {
                    let { premiumGuildSubscription: l } = e;
                    return x.Z.getGuild(null == l ? void 0 : l.guildId);
                  }).filter((e) => null != e),
            [R],
          ),
          F = i.useMemo(() => {
            var e;
            return (
              (null == R
                ? void 0
                : null === (e = R[0]) || void 0 === e
                  ? void 0
                  : e.premiumGuildSubscription) != null
            );
          }, [R]),
          A = () => {
            M("SUCCESS" === G),
              h.default.track(j.rMx.MODAL_DISMISSED, {
                type: j.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                location_section: o,
              });
          },
          O = {
            UNUSED_QUANTITY_SELECT: {
              body: () => (
                a()(
                  !(null == t && 0 === E.length),
                  "Cannot provide no slots if there are no other available slots",
                ),
                (0, r.jsxs)("div", {
                  className: N.quantitySelectorBody,
                  children: [
                    (0, r.jsx)(u.Heading, {
                      variant: "heading-md/semibold",
                      className: N.quantitySelectorHeader,
                      children: v.intl.string(v.t["9FFrra"]),
                    }),
                    (0, r.jsx)(u.Text, {
                      variant: "text-md/normal",
                      className: N.quantitySelectorDescription,
                      children: v.intl.string(v.t.x5qw5e),
                    }),
                    (0, r.jsxs)("div", {
                      className: N.quantitySelectorWrapper,
                      children: [
                        (0, r.jsx)(u.NumberInputStepper, {
                          value: R.length,
                          onChange: (e) => _(E.slice(0, e)),
                          minValue: 1,
                          maxValue: E.length,
                        }),
                        (0, r.jsx)(u.Text, {
                          className: N.quantitySelectorLabel,
                          variant: "text-md/normal",
                          children: v.intl.string(v.t.Vl8TCw),
                        }),
                      ],
                    }),
                  ],
                })
              ),
              footer: () =>
                (0, r.jsxs)(u.ModalFooter, {
                  children: [
                    (0, r.jsx)(u.Button, {
                      onClick: () => B("CONFIRM"),
                      children: v.intl.string(v.t["/uwYdX"]),
                    }),
                    (0, r.jsx)(u.Button, {
                      look: u.Button.Looks.LINK,
                      color: u.Button.Colors.PRIMARY,
                      onClick: A,
                      children: v.intl.string(v.t["1BPTsL"]),
                    }),
                  ],
                }),
            },
            GUILD_SELECT: {
              header: () =>
                (0, r.jsx)(p.GuildSelectModalHeader, {
                  isTransfer: F,
                  query: I,
                  setQuery: Z,
                }),
              bodyClass: N.selectContent,
              body: () =>
                (0, r.jsx)(p.GuildSelectModalBody, {
                  onClose: A,
                  onSelectGuild: (e) => {
                    w(e), B("CONFIRM");
                  },
                  isTransfer: F,
                  selectedSlotGuilds: k,
                  query: I,
                }),
            },
            CONFIRM: {
              body() {
                if (null == D) return null;
                let e = R.filter((e) => (0, g.tl)(e)).length,
                  l = R.length,
                  n = k.length;
                return F
                  ? (0, r.jsx)(f.Z.TransferBody, {
                      fromGuilds: k,
                      toGuild: D,
                      blurb: v.intl.formatToPlainString(v.t.SSA2lp, {
                        slotCount: l,
                        guildCount: n,
                      }),
                      imageClass: N.transferConfirmImage,
                      error: U ? L : null,
                      onDismissError: () => P(!1),
                      slotCount: l,
                      canceledCount: e,
                    })
                  : (0, r.jsx)(f.Z.ApplyBody, {
                      guild: D,
                      blurb: v.intl.string(v.t.yTlZV1),
                      warning: v.intl.formatToPlainString(v.t.KPnDlp, {
                        days: j.o3l,
                        slotCount: l,
                      }),
                      imageClass: N.confirmImage,
                      error: U ? L : null,
                      onDismissError: () => P(!1),
                      slotCount: l,
                      canceledCount: e,
                    });
              },
              footer() {
                let e = R.length,
                  l = "CONFIRM" === T[0] ? A : () => B(T[T.indexOf(G) - 1]),
                  n = async () => {
                    if (null != D && (null == R ? void 0 : R.length) !== 0) {
                      a()(
                        !R.some((e) => e.isOnCooldown()),
                        "Cannot use a premium guild subscription slot while on cooldown",
                      );
                      try {
                        await Promise.all(
                          R.map((e) => {
                            let { premiumGuildSubscription: l } = e;
                            return null != l
                              ? (0, c.dG)(l.guildId, l.id)
                              : Promise.resolve();
                          }),
                        ),
                          await (0, c.W3)(
                            D.id,
                            R.map((e) => {
                              let { id: l } = e;
                              return l;
                            }),
                          ),
                          B("SUCCESS");
                      } catch (e) {
                        P(!0);
                      }
                    }
                  };
                return (0, r.jsx)(f.Z.Footer, {
                  confirmation: F
                    ? v.intl.formatToPlainString(v.t.Oh6mxc, { slotCount: e })
                    : v.intl.formatToPlainString(v.t["ZU5x5+"], {
                        slotCount: e,
                      }),
                  confirmationLabel: F
                    ? v.intl.formatToPlainString(v.t.fnZRmZ, { slotCount: e })
                    : v.intl.formatToPlainString(v.t.d0vwWV, { slotCount: e }),
                  onConfirm: n,
                  onCancel: l,
                  isModifyingSubscription: y,
                });
              },
            },
            SUCCESS: {
              body: () =>
                (0, r.jsx)(S.R7, {
                  guild: D,
                  isTransfer: F,
                  guildBoostQuantity: R.length,
                  onClose: A,
                }),
            },
          };
        i.useEffect(() => {
          h.default.track(j.rMx.OPEN_MODAL, {
            type: j.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
            location_section: o,
          });
        }, [o]);
        let H = O[G];
        return (0, r.jsxs)(u.ModalRoot, {
          transitionState: b,
          className: N.modal,
          size: u.ModalSize.SMALL,
          children: [
            null === (l = H.header) || void 0 === l ? void 0 : l.call(H),
            (0, r.jsx)(u.ModalContent, {
              className: H.bodyClass,
              children: (0, r.jsx)(u.Sequencer, {
                step: G,
                steps: T,
                children: H.body(),
              }),
            }),
            null === (n = H.footer) || void 0 === n ? void 0 : n.call(H),
            (0, r.jsx)(u.ModalCloseButton, {
              className: N.modalCloseButton,
              onClick: A,
            }),
          ],
        });
      };
    },
    719228: function (e, l, n) {
      n.r(l),
        n.d(l, {
          GuildSelectModalBody: function () {
            return S;
          },
          GuildSelectModalHeader: function () {
            return p;
          },
          default: function () {
            return j;
          },
        }),
        n(724458),
        n(653041),
        n(47120);
      var t = n(200651),
        s = n(192379),
        r = n(658722),
        i = n.n(r),
        o = n(442837),
        a = n(481060),
        d = n(37234),
        u = n(565138),
        c = n(703656),
        m = n(430824),
        x = n(771845),
        C = n(267642),
        h = n(981631),
        g = n(388032),
        f = n(362333);
      function p(e) {
        let { isTransfer: l = !1, setQuery: n, query: s } = e;
        return (0, t.jsxs)(a.ModalHeader, {
          className: f.selectHeaderContainer,
          children: [
            (0, t.jsx)(a.Heading, {
              className: f.selectHeader,
              variant: "heading-md/semibold",
              children: l
                ? g.intl.string(g.t.IB13DQ)
                : g.intl.string(g.t.cQYceX),
            }),
            (0, t.jsx)(a.SearchBar, {
              size: a.SearchBar.Sizes.MEDIUM,
              placeholder: g.intl.string(g.t.vf3ZTU),
              "aria-label": g.intl.string(g.t.vf3ZTU),
              className: f.selectSearch,
              query: s,
              onChange: n,
              onClear: () => n(""),
            }),
          ],
        });
      }
      function S(e) {
        let {
            isTransfer: l = !1,
            selectedSlotGuilds: n,
            onClose: s,
            onSelectGuild: r,
            query: p,
          } = e,
          S = (0, o.e7)([x.ZP], () => x.ZP.getFlattenedGuildIds()),
          j = (0, o.Wu)([m.Z], () =>
            S.reduce((e, l) => {
              let t = m.Z.getGuild(l);
              return null == t || (null != n && n.some((e) => e.id === l))
                ? e
                : ((p.length <= 0 ||
                    i()(
                      p.toLowerCase(),
                      null == t ? void 0 : t.name.toLowerCase(),
                    )) &&
                    e.push(t),
                  e);
            }, []),
          );
        function v() {
          s(), (0, d.xf)(), (0, c.uL)(h.Z5c.GUILD_DISCOVERY);
        }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            0 === j.length &&
              (0, t.jsx)("div", {
                className: f.emptyStateWrapper,
                children: (0, t.jsx)(a.Text, {
                  variant: "text-md/normal",
                  children:
                    0 === S.length
                      ? g.intl.format(g.t["E3tB6+"], {
                          publicGuildDirectoryHook: (e, l) =>
                            (0, t.jsx)(
                              a.Clickable,
                              { onClick: v, tag: "a", children: e },
                              l,
                            ),
                        })
                      : g.intl.string(g.t.w3GLl5),
                }),
              }),
            j.map((e) =>
              (0, t.jsxs)(
                a.Clickable,
                {
                  className: f.selectGuild,
                  onClick: () => {
                    r(e);
                  },
                  children: [
                    (0, t.jsx)(u.Z, {
                      className: f.selectGuildIcon,
                      guild: e,
                      size: u.Z.Sizes.SMALL,
                    }),
                    (0, t.jsxs)("div", {
                      className: f.selectGuildCopy,
                      children: [
                        (0, t.jsx)(a.Text, {
                          className: f.selectGuildName,
                          variant: "text-md/normal",
                          children: e.name,
                        }),
                        (0, t.jsx)(a.Text, {
                          className: f.selectGuildLevel,
                          color: "text-muted",
                          variant: "text-xs/normal",
                          children: (0, C.nW)(e.premiumTier),
                        }),
                      ],
                    }),
                    (0, t.jsx)(a.Text, {
                      className: f.selectGuildPseudoCta,
                      color: "always-white",
                      variant: "text-sm/medium",
                      children: l
                        ? g.intl.string(g.t.dUgaFx)
                        : g.intl.string(g.t.Uj0md3),
                    }),
                  ],
                },
                e.id,
              ),
            ),
          ],
        });
      }
      function j(e) {
        let { onClose: l, onSelectGuild: n, transitionState: r } = e,
          [i, o] = s.useState("");
        return (0, t.jsxs)(a.ModalRoot, {
          transitionState: r,
          className: f.modal,
          size: a.ModalSize.SMALL,
          children: [
            (0, t.jsx)(p, { query: i, setQuery: o }),
            (0, t.jsx)(a.ModalContent, {
              className: f.modalContent,
              children: (0, t.jsx)(S, {
                onClose: l,
                onSelectGuild: n,
                query: i,
              }),
            }),
            (0, t.jsx)(a.ModalCloseButton, {
              className: f.modalCloseButton,
              onClick: l,
            }),
          ],
        });
      }
    },
    777789: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return h;
        },
      });
      var t = n(200651),
        s = n(192379),
        r = n(120356),
        i = n.n(r),
        o = n(565138),
        a = n(297700),
        d = n(471885),
        u = n(424625),
        c = n(267642),
        m = n(701519);
      class x extends s.PureComponent {
        render() {
          let { tier: e } = this.props;
          return (0, t.jsxs)("div", {
            className: m.tierPill,
            children: [
              (0, t.jsx)(a.Z, {
                className: m.tierPillStar,
                children: (0, t.jsx)(d.Z, {
                  tier: e,
                  className: m.tierPillGem,
                }),
              }),
              (0, c.nW)(e),
            ],
          });
        }
      }
      let C = (e) => {
        let { subscriptionChange: l, guild: n } = e;
        if (0 === l) return null;
        let s = Math.max(n.premiumSubscriberCount + l, 0),
          r = (0, c.rF)(s, n.id),
          i = r - (0, c.rF)(n.premiumSubscriberCount, n.id);
        return 0 === i
          ? null
          : (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(u.Z, {
                  className: i > 0 ? m.levelUpIcon : m.levelDownIcon,
                }),
                (0, t.jsx)(x, { tier: r }),
              ],
            });
      };
      class h extends s.PureComponent {
        render() {
          let { guild: e, className: l, subscriptionChange: n } = this.props;
          return (0, t.jsxs)("div", {
            className: i()(m.subscription, l),
            children: [
              (0, t.jsx)(o.Z, { guild: e, size: o.Z.Sizes.LARGE }),
              (0, t.jsxs)("div", {
                className: m.subscriptionInfo,
                children: [
                  (0, t.jsx)("div", {
                    className: m.guildName,
                    children: e.name,
                  }),
                  (0, t.jsxs)("div", {
                    className: m.tierInfo,
                    children: [
                      (0, t.jsx)(x, { tier: e.premiumTier }),
                      (0, t.jsx)(C, {
                        guild: e,
                        subscriptionChange: null != n ? n : 0,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
      }
    },
    424625: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return r;
        },
      });
      var t = n(200651);
      n(192379);
      var s = n(331595);
      function r(e) {
        let {
          width: l = 24,
          height: n = 24,
          color: r = "currentColor",
          ...i
        } = e;
        return (0, t.jsxs)("svg", {
          ...(0, s.Z)(i),
          width: l,
          height: n,
          viewBox: "0 0 16 16",
          children: [
            (0, t.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8.45329 8.53891L3.26217 13.7844C2.95995 14.0719 2.49772 14.0719 2.21328 13.7844C1.92883 13.497 1.92883 13.0299 2.21328 12.7245L6.88884 7.99999L2.21328 3.27543C1.92883 2.988 1.92883 2.50297 2.21328 2.21555C2.49772 1.92812 2.95995 1.92812 3.26217 2.21555L8.45329 7.47903C8.73774 7.76645 8.73774 8.23352 8.45329 8.53891Z",
              fill: r,
            }),
            (0, t.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14.4533 8.53891L9.26217 13.7844C8.95995 14.0719 8.49772 14.0719 8.21328 13.7844C7.92883 13.497 7.92883 13.0299 8.21328 12.7245L12.8888 7.99999L8.21328 3.27543C7.92883 2.988 7.92883 2.50297 8.21328 2.21555C8.49772 1.92812 8.95995 1.92812 9.26217 2.21555L14.4533 7.47903C14.7377 7.76645 14.7377 8.23352 14.4533 8.53891Z",
              fill: r,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=25abc2c088eefecbaa77.js.map
