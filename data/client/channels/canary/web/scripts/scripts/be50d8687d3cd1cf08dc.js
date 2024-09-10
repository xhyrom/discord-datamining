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
    703288: function (e, t, a) {
      var l = a(735250);
      a(470079);
      var n = a(481060),
        s = a(688465),
        i = a(689938);
      t.Z = () =>
        (0, l.jsx)(n.TooltipContainer, {
          text: i.Z.Messages.CLIPS_BETA_TAG_HOVER,
          children: (0, l.jsx)(s.Z, {}),
        });
    },
    407316: function (e, t, a) {
      a.d(t, {
        W: function () {
          return i;
        },
      });
      var l = a(592125),
        n = a(496675),
        s = a(981631);
      function i(e) {
        let t = l.Z.getChannel(e),
          a = null == t ? void 0 : t.isPrivate(),
          i = null == t ? void 0 : t.isForumChannel();
        return (
          a ||
          (n.Z.can(s.Plq.ATTACH_FILES, t) &&
            n.Z.can(s.Plq.SEND_MESSAGES, t) &&
            !i)
        );
      }
    },
    10217: function (e, t, a) {
      a(47120);
      var l,
        n,
        s = a(735250),
        i = a(470079),
        o = a(120356),
        r = a.n(o),
        c = a(913527),
        d = a.n(c),
        u = a(442837),
        m = a(846519),
        p = a(212605),
        C = a(481060),
        v = a(100527),
        h = a(906732),
        x = a(70097),
        g = a(237617),
        L = a(318374),
        f = a(717680),
        E = a(594174),
        N = a(962399),
        S = a(626135),
        I = a(823379),
        Z = a(709054),
        _ = a(39604),
        j = a(572720),
        M = a(981631),
        T = a(689938),
        b = a(66120),
        k = a(654165);
      ((n = l || (l = {})).DELETE = "delete"),
        (n.EDIT = "edit"),
        (n.SHARE = "share");
      function P(e) {
        let { clip: t, isNew: a, videoRef: l } = e,
          n = 0 === t.length,
          [o, r] = i.useMemo(() => {
            let e = t.length,
              a = !1,
              l =
                null != t.editMetadata
                  ? t.editMetadata.end - t.editMetadata.start
                  : null;
            return (
              null != l && 1e3 * l < t.length && ((e = 1e3 * l), (a = !0)),
              [a, d().duration(e)]
            );
          }, [t.length, t.editMetadata]),
          c = "".concat(r.seconds()).padStart(2, "0");
        return (0, s.jsxs)("div", {
          className: b.clipThumbContainer,
          children: [
            (0, s.jsx)(R, { clip: t, videoRef: l }),
            (0, s.jsxs)("div", {
              className: b.clipBadges,
              children: [
                n &&
                  (0, s.jsx)("div", {
                    className: b.clipProcessingBadge,
                    children: (0, s.jsx)(C.Text, {
                      variant: "text-md/medium",
                      color: "always-white",
                      children: T.Z.Messages.CLIPS_PROCESSING_BADGE,
                    }),
                  }),
                !n &&
                  a &&
                  (0, s.jsxs)(C.Text, {
                    className: b.clipNewBadge,
                    variant: "eyebrow",
                    color: "always-white",
                    children: [
                      (0, s.jsx)(C.SparklesIcon, {
                        size: "md",
                        color: "currentColor",
                        className: b.newIcon,
                      }),
                      T.Z.Messages.NEW.toUpperCase(),
                    ],
                  }),
                !n &&
                  (0, s.jsxs)("div", {
                    className: b.clipDurationBadge,
                    children: [
                      o
                        ? (0, s.jsx)(N.Z, { className: b.clipDurationEditIcon })
                        : null,
                      (0, s.jsx)(C.Text, {
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
      function y(e) {
        var t;
        let { clip: a, focused: l, onFocus: n } = e,
          [o, c] = i.useState(a.name),
          d = !a.name,
          [u, m] = i.useState(!1),
          [v, h] = i.useState(null !== (t = a.name) && void 0 !== t ? t : ""),
          [x, g] = i.useState(!1),
          L = async () => {
            g(!0),
              await (0, _.Tm)(a.id, { name: "" === v ? void 0 : v }),
              g(!1),
              m(!1);
          };
        return (i.useEffect(() => {
          if (o !== a.name) {
            var e;
            c(a.name), h(null !== (e = a.name) && void 0 !== e ? e : "");
          }
        }, [a.name, o]),
        u)
          ? (0, s.jsx)(C.TextInput, {
              inputClassName: r()(k["heading-lg/medium"], b.clipTitleInput),
              onClick: (e) => e.stopPropagation(),
              value: v,
              autoFocus: !0,
              onKeyDown: (e) => {
                "Enter" === e.key && L();
              },
              disabled: x,
              onChange: h,
              onBlur: L,
            })
          : (0, s.jsxs)(C.Clickable, {
              className: b.clipTitleInputPlaceholder,
              onFocus: n,
              onClick: (e) => {
                e.stopPropagation(), m(!0);
              },
              children: [
                d
                  ? (0, s.jsx)(C.Heading, {
                      className: b.clipTitle,
                      color: "text-muted",
                      variant: "heading-lg/medium",
                      children: T.Z.Messages.CLIPS_ADD_A_TITLE,
                    })
                  : (0, s.jsx)(C.Heading, {
                      className: b.clipTitle,
                      color: "text-normal",
                      variant: "heading-lg/medium",
                      children: a.name,
                    }),
                l &&
                  (0, s.jsx)(C.PencilIcon, {
                    size: "custom",
                    "aria-label": T.Z.Messages.EDIT,
                    color: C.tokens.colors.TEXT_MUTED,
                    height: p.Z.sm,
                    width: p.Z.sm,
                    className: b.clipTitleIcon,
                  }),
              ],
            });
      }
      function R(e) {
        let { clip: t, videoRef: a } = e,
          l = (0, j.l)(t);
        return 0 === t.length
          ? (0, s.jsx)(C.Spinner, {
              type: C.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
              className: b.clipThumb,
            })
          : null != l
            ? (0, s.jsx)(x.Z, {
                preload: "metadata",
                muted: !0,
                poster: t.thumbnail,
                src: l,
                loop: !0,
                className: b.clipThumb,
                ref: a,
              })
            : (0, s.jsx)("img", {
                alt: "",
                src: t.thumbnail,
                className: b.clipThumb,
              });
      }
      function D(e) {
        let {
            clip: t,
            exporting: a,
            actionsDisabled: l,
            onBeforeDelete: n,
            onDelete: o,
            onEdit: r,
            onShare: c,
            onBlur: d,
          } = e,
          u = (0, f.Z)(),
          m = i.useCallback(
            (e) => {
              e.stopPropagation(),
                e.shiftKey ? (n(), (0, _.sS)(t.filepath)) : o(t, n),
                S.default.track(M.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                  type: "delete",
                });
            },
            [o, n, t],
          ),
          p = i.useCallback(
            (e) => {
              e.stopPropagation(),
                r(t),
                S.default.track(M.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                  type: "edit",
                });
            },
            [r, t],
          ),
          v = i.useCallback(
            (e) => {
              e.stopPropagation(),
                c(t),
                S.default.track(M.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                  type: "share",
                });
            },
            [c, t],
          );
        return (0, s.jsxs)("div", {
          className: b.buttonContainer,
          children: [
            null != o &&
              (0, s.jsx)(C.Tooltip, {
                text: T.Z.Messages.DELETE,
                children: (e) =>
                  (0, s.jsx)(C.Button, {
                    ...e,
                    disabled: l,
                    color: u ? C.Button.Colors.RED : C.Button.Colors.PRIMARY,
                    onClick: m,
                    className: b.button,
                    size: C.Button.Sizes.NONE,
                    look: C.Button.Looks.FILLED,
                    children: (0, s.jsx)(C.TrashIcon, {
                      size: "md",
                      color: "currentColor",
                      className: b.miniIcon,
                    }),
                  }),
              }),
            (0, s.jsx)(C.Tooltip, {
              text: T.Z.Messages.EDIT,
              children: (e) =>
                (0, s.jsx)(C.Button, {
                  ...e,
                  disabled: l,
                  color: C.Button.Colors.PRIMARY,
                  onClick: p,
                  className: b.button,
                  size: C.Button.Sizes.NONE,
                  look: C.Button.Looks.FILLED,
                  children: (0, s.jsx)(N.Z, { className: b.miniIcon }),
                }),
            }),
            (0, s.jsx)(C.Tooltip, {
              text: T.Z.Messages.SHARE,
              children: (e) => {
                let { onBlur: t, ...n } = e;
                return (0, s.jsx)(C.Button, {
                  ...n,
                  disabled: l && !a,
                  submitting: a,
                  color: C.Button.Colors.BRAND,
                  onBlur: (e) => {
                    d(e), null == t || t();
                  },
                  onClick: v,
                  className: b.button,
                  size: C.Button.Sizes.NONE,
                  look: C.Button.Looks.FILLED,
                  children: (0, s.jsx)(C.ShareIcon, {
                    size: "lg",
                    color: "currentColor",
                    className: b.miniIcon,
                  }),
                });
              },
            }),
          ],
        });
      }
      t.Z = function (e) {
        var t, a, l;
        let {
            clip: n,
            exporting: o,
            actionsDisabled: c,
            isNew: d,
            onDelete: p,
            onEdit: x,
            onShare: f,
          } = e,
          N = (0, u.Wu)([E.default], () =>
            n.users.map((e) => E.default.getUser(e)).filter(I.lm),
          ),
          { analyticsLocations: _ } = (0, h.ZP)(v.Z.CLIPS_GALLERY_ITEM),
          [j, k] = i.useState(!1),
          R = i.useRef(null),
          A = (0, g.Z)(
            null !==
              (l =
                null === (t = n.editMetadata) || void 0 === t
                  ? void 0
                  : t.start) && void 0 !== l
              ? l
              : 0,
          ),
          B = i.useRef(
            new m.sW(500, () => {
              var e;
              let t = R.current;
              null != t &&
                t.paused &&
                ((t.currentTime = A.current),
                null === (e = R.current) || void 0 === e || e.play());
            }),
          ),
          H = i.useCallback(() => {
            let e = R.current;
            null != e && (e.pause(), (e.src = ""));
          }, []),
          w = i.useCallback(() => {
            var e;
            k(!0), null === (e = B.current) || void 0 === e || e.delay();
          }, []),
          V = i.useCallback(() => {
            var e, t, a;
            k(!1);
            let l = R.current;
            null === (e = B.current) || void 0 === e || e.cancel(),
              null != l &&
                (l.pause(),
                (l.currentTime =
                  null !==
                    (a =
                      null === (t = n.editMetadata) || void 0 === t
                        ? void 0
                        : t.start) && void 0 !== a
                    ? a
                    : 0));
          }, [
            null === (a = n.editMetadata) || void 0 === a ? void 0 : a.start,
          ]),
          O = i.useCallback(
            (e) => {
              var t, a;
              (null === (a = e.relatedTarget) || void 0 === a
                ? void 0
                : null === (t = a.parentElement) || void 0 === t
                  ? void 0
                  : t.parentElement) !== e.currentTarget.parentElement && V();
            },
            [V],
          ),
          z = new Date(Z.default.extractTimestamp(n.id)),
          F = z.toLocaleDateString(),
          G = z.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          Y = "".concat(F, " • ").concat(G);
        return (0, s.jsx)(h.Gt, {
          value: _,
          children: (0, s.jsxs)(C.ClickableContainer, {
            "aria-disabled": c,
            "aria-label": T.Z.Messages.EDIT,
            onClick: c
              ? void 0
              : () => {
                  x(n), S.default.track(M.rMx.CLIP_GALLERY_CARD_CLICKED);
                },
            className: r()(b.clipItem, { [b.disabled]: c }),
            onBlur: O,
            onFocus: w,
            onMouseOver: w,
            onMouseLeave: V,
            children: [
              (0, s.jsx)(P, { clip: n, isNew: d, videoRef: R }),
              (0, s.jsxs)("div", {
                className: b.clipFooter,
                children: [
                  (0, s.jsx)(y, { clip: n, focused: j, onFocus: w }),
                  (0, s.jsx)(C.Text, {
                    className: b.clipMetadata,
                    color: "text-normal",
                    variant: "text-md/medium",
                    children: n.applicationName,
                  }),
                  (0, s.jsx)(C.Text, {
                    className: b.clipMetadata,
                    color: "text-normal",
                    variant: "text-md/medium",
                    children: Y,
                  }),
                  (0, s.jsxs)("div", {
                    className: b.usersAndDelete,
                    children: [
                      (0, s.jsx)(L.Z, {
                        maxUsers: 4,
                        users: N,
                        onFocus: (e) => {
                          var t, a, l, n;
                          let s = e.relatedTarget,
                            i =
                              null === (a = e.currentTarget.parentElement) ||
                              void 0 === a
                                ? void 0
                                : null === (t = a.parentElement) || void 0 === t
                                  ? void 0
                                  : t.parentElement;
                          if ((null == s ? void 0 : s.parentElement) !== i)
                            (null == s
                              ? void 0
                              : null === (n = s.parentElement) || void 0 === n
                                ? void 0
                                : null === (l = n.parentElement) || void 0 === l
                                  ? void 0
                                  : l.parentElement) !== i && w();
                        },
                      }),
                      j &&
                        (0, s.jsx)(D, {
                          clip: n,
                          actionsDisabled: c,
                          exporting: o,
                          onBeforeDelete: H,
                          onDelete: p,
                          onEdit: x,
                          onShare: f,
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
    410426: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return x;
        },
      });
      var l = a(735250),
        n = a(470079),
        s = a(120356),
        i = a.n(s),
        o = a(399606),
        r = a(481060),
        c = a(547972),
        d = a(556296),
        u = a(13140),
        m = a(435064),
        p = a(981631),
        C = a(332325),
        v = a(689938),
        h = a(630814);
      function x(e) {
        let { isEmptyBecauseQuery: t, closePopout: a } = e,
          s = (0, o.e7)([d.Z], () => d.Z.getKeybindForAction(p.kg4.SAVE_CLIP)),
          x = (0, o.e7)([m.Z], () => m.Z.getSettings().clipsEnabled),
          g = t ? h.noSearchResultsImage : h.noClipsImage,
          L = n.useCallback(() => {
            a(), (0, c.Z)(C.Z.CLIPS);
          }, [a]),
          f = (() => {
            if (!x)
              return v.Z.Messages.CLIPS_GALLERY_NO_CLIPS_CLIPS_NOT_ENABLED.format(
                { onClick: L },
              );
            if (t) return v.Z.Messages.CLIPS_GALLERY_NO_CLIPS_MATCH_QUERY;
            if (null == s)
              return v.Z.Messages.CLIPS_GALLERY_NO_CLIPS_NO_KEYBIND_SET.format({
                onClick: L,
              });
            {
              let e = u.BB(s.shortcut, !0);
              return v.Z.Messages.CLIPS_GALLERY_NO_CLIPS.format({
                keybind: e,
                keybindHook: () =>
                  (0, l.jsx)("span", {
                    className: h.keybindHintKeys,
                    children: (0, l.jsx)(r.KeyCombo, {
                      className: h.keybindShortcut,
                      shortcut: e,
                    }),
                  }),
              });
            }
          })();
        return (0, l.jsx)("div", {
          className: h.container,
          children: (0, l.jsxs)("div", {
            className: h.content,
            children: [
              (0, l.jsx)("div", { className: g }),
              (0, l.jsx)(r.Text, {
                variant: "text-md/medium",
                className: i()(h.noClipsText, { [h.noSearchResultsText]: t }),
                children: f,
              }),
            ],
          }),
        });
      }
    },
    207346: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return d;
        },
      });
      var l = a(735250);
      a(470079);
      var n = a(481060),
        s = a(547972),
        i = a(703288),
        o = a(332325),
        r = a(689938),
        c = a(89441);
      function d(e) {
        let {
          filterQuery: t,
          setFilterQuery: a,
          onClose: d,
          sortOrder: u,
          setSortOrder: m,
        } = e;
        return (0, l.jsxs)(n.ModalHeader, {
          className: c.root,
          separator: !1,
          children: [
            (0, l.jsx)(n.ClipsIcon, {
              size: "xs",
              color: "currentColor",
              className: c.icon,
            }),
            (0, l.jsx)(n.Heading, {
              className: c.title,
              variant: "heading-xxl/bold",
              children: r.Z.Messages.CLIPS,
            }),
            (0, l.jsx)("div", {
              className: c.betaTag,
              children: (0, l.jsx)(i.Z, {}),
            }),
            (0, l.jsx)(n.SearchBar, {
              autoFocus: !0,
              size: n.SearchBar.Sizes.MEDIUM,
              placeholder: r.Z.Messages.SEARCH,
              className: c.queryInput,
              query: t,
              onChange: a,
              onClear: () => a(""),
            }),
            (0, l.jsx)(n.Select, {
              placeholder: r.Z.Messages.CLIPS_SORT_PLACEHOLDER,
              className: c.sortInput,
              options: [
                { value: "descending", label: r.Z.Messages.CLIPS_SORT_RECENT },
                { value: "ascending", label: r.Z.Messages.CLIPS_SORT_OLDEST },
              ],
              isSelected: (e) => e === u,
              select: m,
              serialize: (e) => e,
            }),
            (0, l.jsx)(n.Button, {
              color: n.ButtonColors.TRANSPARENT,
              size: n.Button.Sizes.NONE,
              className: c.settingsButton,
              look: n.Button.Looks.FILLED,
              onClick: () => {
                (0, s.Z)(o.Z.CLIPS), d();
              },
              children: (0, l.jsx)(n.SettingsIcon, {
                size: "md",
                color: "currentColor",
              }),
            }),
            (0, l.jsx)(n.ModalCloseButton, { className: c.button, onClick: d }),
          ],
        });
      }
    },
    542055: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return Z;
          },
        }),
        a(47120);
      var l = a(735250),
        n = a(470079),
        s = a(658722),
        i = a.n(s),
        o = a(392711),
        r = a.n(o),
        c = a(990547),
        d = a(442837),
        u = a(952265),
        m = a(481060),
        p = a(100527),
        C = a(906732),
        v = a(213609),
        h = a(709054),
        x = a(435064),
        g = a(39604),
        L = a(680056),
        f = a(10217),
        E = a(410426),
        N = a(207346),
        S = a(356659),
        I = a(21554);
      function Z(e) {
        let { channelId: t, onClose: s, transitionState: o } = e,
          [Z, _] = n.useState(""),
          [j, M] = n.useState("descending"),
          [T, b] = n.useState(!0),
          [k, P] = n.useState(null),
          y = n.useDeferredValue(Z),
          R = (0, d.e7)([x.Z], () => x.Z.getClips()),
          D = (0, d.e7)([x.Z], () => x.Z.getPendingClips()),
          A = (0, d.e7)([x.Z], () => x.Z.getSettings().storageLocation),
          B = (0, d.Wu)([x.Z], () => x.Z.getNewClipIds()),
          { analyticsLocations: H } = (0, C.ZP)(p.Z.CLIPS_GALLERY),
          w = n.useMemo(() => [...D, ...R], [R, D]);
        (0, v.Z)(
          {
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: w.length },
          },
          { disableTrack: T },
          [w.length, T],
        ),
          n.useEffect(
            () => (
              (0, g.eL)(),
              () => {
                (0, g.eL)(), (0, g.zq)();
              }
            ),
            [],
          );
        let V = n.useMemo(
          () =>
            r()(w)
              .filter((e) => {
                if ("" === y.trim()) return !0;
                let t = y.toLowerCase();
                return (
                  (null != e.name &&
                    "" !== e.name &&
                    i()(t, e.name.toLowerCase())) ||
                  i()(t, e.applicationName.toLowerCase())
                );
              })
              .sort((e, t) =>
                "ascending" === j
                  ? h.default.compare(e.id, t.id)
                  : "descending" === j
                    ? h.default.compare(t.id, e.id)
                    : 0,
              )
              .chunk(3)
              .value(),
          [w, y, j],
        );
        n.useEffect(() => {
          (async function e() {
            b(!0);
            try {
              await g.jv(A);
            } finally {
              b(!1);
            }
          })();
        }, [A]);
        let O = n.useCallback(
            (e) => {
              (0, m.openModalLazy)(
                async () => {
                  let { default: n } = await a
                    .e("61526")
                    .then(a.bind(a, 22989));
                  return (a) => (0, l.jsx)(n, { ...a, channelId: t, clip: e });
                },
                { modalKey: S.Ut },
              );
            },
            [t],
          ),
          { onShareClick: z } = (0, L.Z)({ channelId: t, setExporting: P }),
          F = n.useCallback((e, t) => {
            (0, m.openModalLazy)(async () => {
              let { default: n } = await a.e("15915").then(a.bind(a, 799677));
              return (a) =>
                (0, l.jsx)(n, {
                  clip: e,
                  ...a,
                  onBeforeDelete: t,
                  onAfterDelete: () => a.onClose(),
                });
            });
          }, []),
          G = n.useCallback(
            (e) => {
              let { row: t } = e,
                a = V[t];
              return (0, l.jsx)(
                "div",
                {
                  className: I.clipsRow,
                  children: a.map((e) => {
                    let t = 0 === e.length;
                    return (0, l.jsx)(
                      f.Z,
                      {
                        actionsDisabled: null != k || t,
                        exporting: k === e.id,
                        isNew: B.includes(e.id),
                        onDelete: F,
                        onEdit: O,
                        onShare: (e) =>
                          z({ clip: e, onShareComplete: () => u.Mr(S.Qr) }),
                        clip: e,
                      },
                      e.id,
                    );
                  }),
                },
                "clips-gallery-".concat(t),
              );
            },
            [V, B, k, z, F, O],
          ),
          Y =
            T || 0 !== V.length
              ? T
                ? (0, l.jsx)("div", {
                    className: I.spinnerContainer,
                    children: (0, l.jsx)(m.Spinner, {}),
                  })
                : (0, l.jsx)(m.List, {
                    className: I.clipGrid,
                    sections: [V.length],
                    sectionHeight: 0,
                    rowHeight: 328.25,
                    renderRow: G,
                  })
              : (0, l.jsx)(E.Z, {
                  isEmptyBecauseQuery: w.length > 0,
                  closePopout: s,
                });
        return (0, l.jsx)(m.ModalRoot, {
          size: m.ModalSize.DYNAMIC,
          transitionState: o,
          className: I.root,
          children: (0, l.jsxs)(C.Gt, {
            value: H,
            children: [
              (0, l.jsx)(N.Z, {
                onClose: s,
                filterQuery: Z,
                setFilterQuery: _,
                sortOrder: j,
                setSortOrder: M,
              }),
              Y,
            ],
          }),
        });
      }
    },
    937784: function (e, t, a) {
      a.d(t, {
        e: function () {
          return C;
        },
      });
      var l = a(735250);
      a(470079);
      var n = a(481060),
        s = a(592125),
        i = a(703558),
        o = a(626135),
        r = a(709054),
        c = a(127654),
        d = a(61994),
        u = a(39604),
        m = a(356659),
        p = a(981631);
      async function C(e, t) {
        let { channelId: C, editMetadata: v, analyticsLocations: h } = t,
          x = s.Z.getChannel(C);
        if (null != x)
          try {
            var g;
            let t = await (0, u.rO)(e, v),
              a =
                null !== (g = e.name) && void 0 !== g
                  ? g
                  : (0, m.yl)(r.default.extractTimestamp(e.id)),
              l = (0, d.Z)(a);
            (0, c.d)(
              [
                new File([t], "".concat("" !== l ? l : "clip", ".mp4"), {
                  type: "video/mp4",
                }),
              ],
              x,
              i.d.ChannelMessage,
              { filesMetadata: [{ clip: e }] },
            ),
              o.default.track(p.rMx.CLIP_SHARED, {
                location_stack: h,
                guild_id: x.guild_id,
                channel_id: x.id,
                channel_type: x.type,
                application_id: e.applicationId,
                clip_id: e.id,
              });
          } catch (e) {
            throw (m.jF.error(e), e);
          }
        else
          (0, n.openModalLazy)(async () => {
            let { default: t } = await a.e("99617").then(a.bind(a, 502801));
            return (a) => (0, l.jsx)(t, { ...a, clip: e, editMetadata: v });
          });
      }
    },
    572720: function (e, t, a) {
      a.d(t, {
        l: function () {
          return s;
        },
      });
      var l = a(470079),
        n = a(579806);
      function s(e) {
        return (0, l.useMemo)(
          () =>
            null == n.Z.clips.getClipProtocolURLFromPath
              ? null
              : n.Z.clips.getClipProtocolURLFromPath(e.filepath),
          [e.filepath],
        );
      }
    },
    680056: function (e, t, a) {
      var l = a(470079),
        n = a(906732),
        s = a(407316),
        i = a(937784);
      t.Z = (e) => {
        let { channelId: t, setExporting: a } = e,
          { analyticsLocations: o } = (0, n.ZP)();
        return {
          onShareClick: l.useCallback(
            async (e) => {
              let {
                clip: l,
                cropData: n,
                applicationAudioEnabled: r,
                voiceAudioEnabled: c,
                onShareComplete: d,
              } = e;
              a(l.id);
              try {
                var u, m, p, C, v, h, x, g, L, f;
                let e = (0, s.W)(t);
                await (0, i.e)(l, {
                  channelId: e ? t : void 0,
                  analyticsLocations: o,
                  editMetadata: {
                    start:
                      null !==
                        (h =
                          null !== (v = null == n ? void 0 : n.start) &&
                          void 0 !== v
                            ? v
                            : null === (u = l.editMetadata) || void 0 === u
                              ? void 0
                              : u.start) && void 0 !== h
                        ? h
                        : 0,
                    end:
                      null !==
                        (g =
                          null !== (x = null == n ? void 0 : n.end) &&
                          void 0 !== x
                            ? x
                            : null === (m = l.editMetadata) || void 0 === m
                              ? void 0
                              : m.end) && void 0 !== g
                        ? g
                        : l.length / 1e3,
                    applicationAudio:
                      null ===
                        (L =
                          null != r
                            ? r
                            : null === (p = l.editMetadata) || void 0 === p
                              ? void 0
                              : p.applicationAudio) ||
                      void 0 === L ||
                      L,
                    voiceAudio:
                      null ===
                        (f =
                          null != c
                            ? c
                            : null === (C = l.editMetadata) || void 0 === C
                              ? void 0
                              : C.voiceAudio) ||
                      void 0 === f ||
                      f,
                  },
                });
              } catch (e) {
              } finally {
                null == d || d(), a(null);
              }
            },
            [t, o, a],
          ),
        };
      };
    },
    962399: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return s;
        },
      });
      var l = a(735250);
      a(470079);
      var n = a(325767);
      function s(e) {
        let {
          width: t = 24,
          height: a = 24,
          color: s = "currentColor",
          foreground: i,
          ...o
        } = e;
        return (0, l.jsx)("svg", {
          ...(0, n.Z)(o),
          width: t,
          height: a,
          viewBox: "0 0 18 20",
          children: (0, l.jsx)("path", {
            fill: s,
            className: i,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.17187 0H9.83854V0.833333H8.17187V0ZM8.17324 0.833419V1.75009H9.83991V0.833419H8.17324ZM8.17324 4.16662V5.41675H9.83991V4.16662H11.5066V5.83325H15.6719V14.1666H11.5066V15.8333H16.5052C16.9654 15.8333 17.3385 15.4602 17.3385 14.9999V4.99992C17.3385 4.53968 16.9654 4.16659 16.5052 4.16659H9.83991V3.58342H8.17324V4.16659H1.50521C1.04497 4.16659 0.671875 4.53968 0.671875 4.99992V14.9999C0.671875 15.4602 1.04497 15.8333 1.50521 15.8333H6.50658V14.1666H2.33854V5.83325H6.50658V4.16662H8.17324ZM8.17324 7.25008V9.08342H9.83991V7.25008H8.17324ZM8.17324 10.9167V12.7501H9.83991V10.9167H8.17324ZM8.17324 14.5834V16.4167H9.83991V14.5834H8.17324ZM9.83854 19.1668V20H8.17187V19.1667H8.17324V18.2501H9.83991V19.1668H9.83854Z",
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=be50d8687d3cd1cf08dc.js.map
