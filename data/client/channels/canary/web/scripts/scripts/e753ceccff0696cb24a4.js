"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2668"],
  {
    24561: function (e) {
      e.exports = "/assets/ae64dd835c0fcad70fb6.svg";
    },
    92708: function (e) {
      e.exports = "/assets/67bbfad6fc17b81d482a.svg";
    },
    703288: function (e, t, n) {
      var l = n(200651);
      n(192379);
      var a = n(481060),
        i = n(688465),
        o = n(388032);
      t.Z = () =>
        (0, l.jsx)(a.TooltipContainer, {
          text: o.intl.string(o.t["/fgfWl"]),
          children: (0, l.jsx)(i.Z, {}),
        });
    },
    407316: function (e, t, n) {
      n.d(t, {
        W: function () {
          return o;
        },
      });
      var l = n(592125),
        a = n(496675),
        i = n(981631);
      function o(e) {
        let t = l.Z.getChannel(e),
          n = null == t ? void 0 : t.isPrivate(),
          o = null == t ? void 0 : t.isForumChannel();
        return (
          n ||
          (a.Z.can(i.Plq.ATTACH_FILES, t) &&
            a.Z.can(i.Plq.SEND_MESSAGES, t) &&
            !o)
        );
      }
    },
    10217: function (e, t, n) {
      n(47120);
      var l,
        a,
        i = n(200651),
        o = n(192379),
        s = n(120356),
        r = n.n(s),
        c = n(913527),
        d = n.n(c),
        u = n(442837),
        m = n(846519),
        p = n(212605),
        v = n(481060),
        h = n(100527),
        x = n(906732),
        g = n(70097),
        C = n(237617),
        f = n(318374),
        j = n(717680),
        N = n(594174),
        E = n(962399),
        b = n(626135),
        L = n(823379),
        I = n(709054),
        S = n(39604),
        Z = n(572720),
        k = n(981631),
        T = n(388032),
        y = n(272964),
        M = n(770151);
      ((a = l || (l = {})).DELETE = "delete"),
        (a.EDIT = "edit"),
        (a.SHARE = "share");
      function B(e) {
        let { clip: t, isNew: n, videoRef: l } = e,
          a = 0 === t.length,
          [s, r] = o.useMemo(() => {
            let e = t.length,
              n = !1,
              l =
                null != t.editMetadata
                  ? t.editMetadata.end - t.editMetadata.start
                  : null;
            return (
              null != l && 1e3 * l < t.length && ((e = 1e3 * l), (n = !0)),
              [n, d().duration(e)]
            );
          }, [t.length, t.editMetadata]),
          c = "".concat(r.seconds()).padStart(2, "0");
        return (0, i.jsxs)("div", {
          className: y.clipThumbContainer,
          children: [
            (0, i.jsx)(_, { clip: t, videoRef: l }),
            (0, i.jsxs)("div", {
              className: y.clipBadges,
              children: [
                a &&
                  (0, i.jsx)("div", {
                    className: y.clipProcessingBadge,
                    children: (0, i.jsx)(v.Text, {
                      variant: "text-md/medium",
                      color: "always-white",
                      children: T.intl.string(T.t["2Fp7OD"]),
                    }),
                  }),
                !a &&
                  n &&
                  (0, i.jsxs)(v.Text, {
                    className: y.clipNewBadge,
                    variant: "eyebrow",
                    color: "always-white",
                    children: [
                      (0, i.jsx)(v.SparklesIcon, {
                        size: "md",
                        color: "currentColor",
                        className: y.newIcon,
                      }),
                      T.intl.string(T.t.y2b7CA).toUpperCase(),
                    ],
                  }),
                !a &&
                  (0, i.jsxs)("div", {
                    className: y.clipDurationBadge,
                    children: [
                      s
                        ? (0, i.jsx)(E.Z, { className: y.clipDurationEditIcon })
                        : null,
                      (0, i.jsx)(v.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: "".concat(r.minutes(), ":").concat(c),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function D(e) {
        var t;
        let { clip: n, focused: l, onFocus: a } = e,
          [s, c] = o.useState(n.name),
          d = !n.name,
          [u, m] = o.useState(!1),
          [h, x] = o.useState(null !== (t = n.name) && void 0 !== t ? t : ""),
          [g, C] = o.useState(!1),
          f = async () => {
            C(!0),
              await (0, S.Tm)(n.id, { name: "" === h ? void 0 : h }),
              C(!1),
              m(!1);
          };
        return (o.useEffect(() => {
          if (s !== n.name) {
            var e;
            c(n.name), x(null !== (e = n.name) && void 0 !== e ? e : "");
          }
        }, [n.name, s]),
        u)
          ? (0, i.jsx)(v.TextInput, {
              inputClassName: r()(M["heading-lg/medium"], y.clipTitleInput),
              onClick: (e) => e.stopPropagation(),
              value: h,
              autoFocus: !0,
              onKeyDown: (e) => {
                "Enter" === e.key && f();
              },
              disabled: g,
              onChange: x,
              onBlur: f,
            })
          : (0, i.jsxs)(v.Clickable, {
              className: y.clipTitleInputPlaceholder,
              onFocus: a,
              onClick: (e) => {
                e.stopPropagation(), m(!0);
              },
              children: [
                d
                  ? (0, i.jsx)(v.Heading, {
                      className: y.clipTitle,
                      color: "text-muted",
                      variant: "heading-lg/medium",
                      children: T.intl.string(T.t["x+/nmJ"]),
                    })
                  : (0, i.jsx)(v.Heading, {
                      className: y.clipTitle,
                      color: "text-normal",
                      variant: "heading-lg/medium",
                      children: n.name,
                    }),
                l &&
                  (0, i.jsx)(v.PencilIcon, {
                    size: "custom",
                    "aria-label": T.intl.string(T.t.bt75u7),
                    color: v.tokens.colors.TEXT_MUTED,
                    height: p.Z.sm,
                    width: p.Z.sm,
                    className: y.clipTitleIcon,
                  }),
              ],
            });
      }
      function _(e) {
        let { clip: t, videoRef: n } = e,
          l = (0, Z.l)(t);
        return 0 === t.length
          ? (0, i.jsx)(v.Spinner, {
              type: v.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
              className: y.clipThumb,
            })
          : null != l
            ? (0, i.jsx)(g.Z, {
                preload: "metadata",
                muted: !0,
                poster: t.thumbnail,
                src: l,
                loop: !0,
                className: y.clipThumb,
                ref: n,
              })
            : (0, i.jsx)("img", {
                alt: "",
                src: t.thumbnail,
                className: y.clipThumb,
              });
      }
      function H(e) {
        let {
            clip: t,
            exporting: n,
            actionsDisabled: l,
            onBeforeDelete: a,
            onDelete: s,
            onEdit: r,
            onShare: c,
            onBlur: d,
          } = e,
          u = (0, j.Z)(),
          m = o.useCallback(
            (e) => {
              e.stopPropagation(),
                e.shiftKey ? (a(), (0, S.sS)(t.filepath)) : s(t, a),
                b.default.track(k.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                  type: "delete",
                });
            },
            [s, a, t],
          ),
          p = o.useCallback(
            (e) => {
              e.stopPropagation(),
                r(t),
                b.default.track(k.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                  type: "edit",
                });
            },
            [r, t],
          ),
          h = o.useCallback(
            (e) => {
              e.stopPropagation(),
                c(t),
                b.default.track(k.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                  type: "share",
                });
            },
            [c, t],
          );
        return (0, i.jsxs)("div", {
          className: y.buttonContainer,
          children: [
            null != s &&
              (0, i.jsx)(v.Tooltip, {
                text: T.intl.string(T.t.oyYWHB),
                children: (e) =>
                  (0, i.jsx)(v.Button, {
                    ...e,
                    disabled: l,
                    color: u ? v.Button.Colors.RED : v.Button.Colors.PRIMARY,
                    onClick: m,
                    className: y.button,
                    size: v.Button.Sizes.NONE,
                    look: v.Button.Looks.FILLED,
                    children: (0, i.jsx)(v.TrashIcon, {
                      size: "md",
                      color: "currentColor",
                      className: y.miniIcon,
                    }),
                  }),
              }),
            (0, i.jsx)(v.Tooltip, {
              text: T.intl.string(T.t.bt75u7),
              children: (e) =>
                (0, i.jsx)(v.Button, {
                  ...e,
                  disabled: l,
                  color: v.Button.Colors.PRIMARY,
                  onClick: p,
                  className: y.button,
                  size: v.Button.Sizes.NONE,
                  look: v.Button.Looks.FILLED,
                  children: (0, i.jsx)(E.Z, { className: y.miniIcon }),
                }),
            }),
            (0, i.jsx)(v.Tooltip, {
              text: T.intl.string(T.t.RDE0SU),
              children: (e) => {
                let { onBlur: t, ...a } = e;
                return (0, i.jsx)(v.Button, {
                  ...a,
                  disabled: l && !n,
                  submitting: n,
                  color: v.Button.Colors.BRAND,
                  onBlur: (e) => {
                    d(e), null == t || t();
                  },
                  onClick: h,
                  className: y.button,
                  size: v.Button.Sizes.NONE,
                  look: v.Button.Looks.FILLED,
                  children: (0, i.jsx)(v.ShareIcon, {
                    size: "lg",
                    color: "currentColor",
                    className: y.miniIcon,
                  }),
                });
              },
            }),
          ],
        });
      }
      t.Z = function (e) {
        var t, n, l;
        let {
            clip: a,
            exporting: s,
            actionsDisabled: c,
            isNew: d,
            onDelete: p,
            onEdit: g,
            onShare: j,
          } = e,
          E = (0, u.Wu)([N.default], () =>
            a.users.map((e) => N.default.getUser(e)).filter(L.lm),
          ),
          { analyticsLocations: S } = (0, x.ZP)(h.Z.CLIPS_GALLERY_ITEM),
          [Z, M] = o.useState(!1),
          _ = o.useRef(null),
          P = (0, C.Z)(
            null !==
              (l =
                null === (t = a.editMetadata) || void 0 === t
                  ? void 0
                  : t.start) && void 0 !== l
              ? l
              : 0,
          ),
          R = o.useRef(
            new m.sW(500, () => {
              var e;
              let t = _.current;
              null != t &&
                t.paused &&
                ((t.currentTime = P.current),
                null === (e = _.current) || void 0 === e || e.play());
            }),
          ),
          w = o.useCallback(() => {
            let e = _.current;
            null != e && (e.pause(), (e.src = ""));
          }, []),
          A = o.useCallback(() => {
            var e;
            M(!0), null === (e = R.current) || void 0 === e || e.delay();
          }, []),
          V = o.useCallback(() => {
            var e, t, n;
            M(!1);
            let l = _.current;
            null === (e = R.current) || void 0 === e || e.cancel(),
              null != l &&
                (l.pause(),
                (l.currentTime =
                  null !==
                    (n =
                      null === (t = a.editMetadata) || void 0 === t
                        ? void 0
                        : t.start) && void 0 !== n
                    ? n
                    : 0));
          }, [
            null === (n = a.editMetadata) || void 0 === n ? void 0 : n.start,
          ]),
          z = o.useCallback(
            (e) => {
              var t, n;
              (null === (n = e.relatedTarget) || void 0 === n
                ? void 0
                : null === (t = n.parentElement) || void 0 === t
                  ? void 0
                  : t.parentElement) !== e.currentTarget.parentElement && V();
            },
            [V],
          ),
          F = new Date(I.default.extractTimestamp(a.id)),
          O = F.toLocaleDateString(),
          G = F.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          K = "".concat(O, " • ").concat(G);
        return (0, i.jsx)(x.Gt, {
          value: S,
          children: (0, i.jsxs)(v.ClickableContainer, {
            "aria-disabled": c,
            "aria-label": T.intl.string(T.t.bt75u7),
            onClick: c
              ? void 0
              : () => {
                  g(a), b.default.track(k.rMx.CLIP_GALLERY_CARD_CLICKED);
                },
            className: r()(y.clipItem, { [y.disabled]: c }),
            onBlur: z,
            onFocus: A,
            onMouseOver: A,
            onMouseLeave: V,
            children: [
              (0, i.jsx)(B, { clip: a, isNew: d, videoRef: _ }),
              (0, i.jsxs)("div", {
                className: y.clipFooter,
                children: [
                  (0, i.jsx)(D, { clip: a, focused: Z, onFocus: A }),
                  (0, i.jsx)(v.Text, {
                    className: y.clipMetadata,
                    color: "text-normal",
                    variant: "text-md/medium",
                    children: a.applicationName,
                  }),
                  (0, i.jsx)(v.Text, {
                    className: y.clipMetadata,
                    color: "text-normal",
                    variant: "text-md/medium",
                    children: K,
                  }),
                  (0, i.jsxs)("div", {
                    className: y.usersAndDelete,
                    children: [
                      (0, i.jsx)(f.Z, {
                        maxUsers: 4,
                        users: E,
                        onFocus: (e) => {
                          var t, n, l, a;
                          let i = e.relatedTarget,
                            o =
                              null === (n = e.currentTarget.parentElement) ||
                              void 0 === n
                                ? void 0
                                : null === (t = n.parentElement) || void 0 === t
                                  ? void 0
                                  : t.parentElement;
                          if ((null == i ? void 0 : i.parentElement) !== o)
                            (null == i
                              ? void 0
                              : null === (a = i.parentElement) || void 0 === a
                                ? void 0
                                : null === (l = a.parentElement) || void 0 === l
                                  ? void 0
                                  : l.parentElement) !== o && A();
                        },
                      }),
                      Z &&
                        (0, i.jsx)(H, {
                          clip: a,
                          actionsDisabled: c,
                          exporting: s,
                          onBeforeDelete: w,
                          onDelete: p,
                          onEdit: g,
                          onShare: j,
                          onBlur: (e) => {
                            var t;
                            (null === (t = e.relatedTarget) || void 0 === t
                              ? void 0
                              : t.parentElement) !==
                              e.currentTarget.parentElement && V();
                          },
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    410426: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var l = n(200651),
        a = n(192379),
        i = n(120356),
        o = n.n(i),
        s = n(399606),
        r = n(481060),
        c = n(547972),
        d = n(556296),
        u = n(13140),
        m = n(435064),
        p = n(981631),
        v = n(332325),
        h = n(388032),
        x = n(680901);
      function g(e) {
        let { isEmptyBecauseQuery: t, closePopout: n } = e,
          i = (0, s.e7)([d.Z], () => d.Z.getKeybindForAction(p.kg4.SAVE_CLIP)),
          g = (0, s.e7)([m.Z], () => m.Z.getSettings().clipsEnabled),
          C = t ? x.noSearchResultsImage : x.noClipsImage,
          f = a.useCallback(() => {
            n(), (0, c.Z)(v.Z.CLIPS);
          }, [n]),
          j = (() => {
            if (!g) return h.intl.format(h.t["3iveam"], { onClick: f });
            if (t) return h.intl.string(h.t["xrEs6+"]);
            if (null == i) return h.intl.format(h.t.jpKk7e, { onClick: f });
            {
              let e = u.BB(i.shortcut, !0);
              return h.intl.format(h.t["xY/8Ky"], {
                keybind: e,
                keybindHook: () =>
                  (0, l.jsx)("span", {
                    className: x.keybindHintKeys,
                    children: (0, l.jsx)(r.KeyCombo, {
                      className: x.keybindShortcut,
                      shortcut: e,
                    }),
                  }),
              });
            }
          })();
        return (0, l.jsx)("div", {
          className: x.container,
          children: (0, l.jsxs)("div", {
            className: x.content,
            children: [
              (0, l.jsx)("div", { className: C }),
              (0, l.jsx)(r.Text, {
                variant: "text-md/medium",
                className: o()(x.noClipsText, { [x.noSearchResultsText]: t }),
                children: j,
              }),
            ],
          }),
        });
      }
    },
    207346: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var l = n(200651);
      n(192379);
      var a = n(481060),
        i = n(547972),
        o = n(703288),
        s = n(332325),
        r = n(388032),
        c = n(173855);
      function d(e) {
        let {
          filterQuery: t,
          setFilterQuery: n,
          onClose: d,
          sortOrder: u,
          setSortOrder: m,
        } = e;
        return (0, l.jsxs)(a.ModalHeader, {
          className: c.root,
          separator: !1,
          children: [
            (0, l.jsx)(a.ClipsIcon, {
              size: "xs",
              color: "currentColor",
              className: c.icon,
            }),
            (0, l.jsx)(a.Heading, {
              className: c.title,
              variant: "heading-xxl/bold",
              children: r.intl.string(r.t.z2jK6e),
            }),
            (0, l.jsx)("div", {
              className: c.betaTag,
              children: (0, l.jsx)(o.Z, {}),
            }),
            (0, l.jsx)(a.SearchBar, {
              autoFocus: !0,
              size: a.SearchBar.Sizes.MEDIUM,
              placeholder: r.intl.string(r.t["5h0QOD"]),
              className: c.queryInput,
              query: t,
              onChange: n,
              onClear: () => n(""),
            }),
            (0, l.jsx)(a.Select, {
              placeholder: r.intl.string(r.t["0XtAW1"]),
              className: c.sortInput,
              options: [
                { value: "descending", label: r.intl.string(r.t.SCsC5u) },
                { value: "ascending", label: r.intl.string(r.t.fdx7aG) },
              ],
              isSelected: (e) => e === u,
              select: m,
              serialize: (e) => e,
            }),
            (0, l.jsx)(a.Button, {
              color: a.ButtonColors.TRANSPARENT,
              size: a.Button.Sizes.NONE,
              className: c.settingsButton,
              look: a.Button.Looks.FILLED,
              onClick: () => {
                (0, i.Z)(s.Z.CLIPS), d();
              },
              children: (0, l.jsx)(a.SettingsIcon, {
                size: "md",
                color: "currentColor",
              }),
            }),
            (0, l.jsx)(a.ModalCloseButton, { className: c.button, onClick: d }),
          ],
        });
      }
    },
    542055: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        }),
        n(47120);
      var l = n(200651),
        a = n(192379),
        i = n(658722),
        o = n.n(i),
        s = n(392711),
        r = n.n(s),
        c = n(990547),
        d = n(442837),
        u = n(952265),
        m = n(481060),
        p = n(100527),
        v = n(906732),
        h = n(213609),
        x = n(709054),
        g = n(435064),
        C = n(39604),
        f = n(680056),
        j = n(10217),
        N = n(410426),
        E = n(207346),
        b = n(356659),
        L = n(436898);
      function I(e) {
        let { channelId: t, onClose: i, transitionState: s } = e,
          [I, S] = a.useState(""),
          [Z, k] = a.useState("descending"),
          [T, y] = a.useState(!0),
          [M, B] = a.useState(null),
          D = a.useDeferredValue(I),
          _ = (0, d.e7)([g.Z], () => g.Z.getClips()),
          H = (0, d.e7)([g.Z], () => g.Z.getPendingClips()),
          P = (0, d.e7)([g.Z], () => g.Z.getSettings().storageLocation),
          R = (0, d.Wu)([g.Z], () => g.Z.getNewClipIds()),
          { analyticsLocations: w } = (0, v.ZP)(p.Z.CLIPS_GALLERY),
          A = a.useMemo(() => [...H, ..._], [_, H]);
        (0, h.Z)(
          {
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: A.length },
          },
          { disableTrack: T },
          [A.length, T],
        ),
          a.useEffect(
            () => (
              (0, C.eL)(),
              () => {
                (0, C.eL)(), (0, C.zq)();
              }
            ),
            [],
          );
        let V = a.useMemo(
          () =>
            r()(A)
              .filter((e) => {
                if ("" === D.trim()) return !0;
                let t = D.toLowerCase();
                return (
                  (null != e.name &&
                    "" !== e.name &&
                    o()(t, e.name.toLowerCase())) ||
                  o()(t, e.applicationName.toLowerCase())
                );
              })
              .sort((e, t) =>
                "ascending" === Z
                  ? x.default.compare(e.id, t.id)
                  : "descending" === Z
                    ? x.default.compare(t.id, e.id)
                    : 0,
              )
              .chunk(3)
              .value(),
          [A, D, Z],
        );
        a.useEffect(() => {
          (async function e() {
            y(!0);
            try {
              await C.jv(P);
            } finally {
              y(!1);
            }
          })();
        }, [P]);
        let z = a.useCallback(
            (e) => {
              (0, m.openModalLazy)(
                async () => {
                  let { default: a } = await n
                    .e("61526")
                    .then(n.bind(n, 22989));
                  return (n) => (0, l.jsx)(a, { ...n, channelId: t, clip: e });
                },
                { modalKey: b.Ut },
              );
            },
            [t],
          ),
          { onShareClick: F } = (0, f.Z)({ channelId: t, setExporting: B }),
          O = a.useCallback((e, t) => {
            (0, m.openModalLazy)(async () => {
              let { default: a } = await n.e("15915").then(n.bind(n, 799677));
              return (n) =>
                (0, l.jsx)(a, {
                  clip: e,
                  ...n,
                  onBeforeDelete: t,
                  onAfterDelete: () => n.onClose(),
                });
            });
          }, []),
          G = a.useCallback(
            (e) => {
              let { row: t } = e,
                n = V[t];
              return (0, l.jsx)(
                "div",
                {
                  className: L.clipsRow,
                  children: n.map((e) => {
                    let t = 0 === e.length;
                    return (0, l.jsx)(
                      j.Z,
                      {
                        actionsDisabled: null != M || t,
                        exporting: M === e.id,
                        isNew: R.includes(e.id),
                        onDelete: O,
                        onEdit: z,
                        onShare: (e) =>
                          F({ clip: e, onShareComplete: () => u.Mr(b.Qr) }),
                        clip: e,
                      },
                      e.id,
                    );
                  }),
                },
                "clips-gallery-".concat(t),
              );
            },
            [V, R, M, F, O, z],
          ),
          K =
            T || 0 !== V.length
              ? T
                ? (0, l.jsx)("div", {
                    className: L.spinnerContainer,
                    children: (0, l.jsx)(m.Spinner, {}),
                  })
                : (0, l.jsx)(m.List, {
                    className: L.clipGrid,
                    sections: [V.length],
                    sectionHeight: 0,
                    rowHeight: 328.25,
                    renderRow: G,
                  })
              : (0, l.jsx)(N.Z, {
                  isEmptyBecauseQuery: A.length > 0,
                  closePopout: i,
                });
        return (0, l.jsx)(m.ModalRoot, {
          size: m.ModalSize.DYNAMIC,
          transitionState: s,
          className: L.root,
          children: (0, l.jsxs)(v.Gt, {
            value: w,
            children: [
              (0, l.jsx)(E.Z, {
                onClose: i,
                filterQuery: I,
                setFilterQuery: S,
                sortOrder: Z,
                setSortOrder: k,
              }),
              K,
            ],
          }),
        });
      }
    },
    937784: function (e, t, n) {
      n.d(t, {
        e: function () {
          return v;
        },
      });
      var l = n(200651);
      n(192379);
      var a = n(481060),
        i = n(592125),
        o = n(703558),
        s = n(626135),
        r = n(709054),
        c = n(127654),
        d = n(61994),
        u = n(39604),
        m = n(356659),
        p = n(981631);
      async function v(e, t) {
        let { channelId: v, editMetadata: h, analyticsLocations: x } = t,
          g = i.Z.getChannel(v);
        if (null != g)
          try {
            var C;
            let t = await (0, u.rO)(e, h),
              n =
                null !== (C = e.name) && void 0 !== C
                  ? C
                  : (0, m.yl)(r.default.extractTimestamp(e.id)),
              l = (0, d.Z)(n);
            (0, c.d)(
              [
                new File([t], "".concat("" !== l ? l : "clip", ".mp4"), {
                  type: "video/mp4",
                }),
              ],
              g,
              o.d.ChannelMessage,
              { filesMetadata: [{ clip: e }] },
            ),
              s.default.track(p.rMx.CLIP_SHARED, {
                location_stack: x,
                guild_id: g.guild_id,
                channel_id: g.id,
                channel_type: g.type,
                application_id: e.applicationId,
                clip_id: e.id,
              });
          } catch (e) {
            throw (m.jF.error(e), e);
          }
        else
          (0, a.openModalLazy)(async () => {
            let { default: t } = await n.e("99617").then(n.bind(n, 502801));
            return (n) => (0, l.jsx)(t, { ...n, clip: e, editMetadata: h });
          });
      }
    },
    572720: function (e, t, n) {
      n.d(t, {
        l: function () {
          return i;
        },
      });
      var l = n(192379),
        a = n(579806);
      function i(e) {
        return (0, l.useMemo)(
          () =>
            null == a.Z.clips.getClipProtocolURLFromPath
              ? null
              : a.Z.clips.getClipProtocolURLFromPath(e.filepath),
          [e.filepath],
        );
      }
    },
    680056: function (e, t, n) {
      var l = n(192379),
        a = n(906732),
        i = n(407316),
        o = n(937784);
      t.Z = (e) => {
        let { channelId: t, setExporting: n } = e,
          { analyticsLocations: s } = (0, a.ZP)();
        return {
          onShareClick: l.useCallback(
            async (e) => {
              let {
                clip: l,
                cropData: a,
                applicationAudioEnabled: r,
                voiceAudioEnabled: c,
                onShareComplete: d,
              } = e;
              n(l.id);
              try {
                var u, m, p, v, h, x, g, C, f, j;
                let e = (0, i.W)(t);
                await (0, o.e)(l, {
                  channelId: e ? t : void 0,
                  analyticsLocations: s,
                  editMetadata: {
                    start:
                      null !==
                        (x =
                          null !== (h = null == a ? void 0 : a.start) &&
                          void 0 !== h
                            ? h
                            : null === (u = l.editMetadata) || void 0 === u
                              ? void 0
                              : u.start) && void 0 !== x
                        ? x
                        : 0,
                    end:
                      null !==
                        (C =
                          null !== (g = null == a ? void 0 : a.end) &&
                          void 0 !== g
                            ? g
                            : null === (m = l.editMetadata) || void 0 === m
                              ? void 0
                              : m.end) && void 0 !== C
                        ? C
                        : l.length / 1e3,
                    applicationAudio:
                      null ===
                        (f =
                          null != r
                            ? r
                            : null === (p = l.editMetadata) || void 0 === p
                              ? void 0
                              : p.applicationAudio) ||
                      void 0 === f ||
                      f,
                    voiceAudio:
                      null ===
                        (j =
                          null != c
                            ? c
                            : null === (v = l.editMetadata) || void 0 === v
                              ? void 0
                              : v.voiceAudio) ||
                      void 0 === j ||
                      j,
                  },
                });
              } catch (e) {
              } finally {
                null == d || d(), n(null);
              }
            },
            [t, s, n],
          ),
        };
      };
    },
    962399: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var l = n(200651);
      n(192379);
      var a = n(331595);
      function i(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: i = "currentColor",
          foreground: o,
          ...s
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, a.Z)(s),
          width: t,
          height: n,
          viewBox: "0 0 18 20",
          children: (0, l.jsx)("path", {
            fill: i,
            className: o,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.17187 0H9.83854V0.833333H8.17187V0ZM8.17324 0.833419V1.75009H9.83991V0.833419H8.17324ZM8.17324 4.16662V5.41675H9.83991V4.16662H11.5066V5.83325H15.6719V14.1666H11.5066V15.8333H16.5052C16.9654 15.8333 17.3385 15.4602 17.3385 14.9999V4.99992C17.3385 4.53968 16.9654 4.16659 16.5052 4.16659H9.83991V3.58342H8.17324V4.16659H1.50521C1.04497 4.16659 0.671875 4.53968 0.671875 4.99992V14.9999C0.671875 15.4602 1.04497 15.8333 1.50521 15.8333H6.50658V14.1666H2.33854V5.83325H6.50658V4.16662H8.17324ZM8.17324 7.25008V9.08342H9.83991V7.25008H8.17324ZM8.17324 10.9167V12.7501H9.83991V10.9167H8.17324ZM8.17324 14.5834V16.4167H9.83991V14.5834H8.17324ZM9.83854 19.1668V20H8.17187V19.1667H8.17324V18.2501H9.83991V19.1668H9.83854Z",
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=e753ceccff0696cb24a4.js.map
